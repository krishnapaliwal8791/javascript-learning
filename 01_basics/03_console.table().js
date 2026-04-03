"use strict";

let k = 10;
let l = 12;

console.table([k, l]);

/*
console.table()

Displays data in a tabular format in the browser console.

Behavior:

* If an array is passed → shows index → value.
* If an object or array of objects is passed → shows keys/properties as columns.

Example (array):

console.table([k, l]);

Output:

(index)    | Value
0          | 10
1          | 12

Example (array of objects):

console.table([
{ name: "Krishna", age: 20 },
{ name: "Rahul", age: 22 }
]);

Output:

(index)    | name    | age
0          | Krishna | 20
1          | Rahul   | 22

Use case:
console.table() is useful for debugging because it displays arrays and objects in a structured table format instead of a long unreadable log.
*/
let obj = {
    name: "Krishna",
    age: 19,
    isLoggedIn: false
}
console.table(obj)