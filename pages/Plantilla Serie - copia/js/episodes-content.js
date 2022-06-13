const watch = document.querySelector('.botton-watch');
const list = document.querySelector('.botton-list');
const trailer = document.querySelector('.trailer');
const episodeUno = document.querySelector('.episode-uno')
const close = document.querySelector('.close');
const closeUno = document.querySelector('.close-uno');

watch.addEventListener('click', (e)=>{
    e.preventDefault();
    trailer.classList.add('active');
});

close.addEventListener('click', (e)=>{
    e.preventDefault();
    trailer.classList.remove('active');
});

list.addEventListener('click', (e)=>{
    e.preventDefault();
    episodeUno.classList.add('active');
});

closeUno.addEventListener('click', (e)=>{
    e.preventDefault();
    episodeUno.classList.remove('active');
});