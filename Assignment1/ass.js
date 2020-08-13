// VERY EASY

//Q.1) Write a function that takes an integer minutes and converts it to seconds.

//Answer:-

/*
const convert = (minutes)=> minutes*60;

console.log(convert(5));
console.log(convert(3));
console.log(convert(2));

*/


//Q.2) Given two integers, a and b, return true if a can be divided evenly by b. Return false otherwise.

//Answer:-

/*

const dividesEvenly=(a,b)=>{
    if(a%b==0) return true;
    return false;
}
console.log(dividesEvenly(98,7));
console.log(dividesEvenly(85,4));

*/

/**************************************************************************************************************/


// EASY

/* Q.1) Count Instances of a Character in a String
Create a function that takes two strings as arguments and returns the number of times the first string
(the single character) is found in the second string. */

// const charCount = (character,words)=>{
//     let count=0;
//     words.forEach((element)=> {
//         if(element === character)  count++;
//         else count;
//     });
//     return count;
// }
// console.log(charCount('a','edabit'));
