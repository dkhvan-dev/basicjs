'use strict';

let fitlerPopup = document.querySelector('.filterPopup');
let fitlerLabel = document.querySelector('.filterLabel');
let filterIcon = document.querySelector('.filterIcon');

fitlerLabel.addEventListener('click', function() {
    fitlerPopup.classList.toggle('hidden');
    fitlerLabel.classList.toggle('filterLabelPink');
    filterIcon.classList.toggle('filterIconPink');

    if (filterIcon.getAttribute('src') === 'images/filter.svg') {
        filterIcon.setAttribute('src', 'images/filterHover.svg')
    } else {
        filterIcon.setAttribute('src', 'images/filter.svg')
    }
});

let filterHeaders = document.querySelectorAll('.filterCategoryHeader');
filterHeaders.forEach(function(header) {
    header.addEventListener('click', function(event) {
        event.target.nextElementSibling.classList.toggle('hidden');
    })
});

let filterSizes = document.querySelector('.filterSizes');
let filterSizeWrap = document.querySelector('.filterSizeWrap');
filterSizeWrap.addEventListener('click', function() {
    filterSizes.classList.toggle('hidden');
});

/******************************[ Решение ]************************************/

let addToCart = document.querySelectorAll('.featuredImgDark button');
let cartCounter = document.querySelector('.cartIconWrap span');
let cartButton = document.querySelector('.cartIcon');
let cartShow = document.querySelector('.cartShow');
let cartShowToggle = false;

let i = 0;

addToCart.forEach(el => el.addEventListener('click', (event) => {
    cartCounter.textContent = ++i;
    console.log(event.target);
}));

cartButton.addEventListener('click', () => {
    if (cartShowToggle === false) {
        cartShow.style.display = 'block';
        cartShowToggle = !cartShowToggle;
    } else {
        cartShow.style.display = 'none';
        cartShowToggle = !cartShowToggle;
    }
});