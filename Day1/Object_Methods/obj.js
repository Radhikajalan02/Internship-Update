// using functions and nested objects in a object

const details={
    id:1,
    name:"Radhika",
    greet:function(){
        console.log("hello" + this.name)},  //using this keyword to specify data to be used from within this object
    address: {
        city:"Guwahati",
        state:"Assam"
    },
    
};
details.greet() //since we passed an anonymous function for greet thus while calling the function the key name greet is the function call name and we need to specify the object using a dot 
console.log(details.name)
const {address}=details //destructuring of nested data
console.log(address.city)
console.log(Object.keys(details)) // it will return an array of keys of the object
console.log(Object.values(details)) // it will return an array of values of the object
console.log(Object.entries(details)) // it will return an array of key value pairs of the object    



// split() helps to split a string into an array of substrings based on a specified separator

let str="hello,I'm Radhika,what is your name?,great to see you here"
console.log(str.split(",")) 

// splice() is used to add or remove elements from an array. It takes three parameters: the starting index, the number of elements to remove and the elements to add. It returns an array of removed elements.
 let arr=[1,2,3,4,5]
    console.log(arr.splice(2,1)) // it will remove the element at index 2 and return the removed element
