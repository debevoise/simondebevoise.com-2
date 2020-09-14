const root = document.documentElement;
const cookie = "foo=bar";
document.cookie = cookie;


const colors = [
    'background-color',
    'accent-color',
    'text-color',
    'highlight-color'
]

const defaults = {
    'background-color':     "#000000",
    'accent-color':         "#ff69b4",
    'text-color':           "#800080",
    'highlight-color':      "#fd9800",
}

function setColor(name, value, cookie=true) {
    const cssVar = `--${name}`;
    root.style.setProperty(cssVar, value);
    if (cookie) localStorage.setItem(name, value);
}

function randomize() {
    colors.forEach(color => { 
        const rand = randomColor();
        setColor(color, rand);
    })
}

function randomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}

function reset() {
    colors.forEach(color => setColor(color, defaults[color]))
}

function getUserColor(color) {
    return localStorage.getItem(color) || defaults[color];
}

function main() {
    // Initialize event handlers
    colors.forEach(color => {
        // Set from local storage
        setColor(color, getUserColor(color));

        const div = document.getElementById(color);
        div.addEventListener("click", () => setColor(color, randomColor()));
    })

    
    // Initialize buttons
    const resetButton = document.getElementById('reset-button');
    resetButton.addEventListener("click", reset);
    
    const randomButton = document.getElementById('random-button');
    randomButton.addEventListener("click", randomize);
}

// Run the program (add DOMContentLoaded?)
main();

