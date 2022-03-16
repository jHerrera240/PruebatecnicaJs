/*1. Crear un objeto product. */

const products = {
    name: "product",
    category: "category",
    price: 000
}
console.log(products)
let watermelon = Object.assign({}, products)
let apple = Object.assign({}, products)
apple.name = 'apple'
apple.category = 'Fruits'
apple.price = 2000
console.log(apple, products)
// let productoArray = products[
//     {
//         "name": "watermelon",
//         "category" : "fruit",
//         "price": 12000
//     },
    
// ]
function search() {
    var productName = document.getElementById("product").value
    console.log(productName)
    var productPrice = parseInt(document.getElementById("price").value)
    if (productName == apple.name || productPrice == apple.price)
        alert("We find the fruit :)")
    else
        alert("Erroooooooooooooooor")
}
function create() {
    console.log("Creating the article")
    var productName = document.getElementById("product").value
    console.log(productName)
    var productPrice = parseInt(document.getElementById("price").value)
    console.log(productPrice)
    var productCategory = document.getElementById("category").value
    console.log(productCategory)
    if (productName == "" & productCategory == "" & productPrice == "")
        alert("Errooooor")
    else
        watermelon.name = productName
        watermelon.category = productCategory
        watermelon.price = productPrice
    return watermelon
}


function removing() {
    console.log("removing the article")
    var productName = document.getElementById("product").value
    console.log(productName)
    var productPrice = parseInt(document.getElementById("price").value)
    console.log(productPrice)
    var productCategory = document.getElementById("category").value
    console.log(productCategory)
    if (productName == apple.name & productCategory == apple.category) {
        alert("Borrando la manzana")
        delete apple.name
        delete apple.category
        delete apple.price
        console.log(apple)
    }
    else if (productName == watermelon.name & productCategory == watermelon.category) {
        alert("borrando watermelon")
        delete watermelon.name
        delete watermelon.category
        delete watermelon.price
    }
    else {
        alert("errorrrrr")
    }
}


/*Crear una función que permita añadir un product o varios en un 
array, la  función debe permitir añadir el código del product, 
name, color y peso. 3. Crear una función 
que permita consultar el total de products que hay en el  array. */