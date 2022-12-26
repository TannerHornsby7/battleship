import './style.scss';

export function layout(b1, b2, ship_deck) {
    // Setting Body
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
    gh.onclick = function (){
        console.log('btn click');
        open('https://github.com/TannerHornsby7/odin-battleship');
    };

    h.appendChild(empty);
    h.appendChild(title);
    h.appendChild(gh);

    // SETTING FOOTER
    f.classList.add('foot');
    const name = document.createElement('h4');
    name.textContent = '@tannerhornsby7';
    f.appendChild(name);

    // SETTING BODY
    b.classList.add('body');
    // -info section
    const info_sect = document.createElement('div');
    info_sect.classList.add('info');
    const key = document.createElement('div');
    const dock = document.createElement('div');
    key.classList.add('key');
    dock.classList.add('dock');


    renderKey(key);
    renderDock(dock);
    
    // -board section
    const board_sect = document.createElement('div');

    // -reset/win section
    const reset_sect = document.createElement('div');
    // -appending each section to info
    info_sect.appendChild(key);
    info_sect.appendChild(dock);


    // appending each section to body
    b.appendChild(info_sect);
    b.appendChild(board_sect);
    b.appendChild(reset_sect);

    // APPENDING ELEMENTS
    document.body.appendChild(h);
    document.body.appendChild(b);
    document.body.appendChild(f);
}

function renderKey(key){
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

function renderDock(dock, ships_deck){
    if(!ships_deck) return;

    const dock_head = document.createElement('h2');
    const boat_lot = document.createElement('div');
    const boat = document.createElement('div');
    boat.textContent = '';
    boat.classList.add('boat');
    boat_lot.classList.add('boat_lot');
    const dock_footer = document.createElement('h5');

    ships_deck.sort();
    for(let i = 0; i < ships_deck.length; i++){
        let tmp_boat = boat.cloneNode();
        let ship_length = Math.Floor(ships_deck[i] / 5) * 10;
        b1.setAttribute("style","width:${ship_length}%");
        boat_lot.appendChild()
    }
    const b1 = boat.cloneNode();
    b1.setAttribute("style","width:20%");
    const b2 = boat.cloneNode();
    const b22 = boat.cloneNode();
    b2.setAttribute("style","width:40%");
    b22.setAttribute("style","width:40%");
    const b3 = boat.cloneNode();
    b3.setAttribute("style","width:60%");
    const b4 = boat.cloneNode();
    b4.setAttribute("style","width:80%");
    const b5 = boat.cloneNode();
    b5.setAttribute("style","width:100%");

    boat_lot.appendChild(b1);
    boat_lot.appendChild(b2);
    boat_lot.appendChild(b22);
    boat_lot.appendChild(b3);
    boat_lot.appendChild(b4);
    boat_lot.appendChild(b5);

    dock_head.textContent = 'Place Your Ships';
    dock_footer.textContent = 'Press R to rotate a ship!'

    dock.appendChild(dock_head);
    dock.appendChild(boat_lot);
    dock.appendChild(dock_footer);
}

/*
TO-DO:
create header and footer dom module
create body render dom module
    have event listeners on each ship in the doc and each square in the board
create game over dom module

*/
