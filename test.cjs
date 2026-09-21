/* Run with Node: node test.cjs. No dependencies. */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const C = require('./chemistry.js');
const sandbox = {window:{}};
vm.runInNewContext(fs.readFileSync(__dirname+'/reactions.js','utf8'),sandbox);
const bank = JSON.parse(JSON.stringify(sandbox.window.REACTIONS));
assert.equal(bank.length,90);
assert.equal(new Set(bank.map(r=>r.id)).size,90);
assert.equal(new Set(bank.map(r=>r.left.join('+')+'>'+r.right.join('+'))).size,90);
for(const level of ['Easy','Medium','Challenge'])assert.equal(bank.filter(r=>r.level===level).length,30);
assert.deepEqual(C.parseFormula('Al2(SO4)3'),{Al:2,S:3,O:12});
assert.deepEqual(C.parseFormula('(NH4)2Cr2O7'),{N:2,H:8,Cr:2,O:7});
assert.deepEqual(C.parseFormula('CH3OH'),{C:1,H:4,O:1});
assert.deepEqual(C.parseFormula('Ca(NO3)2'),{Ca:1,N:2,O:6});
assert.deepEqual(C.parseFormula('K4(ON(SO3)2)2'),{K:4,O:14,N:2,S:4});
for(const f of ['H0','H2O!','Ca(OH2','2H2O'])assert.throws(()=>C.parseFormula(f));
for(const n of [0,-1,1.2,100,NaN,Infinity,'2'])assert.equal(C.validCoefficient(n),false);
for(const r of bank){
 assert.ok(r.tip.length>40,r.id+' hint missing');
 const check=C.check(r,r.answer);assert.ok(check.simplest,r.id+' '+r.title+' '+JSON.stringify(check));
 // Independent mass-balance matrix rank: each bank equation has one ratio, not an ambiguous free parameter.
 const formulas=[...r.left,...r.right].map(C.parseFormula);
 const matrix=check.atoms.map(({element})=>formulas.map((f,i)=>(f[element]||0)*(i<r.left.length?1:-1)));
 let rank=0;
 for(let col=0;col<formulas.length;col++){
  const pivot=matrix.findIndex((row,i)=>i>=rank&&Math.abs(row[col])>1e-9);
  if(pivot<0)continue;
  [matrix[rank],matrix[pivot]]=[matrix[pivot],matrix[rank]];
  const v=matrix[rank][col];matrix[rank]=matrix[rank].map(x=>x/v);
  for(let i=0;i<matrix.length;i++)if(i!==rank){const factor=matrix[i][col];matrix[i]=matrix[i].map((x,j)=>x-factor*matrix[rank][j]);}
  rank++;
 }
 assert.equal(formulas.length-rank,1,r.id+' ambiguous ratio');
 const doubled=r.answer.map(n=>n*2);
 if(doubled.every(C.validCoefficient)){const result=C.check(r,doubled);assert.ok(result.balanced);assert.equal(result.simplest,false);assert.equal(result.factor,2);}
 const wrong=[...r.answer];wrong[0]++;
 assert.equal(C.check(r,wrong).balanced,false,r.id+' wrong coefficient was accepted');
}
console.log('PASS: 90 unique reactions, 30 per level, atom conservation, simplest ratios, unambiguous solutions, wrong-answer rejection, parentheses, repeated elements, and coefficient bounds.');
console.log(Object.fromEntries([...new Set(bank.map(r=>r.type))].map(type=>[type,bank.filter(r=>r.type===type).length])));
