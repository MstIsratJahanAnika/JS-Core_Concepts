// triple equals
console.log(2===2); // true
console.log(2==='2'); //false, type not same

// double equals
console.log(3==3); //true
console.log(3=='3'); //type compare kore na, common type a convert korar pore compare kore 
console.log(1 == true);


console.log(1 == true); //true
console.log(0 == false); //true
console.log(true == '1'); //true, 1 ke true te convert kore compare kore tai result true hoy 
console.log(false == '0'); //true
console.log(null == undefined); //true 

console.log(NaN == NaN); //false

console.log({} == {}); // false 
console.log([] == []); // false 

console.log([5] == '5'); // true, array ke string a convert kore, coercion 
console.log([5].toString());


//double equal type coercion
//it converts the operands to the same type before making the comparison 
//comparison er age same type a convert kore ney 
