import './style.scss';

export function layout(b1, b2, ship_deck) {
    const h = document.createElement('div');
    const b = document.createElement('div');
    const f = document.createElement('div');
    const empty = document.createElement('div');
    empty.textContent = '';

    // SETTING HEADER
    h.classList.add('head');
    const title = document.createElement('h1');
    const gh = document.createElement('button');

    title.textContent = 'BATTLESHIP';
    gh.textContent = 'GITHUB'
    gh.click(()=>{
        open(github.com/TannerHornsby7/odin-battleship);
    })

    h.appendChild(empty);
    h.appendChild(title);
    h.appendChild(gh);

    // APPENDING ELEMENTS
    document.body.appendChild(h);
}

/*
TO-DO:
create header and footer dom module
create body render dom module
    have event listeners on each ship in the doc and each square in the board
create game over dom module

*/
