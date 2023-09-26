function sum(...numbers){
    let result=0;
    for(let i = 0;i<numbers.length;i++){
        result+=numbers[i];
    }
    return result;
}

console.log(sum(1,2,3));
console.log(sum(4,5,6,7));
console.log(sum(10));
console.log(sum());