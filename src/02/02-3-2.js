var objectOne = { one: 1, two: 2, other: 0 };
var objectTwo = { three: 3, four: 4, other: -1 };
// var combined = {
//   one: objectOne.one,
//   two: objectOne.two,
//   three: objectTwo.three,
//   four: objectTwo.four,
// };
// var combined = Object.assign({}, objectOne, objectTwo);
var combined = {
  ...objectOne,
  ...objectTwo,
};
// var combined = Object.assign({}, objectTwo, objectOne);
var combined = {
  ...objectTwo,
  ...objectOne,
};
// var others = Object.assign({}, combined);
var { other, ...others } = combined;
// delete others.other;
