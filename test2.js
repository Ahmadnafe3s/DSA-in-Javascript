
let stack = [5, 6, 8, 2, 3]


let temp = stack[0]

function shift(value) {
    let tempArray = [value]

    for (const key of stack) {
        tempArray[tempArray.length] = key
    }

    stack = tempArray
    
    console.log(stack);
}


function unshift() {

    console.log(stack[0]);

    for (let index = 0; index < stack.length - 1; index++) {
        stack[index] = stack[index+1]
    }
    
    console.log(stack);
}

shift(4);
shift(7);
shift(11);


unshift();
unshift();
unshift();



