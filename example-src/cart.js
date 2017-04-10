class Cart {
  constructor() {
    this.items = []
  }

  addItem(item) {
    this.items.push(item)

    return this
  }

  removeItem(itemId) {
    const index = this.items.findIndex((item) => {
      item.itemId === itemId
    })

    this.items.splice(index, 1)
  }

  getItems() {
    return this.items
  }

  describeContents() {
    const totals = {}
    let descriptiveAmount = 'The cart contains:'

    this.items.forEach((item) => {
      if (!totals[item.itemId]) {
        totals[item.itemId] = 0
      }

      totals[item.itemId] = totals[item.itemId] + 1
    })

    let i = 1
    const uniqueItemsInCart = Object.keys(totals).length

    Object.keys(totals).forEach((itemId) => {
      const suffix = (uniqueItemsInCart === i) ? '.' : ','

      descriptiveAmount = `${descriptiveAmount} ${totals[itemId]}x ${itemId}${suffix}`
      i++
    })

    return descriptiveAmount
  }
}

const banana = { itemId: 'banana', description: 'A tasty banana' }
const apple = { itemId: 'apple', description: 'A green apple' }
const grapes = { itemId: 'grapes', description: 'A small bag of grapes' }

const myCart = new Cart()

myCart
  .addItem(banana)
  .addItem(banana)
  .addItem(apple)
  .addItem(grapes)

const contents = myCart.describeContents()

console.log(contents)