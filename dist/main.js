/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    --neutral: #f5f5f5;\n    --violet: white;\n    --stone: #6e6279;\n    --zinc: #3f3f46;\n    --hover: rgb(69, 31, 83);\n\n}\n\nbody,\nhtml {\n    height: 100%;\n    width: 100%;\n}\n\nbody {\n    display: flex;\n}\n\n\n#sidebar {\n    flex: 1;\n    background-color: var(--zinc);\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    width: 100%;\n}\n\n#sidebar>div {\n    font-size: 6vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.home {\n    flex: 1;\n    border-bottom: 5px black solid;\n    background-color: var(--stone);\n    user-select: none;\n}\n\n#projects {\n    flex: 7;\n}\n\n.home:hover {\n    background-color: var(--hover);\n    cursor: pointer;\n}\n\n#content {\n    flex: 3;\n    background-color: grey;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    flex-direction: column-reverse;\n    height: 100%;\n    width: 100%;\n}\n\n\n.expand {\n    display: flex;\n    flex-direction: column;\n}\n\n.expand>div:first-child,\n#addProject {\n    flex: 1;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.expand>* {\n    width: 100%;\n}\n\n#addProject {\n    border-top: 3px solid black;\n    background-color: var(--stone);\n    user-select: none;\n}\n\n#addProject:hover {\n    cursor: pointer;\n    background-color: var(--hover);\n}\n\n.expand>div:first-child {\n    border-bottom: 3px solid black;\n}\n\n\n.expand .shortcut {\n    background-color: var(--stone);\n    padding: 5%;\n    border-bottom: 3px solid black;\n    word-break: break-word;\n    user-select: none;\n    cursor: pointer;\n    display: flex;\n    justify-content: space-between;\n}\n\n.expand .shortcuts {\n    overflow-y: auto;\n    max-height: 70vh;\n}\n\n.shortcut:hover {\n    background-color: var(--hover);\n    cursor: pointer;\n}\n\n.expand>div {\n    flex: 5;\n    text-align: center;\n}\n\n#tasks {\n    flex: 1;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(35vh, 1fr));\n    grid-gap: 2vh;\n    overflow-y: auto;\n    width: 100%;\n    padding: 3%;\n}\n\n#tasks>div {\n    height: 35vh;\n    background: rgb(0, 147, 223);\n    background: radial-gradient(circle, rgba(0, 147, 223, 1) 0%,\n            rgba(211, 239, 242, 1) 49%, rgba(17, 16, 16, 1) 100%);\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    border-radius: 10%;\n}\n\n#tasks>div>div{\n    word-break: break-word;\n    font-size: 3vh;\n}\n\n.Must {\n    background: rgb(232, 5, 5);\n    background: radial-gradient(circle, rgba(232, 5, 5, 1) 0%,\n            rgba(213, 144, 144, 1) 49%, rgba(17, 16, 16, 1) 100%) !important;\n}\n\n.Necessary {\n    background: rgb(232, 107, 5);\n    background: radial-gradient(circle, rgba(232, 107, 5, 1) 0%,\n            rgba(235, 200, 163, 1) 49%, rgba(17, 16, 16, 1) 100%) !important;\n}\n\n.Maybe {\n    background: rgb(193, 232, 5);\n    background: radial-gradient(circle, rgba(193, 232, 5, 1) 0%,\n            rgba(224, 235, 163, 1) 49%, rgba(17, 16, 16, 1) 100%) !important;\n}\n\n#content>*:not(#tasks) {\n    display: flex;\n    justify-content: center;\n    width: 100%;\n}\n\n.header {\n    font-size: 40px;\n}\n\n.header .RPB {\n    background-color: red;\n    position: absolute;\n    height: max(55px, 7vh);\n    width: max(55px, 7vh);\n    font-size: max(40px, 3rem);\n    right: 0;\n    top: 0;\n    color: rgb(85, 3, 19);\n}\n\n#addTask {\n    display: flex;\n    align-items: center;\n    font-size: max(40px, 3rem);\n    color: white;\n    background-color: black;\n    user-select: none;\n    height: max(55px, 7vh);\n}\n\n#addTask:hover {\n    opacity: 0.5;\n    cursor: pointer;\n}\n\n#addTask:active {\n    opacity: 0.2;\n}\n\n.selected {\n    border-right: 10px groove var(--hover);\n}\n\n#date {\n    width: 40vh !important;\n    font-size: 5vh;\n    border: none;\n    background: grey;\n}\n\n.calLeft {\n    margin-right: 2vh;\n}\n\n.calRight {\n    margin-left: 2vh;\n}\n\n.navigatecal {\n    font-size: 8vh;\n    cursor: pointer;\n    user-select: none;\n}\n\n#taskForm {\n    width: 65vh;\n    height: 65vh;\n    left: calc(50% - 10vh);\n    top: calc(50% - 30vh);\n    padding-left: 5%;\n    padding-right: 5%;\n    font-size: 3vh;\n}\n\n#projectForm {\n    width: 55vh;\n    height: 25vh;\n    left: calc(50% - 10vh);\n    top: calc(50% - 30vh);\n    padding: 0 2% 0 2%;\n    font-size: 3vh;\n}\n\n#confirmationForm {\n    width: 50vh;\n    height: 35vh;\n    left: calc(50% - 10vh);\n    top: calc(50% - 30vh);\n    padding: 0 3% 0 3%;\n    font-size: 3vh;\n}\n\n#projectForm,\n#taskForm,\n#confirmationForm {\n    position: absolute;\n    z-index: 2;\n    background-color: var(--stone);\n    display: none;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: flex-start;\n    border: 5px var(--hover) solid;\n}\n\n.cover {\n    position: fixed;\n    top: 0;\n    left: 0;\n    background: rgba(0, 0, 0, 0.6);\n    z-index: 1;\n    width: 100%;\n    height: 100%;\n    display: none;\n}\n\n\n#taskForm div,\n#projectForm div {\n    display: flex;\n}\n\n#taskForm label,\n#projectForm label {\n    flex: 1;\n    min-width: 20vh;\n    font-size: 3vh;\n}\n\n#taskForm input,\n#taskForm select {\n    flex: 6;\n    min-width: 30vh;\n}\n\n#description,\n#taskForm input,\n#priority,\n#proj_title,\n#proj_dueDate {\n    font-size: 2vh;\n    padding: 1%;\n}\n\n#description {\n    height: 20vh;\n    max-width: 30vh;\n    resize: none;\n}\n\n.redBtn {\n    background-color: red;\n    margin-right: 25%;\n}\n\n.greenBtn {\n    background-color: rgb(47, 255, 47);\n}\n\n.redBtn,\n.greenBtn {\n    font-size: 3vh;\n    padding: 10%;\n    width: 15vh;\n    height: 0.5vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.fbtn {\n    display: flex;\n    justify-content: center;\n    width: 100%;\n}\n\n.expired {\n    border: 5px solid red;\n}\n\n\n.task_desc {\n    overflow-y: auto;\n    flex: 6;\n    font-size: 1.5rem;\n}\n\n.task_dueDate {\n    flex: 1;\n}\n\n.task_title,\n.task_desc,\n.task_dueDate {\n    border-bottom: 1px solid rgba(0, 0, 0, 0.212);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n}\n\n.task_title {\n    flex: 1;\n    padding: 0 6%;\n}\n\n.taskButtons>button {\n    font-size: 3vh;\n    color: white;\n    background-color: black;\n    opacity: 0.5;\n}\n\n.mobile {\n    display: none;\n}\n\n\n\n@media only screen and (max-width: 1100px) {\n\n    body,\n    html {\n        height: 100%;\n    }\n\n    .mobile {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        position: absolute;\n        z-index: 1;\n        left: 0;\n        top: 0;\n        width: 55px;\n        height: 55px;\n        color: black;\n        overflow: hidden;\n        background-color: black;\n        border-right: 1px solid white;\n    }\n\n    .mobile:hover {\n        cursor: pointer;\n    }\n\n    #sidebar {\n        position: absolute;\n        z-index: 1;\n        left: 0;\n        display: none;\n        max-height: 100vh;\n        max-width: min(75%, 300px);\n    }\n\n    #projectForm,\n    #taskForm,\n    #confirmationForm {\n        position: absolute;\n        margin-left: auto;\n        margin-right: auto;\n        left: 0;\n        right: 0;\n        text-align: center;\n        max-width: 100%;\n        padding-right: 5%;\n    }\n\n    .RPB {\n        font-size: 40px;\n        z-index: 1;\n    }\n\n    #date {\n        max-width: 250px;\n        font-size: 2rem;\n    }\n\n    #addTask {\n        margin: 0 100px;\n    }\n\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    --neutral: #f5f5f5;\n    --violet: white;\n    --stone: #6e6279;\n    --zinc: #3f3f46;\n    --hover: rgb(69, 31, 83);\n\n}\n\nbody,\nhtml {\n    height: 100%;\n    width: 100%;\n}\n\nbody {\n    display: flex;\n}\n\n\n#sidebar {\n    flex: 1;\n    background-color: var(--zinc);\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    width: 100%;\n}\n\n#sidebar>div {\n    font-size: 6vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.home {\n    flex: 1;\n    border-bottom: 5px black solid;\n    background-color: var(--stone);\n    user-select: none;\n}\n\n#projects {\n    flex: 7;\n}\n\n.home:hover {\n    background-color: var(--hover);\n    cursor: pointer;\n}\n\n#content {\n    flex: 3;\n    background-color: grey;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    flex-direction: column-reverse;\n    height: 100%;\n    width: 100%;\n}\n\n\n.expand {\n    display: flex;\n    flex-direction: column;\n}\n\n.expand>div:first-child,\n#addProject {\n    flex: 1;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.expand>* {\n    width: 100%;\n}\n\n#addProject {\n    border-top: 3px solid black;\n    background-color: var(--stone);\n    user-select: none;\n}\n\n#addProject:hover {\n    cursor: pointer;\n    background-color: var(--hover);\n}\n\n.expand>div:first-child {\n    border-bottom: 3px solid black;\n}\n\n\n.expand .shortcut {\n    background-color: var(--stone);\n    padding: 5%;\n    border-bottom: 3px solid black;\n    word-break: break-word;\n    user-select: none;\n    cursor: pointer;\n    display: flex;\n    justify-content: space-between;\n}\n\n.expand .shortcuts {\n    overflow-y: auto;\n    max-height: 70vh;\n}\n\n.shortcut:hover {\n    background-color: var(--hover);\n    cursor: pointer;\n}\n\n.expand>div {\n    flex: 5;\n    text-align: center;\n}\n\n#tasks {\n    flex: 1;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(35vh, 1fr));\n    grid-gap: 2vh;\n    overflow-y: auto;\n    width: 100%;\n    padding: 3%;\n}\n\n#tasks>div {\n    height: 35vh;\n    background: rgb(0, 147, 223);\n    background: radial-gradient(circle, rgba(0, 147, 223, 1) 0%,\n            rgba(211, 239, 242, 1) 49%, rgba(17, 16, 16, 1) 100%);\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    border-radius: 10%;\n}\n\n#tasks>div>div{\n    word-break: break-word;\n    font-size: 3vh;\n}\n\n.Must {\n    background: rgb(232, 5, 5);\n    background: radial-gradient(circle, rgba(232, 5, 5, 1) 0%,\n            rgba(213, 144, 144, 1) 49%, rgba(17, 16, 16, 1) 100%) !important;\n}\n\n.Necessary {\n    background: rgb(232, 107, 5);\n    background: radial-gradient(circle, rgba(232, 107, 5, 1) 0%,\n            rgba(235, 200, 163, 1) 49%, rgba(17, 16, 16, 1) 100%) !important;\n}\n\n.Maybe {\n    background: rgb(193, 232, 5);\n    background: radial-gradient(circle, rgba(193, 232, 5, 1) 0%,\n            rgba(224, 235, 163, 1) 49%, rgba(17, 16, 16, 1) 100%) !important;\n}\n\n#content>*:not(#tasks) {\n    display: flex;\n    justify-content: center;\n    width: 100%;\n}\n\n.header {\n    font-size: 40px;\n}\n\n.header .RPB {\n    background-color: red;\n    position: absolute;\n    height: max(55px, 7vh);\n    width: max(55px, 7vh);\n    font-size: max(40px, 3rem);\n    right: 0;\n    top: 0;\n    color: rgb(85, 3, 19);\n}\n\n#addTask {\n    display: flex;\n    align-items: center;\n    font-size: max(40px, 3rem);\n    color: white;\n    background-color: black;\n    user-select: none;\n    height: max(55px, 7vh);\n}\n\n#addTask:hover {\n    opacity: 0.5;\n    cursor: pointer;\n}\n\n#addTask:active {\n    opacity: 0.2;\n}\n\n.selected {\n    border-right: 10px groove var(--hover);\n}\n\n#date {\n    width: 40vh !important;\n    font-size: 5vh;\n    border: none;\n    background: grey;\n}\n\n.calLeft {\n    margin-right: 2vh;\n}\n\n.calRight {\n    margin-left: 2vh;\n}\n\n.navigatecal {\n    font-size: 8vh;\n    cursor: pointer;\n    user-select: none;\n}\n\n#taskForm {\n    width: 65vh;\n    height: 65vh;\n    left: calc(50% - 10vh);\n    top: calc(50% - 30vh);\n    padding-left: 5%;\n    padding-right: 5%;\n    font-size: 3vh;\n}\n\n#projectForm {\n    width: 55vh;\n    height: 25vh;\n    left: calc(50% - 10vh);\n    top: calc(50% - 30vh);\n    padding: 0 2% 0 2%;\n    font-size: 3vh;\n}\n\n#confirmationForm {\n    width: 50vh;\n    height: 35vh;\n    left: calc(50% - 10vh);\n    top: calc(50% - 30vh);\n    padding: 0 3% 0 3%;\n    font-size: 3vh;\n}\n\n#projectForm,\n#taskForm,\n#confirmationForm {\n    position: absolute;\n    z-index: 2;\n    background-color: var(--stone);\n    display: none;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: flex-start;\n    border: 5px var(--hover) solid;\n}\n\n.cover {\n    position: fixed;\n    top: 0;\n    left: 0;\n    background: rgba(0, 0, 0, 0.6);\n    z-index: 1;\n    width: 100%;\n    height: 100%;\n    display: none;\n}\n\n\n#taskForm div,\n#projectForm div {\n    display: flex;\n}\n\n#taskForm label,\n#projectForm label {\n    flex: 1;\n    min-width: 20vh;\n    font-size: 3vh;\n}\n\n#taskForm input,\n#taskForm select {\n    flex: 6;\n    min-width: 30vh;\n}\n\n#description,\n#taskForm input,\n#priority,\n#proj_title,\n#proj_dueDate {\n    font-size: 2vh;\n    padding: 1%;\n}\n\n#description {\n    height: 20vh;\n    max-width: 30vh;\n    resize: none;\n}\n\n.redBtn {\n    background-color: red;\n    margin-right: 25%;\n}\n\n.greenBtn {\n    background-color: rgb(47, 255, 47);\n}\n\n.redBtn,\n.greenBtn {\n    font-size: 3vh;\n    padding: 10%;\n    width: 15vh;\n    height: 0.5vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.fbtn {\n    display: flex;\n    justify-content: center;\n    width: 100%;\n}\n\n.expired {\n    border: 5px solid red;\n}\n\n\n.task_desc {\n    overflow-y: auto;\n    flex: 6;\n    font-size: 1.5rem;\n}\n\n.task_dueDate {\n    flex: 1;\n}\n\n.task_title,\n.task_desc,\n.task_dueDate {\n    border-bottom: 1px solid rgba(0, 0, 0, 0.212);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n}\n\n.task_title {\n    flex: 1;\n    padding: 0 6%;\n}\n\n.taskButtons>button {\n    font-size: 3vh;\n    color: white;\n    background-color: black;\n    opacity: 0.5;\n}\n\n.mobile {\n    display: none;\n}\n\n\n\n@media only screen and (max-width: 1100px) {\n\n    body,\n    html {\n        height: 100%;\n    }\n\n    .mobile {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        position: absolute;\n        z-index: 1;\n        left: 0;\n        top: 0;\n        width: 55px;\n        height: 55px;\n        color: black;\n        overflow: hidden;\n        background-color: black;\n        border-right: 1px solid white;\n    }\n\n    .mobile:hover {\n        cursor: pointer;\n    }\n\n    #sidebar {\n        position: absolute;\n        z-index: 1;\n        left: 0;\n        display: none;\n        max-height: 100vh;\n        max-width: min(75%, 300px);\n    }\n\n    #projectForm,\n    #taskForm,\n    #confirmationForm {\n        position: absolute;\n        margin-left: auto;\n        margin-right: auto;\n        left: 0;\n        right: 0;\n        text-align: center;\n        max-width: 100%;\n        padding-right: 5%;\n    }\n\n    .RPB {\n        font-size: 40px;\n        z-index: 1;\n    }\n\n    #date {\n        max-width: 250px;\n        font-size: 2rem;\n    }\n\n    #addTask {\n        margin: 0 100px;\n    }\n\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

"use strict";
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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

/***/ "./src/date.js":
/*!*********************!*\
  !*** ./src/date.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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
    } else {
        div.classList.remove("expired");
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProjectListener": () => (/* binding */ addProjectListener)
/* harmony export */ });
/* harmony import */ var _utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility.js */ "./src/utility.js");
/* harmony import */ var _setupProject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setupProject.js */ "./src/setupProject.js");
/* harmony import */ var _forms_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forms.js */ "./src/forms.js");




// it resets every time website refreshes so duplication bug occurs,
// and it's more efficient, (little bit lol)

const addTaskBtn = document.querySelector("#addTask");
addTaskBtn.addEventListener('click', () => {
    (0,_forms_js__WEBPACK_IMPORTED_MODULE_2__.showFormAndCover)();
});

// thought it would easy to put all form related code to the submit btn listener
const gbutton = document.querySelector(".green");
gbutton.addEventListener('click', () => {
    (0,_forms_js__WEBPACK_IMPORTED_MODULE_2__.addTask)();
});

const form = document.querySelector("#taskForm");
form.addEventListener('keydown', (e) => {
    if (e.code == "Enter") {
        (0,_forms_js__WEBPACK_IMPORTED_MODULE_2__.addTask)();
    }
});

const rbutton = document.querySelector(".red");
rbutton.addEventListener('click', () => {
    (0,_forms_js__WEBPACK_IMPORTED_MODULE_2__.resetForm)();
});

const addProjectBtn = document.querySelector("#addProject");
addProjectBtn.addEventListener('click', () => {
    const projForm = document.querySelector("#projectForm")
    projForm.style.display = "flex";
    const cover = document.querySelector(".cover");
    cover.style.display = "block";
});

const proj_gbutton = document.querySelector(".proj_green");
proj_gbutton.addEventListener('click', () => {
    (0,_forms_js__WEBPACK_IMPORTED_MODULE_2__.addProject)();
});

const projForm = document.querySelector("#projectForm");
projForm.addEventListener("keydown", (e) => {
    if (e.code == "Enter") {
        (0,_forms_js__WEBPACK_IMPORTED_MODULE_2__.addProject)();
    }
})

const proj_rbutton = document.querySelector(".proj_red");
proj_rbutton.addEventListener('click', () => {
    (0,_forms_js__WEBPACK_IMPORTED_MODULE_2__.resetProjForm)();
});

const conf_green = document.querySelector(".conf_green");
conf_green.addEventListener('click', () => {
    (0,_setupProject_js__WEBPACK_IMPORTED_MODULE_1__.onClickingRPB)();
    (0,_forms_js__WEBPACK_IMPORTED_MODULE_2__.resetConfForm)();
});

const conf_red = document.querySelector(".conf_red");
conf_red.addEventListener('click', () => {
    (0,_forms_js__WEBPACK_IMPORTED_MODULE_2__.resetConfForm)();
})

// add ID to each project and then ???
const addProjectListener = (id) => {
    const project = document.getElementById(`${id}`);

    project.addEventListener('click', () => {
        const temp = document.querySelector('.selected');
        temp.classList.remove("selected");
        project.classList.add("selected");
        if (window.innerWidth < "1024") {
            const sidebar = document.querySelector("#sidebar");
            const mobileBtn = document.querySelector(".mobile");
            sidebar.style.display = "none";
            mobileBtn.style.display = "initial";
        }
        (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.changeProjectD)(project.textContent);
    });
}

addProjectListener("Pr0");

// navigate calender, left and right arrow
const left = document.querySelector('.calLeft');
const right = document.querySelector('.calRight');
const input = document.querySelector('#date');
left.addEventListener('click', () => {
    input.stepDown();
    (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.checkDueDate)();
});
right.addEventListener('click', () => {
    input.stepUp();
    (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.checkDueDate)();
});
// date is picked manually from the calander, click doesn't work
input.addEventListener('change', () => {
    console.log("what");
    (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.checkDueDate)();
})

/***/ }),

/***/ "./src/forms.js":
/*!**********************!*\
  !*** ./src/forms.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProject": () => (/* binding */ addProject),
/* harmony export */   "addTask": () => (/* binding */ addTask),
/* harmony export */   "resetConfForm": () => (/* binding */ resetConfForm),
/* harmony export */   "resetForm": () => (/* binding */ resetForm),
/* harmony export */   "resetProjForm": () => (/* binding */ resetProjForm),
/* harmony export */   "showConfirmationForm": () => (/* binding */ showConfirmationForm),
/* harmony export */   "showFormAndCover": () => (/* binding */ showFormAndCover)
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");
/* harmony import */ var _setupTask_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setupTask.js */ "./src/setupTask.js");
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");
/* harmony import */ var _date_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./date.js */ "./src/date.js");
/* harmony import */ var _eventListeners_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./eventListeners.js */ "./src/eventListeners.js");







const addProject = () => {
    const project = getProject();
    if (!project) {
        alert("Failure, can't repeat project name")
    } else {
        resetProjForm();
        _todo_js__WEBPACK_IMPORTED_MODULE_2__.projects[project.title] = project;
        _todo_js__WEBPACK_IMPORTED_MODULE_2__.projects[project.title].tasks = {};
        _todo_js__WEBPACK_IMPORTED_MODULE_2__.projects[project.title].id = project.id;

        (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.addProjectD)(project, project.id);
        (0,_eventListeners_js__WEBPACK_IMPORTED_MODULE_4__.addProjectListener)(project.id);


        // save to local when you add task or project
        localStorage.setItem('projects', JSON.stringify(_todo_js__WEBPACK_IMPORTED_MODULE_2__.projects));
    }
}



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
        dueDate.value = (0,_date_js__WEBPACK_IMPORTED_MODULE_3__.getDate)();

        // setup task
        _todo_js__WEBPACK_IMPORTED_MODULE_2__.projects[currentProject].tasks[task.title] = task;
        (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.addTaskD)(task, currentProject);
        (0,_setupTask_js__WEBPACK_IMPORTED_MODULE_1__.setupTaskD)(task);

        const rbutton = document.querySelector(".red");
        rbutton.style.display = "flex";

        const gbutton = document.querySelector(".green");
        gbutton.style.backgroundColor = "rgb(47, 255, 47)";
        gbutton.textContent = "Add";

        // save to local when you add task or project
        localStorage.setItem('projects', JSON.stringify(_todo_js__WEBPACK_IMPORTED_MODULE_2__.projects));
    };
}

function showFormAndCover() {
    const form = document.querySelector("#taskForm");
    const cover = document.querySelector(".cover");
    cover.style.display = "block";
    form.style.display = "flex";
}

function resetForm() {
    const form = document.querySelector("#taskForm");
    const cover = document.querySelector(".cover");
    form.reset();
    form.style.display = "none";
    cover.style.display = "none";

    // this is also default, present in date.js!
    const dueDate = document.getElementById("dueDate");
    dueDate.value = (0,_date_js__WEBPACK_IMPORTED_MODULE_3__.getDate)();
}

// couldn't get submit type button to work, so needed a function to get values
// from the form, this is it
function getTask() {
    const title = document.getElementById("title").value;
    const currentProject = document.querySelector(".selected").textContent;
    if (!_todo_js__WEBPACK_IMPORTED_MODULE_2__.projects[currentProject].tasks[title]) {
        const description = document.getElementById("description").value;
        let dueDate = document.getElementById("dueDate").value;
        const priority = document.getElementById("priority").value;

        if (!dueDate) {
            dueDate = (0,_date_js__WEBPACK_IMPORTED_MODULE_3__.getDate)();
        }

        let id = 0;
        // easiest way to prevent duplication bug => 2 tasks 1 id
        for (let em in _todo_js__WEBPACK_IMPORTED_MODULE_2__.projects[currentProject].tasks) {
            id = Math.max(id,
                Number(_todo_js__WEBPACK_IMPORTED_MODULE_2__.projects[currentProject].tasks[em].id
                    .replace("task", "")) + 1);
        }




        const task = (0,_todo_js__WEBPACK_IMPORTED_MODULE_2__.todo)(title, description, (0,_date_js__WEBPACK_IMPORTED_MODULE_3__.formatDate)(dueDate), priority, "task" +
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
    if (!_todo_js__WEBPACK_IMPORTED_MODULE_2__.projects[title]) {
        //const dueDate = document.getElementById("proj_dueDate").value;

        let projectID = 0;
        // easiest way to prevent duplication bug => 2 projects 1 id
        for (let em in _todo_js__WEBPACK_IMPORTED_MODULE_2__.projects) {
            projectID = Math.max(projectID,
                Number(_todo_js__WEBPACK_IMPORTED_MODULE_2__.projects[em].id.replace("Pr", "")) + 1);
        }

        const proj = (0,_todo_js__WEBPACK_IMPORTED_MODULE_2__.projectFactory)(title, /*dueDate,*/ "Pr" + projectID.toString());
        return proj;
    } else {
        return 0;
    }

}

function resetProjForm() {
    const form = document.querySelector("#projectForm");
    const cover = document.querySelector(".cover");
    document.getElementById("proj_title").value = "";
    //document.getElementById("proj_dueDate").value = "";
    form.style.display = "none";
    cover.style.display = "none";

    // this is also default, present in date.js!
    //const dueDate = document.getElementById("proj_dueDate");
    // dueDate.value = getDate();
}

function resetConfForm() {
    const confForm = document.querySelector("#confirmationForm");
    confForm.style.display = "none";
    const cover = document.querySelector(".cover");
    cover.style.display = "none";
}

function showConfirmationForm() {
    const form = document.querySelector("#confirmationForm");
    form.style.display = "flex";
    const cover = document.querySelector(".cover");
    cover.style.display = "block";
}

/***/ }),

/***/ "./src/mobile.js":
/*!***********************!*\
  !*** ./src/mobile.js ***!
  \***********************/
/***/ (() => {

const mobileBtn = document.querySelector(".mobile");
mobileBtn.addEventListener('click', () => {
    const sidebar = document.querySelector("#sidebar");
    if (sidebar.style.display == "flex") {
        sidebar.style.display = "none";
    } else {
        sidebar.style.display = "flex";
        mobileBtn.style.display = "none";
    }
});

const sidebar = document.querySelector("#sidebar");
window.addEventListener('resize', () => {
    if (window.innerWidth > "1024") {
        sidebar.style.display = "flex";
    }
    if (window.innerWidth < "1024") {
        sidebar.style.display = "none";
        mobileBtn.style.display = "flex";
    }
   // //if (sidebar.style.display != "flex") {
      //  mobileBtn.style.display = "none";
    //}
})

const content = document.querySelector("#content");
content.addEventListener("click", () => {
    if (window.innerWidth < "1024") {
        sidebar.style.display = "none";
        mobileBtn.style.display = "flex";
    }
})

// There might be a more efficient way. This seems to work though.

/***/ }),

/***/ "./src/setupProject.js":
/*!*****************************!*\
  !*** ./src/setupProject.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addRPB": () => (/* binding */ addRPB),
/* harmony export */   "onClickingRPB": () => (/* binding */ onClickingRPB),
/* harmony export */   "removeRPB": () => (/* binding */ removeRPB)
/* harmony export */ });
/* harmony import */ var _forms_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forms.js */ "./src/forms.js");
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");
/* harmony import */ var _utility_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utility.js */ "./src/utility.js");




// for now mainly just remove project button

// RPB - remove project button
function addRPB() {
    const header = document.querySelector(".header");
    if (header.lastChild.textContent != "X") {
        const delBtn = document.createElement("button");
        delBtn.textContent = "X";
        delBtn.classList.add("RPB");
        delBtn.addEventListener('click', () => {
            (0,_forms_js__WEBPACK_IMPORTED_MODULE_0__.showConfirmationForm)();
        });
        header.appendChild(delBtn);
    }
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
    const projectID = _todo_js__WEBPACK_IMPORTED_MODULE_1__.projects[projectName2].id;
    delete _todo_js__WEBPACK_IMPORTED_MODULE_1__.projects[projectName2];
    const project = document.querySelector(`#${projectID}`)
    project.remove();
    console.log(_todo_js__WEBPACK_IMPORTED_MODULE_1__.projects);

    const home = document.querySelector("#Pr0");
    home.classList.add("selected");
    (0,_utility_js__WEBPACK_IMPORTED_MODULE_2__.changeProjectD)("HOME");

    // save because you removed a project
    localStorage.setItem('projects', JSON.stringify(_todo_js__WEBPACK_IMPORTED_MODULE_1__.projects));
}

/***/ }),

/***/ "./src/setupTask.js":
/*!**************************!*\
  !*** ./src/setupTask.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setupTaskD": () => (/* binding */ setupTaskD)
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");
/* harmony import */ var _forms_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forms.js */ "./src/forms.js");
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");
/* harmony import */ var _utility_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utility.js */ "./src/utility.js");






// "Control" function
const setupTaskD = (task) => {
    doUI(task);
    setupEditButton(task);
    setupDeleteButton(task);
};

const doUI = (working_task) => {
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


const setupDeleteButton = (working_task) => {
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
        const title = (0,_utility_js__WEBPACK_IMPORTED_MODULE_3__.getTitle)(taskID);
        const currentProject = document.querySelector(".selected").textContent;
        (0,_utility_js__WEBPACK_IMPORTED_MODULE_3__.deleteTask)(currentProject, _todo_js__WEBPACK_IMPORTED_MODULE_2__.projects[currentProject].tasks[title]);
        (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.eraseTaskD)(taskID);
    });
};

const setupEditButton = (working_task) => {
    const btn = document.createElement('button');
    btn.textContent = "Edit";

    const div = document.createElement("div");
    div.classList.add("taskButtons");

    const taskNode = document.querySelector(`.${working_task.id}`);
    taskNode.appendChild(div);
    div.appendChild(btn);

    btn.addEventListener('click', (e) => {
        (0,_forms_js__WEBPACK_IMPORTED_MODULE_1__.showFormAndCover)();
        setupEditForm(
            (0,_utility_js__WEBPACK_IMPORTED_MODULE_3__.getTitle)([...e.target.parentNode.parentNode.classList][0]));
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectFactory": () => (/* binding */ projectFactory),
/* harmony export */   "projects": () => (/* binding */ projects),
/* harmony export */   "todo": () => (/* binding */ todo)
/* harmony export */ });
/* harmony import */ var _date_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./date.js */ "./src/date.js");


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

const projectFactory = (title/*, dueDate*/, id) => {
    return { title/*, dueDate*/, id };
};

// temp

/***/ }),

/***/ "./src/utility.js":
/*!************************!*\
  !*** ./src/utility.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeProjectD": () => (/* binding */ changeProjectD),
/* harmony export */   "checkDueDate": () => (/* binding */ checkDueDate),
/* harmony export */   "deleteTask": () => (/* binding */ deleteTask),
/* harmony export */   "getTitle": () => (/* binding */ getTitle),
/* harmony export */   "loadFromStorage": () => (/* binding */ loadFromStorage)
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");
/* harmony import */ var _setupTask_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setupTask.js */ "./src/setupTask.js");
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");
/* harmony import */ var _eventListeners_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eventListeners.js */ "./src/eventListeners.js");
/* harmony import */ var _setupProject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./setupProject */ "./src/setupProject.js");
/* harmony import */ var _date_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./date.js */ "./src/date.js");








// felt like this deserves a seperate module, since it's not really DOM manip.
const changeProjectD = (projectName) => {
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.eraseTasksD)();
    if (_todo_js__WEBPACK_IMPORTED_MODULE_2__.projects[projectName].tasks != {}) {
        for (let em in _todo_js__WEBPACK_IMPORTED_MODULE_2__.projects[projectName].tasks) {
            (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.addTaskD)(_todo_js__WEBPACK_IMPORTED_MODULE_2__.projects[projectName].tasks[em]);
            (0,_setupTask_js__WEBPACK_IMPORTED_MODULE_1__.setupTaskD)(_todo_js__WEBPACK_IMPORTED_MODULE_2__.projects[projectName].tasks[em], projectName);
        }
    }
    if (projectName != "HOME") {
        (0,_setupProject__WEBPACK_IMPORTED_MODULE_4__.addRPB)();
    } else {
        (0,_setupProject__WEBPACK_IMPORTED_MODULE_4__.removeRPB)();
    }
};


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

function checkDueDate() {
    const currentProject = document.querySelector(".selected").textContent;
    for (let em in _todo_js__WEBPACK_IMPORTED_MODULE_2__.projects[currentProject].tasks) {
        const div = document.querySelector(`.${_todo_js__WEBPACK_IMPORTED_MODULE_2__.projects[currentProject].tasks[em].id
            }`);
        if ((0,_date_js__WEBPACK_IMPORTED_MODULE_5__.expireCheck)(_todo_js__WEBPACK_IMPORTED_MODULE_2__.projects[currentProject].tasks[em])) {
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

function deleteTask(project, task) {
    console.log(project);
    delete _todo_js__WEBPACK_IMPORTED_MODULE_2__.projects[project].tasks[task.title];
    // we are actually deleting, not just erasing from screen!!!
    localStorage.setItem('projects', JSON.stringify(_todo_js__WEBPACK_IMPORTED_MODULE_2__.projects));
}

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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _eventListeners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eventListeners */ "./src/eventListeners.js");
/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./date */ "./src/date.js");
/* harmony import */ var _mobile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mobile */ "./src/mobile.js");
/* harmony import */ var _mobile__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mobile__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utility */ "./src/utility.js");






(0,_utility__WEBPACK_IMPORTED_MODULE_4__.loadFromStorage)();
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
    - add keybinds, especially enter instead of mouse click -///-
    - CLEAN CODE!!!!! you know currentProject repeat all the time and other jazz
    - experiment with working_task, try to remove -///-
    - rework modules, maybe no need to generalize everything, experiment
    - cleaner css, more comments, consider animations/transformations for 
        consider remaking css ground up, make it work on mobile first
    - delete the task only after the edit form is submitted, potentially use
    async/wait function
    - rework mobile design, perhaps addTask on top and calander on bottom,
    might feel more natural -///-

    Potential bugs:
        Small blank rectangle appearing sometimes when resizing. Refresh fixes.
*/



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxRQUFRLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxPQUFPLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE1BQU0sT0FBTyxPQUFPLEtBQUssWUFBWSxNQUFNLE9BQU8sT0FBTyxLQUFLLFlBQVksTUFBTSxPQUFPLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxPQUFPLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUs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QUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNLO0FBQ1Y7QUFDRTtBQUMwQjs7QUFFNUMseURBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kYXRlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2V2ZW50TGlzdGVuZXJzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9mb3Jtcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9iaWxlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zZXR1cFByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NldHVwVGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdXRpbGl0eS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAtLW5ldXRyYWw6ICNmNWY1ZjU7XFxuICAgIC0tdmlvbGV0OiB3aGl0ZTtcXG4gICAgLS1zdG9uZTogIzZlNjI3OTtcXG4gICAgLS16aW5jOiAjM2YzZjQ2O1xcbiAgICAtLWhvdmVyOiByZ2IoNjksIDMxLCA4Myk7XFxuXFxufVxcblxcbmJvZHksXFxuaHRtbCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG5cXG4jc2lkZWJhciB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXppbmMpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jc2lkZWJhcj5kaXYge1xcbiAgICBmb250LXNpemU6IDZ2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ob21lIHtcXG4gICAgZmxleDogMTtcXG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IGJsYWNrIHNvbGlkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdG9uZSk7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4jcHJvamVjdHMge1xcbiAgICBmbGV4OiA3O1xcbn1cXG5cXG4uaG9tZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGZsZXg6IDM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5cXG4uZXhwYW5kIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmV4cGFuZD5kaXY6Zmlyc3QtY2hpbGQsXFxuI2FkZFByb2plY3Qge1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmV4cGFuZD4qIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNhZGRQcm9qZWN0IHtcXG4gICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdG9uZSk7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4jYWRkUHJvamVjdDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXIpO1xcbn1cXG5cXG4uZXhwYW5kPmRpdjpmaXJzdC1jaGlsZCB7XFxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBibGFjaztcXG59XFxuXFxuXFxuLmV4cGFuZCAuc2hvcnRjdXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdG9uZSk7XFxuICAgIHBhZGRpbmc6IDUlO1xcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgYmxhY2s7XFxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmV4cGFuZCAuc2hvcnRjdXRzIHtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgbWF4LWhlaWdodDogNzB2aDtcXG59XFxuXFxuLnNob3J0Y3V0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXIpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5leHBhbmQ+ZGl2IHtcXG4gICAgZmxleDogNTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jdGFza3Mge1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDM1dmgsIDFmcikpO1xcbiAgICBncmlkLWdhcDogMnZoO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMyU7XFxufVxcblxcbiN0YXNrcz5kaXYge1xcbiAgICBoZWlnaHQ6IDM1dmg7XFxuICAgIGJhY2tncm91bmQ6IHJnYigwLCAxNDcsIDIyMyk7XFxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoMCwgMTQ3LCAyMjMsIDEpIDAlLFxcbiAgICAgICAgICAgIHJnYmEoMjExLCAyMzksIDI0MiwgMSkgNDklLCByZ2JhKDE3LCAxNiwgMTYsIDEpIDEwMCUpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAlO1xcbn1cXG5cXG4jdGFza3M+ZGl2PmRpdntcXG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcXG4gICAgZm9udC1zaXplOiAzdmg7XFxufVxcblxcbi5NdXN0IHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDIzMiwgNSwgNSk7XFxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoMjMyLCA1LCA1LCAxKSAwJSxcXG4gICAgICAgICAgICByZ2JhKDIxMywgMTQ0LCAxNDQsIDEpIDQ5JSwgcmdiYSgxNywgMTYsIDE2LCAxKSAxMDAlKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uTmVjZXNzYXJ5IHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDIzMiwgMTA3LCA1KTtcXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgyMzIsIDEwNywgNSwgMSkgMCUsXFxuICAgICAgICAgICAgcmdiYSgyMzUsIDIwMCwgMTYzLCAxKSA0OSUsIHJnYmEoMTcsIDE2LCAxNiwgMSkgMTAwJSkgIWltcG9ydGFudDtcXG59XFxuXFxuLk1heWJlIHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDE5MywgMjMyLCA1KTtcXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgxOTMsIDIzMiwgNSwgMSkgMCUsXFxuICAgICAgICAgICAgcmdiYSgyMjQsIDIzNSwgMTYzLCAxKSA0OSUsIHJnYmEoMTcsIDE2LCAxNiwgMSkgMTAwJSkgIWltcG9ydGFudDtcXG59XFxuXFxuI2NvbnRlbnQ+Kjpub3QoI3Rhc2tzKSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG59XFxuXFxuLmhlYWRlciAuUlBCIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGhlaWdodDogbWF4KDU1cHgsIDd2aCk7XFxuICAgIHdpZHRoOiBtYXgoNTVweCwgN3ZoKTtcXG4gICAgZm9udC1zaXplOiBtYXgoNDBweCwgM3JlbSk7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIGNvbG9yOiByZ2IoODUsIDMsIDE5KTtcXG59XFxuXFxuI2FkZFRhc2sge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IG1heCg0MHB4LCAzcmVtKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIGhlaWdodDogbWF4KDU1cHgsIDd2aCk7XFxufVxcblxcbiNhZGRUYXNrOmhvdmVyIHtcXG4gICAgb3BhY2l0eTogMC41O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNhZGRUYXNrOmFjdGl2ZSB7XFxuICAgIG9wYWNpdHk6IDAuMjtcXG59XFxuXFxuLnNlbGVjdGVkIHtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxMHB4IGdyb292ZSB2YXIoLS1ob3Zlcik7XFxufVxcblxcbiNkYXRlIHtcXG4gICAgd2lkdGg6IDQwdmggIWltcG9ydGFudDtcXG4gICAgZm9udC1zaXplOiA1dmg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogZ3JleTtcXG59XFxuXFxuLmNhbExlZnQge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDJ2aDtcXG59XFxuXFxuLmNhbFJpZ2h0IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDJ2aDtcXG59XFxuXFxuLm5hdmlnYXRlY2FsIHtcXG4gICAgZm9udC1zaXplOiA4dmg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbiN0YXNrRm9ybSB7XFxuICAgIHdpZHRoOiA2NXZoO1xcbiAgICBoZWlnaHQ6IDY1dmg7XFxuICAgIGxlZnQ6IGNhbGMoNTAlIC0gMTB2aCk7XFxuICAgIHRvcDogY2FsYyg1MCUgLSAzMHZoKTtcXG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcXG4gICAgcGFkZGluZy1yaWdodDogNSU7XFxuICAgIGZvbnQtc2l6ZTogM3ZoO1xcbn1cXG5cXG4jcHJvamVjdEZvcm0ge1xcbiAgICB3aWR0aDogNTV2aDtcXG4gICAgaGVpZ2h0OiAyNXZoO1xcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDEwdmgpO1xcbiAgICB0b3A6IGNhbGMoNTAlIC0gMzB2aCk7XFxuICAgIHBhZGRpbmc6IDAgMiUgMCAyJTtcXG4gICAgZm9udC1zaXplOiAzdmg7XFxufVxcblxcbiNjb25maXJtYXRpb25Gb3JtIHtcXG4gICAgd2lkdGg6IDUwdmg7XFxuICAgIGhlaWdodDogMzV2aDtcXG4gICAgbGVmdDogY2FsYyg1MCUgLSAxMHZoKTtcXG4gICAgdG9wOiBjYWxjKDUwJSAtIDMwdmgpO1xcbiAgICBwYWRkaW5nOiAwIDMlIDAgMyU7XFxuICAgIGZvbnQtc2l6ZTogM3ZoO1xcbn1cXG5cXG4jcHJvamVjdEZvcm0sXFxuI3Rhc2tGb3JtLFxcbiNjb25maXJtYXRpb25Gb3JtIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdG9uZSk7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgYm9yZGVyOiA1cHggdmFyKC0taG92ZXIpIHNvbGlkO1xcbn1cXG5cXG4uY292ZXIge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5cXG4jdGFza0Zvcm0gZGl2LFxcbiNwcm9qZWN0Rm9ybSBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jdGFza0Zvcm0gbGFiZWwsXFxuI3Byb2plY3RGb3JtIGxhYmVsIHtcXG4gICAgZmxleDogMTtcXG4gICAgbWluLXdpZHRoOiAyMHZoO1xcbiAgICBmb250LXNpemU6IDN2aDtcXG59XFxuXFxuI3Rhc2tGb3JtIGlucHV0LFxcbiN0YXNrRm9ybSBzZWxlY3Qge1xcbiAgICBmbGV4OiA2O1xcbiAgICBtaW4td2lkdGg6IDMwdmg7XFxufVxcblxcbiNkZXNjcmlwdGlvbixcXG4jdGFza0Zvcm0gaW5wdXQsXFxuI3ByaW9yaXR5LFxcbiNwcm9qX3RpdGxlLFxcbiNwcm9qX2R1ZURhdGUge1xcbiAgICBmb250LXNpemU6IDJ2aDtcXG4gICAgcGFkZGluZzogMSU7XFxufVxcblxcbiNkZXNjcmlwdGlvbiB7XFxuICAgIGhlaWdodDogMjB2aDtcXG4gICAgbWF4LXdpZHRoOiAzMHZoO1xcbiAgICByZXNpemU6IG5vbmU7XFxufVxcblxcbi5yZWRCdG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIG1hcmdpbi1yaWdodDogMjUlO1xcbn1cXG5cXG4uZ3JlZW5CdG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDcsIDI1NSwgNDcpO1xcbn1cXG5cXG4ucmVkQnRuLFxcbi5ncmVlbkJ0biB7XFxuICAgIGZvbnQtc2l6ZTogM3ZoO1xcbiAgICBwYWRkaW5nOiAxMCU7XFxuICAgIHdpZHRoOiAxNXZoO1xcbiAgICBoZWlnaHQ6IDAuNXZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZidG4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5leHBpcmVkIHtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgcmVkO1xcbn1cXG5cXG5cXG4udGFza19kZXNjIHtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgZmxleDogNjtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi50YXNrX2R1ZURhdGUge1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG4udGFza190aXRsZSxcXG4udGFza19kZXNjLFxcbi50YXNrX2R1ZURhdGUge1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIxMik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnRhc2tfdGl0bGUge1xcbiAgICBmbGV4OiAxO1xcbiAgICBwYWRkaW5nOiAwIDYlO1xcbn1cXG5cXG4udGFza0J1dHRvbnM+YnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAzdmg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLm1vYmlsZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcblxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEwMHB4KSB7XFxuXFxuICAgIGJvZHksXFxuICAgIGh0bWwge1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB9XFxuXFxuICAgIC5tb2JpbGUge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHotaW5kZXg6IDE7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgd2lkdGg6IDU1cHg7XFxuICAgICAgICBoZWlnaHQ6IDU1cHg7XFxuICAgICAgICBjb2xvcjogYmxhY2s7XFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgfVxcblxcbiAgICAubW9iaWxlOmhvdmVyIHtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcblxcbiAgICAjc2lkZWJhciB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB6LWluZGV4OiAxO1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcXG4gICAgICAgIG1heC13aWR0aDogbWluKDc1JSwgMzAwcHgpO1xcbiAgICB9XFxuXFxuICAgICNwcm9qZWN0Rm9ybSxcXG4gICAgI3Rhc2tGb3JtLFxcbiAgICAjY29uZmlybWF0aW9uRm9ybSB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICByaWdodDogMDtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDUlO1xcbiAgICB9XFxuXFxuICAgIC5SUEIge1xcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICAgICAgei1pbmRleDogMTtcXG4gICAgfVxcblxcbiAgICAjZGF0ZSB7XFxuICAgICAgICBtYXgtd2lkdGg6IDI1MHB4O1xcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICB9XFxuXFxuICAgICNhZGRUYXNrIHtcXG4gICAgICAgIG1hcmdpbjogMCAxMDBweDtcXG4gICAgfVxcblxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksVUFBVTtJ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Ozs7SUFHSSw2Q0FBNkM7SUFDN0MsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsV0FBVztBQUNmOztBQUVBO0lBQ0ksT0FBTztJQUNQLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7OztBQUlBOztJQUVJOztRQUVJLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxhQUFhO1FBQ2IsdUJBQXVCO1FBQ3ZCLG1CQUFtQjtRQUNuQixrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLE9BQU87UUFDUCxNQUFNO1FBQ04sV0FBVztRQUNYLFlBQVk7UUFDWixZQUFZO1FBQ1osZ0JBQWdCO1FBQ2hCLHVCQUF1QjtRQUN2Qiw2QkFBNkI7SUFDakM7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLFVBQVU7UUFDVixPQUFPO1FBQ1AsYUFBYTtRQUNiLGlCQUFpQjtRQUNqQiwwQkFBMEI7SUFDOUI7O0lBRUE7OztRQUdJLGtCQUFrQjtRQUNsQixpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLE9BQU87UUFDUCxRQUFRO1FBQ1Isa0JBQWtCO1FBQ2xCLGVBQWU7UUFDZixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsVUFBVTtJQUNkOztJQUVBO1FBQ0ksZ0JBQWdCO1FBQ2hCLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztBQUVKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIC0tbmV1dHJhbDogI2Y1ZjVmNTtcXG4gICAgLS12aW9sZXQ6IHdoaXRlO1xcbiAgICAtLXN0b25lOiAjNmU2Mjc5O1xcbiAgICAtLXppbmM6ICMzZjNmNDY7XFxuICAgIC0taG92ZXI6IHJnYig2OSwgMzEsIDgzKTtcXG5cXG59XFxuXFxuYm9keSxcXG5odG1sIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcblxcbiNzaWRlYmFyIHtcXG4gICAgZmxleDogMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0temluYyk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNzaWRlYmFyPmRpdiB7XFxuICAgIGZvbnQtc2l6ZTogNnZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhvbWUge1xcbiAgICBmbGV4OiAxO1xcbiAgICBib3JkZXItYm90dG9tOiA1cHggYmxhY2sgc29saWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN0b25lKTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbiNwcm9qZWN0cyB7XFxuICAgIGZsZXg6IDc7XFxufVxcblxcbi5ob21lOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXIpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgZmxleDogMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcblxcbi5leHBhbmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZXhwYW5kPmRpdjpmaXJzdC1jaGlsZCxcXG4jYWRkUHJvamVjdCB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZXhwYW5kPioge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI2FkZFByb2plY3Qge1xcbiAgICBib3JkZXItdG9wOiAzcHggc29saWQgYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN0b25lKTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbiNhZGRQcm9qZWN0OmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlcik7XFxufVxcblxcbi5leHBhbmQ+ZGl2OmZpcnN0LWNoaWxkIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG5cXG4uZXhwYW5kIC5zaG9ydGN1dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN0b25lKTtcXG4gICAgcGFkZGluZzogNSU7XFxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBibGFjaztcXG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uZXhwYW5kIC5zaG9ydGN1dHMge1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBtYXgtaGVpZ2h0OiA3MHZoO1xcbn1cXG5cXG4uc2hvcnRjdXQ6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlcik7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmV4cGFuZD5kaXYge1xcbiAgICBmbGV4OiA1O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiN0YXNrcyB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzV2aCwgMWZyKSk7XFxuICAgIGdyaWQtZ2FwOiAydmg7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAzJTtcXG59XFxuXFxuI3Rhc2tzPmRpdiB7XFxuICAgIGhlaWdodDogMzV2aDtcXG4gICAgYmFja2dyb3VuZDogcmdiKDAsIDE0NywgMjIzKTtcXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgwLCAxNDcsIDIyMywgMSkgMCUsXFxuICAgICAgICAgICAgcmdiYSgyMTEsIDIzOSwgMjQyLCAxKSA0OSUsIHJnYmEoMTcsIDE2LCAxNiwgMSkgMTAwJSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XFxufVxcblxcbiN0YXNrcz5kaXY+ZGl2e1xcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xcbiAgICBmb250LXNpemU6IDN2aDtcXG59XFxuXFxuLk11c3Qge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjMyLCA1LCA1KTtcXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgyMzIsIDUsIDUsIDEpIDAlLFxcbiAgICAgICAgICAgIHJnYmEoMjEzLCAxNDQsIDE0NCwgMSkgNDklLCByZ2JhKDE3LCAxNiwgMTYsIDEpIDEwMCUpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5OZWNlc3Nhcnkge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjMyLCAxMDcsIDUpO1xcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDIzMiwgMTA3LCA1LCAxKSAwJSxcXG4gICAgICAgICAgICByZ2JhKDIzNSwgMjAwLCAxNjMsIDEpIDQ5JSwgcmdiYSgxNywgMTYsIDE2LCAxKSAxMDAlKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uTWF5YmUge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTkzLCAyMzIsIDUpO1xcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDE5MywgMjMyLCA1LCAxKSAwJSxcXG4gICAgICAgICAgICByZ2JhKDIyNCwgMjM1LCAxNjMsIDEpIDQ5JSwgcmdiYSgxNywgMTYsIDE2LCAxKSAxMDAlKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4jY29udGVudD4qOm5vdCgjdGFza3MpIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbn1cXG5cXG4uaGVhZGVyIC5SUEIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OiBtYXgoNTVweCwgN3ZoKTtcXG4gICAgd2lkdGg6IG1heCg1NXB4LCA3dmgpO1xcbiAgICBmb250LXNpemU6IG1heCg0MHB4LCAzcmVtKTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgY29sb3I6IHJnYig4NSwgMywgMTkpO1xcbn1cXG5cXG4jYWRkVGFzayB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogbWF4KDQwcHgsIDNyZW0pO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgaGVpZ2h0OiBtYXgoNTVweCwgN3ZoKTtcXG59XFxuXFxuI2FkZFRhc2s6aG92ZXIge1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2FkZFRhc2s6YWN0aXZlIHtcXG4gICAgb3BhY2l0eTogMC4yO1xcbn1cXG5cXG4uc2VsZWN0ZWQge1xcbiAgICBib3JkZXItcmlnaHQ6IDEwcHggZ3Jvb3ZlIHZhcigtLWhvdmVyKTtcXG59XFxuXFxuI2RhdGUge1xcbiAgICB3aWR0aDogNDB2aCAhaW1wb3J0YW50O1xcbiAgICBmb250LXNpemU6IDV2aDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiBncmV5O1xcbn1cXG5cXG4uY2FsTGVmdCB7XFxuICAgIG1hcmdpbi1yaWdodDogMnZoO1xcbn1cXG5cXG4uY2FsUmlnaHQge1xcbiAgICBtYXJnaW4tbGVmdDogMnZoO1xcbn1cXG5cXG4ubmF2aWdhdGVjYWwge1xcbiAgICBmb250LXNpemU6IDh2aDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuI3Rhc2tGb3JtIHtcXG4gICAgd2lkdGg6IDY1dmg7XFxuICAgIGhlaWdodDogNjV2aDtcXG4gICAgbGVmdDogY2FsYyg1MCUgLSAxMHZoKTtcXG4gICAgdG9wOiBjYWxjKDUwJSAtIDMwdmgpO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA1JTtcXG4gICAgZm9udC1zaXplOiAzdmg7XFxufVxcblxcbiNwcm9qZWN0Rm9ybSB7XFxuICAgIHdpZHRoOiA1NXZoO1xcbiAgICBoZWlnaHQ6IDI1dmg7XFxuICAgIGxlZnQ6IGNhbGMoNTAlIC0gMTB2aCk7XFxuICAgIHRvcDogY2FsYyg1MCUgLSAzMHZoKTtcXG4gICAgcGFkZGluZzogMCAyJSAwIDIlO1xcbiAgICBmb250LXNpemU6IDN2aDtcXG59XFxuXFxuI2NvbmZpcm1hdGlvbkZvcm0ge1xcbiAgICB3aWR0aDogNTB2aDtcXG4gICAgaGVpZ2h0OiAzNXZoO1xcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDEwdmgpO1xcbiAgICB0b3A6IGNhbGMoNTAlIC0gMzB2aCk7XFxuICAgIHBhZGRpbmc6IDAgMyUgMCAzJTtcXG4gICAgZm9udC1zaXplOiAzdmg7XFxufVxcblxcbiNwcm9qZWN0Rm9ybSxcXG4jdGFza0Zvcm0sXFxuI2NvbmZpcm1hdGlvbkZvcm0ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN0b25lKTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBib3JkZXI6IDVweCB2YXIoLS1ob3Zlcikgc29saWQ7XFxufVxcblxcbi5jb3ZlciB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcblxcbiN0YXNrRm9ybSBkaXYsXFxuI3Byb2plY3RGb3JtIGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiN0YXNrRm9ybSBsYWJlbCxcXG4jcHJvamVjdEZvcm0gbGFiZWwge1xcbiAgICBmbGV4OiAxO1xcbiAgICBtaW4td2lkdGg6IDIwdmg7XFxuICAgIGZvbnQtc2l6ZTogM3ZoO1xcbn1cXG5cXG4jdGFza0Zvcm0gaW5wdXQsXFxuI3Rhc2tGb3JtIHNlbGVjdCB7XFxuICAgIGZsZXg6IDY7XFxuICAgIG1pbi13aWR0aDogMzB2aDtcXG59XFxuXFxuI2Rlc2NyaXB0aW9uLFxcbiN0YXNrRm9ybSBpbnB1dCxcXG4jcHJpb3JpdHksXFxuI3Byb2pfdGl0bGUsXFxuI3Byb2pfZHVlRGF0ZSB7XFxuICAgIGZvbnQtc2l6ZTogMnZoO1xcbiAgICBwYWRkaW5nOiAxJTtcXG59XFxuXFxuI2Rlc2NyaXB0aW9uIHtcXG4gICAgaGVpZ2h0OiAyMHZoO1xcbiAgICBtYXgtd2lkdGg6IDMwdmg7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuLnJlZEJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyNSU7XFxufVxcblxcbi5ncmVlbkJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0NywgMjU1LCA0Nyk7XFxufVxcblxcbi5yZWRCdG4sXFxuLmdyZWVuQnRuIHtcXG4gICAgZm9udC1zaXplOiAzdmg7XFxuICAgIHBhZGRpbmc6IDEwJTtcXG4gICAgd2lkdGg6IDE1dmg7XFxuICAgIGhlaWdodDogMC41dmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZmJ0biB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmV4cGlyZWQge1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCByZWQ7XFxufVxcblxcblxcbi50YXNrX2Rlc2Mge1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBmbGV4OiA2O1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLnRhc2tfZHVlRGF0ZSB7XFxuICAgIGZsZXg6IDE7XFxufVxcblxcbi50YXNrX3RpdGxlLFxcbi50YXNrX2Rlc2MsXFxuLnRhc2tfZHVlRGF0ZSB7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMjEyKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udGFza190aXRsZSB7XFxuICAgIGZsZXg6IDE7XFxuICAgIHBhZGRpbmc6IDAgNiU7XFxufVxcblxcbi50YXNrQnV0dG9ucz5idXR0b24ge1xcbiAgICBmb250LXNpemU6IDN2aDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4ubW9iaWxlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuXFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTAwcHgpIHtcXG5cXG4gICAgYm9keSxcXG4gICAgaHRtbCB7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgLm1vYmlsZSB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgei1pbmRleDogMTtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICB3aWR0aDogNTVweDtcXG4gICAgICAgIGhlaWdodDogNTVweDtcXG4gICAgICAgIGNvbG9yOiBibGFjaztcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICB9XFxuXFxuICAgIC5tb2JpbGU6aG92ZXIge1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxuXFxuICAgICNzaWRlYmFyIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHotaW5kZXg6IDE7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xcbiAgICAgICAgbWF4LXdpZHRoOiBtaW4oNzUlLCAzMDBweCk7XFxuICAgIH1cXG5cXG4gICAgI3Byb2plY3RGb3JtLFxcbiAgICAjdGFza0Zvcm0sXFxuICAgICNjb25maXJtYXRpb25Gb3JtIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIHJpZ2h0OiAwO1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICAgICAgcGFkZGluZy1yaWdodDogNSU7XFxuICAgIH1cXG5cXG4gICAgLlJQQiB7XFxuICAgICAgICBmb250LXNpemU6IDQwcHg7XFxuICAgICAgICB6LWluZGV4OiAxO1xcbiAgICB9XFxuXFxuICAgICNkYXRlIHtcXG4gICAgICAgIG1heC13aWR0aDogMjUwcHg7XFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxuICAgIH1cXG5cXG4gICAgI2FkZFRhc2sge1xcbiAgICAgICAgbWFyZ2luOiAwIDEwMHB4O1xcbiAgICB9XFxuXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi90b2RvXCI7XG5cbmNvbnN0IGNhbGVuZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkYXRlXCIpO1xuXG5jb25zdCB0b2RheSA9IGdldERhdGUoKTtcbmNhbGVuZGVyLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIHRvZGF5KTtcbmNhbGVuZGVyLnNldEF0dHJpYnV0ZShcIm1pblwiLCB0b2RheSk7XG5cbi8vIHNldCBkZWZhdWx0IGRhdGUgdmFsdWVzIHRvIHRvZGF5XG5jb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWVEYXRlXCIpO1xuZHVlRGF0ZS52YWx1ZSA9IGdldERhdGUoKTtcbi8vY29uc3QgcHJval9kdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qX2R1ZURhdGVcIik7XG4vL3Byb2pfZHVlRGF0ZS52YWx1ZSA9IGdldERhdGUoKTtcblxuZnVuY3Rpb24gZ2V0RGF0ZSgpIHtcbiAgICB2YXIgZCA9IG5ldyBEYXRlKCksXG4gICAgICAgIG1vbnRoID0gJycgKyAoZC5nZXRNb250aCgpICsgMSksXG4gICAgICAgIGRheSA9ICcnICsgZC5nZXREYXRlKCksXG4gICAgICAgIHllYXIgPSBkLmdldEZ1bGxZZWFyKCk7XG5cbiAgICBpZiAobW9udGgubGVuZ3RoIDwgMilcbiAgICAgICAgbW9udGggPSAnMCcgKyBtb250aDtcbiAgICBpZiAoZGF5Lmxlbmd0aCA8IDIpXG4gICAgICAgIGRheSA9ICcwJyArIGRheTtcblxuICAgIHJldHVybiBbeWVhciwgbW9udGgsIGRheV0uam9pbignLScpO1xufVxuXG4vLyBpZGVhbGx5IHlvdSB3b3VsZCBmb3JtYXQgdG8gZml0IGxvY2F0aW9uLCBidXQgd2hhdCBhIHBhaW4gRDpcbmZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZSkge1xuICAgIGRhdGUgPSBkYXRlLnNwbGl0KFwiLVwiKTtcbiAgICByZXR1cm4gW2RhdGVbMV0sIGRhdGVbMl0sIGRhdGVbMF1dLmpvaW4oXCItXCIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXQoc3RyKSB7XG4gICAgc3RyID0gc3RyLnRvU3RyaW5nKCk7XG4gICAgY29uc3QgbW9udGggPSBnZXRNb250aEZyb21TdHJpbmcoc3RyLnN1YnN0cmluZyg0LCA3KSk7XG4gICAgY29uc3QgZGF5ID0gc3RyLnN1YnN0cmluZyg4LCAxMCk7XG4gICAgY29uc3QgeWVhciA9IHN0ci5zdWJzdHJpbmcoMTEsIDE1KTtcbiAgICByZXR1cm4gW2RheSwgbW9udGgsIHllYXJdO1xufVxuXG5mdW5jdGlvbiBnZXRNb250aEZyb21TdHJpbmcobW9uKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKERhdGUucGFyc2UobW9uICsgXCIgMSwgMjAxMlwiKSkuZ2V0TW9udGgoKSArIDE7XG59XG5cbmNvbnN0IGV4cGlyZUNoZWNrID0gKHRhc2spID0+IHtcbiAgICAvL2NvbnN0IHRvZGF5QXJyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlXCIpLnZhbHVlLnNwbGl0KFwiLVwiKTtcblxuICAgIGNvbnN0IHRvZGF5QXJyID0gZm9ybWF0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZVwiKS52YWx1ZUFzRGF0ZSk7XG4gICAgLy8gW2RheSwgbW9udGgsIHllYXJdXG4gICAgLy8gY29uc29sZS5sb2coZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlXCIpLnZhbHVlQXNEYXRlKTtcbiAgICAvLyBleDogV2VkIFNlcCAyOCAyMDIyIDAyOjAwOjAwIEdNVCswMjAwIChDZW50cmFsIEV1cm9wZWFuIFN1bW1lciBUaW1lKVxuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWxlY3RlZFwiKS50ZXh0Q29udGVudDtcbiAgICBjb25zdCBhcnIgPSBwcm9qZWN0c1tjdXJyZW50UHJvamVjdF0udGFza3NbdGFzay50aXRsZV0uZHVlRGF0ZS5zcGxpdChcIi1cIik7XG4gICAgaWYgKCt0b2RheUFyclswXSA+ICthcnJbMV0gfHwgK3RvZGF5QXJyWzFdID4gK2FyclswXSB8fCArdG9kYXlBcnJbMl0gPlxuICAgICAgICArYXJyWzJdKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbi8qY29uc3QgcHJval9leHBpcmVDaGVjayA9ICgpID0+IHtcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VsZWN0ZWRcIikudGV4dENvbnRlbnQ7XG4gICAgaWYgKGN1cnJlbnRQcm9qZWN0ICE9IFwiSE9NRVwiKSB7XG4gICAgICAgIGNvbnN0IHRvZGF5QXJyID0gZm9ybWF0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZVwiKS52YWx1ZUFzRGF0ZSk7XG4gICAgICAgIGNvbnN0IGFyciA9IHByb2plY3RzW2N1cnJlbnRQcm9qZWN0XS5kdWVEYXRlLnNwbGl0KFwiLVwiKTtcbiAgICAgICAgLy8geWVhciBtb250aCBkYXlcblxuICAgICAgICBpZiAoK3RvZGF5QXJyWzBdID4gK2FyclsyXSB8fCArdG9kYXlBcnJbMV0gPiArYXJyWzBdIHx8ICt0b2RheUFyclsyXSA+XG4gICAgICAgICAgICArYXJyWzBdKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxufSAqL1xuXG5leHBvcnQgeyBnZXREYXRlLCBmb3JtYXREYXRlLCBleHBpcmVDaGVjaywgLypwcm9qX2V4cGlyZUNoZWNrKi8gfTsiLCJpbXBvcnQgeyBleHBpcmVDaGVjayB9IGZyb20gXCIuL2RhdGVcIjtcblxuZXhwb3J0IGNvbnN0IGFkZFRhc2tEID0gKHRhc2spID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKGAke3Rhc2suaWR9YCk7XG4gICAgXG4gICAgaWYgKGV4cGlyZUNoZWNrKHRhc2spKSB7XG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwiZXhwaXJlZFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBkaXYuY2xhc3NMaXN0LnJlbW92ZShcImV4cGlyZWRcIik7XG4gICAgfVxuXG4gICAgY29uc3QgdGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tzXCIpO1xuICAgIHRhc2tzLmFwcGVuZENoaWxkKGRpdik7XG5cblxufTtcblxuZXhwb3J0IGNvbnN0IGVyYXNlVGFza3NEID0gKCkgPT4ge1xuICAgIGNvbnN0IHRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrc1wiKTtcbiAgICB3aGlsZSAodGFza3MuZmlyc3RDaGlsZCkge1xuICAgICAgICB0YXNrcy5yZW1vdmVDaGlsZCh0YXNrcy5sYXN0Q2hpbGQpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCBlcmFzZVRhc2tEID0gKGlkKSA9PiB7XG4gICAgY29uc3QgdGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2lkfWApO1xuICAgIHRhc2sucmVtb3ZlKCk7XG59O1xuXG5leHBvcnQgY29uc3QgYWRkUHJvamVjdEQgPSAocHJvamVjdCwgaWQpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwic2hvcnRjdXRcIik7XG4gICAgZGl2LmlkID0gaWQ7XG4gICAgZGl2LnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcblxuICAgIGNvbnN0IHNob3J0Y3V0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hvcnRjdXRzXCIpO1xuICAgIHNob3J0Y3V0cy5hcHBlbmQoZGl2KTtcbn07XG5cbi8vIEQgYXQgdGhlIGVuZCByZXByZXNlbnRzIERPTVxuIiwiaW1wb3J0IHsgY2hhbmdlUHJvamVjdEQsIGNoZWNrRHVlRGF0ZSB9IGZyb20gJy4vdXRpbGl0eS5qcyc7XG5pbXBvcnQgeyBvbkNsaWNraW5nUlBCIH0gZnJvbSAnLi9zZXR1cFByb2plY3QuanMnXG5pbXBvcnQge3Nob3dGb3JtQW5kQ292ZXIsIGFkZFRhc2ssIHJlc2V0Rm9ybSwgYWRkUHJvamVjdCwgcmVzZXRDb25mRm9ybSwgXG4gICAgcmVzZXRQcm9qRm9ybSB9IGZyb20gJy4vZm9ybXMuanMnO1xuXG4vLyBpdCByZXNldHMgZXZlcnkgdGltZSB3ZWJzaXRlIHJlZnJlc2hlcyBzbyBkdXBsaWNhdGlvbiBidWcgb2NjdXJzLFxuLy8gYW5kIGl0J3MgbW9yZSBlZmZpY2llbnQsIChsaXR0bGUgYml0IGxvbClcblxuY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkVGFza1wiKTtcbmFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgc2hvd0Zvcm1BbmRDb3ZlcigpO1xufSk7XG5cbi8vIHRob3VnaHQgaXQgd291bGQgZWFzeSB0byBwdXQgYWxsIGZvcm0gcmVsYXRlZCBjb2RlIHRvIHRoZSBzdWJtaXQgYnRuIGxpc3RlbmVyXG5jb25zdCBnYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ncmVlblwiKTtcbmdidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgYWRkVGFzaygpO1xufSk7XG5cbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tGb3JtXCIpO1xuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgICBpZiAoZS5jb2RlID09IFwiRW50ZXJcIikge1xuICAgICAgICBhZGRUYXNrKCk7XG4gICAgfVxufSk7XG5cbmNvbnN0IHJidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlZFwiKTtcbnJidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcmVzZXRGb3JtKCk7XG59KTtcblxuY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkUHJvamVjdFwiKTtcbmFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgcHJvakZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RGb3JtXCIpXG4gICAgcHJvakZvcm0uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIGNvbnN0IGNvdmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb3ZlclwiKTtcbiAgICBjb3Zlci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xufSk7XG5cbmNvbnN0IHByb2pfZ2J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJval9ncmVlblwiKTtcbnByb2pfZ2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBhZGRQcm9qZWN0KCk7XG59KTtcblxuY29uc3QgcHJvakZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RGb3JtXCIpO1xucHJvakZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICBpZiAoZS5jb2RlID09IFwiRW50ZXJcIikge1xuICAgICAgICBhZGRQcm9qZWN0KCk7XG4gICAgfVxufSlcblxuY29uc3QgcHJval9yYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qX3JlZFwiKTtcbnByb2pfcmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICByZXNldFByb2pGb3JtKCk7XG59KTtcblxuY29uc3QgY29uZl9ncmVlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29uZl9ncmVlblwiKTtcbmNvbmZfZ3JlZW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgb25DbGlja2luZ1JQQigpO1xuICAgIHJlc2V0Q29uZkZvcm0oKTtcbn0pO1xuXG5jb25zdCBjb25mX3JlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29uZl9yZWRcIik7XG5jb25mX3JlZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICByZXNldENvbmZGb3JtKCk7XG59KVxuXG4vLyBhZGQgSUQgdG8gZWFjaCBwcm9qZWN0IGFuZCB0aGVuID8/P1xuZXhwb3J0IGNvbnN0IGFkZFByb2plY3RMaXN0ZW5lciA9IChpZCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtpZH1gKTtcblxuICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0ZWQnKTtcbiAgICAgICAgdGVtcC5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCBcIjEwMjRcIikge1xuICAgICAgICAgICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2lkZWJhclwiKTtcbiAgICAgICAgICAgIGNvbnN0IG1vYmlsZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9iaWxlXCIpO1xuICAgICAgICAgICAgc2lkZWJhci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICBtb2JpbGVCdG4uc3R5bGUuZGlzcGxheSA9IFwiaW5pdGlhbFwiO1xuICAgICAgICB9XG4gICAgICAgIGNoYW5nZVByb2plY3REKHByb2plY3QudGV4dENvbnRlbnQpO1xuICAgIH0pO1xufVxuXG5hZGRQcm9qZWN0TGlzdGVuZXIoXCJQcjBcIik7XG5cbi8vIG5hdmlnYXRlIGNhbGVuZGVyLCBsZWZ0IGFuZCByaWdodCBhcnJvd1xuY29uc3QgbGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYWxMZWZ0Jyk7XG5jb25zdCByaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYWxSaWdodCcpO1xuY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGF0ZScpO1xubGVmdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpbnB1dC5zdGVwRG93bigpO1xuICAgIGNoZWNrRHVlRGF0ZSgpO1xufSk7XG5yaWdodC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpbnB1dC5zdGVwVXAoKTtcbiAgICBjaGVja0R1ZURhdGUoKTtcbn0pO1xuLy8gZGF0ZSBpcyBwaWNrZWQgbWFudWFsbHkgZnJvbSB0aGUgY2FsYW5kZXIsIGNsaWNrIGRvZXNuJ3Qgd29ya1xuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwid2hhdFwiKTtcbiAgICBjaGVja0R1ZURhdGUoKTtcbn0pIiwiaW1wb3J0IHsgYWRkUHJvamVjdEQsIGFkZFRhc2tEIH0gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHsgc2V0dXBUYXNrRCB9IGZyb20gJy4vc2V0dXBUYXNrLmpzJztcbmltcG9ydCB7IHByb2plY3RGYWN0b3J5LCBwcm9qZWN0cywgdG9kbyB9IGZyb20gJy4vdG9kby5qcyc7XG5pbXBvcnQgeyBmb3JtYXREYXRlLCBnZXREYXRlIH0gZnJvbSAnLi9kYXRlLmpzJztcbmltcG9ydCB7IGFkZFByb2plY3RMaXN0ZW5lciB9IGZyb20gJy4vZXZlbnRMaXN0ZW5lcnMuanMnO1xuXG5cbmV4cG9ydCBjb25zdCBhZGRQcm9qZWN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3QgPSBnZXRQcm9qZWN0KCk7XG4gICAgaWYgKCFwcm9qZWN0KSB7XG4gICAgICAgIGFsZXJ0KFwiRmFpbHVyZSwgY2FuJ3QgcmVwZWF0IHByb2plY3QgbmFtZVwiKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc2V0UHJvakZvcm0oKTtcbiAgICAgICAgcHJvamVjdHNbcHJvamVjdC50aXRsZV0gPSBwcm9qZWN0O1xuICAgICAgICBwcm9qZWN0c1twcm9qZWN0LnRpdGxlXS50YXNrcyA9IHt9O1xuICAgICAgICBwcm9qZWN0c1twcm9qZWN0LnRpdGxlXS5pZCA9IHByb2plY3QuaWQ7XG5cbiAgICAgICAgYWRkUHJvamVjdEQocHJvamVjdCwgcHJvamVjdC5pZCk7XG4gICAgICAgIGFkZFByb2plY3RMaXN0ZW5lcihwcm9qZWN0LmlkKTtcblxuXG4gICAgICAgIC8vIHNhdmUgdG8gbG9jYWwgd2hlbiB5b3UgYWRkIHRhc2sgb3IgcHJvamVjdFxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xuICAgIH1cbn1cblxuXG5cbmV4cG9ydCBjb25zdCBhZGRUYXNrID0gKCkgPT4ge1xuICAgIC8vIHJ1biBvbmx5IGlmIG5vdCBlZGl0aW5nLCB3ZSBoYXZlIDIgZXZlbnQgbGlzdG5lcnMgb24gb25lIGJ1dHRvblxuICAgIC8vIHNvIHRoaXMgZm9yY2VzIHRoZSBvdGhlciBvbmUgdG8gd29yayBhbG9uZSwgd2hpY2ggaXMgd2hhdCB3ZSB3YW50XG4gICAgY29uc3QgY3VycmVudFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdGVkXCIpLnRleHRDb250ZW50O1xuICAgIC8vIGJ1Z3Mgb2NjdXIgaWYgZmxhZyBpc24ndCBwcmVzZW50LCBzaW5jZSBhZnRlciBJIGFtIHVzaW5nIHR3b1xuICAgIC8vIGV2ZW50IGxpc3RuZXJzIGZvciBvbmUgYnV0dG9uXG4gICAgY29uc3QgdGFzayA9IGdldFRhc2soKTtcbiAgICBpZiAodGFzaykge1xuICAgICAgICByZXNldEZvcm0oKTtcbiAgICAgICAgLy8gc2V0IGRlZmF1bHQgZGF0ZSwgc28gTU0tREQtWVlZWSBpcyBub3Qgc2hvd24gb24gZm9ybT8/Pz8/XG4gICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZURhdGVcIik7XG4gICAgICAgIGR1ZURhdGUudmFsdWUgPSBnZXREYXRlKCk7XG5cbiAgICAgICAgLy8gc2V0dXAgdGFza1xuICAgICAgICBwcm9qZWN0c1tjdXJyZW50UHJvamVjdF0udGFza3NbdGFzay50aXRsZV0gPSB0YXNrO1xuICAgICAgICBhZGRUYXNrRCh0YXNrLCBjdXJyZW50UHJvamVjdCk7XG4gICAgICAgIHNldHVwVGFza0QodGFzayk7XG5cbiAgICAgICAgY29uc3QgcmJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVkXCIpO1xuICAgICAgICByYnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcblxuICAgICAgICBjb25zdCBnYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ncmVlblwiKTtcbiAgICAgICAgZ2J1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYig0NywgMjU1LCA0NylcIjtcbiAgICAgICAgZ2J1dHRvbi50ZXh0Q29udGVudCA9IFwiQWRkXCI7XG5cbiAgICAgICAgLy8gc2F2ZSB0byBsb2NhbCB3aGVuIHlvdSBhZGQgdGFzayBvciBwcm9qZWN0XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG4gICAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dGb3JtQW5kQ292ZXIoKSB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza0Zvcm1cIik7XG4gICAgY29uc3QgY292ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvdmVyXCIpO1xuICAgIGNvdmVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgZm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNldEZvcm0oKSB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza0Zvcm1cIik7XG4gICAgY29uc3QgY292ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvdmVyXCIpO1xuICAgIGZvcm0ucmVzZXQoKTtcbiAgICBmb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBjb3Zlci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbiAgICAvLyB0aGlzIGlzIGFsc28gZGVmYXVsdCwgcHJlc2VudCBpbiBkYXRlLmpzIVxuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZURhdGVcIik7XG4gICAgZHVlRGF0ZS52YWx1ZSA9IGdldERhdGUoKTtcbn1cblxuLy8gY291bGRuJ3QgZ2V0IHN1Ym1pdCB0eXBlIGJ1dHRvbiB0byB3b3JrLCBzbyBuZWVkZWQgYSBmdW5jdGlvbiB0byBnZXQgdmFsdWVzXG4vLyBmcm9tIHRoZSBmb3JtLCB0aGlzIGlzIGl0XG5mdW5jdGlvbiBnZXRUYXNrKCkge1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZVwiKS52YWx1ZTtcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VsZWN0ZWRcIikudGV4dENvbnRlbnQ7XG4gICAgaWYgKCFwcm9qZWN0c1tjdXJyZW50UHJvamVjdF0udGFza3NbdGl0bGVdKSB7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvblwiKS52YWx1ZTtcbiAgICAgICAgbGV0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZURhdGVcIikudmFsdWU7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmlvcml0eVwiKS52YWx1ZTtcblxuICAgICAgICBpZiAoIWR1ZURhdGUpIHtcbiAgICAgICAgICAgIGR1ZURhdGUgPSBnZXREYXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaWQgPSAwO1xuICAgICAgICAvLyBlYXNpZXN0IHdheSB0byBwcmV2ZW50IGR1cGxpY2F0aW9uIGJ1ZyA9PiAyIHRhc2tzIDEgaWRcbiAgICAgICAgZm9yIChsZXQgZW0gaW4gcHJvamVjdHNbY3VycmVudFByb2plY3RdLnRhc2tzKSB7XG4gICAgICAgICAgICBpZCA9IE1hdGgubWF4KGlkLFxuICAgICAgICAgICAgICAgIE51bWJlcihwcm9qZWN0c1tjdXJyZW50UHJvamVjdF0udGFza3NbZW1dLmlkXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKFwidGFza1wiLCBcIlwiKSkgKyAxKTtcbiAgICAgICAgfVxuXG5cblxuXG4gICAgICAgIGNvbnN0IHRhc2sgPSB0b2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZm9ybWF0RGF0ZShkdWVEYXRlKSwgcHJpb3JpdHksIFwidGFza1wiICtcbiAgICAgICAgICAgIGlkLnRvU3RyaW5nKCkpO1xuICAgICAgICByZXR1cm4gdGFzaztcbiAgICB9IGVsc2Uge1xuICAgICAgICBhbGVydChcIkZhaWx1cmUsIHRhc2sgd2l0aCB0aGUgc2FtZSB0aXRsZSBhbHJlYWR5IGV4aXN0c1wiKVxuICAgIH1cbn1cblxuLy8gc2ltaWxhciBwcm9ibGVtIGFzIHRhc2sgaWRcbi8vbGV0IHByb2plY3RJRCA9IE9iamVjdC5rZXlzKHByb2plY3RzKS5sZW5ndGg7XG5cbi8vIGFnYWludCwgbmVlZGVkIGEgd2F5IHRvIGdldCB2YWx1ZXMgZnJvbSB0aGUgZm9ybVxuZnVuY3Rpb24gZ2V0UHJvamVjdCgpIHtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJval90aXRsZVwiKS52YWx1ZTtcbiAgICBpZiAoIXByb2plY3RzW3RpdGxlXSkge1xuICAgICAgICAvL2NvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2pfZHVlRGF0ZVwiKS52YWx1ZTtcblxuICAgICAgICBsZXQgcHJvamVjdElEID0gMDtcbiAgICAgICAgLy8gZWFzaWVzdCB3YXkgdG8gcHJldmVudCBkdXBsaWNhdGlvbiBidWcgPT4gMiBwcm9qZWN0cyAxIGlkXG4gICAgICAgIGZvciAobGV0IGVtIGluIHByb2plY3RzKSB7XG4gICAgICAgICAgICBwcm9qZWN0SUQgPSBNYXRoLm1heChwcm9qZWN0SUQsXG4gICAgICAgICAgICAgICAgTnVtYmVyKHByb2plY3RzW2VtXS5pZC5yZXBsYWNlKFwiUHJcIiwgXCJcIikpICsgMSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcm9qID0gcHJvamVjdEZhY3RvcnkodGl0bGUsIC8qZHVlRGF0ZSwqLyBcIlByXCIgKyBwcm9qZWN0SUQudG9TdHJpbmcoKSk7XG4gICAgICAgIHJldHVybiBwcm9qO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cblxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRQcm9qRm9ybSgpIHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0Rm9ybVwiKTtcbiAgICBjb25zdCBjb3ZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY292ZXJcIik7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qX3RpdGxlXCIpLnZhbHVlID0gXCJcIjtcbiAgICAvL2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJval9kdWVEYXRlXCIpLnZhbHVlID0gXCJcIjtcbiAgICBmb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBjb3Zlci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbiAgICAvLyB0aGlzIGlzIGFsc28gZGVmYXVsdCwgcHJlc2VudCBpbiBkYXRlLmpzIVxuICAgIC8vY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJval9kdWVEYXRlXCIpO1xuICAgIC8vIGR1ZURhdGUudmFsdWUgPSBnZXREYXRlKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNldENvbmZGb3JtKCkge1xuICAgIGNvbnN0IGNvbmZGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb25maXJtYXRpb25Gb3JtXCIpO1xuICAgIGNvbmZGb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBjb25zdCBjb3ZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY292ZXJcIik7XG4gICAgY292ZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd0NvbmZpcm1hdGlvbkZvcm0oKSB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29uZmlybWF0aW9uRm9ybVwiKTtcbiAgICBmb3JtLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICBjb25zdCBjb3ZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY292ZXJcIik7XG4gICAgY292ZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbn0iLCJjb25zdCBtb2JpbGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vYmlsZVwiKTtcbm1vYmlsZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaWRlYmFyXCIpO1xuICAgIGlmIChzaWRlYmFyLnN0eWxlLmRpc3BsYXkgPT0gXCJmbGV4XCIpIHtcbiAgICAgICAgc2lkZWJhci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc2lkZWJhci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgIG1vYmlsZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxufSk7XG5cbmNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpZGViYXJcIik7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IFwiMTAyNFwiKSB7XG4gICAgICAgIHNpZGViYXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIH1cbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCBcIjEwMjRcIikge1xuICAgICAgICBzaWRlYmFyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgbW9iaWxlQnRuLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICB9XG4gICAvLyAvL2lmIChzaWRlYmFyLnN0eWxlLmRpc3BsYXkgIT0gXCJmbGV4XCIpIHtcbiAgICAgIC8vICBtb2JpbGVCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIC8vfVxufSlcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbmNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCBcIjEwMjRcIikge1xuICAgICAgICBzaWRlYmFyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgbW9iaWxlQnRuLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICB9XG59KVxuXG4vLyBUaGVyZSBtaWdodCBiZSBhIG1vcmUgZWZmaWNpZW50IHdheS4gVGhpcyBzZWVtcyB0byB3b3JrIHRob3VnaC4iLCJpbXBvcnQgeyBzaG93Q29uZmlybWF0aW9uRm9ybSB9IGZyb20gJy4vZm9ybXMuanMnO1xuaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tICcuL3RvZG8uanMnO1xuaW1wb3J0IHsgY2hhbmdlUHJvamVjdEQgfSBmcm9tICcuL3V0aWxpdHkuanMnO1xuXG4vLyBmb3Igbm93IG1haW5seSBqdXN0IHJlbW92ZSBwcm9qZWN0IGJ1dHRvblxuXG4vLyBSUEIgLSByZW1vdmUgcHJvamVjdCBidXR0b25cbmV4cG9ydCBmdW5jdGlvbiBhZGRSUEIoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJcIik7XG4gICAgaWYgKGhlYWRlci5sYXN0Q2hpbGQudGV4dENvbnRlbnQgIT0gXCJYXCIpIHtcbiAgICAgICAgY29uc3QgZGVsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgZGVsQnRuLnRleHRDb250ZW50ID0gXCJYXCI7XG4gICAgICAgIGRlbEJ0bi5jbGFzc0xpc3QuYWRkKFwiUlBCXCIpO1xuICAgICAgICBkZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBzaG93Q29uZmlybWF0aW9uRm9ybSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKGRlbEJ0bik7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUlBCKCkge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyXCIpO1xuICAgIGNvbnN0IHJwYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuUlBCXCIpO1xuICAgIGlmIChycGIpXG4gICAgaGVhZGVyLnJlbW92ZUNoaWxkKHJwYik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkNsaWNraW5nUlBCKCkge1xuICAgIC8vIGZpcnN0IGNoZWNrIGlmIHlvdSBhY3R1YWxseSB3YW50IHRvIGRlbGV0ZVxuICAgIC8vIGdldCBpZCwgZGVsZXRlIG9uIGNvbnRlbnQgYW5kIHRoZW4gc2lkZWJhciB1c2luZyBpZC4gcmV0dXJuIHRvIGhvbWVcbiAgICBjb25zdCBwcm9qZWN0TmFtZTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdGVkXCIpLnRleHRDb250ZW50O1xuICAgIGNvbnN0IHByb2plY3RJRCA9IHByb2plY3RzW3Byb2plY3ROYW1lMl0uaWQ7XG4gICAgZGVsZXRlIHByb2plY3RzW3Byb2plY3ROYW1lMl07XG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3Byb2plY3RJRH1gKVxuICAgIHByb2plY3QucmVtb3ZlKCk7XG4gICAgY29uc29sZS5sb2cocHJvamVjdHMpO1xuXG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjUHIwXCIpO1xuICAgIGhvbWUuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgIGNoYW5nZVByb2plY3REKFwiSE9NRVwiKTtcblxuICAgIC8vIHNhdmUgYmVjYXVzZSB5b3UgcmVtb3ZlZCBhIHByb2plY3RcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xufSIsImltcG9ydCB7IGVyYXNlVGFza0QgfSBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQgeyBzaG93Rm9ybUFuZENvdmVyIH0gZnJvbSAnLi9mb3Jtcy5qcyc7XG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gJy4vdG9kby5qcyc7XG5pbXBvcnQgeyBnZXRUaXRsZSwgZGVsZXRlVGFzayB9IGZyb20gJy4vdXRpbGl0eS5qcydcblxuXG4vLyBcIkNvbnRyb2xcIiBmdW5jdGlvblxuZXhwb3J0IGNvbnN0IHNldHVwVGFza0QgPSAodGFzaykgPT4ge1xuICAgIGRvVUkodGFzayk7XG4gICAgc2V0dXBFZGl0QnV0dG9uKHRhc2spO1xuICAgIHNldHVwRGVsZXRlQnV0dG9uKHRhc2spO1xufTtcblxuY29uc3QgZG9VSSA9ICh3b3JraW5nX3Rhc2spID0+IHtcbiAgICBjb25zdCB0YXNrTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3dvcmtpbmdfdGFzay5pZH1gKTtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IHdvcmtpbmdfdGFzay50aXRsZTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidGFza190aXRsZVwiKTtcbiAgICB0YXNrTm9kZS5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICBjb25zdCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkZXNjLnRleHRDb250ZW50ID0gd29ya2luZ190YXNrLmRlc2NyaXB0aW9uO1xuICAgIGRlc2MuY2xhc3NMaXN0LmFkZChcInRhc2tfZGVzY1wiKTtcbiAgICB0YXNrTm9kZS5hcHBlbmRDaGlsZChkZXNjKTtcblxuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGR1ZURhdGUudGV4dENvbnRlbnQgPSBcIkR1ZSBEYXRlOiBcIiArIHdvcmtpbmdfdGFzay5kdWVEYXRlO1xuICAgIGR1ZURhdGUuY2xhc3NMaXN0LmFkZChcInRhc2tfZHVlRGF0ZVwiKTtcbiAgICB0YXNrTm9kZS5hcHBlbmRDaGlsZChkdWVEYXRlKTtcblxuICAgIHRhc2tOb2RlLmNsYXNzTGlzdC5hZGQoYCR7d29ya2luZ190YXNrLnByaW9yaXR5fWApXG59O1xuXG5cbmNvbnN0IHNldHVwRGVsZXRlQnV0dG9uID0gKHdvcmtpbmdfdGFzaykgPT4ge1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ0bi50ZXh0Q29udGVudCA9IFwiWFwiO1xuXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7d29ya2luZ190YXNrLmlkfSAudGFza0J1dHRvbnNgKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoYnRuKTtcblxuICAgIC8vIHdlIG5lZWQgdG8gb2J0YWluIHRhc2sgb2JqZWN0IGZyb20gdGhlIGJ1dHRvbiBpdHNlbGZcbiAgICAvLyBiZWNhdXNlIGlmIHdlIHVzZSBhbnkgdmFyaWFibGUgaXQgd29uJ3QgZGVsZXRlIHByb3Blcmx5XG4gICAgLy8gdGhpcyBpcyBkb25lIHZpYSBtYXRjaGluZyBidG4gY2xhc3MgbmFtZSB3aGljaCBpcyBlcXVhbCB0byB0aGUgaWRcbiAgICAvLyBvZiB0aGUgdGFzayB0aGF0IHdlIGFyZSBzZWVraW5nIGluIGEgcHJvamVjdHMgb2JqZWN0XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgY29uc3QgdGFza0lEID0gWy4uLmUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5jbGFzc0xpc3RdWzBdO1xuICAgICAgICBjb25zdCB0aXRsZSA9IGdldFRpdGxlKHRhc2tJRCk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWxlY3RlZFwiKS50ZXh0Q29udGVudDtcbiAgICAgICAgZGVsZXRlVGFzayhjdXJyZW50UHJvamVjdCwgcHJvamVjdHNbY3VycmVudFByb2plY3RdLnRhc2tzW3RpdGxlXSk7XG4gICAgICAgIGVyYXNlVGFza0QodGFza0lEKTtcbiAgICB9KTtcbn07XG5cbmNvbnN0IHNldHVwRWRpdEJ1dHRvbiA9ICh3b3JraW5nX3Rhc2spID0+IHtcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidG4udGV4dENvbnRlbnQgPSBcIkVkaXRcIjtcblxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJ0YXNrQnV0dG9uc1wiKTtcblxuICAgIGNvbnN0IHRhc2tOb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7d29ya2luZ190YXNrLmlkfWApO1xuICAgIHRhc2tOb2RlLmFwcGVuZENoaWxkKGRpdik7XG4gICAgZGl2LmFwcGVuZENoaWxkKGJ0bik7XG5cbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBzaG93Rm9ybUFuZENvdmVyKCk7XG4gICAgICAgIHNldHVwRWRpdEZvcm0oXG4gICAgICAgICAgICBnZXRUaXRsZShbLi4uZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNsYXNzTGlzdF1bMF0pKTtcbiAgICB9KTtcbn07XG5cbmZ1bmN0aW9uIHNldHVwRWRpdEZvcm0odGl0bGUpIHtcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VsZWN0ZWRcIikudGV4dENvbnRlbnQ7XG4gICAgLy8gdGFzayA9IFRIRSBPTkUgQkVJTkcgQ0xJQ0tFRFxuICAgIGNvbnN0IHRhc2sgPSBwcm9qZWN0c1tjdXJyZW50UHJvamVjdF0udGFza3NbdGl0bGVdO1xuXG4gICAgLy8gZmlsbCB0aGUgZm9ybSBjb3JyZWN0bHlcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlXCIpLnZhbHVlID0gdGFzay50aXRsZTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uXCIpLnZhbHVlID0gdGFzay5kZXNjcmlwdGlvbjtcbiAgICBsZXQgYXJyID0gdGFzay5kdWVEYXRlLnNwbGl0KFwiLVwiKTtcbiAgICBhcnIgPSBbYXJyWzJdLCBhcnJbMF0sIGFyclsxXV0uam9pbihcIi1cIik7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWVEYXRlXCIpLnZhbHVlID0gYXJyO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJpb3JpdHlcIikudmFsdWUgPSB0YXNrLnByaW9yaXR5O1xuXG4gICAgLy8gZGVsZXRlLCBhbmQgbGV0IHRoZSBncmVlbiBidXR0b24gYnVpbGQgaXQgZm9yIHlvdSwgbm8gaW4gdGhpcyBjYXNlXG4gICAgLy8gc2hvdWxkIGhhdmUgYSBzcGVjaWFsIGZ1bmN0aW9uXG4gICAgZXJhc2VUYXNrRChwcm9qZWN0c1tjdXJyZW50UHJvamVjdF0udGFza3NbdGl0bGVdLmlkKVxuICAgIGRlbGV0ZSBwcm9qZWN0c1tjdXJyZW50UHJvamVjdF0udGFza3NbdGl0bGVdO1xuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcblxuICAgIGNvbnN0IHJidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlZFwiKTtcbiAgICByYnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuICAgIGNvbnN0IGdidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdyZWVuXCIpO1xuICAgIGdidXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ5ZWxsb3dcIjtcbiAgICBnYnV0dG9uLnRleHRDb250ZW50ID0gXCJFZGl0XCJcbn0iLCJpbXBvcnQgeyBleHBpcmVDaGVjayB9IGZyb20gJy4vZGF0ZS5qcyc7XG5cbmZ1bmN0aW9uIHN0b3JhZ2VBdmFpbGFibGUodHlwZSkge1xuICAgIGxldCBzdG9yYWdlO1xuICAgIHRyeSB7XG4gICAgICAgIHN0b3JhZ2UgPSB3aW5kb3dbdHlwZV07XG4gICAgICAgIGNvbnN0IHggPSAnX19zdG9yYWdlX3Rlc3RfXyc7XG4gICAgICAgIHN0b3JhZ2Uuc2V0SXRlbSh4LCB4KTtcbiAgICAgICAgc3RvcmFnZS5yZW1vdmVJdGVtKHgpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGUgaW5zdGFuY2VvZiBET01FeGNlcHRpb24gJiYgKFxuICAgICAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICAgICAgZS5jb2RlID09PSAyMiB8fFxuICAgICAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICAgICAgZS5jb2RlID09PSAxMDE0IHx8XG4gICAgICAgICAgICAvLyB0ZXN0IG5hbWUgZmllbGQgdG9vLCBiZWNhdXNlIGNvZGUgbWlnaHQgbm90IGJlIHByZXNlbnRcbiAgICAgICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgICAgICAgIGUubmFtZSA9PT0gJ1F1b3RhRXhjZWVkZWRFcnJvcicgfHxcbiAgICAgICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgICAgIGUubmFtZSA9PT0gJ05TX0VSUk9SX0RPTV9RVU9UQV9SRUFDSEVEJykgJiZcbiAgICAgICAgICAgIC8vIGFja25vd2xlZGdlIFF1b3RhRXhjZWVkZWRFcnJvciBvbmx5IGlmIHRoZXJlJ3Mgc29tZXRoaW5nIGFscmVhZHkgc3RvcmVkXG4gICAgICAgICAgICAoc3RvcmFnZSAmJiBzdG9yYWdlLmxlbmd0aCAhPT0gMCk7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgcHJvamVjdHMgPSB7XG4gICAgSE9NRToge1xuICAgICAgICB0YXNrczoge1xuICAgICAgICB9LFxuICAgICAgICBpZDogXCJQcjBcIlxuICAgIH0sXG59O1xuXG5pZiAoc3RvcmFnZUF2YWlsYWJsZSkge1xuICAgIHZhciByZXRyaWV2ZWRPYmplY3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKTtcbiAgICByZXRyaWV2ZWRPYmplY3QgPSBKU09OLnBhcnNlKHJldHJpZXZlZE9iamVjdCk7XG4gICAgZm9yIChsZXQgZW0gaW4gcmV0cmlldmVkT2JqZWN0KSB7XG4gICAgICAgIHByb2plY3RzW2VtXSA9IHJldHJpZXZlZE9iamVjdFtlbV07XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHByb2plY3RzKTtcbiAgICAvL3Byb2plY3RzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJyk7XG59XG5cbmV4cG9ydCBjb25zdCB0b2RvID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGlkKSA9PiB7XG4gICAgcmV0dXJuIHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgaWQgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBwcm9qZWN0RmFjdG9yeSA9ICh0aXRsZS8qLCBkdWVEYXRlKi8sIGlkKSA9PiB7XG4gICAgcmV0dXJuIHsgdGl0bGUvKiwgZHVlRGF0ZSovLCBpZCB9O1xufTtcblxuLy8gdGVtcCIsImltcG9ydCB7IGVyYXNlVGFza3NELCBhZGRUYXNrRCwgYWRkUHJvamVjdEQgfSBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQgeyBzZXR1cFRhc2tEIH0gZnJvbSAnLi9zZXR1cFRhc2suanMnO1xuaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tICcuL3RvZG8uanMnO1xuaW1wb3J0IHsgYWRkUHJvamVjdExpc3RlbmVyIH0gZnJvbSAnLi9ldmVudExpc3RlbmVycy5qcyc7XG5pbXBvcnQgeyBhZGRSUEIsIHJlbW92ZVJQQiB9IGZyb20gJy4vc2V0dXBQcm9qZWN0JztcbmltcG9ydCB7IGV4cGlyZUNoZWNrIH0gZnJvbSAnLi9kYXRlLmpzJ1xuXG5cbi8vIGZlbHQgbGlrZSB0aGlzIGRlc2VydmVzIGEgc2VwZXJhdGUgbW9kdWxlLCBzaW5jZSBpdCdzIG5vdCByZWFsbHkgRE9NIG1hbmlwLlxuZXhwb3J0IGNvbnN0IGNoYW5nZVByb2plY3REID0gKHByb2plY3ROYW1lKSA9PiB7XG4gICAgZXJhc2VUYXNrc0QoKTtcbiAgICBpZiAocHJvamVjdHNbcHJvamVjdE5hbWVdLnRhc2tzICE9IHt9KSB7XG4gICAgICAgIGZvciAobGV0IGVtIGluIHByb2plY3RzW3Byb2plY3ROYW1lXS50YXNrcykge1xuICAgICAgICAgICAgYWRkVGFza0QocHJvamVjdHNbcHJvamVjdE5hbWVdLnRhc2tzW2VtXSk7XG4gICAgICAgICAgICBzZXR1cFRhc2tEKHByb2plY3RzW3Byb2plY3ROYW1lXS50YXNrc1tlbV0sIHByb2plY3ROYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAocHJvamVjdE5hbWUgIT0gXCJIT01FXCIpIHtcbiAgICAgICAgYWRkUlBCKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmVtb3ZlUlBCKCk7XG4gICAgfVxufTtcblxuXG4vLyBsb2FkIGFsbCBwcm9qZWN0cyBhbmQgdGFza3MgZnJvbSB0aGUgbG9jYWwgc3RvcmFnZVxuZXhwb3J0IGNvbnN0IGxvYWRGcm9tU3RvcmFnZSA9ICgpID0+IHtcbiAgICBmb3IgKGxldCBwcm9qZWN0IGluIHByb2plY3RzKSB7XG4gICAgICAgIGlmIChwcm9qZWN0ICE9IFwiSE9NRVwiKSB7XG4gICAgICAgICAgICBhZGRQcm9qZWN0RChwcm9qZWN0c1twcm9qZWN0XSwgcHJvamVjdHNbcHJvamVjdF0uaWQpO1xuICAgICAgICAgICAgYWRkUHJvamVjdExpc3RlbmVyKHByb2plY3RzW3Byb2plY3RdLmlkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZvciAobGV0IHRhc2sgaW4gcHJvamVjdHMuSE9NRS50YXNrcykge1xuICAgICAgICBhZGRUYXNrRChwcm9qZWN0cy5IT01FLnRhc2tzW3Rhc2tdKTtcbiAgICAgICAgc2V0dXBUYXNrRChwcm9qZWN0cy5IT01FLnRhc2tzW3Rhc2tdLCBcIkhPTUVcIik7XG4gICAgfVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrRHVlRGF0ZSgpIHtcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VsZWN0ZWRcIikudGV4dENvbnRlbnQ7XG4gICAgZm9yIChsZXQgZW0gaW4gcHJvamVjdHNbY3VycmVudFByb2plY3RdLnRhc2tzKSB7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3Byb2plY3RzW2N1cnJlbnRQcm9qZWN0XS50YXNrc1tlbV0uaWRcbiAgICAgICAgICAgIH1gKTtcbiAgICAgICAgaWYgKGV4cGlyZUNoZWNrKHByb2plY3RzW2N1cnJlbnRQcm9qZWN0XS50YXNrc1tlbV0pKSB7XG4gICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChcImV4cGlyZWRcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkaXYuY2xhc3NMaXN0LnJlbW92ZShcImV4cGlyZWRcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLypcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICAgIGlmIChwcm9qX2V4cGlyZUNoZWNrKCkpIHtcbiAgICAgICAgY29udGVudC5zdHlsZS5ib3JkZXJUb3AgPSBcIjF2aCByZWQgc29saWRcIjtcbiAgICAgICAgY29udGVudC5zdHlsZS5ib3JkZXJMZWZ0ID0gXCIxdmggcmVkIHNvbGlkXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29udGVudC5zdHlsZS5ib3JkZXIgPSBcIm5vbmVcIjtcbiAgICB9ICovXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUaXRsZSh0YXNrSUQpIHtcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VsZWN0ZWRcIikudGV4dENvbnRlbnQ7XG4gICAgbGV0IHRpdGxlO1xuICAgIGZvciAobGV0IGVtIGluIHByb2plY3RzW2N1cnJlbnRQcm9qZWN0XS50YXNrcykge1xuICAgICAgICBpZiAocHJvamVjdHNbY3VycmVudFByb2plY3RdLnRhc2tzW2VtXS5pZCA9PSB0YXNrSUQpIHtcbiAgICAgICAgICAgIHRpdGxlID0gcHJvamVjdHNbY3VycmVudFByb2plY3RdLnRhc2tzW2VtXS50aXRsZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGl0bGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVUYXNrKHByb2plY3QsIHRhc2spIHtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0KTtcbiAgICBkZWxldGUgcHJvamVjdHNbcHJvamVjdF0udGFza3NbdGFzay50aXRsZV07XG4gICAgLy8gd2UgYXJlIGFjdHVhbGx5IGRlbGV0aW5nLCBub3QganVzdCBlcmFzaW5nIGZyb20gc2NyZWVuISEhXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCAnLi9ldmVudExpc3RlbmVycyc7XG5pbXBvcnQgJy4vZGF0ZSc7XG5pbXBvcnQgJy4vbW9iaWxlJztcbmltcG9ydCB7IGxvYWRGcm9tU3RvcmFnZSB9IGZyb20gJy4vdXRpbGl0eSc7XG5cbmxvYWRGcm9tU3RvcmFnZSgpO1xuLypcbiAgICBUT0RPOlxuICAgIC0gQ29uZmlndXJlIGRhdGVzIHByb3Blcmx5XG4gICAgICAgIFR3byB0eXBlcyBvZiB0YXNrczpcbiAgICAgICAgICAgIDEuIFNvbWV0aGluZyB0aGF0IG5lZWRzIHRvIGJlIGRvbmUgb24gYSBzcGVjaWZpYyBkYXkuIEl0IGNhbiBoYXZlIGFcbiAgICAgICAgICAgICAgICBkdWVEYXRlL2R1ZUhvdXIsIGJ1dCBpdCdzIG9wdGlvbmFsLiBJdCBvbmx5IHNob3dzIG9uIG9uZSBkYXlcbiAgICAgICAgICAgIDIuIFNvbWV0aGluZyB0aGF0IG5lZWRzIHRvIGJlIGRvbmUgdGlsbCBhIHNwZWNpZmllZCBkdWVEYXRlLiBTbyBpdFxuICAgICAgICAgICAgICAgIHNob3dzIGV2ZXJ5IGRheSB1bnRpbCB0aGUgZHVlRGF0ZS4gRXhwaXJlZCBzZWN0aW9uIG1pZ2h0IGJlIFxuICAgICAgICAgICAgICAgIG9mIHVzZS5cblxuICAgICAgICAgICAgSWRlYTpcbiAgICAgICAgICAgIEFsd2F5cyBzaG93IGFsbCB0aGF0IGNhbiBiZSBzaG93bi4gSWYgaXQgaGFwcGVucyB0aGF0IG9uZSBvZiB0aGVtXG4gICAgICAgICAgICBleHBpcmVkIHNpbXBseSBuZWRvdGUgc28gdXNpbmcgcmVkIGJvcmRlciBvciAoZXhwaXJlZCkgdGFnLlxuICAgICAgICAgICAgSXQgY2FuIGJlIHNob3duIGlmIGl0cyBzdGFydCBkYXkgaXMgdG9kYXkgb3IgZWFybGllci4gLS8vLy1cblxuXG5cbiAgICAtIEFkZCBhIGZvcm0gZm9yIHVzZXIgaW5wdXQgLS8vLy1cbiAgICAtIFRhc2sgY2hhbmdlczpcbiAgICAgICAgICAgIDEpIFN0eWxlIGNoYW5nZXM6IFJlZG8gdGFzayBzcXVhcmVzIC0vLy8tLCBtYXliZSBub3RcbiAgICAgICAgICAgIDIpIFRhc2sgZGVzY3JpcHRpb24vZWRpdCBzeXN0ZW0gLS8vLy1cbiAgICAgICAgICAgIDMpIE1ha2UgcHJpb3JpdGVzIG1hdHRlciwgYm9yZGVyIGNvbG9yIC0vLy8tXG4gICAgLSBGSVggcmVtb3ZlIGJ1dHRvbiwgbmFtZWx5IHdoZW4geW91IGRvbid0IGlucHV0IGFueXRoaW5nIGluIHRoZSBmb3JtXG4gICAgICAgIG11bHRpcGxlIHRhc2tzIGFyZSBtYWRlIGV2ZW50IHRob3VnaCB0aGVyZSBpcyBvbmx5IG9uZSBzYXZlZCBpbiB0aGUgXG4gICAgICAgIG9iamVjdC4gaXQgc2hvd3MgY29ycmVjdGx5IGFmdGVyIHJlZnJlc2ggLS8vLy1cbiAgICAtIEZJWDogcHJldmVudCBmcm9tIGNoYW5naW5nIHByb2plY3RzIHdoZW4gdGhlIGZvcm0gaXMgb3BlbmVkLFxuICAgICAgICBjb25zaWRlciBhZGRpbmcgYSBjb3ZlciBqdXN0IGxpa2UgaW4gdGhlIGxpYnJhcnkgcHJvamVjdCAtLy8vLVxuICAgIC0gRklYOiBwcm9qZWN0L3Nob3J0Y3V0IG5hbWUgbGV0dGVycyBnb2luZyB0byBuZXcgbGluZSwgaW5zdGVhZCBvbmx5IHdvcmRzXG4gICAgICAgIC0vLy8tIGJ1dCBjYW4ndCBmaXggbG9uZyBuYW1lcywgbWF5YmUgZmluZCBhIHdheSB0byBhZGQgXCItXCIgYXQgZW5kIHdoZW5cbiAgICAgICAgYnJlYWtpbmdcbiAgICAtIEFkZCBMb2NhbCBzdG9yYWdlIC0vLy8tXG4gICAgLSBBZGQgYSBjb25maXJtYXRpb24gZm9ybSB3aGVuIGF0dGVtcHRpbmcgdG8gZGVsZXRlIGEgcHJvamVjdCAtLy8vLVxuICAgIC0gQWRkIG1lZGlhIHF1ZXJpZXNcbiAgICAtIGNoYW5nZSBwcm9qZWN0SWQgYW5kIGlkIHRvIGNhbGN1bGF0ZSBpZCBiYXNlZCBvbiB3aGF0IGlzIHRoZSBiaWdnZXN0IGlkXG4gICAgICAgIHByZXNlbnQgb24gdGhlIGN1cnJlbnQgcHJvamVjdC9wcm9qZWN0cyBhbmQgdGhlbiBhZGQgMSwgdGhpcyB3YXlcbiAgICAgICAgaXQgaXMgbm90IGJhc2VkIG9uIGxlbmd0aCBhbmQgZHVwZSBidWdzIGRvIG5vdCBhcHBlYXIgLS8vLy1cbiAgICAtIEZpeCBkYXRlcyBmb3IgZWRpdGluZyEgLS8vLy1cbiAgICAtIERvIHNvbWV0aGluZyB3aXRoIHByb2plY3QgZGF0ZXMsIG1heWJlIGNvbnRlbnQgYm9yZGVyIHRvIHNpZ25pZnkgdGhlIGxhdGVcbiAgICAgICAgcHJvamVjdCAtLy8vLVxuICAgIC0gTWFrZSBhIHJlZnJlc2ggZnVuY3Rpb24sIHRoYXQgcmVsb2FkcywgbWF5YmUganVzdCBjaGFuZ2VQcm9qZWN0IHNvIHlvdVxuICAgICAgICBkb24ndCBoYXZlIHRvIGxvY2F0aW9uLnJlbG9hZCgpXG4gICAgLSBUZXh0QXJlYSBleHBhbmRpbmcgRDogLS8vLy1cbiAgICAtIGNvbnNpZGVyIG1vcmUgY29scyBhbmQgcm93IGZvciBUZXh0QXJlYSAtLy8vLVxuICAgIC0gUmV0aGluayB0aGUgbmVlZCBmb3IgZHVlRGF0ZSBpbiBwcm9qZWN0LCBJIHRoaW5rIG5vdCBuZWVkZWQhISAtLy8vLVxuICAgIC0gcHJldmVudCB0aXRsZSBuYW1lIGR1cGxpY2F0aW9uIG9uIGFkZGluZyB0YXNrLCB0aGUgZm9ybSBnb2VzIGF3YXkgZm9yIHNvbWVcbiAgICAgICAgcmVhc29uIC0vLy8tXG4gICAgLSBnaG9zdCB0YXNrIGFwcGVhcmluZzogYnVnIC0vLy8tXG4gICAgLSBtYWtlIHJlZCBidXR0b24gcmVjb3ZlciB0aGUgdGFzaywgeW91IGhhdmUgYWxsIHRoZSBkYXRhIG5lZWRlZCBpbiB0aGUgZm9ybVxuICAgICAgICAsIGluc3RlYWQgcmV3b3JrZWQgdG8gaW5jbHVkZSBvbmx5IGVkaXQgYnV0dG9uIC0vLy8tXG4gICAgLSBhZGQga2V5YmluZHMsIGVzcGVjaWFsbHkgZW50ZXIgaW5zdGVhZCBvZiBtb3VzZSBjbGljayAtLy8vLVxuICAgIC0gQ0xFQU4gQ09ERSEhISEhIHlvdSBrbm93IGN1cnJlbnRQcm9qZWN0IHJlcGVhdCBhbGwgdGhlIHRpbWUgYW5kIG90aGVyIGphenpcbiAgICAtIGV4cGVyaW1lbnQgd2l0aCB3b3JraW5nX3Rhc2ssIHRyeSB0byByZW1vdmUgLS8vLy1cbiAgICAtIHJld29yayBtb2R1bGVzLCBtYXliZSBubyBuZWVkIHRvIGdlbmVyYWxpemUgZXZlcnl0aGluZywgZXhwZXJpbWVudFxuICAgIC0gY2xlYW5lciBjc3MsIG1vcmUgY29tbWVudHMsIGNvbnNpZGVyIGFuaW1hdGlvbnMvdHJhbnNmb3JtYXRpb25zIGZvciBcbiAgICAgICAgY29uc2lkZXIgcmVtYWtpbmcgY3NzIGdyb3VuZCB1cCwgbWFrZSBpdCB3b3JrIG9uIG1vYmlsZSBmaXJzdFxuICAgIC0gZGVsZXRlIHRoZSB0YXNrIG9ubHkgYWZ0ZXIgdGhlIGVkaXQgZm9ybSBpcyBzdWJtaXR0ZWQsIHBvdGVudGlhbGx5IHVzZVxuICAgIGFzeW5jL3dhaXQgZnVuY3Rpb25cbiAgICAtIHJld29yayBtb2JpbGUgZGVzaWduLCBwZXJoYXBzIGFkZFRhc2sgb24gdG9wIGFuZCBjYWxhbmRlciBvbiBib3R0b20sXG4gICAgbWlnaHQgZmVlbCBtb3JlIG5hdHVyYWwgLS8vLy1cblxuICAgIFBvdGVudGlhbCBidWdzOlxuICAgICAgICBTbWFsbCBibGFuayByZWN0YW5nbGUgYXBwZWFyaW5nIHNvbWV0aW1lcyB3aGVuIHJlc2l6aW5nLiBSZWZyZXNoIGZpeGVzLlxuKi9cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=