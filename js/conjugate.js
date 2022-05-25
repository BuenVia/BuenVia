const wordObj = {
                    tense: "Present",
                    verbs: [{
                                verb: "Ser",
                                conjugate: [
                                        { english: "I am", "spanish": "soy" },        
                                        { english: "You are", "spanish": "eres" },
                                        { english: "He / She / It is", "spanish": "es" },
                                        { english: "We are", "spanish": "somos" },
                                        { english: "You (all) are", "spanish": "sois" },
                                        { english: "They are", "spanish": "son" }
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

let wordIndex = 0

submitBtn.addEventListener('click', () => {
    checkAnswer()
})

nextBtn.addEventListener('click', () => {
    wordIndex++
    if(wordIndex < wordObj.verbs[0].conjugate.length) {
        submitBtn.style.display = 'block'
        nextBtn.style.display = 'none'
        userInput.value = ''
        userInput.disabled = false
        setWord()
    } else {
        console.log('Done');
    }
})

function setTenseAndVerb() {
    tenseEl.innerText = wordObj.tense
    verbEl.innerText = wordObj.verbs[0].verb
    setWord()
}

function setWord() {
    wordEl.innerText = wordObj.verbs[0].conjugate[wordIndex].english
    nextBtn.style.display = 'none'
    activityContainer.style.backgroundColor = ''
}

function checkAnswer() {
    if(userInput.value === '') {
        alert('Enter something')
    } else if(userInput.value === wordObj.verbs[0].conjugate[wordIndex].spanish) {
        activityContainer.style.backgroundColor = 'green'
        userInput.disabled = true
        submitBtn.style.display = 'none'
        nextBtn.style.display = 'block'
        console.log('Correct');
    } else {
        console.log('Wrong');
        activityContainer.style.backgroundColor = 'red'
    }
}

function summary() {
    
}

setTenseAndVerb()