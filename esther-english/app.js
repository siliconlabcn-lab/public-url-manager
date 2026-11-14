const CATEGORIES = [
  {id:"phonics",name:"音標島",icon:"/æ/",desc:"30 分鐘 KK 音標：學、聽、玩、測",color:"#71c8ec"},
  {id:"grammar",name:"語法研究所",icon:"⌘",desc:"be 動詞、時態與句型整合",color:"#ffd84d"},
  {id:"magazine",name:"空中雜誌 × 2000字",icon:"SKY",desc:"短篇文章、核心字彙與推論",color:"#8976e8"},
  {id:"cloze",name:"克漏字森林",icon:"…",desc:"用上下文找出最佳答案",color:"#62d6b5"},
  {id:"reading",name:"題組探險隊",icon:"▤",desc:"生活短文、圖表與閱讀理解",color:"#ff9a5c"},
  {id:"context",name:"文意字彙站",icon:"Aa",desc:"從語境判斷正確單字",color:"#ed799f"},
  {id:"translate",name:"中翻英工坊",icon:"中↔A",desc:"單字片語的精準輸出",color:"#85b7ff"},
  {id:"fill",name:"填充題礦坑",icon:"＿",desc:"拼字、詞形與文法填空",color:"#a5d36b"},
  {id:"prompt",name:"提示作答城堡",icon:"✎",desc:"依提示改寫與完整翻譯",color:"#ff796b"}
];

const Q = (id,cat,prompt,options,answer,explanation,hint,difficulty="基礎",passage="") => ({id,cat,prompt,options,answer,explanation,hint,difficulty,passage,type:"mcq"});
const T = (id,cat,prompt,answers,explanation,hint,difficulty="進階",passage="") => ({id,cat,prompt,answers,explanation,hint,difficulty,passage,type:"text"});
const QUESTIONS = [
  Q("p1","phonics","哪一個單字的母音發音是 /æ/？",["name","cat","cake","rain"],1,"cat 的 a 發短母音 /æ/；其他三個都有 /eɪ/。","想想嘴巴張開、短促發出的 a。"),
  Q("p2","phonics","哪組單字的底線發音相同？",["s<u>ea</u> / br<u>ea</u>d","b<u>oo</u>k / l<u>oo</u>k","h<u>o</u>me / d<u>o</u>g","c<u>i</u>ty / k<u>i</u>te"],1,"book 和 look 的 oo 都發 /ʊ/。","先慢慢念每一組。"),
  Q("p3","phonics","“teacher” 的重音落在哪一音節？",["第一音節 TEA-","第二音節 -CHER","兩個一樣重","沒有重音"],0,"teacher /ˈtiːtʃər/ 的主要重音在第一音節。","音標中的 ˈ 放在重讀音節前。"),
  Q("p4","phonics","哪個單字以 /ʃ/ 開頭？",["chair","ship","zoo","thin"],1,"ship 的 sh 發 /ʃ/；chair 以 /tʃ/ 開頭。","把手放在喉嚨，/ʃ/ 不振動。"),
  Q("p5","phonics","“this” 開頭的 th 正確音標是？",["/θ/","/ð/","/s/","/z/"],1,"this 的 th 是有聲 /ð/；think 的 th 才是 /θ/。","發音時舌尖輕碰牙齒，喉嚨會振動。","挑戰"),

  Q("g1","grammar","My sister _____ a student.",["am","is","are","be"],1,"主詞 My sister 是第三人稱單數，be 動詞用 is。","把 My sister 換成 she。"),
  Q("g2","grammar","_____ your parents at home now?",["Am","Is","Are","Do"],2,"your parents 是複數，be 動詞問句用 Are 開頭。","parents 是一個人還是多個人？"),
  Q("g3","grammar","Kevin _____ basketball after school every day.",["play","plays","is play","playing"],1,"every day 表示習慣；第三人稱單數 Kevin 的動詞加 -s。","找出表示頻率的時間詞。"),
  Q("g4","grammar","Look! The boys _____ in the rain.",["run","runs","are running","is running"],2,"Look! 提示動作正在發生；複數主詞用 are running。","現在進行式：be + V-ing。"),
  Q("g5","grammar","There _____ two books and a pen on the desk.",["is","are","am","has"],1,"There are 後接複數名詞 two books。","先看 be 動詞後面最靠近的名詞。","挑戰"),

  Q("m1","magazine","In the article, the word “local” is closest in meaning to _____.",["from the area","very expensive","full of danger","easy to break"],0,"local 表示「當地的」。","留意文章中的 town。","基礎","<b>Sky Magazine｜Weekend Market</b><br>Every Saturday, Mia visits a local market in her town. Farmers sell fresh fruit, bread, and flowers there. Mia likes to talk with them and learn where the food comes from."),
  Q("m2","magazine","Why does Leo carry a reusable bottle?",["To make it heavier","To buy sweet drinks","To use less plastic","To keep it new"],2,"文章說 reusable bottle helps him use less plastic。","答案通常就在 because 後面。","基礎","<b>Sky Magazine｜A Greener School Day</b><br>Leo carries a reusable bottle because it helps him use less plastic. He also turns off the classroom lights at lunch. Small choices can make a real difference."),
  Q("m3","magazine","The robot can “recognize” different kinds of trash. “Recognize” means _____.",["throw away","know and identify","make smaller","move quickly"],1,"recognize 是「認出、辨識」。","機器人要先辨識，才能分類。","進階","<b>Sky Magazine｜A Smart Helper</b><br>Students in Japan built a small robot. Its camera can recognize different kinds of trash and tell people which bin to use. The team hopes the robot will make recycling easier."),
  Q("m4","magazine","What is the main idea of the passage?",["Reading only helps at school","Ten minutes of daily reading can build a useful habit","Libraries should close early","Adventure stories are always short"],1,"文章重點是每天短時間閱讀如何建立習慣並增加字彙。","主旨要涵蓋整段，而不是單一細節。","挑戰","<b>Sky Magazine｜The Ten-Minute Challenge</b><br>Nora reads in English for ten minutes before bed. At first, she understood only a few words. After a month, she could follow short adventure stories. A little reading each day helped her build a strong habit."),
  Q("m5","magazine","Which word best describes the students?",["careless","creative","silent","lonely"],1,"學生把舊物變成實用物品，表現出創意。","從 made ... into new pencil cases 推論。","挑戰","<b>Sky Magazine｜Old Jeans, New Ideas</b><br>A school art club collected old jeans and made them into new pencil cases. The students learned to sew and designed colorful patterns. Their project kept useful cloth out of the trash."),

  Q("c1","cloze","I get up at six thirty, _____ I eat breakfast with my family.",["but","and","or","because"],1,"前後是依序發生且並列的動作，用 and。","兩件事是相反，還是接續？"),
  Q("c2","cloze","Amy is hungry, _____ she makes a sandwich.",["so","but","if","before"],0,"前句是原因，後句是結果，用 so。","餓了「所以」做三明治。"),
  Q("c3","cloze","Ben _____ TV now. Please be quiet.",["watches","is watching","watch","watched"],1,"now 表示現在進行式：is watching。","注意 now。"),
  Q("c4","cloze","Our class starts _____ eight o’clock.",["in","on","at","from"],2,"精確時刻前用介系詞 at。","at + 時刻。"),
  Q("c5","cloze","Tina has a new bike. _____ bike is blue.",["His","Her","Its","Their"],1,"Tina 是女生；她的腳踏車用 Her bike。","先確認 Tina 的代名詞。"),

  Q("r1","reading","What does Alex do before school?",["He walks his dog","He reads a comic","He makes lunch","He plays baseball"],0,"第一句說 Alex walks his dog before school。","找 before school 前後的資訊。","基礎","Alex walks his dog before school. After class, he practices baseball with his team. In the evening, he finishes his homework and reads a comic book."),
  Q("r2","reading","When is the library closed?",["Monday","Wednesday","Saturday","Sunday"],3,"表格最後寫 Sun: Closed。","掃描日期，不必逐字翻譯。","基礎","<b>Green Hill Library</b><br>Mon–Fri: 9:00–18:00<br>Sat: 10:00–16:00<br>Sun: Closed<br><small>Please return books on time.</small>"),
  Q("r3","reading","Why can’t Ella join the picnic?",["She dislikes the park","She has a piano lesson","She is visiting her aunt","She has no food"],1,"Ella 說她在 10 點有鋼琴課。","留意 can’t 之後的原因。","基礎","Sam: We’re having a picnic at River Park on Saturday morning. Can you come?<br>Ella: I’d love to, but I have a piano lesson at ten. Maybe I can join you in the afternoon."),
  Q("r4","reading","What should students bring?",["A lunch box","A notebook","A raincoat","A camera"],1,"公告寫 Bring a notebook and a pencil。","公告題先找動詞 Bring。","進階","<b>Science Club Notice</b><br>Meet in Room 203 this Friday at 4:10. We will learn how clouds form. Bring a notebook and a pencil. New members are welcome!"),
  Q("r5","reading","What can we infer about Max?",["He gives up easily","He is learning from mistakes","He already plays perfectly","He does not like music"],1,"Max 雖然彈錯音，仍記錄困難處並再次練習，可推論他會從錯誤中學習。","infer 是根據行動推論特質。","挑戰","Max is learning the guitar. Some chords are hard, and he often plays the wrong note. He writes the difficult parts in a notebook and practices them again the next day."),

  T("v1","context","請填入最適合的英文單字：Be _____! The floor is wet.",["careful"],"地板濕滑時要「小心」：be careful。","字首是 c，字尾是 -ful。","基礎"),
  T("v2","context","請填入最適合的英文單字：The math question is not easy. It is _____.",["difficult","hard"],"difficult / hard 都可表示「困難的」。","easy 的相反詞。","基礎"),
  T("v3","context","請填入最適合的英文單字：We can buy medicine at the _____.",["drugstore","pharmacy"],"藥局可說 drugstore 或 pharmacy。","這個地方會有藥師。","基礎"),
  T("v4","context","請填入最適合的英文單字：Jason never tells lies. He is an _____ boy.",["honest"],"honest 表示「誠實的」；因為 h 不發音，前面用 an。","看到 never tells lies。","進階"),
  T("v5","context","請填入最適合的英文單字：Please _____ the door when you leave the room.",["close","shut"],"close / shut the door 都表示把門關上。","leave 時別忘記「關」門。","基礎"),

  T("t1","translate","中翻英：圖書館",["library"],"圖書館是 library。","開頭是 li-。","基礎"),
  T("t2","translate","中翻英：準時",["on time"],"on time 表示「準時」。","介系詞是 on。","基礎"),
  T("t3","translate","中翻英：照顧",["take care of","look after"],"take care of 與 look after 都可表示「照顧」。","三個字的片語，最後是 of。","進階"),
  T("t4","translate","中翻英：在……前面",["in front of"],"in front of 表示「在……前面」。","front 前面要加 in。","進階"),
  T("t5","translate","中翻英：拍照",["take a picture","take a photo","take pictures","take photos"],"拍照常用 take a picture / photo。","動詞用 take。","基礎"),

  T("f1","fill","用正確形式填空：She _____ (have) a cute dog.",["has"],"第三人稱單數 She 搭配 has。","have 的第三人稱單數是不規則變化。","基礎"),
  T("f2","fill","用正確形式填空：The children _____ (be) in the classroom.",["are"],"children 是複數，be 動詞用 are。","child 的複數是 children。","基礎"),
  T("f3","fill","用正確形式填空：Listen! Someone _____ (sing).",["is singing"],"Listen! 表示正在發生，用現在進行式 is singing。","someone 視為單數。","進階"),
  T("f4","fill","填入適當介系詞：My birthday is _____ November.",["in"],"月份前用 in。","in + 月份 / 年份。","基礎"),
  T("f5","fill","用正確形式填空：There _____ (be) a cat under the chair.",["is"],"a cat 是單數，所以用 There is。","看 be 動詞後面的名詞。","基礎"),

  T("a1","prompt","依提示作答：Is Mr. Lin a doctor?（否定簡答）",["no he isn't","no he is not"],"否定簡答：No, he isn’t。","先 No，再用代名詞 he。","基礎"),
  T("a2","prompt","依提示作答：Those are Amy’s books.（改為單數句）",["that is amy's book","that is amy’s book"],"Those → That，are → is，books → book。","三個地方都要改成單數。","進階"),
  T("a3","prompt","整句翻譯：我的哥哥每天騎腳踏車上學。",["my brother rides a bike to school every day","my brother goes to school by bike every day"],"可用 ride a bike to school 或 go to school by bike。","每天表示一般現在式，ride 要加 s。","進階"),
  T("a4","prompt","依提示作答：What is your mother doing?（cook dinner）",["she is cooking dinner","she's cooking dinner"],"問句是現在進行式，回答 She is cooking dinner。","主詞用 She，接 is + V-ing。","基礎"),
  T("a5","prompt","整句翻譯：桌上有三個蘋果。",["there are three apples on the table"],"複數名詞 three apples 搭配 There are。","先說有三個蘋果，再說位置。","進階")
];

const VIDEO_LIBRARY = {
  phonics:{title:"The complete guide to English pronunciation",source:"BBC Learning English",desc:"從 44 個英語音素加強字音辨識",url:"https://www.youtube.com/watch?v=QxQUapA-2w4",color:"#71c8ec"},
  grammar:{title:"Grammar videos",source:"British Council LearnEnglish Kids",desc:"用短動畫在生活情境中看懂文法",url:"https://learnenglishkids.britishcouncil.org/grammar-vocabulary/grammar-videos",color:"#ffd84d"},
  magazine:{title:"Let's Learn English — Level 1",source:"VOA Learning English",desc:"慢速生活影片搭配字彙與文字稿",url:"https://learningenglish.voanews.com/p/5644.html",color:"#8976e8"},
  cloze:{title:"Grammar chants",source:"British Council LearnEnglish Kids",desc:"用節奏熟悉句型與連接詞",url:"https://learnenglishkids.britishcouncil.org/grammar-vocabulary/grammar-chants",color:"#62d6b5"},
  reading:{title:"Video zone",source:"British Council LearnEnglish Kids",desc:"看短片、讀活動題，練整體理解",url:"https://learnenglishkids.britishcouncil.org/listen-watch/video-zone",color:"#ff9a5c"},
  context:{title:"Word games",source:"British Council LearnEnglish Kids",desc:"從主題與語境記住實用單字",url:"https://learnenglishkids.britishcouncil.org/grammar-vocabulary/word-games",color:"#ed799f"},
  translate:{title:"Listening practice",source:"British Council LearnEnglish Kids",desc:"聽真實句子，累積中英轉換語感",url:"https://learnenglishkids.britishcouncil.org/listen-watch/listening-practice",color:"#85b7ff"},
  fill:{title:"Grammar practice",source:"British Council LearnEnglish Kids",desc:"規則、遊戲與練習一次完成",url:"https://learnenglishkids.britishcouncil.org/grammar-vocabulary/grammar-practice",color:"#a5d36b"},
  prompt:{title:"Short stories",source:"British Council LearnEnglish Kids",desc:"跟著故事讀完整句，提升表達力",url:"https://learnenglishkids.britishcouncil.org/listen-watch/short-stories",color:"#ff796b"}
};

const DEFAULT_STATE = {xp:0,sessions:0,streak:0,mastery:{},wrong:{},seen:{},active:null,sound:true,lastDay:null};
let state = loadState();
let session = null;
let currentQuestion = null;
let selectedAnswer = null;
let answered = false;
let tickHandle = null;

const $ = id => document.getElementById(id);
const views = ["homeView","quizView","resultView"];

function loadState(){
  try{return {...DEFAULT_STATE,...JSON.parse(localStorage.getItem("joy7Quest")||"{}")};}catch{return {...DEFAULT_STATE};}
}
function saveState(){
  if(session) state.active=session;
  localStorage.setItem("joy7Quest",JSON.stringify(state));
}
function cat(id){return CATEGORIES.find(c=>c.id===id)}
function shuffle(items){return [...items].sort(()=>Math.random()-.5)}
function normalize(s){return String(s).toLowerCase().trim().replace(/[.,!?，。！？'’]/g,"").replace(/\s+/g," ")}
function showView(id){views.forEach(v=>$(v).classList.toggle("active",v===id));window.scrollTo({top:0,behavior:"smooth"})}
function toast(msg){const el=$("toast");el.textContent=msg;el.classList.add("show");setTimeout(()=>el.classList.remove("show"),1800)}
function playTone(ok=true){
  if(!state.sound)return;
  try{const ac=new (window.AudioContext||window.webkitAudioContext)(),o=ac.createOscillator(),g=ac.createGain();o.connect(g);g.connect(ac.destination);o.frequency.value=ok?660:210;g.gain.setValueAtTime(.05,ac.currentTime);g.gain.exponentialRampToValueAtTime(.001,ac.currentTime+.18);o.start();o.stop(ac.currentTime+.18)}catch{}
}

function renderHome(){
  $("xpTop").textContent=state.xp;$("streakTop").textContent=state.streak;
  const weakCats=weakCategories();
  $("weakSummary").textContent=weakCats.length?`先複習：${weakCats.slice(0,2).map(id=>cat(id).name).join("、")}`:"第一次來，先做快速程度探索";
  $("startSessionBtn").querySelector("span").textContent=state.active?"繼續上次 30 分鐘訓練":"開始 30 分鐘訓練";
  $("islandGrid").innerHTML=CATEGORIES.map((c,i)=>{
    const m=Math.round(state.mastery[c.id]||0);
    return `<button class="island-card" data-cat="${c.id}"><span class="island-num">ISLAND 0${i+1}</span><h3>${c.name}</h3><p>${c.desc}</p><span class="mastery-label">熟練度 ${m}%</span><span class="mastery"><i style="width:${m}%"></i></span><span class="island-icon" style="background:${c.color}">${c.icon}</span></button>`
  }).join("");
  document.querySelectorAll(".island-card").forEach(btn=>btn.onclick=()=>btn.dataset.cat==="phonics"?location.href="phonics.html":startCategory(btn.dataset.cat));
}

function weakCategories(){
  const scores={};Object.entries(state.wrong||{}).forEach(([id,count])=>{const q=QUESTIONS.find(x=>x.id===id);if(q&&count>0)scores[q.cat]=(scores[q.cat]||0)+count});
  return Object.keys(scores).sort((a,b)=>scores[b]-scores[a]);
}

function buildSmartQueue(){
  const wrongIds=Object.entries(state.wrong||{}).filter(([,n])=>n>0).sort((a,b)=>b[1]-a[1]).map(([id])=>id);
  const review=shuffle(wrongIds).slice(0,5);
  const rest=shuffle(QUESTIONS.filter(q=>!review.includes(q.id))).sort((a,b)=>(state.seen[a.id]||0)-(state.seen[b.id]||0)).slice(0,30-review.length).map(q=>q.id);
  return [...review,...rest];
}
function newSession(mode="smart",category=null){
  let ids=mode==="smart"?buildSmartQueue():shuffle(QUESTIONS.filter(q=>q.cat===category)).map(q=>q.id);
  if(mode!=="smart"){
    const weak=ids.filter(id=>(state.wrong[id]||0)>0),fresh=ids.filter(id=>!weak.includes(id));ids=[...weak,...fresh];
  }
  return {mode,category,ids,index:0,correct:0,combo:0,bestCombo:0,hearts:3,remaining:1800,results:[],startedAt:Date.now()};
}
function startSmart(){
  session=state.active||newSession("smart");
  openQuiz();
}
function startCategory(category){session=newSession("category",category);openQuiz()}
function openQuiz(){
  state.active=session;saveState();showView("quizView");$("sessionPill").hidden=false;
  $("quizModeLabel").textContent=session.mode==="smart"?"30 分鐘智慧訓練":`${cat(session.category).name}・專項練習`;
  startTimer();renderQuestion();
}
function startTimer(){
  clearInterval(tickHandle);renderTimer();
  tickHandle=setInterval(()=>{session.remaining=Math.max(0,session.remaining-1);renderTimer();if(session.remaining%10===0)saveState();if(session.remaining<=0)finishSession(true)},1000)
}
function renderTimer(){const m=Math.floor(session.remaining/60),s=session.remaining%60;$("timerText").textContent=`${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`}

function renderQuestion(){
  if(session.index>=session.ids.length)return finishSession(false);
  currentQuestion=QUESTIONS.find(q=>q.id===session.ids[session.index]);
  if(!currentQuestion)return finishSession(false);
  selectedAnswer=null;answered=false;
  const c=cat(currentQuestion.cat);
  $("categoryTag").textContent=c.name;$("categoryTag").style.background=c.color;$("categoryTag").style.color="#183153";
  $("difficulty").textContent=`● ${currentQuestion.difficulty}`;
  $("questionCount").textContent=`${session.index+1} / ${session.ids.length}`;
  $("progressBar").style.width=`${session.index/session.ids.length*100}%`;
  $("questionPrompt").innerHTML=currentQuestion.prompt;$("questionHint").textContent=currentQuestion.type==="text"?"請輸入完整答案（大小寫不拘）":"選出最適合的答案";
  const passage=$("passageBox");passage.hidden=!currentQuestion.passage;passage.innerHTML=currentQuestion.passage;
  $("feedback").hidden=true;$("nextBtn").hidden=true;$("checkBtn").hidden=false;$("checkBtn").disabled=true;
  $("comboBadge").hidden=session.combo<2;$("comboBadge").innerHTML=`🔥 <b>${session.combo}</b> 連擊`;
  renderHearts();
  if(currentQuestion.type==="mcq"){
    $("answerArea").innerHTML=currentQuestion.options.map((o,i)=>`<button class="option" data-index="${i}"><span class="letter">${String.fromCharCode(65+i)}</span><span>${o}</span></button>`).join("");
    document.querySelectorAll(".option").forEach(btn=>btn.onclick=()=>selectOption(btn));
  }else{
    $("answerArea").innerHTML=`<input class="text-answer" id="textAnswer" autocomplete="off" spellcheck="false" placeholder="Type your answer…">`;
    $("textAnswer").addEventListener("input",e=>{$("checkBtn").disabled=!e.target.value.trim()});
    $("textAnswer").addEventListener("keydown",e=>{if(e.key==="Enter"&&!$("checkBtn").disabled)checkAnswer()});
    setTimeout(()=>$("textAnswer").focus(),80);
  }
}
function selectOption(btn){if(answered)return;document.querySelectorAll(".option").forEach(x=>x.classList.remove("selected"));btn.classList.add("selected");selectedAnswer=Number(btn.dataset.index);$("checkBtn").disabled=false}
function renderHearts(){$("hearts").innerHTML=[0,1,2].map(i=>`<span class="${i>=session.hearts?"lost":""}">♥</span>`).join(" ")}

function checkAnswer(){
  if(answered)return;answered=true;
  const given=currentQuestion.type==="mcq"?selectedAnswer:$("textAnswer").value;
  const ok=currentQuestion.type==="mcq"?given===currentQuestion.answer:currentQuestion.answers.some(a=>normalize(a)===normalize(given));
  if(currentQuestion.type==="mcq"){
    document.querySelectorAll(".option").forEach(btn=>{const i=Number(btn.dataset.index);if(i===currentQuestion.answer)btn.classList.add("correct");if(i===given&&!ok)btn.classList.add("wrong");btn.disabled=true});
  }else{$("textAnswer").disabled=true;$("textAnswer").style.borderColor=ok?"#2ea978":"#ff705d"}
  const feedback=$("feedback");feedback.hidden=false;feedback.className=`feedback ${ok?"correct":"wrong"}`;
  const answerText=currentQuestion.type==="mcq"?currentQuestion.options[currentQuestion.answer]:currentQuestion.answers[0];
  feedback.innerHTML=`<b>${ok?"答對了！+10 XP":"再記一次："+answerText}</b>${currentQuestion.explanation}`;
  if(ok){session.correct++;session.combo++;session.bestCombo=Math.max(session.bestCombo,session.combo);state.xp+=10;state.wrong[currentQuestion.id]=Math.max(0,(state.wrong[currentQuestion.id]||0)-1);playTone(true)}
  else{session.combo=0;session.hearts=Math.max(0,session.hearts-1);state.wrong[currentQuestion.id]=(state.wrong[currentQuestion.id]||0)+1;playTone(false)}
  state.seen[currentQuestion.id]=(state.seen[currentQuestion.id]||0)+1;
  const old=state.mastery[currentQuestion.cat]||0;state.mastery[currentQuestion.cat]=Math.max(0,Math.min(100,old+(ok?5:-3)));
  session.results.push({id:currentQuestion.id,cat:currentQuestion.cat,ok});
  $("xpTop").textContent=state.xp;$("checkBtn").hidden=true;$("nextBtn").hidden=false;renderHearts();saveState();
}
function nextQuestion(){session.index++;saveState();renderQuestion()}
function showHint(){toast(currentQuestion.hint)}

function finishSession(timedOut=false){
  if(!session)return;clearInterval(tickHandle);$("sessionPill").hidden=true;
  const completed=session.results.length,score=completed?Math.round(session.correct/completed*100):0;
  const wrongCats={};session.results.filter(r=>!r.ok).forEach(r=>wrongCats[r.cat]=(wrongCats[r.cat]||0)+1);
  const sortedWeak=Object.keys(wrongCats).sort((a,b)=>wrongCats[b]-wrongCats[a]);
  state.sessions++;state.streak=updateStreak();state.active=null;
  $("resultTitle").textContent=timedOut?"30 分鐘任務完成！":score>=80?"太棒了，闖關成功！":"完成訓練，弱點找到了！";
  $("resultSubtitle").textContent=timedOut?"時間到，進度與弱點都已保存。":"每次練習都在幫下一次的你變強。";
  $("resultScore").textContent=score;$("correctStat").textContent=`${session.correct} / ${completed}`;$("xpStat").textContent=`+${session.correct*10} XP`;$("comboStat").textContent=session.bestCombo;
  $("weakChips").innerHTML=sortedWeak.length?sortedWeak.slice(0,4).map(id=>`<span>${cat(id).name}</span>`).join(""):`<span style="background:#eaf9f4;color:#147956">本輪表現穩定 ✓</span>`;
  renderVideos(sortedWeak.length?sortedWeak:session.category?[session.category]:["reading","grammar","phonics"]);
  session=null;saveState();renderHome();showView("resultView")
}
function updateStreak(){
  const today=new Date().toISOString().slice(0,10);if(state.lastDay===today)return state.streak||1;
  const yesterday=new Date(Date.now()-86400000).toISOString().slice(0,10);const next=state.lastDay===yesterday?(state.streak||0)+1:1;state.lastDay=today;return next;
}
function renderVideos(catIds){
  const unique=[...new Set([...catIds,"reading","grammar"])].slice(0,3);
  $("videoGrid").innerHTML=unique.map(id=>{const v=VIDEO_LIBRARY[id];return `<a class="video-card" href="${v.url}" target="_blank" rel="noopener"><div class="video-thumb" style="background:${v.color}"><i>▶</i></div><div class="video-body"><small>${v.source}</small><h3>${v.title}</h3><p>${v.desc}</p></div></a>`}).join("");
}

function openProfile(){
  $("reportXp").textContent=`${state.xp} XP`;$("reportSessions").textContent=`${state.sessions} 次`;
  $("masteryList").innerHTML=CATEGORIES.map(c=>{const m=Math.round(state.mastery[c.id]||0);return `<div class="mastery-row"><span>${c.name}</span><div><i style="width:${m}%"></i></div><b>${m}%</b></div>`}).join("");
  $("profileDialog").showModal();
}
function exitQuiz(){if(session&&session.results.length)$("exitDialog").showModal();else confirmExit()}
function confirmExit(){clearInterval(tickHandle);if(session){state.active=session;saveState()}$("sessionPill").hidden=true;$("exitDialog").close();renderHome();showView("homeView")}
function resetProgress(){if(!confirm("確定清除所有進度嗎？這個動作無法復原。"))return;localStorage.removeItem("joy7Quest");state={...DEFAULT_STATE,mastery:{},wrong:{},seen:{}};$("profileDialog").close();renderHome();toast("學習紀錄已清除")}

$("startSessionBtn").onclick=startSmart;
$("quickPracticeBtn").onclick=()=>{$("islandsSection").scrollIntoView({behavior:"smooth"})};
$("magazineBtn").onclick=()=>startCategory("magazine");
$("exitQuizBtn").onclick=exitQuiz;$("keepGoingBtn").onclick=()=>$("exitDialog").close();$("confirmExitBtn").onclick=confirmExit;
$("checkBtn").onclick=checkAnswer;$("nextBtn").onclick=nextQuestion;$("hintBtn").onclick=showHint;
$("homeBtn").onclick=()=>{renderHome();showView("homeView")};$("againBtn").onclick=()=>{session=newSession("smart");openQuiz()};
$("profileBtn").onclick=openProfile;$("closeProfileBtn").onclick=()=>$("profileDialog").close();$("resetBtn").onclick=resetProgress;
$("soundBtn").onclick=()=>{state.sound=!state.sound;$("soundBtn").textContent=state.sound?"♪":"×";saveState();toast(state.sound?"音效已開啟":"音效已關閉")};
window.addEventListener("beforeunload",saveState);
renderHome();
