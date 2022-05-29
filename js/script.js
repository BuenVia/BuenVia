const practiceBtn = id('practiceBtn')
const learnBtn = id('learnBtn')
const merchBtn = id('merchBtn')

practiceBtn.addEventListener('click', () => {
    window.location.href = "conjugate.html";
})

learnBtn.addEventListener('click', () => {
    window.location.href = "lessons.html"
})

merchBtn.addEventListener('click', () => {
    window.location.href = "merch.html"
})

function id(id) {
    return document.getElementById(id)
}