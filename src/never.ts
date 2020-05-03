export {};

function error(message: string): never {
  throw new Error(message);
}

try {
  let result = error('test');
  console.log('未到達ロジック' + result);
} catch (error) {
  console.log({ error });
}
