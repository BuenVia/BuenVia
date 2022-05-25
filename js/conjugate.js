const wordObjNew = {
                    tense: "Present",
                    verbs: [{
                                verb: "Ser",
                                conjugate: [
                                        { english: "I am", spanish: "soy" },        
                                        { english: "You are", spanish: "eres" },
                                        { english: "He / She / It is", spanish: "es" },
                                        { english: "We are", spanish: "somos" },
                                        { english: "You (all) are", spanish: "sois" },
                                        { english: "They are", spanish: "son" }
                                    ]
                                }]
                            }

const wordObj = {
    tense: "Present",
    verbs: [{
                verb: "Ser",
                conjugate: [
                        { pronoun: "Yo", spanish: "soy" },        
                        { pronoun: "Tú", spanish: "eres" },
                        { pronoun: "El / Ella / Usted", spanish: "es" },
                        { pronoun: "Nosotros", spanish: "somos" },
                        { pronoun: "Vosotros", spanish: "sois" },
                        { pronoun: "Ellos / Ellas / Ustedes", spanish: "son" }
                    ]
                }]
            }

const activityContainer = document.getElementById('activityContainer')
const tenseEl = document.getElementById('tenseEl')
const verbEl = document.getElementById('verbEl')
const wordEl = document.getElementById('wordEl')

const userInput = document.getElementById('userInput')

const submitBtn = document.getElementById('submitBtn')
const nextBtn = document.getElementById('nextBtn')
const finishBtn = document.getElementById('finishBtn')

const summaryContainer = document.getElementById('summaryContainer')
const summaryNoCorrect = document.getElementById('summaryNoCorrect')
const summaryNoQuestions = document.getElementById('summaryNoQuestions')
const summaryEl = document.getElementById('summaryEl')

let wordIndex = 0
let correctAnswer = []
let noCorrect = 0

submitBtn.addEventListener('click', () => {
    checkAnswer()
})

nextBtn.addEventListener('click', () => {
    wordIndex++
    if(wordIndex < wordObj.verbs[0].conjugate.length) {
        setWord()
    } else {
        console.log('Done', correctAnswer);
        activityContainer.style.display = 'none'
        summaryNoCorrect.innerText = noCorrect
        summaryNoQuestions.innerText += correctAnswer.length
        summary()
    }
})

finishBtn.addEventListener('click', () => {
    activityContainer.style.display = 'block'
    summaryContainer.style.display = 'none'
    wordIndex = 0
    correctAnswer = []
    noCorrect = 0
    summaryNoCorrect.innerText = ''
    summaryNoQuestions.innerText = ''
    summaryEl.innerHTML = ''
    setWord()
})

function setTenseAndVerb() {
    summaryContainer.style.display = 'none'
    tenseEl.innerText = wordObj.tense
    verbEl.innerText = wordObj.verbs[0].verb
    setWord()
}

function setWord() {
    wordEl.innerText = wordObj.verbs[0].conjugate[wordIndex].pronoun
    nextBtn.style.display = 'none'
    activityContainer.style.backgroundColor = ''
    userInput.value = ''
    userInput.disabled = false
    submitBtn.style.display = 'block'
    nextBtn.style.display = 'none'
}

function checkAnswer() {
    // if(userInput.value === '') {
    //     alert('Enter something')
    // } else 
    if(userInput.value === wordObj.verbs[0].conjugate[wordIndex].spanish) {
        activityContainer.style.backgroundColor = 'green'
        userInput.disabled = true
        submitBtn.style.display = 'none'
        nextBtn.style.display = 'block'
        const ansObj = {
            pronoun: wordObj.verbs[0].conjugate[wordIndex].pronoun,
            spanish: wordObj.verbs[0].conjugate[wordIndex].spanish,
            userAns: userInput.value,
            correct: true
        }
        correctAnswer.push(ansObj)
        noCorrect++
    } else {
        activityContainer.style.backgroundColor = 'red'
        userInput.disabled = true
        submitBtn.style.display = 'none'
        nextBtn.style.display = 'block'
        const ansObj = {
            pronoun: wordObj.verbs[0].conjugate[wordIndex].pronoun,
            spanish: wordObj.verbs[0].conjugate[wordIndex].spanish,
            userAns: userInput.value,
            correct: false
        }
        correctAnswer.push(ansObj)

    }
}

// Show Summary at end
function summary() {
    summaryContainer.style.display = 'block'
    activityContainer.style.display = 'none'
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
        console.log(word);
    })
}

setTenseAndVerb()