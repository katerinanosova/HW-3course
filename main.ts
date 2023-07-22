import {
  START_PAGE,
  GAME_LEVEL_1,
  GAME_LEVEL_2,
  GAME_LEVEL_3,
  RESULT_PAGE,
} from './pages';
import { shuffleCards, Card } from './cards';
import { delay, setTimer, sec, min, resetTimer } from './timer';
import './styles.css';

export let page: number = START_PAGE;
export let resultArray: Card[] = [];
export let win: boolean = false;

let interval;

const appEl = document.querySelector('.app') as HTMLBodyElement;

const renderApp = () => {
  if (page === START_PAGE) {
    const startPageHtml = `
            <form id="levelForm" class="info-container">
            <h1 class="title">Выбери сложность</h1>
            <div class="levels-box">
                <input type="radio" id="level1" class="level" value="1" name="gameLevel">
                <label for="level1">1</label>
                <input type="radio" id="level2" class="level" value="2" name="gameLevel">
                <label for="level2">2</label>
                <input type="radio" id="level3" class="level" value="3" name="gameLevel">
                <label for="level3">3</label>
            </div>
            <button type="submit" id="startButton" class="button">Старт</button>
            </form>`;

    appEl.innerHTML = startPageHtml;

    document.getElementById('startButton')?.addEventListener('click', () => {
      console.log(typeof document.getElementById('startButton'));
      const level = document.getElementsByName(
        'gameLevel',
      ) as NodeListOf<HTMLInputElement>;
      for (let i = 0; i < level.length; i++) {
        if (level[i].checked && level[i].value === '1') {
          page = GAME_LEVEL_1;
          renderApp();
        } else if (level[i].checked && level[i].value === '2') {
          page = GAME_LEVEL_2;
          renderApp();
        } else if (level[i].checked && level[i].value === '3') {
          page = GAME_LEVEL_3;
          renderApp();
        }
      }
    });
  }

  if (page !== START_PAGE && page !== RESULT_PAGE) {
    const gamePageLevel1Html = `
        <section class="app-game-page">
        <div class="header">
            <div class="timer">
                <div class="timer-text">
                    <p>min</p>
                    <p>sek</p>
                </div>
                <div class="timer-count">
                    <p><span id="minutes">00</span>.<span id="seconds">00</span></p>
                </div>
            </div>
            <button class="button" id="restartButton">Начать заново</button>
        </div>
        <div class="gameBody">
            <ul class="card-field">

            </ul>
        </div>
    </section>`;

    appEl.innerHTML = gamePageLevel1Html;

    document.getElementById('restartButton')?.addEventListener('click', () => {
      page = START_PAGE;

      clearInterval(interval);
      resetTimer();
      renderApp();
    });

    renderCards();
  }

  if (page === RESULT_PAGE) {
    const resultPageHtml = `
        <form id="levelForm" class="info-container">
          <img src="static/${win ? `celebration` : `dead`}.png" alt="" />
          <h1 class="title title_wide">${
            win ? `Вы выиграли` : `Вы проиграли`
          }</h1>
          <div class="timer-box">
            <p class="timer-box-text">Затраченное время:</p>
            <p class="timer-box-time">${min < 10 ? `0` + min : min}.${
              sec < 10 ? `0` + sec : sec
            }</p>
          </div>
          <button type="submit" id="restartButton" class="button">
            Играть снова
          </button>
        </form>`;

    appEl.innerHTML = resultPageHtml;
    document.getElementById('restartButton')?.addEventListener('click', () => {
      page = START_PAGE;
      win = false;

      clearInterval(interval);
      resetTimer();
      renderApp();
    });
  }
};
renderApp();

const renderCards = () => {
  let newCards = shuffleCards({ page });
  let isPreviewing = true;

  const renderHtml = () => {
    const cardsHtml = newCards
      .map((card, index) => {
        return `
        <li data-index='${index}' class="card card-back">
            ${isPreviewing ? `<img src="${card.image}" alt=""></img>` : ''}
        </li>`;
      })
      .join('');
    return cardsHtml;
  };

  const cardFieldElement = document.querySelector(
    '.card-field',
  ) as HTMLDivElement;

  cardFieldElement.innerHTML = renderHtml();

  delay(5000).then(() => {
    if (isPreviewing === true) {
      isPreviewing = false;
      cardFieldElement.innerHTML = renderHtml();
      initCardOpenListeners(newCards);
      clearInterval(interval);
      interval = setInterval(setTimer, 1000);
    }
  });
};

const initCardOpenListeners = (newCards: Card[]) => {
  const cardElements = document.querySelectorAll('.card');

  cardElements.forEach((cardElement) => {
    const divElement = cardElement as HTMLDivElement;
    divElement.addEventListener('click', () => {
      const index: number = Number(divElement.dataset.index);
      divElement.innerHTML = `<img src="${newCards[index].image}" alt=""></img>`;

      resultArray.push(newCards[index]);
      if (resultArray.length > 1) {
        delay(500).then(() => {
          clearInterval(interval);
          page = RESULT_PAGE;
          if (resultArray[0] === resultArray[1]) {
            win = true;
          } else {
            win = false;
          }
          resultArray = [];
          renderApp();
        });
      }
    });
  });

  // for (const cardElement of cardElements) {
  //   cardElement.addEventListener('click', () => {
  //     const index: number = Number(cardElement.dataset.index);
  //     cardElement.innerHTML = `
  //         <img src="${newCards[index].image}" alt=""></img>`;

  //     resultArray.push(newCards[index]);
  //     if (resultArray.length > 1) {
  //       delay(500).then(() => {
  //         clearInterval(interval);
  //         page = RESULT_PAGE;
  //         if (resultArray[0] === resultArray[1]) {
  //           win = true;
  //         } else {
  //           win = false;
  //         }
  //         resultArray = [];
  //         renderApp();
  //       });
  //     }
  //   });
  // }
};
