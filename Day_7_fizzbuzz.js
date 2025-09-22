//button addEventListener
//const buttonClicked = document.getElementById ('button')

//buttonClicked.addEventListener("click", function(){
   // console.log('Button Clicked')
//})

//Fizz Buzz Assignment

const buttonClicked = document.getElementById ('fizzbuzz-btn')

buttonClicked.addEventListener("click", function(){
    this.innerHTML = "1,2,3,4"
})

//Amazon project help

/*class Product {
    constructor(name, description, price) {
        this.name = name;
        this.description = description;
        this.price = price;
    }
    render(parent) { //parent will be the html container
        const product = document.createElement('div');
        product.innerHTML = `
        <h2>${this.name}</h2>
        <p>${this.description}</p>
        <strong>$${this.toFixed(2)}</strong>`;
        parent.appendChild(product);
    }
}

//app.js
import Product from "./Produc.js"; type = 'Module"
productContainer = document.getElementById('product-container')

const product1 = new Product("Laptop", "A high performance", "999.99")
product1.render(productContainer);

//Cart.js
class Cart {
constructor(){
    this.items = [];
}
get total(){
    return this.items.reduce((sum, items))
}

}

*/


