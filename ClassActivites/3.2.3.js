let x = 5;
let y = [1, 2, 30];
let z = {
  id: 100,
  name: "myName",
  loggedIn: false
};

console.log("before mutation", x, y, z);

// reassign x, y, and z to FALSY values
x = 0;
y = null;
z = "";


// print x, y, and z
console.log("after mutation", x, y, z);

const a = "name";
const b = [];
const c = {};
console.log("before mutation", a, b, c);
// try to reassign a, b, and c to FALSY values

// using BRACKET NOTATION, assign a value to b
b["this is sa value"] = "hello";
console.log(b);
// using DOT NOTATION, assign a PROPERTY to c
c.property = "new property";
console.log(c);

// using DOT NOTATION, assign a METHOD to c
c.method = function (){
console.log("hello there");


};
console.log(c);
    
}
// using BRACKET NOTATION, call the method in c
c.method();
c["method"]();
// print a, b, and c
