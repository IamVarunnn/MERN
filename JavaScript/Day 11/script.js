

// function createCounter(){
//     let count = 0;

//     function increement(){
//         count++;
//         return count;
//     }

//     return increement;
// }

// const counter = createCounter();

// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());


// let balance = 200;

// // balance += 200;
// balance += "Roi";

// console.log(balance);


// let user = {
//     balance : 20000,
//     deposit : function(amount){

//         if(typeof amount == "number" && amount > 0){
//             this.balance += amount;
//             return this.balance;
//         }
//     },
//     withdraw : function(amount){
//         if(typeof amount == "number" && amount > 0 && this.balance >= amount){
//             this.balance -= amount;
//             return this.balance;
//         }
//     },
//     getBalance : function(){
//         return this.balance;
//     }
// }

// console.log(user.deposit("20"));
// user.balance = 40;

// // console.log(user.deposit(100));
// console.log(user.getBalance());




function createBank(){
    let balance = 200;
    let user = {
        deposit : function(amount){

            if(typeof amount == "number" && amount > 0){
                balance += amount;
                return balance;
            }
        },
        withdraw : function(amount){
            if(typeof amount == "number" && amount > 0 && balance >= amount){
                balance -= amount;
                return balance;
            }
        },
        getBalance : function(){
            return balance;
        }
    }

    return user;
}

// balance += "@@";
// console.log(getBalance());
const customer = createBank();

// console.log(customer);
// console.log(customer.getBalance());
// customer.balance += 22000;

// console.log(customer.getBalance());
// console.log(customer.balance);

// customer.deposit(200000);

// console.log(customer.getBalance());
// console.log();
// customer.withdraw(20011);
// console.log(customer.getBalance());

// customer.withdraw(200);
// console.log(customer.getBalance());

//Higher Order Function
// A function returning another function is known as HOF


// function double(){
//     function excute(){
//         console.log("Jello");
//     }

//     return excute;
// }



// function double(){
    
    
//     return function excute(){
//         console.log("Jello");
//     }

    
// }


// const n = double();
// n();
// console.log(n);


function double(value){

    return function excute(val){
        return val * value;
    }
}

const n = double(20);

console.log(n(20));