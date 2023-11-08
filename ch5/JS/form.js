let btn = document.querySelector("button");
let value;
let number;
btn.onclick = () => {
    value = document.querySelector("#product").value;
    number = document.querySelector("#prod-num").value;
    document.querySelector("#product").textContent = "";
    document.querySelector("#prod-num").textContent = "";
}