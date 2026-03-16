// event loop helps to execute code in a non-blocking way. It allows the code to run asynchronously Aand handles callbacks,timers and promises

console.log("hello") //first
setTimeout(()=>{
    console.log("using timer to see event loop working")
},3000) //third
console.log("welcome to event loop") //second


/* There are four main parts:

Call Stack: stack where the code is executed and function calls are made

Web APIs: provided by the browser to handle asynchronous operations like timers,HTTP events and promises

Callback Queue(task queue):when asynchronous operations are completed the callbacks are added to this queue{normal priority and has less priority than microtask queue}

Event Loop: continuously checks the call stack and callback queue. If the call stack is empty it pushes the first callback from the queue to the stack for execution. This allows asynchronous code to run without blocking the main thread.
microtask queue eg- Promise.then(),Promise.catch(),Promise.finally(),queueMicrotask()
*/

console.log("start")
Promise.resolve().then(()=>{
    console.log("promise resolved")
})
console.log("end")