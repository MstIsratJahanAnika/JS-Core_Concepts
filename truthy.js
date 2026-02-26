let data;
data = 0; //takes as false value, 0 bad a shob truth(all pos, neg value)
data = ''; // empty string ->false value
data = '0'; //any string truthy 
data = ' '; //white-space -> truthy hobe 
data = true;
data = false;
data = null; // falsy
data = undefined; // falsy
data = {}; //truthy
data = []; // falsy
if(data){
    console.log('truthy');
}
else{
    console.log('falsy');
}

let price = false;
if(!price){  //bit - ulta functionality
    console.log('price is falsy');
}
// else{
//     console.log('price is falsy');
// }