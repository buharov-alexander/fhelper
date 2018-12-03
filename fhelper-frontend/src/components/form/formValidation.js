export const required = value => (value ? undefined : 'Required');
export const isNumber = value =>
  (value && !isNaN(parseFloat(value)) && isFinite(value)
    ? undefined : 'Invalid number');