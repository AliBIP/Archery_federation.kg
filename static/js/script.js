document.addEventListener('DOMContentLoaded', function() {
    // Get the hamburger menu and navigation elements
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    // Toggle menu when hamburger is clicked
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('open');
      navMenu.classList.toggle('active');
    });
    
    // Close menu when a nav item is clicked
    const navItems = document.querySelectorAll('.nav-menu a');
    navItems.forEach(item => {
      item.addEventListener('click', function() {
        hamburger.classList.remove('open');
        navMenu.classList.remove('active');
      });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
        hamburger.classList.remove('open');
        navMenu.classList.remove('active');
      }
    });
  });