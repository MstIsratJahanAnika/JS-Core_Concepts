const numbers = [1, 2, 3, 4, 5, 6, 7];

// const doubled = [];
// for(const num of numbers){
//     doubled.push(num*2);
// }

// method-1
// const doubleIt = num => num*2;
// const doubled = numbers.map(doubleIt);

// method-2 - more short
const doubled = numbers.map(num => num*2); //numbers er moddhe num
const square = numbers.map(num => num*num);

console.log(doubled);
console.log(square);



const friends = ['tormuj', 'bangi', 'tomato', 'alu', 'motorshuti', 'jhinga', 'chichinga'];
const firstLetter = friends.map(prothom => prothom[0].toUpperCase());
console.log(firstLetter);

const products = [
    {name: 'jharu', price: 100},
    {name: 'jamakapor', price: 1500},
    {name: 'phone', price: 16000}
]

const DoublePrice = products.map(product => product.price*2);

const names = products.map((product, index, productArray)=>{
    const upperCaseName = product.name.toUpperCase();
    console.log(index, upperCaseName, productArray);

    return upperCaseName;
})
console.log(names);

// single line arrow function a by default return hoy, multi-line a return korte hoy