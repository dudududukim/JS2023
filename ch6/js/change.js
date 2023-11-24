const btn = document.querySelector('button');

const colorChange = () => {
    document.body.style.backgroundColor = "green";
};

// btn.onclick = colorChange;

btn.addEventListener("click", colorChange);