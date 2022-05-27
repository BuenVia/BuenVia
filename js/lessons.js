const infinitiveTenseContainer = id('infinitiveTenseContainer')
const presentTenseContainer = id('presentTenseContainer')

const infDivBtn = id('infDivBtn')
const presDivBtn = id('infDivBtn')

infDivBtn.addEventListener('click', () => {
    if(infinitiveTenseContainer.style.display === 'block') {
        infinitiveTenseContainer.style.display = 'none'
        infDivBtn.innerText = 'Open'
    } else {
        infinitiveTenseContainer.style.display = 'block'
        infDivBtn.innerText = 'Close'
    }
})

// Helper
function id(id) {
    return document.getElementById(id)
}