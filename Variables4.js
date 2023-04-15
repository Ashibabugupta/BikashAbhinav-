
function addRemoveUpdateItemsInCart() {

    const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

    // add meat in the beginning if not in list
    if (shoppingCart.indexOf("Meat")) {
        shoppingCart.unshift("Meat");
    }

    // add suger if not in list
    if (shoppingCart.indexOf("Sugar")) {
        shoppingCart.push("Sugar");
    }

    // remove honey
    var idx = shoppingCart.indexOf("Honey");
    shoppingCart.splice(idx, 1);

   // update tea
    idx = shoppingCart.indexOf("Tea");
    shoppingCart[idx] = 'Green Tea';

    console.log(shoppingCart);
}
addRemoveUpdateItemsInCart();
