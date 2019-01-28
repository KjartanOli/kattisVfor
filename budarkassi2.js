const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/*
rl.on("line", (line) => {
    let n = line.split(" ")[0];
    let k = line.split(" ")[1];
    console.log(n * k);
});
*/

rl.on("line", (line) => {
    let input = line.split(" ");
    let n = input[0];
    let k = input[1];
    console.log(n * k);
});