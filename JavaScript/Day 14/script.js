
// let newEle = document.createElement("h2");

// newEle.textContent = "Hello Everyone";
// // newEle.id = "second";

// let ele = document.getElementById("first");
// ele.after(newEle);
// ele.before(newEle);

// let thirdEle = document.createElement("h3");
// thirdEle.textContent = "Diwali is coming soon";
// thirdEle.id = "thirdEle";
// // thirdEle.className = "diwali";
// // thirdEle.className = "Holi"; //it will rewrite the diwali class
// // thirdEle.className += "Holi"; // it will be like diwaliHoli 
// // thirdEle.className += " Holi"; // it will now be like diwali Holi and we get two class name

// //dont use above classname like above instead use the below version

// thirdEle.classList.add("diwali");
// thirdEle.classList.add("Holi");


// thirdEle.style.backgroundColor = "red";
// thirdEle.style.fontSize = "44px";

// ele.before(thirdEle);


// console.log(thirdEle.getAttribute("id"));

// thirdEle.setAttribute("hello","j");
// console.log(thirdEle.getAttribute("hello"));
 
// // let ulist = document.getElementById("unlisting");


// let item = document.createElement("li");
// item.textContent = "water";

// let item2 = document.createElement("li");
// item2.textContent = "tablet";

// let item3 = document.createElement("li");
// item3.textContent = "food";


// let item4 = document.createElement("li");
// item4.textContent = "mouthwash";



// //Append will push inside back
// //Prepend will push from front

// // ulist.append(item);
// // ulist.append(item2);
// // ulist.prepend(item3);

// //Append can also take a list
// // ulist.append(item,item2,item3);

// // ulist.append(item3);
// // ulist.append(item); 
// // ulist.append(item2); 
// // ulist.append(item4);

// // item3.after(item4);

// // ulist.children[0].after(item4);

// const arr = ["Milk", "Halwa", "Chicken", "Manchuria"];

// // for(let food of arr){
// //     const item = document.createElement("li");
// //     item.textContent = food;
// //     ulist.append(item);
    
// // }

// const arr = ["Milk", "Halwa", "Chicken", "Manchuria"];

// let ulist = document.getElementById("unlisting");


// for(let food of arr){
//     const li = document.createElement("li");
//     li.textContent = food;
//     ulist.append(li);
// }

 


// Best pratice here since we all put in one list and then we put everthing into list and then append it to 
// the unorder list so that we dont need to update all elements in UI
// const arr = ["Milk", "Halwa", "Chicken", "Manchuria"];

// let ulist = document.getElementById("unlisting");
// let fragment = document.createDocumentFragment();

// for(let food of arr){
//     const li = document.createElement("li");
//     li.textContent = food;
//     fragment.append(li);
// }

// ulist.append(fragment);

// let h2 = document.createElement("h3");
// h3.textContent = "Hi all";

 
 
// let h1 = document.querySelector("h1");

// h1.remove();

//Dont use innterHTML because it will execute it
//Use always textContent