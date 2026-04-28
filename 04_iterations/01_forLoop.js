let Arr = new Array(0,1,2,3,4,5,6,7,8,9,10)
let arrTOstr = ``
for(let i = 0; i<Arr.length; i++){
    arrTOstr += `${Arr[i]}`
    if(i == Arr.length - 1) break;
    arrTOstr += `,`
}
for (let i = 0; i < Arr.length; i++) {
    const element = Arr[i];
    console.log(element)
}
console.log(arrTOstr)


// -------------------------------------------------------
// for of loop -> works for iterative objects like strings, arrays, map
console.log(`for of loop`);

for(const val of Arr){
    console.log(val)
}

const str = "Krishna"
for(const val of str){
    console.log(val)
}
// +++++++++++ Maps +++++++++++++++++
const map = new Map()
// Map is array with key and values | Key and values can be anything i.e. no boundation that key should be string | in map it maintains order and have unique values 
map.set("name", "Krishna")
map.set("surname", "Paliwal")
map.set("age", 20)
console.log(map)

for(let val of map){
    console.log(val)
}
for(let [key, val] of map){ // Destructured array
    console.log(`${key} => ${val}`);
}
// cannot be applied on objects (non-iterable) -> map is also non iterable