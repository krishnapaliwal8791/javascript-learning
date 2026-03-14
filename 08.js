// @ts-nocheck //This line added to tell vs code intellisense to not to check the code and show the error
// ======================================================
// JAVASCRIPT TYPE COERCION & COMPARISON REVISION
// ======================================================

"use strict";

// ------------------------------------------------------
// 1) BASIC RELATIONAL COMPARISON (> < >= <=)
// ------------------------------------------------------

console.log(2 > 1);        // true

// String gets converted to Number
console.log("2" > 1);      // true  ("2" → 2)
console.log("02" > 1);     // true  ("02" → 2)

// Invalid numeric string → NaN
console.log("02auae" > 1); // false (NaN > 1 is false)

// Important rule:
console.log(NaN > 1);      // false
console.log(NaN < 1);      // false
console.log(NaN == 1);     // false



// ------------------------------------------------------
// 2) NULL BEHAVIOR
// ------------------------------------------------------

// Equality (==)
console.log(null == 0);        // false
console.log(null == undefined); // true
/*
There is one thing specially written in ECMA Script
for loose equality 
for null == undefined ==> true
for null == anything else ==> false */

// Relational comparison converts null → 0
console.log(null > 0);   // false (0 > 0)
console.log(null >= 0);  // true  (0 >= 0)
console.log(null < 0);   // false (0 < 0)



// ------------------------------------------------------
// 3) UNDEFINED BEHAVIOR
// ------------------------------------------------------

// undefined converts to NaN in numeric comparison
console.log(undefined > 0);   // false
console.log(undefined < 0);   // false
console.log(undefined >= 0);  // false

// Equality
console.log(undefined == 0);      // false
console.log(undefined == null);   // true

// Numeric conversion proof
console.log(Number(undefined)); // NaN
console.log(Number(null));      // 0



// ------------------------------------------------------
// 4) STRICT (===) vs LOOSE (==) EQUALITY
// ------------------------------------------------------

// Strict → No type conversion
console.log("2" === 2);  // false

// Loose → Type conversion happens
console.log("2" == 2);   // true

// More examples
console.log("" == 0);    // true
console.log("" === 0);   // false

console.log(false == 0);  // true
console.log(false === 0); // false



// ------------------------------------------------------
// 5) DANGEROUS EDGE CASES
// ------------------------------------------------------
console.log("====================================");

console.log([] == false);    // true
/*
full coercion chain of above expression
[] == false
↓
[] == 0
↓
"" == 0
↓
0 == 0
↓
true 
*/
console.log([] == 0);        // true
console.log([1] == 1);       // true

console.log([] === false);   // false
console.log([] === 0);       // false



// ------------------------------------------------------
// 6) SAFE PRACTICE RULES
// ------------------------------------------------------

/*
✔ Always prefer === over ==
✔ Avoid comparing different data types
✔ Convert explicitly before comparing
✔ Be careful with null and undefined
*/

let value = "5";

// Explicit conversion
let num = Number(value);

console.log(num === 5); // true



// ======================================================
// END OF REVISION FILE
// ======================================================