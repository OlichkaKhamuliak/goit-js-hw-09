import Notiflix from 'notiflix';

const firstDelayEl = document.querySelector('input[name=delay]')
const delayStepEl = document.querySelector('input[name=step]')
const amountEl = document.querySelector('input[name=amount]')
const btnEl = document.querySelector('button')

btnEl.addEventListener('submit', handleSubmit)

function createPromises(position, delay) {
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function handleSubmit(evt) {
  evt.preventDefault();
  let firstDelay = Number(firstDelayEl.value);
  let delayStep = Number(delayStepEl.value);
  let amount = Number(amountEl.value);

    for (let i = 0; i < amount; i += 1) {
      createPromises(i + 1, firstDelay + i * delayStep)
        .then(({ position, delay }) => {
          Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        });
    }
  }

