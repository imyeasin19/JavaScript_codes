const products = [
    { name: 'shampoo', price: 300, quantity: 2 },
    { name: 'chiruni', price: 100, quantity: 3 },
    { name: 'shirt', price: 700, quantity: 5},
    { name: 'pant', price: 1200, quantity: 1},
]
function shoppingCost(products){
    let total =0;
    for(const product of products){
        const productPrice = product.price * product.quantity;
        total += productPrice;
    }
    return total;
}
console.log(shoppingCost(products));
