function first(arr,n){
    if(n === null){
        return arr[0]
    }

    if(arr === null){
        return
    }

    return arr.slice(0,n)
}

console.log(first([7, 9, 0, -2]));

console.log(first([],3));

console.log(first([7, 9, 0, -2],3));

console.log(first([7, 9, 0, -2],6));

console.log(first([7, 9, 0, -2],-3));