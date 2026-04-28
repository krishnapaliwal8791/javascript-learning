const arr = ['js', 'rb', 'java', 'cpp', 'py']

arr.forEach( (item) => {
    console.log(item)
} )


console.log('----------')

arr.forEach(function name(item){
    console.log(item)
})

console.log('----------')

arr.forEach(function(item){
    console.log(item)
})

console.log('----------')

function print(i){
    console.log(i)
}
arr.forEach(print)


console.log('----------')

arr.forEach((item, index, array)=>{
    console.log(item, index, array)
})