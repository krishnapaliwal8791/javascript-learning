// If an Object is declared with const keyword
/*
const Obj = {}
Now, I cannot redefine the object 
Obj = {} ❌ We cannot write this
but we can add, modify or delete the property
Obj.id = 123434      // ✅ add property
Obj.name = "Krishna" // ✅ modify
delete Obj.id        // ✅ delete
*/

const tinderUser = new Object() // Creating an object using new keyword -> Singleton Object
tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

console.log(`tinderUser -> `,tinderUser);

const regularUser = {
    email: "sam@yahoo.com",
    identity: {
        userName: "Sammy123",
        fullName:{
            firstName: "Sam",
            lastName: "Parker"
        }
    }
}
console.log(`Hello ${regularUser.identity.fullName.firstName}`);



let obj1 = {1:"a", 2:"b"}
let obj2 = {3:"a", 4:"b"}

let obj3 = {obj1, obj2} //Same object in object problem 
console.log(obj3); // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// To merge the objects we have following method ->
// 1. Object.assign()
obj1 = {1:"a", 2:"b"}
obj2 = {3:"a", 4:"b"}
obj3 = {5:"a", 6:"b"}
let obj4 = Object.assign({}, obj1, obj2, obj3)
// This function takes 2 types of parameters ->
/*
1. target object -> All the arrays are merged into this object(inshort all edits are to be done in target object) -> 1st parameter passed is target object (In this case we passed {} empty object as target such that no changes are made to our pre-existing objects)
2. Source object -> All parameters except 1st one are source objects 
They are being copied to target objects
*/
console.log('obj4 -> ',obj4);


// 2. By using spread operator
obj4 = {...obj1, ...obj2, ...obj3}
console.log('obj4 -> ',obj4);


// Methods of Objects
// 1. Object.keys() -> Returns the array of keys of the objects
console.log('Object.keys(tinderUser) -> ',Object.keys(tinderUser))

// 2. Object.values() -> Returns the array of values of the objects
console.log('Object.values(tinderUser) -> ',Object.values(tinderUser))

// 3. Object.entries() -> Returns the array of array of the key and values of the object 
console.log('Object.entries(tinderUser) -> ',Object.entries(tinderUser))

// 4. hasOwnProperty() -> Determines whether an object has a property with the specified name.
console.log(`tinderUser.hasOwnProperty("name") -> `,tinderUser.hasOwnProperty("name"));
console.log('tinderUser.hasOwnProperty("game_name") -> ',tinderUser.hasOwnProperty("game_name"));


// ++++++++++++ Destructuring of Object +++++++++++++++++

const Mathematicscourse = {
    courseName: "Mathematics",
    price: 999,
    courseInstructor: "Krishna"
}
// When we have to accesses the value of courseInstructor we have to -
console.log(`Mathematicscourse.courseInstructor -> `,Mathematicscourse.courseInstructor);
// Now this syntax is too long and destroys the code redability
// Hence the need of destructuring the object arises 
const {courseInstructor} = Mathematicscourse
// Now we can use courseInstructor only to use this value
console.log(`courseInstructor(After Destructuring) ->`,courseInstructor);
// If we find difficult to write courseInstructor then we can also short that name by 
const{courseInstructor: instructor} = Mathematicscourse
// Now if we use instructor it will also point to same value
console.log(`instructor -> `, instructor);
console.log(`courseInstructor -> `, courseInstructor);
