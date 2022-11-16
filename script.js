alert("Hello World");

let name = "amira";
var age = 12;
const PI = 3.14;
// var name, age, email;
// var name, age=12;
console.log(`my name is ${name} and my age is ${age}`);
console.log(PI);

console.log(typeof name);
console.log(typeof name == "string");

var result;
console.log(typeof result);
result = "ITI" + "OS";
console.log(result, typeof result);

result = "20" + 17;
console.log(result, typeof result);

result = "is Exist" + true;
console.log(result, typeof result);

result = 37 + null;
console.log(result, typeof result);

result = 37 + undefined;
console.log(result, typeof result);

result = true + false;
console.log(result, typeof result);

result = true + undefined;
console.log(result, typeof result);

if (name === "amira") {
  alert(`hi ${name}`);
} else {
  alert(`bye ${name}`);
}

var typedVar = 3;
switch (typeof typedVar) {
  case "boolean":
    console.log("blue");
    break;
  case "number":
    console.log("green");
    break;
  case "string":
    console.log("red");
    break;
  default:
    console.log("grey");
    break;
}

let sum = 0;
for (var i = 0; i < 5; i++) {
  sum += i;
}
console.log(sum);

var greetings = "Hello JavaScript!";
alert(greetings);

var person = prompt("Please enter your name", "Mona");
console.log(person);

var isReady = confirm("Are you ready?");
if (isReady) {
  alert("Yes");
} else {
  alert("No");
}

function multiply(num1, num2) {
  var result = num1 * num2;
  return result;
}

var result = multiply(3, 4);
alert(result); // result = 12

var canFly = true
var bird = canFly ? 'Dove' : 'Penguin'
console.log(bird);