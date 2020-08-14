// Q2. Numbers in Strings
// Create a function that takes an array of strings and returns an array with only the strings that have
// numbers in them. If there are no strings containing numbers, return an empty array.

const checkStringContainNumber=(str)=>{
    let count = 0;
    str.split('').forEach(element => {
        if(element===' ');
        else if(!isNaN(element)){
            count++;
        }
    });
    
    return count>0?true:false;
}


const numInStr=(arr)=>{
    let newArr = [];
    for(let i=0; i<arr.length; i++)
    {
        if(checkStringContainNumber(arr[i]))
        {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(numInStr(['1a','a','2b','b']));
console.log(numInStr(['abc','abc10']));
console.log(numInStr(['abc','ab10c','a10bc','bcd']));
console.log(numInStr(['this is a test','test1']));




