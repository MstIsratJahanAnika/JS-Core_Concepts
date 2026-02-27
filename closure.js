function outerFunction() {
    function innerFunction() {
        console.log('this is inner function');
    }

    return innerFunction;
}

const output = outerFunction();
//innerFunction call kora jabe na, error dibe,

// console.log('in the outside',output);
output();//innerFunction er function ke call kora hoise

function counter(owner) {
    let count = 0;  
    function increment() {
        count = count + 1;
        console.log('value of count ', owner, count);
    }
    return increment;
}

// const count1 = counter();
// count1(); //1
// count1(); //2
// count1(); //3
// count1(); //4


const rahimCounter = counter('rahim'); //rahim er jonno new scope create kore
rahimCounter(); //1
rahimCounter(); //2
rahimCounter(); //3
rahimCounter(); //4

const karimCounter = counter('karim'); //karim er jonno new scope create kore
karimCounter(); //1 
karimCounter(); //2
karimCounter(); //3

// abar rahim ke call korle, jekhane chilo okhan theke continue hobe
rahimCounter(); //5
rahimCounter(); //6