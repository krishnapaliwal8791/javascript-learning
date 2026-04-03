"use strict";

/*
========================================================
        JAVASCRIPT TYPE CONVERSION — TEST MODE
========================================================

INSTRUCTION:
1. Read each question
2. Predict output (mentally or write it)
3. Then run the code
4. Compare with expected output

========================================================
*/

/*
--------------------------------------------------------
1️⃣ STRING → NUMBER
--------------------------------------------------------
*/

console.log("Q1:", Number("33"));        // ?
console.log("Q2:", Number("33abc"));     // ?
console.log("Q3:", Number(""));          // ?
console.log("Q4:", Number(" "));         // ?

// ANSWERS:
// Q1 → 33
// Q2 → NaN
// Q3 → 0
// Q4 → 0

console.log("\n---------------------------------\n");

/*
--------------------------------------------------------
2️⃣ NULL & UNDEFINED
--------------------------------------------------------
*/

console.log("Q5:", Number(null));        // ?
console.log("Q6:", Number(undefined));   // ?
console.log("Q7:", Boolean(null));       // ?
console.log("Q8:", Boolean(undefined));  // ?

// ANSWERS:
// Q5 → 0
// Q6 → NaN
// Q7 → false
// Q8 → false

console.log("\n---------------------------------\n");

/*
--------------------------------------------------------
3️⃣ BOOLEAN CONVERSION
--------------------------------------------------------
*/

console.log("Q9:", Number(true));        // ?
console.log("Q10:", Number(false));      // ?
console.log("Q11:", Boolean(0));         // ?
console.log("Q12:", Boolean(100));       // ?
console.log("Q13:", Boolean(NaN));       // ?

// ANSWERS:
// Q9 → 1
// Q10 → 0
// Q11 → false
// Q12 → true
// Q13 → false

console.log("\n---------------------------------\n");

/*
--------------------------------------------------------
4️⃣ STRING → BOOLEAN
--------------------------------------------------------
*/

console.log("Q14:", Boolean(""));        // ?
console.log("Q15:", Boolean("hello"));   // ?
console.log("Q16:", Boolean("false"));   // ?

// ANSWERS:
// Q14 → false
// Q15 → true
// Q16 → true

console.log("\n---------------------------------\n");

/*
--------------------------------------------------------
5️⃣ IMPLICIT COERCION
--------------------------------------------------------
*/

console.log("Q17:", "5" + 1);            // ?
console.log("Q18:", "5" - 1);            // ?
console.log("Q19:", "5" * 2);            // ?
console.log("Q20:", "5a" - 1);           // ?

// ANSWERS:
// Q17 → "51"
// Q18 → 4
// Q19 → 10
// Q20 → NaN

console.log("\n---------------------------------\n");

/*
--------------------------------------------------------
6️⃣ LEFT-TO-RIGHT (CRITICAL)
--------------------------------------------------------
*/

console.log("Q21:", "5" + 1 + 2);        // ?
console.log("Q22:", 1 + 2 + "5");        // ?
console.log("Q23:", "5" + (1 + 2));      // ?
console.log("Q24:", 1 + "2" + 3);        // ?

// ANSWERS:
// Q21 → "512"
// Q22 → "35"
// Q23 → "53"
// Q24 → "123"

console.log("\n---------------------------------\n");

/*
--------------------------------------------------------
7️⃣ EDGE CASES
--------------------------------------------------------
*/

console.log("Q25:", NaN == NaN);         // ?
console.log("Q26:", NaN === NaN);        // ?
console.log("Q27:", null == undefined);  // ?
console.log("Q28:", null === undefined); // ?
console.log("Q29:", Boolean([]));        // ?
console.log("Q30:", Boolean({}));        // ?
console.log("Q31:", typeof null);        // ?

// ANSWERS:
// Q25 → false
// Q26 → false
// Q27 → true
// Q28 → false
// Q29 → true
// Q30 → true
// Q31 → "object"

console.log("\n---------------------------------\n");

/*
--------------------------------------------------------
8️⃣ STRING / NULL / UNDEFINED → STRING
--------------------------------------------------------
*/

console.log("Q32:", String(undefined));  // ?
console.log("Q33:", String(null));       // ?
console.log("Q34:", String(true));       // ?

// ANSWERS:
// Q32 → "undefined"
// Q33 → "null"
// Q34 → "true"

console.log("\n---------------------------------\n");

/*
--------------------------------------------------------
9️⃣ FALSY VALUES CHECK
--------------------------------------------------------
*/

console.log("Q35:", Boolean(0));         // ?
console.log("Q36:", Boolean(-0));        // ?
console.log("Q37:", Boolean(""));        // ?
console.log("Q38:", Boolean(null));      // ?
console.log("Q39:", Boolean(undefined)); // ?
console.log("Q40:", Boolean(NaN));       // ?

// ANSWERS:
// All → false

console.log("\n=================================\n");
console.log("        END OF TEST FILE         ");
console.log("=================================\n");