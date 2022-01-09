const bigBoss = [
    {firstName:'Patrick' , secondName:'wyne',age:30},
    {firstName:'Eric' , secondName:'mimi',age:21},
    {firstName:'Dodos' , secondName:'deck',age:21},
    {firstName:'Alian' , secondName:'Dwine',age:22},
    {firstName:'Patrick' , secondName:'wyne',age:33},
    {firstName:'Patrick' , secondName:'wyne',age:100},
    {firstName:'Patrick' , secondName:'wyne',age:40},
    ]

// const result1 = bigBoss.map((x)=>x.SecondName + x.age);
let newArr = bigBoss.map(item => item.secondName + ":"+" "+ item.age);
let newArr1 = bigBoss.map(item => item.firstName);
// let keys = Object.keys(bigBoss.firstName);

// console.log(`{${keys}}`);
console.log(newArr1 +":"+newArr)























// const myArray = ["Patrick wyne,30"];
// function objectify(array){
//     var object = {}
//     for(let i=0;i<array.length;i++){
//         let val = [];
//         var key = "";
//         var info = "";
//         val = array[i].split("");
//         key = val[0];
//         info = val[1];
//         object[key]={
//             "second-name":info.split(",")[0],
//             age:info.split(",")[1]
//         };
        
//     }
//     return object;
// }
// console.log(objectify(myArray))