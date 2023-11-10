const numbers = [10, 11, 12, 13, 14, 15, 16];
const student = {
    name: "MD Farid",
    age: 23,
    movies: ["king khan", "Dhakar Mastan"]
}

// 1. Template string
const aboutMe = `My name is ${student.name} age of ${student.age} and I have ${numbers[4]} brothers. We are love ${student.movies[1]} movie`;

//2. arrow function
const getSixtySix = () => 66;
const addFifty = num => num + 50;
const isEven = x => x % 2 == 0;
console.log(isEven(56))
const addThree = (x, y, z) => x + y + z;
const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
};

//3 spread operator(...)
// const newNumbers = numbers;
const newNumbers = [...numbers];
// create a new array from an older array and add an element
const currentNumbers = [...numbers, 55, 66]

numbers.push(99)
numbers.push(99)
numbers.push(99)
console.log(numbers)
console.log(newNumbers)
console.log(currentNumbers)

