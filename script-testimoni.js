// testimoni form 
const scripSheet = 'https://script.google.com/macros/s/AKfycbyN0_G27rz0YEl-R9kvfdkW3gvGeqezVNLL_0E_9W6J5aJFCOGyh3hCDBuCYsrRFOqTcg/exec';
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
