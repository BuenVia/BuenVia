import { col } from "./wordbank.js"

const dashboardContainer = id('dashboardContainer')
const wordListEl = id('wordListEl')

const flashcardContainer = id('flashcardContainer')
const categoryEl = id('categoryEl')
const wordEl = id('wordEl')
const userInput = id('userInput')
const userInputSubmit = id('userInputSubmit')
const nextSubmit = id('nextSubmit')
const timerEl = id('timer')

const summaryContainer = id('summaryContainer')
const summaryGridEl = id('summaryGridEl')
const finishButton = id ('finishButton')

let countdown

let chosenCategory = [], wordIndex = 0, answerHistory = []
let wrong = []

// Shows available topics on dashboard
col.forEach((cat) => {
    const wordDiv = document.createElement('div')
    const wordDet = document.createElement('p')

    wordDet.textContent = cat.category

    wordDiv.classList.add('word-list-element')

    wordDiv.appendChild(wordDet)
    wordListEl.appendChild(wordDiv)

    //Start flashcard
    wordDiv.addEventListener('click', () => {
        chosenCategory = cat.words
        // Add property to each word in array to check if a correct answer has been given 
        chosenCategory.forEach((i) => i.correct = [])
        categoryEl.textContent = `${cat.category}`
        dashboardContainer.classList.add('hidden')
        flashcardContainer.classList.remove('hidden')
        openFlashcard(cat)
    })
})

// FLASHCARD FUNCTION
function openFlashcard() {
    console.log(answerHistory);
    nextSubmit.style.backgroundColor = ''
    resetTimer()
    if (wordIndex < chosenCategory.length) {
        countdown = setInterval(timer, 1000)
        userInput.disabled = false
        nextSubmit.style.display = 'none'
        userInputSubmit.style.display = 'inline'
        wordEl.textContent = `${chosenCategory[wordIndex].spa}`
        userInputSubmit.addEventListener('click', checkAnswer)
    } else {
        console.log('--------END--------');
        wrongAnswers()
    }
}

function checkAnswer() {
    clearInterval(countdown)
    if (userInput.value) {
        answerHistory.push({correct: chosenCategory[wordIndex]})
        console.log(chosenCategory[wordIndex]);
        nextSubmit.style.backgroundColor = 'green'
    } else {
        answerHistory.push({incorrect: chosenCategory[wordIndex]})
        nextSubmit.style.backgroundColor = 'red'
        // If answer is wrong, it pushes to 'wrong' array to be worked on later
        wrong.push(chosenCategory[wordIndex])
    }

    resetValues()
}

// Resets the flashcard input fields after checking the answer.
function resetValues() {
    userInput.value = ''
    userInput.disabled = true
    userInputSubmit.style.display = 'none'
    nextSubmit.style.display = 'inline'
    wordIndex++
    nextSubmit.addEventListener('click', openFlashcard)
}

// Takes words in 'wrong' array and reassigns them to 'chosenCatergory' array
function wrongAnswers() {
    if (wrong.length > 0) {
        chosenCategory = []
        wordIndex = 0
        wrong.forEach((i) => {
            chosenCategory.push(i)
        })
        wrong = []
        console.log(chosenCategory.length);
        openFlashcard()
    } else {
        console.log('Done');
        console.log(answerHistory);
        flashcardContainer.classList.add('hidden')
        summaryContainer.classList.remove('hidden')
        answerHistory.forEach((i) => {
            if (i.incorrect) {
                createHistoryEl(i.incorrect.spa, 'red')
            }
            if (i.correct) {
                createHistoryEl(i.correct.spa, 'green')
            }
        })
    }
}

function createHistoryEl(cor, clr) {
    const div = document.createElement('div')
    const p = document.createElement('p')

    p.innerText = `${cor}`

    div.appendChild(p)
    div.classList.add('container')
    div.style.backgroundColor = clr

    summaryGridEl.appendChild(div)
}

// FINISH
finishButton.addEventListener('click', () => {
        dashboardContainer.classList.remove('hidden')
        summaryContainer.classList.add('hidden')
        countdown = ''
        chosenCategory = []
        wordIndex = 0
        answerHistory = []
        wrong = []
        summaryGridEl.innerHTML = ''
})


// TIMER FUNCTION
let timeSec = 10
addZero(timeSec)

function timer() {
    if (timeSec > 0) {
        timeSec--, 1000
        timerEl.innerText = `00:${addZero(timeSec)}`
    } else {
        timerEl.innerText = "Time's up!!!"
        checkAnswer()
    }
}

function resetTimer() {
    timeSec = 10
    timerEl.innerText = `00:${addZero(timeSec)}`
}


// Helper
function id(id) {
    return document.getElementById(id)
}

function addZero(elem) {
    if (elem < 10) {
        return `0${elem}`
    } else {
        return elem
    }
}