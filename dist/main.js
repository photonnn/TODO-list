/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    --neutral: #f5f5f5;\n    --violet: white;\n    --stone: #6e6279;\n    --zinc: #3f3f46;\n    --hover: rgb(69, 31, 83);\n\n}\n\nbody,\nhtml {\n    height: 100%;\n    width: 100%;\n}\n\nbody {\n    display: flex;\n}\n\n#sidebar {\n    flex: 1;\n    background-color: var(--zinc);\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    width: 100%;\n}\n\n#sidebar>div {\n    font-size: 6vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    ;\n}\n\n.home {\n    flex: 1;\n    border-bottom: 5px black solid;\n    background-color: var(--stone);\n    user-select: none;\n}\n\n#projects {\n    flex: 7;\n}\n\n.home:hover {\n    background-color: var(--hover);\n    cursor: pointer;\n}\n\n#content {\n    flex: 3;\n    background-color: grey;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    flex-direction: column;\n    height: 100%;\n    width: 100%;\n}\n\n.expand {\n    display: flex;\n    flex-direction: column;\n}\n\n.expand>div:first-child,\n#addProject {\n    flex: 1;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.expand>* {\n    width: 100%;\n}\n\n#addProject {\n    border-top: 3px solid black;\n    background-color: var(--stone);\n    user-select: none;\n}\n\n#addProject:hover {\n    cursor: pointer;\n    background-color: var(--hover);\n}\n\n.expand>div:first-child {\n    border-bottom: 3px solid black;\n}\n\n\n.expand .shortcut {\n    background-color: var(--stone);\n    padding: 5%;\n    border-bottom: 3px solid black;\n    word-break: break-word;\n    user-select: none;\n    cursor: pointer;\n    display: flex;\n    justify-content: space-between;\n}\n\n.expand .shortcuts {\n    overflow-y: auto;\n    max-height: 70vh;\n}\n\n.shortcut:hover {\n    background-color: var(--hover);\n    cursor: pointer;\n}\n\n.expand>div {\n    flex: 5;\n    text-align: center;\n}\n\n#tasks {\n    flex: 1;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(35vh, 1fr));\n    grid-gap: 2vh;\n    overflow-y: auto;\n    width: 100%;\n    padding: 3%;\n}\n\n#tasks>div {\n    height: 35vh;\n    background: rgb(0, 147, 223);\n    background: radial-gradient(circle, rgba(0, 147, 223, 1) 0%,\n            rgba(211, 239, 242, 1) 49%, rgba(17, 16, 16, 1) 100%);\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    border-radius: 10%;\n    font-size: clamp(0, 2rem, calc(2rem + 2.5vh));\n}\n\n#tasks>div>div {\n    word-break: break-word;\n}\n\n.Must {\n    background: rgb(232, 5, 5);\n    background: radial-gradient(circle, rgba(232, 5, 5, 1) 0%,\n            rgba(213, 144, 144, 1) 49%, rgba(17, 16, 16, 1) 100%) !important;\n}\n\n.Necessary {\n    background: rgb(232, 107, 5);\n    background: radial-gradient(circle, rgba(232, 107, 5, 1) 0%,\n            rgba(235, 200, 163, 1) 49%, rgba(17, 16, 16, 1) 100%) !important;\n}\n\n.Maybe {\n    background: rgb(193, 232, 5);\n    background: radial-gradient(circle, rgba(193, 232, 5, 1) 0%,\n            rgba(224, 235, 163, 1) 49%, rgba(17, 16, 16, 1) 100%) !important;\n}\n\n#content>*:not(#tasks) {\n    display: flex;\n    justify-content: center;\n    width: 100%;\n}\n\n.header {\n    font-size: 40px;\n}\n\n.header .RPB {\n    background-color: red;\n    color: rgb(85, 3, 19);\n    font-size: 2rem;\n    padding: 1%;\n    position: absolute;\n    right: 0;\n}\n\n#addTask {\n    font-size: 40px;\n    color: white;\n    background-color: black;\n    user-select: none;\n}\n\n#addTask:hover {\n    opacity: 0.5;\n    cursor: pointer;\n}\n\n#addTask:active {\n    opacity: 0.2;\n}\n\n.selected {\n    border-right: 10px groove var(--hover);\n}\n\n#date {\n    width: 40vh !important;\n    font-size: 5vh;\n    border: none;\n    background: grey;\n}\n\n.calLeft {\n    margin-right: 2vh;\n}\n\n.calRight {\n    margin-left: 2vh;\n}\n\n.navigatecal {\n    font-size: 8vh;\n    cursor: pointer;\n    user-select: none;\n}\n\n#taskForm {\n    width: 65vh;\n    height: 65vh;\n    left: calc(50% - 10vh);\n    top: calc(50% - 30vh);\n    padding-left: 5%;\n    padding-right: 5%;\n    font-size: 3vh;\n}\n\n#projectForm {\n    width: 65vh;\n    height: 55vh;\n    left: calc(50% - 10vh);\n    top: calc(50% - 30vh);\n    padding: 0 5% 0 5%;\n    font-size: 3vh;\n}\n\n#confirmationForm {\n    width: 50vh;\n    height: 35vh;\n    left: calc(50% - 10vh);\n    top: calc(50% - 30vh);\n    padding: 0 3% 0 3%;\n    font-size: 3vh;\n}\n\n#projectForm,\n#taskForm,\n#confirmationForm {\n    visibility: hidden;\n    position: absolute;\n    z-index: 2;\n    background-color: var(--stone);\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: flex-start;\n    border: 5px var(--hover) solid;\n}\n\n.cover {\n    position: fixed;\n    top: 0;\n    left: 0;\n    background: rgba(0, 0, 0, 0.6);\n    z-index: 1;\n    width: 100%;\n    height: 100%;\n    display: none;\n}\n\n#taskForm div,\n#projectForm div {\n    display: flex;\n}\n\n#taskForm label,\n#projectForm label {\n    flex: 1;\n    min-width: 20vh;\n    font-size: 3vh;\n}\n\n#taskForm input,\n#taskForm select {\n    flex: 6;\n    min-width: 30vh;\n}\n\n#description,\n#taskForm input,\n#priority,\n#proj_title,\n#proj_dueDate {\n    font-size: 2vh;\n    padding: 1%;\n}\n\n#description {\n    height: 20vh;\n    max-width: 30vh;\n}\n\n.redBtn {\n    background-color: red;\n}\n\n.greenBtn {\n    background-color: rgb(47, 255, 47);\n}\n\n.redBtn,\n.greenBtn {\n    font-size: 3vh;\n    padding: 10%;\n    width: 15vh;\n    height: 0.5vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.fbtn {\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n}\n\n.expired {\n    border: 5px solid red;\n}\n\n.task_desc {\n    overflow-y: auto;\n    flex: 6;\n    font-size: 1.5rem;\n}\n\n.task_dueDate {\n    flex: 1;\n}\n\n.task_title, .task_desc, .task_dueDate {\n    border-bottom: 1px solid rgba(0, 0, 0, 0.212);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n}\n\n.task_title {\n    flex: 1;\n    padding: 0 6%;\n}\n\n.taskButtons  > button {\n    font-size: 1.5rem;\n    color: white;\n    background-color: black;\n    opacity: 0.5;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    --neutral: #f5f5f5;\n    --violet: white;\n    --stone: #6e6279;\n    --zinc: #3f3f46;\n    --hover: rgb(69, 31, 83);\n\n}\n\nbody,\nhtml {\n    height: 100%;\n    width: 100%;\n}\n\nbody {\n    display: flex;\n}\n\n#sidebar {\n    flex: 1;\n    background-color: var(--zinc);\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    width: 100%;\n}\n\n#sidebar>div {\n    font-size: 6vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    ;\n}\n\n.home {\n    flex: 1;\n    border-bottom: 5px black solid;\n    background-color: var(--stone);\n    user-select: none;\n}\n\n#projects {\n    flex: 7;\n}\n\n.home:hover {\n    background-color: var(--hover);\n    cursor: pointer;\n}\n\n#content {\n    flex: 3;\n    background-color: grey;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    flex-direction: column;\n    height: 100%;\n    width: 100%;\n}\n\n.expand {\n    display: flex;\n    flex-direction: column;\n}\n\n.expand>div:first-child,\n#addProject {\n    flex: 1;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.expand>* {\n    width: 100%;\n}\n\n#addProject {\n    border-top: 3px solid black;\n    background-color: var(--stone);\n    user-select: none;\n}\n\n#addProject:hover {\n    cursor: pointer;\n    background-color: var(--hover);\n}\n\n.expand>div:first-child {\n    border-bottom: 3px solid black;\n}\n\n\n.expand .shortcut {\n    background-color: var(--stone);\n    padding: 5%;\n    border-bottom: 3px solid black;\n    word-break: break-word;\n    user-select: none;\n    cursor: pointer;\n    display: flex;\n    justify-content: space-between;\n}\n\n.expand .shortcuts {\n    overflow-y: auto;\n    max-height: 70vh;\n}\n\n.shortcut:hover {\n    background-color: var(--hover);\n    cursor: pointer;\n}\n\n.expand>div {\n    flex: 5;\n    text-align: center;\n}\n\n#tasks {\n    flex: 1;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(35vh, 1fr));\n    grid-gap: 2vh;\n    overflow-y: auto;\n    width: 100%;\n    padding: 3%;\n}\n\n#tasks>div {\n    height: 35vh;\n    background: rgb(0, 147, 223);\n    background: radial-gradient(circle, rgba(0, 147, 223, 1) 0%,\n            rgba(211, 239, 242, 1) 49%, rgba(17, 16, 16, 1) 100%);\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    border-radius: 10%;\n    font-size: clamp(0, 2rem, calc(2rem + 2.5vh));\n}\n\n#tasks>div>div {\n    word-break: break-word;\n}\n\n.Must {\n    background: rgb(232, 5, 5);\n    background: radial-gradient(circle, rgba(232, 5, 5, 1) 0%,\n            rgba(213, 144, 144, 1) 49%, rgba(17, 16, 16, 1) 100%) !important;\n}\n\n.Necessary {\n    background: rgb(232, 107, 5);\n    background: radial-gradient(circle, rgba(232, 107, 5, 1) 0%,\n            rgba(235, 200, 163, 1) 49%, rgba(17, 16, 16, 1) 100%) !important;\n}\n\n.Maybe {\n    background: rgb(193, 232, 5);\n    background: radial-gradient(circle, rgba(193, 232, 5, 1) 0%,\n            rgba(224, 235, 163, 1) 49%, rgba(17, 16, 16, 1) 100%) !important;\n}\n\n#content>*:not(#tasks) {\n    display: flex;\n    justify-content: center;\n    width: 100%;\n}\n\n.header {\n    font-size: 40px;\n}\n\n.header .RPB {\n    background-color: red;\n    color: rgb(85, 3, 19);\n    font-size: 2rem;\n    padding: 1%;\n    position: absolute;\n    right: 0;\n}\n\n#addTask {\n    font-size: 40px;\n    color: white;\n    background-color: black;\n    user-select: none;\n}\n\n#addTask:hover {\n    opacity: 0.5;\n    cursor: pointer;\n}\n\n#addTask:active {\n    opacity: 0.2;\n}\n\n.selected {\n    border-right: 10px groove var(--hover);\n}\n\n#date {\n    width: 40vh !important;\n    font-size: 5vh;\n    border: none;\n    background: grey;\n}\n\n.calLeft {\n    margin-right: 2vh;\n}\n\n.calRight {\n    margin-left: 2vh;\n}\n\n.navigatecal {\n    font-size: 8vh;\n    cursor: pointer;\n    user-select: none;\n}\n\n#taskForm {\n    width: 65vh;\n    height: 65vh;\n    left: calc(50% - 10vh);\n    top: calc(50% - 30vh);\n    padding-left: 5%;\n    padding-right: 5%;\n    font-size: 3vh;\n}\n\n#projectForm {\n    width: 65vh;\n    height: 55vh;\n    left: calc(50% - 10vh);\n    top: calc(50% - 30vh);\n    padding: 0 5% 0 5%;\n    font-size: 3vh;\n}\n\n#confirmationForm {\n    width: 50vh;\n    height: 35vh;\n    left: calc(50% - 10vh);\n    top: calc(50% - 30vh);\n    padding: 0 3% 0 3%;\n    font-size: 3vh;\n}\n\n#projectForm,\n#taskForm,\n#confirmationForm {\n    visibility: hidden;\n    position: absolute;\n    z-index: 2;\n    background-color: var(--stone);\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: flex-start;\n    border: 5px var(--hover) solid;\n}\n\n.cover {\n    position: fixed;\n    top: 0;\n    left: 0;\n    background: rgba(0, 0, 0, 0.6);\n    z-index: 1;\n    width: 100%;\n    height: 100%;\n    display: none;\n}\n\n#taskForm div,\n#projectForm div {\n    display: flex;\n}\n\n#taskForm label,\n#projectForm label {\n    flex: 1;\n    min-width: 20vh;\n    font-size: 3vh;\n}\n\n#taskForm input,\n#taskForm select {\n    flex: 6;\n    min-width: 30vh;\n}\n\n#description,\n#taskForm input,\n#priority,\n#proj_title,\n#proj_dueDate {\n    font-size: 2vh;\n    padding: 1%;\n}\n\n#description {\n    height: 20vh;\n    max-width: 30vh;\n}\n\n.redBtn {\n    background-color: red;\n}\n\n.greenBtn {\n    background-color: rgb(47, 255, 47);\n}\n\n.redBtn,\n.greenBtn {\n    font-size: 3vh;\n    padding: 10%;\n    width: 15vh;\n    height: 0.5vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.fbtn {\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n}\n\n.expired {\n    border: 5px solid red;\n}\n\n.task_desc {\n    overflow-y: auto;\n    flex: 6;\n    font-size: 1.5rem;\n}\n\n.task_dueDate {\n    flex: 1;\n}\n\n.task_title, .task_desc, .task_dueDate {\n    border-bottom: 1px solid rgba(0, 0, 0, 0.212);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n}\n\n.task_title {\n    flex: 1;\n    padding: 0 6%;\n}\n\n.taskButtons  > button {\n    font-size: 1.5rem;\n    color: white;\n    background-color: black;\n    opacity: 0.5;\n}"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/control.js":
/*!************************!*\
  !*** ./src/control.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeProjectD": () => (/* binding */ changeProjectD),
/* harmony export */   "loadFromStorage": () => (/* binding */ loadFromStorage),
/* harmony export */   "onClickingRPB": () => (/* binding */ onClickingRPB)
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");
/* harmony import */ var _setupTask_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setupTask.js */ "./src/setupTask.js");
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");
/* harmony import */ var _eventListeners_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eventListeners.js */ "./src/eventListeners.js");






// felt like this deserves a seperate module, since it's not really DOM manip.
// as the name suggests, controling the flow here
const changeProjectD = (projectName) => {
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.eraseTasksD)();
    if (_todo_js__WEBPACK_IMPORTED_MODULE_2__.projects[projectName].tasks != {}) {
        for (let em in _todo_js__WEBPACK_IMPORTED_MODULE_2__.projects[projectName].tasks) {
            (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.addTaskD)(_todo_js__WEBPACK_IMPORTED_MODULE_2__.projects[projectName].tasks[em]);
            (0,_setupTask_js__WEBPACK_IMPORTED_MODULE_1__.setupTaskD)(_todo_js__WEBPACK_IMPORTED_MODULE_2__.projects[projectName].tasks[em], projectName);
        }
    }
    if (projectName != "HOME") {
        addRPB();
    } else {
        removeRPB();
    }
};

// RPB - remove project button
function addRPB() {
    const header = document.querySelector(".header");
    if (header.lastChild.textContent != "X") {
        const delBtn = document.createElement("button");
        delBtn.textContent = "X";
        delBtn.classList.add("RPB");
        delBtn.addEventListener('click', () => {
            showConfirmationForm();
        });
        header.appendChild(delBtn);
    }
}

function showConfirmationForm() {
    const form = document.querySelector("#confirmationForm");
    form.style.visibility = "visible";
    const cover = document.querySelector(".cover");
    cover.style.display = "block";
}

function removeRPB() {
    const header = document.querySelector(".header");
    header.lastChild.remove();
}

function onClickingRPB() {
    // first check if you actually want to delete
    // get id, delete on content and then sidebar using id. return to home
    const projectName2 = document.querySelector(".selected").textContent;
    const projectID = _todo_js__WEBPACK_IMPORTED_MODULE_2__.projects[projectName2].id;
    delete _todo_js__WEBPACK_IMPORTED_MODULE_2__.projects[projectName2];
    const project = document.querySelector(`#${projectID}`)
    project.remove();
    console.log(_todo_js__WEBPACK_IMPORTED_MODULE_2__.projects);

    const home = document.querySelector("#Pr0");
    home.classList.add("selected");
    changeProjectD("HOME");

    // save because you removed a project
    localStorage.setItem('projects', JSON.stringify(_todo_js__WEBPACK_IMPORTED_MODULE_2__.projects));
}


// load all projects and tasks from the local storage
const loadFromStorage = () => {
    for (let project in _todo_js__WEBPACK_IMPORTED_MODULE_2__.projects) {
        if (project != "HOME") {
            (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.addProjectD)(_todo_js__WEBPACK_IMPORTED_MODULE_2__.projects[project], _todo_js__WEBPACK_IMPORTED_MODULE_2__.projects[project].id);
            (0,_eventListeners_js__WEBPACK_IMPORTED_MODULE_3__.addProjectListener)(_todo_js__WEBPACK_IMPORTED_MODULE_2__.projects[project].id);
        }
    }

    for (let task in _todo_js__WEBPACK_IMPORTED_MODULE_2__.projects.HOME.tasks) {
        (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.addTaskD)(_todo_js__WEBPACK_IMPORTED_MODULE_2__.projects.HOME.tasks[task]);
        (0,_setupTask_js__WEBPACK_IMPORTED_MODULE_1__.setupTaskD)(_todo_js__WEBPACK_IMPORTED_MODULE_2__.projects.HOME.tasks[task], "HOME");
    }
};



/***/ }),

/***/ "./src/date.js":
/*!*********************!*\
  !*** ./src/date.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "expireCheck": () => (/* binding */ expireCheck),
/* harmony export */   "formatDate": () => (/* binding */ formatDate),
/* harmony export */   "getDate": () => (/* binding */ getDate)
/* harmony export */ });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/todo.js");


const calender = document.querySelector("#date");

const today = getDate();
const dueDate = document.getElementById("dueDate");
dueDate.value = getDate();
calender.setAttribute("value", today);
calender.setAttribute("min", today);


function getDate() {
    var d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}

// ideally you would format to fit location, but what a pain D:
function formatDate(date) {
    date = date.split("-");
    return [date[1], date[2], date[0]].join("-");
}

function format(str) {
    str = str.toString();
    const month = getMonthFromString(str.substring(4, 7));
    const day = str.substring(8, 10);
    const year = str.substring(11, 15);
    return [day, month, year];
}

function getMonthFromString(mon) {
    return new Date(Date.parse(mon + " 1, 2012")).getMonth() + 1;
}

const expireCheck = (task) => {
    //const todayArr = document.getElementById("date").value.split("-");

    const todayArr = format(document.getElementById("date").valueAsDate);
    // [day, month, year]
    // console.log(document.getElementById("date").valueAsDate);
    // ex: Wed Sep 28 2022 02:00:00 GMT+0200 (Central European Summer Time)
    const currentProject = document.querySelector(".selected").textContent;
    console.log(_todo__WEBPACK_IMPORTED_MODULE_0__.projects[currentProject].tasks);
    const arr = _todo__WEBPACK_IMPORTED_MODULE_0__.projects[currentProject].tasks[task.title].dueDate.split("-");
    if (+todayArr[0] > +arr[1] || +todayArr[1] > +arr[0] || +todayArr[2] >
            +arr[2]) {
        return true;
    } else {
        return false;
    }
}



/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProjectD": () => (/* binding */ addProjectD),
/* harmony export */   "addTaskD": () => (/* binding */ addTaskD),
/* harmony export */   "eraseTaskD": () => (/* binding */ eraseTaskD),
/* harmony export */   "eraseTasksD": () => (/* binding */ eraseTasksD)
/* harmony export */ });
/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./date */ "./src/date.js");


const addTaskD = (task) => {
    const div = document.createElement("div");
    div.classList.add(`${task.id}`);
    
    if ((0,_date__WEBPACK_IMPORTED_MODULE_0__.expireCheck)(task)) {
        div.classList.add("expired");
    } 

    const tasks = document.querySelector("#tasks");
    tasks.appendChild(div);


};

const eraseTasksD = () => {
    const tasks = document.querySelector("#tasks");
    while (tasks.firstChild) {
        tasks.removeChild(tasks.lastChild);
    }
};

const eraseTaskD = (id) => {
    const task = document.querySelector(`.${id}`);
    task.remove();
};

const addProjectD = (project, id) => {
    const div = document.createElement("div");
    div.classList.add("shortcut");
    div.id = id;
    div.textContent = project.title;

    const shortcuts = document.querySelector(".shortcuts");
    shortcuts.append(div);
};



// D at the end represents DOM


/***/ }),

/***/ "./src/eventListeners.js":
/*!*******************************!*\
  !*** ./src/eventListeners.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProjectListener": () => (/* binding */ addProjectListener),
/* harmony export */   "resetForm": () => (/* binding */ resetForm),
/* harmony export */   "showFormAndCover": () => (/* binding */ showFormAndCover)
/* harmony export */ });
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");
/* harmony import */ var _control_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./control.js */ "./src/control.js");
/* harmony import */ var _setupTask_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setupTask.js */ "./src/setupTask.js");
/* harmony import */ var _date_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./date.js */ "./src/date.js");






// it resets every time website refreshes so duplication bug occurs,
// and it's more efficient, (little bit lol)

const addTask = document.querySelector("#addTask");
addTask.addEventListener('click', () => {
    showFormAndCover();
});


// make it apply to any form TODOODODODODOD
function showFormAndCover() {
    const form = document.querySelector("#taskForm");
    const cover = document.querySelector(".cover");
    cover.style.display = "block";
    form.style.visibility = "visible";
}

// thought it would easy to put all form related code to the submit btn listener
const gbutton = document.querySelector(".green");
gbutton.addEventListener('click', () => {
    // run only if not editing, we have 2 event listners on one button
    // so this forces the other one to work alone, which is what we want
    const currentProject = document.querySelector(".selected").textContent;
    if (!_todo_js__WEBPACK_IMPORTED_MODULE_0__.projects[currentProject].flag) {
        console.log("I RAN");

        const task = getTask();

        resetForm();

        // set default date, so MM-DD-YYYY is not shown on form?????
        const dueDate = document.getElementById("dueDate");
        dueDate.value = (0,_date_js__WEBPACK_IMPORTED_MODULE_4__.getDate)();

        // setup task
        const currentProject = document.querySelector(".selected").textContent;
        _todo_js__WEBPACK_IMPORTED_MODULE_0__.projects[currentProject].tasks[task.title] = task;
        (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.addTaskD)(task, currentProject);
        (0,_setupTask_js__WEBPACK_IMPORTED_MODULE_3__.setupTaskD)(task, currentProject);


        // save to local when you add task or project
        localStorage.setItem('projects', JSON.stringify(_todo_js__WEBPACK_IMPORTED_MODULE_0__.projects));
    }
    console.log(_todo_js__WEBPACK_IMPORTED_MODULE_0__.projects);
});

function resetForm() {
    const form = document.querySelector("#taskForm");
    const cover = document.querySelector(".cover");
    form.reset();
    form.style.visibility = "hidden";
    cover.style.display = "none";

    // this is also default, present in date.js!
    const dueDate = document.getElementById("dueDate");
    dueDate.value = (0,_date_js__WEBPACK_IMPORTED_MODULE_4__.getDate)();
}

const rbutton = document.querySelector(".red");
rbutton.addEventListener('click', () => {
    resetForm();
});

// couldn't get submit type button to work, so needed a function to get values
// from the form, this is it
function getTask() {
    const title = document.getElementById("title").value;
    const currentProject = document.querySelector(".selected").textContent;
    if (!_todo_js__WEBPACK_IMPORTED_MODULE_0__.projects[currentProject].tasks[title]) {
        const description = document.getElementById("description").value;
        let dueDate = document.getElementById("dueDate").value;
        const priority = document.getElementById("priority").value;

        if (!dueDate) {
            dueDate = (0,_date_js__WEBPACK_IMPORTED_MODULE_4__.getDate)();
        }

        let id = 0;
        // easiest way to prevent duplication bug => 2 tasks 1 id
        for (let em in _todo_js__WEBPACK_IMPORTED_MODULE_0__.projects[currentProject].tasks) {
            id = Math.max(id,
                Number(_todo_js__WEBPACK_IMPORTED_MODULE_0__.projects[currentProject].tasks[em].id
                    .replace("task", "")) + 1);
        }




        const task = (0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.todo)(title, description, (0,_date_js__WEBPACK_IMPORTED_MODULE_4__.formatDate)(dueDate), priority, "task" +
            id.toString());
        return task;
    } else {
        alert("Failure, task with the same title already exists")
    }
}

// similar problem as task id
//let projectID = Object.keys(projects).length;

// againt, needed a way to get values from the form
function getProject() {
    const title = document.getElementById("proj_title").value;
    if (!_todo_js__WEBPACK_IMPORTED_MODULE_0__.projects[title]) {
        const dueDate = document.getElementById("proj_dueDate").value;

        let projectID = 0;
        // easiest way to prevent duplication bug => 2 projects 1 id
        for (let em in _todo_js__WEBPACK_IMPORTED_MODULE_0__.projects) {
            projectID = Math.max(projectID,
                Number(_todo_js__WEBPACK_IMPORTED_MODULE_0__.projects[em].id.replace("Pr", "")) + 1);
        }

        const proj = (0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.projectFactory)(title, dueDate, "Pr" + projectID.toString());
        return proj;
    } else {
        return 0;
    }

}

const addProject = document.querySelector("#addProject");
addProject.addEventListener('click', () => {
    const projForm = document.querySelector("#projectForm")
    projForm.style.visibility = "visible";
    const cover = document.querySelector(".cover");
    cover.style.display = "block";
});

const proj_gbutton = document.querySelector(".proj_green");
proj_gbutton.addEventListener('click', () => {
    const project = getProject();
    if (!project) {
        alert("Failure, can't repeat project name")
    } else {
        resetProjForm();
        _todo_js__WEBPACK_IMPORTED_MODULE_0__.projects[project.title] = project;
        _todo_js__WEBPACK_IMPORTED_MODULE_0__.projects[project.title].tasks = {};
        _todo_js__WEBPACK_IMPORTED_MODULE_0__.projects[project.title].id = project.id;

        (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.addProjectD)(project, project.id);
        addProjectListener(project.id);


        // save to local when you add task or project
        localStorage.setItem('projects', JSON.stringify(_todo_js__WEBPACK_IMPORTED_MODULE_0__.projects));
    }
});

const proj_rbutton = document.querySelector(".proj_red");
proj_rbutton.addEventListener('click', () => {
    resetProjForm();
});

function resetProjForm() {
    const form = document.querySelector("#projectForm");
    const cover = document.querySelector(".cover");
    document.getElementById("proj_title").value = "";
    document.getElementById("proj_dueDate").value = "";
    form.style.visibility = "hidden";
    cover.style.display = "none";
}

const conf_green = document.querySelector(".conf_green");
conf_green.addEventListener('click', () => {
    (0,_control_js__WEBPACK_IMPORTED_MODULE_2__.onClickingRPB)();
    resetConfForm();
});

const conf_red = document.querySelector(".conf_red");
conf_red.addEventListener('click', () => {
    resetConfForm();
})

function resetConfForm() {
    const confForm = document.querySelector("#confirmationForm");
    confForm.style.visibility = "hidden";
    const cover = document.querySelector(".cover");
    cover.style.display = "none";
}




// add ID to each project and then 
const addProjectListener = (id) => {
    const project = document.getElementById(`${id}`);

    project.addEventListener('click', () => {
        const temp = document.querySelector('.selected');
        temp.classList.remove("selected");
        project.classList.add("selected");
        (0,_control_js__WEBPACK_IMPORTED_MODULE_2__.changeProjectD)(project.textContent);
    });
}

addProjectListener("Pr0");

// navigate calender, left and right arrow
const left = document.querySelector('.calLeft');
const right = document.querySelector('.calRight');
const input = document.querySelector('#date');
left.addEventListener('click', () => {
    input.stepDown();
    check();
});
right.addEventListener('click', () => {
    input.stepUp();
    check();
});
// date is picked manually from the calander, click doesn't work
input.addEventListener('change', () => {
    check();
})

function check() {
    const currentProject = document.querySelector(".selected").textContent;
    for (let em in _todo_js__WEBPACK_IMPORTED_MODULE_0__.projects[currentProject].tasks) {
        const div = document.querySelector(`.${_todo_js__WEBPACK_IMPORTED_MODULE_0__.projects[currentProject].tasks[em].id
            }`);
        if ((0,_date_js__WEBPACK_IMPORTED_MODULE_4__.expireCheck)(_todo_js__WEBPACK_IMPORTED_MODULE_0__.projects[currentProject].tasks[em])) {
            div.classList.add("expired");
        } else {
            div.classList.remove("expired");
        }
    }
}



/***/ }),

/***/ "./src/setupTask.js":
/*!**************************!*\
  !*** ./src/setupTask.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setupTaskD": () => (/* binding */ setupTaskD)
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");
/* harmony import */ var _eventListeners_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eventListeners.js */ "./src/eventListeners.js");
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");
/* harmony import */ var _date_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./date.js */ "./src/date.js");





let working_task, working_project;


// "Control" function
const setupTaskD = (task, project) => {
    working_task = task; // object
    working_project = project; // name

    uI();
    setupEditButton();
    setupDeleteButton();
};

const uI = () => {
    const taskNode = document.querySelector(`.${working_task.id}`);

    const title = document.createElement("div");
    title.textContent = working_task.title;
    title.classList.add("task_title");
    taskNode.appendChild(title);

    const desc = document.createElement("div");
    desc.textContent = working_task.description;
    desc.classList.add("task_desc");
    taskNode.appendChild(desc);

    const dueDate = document.createElement("div");
    dueDate.textContent = "Due Date: " + working_task.dueDate;
    dueDate.classList.add("task_dueDate");
    taskNode.appendChild(dueDate);

    // taskNode.appendChild(priority);

    taskNode.classList.add(`${working_task.priority}`)
};


const setupDeleteButton = () => {
    const btn = document.createElement('button');
    btn.textContent = "X";

    const div = document.querySelector(`.${working_task.id} .taskButtons`);
    div.appendChild(btn);

    // we need to obtain task object from the button itself
    // because if we use any variable it won't delete properly
    // this is done via matching btn class name which is equal to the id
    // of the task that we are seeking in a projects object
    btn.addEventListener('click', () => {
        const taskID = [...btn.parentNode.parentNode.classList][0];
        console.log(taskID);
        const currentProject = document.querySelector(".selected").textContent;
        const title = getTitle(taskID, currentProject);

        (0,_todo_js__WEBPACK_IMPORTED_MODULE_2__.deleteTask)(currentProject, _todo_js__WEBPACK_IMPORTED_MODULE_2__.projects[currentProject].tasks[title]);
        (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.eraseTaskD)(taskID);
    });
};

function getTitle(taskID, currentProject) {

    let title;
    for (let em in _todo_js__WEBPACK_IMPORTED_MODULE_2__.projects[currentProject].tasks) {
        if (_todo_js__WEBPACK_IMPORTED_MODULE_2__.projects[currentProject].tasks[em].id == taskID) {
            title = _todo_js__WEBPACK_IMPORTED_MODULE_2__.projects[currentProject].tasks[em].title;
        }
    }
    return title;
}

const setupEditButton = () => {
    const btn = document.createElement('button');
    btn.textContent = "Edit";

    const div = document.createElement("div");
    div.classList.add("taskButtons");

    const taskNode = document.querySelector(`.${working_task.id}`);
    taskNode.appendChild(div);
    div.appendChild(btn);

    btn.addEventListener('click', () => {
        const taskID = [...btn.parentNode.parentNode.classList][0];
        const currentProject = document.querySelector(".selected").textContent;
        const title = getTitle(taskID, currentProject);
        (0,_eventListeners_js__WEBPACK_IMPORTED_MODULE_1__.showFormAndCover)();
        _todo_js__WEBPACK_IMPORTED_MODULE_2__.projects[currentProject].flag = true;
        setupEditForm(_todo_js__WEBPACK_IMPORTED_MODULE_2__.projects[currentProject].tasks[title]);

    });
};

function setupEditForm(task) {
    console.log(task);
    document.getElementById("title").value = task.title;
    document.getElementById("description").value = task.description;

    // date doesn't work, fix!!!
    //document.getElementById("dueDate").value = formatDate(task.dueDate);
    document.getElementById("priority").value = task.priority;

    const gbutton = document.querySelector(".green");
    //task.add = false;
    gbutton.addEventListener('click', () => {
        const currentProject = document.querySelector(".selected").textContent;
        if (_todo_js__WEBPACK_IMPORTED_MODULE_2__.projects[currentProject].flag) {
            const temp = task.title;
            task.title = document.getElementById("title").value;
            task.description = document.getElementById("description").value;

            task.priority = document.getElementById("priority").value;

            // name of the object and the title are the same, this is why
            // if you edit the title name, the function can no longer find the
            // right object after deletion, hence deep copy and remove previous
            // one
            if (temp != task.title) {
                _todo_js__WEBPACK_IMPORTED_MODULE_2__.projects[currentProject].tasks[task.title] =
                    JSON.parse(JSON.stringify(_todo_js__WEBPACK_IMPORTED_MODULE_2__.projects[currentProject].tasks[temp]));
                delete _todo_js__WEBPACK_IMPORTED_MODULE_2__.projects[currentProject].tasks[temp];
            }

            (0,_eventListeners_js__WEBPACK_IMPORTED_MODULE_1__.resetForm)();
            _todo_js__WEBPACK_IMPORTED_MODULE_2__.projects[currentProject].flag = false;
            // save to local when you add task or project
            localStorage.setItem('projects', JSON.stringify(_todo_js__WEBPACK_IMPORTED_MODULE_2__.projects));
            location.reload();
        }

    })

}



/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteTask": () => (/* binding */ deleteTask),
/* harmony export */   "projectFactory": () => (/* binding */ projectFactory),
/* harmony export */   "projects": () => (/* binding */ projects),
/* harmony export */   "todo": () => (/* binding */ todo)
/* harmony export */ });
function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch (e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}

const projects = {
    HOME: {
        tasks: {
        },
        id: "Pr0",
        flag: false,
    },
};

if (storageAvailable) {
    var retrievedObject = localStorage.getItem('projects');
    retrievedObject = JSON.parse(retrievedObject);
    for (let em in retrievedObject) {
        projects[em] = retrievedObject[em];
    }
    console.log(projects);
    //projects = localStorage.getItem('projects');
}

const todo = (title, description, dueDate, priority, id) => {
    return { title, description, dueDate, priority, id };
};

function deleteTask(project, task) {
    console.log(project);
    delete projects[project].tasks[task.title];
    // we are actually deleting, not just erasing from screen!!!
    localStorage.setItem('projects', JSON.stringify(projects));
}

const projectFactory = (title, dueDate, id) => {
    return { title, dueDate, id };
};

// temp


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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _eventListeners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eventListeners */ "./src/eventListeners.js");
/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./date */ "./src/date.js");
/* harmony import */ var _control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./control */ "./src/control.js");





(0,_control__WEBPACK_IMPORTED_MODULE_3__.loadFromStorage)();
/*
    TODO:
    - Configure dates properly
        Two types of tasks:
            1. Something that needs to be done on a specific day. It can have a
                dueDate/dueHour, but it's optional. It only shows on one day
            2. Something that needs to be done till a specified dueDate. So it
                shows every day until the dueDate. Expired section might be 
                of use.

            Idea:
            Always show all that can be shown. If it happens that one of them
            expired simply nedote so using red border or (expired) tag.
            It can be shown if its start day is today or earlier. -///-



    - Add a form for user input -///-
    - Task changes:
            1) Style changes: Redo task squares -///-, maybe not
            2) Task description/edit system -///-
            3) Make priorites matter, border color -///-
    - FIX remove button, namely when you don't input anything in the form
        multiple tasks are made event though there is only one saved in the 
        object. it shows correctly after refresh -///-
    - FIX: prevent from changing projects when the form is opened,
        consider adding a cover just like in the library project -///-
    - FIX: project/shortcut name letters going to new line, instead only words
        -///- but can't fix long names, maybe find a way to add "-" at end when
        breaking
    - Add Local storage -///-
    - Add a confirmation form when attempting to delete a project -///-
    - Add media queries
    - change projectId and id to calculate id based on what is the biggest id
        present on the current project/projects and then add 1, this way
        it is not based on length and dupe bugs do not appear -///-
    - Fix dates for editing!
    - Do something with project dates, maybe content border to signify the late
        project
    - Make a refresh function, that reloads, maybe just changeProject so you
        don't have to location.reload()
*/



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNLE9BQU8sT0FBTyxLQUFLLFlBQVksTUFBTSxPQUFPLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLE9BQU8sWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxPQUFPLFNBQVMsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsNkJBQTZCLGlCQUFpQixnQkFBZ0IsNkJBQTZCLHlCQUF5QixzQkFBc0IsdUJBQXVCLHNC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QUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOzs7Ozs7O1VDM0RBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDSztBQUNWO0FBQzRCOztBQUU1Qyx5REFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb250cm9sLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kYXRlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2V2ZW50TGlzdGVuZXJzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zZXR1cFRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgLS1uZXV0cmFsOiAjZjVmNWY1O1xcbiAgICAtLXZpb2xldDogd2hpdGU7XFxuICAgIC0tc3RvbmU6ICM2ZTYyNzk7XFxuICAgIC0temluYzogIzNmM2Y0NjtcXG4gICAgLS1ob3ZlcjogcmdiKDY5LCAzMSwgODMpO1xcblxcbn1cXG5cXG5ib2R5LFxcbmh0bWwge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI3NpZGViYXIge1xcbiAgICBmbGV4OiAxO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS16aW5jKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI3NpZGViYXI+ZGl2IHtcXG4gICAgZm9udC1zaXplOiA2dmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICA7XFxufVxcblxcbi5ob21lIHtcXG4gICAgZmxleDogMTtcXG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IGJsYWNrIHNvbGlkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdG9uZSk7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4jcHJvamVjdHMge1xcbiAgICBmbGV4OiA3O1xcbn1cXG5cXG4uaG9tZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGZsZXg6IDM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmV4cGFuZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5leHBhbmQ+ZGl2OmZpcnN0LWNoaWxkLFxcbiNhZGRQcm9qZWN0IHtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5leHBhbmQ+KiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jYWRkUHJvamVjdCB7XFxuICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3RvbmUpO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuI2FkZFByb2plY3Q6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyKTtcXG59XFxuXFxuLmV4cGFuZD5kaXY6Zmlyc3QtY2hpbGQge1xcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgYmxhY2s7XFxufVxcblxcblxcbi5leHBhbmQgLnNob3J0Y3V0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3RvbmUpO1xcbiAgICBwYWRkaW5nOiA1JTtcXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGJsYWNrO1xcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5leHBhbmQgLnNob3J0Y3V0cyB7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIG1heC1oZWlnaHQ6IDcwdmg7XFxufVxcblxcbi5zaG9ydGN1dDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZXhwYW5kPmRpdiB7XFxuICAgIGZsZXg6IDU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI3Rhc2tzIHtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzNXZoLCAxZnIpKTtcXG4gICAgZ3JpZC1nYXA6IDJ2aDtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDMlO1xcbn1cXG5cXG4jdGFza3M+ZGl2IHtcXG4gICAgaGVpZ2h0OiAzNXZoO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMCwgMTQ3LCAyMjMpO1xcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDAsIDE0NywgMjIzLCAxKSAwJSxcXG4gICAgICAgICAgICByZ2JhKDIxMSwgMjM5LCAyNDIsIDEpIDQ5JSwgcmdiYSgxNywgMTYsIDE2LCAxKSAxMDAlKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgwLCAycmVtLCBjYWxjKDJyZW0gKyAyLjV2aCkpO1xcbn1cXG5cXG4jdGFza3M+ZGl2PmRpdiB7XFxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XFxufVxcblxcbi5NdXN0IHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDIzMiwgNSwgNSk7XFxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoMjMyLCA1LCA1LCAxKSAwJSxcXG4gICAgICAgICAgICByZ2JhKDIxMywgMTQ0LCAxNDQsIDEpIDQ5JSwgcmdiYSgxNywgMTYsIDE2LCAxKSAxMDAlKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uTmVjZXNzYXJ5IHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDIzMiwgMTA3LCA1KTtcXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgyMzIsIDEwNywgNSwgMSkgMCUsXFxuICAgICAgICAgICAgcmdiYSgyMzUsIDIwMCwgMTYzLCAxKSA0OSUsIHJnYmEoMTcsIDE2LCAxNiwgMSkgMTAwJSkgIWltcG9ydGFudDtcXG59XFxuXFxuLk1heWJlIHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDE5MywgMjMyLCA1KTtcXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgxOTMsIDIzMiwgNSwgMSkgMCUsXFxuICAgICAgICAgICAgcmdiYSgyMjQsIDIzNSwgMTYzLCAxKSA0OSUsIHJnYmEoMTcsIDE2LCAxNiwgMSkgMTAwJSkgIWltcG9ydGFudDtcXG59XFxuXFxuI2NvbnRlbnQ+Kjpub3QoI3Rhc2tzKSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG59XFxuXFxuLmhlYWRlciAuUlBCIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICBjb2xvcjogcmdiKDg1LCAzLCAxOSk7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgcGFkZGluZzogMSU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDA7XFxufVxcblxcbiNhZGRUYXNrIHtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuI2FkZFRhc2s6aG92ZXIge1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2FkZFRhc2s6YWN0aXZlIHtcXG4gICAgb3BhY2l0eTogMC4yO1xcbn1cXG5cXG4uc2VsZWN0ZWQge1xcbiAgICBib3JkZXItcmlnaHQ6IDEwcHggZ3Jvb3ZlIHZhcigtLWhvdmVyKTtcXG59XFxuXFxuI2RhdGUge1xcbiAgICB3aWR0aDogNDB2aCAhaW1wb3J0YW50O1xcbiAgICBmb250LXNpemU6IDV2aDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiBncmV5O1xcbn1cXG5cXG4uY2FsTGVmdCB7XFxuICAgIG1hcmdpbi1yaWdodDogMnZoO1xcbn1cXG5cXG4uY2FsUmlnaHQge1xcbiAgICBtYXJnaW4tbGVmdDogMnZoO1xcbn1cXG5cXG4ubmF2aWdhdGVjYWwge1xcbiAgICBmb250LXNpemU6IDh2aDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuI3Rhc2tGb3JtIHtcXG4gICAgd2lkdGg6IDY1dmg7XFxuICAgIGhlaWdodDogNjV2aDtcXG4gICAgbGVmdDogY2FsYyg1MCUgLSAxMHZoKTtcXG4gICAgdG9wOiBjYWxjKDUwJSAtIDMwdmgpO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA1JTtcXG4gICAgZm9udC1zaXplOiAzdmg7XFxufVxcblxcbiNwcm9qZWN0Rm9ybSB7XFxuICAgIHdpZHRoOiA2NXZoO1xcbiAgICBoZWlnaHQ6IDU1dmg7XFxuICAgIGxlZnQ6IGNhbGMoNTAlIC0gMTB2aCk7XFxuICAgIHRvcDogY2FsYyg1MCUgLSAzMHZoKTtcXG4gICAgcGFkZGluZzogMCA1JSAwIDUlO1xcbiAgICBmb250LXNpemU6IDN2aDtcXG59XFxuXFxuI2NvbmZpcm1hdGlvbkZvcm0ge1xcbiAgICB3aWR0aDogNTB2aDtcXG4gICAgaGVpZ2h0OiAzNXZoO1xcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDEwdmgpO1xcbiAgICB0b3A6IGNhbGMoNTAlIC0gMzB2aCk7XFxuICAgIHBhZGRpbmc6IDAgMyUgMCAzJTtcXG4gICAgZm9udC1zaXplOiAzdmg7XFxufVxcblxcbiNwcm9qZWN0Rm9ybSxcXG4jdGFza0Zvcm0sXFxuI2NvbmZpcm1hdGlvbkZvcm0ge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3RvbmUpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGJvcmRlcjogNXB4IHZhcigtLWhvdmVyKSBzb2xpZDtcXG59XFxuXFxuLmNvdmVyIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI3Rhc2tGb3JtIGRpdixcXG4jcHJvamVjdEZvcm0gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI3Rhc2tGb3JtIGxhYmVsLFxcbiNwcm9qZWN0Rm9ybSBsYWJlbCB7XFxuICAgIGZsZXg6IDE7XFxuICAgIG1pbi13aWR0aDogMjB2aDtcXG4gICAgZm9udC1zaXplOiAzdmg7XFxufVxcblxcbiN0YXNrRm9ybSBpbnB1dCxcXG4jdGFza0Zvcm0gc2VsZWN0IHtcXG4gICAgZmxleDogNjtcXG4gICAgbWluLXdpZHRoOiAzMHZoO1xcbn1cXG5cXG4jZGVzY3JpcHRpb24sXFxuI3Rhc2tGb3JtIGlucHV0LFxcbiNwcmlvcml0eSxcXG4jcHJval90aXRsZSxcXG4jcHJval9kdWVEYXRlIHtcXG4gICAgZm9udC1zaXplOiAydmg7XFxuICAgIHBhZGRpbmc6IDElO1xcbn1cXG5cXG4jZGVzY3JpcHRpb24ge1xcbiAgICBoZWlnaHQ6IDIwdmg7XFxuICAgIG1heC13aWR0aDogMzB2aDtcXG59XFxuXFxuLnJlZEJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLmdyZWVuQnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ3LCAyNTUsIDQ3KTtcXG59XFxuXFxuLnJlZEJ0bixcXG4uZ3JlZW5CdG4ge1xcbiAgICBmb250LXNpemU6IDN2aDtcXG4gICAgcGFkZGluZzogMTAlO1xcbiAgICB3aWR0aDogMTV2aDtcXG4gICAgaGVpZ2h0OiAwLjV2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mYnRuIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmV4cGlyZWQge1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCByZWQ7XFxufVxcblxcbi50YXNrX2Rlc2Mge1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBmbGV4OiA2O1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLnRhc2tfZHVlRGF0ZSB7XFxuICAgIGZsZXg6IDE7XFxufVxcblxcbi50YXNrX3RpdGxlLCAudGFza19kZXNjLCAudGFza19kdWVEYXRlIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yMTIpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi50YXNrX3RpdGxlIHtcXG4gICAgZmxleDogMTtcXG4gICAgcGFkZGluZzogMCA2JTtcXG59XFxuXFxuLnRhc2tCdXR0b25zICA+IGJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBvcGFjaXR5OiAwLjU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxVQUFVO0lBQ1YsU0FBUztJQUNULHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysd0JBQXdCOztBQUU1Qjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLE9BQU87SUFDUCw2QkFBNkI7SUFDN0IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1COztBQUV2Qjs7QUFFQTtJQUNJLE9BQU87SUFDUCw4QkFBOEI7SUFDOUIsOEJBQThCO0lBQzlCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLE9BQU87QUFDWDs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksT0FBTztJQUNQLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7O0lBRUksT0FBTztJQUNQLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLDhCQUE4QjtJQUM5QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xD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QUFXO0FBQ2Y7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsT0FBTztJQUNQLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLE9BQU87QUFDWDs7QUFFQTtJQUNJLDZDQUE2QztJQUM3QyxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxPQUFPO0lBQ1AsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgLS1uZXV0cmFsOiAjZjVmNWY1O1xcbiAgICAtLXZpb2xldDogd2hpdGU7XFxuICAgIC0tc3RvbmU6ICM2ZTYyNzk7XFxuICAgIC0temluYzogIzNmM2Y0NjtcXG4gICAgLS1ob3ZlcjogcmdiKDY5LCAzMSwgODMpO1xcblxcbn1cXG5cXG5ib2R5LFxcbmh0bWwge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI3NpZGViYXIge1xcbiAgICBmbGV4OiAxO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS16aW5jKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI3NpZGViYXI+ZGl2IHtcXG4gICAgZm9udC1zaXplOiA2dmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICA7XFxufVxcblxcbi5ob21lIHtcXG4gICAgZmxleDogMTtcXG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IGJsYWNrIHNvbGlkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdG9uZSk7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4jcHJvamVjdHMge1xcbiAgICBmbGV4OiA3O1xcbn1cXG5cXG4uaG9tZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGZsZXg6IDM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmV4cGFuZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5leHBhbmQ+ZGl2OmZpcnN0LWNoaWxkLFxcbiNhZGRQcm9qZWN0IHtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5leHBhbmQ+KiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jYWRkUHJvamVjdCB7XFxuICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3RvbmUpO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuI2FkZFByb2plY3Q6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyKTtcXG59XFxuXFxuLmV4cGFuZD5kaXY6Zmlyc3QtY2hpbGQge1xcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgYmxhY2s7XFxufVxcblxcblxcbi5leHBhbmQgLnNob3J0Y3V0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3RvbmUpO1xcbiAgICBwYWRkaW5nOiA1JTtcXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGJsYWNrO1xcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5leHBhbmQgLnNob3J0Y3V0cyB7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIG1heC1oZWlnaHQ6IDcwdmg7XFxufVxcblxcbi5zaG9ydGN1dDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZXhwYW5kPmRpdiB7XFxuICAgIGZsZXg6IDU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI3Rhc2tzIHtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzNXZoLCAxZnIpKTtcXG4gICAgZ3JpZC1nYXA6IDJ2aDtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDMlO1xcbn1cXG5cXG4jdGFza3M+ZGl2IHtcXG4gICAgaGVpZ2h0OiAzNXZoO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMCwgMTQ3LCAyMjMpO1xcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDAsIDE0NywgMjIzLCAxKSAwJSxcXG4gICAgICAgICAgICByZ2JhKDIxMSwgMjM5LCAyNDIsIDEpIDQ5JSwgcmdiYSgxNywgMTYsIDE2LCAxKSAxMDAlKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgwLCAycmVtLCBjYWxjKDJyZW0gKyAyLjV2aCkpO1xcbn1cXG5cXG4jdGFza3M+ZGl2PmRpdiB7XFxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XFxufVxcblxcbi5NdXN0IHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDIzMiwgNSwgNSk7XFxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoMjMyLCA1LCA1LCAxKSAwJSxcXG4gICAgICAgICAgICByZ2JhKDIxMywgMTQ0LCAxNDQsIDEpIDQ5JSwgcmdiYSgxNywgMTYsIDE2LCAxKSAxMDAlKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uTmVjZXNzYXJ5IHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDIzMiwgMTA3LCA1KTtcXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgyMzIsIDEwNywgNSwgMSkgMCUsXFxuICAgICAgICAgICAgcmdiYSgyMzUsIDIwMCwgMTYzLCAxKSA0OSUsIHJnYmEoMTcsIDE2LCAxNiwgMSkgMTAwJSkgIWltcG9ydGFudDtcXG59XFxuXFxuLk1heWJlIHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDE5MywgMjMyLCA1KTtcXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgxOTMsIDIzMiwgNSwgMSkgMCUsXFxuICAgICAgICAgICAgcmdiYSgyMjQsIDIzNSwgMTYzLCAxKSA0OSUsIHJnYmEoMTcsIDE2LCAxNiwgMSkgMTAwJSkgIWltcG9ydGFudDtcXG59XFxuXFxuI2NvbnRlbnQ+Kjpub3QoI3Rhc2tzKSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG59XFxuXFxuLmhlYWRlciAuUlBCIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICBjb2xvcjogcmdiKDg1LCAzLCAxOSk7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgcGFkZGluZzogMSU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDA7XFxufVxcblxcbiNhZGRUYXNrIHtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuI2FkZFRhc2s6aG92ZXIge1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2FkZFRhc2s6YWN0aXZlIHtcXG4gICAgb3BhY2l0eTogMC4yO1xcbn1cXG5cXG4uc2VsZWN0ZWQge1xcbiAgICBib3JkZXItcmlnaHQ6IDEwcHggZ3Jvb3ZlIHZhcigtLWhvdmVyKTtcXG59XFxuXFxuI2RhdGUge1xcbiAgICB3aWR0aDogNDB2aCAhaW1wb3J0YW50O1xcbiAgICBmb250LXNpemU6IDV2aDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiBncmV5O1xcbn1cXG5cXG4uY2FsTGVmdCB7XFxuICAgIG1hcmdpbi1yaWdodDogMnZoO1xcbn1cXG5cXG4uY2FsUmlnaHQge1xcbiAgICBtYXJnaW4tbGVmdDogMnZoO1xcbn1cXG5cXG4ubmF2aWdhdGVjYWwge1xcbiAgICBmb250LXNpemU6IDh2aDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuI3Rhc2tGb3JtIHtcXG4gICAgd2lkdGg6IDY1dmg7XFxuICAgIGhlaWdodDogNjV2aDtcXG4gICAgbGVmdDogY2FsYyg1MCUgLSAxMHZoKTtcXG4gICAgdG9wOiBjYWxjKDUwJSAtIDMwdmgpO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA1JTtcXG4gICAgZm9udC1zaXplOiAzdmg7XFxufVxcblxcbiNwcm9qZWN0Rm9ybSB7XFxuICAgIHdpZHRoOiA2NXZoO1xcbiAgICBoZWlnaHQ6IDU1dmg7XFxuICAgIGxlZnQ6IGNhbGMoNTAlIC0gMTB2aCk7XFxuICAgIHRvcDogY2FsYyg1MCUgLSAzMHZoKTtcXG4gICAgcGFkZGluZzogMCA1JSAwIDUlO1xcbiAgICBmb250LXNpemU6IDN2aDtcXG59XFxuXFxuI2NvbmZpcm1hdGlvbkZvcm0ge1xcbiAgICB3aWR0aDogNTB2aDtcXG4gICAgaGVpZ2h0OiAzNXZoO1xcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDEwdmgpO1xcbiAgICB0b3A6IGNhbGMoNTAlIC0gMzB2aCk7XFxuICAgIHBhZGRpbmc6IDAgMyUgMCAzJTtcXG4gICAgZm9udC1zaXplOiAzdmg7XFxufVxcblxcbiNwcm9qZWN0Rm9ybSxcXG4jdGFza0Zvcm0sXFxuI2NvbmZpcm1hdGlvbkZvcm0ge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3RvbmUpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGJvcmRlcjogNXB4IHZhcigtLWhvdmVyKSBzb2xpZDtcXG59XFxuXFxuLmNvdmVyIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI3Rhc2tGb3JtIGRpdixcXG4jcHJvamVjdEZvcm0gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI3Rhc2tGb3JtIGxhYmVsLFxcbiNwcm9qZWN0Rm9ybSBsYWJlbCB7XFxuICAgIGZsZXg6IDE7XFxuICAgIG1pbi13aWR0aDogMjB2aDtcXG4gICAgZm9udC1zaXplOiAzdmg7XFxufVxcblxcbiN0YXNrRm9ybSBpbnB1dCxcXG4jdGFza0Zvcm0gc2VsZWN0IHtcXG4gICAgZmxleDogNjtcXG4gICAgbWluLXdpZHRoOiAzMHZoO1xcbn1cXG5cXG4jZGVzY3JpcHRpb24sXFxuI3Rhc2tGb3JtIGlucHV0LFxcbiNwcmlvcml0eSxcXG4jcHJval90aXRsZSxcXG4jcHJval9kdWVEYXRlIHtcXG4gICAgZm9udC1zaXplOiAydmg7XFxuICAgIHBhZGRpbmc6IDElO1xcbn1cXG5cXG4jZGVzY3JpcHRpb24ge1xcbiAgICBoZWlnaHQ6IDIwdmg7XFxuICAgIG1heC13aWR0aDogMzB2aDtcXG59XFxuXFxuLnJlZEJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLmdyZWVuQnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ3LCAyNTUsIDQ3KTtcXG59XFxuXFxuLnJlZEJ0bixcXG4uZ3JlZW5CdG4ge1xcbiAgICBmb250LXNpemU6IDN2aDtcXG4gICAgcGFkZGluZzogMTAlO1xcbiAgICB3aWR0aDogMTV2aDtcXG4gICAgaGVpZ2h0OiAwLjV2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mYnRuIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmV4cGlyZWQge1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCByZWQ7XFxufVxcblxcbi50YXNrX2Rlc2Mge1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBmbGV4OiA2O1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLnRhc2tfZHVlRGF0ZSB7XFxuICAgIGZsZXg6IDE7XFxufVxcblxcbi50YXNrX3RpdGxlLCAudGFza19kZXNjLCAudGFza19kdWVEYXRlIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yMTIpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi50YXNrX3RpdGxlIHtcXG4gICAgZmxleDogMTtcXG4gICAgcGFkZGluZzogMCA2JTtcXG59XFxuXFxuLnRhc2tCdXR0b25zICA+IGJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBvcGFjaXR5OiAwLjU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgZXJhc2VUYXNrc0QsIGFkZFRhc2tELCBhZGRQcm9qZWN0RCB9IGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCB7IHNldHVwVGFza0QgfSBmcm9tICcuL3NldHVwVGFzay5qcyc7XG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gJy4vdG9kby5qcyc7XG5pbXBvcnQgeyBhZGRQcm9qZWN0TGlzdGVuZXIgfSBmcm9tICcuL2V2ZW50TGlzdGVuZXJzLmpzJztcblxuXG4vLyBmZWx0IGxpa2UgdGhpcyBkZXNlcnZlcyBhIHNlcGVyYXRlIG1vZHVsZSwgc2luY2UgaXQncyBub3QgcmVhbGx5IERPTSBtYW5pcC5cbi8vIGFzIHRoZSBuYW1lIHN1Z2dlc3RzLCBjb250cm9saW5nIHRoZSBmbG93IGhlcmVcbmNvbnN0IGNoYW5nZVByb2plY3REID0gKHByb2plY3ROYW1lKSA9PiB7XG4gICAgZXJhc2VUYXNrc0QoKTtcbiAgICBpZiAocHJvamVjdHNbcHJvamVjdE5hbWVdLnRhc2tzICE9IHt9KSB7XG4gICAgICAgIGZvciAobGV0IGVtIGluIHByb2plY3RzW3Byb2plY3ROYW1lXS50YXNrcykge1xuICAgICAgICAgICAgYWRkVGFza0QocHJvamVjdHNbcHJvamVjdE5hbWVdLnRhc2tzW2VtXSk7XG4gICAgICAgICAgICBzZXR1cFRhc2tEKHByb2plY3RzW3Byb2plY3ROYW1lXS50YXNrc1tlbV0sIHByb2plY3ROYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAocHJvamVjdE5hbWUgIT0gXCJIT01FXCIpIHtcbiAgICAgICAgYWRkUlBCKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmVtb3ZlUlBCKCk7XG4gICAgfVxufTtcblxuLy8gUlBCIC0gcmVtb3ZlIHByb2plY3QgYnV0dG9uXG5mdW5jdGlvbiBhZGRSUEIoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJcIik7XG4gICAgaWYgKGhlYWRlci5sYXN0Q2hpbGQudGV4dENvbnRlbnQgIT0gXCJYXCIpIHtcbiAgICAgICAgY29uc3QgZGVsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgZGVsQnRuLnRleHRDb250ZW50ID0gXCJYXCI7XG4gICAgICAgIGRlbEJ0bi5jbGFzc0xpc3QuYWRkKFwiUlBCXCIpO1xuICAgICAgICBkZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBzaG93Q29uZmlybWF0aW9uRm9ybSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKGRlbEJ0bik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzaG93Q29uZmlybWF0aW9uRm9ybSgpIHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb25maXJtYXRpb25Gb3JtXCIpO1xuICAgIGZvcm0uc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgIGNvbnN0IGNvdmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb3ZlclwiKTtcbiAgICBjb3Zlci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xufVxuXG5mdW5jdGlvbiByZW1vdmVSUEIoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJcIik7XG4gICAgaGVhZGVyLmxhc3RDaGlsZC5yZW1vdmUoKTtcbn1cblxuZnVuY3Rpb24gb25DbGlja2luZ1JQQigpIHtcbiAgICAvLyBmaXJzdCBjaGVjayBpZiB5b3UgYWN0dWFsbHkgd2FudCB0byBkZWxldGVcbiAgICAvLyBnZXQgaWQsIGRlbGV0ZSBvbiBjb250ZW50IGFuZCB0aGVuIHNpZGViYXIgdXNpbmcgaWQuIHJldHVybiB0byBob21lXG4gICAgY29uc3QgcHJvamVjdE5hbWUyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWxlY3RlZFwiKS50ZXh0Q29udGVudDtcbiAgICBjb25zdCBwcm9qZWN0SUQgPSBwcm9qZWN0c1twcm9qZWN0TmFtZTJdLmlkO1xuICAgIGRlbGV0ZSBwcm9qZWN0c1twcm9qZWN0TmFtZTJdO1xuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtwcm9qZWN0SUR9YClcbiAgICBwcm9qZWN0LnJlbW92ZSgpO1xuICAgIGNvbnNvbGUubG9nKHByb2plY3RzKTtcblxuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI1ByMFwiKTtcbiAgICBob21lLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICBjaGFuZ2VQcm9qZWN0RChcIkhPTUVcIik7XG5cbiAgICAvLyBzYXZlIGJlY2F1c2UgeW91IHJlbW92ZWQgYSBwcm9qZWN0XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcbn1cblxuXG4vLyBsb2FkIGFsbCBwcm9qZWN0cyBhbmQgdGFza3MgZnJvbSB0aGUgbG9jYWwgc3RvcmFnZVxuY29uc3QgbG9hZEZyb21TdG9yYWdlID0gKCkgPT4ge1xuICAgIGZvciAobGV0IHByb2plY3QgaW4gcHJvamVjdHMpIHtcbiAgICAgICAgaWYgKHByb2plY3QgIT0gXCJIT01FXCIpIHtcbiAgICAgICAgICAgIGFkZFByb2plY3REKHByb2plY3RzW3Byb2plY3RdLCBwcm9qZWN0c1twcm9qZWN0XS5pZCk7XG4gICAgICAgICAgICBhZGRQcm9qZWN0TGlzdGVuZXIocHJvamVjdHNbcHJvamVjdF0uaWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChsZXQgdGFzayBpbiBwcm9qZWN0cy5IT01FLnRhc2tzKSB7XG4gICAgICAgIGFkZFRhc2tEKHByb2plY3RzLkhPTUUudGFza3NbdGFza10pO1xuICAgICAgICBzZXR1cFRhc2tEKHByb2plY3RzLkhPTUUudGFza3NbdGFza10sIFwiSE9NRVwiKTtcbiAgICB9XG59O1xuXG5leHBvcnQgeyBjaGFuZ2VQcm9qZWN0RCwgbG9hZEZyb21TdG9yYWdlLCBvbkNsaWNraW5nUlBCIH07IiwiaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi90b2RvXCI7XG5cbmNvbnN0IGNhbGVuZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkYXRlXCIpO1xuXG5jb25zdCB0b2RheSA9IGdldERhdGUoKTtcbmNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZURhdGVcIik7XG5kdWVEYXRlLnZhbHVlID0gZ2V0RGF0ZSgpO1xuY2FsZW5kZXIuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgdG9kYXkpO1xuY2FsZW5kZXIuc2V0QXR0cmlidXRlKFwibWluXCIsIHRvZGF5KTtcblxuXG5mdW5jdGlvbiBnZXREYXRlKCkge1xuICAgIHZhciBkID0gbmV3IERhdGUoKSxcbiAgICAgICAgbW9udGggPSAnJyArIChkLmdldE1vbnRoKCkgKyAxKSxcbiAgICAgICAgZGF5ID0gJycgKyBkLmdldERhdGUoKSxcbiAgICAgICAgeWVhciA9IGQuZ2V0RnVsbFllYXIoKTtcblxuICAgIGlmIChtb250aC5sZW5ndGggPCAyKVxuICAgICAgICBtb250aCA9ICcwJyArIG1vbnRoO1xuICAgIGlmIChkYXkubGVuZ3RoIDwgMilcbiAgICAgICAgZGF5ID0gJzAnICsgZGF5O1xuXG4gICAgcmV0dXJuIFt5ZWFyLCBtb250aCwgZGF5XS5qb2luKCctJyk7XG59XG5cbi8vIGlkZWFsbHkgeW91IHdvdWxkIGZvcm1hdCB0byBmaXQgbG9jYXRpb24sIGJ1dCB3aGF0IGEgcGFpbiBEOlxuZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlKSB7XG4gICAgZGF0ZSA9IGRhdGUuc3BsaXQoXCItXCIpO1xuICAgIHJldHVybiBbZGF0ZVsxXSwgZGF0ZVsyXSwgZGF0ZVswXV0uam9pbihcIi1cIik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdChzdHIpIHtcbiAgICBzdHIgPSBzdHIudG9TdHJpbmcoKTtcbiAgICBjb25zdCBtb250aCA9IGdldE1vbnRoRnJvbVN0cmluZyhzdHIuc3Vic3RyaW5nKDQsIDcpKTtcbiAgICBjb25zdCBkYXkgPSBzdHIuc3Vic3RyaW5nKDgsIDEwKTtcbiAgICBjb25zdCB5ZWFyID0gc3RyLnN1YnN0cmluZygxMSwgMTUpO1xuICAgIHJldHVybiBbZGF5LCBtb250aCwgeWVhcl07XG59XG5cbmZ1bmN0aW9uIGdldE1vbnRoRnJvbVN0cmluZyhtb24pIHtcbiAgICByZXR1cm4gbmV3IERhdGUoRGF0ZS5wYXJzZShtb24gKyBcIiAxLCAyMDEyXCIpKS5nZXRNb250aCgpICsgMTtcbn1cblxuY29uc3QgZXhwaXJlQ2hlY2sgPSAodGFzaykgPT4ge1xuICAgIC8vY29uc3QgdG9kYXlBcnIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVcIikudmFsdWUuc3BsaXQoXCItXCIpO1xuXG4gICAgY29uc3QgdG9kYXlBcnIgPSBmb3JtYXQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlXCIpLnZhbHVlQXNEYXRlKTtcbiAgICAvLyBbZGF5LCBtb250aCwgeWVhcl1cbiAgICAvLyBjb25zb2xlLmxvZyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVcIikudmFsdWVBc0RhdGUpO1xuICAgIC8vIGV4OiBXZWQgU2VwIDI4IDIwMjIgMDI6MDA6MDAgR01UKzAyMDAgKENlbnRyYWwgRXVyb3BlYW4gU3VtbWVyIFRpbWUpXG4gICAgY29uc3QgY3VycmVudFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdGVkXCIpLnRleHRDb250ZW50O1xuICAgIGNvbnNvbGUubG9nKHByb2plY3RzW2N1cnJlbnRQcm9qZWN0XS50YXNrcyk7XG4gICAgY29uc3QgYXJyID0gcHJvamVjdHNbY3VycmVudFByb2plY3RdLnRhc2tzW3Rhc2sudGl0bGVdLmR1ZURhdGUuc3BsaXQoXCItXCIpO1xuICAgIGlmICgrdG9kYXlBcnJbMF0gPiArYXJyWzFdIHx8ICt0b2RheUFyclsxXSA+ICthcnJbMF0gfHwgK3RvZGF5QXJyWzJdID5cbiAgICAgICAgICAgICthcnJbMl0pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgZ2V0RGF0ZSwgZm9ybWF0RGF0ZSwgZXhwaXJlQ2hlY2sgfTsiLCJpbXBvcnQgeyBleHBpcmVDaGVjayB9IGZyb20gXCIuL2RhdGVcIjtcblxuY29uc3QgYWRkVGFza0QgPSAodGFzaykgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoYCR7dGFzay5pZH1gKTtcbiAgICBcbiAgICBpZiAoZXhwaXJlQ2hlY2sodGFzaykpIHtcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJleHBpcmVkXCIpO1xuICAgIH0gXG5cbiAgICBjb25zdCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza3NcIik7XG4gICAgdGFza3MuYXBwZW5kQ2hpbGQoZGl2KTtcblxuXG59O1xuXG5jb25zdCBlcmFzZVRhc2tzRCA9ICgpID0+IHtcbiAgICBjb25zdCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza3NcIik7XG4gICAgd2hpbGUgKHRhc2tzLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgdGFza3MucmVtb3ZlQ2hpbGQodGFza3MubGFzdENoaWxkKTtcbiAgICB9XG59O1xuXG5jb25zdCBlcmFzZVRhc2tEID0gKGlkKSA9PiB7XG4gICAgY29uc3QgdGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2lkfWApO1xuICAgIHRhc2sucmVtb3ZlKCk7XG59O1xuXG5jb25zdCBhZGRQcm9qZWN0RCA9IChwcm9qZWN0LCBpZCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJzaG9ydGN1dFwiKTtcbiAgICBkaXYuaWQgPSBpZDtcbiAgICBkaXYudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuXG4gICAgY29uc3Qgc2hvcnRjdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaG9ydGN1dHNcIik7XG4gICAgc2hvcnRjdXRzLmFwcGVuZChkaXYpO1xufTtcblxuZXhwb3J0IHsgYWRkVGFza0QsIGVyYXNlVGFza3NELCBlcmFzZVRhc2tELCBhZGRQcm9qZWN0RCB9O1xuXG4vLyBEIGF0IHRoZSBlbmQgcmVwcmVzZW50cyBET01cbiIsImltcG9ydCB7IHByb2plY3RGYWN0b3J5LCBwcm9qZWN0cywgdG9kbyB9IGZyb20gJy4vdG9kby5qcyc7XG5pbXBvcnQgeyBhZGRQcm9qZWN0RCwgYWRkVGFza0QgfSBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQgeyBjaGFuZ2VQcm9qZWN0RCwgb25DbGlja2luZ1JQQiB9IGZyb20gJy4vY29udHJvbC5qcyc7XG5pbXBvcnQgeyBzZXR1cFRhc2tEIH0gZnJvbSAnLi9zZXR1cFRhc2suanMnO1xuaW1wb3J0IHsgZ2V0RGF0ZSwgZm9ybWF0RGF0ZSwgZXhwaXJlQ2hlY2sgfSBmcm9tICcuL2RhdGUuanMnO1xuXG4vLyBpdCByZXNldHMgZXZlcnkgdGltZSB3ZWJzaXRlIHJlZnJlc2hlcyBzbyBkdXBsaWNhdGlvbiBidWcgb2NjdXJzLFxuLy8gYW5kIGl0J3MgbW9yZSBlZmZpY2llbnQsIChsaXR0bGUgYml0IGxvbClcblxuY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkVGFza1wiKTtcbmFkZFRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgc2hvd0Zvcm1BbmRDb3ZlcigpO1xufSk7XG5cblxuLy8gbWFrZSBpdCBhcHBseSB0byBhbnkgZm9ybSBUT0RPT0RPRE9ET0RPRFxuZnVuY3Rpb24gc2hvd0Zvcm1BbmRDb3ZlcigpIHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrRm9ybVwiKTtcbiAgICBjb25zdCBjb3ZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY292ZXJcIik7XG4gICAgY292ZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICBmb3JtLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbn1cblxuLy8gdGhvdWdodCBpdCB3b3VsZCBlYXN5IHRvIHB1dCBhbGwgZm9ybSByZWxhdGVkIGNvZGUgdG8gdGhlIHN1Ym1pdCBidG4gbGlzdGVuZXJcbmNvbnN0IGdidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdyZWVuXCIpO1xuZ2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAvLyBydW4gb25seSBpZiBub3QgZWRpdGluZywgd2UgaGF2ZSAyIGV2ZW50IGxpc3RuZXJzIG9uIG9uZSBidXR0b25cbiAgICAvLyBzbyB0aGlzIGZvcmNlcyB0aGUgb3RoZXIgb25lIHRvIHdvcmsgYWxvbmUsIHdoaWNoIGlzIHdoYXQgd2Ugd2FudFxuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWxlY3RlZFwiKS50ZXh0Q29udGVudDtcbiAgICBpZiAoIXByb2plY3RzW2N1cnJlbnRQcm9qZWN0XS5mbGFnKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSSBSQU5cIik7XG5cbiAgICAgICAgY29uc3QgdGFzayA9IGdldFRhc2soKTtcblxuICAgICAgICByZXNldEZvcm0oKTtcblxuICAgICAgICAvLyBzZXQgZGVmYXVsdCBkYXRlLCBzbyBNTS1ERC1ZWVlZIGlzIG5vdCBzaG93biBvbiBmb3JtPz8/Pz9cbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlRGF0ZVwiKTtcbiAgICAgICAgZHVlRGF0ZS52YWx1ZSA9IGdldERhdGUoKTtcblxuICAgICAgICAvLyBzZXR1cCB0YXNrXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWxlY3RlZFwiKS50ZXh0Q29udGVudDtcbiAgICAgICAgcHJvamVjdHNbY3VycmVudFByb2plY3RdLnRhc2tzW3Rhc2sudGl0bGVdID0gdGFzaztcbiAgICAgICAgYWRkVGFza0QodGFzaywgY3VycmVudFByb2plY3QpO1xuICAgICAgICBzZXR1cFRhc2tEKHRhc2ssIGN1cnJlbnRQcm9qZWN0KTtcblxuXG4gICAgICAgIC8vIHNhdmUgdG8gbG9jYWwgd2hlbiB5b3UgYWRkIHRhc2sgb3IgcHJvamVjdFxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0cyk7XG59KTtcblxuZnVuY3Rpb24gcmVzZXRGb3JtKCkge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tGb3JtXCIpO1xuICAgIGNvbnN0IGNvdmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb3ZlclwiKTtcbiAgICBmb3JtLnJlc2V0KCk7XG4gICAgZm9ybS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICBjb3Zlci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbiAgICAvLyB0aGlzIGlzIGFsc28gZGVmYXVsdCwgcHJlc2VudCBpbiBkYXRlLmpzIVxuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZURhdGVcIik7XG4gICAgZHVlRGF0ZS52YWx1ZSA9IGdldERhdGUoKTtcbn1cblxuY29uc3QgcmJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVkXCIpO1xucmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICByZXNldEZvcm0oKTtcbn0pO1xuXG4vLyBjb3VsZG4ndCBnZXQgc3VibWl0IHR5cGUgYnV0dG9uIHRvIHdvcmssIHNvIG5lZWRlZCBhIGZ1bmN0aW9uIHRvIGdldCB2YWx1ZXNcbi8vIGZyb20gdGhlIGZvcm0sIHRoaXMgaXMgaXRcbmZ1bmN0aW9uIGdldFRhc2soKSB7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlXCIpLnZhbHVlO1xuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWxlY3RlZFwiKS50ZXh0Q29udGVudDtcbiAgICBpZiAoIXByb2plY3RzW2N1cnJlbnRQcm9qZWN0XS50YXNrc1t0aXRsZV0pIHtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uXCIpLnZhbHVlO1xuICAgICAgICBsZXQgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlRGF0ZVwiKS52YWx1ZTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByaW9yaXR5XCIpLnZhbHVlO1xuXG4gICAgICAgIGlmICghZHVlRGF0ZSkge1xuICAgICAgICAgICAgZHVlRGF0ZSA9IGdldERhdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpZCA9IDA7XG4gICAgICAgIC8vIGVhc2llc3Qgd2F5IHRvIHByZXZlbnQgZHVwbGljYXRpb24gYnVnID0+IDIgdGFza3MgMSBpZFxuICAgICAgICBmb3IgKGxldCBlbSBpbiBwcm9qZWN0c1tjdXJyZW50UHJvamVjdF0udGFza3MpIHtcbiAgICAgICAgICAgIGlkID0gTWF0aC5tYXgoaWQsXG4gICAgICAgICAgICAgICAgTnVtYmVyKHByb2plY3RzW2N1cnJlbnRQcm9qZWN0XS50YXNrc1tlbV0uaWRcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoXCJ0YXNrXCIsIFwiXCIpKSArIDEpO1xuICAgICAgICB9XG5cblxuXG5cbiAgICAgICAgY29uc3QgdGFzayA9IHRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBmb3JtYXREYXRlKGR1ZURhdGUpLCBwcmlvcml0eSwgXCJ0YXNrXCIgK1xuICAgICAgICAgICAgaWQudG9TdHJpbmcoKSk7XG4gICAgICAgIHJldHVybiB0YXNrO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KFwiRmFpbHVyZSwgdGFzayB3aXRoIHRoZSBzYW1lIHRpdGxlIGFscmVhZHkgZXhpc3RzXCIpXG4gICAgfVxufVxuXG4vLyBzaW1pbGFyIHByb2JsZW0gYXMgdGFzayBpZFxuLy9sZXQgcHJvamVjdElEID0gT2JqZWN0LmtleXMocHJvamVjdHMpLmxlbmd0aDtcblxuLy8gYWdhaW50LCBuZWVkZWQgYSB3YXkgdG8gZ2V0IHZhbHVlcyBmcm9tIHRoZSBmb3JtXG5mdW5jdGlvbiBnZXRQcm9qZWN0KCkge1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qX3RpdGxlXCIpLnZhbHVlO1xuICAgIGlmICghcHJvamVjdHNbdGl0bGVdKSB7XG4gICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2pfZHVlRGF0ZVwiKS52YWx1ZTtcblxuICAgICAgICBsZXQgcHJvamVjdElEID0gMDtcbiAgICAgICAgLy8gZWFzaWVzdCB3YXkgdG8gcHJldmVudCBkdXBsaWNhdGlvbiBidWcgPT4gMiBwcm9qZWN0cyAxIGlkXG4gICAgICAgIGZvciAobGV0IGVtIGluIHByb2plY3RzKSB7XG4gICAgICAgICAgICBwcm9qZWN0SUQgPSBNYXRoLm1heChwcm9qZWN0SUQsXG4gICAgICAgICAgICAgICAgTnVtYmVyKHByb2plY3RzW2VtXS5pZC5yZXBsYWNlKFwiUHJcIiwgXCJcIikpICsgMSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcm9qID0gcHJvamVjdEZhY3RvcnkodGl0bGUsIGR1ZURhdGUsIFwiUHJcIiArIHByb2plY3RJRC50b1N0cmluZygpKTtcbiAgICAgICAgcmV0dXJuIHByb2o7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG59XG5cbmNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZFByb2plY3RcIik7XG5hZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IHByb2pGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0Rm9ybVwiKVxuICAgIHByb2pGb3JtLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgICBjb25zdCBjb3ZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY292ZXJcIik7XG4gICAgY292ZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbn0pO1xuXG5jb25zdCBwcm9qX2didXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2pfZ3JlZW5cIik7XG5wcm9qX2didXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdCA9IGdldFByb2plY3QoKTtcbiAgICBpZiAoIXByb2plY3QpIHtcbiAgICAgICAgYWxlcnQoXCJGYWlsdXJlLCBjYW4ndCByZXBlYXQgcHJvamVjdCBuYW1lXCIpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmVzZXRQcm9qRm9ybSgpO1xuICAgICAgICBwcm9qZWN0c1twcm9qZWN0LnRpdGxlXSA9IHByb2plY3Q7XG4gICAgICAgIHByb2plY3RzW3Byb2plY3QudGl0bGVdLnRhc2tzID0ge307XG4gICAgICAgIHByb2plY3RzW3Byb2plY3QudGl0bGVdLmlkID0gcHJvamVjdC5pZDtcblxuICAgICAgICBhZGRQcm9qZWN0RChwcm9qZWN0LCBwcm9qZWN0LmlkKTtcbiAgICAgICAgYWRkUHJvamVjdExpc3RlbmVyKHByb2plY3QuaWQpO1xuXG5cbiAgICAgICAgLy8gc2F2ZSB0byBsb2NhbCB3aGVuIHlvdSBhZGQgdGFzayBvciBwcm9qZWN0XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG4gICAgfVxufSk7XG5cbmNvbnN0IHByb2pfcmJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJval9yZWRcIik7XG5wcm9qX3JidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcmVzZXRQcm9qRm9ybSgpO1xufSk7XG5cbmZ1bmN0aW9uIHJlc2V0UHJvakZvcm0oKSB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdEZvcm1cIik7XG4gICAgY29uc3QgY292ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvdmVyXCIpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJval90aXRsZVwiKS52YWx1ZSA9IFwiXCI7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qX2R1ZURhdGVcIikudmFsdWUgPSBcIlwiO1xuICAgIGZvcm0uc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgY292ZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufVxuXG5jb25zdCBjb25mX2dyZWVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb25mX2dyZWVuXCIpO1xuY29uZl9ncmVlbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBvbkNsaWNraW5nUlBCKCk7XG4gICAgcmVzZXRDb25mRm9ybSgpO1xufSk7XG5cbmNvbnN0IGNvbmZfcmVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb25mX3JlZFwiKTtcbmNvbmZfcmVkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHJlc2V0Q29uZkZvcm0oKTtcbn0pXG5cbmZ1bmN0aW9uIHJlc2V0Q29uZkZvcm0oKSB7XG4gICAgY29uc3QgY29uZkZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbmZpcm1hdGlvbkZvcm1cIik7XG4gICAgY29uZkZvcm0uc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgY29uc3QgY292ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvdmVyXCIpO1xuICAgIGNvdmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn1cblxuXG5cblxuLy8gYWRkIElEIHRvIGVhY2ggcHJvamVjdCBhbmQgdGhlbiBcbmNvbnN0IGFkZFByb2plY3RMaXN0ZW5lciA9IChpZCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtpZH1gKTtcblxuICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0ZWQnKTtcbiAgICAgICAgdGVtcC5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICBjaGFuZ2VQcm9qZWN0RChwcm9qZWN0LnRleHRDb250ZW50KTtcbiAgICB9KTtcbn1cblxuYWRkUHJvamVjdExpc3RlbmVyKFwiUHIwXCIpO1xuXG4vLyBuYXZpZ2F0ZSBjYWxlbmRlciwgbGVmdCBhbmQgcmlnaHQgYXJyb3dcbmNvbnN0IGxlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FsTGVmdCcpO1xuY29uc3QgcmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FsUmlnaHQnKTtcbmNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RhdGUnKTtcbmxlZnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaW5wdXQuc3RlcERvd24oKTtcbiAgICBjaGVjaygpO1xufSk7XG5yaWdodC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpbnB1dC5zdGVwVXAoKTtcbiAgICBjaGVjaygpO1xufSk7XG4vLyBkYXRlIGlzIHBpY2tlZCBtYW51YWxseSBmcm9tIHRoZSBjYWxhbmRlciwgY2xpY2sgZG9lc24ndCB3b3JrXG5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgY2hlY2soKTtcbn0pXG5cbmZ1bmN0aW9uIGNoZWNrKCkge1xuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWxlY3RlZFwiKS50ZXh0Q29udGVudDtcbiAgICBmb3IgKGxldCBlbSBpbiBwcm9qZWN0c1tjdXJyZW50UHJvamVjdF0udGFza3MpIHtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7cHJvamVjdHNbY3VycmVudFByb2plY3RdLnRhc2tzW2VtXS5pZFxuICAgICAgICAgICAgfWApO1xuICAgICAgICBpZiAoZXhwaXJlQ2hlY2socHJvamVjdHNbY3VycmVudFByb2plY3RdLnRhc2tzW2VtXSkpIHtcbiAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwiZXhwaXJlZFwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QucmVtb3ZlKFwiZXhwaXJlZFwiKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IHsgYWRkUHJvamVjdExpc3RlbmVyLCBzaG93Rm9ybUFuZENvdmVyLCByZXNldEZvcm0gfSIsImltcG9ydCB7IGVyYXNlVGFza0QgfSBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQgeyBzaG93Rm9ybUFuZENvdmVyLCByZXNldEZvcm0gfSBmcm9tICcuL2V2ZW50TGlzdGVuZXJzLmpzJztcbmltcG9ydCB7IGRlbGV0ZVRhc2ssIHByb2plY3RzIH0gZnJvbSAnLi90b2RvLmpzJztcbmltcG9ydCB7IGZvcm1hdERhdGUgfSBmcm9tICcuL2RhdGUuanMnXG5cbmxldCB3b3JraW5nX3Rhc2ssIHdvcmtpbmdfcHJvamVjdDtcblxuXG4vLyBcIkNvbnRyb2xcIiBmdW5jdGlvblxuY29uc3Qgc2V0dXBUYXNrRCA9ICh0YXNrLCBwcm9qZWN0KSA9PiB7XG4gICAgd29ya2luZ190YXNrID0gdGFzazsgLy8gb2JqZWN0XG4gICAgd29ya2luZ19wcm9qZWN0ID0gcHJvamVjdDsgLy8gbmFtZVxuXG4gICAgdUkoKTtcbiAgICBzZXR1cEVkaXRCdXR0b24oKTtcbiAgICBzZXR1cERlbGV0ZUJ1dHRvbigpO1xufTtcblxuY29uc3QgdUkgPSAoKSA9PiB7XG4gICAgY29uc3QgdGFza05vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt3b3JraW5nX3Rhc2suaWR9YCk7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSB3b3JraW5nX3Rhc2sudGl0bGU7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRhc2tfdGl0bGVcIik7XG4gICAgdGFza05vZGUuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGVzYy50ZXh0Q29udGVudCA9IHdvcmtpbmdfdGFzay5kZXNjcmlwdGlvbjtcbiAgICBkZXNjLmNsYXNzTGlzdC5hZGQoXCJ0YXNrX2Rlc2NcIik7XG4gICAgdGFza05vZGUuYXBwZW5kQ2hpbGQoZGVzYyk7XG5cbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkdWVEYXRlLnRleHRDb250ZW50ID0gXCJEdWUgRGF0ZTogXCIgKyB3b3JraW5nX3Rhc2suZHVlRGF0ZTtcbiAgICBkdWVEYXRlLmNsYXNzTGlzdC5hZGQoXCJ0YXNrX2R1ZURhdGVcIik7XG4gICAgdGFza05vZGUuYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG5cbiAgICAvLyB0YXNrTm9kZS5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG5cbiAgICB0YXNrTm9kZS5jbGFzc0xpc3QuYWRkKGAke3dvcmtpbmdfdGFzay5wcmlvcml0eX1gKVxufTtcblxuXG5jb25zdCBzZXR1cERlbGV0ZUJ1dHRvbiA9ICgpID0+IHtcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidG4udGV4dENvbnRlbnQgPSBcIlhcIjtcblxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3dvcmtpbmdfdGFzay5pZH0gLnRhc2tCdXR0b25zYCk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGJ0bik7XG5cbiAgICAvLyB3ZSBuZWVkIHRvIG9idGFpbiB0YXNrIG9iamVjdCBmcm9tIHRoZSBidXR0b24gaXRzZWxmXG4gICAgLy8gYmVjYXVzZSBpZiB3ZSB1c2UgYW55IHZhcmlhYmxlIGl0IHdvbid0IGRlbGV0ZSBwcm9wZXJseVxuICAgIC8vIHRoaXMgaXMgZG9uZSB2aWEgbWF0Y2hpbmcgYnRuIGNsYXNzIG5hbWUgd2hpY2ggaXMgZXF1YWwgdG8gdGhlIGlkXG4gICAgLy8gb2YgdGhlIHRhc2sgdGhhdCB3ZSBhcmUgc2Vla2luZyBpbiBhIHByb2plY3RzIG9iamVjdFxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgdGFza0lEID0gWy4uLmJ0bi5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2xhc3NMaXN0XVswXTtcbiAgICAgICAgY29uc29sZS5sb2codGFza0lEKTtcbiAgICAgICAgY29uc3QgY3VycmVudFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdGVkXCIpLnRleHRDb250ZW50O1xuICAgICAgICBjb25zdCB0aXRsZSA9IGdldFRpdGxlKHRhc2tJRCwgY3VycmVudFByb2plY3QpO1xuXG4gICAgICAgIGRlbGV0ZVRhc2soY3VycmVudFByb2plY3QsIHByb2plY3RzW2N1cnJlbnRQcm9qZWN0XS50YXNrc1t0aXRsZV0pO1xuICAgICAgICBlcmFzZVRhc2tEKHRhc2tJRCk7XG4gICAgfSk7XG59O1xuXG5mdW5jdGlvbiBnZXRUaXRsZSh0YXNrSUQsIGN1cnJlbnRQcm9qZWN0KSB7XG5cbiAgICBsZXQgdGl0bGU7XG4gICAgZm9yIChsZXQgZW0gaW4gcHJvamVjdHNbY3VycmVudFByb2plY3RdLnRhc2tzKSB7XG4gICAgICAgIGlmIChwcm9qZWN0c1tjdXJyZW50UHJvamVjdF0udGFza3NbZW1dLmlkID09IHRhc2tJRCkge1xuICAgICAgICAgICAgdGl0bGUgPSBwcm9qZWN0c1tjdXJyZW50UHJvamVjdF0udGFza3NbZW1dLnRpdGxlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aXRsZTtcbn1cblxuY29uc3Qgc2V0dXBFZGl0QnV0dG9uID0gKCkgPT4ge1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ0bi50ZXh0Q29udGVudCA9IFwiRWRpdFwiO1xuXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChcInRhc2tCdXR0b25zXCIpO1xuXG4gICAgY29uc3QgdGFza05vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt3b3JraW5nX3Rhc2suaWR9YCk7XG4gICAgdGFza05vZGUuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoYnRuKTtcblxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgdGFza0lEID0gWy4uLmJ0bi5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2xhc3NMaXN0XVswXTtcbiAgICAgICAgY29uc3QgY3VycmVudFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdGVkXCIpLnRleHRDb250ZW50O1xuICAgICAgICBjb25zdCB0aXRsZSA9IGdldFRpdGxlKHRhc2tJRCwgY3VycmVudFByb2plY3QpO1xuICAgICAgICBzaG93Rm9ybUFuZENvdmVyKCk7XG4gICAgICAgIHByb2plY3RzW2N1cnJlbnRQcm9qZWN0XS5mbGFnID0gdHJ1ZTtcbiAgICAgICAgc2V0dXBFZGl0Rm9ybShwcm9qZWN0c1tjdXJyZW50UHJvamVjdF0udGFza3NbdGl0bGVdKTtcblxuICAgIH0pO1xufTtcblxuZnVuY3Rpb24gc2V0dXBFZGl0Rm9ybSh0YXNrKSB7XG4gICAgY29uc29sZS5sb2codGFzayk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZVwiKS52YWx1ZSA9IHRhc2sudGl0bGU7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvblwiKS52YWx1ZSA9IHRhc2suZGVzY3JpcHRpb247XG5cbiAgICAvLyBkYXRlIGRvZXNuJ3Qgd29yaywgZml4ISEhXG4gICAgLy9kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZURhdGVcIikudmFsdWUgPSBmb3JtYXREYXRlKHRhc2suZHVlRGF0ZSk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmlvcml0eVwiKS52YWx1ZSA9IHRhc2sucHJpb3JpdHk7XG5cbiAgICBjb25zdCBnYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ncmVlblwiKTtcbiAgICAvL3Rhc2suYWRkID0gZmFsc2U7XG4gICAgZ2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgY3VycmVudFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdGVkXCIpLnRleHRDb250ZW50O1xuICAgICAgICBpZiAocHJvamVjdHNbY3VycmVudFByb2plY3RdLmZsYWcpIHtcbiAgICAgICAgICAgIGNvbnN0IHRlbXAgPSB0YXNrLnRpdGxlO1xuICAgICAgICAgICAgdGFzay50aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVcIikudmFsdWU7XG4gICAgICAgICAgICB0YXNrLmRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvblwiKS52YWx1ZTtcblxuICAgICAgICAgICAgdGFzay5wcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJpb3JpdHlcIikudmFsdWU7XG5cbiAgICAgICAgICAgIC8vIG5hbWUgb2YgdGhlIG9iamVjdCBhbmQgdGhlIHRpdGxlIGFyZSB0aGUgc2FtZSwgdGhpcyBpcyB3aHlcbiAgICAgICAgICAgIC8vIGlmIHlvdSBlZGl0IHRoZSB0aXRsZSBuYW1lLCB0aGUgZnVuY3Rpb24gY2FuIG5vIGxvbmdlciBmaW5kIHRoZVxuICAgICAgICAgICAgLy8gcmlnaHQgb2JqZWN0IGFmdGVyIGRlbGV0aW9uLCBoZW5jZSBkZWVwIGNvcHkgYW5kIHJlbW92ZSBwcmV2aW91c1xuICAgICAgICAgICAgLy8gb25lXG4gICAgICAgICAgICBpZiAodGVtcCAhPSB0YXNrLnRpdGxlKSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdHNbY3VycmVudFByb2plY3RdLnRhc2tzW3Rhc2sudGl0bGVdID1cbiAgICAgICAgICAgICAgICAgICAgSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShwcm9qZWN0c1tjdXJyZW50UHJvamVjdF0udGFza3NbdGVtcF0pKTtcbiAgICAgICAgICAgICAgICBkZWxldGUgcHJvamVjdHNbY3VycmVudFByb2plY3RdLnRhc2tzW3RlbXBdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXNldEZvcm0oKTtcbiAgICAgICAgICAgIHByb2plY3RzW2N1cnJlbnRQcm9qZWN0XS5mbGFnID0gZmFsc2U7XG4gICAgICAgICAgICAvLyBzYXZlIHRvIGxvY2FsIHdoZW4geW91IGFkZCB0YXNrIG9yIHByb2plY3RcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG4gICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgfVxuXG4gICAgfSlcblxufVxuXG5leHBvcnQgeyBzZXR1cFRhc2tEIH07IiwiZnVuY3Rpb24gc3RvcmFnZUF2YWlsYWJsZSh0eXBlKSB7XG4gICAgbGV0IHN0b3JhZ2U7XG4gICAgdHJ5IHtcbiAgICAgICAgc3RvcmFnZSA9IHdpbmRvd1t0eXBlXTtcbiAgICAgICAgY29uc3QgeCA9ICdfX3N0b3JhZ2VfdGVzdF9fJztcbiAgICAgICAgc3RvcmFnZS5zZXRJdGVtKHgsIHgpO1xuICAgICAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oeCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZSBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbiAmJiAoXG4gICAgICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAgICAgICBlLmNvZGUgPT09IDIyIHx8XG4gICAgICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgICAgICBlLmNvZGUgPT09IDEwMTQgfHxcbiAgICAgICAgICAgIC8vIHRlc3QgbmFtZSBmaWVsZCB0b28sIGJlY2F1c2UgY29kZSBtaWdodCBub3QgYmUgcHJlc2VudFxuICAgICAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICAgICAgZS5uYW1lID09PSAnUXVvdGFFeGNlZWRlZEVycm9yJyB8fFxuICAgICAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICAgICAgZS5uYW1lID09PSAnTlNfRVJST1JfRE9NX1FVT1RBX1JFQUNIRUQnKSAmJlxuICAgICAgICAgICAgLy8gYWNrbm93bGVkZ2UgUXVvdGFFeGNlZWRlZEVycm9yIG9ubHkgaWYgdGhlcmUncyBzb21ldGhpbmcgYWxyZWFkeSBzdG9yZWRcbiAgICAgICAgICAgIChzdG9yYWdlICYmIHN0b3JhZ2UubGVuZ3RoICE9PSAwKTtcbiAgICB9XG59XG5cbmNvbnN0IHByb2plY3RzID0ge1xuICAgIEhPTUU6IHtcbiAgICAgICAgdGFza3M6IHtcbiAgICAgICAgfSxcbiAgICAgICAgaWQ6IFwiUHIwXCIsXG4gICAgICAgIGZsYWc6IGZhbHNlLFxuICAgIH0sXG59O1xuXG5pZiAoc3RvcmFnZUF2YWlsYWJsZSkge1xuICAgIHZhciByZXRyaWV2ZWRPYmplY3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKTtcbiAgICByZXRyaWV2ZWRPYmplY3QgPSBKU09OLnBhcnNlKHJldHJpZXZlZE9iamVjdCk7XG4gICAgZm9yIChsZXQgZW0gaW4gcmV0cmlldmVkT2JqZWN0KSB7XG4gICAgICAgIHByb2plY3RzW2VtXSA9IHJldHJpZXZlZE9iamVjdFtlbV07XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHByb2plY3RzKTtcbiAgICAvL3Byb2plY3RzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJyk7XG59XG5cbmNvbnN0IHRvZG8gPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgaWQpID0+IHtcbiAgICByZXR1cm4geyB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBpZCB9O1xufTtcblxuZnVuY3Rpb24gZGVsZXRlVGFzayhwcm9qZWN0LCB0YXNrKSB7XG4gICAgY29uc29sZS5sb2cocHJvamVjdCk7XG4gICAgZGVsZXRlIHByb2plY3RzW3Byb2plY3RdLnRhc2tzW3Rhc2sudGl0bGVdO1xuICAgIC8vIHdlIGFyZSBhY3R1YWxseSBkZWxldGluZywgbm90IGp1c3QgZXJhc2luZyBmcm9tIHNjcmVlbiEhIVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG59XG5cbmNvbnN0IHByb2plY3RGYWN0b3J5ID0gKHRpdGxlLCBkdWVEYXRlLCBpZCkgPT4ge1xuICAgIHJldHVybiB7IHRpdGxlLCBkdWVEYXRlLCBpZCB9O1xufTtcblxuLy8gdGVtcFxuZXhwb3J0IHsgcHJvamVjdHMsIHRvZG8sIGRlbGV0ZVRhc2ssIHByb2plY3RGYWN0b3J5IH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCAnLi9ldmVudExpc3RlbmVycyc7XG5pbXBvcnQgJy4vZGF0ZSc7XG5pbXBvcnQgeyBsb2FkRnJvbVN0b3JhZ2UgfSBmcm9tICcuL2NvbnRyb2wnO1xuXG5sb2FkRnJvbVN0b3JhZ2UoKTtcbi8qXG4gICAgVE9ETzpcbiAgICAtIENvbmZpZ3VyZSBkYXRlcyBwcm9wZXJseVxuICAgICAgICBUd28gdHlwZXMgb2YgdGFza3M6XG4gICAgICAgICAgICAxLiBTb21ldGhpbmcgdGhhdCBuZWVkcyB0byBiZSBkb25lIG9uIGEgc3BlY2lmaWMgZGF5LiBJdCBjYW4gaGF2ZSBhXG4gICAgICAgICAgICAgICAgZHVlRGF0ZS9kdWVIb3VyLCBidXQgaXQncyBvcHRpb25hbC4gSXQgb25seSBzaG93cyBvbiBvbmUgZGF5XG4gICAgICAgICAgICAyLiBTb21ldGhpbmcgdGhhdCBuZWVkcyB0byBiZSBkb25lIHRpbGwgYSBzcGVjaWZpZWQgZHVlRGF0ZS4gU28gaXRcbiAgICAgICAgICAgICAgICBzaG93cyBldmVyeSBkYXkgdW50aWwgdGhlIGR1ZURhdGUuIEV4cGlyZWQgc2VjdGlvbiBtaWdodCBiZSBcbiAgICAgICAgICAgICAgICBvZiB1c2UuXG5cbiAgICAgICAgICAgIElkZWE6XG4gICAgICAgICAgICBBbHdheXMgc2hvdyBhbGwgdGhhdCBjYW4gYmUgc2hvd24uIElmIGl0IGhhcHBlbnMgdGhhdCBvbmUgb2YgdGhlbVxuICAgICAgICAgICAgZXhwaXJlZCBzaW1wbHkgbmVkb3RlIHNvIHVzaW5nIHJlZCBib3JkZXIgb3IgKGV4cGlyZWQpIHRhZy5cbiAgICAgICAgICAgIEl0IGNhbiBiZSBzaG93biBpZiBpdHMgc3RhcnQgZGF5IGlzIHRvZGF5IG9yIGVhcmxpZXIuIC0vLy8tXG5cblxuXG4gICAgLSBBZGQgYSBmb3JtIGZvciB1c2VyIGlucHV0IC0vLy8tXG4gICAgLSBUYXNrIGNoYW5nZXM6XG4gICAgICAgICAgICAxKSBTdHlsZSBjaGFuZ2VzOiBSZWRvIHRhc2sgc3F1YXJlcyAtLy8vLSwgbWF5YmUgbm90XG4gICAgICAgICAgICAyKSBUYXNrIGRlc2NyaXB0aW9uL2VkaXQgc3lzdGVtIC0vLy8tXG4gICAgICAgICAgICAzKSBNYWtlIHByaW9yaXRlcyBtYXR0ZXIsIGJvcmRlciBjb2xvciAtLy8vLVxuICAgIC0gRklYIHJlbW92ZSBidXR0b24sIG5hbWVseSB3aGVuIHlvdSBkb24ndCBpbnB1dCBhbnl0aGluZyBpbiB0aGUgZm9ybVxuICAgICAgICBtdWx0aXBsZSB0YXNrcyBhcmUgbWFkZSBldmVudCB0aG91Z2ggdGhlcmUgaXMgb25seSBvbmUgc2F2ZWQgaW4gdGhlIFxuICAgICAgICBvYmplY3QuIGl0IHNob3dzIGNvcnJlY3RseSBhZnRlciByZWZyZXNoIC0vLy8tXG4gICAgLSBGSVg6IHByZXZlbnQgZnJvbSBjaGFuZ2luZyBwcm9qZWN0cyB3aGVuIHRoZSBmb3JtIGlzIG9wZW5lZCxcbiAgICAgICAgY29uc2lkZXIgYWRkaW5nIGEgY292ZXIganVzdCBsaWtlIGluIHRoZSBsaWJyYXJ5IHByb2plY3QgLS8vLy1cbiAgICAtIEZJWDogcHJvamVjdC9zaG9ydGN1dCBuYW1lIGxldHRlcnMgZ29pbmcgdG8gbmV3IGxpbmUsIGluc3RlYWQgb25seSB3b3Jkc1xuICAgICAgICAtLy8vLSBidXQgY2FuJ3QgZml4IGxvbmcgbmFtZXMsIG1heWJlIGZpbmQgYSB3YXkgdG8gYWRkIFwiLVwiIGF0IGVuZCB3aGVuXG4gICAgICAgIGJyZWFraW5nXG4gICAgLSBBZGQgTG9jYWwgc3RvcmFnZSAtLy8vLVxuICAgIC0gQWRkIGEgY29uZmlybWF0aW9uIGZvcm0gd2hlbiBhdHRlbXB0aW5nIHRvIGRlbGV0ZSBhIHByb2plY3QgLS8vLy1cbiAgICAtIEFkZCBtZWRpYSBxdWVyaWVzXG4gICAgLSBjaGFuZ2UgcHJvamVjdElkIGFuZCBpZCB0byBjYWxjdWxhdGUgaWQgYmFzZWQgb24gd2hhdCBpcyB0aGUgYmlnZ2VzdCBpZFxuICAgICAgICBwcmVzZW50IG9uIHRoZSBjdXJyZW50IHByb2plY3QvcHJvamVjdHMgYW5kIHRoZW4gYWRkIDEsIHRoaXMgd2F5XG4gICAgICAgIGl0IGlzIG5vdCBiYXNlZCBvbiBsZW5ndGggYW5kIGR1cGUgYnVncyBkbyBub3QgYXBwZWFyIC0vLy8tXG4gICAgLSBGaXggZGF0ZXMgZm9yIGVkaXRpbmchXG4gICAgLSBEbyBzb21ldGhpbmcgd2l0aCBwcm9qZWN0IGRhdGVzLCBtYXliZSBjb250ZW50IGJvcmRlciB0byBzaWduaWZ5IHRoZSBsYXRlXG4gICAgICAgIHByb2plY3RcbiAgICAtIE1ha2UgYSByZWZyZXNoIGZ1bmN0aW9uLCB0aGF0IHJlbG9hZHMsIG1heWJlIGp1c3QgY2hhbmdlUHJvamVjdCBzbyB5b3VcbiAgICAgICAgZG9uJ3QgaGF2ZSB0byBsb2NhdGlvbi5yZWxvYWQoKVxuKi9cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=