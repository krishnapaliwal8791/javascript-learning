// String in JavaScript
// In js we can represent string with (') single quote as well as (") double quote there is no such diffrence
const namef = "Krishna"
const surname = " Paliwal"
console.log(namef + surname + ",Welcome Sir");
// The above one is old value
// The newer version for same work is below
console.log(`Hello my name is ${namef} and my surname is${surname}`);// Its called string Interpolation
// The above one is mordern syntax


// There is one more method to declare the string 
const gameName = new String('LORD_K22')
// The above one created the object of string 



// ============================================================
// Intresting thing (Play with console)
// ============================================================
// If you write const gameName = new String('LORD_K22') in the console and then you write
// gameName 
// You will see the key value pairs i.e.
// 0: L
// 1: O and so on upto 7: 2 
// and also you can also see all the functions which can be applied on string(By clicking prototype)
// =======================================================================================




// Lets continue for 
// const gameName = new String('LORD_K22')
// we can accsess the character at indexes as
console.log(gameName[0]); //Output = L
console.log(gameName[11]);// Output = undefined
// If you want to see the object gameName you can see as 
console.log(gameName.__proto__); //an empty object is printed dont know what it is, why empty object printed

// Using diffrent functions of string 
// 1. length -> its the method not the function
console.log(gameName.length); //Output = 8
// 2. toUpperCase()
console.log(gameName.toUpperCase()); //Output = LORD_K22
// 3. toLowerCase()
console.log(gameName.toLowerCase()); //Output = lord_k22
// 4.  charAt()
console.log(gameName.charAt(2)); //Output = R
// 5. indexOf()
console.log(gameName.indexOf('R')); //Output = 2
// 6. substring()
const newString = gameName.substring(0,4)
console.log(newString); //Output = LORD //the charAt(4) i.e. _ will not be included in result
// 7. slice()
const anotherString = gameName.slice(0,4) //Output = LORD
const anotherString1 = gameName.slice(-7,4) //Output = ORD
console.log(anotherString);
console.log(anotherString1);
// slice() is same as substring() but we can also pass negative number as start number 
// If we gave start number as negative then it will start from reverse
// 8. trim()
// Removes the leading and trailing white space and line terminator characters from a string.
const newStringOne = "        Krishna       " // A String with unneccesary space characters
console.log(newStringOne);
console.log(newStringOne.trim()); //Removes unknown space characters at start and end
// 9. replace()
const url = "https://krishna.com/krishna%20paliwal"
console.log(url.replace('%20'," ")) //Output = https://krishna.com/krishna paliwal
// 10. includes()
console.log(url.includes('%20')); //Output = true
// 11. split()
const str = "krishna-paliwal-artificial-intelligence"
console.log(str.split('-')); //Output = [ 'krishna', 'paliwal', 'artificial', 'intelligence' ]
const arr = str.split('-')
console.table(arr)
console.log(str.split('-',3)); //Output = [ 'krishna', 'paliwal', 'artificial' ]






