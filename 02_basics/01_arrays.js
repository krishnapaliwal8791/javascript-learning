// Arrays in JS
const arr = ["Krishna", true, 10, 12n]
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// JS arrays are resizable
// When we do copy operation on arrays it will create shallow copy 

// Declaring array using new keyword
const arr3 = new Array(1,2,3,4,5,6)

let myarr = new Array
// Array Methods
// 1. push()
myarr.push(10)
console.log(myarr) // [ 10 ]
myarr.push(11)
console.log(myarr) // [ 10, 11 ]

// 2. pop()
myarr.pop()
console.log(myarr) // [ 10 ]

// 3. unshift()
myarr.unshift(9)
console.log(myarr) // [ 9, 10 ]

// 4. shift()
myarr.shift()
console.log(myarr) // [ 10 ]

// 5. includes()
console.log(myarr.includes(9)); // false
console.log(myarr.includes(10)); // true

// 6. indexOf()
console.log(myarr.indexOf(9)); // -1
console.log(myarr.indexOf(10)); // 0
myarr = [1,2,3,3,4,3] 
console.log(myarr.indexOf(3)); // 2

// 7. join()
myarr = [1,2,3,4,5]
const newarr = myarr.join() 
console.log(`myarr -> `,myarr) // myarr ->  [ 1, 2, 3, 4, 5 ]
console.log(`typeof myarr -> ${typeof myarr}\nnewarr -> ${newarr} \ntypeof newarr -> ${typeof newarr}`);
/*
typeof myarr -> object
newarr -> 1,2,3,4,5 
typeof newarr -> string
*/

// 8. slice() and splice()
myarr = [0,1,2,3,4,5]
console.log("A : ", myarr); // A :  [ 0, 1, 2, 3, 4, 5 ]
let slice_arr = myarr.slice(1,3)
console.log("slice_arr : ", slice_arr); // slice_arr :  [ 1, 2 ]
console.log("B : ", myarr); // B :  [ 0, 1, 2, 3, 4, 5 ]
let splice_arr = myarr.splice(1,3)
console.log("splice_arr : ", splice_arr); // splice_arr :  [ 1, 2, 3 ]
console.log("C : ", myarr); // C :  [ 0, 4, 5 ]

// Splice includes the last element in the result while slice doesnot includes last element in the result
// Splice affects the original array while slice doesnot affect the original one