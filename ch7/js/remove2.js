const removers = document.querySelectorAll("p > span");

for(let remover of removers){
    remover.addEventListener("click", function(){
        this.parentNode.remove();
    })
}