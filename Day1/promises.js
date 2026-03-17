// promises are used to handle asynchronous operations in javascript. It has three states; pending, fullfilled and rejected.
const myPromise=new Promise((resolve,reject)=>{ //here myPromise is an object that we have defined for the class Promise and resolve and reject are two functions that are passed as parameters
    const success=true
    if(success){
        resolve("Promise is resolved")
    }else{
        reject("Promise is rejected")
    }
});
// consume the promise using then and catch menthods. then is used to handle the resolved value of the promise and catch is used to handle the rejected value of the promise.
myPromise
.then((result)=>{
    console.log("I will do it")
    console.log(result) //here result actually gives the output of the resolve function only that is we can use any name inside the .then function but the output is going to be the one that promise gives for the resolve function
})
.catch(()=>{
    console.log("they lost")
})