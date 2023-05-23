
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
  
function navigateToMyProjects() {
    // perform any action you need here
    location.href = "#my-projects";
}

window.onload = function() {
    var bars = document.getElementsByClassName('bar');
    for (var i = 0; i < bars.length; i++) {
      bars[i].style.width = "100%";
    }
  };

window.addEventListener('scroll', function() {
    var barSection = document.getElementById('barSection');
    var position = barSection.getBoundingClientRect();
    // checking whether fully visible
    if(position.top < window.innerHeight && position.bottom > 0) {
        var bars = barSection.getElementsByClassName('bar');
        for (var i = 0; i < bars.length; i++) {
            bars[i].classList.add('animate');
        }
    }
});



  

