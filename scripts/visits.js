document.addEventListener("DOMContentLoaded", function () {
    // 1. Check for existing counter in localStorage
    let visitCount = localStorage.getItem('visits');

    // 2. Initialize or update the counter
    if (visitCount === null) {
        visitCount = 0;
    } else {
        visitCount = parseInt(visitCount);
    }
    visitCount++;

    // 3. Display the counter in the visit-counter div
    document.getElementById('visits').innerText = `Visits:  ${visitCount}`;

    // 4. Save the updated counter back to localStorage
    localStorage.setItem('visits', visitCount);

});