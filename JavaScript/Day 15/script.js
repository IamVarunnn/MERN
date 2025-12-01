
// let heading = document.querySelector("h1");

// function handleClick(){
//     heading.style.backgroundColor = "blue";
// }

// heading.onclick = function handleClick(){
//     heading.style.backgroundColor = "red";
// }

// //Here it overrides the above function that why its not recommended
// heading.onclick = function handleClick(){
//     heading.style.color = "blue";
// }

// let heading = document.querySelector("h1");

// heading.addEventListener("click",()=>{
//     heading.style.backgroundColor = "Blue"; 
    
// })

// heading.addEventListener("click",()=>{
//     heading.style.color = "white"; 
// })

// heading.addEventListener("mouseenter",()=>{
//     heading.style.backgroundColor = "green";
// })

// heading.addEventListener("mousehover",()=>{
//     heading.style.backgroundColor = "green";
// })

// heading.addEventListener("mousehover", () => {
//   console.log("This will never run 😅");
// });


// let parent = document.getElementById("parent");

// let child = document.getElementsByClassName("child");

// child.addEventListener("click",()=>{
//     for(let children of child){
//         children.style.backgroundColor = "black";
//     }
// })

// for (let box of child) {
//   box.addEventListener("click", () => {
//     box.style.backgroundColor = "black";
//   });
// }



// for(let child of parent.children){
//     child.addEventListener("click", () => {
//         child.style.backgroundColor = "black";
//     });
// }



// let grandparent = document.querySelector(".grandparent");
// let parent = document.querySelector(".parent");
// let child = document.querySelector(".child");



//By default it is false
// grandparent.addEventListener("click",()=>{
 
//     console.log("Gp was clicked")
// })

// parent.addEventListener("click",()=>{
    
//     console.log("p was clicked")
// })

// child.addEventListener("click",()=>{
    
//     console.log("child was clicked")
// })

// child was clicked
// p was clicked
// Gp was clicked

// grandparent.addEventListener("click",()=>{
 
//     console.log("Gp was clicked")
// },true)

// parent.addEventListener("click",()=>{
    
//     console.log("p was clicked")
// },true)

// child.addEventListener("click",()=>{
    
//     console.log("child was clicked")
// },true)

// Gp was clicked
// p was clicked
// child was clicked


//Capture phase : 
// Its like visited array we use in the DSA like we
// would travserse the
// tree from top to down and see
// wethere that was visited or not if its true then 
// execute if not then just traverse and come back.



// const heading = document.querySelector("h1");

// heading.addEventListener("click",(e)=>{
//     console.log(e);
// })

// This e bring all the information about the object
// we are currently lisntening like type of event cliked etc

//If we want to stop its default execution like event bubbling we use like
// e.stopPropgation();

//The e is so powerful we can see who triggered that event like
// e.target


let parent = document.getElementById("parent");

// let child = document.getElementsByClassName("child");
// parent.addEventListener("click",(e)=>{
//     console.log(e.target);
//     e.target.textContent = "iam cliked"
// })

// child.addEventListener("click",()=>{
//     for(let children of child){
//         children.style.backgroundColor = "black";
//     }
// })

// for (let box of child) {
//   box.addEventListener("click", () => {
//     box.style.backgroundColor = "black";
//   });
// }


//If we want to remove event listener

// function handleClick(e){
//     e.target.textContent = "Iam cliked"
// }

// parent.removeEventListener("click",handleClick);
// parent.addEventListener("click",handleClick);


//If we want at least once then use the below


function handleClick(e){
    e.target.textContent = "Iam cliked";
    parent.removeEventListener("click",handleClick);
}

parent.addEventListener("click",handleClick);

