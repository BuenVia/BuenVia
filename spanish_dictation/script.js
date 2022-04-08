/*

Button is generated for each story available in stories array
When a button is clicked, corresponding story (object?) pushed to variable + buttonContainer hidden + display shown
When new sentence shown, audio of sentence plays
User enters text to text box and clicks submit answer
Answer is checked - if correct moves on - if incorrect try again
Once all sentences have been completed summary of article is shown in textbox + user can listen by clicking play

*/

const stories = [ 
    {
        title: 'Formal email One',
        category: "Email",
        published: "06/04/2022",
        verbatim: [ "A quien corresponda", 
        "Le escribo de parte de", 
        "Le agradezco de antemano toda su ayuda" ]
    },
    {   
        title: 'Formal email Two',
        category: "Email",
        published: "31/03/2022",
        verbatim: ["Estimado Señor", 
        "Quería saber si usted estaría disponible para hablar el miércoles", 
        "Cualquier cosa estoy a su disposición"] 
        
    },
    {
        title: 'Simeone, otro plan sin rematar',
        category: "Newspaper",
        published: "06-04-2022",
        verbatim: ["El lunes, bajo una fina lluvia", 
        "los jugadores del Manchester City", 
        "saltaron a uno de los campos de entrenamiento", 
        "del complejo anexo al Etihad Stadium"]
    },
    {
        title: 'Fairytale story',
        category: "Fairytale",
        published: "06-04-2022",
        verbatim: ["Érase una vez un dragón", 
        "que vivía en la cima de una montaña"]
    },
    {
        title: 'Pollito Tito',
        category: "Fairytale",
        published: "06-04-2022",
        verbatim: ["Deja que te cuente una historia", 
        "sobre un pollito", 
        "Su nombre es Pollito Tito"]
    }
]

const buttonContainer = document.getElementById('buttonContainer')
const displayContainer = document.getElementById('displayContainer')
const detailsContainer = document.getElementById('detailsContainer')
const answerSummary = document.getElementById('answerSummary')
const summaryContainer = document.getElementById('summaryContainer')
const searchContainer = document.getElementById('searchContainer')

const userInput = document.getElementById('userInput')
const searchInput = document.getElementById('searchInput')

const playBtn = document.getElementById('playBtn')
const slowerBtn = document.getElementById('slowerBtn')
const submitAnswerBtn = document.getElementById('submitAnswerBtn')
const nextBtn = document.getElementById('nextBtn')
const finishBtn = document.getElementById('finishBtn')
const playSummaryBtn = document.getElementById('playSummaryBtn')
const searchBtn = document.getElementById('searchBtn')

const finalSummary = document.getElementById('finalSummary')
const correctEl = document.getElementById('correctEl')

let chosenStory

// For each object in the variable 'stories' a button is created.
stories.forEach((story) => {
    createStoryButton(story, buttonContainer)
})

function createStoryButton(story, container) {
    const button = document.createElement('button')
    button.classList.add('detailsBtn')
    button.innerText = story.title
    container.appendChild(button)

    // When clicking on the button the verbatim is assigned to the 'chosenstory' variable.
    button.addEventListener('click', () => {
        chosenStory = story
        buttonContainer.style.display = 'none'
        displayContainer.style.display = 'block'
        const details = `
        <p id="title">Title: ${chosenStory.title}</p>
        <p id="source">Category: ${chosenStory.category}</p>
        <p id="date">Date Published: ${chosenStory.published}</p>
        `
        detailsContainer.innerHTML = details
        setSentence()
    })
}

let sentenceIndex = 0

function setSentence() {
    answerSummary.style.display = 'none'
    submitAnswerBtn.style.display = 'block'
    if (sentenceIndex < chosenStory.verbatim.length) {
        console.log(sentenceIndex);
        userInput.value = ''
        playAudio(chosenStory.verbatim[sentenceIndex])
    } else {
        displayContainer.style.display = 'none'
        summaryContainer.style.display = 'flex'
        finalSummary.innerText = chosenStory.verbatim.join(' ')
        playAudio(chosenStory.verbatim, 1)

        playSummaryBtn.addEventListener('click', () => {
            playAudio(chosenStory.verbatim, 1)
        })
    }

    playBtn.addEventListener('click', () => {
        playAudio(chosenStory.verbatim[sentenceIndex], 1)
    })
    slowerBtn.addEventListener('click', () => {
        playAudio(chosenStory.verbatim[sentenceIndex], .2)
    })
}

submitAnswerBtn.addEventListener('click', checkAnswer)

function checkAnswer() {
    if(userInput.value === '') {
        alert('Enter something')
    } else {
        if(userInput.value === chosenStory.verbatim[sentenceIndex]) {
            sentenceIndex++
            submitAnswerBtn.style.display = 'none'
            answerSummary.style.display = 'flex'
            correctEl.innerText = `Correct`
            correctEl.style.color = 'white'
            nextBtn.innerText = `Next`
            nextBtn.style.backgroundColor = 'rgba(0, 255, 0, 0.3)'
        } else {
            answerSummary.style.display = 'flex'
            submitAnswerBtn.style.display = 'none'
            correctEl.innerText = `Incorrect`
            correctEl.style.color = 'red'
            nextBtn.innerText = `Try again`
            nextBtn.style.backgroundColor = 'rgba(255, 0, 0, 0.7)'
        }
    }
}

nextBtn.addEventListener('click', setSentence)


finishBtn.addEventListener('click', finish)

function finish() {
    sentenceIndex = 0
    summaryContainer.style.display = 'none'
    buttonContainer.style.display = 'flex'
}
//AUDIO FUNCTION

function playAudio(text, speed) {
    const speech = new SpeechSynthesisUtterance()
    if(speechSynthesis.speaking) return
    speech.lang = 'es-ES'
    speech.text = text
    speech.rate = speed || 1
    speechSynthesis.speak(speech)
}

// Implement search function by topic using find() method

let searchStory

searchBtn.addEventListener('click', function(e) {
    searchStory = stories.filter(story => story.category === searchInput.value)
    .forEach(story => createStoryButton(story, searchContainer))
})


// Implement scoring (based on wrong words) and use local storage for saving previous scores

