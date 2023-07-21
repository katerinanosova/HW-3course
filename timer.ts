export let sec = 0;
export let min = 0;

// export function delay(interval = 300) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, interval);
//   });
// }

export function delay(interval: number = 300): Promise<void> {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, interval);
  });
}

export function setTimer() {
  sec++;
  const secondsElement = document.getElementById('seconds') as HTMLDivElement;
  const minutesElement = document.getElementById('minutes') as HTMLDivElement;

  if (sec < 10) {
    
    if (secondsElement) {
      secondsElement.innerHTML = '0' + sec;
    }
  }

  if (sec > 9) {
    secondsElement.innerHTML = String(sec);
  }

  if (sec > 59) {
    min++;
    minutesElement.innerHTML = '0' + min;
    sec = 0;
    secondsElement.innerHTML = '0' + 0;
  }

  if (min > 9) {
    minutesElement.innerHTML = String(min);
  }
}
