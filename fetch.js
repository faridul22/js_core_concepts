// 1. JSON => stringify(), parse()
const student = {
    name: 'Sakib Khan',
    age: 33,
    movies: ['king khan', 'Mastan']
}

const studentJSON = JSON.stringify(student);
console.log(studentJSON);

const studentObj = JSON.parse(studentJSON);
console.log(studentObj)

// 2. fetch
// fetch('url')
//     .then(response => response.json())
//     .then(data => console.log(data))


// 3. object keys, values
const keys = Object.keys(student);
const values = Object.values(student);


const numbers = [2, 3, 4, 5, 6, 7, 8]
const number = numbers.map(num => num * 2)
numbers.forEach(num => console.log(num))

// NOTE:
// (for of loop) use on an array like object
// (for in loop) use on an object


// 3 add or remove from an array
const products = [
    { name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'iphone', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sunglass', price: 300, brand: 'ribon', color: 'black' },
    { name: 'camera', price: 32000, brand: 'canon', color: 'gray' }
];

const newProduct = { name: 'webcam', price: 700, brand: 'Lal' };

// add newProduct in products array
const newProducts = [...products, newProduct];

// remove product from products array.
// remove phone means create a new array without the phone.
const remaining = products.filter(product => product.name !== 'phone');
console.log(remaining)