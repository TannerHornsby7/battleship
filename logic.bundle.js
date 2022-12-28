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
/* harmony export */   "Gameboard": () => (/* binding */ Gameboard),
/* harmony export */   "Player": () => (/* binding */ Player),
/* harmony export */   "Ship": () => (/* binding */ Ship)
/* harmony export */ });
// creates a ship of a specified length
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

// creates a gameboard which places ships and recieves attacks on its board
function Gameboard(){ // 10x10 board # x letters
    return {
        "curr_ship": Ship(0),
        "rotation": 0,
        "name": 'AI',
        "standing": [2, 3, 3, 4, 5],
        "ship_deck": [2, 3, 3, 4, 5],
        "hit_neighbors": [],
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
        setCurrShip(len){
            this.curr_ship = Ship(len);
        },

        // determines validity of location
        validLoc(loc, place = false){
            if(!(0 <= loc[0] && loc[0] <= 9)) {
                console.log('invalid y location: ' + loc[0]);
                return false;
            }
            if(!(0 <= loc[1] && loc[1] <= 9)) {
                console.log('invalid x location: ' + loc[1]);
                return false;
            }
            if(place == true && this.board[loc[0]][loc[1]] != 0) {
                console.log('there is already a ship here');
                return false;
            }
            if(this.hit_att.includes(JSON.stringify(loc)) || 
            this.miss_att.includes(JSON.stringify(loc))) {
                console.log('you have already attacked this location '
                 + loc[0] + ' , ' + loc[1]);
                 return false;
            }
            return true;
        },

        // returns an array of neighboring locations
        neighbors(loc){
            let r = loc[0];
            let c = loc[1];
            let n1 = [r + 1, c];
            let n2 = [r - 1, c];
            let n3 = [r, c - 1];
            let n4 = [r, c + 1];
            let possib = [n1, n2, n3, n4];
            let moves = [];
            possib.forEach((move)=>{
                if(this.validLoc(move)){
                    moves.push(move);
                }
            })
            return moves
        },

        //places a ship given a loc and optional direction [0R,1D,2L,3U]
        placeShip(ship, loc, direction = this.rotation) { 
            let ship_locs = [];

            for(let i = 0; i < ship.length; i++){
                let tmp_loc = [0, 0];
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
                if(!this.validLoc(tmp_loc, true)) {
                    return false;
                }
                ship_locs.push(tmp_loc);
            }
            ship_locs.forEach((seg) =>{
                this.board[seg[0]][seg[1]] = ship;
            });
            return true;
        },

        // returns 2 for sink, 1 for hit, 0 for invalid loc, -1 for miss
        recieveAttack(loc){
            // check that the provided hit is valid
            if(!this.validLoc(loc)) return 0;
            
            if(this.board[loc[0]][loc[1]] !== 0){
                this.board[loc[0]][loc[1]].hit();
                this.hit_att.push(JSON.stringify(loc));

                if(this.board[loc[0]][loc[1]].isSunk()) {
                    let idx = this.standing.findIndex(
                        (val) => val == this.board[loc[0]][loc[1]].length
                    );
                    this.standing.splice(idx, 1);

                    if(!this.standing.length) {
                        //hit sink and game winner!
                        return 69;
                    }
                    //hit and sink
                    return 2;
                }
                //hit no sink
                return 1;
            } else {
                this.miss_att.push(JSON.stringify(loc));
                //miss
                return -1;
            }
        },

        // places a ship randomly
        placeRandomShips(){
            while(this.ship_deck.length){
                let ship_len = this.ship_deck.pop();
                let placed = false;
                let ship = Ship(ship_len);

                while(placed == false) {
                let randdir = Math.floor(Math.abs(Math.random()) * 4);
                let randx = Math.floor(Math.abs(Math.random()) * 9);
                let randy = Math.floor(Math.abs(Math.random()) * 9);

                placed = this.placeShip(ship, [randx, randy], randdir);
                }
            }
        }
    }
}

// creates a player who can perform game actions on relevant gameboards
function Player(){
    return {
        "hard": true,
        "pboard": Gameboard(),
        "aiboard": Gameboard(),
        attackAI(loc){
            return this.aiboard.recieveAttack(loc);
        },
        attackP(){
            if(this.hard && this.pboard.hit_neighbors.length){
                let att_loc = this.pboard.hit_neighbors.shift();
                let att_res = this.pboard.recieveAttack(att_loc);
                
                

                // if the final shot is a hit, we add its neighbors to hit neighbors
                if(att_res == 1){
                    this.pboard.hit_neighbors = this.pboard.hit_neighbors.concat(this.pboard.neighbors(att_loc));
                }
            } else {
                let randx = Math.floor(Math.random() * 10);
                let randy = Math.floor(Math.random() * 10);
                let att = this.pboard.recieveAttack([randx, randy]);
                while(att == 0){
                    randx = Math.floor(Math.random() * 10);
                    randy = Math.floor(Math.random() * 10);
                    att = this.pboard.recieveAttack([randx, randy]);
                }
                if(att == 1) {
                    this.pboard.hit_neighbors = this.pboard.hit_neighbors.concat(this.pboard.neighbors([randx, randy]));
                }
            }
            if(this.pboard.standing.length == 0) return 69;
        },
        reset(player_place_random = false){
            this.aiboard = null; // reseting boards;
            this.pboard = null;
            this.aiboard = Gameboard();
            this.pboard = Gameboard();
            if(player_place_random) {
                this.pboard.placeRandomShips();
            }
            this.aiboard.placeRandomShips();
        },
    };
}


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naWMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBLDJCQUEyQixpQkFBaUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9sb2dpYy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIGNyZWF0ZXMgYSBzaGlwIG9mIGEgc3BlY2lmaWVkIGxlbmd0aFxuZnVuY3Rpb24gU2hpcChsZW5ndGgpe1xuICAgIHJldHVybiB7XG4gICAgICAgIFwibGVuZ3RoXCI6IGxlbmd0aCwgXG4gICAgICAgIFwiaGl0c1wiOiAwLCBcbiAgICAgICAgaGl0KCkge1xuICAgICAgICAgICAgdGhpcy5oaXRzICs9IDE7XG4gICAgICAgIH0sXG4gICAgICAgIGlzU3VuaygpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhpdHMgPj0gdGhpcy5sZW5ndGhcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gY3JlYXRlcyBhIGdhbWVib2FyZCB3aGljaCBwbGFjZXMgc2hpcHMgYW5kIHJlY2lldmVzIGF0dGFja3Mgb24gaXRzIGJvYXJkXG5mdW5jdGlvbiBHYW1lYm9hcmQoKXsgLy8gMTB4MTAgYm9hcmQgIyB4IGxldHRlcnNcbiAgICByZXR1cm4ge1xuICAgICAgICBcImN1cnJfc2hpcFwiOiBTaGlwKDApLFxuICAgICAgICBcInJvdGF0aW9uXCI6IDAsXG4gICAgICAgIFwibmFtZVwiOiAnQUknLFxuICAgICAgICBcInN0YW5kaW5nXCI6IFsyLCAzLCAzLCA0LCA1XSxcbiAgICAgICAgXCJzaGlwX2RlY2tcIjogWzIsIDMsIDMsIDQsIDVdLFxuICAgICAgICBcImhpdF9uZWlnaGJvcnNcIjogW10sXG4gICAgICAgIFwiaGl0X2F0dFwiOiBbXSxcbiAgICAgICAgXCJtaXNzX2F0dFwiOiBbXSxcbiAgICAgICAgXCJib2FyZFwiOiBbXG4gICAgICAgICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgICAgICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgICAgICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgICAgICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgICAgICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgICAgICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgICAgICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgICAgICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgICAgICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgICAgICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgICAgIF0sXG4gICAgICAgIHNldEN1cnJTaGlwKGxlbil7XG4gICAgICAgICAgICB0aGlzLmN1cnJfc2hpcCA9IFNoaXAobGVuKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBkZXRlcm1pbmVzIHZhbGlkaXR5IG9mIGxvY2F0aW9uXG4gICAgICAgIHZhbGlkTG9jKGxvYywgcGxhY2UgPSBmYWxzZSl7XG4gICAgICAgICAgICBpZighKDAgPD0gbG9jWzBdICYmIGxvY1swXSA8PSA5KSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpbnZhbGlkIHkgbG9jYXRpb246ICcgKyBsb2NbMF0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKCEoMCA8PSBsb2NbMV0gJiYgbG9jWzFdIDw9IDkpKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2ludmFsaWQgeCBsb2NhdGlvbjogJyArIGxvY1sxXSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYocGxhY2UgPT0gdHJ1ZSAmJiB0aGlzLmJvYXJkW2xvY1swXV1bbG9jWzFdXSAhPSAwKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3RoZXJlIGlzIGFscmVhZHkgYSBzaGlwIGhlcmUnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZih0aGlzLmhpdF9hdHQuaW5jbHVkZXMoSlNPTi5zdHJpbmdpZnkobG9jKSkgfHwgXG4gICAgICAgICAgICB0aGlzLm1pc3NfYXR0LmluY2x1ZGVzKEpTT04uc3RyaW5naWZ5KGxvYykpKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3lvdSBoYXZlIGFscmVhZHkgYXR0YWNrZWQgdGhpcyBsb2NhdGlvbiAnXG4gICAgICAgICAgICAgICAgICsgbG9jWzBdICsgJyAsICcgKyBsb2NbMV0pO1xuICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSxcblxuICAgICAgICAvLyByZXR1cm5zIGFuIGFycmF5IG9mIG5laWdoYm9yaW5nIGxvY2F0aW9uc1xuICAgICAgICBuZWlnaGJvcnMobG9jKXtcbiAgICAgICAgICAgIGxldCByID0gbG9jWzBdO1xuICAgICAgICAgICAgbGV0IGMgPSBsb2NbMV07XG4gICAgICAgICAgICBsZXQgbjEgPSBbciArIDEsIGNdO1xuICAgICAgICAgICAgbGV0IG4yID0gW3IgLSAxLCBjXTtcbiAgICAgICAgICAgIGxldCBuMyA9IFtyLCBjIC0gMV07XG4gICAgICAgICAgICBsZXQgbjQgPSBbciwgYyArIDFdO1xuICAgICAgICAgICAgbGV0IHBvc3NpYiA9IFtuMSwgbjIsIG4zLCBuNF07XG4gICAgICAgICAgICBsZXQgbW92ZXMgPSBbXTtcbiAgICAgICAgICAgIHBvc3NpYi5mb3JFYWNoKChtb3ZlKT0+e1xuICAgICAgICAgICAgICAgIGlmKHRoaXMudmFsaWRMb2MobW92ZSkpe1xuICAgICAgICAgICAgICAgICAgICBtb3Zlcy5wdXNoKG1vdmUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZXR1cm4gbW92ZXNcbiAgICAgICAgfSxcblxuICAgICAgICAvL3BsYWNlcyBhIHNoaXAgZ2l2ZW4gYSBsb2MgYW5kIG9wdGlvbmFsIGRpcmVjdGlvbiBbMFIsMUQsMkwsM1VdXG4gICAgICAgIHBsYWNlU2hpcChzaGlwLCBsb2MsIGRpcmVjdGlvbiA9IHRoaXMucm90YXRpb24pIHsgXG4gICAgICAgICAgICBsZXQgc2hpcF9sb2NzID0gW107XG5cbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICBsZXQgdG1wX2xvYyA9IFswLCAwXTtcbiAgICAgICAgICAgICAgICBzd2l0Y2goZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTogLy8gZG93blxuICAgICAgICAgICAgICAgICAgICAgICAgdG1wX2xvY1swXSA9IGxvY1swXSArIGk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0bXBfbG9jWzFdID0gbG9jWzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjogLy8gbGVmdFxuICAgICAgICAgICAgICAgICAgICAgICAgdG1wX2xvY1swXSA9IGxvY1swXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRtcF9sb2NbMV0gPSBsb2NbMV0gLSBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzogLy8gdXBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRtcF9sb2NbMF0gPSBsb2NbMF0gLSBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG1wX2xvY1sxXSA9IGxvY1sxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiAvLyByaWdodFxuICAgICAgICAgICAgICAgICAgICAgICAgdG1wX2xvY1swXSA9IGxvY1swXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRtcF9sb2NbMV0gPSBsb2NbMV0gKyBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZighdGhpcy52YWxpZExvYyh0bXBfbG9jLCB0cnVlKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNoaXBfbG9jcy5wdXNoKHRtcF9sb2MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2hpcF9sb2NzLmZvckVhY2goKHNlZykgPT57XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtzZWdbMF1dW3NlZ1sxXV0gPSBzaGlwO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSxcblxuICAgICAgICAvLyByZXR1cm5zIDIgZm9yIHNpbmssIDEgZm9yIGhpdCwgMCBmb3IgaW52YWxpZCBsb2MsIC0xIGZvciBtaXNzXG4gICAgICAgIHJlY2lldmVBdHRhY2sobG9jKXtcbiAgICAgICAgICAgIC8vIGNoZWNrIHRoYXQgdGhlIHByb3ZpZGVkIGhpdCBpcyB2YWxpZFxuICAgICAgICAgICAgaWYoIXRoaXMudmFsaWRMb2MobG9jKSkgcmV0dXJuIDA7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKHRoaXMuYm9hcmRbbG9jWzBdXVtsb2NbMV1dICE9PSAwKXtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2xvY1swXV1bbG9jWzFdXS5oaXQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmhpdF9hdHQucHVzaChKU09OLnN0cmluZ2lmeShsb2MpKTtcblxuICAgICAgICAgICAgICAgIGlmKHRoaXMuYm9hcmRbbG9jWzBdXVtsb2NbMV1dLmlzU3VuaygpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpZHggPSB0aGlzLnN0YW5kaW5nLmZpbmRJbmRleChcbiAgICAgICAgICAgICAgICAgICAgICAgICh2YWwpID0+IHZhbCA9PSB0aGlzLmJvYXJkW2xvY1swXV1bbG9jWzFdXS5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFuZGluZy5zcGxpY2UoaWR4LCAxKTtcblxuICAgICAgICAgICAgICAgICAgICBpZighdGhpcy5zdGFuZGluZy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vaGl0IHNpbmsgYW5kIGdhbWUgd2lubmVyIVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDY5O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vaGl0IGFuZCBzaW5rXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvL2hpdCBubyBzaW5rXG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMubWlzc19hdHQucHVzaChKU09OLnN0cmluZ2lmeShsb2MpKTtcbiAgICAgICAgICAgICAgICAvL21pc3NcbiAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gcGxhY2VzIGEgc2hpcCByYW5kb21seVxuICAgICAgICBwbGFjZVJhbmRvbVNoaXBzKCl7XG4gICAgICAgICAgICB3aGlsZSh0aGlzLnNoaXBfZGVjay5sZW5ndGgpe1xuICAgICAgICAgICAgICAgIGxldCBzaGlwX2xlbiA9IHRoaXMuc2hpcF9kZWNrLnBvcCgpO1xuICAgICAgICAgICAgICAgIGxldCBwbGFjZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBsZXQgc2hpcCA9IFNoaXAoc2hpcF9sZW4pO1xuXG4gICAgICAgICAgICAgICAgd2hpbGUocGxhY2VkID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgbGV0IHJhbmRkaXIgPSBNYXRoLmZsb29yKE1hdGguYWJzKE1hdGgucmFuZG9tKCkpICogNCk7XG4gICAgICAgICAgICAgICAgbGV0IHJhbmR4ID0gTWF0aC5mbG9vcihNYXRoLmFicyhNYXRoLnJhbmRvbSgpKSAqIDkpO1xuICAgICAgICAgICAgICAgIGxldCByYW5keSA9IE1hdGguZmxvb3IoTWF0aC5hYnMoTWF0aC5yYW5kb20oKSkgKiA5KTtcblxuICAgICAgICAgICAgICAgIHBsYWNlZCA9IHRoaXMucGxhY2VTaGlwKHNoaXAsIFtyYW5keCwgcmFuZHldLCByYW5kZGlyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIGNyZWF0ZXMgYSBwbGF5ZXIgd2hvIGNhbiBwZXJmb3JtIGdhbWUgYWN0aW9ucyBvbiByZWxldmFudCBnYW1lYm9hcmRzXG5mdW5jdGlvbiBQbGF5ZXIoKXtcbiAgICByZXR1cm4ge1xuICAgICAgICBcImhhcmRcIjogdHJ1ZSxcbiAgICAgICAgXCJwYm9hcmRcIjogR2FtZWJvYXJkKCksXG4gICAgICAgIFwiYWlib2FyZFwiOiBHYW1lYm9hcmQoKSxcbiAgICAgICAgYXR0YWNrQUkobG9jKXtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFpYm9hcmQucmVjaWV2ZUF0dGFjayhsb2MpO1xuICAgICAgICB9LFxuICAgICAgICBhdHRhY2tQKCl7XG4gICAgICAgICAgICBpZih0aGlzLmhhcmQgJiYgdGhpcy5wYm9hcmQuaGl0X25laWdoYm9ycy5sZW5ndGgpe1xuICAgICAgICAgICAgICAgIGxldCBhdHRfbG9jID0gdGhpcy5wYm9hcmQuaGl0X25laWdoYm9ycy5zaGlmdCgpO1xuICAgICAgICAgICAgICAgIGxldCBhdHRfcmVzID0gdGhpcy5wYm9hcmQucmVjaWV2ZUF0dGFjayhhdHRfbG9jKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBmaW5hbCBzaG90IGlzIGEgaGl0LCB3ZSBhZGQgaXRzIG5laWdoYm9ycyB0byBoaXQgbmVpZ2hib3JzXG4gICAgICAgICAgICAgICAgaWYoYXR0X3JlcyA9PSAxKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYm9hcmQuaGl0X25laWdoYm9ycyA9IHRoaXMucGJvYXJkLmhpdF9uZWlnaGJvcnMuY29uY2F0KHRoaXMucGJvYXJkLm5laWdoYm9ycyhhdHRfbG9jKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgcmFuZHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgICAgICAgICAgbGV0IHJhbmR5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICAgICAgICAgIGxldCBhdHQgPSB0aGlzLnBib2FyZC5yZWNpZXZlQXR0YWNrKFtyYW5keCwgcmFuZHldKTtcbiAgICAgICAgICAgICAgICB3aGlsZShhdHQgPT0gMCl7XG4gICAgICAgICAgICAgICAgICAgIHJhbmR4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICAgICAgICAgICAgICByYW5keSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgICAgICAgICAgICAgYXR0ID0gdGhpcy5wYm9hcmQucmVjaWV2ZUF0dGFjayhbcmFuZHgsIHJhbmR5XSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKGF0dCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGJvYXJkLmhpdF9uZWlnaGJvcnMgPSB0aGlzLnBib2FyZC5oaXRfbmVpZ2hib3JzLmNvbmNhdCh0aGlzLnBib2FyZC5uZWlnaGJvcnMoW3JhbmR4LCByYW5keV0pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZih0aGlzLnBib2FyZC5zdGFuZGluZy5sZW5ndGggPT0gMCkgcmV0dXJuIDY5O1xuICAgICAgICB9LFxuICAgICAgICByZXNldChwbGF5ZXJfcGxhY2VfcmFuZG9tID0gZmFsc2Upe1xuICAgICAgICAgICAgdGhpcy5haWJvYXJkID0gbnVsbDsgLy8gcmVzZXRpbmcgYm9hcmRzO1xuICAgICAgICAgICAgdGhpcy5wYm9hcmQgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5haWJvYXJkID0gR2FtZWJvYXJkKCk7XG4gICAgICAgICAgICB0aGlzLnBib2FyZCA9IEdhbWVib2FyZCgpO1xuICAgICAgICAgICAgaWYocGxheWVyX3BsYWNlX3JhbmRvbSkge1xuICAgICAgICAgICAgICAgIHRoaXMucGJvYXJkLnBsYWNlUmFuZG9tU2hpcHMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYWlib2FyZC5wbGFjZVJhbmRvbVNoaXBzKCk7XG4gICAgICAgIH0sXG4gICAgfTtcbn1cblxuZXhwb3J0IHsgU2hpcCwgR2FtZWJvYXJkLCBQbGF5ZXIgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==