const btn = document.querySelector("button");
let selectedIndex;
let 

btn.onclick = ()=>{
    selectedIndex = document.querySelector("#major").options.selectedIndex;
    if(selectedIndex != 0){
        alert(`${document.querySelector("#major").options[selectedIndex].textContent}is your major \n ${}`);
    }else{
        alert("please select your major");
    }
}