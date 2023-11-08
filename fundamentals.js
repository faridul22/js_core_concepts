//1. How to declare a variable using let and const
const fatherName = "Abdur Sattar";
let session = "Rainy";
session = "summer"

//2. 6 basic condition: >,<, ===, !==, >=, <=
// multiple condition: &&, ||

if (fatherName === 'Abdur Sattar' && session === 'summer') {
    console.log("Congratulations your FatherName and session is correct")
}
else if (fatherName !== "Abdur Sattar" || session !== "summer") {
    console.log("fatherName and session are not correct")
}
else {

}
console.log("hello world")

//3. array declare
// index, length, push
const numbers = [12, 14, 16, 18, 20];


//4 loop
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i]
    console.log(number)
}


//5 function
function multiple(num1, num2) {
    const result = num1 * num2;
    return result;
}



//6 object
// Three ways to access property by name
const student = {
    name: "Farid",
    age: 23,
    movies: ["king khan", "Mastan"]
};
const studentAge = "age"
console.log(student.age) // direct by property 
console.log(student["age"]) // access via property name string
console.log(student[studentAge])// access via property name in a variable