export {};

// 抽象クラス
abstract class Animal {
  abstract cry(): string;
}

class Lion extends Animal {
  cry() {
    return 'roar';
  }
}
// class Tiger extends Animal {}  // Error!! 抽象クラスを継承した場合、メソッドを実装しなければならない
