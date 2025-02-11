// Adding event listeners to each fighter for hover effects

document.querySelectorAll('.fighter').forEach(fighter => {
    fighter.addEventListener('mouseenter', function () {
        // Add a glowing effect or any other hover interaction
        fighter.querySelector('.fighter-image').style.filter = 'brightness(1.5)';
    });

    fighter.addEventListener('mouseleave', function () {
        // Remove the glowing effect
        fighter.querySelector('.fighter-image').style.filter = 'none';
    });
});
