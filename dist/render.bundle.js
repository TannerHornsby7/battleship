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
___CSS_LOADER_EXPORT___.push([module.id, "/* Custom Font */\n@font-face {\n  font-family: \"Open Sans\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  font-weight: 1000;\n  font-style: normal;\n}\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Open Sans\";\n}\n\nhtml,\nbody {\n  width: 100%;\n  height: 100%;\n}\n\nul,\nli {\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n}\n\nbutton,\ninput {\n  border: none;\n  outline: none;\n}\n\nbody {\n  display: grid;\n  grid-template-rows: 1fr 9fr 1fr;\n}\n\n.head {\n  font-size: 2em;\n  display: grid;\n  grid-template-columns: 1fr 6fr 1fr;\n  place-items: center;\n  color: ivory;\n  background-color: rgb(20, 0, 102);\n  transition: all 0.5s ease;\n  height: 100px;\n}\n.head button {\n  font-size: 0.5em;\n  height: 40px;\n  width: 60%;\n  color: rgb(20, 0, 102);\n  background-color: ivory;\n  box-shadow: 2px 2px 2px rgb(20, 0, 102);\n  transition: all 0.5s ease;\n  background-color: aliceblue;\n  color: black;\n}\n.head button:hover {\n  cursor: pointer;\n  color: rgb(20, 0, 102);\n  background-color: ivory;\n  box-shadow: 2px 2px 2px rgb(20, 0, 102);\n  transition: all 0.5s ease;\n}\n\n.foot {\n  display: flex;\n  background-color: rgb(56, 55, 55);\n  color: ivory;\n  justify-content: center;\n  align-items: center;\n}\n\n.body {\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;\n  height: 100%;\n}\n.body .info {\n  display: grid;\n  grid-template-rows: 1fr 2fr;\n}\n.body .info .boat {\n  cursor: pointer;\n}\n.body .info .key {\n  align-self: center;\n  justify-self: center;\n  border: 2px solid rgb(20, 0, 102);\n  padding: 2px 10px 5px 10px;\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n}\n.body .info .key .key_sect {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 15px;\n}\n.body .info .key .sunk {\n  width: 50px;\n  height: 25px;\n  background-color: rgb(154, 9, 9);\n  border: 2px solid ivory;\n}\n.body .info .key h2 {\n  font-size: 25px;\n}\n.body .info .key .hit {\n  color: rgb(154, 9, 9);\n}\n.body .info .dock {\n  justify-self: center;\n  width: 60%;\n}\n.body .info .dock h2,\n.body .info .dock h5 {\n  text-align: center;\n}\n.body .info .dock h2 {\n  color: rgb(20, 0, 102);\n}\n.body .info .dock .boat_lot {\n  border: 2px solid rgb(20, 0, 102);\n  padding: 8px;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.body .info .dock .boat {\n  height: 30px;\n  background-color: black;\n}\n.body .info #rp {\n  margin-bottom: 15px;\n  justify-self: flex-end;\n  height: 50px;\n  width: 80%;\n  background-color: rgb(20, 0, 102);\n  color: ivory;\n}\n.body .info #rp:hover {\n  cursor: pointer;\n  background-color: ivory;\n  border: 2px solid rgb(20, 0, 102);\n  color: rgb(20, 0, 102);\n}\n.body .game {\n  display: grid;\n  place-items: center;\n}\n.body .game .fullboard {\n  place-items: center;\n  height: 95%;\n  width: 75%;\n  background-color: rgb(20, 0, 102);\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n  row-gap: 5px;\n}\n.body .game .board {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  width: 90%;\n  height: 90%;\n  background-color: black;\n}\n.body .game .cell {\n  margin: 1px;\n  padding: none;\n  box-sizing: border-box;\n}\n.body .game .ecell:hover {\n  cursor: pointer;\n  transition: all 0.2s ease;\n  background-color: white;\n}\n.body .game p {\n  padding: 0px;\n  margin: 0px;\n  border: 0px;\n  align-self: center;\n  justify-self: center;\n  margin-bottom: -50px;\n  text-align: center;\n}\n.body .game .empty {\n  background-color: ivory;\n}\n.body .game .miss {\n  background-color: ivory;\n  color: black;\n}\n.body .game .sunk {\n  background-color: rgb(154, 9, 9);\n}\n.body .game .yours {\n  background-color: black;\n}\n.body .game .yours:hover {\n  box-sizing: border-box;\n  background-color: ivory;\n  cursor: pointer;\n}\n.body .game .hit {\n  font-size: 1em;\n  background-color: black;\n  color: rgb(154, 9, 9);\n  font-weight: bolder;\n}\n.body .reset {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: center;\n}\n.body .reset button {\n  margin-bottom: 15px;\n  justify-self: flex-end;\n  height: 50px;\n  width: 80%;\n  background-color: rgb(154, 9, 9);\n  color: ivory;\n}\n.body .reset button:hover {\n  cursor: pointer;\n  background-color: ivory;\n  border: 2px solid rgb(154, 9, 9);\n  color: rgb(20, 0, 102);\n}\n.body .reset .hardbtn {\n  background-color: black;\n}\n.body .reset .hardbtn:hover {\n  cursor: pointer;\n  background-color: ivory;\n  border: 2px solid black;\n  color: black;\n}\n.body .reset .easybtn {\n  background-color: darkgreen;\n}\n.body .reset .easybtn:hover {\n  cursor: pointer;\n  background-color: ivory;\n  border: 2px solid darkgreen;\n  color: darkgreen;\n}\n.body .reset .pvpbtn {\n  background-color: rgb(20, 0, 102);\n}\n.body .reset .pvpbtn:hover {\n  cursor: pointer;\n  background-color: ivory;\n  border: 2px solid rgb(20, 0, 102);\n  color: rgb(20, 0, 102);\n}\n\n.gg {\n  display: grid;\n  width: 100%;\n  height: 100%;\n  font-size: 5em;\n  place-content: center;\n}", "",{"version":3,"sources":["webpack://./src/_formatting.scss","webpack://./src/style.scss"],"names":[],"mappings":"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","sourcesContent":["/* Custom Font */\n@font-face {\n  font-family: \"Open Sans\";\n  src: url(\"assets/Open_Sans/OpenSans-Italic-VariableFont_wdth,wght.ttf\"),\n    url(\"assets/Open_Sans/OpenSans-Italic-VariableFont_wdth,wght.ttf\");\n  font-weight: 1000;\n  font-style: normal;\n}\n\n// setting basic element properties\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Open Sans\";\n}\n\nhtml,\nbody {\n  width: 100%;\n  height: 100%;\n}\n\nul,\nli {\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n}\n\nbutton,\ninput {\n  border: none;\n  outline: none;\n}\n","@use \"formatting\";\n\n// theme colors\n$lightcolor: ivory;\n$darkcolor: rgb(20, 0, 102);\n\n// setting theme\n@mixin theme($dark: true) {\n  @if ($dark) {\n    color: $lightcolor;\n    background-color: $darkcolor;\n    // box-shadow: 2px 2px 2px $lightcolor;\n  } @else {\n    color: $darkcolor;\n    background-color: $lightcolor;\n    box-shadow: 2px 2px 2px $darkcolor;\n  }\n  transition: all 0.5s ease;\n}\n\nbody {\n  display: grid;\n  grid-template-rows: 1fr 9fr 1fr;\n}\n\n.head{\n  font-size: 2em;\n  display: grid;\n  grid-template-columns: 1fr 6fr 1fr;\n  place-items: center;\n  @include theme;\n  height: 100px;\n  button {\n    font-size: .5em;\n    height: 40px;\n    width: 60%;\n    @include theme(false);\n    background-color: aliceblue;\n    color: black;\n    &:hover {\n      cursor: pointer;\n      @include theme(false);\n    }\n  }\n}\n\n.foot{\n  display: flex;\n  background-color: rgb(56, 55, 55);\n  color: $lightcolor;\n  justify-content: center;\n  align-items: center;\n}\n\n.body{\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;\n  height: 100%;\n\n  .info {\n    display: grid;\n    grid-template-rows: 1fr 2fr;\n    .boat {\n      cursor: pointer;\n    }\n    .key{\n      align-self: center;\n      justify-self: center;\n      border: 2px solid $darkcolor;\n      padding: 2px 10px 5px 10px;\n      width: 50%;\n      display: flex;\n      flex-direction: column;\n      .key_sect {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        gap: 15px;\n      }\n      .sunk {\n        width: 50px;\n        height: 25px;\n        background-color: rgb(154, 9, 9);\n        border: 2px solid $lightcolor;\n\n      }\n\n      h2{\n        font-size: 25px;\n      }\n      .hit{\n        color: rgb(154, 9, 9);\n      }\n    }\n\n    .dock{\n      justify-self: center;\n      h2,\n      h5 {\n        text-align: center;\n      }\n      h2 {\n        color:rgb(20, 0, 102);\n      }\n      width: 60%;\n      .boat_lot{\n        border: 2px solid $darkcolor;\n        padding: 8px;\n        display: flex;\n        flex-direction: column;\n        gap: 5px;\n      }\n      .boat{\n        height: 30px;\n        background-color: black;\n      }\n    }\n\n    #rp {\n      margin-bottom: 15px;\n      justify-self: flex-end;\n      height: 50px;\n      width: 80%;\n      background-color: $darkcolor;\n      color: $lightcolor;\n      &:hover{\n        cursor: pointer;\n        background-color: $lightcolor;\n        border: 2px solid $darkcolor;\n        color: $darkcolor;\n      }\n    }\n  }\n\n  .game{\n    display: grid;\n    place-items: center;\n    .fullboard {\n      place-items: center;\n      height: 95%;\n      width: 75%;\n      background-color: $darkcolor;\n      display: grid;\n      grid-template-rows: 1fr 1fr;\n      row-gap: 5px;\n    }\n    .board{\n      display: grid;\n      grid-template-columns: repeat(10, 1fr);\n      width:90%;\n      height:90%;\n      background-color: black;\n      \n    }\n    .cell {\n      margin: 1px;\n      padding: none;\n      box-sizing: border-box;\n    }\n    .ecell {\n      &:hover {\n        cursor: pointer;\n        transition: all 0.2s ease;\n        background-color: white;\n      }\n    }\n    p{\n      padding: 0px;\n      margin: 0px;\n      border: 0px;\n      align-self: center;\n      justify-self: center;\n      margin-bottom: -50px;\n      text-align: center;\n    }\n    .empty {\n      background-color: $lightcolor;\n    }\n  \n    .miss {\n      background-color: $lightcolor;\n      color: black;\n    }\n    .sunk {\n      background-color: rgb(154, 9, 9);\n    }\n    .yours {\n      background-color: black;\n      &:hover {\n        box-sizing: border-box;\n        background-color: $lightcolor;\n        cursor: pointer;\n      }\n    }\n    .hit {\n      font-size: 1em;\n      background-color: black;\n      color: rgb(154, 9, 9);\n      font-weight: bolder;\n    }\n  }\n  \n  .reset {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    align-items: center;\n    button {\n      margin-bottom: 15px;\n      justify-self: flex-end;\n      height: 50px;\n      width: 80%;\n      background-color: rgb(154, 9, 9);\n      color: $lightcolor;\n      &:hover{\n        cursor: pointer;\n        background-color: $lightcolor;\n        border: 2px solid rgb(154, 9, 9);\n        color: $darkcolor;\n      }\n    }\n    .hardbtn {\n      background-color: black;\n      &:hover{\n        cursor: pointer;\n        background-color: $lightcolor;\n        border: 2px solid black;\n        color: black;\n      }\n    }\n    .easybtn {\n      background-color: darkgreen;\n      &:hover{\n        cursor: pointer;\n        background-color: $lightcolor;\n        border: 2px solid darkgreen;\n        color: darkgreen;\n      }\n    }\n    .pvpbtn {\n      background-color: $darkcolor;\n      &:hover{\n        cursor: pointer;\n        background-color: $lightcolor;\n        border: 2px solid $darkcolor;\n        color: $darkcolor;\n      }\n    }\n  }\n}\n\n.gg{\n  display: grid;\n  width: 100%;\n  height: 100%;\n  font-size: 5em;\n  place-content: center;\n}"],"sourceRoot":""}]);
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
/* harmony export */   "layout": () => (/* binding */ layout)
/* harmony export */ });
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");


// RENDERS THE GAME
function layout(player) {
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
        dock_footer.textContent = 'Press R to rotate a ship!'
    }

    ships_deck.sort();
    for(let i = 0; i < ships_deck.length; i++){
        let tmp_boat = boat.cloneNode();
        let ship_length = Math.floor(ships_deck[i] / 5 * 100);
        tmp_boat.setAttribute("style",`width:${ship_length}%`);
        tmp_boat.onclick = function(e){
            let length = Math.floor(parseInt(e.target.style.width
                .slice(0,-1)) / 20);
            console.log(length);    
            let rotation = 0;
            let idx = ships_deck.findIndex(
                (val) => val == length
            );
            ships_deck.splice(idx, 1);
            player.pboard.setCurrShip(length);

            window.addEventListener('keydown', (ev)=>{
                console.log(ev);
                if(ev.key == 'r'){
                    rotation += 1;
                    rotation %= 4;
                    console.log(rotation);
                    player.pboard.rotation = rotation;
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
    setPBoard(bot_board, pboard);
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

function setPBoard(b_ele, gameboard){
    b_ele.classList.add('board');
    const yourCell = document.createElement('div');
    const emptyCell = document.createElement('div');
    const hitCell = document.createElement('div');
    const missCell = document.createElement('div');
    const sunkCell = document.createElement('div');
    hitCell.classList.add('hit', 'cell');
    missCell.classList.add('miss', 'cell');
    sunkCell.classList.add('sunk', 'cell');
    yourCell.classList.add('yours', 'cell');
    emptyCell.classList.add('empty', 'cell');

    // 0 empty, 1 hit, 2 miss, 3 sunk, 4 your ship
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
            else if(!gameboard.board[i][j].length) {
                tmp = emptyCell.cloneNode();
            }
            else {
                tmp = yourCell.cloneNode();
            }

            tmp.id = 'r' + i + 'c' + j;
            b_ele.appendChild(tmp);
        }
    }
}

function onEClick(player, cell){
    cell.addEventListener('click', ()=>{
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWdCLGlCQUFpQixtQkFBbUIsMEJBQTBCLEdBQUcsT0FBTywwSEFBMEgsS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxXQUFXLFdBQVcsWUFBWSxVQUFVLE1BQU0sTUFBTSxVQUFVLFlBQVksV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFlBQVksV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLEtBQUssT0FBTyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsVUFBVSxZQUFZLFlBQVksTUFBTSxNQUFNLFVBQVUsWUFBWSxZQUFZLFlBQVksTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFB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O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQix1QkFBdUI7QUFDMUM7QUFDQTtBQUNBLCtDQUErQyxZQUFZO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLDRCQUE0QjtBQUMvQyx1QkFBdUIsNEJBQTRCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsNEJBQTRCO0FBQy9DLHVCQUF1Qiw0QkFBNEI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvc3R5bGUuc2Nzcz83NWJhIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvcmVuZGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJhc3NldHMvT3Blbl9TYW5zL09wZW5TYW5zLUl0YWxpYy1WYXJpYWJsZUZvbnRfd2R0aCx3Z2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIEN1c3RvbSBGb250ICovXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIiksIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBmb250LXdlaWdodDogMTAwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIjtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG51bCxcXG5saSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuYnV0dG9uLFxcbmlucHV0IHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDlmciAxZnI7XFxufVxcblxcbi5oZWFkIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDZmciAxZnI7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IGl2b3J5O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwLCAwLCAxMDIpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcXG4gIGhlaWdodDogMTAwcHg7XFxufVxcbi5oZWFkIGJ1dHRvbiB7XFxuICBmb250LXNpemU6IDAuNWVtO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgd2lkdGg6IDYwJTtcXG4gIGNvbG9yOiByZ2IoMjAsIDAsIDEwMik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpdm9yeTtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggMnB4IHJnYigyMCwgMCwgMTAyKTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcbi5oZWFkIGJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogcmdiKDIwLCAwLCAxMDIpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaXZvcnk7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDJweCByZ2IoMjAsIDAsIDEwMik7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xcbn1cXG5cXG4uZm9vdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU2LCA1NSwgNTUpO1xcbiAgY29sb3I6IGl2b3J5O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYm9keSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDFmcjtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLmJvZHkgLmluZm8ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmcjtcXG59XFxuLmJvZHkgLmluZm8gLmJvYXQge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uYm9keSAuaW5mbyAua2V5IHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDIwLCAwLCAxMDIpO1xcbiAgcGFkZGluZzogMnB4IDEwcHggNXB4IDEwcHg7XFxuICB3aWR0aDogNTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5ib2R5IC5pbmZvIC5rZXkgLmtleV9zZWN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZ2FwOiAxNXB4O1xcbn1cXG4uYm9keSAuaW5mbyAua2V5IC5zdW5rIHtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1NCwgOSwgOSk7XFxuICBib3JkZXI6IDJweCBzb2xpZCBpdm9yeTtcXG59XFxuLmJvZHkgLmluZm8gLmtleSBoMiB7XFxuICBmb250LXNpemU6IDI1cHg7XFxufVxcbi5ib2R5IC5pbmZvIC5rZXkgLmhpdCB7XFxuICBjb2xvcjogcmdiKDE1NCwgOSwgOSk7XFxufVxcbi5ib2R5IC5pbmZvIC5kb2NrIHtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgd2lkdGg6IDYwJTtcXG59XFxuLmJvZHkgLmluZm8gLmRvY2sgaDIsXFxuLmJvZHkgLmluZm8gLmRvY2sgaDUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uYm9keSAuaW5mbyAuZG9jayBoMiB7XFxuICBjb2xvcjogcmdiKDIwLCAwLCAxMDIpO1xcbn1cXG4uYm9keSAuaW5mbyAuZG9jayAuYm9hdF9sb3Qge1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDIwLCAwLCAxMDIpO1xcbiAgcGFkZGluZzogOHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDVweDtcXG59XFxuLmJvZHkgLmluZm8gLmRvY2sgLmJvYXQge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcbi5ib2R5IC5pbmZvICNycCB7XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiA4MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAsIDAsIDEwMik7XFxuICBjb2xvcjogaXZvcnk7XFxufVxcbi5ib2R5IC5pbmZvICNycDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpdm9yeTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyMCwgMCwgMTAyKTtcXG4gIGNvbG9yOiByZ2IoMjAsIDAsIDEwMik7XFxufVxcbi5ib2R5IC5nYW1lIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbn1cXG4uYm9keSAuZ2FtZSAuZnVsbGJvYXJkIHtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDk1JTtcXG4gIHdpZHRoOiA3NSU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAsIDAsIDEwMik7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgcm93LWdhcDogNXB4O1xcbn1cXG4uYm9keSAuZ2FtZSAuYm9hcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgd2lkdGg6IDkwJTtcXG4gIGhlaWdodDogOTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcbi5ib2R5IC5nYW1lIC5jZWxsIHtcXG4gIG1hcmdpbjogMXB4O1xcbiAgcGFkZGluZzogbm9uZTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbi5ib2R5IC5nYW1lIC5lY2VsbDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcbi5ib2R5IC5nYW1lIHAge1xcbiAgcGFkZGluZzogMHB4O1xcbiAgbWFyZ2luOiAwcHg7XFxuICBib3JkZXI6IDBweDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogLTUwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5ib2R5IC5nYW1lIC5lbXB0eSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpdm9yeTtcXG59XFxuLmJvZHkgLmdhbWUgLm1pc3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaXZvcnk7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcbi5ib2R5IC5nYW1lIC5zdW5rIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTQsIDksIDkpO1xcbn1cXG4uYm9keSAuZ2FtZSAueW91cnMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcbi5ib2R5IC5nYW1lIC55b3Vyczpob3ZlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaXZvcnk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5ib2R5IC5nYW1lIC5oaXQge1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiByZ2IoMTU0LCA5LCA5KTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcbi5ib2R5IC5yZXNldCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uYm9keSAucmVzZXQgYnV0dG9uIHtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgd2lkdGg6IDgwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTQsIDksIDkpO1xcbiAgY29sb3I6IGl2b3J5O1xcbn1cXG4uYm9keSAucmVzZXQgYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGl2b3J5O1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDE1NCwgOSwgOSk7XFxuICBjb2xvcjogcmdiKDIwLCAwLCAxMDIpO1xcbn1cXG4uYm9keSAucmVzZXQgLmhhcmRidG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcbi5ib2R5IC5yZXNldCAuaGFyZGJ0bjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpdm9yeTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG4uYm9keSAucmVzZXQgLmVhc3lidG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyZWVuO1xcbn1cXG4uYm9keSAucmVzZXQgLmVhc3lidG46aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaXZvcnk7XFxuICBib3JkZXI6IDJweCBzb2xpZCBkYXJrZ3JlZW47XFxuICBjb2xvcjogZGFya2dyZWVuO1xcbn1cXG4uYm9keSAucmVzZXQgLnB2cGJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAsIDAsIDEwMik7XFxufVxcbi5ib2R5IC5yZXNldCAucHZwYnRuOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGl2b3J5O1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDIwLCAwLCAxMDIpO1xcbiAgY29sb3I6IHJnYigyMCwgMCwgMTAyKTtcXG59XFxuXFxuLmdnIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogNWVtO1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvX2Zvcm1hdHRpbmcuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZ0JBQUE7QUFDQTtFQUNFLHdCQUFBO0VBQ0EscUZBQUE7RUFFQSxpQkFBQTtFQUNBLGtCQUFBO0FDQUY7QURJQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtBQ0ZGOztBREtBOztFQUVFLFdBQUE7RUFDQSxZQUFBO0FDRkY7O0FES0E7O0VBRUUsZ0JBQUE7QUNGRjs7QURLQTtFQUNFLHFCQUFBO0FDRkY7O0FES0E7O0VBRUUsWUFBQTtFQUNBLGFBQUE7QUNGRjs7QUFiQTtFQUNFLGFBQUE7RUFDQSwrQkFBQTtBQWdCRjs7QUFiQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtFQXBCRSxZQU5TO0VBT1QsaUNBTlE7RUFhVix5QkFBQTtFQWNBLGFBQUE7QUFrQkY7QUFqQkU7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBdEJBLHNCQVRRO0VBVVIsdUJBWFM7RUFZVCx1Q0FBQTtFQUVGLHlCQUFBO0VBb0JFLDJCQUFBO0VBQ0EsWUFBQTtBQXNCSjtBQXJCSTtFQUNFLGVBQUE7RUEzQkYsc0JBVFE7RUFVUix1QkFYUztFQVlULHVDQUFBO0VBRUYseUJBQUE7QUFrREY7O0FBckJBO0VBQ0UsYUFBQTtFQUNBLGlDQUFBO0VBQ0EsWUE5Q1c7RUErQ1gsdUJBQUE7RUFDQSxtQkFBQTtBQXdCRjs7QUFyQkE7RUFDRSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSxZQUFBO0FBd0JGO0FBdEJFO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0FBd0JKO0FBdkJJO0VBQ0UsZUFBQTtBQXlCTjtBQXZCSTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQXlCTjtBQXhCTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtBQTBCUjtBQXhCTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSx1QkFBQTtBQTBCUjtBQXRCTTtFQUNFLGVBQUE7QUF3QlI7QUF0Qk07RUFDRSxxQkFBQTtBQXdCUjtBQXBCSTtFQUNFLG9CQUFBO0VBUUEsVUFBQTtBQWVOO0FBdEJNOztFQUVFLGtCQUFBO0FBd0JSO0FBdEJNO0VBQ0Usc0JBQUE7QUF3QlI7QUFyQk07RUFDRSxpQ0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxRQUFBO0FBdUJSO0FBckJNO0VBQ0UsWUFBQTtFQUNBLHVCQUFBO0FBdUJSO0FBbkJJO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsaUNBdkhNO0VBd0hOLFlBekhPO0FBOEliO0FBcEJNO0VBQ0UsZUFBQTtFQUNBLHVCQTVISztFQTZITCxpQ0FBQTtFQUNBLHNCQTdISTtBQW1KWjtBQWpCRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQW1CSjtBQWxCSTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxpQ0F6SU07RUEwSU4sYUFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtBQW9CTjtBQWxCSTtFQUNFLGFBQUE7RUFDQSxzQ0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7QUFvQk47QUFqQkk7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBbUJOO0FBaEJNO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7QUFrQlI7QUFmSTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FBaUJOO0FBZkk7RUFDRSx1QkE3S087QUE4TGI7QUFkSTtFQUNFLHVCQWpMTztFQWtMUCxZQUFBO0FBZ0JOO0FBZEk7RUFDRSxnQ0FBQTtBQWdCTjtBQWRJO0VBQ0UsdUJBQUE7QUFnQk47QUFmTTtFQUNFLHNCQUFBO0VBQ0EsdUJBM0xLO0VBNExMLGVBQUE7QUFpQlI7QUFkSTtFQUNFLGNBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFnQk47QUFaRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFjSjtBQWJJO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQWxOTztBQWlPYjtBQWRNO0VBQ0UsZUFBQTtFQUNBLHVCQXJOSztFQXNOTCxnQ0FBQTtFQUNBLHNCQXROSTtBQXNPWjtBQWJJO0VBQ0UsdUJBQUE7QUFlTjtBQWRNO0VBQ0UsZUFBQTtFQUNBLHVCQTlOSztFQStOTCx1QkFBQTtFQUNBLFlBQUE7QUFnQlI7QUFiSTtFQUNFLDJCQUFBO0FBZU47QUFkTTtFQUNFLGVBQUE7RUFDQSx1QkF2T0s7RUF3T0wsMkJBQUE7RUFDQSxnQkFBQTtBQWdCUjtBQWJJO0VBQ0UsaUNBNU9NO0FBMlBaO0FBZE07RUFDRSxlQUFBO0VBQ0EsdUJBaFBLO0VBaVBMLGlDQUFBO0VBQ0Esc0JBalBJO0FBaVFaOztBQVZBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FBYUZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogQ3VzdG9tIEZvbnQgKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIjtcXG4gIHNyYzogdXJsKFxcXCJhc3NldHMvT3Blbl9TYW5zL09wZW5TYW5zLUl0YWxpYy1WYXJpYWJsZUZvbnRfd2R0aCx3Z2h0LnR0ZlxcXCIpLFxcbiAgICB1cmwoXFxcImFzc2V0cy9PcGVuX1NhbnMvT3BlblNhbnMtSXRhbGljLVZhcmlhYmxlRm9udF93ZHRoLHdnaHQudHRmXFxcIik7XFxuICBmb250LXdlaWdodDogMTAwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuLy8gc2V0dGluZyBiYXNpYyBlbGVtZW50IHByb3BlcnRpZXNcXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiO1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbnVsLFxcbmxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5idXR0b24sXFxuaW5wdXQge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXCIsXCJAdXNlIFxcXCJmb3JtYXR0aW5nXFxcIjtcXG5cXG4vLyB0aGVtZSBjb2xvcnNcXG4kbGlnaHRjb2xvcjogaXZvcnk7XFxuJGRhcmtjb2xvcjogcmdiKDIwLCAwLCAxMDIpO1xcblxcbi8vIHNldHRpbmcgdGhlbWVcXG5AbWl4aW4gdGhlbWUoJGRhcms6IHRydWUpIHtcXG4gIEBpZiAoJGRhcmspIHtcXG4gICAgY29sb3I6ICRsaWdodGNvbG9yO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFya2NvbG9yO1xcbiAgICAvLyBib3gtc2hhZG93OiAycHggMnB4IDJweCAkbGlnaHRjb2xvcjtcXG4gIH0gQGVsc2Uge1xcbiAgICBjb2xvcjogJGRhcmtjb2xvcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0Y29sb3I7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMnB4ICRkYXJrY29sb3I7XFxuICB9XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA5ZnIgMWZyO1xcbn1cXG5cXG4uaGVhZHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDZmciAxZnI7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgQGluY2x1ZGUgdGhlbWU7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAuNWVtO1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIEBpbmNsdWRlIHRoZW1lKGZhbHNlKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgICY6aG92ZXIge1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICBAaW5jbHVkZSB0aGVtZShmYWxzZSk7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLmZvb3R7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU2LCA1NSwgNTUpO1xcbiAgY29sb3I6ICRsaWdodGNvbG9yO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYm9keXtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgMWZyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcblxcbiAgLmluZm8ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnI7XFxuICAgIC5ib2F0IHtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG4gICAgLmtleXtcXG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgICAgYm9yZGVyOiAycHggc29saWQgJGRhcmtjb2xvcjtcXG4gICAgICBwYWRkaW5nOiAycHggMTBweCA1cHggMTBweDtcXG4gICAgICB3aWR0aDogNTAlO1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAua2V5X3NlY3Qge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBnYXA6IDE1cHg7XFxuICAgICAgfVxcbiAgICAgIC5zdW5rIHtcXG4gICAgICAgIHdpZHRoOiA1MHB4O1xcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1NCwgOSwgOSk7XFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkbGlnaHRjb2xvcjtcXG5cXG4gICAgICB9XFxuXFxuICAgICAgaDJ7XFxuICAgICAgICBmb250LXNpemU6IDI1cHg7XFxuICAgICAgfVxcbiAgICAgIC5oaXR7XFxuICAgICAgICBjb2xvcjogcmdiKDE1NCwgOSwgOSk7XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5kb2Nre1xcbiAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICAgIGgyLFxcbiAgICAgIGg1IHtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICB9XFxuICAgICAgaDIge1xcbiAgICAgICAgY29sb3I6cmdiKDIwLCAwLCAxMDIpO1xcbiAgICAgIH1cXG4gICAgICB3aWR0aDogNjAlO1xcbiAgICAgIC5ib2F0X2xvdHtcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRkYXJrY29sb3I7XFxuICAgICAgICBwYWRkaW5nOiA4cHg7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGdhcDogNXB4O1xcbiAgICAgIH1cXG4gICAgICAuYm9hdHtcXG4gICAgICAgIGhlaWdodDogMzBweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICAjcnAge1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICAgICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXG4gICAgICBoZWlnaHQ6IDUwcHg7XFxuICAgICAgd2lkdGg6IDgwJTtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFya2NvbG9yO1xcbiAgICAgIGNvbG9yOiAkbGlnaHRjb2xvcjtcXG4gICAgICAmOmhvdmVye1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0Y29sb3I7XFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkZGFya2NvbG9yO1xcbiAgICAgICAgY29sb3I6ICRkYXJrY29sb3I7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuXFxuICAuZ2FtZXtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gICAgLmZ1bGxib2FyZCB7XFxuICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gICAgICBoZWlnaHQ6IDk1JTtcXG4gICAgICB3aWR0aDogNzUlO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkYXJrY29sb3I7XFxuICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICAgICAgcm93LWdhcDogNXB4O1xcbiAgICB9XFxuICAgIC5ib2FyZHtcXG4gICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICAgIHdpZHRoOjkwJTtcXG4gICAgICBoZWlnaHQ6OTAlO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICAgIFxcbiAgICB9XFxuICAgIC5jZWxsIHtcXG4gICAgICBtYXJnaW46IDFweDtcXG4gICAgICBwYWRkaW5nOiBub25lO1xcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIH1cXG4gICAgLmVjZWxsIHtcXG4gICAgICAmOmhvdmVyIHtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgICB9XFxuICAgIH1cXG4gICAgcHtcXG4gICAgICBwYWRkaW5nOiAwcHg7XFxuICAgICAgbWFyZ2luOiAwcHg7XFxuICAgICAgYm9yZGVyOiAwcHg7XFxuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICAgIG1hcmdpbi1ib3R0b206IC01MHB4O1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcbiAgICAuZW1wdHkge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodGNvbG9yO1xcbiAgICB9XFxuICBcXG4gICAgLm1pc3Mge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodGNvbG9yO1xcbiAgICAgIGNvbG9yOiBibGFjaztcXG4gICAgfVxcbiAgICAuc3VuayB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1NCwgOSwgOSk7XFxuICAgIH1cXG4gICAgLnlvdXJzIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgICAmOmhvdmVyIHtcXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHRjb2xvcjtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICB9XFxuICAgIH1cXG4gICAgLmhpdCB7XFxuICAgICAgZm9udC1zaXplOiAxZW07XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgICAgY29sb3I6IHJnYigxNTQsIDksIDkpO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIH1cXG4gIH1cXG4gIFxcbiAgLnJlc2V0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYnV0dG9uIHtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgICAgIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XFxuICAgICAgaGVpZ2h0OiA1MHB4O1xcbiAgICAgIHdpZHRoOiA4MCU7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1NCwgOSwgOSk7XFxuICAgICAgY29sb3I6ICRsaWdodGNvbG9yO1xcbiAgICAgICY6aG92ZXJ7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHRjb2xvcjtcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxNTQsIDksIDkpO1xcbiAgICAgICAgY29sb3I6ICRkYXJrY29sb3I7XFxuICAgICAgfVxcbiAgICB9XFxuICAgIC5oYXJkYnRuIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgICAmOmhvdmVye1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0Y29sb3I7XFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgICAgIGNvbG9yOiBibGFjaztcXG4gICAgICB9XFxuICAgIH1cXG4gICAgLmVhc3lidG4ge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmVlbjtcXG4gICAgICAmOmhvdmVye1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0Y29sb3I7XFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBkYXJrZ3JlZW47XFxuICAgICAgICBjb2xvcjogZGFya2dyZWVuO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgICAucHZwYnRuIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFya2NvbG9yO1xcbiAgICAgICY6aG92ZXJ7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHRjb2xvcjtcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRkYXJrY29sb3I7XFxuICAgICAgICBjb2xvcjogJGRhcmtjb2xvcjtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLmdne1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZm9udC1zaXplOiA1ZW07XFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJyZW5kZXJcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuXG4vLyBSRU5ERVJTIFRIRSBHQU1FXG5leHBvcnQgZnVuY3Rpb24gbGF5b3V0KHBsYXllcikge1xuICAgIC8vIExPQ0FMIFZBUklBQkxFUyBGT1IgRUFTSUVSIFVOREVSU1RBTkRJTkdcbiAgICBsZXQgZWJvYXJkID0gcGxheWVyLmFpYm9hcmQ7XG4gICAgbGV0IHBib2FyZCA9IHBsYXllci5wYm9hcmQ7XG4gICAgbGV0IHNoaXBfZGVjayA9IHBsYXllci5wYm9hcmQuc2hpcF9kZWNrO1xuICAgIGxldCBzaW5rX2RlY2sgPSBwbGF5ZXIuYWlib2FyZC5zdGFuZGluZztcblxuICAgIC8vIENSRUFUSU5HIFNFQ1RJT05TXG4gICAgY29uc3QgaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAvLyBTRVRUSU5HIEhFQURFUiBBTkQgRk9PVEVSXG4gICAgc2V0SGVhZChoKTtcbiAgICBzZXRGb290KGYpO1xuXG4gICAgLy8gU0VUVElORyBCT0RZXG4gICAgYi5jbGFzc0xpc3QuYWRkKCdib2R5Jyk7XG4gICAgLy8gLWluZm8gc2VjdGlvblxuICAgIGNvbnN0IGluZm9fc2VjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGtleSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGRvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBwbGFjZV9yYW5kb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgIGluZm9fc2VjdC5jbGFzc0xpc3QuYWRkKCdpbmZvJyk7XG4gICAgcGxhY2VfcmFuZG9tLmlkID0gJ3JwJztcblxuICAgIHNldEtleShrZXkpO1xuICAgIChzaGlwX2RlY2subGVuZ3RoICE9IDApID8gc2V0RG9jayhwbGF5ZXIsIGRvY2ssIHNoaXBfZGVjaykgOiBzZXREb2NrKHBsYXllciwgZG9jaywgc2lua19kZWNrLCB0cnVlKTtcbiAgICBwbGFjZV9yYW5kb20udGV4dENvbnRlbnQgPSAnUExBQ0UgTVkgU0hJUFMnO1xuICAgIHBsYWNlX3JhbmRvbS5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICBwbGF5ZXIucmVzZXQodHJ1ZSk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGxheW91dChwbGF5ZXIpO1xuICAgIH1cblxuICAgIGluZm9fc2VjdC5hcHBlbmRDaGlsZChrZXkpO1xuICAgIGluZm9fc2VjdC5hcHBlbmRDaGlsZChkb2NrKTtcbiAgICBpZihzaGlwX2RlY2subGVuZ3RoICE9IDApIHtcbiAgICAgICAgaW5mb19zZWN0LmFwcGVuZENoaWxkKHBsYWNlX3JhbmRvbSk7XG4gICAgfVxuXG4gICAgLy8gLWJvYXJkIHNlY3Rpb25cbiAgICBjb25zdCBib2FyZF9zZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2V0Qm9hcmRzKHBsYXllciwgYm9hcmRfc2VjdCwgZWJvYXJkLCBwYm9hcmQpO1xuXG4gICAgLy8gLXJlc2V0L3dpbiBzZWN0aW9uXG4gICAgY29uc3QgcmVzZXRfc2VjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJlc2V0X3NlY3QuY2xhc3NMaXN0LmFkZCgncmVzZXQnKTtcbiAgICBzZXRSZXNldFNlY3Rpb24ocGxheWVyLCByZXNldF9zZWN0KTtcblxuICAgIC8vIGFwcGVuZGluZyBlYWNoIHNlY3Rpb24gdG8gYm9keVxuICAgIGIuYXBwZW5kQ2hpbGQoaW5mb19zZWN0KTtcbiAgICBiLmFwcGVuZENoaWxkKGJvYXJkX3NlY3QpO1xuICAgIGIuYXBwZW5kQ2hpbGQocmVzZXRfc2VjdCk7XG5cbiAgICAvLyBBUFBFTkRJTkcgRUxFTUVOVFNcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGgpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYik7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmKTtcblxufVxuXG5mdW5jdGlvbiBzZXRIZWFkKGgpe1xuICAgIC8vIFNFVFRJTkcgSEVBREVSXG4gICAgY29uc3QgZW1wdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbXB0eS50ZXh0Q29udGVudCA9ICcnO1xuICAgIGguY2xhc3NMaXN0LmFkZCgnaGVhZCcpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBjb25zdCBnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSAnQkFUVExFU0hJUCc7XG4gICAgZ2gudGV4dENvbnRlbnQgPSAnR0lUSFVCJ1xuICAgIGdoLm9uY2xpY2sgPSBmdW5jdGlvbiAoKXtcbiAgICAgICAgb3BlbignaHR0cHM6Ly9naXRodWIuY29tL1Rhbm5lckhvcm5zYnk3L29kaW4tYmF0dGxlc2hpcCcpO1xuICAgIH07XG5cbiAgICBoLmFwcGVuZENoaWxkKGVtcHR5KTtcbiAgICBoLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBoLmFwcGVuZENoaWxkKGdoKTtcbn1cblxuZnVuY3Rpb24gc2V0Rm9vdChmKXtcbiAgICAvLyBTRVRUSU5HIEZPT1RFUlxuICAgIGYuY2xhc3NMaXN0LmFkZCgnZm9vdCcpO1xuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIG5hbWUudGV4dENvbnRlbnQgPSAnQHRhbm5lcmhvcm5zYnk3JztcbiAgICBmLmFwcGVuZENoaWxkKG5hbWUpO1xufVxuXG5mdW5jdGlvbiBzZXRLZXkoa2V5KXtcbiAgICBrZXkuY2xhc3NMaXN0LmFkZCgna2V5Jyk7XG4gICAgY29uc3QgaGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjb25zdCBtaXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjb25zdCBzdW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaGl0X2Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgbWlzc19kZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHN1bmtfZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBoaXRfc2VjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IG1pc3Nfc2VjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHN1bmtfc2VjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGtleS5jbGFzc0xpc3QuYWRkKCdrZXknKTtcbiAgICBoaXQuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gICAgbWlzcy5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG4gICAgc3Vuay5jbGFzc0xpc3QuYWRkKCdzdW5rJyk7XG4gICAgaGl0LnRleHRDb250ZW50ID0gJ1gnO1xuICAgIG1pc3MudGV4dENvbnRlbnQgPSAnWCc7XG4gICAgc3Vuay50ZXh0Q29udGVudCA9ICcnO1xuICAgIGhpdF9kZXNjLnRleHRDb250ZW50ID0gJ0hJVCc7XG4gICAgbWlzc19kZXNjLnRleHRDb250ZW50ID0gJ01JU1MnO1xuICAgIHN1bmtfZGVzYy50ZXh0Q29udGVudCA9ICdTVU5LJztcbiAgICBoaXRfc2VjdC5hcHBlbmRDaGlsZChoaXRfZGVzYyk7XG4gICAgaGl0X3NlY3QuYXBwZW5kQ2hpbGQoaGl0KTtcbiAgICBtaXNzX3NlY3QuYXBwZW5kQ2hpbGQobWlzc19kZXNjKTtcbiAgICBtaXNzX3NlY3QuYXBwZW5kQ2hpbGQobWlzcyk7XG4gICAgc3Vua19zZWN0LmFwcGVuZENoaWxkKHN1bmtfZGVzYyk7XG4gICAgc3Vua19zZWN0LmFwcGVuZENoaWxkKHN1bmspO1xuICAgIGhpdF9zZWN0LmNsYXNzTGlzdC5hZGQoJ2tleV9zZWN0Jyk7XG4gICAgbWlzc19zZWN0LmNsYXNzTGlzdC5hZGQoJ2tleV9zZWN0JylcbiAgICBzdW5rX3NlY3QuY2xhc3NMaXN0LmFkZCgna2V5X3NlY3QnKVxuICAgIGtleS5hcHBlbmRDaGlsZChoaXRfc2VjdCk7XG4gICAga2V5LmFwcGVuZENoaWxkKG1pc3Nfc2VjdCk7XG4gICAga2V5LmFwcGVuZENoaWxkKHN1bmtfc2VjdCk7XG5cbn1cblxuZnVuY3Rpb24gc2V0RG9jayhwbGF5ZXIsIGRvY2ssIHNoaXBzX2RlY2ssIHBsYWNlZCA9IGZhbHNlKXtcbiAgICBjb25zdCBkb2NrX2hlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNvbnN0IGJvYXRfbG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYm9hdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGRvY2tfZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcblxuICAgIGRvY2suY2xhc3NMaXN0LmFkZCgnZG9jaycpO1xuICAgIGJvYXQudGV4dENvbnRlbnQgPSAnJztcbiAgICBib2F0LmNsYXNzTGlzdC5hZGQoJ2JvYXQnKTtcblxuICAgIGJvYXRfbG90LmNsYXNzTGlzdC5hZGQoJ2JvYXRfbG90Jyk7XG5cbiAgICBpZihwbGFjZWQpIHtcbiAgICAgICAgYm9hdC5jbGFzc0xpc3QuYWRkKCdlbmVteScpO1xuICAgICAgICBkb2NrX2hlYWQudGV4dENvbnRlbnQgPSAnUmVtYWluaW5nIEVuZW15IFNoaXBzOic7XG4gICAgICAgIGRvY2tfZm9vdGVyLnRleHRDb250ZW50ID0gJ0tlZXAgRmlyaW5nISdcbiAgICB9IGVsc2Uge1xuICAgICAgICBkb2NrX2hlYWQudGV4dENvbnRlbnQgPSAnUGxhY2UgWW91ciBTaGlwcyc7XG4gICAgICAgIGRvY2tfZm9vdGVyLnRleHRDb250ZW50ID0gJ1ByZXNzIFIgdG8gcm90YXRlIGEgc2hpcCEnXG4gICAgfVxuXG4gICAgc2hpcHNfZGVjay5zb3J0KCk7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHNoaXBzX2RlY2subGVuZ3RoOyBpKyspe1xuICAgICAgICBsZXQgdG1wX2JvYXQgPSBib2F0LmNsb25lTm9kZSgpO1xuICAgICAgICBsZXQgc2hpcF9sZW5ndGggPSBNYXRoLmZsb29yKHNoaXBzX2RlY2tbaV0gLyA1ICogMTAwKTtcbiAgICAgICAgdG1wX2JvYXQuc2V0QXR0cmlidXRlKFwic3R5bGVcIixgd2lkdGg6JHtzaGlwX2xlbmd0aH0lYCk7XG4gICAgICAgIHRtcF9ib2F0Lm9uY2xpY2sgPSBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIGxldCBsZW5ndGggPSBNYXRoLmZsb29yKHBhcnNlSW50KGUudGFyZ2V0LnN0eWxlLndpZHRoXG4gICAgICAgICAgICAgICAgLnNsaWNlKDAsLTEpKSAvIDIwKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGxlbmd0aCk7ICAgIFxuICAgICAgICAgICAgbGV0IHJvdGF0aW9uID0gMDtcbiAgICAgICAgICAgIGxldCBpZHggPSBzaGlwc19kZWNrLmZpbmRJbmRleChcbiAgICAgICAgICAgICAgICAodmFsKSA9PiB2YWwgPT0gbGVuZ3RoXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgc2hpcHNfZGVjay5zcGxpY2UoaWR4LCAxKTtcbiAgICAgICAgICAgIHBsYXllci5wYm9hcmQuc2V0Q3VyclNoaXAobGVuZ3RoKTtcblxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXYpPT57XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXYpO1xuICAgICAgICAgICAgICAgIGlmKGV2LmtleSA9PSAncicpe1xuICAgICAgICAgICAgICAgICAgICByb3RhdGlvbiArPSAxO1xuICAgICAgICAgICAgICAgICAgICByb3RhdGlvbiAlPSA0O1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyb3RhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHBsYXllci5wYm9hcmQucm90YXRpb24gPSByb3RhdGlvbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBib2F0X2xvdC5hcHBlbmRDaGlsZCh0bXBfYm9hdCk7XG4gICAgfVxuXG4gICAgZG9jay5hcHBlbmRDaGlsZChkb2NrX2hlYWQpO1xuICAgIGRvY2suYXBwZW5kQ2hpbGQoYm9hdF9sb3QpO1xuICAgIGRvY2suYXBwZW5kQ2hpbGQoZG9ja19mb290ZXIpO1xufVxuXG5mdW5jdGlvbiBzZXRCb2FyZHMocGxheWVyLCBib2FyZF9zZWN0LCBlYm9hcmQsIHBib2FyZCl7XG4gICAgYm9hcmRfc2VjdC5jbGFzc0xpc3QuYWRkKCdnYW1lJyk7XG4gICAgY29uc3QgZnVsbGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZnVsbGJvYXJkLmNsYXNzTGlzdC5hZGQoJ2Z1bGxib2FyZCcpO1xuICAgIGNvbnN0IHRvcF9ib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGJvdF9ib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNldEVCb2FyZChwbGF5ZXIsIHRvcF9ib2FyZCwgZWJvYXJkKTtcbiAgICBzZXRQQm9hcmQoYm90X2JvYXJkLCBwYm9hcmQpO1xuICAgIGZ1bGxib2FyZC5hcHBlbmRDaGlsZCh0b3BfYm9hcmQpO1xuICAgIGZ1bGxib2FyZC5hcHBlbmRDaGlsZChib3RfYm9hcmQpO1xuXG4gICAgYm9hcmRfc2VjdC5hcHBlbmRDaGlsZChmdWxsYm9hcmQpO1xufVxuXG5mdW5jdGlvbiBzZXRFQm9hcmQocGxheWVyLCBiX2VsZSwgZ2FtZWJvYXJkKXtcbiAgICBiX2VsZS5jbGFzc0xpc3QuYWRkKCdib2FyZCcpO1xuICAgIGNvbnN0IGVtcHR5Q2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGhpdENlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBtaXNzQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHN1bmtDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGl0Q2VsbC5jbGFzc0xpc3QuYWRkKCdoaXQnLCAnY2VsbCcsICdlY2VsbCcpO1xuICAgIG1pc3NDZWxsLmNsYXNzTGlzdC5hZGQoJ21pc3MnLCAnY2VsbCcsICdlY2VsbCcpO1xuICAgIHN1bmtDZWxsLmNsYXNzTGlzdC5hZGQoJ3N1bmsnLCAnY2VsbCcsICdlY2VsbCcpO1xuICAgIGVtcHR5Q2VsbC5jbGFzc0xpc3QuYWRkKCdlbXB0eScsICdjZWxsJywgJ2VjZWxsJyk7XG4gICAgZW1wdHlDZWxsLnRleHRDb250ZW50ID0gJyc7XG5cbiAgICAvLyAwIGVtcHR5LCAxIGhpdCwgMiBtaXNzLCAzIHN1bmssIDQgeW91cnNcbiAgICAvLyBhZGQgZXZlbnQgbGlzdGVuZXJzIHRvIGVhY2ggbm9kZSBhcyB3ZWxsIVxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBnYW1lYm9hcmQuYm9hcmQubGVuZ3RoOyBpKyspe1xuICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgZ2FtZWJvYXJkLmJvYXJkLmxlbmd0aDsgaisrKXtcbiAgICAgICAgICAgIGxldCB0bXA7XG4gICAgICAgICAgICBpZihnYW1lYm9hcmQuYm9hcmRbaV1bal0gJiYgZ2FtZWJvYXJkLmJvYXJkW2ldW2pdLmlzU3VuaygpKXtcbiAgICAgICAgICAgICAgICB0bXAgPSBzdW5rQ2VsbC5jbG9uZU5vZGUoKTtcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgICBlbHNlIGlmKGdhbWVib2FyZC5oaXRfYXR0LmluY2x1ZGVzKEpTT04uc3RyaW5naWZ5KFtpLGpdKSkpIHtcbiAgICAgICAgICAgICAgICB0bXAgPSBoaXRDZWxsLmNsb25lTm9kZSgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICAgICAgeC50ZXh0Q29udGVudCA9ICdYJztcbiAgICAgICAgICAgICAgICB0bXAuYXBwZW5kQ2hpbGQoeCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKGdhbWVib2FyZC5taXNzX2F0dC5pbmNsdWRlcyhKU09OLnN0cmluZ2lmeShbaSxqXSkpKSB7XG4gICAgICAgICAgICAgICAgdG1wID0gbWlzc0NlbGwuY2xvbmVOb2RlKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgeCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgICAgICB4LnRleHRDb250ZW50ID0gJ1gnO1xuICAgICAgICAgICAgICAgIHRtcC5hcHBlbmRDaGlsZCh4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRtcCA9IGVtcHR5Q2VsbC5jbG9uZU5vZGUoKTtcbiAgICAgICAgICAgICAgICBvbkVDbGljayhwbGF5ZXIsIHRtcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0bXAuaWQgPSAncicgKyBpICsgJ2MnICsgajtcblxuICAgICAgICAgICAgYl9lbGUuYXBwZW5kQ2hpbGQodG1wKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gc2V0UEJvYXJkKGJfZWxlLCBnYW1lYm9hcmQpe1xuICAgIGJfZWxlLmNsYXNzTGlzdC5hZGQoJ2JvYXJkJyk7XG4gICAgY29uc3QgeW91ckNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBlbXB0eUNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBoaXRDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbWlzc0NlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBzdW5rQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhpdENlbGwuY2xhc3NMaXN0LmFkZCgnaGl0JywgJ2NlbGwnKTtcbiAgICBtaXNzQ2VsbC5jbGFzc0xpc3QuYWRkKCdtaXNzJywgJ2NlbGwnKTtcbiAgICBzdW5rQ2VsbC5jbGFzc0xpc3QuYWRkKCdzdW5rJywgJ2NlbGwnKTtcbiAgICB5b3VyQ2VsbC5jbGFzc0xpc3QuYWRkKCd5b3VycycsICdjZWxsJyk7XG4gICAgZW1wdHlDZWxsLmNsYXNzTGlzdC5hZGQoJ2VtcHR5JywgJ2NlbGwnKTtcblxuICAgIC8vIDAgZW1wdHksIDEgaGl0LCAyIG1pc3MsIDMgc3VuaywgNCB5b3VyIHNoaXBcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgZ2FtZWJvYXJkLmJvYXJkLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IGdhbWVib2FyZC5ib2FyZC5sZW5ndGg7IGorKyl7XG4gICAgICAgICAgICBsZXQgdG1wO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZihnYW1lYm9hcmQuYm9hcmRbaV1bal0gJiYgZ2FtZWJvYXJkLmJvYXJkW2ldW2pdLmlzU3VuaygpKSB7XG4gICAgICAgICAgICAgICAgdG1wID0gc3Vua0NlbGwuY2xvbmVOb2RlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKGdhbWVib2FyZC5oaXRfYXR0LmluY2x1ZGVzKEpTT04uc3RyaW5naWZ5KFtpLGpdKSkpIHtcbiAgICAgICAgICAgICAgICB0bXAgPSBoaXRDZWxsLmNsb25lTm9kZSgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICAgICAgeC50ZXh0Q29udGVudCA9ICdYJztcbiAgICAgICAgICAgICAgICB0bXAuYXBwZW5kQ2hpbGQoeCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKGdhbWVib2FyZC5taXNzX2F0dC5pbmNsdWRlcyhKU09OLnN0cmluZ2lmeShbaSxqXSkpKSB7XG4gICAgICAgICAgICAgICAgdG1wID0gbWlzc0NlbGwuY2xvbmVOb2RlKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgeCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgICAgICB4LnRleHRDb250ZW50ID0gJ1gnO1xuICAgICAgICAgICAgICAgIHRtcC5hcHBlbmRDaGlsZCh4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoIWdhbWVib2FyZC5ib2FyZFtpXVtqXS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0bXAgPSBlbXB0eUNlbGwuY2xvbmVOb2RlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0bXAgPSB5b3VyQ2VsbC5jbG9uZU5vZGUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdG1wLmlkID0gJ3InICsgaSArICdjJyArIGo7XG4gICAgICAgICAgICBiX2VsZS5hcHBlbmRDaGlsZCh0bXApO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBvbkVDbGljayhwbGF5ZXIsIGNlbGwpe1xuICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgICAgICBsZXQgciA9IHBhcnNlSW50KGNlbGwuaWQuY2hhckF0KDEpKTtcbiAgICAgICAgbGV0IGMgPSBwYXJzZUludChjZWxsLmlkLmNoYXJBdCgzKSk7XG4gICAgICAgIGxldCB3YyA9IHBsYXllci5hdHRhY2tBSShbciwgY10pO1xuICAgICAgICBsZXQgYXAgPSBwbGF5ZXIuYXR0YWNrUCgpO1xuICAgICAgICBpZih3YyA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgbGF5b3V0KHBsYXllcik7XG4gICAgICAgIGlmKHdjID09IDY5KSB7XG4gICAgICAgICAgICB3aW5Db25kaXRpb24ocGxheWVyLCAncCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmKGFwID09IDY5KSB7XG4gICAgICAgICAgICB3aW5Db25kaXRpb24ocGxheWVyLCAnYycpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHdpbkNvbmRpdGlvbihwbGF5ZXIsIHBhcmFtKXtcbiAgICBwbGF5ZXIucmVzZXQoKTtcbiAgICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCA9ICcnO1xuICAgIGNvbnN0IGVuZF9zY3JlZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbmRfc2NyZWVuLmNsYXNzTGlzdC5hZGQoJ2dnJyk7XG4gICAgZW5kX3NjcmVlbi50ZXh0Q29udGVudCA9IChwYXJhbSA9PSAncCcpID8gJ1VzZXIgV2lucycgOiAnQUkgV2lucyc7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbmRfc2NyZWVuKTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCA9ICcnO1xuICAgICAgICBsYXlvdXQocGxheWVyKTtcbiAgICB9LCAzMDAwKTtcbn1cblxuZnVuY3Rpb24gc2V0UmVzZXRTZWN0aW9uKHBsYXllciwgcmVzZXRfc2VjdCkge1xuICAgIC8vIC0tcHZwIG1vZGUgYnRuXG4gICAgY29uc3QgcHZwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcHZwLnRleHRDb250ZW50ID0gJ1BWUCBNT0RFJztcbiAgICBwdnAuY2xhc3NMaXN0LmFkZCgncHZwYnRuJyk7XG4gICAgcmVzZXRfc2VjdC5hcHBlbmRDaGlsZChwdnApO1xuICAgIHB2cC5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCA9ICcnO1xuICAgICAgICBsYXlvdXQocGxheWVyKTtcbiAgICB9XG5cbiAgICAvLyAtLWVhc3kgbW9kZSBidG5cbiAgICBjb25zdCBlYXN5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZWFzeS50ZXh0Q29udGVudCA9ICdFQVNZIE1PREUnO1xuICAgIGVhc3kuY2xhc3NMaXN0LmFkZCgnZWFzeWJ0bicpO1xuICAgIHJlc2V0X3NlY3QuYXBwZW5kQ2hpbGQoZWFzeSk7XG4gICAgZWFzeS5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICBwbGF5ZXIuaGFyZCA9IGZhbHNlO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCA9ICcnO1xuICAgICAgICBsYXlvdXQocGxheWVyKTtcbiAgICB9XG4gICAgLy8gLS1oYXJkIG1vZGUgYnRuXG4gICAgY29uc3QgaGFyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGhhcmQudGV4dENvbnRlbnQgPSAnSEFSRCBNT0RFJztcbiAgICBoYXJkLmNsYXNzTGlzdC5hZGQoJ2hhcmRidG4nKTtcbiAgICByZXNldF9zZWN0LmFwcGVuZENoaWxkKGhhcmQpO1xuICAgIGhhcmQub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgcGxheWVyLmhhcmQgPSB0cnVlO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCA9ICcnO1xuICAgICAgICBsYXlvdXQocGxheWVyKTtcbiAgICB9XG5cbiAgICBjb25zdCByZXNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHJlc2V0LnRleHRDb250ZW50ID0gJ1JFU0VUJztcbiAgICByZXNldC5jbGFzc0xpc3QuYWRkKCdyZXNldGJ0bicpO1xuICAgIHJlc2V0X3NlY3QuYXBwZW5kQ2hpbGQocmVzZXQpO1xuICAgIHJlc2V0Lm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIHBsYXllci5yZXNldCgpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCA9ICcnO1xuICAgICAgICBsYXlvdXQocGxheWVyKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG5ld0dhbWVGb3JtKCl7XG5cbn1cbi8qXG5UTy1ETzpcbmNyZWF0ZSBoZWFkZXIgYW5kIGZvb3RlciBkb20gbW9kdWxlXG5jcmVhdGUgYm9keSByZW5kZXIgZG9tIG1vZHVsZVxuICAgIGhhdmUgZXZlbnQgbGlzdGVuZXJzIG9uIGVhY2ggc2hpcCBpbiB0aGUgZG9jIGFuZCBlYWNoIHNxdWFyZSBpbiB0aGUgYm9hcmRcbmNyZWF0ZSBnYW1lIG92ZXIgZG9tIG1vZHVsZVxuXG4qL1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9