// Show all activities //
showAllBtn.addEventListener('click', () => {
    hiddenActivities.classList.toggle('hidden');
});


// Chart //
const barChart = document.getElementById('barChart');

new Chart(barChart, {
    type: 'bar',
    data: {
        labels: ['Izdate knjige', 'Rezervisane knjige', 'Knjige u prekoracenju'],
        datasets: [
            {
                label: 'Statistika',
                data: [97, 50,25],
                backgroundColor: [
                    'rgba(46, 204, 113, 1)',
                    'rgba(249,105,14,1)',
                    'rgba(255,0,0,1)'
                ]
            }
        ]    
    }
});



