
let heading = document.querySelector("h1");

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


let parent = document.getElementById("parent");

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



for(let child of parent.children){
    child.addEventListener("click", () => {
        child.style.backgroundColor = "black";
    });
}
