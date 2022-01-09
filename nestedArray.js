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