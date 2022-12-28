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
        "standing": [10],
        "ship_deck": [10],
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

        placeShip(ship, loc, direction = 0) { 
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
                        return 69;
                    }
                    return 1;
                }
            } else {
                this.miss_att.push(JSON.stringify(loc));
                return 1;
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
        "pup": true,
        "pboard": Gameboard(),
        "aiboard": Gameboard(),
        attackAI(loc){
            return this.aiboard.recieveAttack(loc);
        },
        attackP(){
            let randx = Math.floor(Math.random() * 10);
            let randy = Math.floor(Math.random() * 10);
            if(this.pboard.validLoc([randx, randy])) {
                this.pboard.recieveAttack([randx, randy]);
                return true;
            }
            else{
                return false;
            }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naWMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBLDJCQUEyQixpQkFBaUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBLDJCQUEyQixRQUFRO0FBQ25DLCtCQUErQixRQUFRO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvbG9naWMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBjcmVhdGVzIGEgc2hpcCBvZiBhIHNwZWNpZmllZCBsZW5ndGhcbmZ1bmN0aW9uIFNoaXAobGVuZ3RoKXtcbiAgICByZXR1cm4ge1xuICAgICAgICBcImxlbmd0aFwiOiBsZW5ndGgsIFxuICAgICAgICBcImhpdHNcIjogMCwgXG4gICAgICAgIGhpdCgpIHtcbiAgICAgICAgICAgIHRoaXMuaGl0cyArPSAxO1xuICAgICAgICB9LFxuICAgICAgICBpc1N1bmsoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oaXRzID49IHRoaXMubGVuZ3RoXG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIGNyZWF0ZXMgYSBnYW1lYm9hcmQgd2hpY2ggcGxhY2VzIHNoaXBzIGFuZCByZWNpZXZlcyBhdHRhY2tzIG9uIGl0cyBib2FyZFxuZnVuY3Rpb24gR2FtZWJvYXJkKCl7IC8vIDEweDEwIGJvYXJkICMgeCBsZXR0ZXJzXG4gICAgcmV0dXJuIHtcbiAgICAgICAgXCJzdGFuZGluZ1wiOiBbMTBdLFxuICAgICAgICBcInNoaXBfZGVja1wiOiBbMTBdLFxuICAgICAgICBcImhpdF9hdHRcIjogW10sXG4gICAgICAgIFwibWlzc19hdHRcIjogW10sXG4gICAgICAgIFwiYm9hcmRcIjogW1xuICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgICBdLFxuICAgICAgICB2YWxpZExvYyhsb2MsIHBsYWNlID0gZmFsc2Upe1xuICAgICAgICAgICAgaWYoISgwIDw9IGxvY1swXSAmJiBsb2NbMF0gPD0gOSkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaW52YWxpZCB5IGxvY2F0aW9uOiAnICsgbG9jWzBdKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZighKDAgPD0gbG9jWzFdICYmIGxvY1sxXSA8PSA5KSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpbnZhbGlkIHggbG9jYXRpb246ICcgKyBsb2NbMV0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHBsYWNlID09IHRydWUgJiYgdGhpcy5ib2FyZFtsb2NbMF1dW2xvY1sxXV0gIT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0aGVyZSBpcyBhbHJlYWR5IGEgc2hpcCBoZXJlJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYodGhpcy5oaXRfYXR0LmluY2x1ZGVzKEpTT04uc3RyaW5naWZ5KGxvYykpIHx8IFxuICAgICAgICAgICAgdGhpcy5taXNzX2F0dC5pbmNsdWRlcyhKU09OLnN0cmluZ2lmeShsb2MpKSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd5b3UgaGF2ZSBhbHJlYWR5IGF0dGFja2VkIHRoaXMgbG9jYXRpb24gJ1xuICAgICAgICAgICAgICAgICArIGxvY1swXSArICcgLCAnICsgbG9jWzFdKTtcbiAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcGxhY2VTaGlwKHNoaXAsIGxvYywgZGlyZWN0aW9uID0gMCkgeyBcbiAgICAgICAgICAgIGxldCBzaGlwX2xvY3MgPSBbXTtcblxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIGxldCB0bXBfbG9jID0gWzAsIDBdO1xuICAgICAgICAgICAgICAgIHN3aXRjaChkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOiAvLyBkb3duXG4gICAgICAgICAgICAgICAgICAgICAgICB0bXBfbG9jWzBdID0gbG9jWzBdICsgaTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRtcF9sb2NbMV0gPSBsb2NbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOiAvLyBsZWZ0XG4gICAgICAgICAgICAgICAgICAgICAgICB0bXBfbG9jWzBdID0gbG9jWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG1wX2xvY1sxXSA9IGxvY1sxXSAtIGk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOiAvLyB1cFxuICAgICAgICAgICAgICAgICAgICAgICAgdG1wX2xvY1swXSA9IGxvY1swXSAtIGk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0bXBfbG9jWzFdID0gbG9jWzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IC8vIHJpZ2h0XG4gICAgICAgICAgICAgICAgICAgICAgICB0bXBfbG9jWzBdID0gbG9jWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG1wX2xvY1sxXSA9IGxvY1sxXSArIGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKCF0aGlzLnZhbGlkTG9jKHRtcF9sb2MsIHRydWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2hpcF9sb2NzLnB1c2godG1wX2xvYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzaGlwX2xvY3MuZm9yRWFjaCgoc2VnKSA9PntcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3NlZ1swXV1bc2VnWzFdXSA9IHNoaXA7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlY2lldmVBdHRhY2sobG9jKXtcbiAgICAgICAgICAgIC8vIGNoZWNrIHRoYXQgdGhlIHByb3ZpZGVkIGhpdCBpcyB2YWxpZFxuICAgICAgICAgICAgaWYoIXRoaXMudmFsaWRMb2MobG9jKSkgcmV0dXJuIDA7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKHRoaXMuYm9hcmRbbG9jWzBdXVtsb2NbMV1dICE9PSAwKXtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2xvY1swXV1bbG9jWzFdXS5oaXQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmhpdF9hdHQucHVzaChKU09OLnN0cmluZ2lmeShsb2MpKTtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmJvYXJkW2xvY1swXV1bbG9jWzFdXS5pc1N1bmsoKSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgaWR4ID0gdGhpcy5zdGFuZGluZy5maW5kSW5kZXgoXG4gICAgICAgICAgICAgICAgICAgICAgICAodmFsKSA9PiB2YWwgPT0gdGhpcy5ib2FyZFtsb2NbMF1dW2xvY1sxXV0ubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhbmRpbmcuc3BsaWNlKGlkeCwgMSk7XG4gICAgICAgICAgICAgICAgICAgIGlmKCF0aGlzLnN0YW5kaW5nLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDY5O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5taXNzX2F0dC5wdXNoKEpTT04uc3RyaW5naWZ5KGxvYykpO1xuICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHNoaXBzU3RhbmRpbmcoKXtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKXtcbiAgICAgICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgMTA7IGorKyl7XG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuYm9hcmRbaV1bal0gPT0gMCkgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIGlmKCF0aGlzLmJvYXJkW2ldW2pdLmlzU3VuaygpKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0sXG4gICAgICAgIC8vIHBsYWNlcyBhIHNoaXAgcmFuZG9tbHlcbiAgICAgICAgcGxhY2VSYW5kb21TaGlwcygpe1xuICAgICAgICAgICAgd2hpbGUodGhpcy5zaGlwX2RlY2subGVuZ3RoKXtcbiAgICAgICAgICAgICAgICBsZXQgc2hpcF9sZW4gPSB0aGlzLnNoaXBfZGVjay5wb3AoKTtcbiAgICAgICAgICAgICAgICBsZXQgcGxhY2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgbGV0IHNoaXAgPSBTaGlwKHNoaXBfbGVuKTtcblxuICAgICAgICAgICAgICAgIHdoaWxlKHBsYWNlZCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGxldCByYW5kZGlyID0gTWF0aC5mbG9vcihNYXRoLmFicyhNYXRoLnJhbmRvbSgpKSAqIDQpO1xuICAgICAgICAgICAgICAgIGxldCByYW5keCA9IE1hdGguZmxvb3IoTWF0aC5hYnMoTWF0aC5yYW5kb20oKSkgKiA5KTtcbiAgICAgICAgICAgICAgICBsZXQgcmFuZHkgPSBNYXRoLmZsb29yKE1hdGguYWJzKE1hdGgucmFuZG9tKCkpICogOSk7XG5cbiAgICAgICAgICAgICAgICBwbGFjZWQgPSB0aGlzLnBsYWNlU2hpcChzaGlwLCBbcmFuZHgsIHJhbmR5XSwgcmFuZGRpcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBjcmVhdGVzIGEgcGxheWVyIHdobyBjYW4gcGVyZm9ybSBnYW1lIGFjdGlvbnMgb24gcmVsZXZhbnQgZ2FtZWJvYXJkc1xuZnVuY3Rpb24gUGxheWVyKCl7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgXCJwdXBcIjogdHJ1ZSxcbiAgICAgICAgXCJwYm9hcmRcIjogR2FtZWJvYXJkKCksXG4gICAgICAgIFwiYWlib2FyZFwiOiBHYW1lYm9hcmQoKSxcbiAgICAgICAgYXR0YWNrQUkobG9jKXtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFpYm9hcmQucmVjaWV2ZUF0dGFjayhsb2MpO1xuICAgICAgICB9LFxuICAgICAgICBhdHRhY2tQKCl7XG4gICAgICAgICAgICBsZXQgcmFuZHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgICAgICBsZXQgcmFuZHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgICAgICBpZih0aGlzLnBib2FyZC52YWxpZExvYyhbcmFuZHgsIHJhbmR5XSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBib2FyZC5yZWNpZXZlQXR0YWNrKFtyYW5keCwgcmFuZHldKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICByZXNldChwbGF5ZXJfcGxhY2VfcmFuZG9tID0gZmFsc2Upe1xuICAgICAgICAgICAgdGhpcy5haWJvYXJkID0gbnVsbDsgLy8gcmVzZXRpbmcgYm9hcmRzO1xuICAgICAgICAgICAgdGhpcy5wYm9hcmQgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5haWJvYXJkID0gR2FtZWJvYXJkKCk7XG4gICAgICAgICAgICB0aGlzLnBib2FyZCA9IEdhbWVib2FyZCgpO1xuICAgICAgICAgICAgaWYocGxheWVyX3BsYWNlX3JhbmRvbSkge1xuICAgICAgICAgICAgICAgIHRoaXMucGJvYXJkLnBsYWNlUmFuZG9tU2hpcHMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYWlib2FyZC5wbGFjZVJhbmRvbVNoaXBzKCk7XG4gICAgICAgIH0sXG4gICAgfTtcbn1cblxuZXhwb3J0IHsgU2hpcCwgR2FtZWJvYXJkLCBQbGF5ZXIgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==