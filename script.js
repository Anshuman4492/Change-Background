const red = document.getElementById('r');
const green = document.getElementById('g');
const blue = document.getElementById('b');
const button = document.getElementById('btn');
const colorname = document.getElementById('color-name');
const body = document.body;
button.addEventListener('click', bgchanger);

function bgchanger() {
    const r = (red.value === '') ? random() : red.value;
    const g = (blue.value === '') ? random() : blue.value;
    const b = (green.value === '') ? random() : green.value;
    var a = (Math.random() * 1).toFixed(1);
    if (r === '0' && g === '0' && b === '0') {
        a = 0;
        body.style.textDecorationColor = 'white';
    }
    console.log(r, g, b, a);
    const colorstring = `rgba(${r},${g},${b},${a})`;
    body.style.background = colorstring;
    colorname.innerText = colorstring;
}

function random() {
    return Math.floor(Math.random() * 256);
}