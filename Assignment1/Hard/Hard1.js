const realType=(any)=>{
    if(Array.isArray(any))
    {
        return 'array';
    }
    else if(any===null)
    {
        return 'null'
    }
    else if(any instanceof Date)
    {
        return 'date';
    }
    else if(any===undefined)
    { 
        return 'undefind';
    }
    else if(isNaN(any))
    {
        return 'NaN';
    }
    return typeof any;
}


console.log(realType(1));
console.log(realType("a"));
console.log(realType(true));
console.log(realType([]));
console.log(realType(null));
console.log(realType(0/0));
console.log(realType(new Date('2020-06-14')));

