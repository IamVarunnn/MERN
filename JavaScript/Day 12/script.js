

// const arr = [30,40,50,10,20];

// const ans = arr.filter((num) => num > 25);
// console.log(ans);

// const arr = [30, 80, 10, 7, 9, 40];

// arr.filtering = function(compare){
//     const ans = [];

//     for(let n of this){
//         if(compare(n)){
//             ans.push(n);
//         }
//     }

//     return ans;
// };


// const answer = arr.filtering(n => n > 30);
// console.log(answer);


// const a = [9, 40, 50, 8];

// const nans = a.filtering(n => n > 10);
// console.log(nans);


//If we want to generalise and let it work for every array then we use the following.

//Also this is not recommended because it may have clashes between names in near future.

Array.prototype.filtering = function(compare){
    const ans = [];

    for(let n of this){
        if(compare(n)){
            ans.push(n);
        }
    }
    return ans;
}

// const anas = [30,90,40,99];
const nums = [30,99,90,40,909,200];


// const newans = anas.filtering(n => n > 30);
// console.log(newans);

const numsArr = nums.filtering(n => n * 100);
console.log(numsArr);
