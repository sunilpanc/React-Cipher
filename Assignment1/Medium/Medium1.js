// Q1. Reverse Words Starting with a Particular Letter
// Write a function that reverses all the words in a sentence that start with a particular letter.

const reverseString=(str)=>{
    let newStr='';
    str.split('').forEach(element => {
        newStr =  element + newStr;
    });
    return newStr;
}


const specialReverse=(str,character)=>{
    let newStr = str.split(' ');
    let ansStr = [];
    newStr.forEach((element)=>{
        if(element[0]===character)
        {
            ansStr.push(reverseString(element));
        }
        else{
            ansStr.push(element);
        }
    })
    return ansStr.join(' ');
}

console.log(specialReverse('word searches are super fun','s'));
console.log(specialReverse('first man to walk on the moon','m'));
console.log(specialReverse('peter piper picked pickled peppers','p'));
