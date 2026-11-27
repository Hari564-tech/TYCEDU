export const OFFICIAL_CATALOGUE_URL = "https://samagrashiksha.ap.gov.in/textBooksDownloadingPageTEBilingual";
export const TITLEWISE_CATALOGUE_URL = "https://samagrashiksha.ap.gov.in/textBooksDownloadingPagetitleWise";
export const CURRICULUM_SOURCE = "Government of Andhra Pradesh · Department of School Education · Samagra Shiksha";
const make = (grade, subject, title, medium, category, filename, note = "") => ({
  id: `ap-g${grade}-${filename.toLowerCase().replace(/[^a-z0-9]+/g,"-")}`,
  grade, subject, title, medium, note,
  source: CURRICULUM_SOURCE,
  sourceUrl: TITLEWISE_CATALOGUE_URL,
  downloadUrl: TITLEWISE_CATALOGUE_URL,
  chapterStatus: "not-yet-extracted"
});
export const BOOKS = [
  // Class 6
  make(6,"English","6_English_Textbook","en","English Books","6_English_Textbook"),
  make(6,"Telugu","6_Telugu_Textbook","te","Telugu Books","6_Telugu_Textbook"),
  make(6,"Mathematics","6_Maths_SEM-1_Textbook","te-en","Maths Books","6_Maths_SEM-1_Textbook","Semester 1"),
  make(6,"Mathematics","6_Maths_SEM-2_Textbook","te-en","Maths Books","6_Maths_SEM-2_Textbook","Semester 2"),
  make(6,"Science","6_Science_SEM-1_Textbook","te-en","Science Books","6_Science_SEM-1_Textbook","Semester 1"),
  make(6,"Social Studies","6_Soical_SEM-1_Textbook","te-en","Soical Books","6_Soical_SEM-1_Textbook","Official portal spelling retained in file name"),
  make(6,"General Science","6_General Science_SEM-1_Textbook_Urdu","ur","General Science Books","6_General Science_SEM-1_Textbook_Urdu","Urdu-labelled textbook"),
  make(6,"General Science","6_General Science_SEM-2_Textbook_Urdu","ur","General Science Books","6_General Science_SEM-2_Textbook_Urdu","Urdu-labelled textbook"),
  make(6,"Mathematics","6_Maths_SEM-1_Urdu_Textbook","ur","Maths Books","6_Maths_SEM-1_Urdu_Textbook","Urdu-labelled textbook"),
  make(6,"Mathematics","6_Maths_SEM-2_Urdu_Textbook","ur","Maths Books","6_Maths_SEM-2_Urdu_Textbook","Urdu-labelled textbook"),
  make(6,"Social Studies","6_Social_SEM-1_Textbook_Urdu 1","ur","Social Books","6_Social_SEM-1_Textbook_Urdu 1","Urdu-labelled textbook"),
  make(6,"Social Studies","6_Social_SEM-2_Textbook_Urdu","ur","Social Books","6_Social_SEM-2_Textbook_Urdu","Urdu-labelled textbook"),
  make(6,"Hindi","6_Hindi_Textbook","en","Hindi Books","6_Hindi_Textbook","Hindi language textbook listed separately"),
  // Class 7
  make(7,"English","7_English_Textbook","en","English Books","7_English_Textbook"),
  make(7,"Telugu","7_Telugu_Textbook","te","Telugu Books","7_Telugu_Textbook"),
  make(7,"Mathematics","7_Maths_SEM-1_Textbook","te-en","Maths Books","7_Maths_SEM-1_Textbook","Semester 1"),
  make(7,"Mathematics","7_Maths_SEM-2_Textbook","te-en","Maths Books","7_Maths_SEM-2_Textbook","Semester 2"),
  make(7,"Science","7_Science_SEM-1_Textbook","te-en","Science Books","7_Science_SEM-1_Textbook","Semester 1"),
  make(7,"Social Studies","7_Soical_SEM-1_Textbook","te-en","Soical Books","7_Soical_SEM-1_Textbook","Official portal spelling retained in file name"),
  make(7,"General Science","7_General Science_SEM-1_Textbook_Urdu","ur","General Science Books","7_General Science_SEM-1_Textbook_Urdu","Urdu-labelled textbook"),
  make(7,"General Science","7_General Science_SEM-2_Textbook_Urdu","ur","General Science Books","7_General Science_SEM-2_Textbook_Urdu","Urdu-labelled textbook"),
  make(7,"Mathematics","7_Maths_SEM-1_Urdu_Textbook","ur","Maths Books","7_Maths_SEM-1_Urdu_Textbook","Urdu-labelled textbook"),
  make(7,"Mathematics","7_Maths_SEM-2_Urdu_Textbook","ur","Maths Books","7_Maths_SEM-2_Urdu_Textbook","Urdu-labelled textbook"),
  make(7,"Social Studies","7_Social_SEM-1_Textbook_Urdu","ur","Social Books","7_Social_SEM-1_Textbook_Urdu","Urdu-labelled textbook"),
  make(7,"Social Studies","7_Social_SEM-2_Textbook_Urdu","ur","Social Books","7_Social_SEM-2_Textbook_Urdu","Urdu-labelled textbook"),
  make(7,"Hindi","7_Hindi_Textbook","en","Hindi Books","7_Hindi_Textbook","Hindi language textbook listed separately"),
  // Class 8
  make(8,"English","8_English_Textbook","en","English Books","8_English_Textbook"),
  make(8,"Telugu","8_Telugu_Textbook","te","Telugu Books","8_Telugu_Textbook"),
  make(8,"Mathematics","8_Maths_SEM-1_Textbook","te-en","Maths Books","8_Maths_SEM-1_Textbook","Semester 1"),
  make(8,"Mathematics","8_Maths_SEM-2_Textbook","te-en","Maths Books","8_Maths_SEM-2_Textbook","Semester 2"),
  make(8,"Biology","8_Biology_SEM-1_Textbook","te-en","Biology Books","8_Biology_SEM-1_Textbook","Semester 1"),
  make(8,"Biology","8_Biology_SEM-2_Textbook","te-en","Biology Books","8_Biology_SEM-2_Textbook","Semester 2"),
  make(8,"Physics","8_Physics_SEM-1_Textbook","te-en","Physics Books","8_Physics_SEM-1_Textbook","Semester 1"),
  make(8,"Physics","8_Physics_SEM-2_Textbook","te-en","Physics Books","8_Physics_SEM-2_Textbook","Semester 2"),
  make(8,"Social Studies","8_Social_Geography_Textbook","te-en","Social Books","8_Social_Geography_Textbook"),
  make(8,"Social Studies","8_Social_History_Textbook","te-en","Social Books","8_Social_History_Textbook"),
  make(8,"Social Studies","8_Social_Politics_Textbook","te-en","Social Books","8_Social_Politics_Textbook"),
  make(8,"Biology","8_Biology_SEM-1_Textbook_Urdu","ur","Biology Books","8_Biology_SEM-1_Textbook_Urdu","Urdu-labelled textbook"),
  make(8,"Biology","8_Biology_SEM-2_Textbook_Urdu","ur","Biology Books","8_Biology_SEM-2_Textbook_Urdu","Urdu-labelled textbook"),
  make(8,"Physics","8_Physics_SEM-1_Textbook_Urdu","ur","Physics Books","8_Physics_SEM-1_Textbook_Urdu","Urdu-labelled textbook"),
  make(8,"Physics","8_Physics_SEM-2_Textbook_Urdu","ur","Physics Books","8_Physics_SEM-2_Textbook_Urdu","Urdu-labelled textbook"),
  make(8,"Mathematics","8_Maths_SEM-1_Textbook_Urdu","ur","Maths Books","8_Maths_SEM-1_Textbook_Urdu","Urdu-labelled textbook"),
  make(8,"Mathematics","8_Maths_SEM-2_Textbook_Urdu","ur","Maths Books","8_Maths_SEM-2_Textbook_Urdu","Urdu-labelled textbook"),
  make(8,"Social Studies","8_Social_Geography_Textbook_Urdu","ur","Social Books","8_Social_Geography_Textbook_Urdu","Urdu-labelled textbook"),
  make(8,"Social Studies","8_Social_History_Textbook_Urdu","ur","Social Books","8_Social_History_Textbook_Urdu","Urdu-labelled textbook"),
  make(8,"Social Studies","8_Social_Political Science_Textbook_Urdu","ur","Social Books","8_Social_Political Science_Textbook_Urdu","Urdu-labelled textbook"),
  make(8,"Hindi","8_Hindi_Textbook","en","Hindi Books","8_Hindi_Textbook","Hindi language textbook listed separately"),
  // Class 9
  make(9,"English","9_English_Textbook","en","English Books","9_English_Textbook"),
  make(9,"Telugu","9_Telugu_Textbook","te","Telugu Books","9_Telugu_Textbook"),
  make(9,"Mathematics","9_Maths_SEM-1_Textbook","te-en","Maths Books","9_Maths_SEM-1_Textbook","Semester 1"),
  make(9,"Mathematics","9_Maths_SEM-2_Textbook","te-en","Maths Books","9_Maths_SEM-2_Textbook","Semester 2"),
  make(9,"Biology","9_Biology_Textbook","te-en","Biology Books","9_Biology_Textbook"),
  make(9,"Physics","9_Physics_SEM-1_Textbook","te-en","Physics Books","9_Physics_SEM-1_Textbook","Semester 1"),
  make(9,"Physics","9_Physics_SEM-2_Textbook","te-en","Physics Books","9_Physics_SEM-2_Textbook","Portal lists the SEM-2 title with this filename"),
  make(9,"Social Studies","9_Social_Economics_Textbook","te-en","Social Books","9_Social_Economics_Textbook"),
  make(9,"Social Studies","9_Social_Geography_Textbook","te-en","Social Books","9_Social_Geography_Textbook"),
  make(9,"Social Studies","9_Social_History_Textbook","te-en","Social Books","9_Social_History_Textbook"),
  make(9,"Social Studies","9_Social_Politics_Textbook","te-en","Social Books","9_Social_Politics_Textbook"),
  make(9,"Physics","9_Physics_SEM-1_Textbook_Urdu","ur","Physics Books","9_Physics_SEM-1_Textbook_Urdu","Urdu-labelled textbook"),
  make(9,"Physics","9_Physics_SEM-2_Textbook_Urdu","ur","Physics Books","9_Physics_SEM-2_Textbook_Urdu","Urdu-labelled textbook"),
  make(9,"Biology","9_Biology_Textbook_Urdu","ur","Biology Books","9_Biology_Textbook_Urdu","Urdu-labelled textbook"),
  make(9,"Mathematics","9_Maths_SEM-1_Textbook_Urdu","ur","Maths Books","9_Maths_SEM-1_Textbook_Urdu","Urdu-labelled textbook"),
  make(9,"Mathematics","9_Maths_SEM-2_Textbook_Urdu","ur","Maths Books","9_Maths_SEM-2_Textbook_Urdu","Urdu-labelled textbook"),
  make(9,"Social Studies","9_Social_Economics_Textbook_Urdu","ur","Social Books","9_Social_Economics_Textbook_Urdu","Urdu-labelled textbook"),
  make(9,"Social Studies","9_Social_Geography_Textbook_Urdu","ur","Social Books","9_Social_Geography_Textbook_Urdu","Urdu-labelled textbook"),
  make(9,"Social Studies","9_Social_History_Textbook_Urdu","ur","Social Books","9_Social_History_Textbook_Urdu","Urdu-labelled textbook"),
  make(9,"Social Studies","9_Social_Politics_Textbook_Urdu","ur","Social Books","9_Social_Politics_Textbook_Urdu","Urdu-labelled textbook"),
  make(9,"Hindi","9_Hindi_Textbook","en","Hindi Books","9_Hindi_Textbook","Hindi language textbook listed separately"),
  // Class 10
  make(10,"English","10_English_Textbook","en","English Books","10_English_Textbook"),
  make(10,"Telugu","10_Telugu_textbook","te","Telugu Books","10_telugu_textbook_2024-25"),
  make(10,"Mathematics","10_Maths_SEM-1_textbook","te-en","Maths Books","10_Maths_SEM-1_textbook_2024-25","Semester 1"),
  make(10,"Mathematics","10_Maths_SEM-2_textbook","te-en","Maths Books","10_Maths_SEM-2_textbook_2024-25","Semester 2"),
  make(10,"Biology","10_Biology_Textbook_BM_2024-25","te-en","Biology Books","10_Biology_Textbook_BM_2024-25"),
  make(10,"Physics","10_Physics_textbook_2024-25","te-en","Physics Books","10_Physics_textbook_2024-25"),
  make(10,"Social Studies","10_Social_Economics_textbook_2024-25","te-en","Social Books","10_Social_Economics_textbook_2024-25"),
  make(10,"Social Studies","10_Social_Geography_textbook_2024-25","te-en","Social Books","10_Social_Geography_textbook_2024-25"),
  make(10,"Social Studies","10_Social_History_textbook_2024-25","te-en","Social Books","10_Social_History_textbook_2024-25"),
  make(10,"Social Studies","10_Social_Politics_textbook_2024-25","te-en","Social Books","10_Social_Politics_textbook_2024-25"),
  make(10,"Biology","10_Biology_Textbook_UM","ur","Biology Books","10_Biology_Textbook_UM","Urdu-labelled textbook"),
  make(10,"Mathematics","10_Maths_SEM_1_Textbook_UM","ur","Maths Books","10_Maths_SEM_1_Textbook_UM","Urdu-labelled textbook"),
  make(10,"Mathematics","10_Maths_SEM_2_Textbook_UM","ur","Maths Books","10_Maths_SEM_2_Textbook_UM","Urdu-labelled textbook"),
  make(10,"Physics","10_Physics_Textbook_UM","ur","Physics Books","10_Physics_Textbook_UM","Urdu-labelled textbook"),
  make(10,"Social Studies","10_Economics_Textbook_UM","ur","Social Books","10_Economics_Textbook_UM","Urdu-labelled textbook"),
  make(10,"Social Studies","10_Geography_Textbook_UM","ur","Social Books","10_Geography_Textbook_UM","Urdu-labelled textbook"),
  make(10,"Social Studies","10_Political Science_Textbook_UM","ur","Science Books","10_Political Science_Textbook_UM","Urdu-labelled textbook"),
  make(10,"Social Studies","10_Social_History_Textbook_UM","ur","Social Books","10_Social_History_Textbook_UM","Urdu-labelled textbook"),
  make(10,"Urdu","10_Urdu Text Book","ur","Urdu Books","10_Urdu Text Book","Urdu language textbook")
];
export const AP_EDUCATION_STATS = {
  academicYear: "2025–26",
  totalSchoolsAllManagements: 60843,
  totalEnrolmentAllManagements: 8328448,
  governmentSchoolEnrolment: 3493449,
  source: "UDISE+ 2025–26 provisional",
  sourceUrl: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2291272&lang=1&reg=1"
};
export const MEDIUMS = [
  {id:"te",label:"Telugu",speech:"te-IN"},
  {id:"en",label:"English",speech:"en-IN"},
  {id:"ur",label:"Urdu",speech:"ur-IN"}
];
export const SUBJECTS = [
  {id:"Mathematics",label:"Mathematics",icon:"∑",tone:"lavender"},
  {id:"Science",label:"Science",icon:"✳",tone:"mint"},
  {id:"Social Studies",label:"Social Studies",icon:"◎",tone:"peach"},
  {id:"English",label:"English",icon:"Aa",tone:"blue"},
  {id:"Telugu",label:"Telugu",icon:"అ",tone:"yellow"},
  {id:"Hindi",label:"Hindi",icon:"अ",tone:"rose"}
];
export const PRACTICE = [
  {grade:6,subject:"Mathematics",q:{en:"Which fraction is equal to one half?",te:"ఏ భిన్నం ఒకటిలో సగానికి సమానం?",ur:"کون سا کسر نصف کے برابر ہے؟"},opts:{en:["2/4","1/3","3/5"],te:["2/4","1/3","3/5"],ur:["2/4","1/3","3/5"]},a:0,why:{en:"2/4 simplifies to 1/2 because both numbers are divided by 2.",te:"లవం, హారం రెండింటినీ 2తో భాగిస్తే 2/4 అనేది 1/2 అవుతుంది.",ur:"2/4 کو سادہ کرنے پر 1/2 بنتا ہے کیونکہ اوپر اور نیچے دونوں کو 2 سے تقسیم کرتے ہیں۔"}},
  {grade:6,subject:"Science",q:{en:"Which part of a plant usually absorbs water from the soil?",te:"మొక్కలో సాధారణంగా నేల నుంచి నీటిని ఏ భాగం పీల్చుకుంటుంది?",ur:"پودے کا کون سا حصہ عام طور پر مٹی سے پانی جذب کرتا ہے؟"},opts:{en:["Flower","Roots","Fruit"],te:["పువ్వు","వేర్లు","పండు"],ur:["پھول","جڑیں","پھل"]},a:1,why:{en:"Roots absorb water and minerals from the soil.",te:"వేర్లు నేల నుంచి నీరు, ఖనిజాలను పీల్చుకుంటాయి.",ur:"جڑیں مٹی سے پانی اور معدنیات جذب کرتی ہیں۔"}},
  {grade:7,subject:"Science",q:{en:"Which of these is a physical change?",te:"వీటిలో భౌతిక మార్పు ఏది?",ur:"ان میں سے طبعی تبدیلی کون سی ہے؟"},opts:{en:["Burning paper","Melting ice","Rusting iron"],te:["కాగితం కాలడం","మంచు కరగడం","ఇనుము తుప్పు పట్టడం"],ur:["کاغذ جلنا","برف پگھلنا","لوہے کو زنگ لگنا"]},a:1,why:{en:"Melting changes the state of water; it does not create a new substance.",te:"మంచు కరగడం వల్ల నీటి స్థితి మాత్రమే మారుతుంది; కొత్త పదార్థం ఏర్పడదు.",ur:"برف پگھلنے سے پانی کی حالت بدلتی ہے، کوئی نیا مادہ نہیں بنتا۔"}},
  {grade:7,subject:"Mathematics",q:{en:"What is the value of 7 × 8?",te:"7 × 8 విలువ ఎంత?",ur:"7 × 8 کی قیمت کیا ہے؟"},opts:{en:["54","56","64"],te:["54","56","64"],ur:["54","56","64"]},a:1,why:{en:"Seven groups of eight make fifty-six.",te:"ఎనిమిదిని ఏడు సార్లు కలిపితే 56 వస్తుంది.",ur:"آٹھ کے سات گروپ مل کر چھپن بنتے ہیں۔"}},
  {grade:8,subject:"Science",q:{en:"Which gas do green plants release during photosynthesis?",te:"కిరణజన్య సంయోగక్రియ సమయంలో పచ్చని మొక్కలు ఏ వాయువును విడుదల చేస్తాయి?",ur:"ضیائی تالیف کے دوران سبز پودے کون سی گیس خارج کرتے ہیں؟"},opts:{en:["Oxygen","Nitrogen","Carbon dioxide"],te:["ఆక్సిజన్","నైట్రోజన్","కార్బన్ డయాక్సైడ్"],ur:["آکسیجن","نائٹروجن","کاربن ڈائی آکسائیڈ"]},a:0,why:{en:"Oxygen is released when plants make food using light energy.",te:"మొక్కలు కాంతి శక్తితో ఆహారం తయారు చేసేటప్పుడు ఆక్సిజన్ విడుదల అవుతుంది.",ur:"پودے روشنی کی توانائی سے خوراک بناتے وقت آکسیجن خارج کرتے ہیں۔"}},
  {grade:8,subject:"Mathematics",q:{en:"What is 25% of 200?",te:"200లో 25 శాతం ఎంత?",ur:"200 کا 25 فیصد کتنا ہے؟"},opts:{en:["25","50","75"],te:["25","50","75"],ur:["25","50","75"]},a:1,why:{en:"25% is one quarter. One quarter of 200 is 50.",te:"25 శాతం అంటే నాలుగో వంతు. 200లో నాలుగో వంతు 50.",ur:"25 فیصد ایک چوتھائی ہے۔ 200 کا ایک چوتھائی 50 ہے۔"}},
  {grade:9,subject:"Science",q:{en:"What is the SI unit of force?",te:"బలానికి SI ప్రమాణం ఏది?",ur:"قوت کی ایس آئی اکائی کیا ہے؟"},opts:{en:["Joule","Newton","Watt"],te:["జౌల్","న్యూటన్","వాట్"],ur:["جول","نیوٹن","واٹ"]},a:1,why:{en:"Force is measured in newtons, named after Isaac Newton.",te:"ఐజాక్ న్యూటన్ పేరు మీద బలాన్ని న్యూటన్‌లలో కొలుస్తారు.",ur:"قوت کو نیوٹن میں ناپا جاتا ہے، جس کا نام آئزک نیوٹن کے نام پر رکھا گیا ہے۔"}},
  {grade:9,subject:"Mathematics",q:{en:"What is the degree of 4x³ + 2x − 1?",te:"4x³ + 2x − 1 బహుపది యొక్క డిగ్రీ ఎంత?",ur:"4x³ + 2x − 1 کثیر رقمی کی ڈگری کیا ہے؟"},opts:{en:["1","2","3"],te:["1","2","3"],ur:["1","2","3"]},a:2,why:{en:"The highest power of x is 3, so the degree is 3.",te:"x యొక్క అత్యధిక ఘాతం 3 కాబట్టి డిగ్రీ 3.",ur:"x کی سب سے بڑی طاقت 3 ہے، اس لیے ڈگری 3 ہے۔"}},
  {grade:10,subject:"Science",q:{en:"Which lens is commonly used to correct myopia?",te:"మయోపియా సరిచేయడానికి సాధారణంగా ఏ కటకం వాడతారు?",ur:"قریب نظری کی اصلاح کے لیے عام طور پر کون سا عدسہ استعمال ہوتا ہے؟"},opts:{en:["Convex lens","Concave lens","Cylindrical lens"],te:["కుంభాకార కటకం","పుటాకార కటకం","స్థూపాకార కటకం"],ur:["محدب عدسہ","مقعر عدسہ","سلنڈری عدسہ"]},a:1,why:{en:"A concave lens diverges light and helps focus distant objects on the retina.",te:"పుటాకార కటకం కాంతిని వ్యాపింపజేసి దూర వస్తువుల ప్రతిబింబం రెటీనాపై పడేలా సహాయపడుతుంది.",ur:"مقعر عدسہ روشنی کو پھیلاتا ہے اور دور کی چیزوں کی تصویر کو پردۂ چشم پر مرکوز کرنے میں مدد دیتا ہے۔"}},
  {grade:10,subject:"Mathematics",q:{en:"What is the discriminant of ax² + bx + c?",te:"ax² + bx + c యొక్క వివేచకం ఏది?",ur:"ax² + bx + c کا امتیازیہ کیا ہے؟"},opts:{en:["b² − 4ac","b² + 4ac","a² − 4bc"],te:["b² − 4ac","b² + 4ac","a² − 4bc"],ur:["b² − 4ac","b² + 4ac","a² − 4bc"]},a:0,why:{en:"The discriminant is b squared minus four times a times c.",te:"వివేచకం అంటే b యొక్క వర్గం నుంచి 4ac తీసివేసిన విలువ.",ur:"امتیازیہ b کا مربع منفی چار ضرب a ضرب c ہوتا ہے۔"}}
];
export const SAMPLE_EXPLANATIONS = [
  {keys:["photosynthesis","ప్రకాశ సంశ్లేషణ","प्रकाश संश्लेषण"],title:"Photosynthesis",subject:"Science",text:{te:"మొక్కలు తమ ఆహారాన్ని తయారు చేసుకునే ప్రక్రియను కిరణజన్య సంయోగక్రియ అంటారు. ఆకులు సూర్యకాంతి, నీరు, గాలిలోని కార్బన్ డయాక్సైడ్‌ను ఉపయోగించి ఆహారం తయారు చేస్తాయి.",en:"Photosynthesis is how green plants make food. Leaves use sunlight, water and carbon dioxide from the air. Oxygen is released during this process.",ur:"ضیائی تالیف وہ عمل ہے جس کے ذریعے سبز پودے اپنی خوراک بناتے ہیں۔ پتے سورج کی روشنی، پانی اور ہوا سے کاربن ڈائی آکسائیڈ استعمال کرتے ہیں۔"}},
  {keys:["fraction","fractions","భిన్నాలు","अंश"],title:"Fractions",subject:"Mathematics",text:{te:"ఒక మొత్తాన్ని సమాన భాగాలుగా విభజించినప్పుడు వాటిలో కొంత భాగాన్ని భిన్నం అంటారు. 1/2 అంటే రెండు సమాన భాగాల్లో ఒక భాగం.",en:"A fraction represents part of a whole. If something is split into two equal parts, one part is one-half, written as 1/2.",ur:"کسر کسی مکمل چیز کے برابر حصوں میں سے ایک یا زیادہ حصوں کو ظاہر کرتی ہے۔ 1/2 کا مطلب دو برابر حصوں میں سے ایک حصہ ہے۔"}},
  {keys:["water cycle","నీటి చక్రం","जल चक्र"],title:"The water cycle",subject:"Science",text:{te:"సూర్యుడి వేడి వల్ల నీరు ఆవిరై పైకి వెళ్తుంది. ఆవిరి చల్లబడి మేఘాలుగా మారుతుంది. తరువాత వర్షంగా భూమికి తిరిగి వస్తుంది.",en:"The Sun heats water and turns it into vapour. The vapour cools to form clouds. Rain returns water to the land and oceans.",ur:"سورج کی گرمی سے پانی بخارات بنتا ہے۔ بخارات ٹھنڈے ہو کر بادل بناتے ہیں اور پھر بارش کی صورت میں زمین پر واپس آتے ہیں۔"}}
];
