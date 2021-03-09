
exports.min = function min (array) {
  if (!array || array.join('').length === 0) {
    return 0;
  }

  return array.reduce((accum, item) => {
    return accum > item ? item : accum; 
  });
}

exports.max = function max (array) {
  if (!array || array.join('').length === 0) {
    return 0;
  }

  return array.reduce((accum, item) => {
    return accum < item ? item : accum; 
  });
}

exports.avg = function avg (array) {
  if (!array || array.join('').length === 0) {
    return 0;
  }

  return array.reduce((accum, item) => {
    return accum + item; 
  }) / array.length;

}
