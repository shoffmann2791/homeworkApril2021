
//create and print a list of phone numbers
let allPhone = user.map((use) => use.phone);

console.log(allPhone);

//create and print a list of website and email pairs 
//(pair them in a string, array, or object)
let EWeb = user.map((web) => 
  [web.email, web.website]
)
console.log(EWeb);


//create a list of user 9's to-dos
let user9Tasks = toDo.filter((nine) => 
  nine.userId === 9 && nine.completed === false);

console.log(user9Tasks);
//then find the number of user 9's incomplete tasks

console.log(`User 9 has ${user9Tasks.length} incomplete tasks`);


/Using the placeholder Post data:

//create a list of user 5's posts

let user5 = post.filter((posty) => posty.userId === 5)
let user5Posts = user5.map((posty) => posty.title)

console.log(user5);
//then, create a list of title and body pairs

let allTitleBody = post.map((posty) => [posty.title, posty.body])
console.log(allTitleBody);

//part 2
//You could create a general Item class to hold properties that any and every item for sale shares in common, like id, name, or price.
//Then, extend Item with a class for GameConsoles and a class for VideoGames and include properties specific to each category of item.




