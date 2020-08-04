function asyncProcess(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 引数valueが未定義であるかどうかによって成否を判定
      if (value) {
        resolve(`入力値：${value}`);
      } else {
        reject(`入力は空です`);
      }
    }, 500);
  });
}

// 初回のasyncProcess関数呼び出し
asyncProcess("トクジロウ")
  .then((response) => {
    console.log(response);
    // 初回の実行に成功したら、2回目のasyncProcess関数を実行
    return asyncProcess("ニンサブロウ");
  })
  .then(
    // 成功した時に実行される処理
    (response) => {
      console.log(response);
    },
    // 失敗した時に実行される処理
    (error) => {
      console.log(`エラー：${error}`);
    }
  );
