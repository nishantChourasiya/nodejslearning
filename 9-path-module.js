const path = require('path');

//platform specific seperator
const sep = path.sep;
console.log(sep);

//filepath using seperator
const filepath = path.join('folder', 'subfolder', 'file.txt');
console.log(filepath);

//basename
const basename = path.basename(filepath);
console.log(basename);

//resolve
const absolute = path.resolve(__dirname, 'folder', 'subfolder', 'file.txt')
console.log(absolute);