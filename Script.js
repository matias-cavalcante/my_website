
function toggleMenu() {
    const navbar = document.getElementById("mobile-nav");
    const body = document.body;
    
    if (navbar.classList.contains('active')) {
        navbar.classList.remove('active');
        body.classList.remove('disable-scroll');
    } else {
        navbar.classList.add('active');
        body.classList.add('disable-scroll');
    }
}

document.querySelectorAll('#mobile-nav a').forEach(function(link) {
    link.addEventListener('click', toggleMenu);
  });
  
  window.addEventListener('scroll', function() {
    var cardSection = document.getElementById('cards');
    var position = cardSection.getBoundingClientRect();
    // checking whether fully visible
    if(position.top < window.innerHeight && position.bottom > 0) {
        cardSection.classList.add('animate');
    }
});

function navigateToMyProjects() {
    // perform any action you need here
    location.href = "#my-projects";
}

