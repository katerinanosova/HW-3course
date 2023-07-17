export let sec = 0;
export let min = 0;

export function delay(interval = 300) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, interval);
  });
}

export function setTimer() {
  sec++;

  if (sec < 10) {
    document.getElementById('seconds').innerHTML = '0' + sec;
  }

  if (sec > 9) {
    document.getElementById('seconds').innerHTML = sec;
  }

  if (sec > 59) {
    min++;
    document.getElementById('minutes').innerHTML = '0' + min;
    sec = 0;
    document.getElementById('seconds').innerHTML = '0' + 0;
  }

  if (min > 9) {
    document.getElementById('minutes').innerHTML = min;
  }
}
