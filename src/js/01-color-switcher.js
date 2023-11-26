function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const body = document.body;

let intervalId;
btnStop.disabled = true;

function randomChangeBackGround() {
    body.style.backgroundColor = getRandomHexColor();   
}

btnStart.addEventListener('click', onStartClick);
btnStop.addEventListener('click', onStopClick);

function onStartClick() {
    randomChangeBackGround();
    btnStart.disabled = true;
    btnStop.disabled = false;
    intervalId = setInterval(() => {
      randomChangeBackGround();
    }, 1000);
}

function onStopClick() {
    clearInterval(intervalId);
    btnStart.disabled = false;
    btnStop.disabled = true;
}

/**
  |============================
  | ІНШИЙ МЕТОД
  |============================
*/

// btnStart.addEventListener('click', onActiveBtn)
// btnStop.addEventListener('click', onActiveBtn)

// function onActiveBtn(evt) {
//     if (evt.target.nodeName !== "BUTTON") {
//         return;
//     }

//     const clickedButton = evt.target;

//     if (clickedButton.matches('[data-start]')) {
//         randomChangeBackGround()
//         clickedButton.disabled = true;
//         btnStop.disabled = false;
//         intervalId = setInterval(() => {
//             randomChangeBackGround();
//         }, 1000);
//     } else if (clickedButton.matches('[data-stop]')) {
//         clickedButton.disabled = true; 
//         btnStart.disabled = false;
//         clearInterval(intervalId);
//     }
// }