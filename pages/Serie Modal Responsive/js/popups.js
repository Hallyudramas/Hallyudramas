const watch = document.querySelector('.botton-watch');
const list = document.querySelector('.botton-list');
var capUno = document.querySelector('.uno');
var capDos = document.querySelector('.dos');
var capTres = document.querySelector('.tres');
var capCuatro = document.querySelector('.cuatro');
var capCinco = document.querySelector('.cinco');
var capSeis = document.querySelector('.seis');
var capSiete = document.querySelector('.siete');
var capOcho = document.querySelector('.ocho');
const modal = document.querySelector('.modal');
const modalList = document.querySelector('.modal-list');
var modalCapUno = document.querySelector('.modal-uno');
var modalCapDos = document.querySelector('.modal-dos');
var modalCapTres = document.querySelector('.modal-tres');
var modalCapCuatro = document.querySelector('.modal-cuatro');
var modalCapCinco = document.querySelector('.modal-cinco');
var modalCapSeis = document.querySelector('.modal-seis');
var modalCapSiete = document.querySelector('.modal-siete');
var modalCapOcho = document.querySelector('.modal-ocho');
const close = document.querySelector('.close');
const closeList = document.querySelector('.close-list');
var closeCapUno = document.querySelector('.close-uno');
var closeCapDos = document.querySelector('.close-dos');
var closeCapUTres = document.querySelector('.close-tres');
var closeCapCuatro = document.querySelector('.close-cuatro');
var closeCapCinco = document.querySelector('.close-cinco');
var closeCapSeis = document.querySelector('.close-seis');
var closeCapSiete = document.querySelector('.close-siete');
var closeCapOcho = document.querySelector('.close-ocho');

watch.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('modal-show');
});

close.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal-show');
});

list.addEventListener('click', (e)=>{
    e.preventDefault();
    modalList.classList.add('modal-show');
});

closeList.addEventListener('click', (e)=>{
    e.preventDefault();
    modalList.classList.remove('modal-show');
});

capUno.addEventListener('click', (e)=>{
    e.preventDefault();
    modalCapUno.classList.add('modal-show');
});

closeCapUno.addEventListener('click', (e)=>{
    e.preventDefault();
    modalCapUno.classList.remove('modal-show');
});

capDos.addEventListener('click', (e)=>{
    e.preventDefault();
    modalCapDos.classList.add('modal-show');
});

closeCapDos.addEventListener('click', (e)=>{
    e.preventDefault();
    modalCapDos.classList.remove('modal-show');
});

capTres.addEventListener('click', (e)=>{
    e.preventDefault();
    modalCapTres.classList.add('modal-show');
});

closeCapUTres.addEventListener('click', (e)=>{
    e.preventDefault();
    modalCapTres.classList.remove('modal-show');
});

capCuatro.addEventListener('click', (e)=>{
    e.preventDefault();
    modalCapCuatro.classList.add('modal-show');
});

closeCapCuatro.addEventListener('click', (e)=>{
    e.preventDefault();
    modalCapCuatro.classList.remove('modal-show');
});

capCinco.addEventListener('click', (e)=>{
    e.preventDefault();
    modalCapCinco.classList.add('modal-show');
});

closeCapCinco.addEventListener('click', (e)=>{
    e.preventDefault();
    modalCapCinco.classList.remove('modal-show');
});

capSeis.addEventListener('click', (e)=>{
    e.preventDefault();
    modalCapSeis.classList.add('modal-show');
});

closeCapSeis.addEventListener('click', (e)=>{
    e.preventDefault();
    modalCapSeis.classList.remove('modal-show');
});

capSiete.addEventListener('click', (e)=>{
    e.preventDefault();
    modalCapSiete.classList.add('modal-show');
});

closeCapSiete.addEventListener('click', (e)=>{
    e.preventDefault();
    modalCapSiete.classList.remove('modal-show');
});

capOcho.addEventListener('click', (e)=>{
    e.preventDefault();
    modalCapOcho.classList.add('modal-show');
});

closeCapOcho.addEventListener('click', (e)=>{
    e.preventDefault();
    modalCapOcho.classList.remove('modal-show');
});