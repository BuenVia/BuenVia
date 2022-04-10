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

let chosenCategory, wordIndex = 0, wrongAnswer = []

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
        cat.words.forEach((i) => i.correct = false)
        console.log(cat);
        chosenCategory = cat.words
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
        console.log(wordIndex, wrongAnswer);
        userInput.disabled = false
        nextSubmit.style.display = 'none'
        userInputSubmit.style.display = 'inline'
        wordEl.textContent = `${chosenCategory[wordIndex].spa}`
        userInputSubmit.addEventListener('click', checkAnswer)
    } else {
        flashcardContainer.classList.add('hidden')
        summaryContainer.classList.remove('hidden')
    }
}

function checkAnswer() {
    if (userInput.value) {
        nextSubmit.style.backgroundColor = 'green'
        resetValues()
    } else {
        // Wrong answers are pushed to the 'wrongAnswer' variable for retrying again at the end
        wrongAnswer.push(chosenCategory[wordIndex])
        nextSubmit.style.backgroundColor = 'red'
        resetValues()
    }

}

// Resets the flashcard input fields after checking the answer.
function resetValues() {
    console.log(chosenCategory[wordIndex].eng, wordIndex);
    userInput.value = ''
    userInput.disabled = true
    userInputSubmit.style.display = 'none'
    nextSubmit.style.display = 'inline'
    wordIndex++
    nextSubmit.addEventListener('click', openFlashcard)
}

// Helper
function id(id) {
    return document.getElementById(id)
}