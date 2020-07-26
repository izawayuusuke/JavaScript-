class MyIterator {
  // 引数経由で渡された配列をdataプロパティに設定
  constructor(data) {
    this.data = data;
    this[Symbol.iterator] = function* () {
      let current = 0;
      let that = this;
      while (current < that.data.length) {
        yield that.data[current++];
      }
    };
  }
}

let itr = new MyIterator(["one", "two", "three"]);
for (let value of itr) {
  console.log(value);
}
