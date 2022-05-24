import { grammarType } from './grammar.js'

const cardTitle = document.getElementById('cardTitle')
const btnCont = document.getElementById('btnCont')
const conceptCont = document.getElementById('conceptCont')

let grammar

grammarType.forEach(concept => {
    grammarBtn(concept)
})

// Shows buttons on the home screen
function grammarBtn(name) {
    const conceptButton = document.createElement('button')
    
    conceptButton.classList.add('btn')
    conceptButton.classList.add('btn-outline-info')
    conceptButton.innerText = name.type
    conceptButton.addEventListener('click', () => {
        grammar = name
        btnCont.style.display = 'none'
        startTask()
    })
    
    btnCont.appendChild(conceptButton)
}

// Runs the selected grammar concept
const startTask = () => {
    underline()
}

const underline = () => {
    cardTitle.innerHTML = `
        <h4 class="card-title" id="cardTitle">${grammar.type}</h4>
        <p class="card-text">${grammar.instruction}</p>
    `
    grammar.sentences.forEach((i) => {
        const div = document.createElement('div')
        const p = document.createElement('p')


        div.classList.add('card')
        div.classList.add('task')

        div.appendChild(p)

        conceptCont.appendChild(div)


        let splitSentence = i.split(' ')

        // Creates a span for each word and then user click selects as answer
        //NEEDS WORKING ON!!!!
<<<<<<< HEAD
        let chosenWord = []
=======
        let chosenword = []
>>>>>>> 72509dca2ce93304ad4b302d6fae6cfa5ba2c82c
        splitSentence.forEach(i => {
            const span = document.createElement('span')
            span.textContent = i + ' '
            span.style.backgroundColor = 'transparent'
            span.addEventListener('click', () => {
<<<<<<< HEAD
                chosenWord.push(span.innerText)
                console.log(chosenWord);
=======
                if(span.style.backgroundColor === 'transparent') {
                    span.style.backgroundColor = 'green'
                } else {
                    span.style.backgroundColor = 'transparent'
                }
>>>>>>> 72509dca2ce93304ad4b302d6fae6cfa5ba2c82c
            })
            p.appendChild(span);
        })
    })
}