// function fucn1(a=10, b =20, c=10 ){
//     return a+b*c;
// }


function calSum(n){
    let result=0;
    for(let i =1; i<=n; i++){
        result += i;
    }
    return result;
}

let num = parseInt(prompt("sum to what?"));
let result = calSum(num);
document.write(`form 1 to ${num} is ${result}`);

(function(a,b){
    let sum = 0;
    sum = a+b;
    return sum;
}(10,20));


let sum = (a,b) => a+b;
console.log(sum(1,2));