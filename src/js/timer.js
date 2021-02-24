import timerMarkup from '../template/timer.hbs';
// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2019'),
// });
// const selector = '#timer-1';

// const days = Math.floor(time / (1000 * 60 * 60 * 24));
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
// const secs = Math.floor((time % (1000 * 60)) / 1000);
// function pad(value) {
//   return String(value).padStart(2, '0');
// }
// const refs = {
//   days: document.querySelector(`${selector} span[data-value="days"]`),
//   hours: document.querySelector('span[data-value="hours"]'),
//   mins: document.querySelector('span[data-value="mins"]'),
//   secs: document.querySelector('span[data-value="secs"]'),
// };
class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.createMarkup(this.selector);
  }
  createMarkup(selector) {
    const arrSelector = {
      selectorId: selector,
    };
    const bodyRef = document.querySelector('body');
    bodyRef.insertAdjacentHTML('beforeend', timerMarkup(arrSelector));
  }
}
new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2019'),
});
