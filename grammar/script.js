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

        splitSentence.forEach(i => {
            const span = document.createElement('span')
            span.textContent = i + ' '
            span.addEventListener('click', () => {
                if (grammar.correct === false) {
                    grammar.correct = true
                    console.log(grammar);
                }
            })
            p.appendChild(span);
        })
})
}
