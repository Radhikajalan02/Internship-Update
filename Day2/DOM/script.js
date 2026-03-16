console.log("hi lets win this time");
 console.log(Document.firstChild) // //gives the first child of the document
//we get the event first and then we can add event listener to it

// event listener takes two parameters, the first one is the event type and the second one is the callback function which will be executed when the event occurs
//eg1 
document
.getElementById("changeTextButton")
.addEventListener("click",function(){
    console.log(this) // this keyword gives the element on which the event is attached
    let para=document.getElementById("paragraph1")
    para.textContent="paragraph text changed"
})
// eg2
document
.getElementById("highlight")
.addEventListener("click",function(){
    let city=document.getElementById("cities");
    city.firstElementChild.classList.add("highlight")//we are adding the class highlight to the first element child of the city element and classList is a property which gives the list of classes of the element and we can use it to add or remove classes

})
// eg3
document
.getElementById("changeOrder")
.addEventListener("click",function(){
    let coffeeType=document.getElementById("coffeeType")
    coffeeType.textContent="Espresso"
    coffeeType.style.backgroundColor="brown" //we can also change the style of the element using style property
    coffeeType.style.padding="5px"
})

// eg4
document
.getElementById("addItem")
.addEventListener("click",function(){
     let newItem=document.createElement("li")
     newItem.textContent="eggs" // we are creating a new li element and adding textContent to it and then we need to append it to the ul element
    document.getElementById("shoppingList").appendChild(newItem) // we are appending the new item to the shopping list
   })

//    eg5
document.getElementById("remove").addEventListener("click",function(){
    let taskList=document.getElementById("taskList")
    taskList.lastElementChild.remove()
})

// eg6
document
.getElementById("clickMeButton")
.addEventListener("click",function(){
    alert("button clicked");
})

// eg7 (see again)
document.getElementById("teaList")
.addEventListener("click",function(event){
    if(event.target && event.target.matches(".teaItem")){ // we are checking if the target of the event is a tea item and then we can perform some action on it
        alert("you clicked on " + event.target.textContent) // we are getting the text content of the clicked item and showing it in the alert
    }
})

// eg8 (see again)
document.getElementById("myForm")
.addEventListener("submit", function(event){
    event.preventDefault() // we are preventing the default behavior of the form which is to submit the form and refresh the page
    let feedback=document.getElementById("myForm")
    feedback.value; // we are getting the value of the input field and we can do something with it like showing it in an alert or adding it to a list
    console.log( feedback)
    document.getElementById("feedbackDisplay")
})

// eg9
document.addEventListener("DOMContentLoaded")

// extras
const newDiv = document.createElement("div");
newDiv.textContent = "New Element";

document.body.appendChild(newDiv);