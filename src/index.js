
exports.min = function min (array) {
  return array && array.length ? array.reduce(function (p, v) {
    return ( p < v ? p : v );
  }) : 0;
}

exports.max = function max (array) {
  return array && array.length ? array.reduce(function (p, v) {
    return ( p > v ? p : v );
  }) : 0;
}

exports.avg = function avg (array) {
  return array && array.length ? array.reduce((a, b) => a + b) / array.length : 0;
}
