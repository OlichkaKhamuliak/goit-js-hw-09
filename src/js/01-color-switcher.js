function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const body = document.body;

let intervalId;
let isStarted = false; // Початковий стан: не розпочато

btnStart.addEventListener('click', onStartClick);
btnStop.addEventListener('click', onStopClick);

function onStartClick() {
  if (!isStarted) {
    changeBackGround();
    btnStart.disabled = true;
    btnStop.disabled = false;
    isStarted = true;
    intervalId = setInterval(() => {
      changeBackGround();
    }, 1000);
  }
}

function onStopClick() {
  if (isStarted) {
    clearInterval(intervalId);
    btnStart.disabled = false;
    btnStop.disabled = true;
    isStarted = false;
  } else {
    alert("Спочатку натисніть кнопку 'Start'");
  }
}

// btnStart.addEventListener('click', onActiveBtn)
// btnStop.addEventListener('click', onActiveBtn)

// function onActiveBtn(evt) {
//     if (evt.target.nodeName !== "BUTTON") {
//         return;
//     }

//     const clickedButton = evt.target;

//     if (clickedButton.matches('[data-start]')) {
//         changeBackGround()
//         clickedButton.disabled = true;
//         btnStop.disabled = false;
//         intervalId = setInterval(() => {
//             changeBackGround();
//         }, 1000);
//     } else if (clickedButton.matches('[data-stop]')) {
//         clickedButton.disabled = true; 
//         if (intervalId) {
//             btnStart.disabled = false;
//             clearInterval(intervalId);
//         }
//     }
// }

function changeBackGround() {
    body.style.backgroundColor = getRandomHexColor();   
}