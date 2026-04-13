/*
this keyword -> It always refers to current context 
*/
console.log(this) // It will print {} -> In node enviroment this refers to current context as empty because there is no context in the global but if we do the same in browser then we will see window there is global object is window object -> thats why we can capture the event like click and all 


const obj = {
    name: "Krishna",
    role: "Student",
    greet: function(){
        // console.log(`${name}, Hello | You are a student`); // ❌ Will not execute since name is not defined
        console.log(`${this.name}, Hello | You are a student`); // We used this keyword - here this refers to object 
        console.log(this)  // It will print what this is refering to
        
    }
}

obj.greet()
obj.name = "Krishna Paliwal"
obj.greet()


function one(){
    console.log(this)
}
one() // In node enviroment if in the function we print this keyword then we will see that this is pointing to global object 

function two(){
    const username = "Krishna"
    console.log(this.username) // ❌ We cannot use this keyword to accsess the variables in username. We will get undefined as output  
}
two()



// --------------------------------- Arrow functions --------------------
const three = () => {
    console.log(this) // In arrow functions this refers to empty object same as global but in regular functions this refers to global object thats why we can use this in regular functions but we cannot this keyword in arrow functions
    const username = "Krishna"
    console.log(this.username) // ❌ We cannot use this keyword to accsess the variables in username. We will get undefined as output
}
three()

let add = (num1, num2) => {
    return num1 + num2 
} // Explicity returning the result 
console.log(add(2, 3))

add = (num1, num2) => num1 + num2 // Implicit return 
console.log(add(2, 3))

add = (num1, num2) => (num1 + num2) // Using paranthesis
console.log(add(2, 3))

add = (num1, num2) => ({ans: num1+num2}) // Returning object Implicitly
console.log(add(2, 3))

