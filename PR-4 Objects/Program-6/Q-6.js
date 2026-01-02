

let products = [
    { name: "Pen", price: 10, quantity: 20 },
    { name: "Notebook", price: 50, quantity: 10 },
    { name: "Bag", price: 700, quantity: 5 }
];

let totalValue = 0;

for (let item of products) {
    totalValue += item.price * item.quantity;
}

console.log("Total Stock Value =", totalValue);
