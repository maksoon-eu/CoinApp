/* Copy */
const copyLink = (e) => {
    e.preventDefault();
    let aux = document.createElement('input');
    let url = e.target.getAttribute('href');
    aux.setAttribute('value', url);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand('copy');
    document.body.removeChild(aux);
};

let link = document.querySelectorAll('.copy');
for (let i = 0; i < link.length; i++) {
    link[i].addEventListener('click', copyLink);
}

let e = document.querySelector('.index__list');
e.addEventListener('click', function () {
    e.classList.toggle('gradient');
    document.querySelector('.modal__block').classList.toggle('modal-height');

    let a = document.querySelectorAll('.modal__block .modal-menu li');
    for( let i = 0; i < a.length; i ++) {
        a[i].addEventListener('click', function () {
            e.classList.remove('gradient');
            document.querySelector('.modal__block').classList.remove('modal-height');
            document.querySelector('.index__input').value = this.querySelector('span').textContent;
        });
    }
});


new Splide( '#image-carousel', {
    type   : 'fade',
    arrows : false,
} ).mount();
