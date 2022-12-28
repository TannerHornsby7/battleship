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
___CSS_LOADER_EXPORT___.push([module.id, "/* Custom Font */\n@font-face {\n  font-family: \"Open Sans\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  font-weight: 1000;\n  font-style: normal;\n}\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Open Sans\";\n}\n\nhtml,\nbody {\n  width: 100%;\n  height: 100%;\n}\n\nul,\nli {\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n}\n\nbutton,\ninput {\n  border: none;\n  outline: none;\n}\n\nbody {\n  display: grid;\n  grid-template-rows: 1fr 9fr 1fr;\n}\n\n.head {\n  font-size: 2em;\n  display: grid;\n  grid-template-columns: 1fr 6fr 1fr;\n  place-items: center;\n  color: ivory;\n  background-color: rgb(20, 0, 102);\n  transition: all 0.5s ease;\n  height: 100px;\n}\n.head button {\n  font-size: 0.5em;\n  height: 40px;\n  width: 60%;\n  color: rgb(20, 0, 102);\n  background-color: ivory;\n  box-shadow: 2px 2px 2px rgb(20, 0, 102);\n  transition: all 0.5s ease;\n  background-color: aliceblue;\n  color: black;\n}\n.head button:hover {\n  cursor: pointer;\n  color: rgb(20, 0, 102);\n  background-color: ivory;\n  box-shadow: 2px 2px 2px rgb(20, 0, 102);\n  transition: all 0.5s ease;\n}\n\n.foot {\n  display: flex;\n  background-color: rgb(56, 55, 55);\n  color: ivory;\n  justify-content: center;\n  align-items: center;\n}\n\n.body {\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;\n  height: 100%;\n}\n.body .info {\n  display: grid;\n  grid-template-rows: 1fr 2fr;\n}\n.body .info .boat {\n  cursor: pointer;\n}\n.body .info .key {\n  align-self: center;\n  justify-self: center;\n  border: 2px solid rgb(20, 0, 102);\n  padding: 2px 10px 5px 10px;\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n}\n.body .info .key .key_sect {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 15px;\n}\n.body .info .key .sunk {\n  width: 50px;\n  height: 25px;\n  background-color: rgb(154, 9, 9);\n  border: 2px solid ivory;\n}\n.body .info .key h2 {\n  font-size: 25px;\n}\n.body .info .key .hit {\n  color: rgb(154, 9, 9);\n}\n.body .info .dock {\n  justify-self: center;\n  width: 60%;\n}\n.body .info .dock h2,\n.body .info .dock h5 {\n  text-align: center;\n}\n.body .info .dock h2 {\n  color: rgb(20, 0, 102);\n}\n.body .info .dock .boat_lot {\n  border: 2px solid rgb(20, 0, 102);\n  padding: 8px;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.body .info .dock .boat {\n  height: 30px;\n  background-color: black;\n}\n.body .info #rp {\n  margin-bottom: 15px;\n  justify-self: flex-end;\n  height: 50px;\n  width: 80%;\n  background-color: rgb(20, 0, 102);\n  color: ivory;\n}\n.body .info #rp:hover {\n  cursor: pointer;\n  background-color: ivory;\n  border: 2px solid rgb(20, 0, 102);\n  color: rgb(20, 0, 102);\n}\n.body .game {\n  display: grid;\n  place-items: center;\n}\n.body .game .fullboard {\n  place-items: center;\n  height: 95%;\n  width: 75%;\n  background-color: rgb(20, 0, 102);\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n  row-gap: 5px;\n}\n.body .game .board {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  width: 90%;\n  height: 90%;\n  background-color: black;\n}\n.body .game .cell {\n  margin: 1px;\n  padding: none;\n  box-sizing: border-box;\n}\n.body .game .ecell:hover {\n  cursor: pointer;\n  transition: all 0.2s ease;\n  background-color: white;\n}\n.body .game p {\n  padding: 0px;\n  margin: 0px;\n  border: 0px;\n  align-self: center;\n  justify-self: center;\n  margin-bottom: -50px;\n  text-align: center;\n}\n.body .game .empty {\n  background-color: ivory;\n}\n.body .game .miss {\n  background-color: ivory;\n  color: black;\n}\n.body .game .sunk {\n  background-color: rgb(154, 9, 9);\n}\n.body .game .yours {\n  background-color: black;\n}\n.body .game .yours:hover {\n  box-sizing: border-box;\n  background-color: ivory;\n  cursor: pointer;\n}\n.body .game .hit {\n  font-size: 1em;\n  background-color: black;\n  color: rgb(154, 9, 9);\n  font-weight: bolder;\n}\n.body .reset {\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n}\n.body .reset button {\n  margin-bottom: 15px;\n  justify-self: flex-end;\n  height: 50px;\n  width: 80%;\n  background-color: rgb(154, 9, 9);\n  color: ivory;\n}\n.body .reset button:hover {\n  cursor: pointer;\n  background-color: ivory;\n  border: 2px solid rgb(154, 9, 9);\n  color: rgb(20, 0, 102);\n}\n\n.gg {\n  display: grid;\n  width: 100%;\n  height: 100%;\n  font-size: 5em;\n  place-content: center;\n}", "",{"version":3,"sources":["webpack://./src/_formatting.scss","webpack://./src/style.scss"],"names":[],"mappings":"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","sourcesContent":["/* Custom Font */\n@font-face {\n  font-family: \"Open Sans\";\n  src: url(\"assets/Open_Sans/OpenSans-Italic-VariableFont_wdth,wght.ttf\"),\n    url(\"assets/Open_Sans/OpenSans-Italic-VariableFont_wdth,wght.ttf\");\n  font-weight: 1000;\n  font-style: normal;\n}\n\n// setting basic element properties\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Open Sans\";\n}\n\nhtml,\nbody {\n  width: 100%;\n  height: 100%;\n}\n\nul,\nli {\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n}\n\nbutton,\ninput {\n  border: none;\n  outline: none;\n}\n","@use \"formatting\";\n\n// theme colors\n$lightcolor: ivory;\n$darkcolor: rgb(20, 0, 102);\n\n// setting theme\n@mixin theme($dark: true) {\n  @if ($dark) {\n    color: $lightcolor;\n    background-color: $darkcolor;\n    // box-shadow: 2px 2px 2px $lightcolor;\n  } @else {\n    color: $darkcolor;\n    background-color: $lightcolor;\n    box-shadow: 2px 2px 2px $darkcolor;\n  }\n  transition: all 0.5s ease;\n}\n\nbody {\n  display: grid;\n  grid-template-rows: 1fr 9fr 1fr;\n}\n\n.head{\n  font-size: 2em;\n  display: grid;\n  grid-template-columns: 1fr 6fr 1fr;\n  place-items: center;\n  @include theme;\n  height: 100px;\n  button {\n    font-size: .5em;\n    height: 40px;\n    width: 60%;\n    @include theme(false);\n    background-color: aliceblue;\n    color: black;\n    &:hover {\n      cursor: pointer;\n      @include theme(false);\n    }\n  }\n}\n\n.foot{\n  display: flex;\n  background-color: rgb(56, 55, 55);\n  color: $lightcolor;\n  justify-content: center;\n  align-items: center;\n}\n\n.body{\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;\n  height: 100%;\n\n  .info {\n    display: grid;\n    grid-template-rows: 1fr 2fr;\n    .boat {\n      cursor: pointer;\n    }\n    .key{\n      align-self: center;\n      justify-self: center;\n      border: 2px solid $darkcolor;\n      padding: 2px 10px 5px 10px;\n      width: 50%;\n      display: flex;\n      flex-direction: column;\n      .key_sect {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        gap: 15px;\n      }\n      .sunk {\n        width: 50px;\n        height: 25px;\n        background-color: rgb(154, 9, 9);\n        border: 2px solid $lightcolor;\n\n      }\n\n      h2{\n        font-size: 25px;\n      }\n      .hit{\n        color: rgb(154, 9, 9);\n      }\n    }\n\n    .dock{\n      justify-self: center;\n      h2,\n      h5 {\n        text-align: center;\n      }\n      h2 {\n        color:rgb(20, 0, 102);\n      }\n      width: 60%;\n      .boat_lot{\n        border: 2px solid $darkcolor;\n        padding: 8px;\n        display: flex;\n        flex-direction: column;\n        gap: 5px;\n      }\n      .boat{\n        height: 30px;\n        background-color: black;\n      }\n    }\n\n    #rp {\n      margin-bottom: 15px;\n      justify-self: flex-end;\n      height: 50px;\n      width: 80%;\n      background-color: $darkcolor;\n      color: $lightcolor;\n      &:hover{\n        cursor: pointer;\n        background-color: $lightcolor;\n        border: 2px solid $darkcolor;\n        color: $darkcolor;\n      }\n    }\n  }\n\n  .game{\n    display: grid;\n    place-items: center;\n    .fullboard {\n      place-items: center;\n      height: 95%;\n      width: 75%;\n      background-color: $darkcolor;\n      display: grid;\n      grid-template-rows: 1fr 1fr;\n      row-gap: 5px;\n    }\n    .board{\n      display: grid;\n      grid-template-columns: repeat(10, 1fr);\n      width:90%;\n      height:90%;\n      background-color: black;\n      \n    }\n    .cell {\n      margin: 1px;\n      padding: none;\n      box-sizing: border-box;\n    }\n    .ecell {\n      &:hover {\n        cursor: pointer;\n        transition: all 0.2s ease;\n        background-color: white;\n      }\n    }\n    p{\n      padding: 0px;\n      margin: 0px;\n      border: 0px;\n      align-self: center;\n      justify-self: center;\n      margin-bottom: -50px;\n      text-align: center;\n    }\n    .empty {\n      background-color: $lightcolor;\n    }\n  \n    .miss {\n      background-color: $lightcolor;\n      color: black;\n    }\n    .sunk {\n      background-color: rgb(154, 9, 9);\n    }\n    .yours {\n      background-color: black;\n      &:hover {\n        box-sizing: border-box;\n        background-color: $lightcolor;\n        cursor: pointer;\n      }\n    }\n    .hit {\n      font-size: 1em;\n      background-color: black;\n      color: rgb(154, 9, 9);\n      font-weight: bolder;\n    }\n  }\n  \n  .reset {\n    display: flex;\n    justify-content: center;\n    align-items: flex-end;\n    button {\n      margin-bottom: 15px;\n      justify-self: flex-end;\n      height: 50px;\n      width: 80%;\n      background-color: rgb(154, 9, 9);\n      color: $lightcolor;\n      &:hover{\n        cursor: pointer;\n        background-color: $lightcolor;\n        border: 2px solid rgb(154, 9, 9);\n        color: $darkcolor;\n      }\n    }\n  }\n}\n\n.gg{\n  display: grid;\n  width: 100%;\n  height: 100%;\n  font-size: 5em;\n  place-content: center;\n}"],"sourceRoot":""}]);
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
        "name": 'AI',
        "standing": [2, 3, 3, 4, 5],
        "ship_deck": [2, 3, 3, 4, 5],
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
    // LOCAL VARIABLES FOR EASIER UNDERSTANDING
    let eboard = player.aiboard;
    let pboard = player.pboard;
    let ship_deck = player.pboard.ship_deck;
    let sunk_deck = player.aiboard.standing;

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
    (ship_deck.length != 0) ? setDock(dock, ship_deck) : setDock(dock, sunk_deck, true);
    place_random.textContent = 'PLACE MY SHIPS';
    place_random.onclick = () => {
        player.reset(true);
        document.body.innerHTML = '';
        layout(player);
    }

    info_sect.appendChild(key);
    info_sect.appendChild(dock);
    info_sect.appendChild(place_random);

    // -board section
    const board_sect = document.createElement('div');
    setBoards(player, board_sect, eboard, pboard);

    // -reset/win section
    const reset_sect = document.createElement('div');
    reset_sect.classList.add('reset');
    const reset = document.createElement('button');
    reset.textContent = 'RESET';
    reset.classList.add('resetbtn');
    reset_sect.appendChild(reset);
    reset.onclick = () => {
        player.reset();
        document.body.innerHTML = '';
        layout(player);
    }

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

function setDock(dock, ships_deck, placed = false){
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
                addEventListener(player, tmp);
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
    hitCell.classList.add('hit', 'cell', 'yours');
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
            else if(!gameboard.board[i][j]) {
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

function addEventListener(player, cell){
    cell.addEventListener('click', ()=>{
        let r = parseInt(cell.id.charAt(1));
        let c = parseInt(cell.id.charAt(3));
        let wc = player.attackAI([r, c]);
        if(wc == 0) {
            return;
        }
        document.body.innerHTML = '';
        layout(player);
        if(wc == 69) {
            winCondition(player, 'p');
        }
        if(player.attackP() == 69) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU8sS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxXQUFXLFdBQVcsWUFBWSxVQUFVLE1BQU0sTUFBTSxVQUFVLFlBQVksV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFlBQVksV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLEtBQUssT0FBTyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsVUFBVSxZQUFZLFlBQVksTUFBTSxNQUFNLFVBQVUsWUFBWSxZQUFZLFlBQVksTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFX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Q2I7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBLDJCQUEyQixRQUFRO0FBQ25DLCtCQUErQixRQUFRO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0tzQjs7QUFFdEI7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQix1QkFBdUI7QUFDMUM7QUFDQTtBQUNBLCtDQUErQyxZQUFZO0FBQzNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQiw0QkFBNEI7QUFDL0MsdUJBQXVCLDRCQUE0QjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLDRCQUE0QjtBQUMvQyx1QkFBdUIsNEJBQTRCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMxVEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7O0FDQWlDO0FBQ0E7O0FBRWpDO0FBQ0EsbUJBQW1CLDhDQUFNO0FBQ3pCLElBQUksK0NBQU07QUFDVjs7QUFFQSxPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvbG9naWMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3JlbmRlci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9nYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJhc3NldHMvT3Blbl9TYW5zL09wZW5TYW5zLUl0YWxpYy1WYXJpYWJsZUZvbnRfd2R0aCx3Z2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIEN1c3RvbSBGb250ICovXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIiksIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBmb250LXdlaWdodDogMTAwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIjtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG51bCxcXG5saSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuYnV0dG9uLFxcbmlucHV0IHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDlmciAxZnI7XFxufVxcblxcbi5oZWFkIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDZmciAxZnI7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IGl2b3J5O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwLCAwLCAxMDIpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcXG4gIGhlaWdodDogMTAwcHg7XFxufVxcbi5oZWFkIGJ1dHRvbiB7XFxuICBmb250LXNpemU6IDAuNWVtO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgd2lkdGg6IDYwJTtcXG4gIGNvbG9yOiByZ2IoMjAsIDAsIDEwMik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpdm9yeTtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggMnB4IHJnYigyMCwgMCwgMTAyKTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcbi5oZWFkIGJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogcmdiKDIwLCAwLCAxMDIpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaXZvcnk7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDJweCByZ2IoMjAsIDAsIDEwMik7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xcbn1cXG5cXG4uZm9vdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU2LCA1NSwgNTUpO1xcbiAgY29sb3I6IGl2b3J5O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYm9keSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDFmcjtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLmJvZHkgLmluZm8ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmcjtcXG59XFxuLmJvZHkgLmluZm8gLmJvYXQge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uYm9keSAuaW5mbyAua2V5IHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDIwLCAwLCAxMDIpO1xcbiAgcGFkZGluZzogMnB4IDEwcHggNXB4IDEwcHg7XFxuICB3aWR0aDogNTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5ib2R5IC5pbmZvIC5rZXkgLmtleV9zZWN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZ2FwOiAxNXB4O1xcbn1cXG4uYm9keSAuaW5mbyAua2V5IC5zdW5rIHtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1NCwgOSwgOSk7XFxuICBib3JkZXI6IDJweCBzb2xpZCBpdm9yeTtcXG59XFxuLmJvZHkgLmluZm8gLmtleSBoMiB7XFxuICBmb250LXNpemU6IDI1cHg7XFxufVxcbi5ib2R5IC5pbmZvIC5rZXkgLmhpdCB7XFxuICBjb2xvcjogcmdiKDE1NCwgOSwgOSk7XFxufVxcbi5ib2R5IC5pbmZvIC5kb2NrIHtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgd2lkdGg6IDYwJTtcXG59XFxuLmJvZHkgLmluZm8gLmRvY2sgaDIsXFxuLmJvZHkgLmluZm8gLmRvY2sgaDUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uYm9keSAuaW5mbyAuZG9jayBoMiB7XFxuICBjb2xvcjogcmdiKDIwLCAwLCAxMDIpO1xcbn1cXG4uYm9keSAuaW5mbyAuZG9jayAuYm9hdF9sb3Qge1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDIwLCAwLCAxMDIpO1xcbiAgcGFkZGluZzogOHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDVweDtcXG59XFxuLmJvZHkgLmluZm8gLmRvY2sgLmJvYXQge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcbi5ib2R5IC5pbmZvICNycCB7XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiA4MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAsIDAsIDEwMik7XFxuICBjb2xvcjogaXZvcnk7XFxufVxcbi5ib2R5IC5pbmZvICNycDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpdm9yeTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyMCwgMCwgMTAyKTtcXG4gIGNvbG9yOiByZ2IoMjAsIDAsIDEwMik7XFxufVxcbi5ib2R5IC5nYW1lIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbn1cXG4uYm9keSAuZ2FtZSAuZnVsbGJvYXJkIHtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDk1JTtcXG4gIHdpZHRoOiA3NSU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAsIDAsIDEwMik7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgcm93LWdhcDogNXB4O1xcbn1cXG4uYm9keSAuZ2FtZSAuYm9hcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgd2lkdGg6IDkwJTtcXG4gIGhlaWdodDogOTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcbi5ib2R5IC5nYW1lIC5jZWxsIHtcXG4gIG1hcmdpbjogMXB4O1xcbiAgcGFkZGluZzogbm9uZTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbi5ib2R5IC5nYW1lIC5lY2VsbDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcbi5ib2R5IC5nYW1lIHAge1xcbiAgcGFkZGluZzogMHB4O1xcbiAgbWFyZ2luOiAwcHg7XFxuICBib3JkZXI6IDBweDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogLTUwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5ib2R5IC5nYW1lIC5lbXB0eSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpdm9yeTtcXG59XFxuLmJvZHkgLmdhbWUgLm1pc3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaXZvcnk7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcbi5ib2R5IC5nYW1lIC5zdW5rIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTQsIDksIDkpO1xcbn1cXG4uYm9keSAuZ2FtZSAueW91cnMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcbi5ib2R5IC5nYW1lIC55b3Vyczpob3ZlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaXZvcnk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5ib2R5IC5nYW1lIC5oaXQge1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiByZ2IoMTU0LCA5LCA5KTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcbi5ib2R5IC5yZXNldCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxufVxcbi5ib2R5IC5yZXNldCBidXR0b24ge1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICB3aWR0aDogODAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1NCwgOSwgOSk7XFxuICBjb2xvcjogaXZvcnk7XFxufVxcbi5ib2R5IC5yZXNldCBidXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaXZvcnk7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTU0LCA5LCA5KTtcXG4gIGNvbG9yOiByZ2IoMjAsIDAsIDEwMik7XFxufVxcblxcbi5nZyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBmb250LXNpemU6IDVlbTtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL19mb3JtYXR0aW5nLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGdCQUFBO0FBQ0E7RUFDRSx3QkFBQTtFQUNBLHFGQUFBO0VB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QkFBQTtBQWNKO0FBYkk7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBak5PO0FBZ09iO0FBZE07RUFDRSxlQUFBO0VBQ0EsdUJBcE5LO0VBcU5MLGdDQUFBO0VBQ0Esc0JBck5JO0FBcU9aOztBQVZBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FBYUZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogQ3VzdG9tIEZvbnQgKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIjtcXG4gIHNyYzogdXJsKFxcXCJhc3NldHMvT3Blbl9TYW5zL09wZW5TYW5zLUl0YWxpYy1WYXJpYWJsZUZvbnRfd2R0aCx3Z2h0LnR0ZlxcXCIpLFxcbiAgICB1cmwoXFxcImFzc2V0cy9PcGVuX1NhbnMvT3BlblNhbnMtSXRhbGljLVZhcmlhYmxlRm9udF93ZHRoLHdnaHQudHRmXFxcIik7XFxuICBmb250LXdlaWdodDogMTAwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuLy8gc2V0dGluZyBiYXNpYyBlbGVtZW50IHByb3BlcnRpZXNcXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiO1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbnVsLFxcbmxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5idXR0b24sXFxuaW5wdXQge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXCIsXCJAdXNlIFxcXCJmb3JtYXR0aW5nXFxcIjtcXG5cXG4vLyB0aGVtZSBjb2xvcnNcXG4kbGlnaHRjb2xvcjogaXZvcnk7XFxuJGRhcmtjb2xvcjogcmdiKDIwLCAwLCAxMDIpO1xcblxcbi8vIHNldHRpbmcgdGhlbWVcXG5AbWl4aW4gdGhlbWUoJGRhcms6IHRydWUpIHtcXG4gIEBpZiAoJGRhcmspIHtcXG4gICAgY29sb3I6ICRsaWdodGNvbG9yO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFya2NvbG9yO1xcbiAgICAvLyBib3gtc2hhZG93OiAycHggMnB4IDJweCAkbGlnaHRjb2xvcjtcXG4gIH0gQGVsc2Uge1xcbiAgICBjb2xvcjogJGRhcmtjb2xvcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0Y29sb3I7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMnB4ICRkYXJrY29sb3I7XFxuICB9XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA5ZnIgMWZyO1xcbn1cXG5cXG4uaGVhZHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDZmciAxZnI7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgQGluY2x1ZGUgdGhlbWU7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAuNWVtO1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIEBpbmNsdWRlIHRoZW1lKGZhbHNlKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgICY6aG92ZXIge1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICBAaW5jbHVkZSB0aGVtZShmYWxzZSk7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLmZvb3R7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU2LCA1NSwgNTUpO1xcbiAgY29sb3I6ICRsaWdodGNvbG9yO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYm9keXtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgMWZyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcblxcbiAgLmluZm8ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnI7XFxuICAgIC5ib2F0IHtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG4gICAgLmtleXtcXG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgICAgYm9yZGVyOiAycHggc29saWQgJGRhcmtjb2xvcjtcXG4gICAgICBwYWRkaW5nOiAycHggMTBweCA1cHggMTBweDtcXG4gICAgICB3aWR0aDogNTAlO1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAua2V5X3NlY3Qge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBnYXA6IDE1cHg7XFxuICAgICAgfVxcbiAgICAgIC5zdW5rIHtcXG4gICAgICAgIHdpZHRoOiA1MHB4O1xcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1NCwgOSwgOSk7XFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkbGlnaHRjb2xvcjtcXG5cXG4gICAgICB9XFxuXFxuICAgICAgaDJ7XFxuICAgICAgICBmb250LXNpemU6IDI1cHg7XFxuICAgICAgfVxcbiAgICAgIC5oaXR7XFxuICAgICAgICBjb2xvcjogcmdiKDE1NCwgOSwgOSk7XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5kb2Nre1xcbiAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICAgIGgyLFxcbiAgICAgIGg1IHtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICB9XFxuICAgICAgaDIge1xcbiAgICAgICAgY29sb3I6cmdiKDIwLCAwLCAxMDIpO1xcbiAgICAgIH1cXG4gICAgICB3aWR0aDogNjAlO1xcbiAgICAgIC5ib2F0X2xvdHtcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRkYXJrY29sb3I7XFxuICAgICAgICBwYWRkaW5nOiA4cHg7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGdhcDogNXB4O1xcbiAgICAgIH1cXG4gICAgICAuYm9hdHtcXG4gICAgICAgIGhlaWdodDogMzBweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICAjcnAge1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICAgICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXG4gICAgICBoZWlnaHQ6IDUwcHg7XFxuICAgICAgd2lkdGg6IDgwJTtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFya2NvbG9yO1xcbiAgICAgIGNvbG9yOiAkbGlnaHRjb2xvcjtcXG4gICAgICAmOmhvdmVye1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0Y29sb3I7XFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkZGFya2NvbG9yO1xcbiAgICAgICAgY29sb3I6ICRkYXJrY29sb3I7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuXFxuICAuZ2FtZXtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gICAgLmZ1bGxib2FyZCB7XFxuICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gICAgICBoZWlnaHQ6IDk1JTtcXG4gICAgICB3aWR0aDogNzUlO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkYXJrY29sb3I7XFxuICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICAgICAgcm93LWdhcDogNXB4O1xcbiAgICB9XFxuICAgIC5ib2FyZHtcXG4gICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICAgIHdpZHRoOjkwJTtcXG4gICAgICBoZWlnaHQ6OTAlO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICAgIFxcbiAgICB9XFxuICAgIC5jZWxsIHtcXG4gICAgICBtYXJnaW46IDFweDtcXG4gICAgICBwYWRkaW5nOiBub25lO1xcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIH1cXG4gICAgLmVjZWxsIHtcXG4gICAgICAmOmhvdmVyIHtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgICB9XFxuICAgIH1cXG4gICAgcHtcXG4gICAgICBwYWRkaW5nOiAwcHg7XFxuICAgICAgbWFyZ2luOiAwcHg7XFxuICAgICAgYm9yZGVyOiAwcHg7XFxuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICAgIG1hcmdpbi1ib3R0b206IC01MHB4O1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcbiAgICAuZW1wdHkge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodGNvbG9yO1xcbiAgICB9XFxuICBcXG4gICAgLm1pc3Mge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodGNvbG9yO1xcbiAgICAgIGNvbG9yOiBibGFjaztcXG4gICAgfVxcbiAgICAuc3VuayB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1NCwgOSwgOSk7XFxuICAgIH1cXG4gICAgLnlvdXJzIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgICAmOmhvdmVyIHtcXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHRjb2xvcjtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICB9XFxuICAgIH1cXG4gICAgLmhpdCB7XFxuICAgICAgZm9udC1zaXplOiAxZW07XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgICAgY29sb3I6IHJnYigxNTQsIDksIDkpO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIH1cXG4gIH1cXG4gIFxcbiAgLnJlc2V0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgYnV0dG9uIHtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgICAgIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XFxuICAgICAgaGVpZ2h0OiA1MHB4O1xcbiAgICAgIHdpZHRoOiA4MCU7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1NCwgOSwgOSk7XFxuICAgICAgY29sb3I6ICRsaWdodGNvbG9yO1xcbiAgICAgICY6aG92ZXJ7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHRjb2xvcjtcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxNTQsIDksIDkpO1xcbiAgICAgICAgY29sb3I6ICRkYXJrY29sb3I7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblxcbi5nZ3tcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogNWVtO1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIGNyZWF0ZXMgYSBzaGlwIG9mIGEgc3BlY2lmaWVkIGxlbmd0aFxuZnVuY3Rpb24gU2hpcChsZW5ndGgpe1xuICAgIHJldHVybiB7XG4gICAgICAgIFwibGVuZ3RoXCI6IGxlbmd0aCwgXG4gICAgICAgIFwiaGl0c1wiOiAwLCBcbiAgICAgICAgaGl0KCkge1xuICAgICAgICAgICAgdGhpcy5oaXRzICs9IDE7XG4gICAgICAgIH0sXG4gICAgICAgIGlzU3VuaygpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhpdHMgPj0gdGhpcy5sZW5ndGhcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gY3JlYXRlcyBhIGdhbWVib2FyZCB3aGljaCBwbGFjZXMgc2hpcHMgYW5kIHJlY2lldmVzIGF0dGFja3Mgb24gaXRzIGJvYXJkXG5mdW5jdGlvbiBHYW1lYm9hcmQoKXsgLy8gMTB4MTAgYm9hcmQgIyB4IGxldHRlcnNcbiAgICByZXR1cm4ge1xuICAgICAgICBcIm5hbWVcIjogJ0FJJyxcbiAgICAgICAgXCJzdGFuZGluZ1wiOiBbMiwgMywgMywgNCwgNV0sXG4gICAgICAgIFwic2hpcF9kZWNrXCI6IFsyLCAzLCAzLCA0LCA1XSxcbiAgICAgICAgXCJoaXRfYXR0XCI6IFtdLFxuICAgICAgICBcIm1pc3NfYXR0XCI6IFtdLFxuICAgICAgICBcImJvYXJkXCI6IFtcbiAgICAgICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgXSxcbiAgICAgICAgdmFsaWRMb2MobG9jLCBwbGFjZSA9IGZhbHNlKXtcbiAgICAgICAgICAgIGlmKCEoMCA8PSBsb2NbMF0gJiYgbG9jWzBdIDw9IDkpKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2ludmFsaWQgeSBsb2NhdGlvbjogJyArIGxvY1swXSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoISgwIDw9IGxvY1sxXSAmJiBsb2NbMV0gPD0gOSkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaW52YWxpZCB4IGxvY2F0aW9uOiAnICsgbG9jWzFdKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihwbGFjZSA9PSB0cnVlICYmIHRoaXMuYm9hcmRbbG9jWzBdXVtsb2NbMV1dICE9IDApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndGhlcmUgaXMgYWxyZWFkeSBhIHNoaXAgaGVyZScpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHRoaXMuaGl0X2F0dC5pbmNsdWRlcyhKU09OLnN0cmluZ2lmeShsb2MpKSB8fCBcbiAgICAgICAgICAgIHRoaXMubWlzc19hdHQuaW5jbHVkZXMoSlNPTi5zdHJpbmdpZnkobG9jKSkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygneW91IGhhdmUgYWxyZWFkeSBhdHRhY2tlZCB0aGlzIGxvY2F0aW9uICdcbiAgICAgICAgICAgICAgICAgKyBsb2NbMF0gKyAnICwgJyArIGxvY1sxXSk7XG4gICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9LFxuXG4gICAgICAgIHBsYWNlU2hpcChzaGlwLCBsb2MsIGRpcmVjdGlvbiA9IDApIHsgXG4gICAgICAgICAgICBsZXQgc2hpcF9sb2NzID0gW107XG5cbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICBsZXQgdG1wX2xvYyA9IFswLCAwXTtcbiAgICAgICAgICAgICAgICBzd2l0Y2goZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTogLy8gZG93blxuICAgICAgICAgICAgICAgICAgICAgICAgdG1wX2xvY1swXSA9IGxvY1swXSArIGk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0bXBfbG9jWzFdID0gbG9jWzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjogLy8gbGVmdFxuICAgICAgICAgICAgICAgICAgICAgICAgdG1wX2xvY1swXSA9IGxvY1swXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRtcF9sb2NbMV0gPSBsb2NbMV0gLSBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzogLy8gdXBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRtcF9sb2NbMF0gPSBsb2NbMF0gLSBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG1wX2xvY1sxXSA9IGxvY1sxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiAvLyByaWdodFxuICAgICAgICAgICAgICAgICAgICAgICAgdG1wX2xvY1swXSA9IGxvY1swXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRtcF9sb2NbMV0gPSBsb2NbMV0gKyBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZighdGhpcy52YWxpZExvYyh0bXBfbG9jLCB0cnVlKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNoaXBfbG9jcy5wdXNoKHRtcF9sb2MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2hpcF9sb2NzLmZvckVhY2goKHNlZykgPT57XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtzZWdbMF1dW3NlZ1sxXV0gPSBzaGlwO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSxcblxuICAgICAgICByZWNpZXZlQXR0YWNrKGxvYyl7XG4gICAgICAgICAgICAvLyBjaGVjayB0aGF0IHRoZSBwcm92aWRlZCBoaXQgaXMgdmFsaWRcbiAgICAgICAgICAgIGlmKCF0aGlzLnZhbGlkTG9jKGxvYykpIHJldHVybiAwO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZih0aGlzLmJvYXJkW2xvY1swXV1bbG9jWzFdXSAhPT0gMCl7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtsb2NbMF1dW2xvY1sxXV0uaGl0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5oaXRfYXR0LnB1c2goSlNPTi5zdHJpbmdpZnkobG9jKSk7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5ib2FyZFtsb2NbMF1dW2xvY1sxXV0uaXNTdW5rKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGlkeCA9IHRoaXMuc3RhbmRpbmcuZmluZEluZGV4KFxuICAgICAgICAgICAgICAgICAgICAgICAgKHZhbCkgPT4gdmFsID09IHRoaXMuYm9hcmRbbG9jWzBdXVtsb2NbMV1dLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YW5kaW5nLnNwbGljZShpZHgsIDEpO1xuICAgICAgICAgICAgICAgICAgICBpZighdGhpcy5zdGFuZGluZy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA2OTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMubWlzc19hdHQucHVzaChKU09OLnN0cmluZ2lmeShsb2MpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBzaGlwc1N0YW5kaW5nKCl7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgMTA7IGkrKyl7XG4gICAgICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IDEwOyBqKyspe1xuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmJvYXJkW2ldW2pdID09IDApIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICBpZighdGhpcy5ib2FyZFtpXVtqXS5pc1N1bmsoKSkgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9LFxuICAgICAgICAvLyBwbGFjZXMgYSBzaGlwIHJhbmRvbWx5XG4gICAgICAgIHBsYWNlUmFuZG9tU2hpcHMoKXtcbiAgICAgICAgICAgIHdoaWxlKHRoaXMuc2hpcF9kZWNrLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgbGV0IHNoaXBfbGVuID0gdGhpcy5zaGlwX2RlY2sucG9wKCk7XG4gICAgICAgICAgICAgICAgbGV0IHBsYWNlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGxldCBzaGlwID0gU2hpcChzaGlwX2xlbik7XG5cbiAgICAgICAgICAgICAgICB3aGlsZShwbGFjZWQgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBsZXQgcmFuZGRpciA9IE1hdGguZmxvb3IoTWF0aC5hYnMoTWF0aC5yYW5kb20oKSkgKiA0KTtcbiAgICAgICAgICAgICAgICBsZXQgcmFuZHggPSBNYXRoLmZsb29yKE1hdGguYWJzKE1hdGgucmFuZG9tKCkpICogOSk7XG4gICAgICAgICAgICAgICAgbGV0IHJhbmR5ID0gTWF0aC5mbG9vcihNYXRoLmFicyhNYXRoLnJhbmRvbSgpKSAqIDkpO1xuXG4gICAgICAgICAgICAgICAgcGxhY2VkID0gdGhpcy5wbGFjZVNoaXAoc2hpcCwgW3JhbmR4LCByYW5keV0sIHJhbmRkaXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gY3JlYXRlcyBhIHBsYXllciB3aG8gY2FuIHBlcmZvcm0gZ2FtZSBhY3Rpb25zIG9uIHJlbGV2YW50IGdhbWVib2FyZHNcbmZ1bmN0aW9uIFBsYXllcigpe1xuICAgIHJldHVybiB7XG4gICAgICAgIFwicHVwXCI6IHRydWUsXG4gICAgICAgIFwicGJvYXJkXCI6IEdhbWVib2FyZCgpLFxuICAgICAgICBcImFpYm9hcmRcIjogR2FtZWJvYXJkKCksXG4gICAgICAgIGF0dGFja0FJKGxvYyl7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5haWJvYXJkLnJlY2lldmVBdHRhY2sobG9jKTtcbiAgICAgICAgfSxcbiAgICAgICAgYXR0YWNrUCgpe1xuICAgICAgICAgICAgbGV0IHJhbmR4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICAgICAgbGV0IHJhbmR5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICAgICAgaWYodGhpcy5wYm9hcmQudmFsaWRMb2MoW3JhbmR4LCByYW5keV0pKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYm9hcmQucmVjaWV2ZUF0dGFjayhbcmFuZHgsIHJhbmR5XSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcmVzZXQocGxheWVyX3BsYWNlX3JhbmRvbSA9IGZhbHNlKXtcbiAgICAgICAgICAgIHRoaXMuYWlib2FyZCA9IG51bGw7IC8vIHJlc2V0aW5nIGJvYXJkcztcbiAgICAgICAgICAgIHRoaXMucGJvYXJkID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuYWlib2FyZCA9IEdhbWVib2FyZCgpO1xuICAgICAgICAgICAgdGhpcy5wYm9hcmQgPSBHYW1lYm9hcmQoKTtcbiAgICAgICAgICAgIGlmKHBsYXllcl9wbGFjZV9yYW5kb20pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBib2FyZC5wbGFjZVJhbmRvbVNoaXBzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmFpYm9hcmQucGxhY2VSYW5kb21TaGlwcygpO1xuICAgICAgICB9LFxuICAgIH07XG59XG5cbmV4cG9ydCB7IFNoaXAsIEdhbWVib2FyZCwgUGxheWVyIH0iLCJpbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5cbi8vIFJFTkRFUlMgVEhFIEdBTUVcbmV4cG9ydCBmdW5jdGlvbiBsYXlvdXQocGxheWVyKSB7XG4gICAgLy8gTE9DQUwgVkFSSUFCTEVTIEZPUiBFQVNJRVIgVU5ERVJTVEFORElOR1xuICAgIGxldCBlYm9hcmQgPSBwbGF5ZXIuYWlib2FyZDtcbiAgICBsZXQgcGJvYXJkID0gcGxheWVyLnBib2FyZDtcbiAgICBsZXQgc2hpcF9kZWNrID0gcGxheWVyLnBib2FyZC5zaGlwX2RlY2s7XG4gICAgbGV0IHN1bmtfZGVjayA9IHBsYXllci5haWJvYXJkLnN0YW5kaW5nO1xuXG4gICAgLy8gQ1JFQVRJTkcgU0VDVElPTlNcbiAgICBjb25zdCBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIC8vIFNFVFRJTkcgSEVBREVSIEFORCBGT09URVJcbiAgICBzZXRIZWFkKGgpO1xuICAgIHNldEZvb3QoZik7XG5cbiAgICAvLyBTRVRUSU5HIEJPRFlcbiAgICBiLmNsYXNzTGlzdC5hZGQoJ2JvZHknKTtcbiAgICAvLyAtaW5mbyBzZWN0aW9uXG4gICAgY29uc3QgaW5mb19zZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3Qga2V5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHBsYWNlX3JhbmRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgaW5mb19zZWN0LmNsYXNzTGlzdC5hZGQoJ2luZm8nKTtcbiAgICBwbGFjZV9yYW5kb20uaWQgPSAncnAnO1xuXG4gICAgc2V0S2V5KGtleSk7XG4gICAgKHNoaXBfZGVjay5sZW5ndGggIT0gMCkgPyBzZXREb2NrKGRvY2ssIHNoaXBfZGVjaykgOiBzZXREb2NrKGRvY2ssIHN1bmtfZGVjaywgdHJ1ZSk7XG4gICAgcGxhY2VfcmFuZG9tLnRleHRDb250ZW50ID0gJ1BMQUNFIE1ZIFNISVBTJztcbiAgICBwbGFjZV9yYW5kb20ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgcGxheWVyLnJlc2V0KHRydWUpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCA9ICcnO1xuICAgICAgICBsYXlvdXQocGxheWVyKTtcbiAgICB9XG5cbiAgICBpbmZvX3NlY3QuYXBwZW5kQ2hpbGQoa2V5KTtcbiAgICBpbmZvX3NlY3QuYXBwZW5kQ2hpbGQoZG9jayk7XG4gICAgaW5mb19zZWN0LmFwcGVuZENoaWxkKHBsYWNlX3JhbmRvbSk7XG5cbiAgICAvLyAtYm9hcmQgc2VjdGlvblxuICAgIGNvbnN0IGJvYXJkX3NlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzZXRCb2FyZHMocGxheWVyLCBib2FyZF9zZWN0LCBlYm9hcmQsIHBib2FyZCk7XG5cbiAgICAvLyAtcmVzZXQvd2luIHNlY3Rpb25cbiAgICBjb25zdCByZXNldF9zZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcmVzZXRfc2VjdC5jbGFzc0xpc3QuYWRkKCdyZXNldCcpO1xuICAgIGNvbnN0IHJlc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcmVzZXQudGV4dENvbnRlbnQgPSAnUkVTRVQnO1xuICAgIHJlc2V0LmNsYXNzTGlzdC5hZGQoJ3Jlc2V0YnRuJyk7XG4gICAgcmVzZXRfc2VjdC5hcHBlbmRDaGlsZChyZXNldCk7XG4gICAgcmVzZXQub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgcGxheWVyLnJlc2V0KCk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGxheW91dChwbGF5ZXIpO1xuICAgIH1cblxuICAgIC8vIGFwcGVuZGluZyBlYWNoIHNlY3Rpb24gdG8gYm9keVxuICAgIGIuYXBwZW5kQ2hpbGQoaW5mb19zZWN0KTtcbiAgICBiLmFwcGVuZENoaWxkKGJvYXJkX3NlY3QpO1xuICAgIGIuYXBwZW5kQ2hpbGQocmVzZXRfc2VjdCk7XG5cbiAgICAvLyBBUFBFTkRJTkcgRUxFTUVOVFNcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGgpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYik7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmKTtcblxufVxuXG5mdW5jdGlvbiBzZXRIZWFkKGgpe1xuICAgIC8vIFNFVFRJTkcgSEVBREVSXG4gICAgY29uc3QgZW1wdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbXB0eS50ZXh0Q29udGVudCA9ICcnO1xuICAgIGguY2xhc3NMaXN0LmFkZCgnaGVhZCcpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBjb25zdCBnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSAnQkFUVExFU0hJUCc7XG4gICAgZ2gudGV4dENvbnRlbnQgPSAnR0lUSFVCJ1xuICAgIGdoLm9uY2xpY2sgPSBmdW5jdGlvbiAoKXtcbiAgICAgICAgb3BlbignaHR0cHM6Ly9naXRodWIuY29tL1Rhbm5lckhvcm5zYnk3L29kaW4tYmF0dGxlc2hpcCcpO1xuICAgIH07XG5cbiAgICBoLmFwcGVuZENoaWxkKGVtcHR5KTtcbiAgICBoLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBoLmFwcGVuZENoaWxkKGdoKTtcbn1cblxuZnVuY3Rpb24gc2V0Rm9vdChmKXtcbiAgICAvLyBTRVRUSU5HIEZPT1RFUlxuICAgIGYuY2xhc3NMaXN0LmFkZCgnZm9vdCcpO1xuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIG5hbWUudGV4dENvbnRlbnQgPSAnQHRhbm5lcmhvcm5zYnk3JztcbiAgICBmLmFwcGVuZENoaWxkKG5hbWUpO1xufVxuXG5mdW5jdGlvbiBzZXRLZXkoa2V5KXtcbiAgICBrZXkuY2xhc3NMaXN0LmFkZCgna2V5Jyk7XG4gICAgY29uc3QgaGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjb25zdCBtaXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjb25zdCBzdW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaGl0X2Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgbWlzc19kZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHN1bmtfZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBoaXRfc2VjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IG1pc3Nfc2VjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHN1bmtfc2VjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGtleS5jbGFzc0xpc3QuYWRkKCdrZXknKTtcbiAgICBoaXQuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gICAgbWlzcy5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG4gICAgc3Vuay5jbGFzc0xpc3QuYWRkKCdzdW5rJyk7XG4gICAgaGl0LnRleHRDb250ZW50ID0gJ1gnO1xuICAgIG1pc3MudGV4dENvbnRlbnQgPSAnWCc7XG4gICAgc3Vuay50ZXh0Q29udGVudCA9ICcnO1xuICAgIGhpdF9kZXNjLnRleHRDb250ZW50ID0gJ0hJVCc7XG4gICAgbWlzc19kZXNjLnRleHRDb250ZW50ID0gJ01JU1MnO1xuICAgIHN1bmtfZGVzYy50ZXh0Q29udGVudCA9ICdTVU5LJztcbiAgICBoaXRfc2VjdC5hcHBlbmRDaGlsZChoaXRfZGVzYyk7XG4gICAgaGl0X3NlY3QuYXBwZW5kQ2hpbGQoaGl0KTtcbiAgICBtaXNzX3NlY3QuYXBwZW5kQ2hpbGQobWlzc19kZXNjKTtcbiAgICBtaXNzX3NlY3QuYXBwZW5kQ2hpbGQobWlzcyk7XG4gICAgc3Vua19zZWN0LmFwcGVuZENoaWxkKHN1bmtfZGVzYyk7XG4gICAgc3Vua19zZWN0LmFwcGVuZENoaWxkKHN1bmspO1xuICAgIGhpdF9zZWN0LmNsYXNzTGlzdC5hZGQoJ2tleV9zZWN0Jyk7XG4gICAgbWlzc19zZWN0LmNsYXNzTGlzdC5hZGQoJ2tleV9zZWN0JylcbiAgICBzdW5rX3NlY3QuY2xhc3NMaXN0LmFkZCgna2V5X3NlY3QnKVxuICAgIGtleS5hcHBlbmRDaGlsZChoaXRfc2VjdCk7XG4gICAga2V5LmFwcGVuZENoaWxkKG1pc3Nfc2VjdCk7XG4gICAga2V5LmFwcGVuZENoaWxkKHN1bmtfc2VjdCk7XG5cbn1cblxuZnVuY3Rpb24gc2V0RG9jayhkb2NrLCBzaGlwc19kZWNrLCBwbGFjZWQgPSBmYWxzZSl7XG4gICAgY29uc3QgZG9ja19oZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjb25zdCBib2F0X2xvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGJvYXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBkb2NrX2Zvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG5cbiAgICBkb2NrLmNsYXNzTGlzdC5hZGQoJ2RvY2snKTtcbiAgICBib2F0LnRleHRDb250ZW50ID0gJyc7XG4gICAgYm9hdC5jbGFzc0xpc3QuYWRkKCdib2F0Jyk7XG4gICAgYm9hdF9sb3QuY2xhc3NMaXN0LmFkZCgnYm9hdF9sb3QnKTtcblxuICAgIGlmKHBsYWNlZCkge1xuICAgICAgICBib2F0LmNsYXNzTGlzdC5hZGQoJ2VuZW15Jyk7XG4gICAgICAgIGRvY2tfaGVhZC50ZXh0Q29udGVudCA9ICdSZW1haW5pbmcgRW5lbXkgU2hpcHM6JztcbiAgICAgICAgZG9ja19mb290ZXIudGV4dENvbnRlbnQgPSAnS2VlcCBGaXJpbmchJ1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY2tfaGVhZC50ZXh0Q29udGVudCA9ICdQbGFjZSBZb3VyIFNoaXBzJztcbiAgICAgICAgZG9ja19mb290ZXIudGV4dENvbnRlbnQgPSAnUHJlc3MgUiB0byByb3RhdGUgYSBzaGlwISdcbiAgICB9XG5cbiAgICBzaGlwc19kZWNrLnNvcnQoKTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgc2hpcHNfZGVjay5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGxldCB0bXBfYm9hdCA9IGJvYXQuY2xvbmVOb2RlKCk7XG4gICAgICAgIGxldCBzaGlwX2xlbmd0aCA9IE1hdGguZmxvb3Ioc2hpcHNfZGVja1tpXSAvIDUgKiAxMDApO1xuICAgICAgICB0bXBfYm9hdC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLGB3aWR0aDoke3NoaXBfbGVuZ3RofSVgKTtcbiAgICAgICAgYm9hdF9sb3QuYXBwZW5kQ2hpbGQodG1wX2JvYXQpO1xuICAgIH1cbiAgICBcblxuICAgIGRvY2suYXBwZW5kQ2hpbGQoZG9ja19oZWFkKTtcbiAgICBkb2NrLmFwcGVuZENoaWxkKGJvYXRfbG90KTtcbiAgICBkb2NrLmFwcGVuZENoaWxkKGRvY2tfZm9vdGVyKTtcbn1cblxuZnVuY3Rpb24gc2V0Qm9hcmRzKHBsYXllciwgYm9hcmRfc2VjdCwgZWJvYXJkLCBwYm9hcmQpe1xuICAgIGJvYXJkX3NlY3QuY2xhc3NMaXN0LmFkZCgnZ2FtZScpO1xuICAgIGNvbnN0IGZ1bGxib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZ1bGxib2FyZC5jbGFzc0xpc3QuYWRkKCdmdWxsYm9hcmQnKTtcbiAgICBjb25zdCB0b3BfYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBib3RfYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzZXRFQm9hcmQocGxheWVyLCB0b3BfYm9hcmQsIGVib2FyZCk7XG4gICAgc2V0UEJvYXJkKGJvdF9ib2FyZCwgcGJvYXJkKTtcbiAgICBmdWxsYm9hcmQuYXBwZW5kQ2hpbGQodG9wX2JvYXJkKTtcbiAgICBmdWxsYm9hcmQuYXBwZW5kQ2hpbGQoYm90X2JvYXJkKTtcblxuICAgIGJvYXJkX3NlY3QuYXBwZW5kQ2hpbGQoZnVsbGJvYXJkKTtcbn1cblxuZnVuY3Rpb24gc2V0RUJvYXJkKHBsYXllciwgYl9lbGUsIGdhbWVib2FyZCl7XG4gICAgYl9lbGUuY2xhc3NMaXN0LmFkZCgnYm9hcmQnKTtcbiAgICBjb25zdCBlbXB0eUNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBoaXRDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbWlzc0NlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBzdW5rQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhpdENlbGwuY2xhc3NMaXN0LmFkZCgnaGl0JywgJ2NlbGwnLCAnZWNlbGwnKTtcbiAgICBtaXNzQ2VsbC5jbGFzc0xpc3QuYWRkKCdtaXNzJywgJ2NlbGwnLCAnZWNlbGwnKTtcbiAgICBzdW5rQ2VsbC5jbGFzc0xpc3QuYWRkKCdzdW5rJywgJ2NlbGwnLCAnZWNlbGwnKTtcbiAgICBlbXB0eUNlbGwuY2xhc3NMaXN0LmFkZCgnZW1wdHknLCAnY2VsbCcsICdlY2VsbCcpO1xuICAgIGVtcHR5Q2VsbC50ZXh0Q29udGVudCA9ICcnO1xuXG4gICAgLy8gMCBlbXB0eSwgMSBoaXQsIDIgbWlzcywgMyBzdW5rLCA0IHlvdXJzXG4gICAgLy8gYWRkIGV2ZW50IGxpc3RlbmVycyB0byBlYWNoIG5vZGUgYXMgd2VsbCFcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgZ2FtZWJvYXJkLmJvYXJkLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IGdhbWVib2FyZC5ib2FyZC5sZW5ndGg7IGorKyl7XG4gICAgICAgICAgICBsZXQgdG1wO1xuICAgICAgICAgICAgaWYoZ2FtZWJvYXJkLmJvYXJkW2ldW2pdICYmIGdhbWVib2FyZC5ib2FyZFtpXVtqXS5pc1N1bmsoKSl7XG4gICAgICAgICAgICAgICAgdG1wID0gc3Vua0NlbGwuY2xvbmVOb2RlKCk7XG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgZWxzZSBpZihnYW1lYm9hcmQuaGl0X2F0dC5pbmNsdWRlcyhKU09OLnN0cmluZ2lmeShbaSxqXSkpKSB7XG4gICAgICAgICAgICAgICAgdG1wID0gaGl0Q2VsbC5jbG9uZU5vZGUoKTtcbiAgICAgICAgICAgICAgICBjb25zdCB4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgICAgIHgudGV4dENvbnRlbnQgPSAnWCc7XG4gICAgICAgICAgICAgICAgdG1wLmFwcGVuZENoaWxkKHgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZihnYW1lYm9hcmQubWlzc19hdHQuaW5jbHVkZXMoSlNPTi5zdHJpbmdpZnkoW2ksal0pKSkge1xuICAgICAgICAgICAgICAgIHRtcCA9IG1pc3NDZWxsLmNsb25lTm9kZSgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICAgICAgeC50ZXh0Q29udGVudCA9ICdYJztcbiAgICAgICAgICAgICAgICB0bXAuYXBwZW5kQ2hpbGQoeCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0bXAgPSBlbXB0eUNlbGwuY2xvbmVOb2RlKCk7XG4gICAgICAgICAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcihwbGF5ZXIsIHRtcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0bXAuaWQgPSAncicgKyBpICsgJ2MnICsgajtcblxuICAgICAgICAgICAgYl9lbGUuYXBwZW5kQ2hpbGQodG1wKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gc2V0UEJvYXJkKGJfZWxlLCBnYW1lYm9hcmQpe1xuICAgIGJfZWxlLmNsYXNzTGlzdC5hZGQoJ2JvYXJkJyk7XG4gICAgY29uc3QgeW91ckNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBlbXB0eUNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBoaXRDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbWlzc0NlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBzdW5rQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhpdENlbGwuY2xhc3NMaXN0LmFkZCgnaGl0JywgJ2NlbGwnLCAneW91cnMnKTtcbiAgICBtaXNzQ2VsbC5jbGFzc0xpc3QuYWRkKCdtaXNzJywgJ2NlbGwnKTtcbiAgICBzdW5rQ2VsbC5jbGFzc0xpc3QuYWRkKCdzdW5rJywgJ2NlbGwnKTtcbiAgICB5b3VyQ2VsbC5jbGFzc0xpc3QuYWRkKCd5b3VycycsICdjZWxsJyk7XG4gICAgZW1wdHlDZWxsLmNsYXNzTGlzdC5hZGQoJ2VtcHR5JywgJ2NlbGwnKTtcblxuICAgIC8vIDAgZW1wdHksIDEgaGl0LCAyIG1pc3MsIDMgc3VuaywgNCB5b3VyIHNoaXBcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgZ2FtZWJvYXJkLmJvYXJkLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IGdhbWVib2FyZC5ib2FyZC5sZW5ndGg7IGorKyl7XG4gICAgICAgICAgICBsZXQgdG1wO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZihnYW1lYm9hcmQuYm9hcmRbaV1bal0gJiYgZ2FtZWJvYXJkLmJvYXJkW2ldW2pdLmlzU3VuaygpKSB7XG4gICAgICAgICAgICAgICAgdG1wID0gc3Vua0NlbGwuY2xvbmVOb2RlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKGdhbWVib2FyZC5oaXRfYXR0LmluY2x1ZGVzKEpTT04uc3RyaW5naWZ5KFtpLGpdKSkpIHtcbiAgICAgICAgICAgICAgICB0bXAgPSBoaXRDZWxsLmNsb25lTm9kZSgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICAgICAgeC50ZXh0Q29udGVudCA9ICdYJztcbiAgICAgICAgICAgICAgICB0bXAuYXBwZW5kQ2hpbGQoeCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKGdhbWVib2FyZC5taXNzX2F0dC5pbmNsdWRlcyhKU09OLnN0cmluZ2lmeShbaSxqXSkpKSB7XG4gICAgICAgICAgICAgICAgdG1wID0gbWlzc0NlbGwuY2xvbmVOb2RlKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgeCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgICAgICB4LnRleHRDb250ZW50ID0gJ1gnO1xuICAgICAgICAgICAgICAgIHRtcC5hcHBlbmRDaGlsZCh4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoIWdhbWVib2FyZC5ib2FyZFtpXVtqXSkge1xuICAgICAgICAgICAgICAgIHRtcCA9IGVtcHR5Q2VsbC5jbG9uZU5vZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRtcCA9IHlvdXJDZWxsLmNsb25lTm9kZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0bXAuaWQgPSAncicgKyBpICsgJ2MnICsgajtcbiAgICAgICAgICAgIGJfZWxlLmFwcGVuZENoaWxkKHRtcCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXIocGxheWVyLCBjZWxsKXtcbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICAgICAgbGV0IHIgPSBwYXJzZUludChjZWxsLmlkLmNoYXJBdCgxKSk7XG4gICAgICAgIGxldCBjID0gcGFyc2VJbnQoY2VsbC5pZC5jaGFyQXQoMykpO1xuICAgICAgICBsZXQgd2MgPSBwbGF5ZXIuYXR0YWNrQUkoW3IsIGNdKTtcbiAgICAgICAgaWYod2MgPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGxheW91dChwbGF5ZXIpO1xuICAgICAgICBpZih3YyA9PSA2OSkge1xuICAgICAgICAgICAgd2luQ29uZGl0aW9uKHBsYXllciwgJ3AnKTtcbiAgICAgICAgfVxuICAgICAgICBpZihwbGF5ZXIuYXR0YWNrUCgpID09IDY5KSB7XG4gICAgICAgICAgICB3aW5Db25kaXRpb24ocGxheWVyLCAnYycpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHdpbkNvbmRpdGlvbihwbGF5ZXIsIHBhcmFtKXtcbiAgICBwbGF5ZXIucmVzZXQoKTtcbiAgICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCA9ICcnO1xuICAgIGNvbnN0IGVuZF9zY3JlZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbmRfc2NyZWVuLmNsYXNzTGlzdC5hZGQoJ2dnJyk7XG4gICAgZW5kX3NjcmVlbi50ZXh0Q29udGVudCA9IChwYXJhbSA9PSAncCcpID8gJ1VzZXIgV2lucycgOiAnQUkgV2lucyc7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbmRfc2NyZWVuKTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCA9ICcnO1xuICAgICAgICBsYXlvdXQocGxheWVyKTtcbiAgICB9LCAzMDAwKTtcbn1cblxuZnVuY3Rpb24gbmV3R2FtZUZvcm0oKXtcblxufVxuLypcblRPLURPOlxuY3JlYXRlIGhlYWRlciBhbmQgZm9vdGVyIGRvbSBtb2R1bGVcbmNyZWF0ZSBib2R5IHJlbmRlciBkb20gbW9kdWxlXG4gICAgaGF2ZSBldmVudCBsaXN0ZW5lcnMgb24gZWFjaCBzaGlwIGluIHRoZSBkb2MgYW5kIGVhY2ggc3F1YXJlIGluIHRoZSBib2FyZFxuY3JlYXRlIGdhbWUgb3ZlciBkb20gbW9kdWxlXG5cbiovXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImdhbWVcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vbG9naWNcIjtcbmltcG9ydCB7IGxheW91dCB9IGZyb20gXCIuL3JlbmRlclwiXG5cbmZ1bmN0aW9uIG1haW4oKXtcbiAgICBjb25zdCBwbGF5ZXIgPSBQbGF5ZXIoKTtcbiAgICBsYXlvdXQocGxheWVyKTtcbn1cblxubWFpbigpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==