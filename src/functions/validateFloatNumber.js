const validateFloatNumber = (input) => {
  const num = parseFloat(input);
  return !isNaN(num) && input == num;
};

export default validateFloatNumber;
