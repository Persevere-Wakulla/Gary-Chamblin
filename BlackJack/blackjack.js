const deckOfCards = [
    {
        suit: 'hearts',
        value: 2,
        img: './svg/2_of_hearts.svg'
    },
    {
        suit: 'hearts',
        value: 3,
        img: './svg/3_of_hearts.svg'
    },
    {
        suit: 'hearts',
        value: 4,
        img: './svg/4_of_hearts.svg'
    },
    {
        suit: 'hearts',
        value: 5,
        img: './svg/5_of_hearts.svg'

    },
    {
        suit: 'hearts',
        value: 6,
        img: './svg/6_of_hearts.svg'

    },
    {
        suit: 'hearts',
        value: 7,
        img: './svg/7_of_hearts.svg'

    },
    {
        suit: 'hearts',
        value: 8,
        img: './svg/8_of_hearts.svg'

    },
    {
        suit: 'hearts',
        value: 9,
        img: './svg/9_of_hearts.svg'

    },
    {
        suit: 'hearts',
        value: 10,
        img: './svg/10_of_hearts.svg'

    },
    {
        suit: 'hearts',
        value: 'J',
        img: './svg/jack_of_hearts.svg'

    },
    {
        suit: 'hearts',
        value: 'Q',
        img: './svg/queen_of_hearts.svg'

    },
    {
        suit: 'hearts',
        value: 'K',
        img: './svg/king_of_hearts.svg'

    },
    {
        suit: 'hearts',
        value: 'A',
        img: './svg/ace_of_hearts.svg'
    },
    {
        suit: 'diamonds',
        value: 2,
        img: './svg/2_of_diamonds.svg'
    },
    {
        suit: 'diamonds',
        value: 3,
        img: './svg/3_of_diamonds.svg'

    },
    {
        suit: 'diamonds',
        value: 4,
        img: './svg/4_of_diamonds.svg'

    },
    {
        suit: 'diamonds',
        value: 5,
        img: './svg/5_of_diamonds.svg'

    },
    {
        suit: 'diamonds',
        value: 6,
        img: './svg/6_of_diamonds.svg'

    },
    {
        suit: 'diamonds',
        value: 7,
        img: './svg/7_of_diamonds.svg'

    },
    {
        suit: 'diamonds',
        value: 8,
        img: './svg/8_of_diamonds.svg'
    },
    {
        suit: 'diamonds',
        value: 9,
        img: './svg/9_of_diamonds.svg'
    },
    {
        suit: 'diamonds',
        value: 10,
        img: './svg/10_of_diamonds.svg'
    },
    {
        suit: 'diamonds',
        value: 'J',
        img: './svg/jack_of_diamonds.svg'
    },
    {
        suit: 'diamonds',
        value: 'Q',
        img: './svg/queen_of_diamonds.svg'
    },
    {
        suit: 'diamonds',
        value: 'K',
        img: './svg/king_of_diamonds.svg'
    },
    {
        suit: 'diamonds',
        value: 'A',
        img: './svg/ace_of_diamonds.svg'
    },
    {
        suit: 'clubs',
        value: 2,
        img: './svg/2_of_clubs.svg'
    },
    {
        suit: 'clubs',
        value: 3,
        img: './svg/3_of_clubs.svg'

    },
    {
        suit: 'clubs',
        value: 4,
        img: './svg/4_of_clubs.svg'

    },
    {
        suit: 'clubs',
        value: 5,
        img: './svg/5_of_clubs.svg'

    },
    {
        suit: 'clubs',
        value: 6,
        img: './svg/6_of_clubs.svg'

    },
    {
        suit: 'clubs',
        value: 7,
        img: './svg/7_of_clubs.svg'

    },
    {
        suit: 'clubs',
        value: 8,
        img: './svg/8_of_clubs.svg'
    },
    {
        suit: 'clubs',
        value: 9,
        img: './svg/9_of_clubs.svg'

    },
    {
        suit: 'clubs',
        value: 10,
        img: './svg/10_of_clubs.svg'

    },
    {
        suit: 'clubs',
        value: 'J',
        img: './svg/jack_of_clubs.svg'

    },
    {
        suit: 'clubs',
        value: 'Q',
        img: './svg/queen_of_clubs.svg'

    },
    {
        suit: 'clubs',
        value: 'K',
        img: './svg/king_of_clubs.svg'

    },
    {
        suit: 'clubs',
        value: 'A',
        img: './svg/ace_of_clubs.svg'

    },
    {
        suit: 'spades',
        value: 2,
        img: './svg/2_of_spades.svg'
    },
    {
        suit: 'spades',
        value: 3,
        img: './svg/3_of_spades.svg'

    },
    {
        suit: 'spades',
        value: 4,
        img: './svg/4_of_spades.svg'

    },
    {
        suit: 'spades',
        value: 5,
        img: './svg/5_of_spades.svg'

    },
    {
        suit: 'spades',
        value: 6,
        img: './svg/6_of_spades.svg'

    },
    {
        suit: 'spades',
        value: 7,
        img: './svg/7_of_spades.svg'

    },
    {
        suit: 'spades',
        value: 8,
        img: './svg/8_of_spades.svg'

    },
    {
        suit: 'spades',
        value: 9,
        img: './svg/9_of_spades.svg'

    },
    {
        suit: 'spades',
        value: 10,
        img: './svg/10_of_spades.svg'

    },
    {
        suit: 'spades',
        value: 'J',
        img: './svg/jack_of_spades.svg'

    },
    {
        suit: 'spades',
        value: 'Q',
        img: './svg/queen_of_spades.svg'

    },
    {
        suit: 'spades',
        value: 'K',
        img: './svg/king_of_spades.svg'

    },
    {
        suit: 'spades',
        value: 'A',
        img: './svg/ace_of_spades.svg'

    },
];

let playerCards = [];
let dealerCards = [];



const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    } return array
};

console.log(deckOfCards);
const playDeck = shuffleArray(deckOfCards);
const card = document.querySelector('.card');
const dealerFaceDown = document.getElementById('dealer-face_down');
const dealerFaceUp = document.getElementById('dealer-face_up');
const potElem = document.getElementById('pot-avail');
const playerFaceDown = document.getElementById('player-face_down');
const playerFaceUp = document.getElementById('player-face_up');
const dealBtnElem = document.getElementById('deal-btn');
const hitBtnElem = document.getElementById('hit');
const stayBtnElem = document.getElementById('stay');
const moneyAvailable = document.getElementById('money');
const betBeingMade = document.getElementById('wager');
const raiseBet = document.getElementById('raise-bet');
const lowerBet = document.getElementById('lower-bet');
const playerArea = document.getElementById('play');
const dealerArea = document.getElementById('deal');
const betBtn = document.getElementById('bet-btn');
const minBtn = document.getElementById('min-bet');
const maxBtn = document.getElementById('max-bet');
const decision = document.getElementById('decision');


// Event Listeners
dealBtnElem.addEventListener('click', dealBtnHandler);
hitBtnElem.addEventListener('click', hitBtnHandler);
stayBtnElem.addEventListener('click', stayBtnHandler);
raiseBet.addEventListener('click', raiseBetHandler);
lowerBet.addEventListener('click', lowerBetHandler);
betBtn.addEventListener('click', betSubmit);
minBtn.addEventListener('click', minBetHandler);
maxBtn.addEventListener('click', maxBetHandler)

//gambling
let count = 0;
let bank = 5000;
let bucket = 0;
moneyAvailable.textContent = bank;
potElem.textContent = bucket

// For cards being dealt
function dealBtnHandler() {
    replaceCards(dealerCards)
    replaceCards(playerCards)
    shuffleArray(deckOfCards)
    myDeck = shuffleArray(deckOfCards)
    dealerArea.innerHTML = '';
    playerArea.innerHTML = '';
    hitBtnElem.addEventListener('click', hitBtnHandler);
    stayBtnElem.addEventListener('click', stayBtnHandler);
    // youWinElem.style.display = 'none'
    // youLoseElem.style.disply = 'none'
    // youTieElem.style.display = 'none'
    // youBustElem.style.display = 'none'
    decision.textContent = ''


    for (let i = 0; i < 2; i++) {
        playerCards.push(playDeck.shift());
        dealerCards.push(playDeck.shift());
        // console.log(dealerCards);
        // console.log(playerCards);
        for (let f = 0; f < playerCards.length; f++) {
            if (playerCards[f].value === 'J' ||
                playerCards[f].value === 'Q' ||
                playerCards[f].value === 'K') {
                playerCards[f].value = 10;
            }
        }
        let aces = [];
        for (let a = 0; a < playerCards.length; a++) {
            if (playerCards[a].value === 'A') {
                playerCards[a].value = 11
                aces.push('a')
            }
            if (aces.length > 1) {
                playerCards[1].value = 1;
            }
        }
    }

    // Create Cards
    for (let p = 0; p < playerCards.length; p++) {
        let myScene = document.createElement('div');
        let myCard = document.createElement('div');
        let myBack = document.createElement('div');
        let myFront = document.createElement('div');
        let myImg = document.createElement('img');

        myScene.classList.add('scene');
        myCard.classList.add('card');
        myBack.classList.add('card__face--back', 'card__face');
        myFront.classList.add('card__face--front', 'card__face');
        myFront.append(myImg);
        myCard.append(myFront);
        myCard.append(myBack);
        myScene.append(myCard);
        playerArea.append(myScene);
        myImg.src = playerCards[p].img;
    }
    for (let d = 0; d < dealerCards.length; d++) {
        for (let f = 0; f < dealerCards.length; f++) {
            if (dealerCards[f].value === 'J' ||
                dealerCards[f].value === 'Q' ||
                dealerCards[f].value === 'K') {
                dealerCards[f].value = 10;
            }
        }
        let aces = [];
        for (let a = 0; a < dealerCards.length; a++) {
            if (dealerCards[a].value === 'A') {
                dealerCards[a].value = 11
                aces.push('a');
            }
            if (aces.length > 1) {
                dealerCards[1].value = 1;
            }
        }

        let myScene = document.createElement('div');
        let myCard = document.createElement('div');
        let myBack = document.createElement('div');
        let myFront = document.createElement('div');
        let myImg = document.createElement('img');

        myScene.classList.add('scene');
        myCard.classList.add('card');
        myBack.classList.add('card__face--back', 'card__face');
        myFront.classList.add('card__face--front', 'card__face');
        myFront.append(myImg);
        myCard.append(myFront);
        myCard.append(myBack);
        myScene.append(myCard);
        dealerArea.append(myScene);
        myImg.src = dealerCards[d].img;

        if (d === 0) {
            myCard.classList.add('is-flipped');
        }

    }


    calculate(playerCards)
    calculate(dealerCards)


    console.log(playerCards);
    console.log(dealerCards);
    if (calculate(playerCards) === 21 && calculate(dealerCards) === 21) {
        tie()
    }
    if (calculate(playerCards) === 21) {
        winDouble()
    }
    if (calculate(dealerCards) === 21) {
        youLose()
    }

    if (calculate(dealerCards) > 21) {
        houseBust()
    }
}

// Hit Button
function hitBtnHandler() {

    let hitCard = playDeck.shift()
    playerCards.push(hitCard);


    let myScene = document.createElement('div');
    let myCard = document.createElement('div');
    let myBack = document.createElement('div');
    let myFront = document.createElement('div');
    let myImg = document.createElement('img');

    myScene.classList.add('scene');
    myCard.classList.add('card');
    myBack.classList.add('card__face--back', 'card__face');
    myFront.classList.add('card__face--front', 'card__face');
    myFront.append(myImg);
    myCard.append(myFront);
    myCard.append(myBack);
    myScene.append(myCard);
    playerArea.append(myScene);

    switch (playerCards.length) {
        case 3:
            myImg.src = playerCards[2].img;
            break;

        case 4:
            myImg.src = playerCards[3].img;
            break;

        case 5:
            myImg.src = playerCards[4].img;
            break;
    }
    for (let f = 0; f < playerCards.length; f++) {
        if (playerCards[f].value === 'J' ||
            playerCards[f].value === 'Q' ||
            playerCards[f].value === 'K') {
            playerCards[f].value = 10;
        }
    }
    let aces = [];
    for (let a = 0; a < playerCards.length; a++) {
        if (playerCards[a].value === 'A') {
            playerCards[a].value = 11
            aces.push('a')
        }
        if (aces.length > 1) {
            playerCards[1].value = 1;
        }
    }
    for (let i = 0; i < playerCards.length; i++) {
        if (calculate(playerCards) > 21 && playerCards[i].value === 11) {
            playerCards[i].value = 1;
        }
    }

    if (calculate(playerCards) > 21) {
        youBust()
    }
    console.log(calculate(playerCards));

}

// Stay Button
function stayBtnHandler() {

    hitBtnElem.removeEventListener('click', hitBtnHandler);

    while (calculate(dealerCards) < 17) {
        let hitCard = playDeck.shift()
        dealerCards.push(hitCard);


        let myScene = document.createElement('div');
        let myCard = document.createElement('div');
        let myBack = document.createElement('div');
        let myFront = document.createElement('div');
        let myImg = document.createElement('img');

        myScene.classList.add('scene');
        myCard.classList.add('card');
        myBack.classList.add('card__face--back', 'card__face');
        myFront.classList.add('card__face--front', 'card__face');
        myFront.append(myImg);
        myCard.append(myFront);
        myCard.append(myBack);
        myScene.append(myCard);
        dealerArea.append(myScene);

        switch (dealerCards.length) {
            case 3:
                myImg.src = dealerCards[2].img;
                break;

            case 4:
                myImg.src = dealerCards[3].img;
                break;

            case 5:
                myImg.src = dealerCards[4].img;
                break;
        }
        for (let f = 0; f < dealerCards.length; f++) {
            if (dealerCards[f].value === 'J' ||
                dealerCards[f].value === 'Q' ||
                dealerCards[f].value === 'K') {
                dealerCards[f].value = 10;
            }
        }
        let aces = [];
        for (let a = 0; a < dealerCards.length; a++) {
            if (dealerCards[a].value === 'A') {
                dealerCards[a].value = 11
                aces.push('a')
            }
            if (aces.length > 1) {
                dealerCards[1].value = 1;
            }
        }
        for (let i = 0; i < dealerCards.length; i++) {
            if (calculate(dealerCards) > 21 && dealerCards[i].value === 11) {
                dealerCards[i].value = 1;
            }
        }

    }
    if (calculate(dealerCards) > 21) {
        youWin()
        return
    }
    if (calculate(dealerCards) > 16) {
        if (calculate(playerCards) === calculate(dealerCards)) {
            tie()
        }

        if (calculate(playerCards) > calculate(dealerCards)) {
            youWin()
        }
        if (calculate(playerCards) < calculate(dealerCards)) {
            youLose()

        }
    }
}
// Raise bet
function raiseBetHandler() {
    if (count >= bank - 1) {
        raiseBet.removeEventListener('click', raiseBetHandler)
    } else {
        raiseBet.addEventListener('click', raiseBetHandler)
        count++
        bank--
        moneyAvailable.textContent = bank
        betBeingMade.textContent = count
    }

}
// Lower Bet
function lowerBetHandler() {
    if (count < 1) {
        lowerBet.removeEventListener('click', lowerBetHandler)
    } else {
        lowerBet.addEventListener('click', lowerBetHandler)
        count--
        bank++
        moneyAvailable.textContent = bank
        betBeingMade.textContent = count
    }

}
// Submit Bet
function betSubmit() {
    bucket += count
    potElem.textContent = bucket
    lowerBet.addEventListener('click', lowerBetHandler)
    count = 0
    betBeingMade.textContent = count

}
// Minimum Bet
function minBetHandler(){
    if (count >= bank - 1) {
        raiseBet.removeEventListener('click', raiseBetHandler)
    } else {
        raiseBet.addEventListener('click', raiseBetHandler)
        count += 5
        bank -= 5
        moneyAvailable.textContent = bank
        betBeingMade.textContent = count
    }
    bucket += count
    potElem.textContent = bucket
    lowerBet.addEventListener('click', lowerBetHandler)
    count = 0
    betBeingMade.textContent = count
}

// Max Bet
function maxBetHandler(){
    if (count >= bank - 1) {
        raiseBet.removeEventListener('click', raiseBetHandler)
    } else {
        raiseBet.addEventListener('click', raiseBetHandler)
        count += 100
        bank -= 100
        moneyAvailable.textContent = bank
        betBeingMade.textContent = count
    }
    bucket += count
    potElem.textContent = bucket
    lowerBet.addEventListener('click', lowerBetHandler)
    count = 0
    betBeingMade.textContent = count

}

// Dealer card that is flipped
function cardHandler() {
    card.classList.toggle('is-flipped')
}
// Tie
function tie() {
    console.log('We Push');
    decision.textContent = 'You Tie'

    hitBtnElem.removeEventListener('click', hitBtnHandler);
    stayBtnElem.removeEventListener('click', stayBtnHandler);
    dealerArea.firstElementChild.firstElementChild.classList.remove('is-flipped');
    // youTieElem.textContent = 'You Tie'
    return

}
// If you get 21 on the deal you Win double
function winDouble() {
    console.log('You Win Double')
    decision.textContent = 'BlackJack'
    decision.textContent = 'You Win Double'
    hitBtnElem.removeEventListener('click', hitBtnHandler);
    stayBtnElem.removeEventListener('click', stayBtnHandler);
    dealerArea.firstElementChild.firstElementChild.classList.remove('is-flipped');
    let total = bank + (bucket * 4)
    moneyAvailable.textContent = total
    bank = total
    bucket = 0
    potElem.textContent = bucket
    return
}
// If You win
function youWin() {
    console.log('You Win')
    decision.textContent = 'You Win'
    hitBtnElem.removeEventListener('click', hitBtnHandler);
    stayBtnElem.removeEventListener('click', stayBtnHandler);
    dealerArea.firstElementChild.firstElementChild.classList.remove('is-flipped');
    let total = bank + (bucket * 2.5)
    moneyAvailable.textContent = totalbank = total
    bucket = 0;
    potElem.textContent = bucket

    return
}
// If you lose
function youLose() {
    console.log('You Lose')
    decision.textContent = 'You Lose'
    hitBtnElem.removeEventListener('click', hitBtnHandler);
    stayBtnElem.removeEventListener('click', stayBtnHandler);
    dealerArea.firstElementChild.firstElementChild.classList.remove('is-flipped');
    bucket = 0
    potElem.textContent = bucket

    return
}
// if you bust
function youBust() {
    console.log('You Bust')
    decision.textContent = 'You Bust'
    hitBtnElem.removeEventListener('click', hitBtnHandler);
    stayBtnElem.removeEventListener('click', stayBtnHandler);
    dealerArea.firstElementChild.firstElementChild.classList.remove('is-flipped');
    bucket = 0
    potElem.textContent = bucket

    return
}
//  If the house busts
function houseBust() {
    console.log('Dealer Bust')
    decision.textContent = 'House Bust'
    hitBtnElem.removeEventListener('click', hitBtnHandler);
    stayBtnElem.removeEventListener('click', stayBtnHandler);
    dealerArea.firstElementChild.firstElementChild.classList.remove('is-flipped');
    let total = bank + (bucket * 2.5)
    bank = total
    bucket = 0;
    potElem.textContent = bucket


}
// function for reduce method
function calculate(arr) {
    let score = arr.reduce((total, current) => total + current.value, 0);
    return score
}
function replaceCards(arr){
    while (arr.length){
        deckOfCards.push(arr.pop())
    }
}
