const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');

document.getElementById('registrationForm').addEventListener('submit', function(event) {
  // Prevent form submission until validation is done
  event.preventDefault();

  let valid = true;

  // Username validation
  if (username.value.trim() === "") {
      showError(username, "Username is required");
      valid = false;
  } else {
      clearError(username);
  }

  // Email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email.value.trim())) {
      showError(email, "Please enter a valid email");
      valid = false;
  } else {
      clearError(email);
  }

  // Password validation (minimum 6 characters)
  if (password.value.trim().length < 6) {
      showError(password, "Password must be at least 6 characters");
      valid = false;
  } else {
      clearError(password);
  }

  // If valid, submit the form
  if (valid) {
      this.submit();
  }
});

function showError(input, message) {
  const formGroup = input.parentElement;
  const small = formGroup.querySelector('small');
  small.innerText = message;
  small.style.display = 'block';
  input.style.borderColor = 'red';
}

function clearError(input) {
  const formGroup = input.parentElement;
  const small = formGroup.querySelector('small');
  small.innerText = "";
  small.style.display = 'none';
  input.style.borderColor = '#ddd';
}
