export const strictEquals = function (a, b) {
  let result = false;
  result = Object.is(a, b);
  console.log(result);
};
