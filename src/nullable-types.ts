export {};

let profile: { name: string; age: number | null } = {
  name: 'Ham',
  age: null,
};
// コンパイルオプションを変更することでnullも代入可能になる=>これをヌーラブルな状態という
// tsconfig.json
// "strictNullChecks": true →　false
// ただし、これは全体に適用されてしまうため、非推奨
