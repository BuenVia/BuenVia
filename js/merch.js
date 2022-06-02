import { itemsList } from "./merchItems.js"

////////////////////////////////////////////////////////////////////////
const storeContainer = id('storeContainer')
const itemViewContainer = id('itemViewContainer')
const basketContainer = id('basketContainer')
const searchContainer = id('searchContainer')

const itemViewAddBtn = id('itemViewAddBtn')

const basketBackBtn = id('basketBackBtn')
const viewBasketBtn = id('viewBasketBtn')

const shoppingBasketEl = id('shoppingBasketEl')
const itemListContainer = id('itemListContainer')
const numItems = id('numItems')
const totalPriceItems = id('totalPriceItems')

const basket = []
let quantityBasket


// Populates the list of items on the main page
itemsList.forEach(item => {
    const html = `
    <div class="item-box" data-btn-item='${JSON.stringify(item)}'>
        <div class="flex-col">
            <img src="styles/images/${item.image}" alt="BuenVia Image" class="item-img-sml">
        </div>
        <div class="item-details">
            <h2>${item.item}</h2>
            <p>£${item.price}</p>
        </div>
    </div>
    `
    storeContainer.innerHTML += html
})

const itemBtn = document.querySelectorAll('[data-btn-item]')

//Shows individual item + hides the main page
itemBtn.forEach(data_btn => 
    data_btn.addEventListener('click', () => {
        basketBackBtn.style.display = 'flex'
        itemObj = JSON.parse(data_btn.dataset.btnItem)
        
        searchContainer.style.display = 'none'
        itemViewContainer.style.display = 'flex'
        storeContainer.style.display = 'none'
        basketContainer.style.display = 'none'
        
        id('itemViewImg').innerHTML = `<img src="styles/images/${itemObj.image}" alt="BuenVia Image" class="itm-img-lg">`
        id('itemViewTitle').innerText = itemObj.item
        id('itemViewPrice').innerText = itemObj.price
    })
)
    
let itemObj 
// Add items to basket
itemViewAddBtn.addEventListener('click', () => {
    let basketItemObj = {
        item: itemObj.item,
        price: itemObj.price,
        sku: itemObj.sku,
        image: itemObj.image,
        quantity: parseInt(id('itemViewQuantity').value)
    }
    basket.push(basketItemObj)

    console.log(basket);
    shoppingBasketEl.innerText = calcQuantity(basket)
    id('itemViewQuantity').value = '1'
})

// Show items in basket
viewBasketBtn.addEventListener('click', () => {
    itemViewContainer.style.display = 'none'
    storeContainer.style.display = 'none'
    basketContainer.style.display = 'flex'
    basketBackBtn.style.display = 'flex'
    viewBasketBtn.style.display = 'none'
    searchContainer.style.display = 'none'

    showBasketItems(basket)
})

// Back button
basketBackBtn.addEventListener('click', () => {
    itemViewContainer.style.display = 'none'
    storeContainer.style.display = 'flex'
    basketContainer.style.display = 'none'
    basketBackBtn.style.display = 'none'
    viewBasketBtn.style.display = 'flex'
    searchContainer.style.display = 'flex'
})

function calcQuantity(item) {
    let quant = 0
    for (let i = 0; i < item.length; i++) {
        quant += item[i].quantity
    }
    return quant
}

function calcTotalPrice(item) {
    let itemTotal = 0
    let totalPrice = 0
    for (let i = 0; i < item.length; i++) {
        totalPrice += item[i].quantity * item[i].price
    }
    return `£${totalPrice.toFixed(2)}`
}

// Displays the items in the basket
function showBasketItems(item) {
    resetBasketElements(basket)
    item.forEach(item => {
        // console.log(basket.indexOf(item));
        const priceCalc = () => item.price * item.quantity
        const basketHtml = `
            <div class="item-box">
                <img src="styles/images/${item.image}" alt="BuenVia Image" class="item-img-sml">
                <p>${item.item}</p>
                <p>Quantity: ${item.quantity}</p>
                <p>Price: £${item.price}</p>
                <h4>Total: £${priceCalc()}</h4>
                <button data-btn-remove='${JSON.stringify(item)}'>Remove Item</button>
            </div>
            `
        itemListContainer.innerHTML += basketHtml

        // Remove items from the basket
        const removeBtn = document.querySelectorAll('[data-btn-remove]')
        removeBtn.forEach(btn => {
            btn.addEventListener('click', () => {
                basket.splice(basket.indexOf(item)-1, 1)
                console.log(basket);
                resetBasketElements(basket)
                showBasketItems(basket)
                shoppingBasketEl.innerText = calcQuantity(basket)
            })
        })
    })
}

// Reset basket elements
function resetBasketElements(item) {
    itemListContainer.innerHTML = ''
    numItems.innerHTML = calcQuantity(basket)
    totalPriceItems.innerHTML = calcTotalPrice(basket)
}

// Helper
function id(id) {
    return document.getElementById(id)
}

function cEl(el) {
    return document.createElement(el)
}