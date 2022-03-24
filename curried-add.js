const curriedAdd = (x) => {
  if (x === undefined) return 0;
  const addNext = (y) => {
    if (y === undefined) return (x);
    x += y;
    return addNext;
  }
  return addNext;
}


module.exports = { curriedAdd };
