const practiceBtn = id('practiceBtn')
const learnBtn = id('learnBtn')

practiceBtn.addEventListener('click', () => {
    window.location.href = "conjugate.html";
})

learnBtn.addEventListener('click', () => {
    window.location.href = "lessons.html"
})

function id(id) {
    return document.getElementById(id)
}