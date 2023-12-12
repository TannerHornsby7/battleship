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

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/******/ 			"game": 0
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
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ "./src/logic.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ "./src/render.js");



function main(){
    const game = (0,_logic__WEBPACK_IMPORTED_MODULE_0__.Game)();
    game.init();
    (0,_render__WEBPACK_IMPORTED_MODULE_1__.layout)(game);
}

main();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDRCQUE0QixpQkFBaUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseUJBQXlCO0FBQ3pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsUUFBUTtBQUNwQyxnQ0FBZ0MsUUFBUTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsdUJBQXVCO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxPQUFPO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLE9BQU87QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFD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QTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7O0FDQStCO0FBQ0U7O0FBRWpDO0FBQ0EsaUJBQWlCLDRDQUFJO0FBQ3JCO0FBQ0EsSUFBSSwrQ0FBTTtBQUNWOztBQUVBLE8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLnNjc3M/NzViYSIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9sb2dpYy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvcmVuZGVyLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2dhbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcImFzc2V0cy9PcGVuX1NhbnMvT3BlblNhbnMtSXRhbGljLVZhcmlhYmxlRm9udF93ZHRoLHdnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogQ3VzdG9tIEZvbnQgKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSwgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiAxMDAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiO1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbnVsLFxcbmxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5idXR0b24sXFxuaW5wdXQge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgOWZyIDFmcjtcXG59XFxuXFxuLmhlYWQge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNmZyIDFmcjtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogaXZvcnk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAsIDAsIDEwMik7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xcbiAgaGVpZ2h0OiAxMDBweDtcXG59XFxuLmhlYWQgLnN0YXR1cyB7XFxuICBmb250LXNpemU6IG1lZGl1bTtcXG4gIHBhZGRpbmc6IDE1cHg7XFxufVxcbi5oZWFkIGJ1dHRvbiB7XFxuICBmb250LXNpemU6IDAuNWVtO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgd2lkdGg6IDYwJTtcXG4gIGNvbG9yOiByZ2IoMjAsIDAsIDEwMik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpdm9yeTtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggMnB4IHJnYigyMCwgMCwgMTAyKTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcbi5oZWFkIGJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogcmdiKDIwLCAwLCAxMDIpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaXZvcnk7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDJweCByZ2IoMjAsIDAsIDEwMik7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xcbn1cXG5cXG4uZm9vdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU2LCA1NSwgNTUpO1xcbiAgY29sb3I6IGl2b3J5O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYm9keSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDFmcjtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLmJvZHkgLmluZm8ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmcjtcXG59XFxuLmJvZHkgLmluZm8gLmJvYXQge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uYm9keSAuaW5mbyAua2V5IHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDIwLCAwLCAxMDIpO1xcbiAgcGFkZGluZzogMnB4IDEwcHggNXB4IDEwcHg7XFxuICB3aWR0aDogNTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5ib2R5IC5pbmZvIC5rZXkgLmtleV9zZWN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZ2FwOiAxNXB4O1xcbn1cXG4uYm9keSAuaW5mbyAua2V5IC5zdW5rIHtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1NCwgOSwgOSk7XFxuICBib3JkZXI6IDJweCBzb2xpZCBpdm9yeTtcXG59XFxuLmJvZHkgLmluZm8gLmtleSBoMiB7XFxuICBmb250LXNpemU6IDI1cHg7XFxufVxcbi5ib2R5IC5pbmZvIC5rZXkgLmhpdCB7XFxuICBjb2xvcjogcmdiKDE1NCwgOSwgOSk7XFxufVxcbi5ib2R5IC5pbmZvIC5kb2NrIHtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgd2lkdGg6IDYwJTtcXG59XFxuLmJvZHkgLmluZm8gLmRvY2sgaDIsXFxuLmJvZHkgLmluZm8gLmRvY2sgaDUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uYm9keSAuaW5mbyAuZG9jayBoMiB7XFxuICBjb2xvcjogcmdiKDIwLCAwLCAxMDIpO1xcbn1cXG4uYm9keSAuaW5mbyAuZG9jayAuYm9hdF9sb3Qge1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDIwLCAwLCAxMDIpO1xcbiAgcGFkZGluZzogOHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDVweDtcXG59XFxuLmJvZHkgLmluZm8gLmRvY2sgLmJvYXQge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcbi5ib2R5IC5pbmZvICNycCB7XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiA4MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAsIDAsIDEwMik7XFxuICBjb2xvcjogaXZvcnk7XFxufVxcbi5ib2R5IC5pbmZvICNycDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpdm9yeTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyMCwgMCwgMTAyKTtcXG4gIGNvbG9yOiByZ2IoMjAsIDAsIDEwMik7XFxufVxcbi5ib2R5IC5nYW1lIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbn1cXG4uYm9keSAuZ2FtZSAuZnVsbGJvYXJkIHtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDk1JTtcXG4gIHdpZHRoOiA3NSU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAsIDAsIDEwMik7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgcm93LWdhcDogNXB4O1xcbn1cXG4uYm9keSAuZ2FtZSAuYm9hcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgd2lkdGg6IDkwJTtcXG4gIGhlaWdodDogOTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcbi5ib2R5IC5nYW1lIC5jZWxsIHtcXG4gIG1hcmdpbjogMXB4O1xcbiAgcGFkZGluZzogbm9uZTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbi5ib2R5IC5nYW1lIHAge1xcbiAgcGFkZGluZzogMHB4O1xcbiAgbWFyZ2luOiAwcHg7XFxuICBib3JkZXI6IDBweDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogLTUwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5ib2R5IC5nYW1lIC5lbXB0eSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpdm9yeTtcXG59XFxuLmJvZHkgLmdhbWUgLmVtcHR5IC5ob3ZlcmluZyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cXG4uYm9keSAuZ2FtZSAubWlzcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpdm9yeTtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuLmJvZHkgLmdhbWUgLnN1bmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1NCwgOSwgOSk7XFxufVxcbi5ib2R5IC5nYW1lIC55b3VycyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuLmJvZHkgLmdhbWUgLnlvdXJzOmhvdmVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpdm9yeTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmJvZHkgLmdhbWUgLmhpdCB7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6IHJnYigxNTQsIDksIDkpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuLmJvZHkgLmdhbWUgLmhvdmVyaW5nIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2xhdGVncmF5O1xcbn1cXG4uYm9keSAuZ2FtZSAuaG92ZXJpbmc6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uYm9keSAuZ2FtZSAuZWNlbGw6aG92ZXIge1xcbiAgY3Vyc29yOiBjcm9zc2hhaXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcbi5ib2R5IC5yZXNldCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uYm9keSAucmVzZXQgYnV0dG9uIHtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgd2lkdGg6IDgwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTQsIDksIDkpO1xcbiAgY29sb3I6IGl2b3J5O1xcbn1cXG4uYm9keSAucmVzZXQgYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGl2b3J5O1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDE1NCwgOSwgOSk7XFxuICBjb2xvcjogcmdiKDIwLCAwLCAxMDIpO1xcbn1cXG4uYm9keSAucmVzZXQgLmhhcmRidG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcbi5ib2R5IC5yZXNldCAuaGFyZGJ0bjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpdm9yeTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG4uYm9keSAucmVzZXQgLmVhc3lidG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyZWVuO1xcbn1cXG4uYm9keSAucmVzZXQgLmVhc3lidG46aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaXZvcnk7XFxuICBib3JkZXI6IDJweCBzb2xpZCBkYXJrZ3JlZW47XFxuICBjb2xvcjogZGFya2dyZWVuO1xcbn1cXG4uYm9keSAucmVzZXQgLnB2cGJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAsIDAsIDEwMik7XFxufVxcbi5ib2R5IC5yZXNldCAucHZwYnRuOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGl2b3J5O1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDIwLCAwLCAxMDIpO1xcbiAgY29sb3I6IHJnYigyMCwgMCwgMTAyKTtcXG59XFxuXFxuLnJldHVybmJ0biB7XFxuICBtaW4taGVpZ2h0OiA1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG59XFxuLnJldHVybmJ0bjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpdm9yeTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uZ2cge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZm9udC1zaXplOiAzZW07XFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi53aW5fZGl2IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogM2VtO1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvX2Zvcm1hdHRpbmcuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZ0JBQUE7QUFDQTtFQUNFLHdCQUFBO0VBQ0EscUZBQUE7RUFFQSxpQkFBQTtFQUNBLGtCQUFBO0FDQUY7QURJQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtBQ0ZGOztBREtBOztFQUVFLFdBQUE7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QSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFjSjtBQWJJO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQS9OTztBQThPYjtBQWRNO0VBQ0UsZUFBQTtFQUNBLHVCQWxPSztFQW1PTCxnQ0FBQTtFQUNBLHNCQW5PSTtBQW1QWjtBQWJJO0VBQ0UsdUJBQUE7QUFlTjtBQWRNO0VBQ0UsZUFBQTtFQUNBLHVCQTNPSztFQTRPTCx1QkFBQTtFQUNBLFlBQUE7QUFnQlI7QUFiSTtFQUNFLDJCQUFBO0FBZU47QUFkTTtFQUNFLGVBQUE7RUFDQSx1QkFwUEs7RUFxUEwsMkJBQUE7RUFDQSxnQkFBQTtBQWdCUjtBQWJJO0VBQ0UsaUNBelBNO0FBd1FaO0FBZE07RUFDRSxlQUFBO0VBQ0EsdUJBN1BLO0VBOFBMLGlDQUFBO0VBQ0Esc0JBOVBJO0FBOFFaOztBQVZBO0VBQ0UsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FBYUY7QUFaRTtFQUNFLGVBQUE7RUFDQSx1QkEzUVM7RUE0UVQsdUJBQUE7RUFDQSxZQUFBO0FBY0o7O0FBVkE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUFhRjs7QUFWQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FBYUZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogQ3VzdG9tIEZvbnQgKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIjtcXG4gIHNyYzogdXJsKFxcXCJhc3NldHMvT3Blbl9TYW5zL09wZW5TYW5zLUl0YWxpYy1WYXJpYWJsZUZvbnRfd2R0aCx3Z2h0LnR0ZlxcXCIpLFxcbiAgICB1cmwoXFxcImFzc2V0cy9PcGVuX1NhbnMvT3BlblNhbnMtSXRhbGljLVZhcmlhYmxlRm9udF93ZHRoLHdnaHQudHRmXFxcIik7XFxuICBmb250LXdlaWdodDogMTAwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuLy8gc2V0dGluZyBiYXNpYyBlbGVtZW50IHByb3BlcnRpZXNcXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiO1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbnVsLFxcbmxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5idXR0b24sXFxuaW5wdXQge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXCIsXCJAdXNlIFxcXCJmb3JtYXR0aW5nXFxcIjtcXG5cXG4vLyB0aGVtZSBjb2xvcnNcXG4kbGlnaHRjb2xvcjogaXZvcnk7XFxuJGRhcmtjb2xvcjogcmdiKDIwLCAwLCAxMDIpO1xcblxcbi8vIHNldHRpbmcgdGhlbWVcXG5AbWl4aW4gdGhlbWUoJGRhcms6IHRydWUpIHtcXG4gIEBpZiAoJGRhcmspIHtcXG4gICAgY29sb3I6ICRsaWdodGNvbG9yO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFya2NvbG9yO1xcbiAgICAvLyBib3gtc2hhZG93OiAycHggMnB4IDJweCAkbGlnaHRjb2xvcjtcXG4gIH0gQGVsc2Uge1xcbiAgICBjb2xvcjogJGRhcmtjb2xvcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0Y29sb3I7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMnB4ICRkYXJrY29sb3I7XFxuICB9XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA5ZnIgMWZyO1xcbn1cXG5cXG4uaGVhZHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDZmciAxZnI7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgQGluY2x1ZGUgdGhlbWU7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgLnN0YXR1cyB7XFxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgfVxcbiAgYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAuNWVtO1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIEBpbmNsdWRlIHRoZW1lKGZhbHNlKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgICY6aG92ZXIge1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICBAaW5jbHVkZSB0aGVtZShmYWxzZSk7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLmZvb3R7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU2LCA1NSwgNTUpO1xcbiAgY29sb3I6ICRsaWdodGNvbG9yO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYm9keXtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgMWZyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcblxcbiAgLmluZm8ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnI7XFxuICAgIC5ib2F0IHtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG4gICAgLmtleXtcXG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgICAgYm9yZGVyOiAycHggc29saWQgJGRhcmtjb2xvcjtcXG4gICAgICBwYWRkaW5nOiAycHggMTBweCA1cHggMTBweDtcXG4gICAgICB3aWR0aDogNTAlO1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAua2V5X3NlY3Qge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBnYXA6IDE1cHg7XFxuICAgICAgfVxcbiAgICAgIC5zdW5rIHtcXG4gICAgICAgIHdpZHRoOiA1MHB4O1xcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1NCwgOSwgOSk7XFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkbGlnaHRjb2xvcjtcXG5cXG4gICAgICB9XFxuXFxuICAgICAgaDJ7XFxuICAgICAgICBmb250LXNpemU6IDI1cHg7XFxuICAgICAgfVxcbiAgICAgIC5oaXR7XFxuICAgICAgICBjb2xvcjogcmdiKDE1NCwgOSwgOSk7XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5kb2Nre1xcbiAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICAgIGgyLFxcbiAgICAgIGg1IHtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICB9XFxuICAgICAgaDIge1xcbiAgICAgICAgY29sb3I6cmdiKDIwLCAwLCAxMDIpO1xcbiAgICAgIH1cXG4gICAgICB3aWR0aDogNjAlO1xcbiAgICAgIC5ib2F0X2xvdHtcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRkYXJrY29sb3I7XFxuICAgICAgICBwYWRkaW5nOiA4cHg7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGdhcDogNXB4O1xcbiAgICAgIH1cXG4gICAgICAuYm9hdHtcXG4gICAgICAgIGhlaWdodDogMzBweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICAjcnAge1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICAgICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXG4gICAgICBoZWlnaHQ6IDUwcHg7XFxuICAgICAgd2lkdGg6IDgwJTtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFya2NvbG9yO1xcbiAgICAgIGNvbG9yOiAkbGlnaHRjb2xvcjtcXG4gICAgICAmOmhvdmVye1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0Y29sb3I7XFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkZGFya2NvbG9yO1xcbiAgICAgICAgY29sb3I6ICRkYXJrY29sb3I7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuXFxuICAuZ2FtZXtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gICAgLmZ1bGxib2FyZCB7XFxuICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gICAgICBoZWlnaHQ6IDk1JTtcXG4gICAgICB3aWR0aDogNzUlO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkYXJrY29sb3I7XFxuICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICAgICAgcm93LWdhcDogNXB4O1xcbiAgICB9XFxuICAgIC5ib2FyZHtcXG4gICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICAgIHdpZHRoOjkwJTtcXG4gICAgICBoZWlnaHQ6OTAlO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICAgIFxcbiAgICB9XFxuICAgIC5jZWxsIHtcXG4gICAgICBtYXJnaW46IDFweDtcXG4gICAgICBwYWRkaW5nOiBub25lO1xcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIH1cXG4gICAgcHtcXG4gICAgICBwYWRkaW5nOiAwcHg7XFxuICAgICAgbWFyZ2luOiAwcHg7XFxuICAgICAgYm9yZGVyOiAwcHg7XFxuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICAgIG1hcmdpbi1ib3R0b206IC01MHB4O1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcbiAgICAuZW1wdHkge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodGNvbG9yO1xcbiAgICAgIC5ob3ZlcmluZyB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbiAgICAgIH1cXG4gICAgfVxcbiAgXFxuICAgIC5taXNzIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHRjb2xvcjtcXG4gICAgICBjb2xvcjogYmxhY2s7XFxuICAgIH1cXG4gICAgLnN1bmsge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTQsIDksIDkpO1xcbiAgICB9XFxuICAgIC55b3VycyB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgICAgJjpob3ZlciB7XFxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0Y29sb3I7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgfVxcbiAgICB9XFxuICAgIC5oaXQge1xcbiAgICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICAgIGNvbG9yOiByZ2IoMTU0LCA5LCA5KTtcXG4gICAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICB9XFxuICAgIC5ob3ZlcmluZyB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzbGF0ZWdyYXk7XFxuICAgICAgJjpob3ZlcntcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICB9XFxuICAgIH1cXG4gICAgLmVjZWxsIHtcXG4gICAgICAmOmhvdmVyIHtcXG4gICAgICAgIGN1cnNvcjogY3Jvc3NoYWlyO1xcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbiAgXFxuICAucmVzZXQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBidXR0b24ge1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICAgICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXG4gICAgICBoZWlnaHQ6IDUwcHg7XFxuICAgICAgd2lkdGg6IDgwJTtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU0LCA5LCA5KTtcXG4gICAgICBjb2xvcjogJGxpZ2h0Y29sb3I7XFxuICAgICAgJjpob3ZlcntcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodGNvbG9yO1xcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmdiKDE1NCwgOSwgOSk7XFxuICAgICAgICBjb2xvcjogJGRhcmtjb2xvcjtcXG4gICAgICB9XFxuICAgIH1cXG4gICAgLmhhcmRidG4ge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICAgICY6aG92ZXJ7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHRjb2xvcjtcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICAgICAgY29sb3I6IGJsYWNrO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgICAuZWFzeWJ0biB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyZWVuO1xcbiAgICAgICY6aG92ZXJ7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHRjb2xvcjtcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGRhcmtncmVlbjtcXG4gICAgICAgIGNvbG9yOiBkYXJrZ3JlZW47XFxuICAgICAgfVxcbiAgICB9XFxuICAgIC5wdnBidG4ge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkYXJrY29sb3I7XFxuICAgICAgJjpob3ZlcntcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodGNvbG9yO1xcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgJGRhcmtjb2xvcjtcXG4gICAgICAgIGNvbG9yOiAkZGFya2NvbG9yO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4ucmV0dXJuYnRuIHtcXG4gIG1pbi1oZWlnaHQ6IDUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgJjpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHRjb2xvcjtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gIH1cXG59XFxuXFxuLmdne1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZm9udC1zaXplOiAzZW07XFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi53aW5fZGl2e1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiAzZW07XFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gY3JlYXRlcyBhIHNoaXAgb2YgYSBzcGVjaWZpZWQgbGVuZ3RoXG5mdW5jdGlvbiBTaGlwKGxlbmd0aCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIFwibGVuZ3RoXCI6IGxlbmd0aCxcbiAgICAgICAgXCJoaXRzXCI6IDAsXG4gICAgICAgIGhpdCgpIHtcbiAgICAgICAgICAgIHRoaXMuaGl0cyArPSAxO1xuICAgICAgICB9LFxuICAgICAgICBpc1N1bmsoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oaXRzID49IHRoaXMubGVuZ3RoXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmxldCBydW5fY250ID0gMCBcbmNvbnN0IFRPVEFMX1NISVBTID0gWzUsIDQsIDMsIDMsIDJdXG5cbi8vIGNyZWF0ZXMgYSBib2FyZCB3aGljaCBwbGFjZXMgc2hpcHMgYW5kIHJlY2lldmVzIGF0dGFja3NcbmZ1bmN0aW9uIEJvYXJkKCkgeyAvLyAxMHgxMCBib2FyZCAjIHggbGV0dGVyc1xuICAgIHJldHVybiB7XG4gICAgICAgIFwic2hpcF9kZWNrXCI6IFsuLi5UT1RBTF9TSElQU10sXG4gICAgICAgIFwic2hpcHNfc3RhbmRpbmdcIjogWy4uLlRPVEFMX1NISVBTXSxcbiAgICAgICAgXCJjdXJyX3NoaXBcIjogdW5kZWZpbmVkLFxuICAgICAgICBcInJvdGF0aW9uXCI6IDAsXG4gICAgICAgIFwiaGl0X25laWdoYm9yc1wiOiBbXSxcbiAgICAgICAgXCJoaXRfbGlzdFwiOiBbXSxcbiAgICAgICAgXCJib2FyZFwiOiBbXG4gICAgICAgICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgICAgICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgICAgICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgICAgICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgICAgICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgICAgICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgICAgICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgICAgICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgICAgICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgICAgICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgICAgIF0sXG4gICAgICAgIHNldEN1cnJTaGlwKGxlbiA9IHRoaXMuc2hpcF9kZWNrWzBdKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJfc2hpcCA9IFNoaXAobGVuKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBkZXRlcm1pbmVzIHZhbGlkaXR5IG9mIGxvY2F0aW9uXG4gICAgICAgIHZhbGlkTG9jKGxvYywgcGxhY2UgPSBmYWxzZSkge1xuICAgICAgICAgICAgLy8gaWYgdGhlIGxvY2F0aW9uIGlzIGluIHRoZSBoaXQgbGlzdCwgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICBpZiAodGhpcy5oaXRfbGlzdC5pbmNsdWRlcyhKU09OLnN0cmluZ2lmeShsb2MpKSkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd5b3UgaGF2ZSBhbHJlYWR5IGF0dGFja2VkIHRoaXMgbG9jYXRpb24gJ1xuICAgICAgICAgICAgICAgIC8vICAgICArIGxvY1swXSArICcgLCAnICsgbG9jWzFdKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByb3cgPSBsb2NbMF1cbiAgICAgICAgICAgIGNvbnN0IGNvbCA9IGxvY1sxXVxuICAgICAgICAgICAgaWYgKCEoMCA8PSByb3cgJiYgcm93IDw9IDkpKSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2ludmFsaWQgeSBsb2NhdGlvbjogJyArIHJvdyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCEoMCA8PSBjb2wgJiYgY29sIDw9IDkpKSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2ludmFsaWQgeCBsb2NhdGlvbjogJyArIGNvbCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBsYWNlID09IHRydWUgJiYgdGhpcy5ib2FyZFtyb3ddW2NvbF0gIT0gMCkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd0aGVyZSBpcyBhbHJlYWR5IGEgc2hpcCBoZXJlJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRbcm93XVtjb2xdID09IDEpIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygneW91IGhhdmUgYWxyZWFkeSBhdHRhY2tlZCB0aGlzIGxvY2F0aW9uICdcbiAgICAgICAgICAgICAgICAvLyAgICAgKyByb3cgKyAnICwgJyArIGNvbCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRbcm93XVtjb2xdICE9IDAgJiYgdGhpcy5ib2FyZFtyb3ddW2NvbF0uaXNTdW5rKCkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndGhpcyBzaGlwIGlzIHN1bmshJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gcGxhY2VzIGEgc2hpcCBnaXZlbiBhIGxvYyBhbmQgb3B0aW9uYWwgZGlyZWN0aW9uIFswUiwxRCwyTCwzVV1cbiAgICAgICAgcGxhY2VTaGlwKHNoaXAsIGxvYywgZGlyZWN0aW9uID0gdGhpcy5yb3RhdGlvbiwgY2hlY2sgPSBmYWxzZSkge1xuICAgICAgICAgICAgY29uc3Qgcm93ID0gbG9jWzBdXG4gICAgICAgICAgICBjb25zdCBjb2wgPSBsb2NbMV1cbiAgICAgICAgICAgIGxldCBzaGlwX2xvY3MgPSBbXTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRtcF9sb2MgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOiAvLyBkb3duXG4gICAgICAgICAgICAgICAgICAgICAgICB0bXBfbG9jID0gW3JvdyAtIGksIGNvbF07XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOiAvLyBsZWZ0XG4gICAgICAgICAgICAgICAgICAgICAgICB0bXBfbG9jID0gW3JvdywgY29sIC0gaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOiAvLyB1cFxuICAgICAgICAgICAgICAgICAgICAgICAgdG1wX2xvYyA9IFtyb3cgKyBpLCBjb2xdO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IC8vIHJpZ2h0XG4gICAgICAgICAgICAgICAgICAgICAgICB0bXBfbG9jID0gW3JvdywgY29sICsgaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghdGhpcy52YWxpZExvYyh0bXBfbG9jLCB0cnVlKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNoaXBfbG9jcy5wdXNoKHRtcF9sb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY2hlY2spIHsgLy8gaWYgaXRzIGp1c3QgYSBjaGVjaywgbm90IGEgcGxhY2VtZW50LCB3ZSByZXR1cm4gdGhlIHNwb3RzXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNoaXBfbG9jcztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2hpcF9sb2NzLmZvckVhY2goKHNlZykgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbc2VnWzBdXVtzZWdbMV1dID0gc2hpcDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gcmV0dXJucyAnc2luaycsICdoaXQnLCAnbWlzcycsIG9yICdpbnZhbGlkXG4gICAgICAgIHJlY2lldmVBdHRhY2sobG9jKSB7XG4gICAgICAgICAgICBjb25zdCByb3cgPSBsb2NbMF1cbiAgICAgICAgICAgIGNvbnN0IGNvbCA9IGxvY1sxXVxuICAgICAgICAgICAgLy8gY2hlY2sgdGhhdCB0aGUgcHJvdmlkZWQgaGl0IGlzIHZhbGlkXG4gICAgICAgICAgICBpZiAoIXRoaXMudmFsaWRMb2MobG9jKSkgcmV0dXJuIDA7XG5cbiAgICAgICAgICAgIC8vIGlmIGl0cyBhIG1pc3MsIHVwZGF0ZSB0aGUgYm9hcmQgYW5kIHJldHVybiBtaXNzXG4gICAgICAgICAgICBpZiAodGhpcy5ib2FyZFtyb3ddW2NvbF0gPT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbcm93XVtjb2xdID0gMTtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ21pc3MnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmJvYXJkW3Jvd11bY29sXS5oaXQoKTtcbiAgICAgICAgICAgIHRoaXMuaGl0X2xpc3QucHVzaChKU09OLnN0cmluZ2lmeShsb2MpKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRbcm93XVtjb2xdLmlzU3VuaygpKSB7XG4gICAgICAgICAgICAgICAgbGV0IGlkeCA9IHRoaXMuc2hpcHNfc3RhbmRpbmcuZmluZEluZGV4KFxuICAgICAgICAgICAgICAgICAgICAodmFsKSA9PiB2YWwgPT0gdGhpcy5ib2FyZFtyb3ddW2NvbF0ubGVuZ3RoXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNoaXBzX3N0YW5kaW5nLnNwbGljZShpZHgsIDEpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnNoaXBzX3N0YW5kaW5nLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAvL2hpdCBzaW5rIGFuZCBnYW1lIHdpbm5lciFcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDY5O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBhbGwgdGhlIGVsZW1lbnRzIGZyb20gdGhlIGhpdCBsaXN0IHRoYXQgYXJlIHN1bmtcbiAgICAgICAgICAgICAgICBjb25zdCBvbGRfaGl0X2xpc3QgPSBbLi4udGhpcy5oaXRfbGlzdF07XG4gICAgICAgICAgICAgICAgdGhpcy5oaXRfbGlzdCA9IHRoaXMuaGl0X2xpc3QuZmlsdGVyKFxuICAgICAgICAgICAgICAgICAgICAodmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByb3cgPSBKU09OLnBhcnNlKHZhbClbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb2wgPSBKU09OLnBhcnNlKHZhbClbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gISh0aGlzLmJvYXJkW3Jvd11bY29sXS5pc1N1bmsoKSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3VwZGF0ZWQgaGl0IGxpc3QgZnJvbSAnLCBvbGRfaGl0X2xpc3QsICcgdG8gJywgdGhpcy5oaXRfbGlzdCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdzdW5rJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9oaXQgbm8gc2lua1xuICAgICAgICAgICAgcmV0dXJuICdoaXQnO1xuICAgICAgICB9LFxuICAgICAgICAvLyB0b3AgcGl2b3QgZ2l2ZXMgdGhlIGJlc3QgbG9jYXRpb24gdG8gYXR0YWNrIGdpdmVuIHdlIG9ubHkgaGF2ZSBvbmUgaGl0IHRvIHBpdm90IGZyb21cbiAgICAgICAgdG9wUGl2b3QobG9jKSB7XG4gICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIGNoZWNrIHRoZSA0IGxvY2F0aW9ucyBhcm91bmQgdGhlIGxvYyBhbmQgc2VlIHdoaWNoIG9uZSBoYXMgdGhlIG1vc3RcbiAgICAgICAgICAgIC8vIHVuc2VlbiBsb2NhdGlvbnNcbiAgICAgICAgICAgIGxldCBkaXJlY3Rpb25zID0gdGhpcy5zdHJlbmd0aFNvcnRlZERpcmVjdGlvbnMobG9jKTtcbiAgICAgICAgICAgIGxldCB0b3BfZGlyID0gZGlyZWN0aW9uc1swXVswXTtcbiAgICAgICAgICAgIGxldCB0b3BfbG9jID0gbG9jO1xuICAgICAgICAgICAgc3dpdGNoICh0b3BfZGlyKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgICAgICAgICAgICAgIHRvcF9sb2NbMF0gKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICAgICAgICAgICAgICB0b3BfbG9jWzBdIC09IDE7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2Rvd24nOlxuICAgICAgICAgICAgICAgICAgICB0b3BfbG9jWzFdICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3VwJzpcbiAgICAgICAgICAgICAgICAgICAgdG9wX2xvY1sxXSAtPSAxO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaW52YWxpZCBkaXJlY3Rpb246ICcgKyB0b3BfZGlyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0b3BfbG9jO1xuICAgICAgICB9LFxuICAgICAgICAvLyBhZGphY2VudHMgdGFrZXMgYSBsb2NhdGlvbiBhbmQgcmV0dXJucyBhbiBvcmRlcmVkIGxpc3Qgb2YgZGlyZWN0aW9uc1xuICAgICAgICAvLyBmcm9tIHRoZSBsb2NhdGlvbiBpbiBxdWVzdGlvbi4gSXQgaXMgb3JkZXJlZCBieSB0aGUgbnVtYmVyIHVuc2VlblxuICAgICAgICAvLyBsb2NhdGlvbnMgZnJvbSB0aGUgbG9jYXRpb24gaW4gdGhhdCBkaXJlY3Rpb24uXG4gICAgICAgIC8vIFRoZSBmaXJzdCBlbGVtZW50IGluIHRoZSBsaXN0IGlzIHRoZSBkaXJlY3Rpb24gd2l0aCBsb25nZXN0IHJ1blxuICAgICAgICAvLyBpbiBpdCdzIGRpcmVjdGlvbi4gVGhlIHNlY29uZCBlbGVtZW50IGluIHRoZSBsaXN0IGlzIHRoZSBsb2NhdGlvbiB3aXRoIHRoZVxuICAgICAgICBzdHJlbmd0aFNvcnRlZERpcmVjdGlvbnMobG9jKSB7XG4gICAgICAgICAgICBsZXQgbWFpbnRlbmVuY2VfbG9jID0gWy4uLmxvY107XG4gICAgICAgICAgICBsZXQgcmVzID0gW107XG4gICAgICAgICAgICBsZXQgZGlyZWN0aW9ucyA9IHRoaXMudmFsaWREaXJlY3Rpb25zKGxvYyk7XG4gICAgICAgICAgICBkaXJlY3Rpb25zLmZvckVhY2goKGRpcikgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB0bXBfbG9jID0gWy4uLmxvY107XG4gICAgICAgICAgICAgICAgbGV0IHRtcF9jbnQgPSAwO1xuICAgICAgICAgICAgICAgIHdoaWxlICh0aGlzLnZhbGlkTG9jKHRtcF9sb2MpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRtcF9jbnQgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChkaXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRtcF9sb2NbMF0gKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bXBfbG9jWzBdIC09IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdkb3duJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bXBfbG9jWzFdICs9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICd1cCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG1wX2xvY1sxXSAtPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaW52YWxpZCBkaXJlY3Rpb246ICcgKyBkaXIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG1haW50ZW5lbmNlX2xvYyA9IHRtcF9sb2M7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGlmIGl0cyBpbnZhbGlkIGJlY2F1c2UgaXRzIG9mZiB0aGUgYm9hcmQsIHdlIHNob3VsZCBzdWJ0cmFjdCBvbmVcbiAgICAgICAgICAgICAgICAvLyBmcm9tIHRoZSBjb3VudCwgaWYgaXRzIGludmFsaWQgYmVjYXVzZSBpdHMgYSBtaXNzLCB3ZSBzaG91bGRcbiAgICAgICAgICAgICAgICAvLyBzdWJ0cmFjdCAyIGZyb20gdGhlIGNvdW50XG4gICAgICAgICAgICAgICAgY29uc3Qgb3V0X29mX2JvdW5kcyA9IChtYWludGVuZW5jZV9sb2NbMF0gPCAwIHx8IG1haW50ZW5lbmNlX2xvY1swXSA+IDkgfHxcbiAgICAgICAgICAgICAgICAgICAgbWFpbnRlbmVuY2VfbG9jWzFdIDwgMCB8fCBtYWludGVuZW5jZV9sb2NbMV0gPiA5KVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmICghb3V0X29mX2JvdW5kcyAmJiB0aGlzLmJvYXJkW21haW50ZW5lbmNlX2xvY1swXV1bbWFpbnRlbmVuY2VfbG9jWzFdXSA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHRtcF9jbnQgLT0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzLnB1c2goW2RpciwgdG1wX2NudF0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXMuc29ydCgoYSwgYikgPT4gYlsxXSAtIGFbMV0pO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3RoZSByZXN1bHRpbmcgbGlzdCBvZiBkaXJlY3Rpb25zIHNvcnRlZCBieSB0aGVpciBzdHJlbmd0aCBpczogJywgcmVzKTtcbiAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgIH0sXG4gICAgICAgIHZhbGlkRGlyZWN0aW9ucyhsb2MpIHtcbiAgICAgICAgICAgIGxldCBkaXJlY3Rpb25zID0gW107XG4gICAgICAgICAgICBjb25zdCByb3cgPSBsb2NbMF07XG4gICAgICAgICAgICBjb25zdCBjb2wgPSBsb2NbMV07XG4gICAgICAgICAgICBpZiAodGhpcy52YWxpZExvYyhbcm93ICsgMSwgY29sXSkpIHtcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb25zLnB1c2goJ2xlZnQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnZhbGlkTG9jKFtyb3cgLSAxLCBjb2xdKSkge1xuICAgICAgICAgICAgICAgIGRpcmVjdGlvbnMucHVzaCgncmlnaHQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnZhbGlkTG9jKFtyb3csIGNvbCArIDFdKSkge1xuICAgICAgICAgICAgICAgIGRpcmVjdGlvbnMucHVzaCgnZG93bicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMudmFsaWRMb2MoW3JvdywgY29sIC0gMV0pKSB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aW9ucy5wdXNoKCd1cCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3RoZSB2YWxpZCBkaXJlY3Rpb25zIGZvciBsb2NhdGlvbicsIGxvYywgJyBhcmUgJywgZGlyZWN0aW9ucylcbiAgICAgICAgICAgIHJldHVybiBkaXJlY3Rpb25zO1xuICAgICAgICB9LFxuXG4gICAgICAgIHRvcExvYyhzZWFyY2hEZXB0aCA9IDEsIGRlYnVnID0gRmFsc2UpIHtcbiAgICAgICAgICAgIC8vIHBpY2sgdGhlIGxvY2F0aW9uIGluIHRoZSBhcnJheSB3aXRoIHRoZSBoaWdoZXN0IHNjb3JlIHdoaWNoIGlzXG4gICAgICAgICAgICAvLyB0aGUgc3VtIG9mIGl0cyBhZGphY2VudHMgbGlzdCBbMV1cbiAgICAgICAgICAgIGxldCB0b3Bfc2NvcmUgPSAwXG4gICAgICAgICAgICBsZXQgdG9wX2xvYyA9IFswLCAwXVxuICAgICAgICAgICAgbGV0IHNjb3JlcyA9IFtdXG4gICAgICAgICAgICAvLyBtYWtlIGFuIGVtcHR5IDEweDEwIGFkamFjZW50c19jbnQgYXJyYXlcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbG9jID0gW2ksIGpdXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoaXMgbG9jYXRpb24gY2FuJ3QgYmUgYXR0YWNrZWQsIHNraXAgaXRcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnZhbGlkTG9jKGxvYykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gc2NvcmUgc2hvdWxkIHByaW9yaXRpemUgbG9jYXRpb25zIGJ5IHRoZWlyIHJlbGF0aXZlXG4gICAgICAgICAgICAgICAgICAgIC8vIGNlbnRlcmluZyBiZXR3ZWVuIGxlZnQgYW5kIHJpZ2h0IGFkamFjZW50IGxvY2F0aW9uc1xuICAgICAgICAgICAgICAgICAgICAvLyBhbmQgdXAgYW5kIGRvd24gYWRqYWNlbnQgbG9jYXRpb25zLCB1c2luZyBzdHJlbmd0aFNvcnRlZERpcmVjdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgLy8gd2UgY2FuIGdldCBhIGxpc3Qgb2YgZGlyZWN0aW9ucyBzb3J0ZWQgYnkgdGhlaXIgc3RyZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgLy8gd2UgY2FuIHRoZW4gdXNlIHRoaXMgbGlzdCB0byBkZXRlcm1pbmUgdGhlIHNjb3JlIG9mIHRoZSBsb2NhdGlvblxuICAgICAgICAgICAgICAgICAgICBsZXQgc2NvcmUgPSAwXG4gICAgICAgICAgICAgICAgICAgIGxldCBkaXJlY3Rpb25zID0gdGhpcy5zdHJlbmd0aFNvcnRlZERpcmVjdGlvbnMobG9jKVxuICAgICAgICAgICAgICAgICAgICBsZXQgZGlyZWN0aW9uX3N0cmVuZ3RocyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdsZWZ0JzogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICdyaWdodCc6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAndXAnOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2Rvd24nOiAwLFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgZGlyZWN0aW9ucy5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRpciA9IGRpcmVjdGlvbnNba11bMF1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjbnQgPSBkaXJlY3Rpb25zW2tdWzFdXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb25fc3RyZW5ndGhzW2Rpcl0gPSBjbnRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyB3ZSBjYW4gbm93IHVzZSB0aGUgZGlyZWN0aW9uX3N0cmVuZ3RocyB0byBkZXRlcm1pbmUgdGhlIHNjb3JlXG4gICAgICAgICAgICAgICAgICAgIC8vIGJ5IHRha2luZyB0aGUgbWluIG9mIHRoZSBsZWZ0IGFuZCByaWdodCBzdHJlbmd0aHMgYW5kIHRoZSBtaW5cbiAgICAgICAgICAgICAgICAgICAgLy8gb2YgdGhlIHVwIGFuZCBkb3duIHN0cmVuZ3Roc1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkaXJlY3Rpb25fc3RyZW5ndGhzKVxuICAgICAgICAgICAgICAgICAgICBsZXQgbGVmdF9yaWdodF9zdHJlbmd0aCA9IE1hdGgubWluKGRpcmVjdGlvbl9zdHJlbmd0aHNbJ2xlZnQnXSwgZGlyZWN0aW9uX3N0cmVuZ3Roc1sncmlnaHQnXSlcbiAgICAgICAgICAgICAgICAgICAgbGV0IHVwX2Rvd25fc3RyZW5ndGggPSBNYXRoLm1pbihkaXJlY3Rpb25fc3RyZW5ndGhzWyd1cCddLCBkaXJlY3Rpb25fc3RyZW5ndGhzWydkb3duJ10pXG4gICAgICAgICAgICAgICAgICAgIC8vIFJFU0VBUkNIIEZVUlRIRVJcbiAgICAgICAgICAgICAgICAgICAgc2NvcmUgPSBsZWZ0X3JpZ2h0X3N0cmVuZ3RoICsgdXBfZG93bl9zdHJlbmd0aFxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygncmF3IGRpcmVjdGlvbiBiYXNlZCBzY29yZSBpcycsIHNjb3JlKVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIGJvb3N0IG1pZGRsZSBsb2NhdGlvbnMgYnkgdXNpbmcgYW4gaW52ZXJzZSBxdWFkcmF0aWMgbXVsdGlwbGllciB0byB0aGUgc2NvcmVcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRpc3QgPSBNYXRoLnNxcnQoTWF0aC5wb3coNC41IC0gbG9jWzBdLCAyKSArIE1hdGgucG93KDQuNSAtIGxvY1sxXSwgMikpXG4gICAgICAgICAgICAgICAgICAgIC8vIHdlIGFkZCBiZWNhdXNlIHdlIHJlYWxseSBvbmx5IHdhbnQgdGhpcyB0byBicmVhayB0aWVzXG4gICAgICAgICAgICAgICAgICAgIC8vIHBpY2sgYSByYW5kb20gbnVtYmVyIGJldHdlZW4gMCBhbmQgLjAwMDAwMVxuICAgICAgICAgICAgICAgICAgICBsZXQgcmFuZCA9IE1hdGgucmFuZG9tKCkgLyAxMDAwMDAwXG4gICAgICAgICAgICAgICAgICAgIHNjb3JlID0gc2NvcmUgKyByYW5kXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHNjb3JlKVxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VhcmNoRGVwdGggPiAxIHx8IGRlYnVnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY29yZXMucHVzaChbbG9jLCBzY29yZV0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHNjb3JlID4gdG9wX3Njb3JlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3Bfc2NvcmUgPSBzY29yZVxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wX2xvYyA9IGxvY1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaWYgc2VhcmNoRGVwdGggaXMgZ3JlYXRlciB0aGFuIDEsIHdlIHNob3VsZCBzb3J0IHRoZSBzY29yZXMgYW5kXG4gICAgICAgICAgICAvLyBpbiBkZWNyZWFzaW5nIG9yZGVyIGFuZCB0YWtlIHRoZSBmaXJzdCBzZWFyY2hEZXB0aCBlbGVtZW50c1xuICAgICAgICAgICAgaWYgKHNlYXJjaERlcHRoID4gMSB8fCBkZWJ1Zykge1xuICAgICAgICAgICAgICAgIHNjb3Jlcy5zb3J0KChhLCBiKSA9PiBiWzFdIC0gYVsxXSlcbiAgICAgICAgICAgICAgICBpZiAoZGVidWcpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gbG9nIHRvcCAzIHNjb3Jlc1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgdG9wIDMgc2NvcmVzIHdlcmVcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3RoZSB0b3AgMyBzY29yZXMgd2VyZScpXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzY29yZXNbaV1bMV0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlIHRvcCAzIGxvY2F0aW9ucyB3ZXJlXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0aGUgdG9wIDMgbG9jYXRpb25zIHdlcmUnKVxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coc2NvcmVzW2ldWzBdKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzZWFyY2hEZXB0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNjb3Jlc1stMV1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdG9wX2xvY1xuICAgICAgICB9LFxuICAgIH1cbn1cblxuY29uc3QgZ2FtZV9zdGF0dXMgPSB7XG4gICAgXCJwMV9zZXR0aW5nX3VwXCI6IDEsXG4gICAgXCJwMl9zZXR0aW5nX3VwXCI6IDIsXG4gICAgXCJwMV90dXJuXCI6IDMsXG4gICAgXCJwMl90dXJuXCI6IDQsXG4gICAgXCJwMV93aW5cIjogNSxcbiAgICBcInAyX3dpblwiOiA2LFxufVxuXG5jb25zdCByZWFkYWJsZV9zdGF0dXMgPSB7XG4gICAgMTogXCIgaXMgc2V0dGluZyB1cCB0aGVpciBib2FyZFwiLFxuICAgIDI6IFwiIGlzIHNldHRpbmcgdXAgdGhlaXIgYm9hcmRcIixcbiAgICAzOiBcIidzIHR1cm5cIixcbiAgICA0OiBcIidzIHR1cm5cIixcbiAgICA1OiBcIiB3aW5zIVwiLFxuICAgIDY6IFwiIHdpbnMhXCIsXG59XG5cbi8vIGNyZWF0ZXMgYSBHYW1lIHdpdGggdHdvIHBsYXllcnMgd2hvIHBlcmZvcm0gYWN0aW9ucyBvbiB0aGVpciBib2FyZHNcbmZ1bmN0aW9uIEdhbWUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgXCJzdGF0dXNcIjogZ2FtZV9zdGF0dXMucDFfc2V0dGluZ191cCxcbiAgICAgICAgXCJtb2RlXCI6IFwiZWFzeVwiLFxuICAgICAgICBcInAxYm9hcmRcIjogQm9hcmQoKSxcbiAgICAgICAgLy8gcDIgYm9hcmQgaXMgdGhlIEFJJ3MgYm9hcmRcbiAgICAgICAgXCJwMmJvYXJkXCI6IEJvYXJkKCksXG4gICAgICAgIFwicGJvYXJkXCI6ICdiYW5hbmFzJyxcbiAgICAgICAgXCJlYm9hcmRcIjogJ2JhbmFuYXMnLFxuICAgICAgICBcInAxX25hbWVcIjogJ0h1bWFuJyxcbiAgICAgICAgXCJwMl9uYW1lXCI6ICdBSScsXG4gICAgICAgIFwidHVybnNcIjogLTIsIC8vIHRvIGFjY291bnQgZm9yIDIgc2V0IGNhbGxzXG4gICAgICAgIHJlYWRhYmxlX3N0YXR1cyhpbnB1dCkge1xuICAgICAgICAgICAgbGV0IHBsYXllciA9IHRoaXMucGJvYXJkID09IHRoaXMucDFib2FyZCA/IHRoaXMucDFfbmFtZSA6IHRoaXMucDJfbmFtZTtcbiAgICAgICAgICAgIHJldHVybiBwbGF5ZXIgKyByZWFkYWJsZV9zdGF0dXNbaW5wdXRdO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vIGluaXRpYWxpemUgdGhlIGJvYXJkc1xuICAgICAgICBpbml0KCkge1xuICAgICAgICAgICAgdGhpcy5wYm9hcmQgPSB0aGlzLnAxYm9hcmQ7XG4gICAgICAgICAgICB0aGlzLmVib2FyZCA9IHRoaXMucDJib2FyZDtcbiAgICAgICAgfSxcbiAgICAgICAgLy8gaGF2ZSB0aGUgY3VycmVudCBwbGF5ZXIgYXR0YWNrIGEgbG9jYXRpb25cbiAgICAgICAgYXR0YWNrKGxvYykge1xuICAgICAgICAgICAgLy8gYXR0YWNrIHRoZSBlbmVteSBib2FyZCwgaWYgdGhlIGF0dGFjayBpcyB2YWxpZFxuICAgICAgICAgICAgLy8gYW5kIHRoZSBhdHRhY2sgaXMgYSBoaXQsIGNoZWNrIGlmIHRoZSBlbmVteSBpcyBzdW5rXG4gICAgICAgICAgICAvLyBpZiB0aGUgZW5lbXkgaXMgc3VuaywgY2hlY2sgaWYgdGhlIGdhbWUgaXMgb3ZlclxuICAgICAgICAgICAgLy8gaWYgdGhlIGdhbWUgaXMgb3Zlciwgc2V0IHRoZSBzdGF0dXMgdG8gdGhlIHdpbm5lclxuICAgICAgICAgICAgLy8gaWYgdGhlIGdhbWUgaXMgbm90IG92ZXIsIHN3aXRjaCB0aGUgcGxheWVyIHR1cm5cbiAgICAgICAgICAgIC8vIGlmIHRoZSBsb2NhdGlvbiBpc24ndCB2YWxpZCwgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICBsZXQgYXR0ID0gdGhpcy5lYm9hcmQucmVjaWV2ZUF0dGFjayhsb2MpO1xuICAgICAgICAgICAgaWYgKCFhdHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIG90aGVyd2lzZSB0aGUgYXR0YWNrIGlzIHZhbGlkZSBzbyB3ZSB3aWxsIGJlIHVwZGF0aW5nIHRoZSBnYW1lLnN0YXR1c1xuICAgICAgICAgICAgLy8gdGh1cyB3ZSBuZWVkIHRvIGZpZ3VyZSBvdXQgdGhlIGN1cnJlbnQgc3RhdHVzIGFuZCB1c2UgaXQgdG8gZGV0ZXJtaW5lXG4gICAgICAgICAgICAvLyB3aGF0IHRoZSBuZXcgc3RhdHVzIHNob3VsZCBiZVxuICAgICAgICAgICAgbGV0IGN1cnJfc3RhdHVzID0gdGhpcy5zdGF0dXM7XG4gICAgICAgICAgICBzd2l0Y2ggKGN1cnJfc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBnYW1lX3N0YXR1cy5wMV90dXJuOlxuICAgICAgICAgICAgICAgICAgICBpZiAoYXR0ID09IDY5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncGxheWVyIDEgd2FzIHVwLCBhbmQgc3VuayB0aGUgZW5lbXknKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSBnYW1lX3N0YXR1cy5wMV93aW47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBnYW1lX3N0YXR1cy5wMl90dXJuOlxuICAgICAgICAgICAgICAgICAgICBpZiAoYXR0ID09IDY5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncGxheWVyIDIgd2FzIHVwLCBhbmQgc3VuayB0aGUgZW5lbXknKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSBnYW1lX3N0YXR1cy5wMl93aW47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2ludmFsaWQgc3RhdHVzOiAnICsgY3Vycl9zdGF0dXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gc3dpdGNoIHBsYXllcnNcbiAgICAgICAgICAgIHRoaXMuc3dhcFBsYXllcigpO1xuICAgICAgICAgICAgcmV0dXJuIGF0dDtcbiAgICAgICAgfSxcbiAgICAgICAgLy8gcGxhY2VzIGN1cnJlbnQgcGxheWVycyBzaGlwcyByYW5kb21seVxuICAgICAgICBhdXRvU2V0KCkge1xuICAgICAgICAgICAgLy8gaWYgdGhlIHN0YXR1cyBpc24ndCAwIG9yIDEsIHRoZW4gd2UgZG9uJ3QgbmVlZCB0byBzZXQgdGhlIGJvYXJkXG4gICAgICAgICAgICBpZiAoISh0aGlzLnN0YXR1cyA9PSBnYW1lX3N0YXR1cy5wMV9zZXR0aW5nX3VwIHx8XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0dXMgPT0gZ2FtZV9zdGF0dXMucDJfc2V0dGluZ191cCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBwbGFjZSB0aGUgc2hpcHNcbiAgICAgICAgICAgIHdoaWxlICh0aGlzLnBib2FyZC5zaGlwX2RlY2subGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNoaXBfbGVuID0gdGhpcy5wYm9hcmQuc2hpcF9kZWNrLnBvcCgpO1xuICAgICAgICAgICAgICAgIGxldCBwbGFjZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBsZXQgc2hpcCA9IFNoaXAoc2hpcF9sZW4pO1xuXG4gICAgICAgICAgICAgICAgd2hpbGUgKHBsYWNlZCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmFuZGRpciA9IE1hdGguZmxvb3IoTWF0aC5hYnMoTWF0aC5yYW5kb20oKSkgKiA0KTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJhbmR4ID0gTWF0aC5mbG9vcihNYXRoLmFicyhNYXRoLnJhbmRvbSgpKSAqIDkpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmFuZHkgPSBNYXRoLmZsb29yKE1hdGguYWJzKE1hdGgucmFuZG9tKCkpICogOSk7XG5cbiAgICAgICAgICAgICAgICAgICAgcGxhY2VkID0gdGhpcy5wYm9hcmQucGxhY2VTaGlwKHNoaXAsIFtyYW5keCwgcmFuZHldLCByYW5kZGlyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBzd2FwIHRoZSBwbGF5ZXIgYm9hcmQgYW5kIGVuZW15IGJvYXJkXG4gICAgICAgICAgICB0aGlzLnN3YXBQbGF5ZXIoKTtcbiAgICAgICAgfSxcbiAgICAgICAgc3dhcFBsYXllcigpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PSBnYW1lX3N0YXR1cy5wMV93aW4gfHxcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1cyA9PSBnYW1lX3N0YXR1cy5wMl93aW4pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKHRoaXMucGJvYXJkID09IHRoaXMucDFib2FyZCkgPyAnUGxheWVyIDEnIDogJ1BsYXllciAyJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudHVybnMgPSB0aGlzLnR1cm5zICsgMTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMudHVybnMpXG4gICAgICAgICAgICBpZiAodGhpcy5wYm9hcmQgPT0gdGhpcy5wMWJvYXJkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYm9hcmQgPSB0aGlzLnAyYm9hcmQ7XG4gICAgICAgICAgICAgICAgdGhpcy5lYm9hcmQgPSB0aGlzLnAxYm9hcmQ7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGJvYXJkID09IHRoaXMucDJib2FyZCkge1xuICAgICAgICAgICAgICAgIHRoaXMucGJvYXJkID0gdGhpcy5wMWJvYXJkO1xuICAgICAgICAgICAgICAgIHRoaXMuZWJvYXJkID0gdGhpcy5wMmJvYXJkO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaW52YWxpZCBwbGF5ZXIgYm9hcmQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGFkdmFuY2UgdGhlIHN0YXR1cyBvZiB0aGUgZ2FtZSBiYXNlZCBvbiB0aGUgcHJldmlvdXMgc3RhdHVzXG4gICAgICAgICAgICAvLyB3ZSBkaXNyZWdhcmQgd2luIHN0YXR1cycgYmVjYXVzZSB0aG9zZSBhdXRvIHJlcmVuZGVyIHRoZSBwYWdlXG4gICAgICAgICAgICBsZXQgb2xkX3N0YXR1cyA9IHRoaXMuc3RhdHVzO1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09IGdhbWVfc3RhdHVzLnAxX3NldHRpbmdfdXApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1cyA9IGdhbWVfc3RhdHVzLnAyX3NldHRpbmdfdXA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdHVzID09IGdhbWVfc3RhdHVzLnAyX3NldHRpbmdfdXApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1cyA9IGdhbWVfc3RhdHVzLnAxX3R1cm47XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gdGhpcy5zdGF0dXMgPT0gZ2FtZV9zdGF0dXMucDFfdHVybiA/IGdhbWVfc3RhdHVzLnAyX3R1cm4gOiBnYW1lX3N0YXR1cy5wMV90dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0sXG4gICAgICAgIC8vIGF0dGFja3Mgb3Bwb3NpbmcgcGxheWVyIGF1dG9tYXRpY2FsbHlcbiAgICAgICAgYWlBdHRhY2soKSB7XG4gICAgICAgICAgICAvLyB3ZSBnZXQgdGhlIHRhcmdldCB1c2luZyBhaVRhcmdldFxuICAgICAgICAgICAgbGV0IHRhcmdldCA9IHRoaXMuYWlUYXJnZXQoKTtcbiAgICAgICAgICAgIC8vIHdlIGF0dGFjayB0aGUgdGFyZ2V0IHVzaW5nIGF0dGFja1xuICAgICAgICAgICAgbGV0IGF0dCA9IHRoaXMuYXR0YWNrKHRhcmdldCk7XG4gICAgICAgICAgICAvLyBpZiB0aGUgYXR0YWNrIHdhcyB1bnN1Y2Nlc3NmdWwsIHdlIG5lZWQgdG8gdHJ5IGFnYWluXG4gICAgICAgICAgICBsZXQgYXR0X2NudCA9IDFcbiAgICAgICAgICAgIHdoaWxlICghYXR0KSB7XG4gICAgICAgICAgICAgICAgYXR0X2NudCArPSAxXG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gdGhpcy5haVRhcmdldChhdHRfY250KTtcbiAgICAgICAgICAgICAgICBhdHQgPSB0aGlzLmF0dGFjayh0YXJnZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICdzdWNjZXNzZnVsIGF0dGFjaydcbiAgICAgICAgfSxcbiAgICAgICAgLy8gZmluZHMgdGhlIHRhcmdldCBmb3IgYW4gYWlBdHRhY2tcbiAgICAgICAgYWlUYXJnZXQoYXR0X2NudCA9IDEpIHtcbiAgICAgICAgICAgIHJ1bl9jbnQgKz0gMVxuICAgICAgICAgICAgaWYgKHJ1bl9jbnQgPiAxMDAwKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd0b28gbWFueSBydW5zJylcbiAgICAgICAgICAgICAgICByZXR1cm4gWzAsIDBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5tb2RlID09ICdlYXN5Jykge1xuICAgICAgICAgICAgICAgIGxldCByYW5kciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgICAgICAgICBsZXQgcmFuZGMgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtyYW5kciwgcmFuZGNdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRoaXMuZWJvYXJkLmhpdF9saXN0IHx8IHRoaXMuZWJvYXJkLmhpdF9saXN0Lmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgLy8gdXNlIHRoZSBsb2NhdGlvbiB3aXRoIHRoZSBoaWdoZXN0IHNjb3JlXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWJvYXJkLnRvcExvYyhhdHRfY250LCB0cnVlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaWYgdGhlIGhpdCBsaXN0IGlzIG9uZSwgdGhlbiB3ZSBuZWVkIHRvIGxvb2sgYXQgNCBwb3NzaWJsZVxuICAgICAgICAgICAgLy8gbG9jYXRpb25zIHRvIGF0dGFja1xuICAgICAgICAgICAgaWYgKHRoaXMuZWJvYXJkLmhpdF9saXN0ICYmIHRoaXMuZWJvYXJkLmhpdF9saXN0Lmxlbmd0aCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgLy8gdGhlcmUgYXJlIDQgcG9zc2libGUgbG9jYXRpb25zIHRvIGF0dGFjaywgd2Ugc2hvdWxkIGNoZWNrXG4gICAgICAgICAgICAgICAgLy8gaWYgZWFjaCBpcyB2YWxpZCBhbmQgdGhlbiBwaWNrIHRoZSBvbmUgd2l0aCB0aGUgbW9zdCBzcGFjZVxuICAgICAgICAgICAgICAgIC8vIGFoZWFkIG9mIGl0LiBTbyBsZXRzIGdldCBhIGxpc3Qgb2YgdGhlIHBvc3NpYmxlIGxvY2F0aW9uc1xuICAgICAgICAgICAgICAgIC8vIGFuZCB0aGVuIGNoZWNrIGVhY2ggb25lXG4gICAgICAgICAgICAgICAgLy8gcG9zc2libGUgbG9jcyA9IFtyaWdodCwgbGVmdCwgdXAsIGRvd25dXG4gICAgICAgICAgICAgICAgLy8gcGFyc2UgdGhpcy5lYm9hcmQuaGl0X2xpc3RbMF0gaW50byBsb2MgZm9ybVxuICAgICAgICAgICAgICAgIGxldCB0YXJnID0gSlNPTi5wYXJzZSh0aGlzLmVib2FyZC5oaXRfbGlzdFswXSk7XG4gICAgICAgICAgICAgICAgbGV0IHJvdyA9IHRhcmdbMF07XG4gICAgICAgICAgICAgICAgbGV0IGNvbCA9IHRhcmdbMV07XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NhbGxpbmcgdG9wIFBpdm90IG9uICcsIFtyb3csIGNvbF0pO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmVib2FyZC50b3BQaXZvdChbcm93LCBjb2xdKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3BlcmZvcm1pbmcgaGl0IG1hbmF1ZXZlcicpO1xuXG4gICAgICAgICAgICAvLyBpZiB0aGUgaGl0IGxpc3QgaXMgZ3JlYXRlciB0aGFuIG9uZSwgdGhlbiB3ZSBkZXRlcm1pbmUgdGhlXG4gICAgICAgICAgICAvLyBkaXJlY3Rpb24gb2YgdGhlIGhpdCBsaXN0IChyb3cgb3IgY29sKSBhbmQgdXNlIHRoZSBlbmRzIG9mXG4gICAgICAgICAgICAvLyB0aGUgbGlzdCB0byBkZXRlcm1pbmUgdGhlIG5leHQgYXR0YWNrLiBJZiB0aGUgaGl0IGxpc3QgaXNcbiAgICAgICAgICAgIC8vIHdlIHN0YXJ0IGJ5IGdldHRpbmcgdGhlIGZpcnN0IGhpdCBhbmQgdGhlIGxhc3QgaGl0XG4gICAgICAgICAgICBsZXQgZmlyc3RfaGl0ID0gSlNPTi5wYXJzZSh0aGlzLmVib2FyZC5oaXRfbGlzdFswXSk7XG4gICAgICAgICAgICBsZXQgbGFzdF9oaXQgPSBKU09OLnBhcnNlKHRoaXMuZWJvYXJkLmhpdF9saXN0W1xuICAgICAgICAgICAgICAgIHRoaXMuZWJvYXJkLmhpdF9saXN0Lmxlbmd0aCAtIDFdKTtcbiAgICAgICAgICAgIGxldCBmciA9IGZpcnN0X2hpdFswXTtcbiAgICAgICAgICAgIGxldCBmYyA9IGZpcnN0X2hpdFsxXTtcbiAgICAgICAgICAgIGxldCBsciA9IGxhc3RfaGl0WzBdO1xuICAgICAgICAgICAgbGV0IGxjID0gbGFzdF9oaXRbMV07XG4gICAgICAgICAgICAvLyBpZiB0aGUgZmlyc3QgaGl0IGFuZCBsYXN0IGhpdCBhcmUgaW4gdGhlIHNhbWUgcm93LCB0aGVuIHdlXG4gICAgICAgICAgICAvLyBuZWVkIHRvIGF0dGFjayB0aGUgbmV4dCBsb2NhdGlvbiBpbiB0aGUgcm93XG4gICAgICAgICAgICBpZiAoZnIgPT0gbHIpIHtcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgbGFzdCBoaXQgaXMgdG8gdGhlIHJpZ2h0IG9mIHRoZSBmaXJzdCBoaXQsIHRoZW5cbiAgICAgICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIGF0dGFjayB0byB0aGUgcmlnaHQgb2YgdGhlIGxhc3QgaGl0XG4gICAgICAgICAgICAgICAgaWYgKGZjIDwgbGMpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgdGhlIHJpZ2h0IGxvY2F0aW9uXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmVib2FyZC52YWxpZExvYyhbbHIsIGxjICsgMV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW2xyLCBsYyArIDFdO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZWJvYXJkLnZhbGlkTG9jKFtmciwgZmMgLSAxXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbZnIsIGZjIC0gMV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIGxhc3QgaGl0IGlzIHRvIHRoZSBsZWZ0IG9mIHRoZSBmaXJzdCBoaXQsIHRoZW5cbiAgICAgICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIGF0dGFjayB0byB0aGUgbGVmdCBvZiB0aGUgbGFzdCBoaXRcbiAgICAgICAgICAgICAgICBpZiAoZmMgPiBsYykge1xuICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayB0aGUgbGVmdCBsb2NhdGlvblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5lYm9hcmQudmFsaWRMb2MoW2xyLCBsYyAtIDFdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtsciwgbGMgLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmVib2FyZC52YWxpZExvYyhbZnIsIGZjICsgMV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGUgbGVmdCBsb2NhdGlvbiBpcyBub3QgdmFsaWQsIHRoZW4gd2UgbmVlZCB0b1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXR0YWNrIHRvIHRoZSByaWdodCBvZiB0aGUgZmlyc3QgaGl0XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW2ZyLCBmYyArIDFdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGlmIHdlIG1ha2UgaXQgdG8gaGVyZSB3aXRob3V0IHJldHVybmluZywgdGhlbiB3ZSBnb3RcbiAgICAgICAgICAgICAgICAvLyB0d28gc2hpcHMgbmV4dCB0byBlYWNoIG90aGVyLCBzbyB3ZSBuZWVkIHRvIGF0dGFjayBhcm91bmQgdGhlIGZpcnN0XG4gICAgICAgICAgICAgICAgLy8gaGl0XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZWJvYXJkLnZhbGlkTG9jKFtmciArIDEsIGZjXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtmciArIDEsIGZjXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZWJvYXJkLnZhbGlkTG9jKFtmciAtIDEsIGZjXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtmciAtIDEsIGZjXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZWJvYXJkLnZhbGlkTG9jKFtmciwgZmMgKyAxXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtmciwgZmMgKyAxXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZWJvYXJkLnZhbGlkTG9jKFtmciwgZmMgLSAxXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtmciwgZmMgLSAxXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3dlIHNob3VsZCBuZXZlciBnZXQgaGVyZSB0d28gcm93cyBuZXh0IHRvIGVhY2ggb3RoZXIgZWRpdGlvbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaWYgdGhlIGZpcnN0IGhpdCBhbmQgbGFzdCBoaXQgYXJlIGluIHRoZSBzYW1lIGNvbCwgdGhlbiB3ZVxuICAgICAgICAgICAgLy8gbmVlZCB0byBhdHRhY2sgdGhlIG5leHQgbG9jYXRpb24gaW4gdGhlIGNvbFxuICAgICAgICAgICAgaWYgKGZjID09IGxjKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIGxhc3QgaGl0IGlzIGJlbG93IHRoZSBmaXJzdCBoaXQsIHRoZW4gd2UgbmVlZCB0b1xuICAgICAgICAgICAgICAgIC8vIGF0dGFjayBiZWxvdyB0aGUgbGFzdCBoaXRcbiAgICAgICAgICAgICAgICBpZiAoZnIgPCBscikge1xuICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayB0aGUgZG93biBsb2NhdGlvblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5lYm9hcmQudmFsaWRMb2MoW2xyICsgMSwgbGNdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtsciArIDEsIGxjXTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmVib2FyZC52YWxpZExvYyhbZnIgLSAxLCBmY10pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGUgZG93biBsb2NhdGlvbiBpcyBub3QgdmFsaWQsIHRoZW4gd2UgbmVlZCB0b1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXR0YWNrIGFib3ZlIHRoZSBmaXJzdCBoaXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbZnIgLSAxLCBmY107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIGxhc3QgaGl0IGlzIGFib3ZlIHRoZSBmaXJzdCBoaXQsIHRoZW4gd2UgbmVlZCB0b1xuICAgICAgICAgICAgICAgIC8vIGF0dGFjayBhYm92ZSB0aGUgbGFzdCBoaXRcbiAgICAgICAgICAgICAgICBpZiAoZnIgPiBscikge1xuICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayB0aGUgdXAgbG9jYXRpb25cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZWJvYXJkLnZhbGlkTG9jKFtsciAtIDEsIGxjXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbbHIgLSAxLCBsY107XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5lYm9hcmQudmFsaWRMb2MoW2ZyICsgMSwgZmNdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlIHVwIGxvY2F0aW9uIGlzIG5vdCB2YWxpZCwgdGhlbiB3ZSBuZWVkIHRvXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhdHRhY2sgYmVsb3cgdGhlIGZpcnN0IGhpdFxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtmciArIDEsIGZjXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBpZiB3ZSBtYWtlIGl0IHRvIGhlcmUgd2UgZ290IHR3byBzaGlwcyBuZXh0IHRvIGVhY2ggb3RoZXIsXG4gICAgICAgICAgICAgICAgLy8gc28gd2UgbmVlZCB0byBhdHRhY2sgdG8gdGhlIGxlZnQgYW5kIHJpZ2h0IG9mIHRoZSBmaXJzdCBoaXRcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5lYm9hcmQudmFsaWRMb2MoW2ZyLCBmYyArIDFdKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW2ZyLCBmYyArIDFdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5lYm9hcmQudmFsaWRMb2MoW2ZyLCBmYyAtIDFdKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW2ZyLCBmYyAtIDFdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5lYm9hcmQudmFsaWRMb2MoW2ZyICsgMSwgZmNdKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW2ZyICsgMSwgZmNdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5lYm9hcmQudmFsaWRMb2MoW2ZyIC0gMSwgZmNdKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW2ZyIC0gMSwgZmNdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnd2Ugc2hvdWxkIG5ldmVyIGdldCBoZXJlIHR3byBjb2xzIG5leHQgdG8gZWFjaCBvdGhlciBlZGl0aW9uJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIC8vIHJlc2V0IHRoZSBnYW1lXG4gICAgICAgIHJlc2V0KCkge1xuICAgICAgICAgICAgdGhpcy5wYm9hcmQgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5lYm9hcmQgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5wMWJvYXJkID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMucDJib2FyZCA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLnR1cm5zID0gLTI7XG4gICAgICAgICAgICB0aGlzLnN0YXR1cyA9IGdhbWVfc3RhdHVzLnAxX3NldHRpbmdfdXA7XG4gICAgICAgICAgICB0aGlzLm1vZGUgPSBcImVhc3lcIjtcbiAgICAgICAgICAgIHRoaXMucDFib2FyZCA9IEJvYXJkKCk7XG4gICAgICAgICAgICB0aGlzLnAyYm9hcmQgPSBCb2FyZCgpO1xuICAgICAgICAgICAgdGhpcy5wYm9hcmQgPSB0aGlzLnAxYm9hcmQ7XG4gICAgICAgICAgICB0aGlzLmVib2FyZCA9IHRoaXMucDJib2FyZDtcbiAgICAgICAgfSxcbiAgICB9O1xufVxuXG5leHBvcnQgeyBnYW1lX3N0YXR1cywgU2hpcCwgQm9hcmQsIEdhbWUgfSIsImltcG9ydCAnLi9zdHlsZS5zY3NzJztcbmltcG9ydCB7IGdhbWVfc3RhdHVzIH0gZnJvbSAnLi9sb2dpYyc7XG5cbi8vIHRha2VzIGEgZ2FtZSBcbmV4cG9ydCBmdW5jdGlvbiBsYXlvdXQoZ2FtZSkge1xuICAgIC8vIGNsZWFyIHRoZSBwYWdlXG4gICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSAnJztcbiAgICAvLyBvbmx5IGhhdmUgYSBzcGFjZWJhcmQga2V5ZG93biBsaXN0ZW5lciBpZiB0aGUgZ2FtZSBpcyBpbiBzZXR1cCBtb2RlXG4gICAgaWYgKGdhbWUuc3RhdHVzIDwgZ2FtZV9zdGF0dXNbXCJwMV90dXJuXCJdKSB7XG5cbiAgICAgICAgd2luZG93Lm9ua2V5ZG93biA9IChldikgPT4ge1xuICAgICAgICAgICAgLy8gaWYgdGhlIGN1cnJlbnQgZ2FtZSBzdGF0ZSBhbGxvd3MgcGxhY2VtZW50LCB3ZSB0cnkgdG8gcGxhY2UgdGhlIHNoaXBcbiAgICAgICAgICAgIGlmIChldi5rZXlDb2RlID09IDEzKSB7XG4gICAgICAgICAgICAgICAgcGxhY2VIb3ZlclNoaXAoZ2FtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gY3JlYXRpbmcgc2VjdGlvbnNcbiAgICBjb25zdCBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGJ1aWxkSGVhZGVyKGgsIGdhbWUpO1xuICAgIGJ1aWxkRm9vdGVyKGYpO1xuXG4gICAgYi5jbGFzc0xpc3QuYWRkKCdib2R5Jyk7XG4gICAgY29uc3QgaW5mb19zZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3Qga2V5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHBsYWNlX3JhbmRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgaW5mb19zZWN0LmNsYXNzTGlzdC5hZGQoJ2luZm8nKTtcbiAgICBwbGFjZV9yYW5kb20uaWQgPSAncnAnO1xuXG4gICAgYnVpbGRLZXkoa2V5KTtcbiAgICAoZ2FtZS5wYm9hcmQuc2hpcF9kZWNrLmxlbmd0aCAhPSAwKSA/IHNldERvY2soZG9jaywgZ2FtZSkgOiBzZXREb2NrKGRvY2ssIGdhbWUsIHRydWUpO1xuICAgIHBsYWNlX3JhbmRvbS50ZXh0Q29udGVudCA9ICdQTEFDRSBNWSBTSElQUyc7XG4gICAgcGxhY2VfcmFuZG9tLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGdhbWUuYXV0b1NldCgpO1xuICAgICAgICBpZiAoZ2FtZS5tb2RlID09ICdlYXN5JyB8fCBnYW1lLm1vZGUgPT0gJ2hhcmQnKSB7XG4gICAgICAgICAgICBnYW1lLmF1dG9TZXQoKTtcbiAgICAgICAgfVxuICAgICAgICBsYXlvdXQoZ2FtZSk7XG4gICAgfVxuXG4gICAgaW5mb19zZWN0LmFwcGVuZENoaWxkKGtleSk7XG4gICAgaW5mb19zZWN0LmFwcGVuZENoaWxkKGRvY2spO1xuICAgIGlmIChnYW1lLnN0YXR1cyA8IGdhbWVfc3RhdHVzW1wicDFfdHVyblwiXSkge1xuICAgICAgICBpbmZvX3NlY3QuYXBwZW5kQ2hpbGQocGxhY2VfcmFuZG9tKTtcbiAgICB9XG5cbiAgICBjb25zdCBib2FyZF9zZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnVpbGRCb2FyZHMoZ2FtZSwgYm9hcmRfc2VjdCk7XG4gICAgLy8gYXR0YWNoIGV2ZW50IGxpc3RlbmVycyB0byB0aGUgYm9hcmRzXG5cbiAgICBjb25zdCByZXNldF9zZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcmVzZXRfc2VjdC5jbGFzc0xpc3QuYWRkKCdyZXNldCcpO1xuICAgIGJ1aWxkUmVzZXRTZWN0aW9uKGdhbWUsIHJlc2V0X3NlY3QpO1xuXG4gICAgYi5hcHBlbmRDaGlsZChpbmZvX3NlY3QpO1xuICAgIGIuYXBwZW5kQ2hpbGQoYm9hcmRfc2VjdCk7XG4gICAgYi5hcHBlbmRDaGlsZChyZXNldF9zZWN0KTtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaCk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChiKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGYpO1xuXG4gICAgLy8gYXR0YWNoIGV2ZW50IGxpc3RlbmVyc1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyArK2opIHtcbiAgICAgICAgICAgIGF0dGFjaEF0dGFja0xpc3RlbmVyKCdlcicgKyBpICsgJ2MnICsgaiwgZ2FtZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gc2V0UEhvdmVyKGdhbWUpO1xufVxuXG5mdW5jdGlvbiBidWlsZEhlYWRlcihoLCBnYW1lKSB7XG4gICAgY29uc3Qgc3RhdHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaWYgKGdhbWUubW9kZSA9PSAnZWFzeScpIHtcbiAgICAgICAgc3RhdHVzLnRleHRDb250ZW50ID0gJ0VBU1kgTU9ERSc7XG4gICAgfVxuICAgIGVsc2UgaWYgKGdhbWUubW9kZSA9PSAnaGFyZCcpIHtcbiAgICAgICAgc3RhdHVzLnRleHRDb250ZW50ID0gJ0hBUkQgTU9ERSc7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdHVzLnRleHRDb250ZW50ID0gZ2FtZS5yZWFkYWJsZV9zdGF0dXMoZ2FtZS5zdGF0dXMpO1xuICAgIH1cblxuICAgIHN0YXR1cy5jbGFzc0xpc3QuYWRkKCdzdGF0dXMnKTtcbiAgICBoLmNsYXNzTGlzdC5hZGQoJ2hlYWQnKTtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBjb25zdCBnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSAnQkFUVExFU0hJUCc7XG4gICAgZ2gudGV4dENvbnRlbnQgPSAnR0lUSFVCJ1xuICAgIGdoLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG9wZW4oJ2h0dHBzOi8vZ2l0aHViLmNvbS9UYW5uZXJIb3Juc2J5Ny9vZGluLWJhdHRsZXNoaXAnKTtcbiAgICB9O1xuXG4gICAgaC5hcHBlbmRDaGlsZChzdGF0dXMpO1xuICAgIGguYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGguYXBwZW5kQ2hpbGQoZ2gpO1xufVxuXG5mdW5jdGlvbiBidWlsZEZvb3RlcihmKSB7XG4gICAgZi5jbGFzc0xpc3QuYWRkKCdmb290Jyk7XG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgbmFtZS50ZXh0Q29udGVudCA9ICdAdGFubmVyaG9ybnNieTcnO1xuICAgIGYuYXBwZW5kQ2hpbGQobmFtZSk7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkS2V5KGtleSkge1xuICAgIGtleS5jbGFzc0xpc3QuYWRkKCdrZXknKTtcbiAgICBjb25zdCBoaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNvbnN0IG1pc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNvbnN0IHN1bmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBoaXRfZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBtaXNzX2Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3Qgc3Vua19kZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGhpdF9zZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbWlzc19zZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3Qgc3Vua19zZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAga2V5LmNsYXNzTGlzdC5hZGQoJ2tleScpO1xuICAgIGhpdC5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgICBtaXNzLmNsYXNzTGlzdC5hZGQoJ21pc3MnKTtcbiAgICBzdW5rLmNsYXNzTGlzdC5hZGQoJ3N1bmsnKTtcbiAgICBoaXQudGV4dENvbnRlbnQgPSAnWCc7XG4gICAgbWlzcy50ZXh0Q29udGVudCA9ICdYJztcbiAgICBzdW5rLnRleHRDb250ZW50ID0gJyc7XG4gICAgaGl0X2Rlc2MudGV4dENvbnRlbnQgPSAnSElUJztcbiAgICBtaXNzX2Rlc2MudGV4dENvbnRlbnQgPSAnTUlTUyc7XG4gICAgc3Vua19kZXNjLnRleHRDb250ZW50ID0gJ1NVTksnO1xuICAgIGhpdF9zZWN0LmFwcGVuZENoaWxkKGhpdF9kZXNjKTtcbiAgICBoaXRfc2VjdC5hcHBlbmRDaGlsZChoaXQpO1xuICAgIG1pc3Nfc2VjdC5hcHBlbmRDaGlsZChtaXNzX2Rlc2MpO1xuICAgIG1pc3Nfc2VjdC5hcHBlbmRDaGlsZChtaXNzKTtcbiAgICBzdW5rX3NlY3QuYXBwZW5kQ2hpbGQoc3Vua19kZXNjKTtcbiAgICBzdW5rX3NlY3QuYXBwZW5kQ2hpbGQoc3Vuayk7XG4gICAgaGl0X3NlY3QuY2xhc3NMaXN0LmFkZCgna2V5X3NlY3QnKTtcbiAgICBtaXNzX3NlY3QuY2xhc3NMaXN0LmFkZCgna2V5X3NlY3QnKVxuICAgIHN1bmtfc2VjdC5jbGFzc0xpc3QuYWRkKCdrZXlfc2VjdCcpXG4gICAga2V5LmFwcGVuZENoaWxkKGhpdF9zZWN0KTtcbiAgICBrZXkuYXBwZW5kQ2hpbGQobWlzc19zZWN0KTtcbiAgICBrZXkuYXBwZW5kQ2hpbGQoc3Vua19zZWN0KTtcblxufVxuXG5mdW5jdGlvbiBzZXREb2NrKGRvY2ssIGdhbWUsIHBsYWNlZCA9IGZhbHNlKSB7XG4gICAgY29uc3QgZG9ja19oZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjb25zdCBib2F0X2xvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGJvYXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBkb2NrX2Zvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG5cbiAgICBkb2NrLmNsYXNzTGlzdC5hZGQoJ2RvY2snKTtcbiAgICBib2F0LnRleHRDb250ZW50ID0gJyc7XG4gICAgYm9hdC5jbGFzc0xpc3QuYWRkKCdib2F0Jyk7XG5cbiAgICBib2F0X2xvdC5jbGFzc0xpc3QuYWRkKCdib2F0X2xvdCcpO1xuXG4gICAgbGV0IHNoaXBfZGVjayA9IGdhbWUucGJvYXJkLnNoaXBfZGVjay5zb3J0KCk7XG4gICAgZG9ja19oZWFkLnRleHRDb250ZW50ID0gJ1BsYWNlIFlvdXIgU2hpcHMnO1xuICAgIGRvY2tfZm9vdGVyLnRleHRDb250ZW50ID0gJ0NsaWNrIG9uZSBvZiB0aGUgc2hpcHMgYWJvdmUgdG8gc2VsZWN0IGl0LCBwcmVzcyBSIHRvIHJvdGF0ZSBpdCwgYW5kIHByZXNzIGVudGVyIHRvIHBsYWNlIGl0ISc7XG5cbiAgICBpZiAocGxhY2VkKSB7XG4gICAgICAgIGJvYXQuY2xhc3NMaXN0LmFkZCgnZW5lbXknKTtcbiAgICAgICAgZG9ja19oZWFkLnRleHRDb250ZW50ID0gJ1JlbWFpbmluZyBFbmVteSBTaGlwczonO1xuICAgICAgICBkb2NrX2Zvb3Rlci50ZXh0Q29udGVudCA9ICdLZWVwIEZpcmluZyEnXG4gICAgICAgIHNoaXBfZGVjayA9IGdhbWUuZWJvYXJkLnNoaXBzX3N0YW5kaW5nXG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwX2RlY2subGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHRtcF9ib2F0ID0gYm9hdC5jbG9uZU5vZGUoKTtcbiAgICAgICAgbGV0IHNoaXBfbGVuZ3RoID0gTWF0aC5mbG9vcihzaGlwX2RlY2tbaV0gLyA1ICogMTAwKTtcbiAgICAgICAgdG1wX2JvYXQuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgYHdpZHRoOiR7c2hpcF9sZW5ndGh9JWApO1xuICAgICAgICB0bXBfYm9hdC5vbmNsaWNrID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGxldCBsZW5ndGggPSBNYXRoLmZsb29yKHBhcnNlSW50KGUudGFyZ2V0LnN0eWxlLndpZHRoXG4gICAgICAgICAgICAgICAgLnNsaWNlKDAsIC0xKSkgLyAyMCk7XG4gICAgICAgICAgICBsZXQgcm90YXRpb24gPSAwO1xuICAgICAgICAgICAgZ2FtZS5wYm9hcmQuc2V0Q3VyclNoaXAobGVuZ3RoKTtcblxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXYpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXYua2V5ID09ICdyJykge1xuICAgICAgICAgICAgICAgICAgICByb3RhdGlvbiArPSAxO1xuICAgICAgICAgICAgICAgICAgICByb3RhdGlvbiAlPSA0O1xuICAgICAgICAgICAgICAgICAgICBnYW1lLnBib2FyZC5yb3RhdGlvbiA9IHJvdGF0aW9uO1xuXG4gICAgICAgICAgICAgICAgICAgIGxheW91dChnYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBib2F0X2xvdC5hcHBlbmRDaGlsZCh0bXBfYm9hdCk7XG4gICAgfVxuXG4gICAgZG9jay5hcHBlbmRDaGlsZChkb2NrX2hlYWQpO1xuICAgIGRvY2suYXBwZW5kQ2hpbGQoYm9hdF9sb3QpO1xuICAgIGRvY2suYXBwZW5kQ2hpbGQoZG9ja19mb290ZXIpO1xufVxuXG5mdW5jdGlvbiBidWlsZEJvYXJkcyhnYW1lLCBib2FyZF9zZWN0KSB7XG4gICAgYm9hcmRfc2VjdC5jbGFzc0xpc3QuYWRkKCdnYW1lJyk7XG4gICAgY29uc3QgZnVsbGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZnVsbGJvYXJkLmNsYXNzTGlzdC5hZGQoJ2Z1bGxib2FyZCcpO1xuICAgIGNvbnN0IHRvcF9ib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGJvdF9ib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNldEJvYXJkKHRvcF9ib2FyZCwgZ2FtZS5lYm9hcmQsIHRydWUpO1xuICAgIHNldEJvYXJkKGJvdF9ib2FyZCwgZ2FtZS5wYm9hcmQpO1xuICAgIC8vIGFkZCBhdHRhY2sgbGlzdGVuZXJzIHRvIGVhY2ggY2VsbCBpbiB0aGUgdG9wIGJvYXJkXG4gICAgZnVsbGJvYXJkLmFwcGVuZENoaWxkKHRvcF9ib2FyZCk7XG4gICAgZnVsbGJvYXJkLmFwcGVuZENoaWxkKGJvdF9ib2FyZCk7XG4gICAgYm9hcmRfc2VjdC5hcHBlbmRDaGlsZChmdWxsYm9hcmQpO1xufVxuXG5mdW5jdGlvbiBzZXRCb2FyZChiX2VsZSwgYm9hcmQsIGVuZW15ID0gZmFsc2UpIHtcbiAgICBiX2VsZS5jbGFzc0xpc3QuYWRkKCdib2FyZCcpO1xuICAgIGNvbnN0IGVtcHR5Q2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGhpdENlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBtaXNzQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHN1bmtDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgeW91cnNDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGl0Q2VsbC5jbGFzc0xpc3QuYWRkKCdoaXQnLCAnY2VsbCcpO1xuICAgIG1pc3NDZWxsLmNsYXNzTGlzdC5hZGQoJ21pc3MnLCAnY2VsbCcpO1xuICAgIHN1bmtDZWxsLmNsYXNzTGlzdC5hZGQoJ3N1bmsnLCAnY2VsbCcpO1xuICAgIGVtcHR5Q2VsbC5jbGFzc0xpc3QuYWRkKCdlbXB0eScsICdjZWxsJyk7XG4gICAgeW91cnNDZWxsLmNsYXNzTGlzdC5hZGQoJ3lvdXJzJywgJ2NlbGwnKTtcblxuICAgIGlmIChlbmVteSkge1xuICAgICAgICBlbXB0eUNlbGwuY2xhc3NMaXN0LmFkZCgnZWNlbGwnKTtcbiAgICAgICAgaGl0Q2VsbC5jbGFzc0xpc3QuYWRkKCdlY2VsbCcpO1xuICAgICAgICBtaXNzQ2VsbC5jbGFzc0xpc3QuYWRkKCdlY2VsbCcpO1xuICAgICAgICBzdW5rQ2VsbC5jbGFzc0xpc3QuYWRkKCdlY2VsbCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGVtcHR5Q2VsbC5jbGFzc0xpc3QuYWRkKCdwY2VsbCcpO1xuICAgICAgICBoaXRDZWxsLmNsYXNzTGlzdC5hZGQoJ3BjZWxsJyk7XG4gICAgICAgIG1pc3NDZWxsLmNsYXNzTGlzdC5hZGQoJ3BjZWxsJyk7XG4gICAgICAgIHN1bmtDZWxsLmNsYXNzTGlzdC5hZGQoJ3BjZWxsJyk7XG4gICAgICAgIHlvdXJzQ2VsbC5jbGFzc0xpc3QuYWRkKCdwY2VsbCcpO1xuICAgIH1cblxuICAgIGVtcHR5Q2VsbC50ZXh0Q29udGVudCA9ICcnO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICAgICAgbGV0IHRtcDtcbiAgICAgICAgICAgIGlmIChib2FyZC5ib2FyZFtpXVtqXSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgdG1wID0gZW1wdHlDZWxsLmNsb25lTm9kZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoYm9hcmQuYm9hcmRbaV1bal0gPT0gMSkge1xuICAgICAgICAgICAgICAgIHRtcCA9IG1pc3NDZWxsLmNsb25lTm9kZSgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICAgICAgeC50ZXh0Q29udGVudCA9ICdYJztcbiAgICAgICAgICAgICAgICB0bXAuYXBwZW5kQ2hpbGQoeCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChib2FyZC5ib2FyZFtpXVtqXS5pc1N1bmsoKSkge1xuICAgICAgICAgICAgICAgIHRtcCA9IHN1bmtDZWxsLmNsb25lTm9kZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoYm9hcmQuaGl0X2xpc3QuaW5jbHVkZXMoSlNPTi5zdHJpbmdpZnkoW2ksIGpdKSkpIHtcbiAgICAgICAgICAgICAgICB0bXAgPSBoaXRDZWxsLmNsb25lTm9kZSgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICAgICAgeC50ZXh0Q29udGVudCA9ICdYJztcbiAgICAgICAgICAgICAgICB0bXAuYXBwZW5kQ2hpbGQoeCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICghZW5lbXkpIHtcbiAgICAgICAgICAgICAgICB0bXAgPSB5b3Vyc0NlbGwuY2xvbmVOb2RlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0bXAgPSBlbXB0eUNlbGwuY2xvbmVOb2RlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChlbmVteSkge1xuICAgICAgICAgICAgICAgIHRtcC5pZCA9ICdlJ1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0bXAuaWQgPSAncCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRtcC5pZCArPSAncicgKyBpICsgJ2MnICsgajtcblxuICAgICAgICAgICAgYl9lbGUuYXBwZW5kQ2hpbGQodG1wKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gYXR0YWNoQXR0YWNrTGlzdGVuZXIoY2VsbF9pZCwgZ2FtZSkge1xuICAgIGxldCBjZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2VsbF9pZCk7XG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYgKGdhbWUuc3RhdHVzIDwgZ2FtZV9zdGF0dXNbXCJwMV90dXJuXCJdKSB7XG4gICAgICAgICAgICBhbGVydCgnUGxlYXNlIHBsYWNlIHlvdXIgc2hpcHMgZmlyc3QhJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGkgPSBwYXJzZUludChjZWxsLmlkLmNoYXJBdCgyKSk7XG4gICAgICAgIGxldCBqID0gcGFyc2VJbnQoY2VsbC5pZC5jaGFyQXQoNCkpO1xuICAgICAgICBsZXQgYXR0ID0gZ2FtZS5hdHRhY2soW2ksIGpdKTtcbiAgICAgICAgaWYgKGF0dCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgYWxlcnQoJ0ludmFsaWQgQXR0YWNrIScpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIGlmIHRoZSBnYW1lIGlzIG92ZXIsIHdlIHNob3VsZCBkaXNwbGF5IHRoZSB3aW4gc2NyZWVuXG4gICAgICAgIGlmIChnYW1lLnN0YXR1cyA9PSBnYW1lX3N0YXR1cy5wMV93aW4gfHwgZ2FtZS5zdGF0dXMgPT0gZ2FtZV9zdGF0dXMucDJfd2luKSB7XG4gICAgICAgICAgICB3aW5Db25kaXRpb24oZ2FtZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgaXRzIGFpIG1vZGUsIHdlIHNob3VsZCBhdXRvYXR0YWNrIHRoZSBwbGF5ZXJcbiAgICAgICAgaWYgKGdhbWUubW9kZSA9PSAnZWFzeScgfHwgZ2FtZS5tb2RlID09ICdoYXJkJykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZ2FtZS5haUF0dGFjaygpKTtcbiAgICAgICAgICAgIC8vIGlmIHRoZSBnYW1lIGlzIG92ZXIsIHdlIHNob3VsZCBkaXNwbGF5IHRoZSB3aW4gc2NyZWVuXG4gICAgICAgICAgICBpZiAoZ2FtZS5zdGF0dXMgPT0gZ2FtZV9zdGF0dXMucDFfd2luIHx8IGdhbWUuc3RhdHVzID09IGdhbWVfc3RhdHVzLnAyX3dpbikge1xuICAgICAgICAgICAgICAgIHdpbkNvbmRpdGlvbihnYW1lKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsYXlvdXQoZ2FtZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyB1cGRhdGUgdGhlIGNlbGwgYmFzZWQgb24gdGhlIGF0dGFja1xuICAgICAgICBpZiAoYXR0ID09ICdtaXNzJykge1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG4gICAgICAgICAgICBjb25zdCB4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgeC50ZXh0Q29udGVudCA9ICdYJztcbiAgICAgICAgICAgIGNlbGwuYXBwZW5kQ2hpbGQoeCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYXR0ID09ICdzdW5rJykge1xuICAgICAgICAgICAgLy8geW91IHN1bmsgX19fXyBzaGlwIVxuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdzdW5rJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuICAgICAgICAgICAgY29uc3QgeCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIHgudGV4dENvbnRlbnQgPSAnWCc7XG4gICAgICAgICAgICBjZWxsLmFwcGVuZENoaWxkKHgpO1xuICAgICAgICB9XG4gICAgICAgIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIC8vIGRpc3BsYXkgdGhlIHBhc3MgdG8gcGxheWVyIDIgc2NyZWVuXG4gICAgICAgIGNvbnN0IHBhc3Nfc2NyZWVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHBhc3Nfc2NyZWVuLmNsYXNzTGlzdC5hZGQoJ3Bhc3MnKTtcbiAgICAgICAgcGFzc19zY3JlZW4uY2xhc3NMaXN0LmFkZCgnZ2cnKVxuXG4gICAgICAgIGxldCBwbGF5ZXIgPSAoZ2FtZS5zdGF0dXMgPT0gZ2FtZV9zdGF0dXMucDFfdHVybikgPyBnYW1lLnAxX25hbWUgOiBnYW1lLnAyX25hbWU7XG5cbiAgICAgICAgY29uc3QgcGFzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIHBhc3MudGV4dENvbnRlbnQgPSAnUEFTUyBUTyAnICsgcGxheWVyO1xuICAgICAgICBwYXNzX3NjcmVlbi5hcHBlbmRDaGlsZChwYXNzKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwYXNzX3NjcmVlbik7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICBsYXlvdXQoZ2FtZSk7XG4gICAgICAgIH0sIDMwMDApO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiB3aW5Db25kaXRpb24oZ2FtZSkge1xuICAgIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gJyc7XG4gICAgY29uc3QgZW5kX3NjcmVlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIC8vIGRpc3BsYXkgd2hpY2ggcGxheWVyIHdvblxuICAgIGNvbnN0IHdpbl9kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB3aW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHdpbl9kaXYuY2xhc3NMaXN0LmFkZCgnd2luX2RpdicpO1xuICAgIHdpbi50ZXh0Q29udGVudCA9IChnYW1lLnN0YXR1cyA9PSBnYW1lX3N0YXR1cy5wMV93aW4gPyBnYW1lLnAxX25hbWUgOiBnYW1lLnAyX25hbWUpICsgJyBXSU5TISc7XG4gICAgLy8gYWRkIGEgc2VjdGlvbiB0aGF0IHNheXMgaG93IG1hbnkgc2hpcHMgdGhlIGVuZW15IGhhZCBsZWZ0XG4gICAgY29uc3Qgc2hpcHNfbGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgc2hpcHNfbGVmdC50ZXh0Q29udGVudCA9ICdpbiBvbmx5ICcgKyBNYXRoLmZsb29yKGdhbWUudHVybnMgLyAyKSArICcgdHVybnMhJztcbiAgICAvLyBhcHBlbmQgaGVhZGVyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnVpbGRIZWFkZXIoaGVhZGVyLCBnYW1lKTtcbiAgICBlbmRfc2NyZWVuLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgZ2FtZS5yZXNldCgpO1xuICAgIC8vIGFkZCBhIGJ1dHRvbiB0byByZXR1cm5cbiAgICBjb25zdCByZXR1cm5fYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcmV0dXJuX2J0bi50ZXh0Q29udGVudCA9ICdSRVRVUk4nO1xuICAgIHJldHVybl9idG4uY2xhc3NMaXN0LmFkZCgncmV0dXJuJyk7XG4gICAgcmV0dXJuX2J0bi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICBsYXlvdXQoZ2FtZSk7XG4gICAgfVxuICAgIHJldHVybl9idG4uY2xhc3NMaXN0LmFkZCgncmV0dXJuYnRuJyk7XG4gICAgd2luX2Rpdi5hcHBlbmRDaGlsZCh3aW4pO1xuICAgIHdpbl9kaXYuYXBwZW5kQ2hpbGQoc2hpcHNfbGVmdCk7XG4gICAgd2luX2Rpdi5hcHBlbmRDaGlsZChyZXR1cm5fYnRuKTtcbiAgICBlbmRfc2NyZWVuLmFwcGVuZENoaWxkKHdpbl9kaXYpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZW5kX3NjcmVlbik7XG5cblxufVxuXG5mdW5jdGlvbiBidWlsZFJlc2V0U2VjdGlvbihnYW1lLCByZXNldF9zZWN0KSB7XG4gICAgLy8gcHZwIG1vZGUgYnRuXG4gICAgY29uc3QgcHZwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcHZwLnRleHRDb250ZW50ID0gJ1BWUCBNT0RFJztcbiAgICBwdnAuY2xhc3NMaXN0LmFkZCgncHZwYnRuJyk7XG4gICAgcmVzZXRfc2VjdC5hcHBlbmRDaGlsZChwdnApO1xuICAgIHB2cC5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICBnYW1lLnJlc2V0KCk7XG4gICAgICAgIGdhbWUubW9kZSA9ICdwdnAnO1xuICAgICAgICBnYW1lLnAxX25hbWUgPSBwcm9tcHQoJ1BsYXllciAxLCBlbnRlciB5b3VyIG5hbWU6JykudG9VcHBlckNhc2UoKTtcbiAgICAgICAgZ2FtZS5wMl9uYW1lID0gcHJvbXB0KCdQbGF5ZXIgMiwgZW50ZXIgeW91ciBuYW1lOicpLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIGxheW91dChnYW1lKTtcbiAgICB9XG5cbiAgICAvLyBlYXN5IG1vZGUgYnRuXG4gICAgY29uc3QgZWFzeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGVhc3kudGV4dENvbnRlbnQgPSAnRUFTWSBNT0RFJztcbiAgICBlYXN5LmNsYXNzTGlzdC5hZGQoJ2Vhc3lidG4nKTtcbiAgICByZXNldF9zZWN0LmFwcGVuZENoaWxkKGVhc3kpO1xuICAgIGVhc3kub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgZ2FtZS5yZXNldCgpO1xuICAgICAgICBnYW1lLm1vZGUgPSAnZWFzeSc7XG4gICAgICAgIGxheW91dChnYW1lKTtcbiAgICB9XG4gICAgLy8gaGFyZCBtb2RlIGJ0blxuICAgIGNvbnN0IGhhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBoYXJkLnRleHRDb250ZW50ID0gJ0hBUkQgTU9ERSc7XG4gICAgaGFyZC5jbGFzc0xpc3QuYWRkKCdoYXJkYnRuJyk7XG4gICAgcmVzZXRfc2VjdC5hcHBlbmRDaGlsZChoYXJkKTtcbiAgICBoYXJkLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGdhbWUucmVzZXQoKTtcbiAgICAgICAgZ2FtZS5tb2RlID0gJ2hhcmQnO1xuICAgICAgICBsYXlvdXQoZ2FtZSk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICByZXNldC50ZXh0Q29udGVudCA9ICdSRVNFVCc7XG4gICAgcmVzZXQuY2xhc3NMaXN0LmFkZCgncmVzZXRidG4nKTtcbiAgICByZXNldF9zZWN0LmFwcGVuZENoaWxkKHJlc2V0KTtcbiAgICByZXNldC5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICBnYW1lLnJlc2V0KCk7XG4gICAgICAgIGxheW91dChnYW1lKTtcbiAgICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09VG8gRG89PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gcmVkbyBsb2dpYy50ZXN0LmpzXG4vLyBmaXggaG92ZXIgZnVuY3Rpb25hbGl0eVxuLy8gY2xlYW4gdXAgbG9naWMuanNcbi8vIHdyaXRlIG91dCByZWFkbWUgd2l0aCBsb2dpYyBmb3IgcHJvYmFiaWxpc3RpYyAoaGFyZCkgbW9kZVxuLy8gLS0tZXZhbHVhdGUgdXNpbmcgYmF5ZXNpYW4gc2VhcmNoIGFsZ29yaXRobVxuLy8gLS0tZXZhbHVhdGUgdXNpbmcgZ3JlZWR5IHNlYXJjaCBhbGdvcml0aG1cbi8vIGdldCB0aGUgbnVtYmVycyBvbiBlYWNoIGFwcHJvYWNoIHdpdGggYW4gYXV0b21hdGVkIHRlc3Rcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09RnV0dXJlIEZlYXR1cmVzPT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIGNvbm5lY3QgdG8gYmFja2VuZCB3aXRoIHNpZ24taW4sIGxlYWRlcmJvYXJkLCBhbmQgc3RhdHNcbi8vIGFkZCBuZXR3b3JrIHB2cCBtb2RlXG4vLyBhZGQgYWkgbW9kZSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImdhbWVcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuL2xvZ2ljXCI7XG5pbXBvcnQgeyBsYXlvdXQgfSBmcm9tIFwiLi9yZW5kZXJcIlxuXG5mdW5jdGlvbiBtYWluKCl7XG4gICAgY29uc3QgZ2FtZSA9IEdhbWUoKTtcbiAgICBnYW1lLmluaXQoKTtcbiAgICBsYXlvdXQoZ2FtZSk7XG59XG5cbm1haW4oKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=