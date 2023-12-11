function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiplies(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}
function increment(n){
    return n+1;
}
function decrement(n){
    return n-1;
}
function makeInt(n){
    return parseInt(n,10)
}
function preserveDecimal(n){
    return parseFloat(n,10)
}


const num1 = 31;
const num2 = 2;
const multiply = num1 * num2;
console.log(multiply); 

const random = Math.floor(Math.random()*10) + 1;
console.log(random);

const num3 = 14;
const num4 = 5;
const mod = (num3 % num4);
console.log(mod)

const max = Math.max(12,13,14,15,16,17,18,19,20)
console.log(max);