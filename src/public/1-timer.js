const refDateInput = document.querySelector('input[type="datetime-local"]');
const refButtonStart = document.querySelector('button[type="button"]');
const elementsWithDataAttribute = document.querySelectorAll(
  '[data-days], [data-hours], [data-minutes], [data-seconds]'
);

refButtonStart.addEventListener('click', StartTimer);

function StartTimer() {
  const selectedDate = new Date(refDateInput.value);
  const currentDate = new Date();
  const timeDifference = selectedDate.getTime() - currentDate.getTime();
  if (timeDifference <= 0 || isNaN(timeDifference)) {
    return;
  }

  setInterval(() => {
    const currentDate = new Date();
    const timeDifference = selectedDate.getTime() - currentDate.getTime();
    const reversTimer = getTime(timeDifference);
    console.log(reversTimer);
    for (const key in reversTimer) {
        if (reversTimer.hasOwnProperty(key)) {
          const element = document.querySelector(`[data-${key}]`);
          if (element) {
            element.textContent = reversTimer[key];
          }
        }
      }
  }, 1000);
}

function getTime(time) {
  const days = pad(Math.floor(time / (1000 * 3600 * 24)));
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const minutes = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const seconds = pad(Math.floor((time % (1000 * 60)) / 1000));

  return { days, hours, minutes, seconds };
}

function pad(value) {
  return String(value).padStart(2, '0');
}



 //Chat gpt




// const refDateInput = document.querySelector('input[type="datetime-local"]');
// const refButtonStart = document.querySelector('button[type="button"]');
// const elementsWithDataAttribute = document.querySelectorAll(
//   '[data-days], [data-hours], [data-minutes], [data-seconds]'
// );

// let timerId; // Добавляем переменную для хранения идентификатора таймера

// refButtonStart.addEventListener('click', startTimer);

// function startTimer() {
//   const selectedDate = new Date(refDateInput.value);
//   const currentDate = new Date();
//   const timeDifference = selectedDate.getTime() - currentDate.getTime();
  
//   if (timeDifference <= 0 || isNaN(timeDifference)) {
//     return;
//   }

//   // Останавливаем предыдущий таймер перед запуском нового
//   if (timerId) {
//     clearInterval(timerId);
//   }

//   function updateTimer() {
//     const currentDate = new Date();
//     const timeDifference = selectedDate.getTime() - currentDate.getTime();
//     const reversTimer = getTime(timeDifference);

//     console.log(reversTimer);

//     for (const key in reversTimer) {
//       if (reversTimer.hasOwnProperty(key)) {
//         const element = document.querySelector(`[data-${key}]`);
//         if (element) {
//           element.textContent = reversTimer[key];
//         }
//       }
//     }

//     // Рекурсивно вызываем функцию через setTimeout
//     timerId = setTimeout(updateTimer, 1000);
//   }

//   // Запускаем таймер первый раз
//   updateTimer();
// }

// function getTime(time) {
//   const days = pad(Math.floor(time / (1000 * 3600 * 24)));
//   const hours = pad(
//     Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
//   );
//   const minutes = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//   const seconds = pad(Math.floor((time % (1000 * 60)) / 1000));

//   return { days, hours, minutes, seconds };
// }

// function pad(value) {
//   return String(value).padStart(2, '0');
// }