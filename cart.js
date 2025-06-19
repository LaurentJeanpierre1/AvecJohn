const products = [
    {id: 1, name: "T-shirt", price: 15},
    {id: 2, name: "Pantalon", price: 30},
    {id: 3, name: "Casquette", price: 10},
    {id: 4, name: "Chaussures", price: 50,}
];
console.log(products);
let cart = [];

function showProducts() {

    console.log("Voici la liste des produits disponibles :")

    for (const element of products){

        console.log(`${element.id} ${element.name} - ${element.price}€`);
    }
}

showProducts();

let id = Number(prompt("Saisissez l'id du produit que vous souhaitez ajouter parmi les produits disponibles."));

function addProductToCart(id) {

    const productToAdd = products[id-1];
    cart.push(productToAdd);
    console.log(`Nous vous confirmons que vous avez ajouté au panier l'article suivant : ${products[id-1].name}.`);
    console.log(cart);

}

addProductToCart(id);

function showCart() {

    console.log("Voici les produits que vous avez dans votre panier :");
    let nbLine = 1;
    let total = 0;

    for (const product of cart) {
        console.log(`${nbLine}. ${product.name} - ${product.price}€`);
        nbLine++;
        total = total + product.price;
    }
    
    console.log(`Total : ${total}€`)

}
showCart();

let line = Number(prompt("Saisissez la ligne du produit que vous souhaitez supprimer du panier."));

function removeProductFromCart(line) {

    const IndexProductToRemove = line-1;
    const productRemoved = cart[IndexProductToRemove];

    cart.splice(IndexProductToRemove,1);
    console.log(`Nous vous confirmons que vous avez supprimé du panier l'article suivant : ${productRemoved.name}.`);
    console.log(cart);
};

removeProductFromCart(line);