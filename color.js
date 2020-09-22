const root = document.documentElement;

const colors = [
    'background-color',
    'accent-color',
    'text-color',
    'highlight-color'
]

const defaults = {
    'background-color':     "#000000",
    'accent-color':         "#ff69b4",
    'text-color':           "#fd9800",
    'highlight-color':      "#800080",
}

function setColor(name, value, store=true) {
    const cssVar = `--${name}`;
    root.style.setProperty(cssVar, value);
    if (store)  localStorage.setItem(name, value);
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

