import { col } from "./wordbank.js"

const dashboardContainer = id('dashboardContainer')
const wordListEl = id('wordListEl')

const flashcardContainer = id('flashcardContainer')
const categoryEl = id('categoryEl')
const wordEl = id('wordEl')
const userInput = id('userInput')
const userInputSubmit = id('userInputSubmit')

// Shows available topics on dashboard
col.forEach((word) => {
    const wordDiv = document.createElement('div')
    const wordDet = document.createElement('p')

    wordDet.textContent = word.category

    wordDiv.classList.add('word-list-element')

    wordDiv.appendChild(wordDet)
    wordListEl.appendChild(wordDiv)

    //Console Log each word with its category
    wordDiv.addEventListener('click', () => {
        word.words.forEach(i => console.log(word.category, i))
        dashboardContainer.classList.add('hidden')
        flashcardContainer.classList.remove('hidden')
        categoryEl.textContent = word.category
        setFlashcards(word)
    })
})

let wordIndex = 0

// Closes dashboard and opens flashcard
function setFlashcards(subject) {
    wordEl.textContent = subject.words[wordIndex].eng
    userInputSubmit.addEventListener('click', () => {
        checkAnswer(subject.words[wordIndex].spa)
    })
}

function checkAnswer(subject) {
    if(userInput.value === subject) {
        console.log('correct');
    } else {
        console.log('Incorrect');
    }
}

// Helper
function id(id) {
    return document.getElementById(id)
}