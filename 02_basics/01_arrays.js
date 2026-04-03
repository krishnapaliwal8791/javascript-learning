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
console.log(myarr)
myarr.push(11)
console.log(myarr)

// 2. pop()
myarr.pop()
console.log(myarr)

// 3. unshift()
myarr.unshift(9)
console.log(myarr)

// 4. shift()
myarr.shift()
console.log(myarr)

// 5. includes()
console.log(myarr.includes(9)); //
console.log(myarr.includes(10));

// 6. indexOf()
console.log(myarr.indexOf(9));
console.log(myarr.indexOf(10));
myarr = [1,2,3,3,4,3]
console.log(myarr.indexOf(3));

// 7. join()
myarr = [1,2,3,4,5]
const newarr = myarr.join()
console.log(`myarr -> `,myarr)
console.log(`ntypeof myarr -> ${typeof myarr}\nnewarr -> ${newarr} \ntypeof newarr -> ${typeof newarr}`);

// 8. slice() and splice()
myarr = [0,1,2,3,4,5]
console.log("A : ", myarr);
let slice_arr = myarr.slice(1,3)
console.log("slice_arr : ", slice_arr);
console.log("B : ", myarr);
let splice_arr = myarr.splice(1,3)
console.log("splice_arr : ", splice_arr);
console.log("C : ", myarr);

// Splice includes the last element in the result while slice doesnot includes last element in the result
// Splice affects the original array while slice doesnot affect the original one