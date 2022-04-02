const newItem = id('newItem')
const submitBtn = id('submitBtn')
const listContainer = id('listContainer')
const itemDone = id('item-done')

let storedItems = localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : []

submitBtn.addEventListener('click', action)

storedItems.forEach(createItem)

function action() {
    if(newItem.value === '') {
        alert('Enter something!')
    } else {
        newObj = {
            'item': newItem.value
        }
        storedItems.push(newObj)
        localStorage.setItem('list', JSON.stringify(storedItems))
        createItem(newItem);
        console.log(storedItems);
        }
}

function createItem(item) {
    const divBox = document.createElement('div')
    const divItem = document.createElement('div')
    const inputCheck = document.createElement('INPUT')
    const pItemTitle = document.createElement('p')
    const pItemRemove = document.createElement('p')

    inputCheck.setAttribute('type', 'checkbox')
    pItemTitle.innerText = item.item
    pItemRemove.innerText = 'X'

    divBox.classList.add('list-box')
    divItem.classList.add('list-item')
    pItemTitle.classList.add('item-title')
    pItemRemove.classList.add('item-remove')

    divItem.addEventListener('dblclick', completed)
    pItemRemove.addEventListener('click', deleteItem)

    divItem.appendChild(inputCheck)
    divItem.appendChild(pItemTitle)
    divBox.appendChild(divItem)
    divBox.appendChild(pItemRemove)

    listContainer.appendChild(divBox)
}

function completed() {
        this.classList.toggle('complete')

}

function deleteItem() {
    this.parentElement.remove()
}

function id(id) {
    return document.getElementById(id)
}