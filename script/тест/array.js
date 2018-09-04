

if ([].indexOf) {

  var find = function(array, value) {
    return array.indexOf(value);
  }

} else {
  var find = function(array, value) {
    for (var i = 0; i < array.length; i++) {
      if (array[i] === value) return i;
    }

    return -1;
  }

}