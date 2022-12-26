import { Ship, Gameboard, Player } from "./logic";

function main(){
    const player = Player();
    player.pboard.placeShip(Ship(2), [0,0], 0); // top left facing right
    player.pboard.placeShip(Ship(3), [1,0], 1); // one down from top left facing down
    player.pboard.placeShip(Ship(3), [9,9], 2); // bottom right facing left
    player.pboard.placeShip(Ship(4), [9,0], 3); // bottom left facing up
    player.pboard.placeShip(Ship(5), [9,0], 2); // top right facing left

    player.aiboard.placeShip(Ship(2), [0,0], 0); // top left facing right
    player.aiboard.placeShip(Ship(3), [1,0], 1); // one down from top left facing down
    player.aiboard.placeShip(Ship(3), [9,9], 2); // bottom right facing left
    player.aiboard.placeShip(Ship(4), [9,0], 3); // bottom left facing up
    player.aiboard.placeShip(Ship(5), [9,0], 2); // top right facing left

    // while(true){
    //     //request input from user (ask them to click a box)
    //     //convert that box to a loc and pass it into hit
    //     //if hit confirmed check wc & switch to ai turn, else request a new box
    // }
}

main();