exports.min = function min(array) {
  var result = 0;
  if (Array.isArray(array)) {
    for (var i = 0; i < array.length; i++) {
      if (array[i] < result)
        result = array[i];
    }
  }
  return result;
}

exports.max = function max(array) {
  var result = 0;
  if (Array.isArray(array)) {
    for (var i = 0; i < array.length; i++) {
      if (array[i] > result) 
        result = array[i];
    }
  }
  return result;
}

exports.avg = function avg(array) {
  var result = 0;
  if (Array.isArray(array) && array.length > 0) {
    for (var i = 0; i < array.length; i++) {
      result += array[i];
    }
    result /= array.length;
  }
  return result;
}
