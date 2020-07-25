function* myGenerator() {
  yield "あいうえお";
  yield "かくきけこ";
  yield "さしすせそ";
}

for (let t of myGenerator()) {
  console.log(t);
}
