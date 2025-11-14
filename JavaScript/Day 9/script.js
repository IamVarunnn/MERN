

// function greet(){
//     console.log('Hello World');
//     return -1;
// }

// // greet();
// console.log(greet());


// function addNo(a,b){
//     return a + b;
// }

// console.log(addNo(1,2));


// function addNo(...a){
    
//     let sum = 0;
//     for(let n of a){
//         sum += n;
//     }

//     return sum;
// }

// console.log(addNo(9,9));

// function addNo(a, b){
//     return a + b;
// }

// console.log(addNo(1,2,3));



// const arr = [10,20,30,35];

// const[first,second,...l] = arr;

// // console.log(first,second);
// console.log(first,second,l);

// const arr = [1,2,3];
// const brr = [1,2,3];

// const ans = [...arr, ...brr];
// console.log(ans);




// const addNo = function(a,b){
//     return a + b;
// }

// console.log(addNo(1,2));



//Error for the below code
// console.log(addNo(1,2));
// const addNo = function(a,b){
//     return a + b;
// }


// const addNo = (a,b) =>{
//     return a + b;
// }

// console.log(addNo(11,2));


//For single numbers
// const addNo = (num) => (num * num);
// console.log(addNo(6));

// const addNo = num => num + num;

// console.log(addNo(3));



// const greet = () =>{
//     let user = {
//         name : "Rhot",
//         age : 20
//     }

//     return user;
// }

// console.log(greet());

// const greet = () =>{
//     return {
//         name : "Rhot",
//         age : 20
//     }

// }

// console.log(greet());


// const greet = () => ({name :"Rohg",age:20});

// console.log(greet());


// function greet(){
//     console.log("Hello everyone");
// }

// function meet(){
//     console.log("Lets meet everyone");
// }

// greet();
// meet();


// function greet(){
//     console.log("Hello everyone");
// }

// function meet(){
//     console.log("Lets meet everyone");
// }
// greet(meet());


// function greet(){
//     console.log("Hello everyone");
// }

// function meet(callback){
//     callback();
//     console.log("Lets meet everyone");
// }


// meet(greet);


// function greet(){
//     console.log("Hello everyone");
// }

// function dance(){
//     console.log("Lets dance since we meet after long time");
// }

// function meet(){
   
//     console.log("Lets meet all");
//     greet();
//     dance();
// }

// meet();

// function greet(){
//     console.log("Hello everyone");
// }

// function dance(){
//     console.log("Lets dance since we meet after long time");
// }


// function dinner(){
//     console.log("Had a great dinner");
// }
// function meet(){
   
//     console.log("Lets meet all");
//     greet();
//     dance();
//     console.log("After dancing lets go on a dinner");
//     dinner();
// }
    
// meet(dinner());


function greet(){
    console.log("Hello everyone");
}

function dance(){
    console.log("Lets dance since we meet after long time");
}


function dinner(){
    console.log("Had a great dinner");
}
function meet(callback){
   
    console.log("Lets meet all");
    callback();
    console.log("After dancing lets go on a dinner");
}
    
// meet(greet);
// meet(dance);

meet(dinner);