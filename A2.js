"use strict";

/*
========================
const
========================
Declares a block-scoped binding that CANNOT be reassigned.
Must be initialized at declaration.
For objects/arrays: contents can change, binding cannot.
*/

const k = 1;
console.log("const k =", k);

// k = 2; // ❌ TypeError: Assignment to constant variable

const obj = { x: 1 };
obj.x = 2;            // ✅ allowed (mutating contents)
console.log("obj.x =", obj.x);

// obj = {};          // ❌ TypeError (cannot reassign const binding)



/*
========================
let
========================
Declares a block-scoped variable.
Can be reassigned.
Cannot be redeclared in the same scope.
*/

let p = "Krishna";
let l = "Paliwal";

p = "Paliwal";        // ✅ reassignment allowed
console.log("let p =", p);

// let p = "Test";    // ❌ SyntaxError (redeclaration in same scope)

/*
IMPORTANT:
Using a variable WITHOUT declaration is an error in strict mode.
*/
// q = 10;            // ❌ ReferenceError in strict mode



/*
========================
var
========================
Function-scoped (NOT block-scoped).
Can be reassigned AND redeclared.
Hoisted with initial value = undefined.
*/

var a = "Hello";
console.log("var a =", a);

var a = "Hi";         // ✅ redeclaration allowed
console.log("var a redeclared =", a);



/*
========================
Block Scope Difference
========================
*/

if (true) {
  let b = 10;
  const c = 20;
  var d = 30;

  console.log("inside block:", b, c, d);
}

// console.log(b);     // ❌ ReferenceError (block scoped)
// console.log(c);     // ❌ ReferenceError (block scoped)
console.log("var leaks outside block d =", d); // ✅ 30



/*
========================
Function Scope with var
========================
*/

function testVarScope() {
  var y = 50;
  console.log("inside function y =", y);
}

testVarScope();
// console.log(y);     // ❌ ReferenceError (not global)



/*
========================
Hoisting Behavior
========================
*/

console.log("var hoisted =", hoistedVar); // ✅ undefined
var hoistedVar = 100;

// console.log(hoistedLet); // ❌ ReferenceError (Temporal Dead Zone)
// let hoistedLet = 200;



/*
========================
Global Scope Notes
========================
- var declared globally attaches to window (in browsers)
- let/const do NOT attach to window
*/

var globalVar = "I am var";
let globalLet = "I am let";
const globalConst = "I am const";

console.log("globalVar =", globalVar);
console.log("globalLet =", globalLet);
console.log("globalConst =", globalConst);