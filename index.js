

const myConverter = require('./converter')
let b = null;
let g = null;
let r = null;
console.log('original:' + process.argv[2]);
const output = {};

myConverter.convertHextoRGB(process.argv[2]);

console.log('r is:' + myConverter.r );

let runFunction = myConverter.convertHextoRGB(process.argv[2]);

console.log('r is:' + runFunction.r );
console.log('g is:' + runFunction.g );
console.log('b is:' + runFunction.b );

// console.log('rgb( ' + r + "," + g + "," + b + ' )');

// console.log(myConverter.convertHextoRGB(process.argv[2]));
// let myOutput= myConverter.convertHextoRGB(process.argv[2]);
// console.log(myOutput);
// color the output
console.log(`\x1b[38;2;${runFunction.r};${runFunction.g};${runFunction.b}m%s\x1b[0m`, process.argv[2]);