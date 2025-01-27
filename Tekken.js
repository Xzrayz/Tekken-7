document.addEventListener("DOMContentLoaded", () => {
    const fightButton = document.getElementById('fightButton');
    const charactersSection = document.getElementById('characters');
    
    fightButton.addEventListener('click', () => {
        alert("Get ready for an epic battle in Tekken 7!");
    });

    // Animating Fighters on Hover
    const fighters = document.querySelectorAll('.fighter');
    fighters.forEach(fighter => {
        fighter.addEventListener('mouseover', () => {
            fighter.style.transform = 'scale(1.1)';
        });
        fighter.addEventListener('mouseout', () => {
            fighter.style.transform = 'scale(1)';
        });
    });
});
