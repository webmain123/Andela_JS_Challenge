//SECTION A : BASIC

function isPrime(num) {
    for(var i = 2; i < num; i++) {
      if(num % i === 0) {
        return false;
      }
    }
    return num !== 1;node

}
  var array = [1, 5, 17, 25, 30 , 13 , 37,1,19,71];
  var primes = array.filter(isPrime);
  console.log(primes)



//CHECK PRIME NUMBER FROM AN ARRAY

// function checkPrime(number) {
//     if (number <= 1) {
//       return false;
//     } else {
//       for (let i = 2; i < number; i++) {
//         if (number % i == 0) {
//           return false;
//         }
//       }
//       return true;
//     }
//   }




//NESTED ARRAY

// let bigHero = {
//     characters:[
//         {name:'Hiro' , voice:'Ryan Potter'},
//         {name:'Byamax' , voice:'scott Adsit'},
//         {name:'Go Go Tamago' , voice:'Jamie Chung'},
//         {name:'Fred' , voice:'T.J. Miller'},
//     ]
// };
// let chars = bigHero['characters'];
// for(let i=0, len=chars.length; i<len; i++){
//     console.log(chars[i]);
//     console.log(chars[i].name);
//     console.log(chars[i].voice);

// }



//[“Patrick wyne, 30”, “lil wyne, 32”,“Eric mimi, 21”,“Dodos deck, 
   // 21”,“Alian Dwine, 22”,“Patrick wyne, 33”,“Patrick wyne, 100”,“Patrick wyne, 40”]
// let bigHer= {
//     characters:[
//         {firstName:'Patrick' , secondName:'wyne',age:30},
//         {firstName:'Eric' , secondName:'mimi',age:21},
//         {firstName:'Dodos' , secondName:'deck',age:21},
//         {firstName:'Alian' , secondName:'Dwine',age:22},
//         {firstName:'Patrick' , secondName:'wyne',age:33},
//         {firstName:'Patrick' , secondName:'wyne',age:100},
//         {firstName:'Patrick' , secondName:'wyne',age:40},
//     ]
// };
// let charso = bigHer['characters'];
// for(let i=0; i<charso.length; i++){
//     console.log(chars[i]);
//     let result = charso[i].firstName;
//     let resultOne = charso.map(item => item.charso == secondName);
    
//     console.log(charso[i].firstName);

//     console.log(result)

//     console.log(charso[i]);

// }

const bigBoss = [
  // {firstName:'Patrick' , secondName:'wyne',age:30},
  {firstName:'Eric' , secondName:'mimi',age:21},
  {firstName:'Dodos' , secondName:'deck',age:21},
  {firstName:'Alian' , secondName:'Dwine',age:22},
  {firstName:'Patrick' , secondName:'wyne',age:33},
  {firstName:'Patrick' , secondName:'wyne',age:100},
  {firstName:'Patrick' , secondName:'wyne',age:40},
  ]

// const result1 = bigBoss.map((x)=>x.SecondName + x.age);
const newArr = bigBoss.map(item => item.secondName + ":"+" "+ item.age);
const newArr1 = JSON.stringify(newArr);
const newArr2 = bigBoss.map(item => item.firstName);

console.log(newArr1);



let sayings = new Map();
sayings.set('dog', 'woof');
sayings.set('Patrick' , 'wyne');
sayings.set('elephant', 'toot');
sayings.size; // 3
sayings.get('dog'); // woof
sayings.get('fox'); // undefined
sayings.has('bird'); // false
sayings.delete('dog');
sayings.has('dog'); // false

for (let [key, value] of sayings) {
  console.log(key + ':{' + newArr + '}');
}
// "cat goes meow"
// "elephant goes toot"

sayings.clear();
sayings.size; // 0


