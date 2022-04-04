const tabs = document.querySelectorAll('[data-tab]')
const app = document.getElementById('app')

tabs.forEach(tab => {
    tab.addEventListener('click', e => {
        console.log(tab.innerHTML);
        // app.innerHTML = home
    })
})