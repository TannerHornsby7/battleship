import { Ship, Gameboard, Player, shipsToInts } from "./logic";
import { layout } from "./render"

function main(){
    const player = Player();
    player.pboard.placeShip(Ship(2), [0,0], 0); // top left facing right
    player.pboard.placeShip(Ship(3), [1,0], 1); // one down from top left facing down
    player.pboard.placeShip(Ship(3), [9,9], 2); // bottom right facing left
    player.pboard.placeShip(Ship(4), [9,0], 3); // bottom left facing up
    player.pboard.placeShip(Ship(5), [0,9], 2); // top right facing left


    player.aiboard.placeShip(Ship(2), [0,0], 0); // top left facing right
    player.aiboard.placeShip(Ship(3), [1,0], 1); // one down from top left facing down
    player.aiboard.placeShip(Ship(3), [9,9], 2); // bottom right facing left
    player.aiboard.placeShip(Ship(4), [9,0], 3); // bottom left facing up
    player.aiboard.placeShip(Ship(5), [0,9], 2); // top right facing left

    // const enemy_cells = document.querySelectorAll('.ecell');
    // enemy_cells.forEach((cell) => {

    // })
    // think i need to use promises 

    layout(shipsToInts(player.aiboard), shipsToInts(player.pboard), [2, 3, 3, 4, 5]);
}

function attack(player, cell) {
    let r = parseInt(cell.id.charAt(1));
    let c = parseInt(cell.id.charAt(3));
    player.attackAI([r, c]);
    document.body.innerHTML = '';
    layout(shipsToInts(player.aiboard), shipsToInts(player.pboard), [2, 3, 3, 4, 5]);
    const cells = document.querySelectorAll('.ecell');
    cells.forEach((cell) => {
        cell.addEventListener("click", attack(player, cell));
    });
}

main();

// 0 empty, 1 hit, 2 miss, 3 sunk
