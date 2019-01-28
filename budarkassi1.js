//Virkar ekki

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getSum(total, num){
    return total + num;
}

let lines;
let ans = [];
let count = 0;
rl.on("line", (line) => {
    if(!lines){
        lines = line;
    }
    else {
        ans.push(parseInt(line));
        count++;
        if (count === lines){
            console.log(ans.reduce(getSum))
        }
    }
});