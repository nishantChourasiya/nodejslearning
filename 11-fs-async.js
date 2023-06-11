const fs = require('fs');

const first = fs.readFile('./folder/first.txt', 'utf8', (err, result)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(result);
    }
});

const second = fs.readFile('./folder/second.txt', 'utf8', (err, result)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(result);
    }
});

fs.writeFile('./folder/subfolder/file.txt',`${first}, ${second}`, (err, result)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(result);
    }
})