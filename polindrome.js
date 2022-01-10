// CHECK POLINDROME USING FOR LOOP

function checkPalindrome(string) {
    for (let i = 0; i < string.length / 2; i++) {
        if (string[i] !== string[string.length - 1 - i]) {
            return false;
        }
    }
    return true;
  }
  console.log(checkPalindrome("eye"));
  console.log(checkPalindrome("racecar"));
  console.log(checkPalindrome("one"));



  //CHECK POLINDROME USING INBUILT FUNCTION

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



