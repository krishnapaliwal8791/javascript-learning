// The global scope in runtime enviroment is diffrent and for browser console it is also diffrent

// var attches with global object



// -------------------------------------------------
// Clousre
one(1)
function one(a){
    two()
   
        function two(){
            console.log(`Hello from 2 ${a}`)
        }
    
    console.log(`hello from 1 ${a}`);
    two()
    
}
one("Krishna")
// -----------------------------------------------
// Types of function declaration
console.log(addOne(10));
 //✔️can accesses before declaration
// 1. Normal function declaration
function addOne(n){
    return n+1
} 
// 2. Function as a expression 
// k(10) //❌Cannot accesess before declaration
const k = function addTwo(n){
    return n+2
}
// 3. arrow functions
const m = ()=>{
    console.log(`Hello from m`);    
}
m()