// setTimeout runs once after some delay 
// use cases:1)show popup after some time 2)API Delay 3)Debouncing
const num=setTimeout((num)=>{return num*2},1000)

// eg1
console.log("Start")
setTimeout(()=>{
    console.log("this will be printed after two seconds")
},2000)
console.log("end")

// we can use the setTimeout id to clear the timeout before it gets executed if required
const id = setTimeout(() => {
  console.log("Hello");
}, 3000);
clearTimeout(id) //since here we are calling the clearTimeout before 3 seconds thus the hello will not be executed this helps us to have a control over what needs to be executed and what need not be in some cases