export {};

// シグネチャの宣言
function double(value: number): number;
function double(value: string): string;

// 実体の記述
function double(value: any): any {
  if (typeof value === 'number') {
    return value * 2;
  } else {
    return value + value;
  }
}
console.log(double(100));
console.log(double('Go '));
