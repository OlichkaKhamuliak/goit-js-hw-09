import Notiflix from 'notiflix';

const firstDelayEl = document.querySelector('input[name=delay]')
const delayStepEl = document.querySelector('input[name=step]')
const amountEl = document.querySelector('input[name=amount]')
const btnEl = document.querySelector('button')

btnEl.addEventListener('click', handleClickCreate)

function createPromise(position, delay) {
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

function handleClickCreate(evt) {
  evt.preventDefault();
  const  firstDelay = Number(firstDelayEl.value);
  const  delayStep = Number(delayStepEl.value);
  const  amount = Number(amountEl.value);

    for (let i = 0; i < amount; i += 1) {
      createPromise(i + 1, firstDelay + i * delayStep)
        .then(({ position, delay }) => {
          Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        });
    }
  }

