const root = document.documentElement;
const cookie = {
    
}

// const backgroundColor = document.getElementById('background-color')
// const highlightColor = document.getElementById('highlight-color')
// const accentColor = document.getElementById('accent-color')
// const textColor = document.getElementById('text-color')

const colors = [
    'background-color',
    'accent-color',
    'text-color',
    'highlight-color'
]

colors.forEach(color => {
    const colorEle = document.getElementById(color);
    colorEle.addEventListener("change", setColor);
})

function setColor(e) {
    const { id, value } = e.target;
    const cssVar = `--${id}`;
    root.style.setProperty(cssVar, value);
}

function setColorByName(name, value) {
    const cssVar = `--${name}`;
    root.style.setProperty(cssVar, value)
}

function randomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}

const randomize = () => {
    colors.forEach(color => { 
        const rand = randomColor();
        console.log(rand);
        setColorByName(color, rand);
    })
}

// window.addEventListener('DOMContentLoaded', randomize);

let redoButton = document.getElementById('redo-button')

redoButton.addEventListener('click', () => {
    redoButton.style.setProperty('background-color', randomColor())
})


