export {};

namespace Japanese {
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) {}
    }
  }
  export namespace Osaka {
    export class Person {
      constructor(public name: string) {}
    }
  }
}
namespace English {
  class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {}
  }
}
const me = new Japanese.Tokyo.Person('Ham');
console.log(me.name);
// const me2 = new English.Person('Ham'); // Error!! exportしないと外部から参照できない
