export const isValidNumber = (value: string): boolean => {
    const num = Number(value);
    return !isNaN(num) && num >= 0;
  };
  
  export const parseInputValue = (value: string, fallback: number = 0): number => {
    if (!value || !isValidNumber(value)) return fallback;
    return Number(value);
  };