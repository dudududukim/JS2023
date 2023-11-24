const elements = document.querySelectorAll("*");

for(let element of elements){
    element.addEventListener("click", (e)=>{
        console.log(`
        event Target = ${e.target.tagName},
        event currentTarget = ${e.currentTarget.tagName}
        `)
    },true)
}