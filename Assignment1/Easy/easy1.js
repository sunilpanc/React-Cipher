// EASY

/* Q.1) Count Instances of a Character in a String
Create a function that takes two strings as arguments and returns the number of times the first string
(the single character) is found in the second string. */

const charCount = (character,words)=>{
    let count=0;
    const word = words.split('').forEach((item)=>{
        if(character===item) count++;
    });
    return count;

}
console.log(charCount('a','edabit'));
console.log(charCount('c','Chamber of secrets'));
console.log(charCount('b','big fat bubble'));
