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
// --- Timeline Scroll Animation ---

const timeline = document.querySelector('.timeline');

if (timeline) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // If the timeline is visible on the screen
      if (entry.isIntersecting) {
        const items = entry.target.querySelectorAll('li');
        
        // Loop through each item and reveal it with a delay
        items.forEach((item, index) => {
          setTimeout(() => {
            item.classList.add('visible');
          }, index * 350); // 200ms delay between each pop-up
        });
        
        // Stop observing once the animation has triggered
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 }); // Trigger when 20% of the timeline is visible

  observer.observe(timeline);
}
// --- Mobile Menu Auto-Close ---
// Select all navigation links
const navLinks = document.querySelectorAll('.nav-link');
const menuCollapse = document.getElementById('navbarNav');

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    // Check if the menu is open (has the 'show' class)
    if (menuCollapse.classList.contains('show')) {
      // Retrieve the Bootstrap collapse instance and hide it
      const bsCollapse = bootstrap.Collapse.getInstance(menuCollapse);
      if (bsCollapse) {
        bsCollapse.hide();
      }
    }
  });
});