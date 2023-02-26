const minuses = document.querySelectorAll('.product__quantity-control.product__quantity-control_dec')
const pros = document.querySelectorAll('.product__quantity-control.product__quantity-control_inc')
const products = document.querySelectorAll('.product__add')
const basket = document.querySelector('.cart__products')
const cart = document.querySelector('.cart')

for (let plus of pros) { 
    plus.onclick = () => {
        plus.previousElementSibling.textContent = Number(plus.previousElementSibling.textContent) + 1
    } 
}

for (let minus of minuses) { 
    minus.onclick = () => {
        if(minus.nextElementSibling.textContent >= 2) {
            minus.nextElementSibling.textContent -= 1
        }
    } 
}

for (let product of products) { 
    product.onclick = () => {
        let find = false
        cart.classList.remove("cart__none")
        let parentProduct = product.closest('.product')
        let productsBasket = document.querySelectorAll('.cart__product')
        
            for (let productBasket of productsBasket) {    
                if (productBasket.dataset.id == parentProduct.dataset.id) {
                    find = true
                    let addCount = Number(parentProduct.querySelector('.product__quantity-value').textContent)
                    productBasket.querySelector('.cart__product-count').textContent = addCount + Number(productBasket.querySelector('.cart__product-count').textContent)
                }
            }

        if (!find) {
            let newProduct = document.createElement('div')
            basket.appendChild(newProduct)
            newProduct.outerHTML = `
            <div class="cart__product" data-id="${parentProduct.dataset.id}">
                <img class="cart__product-image" src="${parentProduct.querySelector('img').src}">
                <div class="cart__product-count">${parentProduct.querySelector('.product__quantity-value').textContent}</div>
                <a href="#" class="product__remove">&times;</a>
            </div>
        `
        const products = document.querySelectorAll('.cart__product')
        const close = products[products.length - 1].querySelector('.product__remove')
        close.addEventListener('click', () => {
            products[products.length - 1].remove(products[products.length - 1])
            console.log(document.querySelectorAll('.cart__product'))
            if (document.querySelectorAll('.cart__product').length == 0) {
                cart.classList.add("cart__none")
            }
        })
        }
    }
}
