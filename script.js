// select all navbar links
const navbarLinks = document.querySelectorAll('.nav-link');

// add event listener to each link
navbarLinks.forEach(link => {
  link.addEventListener('click', () => {
    // remove active class from all links
    navbarLinks.forEach(link => {
      link.classList.remove('active');
    });

    // add active class to clicked link
    link.classList.add('active');
  });
});




// grapik peserta
var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['2016', '2017', '2018', '2019', '2020', '2021','2022','2023'],
        datasets: [{
            label: 'Jumlah Peserta',
            data: [34, 70, 67, 55, 73, 28, 74, 45],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(21, 111, 23, 0.2)',
                'rgba(222, 141, 264, 0.2)'

            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(251, 129, 64, 1)',
                'rgba(222, 119, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
// akhir grapik peserta


