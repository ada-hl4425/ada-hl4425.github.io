const languageButton=document.querySelector('#language');
let language='en';
try { language=localStorage.getItem('hao-research-language')==='zh'?'zh':'en'; } catch {}
function renderLanguage(){document.documentElement.lang=language==='zh'?'zh-CN':'en';document.querySelectorAll('[data-en][data-zh]').forEach(el=>{el.innerHTML=el.dataset[language]});languageButton.textContent=language==='en'?'中文 ↗':'EN ↗';languageButton.setAttribute('aria-label',language==='en'?'切换为中文':'Switch to English');}
languageButton.addEventListener('click',()=>{language=language==='en'?'zh':'en';try{localStorage.setItem('hao-research-language',language)}catch{}renderLanguage()});
renderLanguage();document.querySelector('#year').textContent=new Date().getFullYear();
