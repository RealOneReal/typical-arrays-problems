
exports.min = function min (array) {
 if(array.length == 0) {
   return 0;
}else {
  array.sort((a,b) => (a-b));
  return array[0];
 }
}

exports.max = function max (array) {
  if(array.length === 0) return 0;
  array.sort((a,b) => (b-a));
  return array[0];
}

exports.avg = function avg (array) {
  if(array.length === 0) return 0;
  let sumArray = array.reduce((sum,current) => sum + current);

  return sumArray/(array.length);
}
