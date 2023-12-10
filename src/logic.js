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

export { game_status, Ship, Board, Game }