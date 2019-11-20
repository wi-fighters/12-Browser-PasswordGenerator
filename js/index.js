/*
 * Global functions
 */
const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const generatePassword = (length = 20, mixedCase = true) => {
  const charset = 'abcdefghijklmnopqrstuvwxyz0123456789!§$%&/()=?#,;.:-_';
  const highestIndex = charset.length - 1;
  let password = '';

  for (var i = 0; i < length; ++i) {
    const randomIndex = getRandomNumber(0, highestIndex);
    const char =
      mixedCase && i % 3 === 0
        ? charset[randomIndex].toUpperCase()
        : charset[randomIndex];

    password += char;
  }

  return password;
}

/*
 * Form handling
 */
const output = document.getElementById('output');
const form = document.getElementById('password-form');
const fields = {
  length: document.getElementById('length'),
  mixedCases: document.getElementById('mixedCases')
};

const updatePassword = () => {
  const length = parseInt(fields.length.value, 10);
  const mixedCases = fields.mixedCases.checked;
  output.innerHTML = generatePassword(length, mixedCases);
}

updatePassword();

form.addEventListener('submit', (event) => {
  event.preventDefault();
  updatePassword();
});

Object.keys(fields).forEach((key) => {
  const field = fields[key];

  field.addEventListener('change',
    updatePassword);
});
