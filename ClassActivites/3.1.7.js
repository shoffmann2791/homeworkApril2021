// refactor the functions below into arrow syntax


let myNumberFunction = () =>(2 ** 2 +3) % 4)* 14;

let greet = (name)=> 'Hello', ${name}';

let timeOfDayGreet = (name, timeOfDay) =>'Hello' ${name}, good ${timeOfDay}';


function myNumberFunction() {
    return ((2 ** 2 + 3) % 4) * 14;
  }
  
  function greet(name) {
    return `Hello, ${name}`;
  }
  
  const timeOfDayGreet = function(name, timeOfDay) {
    return `Hello, ${name}, good ${timeOfDay}`;
  };
  
  function tripleAndHalf(num) {
    let triple = num * 3;
    return triple / 2;
  }
  
  function sumTwoNumbers(num1, num2) {
    let sum = num1 + num2;
    console.log(`The sum of your numbers is ${sum}.`);
    return sum;
  }
  