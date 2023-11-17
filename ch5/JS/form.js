let btn = document.querySelector("button");
let value;
let number;
btn.onclick = () => {
    value = document.querySelector("#product").value;
    //form의 id요소로 접근하는 방법
    number = document.querySelector("#prod-num").value;
    document.querySelector("#product").textContent = "";
    document.querySelector("#prod-num").textContent = "";
}