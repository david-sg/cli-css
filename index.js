

const myConverter = require('./converter')
let b = null;
let g = null;
let r = null;
console.log('original:' + process.argv[2]);

myConverter.convertHextoRGB(process.argv[2]);

// console.log('rgb( ' + r + "," + g + "," + b + ' )');

// console.log(myConverter.convertHextoRGB(process.argv[2]));
// let myOutput= myConverter.convertHextoRGB(process.argv[2]);
// console.log(myOutput);
// color the output
// console.log(`\x1b[38;2;${r};${g};${b}m%s\x1b[0m`, myOutput);