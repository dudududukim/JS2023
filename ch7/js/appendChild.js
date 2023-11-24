const p1 = document.querySelectorAll('p')[2];

p1.addEventListener('click', (e) => {
    let attri = document.createAttribute('style');
    attri.value = 'background-color:powderblue;';
    p1.setAttributeNode(attri);
});
