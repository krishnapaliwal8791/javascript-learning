"use strict";

/*
========================================================
        JAVASCRIPT TYPE CONVERSION & COERCION
========================================================
*/

/*
--------------------------------------------------------
1️⃣ STRING → NUMBER
--------------------------------------------------------
*/

let score = "33";

console.log("Original value:", score);
console.log("Type before conversion:", typeof score);

let valueInNumber = Number(score);

console.log("After conversion:", valueInNumber);
console.log("Type after conversion:", typeof valueInNumber);
console.log("\n---------------------------------\n");

/*
Invalid numeric string
*/

let score2 = "33auie";

console.log("Original value:", score2);
console.log("Type before conversion:", typeof score2);

let valueInNumber2 = Number(score2);

console.log("After conversion:", valueInNumber2);  // NaN
console.log("Type after conversion:", typeof valueInNumber2); // number
console.log("typeof NaN:", typeof NaN);
console.log("\n---------------------------------\n");


/*
--------------------------------------------------------
2️⃣ NULL → NUMBER
--------------------------------------------------------
*/

let s = null;

console.log("Original value:", s);
console.log("Type before conversion:", typeof s);

let sConverted = Number(s);

console.log("After conversion:", sConverted); // 0
console.log("Type after conversion:", typeof sConverted);
console.log("\n---------------------------------\n");


/*
--------------------------------------------------------
3️⃣ UNDEFINED → NUMBER
--------------------------------------------------------
*/

let p; // undefined
// or we can write it as -> let p = undefined

console.log("Original value:", p);
console.log("Type before conversion:", typeof p);

let pConverted = Number(p);

console.log("After conversion:", pConverted); // NaN
console.log("Type after conversion:", typeof pConverted);
console.log("\n---------------------------------\n");


/*
--------------------------------------------------------
4️⃣ BOOLEAN → NUMBER
--------------------------------------------------------
*/

let trueValue = true;
let falseValue = false;

console.log("true →", Number(trueValue));   // 1
console.log("false →", Number(falseValue)); // 0
console.log("\n---------------------------------\n");


/*
--------------------------------------------------------
5️⃣ NUMBER → BOOLEAN
--------------------------------------------------------
*/

let num1 = 1;
let num2 = 22;
let num3 = -22;
let num4 = 0;
let num5 = NaN;

console.log("1 →", Boolean(num1));
console.log("22 →", Boolean(num2));
console.log("-22 →", Boolean(num3));
console.log("0 →", Boolean(num4));
console.log("NaN →", Boolean(num5));
console.log("\n---------------------------------\n");


/*
--------------------------------------------------------
6️⃣ STRING → BOOLEAN
--------------------------------------------------------
*/

let stringA = "";
let stringB = "Krishna";
let stringC = "false";

console.log('"" →', Boolean(stringA));          // false
console.log('"Krishna" →', Boolean(stringB));  // true
console.log('"false" →', Boolean(stringC));    // true
console.log("\n---------------------------------\n");


/*
--------------------------------------------------------
7️⃣ IMPLICIT COERCION EXAMPLES
--------------------------------------------------------
*/

console.log('"5" + 1  =', "5" + 1);  // "51" (string concatenation)
console.log('"5" - 1  =', "5" - 1);  // 4    (numeric coercion)
console.log('"5" * 2  =', "5" * 2);  // 10
console.log('"5" / 2  =', "5" / 2);  // 2.5

console.log("\n---------------------------------\n");


/*
--------------------------------------------------------
8️⃣ IMPORTANT EDGE CASES
--------------------------------------------------------
*/

console.log("NaN === NaN →", NaN === NaN);  // false
console.log("null == undefined →", null == undefined);   // true
console.log("null === undefined →", null === undefined); // false
console.log("Boolean([]) →", Boolean([]));   // true
console.log("Boolean({}) →", Boolean({}));   // true

console.log("\n=================================\n");
console.log("        END OF REVISION FILE     ");
console.log("=================================\n");




// NaN == Nan //false because NaN is only value not equal to itself