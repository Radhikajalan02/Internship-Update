// spread operator helps to extract elements and values from objects and arrays to make them individual elements
const arr = [2, 3];

const newArr = [1, ...arr, 4];

console.log(newArr); //output will be [1,2,3,4]

const user = {
  name: "Radhika",
  age: 22
};

const updatedUser = {
  ...user,
  city: "Guwahati"
};

console.log(updatedUser);

// Spread can pass array elements as arguments.

function sum(a, b, c) {
  return a + b + c;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));