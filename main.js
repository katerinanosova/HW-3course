import { START_PAGE, GAME_LEVEL_1, GAME_LEVEL_2, GAME_LEVEL_3  } from "./pages.js";
import { cards } from "./cards.js";

export let page = START_PAGE

const appEl = document.querySelector('.app');

const renderApp = () => {
    if (page === START_PAGE) {
        const startPageHtml = `
            <form id="levelForm" class="infoContainer">
            <h1 class="title">Выбери сложность</h1>
            <div class="levelsBox">
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

        document.getElementById('startButton').addEventListener('click', () => {
            
            const level = document.getElementsByName('gameLevel');
            for (let i = 0; i < level.length; i++) {
                if (level[i].checked && level[i].value === '1') {
                    page = GAME_LEVEL_1;
                    renderApp();
                }

                else if (level[i].checked && level[i].value === '2') {
                    page = GAME_LEVEL_2;
                    renderApp();
                }

                else if (level[i].checked && level[i].value === '3') {
                    page = GAME_LEVEL_3;
                    renderApp();
                }
            }

        })
    }

    
    if (page !== START_PAGE) {
        const gamePageLevel1Html = `
        <section class="app_gamePage">
        <div class="header">
            <div class="timer">
                <div class="timerText">
                    <p>min</p>
                    <p>sek</p>
                </div>
                <div class="timerCount">
                    <p>00.00</p>
                </div>
            </div>
            <button class="button" id="restartButton">Начать заново</button>
        </div>
        <div class="gameBody">
            <ul class="cardField">

            </ul>
        </div>
    </section>`;

    appEl.innerHTML = gamePageLevel1Html;

    renderCards();
    }
}
renderApp();

const renderCards = () => {
    const cardsHtml = cards
    .map((card, index) => {
        return `
        <li class="cardBack">
            <img src="${card.image}" alt="">
        </li>`;
    }).join('');

    document.querySelector('.cardField').innerHTML = cardsHtml;
};

