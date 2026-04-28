const myObj = {
    js: "JavaScript",
    cpp: "C++",
    rb: "rubey",
    swift: "Swift by apple"
}
for(const key in myObj){
    console.log(`${key} => ${myObj[key]}`)
}

const arr = ['js', 'rb', 'py', 'cpp']
for(let val in arr){
    console.log(val, "-> ", arr[val])
} // ForIn loop will print the keys only
// It will fail in map 
