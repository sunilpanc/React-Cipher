// Q3. Remove Duplicates from an Array
// Create a function that takes an array of items, removes all duplicate items and returns a new array in
// the same sequential order as the old array (minus duplicates).

const removeDups = (arr) => {
    let newArray=[];
    for(let i=0; i<arr.length; i++)
    {
        if(newArray.indexOf(arr[i])===-1)
        {
            newArray.push(arr[i]);
        }
    }
    return newArray;
}

console.log(removeDups([1,0,1,0]));
console.log(removeDups(['The','big','cat']));
console.log(removeDups(['John','Taylor','John']));
console.log(removeDups([1,0,0,0,1,0,1,0,2,3,2,1,4,2]));
