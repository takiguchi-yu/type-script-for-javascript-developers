export {};

class Mahotsukai {}
class Souryo {}
// class Taro extends Mahotsukai, Souryo {} // Error!! 多重継承はエラーになる

// インターフェース
interface Kenja {
  ionazun(): void;
}
interface Senshi {
  kougeki(): void;
}
// インターフェースなら複数クラスを継承できる（正確には実装するという）
class Jiro implements Kenja, Senshi {
  ionazun(): void {
    console.log('ionazun');
  }
  kougeki(): void {
    console.log('kougeki');
  }
}
const jiro = new Jiro();
jiro.ionazun();
jiro.kougeki();
