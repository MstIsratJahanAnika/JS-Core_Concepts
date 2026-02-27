// document.getElementById('#btn').addEventListener('click', function(event){
//     //kaj karbar koro
// })

// addEventListener('click', function(event){});

function settleLife(name, isBCS, marriage, patri){
    // console.log
    if(isBCS){
        marriage(patri);
    }
}

function boloKobul(patri){  //ei function uporer function a access pabe, parameter same thakay 
    console.log('kobul', patri);
}

settleLife('tormuj', true, boloKobul, 'nari');
// boloKobul('pori');

// function ke parameter hishebe pathano -> callBack function