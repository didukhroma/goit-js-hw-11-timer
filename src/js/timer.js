import timerMarkup from '../template/timer.hbs';

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.time = this.targetDate - new Date();
    this.createMarkup(this.selector, this.time);
    this.timer(this.targetDate, this.time);
  }
  createMarkup(selector, time) {
    const bodyRef = document.querySelector('body');
    const startTime = this.timeHandler(time);
    bodyRef.insertAdjacentHTML(
      'beforeend',
      timerMarkup({ selector, ...startTime }),
    );
  }
  timer(date, time) {
    if (time <= 0) {
      alert('THE TIMER HAS EXPIRED');
      return;
    }
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
      time = time - 1000;
      const diffTime = this.timeHandler(time);
      refs.daysRef.textContent = diffTime.days;
      refs.hoursRef.textContent = diffTime.hours;
      refs.minsRef.textContent = diffTime.mins;
      refs.secsRef.textContent = diffTime.secs;
    }, 1000);
  }
  timeHandler(time) {
    if (time <= 0) {
      return { days: 'XX', hours: 'XX', mins: 'XX', secs: 'XX' };
    }
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    return { days, hours, mins, secs };
  }
  pad(value) {
    return String(value).padStart(2, '0');
  }
}

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2021'),
});
