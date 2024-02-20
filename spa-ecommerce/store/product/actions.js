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