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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naWMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEIsaUJBQWlCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlCQUF5QjtBQUN6QjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFFBQVE7QUFDcEMsZ0NBQWdDLFFBQVE7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLHVCQUF1QjtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsT0FBTztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxPQUFPO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvbG9naWMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBjcmVhdGVzIGEgc2hpcCBvZiBhIHNwZWNpZmllZCBsZW5ndGhcbmZ1bmN0aW9uIFNoaXAobGVuZ3RoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgXCJsZW5ndGhcIjogbGVuZ3RoLFxuICAgICAgICBcImhpdHNcIjogMCxcbiAgICAgICAgaGl0KCkge1xuICAgICAgICAgICAgdGhpcy5oaXRzICs9IDE7XG4gICAgICAgIH0sXG4gICAgICAgIGlzU3VuaygpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhpdHMgPj0gdGhpcy5sZW5ndGhcbiAgICAgICAgfVxuICAgIH1cbn1cblxubGV0IHJ1bl9jbnQgPSAwIFxuY29uc3QgVE9UQUxfU0hJUFMgPSBbNSwgNCwgMywgMywgMl1cblxuLy8gY3JlYXRlcyBhIGJvYXJkIHdoaWNoIHBsYWNlcyBzaGlwcyBhbmQgcmVjaWV2ZXMgYXR0YWNrc1xuZnVuY3Rpb24gQm9hcmQoKSB7IC8vIDEweDEwIGJvYXJkICMgeCBsZXR0ZXJzXG4gICAgcmV0dXJuIHtcbiAgICAgICAgXCJzaGlwX2RlY2tcIjogWy4uLlRPVEFMX1NISVBTXSxcbiAgICAgICAgXCJzaGlwc19zdGFuZGluZ1wiOiBbLi4uVE9UQUxfU0hJUFNdLFxuICAgICAgICBcImN1cnJfc2hpcFwiOiB1bmRlZmluZWQsXG4gICAgICAgIFwicm90YXRpb25cIjogMCxcbiAgICAgICAgXCJoaXRfbmVpZ2hib3JzXCI6IFtdLFxuICAgICAgICBcImhpdF9saXN0XCI6IFtdLFxuICAgICAgICBcImJvYXJkXCI6IFtcbiAgICAgICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgXSxcbiAgICAgICAgc2V0Q3VyclNoaXAobGVuID0gdGhpcy5zaGlwX2RlY2tbMF0pIHtcbiAgICAgICAgICAgIHRoaXMuY3Vycl9zaGlwID0gU2hpcChsZW4pO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vIGRldGVybWluZXMgdmFsaWRpdHkgb2YgbG9jYXRpb25cbiAgICAgICAgdmFsaWRMb2MobG9jLCBwbGFjZSA9IGZhbHNlKSB7XG4gICAgICAgICAgICAvLyBpZiB0aGUgbG9jYXRpb24gaXMgaW4gdGhlIGhpdCBsaXN0LCByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIGlmICh0aGlzLmhpdF9saXN0LmluY2x1ZGVzKEpTT04uc3RyaW5naWZ5KGxvYykpKSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3lvdSBoYXZlIGFscmVhZHkgYXR0YWNrZWQgdGhpcyBsb2NhdGlvbiAnXG4gICAgICAgICAgICAgICAgLy8gICAgICsgbG9jWzBdICsgJyAsICcgKyBsb2NbMV0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IGxvY1swXVxuICAgICAgICAgICAgY29uc3QgY29sID0gbG9jWzFdXG4gICAgICAgICAgICBpZiAoISgwIDw9IHJvdyAmJiByb3cgPD0gOSkpIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnaW52YWxpZCB5IGxvY2F0aW9uOiAnICsgcm93KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoISgwIDw9IGNvbCAmJiBjb2wgPD0gOSkpIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnaW52YWxpZCB4IGxvY2F0aW9uOiAnICsgY29sKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGxhY2UgPT0gdHJ1ZSAmJiB0aGlzLmJvYXJkW3Jvd11bY29sXSAhPSAwKSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3RoZXJlIGlzIGFscmVhZHkgYSBzaGlwIGhlcmUnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5ib2FyZFtyb3ddW2NvbF0gPT0gMSkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd5b3UgaGF2ZSBhbHJlYWR5IGF0dGFja2VkIHRoaXMgbG9jYXRpb24gJ1xuICAgICAgICAgICAgICAgIC8vICAgICArIHJvdyArICcgLCAnICsgY29sKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5ib2FyZFtyb3ddW2NvbF0gIT0gMCAmJiB0aGlzLmJvYXJkW3Jvd11bY29sXS5pc1N1bmsoKSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0aGlzIHNoaXAgaXMgc3VuayEnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBwbGFjZXMgYSBzaGlwIGdpdmVuIGEgbG9jIGFuZCBvcHRpb25hbCBkaXJlY3Rpb24gWzBSLDFELDJMLDNVXVxuICAgICAgICBwbGFjZVNoaXAoc2hpcCwgbG9jLCBkaXJlY3Rpb24gPSB0aGlzLnJvdGF0aW9uLCBjaGVjayA9IGZhbHNlKSB7XG4gICAgICAgICAgICBjb25zdCByb3cgPSBsb2NbMF1cbiAgICAgICAgICAgIGNvbnN0IGNvbCA9IGxvY1sxXVxuICAgICAgICAgICAgbGV0IHNoaXBfbG9jcyA9IFtdO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgdG1wX2xvYyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6IC8vIGRvd25cbiAgICAgICAgICAgICAgICAgICAgICAgIHRtcF9sb2MgPSBbcm93IC0gaSwgY29sXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6IC8vIGxlZnRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRtcF9sb2MgPSBbcm93LCBjb2wgLSBpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6IC8vIHVwXG4gICAgICAgICAgICAgICAgICAgICAgICB0bXBfbG9jID0gW3JvdyArIGksIGNvbF07XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogLy8gcmlnaHRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRtcF9sb2MgPSBbcm93LCBjb2wgKyBpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnZhbGlkTG9jKHRtcF9sb2MsIHRydWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2hpcF9sb2NzLnB1c2godG1wX2xvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjaGVjaykgeyAvLyBpZiBpdHMganVzdCBhIGNoZWNrLCBub3QgYSBwbGFjZW1lbnQsIHdlIHJldHVybiB0aGUgc3BvdHNcbiAgICAgICAgICAgICAgICByZXR1cm4gc2hpcF9sb2NzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzaGlwX2xvY3MuZm9yRWFjaCgoc2VnKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtzZWdbMF1dW3NlZ1sxXV0gPSBzaGlwO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSxcblxuICAgICAgICAvLyByZXR1cm5zICdzaW5rJywgJ2hpdCcsICdtaXNzJywgb3IgJ2ludmFsaWRcbiAgICAgICAgcmVjaWV2ZUF0dGFjayhsb2MpIHtcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IGxvY1swXVxuICAgICAgICAgICAgY29uc3QgY29sID0gbG9jWzFdXG4gICAgICAgICAgICAvLyBjaGVjayB0aGF0IHRoZSBwcm92aWRlZCBoaXQgaXMgdmFsaWRcbiAgICAgICAgICAgIGlmICghdGhpcy52YWxpZExvYyhsb2MpKSByZXR1cm4gMDtcblxuICAgICAgICAgICAgLy8gaWYgaXRzIGEgbWlzcywgdXBkYXRlIHRoZSBib2FyZCBhbmQgcmV0dXJuIG1pc3NcbiAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkW3Jvd11bY29sXSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtyb3ddW2NvbF0gPSAxO1xuICAgICAgICAgICAgICAgIHJldHVybiAnbWlzcyc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuYm9hcmRbcm93XVtjb2xdLmhpdCgpO1xuICAgICAgICAgICAgdGhpcy5oaXRfbGlzdC5wdXNoKEpTT04uc3RyaW5naWZ5KGxvYykpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5ib2FyZFtyb3ddW2NvbF0uaXNTdW5rKCkpIHtcbiAgICAgICAgICAgICAgICBsZXQgaWR4ID0gdGhpcy5zaGlwc19zdGFuZGluZy5maW5kSW5kZXgoXG4gICAgICAgICAgICAgICAgICAgICh2YWwpID0+IHZhbCA9PSB0aGlzLmJvYXJkW3Jvd11bY29sXS5sZW5ndGhcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hpcHNfc3RhbmRpbmcuc3BsaWNlKGlkeCwgMSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuc2hpcHNfc3RhbmRpbmcubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vaGl0IHNpbmsgYW5kIGdhbWUgd2lubmVyIVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gNjk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGFsbCB0aGUgZWxlbWVudHMgZnJvbSB0aGUgaGl0IGxpc3QgdGhhdCBhcmUgc3Vua1xuICAgICAgICAgICAgICAgIGNvbnN0IG9sZF9oaXRfbGlzdCA9IFsuLi50aGlzLmhpdF9saXN0XTtcbiAgICAgICAgICAgICAgICB0aGlzLmhpdF9saXN0ID0gdGhpcy5oaXRfbGlzdC5maWx0ZXIoXG4gICAgICAgICAgICAgICAgICAgICh2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvdyA9IEpTT04ucGFyc2UodmFsKVswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbCA9IEpTT04ucGFyc2UodmFsKVsxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhKHRoaXMuYm9hcmRbcm93XVtjb2xdLmlzU3VuaygpKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndXBkYXRlZCBoaXQgbGlzdCBmcm9tICcsIG9sZF9oaXRfbGlzdCwgJyB0byAnLCB0aGlzLmhpdF9saXN0KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3N1bmsnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL2hpdCBubyBzaW5rXG4gICAgICAgICAgICByZXR1cm4gJ2hpdCc7XG4gICAgICAgIH0sXG4gICAgICAgIC8vIHRvcCBwaXZvdCBnaXZlcyB0aGUgYmVzdCBsb2NhdGlvbiB0byBhdHRhY2sgZ2l2ZW4gd2Ugb25seSBoYXZlIG9uZSBoaXQgdG8gcGl2b3QgZnJvbVxuICAgICAgICB0b3BQaXZvdChsb2MpIHtcbiAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gY2hlY2sgdGhlIDQgbG9jYXRpb25zIGFyb3VuZCB0aGUgbG9jIGFuZCBzZWUgd2hpY2ggb25lIGhhcyB0aGUgbW9zdFxuICAgICAgICAgICAgLy8gdW5zZWVuIGxvY2F0aW9uc1xuICAgICAgICAgICAgbGV0IGRpcmVjdGlvbnMgPSB0aGlzLnN0cmVuZ3RoU29ydGVkRGlyZWN0aW9ucyhsb2MpO1xuICAgICAgICAgICAgbGV0IHRvcF9kaXIgPSBkaXJlY3Rpb25zWzBdWzBdO1xuICAgICAgICAgICAgbGV0IHRvcF9sb2MgPSBsb2M7XG4gICAgICAgICAgICBzd2l0Y2ggKHRvcF9kaXIpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgICAgICAgICAgICAgdG9wX2xvY1swXSArPSAxO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgICAgICAgICAgICAgIHRvcF9sb2NbMF0gLT0gMTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnZG93bic6XG4gICAgICAgICAgICAgICAgICAgIHRvcF9sb2NbMV0gKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAndXAnOlxuICAgICAgICAgICAgICAgICAgICB0b3BfbG9jWzFdIC09IDE7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpbnZhbGlkIGRpcmVjdGlvbjogJyArIHRvcF9kaXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRvcF9sb2M7XG4gICAgICAgIH0sXG4gICAgICAgIC8vIGFkamFjZW50cyB0YWtlcyBhIGxvY2F0aW9uIGFuZCByZXR1cm5zIGFuIG9yZGVyZWQgbGlzdCBvZiBkaXJlY3Rpb25zXG4gICAgICAgIC8vIGZyb20gdGhlIGxvY2F0aW9uIGluIHF1ZXN0aW9uLiBJdCBpcyBvcmRlcmVkIGJ5IHRoZSBudW1iZXIgdW5zZWVuXG4gICAgICAgIC8vIGxvY2F0aW9ucyBmcm9tIHRoZSBsb2NhdGlvbiBpbiB0aGF0IGRpcmVjdGlvbi5cbiAgICAgICAgLy8gVGhlIGZpcnN0IGVsZW1lbnQgaW4gdGhlIGxpc3QgaXMgdGhlIGRpcmVjdGlvbiB3aXRoIGxvbmdlc3QgcnVuXG4gICAgICAgIC8vIGluIGl0J3MgZGlyZWN0aW9uLiBUaGUgc2Vjb25kIGVsZW1lbnQgaW4gdGhlIGxpc3QgaXMgdGhlIGxvY2F0aW9uIHdpdGggdGhlXG4gICAgICAgIHN0cmVuZ3RoU29ydGVkRGlyZWN0aW9ucyhsb2MpIHtcbiAgICAgICAgICAgIGxldCBtYWludGVuZW5jZV9sb2MgPSBbLi4ubG9jXTtcbiAgICAgICAgICAgIGxldCByZXMgPSBbXTtcbiAgICAgICAgICAgIGxldCBkaXJlY3Rpb25zID0gdGhpcy52YWxpZERpcmVjdGlvbnMobG9jKTtcbiAgICAgICAgICAgIGRpcmVjdGlvbnMuZm9yRWFjaCgoZGlyKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHRtcF9sb2MgPSBbLi4ubG9jXTtcbiAgICAgICAgICAgICAgICBsZXQgdG1wX2NudCA9IDA7XG4gICAgICAgICAgICAgICAgd2hpbGUgKHRoaXMudmFsaWRMb2ModG1wX2xvYykpIHtcbiAgICAgICAgICAgICAgICAgICAgdG1wX2NudCArPSAxO1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGRpcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG1wX2xvY1swXSArPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRtcF9sb2NbMF0gLT0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2Rvd24nOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRtcF9sb2NbMV0gKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3VwJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bXBfbG9jWzFdIC09IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpbnZhbGlkIGRpcmVjdGlvbjogJyArIGRpcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbWFpbnRlbmVuY2VfbG9jID0gdG1wX2xvYztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gaWYgaXRzIGludmFsaWQgYmVjYXVzZSBpdHMgb2ZmIHRoZSBib2FyZCwgd2Ugc2hvdWxkIHN1YnRyYWN0IG9uZVxuICAgICAgICAgICAgICAgIC8vIGZyb20gdGhlIGNvdW50LCBpZiBpdHMgaW52YWxpZCBiZWNhdXNlIGl0cyBhIG1pc3MsIHdlIHNob3VsZFxuICAgICAgICAgICAgICAgIC8vIHN1YnRyYWN0IDIgZnJvbSB0aGUgY291bnRcbiAgICAgICAgICAgICAgICBjb25zdCBvdXRfb2ZfYm91bmRzID0gKG1haW50ZW5lbmNlX2xvY1swXSA8IDAgfHwgbWFpbnRlbmVuY2VfbG9jWzBdID4gOSB8fFxuICAgICAgICAgICAgICAgICAgICBtYWludGVuZW5jZV9sb2NbMV0gPCAwIHx8IG1haW50ZW5lbmNlX2xvY1sxXSA+IDkpXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKCFvdXRfb2ZfYm91bmRzICYmIHRoaXMuYm9hcmRbbWFpbnRlbmVuY2VfbG9jWzBdXVttYWludGVuZW5jZV9sb2NbMV1dID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdG1wX2NudCAtPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXMucHVzaChbZGlyLCB0bXBfY250XSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJlcy5zb3J0KChhLCBiKSA9PiBiWzFdIC0gYVsxXSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygndGhlIHJlc3VsdGluZyBsaXN0IG9mIGRpcmVjdGlvbnMgc29ydGVkIGJ5IHRoZWlyIHN0cmVuZ3RoIGlzOiAnLCByZXMpO1xuICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgfSxcbiAgICAgICAgdmFsaWREaXJlY3Rpb25zKGxvYykge1xuICAgICAgICAgICAgbGV0IGRpcmVjdGlvbnMgPSBbXTtcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IGxvY1swXTtcbiAgICAgICAgICAgIGNvbnN0IGNvbCA9IGxvY1sxXTtcbiAgICAgICAgICAgIGlmICh0aGlzLnZhbGlkTG9jKFtyb3cgKyAxLCBjb2xdKSkge1xuICAgICAgICAgICAgICAgIGRpcmVjdGlvbnMucHVzaCgnbGVmdCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMudmFsaWRMb2MoW3JvdyAtIDEsIGNvbF0pKSB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aW9ucy5wdXNoKCdyaWdodCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMudmFsaWRMb2MoW3JvdywgY29sICsgMV0pKSB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aW9ucy5wdXNoKCdkb3duJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy52YWxpZExvYyhbcm93LCBjb2wgLSAxXSkpIHtcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb25zLnB1c2goJ3VwJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygndGhlIHZhbGlkIGRpcmVjdGlvbnMgZm9yIGxvY2F0aW9uJywgbG9jLCAnIGFyZSAnLCBkaXJlY3Rpb25zKVxuICAgICAgICAgICAgcmV0dXJuIGRpcmVjdGlvbnM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgdG9wTG9jKHNlYXJjaERlcHRoID0gMSwgZGVidWcgPSBGYWxzZSkge1xuICAgICAgICAgICAgLy8gcGljayB0aGUgbG9jYXRpb24gaW4gdGhlIGFycmF5IHdpdGggdGhlIGhpZ2hlc3Qgc2NvcmUgd2hpY2ggaXNcbiAgICAgICAgICAgIC8vIHRoZSBzdW0gb2YgaXRzIGFkamFjZW50cyBsaXN0IFsxXVxuICAgICAgICAgICAgbGV0IHRvcF9zY29yZSA9IDBcbiAgICAgICAgICAgIGxldCB0b3BfbG9jID0gWzAsIDBdXG4gICAgICAgICAgICBsZXQgc2NvcmVzID0gW11cbiAgICAgICAgICAgIC8vIG1ha2UgYW4gZW1wdHkgMTB4MTAgYWRqYWNlbnRzX2NudCBhcnJheVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBsb2MgPSBbaSwgal1cbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhpcyBsb2NhdGlvbiBjYW4ndCBiZSBhdHRhY2tlZCwgc2tpcCBpdFxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMudmFsaWRMb2MobG9jKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBzY29yZSBzaG91bGQgcHJpb3JpdGl6ZSBsb2NhdGlvbnMgYnkgdGhlaXIgcmVsYXRpdmVcbiAgICAgICAgICAgICAgICAgICAgLy8gY2VudGVyaW5nIGJldHdlZW4gbGVmdCBhbmQgcmlnaHQgYWRqYWNlbnQgbG9jYXRpb25zXG4gICAgICAgICAgICAgICAgICAgIC8vIGFuZCB1cCBhbmQgZG93biBhZGphY2VudCBsb2NhdGlvbnMsIHVzaW5nIHN0cmVuZ3RoU29ydGVkRGlyZWN0aW9uc1xuICAgICAgICAgICAgICAgICAgICAvLyB3ZSBjYW4gZ2V0IGEgbGlzdCBvZiBkaXJlY3Rpb25zIHNvcnRlZCBieSB0aGVpciBzdHJlbmd0aFxuICAgICAgICAgICAgICAgICAgICAvLyB3ZSBjYW4gdGhlbiB1c2UgdGhpcyBsaXN0IHRvIGRldGVybWluZSB0aGUgc2NvcmUgb2YgdGhlIGxvY2F0aW9uXG4gICAgICAgICAgICAgICAgICAgIGxldCBzY29yZSA9IDBcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRpcmVjdGlvbnMgPSB0aGlzLnN0cmVuZ3RoU29ydGVkRGlyZWN0aW9ucyhsb2MpXG4gICAgICAgICAgICAgICAgICAgIGxldCBkaXJlY3Rpb25fc3RyZW5ndGhzID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2xlZnQnOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3JpZ2h0JzogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICd1cCc6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAnZG93bic6IDAsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBkaXJlY3Rpb25zLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGlyID0gZGlyZWN0aW9uc1trXVswXVxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNudCA9IGRpcmVjdGlvbnNba11bMV1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbl9zdHJlbmd0aHNbZGlyXSA9IGNudFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIHdlIGNhbiBub3cgdXNlIHRoZSBkaXJlY3Rpb25fc3RyZW5ndGhzIHRvIGRldGVybWluZSB0aGUgc2NvcmVcbiAgICAgICAgICAgICAgICAgICAgLy8gYnkgdGFraW5nIHRoZSBtaW4gb2YgdGhlIGxlZnQgYW5kIHJpZ2h0IHN0cmVuZ3RocyBhbmQgdGhlIG1pblxuICAgICAgICAgICAgICAgICAgICAvLyBvZiB0aGUgdXAgYW5kIGRvd24gc3RyZW5ndGhzXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRpcmVjdGlvbl9zdHJlbmd0aHMpXG4gICAgICAgICAgICAgICAgICAgIGxldCBsZWZ0X3JpZ2h0X3N0cmVuZ3RoID0gTWF0aC5taW4oZGlyZWN0aW9uX3N0cmVuZ3Roc1snbGVmdCddLCBkaXJlY3Rpb25fc3RyZW5ndGhzWydyaWdodCddKVxuICAgICAgICAgICAgICAgICAgICBsZXQgdXBfZG93bl9zdHJlbmd0aCA9IE1hdGgubWluKGRpcmVjdGlvbl9zdHJlbmd0aHNbJ3VwJ10sIGRpcmVjdGlvbl9zdHJlbmd0aHNbJ2Rvd24nXSlcbiAgICAgICAgICAgICAgICAgICAgLy8gUkVTRUFSQ0ggRlVSVEhFUlxuICAgICAgICAgICAgICAgICAgICBzY29yZSA9IGxlZnRfcmlnaHRfc3RyZW5ndGggKyB1cF9kb3duX3N0cmVuZ3RoXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdyYXcgZGlyZWN0aW9uIGJhc2VkIHNjb3JlIGlzJywgc2NvcmUpXG5cbiAgICAgICAgICAgICAgICAgICAgLy8gYm9vc3QgbWlkZGxlIGxvY2F0aW9ucyBieSB1c2luZyBhbiBpbnZlcnNlIHF1YWRyYXRpYyBtdWx0aXBsaWVyIHRvIHRoZSBzY29yZVxuICAgICAgICAgICAgICAgICAgICBsZXQgZGlzdCA9IE1hdGguc3FydChNYXRoLnBvdyg0LjUgLSBsb2NbMF0sIDIpICsgTWF0aC5wb3coNC41IC0gbG9jWzFdLCAyKSlcbiAgICAgICAgICAgICAgICAgICAgLy8gd2UgYWRkIGJlY2F1c2Ugd2UgcmVhbGx5IG9ubHkgd2FudCB0aGlzIHRvIGJyZWFrIHRpZXNcbiAgICAgICAgICAgICAgICAgICAgLy8gcGljayBhIHJhbmRvbSBudW1iZXIgYmV0d2VlbiAwIGFuZCAuMDAwMDAxXG4gICAgICAgICAgICAgICAgICAgIGxldCByYW5kID0gTWF0aC5yYW5kb20oKSAvIDEwMDAwMDBcbiAgICAgICAgICAgICAgICAgICAgc2NvcmUgPSBzY29yZSArIHJhbmRcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc2NvcmUpXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWFyY2hEZXB0aCA+IDEgfHwgZGVidWcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3Jlcy5wdXNoKFtsb2MsIHNjb3JlXSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoc2NvcmUgPiB0b3Bfc2NvcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcF9zY29yZSA9IHNjb3JlXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3BfbG9jID0gbG9jXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpZiBzZWFyY2hEZXB0aCBpcyBncmVhdGVyIHRoYW4gMSwgd2Ugc2hvdWxkIHNvcnQgdGhlIHNjb3JlcyBhbmRcbiAgICAgICAgICAgIC8vIGluIGRlY3JlYXNpbmcgb3JkZXIgYW5kIHRha2UgdGhlIGZpcnN0IHNlYXJjaERlcHRoIGVsZW1lbnRzXG4gICAgICAgICAgICBpZiAoc2VhcmNoRGVwdGggPiAxIHx8IGRlYnVnKSB7XG4gICAgICAgICAgICAgICAgc2NvcmVzLnNvcnQoKGEsIGIpID0+IGJbMV0gLSBhWzFdKVxuICAgICAgICAgICAgICAgIGlmIChkZWJ1Zykge1xuICAgICAgICAgICAgICAgICAgICAvLyBsb2cgdG9wIDMgc2NvcmVzXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZSB0b3AgMyBzY29yZXMgd2VyZVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndGhlIHRvcCAzIHNjb3JlcyB3ZXJlJylcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNjb3Jlc1tpXVsxXSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgdG9wIDMgbG9jYXRpb25zIHdlcmVcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3RoZSB0b3AgMyBsb2NhdGlvbnMgd2VyZScpXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzY29yZXNbaV1bMF0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHNlYXJjaERlcHRoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2NvcmVzWy0xXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0b3BfbG9jXG4gICAgICAgIH0sXG4gICAgfVxufVxuXG5jb25zdCBnYW1lX3N0YXR1cyA9IHtcbiAgICBcInAxX3NldHRpbmdfdXBcIjogMSxcbiAgICBcInAyX3NldHRpbmdfdXBcIjogMixcbiAgICBcInAxX3R1cm5cIjogMyxcbiAgICBcInAyX3R1cm5cIjogNCxcbiAgICBcInAxX3dpblwiOiA1LFxuICAgIFwicDJfd2luXCI6IDYsXG59XG5cbmNvbnN0IHJlYWRhYmxlX3N0YXR1cyA9IHtcbiAgICAxOiBcIiBpcyBzZXR0aW5nIHVwIHRoZWlyIGJvYXJkXCIsXG4gICAgMjogXCIgaXMgc2V0dGluZyB1cCB0aGVpciBib2FyZFwiLFxuICAgIDM6IFwiJ3MgdHVyblwiLFxuICAgIDQ6IFwiJ3MgdHVyblwiLFxuICAgIDU6IFwiIHdpbnMhXCIsXG4gICAgNjogXCIgd2lucyFcIixcbn1cblxuLy8gY3JlYXRlcyBhIEdhbWUgd2l0aCB0d28gcGxheWVycyB3aG8gcGVyZm9ybSBhY3Rpb25zIG9uIHRoZWlyIGJvYXJkc1xuZnVuY3Rpb24gR2FtZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBcInN0YXR1c1wiOiBnYW1lX3N0YXR1cy5wMV9zZXR0aW5nX3VwLFxuICAgICAgICBcIm1vZGVcIjogXCJlYXN5XCIsXG4gICAgICAgIFwicDFib2FyZFwiOiBCb2FyZCgpLFxuICAgICAgICAvLyBwMiBib2FyZCBpcyB0aGUgQUkncyBib2FyZFxuICAgICAgICBcInAyYm9hcmRcIjogQm9hcmQoKSxcbiAgICAgICAgXCJwYm9hcmRcIjogJ2JhbmFuYXMnLFxuICAgICAgICBcImVib2FyZFwiOiAnYmFuYW5hcycsXG4gICAgICAgIFwicDFfbmFtZVwiOiAnSHVtYW4nLFxuICAgICAgICBcInAyX25hbWVcIjogJ0FJJyxcbiAgICAgICAgXCJ0dXJuc1wiOiAtMiwgLy8gdG8gYWNjb3VudCBmb3IgMiBzZXQgY2FsbHNcbiAgICAgICAgcmVhZGFibGVfc3RhdHVzKGlucHV0KSB7XG4gICAgICAgICAgICBsZXQgcGxheWVyID0gdGhpcy5wYm9hcmQgPT0gdGhpcy5wMWJvYXJkID8gdGhpcy5wMV9uYW1lIDogdGhpcy5wMl9uYW1lO1xuICAgICAgICAgICAgcmV0dXJuIHBsYXllciArIHJlYWRhYmxlX3N0YXR1c1tpbnB1dF07XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gaW5pdGlhbGl6ZSB0aGUgYm9hcmRzXG4gICAgICAgIGluaXQoKSB7XG4gICAgICAgICAgICB0aGlzLnBib2FyZCA9IHRoaXMucDFib2FyZDtcbiAgICAgICAgICAgIHRoaXMuZWJvYXJkID0gdGhpcy5wMmJvYXJkO1xuICAgICAgICB9LFxuICAgICAgICAvLyBoYXZlIHRoZSBjdXJyZW50IHBsYXllciBhdHRhY2sgYSBsb2NhdGlvblxuICAgICAgICBhdHRhY2sobG9jKSB7XG4gICAgICAgICAgICAvLyBhdHRhY2sgdGhlIGVuZW15IGJvYXJkLCBpZiB0aGUgYXR0YWNrIGlzIHZhbGlkXG4gICAgICAgICAgICAvLyBhbmQgdGhlIGF0dGFjayBpcyBhIGhpdCwgY2hlY2sgaWYgdGhlIGVuZW15IGlzIHN1bmtcbiAgICAgICAgICAgIC8vIGlmIHRoZSBlbmVteSBpcyBzdW5rLCBjaGVjayBpZiB0aGUgZ2FtZSBpcyBvdmVyXG4gICAgICAgICAgICAvLyBpZiB0aGUgZ2FtZSBpcyBvdmVyLCBzZXQgdGhlIHN0YXR1cyB0byB0aGUgd2lubmVyXG4gICAgICAgICAgICAvLyBpZiB0aGUgZ2FtZSBpcyBub3Qgb3Zlciwgc3dpdGNoIHRoZSBwbGF5ZXIgdHVyblxuICAgICAgICAgICAgLy8gaWYgdGhlIGxvY2F0aW9uIGlzbid0IHZhbGlkLCByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIGxldCBhdHQgPSB0aGlzLmVib2FyZC5yZWNpZXZlQXR0YWNrKGxvYyk7XG4gICAgICAgICAgICBpZiAoIWF0dCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gb3RoZXJ3aXNlIHRoZSBhdHRhY2sgaXMgdmFsaWRlIHNvIHdlIHdpbGwgYmUgdXBkYXRpbmcgdGhlIGdhbWUuc3RhdHVzXG4gICAgICAgICAgICAvLyB0aHVzIHdlIG5lZWQgdG8gZmlndXJlIG91dCB0aGUgY3VycmVudCBzdGF0dXMgYW5kIHVzZSBpdCB0byBkZXRlcm1pbmVcbiAgICAgICAgICAgIC8vIHdoYXQgdGhlIG5ldyBzdGF0dXMgc2hvdWxkIGJlXG4gICAgICAgICAgICBsZXQgY3Vycl9zdGF0dXMgPSB0aGlzLnN0YXR1cztcbiAgICAgICAgICAgIHN3aXRjaCAoY3Vycl9zdGF0dXMpIHtcbiAgICAgICAgICAgICAgICBjYXNlIGdhbWVfc3RhdHVzLnAxX3R1cm46XG4gICAgICAgICAgICAgICAgICAgIGlmIChhdHQgPT0gNjkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwbGF5ZXIgMSB3YXMgdXAsIGFuZCBzdW5rIHRoZSBlbmVteScpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXR1cyA9IGdhbWVfc3RhdHVzLnAxX3dpbjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGdhbWVfc3RhdHVzLnAyX3R1cm46XG4gICAgICAgICAgICAgICAgICAgIGlmIChhdHQgPT0gNjkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwbGF5ZXIgMiB3YXMgdXAsIGFuZCBzdW5rIHRoZSBlbmVteScpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXR1cyA9IGdhbWVfc3RhdHVzLnAyX3dpbjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaW52YWxpZCBzdGF0dXM6ICcgKyBjdXJyX3N0YXR1cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBzd2l0Y2ggcGxheWVyc1xuICAgICAgICAgICAgdGhpcy5zd2FwUGxheWVyKCk7XG4gICAgICAgICAgICByZXR1cm4gYXR0O1xuICAgICAgICB9LFxuICAgICAgICAvLyBwbGFjZXMgY3VycmVudCBwbGF5ZXJzIHNoaXBzIHJhbmRvbWx5XG4gICAgICAgIGF1dG9TZXQoKSB7XG4gICAgICAgICAgICAvLyBpZiB0aGUgc3RhdHVzIGlzbid0IDAgb3IgMSwgdGhlbiB3ZSBkb24ndCBuZWVkIHRvIHNldCB0aGUgYm9hcmRcbiAgICAgICAgICAgIGlmICghKHRoaXMuc3RhdHVzID09IGdhbWVfc3RhdHVzLnAxX3NldHRpbmdfdXAgfHxcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1cyA9PSBnYW1lX3N0YXR1cy5wMl9zZXR0aW5nX3VwKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHBsYWNlIHRoZSBzaGlwc1xuICAgICAgICAgICAgd2hpbGUgKHRoaXMucGJvYXJkLnNoaXBfZGVjay5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBsZXQgc2hpcF9sZW4gPSB0aGlzLnBib2FyZC5zaGlwX2RlY2sucG9wKCk7XG4gICAgICAgICAgICAgICAgbGV0IHBsYWNlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGxldCBzaGlwID0gU2hpcChzaGlwX2xlbik7XG5cbiAgICAgICAgICAgICAgICB3aGlsZSAocGxhY2VkID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByYW5kZGlyID0gTWF0aC5mbG9vcihNYXRoLmFicyhNYXRoLnJhbmRvbSgpKSAqIDQpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmFuZHggPSBNYXRoLmZsb29yKE1hdGguYWJzKE1hdGgucmFuZG9tKCkpICogOSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCByYW5keSA9IE1hdGguZmxvb3IoTWF0aC5hYnMoTWF0aC5yYW5kb20oKSkgKiA5KTtcblxuICAgICAgICAgICAgICAgICAgICBwbGFjZWQgPSB0aGlzLnBib2FyZC5wbGFjZVNoaXAoc2hpcCwgW3JhbmR4LCByYW5keV0sIHJhbmRkaXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHN3YXAgdGhlIHBsYXllciBib2FyZCBhbmQgZW5lbXkgYm9hcmRcbiAgICAgICAgICAgIHRoaXMuc3dhcFBsYXllcigpO1xuICAgICAgICB9LFxuICAgICAgICBzd2FwUGxheWVyKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09IGdhbWVfc3RhdHVzLnAxX3dpbiB8fFxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzID09IGdhbWVfc3RhdHVzLnAyX3dpbikge1xuICAgICAgICAgICAgICAgIHJldHVybiAodGhpcy5wYm9hcmQgPT0gdGhpcy5wMWJvYXJkKSA/ICdQbGF5ZXIgMScgOiAnUGxheWVyIDInO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy50dXJucyA9IHRoaXMudHVybnMgKyAxO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy50dXJucylcbiAgICAgICAgICAgIGlmICh0aGlzLnBib2FyZCA9PSB0aGlzLnAxYm9hcmQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBib2FyZCA9IHRoaXMucDJib2FyZDtcbiAgICAgICAgICAgICAgICB0aGlzLmVib2FyZCA9IHRoaXMucDFib2FyZDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wYm9hcmQgPT0gdGhpcy5wMmJvYXJkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYm9hcmQgPSB0aGlzLnAxYm9hcmQ7XG4gICAgICAgICAgICAgICAgdGhpcy5lYm9hcmQgPSB0aGlzLnAyYm9hcmQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpbnZhbGlkIHBsYXllciBib2FyZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gYWR2YW5jZSB0aGUgc3RhdHVzIG9mIHRoZSBnYW1lIGJhc2VkIG9uIHRoZSBwcmV2aW91cyBzdGF0dXNcbiAgICAgICAgICAgIC8vIHdlIGRpc3JlZ2FyZCB3aW4gc3RhdHVzJyBiZWNhdXNlIHRob3NlIGF1dG8gcmVyZW5kZXIgdGhlIHBhZ2VcbiAgICAgICAgICAgIGxldCBvbGRfc3RhdHVzID0gdGhpcy5zdGF0dXM7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT0gZ2FtZV9zdGF0dXMucDFfc2V0dGluZ191cCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gZ2FtZV9zdGF0dXMucDJfc2V0dGluZ191cDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0dXMgPT0gZ2FtZV9zdGF0dXMucDJfc2V0dGluZ191cCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gZ2FtZV9zdGF0dXMucDFfdHVybjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSB0aGlzLnN0YXR1cyA9PSBnYW1lX3N0YXR1cy5wMV90dXJuID8gZ2FtZV9zdGF0dXMucDJfdHVybiA6IGdhbWVfc3RhdHVzLnAxX3R1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSxcbiAgICAgICAgLy8gYXR0YWNrcyBvcHBvc2luZyBwbGF5ZXIgYXV0b21hdGljYWxseVxuICAgICAgICBhaUF0dGFjaygpIHtcbiAgICAgICAgICAgIC8vIHdlIGdldCB0aGUgdGFyZ2V0IHVzaW5nIGFpVGFyZ2V0XG4gICAgICAgICAgICBsZXQgdGFyZ2V0ID0gdGhpcy5haVRhcmdldCgpO1xuICAgICAgICAgICAgLy8gd2UgYXR0YWNrIHRoZSB0YXJnZXQgdXNpbmcgYXR0YWNrXG4gICAgICAgICAgICBsZXQgYXR0ID0gdGhpcy5hdHRhY2sodGFyZ2V0KTtcbiAgICAgICAgICAgIC8vIGlmIHRoZSBhdHRhY2sgd2FzIHVuc3VjY2Vzc2Z1bCwgd2UgbmVlZCB0byB0cnkgYWdhaW5cbiAgICAgICAgICAgIGxldCBhdHRfY250ID0gMVxuICAgICAgICAgICAgd2hpbGUgKCFhdHQpIHtcbiAgICAgICAgICAgICAgICBhdHRfY250ICs9IDFcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSB0aGlzLmFpVGFyZ2V0KGF0dF9jbnQpO1xuICAgICAgICAgICAgICAgIGF0dCA9IHRoaXMuYXR0YWNrKHRhcmdldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gJ3N1Y2Nlc3NmdWwgYXR0YWNrJ1xuICAgICAgICB9LFxuICAgICAgICAvLyBmaW5kcyB0aGUgdGFyZ2V0IGZvciBhbiBhaUF0dGFja1xuICAgICAgICBhaVRhcmdldChhdHRfY250ID0gMSkge1xuICAgICAgICAgICAgcnVuX2NudCArPSAxXG4gICAgICAgICAgICBpZiAocnVuX2NudCA+IDEwMDApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3RvbyBtYW55IHJ1bnMnKVxuICAgICAgICAgICAgICAgIHJldHVybiBbMCwgMF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLm1vZGUgPT0gJ2Vhc3knKSB7XG4gICAgICAgICAgICAgICAgbGV0IHJhbmRyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICAgICAgICAgIGxldCByYW5kYyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gW3JhbmRyLCByYW5kY11cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGhpcy5lYm9hcmQuaGl0X2xpc3QgfHwgdGhpcy5lYm9hcmQuaGl0X2xpc3QubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICAvLyB1c2UgdGhlIGxvY2F0aW9uIHdpdGggdGhlIGhpZ2hlc3Qgc2NvcmVcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lYm9hcmQudG9wTG9jKGF0dF9jbnQsIHRydWUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpZiB0aGUgaGl0IGxpc3QgaXMgb25lLCB0aGVuIHdlIG5lZWQgdG8gbG9vayBhdCA0IHBvc3NpYmxlXG4gICAgICAgICAgICAvLyBsb2NhdGlvbnMgdG8gYXR0YWNrXG4gICAgICAgICAgICBpZiAodGhpcy5lYm9hcmQuaGl0X2xpc3QgJiYgdGhpcy5lYm9hcmQuaGl0X2xpc3QubGVuZ3RoID09IDEpIHtcbiAgICAgICAgICAgICAgICAvLyB0aGVyZSBhcmUgNCBwb3NzaWJsZSBsb2NhdGlvbnMgdG8gYXR0YWNrLCB3ZSBzaG91bGQgY2hlY2tcbiAgICAgICAgICAgICAgICAvLyBpZiBlYWNoIGlzIHZhbGlkIGFuZCB0aGVuIHBpY2sgdGhlIG9uZSB3aXRoIHRoZSBtb3N0IHNwYWNlXG4gICAgICAgICAgICAgICAgLy8gYWhlYWQgb2YgaXQuIFNvIGxldHMgZ2V0IGEgbGlzdCBvZiB0aGUgcG9zc2libGUgbG9jYXRpb25zXG4gICAgICAgICAgICAgICAgLy8gYW5kIHRoZW4gY2hlY2sgZWFjaCBvbmVcbiAgICAgICAgICAgICAgICAvLyBwb3NzaWJsZSBsb2NzID0gW3JpZ2h0LCBsZWZ0LCB1cCwgZG93bl1cbiAgICAgICAgICAgICAgICAvLyBwYXJzZSB0aGlzLmVib2FyZC5oaXRfbGlzdFswXSBpbnRvIGxvYyBmb3JtXG4gICAgICAgICAgICAgICAgbGV0IHRhcmcgPSBKU09OLnBhcnNlKHRoaXMuZWJvYXJkLmhpdF9saXN0WzBdKTtcbiAgICAgICAgICAgICAgICBsZXQgcm93ID0gdGFyZ1swXTtcbiAgICAgICAgICAgICAgICBsZXQgY29sID0gdGFyZ1sxXTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY2FsbGluZyB0b3AgUGl2b3Qgb24gJywgW3JvdywgY29sXSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWJvYXJkLnRvcFBpdm90KFtyb3csIGNvbF0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZygncGVyZm9ybWluZyBoaXQgbWFuYXVldmVyJyk7XG5cbiAgICAgICAgICAgIC8vIGlmIHRoZSBoaXQgbGlzdCBpcyBncmVhdGVyIHRoYW4gb25lLCB0aGVuIHdlIGRldGVybWluZSB0aGVcbiAgICAgICAgICAgIC8vIGRpcmVjdGlvbiBvZiB0aGUgaGl0IGxpc3QgKHJvdyBvciBjb2wpIGFuZCB1c2UgdGhlIGVuZHMgb2ZcbiAgICAgICAgICAgIC8vIHRoZSBsaXN0IHRvIGRldGVybWluZSB0aGUgbmV4dCBhdHRhY2suIElmIHRoZSBoaXQgbGlzdCBpc1xuICAgICAgICAgICAgLy8gd2Ugc3RhcnQgYnkgZ2V0dGluZyB0aGUgZmlyc3QgaGl0IGFuZCB0aGUgbGFzdCBoaXRcbiAgICAgICAgICAgIGxldCBmaXJzdF9oaXQgPSBKU09OLnBhcnNlKHRoaXMuZWJvYXJkLmhpdF9saXN0WzBdKTtcbiAgICAgICAgICAgIGxldCBsYXN0X2hpdCA9IEpTT04ucGFyc2UodGhpcy5lYm9hcmQuaGl0X2xpc3RbXG4gICAgICAgICAgICAgICAgdGhpcy5lYm9hcmQuaGl0X2xpc3QubGVuZ3RoIC0gMV0pO1xuICAgICAgICAgICAgbGV0IGZyID0gZmlyc3RfaGl0WzBdO1xuICAgICAgICAgICAgbGV0IGZjID0gZmlyc3RfaGl0WzFdO1xuICAgICAgICAgICAgbGV0IGxyID0gbGFzdF9oaXRbMF07XG4gICAgICAgICAgICBsZXQgbGMgPSBsYXN0X2hpdFsxXTtcbiAgICAgICAgICAgIC8vIGlmIHRoZSBmaXJzdCBoaXQgYW5kIGxhc3QgaGl0IGFyZSBpbiB0aGUgc2FtZSByb3csIHRoZW4gd2VcbiAgICAgICAgICAgIC8vIG5lZWQgdG8gYXR0YWNrIHRoZSBuZXh0IGxvY2F0aW9uIGluIHRoZSByb3dcbiAgICAgICAgICAgIGlmIChmciA9PSBscikge1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBsYXN0IGhpdCBpcyB0byB0aGUgcmlnaHQgb2YgdGhlIGZpcnN0IGhpdCwgdGhlblxuICAgICAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gYXR0YWNrIHRvIHRoZSByaWdodCBvZiB0aGUgbGFzdCBoaXRcbiAgICAgICAgICAgICAgICBpZiAoZmMgPCBsYykge1xuICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayB0aGUgcmlnaHQgbG9jYXRpb25cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZWJvYXJkLnZhbGlkTG9jKFtsciwgbGMgKyAxXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbbHIsIGxjICsgMV07XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5lYm9hcmQudmFsaWRMb2MoW2ZyLCBmYyAtIDFdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtmciwgZmMgLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgbGFzdCBoaXQgaXMgdG8gdGhlIGxlZnQgb2YgdGhlIGZpcnN0IGhpdCwgdGhlblxuICAgICAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gYXR0YWNrIHRvIHRoZSBsZWZ0IG9mIHRoZSBsYXN0IGhpdFxuICAgICAgICAgICAgICAgIGlmIChmYyA+IGxjKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIHRoZSBsZWZ0IGxvY2F0aW9uXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmVib2FyZC52YWxpZExvYyhbbHIsIGxjIC0gMV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW2xyLCBsYyAtIDFdO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZWJvYXJkLnZhbGlkTG9jKFtmciwgZmMgKyAxXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBsZWZ0IGxvY2F0aW9uIGlzIG5vdCB2YWxpZCwgdGhlbiB3ZSBuZWVkIHRvXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhdHRhY2sgdG8gdGhlIHJpZ2h0IG9mIHRoZSBmaXJzdCBoaXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbZnIsIGZjICsgMV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gaWYgd2UgbWFrZSBpdCB0byBoZXJlIHdpdGhvdXQgcmV0dXJuaW5nLCB0aGVuIHdlIGdvdFxuICAgICAgICAgICAgICAgIC8vIHR3byBzaGlwcyBuZXh0IHRvIGVhY2ggb3RoZXIsIHNvIHdlIG5lZWQgdG8gYXR0YWNrIGFyb3VuZCB0aGUgZmlyc3RcbiAgICAgICAgICAgICAgICAvLyBoaXRcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5lYm9hcmQudmFsaWRMb2MoW2ZyICsgMSwgZmNdKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW2ZyICsgMSwgZmNdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5lYm9hcmQudmFsaWRMb2MoW2ZyIC0gMSwgZmNdKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW2ZyIC0gMSwgZmNdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5lYm9hcmQudmFsaWRMb2MoW2ZyLCBmYyArIDFdKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW2ZyLCBmYyArIDFdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5lYm9hcmQudmFsaWRMb2MoW2ZyLCBmYyAtIDFdKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW2ZyLCBmYyAtIDFdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnd2Ugc2hvdWxkIG5ldmVyIGdldCBoZXJlIHR3byByb3dzIG5leHQgdG8gZWFjaCBvdGhlciBlZGl0aW9uJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpZiB0aGUgZmlyc3QgaGl0IGFuZCBsYXN0IGhpdCBhcmUgaW4gdGhlIHNhbWUgY29sLCB0aGVuIHdlXG4gICAgICAgICAgICAvLyBuZWVkIHRvIGF0dGFjayB0aGUgbmV4dCBsb2NhdGlvbiBpbiB0aGUgY29sXG4gICAgICAgICAgICBpZiAoZmMgPT0gbGMpIHtcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgbGFzdCBoaXQgaXMgYmVsb3cgdGhlIGZpcnN0IGhpdCwgdGhlbiB3ZSBuZWVkIHRvXG4gICAgICAgICAgICAgICAgLy8gYXR0YWNrIGJlbG93IHRoZSBsYXN0IGhpdFxuICAgICAgICAgICAgICAgIGlmIChmciA8IGxyKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIHRoZSBkb3duIGxvY2F0aW9uXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmVib2FyZC52YWxpZExvYyhbbHIgKyAxLCBsY10pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW2xyICsgMSwgbGNdO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZWJvYXJkLnZhbGlkTG9jKFtmciAtIDEsIGZjXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBkb3duIGxvY2F0aW9uIGlzIG5vdCB2YWxpZCwgdGhlbiB3ZSBuZWVkIHRvXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhdHRhY2sgYWJvdmUgdGhlIGZpcnN0IGhpdFxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtmciAtIDEsIGZjXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgbGFzdCBoaXQgaXMgYWJvdmUgdGhlIGZpcnN0IGhpdCwgdGhlbiB3ZSBuZWVkIHRvXG4gICAgICAgICAgICAgICAgLy8gYXR0YWNrIGFib3ZlIHRoZSBsYXN0IGhpdFxuICAgICAgICAgICAgICAgIGlmIChmciA+IGxyKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIHRoZSB1cCBsb2NhdGlvblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5lYm9hcmQudmFsaWRMb2MoW2xyIC0gMSwgbGNdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtsciAtIDEsIGxjXTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmVib2FyZC52YWxpZExvYyhbZnIgKyAxLCBmY10pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGUgdXAgbG9jYXRpb24gaXMgbm90IHZhbGlkLCB0aGVuIHdlIG5lZWQgdG9cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGF0dGFjayBiZWxvdyB0aGUgZmlyc3QgaGl0XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW2ZyICsgMSwgZmNdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGlmIHdlIG1ha2UgaXQgdG8gaGVyZSB3ZSBnb3QgdHdvIHNoaXBzIG5leHQgdG8gZWFjaCBvdGhlcixcbiAgICAgICAgICAgICAgICAvLyBzbyB3ZSBuZWVkIHRvIGF0dGFjayB0byB0aGUgbGVmdCBhbmQgcmlnaHQgb2YgdGhlIGZpcnN0IGhpdFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmVib2FyZC52YWxpZExvYyhbZnIsIGZjICsgMV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbZnIsIGZjICsgMV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmVib2FyZC52YWxpZExvYyhbZnIsIGZjIC0gMV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbZnIsIGZjIC0gMV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmVib2FyZC52YWxpZExvYyhbZnIgKyAxLCBmY10pKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbZnIgKyAxLCBmY107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmVib2FyZC52YWxpZExvYyhbZnIgLSAxLCBmY10pKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbZnIgLSAxLCBmY107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd3ZSBzaG91bGQgbmV2ZXIgZ2V0IGhlcmUgdHdvIGNvbHMgbmV4dCB0byBlYWNoIG90aGVyIGVkaXRpb24nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgLy8gcmVzZXQgdGhlIGdhbWVcbiAgICAgICAgcmVzZXQoKSB7XG4gICAgICAgICAgICB0aGlzLnBib2FyZCA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmVib2FyZCA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLnAxYm9hcmQgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5wMmJvYXJkID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMudHVybnMgPSAtMjtcbiAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gZ2FtZV9zdGF0dXMucDFfc2V0dGluZ191cDtcbiAgICAgICAgICAgIHRoaXMubW9kZSA9IFwiZWFzeVwiO1xuICAgICAgICAgICAgdGhpcy5wMWJvYXJkID0gQm9hcmQoKTtcbiAgICAgICAgICAgIHRoaXMucDJib2FyZCA9IEJvYXJkKCk7XG4gICAgICAgICAgICB0aGlzLnBib2FyZCA9IHRoaXMucDFib2FyZDtcbiAgICAgICAgICAgIHRoaXMuZWJvYXJkID0gdGhpcy5wMmJvYXJkO1xuICAgICAgICB9LFxuICAgIH07XG59XG5cbmV4cG9ydCB7IGdhbWVfc3RhdHVzLCBTaGlwLCBCb2FyZCwgR2FtZSB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9