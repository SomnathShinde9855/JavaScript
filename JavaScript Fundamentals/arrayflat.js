let arr = [1, 2, 3, [4, 5, 6, 7, [7, 8, 9, [1, 4, 5, 6]]]];

function flatArr(arr) {
  return arr.reduce(
    (arr, value) =>
      Array.isArray(value) ? arr.concat(flatArr(value)) : arr.concat(value),
    []
  );
}
console.log(flatArr(arr));

let obj = {};

obj.prototype.name = "soma";
