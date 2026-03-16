const now =new Date(); 
console.log(now)
console.log(now.toString())
console.log(now.toDateString())
console.log(now.toISOString())
console.log(now.toLocaleString())
console.log(now.toLocaleDateString())
console.log(typeof now) //object
let myDate=new Date(2022,11,25) // month starts from 0 to 11
console.log(myDate.toLocaleDateString())
console.log(myDate.toDateString())
let myDate2=new Date(2026,2,9,14,45)
console.log(myDate2.toLocaleString())

// timestamp
let timestamp=Date.now()
console.log(timestamp)
console.log(myDate.getTime()) // gives the timestamp of the date object
console.log(Math.floor(Date.now()/1000)) // gives the timestamp in seconds

let date1=new Date()
console.log(date1)
console.log(date1.getMonth())// gives the month number 0-11
console.log(date1.getDate()) // gives the date of the month
console.log(date1.getDay()) // gives the day of the week starting from 0-6 sun to sat