export const sum = (a, b) => a + b;
export const sub = (a, b) => a - b;
export const mul = (a, b) => a * b;
export const div = (a, b) => { if (b != 0) return a / b; throw new Error('Division by zero') }
