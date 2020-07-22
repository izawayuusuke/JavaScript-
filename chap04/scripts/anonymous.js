// 高階関数arrayWalkを定義
function arrayWalk(data, f) {
  for (var key in data) {
    f(data[key], key);
  }
}

var ary = [1, 2, 4, 8, 16];
arrayWalk(ary, function (value, key) {
  console.log(key + ":" + value);
});
