// reduce () reduces an array to a single value. It executes a provided function for each value of the array (from left-to-right). The return value of the function is stored in an accumulator (result/total). This method does not execute the function for empty arrays. If the array has only one element, then that element will be returned without calling the callback function.
const numbers=[1,2,3,4,5,6,7,8,9,10]
const total=numbers.reduce((sum,num)=>{return num+sum},0) // 0 is the initial value of sum, if we dont provide it then the first element of the array will be taken as the initial value of sum and the iteration will start from the second element of the array
console.log(total)

// eg

const products=[
    {id:1, name:"ball", price:100},
    {id:2, name:"bat", price:200},
    {id:3, name:"kit", price:1000}
];
const totalP=products.reduce((sum,prices)=>{return sum + prices.price},0)
console.log(totalP)