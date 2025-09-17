// Shirts, TV, Plates, Shoes, Mugs
let products = [{
    sku:"SKU-002", name: "Super Shirts", category: "apparel", price: 40.99, inventory: 200},
    {sku:"SKU-003", name: "Super TV", category: "electronics", price: 100.00, inventory: 150},
    {sku:"SKU-004", name: "Super Plates", category: "kitchen", price: 35.75, inventory: 105},
    {sku:"SKU-005", name: "Super Shoes", category: "apparel", price: 20.99, inventory: 79},
    {sku:"SKU-006", name: "Super Mugs", category: "kitchen", price: 15.00, inventory: 300}]

// Displays all of the discounts for each category
//for (let ------ OF -----) the "of" is very important
for (let product of products) {
    let discounts = 0;
//make sure everything is spelled the same
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
    }
//needs to be inside of the function so it stays defined
let promoPrice = product.price * (product.price* discounts);
// console.log(promoPrice)
product.promoPrice = promoPrice.toFixed(2)
}

let customerType = ["regular", "student", "senior"]
let customerDiscounts = 0;

if (customerType = "regular") { 
    customerDiscounts = 0}
    else if (customerType = "student") { 
        customerDiscounts = 0.10}
    else if (customerType = "senior") {
        customerDiscounts = 0.20}
    else {
        customerDiscounts = 0}

console.log(products);