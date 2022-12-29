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
        "hovering": [],
        "ship_deck": [2, 3, 3, 4, 5],
        "standing": [2, 3, 3, 4, 5],
        "curr_ship": undefined,
        "rotation": 0,
        "name": 'AI',
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
        setCurrShip(len = this.ship_deck[0]){
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
        placeShip(ship, loc, direction = this.rotation, check = false) { 
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
            if(check){ // if its just a check, not a placement, we return the spots
                return ship_locs;
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
        setAI(){
            this.aiboard.placeRandomShips();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naWMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCLGlCQUFpQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9sb2dpYy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIGNyZWF0ZXMgYSBzaGlwIG9mIGEgc3BlY2lmaWVkIGxlbmd0aFxuZnVuY3Rpb24gU2hpcChsZW5ndGgpe1xuICAgIHJldHVybiB7XG4gICAgICAgIFwibGVuZ3RoXCI6IGxlbmd0aCwgXG4gICAgICAgIFwiaGl0c1wiOiAwLCBcbiAgICAgICAgaGl0KCkge1xuICAgICAgICAgICAgdGhpcy5oaXRzICs9IDE7XG4gICAgICAgIH0sXG4gICAgICAgIGlzU3VuaygpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhpdHMgPj0gdGhpcy5sZW5ndGhcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gY3JlYXRlcyBhIGdhbWVib2FyZCB3aGljaCBwbGFjZXMgc2hpcHMgYW5kIHJlY2lldmVzIGF0dGFja3Mgb24gaXRzIGJvYXJkXG5mdW5jdGlvbiBHYW1lYm9hcmQoKXsgLy8gMTB4MTAgYm9hcmQgIyB4IGxldHRlcnNcbiAgICByZXR1cm4ge1xuICAgICAgICBcImhvdmVyaW5nXCI6IFtdLFxuICAgICAgICBcInNoaXBfZGVja1wiOiBbMiwgMywgMywgNCwgNV0sXG4gICAgICAgIFwic3RhbmRpbmdcIjogWzIsIDMsIDMsIDQsIDVdLFxuICAgICAgICBcImN1cnJfc2hpcFwiOiB1bmRlZmluZWQsXG4gICAgICAgIFwicm90YXRpb25cIjogMCxcbiAgICAgICAgXCJuYW1lXCI6ICdBSScsXG4gICAgICAgIFwiaGl0X25laWdoYm9yc1wiOiBbXSxcbiAgICAgICAgXCJoaXRfYXR0XCI6IFtdLFxuICAgICAgICBcIm1pc3NfYXR0XCI6IFtdLFxuICAgICAgICBcImJvYXJkXCI6IFtcbiAgICAgICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgXSxcbiAgICAgICAgc2V0Q3VyclNoaXAobGVuID0gdGhpcy5zaGlwX2RlY2tbMF0pe1xuICAgICAgICAgICAgdGhpcy5jdXJyX3NoaXAgPSBTaGlwKGxlbik7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gZGV0ZXJtaW5lcyB2YWxpZGl0eSBvZiBsb2NhdGlvblxuICAgICAgICB2YWxpZExvYyhsb2MsIHBsYWNlID0gZmFsc2Upe1xuICAgICAgICAgICAgaWYoISgwIDw9IGxvY1swXSAmJiBsb2NbMF0gPD0gOSkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaW52YWxpZCB5IGxvY2F0aW9uOiAnICsgbG9jWzBdKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZighKDAgPD0gbG9jWzFdICYmIGxvY1sxXSA8PSA5KSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpbnZhbGlkIHggbG9jYXRpb246ICcgKyBsb2NbMV0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHBsYWNlID09IHRydWUgJiYgdGhpcy5ib2FyZFtsb2NbMF1dW2xvY1sxXV0gIT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0aGVyZSBpcyBhbHJlYWR5IGEgc2hpcCBoZXJlJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYodGhpcy5oaXRfYXR0LmluY2x1ZGVzKEpTT04uc3RyaW5naWZ5KGxvYykpIHx8IFxuICAgICAgICAgICAgdGhpcy5taXNzX2F0dC5pbmNsdWRlcyhKU09OLnN0cmluZ2lmeShsb2MpKSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd5b3UgaGF2ZSBhbHJlYWR5IGF0dGFja2VkIHRoaXMgbG9jYXRpb24gJ1xuICAgICAgICAgICAgICAgICArIGxvY1swXSArICcgLCAnICsgbG9jWzFdKTtcbiAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gcmV0dXJucyBhbiBhcnJheSBvZiBuZWlnaGJvcmluZyBsb2NhdGlvbnNcbiAgICAgICAgbmVpZ2hib3JzKGxvYyl7XG4gICAgICAgICAgICBsZXQgciA9IGxvY1swXTtcbiAgICAgICAgICAgIGxldCBjID0gbG9jWzFdO1xuICAgICAgICAgICAgbGV0IG4xID0gW3IgKyAxLCBjXTtcbiAgICAgICAgICAgIGxldCBuMiA9IFtyIC0gMSwgY107XG4gICAgICAgICAgICBsZXQgbjMgPSBbciwgYyAtIDFdO1xuICAgICAgICAgICAgbGV0IG40ID0gW3IsIGMgKyAxXTtcbiAgICAgICAgICAgIGxldCBwb3NzaWIgPSBbbjEsIG4yLCBuMywgbjRdO1xuICAgICAgICAgICAgbGV0IG1vdmVzID0gW107XG4gICAgICAgICAgICBwb3NzaWIuZm9yRWFjaCgobW92ZSk9PntcbiAgICAgICAgICAgICAgICBpZih0aGlzLnZhbGlkTG9jKG1vdmUpKXtcbiAgICAgICAgICAgICAgICAgICAgbW92ZXMucHVzaChtb3ZlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuIG1vdmVzXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy9wbGFjZXMgYSBzaGlwIGdpdmVuIGEgbG9jIGFuZCBvcHRpb25hbCBkaXJlY3Rpb24gWzBSLDFELDJMLDNVXVxuICAgICAgICBwbGFjZVNoaXAoc2hpcCwgbG9jLCBkaXJlY3Rpb24gPSB0aGlzLnJvdGF0aW9uLCBjaGVjayA9IGZhbHNlKSB7IFxuICAgICAgICAgICAgbGV0IHNoaXBfbG9jcyA9IFtdO1xuXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgbGV0IHRtcF9sb2MgPSBbMCwgMF07XG4gICAgICAgICAgICAgICAgc3dpdGNoKGRpcmVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6IC8vIGRvd25cbiAgICAgICAgICAgICAgICAgICAgICAgIHRtcF9sb2NbMF0gPSBsb2NbMF0gKyBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG1wX2xvY1sxXSA9IGxvY1sxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6IC8vIGxlZnRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRtcF9sb2NbMF0gPSBsb2NbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICB0bXBfbG9jWzFdID0gbG9jWzFdIC0gaTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6IC8vIHVwXG4gICAgICAgICAgICAgICAgICAgICAgICB0bXBfbG9jWzBdID0gbG9jWzBdIC0gaTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRtcF9sb2NbMV0gPSBsb2NbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogLy8gcmlnaHRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRtcF9sb2NbMF0gPSBsb2NbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICB0bXBfbG9jWzFdID0gbG9jWzFdICsgaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYoIXRoaXMudmFsaWRMb2ModG1wX2xvYywgdHJ1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzaGlwX2xvY3MucHVzaCh0bXBfbG9jKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKGNoZWNrKXsgLy8gaWYgaXRzIGp1c3QgYSBjaGVjaywgbm90IGEgcGxhY2VtZW50LCB3ZSByZXR1cm4gdGhlIHNwb3RzXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNoaXBfbG9jcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNoaXBfbG9jcy5mb3JFYWNoKChzZWcpID0+e1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbc2VnWzBdXVtzZWdbMV1dID0gc2hpcDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gcmV0dXJucyAyIGZvciBzaW5rLCAxIGZvciBoaXQsIDAgZm9yIGludmFsaWQgbG9jLCAtMSBmb3IgbWlzc1xuICAgICAgICByZWNpZXZlQXR0YWNrKGxvYyl7XG4gICAgICAgICAgICAvLyBjaGVjayB0aGF0IHRoZSBwcm92aWRlZCBoaXQgaXMgdmFsaWRcbiAgICAgICAgICAgIGlmKCF0aGlzLnZhbGlkTG9jKGxvYykpIHJldHVybiAwO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZih0aGlzLmJvYXJkW2xvY1swXV1bbG9jWzFdXSAhPT0gMCl7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtsb2NbMF1dW2xvY1sxXV0uaGl0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5oaXRfYXR0LnB1c2goSlNPTi5zdHJpbmdpZnkobG9jKSk7XG5cbiAgICAgICAgICAgICAgICBpZih0aGlzLmJvYXJkW2xvY1swXV1bbG9jWzFdXS5pc1N1bmsoKSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgaWR4ID0gdGhpcy5zdGFuZGluZy5maW5kSW5kZXgoXG4gICAgICAgICAgICAgICAgICAgICAgICAodmFsKSA9PiB2YWwgPT0gdGhpcy5ib2FyZFtsb2NbMF1dW2xvY1sxXV0ubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhbmRpbmcuc3BsaWNlKGlkeCwgMSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYoIXRoaXMuc3RhbmRpbmcubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2hpdCBzaW5rIGFuZCBnYW1lIHdpbm5lciFcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA2OTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvL2hpdCBhbmQgc2lua1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy9oaXQgbm8gc2lua1xuICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1pc3NfYXR0LnB1c2goSlNPTi5zdHJpbmdpZnkobG9jKSk7XG4gICAgICAgICAgICAgICAgLy9taXNzXG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIHBsYWNlcyBhIHNoaXAgcmFuZG9tbHlcbiAgICAgICAgcGxhY2VSYW5kb21TaGlwcygpe1xuICAgICAgICAgICAgd2hpbGUodGhpcy5zaGlwX2RlY2subGVuZ3RoKXtcbiAgICAgICAgICAgICAgICBsZXQgc2hpcF9sZW4gPSB0aGlzLnNoaXBfZGVjay5wb3AoKTtcbiAgICAgICAgICAgICAgICBsZXQgcGxhY2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgbGV0IHNoaXAgPSBTaGlwKHNoaXBfbGVuKTtcblxuICAgICAgICAgICAgICAgIHdoaWxlKHBsYWNlZCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGxldCByYW5kZGlyID0gTWF0aC5mbG9vcihNYXRoLmFicyhNYXRoLnJhbmRvbSgpKSAqIDQpO1xuICAgICAgICAgICAgICAgIGxldCByYW5keCA9IE1hdGguZmxvb3IoTWF0aC5hYnMoTWF0aC5yYW5kb20oKSkgKiA5KTtcbiAgICAgICAgICAgICAgICBsZXQgcmFuZHkgPSBNYXRoLmZsb29yKE1hdGguYWJzKE1hdGgucmFuZG9tKCkpICogOSk7XG5cbiAgICAgICAgICAgICAgICBwbGFjZWQgPSB0aGlzLnBsYWNlU2hpcChzaGlwLCBbcmFuZHgsIHJhbmR5XSwgcmFuZGRpcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBjcmVhdGVzIGEgcGxheWVyIHdobyBjYW4gcGVyZm9ybSBnYW1lIGFjdGlvbnMgb24gcmVsZXZhbnQgZ2FtZWJvYXJkc1xuZnVuY3Rpb24gUGxheWVyKCl7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgXCJoYXJkXCI6IHRydWUsXG4gICAgICAgIFwicGJvYXJkXCI6IEdhbWVib2FyZCgpLFxuICAgICAgICBcImFpYm9hcmRcIjogR2FtZWJvYXJkKCksXG4gICAgICAgIGF0dGFja0FJKGxvYyl7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5haWJvYXJkLnJlY2lldmVBdHRhY2sobG9jKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0QUkoKXtcbiAgICAgICAgICAgIHRoaXMuYWlib2FyZC5wbGFjZVJhbmRvbVNoaXBzKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGF0dGFja1AoKXtcbiAgICAgICAgICAgIGlmKHRoaXMuaGFyZCAmJiB0aGlzLnBib2FyZC5oaXRfbmVpZ2hib3JzLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgbGV0IGF0dF9sb2MgPSB0aGlzLnBib2FyZC5oaXRfbmVpZ2hib3JzLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgbGV0IGF0dF9yZXMgPSB0aGlzLnBib2FyZC5yZWNpZXZlQXR0YWNrKGF0dF9sb2MpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIGZpbmFsIHNob3QgaXMgYSBoaXQsIHdlIGFkZCBpdHMgbmVpZ2hib3JzIHRvIGhpdCBuZWlnaGJvcnNcbiAgICAgICAgICAgICAgICBpZihhdHRfcmVzID09IDEpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBib2FyZC5oaXRfbmVpZ2hib3JzID0gdGhpcy5wYm9hcmQuaGl0X25laWdoYm9ycy5jb25jYXQodGhpcy5wYm9hcmQubmVpZ2hib3JzKGF0dF9sb2MpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCByYW5keCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgICAgICAgICBsZXQgcmFuZHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgICAgICAgICAgbGV0IGF0dCA9IHRoaXMucGJvYXJkLnJlY2lldmVBdHRhY2soW3JhbmR4LCByYW5keV0pO1xuICAgICAgICAgICAgICAgIHdoaWxlKGF0dCA9PSAwKXtcbiAgICAgICAgICAgICAgICAgICAgcmFuZHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgICAgICAgICAgICAgIHJhbmR5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICAgICAgICAgICAgICBhdHQgPSB0aGlzLnBib2FyZC5yZWNpZXZlQXR0YWNrKFtyYW5keCwgcmFuZHldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYoYXR0ID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYm9hcmQuaGl0X25laWdoYm9ycyA9IHRoaXMucGJvYXJkLmhpdF9uZWlnaGJvcnMuY29uY2F0KHRoaXMucGJvYXJkLm5laWdoYm9ycyhbcmFuZHgsIHJhbmR5XSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHRoaXMucGJvYXJkLnN0YW5kaW5nLmxlbmd0aCA9PSAwKSByZXR1cm4gNjk7XG4gICAgICAgIH0sXG4gICAgICAgIHJlc2V0KHBsYXllcl9wbGFjZV9yYW5kb20gPSBmYWxzZSl7XG4gICAgICAgICAgICB0aGlzLmFpYm9hcmQgPSBudWxsOyAvLyByZXNldGluZyBib2FyZHM7XG4gICAgICAgICAgICB0aGlzLnBib2FyZCA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmFpYm9hcmQgPSBHYW1lYm9hcmQoKTtcbiAgICAgICAgICAgIHRoaXMucGJvYXJkID0gR2FtZWJvYXJkKCk7XG4gICAgICAgICAgICBpZihwbGF5ZXJfcGxhY2VfcmFuZG9tKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYm9hcmQucGxhY2VSYW5kb21TaGlwcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5haWJvYXJkLnBsYWNlUmFuZG9tU2hpcHMoKTtcbiAgICAgICAgfSxcbiAgICB9O1xufVxuXG5leHBvcnQgeyBTaGlwLCBHYW1lYm9hcmQsIFBsYXllciB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9