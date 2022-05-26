class shopItem{
    constructor(item, sku, price, image) {
        this.item = item,
        this.sku = sku,
        this.price = price
        this.image = image
    }

    addItem() {
        console.log(true)
    }
}

const tshirt = new shopItem("T-shirt", 1234, 14.99, 'tshirt.jpg')
const cap = new shopItem("Baseball Cap", 9876, 8.99, 'cap.jpg')
const hoodie = new shopItem("Hoodie", 567019, 20.99, 'hoodie.jpg')
const bag = new shopItem("Bag", 43319, 12.49, 'bag.jpg')
const coffeeCup = new shopItem("Coffee Cup", 644354, 6.49, 'coffeeCup.jpg')
const pencilCase = new shopItem("Pencil Case", 9834554, 3.99, 'pencilcase.jpg')

const itemsList = [tshirt, cap, hoodie, bag, coffeeCup, pencilCase]

const storeContainer = id('storeContainer')


itemsList.forEach(item => {
    
    const html = `
    <div class="item-box">
    <div class="flex-col-cont">
    <img src="styles/images/${item.image}" alt="BuenVia Image" class="item-img">
    </div>
    <div class="item-details">
    <h2>${item.item}</h2>
    <p>£${item.price}</p>
    <label>Quantity</label>
    <input type="number" min="1" max="9" placeholder="1">
    <button data-btn-item="${item.sku}">Add</button>
    </div>
    </div>
    `

    storeContainer.innerHTML += html
    
    document.querySelectorAll('[data-btn-item]').forEach(data_btn => 
        data_btn.addEventListener('click', () => {
            console.log(data_btn.dataset)
        })
    )
    
})




// Helper
function id(id) {
    return document.getElementById(id)
}

function cEl(el) {
    return document.createElement(el)
}