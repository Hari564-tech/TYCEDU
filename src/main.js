const $ = (id) => document.getElementById(id);
const STORAGE_KEY = "swarvidya-demo-v1";

const lessons = [
  { keys:["photosynthesis","photo synthesis","ప్రకాశ సంశ్లేషణ","प्रकाश संश्लेषण"], title:"Photosynthesis", subject:"Science",
    answers:{
      "te-IN":"మొక్కలు తమ ఆహారాన్ని తామే తయారు చేసుకునే ప్రక్రియను కిరణజన్య సంయోగక్రియ అంటారు. ఆకులు సూర్యకాంతి, నీరు, గాలిలోని కార్బన్ డయాక్సైడ్‌ను ఉపయోగించి ఆహారం తయారు చేస్తాయి. ఈ ప్రక్రియలో ఆక్సిజన్ కూడా విడుదల అవుతుంది.",
      "hi-IN":"पौधे अपना भोजन खुद बनाने की प्रक्रिया को प्रकाश संश्लेषण कहते हैं। पत्तियाँ सूरज की रोशनी, पानी और हवा से कार्बन डाइऑक्साइड लेकर भोजन बनाती हैं। इस प्रक्रिया में ऑक्सीजन भी निकलती है।",
      "en-IN":"Photosynthesis is how green plants make their own food. Leaves use sunlight, water and carbon dioxide from the air to make food. Oxygen is released during this process."
    }, extra:"Remember: sunlight + water + carbon dioxide → food + oxygen." },
  { keys:["water cycle","watercycle","నీటి చక్రం","जल चक्र"], title:"The water cycle", subject:"Science",
    answers:{
      "te-IN":"నీరు భూమి నుంచి వేడితో ఆవిరై పైకి వెళ్తుంది. చల్లబడిన ఆవిరి మేఘాలుగా మారుతుంది. మేఘాల నుంచి వర్షం పడుతుంది. ఈ విధంగా నీరు భూమి, ఆకాశం మధ్య తిరుగుతూ ఉంటుంది. దీనినే నీటి చక్రం అంటారు.",
      "hi-IN":"सूरज की गर्मी से पानी भाप बनकर ऊपर जाता है। ठंडा होकर भाप बादल बनाती है। बादलों से बारिश होती है और पानी फिर धरती पर लौट आता है। इसे जल चक्र कहते हैं।",
      "en-IN":"The Sun heats water and turns it into vapour. The vapour cools and forms clouds. Then rain falls and water returns to rivers, lakes and oceans. This repeating journey is called the water cycle."
    }, extra:"The three key stages are evaporation, condensation and precipitation." },
  { keys:["fraction","fractions","భిన్నాలు","भिन्न"], title:"Fractions", subject:"Maths",
    answers:{
      "te-IN":"ఒక వస్తువును సమాన భాగాలుగా విభజించినప్పుడు, వాటిలో కొన్ని భాగాలను భిన్నం అంటాం. ఉదాహరణకు 1/2 అంటే రెండు సమాన భాగాల్లో ఒక భాగం. పై సంఖ్యను లవం, కింది సంఖ్యను హారం అంటారు.",
      "hi-IN":"जब किसी चीज़ को बराबर भागों में बाँटते हैं, तो उन भागों को दिखाने के लिए भिन्न का उपयोग करते हैं। जैसे 1/2 का मतलब है दो बराबर भागों में से एक भाग। ऊपर की संख्या अंश और नीचे की संख्या हर कहलाती है।",
      "en-IN":"A fraction shows part of a whole. If a pizza is cut into two equal pieces and you take one, you have one-half, written as 1/2. The top number is the numerator and the bottom number is the denominator."
    }, extra:"Try this: 1/2 + 1/2 = 1 whole." },
  { keys:["noun","nouns","verb","verbs","నామవాచకం","క్రియ","संज्ञा","क्रिया"], title:"Nouns and verbs", subject:"English",
    answers:{
      "te-IN":"ఒక వ్యక్తి, ప్రదేశం, వస్తువు లేదా భావం పేరును నామవాచకం అంటారు. ఒక పని లేదా చర్యను తెలిపే పదాన్ని క్రియ అంటారు. ఉదాహరణకు: రాము పరుగెత్తాడు. ఇక్కడ రాము నామవాచకం, పరుగెత్తాడు క్రియ.",
      "hi-IN":"किसी व्यक्ति, जगह, वस्तु या विचार के नाम को संज्ञा कहते हैं। किसी काम या क्रिया को बताने वाला शब्द क्रिया कहलाता है। जैसे: रीना दौड़ती है। रीना संज्ञा है और दौड़ती क्रिया है।",
      "en-IN":"A noun names a person, place, thing or idea. A verb tells us what someone or something does. In the sentence “Ravi runs”, Ravi is the noun and runs is the verb."
    }, extra:"Quick tip: name = noun; action = verb." },
  { keys:["freedom movement","indian freedom","స్వాతంత్ర్య ఉద్యమం","स्वतंत्रता आंदोलन"], title:"India's freedom movement", subject:"Social",
    answers:{
      "te-IN":"భారతదేశం బ్రిటిష్ పాలన నుంచి స్వాతంత్ర్యం పొందడానికి ప్రజలు ఎన్నో సంవత్సరాలు పోరాడారు. మహాత్మా గాంధీ, సుభాష్ చంద్రబోస్, భగత్ సింగ్ వంటి నాయకులు ముఖ్య పాత్ర పోషించారు. 1947 ఆగస్టు 15న భారతదేశానికి స్వాతంత్ర్యం వచ్చింది.",
      "hi-IN":"भारत को ब्रिटिश शासन से आज़ादी दिलाने के लिए लोगों ने कई वर्षों तक संघर्ष किया। महात्मा गांधी, सुभाष चंद्र बोस और भगत सिंह जैसे नेताओं ने महत्वपूर्ण भूमिका निभाई। 15 अगस्त 1947 को भारत स्वतंत्र हुआ।",
      "en-IN":"India's freedom movement was a long struggle to end British rule. Leaders such as Mahatma Gandhi, Subhas Chandra Bose and Bhagat Singh inspired people in different ways. India became independent on 15 August 1947."
    }, extra:"Remember the date: 15 August 1947." }
];

const quizzes = [
  {topic:"SCIENCE", question:"Which part of a plant makes most of its food?", options:["Roots","Leaves","Flower"], answer:"leaves", explain:"Leaves contain chlorophyll, which captures sunlight for photosynthesis.", subject:"Science"},
  {topic:"MATHS", question:"What is 1/2 + 1/2?", options:["1/2","1","2"], answer:"1", explain:"Two halves make one whole.", subject:"Maths"},
  {topic:"SCIENCE", question:"What is the process of water vapour turning into tiny water drops?", options:["Evaporation","Condensation","Melting"], answer:"condensation", explain:"Condensation happens when water vapour cools and becomes liquid droplets.", subject:"Science"},
  {topic:"ENGLISH", question:"In “The bird sings”, which word is the verb?", options:["The","Bird","Sings"], answer:"sings", explain:"“Sings” is the action, so it is the verb.", subject:"English"},
  {topic:"SOCIAL", question:"On which date did India become independent?", options:["15 August 1947","26 January 1950","2 October 1869"], answer:"15 august 1947", explain:"India became independent on 15 August 1947.", subject:"Social"}
];

let state = loadState();
let quizIndex = 0;
let quizAnswered = false;
let recognition = null;
let listeningTarget = "question";

function loadState(){
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {attempts:[], questions:[]}; }
  catch { return {attempts:[], questions:[]}; }
}
function saveState(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); renderDashboard(); }
function normalize(s){ return (s || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^\p{L}\p{N}]+/gu," ").trim(); }
function language(){ return $("languageSelect").value; }
function toast(msg){ const el=$("toast"); el.textContent=msg; el.classList.add("show"); setTimeout(()=>el.classList.remove("show"),2200); }
function findLesson(question){
  const q=normalize(question);
  return lessons.find(item=>item.keys.some(k=>q.includes(normalize(k)))) || lessons.find(item=>item.subject === $("subjectSelect").value) || lessons[0];
}
function setTranscript(text){ $("questionInput").value=text; }
function answerQuestion(){
  const question=$("questionInput").value.trim();
  if(!question){ toast("Speak or type a question first."); return; }
  const lesson=findLesson(question);
  const answer=lesson.answers[language()] || lesson.answers["en-IN"];
  $("answerTitle").textContent=lesson.title+" — in simple words";
  $("answerText").textContent=answer;
  $("answerExtra").textContent=lesson.extra;
  $("answerCard").classList.remove("hidden");
  state.questions.unshift({question,topic:lesson.title,at:Date.now()});
  state.questions=state.questions.slice(0,12);
  saveState();
  $("answerCard").scrollIntoView({behavior:"smooth",block:"nearest"});
}
function speak(text){
  if(!("speechSynthesis" in window)){toast("Speech playback isn't supported in this browser.");return;}
  speechSynthesis.cancel();
  const utterance=new SpeechSynthesisUtterance(text);
  utterance.lang=language();
  utterance.rate=.88;
  const voices=speechSynthesis.getVoices();
  const preferred=voices.find(v=>v.lang.toLowerCase()===language().toLowerCase()) || voices.find(v=>v.lang.toLowerCase().startsWith(language().slice(0,2)));
  if(preferred) utterance.voice=preferred;
  speechSynthesis.speak(utterance);
}
function startRecognition(target){
  const SR=window.SpeechRecognition || window.webkitSpeechRecognition;
  if(!SR){toast("Voice input isn't supported here. Please type your answer.");return;}
  if(recognition){try{recognition.stop()}catch{}}
  recognition=new SR();
  recognition.lang=language();
  recognition.interimResults=true;
  recognition.continuous=false;
  listeningTarget=target;
  const status=target==="quiz"?$("quizVoiceStatus"):$("voiceStatus");
  if(target==="question") $("micButton").classList.add("listening");
  status.textContent="Listening… speak now";
  recognition.onresult=(event)=>{
    let finalText="", interim="";
    for(let i=event.resultIndex;i<event.results.length;i++){
      const part=event.results[i][0].transcript;
      if(event.results[i].isFinal) finalText+=part; else interim+=part;
    }
    if(target==="question") $("questionInput").value=finalText || interim;
    else if(finalText){status.textContent="I heard: "+finalText; checkAnswer(finalText);}
    else status.textContent="I heard: "+interim;
  };
  recognition.onerror=(e)=>{status.textContent=e.error==="not-allowed"?"Microphone permission was blocked. Type instead.":"Couldn't hear that clearly. Try again or type.";};
  recognition.onend=()=>{if(target==="question") $("micButton").classList.remove("listening"); if(status.textContent==="Listening… speak now")status.textContent="I'm listening whenever you're ready.";};
  try{recognition.start()}catch{toast("Microphone is already active. Try again.");}
}
function renderQuiz(){
  const q=quizzes[quizIndex%quizzes.length];
  quizAnswered=false;
  $("quizTopic").textContent=q.topic+" · QUICK CHECK";
  $("quizCount").textContent=String((quizIndex%quizzes.length)+1).padStart(2,"0")+" / 05";
  $("quizQuestion").textContent=q.question;
  $("quizOptions").innerHTML="";
  q.options.forEach(option=>{
    const b=document.createElement("button");b.className="quiz-option";b.textContent=option;b.dataset.answer=normalize(option);
    b.addEventListener("click",()=>checkAnswer(option));
    $("quizOptions").appendChild(b);
  });
  $("quizFeedback").className="quiz-feedback hidden";
  $("nextQuiz").classList.add("hidden");
  $("quizVoiceStatus").textContent="Or say your answer";
}
function checkAnswer(raw){
  if(quizAnswered)return;
  const q=quizzes[quizIndex%quizzes.length];
  const given=normalize(raw), expected=normalize(q.answer);
  const correct=given===expected || given.includes(expected) || expected.includes(given) && given.length>2;
  quizAnswered=true;
  const feedback=$("quizFeedback");
  feedback.classList.remove("hidden");
  feedback.classList.toggle("wrong-feedback",!correct);
  feedback.textContent=correct?"That's right! ✨ "+q.explain:"Good try! 🌱 "+q.explain;
  [...$("quizOptions").children].forEach(btn=>{
    if(btn.dataset.answer===expected)btn.classList.add("correct");
    else if(btn.dataset.answer===given && !correct)btn.classList.add("wrong");
    btn.disabled=true;
  });
  state.attempts.unshift({topic:q.topic,subject:q.subject,correct,at:Date.now()});
  state.attempts=state.attempts.slice(0,60);
  saveState();
  $("nextQuiz").classList.remove("hidden");
  $("quizVoiceStatus").textContent=correct?"Answer saved — well done!":"Answer saved — keep practising!";
}
function renderDashboard(){
  const attempts=state.attempts;
  const correct=attempts.filter(a=>a.correct).length;
  $("attemptCount").textContent=attempts.length;
  $("questionCount").textContent=state.questions.length;
  $("correctCount").textContent=attempts.length?Math.round(correct/attempts.length*100)+"%":"0%";
  $("scoreText").textContent=attempts.length?`${correct} correct out of ${attempts.length} tries`:"Your progress starts here";
  $("scoreSub").textContent=attempts.length?"Every try helps you grow.":"Every try helps you grow.";
  const groups={};
  attempts.forEach(a=>{groups[a.topic]??={total:0,correct:0};groups[a.topic].total++;if(a.correct)groups[a.topic].correct++;});
  const weak=Object.entries(groups).sort((a,b)=>(a[1].correct/a[1].total)-(b[1].correct/b[1].total)).slice(0,3);
  $("weakTopics").innerHTML=weak.length?weak.map(([name,v])=>`<div class="topic-row"><span class="topic-name">${name}</span><span class="topic-rate">${Math.round(v.correct/v.total*100)}% correct</span></div>`).join(""):'<p class="empty-state">Complete a practice question to see topic insights.</p>';
  $("recentList").innerHTML=state.questions.length?state.questions.slice(0,4).map(q=>`<div class="recent-row"><span>${escapeHTML(q.topic)}</span><span>${timeAgo(q.at)}</span></div>`).join(""):'<p class="empty-state">Your recent questions will show up here.</p>';
}
function escapeHTML(s){return s.replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
function timeAgo(t){const m=Math.max(0,Math.floor((Date.now()-t)/60000));return m<1?"Just now":m<60?m+"m ago":Math.floor(m/60)+"h ago";}

$("micButton").addEventListener("click",()=>startRecognition("question"));
$("askButton").addEventListener("click",answerQuestion);
$("speakButton").addEventListener("click",()=>speak($("answerText").textContent));
$("quizMic").addEventListener("click",()=>startRecognition("quiz"));
$("nextQuiz").addEventListener("click",()=>{quizIndex=(quizIndex+1)%quizzes.length;renderQuiz();});
document.querySelectorAll(".suggestion").forEach(b=>b.addEventListener("click",()=>{setTranscript(b.dataset.question);answerQuestion();}));
$("languageSelect").addEventListener("change",()=>{if(recognition){try{recognition.stop()}catch{}}toast("Language set to "+$("languageSelect").selectedOptions[0].text);});
$("subjectSelect").addEventListener("change",()=>toast("Subject changed to "+$("subjectSelect").value));
renderQuiz();
renderDashboard();
