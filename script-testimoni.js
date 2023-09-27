// testimoni form 
const scripSheet = 'https://script.google.com/macros/s/AKfycbzwRQ-sa62Ux-YSxF3LqBEprSuLOY2YM4vFQtCeJ6VlhaXvrbFhE2Etx77Jm6ZEgT0bjQ/exec';
const formTestimoni = document.forms['testimoni-peserta'];

const kirimTestimoni = document.querySelector('.btn-kirim');
const loadingTestimoni = document.querySelector('.btn-loading');
const alertTestimoni = document.querySelector('.alert');

formTestimoni.addEventListener('submit', e => {
  e.preventDefault()

  loadingTestimoni.classList.toggle('d-none');
  kirimTestimoni.classList.toggle('d-none');

  fetch(scripSheet, { method: 'POST', body: new FormData(formTestimoni)})
    .then((response) =>{
        loadingTestimoni.classList.toggle('d-none');
        kirimTestimoni.classList.toggle('d-none');

        // tampilkan pesan sukses 
        alertTestimoni.classList.toggle('d-none');
        formTestimoni.reset();

        console.log('Success!', response)
    })
    .catch((error) => console.error('Error!', error.message));
});
