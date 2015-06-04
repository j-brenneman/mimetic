module.exports = function (input) {
  var url_string = input;
  var url_object = {};
  if (url_string === null) {
    return url_object;
  } else {
  var url_array = url_string.replace("?", "");
      url_array = url_array.split("&");
  for(i = 0; i < url_array.length; i ++) {
      var url_keys = url_array[i].split("=");
      url_object[url_keys[0]] = url_keys[1];
  }
  return url_object;
  }
};
