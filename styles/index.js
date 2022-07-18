const ctx = document.getElementById('lineChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['jan','feb', 'march', 'april', 'may', 'june', 'july', 'august', 'sept', 'oct', 'nov', 'dec',],
        datasets: [{
            label: 'earning/month',
            data: [2617020, 2448180, 2617020, 2532600, 2617020,2532600, 2617020,2617020,2532600, 2617020, 2532600, 2617020],
            backgroundColor: [ 'rgba(85,85,85,1)'
            ],
            borderColor: [
                rgb(41,155,99) ],s
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});