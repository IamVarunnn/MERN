
// const user = {
//     name : "Rohi",
//     age : 20,
//     emailId :"rohi@gmail.com",
//     amount : 2000,
//     "home address" : "India"
// }

// console.log(user);

// console.log(user["name"]);
// console.log(user.age);
// console.log(user["age"]);
// console.log(user["home address"]);



// const user = {
//     name : "Rohi",
//     age : 20,
//     emailId :"rohi@gmail.com",
//     amount : 2000,
//     "home address" : "India"
// }


// const user2 = user;

// user2.name = "VIjay";
// user.age = "40"

// console.log(user);


// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// Loop

// for(let keys in user){
//     console.log(keys , user[keys]);
// }


// const user = {
//     name : "Rohi",
//     age : 20,
//     emailId :"rohi@gmail.com",
//     amount : 2000,
//     "home address" : "India"
// }

// const name = user.name;
// const age = user.age;


// //Object destructing
// const {name, age} = user;

// // console.log(name , age);

// const arr = [10, 20, 40, 50, 60];

// const [first,second] = arr;

// console.log(first,second);


// const user = {
//     name : "Rohi",
//     age : 20,
//     amount : 5000
// }


// for(let keys of Object.keys(user)){
//     console.log(keys);
// }

// let arr = Object.keys(user);
// console.log(arr);


// for(let values of Object.values(user)){
//     console.log(values);
// }


// for(let values of Object.entries(user)){
//     console.log(values);
// }

// console.log(Object.entries(user));

// for(let [key,value] of Object.entries(user)){
//     console.log(key, value);
// }


// const user = {
//     name :"Rohit",
//     age : 20,
//     email : "kk@gmail.com",
//     greeting : function(){
//         console.log(`Hi my name is ${this.name}`)
//     }
// }


// // user.greeting();

// const user2 = {
//     name : "Binod",
//     age : 20,
//     amount : 3000
// }

// user2.greeting = user.greeting;

// // console.log(user2.greeting());
// user.greeting();
// user2.greeting();


const user = {
    name : "Rohit",
    age : 20,
    address : {
        city : "Hyd",
        state : "Telangana"
    }
}

// console.log(user.address.city);


// const user2 = {...user};

// console.log(user);
// user2.name = "Vijay";
// console.log(user);
// console.log(user2);

// user2.city = "Pune";
// console.log(user2.address.city);

// const user2 = structuredClone(user);

// user2.address.city = "pune";
// console.log(user2.address.city);