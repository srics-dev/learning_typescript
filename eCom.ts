interface Product{
    id:number;
    name:string;
    price:number;
    inStock:boolean;
}

const productList: Product[] =[
{id:1, name:"laptop", price:1000, inStock:true},
{id:2, name:"desktop", price:1500, inStock:false},
];

productList.forEach((product)=>{
    console.log(`${product.name} - ₹${product.price} - ${product.inStock ? "Available" : "Out of Stock"}`);
});