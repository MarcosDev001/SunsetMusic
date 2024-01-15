document.addEventListener("DOMContentLoaded", function() {
    const dropdowns = document.querySelectorAll('.dropdown');
  
    dropdowns.forEach(function(dropdown) {
      const toggle = dropdown.querySelector('.dropdown-toggle');
  
      dropdown.addEventListener('mouseenter', function() {
        this.querySelector('.submenu').style.display = 'block';
        toggle.querySelector('.fa-chevron-down').classList.add('rotate'); //AMIGA ESSA FUNÇAO VAI FAZER A SETINHA VIRAR E ATIVAR O DROPDOWN NO HTML
      });
  
      dropdown.addEventListener('mouseleave', function() {
        this.querySelector('.submenu').style.display = 'none';
        toggle.querySelector('.fa-chevron-down').classList.remove('rotate'); 
      });
    });
  });
  