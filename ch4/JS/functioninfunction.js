function hello(){
    return "hello";
}
function bye(){
    return "bye";
}

function user(name, fn){
    console.log(`${name}`, fn());
}

user("김두현", hello);


let sum = ()=>{
    return function(a,b){
        return a+b;
    }
}

console.log(`sum = ${sum()}`);
console.log(`sum = ${sum()(1,2)}`);

const array = ["kim", "park", "lee"];
console.log(array);
console.log(...array);


function addnum(...number){
    let sum = 0;
    for(num of number){
        sum += num;
    }
    return sum;
}

let reuslt = addnum(1,2,3,4,5,6,7);
console.log(reuslt);