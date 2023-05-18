function array(arr1, arr2) {
  let arr3 = arr1.filter((i) => !arr2.includes(i));
  return arr3;
}
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [4, 5];
console.log(array(arr1, arr2));
