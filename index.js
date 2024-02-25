var icecreams = ["chocolate", "tiramisu", "strowbery"];
var combinations = [];
function mix(inStr) {
  for (idx in icecreams) {
    inStr = inStr.concat(icecreams[idx]);
  }
  for (idx in combinations) {
    inStr = inStr.concat(combinations[idx]);
  }
  return inStr;
}
function addIcecream(gelatino){
  icecreams.push(gelatino);
}
function getIcecreams(){
  return icecreams.concat(combinations);
}
exports.mix = mix;
exports.icecreams = icecreams;
exports.combinations = combinations;