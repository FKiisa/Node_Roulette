let _balance = 1000;
let _previousWinningNumber = null;
let _betSize = null;
let _currentNumber = null;
let _betArray = [];
let _returnedValue = null;

let openSessionBtn  = document.getElementById('OpenSession');
let balanceLabel    = document.getElementById('Balance');
let betInput        = document.getElementById('BetAmount');
let betPosition     = document.getElementById('BetPosition');
let statusLabel     = document.getElementById('Status');
let gameStatus      = document.getElementById('GameStatus');
let spinBtn         = document.getElementById("Spinner");

let _rouletteWheel = [
    // 1st12
    {
        "number": 0,
        "numberGroup": "all",
        "1st12": true,
        "2nd12": false,
        "3rd12": false,
        "1to18": true,
        "19to36": false,
        "oddOrEven": "even",
        "redOrBlack": "green"
    },
    {
        "number": 1,
        "numberGroup": "bottom",
        "1st12": true,
        "2nd12": false,
        "3rd12": false,
        "1to18": true,
        "19to36": false,
        "oddOrEven": "odd",
        "redOrBlack": "black"
    },
    {
        "number": 2,
        "numberGroup": "middle",
        "1st12": true,
        "2nd12": false,
        "3rd12": false,
        "1to18": true,
        "19to36": false,
        "oddOrEven": "even",
        "redOrBlack": "red"
    },
    {
        "number": 3,
        "numberGroup": "top",
        "1st12": true,
        "2nd12": false,
        "3rd12": false,
        "1to18": true,
        "19to36": false,
        "oddOrEven": "odd",
        "redOrBlack": "black"
    },
    {
        "number": 4,
        "numberGroup": "bottom",
        "1st12": true,
        "2nd12": false,
        "3rd12": false,
        "1to18": true,
        "19to36": false,
        "oddOrEven": "even",
        "redOrBlack": "red"
    },
    {
        "number": 5,
        "numberGroup": "middle",
        "1st12": true,
        "2nd12": false,
        "3rd12": false,
        "1to18": true,
        "19to36": false,
        "oddOrEven": "odd",
        "redOrBlack": "black"
    },
    {
        "number": 6,
        "numberGroup": "top",
        "1st12": true,
        "2nd12": false,
        "3rd12": false,
        "1to18": true,
        "19to36": false,
        "oddOrEven": "even",
        "redOrBlack": "red"
    },
    {
        "number": 7,
        "numberGroup": "bottom",
        "1st12": true,
        "2nd12": false,
        "3rd12": false,
        "1to18": true,
        "19to36": false,
        "oddOrEven": "odd",
        "redOrBlack": "black"
    },
    {
        "number": 8,
        "numberGroup": "middle",
        "1st12": true,
        "2nd12": false,
        "3rd12": false,
        "1to18": true,
        "19to36": false,
        "oddOrEven": "even",
        "redOrBlack": "red"
    },
    {
        "number": 9,
        "numberGroup": "top",
        "1st12": true,
        "2nd12": false,
        "3rd12": false,
        "1to18": true,
        "19to36": false,
        "oddOrEven": "odd",
        "redOrBlack": "black"
    },
    {
        "number": 10,
        "numberGroup": "bottom",
        "1st12": true,
        "2nd12": false,
        "3rd12": false,
        "1to18": true,
        "19to36": false,
        "oddOrEven": "even",
        "redOrBlack": "red"
    },
    {
        "number": 11,
        "numberGroup": "middle",
        "1st12": true,
        "2nd12": false,
        "3rd12": false,
        "1to18": true,
        "19to36": false,
        "oddOrEven": "odd",
        "redOrBlack": "black"
    },
    {
        "number": 12,
        "numberGroup": "top",
        "1st12": true,
        "2nd12": false,
        "3rd12": false,
        "1to18": true,
        "19to36": false,
        "oddOrEven": "even",
        "redOrBlack": "red"
    },
    // 2nd12
    {
        "number": 13,
        "numberGroup": "bottom",
        "1st12": false,
        "2nd12": true,
        "3rd12": false,
        "1to18": true,
        "19to36": false,
        "oddOrEven": "odd",
        "redOrBlack": "black"
    },
    {
        "number": 14,
        "numberGroup": "middle",
        "1st12": false,
        "2nd12": true,
        "3rd12": false,
        "1to18": true,
        "19to36": false,
        "oddOrEven": "even",
        "redOrBlack": "red"
    },
    {
        "number": 15,
        "numberGroup": "top",
        "1st12": false,
        "2nd12": true,
        "3rd12": false,
        "1to18": true,
        "19to36": false,
        "oddOrEven": "odd",
        "redOrBlack": "black"
    },
    {
        "number": 16,
        "numberGroup": "bottom",
        "1st12": false,
        "2nd12": true,
        "3rd12": false,
        "1to18": true,
        "19to36": false,
        "oddOrEven": "even",
        "redOrBlack": "red"
    },
    {
        "number": 17,
        "numberGroup": "middle",
        "1st12": false,
        "2nd12": true,
        "3rd12": false,
        "1to18": true,
        "19to36": false,
        "oddOrEven": "odd",
        "redOrBlack": "black"
    },
    {
        "number": 18,
        "numberGroup": "top",
        "1st12": false,
        "2nd12": true,
        "3rd12": false,
        "1to18": true,
        "19to36": false,
        "oddOrEven": "even",
        "redOrBlack": "red"
    },
    {
        "number": 19,
        "numberGroup": "bottom",
        "1st12": false,
        "2nd12": true,
        "3rd12": false,
        "1to18": false,
        "19to36": true,
        "oddOrEven": "odd",
        "redOrBlack": "black"
    },
    {
        "number": 20,
        "numberGroup": "middle",
        "1st12": false,
        "2nd12": true,
        "3rd12": false,
        "1to18": false,
        "19to36": true,
        "oddOrEven": "even",
        "redOrBlack": "red"
    },
    {
        "number": 21,
        "numberGroup": "top",
        "1st12": false,
        "2nd12": true,
        "3rd12": false,
        "1to18": false,
        "19to36": true,
        "oddOrEven": "odd",
        "redOrBlack": "black"
    },
    {
        "number": 22,
        "numberGroup": "bottom",
        "1st12": false,
        "2nd12": true,
        "3rd12": false,
        "1to18": false,
        "19to36": true,
        "oddOrEven": "even",
        "redOrBlack": "red"
    },
    {
        "number": 23,
        "numberGroup": "middle",
        "1st12": false,
        "2nd12": true,
        "3rd12": false,
        "1to18": false,
        "19to36": true,
        "oddOrEven": "odd",
        "redOrBlack": "black"
    },
    {
        "number": 24,
        "numberGroup": "top",
        "1st12": false,
        "2nd12": true,
        "3rd12": false,
        "1to18": false,
        "19to36": true,
        "oddOrEven": "even",
        "redOrBlack": "red"
    },
    // 3rd12
    {
        "number": 25,
        "numberGroup": "bottom",
        "1st12": false,
        "2nd12": false,
        "3rd12": true,
        "1to18": false,
        "19to36": true,
        "oddOrEven": "odd",
        "redOrBlack": "black"
    },
    {
        "number": 26,
        "numberGroup": "middle",
        "1st12": false,
        "2nd12": false,
        "3rd12": true,
        "1to18": false,
        "19to36": true,
        "oddOrEven": "even",
        "redOrBlack": "red"
    },
    {
        "number": 27,
        "numberGroup": "top",
        "1st12": false,
        "2nd12": false,
        "3rd12": true,
        "1to18": false,
        "19to36": true,
        "oddOrEven": "odd",
        "redOrBlack": "black"
    },
    {
        "number": 28,
        "numberGroup": "bottom",
        "1st12": false,
        "2nd12": false,
        "3rd12": true,
        "1to18": false,
        "19to36": true,
        "oddOrEven": "even",
        "redOrBlack": "red"
    },
    {
        "number": 29,
        "numberGroup": "middle",
        "1st12": false,
        "2nd12": false,
        "3rd12": true,
        "1to18": false,
        "19to36": true,
        "oddOrEven": "odd",
        "redOrBlack": "black"
    },
    {
        "number": 30,
        "numberGroup": "top",
        "1st12": false,
        "2nd12": false,
        "3rd12": true,
        "1to18": false,
        "19to36": true,
        "oddOrEven": "even",
        "redOrBlack": "red"
    },
    {
        "number": 31,
        "numberGroup": "bottom",
        "1st12": false,
        "2nd12": false,
        "3rd12": true,
        "1to18": false,
        "19to36": true,
        "oddOrEven": "odd",
        "redOrBlack": "black"
    },
    {
        "number": 32,
        "numberGroup": "middle",
        "1st12": false,
        "2nd12": false,
        "3rd12": true,
        "1to18": false,
        "19to36": true,
        "oddOrEven": "even",
        "redOrBlack": "red"
    },
    {
        "number": 33,
        "numberGroup": "top",
        "1st12": false,
        "2nd12": false,
        "3rd12": true,
        "1to18": false,
        "19to36": true,
        "oddOrEven": "odd",
        "redOrBlack": "black"
    },
    {
        "number": 34,
        "numberGroup": "bottom",
        "1st12": false,
        "2nd12": false,
        "3rd12": true,
        "1to18": false,
        "19to36": true,
        "oddOrEven": "even",
        "redOrBlack": "red"
    },
    {
        "number": 35,
        "numberGroup": "middle",
        "1st12": false,
        "2nd12": false,
        "3rd12": true,
        "1to18": false,
        "19to36": true,
        "oddOrEven": "odd",
        "redOrBlack": "black"
    },
    {
        "number": 36,
        "numberGroup": "top",
        "1st12": false,
        "2nd12": false,
        "3rd12": true,
        "1to18": false,
        "19to36": true,
        "oddOrEven": "even",
        "redOrBlack": "red"
    }
]

function checkForBets() {
    return _betArray;
}
function addToArray(id, value) {
    _betArray[id] = value;
}
function getTotalBetSize() {
    return _betSize;
}
function getSpecificBetSize(id) {
    return _betArray[id];
}
function getPreviousWinningNumber() {
    return _previousWinningNumber;
}
function addToHistory(result) {
    _previousWinningNumber = result;
}
function addValue(value) {
    _returnedValue = value;
}
function getReturnedValue() {
    return _returnedValue;
}
function getRouletteWheel() {
    return _rouletteWheel
}
function getBalance() {
    return _balance;
}
function addToBalance(value) {
    _balance += value;
}
function updateBalance(bal) {
    document.getElementById('Balance').innerHTML = "Your Balance: " + bal;
}
function calculateBalance(balance, bet) {
    return balance -= bet;
}
function rollRouletteWheel() {
    _previousWinningNumber = Math.floor(Math.random() * 37);
}
function getWinningNumber() {
    return _previousWinningNumber;
}


openSessionBtn.addEventListener('click', (e) => {
    spinBtn.disabled = false;
    statusLabel.innerHTML = 'Waiting for your bets please';
    let balance = getBalance()
    balanceLabel.innerHTML = 'Your balance: ' + balance;
})
spinBtn.addEventListener('click', (event) => {
    let betValue = betInput.value;
    let betIdx = betPosition.value;
    addToArray(betIdx, betValue);
    let newBal = calculateBalance(_balance, betValue);
    updateBalance(newBal);
    addValue('Adding ' + betValue + '€ on number ' + betIdx + '!');
    statusLabel.innerHTML = getReturnedValue();
    setTimeout(() => {
        rollRouletteWheel()
        gameStatus.innerHTML = "Winning number is: " + getWinningNumber();
    }, 100);
})
