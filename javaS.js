/*1. Crear un objeto product. */

const products = {
    name: "product",
    category:"category",
    price: 000
}
console.log(products)

let apple = Object.assign({},products)
apple.name = 'apple'
apple.category = 'Frutas'
apple.price = 2000
console.log(apple, products)

function search(){
    var productname = document.getElementById("product").value
    console.log(productname)
    var productprice = parseInt(document.getElementById("price").value)
    if (productname == apple.name || productprice == apple.price )
        alert("We find the fruit :)")
    else
        alert("Erroooooooooooooooor")
}



/*Crear una función que permita añadir un product o varios en un 
array, la  función debe permitir añadir el código del product, 
name, color y peso. 3. Crear una función 
que permita consultar el total de products que hay en el  array. */