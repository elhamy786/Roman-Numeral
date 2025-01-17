function convertToRoman(num) {
  const romanNumerals = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1],
  ];

  let result = '';

  romanNumerals.forEach(([roman, value]) => {
    while (num >= value) {
      result += roman;
      num -= value;
    }
  });

  return result;
}

function checkNumber(num) {
  // Your implementation for checking the number
  return `Number is: ${num}`;
}

document.getElementById('convert-btn').addEventListener('click', () => {
  const number = document.getElementById('number').value;
  const output = document.getElementById('output');
  const checkerOutput = document.getElementById('checker-output');

  if (number === '') {
    output.textContent = 'Please enter a valid number';
    checkerOutput.textContent = 'Please enter a valid number';
    return;
  }

  const num = parseInt(number, 10);

  if (num < 1) {
    output.textContent = 'Please enter a number greater than or equal to 1';
    checkerOutput.textContent = 'Please enter a number greater than or equal to 1';
    return;
  }

  if (num >= 4000) {
    output.textContent = 'Please enter a number less than or equal to 3999';
    checkerOutput.textContent = 'Please enter a number less than or equal to 3999';
    return;
  }

  output.textContent = convertToRoman(num);
  checkerOutput.textContent = checkNumber(num);
});