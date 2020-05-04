export {};

// <T>は抽象的な型(stirngも入るしnumberも入る)
// 慣例的に<T>と記述される
const echo = <T>(arg: T): T => {
  return arg;
};
console.log(echo<number>(100));
console.log(echo<string>('Hello'));
console.log(echo<boolean>(true));

class Mirror<T> {
  constructor(public value: T) {}
  echo(): T {
    return this.value;
  }
}
console.log(new Mirror<number>(123).echo());
console.log(new Mirror<string>('Hello, generics').echo());
