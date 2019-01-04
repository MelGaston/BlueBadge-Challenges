/*
Create a function that swaps the value of any 2 specified properties in a object, make sure you don't mutate (change) the original object. 
Your function may have 3 parameters, the original object, property1, property2
*/

let cat = {
    color: 'Black and White',
    name: 'Beans',
    age: 3
};

function objSwapper(og,p1,p2) {
    let keys = Object.keys(og);
    let values = Object.values(og);
    let newObject = {};
    
    for(i=0;i<keys.length;i++) {
        if(keys[i]==p1) {
            newObject[keys[i]] = og[p2];
        } else if(keys[i]==p2){
            newObject[keys[i]] = og[p1];
        } else {
            newObject[keys[i]] = values[i];
        }
    }
    
    return newObject;
}

console.log(objSwapper(cat,'color','name'));

/****** EFA Solution ******/

function swap(obj,key1,key2) {
    let temp = {};
    for (let enumerable in obj) {
        temp[enumerable] = obj[enumerable];
    }

    temp[key1] = obj[key2];
    temp[key2] = obj[key1];

    return temp;
}

let person = {
    fName: 'Tom',
    lName: 'McClellan'
}

console.log(swap(person,'fName','lName'));