

// // let btn = document.querySelector("button");
// // let body = document.querySelector("body");

// // btn.addEventListener("click",(e)=>{
// //     // body.style.backgroundColor = e.target.value;
// //     console.log(e.target.className);
// // })

// let parent = document.querySelector(".parent");
// let body = document.querySelector("body");

// parent.addEventListener("click",(e)=>{
     
//     body.style.backgroundColor =  e.target.className;
// })


// let body = document.querySelector("body");

// let btn = document.querySelectorAll("button");

// btn.addEventListener("click",(e)=>{
//     let child = e.target.className;
//     console.log(child);
// })


let parent = document.querySelector(".parent");

let body = document.querySelector("body");

parent.addEventListener("click",(e)=>{
    let child = e.target;
    console.log("cliked");
    body.style.backgroundColor = child.className;
})







