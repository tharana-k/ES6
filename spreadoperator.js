const numbersone = [1,2,3];
const numberstwo = [4,5,6];
const numberscombined = [...numbersone,...numberstwo];
console.log(numberscombined);
let obj = {
a:2,b:3,c:"hello",
}
let obj2 = {...obj}
console.log(obj2);
