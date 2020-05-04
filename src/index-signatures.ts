export {};

interface Profile {
  underTwinty: boolean;
  [index: string]: string | number | boolean;
}
let profile: Profile = { name: 'Ham', underTwinty: false };

// How to write index signatures
// { [ index: typeForIndex ]: typeForValue }
profile.name = 'Ham';
profile.age = 43;
profile.natinality = 'Japan';
