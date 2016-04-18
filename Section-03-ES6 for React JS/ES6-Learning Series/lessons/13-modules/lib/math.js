export function sum(x, y) {
  return x + y;
}
export var pi = 3.141593;

export const sqrt = Math.sqrt;
export function square(x) {
    return x * x;
}
export function diag(x, y) {
    return sqrt(square(x) + square(y));
}

// export {sum,diag};