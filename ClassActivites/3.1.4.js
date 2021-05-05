//Named Parameters
// write a function that takes two named parameters:

function testFunction(test1, test2=0){
console.log (test1);
console.log(test2);
return test1 + test2;
}
// print each named parameter,
// then return the parameters added together

// invoke the function and pass in two numbers
testFunction(5,20);

// invoke the function and pass in more than two numbers
testFunction(38, 12, 18);
// invoke the function and pass in only one number
testFunction(72);
// change the function to set default values for the parameters
testFunction(72);
// again, invoke the function and pass in only one number

// Rest Operator
// add a rest operator to the function's parameters
// add a line to the function's body to print the value of the rest operator

// again, invoke the function and pass in more than two numbers