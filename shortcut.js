// strng
// '', 0, false, null, undefined

// check truthy value
let myVar = 5;
if (myVar) {
    myVar = myVar * 100;
}
else {
    myVar = 0
}
console.log(myVar)

// check falsy value
let myMoney = 50;
if (!myMoney) {
    console.log("falsy")
}
else {
    console.log("truthy")
}


// ternary operator
const money = 100;
let food = money > 100 ? "biryani" : "cha biscuit";
console.log(food);

// number to string conversion
const num = 52;
const numString = num + '';
console.log(num)
console.log(numString)

// string to number conversion
const input = '560';
const inputNum = +input;
console.log(input);
console.log(inputNum);

let isActive = true;
const showUser = () => console.log('display user');
const hideUser = () => console.log('hide user');

// isActive ? showUser() : hideUser();

// use && if the left side is true then right side will be executed 
isActive && showUser();

// use || if the left side is false then right side will be executed
isActive || hideUser();

// toggle boolean
isActive = !isActive;