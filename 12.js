const score = 100
console.log(score); //Output : 100

// Here in the above line js detected that score has datatype number. We can also define that the variable specifically have number by creating the object 
const gameScore = new Number(100)
console.log(gameScore); //Output : [Number: 100]
// =================================
// Play with console
// =================================
/*
If you write const gameScore = new Number(100) then you write
gameScore
then by clicking the prototype you can view all built in functions which can be applied to it  
*/

// Using diffrent functions of Numbers

const gameId = 123.8966

// 1. toString()
console.log(`gameScore.toString() -> ${gameScore.toString()}`);
console.log(`typeof gameScore.toString() -> ${typeof gameScore.toString()}`);
console.log(`gameScore.toString().length -> ${gameScore.toString().length}`);

// 2. toFixed() ->Returns string as output

console.log(`gameId.toFixed(2) -> ${gameId.toFixed(2)}`);
console.log(`gameId.toFixed(1) -> ${gameId.toFixed(1)}`);
console.log(`gameId.toFixed(0) -> ${gameId.toFixed(0)}`);
console.log(`gameId.toFixed(3) -> ${gameId.toFixed(3)}`);

// 3. toPrecision ->Returns string as output
console.log(`gameId.toPrecision(5) -> ${gameId.toPrecision(5)}`)
console.log(`gameId.toPrecision(4) -> ${gameId.toPrecision(4)}`)
console.log(`gameId.toPrecision(3) -> ${gameId.toPrecision(3)}`)
console.log(`gameId.toPrecision(2) -> ${gameId.toPrecision(2)}`)

// 4. toLocaleString() ->Returns string as output
const anotherNum = 100000000
console.log(`anotherNum.toLocaleString('en-US') -> ${anotherNum.toLocaleString('en-US')}`);
console.log(`anotherNum.toLocaleString('en-IN') -> ${anotherNum.toLocaleString('en-IN')}`);
console.log(`anotherNum.toLocaleString() -> ${anotherNum.toLocaleString()}`);



// +++++++++++++++++++++++++++++++++++++++++++++
console.log(`Number.EPSILON -> ${Number.EPSILON}`);
console.log(`Number.MAX_VALUE -> ${Number.MAX_VALUE}`);
console.log(`Number.MIN_SAFE_INTEGER -> ${Number.MIN_SAFE_INTEGER}`);
console.log(`Number.isNaN(Number("Krishna")) -> ${Number.isNaN(Number("Krishna"))}`);



console.log("+++++++++++++++++ Mathematics +++++++++++++++++++++");

console.log(Math);
// Math is an object just like Number, String, Boolean, Array
// ===========================================
// Play with console 
// ===========================================
/*
Open console and type console.log(Math);
and then you can see all functions which are come under math object 
*/


console.log(`Math.PI -> ${Math.PI}`);

// Math functions

// 1. abs() [absolute value]
console.log(`Math.abs(-10) -> ${Math.abs(-10)}`);
console.log(`Math.abs(10) -> ${Math.abs(10)}`);

// 2. round()
console.log(`Math.round(4.33) ->${Math.round(4.33)}`);

// 3. ceil()
console.log(`Math.ceil(4.2) -> ${Math.ceil(4.2)}`);

// 4. floor()
console.log(`Math.floor(4.9) -> ${Math.floor(4.9)}`);

// 5. sqrt()
console.log(`Math.sqrt(4) -> ${Math.sqrt(4)}`);

// 6. pow()
console.log(`Math.pow(2,3) -> ${Math.pow(2,3)}`);

// 7. min()
console.log(`Math.min(2,3,4,56,6,7) -> ${Math.min(2,3,4,56,6,7)}`);

// 8. max()
console.log(`Math.max(2,3,4,56,6,7) -> ${Math.max(2,3,4,56,6,7)}`);


// 9. random()
// Returns a pseudorandom number between 0 and 1.
console.log(`Math.random() -> ${Math.random()}`);

console.log("+++++++++++++++++\n\n");
// If we want to genrate the numbers between 40 to 90 then i will genrate numbers from 0 to max-min (i.e. 90-40 = 50)   or simply from 0 to 50 then i will add 40 in it 

// Algo to create the formula 
// Math.random()*50 -> gives number between 0 to 50 

console.log("Genrating number between 40 to 90...")
console.log(Math.floor(Math.random()*(90-40))+40);
console.log(Math.floor(Math.random()*(90-40)+1)+40); //Here 1 added to not to get the 40 as the output so the result will always between 40 to 90 and it always cant be 40
// If you dont want 90 as output in above one then only genrate number till 49 then add 40 to it
