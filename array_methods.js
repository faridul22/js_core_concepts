const products = [

    { name: 'laptop', price: 32000, brand: 'lenovo', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'iphone', color: 'golden' },
    { name: 'watch', price: 32000, brand: 'casio', color: 'yellow' },
    { name: 'sunglass', price: 32000, brand: 'ribon', color: 'black' },
    { name: 'camera', price: 32000, brand: 'canon', color: 'gray' }
];

const brands = products.map(product => product.brand);
console.log(brands)