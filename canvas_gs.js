
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Occ'],
        datasets: [{
            label: 'Manutenção',
            data: [7, 6, 6, 10, 7, 12, 8, 7, 15, 12],
            borderColor: '#10b981',
            backgroundColor: 'rgba(16, 185, 129, 0.1)',
            tension: 0.4,
            fill: true,
            pointRadius: 4,
            pointBackgroundColor: '#10b981'
        },
        {
            label: 'Materiais',
            data: [3, 3, 2, 4, 4, 6, 3, 2, 6, 4],
            borderColor: '#fbbf24',
            backgroundColor: 'rgba(251, 191, 36, 0.1)',
            tension: 0.4,
            fill: true,
            pointRadius: 4,
            pointBackgroundColor: '#fbbf24'
        },
        {
            label: 'TI',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            borderColor: '#3b82f6',
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            tension: 0.4,
            fill: true,
            pointRadius: 4,
            pointBackgroundColor: '#3b82f6'
        }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                    usePointStyle: true,
                    padding: 20,
                    font: {
                        size: 12
                    }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 20,
                ticks: {
                    stepSize: 5
                }
            }
        }
    }
});

// Adicionar interatividade aos cards
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function () {
        const title = this.querySelector('.card-title').textContent.trim();
        alert(`Você clicou em: ${title}`);
    });
});

// Adicionar interatividade ao menu
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', function () {
        document.querySelectorAll('.menu-item').forEach(i => i.classList.remove('active'));
        this.classList.add('active');
    });
}); 