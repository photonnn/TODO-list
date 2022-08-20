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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    --neutral: #f5f5f5;\n    --violet: white;\n    --stone: #6e6279;\n    --zinc: #3f3f46;\n    --hover: rgb(69, 31, 83);\n\n}\n\nbody,\nhtml {\n    height: 100%;\n    width: 100%;\n}\n\nbody {\n    display: flex;\n}\n\n\n#sidebar {\n    flex: 1;\n    background-color: var(--zinc);\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    width: 100%;\n}\n\n#sidebar>div {\n    font-size: 6vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.home {\n    flex: 1;\n    border-bottom: 5px black solid;\n    background-color: var(--stone);\n    user-select: none;\n}\n\n#projects {\n    flex: 7;\n}\n\n.home:hover {\n    background-color: var(--hover);\n    cursor: pointer;\n}\n\n#content {\n    flex: 3;\n    background-color: grey;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    flex-direction: column-reverse;\n    height: 100%;\n    width: 100%;\n}\n\n\n.expand {\n    display: flex;\n    flex-direction: column;\n}\n\n.expand>div:first-child,\n#addProject {\n    flex: 1;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.expand>* {\n    width: 100%;\n}\n\n#addProject {\n    border-top: 3px solid black;\n    background-color: var(--stone);\n    user-select: none;\n}\n\n#addProject:hover {\n    cursor: pointer;\n    background-color: var(--hover);\n}\n\n.expand>div:first-child {\n    border-bottom: 3px solid black;\n}\n\n\n.expand .shortcut {\n    background-color: var(--stone);\n    padding: 5%;\n    border-bottom: 3px solid black;\n    word-break: break-word;\n    user-select: none;\n    cursor: pointer;\n    display: flex;\n    justify-content: space-between;\n}\n\n.expand .shortcuts {\n    overflow-y: auto;\n    max-height: 70vh;\n}\n\n.shortcut:hover {\n    background-color: var(--hover);\n    cursor: pointer;\n}\n\n.expand>div {\n    flex: 5;\n    text-align: center;\n}\n\n#tasks {\n    flex: 1;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(35vh, 1fr));\n    grid-gap: 2vh;\n    overflow-y: auto;\n    width: 100%;\n    padding: 3%;\n}\n\n#tasks>div {\n    height: 35vh;\n    background: rgb(0, 147, 223);\n    background: radial-gradient(circle, rgba(0, 147, 223, 1) 0%,\n            rgba(211, 239, 242, 1) 49%, rgba(17, 16, 16, 1) 100%);\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    border-radius: 10%;\n}\n\n#tasks>div>div {\n    word-break: break-word;\n    font-size: 3vh;\n}\n\n.Must {\n    background: rgb(232, 5, 5);\n    background: radial-gradient(circle, rgba(232, 5, 5, 1) 0%,\n            rgba(213, 144, 144, 1) 49%, rgba(17, 16, 16, 1) 100%) !important;\n}\n\n.Necessary {\n    background: rgb(232, 107, 5);\n    background: radial-gradient(circle, rgba(232, 107, 5, 1) 0%,\n            rgba(235, 200, 163, 1) 49%, rgba(17, 16, 16, 1) 100%) !important;\n}\n\n.Maybe {\n    background: rgb(193, 232, 5);\n    background: radial-gradient(circle, rgba(193, 232, 5, 1) 0%,\n            rgba(224, 235, 163, 1) 49%, rgba(17, 16, 16, 1) 100%) !important;\n}\n\n#content>*:not(#tasks) {\n    display: flex;\n    justify-content: center;\n    width: 100%;\n}\n\n.header {\n    font-size: 40px;\n}\n\n.header .RPB {\n    background-color: red;\n    position: absolute;\n    height: max(55px, 7vh);\n    width: max(55px, 7vh);\n    font-size: max(40px, 3rem);\n    right: 0;\n    top: 0;\n    color: rgb(85, 3, 19);\n}\n\n#addTask {\n    display: flex;\n    align-items: center;\n    font-size: max(40px, 3rem);\n    color: white;\n    background-color: black;\n    user-select: none;\n    height: max(55px, 7vh);\n}\n\n#addTask:hover {\n    opacity: 0.5;\n    cursor: pointer;\n}\n\n#addTask:active {\n    opacity: 0.2;\n}\n\n.selected {\n    border-right: 10px groove var(--hover);\n}\n\n#date {\n    width: 40vh !important;\n    font-size: 5vh;\n    border: none;\n    background: grey;\n}\n\n.calLeft {\n    margin-right: 2vh;\n}\n\n.calRight {\n    margin-left: 2vh;\n}\n\n.navigatecal {\n    font-size: 8vh;\n    cursor: pointer;\n    user-select: none;\n}\n\n#taskForm {\n    width: 65vh;\n    height: 65vh;\n    left: calc(50% - 10vh);\n    top: calc(50% - 30vh);\n    padding-left: 5%;\n    padding-right: 5%;\n    font-size: 3vh;\n}\n\n#projectForm {\n    width: 55vh;\n    height: 25vh;\n    left: calc(50% - 10vh);\n    top: calc(50% - 30vh);\n    padding: 0 2% 0 2%;\n    font-size: 3vh;\n}\n\n#confirmationForm {\n    width: 50vh;\n    height: 35vh;\n    left: calc(50% - 10vh);\n    top: calc(50% - 30vh);\n    padding: 0 3% 0 3%;\n    font-size: 3vh;\n}\n\n#projectForm,\n#taskForm,\n#confirmationForm {\n    position: absolute;\n    z-index: 2;\n    background-color: var(--stone);\n    display: none;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: flex-start;\n    border: 5px var(--hover) solid;\n}\n\n.cover {\n    position: fixed;\n    top: 0;\n    left: 0;\n    background: rgba(0, 0, 0, 0.6);\n    z-index: 1;\n    width: 100%;\n    height: 100%;\n    display: none;\n}\n\n\n#taskForm div,\n#projectForm div {\n    display: flex;\n}\n\n#taskForm label,\n#projectForm label {\n    flex: 1;\n    min-width: 20vh;\n    font-size: 3vh;\n}\n\n#taskForm input,\n#taskForm select {\n    flex: 6;\n    min-width: 30vh;\n}\n\n#description,\n#taskForm input,\n#priority,\n#proj_title,\n#proj_dueDate {\n    font-size: 2vh;\n    padding: 1%;\n}\n\n#description {\n    height: 20vh;\n    max-width: 30vh;\n    resize: none;\n}\n\n.redBtn {\n    background-color: red;\n    margin-right: 25%;\n}\n\n.greenBtn {\n    background-color: rgb(47, 255, 47);\n}\n\n.redBtn,\n.greenBtn {\n    font-size: 3vh;\n    padding: 10%;\n    width: 15vh;\n    height: 0.5vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.fbtn {\n    display: flex;\n    justify-content: center;\n    width: 100%;\n}\n\n.expired {\n    border: 5px solid red;\n}\n\n\n.task_desc {\n    overflow-y: auto;\n    flex: 6;\n    font-size: 1.5rem;\n}\n\n.task_dueDate {\n    flex: 1;\n}\n\n.task_title,\n.task_desc,\n.task_dueDate {\n    border-bottom: 1px solid rgba(0, 0, 0, 0.212);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n}\n\n.task_title {\n    flex: 1;\n    padding: 0 6%;\n}\n\n.taskButtons>button {\n    font-size: 3vh;\n    color: white;\n    background-color: black;\n    opacity: 0.5;\n}\n\n.mobile {\n    display: none;\n}\n\n\n\n@media only screen and (max-width: 1100px) {\n\n    body,\n    html {\n        height: 100%;\n    }\n\n    .mobile {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        position: absolute;\n        z-index: 1;\n        left: 0;\n        top: 0;\n        width: 55px;\n        height: 55px;\n        color: black;\n        overflow: hidden;\n        background-color: black;\n        border-right: 1px solid white;\n    }\n\n    .mobile:hover {\n        cursor: pointer;\n    }\n\n    #sidebar {\n        position: absolute;\n        z-index: 1;\n        left: 0;\n        display: none;\n        max-height: 100vh;\n        max-width: min(75%, 300px);\n    }\n\n    #projectForm,\n    #taskForm,\n    #confirmationForm {\n        position: absolute;\n        margin-left: auto;\n        margin-right: auto;\n        left: 0;\n        right: 0;\n        text-align: center;\n        max-width: 100%;\n        width: 400px;\n        height: 200px;\n    }\n\n    #taskForm, #projectForm {\n        position: absolute;\n        left: 0;\n        top: 0;\n        width: 100%;\n        min-height: 100%;\n        height: fit-content;\n        overflow-y: auto;\n        text-align: center;\n        align-items: center;\n    }\n\n    #projectForm label {\n        max-height: 50px;\n    }\n\n    #projectForm>div {\n        width: 100%;\n        height: 100%;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n    }\n\n    #projectForm>div>* {\n        font-size: 2rem;\n        width: 90%;\n    }\n\n    #taskForm label {\n        font-size: 1.5rem\n    }\n\n    #taskForm #title,\n    #taskForm #dueDate {\n        font-size: 1rem;\n        height: 50px;\n        width: 90%;\n    }\n\n    #description {\n        width: 90%;\n        max-width: none;\n        font-size: 1rem;\n        min-height: 200px;\n    }\n\n    #priority {\n        font-size: 1rem;\n        width: 90%;\n        justify-content: center;\n    }\n\n    #taskForm>div {\n        position: relative;\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        margin-bottom: 20px;\n    }\n\n    .fbtn {\n        display: flex;\n        flex-direction: row !important;\n    }\n\n    .fbtn>* {\n        font-size: 1.7rem;\n    }\n\n    .RPB {\n        font-size: 40px;\n        z-index: 1;\n    }\n\n    #date {\n        max-width: 250px;\n        font-size: 2rem;\n    }\n\n    #addTask {\n        margin: 0 100px;\n    }\n\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    --neutral: #f5f5f5;\n    --violet: white;\n    --stone: #6e6279;\n    --zinc: #3f3f46;\n    --hover: rgb(69, 31, 83);\n\n}\n\nbody,\nhtml {\n    height: 100%;\n    width: 100%;\n}\n\nbody {\n    display: flex;\n}\n\n\n#sidebar {\n    flex: 1;\n    background-color: var(--zinc);\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    width: 100%;\n}\n\n#sidebar>div {\n    font-size: 6vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.home {\n    flex: 1;\n    border-bottom: 5px black solid;\n    background-color: var(--stone);\n    user-select: none;\n}\n\n#projects {\n    flex: 7;\n}\n\n.home:hover {\n    background-color: var(--hover);\n    cursor: pointer;\n}\n\n#content {\n    flex: 3;\n    background-color: grey;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    flex-direction: column-reverse;\n    height: 100%;\n    width: 100%;\n}\n\n\n.expand {\n    display: flex;\n    flex-direction: column;\n}\n\n.expand>div:first-child,\n#addProject {\n    flex: 1;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.expand>* {\n    width: 100%;\n}\n\n#addProject {\n    border-top: 3px solid black;\n    background-color: var(--stone);\n    user-select: none;\n}\n\n#addProject:hover {\n    cursor: pointer;\n    background-color: var(--hover);\n}\n\n.expand>div:first-child {\n    border-bottom: 3px solid black;\n}\n\n\n.expand .shortcut {\n    background-color: var(--stone);\n    padding: 5%;\n    border-bottom: 3px solid black;\n    word-break: break-word;\n    user-select: none;\n    cursor: pointer;\n    display: flex;\n    justify-content: space-between;\n}\n\n.expand .shortcuts {\n    overflow-y: auto;\n    max-height: 70vh;\n}\n\n.shortcut:hover {\n    background-color: var(--hover);\n    cursor: pointer;\n}\n\n.expand>div {\n    flex: 5;\n    text-align: center;\n}\n\n#tasks {\n    flex: 1;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(35vh, 1fr));\n    grid-gap: 2vh;\n    overflow-y: auto;\n    width: 100%;\n    padding: 3%;\n}\n\n#tasks>div {\n    height: 35vh;\n    background: rgb(0, 147, 223);\n    background: radial-gradient(circle, rgba(0, 147, 223, 1) 0%,\n            rgba(211, 239, 242, 1) 49%, rgba(17, 16, 16, 1) 100%);\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    border-radius: 10%;\n}\n\n#tasks>div>div {\n    word-break: break-word;\n    font-size: 3vh;\n}\n\n.Must {\n    background: rgb(232, 5, 5);\n    background: radial-gradient(circle, rgba(232, 5, 5, 1) 0%,\n            rgba(213, 144, 144, 1) 49%, rgba(17, 16, 16, 1) 100%) !important;\n}\n\n.Necessary {\n    background: rgb(232, 107, 5);\n    background: radial-gradient(circle, rgba(232, 107, 5, 1) 0%,\n            rgba(235, 200, 163, 1) 49%, rgba(17, 16, 16, 1) 100%) !important;\n}\n\n.Maybe {\n    background: rgb(193, 232, 5);\n    background: radial-gradient(circle, rgba(193, 232, 5, 1) 0%,\n            rgba(224, 235, 163, 1) 49%, rgba(17, 16, 16, 1) 100%) !important;\n}\n\n#content>*:not(#tasks) {\n    display: flex;\n    justify-content: center;\n    width: 100%;\n}\n\n.header {\n    font-size: 40px;\n}\n\n.header .RPB {\n    background-color: red;\n    position: absolute;\n    height: max(55px, 7vh);\n    width: max(55px, 7vh);\n    font-size: max(40px, 3rem);\n    right: 0;\n    top: 0;\n    color: rgb(85, 3, 19);\n}\n\n#addTask {\n    display: flex;\n    align-items: center;\n    font-size: max(40px, 3rem);\n    color: white;\n    background-color: black;\n    user-select: none;\n    height: max(55px, 7vh);\n}\n\n#addTask:hover {\n    opacity: 0.5;\n    cursor: pointer;\n}\n\n#addTask:active {\n    opacity: 0.2;\n}\n\n.selected {\n    border-right: 10px groove var(--hover);\n}\n\n#date {\n    width: 40vh !important;\n    font-size: 5vh;\n    border: none;\n    background: grey;\n}\n\n.calLeft {\n    margin-right: 2vh;\n}\n\n.calRight {\n    margin-left: 2vh;\n}\n\n.navigatecal {\n    font-size: 8vh;\n    cursor: pointer;\n    user-select: none;\n}\n\n#taskForm {\n    width: 65vh;\n    height: 65vh;\n    left: calc(50% - 10vh);\n    top: calc(50% - 30vh);\n    padding-left: 5%;\n    padding-right: 5%;\n    font-size: 3vh;\n}\n\n#projectForm {\n    width: 55vh;\n    height: 25vh;\n    left: calc(50% - 10vh);\n    top: calc(50% - 30vh);\n    padding: 0 2% 0 2%;\n    font-size: 3vh;\n}\n\n#confirmationForm {\n    width: 50vh;\n    height: 35vh;\n    left: calc(50% - 10vh);\n    top: calc(50% - 30vh);\n    padding: 0 3% 0 3%;\n    font-size: 3vh;\n}\n\n#projectForm,\n#taskForm,\n#confirmationForm {\n    position: absolute;\n    z-index: 2;\n    background-color: var(--stone);\n    display: none;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: flex-start;\n    border: 5px var(--hover) solid;\n}\n\n.cover {\n    position: fixed;\n    top: 0;\n    left: 0;\n    background: rgba(0, 0, 0, 0.6);\n    z-index: 1;\n    width: 100%;\n    height: 100%;\n    display: none;\n}\n\n\n#taskForm div,\n#projectForm div {\n    display: flex;\n}\n\n#taskForm label,\n#projectForm label {\n    flex: 1;\n    min-width: 20vh;\n    font-size: 3vh;\n}\n\n#taskForm input,\n#taskForm select {\n    flex: 6;\n    min-width: 30vh;\n}\n\n#description,\n#taskForm input,\n#priority,\n#proj_title,\n#proj_dueDate {\n    font-size: 2vh;\n    padding: 1%;\n}\n\n#description {\n    height: 20vh;\n    max-width: 30vh;\n    resize: none;\n}\n\n.redBtn {\n    background-color: red;\n    margin-right: 25%;\n}\n\n.greenBtn {\n    background-color: rgb(47, 255, 47);\n}\n\n.redBtn,\n.greenBtn {\n    font-size: 3vh;\n    padding: 10%;\n    width: 15vh;\n    height: 0.5vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.fbtn {\n    display: flex;\n    justify-content: center;\n    width: 100%;\n}\n\n.expired {\n    border: 5px solid red;\n}\n\n\n.task_desc {\n    overflow-y: auto;\n    flex: 6;\n    font-size: 1.5rem;\n}\n\n.task_dueDate {\n    flex: 1;\n}\n\n.task_title,\n.task_desc,\n.task_dueDate {\n    border-bottom: 1px solid rgba(0, 0, 0, 0.212);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n}\n\n.task_title {\n    flex: 1;\n    padding: 0 6%;\n}\n\n.taskButtons>button {\n    font-size: 3vh;\n    color: white;\n    background-color: black;\n    opacity: 0.5;\n}\n\n.mobile {\n    display: none;\n}\n\n\n\n@media only screen and (max-width: 1100px) {\n\n    body,\n    html {\n        height: 100%;\n    }\n\n    .mobile {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        position: absolute;\n        z-index: 1;\n        left: 0;\n        top: 0;\n        width: 55px;\n        height: 55px;\n        color: black;\n        overflow: hidden;\n        background-color: black;\n        border-right: 1px solid white;\n    }\n\n    .mobile:hover {\n        cursor: pointer;\n    }\n\n    #sidebar {\n        position: absolute;\n        z-index: 1;\n        left: 0;\n        display: none;\n        max-height: 100vh;\n        max-width: min(75%, 300px);\n    }\n\n    #projectForm,\n    #taskForm,\n    #confirmationForm {\n        position: absolute;\n        margin-left: auto;\n        margin-right: auto;\n        left: 0;\n        right: 0;\n        text-align: center;\n        max-width: 100%;\n        width: 400px;\n        height: 200px;\n    }\n\n    #taskForm, #projectForm {\n        position: absolute;\n        left: 0;\n        top: 0;\n        width: 100%;\n        min-height: 100%;\n        height: fit-content;\n        overflow-y: auto;\n        text-align: center;\n        align-items: center;\n    }\n\n    #projectForm label {\n        max-height: 50px;\n    }\n\n    #projectForm>div {\n        width: 100%;\n        height: 100%;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n    }\n\n    #projectForm>div>* {\n        font-size: 2rem;\n        width: 90%;\n    }\n\n    #taskForm label {\n        font-size: 1.5rem\n    }\n\n    #taskForm #title,\n    #taskForm #dueDate {\n        font-size: 1rem;\n        height: 50px;\n        width: 90%;\n    }\n\n    #description {\n        width: 90%;\n        max-width: none;\n        font-size: 1rem;\n        min-height: 200px;\n    }\n\n    #priority {\n        font-size: 1rem;\n        width: 90%;\n        justify-content: center;\n    }\n\n    #taskForm>div {\n        position: relative;\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        margin-bottom: 20px;\n    }\n\n    .fbtn {\n        display: flex;\n        flex-direction: row !important;\n    }\n\n    .fbtn>* {\n        font-size: 1.7rem;\n    }\n\n    .RPB {\n        font-size: 40px;\n        z-index: 1;\n    }\n\n    #date {\n        max-width: 250px;\n        font-size: 2rem;\n    }\n\n    #addTask {\n        margin: 0 100px;\n    }\n\n}"],"sourceRoot":""}]);
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
    if (window.innerWidth > "1100") {
        sidebar.style.display = "flex";
    }
    if (window.innerWidth < "1100") {
        sidebar.style.display = "none";
        mobileBtn.style.display = "flex";
    }
   // //if (sidebar.style.display != "flex") {
      //  mobileBtn.style.display = "none";
    //}
})

const content = document.querySelector("#content");
content.addEventListener("click", () => {
    if (window.innerWidth < "1100") {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxPQUFPLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFFBQVEsTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLE9BQU8sU0FBUyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFFBQVEsS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLE9BQU8sWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsU0FBUyxNQUFNLE1BQU0sVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUss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dHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGF0ZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ldmVudExpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZm9ybXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vYmlsZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2V0dXBQcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zZXR1cFRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3V0aWxpdHkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgLS1uZXV0cmFsOiAjZjVmNWY1O1xcbiAgICAtLXZpb2xldDogd2hpdGU7XFxuICAgIC0tc3RvbmU6ICM2ZTYyNzk7XFxuICAgIC0temluYzogIzNmM2Y0NjtcXG4gICAgLS1ob3ZlcjogcmdiKDY5LCAzMSwgODMpO1xcblxcbn1cXG5cXG5ib2R5LFxcbmh0bWwge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuXFxuI3NpZGViYXIge1xcbiAgICBmbGV4OiAxO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS16aW5jKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI3NpZGViYXI+ZGl2IHtcXG4gICAgZm9udC1zaXplOiA2dmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaG9tZSB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGJvcmRlci1ib3R0b206IDVweCBibGFjayBzb2xpZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3RvbmUpO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuI3Byb2plY3RzIHtcXG4gICAgZmxleDogNztcXG59XFxuXFxuLmhvbWU6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlcik7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBmbGV4OiAzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuXFxuLmV4cGFuZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5leHBhbmQ+ZGl2OmZpcnN0LWNoaWxkLFxcbiNhZGRQcm9qZWN0IHtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5leHBhbmQ+KiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jYWRkUHJvamVjdCB7XFxuICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3RvbmUpO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuI2FkZFByb2plY3Q6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyKTtcXG59XFxuXFxuLmV4cGFuZD5kaXY6Zmlyc3QtY2hpbGQge1xcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgYmxhY2s7XFxufVxcblxcblxcbi5leHBhbmQgLnNob3J0Y3V0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3RvbmUpO1xcbiAgICBwYWRkaW5nOiA1JTtcXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGJsYWNrO1xcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5leHBhbmQgLnNob3J0Y3V0cyB7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIG1heC1oZWlnaHQ6IDcwdmg7XFxufVxcblxcbi5zaG9ydGN1dDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZXhwYW5kPmRpdiB7XFxuICAgIGZsZXg6IDU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI3Rhc2tzIHtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzNXZoLCAxZnIpKTtcXG4gICAgZ3JpZC1nYXA6IDJ2aDtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDMlO1xcbn1cXG5cXG4jdGFza3M+ZGl2IHtcXG4gICAgaGVpZ2h0OiAzNXZoO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMCwgMTQ3LCAyMjMpO1xcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDAsIDE0NywgMjIzLCAxKSAwJSxcXG4gICAgICAgICAgICByZ2JhKDIxMSwgMjM5LCAyNDIsIDEpIDQ5JSwgcmdiYSgxNywgMTYsIDE2LCAxKSAxMDAlKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcXG59XFxuXFxuI3Rhc2tzPmRpdj5kaXYge1xcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xcbiAgICBmb250LXNpemU6IDN2aDtcXG59XFxuXFxuLk11c3Qge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjMyLCA1LCA1KTtcXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgyMzIsIDUsIDUsIDEpIDAlLFxcbiAgICAgICAgICAgIHJnYmEoMjEzLCAxNDQsIDE0NCwgMSkgNDklLCByZ2JhKDE3LCAxNiwgMTYsIDEpIDEwMCUpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5OZWNlc3Nhcnkge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjMyLCAxMDcsIDUpO1xcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDIzMiwgMTA3LCA1LCAxKSAwJSxcXG4gICAgICAgICAgICByZ2JhKDIzNSwgMjAwLCAxNjMsIDEpIDQ5JSwgcmdiYSgxNywgMTYsIDE2LCAxKSAxMDAlKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uTWF5YmUge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTkzLCAyMzIsIDUpO1xcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDE5MywgMjMyLCA1LCAxKSAwJSxcXG4gICAgICAgICAgICByZ2JhKDIyNCwgMjM1LCAxNjMsIDEpIDQ5JSwgcmdiYSgxNywgMTYsIDE2LCAxKSAxMDAlKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4jY29udGVudD4qOm5vdCgjdGFza3MpIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbn1cXG5cXG4uaGVhZGVyIC5SUEIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OiBtYXgoNTVweCwgN3ZoKTtcXG4gICAgd2lkdGg6IG1heCg1NXB4LCA3dmgpO1xcbiAgICBmb250LXNpemU6IG1heCg0MHB4LCAzcmVtKTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgY29sb3I6IHJnYig4NSwgMywgMTkpO1xcbn1cXG5cXG4jYWRkVGFzayB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogbWF4KDQwcHgsIDNyZW0pO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgaGVpZ2h0OiBtYXgoNTVweCwgN3ZoKTtcXG59XFxuXFxuI2FkZFRhc2s6aG92ZXIge1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2FkZFRhc2s6YWN0aXZlIHtcXG4gICAgb3BhY2l0eTogMC4yO1xcbn1cXG5cXG4uc2VsZWN0ZWQge1xcbiAgICBib3JkZXItcmlnaHQ6IDEwcHggZ3Jvb3ZlIHZhcigtLWhvdmVyKTtcXG59XFxuXFxuI2RhdGUge1xcbiAgICB3aWR0aDogNDB2aCAhaW1wb3J0YW50O1xcbiAgICBmb250LXNpemU6IDV2aDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiBncmV5O1xcbn1cXG5cXG4uY2FsTGVmdCB7XFxuICAgIG1hcmdpbi1yaWdodDogMnZoO1xcbn1cXG5cXG4uY2FsUmlnaHQge1xcbiAgICBtYXJnaW4tbGVmdDogMnZoO1xcbn1cXG5cXG4ubmF2aWdhdGVjYWwge1xcbiAgICBmb250LXNpemU6IDh2aDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuI3Rhc2tGb3JtIHtcXG4gICAgd2lkdGg6IDY1dmg7XFxuICAgIGhlaWdodDogNjV2aDtcXG4gICAgbGVmdDogY2FsYyg1MCUgLSAxMHZoKTtcXG4gICAgdG9wOiBjYWxjKDUwJSAtIDMwdmgpO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA1JTtcXG4gICAgZm9udC1zaXplOiAzdmg7XFxufVxcblxcbiNwcm9qZWN0Rm9ybSB7XFxuICAgIHdpZHRoOiA1NXZoO1xcbiAgICBoZWlnaHQ6IDI1dmg7XFxuICAgIGxlZnQ6IGNhbGMoNTAlIC0gMTB2aCk7XFxuICAgIHRvcDogY2FsYyg1MCUgLSAzMHZoKTtcXG4gICAgcGFkZGluZzogMCAyJSAwIDIlO1xcbiAgICBmb250LXNpemU6IDN2aDtcXG59XFxuXFxuI2NvbmZpcm1hdGlvbkZvcm0ge1xcbiAgICB3aWR0aDogNTB2aDtcXG4gICAgaGVpZ2h0OiAzNXZoO1xcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDEwdmgpO1xcbiAgICB0b3A6IGNhbGMoNTAlIC0gMzB2aCk7XFxuICAgIHBhZGRpbmc6IDAgMyUgMCAzJTtcXG4gICAgZm9udC1zaXplOiAzdmg7XFxufVxcblxcbiNwcm9qZWN0Rm9ybSxcXG4jdGFza0Zvcm0sXFxuI2NvbmZpcm1hdGlvbkZvcm0ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN0b25lKTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBib3JkZXI6IDVweCB2YXIoLS1ob3Zlcikgc29saWQ7XFxufVxcblxcbi5jb3ZlciB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcblxcbiN0YXNrRm9ybSBkaXYsXFxuI3Byb2plY3RGb3JtIGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiN0YXNrRm9ybSBsYWJlbCxcXG4jcHJvamVjdEZvcm0gbGFiZWwge1xcbiAgICBmbGV4OiAxO1xcbiAgICBtaW4td2lkdGg6IDIwdmg7XFxuICAgIGZvbnQtc2l6ZTogM3ZoO1xcbn1cXG5cXG4jdGFza0Zvcm0gaW5wdXQsXFxuI3Rhc2tGb3JtIHNlbGVjdCB7XFxuICAgIGZsZXg6IDY7XFxuICAgIG1pbi13aWR0aDogMzB2aDtcXG59XFxuXFxuI2Rlc2NyaXB0aW9uLFxcbiN0YXNrRm9ybSBpbnB1dCxcXG4jcHJpb3JpdHksXFxuI3Byb2pfdGl0bGUsXFxuI3Byb2pfZHVlRGF0ZSB7XFxuICAgIGZvbnQtc2l6ZTogMnZoO1xcbiAgICBwYWRkaW5nOiAxJTtcXG59XFxuXFxuI2Rlc2NyaXB0aW9uIHtcXG4gICAgaGVpZ2h0OiAyMHZoO1xcbiAgICBtYXgtd2lkdGg6IDMwdmg7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuLnJlZEJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyNSU7XFxufVxcblxcbi5ncmVlbkJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0NywgMjU1LCA0Nyk7XFxufVxcblxcbi5yZWRCdG4sXFxuLmdyZWVuQnRuIHtcXG4gICAgZm9udC1zaXplOiAzdmg7XFxuICAgIHBhZGRpbmc6IDEwJTtcXG4gICAgd2lkdGg6IDE1dmg7XFxuICAgIGhlaWdodDogMC41dmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZmJ0biB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmV4cGlyZWQge1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCByZWQ7XFxufVxcblxcblxcbi50YXNrX2Rlc2Mge1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBmbGV4OiA2O1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLnRhc2tfZHVlRGF0ZSB7XFxuICAgIGZsZXg6IDE7XFxufVxcblxcbi50YXNrX3RpdGxlLFxcbi50YXNrX2Rlc2MsXFxuLnRhc2tfZHVlRGF0ZSB7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMjEyKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udGFza190aXRsZSB7XFxuICAgIGZsZXg6IDE7XFxuICAgIHBhZGRpbmc6IDAgNiU7XFxufVxcblxcbi50YXNrQnV0dG9ucz5idXR0b24ge1xcbiAgICBmb250LXNpemU6IDN2aDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4ubW9iaWxlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuXFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTAwcHgpIHtcXG5cXG4gICAgYm9keSxcXG4gICAgaHRtbCB7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgLm1vYmlsZSB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgei1pbmRleDogMTtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICB3aWR0aDogNTVweDtcXG4gICAgICAgIGhlaWdodDogNTVweDtcXG4gICAgICAgIGNvbG9yOiBibGFjaztcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICB9XFxuXFxuICAgIC5tb2JpbGU6aG92ZXIge1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxuXFxuICAgICNzaWRlYmFyIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHotaW5kZXg6IDE7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xcbiAgICAgICAgbWF4LXdpZHRoOiBtaW4oNzUlLCAzMDBweCk7XFxuICAgIH1cXG5cXG4gICAgI3Byb2plY3RGb3JtLFxcbiAgICAjdGFza0Zvcm0sXFxuICAgICNjb25maXJtYXRpb25Gb3JtIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIHJpZ2h0OiAwO1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICAgICAgd2lkdGg6IDQwMHB4O1xcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgfVxcblxcbiAgICAjdGFza0Zvcm0sICNwcm9qZWN0Rm9ybSB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgICNwcm9qZWN0Rm9ybSBsYWJlbCB7XFxuICAgICAgICBtYXgtaGVpZ2h0OiA1MHB4O1xcbiAgICB9XFxuXFxuICAgICNwcm9qZWN0Rm9ybT5kaXYge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAjcHJvamVjdEZvcm0+ZGl2Pioge1xcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICAgICAgd2lkdGg6IDkwJTtcXG4gICAgfVxcblxcbiAgICAjdGFza0Zvcm0gbGFiZWwge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW1cXG4gICAgfVxcblxcbiAgICAjdGFza0Zvcm0gI3RpdGxlLFxcbiAgICAjdGFza0Zvcm0gI2R1ZURhdGUge1xcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xcbiAgICAgICAgd2lkdGg6IDkwJTtcXG4gICAgfVxcblxcbiAgICAjZGVzY3JpcHRpb24ge1xcbiAgICAgICAgd2lkdGg6IDkwJTtcXG4gICAgICAgIG1heC13aWR0aDogbm9uZTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xcbiAgICB9XFxuXFxuICAgICNwcmlvcml0eSB7XFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgICAgICB3aWR0aDogOTAlO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgI3Rhc2tGb3JtPmRpdiB7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgfVxcblxcbiAgICAuZmJ0biB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xcbiAgICB9XFxuXFxuICAgIC5mYnRuPioge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjdyZW07XFxuICAgIH1cXG5cXG4gICAgLlJQQiB7XFxuICAgICAgICBmb250LXNpemU6IDQwcHg7XFxuICAgICAgICB6LWluZGV4OiAxO1xcbiAgICB9XFxuXFxuICAgICNkYXRlIHtcXG4gICAgICAgIG1heC13aWR0aDogMjUwcHg7XFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxuICAgIH1cXG5cXG4gICAgI2FkZFRhc2sge1xcbiAgICAgICAgbWFyZ2luOiAwIDEwMHB4O1xcbiAgICB9XFxuXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxVQUFVO0lBQ1YsU0FBUztJQUNULHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysd0JBQXdCOztBQUU1Qjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7O0FBR0E7SUFDSSxPQUFPO0lBQ1AsNkJBQTZCO0lBQzdCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLE9BQU87SUFDUCw4QkFBOEI7SUFDOUIsOEJBQThCO0lBQzlCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLE9BQU87QUFDWDs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksT0FBTztJQUNQLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLFdBQVc7QUFDZjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBOztJQUVJLE9BQU87SUFDUCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQiw4QkFBOEI7SUFDOUIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLDhCQUE4QjtBQUNsQzs7O0FBR0E7SUFDSSw4QkFBOEI7SUFDOUIsV0FBVztJQUNYLDhCQUE4QjtJQUM5QixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksT0FBTztJQUNQLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLE9BQU87SUFDUCxhQUFhO0lBQ2IsMERBQTBEO0lBQzFELGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUI7aUVBQzZEO0lBQzdELGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQjs0RUFDd0U7QUFDNUU7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUI7NEVBQ3dFO0FBQzVFOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCOzRFQUN3RTtBQUM1RTs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQiwwQkFBMEI7SUFDMUIsUUFBUTtJQUNSLE1BQU07SUFDTixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDBCQUEwQjtJQUMxQixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsY0FBYztJQUNkLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7O0FBRUE7OztJQUdJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsOEJBQThCO0lBQzlCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLHVCQUF1QjtJQUN2Qiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCw4QkFBOEI7SUFDOUIsVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7O0FBR0E7O0lBRUksYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSxPQUFPO0lBQ1AsZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7O0lBRUksT0FBTztJQUNQLGVBQWU7QUFDbkI7O0FBRUE7Ozs7O0lBS0ksY0FBYztJQUNkLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7O0lBRUksY0FBYztJQUNkLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTtJQUNiLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7OztBQUdBO0lBQ0ksZ0JBQWdCO0lBQ2hCLE9BQU87SUFDUCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxPQUFPO0FBQ1g7O0FBRUE7OztJQUdJLDZDQUE2QztJQUM3QyxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxPQUFPO0lBQ1AsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOzs7O0FBSUE7O0lBRUk7O1FBRUksWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGFBQWE7UUFDYix1QkFBdUI7UUFDdkIsbUJBQW1CO1FBQ25CLGtCQUFrQjtRQUNsQixVQUFVO1FBQ1YsT0FBTztRQUNQLE1BQU07UUFDTixXQUFXO1FBQ1gsWUFBWTtRQUNaLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsdUJBQXVCO1FBQ3ZCLDZCQUE2QjtJQUNqQzs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLE9BQU87UUFDUCxhQUFhO1FBQ2IsaUJBQWlCO1FBQ2pCLDBCQUEwQjtJQUM5Qjs7SUFFQTs7O1FBR0ksa0JBQWtCO1FBQ2xCLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsT0FBTztRQUNQLFFBQVE7UUFDUixrQkFBa0I7UUFDbEIsZUFBZTtRQUNmLFlBQVk7UUFDWixhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLE9BQU87UUFDUCxNQUFNO1FBQ04sV0FBVztRQUNYLGdCQUFnQjtRQUNoQixtQkFBbUI7UUFDbkIsZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsWUFBWTtRQUNaLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsdUJBQXVCO1FBQ3ZCLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLGVBQWU7UUFDZixVQUFVO0lBQ2Q7O0lBRUE7UUFDSTtJQUNKOztJQUVBOztRQUVJLGVBQWU7UUFDZixZQUFZO1FBQ1osVUFBVTtJQUNkOztJQUVBO1FBQ0ksVUFBVTtRQUNWLGVBQWU7UUFDZixlQUFlO1FBQ2YsaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLFVBQVU7UUFDVix1QkFBdUI7SUFDM0I7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsV0FBVztRQUNYLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsdUJBQXVCO1FBQ3ZCLG1CQUFtQjtRQUNuQixtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxhQUFhO1FBQ2IsOEJBQThCO0lBQ2xDOztJQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLFVBQVU7SUFDZDs7SUFFQTtRQUNJLGdCQUFnQjtRQUNoQixlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7QUFFSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAtLW5ldXRyYWw6ICNmNWY1ZjU7XFxuICAgIC0tdmlvbGV0OiB3aGl0ZTtcXG4gICAgLS1zdG9uZTogIzZlNjI3OTtcXG4gICAgLS16aW5jOiAjM2YzZjQ2O1xcbiAgICAtLWhvdmVyOiByZ2IoNjksIDMxLCA4Myk7XFxuXFxufVxcblxcbmJvZHksXFxuaHRtbCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG5cXG4jc2lkZWJhciB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXppbmMpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jc2lkZWJhcj5kaXYge1xcbiAgICBmb250LXNpemU6IDZ2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ob21lIHtcXG4gICAgZmxleDogMTtcXG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IGJsYWNrIHNvbGlkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdG9uZSk7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4jcHJvamVjdHMge1xcbiAgICBmbGV4OiA3O1xcbn1cXG5cXG4uaG9tZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGZsZXg6IDM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5cXG4uZXhwYW5kIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmV4cGFuZD5kaXY6Zmlyc3QtY2hpbGQsXFxuI2FkZFByb2plY3Qge1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmV4cGFuZD4qIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNhZGRQcm9qZWN0IHtcXG4gICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdG9uZSk7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4jYWRkUHJvamVjdDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXIpO1xcbn1cXG5cXG4uZXhwYW5kPmRpdjpmaXJzdC1jaGlsZCB7XFxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBibGFjaztcXG59XFxuXFxuXFxuLmV4cGFuZCAuc2hvcnRjdXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdG9uZSk7XFxuICAgIHBhZGRpbmc6IDUlO1xcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgYmxhY2s7XFxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmV4cGFuZCAuc2hvcnRjdXRzIHtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgbWF4LWhlaWdodDogNzB2aDtcXG59XFxuXFxuLnNob3J0Y3V0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXIpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5leHBhbmQ+ZGl2IHtcXG4gICAgZmxleDogNTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jdGFza3Mge1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDM1dmgsIDFmcikpO1xcbiAgICBncmlkLWdhcDogMnZoO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMyU7XFxufVxcblxcbiN0YXNrcz5kaXYge1xcbiAgICBoZWlnaHQ6IDM1dmg7XFxuICAgIGJhY2tncm91bmQ6IHJnYigwLCAxNDcsIDIyMyk7XFxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoMCwgMTQ3LCAyMjMsIDEpIDAlLFxcbiAgICAgICAgICAgIHJnYmEoMjExLCAyMzksIDI0MiwgMSkgNDklLCByZ2JhKDE3LCAxNiwgMTYsIDEpIDEwMCUpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAlO1xcbn1cXG5cXG4jdGFza3M+ZGl2PmRpdiB7XFxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XFxuICAgIGZvbnQtc2l6ZTogM3ZoO1xcbn1cXG5cXG4uTXVzdCB7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyMzIsIDUsIDUpO1xcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDIzMiwgNSwgNSwgMSkgMCUsXFxuICAgICAgICAgICAgcmdiYSgyMTMsIDE0NCwgMTQ0LCAxKSA0OSUsIHJnYmEoMTcsIDE2LCAxNiwgMSkgMTAwJSkgIWltcG9ydGFudDtcXG59XFxuXFxuLk5lY2Vzc2FyeSB7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyMzIsIDEwNywgNSk7XFxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoMjMyLCAxMDcsIDUsIDEpIDAlLFxcbiAgICAgICAgICAgIHJnYmEoMjM1LCAyMDAsIDE2MywgMSkgNDklLCByZ2JhKDE3LCAxNiwgMTYsIDEpIDEwMCUpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5NYXliZSB7XFxuICAgIGJhY2tncm91bmQ6IHJnYigxOTMsIDIzMiwgNSk7XFxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoMTkzLCAyMzIsIDUsIDEpIDAlLFxcbiAgICAgICAgICAgIHJnYmEoMjI0LCAyMzUsIDE2MywgMSkgNDklLCByZ2JhKDE3LCAxNiwgMTYsIDEpIDEwMCUpICFpbXBvcnRhbnQ7XFxufVxcblxcbiNjb250ZW50Pio6bm90KCN0YXNrcykge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxufVxcblxcbi5oZWFkZXIgLlJQQiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBoZWlnaHQ6IG1heCg1NXB4LCA3dmgpO1xcbiAgICB3aWR0aDogbWF4KDU1cHgsIDd2aCk7XFxuICAgIGZvbnQtc2l6ZTogbWF4KDQwcHgsIDNyZW0pO1xcbiAgICByaWdodDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICBjb2xvcjogcmdiKDg1LCAzLCAxOSk7XFxufVxcblxcbiNhZGRUYXNrIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiBtYXgoNDBweCwgM3JlbSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBoZWlnaHQ6IG1heCg1NXB4LCA3dmgpO1xcbn1cXG5cXG4jYWRkVGFzazpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jYWRkVGFzazphY3RpdmUge1xcbiAgICBvcGFjaXR5OiAwLjI7XFxufVxcblxcbi5zZWxlY3RlZCB7XFxuICAgIGJvcmRlci1yaWdodDogMTBweCBncm9vdmUgdmFyKC0taG92ZXIpO1xcbn1cXG5cXG4jZGF0ZSB7XFxuICAgIHdpZHRoOiA0MHZoICFpbXBvcnRhbnQ7XFxuICAgIGZvbnQtc2l6ZTogNXZoO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IGdyZXk7XFxufVxcblxcbi5jYWxMZWZ0IHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAydmg7XFxufVxcblxcbi5jYWxSaWdodCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAydmg7XFxufVxcblxcbi5uYXZpZ2F0ZWNhbCB7XFxuICAgIGZvbnQtc2l6ZTogOHZoO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4jdGFza0Zvcm0ge1xcbiAgICB3aWR0aDogNjV2aDtcXG4gICAgaGVpZ2h0OiA2NXZoO1xcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDEwdmgpO1xcbiAgICB0b3A6IGNhbGMoNTAlIC0gMzB2aCk7XFxuICAgIHBhZGRpbmctbGVmdDogNSU7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDUlO1xcbiAgICBmb250LXNpemU6IDN2aDtcXG59XFxuXFxuI3Byb2plY3RGb3JtIHtcXG4gICAgd2lkdGg6IDU1dmg7XFxuICAgIGhlaWdodDogMjV2aDtcXG4gICAgbGVmdDogY2FsYyg1MCUgLSAxMHZoKTtcXG4gICAgdG9wOiBjYWxjKDUwJSAtIDMwdmgpO1xcbiAgICBwYWRkaW5nOiAwIDIlIDAgMiU7XFxuICAgIGZvbnQtc2l6ZTogM3ZoO1xcbn1cXG5cXG4jY29uZmlybWF0aW9uRm9ybSB7XFxuICAgIHdpZHRoOiA1MHZoO1xcbiAgICBoZWlnaHQ6IDM1dmg7XFxuICAgIGxlZnQ6IGNhbGMoNTAlIC0gMTB2aCk7XFxuICAgIHRvcDogY2FsYyg1MCUgLSAzMHZoKTtcXG4gICAgcGFkZGluZzogMCAzJSAwIDMlO1xcbiAgICBmb250LXNpemU6IDN2aDtcXG59XFxuXFxuI3Byb2plY3RGb3JtLFxcbiN0YXNrRm9ybSxcXG4jY29uZmlybWF0aW9uRm9ybSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3RvbmUpO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGJvcmRlcjogNXB4IHZhcigtLWhvdmVyKSBzb2xpZDtcXG59XFxuXFxuLmNvdmVyIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuXFxuI3Rhc2tGb3JtIGRpdixcXG4jcHJvamVjdEZvcm0gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI3Rhc2tGb3JtIGxhYmVsLFxcbiNwcm9qZWN0Rm9ybSBsYWJlbCB7XFxuICAgIGZsZXg6IDE7XFxuICAgIG1pbi13aWR0aDogMjB2aDtcXG4gICAgZm9udC1zaXplOiAzdmg7XFxufVxcblxcbiN0YXNrRm9ybSBpbnB1dCxcXG4jdGFza0Zvcm0gc2VsZWN0IHtcXG4gICAgZmxleDogNjtcXG4gICAgbWluLXdpZHRoOiAzMHZoO1xcbn1cXG5cXG4jZGVzY3JpcHRpb24sXFxuI3Rhc2tGb3JtIGlucHV0LFxcbiNwcmlvcml0eSxcXG4jcHJval90aXRsZSxcXG4jcHJval9kdWVEYXRlIHtcXG4gICAgZm9udC1zaXplOiAydmg7XFxuICAgIHBhZGRpbmc6IDElO1xcbn1cXG5cXG4jZGVzY3JpcHRpb24ge1xcbiAgICBoZWlnaHQ6IDIwdmg7XFxuICAgIG1heC13aWR0aDogMzB2aDtcXG4gICAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4ucmVkQnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDI1JTtcXG59XFxuXFxuLmdyZWVuQnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ3LCAyNTUsIDQ3KTtcXG59XFxuXFxuLnJlZEJ0bixcXG4uZ3JlZW5CdG4ge1xcbiAgICBmb250LXNpemU6IDN2aDtcXG4gICAgcGFkZGluZzogMTAlO1xcbiAgICB3aWR0aDogMTV2aDtcXG4gICAgaGVpZ2h0OiAwLjV2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mYnRuIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZXhwaXJlZCB7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHJlZDtcXG59XFxuXFxuXFxuLnRhc2tfZGVzYyB7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIGZsZXg6IDY7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4udGFza19kdWVEYXRlIHtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuLnRhc2tfdGl0bGUsXFxuLnRhc2tfZGVzYyxcXG4udGFza19kdWVEYXRlIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yMTIpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi50YXNrX3RpdGxlIHtcXG4gICAgZmxleDogMTtcXG4gICAgcGFkZGluZzogMCA2JTtcXG59XFxuXFxuLnRhc2tCdXR0b25zPmJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogM3ZoO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi5tb2JpbGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMDBweCkge1xcblxcbiAgICBib2R5LFxcbiAgICBodG1sIHtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgfVxcblxcbiAgICAubW9iaWxlIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB6LWluZGV4OiAxO1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgICAgIHdpZHRoOiA1NXB4O1xcbiAgICAgICAgaGVpZ2h0OiA1NXB4O1xcbiAgICAgICAgY29sb3I6IGJsYWNrO1xcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgd2hpdGU7XFxuICAgIH1cXG5cXG4gICAgLm1vYmlsZTpob3ZlciB7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG5cXG4gICAgI3NpZGViYXIge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgei1pbmRleDogMTtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgbWF4LWhlaWdodDogMTAwdmg7XFxuICAgICAgICBtYXgtd2lkdGg6IG1pbig3NSUsIDMwMHB4KTtcXG4gICAgfVxcblxcbiAgICAjcHJvamVjdEZvcm0sXFxuICAgICN0YXNrRm9ybSxcXG4gICAgI2NvbmZpcm1hdGlvbkZvcm0ge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgcmlnaHQ6IDA7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgICAgICB3aWR0aDogNDAwcHg7XFxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICB9XFxuXFxuICAgICN0YXNrRm9ybSwgI3Byb2plY3RGb3JtIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgI3Byb2plY3RGb3JtIGxhYmVsIHtcXG4gICAgICAgIG1heC1oZWlnaHQ6IDUwcHg7XFxuICAgIH1cXG5cXG4gICAgI3Byb2plY3RGb3JtPmRpdiB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgICNwcm9qZWN0Rm9ybT5kaXY+KiB7XFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxuICAgICAgICB3aWR0aDogOTAlO1xcbiAgICB9XFxuXFxuICAgICN0YXNrRm9ybSBsYWJlbCB7XFxuICAgICAgICBmb250LXNpemU6IDEuNXJlbVxcbiAgICB9XFxuXFxuICAgICN0YXNrRm9ybSAjdGl0bGUsXFxuICAgICN0YXNrRm9ybSAjZHVlRGF0ZSB7XFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgICAgICBoZWlnaHQ6IDUwcHg7XFxuICAgICAgICB3aWR0aDogOTAlO1xcbiAgICB9XFxuXFxuICAgICNkZXNjcmlwdGlvbiB7XFxuICAgICAgICB3aWR0aDogOTAlO1xcbiAgICAgICAgbWF4LXdpZHRoOiBub25lO1xcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICAgICAgbWluLWhlaWdodDogMjAwcHg7XFxuICAgIH1cXG5cXG4gICAgI3ByaW9yaXR5IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgICAgIHdpZHRoOiA5MCU7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAjdGFza0Zvcm0+ZGl2IHtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICB9XFxuXFxuICAgIC5mYnRuIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7XFxuICAgIH1cXG5cXG4gICAgLmZidG4+KiB7XFxuICAgICAgICBmb250LXNpemU6IDEuN3JlbTtcXG4gICAgfVxcblxcbiAgICAuUlBCIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgICAgIHotaW5kZXg6IDE7XFxuICAgIH1cXG5cXG4gICAgI2RhdGUge1xcbiAgICAgICAgbWF4LXdpZHRoOiAyNTBweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgfVxcblxcbiAgICAjYWRkVGFzayB7XFxuICAgICAgICBtYXJnaW46IDAgMTAwcHg7XFxuICAgIH1cXG5cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL3RvZG9cIjtcblxuY29uc3QgY2FsZW5kZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RhdGVcIik7XG5cbmNvbnN0IHRvZGF5ID0gZ2V0RGF0ZSgpO1xuY2FsZW5kZXIuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgdG9kYXkpO1xuY2FsZW5kZXIuc2V0QXR0cmlidXRlKFwibWluXCIsIHRvZGF5KTtcblxuLy8gc2V0IGRlZmF1bHQgZGF0ZSB2YWx1ZXMgdG8gdG9kYXlcbmNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZURhdGVcIik7XG5kdWVEYXRlLnZhbHVlID0gZ2V0RGF0ZSgpO1xuLy9jb25zdCBwcm9qX2R1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2pfZHVlRGF0ZVwiKTtcbi8vcHJval9kdWVEYXRlLnZhbHVlID0gZ2V0RGF0ZSgpO1xuXG5mdW5jdGlvbiBnZXREYXRlKCkge1xuICAgIHZhciBkID0gbmV3IERhdGUoKSxcbiAgICAgICAgbW9udGggPSAnJyArIChkLmdldE1vbnRoKCkgKyAxKSxcbiAgICAgICAgZGF5ID0gJycgKyBkLmdldERhdGUoKSxcbiAgICAgICAgeWVhciA9IGQuZ2V0RnVsbFllYXIoKTtcblxuICAgIGlmIChtb250aC5sZW5ndGggPCAyKVxuICAgICAgICBtb250aCA9ICcwJyArIG1vbnRoO1xuICAgIGlmIChkYXkubGVuZ3RoIDwgMilcbiAgICAgICAgZGF5ID0gJzAnICsgZGF5O1xuXG4gICAgcmV0dXJuIFt5ZWFyLCBtb250aCwgZGF5XS5qb2luKCctJyk7XG59XG5cbi8vIGlkZWFsbHkgeW91IHdvdWxkIGZvcm1hdCB0byBmaXQgbG9jYXRpb24sIGJ1dCB3aGF0IGEgcGFpbiBEOlxuZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlKSB7XG4gICAgZGF0ZSA9IGRhdGUuc3BsaXQoXCItXCIpO1xuICAgIHJldHVybiBbZGF0ZVsxXSwgZGF0ZVsyXSwgZGF0ZVswXV0uam9pbihcIi1cIik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdChzdHIpIHtcbiAgICBzdHIgPSBzdHIudG9TdHJpbmcoKTtcbiAgICBjb25zdCBtb250aCA9IGdldE1vbnRoRnJvbVN0cmluZyhzdHIuc3Vic3RyaW5nKDQsIDcpKTtcbiAgICBjb25zdCBkYXkgPSBzdHIuc3Vic3RyaW5nKDgsIDEwKTtcbiAgICBjb25zdCB5ZWFyID0gc3RyLnN1YnN0cmluZygxMSwgMTUpO1xuICAgIHJldHVybiBbZGF5LCBtb250aCwgeWVhcl07XG59XG5cbmZ1bmN0aW9uIGdldE1vbnRoRnJvbVN0cmluZyhtb24pIHtcbiAgICByZXR1cm4gbmV3IERhdGUoRGF0ZS5wYXJzZShtb24gKyBcIiAxLCAyMDEyXCIpKS5nZXRNb250aCgpICsgMTtcbn1cblxuY29uc3QgZXhwaXJlQ2hlY2sgPSAodGFzaykgPT4ge1xuICAgIC8vY29uc3QgdG9kYXlBcnIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVcIikudmFsdWUuc3BsaXQoXCItXCIpO1xuXG4gICAgY29uc3QgdG9kYXlBcnIgPSBmb3JtYXQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlXCIpLnZhbHVlQXNEYXRlKTtcbiAgICAvLyBbZGF5LCBtb250aCwgeWVhcl1cbiAgICAvLyBjb25zb2xlLmxvZyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVcIikudmFsdWVBc0RhdGUpO1xuICAgIC8vIGV4OiBXZWQgU2VwIDI4IDIwMjIgMDI6MDA6MDAgR01UKzAyMDAgKENlbnRyYWwgRXVyb3BlYW4gU3VtbWVyIFRpbWUpXG4gICAgY29uc3QgY3VycmVudFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdGVkXCIpLnRleHRDb250ZW50O1xuICAgIGNvbnN0IGFyciA9IHByb2plY3RzW2N1cnJlbnRQcm9qZWN0XS50YXNrc1t0YXNrLnRpdGxlXS5kdWVEYXRlLnNwbGl0KFwiLVwiKTtcbiAgICBpZiAoK3RvZGF5QXJyWzBdID4gK2FyclsxXSB8fCArdG9kYXlBcnJbMV0gPiArYXJyWzBdIHx8ICt0b2RheUFyclsyXSA+XG4gICAgICAgICthcnJbMl0pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuLypjb25zdCBwcm9qX2V4cGlyZUNoZWNrID0gKCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWxlY3RlZFwiKS50ZXh0Q29udGVudDtcbiAgICBpZiAoY3VycmVudFByb2plY3QgIT0gXCJIT01FXCIpIHtcbiAgICAgICAgY29uc3QgdG9kYXlBcnIgPSBmb3JtYXQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlXCIpLnZhbHVlQXNEYXRlKTtcbiAgICAgICAgY29uc3QgYXJyID0gcHJvamVjdHNbY3VycmVudFByb2plY3RdLmR1ZURhdGUuc3BsaXQoXCItXCIpO1xuICAgICAgICAvLyB5ZWFyIG1vbnRoIGRheVxuXG4gICAgICAgIGlmICgrdG9kYXlBcnJbMF0gPiArYXJyWzJdIHx8ICt0b2RheUFyclsxXSA+ICthcnJbMF0gfHwgK3RvZGF5QXJyWzJdID5cbiAgICAgICAgICAgICthcnJbMF0pIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG59ICovXG5cbmV4cG9ydCB7IGdldERhdGUsIGZvcm1hdERhdGUsIGV4cGlyZUNoZWNrLCAvKnByb2pfZXhwaXJlQ2hlY2sqLyB9OyIsImltcG9ydCB7IGV4cGlyZUNoZWNrIH0gZnJvbSBcIi4vZGF0ZVwiO1xuXG5leHBvcnQgY29uc3QgYWRkVGFza0QgPSAodGFzaykgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoYCR7dGFzay5pZH1gKTtcbiAgICBcbiAgICBpZiAoZXhwaXJlQ2hlY2sodGFzaykpIHtcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJleHBpcmVkXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGRpdi5jbGFzc0xpc3QucmVtb3ZlKFwiZXhwaXJlZFwiKTtcbiAgICB9XG5cbiAgICBjb25zdCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza3NcIik7XG4gICAgdGFza3MuYXBwZW5kQ2hpbGQoZGl2KTtcblxuXG59O1xuXG5leHBvcnQgY29uc3QgZXJhc2VUYXNrc0QgPSAoKSA9PiB7XG4gICAgY29uc3QgdGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tzXCIpO1xuICAgIHdoaWxlICh0YXNrcy5maXJzdENoaWxkKSB7XG4gICAgICAgIHRhc2tzLnJlbW92ZUNoaWxkKHRhc2tzLmxhc3RDaGlsZCk7XG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGVyYXNlVGFza0QgPSAoaWQpID0+IHtcbiAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7aWR9YCk7XG4gICAgdGFzay5yZW1vdmUoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRQcm9qZWN0RCA9IChwcm9qZWN0LCBpZCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJzaG9ydGN1dFwiKTtcbiAgICBkaXYuaWQgPSBpZDtcbiAgICBkaXYudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuXG4gICAgY29uc3Qgc2hvcnRjdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaG9ydGN1dHNcIik7XG4gICAgc2hvcnRjdXRzLmFwcGVuZChkaXYpO1xufTtcblxuLy8gRCBhdCB0aGUgZW5kIHJlcHJlc2VudHMgRE9NXG4iLCJpbXBvcnQgeyBjaGFuZ2VQcm9qZWN0RCwgY2hlY2tEdWVEYXRlIH0gZnJvbSAnLi91dGlsaXR5LmpzJztcbmltcG9ydCB7IG9uQ2xpY2tpbmdSUEIgfSBmcm9tICcuL3NldHVwUHJvamVjdC5qcydcbmltcG9ydCB7c2hvd0Zvcm1BbmRDb3ZlciwgYWRkVGFzaywgcmVzZXRGb3JtLCBhZGRQcm9qZWN0LCByZXNldENvbmZGb3JtLCBcbiAgICByZXNldFByb2pGb3JtIH0gZnJvbSAnLi9mb3Jtcy5qcyc7XG5cbi8vIGl0IHJlc2V0cyBldmVyeSB0aW1lIHdlYnNpdGUgcmVmcmVzaGVzIHNvIGR1cGxpY2F0aW9uIGJ1ZyBvY2N1cnMsXG4vLyBhbmQgaXQncyBtb3JlIGVmZmljaWVudCwgKGxpdHRsZSBiaXQgbG9sKVxuXG5jb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRUYXNrXCIpO1xuYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBzaG93Rm9ybUFuZENvdmVyKCk7XG59KTtcblxuLy8gdGhvdWdodCBpdCB3b3VsZCBlYXN5IHRvIHB1dCBhbGwgZm9ybSByZWxhdGVkIGNvZGUgdG8gdGhlIHN1Ym1pdCBidG4gbGlzdGVuZXJcbmNvbnN0IGdidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdyZWVuXCIpO1xuZ2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBhZGRUYXNrKCk7XG59KTtcblxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza0Zvcm1cIik7XG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgIGlmIChlLmNvZGUgPT0gXCJFbnRlclwiKSB7XG4gICAgICAgIGFkZFRhc2soKTtcbiAgICB9XG59KTtcblxuY29uc3QgcmJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVkXCIpO1xucmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICByZXNldEZvcm0oKTtcbn0pO1xuXG5jb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRQcm9qZWN0XCIpO1xuYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBwcm9qRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdEZvcm1cIilcbiAgICBwcm9qRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgY29uc3QgY292ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvdmVyXCIpO1xuICAgIGNvdmVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG59KTtcblxuY29uc3QgcHJval9nYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qX2dyZWVuXCIpO1xucHJval9nYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGFkZFByb2plY3QoKTtcbn0pO1xuXG5jb25zdCBwcm9qRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdEZvcm1cIik7XG5wcm9qRm9ybS5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgIGlmIChlLmNvZGUgPT0gXCJFbnRlclwiKSB7XG4gICAgICAgIGFkZFByb2plY3QoKTtcbiAgICB9XG59KVxuXG5jb25zdCBwcm9qX3JidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2pfcmVkXCIpO1xucHJval9yYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHJlc2V0UHJvakZvcm0oKTtcbn0pO1xuXG5jb25zdCBjb25mX2dyZWVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb25mX2dyZWVuXCIpO1xuY29uZl9ncmVlbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBvbkNsaWNraW5nUlBCKCk7XG4gICAgcmVzZXRDb25mRm9ybSgpO1xufSk7XG5cbmNvbnN0IGNvbmZfcmVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb25mX3JlZFwiKTtcbmNvbmZfcmVkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHJlc2V0Q29uZkZvcm0oKTtcbn0pXG5cbi8vIGFkZCBJRCB0byBlYWNoIHByb2plY3QgYW5kIHRoZW4gPz8/XG5leHBvcnQgY29uc3QgYWRkUHJvamVjdExpc3RlbmVyID0gKGlkKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2lkfWApO1xuXG4gICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgdGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RlZCcpO1xuICAgICAgICB0ZW1wLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IFwiMTAyNFwiKSB7XG4gICAgICAgICAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaWRlYmFyXCIpO1xuICAgICAgICAgICAgY29uc3QgbW9iaWxlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2JpbGVcIik7XG4gICAgICAgICAgICBzaWRlYmFyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIG1vYmlsZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJpbml0aWFsXCI7XG4gICAgICAgIH1cbiAgICAgICAgY2hhbmdlUHJvamVjdEQocHJvamVjdC50ZXh0Q29udGVudCk7XG4gICAgfSk7XG59XG5cbmFkZFByb2plY3RMaXN0ZW5lcihcIlByMFwiKTtcblxuLy8gbmF2aWdhdGUgY2FsZW5kZXIsIGxlZnQgYW5kIHJpZ2h0IGFycm93XG5jb25zdCBsZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbExlZnQnKTtcbmNvbnN0IHJpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbFJpZ2h0Jyk7XG5jb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkYXRlJyk7XG5sZWZ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlucHV0LnN0ZXBEb3duKCk7XG4gICAgY2hlY2tEdWVEYXRlKCk7XG59KTtcbnJpZ2h0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlucHV0LnN0ZXBVcCgpO1xuICAgIGNoZWNrRHVlRGF0ZSgpO1xufSk7XG4vLyBkYXRlIGlzIHBpY2tlZCBtYW51YWxseSBmcm9tIHRoZSBjYWxhbmRlciwgY2xpY2sgZG9lc24ndCB3b3JrXG5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJ3aGF0XCIpO1xuICAgIGNoZWNrRHVlRGF0ZSgpO1xufSkiLCJpbXBvcnQgeyBhZGRQcm9qZWN0RCwgYWRkVGFza0QgfSBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQgeyBzZXR1cFRhc2tEIH0gZnJvbSAnLi9zZXR1cFRhc2suanMnO1xuaW1wb3J0IHsgcHJvamVjdEZhY3RvcnksIHByb2plY3RzLCB0b2RvIH0gZnJvbSAnLi90b2RvLmpzJztcbmltcG9ydCB7IGZvcm1hdERhdGUsIGdldERhdGUgfSBmcm9tICcuL2RhdGUuanMnO1xuaW1wb3J0IHsgYWRkUHJvamVjdExpc3RlbmVyIH0gZnJvbSAnLi9ldmVudExpc3RlbmVycy5qcyc7XG5cblxuZXhwb3J0IGNvbnN0IGFkZFByb2plY3QgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdCA9IGdldFByb2plY3QoKTtcbiAgICBpZiAoIXByb2plY3QpIHtcbiAgICAgICAgYWxlcnQoXCJGYWlsdXJlLCBjYW4ndCByZXBlYXQgcHJvamVjdCBuYW1lXCIpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmVzZXRQcm9qRm9ybSgpO1xuICAgICAgICBwcm9qZWN0c1twcm9qZWN0LnRpdGxlXSA9IHByb2plY3Q7XG4gICAgICAgIHByb2plY3RzW3Byb2plY3QudGl0bGVdLnRhc2tzID0ge307XG4gICAgICAgIHByb2plY3RzW3Byb2plY3QudGl0bGVdLmlkID0gcHJvamVjdC5pZDtcblxuICAgICAgICBhZGRQcm9qZWN0RChwcm9qZWN0LCBwcm9qZWN0LmlkKTtcbiAgICAgICAgYWRkUHJvamVjdExpc3RlbmVyKHByb2plY3QuaWQpO1xuXG5cbiAgICAgICAgLy8gc2F2ZSB0byBsb2NhbCB3aGVuIHlvdSBhZGQgdGFzayBvciBwcm9qZWN0XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG4gICAgfVxufVxuXG5cblxuZXhwb3J0IGNvbnN0IGFkZFRhc2sgPSAoKSA9PiB7XG4gICAgLy8gcnVuIG9ubHkgaWYgbm90IGVkaXRpbmcsIHdlIGhhdmUgMiBldmVudCBsaXN0bmVycyBvbiBvbmUgYnV0dG9uXG4gICAgLy8gc28gdGhpcyBmb3JjZXMgdGhlIG90aGVyIG9uZSB0byB3b3JrIGFsb25lLCB3aGljaCBpcyB3aGF0IHdlIHdhbnRcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VsZWN0ZWRcIikudGV4dENvbnRlbnQ7XG4gICAgLy8gYnVncyBvY2N1ciBpZiBmbGFnIGlzbid0IHByZXNlbnQsIHNpbmNlIGFmdGVyIEkgYW0gdXNpbmcgdHdvXG4gICAgLy8gZXZlbnQgbGlzdG5lcnMgZm9yIG9uZSBidXR0b25cbiAgICBjb25zdCB0YXNrID0gZ2V0VGFzaygpO1xuICAgIGlmICh0YXNrKSB7XG4gICAgICAgIHJlc2V0Rm9ybSgpO1xuICAgICAgICAvLyBzZXQgZGVmYXVsdCBkYXRlLCBzbyBNTS1ERC1ZWVlZIGlzIG5vdCBzaG93biBvbiBmb3JtPz8/Pz9cbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlRGF0ZVwiKTtcbiAgICAgICAgZHVlRGF0ZS52YWx1ZSA9IGdldERhdGUoKTtcblxuICAgICAgICAvLyBzZXR1cCB0YXNrXG4gICAgICAgIHByb2plY3RzW2N1cnJlbnRQcm9qZWN0XS50YXNrc1t0YXNrLnRpdGxlXSA9IHRhc2s7XG4gICAgICAgIGFkZFRhc2tEKHRhc2ssIGN1cnJlbnRQcm9qZWN0KTtcbiAgICAgICAgc2V0dXBUYXNrRCh0YXNrKTtcblxuICAgICAgICBjb25zdCByYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZWRcIik7XG4gICAgICAgIHJidXR0b24uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuXG4gICAgICAgIGNvbnN0IGdidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdyZWVuXCIpO1xuICAgICAgICBnYnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiKDQ3LCAyNTUsIDQ3KVwiO1xuICAgICAgICBnYnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGRcIjtcblxuICAgICAgICAvLyBzYXZlIHRvIGxvY2FsIHdoZW4geW91IGFkZCB0YXNrIG9yIHByb2plY3RcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd0Zvcm1BbmRDb3ZlcigpIHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrRm9ybVwiKTtcbiAgICBjb25zdCBjb3ZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY292ZXJcIik7XG4gICAgY292ZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICBmb3JtLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0Rm9ybSgpIHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrRm9ybVwiKTtcbiAgICBjb25zdCBjb3ZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY292ZXJcIik7XG4gICAgZm9ybS5yZXNldCgpO1xuICAgIGZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGNvdmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuICAgIC8vIHRoaXMgaXMgYWxzbyBkZWZhdWx0LCBwcmVzZW50IGluIGRhdGUuanMhXG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlRGF0ZVwiKTtcbiAgICBkdWVEYXRlLnZhbHVlID0gZ2V0RGF0ZSgpO1xufVxuXG4vLyBjb3VsZG4ndCBnZXQgc3VibWl0IHR5cGUgYnV0dG9uIHRvIHdvcmssIHNvIG5lZWRlZCBhIGZ1bmN0aW9uIHRvIGdldCB2YWx1ZXNcbi8vIGZyb20gdGhlIGZvcm0sIHRoaXMgaXMgaXRcbmZ1bmN0aW9uIGdldFRhc2soKSB7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlXCIpLnZhbHVlO1xuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWxlY3RlZFwiKS50ZXh0Q29udGVudDtcbiAgICBpZiAoIXByb2plY3RzW2N1cnJlbnRQcm9qZWN0XS50YXNrc1t0aXRsZV0pIHtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uXCIpLnZhbHVlO1xuICAgICAgICBsZXQgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlRGF0ZVwiKS52YWx1ZTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByaW9yaXR5XCIpLnZhbHVlO1xuXG4gICAgICAgIGlmICghZHVlRGF0ZSkge1xuICAgICAgICAgICAgZHVlRGF0ZSA9IGdldERhdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpZCA9IDA7XG4gICAgICAgIC8vIGVhc2llc3Qgd2F5IHRvIHByZXZlbnQgZHVwbGljYXRpb24gYnVnID0+IDIgdGFza3MgMSBpZFxuICAgICAgICBmb3IgKGxldCBlbSBpbiBwcm9qZWN0c1tjdXJyZW50UHJvamVjdF0udGFza3MpIHtcbiAgICAgICAgICAgIGlkID0gTWF0aC5tYXgoaWQsXG4gICAgICAgICAgICAgICAgTnVtYmVyKHByb2plY3RzW2N1cnJlbnRQcm9qZWN0XS50YXNrc1tlbV0uaWRcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoXCJ0YXNrXCIsIFwiXCIpKSArIDEpO1xuICAgICAgICB9XG5cblxuXG5cbiAgICAgICAgY29uc3QgdGFzayA9IHRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBmb3JtYXREYXRlKGR1ZURhdGUpLCBwcmlvcml0eSwgXCJ0YXNrXCIgK1xuICAgICAgICAgICAgaWQudG9TdHJpbmcoKSk7XG4gICAgICAgIHJldHVybiB0YXNrO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KFwiRmFpbHVyZSwgdGFzayB3aXRoIHRoZSBzYW1lIHRpdGxlIGFscmVhZHkgZXhpc3RzXCIpXG4gICAgfVxufVxuXG4vLyBzaW1pbGFyIHByb2JsZW0gYXMgdGFzayBpZFxuLy9sZXQgcHJvamVjdElEID0gT2JqZWN0LmtleXMocHJvamVjdHMpLmxlbmd0aDtcblxuLy8gYWdhaW50LCBuZWVkZWQgYSB3YXkgdG8gZ2V0IHZhbHVlcyBmcm9tIHRoZSBmb3JtXG5mdW5jdGlvbiBnZXRQcm9qZWN0KCkge1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qX3RpdGxlXCIpLnZhbHVlO1xuICAgIGlmICghcHJvamVjdHNbdGl0bGVdKSB7XG4gICAgICAgIC8vY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJval9kdWVEYXRlXCIpLnZhbHVlO1xuXG4gICAgICAgIGxldCBwcm9qZWN0SUQgPSAwO1xuICAgICAgICAvLyBlYXNpZXN0IHdheSB0byBwcmV2ZW50IGR1cGxpY2F0aW9uIGJ1ZyA9PiAyIHByb2plY3RzIDEgaWRcbiAgICAgICAgZm9yIChsZXQgZW0gaW4gcHJvamVjdHMpIHtcbiAgICAgICAgICAgIHByb2plY3RJRCA9IE1hdGgubWF4KHByb2plY3RJRCxcbiAgICAgICAgICAgICAgICBOdW1iZXIocHJvamVjdHNbZW1dLmlkLnJlcGxhY2UoXCJQclwiLCBcIlwiKSkgKyAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHByb2ogPSBwcm9qZWN0RmFjdG9yeSh0aXRsZSwgLypkdWVEYXRlLCovIFwiUHJcIiArIHByb2plY3RJRC50b1N0cmluZygpKTtcbiAgICAgICAgcmV0dXJuIHByb2o7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNldFByb2pGb3JtKCkge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RGb3JtXCIpO1xuICAgIGNvbnN0IGNvdmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb3ZlclwiKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2pfdGl0bGVcIikudmFsdWUgPSBcIlwiO1xuICAgIC8vZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qX2R1ZURhdGVcIikudmFsdWUgPSBcIlwiO1xuICAgIGZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGNvdmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuICAgIC8vIHRoaXMgaXMgYWxzbyBkZWZhdWx0LCBwcmVzZW50IGluIGRhdGUuanMhXG4gICAgLy9jb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qX2R1ZURhdGVcIik7XG4gICAgLy8gZHVlRGF0ZS52YWx1ZSA9IGdldERhdGUoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0Q29uZkZvcm0oKSB7XG4gICAgY29uc3QgY29uZkZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbmZpcm1hdGlvbkZvcm1cIik7XG4gICAgY29uZkZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGNvbnN0IGNvdmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb3ZlclwiKTtcbiAgICBjb3Zlci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93Q29uZmlybWF0aW9uRm9ybSgpIHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb25maXJtYXRpb25Gb3JtXCIpO1xuICAgIGZvcm0uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIGNvbnN0IGNvdmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb3ZlclwiKTtcbiAgICBjb3Zlci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xufSIsImNvbnN0IG1vYmlsZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9iaWxlXCIpO1xubW9iaWxlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpZGViYXJcIik7XG4gICAgaWYgKHNpZGViYXIuc3R5bGUuZGlzcGxheSA9PSBcImZsZXhcIikge1xuICAgICAgICBzaWRlYmFyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzaWRlYmFyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgbW9iaWxlQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG59KTtcblxuY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2lkZWJhclwiKTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gXCIxMTAwXCIpIHtcbiAgICAgICAgc2lkZWJhci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgfVxuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IFwiMTEwMFwiKSB7XG4gICAgICAgIHNpZGViYXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBtb2JpbGVCdG4uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIH1cbiAgIC8vIC8vaWYgKHNpZGViYXIuc3R5bGUuZGlzcGxheSAhPSBcImZsZXhcIikge1xuICAgICAgLy8gIG1vYmlsZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgLy99XG59KVxuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuY29udGVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IFwiMTEwMFwiKSB7XG4gICAgICAgIHNpZGViYXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBtb2JpbGVCdG4uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIH1cbn0pXG5cbi8vIFRoZXJlIG1pZ2h0IGJlIGEgbW9yZSBlZmZpY2llbnQgd2F5LiBUaGlzIHNlZW1zIHRvIHdvcmsgdGhvdWdoLiIsImltcG9ydCB7IHNob3dDb25maXJtYXRpb25Gb3JtIH0gZnJvbSAnLi9mb3Jtcy5qcyc7XG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gJy4vdG9kby5qcyc7XG5pbXBvcnQgeyBjaGFuZ2VQcm9qZWN0RCB9IGZyb20gJy4vdXRpbGl0eS5qcyc7XG5cbi8vIGZvciBub3cgbWFpbmx5IGp1c3QgcmVtb3ZlIHByb2plY3QgYnV0dG9uXG5cbi8vIFJQQiAtIHJlbW92ZSBwcm9qZWN0IGJ1dHRvblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFJQQigpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlclwiKTtcbiAgICBpZiAoaGVhZGVyLmxhc3RDaGlsZC50ZXh0Q29udGVudCAhPSBcIlhcIikge1xuICAgICAgICBjb25zdCBkZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBkZWxCdG4udGV4dENvbnRlbnQgPSBcIlhcIjtcbiAgICAgICAgZGVsQnRuLmNsYXNzTGlzdC5hZGQoXCJSUEJcIik7XG4gICAgICAgIGRlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHNob3dDb25maXJtYXRpb25Gb3JtKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoZGVsQnRuKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVSUEIoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJcIik7XG4gICAgY29uc3QgcnBiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5SUEJcIik7XG4gICAgaWYgKHJwYilcbiAgICBoZWFkZXIucmVtb3ZlQ2hpbGQocnBiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uQ2xpY2tpbmdSUEIoKSB7XG4gICAgLy8gZmlyc3QgY2hlY2sgaWYgeW91IGFjdHVhbGx5IHdhbnQgdG8gZGVsZXRlXG4gICAgLy8gZ2V0IGlkLCBkZWxldGUgb24gY29udGVudCBhbmQgdGhlbiBzaWRlYmFyIHVzaW5nIGlkLiByZXR1cm4gdG8gaG9tZVxuICAgIGNvbnN0IHByb2plY3ROYW1lMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VsZWN0ZWRcIikudGV4dENvbnRlbnQ7XG4gICAgY29uc3QgcHJvamVjdElEID0gcHJvamVjdHNbcHJvamVjdE5hbWUyXS5pZDtcbiAgICBkZWxldGUgcHJvamVjdHNbcHJvamVjdE5hbWUyXTtcbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7cHJvamVjdElEfWApXG4gICAgcHJvamVjdC5yZW1vdmUoKTtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0cyk7XG5cbiAgICBjb25zdCBob21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNQcjBcIik7XG4gICAgaG9tZS5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgY2hhbmdlUHJvamVjdEQoXCJIT01FXCIpO1xuXG4gICAgLy8gc2F2ZSBiZWNhdXNlIHlvdSByZW1vdmVkIGEgcHJvamVjdFxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG59IiwiaW1wb3J0IHsgZXJhc2VUYXNrRCB9IGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCB7IHNob3dGb3JtQW5kQ292ZXIgfSBmcm9tICcuL2Zvcm1zLmpzJztcbmltcG9ydCB7IHByb2plY3RzIH0gZnJvbSAnLi90b2RvLmpzJztcbmltcG9ydCB7IGdldFRpdGxlLCBkZWxldGVUYXNrIH0gZnJvbSAnLi91dGlsaXR5LmpzJ1xuXG5cbi8vIFwiQ29udHJvbFwiIGZ1bmN0aW9uXG5leHBvcnQgY29uc3Qgc2V0dXBUYXNrRCA9ICh0YXNrKSA9PiB7XG4gICAgZG9VSSh0YXNrKTtcbiAgICBzZXR1cEVkaXRCdXR0b24odGFzayk7XG4gICAgc2V0dXBEZWxldGVCdXR0b24odGFzayk7XG59O1xuXG5jb25zdCBkb1VJID0gKHdvcmtpbmdfdGFzaykgPT4ge1xuICAgIGNvbnN0IHRhc2tOb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7d29ya2luZ190YXNrLmlkfWApO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gd29ya2luZ190YXNrLnRpdGxlO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0YXNrX3RpdGxlXCIpO1xuICAgIHRhc2tOb2RlLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRlc2MudGV4dENvbnRlbnQgPSB3b3JraW5nX3Rhc2suZGVzY3JpcHRpb247XG4gICAgZGVzYy5jbGFzc0xpc3QuYWRkKFwidGFza19kZXNjXCIpO1xuICAgIHRhc2tOb2RlLmFwcGVuZENoaWxkKGRlc2MpO1xuXG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IFwiRHVlIERhdGU6IFwiICsgd29ya2luZ190YXNrLmR1ZURhdGU7XG4gICAgZHVlRGF0ZS5jbGFzc0xpc3QuYWRkKFwidGFza19kdWVEYXRlXCIpO1xuICAgIHRhc2tOb2RlLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuXG4gICAgdGFza05vZGUuY2xhc3NMaXN0LmFkZChgJHt3b3JraW5nX3Rhc2sucHJpb3JpdHl9YClcbn07XG5cblxuY29uc3Qgc2V0dXBEZWxldGVCdXR0b24gPSAod29ya2luZ190YXNrKSA9PiB7XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnRuLnRleHRDb250ZW50ID0gXCJYXCI7XG5cbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt3b3JraW5nX3Rhc2suaWR9IC50YXNrQnV0dG9uc2ApO1xuICAgIGRpdi5hcHBlbmRDaGlsZChidG4pO1xuXG4gICAgLy8gd2UgbmVlZCB0byBvYnRhaW4gdGFzayBvYmplY3QgZnJvbSB0aGUgYnV0dG9uIGl0c2VsZlxuICAgIC8vIGJlY2F1c2UgaWYgd2UgdXNlIGFueSB2YXJpYWJsZSBpdCB3b24ndCBkZWxldGUgcHJvcGVybHlcbiAgICAvLyB0aGlzIGlzIGRvbmUgdmlhIG1hdGNoaW5nIGJ0biBjbGFzcyBuYW1lIHdoaWNoIGlzIGVxdWFsIHRvIHRoZSBpZFxuICAgIC8vIG9mIHRoZSB0YXNrIHRoYXQgd2UgYXJlIHNlZWtpbmcgaW4gYSBwcm9qZWN0cyBvYmplY3RcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCB0YXNrSUQgPSBbLi4uZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNsYXNzTGlzdF1bMF07XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZ2V0VGl0bGUodGFza0lEKTtcbiAgICAgICAgY29uc3QgY3VycmVudFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdGVkXCIpLnRleHRDb250ZW50O1xuICAgICAgICBkZWxldGVUYXNrKGN1cnJlbnRQcm9qZWN0LCBwcm9qZWN0c1tjdXJyZW50UHJvamVjdF0udGFza3NbdGl0bGVdKTtcbiAgICAgICAgZXJhc2VUYXNrRCh0YXNrSUQpO1xuICAgIH0pO1xufTtcblxuY29uc3Qgc2V0dXBFZGl0QnV0dG9uID0gKHdvcmtpbmdfdGFzaykgPT4ge1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ0bi50ZXh0Q29udGVudCA9IFwiRWRpdFwiO1xuXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChcInRhc2tCdXR0b25zXCIpO1xuXG4gICAgY29uc3QgdGFza05vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt3b3JraW5nX3Rhc2suaWR9YCk7XG4gICAgdGFza05vZGUuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoYnRuKTtcblxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIHNob3dGb3JtQW5kQ292ZXIoKTtcbiAgICAgICAgc2V0dXBFZGl0Rm9ybShcbiAgICAgICAgICAgIGdldFRpdGxlKFsuLi5lLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2xhc3NMaXN0XVswXSkpO1xuICAgIH0pO1xufTtcblxuZnVuY3Rpb24gc2V0dXBFZGl0Rm9ybSh0aXRsZSkge1xuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWxlY3RlZFwiKS50ZXh0Q29udGVudDtcbiAgICAvLyB0YXNrID0gVEhFIE9ORSBCRUlORyBDTElDS0VEXG4gICAgY29uc3QgdGFzayA9IHByb2plY3RzW2N1cnJlbnRQcm9qZWN0XS50YXNrc1t0aXRsZV07XG5cbiAgICAvLyBmaWxsIHRoZSBmb3JtIGNvcnJlY3RseVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVcIikudmFsdWUgPSB0YXNrLnRpdGxlO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb25cIikudmFsdWUgPSB0YXNrLmRlc2NyaXB0aW9uO1xuICAgIGxldCBhcnIgPSB0YXNrLmR1ZURhdGUuc3BsaXQoXCItXCIpO1xuICAgIGFyciA9IFthcnJbMl0sIGFyclswXSwgYXJyWzFdXS5qb2luKFwiLVwiKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZURhdGVcIikudmFsdWUgPSBhcnI7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmlvcml0eVwiKS52YWx1ZSA9IHRhc2sucHJpb3JpdHk7XG5cbiAgICAvLyBkZWxldGUsIGFuZCBsZXQgdGhlIGdyZWVuIGJ1dHRvbiBidWlsZCBpdCBmb3IgeW91LCBubyBpbiB0aGlzIGNhc2VcbiAgICAvLyBzaG91bGQgaGF2ZSBhIHNwZWNpYWwgZnVuY3Rpb25cbiAgICBlcmFzZVRhc2tEKHByb2plY3RzW2N1cnJlbnRQcm9qZWN0XS50YXNrc1t0aXRsZV0uaWQpXG4gICAgZGVsZXRlIHByb2plY3RzW2N1cnJlbnRQcm9qZWN0XS50YXNrc1t0aXRsZV07XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xuXG4gICAgY29uc3QgcmJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVkXCIpO1xuICAgIHJidXR0b24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4gICAgY29uc3QgZ2J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ3JlZW5cIik7XG4gICAgZ2J1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInllbGxvd1wiO1xuICAgIGdidXR0b24udGV4dENvbnRlbnQgPSBcIkVkaXRcIlxufSIsImltcG9ydCB7IGV4cGlyZUNoZWNrIH0gZnJvbSAnLi9kYXRlLmpzJztcblxuZnVuY3Rpb24gc3RvcmFnZUF2YWlsYWJsZSh0eXBlKSB7XG4gICAgbGV0IHN0b3JhZ2U7XG4gICAgdHJ5IHtcbiAgICAgICAgc3RvcmFnZSA9IHdpbmRvd1t0eXBlXTtcbiAgICAgICAgY29uc3QgeCA9ICdfX3N0b3JhZ2VfdGVzdF9fJztcbiAgICAgICAgc3RvcmFnZS5zZXRJdGVtKHgsIHgpO1xuICAgICAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oeCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZSBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbiAmJiAoXG4gICAgICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAgICAgICBlLmNvZGUgPT09IDIyIHx8XG4gICAgICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgICAgICBlLmNvZGUgPT09IDEwMTQgfHxcbiAgICAgICAgICAgIC8vIHRlc3QgbmFtZSBmaWVsZCB0b28sIGJlY2F1c2UgY29kZSBtaWdodCBub3QgYmUgcHJlc2VudFxuICAgICAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICAgICAgZS5uYW1lID09PSAnUXVvdGFFeGNlZWRlZEVycm9yJyB8fFxuICAgICAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICAgICAgZS5uYW1lID09PSAnTlNfRVJST1JfRE9NX1FVT1RBX1JFQUNIRUQnKSAmJlxuICAgICAgICAgICAgLy8gYWNrbm93bGVkZ2UgUXVvdGFFeGNlZWRlZEVycm9yIG9ubHkgaWYgdGhlcmUncyBzb21ldGhpbmcgYWxyZWFkeSBzdG9yZWRcbiAgICAgICAgICAgIChzdG9yYWdlICYmIHN0b3JhZ2UubGVuZ3RoICE9PSAwKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBwcm9qZWN0cyA9IHtcbiAgICBIT01FOiB7XG4gICAgICAgIHRhc2tzOiB7XG4gICAgICAgIH0sXG4gICAgICAgIGlkOiBcIlByMFwiXG4gICAgfSxcbn07XG5cbmlmIChzdG9yYWdlQXZhaWxhYmxlKSB7XG4gICAgdmFyIHJldHJpZXZlZE9iamVjdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpO1xuICAgIHJldHJpZXZlZE9iamVjdCA9IEpTT04ucGFyc2UocmV0cmlldmVkT2JqZWN0KTtcbiAgICBmb3IgKGxldCBlbSBpbiByZXRyaWV2ZWRPYmplY3QpIHtcbiAgICAgICAgcHJvamVjdHNbZW1dID0gcmV0cmlldmVkT2JqZWN0W2VtXTtcbiAgICB9XG4gICAgY29uc29sZS5sb2cocHJvamVjdHMpO1xuICAgIC8vcHJvamVjdHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKTtcbn1cblxuZXhwb3J0IGNvbnN0IHRvZG8gPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgaWQpID0+IHtcbiAgICByZXR1cm4geyB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBpZCB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHByb2plY3RGYWN0b3J5ID0gKHRpdGxlLyosIGR1ZURhdGUqLywgaWQpID0+IHtcbiAgICByZXR1cm4geyB0aXRsZS8qLCBkdWVEYXRlKi8sIGlkIH07XG59O1xuXG4vLyB0ZW1wIiwiaW1wb3J0IHsgZXJhc2VUYXNrc0QsIGFkZFRhc2tELCBhZGRQcm9qZWN0RCB9IGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCB7IHNldHVwVGFza0QgfSBmcm9tICcuL3NldHVwVGFzay5qcyc7XG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gJy4vdG9kby5qcyc7XG5pbXBvcnQgeyBhZGRQcm9qZWN0TGlzdGVuZXIgfSBmcm9tICcuL2V2ZW50TGlzdGVuZXJzLmpzJztcbmltcG9ydCB7IGFkZFJQQiwgcmVtb3ZlUlBCIH0gZnJvbSAnLi9zZXR1cFByb2plY3QnO1xuaW1wb3J0IHsgZXhwaXJlQ2hlY2sgfSBmcm9tICcuL2RhdGUuanMnXG5cblxuLy8gZmVsdCBsaWtlIHRoaXMgZGVzZXJ2ZXMgYSBzZXBlcmF0ZSBtb2R1bGUsIHNpbmNlIGl0J3Mgbm90IHJlYWxseSBET00gbWFuaXAuXG5leHBvcnQgY29uc3QgY2hhbmdlUHJvamVjdEQgPSAocHJvamVjdE5hbWUpID0+IHtcbiAgICBlcmFzZVRhc2tzRCgpO1xuICAgIGlmIChwcm9qZWN0c1twcm9qZWN0TmFtZV0udGFza3MgIT0ge30pIHtcbiAgICAgICAgZm9yIChsZXQgZW0gaW4gcHJvamVjdHNbcHJvamVjdE5hbWVdLnRhc2tzKSB7XG4gICAgICAgICAgICBhZGRUYXNrRChwcm9qZWN0c1twcm9qZWN0TmFtZV0udGFza3NbZW1dKTtcbiAgICAgICAgICAgIHNldHVwVGFza0QocHJvamVjdHNbcHJvamVjdE5hbWVdLnRhc2tzW2VtXSwgcHJvamVjdE5hbWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChwcm9qZWN0TmFtZSAhPSBcIkhPTUVcIikge1xuICAgICAgICBhZGRSUEIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZW1vdmVSUEIoKTtcbiAgICB9XG59O1xuXG5cbi8vIGxvYWQgYWxsIHByb2plY3RzIGFuZCB0YXNrcyBmcm9tIHRoZSBsb2NhbCBzdG9yYWdlXG5leHBvcnQgY29uc3QgbG9hZEZyb21TdG9yYWdlID0gKCkgPT4ge1xuICAgIGZvciAobGV0IHByb2plY3QgaW4gcHJvamVjdHMpIHtcbiAgICAgICAgaWYgKHByb2plY3QgIT0gXCJIT01FXCIpIHtcbiAgICAgICAgICAgIGFkZFByb2plY3REKHByb2plY3RzW3Byb2plY3RdLCBwcm9qZWN0c1twcm9qZWN0XS5pZCk7XG4gICAgICAgICAgICBhZGRQcm9qZWN0TGlzdGVuZXIocHJvamVjdHNbcHJvamVjdF0uaWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChsZXQgdGFzayBpbiBwcm9qZWN0cy5IT01FLnRhc2tzKSB7XG4gICAgICAgIGFkZFRhc2tEKHByb2plY3RzLkhPTUUudGFza3NbdGFza10pO1xuICAgICAgICBzZXR1cFRhc2tEKHByb2plY3RzLkhPTUUudGFza3NbdGFza10sIFwiSE9NRVwiKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tEdWVEYXRlKCkge1xuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWxlY3RlZFwiKS50ZXh0Q29udGVudDtcbiAgICBmb3IgKGxldCBlbSBpbiBwcm9qZWN0c1tjdXJyZW50UHJvamVjdF0udGFza3MpIHtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7cHJvamVjdHNbY3VycmVudFByb2plY3RdLnRhc2tzW2VtXS5pZFxuICAgICAgICAgICAgfWApO1xuICAgICAgICBpZiAoZXhwaXJlQ2hlY2socHJvamVjdHNbY3VycmVudFByb2plY3RdLnRhc2tzW2VtXSkpIHtcbiAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwiZXhwaXJlZFwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QucmVtb3ZlKFwiZXhwaXJlZFwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKlxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gICAgaWYgKHByb2pfZXhwaXJlQ2hlY2soKSkge1xuICAgICAgICBjb250ZW50LnN0eWxlLmJvcmRlclRvcCA9IFwiMXZoIHJlZCBzb2xpZFwiO1xuICAgICAgICBjb250ZW50LnN0eWxlLmJvcmRlckxlZnQgPSBcIjF2aCByZWQgc29saWRcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb250ZW50LnN0eWxlLmJvcmRlciA9IFwibm9uZVwiO1xuICAgIH0gKi9cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRpdGxlKHRhc2tJRCkge1xuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWxlY3RlZFwiKS50ZXh0Q29udGVudDtcbiAgICBsZXQgdGl0bGU7XG4gICAgZm9yIChsZXQgZW0gaW4gcHJvamVjdHNbY3VycmVudFByb2plY3RdLnRhc2tzKSB7XG4gICAgICAgIGlmIChwcm9qZWN0c1tjdXJyZW50UHJvamVjdF0udGFza3NbZW1dLmlkID09IHRhc2tJRCkge1xuICAgICAgICAgICAgdGl0bGUgPSBwcm9qZWN0c1tjdXJyZW50UHJvamVjdF0udGFza3NbZW1dLnRpdGxlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aXRsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVRhc2socHJvamVjdCwgdGFzaykge1xuICAgIGNvbnNvbGUubG9nKHByb2plY3QpO1xuICAgIGRlbGV0ZSBwcm9qZWN0c1twcm9qZWN0XS50YXNrc1t0YXNrLnRpdGxlXTtcbiAgICAvLyB3ZSBhcmUgYWN0dWFsbHkgZGVsZXRpbmcsIG5vdCBqdXN0IGVyYXNpbmcgZnJvbSBzY3JlZW4hISFcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0ICcuL2V2ZW50TGlzdGVuZXJzJztcbmltcG9ydCAnLi9kYXRlJztcbmltcG9ydCAnLi9tb2JpbGUnO1xuaW1wb3J0IHsgbG9hZEZyb21TdG9yYWdlIH0gZnJvbSAnLi91dGlsaXR5JztcblxubG9hZEZyb21TdG9yYWdlKCk7XG4vKlxuICAgIFRPRE86XG4gICAgLSBDb25maWd1cmUgZGF0ZXMgcHJvcGVybHlcbiAgICAgICAgVHdvIHR5cGVzIG9mIHRhc2tzOlxuICAgICAgICAgICAgMS4gU29tZXRoaW5nIHRoYXQgbmVlZHMgdG8gYmUgZG9uZSBvbiBhIHNwZWNpZmljIGRheS4gSXQgY2FuIGhhdmUgYVxuICAgICAgICAgICAgICAgIGR1ZURhdGUvZHVlSG91ciwgYnV0IGl0J3Mgb3B0aW9uYWwuIEl0IG9ubHkgc2hvd3Mgb24gb25lIGRheVxuICAgICAgICAgICAgMi4gU29tZXRoaW5nIHRoYXQgbmVlZHMgdG8gYmUgZG9uZSB0aWxsIGEgc3BlY2lmaWVkIGR1ZURhdGUuIFNvIGl0XG4gICAgICAgICAgICAgICAgc2hvd3MgZXZlcnkgZGF5IHVudGlsIHRoZSBkdWVEYXRlLiBFeHBpcmVkIHNlY3Rpb24gbWlnaHQgYmUgXG4gICAgICAgICAgICAgICAgb2YgdXNlLlxuXG4gICAgICAgICAgICBJZGVhOlxuICAgICAgICAgICAgQWx3YXlzIHNob3cgYWxsIHRoYXQgY2FuIGJlIHNob3duLiBJZiBpdCBoYXBwZW5zIHRoYXQgb25lIG9mIHRoZW1cbiAgICAgICAgICAgIGV4cGlyZWQgc2ltcGx5IG5lZG90ZSBzbyB1c2luZyByZWQgYm9yZGVyIG9yIChleHBpcmVkKSB0YWcuXG4gICAgICAgICAgICBJdCBjYW4gYmUgc2hvd24gaWYgaXRzIHN0YXJ0IGRheSBpcyB0b2RheSBvciBlYXJsaWVyLiAtLy8vLVxuXG5cblxuICAgIC0gQWRkIGEgZm9ybSBmb3IgdXNlciBpbnB1dCAtLy8vLVxuICAgIC0gVGFzayBjaGFuZ2VzOlxuICAgICAgICAgICAgMSkgU3R5bGUgY2hhbmdlczogUmVkbyB0YXNrIHNxdWFyZXMgLS8vLy0sIG1heWJlIG5vdFxuICAgICAgICAgICAgMikgVGFzayBkZXNjcmlwdGlvbi9lZGl0IHN5c3RlbSAtLy8vLVxuICAgICAgICAgICAgMykgTWFrZSBwcmlvcml0ZXMgbWF0dGVyLCBib3JkZXIgY29sb3IgLS8vLy1cbiAgICAtIEZJWCByZW1vdmUgYnV0dG9uLCBuYW1lbHkgd2hlbiB5b3UgZG9uJ3QgaW5wdXQgYW55dGhpbmcgaW4gdGhlIGZvcm1cbiAgICAgICAgbXVsdGlwbGUgdGFza3MgYXJlIG1hZGUgZXZlbnQgdGhvdWdoIHRoZXJlIGlzIG9ubHkgb25lIHNhdmVkIGluIHRoZSBcbiAgICAgICAgb2JqZWN0LiBpdCBzaG93cyBjb3JyZWN0bHkgYWZ0ZXIgcmVmcmVzaCAtLy8vLVxuICAgIC0gRklYOiBwcmV2ZW50IGZyb20gY2hhbmdpbmcgcHJvamVjdHMgd2hlbiB0aGUgZm9ybSBpcyBvcGVuZWQsXG4gICAgICAgIGNvbnNpZGVyIGFkZGluZyBhIGNvdmVyIGp1c3QgbGlrZSBpbiB0aGUgbGlicmFyeSBwcm9qZWN0IC0vLy8tXG4gICAgLSBGSVg6IHByb2plY3Qvc2hvcnRjdXQgbmFtZSBsZXR0ZXJzIGdvaW5nIHRvIG5ldyBsaW5lLCBpbnN0ZWFkIG9ubHkgd29yZHNcbiAgICAgICAgLS8vLy0gYnV0IGNhbid0IGZpeCBsb25nIG5hbWVzLCBtYXliZSBmaW5kIGEgd2F5IHRvIGFkZCBcIi1cIiBhdCBlbmQgd2hlblxuICAgICAgICBicmVha2luZ1xuICAgIC0gQWRkIExvY2FsIHN0b3JhZ2UgLS8vLy1cbiAgICAtIEFkZCBhIGNvbmZpcm1hdGlvbiBmb3JtIHdoZW4gYXR0ZW1wdGluZyB0byBkZWxldGUgYSBwcm9qZWN0IC0vLy8tXG4gICAgLSBBZGQgbWVkaWEgcXVlcmllc1xuICAgIC0gY2hhbmdlIHByb2plY3RJZCBhbmQgaWQgdG8gY2FsY3VsYXRlIGlkIGJhc2VkIG9uIHdoYXQgaXMgdGhlIGJpZ2dlc3QgaWRcbiAgICAgICAgcHJlc2VudCBvbiB0aGUgY3VycmVudCBwcm9qZWN0L3Byb2plY3RzIGFuZCB0aGVuIGFkZCAxLCB0aGlzIHdheVxuICAgICAgICBpdCBpcyBub3QgYmFzZWQgb24gbGVuZ3RoIGFuZCBkdXBlIGJ1Z3MgZG8gbm90IGFwcGVhciAtLy8vLVxuICAgIC0gRml4IGRhdGVzIGZvciBlZGl0aW5nISAtLy8vLVxuICAgIC0gRG8gc29tZXRoaW5nIHdpdGggcHJvamVjdCBkYXRlcywgbWF5YmUgY29udGVudCBib3JkZXIgdG8gc2lnbmlmeSB0aGUgbGF0ZVxuICAgICAgICBwcm9qZWN0IC0vLy8tXG4gICAgLSBNYWtlIGEgcmVmcmVzaCBmdW5jdGlvbiwgdGhhdCByZWxvYWRzLCBtYXliZSBqdXN0IGNoYW5nZVByb2plY3Qgc28geW91XG4gICAgICAgIGRvbid0IGhhdmUgdG8gbG9jYXRpb24ucmVsb2FkKClcbiAgICAtIFRleHRBcmVhIGV4cGFuZGluZyBEOiAtLy8vLVxuICAgIC0gY29uc2lkZXIgbW9yZSBjb2xzIGFuZCByb3cgZm9yIFRleHRBcmVhIC0vLy8tXG4gICAgLSBSZXRoaW5rIHRoZSBuZWVkIGZvciBkdWVEYXRlIGluIHByb2plY3QsIEkgdGhpbmsgbm90IG5lZWRlZCEhIC0vLy8tXG4gICAgLSBwcmV2ZW50IHRpdGxlIG5hbWUgZHVwbGljYXRpb24gb24gYWRkaW5nIHRhc2ssIHRoZSBmb3JtIGdvZXMgYXdheSBmb3Igc29tZVxuICAgICAgICByZWFzb24gLS8vLy1cbiAgICAtIGdob3N0IHRhc2sgYXBwZWFyaW5nOiBidWcgLS8vLy1cbiAgICAtIG1ha2UgcmVkIGJ1dHRvbiByZWNvdmVyIHRoZSB0YXNrLCB5b3UgaGF2ZSBhbGwgdGhlIGRhdGEgbmVlZGVkIGluIHRoZSBmb3JtXG4gICAgICAgICwgaW5zdGVhZCByZXdvcmtlZCB0byBpbmNsdWRlIG9ubHkgZWRpdCBidXR0b24gLS8vLy1cbiAgICAtIGFkZCBrZXliaW5kcywgZXNwZWNpYWxseSBlbnRlciBpbnN0ZWFkIG9mIG1vdXNlIGNsaWNrIC0vLy8tXG4gICAgLSBDTEVBTiBDT0RFISEhISEgeW91IGtub3cgY3VycmVudFByb2plY3QgcmVwZWF0IGFsbCB0aGUgdGltZSBhbmQgb3RoZXIgamF6elxuICAgIC0gZXhwZXJpbWVudCB3aXRoIHdvcmtpbmdfdGFzaywgdHJ5IHRvIHJlbW92ZSAtLy8vLVxuICAgIC0gcmV3b3JrIG1vZHVsZXMsIG1heWJlIG5vIG5lZWQgdG8gZ2VuZXJhbGl6ZSBldmVyeXRoaW5nLCBleHBlcmltZW50XG4gICAgLSBjbGVhbmVyIGNzcywgbW9yZSBjb21tZW50cywgY29uc2lkZXIgYW5pbWF0aW9ucy90cmFuc2Zvcm1hdGlvbnMgZm9yIFxuICAgICAgICBjb25zaWRlciByZW1ha2luZyBjc3MgZ3JvdW5kIHVwLCBtYWtlIGl0IHdvcmsgb24gbW9iaWxlIGZpcnN0XG4gICAgLSBkZWxldGUgdGhlIHRhc2sgb25seSBhZnRlciB0aGUgZWRpdCBmb3JtIGlzIHN1Ym1pdHRlZCwgcG90ZW50aWFsbHkgdXNlXG4gICAgYXN5bmMvd2FpdCBmdW5jdGlvblxuICAgIC0gcmV3b3JrIG1vYmlsZSBkZXNpZ24sIHBlcmhhcHMgYWRkVGFzayBvbiB0b3AgYW5kIGNhbGFuZGVyIG9uIGJvdHRvbSxcbiAgICBtaWdodCBmZWVsIG1vcmUgbmF0dXJhbCAtLy8vLVxuXG4gICAgUG90ZW50aWFsIGJ1Z3M6XG4gICAgICAgIFNtYWxsIGJsYW5rIHJlY3RhbmdsZSBhcHBlYXJpbmcgc29tZXRpbWVzIHdoZW4gcmVzaXppbmcuIFJlZnJlc2ggZml4ZXMuXG4qL1xuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==