import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const inputDateEl = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');
const timer = document.querySelector('.timer');

btnStart.disabled = true;

const options = {
  enableTime: true, //дозволяє з датою записувати годину
  time_24hr: true, //24 год годинник(замість 12 год)
  defaultDate: new Date(), //встановлює поточну дату
  minuteIncrement: 1, //вибір часу з кроком в 1 хв
  onClose(selectedDates) {
    if (selectedDates[0] < options.defaultDate || !inputDateEl.value) {
    btnStart.disabled = true;
    Notiflix.Notify.failure("Please choose a date in the future!")
    } else {
       btnStart.disabled = false;
    }
  },
};

flatpickr(inputDateEl, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0'); // додає 0 перед цифрою, якщо вона однозначна
}

btnStart.addEventListener('click', updateTimerClick);

/**
  |============================
  | Функція відліку часу
  |============================
*/
function updateTimerClick() {
  btnStart.disabled = true;
  const intervalId = setInterval(() => {
    const elDifference = new Date(inputDateEl.value) - new Date();

    if (elDifference <= 0) {
      clearInterval(intervalId);
      Notiflix.Notify.success("Countdown completed!");
      inputDateEl.disabled = false;
      timer.style.color = 'black';
    } else {
        timer.style.color = 'blueviolet';
        const { days, hours, minutes, seconds } = convertMs(elDifference);
        daysEl.textContent = `${addLeadingZero(days)}`;
        hoursEl.textContent = `${addLeadingZero(hours)}`;
        minutesEl.textContent = `${addLeadingZero(minutes)}`;
        secondsEl.textContent = `${addLeadingZero(seconds)}`;
        inputDateEl.disabled = true;
      }
  }, 1000);  
}
