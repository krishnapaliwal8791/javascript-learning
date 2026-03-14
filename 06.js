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

console.log("Original value:", score); // Output = 33
console.log("Type before conversion:", typeof score); // Output = string

let valueInNumber = Number(score); 

console.log("After conversion:", valueInNumber); // Output = 33
console.log("Type after conversion:", typeof valueInNumber); // Output = number
console.log("\n---------------------------------\n");

/*
Invalid numeric string
*/

let score2 = "33auie";

console.log("Original value:", score2); // Output = 33auie
console.log("Type before conversion:", typeof score2); // Output = string

let valueInNumber2 = Number(score2);

console.log("After conversion:", valueInNumber2);  // NaN
console.log("Type after conversion:", typeof valueInNumber2); // number
console.log("typeof NaN:", typeof NaN); //Output = number
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
console.log("NaN →", Boolean(num5)); //Output = false
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
console.log('"5a" - 1  =', "5a" - 1);  // NaN
console.log('"5" * 2  =', "5" * 2);  // 10
console.log('"5" / 2  =', "5" / 2);  // 2.5

console.log("\n---------------------------------\n");


/*
--------------------------------------------------------
8️⃣ IMPORTANT EDGE CASES
--------------------------------------------------------
*/

console.log("NaN == NaN ->",NaN == NaN); //false
console.log("NaN === NaN →", NaN === NaN);  // false
console.log("null == undefined →", null == undefined);   // true
console.log("null === undefined →", null === undefined); // false
console.log("Boolean([]) →", Boolean([]));   // true
console.log("Boolean({}) →", Boolean({}));   // true

console.log("\n=================================\n");
console.log("        END OF REVISION FILE     ");
console.log("=================================\n");




// NaN == Nan //false because NaN is only value that is not equal to itself



// ==========================================
// undefined -> boolean
// ==========================================
let A; //undefined
console.log("Value of A before conversion: ",A,"\ntypeof A before conversion: ",typeof A);
let bool = Boolean(A);
console.log("Value of A after conversion: ",bool,"\ntypeof A after conversion: ",typeof bool);
/*
Output :
Value of A before conversion:  undefined
typeof A before conversion:  undefined
Value of A after conversion:  false
typeof A after conversion:  boolean
*/
console.log("===============================================================================");


// ==========================================
// null -> boolean
// ==========================================
let B = null; 
console.log("Value of B before conversion: ",B,"\ntypeof B before conversion: ",typeof B);
let boolB = Boolean(B);
console.log("Value of B after conversion: ",boolB,"\ntypeof B after conversion: ",typeof boolB);
/*
Output :
Value of B before conversion:  null
typeof B before conversion:  object
Value of B after conversion:  false
typeof B after conversion:  boolean
*/
console.log("===============================================================================");
// ==========================================
// undefined -> string
// ==========================================
let C;
console.log("Value of C before conversion: ",C,"\ntypeof C before conversion: ",typeof C);
let CConverted = String(C);
console.log("Value of C after conversion: ",CConverted,"\ntypeof C after conversion: ",typeof CConverted);
// To prove in CConverted the value is Undefined
console.log(CConverted+" Hello ");
/*
Output:
Value of C before conversion:  undefined
typeof C before conversion:  undefined
Value of C after conversion:  undefined
typeof C after conversion:  string
undefined Hello
*/
console.log("===============================================================================");
// ==========================================
// null -> string
// ==========================================
let D = null;
console.log("Value of D before conversion: ",D,"\ntypeof D before conversion: ",typeof D);
let DConverted = String(D);
console.log("Value of D after conversion: ",DConverted,"\ntypeof D after conversion: ",typeof DConverted);
// To prove in DConverted the value is null
console.log(DConverted+" Hello ");
/*
Output:
Value of D before conversion:  null
typeof D before conversion:  object
Value of D after conversion:  null
typeof D after conversion:  string
null Hello
*/
console.log("===============================================================================");
// ==========================================
// boolean -> string
// ==========================================
let E = false;
let F = true;
console.log("Value of E before conversion: ",E,"\ntypeof E before conversion: ",typeof E);
let EConverted = String(E);
console.log("Value of E after conversion: ",EConverted,"\ntypeof E after conversion: ",typeof EConverted);
console.log("------------------");
console.log("Value of F before conversion: ",F,"\ntypeof F before conversion: ",typeof F);
let FConverted = String(F);
console.log("Value of F after conversion: ",FConverted,"\ntypeof F after conversion: ",typeof FConverted);
/*
Output:
Value of E before conversion:  false
typeof E before conversion:  boolean
Value of E after conversion:  false
typeof E after conversion:  string
------------------
Value of F before conversion:  true
typeof F before conversion:  boolean
Value of F after conversion:  true
typeof F after conversion:  string
*/
console.log("===============================================================================");
console.log("===============================================================================");
console.log("\n\nConclusion\n\n")
console.log("===============================================================================");
console.log("===============================================================================");
console.log("\nUndefined -> Number ==> then it will become NaN");
console.log("\nUndefined -> string ==> then it will be a string 'undefined' ");
console.log("\nUndefined -> boolean ==> then it will become false");
console.log("===============================================================================");
console.log("\nnull -> Number ==> then it will become 0");
console.log("\nnull -> String ==> then it will be a string 'null' ");
console.log("\nnull -> boolean ==> then it will become false");
console.log("===============================================================================");
console.log("Number to String conversion is predictable");
console.log("===============================================================================");
console.log("\nAny number(1,32,3-2,10000) [except 0] -> boolean ==> true");
console.log("\n0 -> boolean ==> false");
console.log("===============================================================================");
console.log("\n '55'/'-20'/'20' -> Number ==> normal conversion where the number will be converted ");
console.log("\n '55ae' [String number mixture] -> Number ==> NaN ");
console.log("\n 'krishna'[Pure String] -> Number ==> NaN ");
console.log("===============================================================================");
console.log("\n ''[Empty String] -> Boolean ==> false ");
console.log("\n 'false'[Non-Empty String] ==> true ");
console.log("===============================================================================");
console.log("\n false -> Number ==> 0");
console.log("\n true -> Number ==> 1");
console.log("===============================================================================");
console.log("\n false -> String ==> 'false'");
console.log("\n true -> String ==> 'true'");
/*
Output
===============================================================================
===============================================================================


Conclusion


===============================================================================
===============================================================================

Undefined -> Number ==> then it will become NaN

Undefined -> string ==> then it will be a string 'undefined'

Undefined -> boolean ==> then it will become false
===============================================================================

null -> Number ==> then it will become 0

null -> String ==> then it will be a string 'null'

null -> boolean ==> then it will become false
===============================================================================
Number to String conversion is predictable
===============================================================================

Any number(1,32,3-2,10000) [except 0] -> boolean ==> true

0 -> boolean ==> false
===============================================================================

 '55'/'-20'/'20' -> Number ==> normal conversion where the number will be converted

 '55ae' [String number mixture] -> Number ==> NaN

 'krishna'[Pure String] -> Number ==> NaN
===============================================================================

 ''[Empty String] -> Boolean ==> false

 'false'[Non-Empty String] ==> true
===============================================================================

 false -> Number ==> 0

 true -> Number ==> 1
===============================================================================

 false -> String ==> 'false'

 true -> String ==> 'true'
*/

console.log("=====================================");
console.log("Only 7 values are falsy in js \n  0 ,-0, 0n, '', null, undefined, NaN")



// Refer to -> https://chatgpt.com/share/69b4f7ed-f994-8006-adfb-c7be1e307bbc