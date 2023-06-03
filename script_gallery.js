const lightbox = document.querySelector('.lightbox_container');
const btn = document.querySelectorAll('#ripple');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const close = document.getElementById('close');
 
for (let i = 0; i < btn.length; i++){
    btn[i].addEventListener('click', (e)=>{
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;
 
        let ripple = document.createElement('span');
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
 
        btn[i].appendChild(ripple);
 
        setTimeout(() => {
            ripple.remove();
        }, 700);
    });
};
 
 
function openmodal(){
    lightbox.classList.add('show');
}
 
close.addEventListener('click', ()=>{
    lightbox.classList.remove('show');
});
 
prev.addEventListener('click', ()=>{
    plusslide(-1);
});
 
next.addEventListener('click', ()=>{
    plusslide(1);
});
 
let slideindex = 1;
showslide(n);
 
function plusslide(n){
    showslide(slideindex += n);
};
 
function currentslide(n){
    showslide(slideindex  = n);
};
 
function showslide(n){
    const slide = document.querySelectorAll('.lightbox_item');
     
    if(n > slide.length){
        slideindex=1;
    }
     
    if(n < 1){
        slideindex = slide.length;
    }
 
    for (let i = 0; i < slide.length; i++){
        slide[i].classList.add('active');
    }
    slide[slideindex-1].classList.remove('active');
}