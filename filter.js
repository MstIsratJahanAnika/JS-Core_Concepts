const numbers = [1,2,3,5 ,7,4, 66, 88, 91, 71];

const evenNumbers = numbers.filter(num => num%2 == 0); 
//filter kore even numbers dibe


const names = ['priti', 'sahara', 'nurani', 'ashish', 'hiya','nitya', 'kabbo', 'tithi', 'auritri', 'diha'];
//name jegula n diye start hoyeche 
const Nnames = names.filter(n => n[0]==='n');
console.log(Nnames);

const employees = [
    {name: 'kabir', age:34},
    {name: 'tahasina', age: 23},
    {name: 'sabina', age: 41},
    {name:'mitul', age: 39},
    {name: 'tarabi', age: 27},
    {name: 'sinthiya', age: 26}
]

const olderEmployee = employees.filter( old => old.age > 30);
console.log(olderEmployee);