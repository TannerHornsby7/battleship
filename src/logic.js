// creates a ship of a specified length
function Ship(length) {
    return {
        "length": length,
        "hits": 0,
        hit() {
            this.hits += 1;
        },
        isSunk() {
            return this.hits >= this.length
        }
    }
}

const TOTAL_SHIPS = [2, 3, 3, 4, 5]

// creates a board which places ships and recieves attacks
function Board() { // 10x10 board # x letters
    return {
        "ship_deck": [...TOTAL_SHIPS],
        "ships_standing": [...TOTAL_SHIPS],
        "curr_ship": undefined,
        "rotation": 0,
        "hit_neighbors": [],
        "hit_list": [],
        "board": [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ],
        setCurrShip(len = this.ship_deck[0]) {
            this.curr_ship = Ship(len);
        },

        // determines validity of location
        validLoc(loc, place = false) {
            const row = loc[0]
            const col = loc[1]
            if (!(0 <= row && row <= 9)) {
                console.log('invalid y location: ' + row);
                return false;
            }
            if (!(0 <= col && col <= 9)) {
                console.log('invalid x location: ' + col);
                return false;
            }
            if (place == true && this.board[row][col] != 0) {
                console.log('there is already a ship here');
                return false;
            }
            if (this.board[row][col] == 1) {
                console.log('you have already attacked this location '
                    + row + ' , ' + col);
                return false;
            }
            return true;
        },

        // places a ship given a loc and optional direction [0R,1D,2L,3U]
        placeShip(ship, loc, direction = this.rotation, check = false) {
            const row = loc[0]
            const col = loc[1]
            let ship_locs = [];

            for (let i = 0; i < ship.length; i++) {
                let tmp_loc = undefined;
                switch (direction) {
                    case 1: // down
                        tmp_loc = [row - i, col];
                        break;
                    case 2: // left
                        tmp_loc = [row, col - i];
                        break;
                    case 3: // up
                        tmp_loc = [row + i, col];
                        break;
                    default: // right
                        tmp_loc = [row, col + i];
                }
                if (!this.validLoc(tmp_loc, true)) {
                    return false;
                }
                ship_locs.push(tmp_loc);
            }

            if (check) { // if its just a check, not a placement, we return the spots
                return ship_locs;
            }

            ship_locs.forEach((seg) => {
                this.board[seg[0]][seg[1]] = ship;
            });
            return true;
        },

        // returns 'sink', 'hit', 'miss', or 'invalid
        recieveAttack(loc) {
            const row = loc[0]
            const col = loc[1]
            // check that the provided hit is valid
            if (!this.validLoc(loc)) return 0;

            // if its a miss, update the board and return miss
            if (this.board[row][col] == 0) {
                this.board[row][col] = 1;
                return 'miss';
            }

            this.board[row][col].hit();
            this.hit_list.push(JSON.stringify(loc));

            if (this.board[row][col].isSunk()) {
                let idx = this.ships_standing.findIndex(
                    (val) => val == this.board[row][col].length
                );
                this.ships_standing.splice(idx, 1);

                if (!this.ships_standing.length) {
                    //hit sink and game winner!
                    return 69;
                }

                // remove all the elements from the hit list that are sunk
                this.hit_list = this.hit_list.filter(
                    (val) => {
                        const row = JSON.parse(val)[0];
                        const col = JSON.parse(val)[1];
                        console.log(row, col)   
                        !(this.board[row][col].isSunk())
                    }
                );

                return 'sunk';
            }

            //hit no sink
            return 'hit';
        }
    }
}

const game_status = {
    "p1_setting_up": 1,
    "p2_setting_up": 2,
    "p1_turn": 3,
    "p2_turn": 4,
    "p1_win": 5,
    "p2_win": 6,
}

// creates a Game with two players who perform actions on their boards
function Game() {
    return {
        "status": game_status.p1_setting_up,
        "mode": "easy",
        "p1board": Board(),
        // p2 board is the AI's board
        "p2board": Board(),
        "pboard": 'bananas',
        "eboard": 'bananas',
        // initialize the boards
        init() {
            this.pboard = this.p1board;
            this.eboard = this.p2board;
        },
        // have the current player attack a location
        attack(loc) {
            // attack the enemy board, if the attack is valid
            // and the attack is a hit, check if the enemy is sunk
            // if the enemy is sunk, check if the game is over
            // if the game is over, set the status to the winner
            // if the game is not over, switch the player turn
            let att = this.eboard.recieveAttack(loc);
            if (!att) {
                return false;
            }

            // otherwise the attack is valide so we will be updating the game.status
            // thus we need to figure out the current status and use it to determine
            // what the new status should be
            let curr_status = this.status;
            switch (curr_status) {
                case game_status.p1_turn:
                    if (att == 69) {
                        this.status = game_status.p1_win;
                    } else {
                        this.status = game_status.p2_turn;
                    }
                    break;
                case game_status.p2_turn:
                    if (att == 69) {
                        this.status = game_status.p2_win;
                    } else {
                        this.status = game_status.p1_turn;
                    }
                    break;
                default:
                    console.log('invalid status: ' + curr_status);
            }
            // update the pboard and eboard based on the status
            if (this.status == game_status.p1_turn) {
                this.pboard = this.p1board;
                this.eboard = this.p2board;
            } else {
                this.pboard = this.p2board;
                this.eboard = this.p1board;
            }

            return att;
        },
        // places current players ships randomly
        autoSet() {
            console.log(this.status)
            // if the status isn't 0 or 1, then we don't need to set the board
            if (!(this.status == game_status.p1_setting_up ||
                this.status == game_status.p2_setting_up)) {
                return false;
            }
            // place the ships
            while (this.pboard.ship_deck.length) {
                let ship_len = this.pboard.ship_deck.pop();
                let placed = false;
                let ship = Ship(ship_len);

                while (placed == false) {
                    let randdir = Math.floor(Math.abs(Math.random()) * 4);
                    let randx = Math.floor(Math.abs(Math.random()) * 9);
                    let randy = Math.floor(Math.abs(Math.random()) * 9);

                    placed = this.pboard.placeShip(ship, [randx, randy], randdir);
                }
            }

            // advance the status of the game
            let curr_status = this.status;
            switch (curr_status) {
                case game_status.p1_setting_up:
                    this.status = game_status.p2_setting_up;
                    break;
                case game_status.p2_setting_up:
                    this.status = game_status.p1_turn;
                    break;
                default:
                    console.log('invalid status: ' + curr_status);
            }

            console.log(this.status)
            // if mode is ai, set the ai's board as well
            if (this.mode != 'pvp') {
                this.swapPlayer();
                this.autoSet();

                // advance the status to p1 turn
                this.status = game_status.p1_turn;
                this.swapPlayer();
            } else {
                this.swapPlayer();
                // if mode is pvp, then we need to display the switch players
                // screen for 3 seconds and then swap the player
            }
        },
        swapPlayer() {
            if (this.pboard == this.p1board) {
                this.pboard = this.p2board;
                this.eboard = this.p1board;
            } else {
                this.pboard = this.p1board;
                this.eboard = this.p2board;
            }
        },
        // attacks opposing player automatically
        aiAttack() {
            if (this.mode == 'easy') {
                let randx = Math.floor(Math.random() * 10);
                let randy = Math.floor(Math.random() * 10);
                let att = this.attack([randx, randy]);
                while (att == 0) {
                    randx = Math.floor(Math.random() * 10);
                    randy = Math.floor(Math.random() * 10);
                    att = this.attack([randx, randy]);
                }
            }
            return 'banana'
        },
        // reset the game
        reset() {
            this.p1board = Board();
            this.p2oard = Board();
            this.pboard = this.p1board;
            this.eboard = this.p2board;
        },
    };
}

export { game_status, Ship, Board, Game }