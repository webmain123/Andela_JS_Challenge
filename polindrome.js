// CHECK POLINDROME

let str;
function isPolindrome(str){
    let result = str.split("").reverse().join("");
    if(str == result){
        return true;
    } else {
        return false;
    }
    
}

console.log(isPolindrome("1121159"));
console.log(isPolindrome("eye"));
console.log(isPolindrome("121"));