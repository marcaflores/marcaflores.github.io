document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page refresh

    // Collect input values
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const dob = document.getElementById('dob').value;

    // Validation: Check if all fields are filled
    if (!firstName || !lastName || !email || !password || !dob) {
        displayMessage(' All fields must be filled out.', false);
        return;
    }

    // Validation: Password must contain BOTH '!' and '?'
    if (!(password.includes('!') && password.includes('?'))) {
        displayMessage(' Password must contain both "!" and "?".', false);
        return;
    }

    // Create user object
    const user = {
        firstName,
        lastName,
        email,
        password: '*'.repeat(password.length), // Replace password with asterisks
        dob
    };

    // Display the result
    displayMessage(` Registration Successful!<br>
        <strong>First Name:</strong> ${user.firstName}<br>
        <strong>Last Name:</strong> ${user.lastName}<br>
        <strong>Email:</strong> ${user.email}<br>
        <strong>Password:</strong> ${user.password}<br>
        <strong>Date of Birth:</strong> ${user.dob}`, true);
});

// Function to display success or error message
function displayMessage(message, isSuccess) {
    const output = document.getElementById('output');
    output.innerHTML = `<div class="alert ${isSuccess ? 'alert-success' : 'alert-danger'}">${message}</div>`;
}