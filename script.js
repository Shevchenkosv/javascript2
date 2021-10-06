'use strict';
const openBasketBtn = document.querySelector('.cart-button');
const basketEl = document.querySelector('.basket');
const totalSum = document.querySelector('.totalGoodsSum');

openBasketBtn.addEventListener('click', function () {
    basketEl.classList.toggle('hidden');
});

class GoodsItem {
    constructor(title, price, id) {
        this.title = title;
        this.price = price;
        this.id = id;
    }
    render() {
        return `<div class="goods-item"><h3>${this.title}</h3><p>$${this.price}</p>
        <button class="but_cart">добавить в корзину</button></div>`;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
    }
    fetchGoods() {
        this.goods = [
            { title: 'Shirt', price: 150, id: 0 },
            { title: 'Socks', price: 50, id: 1 },
            { title: 'Jacket', price: 350, id: 2 },
        ]
    }
    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').insertAdjacentHTML('beforeend', listHtml);
    }
    totalGoodSum() {
        let sum = 0;
        this.goods.forEach(good => {
            sum += good.price;
        });
        totalSum.textContent = sum;
    }
}
let basket = {};
class Basket {
    constructor() {
        this.goods = [];
    }
    //метод добавления товара в корзину
    addBasketItem() {
    }
    // метод удаления товара из корзины
    removeBasketItem() {

    }
    //Метод для вывода итоговой суммы корзины
    addBasketPrice() {
    }
}



const list = new GoodsList();
list.fetchGoods();
list.render();
list.totalGoodSum();