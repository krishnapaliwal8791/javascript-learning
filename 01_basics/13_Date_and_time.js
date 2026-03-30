// JavaScript stores time in milliseconds from Jan 1, 1970 (UTC)->(Coordinated Universal Time)
// The date Jan 1, 1970 is called epoch 
// JavaScript doesnt store time like 10:30Am or else it stores the distance from epoch 

// Date.now()
console.log(Date.now());
// console.log(Date.now()); -> might return value like 1774873083564 this means that 1774873083564 milliseconds passed from Jan 1, 1970 00:00
// 1774873083564 -> This number is same everywhere in the world 
console.log(new Date());
// console.log(new Date()); -> will return value like 2026-03-30T12:20:52.092Z thats the current date and time according to UTC
/*
// so when we run console.log(new Date()); JS internally does -
1. Get timestamp of current time from epoch i.e. 1774873252092
2. Convert it into Human redable form and displays it
*/

const d = new Date(); // Note the object d is created and the current date is stored in it
console.log(d.getTime()); // Output -> 1774873802217
console.log(d.toString()); // Output -> Mon Mar 30 2026 18:00:02 GMT+0530 (India Standard Time)

/*
Note -
Date.now() → current timestamp
new Date(timestamp) → convert number → date
date.getTime() → convert date → number
*/

/*
getX() → local time (IST)
getUTCX() → global time (UTC)
*/

// Methods Related to date and time in js
// 1. Date.now() 
let d1
d1 = Date.now();
console.log("d1 = ",d1);

//  2. getTime()
d1 = new Date("2026-10-20")
console.log(`d1 = new Date("2026-10-20")\nd1.getTime() -> `,d1.getTime()) //Output -> 1792454400000

//  3. toString()
console.log(`d1.toString() -> ${d1.toString()}`)
// Output -> Tue Oct 20 2026 05:30:00 GMT+0530 (India Standard Time)

// 4. getFullYear()
console.log(`d1.getFullYear() -> ${d1.getFullYear()}`);
// Output -> 2026

// 5. getMonth()
console.log(`d1.getMonth() -> ${d1.getMonth()}`);
// Output -> 9
/*
0 → January
1 → February
2 → March
.
.
.
11 → December
*/

// 6. getDate()
console.log(`d1.getDate() -> ${d1.getDate()}`);
// Output -> 20

// 7. getDay()
console.log(`d1.getDay() -> ${d1.getDay()}`);
// Output -> 2
/*
0 → Sunday
1 → Monday
...
6 → Saturday
*/

// 8. getHours() -> This uses local time (IST)
console.log(`d1.getHours() -> ${d1.getHours()}`);
// Output -> 5 (It gives answer into IST)
/*Same getMinutes and getSeconds are also there */

// 9. toISOString
console.log(`d1.toISOString() -> ${d1.toISOString()}`);
// Output -> 2026-10-20T00:00:00.000Z

// 10. toLocaleString()
// console.log(new Date().toLocaleString());
console.log(`d1.toLocaleString -> ${d1.toLocaleString()}`);
// Output -> 20/10/2026, 5:30:00 am
// We can Control its formatting and method of representation 
console.log(`new Date().toLocaleString('en-IN', {day : "2-digit", month : "long", year: "numeric"}) -> `,new Date().toLocaleString('en-IN', {day : "2-digit", month : "long", year: "numeric"})); // Output -> 30 March 2026

// 11. toJSON()
console.log(`d1.toJSON() -> ${d1.toJSON()}`);
// Output -> 2026-10-20T00:00:00.000Z





// ++++++++++++++++++++Creating Dates (Constructors) ++++++++++++++++
// Type 0 - Default Constructor 
const d0 = new Date() // Current Date and Time of moment

// Type 1 - ISO String (UTC Based)
const d2 = new Date("2026-03-30") //YYYY-MM-DD
    // Js Interprets this as 2026-03-30T00:00:00Z

// Type 2 - Numeric Constructor (Local Time) // Always prefer to use this
const d3 = new Date(2026, 2, 30) //YYYY-MM-DD (But MM is one less i.e. if month is march(03) then the value to be put there is 2)
    // JS interprets this as 2026-03-30 00:00 (LOCAL TIME = IST)

// Type 3 - Explicit UTC
const d4 = new Date("2026-03-30T00:00:00Z")

// Type 4 - By Passing the timestamp 
const d5 = new Date(Date.now())
// Note this method is very usefull when you have timestamp of the day 
// Can be useful in quizes 

// Type 5 - Making Clone of current date 
const d6 = new Date(d5)
// Another method to do the same work is - const d6 = structuredClone(d5)
// The 2 above methods will create the new object and copies the value of d5
// Note -> if we did -> const d6 = d5 then both d5 and d6 points to same objects 

/*
| Input Type               | Meaning        |
| ------------------------ | -------------- |
| `"YYYY-MM-DD"`           | UTC            |
| `"YYYY-MM-DDTHH:mm:ssZ"` | UTC (explicit) |
| `(year, month, day)`     | Local time     |

*/


