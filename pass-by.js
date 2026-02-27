function multiply(a, b){
    a = a-5;
    b = b-10;
    console.log(a, b);
    return a*b;
}

let x = 10;
let y = 15;
console.log('before calling values are', x, y);
const result1 = multiply(x, y);
console.log(result1);
console.log('after calling values are', x, y); // original man er change hobe na 


// pass-by-reference
function firstSum (arr1, arr2){
    arr1[0] = 100;
    arr2[0] = 200;

    const num1 = arr1[0];
    const num2 = arr2[0];

    return num1 + num2;
}

const num1 = [1, 2, 3];
const num2 = [4, 5, 6];


console.log('before the function call', num1, num2);

const result2 = firstSum(num1, num2);

console.log('after the function call', num1, num2);