(function(root){
'use strict';
function parseFormula(formula){
 const tokens=formula.match(/[A-Z][a-z]?|\d+|[()]/g);
 if(!tokens||tokens.join('')!==formula)throw Error('Invalid formula');
 const stack=[{}];
 for(let i=0;i<tokens.length;i++){
  const t=tokens[i];
  if(t==='('){stack.push({});continue;}
  let group;
  if(t===')'){if(stack.length===1)throw Error('Unmatched parentheses');group=stack.pop();}
  else if(/^[A-Z]/.test(t))group={[t]:1};
  else throw Error('Unexpected subscript');
  let n=1;if(/^\d+$/.test(tokens[i+1]||''))n=Number(tokens[++i]);
  if(n<1)throw Error('Invalid subscript');
  for(const [e,v]of Object.entries(group))stack.at(-1)[e]=(stack.at(-1)[e]||0)+v*n;
 }
 if(stack.length!==1)throw Error('Unmatched parentheses');return stack[0];
}
const gcd=(a,b)=>b?gcd(b,a%b):a;
const validCoefficient=n=>Number.isInteger(n)&&n>=1&&n<=99;
function inventory(r,values){
 if(values.length!==r.left.length+r.right.length||!values.every(validCoefficient))throw Error('Use whole numbers from 1 to 99.');
 const sum=(fs,cs)=>fs.reduce((atoms,f,i)=>{for(const[e,n]of Object.entries(parseFormula(f)))atoms[e]=(atoms[e]||0)+n*cs[i];return atoms;},{});
 const left=sum(r.left,values.slice(0,r.left.length)),right=sum(r.right,values.slice(r.left.length));
 return [...new Set([...Object.keys(left),...Object.keys(right)])].map(element=>({element,left:left[element]||0,right:right[element]||0}));
}
function check(r,values){const atoms=inventory(r,values),balanced=atoms.every(a=>a.left===a.right),factor=values.reduce(gcd);return{atoms,balanced,factor,simplest:balanced&&factor===1};}
const api={parseFormula,gcd,validCoefficient,inventory,check};
if(typeof module!=='undefined')module.exports=api;else root.Chemistry=api;
})(typeof window==='undefined'?globalThis:window);
