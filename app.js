/* ============================================================
   Scrum Trainer — shared quiz engine (multi-certification)
   Banks are registered into window.BANKS by data/*.js files.
   ============================================================ */

/* Order certifications appear in the dropdown. Unknown/missing ids are skipped. */
const CERT_ORDER = ["psm-i","pspo-i","pspo-ai","pal-e","psf","psd","psk","ppdv"];

function shuffle(a){a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
const $=id=>document.getElementById(id);

const app={
  bank:null, items:[], idx:0, mode:"practice", timed:false,
  timeLeft:0, timer:null, finished:false,

  /* ---------- init / certification switching ---------- */
  init(){
    const banks=window.BANKS||{};
    const ids=CERT_ORDER.filter(id=>banks[id]);
    Object.keys(banks).forEach(id=>{if(!ids.includes(id))ids.push(id);});
    const sel=$("cert");
    sel.innerHTML=ids.map(id=>`<option value="${id}">${banks[id].short} — ${banks[id].name}</option>`).join("");
    sel.onchange=()=>this.setCert(sel.value);
    $("count").onchange=()=>this.updatePool();
    $("mode").onchange=()=>this.syncControls();
    if(ids.length){this.setCert(ids[0]);}
    else{$("start").innerHTML='<p style="color:var(--bad)">No question banks loaded. Check the data/ files.</p>';}
  },

  setCert(id){
    this.bank=window.BANKS[id];
    // topic chips
    const t=$("topics");t.innerHTML="";
    Object.keys(this.bank.cats).forEach(k=>{
      const b=document.createElement("button");
      b.className="chip on";b.dataset.cat=k;b.textContent=this.bank.cats[k];
      b.onclick=()=>{b.classList.toggle("on");this.updatePool();};
      t.appendChild(b);
    });
    // meta line
    $("certMeta").innerHTML=`Real exam: <b>${this.bank.examCount}</b> questions · <b>${this.bank.minutes}</b> min · pass <b>${this.bank.pass}%</b> · `+
      `<a href="${this.bank.url}" target="_blank" rel="noopener">official page ↗</a><br><span class="src">Source: ${this.bank.source}</span>`;
    // starter warning
    $("statusNote").innerHTML = this.bank.status==="starter"
      ? '⚠ <b>Starter bank</b> — original community-style questions grounded in the official guide, still being expanded &amp; reviewed. Pair with the free official Open assessment.'
      : '';
    $("statusNote").className = this.bank.status==="starter" ? "note warn-note" : "note";
    // exam button
    $("examBtn").textContent=`🎓 Full exam — ${this.bank.examCount} Q · ${this.bank.minutes} min`;
    this.syncControls();
    this.updatePool();
    this.loadStats();
  },

  syncControls(){
    // exam mode → timed on by default; practice → optional
    if($("mode").value==="exam"){$("timed").checked=true;}
  },

  selectedCats(){
    return [...document.querySelectorAll("#topics .chip.on")].map(c=>c.dataset.cat);
  },

  filteredPool(){
    const cats=this.selectedCats();
    return this.bank.questions.filter(q=>cats.includes(q.cat));
  },

  updatePool(){
    const pool=this.filteredPool();
    let n=parseInt($("count").value,10);
    const use=(n===0)?pool.length:Math.min(n,pool.length);
    const cats=this.selectedCats();
    let msg=`<b>${pool.length}</b> questions in ${cats.length} selected topic(s) → quiz will use <b>${use}</b>.`;
    if(!cats.length)msg='<span style="color:var(--bad)">Select at least one topic.</span>';
    $("poolInfo").innerHTML=msg;
    $("startBtn").disabled=!cats.length||pool.length===0;
  },

  loadStats(){
    const key="trainer_"+this.bank.id;
    let a=[];try{a=JSON.parse(localStorage.getItem(key)||"[]");}catch(e){}
    const el=$("stats");
    if(!a.length){el.innerHTML="<span>No attempts yet for this certification.</span>";return;}
    const best=Math.max(...a.map(x=>x.pct));
    const last=a[a.length-1];
    el.innerHTML=`<span>Attempts: <b>${a.length}</b></span>`+
      `<span>Best: <b>${best}%</b></span>`+
      `<span>Last: <b>${last.pct}%</b> ${last.passed?'✅':'❌'}</span>`;
  },

  /* ---------- start a session ---------- */
  start(){
    const cats=this.selectedCats();if(!cats.length)return;
    this.mode=$("mode").value;
    this.timed=$("timed").checked;
    let pool=shuffle(this.filteredPool());
    let n=parseInt($("count").value,10);
    if(n>0&&n<pool.length)pool=pool.slice(0,n);
    const perQ=Math.round(this.bank.minutes*60/this.bank.examCount);
    this.begin(pool,this.mode,this.timed,this.timed?pool.length*perQ:0);
  },

  startExam(){
    this.mode="exam";this.timed=true;
    let pool=shuffle(this.bank.questions.slice());
    if(pool.length>this.bank.examCount)pool=pool.slice(0,this.bank.examCount);
    this.begin(pool,"exam",true,this.bank.minutes*60);
  },

  begin(qs,mode,timed,timeLimit){
    this.items=qs.map(q=>({type:q.type,q:q.q,exp:q.exp,cat:q.cat,opts:shuffle(q.opts),selected:[],checked:false}));
    this.idx=0;this.finished=false;this.mode=mode;this.timed=timed;this.timeLeft=timeLimit;
    $("start").classList.add("hide");$("results").classList.add("hide");$("quiz").classList.remove("hide");
    if(this.timer){clearInterval(this.timer);this.timer=null;}
    if(timed){$("timer").classList.remove("hide");this.tick();this.timer=setInterval(()=>this.tick(),1000);}
    else{$("timer").classList.add("hide");}
    this.render();
  },

  tick(){
    if(this.timeLeft<=0){clearInterval(this.timer);this.submit();return;}
    const m=Math.floor(this.timeLeft/60),s=this.timeLeft%60;
    const t=$("timer");t.textContent=`⏱ ${m}:${String(s).padStart(2,"0")}`;
    t.classList.toggle("low",this.timeLeft<=Math.max(30,this.items.length));
    this.timeLeft--;
  },

  render(){
    const it=this.items[this.idx],total=this.items.length;
    $("counter").textContent=`Question ${this.idx+1} of ${total}`;
    $("pbar").style.width=(this.idx/total*100)+"%";
    const nCorrect=it.opts.filter(o=>o.c).length;
    const typeLabel=it.type==="multi"?`Multiple answer — select ${nCorrect}`
      :it.type==="tf"?"True / False":"Single answer";
    const isMulti=it.type==="multi";
    let html=`<span class="qtype">${typeLabel}</span>`+
      (this.bank.cats[it.cat]?`<span class="qcat">${this.bank.cats[it.cat]}</span>`:"")+
      `<p class="qtext">${it.q}</p>`;
    it.opts.forEach((o,i)=>{
      const sel=it.selected.includes(i);
      let cls="opt"+(sel?" sel":"");let mark="";
      if(it.checked){
        if(o.c){cls="opt correct";mark='<span class="mk">✔ correct</span>';}
        else if(sel){cls="opt wrong";mark='<span class="mk">✗ your pick</span>';}
      }
      html+=`<label class="${cls}" onclick="app.toggle(${i})">`+
        `<input type="${isMulti?'checkbox':'radio'}" ${sel?'checked':''} ${it.checked?'disabled':''} onclick="event.preventDefault()">`+
        `<span>${o.t}</span>${mark}</label>`;
    });
    $("qbox").innerHTML=html;
    $("expbox").innerHTML=it.checked?`<div class="exp"><b>Explanation:</b> ${it.exp}</div>`:"";
    $("prevBtn").disabled=this.idx===0;
    const last=this.idx===total-1;
    $("checkBtn").classList.toggle("hide",this.mode!=="practice"||it.checked);
    $("nextBtn").classList.toggle("hide",last);
    $("finishBtn").classList.toggle("hide",!last);
    const lock=this.mode==="practice"&&!it.checked;
    $("nextBtn").disabled=lock;$("finishBtn").disabled=lock;
    this.palette();
  },

  palette(){
    const p=$("palette");p.innerHTML="";
    this.items.forEach((it,i)=>{
      const d=document.createElement("div");
      d.className="pdot"+(it.selected.length?" done":"")+(i===this.idx?" cur":"");
      d.textContent=i+1;d.onclick=()=>{this.idx=i;this.render();};
      p.appendChild(d);
    });
  },

  toggle(i){
    const it=this.items[this.idx];
    if(it.checked)return;
    if(it.type==="multi"){const k=it.selected.indexOf(i);if(k>=0)it.selected.splice(k,1);else it.selected.push(i);}
    else{it.selected=[i];}
    this.render();
  },

  check(){const it=this.items[this.idx];if(!it.selected.length)return;it.checked=true;this.render();},

  isCorrect(it){
    const correct=it.opts.map((o,i)=>o.c?i:-1).filter(i=>i>=0).sort();
    const sel=it.selected.slice().sort();
    return correct.length===sel.length&&correct.every((v,i)=>v===sel[i]);
  },

  next(){if(this.idx<this.items.length-1){this.idx++;this.render();}},
  prev(){if(this.idx>0){this.idx--;this.render();}},

  submit(){
    if(this.timer){clearInterval(this.timer);this.timer=null;}
    this.finished=true;
    const total=this.items.length;
    let correct=0;this.items.forEach(it=>{if(this.isCorrect(it))correct++;});
    const pct=total?Math.round(correct/total*100):0;
    const passed=pct>=this.bank.pass;
    const key="trainer_"+this.bank.id;
    let a=[];try{a=JSON.parse(localStorage.getItem(key)||"[]");}catch(e){}
    a.push({date:Date.now(),mode:this.mode,count:total,correct,pct,passed});
    try{localStorage.setItem(key,JSON.stringify(a.slice(-50)));}catch(e){}
    this.results(correct,total,pct,passed);
  },

  results(correct,total,pct,passed){
    $("quiz").classList.add("hide");
    const r=$("results");r.classList.remove("hide");
    let html=`<div class="score"><div class="pct ${passed?'pass':'fail'}">${pct}%</div>`+
      `<div class="verdict ${passed?'pass':'fail'}">${passed?'PASS ✅':'NOT YET ❌'}</div>`+
      `<div class="rsum"><span>${this.bank.short}</span><span>Correct: ${correct}/${total}</span><span>Pass mark: ${this.bank.pass}%</span></div></div>`;
    html+=`<div class="nav" style="justify-content:center;margin-top:18px">`+
      `<button class="btn" onclick="app.home()">↻ New session</button></div>`;
    html+=`<div class="review"><h3>Review</h3>`;
    this.items.forEach((it,n)=>{
      const ok=this.isCorrect(it);
      const yours=it.selected.length?it.selected.map(i=>it.opts[i].t).join("; "):"(no answer)";
      const cors=it.opts.filter(o=>o.c).map(o=>o.t).join("; ");
      html+=`<div class="ritem"><span class="badge ${ok?'ok':'no'}">${ok?'Correct':'Wrong'}</span>`+
        `<div class="rq">${n+1}. ${it.q}</div>`+
        `<div class="ra you">Your answer: ${yours}</div>`+
        (ok?'':`<div class="ra cor">Correct: ${cors}</div>`)+
        `<div class="exp" style="margin-top:8px"><b>Why:</b> ${it.exp}</div></div>`;
    });
    html+=`</div>`;
    r.innerHTML=html;window.scrollTo(0,0);
  },

  home(){
    $("results").classList.add("hide");$("quiz").classList.add("hide");$("start").classList.remove("hide");
    this.loadStats();window.scrollTo(0,0);
  }
};
