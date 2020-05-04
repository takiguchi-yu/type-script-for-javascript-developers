export {};

let name: any = 'Ham';

// 型アサーション
let length1: number = name.length;
let length2 = name.length as number;
let length3 = (name as string).length;
let length4 = (<string>name).length; // 非推奨(JSXと相性が悪いため)
