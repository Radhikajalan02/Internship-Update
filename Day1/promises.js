// promises are used to handle asynchronous operations in javascript. It has three states; pending, fullfilled and rejected.
const myPromise=new Promise((resolve,reject)=>{
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
    console.log(result)
})
.catch(()=>{
    console.log("they lost")
})