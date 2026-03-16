// normal copy always copies the reference of the original array and any changes made to the copied array will affect the original array as well
const arr1=[1,2,3,4,5]
const arr2=arr1
arr2.push(6)
console.log(arr1) // [1,2,3,4,5,6]
console.log(arr2) // [1,2,3,4,5,6]

// shallow copy is a way to copy  an array or object where nested objects still share the same memory reference and gets changed if modified in the copied array except the top level properties
/*ways:
1)using spread operator
2)using slice() method
3)using Object.assign({},objname) method
*/

const user={
    name:"radhika",
    address:{
        city:"guwahati",
        state:"assam"
    }
}
const copy1={...user}
copy1.name="radhika jalan"
copy1.address.city="mumbai"
console.log(copy1)
console.log(user)

const copy2=Object.assign({},user)
copy2.name="radhika jalan"
copy2.address.city="rajasthan"
console.log(copy2)
console.log(user)

// deep copy is a way to copy everything including nested object and the copied object becomes independent of the original object and any changes made to the copied object will not affect the original object
// ways: json.parse() and json.stringify() method

const deepcopy1 = JSON.parse(JSON.stringify(user));
deepcopy1.address.city="jaipur";
console.log(user.address.city);