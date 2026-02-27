const numbers = [1, 2, 3, 4, 5, 6, 7];

let sum = 0; // initialization
for(num of numbers){
    sum = sum + num;
}
console.log(sum);
//uporer ei kaj e reduce diye kora jay 

const total = numbers.reduce((acc, num) => acc+num, 0);
//parameter -> previous, current , third param -> initialized value in prev