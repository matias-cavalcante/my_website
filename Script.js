

window.addEventListener('scroll', function() {
    var cardSection = document.getElementById('cards');
    var position = cardSection.getBoundingClientRect();

    // checking whether fully visible
    if(position.top >= 0 && position.bottom <= window.innerHeight) {
        cardSection.classList.add('animate');
    }
});
