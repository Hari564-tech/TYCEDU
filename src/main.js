import { BOOKS, SUBJECTS, PRACTICE, SAMPLE_EXPLANATIONS } from "./curriculum.js";
const $ = id => document.getElementById(id);
const STORE = "swarvidya-release-v1";
const defaults = {name:"",grade:8,medium:"en",voice:"en-IN",district:"",school:"",year:"2026–27"};
const read = (key,fallback) => {try{return JSON.parse(localStorage.getItem(STORE+":"+key))??fallback}catch{return fallback}};
let profile={...defaults,...read("profile",{})}, attempts=read("attempts",[]), quiz=null, answered=false, recognition=null, supabase=null, session=null;
const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const save=(key,value)=>localStorage.setItem(STORE+":"+key,JSON.stringify(value));
function toast(msg){const e=$("toast");e.textContent=msg;e.classList.add("show");clearTimeout(toast.t);toast.t=setTimeout(()=>e.classList.remove("show"),2500)}
function books(g=profile.grade){return BOOKS.filter(b=>b.grade===Number(g))}
function mediumOK(b,m){return m==="all"||b.medium===m||b.medium==="te-en"&&(m==="te"||m==="en")}
function filtered(g,m,s){return books(g).filter(b=>mediumOK(b,m)&&(s==="all"||b.subject===s))}
function mediumName(m){return ({te:"Telugu",en:"English",ur:"Urdu","te-en":"Telugu + English"})[m]||m}
function icon(s){return ({Mathematics:"∑",Science:"✳",Biology:"◉",Physics:"ϟ","Social Studies":"◎",English:"Aa",Telugu:"అ",Hindi:"अ",Urdu:"اردو","General Science":"✳"})[s]||"▤"}
function card(b){return `<article class="book-card"><div class="book-icon">${icon(b.subject)}</div><div class="book-info"><span class="book-meta">CLASS ${b.grade} · ${esc(b.subject.toUpperCase())}</span><strong>${esc(b.title.replace(/^\d+_/,"").replaceAll("_"," "))}</strong><small>${esc(mediumName(b.medium))}${b.note?" · "+esc(b.note):""}</small><div class="book-links"><a href="${esc(b.downloadUrl)}" target="_blank" rel="noreferrer">Open official catalogue ↗</a><span>Chapter index pending</span></div></div></article>`}
function setView(view){document.querySelectorAll(".view").forEach(v=>v.classList.toggle("active",v.id==="view-"+view));document.querySelectorAll("[data-view]").forEach(v=>v.classList.toggle("active",v.dataset.view===view));window.scrollTo({top:0,behavior:"smooth"});if(view==="progress")renderProgress();if(view==="teacher")renderTeacher()}
function renderControls(){$("classSelect").value=profile.grade;$("mediumSelect").value=profile.medium;$("voiceSelect").value=profile.voice;$("libraryClass").value=profile.grade;$("libraryMedium").value=profile.medium;$("displayName").value=profile.name;$("districtSelect").value=profile.district;$("schoolName").value=profile.school;$("academicYear").value=profile.year;$("accountLabel").textContent=session?.user?.email||profile.name||"My learning"}
function renderSubjects(){
 const ids=[...new Set(books().map(b=>b.subject))];
 const palette={Mathematics:"lavender",Science:"mint",Biology:"mint",Physics:"blue","Social Studies":"peach",English:"blue",Telugu:"yellow",Hindi:"rose","General Science":"mint"};
 $("subjectGrid").innerHTML=ids.map(s=>{const count=filtered(profile.grade,profile.medium,s).length;return `<button class="subject-card ${palette[s]||"lavender"}" data-subject="${esc(s)}"><span class="subject-icon">${icon(s)}</span><span class="subject-copy"><strong>${esc(s)}</strong><small>${count} book listings for this medium</small></span><span class="subject-arrow">↗</span></button>`}).join("")||'<p class="empty-state">No listings found for this medium. Change the medium to browse available books.</p>';
 $("subjectGrid").querySelectorAll("[data-subject]").forEach(b=>b.onclick=()=>{setView("library");$("libraryClass").value=profile.grade;$("libraryMedium").value=profile.medium;$("librarySubject").value=b.dataset.subject;renderLibrary()});
}
function renderFeatured(){$("featuredBooks").innerHTML=filtered(profile.grade,profile.medium,"all").slice(0,4).map(card).join("")||'<p class="empty-state">No books are indexed for this selection.</p>'}
function renderLibrary(){
 const g=+$("libraryClass").value,m=$("libraryMedium").value,s=$("librarySubject").value,items=filtered(g,m,s);
 $("catalogueSummary").innerHTML=`<strong>${items.length}</strong> official listings <span>· Class ${g}</span> <span>· ${m==="all"?"All listed mediums":mediumName(m)}</span>`;
 $("bookGrid").innerHTML=items.map(card).join("")||'<p class="empty-state full-width">No catalogue items match these filters.</p>';
}
function renderProgress(){
 const total=attempts.length,good=attempts.filter(a=>a.correct).length;
 $("progressStats").innerHTML=`<article class="metric-card"><small>Practice attempts</small><strong>${total}</strong><span>Saved on this device</span></article><article class="metric-card"><small>Correct answers</small><strong>${total?Math.round(good/total*100):0}%</strong><span>Practice accuracy</span></article><article class="metric-card"><small>Current class</small><strong>${profile.grade}</strong><span>Academic year ${esc(profile.year)}</span></article>`;
 $("recentActivity").innerHTML=attempts.length?attempts.slice(0,20).map(a=>`<div class="activity-row"><span class="activity-check ${a.correct?"good":"try"}">${a.correct?"✓":"↻"}</span><div><strong>${esc(a.topic)}</strong><small>${esc(a.question)}</small></div><span class="activity-result">${a.correct?"Correct":"Try again"}</span></div>`).join(""):'<p class="empty-state">Your activity appears after your first practice question.</p>';
}
function renderTeacher(){
 const total=attempts.length,good=attempts.filter(a=>a.correct).length;
 $("teacherStats").innerHTML=`<article class="metric-card"><small>Local practice attempts</small><strong>${total}</strong><span>This device only</span></article><article class="metric-card"><small>Correct responses</small><strong>${total?Math.round(good/total*100):0}%</strong><span>Local sample metric</span></article><article class="metric-card"><small>Official books indexed</small><strong>${BOOKS.length}</strong><span>Classes 6–10</span></article>`;
 const grouped={};attempts.forEach(a=>{grouped[a.topic]??={n:0,c:0};grouped[a.topic].n++;if(a.correct)grouped[a.topic].c++});
 const rows=Object.entries(grouped).sort((a,b)=>a[1].c/a[1].n-b[1].c/b[1].n);
 $("weakTopics").innerHTML=rows.length?rows.map(([name,v])=>`<div class="activity-row"><div><strong>${esc(name)}</strong><small>${v.c} of ${v.n} correct</small></div><span class="activity-result">${Math.round(v.c/v.n*100)}%</span></div>`).join(""):'<p class="empty-state">Complete practice to see local topic signals. Shared classroom analytics need connected teacher accounts.</p>';
}
function renderAll(){renderSubjects();renderFeatured();renderLibrary();renderProgress();renderTeacher();$("connectionLabel").textContent=session?"School account connected":"Ready to learn";$("connectionDetail").textContent=session?"Signed in · "+session.user.email:"Progress saves on this device"}
const explain=q=>SAMPLE_EXPLANATIONS.find(x=>x.keys.some(k=>q.toLowerCase().includes(k.toLowerCase())));
async function ask(){
 const q=$("questionInput").value.trim();if(!q){toast("Speak or type a question first.");return}
 const found=explain(q),lang=profile.medium;$("answerCard").classList.remove("hidden");$("answerTitle").textContent=found?found.title:"Let's explore your question";
 if(found){$("answerText").textContent=found.text[lang]||found.text.en;$("answerSource").textContent="Supplementary sample explanation · Not a verbatim textbook extract";$("answerCard").scrollIntoView({behavior:"smooth",block:"nearest"});return}
 $("answerText").textContent="Checking the optional tutor service…";$("answerSource").textContent="AI explanations are not yet grounded to extracted AP textbook chapters.";
 try{const r=await fetch("/api/tutor",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:q,grade:profile.grade,medium:profile.medium,voiceLanguage:profile.voice,subject:"General"})});if(!r.ok)throw Error();const d=await r.json();$("answerText").textContent=d.answer;$("answerSource").textContent="AI-generated study aid · Check with your teacher and textbook."}
 catch{$("answerText").textContent=lang==="te"?"ఈ ప్రశ్నకు పాఠ్యపుస్తక ఆధారిత సమాధానం ఇంకా సిద్ధం కాలేదు. దయచేసి అధికారిక పుస్తకాన్ని తెరవండి లేదా ఉపాధ్యాయుడిని అడగండి.":lang==="ur"?"اس سوال کا نصابی جواب ابھی دستیاب نہیں ہے۔ براہِ کرم سرکاری کتاب کھولیں یا اپنے استاد سے پوچھیں۔":"A textbook-grounded answer is not available yet. Open the official textbook or ask your teacher. The AI tutor can be enabled after server configuration and lesson approval.";$("answerSource").textContent="Tutor API not configured · No unverified answer generated."}
 $("answerCard").scrollIntoView({behavior:"smooth",block:"nearest"});
}
function voice(){
 const SR=window.SpeechRecognition||window.webkitSpeechRecognition;if(!SR){toast("Voice input is unavailable in this browser. Please type.");return}
 if(recognition){try{recognition.stop()}catch{}}
 recognition=new SR();recognition.lang=profile.voice;recognition.interimResults=true;$("micButton").classList.add("listening");$("voiceStatus").textContent="Listening… speak now";
 recognition.onresult=e=>{let t="";for(let i=e.resultIndex;i<e.results.length;i++)t+=e.results[i][0].transcript;$("questionInput").value=t};
 recognition.onerror=e=>$("voiceStatus").textContent=e.error==="not-allowed"?"Microphone permission blocked. Type your question instead.":"Couldn't hear that clearly. Try again.";
 recognition.onend=()=>{$("micButton").classList.remove("listening");if($("voiceStatus").textContent.startsWith("Listening"))$("voiceStatus").textContent="I'm listening whenever you're ready."};
 try{recognition.start()}catch{toast("Microphone is already active.")}
}
function speak(){if(!("speechSynthesis"in window)){toast("Speech playback is unavailable.");return}speechSynthesis.cancel();const u=new SpeechSynthesisUtterance($("answerText").textContent);u.lang=profile.voice;u.rate=.9;speechSynthesis.speak(u)}
function startQuiz(){
 const pool=PRACTICE.filter(q=>q.grade===profile.grade);quiz=pool[Math.floor(Math.random()*pool.length)]||PRACTICE[Math.floor(Math.random()*PRACTICE.length)];answered=false;
 const lang=profile.medium,q=quiz.q[lang]||quiz.q.en,opts=quiz.opts[lang]||quiz.opts.en;
 $("practicePanel").classList.remove("hidden");$("quizTitle").textContent=quiz.subject+" · Class "+quiz.grade;$("quizCount").textContent="01 / 01";$("quizQuestion").textContent=q;$("quizOptions").innerHTML=opts.map((o,i)=>'<button class="quiz-option" data-option="'+i+'">'+esc(o)+'</button>').join("");
 $("quizOptions").querySelectorAll("button").forEach(btn=>btn.onclick=()=>check(Number(btn.dataset.option)));$("quizFeedback").classList.add("hidden");$("nextQuiz").classList.add("hidden");$("practicePanel").scrollIntoView({behavior:"smooth"});
}
function check(choiceIndex){
 if(answered||!quiz)return;answered=true;const ok=choiceIndex===quiz.a,lang=profile.medium;
 $("quizOptions").querySelectorAll("button").forEach((btn,i)=>{btn.disabled=true;if(i===quiz.a)btn.classList.add("correct");else if(i===choiceIndex&&!ok)btn.classList.add("wrong")});
 $("quizFeedback").className="quiz-feedback "+(ok?"good":"try");$("quizFeedback").textContent=(ok?"That's right! ":"Good try. ")+(quiz.why[lang]||quiz.why.en);
 attempts.unshift({topic:quiz.subject,question:quiz.q[lang]||quiz.q.en,correct:ok,at:Date.now()});attempts=attempts.slice(0,100);save("attempts",attempts);renderProgress();renderTeacher();$("nextQuiz").classList.remove("hidden");
}
async function initCloud(){
 const url=import.meta.env.VITE_SUPABASE_URL,key=import.meta.env.VITE_SUPABASE_ANON_KEY;if(!url||!key)return;
 try{const {createClient}=await import("@supabase/supabase-js");supabase=createClient(url,key);const result=await supabase.auth.getSession();session=result.data.session;supabase.auth.onAuthStateChange((_e,s)=>{session=s;renderControls();renderAll()});renderControls();renderAll()}catch(e){console.error(e);toast("School account connection unavailable. Local mode remains active.")}
}
function bind(){
 document.querySelectorAll("[data-view]").forEach(b=>b.addEventListener("click",()=>setView(b.dataset.view)));
 $("classSelect").onchange=e=>{profile.grade=+e.target.value;save("profile",profile);$("libraryClass").value=profile.grade;renderAll()};
 $("mediumSelect").onchange=e=>{profile.medium=e.target.value;save("profile",profile);$("libraryMedium").value=profile.medium;renderAll()};
 $("voiceSelect").onchange=e=>{profile.voice=e.target.value;save("profile",profile)};
 ["libraryClass","libraryMedium","librarySubject"].forEach(id=>$(id).addEventListener("change",renderLibrary));
 $("settingsButton").onclick=()=>$("settingsDialog").showModal();$("accountButton").onclick=()=>$("accountDialog").showModal();
 $("saveSettings").onclick=()=>{profile.name=$("displayName").value.trim();profile.district=$("districtSelect").value;profile.school=$("schoolName").value.trim();profile.year=$("academicYear").value;save("profile",profile);renderControls();toast("Learning settings saved.")};
 $("micButton").onclick=voice;$("askButton").onclick=ask;$("speakButton").onclick=speak;$("startPractice").onclick=startQuiz;$("nextQuiz").onclick=startQuiz;
 document.querySelectorAll("[data-question]").forEach(b=>b.onclick=()=>{$("questionInput").value=b.dataset.question;ask()});
}
function init(){bind();renderControls();renderAll();initCloud();if("serviceWorker"in navigator&&import.meta.env.PROD)navigator.serviceWorker.register("/sw.js").catch(()=>{})}
init();
