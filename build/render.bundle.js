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
___CSS_LOADER_EXPORT___.push([module.id, "/* Custom Font */\n@font-face {\n  font-family: \"Open Sans\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  font-weight: 1000;\n  font-style: normal;\n}\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Open Sans\";\n}\n\nhtml,\nbody {\n  width: 100%;\n  height: 100%;\n}\n\nul,\nli {\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n}\n\nbutton,\ninput {\n  border: none;\n  outline: none;\n}\n\nbody {\n  display: grid;\n  grid-template-rows: 1fr 9fr 1fr;\n}\n\n.head {\n  font-size: 2em;\n  display: grid;\n  grid-template-columns: 1fr 6fr 1fr;\n  place-items: center;\n  color: ivory;\n  background-color: rgb(20, 0, 102);\n  transition: all 0.5s ease;\n  height: 100px;\n}\n.head .status {\n  font-size: medium;\n  padding: 15px;\n}\n.head button {\n  font-size: 0.5em;\n  height: 40px;\n  width: 60%;\n  color: rgb(20, 0, 102);\n  background-color: ivory;\n  box-shadow: 2px 2px 2px rgb(20, 0, 102);\n  transition: all 0.5s ease;\n  background-color: aliceblue;\n  color: black;\n}\n.head button:hover {\n  cursor: pointer;\n  color: rgb(20, 0, 102);\n  background-color: ivory;\n  box-shadow: 2px 2px 2px rgb(20, 0, 102);\n  transition: all 0.5s ease;\n}\n\n.foot {\n  display: flex;\n  background-color: rgb(56, 55, 55);\n  color: ivory;\n  justify-content: center;\n  align-items: center;\n}\n\n.body {\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;\n  height: 100%;\n}\n.body .info {\n  display: grid;\n  grid-template-rows: 1fr 2fr;\n}\n.body .info .boat {\n  cursor: pointer;\n}\n.body .info .key {\n  align-self: center;\n  justify-self: center;\n  border: 2px solid rgb(20, 0, 102);\n  padding: 2px 10px 5px 10px;\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n}\n.body .info .key .key_sect {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 15px;\n}\n.body .info .key .sunk {\n  width: 50px;\n  height: 25px;\n  background-color: rgb(154, 9, 9);\n  border: 2px solid ivory;\n}\n.body .info .key h2 {\n  font-size: 25px;\n}\n.body .info .key .hit {\n  color: rgb(154, 9, 9);\n}\n.body .info .dock {\n  justify-self: center;\n  width: 60%;\n}\n.body .info .dock h2,\n.body .info .dock h5 {\n  text-align: center;\n}\n.body .info .dock h2 {\n  color: rgb(20, 0, 102);\n}\n.body .info .dock .boat_lot {\n  border: 2px solid rgb(20, 0, 102);\n  padding: 8px;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.body .info .dock .boat {\n  height: 30px;\n  background-color: black;\n}\n.body .info #rp {\n  margin-bottom: 15px;\n  justify-self: flex-end;\n  height: 50px;\n  width: 80%;\n  background-color: rgb(20, 0, 102);\n  color: ivory;\n}\n.body .info #rp:hover {\n  cursor: pointer;\n  background-color: ivory;\n  border: 2px solid rgb(20, 0, 102);\n  color: rgb(20, 0, 102);\n}\n.body .game {\n  display: grid;\n  place-items: center;\n}\n.body .game .fullboard {\n  place-items: center;\n  height: 95%;\n  width: 75%;\n  background-color: rgb(20, 0, 102);\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n  row-gap: 5px;\n}\n.body .game .board {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  width: 90%;\n  height: 90%;\n  background-color: black;\n}\n.body .game .cell {\n  margin: 1px;\n  padding: none;\n  box-sizing: border-box;\n}\n.body .game p {\n  padding: 0px;\n  margin: 0px;\n  border: 0px;\n  align-self: center;\n  justify-self: center;\n  margin-bottom: -50px;\n  text-align: center;\n}\n.body .game .empty {\n  background-color: ivory;\n}\n.body .game .empty .hovering {\n  background-color: gray;\n}\n.body .game .miss {\n  background-color: ivory;\n  color: black;\n}\n.body .game .sunk {\n  background-color: rgb(154, 9, 9);\n}\n.body .game .yours {\n  background-color: black;\n}\n.body .game .yours:hover {\n  box-sizing: border-box;\n  background-color: ivory;\n  cursor: pointer;\n}\n.body .game .hit {\n  font-size: 1em;\n  background-color: black;\n  color: rgb(154, 9, 9);\n  font-weight: bolder;\n}\n.body .game .hovering {\n  background-color: lightslategray;\n}\n.body .game .hovering:hover {\n  cursor: pointer;\n}\n.body .game .ecell:hover {\n  cursor: crosshair;\n  transition: all 0.2s ease;\n  background-color: white;\n}\n.body .reset {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: center;\n}\n.body .reset button {\n  margin-bottom: 15px;\n  justify-self: flex-end;\n  height: 50px;\n  width: 80%;\n  background-color: rgb(154, 9, 9);\n  color: ivory;\n}\n.body .reset button:hover {\n  cursor: pointer;\n  background-color: ivory;\n  border: 2px solid rgb(154, 9, 9);\n  color: rgb(20, 0, 102);\n}\n.body .reset .hardbtn {\n  background-color: black;\n}\n.body .reset .hardbtn:hover {\n  cursor: pointer;\n  background-color: ivory;\n  border: 2px solid black;\n  color: black;\n}\n.body .reset .easybtn {\n  background-color: darkgreen;\n}\n.body .reset .easybtn:hover {\n  cursor: pointer;\n  background-color: ivory;\n  border: 2px solid darkgreen;\n  color: darkgreen;\n}\n.body .reset .pvpbtn {\n  background-color: rgb(20, 0, 102);\n}\n.body .reset .pvpbtn:hover {\n  cursor: pointer;\n  background-color: ivory;\n  border: 2px solid rgb(20, 0, 102);\n  color: rgb(20, 0, 102);\n}\n\n.returnbtn {\n  min-height: 50px;\n  background-color: black;\n  color: whitesmoke;\n}\n.returnbtn:hover {\n  cursor: pointer;\n  background-color: ivory;\n  border: 2px solid black;\n  color: black;\n}\n\n.gg {\n  display: grid;\n  width: 100%;\n  height: 100%;\n  font-size: 3em;\n  place-content: center;\n}\n\n.win_div {\n  display: grid;\n  width: 100%;\n  font-size: 3em;\n  place-content: center;\n}", "",{"version":3,"sources":["webpack://./src/_formatting.scss","webpack://./src/style.scss"],"names":[],"mappings":"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","sourcesContent":["/* Custom Font */\n@font-face {\n  font-family: \"Open Sans\";\n  src: url(\"assets/Open_Sans/OpenSans-Italic-VariableFont_wdth,wght.ttf\"),\n    url(\"assets/Open_Sans/OpenSans-Italic-VariableFont_wdth,wght.ttf\");\n  font-weight: 1000;\n  font-style: normal;\n}\n\n// setting basic element properties\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Open Sans\";\n}\n\nhtml,\nbody {\n  width: 100%;\n  height: 100%;\n}\n\nul,\nli {\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n}\n\nbutton,\ninput {\n  border: none;\n  outline: none;\n}\n","@use \"formatting\";\n\n// theme colors\n$lightcolor: ivory;\n$darkcolor: rgb(20, 0, 102);\n\n// setting theme\n@mixin theme($dark: true) {\n  @if ($dark) {\n    color: $lightcolor;\n    background-color: $darkcolor;\n    // box-shadow: 2px 2px 2px $lightcolor;\n  } @else {\n    color: $darkcolor;\n    background-color: $lightcolor;\n    box-shadow: 2px 2px 2px $darkcolor;\n  }\n  transition: all 0.5s ease;\n}\n\nbody {\n  display: grid;\n  grid-template-rows: 1fr 9fr 1fr;\n}\n\n.head{\n  font-size: 2em;\n  display: grid;\n  grid-template-columns: 1fr 6fr 1fr;\n  place-items: center;\n  @include theme;\n  height: 100px;\n  .status {\n    font-size: medium;\n    padding: 15px;\n  }\n  button {\n    font-size: .5em;\n    height: 40px;\n    width: 60%;\n    @include theme(false);\n    background-color: aliceblue;\n    color: black;\n    &:hover {\n      cursor: pointer;\n      @include theme(false);\n    }\n  }\n}\n\n.foot{\n  display: flex;\n  background-color: rgb(56, 55, 55);\n  color: $lightcolor;\n  justify-content: center;\n  align-items: center;\n}\n\n.body{\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;\n  height: 100%;\n\n  .info {\n    display: grid;\n    grid-template-rows: 1fr 2fr;\n    .boat {\n      cursor: pointer;\n    }\n    .key{\n      align-self: center;\n      justify-self: center;\n      border: 2px solid $darkcolor;\n      padding: 2px 10px 5px 10px;\n      width: 50%;\n      display: flex;\n      flex-direction: column;\n      .key_sect {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        gap: 15px;\n      }\n      .sunk {\n        width: 50px;\n        height: 25px;\n        background-color: rgb(154, 9, 9);\n        border: 2px solid $lightcolor;\n\n      }\n\n      h2{\n        font-size: 25px;\n      }\n      .hit{\n        color: rgb(154, 9, 9);\n      }\n    }\n\n    .dock{\n      justify-self: center;\n      h2,\n      h5 {\n        text-align: center;\n      }\n      h2 {\n        color:rgb(20, 0, 102);\n      }\n      width: 60%;\n      .boat_lot{\n        border: 2px solid $darkcolor;\n        padding: 8px;\n        display: flex;\n        flex-direction: column;\n        gap: 5px;\n      }\n      .boat{\n        height: 30px;\n        background-color: black;\n      }\n    }\n\n    #rp {\n      margin-bottom: 15px;\n      justify-self: flex-end;\n      height: 50px;\n      width: 80%;\n      background-color: $darkcolor;\n      color: $lightcolor;\n      &:hover{\n        cursor: pointer;\n        background-color: $lightcolor;\n        border: 2px solid $darkcolor;\n        color: $darkcolor;\n      }\n    }\n  }\n\n  .game{\n    display: grid;\n    place-items: center;\n    .fullboard {\n      place-items: center;\n      height: 95%;\n      width: 75%;\n      background-color: $darkcolor;\n      display: grid;\n      grid-template-rows: 1fr 1fr;\n      row-gap: 5px;\n    }\n    .board{\n      display: grid;\n      grid-template-columns: repeat(10, 1fr);\n      width:90%;\n      height:90%;\n      background-color: black;\n      \n    }\n    .cell {\n      margin: 1px;\n      padding: none;\n      box-sizing: border-box;\n    }\n    p{\n      padding: 0px;\n      margin: 0px;\n      border: 0px;\n      align-self: center;\n      justify-self: center;\n      margin-bottom: -50px;\n      text-align: center;\n    }\n    .empty {\n      background-color: $lightcolor;\n      .hovering {\n        background-color: gray;\n      }\n    }\n  \n    .miss {\n      background-color: $lightcolor;\n      color: black;\n    }\n    .sunk {\n      background-color: rgb(154, 9, 9);\n    }\n    .yours {\n      background-color: black;\n      &:hover {\n        box-sizing: border-box;\n        background-color: $lightcolor;\n        cursor: pointer;\n      }\n    }\n    .hit {\n      font-size: 1em;\n      background-color: black;\n      color: rgb(154, 9, 9);\n      font-weight: bolder;\n    }\n    .hovering {\n      background-color: lightslategray;\n      &:hover{\n        cursor: pointer;\n      }\n    }\n    .ecell {\n      &:hover {\n        cursor: crosshair;\n        transition: all 0.2s ease;\n        background-color: white;\n      }\n    }\n  }\n  \n  .reset {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    align-items: center;\n    button {\n      margin-bottom: 15px;\n      justify-self: flex-end;\n      height: 50px;\n      width: 80%;\n      background-color: rgb(154, 9, 9);\n      color: $lightcolor;\n      &:hover{\n        cursor: pointer;\n        background-color: $lightcolor;\n        border: 2px solid rgb(154, 9, 9);\n        color: $darkcolor;\n      }\n    }\n    .hardbtn {\n      background-color: black;\n      &:hover{\n        cursor: pointer;\n        background-color: $lightcolor;\n        border: 2px solid black;\n        color: black;\n      }\n    }\n    .easybtn {\n      background-color: darkgreen;\n      &:hover{\n        cursor: pointer;\n        background-color: $lightcolor;\n        border: 2px solid darkgreen;\n        color: darkgreen;\n      }\n    }\n    .pvpbtn {\n      background-color: $darkcolor;\n      &:hover{\n        cursor: pointer;\n        background-color: $lightcolor;\n        border: 2px solid $darkcolor;\n        color: $darkcolor;\n      }\n    }\n  }\n}\n\n.returnbtn {\n  min-height: 50px;\n  background-color: black;\n  color: whitesmoke;\n  &:hover{\n    cursor: pointer;\n    background-color: $lightcolor;\n    border: 2px solid black;\n    color: black;\n  }\n}\n\n.gg{\n  display: grid;\n  width: 100%;\n  height: 100%;\n  font-size: 3em;\n  place-content: center;\n}\n\n.win_div{\n  display: grid;\n  width: 100%;\n  font-size: 3em;\n  place-content: center;\n}"],"sourceRoot":""}]);
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
    // dock.appendChild(dock_footer);
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
            // alert('Invalid Attack!');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNEJBQTRCLGlCQUFpQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5QkFBeUI7QUFDekI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixRQUFRO0FBQ3BDLGdDQUFnQyxRQUFRO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyx1QkFBdUI7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLE9BQU87QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsT0FBTztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5bUJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBc0I7QUFDZ0I7O0FBRXRDO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsK0NBQVc7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0IsK0NBQVc7QUFDakM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsUUFBUTtBQUM1Qix3QkFBd0IsUUFBUTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixzQkFBc0I7QUFDMUM7QUFDQTtBQUNBLGdEQUFnRCxZQUFZO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsb0JBQW9CLFFBQVE7QUFDNUIsd0JBQXdCLFFBQVE7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLCtDQUFXO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsK0NBQVcsMEJBQTBCLCtDQUFXO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLCtDQUFXLDBCQUEwQiwrQ0FBVztBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDLCtDQUFXOztBQUVoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQywrQ0FBVztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLnNjc3M/NzViYSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbG9naWMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3JlbmRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiYXNzZXRzL09wZW5fU2Fucy9PcGVuU2Fucy1JdGFsaWMtVmFyaWFibGVGb250X3dkdGgsd2dodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBDdXN0b20gRm9udCAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpLCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDEwMDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCI7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxudWwsXFxubGkge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbmJ1dHRvbixcXG5pbnB1dCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA5ZnIgMWZyO1xcbn1cXG5cXG4uaGVhZCB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA2ZnIgMWZyO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiBpdm9yeTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMCwgMCwgMTAyKTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbn1cXG4uaGVhZCAuc3RhdHVzIHtcXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xcbiAgcGFkZGluZzogMTVweDtcXG59XFxuLmhlYWQgYnV0dG9uIHtcXG4gIGZvbnQtc2l6ZTogMC41ZW07XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB3aWR0aDogNjAlO1xcbiAgY29sb3I6IHJnYigyMCwgMCwgMTAyKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGl2b3J5O1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCAycHggcmdiKDIwLCAwLCAxMDIpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuLmhlYWQgYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiByZ2IoMjAsIDAsIDEwMik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpdm9yeTtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggMnB4IHJnYigyMCwgMCwgMTAyKTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XFxufVxcblxcbi5mb290IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTYsIDU1LCA1NSk7XFxuICBjb2xvcjogaXZvcnk7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ib2R5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgMWZyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uYm9keSAuaW5mbyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyO1xcbn1cXG4uYm9keSAuaW5mbyAuYm9hdCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5ib2R5IC5pbmZvIC5rZXkge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjAsIDAsIDEwMik7XFxuICBwYWRkaW5nOiAycHggMTBweCA1cHggMTBweDtcXG4gIHdpZHRoOiA1MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLmJvZHkgLmluZm8gLmtleSAua2V5X3NlY3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IDE1cHg7XFxufVxcbi5ib2R5IC5pbmZvIC5rZXkgLnN1bmsge1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU0LCA5LCA5KTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGl2b3J5O1xcbn1cXG4uYm9keSAuaW5mbyAua2V5IGgyIHtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG59XFxuLmJvZHkgLmluZm8gLmtleSAuaGl0IHtcXG4gIGNvbG9yOiByZ2IoMTU0LCA5LCA5KTtcXG59XFxuLmJvZHkgLmluZm8gLmRvY2sge1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICB3aWR0aDogNjAlO1xcbn1cXG4uYm9keSAuaW5mbyAuZG9jayBoMixcXG4uYm9keSAuaW5mbyAuZG9jayBoNSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5ib2R5IC5pbmZvIC5kb2NrIGgyIHtcXG4gIGNvbG9yOiByZ2IoMjAsIDAsIDEwMik7XFxufVxcbi5ib2R5IC5pbmZvIC5kb2NrIC5ib2F0X2xvdCB7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjAsIDAsIDEwMik7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNXB4O1xcbn1cXG4uYm9keSAuaW5mbyAuZG9jayAuYm9hdCB7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuLmJvZHkgLmluZm8gI3JwIHtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgd2lkdGg6IDgwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMCwgMCwgMTAyKTtcXG4gIGNvbG9yOiBpdm9yeTtcXG59XFxuLmJvZHkgLmluZm8gI3JwOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGl2b3J5O1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDIwLCAwLCAxMDIpO1xcbiAgY29sb3I6IHJnYigyMCwgMCwgMTAyKTtcXG59XFxuLmJvZHkgLmdhbWUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5ib2R5IC5nYW1lIC5mdWxsYm9hcmQge1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogOTUlO1xcbiAgd2lkdGg6IDc1JTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMCwgMCwgMTAyKTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICByb3ctZ2FwOiA1cHg7XFxufVxcbi5ib2R5IC5nYW1lIC5ib2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICB3aWR0aDogOTAlO1xcbiAgaGVpZ2h0OiA5MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuLmJvZHkgLmdhbWUgLmNlbGwge1xcbiAgbWFyZ2luOiAxcHg7XFxuICBwYWRkaW5nOiBub25lO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuLmJvZHkgLmdhbWUgcCB7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBtYXJnaW46IDBweDtcXG4gIGJvcmRlcjogMHB4O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAtNTBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmJvZHkgLmdhbWUgLmVtcHR5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGl2b3J5O1xcbn1cXG4uYm9keSAuZ2FtZSAuZW1wdHkgLmhvdmVyaW5nIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxufVxcbi5ib2R5IC5nYW1lIC5taXNzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGl2b3J5O1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG4uYm9keSAuZ2FtZSAuc3VuayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU0LCA5LCA5KTtcXG59XFxuLmJvZHkgLmdhbWUgLnlvdXJzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG4uYm9keSAuZ2FtZSAueW91cnM6aG92ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGl2b3J5O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uYm9keSAuZ2FtZSAuaGl0IHtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogcmdiKDE1NCwgOSwgOSk7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG4uYm9keSAuZ2FtZSAuaG92ZXJpbmcge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzbGF0ZWdyYXk7XFxufVxcbi5ib2R5IC5nYW1lIC5ob3ZlcmluZzpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5ib2R5IC5nYW1lIC5lY2VsbDpob3ZlciB7XFxuICBjdXJzb3I6IGNyb3NzaGFpcjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuLmJvZHkgLnJlc2V0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5ib2R5IC5yZXNldCBidXR0b24ge1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICB3aWR0aDogODAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1NCwgOSwgOSk7XFxuICBjb2xvcjogaXZvcnk7XFxufVxcbi5ib2R5IC5yZXNldCBidXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaXZvcnk7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTU0LCA5LCA5KTtcXG4gIGNvbG9yOiByZ2IoMjAsIDAsIDEwMik7XFxufVxcbi5ib2R5IC5yZXNldCAuaGFyZGJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuLmJvZHkgLnJlc2V0IC5oYXJkYnRuOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGl2b3J5O1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcbi5ib2R5IC5yZXNldCAuZWFzeWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JlZW47XFxufVxcbi5ib2R5IC5yZXNldCAuZWFzeWJ0bjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpdm9yeTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGRhcmtncmVlbjtcXG4gIGNvbG9yOiBkYXJrZ3JlZW47XFxufVxcbi5ib2R5IC5yZXNldCAucHZwYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMCwgMCwgMTAyKTtcXG59XFxuLmJvZHkgLnJlc2V0IC5wdnBidG46aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaXZvcnk7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjAsIDAsIDEwMik7XFxuICBjb2xvcjogcmdiKDIwLCAwLCAxMDIpO1xcbn1cXG5cXG4ucmV0dXJuYnRuIHtcXG4gIG1pbi1oZWlnaHQ6IDUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbn1cXG4ucmV0dXJuYnRuOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGl2b3J5O1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5nZyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBmb250LXNpemU6IDNlbTtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLndpbl9kaXYge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiAzZW07XFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9fZm9ybWF0dGluZy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxnQkFBQTtBQUNBO0VBQ0Usd0JBQUE7RUFDQSxxRkFBQTtFQUVBLGlCQUFBO0VBQ0Esa0JBQUE7QUNBRjtBRElBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLHdCQUFBO0FDRkY7O0FES0E7O0VBRUUsV0FBQTtFQUNBLFlBQUE7QUNGRjs7QURLQTs7RUFFRSxnQkFBQTtBQ0ZGOztBREtBO0VBQ0UscUJBQUE7QUNGRjs7QURLQTs7RUFFRSxZQUFBO0VBQ0EsYUFBQTtBQ0ZGOztBQWJBO0VBQ0UsYUFBQTtFQUNBLCtCQUFBO0FBZ0JGOztBQWJBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0VBcEJFLFlBTlM7RUFPVCxpQ0FOUTtFQWFWLHlCQUFBO0VBY0EsYUFBQTtBQWtCRjtBQWpCRTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtBQW1CSjtBQWpCRTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUExQkEsc0JBVFE7RUFVUix1QkFYUztFQVlULHVDQUFBO0VBRUYseUJBQUE7RUF3QkUsMkJBQUE7RUFDQSxZQUFBO0FBc0JKO0FBckJJO0VBQ0UsZUFBQTtFQS9CRixzQkFUUTtFQVVSLHVCQVhTO0VBWVQsdUNBQUE7RUFFRix5QkFBQTtBQXNERjs7QUFyQkE7RUFDRSxhQUFBO0VBQ0EsaUNBQUE7RUFDQSxZQWxEVztFQW1EWCx1QkFBQTtFQUNBLG1CQUFBO0FBd0JGOztBQXJCQTtFQUNFLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLFlBQUE7QUF3QkY7QUF0QkU7RUFDRSxhQUFBO0VBQ0EsMkJBQUE7QUF3Qko7QUF2Qkk7RUFDRSxlQUFBO0FBeUJOO0FBdkJJO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGlDQUFBO0VBQ0EsMEJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBeUJOO0FBeEJNO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxTQUFBO0FBMEJSO0FBeEJNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLHVCQUFBO0FBMEJSO0FBdEJNO0VBQ0UsZUFBQTtBQXdCUjtBQXRCTTtFQUNFLHFCQUFBO0FBd0JSO0FBcEJJO0VBQ0Usb0JBQUE7RUFRQSxVQUFBO0FBZU47QUF0Qk07O0VBRUUsa0JBQUE7QUF3QlI7QUF0Qk07RUFDRSxzQkFBQTtBQXdCUjtBQXJCTTtFQUNFLGlDQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7QUF1QlI7QUFyQk07RUFDRSxZQUFBO0VBQ0EsdUJBQUE7QUF1QlI7QUFuQkk7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxpQ0EzSE07RUE0SE4sWUE3SE87QUFrSmI7QUFwQk07RUFDRSxlQUFBO0VBQ0EsdUJBaElLO0VBaUlMLGlDQUFBO0VBQ0Esc0JBaklJO0FBdUpaO0FBakJFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBbUJKO0FBbEJJO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGlDQTdJTTtFQThJTixhQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0FBb0JOO0FBbEJJO0VBQ0UsYUFBQTtFQUNBLHNDQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtBQW9CTjtBQWpCSTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFtQk47QUFqQkk7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQW1CTjtBQWpCSTtFQUNFLHVCQTFLTztBQTZMYjtBQWxCTTtFQUNFLHNCQUFBO0FBb0JSO0FBaEJJO0VBQ0UsdUJBakxPO0VBa0xQLFlBQUE7QUFrQk47QUFoQkk7RUFDRSxnQ0FBQTtBQWtCTjtBQWhCSTtFQUNFLHVCQUFBO0FBa0JOO0FBakJNO0VBQ0Usc0JBQUE7RUFDQSx1QkEzTEs7RUE0TEwsZUFBQTtBQW1CUjtBQWhCSTtFQUNFLGNBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFrQk47QUFoQkk7RUFDRSxnQ0FBQTtBQWtCTjtBQWpCTTtFQUNFLGVBQUE7QUFtQlI7QUFmTTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtBQWlCUjtBQVpFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQWNKO0FBYkk7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBL05PO0FBOE9iO0FBZE07RUFDRSxlQUFBO0VBQ0EsdUJBbE9LO0VBbU9MLGdDQUFBO0VBQ0Esc0JBbk9JO0FBbVBaO0FBYkk7RUFDRSx1QkFBQTtBQWVOO0FBZE07RUFDRSxlQUFBO0VBQ0EsdUJBM09LO0VBNE9MLHVCQUFBO0VBQ0EsWUFBQTtBQWdCUjtBQWJJO0VBQ0UsMkJBQUE7QUFlTjtBQWRNO0VBQ0UsZUFBQTtFQUNBLHVCQXBQSztFQXFQTCwyQkFBQTtFQUNBLGdCQUFBO0FBZ0JSO0FBYkk7RUFDRSxpQ0F6UE07QUF3UVo7QUFkTTtFQUNFLGVBQUE7RUFDQSx1QkE3UEs7RUE4UEwsaUNBQUE7RUFDQSxzQkE5UEk7QUE4UVo7O0FBVkE7RUFDRSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUFhRjtBQVpFO0VBQ0UsZUFBQTtFQUNBLHVCQTNRUztFQTRRVCx1QkFBQTtFQUNBLFlBQUE7QUFjSjs7QUFWQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQWFGOztBQVZBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUFhRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBDdXN0b20gRm9udCAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiO1xcbiAgc3JjOiB1cmwoXFxcImFzc2V0cy9PcGVuX1NhbnMvT3BlblNhbnMtSXRhbGljLVZhcmlhYmxlRm9udF93ZHRoLHdnaHQudHRmXFxcIiksXFxuICAgIHVybChcXFwiYXNzZXRzL09wZW5fU2Fucy9PcGVuU2Fucy1JdGFsaWMtVmFyaWFibGVGb250X3dkdGgsd2dodC50dGZcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiAxMDAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG4vLyBzZXR0aW5nIGJhc2ljIGVsZW1lbnQgcHJvcGVydGllc1xcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCI7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxudWwsXFxubGkge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbmJ1dHRvbixcXG5pbnB1dCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cIixcIkB1c2UgXFxcImZvcm1hdHRpbmdcXFwiO1xcblxcbi8vIHRoZW1lIGNvbG9yc1xcbiRsaWdodGNvbG9yOiBpdm9yeTtcXG4kZGFya2NvbG9yOiByZ2IoMjAsIDAsIDEwMik7XFxuXFxuLy8gc2V0dGluZyB0aGVtZVxcbkBtaXhpbiB0aGVtZSgkZGFyazogdHJ1ZSkge1xcbiAgQGlmICgkZGFyaykge1xcbiAgICBjb2xvcjogJGxpZ2h0Y29sb3I7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRkYXJrY29sb3I7XFxuICAgIC8vIGJveC1zaGFkb3c6IDJweCAycHggMnB4ICRsaWdodGNvbG9yO1xcbiAgfSBAZWxzZSB7XFxuICAgIGNvbG9yOiAkZGFya2NvbG9yO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHRjb2xvcjtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAycHggJGRhcmtjb2xvcjtcXG4gIH1cXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDlmciAxZnI7XFxufVxcblxcbi5oZWFke1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNmZyIDFmcjtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICBAaW5jbHVkZSB0aGVtZTtcXG4gIGhlaWdodDogMTAwcHg7XFxuICAuc3RhdHVzIHtcXG4gICAgZm9udC1zaXplOiBtZWRpdW07XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICB9XFxuICBidXR0b24ge1xcbiAgICBmb250LXNpemU6IC41ZW07XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgQGluY2x1ZGUgdGhlbWUoZmFsc2UpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgJjpob3ZlciB7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIEBpbmNsdWRlIHRoZW1lKGZhbHNlKTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4uZm9vdHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTYsIDU1LCA1NSk7XFxuICBjb2xvcjogJGxpZ2h0Y29sb3I7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ib2R5e1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmciAxZnI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuXFxuICAuaW5mbyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmcjtcXG4gICAgLmJvYXQge1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcbiAgICAua2V5e1xcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAkZGFya2NvbG9yO1xcbiAgICAgIHBhZGRpbmc6IDJweCAxMHB4IDVweCAxMHB4O1xcbiAgICAgIHdpZHRoOiA1MCU7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIC5rZXlfc2VjdCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgIGdhcDogMTVweDtcXG4gICAgICB9XFxuICAgICAgLnN1bmsge1xcbiAgICAgICAgd2lkdGg6IDUwcHg7XFxuICAgICAgICBoZWlnaHQ6IDI1cHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU0LCA5LCA5KTtcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRsaWdodGNvbG9yO1xcblxcbiAgICAgIH1cXG5cXG4gICAgICBoMntcXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAgICB9XFxuICAgICAgLmhpdHtcXG4gICAgICAgIGNvbG9yOiByZ2IoMTU0LCA5LCA5KTtcXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgLmRvY2t7XFxuICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgICAgaDIsXFxuICAgICAgaDUge1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgIH1cXG4gICAgICBoMiB7XFxuICAgICAgICBjb2xvcjpyZ2IoMjAsIDAsIDEwMik7XFxuICAgICAgfVxcbiAgICAgIHdpZHRoOiA2MCU7XFxuICAgICAgLmJvYXRfbG90e1xcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgJGRhcmtjb2xvcjtcXG4gICAgICAgIHBhZGRpbmc6IDhweDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgZ2FwOiA1cHg7XFxuICAgICAgfVxcbiAgICAgIC5ib2F0e1xcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgICNycCB7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gICAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xcbiAgICAgIGhlaWdodDogNTBweDtcXG4gICAgICB3aWR0aDogODAlO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkYXJrY29sb3I7XFxuICAgICAgY29sb3I6ICRsaWdodGNvbG9yO1xcbiAgICAgICY6aG92ZXJ7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHRjb2xvcjtcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRkYXJrY29sb3I7XFxuICAgICAgICBjb2xvcjogJGRhcmtjb2xvcjtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5nYW1le1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgICAuZnVsbGJvYXJkIHtcXG4gICAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgICAgIGhlaWdodDogOTUlO1xcbiAgICAgIHdpZHRoOiA3NSU7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRhcmtjb2xvcjtcXG4gICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gICAgICByb3ctZ2FwOiA1cHg7XFxuICAgIH1cXG4gICAgLmJvYXJke1xcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICAgICAgd2lkdGg6OTAlO1xcbiAgICAgIGhlaWdodDo5MCU7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgICAgXFxuICAgIH1cXG4gICAgLmNlbGwge1xcbiAgICAgIG1hcmdpbjogMXB4O1xcbiAgICAgIHBhZGRpbmc6IG5vbmU7XFxuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgfVxcbiAgICBwe1xcbiAgICAgIHBhZGRpbmc6IDBweDtcXG4gICAgICBtYXJnaW46IDBweDtcXG4gICAgICBib3JkZXI6IDBweDtcXG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogLTUwcHg7XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxuICAgIC5lbXB0eSB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0Y29sb3I7XFxuICAgICAgLmhvdmVyaW5nIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxuICAgICAgfVxcbiAgICB9XFxuICBcXG4gICAgLm1pc3Mge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodGNvbG9yO1xcbiAgICAgIGNvbG9yOiBibGFjaztcXG4gICAgfVxcbiAgICAuc3VuayB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1NCwgOSwgOSk7XFxuICAgIH1cXG4gICAgLnlvdXJzIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgICAmOmhvdmVyIHtcXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHRjb2xvcjtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICB9XFxuICAgIH1cXG4gICAgLmhpdCB7XFxuICAgICAgZm9udC1zaXplOiAxZW07XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgICAgY29sb3I6IHJnYigxNTQsIDksIDkpO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIH1cXG4gICAgLmhvdmVyaW5nIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNsYXRlZ3JheTtcXG4gICAgICAmOmhvdmVye1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgICAuZWNlbGwge1xcbiAgICAgICY6aG92ZXIge1xcbiAgICAgICAgY3Vyc29yOiBjcm9zc2hhaXI7XFxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuICBcXG4gIC5yZXNldCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJ1dHRvbiB7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gICAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xcbiAgICAgIGhlaWdodDogNTBweDtcXG4gICAgICB3aWR0aDogODAlO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTQsIDksIDkpO1xcbiAgICAgIGNvbG9yOiAkbGlnaHRjb2xvcjtcXG4gICAgICAmOmhvdmVye1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0Y29sb3I7XFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTU0LCA5LCA5KTtcXG4gICAgICAgIGNvbG9yOiAkZGFya2NvbG9yO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgICAuaGFyZGJ0biB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgICAgJjpob3ZlcntcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodGNvbG9yO1xcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgICAgICBjb2xvcjogYmxhY2s7XFxuICAgICAgfVxcbiAgICB9XFxuICAgIC5lYXN5YnRuIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JlZW47XFxuICAgICAgJjpob3ZlcntcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodGNvbG9yO1xcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgZGFya2dyZWVuO1xcbiAgICAgICAgY29sb3I6IGRhcmtncmVlbjtcXG4gICAgICB9XFxuICAgIH1cXG4gICAgLnB2cGJ0biB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRhcmtjb2xvcjtcXG4gICAgICAmOmhvdmVye1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0Y29sb3I7XFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkZGFya2NvbG9yO1xcbiAgICAgICAgY29sb3I6ICRkYXJrY29sb3I7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblxcbi5yZXR1cm5idG4ge1xcbiAgbWluLWhlaWdodDogNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxuICAmOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodGNvbG9yO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgfVxcbn1cXG5cXG4uZ2d7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBmb250LXNpemU6IDNlbTtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLndpbl9kaXZ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDNlbTtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBjcmVhdGVzIGEgc2hpcCBvZiBhIHNwZWNpZmllZCBsZW5ndGhcbmZ1bmN0aW9uIFNoaXAobGVuZ3RoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgXCJsZW5ndGhcIjogbGVuZ3RoLFxuICAgICAgICBcImhpdHNcIjogMCxcbiAgICAgICAgaGl0KCkge1xuICAgICAgICAgICAgdGhpcy5oaXRzICs9IDE7XG4gICAgICAgIH0sXG4gICAgICAgIGlzU3VuaygpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhpdHMgPj0gdGhpcy5sZW5ndGhcbiAgICAgICAgfVxuICAgIH1cbn1cblxubGV0IHJ1bl9jbnQgPSAwIFxuY29uc3QgVE9UQUxfU0hJUFMgPSBbNSwgNCwgMywgMywgMl1cblxuLy8gY3JlYXRlcyBhIGJvYXJkIHdoaWNoIHBsYWNlcyBzaGlwcyBhbmQgcmVjaWV2ZXMgYXR0YWNrc1xuZnVuY3Rpb24gQm9hcmQoKSB7IC8vIDEweDEwIGJvYXJkICMgeCBsZXR0ZXJzXG4gICAgcmV0dXJuIHtcbiAgICAgICAgXCJzaGlwX2RlY2tcIjogWy4uLlRPVEFMX1NISVBTXSxcbiAgICAgICAgXCJzaGlwc19zdGFuZGluZ1wiOiBbLi4uVE9UQUxfU0hJUFNdLFxuICAgICAgICBcImN1cnJfc2hpcFwiOiB1bmRlZmluZWQsXG4gICAgICAgIFwicm90YXRpb25cIjogMCxcbiAgICAgICAgXCJoaXRfbmVpZ2hib3JzXCI6IFtdLFxuICAgICAgICBcImhpdF9saXN0XCI6IFtdLFxuICAgICAgICBcImJvYXJkXCI6IFtcbiAgICAgICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgXSxcbiAgICAgICAgc2V0Q3VyclNoaXAobGVuID0gdGhpcy5zaGlwX2RlY2tbMF0pIHtcbiAgICAgICAgICAgIHRoaXMuY3Vycl9zaGlwID0gU2hpcChsZW4pO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vIGRldGVybWluZXMgdmFsaWRpdHkgb2YgbG9jYXRpb25cbiAgICAgICAgdmFsaWRMb2MobG9jLCBwbGFjZSA9IGZhbHNlKSB7XG4gICAgICAgICAgICAvLyBpZiB0aGUgbG9jYXRpb24gaXMgaW4gdGhlIGhpdCBsaXN0LCByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIGlmICh0aGlzLmhpdF9saXN0LmluY2x1ZGVzKEpTT04uc3RyaW5naWZ5KGxvYykpKSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3lvdSBoYXZlIGFscmVhZHkgYXR0YWNrZWQgdGhpcyBsb2NhdGlvbiAnXG4gICAgICAgICAgICAgICAgLy8gICAgICsgbG9jWzBdICsgJyAsICcgKyBsb2NbMV0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IGxvY1swXVxuICAgICAgICAgICAgY29uc3QgY29sID0gbG9jWzFdXG4gICAgICAgICAgICBpZiAoISgwIDw9IHJvdyAmJiByb3cgPD0gOSkpIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnaW52YWxpZCB5IGxvY2F0aW9uOiAnICsgcm93KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoISgwIDw9IGNvbCAmJiBjb2wgPD0gOSkpIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnaW52YWxpZCB4IGxvY2F0aW9uOiAnICsgY29sKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGxhY2UgPT0gdHJ1ZSAmJiB0aGlzLmJvYXJkW3Jvd11bY29sXSAhPSAwKSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3RoZXJlIGlzIGFscmVhZHkgYSBzaGlwIGhlcmUnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5ib2FyZFtyb3ddW2NvbF0gPT0gMSkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd5b3UgaGF2ZSBhbHJlYWR5IGF0dGFja2VkIHRoaXMgbG9jYXRpb24gJ1xuICAgICAgICAgICAgICAgIC8vICAgICArIHJvdyArICcgLCAnICsgY29sKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5ib2FyZFtyb3ddW2NvbF0gIT0gMCAmJiB0aGlzLmJvYXJkW3Jvd11bY29sXS5pc1N1bmsoKSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0aGlzIHNoaXAgaXMgc3VuayEnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBwbGFjZXMgYSBzaGlwIGdpdmVuIGEgbG9jIGFuZCBvcHRpb25hbCBkaXJlY3Rpb24gWzBSLDFELDJMLDNVXVxuICAgICAgICBwbGFjZVNoaXAoc2hpcCwgbG9jLCBkaXJlY3Rpb24gPSB0aGlzLnJvdGF0aW9uLCBjaGVjayA9IGZhbHNlKSB7XG4gICAgICAgICAgICBjb25zdCByb3cgPSBsb2NbMF1cbiAgICAgICAgICAgIGNvbnN0IGNvbCA9IGxvY1sxXVxuICAgICAgICAgICAgbGV0IHNoaXBfbG9jcyA9IFtdO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgdG1wX2xvYyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6IC8vIGRvd25cbiAgICAgICAgICAgICAgICAgICAgICAgIHRtcF9sb2MgPSBbcm93IC0gaSwgY29sXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6IC8vIGxlZnRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRtcF9sb2MgPSBbcm93LCBjb2wgLSBpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6IC8vIHVwXG4gICAgICAgICAgICAgICAgICAgICAgICB0bXBfbG9jID0gW3JvdyArIGksIGNvbF07XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogLy8gcmlnaHRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRtcF9sb2MgPSBbcm93LCBjb2wgKyBpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnZhbGlkTG9jKHRtcF9sb2MsIHRydWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2hpcF9sb2NzLnB1c2godG1wX2xvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjaGVjaykgeyAvLyBpZiBpdHMganVzdCBhIGNoZWNrLCBub3QgYSBwbGFjZW1lbnQsIHdlIHJldHVybiB0aGUgc3BvdHNcbiAgICAgICAgICAgICAgICByZXR1cm4gc2hpcF9sb2NzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzaGlwX2xvY3MuZm9yRWFjaCgoc2VnKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtzZWdbMF1dW3NlZ1sxXV0gPSBzaGlwO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSxcblxuICAgICAgICAvLyByZXR1cm5zICdzaW5rJywgJ2hpdCcsICdtaXNzJywgb3IgJ2ludmFsaWRcbiAgICAgICAgcmVjaWV2ZUF0dGFjayhsb2MpIHtcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IGxvY1swXVxuICAgICAgICAgICAgY29uc3QgY29sID0gbG9jWzFdXG4gICAgICAgICAgICAvLyBjaGVjayB0aGF0IHRoZSBwcm92aWRlZCBoaXQgaXMgdmFsaWRcbiAgICAgICAgICAgIGlmICghdGhpcy52YWxpZExvYyhsb2MpKSByZXR1cm4gMDtcblxuICAgICAgICAgICAgLy8gaWYgaXRzIGEgbWlzcywgdXBkYXRlIHRoZSBib2FyZCBhbmQgcmV0dXJuIG1pc3NcbiAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkW3Jvd11bY29sXSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtyb3ddW2NvbF0gPSAxO1xuICAgICAgICAgICAgICAgIHJldHVybiAnbWlzcyc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuYm9hcmRbcm93XVtjb2xdLmhpdCgpO1xuICAgICAgICAgICAgdGhpcy5oaXRfbGlzdC5wdXNoKEpTT04uc3RyaW5naWZ5KGxvYykpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5ib2FyZFtyb3ddW2NvbF0uaXNTdW5rKCkpIHtcbiAgICAgICAgICAgICAgICBsZXQgaWR4ID0gdGhpcy5zaGlwc19zdGFuZGluZy5maW5kSW5kZXgoXG4gICAgICAgICAgICAgICAgICAgICh2YWwpID0+IHZhbCA9PSB0aGlzLmJvYXJkW3Jvd11bY29sXS5sZW5ndGhcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hpcHNfc3RhbmRpbmcuc3BsaWNlKGlkeCwgMSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuc2hpcHNfc3RhbmRpbmcubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vaGl0IHNpbmsgYW5kIGdhbWUgd2lubmVyIVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gNjk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGFsbCB0aGUgZWxlbWVudHMgZnJvbSB0aGUgaGl0IGxpc3QgdGhhdCBhcmUgc3Vua1xuICAgICAgICAgICAgICAgIGNvbnN0IG9sZF9oaXRfbGlzdCA9IFsuLi50aGlzLmhpdF9saXN0XTtcbiAgICAgICAgICAgICAgICB0aGlzLmhpdF9saXN0ID0gdGhpcy5oaXRfbGlzdC5maWx0ZXIoXG4gICAgICAgICAgICAgICAgICAgICh2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvdyA9IEpTT04ucGFyc2UodmFsKVswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbCA9IEpTT04ucGFyc2UodmFsKVsxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhKHRoaXMuYm9hcmRbcm93XVtjb2xdLmlzU3VuaygpKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndXBkYXRlZCBoaXQgbGlzdCBmcm9tICcsIG9sZF9oaXRfbGlzdCwgJyB0byAnLCB0aGlzLmhpdF9saXN0KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3N1bmsnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL2hpdCBubyBzaW5rXG4gICAgICAgICAgICByZXR1cm4gJ2hpdCc7XG4gICAgICAgIH0sXG4gICAgICAgIC8vIHRvcCBwaXZvdCBnaXZlcyB0aGUgYmVzdCBsb2NhdGlvbiB0byBhdHRhY2sgZ2l2ZW4gd2Ugb25seSBoYXZlIG9uZSBoaXQgdG8gcGl2b3QgZnJvbVxuICAgICAgICB0b3BQaXZvdChsb2MpIHtcbiAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gY2hlY2sgdGhlIDQgbG9jYXRpb25zIGFyb3VuZCB0aGUgbG9jIGFuZCBzZWUgd2hpY2ggb25lIGhhcyB0aGUgbW9zdFxuICAgICAgICAgICAgLy8gdW5zZWVuIGxvY2F0aW9uc1xuICAgICAgICAgICAgbGV0IGRpcmVjdGlvbnMgPSB0aGlzLnN0cmVuZ3RoU29ydGVkRGlyZWN0aW9ucyhsb2MpO1xuICAgICAgICAgICAgbGV0IHRvcF9kaXIgPSBkaXJlY3Rpb25zWzBdWzBdO1xuICAgICAgICAgICAgbGV0IHRvcF9sb2MgPSBsb2M7XG4gICAgICAgICAgICBzd2l0Y2ggKHRvcF9kaXIpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgICAgICAgICAgICAgdG9wX2xvY1swXSArPSAxO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgICAgICAgICAgICAgIHRvcF9sb2NbMF0gLT0gMTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnZG93bic6XG4gICAgICAgICAgICAgICAgICAgIHRvcF9sb2NbMV0gKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAndXAnOlxuICAgICAgICAgICAgICAgICAgICB0b3BfbG9jWzFdIC09IDE7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpbnZhbGlkIGRpcmVjdGlvbjogJyArIHRvcF9kaXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRvcF9sb2M7XG4gICAgICAgIH0sXG4gICAgICAgIC8vIGFkamFjZW50cyB0YWtlcyBhIGxvY2F0aW9uIGFuZCByZXR1cm5zIGFuIG9yZGVyZWQgbGlzdCBvZiBkaXJlY3Rpb25zXG4gICAgICAgIC8vIGZyb20gdGhlIGxvY2F0aW9uIGluIHF1ZXN0aW9uLiBJdCBpcyBvcmRlcmVkIGJ5IHRoZSBudW1iZXIgdW5zZWVuXG4gICAgICAgIC8vIGxvY2F0aW9ucyBmcm9tIHRoZSBsb2NhdGlvbiBpbiB0aGF0IGRpcmVjdGlvbi5cbiAgICAgICAgLy8gVGhlIGZpcnN0IGVsZW1lbnQgaW4gdGhlIGxpc3QgaXMgdGhlIGRpcmVjdGlvbiB3aXRoIGxvbmdlc3QgcnVuXG4gICAgICAgIC8vIGluIGl0J3MgZGlyZWN0aW9uLiBUaGUgc2Vjb25kIGVsZW1lbnQgaW4gdGhlIGxpc3QgaXMgdGhlIGxvY2F0aW9uIHdpdGggdGhlXG4gICAgICAgIHN0cmVuZ3RoU29ydGVkRGlyZWN0aW9ucyhsb2MpIHtcbiAgICAgICAgICAgIGxldCBtYWludGVuZW5jZV9sb2MgPSBbLi4ubG9jXTtcbiAgICAgICAgICAgIGxldCByZXMgPSBbXTtcbiAgICAgICAgICAgIGxldCBkaXJlY3Rpb25zID0gdGhpcy52YWxpZERpcmVjdGlvbnMobG9jKTtcbiAgICAgICAgICAgIGRpcmVjdGlvbnMuZm9yRWFjaCgoZGlyKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHRtcF9sb2MgPSBbLi4ubG9jXTtcbiAgICAgICAgICAgICAgICBsZXQgdG1wX2NudCA9IDA7XG4gICAgICAgICAgICAgICAgd2hpbGUgKHRoaXMudmFsaWRMb2ModG1wX2xvYykpIHtcbiAgICAgICAgICAgICAgICAgICAgdG1wX2NudCArPSAxO1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGRpcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG1wX2xvY1swXSArPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRtcF9sb2NbMF0gLT0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2Rvd24nOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRtcF9sb2NbMV0gKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3VwJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bXBfbG9jWzFdIC09IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpbnZhbGlkIGRpcmVjdGlvbjogJyArIGRpcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbWFpbnRlbmVuY2VfbG9jID0gdG1wX2xvYztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gaWYgaXRzIGludmFsaWQgYmVjYXVzZSBpdHMgb2ZmIHRoZSBib2FyZCwgd2Ugc2hvdWxkIHN1YnRyYWN0IG9uZVxuICAgICAgICAgICAgICAgIC8vIGZyb20gdGhlIGNvdW50LCBpZiBpdHMgaW52YWxpZCBiZWNhdXNlIGl0cyBhIG1pc3MsIHdlIHNob3VsZFxuICAgICAgICAgICAgICAgIC8vIHN1YnRyYWN0IDIgZnJvbSB0aGUgY291bnRcbiAgICAgICAgICAgICAgICBjb25zdCBvdXRfb2ZfYm91bmRzID0gKG1haW50ZW5lbmNlX2xvY1swXSA8IDAgfHwgbWFpbnRlbmVuY2VfbG9jWzBdID4gOSB8fFxuICAgICAgICAgICAgICAgICAgICBtYWludGVuZW5jZV9sb2NbMV0gPCAwIHx8IG1haW50ZW5lbmNlX2xvY1sxXSA+IDkpXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKCFvdXRfb2ZfYm91bmRzICYmIHRoaXMuYm9hcmRbbWFpbnRlbmVuY2VfbG9jWzBdXVttYWludGVuZW5jZV9sb2NbMV1dID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdG1wX2NudCAtPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXMucHVzaChbZGlyLCB0bXBfY250XSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJlcy5zb3J0KChhLCBiKSA9PiBiWzFdIC0gYVsxXSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygndGhlIHJlc3VsdGluZyBsaXN0IG9mIGRpcmVjdGlvbnMgc29ydGVkIGJ5IHRoZWlyIHN0cmVuZ3RoIGlzOiAnLCByZXMpO1xuICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgfSxcbiAgICAgICAgdmFsaWREaXJlY3Rpb25zKGxvYykge1xuICAgICAgICAgICAgbGV0IGRpcmVjdGlvbnMgPSBbXTtcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IGxvY1swXTtcbiAgICAgICAgICAgIGNvbnN0IGNvbCA9IGxvY1sxXTtcbiAgICAgICAgICAgIGlmICh0aGlzLnZhbGlkTG9jKFtyb3cgKyAxLCBjb2xdKSkge1xuICAgICAgICAgICAgICAgIGRpcmVjdGlvbnMucHVzaCgnbGVmdCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMudmFsaWRMb2MoW3JvdyAtIDEsIGNvbF0pKSB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aW9ucy5wdXNoKCdyaWdodCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMudmFsaWRMb2MoW3JvdywgY29sICsgMV0pKSB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aW9ucy5wdXNoKCdkb3duJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy52YWxpZExvYyhbcm93LCBjb2wgLSAxXSkpIHtcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb25zLnB1c2goJ3VwJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygndGhlIHZhbGlkIGRpcmVjdGlvbnMgZm9yIGxvY2F0aW9uJywgbG9jLCAnIGFyZSAnLCBkaXJlY3Rpb25zKVxuICAgICAgICAgICAgcmV0dXJuIGRpcmVjdGlvbnM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgdG9wTG9jKHNlYXJjaERlcHRoID0gMSwgZGVidWcgPSBGYWxzZSkge1xuICAgICAgICAgICAgLy8gcGljayB0aGUgbG9jYXRpb24gaW4gdGhlIGFycmF5IHdpdGggdGhlIGhpZ2hlc3Qgc2NvcmUgd2hpY2ggaXNcbiAgICAgICAgICAgIC8vIHRoZSBzdW0gb2YgaXRzIGFkamFjZW50cyBsaXN0IFsxXVxuICAgICAgICAgICAgbGV0IHRvcF9zY29yZSA9IDBcbiAgICAgICAgICAgIGxldCB0b3BfbG9jID0gWzAsIDBdXG4gICAgICAgICAgICBsZXQgc2NvcmVzID0gW11cbiAgICAgICAgICAgIC8vIG1ha2UgYW4gZW1wdHkgMTB4MTAgYWRqYWNlbnRzX2NudCBhcnJheVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBsb2MgPSBbaSwgal1cbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhpcyBsb2NhdGlvbiBjYW4ndCBiZSBhdHRhY2tlZCwgc2tpcCBpdFxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMudmFsaWRMb2MobG9jKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBzY29yZSBzaG91bGQgcHJpb3JpdGl6ZSBsb2NhdGlvbnMgYnkgdGhlaXIgcmVsYXRpdmVcbiAgICAgICAgICAgICAgICAgICAgLy8gY2VudGVyaW5nIGJldHdlZW4gbGVmdCBhbmQgcmlnaHQgYWRqYWNlbnQgbG9jYXRpb25zXG4gICAgICAgICAgICAgICAgICAgIC8vIGFuZCB1cCBhbmQgZG93biBhZGphY2VudCBsb2NhdGlvbnMsIHVzaW5nIHN0cmVuZ3RoU29ydGVkRGlyZWN0aW9uc1xuICAgICAgICAgICAgICAgICAgICAvLyB3ZSBjYW4gZ2V0IGEgbGlzdCBvZiBkaXJlY3Rpb25zIHNvcnRlZCBieSB0aGVpciBzdHJlbmd0aFxuICAgICAgICAgICAgICAgICAgICAvLyB3ZSBjYW4gdGhlbiB1c2UgdGhpcyBsaXN0IHRvIGRldGVybWluZSB0aGUgc2NvcmUgb2YgdGhlIGxvY2F0aW9uXG4gICAgICAgICAgICAgICAgICAgIGxldCBzY29yZSA9IDBcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRpcmVjdGlvbnMgPSB0aGlzLnN0cmVuZ3RoU29ydGVkRGlyZWN0aW9ucyhsb2MpXG4gICAgICAgICAgICAgICAgICAgIGxldCBkaXJlY3Rpb25fc3RyZW5ndGhzID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2xlZnQnOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3JpZ2h0JzogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICd1cCc6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAnZG93bic6IDAsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBkaXJlY3Rpb25zLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGlyID0gZGlyZWN0aW9uc1trXVswXVxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNudCA9IGRpcmVjdGlvbnNba11bMV1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbl9zdHJlbmd0aHNbZGlyXSA9IGNudFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIHdlIGNhbiBub3cgdXNlIHRoZSBkaXJlY3Rpb25fc3RyZW5ndGhzIHRvIGRldGVybWluZSB0aGUgc2NvcmVcbiAgICAgICAgICAgICAgICAgICAgLy8gYnkgdGFraW5nIHRoZSBtaW4gb2YgdGhlIGxlZnQgYW5kIHJpZ2h0IHN0cmVuZ3RocyBhbmQgdGhlIG1pblxuICAgICAgICAgICAgICAgICAgICAvLyBvZiB0aGUgdXAgYW5kIGRvd24gc3RyZW5ndGhzXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRpcmVjdGlvbl9zdHJlbmd0aHMpXG4gICAgICAgICAgICAgICAgICAgIGxldCBsZWZ0X3JpZ2h0X3N0cmVuZ3RoID0gTWF0aC5taW4oZGlyZWN0aW9uX3N0cmVuZ3Roc1snbGVmdCddLCBkaXJlY3Rpb25fc3RyZW5ndGhzWydyaWdodCddKVxuICAgICAgICAgICAgICAgICAgICBsZXQgdXBfZG93bl9zdHJlbmd0aCA9IE1hdGgubWluKGRpcmVjdGlvbl9zdHJlbmd0aHNbJ3VwJ10sIGRpcmVjdGlvbl9zdHJlbmd0aHNbJ2Rvd24nXSlcbiAgICAgICAgICAgICAgICAgICAgLy8gUkVTRUFSQ0ggRlVSVEhFUlxuICAgICAgICAgICAgICAgICAgICBzY29yZSA9IGxlZnRfcmlnaHRfc3RyZW5ndGggKyB1cF9kb3duX3N0cmVuZ3RoXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdyYXcgZGlyZWN0aW9uIGJhc2VkIHNjb3JlIGlzJywgc2NvcmUpXG5cbiAgICAgICAgICAgICAgICAgICAgLy8gYm9vc3QgbWlkZGxlIGxvY2F0aW9ucyBieSB1c2luZyBhbiBpbnZlcnNlIHF1YWRyYXRpYyBtdWx0aXBsaWVyIHRvIHRoZSBzY29yZVxuICAgICAgICAgICAgICAgICAgICBsZXQgZGlzdCA9IE1hdGguc3FydChNYXRoLnBvdyg0LjUgLSBsb2NbMF0sIDIpICsgTWF0aC5wb3coNC41IC0gbG9jWzFdLCAyKSlcbiAgICAgICAgICAgICAgICAgICAgLy8gd2UgYWRkIGJlY2F1c2Ugd2UgcmVhbGx5IG9ubHkgd2FudCB0aGlzIHRvIGJyZWFrIHRpZXNcbiAgICAgICAgICAgICAgICAgICAgLy8gcGljayBhIHJhbmRvbSBudW1iZXIgYmV0d2VlbiAwIGFuZCAuMDAwMDAxXG4gICAgICAgICAgICAgICAgICAgIGxldCByYW5kID0gTWF0aC5yYW5kb20oKSAvIDEwMDAwMDBcbiAgICAgICAgICAgICAgICAgICAgc2NvcmUgPSBzY29yZSArIHJhbmRcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc2NvcmUpXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWFyY2hEZXB0aCA+IDEgfHwgZGVidWcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3Jlcy5wdXNoKFtsb2MsIHNjb3JlXSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoc2NvcmUgPiB0b3Bfc2NvcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcF9zY29yZSA9IHNjb3JlXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3BfbG9jID0gbG9jXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpZiBzZWFyY2hEZXB0aCBpcyBncmVhdGVyIHRoYW4gMSwgd2Ugc2hvdWxkIHNvcnQgdGhlIHNjb3JlcyBhbmRcbiAgICAgICAgICAgIC8vIGluIGRlY3JlYXNpbmcgb3JkZXIgYW5kIHRha2UgdGhlIGZpcnN0IHNlYXJjaERlcHRoIGVsZW1lbnRzXG4gICAgICAgICAgICBpZiAoc2VhcmNoRGVwdGggPiAxIHx8IGRlYnVnKSB7XG4gICAgICAgICAgICAgICAgc2NvcmVzLnNvcnQoKGEsIGIpID0+IGJbMV0gLSBhWzFdKVxuICAgICAgICAgICAgICAgIGlmIChkZWJ1Zykge1xuICAgICAgICAgICAgICAgICAgICAvLyBsb2cgdG9wIDMgc2NvcmVzXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZSB0b3AgMyBzY29yZXMgd2VyZVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndGhlIHRvcCAzIHNjb3JlcyB3ZXJlJylcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNjb3Jlc1tpXVsxXSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgdG9wIDMgbG9jYXRpb25zIHdlcmVcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3RoZSB0b3AgMyBsb2NhdGlvbnMgd2VyZScpXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzY29yZXNbaV1bMF0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHNlYXJjaERlcHRoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2NvcmVzWy0xXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0b3BfbG9jXG4gICAgICAgIH0sXG4gICAgfVxufVxuXG5jb25zdCBnYW1lX3N0YXR1cyA9IHtcbiAgICBcInAxX3NldHRpbmdfdXBcIjogMSxcbiAgICBcInAyX3NldHRpbmdfdXBcIjogMixcbiAgICBcInAxX3R1cm5cIjogMyxcbiAgICBcInAyX3R1cm5cIjogNCxcbiAgICBcInAxX3dpblwiOiA1LFxuICAgIFwicDJfd2luXCI6IDYsXG59XG5cbmNvbnN0IHJlYWRhYmxlX3N0YXR1cyA9IHtcbiAgICAxOiBcIiBpcyBzZXR0aW5nIHVwIHRoZWlyIGJvYXJkXCIsXG4gICAgMjogXCIgaXMgc2V0dGluZyB1cCB0aGVpciBib2FyZFwiLFxuICAgIDM6IFwiJ3MgdHVyblwiLFxuICAgIDQ6IFwiJ3MgdHVyblwiLFxuICAgIDU6IFwiIHdpbnMhXCIsXG4gICAgNjogXCIgd2lucyFcIixcbn1cblxuLy8gY3JlYXRlcyBhIEdhbWUgd2l0aCB0d28gcGxheWVycyB3aG8gcGVyZm9ybSBhY3Rpb25zIG9uIHRoZWlyIGJvYXJkc1xuZnVuY3Rpb24gR2FtZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBcInN0YXR1c1wiOiBnYW1lX3N0YXR1cy5wMV9zZXR0aW5nX3VwLFxuICAgICAgICBcIm1vZGVcIjogXCJlYXN5XCIsXG4gICAgICAgIFwicDFib2FyZFwiOiBCb2FyZCgpLFxuICAgICAgICAvLyBwMiBib2FyZCBpcyB0aGUgQUkncyBib2FyZFxuICAgICAgICBcInAyYm9hcmRcIjogQm9hcmQoKSxcbiAgICAgICAgXCJwYm9hcmRcIjogJ2JhbmFuYXMnLFxuICAgICAgICBcImVib2FyZFwiOiAnYmFuYW5hcycsXG4gICAgICAgIFwicDFfbmFtZVwiOiAnSHVtYW4nLFxuICAgICAgICBcInAyX25hbWVcIjogJ0FJJyxcbiAgICAgICAgXCJ0dXJuc1wiOiAtMiwgLy8gdG8gYWNjb3VudCBmb3IgMiBzZXQgY2FsbHNcbiAgICAgICAgcmVhZGFibGVfc3RhdHVzKGlucHV0KSB7XG4gICAgICAgICAgICBsZXQgcGxheWVyID0gdGhpcy5wYm9hcmQgPT0gdGhpcy5wMWJvYXJkID8gdGhpcy5wMV9uYW1lIDogdGhpcy5wMl9uYW1lO1xuICAgICAgICAgICAgcmV0dXJuIHBsYXllciArIHJlYWRhYmxlX3N0YXR1c1tpbnB1dF07XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gaW5pdGlhbGl6ZSB0aGUgYm9hcmRzXG4gICAgICAgIGluaXQoKSB7XG4gICAgICAgICAgICB0aGlzLnBib2FyZCA9IHRoaXMucDFib2FyZDtcbiAgICAgICAgICAgIHRoaXMuZWJvYXJkID0gdGhpcy5wMmJvYXJkO1xuICAgICAgICB9LFxuICAgICAgICAvLyBoYXZlIHRoZSBjdXJyZW50IHBsYXllciBhdHRhY2sgYSBsb2NhdGlvblxuICAgICAgICBhdHRhY2sobG9jKSB7XG4gICAgICAgICAgICAvLyBhdHRhY2sgdGhlIGVuZW15IGJvYXJkLCBpZiB0aGUgYXR0YWNrIGlzIHZhbGlkXG4gICAgICAgICAgICAvLyBhbmQgdGhlIGF0dGFjayBpcyBhIGhpdCwgY2hlY2sgaWYgdGhlIGVuZW15IGlzIHN1bmtcbiAgICAgICAgICAgIC8vIGlmIHRoZSBlbmVteSBpcyBzdW5rLCBjaGVjayBpZiB0aGUgZ2FtZSBpcyBvdmVyXG4gICAgICAgICAgICAvLyBpZiB0aGUgZ2FtZSBpcyBvdmVyLCBzZXQgdGhlIHN0YXR1cyB0byB0aGUgd2lubmVyXG4gICAgICAgICAgICAvLyBpZiB0aGUgZ2FtZSBpcyBub3Qgb3Zlciwgc3dpdGNoIHRoZSBwbGF5ZXIgdHVyblxuICAgICAgICAgICAgLy8gaWYgdGhlIGxvY2F0aW9uIGlzbid0IHZhbGlkLCByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIGxldCBhdHQgPSB0aGlzLmVib2FyZC5yZWNpZXZlQXR0YWNrKGxvYyk7XG4gICAgICAgICAgICBpZiAoIWF0dCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gb3RoZXJ3aXNlIHRoZSBhdHRhY2sgaXMgdmFsaWRlIHNvIHdlIHdpbGwgYmUgdXBkYXRpbmcgdGhlIGdhbWUuc3RhdHVzXG4gICAgICAgICAgICAvLyB0aHVzIHdlIG5lZWQgdG8gZmlndXJlIG91dCB0aGUgY3VycmVudCBzdGF0dXMgYW5kIHVzZSBpdCB0byBkZXRlcm1pbmVcbiAgICAgICAgICAgIC8vIHdoYXQgdGhlIG5ldyBzdGF0dXMgc2hvdWxkIGJlXG4gICAgICAgICAgICBsZXQgY3Vycl9zdGF0dXMgPSB0aGlzLnN0YXR1cztcbiAgICAgICAgICAgIHN3aXRjaCAoY3Vycl9zdGF0dXMpIHtcbiAgICAgICAgICAgICAgICBjYXNlIGdhbWVfc3RhdHVzLnAxX3R1cm46XG4gICAgICAgICAgICAgICAgICAgIGlmIChhdHQgPT0gNjkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwbGF5ZXIgMSB3YXMgdXAsIGFuZCBzdW5rIHRoZSBlbmVteScpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXR1cyA9IGdhbWVfc3RhdHVzLnAxX3dpbjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGdhbWVfc3RhdHVzLnAyX3R1cm46XG4gICAgICAgICAgICAgICAgICAgIGlmIChhdHQgPT0gNjkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwbGF5ZXIgMiB3YXMgdXAsIGFuZCBzdW5rIHRoZSBlbmVteScpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXR1cyA9IGdhbWVfc3RhdHVzLnAyX3dpbjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaW52YWxpZCBzdGF0dXM6ICcgKyBjdXJyX3N0YXR1cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBzd2l0Y2ggcGxheWVyc1xuICAgICAgICAgICAgdGhpcy5zd2FwUGxheWVyKCk7XG4gICAgICAgICAgICByZXR1cm4gYXR0O1xuICAgICAgICB9LFxuICAgICAgICAvLyBwbGFjZXMgY3VycmVudCBwbGF5ZXJzIHNoaXBzIHJhbmRvbWx5XG4gICAgICAgIGF1dG9TZXQoKSB7XG4gICAgICAgICAgICAvLyBpZiB0aGUgc3RhdHVzIGlzbid0IDAgb3IgMSwgdGhlbiB3ZSBkb24ndCBuZWVkIHRvIHNldCB0aGUgYm9hcmRcbiAgICAgICAgICAgIGlmICghKHRoaXMuc3RhdHVzID09IGdhbWVfc3RhdHVzLnAxX3NldHRpbmdfdXAgfHxcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1cyA9PSBnYW1lX3N0YXR1cy5wMl9zZXR0aW5nX3VwKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHBsYWNlIHRoZSBzaGlwc1xuICAgICAgICAgICAgd2hpbGUgKHRoaXMucGJvYXJkLnNoaXBfZGVjay5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBsZXQgc2hpcF9sZW4gPSB0aGlzLnBib2FyZC5zaGlwX2RlY2sucG9wKCk7XG4gICAgICAgICAgICAgICAgbGV0IHBsYWNlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGxldCBzaGlwID0gU2hpcChzaGlwX2xlbik7XG5cbiAgICAgICAgICAgICAgICB3aGlsZSAocGxhY2VkID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByYW5kZGlyID0gTWF0aC5mbG9vcihNYXRoLmFicyhNYXRoLnJhbmRvbSgpKSAqIDQpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmFuZHggPSBNYXRoLmZsb29yKE1hdGguYWJzKE1hdGgucmFuZG9tKCkpICogOSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCByYW5keSA9IE1hdGguZmxvb3IoTWF0aC5hYnMoTWF0aC5yYW5kb20oKSkgKiA5KTtcblxuICAgICAgICAgICAgICAgICAgICBwbGFjZWQgPSB0aGlzLnBib2FyZC5wbGFjZVNoaXAoc2hpcCwgW3JhbmR4LCByYW5keV0sIHJhbmRkaXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHN3YXAgdGhlIHBsYXllciBib2FyZCBhbmQgZW5lbXkgYm9hcmRcbiAgICAgICAgICAgIHRoaXMuc3dhcFBsYXllcigpO1xuICAgICAgICB9LFxuICAgICAgICBzd2FwUGxheWVyKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09IGdhbWVfc3RhdHVzLnAxX3dpbiB8fFxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzID09IGdhbWVfc3RhdHVzLnAyX3dpbikge1xuICAgICAgICAgICAgICAgIHJldHVybiAodGhpcy5wYm9hcmQgPT0gdGhpcy5wMWJvYXJkKSA/ICdQbGF5ZXIgMScgOiAnUGxheWVyIDInO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy50dXJucyA9IHRoaXMudHVybnMgKyAxO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy50dXJucylcbiAgICAgICAgICAgIGlmICh0aGlzLnBib2FyZCA9PSB0aGlzLnAxYm9hcmQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBib2FyZCA9IHRoaXMucDJib2FyZDtcbiAgICAgICAgICAgICAgICB0aGlzLmVib2FyZCA9IHRoaXMucDFib2FyZDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wYm9hcmQgPT0gdGhpcy5wMmJvYXJkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYm9hcmQgPSB0aGlzLnAxYm9hcmQ7XG4gICAgICAgICAgICAgICAgdGhpcy5lYm9hcmQgPSB0aGlzLnAyYm9hcmQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpbnZhbGlkIHBsYXllciBib2FyZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gYWR2YW5jZSB0aGUgc3RhdHVzIG9mIHRoZSBnYW1lIGJhc2VkIG9uIHRoZSBwcmV2aW91cyBzdGF0dXNcbiAgICAgICAgICAgIC8vIHdlIGRpc3JlZ2FyZCB3aW4gc3RhdHVzJyBiZWNhdXNlIHRob3NlIGF1dG8gcmVyZW5kZXIgdGhlIHBhZ2VcbiAgICAgICAgICAgIGxldCBvbGRfc3RhdHVzID0gdGhpcy5zdGF0dXM7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT0gZ2FtZV9zdGF0dXMucDFfc2V0dGluZ191cCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gZ2FtZV9zdGF0dXMucDJfc2V0dGluZ191cDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0dXMgPT0gZ2FtZV9zdGF0dXMucDJfc2V0dGluZ191cCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gZ2FtZV9zdGF0dXMucDFfdHVybjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSB0aGlzLnN0YXR1cyA9PSBnYW1lX3N0YXR1cy5wMV90dXJuID8gZ2FtZV9zdGF0dXMucDJfdHVybiA6IGdhbWVfc3RhdHVzLnAxX3R1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSxcbiAgICAgICAgLy8gYXR0YWNrcyBvcHBvc2luZyBwbGF5ZXIgYXV0b21hdGljYWxseVxuICAgICAgICBhaUF0dGFjaygpIHtcbiAgICAgICAgICAgIC8vIHdlIGdldCB0aGUgdGFyZ2V0IHVzaW5nIGFpVGFyZ2V0XG4gICAgICAgICAgICBsZXQgdGFyZ2V0ID0gdGhpcy5haVRhcmdldCgpO1xuICAgICAgICAgICAgLy8gd2UgYXR0YWNrIHRoZSB0YXJnZXQgdXNpbmcgYXR0YWNrXG4gICAgICAgICAgICBsZXQgYXR0ID0gdGhpcy5hdHRhY2sodGFyZ2V0KTtcbiAgICAgICAgICAgIC8vIGlmIHRoZSBhdHRhY2sgd2FzIHVuc3VjY2Vzc2Z1bCwgd2UgbmVlZCB0byB0cnkgYWdhaW5cbiAgICAgICAgICAgIGxldCBhdHRfY250ID0gMVxuICAgICAgICAgICAgd2hpbGUgKCFhdHQpIHtcbiAgICAgICAgICAgICAgICBhdHRfY250ICs9IDFcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSB0aGlzLmFpVGFyZ2V0KGF0dF9jbnQpO1xuICAgICAgICAgICAgICAgIGF0dCA9IHRoaXMuYXR0YWNrKHRhcmdldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gJ3N1Y2Nlc3NmdWwgYXR0YWNrJ1xuICAgICAgICB9LFxuICAgICAgICAvLyBmaW5kcyB0aGUgdGFyZ2V0IGZvciBhbiBhaUF0dGFja1xuICAgICAgICBhaVRhcmdldChhdHRfY250ID0gMSkge1xuICAgICAgICAgICAgcnVuX2NudCArPSAxXG4gICAgICAgICAgICBpZiAocnVuX2NudCA+IDEwMDApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3RvbyBtYW55IHJ1bnMnKVxuICAgICAgICAgICAgICAgIHJldHVybiBbMCwgMF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLm1vZGUgPT0gJ2Vhc3knKSB7XG4gICAgICAgICAgICAgICAgbGV0IHJhbmRyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICAgICAgICAgIGxldCByYW5kYyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gW3JhbmRyLCByYW5kY11cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGhpcy5lYm9hcmQuaGl0X2xpc3QgfHwgdGhpcy5lYm9hcmQuaGl0X2xpc3QubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICAvLyB1c2UgdGhlIGxvY2F0aW9uIHdpdGggdGhlIGhpZ2hlc3Qgc2NvcmVcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lYm9hcmQudG9wTG9jKGF0dF9jbnQsIHRydWUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpZiB0aGUgaGl0IGxpc3QgaXMgb25lLCB0aGVuIHdlIG5lZWQgdG8gbG9vayBhdCA0IHBvc3NpYmxlXG4gICAgICAgICAgICAvLyBsb2NhdGlvbnMgdG8gYXR0YWNrXG4gICAgICAgICAgICBpZiAodGhpcy5lYm9hcmQuaGl0X2xpc3QgJiYgdGhpcy5lYm9hcmQuaGl0X2xpc3QubGVuZ3RoID09IDEpIHtcbiAgICAgICAgICAgICAgICAvLyB0aGVyZSBhcmUgNCBwb3NzaWJsZSBsb2NhdGlvbnMgdG8gYXR0YWNrLCB3ZSBzaG91bGQgY2hlY2tcbiAgICAgICAgICAgICAgICAvLyBpZiBlYWNoIGlzIHZhbGlkIGFuZCB0aGVuIHBpY2sgdGhlIG9uZSB3aXRoIHRoZSBtb3N0IHNwYWNlXG4gICAgICAgICAgICAgICAgLy8gYWhlYWQgb2YgaXQuIFNvIGxldHMgZ2V0IGEgbGlzdCBvZiB0aGUgcG9zc2libGUgbG9jYXRpb25zXG4gICAgICAgICAgICAgICAgLy8gYW5kIHRoZW4gY2hlY2sgZWFjaCBvbmVcbiAgICAgICAgICAgICAgICAvLyBwb3NzaWJsZSBsb2NzID0gW3JpZ2h0LCBsZWZ0LCB1cCwgZG93bl1cbiAgICAgICAgICAgICAgICAvLyBwYXJzZSB0aGlzLmVib2FyZC5oaXRfbGlzdFswXSBpbnRvIGxvYyBmb3JtXG4gICAgICAgICAgICAgICAgbGV0IHRhcmcgPSBKU09OLnBhcnNlKHRoaXMuZWJvYXJkLmhpdF9saXN0WzBdKTtcbiAgICAgICAgICAgICAgICBsZXQgcm93ID0gdGFyZ1swXTtcbiAgICAgICAgICAgICAgICBsZXQgY29sID0gdGFyZ1sxXTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY2FsbGluZyB0b3AgUGl2b3Qgb24gJywgW3JvdywgY29sXSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWJvYXJkLnRvcFBpdm90KFtyb3csIGNvbF0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZygncGVyZm9ybWluZyBoaXQgbWFuYXVldmVyJyk7XG5cbiAgICAgICAgICAgIC8vIGlmIHRoZSBoaXQgbGlzdCBpcyBncmVhdGVyIHRoYW4gb25lLCB0aGVuIHdlIGRldGVybWluZSB0aGVcbiAgICAgICAgICAgIC8vIGRpcmVjdGlvbiBvZiB0aGUgaGl0IGxpc3QgKHJvdyBvciBjb2wpIGFuZCB1c2UgdGhlIGVuZHMgb2ZcbiAgICAgICAgICAgIC8vIHRoZSBsaXN0IHRvIGRldGVybWluZSB0aGUgbmV4dCBhdHRhY2suIElmIHRoZSBoaXQgbGlzdCBpc1xuICAgICAgICAgICAgLy8gd2Ugc3RhcnQgYnkgZ2V0dGluZyB0aGUgZmlyc3QgaGl0IGFuZCB0aGUgbGFzdCBoaXRcbiAgICAgICAgICAgIGxldCBmaXJzdF9oaXQgPSBKU09OLnBhcnNlKHRoaXMuZWJvYXJkLmhpdF9saXN0WzBdKTtcbiAgICAgICAgICAgIGxldCBsYXN0X2hpdCA9IEpTT04ucGFyc2UodGhpcy5lYm9hcmQuaGl0X2xpc3RbXG4gICAgICAgICAgICAgICAgdGhpcy5lYm9hcmQuaGl0X2xpc3QubGVuZ3RoIC0gMV0pO1xuICAgICAgICAgICAgbGV0IGZyID0gZmlyc3RfaGl0WzBdO1xuICAgICAgICAgICAgbGV0IGZjID0gZmlyc3RfaGl0WzFdO1xuICAgICAgICAgICAgbGV0IGxyID0gbGFzdF9oaXRbMF07XG4gICAgICAgICAgICBsZXQgbGMgPSBsYXN0X2hpdFsxXTtcbiAgICAgICAgICAgIC8vIGlmIHRoZSBmaXJzdCBoaXQgYW5kIGxhc3QgaGl0IGFyZSBpbiB0aGUgc2FtZSByb3csIHRoZW4gd2VcbiAgICAgICAgICAgIC8vIG5lZWQgdG8gYXR0YWNrIHRoZSBuZXh0IGxvY2F0aW9uIGluIHRoZSByb3dcbiAgICAgICAgICAgIGlmIChmciA9PSBscikge1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBsYXN0IGhpdCBpcyB0byB0aGUgcmlnaHQgb2YgdGhlIGZpcnN0IGhpdCwgdGhlblxuICAgICAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gYXR0YWNrIHRvIHRoZSByaWdodCBvZiB0aGUgbGFzdCBoaXRcbiAgICAgICAgICAgICAgICBpZiAoZmMgPCBsYykge1xuICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayB0aGUgcmlnaHQgbG9jYXRpb25cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZWJvYXJkLnZhbGlkTG9jKFtsciwgbGMgKyAxXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbbHIsIGxjICsgMV07XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5lYm9hcmQudmFsaWRMb2MoW2ZyLCBmYyAtIDFdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtmciwgZmMgLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgbGFzdCBoaXQgaXMgdG8gdGhlIGxlZnQgb2YgdGhlIGZpcnN0IGhpdCwgdGhlblxuICAgICAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gYXR0YWNrIHRvIHRoZSBsZWZ0IG9mIHRoZSBsYXN0IGhpdFxuICAgICAgICAgICAgICAgIGlmIChmYyA+IGxjKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIHRoZSBsZWZ0IGxvY2F0aW9uXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmVib2FyZC52YWxpZExvYyhbbHIsIGxjIC0gMV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW2xyLCBsYyAtIDFdO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZWJvYXJkLnZhbGlkTG9jKFtmciwgZmMgKyAxXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBsZWZ0IGxvY2F0aW9uIGlzIG5vdCB2YWxpZCwgdGhlbiB3ZSBuZWVkIHRvXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhdHRhY2sgdG8gdGhlIHJpZ2h0IG9mIHRoZSBmaXJzdCBoaXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbZnIsIGZjICsgMV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gaWYgd2UgbWFrZSBpdCB0byBoZXJlIHdpdGhvdXQgcmV0dXJuaW5nLCB0aGVuIHdlIGdvdFxuICAgICAgICAgICAgICAgIC8vIHR3byBzaGlwcyBuZXh0IHRvIGVhY2ggb3RoZXIsIHNvIHdlIG5lZWQgdG8gYXR0YWNrIGFyb3VuZCB0aGUgZmlyc3RcbiAgICAgICAgICAgICAgICAvLyBoaXRcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5lYm9hcmQudmFsaWRMb2MoW2ZyICsgMSwgZmNdKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW2ZyICsgMSwgZmNdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5lYm9hcmQudmFsaWRMb2MoW2ZyIC0gMSwgZmNdKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW2ZyIC0gMSwgZmNdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5lYm9hcmQudmFsaWRMb2MoW2ZyLCBmYyArIDFdKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW2ZyLCBmYyArIDFdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5lYm9hcmQudmFsaWRMb2MoW2ZyLCBmYyAtIDFdKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW2ZyLCBmYyAtIDFdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnd2Ugc2hvdWxkIG5ldmVyIGdldCBoZXJlIHR3byByb3dzIG5leHQgdG8gZWFjaCBvdGhlciBlZGl0aW9uJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpZiB0aGUgZmlyc3QgaGl0IGFuZCBsYXN0IGhpdCBhcmUgaW4gdGhlIHNhbWUgY29sLCB0aGVuIHdlXG4gICAgICAgICAgICAvLyBuZWVkIHRvIGF0dGFjayB0aGUgbmV4dCBsb2NhdGlvbiBpbiB0aGUgY29sXG4gICAgICAgICAgICBpZiAoZmMgPT0gbGMpIHtcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgbGFzdCBoaXQgaXMgYmVsb3cgdGhlIGZpcnN0IGhpdCwgdGhlbiB3ZSBuZWVkIHRvXG4gICAgICAgICAgICAgICAgLy8gYXR0YWNrIGJlbG93IHRoZSBsYXN0IGhpdFxuICAgICAgICAgICAgICAgIGlmIChmciA8IGxyKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIHRoZSBkb3duIGxvY2F0aW9uXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmVib2FyZC52YWxpZExvYyhbbHIgKyAxLCBsY10pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW2xyICsgMSwgbGNdO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZWJvYXJkLnZhbGlkTG9jKFtmciAtIDEsIGZjXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBkb3duIGxvY2F0aW9uIGlzIG5vdCB2YWxpZCwgdGhlbiB3ZSBuZWVkIHRvXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhdHRhY2sgYWJvdmUgdGhlIGZpcnN0IGhpdFxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtmciAtIDEsIGZjXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgbGFzdCBoaXQgaXMgYWJvdmUgdGhlIGZpcnN0IGhpdCwgdGhlbiB3ZSBuZWVkIHRvXG4gICAgICAgICAgICAgICAgLy8gYXR0YWNrIGFib3ZlIHRoZSBsYXN0IGhpdFxuICAgICAgICAgICAgICAgIGlmIChmciA+IGxyKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIHRoZSB1cCBsb2NhdGlvblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5lYm9hcmQudmFsaWRMb2MoW2xyIC0gMSwgbGNdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtsciAtIDEsIGxjXTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmVib2FyZC52YWxpZExvYyhbZnIgKyAxLCBmY10pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGUgdXAgbG9jYXRpb24gaXMgbm90IHZhbGlkLCB0aGVuIHdlIG5lZWQgdG9cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGF0dGFjayBiZWxvdyB0aGUgZmlyc3QgaGl0XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW2ZyICsgMSwgZmNdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGlmIHdlIG1ha2UgaXQgdG8gaGVyZSB3ZSBnb3QgdHdvIHNoaXBzIG5leHQgdG8gZWFjaCBvdGhlcixcbiAgICAgICAgICAgICAgICAvLyBzbyB3ZSBuZWVkIHRvIGF0dGFjayB0byB0aGUgbGVmdCBhbmQgcmlnaHQgb2YgdGhlIGZpcnN0IGhpdFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmVib2FyZC52YWxpZExvYyhbZnIsIGZjICsgMV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbZnIsIGZjICsgMV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmVib2FyZC52YWxpZExvYyhbZnIsIGZjIC0gMV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbZnIsIGZjIC0gMV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmVib2FyZC52YWxpZExvYyhbZnIgKyAxLCBmY10pKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbZnIgKyAxLCBmY107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmVib2FyZC52YWxpZExvYyhbZnIgLSAxLCBmY10pKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbZnIgLSAxLCBmY107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd3ZSBzaG91bGQgbmV2ZXIgZ2V0IGhlcmUgdHdvIGNvbHMgbmV4dCB0byBlYWNoIG90aGVyIGVkaXRpb24nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgLy8gcmVzZXQgdGhlIGdhbWVcbiAgICAgICAgcmVzZXQoKSB7XG4gICAgICAgICAgICB0aGlzLnBib2FyZCA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmVib2FyZCA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLnAxYm9hcmQgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5wMmJvYXJkID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMudHVybnMgPSAtMjtcbiAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gZ2FtZV9zdGF0dXMucDFfc2V0dGluZ191cDtcbiAgICAgICAgICAgIHRoaXMubW9kZSA9IFwiZWFzeVwiO1xuICAgICAgICAgICAgdGhpcy5wMWJvYXJkID0gQm9hcmQoKTtcbiAgICAgICAgICAgIHRoaXMucDJib2FyZCA9IEJvYXJkKCk7XG4gICAgICAgICAgICB0aGlzLnBib2FyZCA9IHRoaXMucDFib2FyZDtcbiAgICAgICAgICAgIHRoaXMuZWJvYXJkID0gdGhpcy5wMmJvYXJkO1xuICAgICAgICB9LFxuICAgIH07XG59XG5cbmV4cG9ydCB7IGdhbWVfc3RhdHVzLCBTaGlwLCBCb2FyZCwgR2FtZSB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwicmVuZGVyXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5zY3NzJztcbmltcG9ydCB7IGdhbWVfc3RhdHVzIH0gZnJvbSAnLi9sb2dpYyc7XG5cbi8vIHRha2VzIGEgZ2FtZSBcbmV4cG9ydCBmdW5jdGlvbiBsYXlvdXQoZ2FtZSkge1xuICAgIC8vIGNsZWFyIHRoZSBwYWdlXG4gICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSAnJztcbiAgICAvLyBvbmx5IGhhdmUgYSBzcGFjZWJhcmQga2V5ZG93biBsaXN0ZW5lciBpZiB0aGUgZ2FtZSBpcyBpbiBzZXR1cCBtb2RlXG4gICAgaWYgKGdhbWUuc3RhdHVzIDwgZ2FtZV9zdGF0dXNbXCJwMV90dXJuXCJdKSB7XG5cbiAgICAgICAgd2luZG93Lm9ua2V5ZG93biA9IChldikgPT4ge1xuICAgICAgICAgICAgLy8gaWYgdGhlIGN1cnJlbnQgZ2FtZSBzdGF0ZSBhbGxvd3MgcGxhY2VtZW50LCB3ZSB0cnkgdG8gcGxhY2UgdGhlIHNoaXBcbiAgICAgICAgICAgIGlmIChldi5rZXlDb2RlID09IDEzKSB7XG4gICAgICAgICAgICAgICAgcGxhY2VIb3ZlclNoaXAoZ2FtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gY3JlYXRpbmcgc2VjdGlvbnNcbiAgICBjb25zdCBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGJ1aWxkSGVhZGVyKGgsIGdhbWUpO1xuICAgIGJ1aWxkRm9vdGVyKGYpO1xuXG4gICAgYi5jbGFzc0xpc3QuYWRkKCdib2R5Jyk7XG4gICAgY29uc3QgaW5mb19zZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3Qga2V5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHBsYWNlX3JhbmRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgaW5mb19zZWN0LmNsYXNzTGlzdC5hZGQoJ2luZm8nKTtcbiAgICBwbGFjZV9yYW5kb20uaWQgPSAncnAnO1xuXG4gICAgYnVpbGRLZXkoa2V5KTtcbiAgICAoZ2FtZS5wYm9hcmQuc2hpcF9kZWNrLmxlbmd0aCAhPSAwKSA/IHNldERvY2soZG9jaywgZ2FtZSkgOiBzZXREb2NrKGRvY2ssIGdhbWUsIHRydWUpO1xuICAgIHBsYWNlX3JhbmRvbS50ZXh0Q29udGVudCA9ICdQTEFDRSBNWSBTSElQUyc7XG4gICAgcGxhY2VfcmFuZG9tLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGdhbWUuYXV0b1NldCgpO1xuICAgICAgICBpZiAoZ2FtZS5tb2RlID09ICdlYXN5JyB8fCBnYW1lLm1vZGUgPT0gJ2hhcmQnKSB7XG4gICAgICAgICAgICBnYW1lLmF1dG9TZXQoKTtcbiAgICAgICAgfVxuICAgICAgICBsYXlvdXQoZ2FtZSk7XG4gICAgfVxuXG4gICAgaW5mb19zZWN0LmFwcGVuZENoaWxkKGtleSk7XG4gICAgaW5mb19zZWN0LmFwcGVuZENoaWxkKGRvY2spO1xuICAgIGlmIChnYW1lLnN0YXR1cyA8IGdhbWVfc3RhdHVzW1wicDFfdHVyblwiXSkge1xuICAgICAgICBpbmZvX3NlY3QuYXBwZW5kQ2hpbGQocGxhY2VfcmFuZG9tKTtcbiAgICB9XG5cbiAgICBjb25zdCBib2FyZF9zZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnVpbGRCb2FyZHMoZ2FtZSwgYm9hcmRfc2VjdCk7XG4gICAgLy8gYXR0YWNoIGV2ZW50IGxpc3RlbmVycyB0byB0aGUgYm9hcmRzXG5cbiAgICBjb25zdCByZXNldF9zZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcmVzZXRfc2VjdC5jbGFzc0xpc3QuYWRkKCdyZXNldCcpO1xuICAgIGJ1aWxkUmVzZXRTZWN0aW9uKGdhbWUsIHJlc2V0X3NlY3QpO1xuXG4gICAgYi5hcHBlbmRDaGlsZChpbmZvX3NlY3QpO1xuICAgIGIuYXBwZW5kQ2hpbGQoYm9hcmRfc2VjdCk7XG4gICAgYi5hcHBlbmRDaGlsZChyZXNldF9zZWN0KTtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaCk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChiKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGYpO1xuXG4gICAgLy8gYXR0YWNoIGV2ZW50IGxpc3RlbmVyc1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyArK2opIHtcbiAgICAgICAgICAgIGF0dGFjaEF0dGFja0xpc3RlbmVyKCdlcicgKyBpICsgJ2MnICsgaiwgZ2FtZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gc2V0UEhvdmVyKGdhbWUpO1xufVxuXG5mdW5jdGlvbiBidWlsZEhlYWRlcihoLCBnYW1lKSB7XG4gICAgY29uc3Qgc3RhdHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaWYgKGdhbWUubW9kZSA9PSAnZWFzeScpIHtcbiAgICAgICAgc3RhdHVzLnRleHRDb250ZW50ID0gJ0VBU1kgTU9ERSc7XG4gICAgfVxuICAgIGVsc2UgaWYgKGdhbWUubW9kZSA9PSAnaGFyZCcpIHtcbiAgICAgICAgc3RhdHVzLnRleHRDb250ZW50ID0gJ0hBUkQgTU9ERSc7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdHVzLnRleHRDb250ZW50ID0gZ2FtZS5yZWFkYWJsZV9zdGF0dXMoZ2FtZS5zdGF0dXMpO1xuICAgIH1cblxuICAgIHN0YXR1cy5jbGFzc0xpc3QuYWRkKCdzdGF0dXMnKTtcbiAgICBoLmNsYXNzTGlzdC5hZGQoJ2hlYWQnKTtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBjb25zdCBnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSAnQkFUVExFU0hJUCc7XG4gICAgZ2gudGV4dENvbnRlbnQgPSAnR0lUSFVCJ1xuICAgIGdoLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG9wZW4oJ2h0dHBzOi8vZ2l0aHViLmNvbS9UYW5uZXJIb3Juc2J5Ny9vZGluLWJhdHRsZXNoaXAnKTtcbiAgICB9O1xuXG4gICAgaC5hcHBlbmRDaGlsZChzdGF0dXMpO1xuICAgIGguYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGguYXBwZW5kQ2hpbGQoZ2gpO1xufVxuXG5mdW5jdGlvbiBidWlsZEZvb3RlcihmKSB7XG4gICAgZi5jbGFzc0xpc3QuYWRkKCdmb290Jyk7XG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgbmFtZS50ZXh0Q29udGVudCA9ICdAdGFubmVyaG9ybnNieTcnO1xuICAgIGYuYXBwZW5kQ2hpbGQobmFtZSk7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkS2V5KGtleSkge1xuICAgIGtleS5jbGFzc0xpc3QuYWRkKCdrZXknKTtcbiAgICBjb25zdCBoaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNvbnN0IG1pc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNvbnN0IHN1bmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBoaXRfZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBtaXNzX2Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3Qgc3Vua19kZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGhpdF9zZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbWlzc19zZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3Qgc3Vua19zZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAga2V5LmNsYXNzTGlzdC5hZGQoJ2tleScpO1xuICAgIGhpdC5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgICBtaXNzLmNsYXNzTGlzdC5hZGQoJ21pc3MnKTtcbiAgICBzdW5rLmNsYXNzTGlzdC5hZGQoJ3N1bmsnKTtcbiAgICBoaXQudGV4dENvbnRlbnQgPSAnWCc7XG4gICAgbWlzcy50ZXh0Q29udGVudCA9ICdYJztcbiAgICBzdW5rLnRleHRDb250ZW50ID0gJyc7XG4gICAgaGl0X2Rlc2MudGV4dENvbnRlbnQgPSAnSElUJztcbiAgICBtaXNzX2Rlc2MudGV4dENvbnRlbnQgPSAnTUlTUyc7XG4gICAgc3Vua19kZXNjLnRleHRDb250ZW50ID0gJ1NVTksnO1xuICAgIGhpdF9zZWN0LmFwcGVuZENoaWxkKGhpdF9kZXNjKTtcbiAgICBoaXRfc2VjdC5hcHBlbmRDaGlsZChoaXQpO1xuICAgIG1pc3Nfc2VjdC5hcHBlbmRDaGlsZChtaXNzX2Rlc2MpO1xuICAgIG1pc3Nfc2VjdC5hcHBlbmRDaGlsZChtaXNzKTtcbiAgICBzdW5rX3NlY3QuYXBwZW5kQ2hpbGQoc3Vua19kZXNjKTtcbiAgICBzdW5rX3NlY3QuYXBwZW5kQ2hpbGQoc3Vuayk7XG4gICAgaGl0X3NlY3QuY2xhc3NMaXN0LmFkZCgna2V5X3NlY3QnKTtcbiAgICBtaXNzX3NlY3QuY2xhc3NMaXN0LmFkZCgna2V5X3NlY3QnKVxuICAgIHN1bmtfc2VjdC5jbGFzc0xpc3QuYWRkKCdrZXlfc2VjdCcpXG4gICAga2V5LmFwcGVuZENoaWxkKGhpdF9zZWN0KTtcbiAgICBrZXkuYXBwZW5kQ2hpbGQobWlzc19zZWN0KTtcbiAgICBrZXkuYXBwZW5kQ2hpbGQoc3Vua19zZWN0KTtcblxufVxuXG5mdW5jdGlvbiBzZXREb2NrKGRvY2ssIGdhbWUsIHBsYWNlZCA9IGZhbHNlKSB7XG4gICAgY29uc3QgZG9ja19oZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjb25zdCBib2F0X2xvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGJvYXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBkb2NrX2Zvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG5cbiAgICBkb2NrLmNsYXNzTGlzdC5hZGQoJ2RvY2snKTtcbiAgICBib2F0LnRleHRDb250ZW50ID0gJyc7XG4gICAgYm9hdC5jbGFzc0xpc3QuYWRkKCdib2F0Jyk7XG5cbiAgICBib2F0X2xvdC5jbGFzc0xpc3QuYWRkKCdib2F0X2xvdCcpO1xuXG4gICAgbGV0IHNoaXBfZGVjayA9IGdhbWUucGJvYXJkLnNoaXBfZGVjay5zb3J0KCk7XG4gICAgZG9ja19oZWFkLnRleHRDb250ZW50ID0gJ1BsYWNlIFlvdXIgU2hpcHMnO1xuICAgIGRvY2tfZm9vdGVyLnRleHRDb250ZW50ID0gJ0NsaWNrIG9uZSBvZiB0aGUgc2hpcHMgYWJvdmUgdG8gc2VsZWN0IGl0LCBwcmVzcyBSIHRvIHJvdGF0ZSBpdCwgYW5kIHByZXNzIGVudGVyIHRvIHBsYWNlIGl0ISc7XG5cbiAgICBpZiAocGxhY2VkKSB7XG4gICAgICAgIGJvYXQuY2xhc3NMaXN0LmFkZCgnZW5lbXknKTtcbiAgICAgICAgZG9ja19oZWFkLnRleHRDb250ZW50ID0gJ1JlbWFpbmluZyBFbmVteSBTaGlwczonO1xuICAgICAgICBkb2NrX2Zvb3Rlci50ZXh0Q29udGVudCA9ICdLZWVwIEZpcmluZyEnXG4gICAgICAgIHNoaXBfZGVjayA9IGdhbWUuZWJvYXJkLnNoaXBzX3N0YW5kaW5nXG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwX2RlY2subGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHRtcF9ib2F0ID0gYm9hdC5jbG9uZU5vZGUoKTtcbiAgICAgICAgbGV0IHNoaXBfbGVuZ3RoID0gTWF0aC5mbG9vcihzaGlwX2RlY2tbaV0gLyA1ICogMTAwKTtcbiAgICAgICAgdG1wX2JvYXQuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgYHdpZHRoOiR7c2hpcF9sZW5ndGh9JWApO1xuICAgICAgICB0bXBfYm9hdC5vbmNsaWNrID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGxldCBsZW5ndGggPSBNYXRoLmZsb29yKHBhcnNlSW50KGUudGFyZ2V0LnN0eWxlLndpZHRoXG4gICAgICAgICAgICAgICAgLnNsaWNlKDAsIC0xKSkgLyAyMCk7XG4gICAgICAgICAgICBsZXQgcm90YXRpb24gPSAwO1xuICAgICAgICAgICAgZ2FtZS5wYm9hcmQuc2V0Q3VyclNoaXAobGVuZ3RoKTtcblxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXYpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXYua2V5ID09ICdyJykge1xuICAgICAgICAgICAgICAgICAgICByb3RhdGlvbiArPSAxO1xuICAgICAgICAgICAgICAgICAgICByb3RhdGlvbiAlPSA0O1xuICAgICAgICAgICAgICAgICAgICBnYW1lLnBib2FyZC5yb3RhdGlvbiA9IHJvdGF0aW9uO1xuXG4gICAgICAgICAgICAgICAgICAgIGxheW91dChnYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBib2F0X2xvdC5hcHBlbmRDaGlsZCh0bXBfYm9hdCk7XG4gICAgfVxuXG4gICAgZG9jay5hcHBlbmRDaGlsZChkb2NrX2hlYWQpO1xuICAgIGRvY2suYXBwZW5kQ2hpbGQoYm9hdF9sb3QpO1xuICAgIC8vIGRvY2suYXBwZW5kQ2hpbGQoZG9ja19mb290ZXIpO1xufVxuXG5mdW5jdGlvbiBidWlsZEJvYXJkcyhnYW1lLCBib2FyZF9zZWN0KSB7XG4gICAgYm9hcmRfc2VjdC5jbGFzc0xpc3QuYWRkKCdnYW1lJyk7XG4gICAgY29uc3QgZnVsbGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZnVsbGJvYXJkLmNsYXNzTGlzdC5hZGQoJ2Z1bGxib2FyZCcpO1xuICAgIGNvbnN0IHRvcF9ib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGJvdF9ib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNldEJvYXJkKHRvcF9ib2FyZCwgZ2FtZS5lYm9hcmQsIHRydWUpO1xuICAgIHNldEJvYXJkKGJvdF9ib2FyZCwgZ2FtZS5wYm9hcmQpO1xuICAgIC8vIGFkZCBhdHRhY2sgbGlzdGVuZXJzIHRvIGVhY2ggY2VsbCBpbiB0aGUgdG9wIGJvYXJkXG4gICAgZnVsbGJvYXJkLmFwcGVuZENoaWxkKHRvcF9ib2FyZCk7XG4gICAgZnVsbGJvYXJkLmFwcGVuZENoaWxkKGJvdF9ib2FyZCk7XG4gICAgYm9hcmRfc2VjdC5hcHBlbmRDaGlsZChmdWxsYm9hcmQpO1xufVxuXG5mdW5jdGlvbiBzZXRCb2FyZChiX2VsZSwgYm9hcmQsIGVuZW15ID0gZmFsc2UpIHtcbiAgICBiX2VsZS5jbGFzc0xpc3QuYWRkKCdib2FyZCcpO1xuICAgIGNvbnN0IGVtcHR5Q2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGhpdENlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBtaXNzQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHN1bmtDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgeW91cnNDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGl0Q2VsbC5jbGFzc0xpc3QuYWRkKCdoaXQnLCAnY2VsbCcpO1xuICAgIG1pc3NDZWxsLmNsYXNzTGlzdC5hZGQoJ21pc3MnLCAnY2VsbCcpO1xuICAgIHN1bmtDZWxsLmNsYXNzTGlzdC5hZGQoJ3N1bmsnLCAnY2VsbCcpO1xuICAgIGVtcHR5Q2VsbC5jbGFzc0xpc3QuYWRkKCdlbXB0eScsICdjZWxsJyk7XG4gICAgeW91cnNDZWxsLmNsYXNzTGlzdC5hZGQoJ3lvdXJzJywgJ2NlbGwnKTtcblxuICAgIGlmIChlbmVteSkge1xuICAgICAgICBlbXB0eUNlbGwuY2xhc3NMaXN0LmFkZCgnZWNlbGwnKTtcbiAgICAgICAgaGl0Q2VsbC5jbGFzc0xpc3QuYWRkKCdlY2VsbCcpO1xuICAgICAgICBtaXNzQ2VsbC5jbGFzc0xpc3QuYWRkKCdlY2VsbCcpO1xuICAgICAgICBzdW5rQ2VsbC5jbGFzc0xpc3QuYWRkKCdlY2VsbCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGVtcHR5Q2VsbC5jbGFzc0xpc3QuYWRkKCdwY2VsbCcpO1xuICAgICAgICBoaXRDZWxsLmNsYXNzTGlzdC5hZGQoJ3BjZWxsJyk7XG4gICAgICAgIG1pc3NDZWxsLmNsYXNzTGlzdC5hZGQoJ3BjZWxsJyk7XG4gICAgICAgIHN1bmtDZWxsLmNsYXNzTGlzdC5hZGQoJ3BjZWxsJyk7XG4gICAgICAgIHlvdXJzQ2VsbC5jbGFzc0xpc3QuYWRkKCdwY2VsbCcpO1xuICAgIH1cblxuICAgIGVtcHR5Q2VsbC50ZXh0Q29udGVudCA9ICcnO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICAgICAgbGV0IHRtcDtcbiAgICAgICAgICAgIGlmIChib2FyZC5ib2FyZFtpXVtqXSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgdG1wID0gZW1wdHlDZWxsLmNsb25lTm9kZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoYm9hcmQuYm9hcmRbaV1bal0gPT0gMSkge1xuICAgICAgICAgICAgICAgIHRtcCA9IG1pc3NDZWxsLmNsb25lTm9kZSgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICAgICAgeC50ZXh0Q29udGVudCA9ICdYJztcbiAgICAgICAgICAgICAgICB0bXAuYXBwZW5kQ2hpbGQoeCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChib2FyZC5ib2FyZFtpXVtqXS5pc1N1bmsoKSkge1xuICAgICAgICAgICAgICAgIHRtcCA9IHN1bmtDZWxsLmNsb25lTm9kZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoYm9hcmQuaGl0X2xpc3QuaW5jbHVkZXMoSlNPTi5zdHJpbmdpZnkoW2ksIGpdKSkpIHtcbiAgICAgICAgICAgICAgICB0bXAgPSBoaXRDZWxsLmNsb25lTm9kZSgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICAgICAgeC50ZXh0Q29udGVudCA9ICdYJztcbiAgICAgICAgICAgICAgICB0bXAuYXBwZW5kQ2hpbGQoeCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICghZW5lbXkpIHtcbiAgICAgICAgICAgICAgICB0bXAgPSB5b3Vyc0NlbGwuY2xvbmVOb2RlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0bXAgPSBlbXB0eUNlbGwuY2xvbmVOb2RlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChlbmVteSkge1xuICAgICAgICAgICAgICAgIHRtcC5pZCA9ICdlJ1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0bXAuaWQgPSAncCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRtcC5pZCArPSAncicgKyBpICsgJ2MnICsgajtcblxuICAgICAgICAgICAgYl9lbGUuYXBwZW5kQ2hpbGQodG1wKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gYXR0YWNoQXR0YWNrTGlzdGVuZXIoY2VsbF9pZCwgZ2FtZSkge1xuICAgIGxldCBjZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2VsbF9pZCk7XG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYgKGdhbWUuc3RhdHVzIDwgZ2FtZV9zdGF0dXNbXCJwMV90dXJuXCJdKSB7XG4gICAgICAgICAgICBhbGVydCgnUGxlYXNlIHBsYWNlIHlvdXIgc2hpcHMgZmlyc3QhJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGkgPSBwYXJzZUludChjZWxsLmlkLmNoYXJBdCgyKSk7XG4gICAgICAgIGxldCBqID0gcGFyc2VJbnQoY2VsbC5pZC5jaGFyQXQoNCkpO1xuICAgICAgICBsZXQgYXR0ID0gZ2FtZS5hdHRhY2soW2ksIGpdKTtcbiAgICAgICAgaWYgKGF0dCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgLy8gYWxlcnQoJ0ludmFsaWQgQXR0YWNrIScpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIGlmIHRoZSBnYW1lIGlzIG92ZXIsIHdlIHNob3VsZCBkaXNwbGF5IHRoZSB3aW4gc2NyZWVuXG4gICAgICAgIGlmIChnYW1lLnN0YXR1cyA9PSBnYW1lX3N0YXR1cy5wMV93aW4gfHwgZ2FtZS5zdGF0dXMgPT0gZ2FtZV9zdGF0dXMucDJfd2luKSB7XG4gICAgICAgICAgICB3aW5Db25kaXRpb24oZ2FtZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgaXRzIGFpIG1vZGUsIHdlIHNob3VsZCBhdXRvYXR0YWNrIHRoZSBwbGF5ZXJcbiAgICAgICAgaWYgKGdhbWUubW9kZSA9PSAnZWFzeScgfHwgZ2FtZS5tb2RlID09ICdoYXJkJykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZ2FtZS5haUF0dGFjaygpKTtcbiAgICAgICAgICAgIC8vIGlmIHRoZSBnYW1lIGlzIG92ZXIsIHdlIHNob3VsZCBkaXNwbGF5IHRoZSB3aW4gc2NyZWVuXG4gICAgICAgICAgICBpZiAoZ2FtZS5zdGF0dXMgPT0gZ2FtZV9zdGF0dXMucDFfd2luIHx8IGdhbWUuc3RhdHVzID09IGdhbWVfc3RhdHVzLnAyX3dpbikge1xuICAgICAgICAgICAgICAgIHdpbkNvbmRpdGlvbihnYW1lKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsYXlvdXQoZ2FtZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyB1cGRhdGUgdGhlIGNlbGwgYmFzZWQgb24gdGhlIGF0dGFja1xuICAgICAgICBpZiAoYXR0ID09ICdtaXNzJykge1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG4gICAgICAgICAgICBjb25zdCB4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgeC50ZXh0Q29udGVudCA9ICdYJztcbiAgICAgICAgICAgIGNlbGwuYXBwZW5kQ2hpbGQoeCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYXR0ID09ICdzdW5rJykge1xuICAgICAgICAgICAgLy8geW91IHN1bmsgX19fXyBzaGlwIVxuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdzdW5rJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuICAgICAgICAgICAgY29uc3QgeCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIHgudGV4dENvbnRlbnQgPSAnWCc7XG4gICAgICAgICAgICBjZWxsLmFwcGVuZENoaWxkKHgpO1xuICAgICAgICB9XG4gICAgICAgIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIC8vIGRpc3BsYXkgdGhlIHBhc3MgdG8gcGxheWVyIDIgc2NyZWVuXG4gICAgICAgIGNvbnN0IHBhc3Nfc2NyZWVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHBhc3Nfc2NyZWVuLmNsYXNzTGlzdC5hZGQoJ3Bhc3MnKTtcbiAgICAgICAgcGFzc19zY3JlZW4uY2xhc3NMaXN0LmFkZCgnZ2cnKVxuXG4gICAgICAgIGxldCBwbGF5ZXIgPSAoZ2FtZS5zdGF0dXMgPT0gZ2FtZV9zdGF0dXMucDFfdHVybikgPyBnYW1lLnAxX25hbWUgOiBnYW1lLnAyX25hbWU7XG5cbiAgICAgICAgY29uc3QgcGFzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIHBhc3MudGV4dENvbnRlbnQgPSAnUEFTUyBUTyAnICsgcGxheWVyO1xuICAgICAgICBwYXNzX3NjcmVlbi5hcHBlbmRDaGlsZChwYXNzKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwYXNzX3NjcmVlbik7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICBsYXlvdXQoZ2FtZSk7XG4gICAgICAgIH0sIDMwMDApO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiB3aW5Db25kaXRpb24oZ2FtZSkge1xuICAgIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gJyc7XG4gICAgY29uc3QgZW5kX3NjcmVlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIC8vIGRpc3BsYXkgd2hpY2ggcGxheWVyIHdvblxuICAgIGNvbnN0IHdpbl9kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB3aW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHdpbl9kaXYuY2xhc3NMaXN0LmFkZCgnd2luX2RpdicpO1xuICAgIHdpbi50ZXh0Q29udGVudCA9IChnYW1lLnN0YXR1cyA9PSBnYW1lX3N0YXR1cy5wMV93aW4gPyBnYW1lLnAxX25hbWUgOiBnYW1lLnAyX25hbWUpICsgJyBXSU5TISc7XG4gICAgLy8gYWRkIGEgc2VjdGlvbiB0aGF0IHNheXMgaG93IG1hbnkgc2hpcHMgdGhlIGVuZW15IGhhZCBsZWZ0XG4gICAgY29uc3Qgc2hpcHNfbGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgc2hpcHNfbGVmdC50ZXh0Q29udGVudCA9ICdpbiBvbmx5ICcgKyBNYXRoLmZsb29yKGdhbWUudHVybnMgLyAyKSArICcgdHVybnMhJztcbiAgICAvLyBhcHBlbmQgaGVhZGVyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnVpbGRIZWFkZXIoaGVhZGVyLCBnYW1lKTtcbiAgICBlbmRfc2NyZWVuLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgZ2FtZS5yZXNldCgpO1xuICAgIC8vIGFkZCBhIGJ1dHRvbiB0byByZXR1cm5cbiAgICBjb25zdCByZXR1cm5fYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcmV0dXJuX2J0bi50ZXh0Q29udGVudCA9ICdSRVRVUk4nO1xuICAgIHJldHVybl9idG4uY2xhc3NMaXN0LmFkZCgncmV0dXJuJyk7XG4gICAgcmV0dXJuX2J0bi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICBsYXlvdXQoZ2FtZSk7XG4gICAgfVxuICAgIHJldHVybl9idG4uY2xhc3NMaXN0LmFkZCgncmV0dXJuYnRuJyk7XG4gICAgd2luX2Rpdi5hcHBlbmRDaGlsZCh3aW4pO1xuICAgIHdpbl9kaXYuYXBwZW5kQ2hpbGQoc2hpcHNfbGVmdCk7XG4gICAgd2luX2Rpdi5hcHBlbmRDaGlsZChyZXR1cm5fYnRuKTtcbiAgICBlbmRfc2NyZWVuLmFwcGVuZENoaWxkKHdpbl9kaXYpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZW5kX3NjcmVlbik7XG5cblxufVxuXG5mdW5jdGlvbiBidWlsZFJlc2V0U2VjdGlvbihnYW1lLCByZXNldF9zZWN0KSB7XG4gICAgLy8gcHZwIG1vZGUgYnRuXG4gICAgY29uc3QgcHZwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcHZwLnRleHRDb250ZW50ID0gJ1BWUCBNT0RFJztcbiAgICBwdnAuY2xhc3NMaXN0LmFkZCgncHZwYnRuJyk7XG4gICAgcmVzZXRfc2VjdC5hcHBlbmRDaGlsZChwdnApO1xuICAgIHB2cC5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICBnYW1lLnJlc2V0KCk7XG4gICAgICAgIGdhbWUubW9kZSA9ICdwdnAnO1xuICAgICAgICBnYW1lLnAxX25hbWUgPSBwcm9tcHQoJ1BsYXllciAxLCBlbnRlciB5b3VyIG5hbWU6JykudG9VcHBlckNhc2UoKTtcbiAgICAgICAgZ2FtZS5wMl9uYW1lID0gcHJvbXB0KCdQbGF5ZXIgMiwgZW50ZXIgeW91ciBuYW1lOicpLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIGxheW91dChnYW1lKTtcbiAgICB9XG5cbiAgICAvLyBlYXN5IG1vZGUgYnRuXG4gICAgY29uc3QgZWFzeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGVhc3kudGV4dENvbnRlbnQgPSAnRUFTWSBNT0RFJztcbiAgICBlYXN5LmNsYXNzTGlzdC5hZGQoJ2Vhc3lidG4nKTtcbiAgICByZXNldF9zZWN0LmFwcGVuZENoaWxkKGVhc3kpO1xuICAgIGVhc3kub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgZ2FtZS5yZXNldCgpO1xuICAgICAgICBnYW1lLm1vZGUgPSAnZWFzeSc7XG4gICAgICAgIGxheW91dChnYW1lKTtcbiAgICB9XG4gICAgLy8gaGFyZCBtb2RlIGJ0blxuICAgIGNvbnN0IGhhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBoYXJkLnRleHRDb250ZW50ID0gJ0hBUkQgTU9ERSc7XG4gICAgaGFyZC5jbGFzc0xpc3QuYWRkKCdoYXJkYnRuJyk7XG4gICAgcmVzZXRfc2VjdC5hcHBlbmRDaGlsZChoYXJkKTtcbiAgICBoYXJkLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGdhbWUucmVzZXQoKTtcbiAgICAgICAgZ2FtZS5tb2RlID0gJ2hhcmQnO1xuICAgICAgICBsYXlvdXQoZ2FtZSk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICByZXNldC50ZXh0Q29udGVudCA9ICdSRVNFVCc7XG4gICAgcmVzZXQuY2xhc3NMaXN0LmFkZCgncmVzZXRidG4nKTtcbiAgICByZXNldF9zZWN0LmFwcGVuZENoaWxkKHJlc2V0KTtcbiAgICByZXNldC5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICBnYW1lLnJlc2V0KCk7XG4gICAgICAgIGxheW91dChnYW1lKTtcbiAgICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09VG8gRG89PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gcmVkbyBsb2dpYy50ZXN0LmpzXG4vLyBmaXggaG92ZXIgZnVuY3Rpb25hbGl0eVxuLy8gY2xlYW4gdXAgbG9naWMuanNcbi8vIHdyaXRlIG91dCByZWFkbWUgd2l0aCBsb2dpYyBmb3IgcHJvYmFiaWxpc3RpYyAoaGFyZCkgbW9kZVxuLy8gLS0tZXZhbHVhdGUgdXNpbmcgYmF5ZXNpYW4gc2VhcmNoIGFsZ29yaXRobVxuLy8gLS0tZXZhbHVhdGUgdXNpbmcgZ3JlZWR5IHNlYXJjaCBhbGdvcml0aG1cbi8vIGdldCB0aGUgbnVtYmVycyBvbiBlYWNoIGFwcHJvYWNoIHdpdGggYW4gYXV0b21hdGVkIHRlc3Rcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09RnV0dXJlIEZlYXR1cmVzPT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIGNvbm5lY3QgdG8gYmFja2VuZCB3aXRoIHNpZ24taW4sIGxlYWRlcmJvYXJkLCBhbmQgc3RhdHNcbi8vIGFkZCBuZXR3b3JrIHB2cCBtb2RlXG4vLyBhZGQgYWkgbW9kZSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==