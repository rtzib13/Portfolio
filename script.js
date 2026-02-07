// Small typewriter effect for the hero. Respects prefers-reduced-motion.
(function(){
  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const el = document.querySelector('.typed-text');
  if(!el) return;
  const phrases = [
    'Junior Software Developer.',
    'Python & Django enthusiast.',
    'Building accessible web applications.'
  ];

  if(prefersReduced){
    el.textContent = phrases[0];
    return;
  }

  let part = 0, partIndex = 0, intervalVal;
  function type(){
    const text = phrases[part].slice(0, ++partIndex);
    el.innerHTML = text + '<span class="cursor"></span>';
    if(text === phrases[part]){
      clearInterval(intervalVal);
      setTimeout(()=>{
        intervalVal = setInterval(erase, 40);
      }, 1000);
    }
  }
  function erase(){
    const text = phrases[part].slice(0, --partIndex);
    el.innerHTML = text + '<span class="cursor"></span>';
    if(partIndex === 0){
      clearInterval(intervalVal);
      part = (part + 1) % phrases.length;
      setTimeout(()=>{
        intervalVal = setInterval(type, 80);
      }, 250);
    }
  }

  intervalVal = setInterval(type, 80);
})();

// Email card click handler - copy to clipboard
document.addEventListener('DOMContentLoaded', function(){
  const emailCard = document.querySelector('a[href="mailto:tzibrandy101@gmail.com"]');
  if(emailCard){
    emailCard.addEventListener('click', function(e){
      e.preventDefault();
      const email = 'tzibrandy101@gmail.com';
      navigator.clipboard.writeText(email).then(function(){
        const hint = emailCard.querySelector('.contact-hint');
        const original = hint.textContent;
        hint.textContent = 'Copied!';
        setTimeout(function(){
          hint.textContent = original;
        }, 2000);
      }).catch(function(){
        alert('Email: ' + email);
      });
    });
  }
});

