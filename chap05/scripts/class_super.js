class Member {
  // コンストラクター
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // メソッド
  getName() {
    return this.lastName + " " + this.firstName;
  }
}

// Memberオブジェクトを継承したBusinessMemberクラスを定義
class BusinessMember extends Member {
  // 引数clazz(役職)を追加
  constructor(firstName, lastName, clazz) {
    super(firstName, lastName);
    this.clazz = clazz;
  }

  // 役職込みの名前を返すよう修正
  getName() {
    return super.getName() + "／役職：" + this.clazz;
  }
}

let bm = new BusinessMember("太郎", "山田", "課長");
console.log(bm.getName());
