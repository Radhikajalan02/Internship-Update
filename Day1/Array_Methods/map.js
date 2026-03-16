// map transforms each element of an array and returns a new array without making any change in the original array
const months=["january","february","march","april","may"]
const Months=months.map((item)=>{return item.toUpperCase()})
console.log(Months)

// eg
const arr=[1,2,3,4,5]
const double=arr.map((num)=>{return num*2})
console.log(double)

// eg2
const studentsDetails=["radhika","tuhina","tanshi"]
const length=studentsDetails.map((item)=>{return item.length})
console.log(length)

// eg3
const products=[
    {id:1,name:"ball", price:100},
    {id:2,name:"bat",price:200},
    {id:3,name:"kit",price:1000}
]
const productName= products.map((item)=>{return item.name})
console.log(productName)
const cheapProducts=products.filter((item)=>{return item.price<500})
console.log(cheapProducts)