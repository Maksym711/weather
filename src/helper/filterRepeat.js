export function uniqueBy(a, cond) {  return a.filter((e, i) => a.findIndex(e2 => cond(e, e2)) === i);
}