/*1. Crear un objeto product. */

const products = {
    name: "product",
    category:"category",
    price: 000
}
console.log(products)

let apple = Object.assign({},products)
    apple.name = 'apple'
    apple.category = 'Fruits'
    apple.price = 2000
    console.log(apple, products)

function search(){
    var productName = document.getElementById("product").value
        console.log(productName)
    var productPrice = parseInt(document.getElementById("price").value)
    if (productName == apple.name || productPrice == apple.price )
        alert("We find the fruit :)")
    else
        alert("Erroooooooooooooooor")
}

function create(){
    console.log("Creating the article")
    var productName = document.getElementById("product").value
        console.log(productName)
    var productPrice = parseInt(document.getElementById("price").value)
        console.log(productPrice)
    var productCategory =document.getElementById("category").value
        console.log(productCategory)
         let obj1
    if(productName == "" & productCategory == "" &  productPrice == "" )
        alert("Errooooor")
    else
        obj1 = Object.assign({},products)
        obj1.name.push = "watermelon"
        obj1.category.push = "fruits"
        obj1.price.push = "5000"

    return obj1
}


function removing(){
 console.log("removing the article")
}


/*Crear una función que permita añadir un product o varios en un 
array, la  función debe permitir añadir el código del product, 
name, color y peso. 3. Crear una función 
que permita consultar el total de products que hay en el  array. */