const AUTHOR = "YADAMA, Yoshihiro";

export class Member {
  // コンストラクター
  constructor(firstName, lastName) {
    Object.assign(this, { firstName, lastName });
  }

  // メソッド
  getName() {
    return this.lastName + " " + this.firstName;
  }
}

export class Area {
  static getTriangle(base, height) {
    return (base * height) / 2;
  }
}
