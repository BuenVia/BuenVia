import { grammarType } from './grammar.js'

const cardTitle = document.getElementById('cardTitle')
const btnCont = document.getElementById('btnCont')
const conceptCont = document.getElementById('conceptCont')

let grammar

grammarType.forEach(concept => {
    grammarBtn(concept)
})

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

const startTask = () => {
    const html = `
        <h5 class="card-title" id="cardTitle">${grammar.type}</h5>
        <p class="card-text">${grammar.instruction}</p>
    `
    cardTitle.innerHTML = html
    grammar.sentences.forEach((i) => {
        conceptCont.innerHTML += '<div class="row">' + i + '</div>'
    })
}