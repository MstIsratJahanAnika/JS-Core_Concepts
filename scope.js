const pi = 3.1416;

// function er age o function call kora jay
const total =  add(5, 10);
console.log(total);

function add(a, b){
    const factor = 0.5;
    const result = (a+b)*factor;
    const total = doubleIt(result);

    const value = addTwo(total)
    
    // function inside function, ei function add(a, b) er bahire theke accessible hobe na
    function addTwo(number)
    {
        const num = number*pi; //chain-wise uporer dik a jabe, variable khujbe 
        return num*2;
    }


    return value;

}

function doubleIt(c){
    return c*5;
}

//console.log(factor); //error, not accessible outside function
console.log(pi); // accessible, declared outside function 

const multiply = (a, b) =>{
    console.log(result);  //initialization er age console kora jay na
    const result = a*b;

    return result;
}

multiply(8, 9); 