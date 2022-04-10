import { col } from "./wordbank.js"

const dashboardContainer = id('dashboardContainer')
const wordListEl = id('wordListEl')

const flashcardContainer = id('flashcardContainer')
const categoryEl = id('categoryEl')
const wordEl = id('wordEl')
const userInput = id('userInput')
const userInputSubmit = id('userInputSubmit')

let chosenCategory, wordIndex = 0

// Shows available topics on dashboard
col.forEach((word) => {
    const wordDiv = document.createElement('div')
    const wordDet = document.createElement('p')

    wordDet.textContent = word.category

    wordDiv.classList.add('word-list-element')

    wordDiv.appendChild(wordDet)
    wordListEl.appendChild(wordDiv)

    chosenCategory = word

    //Console Log each word with its category
    wordDiv.addEventListener('click', openFlashcard)
})




// Helper
function id(id) {
    return document.getElementById(id)
}