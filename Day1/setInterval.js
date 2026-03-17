// setInterval runs repeatedly after every delay and keeps running unless stopped
// use cases:1)timer 2)clock 3)auto-refresh
const id=setInterval((count)=>{return count+1 },1000) //this will keep running after each second until we take the id and pass it into clearInterval
clearInterval(id);

// eg
let count = 0;

const id1 = setInterval(() => {
  count++;
  console.log(count);

  if (count === 5) {
    clearInterval(id1);
  }
}, 1000); //we write clearInterval inside the same function