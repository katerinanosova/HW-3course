let page = 'START_PAGE';

const appEl = document.querySelector('.app');

const renderApp = () => {
    if (page === 'START_PAGE') {
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
                    page = 'GAME_PAGE_LEVEL_1';
                    renderApp();
                }

                else if (level[i].checked && level[i].value === '2') {
                    page = 'GAME_PAGE_LEVEL_2';
                    renderApp();
                }

                else if (level[i].checked && level[i].value === '3') {
                    page = 'GAME_PAGE_LEVEL_3';
                    renderApp();
                }
            }

        })
    }

    
    if (page === 'GAME_PAGE_LEVEL_1') {
        const gamePageLevel1Html = `
        <form class="infoContainer">
            <h1 class="title">Уровень 1</h1>
            </form>`;

        appEl.innerHTML = gamePageLevel1Html;
    }

    if (page === 'GAME_PAGE_LEVEL_2') {
        const gamePageLevel2Html = `
        <form class="infoContainer">
            <h1 class="title">Уровень 2</h1>
            </form>`;

        appEl.innerHTML = gamePageLevel2Html;
    }

    if (page === 'GAME_PAGE_LEVEL_3') {
        const gamePageLevel3Html = `
        <form class="infoContainer">
            <h1 class="title">Уровень 3</h1>
            </form>`;

        appEl.innerHTML = gamePageLevel3Html;
    }
}
renderApp();
