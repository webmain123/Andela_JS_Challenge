  let sort = array =>{

    
    function isPrimeNumber(n) {
        for (var i = 2; i < n; i++) { 
          if(n % i === 0) return false; 
        }
        return true; 
      }


    const arry2 =[];
    let pos=0,max=array[0],min=array[0];
    for(let j=0;j<array.lenght;j++){
        if(max>array[j]){
            max=array[j]
        }
    }
 
for(let i=0;i<array.length;i++){
    for (let k=0;k<array.length;k++){
        if(array[k]!=null){
            if(min<array[k]){
                min = array[k];
                pos =k;
            }
        }
    }

arry2[i]=min;
array[pos]=null;
min=max;
}


return arry2;
}
  
let arry=[1, 5, 17, 25, 30 , 13 , 37,12,19,71];

console.log(sort(arry))



///////////////////////////////////////////////////

// let number =[74, 18, 10, 5, 84, 24, 105];
// number.sort(compFunct);
// console.log(number);
// function compFunct(a, b){
//     return b - a;
// }