const toggle = document.querySelector('.theme-toggle');
const body = document.body;
const darkMode = localStorage.getItem('dark-mode');

// Check local storage for preference on load
if (darkMode === 'enabled') {
  body.classList.add('dark-mode');
  if (toggle) {
    toggle.classList.add('rotated');
  }
}

// Toggle event listener
if (toggle) {
  toggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Save preference
    if (body.classList.contains('dark-mode')) {
      localStorage.setItem('dark-mode', 'enabled');
    } else {
      localStorage.setItem('dark-mode', 'disabled');
    }
    
    toggle.classList.toggle('rotated');
  });
}