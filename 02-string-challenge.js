/*
Given the string -> 'Welcome to eleven fifty'

Create a function that accepts a string. 
    
In the function check to see if the value of the string is: 
- of type string
- has a length greater than zero
- has a length less than 30

If any of these are invalid send it to the else condition and show the message -> 'String must not be empty, null, or exceed 30 characters'

If the string is valid, change the string so that the 'e' and the first 'f' in 'eleven fifty' is capitalized

Make sure that trailing whitespace is trimmed off of the string. 

If finished, add a second param to the function for a callback function and instead of returning the data, place it inside of the callback arguments
*/

let str = 'Welcome to eleven fifty';

function stringer(og,callback) {
    if(typeof og === "string" && og.length <= 30 && og.replace(/\s/g, '').length != 0) {
        let split = og.toLowerCase().split(' ');
        for (i = 0; i < split.length; i++) {
            if(split[i].length >= 3){
                split[i] = split[i].charAt(0).toUpperCase() + split[i].substring(1);
            }
        }
        let caps = split.join(' ').trim();
        callback(caps);
    } else {
        console.log("String must not be empty, null, or exceed 30 characters");
    }
}

function printer(string) {
    console.log(string);
}

stringer(str,printer);