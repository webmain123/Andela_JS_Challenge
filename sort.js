// let number =[74, 18, 10, 5, 84, 24, 105];
// number.sort(compFunct);
// console.log(number);
// function compFunct(a, b){
//     return b - a;
// }
// function isPrime(num) {
//     for(var i = 2; i < num; i++) {
//       if(num % i === 0) {
//         return false;
//       }
//     }
//     return num !== 1;

// }
//   var array = [1, 5, 17, 25, 30 , 13 , 37,1,19,71];
//   var primes = array.filter(isPrime);
  

  
let sort = array =>{

    
    function isPrimeNumber(n) {
        for (var i = 2; i < n; i++) { // i will always be less than the parameter so the condition below will never allow parameter to be divisible by itself ex. (7 % 7 = 0) which would return true
          if(n % i === 0) return false; // when parameter is divisible by i, it's not a prime number so return false
        }
        return true; // otherwise it's a prime number so return true (it also must be greater than 1, reason for the n > 1 instead of true)
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
// return arry2;
// }

// function isPrimeNumber(n) {
//     for (var i = 2; i < n; i++) { 
//       if(n % i === 0) return false; 
//     }
//     return n > 1; }

return arry2;
}
  
let arry=[1, 5, 17, 25, 30 , 13 , 37,12,19,71];

console.log(sort(arry))