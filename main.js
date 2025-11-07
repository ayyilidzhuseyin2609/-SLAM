// Sidebar aç/kapa animasyonu
const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

function openSidebar(){
  sidebar.classList.add('open');
  overlay.classList.add('show');
  sidebar.setAttribute('aria-hidden','false');
  hamburger.setAttribute('aria-expanded','true');
}

function closeSidebar(){
  sidebar.classList.remove('open');
  overlay.classList.remove('show');
  sidebar.setAttribute('aria-hidden','true');
  hamburger.setAttribute('aria-expanded','false');
}

hamburger.addEventListener('click', ()=> { 
  sidebar.classList.contains('open') ? closeSidebar() : openSidebar(); 
});
overlay.addEventListener('click', closeSidebar);

// Smooth scroll animasyonu
const scrollBtn = document.getElementById('scrollBtn');
const goals = document.getElementById('goals');

scrollBtn.addEventListener('click', (e)=>{
  e.preventDefault();
  goals.scrollIntoView({behavior:'smooth', block:'start'});
  setTimeout(()=>{ goals.focus(); }, 550);
});

// Sayfa kaydırıldıkça elementleri animasyonla gösterme
const animElements = document.querySelectorAll('.hero, #goals');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('animate');
    }
  });
}, {threshold: 0.2});

animElements.forEach(el => observer.observe(el));
