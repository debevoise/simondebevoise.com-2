const area = document.getElementById('typing-area')




const words = document.getElementById('text-display');



// Info box \\
const info = document.getElementById('info-box');

function startTimer(time=60) {

}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    return `${minutes}:${seconds}`
}



// Input \\
const input = document.getElementById('input-field');

input.addEventListener('keydown', handleInput);

function handleInput(e) {

}

const redo = document.getElementById('redo-button');


function validSpelling(test, input) {
    const regex = `\\b${test}[a-z]*`;
    return !!input.match(regex)
}

function handleInput(e) {

}



