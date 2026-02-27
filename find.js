const employees = [
    {name: 'kabir', age:34},
    {name: 'tahasina', age: 23},
    {name: 'sabina', age: 41},
    {name:'mitul', age: 39},
    {name: 'tarabi', age: 27},
    {name: 'sinthiya', age: 26}
]

// jeta nei sheta khujle 'undefined' dibe 
const employee1 = employees.find(person => person.name === 'tarabi'); // specific object 
const employee2 = employees.find(person => person.name === 'turabi'); //undefined

const firstT = employees.find(first => first.name[0] === 't'); // first element ta dibe jeta t diye start, pore ase kina dekhbe na 

console.log(employee1, employee2, firstT);