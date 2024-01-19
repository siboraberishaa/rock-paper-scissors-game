let userPoints = document.getElementById('user-points')
let compPoints = document.getElementById('comp-points')
let resultBoard = document.querySelector('result-board')
let winner = document.querySelector('p')
let rock = document.getElementById('rock')
let paper = document.getElementById('paper')
let scissors = document.getElementById('scissors')
let restartGame = document.getElementById('restartgame')
let userpoint = 0
let comppoint = 0


var computerChoice = ''
    function computer(){
    let computerChoice = ['rock','paper','scissors']
    let randomChoice = Math.floor(Math.random() * 3)
    return computerChoice[randomChoice]
}


function userWin(){
    userpoint++
    userPoints.innerHTML = userpoint
    userPoints.classList.add('color-change2')
    winner.textContent = `Computer choose ${computerChoice}. You win this round 🎉` 

    if (userpoint === 10){
        declarewinner('You')
    }
}

function compWin(){
   comppoint++
   compPoints.innerHTML = comppoint
   compPoints.classList.add('color-change')
   winner.textContent = `Computer choose ${computerChoice}. You lost this round 👎`

   if (comppoint === 10){
    declarewinner('Computer')
}
    
}

function declarewinner(winnername){

    rock.removeEventListener('click', rockClickHandler)
    paper.removeEventListener('click', paperClickHandler)
    scissors.removeEventListener('click', scissorsClickHandler)

    winner.textContent = `${winnername} won this game 🏆`

    let restartbtn = document.createElement('button')
    restartbtn.textContent = 'Play another match'
    restartbtn.classList.add('restart-btn')
    restartGame.appendChild(restartbtn)

    restartbtn.addEventListener('click', function(){
        rock.addEventListener('click', rockClickHandler)
        paper.addEventListener('click', paperClickHandler)
        scissors.addEventListener('click', scissorsClickHandler)

        userpoint = 0
        comppoint = 0
        userPoints.textContent = '0'
        compPoints.textContent = '0'
        restartbtn.style.display = 'none'
        winner.textContent = 'Choose Rock, Paper or Scissors to start the game'
    })
}

function draw(){
    winner.textContent = `It's a draw 🤝`
}


function game(userChoice){
    computerChoice = computer()
    // console.log('user: ' + userChoice)
    // console.log('comp: ' + computerChoice)
    switch(userChoice + computerChoice){
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
        userWin()
        break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
        compWin()
        break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
        draw()
        break;
    }
}


function rockClickHandler(){
    game('rock')
}

function paperClickHandler(){
    game('paper')
}

function scissorsClickHandler(){
    game('scissors')
}

function startgame(){
    rock.addEventListener('click', rockClickHandler)
    paper.addEventListener('click', paperClickHandler)
    scissors.addEventListener('click', scissorsClickHandler)
}
startgame()
