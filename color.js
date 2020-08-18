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

