



module.exports = function towelSort (matrix) {
  let b = matrix;
  if (b === undefined) {
    return [];
  }
  if (b.length === 0) {
    return [];
  }

if (b.length > 0) {
b.reduce((acc, cur, i) => {
  return acc.concat((!(i % 2) ? cur : cur.reverse()));
});
return b.flat();
  }
}
