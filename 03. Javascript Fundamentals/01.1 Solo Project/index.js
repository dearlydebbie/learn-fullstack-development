let homeScore = 0;
let guestScore = 0;

function incrementScore(team, points) {
    if (team === 'home') {
        homeScore += points;
        document.querySelector('#home .score').textContent = homeScore;
    } else if (team === 'guest') {
        guestScore += points;
        document.querySelector('#guest .score').textContent = guestScore;
    }
}