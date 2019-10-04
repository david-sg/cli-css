module.exports.convertHextoRGB= function(hex){
// take in hex 
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  console.log('result:' + result);
    r = parseInt(result[1], 16);
    g = parseInt(result[2], 16);
    b = parseInt(result[3], 16);
console.log('rgb( ' + r + "," + g + "," + b + ' )');

output = {r:r, g:g,b:b};
return output;

}
