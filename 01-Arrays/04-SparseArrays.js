'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the matchingStrings function below.
function matchingStrings(strings, queries) {

    let set = new Map();
    for(let i=0;i<strings.length;i++){
        if(!set.has(strings[i])){
            set.set(strings[i],1);
        } else {
            let count = set.get(strings[i]);
            set.set(strings[i],++count);
        }
    }

    let arr = [queries.length];
    let count = 0;
    for(let query of queries){
      if(set.has(query)){
        arr[count++] = set.get(query);
      } else {
        arr[count++] = 0;
      }
    }
    return arr;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const stringsCount = parseInt(readLine(), 10);

    let strings = [];

    for (let i = 0; i < stringsCount; i++) {
        const stringsItem = readLine();
        strings.push(stringsItem);
    }

    const queriesCount = parseInt(readLine(), 10);

    let queries = [];

    for (let i = 0; i < queriesCount; i++) {
        const queriesItem = readLine();
        queries.push(queriesItem);
    }

    let res = matchingStrings(strings, queries);

    ws.write(res.join("\n") + "\n");

    ws.end();
}
