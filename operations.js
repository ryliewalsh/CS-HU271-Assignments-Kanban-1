function sum(a, b)
{
    return a + b;
}

function subtract(a,b)
{
    return a - b;
}

function division(a,b)
{
    
    if (b > 0){
        return a/b;
    }
    else{
        return 0;
    }


}

module.exports = {
    sum,
    subtract,
    division,
    
};