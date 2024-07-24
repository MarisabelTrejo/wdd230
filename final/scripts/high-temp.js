// Get the close button and the alert container
const closeButton = document.getElementById('close-btn');
const alertContainer = document.getElementById('temperature-alert');

// Add event listener to close the alert when the close button is clicked
closeButton.addEventListener('click', () => {
    alertContainer.style.display = 'none'; // Hide the alert
});

// Function to show the alert
function showAlert(message) {
    const messageElement = document.getElementById('message');
    messageElement.textContent = message;
    alertContainer.style.display = 'block'; // Show the alert
}

// Example usage
showAlert('Temperature is too high!');