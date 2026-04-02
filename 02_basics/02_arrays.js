let marvel_heroes = ["thor", "Iron-man", "hawkeye"]
let dc_heroes = ["batman", "superman", "Joker"]

marvel_heroes.push(dc_heroes)
console.log(marvel_heroes); //[ 'thor', 'Iron-man', 'hawkeye', [ 'batman', 'superman', 'Joker' ] ]

marvel_heroes = ["thor", "Iron-man", "hawkeye"]
dc_heroes = ["batman", "superman", "Joker"]
// Methods of Arrays

// 1. concat() -> it merges two arrays and returns a new array
let all_heroes = marvel_heroes.concat(dc_heroes)
console.log(all_heroes);

// 2. merging arrays using spread operator
let all_heroes1 = [...marvel_heroes, ...all_heroes]
console.log(all_heroes1);

// 3. flat()
let arr_ = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const arr_resolve1 = arr_.flat(1)
console.log(arr_resolve1);
const arr_resolve = arr_.flat(2)
console.log(arr_resolve);

const arr_resolved = arr_.flat(Infinity) //We have to pass depth to flat fuinction -> to which depth it will solve (if we want full flat array i.e. no array in array then we will pass infinity to it)
console.log(arr_resolved);

// 4. Array.isArray()
console.log(Array.isArray("Krishna"));
console.log(Array.isArray(arr_));

// 5. Array.from()
const ex_arr = Array.from("Krishna")
console.table(ex_arr);

/*
Interesting case
let obj = {name : "Krishna", age : 19, is_B_Tech : true, college : "MITS"}
const arr_obj = Array.from(obj)
console.log(arr_obj)

Array.from() can only converts iterable objects into array 
It can convert String, Map, Set to arrays
*/

// 6. Array.of() -> takes set of elements as a input and passes the new array
let score1 = 100
let score2 = 200
let score3 = 300
let arr2 = Array.of(score1, score2, score3)
console.log(arr2);
const of_arr = Array.of(arr2, score1, score2, score3)
console.log(of_arr);
