// コンストラクター（base／heightプロパティの定義）
var MyArea = function (base, height) {
  this.base = base;
  this.height = height;
};

// getTriangle／getSquareメソッドを定義
MyArea.prototype = {
  getTriangle: function () {
    return (this.base * this.height) / 2;
  },
  getSquare: function () {
    return this.base * this.height;
  },
};
