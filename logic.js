import { exit } from "process";

function Ship(length){
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

function Gameboard(){ // 10x10 board # x letters
    return {
        "hit_att": [],
        "miss_att": [],
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
        validLoc(loc){
            if(!(0 <= loc[0] && loc[0] <= 9)) {
                console.log('invalid x location:' + loc[0]);
                return false;
            }
            if(!(0 <= loc[1] && loc[1] <= 9)) {
                console.log('invalid y location:' + loc[1]);
                return false;
            }
            return true;
        },

        placeShip(ship, loc, direction) { 

            this.validLoc(loc);
            let tmp_loc = [0, 0];

            for(let i = 0; i < ship.length; i++){
                switch(direction) {
                    case 1: // down
                        tmp_loc[0] = loc[0] + i;
                        tmp_loc[1] = loc[1];
                        break;
                    case 2: // left
                        tmp_loc[0] = loc[0];
                        tmp_loc[1] = loc[1] - i;
                        break;
                    case 3: // up
                        tmp_loc[0] = loc[0] - i;
                        tmp_loc[1] = loc[1];
                        break;
                    default: // right
                        tmp_loc[0] = loc[0];
                        tmp_loc[1] = loc[1] + i;
                }
                if(this.validLoc(tmp_loc)) this.board[tmp_loc[0]][tmp_loc[1]] = ship;
            }
        },

        recieveAttack(loc){
            // check that the provided hit is valid
            if(!this.validLoc(loc) ||
             this.hit_att.includes(loc) || 
             this.miss_att.includes(loc)) return;
            
            if(this.board[loc[0]][loc[1]] !== 0){
                this.board[loc[0]][loc[1]].hit();
                this.hit_att.push(loc);
            } else {
                this.miss_att.push(loc);
            }
        },

        shipsStanding(){
            for(let i = 0; i < 10; i++){
                for(let j = 0; j < 10; j++){
                    if(this.board[i][j] == 0) continue;
                    if(!this.board[i][j].isSunk()) return true;
                }
            }
            return false;
        }
    }
}


export { Ship, Gameboard }