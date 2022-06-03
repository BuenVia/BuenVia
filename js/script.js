const learnBtn = id('learnBtn')
const conjugateBtn = id('conjugateBtn')
const listenBtn = id('listenBtn')

learnBtn.addEventListener('click', () => {
    window.open('learn_new.html')
})

// Helper function
function id(id) {
    return document.getElementById(id)
}