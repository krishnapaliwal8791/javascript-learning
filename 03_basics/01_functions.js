"use strict";

/*
========================================================
        JAVASCRIPT FUNCTIONS & PARAMETERS
========================================================
*/

/*
--------------------------------------------------------
1️⃣ DEFAULT PARAMETERS
--------------------------------------------------------
- Default value is used ONLY when argument is `undefined`
- If argument is null, "", 0 → default NOT applied
*/

function hello(username = "Krishna") {
    console.log(`Hello, ${username}`);
}

// Examples
hello();                    // Hello, Krishna
hello(undefined);           // Hello, Krishna
hello(null);                // Hello, null
hello("");                  // Hello, 
hello("Krishna Paliwal");   // Hello, Krishna Paliwal


/*
--------------------------------------------------------
2️⃣ PARAMETERS vs ARGUMENTS
--------------------------------------------------------
- Parameters → variables in function definition
- Arguments → actual values passed during function call
*/


/*
--------------------------------------------------------
3️⃣ ADDITION & TYPE COERCION (+)
--------------------------------------------------------
- If any operand is string → concatenation
- null → 0
- undefined → NaN
*/

function addTwoNumber(number1, number2) {
    return number1 + number2;
}

// Examples
console.log(addTwoNumber());          // NaN
console.log(addTwoNumber(3, "4"));    // "34"
console.log(addTwoNumber(3, "a"));    // "3a"
console.log(addTwoNumber(3, null));   // 3
console.log(addTwoNumber(3, 4));      // 7


/*
--------------------------------------------------------
4️⃣ REST OPERATOR (...)
--------------------------------------------------------
- Collects remaining arguments into an array
- Must be the LAST parameter
- Can only be ONE rest parameter
*/

function calculateCartPrice(firstItem, ...restItems) {
    return restItems;
}

// Example
console.log(calculateCartPrice(10, 20, 30, 40, 50));
// Output: [20, 30, 40, 50]


/*
--------------------------------------------------------
5️⃣ DEFAULT + REST (EDGE CASE)
--------------------------------------------------------
*/

function test(a = 1, ...rest) {
    console.log("a:", a);
    console.log("rest:", rest);
}

// Examples
test();                // a: 1, rest: []
test(undefined, 2, 3); // a: 1, rest: [2, 3]
test(5, 6, 7);         // a: 5, rest: [6, 7]


/*
--------------------------------------------------------
6️⃣ REST vs SPREAD OPERATOR (...)
--------------------------------------------------------
NOTE: Same syntax (...) but different roles
*/

/*
🔹 REST OPERATOR
- Used in function parameters
- Packs multiple values into an array
*/

function restExample(...nums) {
    return nums;
}

console.log(restExample(1, 2, 3)); // [1, 2, 3]


/*
🔹 SPREAD OPERATOR
- Used in function calls / arrays / objects
- Expands values
*/

// Array example
const arr = [10, 20, 30];
console.log(...arr); // 10 20 30

// Function call example
function sum(a, b, c) {
    return a + b + c;
}

console.log(sum(...arr)); // 60

// Array merge
const arr1 = [1, 2];
const arr2 = [3, 4];
const merged = [...arr1, ...arr2];
console.log(merged); // [1, 2, 3, 4]


/*
--------------------------------------------------------
7️⃣ KEY DIFFERENCE (CRITICAL)
--------------------------------------------------------

REST → "COLLECT"
SPREAD → "EXPAND"

| Feature       | Rest Operator            | Spread Operator        |
|---------------|--------------------------|------------------------|
| Usage         | Function parameters      | Arrays, objects, calls |
| Behavior      | Packs into array         | Expands elements       |
| Position      | Last parameter only      | Anywhere               |
| Purpose       | Handle variable args     | Copy / merge / pass    |

*/

/*
--------------------------------------------------------
8️⃣ FINAL TAKEAWAYS
--------------------------------------------------------
✔ Default works only for undefined
✔ null DOES NOT trigger default
✔ + operator → string dominates
✔ Rest collects remaining args into array
✔ Spread expands elements
✔ Rest must be last parameter
✔ Same syntax (...) but different behavior
*/