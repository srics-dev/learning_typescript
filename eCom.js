var productList = [
    { id: 1, name: "laptop", price: 1000, inStock: true },
    { id: 2, name: "desktop", price: 1500, inStock: false },
];
productList.forEach(function (product) {
    console.log("".concat(product.name, " - \u20B9").concat(product.price, " - ").concat(product.inStock ? "Available" : "Out of Stock"));
});
