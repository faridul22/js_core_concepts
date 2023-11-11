// 1. array destructuring

// destructuring by variable
const numbers = [42, 65];
const [x, y] = numbers;
console.log(x, y)

// destructuring by index
const a = numbers[0];
const b = numbers[1];
console.log(a, b);

// destructuring by direct array
const [c, d] = [34, 35]

// destructuring by function
function boxify(num1, num2) {
    const num = [num1, num2];
    return num;
};

const [first, second] = boxify(12, 13);
console.log(first)

// 
const student = {
    name: "MD Farid",
    age: 23,
    movies: ["king khan", "Dhakar Mastan"]
}
const [firstMovie, secondMovie] = student.movies;

//----------------------------------------------------------//
// Object destructuring
const { name, age } = { id: 1, name: "Abbas", salary: 340, age: 12 }

const employees = {
    id: 'VS code',
    designation: 'developer',
    machine: 'mac',
    language: ['html', 'css', 'js'],
    specification: {
        height: 66,
        weight: 35,
        address: 'Dhaka',
        drink: 'water',
        watch: {
            color: 'black',
            price: 500,
            brand: 'garmin'
        }
    }
};

const { id, designation } = employees;
const { address, height } = employees.specification;
const [firstLanguage, secondLanguage, thirdLanguage] = employees.language;
const { price } = employees.specification.watch;
console.log(price)