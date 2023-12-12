/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! assets/Open_Sans/OpenSans-Italic-VariableFont_wdth,wght.ttf */ "./src/assets/Open_Sans/OpenSans-Italic-VariableFont_wdth,wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Custom Font */\n@font-face {\n  font-family: \"Open Sans\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  font-weight: 1000;\n  font-style: normal;\n}\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Open Sans\";\n}\n\nhtml,\nbody {\n  width: 100%;\n  height: 100%;\n}\n\nul,\nli {\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n}\n\nbutton,\ninput {\n  border: none;\n  outline: none;\n}\n\nbody {\n  display: grid;\n  grid-template-rows: 1fr 9fr 1fr;\n}\n\n.head {\n  font-size: 2em;\n  display: grid;\n  grid-template-columns: 1fr 6fr 1fr;\n  place-items: center;\n  color: ivory;\n  background-color: rgb(20, 0, 102);\n  transition: all 0.5s ease;\n  height: 100px;\n}\n.head .status {\n  font-size: medium;\n  padding: 15px;\n}\n.head button {\n  font-size: 0.5em;\n  height: 40px;\n  width: 60%;\n  color: rgb(20, 0, 102);\n  background-color: ivory;\n  box-shadow: 2px 2px 2px rgb(20, 0, 102);\n  transition: all 0.5s ease;\n  background-color: aliceblue;\n  color: black;\n}\n.head button:hover {\n  cursor: pointer;\n  color: rgb(20, 0, 102);\n  background-color: ivory;\n  box-shadow: 2px 2px 2px rgb(20, 0, 102);\n  transition: all 0.5s ease;\n}\n\n.foot {\n  display: flex;\n  background-color: rgb(56, 55, 55);\n  color: ivory;\n  justify-content: center;\n  align-items: center;\n}\n\n.body {\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;\n  height: 100%;\n}\n.body .info {\n  display: grid;\n  grid-template-rows: 1fr 2fr;\n}\n.body .info .boat {\n  cursor: pointer;\n}\n.body .info .key {\n  align-self: center;\n  justify-self: center;\n  border: 2px solid rgb(20, 0, 102);\n  padding: 2px 10px 5px 10px;\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n}\n.body .info .key .key_sect {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 15px;\n}\n.body .info .key .sunk {\n  width: 50px;\n  height: 25px;\n  background-color: rgb(154, 9, 9);\n  border: 2px solid ivory;\n}\n.body .info .key h2 {\n  font-size: 25px;\n}\n.body .info .key .hit {\n  color: rgb(154, 9, 9);\n}\n.body .info .dock {\n  justify-self: center;\n  width: 60%;\n}\n.body .info .dock h2,\n.body .info .dock h5 {\n  text-align: center;\n}\n.body .info .dock h2 {\n  color: rgb(20, 0, 102);\n}\n.body .info .dock .boat_lot {\n  border: 2px solid rgb(20, 0, 102);\n  padding: 8px;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.body .info .dock .boat {\n  height: 30px;\n  background-color: black;\n}\n.body .info #rp {\n  margin-bottom: 15px;\n  justify-self: flex-end;\n  height: 50px;\n  width: 80%;\n  background-color: rgb(20, 0, 102);\n  color: ivory;\n}\n.body .info #rp:hover {\n  cursor: pointer;\n  background-color: ivory;\n  border: 2px solid rgb(20, 0, 102);\n  color: rgb(20, 0, 102);\n}\n.body .game {\n  display: grid;\n  place-items: center;\n}\n.body .game .fullboard {\n  place-items: center;\n  height: 95%;\n  width: 75%;\n  background-color: rgb(20, 0, 102);\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n  row-gap: 5px;\n}\n.body .game .board {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  width: 90%;\n  height: 90%;\n  background-color: black;\n}\n.body .game .cell {\n  margin: 1px;\n  padding: none;\n  box-sizing: border-box;\n}\n.body .game p {\n  padding: 0px;\n  margin: 0px;\n  border: 0px;\n  align-self: center;\n  justify-self: center;\n  margin-bottom: -50px;\n  text-align: center;\n}\n.body .game .empty {\n  background-color: ivory;\n}\n.body .game .empty .hovering {\n  background-color: gray;\n}\n.body .game .miss {\n  background-color: ivory;\n  color: black;\n}\n.body .game .sunk {\n  background-color: rgb(154, 9, 9);\n}\n.body .game .yours {\n  background-color: black;\n}\n.body .game .yours:hover {\n  box-sizing: border-box;\n  background-color: ivory;\n  cursor: pointer;\n}\n.body .game .hit {\n  font-size: 1em;\n  background-color: black;\n  color: rgb(154, 9, 9);\n  font-weight: bolder;\n}\n.body .game .hovering {\n  background-color: lightslategray;\n}\n.body .game .hovering:hover {\n  cursor: pointer;\n}\n.body .game .ecell:hover {\n  cursor: crosshair;\n  transition: all 0.2s ease;\n  background-color: white;\n}\n.body .reset {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: center;\n}\n.body .reset button {\n  margin-bottom: 15px;\n  justify-self: flex-end;\n  height: 50px;\n  width: 80%;\n  background-color: rgb(154, 9, 9);\n  color: ivory;\n}\n.body .reset button:hover {\n  cursor: pointer;\n  background-color: ivory;\n  border: 2px solid rgb(154, 9, 9);\n  color: rgb(20, 0, 102);\n}\n.body .reset .hardbtn {\n  background-color: black;\n}\n.body .reset .hardbtn:hover {\n  cursor: pointer;\n  background-color: ivory;\n  border: 2px solid black;\n  color: black;\n}\n.body .reset .easybtn {\n  background-color: darkgreen;\n}\n.body .reset .easybtn:hover {\n  cursor: pointer;\n  background-color: ivory;\n  border: 2px solid darkgreen;\n  color: darkgreen;\n}\n.body .reset .pvpbtn {\n  background-color: rgb(20, 0, 102);\n}\n.body .reset .pvpbtn:hover {\n  cursor: pointer;\n  background-color: ivory;\n  border: 2px solid rgb(20, 0, 102);\n  color: rgb(20, 0, 102);\n}\n\n.returnbtn {\n  min-height: 50px;\n  background-color: black;\n  color: whitesmoke;\n}\n.returnbtn:hover {\n  cursor: pointer;\n  background-color: ivory;\n  border: 2px solid black;\n  color: black;\n}\n\n.gg {\n  display: grid;\n  width: 100%;\n  height: 100%;\n  font-size: 3em;\n  place-content: center;\n}\n\n.win_div {\n  display: grid;\n  width: 100%;\n  font-size: 3em;\n  place-content: center;\n}", "",{"version":3,"sources":["webpack://./src/_formatting.scss","webpack://./src/style.scss"],"names":[],"mappings":"AAAA,gBAAA;AACA;EACE,wBAAA;EACA,qFAAA;EAEA,iBAAA;EACA,kBAAA;ACAF;ADIA;EACE,SAAA;EACA,UAAA;EACA,sBAAA;EACA,wBAAA;ACFF;;ADKA;;EAEE,WAAA;EACA,YAAA;ACFF;;ADKA;;EAEE,gBAAA;ACFF;;ADKA;EACE,qBAAA;ACFF;;ADKA;;EAEE,YAAA;EACA,aAAA;ACFF;;AAbA;EACE,aAAA;EACA,+BAAA;AAgBF;;AAbA;EACE,cAAA;EACA,aAAA;EACA,kCAAA;EACA,mBAAA;EApBE,YANS;EAOT,iCANQ;EAaV,yBAAA;EAcA,aAAA;AAkBF;AAjBE;EACE,iBAAA;EACA,aAAA;AAmBJ;AAjBE;EACE,gBAAA;EACA,YAAA;EACA,UAAA;EA1BA,sBATQ;EAUR,uBAXS;EAYT,uCAAA;EAEF,yBAAA;EAwBE,2BAAA;EACA,YAAA;AAsBJ;AArBI;EACE,eAAA;EA/BF,sBATQ;EAUR,uBAXS;EAYT,uCAAA;EAEF,yBAAA;AAsDF;;AArBA;EACE,aAAA;EACA,iCAAA;EACA,YAlDW;EAmDX,uBAAA;EACA,mBAAA;AAwBF;;AArBA;EACE,aAAA;EACA,kCAAA;EACA,YAAA;AAwBF;AAtBE;EACE,aAAA;EACA,2BAAA;AAwBJ;AAvBI;EACE,eAAA;AAyBN;AAvBI;EACE,kBAAA;EACA,oBAAA;EACA,iCAAA;EACA,0BAAA;EACA,UAAA;EACA,aAAA;EACA,sBAAA;AAyBN;AAxBM;EACE,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,SAAA;AA0BR;AAxBM;EACE,WAAA;EACA,YAAA;EACA,gCAAA;EACA,uBAAA;AA0BR;AAtBM;EACE,eAAA;AAwBR;AAtBM;EACE,qBAAA;AAwBR;AApBI;EACE,oBAAA;EAQA,UAAA;AAeN;AAtBM;;EAEE,kBAAA;AAwBR;AAtBM;EACE,sBAAA;AAwBR;AArBM;EACE,iCAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,QAAA;AAuBR;AArBM;EACE,YAAA;EACA,uBAAA;AAuBR;AAnBI;EACE,mBAAA;EACA,sBAAA;EACA,YAAA;EACA,UAAA;EACA,iCA3HM;EA4HN,YA7HO;AAkJb;AApBM;EACE,eAAA;EACA,uBAhIK;EAiIL,iCAAA;EACA,sBAjII;AAuJZ;AAjBE;EACE,aAAA;EACA,mBAAA;AAmBJ;AAlBI;EACE,mBAAA;EACA,WAAA;EACA,UAAA;EACA,iCA7IM;EA8IN,aAAA;EACA,2BAAA;EACA,YAAA;AAoBN;AAlBI;EACE,aAAA;EACA,sCAAA;EACA,UAAA;EACA,WAAA;EACA,uBAAA;AAoBN;AAjBI;EACE,WAAA;EACA,aAAA;EACA,sBAAA;AAmBN;AAjBI;EACE,YAAA;EACA,WAAA;EACA,WAAA;EACA,kBAAA;EACA,oBAAA;EACA,oBAAA;EACA,kBAAA;AAmBN;AAjBI;EACE,uBA1KO;AA6Lb;AAlBM;EACE,sBAAA;AAoBR;AAhBI;EACE,uBAjLO;EAkLP,YAAA;AAkBN;AAhBI;EACE,gCAAA;AAkBN;AAhBI;EACE,uBAAA;AAkBN;AAjBM;EACE,sBAAA;EACA,uBA3LK;EA4LL,eAAA;AAmBR;AAhBI;EACE,cAAA;EACA,uBAAA;EACA,qBAAA;EACA,mBAAA;AAkBN;AAhBI;EACE,gCAAA;AAkBN;AAjBM;EACE,eAAA;AAmBR;AAfM;EACE,iBAAA;EACA,yBAAA;EACA,uBAAA;AAiBR;AAZE;EACE,aAAA;EACA,sBAAA;EACA,yBAAA;EACA,mBAAA;AAcJ;AAbI;EACE,mBAAA;EACA,sBAAA;EACA,YAAA;EACA,UAAA;EACA,gCAAA;EACA,YA/NO;AA8Ob;AAdM;EACE,eAAA;EACA,uBAlOK;EAmOL,gCAAA;EACA,sBAnOI;AAmPZ;AAbI;EACE,uBAAA;AAeN;AAdM;EACE,eAAA;EACA,uBA3OK;EA4OL,uBAAA;EACA,YAAA;AAgBR;AAbI;EACE,2BAAA;AAeN;AAdM;EACE,eAAA;EACA,uBApPK;EAqPL,2BAAA;EACA,gBAAA;AAgBR;AAbI;EACE,iCAzPM;AAwQZ;AAdM;EACE,eAAA;EACA,uBA7PK;EA8PL,iCAAA;EACA,sBA9PI;AA8QZ;;AAVA;EACE,gBAAA;EACA,uBAAA;EACA,iBAAA;AAaF;AAZE;EACE,eAAA;EACA,uBA3QS;EA4QT,uBAAA;EACA,YAAA;AAcJ;;AAVA;EACE,aAAA;EACA,WAAA;EACA,YAAA;EACA,cAAA;EACA,qBAAA;AAaF;;AAVA;EACE,aAAA;EACA,WAAA;EACA,cAAA;EACA,qBAAA;AAaF","sourcesContent":["/* Custom Font */\n@font-face {\n  font-family: \"Open Sans\";\n  src: url(\"assets/Open_Sans/OpenSans-Italic-VariableFont_wdth,wght.ttf\"),\n    url(\"assets/Open_Sans/OpenSans-Italic-VariableFont_wdth,wght.ttf\");\n  font-weight: 1000;\n  font-style: normal;\n}\n\n// setting basic element properties\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Open Sans\";\n}\n\nhtml,\nbody {\n  width: 100%;\n  height: 100%;\n}\n\nul,\nli {\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n}\n\nbutton,\ninput {\n  border: none;\n  outline: none;\n}\n","@use \"formatting\";\n\n// theme colors\n$lightcolor: ivory;\n$darkcolor: rgb(20, 0, 102);\n\n// setting theme\n@mixin theme($dark: true) {\n  @if ($dark) {\n    color: $lightcolor;\n    background-color: $darkcolor;\n    // box-shadow: 2px 2px 2px $lightcolor;\n  } @else {\n    color: $darkcolor;\n    background-color: $lightcolor;\n    box-shadow: 2px 2px 2px $darkcolor;\n  }\n  transition: all 0.5s ease;\n}\n\nbody {\n  display: grid;\n  grid-template-rows: 1fr 9fr 1fr;\n}\n\n.head{\n  font-size: 2em;\n  display: grid;\n  grid-template-columns: 1fr 6fr 1fr;\n  place-items: center;\n  @include theme;\n  height: 100px;\n  .status {\n    font-size: medium;\n    padding: 15px;\n  }\n  button {\n    font-size: .5em;\n    height: 40px;\n    width: 60%;\n    @include theme(false);\n    background-color: aliceblue;\n    color: black;\n    &:hover {\n      cursor: pointer;\n      @include theme(false);\n    }\n  }\n}\n\n.foot{\n  display: flex;\n  background-color: rgb(56, 55, 55);\n  color: $lightcolor;\n  justify-content: center;\n  align-items: center;\n}\n\n.body{\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;\n  height: 100%;\n\n  .info {\n    display: grid;\n    grid-template-rows: 1fr 2fr;\n    .boat {\n      cursor: pointer;\n    }\n    .key{\n      align-self: center;\n      justify-self: center;\n      border: 2px solid $darkcolor;\n      padding: 2px 10px 5px 10px;\n      width: 50%;\n      display: flex;\n      flex-direction: column;\n      .key_sect {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        gap: 15px;\n      }\n      .sunk {\n        width: 50px;\n        height: 25px;\n        background-color: rgb(154, 9, 9);\n        border: 2px solid $lightcolor;\n\n      }\n\n      h2{\n        font-size: 25px;\n      }\n      .hit{\n        color: rgb(154, 9, 9);\n      }\n    }\n\n    .dock{\n      justify-self: center;\n      h2,\n      h5 {\n        text-align: center;\n      }\n      h2 {\n        color:rgb(20, 0, 102);\n      }\n      width: 60%;\n      .boat_lot{\n        border: 2px solid $darkcolor;\n        padding: 8px;\n        display: flex;\n        flex-direction: column;\n        gap: 5px;\n      }\n      .boat{\n        height: 30px;\n        background-color: black;\n      }\n    }\n\n    #rp {\n      margin-bottom: 15px;\n      justify-self: flex-end;\n      height: 50px;\n      width: 80%;\n      background-color: $darkcolor;\n      color: $lightcolor;\n      &:hover{\n        cursor: pointer;\n        background-color: $lightcolor;\n        border: 2px solid $darkcolor;\n        color: $darkcolor;\n      }\n    }\n  }\n\n  .game{\n    display: grid;\n    place-items: center;\n    .fullboard {\n      place-items: center;\n      height: 95%;\n      width: 75%;\n      background-color: $darkcolor;\n      display: grid;\n      grid-template-rows: 1fr 1fr;\n      row-gap: 5px;\n    }\n    .board{\n      display: grid;\n      grid-template-columns: repeat(10, 1fr);\n      width:90%;\n      height:90%;\n      background-color: black;\n      \n    }\n    .cell {\n      margin: 1px;\n      padding: none;\n      box-sizing: border-box;\n    }\n    p{\n      padding: 0px;\n      margin: 0px;\n      border: 0px;\n      align-self: center;\n      justify-self: center;\n      margin-bottom: -50px;\n      text-align: center;\n    }\n    .empty {\n      background-color: $lightcolor;\n      .hovering {\n        background-color: gray;\n      }\n    }\n  \n    .miss {\n      background-color: $lightcolor;\n      color: black;\n    }\n    .sunk {\n      background-color: rgb(154, 9, 9);\n    }\n    .yours {\n      background-color: black;\n      &:hover {\n        box-sizing: border-box;\n        background-color: $lightcolor;\n        cursor: pointer;\n      }\n    }\n    .hit {\n      font-size: 1em;\n      background-color: black;\n      color: rgb(154, 9, 9);\n      font-weight: bolder;\n    }\n    .hovering {\n      background-color: lightslategray;\n      &:hover{\n        cursor: pointer;\n      }\n    }\n    .ecell {\n      &:hover {\n        cursor: crosshair;\n        transition: all 0.2s ease;\n        background-color: white;\n      }\n    }\n  }\n  \n  .reset {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    align-items: center;\n    button {\n      margin-bottom: 15px;\n      justify-self: flex-end;\n      height: 50px;\n      width: 80%;\n      background-color: rgb(154, 9, 9);\n      color: $lightcolor;\n      &:hover{\n        cursor: pointer;\n        background-color: $lightcolor;\n        border: 2px solid rgb(154, 9, 9);\n        color: $darkcolor;\n      }\n    }\n    .hardbtn {\n      background-color: black;\n      &:hover{\n        cursor: pointer;\n        background-color: $lightcolor;\n        border: 2px solid black;\n        color: black;\n      }\n    }\n    .easybtn {\n      background-color: darkgreen;\n      &:hover{\n        cursor: pointer;\n        background-color: $lightcolor;\n        border: 2px solid darkgreen;\n        color: darkgreen;\n      }\n    }\n    .pvpbtn {\n      background-color: $darkcolor;\n      &:hover{\n        cursor: pointer;\n        background-color: $lightcolor;\n        border: 2px solid $darkcolor;\n        color: $darkcolor;\n      }\n    }\n  }\n}\n\n.returnbtn {\n  min-height: 50px;\n  background-color: black;\n  color: whitesmoke;\n  &:hover{\n    cursor: pointer;\n    background-color: $lightcolor;\n    border: 2px solid black;\n    color: black;\n  }\n}\n\n.gg{\n  display: grid;\n  width: 100%;\n  height: 100%;\n  font-size: 3em;\n  place-content: center;\n}\n\n.win_div{\n  display: grid;\n  width: 100%;\n  font-size: 3em;\n  place-content: center;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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



/***/ }),

/***/ "./src/assets/Open_Sans/OpenSans-Italic-VariableFont_wdth,wght.ttf":
/*!*************************************************************************!*\
  !*** ./src/assets/Open_Sans/OpenSans-Italic-VariableFont_wdth,wght.ttf ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f72efa639bb45d29e62f.ttf";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"render": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   layout: () => (/* binding */ layout)
/* harmony export */ });
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic */ "./src/logic.js");



// takes a game 
function layout(game) {
    // clear the page
    document.body.innerHTML = '';
    // only have a spacebard keydown listener if the game is in setup mode
    if (game.status < _logic__WEBPACK_IMPORTED_MODULE_1__.game_status["p1_turn"]) {

        window.onkeydown = (ev) => {
            // if the current game state allows placement, we try to place the ship
            if (ev.keyCode == 13) {
                placeHoverShip(game);
            }
        };
    }

    // creating sections
    const h = document.createElement('div');
    const b = document.createElement('div');
    const f = document.createElement('div');

    buildHeader(h, game);
    buildFooter(f);

    b.classList.add('body');
    const info_sect = document.createElement('div');
    const key = document.createElement('div');
    const dock = document.createElement('div');
    const place_random = document.createElement('button');

    info_sect.classList.add('info');
    place_random.id = 'rp';

    buildKey(key);
    (game.pboard.ship_deck.length != 0) ? setDock(dock, game) : setDock(dock, game, true);
    place_random.textContent = 'PLACE MY SHIPS';
    place_random.onclick = () => {
        game.autoSet();
        if (game.mode == 'easy' || game.mode == 'hard') {
            game.autoSet();
        }
        layout(game);
    }

    info_sect.appendChild(key);
    info_sect.appendChild(dock);
    if (game.status < _logic__WEBPACK_IMPORTED_MODULE_1__.game_status["p1_turn"]) {
        info_sect.appendChild(place_random);
    }

    const board_sect = document.createElement('div');
    buildBoards(game, board_sect);
    // attach event listeners to the boards

    const reset_sect = document.createElement('div');
    reset_sect.classList.add('reset');
    buildResetSection(game, reset_sect);

    b.appendChild(info_sect);
    b.appendChild(board_sect);
    b.appendChild(reset_sect);

    document.body.appendChild(h);
    document.body.appendChild(b);
    document.body.appendChild(f);

    // attach event listeners
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; ++j) {
            attachAttackListener('er' + i + 'c' + j, game);
        }
    }
    // setPHover(game);
}

function buildHeader(h, game) {
    const status = document.createElement('div');
    if (game.mode == 'easy') {
        status.textContent = 'EASY MODE';
    }
    else if (game.mode == 'hard') {
        status.textContent = 'HARD MODE';
    } else {
        status.textContent = game.readable_status(game.status);
    }

    status.classList.add('status');
    h.classList.add('head');

    const title = document.createElement('h1');
    const gh = document.createElement('button');

    title.textContent = 'BATTLESHIP';
    gh.textContent = 'GITHUB'
    gh.onclick = function () {
        open('https://github.com/TannerHornsby7/odin-battleship');
    };

    h.appendChild(status);
    h.appendChild(title);
    h.appendChild(gh);
}

function buildFooter(f) {
    f.classList.add('foot');
    const name = document.createElement('h4');
    name.textContent = '@tannerhornsby7';
    f.appendChild(name);
}

function buildKey(key) {
    key.classList.add('key');
    const hit = document.createElement('h2');
    const miss = document.createElement('h2');
    const sunk = document.createElement('div');
    const hit_desc = document.createElement('p');
    const miss_desc = document.createElement('p');
    const sunk_desc = document.createElement('p');
    const hit_sect = document.createElement('div');
    const miss_sect = document.createElement('div');
    const sunk_sect = document.createElement('div');
    key.classList.add('key');
    hit.classList.add('hit');
    miss.classList.add('miss');
    sunk.classList.add('sunk');
    hit.textContent = 'X';
    miss.textContent = 'X';
    sunk.textContent = '';
    hit_desc.textContent = 'HIT';
    miss_desc.textContent = 'MISS';
    sunk_desc.textContent = 'SUNK';
    hit_sect.appendChild(hit_desc);
    hit_sect.appendChild(hit);
    miss_sect.appendChild(miss_desc);
    miss_sect.appendChild(miss);
    sunk_sect.appendChild(sunk_desc);
    sunk_sect.appendChild(sunk);
    hit_sect.classList.add('key_sect');
    miss_sect.classList.add('key_sect')
    sunk_sect.classList.add('key_sect')
    key.appendChild(hit_sect);
    key.appendChild(miss_sect);
    key.appendChild(sunk_sect);

}

function setDock(dock, game, placed = false) {
    const dock_head = document.createElement('h2');
    const boat_lot = document.createElement('div');
    const boat = document.createElement('div');
    const dock_footer = document.createElement('h5');

    dock.classList.add('dock');
    boat.textContent = '';
    boat.classList.add('boat');

    boat_lot.classList.add('boat_lot');

    let ship_deck = game.pboard.ship_deck.sort();
    dock_head.textContent = 'Place Your Ships';
    dock_footer.textContent = 'Click one of the ships above to select it, press R to rotate it, and press enter to place it!';

    if (placed) {
        boat.classList.add('enemy');
        dock_head.textContent = 'Remaining Enemy Ships:';
        dock_footer.textContent = 'Keep Firing!'
        ship_deck = game.eboard.ships_standing
    }

    for (let i = 0; i < ship_deck.length; i++) {
        let tmp_boat = boat.cloneNode();
        let ship_length = Math.floor(ship_deck[i] / 5 * 100);
        tmp_boat.setAttribute("style", `width:${ship_length}%`);
        tmp_boat.onclick = function (e) {
            let length = Math.floor(parseInt(e.target.style.width
                .slice(0, -1)) / 20);
            let rotation = 0;
            game.pboard.setCurrShip(length);

            window.addEventListener('keydown', (ev) => {
                if (ev.key == 'r') {
                    rotation += 1;
                    rotation %= 4;
                    game.pboard.rotation = rotation;

                    layout(game);
                }
            });
        }
        boat_lot.appendChild(tmp_boat);
    }

    dock.appendChild(dock_head);
    dock.appendChild(boat_lot);
    dock.appendChild(dock_footer);
}

function buildBoards(game, board_sect) {
    board_sect.classList.add('game');
    const fullboard = document.createElement('div');
    fullboard.classList.add('fullboard');
    const top_board = document.createElement('div');
    const bot_board = document.createElement('div');
    setBoard(top_board, game.eboard, true);
    setBoard(bot_board, game.pboard);
    // add attack listeners to each cell in the top board
    fullboard.appendChild(top_board);
    fullboard.appendChild(bot_board);
    board_sect.appendChild(fullboard);
}

function setBoard(b_ele, board, enemy = false) {
    b_ele.classList.add('board');
    const emptyCell = document.createElement('div');
    const hitCell = document.createElement('div');
    const missCell = document.createElement('div');
    const sunkCell = document.createElement('div');
    const yoursCell = document.createElement('div');
    hitCell.classList.add('hit', 'cell');
    missCell.classList.add('miss', 'cell');
    sunkCell.classList.add('sunk', 'cell');
    emptyCell.classList.add('empty', 'cell');
    yoursCell.classList.add('yours', 'cell');

    if (enemy) {
        emptyCell.classList.add('ecell');
        hitCell.classList.add('ecell');
        missCell.classList.add('ecell');
        sunkCell.classList.add('ecell');
    } else {
        emptyCell.classList.add('pcell');
        hitCell.classList.add('pcell');
        missCell.classList.add('pcell');
        sunkCell.classList.add('pcell');
        yoursCell.classList.add('pcell');
    }

    emptyCell.textContent = '';

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            let tmp;
            if (board.board[i][j] == 0) {
                tmp = emptyCell.cloneNode();
            }
            else if (board.board[i][j] == 1) {
                tmp = missCell.cloneNode();
                const x = document.createElement('p');
                x.textContent = 'X';
                tmp.appendChild(x);
            }
            else if (board.board[i][j].isSunk()) {
                tmp = sunkCell.cloneNode();
            }
            else if (board.hit_list.includes(JSON.stringify([i, j]))) {
                tmp = hitCell.cloneNode();
                const x = document.createElement('p');
                x.textContent = 'X';
                tmp.appendChild(x);
            }
            else if (!enemy) {
                tmp = yoursCell.cloneNode();
            }
            else {
                tmp = emptyCell.cloneNode();
            }

            if (enemy) {
                tmp.id = 'e'
            } else {
                tmp.id = 'p'
            }
            tmp.id += 'r' + i + 'c' + j;

            b_ele.appendChild(tmp);
        }
    }
}

function attachAttackListener(cell_id, game) {
    let cell = document.getElementById(cell_id);
    cell.addEventListener('click', () => {
        if (game.status < _logic__WEBPACK_IMPORTED_MODULE_1__.game_status["p1_turn"]) {
            alert('Please place your ships first!');
            return;
        }
        let i = parseInt(cell.id.charAt(2));
        let j = parseInt(cell.id.charAt(4));
        let att = game.attack([i, j]);
        if (att == false) {
            alert('Invalid Attack!');
            return;
        }
        // if the game is over, we should display the win screen
        if (game.status == _logic__WEBPACK_IMPORTED_MODULE_1__.game_status.p1_win || game.status == _logic__WEBPACK_IMPORTED_MODULE_1__.game_status.p2_win) {
            winCondition(game);
            return;
        }
        // if its ai mode, we should autoattack the player
        if (game.mode == 'easy' || game.mode == 'hard') {
            console.log(game.aiAttack());
            // if the game is over, we should display the win screen
            if (game.status == _logic__WEBPACK_IMPORTED_MODULE_1__.game_status.p1_win || game.status == _logic__WEBPACK_IMPORTED_MODULE_1__.game_status.p2_win) {
                winCondition(game);
                return;
            }
            layout(game);
            return;
        }

        // update the cell based on the attack
        if (att == 'miss') {
            cell.classList.add('miss');
            const x = document.createElement('p');
            x.textContent = 'X';
            cell.appendChild(x);
        }
        else if (att == 'sunk') {
            // you sunk ____ ship!
            cell.classList.add('sunk');
        }
        else {
            cell.classList.add('hit');
            const x = document.createElement('p');
            x.textContent = 'X';
            cell.appendChild(x);
        }
        document.body.innerHTML = '';
        // display the pass to player 2 screen
        const pass_screen = document.createElement('div');
        pass_screen.classList.add('pass');
        pass_screen.classList.add('gg')

        let player = (game.status == _logic__WEBPACK_IMPORTED_MODULE_1__.game_status.p1_turn) ? game.p1_name : game.p2_name;

        const pass = document.createElement('h2');
        pass.textContent = 'PASS TO ' + player;
        pass_screen.appendChild(pass);
        document.body.appendChild(pass_screen);
        setTimeout(function () {

            layout(game);
        }, 3000);
    });
}

function winCondition(game) {
    document.body.innerHTML = '';
    const end_screen = document.createElement('div');
    // display which player won
    const win_div = document.createElement('div');
    const win = document.createElement('h1');
    win_div.classList.add('win_div');
    win.textContent = (game.status == _logic__WEBPACK_IMPORTED_MODULE_1__.game_status.p1_win ? game.p1_name : game.p2_name) + ' WINS!';
    // add a section that says how many ships the enemy had left
    const ships_left = document.createElement('h3');
    ships_left.textContent = 'in only ' + Math.floor(game.turns / 2) + ' turns!';
    // append header
    const header = document.createElement('div');
    buildHeader(header, game);
    end_screen.appendChild(header);
    game.reset();
    // add a button to return
    const return_btn = document.createElement('button');
    return_btn.textContent = 'RETURN';
    return_btn.classList.add('return');
    return_btn.onclick = () => {
        layout(game);
    }
    return_btn.classList.add('returnbtn');
    win_div.appendChild(win);
    win_div.appendChild(ships_left);
    win_div.appendChild(return_btn);
    end_screen.appendChild(win_div);
    document.body.appendChild(end_screen);


}

function buildResetSection(game, reset_sect) {
    // pvp mode btn
    const pvp = document.createElement('button');
    pvp.textContent = 'PVP MODE';
    pvp.classList.add('pvpbtn');
    reset_sect.appendChild(pvp);
    pvp.onclick = () => {
        game.reset();
        game.mode = 'pvp';
        game.p1_name = prompt('Player 1, enter your name:').toUpperCase();
        game.p2_name = prompt('Player 2, enter your name:').toUpperCase();
        layout(game);
    }

    // easy mode btn
    const easy = document.createElement('button');
    easy.textContent = 'EASY MODE';
    easy.classList.add('easybtn');
    reset_sect.appendChild(easy);
    easy.onclick = () => {
        game.reset();
        game.mode = 'easy';
        layout(game);
    }
    // hard mode btn
    const hard = document.createElement('button');
    hard.textContent = 'HARD MODE';
    hard.classList.add('hardbtn');
    reset_sect.appendChild(hard);
    hard.onclick = () => {
        game.reset();
        game.mode = 'hard';
        layout(game);
    }

    const reset = document.createElement('button');
    reset.textContent = 'RESET';
    reset.classList.add('resetbtn');
    reset_sect.appendChild(reset);
    reset.onclick = () => {
        game.reset();
        layout(game);
    }
}

// ==========================To Do==========================
// redo logic.test.js
// fix hover functionality
// clean up logic.js
// write out readme with logic for probabilistic (hard) mode
// ---evaluate using bayesian search algorithm
// ---evaluate using greedy search algorithm
// get the numbers on each approach with an automated test
// ==========================Future Features==========================
// connect to backend with sign-in, leaderboard, and stats
// add network pvp mode
// add ai mode
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNEJBQTRCLGlCQUFpQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5QkFBeUI7QUFDekI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixRQUFRO0FBQ3BDLGdDQUFnQyxRQUFRO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyx1QkFBdUI7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLE9BQU87QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsT0FBTztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5bUJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBc0I7QUFDZ0I7O0FBRXRDO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsK0NBQVc7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0IsK0NBQVc7QUFDakM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsUUFBUTtBQUM1Qix3QkFBd0IsUUFBUTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixzQkFBc0I7QUFDMUM7QUFDQTtBQUNBLGdEQUFnRCxZQUFZO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsb0JBQW9CLFFBQVE7QUFDNUIsd0JBQXdCLFFBQVE7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLCtDQUFXO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsK0NBQVcsMEJBQTBCLCtDQUFXO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLCtDQUFXLDBCQUEwQiwrQ0FBVztBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDLCtDQUFXOztBQUVoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQywrQ0FBVztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvbG9naWMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvcmVuZGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJhc3NldHMvT3Blbl9TYW5zL09wZW5TYW5zLUl0YWxpYy1WYXJpYWJsZUZvbnRfd2R0aCx3Z2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIEN1c3RvbSBGb250ICovXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIiksIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBmb250LXdlaWdodDogMTAwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIjtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG51bCxcXG5saSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuYnV0dG9uLFxcbmlucHV0IHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDlmciAxZnI7XFxufVxcblxcbi5oZWFkIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDZmciAxZnI7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IGl2b3J5O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwLCAwLCAxMDIpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcXG4gIGhlaWdodDogMTAwcHg7XFxufVxcbi5oZWFkIC5zdGF0dXMge1xcbiAgZm9udC1zaXplOiBtZWRpdW07XFxuICBwYWRkaW5nOiAxNXB4O1xcbn1cXG4uaGVhZCBidXR0b24ge1xcbiAgZm9udC1zaXplOiAwLjVlbTtcXG4gIGhlaWdodDogNDBweDtcXG4gIHdpZHRoOiA2MCU7XFxuICBjb2xvcjogcmdiKDIwLCAwLCAxMDIpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaXZvcnk7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDJweCByZ2IoMjAsIDAsIDEwMik7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG4uaGVhZCBidXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6IHJnYigyMCwgMCwgMTAyKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGl2b3J5O1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCAycHggcmdiKDIwLCAwLCAxMDIpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcXG59XFxuXFxuLmZvb3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig1NiwgNTUsIDU1KTtcXG4gIGNvbG9yOiBpdm9yeTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmJvZHkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmciAxZnI7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5ib2R5IC5pbmZvIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnI7XFxufVxcbi5ib2R5IC5pbmZvIC5ib2F0IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmJvZHkgLmluZm8gLmtleSB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyMCwgMCwgMTAyKTtcXG4gIHBhZGRpbmc6IDJweCAxMHB4IDVweCAxMHB4O1xcbiAgd2lkdGg6IDUwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uYm9keSAuaW5mbyAua2V5IC5rZXlfc2VjdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdhcDogMTVweDtcXG59XFxuLmJvZHkgLmluZm8gLmtleSAuc3VuayB7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogMjVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTQsIDksIDkpO1xcbiAgYm9yZGVyOiAycHggc29saWQgaXZvcnk7XFxufVxcbi5ib2R5IC5pbmZvIC5rZXkgaDIge1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbn1cXG4uYm9keSAuaW5mbyAua2V5IC5oaXQge1xcbiAgY29sb3I6IHJnYigxNTQsIDksIDkpO1xcbn1cXG4uYm9keSAuaW5mbyAuZG9jayB7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIHdpZHRoOiA2MCU7XFxufVxcbi5ib2R5IC5pbmZvIC5kb2NrIGgyLFxcbi5ib2R5IC5pbmZvIC5kb2NrIGg1IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmJvZHkgLmluZm8gLmRvY2sgaDIge1xcbiAgY29sb3I6IHJnYigyMCwgMCwgMTAyKTtcXG59XFxuLmJvZHkgLmluZm8gLmRvY2sgLmJvYXRfbG90IHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyMCwgMCwgMTAyKTtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA1cHg7XFxufVxcbi5ib2R5IC5pbmZvIC5kb2NrIC5ib2F0IHtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG4uYm9keSAuaW5mbyAjcnAge1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICB3aWR0aDogODAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwLCAwLCAxMDIpO1xcbiAgY29sb3I6IGl2b3J5O1xcbn1cXG4uYm9keSAuaW5mbyAjcnA6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaXZvcnk7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjAsIDAsIDEwMik7XFxuICBjb2xvcjogcmdiKDIwLCAwLCAxMDIpO1xcbn1cXG4uYm9keSAuZ2FtZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxuLmJvZHkgLmdhbWUgLmZ1bGxib2FyZCB7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiA5NSU7XFxuICB3aWR0aDogNzUlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwLCAwLCAxMDIpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gIHJvdy1nYXA6IDVweDtcXG59XFxuLmJvZHkgLmdhbWUgLmJvYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIHdpZHRoOiA5MCU7XFxuICBoZWlnaHQ6IDkwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG4uYm9keSAuZ2FtZSAuY2VsbCB7XFxuICBtYXJnaW46IDFweDtcXG4gIHBhZGRpbmc6IG5vbmU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4uYm9keSAuZ2FtZSBwIHtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIG1hcmdpbjogMHB4O1xcbiAgYm9yZGVyOiAwcHg7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IC01MHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uYm9keSAuZ2FtZSAuZW1wdHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaXZvcnk7XFxufVxcbi5ib2R5IC5nYW1lIC5lbXB0eSAuaG92ZXJpbmcge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG59XFxuLmJvZHkgLmdhbWUgLm1pc3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaXZvcnk7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcbi5ib2R5IC5nYW1lIC5zdW5rIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTQsIDksIDkpO1xcbn1cXG4uYm9keSAuZ2FtZSAueW91cnMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcbi5ib2R5IC5nYW1lIC55b3Vyczpob3ZlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaXZvcnk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5ib2R5IC5nYW1lIC5oaXQge1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiByZ2IoMTU0LCA5LCA5KTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcbi5ib2R5IC5nYW1lIC5ob3ZlcmluZyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNsYXRlZ3JheTtcXG59XFxuLmJvZHkgLmdhbWUgLmhvdmVyaW5nOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmJvZHkgLmdhbWUgLmVjZWxsOmhvdmVyIHtcXG4gIGN1cnNvcjogY3Jvc3NoYWlyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG4uYm9keSAucmVzZXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmJvZHkgLnJlc2V0IGJ1dHRvbiB7XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiA4MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU0LCA5LCA5KTtcXG4gIGNvbG9yOiBpdm9yeTtcXG59XFxuLmJvZHkgLnJlc2V0IGJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpdm9yeTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxNTQsIDksIDkpO1xcbiAgY29sb3I6IHJnYigyMCwgMCwgMTAyKTtcXG59XFxuLmJvZHkgLnJlc2V0IC5oYXJkYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG4uYm9keSAucmVzZXQgLmhhcmRidG46aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaXZvcnk7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuLmJvZHkgLnJlc2V0IC5lYXN5YnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmVlbjtcXG59XFxuLmJvZHkgLnJlc2V0IC5lYXN5YnRuOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGl2b3J5O1xcbiAgYm9yZGVyOiAycHggc29saWQgZGFya2dyZWVuO1xcbiAgY29sb3I6IGRhcmtncmVlbjtcXG59XFxuLmJvZHkgLnJlc2V0IC5wdnBidG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwLCAwLCAxMDIpO1xcbn1cXG4uYm9keSAucmVzZXQgLnB2cGJ0bjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpdm9yeTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyMCwgMCwgMTAyKTtcXG4gIGNvbG9yOiByZ2IoMjAsIDAsIDEwMik7XFxufVxcblxcbi5yZXR1cm5idG4ge1xcbiAgbWluLWhlaWdodDogNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxufVxcbi5yZXR1cm5idG46aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaXZvcnk7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLmdnIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogM2VtO1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ud2luX2RpdiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDNlbTtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL19mb3JtYXR0aW5nLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGdCQUFBO0FBQ0E7RUFDRSx3QkFBQTtFQUNBLHFGQUFBO0VBRUEsaUJBQUE7RUFDQSxrQkFBQTtBQ0FGO0FESUE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7QUNGRjs7QURLQTs7RUFFRSxXQUFBO0VBQ0EsWUFBQTtBQ0ZGOztBREtBOztFQUVFLGdCQUFBO0FDRkY7O0FES0E7RUFDRSxxQkFBQTtBQ0ZGOztBREtBOztFQUVFLFlBQUE7RUFDQSxhQUFBO0FDRkY7O0FBYkE7RUFDRSxhQUFBO0VBQ0EsK0JBQUE7QUFn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QUE7RUFDQSx1QkFsT0s7RUFtT0wsZ0NBQUE7RUFDQSxzQkFuT0k7QUFtUFo7QUFiSTtFQUNFLHVCQUFBO0FBZU47QUFkTTtFQUNFLGVBQUE7RUFDQSx1QkEzT0s7RUE0T0wsdUJBQUE7RUFDQSxZQUFBO0FBZ0JSO0FBYkk7RUFDRSwyQkFBQTtBQWVOO0FBZE07RUFDRSxlQUFBO0VBQ0EsdUJBcFBLO0VBcVBMLDJCQUFBO0VBQ0EsZ0JBQUE7QUFnQlI7QUFiSTtFQUNFLGlDQXpQTTtBQXdRWjtBQWRNO0VBQ0UsZUFBQTtFQUNBLHVCQTdQSztFQThQTCxpQ0FBQTtFQUNBLHNCQTlQSTtBQThRWjs7QUFWQTtFQUNFLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQWFGO0FBWkU7RUFDRSxlQUFBO0VBQ0EsdUJBM1FTO0VBNFFULHVCQUFBO0VBQ0EsWUFBQTtBQWNKOztBQVZBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FBYUY7O0FBVkE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQWFGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIEN1c3RvbSBGb250ICovXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCI7XFxuICBzcmM6IHVybChcXFwiYXNzZXRzL09wZW5fU2Fucy9PcGVuU2Fucy1JdGFsaWMtVmFyaWFibGVGb250X3dkdGgsd2dodC50dGZcXFwiKSxcXG4gICAgdXJsKFxcXCJhc3NldHMvT3Blbl9TYW5zL09wZW5TYW5zLUl0YWxpYy1WYXJpYWJsZUZvbnRfd2R0aCx3Z2h0LnR0ZlxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDEwMDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbi8vIHNldHRpbmcgYmFzaWMgZWxlbWVudCBwcm9wZXJ0aWVzXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIjtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG51bCxcXG5saSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuYnV0dG9uLFxcbmlucHV0IHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblwiLFwiQHVzZSBcXFwiZm9ybWF0dGluZ1xcXCI7XFxuXFxuLy8gdGhlbWUgY29sb3JzXFxuJGxpZ2h0Y29sb3I6IGl2b3J5O1xcbiRkYXJrY29sb3I6IHJnYigyMCwgMCwgMTAyKTtcXG5cXG4vLyBzZXR0aW5nIHRoZW1lXFxuQG1peGluIHRoZW1lKCRkYXJrOiB0cnVlKSB7XFxuICBAaWYgKCRkYXJrKSB7XFxuICAgIGNvbG9yOiAkbGlnaHRjb2xvcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGRhcmtjb2xvcjtcXG4gICAgLy8gYm94LXNoYWRvdzogMnB4IDJweCAycHggJGxpZ2h0Y29sb3I7XFxuICB9IEBlbHNlIHtcXG4gICAgY29sb3I6ICRkYXJrY29sb3I7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodGNvbG9yO1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDJweCAkZGFya2NvbG9yO1xcbiAgfVxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgOWZyIDFmcjtcXG59XFxuXFxuLmhlYWR7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA2ZnIgMWZyO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIEBpbmNsdWRlIHRoZW1lO1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIC5zdGF0dXMge1xcbiAgICBmb250LXNpemU6IG1lZGl1bTtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gIH1cXG4gIGJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogLjVlbTtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBAaW5jbHVkZSB0aGVtZShmYWxzZSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICAmOmhvdmVyIHtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgQGluY2x1ZGUgdGhlbWUoZmFsc2UpO1xcbiAgICB9XFxuICB9XFxufVxcblxcbi5mb290e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig1NiwgNTUsIDU1KTtcXG4gIGNvbG9yOiAkbGlnaHRjb2xvcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmJvZHl7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDFmcjtcXG4gIGhlaWdodDogMTAwJTtcXG5cXG4gIC5pbmZvIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyO1xcbiAgICAuYm9hdCB7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxuICAgIC5rZXl7XFxuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRkYXJrY29sb3I7XFxuICAgICAgcGFkZGluZzogMnB4IDEwcHggNXB4IDEwcHg7XFxuICAgICAgd2lkdGg6IDUwJTtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgLmtleV9zZWN0IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgZ2FwOiAxNXB4O1xcbiAgICAgIH1cXG4gICAgICAuc3VuayB7XFxuICAgICAgICB3aWR0aDogNTBweDtcXG4gICAgICAgIGhlaWdodDogMjVweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTQsIDksIDkpO1xcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgJGxpZ2h0Y29sb3I7XFxuXFxuICAgICAgfVxcblxcbiAgICAgIGgye1xcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICAgIH1cXG4gICAgICAuaGl0e1xcbiAgICAgICAgY29sb3I6IHJnYigxNTQsIDksIDkpO1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICAuZG9ja3tcXG4gICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgICBoMixcXG4gICAgICBoNSB7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgfVxcbiAgICAgIGgyIHtcXG4gICAgICAgIGNvbG9yOnJnYigyMCwgMCwgMTAyKTtcXG4gICAgICB9XFxuICAgICAgd2lkdGg6IDYwJTtcXG4gICAgICAuYm9hdF9sb3R7XFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkZGFya2NvbG9yO1xcbiAgICAgICAgcGFkZGluZzogOHB4O1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBnYXA6IDVweDtcXG4gICAgICB9XFxuICAgICAgLmJvYXR7XFxuICAgICAgICBoZWlnaHQ6IDMwcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgI3JwIHtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgICAgIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XFxuICAgICAgaGVpZ2h0OiA1MHB4O1xcbiAgICAgIHdpZHRoOiA4MCU7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRhcmtjb2xvcjtcXG4gICAgICBjb2xvcjogJGxpZ2h0Y29sb3I7XFxuICAgICAgJjpob3ZlcntcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodGNvbG9yO1xcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgJGRhcmtjb2xvcjtcXG4gICAgICAgIGNvbG9yOiAkZGFya2NvbG9yO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcblxcbiAgLmdhbWV7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICAgIC5mdWxsYm9hcmQge1xcbiAgICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgaGVpZ2h0OiA5NSU7XFxuICAgICAgd2lkdGg6IDc1JTtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFya2NvbG9yO1xcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgICAgIHJvdy1nYXA6IDVweDtcXG4gICAgfVxcbiAgICAuYm9hcmR7XFxuICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgICB3aWR0aDo5MCU7XFxuICAgICAgaGVpZ2h0OjkwJTtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgICBcXG4gICAgfVxcbiAgICAuY2VsbCB7XFxuICAgICAgbWFyZ2luOiAxcHg7XFxuICAgICAgcGFkZGluZzogbm9uZTtcXG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB9XFxuICAgIHB7XFxuICAgICAgcGFkZGluZzogMHB4O1xcbiAgICAgIG1hcmdpbjogMHB4O1xcbiAgICAgIGJvcmRlcjogMHB4O1xcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAtNTBweDtcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG4gICAgLmVtcHR5IHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHRjb2xvcjtcXG4gICAgICAuaG92ZXJpbmcge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG4gICAgICB9XFxuICAgIH1cXG4gIFxcbiAgICAubWlzcyB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0Y29sb3I7XFxuICAgICAgY29sb3I6IGJsYWNrO1xcbiAgICB9XFxuICAgIC5zdW5rIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU0LCA5LCA5KTtcXG4gICAgfVxcbiAgICAueW91cnMge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICAgICY6aG92ZXIge1xcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodGNvbG9yO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgICAuaGl0IHtcXG4gICAgICBmb250LXNpemU6IDFlbTtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgICBjb2xvcjogcmdiKDE1NCwgOSwgOSk7XFxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgfVxcbiAgICAuaG92ZXJpbmcge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2xhdGVncmF5O1xcbiAgICAgICY6aG92ZXJ7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgfVxcbiAgICB9XFxuICAgIC5lY2VsbCB7XFxuICAgICAgJjpob3ZlciB7XFxuICAgICAgICBjdXJzb3I6IGNyb3NzaGFpcjtcXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG4gIFxcbiAgLnJlc2V0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYnV0dG9uIHtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgICAgIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XFxuICAgICAgaGVpZ2h0OiA1MHB4O1xcbiAgICAgIHdpZHRoOiA4MCU7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1NCwgOSwgOSk7XFxuICAgICAgY29sb3I6ICRsaWdodGNvbG9yO1xcbiAgICAgICY6aG92ZXJ7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHRjb2xvcjtcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxNTQsIDksIDkpO1xcbiAgICAgICAgY29sb3I6ICRkYXJrY29sb3I7XFxuICAgICAgfVxcbiAgICB9XFxuICAgIC5oYXJkYnRuIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgICAmOmhvdmVye1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0Y29sb3I7XFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgICAgIGNvbG9yOiBibGFjaztcXG4gICAgICB9XFxuICAgIH1cXG4gICAgLmVhc3lidG4ge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmVlbjtcXG4gICAgICAmOmhvdmVye1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0Y29sb3I7XFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBkYXJrZ3JlZW47XFxuICAgICAgICBjb2xvcjogZGFya2dyZWVuO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgICAucHZwYnRuIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFya2NvbG9yO1xcbiAgICAgICY6aG92ZXJ7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHRjb2xvcjtcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRkYXJrY29sb3I7XFxuICAgICAgICBjb2xvcjogJGRhcmtjb2xvcjtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLnJldHVybmJ0biB7XFxuICBtaW4taGVpZ2h0OiA1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gICY6aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0Y29sb3I7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICB9XFxufVxcblxcbi5nZ3tcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogM2VtO1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ud2luX2RpdntcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogM2VtO1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIGNyZWF0ZXMgYSBzaGlwIG9mIGEgc3BlY2lmaWVkIGxlbmd0aFxuZnVuY3Rpb24gU2hpcChsZW5ndGgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBcImxlbmd0aFwiOiBsZW5ndGgsXG4gICAgICAgIFwiaGl0c1wiOiAwLFxuICAgICAgICBoaXQoKSB7XG4gICAgICAgICAgICB0aGlzLmhpdHMgKz0gMTtcbiAgICAgICAgfSxcbiAgICAgICAgaXNTdW5rKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGl0cyA+PSB0aGlzLmxlbmd0aFxuICAgICAgICB9XG4gICAgfVxufVxuXG5sZXQgcnVuX2NudCA9IDAgXG5jb25zdCBUT1RBTF9TSElQUyA9IFs1LCA0LCAzLCAzLCAyXVxuXG4vLyBjcmVhdGVzIGEgYm9hcmQgd2hpY2ggcGxhY2VzIHNoaXBzIGFuZCByZWNpZXZlcyBhdHRhY2tzXG5mdW5jdGlvbiBCb2FyZCgpIHsgLy8gMTB4MTAgYm9hcmQgIyB4IGxldHRlcnNcbiAgICByZXR1cm4ge1xuICAgICAgICBcInNoaXBfZGVja1wiOiBbLi4uVE9UQUxfU0hJUFNdLFxuICAgICAgICBcInNoaXBzX3N0YW5kaW5nXCI6IFsuLi5UT1RBTF9TSElQU10sXG4gICAgICAgIFwiY3Vycl9zaGlwXCI6IHVuZGVmaW5lZCxcbiAgICAgICAgXCJyb3RhdGlvblwiOiAwLFxuICAgICAgICBcImhpdF9uZWlnaGJvcnNcIjogW10sXG4gICAgICAgIFwiaGl0X2xpc3RcIjogW10sXG4gICAgICAgIFwiYm9hcmRcIjogW1xuICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgICBdLFxuICAgICAgICBzZXRDdXJyU2hpcChsZW4gPSB0aGlzLnNoaXBfZGVja1swXSkge1xuICAgICAgICAgICAgdGhpcy5jdXJyX3NoaXAgPSBTaGlwKGxlbik7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gZGV0ZXJtaW5lcyB2YWxpZGl0eSBvZiBsb2NhdGlvblxuICAgICAgICB2YWxpZExvYyhsb2MsIHBsYWNlID0gZmFsc2UpIHtcbiAgICAgICAgICAgIC8vIGlmIHRoZSBsb2NhdGlvbiBpcyBpbiB0aGUgaGl0IGxpc3QsIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgaWYgKHRoaXMuaGl0X2xpc3QuaW5jbHVkZXMoSlNPTi5zdHJpbmdpZnkobG9jKSkpIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygneW91IGhhdmUgYWxyZWFkeSBhdHRhY2tlZCB0aGlzIGxvY2F0aW9uICdcbiAgICAgICAgICAgICAgICAvLyAgICAgKyBsb2NbMF0gKyAnICwgJyArIGxvY1sxXSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgcm93ID0gbG9jWzBdXG4gICAgICAgICAgICBjb25zdCBjb2wgPSBsb2NbMV1cbiAgICAgICAgICAgIGlmICghKDAgPD0gcm93ICYmIHJvdyA8PSA5KSkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdpbnZhbGlkIHkgbG9jYXRpb246ICcgKyByb3cpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghKDAgPD0gY29sICYmIGNvbCA8PSA5KSkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdpbnZhbGlkIHggbG9jYXRpb246ICcgKyBjb2wpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwbGFjZSA9PSB0cnVlICYmIHRoaXMuYm9hcmRbcm93XVtjb2xdICE9IDApIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygndGhlcmUgaXMgYWxyZWFkeSBhIHNoaXAgaGVyZScpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkW3Jvd11bY29sXSA9PSAxKSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3lvdSBoYXZlIGFscmVhZHkgYXR0YWNrZWQgdGhpcyBsb2NhdGlvbiAnXG4gICAgICAgICAgICAgICAgLy8gICAgICsgcm93ICsgJyAsICcgKyBjb2wpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkW3Jvd11bY29sXSAhPSAwICYmIHRoaXMuYm9hcmRbcm93XVtjb2xdLmlzU3VuaygpKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3RoaXMgc2hpcCBpcyBzdW5rIScpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vIHBsYWNlcyBhIHNoaXAgZ2l2ZW4gYSBsb2MgYW5kIG9wdGlvbmFsIGRpcmVjdGlvbiBbMFIsMUQsMkwsM1VdXG4gICAgICAgIHBsYWNlU2hpcChzaGlwLCBsb2MsIGRpcmVjdGlvbiA9IHRoaXMucm90YXRpb24sIGNoZWNrID0gZmFsc2UpIHtcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IGxvY1swXVxuICAgICAgICAgICAgY29uc3QgY29sID0gbG9jWzFdXG4gICAgICAgICAgICBsZXQgc2hpcF9sb2NzID0gW107XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCB0bXBfbG9jID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTogLy8gZG93blxuICAgICAgICAgICAgICAgICAgICAgICAgdG1wX2xvYyA9IFtyb3cgLSBpLCBjb2xdO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjogLy8gbGVmdFxuICAgICAgICAgICAgICAgICAgICAgICAgdG1wX2xvYyA9IFtyb3csIGNvbCAtIGldO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzogLy8gdXBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRtcF9sb2MgPSBbcm93ICsgaSwgY29sXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiAvLyByaWdodFxuICAgICAgICAgICAgICAgICAgICAgICAgdG1wX2xvYyA9IFtyb3csIGNvbCArIGldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMudmFsaWRMb2ModG1wX2xvYywgdHJ1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzaGlwX2xvY3MucHVzaCh0bXBfbG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNoZWNrKSB7IC8vIGlmIGl0cyBqdXN0IGEgY2hlY2ssIG5vdCBhIHBsYWNlbWVudCwgd2UgcmV0dXJuIHRoZSBzcG90c1xuICAgICAgICAgICAgICAgIHJldHVybiBzaGlwX2xvY3M7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNoaXBfbG9jcy5mb3JFYWNoKChzZWcpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3NlZ1swXV1bc2VnWzFdXSA9IHNoaXA7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vIHJldHVybnMgJ3NpbmsnLCAnaGl0JywgJ21pc3MnLCBvciAnaW52YWxpZFxuICAgICAgICByZWNpZXZlQXR0YWNrKGxvYykge1xuICAgICAgICAgICAgY29uc3Qgcm93ID0gbG9jWzBdXG4gICAgICAgICAgICBjb25zdCBjb2wgPSBsb2NbMV1cbiAgICAgICAgICAgIC8vIGNoZWNrIHRoYXQgdGhlIHByb3ZpZGVkIGhpdCBpcyB2YWxpZFxuICAgICAgICAgICAgaWYgKCF0aGlzLnZhbGlkTG9jKGxvYykpIHJldHVybiAwO1xuXG4gICAgICAgICAgICAvLyBpZiBpdHMgYSBtaXNzLCB1cGRhdGUgdGhlIGJvYXJkIGFuZCByZXR1cm4gbWlzc1xuICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRbcm93XVtjb2xdID09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3Jvd11bY29sXSA9IDE7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdtaXNzJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5ib2FyZFtyb3ddW2NvbF0uaGl0KCk7XG4gICAgICAgICAgICB0aGlzLmhpdF9saXN0LnB1c2goSlNPTi5zdHJpbmdpZnkobG9jKSk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkW3Jvd11bY29sXS5pc1N1bmsoKSkge1xuICAgICAgICAgICAgICAgIGxldCBpZHggPSB0aGlzLnNoaXBzX3N0YW5kaW5nLmZpbmRJbmRleChcbiAgICAgICAgICAgICAgICAgICAgKHZhbCkgPT4gdmFsID09IHRoaXMuYm9hcmRbcm93XVtjb2xdLmxlbmd0aFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgdGhpcy5zaGlwc19zdGFuZGluZy5zcGxpY2UoaWR4LCAxKTtcblxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5zaGlwc19zdGFuZGluZy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9oaXQgc2luayBhbmQgZ2FtZSB3aW5uZXIhXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA2OTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyByZW1vdmUgYWxsIHRoZSBlbGVtZW50cyBmcm9tIHRoZSBoaXQgbGlzdCB0aGF0IGFyZSBzdW5rXG4gICAgICAgICAgICAgICAgY29uc3Qgb2xkX2hpdF9saXN0ID0gWy4uLnRoaXMuaGl0X2xpc3RdO1xuICAgICAgICAgICAgICAgIHRoaXMuaGl0X2xpc3QgPSB0aGlzLmhpdF9saXN0LmZpbHRlcihcbiAgICAgICAgICAgICAgICAgICAgKHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm93ID0gSlNPTi5wYXJzZSh2YWwpWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29sID0gSlNPTi5wYXJzZSh2YWwpWzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICEodGhpcy5ib2FyZFtyb3ddW2NvbF0uaXNTdW5rKCkpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1cGRhdGVkIGhpdCBsaXN0IGZyb20gJywgb2xkX2hpdF9saXN0LCAnIHRvICcsIHRoaXMuaGl0X2xpc3QpO1xuICAgICAgICAgICAgICAgIHJldHVybiAnc3Vuayc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vaGl0IG5vIHNpbmtcbiAgICAgICAgICAgIHJldHVybiAnaGl0JztcbiAgICAgICAgfSxcbiAgICAgICAgLy8gdG9wIHBpdm90IGdpdmVzIHRoZSBiZXN0IGxvY2F0aW9uIHRvIGF0dGFjayBnaXZlbiB3ZSBvbmx5IGhhdmUgb25lIGhpdCB0byBwaXZvdCBmcm9tXG4gICAgICAgIHRvcFBpdm90KGxvYykge1xuICAgICAgICAgICAgLy8gd2UgbmVlZCB0byBjaGVjayB0aGUgNCBsb2NhdGlvbnMgYXJvdW5kIHRoZSBsb2MgYW5kIHNlZSB3aGljaCBvbmUgaGFzIHRoZSBtb3N0XG4gICAgICAgICAgICAvLyB1bnNlZW4gbG9jYXRpb25zXG4gICAgICAgICAgICBsZXQgZGlyZWN0aW9ucyA9IHRoaXMuc3RyZW5ndGhTb3J0ZWREaXJlY3Rpb25zKGxvYyk7XG4gICAgICAgICAgICBsZXQgdG9wX2RpciA9IGRpcmVjdGlvbnNbMF1bMF07XG4gICAgICAgICAgICBsZXQgdG9wX2xvYyA9IGxvYztcbiAgICAgICAgICAgIHN3aXRjaCAodG9wX2Rpcikge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICAgICAgICAgICAgICB0b3BfbG9jWzBdICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgICAgICAgICAgICAgdG9wX2xvY1swXSAtPSAxO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdkb3duJzpcbiAgICAgICAgICAgICAgICAgICAgdG9wX2xvY1sxXSArPSAxO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICd1cCc6XG4gICAgICAgICAgICAgICAgICAgIHRvcF9sb2NbMV0gLT0gMTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2ludmFsaWQgZGlyZWN0aW9uOiAnICsgdG9wX2Rpcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdG9wX2xvYztcbiAgICAgICAgfSxcbiAgICAgICAgLy8gYWRqYWNlbnRzIHRha2VzIGEgbG9jYXRpb24gYW5kIHJldHVybnMgYW4gb3JkZXJlZCBsaXN0IG9mIGRpcmVjdGlvbnNcbiAgICAgICAgLy8gZnJvbSB0aGUgbG9jYXRpb24gaW4gcXVlc3Rpb24uIEl0IGlzIG9yZGVyZWQgYnkgdGhlIG51bWJlciB1bnNlZW5cbiAgICAgICAgLy8gbG9jYXRpb25zIGZyb20gdGhlIGxvY2F0aW9uIGluIHRoYXQgZGlyZWN0aW9uLlxuICAgICAgICAvLyBUaGUgZmlyc3QgZWxlbWVudCBpbiB0aGUgbGlzdCBpcyB0aGUgZGlyZWN0aW9uIHdpdGggbG9uZ2VzdCBydW5cbiAgICAgICAgLy8gaW4gaXQncyBkaXJlY3Rpb24uIFRoZSBzZWNvbmQgZWxlbWVudCBpbiB0aGUgbGlzdCBpcyB0aGUgbG9jYXRpb24gd2l0aCB0aGVcbiAgICAgICAgc3RyZW5ndGhTb3J0ZWREaXJlY3Rpb25zKGxvYykge1xuICAgICAgICAgICAgbGV0IG1haW50ZW5lbmNlX2xvYyA9IFsuLi5sb2NdO1xuICAgICAgICAgICAgbGV0IHJlcyA9IFtdO1xuICAgICAgICAgICAgbGV0IGRpcmVjdGlvbnMgPSB0aGlzLnZhbGlkRGlyZWN0aW9ucyhsb2MpO1xuICAgICAgICAgICAgZGlyZWN0aW9ucy5mb3JFYWNoKChkaXIpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdG1wX2xvYyA9IFsuLi5sb2NdO1xuICAgICAgICAgICAgICAgIGxldCB0bXBfY250ID0gMDtcbiAgICAgICAgICAgICAgICB3aGlsZSAodGhpcy52YWxpZExvYyh0bXBfbG9jKSkge1xuICAgICAgICAgICAgICAgICAgICB0bXBfY250ICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZGlyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bXBfbG9jWzBdICs9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG1wX2xvY1swXSAtPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZG93bic6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG1wX2xvY1sxXSArPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAndXAnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRtcF9sb2NbMV0gLT0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2ludmFsaWQgZGlyZWN0aW9uOiAnICsgZGlyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBtYWludGVuZW5jZV9sb2MgPSB0bXBfbG9jO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBpZiBpdHMgaW52YWxpZCBiZWNhdXNlIGl0cyBvZmYgdGhlIGJvYXJkLCB3ZSBzaG91bGQgc3VidHJhY3Qgb25lXG4gICAgICAgICAgICAgICAgLy8gZnJvbSB0aGUgY291bnQsIGlmIGl0cyBpbnZhbGlkIGJlY2F1c2UgaXRzIGEgbWlzcywgd2Ugc2hvdWxkXG4gICAgICAgICAgICAgICAgLy8gc3VidHJhY3QgMiBmcm9tIHRoZSBjb3VudFxuICAgICAgICAgICAgICAgIGNvbnN0IG91dF9vZl9ib3VuZHMgPSAobWFpbnRlbmVuY2VfbG9jWzBdIDwgMCB8fCBtYWludGVuZW5jZV9sb2NbMF0gPiA5IHx8XG4gICAgICAgICAgICAgICAgICAgIG1haW50ZW5lbmNlX2xvY1sxXSA8IDAgfHwgbWFpbnRlbmVuY2VfbG9jWzFdID4gOSlcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoIW91dF9vZl9ib3VuZHMgJiYgdGhpcy5ib2FyZFttYWludGVuZW5jZV9sb2NbMF1dW21haW50ZW5lbmNlX2xvY1sxXV0gPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICB0bXBfY250IC09IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlcy5wdXNoKFtkaXIsIHRtcF9jbnRdKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmVzLnNvcnQoKGEsIGIpID0+IGJbMV0gLSBhWzFdKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd0aGUgcmVzdWx0aW5nIGxpc3Qgb2YgZGlyZWN0aW9ucyBzb3J0ZWQgYnkgdGhlaXIgc3RyZW5ndGggaXM6ICcsIHJlcyk7XG4gICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICB9LFxuICAgICAgICB2YWxpZERpcmVjdGlvbnMobG9jKSB7XG4gICAgICAgICAgICBsZXQgZGlyZWN0aW9ucyA9IFtdO1xuICAgICAgICAgICAgY29uc3Qgcm93ID0gbG9jWzBdO1xuICAgICAgICAgICAgY29uc3QgY29sID0gbG9jWzFdO1xuICAgICAgICAgICAgaWYgKHRoaXMudmFsaWRMb2MoW3JvdyArIDEsIGNvbF0pKSB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aW9ucy5wdXNoKCdsZWZ0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy52YWxpZExvYyhbcm93IC0gMSwgY29sXSkpIHtcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb25zLnB1c2goJ3JpZ2h0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy52YWxpZExvYyhbcm93LCBjb2wgKyAxXSkpIHtcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb25zLnB1c2goJ2Rvd24nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnZhbGlkTG9jKFtyb3csIGNvbCAtIDFdKSkge1xuICAgICAgICAgICAgICAgIGRpcmVjdGlvbnMucHVzaCgndXAnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd0aGUgdmFsaWQgZGlyZWN0aW9ucyBmb3IgbG9jYXRpb24nLCBsb2MsICcgYXJlICcsIGRpcmVjdGlvbnMpXG4gICAgICAgICAgICByZXR1cm4gZGlyZWN0aW9ucztcbiAgICAgICAgfSxcblxuICAgICAgICB0b3BMb2Moc2VhcmNoRGVwdGggPSAxLCBkZWJ1ZyA9IEZhbHNlKSB7XG4gICAgICAgICAgICAvLyBwaWNrIHRoZSBsb2NhdGlvbiBpbiB0aGUgYXJyYXkgd2l0aCB0aGUgaGlnaGVzdCBzY29yZSB3aGljaCBpc1xuICAgICAgICAgICAgLy8gdGhlIHN1bSBvZiBpdHMgYWRqYWNlbnRzIGxpc3QgWzFdXG4gICAgICAgICAgICBsZXQgdG9wX3Njb3JlID0gMFxuICAgICAgICAgICAgbGV0IHRvcF9sb2MgPSBbMCwgMF1cbiAgICAgICAgICAgIGxldCBzY29yZXMgPSBbXVxuICAgICAgICAgICAgLy8gbWFrZSBhbiBlbXB0eSAxMHgxMCBhZGphY2VudHNfY250IGFycmF5XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxvYyA9IFtpLCBqXVxuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGlzIGxvY2F0aW9uIGNhbid0IGJlIGF0dGFja2VkLCBza2lwIGl0XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy52YWxpZExvYyhsb2MpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIHNjb3JlIHNob3VsZCBwcmlvcml0aXplIGxvY2F0aW9ucyBieSB0aGVpciByZWxhdGl2ZVxuICAgICAgICAgICAgICAgICAgICAvLyBjZW50ZXJpbmcgYmV0d2VlbiBsZWZ0IGFuZCByaWdodCBhZGphY2VudCBsb2NhdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgLy8gYW5kIHVwIGFuZCBkb3duIGFkamFjZW50IGxvY2F0aW9ucywgdXNpbmcgc3RyZW5ndGhTb3J0ZWREaXJlY3Rpb25zXG4gICAgICAgICAgICAgICAgICAgIC8vIHdlIGNhbiBnZXQgYSBsaXN0IG9mIGRpcmVjdGlvbnMgc29ydGVkIGJ5IHRoZWlyIHN0cmVuZ3RoXG4gICAgICAgICAgICAgICAgICAgIC8vIHdlIGNhbiB0aGVuIHVzZSB0aGlzIGxpc3QgdG8gZGV0ZXJtaW5lIHRoZSBzY29yZSBvZiB0aGUgbG9jYXRpb25cbiAgICAgICAgICAgICAgICAgICAgbGV0IHNjb3JlID0gMFxuICAgICAgICAgICAgICAgICAgICBsZXQgZGlyZWN0aW9ucyA9IHRoaXMuc3RyZW5ndGhTb3J0ZWREaXJlY3Rpb25zKGxvYylcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRpcmVjdGlvbl9zdHJlbmd0aHMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnbGVmdCc6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAncmlnaHQnOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3VwJzogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICdkb3duJzogMCxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IGRpcmVjdGlvbnMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkaXIgPSBkaXJlY3Rpb25zW2tdWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY250ID0gZGlyZWN0aW9uc1trXVsxXVxuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uX3N0cmVuZ3Roc1tkaXJdID0gY250XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gd2UgY2FuIG5vdyB1c2UgdGhlIGRpcmVjdGlvbl9zdHJlbmd0aHMgdG8gZGV0ZXJtaW5lIHRoZSBzY29yZVxuICAgICAgICAgICAgICAgICAgICAvLyBieSB0YWtpbmcgdGhlIG1pbiBvZiB0aGUgbGVmdCBhbmQgcmlnaHQgc3RyZW5ndGhzIGFuZCB0aGUgbWluXG4gICAgICAgICAgICAgICAgICAgIC8vIG9mIHRoZSB1cCBhbmQgZG93biBzdHJlbmd0aHNcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGlyZWN0aW9uX3N0cmVuZ3RocylcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxlZnRfcmlnaHRfc3RyZW5ndGggPSBNYXRoLm1pbihkaXJlY3Rpb25fc3RyZW5ndGhzWydsZWZ0J10sIGRpcmVjdGlvbl9zdHJlbmd0aHNbJ3JpZ2h0J10pXG4gICAgICAgICAgICAgICAgICAgIGxldCB1cF9kb3duX3N0cmVuZ3RoID0gTWF0aC5taW4oZGlyZWN0aW9uX3N0cmVuZ3Roc1sndXAnXSwgZGlyZWN0aW9uX3N0cmVuZ3Roc1snZG93biddKVxuICAgICAgICAgICAgICAgICAgICAvLyBSRVNFQVJDSCBGVVJUSEVSXG4gICAgICAgICAgICAgICAgICAgIHNjb3JlID0gbGVmdF9yaWdodF9zdHJlbmd0aCArIHVwX2Rvd25fc3RyZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3JhdyBkaXJlY3Rpb24gYmFzZWQgc2NvcmUgaXMnLCBzY29yZSlcblxuICAgICAgICAgICAgICAgICAgICAvLyBib29zdCBtaWRkbGUgbG9jYXRpb25zIGJ5IHVzaW5nIGFuIGludmVyc2UgcXVhZHJhdGljIG11bHRpcGxpZXIgdG8gdGhlIHNjb3JlXG4gICAgICAgICAgICAgICAgICAgIGxldCBkaXN0ID0gTWF0aC5zcXJ0KE1hdGgucG93KDQuNSAtIGxvY1swXSwgMikgKyBNYXRoLnBvdyg0LjUgLSBsb2NbMV0sIDIpKVxuICAgICAgICAgICAgICAgICAgICAvLyB3ZSBhZGQgYmVjYXVzZSB3ZSByZWFsbHkgb25seSB3YW50IHRoaXMgdG8gYnJlYWsgdGllc1xuICAgICAgICAgICAgICAgICAgICAvLyBwaWNrIGEgcmFuZG9tIG51bWJlciBiZXR3ZWVuIDAgYW5kIC4wMDAwMDFcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJhbmQgPSBNYXRoLnJhbmRvbSgpIC8gMTAwMDAwMFxuICAgICAgICAgICAgICAgICAgICBzY29yZSA9IHNjb3JlICsgcmFuZFxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzY29yZSlcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlYXJjaERlcHRoID4gMSB8fCBkZWJ1Zykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcmVzLnB1c2goW2xvYywgc2NvcmVdKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChzY29yZSA+IHRvcF9zY29yZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wX3Njb3JlID0gc2NvcmVcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcF9sb2MgPSBsb2NcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGlmIHNlYXJjaERlcHRoIGlzIGdyZWF0ZXIgdGhhbiAxLCB3ZSBzaG91bGQgc29ydCB0aGUgc2NvcmVzIGFuZFxuICAgICAgICAgICAgLy8gaW4gZGVjcmVhc2luZyBvcmRlciBhbmQgdGFrZSB0aGUgZmlyc3Qgc2VhcmNoRGVwdGggZWxlbWVudHNcbiAgICAgICAgICAgIGlmIChzZWFyY2hEZXB0aCA+IDEgfHwgZGVidWcpIHtcbiAgICAgICAgICAgICAgICBzY29yZXMuc29ydCgoYSwgYikgPT4gYlsxXSAtIGFbMV0pXG4gICAgICAgICAgICAgICAgaWYgKGRlYnVnKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGxvZyB0b3AgMyBzY29yZXNcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlIHRvcCAzIHNjb3JlcyB3ZXJlXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0aGUgdG9wIDMgc2NvcmVzIHdlcmUnKVxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coc2NvcmVzW2ldWzFdKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZSB0b3AgMyBsb2NhdGlvbnMgd2VyZVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndGhlIHRvcCAzIGxvY2F0aW9ucyB3ZXJlJylcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNjb3Jlc1tpXVswXSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc2VhcmNoRGVwdGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzY29yZXNbLTFdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRvcF9sb2NcbiAgICAgICAgfSxcbiAgICB9XG59XG5cbmNvbnN0IGdhbWVfc3RhdHVzID0ge1xuICAgIFwicDFfc2V0dGluZ191cFwiOiAxLFxuICAgIFwicDJfc2V0dGluZ191cFwiOiAyLFxuICAgIFwicDFfdHVyblwiOiAzLFxuICAgIFwicDJfdHVyblwiOiA0LFxuICAgIFwicDFfd2luXCI6IDUsXG4gICAgXCJwMl93aW5cIjogNixcbn1cblxuY29uc3QgcmVhZGFibGVfc3RhdHVzID0ge1xuICAgIDE6IFwiIGlzIHNldHRpbmcgdXAgdGhlaXIgYm9hcmRcIixcbiAgICAyOiBcIiBpcyBzZXR0aW5nIHVwIHRoZWlyIGJvYXJkXCIsXG4gICAgMzogXCIncyB0dXJuXCIsXG4gICAgNDogXCIncyB0dXJuXCIsXG4gICAgNTogXCIgd2lucyFcIixcbiAgICA2OiBcIiB3aW5zIVwiLFxufVxuXG4vLyBjcmVhdGVzIGEgR2FtZSB3aXRoIHR3byBwbGF5ZXJzIHdobyBwZXJmb3JtIGFjdGlvbnMgb24gdGhlaXIgYm9hcmRzXG5mdW5jdGlvbiBHYW1lKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIFwic3RhdHVzXCI6IGdhbWVfc3RhdHVzLnAxX3NldHRpbmdfdXAsXG4gICAgICAgIFwibW9kZVwiOiBcImVhc3lcIixcbiAgICAgICAgXCJwMWJvYXJkXCI6IEJvYXJkKCksXG4gICAgICAgIC8vIHAyIGJvYXJkIGlzIHRoZSBBSSdzIGJvYXJkXG4gICAgICAgIFwicDJib2FyZFwiOiBCb2FyZCgpLFxuICAgICAgICBcInBib2FyZFwiOiAnYmFuYW5hcycsXG4gICAgICAgIFwiZWJvYXJkXCI6ICdiYW5hbmFzJyxcbiAgICAgICAgXCJwMV9uYW1lXCI6ICdIdW1hbicsXG4gICAgICAgIFwicDJfbmFtZVwiOiAnQUknLFxuICAgICAgICBcInR1cm5zXCI6IC0yLCAvLyB0byBhY2NvdW50IGZvciAyIHNldCBjYWxsc1xuICAgICAgICByZWFkYWJsZV9zdGF0dXMoaW5wdXQpIHtcbiAgICAgICAgICAgIGxldCBwbGF5ZXIgPSB0aGlzLnBib2FyZCA9PSB0aGlzLnAxYm9hcmQgPyB0aGlzLnAxX25hbWUgOiB0aGlzLnAyX25hbWU7XG4gICAgICAgICAgICByZXR1cm4gcGxheWVyICsgcmVhZGFibGVfc3RhdHVzW2lucHV0XTtcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBpbml0aWFsaXplIHRoZSBib2FyZHNcbiAgICAgICAgaW5pdCgpIHtcbiAgICAgICAgICAgIHRoaXMucGJvYXJkID0gdGhpcy5wMWJvYXJkO1xuICAgICAgICAgICAgdGhpcy5lYm9hcmQgPSB0aGlzLnAyYm9hcmQ7XG4gICAgICAgIH0sXG4gICAgICAgIC8vIGhhdmUgdGhlIGN1cnJlbnQgcGxheWVyIGF0dGFjayBhIGxvY2F0aW9uXG4gICAgICAgIGF0dGFjayhsb2MpIHtcbiAgICAgICAgICAgIC8vIGF0dGFjayB0aGUgZW5lbXkgYm9hcmQsIGlmIHRoZSBhdHRhY2sgaXMgdmFsaWRcbiAgICAgICAgICAgIC8vIGFuZCB0aGUgYXR0YWNrIGlzIGEgaGl0LCBjaGVjayBpZiB0aGUgZW5lbXkgaXMgc3Vua1xuICAgICAgICAgICAgLy8gaWYgdGhlIGVuZW15IGlzIHN1bmssIGNoZWNrIGlmIHRoZSBnYW1lIGlzIG92ZXJcbiAgICAgICAgICAgIC8vIGlmIHRoZSBnYW1lIGlzIG92ZXIsIHNldCB0aGUgc3RhdHVzIHRvIHRoZSB3aW5uZXJcbiAgICAgICAgICAgIC8vIGlmIHRoZSBnYW1lIGlzIG5vdCBvdmVyLCBzd2l0Y2ggdGhlIHBsYXllciB0dXJuXG4gICAgICAgICAgICAvLyBpZiB0aGUgbG9jYXRpb24gaXNuJ3QgdmFsaWQsIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgbGV0IGF0dCA9IHRoaXMuZWJvYXJkLnJlY2lldmVBdHRhY2sobG9jKTtcbiAgICAgICAgICAgIGlmICghYXR0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBvdGhlcndpc2UgdGhlIGF0dGFjayBpcyB2YWxpZGUgc28gd2Ugd2lsbCBiZSB1cGRhdGluZyB0aGUgZ2FtZS5zdGF0dXNcbiAgICAgICAgICAgIC8vIHRodXMgd2UgbmVlZCB0byBmaWd1cmUgb3V0IHRoZSBjdXJyZW50IHN0YXR1cyBhbmQgdXNlIGl0IHRvIGRldGVybWluZVxuICAgICAgICAgICAgLy8gd2hhdCB0aGUgbmV3IHN0YXR1cyBzaG91bGQgYmVcbiAgICAgICAgICAgIGxldCBjdXJyX3N0YXR1cyA9IHRoaXMuc3RhdHVzO1xuICAgICAgICAgICAgc3dpdGNoIChjdXJyX3N0YXR1cykge1xuICAgICAgICAgICAgICAgIGNhc2UgZ2FtZV9zdGF0dXMucDFfdHVybjpcbiAgICAgICAgICAgICAgICAgICAgaWYgKGF0dCA9PSA2OSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3BsYXllciAxIHdhcyB1cCwgYW5kIHN1bmsgdGhlIGVuZW15JylcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gZ2FtZV9zdGF0dXMucDFfd2luO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgZ2FtZV9zdGF0dXMucDJfdHVybjpcbiAgICAgICAgICAgICAgICAgICAgaWYgKGF0dCA9PSA2OSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3BsYXllciAyIHdhcyB1cCwgYW5kIHN1bmsgdGhlIGVuZW15JylcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gZ2FtZV9zdGF0dXMucDJfd2luO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpbnZhbGlkIHN0YXR1czogJyArIGN1cnJfc3RhdHVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHN3aXRjaCBwbGF5ZXJzXG4gICAgICAgICAgICB0aGlzLnN3YXBQbGF5ZXIoKTtcbiAgICAgICAgICAgIHJldHVybiBhdHQ7XG4gICAgICAgIH0sXG4gICAgICAgIC8vIHBsYWNlcyBjdXJyZW50IHBsYXllcnMgc2hpcHMgcmFuZG9tbHlcbiAgICAgICAgYXV0b1NldCgpIHtcbiAgICAgICAgICAgIC8vIGlmIHRoZSBzdGF0dXMgaXNuJ3QgMCBvciAxLCB0aGVuIHdlIGRvbid0IG5lZWQgdG8gc2V0IHRoZSBib2FyZFxuICAgICAgICAgICAgaWYgKCEodGhpcy5zdGF0dXMgPT0gZ2FtZV9zdGF0dXMucDFfc2V0dGluZ191cCB8fFxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzID09IGdhbWVfc3RhdHVzLnAyX3NldHRpbmdfdXApKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gcGxhY2UgdGhlIHNoaXBzXG4gICAgICAgICAgICB3aGlsZSAodGhpcy5wYm9hcmQuc2hpcF9kZWNrLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGxldCBzaGlwX2xlbiA9IHRoaXMucGJvYXJkLnNoaXBfZGVjay5wb3AoKTtcbiAgICAgICAgICAgICAgICBsZXQgcGxhY2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgbGV0IHNoaXAgPSBTaGlwKHNoaXBfbGVuKTtcblxuICAgICAgICAgICAgICAgIHdoaWxlIChwbGFjZWQgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJhbmRkaXIgPSBNYXRoLmZsb29yKE1hdGguYWJzKE1hdGgucmFuZG9tKCkpICogNCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCByYW5keCA9IE1hdGguZmxvb3IoTWF0aC5hYnMoTWF0aC5yYW5kb20oKSkgKiA5KTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJhbmR5ID0gTWF0aC5mbG9vcihNYXRoLmFicyhNYXRoLnJhbmRvbSgpKSAqIDkpO1xuXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlZCA9IHRoaXMucGJvYXJkLnBsYWNlU2hpcChzaGlwLCBbcmFuZHgsIHJhbmR5XSwgcmFuZGRpcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gc3dhcCB0aGUgcGxheWVyIGJvYXJkIGFuZCBlbmVteSBib2FyZFxuICAgICAgICAgICAgdGhpcy5zd2FwUGxheWVyKCk7XG4gICAgICAgIH0sXG4gICAgICAgIHN3YXBQbGF5ZXIoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT0gZ2FtZV9zdGF0dXMucDFfd2luIHx8XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0dXMgPT0gZ2FtZV9zdGF0dXMucDJfd2luKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICh0aGlzLnBib2FyZCA9PSB0aGlzLnAxYm9hcmQpID8gJ1BsYXllciAxJyA6ICdQbGF5ZXIgMic7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnR1cm5zID0gdGhpcy50dXJucyArIDE7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnR1cm5zKVxuICAgICAgICAgICAgaWYgKHRoaXMucGJvYXJkID09IHRoaXMucDFib2FyZCkge1xuICAgICAgICAgICAgICAgIHRoaXMucGJvYXJkID0gdGhpcy5wMmJvYXJkO1xuICAgICAgICAgICAgICAgIHRoaXMuZWJvYXJkID0gdGhpcy5wMWJvYXJkO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBib2FyZCA9PSB0aGlzLnAyYm9hcmQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBib2FyZCA9IHRoaXMucDFib2FyZDtcbiAgICAgICAgICAgICAgICB0aGlzLmVib2FyZCA9IHRoaXMucDJib2FyZDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2ludmFsaWQgcGxheWVyIGJvYXJkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBhZHZhbmNlIHRoZSBzdGF0dXMgb2YgdGhlIGdhbWUgYmFzZWQgb24gdGhlIHByZXZpb3VzIHN0YXR1c1xuICAgICAgICAgICAgLy8gd2UgZGlzcmVnYXJkIHdpbiBzdGF0dXMnIGJlY2F1c2UgdGhvc2UgYXV0byByZXJlbmRlciB0aGUgcGFnZVxuICAgICAgICAgICAgbGV0IG9sZF9zdGF0dXMgPSB0aGlzLnN0YXR1cztcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PSBnYW1lX3N0YXR1cy5wMV9zZXR0aW5nX3VwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSBnYW1lX3N0YXR1cy5wMl9zZXR0aW5nX3VwO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXR1cyA9PSBnYW1lX3N0YXR1cy5wMl9zZXR0aW5nX3VwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSBnYW1lX3N0YXR1cy5wMV90dXJuO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1cyA9IHRoaXMuc3RhdHVzID09IGdhbWVfc3RhdHVzLnAxX3R1cm4gPyBnYW1lX3N0YXR1cy5wMl90dXJuIDogZ2FtZV9zdGF0dXMucDFfdHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9LFxuICAgICAgICAvLyBhdHRhY2tzIG9wcG9zaW5nIHBsYXllciBhdXRvbWF0aWNhbGx5XG4gICAgICAgIGFpQXR0YWNrKCkge1xuICAgICAgICAgICAgLy8gd2UgZ2V0IHRoZSB0YXJnZXQgdXNpbmcgYWlUYXJnZXRcbiAgICAgICAgICAgIGxldCB0YXJnZXQgPSB0aGlzLmFpVGFyZ2V0KCk7XG4gICAgICAgICAgICAvLyB3ZSBhdHRhY2sgdGhlIHRhcmdldCB1c2luZyBhdHRhY2tcbiAgICAgICAgICAgIGxldCBhdHQgPSB0aGlzLmF0dGFjayh0YXJnZXQpO1xuICAgICAgICAgICAgLy8gaWYgdGhlIGF0dGFjayB3YXMgdW5zdWNjZXNzZnVsLCB3ZSBuZWVkIHRvIHRyeSBhZ2FpblxuICAgICAgICAgICAgbGV0IGF0dF9jbnQgPSAxXG4gICAgICAgICAgICB3aGlsZSAoIWF0dCkge1xuICAgICAgICAgICAgICAgIGF0dF9jbnQgKz0gMVxuICAgICAgICAgICAgICAgIHRhcmdldCA9IHRoaXMuYWlUYXJnZXQoYXR0X2NudCk7XG4gICAgICAgICAgICAgICAgYXR0ID0gdGhpcy5hdHRhY2sodGFyZ2V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAnc3VjY2Vzc2Z1bCBhdHRhY2snXG4gICAgICAgIH0sXG4gICAgICAgIC8vIGZpbmRzIHRoZSB0YXJnZXQgZm9yIGFuIGFpQXR0YWNrXG4gICAgICAgIGFpVGFyZ2V0KGF0dF9jbnQgPSAxKSB7XG4gICAgICAgICAgICBydW5fY250ICs9IDFcbiAgICAgICAgICAgIGlmIChydW5fY250ID4gMTAwMCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigndG9vIG1hbnkgcnVucycpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFswLCAwXVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMubW9kZSA9PSAnZWFzeScpIHtcbiAgICAgICAgICAgICAgICBsZXQgcmFuZHIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgICAgICAgICAgbGV0IHJhbmRjID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICAgICAgICAgIHJldHVybiBbcmFuZHIsIHJhbmRjXVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0aGlzLmVib2FyZC5oaXRfbGlzdCB8fCB0aGlzLmVib2FyZC5oaXRfbGlzdC5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgIC8vIHVzZSB0aGUgbG9jYXRpb24gd2l0aCB0aGUgaGlnaGVzdCBzY29yZVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmVib2FyZC50b3BMb2MoYXR0X2NudCwgdHJ1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGlmIHRoZSBoaXQgbGlzdCBpcyBvbmUsIHRoZW4gd2UgbmVlZCB0byBsb29rIGF0IDQgcG9zc2libGVcbiAgICAgICAgICAgIC8vIGxvY2F0aW9ucyB0byBhdHRhY2tcbiAgICAgICAgICAgIGlmICh0aGlzLmVib2FyZC5oaXRfbGlzdCAmJiB0aGlzLmVib2FyZC5oaXRfbGlzdC5sZW5ndGggPT0gMSkge1xuICAgICAgICAgICAgICAgIC8vIHRoZXJlIGFyZSA0IHBvc3NpYmxlIGxvY2F0aW9ucyB0byBhdHRhY2ssIHdlIHNob3VsZCBjaGVja1xuICAgICAgICAgICAgICAgIC8vIGlmIGVhY2ggaXMgdmFsaWQgYW5kIHRoZW4gcGljayB0aGUgb25lIHdpdGggdGhlIG1vc3Qgc3BhY2VcbiAgICAgICAgICAgICAgICAvLyBhaGVhZCBvZiBpdC4gU28gbGV0cyBnZXQgYSBsaXN0IG9mIHRoZSBwb3NzaWJsZSBsb2NhdGlvbnNcbiAgICAgICAgICAgICAgICAvLyBhbmQgdGhlbiBjaGVjayBlYWNoIG9uZVxuICAgICAgICAgICAgICAgIC8vIHBvc3NpYmxlIGxvY3MgPSBbcmlnaHQsIGxlZnQsIHVwLCBkb3duXVxuICAgICAgICAgICAgICAgIC8vIHBhcnNlIHRoaXMuZWJvYXJkLmhpdF9saXN0WzBdIGludG8gbG9jIGZvcm1cbiAgICAgICAgICAgICAgICBsZXQgdGFyZyA9IEpTT04ucGFyc2UodGhpcy5lYm9hcmQuaGl0X2xpc3RbMF0pO1xuICAgICAgICAgICAgICAgIGxldCByb3cgPSB0YXJnWzBdO1xuICAgICAgICAgICAgICAgIGxldCBjb2wgPSB0YXJnWzFdO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjYWxsaW5nIHRvcCBQaXZvdCBvbiAnLCBbcm93LCBjb2xdKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lYm9hcmQudG9wUGl2b3QoW3JvdywgY29sXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwZXJmb3JtaW5nIGhpdCBtYW5hdWV2ZXInKTtcblxuICAgICAgICAgICAgLy8gaWYgdGhlIGhpdCBsaXN0IGlzIGdyZWF0ZXIgdGhhbiBvbmUsIHRoZW4gd2UgZGV0ZXJtaW5lIHRoZVxuICAgICAgICAgICAgLy8gZGlyZWN0aW9uIG9mIHRoZSBoaXQgbGlzdCAocm93IG9yIGNvbCkgYW5kIHVzZSB0aGUgZW5kcyBvZlxuICAgICAgICAgICAgLy8gdGhlIGxpc3QgdG8gZGV0ZXJtaW5lIHRoZSBuZXh0IGF0dGFjay4gSWYgdGhlIGhpdCBsaXN0IGlzXG4gICAgICAgICAgICAvLyB3ZSBzdGFydCBieSBnZXR0aW5nIHRoZSBmaXJzdCBoaXQgYW5kIHRoZSBsYXN0IGhpdFxuICAgICAgICAgICAgbGV0IGZpcnN0X2hpdCA9IEpTT04ucGFyc2UodGhpcy5lYm9hcmQuaGl0X2xpc3RbMF0pO1xuICAgICAgICAgICAgbGV0IGxhc3RfaGl0ID0gSlNPTi5wYXJzZSh0aGlzLmVib2FyZC5oaXRfbGlzdFtcbiAgICAgICAgICAgICAgICB0aGlzLmVib2FyZC5oaXRfbGlzdC5sZW5ndGggLSAxXSk7XG4gICAgICAgICAgICBsZXQgZnIgPSBmaXJzdF9oaXRbMF07XG4gICAgICAgICAgICBsZXQgZmMgPSBmaXJzdF9oaXRbMV07XG4gICAgICAgICAgICBsZXQgbHIgPSBsYXN0X2hpdFswXTtcbiAgICAgICAgICAgIGxldCBsYyA9IGxhc3RfaGl0WzFdO1xuICAgICAgICAgICAgLy8gaWYgdGhlIGZpcnN0IGhpdCBhbmQgbGFzdCBoaXQgYXJlIGluIHRoZSBzYW1lIHJvdywgdGhlbiB3ZVxuICAgICAgICAgICAgLy8gbmVlZCB0byBhdHRhY2sgdGhlIG5leHQgbG9jYXRpb24gaW4gdGhlIHJvd1xuICAgICAgICAgICAgaWYgKGZyID09IGxyKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIGxhc3QgaGl0IGlzIHRvIHRoZSByaWdodCBvZiB0aGUgZmlyc3QgaGl0LCB0aGVuXG4gICAgICAgICAgICAgICAgLy8gd2UgbmVlZCB0byBhdHRhY2sgdG8gdGhlIHJpZ2h0IG9mIHRoZSBsYXN0IGhpdFxuICAgICAgICAgICAgICAgIGlmIChmYyA8IGxjKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIHRoZSByaWdodCBsb2NhdGlvblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5lYm9hcmQudmFsaWRMb2MoW2xyLCBsYyArIDFdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtsciwgbGMgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmVib2FyZC52YWxpZExvYyhbZnIsIGZjIC0gMV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW2ZyLCBmYyAtIDFdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBsYXN0IGhpdCBpcyB0byB0aGUgbGVmdCBvZiB0aGUgZmlyc3QgaGl0LCB0aGVuXG4gICAgICAgICAgICAgICAgLy8gd2UgbmVlZCB0byBhdHRhY2sgdG8gdGhlIGxlZnQgb2YgdGhlIGxhc3QgaGl0XG4gICAgICAgICAgICAgICAgaWYgKGZjID4gbGMpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgdGhlIGxlZnQgbG9jYXRpb25cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZWJvYXJkLnZhbGlkTG9jKFtsciwgbGMgLSAxXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbbHIsIGxjIC0gMV07XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5lYm9hcmQudmFsaWRMb2MoW2ZyLCBmYyArIDFdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlIGxlZnQgbG9jYXRpb24gaXMgbm90IHZhbGlkLCB0aGVuIHdlIG5lZWQgdG9cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGF0dGFjayB0byB0aGUgcmlnaHQgb2YgdGhlIGZpcnN0IGhpdFxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtmciwgZmMgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBpZiB3ZSBtYWtlIGl0IHRvIGhlcmUgd2l0aG91dCByZXR1cm5pbmcsIHRoZW4gd2UgZ290XG4gICAgICAgICAgICAgICAgLy8gdHdvIHNoaXBzIG5leHQgdG8gZWFjaCBvdGhlciwgc28gd2UgbmVlZCB0byBhdHRhY2sgYXJvdW5kIHRoZSBmaXJzdFxuICAgICAgICAgICAgICAgIC8vIGhpdFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmVib2FyZC52YWxpZExvYyhbZnIgKyAxLCBmY10pKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbZnIgKyAxLCBmY107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmVib2FyZC52YWxpZExvYyhbZnIgLSAxLCBmY10pKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbZnIgLSAxLCBmY107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmVib2FyZC52YWxpZExvYyhbZnIsIGZjICsgMV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbZnIsIGZjICsgMV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmVib2FyZC52YWxpZExvYyhbZnIsIGZjIC0gMV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbZnIsIGZjIC0gMV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd3ZSBzaG91bGQgbmV2ZXIgZ2V0IGhlcmUgdHdvIHJvd3MgbmV4dCB0byBlYWNoIG90aGVyIGVkaXRpb24nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGlmIHRoZSBmaXJzdCBoaXQgYW5kIGxhc3QgaGl0IGFyZSBpbiB0aGUgc2FtZSBjb2wsIHRoZW4gd2VcbiAgICAgICAgICAgIC8vIG5lZWQgdG8gYXR0YWNrIHRoZSBuZXh0IGxvY2F0aW9uIGluIHRoZSBjb2xcbiAgICAgICAgICAgIGlmIChmYyA9PSBsYykge1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBsYXN0IGhpdCBpcyBiZWxvdyB0aGUgZmlyc3QgaGl0LCB0aGVuIHdlIG5lZWQgdG9cbiAgICAgICAgICAgICAgICAvLyBhdHRhY2sgYmVsb3cgdGhlIGxhc3QgaGl0XG4gICAgICAgICAgICAgICAgaWYgKGZyIDwgbHIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgdGhlIGRvd24gbG9jYXRpb25cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZWJvYXJkLnZhbGlkTG9jKFtsciArIDEsIGxjXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbbHIgKyAxLCBsY107XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5lYm9hcmQudmFsaWRMb2MoW2ZyIC0gMSwgZmNdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlIGRvd24gbG9jYXRpb24gaXMgbm90IHZhbGlkLCB0aGVuIHdlIG5lZWQgdG9cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGF0dGFjayBhYm92ZSB0aGUgZmlyc3QgaGl0XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW2ZyIC0gMSwgZmNdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBsYXN0IGhpdCBpcyBhYm92ZSB0aGUgZmlyc3QgaGl0LCB0aGVuIHdlIG5lZWQgdG9cbiAgICAgICAgICAgICAgICAvLyBhdHRhY2sgYWJvdmUgdGhlIGxhc3QgaGl0XG4gICAgICAgICAgICAgICAgaWYgKGZyID4gbHIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgdGhlIHVwIGxvY2F0aW9uXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmVib2FyZC52YWxpZExvYyhbbHIgLSAxLCBsY10pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW2xyIC0gMSwgbGNdO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZWJvYXJkLnZhbGlkTG9jKFtmciArIDEsIGZjXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoZSB1cCBsb2NhdGlvbiBpcyBub3QgdmFsaWQsIHRoZW4gd2UgbmVlZCB0b1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXR0YWNrIGJlbG93IHRoZSBmaXJzdCBoaXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbZnIgKyAxLCBmY107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gaWYgd2UgbWFrZSBpdCB0byBoZXJlIHdlIGdvdCB0d28gc2hpcHMgbmV4dCB0byBlYWNoIG90aGVyLFxuICAgICAgICAgICAgICAgIC8vIHNvIHdlIG5lZWQgdG8gYXR0YWNrIHRvIHRoZSBsZWZ0IGFuZCByaWdodCBvZiB0aGUgZmlyc3QgaGl0XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZWJvYXJkLnZhbGlkTG9jKFtmciwgZmMgKyAxXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtmciwgZmMgKyAxXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZWJvYXJkLnZhbGlkTG9jKFtmciwgZmMgLSAxXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtmciwgZmMgLSAxXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZWJvYXJkLnZhbGlkTG9jKFtmciArIDEsIGZjXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtmciArIDEsIGZjXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZWJvYXJkLnZhbGlkTG9jKFtmciAtIDEsIGZjXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtmciAtIDEsIGZjXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3dlIHNob3VsZCBuZXZlciBnZXQgaGVyZSB0d28gY29scyBuZXh0IHRvIGVhY2ggb3RoZXIgZWRpdGlvbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAvLyByZXNldCB0aGUgZ2FtZVxuICAgICAgICByZXNldCgpIHtcbiAgICAgICAgICAgIHRoaXMucGJvYXJkID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuZWJvYXJkID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMucDFib2FyZCA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLnAyYm9hcmQgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy50dXJucyA9IC0yO1xuICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSBnYW1lX3N0YXR1cy5wMV9zZXR0aW5nX3VwO1xuICAgICAgICAgICAgdGhpcy5tb2RlID0gXCJlYXN5XCI7XG4gICAgICAgICAgICB0aGlzLnAxYm9hcmQgPSBCb2FyZCgpO1xuICAgICAgICAgICAgdGhpcy5wMmJvYXJkID0gQm9hcmQoKTtcbiAgICAgICAgICAgIHRoaXMucGJvYXJkID0gdGhpcy5wMWJvYXJkO1xuICAgICAgICAgICAgdGhpcy5lYm9hcmQgPSB0aGlzLnAyYm9hcmQ7XG4gICAgICAgIH0sXG4gICAgfTtcbn1cblxuZXhwb3J0IHsgZ2FtZV9zdGF0dXMsIFNoaXAsIEJvYXJkLCBHYW1lIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJyZW5kZXJcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuaW1wb3J0IHsgZ2FtZV9zdGF0dXMgfSBmcm9tICcuL2xvZ2ljJztcblxuLy8gdGFrZXMgYSBnYW1lIFxuZXhwb3J0IGZ1bmN0aW9uIGxheW91dChnYW1lKSB7XG4gICAgLy8gY2xlYXIgdGhlIHBhZ2VcbiAgICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCA9ICcnO1xuICAgIC8vIG9ubHkgaGF2ZSBhIHNwYWNlYmFyZCBrZXlkb3duIGxpc3RlbmVyIGlmIHRoZSBnYW1lIGlzIGluIHNldHVwIG1vZGVcbiAgICBpZiAoZ2FtZS5zdGF0dXMgPCBnYW1lX3N0YXR1c1tcInAxX3R1cm5cIl0pIHtcblxuICAgICAgICB3aW5kb3cub25rZXlkb3duID0gKGV2KSA9PiB7XG4gICAgICAgICAgICAvLyBpZiB0aGUgY3VycmVudCBnYW1lIHN0YXRlIGFsbG93cyBwbGFjZW1lbnQsIHdlIHRyeSB0byBwbGFjZSB0aGUgc2hpcFxuICAgICAgICAgICAgaWYgKGV2LmtleUNvZGUgPT0gMTMpIHtcbiAgICAgICAgICAgICAgICBwbGFjZUhvdmVyU2hpcChnYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBjcmVhdGluZyBzZWN0aW9uc1xuICAgIGNvbnN0IGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgYnVpbGRIZWFkZXIoaCwgZ2FtZSk7XG4gICAgYnVpbGRGb290ZXIoZik7XG5cbiAgICBiLmNsYXNzTGlzdC5hZGQoJ2JvZHknKTtcbiAgICBjb25zdCBpbmZvX3NlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBrZXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBkb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgcGxhY2VfcmFuZG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICBpbmZvX3NlY3QuY2xhc3NMaXN0LmFkZCgnaW5mbycpO1xuICAgIHBsYWNlX3JhbmRvbS5pZCA9ICdycCc7XG5cbiAgICBidWlsZEtleShrZXkpO1xuICAgIChnYW1lLnBib2FyZC5zaGlwX2RlY2subGVuZ3RoICE9IDApID8gc2V0RG9jayhkb2NrLCBnYW1lKSA6IHNldERvY2soZG9jaywgZ2FtZSwgdHJ1ZSk7XG4gICAgcGxhY2VfcmFuZG9tLnRleHRDb250ZW50ID0gJ1BMQUNFIE1ZIFNISVBTJztcbiAgICBwbGFjZV9yYW5kb20ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgZ2FtZS5hdXRvU2V0KCk7XG4gICAgICAgIGlmIChnYW1lLm1vZGUgPT0gJ2Vhc3knIHx8IGdhbWUubW9kZSA9PSAnaGFyZCcpIHtcbiAgICAgICAgICAgIGdhbWUuYXV0b1NldCgpO1xuICAgICAgICB9XG4gICAgICAgIGxheW91dChnYW1lKTtcbiAgICB9XG5cbiAgICBpbmZvX3NlY3QuYXBwZW5kQ2hpbGQoa2V5KTtcbiAgICBpbmZvX3NlY3QuYXBwZW5kQ2hpbGQoZG9jayk7XG4gICAgaWYgKGdhbWUuc3RhdHVzIDwgZ2FtZV9zdGF0dXNbXCJwMV90dXJuXCJdKSB7XG4gICAgICAgIGluZm9fc2VjdC5hcHBlbmRDaGlsZChwbGFjZV9yYW5kb20pO1xuICAgIH1cblxuICAgIGNvbnN0IGJvYXJkX3NlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBidWlsZEJvYXJkcyhnYW1lLCBib2FyZF9zZWN0KTtcbiAgICAvLyBhdHRhY2ggZXZlbnQgbGlzdGVuZXJzIHRvIHRoZSBib2FyZHNcblxuICAgIGNvbnN0IHJlc2V0X3NlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByZXNldF9zZWN0LmNsYXNzTGlzdC5hZGQoJ3Jlc2V0Jyk7XG4gICAgYnVpbGRSZXNldFNlY3Rpb24oZ2FtZSwgcmVzZXRfc2VjdCk7XG5cbiAgICBiLmFwcGVuZENoaWxkKGluZm9fc2VjdCk7XG4gICAgYi5hcHBlbmRDaGlsZChib2FyZF9zZWN0KTtcbiAgICBiLmFwcGVuZENoaWxkKHJlc2V0X3NlY3QpO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChoKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGIpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZik7XG5cbiAgICAvLyBhdHRhY2ggZXZlbnQgbGlzdGVuZXJzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7ICsraikge1xuICAgICAgICAgICAgYXR0YWNoQXR0YWNrTGlzdGVuZXIoJ2VyJyArIGkgKyAnYycgKyBqLCBnYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBzZXRQSG92ZXIoZ2FtZSk7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkSGVhZGVyKGgsIGdhbWUpIHtcbiAgICBjb25zdCBzdGF0dXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpZiAoZ2FtZS5tb2RlID09ICdlYXN5Jykge1xuICAgICAgICBzdGF0dXMudGV4dENvbnRlbnQgPSAnRUFTWSBNT0RFJztcbiAgICB9XG4gICAgZWxzZSBpZiAoZ2FtZS5tb2RlID09ICdoYXJkJykge1xuICAgICAgICBzdGF0dXMudGV4dENvbnRlbnQgPSAnSEFSRCBNT0RFJztcbiAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0dXMudGV4dENvbnRlbnQgPSBnYW1lLnJlYWRhYmxlX3N0YXR1cyhnYW1lLnN0YXR1cyk7XG4gICAgfVxuXG4gICAgc3RhdHVzLmNsYXNzTGlzdC5hZGQoJ3N0YXR1cycpO1xuICAgIGguY2xhc3NMaXN0LmFkZCgnaGVhZCcpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGNvbnN0IGdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdCQVRUTEVTSElQJztcbiAgICBnaC50ZXh0Q29udGVudCA9ICdHSVRIVUInXG4gICAgZ2gub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgb3BlbignaHR0cHM6Ly9naXRodWIuY29tL1Rhbm5lckhvcm5zYnk3L29kaW4tYmF0dGxlc2hpcCcpO1xuICAgIH07XG5cbiAgICBoLmFwcGVuZENoaWxkKHN0YXR1cyk7XG4gICAgaC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgaC5hcHBlbmRDaGlsZChnaCk7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkRm9vdGVyKGYpIHtcbiAgICBmLmNsYXNzTGlzdC5hZGQoJ2Zvb3QnKTtcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICBuYW1lLnRleHRDb250ZW50ID0gJ0B0YW5uZXJob3Juc2J5Nyc7XG4gICAgZi5hcHBlbmRDaGlsZChuYW1lKTtcbn1cblxuZnVuY3Rpb24gYnVpbGRLZXkoa2V5KSB7XG4gICAga2V5LmNsYXNzTGlzdC5hZGQoJ2tleScpO1xuICAgIGNvbnN0IGhpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgY29uc3QgbWlzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgY29uc3Qgc3VuayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGhpdF9kZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IG1pc3NfZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBzdW5rX2Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgaGl0X3NlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBtaXNzX3NlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBzdW5rX3NlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBrZXkuY2xhc3NMaXN0LmFkZCgna2V5Jyk7XG4gICAgaGl0LmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuICAgIG1pc3MuY2xhc3NMaXN0LmFkZCgnbWlzcycpO1xuICAgIHN1bmsuY2xhc3NMaXN0LmFkZCgnc3VuaycpO1xuICAgIGhpdC50ZXh0Q29udGVudCA9ICdYJztcbiAgICBtaXNzLnRleHRDb250ZW50ID0gJ1gnO1xuICAgIHN1bmsudGV4dENvbnRlbnQgPSAnJztcbiAgICBoaXRfZGVzYy50ZXh0Q29udGVudCA9ICdISVQnO1xuICAgIG1pc3NfZGVzYy50ZXh0Q29udGVudCA9ICdNSVNTJztcbiAgICBzdW5rX2Rlc2MudGV4dENvbnRlbnQgPSAnU1VOSyc7XG4gICAgaGl0X3NlY3QuYXBwZW5kQ2hpbGQoaGl0X2Rlc2MpO1xuICAgIGhpdF9zZWN0LmFwcGVuZENoaWxkKGhpdCk7XG4gICAgbWlzc19zZWN0LmFwcGVuZENoaWxkKG1pc3NfZGVzYyk7XG4gICAgbWlzc19zZWN0LmFwcGVuZENoaWxkKG1pc3MpO1xuICAgIHN1bmtfc2VjdC5hcHBlbmRDaGlsZChzdW5rX2Rlc2MpO1xuICAgIHN1bmtfc2VjdC5hcHBlbmRDaGlsZChzdW5rKTtcbiAgICBoaXRfc2VjdC5jbGFzc0xpc3QuYWRkKCdrZXlfc2VjdCcpO1xuICAgIG1pc3Nfc2VjdC5jbGFzc0xpc3QuYWRkKCdrZXlfc2VjdCcpXG4gICAgc3Vua19zZWN0LmNsYXNzTGlzdC5hZGQoJ2tleV9zZWN0JylcbiAgICBrZXkuYXBwZW5kQ2hpbGQoaGl0X3NlY3QpO1xuICAgIGtleS5hcHBlbmRDaGlsZChtaXNzX3NlY3QpO1xuICAgIGtleS5hcHBlbmRDaGlsZChzdW5rX3NlY3QpO1xuXG59XG5cbmZ1bmN0aW9uIHNldERvY2soZG9jaywgZ2FtZSwgcGxhY2VkID0gZmFsc2UpIHtcbiAgICBjb25zdCBkb2NrX2hlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNvbnN0IGJvYXRfbG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYm9hdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGRvY2tfZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcblxuICAgIGRvY2suY2xhc3NMaXN0LmFkZCgnZG9jaycpO1xuICAgIGJvYXQudGV4dENvbnRlbnQgPSAnJztcbiAgICBib2F0LmNsYXNzTGlzdC5hZGQoJ2JvYXQnKTtcblxuICAgIGJvYXRfbG90LmNsYXNzTGlzdC5hZGQoJ2JvYXRfbG90Jyk7XG5cbiAgICBsZXQgc2hpcF9kZWNrID0gZ2FtZS5wYm9hcmQuc2hpcF9kZWNrLnNvcnQoKTtcbiAgICBkb2NrX2hlYWQudGV4dENvbnRlbnQgPSAnUGxhY2UgWW91ciBTaGlwcyc7XG4gICAgZG9ja19mb290ZXIudGV4dENvbnRlbnQgPSAnQ2xpY2sgb25lIG9mIHRoZSBzaGlwcyBhYm92ZSB0byBzZWxlY3QgaXQsIHByZXNzIFIgdG8gcm90YXRlIGl0LCBhbmQgcHJlc3MgZW50ZXIgdG8gcGxhY2UgaXQhJztcblxuICAgIGlmIChwbGFjZWQpIHtcbiAgICAgICAgYm9hdC5jbGFzc0xpc3QuYWRkKCdlbmVteScpO1xuICAgICAgICBkb2NrX2hlYWQudGV4dENvbnRlbnQgPSAnUmVtYWluaW5nIEVuZW15IFNoaXBzOic7XG4gICAgICAgIGRvY2tfZm9vdGVyLnRleHRDb250ZW50ID0gJ0tlZXAgRmlyaW5nISdcbiAgICAgICAgc2hpcF9kZWNrID0gZ2FtZS5lYm9hcmQuc2hpcHNfc3RhbmRpbmdcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBfZGVjay5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgdG1wX2JvYXQgPSBib2F0LmNsb25lTm9kZSgpO1xuICAgICAgICBsZXQgc2hpcF9sZW5ndGggPSBNYXRoLmZsb29yKHNoaXBfZGVja1tpXSAvIDUgKiAxMDApO1xuICAgICAgICB0bXBfYm9hdC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBgd2lkdGg6JHtzaGlwX2xlbmd0aH0lYCk7XG4gICAgICAgIHRtcF9ib2F0Lm9uY2xpY2sgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgbGV0IGxlbmd0aCA9IE1hdGguZmxvb3IocGFyc2VJbnQoZS50YXJnZXQuc3R5bGUud2lkdGhcbiAgICAgICAgICAgICAgICAuc2xpY2UoMCwgLTEpKSAvIDIwKTtcbiAgICAgICAgICAgIGxldCByb3RhdGlvbiA9IDA7XG4gICAgICAgICAgICBnYW1lLnBib2FyZC5zZXRDdXJyU2hpcChsZW5ndGgpO1xuXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChldi5rZXkgPT0gJ3InKSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdGF0aW9uICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIHJvdGF0aW9uICU9IDQ7XG4gICAgICAgICAgICAgICAgICAgIGdhbWUucGJvYXJkLnJvdGF0aW9uID0gcm90YXRpb247XG5cbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0KGdhbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGJvYXRfbG90LmFwcGVuZENoaWxkKHRtcF9ib2F0KTtcbiAgICB9XG5cbiAgICBkb2NrLmFwcGVuZENoaWxkKGRvY2tfaGVhZCk7XG4gICAgZG9jay5hcHBlbmRDaGlsZChib2F0X2xvdCk7XG4gICAgZG9jay5hcHBlbmRDaGlsZChkb2NrX2Zvb3Rlcik7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkQm9hcmRzKGdhbWUsIGJvYXJkX3NlY3QpIHtcbiAgICBib2FyZF9zZWN0LmNsYXNzTGlzdC5hZGQoJ2dhbWUnKTtcbiAgICBjb25zdCBmdWxsYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmdWxsYm9hcmQuY2xhc3NMaXN0LmFkZCgnZnVsbGJvYXJkJyk7XG4gICAgY29uc3QgdG9wX2JvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYm90X2JvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2V0Qm9hcmQodG9wX2JvYXJkLCBnYW1lLmVib2FyZCwgdHJ1ZSk7XG4gICAgc2V0Qm9hcmQoYm90X2JvYXJkLCBnYW1lLnBib2FyZCk7XG4gICAgLy8gYWRkIGF0dGFjayBsaXN0ZW5lcnMgdG8gZWFjaCBjZWxsIGluIHRoZSB0b3AgYm9hcmRcbiAgICBmdWxsYm9hcmQuYXBwZW5kQ2hpbGQodG9wX2JvYXJkKTtcbiAgICBmdWxsYm9hcmQuYXBwZW5kQ2hpbGQoYm90X2JvYXJkKTtcbiAgICBib2FyZF9zZWN0LmFwcGVuZENoaWxkKGZ1bGxib2FyZCk7XG59XG5cbmZ1bmN0aW9uIHNldEJvYXJkKGJfZWxlLCBib2FyZCwgZW5lbXkgPSBmYWxzZSkge1xuICAgIGJfZWxlLmNsYXNzTGlzdC5hZGQoJ2JvYXJkJyk7XG4gICAgY29uc3QgZW1wdHlDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaGl0Q2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IG1pc3NDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3Qgc3Vua0NlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB5b3Vyc0NlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoaXRDZWxsLmNsYXNzTGlzdC5hZGQoJ2hpdCcsICdjZWxsJyk7XG4gICAgbWlzc0NlbGwuY2xhc3NMaXN0LmFkZCgnbWlzcycsICdjZWxsJyk7XG4gICAgc3Vua0NlbGwuY2xhc3NMaXN0LmFkZCgnc3VuaycsICdjZWxsJyk7XG4gICAgZW1wdHlDZWxsLmNsYXNzTGlzdC5hZGQoJ2VtcHR5JywgJ2NlbGwnKTtcbiAgICB5b3Vyc0NlbGwuY2xhc3NMaXN0LmFkZCgneW91cnMnLCAnY2VsbCcpO1xuXG4gICAgaWYgKGVuZW15KSB7XG4gICAgICAgIGVtcHR5Q2VsbC5jbGFzc0xpc3QuYWRkKCdlY2VsbCcpO1xuICAgICAgICBoaXRDZWxsLmNsYXNzTGlzdC5hZGQoJ2VjZWxsJyk7XG4gICAgICAgIG1pc3NDZWxsLmNsYXNzTGlzdC5hZGQoJ2VjZWxsJyk7XG4gICAgICAgIHN1bmtDZWxsLmNsYXNzTGlzdC5hZGQoJ2VjZWxsJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZW1wdHlDZWxsLmNsYXNzTGlzdC5hZGQoJ3BjZWxsJyk7XG4gICAgICAgIGhpdENlbGwuY2xhc3NMaXN0LmFkZCgncGNlbGwnKTtcbiAgICAgICAgbWlzc0NlbGwuY2xhc3NMaXN0LmFkZCgncGNlbGwnKTtcbiAgICAgICAgc3Vua0NlbGwuY2xhc3NMaXN0LmFkZCgncGNlbGwnKTtcbiAgICAgICAgeW91cnNDZWxsLmNsYXNzTGlzdC5hZGQoJ3BjZWxsJyk7XG4gICAgfVxuXG4gICAgZW1wdHlDZWxsLnRleHRDb250ZW50ID0gJyc7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgICAgICBsZXQgdG1wO1xuICAgICAgICAgICAgaWYgKGJvYXJkLmJvYXJkW2ldW2pdID09IDApIHtcbiAgICAgICAgICAgICAgICB0bXAgPSBlbXB0eUNlbGwuY2xvbmVOb2RlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChib2FyZC5ib2FyZFtpXVtqXSA9PSAxKSB7XG4gICAgICAgICAgICAgICAgdG1wID0gbWlzc0NlbGwuY2xvbmVOb2RlKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgeCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgICAgICB4LnRleHRDb250ZW50ID0gJ1gnO1xuICAgICAgICAgICAgICAgIHRtcC5hcHBlbmRDaGlsZCh4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGJvYXJkLmJvYXJkW2ldW2pdLmlzU3VuaygpKSB7XG4gICAgICAgICAgICAgICAgdG1wID0gc3Vua0NlbGwuY2xvbmVOb2RlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChib2FyZC5oaXRfbGlzdC5pbmNsdWRlcyhKU09OLnN0cmluZ2lmeShbaSwgal0pKSkge1xuICAgICAgICAgICAgICAgIHRtcCA9IGhpdENlbGwuY2xvbmVOb2RlKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgeCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgICAgICB4LnRleHRDb250ZW50ID0gJ1gnO1xuICAgICAgICAgICAgICAgIHRtcC5hcHBlbmRDaGlsZCh4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKCFlbmVteSkge1xuICAgICAgICAgICAgICAgIHRtcCA9IHlvdXJzQ2VsbC5jbG9uZU5vZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRtcCA9IGVtcHR5Q2VsbC5jbG9uZU5vZGUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGVuZW15KSB7XG4gICAgICAgICAgICAgICAgdG1wLmlkID0gJ2UnXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRtcC5pZCA9ICdwJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdG1wLmlkICs9ICdyJyArIGkgKyAnYycgKyBqO1xuXG4gICAgICAgICAgICBiX2VsZS5hcHBlbmRDaGlsZCh0bXApO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBhdHRhY2hBdHRhY2tMaXN0ZW5lcihjZWxsX2lkLCBnYW1lKSB7XG4gICAgbGV0IGNlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjZWxsX2lkKTtcbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZiAoZ2FtZS5zdGF0dXMgPCBnYW1lX3N0YXR1c1tcInAxX3R1cm5cIl0pIHtcbiAgICAgICAgICAgIGFsZXJ0KCdQbGVhc2UgcGxhY2UgeW91ciBzaGlwcyBmaXJzdCEnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgaSA9IHBhcnNlSW50KGNlbGwuaWQuY2hhckF0KDIpKTtcbiAgICAgICAgbGV0IGogPSBwYXJzZUludChjZWxsLmlkLmNoYXJBdCg0KSk7XG4gICAgICAgIGxldCBhdHQgPSBnYW1lLmF0dGFjayhbaSwgal0pO1xuICAgICAgICBpZiAoYXR0ID09IGZhbHNlKSB7XG4gICAgICAgICAgICBhbGVydCgnSW52YWxpZCBBdHRhY2shJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgdGhlIGdhbWUgaXMgb3Zlciwgd2Ugc2hvdWxkIGRpc3BsYXkgdGhlIHdpbiBzY3JlZW5cbiAgICAgICAgaWYgKGdhbWUuc3RhdHVzID09IGdhbWVfc3RhdHVzLnAxX3dpbiB8fCBnYW1lLnN0YXR1cyA9PSBnYW1lX3N0YXR1cy5wMl93aW4pIHtcbiAgICAgICAgICAgIHdpbkNvbmRpdGlvbihnYW1lKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBpZiBpdHMgYWkgbW9kZSwgd2Ugc2hvdWxkIGF1dG9hdHRhY2sgdGhlIHBsYXllclxuICAgICAgICBpZiAoZ2FtZS5tb2RlID09ICdlYXN5JyB8fCBnYW1lLm1vZGUgPT0gJ2hhcmQnKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhnYW1lLmFpQXR0YWNrKCkpO1xuICAgICAgICAgICAgLy8gaWYgdGhlIGdhbWUgaXMgb3Zlciwgd2Ugc2hvdWxkIGRpc3BsYXkgdGhlIHdpbiBzY3JlZW5cbiAgICAgICAgICAgIGlmIChnYW1lLnN0YXR1cyA9PSBnYW1lX3N0YXR1cy5wMV93aW4gfHwgZ2FtZS5zdGF0dXMgPT0gZ2FtZV9zdGF0dXMucDJfd2luKSB7XG4gICAgICAgICAgICAgICAgd2luQ29uZGl0aW9uKGdhbWUpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxheW91dChnYW1lKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHVwZGF0ZSB0aGUgY2VsbCBiYXNlZCBvbiB0aGUgYXR0YWNrXG4gICAgICAgIGlmIChhdHQgPT0gJ21pc3MnKSB7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ21pc3MnKTtcbiAgICAgICAgICAgIGNvbnN0IHggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICB4LnRleHRDb250ZW50ID0gJ1gnO1xuICAgICAgICAgICAgY2VsbC5hcHBlbmRDaGlsZCh4KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChhdHQgPT0gJ3N1bmsnKSB7XG4gICAgICAgICAgICAvLyB5b3Ugc3VuayBfX19fIHNoaXAhXG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3N1bmsnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gICAgICAgICAgICBjb25zdCB4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgeC50ZXh0Q29udGVudCA9ICdYJztcbiAgICAgICAgICAgIGNlbGwuYXBwZW5kQ2hpbGQoeCk7XG4gICAgICAgIH1cbiAgICAgICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgLy8gZGlzcGxheSB0aGUgcGFzcyB0byBwbGF5ZXIgMiBzY3JlZW5cbiAgICAgICAgY29uc3QgcGFzc19zY3JlZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcGFzc19zY3JlZW4uY2xhc3NMaXN0LmFkZCgncGFzcycpO1xuICAgICAgICBwYXNzX3NjcmVlbi5jbGFzc0xpc3QuYWRkKCdnZycpXG5cbiAgICAgICAgbGV0IHBsYXllciA9IChnYW1lLnN0YXR1cyA9PSBnYW1lX3N0YXR1cy5wMV90dXJuKSA/IGdhbWUucDFfbmFtZSA6IGdhbWUucDJfbmFtZTtcblxuICAgICAgICBjb25zdCBwYXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgcGFzcy50ZXh0Q29udGVudCA9ICdQQVNTIFRPICcgKyBwbGF5ZXI7XG4gICAgICAgIHBhc3Nfc2NyZWVuLmFwcGVuZENoaWxkKHBhc3MpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBhc3Nfc2NyZWVuKTtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIGxheW91dChnYW1lKTtcbiAgICAgICAgfSwgMzAwMCk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHdpbkNvbmRpdGlvbihnYW1lKSB7XG4gICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSAnJztcbiAgICBjb25zdCBlbmRfc2NyZWVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgLy8gZGlzcGxheSB3aGljaCBwbGF5ZXIgd29uXG4gICAgY29uc3Qgd2luX2RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHdpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgd2luX2Rpdi5jbGFzc0xpc3QuYWRkKCd3aW5fZGl2Jyk7XG4gICAgd2luLnRleHRDb250ZW50ID0gKGdhbWUuc3RhdHVzID09IGdhbWVfc3RhdHVzLnAxX3dpbiA/IGdhbWUucDFfbmFtZSA6IGdhbWUucDJfbmFtZSkgKyAnIFdJTlMhJztcbiAgICAvLyBhZGQgYSBzZWN0aW9uIHRoYXQgc2F5cyBob3cgbWFueSBzaGlwcyB0aGUgZW5lbXkgaGFkIGxlZnRcbiAgICBjb25zdCBzaGlwc19sZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBzaGlwc19sZWZ0LnRleHRDb250ZW50ID0gJ2luIG9ubHkgJyArIE1hdGguZmxvb3IoZ2FtZS50dXJucyAvIDIpICsgJyB0dXJucyEnO1xuICAgIC8vIGFwcGVuZCBoZWFkZXJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBidWlsZEhlYWRlcihoZWFkZXIsIGdhbWUpO1xuICAgIGVuZF9zY3JlZW4uYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBnYW1lLnJlc2V0KCk7XG4gICAgLy8gYWRkIGEgYnV0dG9uIHRvIHJldHVyblxuICAgIGNvbnN0IHJldHVybl9idG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICByZXR1cm5fYnRuLnRleHRDb250ZW50ID0gJ1JFVFVSTic7XG4gICAgcmV0dXJuX2J0bi5jbGFzc0xpc3QuYWRkKCdyZXR1cm4nKTtcbiAgICByZXR1cm5fYnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGxheW91dChnYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuX2J0bi5jbGFzc0xpc3QuYWRkKCdyZXR1cm5idG4nKTtcbiAgICB3aW5fZGl2LmFwcGVuZENoaWxkKHdpbik7XG4gICAgd2luX2Rpdi5hcHBlbmRDaGlsZChzaGlwc19sZWZ0KTtcbiAgICB3aW5fZGl2LmFwcGVuZENoaWxkKHJldHVybl9idG4pO1xuICAgIGVuZF9zY3JlZW4uYXBwZW5kQ2hpbGQod2luX2Rpdik7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbmRfc2NyZWVuKTtcblxuXG59XG5cbmZ1bmN0aW9uIGJ1aWxkUmVzZXRTZWN0aW9uKGdhbWUsIHJlc2V0X3NlY3QpIHtcbiAgICAvLyBwdnAgbW9kZSBidG5cbiAgICBjb25zdCBwdnAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBwdnAudGV4dENvbnRlbnQgPSAnUFZQIE1PREUnO1xuICAgIHB2cC5jbGFzc0xpc3QuYWRkKCdwdnBidG4nKTtcbiAgICByZXNldF9zZWN0LmFwcGVuZENoaWxkKHB2cCk7XG4gICAgcHZwLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGdhbWUucmVzZXQoKTtcbiAgICAgICAgZ2FtZS5tb2RlID0gJ3B2cCc7XG4gICAgICAgIGdhbWUucDFfbmFtZSA9IHByb21wdCgnUGxheWVyIDEsIGVudGVyIHlvdXIgbmFtZTonKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICBnYW1lLnAyX25hbWUgPSBwcm9tcHQoJ1BsYXllciAyLCBlbnRlciB5b3VyIG5hbWU6JykudG9VcHBlckNhc2UoKTtcbiAgICAgICAgbGF5b3V0KGdhbWUpO1xuICAgIH1cblxuICAgIC8vIGVhc3kgbW9kZSBidG5cbiAgICBjb25zdCBlYXN5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZWFzeS50ZXh0Q29udGVudCA9ICdFQVNZIE1PREUnO1xuICAgIGVhc3kuY2xhc3NMaXN0LmFkZCgnZWFzeWJ0bicpO1xuICAgIHJlc2V0X3NlY3QuYXBwZW5kQ2hpbGQoZWFzeSk7XG4gICAgZWFzeS5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICBnYW1lLnJlc2V0KCk7XG4gICAgICAgIGdhbWUubW9kZSA9ICdlYXN5JztcbiAgICAgICAgbGF5b3V0KGdhbWUpO1xuICAgIH1cbiAgICAvLyBoYXJkIG1vZGUgYnRuXG4gICAgY29uc3QgaGFyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGhhcmQudGV4dENvbnRlbnQgPSAnSEFSRCBNT0RFJztcbiAgICBoYXJkLmNsYXNzTGlzdC5hZGQoJ2hhcmRidG4nKTtcbiAgICByZXNldF9zZWN0LmFwcGVuZENoaWxkKGhhcmQpO1xuICAgIGhhcmQub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgZ2FtZS5yZXNldCgpO1xuICAgICAgICBnYW1lLm1vZGUgPSAnaGFyZCc7XG4gICAgICAgIGxheW91dChnYW1lKTtcbiAgICB9XG5cbiAgICBjb25zdCByZXNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHJlc2V0LnRleHRDb250ZW50ID0gJ1JFU0VUJztcbiAgICByZXNldC5jbGFzc0xpc3QuYWRkKCdyZXNldGJ0bicpO1xuICAgIHJlc2V0X3NlY3QuYXBwZW5kQ2hpbGQocmVzZXQpO1xuICAgIHJlc2V0Lm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGdhbWUucmVzZXQoKTtcbiAgICAgICAgbGF5b3V0KGdhbWUpO1xuICAgIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1UbyBEbz09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyByZWRvIGxvZ2ljLnRlc3QuanNcbi8vIGZpeCBob3ZlciBmdW5jdGlvbmFsaXR5XG4vLyBjbGVhbiB1cCBsb2dpYy5qc1xuLy8gd3JpdGUgb3V0IHJlYWRtZSB3aXRoIGxvZ2ljIGZvciBwcm9iYWJpbGlzdGljIChoYXJkKSBtb2RlXG4vLyAtLS1ldmFsdWF0ZSB1c2luZyBiYXllc2lhbiBzZWFyY2ggYWxnb3JpdGhtXG4vLyAtLS1ldmFsdWF0ZSB1c2luZyBncmVlZHkgc2VhcmNoIGFsZ29yaXRobVxuLy8gZ2V0IHRoZSBudW1iZXJzIG9uIGVhY2ggYXBwcm9hY2ggd2l0aCBhbiBhdXRvbWF0ZWQgdGVzdFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1GdXR1cmUgRmVhdHVyZXM9PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gY29ubmVjdCB0byBiYWNrZW5kIHdpdGggc2lnbi1pbiwgbGVhZGVyYm9hcmQsIGFuZCBzdGF0c1xuLy8gYWRkIG5ldHdvcmsgcHZwIG1vZGVcbi8vIGFkZCBhaSBtb2RlIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9