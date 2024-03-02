'use strict';

let div = document.querySelector('div');
let input = document.querySelector('input[type="text"]');

input.addEventListener('focus', () => {
    div.style.opacity = '1';
});

input.addEventListener('blur', () => {
    div.style.opacity = '0';
});


