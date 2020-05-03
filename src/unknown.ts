export {};

const kansu = (): number => 43;

let numberAny: any = kansu();
let numberUnknown: unknown = kansu();

let sumAny = numberAny + 7;
if (typeof numberUnknown === 'number') {
  let sumUnknown = numberUnknown + 7;
}
