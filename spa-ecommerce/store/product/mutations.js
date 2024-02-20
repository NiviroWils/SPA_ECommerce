export function setProducts(state, val) { //Присваиваем список товаров состоянию products
    state.products = val
}
export function setProduct(state, val) { // Присваиваем объект с определенным товаром состоянию product
    state.product = val
}
export function setLoad(state, val) {
    state.uploadingData = val
}
export function setCart(state, val) { //Присваивает список добавленных товаров в корзину состоянию cart
    state.cart = val
}


