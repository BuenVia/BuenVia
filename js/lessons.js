const lessonContainer = document.getElementById('lessonContainer')

const links = document.querySelectorAll('[data-link]')

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault()
        const linkDisplay = link.dataset.link
        console.log(linkDisplay );
        usingVerbs.style.display = 'none'
        infinitive.style.display = 'block'
    })
})