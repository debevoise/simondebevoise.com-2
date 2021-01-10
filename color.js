const root = document.documentElement;

const COLORS = [
    'background-color',
    'accent-color',
    'text-color',
    'highlight-color',
]

const THEMES = {
    "original" : {
        'background-color':     "#000000",
        'accent-color':         "#ff69b4",
        'text-color':           "#fd9800",
        'highlight-color':      "#800080",
    },
    "tropical": {
        'background-color':     "#6a9e67",
        'accent-color':         "#18c0b8",
        'text-color':           "#ea9c3f",
        'highlight-color':      "#297a5d",
    },    
    "evergreen": {
        'background-color':     "#324036",
        'accent-color':         "#6e82fb",
        'text-color':           "#adffbb",
        'highlight-color':      "#795299",
    },
    "neon": {
        "background-color": "#7128fd",
        "accent-color": "#77bf5e",
        "text-color": "#ca28c8",
        "highlight-color": "#a944db",
    },
    "missed it": {
        "background-color": "#240a46",
        "accent-color": "#26466c",
        "text-color": "#ed5cb2",
        "highlight-color": "#3a539d",
    }
}

const currentTheme = "evergreen";
const themeColors = THEMES[currentTheme];


function setColor(name, value) {
    const cssVar = `--${name}`;
    root.style.setProperty(cssVar, value);
    console.log(`"${name}": "${value}",`)
    localStorage.setItem(name, value);
}

function randomize() {
    const theme = COLORS.reduce((acc, color) => ({ ...acc, [color]: randomColor() }), {})
    setColorsToTheme(theme);
}

function randomColor() {
    const color = '#' + Math.floor(Math.random()*16777215).toString(16);
    return color.length === 7 ? color : randomColor();
}

function reset() {
    COLORS.forEach(color => setColor(color, themeColors[color]));
}

function getUserColor(color) {
    return localStorage.getItem(color) || themeColors[color];
}

function setTheme(theme) {
    localStorage.setItem("theme", theme);
}

function getTheme() {
    return localStorage.getItem("theme"); 
}

function setColorsToTheme(theme) {
    Object.entries(theme).forEach(ent => setColor(...ent));
}

function generateThemeButtons() {
    const randomButton = document.getElementById("random-button");
    const buttonBar = document.getElementById("color-buttons")

    for (const themeName in THEMES) {
        const div = document.createElement("div")
        div.innerText = themeName;
        div.addEventListener('click', () => setColorsToTheme(THEMES[themeName]));
        buttonBar.insertBefore(div, randomButton.nextSibling);
    }
}

function main() {
    // Load the homies up with a hot new color scheme
    const updatedTheme = getTheme() != currentTheme;
    if (updatedTheme) setTheme(currentTheme);

    // Initialize event handlers
    COLORS.forEach(color => {
        // Set to new theme or value in local storage 
        setColor(color, updatedTheme ? themeColors[color] : getUserColor(color))
        const div = document.getElementById(color);
        div.addEventListener("click", () => setColor(color, randomColor()));
    })
    
    // Initialize buttons
    const resetButton = document.getElementById('reset-button');
    resetButton.addEventListener("click", reset);
    
    const randomButton = document.getElementById('random-button');
    randomButton.addEventListener("click", randomize);

    generateThemeButtons()
}

// Run the program (add DOMContentLoaded?)
main();

