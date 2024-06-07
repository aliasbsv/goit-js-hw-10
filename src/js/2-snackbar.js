import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

// Тестовий виклик iziToast при завантаженні сторінки
document.addEventListener('DOMContentLoaded', () => {
  iziToast.show({
    title: 'Test',
    message: 'iziToast is working!',
    position: 'topRight',
    theme: 'dark',
  });
});

const form = document.querySelector('form');
const message = {
  position: 'topRight',
  theme: 'dark',
};

form.addEventListener('submit', event => {
  event.preventDefault();

  const shouldResolve = form.state.value === 'fulfilled';
  const delay = Number(form.delay.value); // Перетворюємо значення delay на число

  makePromise(shouldResolve, delay)
    .then(delay => {
    
      message.color = '#59a10d';
      message.message = `Fulfilled promise in ${delay}ms`;
      iziToast.success(message);
      console.log(`✅ Fulfilled promise in ${delay}ms`); // Виводимо повідомлення в консоль
    })
    .catch(delay => {
     
      message.color = '#ef4040';
      message.message = `Rejected promise in ${delay}ms`;
      iziToast.error(message);
      console.log(`❌ Rejected promise in ${delay}ms`); // Виводимо повідомлення в консоль
    });

  form.reset();
});

function makePromise(shouldResolve, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}
