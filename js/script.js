const moduleBtn = document.querySelectorAll('[data-module]')
const activityBtn = document.querySelectorAll('[data-activity]')

const buttonContainer = document.getElementById('buttonContainer')
const moduleContainer = document.getElementById('moduleContainer')
const activityContainer = document.getElementById('activityContainer')
const activityTitle = document.getElementById('activityTitle')

const moduleTitle = document.getElementById('moduleTitle')

let module, activity

moduleBtn.forEach(button => {
    button.addEventListener('click', () => {
        module = button.dataset.module
        moduleTitle.innerText = module
        buttonContainer.style.display = 'none'
        moduleContainer.style.display = 'block'
        console.log(module);
        
    })
})

activityBtn.forEach(button => {
    button.addEventListener('click', () => {
        activity = button.dataset.activity
        moduleContainer.style.display = 'none'
        activityContainer.style.display = 'block'
        activityDisplay()
        console.log(module, activity);
    })
})

function activityDisplay() {
    activityTitle.innerText += `${module} = ${activity}`
}

fetch('http://127.0.0.1:5500/BuenVia/js/wordbank.json')
.then(response => response.json())
.then(data => list(data))
.catch(err => console.log(err))

function list(data) {
    const val = Object.values(data)
    let i = 0
    while(i < val.length) {
        console.log(val[i]);
        i++    
    }
}