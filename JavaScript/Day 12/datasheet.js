const products = [
  // Electronics
  { id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true },
  { id: 2, name: "Headphones", category: "Electronics", price: 200, inStock: true },
  { id: 3, name: "Smartphone", category: "Electronics", price: 800, inStock: false },
  { id: 4, name: "Monitor", category: "Electronics", price: 300, inStock: true },
  { id: 5, name: "Keyboard", category: "Electronics", price: 75, inStock: true },

  // Books
  { id: 6, name: "The Hobbit", category: "Books", price: 25, inStock: true },
  { id: 7, name: "A Brief History of Time", category: "Books", price: 30, inStock: true },
  { id: 8, name: "Dune", category: "Books", price: 28, inStock: false },

  // Appliances
  { id: 9, name: "Coffee Maker", category: "Appliances", price: 150, inStock: false },
  { id: 10, name: "Blender", category: "Appliances", price: 80, inStock: true },
  { id: 11, name: "Toaster", category: "Appliances", price: 45, inStock: true },
  { id: 12, name: "Microwave Oven", category: "Appliances", price: 220, inStock: true },

  // Clothing
  { id: 13, name: "T-Shirt", category: "Clothing", price: 20, inStock: true },
  { id: 14, name: "Jeans", category: "Clothing", price: 60, inStock: false },
  { id: 15, name: "Jacket", category: "Clothing", price: 110, inStock: true },

  // Home Goods
  { id: 16, name: "Desk Lamp", category: "Home Goods", price: 35, inStock: true },
  { id: 17, name: "Scented Candle", category: "Home Goods", price: 15, inStock: true },
  { id: 18, name: "Picture Frame", category: "Home Goods", price: 22, inStock: false },

  // Groceries
  { id: 19, name: "Organic Apples", category: "Groceries", price: 5, inStock: true },
  { id: 20, name: "Artisan Bread", category: "Groceries", price: 8, inStock: true }
];


// const ans = products.filter((prod) => prod.price > 200);
// console.log(ans);


// const ans = products.filter((prod) => prod.price > 200).sort((a,b) => a.price - b.price);
// console.log(ans);

// const ans = products.filter((prod) => prod.price > 200).sort((a,b) => a.price - b.price).map((prod) => ({name : prod.name, price : prod.price}));
// console.log(ans);

 

// products.mapping = function(compare){
//     let ans = [];

//     for(let n of this){
//         ans.push(compare(n));
//     }

//     return ans;
// }

// // const ans = products.filter((prod) => prod.price > 200).sort((a,b) => a.price - b.price).mapping((prod) => ({name : prod.name, price : prod.price}));
// const ans = products.mapping((prod) => ({name : prod.name, price:prod.price}))

// console.log(ans);


// const ans = products.reduce((accumulator, currentVal)=>{
//     return accumulator + currentVal.price;
// },0);

// console.log(ans);

// const ans = products.reduce((accumulator, currentVal)=>{
//     if(currentVal.inStock){
//         return accumulator + currentVal.price;
//     }
//     else{
//         return accumulator;
//     }
// },0);

// console.log(ans);

// const arr = [10,99, 88, 99, 10];

// const st = new Set(arr);

// console.log(st);

// st.add(33);
// console.log(st);
//  st.delete(33);
// console.log(st.has(33));
// st.clear();
// console.log(st);


const m2 = new Map([
    ["Table",8],
    ["99", "NinetyNone"],
    ["true", "Iam true"],
]);


m2.set({"hello":"string","Key":0},true);
// console.log(m2);

for(let n of m2){
    console.log(n);
}