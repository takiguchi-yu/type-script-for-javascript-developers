export {};

// * owner
//   * 初期化時に設定できる。
//   * 途中で変更できない。
//   * 参照できる。
// * secretNumber
//   * 初期化時に設定できる。
//   * 途中で変更できる。
//   * 参照できない。
class MyNumberCard {
  constructor(private _owner: string, private _secretNumber: number) {}

  get owner() {
    return this._owner;
  }

  set secretNumber(value: number) {
    this._secretNumber = value;
  }
  get secretNumber() {
    return this._secretNumber;
  }
}
let card = new MyNumberCard('Ham', 1234567890);
card.secretNumber = 1111111111;
console.log(card.secretNumber);
