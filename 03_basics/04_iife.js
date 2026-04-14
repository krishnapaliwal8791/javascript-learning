// IIFE -> Immediately Invoked Function Expression
// Used to prevent global pollution 
// Its a function which immediately invokes after the defination
(function(){ 
    var a =  `IFFE Prevention`
    console.log(a);
})();

(() => {
    console.log(`IFFE Prevention (Arrow function)`);
    
})();

( (name) => {
    console.log(`Hello ${name}`);
    
} )("Krishna");

(function one(){ //It is known as name IIFE because it has the name (Used in recurssion)
    var a =  `Named IIFE called`
    console.log(a);
})();
// one() // ❌Only accesible to function only we cannot call in global 

(function two(i){
    if(i == -1){
        console.log(`function's last message`);
        return;
    }
    console.log(`i = ${i}`);
    i--
    two(i)
})(30);

// IIFE is also used for encapsulation 
const timer = (() => {
    let count = 0;
    return {
        increment: ()=>{
            count++;
        },
        decrement: ()=>{
            count--;
        },
        reset: ()=>{
            count = 0;
        },
        print: ()=>{
            console.log(count)
        }
    }
})();
console.log(timer.count); // ❌ can't able to accesess the count 
console.log(typeof timer);
timer.increment()
timer.print()
timer.increment()
timer.print()
timer.reset()
timer.print()