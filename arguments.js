//proti function er moddhe by default object thake eke 'array like object' bole
function add(num1, num2){

    console.log('arguments :',arguments);//function call korar shomoy ki ki parameter pathaiso ta
    //arguments : [Arguments] { '0': 2, '1': 5, '2': 7, '3': 9, '4': 4 }

    const args = [...arguments]; // array-like-objects ke array te convert kore
    console.log('args :', args);
    //args : [ 2, 5, 7, 9, 4 ]
    
    return num1 + num2;
}

add(2, 5, 7, 9, 4);