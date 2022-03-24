function curriedAdd(total) {
  if (total === undefined) return 0;
  return function addNext(num) {
    if (!num) return total;
    total += num;
    return addNext;
  }
}

module.exports = { curriedAdd };
