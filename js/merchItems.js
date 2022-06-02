export default class shopItem{
    constructor(item, sku, price, image, quantity, desc) {
        this.item = item,
        this.sku = sku,
        this.price = price
        this.image = image
        this.quantity = quantity
        this.desc = desc
    }
}

const tshirt = new shopItem("T-shirt", 1234, 14.99, 'tshirt.jpg', null, 'Lightweight t-shirt, designed to keep you looking and feeling cool')
const cap = new shopItem("Baseball Cap", 9876, 8.99, 'cap.jpg', null, 'Keep cool on sunny days with this really cool baseball cap.')
const hoodie = new shopItem("Hoodie", 567019, 20.99, 'hoodie.jpg', null)
const bag = new shopItem("Bag", 43319, 12.49, 'bag.jpg', null)
const coffeeCup = new shopItem("Coffee Cup", 644354, 6.49, 'coffeeCup.jpg', null)
const pencilCase = new shopItem("Pencil Case", 9834554, 3.99, 'pencilcase.jpg', null)

export const itemsList = [tshirt, cap, hoodie, bag, coffeeCup, pencilCase]