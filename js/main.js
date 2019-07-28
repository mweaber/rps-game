const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');

const scoreboard = {
    player: 0,
    computer: 0
}

// Play Game
function play(e) {
    restart.style.display = 'inline-block';
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);
    showWinner(winner, computerChoice);
}

// getComputerChoice
function getComputerChoice() {
    const rand = Math.random();
    if (rand < 0.34) {
        return 'rock';
    } else if (rand <= 0.67) {
        return 'paper';
    } else {
        return 'scissors'
    }
}

// getWinner
function getWinner(p, c) {
    if (p === c) {
        return 'draw';
    } else if (p === 'rock') {
        if (c === 'paper') {
            return 'computer';
        } else {
            return 'player'
        }
    } else if (p === 'paper') {
        if (c === 'scissors') {
            return 'computer'
        } else {
            return 'player'
        }
    } else if (p === 'scissors') {
        if (c === "rock") {
            return 'computer'
        } else {
            return 'player'
        }
    }
}

// showWinner
function showWinner(winner, computerChoice) {
    if (winner === 'player') {
        // Update Score
        scoreboard.player++;
        // Show modal results
        result.innerHTML = `
        <h1 class="text-win">You Win!</h1>
        <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>       
        `;
    } else if (winner = 'computer') {
        // Update Score
        scoreboard.computer++;
        // Show modal results
        result.innerHTML = `
         <h1 class="text-lose">You Lost!</h1>
         <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
         `;
    } else {
        // Show modal results
        result.innerHTML = `
        <h1>Draw!</h1>
        <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
        `;
    }
    // Show score
    score.innerHTML = `
    <p>Player: ${scoreboard.player}</p>
    <p>Computer: ${scoreboard.computer}</p>
    `;

    modal.style.display = 'block';
}

// Clear Modal
function clearModal(e) {
    if (e.target == modal) {
        modal.style.display = 'none'
    }
}

// Restart Game
function restartGame() {
    scoreboard.player = 0;
    scoreboard.computer = 0;
    score.innerHTML= `
    <p>Player: 0</p>
    <p>Computer: 0</p>
    `
}

// Event Listeners
choices.forEach(choice => choice.addEventListener('click', play));
window.addEventListener('click', clearModal);
restart.addEventListener('click', restartGame);