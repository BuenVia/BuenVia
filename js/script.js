const verbEl = document.getElementById('verbEl')
const quizEl = document.getElementById('quizEl')
const tenseTitle = document.getElementById('tenseTitle')
const verbContainer = document.getElementById('verbContainer')

let chosenVerb

// Load in wordBank JSON file
fetch ('./wordbank.json')
    .then(res => res.json())
    .then(words => getWords(words))
    .catch(err => console.log(err))

// Separate tenses
function getWords(words) {
    words.forEach(word => {
        createTense(word.tense, word.verbs)
    });
}

// Render each word and tense to home screen
function createTense(tense, verbs) {
    const div = document.createElement('div')
    const btnDiv = document.createElement('div')
    div.innerText = tense
    div.classList.add('tense-container')

    div.appendChild(btnDiv)
    verbEl.appendChild(div)

    verbs.forEach(verb => {
        const button = document.createElement('button')
        button.innerText = verb.verb
        btnDiv.appendChild(button)

        button.addEventListener('click', () => {
            chosenVerb = {
                tense: tense,
                verb: verb.verb,
                conjugate: verb.conjugate
            }
            showVerb()
        })
    })
}

// Render chosen word to screen
function showVerb() {    
    const html = `
    <div id="chosenVerbEl">
        <h3>${chosenVerb.tense}</h3>
        <h4>${chosenVerb.verb}</h4>
    </div>
    `
    verbEl.innerHTML = html
    conjugateVerbs()
}

// Quiz
function conjugateVerbs() {
    chosenVerb.conjugate.forEach(word => chosenVerbEl.innerHTML += `<p>${word.english}</p>`)

    const conjugateHtml = `
        <div>
            <h3>${word.english}</h3>
        </div>
    `

    for (let i = 0; i < chosenVerb.conjugate.length; i++) {
        console.log(chosenVerb.conjugate[i]);
    }
}