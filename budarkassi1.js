const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let total = 0;
rl.on("line", (line) => {
    for (let i = 0; i < line; i++){
        rl.on("line", (line) => {
            total += parseInt(line);
        });
    }
});