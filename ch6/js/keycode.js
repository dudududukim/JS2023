const result = document.querySelector('#result');

document.body.addEventListener('keydown', (e) => {
    result.innerText = `${e.key}`;
    console.log('pressed');
});
