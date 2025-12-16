import './styles/main.scss';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { English } from 'flatpickr/dist/l10n/default.js';

const fromInput = document.querySelector('#dateFrom');
const toInput = document.querySelector('#dateTo');

const fromPicker = flatpickr(fromInput, {
  dateFormat: 'd_m_Y',
  locale: English,
  onChange: function (selectedDates) {
    if (selectedDates.length > 0) {
      toPicker.set('minDate', selectedDates[0]);
    }
  },
});

const toPicker = flatpickr(toInput, {
  dateFormat: 'd_m_Y',
  onChange: function (selectedDates) {
    if (selectedDates.length > 0) {
      fromPicker.set('maxDate', selectedDates[0]);
    }
  },
});

document.querySelectorAll('.header__date-button--calendar').forEach((btn) => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.target === 'from' ? fromPicker : toPicker;
    target.open();
  });
});

document.querySelectorAll('.header__date-button--clear').forEach((btn) => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.target === 'from' ? fromPicker : toPicker;
    target.clear();
  });
});

const gridButton = document.querySelector('.main__button--grid');
const rowButton = document.querySelector('.main__button--row');
const loadButton = document.querySelector('.main__load-button');
const rowSection = document.querySelector('.main__row-section');
const gridSection = document.querySelector('.main__grid-section');

rowButton.addEventListener('click', () => {
  gridSection.classList.remove('active-section');
  rowSection.classList.add('active-section');
  rowButton.classList.add('main__button--active');
  gridButton.classList.remove('main__button--active');
  loadButton.classList.remove('main__load-button--grid');
});

gridButton.addEventListener('click', () => {
  gridSection.classList.add('active-section');
  rowSection.classList.remove('active-section');
  rowButton.classList.remove('main__button--active');
  gridButton.classList.add('main__button--active');
  loadButton.classList.add('main__load-button--grid');
});
