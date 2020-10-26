import { encode, Float32, Int32, TypedArr, TypedObj } from './src/index';

const data = {
  v: 0,
  t: 2,
  vm: [0.1, 0.2],
};

const type = TypedObj({
  v: Int32,
  t: Int32,
  vm: TypedArr(Float32),
});

console.log(encode(data, type));
