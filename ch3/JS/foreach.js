const names =["kim", "park", "lee"];

names.forEach(function(element){
    document.write(`${element}, `);
});


const objectforin = {
    title : "js2023",
    date: "2023-11-03",
    publisher: "dudududukim"

}
//객체 생성

for(key in objectforin){
    document.write(`<br>${key} : ${objectforin[key]} <br>`);
}

for(namename of names){
    console.log(`name is ${namename}`);
}