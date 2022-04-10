import { col } from "./wordbank.js"

const dashboardContainer = id('dashboardContainer')
const wordListEl = id('wordListEl')

const flashcardContainer = id('flashcardContainer')
const categoryEl = id('categoryEl')
const wordEl = id('wordEl')
const userInput = id('userInput')
const userInputSubmit = id('userInputSubmit')
const nextSubmit = id('nextSubmit')

const summaryContainer = id('summaryContainer')
const summaryGridEl = id('summaryGridEl')

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

    //Console Log each word with its category
    wordDiv.addEventListener('click', () => {
        chosenCategory = cat.words
        // Add property to each word in array to check if a correct answer has been given 
        chosenCategory.forEach((i) => i.correct = [])
        console.log(chosenCategory);
        categoryEl.textContent = `${cat.category}`
        dashboardContainer.classList.add('hidden')
        flashcardContainer.classList.remove('hidden')
        openFlashcard(cat)
    })
})

function openFlashcard() {
    nextSubmit.style.backgroundColor = ''
    // chosenCategory.forEach((word) => console.log(word))
    if (wordIndex < chosenCategory.length) {
        console.log(wordIndex);
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
    if (userInput.value) {
        answerHistory.push({correct: chosenCategory[wordIndex]})
        console.log(chosenCategory[wordIndex]);
        nextSubmit.style.backgroundColor = 'green'
    } else {
        answerHistory.push({incorrect: chosenCategory[wordIndex]})
        console.log(chosenCategory[wordIndex]);
        nextSubmit.style.backgroundColor = 'red'
        // If answer is wrong, it pushes to 'wrong' array to be worked on later
        wrong.push(chosenCategory[wordIndex])
    }

    resetValues()
}

// Resets the flashcard input fields after checking the answer.
function resetValues() {
    // console.log(chosenCategory[wordIndex].eng, wordIndex);
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
        console.log(chosenCategory);
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

// Helper
function id(id) {
    return document.getElementById(id)
}