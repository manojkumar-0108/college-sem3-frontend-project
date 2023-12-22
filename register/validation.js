
document.getElementById('registerForm').addEventListener('submit', function(event) {
    const fullname = document.getElementById('fullname').value;
    const contact = document.getElementById('contact').value;
    const dob = document.getElementById('dob').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const gender = document.getElementById('gender').value;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    const isPasswordValid = passwordRegex.test(password);
    const phoneRegex = /^\d{10}$/;
    const isPhoneValid = phoneRegex.test(contact);
    const emailRegex = /\S+@\S+\.\S+/;
    const isEmailValid = emailRegex.test(email);

    if (!isPasswordValid) {
        alert("Password must contain at least 8 characters, including uppercase, lowercase letters, and numbers.");
        event.preventDefault();
    }

    if (!isPhoneValid) {
        alert("Please enter a valid 10-digit phone number.");
        event.preventDefault();
    }

    if (!isEmailValid) {
        alert("Please enter a valid email address.");
        event.preventDefault();
    }

    if(isPasswordValid && isEmailValid && isPhoneValid){
        alert("You have successfully registered with : "+email)
    }
});

const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

togglePassword.addEventListener('click', function (e) {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);

    this.textContent = type === 'password' ? 'Show' : 'Hide';
});
