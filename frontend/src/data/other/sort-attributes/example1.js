const input = `const array = [
  {
    onClick: null,
    zzz: {
      z: 0,
      a: 1
    },
    xxx: { y: 0, b: 1 },
    aaa: 0
  },
  { x: 1, c: 2 }
];
`;

const output = `const array = [
  {
    aaa: 0,
    xxx: { b: 1, y: 0 },
    zzz: {
      a: 1,
      z: 0
    },
    onClick: null
  },
  { c: 2, x: 1 }
];
`;

export default {
  name: 'Sorts attributes in nested objects & keeps formatting',
  input,
  output
};
