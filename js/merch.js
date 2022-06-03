import { itemsList } from "./merchItems.js"

////////////////////////////////////////////////////////////////////////
const storeContainer = id('storeContainer')
const itemViewContainer = id('itemViewContainer')
const basketContainer = id('basketContainer')
const searchContainer = id('searchContainer')
const searchResultContainer = id('searchResultContainer')
const checkoutContainer = id('checkoutContainer')

const searchInput = id('searchInput')
const searchBtn = id('searchBtn')

const cartQuantity = id('cartQuantity')

const itemViewAddBtn = id('itemViewAddBtn')

const basketBackBtn = id('basketBackBtn')
const viewBasketBtn = id('viewBasketBtn')

const shoppingBasketEl = id('shoppingBasketEl')
const itemListContainer = id('itemListContainer')
const numItems = id('numItems')
const totalPriceItems = id('totalPriceItems')

const checkoutBtn = id('checkoutBtn')

const checkoutTotal = id('checkoutTotal')
const finalCheckoutTotal = id ('finalCheckoutTotal')
const completeBtn = id('completeBtn')
const checkoutMessage = id('checkoutMessage')


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


// Search Function
searchBtn.addEventListener('click', () => {
    let searchMatch = []
    searchResultContainer.innerHTML = ''
    if (searchInput.value === '') {
        searchInput.style.border = '1px solid red'
        searchInput.placeholder = 'Enter something'
    } else {
        for (let i = 0; i < itemsList.length; i++) {
            if (searchInput.value === itemsList[i].item) {
                searchMatch.push(itemsList[i])
                storeContainer.style.display = 'none'
                searchResultContainer.style.display = 'flex'
            }
        }
    }
    searchItems(searchMatch)
})

function searchItems(search) {
    search.forEach(match => {
        const html = `
        <div class="item-box" data-search-item='${JSON.stringify(match)}'>
            <div class="flex-col">
                <img src="styles/images/${match.image}" alt="BuenVia Image" class="item-img-sml">
            </div>
            <div class="item-details">
                <h2>${match.item}</h2>
                <p>£${match.price}</p>
            </div>
        </div>
        `
        searchResultContainer.innerHTML += html
        console.log(match);
    })
    let searchResBtn =  document.querySelectorAll('[data-search-item]')
    searchResBtn.forEach(searchRes => {
        searchRes.addEventListener('click', () => {
            basketBackBtn.style.display = 'flex'
            searchItemObj = JSON.parse(searchRes.dataset.searchItem);
            
            searchContainer.style.display = 'none'
            searchResultContainer.style.display = 'none'
            itemViewContainer.style.display = 'flex'
            storeContainer.style.display = 'none'
            basketContainer.style.display = 'none'
            checkoutContainer.style.display = 'none'
            
            id('itemViewImg').innerHTML = `<img src="styles/images/${searchItemObj.image}" alt="BuenVia Image" class="itm-img-lg">`
            id('itemViewTitle').innerText = searchItemObj.item
            id('itemViewPrice').innerText = searchItemObj.price
            id('itemViewDesc').innerText = searchItemObj.desc
            
        })
    })
}


let itemBtn = document.querySelectorAll('[data-btn-item]')

//Shows individual item + hides the main page
itemBtn.forEach(data_btn => 
    data_btn.addEventListener('click', () => {
        basketBackBtn.style.display = 'flex'
        itemObj = JSON.parse(data_btn.dataset.btnItem)
        
        searchContainer.style.display = 'none'
        itemViewContainer.style.display = 'flex'
        storeContainer.style.display = 'none'
        basketContainer.style.display = 'none'
        checkoutContainer.style.display = 'none'
        
        id('itemViewImg').innerHTML = `<img src="styles/images/${itemObj.image}" alt="BuenVia Image" class="itm-img-lg">`
        id('itemViewTitle').innerText = itemObj.item
        id('itemViewPrice').innerText = itemObj.price
        id('itemViewDesc').innerText = itemObj.desc
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

    shoppingBasketEl.innerText = calcQuantity(basket)
    cartQuantity.classList = 'cart-quantity'
    id('itemViewQuantity').value = '1'
})

// Show items in basket
viewBasketBtn.addEventListener('click', () => {
    itemViewContainer.style.display = 'none'
    storeContainer.style.display = 'none'
    basketContainer.style.display = 'flex'
    basketBackBtn.style.display = 'flex'
    searchContainer.style.display = 'none'
    checkoutContainer.style.display = 'none'

    basket.length === 0 ? checkoutBtn.style.display = 'none' : checkoutBtn.style.display = 'block'

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
    checkoutContainer.style.display = 'none'
})

// Show checkout form
checkoutBtn.addEventListener('click', () => {
    itemViewContainer.style.display = 'none'
    storeContainer.style.display = 'none'
    basketContainer.style.display = 'none'
    basketBackBtn.style.display = 'none'

    searchContainer.style.display = 'none'
    checkoutContainer.style.display = 'flex'
    checkoutTotal.innerText = calcTotalPrice(basket)
    finalCheckoutTotal.innerText = calcFinalTotal(basket)
})

completeBtn.addEventListener('click', () => {
    if (emailCheck || cardNameCheck || cardNumCheck || expDateCheck || ccvCheck ||
        nameCheck || addCheck || townCheck || pcCheck || tcCheck) {
            checkoutMessage.innerText = 'Please check form and enter all missing details'
            checkoutMessage.style.color = 'red'
        } else {
            checkoutMessage.innerText = 'Order not complete because this isn\'t a real shop'
        }
})

function calcQuantity(item) {
    let quant = 0
    for (let i = 0; i < item.length; i++) {
        quant += item[i].quantity
    }
    return quant
}

function calcTotalPrice(item) {
    let totalPrice = 0
    for (let i = 0; i < item.length; i++) {
        totalPrice += item[i].quantity * item[i].price
    }
    return `£${totalPrice.toFixed(2)}`
}

function calcFinalTotal(item) {
    let totalPrice = 0
    for (let i = 0; i < item.length; i++) {
        totalPrice += item[i].quantity * item[i].price
    }
    return (totalPrice + 4.99).toFixed(2)
}

// Displays the items in the basket
function showBasketItems(item) {
    resetBasketElements(basket)

    item.forEach(item => {
        const priceCalc = () => item.price * item.quantity
        const basketHtml = `
            <div class="item-basket-box">
                <div class="item-basket-img flex-col">
                    <img src="styles/images/${item.image}" alt="BuenVia Image" class="item-img-sml">
                </div>
                <div>
                    <p>${item.item}</p>
                    <p>Quantity: ${item.quantity}</p>
                    <p>Price: £${item.price}</p>
                    <h4>Total: £${priceCalc()}</h4>
                </div>
                <div class="item-basket-btn">
                    <button class="removeBtn" data-btn-remove='${JSON.stringify(item)}'>Remove Item</button>
                </div>
            </div>
            `
        itemListContainer.innerHTML += basketHtml

        // Remove items from the basket
        const removeBtn = document.querySelectorAll('[data-btn-remove]')
        removeBtn.forEach(btn => {
            btn.addEventListener('click', () => {
                basket.splice(basket.indexOf(item)-1, 1)
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


