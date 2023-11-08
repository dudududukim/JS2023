let counter = 0;

function greeting(){
    console.log("(delay) hi");
    counter ++;
    if(counter == 5){
        clearInterval(timer);
    }
}

function greeting2(){
    console.log("(timeout) hi");
}

let timer = setInterval(greeting, 2000);
//2sec

setTimeout(greeting2, 3000);