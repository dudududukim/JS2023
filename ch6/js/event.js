const box = document.querySelector("#box");
const body = document.body;
const result = document.querySelector("#result");

box.addEventListener("click", (e)=>{
    alert(`${e.pageX}, ${e.pageY}`);
})

body.addEventListener("keydown", (e)=>{
    result.textContent = `
    code : ${e.code}
    key: ${e.key}
    `
})