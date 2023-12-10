import expect from 'expect';
import { Ship, Board, Game } from './logic';
import { game_status } from './logic';

// test that when reset is called, the boards are cleaned to be all zeros
test('reset() correctly resets boards', () => {
    const test_game = Game();
    test_game.init();
    const ship = Ship(1);
    test_game.attack([0, 0]);
    test_game.reset();
    // expect the boards to be all zeros
    for (let i = 0; i < 10; i++){
        for (let j = 0; j < 10; j++){
            expect(test_game.eboard.board[i][j]).toBeFalsy();
            expect(test_game.pboard.board[i][j]).toBeFalsy();
        }
    }
});