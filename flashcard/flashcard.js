import { col } from "./wordbank.js"

const dashboardContainer = id('dashboardContainer')
const flashcardContainer = id('flashcardContainer')

const wordListEl = id('wordListEl')

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
        openFlashcards()
    })
})

function openFlashcards() {
    dashboardContainer.classList.add('hidden')
    flashcardContainer.classList.remove('hidden')
}

// Helper
function id(id) {
    return document.getElementById(id)
}