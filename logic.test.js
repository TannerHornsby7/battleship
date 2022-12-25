import expect from 'expect';
import { Ship, Gameboard } from './logic'

// SHIP TESTS
test('Object Created', () => {
    expect(Ship(1)).toBeTruthy();
});

test('Sets Object Length, Hits, and Sunk', () => {
    expect(Ship(1).length).toBe(1);
    expect(Ship(1).hits).toBe(0);
    expect(Ship(1).sunk).toBeFalsy();
});

test('hit() increments the number of hits', () => {
    const ship = Ship(2);
    ship.hit();
    expect(ship.hits).toBe(1);
});

test('isSunk() tells if ship has sunk', () => {
    const ship = Ship(2);
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBeTruthy();
});

// GAMEBOARD TESTS
test('Gameboard Function Exists', ()=>{
    expect(Gameboard()).toBeTruthy();
});

test('Gameboard Creates 10x10 2D Array', ()=>{
    expect(Gameboard().board.length).toBe(10);
    expect(Gameboard().board[9].length).toBe(10);
});

test('Gameboard places ship into 10x10 2D Array', ()=>{
    const gb = Gameboard();
    const ship = Ship(2);
    gb.placeShip(ship, [0, 0], 0)
    expect(gb.board[0][0]).toBeTruthy();
    expect(gb.board[1][0]).toBeFalsy();
});

test('Gameboard places whole ship into 10x10 2D Array', ()=>{
    const gb = Gameboard();
    const ship = Ship(3);
    gb.placeShip(ship, [0, 0], 0)
    expect(gb.board[0][0]).toBeTruthy();
    expect(gb.board[0][1]).toBeTruthy();
    expect(gb.board[0][2]).toBeTruthy();
    expect(gb.board[0][3]).toBeFalsy();
});

test('Attack changes hit amt', ()=>{
    const gb = Gameboard();
    const ship = Ship(2);
    gb.placeShip(ship, [0, 0], 0)
    expect(gb.board[0][0].hits).toBe(0);
    gb.recieveAttack([0,0]);
    expect(gb.board[0][0].hits).toBe(1);
});

test('Attack on other section changes hit amt', ()=>{
    const gb = Gameboard();
    const ship = Ship(2);
    gb.placeShip(ship, [0, 0], 0)
    expect(gb.board[0][0].hits).toBe(0);
    gb.recieveAttack([0,1]);
    expect(gb.board[0][0].hits).toBe(1);
});

test('is there a ship', ()=>{
    const gb = Gameboard();
    const ship = Ship(2);
    gb.placeShip(ship, [0, 0], 0);
    expect(gb.shipsStanding()).toBeTruthy();
});

test('is there a ship after hits', ()=>{
    const gb = Gameboard();
    const ship = Ship(2);
    gb.placeShip(ship, [0, 0], 0);
    gb.board[0][0].hit();
    gb.board[0][0].hit();
    expect(gb.shipsStanding()).toBeFalsy();
});


// test('invalid location return err', ()=>{
//     const gb = Gameboard();
//     const ship = Ship(3);
//     gb.placeShip(ship, [0, 0], 3)
//     expect(gb.board[0][0]).toBeFalsy();
// });



