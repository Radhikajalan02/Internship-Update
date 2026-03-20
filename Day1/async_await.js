// async await is a cleaner way to handle promises
// will catch up on these asap inorder to keep the concepts handy currently im watching some videos on using dynamodb dated 20th march 2026

async function f1(){
    try{
        const response=await fetch("url")
        const data=await response.json()
        console.log(data)
    }
    catch(error){
        console.log(error)
    }
}