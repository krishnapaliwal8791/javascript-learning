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

// ===============================
// 7. Nullish Coalescing Operator ( ?? )
// ===============================
/*
===============================
NULLISH COALESCING OPERATOR (??)
===============================

DEFINITION:
-----------
The nullish coalescing operator (??) returns the right-hand value
ONLY when the left-hand value is null or undefined.

SYNTAX:
-------
let result = value ?? defaultValue;


-------------------------------
1. CORE MENTAL MODEL
-------------------------------
Is value null or undefined?
    YES → use defaultValue
    NO  → use value


-------------------------------
2. NULLISH VALUES
-------------------------------
Only these are considered "nullish":

null
undefined

NOT nullish:
false
0
""
NaN


-------------------------------
3. BASIC EXAMPLES
-------------------------------
console.log(null ?? "default");        // "default"
console.log(undefined ?? "default");   // "default"

console.log(0 ?? 100);                // 0
console.log("" ?? "hello");           // ""
console.log(false ?? true);           // false


-------------------------------
4. PROBLEM WITH OR (||)
-------------------------------
|| treats ALL falsy values as missing

let count = 0;
let result = count || 10;

console.log(result); // 10 ❌ (wrong for many cases)


-------------------------------
5. SOLUTION USING ??
-------------------------------
let count = 0;
let result = count ?? 10;

console.log(result); // 0 ✅


-------------------------------
6. COMPARISON (|| vs ??)
-------------------------------
0 || 5        // 5
0 ?? 5        // 0

"" || "hi"    // "hi"
"" ?? "hi"    // ""

null || "x"   // "x"
null ?? "x"   // "x"


-------------------------------
7. SHORT-CIRCUITING
-------------------------------
let a = "hello" ?? someFunction();
// someFunction NOT executed


-------------------------------
8. CHAINING
-------------------------------
let result = a ?? b ?? c ?? "default";

// returns first non-nullish value

let userInput = null;
let config = undefined;

let value = userInput ?? config ?? "fallback";

console.log(value); // "fallback"


-------------------------------
9. WITH OPTIONAL CHAINING (?.)
-------------------------------
let user = {
  profile: null
};

let city = user.profile?.city ?? "Unknown";

console.log(city); // "Unknown"


-------------------------------
10. OPERATOR PRECEDENCE
-------------------------------
Cannot mix ?? with || or && directly

// ❌ ERROR
null || undefined ?? "hello";

// ✅ FIX
(null || undefined) ?? "hello";


-------------------------------
11. NULLISH ASSIGNMENT (??=)
-------------------------------
let x = null;
x ??= 10;

console.log(x); // 10

let y = 5;
y ??= 20;

console.log(y); // 5


-------------------------------
12. REAL USE CASES
-------------------------------

// Default values
let timeout = user.timeout ?? 3000;

// API response handling
let name = response.name ?? "Guest";

// Config settings
let theme = settings.theme ?? "light";

// Safe UI rendering
let title = data?.title ?? "No Title";


-------------------------------
13. WHEN TO USE
-------------------------------

// Use ?? when:
- You only want to check null/undefined
- 0, false, "" are valid values

// Use || when:
- You want to check all falsy values


-------------------------------
14. FINAL INTUITION
-------------------------------
||  → truthy check
??  → existence check
*/