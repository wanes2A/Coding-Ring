function verify() {
    event.preventDefault();

    var email = document.getElementById('email').value;
    var emailError = document.getElementById('email-error');
    var emailValid = document.getElementById('email-valid');
    emailError.textContent = '';
    emailValid.textContent = ''; 
    var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$/;
    if (!regex.test(email)) {
        emailError.textContent = 'Invalid email.';
        return;
    }else{emailValid.textContent = 'Valid email.';}

    var password = document.getElementById('password').value;
    var passError = document.getElementById('pass-error');
    var passValid = document.getElementById('pass-valid');
    passError.textContent = '';
    passValid.textContent = '';
    if (password.length < 8) {
        passError.textContent = 'Password must be at least 8 characters long.';
        return;
      }
      if (!/(?=.*[a-z])/.test(password)) {
        passError.textContent = 'Password must contain at least one lowercase letter.';
        return;
      }
      if (!/(?=.*[A-Z])/.test(password)) {
        passError.textContent = 'Password must contain at least one uppercase letter.';
        return;
      }
      if (!/(?=.*\d)/.test(password)) {
        passError.textContent = 'Password must contain at least one digit.';
        return;
      }
      if (!/(?=.*[!@#$%^&*()])/.test(password)) {
        passError.textContent = 'Password must contain at least one special character (e.g., !@#$%^&*()).';
        return;
      }
      else{
        passValid.textContent = 'Valid Password.'
      }
    }