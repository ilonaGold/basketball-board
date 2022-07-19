/* variables */

let homeScore = document.getElementById("score-home");
let guestScore = document.getElementById("score-guest");

const onePointHome = document.getElementById("add-one-btn-home");
const twoPointsHome = document.getElementById("add-two-btn-home");
const threePointsHome = document.getElementById("add-three-btn-home");
const onePointGuest = document.getElementById("add-one-btn-guest");
const twoPointsGuest = document.getElementById("add-two-btn-guest");
const threePointsGuest = document.getElementById("add-three-btn-guest");

const homeTeam = document.getElementById("team-name-home");
const guestTeam = document.getElementById("team-name-guest");
const mediaQuery = window.matchMedia("(min-width: 768px)");

const newGameBtn = document.getElementById("new-game-btn");

let updatedHomeScore = 0;
let updatedGuestScore = 0;

/* event listeners */

onePointHome.addEventListener("click", addOnePointHome);
twoPointsHome.addEventListener("click", addTwoPointsHome);
threePointsHome.addEventListener("click", addThreePointsHome);

onePointGuest.addEventListener("click", addOnePointGuest);
twoPointsGuest.addEventListener("click", addTwoPointsGuest);
threePointsGuest.addEventListener("click", addThreePointsGuest);

newGameBtn.addEventListener("click", newGame);

/* functions */

function addOnePointHome(){
    updatedHomeScore += 1;
    homeScore.textContent = updatedHomeScore;
    changeColor();
}

function addTwoPointsHome(){
    updatedHomeScore += 2;
    homeScore.textContent = updatedHomeScore;
    changeColor();
}

function addThreePointsHome(){
    updatedHomeScore += 3;
    homeScore.textContent = updatedHomeScore;
    changeColor();
}

function addOnePointGuest(){
    updatedGuestScore += 1;
    guestScore.textContent = updatedGuestScore;
    changeColor();
}

function addTwoPointsGuest(){
    updatedGuestScore += 2;
    guestScore.textContent = updatedGuestScore;
    changeColor();
}

function addThreePointsGuest(){
    updatedGuestScore += 3;
    guestScore.textContent = updatedGuestScore;
    changeColor();
}

function changeColor() {
    if (updatedHomeScore > updatedGuestScore){
        homeTeam.style.color = 'var(--green)';
        guestTeam.style.color = 'var(--white)';
        if (mediaQuery.matches){
            guestTeam.style.color = 'var(--black)';
            homeTeam.style.textShadow = ('1px 1px 2px var(--black)');
        }
    } else if (updatedHomeScore < updatedGuestScore){
        homeTeam.style.color = 'var(--white)';
        guestTeam.style.color = 'var(--green)';
        if (mediaQuery.matches){
            homeTeam.style.color = 'var(--black)';
            guestTeam.style.textShadow = ('1px 1px 2px var(--black)');
        }
    } else {
        homeTeam.style.color = 'var(--white)';
        guestTeam.style.color = 'var(--white)';
        if (mediaQuery.matches){
            homeTeam.style.color = 'var(--black)';
            homeTeam.style.textShadow = 'none';
            guestTeam.style.color = 'var(--black)';
            guestTeam.style.textShadow = 'none';
        }
    }
}

function newGame(){
    homeScore.textContent = 0;
    guestScore.textContent = 0; 
    updatedHomeScore = 0;
    updatedGuestScore = 0;
    changeColor();
};


// https://css-tricks.com/working-with-javascript-media-queries/
// https://scrimba.com/scrim/cvKDkRf2 - interesting peer solution

