export function getTimer({ time, action }) {
  const interval = setInterval(() => {
    time -= 1;
    // console.log(time);
  }, 1000);

  setTimeout(() => {
    clearInterval(interval);
    console.log('всё');
    return action;
  }, time * 1000);
}
