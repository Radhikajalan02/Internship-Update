// find() helps to find the element that satisfy a given condition. It returns one element only. It stops searching after the first match and if nothing is found it returns undefined
const arr=[
    {id:1, name:"ball", price:100},
    {id:2, name:"bat", price:200},
    {id:3, name:"kit", price:1000}
];
const arr2= arr.find((item)=>{return item.price == 200})
console.log(arr2)

// some() helps to check if atleast one element in the array satisfies the given condition. It returns true or false.
const arr3=[
{ id:1, name:"ball", price:100},
{ id:2, name:"bat", price:200},
{ id:3, name:"kit", price:1000}
];
const arr4= arr3.some((item)=>{return item.name.includes("b")}) // include() checks if the given string is present in the array and returs true or false
console.log(arr4)

// every() checks if all the elements satisfy the given condition and returns true or false
const arr5=[2,4,6,8,10]
const arr6=arr5.every((num)=>num%2==0)
console.log(arr6)

// slice() returns a shallow copy(changes in the copied array affects the original array with the refernced elements) of a portion of an array as a new array and indexes work like [a,b)
const arr7=[1,2,3,4,5,6,7,8,9,10]
const arr8=arr7.slice(2,6)
console.log(arr8) //[3,4,5]

// splice() removes a portion from the array and returns the modified array and takes three parameters: the starting index, the number of elements to remove and the elements to add. It returns an array of removed elements.
const arr9=[1,2,3,4,5,6,7,8,9,10]
const arr10=arr9.splice(2,3)
console.log(arr9) // [1,2,6,7,8,9,10]