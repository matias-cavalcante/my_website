
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

window.addEventListener('scroll', function() {
    var iconSection = document.querySelector('#stack-icons-box'); // Use querySelector to get the first matching element
    var position = iconSection.getBoundingClientRect();
    // checking whether fully visible
    if(position.top >= 0 && position.bottom <= window.innerHeight) {
        var icons = iconSection.querySelectorAll('.falling-icon'); // Use querySelectorAll to get all matching elements
        for (var i = 0; i < icons.length; i++) {
            icons[i].classList.add('falling-animation');
        }
    } else {
        var icons = iconSection.querySelectorAll('.falling-icon'); // Use querySelectorAll to get all matching elements
        for (var i = 0; i < icons.length; i++) {
            icons[i].classList.remove('falling-animation');
        }
    }
});




window.addEventListener('scroll', function() {
    var barSection = document.querySelector('.container'); // Use querySelector to get the first matching element
    var position = barSection.getBoundingClientRect();
    // checking whether fully visible
    if(position.top >= 0 && position.bottom <= window.innerHeight) {
        var bars = barSection.querySelectorAll('.bar'); // Use querySelectorAll to get all matching elements
        for (var i = 0; i < bars.length; i++) {
            bars[i].classList.add('animate');
        }
    }
});




  

