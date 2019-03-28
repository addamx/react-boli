export const cn = function(...args) {
  return Object.assign({}, ...args);
};

export function invariant(condition, message) {
  if (condition) return;
  const error = new Error(`${message}`);
  error.framesToPop = 1;
  error.name = 'Invariant Violation';
  throw error;
}
