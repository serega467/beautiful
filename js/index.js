// Логика таймера
document.addEventListener('DOMContentLoaded', function () {
  // конечная дата, например 1 июля 2021
  const deadline = new Date(2023, 06, 01);
  // id таймера
  let timerId = null;
  // склонение числительных
  function declensionNum(num, words) {
    return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
  }
  // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
  function countdownTimer() {
    const diff = deadline - new Date();
    if (diff <= 0) {
      clearInterval(timerId);
    }
    const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
    const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
    const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
    const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
    $days.textContent = days < 10 ? '0' + days : days;
    $hours.textContent = hours < 10 ? '0' + hours : hours;
    $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
    $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
    $days.dataset.title = declensionNum(days, ['день', 'дня', 'дней']);
    $hours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
    $minutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
    $seconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);
  }
  // получаем элементы, содержащие компоненты даты
  const $days = document.querySelector('.timer__days');
  const $hours = document.querySelector('.timer__hours');
  const $minutes = document.querySelector('.timer__minutes');
  const $seconds = document.querySelector('.timer__seconds');
  // вызываем функцию countdownTimer
  countdownTimer();
  // вызываем функцию countdownTimer каждую секунду
  timerId = setInterval(countdownTimer, 1000);
});

// Реализация смены стиля сайта


$(function () {
  $('.toggle').on('click', function (event) {
    $(this).toggleClass('active');
    $('body').toggleClass('night');
  });
});



var toggle = document.querySelector('.toggle');
let count  = document.querySelector('.timer__items');

toggle.addEventListener('click', ()=> {
  if(count.classList.contains('timer__items')) {
    count.classList.add('block--active')
    count.classList.remove('timer__items')

  } else {
     count.classList.add('timer__items')
    count.classList.remove('block--active')
    
  }
});


let headerBtn  = document.querySelector('.member');

toggle.addEventListener('click', ()=> {
  if(headerBtn.classList.contains('member')) {
    headerBtn.classList.add('button--active')
    headerBtn.classList.remove('member')

  } else {
     headerBtn.classList.add('member')
    headerBtn.classList.remove('button--active')
    
  }
});


// toggle.addEventListener('click', ()=> {
//   count.classList.add('block--active')
// });




// скрипт №3

// let toggle = document.querySelector('.toggle');
// let count = document.querySelector('.timer__items');
// let active = document.querySelector('.block--active');

// toggle.addEventListener('click', () => {
//   count.classList.add('block--active')
// });

// toggle.addEventListener('click', () => {
//   active.classList.toggle('block--active')
// });

