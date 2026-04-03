// Singleton objects -> when you create an object with constructor then it is singleton object 
// When we declare objects as literals then the object is not singleton object

// Creating object using constructor method
// we will create the object using Object.create()

// Object Literals
let JsUser = {
    name: "Krishna", // Internally keys are also stored as strings
    age: 19,
    "full name" : "Krishna Paliwal",
    location: "ujjain",
    email: "krishna.p@mail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// There are 2 methods to accsess the data of object 
// 1. 
console.log(`name = `, JsUser.name, `isLoggedIn : `, JsUser.isLoggedIn);
// console.log(`full name = `, JsUser.full name); //Error We cannot access the value with full name as key using this method


// 2. 
console.log(`name = `, JsUser["name"], `age = `, JsUser["age"]); // Internally keys are also stored as strings
console.log(`full name = `,JsUser["full name"]);

// If we want to use symbol as objects key 
const mySym = Symbol('Key1')
JsUser = {
    name: "krish", 
    age: 19,
    // mySym : "A Value of Symbol" //It will treat mySym as string not take it as Symbol
    [mySym] : "A Value of Symbol", //Now it will be used as symbol
    // [Symbol2] : "Symbol 2's value", This will also give the error because Symbol2 is not defined so first define the symbol before using it
    "full name" : "Krishna Paliwal",
    location: "ujjain",
    email: "krishna.p@mail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"]
}
console.log(`mySym : `, mySym);
console.log(JsUser[mySym]);
console.log(JsUser);

// We can change the value of key as 
JsUser.name = 'Krishna'
JsUser["location"] = 'Gwalior'
console.log(JsUser);

// Object.freeze() -> After this function is executed we cannot change the values of objects. If we try to change the values it will not give the error but also not propogate the change
Object.freeze(JsUser)
JsUser.name = 'Lord_K22'
console.log(JsUser);


let JsUser1 = {
    name: "Krishna",
    age: 19,
    "full name" : "Krishna Paliwal",
    location: "ujjain",
    email: "krishna.p@mail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// Adding function in Object 
JsUser1.greeting = function(){
    console.log(`Hello ${this.name}\nYour full name is ${this["full name"]}`);
}
console.log(JsUser1.greeting);
console.log(JsUser1.greeting());
console.log(JsUser1);

