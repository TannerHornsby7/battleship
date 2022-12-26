import { Ship, Gameboard, Player } from './logic'

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
    gb.recieveAttack([0, 0]);
    gb.recieveAttack([0, 0]);
    expect(gb.shipsStanding()).toBeFalsy();
});

test('missed hits are added to miss list', () => {
    const gb = Gameboard();
    expect(gb.miss_att.length).toBe(0);
    gb.recieveAttack([0, 0]);
    expect(gb.miss_att.length).toBe(1);
});

test('successful hits are added to hit list', () => {
    const gb = Gameboard();
    const ship = Ship(2);
    gb.placeShip(ship, [0,0], 0);
    gb.recieveAttack([0, 0]);
    expect(gb.hit_att.length).toBe(1);
});



// test('invalid location return err', ()=>{
//     const gb = Gameboard();
//     const ship = Ship(3);
//     gb.placeShip(ship, [0, 0], 3)
//     expect(gb.board[0][0]).toBeFalsy();
// });


// PLAYER TESTS

test('Player Exists', ()=>{
    expect(Player()).toBeTruthy();
});

test('Player Board Exists', ()=>{
    expect(Player().pboard).toBeTruthy();
});

test('AI Board Exists', ()=>{
    expect(Player().aiboard).toBeTruthy();
});

test('Attack on AI registers', () =>{
    const test_player = Player();
    const ship = Ship(1);
    test_player.aiboard.placeShip(ship, [0, 0], 0);
    expect(test_player.aiboard.shipsStanding()).toBeTruthy();
    test_player.attackAI([0, 0]);
    expect(test_player.aiboard.shipsStanding()).toBeFalsy();
});

test('Ai generated move is recieved', () => {
    const test_player = Player();
    expect(test_player.pboard.miss_att.length).toBe(0);
    test_player.attackP();
    expect(test_player.pboard.miss_att.length).toBe(1);
});


