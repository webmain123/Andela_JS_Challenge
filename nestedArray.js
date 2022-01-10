const arr_NestedObject = (array) => {
    let object = {}
    array.forEach(element => {
        let person = element.split(',')
        object[person[0].split(' ')[0]
            .trim()] = {
            secondName: person[0]
                .split(' ')[1]
                .trim(),
            age: person[1]
                .trim()
        }
    });
    return object
}
console.log(arr_NestedObject([
    "Patrick wyne, 30",
    "lil wyne, 32",
    "Eric mimi, 21",
    "Dodos deck, 21",
    "Alian Dwine, 22",
    "Patrick wyne, 33",
    "Patrick wyne, 100",
    "Patrick wyne, 40"])
);



// const bigBoss = [
//     {firstName:'Patrick' , secondName:'wyne',age:30},
//     {firstName:'Eric' , secondName:'mimi',age:21},
//     {firstName:'Dodos' , secondName:'deck',age:21},
//     {firstName:'Alian' , secondName:'Dwine',age:22},
//     {firstName:'Patrick' , secondName:'wyne',age:33},
//     {firstName:'Patrick' , secondName:'wyne',age:100},
//     {firstName:'Patrick' , secondName:'wyne',age:40},
//     ]
  
  
//   const newArr = bigBoss.map(item => item.secondName + ":"+" "+ item.age);
//   const newArr1 = JSON.stringify(newArr);
//   console.log(newArr1)









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