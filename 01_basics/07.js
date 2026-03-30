// ===============================
// 1. Basic Numeric Operations
// ===============================

let value = 3;
let negValue = -value;   // Unary minus operator
console.log(negValue);   // -3


// ===============================
// 2. Exponentiation
// ===============================

// a^b = a multiplied by itself b times
let a = 10;
let b = 2;

console.log(a ** b);     // 10^2 = 100


// ===============================
// 3. String Concatenation
// ===============================

let str1 = "Hello ";
let str2 = "Krishna";

console.log(str1 + str2);  // "Hello Krishna"


// ===============================
// 4. Type Coercion (Important)
// ===============================

console.log("1" + 2);       // "12"
console.log(1 + "2");       // "12"
console.log("1" + 2 + 2);   // "122"
console.log(1 + 2 + "2");   // "32"


/*
Why?

JS evaluates left → right.

"1" + 2
= "12"     (number converted to string)

"1" + 2 + 2
= "12" + 2
= "122"

1 + 2 + "2"
= 3 + "2"
= "32"
*/


// ===============================
// 5. Avoid Confusing Implicit Conversions
// ===============================

/*
❌ Avoid writing unreadable expressions:
console.log(1 + 2 * 2 % 4);

Instead:
*/

let result = 1 + ((2 * 2) % 4);
console.log(result);


// ===============================
// 6. Unary Plus (Avoid in Production Code)
// ===============================

console.log(+true);  // 1
console.log(+"");    // 0

/*
Explanation:

+true  → Number(true) → 1
+""    → Number("")   → 0

This works, but reduces readability.
Prefer explicit conversion:
*/

console.log(Number(true));
console.log(Number(""));