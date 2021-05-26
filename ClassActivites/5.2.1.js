// create an object literal

const animal = {
 name: "Rudy",
 age: 12,
 hobbies: ["playing Keep Away", "Getting Belly Rubs"]

};

console.log(animal.name);

// include a method that uses "this"

let barn ={

    age: "old",
    ageCheck(){
        return `This barn is ${this.age}';
    }
};
console.log(barn.ageCheck());


// create a function in the global scope that prints "this"
