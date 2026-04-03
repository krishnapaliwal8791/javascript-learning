"use strict";

// ==============================
// 1️⃣ Data Types in JavaScript
// ==============================

// JS has 2 categories of data types:

// 🔹 Primitive (Stored directly, immutable, copied by value)
// 7 Types:
// String, Number, Boolean, null, undefined, Symbol, BigInt

// 🔹 Non-Primitive (Reference types)
// Arrays, Objects, Functions

// The classification is based on:
// - How data is stored in memory
// - How values are accessed (value vs reference)

// JavaScript is dynamically typed.
// You don't declare variable types explicitly.

// ==================================
// 2️⃣ Symbol Example
// ==================================

let id = Symbol('112');
let anotherId = Symbol('112');

console.log(id, anotherId);

// Even though description is same, Symbols are ALWAYS unique
console.log(id == anotherId);   // false
console.log(id === anotherId);  // false


// ==================================
// 3️⃣ BigInt Example
// ==================================

let bigNumber = 12n;  // 'n' makes it BigInt
console.log(bigNumber);
console.log(typeof bigNumber);  // bigint


// ==================================
// 4️⃣ Array (Reference Type)
// ==================================

const heroes = ["shaktiman", "naagraj", "doga"];

console.log(heroes);
console.log(typeof heroes);   // object (IMPORTANT)
// Arrays are technically objects in JavaScript.
// To check if something is array:
console.log("Checking whether heroes are array or not ->",Array.isArray(heroes))
const heroesTwo = heroes
console.log(`heroesTwo : `,heroesTwo,` heroes : `,heroes);
heroesTwo[3] = "Chacha Chaudhary"
console.log(`heroesTwo : `,heroesTwo,` heroes : `,heroes);

// ==================================
// 5️⃣ Object (Reference Type)
// ==================================

let myObj = {
    name: "Krishna",
    age: 20
};

console.log("myObj =>\n",myObj);
console.log(typeof myObj);  // object


// ==================================
// 6️⃣ Function (Reference Type)
// ==================================

const myFunc = function () {
    console.log("Hello Krishna");
};

// typeof myFunc returns "function"
// But internally, functions are objects.

myFunc();  // Calling function

console.log(myFunc);
console.log(typeof myFunc);  // function (special type of object)




// Diffrence between Primitive and refrence types
// Feature	      Primitive     	Reference
// Stored in	   Stack        	Heap
// Copy behavior  By value	       By reference
// Mutable	       No	              Yes