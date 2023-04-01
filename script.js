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


// Tampilkan tombol saat user scroll sejauh 20px dari atas halaman
let backToTopButton = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    backToTopButton.classList.add("show-back-to-top");
  } else {
    backToTopButton.classList.remove("show-back-to-top");
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo(0, 0);
});


// validasi form 
const form = document.querySelector('form');
const scriptURL = form.action;

const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const alertBox = document.querySelector('.alert');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // mencegah form melakukan submit secara default

  // ketika tombol submit diklik 
  // tampilkan tombol loading, hilangkan tombol kirim 
  btnLoading.classList.toggle('d-none');
  btnKirim.classList.toggle('d-none');

  // mengirimkan form ke Formspree
  fetch(scriptURL, {
    method: 'POST',
    body: new FormData(form),
    mode: 'no-cors' //menambahkan opsi mode : 'no-cors'
  })
    .then((response) => {
      // tampilkan tombol kirim, hilangkan tombol loading
      btnLoading.classList.toggle('d-none');
      btnKirim.classList.toggle('d-none');

      // tampilkan pemberitahuan pesan berhasil terkirim
      alertBox.classList.toggle('d-none');

      form.reset();
      console.log('Success!', response);
    })
    .catch((error) => {
      // tampilkan tombol kirim, hilangkan tombol loading
      btnLoading.classList.toggle('d-none');
      btnKirim.classList.toggle('d-none');
      
      // tampilkan pemberitahuan pesan gagal terkirim
  alertBox.querySelector('.alert-text').innerHTML = 'Pesan Anda gagal terkirim. Silahkan coba kembali!';
  alertBox.classList.add('alert-danger');
  alertBox.classList.remove('d-none');

  console.error(error);});

});





// -----------tampilan mobile-----------------//


