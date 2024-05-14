function isDuplicate(arr1, arr2) {
    let set = new Set()

    for (let i = 0; i < arr1.length; i++) {
        set.add(arr1[i])
    }

    for (let j = 0; j < arr2.length; j++) {
        if (set.has(arr2[j])) return true
    }

    return false
}


let result = isDuplicate([1, 3, 4, 6, 7], [2, 5, 7, 9])

console.log(result);