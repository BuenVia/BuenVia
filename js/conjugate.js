const verbContainer = id('verbContainer')

const activityContainer = id('activityContainer')
const tenseEl = id('tenseEl')
const wordEl = id('wordEl')
const btnContainer = id('btnContainer')

const userInput = id('userInput')

const submitBtn = id('submitBtn')
const nextBtn = id('nextBtn')
const finishBtn = id('finishBtn')

const summaryContainer = id('summaryContainer')
const summaryNoCorrect = id('summaryNoCorrect')
const summaryNoQuestions = id('summaryNoQuestions')
const summaryEl = id('summaryEl')

let wordIndex = 0, correctAnswer = [], noCorrect = 0, chosenVerb

// Call json file
fetch('./wordbank.json')
    .then(res => res.json())
    .then(words => getWords(words))
    .catch(err => console.error(err))

function getWords(words) {
    words.forEach(word => {
        createTense(word.tense, word.verbs)
    })
}

function createTense(tense, verbs) {
    const div = document.createElement('div')
    const btnDiv = document.createElement('div')
    div.innerText = tense
    div.classList.add('flex-col-cont')
    div.classList.add('tense-container')
    div.appendChild(btnDiv)
    verbContainer.appendChild(div)

    verbs.forEach(verb => {
        const verbButton = document.createElement('button')
        verbButton.innerText = verb.verb
        verbButton.classList.add('btn')
        verbButton.classList.add('verbBtn')
        btnDiv.appendChild(verbButton)

        verbButton.addEventListener('click', () => {
            chosenVerb = {
                tense: tense,
                verb: verb.verb,
                conjugate: verb.conjugate
            }
            activityContainer.classList.remove('hidden')
            setTenseAndVerb()
        })
    })
}


submitBtn.addEventListener('click', () => {
    checkAnswer()
})

nextBtn.addEventListener('click', () => {
    wordIndex++
    if(wordIndex < chosenVerb.conjugate.length) {
        setWord()
    } else {
        console.log('Done', correctAnswer);
        activityContainer.classList.add('hidden')
        summaryNoCorrect.innerText = noCorrect
        summaryNoQuestions.innerText += correctAnswer.length
        summary()
    }
})

finishBtn.addEventListener('click', () => {
    resetActivity()
})

function setTenseAndVerb() {
    verbContainer.classList.add('hidden')
    tenseEl.innerText = chosenVerb.tense
    setWord()
}

function setWord() {
    wordEl.innerText = `${chosenVerb.conjugate[wordIndex].pronoun} (${chosenVerb.verb})`
    console.log(chosenVerb.conjugate[wordIndex]);
    nextBtn.style.display = 'none'
    btnContainer.classList.remove('correct')
    btnContainer.classList.remove('incorrect')
    userInput.disabled = false
    userInput.value = ''
    submitBtn.style.display = 'block'
    nextBtn.style.display = 'none'
    userInput.focus()
}

function checkAnswer() {
    // if(userInput.value === '') { 
    //     alert('Enter something')
    // } else 
    if(userInput.value === chosenVerb.conjugate[wordIndex].spanish) {
        ansHandler('correct',true)
        noCorrect++
    } else {
        ansHandler('incorrect', false)
    }
}

// Create answer object and handle answer related styles
function ansHandler(color, ans) {
    btnContainer.classList.add(color)
    userInput.disabled = true
    submitBtn.style.display = 'none'
    nextBtn.style.display = 'block'
    const ansObj = {
        pronoun: chosenVerb.conjugate[wordIndex].pronoun,
        spanish: chosenVerb.conjugate[wordIndex].spanish,
        userAns: userInput.value,
        correct: ans
    }
    correctAnswer.push(ansObj)
}

// Show Summary at end
function summary() {
    summaryContainer.classList.remove('hidden')
    correctAnswer.forEach(word => {
        const summaryCol = () => word.correct === true ? 'correct' : 'incorrect'
        const summaryBox = `
            <div class="summaryBox ${summaryCol()} el-box">
               <p>${word.pronoun}</p> 
               <p>Correct answer:${word.spanish}</p>
               <p>Your answer: ${word.userAns}</p>
            </div>
        `
        summaryEl.innerHTML += summaryBox
    })
}

// Reset everything
function resetActivity() {
    chosenVerb = ''
    verbContainer.classList.remove('hidden')
    summaryContainer.classList.add('hidden')
    wordIndex = 0
    correctAnswer = []
    noCorrect = 0
    summaryNoCorrect.innerText = ''
    summaryNoQuestions.innerText = ''
    summaryEl.innerHTML = ''
    wordEl.innerText = ''
    tenseEl.innerText = ''
}

// Helper functions
function id(id) {
    return document.getElementById(id)
}