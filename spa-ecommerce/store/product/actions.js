import axios from "axios"


//Получение списка товаров
export function getProducts({ commit }) {
    let url = "https://gist.githubusercontent.com/hubdestro/dbda18b1847b10a180b2d8943fb943b8/raw/8e5667831b54e52a5f00a882701ffbdbebdd34b6/product_list.json";
    axios.get(url).then((response) => {
        commit("setProducts", response.data);
    }).catch(error => {
        console.log(error);
    });
}

//Получение описания товаров
export function productDetails({ commit }, id) {
    let url = "https://gist.githubusercontent.com/hubdestro/dbda18b1847b10a180b2d8943fb943b8/raw/8e5667831b54e52a5f00a882701ffbdbebdd34b6/product_list.json";
    axios.get(url, { params: { id: id } }).then((response) => {
        commit("setProduct", response.data[0]);
    }).catch(function (error) {
        console.log(error);
    });
}

//добавление в корзину

export function addCart({ commit, getters }, payload) {
    let cart = getters.cart
    let data = payload.product
    data["quantity"] = payload.quantity
    cart.push(data)
    commit("setCart", cart)
}

//удаление из корзины
export function removeCart({ commit, getters }, id) {
    let cart = []
    if (id) {
        for (let index = 0; index < getters.cart.length; index++) {
            const element = getters.cart[index];
            if (element.id !== id) {
                cart.push(element)
            }
        }
    }
    commit("setCart", cart)
}