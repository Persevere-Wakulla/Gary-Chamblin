const score = document.getElementById('number');
const compScore = document.getElementById('compScoreNum')
const paper = document.getElementById('paper-img');
const scissors = document.getElementById('scissors-img');
const rock = document.getElementById('rock-img');
const triangle = document.getElementById('background-triangle');
const youPicked = document.getElementById('you-picked');
const housePicked = document.getElementById('house-picked');
const youWinElem = document.getElementById('you-win');
const youLoseElem = document.getElementById('you-lose');
const youTieElem = document.getElementById('tie');
const playAgain = document.getElementById('play-again');
const playArea = document.getElementById('playArea');
const compArea = document.getElementById('play-section');
let compChoiceCurrent = null;
let scoreKept = 0;
let computerScore = 0;
// console.dir(compArea);

// Random item generator
const options = [rock, paper, scissors];

function cpuPick(arr) {
    const arrLength = arr.length;
    const random = Math.floor(Math.random() * arrLength);
    return arr[random]
}
// Clone for computer choice
compChoiceCurrent = cpuPick(options).cloneNode(true);
// console.dir(compChoiceCurrent);

function clean() {
    triangle.style.display = 'none';
    youPicked.style.display = 'block';
    youPicked.style.position = 'relative'
    youPicked.style.left = '-5%';
    youPicked.style.top = '5%';
    housePicked.style.display = 'block';
    housePicked.style.position = 'relative';
    housePicked.style.left = '125%';
    housePicked.style.textAlign = 'center'
    housePicked.style.top = '-35%';
    playAgain.style.display = 'block';
    compChoiceCurrent.style.gridRow = '1/4';
    compChoiceCurrent.style.gridColumn = '3/4';
}

// Paper Details
paper.addEventListener('click', paperHandler);
function paperHandler() {
    clean();
    scissors.style.display = 'none';
    rock.style.display = 'none';
    compArea.prepend(compChoiceCurrent);
    paper.style.gridRow = '1/4';
    paperVs(compChoiceCurrent);
    // console.dir(compChoice)
}

// Scissors details
scissors.addEventListener('click', scissorHandler);
function scissorHandler() {
    clean();
    paper.style.display = 'none';
    rock.style.display = 'none';
    compArea.prepend(compChoiceCurrent);
    scissors.style.gridRow = '1/4';
    scissors.style.gridColumn = '1/2';
    scissorsVs(compChoiceCurrent);
}

// Rock Details
rock.addEventListener('click', rockHandler);
function rockHandler() {
    clean();
    scissors.style.display = 'none';
    paper.style.display = 'none';
    compArea.prepend(compChoiceCurrent);
    rock.style.gridRow = '1/4';
    rock.style.gridColumn = '1/2';
    rockVs(compChoiceCurrent);
}


// Play Again reset page
playAgain.addEventListener('click', reset)
function reset() {
    rock.style.gridRow = '3/4';
    rock.style.gridColumn = '1/4';
    scissors.style.gridRow = '1/2';
    scissors.style.gridColumn = '3/4';
    paper.style.gridRow = '1/2';
    paper.style.gridColumn = '1/2';
    rock.style.display = '';
    scissors.style.display = '';
    paper.style.display = '';
    triangle.style.display = 'block';
    youTieElem.style.display = 'none';
    youLoseElem.style.display = 'none';
    youWinElem.style.display = 'none';
    youPicked.style.display = 'none';
    housePicked.style.display = 'none';
    playAgain.style.display = 'none';
    compChoiceCurrent.remove();
    compChoiceCurrent = cpuPick(options).cloneNode(true);
}


console.log(cpuPick(options))

// Switch statements for determining who wins
function rockVs(elem) {
    console.dir(elem.id);
    switch (elem.id) {
        case 'rock-img':
            youTieElem.style.display = 'block';
            youTieElem.textContent = 'You Tie';
            break;

        case 'paper-img':
            youLoseElem.style.display = 'block';
            youLoseElem.style.textAlign = 'center';
            youLoseElem.textContent = 'You Lose';
            computerScore++;
            compScore.textContent = computerScore;

            break;

        case 'scissors-img':
            youWinElem.style.display = 'block';
            youWinElem.textContent = 'You Win';
            scoreKept++;
            score.textContent = scoreKept;
            break;
        }
}
function paperVs(elem) {
    console.dir(elem.id);
    switch (elem.id) {
        case 'rock-img':
            youWinElem.style.display = 'block';
            youWinElem.textContent = 'You Win';
            scoreKept++;
            score.textContent = scoreKept;
            break;

        case 'paper-img':
            youTieElem.style.display = 'block';
            youTieElem.textContent = 'You Tie';
            break;

        case 'scissors-img':
            youLoseElem.style.display = 'block';
            youLoseElem.textContent = 'You Lose';
            computerScore++;
            compScore.textContent = computerScore;
            break;
    }
}
function scissorsVs(elem) {
    console.dir(elem.id);
    switch (elem.id) {
        case 'rock-img':
            youLoseElem.style.display = 'block';
            youLoseElem.textContent = 'You Lose';
            computerScore++;
            compScore.textContent = computerScore;
            break;

        case 'paper-img':
            youWinElem.style.display = 'block';
            youWinElem.textContent = 'You Win';
            scoreKept++;
            score.textContent = scoreKept;
            break;

        case 'scissors-img':
            youTieElem.style.display = 'block';
            youTieElem.textContent = 'You Tie';
            break;
    }
}


// let newRock = document.createElement('button');
// console.dir(newRock);
// newRock.className = 'rock-img';
// console.dir(newRock);
// let newimg = document.createElement('img');
// newimg.src = './images/icon-rock.svg';
// console.dir(newimg);
// newRock.appendChild(newimg);

// let newRock1 = rock.cloneNode(true);
// newRock1.id = 'compChoice';
// console.dir(newRock1);

// let main = document.querySelector('main');
// main.prepend(newRock1);
// newRock.style.position = 'absolute';
// newRock.style.top = '55%';
