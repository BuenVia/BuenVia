import { wordList } from "./wordbank.js"

const wordCardContainer = document.getElementById('wordCardContainer')

console.log(wordList);

wordList.forEach(word => {

    const div = document.createElement('div')
    const h2 = document.createElement('h2')
    const p_infin = document.createElement('p')
    const p_form = document.createElement('p')
    const p_pronoun = document.createElement('p')
    const p_translation = document.createElement('p')

    h2.innerText = word.word
    p_infin.innerText = `Infinitive: ${word.infinitive}`
    p_form.innerText = `Form: ${word.form}`
    p_pronoun.innerText = `Pronoun: ${word.pronoun}`
    p_translation.innerText = `English: ${word.translation}`

    div.appendChild(h2)
    div.appendChild(p_infin)
    div.appendChild(p_form)
    div.appendChild(p_pronoun)
    div.appendChild(p_translation)

    div.classList.add('word-card')
    
    wordCardContainer.appendChild(div)
}
    )
