// using micro and macro task example
console.log("start")
Promise.resolve().then(()=>{
    console.log("microtask 1")
})
Promise.resolve().then(()=>{
    console.log("microtask 2")
})
setTimeout(()=>{
    console.log("macrotask")
},1000)
console.log("tata")
setTimeout(()=>{
    console.log("final wala tata")
},2000)