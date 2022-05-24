const verbEl = document.getElementById('verbEl')
const tenseTitle = document.getElementById('tenseTitle')
const verbContainer = document.getElementById('verbContainer')

fetch ('./wordbank.json')
    .then(res => res.json())
    .then(words => getWords(words))
    .catch(err => console.log(err))

function getWords(words) {
    words.forEach(word => {
        createTense(word.tense, word.verbs)
    });
}

function createTense(tense, verbs) {
    const tenseDiv = document.createElement('div')
    const tenseTitle = document.createElement('h3')
    
    
    tenseDiv.classList.add('tense-container')
    
    tenseTitle.innerText = tense
    tenseDiv.appendChild(tenseTitle)
    
    
    verbs.forEach(verb => {
        console.log(verb);
        const pVerb = document.createElement('p')
        pVerb.innerText = verb.verb
        tenseDiv.appendChild(pVerb)    
    })

    verbEl.append(tenseDiv)
}