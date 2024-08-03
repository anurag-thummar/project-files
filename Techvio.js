// Function to scroll to the top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show the button when scrolled down 100px
window.onscroll = function() {
    const button = document.getElementById('scrollToTopBtn');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
};



  

window.addEventListener('scroll', function() {
    var header = document.querySelector('.home-page__header');
    var sticky = header.offsetTop;

    if (window.pageYOffset > sticky) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});







document.addEventListener('DOMContentLoaded', function() {
    var header = document.querySelector('.home-page__header');
    var logo = document.getElementById('logo');
    var heroSection = document.getElementById('hero-section');
    var heroSection1 = document.getElementById('hero-section1');
    var savedTheme = localStorage.getItem('theme');
    var savedHeroSection = localStorage.getItem('heroSection');

    // Apply saved theme
    if (savedTheme === 'alternative') {
        header.classList.add('alternative-theme');
        logo.src = './ASSETS/logo-black.png'; // Change to black logo
    } else {
        logo.src = './ASSETS/logo.png'; // Change to original logo
    }

    // Apply saved hero section visibility
    if (savedHeroSection === 'hero-section1') {
        heroSection.style.display = 'none';
        heroSection1.style.display = 'block';
    } else {
        heroSection.style.display = 'block';
        heroSection1.style.display = 'none';
    }

    // Theme toggle button event listener
    document.getElementById('support-btn').addEventListener('click', function() {
        header.classList.toggle('alternative-theme');
        
        if (header.classList.contains('alternative-theme')) {
            localStorage.setItem('theme', 'alternative');
            logo.src = './ASSETS/logo-black.png'; // Change to black logo
        } else {
            localStorage.setItem('theme', 'default');
            logo.src = './ASSETS/logo.png'; // Change to original logo
        }

        // Toggle hero sections
        if (heroSection.style.display === 'none') {
            heroSection.style.display = 'block';
            heroSection1.style.display = 'none';
            localStorage.setItem('heroSection', 'hero-section');
        } else {
            heroSection.style.display = 'none';
            heroSection1.style.display = 'block';
            localStorage.setItem('heroSection', 'hero-section1');
        }
    });
});











{/* <div class="creative-shape-div">
            <img class="bottom-creative-shape" src="./ASSETS/home-bottom-shape.png" />
          </div>

          <div class="color-div">

          </div>
          particles.js container
          

          particles.js lib - https://github.com/VincentGarreau/particles.js */}