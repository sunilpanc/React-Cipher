//Q.2) Given two integers, a and b, return true if a can be divided evenly by b. Return false otherwise.

//Answer:-


const dividesEvenly=(a,b)=>{
    if(a%b==0) return true;
    return false;
}
console.log(dividesEvenly(98,7));
console.log(dividesEvenly(85,4));
