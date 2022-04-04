const moduleBtn = document.querySelectorAll('[data-module]')
const activityBtn = document.querySelectorAll('[data-activity]')

const buttonContainer = document.getElementById('buttonContainer')
const moduleContainer = document.getElementById('moduleContainer')
const activityContainer = document.getElementById('activityContainer')
const activityTitle = document.getElementById('activityTitle')

const moduleTitle = document.getElementById('moduleTitle')

let words
let module, activity

// Uses dataset to select module depending on which button user clicks
moduleBtn.forEach(button => {
    button.addEventListener('click', () => {
        module = button.dataset.module
        moduleTitle.innerText = module
        buttonContainer.style.display = 'none'
        moduleContainer.style.display = 'block'
        console.log(module);
        getWords()
        
    })
})

// Uses dataset to select activity type
activityBtn.forEach(button => {
    button.addEventListener('click', () => {
        activity = button.dataset.activity
        moduleContainer.style.display = 'none'
        activityContainer.style.display = 'block'
        activityDisplay()
    })
})

// Uses Fetch API to pull words from a JSON file
function getWords() {
    fetch('http://127.0.0.1:5500/BuenVia/js/wordbank.json')
    .then(response => response.json())
    .then(data => list(data))
    .catch(err => console.log('Error with Fetch'))
}

function list(data) {
    words = data[module];
}

function activityDisplay() {
    activityTitle.innerText += `${module} = ${activity}`

    let i = 0
    while(i < words.length) {
        console.log(words[i].english);
        i++
    }
    console.log(words);
}