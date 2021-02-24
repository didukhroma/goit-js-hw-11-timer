import timerMarkup from '../template/timer.hbs';

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.createMarkup(this.selector);
    this.timer(this.targetDate);
  }
  createMarkup(selector) {
    const arrSelector = {
      selectorId: selector,
    };
    const bodyRef = document.querySelector('body');
    bodyRef.insertAdjacentHTML('beforeend', timerMarkup(arrSelector));
  }
  timer(date) {
    const currentDate = new Date();
    let time = currentDate - date;
    const refs = {
      daysRef: document.querySelector(
        `div[id="${this.selector}"] span[data-value="days"]`,
      ),
      hoursRef: document.querySelector(
        `div[id="${this.selector}"] span[data-value="hours"]`,
      ),
      minsRef: document.querySelector(
        `div[id="${this.selector}"] span[data-value="mins"]`,
      ),
      secsRef: document.querySelector(
        `div[id="${this.selector}"] span[data-value="secs"]`,
      ),
    };

    setInterval(() => {
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      const hours = this.pad(
        Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      );
      const mins = this.pad(
        Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),
      );
      const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
      refs.daysRef.textContent = days;
      refs.hoursRef.textContent = hours;
      refs.minsRef.textContent = mins;
      refs.secsRef.textContent = secs;
      time = time - 1000;
    }, 1000);
  }
  pad(value) {
    return String(value).padStart(2, '0');
  }
}

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2019'),
});
