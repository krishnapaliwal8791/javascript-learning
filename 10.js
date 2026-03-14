"use strict";

/*
===========================================================
            JAVASCRIPT MEMORY MODEL (DEEP REVISION)
===========================================================

Conceptual Model:

1) STACK MEMORY
   - Stores primitive values directly
   - Stores references (addresses) for objects
   - Fast, fixed-size allocation

2) HEAP MEMORY
   - Stores actual objects, arrays, functions
   - Dynamic memory allocation

NOTE:
JavaScript hides actual memory implementation.
This is a conceptual model for understanding behavior.
===========================================================
*/


/* =========================================================
   1) PRIMITIVE → COPY BY VALUE
========================================================= */

let myYoutubeName = "learningtechkp";

/*
STACK:

myYoutubeName  →  "learningtechkp"
*/

let anotherName = myYoutubeName;

/*
STACK AFTER ASSIGNMENT:

myYoutubeName  →  "learningtechkp"
anotherName    →  "learningtechkp"   (COPY created)
*/

console.log("Before change:");
console.log(myYoutubeName);
console.log(anotherName);

anotherName = "learningKrishna";

/*
STACK AFTER MODIFICATION:

myYoutubeName  →  "learningtechkp"
anotherName    →  "learningKrishna"
*/

console.log("After change:");
console.log(myYoutubeName); // unchanged
console.log(anotherName);   // changed independently


/*
KEY RULE:
Primitive assignment = value copied.
No shared memory.
*/


/* =========================================================
   2) OBJECT → COPY BY REFERENCE
========================================================= */

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
};

/*
STACK:                      HEAP:

userOne → 0x001  ----------> {
                               email: "user@google.com",
                               upi: "user@ybl"
                             }
*/

let userTwo = userOne;

/*
STACK:                      HEAP:

userOne → 0x001  ----\
                       ---> {
userTwo → 0x001  ----/       email: "user@google.com",
                               upi: "user@ybl"
                             }

Reference copied.
Object NOT copied.
*/

console.log("\nBefore modification:");
console.log(userOne.email);
console.log(userTwo.email);

userTwo.email = "userTwo@gmail.com";

/*
HEAP UPDATED:

{
  email: "userTwo@gmail.com",
  upi: "user@ybl"
}

Both variables see same change
because both point to 0x001
*/

console.log("\nAfter modification:");
console.log(userOne.email); // changed
console.log(userTwo.email); // changed


/*
KEY RULE:
Object assignment = reference copied.
Both variables share same heap memory.
*/


/* =========================================================
   3) SHALLOW COPY (using spread operator)
========================================================= */
// ... is known as spread operator
let userThree = { ...userOne };

/*
STACK:                      HEAP:

userOne   → 0x001  ----\
                          ---> original object
userThree → 0x002  ----------> new copied object
*/

userThree.email = "userThree@gmail.com";

console.log("\nShallow Copy:");
console.log(userOne.email);   // unaffected
console.log(userThree.email); // independent

/*
IMPORTANT:
Shallow copy copies only first level.
Nested objects still share reference.
*/


/* =========================================================
   4) SHALLOW COPY PROBLEM (NESTED OBJECT)
========================================================= */

let personOne = {
    name: "Krishna",
    address: {
        city: "Jaipur"
    }
};

let personTwo = { ...personOne };

/*
personTwo.address still points to SAME nested object
*/

personTwo.address.city = "Delhi";

console.log("\nNested Object Problem:");
console.log(personOne.address.city); // Delhi (unexpected!)
console.log(personTwo.address.city); // Delhi

/*
Because spread operator copies only top level.
Nested objects remain shared.
*/


/* =========================================================
   5) DEEP COPY
========================================================= */

let personThree = structuredClone(personOne);

personThree.address.city = "Mumbai";

console.log("\nDeep Copy:");
console.log(personOne.address.city);  // Delhi (unchanged)
console.log(personThree.address.city); // Mumbai

/*
Deep copy creates completely independent memory.
No shared references.
*/


/*
===========================================================
                 FINAL ENGINEER SUMMARY
===========================================================

Primitive:
- Stored directly in stack
- Assignment = value copy
- Independent variables

Object:
- Stored in heap
- Variable holds reference
- Assignment = reference copy
- Shared memory behavior

Shallow Copy:
- New outer object
- Nested objects still shared

Deep Copy:
- Fully independent copy
- No shared memory at any level

===========================================================
*/