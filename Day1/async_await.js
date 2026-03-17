// async await is a cleaner way to handle promises

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