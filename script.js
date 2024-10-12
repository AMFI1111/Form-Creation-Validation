// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {

    // Select the form and feedback div elements
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    // Add an event listener for the form submission
    form.addEventListener('submit', function (event) {
        // Prevent the form from submitting to the server
        event.preventDefault();

        // Retrieve and trim user input values
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Initialize validation status and messages array
        let isValid = true;
        let messages = [];

        // Username validation (must be at least 3 characters)
        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        // Email validation (must contain "@" and ".")
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push("Please enter a valid email address.");
        }

        // Password validation (must be at least 8 characters)
        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }

        // Make the feedback div visible
        feedbackDiv.style.display = "block";

        // Display the result
        if (isValid) {
            // If all fields are valid, show success message
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745"; // Green
        } else {
            // If any field is invalid, show error messages
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = "#dc3545"; // Red
        }
    });
});
