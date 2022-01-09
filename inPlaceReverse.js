const reverseInPlace = (arr) =>{
    let reverse
    for(let i=0; i<arr.length / 2 ; i++){
        reverse = arr[i]
        arr[i] = arr[arr.length - 1 - i]
        arr[arr.length - 1 - i] = reverse
    }
    return arr
}
const arr =[1,2,3,4,5,6,7,8,9]
console.log(arr)
console.log(reverseInPlace(arr))