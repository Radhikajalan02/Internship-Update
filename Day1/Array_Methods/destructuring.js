// Destructuring in JavaScript is a feature that allows you to extract values from arrays or properties from objects and assign them to variables easily. It makes code shorter and cleaner.
// Advantages:1) Cleaner code 2)Less repetition 3) Easy variable extraction
// 4) Very common in React, APIs, and modern JavaScript

// Array destructuring lets you take values from an array and store them in variables based on position.

const arr=[1,3,5,7]
const[a,,c,d]=arr
console.log(a,c,d);

// object destructuring extracts values from objects using property names (keys)

const user={
    name:"rads",
    age:22,
    address:{
        city:ghy,
        state:Assam,
    },
}
const {name=name1,address:{city}}=user //we can rename variables while destructuring as well as destructure the nested objects
console.log(name1,city) //while destructuring nested objects we use the objectname:{key} but while printing it we use the key only in the console statement


//destructuring in function parameters
function displayUser({name, age}) { //here the destructured variable is passed as a parameter in the function
  console.log(name);
  console.log(age);
}

const user1 = {
  name: "Radhika",
  age: 21
};

displayUser(user1); //while calling the function we passed the object name as the parameter

// simple api call example
const response = {
  data: {
    id: 1,
    title: "Product",
    price: 500
  }
};

const {title, price} = response.data; //data is the nested object of response thus we used dot