let tab2 = document.querySelectorAll('.tab-header2'),
    tabContent2 = document.querySelectorAll('.tab-content2');

tab2.forEach(function(tab2, i) {
    tab2.addEventListener('click', function() {
        hideTab2();
        this.classList.add('tab-header_show');
        tabContent2[i].classList.add('tab-content_show');
    });
});

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

function hideTab2() {
    tab2.forEach((item) => {
        item.classList.remove('tab-header_show');
    });
    tabContent2.forEach((item) => {
        item.classList.remove('tab-content_show');
    });
}