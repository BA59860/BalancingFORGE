(() => {
'use strict';
const C=window.Chemistry,bank=window.REACTIONS,$=s=>document.querySelector(s);
const fmt=s=>s.replace(/(\d+)/g,'<sub>$1</sub>'),spoken=s=>s.replace(/([A-Z][a-z]?|\d+|[()])/g,'$1 ').trim();
const KEY='cfl-balancingforge-v01',ids=new Set(bank.map(r=>r.id));
let progress={score:0,streak:0,solved:[]},storageAvailable=true;
let screen='learn',mode='practice',level='Easy',current=bank[0],values=[],hints=0,completed=false,lastChanged=0;
const queues=new Map(),history=new Map();
try{const p=JSON.parse(localStorage.getItem(KEY));if(p&&Number.isSafeInteger(p.score)&&p.score>=0&&Number.isSafeInteger(p.streak)&&p.streak>=0&&Array.isArray(p.solved))progress={score:p.score,streak:p.streak,solved:[...new Set(p.solved.filter(id=>ids.has(id)))]};}catch{storageAvailable=false;}
function save(){try{localStorage.setItem(KEY,JSON.stringify(progress));}catch{storageAvailable=false;}$('#save-status').textContent=storageAvailable?'Progress stays on this device':'Storage unavailable · progress lasts for this visit';}
function stats(){$('#score').textContent=progress.score;$('#streak').textContent=progress.streak;$('#solved').textContent=progress.solved.length;}
function feedback(text,success=false){const b=$('#feedback');b.textContent=text;b.hidden=false;b.classList.toggle('success',success);}
function remember(){history.set(mode+current.id,{values:[...values],hints,completed});}
function start(r){current=r;const p=history.get(mode+r.id);values=p?[...p.values]:Array(r.left.length+r.right.length).fill(1);hints=p?.hints||0;completed=p?.completed||false;lastChanged=0;$('#feedback').hidden=true;$('#hint-box').hidden=true;render();}
function shuffle(items){const a=[...items];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function nextReaction(){
 const pool=bank.filter(r=>level==='Surprise Me'||r.level===level),key=mode+level;
 let q=queues.get(key)||[];
 if(!q.length){q=level==='Surprise Me'?shuffle(pool):[...pool];if(mode==='practice')q=[...q.filter(r=>!progress.solved.includes(r.id)),...q.filter(r=>progress.solved.includes(r.id))];q=q.filter(r=>r.id!==current.id);}
 const next=q.shift();queues.set(key,q);return next||pool.find(r=>r.id!==current.id)||pool[0];
}
function leave(){if(mode==='practice'&&!completed&&!progress.solved.includes(current.id)){progress.streak=0;save();stats();}remember();}
function renderEquation(){
 let k=0;
 $('#equation').innerHTML=[current.left,current.right].map((side,j)=>`<div class="side-group"><span class="side-label">${j?'PRODUCTS':'REACTANTS'}</span><div class="equation-side">${side.map((f,i)=>{
 const index=k++,label=`${j?'product':'reactant'} ${spoken(f)}`;
 return `${i?'<span class="operator" aria-hidden="true">+</span>':''}<div class="species"><div class="coefficient"><button data-adjust="1" data-index="${index}" aria-label="Increase ${label}">+</button><input type="text" inputmode="numeric" pattern="[0-9]*" maxlength="2" autocomplete="off" data-index="${index}" aria-label="Coefficient for ${label}" aria-describedby="coefficient-help" value="${values[index]}"><button data-adjust="-1" data-index="${index}" aria-label="Decrease ${label}">−</button></div><span class="formula" aria-label="${spoken(f)}">${fmt(f)}</span></div>`;
 }).join('')}</div></div>`).join('<span class="arrow" aria-label="yields">→</span>');
}
function render(){
 $('#reaction-title').textContent=current.title;const pool=bank.filter(r=>r.level===current.level);
 $('#reaction-meta').textContent=`${current.level.toUpperCase()} · ${current.type.toUpperCase()} · ${String(pool.indexOf(current)+1).padStart(2,'0')} / ${pool.length}${progress.solved.includes(current.id)?' · REVIEW':''}`;
 document.querySelectorAll('[data-mode]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.mode===screen)));
 document.querySelectorAll('[data-level]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.level===level)));
 $('#coach-title').textContent='Make every atom count';$('.coach-badge').textContent='PRACTICE';
 $('#hint').textContent=hints>=3?'All 3 hints used':hints?`Next hint (${hints}/3 used)`:'Give me a hint';$('#hint').disabled=hints>=3;
 renderEquation();updateCounts();stats();
}
const step=(n,title,text)=>`<div class="guide-step"><span class="step-number">${n}</span><p><strong>${title}</strong>${text}</p></div>`;
function updateCounts(){
 const {atoms,balanced,simplest}=C.check(current,values),matched=atoms.filter(a=>a.left===a.right).length;
 $('#balance-status').textContent=simplest?'All atoms balanced ✓':balanced?'Balanced · simplify the ratio':`${matched} of ${atoms.length} elements balanced`;
 $('#balance-status').classList.toggle('balanced',simplest);
 $('#atom-rows').innerHTML=atoms.map(a=>`<tr><td><span class="element">${a.element}</span></td><td>${a.left}</td><td>${a.right}</td><td class="${a.left===a.right?'matched':'unmatched'}">${a.left===a.right?'✓ Matched':'≠ Adjust'}</td></tr>`).join('');
 const formula=[...current.left,...current.right][lastChanged],coefficient=values[lastChanged],entries=Object.entries(C.parseFormula(formula));
 $('#count-detail').innerHTML=`${coefficient} ${fmt(formula)} contributes ${entries.map(([e,n])=>`${coefficient} × ${n} = ${coefficient*n} ${e}`).join('; ')} atoms.`;
  const earned=Math.max(2,{Easy:10,Medium:20,Challenge:30}[current.level]-2*hints),review=progress.solved.includes(current.id);
  $('#guide').innerHTML=step(1,'Build the smallest ratio.','Match every element, using whole-number coefficients from 1 to 99. The formulas stay fixed.')+step(2,review?'A little review.':`${earned} points available.`,review?'You already earned credit for this reaction. Revisit it as often as you like.':'Hints reduce available points by 2 each. A wrong check ends your streak; you can keep trying.');
 document.querySelectorAll('[data-adjust]').forEach(b=>{b.disabled=!C.validCoefficient(values[+b.dataset.index]+Number(b.dataset.adjust));});
}
function changeCoefficient(index,value){
 if(!Number.isInteger(index)||index<0||index>=values.length||!C.validCoefficient(value))throw Error('Choose a whole number from 1 to 99.');
 values[index]=value;lastChanged=index;$('#feedback').hidden=true;$('#hint-box').hidden=true;
 const input=$(`input[data-index="${index}"]`);input.value=value;input.removeAttribute('aria-invalid');updateCounts();remember();
}
function validInputs(){for(const input of document.querySelectorAll('.coefficient input'))if(!/^[1-9]\d?$/.test(input.value)){feedback('Use a whole-number coefficient from 1 to 99. No zeroes, negatives, or decimals.');input.setAttribute('aria-invalid','true');input.focus();return false;}return true;}
function checkAnswer(){
 if(screen!=='practice')throw Error('Switch to Practice Mode to check coefficients.');
 if(!validInputs())return{status:'invalid'};
 const r=C.check(current,values);
 if(!r.balanced){if(mode==='practice'&&!completed&&!progress.solved.includes(current.id)){progress.streak=0;save();stats();}feedback(`Not balanced yet. ${r.atoms.filter(a=>a.left!==a.right).map(a=>`${a.element}: ${a.left} on the left, ${a.right} on the right`).join('; ')}. Adjust a coefficient and recount every element.`);return{status:'unbalanced',atoms:r.atoms};}
 if(!r.simplest){feedback(`The atoms match! Now simplify: divide ALL coefficients by ${r.factor} for the smallest whole-number ratio. Your streak is unchanged.`);return{status:'simplify',factor:r.factor};}
 if(completed||progress.solved.includes(current.id))feedback('Balanced! You already earned credit for this reaction. Try the next one for a new challenge.',true);
 else{const earned=Math.max(2,{Easy:10,Medium:20,Challenge:30}[current.level]-2*hints);progress.score+=earned;progress.streak++;progress.solved.push(current.id);save();stats();updateCounts();feedback(`Balanced! +${earned} points · ${progress.streak} in a row. Every atom is accounted for.`,true);}
 completed=true;remember();return{status:'correct',score:progress.score,streak:progress.streak};
}
function showHint(){
 if(hints>=3||!validInputs())return;
 const r=C.check(current,values);let text;
 if(r.balanced)text=r.simplest?'All atom totals match and the ratio is simplest. Use Check Answer to finish.':`The atom totals match. Divide every coefficient by their common factor, ${r.factor}.`;
 else if(hints===0)text=current.tip;
 else if(hints===1){const row=r.atoms.find(a=>a.left!==a.right),part=(fs,offset)=>fs.map((f,i)=>({f,n:C.parseFormula(f)[row.element]||0,c:values[offset+i]})).filter(x=>x.n).map(x=>`${x.c} × ${x.n} from ${x.f}`).join(' + ');text=`${row.element} is not matched. Reactants: ${part(current.left,0)} = ${row.left}. Products: ${part(current.right,current.left.length)} = ${row.right}. A coefficient changes every atom in that formula, so recount the other rows too.`;}
 else{const i=values.findIndex((v,j)=>v!==current.answer[j]),f=[...current.left,...current.right][i],[e,n]=Object.entries(C.parseFormula(f))[0];text=`One foothold in the smallest ratio: use ${current.answer[i]} for ${f} on the ${i<current.left.length?'reactant':'product'} side. That contributes ${current.answer[i]} × ${n} = ${current.answer[i]*n} ${e} atoms. Use the inventory to work out the remaining coefficients.`;}
 hints++;remember();$('#hint-box').textContent=`Hint ${hints} of 3 · ${text}`;$('#hint-box').hidden=false;$('#hint').textContent=hints>=3?'All 3 hints used':`Next hint (${hints}/3 used)`;$('#hint').disabled=hints>=3;updateCounts();
}
$('#equation').addEventListener('click',e=>{const b=e.target.closest('[data-adjust]');if(b)changeCoefficient(+b.dataset.index,values[+b.dataset.index]+Number(b.dataset.adjust));});
$('#equation').addEventListener('input',e=>{const input=e.target;if(!input.matches('input[data-index]'))return;if(/^[1-9]\d?$/.test(input.value))changeCoefficient(+input.dataset.index,Number(input.value));else{if(input.value!=='')input.value=values[+input.dataset.index];input.setAttribute('aria-invalid','true');feedback('Coefficients must be whole numbers from 1 to 99. The inventory keeps your last valid value until you enter a valid number.');}});
$('#equation').addEventListener('focusout',e=>{if(e.target.matches('input[data-index]')){e.target.value=values[+e.target.dataset.index];e.target.removeAttribute('aria-invalid');}});
$('#equation').addEventListener('keydown',e=>{if(!e.target.matches('input[data-index]'))return;const i=+e.target.dataset.index;if(e.key==='ArrowUp'||e.key==='ArrowDown'){e.preventDefault();const v=values[i]+(e.key==='ArrowUp'?1:-1);if(C.validCoefficient(v))changeCoefficient(i,v);}else if(e.key==='Enter'){e.preventDefault();checkAnswer();}});
$('#check').addEventListener('click',checkAnswer);$('#hint').addEventListener('click',showHint);
$('#reset').addEventListener('click',()=>{values.fill(1);lastChanged=0;$('#feedback').hidden=true;$('#hint-box').hidden=true;renderEquation();updateCounts();remember();feedback('Coefficients reset to 1. Your hints and earned credit are unchanged.');});
$('#next').addEventListener('click',()=>{leave();start(nextReaction());$('#reaction-title').focus();});
function showMode(next,focus=false){
 if(screen==='practice'&&next!=='practice')leave();
 screen=next;
 $('#learn-workspace').hidden=screen!=='learn';$('#practice-workspace').hidden=screen!=='practice';
 $('.stats').hidden=screen!=='practice';$('.difficulty').hidden=screen!=='practice';
 document.querySelectorAll('[data-mode]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.mode===screen)));
 if(focus){const target=$(screen==='learn'?'#lesson-title':'#reaction-title');target?.focus({preventScroll:true});$('#workspace').scrollIntoView({block:'start'});}
}
document.querySelectorAll('[data-mode]').forEach(b=>b.addEventListener('click',()=>{if(screen!==b.dataset.mode)showMode(b.dataset.mode,true);}));
document.querySelectorAll('[data-level]').forEach(b=>b.addEventListener('click',()=>{if(level===b.dataset.level&&level!=='Surprise Me')return;leave();level=b.dataset.level;if(level==='Surprise Me')start(nextReaction());else{const pool=bank.filter(r=>r.level===level),next=pool.find(r=>r.id!==current.id&&!progress.solved.includes(r.id))||pool[0];queues.set(mode+level,pool.filter(r=>r.id!==next.id));start(next);}}));
start(current);save();
window.BalancingLessons.mount($('#learn-workspace'),()=>showMode('practice',true));
showMode('learn');
// Progressive enhancement for browsers that support the proposed WebMCP interface.
if(document.modelContext?.registerTool){
 const lifecycle=new AbortController(),register=tool=>{try{Promise.resolve(document.modelContext.registerTool(tool,{signal:lifecycle.signal})).catch(()=>{});}catch{}};
 register({name:'read_balancing_exercise',description:'Read the visible tutorial lesson or Practice equation, coefficients and atom inventory.',inputSchema:{type:'object',properties:{},additionalProperties:false},annotations:{readOnlyHint:true},execute:()=>screen==='learn'?{mode:screen,...window.BalancingLessons.read()}:({id:current.id,mode:screen,level:current.level,left:current.left,right:current.right,coefficients:[...values],atoms:C.inventory(current,values)})});
 register({name:'set_balancing_coefficients',description:'In Practice Mode, set all coefficients without checking the answer or awarding points.',inputSchema:{type:'object',properties:{coefficients:{type:'array',items:{type:'integer',minimum:1,maximum:99}}},required:['coefficients'],additionalProperties:false},execute:input=>{if(screen!=='practice')throw Error('Switch to Practice Mode to change coefficients.');if(!Array.isArray(input?.coefficients)||input.coefficients.length!==values.length||!input.coefficients.every(C.validCoefficient))throw Error('Supply one whole number from 1 to 99 for each formula.');input.coefficients.forEach((v,i)=>changeCoefficient(i,v));return{coefficients:[...values],atoms:C.inventory(current,values)};}});
 register({name:'check_balancing_answer',description:'Check the visible coefficients; Practice Mode updates points and streak.',inputSchema:{type:'object',properties:{},additionalProperties:false},execute:checkAnswer});
 window.addEventListener('pagehide',()=>lifecycle.abort(),{once:true});
}
})();
