// Shirts, TV, Plates, Shoes, Mugs
let products = [{
    sku:"SKU-002", name: "Super Shirts", category: "apparel", price: 40.99, inventory: 200},
    {sku:"SKU-003", name: "Super TV", category: "electronics", price: 100.00, inventory: 150},
    {sku:"SKU-004", name: "Super Plates", category: "kitchen", price: 35.75, inventory: 105},
    {sku:"SKU-005", name: "Super Shoes", category: "apparel", price: 20.99, inventory: 79},
    {sku:"SKU-006", name: "Super Mugs", category: "kitchen", price: 15.00, inventory: 300}]

// Displays all of the discounts for each category
for (let product in products) {
    let discounts = 0;

    switch (product.category) {
    case "apparel":
        discounts = 0.20;
        break;
    case "electronics":
        discounts = 0.10;
        break;
    case "kitchen":
        discounts = 0.05;
        break;
    default:
        discounts = 0;
}}

let promoPrice = product.price * (product.price*discounts));
product.promoPrice = promoPrice.toFixed(2)



//let customerType = ["regular", "student", "senior"]

//if (customerType = "regular") { 
    //console.log()}

console.log(products);