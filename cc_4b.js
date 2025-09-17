// Shirts, TV, Plates, Shoes, Mugs
let products = [{
    sku:"SKU-002", name: "Super Shirts", 
    category: "apparel", price: 40, 
    inventory: 200},{
    sku:"SKU-003", name: "Super TV", 
    category: "electronics", price: 100, 
    inventory: 150},{
    sku:"SKU-004", name: "Super Plates", 
    category: "kitchen", price: 35, 
    inventory: 105},{
    sku:"SKU-005", name: "Super Shoes", 
    category: "apparel", price: 20, 
    inventory: 79},{
    sku:"SKU-006", name: "Super Mugs", 
    category: "kitchen", price: 15, 
    inventory: 300}]

// Displays all of the discounts for each category
switch (categoryDiscounts) {
    case "apparel":
        console.log("20% off");
    break;
    case "electronics":
        console.log("10% off");
    break;
    case "kitchen":
        console.log("5% off");
    break;
    default:
        console.log("0% off");
}

