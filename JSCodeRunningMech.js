/**********************************************************************
 * 🔹 1. WHAT HAPPENS WHEN JS CODE RUNS
 **********************************************************************/

/*
When JS code is passed to runtime (browser / Node):

→ A GLOBAL EXECUTION CONTEXT (GEC) is created

It contains:
1. Global Object
   - Browser → window
   - Node → global (wrapped inside module)

2. this binding
   - Browser (non-strict) → window
   - Node → {} (module scope)

3. Memory space (Variable Environment)

4. Call Stack (manages execution contexts)
*/


/**********************************************************************
 * 🔹 2. TYPES OF EXECUTION CONTEXT
 **********************************************************************/

/*
1. Global Execution Context (GEC)
2. Function Execution Context (FEC)
3. Eval Execution Context (rare, ignore mostly)
*/


/**********************************************************************
 * 🔹 3. JS EXECUTION PHASES
 **********************************************************************/

/*
Every execution context runs in 2 phases:

1. Creation Phase (Memory Allocation Phase)
2. Execution Phase (Code Execution Phase)
*/


/**********************************************************************
 * 🔹 4. EXAMPLE CODE
 **********************************************************************/

let val1 = 10;
let val2 = 5;

function addNum(num1, num2) {
    let total = num1 + num2;
    return total;
}

let result1 = addNum(val1, val2);
let result2 = addNum(10, 2);


/**********************************************************************
 * 🔹 5. GLOBAL EXECUTION CONTEXT (GEC)
 **********************************************************************/

/*
========================
CREATION PHASE (GEC)
========================

val1    → undefined
val2    → undefined
addNum  → function definition stored in memory
result1 → undefined
result2 → undefined

(this is also set here)

------------------------

========================
EXECUTION PHASE (GEC)
========================
*/

val1 = 10;
val2 = 5;

/*
Next line:
result1 = addNum(val1, val2)

→ Function is INVOKED
→ New Function Execution Context (FEC) is created
→ Pushed into CALL STACK
*/


/**********************************************************************
 * 🔹 6. FUNCTION EXECUTION CONTEXT (FEC)
 **********************************************************************/

/*
For call: addNum(10, 5)

========================
CREATION PHASE (FEC)
========================

num1 → undefined
num2 → undefined
total → undefined

------------------------

========================
EXECUTION PHASE (FEC)
========================
*/

num1 = 10;
num2 = 5;

total = num1 + num2; // 15

return total;

/*
→ returns 15
→ FEC is removed from call stack
→ result1 = 15
*/


/**********************************************************************
 * 🔹 7. SECOND FUNCTION CALL
 **********************************************************************/

/*
result2 = addNum(10, 2)

Same process repeats:

FEC created →
num1 = 10
num2 = 2
total = 12
return 12

→ result2 = 12
*/


/**********************************************************************
 * 🔹 8. CALL STACK (VERY IMPORTANT)
 **********************************************************************/

/*
Call Stack follows LIFO (Last In First Out)

Step-by-step:

1. Push GEC
   Stack: [GEC]

2. Call addNum
   Stack: [GEC, addNum]

3. Return → pop addNum
   Stack: [GEC]

4. Call addNum again
   Stack: [GEC, addNum]

5. Return → pop addNum
   Stack: [GEC]

6. Program ends → stack empty
*/


/**********************************************************************
 * 🔹 9. IMPORTANT RULES
 **********************************************************************/

/*
1. Variables declared with var → initialized as undefined
2. let / const → hoisted but in Temporal Dead Zone (TDZ)

3. Functions:
   - Stored completely during creation phase
   - Can be called before declaration (function declaration only)

4. Each function call:
   → creates NEW execution context
   → has its OWN memory

5. After function returns:
   → its execution context is DESTROYED

6. JS is single-threaded:
   → one call stack
   → one thing executes at a time
*/


/**********************************************************************
 * 🔹 10. FINAL OUTPUT OF PROGRAM
 **********************************************************************/

console.log(result1); // 15
console.log(result2); // 12



/**********************************************************************
 * 🔹 10. CONCLUSION
 **********************************************************************/
/*
1. GEC created
2. Memory allocated (undefined / function stored)
3. Code executes line-by-line
4. Function call →
   → New execution context
   → Push to stack
   → Execute
   → Return
   → Pop from stack
5. Repeat
6. Program ends
*/