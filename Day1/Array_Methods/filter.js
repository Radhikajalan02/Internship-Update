// filter returns all the elements of an array that satisfy a specified condition and returns a new array without making any change in the original array thus it searches through the whole array and incase no match is found it returns an empty array []
const products=[
    {id:1,name:"ball", price:100},
    {id:2,name:"bat",price:200},
    {id:3,name:"kit",price:1000},
    {id:4,name:"ball1", price:500},
    {id:5,name:"bat1",price:700},
    {id:6,name:"kit1",price:4000}
]
const category = products.filter((items)=>{return items.price>500})
console.log(category)

// eg
const months=["january","february","March","april","may"]
const Months=months.filter((item)=>{return item.toLowerCase().includes('m')})
console.log(Months)