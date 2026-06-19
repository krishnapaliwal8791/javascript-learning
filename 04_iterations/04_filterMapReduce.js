const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const numsGreaterThan4 = arr.filter( (num) => (num > 4) )
console.log(numsGreaterThan4);


let newNums = arr.map( (num) => (num + 10) )
console.log(newNums);


newNums = arr.map( (num) => (num * 10) ).filter( (num) => (num > 50) ).map( (num) => (num / 10))
console.log(newNums);


console.log(`========================================================`);



const total = arr.reduce( (accumulatorOrPreviousValue, currentValue) => (accumulatorOrPreviousValue + currentValue), 0)
console.log(total);


const shoppingCart = [
    {
        itemName : `js-course`, 
        price : 2999
    },
    {
        itemName : `mobile dev`,
        price : 999
    }, 
    {
        itemName : `python`,
        price : 1000
    }
]

const totalOfShoppingCart = shoppingCart.reduce( (acc, item) => {
    return item.price + acc
}, 0)
console.log(`price to pay :`, totalOfShoppingCart);
