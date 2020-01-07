export function decline(number, one, some = one, many = one) {
  const centMod = number % 100;
  if (centMod >= 11 && centMod <= 19) {
    return many;
  }
  const decMod = centMod % 10;
  if (decMod === 1) {
    return one;
  } else if (decMod >= 2 && decMod <= 4) {
    return some;
  }
  return many;
};
