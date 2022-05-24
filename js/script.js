const verbEl = document.getElementById('verbEl')
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

// Render each word and tense to screen
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
            console.log(chosenVerb.conjugate);
        })
    })
}
