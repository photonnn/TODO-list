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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    --neutral: #f5f5f5;\n    --violet: white;\n    --stone: #6e6279;\n    --zinc: #3f3f46;\n    --hover: rgb(69, 31, 83);\n\n}\n\nbody,\nhtml {\n    height: 100%;\n    width: 100%;\n}\n\nbody {\n    display: flex;\n}\n\n#sidebar {\n    flex: 1;\n    background-color: var(--zinc);\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    width: 100%;\n}\n\n#sidebar>div {\n    font-size: 6vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    ;\n}\n\n.home {\n    flex: 1;\n    border-bottom: 5px black solid;\n    background-color: var(--stone);\n    user-select: none;\n}\n\n#projects {\n    flex: 7;\n}\n\n.home:hover {\n    background-color: var(--hover);\n    cursor: pointer;\n}\n\n#content {\n    flex: 3;\n    background-color: grey;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    flex-direction: column;\n    height: 100%;\n    width: 100%;\n}\n\n.expand {\n    display: flex;\n    flex-direction: column;\n}\n\n.expand>div:first-child,\n#addProject {\n    flex: 1;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.expand>* {\n    width: 100%;\n}\n\n#addProject {\n    border-top: 3px solid black;\n    background-color: var(--stone);\n    user-select: none;\n}\n\n#addProject:hover {\n    cursor: pointer;\n    background-color: var(--hover);\n}\n\n.expand>div:first-child {\n    border-bottom: 3px solid black;\n}\n\n\n.expand .shortcut {\n    background-color: var(--stone);\n    padding: 5%;\n    border-bottom: 3px solid black;\n    word-break: break-word;\n    user-select: none;\n    cursor: pointer;\n    display: flex;\n    justify-content: space-between;\n}\n\n.expand .shortcuts {\n    overflow-y: auto;\n    max-height: 70vh;\n}\n\n.shortcut:hover {\n    background-color: var(--hover);\n    cursor: pointer;\n}\n\n.expand>div {\n    flex: 5;\n    text-align: center;\n}\n\n#tasks {\n    flex: 1;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(35vh, 1fr));\n    grid-gap: 2vh;\n    overflow-y: auto;\n    width: 100%;\n    padding: 3%;\n}\n\n#tasks>div {\n    height: 35vh;\n    background: rgb(0, 147, 223);\n    background: radial-gradient(circle, rgba(0, 147, 223, 1) 0%,\n            rgba(211, 239, 242, 1) 49%, rgba(17, 16, 16, 1) 100%);\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    border-radius: 10%;\n    font-size: clamp(0, 2rem, calc(2rem + 2.5vh));\n}\n\n#tasks>div>div {\n    word-break: break-word;\n}\n\n.Must {\n    background: rgb(232, 5, 5);\n    background: radial-gradient(circle, rgba(232, 5, 5, 1) 0%,\n            rgba(213, 144, 144, 1) 49%, rgba(17, 16, 16, 1) 100%) !important;\n}\n\n.Necessary {\n    background: rgb(232, 107, 5);\n    background: radial-gradient(circle, rgba(232, 107, 5, 1) 0%,\n            rgba(235, 200, 163, 1) 49%, rgba(17, 16, 16, 1) 100%) !important;\n}\n\n.Maybe {\n    background: rgb(193, 232, 5);\n    background: radial-gradient(circle, rgba(193, 232, 5, 1) 0%,\n            rgba(224, 235, 163, 1) 49%, rgba(17, 16, 16, 1) 100%) !important;\n}\n\n#content>*:not(#tasks) {\n    display: flex;\n    justify-content: center;\n    width: 100%;\n}\n\n.header {\n    font-size: 40px;\n}\n\n.header .RPB {\n    background-color: red;\n    color: rgb(85, 3, 19);\n    font-size: 2rem;\n    padding: 1%;\n    position: absolute;\n    right: 0;\n}\n\n#addTask {\n    font-size: 40px;\n    color: white;\n    background-color: black;\n    user-select: none;\n}\n\n#addTask:hover {\n    opacity: 0.5;\n    cursor: pointer;\n}\n\n#addTask:active {\n    opacity: 0.2;\n}\n\n.selected {\n    border-right: 10px groove var(--hover);\n}\n\n#date {\n    width: 40vh !important;\n    font-size: 5vh;\n    border: none;\n    background: grey;\n}\n\n.calLeft {\n    margin-right: 2vh;\n}\n\n.calRight {\n    margin-left: 2vh;\n}\n\n.navigatecal {\n    font-size: 8vh;\n    cursor: pointer;\n    user-select: none;\n}\n\n#taskForm {\n    width: 65vh;\n    height: 65vh;\n    left: calc(50% - 10vh);\n    top: calc(50% - 30vh);\n    padding-left: 5%;\n    padding-right: 5%;\n    font-size: 3vh;\n}\n\n#projectForm {\n    width: 55vh;\n    height: 25vh;\n    left: calc(50% - 10vh);\n    top: calc(50% - 30vh);\n    padding: 0 2% 0 2%;\n    font-size: 3vh;\n}\n\n#confirmationForm {\n    width: 50vh;\n    height: 35vh;\n    left: calc(50% - 10vh);\n    top: calc(50% - 30vh);\n    padding: 0 3% 0 3%;\n    font-size: 3vh;\n}\n\n#projectForm,\n#taskForm,\n#confirmationForm {\n    visibility: hidden;\n    position: absolute;\n    z-index: 2;\n    background-color: var(--stone);\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: flex-start;\n    border: 5px var(--hover) solid;\n}\n\n.cover {\n    position: fixed;\n    top: 0;\n    left: 0;\n    background: rgba(0, 0, 0, 0.6);\n    z-index: 1;\n    width: 100%;\n    height: 100%;\n    display: none;\n}\n\n#taskForm div,\n#projectForm div {\n    display: flex;\n}\n\n#taskForm label,\n#projectForm label {\n    flex: 1;\n    min-width: 20vh;\n    font-size: 3vh;\n}\n\n#taskForm input,\n#taskForm select {\n    flex: 6;\n    min-width: 30vh;\n}\n\n#description,\n#taskForm input,\n#priority,\n#proj_title,\n#proj_dueDate {\n    font-size: 2vh;\n    padding: 1%;\n}\n\n#description {\n    height: 20vh;\n    max-width: 30vh;\n    resize: none;\n}\n\n.redBtn {\n    background-color: red;\n    margin-right: 25%;\n}\n\n.greenBtn {\n    background-color: rgb(47, 255, 47);\n}\n\n.redBtn,\n.greenBtn {\n    font-size: 3vh;\n    padding: 10%;\n    width: 15vh;\n    height: 0.5vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.fbtn {\n    display: flex;\n    justify-content: center;\n    width: 100%;\n}\n\n.expired {\n    border: 5px solid red;\n}\n\n.task_desc {\n    overflow-y: auto;\n    flex: 6;\n    font-size: 1.5rem;\n}\n\n.task_dueDate {\n    flex: 1;\n}\n\n.task_title, .task_desc, .task_dueDate {\n    border-bottom: 1px solid rgba(0, 0, 0, 0.212);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n}\n\n.task_title {\n    flex: 1;\n    padding: 0 6%;\n}\n\n.taskButtons  > button {\n    font-size: 1.5rem;\n    color: white;\n    background-color: black;\n    opacity: 0.5;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    --neutral: #f5f5f5;\n    --violet: white;\n    --stone: #6e6279;\n    --zinc: #3f3f46;\n    --hover: rgb(69, 31, 83);\n\n}\n\nbody,\nhtml {\n    height: 100%;\n    width: 100%;\n}\n\nbody {\n    display: flex;\n}\n\n#sidebar {\n    flex: 1;\n    background-color: var(--zinc);\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    width: 100%;\n}\n\n#sidebar>div {\n    font-size: 6vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    ;\n}\n\n.home {\n    flex: 1;\n    border-bottom: 5px black solid;\n    background-color: var(--stone);\n    user-select: none;\n}\n\n#projects {\n    flex: 7;\n}\n\n.home:hover {\n    background-color: var(--hover);\n    cursor: pointer;\n}\n\n#content {\n    flex: 3;\n    background-color: grey;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    flex-direction: column;\n    height: 100%;\n    width: 100%;\n}\n\n.expand {\n    display: flex;\n    flex-direction: column;\n}\n\n.expand>div:first-child,\n#addProject {\n    flex: 1;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.expand>* {\n    width: 100%;\n}\n\n#addProject {\n    border-top: 3px solid black;\n    background-color: var(--stone);\n    user-select: none;\n}\n\n#addProject:hover {\n    cursor: pointer;\n    background-color: var(--hover);\n}\n\n.expand>div:first-child {\n    border-bottom: 3px solid black;\n}\n\n\n.expand .shortcut {\n    background-color: var(--stone);\n    padding: 5%;\n    border-bottom: 3px solid black;\n    word-break: break-word;\n    user-select: none;\n    cursor: pointer;\n    display: flex;\n    justify-content: space-between;\n}\n\n.expand .shortcuts {\n    overflow-y: auto;\n    max-height: 70vh;\n}\n\n.shortcut:hover {\n    background-color: var(--hover);\n    cursor: pointer;\n}\n\n.expand>div {\n    flex: 5;\n    text-align: center;\n}\n\n#tasks {\n    flex: 1;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(35vh, 1fr));\n    grid-gap: 2vh;\n    overflow-y: auto;\n    width: 100%;\n    padding: 3%;\n}\n\n#tasks>div {\n    height: 35vh;\n    background: rgb(0, 147, 223);\n    background: radial-gradient(circle, rgba(0, 147, 223, 1) 0%,\n            rgba(211, 239, 242, 1) 49%, rgba(17, 16, 16, 1) 100%);\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    border-radius: 10%;\n    font-size: clamp(0, 2rem, calc(2rem + 2.5vh));\n}\n\n#tasks>div>div {\n    word-break: break-word;\n}\n\n.Must {\n    background: rgb(232, 5, 5);\n    background: radial-gradient(circle, rgba(232, 5, 5, 1) 0%,\n            rgba(213, 144, 144, 1) 49%, rgba(17, 16, 16, 1) 100%) !important;\n}\n\n.Necessary {\n    background: rgb(232, 107, 5);\n    background: radial-gradient(circle, rgba(232, 107, 5, 1) 0%,\n            rgba(235, 200, 163, 1) 49%, rgba(17, 16, 16, 1) 100%) !important;\n}\n\n.Maybe {\n    background: rgb(193, 232, 5);\n    background: radial-gradient(circle, rgba(193, 232, 5, 1) 0%,\n            rgba(224, 235, 163, 1) 49%, rgba(17, 16, 16, 1) 100%) !important;\n}\n\n#content>*:not(#tasks) {\n    display: flex;\n    justify-content: center;\n    width: 100%;\n}\n\n.header {\n    font-size: 40px;\n}\n\n.header .RPB {\n    background-color: red;\n    color: rgb(85, 3, 19);\n    font-size: 2rem;\n    padding: 1%;\n    position: absolute;\n    right: 0;\n}\n\n#addTask {\n    font-size: 40px;\n    color: white;\n    background-color: black;\n    user-select: none;\n}\n\n#addTask:hover {\n    opacity: 0.5;\n    cursor: pointer;\n}\n\n#addTask:active {\n    opacity: 0.2;\n}\n\n.selected {\n    border-right: 10px groove var(--hover);\n}\n\n#date {\n    width: 40vh !important;\n    font-size: 5vh;\n    border: none;\n    background: grey;\n}\n\n.calLeft {\n    margin-right: 2vh;\n}\n\n.calRight {\n    margin-left: 2vh;\n}\n\n.navigatecal {\n    font-size: 8vh;\n    cursor: pointer;\n    user-select: none;\n}\n\n#taskForm {\n    width: 65vh;\n    height: 65vh;\n    left: calc(50% - 10vh);\n    top: calc(50% - 30vh);\n    padding-left: 5%;\n    padding-right: 5%;\n    font-size: 3vh;\n}\n\n#projectForm {\n    width: 55vh;\n    height: 25vh;\n    left: calc(50% - 10vh);\n    top: calc(50% - 30vh);\n    padding: 0 2% 0 2%;\n    font-size: 3vh;\n}\n\n#confirmationForm {\n    width: 50vh;\n    height: 35vh;\n    left: calc(50% - 10vh);\n    top: calc(50% - 30vh);\n    padding: 0 3% 0 3%;\n    font-size: 3vh;\n}\n\n#projectForm,\n#taskForm,\n#confirmationForm {\n    visibility: hidden;\n    position: absolute;\n    z-index: 2;\n    background-color: var(--stone);\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: flex-start;\n    border: 5px var(--hover) solid;\n}\n\n.cover {\n    position: fixed;\n    top: 0;\n    left: 0;\n    background: rgba(0, 0, 0, 0.6);\n    z-index: 1;\n    width: 100%;\n    height: 100%;\n    display: none;\n}\n\n#taskForm div,\n#projectForm div {\n    display: flex;\n}\n\n#taskForm label,\n#projectForm label {\n    flex: 1;\n    min-width: 20vh;\n    font-size: 3vh;\n}\n\n#taskForm input,\n#taskForm select {\n    flex: 6;\n    min-width: 30vh;\n}\n\n#description,\n#taskForm input,\n#priority,\n#proj_title,\n#proj_dueDate {\n    font-size: 2vh;\n    padding: 1%;\n}\n\n#description {\n    height: 20vh;\n    max-width: 30vh;\n    resize: none;\n}\n\n.redBtn {\n    background-color: red;\n    margin-right: 25%;\n}\n\n.greenBtn {\n    background-color: rgb(47, 255, 47);\n}\n\n.redBtn,\n.greenBtn {\n    font-size: 3vh;\n    padding: 10%;\n    width: 15vh;\n    height: 0.5vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.fbtn {\n    display: flex;\n    justify-content: center;\n    width: 100%;\n}\n\n.expired {\n    border: 5px solid red;\n}\n\n.task_desc {\n    overflow-y: auto;\n    flex: 6;\n    font-size: 1.5rem;\n}\n\n.task_dueDate {\n    flex: 1;\n}\n\n.task_title, .task_desc, .task_dueDate {\n    border-bottom: 1px solid rgba(0, 0, 0, 0.212);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n}\n\n.task_title {\n    flex: 1;\n    padding: 0 6%;\n}\n\n.taskButtons  > button {\n    font-size: 1.5rem;\n    color: white;\n    background-color: black;\n    opacity: 0.5;\n}"],"sourceRoot":""}]);
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
    const rpb = document.querySelector(".RPB");
    if (rpb)
    header.removeChild(rpb);
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
calender.setAttribute("value", today);
calender.setAttribute("min", today);

// set default date values to today
const dueDate = document.getElementById("dueDate");
dueDate.value = getDate();
//const proj_dueDate = document.getElementById("proj_dueDate");
//proj_dueDate.value = getDate();

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
    const arr = _todo__WEBPACK_IMPORTED_MODULE_0__.projects[currentProject].tasks[task.title].dueDate.split("-");
    if (+todayArr[0] > +arr[1] || +todayArr[1] > +arr[0] || +todayArr[2] >
        +arr[2]) {
        return true;
    } else {
        return false;
    }
}

/*const proj_expireCheck = () => {
    const currentProject = document.querySelector(".selected").textContent;
    if (currentProject != "HOME") {
        const todayArr = format(document.getElementById("date").valueAsDate);
        const arr = projects[currentProject].dueDate.split("-");
        // year month day

        if (+todayArr[0] > +arr[2] || +todayArr[1] > +arr[0] || +todayArr[2] >
            +arr[0]) {
            return true;
        } else {
            return false;
        }
    }

} */



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

const addTaskBtn = document.querySelector("#addTask");
addTaskBtn.addEventListener('click', () => {
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
    addTask();
});

const form = document.querySelector("#taskForm");
form.addEventListener('keydown', (e) => {
    if (e.code == "Enter") {
        addTask();
    }
});

const addTask = () => {
    // run only if not editing, we have 2 event listners on one button
    // so this forces the other one to work alone, which is what we want

    const currentProject = document.querySelector(".selected").textContent;
    // bugs occur if flag isn't present, since after I am using two
    // event listners for one button
    const task = getTask();
    if (task) {


        resetForm();

        // set default date, so MM-DD-YYYY is not shown on form?????
        const dueDate = document.getElementById("dueDate");
        dueDate.value = (0,_date_js__WEBPACK_IMPORTED_MODULE_4__.getDate)();

        // setup task
        _todo_js__WEBPACK_IMPORTED_MODULE_0__.projects[currentProject].tasks[task.title] = task;
        (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.addTaskD)(task, currentProject);
        (0,_setupTask_js__WEBPACK_IMPORTED_MODULE_3__.setupTaskD)(task);

        const rbutton = document.querySelector(".red");
        rbutton.style.display = "flex";

        const gbutton = document.querySelector(".green");
        gbutton.style.backgroundColor = "green";
        gbutton.textContent = "Add";

        // save to local when you add task or project
        localStorage.setItem('projects', JSON.stringify(_todo_js__WEBPACK_IMPORTED_MODULE_0__.projects));
        console.log(_todo_js__WEBPACK_IMPORTED_MODULE_0__.projects);
    };
}

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
        //const dueDate = document.getElementById("proj_dueDate").value;

        let projectID = 0;
        // easiest way to prevent duplication bug => 2 projects 1 id
        for (let em in _todo_js__WEBPACK_IMPORTED_MODULE_0__.projects) {
            projectID = Math.max(projectID,
                Number(_todo_js__WEBPACK_IMPORTED_MODULE_0__.projects[em].id.replace("Pr", "")) + 1);
        }

        const proj = (0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.projectFactory)(title, /*dueDate,*/ "Pr" + projectID.toString());
        return proj;
    } else {
        return 0;
    }

}

const addProjectBtn = document.querySelector("#addProject");
addProjectBtn.addEventListener('click', () => {
    const projForm = document.querySelector("#projectForm")
    projForm.style.visibility = "visible";
    const cover = document.querySelector(".cover");
    cover.style.display = "block";
});

const proj_gbutton = document.querySelector(".proj_green");
proj_gbutton.addEventListener('click', () => {
    addProject();
});

const addProject = () => {
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
}

const projForm = document.querySelector("#projectForm");
projForm.addEventListener("keydown", (e) => {
    if (e.code == "Enter") {
        addProject();
    }
})

const proj_rbutton = document.querySelector(".proj_red");
proj_rbutton.addEventListener('click', () => {
    resetProjForm();
});

function resetProjForm() {
    const form = document.querySelector("#projectForm");
    const cover = document.querySelector(".cover");
    document.getElementById("proj_title").value = "";
    //document.getElementById("proj_dueDate").value = "";
    form.style.visibility = "hidden";
    cover.style.display = "none";

    // this is also default, present in date.js!
    //const dueDate = document.getElementById("proj_dueDate");
    // dueDate.value = getDate();
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
    /*
    const content = document.querySelector("#content");
    if (proj_expireCheck()) {
        content.style.borderTop = "1vh red solid";
        content.style.borderLeft = "1vh red solid";
    } else {
        content.style.border = "none";
    } */
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




let working_task;


// "Control" function
const setupTaskD = (task) => {
    working_task = task; // object

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
    btn.addEventListener('click', (e) => {
        const taskID = [...e.target.parentNode.parentNode.classList][0];
        const title = getTitle(taskID);
        const currentProject = document.querySelector(".selected").textContent;
        (0,_todo_js__WEBPACK_IMPORTED_MODULE_2__.deleteTask)(currentProject, _todo_js__WEBPACK_IMPORTED_MODULE_2__.projects[currentProject].tasks[title]);
        (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.eraseTaskD)(taskID);
    });
};

function getTitle(taskID) {
    const currentProject = document.querySelector(".selected").textContent;
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

    btn.addEventListener('click', (e) => {
        (0,_eventListeners_js__WEBPACK_IMPORTED_MODULE_1__.showFormAndCover)();
        setupEditForm(
            getTitle([...e.target.parentNode.parentNode.classList][0]));
    });
};

function setupEditForm(title) {
    const currentProject = document.querySelector(".selected").textContent;
    // task = THE ONE BEING CLICKED
    const task = _todo_js__WEBPACK_IMPORTED_MODULE_2__.projects[currentProject].tasks[title];

    // fill the form correctly
    document.getElementById("title").value = task.title;
    document.getElementById("description").value = task.description;
    let arr = task.dueDate.split("-");
    arr = [arr[2], arr[0], arr[1]].join("-");
    document.getElementById("dueDate").value = arr;
    document.getElementById("priority").value = task.priority;

    // delete, and let the green button build it for you, no in this case
    // should have a special function
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.eraseTaskD)(_todo_js__WEBPACK_IMPORTED_MODULE_2__.projects[currentProject].tasks[title].id)
    delete _todo_js__WEBPACK_IMPORTED_MODULE_2__.projects[currentProject].tasks[title];

    localStorage.setItem('projects', JSON.stringify(_todo_js__WEBPACK_IMPORTED_MODULE_2__.projects));

    const rbutton = document.querySelector(".red");
    rbutton.style.display = "none";

    const gbutton = document.querySelector(".green");
    gbutton.style.backgroundColor = "yellow";
    gbutton.textContent = "Edit"
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
        id: "Pr0"
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

const projectFactory = (title/*, dueDate*/, id) => {
    return { title/*, dueDate*/, id };
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
    - Fix dates for editing! -///-
    - Do something with project dates, maybe content border to signify the late
        project -///-
    - Make a refresh function, that reloads, maybe just changeProject so you
        don't have to location.reload()
    - TextArea expanding D: -///-
    - consider more cols and row for TextArea -///-
    - Rethink the need for dueDate in project, I think not needed!! -///-
    - prevent title name duplication on adding task, the form goes away for some
        reason -///-
    - ghost task appearing: bug -///-
    - make red button recover the task, you have all the data needed in the form
        , instead reworked to include only edit button -///-
    - add keybinds, especially enter instead of mouse click
    - CLEAN CODE!!!!! you know currentProject repeat all the time and other jazz
    - experiment with working_task, try to remove
    - rework modules, maybe no need to generalize everything, experiment
    - cleaner css, more comments, consider animations/transformations for 
        consider remaking css ground up, make it work on mobile first
    - delete the task only after the edit form is submitted, potentially use
    async/wait function
*/



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU8sS0FBSyxZQUFZLE1BQU0sT0FBTyxPQUFPLEtBQUssWUFBWSxNQUFNLE9BQU8sT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sT0FBTyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLE9BQU8sU0FBUyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsNkJBQTZCLGlCQUFpQixnQkFBZ0IsNkJBQTZC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OztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOzs7Ozs7O1VDMURBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDSztBQUNWO0FBQzRCOztBQUU1Qyx5REFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RhdGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZXZlbnRMaXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NldHVwVGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAtLW5ldXRyYWw6ICNmNWY1ZjU7XFxuICAgIC0tdmlvbGV0OiB3aGl0ZTtcXG4gICAgLS1zdG9uZTogIzZlNjI3OTtcXG4gICAgLS16aW5jOiAjM2YzZjQ2O1xcbiAgICAtLWhvdmVyOiByZ2IoNjksIDMxLCA4Myk7XFxuXFxufVxcblxcbmJvZHksXFxuaHRtbCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jc2lkZWJhciB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXppbmMpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jc2lkZWJhcj5kaXYge1xcbiAgICBmb250LXNpemU6IDZ2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIDtcXG59XFxuXFxuLmhvbWUge1xcbiAgICBmbGV4OiAxO1xcbiAgICBib3JkZXItYm90dG9tOiA1cHggYmxhY2sgc29saWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN0b25lKTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbiNwcm9qZWN0cyB7XFxuICAgIGZsZXg6IDc7XFxufVxcblxcbi5ob21lOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXIpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgZmxleDogMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZXhwYW5kIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmV4cGFuZD5kaXY6Zmlyc3QtY2hpbGQsXFxuI2FkZFByb2plY3Qge1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmV4cGFuZD4qIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNhZGRQcm9qZWN0IHtcXG4gICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdG9uZSk7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4jYWRkUHJvamVjdDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXIpO1xcbn1cXG5cXG4uZXhwYW5kPmRpdjpmaXJzdC1jaGlsZCB7XFxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBibGFjaztcXG59XFxuXFxuXFxuLmV4cGFuZCAuc2hvcnRjdXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdG9uZSk7XFxuICAgIHBhZGRpbmc6IDUlO1xcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgYmxhY2s7XFxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmV4cGFuZCAuc2hvcnRjdXRzIHtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgbWF4LWhlaWdodDogNzB2aDtcXG59XFxuXFxuLnNob3J0Y3V0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXIpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5leHBhbmQ+ZGl2IHtcXG4gICAgZmxleDogNTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jdGFza3Mge1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDM1dmgsIDFmcikpO1xcbiAgICBncmlkLWdhcDogMnZoO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMyU7XFxufVxcblxcbiN0YXNrcz5kaXYge1xcbiAgICBoZWlnaHQ6IDM1dmg7XFxuICAgIGJhY2tncm91bmQ6IHJnYigwLCAxNDcsIDIyMyk7XFxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoMCwgMTQ3LCAyMjMsIDEpIDAlLFxcbiAgICAgICAgICAgIHJnYmEoMjExLCAyMzksIDI0MiwgMSkgNDklLCByZ2JhKDE3LCAxNiwgMTYsIDEpIDEwMCUpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAlO1xcbiAgICBmb250LXNpemU6IGNsYW1wKDAsIDJyZW0sIGNhbGMoMnJlbSArIDIuNXZoKSk7XFxufVxcblxcbiN0YXNrcz5kaXY+ZGl2IHtcXG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcXG59XFxuXFxuLk11c3Qge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjMyLCA1LCA1KTtcXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgyMzIsIDUsIDUsIDEpIDAlLFxcbiAgICAgICAgICAgIHJnYmEoMjEzLCAxNDQsIDE0NCwgMSkgNDklLCByZ2JhKDE3LCAxNiwgMTYsIDEpIDEwMCUpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5OZWNlc3Nhcnkge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjMyLCAxMDcsIDUpO1xcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDIzMiwgMTA3LCA1LCAxKSAwJSxcXG4gICAgICAgICAgICByZ2JhKDIzNSwgMjAwLCAxNjMsIDEpIDQ5JSwgcmdiYSgxNywgMTYsIDE2LCAxKSAxMDAlKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uTWF5YmUge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTkzLCAyMzIsIDUpO1xcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDE5MywgMjMyLCA1LCAxKSAwJSxcXG4gICAgICAgICAgICByZ2JhKDIyNCwgMjM1LCAxNjMsIDEpIDQ5JSwgcmdiYSgxNywgMTYsIDE2LCAxKSAxMDAlKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4jY29udGVudD4qOm5vdCgjdGFza3MpIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbn1cXG5cXG4uaGVhZGVyIC5SUEIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIGNvbG9yOiByZ2IoODUsIDMsIDE5KTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBwYWRkaW5nOiAxJTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMDtcXG59XFxuXFxuI2FkZFRhc2sge1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4jYWRkVGFzazpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jYWRkVGFzazphY3RpdmUge1xcbiAgICBvcGFjaXR5OiAwLjI7XFxufVxcblxcbi5zZWxlY3RlZCB7XFxuICAgIGJvcmRlci1yaWdodDogMTBweCBncm9vdmUgdmFyKC0taG92ZXIpO1xcbn1cXG5cXG4jZGF0ZSB7XFxuICAgIHdpZHRoOiA0MHZoICFpbXBvcnRhbnQ7XFxuICAgIGZvbnQtc2l6ZTogNXZoO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IGdyZXk7XFxufVxcblxcbi5jYWxMZWZ0IHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAydmg7XFxufVxcblxcbi5jYWxSaWdodCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAydmg7XFxufVxcblxcbi5uYXZpZ2F0ZWNhbCB7XFxuICAgIGZvbnQtc2l6ZTogOHZoO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4jdGFza0Zvcm0ge1xcbiAgICB3aWR0aDogNjV2aDtcXG4gICAgaGVpZ2h0OiA2NXZoO1xcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDEwdmgpO1xcbiAgICB0b3A6IGNhbGMoNTAlIC0gMzB2aCk7XFxuICAgIHBhZGRpbmctbGVmdDogNSU7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDUlO1xcbiAgICBmb250LXNpemU6IDN2aDtcXG59XFxuXFxuI3Byb2plY3RGb3JtIHtcXG4gICAgd2lkdGg6IDU1dmg7XFxuICAgIGhlaWdodDogMjV2aDtcXG4gICAgbGVmdDogY2FsYyg1MCUgLSAxMHZoKTtcXG4gICAgdG9wOiBjYWxjKDUwJSAtIDMwdmgpO1xcbiAgICBwYWRkaW5nOiAwIDIlIDAgMiU7XFxuICAgIGZvbnQtc2l6ZTogM3ZoO1xcbn1cXG5cXG4jY29uZmlybWF0aW9uRm9ybSB7XFxuICAgIHdpZHRoOiA1MHZoO1xcbiAgICBoZWlnaHQ6IDM1dmg7XFxuICAgIGxlZnQ6IGNhbGMoNTAlIC0gMTB2aCk7XFxuICAgIHRvcDogY2FsYyg1MCUgLSAzMHZoKTtcXG4gICAgcGFkZGluZzogMCAzJSAwIDMlO1xcbiAgICBmb250LXNpemU6IDN2aDtcXG59XFxuXFxuI3Byb2plY3RGb3JtLFxcbiN0YXNrRm9ybSxcXG4jY29uZmlybWF0aW9uRm9ybSB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdG9uZSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgYm9yZGVyOiA1cHggdmFyKC0taG92ZXIpIHNvbGlkO1xcbn1cXG5cXG4uY292ZXIge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jdGFza0Zvcm0gZGl2LFxcbiNwcm9qZWN0Rm9ybSBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jdGFza0Zvcm0gbGFiZWwsXFxuI3Byb2plY3RGb3JtIGxhYmVsIHtcXG4gICAgZmxleDogMTtcXG4gICAgbWluLXdpZHRoOiAyMHZoO1xcbiAgICBmb250LXNpemU6IDN2aDtcXG59XFxuXFxuI3Rhc2tGb3JtIGlucHV0LFxcbiN0YXNrRm9ybSBzZWxlY3Qge1xcbiAgICBmbGV4OiA2O1xcbiAgICBtaW4td2lkdGg6IDMwdmg7XFxufVxcblxcbiNkZXNjcmlwdGlvbixcXG4jdGFza0Zvcm0gaW5wdXQsXFxuI3ByaW9yaXR5LFxcbiNwcm9qX3RpdGxlLFxcbiNwcm9qX2R1ZURhdGUge1xcbiAgICBmb250LXNpemU6IDJ2aDtcXG4gICAgcGFkZGluZzogMSU7XFxufVxcblxcbiNkZXNjcmlwdGlvbiB7XFxuICAgIGhlaWdodDogMjB2aDtcXG4gICAgbWF4LXdpZHRoOiAzMHZoO1xcbiAgICByZXNpemU6IG5vbmU7XFxufVxcblxcbi5yZWRCdG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIG1hcmdpbi1yaWdodDogMjUlO1xcbn1cXG5cXG4uZ3JlZW5CdG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDcsIDI1NSwgNDcpO1xcbn1cXG5cXG4ucmVkQnRuLFxcbi5ncmVlbkJ0biB7XFxuICAgIGZvbnQtc2l6ZTogM3ZoO1xcbiAgICBwYWRkaW5nOiAxMCU7XFxuICAgIHdpZHRoOiAxNXZoO1xcbiAgICBoZWlnaHQ6IDAuNXZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZidG4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5leHBpcmVkIHtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgcmVkO1xcbn1cXG5cXG4udGFza19kZXNjIHtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgZmxleDogNjtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi50YXNrX2R1ZURhdGUge1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG4udGFza190aXRsZSwgLnRhc2tfZGVzYywgLnRhc2tfZHVlRGF0ZSB7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMjEyKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udGFza190aXRsZSB7XFxuICAgIGZsZXg6IDE7XFxuICAgIHBhZGRpbmc6IDAgNiU7XFxufVxcblxcbi50YXNrQnV0dG9ucyAgPiBidXR0b24ge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgb3BhY2l0eTogMC41O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHdCQUF3Qjs7QUFFNUI7O0FBRUE7O0lBRUksWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxPQUFPO0lBQ1AsNkJBQTZCO0lBQzdCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjs7QUFFdkI7O0FBRUE7SUFDSSxPQUFPO0lBQ1AsOEJBQThCO0lBQzlCLDhCQUE4QjtJQUM5QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxPQUFPO0FBQ1g7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLE9BQU87SUFDUCxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLDhCQUE4QjtJQUM5Qixt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O0lBRUksT0FBTztJQUNQLGVBQWU7QUFDbkI7O0FBRUE7Ozs7O0lBS0ksY0FBYztJQUNkLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7O0lBRUksY0FBYztJQUNkLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTtJQUNiLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsT0FBTztJQUNQLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLE9BQU87QUFDWDs7QUFFQTtJQUNJLDZDQUE2QztJQUM3QyxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxPQUFPO0lBQ1AsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgLS1uZXV0cmFsOiAjZjVmNWY1O1xcbiAgICAtLXZpb2xldDogd2hpdGU7XFxuICAgIC0tc3RvbmU6ICM2ZTYyNzk7XFxuICAgIC0temluYzogIzNmM2Y0NjtcXG4gICAgLS1ob3ZlcjogcmdiKDY5LCAzMSwgODMpO1xcblxcbn1cXG5cXG5ib2R5LFxcbmh0bWwge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI3NpZGViYXIge1xcbiAgICBmbGV4OiAxO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS16aW5jKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI3NpZGViYXI+ZGl2IHtcXG4gICAgZm9udC1zaXplOiA2dmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICA7XFxufVxcblxcbi5ob21lIHtcXG4gICAgZmxleDogMTtcXG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IGJsYWNrIHNvbGlkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdG9uZSk7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4jcHJvamVjdHMge1xcbiAgICBmbGV4OiA3O1xcbn1cXG5cXG4uaG9tZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGZsZXg6IDM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmV4cGFuZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5leHBhbmQ+ZGl2OmZpcnN0LWNoaWxkLFxcbiNhZGRQcm9qZWN0IHtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5leHBhbmQ+KiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jYWRkUHJvamVjdCB7XFxuICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3RvbmUpO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuI2FkZFByb2plY3Q6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyKTtcXG59XFxuXFxuLmV4cGFuZD5kaXY6Zmlyc3QtY2hpbGQge1xcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgYmxhY2s7XFxufVxcblxcblxcbi5leHBhbmQgLnNob3J0Y3V0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3RvbmUpO1xcbiAgICBwYWRkaW5nOiA1JTtcXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGJsYWNrO1xcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5leHBhbmQgLnNob3J0Y3V0cyB7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIG1heC1oZWlnaHQ6IDcwdmg7XFxufVxcblxcbi5zaG9ydGN1dDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZXhwYW5kPmRpdiB7XFxuICAgIGZsZXg6IDU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI3Rhc2tzIHtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzNXZoLCAxZnIpKTtcXG4gICAgZ3JpZC1nYXA6IDJ2aDtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDMlO1xcbn1cXG5cXG4jdGFza3M+ZGl2IHtcXG4gICAgaGVpZ2h0OiAzNXZoO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMCwgMTQ3LCAyMjMpO1xcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDAsIDE0NywgMjIzLCAxKSAwJSxcXG4gICAgICAgICAgICByZ2JhKDIxMSwgMjM5LCAyNDIsIDEpIDQ5JSwgcmdiYSgxNywgMTYsIDE2LCAxKSAxMDAlKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgwLCAycmVtLCBjYWxjKDJyZW0gKyAyLjV2aCkpO1xcbn1cXG5cXG4jdGFza3M+ZGl2PmRpdiB7XFxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XFxufVxcblxcbi5NdXN0IHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDIzMiwgNSwgNSk7XFxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoMjMyLCA1LCA1LCAxKSAwJSxcXG4gICAgICAgICAgICByZ2JhKDIxMywgMTQ0LCAxNDQsIDEpIDQ5JSwgcmdiYSgxNywgMTYsIDE2LCAxKSAxMDAlKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uTmVjZXNzYXJ5IHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDIzMiwgMTA3LCA1KTtcXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgyMzIsIDEwNywgNSwgMSkgMCUsXFxuICAgICAgICAgICAgcmdiYSgyMzUsIDIwMCwgMTYzLCAxKSA0OSUsIHJnYmEoMTcsIDE2LCAxNiwgMSkgMTAwJSkgIWltcG9ydGFudDtcXG59XFxuXFxuLk1heWJlIHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDE5MywgMjMyLCA1KTtcXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgxOTMsIDIzMiwgNSwgMSkgMCUsXFxuICAgICAgICAgICAgcmdiYSgyMjQsIDIzNSwgMTYzLCAxKSA0OSUsIHJnYmEoMTcsIDE2LCAxNiwgMSkgMTAwJSkgIWltcG9ydGFudDtcXG59XFxuXFxuI2NvbnRlbnQ+Kjpub3QoI3Rhc2tzKSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG59XFxuXFxuLmhlYWRlciAuUlBCIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICBjb2xvcjogcmdiKDg1LCAzLCAxOSk7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgcGFkZGluZzogMSU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDA7XFxufVxcblxcbiNhZGRUYXNrIHtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuI2FkZFRhc2s6aG92ZXIge1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2FkZFRhc2s6YWN0aXZlIHtcXG4gICAgb3BhY2l0eTogMC4yO1xcbn1cXG5cXG4uc2VsZWN0ZWQge1xcbiAgICBib3JkZXItcmlnaHQ6IDEwcHggZ3Jvb3ZlIHZhcigtLWhvdmVyKTtcXG59XFxuXFxuI2RhdGUge1xcbiAgICB3aWR0aDogNDB2aCAhaW1wb3J0YW50O1xcbiAgICBmb250LXNpemU6IDV2aDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiBncmV5O1xcbn1cXG5cXG4uY2FsTGVmdCB7XFxuICAgIG1hcmdpbi1yaWdodDogMnZoO1xcbn1cXG5cXG4uY2FsUmlnaHQge1xcbiAgICBtYXJnaW4tbGVmdDogMnZoO1xcbn1cXG5cXG4ubmF2aWdhdGVjYWwge1xcbiAgICBmb250LXNpemU6IDh2aDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuI3Rhc2tGb3JtIHtcXG4gICAgd2lkdGg6IDY1dmg7XFxuICAgIGhlaWdodDogNjV2aDtcXG4gICAgbGVmdDogY2FsYyg1MCUgLSAxMHZoKTtcXG4gICAgdG9wOiBjYWxjKDUwJSAtIDMwdmgpO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA1JTtcXG4gICAgZm9udC1zaXplOiAzdmg7XFxufVxcblxcbiNwcm9qZWN0Rm9ybSB7XFxuICAgIHdpZHRoOiA1NXZoO1xcbiAgICBoZWlnaHQ6IDI1dmg7XFxuICAgIGxlZnQ6IGNhbGMoNTAlIC0gMTB2aCk7XFxuICAgIHRvcDogY2FsYyg1MCUgLSAzMHZoKTtcXG4gICAgcGFkZGluZzogMCAyJSAwIDIlO1xcbiAgICBmb250LXNpemU6IDN2aDtcXG59XFxuXFxuI2NvbmZpcm1hdGlvbkZvcm0ge1xcbiAgICB3aWR0aDogNTB2aDtcXG4gICAgaGVpZ2h0OiAzNXZoO1xcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDEwdmgpO1xcbiAgICB0b3A6IGNhbGMoNTAlIC0gMzB2aCk7XFxuICAgIHBhZGRpbmc6IDAgMyUgMCAzJTtcXG4gICAgZm9udC1zaXplOiAzdmg7XFxufVxcblxcbiNwcm9qZWN0Rm9ybSxcXG4jdGFza0Zvcm0sXFxuI2NvbmZpcm1hdGlvbkZvcm0ge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3RvbmUpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGJvcmRlcjogNXB4IHZhcigtLWhvdmVyKSBzb2xpZDtcXG59XFxuXFxuLmNvdmVyIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI3Rhc2tGb3JtIGRpdixcXG4jcHJvamVjdEZvcm0gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI3Rhc2tGb3JtIGxhYmVsLFxcbiNwcm9qZWN0Rm9ybSBsYWJlbCB7XFxuICAgIGZsZXg6IDE7XFxuICAgIG1pbi13aWR0aDogMjB2aDtcXG4gICAgZm9udC1zaXplOiAzdmg7XFxufVxcblxcbiN0YXNrRm9ybSBpbnB1dCxcXG4jdGFza0Zvcm0gc2VsZWN0IHtcXG4gICAgZmxleDogNjtcXG4gICAgbWluLXdpZHRoOiAzMHZoO1xcbn1cXG5cXG4jZGVzY3JpcHRpb24sXFxuI3Rhc2tGb3JtIGlucHV0LFxcbiNwcmlvcml0eSxcXG4jcHJval90aXRsZSxcXG4jcHJval9kdWVEYXRlIHtcXG4gICAgZm9udC1zaXplOiAydmg7XFxuICAgIHBhZGRpbmc6IDElO1xcbn1cXG5cXG4jZGVzY3JpcHRpb24ge1xcbiAgICBoZWlnaHQ6IDIwdmg7XFxuICAgIG1heC13aWR0aDogMzB2aDtcXG4gICAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4ucmVkQnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDI1JTtcXG59XFxuXFxuLmdyZWVuQnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ3LCAyNTUsIDQ3KTtcXG59XFxuXFxuLnJlZEJ0bixcXG4uZ3JlZW5CdG4ge1xcbiAgICBmb250LXNpemU6IDN2aDtcXG4gICAgcGFkZGluZzogMTAlO1xcbiAgICB3aWR0aDogMTV2aDtcXG4gICAgaGVpZ2h0OiAwLjV2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mYnRuIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZXhwaXJlZCB7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHJlZDtcXG59XFxuXFxuLnRhc2tfZGVzYyB7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIGZsZXg6IDY7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4udGFza19kdWVEYXRlIHtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuLnRhc2tfdGl0bGUsIC50YXNrX2Rlc2MsIC50YXNrX2R1ZURhdGUge1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIxMik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnRhc2tfdGl0bGUge1xcbiAgICBmbGV4OiAxO1xcbiAgICBwYWRkaW5nOiAwIDYlO1xcbn1cXG5cXG4udGFza0J1dHRvbnMgID4gYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBlcmFzZVRhc2tzRCwgYWRkVGFza0QsIGFkZFByb2plY3REIH0gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHsgc2V0dXBUYXNrRCB9IGZyb20gJy4vc2V0dXBUYXNrLmpzJztcbmltcG9ydCB7IHByb2plY3RzIH0gZnJvbSAnLi90b2RvLmpzJztcbmltcG9ydCB7IGFkZFByb2plY3RMaXN0ZW5lciB9IGZyb20gJy4vZXZlbnRMaXN0ZW5lcnMuanMnO1xuXG5cbi8vIGZlbHQgbGlrZSB0aGlzIGRlc2VydmVzIGEgc2VwZXJhdGUgbW9kdWxlLCBzaW5jZSBpdCdzIG5vdCByZWFsbHkgRE9NIG1hbmlwLlxuLy8gYXMgdGhlIG5hbWUgc3VnZ2VzdHMsIGNvbnRyb2xpbmcgdGhlIGZsb3cgaGVyZVxuY29uc3QgY2hhbmdlUHJvamVjdEQgPSAocHJvamVjdE5hbWUpID0+IHtcbiAgICBlcmFzZVRhc2tzRCgpO1xuICAgIGlmIChwcm9qZWN0c1twcm9qZWN0TmFtZV0udGFza3MgIT0ge30pIHtcbiAgICAgICAgZm9yIChsZXQgZW0gaW4gcHJvamVjdHNbcHJvamVjdE5hbWVdLnRhc2tzKSB7XG4gICAgICAgICAgICBhZGRUYXNrRChwcm9qZWN0c1twcm9qZWN0TmFtZV0udGFza3NbZW1dKTtcbiAgICAgICAgICAgIHNldHVwVGFza0QocHJvamVjdHNbcHJvamVjdE5hbWVdLnRhc2tzW2VtXSwgcHJvamVjdE5hbWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChwcm9qZWN0TmFtZSAhPSBcIkhPTUVcIikge1xuICAgICAgICBhZGRSUEIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZW1vdmVSUEIoKTtcbiAgICB9XG59O1xuXG4vLyBSUEIgLSByZW1vdmUgcHJvamVjdCBidXR0b25cbmZ1bmN0aW9uIGFkZFJQQigpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlclwiKTtcbiAgICBpZiAoaGVhZGVyLmxhc3RDaGlsZC50ZXh0Q29udGVudCAhPSBcIlhcIikge1xuICAgICAgICBjb25zdCBkZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBkZWxCdG4udGV4dENvbnRlbnQgPSBcIlhcIjtcbiAgICAgICAgZGVsQnRuLmNsYXNzTGlzdC5hZGQoXCJSUEJcIik7XG4gICAgICAgIGRlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHNob3dDb25maXJtYXRpb25Gb3JtKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoZGVsQnRuKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNob3dDb25maXJtYXRpb25Gb3JtKCkge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbmZpcm1hdGlvbkZvcm1cIik7XG4gICAgZm9ybS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgY29uc3QgY292ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvdmVyXCIpO1xuICAgIGNvdmVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVJQQigpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlclwiKTtcbiAgICBjb25zdCBycGIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlJQQlwiKTtcbiAgICBpZiAocnBiKVxuICAgIGhlYWRlci5yZW1vdmVDaGlsZChycGIpO1xufVxuXG5mdW5jdGlvbiBvbkNsaWNraW5nUlBCKCkge1xuICAgIC8vIGZpcnN0IGNoZWNrIGlmIHlvdSBhY3R1YWxseSB3YW50IHRvIGRlbGV0ZVxuICAgIC8vIGdldCBpZCwgZGVsZXRlIG9uIGNvbnRlbnQgYW5kIHRoZW4gc2lkZWJhciB1c2luZyBpZC4gcmV0dXJuIHRvIGhvbWVcbiAgICBjb25zdCBwcm9qZWN0TmFtZTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdGVkXCIpLnRleHRDb250ZW50O1xuICAgIGNvbnN0IHByb2plY3RJRCA9IHByb2plY3RzW3Byb2plY3ROYW1lMl0uaWQ7XG4gICAgZGVsZXRlIHByb2plY3RzW3Byb2plY3ROYW1lMl07XG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3Byb2plY3RJRH1gKVxuICAgIHByb2plY3QucmVtb3ZlKCk7XG4gICAgY29uc29sZS5sb2cocHJvamVjdHMpO1xuXG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjUHIwXCIpO1xuICAgIGhvbWUuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgIGNoYW5nZVByb2plY3REKFwiSE9NRVwiKTtcblxuICAgIC8vIHNhdmUgYmVjYXVzZSB5b3UgcmVtb3ZlZCBhIHByb2plY3RcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xufVxuXG5cbi8vIGxvYWQgYWxsIHByb2plY3RzIGFuZCB0YXNrcyBmcm9tIHRoZSBsb2NhbCBzdG9yYWdlXG5jb25zdCBsb2FkRnJvbVN0b3JhZ2UgPSAoKSA9PiB7XG4gICAgZm9yIChsZXQgcHJvamVjdCBpbiBwcm9qZWN0cykge1xuICAgICAgICBpZiAocHJvamVjdCAhPSBcIkhPTUVcIikge1xuICAgICAgICAgICAgYWRkUHJvamVjdEQocHJvamVjdHNbcHJvamVjdF0sIHByb2plY3RzW3Byb2plY3RdLmlkKTtcbiAgICAgICAgICAgIGFkZFByb2plY3RMaXN0ZW5lcihwcm9qZWN0c1twcm9qZWN0XS5pZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGxldCB0YXNrIGluIHByb2plY3RzLkhPTUUudGFza3MpIHtcbiAgICAgICAgYWRkVGFza0QocHJvamVjdHMuSE9NRS50YXNrc1t0YXNrXSk7XG4gICAgICAgIHNldHVwVGFza0QocHJvamVjdHMuSE9NRS50YXNrc1t0YXNrXSwgXCJIT01FXCIpO1xuICAgIH1cbn07XG5cbmV4cG9ydCB7IGNoYW5nZVByb2plY3RELCBsb2FkRnJvbVN0b3JhZ2UsIG9uQ2xpY2tpbmdSUEIgfTsiLCJpbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL3RvZG9cIjtcblxuY29uc3QgY2FsZW5kZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RhdGVcIik7XG5cbmNvbnN0IHRvZGF5ID0gZ2V0RGF0ZSgpO1xuY2FsZW5kZXIuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgdG9kYXkpO1xuY2FsZW5kZXIuc2V0QXR0cmlidXRlKFwibWluXCIsIHRvZGF5KTtcblxuLy8gc2V0IGRlZmF1bHQgZGF0ZSB2YWx1ZXMgdG8gdG9kYXlcbmNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZURhdGVcIik7XG5kdWVEYXRlLnZhbHVlID0gZ2V0RGF0ZSgpO1xuLy9jb25zdCBwcm9qX2R1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2pfZHVlRGF0ZVwiKTtcbi8vcHJval9kdWVEYXRlLnZhbHVlID0gZ2V0RGF0ZSgpO1xuXG5mdW5jdGlvbiBnZXREYXRlKCkge1xuICAgIHZhciBkID0gbmV3IERhdGUoKSxcbiAgICAgICAgbW9udGggPSAnJyArIChkLmdldE1vbnRoKCkgKyAxKSxcbiAgICAgICAgZGF5ID0gJycgKyBkLmdldERhdGUoKSxcbiAgICAgICAgeWVhciA9IGQuZ2V0RnVsbFllYXIoKTtcblxuICAgIGlmIChtb250aC5sZW5ndGggPCAyKVxuICAgICAgICBtb250aCA9ICcwJyArIG1vbnRoO1xuICAgIGlmIChkYXkubGVuZ3RoIDwgMilcbiAgICAgICAgZGF5ID0gJzAnICsgZGF5O1xuXG4gICAgcmV0dXJuIFt5ZWFyLCBtb250aCwgZGF5XS5qb2luKCctJyk7XG59XG5cbi8vIGlkZWFsbHkgeW91IHdvdWxkIGZvcm1hdCB0byBmaXQgbG9jYXRpb24sIGJ1dCB3aGF0IGEgcGFpbiBEOlxuZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlKSB7XG4gICAgZGF0ZSA9IGRhdGUuc3BsaXQoXCItXCIpO1xuICAgIHJldHVybiBbZGF0ZVsxXSwgZGF0ZVsyXSwgZGF0ZVswXV0uam9pbihcIi1cIik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdChzdHIpIHtcbiAgICBzdHIgPSBzdHIudG9TdHJpbmcoKTtcbiAgICBjb25zdCBtb250aCA9IGdldE1vbnRoRnJvbVN0cmluZyhzdHIuc3Vic3RyaW5nKDQsIDcpKTtcbiAgICBjb25zdCBkYXkgPSBzdHIuc3Vic3RyaW5nKDgsIDEwKTtcbiAgICBjb25zdCB5ZWFyID0gc3RyLnN1YnN0cmluZygxMSwgMTUpO1xuICAgIHJldHVybiBbZGF5LCBtb250aCwgeWVhcl07XG59XG5cbmZ1bmN0aW9uIGdldE1vbnRoRnJvbVN0cmluZyhtb24pIHtcbiAgICByZXR1cm4gbmV3IERhdGUoRGF0ZS5wYXJzZShtb24gKyBcIiAxLCAyMDEyXCIpKS5nZXRNb250aCgpICsgMTtcbn1cblxuY29uc3QgZXhwaXJlQ2hlY2sgPSAodGFzaykgPT4ge1xuICAgIC8vY29uc3QgdG9kYXlBcnIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVcIikudmFsdWUuc3BsaXQoXCItXCIpO1xuXG4gICAgY29uc3QgdG9kYXlBcnIgPSBmb3JtYXQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlXCIpLnZhbHVlQXNEYXRlKTtcbiAgICAvLyBbZGF5LCBtb250aCwgeWVhcl1cbiAgICAvLyBjb25zb2xlLmxvZyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVcIikudmFsdWVBc0RhdGUpO1xuICAgIC8vIGV4OiBXZWQgU2VwIDI4IDIwMjIgMDI6MDA6MDAgR01UKzAyMDAgKENlbnRyYWwgRXVyb3BlYW4gU3VtbWVyIFRpbWUpXG4gICAgY29uc3QgY3VycmVudFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdGVkXCIpLnRleHRDb250ZW50O1xuICAgIGNvbnN0IGFyciA9IHByb2plY3RzW2N1cnJlbnRQcm9qZWN0XS50YXNrc1t0YXNrLnRpdGxlXS5kdWVEYXRlLnNwbGl0KFwiLVwiKTtcbiAgICBpZiAoK3RvZGF5QXJyWzBdID4gK2FyclsxXSB8fCArdG9kYXlBcnJbMV0gPiArYXJyWzBdIHx8ICt0b2RheUFyclsyXSA+XG4gICAgICAgICthcnJbMl0pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuLypjb25zdCBwcm9qX2V4cGlyZUNoZWNrID0gKCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWxlY3RlZFwiKS50ZXh0Q29udGVudDtcbiAgICBpZiAoY3VycmVudFByb2plY3QgIT0gXCJIT01FXCIpIHtcbiAgICAgICAgY29uc3QgdG9kYXlBcnIgPSBmb3JtYXQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlXCIpLnZhbHVlQXNEYXRlKTtcbiAgICAgICAgY29uc3QgYXJyID0gcHJvamVjdHNbY3VycmVudFByb2plY3RdLmR1ZURhdGUuc3BsaXQoXCItXCIpO1xuICAgICAgICAvLyB5ZWFyIG1vbnRoIGRheVxuXG4gICAgICAgIGlmICgrdG9kYXlBcnJbMF0gPiArYXJyWzJdIHx8ICt0b2RheUFyclsxXSA+ICthcnJbMF0gfHwgK3RvZGF5QXJyWzJdID5cbiAgICAgICAgICAgICthcnJbMF0pIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG59ICovXG5cbmV4cG9ydCB7IGdldERhdGUsIGZvcm1hdERhdGUsIGV4cGlyZUNoZWNrLCAvKnByb2pfZXhwaXJlQ2hlY2sqLyB9OyIsImltcG9ydCB7IGV4cGlyZUNoZWNrIH0gZnJvbSBcIi4vZGF0ZVwiO1xuXG5jb25zdCBhZGRUYXNrRCA9ICh0YXNrKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChgJHt0YXNrLmlkfWApO1xuICAgIFxuICAgIGlmIChleHBpcmVDaGVjayh0YXNrKSkge1xuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChcImV4cGlyZWRcIik7XG4gICAgfSBcblxuICAgIGNvbnN0IHRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrc1wiKTtcbiAgICB0YXNrcy5hcHBlbmRDaGlsZChkaXYpO1xuXG5cbn07XG5cbmNvbnN0IGVyYXNlVGFza3NEID0gKCkgPT4ge1xuICAgIGNvbnN0IHRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrc1wiKTtcbiAgICB3aGlsZSAodGFza3MuZmlyc3RDaGlsZCkge1xuICAgICAgICB0YXNrcy5yZW1vdmVDaGlsZCh0YXNrcy5sYXN0Q2hpbGQpO1xuICAgIH1cbn07XG5cbmNvbnN0IGVyYXNlVGFza0QgPSAoaWQpID0+IHtcbiAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7aWR9YCk7XG4gICAgdGFzay5yZW1vdmUoKTtcbn07XG5cbmNvbnN0IGFkZFByb2plY3REID0gKHByb2plY3QsIGlkKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChcInNob3J0Y3V0XCIpO1xuICAgIGRpdi5pZCA9IGlkO1xuICAgIGRpdi50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG5cbiAgICBjb25zdCBzaG9ydGN1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNob3J0Y3V0c1wiKTtcbiAgICBzaG9ydGN1dHMuYXBwZW5kKGRpdik7XG59O1xuXG5leHBvcnQgeyBhZGRUYXNrRCwgZXJhc2VUYXNrc0QsIGVyYXNlVGFza0QsIGFkZFByb2plY3REIH07XG5cbi8vIEQgYXQgdGhlIGVuZCByZXByZXNlbnRzIERPTVxuIiwiaW1wb3J0IHsgcHJvamVjdEZhY3RvcnksIHByb2plY3RzLCB0b2RvIH0gZnJvbSAnLi90b2RvLmpzJztcbmltcG9ydCB7IGFkZFByb2plY3RELCBhZGRUYXNrRCB9IGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCB7IGNoYW5nZVByb2plY3RELCBvbkNsaWNraW5nUlBCIH0gZnJvbSAnLi9jb250cm9sLmpzJztcbmltcG9ydCB7IHNldHVwVGFza0QgfSBmcm9tICcuL3NldHVwVGFzay5qcyc7XG5pbXBvcnQgeyBnZXREYXRlLCBmb3JtYXREYXRlLCBleHBpcmVDaGVjaywgcHJval9leHBpcmVDaGVjayB9IGZyb20gJy4vZGF0ZS5qcyc7XG5cbi8vIGl0IHJlc2V0cyBldmVyeSB0aW1lIHdlYnNpdGUgcmVmcmVzaGVzIHNvIGR1cGxpY2F0aW9uIGJ1ZyBvY2N1cnMsXG4vLyBhbmQgaXQncyBtb3JlIGVmZmljaWVudCwgKGxpdHRsZSBiaXQgbG9sKVxuXG5jb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRUYXNrXCIpO1xuYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBzaG93Rm9ybUFuZENvdmVyKCk7XG59KTtcblxuXG4vLyBtYWtlIGl0IGFwcGx5IHRvIGFueSBmb3JtIFRPRE9PRE9ET0RPRE9EXG5mdW5jdGlvbiBzaG93Rm9ybUFuZENvdmVyKCkge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tGb3JtXCIpO1xuICAgIGNvbnN0IGNvdmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb3ZlclwiKTtcbiAgICBjb3Zlci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIGZvcm0uc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xufVxuXG4vLyB0aG91Z2h0IGl0IHdvdWxkIGVhc3kgdG8gcHV0IGFsbCBmb3JtIHJlbGF0ZWQgY29kZSB0byB0aGUgc3VibWl0IGJ0biBsaXN0ZW5lclxuY29uc3QgZ2J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ3JlZW5cIik7XG5nYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGFkZFRhc2soKTtcbn0pO1xuXG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrRm9ybVwiKTtcbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gICAgaWYgKGUuY29kZSA9PSBcIkVudGVyXCIpIHtcbiAgICAgICAgYWRkVGFzaygpO1xuICAgIH1cbn0pO1xuXG5jb25zdCBhZGRUYXNrID0gKCkgPT4ge1xuICAgIC8vIHJ1biBvbmx5IGlmIG5vdCBlZGl0aW5nLCB3ZSBoYXZlIDIgZXZlbnQgbGlzdG5lcnMgb24gb25lIGJ1dHRvblxuICAgIC8vIHNvIHRoaXMgZm9yY2VzIHRoZSBvdGhlciBvbmUgdG8gd29yayBhbG9uZSwgd2hpY2ggaXMgd2hhdCB3ZSB3YW50XG5cbiAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VsZWN0ZWRcIikudGV4dENvbnRlbnQ7XG4gICAgLy8gYnVncyBvY2N1ciBpZiBmbGFnIGlzbid0IHByZXNlbnQsIHNpbmNlIGFmdGVyIEkgYW0gdXNpbmcgdHdvXG4gICAgLy8gZXZlbnQgbGlzdG5lcnMgZm9yIG9uZSBidXR0b25cbiAgICBjb25zdCB0YXNrID0gZ2V0VGFzaygpO1xuICAgIGlmICh0YXNrKSB7XG5cblxuICAgICAgICByZXNldEZvcm0oKTtcblxuICAgICAgICAvLyBzZXQgZGVmYXVsdCBkYXRlLCBzbyBNTS1ERC1ZWVlZIGlzIG5vdCBzaG93biBvbiBmb3JtPz8/Pz9cbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlRGF0ZVwiKTtcbiAgICAgICAgZHVlRGF0ZS52YWx1ZSA9IGdldERhdGUoKTtcblxuICAgICAgICAvLyBzZXR1cCB0YXNrXG4gICAgICAgIHByb2plY3RzW2N1cnJlbnRQcm9qZWN0XS50YXNrc1t0YXNrLnRpdGxlXSA9IHRhc2s7XG4gICAgICAgIGFkZFRhc2tEKHRhc2ssIGN1cnJlbnRQcm9qZWN0KTtcbiAgICAgICAgc2V0dXBUYXNrRCh0YXNrKTtcblxuICAgICAgICBjb25zdCByYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZWRcIik7XG4gICAgICAgIHJidXR0b24uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuXG4gICAgICAgIGNvbnN0IGdidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdyZWVuXCIpO1xuICAgICAgICBnYnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JlZW5cIjtcbiAgICAgICAgZ2J1dHRvbi50ZXh0Q29udGVudCA9IFwiQWRkXCI7XG5cbiAgICAgICAgLy8gc2F2ZSB0byBsb2NhbCB3aGVuIHlvdSBhZGQgdGFzayBvciBwcm9qZWN0XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzKTtcbiAgICB9O1xufVxuXG5mdW5jdGlvbiByZXNldEZvcm0oKSB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza0Zvcm1cIik7XG4gICAgY29uc3QgY292ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvdmVyXCIpO1xuICAgIGZvcm0ucmVzZXQoKTtcbiAgICBmb3JtLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgIGNvdmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuICAgIC8vIHRoaXMgaXMgYWxzbyBkZWZhdWx0LCBwcmVzZW50IGluIGRhdGUuanMhXG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlRGF0ZVwiKTtcbiAgICBkdWVEYXRlLnZhbHVlID0gZ2V0RGF0ZSgpO1xufVxuXG5jb25zdCByYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZWRcIik7XG5yYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHJlc2V0Rm9ybSgpO1xufSk7XG5cbi8vIGNvdWxkbid0IGdldCBzdWJtaXQgdHlwZSBidXR0b24gdG8gd29yaywgc28gbmVlZGVkIGEgZnVuY3Rpb24gdG8gZ2V0IHZhbHVlc1xuLy8gZnJvbSB0aGUgZm9ybSwgdGhpcyBpcyBpdFxuZnVuY3Rpb24gZ2V0VGFzaygpIHtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVcIikudmFsdWU7XG4gICAgY29uc3QgY3VycmVudFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdGVkXCIpLnRleHRDb250ZW50O1xuICAgIGlmICghcHJvamVjdHNbY3VycmVudFByb2plY3RdLnRhc2tzW3RpdGxlXSkge1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb25cIikudmFsdWU7XG4gICAgICAgIGxldCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWVEYXRlXCIpLnZhbHVlO1xuICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJpb3JpdHlcIikudmFsdWU7XG5cbiAgICAgICAgaWYgKCFkdWVEYXRlKSB7XG4gICAgICAgICAgICBkdWVEYXRlID0gZ2V0RGF0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGlkID0gMDtcbiAgICAgICAgLy8gZWFzaWVzdCB3YXkgdG8gcHJldmVudCBkdXBsaWNhdGlvbiBidWcgPT4gMiB0YXNrcyAxIGlkXG4gICAgICAgIGZvciAobGV0IGVtIGluIHByb2plY3RzW2N1cnJlbnRQcm9qZWN0XS50YXNrcykge1xuICAgICAgICAgICAgaWQgPSBNYXRoLm1heChpZCxcbiAgICAgICAgICAgICAgICBOdW1iZXIocHJvamVjdHNbY3VycmVudFByb2plY3RdLnRhc2tzW2VtXS5pZFxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZShcInRhc2tcIiwgXCJcIikpICsgMSk7XG4gICAgICAgIH1cblxuXG5cblxuICAgICAgICBjb25zdCB0YXNrID0gdG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGZvcm1hdERhdGUoZHVlRGF0ZSksIHByaW9yaXR5LCBcInRhc2tcIiArXG4gICAgICAgICAgICBpZC50b1N0cmluZygpKTtcbiAgICAgICAgcmV0dXJuIHRhc2s7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYWxlcnQoXCJGYWlsdXJlLCB0YXNrIHdpdGggdGhlIHNhbWUgdGl0bGUgYWxyZWFkeSBleGlzdHNcIilcbiAgICB9XG59XG5cbi8vIHNpbWlsYXIgcHJvYmxlbSBhcyB0YXNrIGlkXG4vL2xldCBwcm9qZWN0SUQgPSBPYmplY3Qua2V5cyhwcm9qZWN0cykubGVuZ3RoO1xuXG4vLyBhZ2FpbnQsIG5lZWRlZCBhIHdheSB0byBnZXQgdmFsdWVzIGZyb20gdGhlIGZvcm1cbmZ1bmN0aW9uIGdldFByb2plY3QoKSB7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2pfdGl0bGVcIikudmFsdWU7XG4gICAgaWYgKCFwcm9qZWN0c1t0aXRsZV0pIHtcbiAgICAgICAgLy9jb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qX2R1ZURhdGVcIikudmFsdWU7XG5cbiAgICAgICAgbGV0IHByb2plY3RJRCA9IDA7XG4gICAgICAgIC8vIGVhc2llc3Qgd2F5IHRvIHByZXZlbnQgZHVwbGljYXRpb24gYnVnID0+IDIgcHJvamVjdHMgMSBpZFxuICAgICAgICBmb3IgKGxldCBlbSBpbiBwcm9qZWN0cykge1xuICAgICAgICAgICAgcHJvamVjdElEID0gTWF0aC5tYXgocHJvamVjdElELFxuICAgICAgICAgICAgICAgIE51bWJlcihwcm9qZWN0c1tlbV0uaWQucmVwbGFjZShcIlByXCIsIFwiXCIpKSArIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcHJvaiA9IHByb2plY3RGYWN0b3J5KHRpdGxlLCAvKmR1ZURhdGUsKi8gXCJQclwiICsgcHJvamVjdElELnRvU3RyaW5nKCkpO1xuICAgICAgICByZXR1cm4gcHJvajtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG5cbn1cblxuY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkUHJvamVjdFwiKTtcbmFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgcHJvakZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RGb3JtXCIpXG4gICAgcHJvakZvcm0uc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgIGNvbnN0IGNvdmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb3ZlclwiKTtcbiAgICBjb3Zlci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xufSk7XG5cbmNvbnN0IHByb2pfZ2J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJval9ncmVlblwiKTtcbnByb2pfZ2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBhZGRQcm9qZWN0KCk7XG59KTtcblxuY29uc3QgYWRkUHJvamVjdCA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0ID0gZ2V0UHJvamVjdCgpO1xuICAgIGlmICghcHJvamVjdCkge1xuICAgICAgICBhbGVydChcIkZhaWx1cmUsIGNhbid0IHJlcGVhdCBwcm9qZWN0IG5hbWVcIilcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXNldFByb2pGb3JtKCk7XG4gICAgICAgIHByb2plY3RzW3Byb2plY3QudGl0bGVdID0gcHJvamVjdDtcbiAgICAgICAgcHJvamVjdHNbcHJvamVjdC50aXRsZV0udGFza3MgPSB7fTtcbiAgICAgICAgcHJvamVjdHNbcHJvamVjdC50aXRsZV0uaWQgPSBwcm9qZWN0LmlkO1xuXG4gICAgICAgIGFkZFByb2plY3REKHByb2plY3QsIHByb2plY3QuaWQpO1xuICAgICAgICBhZGRQcm9qZWN0TGlzdGVuZXIocHJvamVjdC5pZCk7XG5cblxuICAgICAgICAvLyBzYXZlIHRvIGxvY2FsIHdoZW4geW91IGFkZCB0YXNrIG9yIHByb2plY3RcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcbiAgICB9XG59XG5cbmNvbnN0IHByb2pGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0Rm9ybVwiKTtcbnByb2pGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgaWYgKGUuY29kZSA9PSBcIkVudGVyXCIpIHtcbiAgICAgICAgYWRkUHJvamVjdCgpO1xuICAgIH1cbn0pXG5cbmNvbnN0IHByb2pfcmJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJval9yZWRcIik7XG5wcm9qX3JidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcmVzZXRQcm9qRm9ybSgpO1xufSk7XG5cbmZ1bmN0aW9uIHJlc2V0UHJvakZvcm0oKSB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdEZvcm1cIik7XG4gICAgY29uc3QgY292ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvdmVyXCIpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJval90aXRsZVwiKS52YWx1ZSA9IFwiXCI7XG4gICAgLy9kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2pfZHVlRGF0ZVwiKS52YWx1ZSA9IFwiXCI7XG4gICAgZm9ybS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICBjb3Zlci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbiAgICAvLyB0aGlzIGlzIGFsc28gZGVmYXVsdCwgcHJlc2VudCBpbiBkYXRlLmpzIVxuICAgIC8vY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJval9kdWVEYXRlXCIpO1xuICAgIC8vIGR1ZURhdGUudmFsdWUgPSBnZXREYXRlKCk7XG59XG5cbmNvbnN0IGNvbmZfZ3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbmZfZ3JlZW5cIik7XG5jb25mX2dyZWVuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG9uQ2xpY2tpbmdSUEIoKTtcbiAgICByZXNldENvbmZGb3JtKCk7XG59KTtcblxuY29uc3QgY29uZl9yZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbmZfcmVkXCIpO1xuY29uZl9yZWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcmVzZXRDb25mRm9ybSgpO1xufSlcblxuZnVuY3Rpb24gcmVzZXRDb25mRm9ybSgpIHtcbiAgICBjb25zdCBjb25mRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29uZmlybWF0aW9uRm9ybVwiKTtcbiAgICBjb25mRm9ybS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICBjb25zdCBjb3ZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY292ZXJcIik7XG4gICAgY292ZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufVxuXG5cblxuXG4vLyBhZGQgSUQgdG8gZWFjaCBwcm9qZWN0IGFuZCB0aGVuIFxuY29uc3QgYWRkUHJvamVjdExpc3RlbmVyID0gKGlkKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2lkfWApO1xuXG4gICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgdGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RlZCcpO1xuICAgICAgICB0ZW1wLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIGNoYW5nZVByb2plY3REKHByb2plY3QudGV4dENvbnRlbnQpO1xuICAgIH0pO1xufVxuXG5hZGRQcm9qZWN0TGlzdGVuZXIoXCJQcjBcIik7XG5cbi8vIG5hdmlnYXRlIGNhbGVuZGVyLCBsZWZ0IGFuZCByaWdodCBhcnJvd1xuY29uc3QgbGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYWxMZWZ0Jyk7XG5jb25zdCByaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYWxSaWdodCcpO1xuY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGF0ZScpO1xubGVmdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpbnB1dC5zdGVwRG93bigpO1xuICAgIGNoZWNrKCk7XG59KTtcbnJpZ2h0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlucHV0LnN0ZXBVcCgpO1xuICAgIGNoZWNrKCk7XG59KTtcbi8vIGRhdGUgaXMgcGlja2VkIG1hbnVhbGx5IGZyb20gdGhlIGNhbGFuZGVyLCBjbGljayBkb2Vzbid0IHdvcmtcbmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICBjaGVjaygpO1xufSlcblxuZnVuY3Rpb24gY2hlY2soKSB7XG4gICAgY29uc3QgY3VycmVudFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdGVkXCIpLnRleHRDb250ZW50O1xuICAgIGZvciAobGV0IGVtIGluIHByb2plY3RzW2N1cnJlbnRQcm9qZWN0XS50YXNrcykge1xuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtwcm9qZWN0c1tjdXJyZW50UHJvamVjdF0udGFza3NbZW1dLmlkXG4gICAgICAgICAgICB9YCk7XG4gICAgICAgIGlmIChleHBpcmVDaGVjayhwcm9qZWN0c1tjdXJyZW50UHJvamVjdF0udGFza3NbZW1dKSkge1xuICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJleHBpcmVkXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJleHBpcmVkXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgICBpZiAocHJval9leHBpcmVDaGVjaygpKSB7XG4gICAgICAgIGNvbnRlbnQuc3R5bGUuYm9yZGVyVG9wID0gXCIxdmggcmVkIHNvbGlkXCI7XG4gICAgICAgIGNvbnRlbnQuc3R5bGUuYm9yZGVyTGVmdCA9IFwiMXZoIHJlZCBzb2xpZFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRlbnQuc3R5bGUuYm9yZGVyID0gXCJub25lXCI7XG4gICAgfSAqL1xufVxuXG5cbmV4cG9ydCB7IGFkZFByb2plY3RMaXN0ZW5lciwgc2hvd0Zvcm1BbmRDb3ZlciwgcmVzZXRGb3JtIH0iLCJpbXBvcnQgeyBlcmFzZVRhc2tEIH0gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHsgc2hvd0Zvcm1BbmRDb3ZlciB9IGZyb20gJy4vZXZlbnRMaXN0ZW5lcnMuanMnO1xuaW1wb3J0IHsgZGVsZXRlVGFzaywgcHJvamVjdHMgfSBmcm9tICcuL3RvZG8uanMnO1xuXG5sZXQgd29ya2luZ190YXNrO1xuXG5cbi8vIFwiQ29udHJvbFwiIGZ1bmN0aW9uXG5jb25zdCBzZXR1cFRhc2tEID0gKHRhc2spID0+IHtcbiAgICB3b3JraW5nX3Rhc2sgPSB0YXNrOyAvLyBvYmplY3RcblxuICAgIHVJKCk7XG4gICAgc2V0dXBFZGl0QnV0dG9uKCk7XG4gICAgc2V0dXBEZWxldGVCdXR0b24oKTtcbn07XG5cbmNvbnN0IHVJID0gKCkgPT4ge1xuICAgIGNvbnN0IHRhc2tOb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7d29ya2luZ190YXNrLmlkfWApO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gd29ya2luZ190YXNrLnRpdGxlO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0YXNrX3RpdGxlXCIpO1xuICAgIHRhc2tOb2RlLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRlc2MudGV4dENvbnRlbnQgPSB3b3JraW5nX3Rhc2suZGVzY3JpcHRpb247XG4gICAgZGVzYy5jbGFzc0xpc3QuYWRkKFwidGFza19kZXNjXCIpO1xuICAgIHRhc2tOb2RlLmFwcGVuZENoaWxkKGRlc2MpO1xuXG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IFwiRHVlIERhdGU6IFwiICsgd29ya2luZ190YXNrLmR1ZURhdGU7XG4gICAgZHVlRGF0ZS5jbGFzc0xpc3QuYWRkKFwidGFza19kdWVEYXRlXCIpO1xuICAgIHRhc2tOb2RlLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuXG4gICAgdGFza05vZGUuY2xhc3NMaXN0LmFkZChgJHt3b3JraW5nX3Rhc2sucHJpb3JpdHl9YClcbn07XG5cblxuY29uc3Qgc2V0dXBEZWxldGVCdXR0b24gPSAoKSA9PiB7XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnRuLnRleHRDb250ZW50ID0gXCJYXCI7XG5cbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt3b3JraW5nX3Rhc2suaWR9IC50YXNrQnV0dG9uc2ApO1xuICAgIGRpdi5hcHBlbmRDaGlsZChidG4pO1xuXG4gICAgLy8gd2UgbmVlZCB0byBvYnRhaW4gdGFzayBvYmplY3QgZnJvbSB0aGUgYnV0dG9uIGl0c2VsZlxuICAgIC8vIGJlY2F1c2UgaWYgd2UgdXNlIGFueSB2YXJpYWJsZSBpdCB3b24ndCBkZWxldGUgcHJvcGVybHlcbiAgICAvLyB0aGlzIGlzIGRvbmUgdmlhIG1hdGNoaW5nIGJ0biBjbGFzcyBuYW1lIHdoaWNoIGlzIGVxdWFsIHRvIHRoZSBpZFxuICAgIC8vIG9mIHRoZSB0YXNrIHRoYXQgd2UgYXJlIHNlZWtpbmcgaW4gYSBwcm9qZWN0cyBvYmplY3RcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCB0YXNrSUQgPSBbLi4uZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNsYXNzTGlzdF1bMF07XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZ2V0VGl0bGUodGFza0lEKTtcbiAgICAgICAgY29uc3QgY3VycmVudFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdGVkXCIpLnRleHRDb250ZW50O1xuICAgICAgICBkZWxldGVUYXNrKGN1cnJlbnRQcm9qZWN0LCBwcm9qZWN0c1tjdXJyZW50UHJvamVjdF0udGFza3NbdGl0bGVdKTtcbiAgICAgICAgZXJhc2VUYXNrRCh0YXNrSUQpO1xuICAgIH0pO1xufTtcblxuZnVuY3Rpb24gZ2V0VGl0bGUodGFza0lEKSB7XG4gICAgY29uc3QgY3VycmVudFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdGVkXCIpLnRleHRDb250ZW50O1xuICAgIGxldCB0aXRsZTtcbiAgICBmb3IgKGxldCBlbSBpbiBwcm9qZWN0c1tjdXJyZW50UHJvamVjdF0udGFza3MpIHtcbiAgICAgICAgaWYgKHByb2plY3RzW2N1cnJlbnRQcm9qZWN0XS50YXNrc1tlbV0uaWQgPT0gdGFza0lEKSB7XG4gICAgICAgICAgICB0aXRsZSA9IHByb2plY3RzW2N1cnJlbnRQcm9qZWN0XS50YXNrc1tlbV0udGl0bGU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRpdGxlO1xufVxuXG5jb25zdCBzZXR1cEVkaXRCdXR0b24gPSAoKSA9PiB7XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnRuLnRleHRDb250ZW50ID0gXCJFZGl0XCI7XG5cbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwidGFza0J1dHRvbnNcIik7XG5cbiAgICBjb25zdCB0YXNrTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3dvcmtpbmdfdGFzay5pZH1gKTtcbiAgICB0YXNrTm9kZS5hcHBlbmRDaGlsZChkaXYpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChidG4pO1xuXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgc2hvd0Zvcm1BbmRDb3ZlcigpO1xuICAgICAgICBzZXR1cEVkaXRGb3JtKFxuICAgICAgICAgICAgZ2V0VGl0bGUoWy4uLmUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5jbGFzc0xpc3RdWzBdKSk7XG4gICAgfSk7XG59O1xuXG5mdW5jdGlvbiBzZXR1cEVkaXRGb3JtKHRpdGxlKSB7XG4gICAgY29uc3QgY3VycmVudFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdGVkXCIpLnRleHRDb250ZW50O1xuICAgIC8vIHRhc2sgPSBUSEUgT05FIEJFSU5HIENMSUNLRURcbiAgICBjb25zdCB0YXNrID0gcHJvamVjdHNbY3VycmVudFByb2plY3RdLnRhc2tzW3RpdGxlXTtcblxuICAgIC8vIGZpbGwgdGhlIGZvcm0gY29ycmVjdGx5XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZVwiKS52YWx1ZSA9IHRhc2sudGl0bGU7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvblwiKS52YWx1ZSA9IHRhc2suZGVzY3JpcHRpb247XG4gICAgbGV0IGFyciA9IHRhc2suZHVlRGF0ZS5zcGxpdChcIi1cIik7XG4gICAgYXJyID0gW2FyclsyXSwgYXJyWzBdLCBhcnJbMV1dLmpvaW4oXCItXCIpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlRGF0ZVwiKS52YWx1ZSA9IGFycjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByaW9yaXR5XCIpLnZhbHVlID0gdGFzay5wcmlvcml0eTtcblxuICAgIC8vIGRlbGV0ZSwgYW5kIGxldCB0aGUgZ3JlZW4gYnV0dG9uIGJ1aWxkIGl0IGZvciB5b3UsIG5vIGluIHRoaXMgY2FzZVxuICAgIC8vIHNob3VsZCBoYXZlIGEgc3BlY2lhbCBmdW5jdGlvblxuICAgIGVyYXNlVGFza0QocHJvamVjdHNbY3VycmVudFByb2plY3RdLnRhc2tzW3RpdGxlXS5pZClcbiAgICBkZWxldGUgcHJvamVjdHNbY3VycmVudFByb2plY3RdLnRhc2tzW3RpdGxlXTtcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG5cbiAgICBjb25zdCByYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZWRcIik7XG4gICAgcmJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbiAgICBjb25zdCBnYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ncmVlblwiKTtcbiAgICBnYnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwieWVsbG93XCI7XG4gICAgZ2J1dHRvbi50ZXh0Q29udGVudCA9IFwiRWRpdFwiXG59XG5cbmV4cG9ydCB7IHNldHVwVGFza0QgfTsiLCJmdW5jdGlvbiBzdG9yYWdlQXZhaWxhYmxlKHR5cGUpIHtcbiAgICBsZXQgc3RvcmFnZTtcbiAgICB0cnkge1xuICAgICAgICBzdG9yYWdlID0gd2luZG93W3R5cGVdO1xuICAgICAgICBjb25zdCB4ID0gJ19fc3RvcmFnZV90ZXN0X18nO1xuICAgICAgICBzdG9yYWdlLnNldEl0ZW0oeCwgeCk7XG4gICAgICAgIHN0b3JhZ2UucmVtb3ZlSXRlbSh4KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBlIGluc3RhbmNlb2YgRE9NRXhjZXB0aW9uICYmIChcbiAgICAgICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgICAgICAgIGUuY29kZSA9PT0gMjIgfHxcbiAgICAgICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgICAgIGUuY29kZSA9PT0gMTAxNCB8fFxuICAgICAgICAgICAgLy8gdGVzdCBuYW1lIGZpZWxkIHRvbywgYmVjYXVzZSBjb2RlIG1pZ2h0IG5vdCBiZSBwcmVzZW50XG4gICAgICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAgICAgICBlLm5hbWUgPT09ICdRdW90YUV4Y2VlZGVkRXJyb3InIHx8XG4gICAgICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgICAgICBlLm5hbWUgPT09ICdOU19FUlJPUl9ET01fUVVPVEFfUkVBQ0hFRCcpICYmXG4gICAgICAgICAgICAvLyBhY2tub3dsZWRnZSBRdW90YUV4Y2VlZGVkRXJyb3Igb25seSBpZiB0aGVyZSdzIHNvbWV0aGluZyBhbHJlYWR5IHN0b3JlZFxuICAgICAgICAgICAgKHN0b3JhZ2UgJiYgc3RvcmFnZS5sZW5ndGggIT09IDApO1xuICAgIH1cbn1cblxuY29uc3QgcHJvamVjdHMgPSB7XG4gICAgSE9NRToge1xuICAgICAgICB0YXNrczoge1xuICAgICAgICB9LFxuICAgICAgICBpZDogXCJQcjBcIlxuICAgIH0sXG59O1xuXG5pZiAoc3RvcmFnZUF2YWlsYWJsZSkge1xuICAgIHZhciByZXRyaWV2ZWRPYmplY3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKTtcbiAgICByZXRyaWV2ZWRPYmplY3QgPSBKU09OLnBhcnNlKHJldHJpZXZlZE9iamVjdCk7XG4gICAgZm9yIChsZXQgZW0gaW4gcmV0cmlldmVkT2JqZWN0KSB7XG4gICAgICAgIHByb2plY3RzW2VtXSA9IHJldHJpZXZlZE9iamVjdFtlbV07XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHByb2plY3RzKTtcbiAgICAvL3Byb2plY3RzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJyk7XG59XG5cbmNvbnN0IHRvZG8gPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgaWQpID0+IHtcbiAgICByZXR1cm4geyB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBpZCB9O1xufTtcblxuZnVuY3Rpb24gZGVsZXRlVGFzayhwcm9qZWN0LCB0YXNrKSB7XG4gICAgY29uc29sZS5sb2cocHJvamVjdCk7XG4gICAgZGVsZXRlIHByb2plY3RzW3Byb2plY3RdLnRhc2tzW3Rhc2sudGl0bGVdO1xuICAgIC8vIHdlIGFyZSBhY3R1YWxseSBkZWxldGluZywgbm90IGp1c3QgZXJhc2luZyBmcm9tIHNjcmVlbiEhIVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG59XG5cbmNvbnN0IHByb2plY3RGYWN0b3J5ID0gKHRpdGxlLyosIGR1ZURhdGUqLywgaWQpID0+IHtcbiAgICByZXR1cm4geyB0aXRsZS8qLCBkdWVEYXRlKi8sIGlkIH07XG59O1xuXG4vLyB0ZW1wXG5leHBvcnQgeyBwcm9qZWN0cywgdG9kbywgZGVsZXRlVGFzaywgcHJvamVjdEZhY3RvcnkgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0ICcuL2V2ZW50TGlzdGVuZXJzJztcbmltcG9ydCAnLi9kYXRlJztcbmltcG9ydCB7IGxvYWRGcm9tU3RvcmFnZSB9IGZyb20gJy4vY29udHJvbCc7XG5cbmxvYWRGcm9tU3RvcmFnZSgpO1xuLypcbiAgICBUT0RPOlxuICAgIC0gQ29uZmlndXJlIGRhdGVzIHByb3Blcmx5XG4gICAgICAgIFR3byB0eXBlcyBvZiB0YXNrczpcbiAgICAgICAgICAgIDEuIFNvbWV0aGluZyB0aGF0IG5lZWRzIHRvIGJlIGRvbmUgb24gYSBzcGVjaWZpYyBkYXkuIEl0IGNhbiBoYXZlIGFcbiAgICAgICAgICAgICAgICBkdWVEYXRlL2R1ZUhvdXIsIGJ1dCBpdCdzIG9wdGlvbmFsLiBJdCBvbmx5IHNob3dzIG9uIG9uZSBkYXlcbiAgICAgICAgICAgIDIuIFNvbWV0aGluZyB0aGF0IG5lZWRzIHRvIGJlIGRvbmUgdGlsbCBhIHNwZWNpZmllZCBkdWVEYXRlLiBTbyBpdFxuICAgICAgICAgICAgICAgIHNob3dzIGV2ZXJ5IGRheSB1bnRpbCB0aGUgZHVlRGF0ZS4gRXhwaXJlZCBzZWN0aW9uIG1pZ2h0IGJlIFxuICAgICAgICAgICAgICAgIG9mIHVzZS5cblxuICAgICAgICAgICAgSWRlYTpcbiAgICAgICAgICAgIEFsd2F5cyBzaG93IGFsbCB0aGF0IGNhbiBiZSBzaG93bi4gSWYgaXQgaGFwcGVucyB0aGF0IG9uZSBvZiB0aGVtXG4gICAgICAgICAgICBleHBpcmVkIHNpbXBseSBuZWRvdGUgc28gdXNpbmcgcmVkIGJvcmRlciBvciAoZXhwaXJlZCkgdGFnLlxuICAgICAgICAgICAgSXQgY2FuIGJlIHNob3duIGlmIGl0cyBzdGFydCBkYXkgaXMgdG9kYXkgb3IgZWFybGllci4gLS8vLy1cblxuXG5cbiAgICAtIEFkZCBhIGZvcm0gZm9yIHVzZXIgaW5wdXQgLS8vLy1cbiAgICAtIFRhc2sgY2hhbmdlczpcbiAgICAgICAgICAgIDEpIFN0eWxlIGNoYW5nZXM6IFJlZG8gdGFzayBzcXVhcmVzIC0vLy8tLCBtYXliZSBub3RcbiAgICAgICAgICAgIDIpIFRhc2sgZGVzY3JpcHRpb24vZWRpdCBzeXN0ZW0gLS8vLy1cbiAgICAgICAgICAgIDMpIE1ha2UgcHJpb3JpdGVzIG1hdHRlciwgYm9yZGVyIGNvbG9yIC0vLy8tXG4gICAgLSBGSVggcmVtb3ZlIGJ1dHRvbiwgbmFtZWx5IHdoZW4geW91IGRvbid0IGlucHV0IGFueXRoaW5nIGluIHRoZSBmb3JtXG4gICAgICAgIG11bHRpcGxlIHRhc2tzIGFyZSBtYWRlIGV2ZW50IHRob3VnaCB0aGVyZSBpcyBvbmx5IG9uZSBzYXZlZCBpbiB0aGUgXG4gICAgICAgIG9iamVjdC4gaXQgc2hvd3MgY29ycmVjdGx5IGFmdGVyIHJlZnJlc2ggLS8vLy1cbiAgICAtIEZJWDogcHJldmVudCBmcm9tIGNoYW5naW5nIHByb2plY3RzIHdoZW4gdGhlIGZvcm0gaXMgb3BlbmVkLFxuICAgICAgICBjb25zaWRlciBhZGRpbmcgYSBjb3ZlciBqdXN0IGxpa2UgaW4gdGhlIGxpYnJhcnkgcHJvamVjdCAtLy8vLVxuICAgIC0gRklYOiBwcm9qZWN0L3Nob3J0Y3V0IG5hbWUgbGV0dGVycyBnb2luZyB0byBuZXcgbGluZSwgaW5zdGVhZCBvbmx5IHdvcmRzXG4gICAgICAgIC0vLy8tIGJ1dCBjYW4ndCBmaXggbG9uZyBuYW1lcywgbWF5YmUgZmluZCBhIHdheSB0byBhZGQgXCItXCIgYXQgZW5kIHdoZW5cbiAgICAgICAgYnJlYWtpbmdcbiAgICAtIEFkZCBMb2NhbCBzdG9yYWdlIC0vLy8tXG4gICAgLSBBZGQgYSBjb25maXJtYXRpb24gZm9ybSB3aGVuIGF0dGVtcHRpbmcgdG8gZGVsZXRlIGEgcHJvamVjdCAtLy8vLVxuICAgIC0gQWRkIG1lZGlhIHF1ZXJpZXNcbiAgICAtIGNoYW5nZSBwcm9qZWN0SWQgYW5kIGlkIHRvIGNhbGN1bGF0ZSBpZCBiYXNlZCBvbiB3aGF0IGlzIHRoZSBiaWdnZXN0IGlkXG4gICAgICAgIHByZXNlbnQgb24gdGhlIGN1cnJlbnQgcHJvamVjdC9wcm9qZWN0cyBhbmQgdGhlbiBhZGQgMSwgdGhpcyB3YXlcbiAgICAgICAgaXQgaXMgbm90IGJhc2VkIG9uIGxlbmd0aCBhbmQgZHVwZSBidWdzIGRvIG5vdCBhcHBlYXIgLS8vLy1cbiAgICAtIEZpeCBkYXRlcyBmb3IgZWRpdGluZyEgLS8vLy1cbiAgICAtIERvIHNvbWV0aGluZyB3aXRoIHByb2plY3QgZGF0ZXMsIG1heWJlIGNvbnRlbnQgYm9yZGVyIHRvIHNpZ25pZnkgdGhlIGxhdGVcbiAgICAgICAgcHJvamVjdCAtLy8vLVxuICAgIC0gTWFrZSBhIHJlZnJlc2ggZnVuY3Rpb24sIHRoYXQgcmVsb2FkcywgbWF5YmUganVzdCBjaGFuZ2VQcm9qZWN0IHNvIHlvdVxuICAgICAgICBkb24ndCBoYXZlIHRvIGxvY2F0aW9uLnJlbG9hZCgpXG4gICAgLSBUZXh0QXJlYSBleHBhbmRpbmcgRDogLS8vLy1cbiAgICAtIGNvbnNpZGVyIG1vcmUgY29scyBhbmQgcm93IGZvciBUZXh0QXJlYSAtLy8vLVxuICAgIC0gUmV0aGluayB0aGUgbmVlZCBmb3IgZHVlRGF0ZSBpbiBwcm9qZWN0LCBJIHRoaW5rIG5vdCBuZWVkZWQhISAtLy8vLVxuICAgIC0gcHJldmVudCB0aXRsZSBuYW1lIGR1cGxpY2F0aW9uIG9uIGFkZGluZyB0YXNrLCB0aGUgZm9ybSBnb2VzIGF3YXkgZm9yIHNvbWVcbiAgICAgICAgcmVhc29uIC0vLy8tXG4gICAgLSBnaG9zdCB0YXNrIGFwcGVhcmluZzogYnVnIC0vLy8tXG4gICAgLSBtYWtlIHJlZCBidXR0b24gcmVjb3ZlciB0aGUgdGFzaywgeW91IGhhdmUgYWxsIHRoZSBkYXRhIG5lZWRlZCBpbiB0aGUgZm9ybVxuICAgICAgICAsIGluc3RlYWQgcmV3b3JrZWQgdG8gaW5jbHVkZSBvbmx5IGVkaXQgYnV0dG9uIC0vLy8tXG4gICAgLSBhZGQga2V5YmluZHMsIGVzcGVjaWFsbHkgZW50ZXIgaW5zdGVhZCBvZiBtb3VzZSBjbGlja1xuICAgIC0gQ0xFQU4gQ09ERSEhISEhIHlvdSBrbm93IGN1cnJlbnRQcm9qZWN0IHJlcGVhdCBhbGwgdGhlIHRpbWUgYW5kIG90aGVyIGphenpcbiAgICAtIGV4cGVyaW1lbnQgd2l0aCB3b3JraW5nX3Rhc2ssIHRyeSB0byByZW1vdmVcbiAgICAtIHJld29yayBtb2R1bGVzLCBtYXliZSBubyBuZWVkIHRvIGdlbmVyYWxpemUgZXZlcnl0aGluZywgZXhwZXJpbWVudFxuICAgIC0gY2xlYW5lciBjc3MsIG1vcmUgY29tbWVudHMsIGNvbnNpZGVyIGFuaW1hdGlvbnMvdHJhbnNmb3JtYXRpb25zIGZvciBcbiAgICAgICAgY29uc2lkZXIgcmVtYWtpbmcgY3NzIGdyb3VuZCB1cCwgbWFrZSBpdCB3b3JrIG9uIG1vYmlsZSBmaXJzdFxuICAgIC0gZGVsZXRlIHRoZSB0YXNrIG9ubHkgYWZ0ZXIgdGhlIGVkaXQgZm9ybSBpcyBzdWJtaXR0ZWQsIHBvdGVudGlhbGx5IHVzZVxuICAgIGFzeW5jL3dhaXQgZnVuY3Rpb25cbiovXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9