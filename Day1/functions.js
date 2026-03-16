// normal functions
function  square(num){
    return num*num;
}
// function expression
const result=function(num){
    return num*num;
}
// arrow function
const result1=(num)=>{
    return num*num;
}
// we can write arrow function in a single line if it has only one statement and it will return the value automatically
// arrow function with implicit return
const result2=num=>num*num;

const add2=(num1,num2)=>num1+num2;

// examples of arrow functions
const add=(num1,num2)=>{
    return num1+num2;
}

// anonymous function
()=>{
    console.log("This is an anonymous function");
}


console.log(square(4))
console.log(result(5))
console.log(result1(6))
console.log(result2(7))
console.log(add2(1,2))
console.log(add(3,4)) 
