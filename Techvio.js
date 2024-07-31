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



  


document.getElementById('support-btn').addEventListener('click', function() {
    var header = document.querySelector('.home-page__header');
    var heroSection = document.getElementById('hero-section');
    var heroSection1 = document.getElementById('hero-section1');
    
    header.classList.toggle('alternative-theme');
    
    if (heroSection.style.display === 'none') {
        heroSection.style.display = 'block';
        heroSection1.style.display = 'none';
    } else {
        heroSection.style.display = 'none';
        heroSection1.style.display = 'block';
    }
});









{/* <div class="creative-shape-div">
            <img class="bottom-creative-shape" src="./ASSETS/home-bottom-shape.png" />
          </div>

          <div class="color-div">

          </div>
          particles.js container
          

          particles.js lib - https://github.com/VincentGarreau/particles.js */}