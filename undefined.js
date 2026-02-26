let data;
console.log(data); //value set kora hoy nai, 'undefined'

const sum = (a, b) => console.log(a, b);
sum();//arguments pass hoy nai, a b dui tar jonno e 'undefined' dekhabe, ekta dile arektar jonno 'undefined'

const info = {
    name: 'tormuj ali',
    age: 22,
    work:'gorom a shorbot banano'
}

//property delete hoar por call korle 'undefined' dekhabe
delete info.work;
console.log(info.work);

// array te 'undefined' kokhon ashte pare 
const array = [1, 2, 3, 4, 5];
delete array[1];
// console.log(array[7]); //7th index nei 
console.log(array);
console.log(array[1]);

console.log(typeof undefined); //undefined 
console.log(typeof null); //object