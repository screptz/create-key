// Show confirmation modal when the button is clicked
document.getElementById('createKeyBtn').addEventListener('click', function() {
    document.getElementById('confirmationModal').style.display = 'flex';
});

// Confirm the action and show loading spinner
document.getElementById('confirmBtn').addEventListener('click', function() {
    document.getElementById('confirmationModal').style.display = 'none';
    document.getElementById('loadingSpinner').style.display = 'block';  // Show spinner
    setTimeout(function() {
        window.location.href = 'https://www.example.com';  // Redirect after delay
    }, 1000);  // Delay for spinner effect
});

// Cancel the action
document.getElementById('cancelBtn').addEventListener('click', function() {
    document.getElementById('confirmationModal').style.display = 'none';
});
