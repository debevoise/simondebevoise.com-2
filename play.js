import words from 'words.js';

export function TypeTest(time=60) {
    const rows = [];
    let over = false;
    setTimeout(() => {  
        over = true;
    }, time)

    for (let i = 0; i < 6; i++) {
        rows.push(words.constructRow())
    }

    while (!over) {
        
    }
}