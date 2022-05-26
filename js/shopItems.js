class shopItem{
    constructor(item, sku, price, image, quantity) {
        this.item = item,
        this.sku = sku,
        this.price = price
        this.image = image
        this.quantity = quantity
    }
}

const tshirt = new shopItem("T-shirt", 1234, 14.99, 'tshirt.jpg', null)
const cap = new shopItem("Baseball Cap", 9876, 8.99, 'cap.jpg', null)
const hoodie = new shopItem("Hoodie", 567019, 20.99, 'hoodie.jpg', null)
const bag = new shopItem("Bag", 43319, 12.49, 'bag.jpg', null)
const coffeeCup = new shopItem("Coffee Cup", 644354, 6.49, 'coffeeCup.jpg', null)
const pencilCase = new shopItem("Pencil Case", 9834554, 3.99, 'pencilcase.jpg', null)

const itemsList = [tshirt, cap, hoodie, bag, coffeeCup, pencilCase]

const storeContainer = id('storeContainer')
const itemViewContainer = id('itemViewContainer')
const basketContainer = id('basketContainer')

const itemViewAddBtn = id('itemViewAddBtn')

const basketBackBtn = id('basketBackBtn')

const shoppingBasketEl = id('shoppingBasketEl')

const basket = []


// Shows items
itemsList.forEach(item => {
    const html = `
    <div class="item-box">
        <div class="flex-col-cont">
            <img src="styles/images/${item.image}" alt="BuenVia Image" class="item-img-sml">
        </div>
        <div class="item-details">
            <h2>${item.item}</h2>
            <p>£${item.price}</p>
            <button data-btn-item='${JSON.stringify(item)}'>Buy</button>
        </div>
    </div>
    `
    storeContainer.innerHTML += html
})

const itemBtn = document.querySelectorAll('[data-btn-item]')
let itemObj 

//Shows individual item
itemBtn.forEach(data_btn => 
    data_btn.addEventListener('click', () => {
        itemObj = JSON.parse(data_btn.dataset.btnItem)
        
        itemViewContainer.classList.remove('hidden')
        storeContainer.classList.add('hidden')
        basketContainer.classList.add('hidden')
            
        id('itemViewImg').innerHTML = `<img src="styles/images/${itemObj.image}" alt="BuenVia Image" class="itm-img-lg">`
        id('itemViewTitle').innerText = itemObj.item
        id('itemViewPrice').innerText = itemObj.price
    })
)
    
// Add items to basket
itemViewAddBtn.addEventListener('click', () => {
    let basketItemObj = {
        item: itemObj.item,
        price: itemObj.price,
        sku: itemObj.sku,
        quantity: id('itemViewQuantity').value
    }
    basket.push(basketItemObj)
    shoppingBasketEl.innerText = basket.length

    console.log(basket);
})

// Back button
basketBackBtn.addEventListener('click', () => {
    itemViewContainer.classList.add('hidden')
    storeContainer.classList.remove('hidden')
})

// Helper
function id(id) {
    return document.getElementById(id)
}

function cEl(el) {
    return document.createElement(el)
}