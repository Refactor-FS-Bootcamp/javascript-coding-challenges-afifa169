function postiveNum(num) {
  let n1 = num.filter((n) => n > 0);
  return n1;
}
num = [-5, -3, -1, 1, 5, 8];
console.log(postiveNum(num));
