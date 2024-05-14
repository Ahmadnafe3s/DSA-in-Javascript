
// function reverseString2(str) {

//     if (str.length === 0) return undefined

//     let i = str.length - 1;
//     let reversed = "";
//     while (i >= 0) {
//         reversed += str[i]
//         i--
//     }

//     return reversed;
// }

// let result2 = reverseString2("Nafees , Ahmad")

// console.log(result2);


// console.log(res);

const name = 'Faizan';
let hash = 0
for (let index = 0; index < name.length; index++) {
    hash = (hash + name.charCodeAt(index) * 23) % name.length
}

console.log(hash);
