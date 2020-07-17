var i = 1;
try {
  i = i * j; // 例外発生(j is not defined)
} catch (e) {
  console.log(e.message);
} finally {
  console.log("処理は完了しました。");
}
