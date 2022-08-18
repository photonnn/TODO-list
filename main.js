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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    --neutral: #f5f5f5;\n    --violet: white;\n    --stone: #6e6279;\n    --zinc: #3f3f46;\n    --hover: rgb(69, 31, 83);\n\n}\n\nbody,\nhtml {\n    height: 100%;\n    width: 100%;\n}\n\nbody {\n    display: flex;\n}\n\n#sidebar {\n    flex: 1;\n    background-color: var(--zinc);\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    width: 100%;\n}\n\n#sidebar>div {\n    font-size: 6vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    ;\n}\n\n.home {\n    flex: 1;\n    border-bottom: 5px black solid;\n    background-color: var(--stone);\n    user-select: none;\n}\n\n#projects {\n    flex: 7;\n}\n\n.home:hover {\n    background-color: var(--hover);\n    cursor: pointer;\n}\n\n#content {\n    flex: 3;\n    background-color: grey;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    flex-direction: column;\n    height: 100%;\n    width: 100%;\n}\n\n.expand {\n    display: flex;\n    flex-direction: column;\n}\n\n.expand>div:first-child,\n#addProject {\n    flex: 1;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.expand>* {\n    width: 100%;\n}\n\n#addProject {\n    border-top: 3px solid black;\n    background-color: var(--stone);\n    user-select: none;\n}\n\n#addProject:hover {\n    cursor: pointer;\n    background-color: var(--hover);\n}\n\n.expand>div:first-child {\n    border-bottom: 3px solid black;\n}\n\n\n.expand .shortcut {\n    background-color: var(--stone);\n    padding: 5%;\n    border-bottom: 3px solid black;\n    word-break: break-word;\n    user-select: none;\n    cursor: pointer;\n    display: flex;\n    justify-content: space-between;\n}\n\n.expand .shortcuts {\n    overflow-y: auto;\n    max-height: 70vh;\n}\n\n.shortcut:hover {\n    background-color: var(--hover);\n    cursor: pointer;\n}\n\n.expand>div {\n    flex: 5;\n    text-align: center;\n}\n\n#tasks {\n    flex: 1;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(35vh, 1fr));\n    grid-gap: 2vh;\n    overflow-y: auto;\n    width: 100%;\n    padding: 3%;\n}\n\n#tasks>div {\n    height: 35vh;\n    background: rgb(0, 147, 223);\n    background: radial-gradient(circle, rgba(0, 147, 223, 1) 0%,\n            rgba(211, 239, 242, 1) 49%, rgba(17, 16, 16, 1) 100%);\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    border-radius: 10%;\n    font-size: clamp(0, 2rem, calc(2rem + 2.5vh));\n}\n\n#tasks>div>div {\n    word-break: break-word;\n}\n\n.Must {\n    background: rgb(232, 5, 5);\n    background: radial-gradient(circle, rgba(232, 5, 5, 1) 0%,\n            rgba(213, 144, 144, 1) 49%, rgba(17, 16, 16, 1) 100%) !important;\n}\n\n.Necessary {\n    background: rgb(232, 107, 5);\n    background: radial-gradient(circle, rgba(232, 107, 5, 1) 0%,\n            rgba(235, 200, 163, 1) 49%, rgba(17, 16, 16, 1) 100%) !important;\n}\n\n.Maybe {\n    background: rgb(193, 232, 5);\n    background: radial-gradient(circle, rgba(193, 232, 5, 1) 0%,\n            rgba(224, 235, 163, 1) 49%, rgba(17, 16, 16, 1) 100%) !important;\n}\n\n#content>*:not(#tasks) {\n    display: flex;\n    justify-content: center;\n    width: 100%;\n}\n\n.header {\n    font-size: 40px;\n}\n\n.header .RPB {\n    background-color: red;\n    color: rgb(85, 3, 19);\n    font-size: 2rem;\n    padding: 1%;\n    position: absolute;\n    right: 0;\n}\n\n#addTask {\n    font-size: 40px;\n    color: white;\n    background-color: black;\n    user-select: none;\n}\n\n#addTask:hover {\n    opacity: 0.5;\n    cursor: pointer;\n}\n\n#addTask:active {\n    opacity: 0.2;\n}\n\n.selected {\n    border-right: 10px groove var(--hover);\n}\n\n#date {\n    width: 40vh !important;\n    font-size: 5vh;\n    border: none;\n    background: grey;\n}\n\n.calLeft {\n    margin-right: 2vh;\n}\n\n.calRight {\n    margin-left: 2vh;\n}\n\n.navigatecal {\n    font-size: 8vh;\n    cursor: pointer;\n    user-select: none;\n}\n\n#taskForm {\n    width: 65vh;\n    height: 65vh;\n    left: calc(50% - 10vh);\n    top: calc(50% - 30vh);\n    padding-left: 5%;\n    padding-right: 5%;\n    font-size: 3vh;\n}\n\n#projectForm {\n    width: 55vh;\n    height: 25vh;\n    left: calc(50% - 10vh);\n    top: calc(50% - 30vh);\n    padding: 0 2% 0 2%;\n    font-size: 3vh;\n}\n\n#confirmationForm {\n    width: 50vh;\n    height: 35vh;\n    left: calc(50% - 10vh);\n    top: calc(50% - 30vh);\n    padding: 0 3% 0 3%;\n    font-size: 3vh;\n}\n\n#projectForm,\n#taskForm,\n#confirmationForm {\n    visibility: hidden;\n    position: absolute;\n    z-index: 2;\n    background-color: var(--stone);\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: flex-start;\n    border: 5px var(--hover) solid;\n}\n\n.cover {\n    position: fixed;\n    top: 0;\n    left: 0;\n    background: rgba(0, 0, 0, 0.6);\n    z-index: 1;\n    width: 100%;\n    height: 100%;\n    display: none;\n}\n\n#taskForm div,\n#projectForm div {\n    display: flex;\n}\n\n#taskForm label,\n#projectForm label {\n    flex: 1;\n    min-width: 20vh;\n    font-size: 3vh;\n}\n\n#taskForm input,\n#taskForm select {\n    flex: 6;\n    min-width: 30vh;\n}\n\n#description,\n#taskForm input,\n#priority,\n#proj_title,\n#proj_dueDate {\n    font-size: 2vh;\n    padding: 1%;\n}\n\n#description {\n    height: 20vh;\n    max-width: 30vh;\n    resize: none;\n}\n\n.redBtn {\n    background-color: red;\n}\n\n.greenBtn {\n    background-color: rgb(47, 255, 47);\n}\n\n.redBtn,\n.greenBtn {\n    font-size: 3vh;\n    padding: 10%;\n    width: 15vh;\n    height: 0.5vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.fbtn {\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n}\n\n.expired {\n    border: 5px solid red;\n}\n\n.task_desc {\n    overflow-y: auto;\n    flex: 6;\n    font-size: 1.5rem;\n}\n\n.task_dueDate {\n    flex: 1;\n}\n\n.task_title, .task_desc, .task_dueDate {\n    border-bottom: 1px solid rgba(0, 0, 0, 0.212);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n}\n\n.task_title {\n    flex: 1;\n    padding: 0 6%;\n}\n\n.taskButtons  > button {\n    font-size: 1.5rem;\n    color: white;\n    background-color: black;\n    opacity: 0.5;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    --neutral: #f5f5f5;\n    --violet: white;\n    --stone: #6e6279;\n    --zinc: #3f3f46;\n    --hover: rgb(69, 31, 83);\n\n}\n\nbody,\nhtml {\n    height: 100%;\n    width: 100%;\n}\n\nbody {\n    display: flex;\n}\n\n#sidebar {\n    flex: 1;\n    background-color: var(--zinc);\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    width: 100%;\n}\n\n#sidebar>div {\n    font-size: 6vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    ;\n}\n\n.home {\n    flex: 1;\n    border-bottom: 5px black solid;\n    background-color: var(--stone);\n    user-select: none;\n}\n\n#projects {\n    flex: 7;\n}\n\n.home:hover {\n    background-color: var(--hover);\n    cursor: pointer;\n}\n\n#content {\n    flex: 3;\n    background-color: grey;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    flex-direction: column;\n    height: 100%;\n    width: 100%;\n}\n\n.expand {\n    display: flex;\n    flex-direction: column;\n}\n\n.expand>div:first-child,\n#addProject {\n    flex: 1;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.expand>* {\n    width: 100%;\n}\n\n#addProject {\n    border-top: 3px solid black;\n    background-color: var(--stone);\n    user-select: none;\n}\n\n#addProject:hover {\n    cursor: pointer;\n    background-color: var(--hover);\n}\n\n.expand>div:first-child {\n    border-bottom: 3px solid black;\n}\n\n\n.expand .shortcut {\n    background-color: var(--stone);\n    padding: 5%;\n    border-bottom: 3px solid black;\n    word-break: break-word;\n    user-select: none;\n    cursor: pointer;\n    display: flex;\n    justify-content: space-between;\n}\n\n.expand .shortcuts {\n    overflow-y: auto;\n    max-height: 70vh;\n}\n\n.shortcut:hover {\n    background-color: var(--hover);\n    cursor: pointer;\n}\n\n.expand>div {\n    flex: 5;\n    text-align: center;\n}\n\n#tasks {\n    flex: 1;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(35vh, 1fr));\n    grid-gap: 2vh;\n    overflow-y: auto;\n    width: 100%;\n    padding: 3%;\n}\n\n#tasks>div {\n    height: 35vh;\n    background: rgb(0, 147, 223);\n    background: radial-gradient(circle, rgba(0, 147, 223, 1) 0%,\n            rgba(211, 239, 242, 1) 49%, rgba(17, 16, 16, 1) 100%);\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    border-radius: 10%;\n    font-size: clamp(0, 2rem, calc(2rem + 2.5vh));\n}\n\n#tasks>div>div {\n    word-break: break-word;\n}\n\n.Must {\n    background: rgb(232, 5, 5);\n    background: radial-gradient(circle, rgba(232, 5, 5, 1) 0%,\n            rgba(213, 144, 144, 1) 49%, rgba(17, 16, 16, 1) 100%) !important;\n}\n\n.Necessary {\n    background: rgb(232, 107, 5);\n    background: radial-gradient(circle, rgba(232, 107, 5, 1) 0%,\n            rgba(235, 200, 163, 1) 49%, rgba(17, 16, 16, 1) 100%) !important;\n}\n\n.Maybe {\n    background: rgb(193, 232, 5);\n    background: radial-gradient(circle, rgba(193, 232, 5, 1) 0%,\n            rgba(224, 235, 163, 1) 49%, rgba(17, 16, 16, 1) 100%) !important;\n}\n\n#content>*:not(#tasks) {\n    display: flex;\n    justify-content: center;\n    width: 100%;\n}\n\n.header {\n    font-size: 40px;\n}\n\n.header .RPB {\n    background-color: red;\n    color: rgb(85, 3, 19);\n    font-size: 2rem;\n    padding: 1%;\n    position: absolute;\n    right: 0;\n}\n\n#addTask {\n    font-size: 40px;\n    color: white;\n    background-color: black;\n    user-select: none;\n}\n\n#addTask:hover {\n    opacity: 0.5;\n    cursor: pointer;\n}\n\n#addTask:active {\n    opacity: 0.2;\n}\n\n.selected {\n    border-right: 10px groove var(--hover);\n}\n\n#date {\n    width: 40vh !important;\n    font-size: 5vh;\n    border: none;\n    background: grey;\n}\n\n.calLeft {\n    margin-right: 2vh;\n}\n\n.calRight {\n    margin-left: 2vh;\n}\n\n.navigatecal {\n    font-size: 8vh;\n    cursor: pointer;\n    user-select: none;\n}\n\n#taskForm {\n    width: 65vh;\n    height: 65vh;\n    left: calc(50% - 10vh);\n    top: calc(50% - 30vh);\n    padding-left: 5%;\n    padding-right: 5%;\n    font-size: 3vh;\n}\n\n#projectForm {\n    width: 55vh;\n    height: 25vh;\n    left: calc(50% - 10vh);\n    top: calc(50% - 30vh);\n    padding: 0 2% 0 2%;\n    font-size: 3vh;\n}\n\n#confirmationForm {\n    width: 50vh;\n    height: 35vh;\n    left: calc(50% - 10vh);\n    top: calc(50% - 30vh);\n    padding: 0 3% 0 3%;\n    font-size: 3vh;\n}\n\n#projectForm,\n#taskForm,\n#confirmationForm {\n    visibility: hidden;\n    position: absolute;\n    z-index: 2;\n    background-color: var(--stone);\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: flex-start;\n    border: 5px var(--hover) solid;\n}\n\n.cover {\n    position: fixed;\n    top: 0;\n    left: 0;\n    background: rgba(0, 0, 0, 0.6);\n    z-index: 1;\n    width: 100%;\n    height: 100%;\n    display: none;\n}\n\n#taskForm div,\n#projectForm div {\n    display: flex;\n}\n\n#taskForm label,\n#projectForm label {\n    flex: 1;\n    min-width: 20vh;\n    font-size: 3vh;\n}\n\n#taskForm input,\n#taskForm select {\n    flex: 6;\n    min-width: 30vh;\n}\n\n#description,\n#taskForm input,\n#priority,\n#proj_title,\n#proj_dueDate {\n    font-size: 2vh;\n    padding: 1%;\n}\n\n#description {\n    height: 20vh;\n    max-width: 30vh;\n    resize: none;\n}\n\n.redBtn {\n    background-color: red;\n}\n\n.greenBtn {\n    background-color: rgb(47, 255, 47);\n}\n\n.redBtn,\n.greenBtn {\n    font-size: 3vh;\n    padding: 10%;\n    width: 15vh;\n    height: 0.5vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.fbtn {\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n}\n\n.expired {\n    border: 5px solid red;\n}\n\n.task_desc {\n    overflow-y: auto;\n    flex: 6;\n    font-size: 1.5rem;\n}\n\n.task_dueDate {\n    flex: 1;\n}\n\n.task_title, .task_desc, .task_dueDate {\n    border-bottom: 1px solid rgba(0, 0, 0, 0.212);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n}\n\n.task_title {\n    flex: 1;\n    padding: 0 6%;\n}\n\n.taskButtons  > button {\n    font-size: 1.5rem;\n    color: white;\n    background-color: black;\n    opacity: 0.5;\n}"],"sourceRoot":""}]);
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
    console.log(_todo__WEBPACK_IMPORTED_MODULE_0__.projects);
    console.log(task);
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
/* harmony import */ var _date_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./date.js */ "./src/date.js");
/* harmony import */ var _control_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./control.js */ "./src/control.js");






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
    console.log(task.dueDate.split("-")); // month day year
    let arr = task.dueDate.split("-");
    arr = [arr[2], arr[0], arr[1]].join("-");
    document.getElementById("dueDate").value = arr;
    document.getElementById("priority").value = task.priority;

    const gbutton = document.querySelector(".green");
    //task.add = false;
    gbutton.addEventListener('click', () => {
        const currentProject = document.querySelector(".selected").textContent;
        if (_todo_js__WEBPACK_IMPORTED_MODULE_2__.projects[currentProject].flag) {
            const temp = task.title;
            task.title = document.getElementById("title").value;
            task.description = document.getElementById("description").value;

            task.dueDate = (0,_date_js__WEBPACK_IMPORTED_MODULE_3__.formatDate)(document.getElementById("dueDate").value);

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

            // serves as a way to refresh data
            (0,_control_js__WEBPACK_IMPORTED_MODULE_4__.changeProjectD)(currentProject);
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
    - Prevent from inputting non alphabet characters in input
*/



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFlBQVksTUFBTSxPQUFPLE9BQU8sS0FBSyxZQUFZLE1BQU0sT0FBTyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxPQUFPLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsT0FBTyxTQUFTLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsNkJBQTZCLGlCQUFpQixnQkFBZ0IsNkJBQTZCLHlCQUF5QixzQkFB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LmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb250cm9sLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kYXRlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2V2ZW50TGlzdGVuZXJzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zZXR1cFRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgLS1uZXV0cmFsOiAjZjVmNWY1O1xcbiAgICAtLXZpb2xldDogd2hpdGU7XFxuICAgIC0tc3RvbmU6ICM2ZTYyNzk7XFxuICAgIC0temluYzogIzNmM2Y0NjtcXG4gICAgLS1ob3ZlcjogcmdiKDY5LCAzMSwgODMpO1xcblxcbn1cXG5cXG5ib2R5LFxcbmh0bWwge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI3NpZGViYXIge1xcbiAgICBmbGV4OiAxO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS16aW5jKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI3NpZGViYXI+ZGl2IHtcXG4gICAgZm9udC1zaXplOiA2dmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICA7XFxufVxcblxcbi5ob21lIHtcXG4gICAgZmxleDogMTtcXG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IGJsYWNrIHNvbGlkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdG9uZSk7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4jcHJvamVjdHMge1xcbiAgICBmbGV4OiA3O1xcbn1cXG5cXG4uaG9tZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGZsZXg6IDM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmV4cGFuZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5leHBhbmQ+ZGl2OmZpcnN0LWNoaWxkLFxcbiNhZGRQcm9qZWN0IHtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5leHBhbmQ+KiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jYWRkUHJvamVjdCB7XFxuICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3RvbmUpO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuI2FkZFByb2plY3Q6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyKTtcXG59XFxuXFxuLmV4cGFuZD5kaXY6Zmlyc3QtY2hpbGQge1xcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgYmxhY2s7XFxufVxcblxcblxcbi5leHBhbmQgLnNob3J0Y3V0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3RvbmUpO1xcbiAgICBwYWRkaW5nOiA1JTtcXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGJsYWNrO1xcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5leHBhbmQgLnNob3J0Y3V0cyB7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIG1heC1oZWlnaHQ6IDcwdmg7XFxufVxcblxcbi5zaG9ydGN1dDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZXhwYW5kPmRpdiB7XFxuICAgIGZsZXg6IDU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI3Rhc2tzIHtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzNXZoLCAxZnIpKTtcXG4gICAgZ3JpZC1nYXA6IDJ2aDtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDMlO1xcbn1cXG5cXG4jdGFza3M+ZGl2IHtcXG4gICAgaGVpZ2h0OiAzNXZoO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMCwgMTQ3LCAyMjMpO1xcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDAsIDE0NywgMjIzLCAxKSAwJSxcXG4gICAgICAgICAgICByZ2JhKDIxMSwgMjM5LCAyNDIsIDEpIDQ5JSwgcmdiYSgxNywgMTYsIDE2LCAxKSAxMDAlKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgwLCAycmVtLCBjYWxjKDJyZW0gKyAyLjV2aCkpO1xcbn1cXG5cXG4jdGFza3M+ZGl2PmRpdiB7XFxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XFxufVxcblxcbi5NdXN0IHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDIzMiwgNSwgNSk7XFxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoMjMyLCA1LCA1LCAxKSAwJSxcXG4gICAgICAgICAgICByZ2JhKDIxMywgMTQ0LCAxNDQsIDEpIDQ5JSwgcmdiYSgxNywgMTYsIDE2LCAxKSAxMDAlKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uTmVjZXNzYXJ5IHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDIzMiwgMTA3LCA1KTtcXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgyMzIsIDEwNywgNSwgMSkgMCUsXFxuICAgICAgICAgICAgcmdiYSgyMzUsIDIwMCwgMTYzLCAxKSA0OSUsIHJnYmEoMTcsIDE2LCAxNiwgMSkgMTAwJSkgIWltcG9ydGFudDtcXG59XFxuXFxuLk1heWJlIHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDE5MywgMjMyLCA1KTtcXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgxOTMsIDIzMiwgNSwgMSkgMCUsXFxuICAgICAgICAgICAgcmdiYSgyMjQsIDIzNSwgMTYzLCAxKSA0OSUsIHJnYmEoMTcsIDE2LCAxNiwgMSkgMTAwJSkgIWltcG9ydGFudDtcXG59XFxuXFxuI2NvbnRlbnQ+Kjpub3QoI3Rhc2tzKSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG59XFxuXFxuLmhlYWRlciAuUlBCIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICBjb2xvcjogcmdiKDg1LCAzLCAxOSk7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgcGFkZGluZzogMSU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDA7XFxufVxcblxcbiNhZGRUYXNrIHtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuI2FkZFRhc2s6aG92ZXIge1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2FkZFRhc2s6YWN0aXZlIHtcXG4gICAgb3BhY2l0eTogMC4yO1xcbn1cXG5cXG4uc2VsZWN0ZWQge1xcbiAgICBib3JkZXItcmlnaHQ6IDEwcHggZ3Jvb3ZlIHZhcigtLWhvdmVyKTtcXG59XFxuXFxuI2RhdGUge1xcbiAgICB3aWR0aDogNDB2aCAhaW1wb3J0YW50O1xcbiAgICBmb250LXNpemU6IDV2aDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiBncmV5O1xcbn1cXG5cXG4uY2FsTGVmdCB7XFxuICAgIG1hcmdpbi1yaWdodDogMnZoO1xcbn1cXG5cXG4uY2FsUmlnaHQge1xcbiAgICBtYXJnaW4tbGVmdDogMnZoO1xcbn1cXG5cXG4ubmF2aWdhdGVjYWwge1xcbiAgICBmb250LXNpemU6IDh2aDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuI3Rhc2tGb3JtIHtcXG4gICAgd2lkdGg6IDY1dmg7XFxuICAgIGhlaWdodDogNjV2aDtcXG4gICAgbGVmdDogY2FsYyg1MCUgLSAxMHZoKTtcXG4gICAgdG9wOiBjYWxjKDUwJSAtIDMwdmgpO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA1JTtcXG4gICAgZm9udC1zaXplOiAzdmg7XFxufVxcblxcbiNwcm9qZWN0Rm9ybSB7XFxuICAgIHdpZHRoOiA1NXZoO1xcbiAgICBoZWlnaHQ6IDI1dmg7XFxuICAgIGxlZnQ6IGNhbGMoNTAlIC0gMTB2aCk7XFxuICAgIHRvcDogY2FsYyg1MCUgLSAzMHZoKTtcXG4gICAgcGFkZGluZzogMCAyJSAwIDIlO1xcbiAgICBmb250LXNpemU6IDN2aDtcXG59XFxuXFxuI2NvbmZpcm1hdGlvbkZvcm0ge1xcbiAgICB3aWR0aDogNTB2aDtcXG4gICAgaGVpZ2h0OiAzNXZoO1xcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDEwdmgpO1xcbiAgICB0b3A6IGNhbGMoNTAlIC0gMzB2aCk7XFxuICAgIHBhZGRpbmc6IDAgMyUgMCAzJTtcXG4gICAgZm9udC1zaXplOiAzdmg7XFxufVxcblxcbiNwcm9qZWN0Rm9ybSxcXG4jdGFza0Zvcm0sXFxuI2NvbmZpcm1hdGlvbkZvcm0ge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3RvbmUpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGJvcmRlcjogNXB4IHZhcigtLWhvdmVyKSBzb2xpZDtcXG59XFxuXFxuLmNvdmVyIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI3Rhc2tGb3JtIGRpdixcXG4jcHJvamVjdEZvcm0gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI3Rhc2tGb3JtIGxhYmVsLFxcbiNwcm9qZWN0Rm9ybSBsYWJlbCB7XFxuICAgIGZsZXg6IDE7XFxuICAgIG1pbi13aWR0aDogMjB2aDtcXG4gICAgZm9udC1zaXplOiAzdmg7XFxufVxcblxcbiN0YXNrRm9ybSBpbnB1dCxcXG4jdGFza0Zvcm0gc2VsZWN0IHtcXG4gICAgZmxleDogNjtcXG4gICAgbWluLXdpZHRoOiAzMHZoO1xcbn1cXG5cXG4jZGVzY3JpcHRpb24sXFxuI3Rhc2tGb3JtIGlucHV0LFxcbiNwcmlvcml0eSxcXG4jcHJval90aXRsZSxcXG4jcHJval9kdWVEYXRlIHtcXG4gICAgZm9udC1zaXplOiAydmg7XFxuICAgIHBhZGRpbmc6IDElO1xcbn1cXG5cXG4jZGVzY3JpcHRpb24ge1xcbiAgICBoZWlnaHQ6IDIwdmg7XFxuICAgIG1heC13aWR0aDogMzB2aDtcXG4gICAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4ucmVkQnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4uZ3JlZW5CdG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDcsIDI1NSwgNDcpO1xcbn1cXG5cXG4ucmVkQnRuLFxcbi5ncmVlbkJ0biB7XFxuICAgIGZvbnQtc2l6ZTogM3ZoO1xcbiAgICBwYWRkaW5nOiAxMCU7XFxuICAgIHdpZHRoOiAxNXZoO1xcbiAgICBoZWlnaHQ6IDAuNXZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZidG4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZXhwaXJlZCB7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHJlZDtcXG59XFxuXFxuLnRhc2tfZGVzYyB7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIGZsZXg6IDY7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4udGFza19kdWVEYXRlIHtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuLnRhc2tfdGl0bGUsIC50YXNrX2Rlc2MsIC50YXNrX2R1ZURhdGUge1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIxMik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnRhc2tfdGl0bGUge1xcbiAgICBmbGV4OiAxO1xcbiAgICBwYWRkaW5nOiAwIDYlO1xcbn1cXG5cXG4udGFza0J1dHRvbnMgID4gYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZix3QkFBd0I7O0FBRTVCOztBQUVBOztJQUVJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksT0FBTztJQUNQLDZCQUE2QjtJQUM3QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7O0FBRXZCOztBQUVBO0lBQ0ksT0FBTztJQUNQLDhCQUE4QjtJQUM5Qiw4QkFBOEI7SUFDOUIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksT0FBTztBQUNYOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxPQUFPO0lBQ1Asc0JBQXNC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QUNQLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUVBOztJQUVJLE9BQU87SUFDUCxlQUFlO0FBQ25COztBQUVBOzs7OztJQUtJLGNBQWM7SUFDZCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7O0lBRUksY0FBYztJQUNkLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTtJQUNiLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsT0FBTztJQUNQLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLE9BQU87QUFDWDs7QUFFQTtJQUNJLDZDQUE2QztJQUM3QyxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxPQUFPO0lBQ1AsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgLS1uZXV0cmFsOiAjZjVmNWY1O1xcbiAgICAtLXZpb2xldDogd2hpdGU7XFxuICAgIC0tc3RvbmU6ICM2ZTYyNzk7XFxuICAgIC0temluYzogIzNmM2Y0NjtcXG4gICAgLS1ob3ZlcjogcmdiKDY5LCAzMSwgODMpO1xcblxcbn1cXG5cXG5ib2R5LFxcbmh0bWwge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI3NpZGViYXIge1xcbiAgICBmbGV4OiAxO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS16aW5jKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI3NpZGViYXI+ZGl2IHtcXG4gICAgZm9udC1zaXplOiA2dmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICA7XFxufVxcblxcbi5ob21lIHtcXG4gICAgZmxleDogMTtcXG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IGJsYWNrIHNvbGlkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdG9uZSk7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4jcHJvamVjdHMge1xcbiAgICBmbGV4OiA3O1xcbn1cXG5cXG4uaG9tZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGZsZXg6IDM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmV4cGFuZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5leHBhbmQ+ZGl2OmZpcnN0LWNoaWxkLFxcbiNhZGRQcm9qZWN0IHtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5leHBhbmQ+KiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jYWRkUHJvamVjdCB7XFxuICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3RvbmUpO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuI2FkZFByb2plY3Q6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyKTtcXG59XFxuXFxuLmV4cGFuZD5kaXY6Zmlyc3QtY2hpbGQge1xcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgYmxhY2s7XFxufVxcblxcblxcbi5leHBhbmQgLnNob3J0Y3V0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3RvbmUpO1xcbiAgICBwYWRkaW5nOiA1JTtcXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGJsYWNrO1xcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5leHBhbmQgLnNob3J0Y3V0cyB7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIG1heC1oZWlnaHQ6IDcwdmg7XFxufVxcblxcbi5zaG9ydGN1dDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZXhwYW5kPmRpdiB7XFxuICAgIGZsZXg6IDU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI3Rhc2tzIHtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzNXZoLCAxZnIpKTtcXG4gICAgZ3JpZC1nYXA6IDJ2aDtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDMlO1xcbn1cXG5cXG4jdGFza3M+ZGl2IHtcXG4gICAgaGVpZ2h0OiAzNXZoO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMCwgMTQ3LCAyMjMpO1xcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDAsIDE0NywgMjIzLCAxKSAwJSxcXG4gICAgICAgICAgICByZ2JhKDIxMSwgMjM5LCAyNDIsIDEpIDQ5JSwgcmdiYSgxNywgMTYsIDE2LCAxKSAxMDAlKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgwLCAycmVtLCBjYWxjKDJyZW0gKyAyLjV2aCkpO1xcbn1cXG5cXG4jdGFza3M+ZGl2PmRpdiB7XFxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XFxufVxcblxcbi5NdXN0IHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDIzMiwgNSwgNSk7XFxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoMjMyLCA1LCA1LCAxKSAwJSxcXG4gICAgICAgICAgICByZ2JhKDIxMywgMTQ0LCAxNDQsIDEpIDQ5JSwgcmdiYSgxNywgMTYsIDE2LCAxKSAxMDAlKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uTmVjZXNzYXJ5IHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDIzMiwgMTA3LCA1KTtcXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgyMzIsIDEwNywgNSwgMSkgMCUsXFxuICAgICAgICAgICAgcmdiYSgyMzUsIDIwMCwgMTYzLCAxKSA0OSUsIHJnYmEoMTcsIDE2LCAxNiwgMSkgMTAwJSkgIWltcG9ydGFudDtcXG59XFxuXFxuLk1heWJlIHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDE5MywgMjMyLCA1KTtcXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgxOTMsIDIzMiwgNSwgMSkgMCUsXFxuICAgICAgICAgICAgcmdiYSgyMjQsIDIzNSwgMTYzLCAxKSA0OSUsIHJnYmEoMTcsIDE2LCAxNiwgMSkgMTAwJSkgIWltcG9ydGFudDtcXG59XFxuXFxuI2NvbnRlbnQ+Kjpub3QoI3Rhc2tzKSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG59XFxuXFxuLmhlYWRlciAuUlBCIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICBjb2xvcjogcmdiKDg1LCAzLCAxOSk7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgcGFkZGluZzogMSU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDA7XFxufVxcblxcbiNhZGRUYXNrIHtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuI2FkZFRhc2s6aG92ZXIge1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2FkZFRhc2s6YWN0aXZlIHtcXG4gICAgb3BhY2l0eTogMC4yO1xcbn1cXG5cXG4uc2VsZWN0ZWQge1xcbiAgICBib3JkZXItcmlnaHQ6IDEwcHggZ3Jvb3ZlIHZhcigtLWhvdmVyKTtcXG59XFxuXFxuI2RhdGUge1xcbiAgICB3aWR0aDogNDB2aCAhaW1wb3J0YW50O1xcbiAgICBmb250LXNpemU6IDV2aDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiBncmV5O1xcbn1cXG5cXG4uY2FsTGVmdCB7XFxuICAgIG1hcmdpbi1yaWdodDogMnZoO1xcbn1cXG5cXG4uY2FsUmlnaHQge1xcbiAgICBtYXJnaW4tbGVmdDogMnZoO1xcbn1cXG5cXG4ubmF2aWdhdGVjYWwge1xcbiAgICBmb250LXNpemU6IDh2aDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuI3Rhc2tGb3JtIHtcXG4gICAgd2lkdGg6IDY1dmg7XFxuICAgIGhlaWdodDogNjV2aDtcXG4gICAgbGVmdDogY2FsYyg1MCUgLSAxMHZoKTtcXG4gICAgdG9wOiBjYWxjKDUwJSAtIDMwdmgpO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA1JTtcXG4gICAgZm9udC1zaXplOiAzdmg7XFxufVxcblxcbiNwcm9qZWN0Rm9ybSB7XFxuICAgIHdpZHRoOiA1NXZoO1xcbiAgICBoZWlnaHQ6IDI1dmg7XFxuICAgIGxlZnQ6IGNhbGMoNTAlIC0gMTB2aCk7XFxuICAgIHRvcDogY2FsYyg1MCUgLSAzMHZoKTtcXG4gICAgcGFkZGluZzogMCAyJSAwIDIlO1xcbiAgICBmb250LXNpemU6IDN2aDtcXG59XFxuXFxuI2NvbmZpcm1hdGlvbkZvcm0ge1xcbiAgICB3aWR0aDogNTB2aDtcXG4gICAgaGVpZ2h0OiAzNXZoO1xcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDEwdmgpO1xcbiAgICB0b3A6IGNhbGMoNTAlIC0gMzB2aCk7XFxuICAgIHBhZGRpbmc6IDAgMyUgMCAzJTtcXG4gICAgZm9udC1zaXplOiAzdmg7XFxufVxcblxcbiNwcm9qZWN0Rm9ybSxcXG4jdGFza0Zvcm0sXFxuI2NvbmZpcm1hdGlvbkZvcm0ge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3RvbmUpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGJvcmRlcjogNXB4IHZhcigtLWhvdmVyKSBzb2xpZDtcXG59XFxuXFxuLmNvdmVyIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI3Rhc2tGb3JtIGRpdixcXG4jcHJvamVjdEZvcm0gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI3Rhc2tGb3JtIGxhYmVsLFxcbiNwcm9qZWN0Rm9ybSBsYWJlbCB7XFxuICAgIGZsZXg6IDE7XFxuICAgIG1pbi13aWR0aDogMjB2aDtcXG4gICAgZm9udC1zaXplOiAzdmg7XFxufVxcblxcbiN0YXNrRm9ybSBpbnB1dCxcXG4jdGFza0Zvcm0gc2VsZWN0IHtcXG4gICAgZmxleDogNjtcXG4gICAgbWluLXdpZHRoOiAzMHZoO1xcbn1cXG5cXG4jZGVzY3JpcHRpb24sXFxuI3Rhc2tGb3JtIGlucHV0LFxcbiNwcmlvcml0eSxcXG4jcHJval90aXRsZSxcXG4jcHJval9kdWVEYXRlIHtcXG4gICAgZm9udC1zaXplOiAydmg7XFxuICAgIHBhZGRpbmc6IDElO1xcbn1cXG5cXG4jZGVzY3JpcHRpb24ge1xcbiAgICBoZWlnaHQ6IDIwdmg7XFxuICAgIG1heC13aWR0aDogMzB2aDtcXG4gICAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4ucmVkQnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4uZ3JlZW5CdG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDcsIDI1NSwgNDcpO1xcbn1cXG5cXG4ucmVkQnRuLFxcbi5ncmVlbkJ0biB7XFxuICAgIGZvbnQtc2l6ZTogM3ZoO1xcbiAgICBwYWRkaW5nOiAxMCU7XFxuICAgIHdpZHRoOiAxNXZoO1xcbiAgICBoZWlnaHQ6IDAuNXZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZidG4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZXhwaXJlZCB7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHJlZDtcXG59XFxuXFxuLnRhc2tfZGVzYyB7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIGZsZXg6IDY7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4udGFza19kdWVEYXRlIHtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuLnRhc2tfdGl0bGUsIC50YXNrX2Rlc2MsIC50YXNrX2R1ZURhdGUge1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIxMik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnRhc2tfdGl0bGUge1xcbiAgICBmbGV4OiAxO1xcbiAgICBwYWRkaW5nOiAwIDYlO1xcbn1cXG5cXG4udGFza0J1dHRvbnMgID4gYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBlcmFzZVRhc2tzRCwgYWRkVGFza0QsIGFkZFByb2plY3REIH0gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHsgc2V0dXBUYXNrRCB9IGZyb20gJy4vc2V0dXBUYXNrLmpzJztcbmltcG9ydCB7IHByb2plY3RzIH0gZnJvbSAnLi90b2RvLmpzJztcbmltcG9ydCB7IGFkZFByb2plY3RMaXN0ZW5lciB9IGZyb20gJy4vZXZlbnRMaXN0ZW5lcnMuanMnO1xuXG5cbi8vIGZlbHQgbGlrZSB0aGlzIGRlc2VydmVzIGEgc2VwZXJhdGUgbW9kdWxlLCBzaW5jZSBpdCdzIG5vdCByZWFsbHkgRE9NIG1hbmlwLlxuLy8gYXMgdGhlIG5hbWUgc3VnZ2VzdHMsIGNvbnRyb2xpbmcgdGhlIGZsb3cgaGVyZVxuY29uc3QgY2hhbmdlUHJvamVjdEQgPSAocHJvamVjdE5hbWUpID0+IHtcbiAgICBlcmFzZVRhc2tzRCgpO1xuICAgIGlmIChwcm9qZWN0c1twcm9qZWN0TmFtZV0udGFza3MgIT0ge30pIHtcbiAgICAgICAgZm9yIChsZXQgZW0gaW4gcHJvamVjdHNbcHJvamVjdE5hbWVdLnRhc2tzKSB7XG4gICAgICAgICAgICBhZGRUYXNrRChwcm9qZWN0c1twcm9qZWN0TmFtZV0udGFza3NbZW1dKTtcbiAgICAgICAgICAgIHNldHVwVGFza0QocHJvamVjdHNbcHJvamVjdE5hbWVdLnRhc2tzW2VtXSwgcHJvamVjdE5hbWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChwcm9qZWN0TmFtZSAhPSBcIkhPTUVcIikge1xuICAgICAgICBhZGRSUEIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZW1vdmVSUEIoKTtcbiAgICB9XG59O1xuXG4vLyBSUEIgLSByZW1vdmUgcHJvamVjdCBidXR0b25cbmZ1bmN0aW9uIGFkZFJQQigpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlclwiKTtcbiAgICBpZiAoaGVhZGVyLmxhc3RDaGlsZC50ZXh0Q29udGVudCAhPSBcIlhcIikge1xuICAgICAgICBjb25zdCBkZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBkZWxCdG4udGV4dENvbnRlbnQgPSBcIlhcIjtcbiAgICAgICAgZGVsQnRuLmNsYXNzTGlzdC5hZGQoXCJSUEJcIik7XG4gICAgICAgIGRlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHNob3dDb25maXJtYXRpb25Gb3JtKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoZGVsQnRuKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNob3dDb25maXJtYXRpb25Gb3JtKCkge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbmZpcm1hdGlvbkZvcm1cIik7XG4gICAgZm9ybS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgY29uc3QgY292ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvdmVyXCIpO1xuICAgIGNvdmVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVJQQigpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlclwiKTtcbiAgICBoZWFkZXIubGFzdENoaWxkLnJlbW92ZSgpO1xufVxuXG5mdW5jdGlvbiBvbkNsaWNraW5nUlBCKCkge1xuICAgIC8vIGZpcnN0IGNoZWNrIGlmIHlvdSBhY3R1YWxseSB3YW50IHRvIGRlbGV0ZVxuICAgIC8vIGdldCBpZCwgZGVsZXRlIG9uIGNvbnRlbnQgYW5kIHRoZW4gc2lkZWJhciB1c2luZyBpZC4gcmV0dXJuIHRvIGhvbWVcbiAgICBjb25zdCBwcm9qZWN0TmFtZTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdGVkXCIpLnRleHRDb250ZW50O1xuICAgIGNvbnN0IHByb2plY3RJRCA9IHByb2plY3RzW3Byb2plY3ROYW1lMl0uaWQ7XG4gICAgZGVsZXRlIHByb2plY3RzW3Byb2plY3ROYW1lMl07XG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3Byb2plY3RJRH1gKVxuICAgIHByb2plY3QucmVtb3ZlKCk7XG4gICAgY29uc29sZS5sb2cocHJvamVjdHMpO1xuXG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjUHIwXCIpO1xuICAgIGhvbWUuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgIGNoYW5nZVByb2plY3REKFwiSE9NRVwiKTtcblxuICAgIC8vIHNhdmUgYmVjYXVzZSB5b3UgcmVtb3ZlZCBhIHByb2plY3RcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xufVxuXG5cbi8vIGxvYWQgYWxsIHByb2plY3RzIGFuZCB0YXNrcyBmcm9tIHRoZSBsb2NhbCBzdG9yYWdlXG5jb25zdCBsb2FkRnJvbVN0b3JhZ2UgPSAoKSA9PiB7XG4gICAgZm9yIChsZXQgcHJvamVjdCBpbiBwcm9qZWN0cykge1xuICAgICAgICBpZiAocHJvamVjdCAhPSBcIkhPTUVcIikge1xuICAgICAgICAgICAgYWRkUHJvamVjdEQocHJvamVjdHNbcHJvamVjdF0sIHByb2plY3RzW3Byb2plY3RdLmlkKTtcbiAgICAgICAgICAgIGFkZFByb2plY3RMaXN0ZW5lcihwcm9qZWN0c1twcm9qZWN0XS5pZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGxldCB0YXNrIGluIHByb2plY3RzLkhPTUUudGFza3MpIHtcbiAgICAgICAgYWRkVGFza0QocHJvamVjdHMuSE9NRS50YXNrc1t0YXNrXSk7XG4gICAgICAgIHNldHVwVGFza0QocHJvamVjdHMuSE9NRS50YXNrc1t0YXNrXSwgXCJIT01FXCIpO1xuICAgIH1cbn07XG5cbmV4cG9ydCB7IGNoYW5nZVByb2plY3RELCBsb2FkRnJvbVN0b3JhZ2UsIG9uQ2xpY2tpbmdSUEIgfTsiLCJpbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL3RvZG9cIjtcblxuY29uc3QgY2FsZW5kZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RhdGVcIik7XG5cbmNvbnN0IHRvZGF5ID0gZ2V0RGF0ZSgpO1xuY2FsZW5kZXIuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgdG9kYXkpO1xuY2FsZW5kZXIuc2V0QXR0cmlidXRlKFwibWluXCIsIHRvZGF5KTtcblxuLy8gc2V0IGRlZmF1bHQgZGF0ZSB2YWx1ZXMgdG8gdG9kYXlcbmNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZURhdGVcIik7XG5kdWVEYXRlLnZhbHVlID0gZ2V0RGF0ZSgpO1xuLy9jb25zdCBwcm9qX2R1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2pfZHVlRGF0ZVwiKTtcbi8vcHJval9kdWVEYXRlLnZhbHVlID0gZ2V0RGF0ZSgpO1xuXG5mdW5jdGlvbiBnZXREYXRlKCkge1xuICAgIHZhciBkID0gbmV3IERhdGUoKSxcbiAgICAgICAgbW9udGggPSAnJyArIChkLmdldE1vbnRoKCkgKyAxKSxcbiAgICAgICAgZGF5ID0gJycgKyBkLmdldERhdGUoKSxcbiAgICAgICAgeWVhciA9IGQuZ2V0RnVsbFllYXIoKTtcblxuICAgIGlmIChtb250aC5sZW5ndGggPCAyKVxuICAgICAgICBtb250aCA9ICcwJyArIG1vbnRoO1xuICAgIGlmIChkYXkubGVuZ3RoIDwgMilcbiAgICAgICAgZGF5ID0gJzAnICsgZGF5O1xuXG4gICAgcmV0dXJuIFt5ZWFyLCBtb250aCwgZGF5XS5qb2luKCctJyk7XG59XG5cbi8vIGlkZWFsbHkgeW91IHdvdWxkIGZvcm1hdCB0byBmaXQgbG9jYXRpb24sIGJ1dCB3aGF0IGEgcGFpbiBEOlxuZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlKSB7XG4gICAgZGF0ZSA9IGRhdGUuc3BsaXQoXCItXCIpO1xuICAgIHJldHVybiBbZGF0ZVsxXSwgZGF0ZVsyXSwgZGF0ZVswXV0uam9pbihcIi1cIik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdChzdHIpIHtcbiAgICBzdHIgPSBzdHIudG9TdHJpbmcoKTtcbiAgICBjb25zdCBtb250aCA9IGdldE1vbnRoRnJvbVN0cmluZyhzdHIuc3Vic3RyaW5nKDQsIDcpKTtcbiAgICBjb25zdCBkYXkgPSBzdHIuc3Vic3RyaW5nKDgsIDEwKTtcbiAgICBjb25zdCB5ZWFyID0gc3RyLnN1YnN0cmluZygxMSwgMTUpO1xuICAgIHJldHVybiBbZGF5LCBtb250aCwgeWVhcl07XG59XG5cbmZ1bmN0aW9uIGdldE1vbnRoRnJvbVN0cmluZyhtb24pIHtcbiAgICByZXR1cm4gbmV3IERhdGUoRGF0ZS5wYXJzZShtb24gKyBcIiAxLCAyMDEyXCIpKS5nZXRNb250aCgpICsgMTtcbn1cblxuY29uc3QgZXhwaXJlQ2hlY2sgPSAodGFzaykgPT4ge1xuICAgIC8vY29uc3QgdG9kYXlBcnIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVcIikudmFsdWUuc3BsaXQoXCItXCIpO1xuXG4gICAgY29uc3QgdG9kYXlBcnIgPSBmb3JtYXQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlXCIpLnZhbHVlQXNEYXRlKTtcbiAgICAvLyBbZGF5LCBtb250aCwgeWVhcl1cbiAgICAvLyBjb25zb2xlLmxvZyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVcIikudmFsdWVBc0RhdGUpO1xuICAgIC8vIGV4OiBXZWQgU2VwIDI4IDIwMjIgMDI6MDA6MDAgR01UKzAyMDAgKENlbnRyYWwgRXVyb3BlYW4gU3VtbWVyIFRpbWUpXG4gICAgY29uc3QgY3VycmVudFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdGVkXCIpLnRleHRDb250ZW50O1xuICAgIGNvbnNvbGUubG9nKHByb2plY3RzKTtcbiAgICBjb25zb2xlLmxvZyh0YXNrKTtcbiAgICBjb25zdCBhcnIgPSBwcm9qZWN0c1tjdXJyZW50UHJvamVjdF0udGFza3NbdGFzay50aXRsZV0uZHVlRGF0ZS5zcGxpdChcIi1cIik7XG4gICAgaWYgKCt0b2RheUFyclswXSA+ICthcnJbMV0gfHwgK3RvZGF5QXJyWzFdID4gK2FyclswXSB8fCArdG9kYXlBcnJbMl0gPlxuICAgICAgICArYXJyWzJdKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbi8qY29uc3QgcHJval9leHBpcmVDaGVjayA9ICgpID0+IHtcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VsZWN0ZWRcIikudGV4dENvbnRlbnQ7XG4gICAgaWYgKGN1cnJlbnRQcm9qZWN0ICE9IFwiSE9NRVwiKSB7XG4gICAgICAgIGNvbnN0IHRvZGF5QXJyID0gZm9ybWF0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZVwiKS52YWx1ZUFzRGF0ZSk7XG4gICAgICAgIGNvbnN0IGFyciA9IHByb2plY3RzW2N1cnJlbnRQcm9qZWN0XS5kdWVEYXRlLnNwbGl0KFwiLVwiKTtcbiAgICAgICAgLy8geWVhciBtb250aCBkYXlcblxuICAgICAgICBpZiAoK3RvZGF5QXJyWzBdID4gK2FyclsyXSB8fCArdG9kYXlBcnJbMV0gPiArYXJyWzBdIHx8ICt0b2RheUFyclsyXSA+XG4gICAgICAgICAgICArYXJyWzBdKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxufSAqL1xuXG5leHBvcnQgeyBnZXREYXRlLCBmb3JtYXREYXRlLCBleHBpcmVDaGVjaywgLypwcm9qX2V4cGlyZUNoZWNrKi8gfTsiLCJpbXBvcnQgeyBleHBpcmVDaGVjayB9IGZyb20gXCIuL2RhdGVcIjtcblxuY29uc3QgYWRkVGFza0QgPSAodGFzaykgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoYCR7dGFzay5pZH1gKTtcbiAgICBcbiAgICBpZiAoZXhwaXJlQ2hlY2sodGFzaykpIHtcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJleHBpcmVkXCIpO1xuICAgIH0gXG5cbiAgICBjb25zdCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza3NcIik7XG4gICAgdGFza3MuYXBwZW5kQ2hpbGQoZGl2KTtcblxuXG59O1xuXG5jb25zdCBlcmFzZVRhc2tzRCA9ICgpID0+IHtcbiAgICBjb25zdCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza3NcIik7XG4gICAgd2hpbGUgKHRhc2tzLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgdGFza3MucmVtb3ZlQ2hpbGQodGFza3MubGFzdENoaWxkKTtcbiAgICB9XG59O1xuXG5jb25zdCBlcmFzZVRhc2tEID0gKGlkKSA9PiB7XG4gICAgY29uc3QgdGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2lkfWApO1xuICAgIHRhc2sucmVtb3ZlKCk7XG59O1xuXG5jb25zdCBhZGRQcm9qZWN0RCA9IChwcm9qZWN0LCBpZCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJzaG9ydGN1dFwiKTtcbiAgICBkaXYuaWQgPSBpZDtcbiAgICBkaXYudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuXG4gICAgY29uc3Qgc2hvcnRjdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaG9ydGN1dHNcIik7XG4gICAgc2hvcnRjdXRzLmFwcGVuZChkaXYpO1xufTtcblxuZXhwb3J0IHsgYWRkVGFza0QsIGVyYXNlVGFza3NELCBlcmFzZVRhc2tELCBhZGRQcm9qZWN0RCB9O1xuXG4vLyBEIGF0IHRoZSBlbmQgcmVwcmVzZW50cyBET01cbiIsImltcG9ydCB7IHByb2plY3RGYWN0b3J5LCBwcm9qZWN0cywgdG9kbyB9IGZyb20gJy4vdG9kby5qcyc7XG5pbXBvcnQgeyBhZGRQcm9qZWN0RCwgYWRkVGFza0QgfSBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQgeyBjaGFuZ2VQcm9qZWN0RCwgb25DbGlja2luZ1JQQiB9IGZyb20gJy4vY29udHJvbC5qcyc7XG5pbXBvcnQgeyBzZXR1cFRhc2tEIH0gZnJvbSAnLi9zZXR1cFRhc2suanMnO1xuaW1wb3J0IHsgZ2V0RGF0ZSwgZm9ybWF0RGF0ZSwgZXhwaXJlQ2hlY2ssIHByb2pfZXhwaXJlQ2hlY2sgfSBmcm9tICcuL2RhdGUuanMnO1xuXG4vLyBpdCByZXNldHMgZXZlcnkgdGltZSB3ZWJzaXRlIHJlZnJlc2hlcyBzbyBkdXBsaWNhdGlvbiBidWcgb2NjdXJzLFxuLy8gYW5kIGl0J3MgbW9yZSBlZmZpY2llbnQsIChsaXR0bGUgYml0IGxvbClcblxuY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkVGFza1wiKTtcbmFkZFRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgc2hvd0Zvcm1BbmRDb3ZlcigpO1xufSk7XG5cblxuLy8gbWFrZSBpdCBhcHBseSB0byBhbnkgZm9ybSBUT0RPT0RPRE9ET0RPRFxuZnVuY3Rpb24gc2hvd0Zvcm1BbmRDb3ZlcigpIHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrRm9ybVwiKTtcbiAgICBjb25zdCBjb3ZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY292ZXJcIik7XG4gICAgY292ZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICBmb3JtLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbn1cblxuLy8gdGhvdWdodCBpdCB3b3VsZCBlYXN5IHRvIHB1dCBhbGwgZm9ybSByZWxhdGVkIGNvZGUgdG8gdGhlIHN1Ym1pdCBidG4gbGlzdGVuZXJcbmNvbnN0IGdidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdyZWVuXCIpO1xuZ2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAvLyBydW4gb25seSBpZiBub3QgZWRpdGluZywgd2UgaGF2ZSAyIGV2ZW50IGxpc3RuZXJzIG9uIG9uZSBidXR0b25cbiAgICAvLyBzbyB0aGlzIGZvcmNlcyB0aGUgb3RoZXIgb25lIHRvIHdvcmsgYWxvbmUsIHdoaWNoIGlzIHdoYXQgd2Ugd2FudFxuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWxlY3RlZFwiKS50ZXh0Q29udGVudDtcbiAgICBpZiAoIXByb2plY3RzW2N1cnJlbnRQcm9qZWN0XS5mbGFnKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSSBSQU5cIik7XG5cbiAgICAgICAgY29uc3QgdGFzayA9IGdldFRhc2soKTtcblxuICAgICAgICByZXNldEZvcm0oKTtcblxuICAgICAgICAvLyBzZXQgZGVmYXVsdCBkYXRlLCBzbyBNTS1ERC1ZWVlZIGlzIG5vdCBzaG93biBvbiBmb3JtPz8/Pz9cbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlRGF0ZVwiKTtcbiAgICAgICAgZHVlRGF0ZS52YWx1ZSA9IGdldERhdGUoKTtcblxuICAgICAgICAvLyBzZXR1cCB0YXNrXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWxlY3RlZFwiKS50ZXh0Q29udGVudDtcbiAgICAgICAgcHJvamVjdHNbY3VycmVudFByb2plY3RdLnRhc2tzW3Rhc2sudGl0bGVdID0gdGFzaztcbiAgICAgICAgYWRkVGFza0QodGFzaywgY3VycmVudFByb2plY3QpO1xuICAgICAgICBzZXR1cFRhc2tEKHRhc2ssIGN1cnJlbnRQcm9qZWN0KTtcblxuXG4gICAgICAgIC8vIHNhdmUgdG8gbG9jYWwgd2hlbiB5b3UgYWRkIHRhc2sgb3IgcHJvamVjdFxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0cyk7XG59KTtcblxuZnVuY3Rpb24gcmVzZXRGb3JtKCkge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tGb3JtXCIpO1xuICAgIGNvbnN0IGNvdmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb3ZlclwiKTtcbiAgICBmb3JtLnJlc2V0KCk7XG4gICAgZm9ybS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICBjb3Zlci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbiAgICAvLyB0aGlzIGlzIGFsc28gZGVmYXVsdCwgcHJlc2VudCBpbiBkYXRlLmpzIVxuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZURhdGVcIik7XG4gICAgZHVlRGF0ZS52YWx1ZSA9IGdldERhdGUoKTtcbn1cblxuY29uc3QgcmJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVkXCIpO1xucmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICByZXNldEZvcm0oKTtcbn0pO1xuXG4vLyBjb3VsZG4ndCBnZXQgc3VibWl0IHR5cGUgYnV0dG9uIHRvIHdvcmssIHNvIG5lZWRlZCBhIGZ1bmN0aW9uIHRvIGdldCB2YWx1ZXNcbi8vIGZyb20gdGhlIGZvcm0sIHRoaXMgaXMgaXRcbmZ1bmN0aW9uIGdldFRhc2soKSB7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlXCIpLnZhbHVlO1xuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWxlY3RlZFwiKS50ZXh0Q29udGVudDtcbiAgICBpZiAoIXByb2plY3RzW2N1cnJlbnRQcm9qZWN0XS50YXNrc1t0aXRsZV0pIHtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uXCIpLnZhbHVlO1xuICAgICAgICBsZXQgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlRGF0ZVwiKS52YWx1ZTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByaW9yaXR5XCIpLnZhbHVlO1xuXG4gICAgICAgIGlmICghZHVlRGF0ZSkge1xuICAgICAgICAgICAgZHVlRGF0ZSA9IGdldERhdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpZCA9IDA7XG4gICAgICAgIC8vIGVhc2llc3Qgd2F5IHRvIHByZXZlbnQgZHVwbGljYXRpb24gYnVnID0+IDIgdGFza3MgMSBpZFxuICAgICAgICBmb3IgKGxldCBlbSBpbiBwcm9qZWN0c1tjdXJyZW50UHJvamVjdF0udGFza3MpIHtcbiAgICAgICAgICAgIGlkID0gTWF0aC5tYXgoaWQsXG4gICAgICAgICAgICAgICAgTnVtYmVyKHByb2plY3RzW2N1cnJlbnRQcm9qZWN0XS50YXNrc1tlbV0uaWRcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoXCJ0YXNrXCIsIFwiXCIpKSArIDEpO1xuICAgICAgICB9XG5cblxuXG5cbiAgICAgICAgY29uc3QgdGFzayA9IHRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBmb3JtYXREYXRlKGR1ZURhdGUpLCBwcmlvcml0eSwgXCJ0YXNrXCIgK1xuICAgICAgICAgICAgaWQudG9TdHJpbmcoKSk7XG4gICAgICAgIHJldHVybiB0YXNrO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KFwiRmFpbHVyZSwgdGFzayB3aXRoIHRoZSBzYW1lIHRpdGxlIGFscmVhZHkgZXhpc3RzXCIpXG4gICAgfVxufVxuXG4vLyBzaW1pbGFyIHByb2JsZW0gYXMgdGFzayBpZFxuLy9sZXQgcHJvamVjdElEID0gT2JqZWN0LmtleXMocHJvamVjdHMpLmxlbmd0aDtcblxuLy8gYWdhaW50LCBuZWVkZWQgYSB3YXkgdG8gZ2V0IHZhbHVlcyBmcm9tIHRoZSBmb3JtXG5mdW5jdGlvbiBnZXRQcm9qZWN0KCkge1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qX3RpdGxlXCIpLnZhbHVlO1xuICAgIGlmICghcHJvamVjdHNbdGl0bGVdKSB7XG4gICAgICAgIC8vY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJval9kdWVEYXRlXCIpLnZhbHVlO1xuXG4gICAgICAgIGxldCBwcm9qZWN0SUQgPSAwO1xuICAgICAgICAvLyBlYXNpZXN0IHdheSB0byBwcmV2ZW50IGR1cGxpY2F0aW9uIGJ1ZyA9PiAyIHByb2plY3RzIDEgaWRcbiAgICAgICAgZm9yIChsZXQgZW0gaW4gcHJvamVjdHMpIHtcbiAgICAgICAgICAgIHByb2plY3RJRCA9IE1hdGgubWF4KHByb2plY3RJRCxcbiAgICAgICAgICAgICAgICBOdW1iZXIocHJvamVjdHNbZW1dLmlkLnJlcGxhY2UoXCJQclwiLCBcIlwiKSkgKyAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHByb2ogPSBwcm9qZWN0RmFjdG9yeSh0aXRsZSwgLypkdWVEYXRlLCovIFwiUHJcIiArIHByb2plY3RJRC50b1N0cmluZygpKTtcbiAgICAgICAgcmV0dXJuIHByb2o7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG59XG5cbmNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZFByb2plY3RcIik7XG5hZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IHByb2pGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0Rm9ybVwiKVxuICAgIHByb2pGb3JtLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgICBjb25zdCBjb3ZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY292ZXJcIik7XG4gICAgY292ZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbn0pO1xuXG5jb25zdCBwcm9qX2didXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2pfZ3JlZW5cIik7XG5wcm9qX2didXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdCA9IGdldFByb2plY3QoKTtcbiAgICBpZiAoIXByb2plY3QpIHtcbiAgICAgICAgYWxlcnQoXCJGYWlsdXJlLCBjYW4ndCByZXBlYXQgcHJvamVjdCBuYW1lXCIpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmVzZXRQcm9qRm9ybSgpO1xuICAgICAgICBwcm9qZWN0c1twcm9qZWN0LnRpdGxlXSA9IHByb2plY3Q7XG4gICAgICAgIHByb2plY3RzW3Byb2plY3QudGl0bGVdLnRhc2tzID0ge307XG4gICAgICAgIHByb2plY3RzW3Byb2plY3QudGl0bGVdLmlkID0gcHJvamVjdC5pZDtcblxuICAgICAgICBhZGRQcm9qZWN0RChwcm9qZWN0LCBwcm9qZWN0LmlkKTtcbiAgICAgICAgYWRkUHJvamVjdExpc3RlbmVyKHByb2plY3QuaWQpO1xuXG5cbiAgICAgICAgLy8gc2F2ZSB0byBsb2NhbCB3aGVuIHlvdSBhZGQgdGFzayBvciBwcm9qZWN0XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG4gICAgfVxufSk7XG5cbmNvbnN0IHByb2pfcmJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJval9yZWRcIik7XG5wcm9qX3JidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcmVzZXRQcm9qRm9ybSgpO1xufSk7XG5cbmZ1bmN0aW9uIHJlc2V0UHJvakZvcm0oKSB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdEZvcm1cIik7XG4gICAgY29uc3QgY292ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvdmVyXCIpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJval90aXRsZVwiKS52YWx1ZSA9IFwiXCI7XG4gICAgLy9kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2pfZHVlRGF0ZVwiKS52YWx1ZSA9IFwiXCI7XG4gICAgZm9ybS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICBjb3Zlci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbiAgICAvLyB0aGlzIGlzIGFsc28gZGVmYXVsdCwgcHJlc2VudCBpbiBkYXRlLmpzIVxuICAgIC8vY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJval9kdWVEYXRlXCIpO1xuICAgLy8gZHVlRGF0ZS52YWx1ZSA9IGdldERhdGUoKTtcbn1cblxuY29uc3QgY29uZl9ncmVlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29uZl9ncmVlblwiKTtcbmNvbmZfZ3JlZW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgb25DbGlja2luZ1JQQigpO1xuICAgIHJlc2V0Q29uZkZvcm0oKTtcbn0pO1xuXG5jb25zdCBjb25mX3JlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29uZl9yZWRcIik7XG5jb25mX3JlZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICByZXNldENvbmZGb3JtKCk7XG59KVxuXG5mdW5jdGlvbiByZXNldENvbmZGb3JtKCkge1xuICAgIGNvbnN0IGNvbmZGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb25maXJtYXRpb25Gb3JtXCIpO1xuICAgIGNvbmZGb3JtLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgIGNvbnN0IGNvdmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb3ZlclwiKTtcbiAgICBjb3Zlci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59XG5cblxuXG5cbi8vIGFkZCBJRCB0byBlYWNoIHByb2plY3QgYW5kIHRoZW4gXG5jb25zdCBhZGRQcm9qZWN0TGlzdGVuZXIgPSAoaWQpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7aWR9YCk7XG5cbiAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB0ZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdGVkJyk7XG4gICAgICAgIHRlbXAuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICAgICAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgY2hhbmdlUHJvamVjdEQocHJvamVjdC50ZXh0Q29udGVudCk7XG4gICAgfSk7XG59XG5cbmFkZFByb2plY3RMaXN0ZW5lcihcIlByMFwiKTtcblxuLy8gbmF2aWdhdGUgY2FsZW5kZXIsIGxlZnQgYW5kIHJpZ2h0IGFycm93XG5jb25zdCBsZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbExlZnQnKTtcbmNvbnN0IHJpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbFJpZ2h0Jyk7XG5jb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkYXRlJyk7XG5sZWZ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlucHV0LnN0ZXBEb3duKCk7XG4gICAgY2hlY2soKTtcbn0pO1xucmlnaHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaW5wdXQuc3RlcFVwKCk7XG4gICAgY2hlY2soKTtcbn0pO1xuLy8gZGF0ZSBpcyBwaWNrZWQgbWFudWFsbHkgZnJvbSB0aGUgY2FsYW5kZXIsIGNsaWNrIGRvZXNuJ3Qgd29ya1xuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgIGNoZWNrKCk7XG59KVxuXG5mdW5jdGlvbiBjaGVjaygpIHtcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VsZWN0ZWRcIikudGV4dENvbnRlbnQ7XG4gICAgZm9yIChsZXQgZW0gaW4gcHJvamVjdHNbY3VycmVudFByb2plY3RdLnRhc2tzKSB7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3Byb2plY3RzW2N1cnJlbnRQcm9qZWN0XS50YXNrc1tlbV0uaWRcbiAgICAgICAgICAgIH1gKTtcbiAgICAgICAgaWYgKGV4cGlyZUNoZWNrKHByb2plY3RzW2N1cnJlbnRQcm9qZWN0XS50YXNrc1tlbV0pKSB7XG4gICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChcImV4cGlyZWRcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkaXYuY2xhc3NMaXN0LnJlbW92ZShcImV4cGlyZWRcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLypcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICAgIGlmIChwcm9qX2V4cGlyZUNoZWNrKCkpIHtcbiAgICAgICAgY29udGVudC5zdHlsZS5ib3JkZXJUb3AgPSBcIjF2aCByZWQgc29saWRcIjtcbiAgICAgICAgY29udGVudC5zdHlsZS5ib3JkZXJMZWZ0ID0gXCIxdmggcmVkIHNvbGlkXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29udGVudC5zdHlsZS5ib3JkZXIgPSBcIm5vbmVcIjtcbiAgICB9ICovXG59XG5cblxuZXhwb3J0IHsgYWRkUHJvamVjdExpc3RlbmVyLCBzaG93Rm9ybUFuZENvdmVyLCByZXNldEZvcm0gfSIsImltcG9ydCB7IGVyYXNlVGFza0QgfSBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQgeyBzaG93Rm9ybUFuZENvdmVyLCByZXNldEZvcm0gfSBmcm9tICcuL2V2ZW50TGlzdGVuZXJzLmpzJztcbmltcG9ydCB7IGRlbGV0ZVRhc2ssIHByb2plY3RzIH0gZnJvbSAnLi90b2RvLmpzJztcbmltcG9ydCB7IGZvcm1hdERhdGUgfSBmcm9tICcuL2RhdGUuanMnXG5pbXBvcnQgeyBjaGFuZ2VQcm9qZWN0RCB9IGZyb20gJy4vY29udHJvbC5qcyc7XG5cbmxldCB3b3JraW5nX3Rhc2ssIHdvcmtpbmdfcHJvamVjdDtcblxuXG4vLyBcIkNvbnRyb2xcIiBmdW5jdGlvblxuY29uc3Qgc2V0dXBUYXNrRCA9ICh0YXNrLCBwcm9qZWN0KSA9PiB7XG4gICAgd29ya2luZ190YXNrID0gdGFzazsgLy8gb2JqZWN0XG4gICAgd29ya2luZ19wcm9qZWN0ID0gcHJvamVjdDsgLy8gbmFtZVxuXG4gICAgdUkoKTtcbiAgICBzZXR1cEVkaXRCdXR0b24oKTtcbiAgICBzZXR1cERlbGV0ZUJ1dHRvbigpO1xufTtcblxuY29uc3QgdUkgPSAoKSA9PiB7XG4gICAgY29uc3QgdGFza05vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt3b3JraW5nX3Rhc2suaWR9YCk7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSB3b3JraW5nX3Rhc2sudGl0bGU7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRhc2tfdGl0bGVcIik7XG4gICAgdGFza05vZGUuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGVzYy50ZXh0Q29udGVudCA9IHdvcmtpbmdfdGFzay5kZXNjcmlwdGlvbjtcbiAgICBkZXNjLmNsYXNzTGlzdC5hZGQoXCJ0YXNrX2Rlc2NcIik7XG4gICAgdGFza05vZGUuYXBwZW5kQ2hpbGQoZGVzYyk7XG5cbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkdWVEYXRlLnRleHRDb250ZW50ID0gXCJEdWUgRGF0ZTogXCIgKyB3b3JraW5nX3Rhc2suZHVlRGF0ZTtcbiAgICBkdWVEYXRlLmNsYXNzTGlzdC5hZGQoXCJ0YXNrX2R1ZURhdGVcIik7XG4gICAgdGFza05vZGUuYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG5cbiAgICAvLyB0YXNrTm9kZS5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG5cbiAgICB0YXNrTm9kZS5jbGFzc0xpc3QuYWRkKGAke3dvcmtpbmdfdGFzay5wcmlvcml0eX1gKVxufTtcblxuXG5jb25zdCBzZXR1cERlbGV0ZUJ1dHRvbiA9ICgpID0+IHtcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidG4udGV4dENvbnRlbnQgPSBcIlhcIjtcblxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3dvcmtpbmdfdGFzay5pZH0gLnRhc2tCdXR0b25zYCk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGJ0bik7XG5cbiAgICAvLyB3ZSBuZWVkIHRvIG9idGFpbiB0YXNrIG9iamVjdCBmcm9tIHRoZSBidXR0b24gaXRzZWxmXG4gICAgLy8gYmVjYXVzZSBpZiB3ZSB1c2UgYW55IHZhcmlhYmxlIGl0IHdvbid0IGRlbGV0ZSBwcm9wZXJseVxuICAgIC8vIHRoaXMgaXMgZG9uZSB2aWEgbWF0Y2hpbmcgYnRuIGNsYXNzIG5hbWUgd2hpY2ggaXMgZXF1YWwgdG8gdGhlIGlkXG4gICAgLy8gb2YgdGhlIHRhc2sgdGhhdCB3ZSBhcmUgc2Vla2luZyBpbiBhIHByb2plY3RzIG9iamVjdFxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgdGFza0lEID0gWy4uLmJ0bi5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2xhc3NMaXN0XVswXTtcbiAgICAgICAgY29uc29sZS5sb2codGFza0lEKTtcbiAgICAgICAgY29uc3QgY3VycmVudFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdGVkXCIpLnRleHRDb250ZW50O1xuICAgICAgICBjb25zdCB0aXRsZSA9IGdldFRpdGxlKHRhc2tJRCwgY3VycmVudFByb2plY3QpO1xuXG4gICAgICAgIGRlbGV0ZVRhc2soY3VycmVudFByb2plY3QsIHByb2plY3RzW2N1cnJlbnRQcm9qZWN0XS50YXNrc1t0aXRsZV0pO1xuICAgICAgICBlcmFzZVRhc2tEKHRhc2tJRCk7XG4gICAgfSk7XG59O1xuXG5mdW5jdGlvbiBnZXRUaXRsZSh0YXNrSUQsIGN1cnJlbnRQcm9qZWN0KSB7XG5cbiAgICBsZXQgdGl0bGU7XG4gICAgZm9yIChsZXQgZW0gaW4gcHJvamVjdHNbY3VycmVudFByb2plY3RdLnRhc2tzKSB7XG4gICAgICAgIGlmIChwcm9qZWN0c1tjdXJyZW50UHJvamVjdF0udGFza3NbZW1dLmlkID09IHRhc2tJRCkge1xuICAgICAgICAgICAgdGl0bGUgPSBwcm9qZWN0c1tjdXJyZW50UHJvamVjdF0udGFza3NbZW1dLnRpdGxlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aXRsZTtcbn1cblxuY29uc3Qgc2V0dXBFZGl0QnV0dG9uID0gKCkgPT4ge1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ0bi50ZXh0Q29udGVudCA9IFwiRWRpdFwiO1xuXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChcInRhc2tCdXR0b25zXCIpO1xuXG4gICAgY29uc3QgdGFza05vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt3b3JraW5nX3Rhc2suaWR9YCk7XG4gICAgdGFza05vZGUuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoYnRuKTtcblxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgdGFza0lEID0gWy4uLmJ0bi5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2xhc3NMaXN0XVswXTtcbiAgICAgICAgY29uc3QgY3VycmVudFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdGVkXCIpLnRleHRDb250ZW50O1xuICAgICAgICBjb25zdCB0aXRsZSA9IGdldFRpdGxlKHRhc2tJRCwgY3VycmVudFByb2plY3QpO1xuICAgICAgICBzaG93Rm9ybUFuZENvdmVyKCk7XG4gICAgICAgIHByb2plY3RzW2N1cnJlbnRQcm9qZWN0XS5mbGFnID0gdHJ1ZTtcbiAgICAgICAgc2V0dXBFZGl0Rm9ybShwcm9qZWN0c1tjdXJyZW50UHJvamVjdF0udGFza3NbdGl0bGVdKTtcblxuICAgIH0pO1xufTtcblxuZnVuY3Rpb24gc2V0dXBFZGl0Rm9ybSh0YXNrKSB7XG4gICAgY29uc29sZS5sb2codGFzayk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZVwiKS52YWx1ZSA9IHRhc2sudGl0bGU7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvblwiKS52YWx1ZSA9IHRhc2suZGVzY3JpcHRpb247XG5cbiAgICAvLyBkYXRlIGRvZXNuJ3Qgd29yaywgZml4ISEhXG4gICAgY29uc29sZS5sb2codGFzay5kdWVEYXRlLnNwbGl0KFwiLVwiKSk7IC8vIG1vbnRoIGRheSB5ZWFyXG4gICAgbGV0IGFyciA9IHRhc2suZHVlRGF0ZS5zcGxpdChcIi1cIik7XG4gICAgYXJyID0gW2FyclsyXSwgYXJyWzBdLCBhcnJbMV1dLmpvaW4oXCItXCIpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlRGF0ZVwiKS52YWx1ZSA9IGFycjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByaW9yaXR5XCIpLnZhbHVlID0gdGFzay5wcmlvcml0eTtcblxuICAgIGNvbnN0IGdidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdyZWVuXCIpO1xuICAgIC8vdGFzay5hZGQgPSBmYWxzZTtcbiAgICBnYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VsZWN0ZWRcIikudGV4dENvbnRlbnQ7XG4gICAgICAgIGlmIChwcm9qZWN0c1tjdXJyZW50UHJvamVjdF0uZmxhZykge1xuICAgICAgICAgICAgY29uc3QgdGVtcCA9IHRhc2sudGl0bGU7XG4gICAgICAgICAgICB0YXNrLnRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZVwiKS52YWx1ZTtcbiAgICAgICAgICAgIHRhc2suZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uXCIpLnZhbHVlO1xuXG4gICAgICAgICAgICB0YXNrLmR1ZURhdGUgPSBmb3JtYXREYXRlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlRGF0ZVwiKS52YWx1ZSk7XG5cbiAgICAgICAgICAgIHRhc2sucHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByaW9yaXR5XCIpLnZhbHVlO1xuXG4gICAgICAgICAgICAvLyBuYW1lIG9mIHRoZSBvYmplY3QgYW5kIHRoZSB0aXRsZSBhcmUgdGhlIHNhbWUsIHRoaXMgaXMgd2h5XG4gICAgICAgICAgICAvLyBpZiB5b3UgZWRpdCB0aGUgdGl0bGUgbmFtZSwgdGhlIGZ1bmN0aW9uIGNhbiBubyBsb25nZXIgZmluZCB0aGVcbiAgICAgICAgICAgIC8vIHJpZ2h0IG9iamVjdCBhZnRlciBkZWxldGlvbiwgaGVuY2UgZGVlcCBjb3B5IGFuZCByZW1vdmUgcHJldmlvdXNcbiAgICAgICAgICAgIC8vIG9uZVxuICAgICAgICAgICAgaWYgKHRlbXAgIT0gdGFzay50aXRsZSkge1xuICAgICAgICAgICAgICAgIHByb2plY3RzW2N1cnJlbnRQcm9qZWN0XS50YXNrc1t0YXNrLnRpdGxlXSA9XG4gICAgICAgICAgICAgICAgICAgIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocHJvamVjdHNbY3VycmVudFByb2plY3RdLnRhc2tzW3RlbXBdKSk7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHByb2plY3RzW2N1cnJlbnRQcm9qZWN0XS50YXNrc1t0ZW1wXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVzZXRGb3JtKCk7XG4gICAgICAgICAgICBwcm9qZWN0c1tjdXJyZW50UHJvamVjdF0uZmxhZyA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gc2F2ZSB0byBsb2NhbCB3aGVuIHlvdSBhZGQgdGFzayBvciBwcm9qZWN0XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xuXG4gICAgICAgICAgICAvLyBzZXJ2ZXMgYXMgYSB3YXkgdG8gcmVmcmVzaCBkYXRhXG4gICAgICAgICAgICBjaGFuZ2VQcm9qZWN0RChjdXJyZW50UHJvamVjdCk7XG4gICAgICAgIH1cblxuICAgIH0pXG5cbn1cblxuZXhwb3J0IHsgc2V0dXBUYXNrRCB9OyIsImZ1bmN0aW9uIHN0b3JhZ2VBdmFpbGFibGUodHlwZSkge1xuICAgIGxldCBzdG9yYWdlO1xuICAgIHRyeSB7XG4gICAgICAgIHN0b3JhZ2UgPSB3aW5kb3dbdHlwZV07XG4gICAgICAgIGNvbnN0IHggPSAnX19zdG9yYWdlX3Rlc3RfXyc7XG4gICAgICAgIHN0b3JhZ2Uuc2V0SXRlbSh4LCB4KTtcbiAgICAgICAgc3RvcmFnZS5yZW1vdmVJdGVtKHgpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGUgaW5zdGFuY2VvZiBET01FeGNlcHRpb24gJiYgKFxuICAgICAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICAgICAgZS5jb2RlID09PSAyMiB8fFxuICAgICAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICAgICAgZS5jb2RlID09PSAxMDE0IHx8XG4gICAgICAgICAgICAvLyB0ZXN0IG5hbWUgZmllbGQgdG9vLCBiZWNhdXNlIGNvZGUgbWlnaHQgbm90IGJlIHByZXNlbnRcbiAgICAgICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgICAgICAgIGUubmFtZSA9PT0gJ1F1b3RhRXhjZWVkZWRFcnJvcicgfHxcbiAgICAgICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgICAgIGUubmFtZSA9PT0gJ05TX0VSUk9SX0RPTV9RVU9UQV9SRUFDSEVEJykgJiZcbiAgICAgICAgICAgIC8vIGFja25vd2xlZGdlIFF1b3RhRXhjZWVkZWRFcnJvciBvbmx5IGlmIHRoZXJlJ3Mgc29tZXRoaW5nIGFscmVhZHkgc3RvcmVkXG4gICAgICAgICAgICAoc3RvcmFnZSAmJiBzdG9yYWdlLmxlbmd0aCAhPT0gMCk7XG4gICAgfVxufVxuXG5jb25zdCBwcm9qZWN0cyA9IHtcbiAgICBIT01FOiB7XG4gICAgICAgIHRhc2tzOiB7XG4gICAgICAgIH0sXG4gICAgICAgIGlkOiBcIlByMFwiLFxuICAgICAgICBmbGFnOiBmYWxzZSxcbiAgICB9LFxufTtcblxuaWYgKHN0b3JhZ2VBdmFpbGFibGUpIHtcbiAgICB2YXIgcmV0cmlldmVkT2JqZWN0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJyk7XG4gICAgcmV0cmlldmVkT2JqZWN0ID0gSlNPTi5wYXJzZShyZXRyaWV2ZWRPYmplY3QpO1xuICAgIGZvciAobGV0IGVtIGluIHJldHJpZXZlZE9iamVjdCkge1xuICAgICAgICBwcm9qZWN0c1tlbV0gPSByZXRyaWV2ZWRPYmplY3RbZW1dO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0cyk7XG4gICAgLy9wcm9qZWN0cyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpO1xufVxuXG5jb25zdCB0b2RvID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGlkKSA9PiB7XG4gICAgcmV0dXJuIHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgaWQgfTtcbn07XG5cbmZ1bmN0aW9uIGRlbGV0ZVRhc2socHJvamVjdCwgdGFzaykge1xuICAgIGNvbnNvbGUubG9nKHByb2plY3QpO1xuICAgIGRlbGV0ZSBwcm9qZWN0c1twcm9qZWN0XS50YXNrc1t0YXNrLnRpdGxlXTtcbiAgICAvLyB3ZSBhcmUgYWN0dWFsbHkgZGVsZXRpbmcsIG5vdCBqdXN0IGVyYXNpbmcgZnJvbSBzY3JlZW4hISFcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xufVxuXG5jb25zdCBwcm9qZWN0RmFjdG9yeSA9ICh0aXRsZS8qLCBkdWVEYXRlKi8sIGlkKSA9PiB7XG4gICAgcmV0dXJuIHsgdGl0bGUvKiwgZHVlRGF0ZSovLCBpZCB9O1xufTtcblxuLy8gdGVtcFxuZXhwb3J0IHsgcHJvamVjdHMsIHRvZG8sIGRlbGV0ZVRhc2ssIHByb2plY3RGYWN0b3J5IH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCAnLi9ldmVudExpc3RlbmVycyc7XG5pbXBvcnQgJy4vZGF0ZSc7XG5pbXBvcnQgeyBsb2FkRnJvbVN0b3JhZ2UgfSBmcm9tICcuL2NvbnRyb2wnO1xuXG5sb2FkRnJvbVN0b3JhZ2UoKTtcbi8qXG4gICAgVE9ETzpcbiAgICAtIENvbmZpZ3VyZSBkYXRlcyBwcm9wZXJseVxuICAgICAgICBUd28gdHlwZXMgb2YgdGFza3M6XG4gICAgICAgICAgICAxLiBTb21ldGhpbmcgdGhhdCBuZWVkcyB0byBiZSBkb25lIG9uIGEgc3BlY2lmaWMgZGF5LiBJdCBjYW4gaGF2ZSBhXG4gICAgICAgICAgICAgICAgZHVlRGF0ZS9kdWVIb3VyLCBidXQgaXQncyBvcHRpb25hbC4gSXQgb25seSBzaG93cyBvbiBvbmUgZGF5XG4gICAgICAgICAgICAyLiBTb21ldGhpbmcgdGhhdCBuZWVkcyB0byBiZSBkb25lIHRpbGwgYSBzcGVjaWZpZWQgZHVlRGF0ZS4gU28gaXRcbiAgICAgICAgICAgICAgICBzaG93cyBldmVyeSBkYXkgdW50aWwgdGhlIGR1ZURhdGUuIEV4cGlyZWQgc2VjdGlvbiBtaWdodCBiZSBcbiAgICAgICAgICAgICAgICBvZiB1c2UuXG5cbiAgICAgICAgICAgIElkZWE6XG4gICAgICAgICAgICBBbHdheXMgc2hvdyBhbGwgdGhhdCBjYW4gYmUgc2hvd24uIElmIGl0IGhhcHBlbnMgdGhhdCBvbmUgb2YgdGhlbVxuICAgICAgICAgICAgZXhwaXJlZCBzaW1wbHkgbmVkb3RlIHNvIHVzaW5nIHJlZCBib3JkZXIgb3IgKGV4cGlyZWQpIHRhZy5cbiAgICAgICAgICAgIEl0IGNhbiBiZSBzaG93biBpZiBpdHMgc3RhcnQgZGF5IGlzIHRvZGF5IG9yIGVhcmxpZXIuIC0vLy8tXG5cblxuXG4gICAgLSBBZGQgYSBmb3JtIGZvciB1c2VyIGlucHV0IC0vLy8tXG4gICAgLSBUYXNrIGNoYW5nZXM6XG4gICAgICAgICAgICAxKSBTdHlsZSBjaGFuZ2VzOiBSZWRvIHRhc2sgc3F1YXJlcyAtLy8vLSwgbWF5YmUgbm90XG4gICAgICAgICAgICAyKSBUYXNrIGRlc2NyaXB0aW9uL2VkaXQgc3lzdGVtIC0vLy8tXG4gICAgICAgICAgICAzKSBNYWtlIHByaW9yaXRlcyBtYXR0ZXIsIGJvcmRlciBjb2xvciAtLy8vLVxuICAgIC0gRklYIHJlbW92ZSBidXR0b24sIG5hbWVseSB3aGVuIHlvdSBkb24ndCBpbnB1dCBhbnl0aGluZyBpbiB0aGUgZm9ybVxuICAgICAgICBtdWx0aXBsZSB0YXNrcyBhcmUgbWFkZSBldmVudCB0aG91Z2ggdGhlcmUgaXMgb25seSBvbmUgc2F2ZWQgaW4gdGhlIFxuICAgICAgICBvYmplY3QuIGl0IHNob3dzIGNvcnJlY3RseSBhZnRlciByZWZyZXNoIC0vLy8tXG4gICAgLSBGSVg6IHByZXZlbnQgZnJvbSBjaGFuZ2luZyBwcm9qZWN0cyB3aGVuIHRoZSBmb3JtIGlzIG9wZW5lZCxcbiAgICAgICAgY29uc2lkZXIgYWRkaW5nIGEgY292ZXIganVzdCBsaWtlIGluIHRoZSBsaWJyYXJ5IHByb2plY3QgLS8vLy1cbiAgICAtIEZJWDogcHJvamVjdC9zaG9ydGN1dCBuYW1lIGxldHRlcnMgZ29pbmcgdG8gbmV3IGxpbmUsIGluc3RlYWQgb25seSB3b3Jkc1xuICAgICAgICAtLy8vLSBidXQgY2FuJ3QgZml4IGxvbmcgbmFtZXMsIG1heWJlIGZpbmQgYSB3YXkgdG8gYWRkIFwiLVwiIGF0IGVuZCB3aGVuXG4gICAgICAgIGJyZWFraW5nXG4gICAgLSBBZGQgTG9jYWwgc3RvcmFnZSAtLy8vLVxuICAgIC0gQWRkIGEgY29uZmlybWF0aW9uIGZvcm0gd2hlbiBhdHRlbXB0aW5nIHRvIGRlbGV0ZSBhIHByb2plY3QgLS8vLy1cbiAgICAtIEFkZCBtZWRpYSBxdWVyaWVzXG4gICAgLSBjaGFuZ2UgcHJvamVjdElkIGFuZCBpZCB0byBjYWxjdWxhdGUgaWQgYmFzZWQgb24gd2hhdCBpcyB0aGUgYmlnZ2VzdCBpZFxuICAgICAgICBwcmVzZW50IG9uIHRoZSBjdXJyZW50IHByb2plY3QvcHJvamVjdHMgYW5kIHRoZW4gYWRkIDEsIHRoaXMgd2F5XG4gICAgICAgIGl0IGlzIG5vdCBiYXNlZCBvbiBsZW5ndGggYW5kIGR1cGUgYnVncyBkbyBub3QgYXBwZWFyIC0vLy8tXG4gICAgLSBGaXggZGF0ZXMgZm9yIGVkaXRpbmchIC0vLy8tXG4gICAgLSBEbyBzb21ldGhpbmcgd2l0aCBwcm9qZWN0IGRhdGVzLCBtYXliZSBjb250ZW50IGJvcmRlciB0byBzaWduaWZ5IHRoZSBsYXRlXG4gICAgICAgIHByb2plY3QgLS8vLy1cbiAgICAtIE1ha2UgYSByZWZyZXNoIGZ1bmN0aW9uLCB0aGF0IHJlbG9hZHMsIG1heWJlIGp1c3QgY2hhbmdlUHJvamVjdCBzbyB5b3VcbiAgICAgICAgZG9uJ3QgaGF2ZSB0byBsb2NhdGlvbi5yZWxvYWQoKVxuICAgIC0gVGV4dEFyZWEgZXhwYW5kaW5nIEQ6IC0vLy8tXG4gICAgLSBjb25zaWRlciBtb3JlIGNvbHMgYW5kIHJvdyBmb3IgVGV4dEFyZWEgLS8vLy1cbiAgICAtIFJldGhpbmsgdGhlIG5lZWQgZm9yIGR1ZURhdGUgaW4gcHJvamVjdCwgSSB0aGluayBub3QgbmVlZGVkISEgLS8vLy1cbiAgICAtIFByZXZlbnQgZnJvbSBpbnB1dHRpbmcgbm9uIGFscGhhYmV0IGNoYXJhY3RlcnMgaW4gaW5wdXRcbiovXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9