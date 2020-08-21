alert('kill the Evil mole in maximum 60 seconds\nbefore it kills you by its eyes that shoots laser')
const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')

let result = 100
let currentTime = timeLeft.textContent

function randomSquare() {
    square.forEach(className => {
        className.classList.remove('mole')
    })
    let randomPosition = square[Math.floor(Math.random() * 9)]
    randomPosition.classList.add('mole')

    hitPosition = randomPosition.id
}

square.forEach(id => {
    id.addEventListener('mouseup',() => {
        if(id.id === hitPosition) {
            result--
            score.textContent = result
            if(result === 0) {
                alert('Congratulatoins! You killed the Evil mole')
            }
        }
    })
})

function moveMole() {
    let timerId = null
    timerId = setInterval(randomSquare, 800)
}

moveMole()

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if(currentTime === 0 && result > 0) {
        clearInterval(timerId)
        alert('You were killed by Evil mole')
    }
}

let timerId = setInterval(countDown, 1000)