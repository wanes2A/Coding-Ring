function verify() {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var nameError = document.getElementById('name-error');
    var nameValid = document.getElementById('name-valid');
    nameError.textContent = '';
    nameValid.textContent = '';
    var regex = /^[A-Za-z]+(?: [A-Za-z]+)*$/;
    if (!regex.test(name)) {
      nameError.textContent = 'Invalid name.';
      return;
  }else{nameValid.textContent = 'Valid name.';}

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

    var num = document.getElementById('number').value;
    var numError = document.getElementById('num-error');
    var numValid = document.getElementById('num-valid');
    numError.textContent = '';
    numValid.textContent = '';
    var regex = /^\d{8}$/;
    if (!regex.test(num)) {
      numError.textContent = 'Invalid number.';
      return;
  }else{numValid.textContent = 'Valid number.';}

    var add = document.getElementById('add').value;
    var addError = document.getElementById('add-error');
    var addValid = document.getElementById('add-valid');
    addError.textContent = '';
    addValid.textContent = '';
    if(add == ''){
      addError.textContent = 'Invalid address.';
      return;
  }else{addValid.textContent = 'Valid adress.';}

    var lang = document.getElementById('lang').value;
    var langError = document.getElementById('lang-error');
    var langValid = document.getElementById('lang-valid');
    langError.textContent = '';
    langValid.textContent = '';
    if(lang <= 0 || lang > 8 ){
      langError.textContent = 'The max to learn is 8 languages.';
      return;
  }else{langValid.textContent = 'Valid.';}
    
}