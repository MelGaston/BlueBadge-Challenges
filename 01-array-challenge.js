/*
Given 2 arrays:
[10,20,30,40,50,70]
[5,3,2,5]

Create a function that multiplies 'like' indexes (0 with 0, 1 with 1, etc.) together then place the value in a new array. 

The function you create should return [50, 60, 60, 200] based on the arrays above.

Make sure the values given to the function are an array type and they have data inside of them.

If the first array has more values than the second, return that same number
*/

let arr1 = [10,20,30,40,50,70];
let arr2 = [5,3,2,5,'cat',true];
let newArr = [];

function arrMultiplier (arrayOne,arrayTwo) {
    for(i=0;i<arr1.length;i++) {
        if(arrayTwo[i] != undefined && typeof arrayOne[i] === "number" && typeof arrayTwo[i] === "number"){
            newArr.push(arrayOne[i]*arrayTwo[i]);
        }
    }
    return newArr;
}

console.log(arrMultiplier(arr1,arr2));

// Mapping Attempt

// let array1 = [10,20,30,40,50,70];
// let array2 = [5,3,2,5];

// function secondMultiplier (arrayOne,arrayTwo) {
//     const mappedArray = arrayOne.map(x => x);

//     return mappedArray;
// }

// console.log(secondMultiplier(array1,array2));