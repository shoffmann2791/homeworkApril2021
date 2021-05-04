// create a new unordered list (ul) element
const newUnorderedList = document.createElement("ul");
// remove the paragraph element in the nav-bar
document.querySelector(".nav-bar").remove("p");
// add your new ul element to the nav-bar
document.querySelector(".nav-bar").remove(paragraphElement);
// create two new list item (li) elements, and add some text to them
const listItem = document.createElement("li");
const listenItem2 = document.createElement("li");
listItem.textContent = "Yay!"
listenItem2.textContent = "Hoorah"

document.querySelector(".nav-bar > ul").appendChild(listItems);
// add the li elements to the ul in the nav-bar