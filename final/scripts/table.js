const scooterData = fetch('data/price.json')
    .then(response => response.json())
    .then(data => {
        const tbody = document.querySelector('tbody');
        for (const rentals of data.rentals) {
            const tableRow = document.createElement('tr');
            tableRow.innerHTML = `
            
            <td>${rentals.type}</td>
            <td>${rentals.max_persons}</td>
            <td>$${rentals.reservation_half_day}</td>
            <td>$${rentals.reservation_full_day}</td>
            <td>$${rentals.walk_in_half_day}</td>
            <td>$${rentals.walk_in_full_day}</td>
            

        `;
            tbody.appendChild(tableRow);
        }
    });