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

// Tutorial examples and decisions share the production chemistry checker.
const L = require('./lessons.js');
const worked = L.lessons.filter(l=>l.kind==='worked');
assert.equal(worked.length,4);
for (const lesson of worked) {
 for (const step of lesson.steps) {
  assert.equal(step.values.length,lesson.left.length+lesson.right.length);
  assert.ok(step.values.every(C.validCoefficient));
  const result=C.check(lesson,step.values);
  assert.ok(result.atoms.every(a=>Number.isInteger(a.left)&&Number.isInteger(a.right)));
 }
 assert.ok(C.check(lesson,lesson.steps.at(-1).values).simplest,lesson.title);
}
assert.deepEqual(C.inventory(L.lessons[1],[1,1,2]),[
 {element:'H',left:2,right:4},{element:'O',left:2,right:2}
]);
assert.deepEqual(C.inventory(L.lessons[3],[2,3,1,6]),[
 {element:'Na',left:6,right:6},{element:'P',left:2,right:2},
 {element:'O',left:8,right:8},{element:'Ca',left:3,right:3},
 {element:'Cl',left:6,right:6}
]);
assert.deepEqual(C.inventory(L.lessons[4],[1,1,3,4]),[
 {element:'C',left:3,right:3},{element:'H',left:8,right:8},{element:'O',left:2,right:10}
]);
for(const q of [...L.guided,L.countQuestion])for(let i=0;i<q.choices.length;i++){
 const feedback=L.answerFeedback(q,i);
 assert.equal(feedback.correct,i===q.answer);
 assert.ok(feedback.text.length>35);
}
const ammonia={left:['N2','H2'],right:['NH3']};
assert.ok(!C.check(ammonia,L.guided[1].values).balanced);
const multiple=C.check(ammonia,L.guided[2].values);
assert.ok(multiple.balanced);assert.ok(!multiple.simplest);assert.equal(multiple.factor,2);
assert.ok(C.check(ammonia,[1,3,2]).simplest);
assert.ok(C.check({left:['C2H6','O2'],right:['CO2','H2O']},[2,7,4,6]).simplest);
console.log('PASS: tutorial atom inventories, all worked final ratios, ethane fraction example, guided choices, and simplification.');
