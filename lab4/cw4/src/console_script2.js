import fs from 'fs-extra';
import { argv } from 'node:process';

const counterFilePath = './counter.txt';

if (!fs.existsSync(counterFilePath)) {
  fs.writeFileSync(counterFilePath, '1');
}

let itr;

function read_sync() {
  let data = fs.readFileSync(counterFilePath, 'utf-8');
  itr = parseInt(data.trim()) + 1;
  console.log(`Liczba wywołań ${itr}`)
  saveCounter();
}

function read_async() {
  fs.readFile(counterFilePath, 'utf-8', (err, data) => {
    if (err) throw err;
    itr = parseInt(data.trim()) + 1;
    console.log(`Liczba wywołań ${itr}`)
    saveCounter();
  });
}

function saveCounter() {
  fs.writeFile(counterFilePath, itr.toString());
}

function executeCommands(){
    
}

console.clear();

if (!argv[2]) {
    executeCommands();
} else if (argv[2] === '--async') {
    read_async();
} else if (argv[2] === '--sync') {
    read_sync();
} else {
    console.log("nieznana komenda")
}