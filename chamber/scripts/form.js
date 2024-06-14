// Get the hidden input element by its ID
var formLoadedTimeInput = document.getElementById('formLoadedTime');

// Set the value of the hidden input to the current date/time in milliseconds
formLoadedTimeInput.value = Date.now();