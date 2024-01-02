/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Board: () => (/* binding */ Board),
/* harmony export */   Game: () => (/* binding */ Game),
/* harmony export */   Ship: () => (/* binding */ Ship),
/* harmony export */   game_status: () => (/* binding */ game_status)
/* harmony export */ });
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

let run_cnt = 0 
const TOTAL_SHIPS = [5, 4, 3, 3, 2]

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
            // if the location is in the hit list, return false
            if (this.hit_list.includes(JSON.stringify(loc))) {
                // console.log('you have already attacked this location '
                //     + loc[0] + ' , ' + loc[1]);
                return false;
            }
            const row = loc[0]
            const col = loc[1]
            if (!(0 <= row && row <= 9)) {
                // console.log('invalid y location: ' + row);
                return false;
            }
            if (!(0 <= col && col <= 9)) {
                // console.log('invalid x location: ' + col);
                return false;
            }
            if (place == true && this.board[row][col] != 0) {
                // console.log('there is already a ship here');
                return false;
            }
            if (this.board[row][col] == 1) {
                // console.log('you have already attacked this location '
                //     + row + ' , ' + col);
                return false;
            }
            if (this.board[row][col] != 0 && this.board[row][col].isSunk()) {
                console.log('this ship is sunk!');
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
                const old_hit_list = [...this.hit_list];
                this.hit_list = this.hit_list.filter(
                    (val) => {
                        const row = JSON.parse(val)[0];
                        const col = JSON.parse(val)[1];
                        return !(this.board[row][col].isSunk())
                    }
                );
                console.log('updated hit list from ', old_hit_list, ' to ', this.hit_list);
                return 'sunk';
            }

            //hit no sink
            return 'hit';
        },
        // top pivot gives the best location to attack given we only have one hit to pivot from
        topPivot(loc) {
            // we need to check the 4 locations around the loc and see which one has the most
            // unseen locations
            let directions = this.strengthSortedDirections(loc);
            let top_dir = directions[0][0];
            let top_loc = loc;
            switch (top_dir) {
                case 'left':
                    top_loc[0] += 1;
                    break;
                case 'right':
                    top_loc[0] -= 1;
                    break;
                case 'down':
                    top_loc[1] += 1;
                    break;
                case 'up':
                    top_loc[1] -= 1;
                    break;
                default:
                    console.log('invalid direction: ' + top_dir);
            }
            return top_loc;
        },
        // adjacents takes a location and returns an ordered list of directions
        // from the location in question. It is ordered by the number unseen
        // locations from the location in that direction.
        // The first element in the list is the direction with longest run
        // in it's direction. The second element in the list is the location with the
        strengthSortedDirections(loc) {
            let maintenence_loc = [...loc];
            let res = [];
            let directions = this.validDirections(loc);
            directions.forEach((dir) => {
                let tmp_loc = [...loc];
                let tmp_cnt = 0;
                while (this.validLoc(tmp_loc)) {
                    tmp_cnt += 1;
                    switch (dir) {
                        case 'left':
                            tmp_loc[0] += 1;
                            break;
                        case 'right':
                            tmp_loc[0] -= 1;
                            break;
                        case 'down':
                            tmp_loc[1] += 1;
                            break;
                        case 'up':
                            tmp_loc[1] -= 1;
                            break;
                        default:
                            console.log('invalid direction: ' + dir);
                    }
                    maintenence_loc = tmp_loc;
                }
                // if its invalid because its off the board, we should subtract one
                // from the count, if its invalid because its a miss, we should
                // subtract 2 from the count
                const out_of_bounds = (maintenence_loc[0] < 0 || maintenence_loc[0] > 9 ||
                    maintenence_loc[1] < 0 || maintenence_loc[1] > 9)
                
                if (!out_of_bounds && this.board[maintenence_loc[0]][maintenence_loc[1]] == 1) {
                    tmp_cnt -= 1;
                }
                res.push([dir, tmp_cnt]);
            });
            res.sort((a, b) => b[1] - a[1]);
            // console.log('the resulting list of directions sorted by their strength is: ', res);
            return res;
        },
        validDirections(loc) {
            let directions = [];
            const row = loc[0];
            const col = loc[1];
            if (this.validLoc([row + 1, col])) {
                directions.push('left');
            }
            if (this.validLoc([row - 1, col])) {
                directions.push('right');
            }
            if (this.validLoc([row, col + 1])) {
                directions.push('down');
            }
            if (this.validLoc([row, col - 1])) {
                directions.push('up');
            }
            // console.log('the valid directions for location', loc, ' are ', directions)
            return directions;
        },

        topLoc(searchDepth = 1, debug = False) {
            // pick the location in the array with the highest score which is
            // the sum of its adjacents list [1]
            let top_score = 0
            let top_loc = [0, 0]
            let scores = []
            // make an empty 10x10 adjacents_cnt array
            for (let i = 0; i < 10; i++) {
                for (let j = 0; j < 10; j++) {
                    let loc = [i, j]
                    // if this location can't be attacked, skip it
                    if (!this.validLoc(loc)) {
                        continue
                    }
                    // score should prioritize locations by their relative
                    // centering between left and right adjacent locations
                    // and up and down adjacent locations, using strengthSortedDirections
                    // we can get a list of directions sorted by their strength
                    // we can then use this list to determine the score of the location
                    let score = 0
                    let directions = this.strengthSortedDirections(loc)
                    let direction_strengths = {
                        'left': 0,
                        'right': 0,
                        'up': 0,
                        'down': 0,
                    }
                    for (let k = 0; k < directions.length; k++) {
                        let dir = directions[k][0]
                        let cnt = directions[k][1]
                        direction_strengths[dir] = cnt
                    }
                    // we can now use the direction_strengths to determine the score
                    // by taking the min of the left and right strengths and the min
                    // of the up and down strengths
                    // console.log(direction_strengths)
                    let left_right_strength = Math.min(direction_strengths['left'], direction_strengths['right'])
                    let up_down_strength = Math.min(direction_strengths['up'], direction_strengths['down'])
                    // RESEARCH FURTHER
                    score = left_right_strength + up_down_strength
                    // console.log('raw direction based score is', score)

                    // boost middle locations by using an inverse quadratic multiplier to the score
                    let dist = Math.sqrt(Math.pow(4.5 - loc[0], 2) + Math.pow(4.5 - loc[1], 2))
                    // we add because we really only want this to break ties
                    // pick a random number between 0 and .000001
                    let rand = Math.random() / 1000000
                    score = score + rand
                    // console.log(score)
                    if (searchDepth > 1 || debug) {
                        scores.push([loc, score])
                    }
                    if (score > top_score) {
                        top_score = score
                        top_loc = loc
                    }
                }
            }
            // if searchDepth is greater than 1, we should sort the scores and
            // in decreasing order and take the first searchDepth elements
            if (searchDepth > 1 || debug) {
                scores.sort((a, b) => b[1] - a[1])
                if (debug) {
                    // log top 3 scores
                    // the top 3 scores were
                    console.log('the top 3 scores were')
                    for (let i = 0; i < 3; i++) {
                        console.log(scores[i][1])
                    }
                    // the top 3 locations were
                    console.log('the top 3 locations were')
                    for (let i = 0; i < 3; i++) {
                        console.log(scores[i][0])
                    }
                }
                if (searchDepth > 1) {
                    return scores[-1]
                }
            }
            return top_loc
        },
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

const readable_status = {
    1: " is setting up their board",
    2: " is setting up their board",
    3: "'s turn",
    4: "'s turn",
    5: " wins!",
    6: " wins!",
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
        "p1_name": 'Human',
        "p2_name": 'AI',
        "turns": -2, // to account for 2 set calls
        readable_status(input) {
            let player = this.pboard == this.p1board ? this.p1_name : this.p2_name;
            return player + readable_status[input];
        },

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
            // if the location isn't valid, return false
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
                        console.log('player 1 was up, and sunk the enemy')
                        this.status = game_status.p1_win;
                    }
                    break;
                case game_status.p2_turn:
                    if (att == 69) {
                        console.log('player 2 was up, and sunk the enemy')
                        this.status = game_status.p2_win;
                    }
                    break;
                default:
                    console.log('invalid status: ' + curr_status);
            }
            // switch players
            this.swapPlayer();
            return att;
        },
        // places current players ships randomly
        autoSet() {
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
            // swap the player board and enemy board
            this.swapPlayer();
        },
        swapPlayer() {
            if (this.status == game_status.p1_win ||
                this.status == game_status.p2_win) {
                return (this.pboard == this.p1board) ? 'Player 1' : 'Player 2';
            }
            this.turns = this.turns + 1;
            console.log(this.turns)
            if (this.pboard == this.p1board) {
                this.pboard = this.p2board;
                this.eboard = this.p1board;
            } else if (this.pboard == this.p2board) {
                this.pboard = this.p1board;
                this.eboard = this.p2board;
            } else {
                console.log('invalid player board');
            }
            // advance the status of the game based on the previous status
            // we disregard win status' because those auto rerender the page
            let old_status = this.status;
            if (this.status == game_status.p1_setting_up) {
                this.status = game_status.p2_setting_up;
            } else if (this.status == game_status.p2_setting_up) {
                this.status = game_status.p1_turn;
            } else {
                this.status = this.status == game_status.p1_turn ? game_status.p2_turn : game_status.p1_turn;
            }

        },
        // attacks opposing player automatically
        aiAttack() {
            // we get the target using aiTarget
            let target = this.aiTarget();
            // we attack the target using attack
            let att = this.attack(target);
            // if the attack was unsuccessful, we need to try again
            let att_cnt = 1
            while (!att) {
                att_cnt += 1
                target = this.aiTarget(att_cnt);
                att = this.attack(target);
            }
            return 'successful attack'
        },
        // finds the target for an aiAttack
        aiTarget(att_cnt = 1) {
            run_cnt += 1
            if (run_cnt > 1000) {
                throw new Error('too many runs')
                return [0, 0]
            }
            if (this.mode == 'easy') {
                let randr = Math.floor(Math.random() * 10);
                let randc = Math.floor(Math.random() * 10);
                return [randr, randc]
            }
            if (!this.eboard.hit_list || this.eboard.hit_list.length == 0) {
                // use the location with the highest score
                return this.eboard.topLoc(att_cnt, true)
            }
            // if the hit list is one, then we need to look at 4 possible
            // locations to attack
            if (this.eboard.hit_list && this.eboard.hit_list.length == 1) {
                // there are 4 possible locations to attack, we should check
                // if each is valid and then pick the one with the most space
                // ahead of it. So lets get a list of the possible locations
                // and then check each one
                // possible locs = [right, left, up, down]
                // parse this.eboard.hit_list[0] into loc form
                let targ = JSON.parse(this.eboard.hit_list[0]);
                let row = targ[0];
                let col = targ[1];
                console.log('calling top Pivot on ', [row, col]);
                return this.eboard.topPivot([row, col])
            }
            console.log('performing hit manauever');

            // if the hit list is greater than one, then we determine the
            // direction of the hit list (row or col) and use the ends of
            // the list to determine the next attack. If the hit list is
            // we start by getting the first hit and the last hit
            let first_hit = JSON.parse(this.eboard.hit_list[0]);
            let last_hit = JSON.parse(this.eboard.hit_list[
                this.eboard.hit_list.length - 1]);
            let fr = first_hit[0];
            let fc = first_hit[1];
            let lr = last_hit[0];
            let lc = last_hit[1];
            // if the first hit and last hit are in the same row, then we
            // need to attack the next location in the row
            if (fr == lr) {
                // if the last hit is to the right of the first hit, then
                // we need to attack to the right of the last hit
                if (fc < lc) {
                    // check the right location
                    if (this.eboard.validLoc([lr, lc + 1])) {
                        return [lr, lc + 1];
                    } else if (this.eboard.validLoc([fr, fc - 1])) {
                        return [fr, fc - 1];
                    }
                }
                // if the last hit is to the left of the first hit, then
                // we need to attack to the left of the last hit
                if (fc > lc) {
                    // check the left location
                    if (this.eboard.validLoc([lr, lc - 1])) {
                        return [lr, lc - 1];
                    } else if (this.eboard.validLoc([fr, fc + 1])) {
                        // if the left location is not valid, then we need to
                        // attack to the right of the first hit
                        return [fr, fc + 1];
                    }
                }
                // if we make it to here without returning, then we got
                // two ships next to each other, so we need to attack around the first
                // hit
                if (this.eboard.validLoc([fr + 1, fc])) {
                    return [fr + 1, fc];
                }
                if (this.eboard.validLoc([fr - 1, fc])) {
                    return [fr - 1, fc];
                }
                if (this.eboard.validLoc([fr, fc + 1])) {
                    return [fr, fc + 1];
                }
                if (this.eboard.validLoc([fr, fc - 1])) {
                    return [fr, fc - 1];
                }
                console.log('we should never get here two rows next to each other edition');
            }
            // if the first hit and last hit are in the same col, then we
            // need to attack the next location in the col
            if (fc == lc) {
                // if the last hit is below the first hit, then we need to
                // attack below the last hit
                if (fr < lr) {
                    // check the down location
                    if (this.eboard.validLoc([lr + 1, lc])) {
                        return [lr + 1, lc];
                    } else if (this.eboard.validLoc([fr - 1, fc])) {
                        // if the down location is not valid, then we need to
                        // attack above the first hit
                        return [fr - 1, fc];
                    }
                }
                // if the last hit is above the first hit, then we need to
                // attack above the last hit
                if (fr > lr) {
                    // check the up location
                    if (this.eboard.validLoc([lr - 1, lc])) {
                        return [lr - 1, lc];
                    } else if (this.eboard.validLoc([fr + 1, fc])) {
                        // if the up location is not valid, then we need to
                        // attack below the first hit
                        return [fr + 1, fc];
                    }
                }
                // if we make it to here we got two ships next to each other,
                // so we need to attack to the left and right of the first hit
                if (this.eboard.validLoc([fr, fc + 1])) {
                    return [fr, fc + 1];
                }
                if (this.eboard.validLoc([fr, fc - 1])) {
                    return [fr, fc - 1];
                }
                if (this.eboard.validLoc([fr + 1, fc])) {
                    return [fr + 1, fc];
                }
                if (this.eboard.validLoc([fr - 1, fc])) {
                    return [fr - 1, fc];
                }
                console.log('we should never get here two cols next to each other edition');
            }
        },
        // reset the game
        reset() {
            this.pboard = null;
            this.eboard = null;
            this.p1board = null;
            this.p2board = null;
            this.turns = -2;
            this.status = game_status.p1_setting_up;
            this.mode = "easy";
            this.p1board = Board();
            this.p2board = Board();
            this.pboard = this.p1board;
            this.eboard = this.p2board;
        },
    };
}


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naWMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEIsaUJBQWlCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlCQUF5QjtBQUN6QjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFFBQVE7QUFDcEMsZ0NBQWdDLFFBQVE7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLHVCQUF1QjtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsT0FBTztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxPQUFPO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9sb2dpYy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIGNyZWF0ZXMgYSBzaGlwIG9mIGEgc3BlY2lmaWVkIGxlbmd0aFxuZnVuY3Rpb24gU2hpcChsZW5ndGgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBcImxlbmd0aFwiOiBsZW5ndGgsXG4gICAgICAgIFwiaGl0c1wiOiAwLFxuICAgICAgICBoaXQoKSB7XG4gICAgICAgICAgICB0aGlzLmhpdHMgKz0gMTtcbiAgICAgICAgfSxcbiAgICAgICAgaXNTdW5rKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGl0cyA+PSB0aGlzLmxlbmd0aFxuICAgICAgICB9XG4gICAgfVxufVxuXG5sZXQgcnVuX2NudCA9IDAgXG5jb25zdCBUT1RBTF9TSElQUyA9IFs1LCA0LCAzLCAzLCAyXVxuXG4vLyBjcmVhdGVzIGEgYm9hcmQgd2hpY2ggcGxhY2VzIHNoaXBzIGFuZCByZWNpZXZlcyBhdHRhY2tzXG5mdW5jdGlvbiBCb2FyZCgpIHsgLy8gMTB4MTAgYm9hcmQgIyB4IGxldHRlcnNcbiAgICByZXR1cm4ge1xuICAgICAgICBcInNoaXBfZGVja1wiOiBbLi4uVE9UQUxfU0hJUFNdLFxuICAgICAgICBcInNoaXBzX3N0YW5kaW5nXCI6IFsuLi5UT1RBTF9TSElQU10sXG4gICAgICAgIFwiY3Vycl9zaGlwXCI6IHVuZGVmaW5lZCxcbiAgICAgICAgXCJyb3RhdGlvblwiOiAwLFxuICAgICAgICBcImhpdF9uZWlnaGJvcnNcIjogW10sXG4gICAgICAgIFwiaGl0X2xpc3RcIjogW10sXG4gICAgICAgIFwiYm9hcmRcIjogW1xuICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgICBdLFxuICAgICAgICBzZXRDdXJyU2hpcChsZW4gPSB0aGlzLnNoaXBfZGVja1swXSkge1xuICAgICAgICAgICAgdGhpcy5jdXJyX3NoaXAgPSBTaGlwKGxlbik7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gZGV0ZXJtaW5lcyB2YWxpZGl0eSBvZiBsb2NhdGlvblxuICAgICAgICB2YWxpZExvYyhsb2MsIHBsYWNlID0gZmFsc2UpIHtcbiAgICAgICAgICAgIC8vIGlmIHRoZSBsb2NhdGlvbiBpcyBpbiB0aGUgaGl0IGxpc3QsIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgaWYgKHRoaXMuaGl0X2xpc3QuaW5jbHVkZXMoSlNPTi5zdHJpbmdpZnkobG9jKSkpIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygneW91IGhhdmUgYWxyZWFkeSBhdHRhY2tlZCB0aGlzIGxvY2F0aW9uICdcbiAgICAgICAgICAgICAgICAvLyAgICAgKyBsb2NbMF0gKyAnICwgJyArIGxvY1sxXSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgcm93ID0gbG9jWzBdXG4gICAgICAgICAgICBjb25zdCBjb2wgPSBsb2NbMV1cbiAgICAgICAgICAgIGlmICghKDAgPD0gcm93ICYmIHJvdyA8PSA5KSkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdpbnZhbGlkIHkgbG9jYXRpb246ICcgKyByb3cpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghKDAgPD0gY29sICYmIGNvbCA8PSA5KSkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdpbnZhbGlkIHggbG9jYXRpb246ICcgKyBjb2wpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwbGFjZSA9PSB0cnVlICYmIHRoaXMuYm9hcmRbcm93XVtjb2xdICE9IDApIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygndGhlcmUgaXMgYWxyZWFkeSBhIHNoaXAgaGVyZScpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkW3Jvd11bY29sXSA9PSAxKSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3lvdSBoYXZlIGFscmVhZHkgYXR0YWNrZWQgdGhpcyBsb2NhdGlvbiAnXG4gICAgICAgICAgICAgICAgLy8gICAgICsgcm93ICsgJyAsICcgKyBjb2wpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkW3Jvd11bY29sXSAhPSAwICYmIHRoaXMuYm9hcmRbcm93XVtjb2xdLmlzU3VuaygpKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3RoaXMgc2hpcCBpcyBzdW5rIScpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vIHBsYWNlcyBhIHNoaXAgZ2l2ZW4gYSBsb2MgYW5kIG9wdGlvbmFsIGRpcmVjdGlvbiBbMFIsMUQsMkwsM1VdXG4gICAgICAgIHBsYWNlU2hpcChzaGlwLCBsb2MsIGRpcmVjdGlvbiA9IHRoaXMucm90YXRpb24sIGNoZWNrID0gZmFsc2UpIHtcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IGxvY1swXVxuICAgICAgICAgICAgY29uc3QgY29sID0gbG9jWzFdXG4gICAgICAgICAgICBsZXQgc2hpcF9sb2NzID0gW107XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCB0bXBfbG9jID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTogLy8gZG93blxuICAgICAgICAgICAgICAgICAgICAgICAgdG1wX2xvYyA9IFtyb3cgLSBpLCBjb2xdO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjogLy8gbGVmdFxuICAgICAgICAgICAgICAgICAgICAgICAgdG1wX2xvYyA9IFtyb3csIGNvbCAtIGldO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzogLy8gdXBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRtcF9sb2MgPSBbcm93ICsgaSwgY29sXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiAvLyByaWdodFxuICAgICAgICAgICAgICAgICAgICAgICAgdG1wX2xvYyA9IFtyb3csIGNvbCArIGldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMudmFsaWRMb2ModG1wX2xvYywgdHJ1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzaGlwX2xvY3MucHVzaCh0bXBfbG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNoZWNrKSB7IC8vIGlmIGl0cyBqdXN0IGEgY2hlY2ssIG5vdCBhIHBsYWNlbWVudCwgd2UgcmV0dXJuIHRoZSBzcG90c1xuICAgICAgICAgICAgICAgIHJldHVybiBzaGlwX2xvY3M7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNoaXBfbG9jcy5mb3JFYWNoKChzZWcpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3NlZ1swXV1bc2VnWzFdXSA9IHNoaXA7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vIHJldHVybnMgJ3NpbmsnLCAnaGl0JywgJ21pc3MnLCBvciAnaW52YWxpZFxuICAgICAgICByZWNpZXZlQXR0YWNrKGxvYykge1xuICAgICAgICAgICAgY29uc3Qgcm93ID0gbG9jWzBdXG4gICAgICAgICAgICBjb25zdCBjb2wgPSBsb2NbMV1cbiAgICAgICAgICAgIC8vIGNoZWNrIHRoYXQgdGhlIHByb3ZpZGVkIGhpdCBpcyB2YWxpZFxuICAgICAgICAgICAgaWYgKCF0aGlzLnZhbGlkTG9jKGxvYykpIHJldHVybiAwO1xuXG4gICAgICAgICAgICAvLyBpZiBpdHMgYSBtaXNzLCB1cGRhdGUgdGhlIGJvYXJkIGFuZCByZXR1cm4gbWlzc1xuICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRbcm93XVtjb2xdID09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3Jvd11bY29sXSA9IDE7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdtaXNzJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5ib2FyZFtyb3ddW2NvbF0uaGl0KCk7XG4gICAgICAgICAgICB0aGlzLmhpdF9saXN0LnB1c2goSlNPTi5zdHJpbmdpZnkobG9jKSk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkW3Jvd11bY29sXS5pc1N1bmsoKSkge1xuICAgICAgICAgICAgICAgIGxldCBpZHggPSB0aGlzLnNoaXBzX3N0YW5kaW5nLmZpbmRJbmRleChcbiAgICAgICAgICAgICAgICAgICAgKHZhbCkgPT4gdmFsID09IHRoaXMuYm9hcmRbcm93XVtjb2xdLmxlbmd0aFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgdGhpcy5zaGlwc19zdGFuZGluZy5zcGxpY2UoaWR4LCAxKTtcblxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5zaGlwc19zdGFuZGluZy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9oaXQgc2luayBhbmQgZ2FtZSB3aW5uZXIhXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA2OTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyByZW1vdmUgYWxsIHRoZSBlbGVtZW50cyBmcm9tIHRoZSBoaXQgbGlzdCB0aGF0IGFyZSBzdW5rXG4gICAgICAgICAgICAgICAgY29uc3Qgb2xkX2hpdF9saXN0ID0gWy4uLnRoaXMuaGl0X2xpc3RdO1xuICAgICAgICAgICAgICAgIHRoaXMuaGl0X2xpc3QgPSB0aGlzLmhpdF9saXN0LmZpbHRlcihcbiAgICAgICAgICAgICAgICAgICAgKHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm93ID0gSlNPTi5wYXJzZSh2YWwpWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29sID0gSlNPTi5wYXJzZSh2YWwpWzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICEodGhpcy5ib2FyZFtyb3ddW2NvbF0uaXNTdW5rKCkpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1cGRhdGVkIGhpdCBsaXN0IGZyb20gJywgb2xkX2hpdF9saXN0LCAnIHRvICcsIHRoaXMuaGl0X2xpc3QpO1xuICAgICAgICAgICAgICAgIHJldHVybiAnc3Vuayc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vaGl0IG5vIHNpbmtcbiAgICAgICAgICAgIHJldHVybiAnaGl0JztcbiAgICAgICAgfSxcbiAgICAgICAgLy8gdG9wIHBpdm90IGdpdmVzIHRoZSBiZXN0IGxvY2F0aW9uIHRvIGF0dGFjayBnaXZlbiB3ZSBvbmx5IGhhdmUgb25lIGhpdCB0byBwaXZvdCBmcm9tXG4gICAgICAgIHRvcFBpdm90KGxvYykge1xuICAgICAgICAgICAgLy8gd2UgbmVlZCB0byBjaGVjayB0aGUgNCBsb2NhdGlvbnMgYXJvdW5kIHRoZSBsb2MgYW5kIHNlZSB3aGljaCBvbmUgaGFzIHRoZSBtb3N0XG4gICAgICAgICAgICAvLyB1bnNlZW4gbG9jYXRpb25zXG4gICAgICAgICAgICBsZXQgZGlyZWN0aW9ucyA9IHRoaXMuc3RyZW5ndGhTb3J0ZWREaXJlY3Rpb25zKGxvYyk7XG4gICAgICAgICAgICBsZXQgdG9wX2RpciA9IGRpcmVjdGlvbnNbMF1bMF07XG4gICAgICAgICAgICBsZXQgdG9wX2xvYyA9IGxvYztcbiAgICAgICAgICAgIHN3aXRjaCAodG9wX2Rpcikge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICAgICAgICAgICAgICB0b3BfbG9jWzBdICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgICAgICAgICAgICAgdG9wX2xvY1swXSAtPSAxO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdkb3duJzpcbiAgICAgICAgICAgICAgICAgICAgdG9wX2xvY1sxXSArPSAxO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICd1cCc6XG4gICAgICAgICAgICAgICAgICAgIHRvcF9sb2NbMV0gLT0gMTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2ludmFsaWQgZGlyZWN0aW9uOiAnICsgdG9wX2Rpcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdG9wX2xvYztcbiAgICAgICAgfSxcbiAgICAgICAgLy8gYWRqYWNlbnRzIHRha2VzIGEgbG9jYXRpb24gYW5kIHJldHVybnMgYW4gb3JkZXJlZCBsaXN0IG9mIGRpcmVjdGlvbnNcbiAgICAgICAgLy8gZnJvbSB0aGUgbG9jYXRpb24gaW4gcXVlc3Rpb24uIEl0IGlzIG9yZGVyZWQgYnkgdGhlIG51bWJlciB1bnNlZW5cbiAgICAgICAgLy8gbG9jYXRpb25zIGZyb20gdGhlIGxvY2F0aW9uIGluIHRoYXQgZGlyZWN0aW9uLlxuICAgICAgICAvLyBUaGUgZmlyc3QgZWxlbWVudCBpbiB0aGUgbGlzdCBpcyB0aGUgZGlyZWN0aW9uIHdpdGggbG9uZ2VzdCBydW5cbiAgICAgICAgLy8gaW4gaXQncyBkaXJlY3Rpb24uIFRoZSBzZWNvbmQgZWxlbWVudCBpbiB0aGUgbGlzdCBpcyB0aGUgbG9jYXRpb24gd2l0aCB0aGVcbiAgICAgICAgc3RyZW5ndGhTb3J0ZWREaXJlY3Rpb25zKGxvYykge1xuICAgICAgICAgICAgbGV0IG1haW50ZW5lbmNlX2xvYyA9IFsuLi5sb2NdO1xuICAgICAgICAgICAgbGV0IHJlcyA9IFtdO1xuICAgICAgICAgICAgbGV0IGRpcmVjdGlvbnMgPSB0aGlzLnZhbGlkRGlyZWN0aW9ucyhsb2MpO1xuICAgICAgICAgICAgZGlyZWN0aW9ucy5mb3JFYWNoKChkaXIpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdG1wX2xvYyA9IFsuLi5sb2NdO1xuICAgICAgICAgICAgICAgIGxldCB0bXBfY250ID0gMDtcbiAgICAgICAgICAgICAgICB3aGlsZSAodGhpcy52YWxpZExvYyh0bXBfbG9jKSkge1xuICAgICAgICAgICAgICAgICAgICB0bXBfY250ICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZGlyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bXBfbG9jWzBdICs9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG1wX2xvY1swXSAtPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZG93bic6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG1wX2xvY1sxXSArPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAndXAnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRtcF9sb2NbMV0gLT0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2ludmFsaWQgZGlyZWN0aW9uOiAnICsgZGlyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBtYWludGVuZW5jZV9sb2MgPSB0bXBfbG9jO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBpZiBpdHMgaW52YWxpZCBiZWNhdXNlIGl0cyBvZmYgdGhlIGJvYXJkLCB3ZSBzaG91bGQgc3VidHJhY3Qgb25lXG4gICAgICAgICAgICAgICAgLy8gZnJvbSB0aGUgY291bnQsIGlmIGl0cyBpbnZhbGlkIGJlY2F1c2UgaXRzIGEgbWlzcywgd2Ugc2hvdWxkXG4gICAgICAgICAgICAgICAgLy8gc3VidHJhY3QgMiBmcm9tIHRoZSBjb3VudFxuICAgICAgICAgICAgICAgIGNvbnN0IG91dF9vZl9ib3VuZHMgPSAobWFpbnRlbmVuY2VfbG9jWzBdIDwgMCB8fCBtYWludGVuZW5jZV9sb2NbMF0gPiA5IHx8XG4gICAgICAgICAgICAgICAgICAgIG1haW50ZW5lbmNlX2xvY1sxXSA8IDAgfHwgbWFpbnRlbmVuY2VfbG9jWzFdID4gOSlcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoIW91dF9vZl9ib3VuZHMgJiYgdGhpcy5ib2FyZFttYWludGVuZW5jZV9sb2NbMF1dW21haW50ZW5lbmNlX2xvY1sxXV0gPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICB0bXBfY250IC09IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlcy5wdXNoKFtkaXIsIHRtcF9jbnRdKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmVzLnNvcnQoKGEsIGIpID0+IGJbMV0gLSBhWzFdKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd0aGUgcmVzdWx0aW5nIGxpc3Qgb2YgZGlyZWN0aW9ucyBzb3J0ZWQgYnkgdGhlaXIgc3RyZW5ndGggaXM6ICcsIHJlcyk7XG4gICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICB9LFxuICAgICAgICB2YWxpZERpcmVjdGlvbnMobG9jKSB7XG4gICAgICAgICAgICBsZXQgZGlyZWN0aW9ucyA9IFtdO1xuICAgICAgICAgICAgY29uc3Qgcm93ID0gbG9jWzBdO1xuICAgICAgICAgICAgY29uc3QgY29sID0gbG9jWzFdO1xuICAgICAgICAgICAgaWYgKHRoaXMudmFsaWRMb2MoW3JvdyArIDEsIGNvbF0pKSB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aW9ucy5wdXNoKCdsZWZ0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy52YWxpZExvYyhbcm93IC0gMSwgY29sXSkpIHtcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb25zLnB1c2goJ3JpZ2h0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy52YWxpZExvYyhbcm93LCBjb2wgKyAxXSkpIHtcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb25zLnB1c2goJ2Rvd24nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnZhbGlkTG9jKFtyb3csIGNvbCAtIDFdKSkge1xuICAgICAgICAgICAgICAgIGRpcmVjdGlvbnMucHVzaCgndXAnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd0aGUgdmFsaWQgZGlyZWN0aW9ucyBmb3IgbG9jYXRpb24nLCBsb2MsICcgYXJlICcsIGRpcmVjdGlvbnMpXG4gICAgICAgICAgICByZXR1cm4gZGlyZWN0aW9ucztcbiAgICAgICAgfSxcblxuICAgICAgICB0b3BMb2Moc2VhcmNoRGVwdGggPSAxLCBkZWJ1ZyA9IEZhbHNlKSB7XG4gICAgICAgICAgICAvLyBwaWNrIHRoZSBsb2NhdGlvbiBpbiB0aGUgYXJyYXkgd2l0aCB0aGUgaGlnaGVzdCBzY29yZSB3aGljaCBpc1xuICAgICAgICAgICAgLy8gdGhlIHN1bSBvZiBpdHMgYWRqYWNlbnRzIGxpc3QgWzFdXG4gICAgICAgICAgICBsZXQgdG9wX3Njb3JlID0gMFxuICAgICAgICAgICAgbGV0IHRvcF9sb2MgPSBbMCwgMF1cbiAgICAgICAgICAgIGxldCBzY29yZXMgPSBbXVxuICAgICAgICAgICAgLy8gbWFrZSBhbiBlbXB0eSAxMHgxMCBhZGphY2VudHNfY250IGFycmF5XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxvYyA9IFtpLCBqXVxuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGlzIGxvY2F0aW9uIGNhbid0IGJlIGF0dGFja2VkLCBza2lwIGl0XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy52YWxpZExvYyhsb2MpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIHNjb3JlIHNob3VsZCBwcmlvcml0aXplIGxvY2F0aW9ucyBieSB0aGVpciByZWxhdGl2ZVxuICAgICAgICAgICAgICAgICAgICAvLyBjZW50ZXJpbmcgYmV0d2VlbiBsZWZ0IGFuZCByaWdodCBhZGphY2VudCBsb2NhdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgLy8gYW5kIHVwIGFuZCBkb3duIGFkamFjZW50IGxvY2F0aW9ucywgdXNpbmcgc3RyZW5ndGhTb3J0ZWREaXJlY3Rpb25zXG4gICAgICAgICAgICAgICAgICAgIC8vIHdlIGNhbiBnZXQgYSBsaXN0IG9mIGRpcmVjdGlvbnMgc29ydGVkIGJ5IHRoZWlyIHN0cmVuZ3RoXG4gICAgICAgICAgICAgICAgICAgIC8vIHdlIGNhbiB0aGVuIHVzZSB0aGlzIGxpc3QgdG8gZGV0ZXJtaW5lIHRoZSBzY29yZSBvZiB0aGUgbG9jYXRpb25cbiAgICAgICAgICAgICAgICAgICAgbGV0IHNjb3JlID0gMFxuICAgICAgICAgICAgICAgICAgICBsZXQgZGlyZWN0aW9ucyA9IHRoaXMuc3RyZW5ndGhTb3J0ZWREaXJlY3Rpb25zKGxvYylcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRpcmVjdGlvbl9zdHJlbmd0aHMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnbGVmdCc6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAncmlnaHQnOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3VwJzogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICdkb3duJzogMCxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IGRpcmVjdGlvbnMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkaXIgPSBkaXJlY3Rpb25zW2tdWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY250ID0gZGlyZWN0aW9uc1trXVsxXVxuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uX3N0cmVuZ3Roc1tkaXJdID0gY250XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gd2UgY2FuIG5vdyB1c2UgdGhlIGRpcmVjdGlvbl9zdHJlbmd0aHMgdG8gZGV0ZXJtaW5lIHRoZSBzY29yZVxuICAgICAgICAgICAgICAgICAgICAvLyBieSB0YWtpbmcgdGhlIG1pbiBvZiB0aGUgbGVmdCBhbmQgcmlnaHQgc3RyZW5ndGhzIGFuZCB0aGUgbWluXG4gICAgICAgICAgICAgICAgICAgIC8vIG9mIHRoZSB1cCBhbmQgZG93biBzdHJlbmd0aHNcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGlyZWN0aW9uX3N0cmVuZ3RocylcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxlZnRfcmlnaHRfc3RyZW5ndGggPSBNYXRoLm1pbihkaXJlY3Rpb25fc3RyZW5ndGhzWydsZWZ0J10sIGRpcmVjdGlvbl9zdHJlbmd0aHNbJ3JpZ2h0J10pXG4gICAgICAgICAgICAgICAgICAgIGxldCB1cF9kb3duX3N0cmVuZ3RoID0gTWF0aC5taW4oZGlyZWN0aW9uX3N0cmVuZ3Roc1sndXAnXSwgZGlyZWN0aW9uX3N0cmVuZ3Roc1snZG93biddKVxuICAgICAgICAgICAgICAgICAgICAvLyBSRVNFQVJDSCBGVVJUSEVSXG4gICAgICAgICAgICAgICAgICAgIHNjb3JlID0gbGVmdF9yaWdodF9zdHJlbmd0aCArIHVwX2Rvd25fc3RyZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3JhdyBkaXJlY3Rpb24gYmFzZWQgc2NvcmUgaXMnLCBzY29yZSlcblxuICAgICAgICAgICAgICAgICAgICAvLyBib29zdCBtaWRkbGUgbG9jYXRpb25zIGJ5IHVzaW5nIGFuIGludmVyc2UgcXVhZHJhdGljIG11bHRpcGxpZXIgdG8gdGhlIHNjb3JlXG4gICAgICAgICAgICAgICAgICAgIGxldCBkaXN0ID0gTWF0aC5zcXJ0KE1hdGgucG93KDQuNSAtIGxvY1swXSwgMikgKyBNYXRoLnBvdyg0LjUgLSBsb2NbMV0sIDIpKVxuICAgICAgICAgICAgICAgICAgICAvLyB3ZSBhZGQgYmVjYXVzZSB3ZSByZWFsbHkgb25seSB3YW50IHRoaXMgdG8gYnJlYWsgdGllc1xuICAgICAgICAgICAgICAgICAgICAvLyBwaWNrIGEgcmFuZG9tIG51bWJlciBiZXR3ZWVuIDAgYW5kIC4wMDAwMDFcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJhbmQgPSBNYXRoLnJhbmRvbSgpIC8gMTAwMDAwMFxuICAgICAgICAgICAgICAgICAgICBzY29yZSA9IHNjb3JlICsgcmFuZFxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzY29yZSlcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlYXJjaERlcHRoID4gMSB8fCBkZWJ1Zykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcmVzLnB1c2goW2xvYywgc2NvcmVdKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChzY29yZSA+IHRvcF9zY29yZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wX3Njb3JlID0gc2NvcmVcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcF9sb2MgPSBsb2NcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGlmIHNlYXJjaERlcHRoIGlzIGdyZWF0ZXIgdGhhbiAxLCB3ZSBzaG91bGQgc29ydCB0aGUgc2NvcmVzIGFuZFxuICAgICAgICAgICAgLy8gaW4gZGVjcmVhc2luZyBvcmRlciBhbmQgdGFrZSB0aGUgZmlyc3Qgc2VhcmNoRGVwdGggZWxlbWVudHNcbiAgICAgICAgICAgIGlmIChzZWFyY2hEZXB0aCA+IDEgfHwgZGVidWcpIHtcbiAgICAgICAgICAgICAgICBzY29yZXMuc29ydCgoYSwgYikgPT4gYlsxXSAtIGFbMV0pXG4gICAgICAgICAgICAgICAgaWYgKGRlYnVnKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGxvZyB0b3AgMyBzY29yZXNcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlIHRvcCAzIHNjb3JlcyB3ZXJlXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0aGUgdG9wIDMgc2NvcmVzIHdlcmUnKVxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coc2NvcmVzW2ldWzFdKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZSB0b3AgMyBsb2NhdGlvbnMgd2VyZVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndGhlIHRvcCAzIGxvY2F0aW9ucyB3ZXJlJylcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNjb3Jlc1tpXVswXSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc2VhcmNoRGVwdGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzY29yZXNbLTFdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRvcF9sb2NcbiAgICAgICAgfSxcbiAgICB9XG59XG5cbmNvbnN0IGdhbWVfc3RhdHVzID0ge1xuICAgIFwicDFfc2V0dGluZ191cFwiOiAxLFxuICAgIFwicDJfc2V0dGluZ191cFwiOiAyLFxuICAgIFwicDFfdHVyblwiOiAzLFxuICAgIFwicDJfdHVyblwiOiA0LFxuICAgIFwicDFfd2luXCI6IDUsXG4gICAgXCJwMl93aW5cIjogNixcbn1cblxuY29uc3QgcmVhZGFibGVfc3RhdHVzID0ge1xuICAgIDE6IFwiIGlzIHNldHRpbmcgdXAgdGhlaXIgYm9hcmRcIixcbiAgICAyOiBcIiBpcyBzZXR0aW5nIHVwIHRoZWlyIGJvYXJkXCIsXG4gICAgMzogXCIncyB0dXJuXCIsXG4gICAgNDogXCIncyB0dXJuXCIsXG4gICAgNTogXCIgd2lucyFcIixcbiAgICA2OiBcIiB3aW5zIVwiLFxufVxuXG4vLyBjcmVhdGVzIGEgR2FtZSB3aXRoIHR3byBwbGF5ZXJzIHdobyBwZXJmb3JtIGFjdGlvbnMgb24gdGhlaXIgYm9hcmRzXG5mdW5jdGlvbiBHYW1lKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIFwic3RhdHVzXCI6IGdhbWVfc3RhdHVzLnAxX3NldHRpbmdfdXAsXG4gICAgICAgIFwibW9kZVwiOiBcImVhc3lcIixcbiAgICAgICAgXCJwMWJvYXJkXCI6IEJvYXJkKCksXG4gICAgICAgIC8vIHAyIGJvYXJkIGlzIHRoZSBBSSdzIGJvYXJkXG4gICAgICAgIFwicDJib2FyZFwiOiBCb2FyZCgpLFxuICAgICAgICBcInBib2FyZFwiOiAnYmFuYW5hcycsXG4gICAgICAgIFwiZWJvYXJkXCI6ICdiYW5hbmFzJyxcbiAgICAgICAgXCJwMV9uYW1lXCI6ICdIdW1hbicsXG4gICAgICAgIFwicDJfbmFtZVwiOiAnQUknLFxuICAgICAgICBcInR1cm5zXCI6IC0yLCAvLyB0byBhY2NvdW50IGZvciAyIHNldCBjYWxsc1xuICAgICAgICByZWFkYWJsZV9zdGF0dXMoaW5wdXQpIHtcbiAgICAgICAgICAgIGxldCBwbGF5ZXIgPSB0aGlzLnBib2FyZCA9PSB0aGlzLnAxYm9hcmQgPyB0aGlzLnAxX25hbWUgOiB0aGlzLnAyX25hbWU7XG4gICAgICAgICAgICByZXR1cm4gcGxheWVyICsgcmVhZGFibGVfc3RhdHVzW2lucHV0XTtcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBpbml0aWFsaXplIHRoZSBib2FyZHNcbiAgICAgICAgaW5pdCgpIHtcbiAgICAgICAgICAgIHRoaXMucGJvYXJkID0gdGhpcy5wMWJvYXJkO1xuICAgICAgICAgICAgdGhpcy5lYm9hcmQgPSB0aGlzLnAyYm9hcmQ7XG4gICAgICAgIH0sXG4gICAgICAgIC8vIGhhdmUgdGhlIGN1cnJlbnQgcGxheWVyIGF0dGFjayBhIGxvY2F0aW9uXG4gICAgICAgIGF0dGFjayhsb2MpIHtcbiAgICAgICAgICAgIC8vIGF0dGFjayB0aGUgZW5lbXkgYm9hcmQsIGlmIHRoZSBhdHRhY2sgaXMgdmFsaWRcbiAgICAgICAgICAgIC8vIGFuZCB0aGUgYXR0YWNrIGlzIGEgaGl0LCBjaGVjayBpZiB0aGUgZW5lbXkgaXMgc3Vua1xuICAgICAgICAgICAgLy8gaWYgdGhlIGVuZW15IGlzIHN1bmssIGNoZWNrIGlmIHRoZSBnYW1lIGlzIG92ZXJcbiAgICAgICAgICAgIC8vIGlmIHRoZSBnYW1lIGlzIG92ZXIsIHNldCB0aGUgc3RhdHVzIHRvIHRoZSB3aW5uZXJcbiAgICAgICAgICAgIC8vIGlmIHRoZSBnYW1lIGlzIG5vdCBvdmVyLCBzd2l0Y2ggdGhlIHBsYXllciB0dXJuXG4gICAgICAgICAgICAvLyBpZiB0aGUgbG9jYXRpb24gaXNuJ3QgdmFsaWQsIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgbGV0IGF0dCA9IHRoaXMuZWJvYXJkLnJlY2lldmVBdHRhY2sobG9jKTtcbiAgICAgICAgICAgIGlmICghYXR0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBvdGhlcndpc2UgdGhlIGF0dGFjayBpcyB2YWxpZGUgc28gd2Ugd2lsbCBiZSB1cGRhdGluZyB0aGUgZ2FtZS5zdGF0dXNcbiAgICAgICAgICAgIC8vIHRodXMgd2UgbmVlZCB0byBmaWd1cmUgb3V0IHRoZSBjdXJyZW50IHN0YXR1cyBhbmQgdXNlIGl0IHRvIGRldGVybWluZVxuICAgICAgICAgICAgLy8gd2hhdCB0aGUgbmV3IHN0YXR1cyBzaG91bGQgYmVcbiAgICAgICAgICAgIGxldCBjdXJyX3N0YXR1cyA9IHRoaXMuc3RhdHVzO1xuICAgICAgICAgICAgc3dpdGNoIChjdXJyX3N0YXR1cykge1xuICAgICAgICAgICAgICAgIGNhc2UgZ2FtZV9zdGF0dXMucDFfdHVybjpcbiAgICAgICAgICAgICAgICAgICAgaWYgKGF0dCA9PSA2OSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3BsYXllciAxIHdhcyB1cCwgYW5kIHN1bmsgdGhlIGVuZW15JylcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gZ2FtZV9zdGF0dXMucDFfd2luO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgZ2FtZV9zdGF0dXMucDJfdHVybjpcbiAgICAgICAgICAgICAgICAgICAgaWYgKGF0dCA9PSA2OSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3BsYXllciAyIHdhcyB1cCwgYW5kIHN1bmsgdGhlIGVuZW15JylcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gZ2FtZV9zdGF0dXMucDJfd2luO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpbnZhbGlkIHN0YXR1czogJyArIGN1cnJfc3RhdHVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHN3aXRjaCBwbGF5ZXJzXG4gICAgICAgICAgICB0aGlzLnN3YXBQbGF5ZXIoKTtcbiAgICAgICAgICAgIHJldHVybiBhdHQ7XG4gICAgICAgIH0sXG4gICAgICAgIC8vIHBsYWNlcyBjdXJyZW50IHBsYXllcnMgc2hpcHMgcmFuZG9tbHlcbiAgICAgICAgYXV0b1NldCgpIHtcbiAgICAgICAgICAgIC8vIGlmIHRoZSBzdGF0dXMgaXNuJ3QgMCBvciAxLCB0aGVuIHdlIGRvbid0IG5lZWQgdG8gc2V0IHRoZSBib2FyZFxuICAgICAgICAgICAgaWYgKCEodGhpcy5zdGF0dXMgPT0gZ2FtZV9zdGF0dXMucDFfc2V0dGluZ191cCB8fFxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzID09IGdhbWVfc3RhdHVzLnAyX3NldHRpbmdfdXApKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gcGxhY2UgdGhlIHNoaXBzXG4gICAgICAgICAgICB3aGlsZSAodGhpcy5wYm9hcmQuc2hpcF9kZWNrLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGxldCBzaGlwX2xlbiA9IHRoaXMucGJvYXJkLnNoaXBfZGVjay5wb3AoKTtcbiAgICAgICAgICAgICAgICBsZXQgcGxhY2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgbGV0IHNoaXAgPSBTaGlwKHNoaXBfbGVuKTtcblxuICAgICAgICAgICAgICAgIHdoaWxlIChwbGFjZWQgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJhbmRkaXIgPSBNYXRoLmZsb29yKE1hdGguYWJzKE1hdGgucmFuZG9tKCkpICogNCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCByYW5keCA9IE1hdGguZmxvb3IoTWF0aC5hYnMoTWF0aC5yYW5kb20oKSkgKiA5KTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJhbmR5ID0gTWF0aC5mbG9vcihNYXRoLmFicyhNYXRoLnJhbmRvbSgpKSAqIDkpO1xuXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlZCA9IHRoaXMucGJvYXJkLnBsYWNlU2hpcChzaGlwLCBbcmFuZHgsIHJhbmR5XSwgcmFuZGRpcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gc3dhcCB0aGUgcGxheWVyIGJvYXJkIGFuZCBlbmVteSBib2FyZFxuICAgICAgICAgICAgdGhpcy5zd2FwUGxheWVyKCk7XG4gICAgICAgIH0sXG4gICAgICAgIHN3YXBQbGF5ZXIoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT0gZ2FtZV9zdGF0dXMucDFfd2luIHx8XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0dXMgPT0gZ2FtZV9zdGF0dXMucDJfd2luKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICh0aGlzLnBib2FyZCA9PSB0aGlzLnAxYm9hcmQpID8gJ1BsYXllciAxJyA6ICdQbGF5ZXIgMic7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnR1cm5zID0gdGhpcy50dXJucyArIDE7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnR1cm5zKVxuICAgICAgICAgICAgaWYgKHRoaXMucGJvYXJkID09IHRoaXMucDFib2FyZCkge1xuICAgICAgICAgICAgICAgIHRoaXMucGJvYXJkID0gdGhpcy5wMmJvYXJkO1xuICAgICAgICAgICAgICAgIHRoaXMuZWJvYXJkID0gdGhpcy5wMWJvYXJkO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBib2FyZCA9PSB0aGlzLnAyYm9hcmQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBib2FyZCA9IHRoaXMucDFib2FyZDtcbiAgICAgICAgICAgICAgICB0aGlzLmVib2FyZCA9IHRoaXMucDJib2FyZDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2ludmFsaWQgcGxheWVyIGJvYXJkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBhZHZhbmNlIHRoZSBzdGF0dXMgb2YgdGhlIGdhbWUgYmFzZWQgb24gdGhlIHByZXZpb3VzIHN0YXR1c1xuICAgICAgICAgICAgLy8gd2UgZGlzcmVnYXJkIHdpbiBzdGF0dXMnIGJlY2F1c2UgdGhvc2UgYXV0byByZXJlbmRlciB0aGUgcGFnZVxuICAgICAgICAgICAgbGV0IG9sZF9zdGF0dXMgPSB0aGlzLnN0YXR1cztcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PSBnYW1lX3N0YXR1cy5wMV9zZXR0aW5nX3VwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSBnYW1lX3N0YXR1cy5wMl9zZXR0aW5nX3VwO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXR1cyA9PSBnYW1lX3N0YXR1cy5wMl9zZXR0aW5nX3VwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSBnYW1lX3N0YXR1cy5wMV90dXJuO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1cyA9IHRoaXMuc3RhdHVzID09IGdhbWVfc3RhdHVzLnAxX3R1cm4gPyBnYW1lX3N0YXR1cy5wMl90dXJuIDogZ2FtZV9zdGF0dXMucDFfdHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9LFxuICAgICAgICAvLyBhdHRhY2tzIG9wcG9zaW5nIHBsYXllciBhdXRvbWF0aWNhbGx5XG4gICAgICAgIGFpQXR0YWNrKCkge1xuICAgICAgICAgICAgLy8gd2UgZ2V0IHRoZSB0YXJnZXQgdXNpbmcgYWlUYXJnZXRcbiAgICAgICAgICAgIGxldCB0YXJnZXQgPSB0aGlzLmFpVGFyZ2V0KCk7XG4gICAgICAgICAgICAvLyB3ZSBhdHRhY2sgdGhlIHRhcmdldCB1c2luZyBhdHRhY2tcbiAgICAgICAgICAgIGxldCBhdHQgPSB0aGlzLmF0dGFjayh0YXJnZXQpO1xuICAgICAgICAgICAgLy8gaWYgdGhlIGF0dGFjayB3YXMgdW5zdWNjZXNzZnVsLCB3ZSBuZWVkIHRvIHRyeSBhZ2FpblxuICAgICAgICAgICAgbGV0IGF0dF9jbnQgPSAxXG4gICAgICAgICAgICB3aGlsZSAoIWF0dCkge1xuICAgICAgICAgICAgICAgIGF0dF9jbnQgKz0gMVxuICAgICAgICAgICAgICAgIHRhcmdldCA9IHRoaXMuYWlUYXJnZXQoYXR0X2NudCk7XG4gICAgICAgICAgICAgICAgYXR0ID0gdGhpcy5hdHRhY2sodGFyZ2V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAnc3VjY2Vzc2Z1bCBhdHRhY2snXG4gICAgICAgIH0sXG4gICAgICAgIC8vIGZpbmRzIHRoZSB0YXJnZXQgZm9yIGFuIGFpQXR0YWNrXG4gICAgICAgIGFpVGFyZ2V0KGF0dF9jbnQgPSAxKSB7XG4gICAgICAgICAgICBydW5fY250ICs9IDFcbiAgICAgICAgICAgIGlmIChydW5fY250ID4gMTAwMCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigndG9vIG1hbnkgcnVucycpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFswLCAwXVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMubW9kZSA9PSAnZWFzeScpIHtcbiAgICAgICAgICAgICAgICBsZXQgcmFuZHIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgICAgICAgICAgbGV0IHJhbmRjID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICAgICAgICAgIHJldHVybiBbcmFuZHIsIHJhbmRjXVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0aGlzLmVib2FyZC5oaXRfbGlzdCB8fCB0aGlzLmVib2FyZC5oaXRfbGlzdC5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgIC8vIHVzZSB0aGUgbG9jYXRpb24gd2l0aCB0aGUgaGlnaGVzdCBzY29yZVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmVib2FyZC50b3BMb2MoYXR0X2NudCwgdHJ1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGlmIHRoZSBoaXQgbGlzdCBpcyBvbmUsIHRoZW4gd2UgbmVlZCB0byBsb29rIGF0IDQgcG9zc2libGVcbiAgICAgICAgICAgIC8vIGxvY2F0aW9ucyB0byBhdHRhY2tcbiAgICAgICAgICAgIGlmICh0aGlzLmVib2FyZC5oaXRfbGlzdCAmJiB0aGlzLmVib2FyZC5oaXRfbGlzdC5sZW5ndGggPT0gMSkge1xuICAgICAgICAgICAgICAgIC8vIHRoZXJlIGFyZSA0IHBvc3NpYmxlIGxvY2F0aW9ucyB0byBhdHRhY2ssIHdlIHNob3VsZCBjaGVja1xuICAgICAgICAgICAgICAgIC8vIGlmIGVhY2ggaXMgdmFsaWQgYW5kIHRoZW4gcGljayB0aGUgb25lIHdpdGggdGhlIG1vc3Qgc3BhY2VcbiAgICAgICAgICAgICAgICAvLyBhaGVhZCBvZiBpdC4gU28gbGV0cyBnZXQgYSBsaXN0IG9mIHRoZSBwb3NzaWJsZSBsb2NhdGlvbnNcbiAgICAgICAgICAgICAgICAvLyBhbmQgdGhlbiBjaGVjayBlYWNoIG9uZVxuICAgICAgICAgICAgICAgIC8vIHBvc3NpYmxlIGxvY3MgPSBbcmlnaHQsIGxlZnQsIHVwLCBkb3duXVxuICAgICAgICAgICAgICAgIC8vIHBhcnNlIHRoaXMuZWJvYXJkLmhpdF9saXN0WzBdIGludG8gbG9jIGZvcm1cbiAgICAgICAgICAgICAgICBsZXQgdGFyZyA9IEpTT04ucGFyc2UodGhpcy5lYm9hcmQuaGl0X2xpc3RbMF0pO1xuICAgICAgICAgICAgICAgIGxldCByb3cgPSB0YXJnWzBdO1xuICAgICAgICAgICAgICAgIGxldCBjb2wgPSB0YXJnWzFdO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjYWxsaW5nIHRvcCBQaXZvdCBvbiAnLCBbcm93LCBjb2xdKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lYm9hcmQudG9wUGl2b3QoW3JvdywgY29sXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwZXJmb3JtaW5nIGhpdCBtYW5hdWV2ZXInKTtcblxuICAgICAgICAgICAgLy8gaWYgdGhlIGhpdCBsaXN0IGlzIGdyZWF0ZXIgdGhhbiBvbmUsIHRoZW4gd2UgZGV0ZXJtaW5lIHRoZVxuICAgICAgICAgICAgLy8gZGlyZWN0aW9uIG9mIHRoZSBoaXQgbGlzdCAocm93IG9yIGNvbCkgYW5kIHVzZSB0aGUgZW5kcyBvZlxuICAgICAgICAgICAgLy8gdGhlIGxpc3QgdG8gZGV0ZXJtaW5lIHRoZSBuZXh0IGF0dGFjay4gSWYgdGhlIGhpdCBsaXN0IGlzXG4gICAgICAgICAgICAvLyB3ZSBzdGFydCBieSBnZXR0aW5nIHRoZSBmaXJzdCBoaXQgYW5kIHRoZSBsYXN0IGhpdFxuICAgICAgICAgICAgbGV0IGZpcnN0X2hpdCA9IEpTT04ucGFyc2UodGhpcy5lYm9hcmQuaGl0X2xpc3RbMF0pO1xuICAgICAgICAgICAgbGV0IGxhc3RfaGl0ID0gSlNPTi5wYXJzZSh0aGlzLmVib2FyZC5oaXRfbGlzdFtcbiAgICAgICAgICAgICAgICB0aGlzLmVib2FyZC5oaXRfbGlzdC5sZW5ndGggLSAxXSk7XG4gICAgICAgICAgICBsZXQgZnIgPSBmaXJzdF9oaXRbMF07XG4gICAgICAgICAgICBsZXQgZmMgPSBmaXJzdF9oaXRbMV07XG4gICAgICAgICAgICBsZXQgbHIgPSBsYXN0X2hpdFswXTtcbiAgICAgICAgICAgIGxldCBsYyA9IGxhc3RfaGl0WzFdO1xuICAgICAgICAgICAgLy8gaWYgdGhlIGZpcnN0IGhpdCBhbmQgbGFzdCBoaXQgYXJlIGluIHRoZSBzYW1lIHJvdywgdGhlbiB3ZVxuICAgICAgICAgICAgLy8gbmVlZCB0byBhdHRhY2sgdGhlIG5leHQgbG9jYXRpb24gaW4gdGhlIHJvd1xuICAgICAgICAgICAgaWYgKGZyID09IGxyKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIGxhc3QgaGl0IGlzIHRvIHRoZSByaWdodCBvZiB0aGUgZmlyc3QgaGl0LCB0aGVuXG4gICAgICAgICAgICAgICAgLy8gd2UgbmVlZCB0byBhdHRhY2sgdG8gdGhlIHJpZ2h0IG9mIHRoZSBsYXN0IGhpdFxuICAgICAgICAgICAgICAgIGlmIChmYyA8IGxjKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIHRoZSByaWdodCBsb2NhdGlvblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5lYm9hcmQudmFsaWRMb2MoW2xyLCBsYyArIDFdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtsciwgbGMgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmVib2FyZC52YWxpZExvYyhbZnIsIGZjIC0gMV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW2ZyLCBmYyAtIDFdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBsYXN0IGhpdCBpcyB0byB0aGUgbGVmdCBvZiB0aGUgZmlyc3QgaGl0LCB0aGVuXG4gICAgICAgICAgICAgICAgLy8gd2UgbmVlZCB0byBhdHRhY2sgdG8gdGhlIGxlZnQgb2YgdGhlIGxhc3QgaGl0XG4gICAgICAgICAgICAgICAgaWYgKGZjID4gbGMpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgdGhlIGxlZnQgbG9jYXRpb25cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZWJvYXJkLnZhbGlkTG9jKFtsciwgbGMgLSAxXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbbHIsIGxjIC0gMV07XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5lYm9hcmQudmFsaWRMb2MoW2ZyLCBmYyArIDFdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlIGxlZnQgbG9jYXRpb24gaXMgbm90IHZhbGlkLCB0aGVuIHdlIG5lZWQgdG9cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGF0dGFjayB0byB0aGUgcmlnaHQgb2YgdGhlIGZpcnN0IGhpdFxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtmciwgZmMgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBpZiB3ZSBtYWtlIGl0IHRvIGhlcmUgd2l0aG91dCByZXR1cm5pbmcsIHRoZW4gd2UgZ290XG4gICAgICAgICAgICAgICAgLy8gdHdvIHNoaXBzIG5leHQgdG8gZWFjaCBvdGhlciwgc28gd2UgbmVlZCB0byBhdHRhY2sgYXJvdW5kIHRoZSBmaXJzdFxuICAgICAgICAgICAgICAgIC8vIGhpdFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmVib2FyZC52YWxpZExvYyhbZnIgKyAxLCBmY10pKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbZnIgKyAxLCBmY107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmVib2FyZC52YWxpZExvYyhbZnIgLSAxLCBmY10pKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbZnIgLSAxLCBmY107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmVib2FyZC52YWxpZExvYyhbZnIsIGZjICsgMV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbZnIsIGZjICsgMV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmVib2FyZC52YWxpZExvYyhbZnIsIGZjIC0gMV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbZnIsIGZjIC0gMV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd3ZSBzaG91bGQgbmV2ZXIgZ2V0IGhlcmUgdHdvIHJvd3MgbmV4dCB0byBlYWNoIG90aGVyIGVkaXRpb24nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGlmIHRoZSBmaXJzdCBoaXQgYW5kIGxhc3QgaGl0IGFyZSBpbiB0aGUgc2FtZSBjb2wsIHRoZW4gd2VcbiAgICAgICAgICAgIC8vIG5lZWQgdG8gYXR0YWNrIHRoZSBuZXh0IGxvY2F0aW9uIGluIHRoZSBjb2xcbiAgICAgICAgICAgIGlmIChmYyA9PSBsYykge1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBsYXN0IGhpdCBpcyBiZWxvdyB0aGUgZmlyc3QgaGl0LCB0aGVuIHdlIG5lZWQgdG9cbiAgICAgICAgICAgICAgICAvLyBhdHRhY2sgYmVsb3cgdGhlIGxhc3QgaGl0XG4gICAgICAgICAgICAgICAgaWYgKGZyIDwgbHIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgdGhlIGRvd24gbG9jYXRpb25cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZWJvYXJkLnZhbGlkTG9jKFtsciArIDEsIGxjXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbbHIgKyAxLCBsY107XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5lYm9hcmQudmFsaWRMb2MoW2ZyIC0gMSwgZmNdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlIGRvd24gbG9jYXRpb24gaXMgbm90IHZhbGlkLCB0aGVuIHdlIG5lZWQgdG9cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGF0dGFjayBhYm92ZSB0aGUgZmlyc3QgaGl0XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW2ZyIC0gMSwgZmNdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBsYXN0IGhpdCBpcyBhYm92ZSB0aGUgZmlyc3QgaGl0LCB0aGVuIHdlIG5lZWQgdG9cbiAgICAgICAgICAgICAgICAvLyBhdHRhY2sgYWJvdmUgdGhlIGxhc3QgaGl0XG4gICAgICAgICAgICAgICAgaWYgKGZyID4gbHIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgdGhlIHVwIGxvY2F0aW9uXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmVib2FyZC52YWxpZExvYyhbbHIgLSAxLCBsY10pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW2xyIC0gMSwgbGNdO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZWJvYXJkLnZhbGlkTG9jKFtmciArIDEsIGZjXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoZSB1cCBsb2NhdGlvbiBpcyBub3QgdmFsaWQsIHRoZW4gd2UgbmVlZCB0b1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXR0YWNrIGJlbG93IHRoZSBmaXJzdCBoaXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbZnIgKyAxLCBmY107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gaWYgd2UgbWFrZSBpdCB0byBoZXJlIHdlIGdvdCB0d28gc2hpcHMgbmV4dCB0byBlYWNoIG90aGVyLFxuICAgICAgICAgICAgICAgIC8vIHNvIHdlIG5lZWQgdG8gYXR0YWNrIHRvIHRoZSBsZWZ0IGFuZCByaWdodCBvZiB0aGUgZmlyc3QgaGl0XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZWJvYXJkLnZhbGlkTG9jKFtmciwgZmMgKyAxXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtmciwgZmMgKyAxXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZWJvYXJkLnZhbGlkTG9jKFtmciwgZmMgLSAxXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtmciwgZmMgLSAxXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZWJvYXJkLnZhbGlkTG9jKFtmciArIDEsIGZjXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtmciArIDEsIGZjXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZWJvYXJkLnZhbGlkTG9jKFtmciAtIDEsIGZjXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtmciAtIDEsIGZjXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3dlIHNob3VsZCBuZXZlciBnZXQgaGVyZSB0d28gY29scyBuZXh0IHRvIGVhY2ggb3RoZXIgZWRpdGlvbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAvLyByZXNldCB0aGUgZ2FtZVxuICAgICAgICByZXNldCgpIHtcbiAgICAgICAgICAgIHRoaXMucGJvYXJkID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuZWJvYXJkID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMucDFib2FyZCA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLnAyYm9hcmQgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy50dXJucyA9IC0yO1xuICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSBnYW1lX3N0YXR1cy5wMV9zZXR0aW5nX3VwO1xuICAgICAgICAgICAgdGhpcy5tb2RlID0gXCJlYXN5XCI7XG4gICAgICAgICAgICB0aGlzLnAxYm9hcmQgPSBCb2FyZCgpO1xuICAgICAgICAgICAgdGhpcy5wMmJvYXJkID0gQm9hcmQoKTtcbiAgICAgICAgICAgIHRoaXMucGJvYXJkID0gdGhpcy5wMWJvYXJkO1xuICAgICAgICAgICAgdGhpcy5lYm9hcmQgPSB0aGlzLnAyYm9hcmQ7XG4gICAgICAgIH0sXG4gICAgfTtcbn1cblxuZXhwb3J0IHsgZ2FtZV9zdGF0dXMsIFNoaXAsIEJvYXJkLCBHYW1lIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=