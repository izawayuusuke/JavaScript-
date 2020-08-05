// コンストラクター（base／heightプロパティの定義）
var  = function (base, height) {
  this.base = base;
  this.height = height;
};

// getTriangle／getSquareメソッドを定義
.prototype = {
  getTriangle: function () {
    return (this.base * this.height) / 2;
  },
  getSquare: function () {
    return this.base * this.height;
  },
};
