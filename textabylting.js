// Virkar ekki

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let longest = 0;
let array = [];
rl.on("line", (line) => {
    for (let i = 0; i < line; i++){
        rl.on("line", (line) => {
            array.push(line);
            if (line.length > longest){
                longest = line.length
            }
        });
    }
    for (let i = 0; i < array.length; i++){
        let output = "";
        for (let x = 0; x < longest; x++){
            if (x >= array[i].length){
                output = output + " ";
                console.log(output)
            }
            else {
                output = output + array[i][x];
                console.log(output)
            }
        }
        output = "";
    }
});
