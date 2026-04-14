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
Special cases
*/

console.log("Number('') ->", Number(""));   // 0
console.log("Number(' ') ->", Number(" ")); // 0
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

let p;

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
console.log("NaN →", Boolean(num5)); // false
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
7️⃣ IMPLICIT COERCION
--------------------------------------------------------
*/

console.log('"5" + 1  =', "5" + 1);  // "51"
console.log('"5" - 1  =', "5" - 1);  // 4
console.log('"5a" - 1  =', "5a" - 1);  // NaN
console.log('"5" * 2  =', "5" * 2);  // 10
console.log('"5" / 2  =', "5" / 2);  // 2.5
console.log("\n---------------------------------\n");

/*
--------------------------------------------------------
8️⃣ IMPORTANT EDGE CASES
--------------------------------------------------------
*/

console.log("NaN == NaN ->", NaN == NaN); // false
console.log("NaN === NaN →", NaN === NaN);  // false

console.log("null == undefined →", null == undefined);   // true
console.log("null === undefined →", null === undefined); // false

console.log("Boolean([]) →", Boolean([]));   // true
console.log("Boolean({}) →", Boolean({}));   // true

console.log("typeof null →", typeof null); // "object" (historical bug)
console.log("\n---------------------------------\n");

/*
--------------------------------------------------------
9️⃣ LEFT-TO-RIGHT COERCION (VERY IMPORTANT)
--------------------------------------------------------
*/

console.log('"5" + 1 + 2  =', "5" + 1 + 2); // "512"
console.log('1 + 2 + "5"  =', 1 + 2 + "5"); // "35"

console.log('"5" + (1 + 2) =', "5" + (1 + 2)); // "53"
console.log('1 + "2" + 3 =', 1 + "2" + 3); // "123"
console.log("\n---------------------------------\n");

/*
Explanation:

"5" + 1 + 2
→ "5" + 1 = "51"
→ "51" + 2 = "512"

1 + 2 + "5"
→ 1 + 2 = 3
→ 3 + "5" = "35"

Key Rule:
→ JavaScript evaluates LEFT to RIGHT
→ If either operand is string, + becomes concatenation
→ Otherwise, numeric addition
*/

/*
--------------------------------------------------------
🔟 NaN FACT
--------------------------------------------------------
*/

// NaN is the only value that is not equal to itself

/*
--------------------------------------------------------
1️⃣1️⃣ UNDEFINED CONVERSIONS
--------------------------------------------------------
*/

let A;

console.log("Value before:", A, typeof A);
let boolA = Boolean(A);
console.log("After Boolean:", boolA, typeof boolA);

let strA = String(A);
console.log("After String:", strA, typeof strA);
console.log(strA + " Hello");

console.log("\n---------------------------------\n");

/*
--------------------------------------------------------
1️⃣2️⃣ NULL CONVERSIONS
--------------------------------------------------------
*/

let B = null;

console.log("Value before:", B, typeof B); // object (JS bug)

let boolB = Boolean(B);
console.log("After Boolean:", boolB, typeof boolB);

let strB = String(B);
console.log("After String:", strB, typeof strB);
console.log(strB + " Hello");

console.log("\n---------------------------------\n");

/*
--------------------------------------------------------
1️⃣3️⃣ BOOLEAN → STRING
--------------------------------------------------------
*/

let E = false;
let F = true;

let EConverted = String(E);
let FConverted = String(F);

console.log("false →", EConverted, typeof EConverted);
console.log("true →", FConverted, typeof FConverted);

console.log("\n---------------------------------\n");

/*
--------------------------------------------------------
1️⃣4️⃣ FALSY VALUES & TRUTHY VALUES
--------------------------------------------------------
*/

// Only 7 falsy values in JavaScript:
console.log("Falsy values: false, 0, -0, 0n, '', null, undefined, NaN");
console.log("Truthy values: [], {}, '0', 'false', ' ', function(){}");

console.log("\n=================================\n");
console.log("        FINAL SUMMARY            ");
console.log("=================================\n");

/*
--------------------------------------------------------
1️⃣5️⃣ FINAL SUMMARY
--------------------------------------------------------
*/

console.log("Undefined → Number =", Number(undefined)); // NaN
console.log("Undefined → String =", String(undefined)); // "undefined"
console.log("Undefined → Boolean =", Boolean(undefined)); // false

console.log("null → Number =", Number(null)); // 0
console.log("null → String =", String(null)); // "null"
console.log("null → Boolean =", Boolean(null)); // false

console.log("0 / NaN → Boolean =", Boolean(0), Boolean(NaN)); // false false
console.log("Other numbers → Boolean =", Boolean(1), Boolean(100)); // true true

console.log('"55" →', Number("55"));
console.log('"55ae" →', Number("55ae"));
console.log('"" →', Boolean(""));
console.log('"false" →', Boolean("false"));

console.log("true → Number =", Number(true));
console.log("false → Number =", Number(false));

console.log("true → String =", String(true));
console.log("false → String =", String(false));

console.log("\n=================================\n");
console.log("        END OF REVISION FILE     ");
console.log("=================================\n");