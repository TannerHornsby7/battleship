import './style.scss';
import { game_status } from './logic';

// takes a game 
export function layout(game) {
    // clear the page
    document.body.innerHTML = '';
    // only have a spacebard keydown listener if the game is in setup mode
    if (game.status < game_status["p1_turn"]) {

        window.onkeydown = (ev) => {
            // if the current game state allows placement, we try to place the ship
            if (ev.keyCode == 13) {
                placeHoverShip(game);
            }
        };
    }

    // creating sections
    const h = document.createElement('div');
    const b = document.createElement('div');
    const f = document.createElement('div');

    buildHeader(h);
    buildFooter(f);

    b.classList.add('body');
    const info_sect = document.createElement('div');
    const key = document.createElement('div');
    const dock = document.createElement('div');
    const place_random = document.createElement('button');

    info_sect.classList.add('info');
    place_random.id = 'rp';

    buildKey(key);
    (game.pboard.ship_deck.length != 0) ? setDock(dock, game) : setDock(dock, game, true);
    place_random.textContent = 'PLACE MY SHIPS';
    place_random.onclick = () => {
        game.autoSet();
        console.log(game.pboard)
        // set innerHTML to empty string to clear the page

        layout(game);
    }

    info_sect.appendChild(key);
    info_sect.appendChild(dock);
    if (game.status < game_status["p1_turn"]) {
        info_sect.appendChild(place_random);
    }

    const board_sect = document.createElement('div');
    buildBoards(game, board_sect);
    // attach event listeners to the boards

    const reset_sect = document.createElement('div');
    reset_sect.classList.add('reset');
    buildResetSection(game, reset_sect);

    b.appendChild(info_sect);
    b.appendChild(board_sect);
    b.appendChild(reset_sect);

    document.body.appendChild(h);
    document.body.appendChild(b);
    document.body.appendChild(f);

    // attach event listeners
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; ++j) {
            attachAttackListener('er' + i + 'c' + j, game);
        }
    }
    // setPHover(game);
}

function buildHeader(h) {
    const empty = document.createElement('div');
    empty.textContent = '';
    h.classList.add('head');
    const title = document.createElement('h1');
    const gh = document.createElement('button');

    title.textContent = 'BATTLESHIP';
    gh.textContent = 'GITHUB'
    gh.onclick = function () {
        open('https://github.com/TannerHornsby7/odin-battleship');
    };

    h.appendChild(empty);
    h.appendChild(title);
    h.appendChild(gh);
}

function buildFooter(f) {
    f.classList.add('foot');
    const name = document.createElement('h4');
    name.textContent = '@tannerhornsby7';
    f.appendChild(name);
}

function buildKey(key) {
    key.classList.add('key');
    const hit = document.createElement('h2');
    const miss = document.createElement('h2');
    const sunk = document.createElement('div');
    const hit_desc = document.createElement('p');
    const miss_desc = document.createElement('p');
    const sunk_desc = document.createElement('p');
    const hit_sect = document.createElement('div');
    const miss_sect = document.createElement('div');
    const sunk_sect = document.createElement('div');
    key.classList.add('key');
    hit.classList.add('hit');
    miss.classList.add('miss');
    sunk.classList.add('sunk');
    hit.textContent = 'X';
    miss.textContent = 'X';
    sunk.textContent = '';
    hit_desc.textContent = 'HIT';
    miss_desc.textContent = 'MISS';
    sunk_desc.textContent = 'SUNK';
    hit_sect.appendChild(hit_desc);
    hit_sect.appendChild(hit);
    miss_sect.appendChild(miss_desc);
    miss_sect.appendChild(miss);
    sunk_sect.appendChild(sunk_desc);
    sunk_sect.appendChild(sunk);
    hit_sect.classList.add('key_sect');
    miss_sect.classList.add('key_sect')
    sunk_sect.classList.add('key_sect')
    key.appendChild(hit_sect);
    key.appendChild(miss_sect);
    key.appendChild(sunk_sect);

}

function setDock(dock, game, placed = false) {
    const dock_head = document.createElement('h2');
    const boat_lot = document.createElement('div');
    const boat = document.createElement('div');
    const dock_footer = document.createElement('h5');

    dock.classList.add('dock');
    boat.textContent = '';
    boat.classList.add('boat');

    boat_lot.classList.add('boat_lot');

    let ship_deck = game.pboard.ship_deck.sort();
    dock_head.textContent = 'Place Your Ships';
    dock_footer.textContent = 'Click one of the ships above to select it, press R to rotate it, and press enter to place it!';

    if (placed) {
        boat.classList.add('enemy');
        dock_head.textContent = 'Remaining Enemy Ships:';
        dock_footer.textContent = 'Keep Firing!'
        ship_deck = game.eboard.ships_standing
    }

    for (let i = 0; i < ship_deck.length; i++) {
        let tmp_boat = boat.cloneNode();
        let ship_length = Math.floor(ship_deck[i] / 5 * 100);
        tmp_boat.setAttribute("style", `width:${ship_length}%`);
        tmp_boat.onclick = function (e) {
            let length = Math.floor(parseInt(e.target.style.width
                .slice(0, -1)) / 20);
            let rotation = 0;
            game.pboard.setCurrShip(length);

            window.addEventListener('keydown', (ev) => {
                if (ev.key == 'r') {
                    rotation += 1;
                    rotation %= 4;
                    game.pboard.rotation = rotation;

                    layout(game);
                }
            });
        }
        boat_lot.appendChild(tmp_boat);
    }

    dock.appendChild(dock_head);
    dock.appendChild(boat_lot);
    dock.appendChild(dock_footer);
}

function buildBoards(game, board_sect) {
    board_sect.classList.add('game');
    const fullboard = document.createElement('div');
    fullboard.classList.add('fullboard');
    const top_board = document.createElement('div');
    const bot_board = document.createElement('div');
    setBoard(top_board, game.eboard, true);
    setBoard(bot_board, game.pboard);
    // add attack listeners to each cell in the top board
    fullboard.appendChild(top_board);
    fullboard.appendChild(bot_board);
    board_sect.appendChild(fullboard);
}

function setBoard(b_ele, board, enemy = false) {
    b_ele.classList.add('board');
    const emptyCell = document.createElement('div');
    const hitCell = document.createElement('div');
    const missCell = document.createElement('div');
    const sunkCell = document.createElement('div');
    const yoursCell = document.createElement('div');
    hitCell.classList.add('hit', 'cell');
    missCell.classList.add('miss', 'cell');
    sunkCell.classList.add('sunk', 'cell');
    emptyCell.classList.add('empty', 'cell');
    yoursCell.classList.add('yours', 'cell');

    if (enemy) {
        emptyCell.classList.add('ecell');
        hitCell.classList.add('ecell');
        missCell.classList.add('ecell');
        sunkCell.classList.add('ecell');
    } else {
        emptyCell.classList.add('pcell');
        hitCell.classList.add('pcell');
        missCell.classList.add('pcell');
        sunkCell.classList.add('pcell');
        yoursCell.classList.add('pcell');
    }

    emptyCell.textContent = '';

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            let tmp;
            if (board.board[i][j] == 0) {
                tmp = emptyCell.cloneNode();
            }
            else if (board.board[i][j] == 1) {
                tmp = missCell.cloneNode();
                const x = document.createElement('p');
                x.textContent = 'X';
                tmp.appendChild(x);
            }
            else if (board.board[i][j].isSunk()) {
                tmp = sunkCell.cloneNode();
            }
            else if (board.hit_list.includes(JSON.stringify([i, j]))) {
                tmp = hitCell.cloneNode();
                const x = document.createElement('p');
                x.textContent = 'X';
                tmp.appendChild(x);
            }
            else if (!enemy) {
                tmp = yoursCell.cloneNode();
            }
            else {
                tmp = emptyCell.cloneNode();
            }

            if (enemy) {
                tmp.id = 'e'
            } else {
                tmp.id = 'p'
            }
            tmp.id += 'r' + i + 'c' + j;

            b_ele.appendChild(tmp);
        }
    }
}

function attachAttackListener(cell_id, game) {
    let cell = document.getElementById(cell_id);
    cell.addEventListener('click', () => {
        console.log(cell.id)
        if (game.status < game_status["p1_turn"]) {
            alert('Please place your ships first!');
            return;
        }
        if (game.status == game_status["p1_win"] || game.status == game_status["p2_win"]) {
            alert('Game Over! Please reset to play again!');
            return;
        }
        let i = parseInt(cell.id.charAt(2));
        let j = parseInt(cell.id.charAt(4));
        let att = game.attack([i, j]);
        if (att == false) {
            alert('Invalid Attack!');
            return;
        }
        // if its ai mode, we should autoattack the player
        if (game.mode == 'easy' || game.mode == 'hard') {
            let ai_att = game.aiAttack();
            layout(game);
            return;
        }

        // update the cell based on the attack
        if (att == 'miss') {
            cell.classList.add('miss');
            const x = document.createElement('p');
            x.textContent = 'X';
            cell.appendChild(x);
        }
        else if (att == 'sunk') {
            // you sunk ____ ship!
            cell.classList.add('sunk');
        }
        else {
            console.log(att);
            cell.classList.add('hit');
            const x = document.createElement('p');
            x.textContent = 'X';
            cell.appendChild(x);
        }
        // if the mode is pvp, we should give the players a bit of time to see the result of the attack
        // then we should wipe the screen and display a new screen that says pass to player 2
        // then we should rerender the game
        console.log('pvpvpvpv')

        // layout(game);
        setTimeout(function () {
            document.body.innerHTML = '';
            // display the pass to player 2 screen
            const pass_screen = document.createElement('div');
            pass_screen.classList.add('pass');

            let player = (game.status == game_status["p1_turn"]) ? 'PLAYER 2' : 'PLAYER 1';

            const pass = document.createElement('h2');
            pass.textContent = 'PASS TO ' + player;
            pass_screen.appendChild(pass);
            document.body.appendChild(pass_screen);
            setTimeout(function () {

                layout(game);
            }, 3000);
        }, 1000);
    });
}

function winCondition(game) {
    game.reset();
    document.body.innerHTML = '';
    const end_screen = document.createElement('div');
    end_screen.classList.add('gg');
    end_screen.textContent = (param == 'p') ? 'User Wins' : 'AI Wins';
    document.body.appendChild(end_screen);
    buildTimeout(function () {

        layout(game);
    }, 3000);
}

function buildResetSection(game, reset_sect) {
    // pvp mode btn
    const pvp = document.createElement('button');
    pvp.textContent = 'PVP MODE';
    pvp.classList.add('pvpbtn');
    reset_sect.appendChild(pvp);
    pvp.onclick = () => {
        game.reset();
        game.mode = 'pvp';

        layout(game);
    }

    // easy mode btn
    const easy = document.createElement('button');
    easy.textContent = 'EASY MODE';
    easy.classList.add('easybtn');
    reset_sect.appendChild(easy);
    easy.onclick = () => {
        game.mode = 'easy';

        layout(game);
    }
    // hard mode btn
    const hard = document.createElement('button');
    hard.textContent = 'HARD MODE';
    hard.classList.add('hardbtn');
    reset_sect.appendChild(hard);
    hard.onclick = () => {
        game.mode = 'hard';

        layout(game);
    }

    const reset = document.createElement('button');
    reset.textContent = 'RESET';
    reset.classList.add('resetbtn');
    reset_sect.appendChild(reset);
    reset.onclick = () => {
        game.reset();

        layout(game);
    }
}

// function newGameForm(){

// }


// fix hover functionality
// fix attack listener
