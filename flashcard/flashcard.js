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

let chosenCategory = [], wordIndex = 0
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
        // Add property to each word in array to check if a correct answer has been given
        cat.words.forEach((i) => i.correct = false)
        chosenCategory = cat.words
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
        chosenCategory[wordIndex].correct = true
        console.log(chosenCategory[wordIndex]);
        nextSubmit.style.backgroundColor = 'green'
        resetValues()
    } else {
        console.log(chosenCategory[wordIndex]);
        nextSubmit.style.backgroundColor = 'red'
        // If answer is wrong, it pushes to 'wrong' array to be worked on later
        wrong.push(chosenCategory[wordIndex])
        resetValues()
    }

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
    }
}


// Helper
function id(id) {
    return document.getElementById(id)
}