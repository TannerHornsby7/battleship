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
___CSS_LOADER_EXPORT___.push([module.id, "/* Custom Font */\n@font-face {\n  font-family: \"Open Sans\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  font-weight: 1000;\n  font-style: normal;\n}\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Open Sans\";\n}\n\nhtml,\nbody {\n  width: 100%;\n  height: 100%;\n}\n\nul,\nli {\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n}\n\nbutton,\ninput {\n  border: none;\n  outline: none;\n}\n\nbody {\n  display: grid;\n  grid-template-rows: 1fr 9fr 1fr;\n}\n\n.head {\n  font-size: 2em;\n  display: grid;\n  grid-template-columns: 1fr 6fr 1fr;\n  place-items: center;\n  color: ivory;\n  background-color: rgb(20, 0, 102);\n  transition: all 0.5s ease;\n  height: 100px;\n}\n.head button {\n  font-size: 0.5em;\n  height: 40px;\n  width: 60%;\n  color: rgb(20, 0, 102);\n  background-color: ivory;\n  box-shadow: 2px 2px 2px rgb(20, 0, 102);\n  transition: all 0.5s ease;\n  background-color: aliceblue;\n  color: black;\n}\n.head button:hover {\n  cursor: pointer;\n  color: rgb(20, 0, 102);\n  background-color: ivory;\n  box-shadow: 2px 2px 2px rgb(20, 0, 102);\n  transition: all 0.5s ease;\n}\n\n.foot {\n  display: flex;\n  background-color: rgb(56, 55, 55);\n  color: ivory;\n  justify-content: center;\n  align-items: center;\n}\n\n.body {\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;\n  height: 100%;\n}\n.body .info {\n  display: grid;\n  grid-template-rows: 1fr 2fr;\n}\n.body .info .boat {\n  cursor: pointer;\n}\n.body .info .key {\n  align-self: center;\n  justify-self: center;\n  border: 2px solid rgb(20, 0, 102);\n  padding: 2px 10px 5px 10px;\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n}\n.body .info .key .key_sect {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 15px;\n}\n.body .info .key .sunk {\n  width: 50px;\n  height: 25px;\n  background-color: rgb(154, 9, 9);\n  border: 2px solid ivory;\n}\n.body .info .key h2 {\n  font-size: 25px;\n}\n.body .info .key .hit {\n  color: rgb(154, 9, 9);\n}\n.body .info .dock {\n  justify-self: center;\n  width: 60%;\n}\n.body .info .dock h2,\n.body .info .dock h5 {\n  text-align: center;\n}\n.body .info .dock h2 {\n  color: rgb(20, 0, 102);\n}\n.body .info .dock .boat_lot {\n  border: 2px solid rgb(20, 0, 102);\n  padding: 8px;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.body .info .dock .boat {\n  height: 30px;\n  background-color: black;\n}\n.body .info #rp {\n  margin-bottom: 15px;\n  justify-self: flex-end;\n  height: 50px;\n  width: 80%;\n  background-color: rgb(20, 0, 102);\n  color: ivory;\n}\n.body .info #rp:hover {\n  cursor: pointer;\n  background-color: ivory;\n  border: 2px solid rgb(20, 0, 102);\n  color: rgb(20, 0, 102);\n}\n.body .game {\n  display: grid;\n  place-items: center;\n}\n.body .game .fullboard {\n  place-items: center;\n  height: 95%;\n  width: 75%;\n  background-color: rgb(20, 0, 102);\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n  row-gap: 5px;\n}\n.body .game .board {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  width: 90%;\n  height: 90%;\n  background-color: black;\n}\n.body .game .cell {\n  margin: 1px;\n  padding: none;\n  box-sizing: border-box;\n}\n.body .game p {\n  padding: 0px;\n  margin: 0px;\n  border: 0px;\n  align-self: center;\n  justify-self: center;\n  margin-bottom: -50px;\n  text-align: center;\n}\n.body .game .empty {\n  background-color: ivory;\n}\n.body .game .empty .hovering {\n  background-color: gray;\n}\n.body .game .miss {\n  background-color: ivory;\n  color: black;\n}\n.body .game .sunk {\n  background-color: rgb(154, 9, 9);\n}\n.body .game .yours {\n  background-color: black;\n}\n.body .game .yours:hover {\n  box-sizing: border-box;\n  background-color: ivory;\n  cursor: pointer;\n}\n.body .game .hit {\n  font-size: 1em;\n  background-color: black;\n  color: rgb(154, 9, 9);\n  font-weight: bolder;\n}\n.body .game .hovering {\n  background-color: lightslategray;\n}\n.body .game .hovering:hover {\n  cursor: pointer;\n}\n.body .game .ecell:hover {\n  cursor: crosshair;\n  transition: all 0.2s ease;\n  background-color: white;\n}\n.body .reset {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: center;\n}\n.body .reset button {\n  margin-bottom: 15px;\n  justify-self: flex-end;\n  height: 50px;\n  width: 80%;\n  background-color: rgb(154, 9, 9);\n  color: ivory;\n}\n.body .reset button:hover {\n  cursor: pointer;\n  background-color: ivory;\n  border: 2px solid rgb(154, 9, 9);\n  color: rgb(20, 0, 102);\n}\n.body .reset .hardbtn {\n  background-color: black;\n}\n.body .reset .hardbtn:hover {\n  cursor: pointer;\n  background-color: ivory;\n  border: 2px solid black;\n  color: black;\n}\n.body .reset .easybtn {\n  background-color: darkgreen;\n}\n.body .reset .easybtn:hover {\n  cursor: pointer;\n  background-color: ivory;\n  border: 2px solid darkgreen;\n  color: darkgreen;\n}\n.body .reset .pvpbtn {\n  background-color: rgb(20, 0, 102);\n}\n.body .reset .pvpbtn:hover {\n  cursor: pointer;\n  background-color: ivory;\n  border: 2px solid rgb(20, 0, 102);\n  color: rgb(20, 0, 102);\n}\n\n.gg {\n  display: grid;\n  width: 100%;\n  height: 100%;\n  font-size: 5em;\n  place-content: center;\n}", "",{"version":3,"sources":["webpack://./src/_formatting.scss","webpack://./src/style.scss"],"names":[],"mappings":"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","sourcesContent":["/* Custom Font */\n@font-face {\n  font-family: \"Open Sans\";\n  src: url(\"assets/Open_Sans/OpenSans-Italic-VariableFont_wdth,wght.ttf\"),\n    url(\"assets/Open_Sans/OpenSans-Italic-VariableFont_wdth,wght.ttf\");\n  font-weight: 1000;\n  font-style: normal;\n}\n\n// setting basic element properties\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Open Sans\";\n}\n\nhtml,\nbody {\n  width: 100%;\n  height: 100%;\n}\n\nul,\nli {\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n}\n\nbutton,\ninput {\n  border: none;\n  outline: none;\n}\n","@use \"formatting\";\n\n// theme colors\n$lightcolor: ivory;\n$darkcolor: rgb(20, 0, 102);\n\n// setting theme\n@mixin theme($dark: true) {\n  @if ($dark) {\n    color: $lightcolor;\n    background-color: $darkcolor;\n    // box-shadow: 2px 2px 2px $lightcolor;\n  } @else {\n    color: $darkcolor;\n    background-color: $lightcolor;\n    box-shadow: 2px 2px 2px $darkcolor;\n  }\n  transition: all 0.5s ease;\n}\n\nbody {\n  display: grid;\n  grid-template-rows: 1fr 9fr 1fr;\n}\n\n.head{\n  font-size: 2em;\n  display: grid;\n  grid-template-columns: 1fr 6fr 1fr;\n  place-items: center;\n  @include theme;\n  height: 100px;\n  button {\n    font-size: .5em;\n    height: 40px;\n    width: 60%;\n    @include theme(false);\n    background-color: aliceblue;\n    color: black;\n    &:hover {\n      cursor: pointer;\n      @include theme(false);\n    }\n  }\n}\n\n.foot{\n  display: flex;\n  background-color: rgb(56, 55, 55);\n  color: $lightcolor;\n  justify-content: center;\n  align-items: center;\n}\n\n.body{\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;\n  height: 100%;\n\n  .info {\n    display: grid;\n    grid-template-rows: 1fr 2fr;\n    .boat {\n      cursor: pointer;\n    }\n    .key{\n      align-self: center;\n      justify-self: center;\n      border: 2px solid $darkcolor;\n      padding: 2px 10px 5px 10px;\n      width: 50%;\n      display: flex;\n      flex-direction: column;\n      .key_sect {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        gap: 15px;\n      }\n      .sunk {\n        width: 50px;\n        height: 25px;\n        background-color: rgb(154, 9, 9);\n        border: 2px solid $lightcolor;\n\n      }\n\n      h2{\n        font-size: 25px;\n      }\n      .hit{\n        color: rgb(154, 9, 9);\n      }\n    }\n\n    .dock{\n      justify-self: center;\n      h2,\n      h5 {\n        text-align: center;\n      }\n      h2 {\n        color:rgb(20, 0, 102);\n      }\n      width: 60%;\n      .boat_lot{\n        border: 2px solid $darkcolor;\n        padding: 8px;\n        display: flex;\n        flex-direction: column;\n        gap: 5px;\n      }\n      .boat{\n        height: 30px;\n        background-color: black;\n      }\n    }\n\n    #rp {\n      margin-bottom: 15px;\n      justify-self: flex-end;\n      height: 50px;\n      width: 80%;\n      background-color: $darkcolor;\n      color: $lightcolor;\n      &:hover{\n        cursor: pointer;\n        background-color: $lightcolor;\n        border: 2px solid $darkcolor;\n        color: $darkcolor;\n      }\n    }\n  }\n\n  .game{\n    display: grid;\n    place-items: center;\n    .fullboard {\n      place-items: center;\n      height: 95%;\n      width: 75%;\n      background-color: $darkcolor;\n      display: grid;\n      grid-template-rows: 1fr 1fr;\n      row-gap: 5px;\n    }\n    .board{\n      display: grid;\n      grid-template-columns: repeat(10, 1fr);\n      width:90%;\n      height:90%;\n      background-color: black;\n      \n    }\n    .cell {\n      margin: 1px;\n      padding: none;\n      box-sizing: border-box;\n    }\n    p{\n      padding: 0px;\n      margin: 0px;\n      border: 0px;\n      align-self: center;\n      justify-self: center;\n      margin-bottom: -50px;\n      text-align: center;\n    }\n    .empty {\n      background-color: $lightcolor;\n      .hovering {\n        background-color: gray;\n      }\n    }\n  \n    .miss {\n      background-color: $lightcolor;\n      color: black;\n    }\n    .sunk {\n      background-color: rgb(154, 9, 9);\n    }\n    .yours {\n      background-color: black;\n      &:hover {\n        box-sizing: border-box;\n        background-color: $lightcolor;\n        cursor: pointer;\n      }\n    }\n    .hit {\n      font-size: 1em;\n      background-color: black;\n      color: rgb(154, 9, 9);\n      font-weight: bolder;\n    }\n    .hovering {\n      background-color: lightslategray;\n      &:hover{\n        cursor: pointer;\n      }\n    }\n    .ecell {\n      &:hover {\n        cursor: crosshair;\n        transition: all 0.2s ease;\n        background-color: white;\n      }\n    }\n  }\n  \n  .reset {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    align-items: center;\n    button {\n      margin-bottom: 15px;\n      justify-self: flex-end;\n      height: 50px;\n      width: 80%;\n      background-color: rgb(154, 9, 9);\n      color: $lightcolor;\n      &:hover{\n        cursor: pointer;\n        background-color: $lightcolor;\n        border: 2px solid rgb(154, 9, 9);\n        color: $darkcolor;\n      }\n    }\n    .hardbtn {\n      background-color: black;\n      &:hover{\n        cursor: pointer;\n        background-color: $lightcolor;\n        border: 2px solid black;\n        color: black;\n      }\n    }\n    .easybtn {\n      background-color: darkgreen;\n      &:hover{\n        cursor: pointer;\n        background-color: $lightcolor;\n        border: 2px solid darkgreen;\n        color: darkgreen;\n      }\n    }\n    .pvpbtn {\n      background-color: $darkcolor;\n      &:hover{\n        cursor: pointer;\n        background-color: $lightcolor;\n        border: 2px solid $darkcolor;\n        color: $darkcolor;\n      }\n    }\n  }\n}\n\n.gg{\n  display: grid;\n  width: 100%;\n  height: 100%;\n  font-size: 5em;\n  place-content: center;\n}"],"sourceRoot":""}]);
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



/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "layout": () => (/* binding */ layout)
/* harmony export */ });
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");


// RENDERS THE GAME
function layout(player) {
    window.onkeydown = (ev)=>{
        if(ev.keyCode == 13){
            setPClick(player);
            if(!player.pboard.ship_deck.length) {
                document.body.innerHTML = '';
                player.setAI();
                layout(player);
            }
        }
        console.log('entered!');
    };
    // LOCAL VARIABLES FOR EASIER UNDERSTANDING
    let eboard = player.aiboard;
    let pboard = player.pboard;
    let ship_deck = player.pboard.ship_deck;
    let sink_deck = player.aiboard.standing;

    // CREATING SECTIONS
    const h = document.createElement('div');
    const b = document.createElement('div');
    const f = document.createElement('div');

    // SETTING HEADER AND FOOTER
    setHead(h);
    setFoot(f);

    // SETTING BODY
    b.classList.add('body');
    // -info section
    const info_sect = document.createElement('div');
    const key = document.createElement('div');
    const dock = document.createElement('div');
    const place_random = document.createElement('button');

    info_sect.classList.add('info');
    place_random.id = 'rp';

    setKey(key);
    (ship_deck.length != 0) ? setDock(player, dock, ship_deck) : setDock(player, dock, sink_deck, true);
    place_random.textContent = 'PLACE MY SHIPS';
    place_random.onclick = () => {
        player.reset(true);
        document.body.innerHTML = '';
        layout(player);
    }

    info_sect.appendChild(key);
    info_sect.appendChild(dock);
    if(ship_deck.length != 0) {
        info_sect.appendChild(place_random);
    }

    // -board section
    const board_sect = document.createElement('div');
    setBoards(player, board_sect, eboard, pboard);

    // -reset/win section
    const reset_sect = document.createElement('div');
    reset_sect.classList.add('reset');
    setResetSection(player, reset_sect);

    // appending each section to body
    b.appendChild(info_sect);
    b.appendChild(board_sect);
    b.appendChild(reset_sect);

    // APPENDING ELEMENTS
    document.body.appendChild(h);
    document.body.appendChild(b);
    document.body.appendChild(f);

    // Setting hover
    setPHover(player);
}

function setHead(h){
    // SETTING HEADER
    const empty = document.createElement('div');
    empty.textContent = '';
    h.classList.add('head');
    const title = document.createElement('h1');
    const gh = document.createElement('button');

    title.textContent = 'BATTLESHIP';
    gh.textContent = 'GITHUB'
    gh.onclick = function (){
        open('https://github.com/TannerHornsby7/odin-battleship');
    };

    h.appendChild(empty);
    h.appendChild(title);
    h.appendChild(gh);
}

function setFoot(f){
    // SETTING FOOTER
    f.classList.add('foot');
    const name = document.createElement('h4');
    name.textContent = '@tannerhornsby7';
    f.appendChild(name);
}

function setKey(key){
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

function setDock(player, dock, ships_deck, placed = false){
    const dock_head = document.createElement('h2');
    const boat_lot = document.createElement('div');
    const boat = document.createElement('div');
    const dock_footer = document.createElement('h5');

    dock.classList.add('dock');
    boat.textContent = '';
    boat.classList.add('boat');

    boat_lot.classList.add('boat_lot');

    if(placed) {
        boat.classList.add('enemy');
        dock_head.textContent = 'Remaining Enemy Ships:';
        dock_footer.textContent = 'Keep Firing!'
    } else {
        dock_head.textContent = 'Place Your Ships';
        dock_footer.textContent = 'Click one of the ships above to select it, press R to rotate it, and press enter to place it!'
    }

    ships_deck.sort();
    for(let i = 0; i < ships_deck.length; i++){
        let tmp_boat = boat.cloneNode();
        let ship_length = Math.floor(ships_deck[i] / 5 * 100);
        tmp_boat.setAttribute("style",`width:${ship_length}%`);
        tmp_boat.onclick = function(e){
            let length = Math.floor(parseInt(e.target.style.width
                .slice(0,-1)) / 20);
            let rotation = 0;
            player.pboard.setCurrShip(length);
            console.log(player.pboard.curr_ship);

            window.addEventListener('keydown', (ev)=>{
                console.log(ev);
                if(ev.key == 'r'){
                    rotation += 1;
                    rotation %= 4;
                    console.log(rotation);
                    player.pboard.rotation = rotation;
                    document.body.innerHTML = '';
                    layout(player);
                }
            });
        }
        boat_lot.appendChild(tmp_boat);
    }

    dock.appendChild(dock_head);
    dock.appendChild(boat_lot);
    dock.appendChild(dock_footer);
}

function setBoards(player, board_sect, eboard, pboard){
    board_sect.classList.add('game');
    const fullboard = document.createElement('div');
    fullboard.classList.add('fullboard');
    const top_board = document.createElement('div');
    const bot_board = document.createElement('div');
    setEBoard(player, top_board, eboard);
    setPBoard(player, bot_board, pboard);
    fullboard.appendChild(top_board);
    fullboard.appendChild(bot_board);

    board_sect.appendChild(fullboard);
}

function setEBoard(player, b_ele, gameboard){
    b_ele.classList.add('board');
    const emptyCell = document.createElement('div');
    const hitCell = document.createElement('div');
    const missCell = document.createElement('div');
    const sunkCell = document.createElement('div');
    hitCell.classList.add('hit', 'cell', 'ecell');
    missCell.classList.add('miss', 'cell', 'ecell');
    sunkCell.classList.add('sunk', 'cell', 'ecell');
    emptyCell.classList.add('empty', 'cell', 'ecell');
    emptyCell.textContent = '';

    // 0 empty, 1 hit, 2 miss, 3 sunk, 4 yours
    // add event listeners to each node as well!
    for(let i = 0; i < gameboard.board.length; i++){
        for(let j = 0; j < gameboard.board.length; j++){
            let tmp;
            if(gameboard.board[i][j] && gameboard.board[i][j].isSunk()){
                tmp = sunkCell.cloneNode();
            } 
            else if(gameboard.hit_att.includes(JSON.stringify([i,j]))) {
                tmp = hitCell.cloneNode();
                const x = document.createElement('p');
                x.textContent = 'X';
                tmp.appendChild(x);
            }
            else if(gameboard.miss_att.includes(JSON.stringify([i,j]))) {
                tmp = missCell.cloneNode();
                const x = document.createElement('p');
                x.textContent = 'X';
                tmp.appendChild(x);
            }
            else {
                tmp = emptyCell.cloneNode();
                onEClick(player, tmp);
            }
            tmp.id = 'r' + i + 'c' + j;

            b_ele.appendChild(tmp);
        }
    }
}

function setPBoard(player, b_ele, gameboard){
    b_ele.classList.add('board');
    const yourCell = document.createElement('div');
    const emptyCell = document.createElement('div');
    const hitCell = document.createElement('div');
    const missCell = document.createElement('div');
    const sunkCell = document.createElement('div');
    const hoverCell = document.createElement('div');
    hitCell.classList.add('hit', 'cell', 'pcell');
    missCell.classList.add('miss', 'cell', 'pcell');
    sunkCell.classList.add('sunk', 'cell', 'pcell');
    yourCell.classList.add('yours', 'cell', 'pcell');
    emptyCell.classList.add('empty', 'cell', 'pcell');
    hoverCell.classList.add('hovering', 'cell', 'pcell');

    for(let i = 0; i < gameboard.board.length; i++){
        for(let j = 0; j < gameboard.board.length; j++){
            let tmp;
            
            if(gameboard.board[i][j] && gameboard.board[i][j].isSunk()) {
                tmp = sunkCell.cloneNode();
            }
            else if(gameboard.hit_att.includes(JSON.stringify([i,j]))) {
                tmp = hitCell.cloneNode();
                const x = document.createElement('p');
                x.textContent = 'X';
                tmp.appendChild(x);
            }
            else if(gameboard.miss_att.includes(JSON.stringify([i,j]))) {
                tmp = missCell.cloneNode();
                const x = document.createElement('p');
                x.textContent = 'X';
                tmp.appendChild(x);
            }
            else if(gameboard.board[i][j].length) {
                console.log('your boat is placed at '+ i +' , '+ j);
                tmp = yourCell.cloneNode();
            }
            else if(gameboard.hovering.includes(JSON.stringify([i, j]))){
                // console.log('hovering!')
                tmp = hoverCell.cloneNode();
                // console.log('added click listener to ' + tmp);
            }
            else {
                tmp = emptyCell.cloneNode();
            }

            tmp.id = 'r' + i + 'c' + j;
            b_ele.appendChild(tmp);
        }
    }
}

function onEClick(player, cell){
    cell.addEventListener('click', ()=>{
        if(player.pboard.ship_deck.length) {
            alert('Place Your Ships Before Attacking!');
            return;
        }
        let r = parseInt(cell.id.charAt(1));
        let c = parseInt(cell.id.charAt(3));
        let wc = player.attackAI([r, c]);
        let ap = player.attackP();
        if(wc == 0) {
            return;
        }
        document.body.innerHTML = '';
        layout(player);
        if(wc == 69) {
            winCondition(player, 'p');
        }
        if(ap == 69) {
            winCondition(player, 'c');
        }
    });
}

function setPHover(player){
    if(!player.pboard.ship_deck.length) return;
    const cells = document.querySelectorAll('.pcell');
    cells.forEach((cell)=>{
        if(cell.classList.contains('yours')) {
            return;
        }
        cell.addEventListener('mouseover', ()=>{
            let r = parseInt(cell.id.charAt(1));
            let c = parseInt(cell.id.charAt(3));
            let dir = player.pboard.rotation;
            let s = player.pboard.curr_ship;
            if(s == undefined) return;
            if(player.pboard.placeShip(s, [r, c], dir, true).length){
                player.pboard.hovering = [];
                player.pboard.placeShip(s, [r, c], dir, true).forEach((loc)=>{
                    player.pboard.hovering.push(JSON.stringify(loc));
            });

            document.body.innerHTML = '';
            layout(player);
            }
        });
    });
}

function setPClick(player){
    if(!player.pboard.ship_deck.length) return;
    if(!player.pboard.hovering.length) return;
    let spot = player.pboard.hovering[0];
    let r = parseInt(spot.charAt(1));
    let c = parseInt(spot.charAt(3));
    let idx = player.pboard.ship_deck.findIndex(
        (val) => val == player.pboard.curr_ship.length
    );
    player.pboard.ship_deck.splice(idx, 1);
    player.pboard.placeShip(player.pboard.curr_ship, [r, c], player.rotation);
    player.pboard.setCurrShip();
    if(!player.pboard.ship_deck.length) {
        player.pboard.hovering = [];
    }
}

function winCondition(player, param){
    player.reset();
    document.body.innerHTML = '';
    const end_screen = document.createElement('div');
    end_screen.classList.add('gg');
    end_screen.textContent = (param == 'p') ? 'User Wins' : 'AI Wins';
    document.body.appendChild(end_screen);
    setTimeout(function() {
        document.body.innerHTML = '';
        layout(player);
    }, 3000);
}

function setResetSection(player, reset_sect) {
    // --pvp mode btn
    const pvp = document.createElement('button');
    pvp.textContent = 'PVP MODE';
    pvp.classList.add('pvpbtn');
    reset_sect.appendChild(pvp);
    pvp.onclick = () => {
        document.body.innerHTML = '';
        layout(player);
    }

    // --easy mode btn
    const easy = document.createElement('button');
    easy.textContent = 'EASY MODE';
    easy.classList.add('easybtn');
    reset_sect.appendChild(easy);
    easy.onclick = () => {
        player.hard = false;
        document.body.innerHTML = '';
        layout(player);
    }
    // --hard mode btn
    const hard = document.createElement('button');
    hard.textContent = 'HARD MODE';
    hard.classList.add('hardbtn');
    reset_sect.appendChild(hard);
    hard.onclick = () => {
        player.hard = true;
        document.body.innerHTML = '';
        layout(player);
    }

    const reset = document.createElement('button');
    reset.textContent = 'RESET';
    reset.classList.add('resetbtn');
    reset_sect.appendChild(reset);
    reset.onclick = () => {
        player.reset();
        document.body.innerHTML = '';
        layout(player);
    }
}

function newGameForm(){

}
/*
TO-DO:
create header and footer dom module
create body render dom module
    have event listeners on each ship in the doc and each square in the board
create game over dom module

*/


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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
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
    const player = (0,_logic__WEBPACK_IMPORTED_MODULE_0__.Player)();
    (0,_render__WEBPACK_IMPORTED_MODULE_1__.layout)(player);
}

main();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCLGlCQUFpQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzTnNCOztBQUV0QjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLHVCQUF1QjtBQUMxQztBQUNBO0FBQ0EsK0NBQStDLFlBQVk7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQiw0QkFBNEI7QUFDL0MsdUJBQXVCLDRCQUE0QjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsNEJBQTRCO0FBQy9DLHVCQUF1Qiw0QkFBNEI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdGJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7OztBQ0FpQztBQUNBOztBQUVqQztBQUNBLG1CQUFtQiw4Q0FBTTtBQUN6QixJQUFJLCtDQUFNO0FBQ1Y7O0FBRUEsTyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvc3R5bGUuc2Nzcz83NWJhIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2xvZ2ljLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvZ2FtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiYXNzZXRzL09wZW5fU2Fucy9PcGVuU2Fucy1JdGFsaWMtVmFyaWFibGVGb250X3dkdGgsd2dodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBDdXN0b20gRm9udCAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpLCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDEwMDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCI7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxudWwsXFxubGkge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbmJ1dHRvbixcXG5pbnB1dCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA5ZnIgMWZyO1xcbn1cXG5cXG4uaGVhZCB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA2ZnIgMWZyO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiBpdm9yeTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMCwgMCwgMTAyKTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbn1cXG4uaGVhZCBidXR0b24ge1xcbiAgZm9udC1zaXplOiAwLjVlbTtcXG4gIGhlaWdodDogNDBweDtcXG4gIHdpZHRoOiA2MCU7XFxuICBjb2xvcjogcmdiKDIwLCAwLCAxMDIpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaXZvcnk7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDJweCByZ2IoMjAsIDAsIDEwMik7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG4uaGVhZCBidXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6IHJnYigyMCwgMCwgMTAyKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGl2b3J5O1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCAycHggcmdiKDIwLCAwLCAxMDIpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcXG59XFxuXFxuLmZvb3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig1NiwgNTUsIDU1KTtcXG4gIGNvbG9yOiBpdm9yeTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmJvZHkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmciAxZnI7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5ib2R5IC5pbmZvIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnI7XFxufVxcbi5ib2R5IC5pbmZvIC5ib2F0IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmJvZHkgLmluZm8gLmtleSB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyMCwgMCwgMTAyKTtcXG4gIHBhZGRpbmc6IDJweCAxMHB4IDVweCAxMHB4O1xcbiAgd2lkdGg6IDUwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uYm9keSAuaW5mbyAua2V5IC5rZXlfc2VjdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdhcDogMTVweDtcXG59XFxuLmJvZHkgLmluZm8gLmtleSAuc3VuayB7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogMjVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTQsIDksIDkpO1xcbiAgYm9yZGVyOiAycHggc29saWQgaXZvcnk7XFxufVxcbi5ib2R5IC5pbmZvIC5rZXkgaDIge1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbn1cXG4uYm9keSAuaW5mbyAua2V5IC5oaXQge1xcbiAgY29sb3I6IHJnYigxNTQsIDksIDkpO1xcbn1cXG4uYm9keSAuaW5mbyAuZG9jayB7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIHdpZHRoOiA2MCU7XFxufVxcbi5ib2R5IC5pbmZvIC5kb2NrIGgyLFxcbi5ib2R5IC5pbmZvIC5kb2NrIGg1IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmJvZHkgLmluZm8gLmRvY2sgaDIge1xcbiAgY29sb3I6IHJnYigyMCwgMCwgMTAyKTtcXG59XFxuLmJvZHkgLmluZm8gLmRvY2sgLmJvYXRfbG90IHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyMCwgMCwgMTAyKTtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA1cHg7XFxufVxcbi5ib2R5IC5pbmZvIC5kb2NrIC5ib2F0IHtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG4uYm9keSAuaW5mbyAjcnAge1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICB3aWR0aDogODAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwLCAwLCAxMDIpO1xcbiAgY29sb3I6IGl2b3J5O1xcbn1cXG4uYm9keSAuaW5mbyAjcnA6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaXZvcnk7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjAsIDAsIDEwMik7XFxuICBjb2xvcjogcmdiKDIwLCAwLCAxMDIpO1xcbn1cXG4uYm9keSAuZ2FtZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxuLmJvZHkgLmdhbWUgLmZ1bGxib2FyZCB7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiA5NSU7XFxuICB3aWR0aDogNzUlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwLCAwLCAxMDIpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gIHJvdy1nYXA6IDVweDtcXG59XFxuLmJvZHkgLmdhbWUgLmJvYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIHdpZHRoOiA5MCU7XFxuICBoZWlnaHQ6IDkwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG4uYm9keSAuZ2FtZSAuY2VsbCB7XFxuICBtYXJnaW46IDFweDtcXG4gIHBhZGRpbmc6IG5vbmU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4uYm9keSAuZ2FtZSBwIHtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIG1hcmdpbjogMHB4O1xcbiAgYm9yZGVyOiAwcHg7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IC01MHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uYm9keSAuZ2FtZSAuZW1wdHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaXZvcnk7XFxufVxcbi5ib2R5IC5nYW1lIC5lbXB0eSAuaG92ZXJpbmcge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG59XFxuLmJvZHkgLmdhbWUgLm1pc3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaXZvcnk7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcbi5ib2R5IC5nYW1lIC5zdW5rIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTQsIDksIDkpO1xcbn1cXG4uYm9keSAuZ2FtZSAueW91cnMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcbi5ib2R5IC5nYW1lIC55b3Vyczpob3ZlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaXZvcnk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5ib2R5IC5nYW1lIC5oaXQge1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiByZ2IoMTU0LCA5LCA5KTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcbi5ib2R5IC5nYW1lIC5ob3ZlcmluZyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNsYXRlZ3JheTtcXG59XFxuLmJvZHkgLmdhbWUgLmhvdmVyaW5nOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmJvZHkgLmdhbWUgLmVjZWxsOmhvdmVyIHtcXG4gIGN1cnNvcjogY3Jvc3NoYWlyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG4uYm9keSAucmVzZXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmJvZHkgLnJlc2V0IGJ1dHRvbiB7XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiA4MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU0LCA5LCA5KTtcXG4gIGNvbG9yOiBpdm9yeTtcXG59XFxuLmJvZHkgLnJlc2V0IGJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpdm9yeTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxNTQsIDksIDkpO1xcbiAgY29sb3I6IHJnYigyMCwgMCwgMTAyKTtcXG59XFxuLmJvZHkgLnJlc2V0IC5oYXJkYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG4uYm9keSAucmVzZXQgLmhhcmRidG46aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaXZvcnk7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuLmJvZHkgLnJlc2V0IC5lYXN5YnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmVlbjtcXG59XFxuLmJvZHkgLnJlc2V0IC5lYXN5YnRuOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGl2b3J5O1xcbiAgYm9yZGVyOiAycHggc29saWQgZGFya2dyZWVuO1xcbiAgY29sb3I6IGRhcmtncmVlbjtcXG59XFxuLmJvZHkgLnJlc2V0IC5wdnBidG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwLCAwLCAxMDIpO1xcbn1cXG4uYm9keSAucmVzZXQgLnB2cGJ0bjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpdm9yeTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyMCwgMCwgMTAyKTtcXG4gIGNvbG9yOiByZ2IoMjAsIDAsIDEwMik7XFxufVxcblxcbi5nZyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBmb250LXNpemU6IDVlbTtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL19mb3JtYXR0aW5nLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGdCQUFBO0FBQ0E7RUFDRSx3QkFBQTtFQUNBLHFGQUFBO0VBRUEsaUJBQUE7RUFDQSxrQkFBQTtBQ0FGO0FESUE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7QUNGRjs7QURLQTs7RUFFRSxXQUFBO0VBQ0EsWUFBQTtBQ0ZGOztBREtBOztFQUVFLGdCQUFBO0FDRkY7O0FES0E7RUFDRSxxQkFBQTtBQ0ZGOztBREtBOztFQUVFLFlBQUE7RUFDQSxhQUFBO0FDRkY7O0FBYkE7RUFDRSxhQUFBO0VBQ0EsK0JBQUE7QUFnQkY7O0FBYkE7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGtDQUFBO0VBQ0EsbUJBQUE7RUFwQkUsWUFOUztFQU9ULGlDQU5RO0VBYVYseUJBQUE7RUFjQSxhQUFBO0FBa0JGO0FBakJFO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQXRCQSxzQkFUUTtFQVVS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Z0JBQUE7QUFnQlI7QUFiSTtFQUNFLGlDQXJQTTtBQW9RWjtBQWRNO0VBQ0UsZUFBQTtFQUNBLHVCQXpQSztFQTBQTCxpQ0FBQTtFQUNBLHNCQTFQSTtBQTBRWjs7QUFWQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQWFGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIEN1c3RvbSBGb250ICovXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCI7XFxuICBzcmM6IHVybChcXFwiYXNzZXRzL09wZW5fU2Fucy9PcGVuU2Fucy1JdGFsaWMtVmFyaWFibGVGb250X3dkdGgsd2dodC50dGZcXFwiKSxcXG4gICAgdXJsKFxcXCJhc3NldHMvT3Blbl9TYW5zL09wZW5TYW5zLUl0YWxpYy1WYXJpYWJsZUZvbnRfd2R0aCx3Z2h0LnR0ZlxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDEwMDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbi8vIHNldHRpbmcgYmFzaWMgZWxlbWVudCBwcm9wZXJ0aWVzXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIjtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG51bCxcXG5saSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuYnV0dG9uLFxcbmlucHV0IHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblwiLFwiQHVzZSBcXFwiZm9ybWF0dGluZ1xcXCI7XFxuXFxuLy8gdGhlbWUgY29sb3JzXFxuJGxpZ2h0Y29sb3I6IGl2b3J5O1xcbiRkYXJrY29sb3I6IHJnYigyMCwgMCwgMTAyKTtcXG5cXG4vLyBzZXR0aW5nIHRoZW1lXFxuQG1peGluIHRoZW1lKCRkYXJrOiB0cnVlKSB7XFxuICBAaWYgKCRkYXJrKSB7XFxuICAgIGNvbG9yOiAkbGlnaHRjb2xvcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGRhcmtjb2xvcjtcXG4gICAgLy8gYm94LXNoYWRvdzogMnB4IDJweCAycHggJGxpZ2h0Y29sb3I7XFxuICB9IEBlbHNlIHtcXG4gICAgY29sb3I6ICRkYXJrY29sb3I7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodGNvbG9yO1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDJweCAkZGFya2NvbG9yO1xcbiAgfVxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgOWZyIDFmcjtcXG59XFxuXFxuLmhlYWR7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA2ZnIgMWZyO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIEBpbmNsdWRlIHRoZW1lO1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogLjVlbTtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBAaW5jbHVkZSB0aGVtZShmYWxzZSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICAmOmhvdmVyIHtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgQGluY2x1ZGUgdGhlbWUoZmFsc2UpO1xcbiAgICB9XFxuICB9XFxufVxcblxcbi5mb290e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig1NiwgNTUsIDU1KTtcXG4gIGNvbG9yOiAkbGlnaHRjb2xvcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmJvZHl7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDFmcjtcXG4gIGhlaWdodDogMTAwJTtcXG5cXG4gIC5pbmZvIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyO1xcbiAgICAuYm9hdCB7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxuICAgIC5rZXl7XFxuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRkYXJrY29sb3I7XFxuICAgICAgcGFkZGluZzogMnB4IDEwcHggNXB4IDEwcHg7XFxuICAgICAgd2lkdGg6IDUwJTtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgLmtleV9zZWN0IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgZ2FwOiAxNXB4O1xcbiAgICAgIH1cXG4gICAgICAuc3VuayB7XFxuICAgICAgICB3aWR0aDogNTBweDtcXG4gICAgICAgIGhlaWdodDogMjVweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTQsIDksIDkpO1xcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgJGxpZ2h0Y29sb3I7XFxuXFxuICAgICAgfVxcblxcbiAgICAgIGgye1xcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICAgIH1cXG4gICAgICAuaGl0e1xcbiAgICAgICAgY29sb3I6IHJnYigxNTQsIDksIDkpO1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICAuZG9ja3tcXG4gICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgICBoMixcXG4gICAgICBoNSB7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgfVxcbiAgICAgIGgyIHtcXG4gICAgICAgIGNvbG9yOnJnYigyMCwgMCwgMTAyKTtcXG4gICAgICB9XFxuICAgICAgd2lkdGg6IDYwJTtcXG4gICAgICAuYm9hdF9sb3R7XFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkZGFya2NvbG9yO1xcbiAgICAgICAgcGFkZGluZzogOHB4O1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBnYXA6IDVweDtcXG4gICAgICB9XFxuICAgICAgLmJvYXR7XFxuICAgICAgICBoZWlnaHQ6IDMwcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgI3JwIHtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgICAgIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XFxuICAgICAgaGVpZ2h0OiA1MHB4O1xcbiAgICAgIHdpZHRoOiA4MCU7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRhcmtjb2xvcjtcXG4gICAgICBjb2xvcjogJGxpZ2h0Y29sb3I7XFxuICAgICAgJjpob3ZlcntcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodGNvbG9yO1xcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgJGRhcmtjb2xvcjtcXG4gICAgICAgIGNvbG9yOiAkZGFya2NvbG9yO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcblxcbiAgLmdhbWV7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICAgIC5mdWxsYm9hcmQge1xcbiAgICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgaGVpZ2h0OiA5NSU7XFxuICAgICAgd2lkdGg6IDc1JTtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFya2NvbG9yO1xcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgICAgIHJvdy1nYXA6IDVweDtcXG4gICAgfVxcbiAgICAuYm9hcmR7XFxuICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgICB3aWR0aDo5MCU7XFxuICAgICAgaGVpZ2h0OjkwJTtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgICBcXG4gICAgfVxcbiAgICAuY2VsbCB7XFxuICAgICAgbWFyZ2luOiAxcHg7XFxuICAgICAgcGFkZGluZzogbm9uZTtcXG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB9XFxuICAgIHB7XFxuICAgICAgcGFkZGluZzogMHB4O1xcbiAgICAgIG1hcmdpbjogMHB4O1xcbiAgICAgIGJvcmRlcjogMHB4O1xcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAtNTBweDtcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG4gICAgLmVtcHR5IHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHRjb2xvcjtcXG4gICAgICAuaG92ZXJpbmcge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG4gICAgICB9XFxuICAgIH1cXG4gIFxcbiAgICAubWlzcyB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0Y29sb3I7XFxuICAgICAgY29sb3I6IGJsYWNrO1xcbiAgICB9XFxuICAgIC5zdW5rIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU0LCA5LCA5KTtcXG4gICAgfVxcbiAgICAueW91cnMge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICAgICY6aG92ZXIge1xcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodGNvbG9yO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgICAuaGl0IHtcXG4gICAgICBmb250LXNpemU6IDFlbTtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgICBjb2xvcjogcmdiKDE1NCwgOSwgOSk7XFxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgfVxcbiAgICAuaG92ZXJpbmcge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2xhdGVncmF5O1xcbiAgICAgICY6aG92ZXJ7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgfVxcbiAgICB9XFxuICAgIC5lY2VsbCB7XFxuICAgICAgJjpob3ZlciB7XFxuICAgICAgICBjdXJzb3I6IGNyb3NzaGFpcjtcXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG4gIFxcbiAgLnJlc2V0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYnV0dG9uIHtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgICAgIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XFxuICAgICAgaGVpZ2h0OiA1MHB4O1xcbiAgICAgIHdpZHRoOiA4MCU7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1NCwgOSwgOSk7XFxuICAgICAgY29sb3I6ICRsaWdodGNvbG9yO1xcbiAgICAgICY6aG92ZXJ7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHRjb2xvcjtcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxNTQsIDksIDkpO1xcbiAgICAgICAgY29sb3I6ICRkYXJrY29sb3I7XFxuICAgICAgfVxcbiAgICB9XFxuICAgIC5oYXJkYnRuIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgICAmOmhvdmVye1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0Y29sb3I7XFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgICAgIGNvbG9yOiBibGFjaztcXG4gICAgICB9XFxuICAgIH1cXG4gICAgLmVhc3lidG4ge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmVlbjtcXG4gICAgICAmOmhvdmVye1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0Y29sb3I7XFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBkYXJrZ3JlZW47XFxuICAgICAgICBjb2xvcjogZGFya2dyZWVuO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgICAucHZwYnRuIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFya2NvbG9yO1xcbiAgICAgICY6aG92ZXJ7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHRjb2xvcjtcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRkYXJrY29sb3I7XFxuICAgICAgICBjb2xvcjogJGRhcmtjb2xvcjtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLmdne1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZm9udC1zaXplOiA1ZW07XFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gY3JlYXRlcyBhIHNoaXAgb2YgYSBzcGVjaWZpZWQgbGVuZ3RoXG5mdW5jdGlvbiBTaGlwKGxlbmd0aCl7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgXCJsZW5ndGhcIjogbGVuZ3RoLCBcbiAgICAgICAgXCJoaXRzXCI6IDAsIFxuICAgICAgICBoaXQoKSB7XG4gICAgICAgICAgICB0aGlzLmhpdHMgKz0gMTtcbiAgICAgICAgfSxcbiAgICAgICAgaXNTdW5rKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGl0cyA+PSB0aGlzLmxlbmd0aFxuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBjcmVhdGVzIGEgZ2FtZWJvYXJkIHdoaWNoIHBsYWNlcyBzaGlwcyBhbmQgcmVjaWV2ZXMgYXR0YWNrcyBvbiBpdHMgYm9hcmRcbmZ1bmN0aW9uIEdhbWVib2FyZCgpeyAvLyAxMHgxMCBib2FyZCAjIHggbGV0dGVyc1xuICAgIHJldHVybiB7XG4gICAgICAgIFwiaG92ZXJpbmdcIjogW10sXG4gICAgICAgIFwic2hpcF9kZWNrXCI6IFsyLCAzLCAzLCA0LCA1XSxcbiAgICAgICAgXCJzdGFuZGluZ1wiOiBbMiwgMywgMywgNCwgNV0sXG4gICAgICAgIFwiY3Vycl9zaGlwXCI6IHVuZGVmaW5lZCxcbiAgICAgICAgXCJyb3RhdGlvblwiOiAwLFxuICAgICAgICBcIm5hbWVcIjogJ0FJJyxcbiAgICAgICAgXCJoaXRfbmVpZ2hib3JzXCI6IFtdLFxuICAgICAgICBcImhpdF9hdHRcIjogW10sXG4gICAgICAgIFwibWlzc19hdHRcIjogW10sXG4gICAgICAgIFwiYm9hcmRcIjogW1xuICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgICBdLFxuICAgICAgICBzZXRDdXJyU2hpcChsZW4gPSB0aGlzLnNoaXBfZGVja1swXSl7XG4gICAgICAgICAgICB0aGlzLmN1cnJfc2hpcCA9IFNoaXAobGVuKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBkZXRlcm1pbmVzIHZhbGlkaXR5IG9mIGxvY2F0aW9uXG4gICAgICAgIHZhbGlkTG9jKGxvYywgcGxhY2UgPSBmYWxzZSl7XG4gICAgICAgICAgICBpZighKDAgPD0gbG9jWzBdICYmIGxvY1swXSA8PSA5KSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpbnZhbGlkIHkgbG9jYXRpb246ICcgKyBsb2NbMF0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKCEoMCA8PSBsb2NbMV0gJiYgbG9jWzFdIDw9IDkpKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2ludmFsaWQgeCBsb2NhdGlvbjogJyArIGxvY1sxXSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYocGxhY2UgPT0gdHJ1ZSAmJiB0aGlzLmJvYXJkW2xvY1swXV1bbG9jWzFdXSAhPSAwKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3RoZXJlIGlzIGFscmVhZHkgYSBzaGlwIGhlcmUnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZih0aGlzLmhpdF9hdHQuaW5jbHVkZXMoSlNPTi5zdHJpbmdpZnkobG9jKSkgfHwgXG4gICAgICAgICAgICB0aGlzLm1pc3NfYXR0LmluY2x1ZGVzKEpTT04uc3RyaW5naWZ5KGxvYykpKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3lvdSBoYXZlIGFscmVhZHkgYXR0YWNrZWQgdGhpcyBsb2NhdGlvbiAnXG4gICAgICAgICAgICAgICAgICsgbG9jWzBdICsgJyAsICcgKyBsb2NbMV0pO1xuICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSxcblxuICAgICAgICAvLyByZXR1cm5zIGFuIGFycmF5IG9mIG5laWdoYm9yaW5nIGxvY2F0aW9uc1xuICAgICAgICBuZWlnaGJvcnMobG9jKXtcbiAgICAgICAgICAgIGxldCByID0gbG9jWzBdO1xuICAgICAgICAgICAgbGV0IGMgPSBsb2NbMV07XG4gICAgICAgICAgICBsZXQgbjEgPSBbciArIDEsIGNdO1xuICAgICAgICAgICAgbGV0IG4yID0gW3IgLSAxLCBjXTtcbiAgICAgICAgICAgIGxldCBuMyA9IFtyLCBjIC0gMV07XG4gICAgICAgICAgICBsZXQgbjQgPSBbciwgYyArIDFdO1xuICAgICAgICAgICAgbGV0IHBvc3NpYiA9IFtuMSwgbjIsIG4zLCBuNF07XG4gICAgICAgICAgICBsZXQgbW92ZXMgPSBbXTtcbiAgICAgICAgICAgIHBvc3NpYi5mb3JFYWNoKChtb3ZlKT0+e1xuICAgICAgICAgICAgICAgIGlmKHRoaXMudmFsaWRMb2MobW92ZSkpe1xuICAgICAgICAgICAgICAgICAgICBtb3Zlcy5wdXNoKG1vdmUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZXR1cm4gbW92ZXNcbiAgICAgICAgfSxcblxuICAgICAgICAvL3BsYWNlcyBhIHNoaXAgZ2l2ZW4gYSBsb2MgYW5kIG9wdGlvbmFsIGRpcmVjdGlvbiBbMFIsMUQsMkwsM1VdXG4gICAgICAgIHBsYWNlU2hpcChzaGlwLCBsb2MsIGRpcmVjdGlvbiA9IHRoaXMucm90YXRpb24sIGNoZWNrID0gZmFsc2UpIHsgXG4gICAgICAgICAgICBsZXQgc2hpcF9sb2NzID0gW107XG5cbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICBsZXQgdG1wX2xvYyA9IFswLCAwXTtcbiAgICAgICAgICAgICAgICBzd2l0Y2goZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTogLy8gZG93blxuICAgICAgICAgICAgICAgICAgICAgICAgdG1wX2xvY1swXSA9IGxvY1swXSArIGk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0bXBfbG9jWzFdID0gbG9jWzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjogLy8gbGVmdFxuICAgICAgICAgICAgICAgICAgICAgICAgdG1wX2xvY1swXSA9IGxvY1swXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRtcF9sb2NbMV0gPSBsb2NbMV0gLSBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzogLy8gdXBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRtcF9sb2NbMF0gPSBsb2NbMF0gLSBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG1wX2xvY1sxXSA9IGxvY1sxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiAvLyByaWdodFxuICAgICAgICAgICAgICAgICAgICAgICAgdG1wX2xvY1swXSA9IGxvY1swXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRtcF9sb2NbMV0gPSBsb2NbMV0gKyBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZighdGhpcy52YWxpZExvYyh0bXBfbG9jLCB0cnVlKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNoaXBfbG9jcy5wdXNoKHRtcF9sb2MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoY2hlY2speyAvLyBpZiBpdHMganVzdCBhIGNoZWNrLCBub3QgYSBwbGFjZW1lbnQsIHdlIHJldHVybiB0aGUgc3BvdHNcbiAgICAgICAgICAgICAgICByZXR1cm4gc2hpcF9sb2NzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2hpcF9sb2NzLmZvckVhY2goKHNlZykgPT57XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtzZWdbMF1dW3NlZ1sxXV0gPSBzaGlwO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSxcblxuICAgICAgICAvLyByZXR1cm5zIDIgZm9yIHNpbmssIDEgZm9yIGhpdCwgMCBmb3IgaW52YWxpZCBsb2MsIC0xIGZvciBtaXNzXG4gICAgICAgIHJlY2lldmVBdHRhY2sobG9jKXtcbiAgICAgICAgICAgIC8vIGNoZWNrIHRoYXQgdGhlIHByb3ZpZGVkIGhpdCBpcyB2YWxpZFxuICAgICAgICAgICAgaWYoIXRoaXMudmFsaWRMb2MobG9jKSkgcmV0dXJuIDA7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKHRoaXMuYm9hcmRbbG9jWzBdXVtsb2NbMV1dICE9PSAwKXtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2xvY1swXV1bbG9jWzFdXS5oaXQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmhpdF9hdHQucHVzaChKU09OLnN0cmluZ2lmeShsb2MpKTtcblxuICAgICAgICAgICAgICAgIGlmKHRoaXMuYm9hcmRbbG9jWzBdXVtsb2NbMV1dLmlzU3VuaygpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpZHggPSB0aGlzLnN0YW5kaW5nLmZpbmRJbmRleChcbiAgICAgICAgICAgICAgICAgICAgICAgICh2YWwpID0+IHZhbCA9PSB0aGlzLmJvYXJkW2xvY1swXV1bbG9jWzFdXS5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFuZGluZy5zcGxpY2UoaWR4LCAxKTtcblxuICAgICAgICAgICAgICAgICAgICBpZighdGhpcy5zdGFuZGluZy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vaGl0IHNpbmsgYW5kIGdhbWUgd2lubmVyIVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDY5O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vaGl0IGFuZCBzaW5rXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvL2hpdCBubyBzaW5rXG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMubWlzc19hdHQucHVzaChKU09OLnN0cmluZ2lmeShsb2MpKTtcbiAgICAgICAgICAgICAgICAvL21pc3NcbiAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gcGxhY2VzIGEgc2hpcCByYW5kb21seVxuICAgICAgICBwbGFjZVJhbmRvbVNoaXBzKCl7XG4gICAgICAgICAgICB3aGlsZSh0aGlzLnNoaXBfZGVjay5sZW5ndGgpe1xuICAgICAgICAgICAgICAgIGxldCBzaGlwX2xlbiA9IHRoaXMuc2hpcF9kZWNrLnBvcCgpO1xuICAgICAgICAgICAgICAgIGxldCBwbGFjZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBsZXQgc2hpcCA9IFNoaXAoc2hpcF9sZW4pO1xuXG4gICAgICAgICAgICAgICAgd2hpbGUocGxhY2VkID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgbGV0IHJhbmRkaXIgPSBNYXRoLmZsb29yKE1hdGguYWJzKE1hdGgucmFuZG9tKCkpICogNCk7XG4gICAgICAgICAgICAgICAgbGV0IHJhbmR4ID0gTWF0aC5mbG9vcihNYXRoLmFicyhNYXRoLnJhbmRvbSgpKSAqIDkpO1xuICAgICAgICAgICAgICAgIGxldCByYW5keSA9IE1hdGguZmxvb3IoTWF0aC5hYnMoTWF0aC5yYW5kb20oKSkgKiA5KTtcblxuICAgICAgICAgICAgICAgIHBsYWNlZCA9IHRoaXMucGxhY2VTaGlwKHNoaXAsIFtyYW5keCwgcmFuZHldLCByYW5kZGlyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIGNyZWF0ZXMgYSBwbGF5ZXIgd2hvIGNhbiBwZXJmb3JtIGdhbWUgYWN0aW9ucyBvbiByZWxldmFudCBnYW1lYm9hcmRzXG5mdW5jdGlvbiBQbGF5ZXIoKXtcbiAgICByZXR1cm4ge1xuICAgICAgICBcImhhcmRcIjogdHJ1ZSxcbiAgICAgICAgXCJwYm9hcmRcIjogR2FtZWJvYXJkKCksXG4gICAgICAgIFwiYWlib2FyZFwiOiBHYW1lYm9hcmQoKSxcbiAgICAgICAgYXR0YWNrQUkobG9jKXtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFpYm9hcmQucmVjaWV2ZUF0dGFjayhsb2MpO1xuICAgICAgICB9LFxuICAgICAgICBzZXRBSSgpe1xuICAgICAgICAgICAgdGhpcy5haWJvYXJkLnBsYWNlUmFuZG9tU2hpcHMoKTtcbiAgICAgICAgfSxcbiAgICAgICAgYXR0YWNrUCgpe1xuICAgICAgICAgICAgaWYodGhpcy5oYXJkICYmIHRoaXMucGJvYXJkLmhpdF9uZWlnaGJvcnMubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICBsZXQgYXR0X2xvYyA9IHRoaXMucGJvYXJkLmhpdF9uZWlnaGJvcnMuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICBsZXQgYXR0X3JlcyA9IHRoaXMucGJvYXJkLnJlY2lldmVBdHRhY2soYXR0X2xvYyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgZmluYWwgc2hvdCBpcyBhIGhpdCwgd2UgYWRkIGl0cyBuZWlnaGJvcnMgdG8gaGl0IG5laWdoYm9yc1xuICAgICAgICAgICAgICAgIGlmKGF0dF9yZXMgPT0gMSl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGJvYXJkLmhpdF9uZWlnaGJvcnMgPSB0aGlzLnBib2FyZC5oaXRfbmVpZ2hib3JzLmNvbmNhdCh0aGlzLnBib2FyZC5uZWlnaGJvcnMoYXR0X2xvYykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IHJhbmR4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICAgICAgICAgIGxldCByYW5keSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgICAgICAgICBsZXQgYXR0ID0gdGhpcy5wYm9hcmQucmVjaWV2ZUF0dGFjayhbcmFuZHgsIHJhbmR5XSk7XG4gICAgICAgICAgICAgICAgd2hpbGUoYXR0ID09IDApe1xuICAgICAgICAgICAgICAgICAgICByYW5keCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgICAgICAgICAgICAgcmFuZHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgICAgICAgICAgICAgIGF0dCA9IHRoaXMucGJvYXJkLnJlY2lldmVBdHRhY2soW3JhbmR4LCByYW5keV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZihhdHQgPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBib2FyZC5oaXRfbmVpZ2hib3JzID0gdGhpcy5wYm9hcmQuaGl0X25laWdoYm9ycy5jb25jYXQodGhpcy5wYm9hcmQubmVpZ2hib3JzKFtyYW5keCwgcmFuZHldKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYodGhpcy5wYm9hcmQuc3RhbmRpbmcubGVuZ3RoID09IDApIHJldHVybiA2OTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVzZXQocGxheWVyX3BsYWNlX3JhbmRvbSA9IGZhbHNlKXtcbiAgICAgICAgICAgIHRoaXMuYWlib2FyZCA9IG51bGw7IC8vIHJlc2V0aW5nIGJvYXJkcztcbiAgICAgICAgICAgIHRoaXMucGJvYXJkID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuYWlib2FyZCA9IEdhbWVib2FyZCgpO1xuICAgICAgICAgICAgdGhpcy5wYm9hcmQgPSBHYW1lYm9hcmQoKTtcbiAgICAgICAgICAgIGlmKHBsYXllcl9wbGFjZV9yYW5kb20pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBib2FyZC5wbGFjZVJhbmRvbVNoaXBzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmFpYm9hcmQucGxhY2VSYW5kb21TaGlwcygpO1xuICAgICAgICB9LFxuICAgIH07XG59XG5cbmV4cG9ydCB7IFNoaXAsIEdhbWVib2FyZCwgUGxheWVyIH0iLCJpbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5cbi8vIFJFTkRFUlMgVEhFIEdBTUVcbmV4cG9ydCBmdW5jdGlvbiBsYXlvdXQocGxheWVyKSB7XG4gICAgd2luZG93Lm9ua2V5ZG93biA9IChldik9PntcbiAgICAgICAgaWYoZXYua2V5Q29kZSA9PSAxMyl7XG4gICAgICAgICAgICBzZXRQQ2xpY2socGxheWVyKTtcbiAgICAgICAgICAgIGlmKCFwbGF5ZXIucGJvYXJkLnNoaXBfZGVjay5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgICAgIHBsYXllci5zZXRBSSgpO1xuICAgICAgICAgICAgICAgIGxheW91dChwbGF5ZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKCdlbnRlcmVkIScpO1xuICAgIH07XG4gICAgLy8gTE9DQUwgVkFSSUFCTEVTIEZPUiBFQVNJRVIgVU5ERVJTVEFORElOR1xuICAgIGxldCBlYm9hcmQgPSBwbGF5ZXIuYWlib2FyZDtcbiAgICBsZXQgcGJvYXJkID0gcGxheWVyLnBib2FyZDtcbiAgICBsZXQgc2hpcF9kZWNrID0gcGxheWVyLnBib2FyZC5zaGlwX2RlY2s7XG4gICAgbGV0IHNpbmtfZGVjayA9IHBsYXllci5haWJvYXJkLnN0YW5kaW5nO1xuXG4gICAgLy8gQ1JFQVRJTkcgU0VDVElPTlNcbiAgICBjb25zdCBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIC8vIFNFVFRJTkcgSEVBREVSIEFORCBGT09URVJcbiAgICBzZXRIZWFkKGgpO1xuICAgIHNldEZvb3QoZik7XG5cbiAgICAvLyBTRVRUSU5HIEJPRFlcbiAgICBiLmNsYXNzTGlzdC5hZGQoJ2JvZHknKTtcbiAgICAvLyAtaW5mbyBzZWN0aW9uXG4gICAgY29uc3QgaW5mb19zZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3Qga2V5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHBsYWNlX3JhbmRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgaW5mb19zZWN0LmNsYXNzTGlzdC5hZGQoJ2luZm8nKTtcbiAgICBwbGFjZV9yYW5kb20uaWQgPSAncnAnO1xuXG4gICAgc2V0S2V5KGtleSk7XG4gICAgKHNoaXBfZGVjay5sZW5ndGggIT0gMCkgPyBzZXREb2NrKHBsYXllciwgZG9jaywgc2hpcF9kZWNrKSA6IHNldERvY2socGxheWVyLCBkb2NrLCBzaW5rX2RlY2ssIHRydWUpO1xuICAgIHBsYWNlX3JhbmRvbS50ZXh0Q29udGVudCA9ICdQTEFDRSBNWSBTSElQUyc7XG4gICAgcGxhY2VfcmFuZG9tLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIHBsYXllci5yZXNldCh0cnVlKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgbGF5b3V0KHBsYXllcik7XG4gICAgfVxuXG4gICAgaW5mb19zZWN0LmFwcGVuZENoaWxkKGtleSk7XG4gICAgaW5mb19zZWN0LmFwcGVuZENoaWxkKGRvY2spO1xuICAgIGlmKHNoaXBfZGVjay5sZW5ndGggIT0gMCkge1xuICAgICAgICBpbmZvX3NlY3QuYXBwZW5kQ2hpbGQocGxhY2VfcmFuZG9tKTtcbiAgICB9XG5cbiAgICAvLyAtYm9hcmQgc2VjdGlvblxuICAgIGNvbnN0IGJvYXJkX3NlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzZXRCb2FyZHMocGxheWVyLCBib2FyZF9zZWN0LCBlYm9hcmQsIHBib2FyZCk7XG5cbiAgICAvLyAtcmVzZXQvd2luIHNlY3Rpb25cbiAgICBjb25zdCByZXNldF9zZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcmVzZXRfc2VjdC5jbGFzc0xpc3QuYWRkKCdyZXNldCcpO1xuICAgIHNldFJlc2V0U2VjdGlvbihwbGF5ZXIsIHJlc2V0X3NlY3QpO1xuXG4gICAgLy8gYXBwZW5kaW5nIGVhY2ggc2VjdGlvbiB0byBib2R5XG4gICAgYi5hcHBlbmRDaGlsZChpbmZvX3NlY3QpO1xuICAgIGIuYXBwZW5kQ2hpbGQoYm9hcmRfc2VjdCk7XG4gICAgYi5hcHBlbmRDaGlsZChyZXNldF9zZWN0KTtcblxuICAgIC8vIEFQUEVORElORyBFTEVNRU5UU1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaCk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChiKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGYpO1xuXG4gICAgLy8gU2V0dGluZyBob3ZlclxuICAgIHNldFBIb3ZlcihwbGF5ZXIpO1xufVxuXG5mdW5jdGlvbiBzZXRIZWFkKGgpe1xuICAgIC8vIFNFVFRJTkcgSEVBREVSXG4gICAgY29uc3QgZW1wdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbXB0eS50ZXh0Q29udGVudCA9ICcnO1xuICAgIGguY2xhc3NMaXN0LmFkZCgnaGVhZCcpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBjb25zdCBnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSAnQkFUVExFU0hJUCc7XG4gICAgZ2gudGV4dENvbnRlbnQgPSAnR0lUSFVCJ1xuICAgIGdoLm9uY2xpY2sgPSBmdW5jdGlvbiAoKXtcbiAgICAgICAgb3BlbignaHR0cHM6Ly9naXRodWIuY29tL1Rhbm5lckhvcm5zYnk3L29kaW4tYmF0dGxlc2hpcCcpO1xuICAgIH07XG5cbiAgICBoLmFwcGVuZENoaWxkKGVtcHR5KTtcbiAgICBoLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBoLmFwcGVuZENoaWxkKGdoKTtcbn1cblxuZnVuY3Rpb24gc2V0Rm9vdChmKXtcbiAgICAvLyBTRVRUSU5HIEZPT1RFUlxuICAgIGYuY2xhc3NMaXN0LmFkZCgnZm9vdCcpO1xuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIG5hbWUudGV4dENvbnRlbnQgPSAnQHRhbm5lcmhvcm5zYnk3JztcbiAgICBmLmFwcGVuZENoaWxkKG5hbWUpO1xufVxuXG5mdW5jdGlvbiBzZXRLZXkoa2V5KXtcbiAgICBrZXkuY2xhc3NMaXN0LmFkZCgna2V5Jyk7XG4gICAgY29uc3QgaGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjb25zdCBtaXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjb25zdCBzdW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaGl0X2Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgbWlzc19kZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHN1bmtfZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBoaXRfc2VjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IG1pc3Nfc2VjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHN1bmtfc2VjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGtleS5jbGFzc0xpc3QuYWRkKCdrZXknKTtcbiAgICBoaXQuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gICAgbWlzcy5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG4gICAgc3Vuay5jbGFzc0xpc3QuYWRkKCdzdW5rJyk7XG4gICAgaGl0LnRleHRDb250ZW50ID0gJ1gnO1xuICAgIG1pc3MudGV4dENvbnRlbnQgPSAnWCc7XG4gICAgc3Vuay50ZXh0Q29udGVudCA9ICcnO1xuICAgIGhpdF9kZXNjLnRleHRDb250ZW50ID0gJ0hJVCc7XG4gICAgbWlzc19kZXNjLnRleHRDb250ZW50ID0gJ01JU1MnO1xuICAgIHN1bmtfZGVzYy50ZXh0Q29udGVudCA9ICdTVU5LJztcbiAgICBoaXRfc2VjdC5hcHBlbmRDaGlsZChoaXRfZGVzYyk7XG4gICAgaGl0X3NlY3QuYXBwZW5kQ2hpbGQoaGl0KTtcbiAgICBtaXNzX3NlY3QuYXBwZW5kQ2hpbGQobWlzc19kZXNjKTtcbiAgICBtaXNzX3NlY3QuYXBwZW5kQ2hpbGQobWlzcyk7XG4gICAgc3Vua19zZWN0LmFwcGVuZENoaWxkKHN1bmtfZGVzYyk7XG4gICAgc3Vua19zZWN0LmFwcGVuZENoaWxkKHN1bmspO1xuICAgIGhpdF9zZWN0LmNsYXNzTGlzdC5hZGQoJ2tleV9zZWN0Jyk7XG4gICAgbWlzc19zZWN0LmNsYXNzTGlzdC5hZGQoJ2tleV9zZWN0JylcbiAgICBzdW5rX3NlY3QuY2xhc3NMaXN0LmFkZCgna2V5X3NlY3QnKVxuICAgIGtleS5hcHBlbmRDaGlsZChoaXRfc2VjdCk7XG4gICAga2V5LmFwcGVuZENoaWxkKG1pc3Nfc2VjdCk7XG4gICAga2V5LmFwcGVuZENoaWxkKHN1bmtfc2VjdCk7XG5cbn1cblxuZnVuY3Rpb24gc2V0RG9jayhwbGF5ZXIsIGRvY2ssIHNoaXBzX2RlY2ssIHBsYWNlZCA9IGZhbHNlKXtcbiAgICBjb25zdCBkb2NrX2hlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNvbnN0IGJvYXRfbG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYm9hdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGRvY2tfZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcblxuICAgIGRvY2suY2xhc3NMaXN0LmFkZCgnZG9jaycpO1xuICAgIGJvYXQudGV4dENvbnRlbnQgPSAnJztcbiAgICBib2F0LmNsYXNzTGlzdC5hZGQoJ2JvYXQnKTtcblxuICAgIGJvYXRfbG90LmNsYXNzTGlzdC5hZGQoJ2JvYXRfbG90Jyk7XG5cbiAgICBpZihwbGFjZWQpIHtcbiAgICAgICAgYm9hdC5jbGFzc0xpc3QuYWRkKCdlbmVteScpO1xuICAgICAgICBkb2NrX2hlYWQudGV4dENvbnRlbnQgPSAnUmVtYWluaW5nIEVuZW15IFNoaXBzOic7XG4gICAgICAgIGRvY2tfZm9vdGVyLnRleHRDb250ZW50ID0gJ0tlZXAgRmlyaW5nISdcbiAgICB9IGVsc2Uge1xuICAgICAgICBkb2NrX2hlYWQudGV4dENvbnRlbnQgPSAnUGxhY2UgWW91ciBTaGlwcyc7XG4gICAgICAgIGRvY2tfZm9vdGVyLnRleHRDb250ZW50ID0gJ0NsaWNrIG9uZSBvZiB0aGUgc2hpcHMgYWJvdmUgdG8gc2VsZWN0IGl0LCBwcmVzcyBSIHRvIHJvdGF0ZSBpdCwgYW5kIHByZXNzIGVudGVyIHRvIHBsYWNlIGl0ISdcbiAgICB9XG5cbiAgICBzaGlwc19kZWNrLnNvcnQoKTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgc2hpcHNfZGVjay5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGxldCB0bXBfYm9hdCA9IGJvYXQuY2xvbmVOb2RlKCk7XG4gICAgICAgIGxldCBzaGlwX2xlbmd0aCA9IE1hdGguZmxvb3Ioc2hpcHNfZGVja1tpXSAvIDUgKiAxMDApO1xuICAgICAgICB0bXBfYm9hdC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLGB3aWR0aDoke3NoaXBfbGVuZ3RofSVgKTtcbiAgICAgICAgdG1wX2JvYXQub25jbGljayA9IGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgbGV0IGxlbmd0aCA9IE1hdGguZmxvb3IocGFyc2VJbnQoZS50YXJnZXQuc3R5bGUud2lkdGhcbiAgICAgICAgICAgICAgICAuc2xpY2UoMCwtMSkpIC8gMjApO1xuICAgICAgICAgICAgbGV0IHJvdGF0aW9uID0gMDtcbiAgICAgICAgICAgIHBsYXllci5wYm9hcmQuc2V0Q3VyclNoaXAobGVuZ3RoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHBsYXllci5wYm9hcmQuY3Vycl9zaGlwKTtcblxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXYpPT57XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXYpO1xuICAgICAgICAgICAgICAgIGlmKGV2LmtleSA9PSAncicpe1xuICAgICAgICAgICAgICAgICAgICByb3RhdGlvbiArPSAxO1xuICAgICAgICAgICAgICAgICAgICByb3RhdGlvbiAlPSA0O1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyb3RhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHBsYXllci5wYm9hcmQucm90YXRpb24gPSByb3RhdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0KHBsYXllcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgYm9hdF9sb3QuYXBwZW5kQ2hpbGQodG1wX2JvYXQpO1xuICAgIH1cblxuICAgIGRvY2suYXBwZW5kQ2hpbGQoZG9ja19oZWFkKTtcbiAgICBkb2NrLmFwcGVuZENoaWxkKGJvYXRfbG90KTtcbiAgICBkb2NrLmFwcGVuZENoaWxkKGRvY2tfZm9vdGVyKTtcbn1cblxuZnVuY3Rpb24gc2V0Qm9hcmRzKHBsYXllciwgYm9hcmRfc2VjdCwgZWJvYXJkLCBwYm9hcmQpe1xuICAgIGJvYXJkX3NlY3QuY2xhc3NMaXN0LmFkZCgnZ2FtZScpO1xuICAgIGNvbnN0IGZ1bGxib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZ1bGxib2FyZC5jbGFzc0xpc3QuYWRkKCdmdWxsYm9hcmQnKTtcbiAgICBjb25zdCB0b3BfYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBib3RfYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzZXRFQm9hcmQocGxheWVyLCB0b3BfYm9hcmQsIGVib2FyZCk7XG4gICAgc2V0UEJvYXJkKHBsYXllciwgYm90X2JvYXJkLCBwYm9hcmQpO1xuICAgIGZ1bGxib2FyZC5hcHBlbmRDaGlsZCh0b3BfYm9hcmQpO1xuICAgIGZ1bGxib2FyZC5hcHBlbmRDaGlsZChib3RfYm9hcmQpO1xuXG4gICAgYm9hcmRfc2VjdC5hcHBlbmRDaGlsZChmdWxsYm9hcmQpO1xufVxuXG5mdW5jdGlvbiBzZXRFQm9hcmQocGxheWVyLCBiX2VsZSwgZ2FtZWJvYXJkKXtcbiAgICBiX2VsZS5jbGFzc0xpc3QuYWRkKCdib2FyZCcpO1xuICAgIGNvbnN0IGVtcHR5Q2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGhpdENlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBtaXNzQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHN1bmtDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGl0Q2VsbC5jbGFzc0xpc3QuYWRkKCdoaXQnLCAnY2VsbCcsICdlY2VsbCcpO1xuICAgIG1pc3NDZWxsLmNsYXNzTGlzdC5hZGQoJ21pc3MnLCAnY2VsbCcsICdlY2VsbCcpO1xuICAgIHN1bmtDZWxsLmNsYXNzTGlzdC5hZGQoJ3N1bmsnLCAnY2VsbCcsICdlY2VsbCcpO1xuICAgIGVtcHR5Q2VsbC5jbGFzc0xpc3QuYWRkKCdlbXB0eScsICdjZWxsJywgJ2VjZWxsJyk7XG4gICAgZW1wdHlDZWxsLnRleHRDb250ZW50ID0gJyc7XG5cbiAgICAvLyAwIGVtcHR5LCAxIGhpdCwgMiBtaXNzLCAzIHN1bmssIDQgeW91cnNcbiAgICAvLyBhZGQgZXZlbnQgbGlzdGVuZXJzIHRvIGVhY2ggbm9kZSBhcyB3ZWxsIVxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBnYW1lYm9hcmQuYm9hcmQubGVuZ3RoOyBpKyspe1xuICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgZ2FtZWJvYXJkLmJvYXJkLmxlbmd0aDsgaisrKXtcbiAgICAgICAgICAgIGxldCB0bXA7XG4gICAgICAgICAgICBpZihnYW1lYm9hcmQuYm9hcmRbaV1bal0gJiYgZ2FtZWJvYXJkLmJvYXJkW2ldW2pdLmlzU3VuaygpKXtcbiAgICAgICAgICAgICAgICB0bXAgPSBzdW5rQ2VsbC5jbG9uZU5vZGUoKTtcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgICBlbHNlIGlmKGdhbWVib2FyZC5oaXRfYXR0LmluY2x1ZGVzKEpTT04uc3RyaW5naWZ5KFtpLGpdKSkpIHtcbiAgICAgICAgICAgICAgICB0bXAgPSBoaXRDZWxsLmNsb25lTm9kZSgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICAgICAgeC50ZXh0Q29udGVudCA9ICdYJztcbiAgICAgICAgICAgICAgICB0bXAuYXBwZW5kQ2hpbGQoeCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKGdhbWVib2FyZC5taXNzX2F0dC5pbmNsdWRlcyhKU09OLnN0cmluZ2lmeShbaSxqXSkpKSB7XG4gICAgICAgICAgICAgICAgdG1wID0gbWlzc0NlbGwuY2xvbmVOb2RlKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgeCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgICAgICB4LnRleHRDb250ZW50ID0gJ1gnO1xuICAgICAgICAgICAgICAgIHRtcC5hcHBlbmRDaGlsZCh4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRtcCA9IGVtcHR5Q2VsbC5jbG9uZU5vZGUoKTtcbiAgICAgICAgICAgICAgICBvbkVDbGljayhwbGF5ZXIsIHRtcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0bXAuaWQgPSAncicgKyBpICsgJ2MnICsgajtcblxuICAgICAgICAgICAgYl9lbGUuYXBwZW5kQ2hpbGQodG1wKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gc2V0UEJvYXJkKHBsYXllciwgYl9lbGUsIGdhbWVib2FyZCl7XG4gICAgYl9lbGUuY2xhc3NMaXN0LmFkZCgnYm9hcmQnKTtcbiAgICBjb25zdCB5b3VyQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGVtcHR5Q2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGhpdENlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBtaXNzQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHN1bmtDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaG92ZXJDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGl0Q2VsbC5jbGFzc0xpc3QuYWRkKCdoaXQnLCAnY2VsbCcsICdwY2VsbCcpO1xuICAgIG1pc3NDZWxsLmNsYXNzTGlzdC5hZGQoJ21pc3MnLCAnY2VsbCcsICdwY2VsbCcpO1xuICAgIHN1bmtDZWxsLmNsYXNzTGlzdC5hZGQoJ3N1bmsnLCAnY2VsbCcsICdwY2VsbCcpO1xuICAgIHlvdXJDZWxsLmNsYXNzTGlzdC5hZGQoJ3lvdXJzJywgJ2NlbGwnLCAncGNlbGwnKTtcbiAgICBlbXB0eUNlbGwuY2xhc3NMaXN0LmFkZCgnZW1wdHknLCAnY2VsbCcsICdwY2VsbCcpO1xuICAgIGhvdmVyQ2VsbC5jbGFzc0xpc3QuYWRkKCdob3ZlcmluZycsICdjZWxsJywgJ3BjZWxsJyk7XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgZ2FtZWJvYXJkLmJvYXJkLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IGdhbWVib2FyZC5ib2FyZC5sZW5ndGg7IGorKyl7XG4gICAgICAgICAgICBsZXQgdG1wO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZihnYW1lYm9hcmQuYm9hcmRbaV1bal0gJiYgZ2FtZWJvYXJkLmJvYXJkW2ldW2pdLmlzU3VuaygpKSB7XG4gICAgICAgICAgICAgICAgdG1wID0gc3Vua0NlbGwuY2xvbmVOb2RlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKGdhbWVib2FyZC5oaXRfYXR0LmluY2x1ZGVzKEpTT04uc3RyaW5naWZ5KFtpLGpdKSkpIHtcbiAgICAgICAgICAgICAgICB0bXAgPSBoaXRDZWxsLmNsb25lTm9kZSgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICAgICAgeC50ZXh0Q29udGVudCA9ICdYJztcbiAgICAgICAgICAgICAgICB0bXAuYXBwZW5kQ2hpbGQoeCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKGdhbWVib2FyZC5taXNzX2F0dC5pbmNsdWRlcyhKU09OLnN0cmluZ2lmeShbaSxqXSkpKSB7XG4gICAgICAgICAgICAgICAgdG1wID0gbWlzc0NlbGwuY2xvbmVOb2RlKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgeCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgICAgICB4LnRleHRDb250ZW50ID0gJ1gnO1xuICAgICAgICAgICAgICAgIHRtcC5hcHBlbmRDaGlsZCh4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoZ2FtZWJvYXJkLmJvYXJkW2ldW2pdLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd5b3VyIGJvYXQgaXMgcGxhY2VkIGF0ICcrIGkgKycgLCAnKyBqKTtcbiAgICAgICAgICAgICAgICB0bXAgPSB5b3VyQ2VsbC5jbG9uZU5vZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoZ2FtZWJvYXJkLmhvdmVyaW5nLmluY2x1ZGVzKEpTT04uc3RyaW5naWZ5KFtpLCBqXSkpKXtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnaG92ZXJpbmchJylcbiAgICAgICAgICAgICAgICB0bXAgPSBob3ZlckNlbGwuY2xvbmVOb2RlKCk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2FkZGVkIGNsaWNrIGxpc3RlbmVyIHRvICcgKyB0bXApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdG1wID0gZW1wdHlDZWxsLmNsb25lTm9kZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0bXAuaWQgPSAncicgKyBpICsgJ2MnICsgajtcbiAgICAgICAgICAgIGJfZWxlLmFwcGVuZENoaWxkKHRtcCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIG9uRUNsaWNrKHBsYXllciwgY2VsbCl7XG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgICAgIGlmKHBsYXllci5wYm9hcmQuc2hpcF9kZWNrLmxlbmd0aCkge1xuICAgICAgICAgICAgYWxlcnQoJ1BsYWNlIFlvdXIgU2hpcHMgQmVmb3JlIEF0dGFja2luZyEnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgciA9IHBhcnNlSW50KGNlbGwuaWQuY2hhckF0KDEpKTtcbiAgICAgICAgbGV0IGMgPSBwYXJzZUludChjZWxsLmlkLmNoYXJBdCgzKSk7XG4gICAgICAgIGxldCB3YyA9IHBsYXllci5hdHRhY2tBSShbciwgY10pO1xuICAgICAgICBsZXQgYXAgPSBwbGF5ZXIuYXR0YWNrUCgpO1xuICAgICAgICBpZih3YyA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgbGF5b3V0KHBsYXllcik7XG4gICAgICAgIGlmKHdjID09IDY5KSB7XG4gICAgICAgICAgICB3aW5Db25kaXRpb24ocGxheWVyLCAncCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmKGFwID09IDY5KSB7XG4gICAgICAgICAgICB3aW5Db25kaXRpb24ocGxheWVyLCAnYycpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHNldFBIb3ZlcihwbGF5ZXIpe1xuICAgIGlmKCFwbGF5ZXIucGJvYXJkLnNoaXBfZGVjay5sZW5ndGgpIHJldHVybjtcbiAgICBjb25zdCBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wY2VsbCcpO1xuICAgIGNlbGxzLmZvckVhY2goKGNlbGwpPT57XG4gICAgICAgIGlmKGNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCd5b3VycycpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKT0+e1xuICAgICAgICAgICAgbGV0IHIgPSBwYXJzZUludChjZWxsLmlkLmNoYXJBdCgxKSk7XG4gICAgICAgICAgICBsZXQgYyA9IHBhcnNlSW50KGNlbGwuaWQuY2hhckF0KDMpKTtcbiAgICAgICAgICAgIGxldCBkaXIgPSBwbGF5ZXIucGJvYXJkLnJvdGF0aW9uO1xuICAgICAgICAgICAgbGV0IHMgPSBwbGF5ZXIucGJvYXJkLmN1cnJfc2hpcDtcbiAgICAgICAgICAgIGlmKHMgPT0gdW5kZWZpbmVkKSByZXR1cm47XG4gICAgICAgICAgICBpZihwbGF5ZXIucGJvYXJkLnBsYWNlU2hpcChzLCBbciwgY10sIGRpciwgdHJ1ZSkubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICBwbGF5ZXIucGJvYXJkLmhvdmVyaW5nID0gW107XG4gICAgICAgICAgICAgICAgcGxheWVyLnBib2FyZC5wbGFjZVNoaXAocywgW3IsIGNdLCBkaXIsIHRydWUpLmZvckVhY2goKGxvYyk9PntcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyLnBib2FyZC5ob3ZlcmluZy5wdXNoKEpTT04uc3RyaW5naWZ5KGxvYykpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICBsYXlvdXQocGxheWVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHNldFBDbGljayhwbGF5ZXIpe1xuICAgIGlmKCFwbGF5ZXIucGJvYXJkLnNoaXBfZGVjay5sZW5ndGgpIHJldHVybjtcbiAgICBpZighcGxheWVyLnBib2FyZC5ob3ZlcmluZy5sZW5ndGgpIHJldHVybjtcbiAgICBsZXQgc3BvdCA9IHBsYXllci5wYm9hcmQuaG92ZXJpbmdbMF07XG4gICAgbGV0IHIgPSBwYXJzZUludChzcG90LmNoYXJBdCgxKSk7XG4gICAgbGV0IGMgPSBwYXJzZUludChzcG90LmNoYXJBdCgzKSk7XG4gICAgbGV0IGlkeCA9IHBsYXllci5wYm9hcmQuc2hpcF9kZWNrLmZpbmRJbmRleChcbiAgICAgICAgKHZhbCkgPT4gdmFsID09IHBsYXllci5wYm9hcmQuY3Vycl9zaGlwLmxlbmd0aFxuICAgICk7XG4gICAgcGxheWVyLnBib2FyZC5zaGlwX2RlY2suc3BsaWNlKGlkeCwgMSk7XG4gICAgcGxheWVyLnBib2FyZC5wbGFjZVNoaXAocGxheWVyLnBib2FyZC5jdXJyX3NoaXAsIFtyLCBjXSwgcGxheWVyLnJvdGF0aW9uKTtcbiAgICBwbGF5ZXIucGJvYXJkLnNldEN1cnJTaGlwKCk7XG4gICAgaWYoIXBsYXllci5wYm9hcmQuc2hpcF9kZWNrLmxlbmd0aCkge1xuICAgICAgICBwbGF5ZXIucGJvYXJkLmhvdmVyaW5nID0gW107XG4gICAgfVxufVxuXG5mdW5jdGlvbiB3aW5Db25kaXRpb24ocGxheWVyLCBwYXJhbSl7XG4gICAgcGxheWVyLnJlc2V0KCk7XG4gICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSAnJztcbiAgICBjb25zdCBlbmRfc2NyZWVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZW5kX3NjcmVlbi5jbGFzc0xpc3QuYWRkKCdnZycpO1xuICAgIGVuZF9zY3JlZW4udGV4dENvbnRlbnQgPSAocGFyYW0gPT0gJ3AnKSA/ICdVc2VyIFdpbnMnIDogJ0FJIFdpbnMnO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZW5kX3NjcmVlbik7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgbGF5b3V0KHBsYXllcik7XG4gICAgfSwgMzAwMCk7XG59XG5cbmZ1bmN0aW9uIHNldFJlc2V0U2VjdGlvbihwbGF5ZXIsIHJlc2V0X3NlY3QpIHtcbiAgICAvLyAtLXB2cCBtb2RlIGJ0blxuICAgIGNvbnN0IHB2cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHB2cC50ZXh0Q29udGVudCA9ICdQVlAgTU9ERSc7XG4gICAgcHZwLmNsYXNzTGlzdC5hZGQoJ3B2cGJ0bicpO1xuICAgIHJlc2V0X3NlY3QuYXBwZW5kQ2hpbGQocHZwKTtcbiAgICBwdnAub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgbGF5b3V0KHBsYXllcik7XG4gICAgfVxuXG4gICAgLy8gLS1lYXN5IG1vZGUgYnRuXG4gICAgY29uc3QgZWFzeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGVhc3kudGV4dENvbnRlbnQgPSAnRUFTWSBNT0RFJztcbiAgICBlYXN5LmNsYXNzTGlzdC5hZGQoJ2Vhc3lidG4nKTtcbiAgICByZXNldF9zZWN0LmFwcGVuZENoaWxkKGVhc3kpO1xuICAgIGVhc3kub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgcGxheWVyLmhhcmQgPSBmYWxzZTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgbGF5b3V0KHBsYXllcik7XG4gICAgfVxuICAgIC8vIC0taGFyZCBtb2RlIGJ0blxuICAgIGNvbnN0IGhhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBoYXJkLnRleHRDb250ZW50ID0gJ0hBUkQgTU9ERSc7XG4gICAgaGFyZC5jbGFzc0xpc3QuYWRkKCdoYXJkYnRuJyk7XG4gICAgcmVzZXRfc2VjdC5hcHBlbmRDaGlsZChoYXJkKTtcbiAgICBoYXJkLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIHBsYXllci5oYXJkID0gdHJ1ZTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgbGF5b3V0KHBsYXllcik7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICByZXNldC50ZXh0Q29udGVudCA9ICdSRVNFVCc7XG4gICAgcmVzZXQuY2xhc3NMaXN0LmFkZCgncmVzZXRidG4nKTtcbiAgICByZXNldF9zZWN0LmFwcGVuZENoaWxkKHJlc2V0KTtcbiAgICByZXNldC5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICBwbGF5ZXIucmVzZXQoKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgbGF5b3V0KHBsYXllcik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBuZXdHYW1lRm9ybSgpe1xuXG59XG4vKlxuVE8tRE86XG5jcmVhdGUgaGVhZGVyIGFuZCBmb290ZXIgZG9tIG1vZHVsZVxuY3JlYXRlIGJvZHkgcmVuZGVyIGRvbSBtb2R1bGVcbiAgICBoYXZlIGV2ZW50IGxpc3RlbmVycyBvbiBlYWNoIHNoaXAgaW4gdGhlIGRvYyBhbmQgZWFjaCBzcXVhcmUgaW4gdGhlIGJvYXJkXG5jcmVhdGUgZ2FtZSBvdmVyIGRvbSBtb2R1bGVcblxuKi9cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiZ2FtZVwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9sb2dpY1wiO1xuaW1wb3J0IHsgbGF5b3V0IH0gZnJvbSBcIi4vcmVuZGVyXCJcblxuZnVuY3Rpb24gbWFpbigpe1xuICAgIGNvbnN0IHBsYXllciA9IFBsYXllcigpO1xuICAgIGxheW91dChwbGF5ZXIpO1xufVxuXG5tYWluKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9