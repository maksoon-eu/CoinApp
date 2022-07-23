/* Burger */
let navToggle = document.querySelector("#navToggle");
let nav = document.querySelector("#nav");


navToggle.addEventListener('click', function () {

    navToggle.classList.toggle('burger-active');
    nav.classList.toggle('show');
});

/* Tab */
let tab = document.querySelectorAll('.tab-header'),
    tabContent = document.querySelectorAll('.tab-content');

tab.forEach(function(tab, i) {
    tab.addEventListener('click', function() {
        hideTab();
        this.classList.add('tab-header_show');
        tabContent[i].classList.add('tab-content_show');
    });
});

function hideTab() {
    tab.forEach((item) => {
        item.classList.remove('tab-header_show');
    });
    tabContent.forEach((item) => {
        item.classList.remove('tab-content_show');
    });
}