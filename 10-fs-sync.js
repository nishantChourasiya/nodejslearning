const fs = require('fs');

//readfile synchronusly
const first = fs.readFileSync('./folder/first.txt', 'utf-8');
const second = fs.readFileSync('./folder/second.txt', 'utf-8');

console.log(first, second);


//writefile synchronusly
const writeToFile = fs.writeFileSync('./folder/subfolder/file.txt', `${first}, ${second}`, {flag: 'a'});