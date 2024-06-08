// Function to calculate the difference in days between two dates
function getDifferenceInDays(date1, date2) {
    const oneDay = 24 * 60 * 60 * 1000; // Milliseconds in one day
    const diffInTime = Math.abs(date2 - date1);
    return Math.floor(diffInTime / oneDay);
}

// Function to display the appropriate message in the sidebar content area
function displayVisitMessage() {
    const sidebarContent = document.getElementById('sidebar-content');
    const lastVisit = localStorage.getItem('lastVisit');
    const currentVisit = new Date();

    if (!lastVisit) {
        // First visit
        sidebarContent.innerText = "Welcome! Let us know if you have any questions.";
    } else {
        const lastVisitDate = new Date(lastVisit);
        const diffInDays = getDifferenceInDays(lastVisitDate, currentVisit);

        if (diffInDays === 0) {
            sidebarContent.innerText = "Back so soon! Awesome!";
        } else if (diffInDays === 1) {
            sidebarContent.innerText = `You last visited 1 day ago.`;
        } else {
            sidebarContent.innerText = `You last visited ${diffInDays} days ago.`;
        }
    }

    // Update the last visit date in localStorage
    localStorage.setItem('lastVisit', currentVisit.toISOString());
}

// Call the function to display the message
displayVisitMessage();