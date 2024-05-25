const fs = require('fs');


fs.open('file.txt', 'w', (err) => {
    if (err) {
        throw 'error';
    }

    fs.appendFile('file.txt', 'what a beautiful world', (err) => {
        if (err) {
            throw err;
        }

        fs.readFile('file.txt', (err, data) => {
            if (err) {
                throw 'not';
            }
            const fileContent = data.toString();
            console.log(fileContent);

            countLetters(fileContent);
        });
    });
});

function countLetters(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        count++;
    }
    console.log(count);
}

