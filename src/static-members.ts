export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'Atsushi';
  static lastName: string = 'Ishida';

  static work() {
    return `Hey, guys! This is ${this.firstName}! Are you intersted in TypeScript? Lets dive into TypeScript!`;
  }
}
console.log(Me.isProgrammer);
console.log(Me.work());
