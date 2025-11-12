// Small JS: smooth scroll for anchor links
document.addEventListener('click', function(e){
  if(e.target.tagName === 'A' && e.target.getAttribute('href') && e.target.getAttribute('href').startsWith('#')){
    e.preventDefault();
    const id = e.target.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if(el) el.scrollIntoView({behavior:'smooth'});
  }
});
document.addEventListener("scroll", function() {
  const portfolio = document.querySelector("#projects.fade-on-scroll");
  if (!portfolio) return;

  const rect = portfolio.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  // how much of the section is visible
  const visibleRatio = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight + rect.height)));

  // set opacity based on how much is visible
  portfolio.style.opacity = 0.7 + (visibleRatio * 0.5);
});
let lastScroll = 0;
const header = document.querySelector('.site-header');

window.addEventListener('scroll', function() {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll) {
    // scrolling down → fade out header
    header.style.opacity = 0;
  } else {
    // scrolling up → fade in header
    header.style.opacity = 1;
  }

  lastScroll = currentScroll;
});