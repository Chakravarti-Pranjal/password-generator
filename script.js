function generatePassword() {
    const length = document.getElementById('length');
    const uppercase = document.getElementById('uppercase');
    const lowercase = document.getElementById('lowercase');
    const numbers = document.getElementById('numbers');
    const special = document.getElementById('special');
  
    let charset = '';
    let password = '';
  
    if (uppercase.checked) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (lowercase.checked) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (numbers.checked) charset += '0123456789';
    if (special.checked) charset += '!@#$%^&*()_+{}[]|;:<>,.?/';
  
    if (charset === '') {
      alert('Please select at least one character type.');
      return;
    }
  
    for (let i = 0; i < length.value; i++) {
      password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
  
    document.getElementById('password').value = password;
  }
  
  function copyPassword() {
    const passwordField = document.getElementById('password');
    passwordField.select();
    passwordField.setSelectionRange(0, 99999); /* For mobile devices */
    document.execCommand('copy');
    alert('Password copied to clipboard!');
  }