// Q2. Hitting the Jackpot
// Create a function that takes in an array (slot machine outcome) and returns true if all elements in the
// array are identical, and false otherwise. The array will contain 4 elements.

const testJackpot=(arr)=>{
    for(let i=0; i<arr.length-1; i++)
    {
        if(arr[i]!==arr[i+1])
        {
            return false;
        }
    }
    return true;
}


console.log(testJackpot(['@','@','@','@']));
console.log(testJackpot(['abc','abc','abc','abc']));
console.log(testJackpot(['SS','SS','SS','SS']));
console.log(testJackpot(['&&','&','&&&','&&&&']));
console.log(testJackpot(['SS','SS','SS','Ss']));
