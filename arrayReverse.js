
//ARRAY REVERSING

// let arr = [];
// function newArray(arr){
//     let result = arr.reverse();
//     for(let i=0; i< arr.length; i++){
//         if (arr == result){
//             return result;
//         }
//     }
// }
// console.log(newArray([10,15,20,60,50]))
// console.log(newArray([90,35,80,60,50]))


//REVERSE 


// function reverseArray1(arr){
//     let newArr = [];
//     for(let i = arr.length -1; i>=0; i--){
//         newArr.push(arr[i])
//     }
//     console.log(newArr);
// }
// reverseArray1([10,15,20,60,50])
// reverseArray1("eye")
// reverseArray1("hello")

function reverseString(str){
let revString = '';
for(let i=0;i<=String.length -1; i++){
revString = str[i] + revString;
}
return revString;
}
console.log(reverseString("Hello"))