'use strict';

const wrapper = document.querySelector('.wrapper');
const countEl = document.querySelector('.counter');
const button = document.querySelector('.button');
let count = 0;

wrapper.addEventListener('click', function (e) {
  document.querySelectorAll('button').forEach((el) => {
    el.classList.remove('button_active');
    el.innerText = 'Нажми меня';
  });
  const currentEl = e.target;
  currentEl.innerText = 'Нажата';
  currentEl.classList.add('button_active');
  count++;
  countEl.innerHTML = count;
});
