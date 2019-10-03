

const myConverter = require('./converter')

console.log('original:' + process.argv[2]);
console.log(myConverter.convertHextoRGB(process.argv[2]));
