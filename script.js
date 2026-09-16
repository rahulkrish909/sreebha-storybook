const pages = Array.from({length:12},(_,i)=>`images/panel_${i+1}.jpg`);
let current = 0;
const img = document.getElementById('story-image');
const count = document.getElementById('page-count');
const dots = document.getElementById('page-dots');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
function render(){
  img.src = pages[current];
  img.alt = `The Unusual Wish story page ${current+1}`;
  count.textContent = `Page ${current+1} of ${pages.length}`;
  prev.disabled = current===0;
  next.disabled = current===pages.length-1;
  dots.querySelectorAll('button').forEach((b,i)=>b.classList.toggle('active',i===current));
}
pages.forEach((_,i)=>{
  const b=document.createElement('button');
  b.className='page-dot';
  b.textContent=i+1;
  b.setAttribute('aria-label',`Open page ${i+1}`);
  b.addEventListener('click',()=>{current=i;render()});
  dots.appendChild(b);
});
prev.addEventListener('click',()=>{if(current>0){current--;render()}});
next.addEventListener('click',()=>{if(current<pages.length-1){current++;render()}});
render();
const toggle=document.querySelector('.menu-toggle');
const nav=document.getElementById('main-nav');
toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!open));nav.style.display=open?'none':'flex'});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{if(window.innerWidth<=800){nav.style.display='none';toggle.setAttribute('aria-expanded','false')}}));
