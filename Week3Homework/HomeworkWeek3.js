
 var pizzaToppings = ["pepperoni", "mushrooms", "olives", "tomatoes"];
pizzaLine = [];

keyValuePizza = {
    size: "Large",
    crust: "Thin Crust",
    toppings: "Sausage",
}



 function toppingLoop() {
    availableToppings= []
    for ( i = 0; i <= pizzaToppings.length; i++) {
        availableToppings.push(pizzaToppings[i]);
    }
    return availableToppings;

 }


function greetCustomer(name){
console.log(`Welcome ${name}, to Pizza Pie. We have ${toppingLoop()} toppings for your pizza!`);  
}


greetCustomer("Sally");




function getPizzaOrder(s,c,...t) {
    console.log(`one ${s}, ${c}, pizza with ${t} ...`) 



    "One large thick crust pizza with x, y, z, ... coming up!"
    
}
getPizzaOrder("Large","Thin Crust", "sausage", "pepperoni")

function preparePizza(arr){

    let pizza = {
        size: arr.size, 
        crust: arr.crust,
        toppings: arr.toppings

}

pizzaLine.push(pizza);
console.log("Cooking Pizza");

}

    
preparePizza(keyValuePizza);
console.log(pizzaLine);


function servePizza(arr) {
 console.log(`Order up here's your ${arr.size} ${arr.crust} pizza with ${arr.toppings}!`)
    
}

servePizza(keyValuePizza);