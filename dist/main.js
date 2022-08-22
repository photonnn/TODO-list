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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    --neutral: #f5f5f5;\n    --violet: white;\n    --stone: #6e6279;\n    --zinc: #3f3f46;\n    --hover: rgb(69, 31, 83);\n\n}\n\nbody,\nhtml {\n    height: 100%;\n    width: 100%;\n    overflow-y: auto;\n}\n\nbody {\n    display: flex;\n    position: fixed;\n}\n\n\n#sidebar {\n    flex: 1;\n    background-color: var(--zinc);\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n    width: 100%;\n}\n\n#sidebar>div {\n    font-size: 6vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.home {\n    flex: 1;\n    border-bottom: 5px black solid;\n    background-color: var(--stone);\n    user-select: none;\n}\n\n#projects {\n    flex: 7;\n}\n\n.home:hover {\n    background-color: var(--hover);\n    cursor: pointer;\n}\n\n#content {\n    flex: 3;\n    background-color: grey;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    flex-direction: column-reverse;\n    height: 100vh;\n    width: 100%;\n}\n\n\n.expand {\n    display: flex;\n    flex-direction: column;\n}\n\n.expand>div:first-child,\n#addProject {\n    flex: 1;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.expand>* {\n    width: 100%;\n}\n\n#addProject {\n    border-top: 3px solid black;\n    background-color: var(--stone);\n    user-select: none;\n}\n\n#addProject:hover {\n    cursor: pointer;\n    background-color: var(--hover);\n}\n\n.expand>div:first-child {\n    border-bottom: 3px solid black;\n}\n\n\n.expand .shortcut {\n    background-color: var(--stone);\n    padding: 5%;\n    border-bottom: 3px solid black;\n    word-break: break-word;\n    user-select: none;\n    cursor: pointer;\n    display: flex;\n    justify-content: space-between;\n}\n\n.expand .shortcuts {\n    overflow-y: auto;\n    max-height: 70vh;\n}\n\n.shortcut:hover {\n    background-color: var(--hover);\n    cursor: pointer;\n}\n\n.expand>div {\n    flex: 5;\n    text-align: center;\n}\n\n#tasks {\n    flex: 1;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(35vh, 1fr));\n    grid-gap: 2vh;\n    overflow-y: auto;\n    width: 100%;\n    padding: 3%;\n}\n\n#tasks>div {\n    height: 35vh;\n    background: rgb(0, 147, 223);\n    background: radial-gradient(circle, rgba(0, 147, 223, 1) 0%,\n            rgba(211, 239, 242, 1) 49%, rgba(17, 16, 16, 1) 100%);\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    border-radius: 10%;\n}\n\n#tasks>div>div {\n    word-break: break-word;\n    font-size: 3vh;\n}\n\n.Must {\n    background: rgb(232, 5, 5);\n    background: radial-gradient(circle, rgba(232, 5, 5, 1) 0%,\n            rgba(213, 144, 144, 1) 49%, rgba(17, 16, 16, 1) 100%) !important;\n}\n\n.Necessary {\n    background: rgb(232, 107, 5);\n    background: radial-gradient(circle, rgba(232, 107, 5, 1) 0%,\n            rgba(235, 200, 163, 1) 49%, rgba(17, 16, 16, 1) 100%) !important;\n}\n\n.Maybe {\n    background: rgb(193, 232, 5);\n    background: radial-gradient(circle, rgba(193, 232, 5, 1) 0%,\n            rgba(224, 235, 163, 1) 49%, rgba(17, 16, 16, 1) 100%) !important;\n}\n\n#content>*:not(#tasks) {\n    display: flex;\n    justify-content: center;\n    width: 100%;\n}\n\n.header {\n    font-size: 40px;\n}\n\n.header .RPB {\n    background-color: red;\n    position: absolute;\n    height: max(55px, 7vh);\n    width: max(55px, 7vh);\n    font-size: max(40px, 3rem);\n    right: 0;\n    top: 0;\n    color: rgb(85, 3, 19);\n}\n\n#addTask {\n    display: flex;\n    align-items: center;\n    font-size: max(40px, 3rem);\n    color: white;\n    background-color: black;\n    user-select: none;\n    height: max(55px, 7vh);\n}\n\n#addTask:hover {\n    opacity: 0.5;\n    cursor: pointer;\n}\n\n#addTask:active {\n    opacity: 0.2;\n}\n\n.selected {\n    border-right: 10px groove var(--hover);\n}\n\n#date {\n    width: 40vh !important;\n    font-size: 5vh;\n    border: none;\n    background: grey;\n}\n\n.calLeft {\n    margin-right: 2vh;\n}\n\n.calRight {\n    margin-left: 2vh;\n}\n\n.navigatecal {\n    font-size: 8vh;\n    cursor: pointer;\n    user-select: none;\n}\n\n#taskForm {\n    width: 65vh;\n    height: 65vh;\n    left: calc(50% - 10vh);\n    top: calc(50% - 30vh);\n    padding-left: 5%;\n    padding-right: 5%;\n    font-size: 3vh;\n}\n\n#projectForm {\n    width: 55vh;\n    height: 25vh;\n    left: calc(50% - 10vh);\n    top: calc(50% - 30vh);\n    padding: 0 2% 0 2%;\n    font-size: 3vh;\n}\n\n#confirmationForm {\n    width: 50vh;\n    height: 35vh;\n    left: calc(50% - 10vh);\n    top: calc(50% - 30vh);\n    padding: 0 3% 0 3%;\n    font-size: 3vh;\n}\n\n#projectForm,\n#taskForm,\n#confirmationForm {\n    position: absolute;\n    z-index: 2;\n    background-color: var(--stone);\n    display: none;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: flex-start;\n    border: 5px var(--hover) solid;\n}\n\n.cover {\n    position: fixed;\n    top: 0;\n    left: 0;\n    background: rgba(0, 0, 0, 0.6);\n    z-index: 1;\n    width: 100%;\n    height: 100%;\n    display: none;\n}\n\n\n#taskForm div,\n#projectForm div {\n    display: flex;\n}\n\n#taskForm label,\n#projectForm label {\n    flex: 1;\n    min-width: 20vh;\n    font-size: 3vh;\n}\n\n#taskForm input,\n#taskForm select {\n    flex: 6;\n    min-width: 30vh;\n}\n\n#description,\n#taskForm input,\n#priority,\n#proj_title,\n#proj_dueDate {\n    font-size: 2vh;\n    padding: 1%;\n}\n\n#description {\n    height: 20vh;\n    max-width: 30vh;\n    resize: none;\n}\n\n.redBtn {\n    background-color: red;\n    margin-right: 25%;\n}\n\n.greenBtn {\n    background-color: rgb(47, 255, 47);\n}\n\n.redBtn,\n.greenBtn {\n    font-size: 3vh;\n    padding: 10%;\n    width: 15vh;\n    height: 0.5vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.fbtn {\n    display: flex;\n    justify-content: center;\n    width: 100%;\n}\n\n.expired {\n    border: 5px solid red;\n}\n\n\n.task_desc {\n    overflow-y: auto;\n    flex: 6;\n    font-size: 1.5rem;\n}\n\n.task_dueDate {\n    flex: 1;\n}\n\n.task_title,\n.task_desc,\n.task_dueDate {\n    border-bottom: 1px solid rgba(0, 0, 0, 0.212);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n}\n\n.task_title {\n    flex: 1;\n    padding: 0 6%;\n}\n\n.taskButtons>button {\n    font-size: 3vh;\n    color: white;\n    background-color: black;\n    opacity: 0.5;\n}\n\n.mobile {\n    display: none;\n}\n\n\n\n@media only screen and (max-width: 1100px) {\n\n    body,\n    html {\n        height: 100%;\n    }\n\n    .mobile {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        position: absolute;\n        z-index: 1;\n        left: 0;\n        top: 0;\n        width: 55px;\n        height: 55px;\n        color: black;\n        overflow: hidden;\n        background-color: black;\n        border-right: 1px solid white;\n    }\n\n    .mobile:hover {\n        cursor: pointer;\n    }\n\n    #sidebar {\n        position: absolute;\n        z-index: 1;\n        left: 0;\n        display: none;\n        max-height: 100vh;\n        max-width: min(75%, 300px);\n    }\n\n    #projectForm,\n    #taskForm,\n    #confirmationForm {\n        position: absolute;\n        margin-left: auto;\n        margin-right: auto;\n        left: 0;\n        right: 0;\n        text-align: center;\n        max-width: 100%;\n        width: 400px;\n        height: 200px;\n    }\n\n    #taskForm,\n    #projectForm {\n        position: absolute;\n        left: 0;\n        top: 0;\n        width: 100%;\n        min-height: 100%;\n        height: min-content;\n        text-align: center;\n        align-items: center;\n    }\n\n    #projectForm label {\n        max-height: 50px;\n    }\n\n    #projectForm>div {\n        width: 100%;\n        height: 100%;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n    }\n\n    #projectForm>div>* {\n        font-size: 2rem;\n        width: 90%;\n    }\n\n    #taskForm label {\n        font-size: 1.5rem\n    }\n\n    #taskForm #title,\n    #taskForm #dueDate {\n        font-size: 1rem;\n        height: 50px;\n        width: 90%;\n    }\n\n    #description {\n        width: 90%;\n        max-width: none;\n        font-size: 1rem;\n        min-height: 200px;\n    }\n\n    #priority {\n        font-size: 1rem;\n        width: 90%;\n        justify-content: center;\n    }\n\n    #taskForm>div {\n        position: relative;\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        margin-bottom: 20px;\n    }\n\n    .fbtn {\n        display: flex;\n        flex-direction: row !important;\n    }\n\n    .fbtn>* {\n        font-size: 1.7rem;\n    }\n\n    .RPB {\n        font-size: 40px;\n        z-index: 1;\n    }\n\n    #date {\n        max-width: 250px;\n        font-size: 2rem;\n    }\n\n    #addTask {\n        margin: 0 100px;\n    }\n\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    --neutral: #f5f5f5;\n    --violet: white;\n    --stone: #6e6279;\n    --zinc: #3f3f46;\n    --hover: rgb(69, 31, 83);\n\n}\n\nbody,\nhtml {\n    height: 100%;\n    width: 100%;\n    overflow-y: auto;\n}\n\nbody {\n    display: flex;\n    position: fixed;\n}\n\n\n#sidebar {\n    flex: 1;\n    background-color: var(--zinc);\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n    width: 100%;\n}\n\n#sidebar>div {\n    font-size: 6vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.home {\n    flex: 1;\n    border-bottom: 5px black solid;\n    background-color: var(--stone);\n    user-select: none;\n}\n\n#projects {\n    flex: 7;\n}\n\n.home:hover {\n    background-color: var(--hover);\n    cursor: pointer;\n}\n\n#content {\n    flex: 3;\n    background-color: grey;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    flex-direction: column-reverse;\n    height: 100vh;\n    width: 100%;\n}\n\n\n.expand {\n    display: flex;\n    flex-direction: column;\n}\n\n.expand>div:first-child,\n#addProject {\n    flex: 1;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.expand>* {\n    width: 100%;\n}\n\n#addProject {\n    border-top: 3px solid black;\n    background-color: var(--stone);\n    user-select: none;\n}\n\n#addProject:hover {\n    cursor: pointer;\n    background-color: var(--hover);\n}\n\n.expand>div:first-child {\n    border-bottom: 3px solid black;\n}\n\n\n.expand .shortcut {\n    background-color: var(--stone);\n    padding: 5%;\n    border-bottom: 3px solid black;\n    word-break: break-word;\n    user-select: none;\n    cursor: pointer;\n    display: flex;\n    justify-content: space-between;\n}\n\n.expand .shortcuts {\n    overflow-y: auto;\n    max-height: 70vh;\n}\n\n.shortcut:hover {\n    background-color: var(--hover);\n    cursor: pointer;\n}\n\n.expand>div {\n    flex: 5;\n    text-align: center;\n}\n\n#tasks {\n    flex: 1;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(35vh, 1fr));\n    grid-gap: 2vh;\n    overflow-y: auto;\n    width: 100%;\n    padding: 3%;\n}\n\n#tasks>div {\n    height: 35vh;\n    background: rgb(0, 147, 223);\n    background: radial-gradient(circle, rgba(0, 147, 223, 1) 0%,\n            rgba(211, 239, 242, 1) 49%, rgba(17, 16, 16, 1) 100%);\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    border-radius: 10%;\n}\n\n#tasks>div>div {\n    word-break: break-word;\n    font-size: 3vh;\n}\n\n.Must {\n    background: rgb(232, 5, 5);\n    background: radial-gradient(circle, rgba(232, 5, 5, 1) 0%,\n            rgba(213, 144, 144, 1) 49%, rgba(17, 16, 16, 1) 100%) !important;\n}\n\n.Necessary {\n    background: rgb(232, 107, 5);\n    background: radial-gradient(circle, rgba(232, 107, 5, 1) 0%,\n            rgba(235, 200, 163, 1) 49%, rgba(17, 16, 16, 1) 100%) !important;\n}\n\n.Maybe {\n    background: rgb(193, 232, 5);\n    background: radial-gradient(circle, rgba(193, 232, 5, 1) 0%,\n            rgba(224, 235, 163, 1) 49%, rgba(17, 16, 16, 1) 100%) !important;\n}\n\n#content>*:not(#tasks) {\n    display: flex;\n    justify-content: center;\n    width: 100%;\n}\n\n.header {\n    font-size: 40px;\n}\n\n.header .RPB {\n    background-color: red;\n    position: absolute;\n    height: max(55px, 7vh);\n    width: max(55px, 7vh);\n    font-size: max(40px, 3rem);\n    right: 0;\n    top: 0;\n    color: rgb(85, 3, 19);\n}\n\n#addTask {\n    display: flex;\n    align-items: center;\n    font-size: max(40px, 3rem);\n    color: white;\n    background-color: black;\n    user-select: none;\n    height: max(55px, 7vh);\n}\n\n#addTask:hover {\n    opacity: 0.5;\n    cursor: pointer;\n}\n\n#addTask:active {\n    opacity: 0.2;\n}\n\n.selected {\n    border-right: 10px groove var(--hover);\n}\n\n#date {\n    width: 40vh !important;\n    font-size: 5vh;\n    border: none;\n    background: grey;\n}\n\n.calLeft {\n    margin-right: 2vh;\n}\n\n.calRight {\n    margin-left: 2vh;\n}\n\n.navigatecal {\n    font-size: 8vh;\n    cursor: pointer;\n    user-select: none;\n}\n\n#taskForm {\n    width: 65vh;\n    height: 65vh;\n    left: calc(50% - 10vh);\n    top: calc(50% - 30vh);\n    padding-left: 5%;\n    padding-right: 5%;\n    font-size: 3vh;\n}\n\n#projectForm {\n    width: 55vh;\n    height: 25vh;\n    left: calc(50% - 10vh);\n    top: calc(50% - 30vh);\n    padding: 0 2% 0 2%;\n    font-size: 3vh;\n}\n\n#confirmationForm {\n    width: 50vh;\n    height: 35vh;\n    left: calc(50% - 10vh);\n    top: calc(50% - 30vh);\n    padding: 0 3% 0 3%;\n    font-size: 3vh;\n}\n\n#projectForm,\n#taskForm,\n#confirmationForm {\n    position: absolute;\n    z-index: 2;\n    background-color: var(--stone);\n    display: none;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: flex-start;\n    border: 5px var(--hover) solid;\n}\n\n.cover {\n    position: fixed;\n    top: 0;\n    left: 0;\n    background: rgba(0, 0, 0, 0.6);\n    z-index: 1;\n    width: 100%;\n    height: 100%;\n    display: none;\n}\n\n\n#taskForm div,\n#projectForm div {\n    display: flex;\n}\n\n#taskForm label,\n#projectForm label {\n    flex: 1;\n    min-width: 20vh;\n    font-size: 3vh;\n}\n\n#taskForm input,\n#taskForm select {\n    flex: 6;\n    min-width: 30vh;\n}\n\n#description,\n#taskForm input,\n#priority,\n#proj_title,\n#proj_dueDate {\n    font-size: 2vh;\n    padding: 1%;\n}\n\n#description {\n    height: 20vh;\n    max-width: 30vh;\n    resize: none;\n}\n\n.redBtn {\n    background-color: red;\n    margin-right: 25%;\n}\n\n.greenBtn {\n    background-color: rgb(47, 255, 47);\n}\n\n.redBtn,\n.greenBtn {\n    font-size: 3vh;\n    padding: 10%;\n    width: 15vh;\n    height: 0.5vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.fbtn {\n    display: flex;\n    justify-content: center;\n    width: 100%;\n}\n\n.expired {\n    border: 5px solid red;\n}\n\n\n.task_desc {\n    overflow-y: auto;\n    flex: 6;\n    font-size: 1.5rem;\n}\n\n.task_dueDate {\n    flex: 1;\n}\n\n.task_title,\n.task_desc,\n.task_dueDate {\n    border-bottom: 1px solid rgba(0, 0, 0, 0.212);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n}\n\n.task_title {\n    flex: 1;\n    padding: 0 6%;\n}\n\n.taskButtons>button {\n    font-size: 3vh;\n    color: white;\n    background-color: black;\n    opacity: 0.5;\n}\n\n.mobile {\n    display: none;\n}\n\n\n\n@media only screen and (max-width: 1100px) {\n\n    body,\n    html {\n        height: 100%;\n    }\n\n    .mobile {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        position: absolute;\n        z-index: 1;\n        left: 0;\n        top: 0;\n        width: 55px;\n        height: 55px;\n        color: black;\n        overflow: hidden;\n        background-color: black;\n        border-right: 1px solid white;\n    }\n\n    .mobile:hover {\n        cursor: pointer;\n    }\n\n    #sidebar {\n        position: absolute;\n        z-index: 1;\n        left: 0;\n        display: none;\n        max-height: 100vh;\n        max-width: min(75%, 300px);\n    }\n\n    #projectForm,\n    #taskForm,\n    #confirmationForm {\n        position: absolute;\n        margin-left: auto;\n        margin-right: auto;\n        left: 0;\n        right: 0;\n        text-align: center;\n        max-width: 100%;\n        width: 400px;\n        height: 200px;\n    }\n\n    #taskForm,\n    #projectForm {\n        position: absolute;\n        left: 0;\n        top: 0;\n        width: 100%;\n        min-height: 100%;\n        height: min-content;\n        text-align: center;\n        align-items: center;\n    }\n\n    #projectForm label {\n        max-height: 50px;\n    }\n\n    #projectForm>div {\n        width: 100%;\n        height: 100%;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n    }\n\n    #projectForm>div>* {\n        font-size: 2rem;\n        width: 90%;\n    }\n\n    #taskForm label {\n        font-size: 1.5rem\n    }\n\n    #taskForm #title,\n    #taskForm #dueDate {\n        font-size: 1rem;\n        height: 50px;\n        width: 90%;\n    }\n\n    #description {\n        width: 90%;\n        max-width: none;\n        font-size: 1rem;\n        min-height: 200px;\n    }\n\n    #priority {\n        font-size: 1rem;\n        width: 90%;\n        justify-content: center;\n    }\n\n    #taskForm>div {\n        position: relative;\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        margin-bottom: 20px;\n    }\n\n    .fbtn {\n        display: flex;\n        flex-direction: row !important;\n    }\n\n    .fbtn>* {\n        font-size: 1.7rem;\n    }\n\n    .RPB {\n        font-size: 40px;\n        z-index: 1;\n    }\n\n    #date {\n        max-width: 250px;\n        font-size: 2rem;\n    }\n\n    #addTask {\n        margin: 0 100px;\n    }\n\n}"],"sourceRoot":""}]);
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


function getDate() {
  const d = new Date();
  let month = `${d.getMonth() + 1}`;
  let day = `${d.getDate()}`;
  const year = d.getFullYear();

  if (month.length < 2) { month = `0${month}`; }
  if (day.length < 2) { day = `0${day}`; }

  return [year, month, day].join('-');
}

function getMonthFromString(mon) {
  return new Date(Date.parse(`${mon} 1, 2012`)).getMonth() + 1;
}

const calender = document.querySelector('#date');

const today = getDate();
calender.setAttribute('value', today);
calender.setAttribute('min', today);

// set default date values to today
const dueDate = document.getElementById('dueDate');
dueDate.value = getDate();
// const proj_dueDate = document.getElementById("proj_dueDate");
// proj_dueDate.value = getDate();
// ideally you would format to fit location, but what a pain D:
function formatDate(date) {
  const temp = date.split('-');
  return [temp[1], temp[2], temp[0]].join('-');
}

function format(temp) {
  // temp (object):
  // Sun Aug 21 2022 02:00:00 GMT+0200 (Central European Summer Time)
  const str = temp.toString();
  const month = getMonthFromString(str.substring(4, 7));
  const day = str.substring(8, 10);
  const year = str.substring(11, 15);
  return [day, month, year];
}

const expireCheck = (task) => {
  // const todayArr = document.getElementById("date").value.split("-");

  const todayArr = format(document.getElementById('date').valueAsDate);
  // [day, month, year]
  const currentProject = document.querySelector('.selected').textContent;
  const arr = _todo__WEBPACK_IMPORTED_MODULE_0__.projects[currentProject].tasks[task.title].dueDate.split('-');
  if (+todayArr[0] > +arr[1] || +todayArr[1] > +arr[0] || +todayArr[2]
    > +arr[2]) {
    return true;
  }
  return false;
};

/* const proj_expireCheck = () => {
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
  const div = document.createElement('div');
  div.classList.add(`${task.id}`);

  if ((0,_date__WEBPACK_IMPORTED_MODULE_0__.expireCheck)(task)) {
    div.classList.add('expired');
  } else {
    div.classList.remove('expired');
  }

  const tasks = document.querySelector('#tasks');
  tasks.appendChild(div);
};

const eraseTasksD = () => {
  const tasks = document.querySelector('#tasks');
  while (tasks.firstChild) {
    tasks.removeChild(tasks.lastChild);
  }
};

const eraseTaskD = (id) => {
  const task = document.querySelector(`.${id}`);
  task.remove();
};

const addProjectD = (project, id) => {
  const div = document.createElement('div');
  div.classList.add('shortcut');
  div.id = id;
  div.textContent = project.title;

  const shortcuts = document.querySelector('.shortcuts');
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
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility */ "./src/utility.js");
/* harmony import */ var _setup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setup */ "./src/setup.js");
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forms */ "./src/forms.js");




// it resets every time website refreshes so duplication bug occurs,
// and it's more efficient, (little bit lol

const addTaskBtn = document.querySelector('#addTask');
addTaskBtn.addEventListener('click', () => {
  (0,_utility__WEBPACK_IMPORTED_MODULE_0__.showFormAndCover)();
});

// thought it would easy to put all form related code to the submit btn listener
const gbutton = document.querySelector('.green');
gbutton.addEventListener('click', () => {
  (0,_forms__WEBPACK_IMPORTED_MODULE_2__.addTask)();
});

const form = document.querySelector('#taskForm');
form.addEventListener('keydown', (e) => {
  if (e.code === 'Enter') {
    (0,_forms__WEBPACK_IMPORTED_MODULE_2__.addTask)();
  }
});

const rbutton = document.querySelector('.red');
rbutton.addEventListener('click', () => {
  (0,_forms__WEBPACK_IMPORTED_MODULE_2__.resetForm)();
});

const addProjectBtn = document.querySelector('#addProject');
addProjectBtn.addEventListener('click', () => {
  const projForm = document.querySelector('#projectForm');
  projForm.style.display = 'flex';
  const cover = document.querySelector('.cover');
  cover.style.display = 'block';
});

const projGButton = document.querySelector('.proj_green');
projGButton.addEventListener('click', () => {
  (0,_forms__WEBPACK_IMPORTED_MODULE_2__.addProject)();
});

const projForm = document.querySelector('#projectForm');
projForm.addEventListener('keydown', (e) => {
  if (e.code === 'Enter') {
    (0,_forms__WEBPACK_IMPORTED_MODULE_2__.addProject)();
  }
});

const projRButton = document.querySelector('.proj_red');
projRButton.addEventListener('click', () => {
  (0,_forms__WEBPACK_IMPORTED_MODULE_2__.resetProjForm)();
});

const confGreen = document.querySelector('.conf_green');
confGreen.addEventListener('click', () => {
  (0,_setup__WEBPACK_IMPORTED_MODULE_1__.onClickingRPB)();
  (0,_forms__WEBPACK_IMPORTED_MODULE_2__.resetConfForm)();
});

const confRed = document.querySelector('.conf_red');
confRed.addEventListener('click', () => {
  (0,_forms__WEBPACK_IMPORTED_MODULE_2__.resetConfForm)();
});

// navigate calender, left and right arrow
const left = document.querySelector('.calLeft');
const right = document.querySelector('.calRight');
const input = document.querySelector('#date');
left.addEventListener('click', () => {
  input.stepDown();
  (0,_utility__WEBPACK_IMPORTED_MODULE_0__.checkDueDate)();
});
right.addEventListener('click', () => {
  input.stepUp();
  (0,_utility__WEBPACK_IMPORTED_MODULE_0__.checkDueDate)();
});
// date is picked manually from the calander, click doesn't work
input.addEventListener('change', () => {
  (0,_utility__WEBPACK_IMPORTED_MODULE_0__.checkDueDate)();
});


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
/* harmony export */   "resetProjForm": () => (/* binding */ resetProjForm)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _setup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setup */ "./src/setup.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./date */ "./src/date.js");





function resetForm() {
  const form = document.querySelector('#taskForm');
  const cover = document.querySelector('.cover');
  form.reset();
  form.style.display = 'none';
  cover.style.display = 'none';

  // this is also default, present in date.js!
  const dueDate = document.getElementById('dueDate');
  dueDate.value = (0,_date__WEBPACK_IMPORTED_MODULE_3__.getDate)();
}

// couldn't get submit type button to work, so needed a function to get values
// from the form, this is it
function getTask() {
  const title = document.getElementById('title').value;
  const currentProject = document.querySelector('.selected').textContent;
  if (!_todo__WEBPACK_IMPORTED_MODULE_2__.projects[currentProject].tasks[title]) {
    const description = document.getElementById('description').value;
    let dueDate = document.getElementById('dueDate').value;
    const priority = document.getElementById('priority').value;

    if (!dueDate) {
      dueDate = (0,_date__WEBPACK_IMPORTED_MODULE_3__.getDate)();
    }

    let id = 0;
    // easiest way to prevent duplication bug => 2 tasks 1 id
    Object.keys(_todo__WEBPACK_IMPORTED_MODULE_2__.projects[currentProject].tasks).forEach((taskName) => {
      id = Math.max(id, Number(_todo__WEBPACK_IMPORTED_MODULE_2__.projects[currentProject].tasks[taskName].id
        .replace('task', '')) + 1);
    });

    const task = (0,_todo__WEBPACK_IMPORTED_MODULE_2__.todo)(
      title,
      description,
      (0,_date__WEBPACK_IMPORTED_MODULE_3__.formatDate)(dueDate),
      priority,
      `task${id.toString()}`,
    );
    return task;
  }
  return 0;
}

const addTask = () => {
  // run only if not editing, we have 2 event listners on one button
  // so this forces the other one to work alone, which is what we want
  const currentProject = document.querySelector('.selected').textContent;
  // bugs occur if flag isn't present, since after I am using two
  // event listners for one button
  const task = getTask();

  if (task === 0) {
    // eslint-disable-next-line no-alert
    alert('Failure, task with the same title already exists');
  }
  if (task) {
    resetForm();
    // set default date, so MM-DD-YYYY is not shown on form?????
    const dueDate = document.getElementById('dueDate');
    dueDate.value = (0,_date__WEBPACK_IMPORTED_MODULE_3__.getDate)();

    // setup task
    _todo__WEBPACK_IMPORTED_MODULE_2__.projects[currentProject].tasks[task.title] = task;
    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.addTaskD)(task, currentProject);
    (0,_setup__WEBPACK_IMPORTED_MODULE_1__.setupTaskD)(task);

    const rbutton = document.querySelector('.red');
    rbutton.style.display = 'flex';

    const gbutton = document.querySelector('.green');
    gbutton.style.backgroundColor = 'rgb(47, 255, 47)';
    gbutton.textContent = 'Add';

    // attempt at "refreshing" the height, because it sometimes forgets
    // it needs to be 100vh on mobile browsers >-.-<
    // const sidebar = document.querySelector('#sidebar');
    // sidebar.style.height = '100vh';

    // const content = document.querySelector('#content');
    // content.style.height = '100vh';

    // save to local when you add task or project
    localStorage.setItem('projects', JSON.stringify(_todo__WEBPACK_IMPORTED_MODULE_2__.projects));
  }
};

// similar problem as task id
// let projectID = Object.keys(projects).length;

// againt, needed a way to get values from the form
function getProject() {
  const title = document.getElementById('proj_title').value;
  if (!_todo__WEBPACK_IMPORTED_MODULE_2__.projects[title]) {
    // const dueDate = document.getElementById("proj_dueDate").value;

    let projectID = 0;
    // easiest way to prevent duplication bug => 2 projects 1 id
    Object.keys(_todo__WEBPACK_IMPORTED_MODULE_2__.projects).forEach((project) => {
      projectID = Math.max(projectID, Number(_todo__WEBPACK_IMPORTED_MODULE_2__.projects[project].id
        .replace('Pr', '')) + 1);
    });
    const proj = (0,_todo__WEBPACK_IMPORTED_MODULE_2__.projectFactory)(
      title,
      /* dueDate, */
      `Pr${projectID.toString()}`,
    );
    return proj;
  }
  return 0;
}

function resetProjForm() {
  const form = document.querySelector('#projectForm');
  const cover = document.querySelector('.cover');
  document.getElementById('proj_title').value = '';
  // document.getElementById("proj_dueDate").value = "";
  form.style.display = 'none';
  cover.style.display = 'none';

  // this is also default, present in date.js!
  // const dueDate = document.getElementById("proj_dueDate");
  // dueDate.value = getDate();
}

const addProject = () => {
  const project = getProject();
  if (!project) {
    // eslint-disable-next-line no-alert
    alert("Failure, can't repeat project name");
  } else {
    resetProjForm();
    _todo__WEBPACK_IMPORTED_MODULE_2__.projects[project.title] = project;
    _todo__WEBPACK_IMPORTED_MODULE_2__.projects[project.title].tasks = {};
    _todo__WEBPACK_IMPORTED_MODULE_2__.projects[project.title].id = project.id;

    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.addProjectD)(project, project.id);
    (0,_setup__WEBPACK_IMPORTED_MODULE_1__.addProjectListener)(project.id);

    // save to local when you add task or project
    localStorage.setItem('projects', JSON.stringify(_todo__WEBPACK_IMPORTED_MODULE_2__.projects));
  }
};

function resetConfForm() {
  const confForm = document.querySelector('#confirmationForm');
  confForm.style.display = 'none';
  const cover = document.querySelector('.cover');
  cover.style.display = 'none';
}


/***/ }),

/***/ "./src/mobile.js":
/*!***********************!*\
  !*** ./src/mobile.js ***!
  \***********************/
/***/ (() => {

const mobileBtn = document.querySelector('.mobile');
mobileBtn.addEventListener('click', () => {
  const sidebar = document.querySelector('#sidebar');
  if (sidebar.style.display === 'flex') {
    sidebar.style.display = 'none';
  } else {
    sidebar.style.display = 'flex';
    mobileBtn.style.display = 'none';
  }
});

const sidebar = document.querySelector('#sidebar');
window.addEventListener('resize', () => {
  if (window.innerWidth > '1100') {
    sidebar.style.display = 'flex';
    mobileBtn.style.display = 'none';
  }
  if (window.innerWidth < '1100') {
    sidebar.style.display = 'none';
    mobileBtn.style.display = 'flex';
  }
  // //if (sidebar.style.display != "flex") {
  //  mobileBtn.style.display = "none";
  // }
});

const content = document.querySelector('#content');
content.addEventListener('click', () => {
  if (window.innerWidth < '1100') {
    sidebar.style.display = 'none';
    mobileBtn.style.display = 'flex';
  }
});

// There might be a more efficient way. This seems to work though.


/***/ }),

/***/ "./src/setup.js":
/*!**********************!*\
  !*** ./src/setup.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProjectListener": () => (/* binding */ addProjectListener),
/* harmony export */   "addRPB": () => (/* binding */ addRPB),
/* harmony export */   "changeProjectD": () => (/* binding */ changeProjectD),
/* harmony export */   "loadFromStorage": () => (/* binding */ loadFromStorage),
/* harmony export */   "onClickingRPB": () => (/* binding */ onClickingRPB),
/* harmony export */   "removeRPB": () => (/* binding */ removeRPB),
/* harmony export */   "setupTaskD": () => (/* binding */ setupTaskD),
/* harmony export */   "showConfirmationForm": () => (/* binding */ showConfirmationForm)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utility */ "./src/utility.js");




const doUI = (workingTask) => {
  const taskNode = document.querySelector(`.${workingTask.id}`);

  const title = document.createElement('div');
  title.textContent = workingTask.title;
  title.classList.add('task_title');
  taskNode.appendChild(title);

  const desc = document.createElement('div');
  desc.textContent = workingTask.description;
  desc.classList.add('task_desc');
  taskNode.appendChild(desc);

  const dueDate = document.createElement('div');
  dueDate.textContent = `Due Date: ${workingTask.dueDate}`;
  dueDate.classList.add('task_dueDate');
  taskNode.appendChild(dueDate);

  taskNode.classList.add(`${workingTask.priority}`);
};

const setupDeleteButton = (workingTask) => {
  const btn = document.createElement('button');
  btn.textContent = 'X';

  const div = document.querySelector(`.${workingTask.id} .taskButtons`);
  div.appendChild(btn);

  // we need to obtain task object from the button itself
  // because if we use any variable it won't delete properly
  // this is done via matching btn class name which is equal to the id
  // of the task that we are seeking in a projects object
  btn.addEventListener('click', (e) => {
    const taskID = [...e.target.parentNode.parentNode.classList][0];
    const title = (0,_utility__WEBPACK_IMPORTED_MODULE_2__.getTitle)(taskID);
    const currentProject = document.querySelector('.selected').textContent;
    (0,_utility__WEBPACK_IMPORTED_MODULE_2__.deleteTask)(currentProject, _todo__WEBPACK_IMPORTED_MODULE_1__.projects[currentProject].tasks[title]);
    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.eraseTaskD)(taskID);
  });
};

function setupEditForm(title) {
  const currentProject = document.querySelector('.selected').textContent;
  // task = THE ONE BEING CLICKED
  const task = _todo__WEBPACK_IMPORTED_MODULE_1__.projects[currentProject].tasks[title];

  // fill the form correctly
  document.getElementById('title').value = task.title;
  document.getElementById('description').value = task.description;
  let arr = task.dueDate.split('-');
  arr = [arr[2], arr[0], arr[1]].join('-');
  document.getElementById('dueDate').value = arr;
  document.getElementById('priority').value = task.priority;

  // delete, and let the green button build it for you, no in this case
  // should have a special function
  (0,_dom__WEBPACK_IMPORTED_MODULE_0__.eraseTaskD)(_todo__WEBPACK_IMPORTED_MODULE_1__.projects[currentProject].tasks[title].id);
  delete _todo__WEBPACK_IMPORTED_MODULE_1__.projects[currentProject].tasks[title];

  localStorage.setItem('projects', JSON.stringify(_todo__WEBPACK_IMPORTED_MODULE_1__.projects));

  const rbutton = document.querySelector('.red');
  rbutton.style.display = 'none';

  const gbutton = document.querySelector('.green');
  gbutton.style.backgroundColor = 'yellow';
  gbutton.textContent = 'Edit';
}

const setupEditButton = (workingTask) => {
  const btn = document.createElement('button');
  btn.textContent = 'Edit';

  const div = document.createElement('div');
  div.classList.add('taskButtons');

  const taskNode = document.querySelector(`.${workingTask.id}`);
  taskNode.appendChild(div);
  div.appendChild(btn);

  btn.addEventListener('click', (e) => {
    (0,_utility__WEBPACK_IMPORTED_MODULE_2__.showFormAndCover)();
    setupEditForm((0,_utility__WEBPACK_IMPORTED_MODULE_2__.getTitle)([...e.target.parentNode.parentNode.classList][0]));
  });
};

// "Control" function
function setupTaskD(task) {
  doUI(task);
  setupEditButton(task);
  setupDeleteButton(task);
}

function showConfirmationForm() {
  const form = document.querySelector('#confirmationForm');
  form.style.display = 'flex';
  const cover = document.querySelector('.cover');
  cover.style.display = 'block';
}

// RPB - remove project button
function addRPB() {
  const header = document.querySelector('.header');
  if (header.lastChild.textContent !== 'X') {
    const delBtn = document.createElement('button');
    delBtn.textContent = 'X';
    delBtn.classList.add('RPB');
    delBtn.addEventListener('click', () => {
      showConfirmationForm();
    });
    header.appendChild(delBtn);
  }
}

function removeRPB() {
  const header = document.querySelector('.header');
  const rpb = document.querySelector('.RPB');
  if (rpb) { header.removeChild(rpb); }
}

// felt like this deserves a seperate module, since it's not really DOM manip.
const changeProjectD = (projectName) => {
  (0,_dom__WEBPACK_IMPORTED_MODULE_0__.eraseTasksD)();
  if (_todo__WEBPACK_IMPORTED_MODULE_1__.projects[projectName].tasks !== {}) {
    Object.keys(_todo__WEBPACK_IMPORTED_MODULE_1__.projects[projectName].tasks).forEach((em) => {
      (0,_dom__WEBPACK_IMPORTED_MODULE_0__.addTaskD)(_todo__WEBPACK_IMPORTED_MODULE_1__.projects[projectName].tasks[em]);
      setupTaskD(_todo__WEBPACK_IMPORTED_MODULE_1__.projects[projectName].tasks[em], projectName);
    });
  }

  if (projectName !== 'HOME') {
    addRPB();
  } else {
    removeRPB();
  }
};

function addProjectListener(id) {
  const project = document.getElementById(`${id}`);

  project.addEventListener('click', () => {
    const temp = document.querySelector('.selected');
    temp.classList.remove('selected');
    project.classList.add('selected');
    if (window.innerWidth < '1024') {
      const sidebar = document.querySelector('#sidebar');
      const mobileBtn = document.querySelector('.mobile');
      sidebar.style.display = 'none';
      mobileBtn.style.display = 'initial';
    }
    changeProjectD(project.textContent);
  });
}

function onClickingRPB() {
  // first check if you actually want to delete
  // get id, delete on content and then sidebar using id. return to home
  const projectName2 = document.querySelector('.selected').textContent;
  const projectID = _todo__WEBPACK_IMPORTED_MODULE_1__.projects[projectName2].id;
  delete _todo__WEBPACK_IMPORTED_MODULE_1__.projects[projectName2];
  const project = document.querySelector(`#${projectID}`);
  project.remove();

  const home = document.querySelector('#Pr0');
  home.classList.add('selected');
  changeProjectD('HOME');

  // save because you removed a project
  localStorage.setItem('projects', JSON.stringify(_todo__WEBPACK_IMPORTED_MODULE_1__.projects));
}

addProjectListener('Pr0');

// load all projects and tasks from the local storage
const loadFromStorage = () => {
  Object.keys(_todo__WEBPACK_IMPORTED_MODULE_1__.projects).forEach((project) => {
    if (project !== 'HOME') {
      (0,_dom__WEBPACK_IMPORTED_MODULE_0__.addProjectD)(_todo__WEBPACK_IMPORTED_MODULE_1__.projects[project], _todo__WEBPACK_IMPORTED_MODULE_1__.projects[project].id);
      addProjectListener(_todo__WEBPACK_IMPORTED_MODULE_1__.projects[project].id);
    }
  });

  Object.keys(_todo__WEBPACK_IMPORTED_MODULE_1__.projects.HOME.tasks).forEach((task) => {
    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.addTaskD)(_todo__WEBPACK_IMPORTED_MODULE_1__.projects.HOME.tasks[task]);
    setupTaskD(_todo__WEBPACK_IMPORTED_MODULE_1__.projects.HOME.tasks[task], 'HOME');
  });
};

// Previous setupProject and setupTask have merged due to eslint shouting at me
// for dependency cycle errors. I have merged them together into this setup
// file. Ideally I would find another way to spit this module into more pieces,
// this would all have been easier, if I had used eslint from start, so work to
// be done here, if more code is to be included, especially code that is related
// to any kind of setup.


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
function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return e instanceof DOMException && (
    // everything except Firefox
      e.code === 22
            // Firefox
            || e.code === 1014
            // test name field too, because code might not be present
            // everything except Firefox
            || e.name === 'QuotaExceededError'
            // Firefox
            || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')
            // acknowledge QuotaExceededError only if there's something already stored
            && (storage && storage.length !== 0);
  }
}

const projects = {
  HOME: {
    tasks: {
    },
    id: 'Pr0',
  },
};

if (storageAvailable) {
  let retrievedObject = localStorage.getItem('projects');
  if (retrievedObject === null) {
    retrievedObject = JSON.stringify({});
  }
  retrievedObject = JSON.parse(retrievedObject);
  // for (const em of Object.keys(retrievedObject)) {
  //   projects[em] = retrievedObject[em];
  // }
  Object.keys(retrievedObject).forEach((em) => {
    projects[em] = retrievedObject[em];
  });
  // projects = localStorage.getItem('projects');
}

const todo = (title, description, dueDate, priority, id) => ({
  title, description, dueDate, priority, id,
});

const projectFactory = (title/* , dueDate */, id) => ({
  title/* , dueeDate */, id,
});


/***/ }),

/***/ "./src/utility.js":
/*!************************!*\
  !*** ./src/utility.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkDueDate": () => (/* binding */ checkDueDate),
/* harmony export */   "deleteTask": () => (/* binding */ deleteTask),
/* harmony export */   "getTitle": () => (/* binding */ getTitle),
/* harmony export */   "showFormAndCover": () => (/* binding */ showFormAndCover)
/* harmony export */ });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date */ "./src/date.js");



function checkDueDate() {
  const currentProject = document.querySelector('.selected').textContent;
  Object.keys(_todo__WEBPACK_IMPORTED_MODULE_0__.projects[currentProject].tasks).forEach((taskName) => {
    const div = document.querySelector(`.${_todo__WEBPACK_IMPORTED_MODULE_0__.projects[currentProject]
      .tasks[taskName].id}`);
    if ((0,_date__WEBPACK_IMPORTED_MODULE_1__.expireCheck)(_todo__WEBPACK_IMPORTED_MODULE_0__.projects[currentProject].tasks[taskName])) {
      div.classList.add('expired');
    } else {
      div.classList.remove('expired');
    }
  });

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
  const currentProject = document.querySelector('.selected').textContent;
  let title;

  Object.keys(_todo__WEBPACK_IMPORTED_MODULE_0__.projects[currentProject].tasks).forEach((taskName) => {
    if (_todo__WEBPACK_IMPORTED_MODULE_0__.projects[currentProject].tasks[taskName].id === taskID) {
      title = _todo__WEBPACK_IMPORTED_MODULE_0__.projects[currentProject].tasks[taskName].title;
    }
  });
  return title;
}

function deleteTask(project, task) {
  delete _todo__WEBPACK_IMPORTED_MODULE_0__.projects[project].tasks[task.title];
  // we are actually deleting, not just erasing from screen!!!
  localStorage.setItem('projects', JSON.stringify(_todo__WEBPACK_IMPORTED_MODULE_0__.projects));
}

function showFormAndCover() {
  const form = document.querySelector('#taskForm');
  const cover = document.querySelector('.cover');
  cover.style.display = 'block';
  form.style.display = 'flex';
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
/* harmony import */ var _setup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./setup */ "./src/setup.js");






(0,_setup__WEBPACK_IMPORTED_MODULE_4__.loadFromStorage)();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLE9BQU8sWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsUUFBUSxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsT0FBTyxTQUFTLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksUUFBUSxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sT0FBTyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxTQUFTLE1BQU0sTUFBTSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFB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LCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RhdGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZXZlbnRMaXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Zvcm1zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2JpbGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NldHVwLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy91dGlsaXR5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIC0tbmV1dHJhbDogI2Y1ZjVmNTtcXG4gICAgLS12aW9sZXQ6IHdoaXRlO1xcbiAgICAtLXN0b25lOiAjNmU2Mjc5O1xcbiAgICAtLXppbmM6ICMzZjNmNDY7XFxuICAgIC0taG92ZXI6IHJnYig2OSwgMzEsIDgzKTtcXG5cXG59XFxuXFxuYm9keSxcXG5odG1sIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG59XFxuXFxuXFxuI3NpZGViYXIge1xcbiAgICBmbGV4OiAxO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS16aW5jKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNzaWRlYmFyPmRpdiB7XFxuICAgIGZvbnQtc2l6ZTogNnZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhvbWUge1xcbiAgICBmbGV4OiAxO1xcbiAgICBib3JkZXItYm90dG9tOiA1cHggYmxhY2sgc29saWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN0b25lKTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbiNwcm9qZWN0cyB7XFxuICAgIGZsZXg6IDc7XFxufVxcblxcbi5ob21lOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXIpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgZmxleDogMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5cXG4uZXhwYW5kIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmV4cGFuZD5kaXY6Zmlyc3QtY2hpbGQsXFxuI2FkZFByb2plY3Qge1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmV4cGFuZD4qIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNhZGRQcm9qZWN0IHtcXG4gICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdG9uZSk7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4jYWRkUHJvamVjdDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXIpO1xcbn1cXG5cXG4uZXhwYW5kPmRpdjpmaXJzdC1jaGlsZCB7XFxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBibGFjaztcXG59XFxuXFxuXFxuLmV4cGFuZCAuc2hvcnRjdXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdG9uZSk7XFxuICAgIHBhZGRpbmc6IDUlO1xcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgYmxhY2s7XFxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmV4cGFuZCAuc2hvcnRjdXRzIHtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgbWF4LWhlaWdodDogNzB2aDtcXG59XFxuXFxuLnNob3J0Y3V0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXIpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5leHBhbmQ+ZGl2IHtcXG4gICAgZmxleDogNTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jdGFza3Mge1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDM1dmgsIDFmcikpO1xcbiAgICBncmlkLWdhcDogMnZoO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMyU7XFxufVxcblxcbiN0YXNrcz5kaXYge1xcbiAgICBoZWlnaHQ6IDM1dmg7XFxuICAgIGJhY2tncm91bmQ6IHJnYigwLCAxNDcsIDIyMyk7XFxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoMCwgMTQ3LCAyMjMsIDEpIDAlLFxcbiAgICAgICAgICAgIHJnYmEoMjExLCAyMzksIDI0MiwgMSkgNDklLCByZ2JhKDE3LCAxNiwgMTYsIDEpIDEwMCUpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAlO1xcbn1cXG5cXG4jdGFza3M+ZGl2PmRpdiB7XFxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XFxuICAgIGZvbnQtc2l6ZTogM3ZoO1xcbn1cXG5cXG4uTXVzdCB7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyMzIsIDUsIDUpO1xcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDIzMiwgNSwgNSwgMSkgMCUsXFxuICAgICAgICAgICAgcmdiYSgyMTMsIDE0NCwgMTQ0LCAxKSA0OSUsIHJnYmEoMTcsIDE2LCAxNiwgMSkgMTAwJSkgIWltcG9ydGFudDtcXG59XFxuXFxuLk5lY2Vzc2FyeSB7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyMzIsIDEwNywgNSk7XFxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoMjMyLCAxMDcsIDUsIDEpIDAlLFxcbiAgICAgICAgICAgIHJnYmEoMjM1LCAyMDAsIDE2MywgMSkgNDklLCByZ2JhKDE3LCAxNiwgMTYsIDEpIDEwMCUpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5NYXliZSB7XFxuICAgIGJhY2tncm91bmQ6IHJnYigxOTMsIDIzMiwgNSk7XFxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoMTkzLCAyMzIsIDUsIDEpIDAlLFxcbiAgICAgICAgICAgIHJnYmEoMjI0LCAyMzUsIDE2MywgMSkgNDklLCByZ2JhKDE3LCAxNiwgMTYsIDEpIDEwMCUpICFpbXBvcnRhbnQ7XFxufVxcblxcbiNjb250ZW50Pio6bm90KCN0YXNrcykge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxufVxcblxcbi5oZWFkZXIgLlJQQiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBoZWlnaHQ6IG1heCg1NXB4LCA3dmgpO1xcbiAgICB3aWR0aDogbWF4KDU1cHgsIDd2aCk7XFxuICAgIGZvbnQtc2l6ZTogbWF4KDQwcHgsIDNyZW0pO1xcbiAgICByaWdodDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICBjb2xvcjogcmdiKDg1LCAzLCAxOSk7XFxufVxcblxcbiNhZGRUYXNrIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiBtYXgoNDBweCwgM3JlbSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBoZWlnaHQ6IG1heCg1NXB4LCA3dmgpO1xcbn1cXG5cXG4jYWRkVGFzazpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jYWRkVGFzazphY3RpdmUge1xcbiAgICBvcGFjaXR5OiAwLjI7XFxufVxcblxcbi5zZWxlY3RlZCB7XFxuICAgIGJvcmRlci1yaWdodDogMTBweCBncm9vdmUgdmFyKC0taG92ZXIpO1xcbn1cXG5cXG4jZGF0ZSB7XFxuICAgIHdpZHRoOiA0MHZoICFpbXBvcnRhbnQ7XFxuICAgIGZvbnQtc2l6ZTogNXZoO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IGdyZXk7XFxufVxcblxcbi5jYWxMZWZ0IHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAydmg7XFxufVxcblxcbi5jYWxSaWdodCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAydmg7XFxufVxcblxcbi5uYXZpZ2F0ZWNhbCB7XFxuICAgIGZvbnQtc2l6ZTogOHZoO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4jdGFza0Zvcm0ge1xcbiAgICB3aWR0aDogNjV2aDtcXG4gICAgaGVpZ2h0OiA2NXZoO1xcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDEwdmgpO1xcbiAgICB0b3A6IGNhbGMoNTAlIC0gMzB2aCk7XFxuICAgIHBhZGRpbmctbGVmdDogNSU7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDUlO1xcbiAgICBmb250LXNpemU6IDN2aDtcXG59XFxuXFxuI3Byb2plY3RGb3JtIHtcXG4gICAgd2lkdGg6IDU1dmg7XFxuICAgIGhlaWdodDogMjV2aDtcXG4gICAgbGVmdDogY2FsYyg1MCUgLSAxMHZoKTtcXG4gICAgdG9wOiBjYWxjKDUwJSAtIDMwdmgpO1xcbiAgICBwYWRkaW5nOiAwIDIlIDAgMiU7XFxuICAgIGZvbnQtc2l6ZTogM3ZoO1xcbn1cXG5cXG4jY29uZmlybWF0aW9uRm9ybSB7XFxuICAgIHdpZHRoOiA1MHZoO1xcbiAgICBoZWlnaHQ6IDM1dmg7XFxuICAgIGxlZnQ6IGNhbGMoNTAlIC0gMTB2aCk7XFxuICAgIHRvcDogY2FsYyg1MCUgLSAzMHZoKTtcXG4gICAgcGFkZGluZzogMCAzJSAwIDMlO1xcbiAgICBmb250LXNpemU6IDN2aDtcXG59XFxuXFxuI3Byb2plY3RGb3JtLFxcbiN0YXNrRm9ybSxcXG4jY29uZmlybWF0aW9uRm9ybSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3RvbmUpO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGJvcmRlcjogNXB4IHZhcigtLWhvdmVyKSBzb2xpZDtcXG59XFxuXFxuLmNvdmVyIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuXFxuI3Rhc2tGb3JtIGRpdixcXG4jcHJvamVjdEZvcm0gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI3Rhc2tGb3JtIGxhYmVsLFxcbiNwcm9qZWN0Rm9ybSBsYWJlbCB7XFxuICAgIGZsZXg6IDE7XFxuICAgIG1pbi13aWR0aDogMjB2aDtcXG4gICAgZm9udC1zaXplOiAzdmg7XFxufVxcblxcbiN0YXNrRm9ybSBpbnB1dCxcXG4jdGFza0Zvcm0gc2VsZWN0IHtcXG4gICAgZmxleDogNjtcXG4gICAgbWluLXdpZHRoOiAzMHZoO1xcbn1cXG5cXG4jZGVzY3JpcHRpb24sXFxuI3Rhc2tGb3JtIGlucHV0LFxcbiNwcmlvcml0eSxcXG4jcHJval90aXRsZSxcXG4jcHJval9kdWVEYXRlIHtcXG4gICAgZm9udC1zaXplOiAydmg7XFxuICAgIHBhZGRpbmc6IDElO1xcbn1cXG5cXG4jZGVzY3JpcHRpb24ge1xcbiAgICBoZWlnaHQ6IDIwdmg7XFxuICAgIG1heC13aWR0aDogMzB2aDtcXG4gICAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4ucmVkQnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDI1JTtcXG59XFxuXFxuLmdyZWVuQnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ3LCAyNTUsIDQ3KTtcXG59XFxuXFxuLnJlZEJ0bixcXG4uZ3JlZW5CdG4ge1xcbiAgICBmb250LXNpemU6IDN2aDtcXG4gICAgcGFkZGluZzogMTAlO1xcbiAgICB3aWR0aDogMTV2aDtcXG4gICAgaGVpZ2h0OiAwLjV2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mYnRuIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZXhwaXJlZCB7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHJlZDtcXG59XFxuXFxuXFxuLnRhc2tfZGVzYyB7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIGZsZXg6IDY7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4udGFza19kdWVEYXRlIHtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuLnRhc2tfdGl0bGUsXFxuLnRhc2tfZGVzYyxcXG4udGFza19kdWVEYXRlIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yMTIpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi50YXNrX3RpdGxlIHtcXG4gICAgZmxleDogMTtcXG4gICAgcGFkZGluZzogMCA2JTtcXG59XFxuXFxuLnRhc2tCdXR0b25zPmJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogM3ZoO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi5tb2JpbGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMDBweCkge1xcblxcbiAgICBib2R5LFxcbiAgICBodG1sIHtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgfVxcblxcbiAgICAubW9iaWxlIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB6LWluZGV4OiAxO1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgICAgIHdpZHRoOiA1NXB4O1xcbiAgICAgICAgaGVpZ2h0OiA1NXB4O1xcbiAgICAgICAgY29sb3I6IGJsYWNrO1xcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgd2hpdGU7XFxuICAgIH1cXG5cXG4gICAgLm1vYmlsZTpob3ZlciB7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG5cXG4gICAgI3NpZGViYXIge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgei1pbmRleDogMTtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgbWF4LWhlaWdodDogMTAwdmg7XFxuICAgICAgICBtYXgtd2lkdGg6IG1pbig3NSUsIDMwMHB4KTtcXG4gICAgfVxcblxcbiAgICAjcHJvamVjdEZvcm0sXFxuICAgICN0YXNrRm9ybSxcXG4gICAgI2NvbmZpcm1hdGlvbkZvcm0ge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgcmlnaHQ6IDA7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgICAgICB3aWR0aDogNDAwcHg7XFxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICB9XFxuXFxuICAgICN0YXNrRm9ybSxcXG4gICAgI3Byb2plY3RGb3JtIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAjcHJvamVjdEZvcm0gbGFiZWwge1xcbiAgICAgICAgbWF4LWhlaWdodDogNTBweDtcXG4gICAgfVxcblxcbiAgICAjcHJvamVjdEZvcm0+ZGl2IHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgI3Byb2plY3RGb3JtPmRpdj4qIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgICAgIHdpZHRoOiA5MCU7XFxuICAgIH1cXG5cXG4gICAgI3Rhc2tGb3JtIGxhYmVsIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtXFxuICAgIH1cXG5cXG4gICAgI3Rhc2tGb3JtICN0aXRsZSxcXG4gICAgI3Rhc2tGb3JtICNkdWVEYXRlIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgICAgIGhlaWdodDogNTBweDtcXG4gICAgICAgIHdpZHRoOiA5MCU7XFxuICAgIH1cXG5cXG4gICAgI2Rlc2NyaXB0aW9uIHtcXG4gICAgICAgIHdpZHRoOiA5MCU7XFxuICAgICAgICBtYXgtd2lkdGg6IG5vbmU7XFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgICAgICBtaW4taGVpZ2h0OiAyMDBweDtcXG4gICAgfVxcblxcbiAgICAjcHJpb3JpdHkge1xcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICAgICAgd2lkdGg6IDkwJTtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgICN0YXNrRm9ybT5kaXYge1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIH1cXG5cXG4gICAgLmZidG4ge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3cgIWltcG9ydGFudDtcXG4gICAgfVxcblxcbiAgICAuZmJ0bj4qIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS43cmVtO1xcbiAgICB9XFxuXFxuICAgIC5SUEIge1xcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICAgICAgei1pbmRleDogMTtcXG4gICAgfVxcblxcbiAgICAjZGF0ZSB7XFxuICAgICAgICBtYXgtd2lkdGg6IDI1MHB4O1xcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICB9XFxuXFxuICAgICNhZGRUYXNrIHtcXG4gICAgICAgIG1hcmdpbjogMCAxMDBweDtcXG4gICAgfVxcblxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7SUFD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OztJQUVBO1FBQ0ksZUFBZTtRQUNmLFVBQVU7UUFDVix1QkFBdUI7SUFDM0I7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsV0FBVztRQUNYLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsdUJBQXVCO1FBQ3ZCLG1CQUFtQjtRQUNuQixtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxhQUFhO1FBQ2IsOEJBQThCO0lBQ2xDOztJQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLFVBQVU7SUFDZDs7SUFFQTtRQUNJLGdCQUFnQjtRQUNoQixlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7QUFFSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAtLW5ldXRyYWw6ICNmNWY1ZjU7XFxuICAgIC0tdmlvbGV0OiB3aGl0ZTtcXG4gICAgLS1zdG9uZTogIzZlNjI3OTtcXG4gICAgLS16aW5jOiAjM2YzZjQ2O1xcbiAgICAtLWhvdmVyOiByZ2IoNjksIDMxLCA4Myk7XFxuXFxufVxcblxcbmJvZHksXFxuaHRtbCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxufVxcblxcblxcbiNzaWRlYmFyIHtcXG4gICAgZmxleDogMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0temluYyk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jc2lkZWJhcj5kaXYge1xcbiAgICBmb250LXNpemU6IDZ2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ob21lIHtcXG4gICAgZmxleDogMTtcXG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IGJsYWNrIHNvbGlkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdG9uZSk7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4jcHJvamVjdHMge1xcbiAgICBmbGV4OiA3O1xcbn1cXG5cXG4uaG9tZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGZsZXg6IDM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuXFxuLmV4cGFuZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5leHBhbmQ+ZGl2OmZpcnN0LWNoaWxkLFxcbiNhZGRQcm9qZWN0IHtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5leHBhbmQ+KiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jYWRkUHJvamVjdCB7XFxuICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3RvbmUpO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuI2FkZFByb2plY3Q6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyKTtcXG59XFxuXFxuLmV4cGFuZD5kaXY6Zmlyc3QtY2hpbGQge1xcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgYmxhY2s7XFxufVxcblxcblxcbi5leHBhbmQgLnNob3J0Y3V0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3RvbmUpO1xcbiAgICBwYWRkaW5nOiA1JTtcXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGJsYWNrO1xcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5leHBhbmQgLnNob3J0Y3V0cyB7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIG1heC1oZWlnaHQ6IDcwdmg7XFxufVxcblxcbi5zaG9ydGN1dDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZXhwYW5kPmRpdiB7XFxuICAgIGZsZXg6IDU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI3Rhc2tzIHtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzNXZoLCAxZnIpKTtcXG4gICAgZ3JpZC1nYXA6IDJ2aDtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDMlO1xcbn1cXG5cXG4jdGFza3M+ZGl2IHtcXG4gICAgaGVpZ2h0OiAzNXZoO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMCwgMTQ3LCAyMjMpO1xcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDAsIDE0NywgMjIzLCAxKSAwJSxcXG4gICAgICAgICAgICByZ2JhKDIxMSwgMjM5LCAyNDIsIDEpIDQ5JSwgcmdiYSgxNywgMTYsIDE2LCAxKSAxMDAlKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcXG59XFxuXFxuI3Rhc2tzPmRpdj5kaXYge1xcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xcbiAgICBmb250LXNpemU6IDN2aDtcXG59XFxuXFxuLk11c3Qge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjMyLCA1LCA1KTtcXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgyMzIsIDUsIDUsIDEpIDAlLFxcbiAgICAgICAgICAgIHJnYmEoMjEzLCAxNDQsIDE0NCwgMSkgNDklLCByZ2JhKDE3LCAxNiwgMTYsIDEpIDEwMCUpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5OZWNlc3Nhcnkge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjMyLCAxMDcsIDUpO1xcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDIzMiwgMTA3LCA1LCAxKSAwJSxcXG4gICAgICAgICAgICByZ2JhKDIzNSwgMjAwLCAxNjMsIDEpIDQ5JSwgcmdiYSgxNywgMTYsIDE2LCAxKSAxMDAlKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uTWF5YmUge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTkzLCAyMzIsIDUpO1xcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDE5MywgMjMyLCA1LCAxKSAwJSxcXG4gICAgICAgICAgICByZ2JhKDIyNCwgMjM1LCAxNjMsIDEpIDQ5JSwgcmdiYSgxNywgMTYsIDE2LCAxKSAxMDAlKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4jY29udGVudD4qOm5vdCgjdGFza3MpIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbn1cXG5cXG4uaGVhZGVyIC5SUEIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OiBtYXgoNTVweCwgN3ZoKTtcXG4gICAgd2lkdGg6IG1heCg1NXB4LCA3dmgpO1xcbiAgICBmb250LXNpemU6IG1heCg0MHB4LCAzcmVtKTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgY29sb3I6IHJnYig4NSwgMywgMTkpO1xcbn1cXG5cXG4jYWRkVGFzayB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogbWF4KDQwcHgsIDNyZW0pO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgaGVpZ2h0OiBtYXgoNTVweCwgN3ZoKTtcXG59XFxuXFxuI2FkZFRhc2s6aG92ZXIge1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2FkZFRhc2s6YWN0aXZlIHtcXG4gICAgb3BhY2l0eTogMC4yO1xcbn1cXG5cXG4uc2VsZWN0ZWQge1xcbiAgICBib3JkZXItcmlnaHQ6IDEwcHggZ3Jvb3ZlIHZhcigtLWhvdmVyKTtcXG59XFxuXFxuI2RhdGUge1xcbiAgICB3aWR0aDogNDB2aCAhaW1wb3J0YW50O1xcbiAgICBmb250LXNpemU6IDV2aDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiBncmV5O1xcbn1cXG5cXG4uY2FsTGVmdCB7XFxuICAgIG1hcmdpbi1yaWdodDogMnZoO1xcbn1cXG5cXG4uY2FsUmlnaHQge1xcbiAgICBtYXJnaW4tbGVmdDogMnZoO1xcbn1cXG5cXG4ubmF2aWdhdGVjYWwge1xcbiAgICBmb250LXNpemU6IDh2aDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuI3Rhc2tGb3JtIHtcXG4gICAgd2lkdGg6IDY1dmg7XFxuICAgIGhlaWdodDogNjV2aDtcXG4gICAgbGVmdDogY2FsYyg1MCUgLSAxMHZoKTtcXG4gICAgdG9wOiBjYWxjKDUwJSAtIDMwdmgpO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA1JTtcXG4gICAgZm9udC1zaXplOiAzdmg7XFxufVxcblxcbiNwcm9qZWN0Rm9ybSB7XFxuICAgIHdpZHRoOiA1NXZoO1xcbiAgICBoZWlnaHQ6IDI1dmg7XFxuICAgIGxlZnQ6IGNhbGMoNTAlIC0gMTB2aCk7XFxuICAgIHRvcDogY2FsYyg1MCUgLSAzMHZoKTtcXG4gICAgcGFkZGluZzogMCAyJSAwIDIlO1xcbiAgICBmb250LXNpemU6IDN2aDtcXG59XFxuXFxuI2NvbmZpcm1hdGlvbkZvcm0ge1xcbiAgICB3aWR0aDogNTB2aDtcXG4gICAgaGVpZ2h0OiAzNXZoO1xcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDEwdmgpO1xcbiAgICB0b3A6IGNhbGMoNTAlIC0gMzB2aCk7XFxuICAgIHBhZGRpbmc6IDAgMyUgMCAzJTtcXG4gICAgZm9udC1zaXplOiAzdmg7XFxufVxcblxcbiNwcm9qZWN0Rm9ybSxcXG4jdGFza0Zvcm0sXFxuI2NvbmZpcm1hdGlvbkZvcm0ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN0b25lKTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBib3JkZXI6IDVweCB2YXIoLS1ob3Zlcikgc29saWQ7XFxufVxcblxcbi5jb3ZlciB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcblxcbiN0YXNrRm9ybSBkaXYsXFxuI3Byb2plY3RGb3JtIGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiN0YXNrRm9ybSBsYWJlbCxcXG4jcHJvamVjdEZvcm0gbGFiZWwge1xcbiAgICBmbGV4OiAxO1xcbiAgICBtaW4td2lkdGg6IDIwdmg7XFxuICAgIGZvbnQtc2l6ZTogM3ZoO1xcbn1cXG5cXG4jdGFza0Zvcm0gaW5wdXQsXFxuI3Rhc2tGb3JtIHNlbGVjdCB7XFxuICAgIGZsZXg6IDY7XFxuICAgIG1pbi13aWR0aDogMzB2aDtcXG59XFxuXFxuI2Rlc2NyaXB0aW9uLFxcbiN0YXNrRm9ybSBpbnB1dCxcXG4jcHJpb3JpdHksXFxuI3Byb2pfdGl0bGUsXFxuI3Byb2pfZHVlRGF0ZSB7XFxuICAgIGZvbnQtc2l6ZTogMnZoO1xcbiAgICBwYWRkaW5nOiAxJTtcXG59XFxuXFxuI2Rlc2NyaXB0aW9uIHtcXG4gICAgaGVpZ2h0OiAyMHZoO1xcbiAgICBtYXgtd2lkdGg6IDMwdmg7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuLnJlZEJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyNSU7XFxufVxcblxcbi5ncmVlbkJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0NywgMjU1LCA0Nyk7XFxufVxcblxcbi5yZWRCdG4sXFxuLmdyZWVuQnRuIHtcXG4gICAgZm9udC1zaXplOiAzdmg7XFxuICAgIHBhZGRpbmc6IDEwJTtcXG4gICAgd2lkdGg6IDE1dmg7XFxuICAgIGhlaWdodDogMC41dmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZmJ0biB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmV4cGlyZWQge1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCByZWQ7XFxufVxcblxcblxcbi50YXNrX2Rlc2Mge1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBmbGV4OiA2O1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLnRhc2tfZHVlRGF0ZSB7XFxuICAgIGZsZXg6IDE7XFxufVxcblxcbi50YXNrX3RpdGxlLFxcbi50YXNrX2Rlc2MsXFxuLnRhc2tfZHVlRGF0ZSB7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMjEyKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udGFza190aXRsZSB7XFxuICAgIGZsZXg6IDE7XFxuICAgIHBhZGRpbmc6IDAgNiU7XFxufVxcblxcbi50YXNrQnV0dG9ucz5idXR0b24ge1xcbiAgICBmb250LXNpemU6IDN2aDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4ubW9iaWxlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuXFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTAwcHgpIHtcXG5cXG4gICAgYm9keSxcXG4gICAgaHRtbCB7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgLm1vYmlsZSB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgei1pbmRleDogMTtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICB3aWR0aDogNTVweDtcXG4gICAgICAgIGhlaWdodDogNTVweDtcXG4gICAgICAgIGNvbG9yOiBibGFjaztcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICB9XFxuXFxuICAgIC5tb2JpbGU6aG92ZXIge1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxuXFxuICAgICNzaWRlYmFyIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHotaW5kZXg6IDE7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xcbiAgICAgICAgbWF4LXdpZHRoOiBtaW4oNzUlLCAzMDBweCk7XFxuICAgIH1cXG5cXG4gICAgI3Byb2plY3RGb3JtLFxcbiAgICAjdGFza0Zvcm0sXFxuICAgICNjb25maXJtYXRpb25Gb3JtIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIHJpZ2h0OiAwO1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICAgICAgd2lkdGg6IDQwMHB4O1xcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgfVxcblxcbiAgICAjdGFza0Zvcm0sXFxuICAgICNwcm9qZWN0Rm9ybSB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgI3Byb2plY3RGb3JtIGxhYmVsIHtcXG4gICAgICAgIG1heC1oZWlnaHQ6IDUwcHg7XFxuICAgIH1cXG5cXG4gICAgI3Byb2plY3RGb3JtPmRpdiB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgICNwcm9qZWN0Rm9ybT5kaXY+KiB7XFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxuICAgICAgICB3aWR0aDogOTAlO1xcbiAgICB9XFxuXFxuICAgICN0YXNrRm9ybSBsYWJlbCB7XFxuICAgICAgICBmb250LXNpemU6IDEuNXJlbVxcbiAgICB9XFxuXFxuICAgICN0YXNrRm9ybSAjdGl0bGUsXFxuICAgICN0YXNrRm9ybSAjZHVlRGF0ZSB7XFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgICAgICBoZWlnaHQ6IDUwcHg7XFxuICAgICAgICB3aWR0aDogOTAlO1xcbiAgICB9XFxuXFxuICAgICNkZXNjcmlwdGlvbiB7XFxuICAgICAgICB3aWR0aDogOTAlO1xcbiAgICAgICAgbWF4LXdpZHRoOiBub25lO1xcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICAgICAgbWluLWhlaWdodDogMjAwcHg7XFxuICAgIH1cXG5cXG4gICAgI3ByaW9yaXR5IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgICAgIHdpZHRoOiA5MCU7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAjdGFza0Zvcm0+ZGl2IHtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICB9XFxuXFxuICAgIC5mYnRuIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7XFxuICAgIH1cXG5cXG4gICAgLmZidG4+KiB7XFxuICAgICAgICBmb250LXNpemU6IDEuN3JlbTtcXG4gICAgfVxcblxcbiAgICAuUlBCIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgICAgIHotaW5kZXg6IDE7XFxuICAgIH1cXG5cXG4gICAgI2RhdGUge1xcbiAgICAgICAgbWF4LXdpZHRoOiAyNTBweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgfVxcblxcbiAgICAjYWRkVGFzayB7XFxuICAgICAgICBtYXJnaW46IDAgMTAwcHg7XFxuICAgIH1cXG5cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gJy4vdG9kbyc7XG5cbmZ1bmN0aW9uIGdldERhdGUoKSB7XG4gIGNvbnN0IGQgPSBuZXcgRGF0ZSgpO1xuICBsZXQgbW9udGggPSBgJHtkLmdldE1vbnRoKCkgKyAxfWA7XG4gIGxldCBkYXkgPSBgJHtkLmdldERhdGUoKX1gO1xuICBjb25zdCB5ZWFyID0gZC5nZXRGdWxsWWVhcigpO1xuXG4gIGlmIChtb250aC5sZW5ndGggPCAyKSB7IG1vbnRoID0gYDAke21vbnRofWA7IH1cbiAgaWYgKGRheS5sZW5ndGggPCAyKSB7IGRheSA9IGAwJHtkYXl9YDsgfVxuXG4gIHJldHVybiBbeWVhciwgbW9udGgsIGRheV0uam9pbignLScpO1xufVxuXG5mdW5jdGlvbiBnZXRNb250aEZyb21TdHJpbmcobW9uKSB7XG4gIHJldHVybiBuZXcgRGF0ZShEYXRlLnBhcnNlKGAke21vbn0gMSwgMjAxMmApKS5nZXRNb250aCgpICsgMTtcbn1cblxuY29uc3QgY2FsZW5kZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGF0ZScpO1xuXG5jb25zdCB0b2RheSA9IGdldERhdGUoKTtcbmNhbGVuZGVyLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB0b2RheSk7XG5jYWxlbmRlci5zZXRBdHRyaWJ1dGUoJ21pbicsIHRvZGF5KTtcblxuLy8gc2V0IGRlZmF1bHQgZGF0ZSB2YWx1ZXMgdG8gdG9kYXlcbmNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlRGF0ZScpO1xuZHVlRGF0ZS52YWx1ZSA9IGdldERhdGUoKTtcbi8vIGNvbnN0IHByb2pfZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJval9kdWVEYXRlXCIpO1xuLy8gcHJval9kdWVEYXRlLnZhbHVlID0gZ2V0RGF0ZSgpO1xuLy8gaWRlYWxseSB5b3Ugd291bGQgZm9ybWF0IHRvIGZpdCBsb2NhdGlvbiwgYnV0IHdoYXQgYSBwYWluIEQ6XG5mdW5jdGlvbiBmb3JtYXREYXRlKGRhdGUpIHtcbiAgY29uc3QgdGVtcCA9IGRhdGUuc3BsaXQoJy0nKTtcbiAgcmV0dXJuIFt0ZW1wWzFdLCB0ZW1wWzJdLCB0ZW1wWzBdXS5qb2luKCctJyk7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdCh0ZW1wKSB7XG4gIC8vIHRlbXAgKG9iamVjdCk6XG4gIC8vIFN1biBBdWcgMjEgMjAyMiAwMjowMDowMCBHTVQrMDIwMCAoQ2VudHJhbCBFdXJvcGVhbiBTdW1tZXIgVGltZSlcbiAgY29uc3Qgc3RyID0gdGVtcC50b1N0cmluZygpO1xuICBjb25zdCBtb250aCA9IGdldE1vbnRoRnJvbVN0cmluZyhzdHIuc3Vic3RyaW5nKDQsIDcpKTtcbiAgY29uc3QgZGF5ID0gc3RyLnN1YnN0cmluZyg4LCAxMCk7XG4gIGNvbnN0IHllYXIgPSBzdHIuc3Vic3RyaW5nKDExLCAxNSk7XG4gIHJldHVybiBbZGF5LCBtb250aCwgeWVhcl07XG59XG5cbmNvbnN0IGV4cGlyZUNoZWNrID0gKHRhc2spID0+IHtcbiAgLy8gY29uc3QgdG9kYXlBcnIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVcIikudmFsdWUuc3BsaXQoXCItXCIpO1xuXG4gIGNvbnN0IHRvZGF5QXJyID0gZm9ybWF0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlJykudmFsdWVBc0RhdGUpO1xuICAvLyBbZGF5LCBtb250aCwgeWVhcl1cbiAgY29uc3QgY3VycmVudFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0ZWQnKS50ZXh0Q29udGVudDtcbiAgY29uc3QgYXJyID0gcHJvamVjdHNbY3VycmVudFByb2plY3RdLnRhc2tzW3Rhc2sudGl0bGVdLmR1ZURhdGUuc3BsaXQoJy0nKTtcbiAgaWYgKCt0b2RheUFyclswXSA+ICthcnJbMV0gfHwgK3RvZGF5QXJyWzFdID4gK2FyclswXSB8fCArdG9kYXlBcnJbMl1cbiAgICA+ICthcnJbMl0pIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vKiBjb25zdCBwcm9qX2V4cGlyZUNoZWNrID0gKCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWxlY3RlZFwiKS50ZXh0Q29udGVudDtcbiAgICBpZiAoY3VycmVudFByb2plY3QgIT0gXCJIT01FXCIpIHtcbiAgICAgICAgY29uc3QgdG9kYXlBcnIgPSBmb3JtYXQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlXCIpLnZhbHVlQXNEYXRlKTtcbiAgICAgICAgY29uc3QgYXJyID0gcHJvamVjdHNbY3VycmVudFByb2plY3RdLmR1ZURhdGUuc3BsaXQoXCItXCIpO1xuICAgICAgICAvLyB5ZWFyIG1vbnRoIGRheVxuXG4gICAgICAgIGlmICgrdG9kYXlBcnJbMF0gPiArYXJyWzJdIHx8ICt0b2RheUFyclsxXSA+ICthcnJbMF0gfHwgK3RvZGF5QXJyWzJdID5cbiAgICAgICAgICAgICthcnJbMF0pIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG59ICovXG5cbmV4cG9ydCB7IGdldERhdGUsIGZvcm1hdERhdGUsIGV4cGlyZUNoZWNrIC8qIHByb2pfZXhwaXJlQ2hlY2sgKi8gfTtcbiIsImltcG9ydCB7IGV4cGlyZUNoZWNrIH0gZnJvbSAnLi9kYXRlJztcblxuZXhwb3J0IGNvbnN0IGFkZFRhc2tEID0gKHRhc2spID0+IHtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKGAke3Rhc2suaWR9YCk7XG5cbiAgaWYgKGV4cGlyZUNoZWNrKHRhc2spKSB7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2V4cGlyZWQnKTtcbiAgfSBlbHNlIHtcbiAgICBkaXYuY2xhc3NMaXN0LnJlbW92ZSgnZXhwaXJlZCcpO1xuICB9XG5cbiAgY29uc3QgdGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza3MnKTtcbiAgdGFza3MuYXBwZW5kQ2hpbGQoZGl2KTtcbn07XG5cbmV4cG9ydCBjb25zdCBlcmFzZVRhc2tzRCA9ICgpID0+IHtcbiAgY29uc3QgdGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza3MnKTtcbiAgd2hpbGUgKHRhc2tzLmZpcnN0Q2hpbGQpIHtcbiAgICB0YXNrcy5yZW1vdmVDaGlsZCh0YXNrcy5sYXN0Q2hpbGQpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZXJhc2VUYXNrRCA9IChpZCkgPT4ge1xuICBjb25zdCB0YXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7aWR9YCk7XG4gIHRhc2sucmVtb3ZlKCk7XG59O1xuXG5leHBvcnQgY29uc3QgYWRkUHJvamVjdEQgPSAocHJvamVjdCwgaWQpID0+IHtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKCdzaG9ydGN1dCcpO1xuICBkaXYuaWQgPSBpZDtcbiAgZGl2LnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcblxuICBjb25zdCBzaG9ydGN1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hvcnRjdXRzJyk7XG4gIHNob3J0Y3V0cy5hcHBlbmQoZGl2KTtcbn07XG5cbi8vIEQgYXQgdGhlIGVuZCByZXByZXNlbnRzIERPTVxuIiwiaW1wb3J0IHsgY2hlY2tEdWVEYXRlLCBzaG93Rm9ybUFuZENvdmVyIH0gZnJvbSAnLi91dGlsaXR5JztcbmltcG9ydCB7IG9uQ2xpY2tpbmdSUEIgfSBmcm9tICcuL3NldHVwJztcbmltcG9ydCB7XG4gIGFkZFRhc2ssIHJlc2V0Rm9ybSwgYWRkUHJvamVjdCwgcmVzZXRQcm9qRm9ybSwgcmVzZXRDb25mRm9ybSxcbn0gZnJvbSAnLi9mb3Jtcyc7XG5cbi8vIGl0IHJlc2V0cyBldmVyeSB0aW1lIHdlYnNpdGUgcmVmcmVzaGVzIHNvIGR1cGxpY2F0aW9uIGJ1ZyBvY2N1cnMsXG4vLyBhbmQgaXQncyBtb3JlIGVmZmljaWVudCwgKGxpdHRsZSBiaXQgbG9sXG5cbmNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkVGFzaycpO1xuYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgc2hvd0Zvcm1BbmRDb3ZlcigpO1xufSk7XG5cbi8vIHRob3VnaHQgaXQgd291bGQgZWFzeSB0byBwdXQgYWxsIGZvcm0gcmVsYXRlZCBjb2RlIHRvIHRoZSBzdWJtaXQgYnRuIGxpc3RlbmVyXG5jb25zdCBnYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyZWVuJyk7XG5nYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBhZGRUYXNrKCk7XG59KTtcblxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrRm9ybScpO1xuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgaWYgKGUuY29kZSA9PT0gJ0VudGVyJykge1xuICAgIGFkZFRhc2soKTtcbiAgfVxufSk7XG5cbmNvbnN0IHJidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVkJyk7XG5yYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICByZXNldEZvcm0oKTtcbn0pO1xuXG5jb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZFByb2plY3QnKTtcbmFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGNvbnN0IHByb2pGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RGb3JtJyk7XG4gIHByb2pGb3JtLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gIGNvbnN0IGNvdmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvdmVyJyk7XG4gIGNvdmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xufSk7XG5cbmNvbnN0IHByb2pHQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2pfZ3JlZW4nKTtcbnByb2pHQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBhZGRQcm9qZWN0KCk7XG59KTtcblxuY29uc3QgcHJvakZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdEZvcm0nKTtcbnByb2pGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICBpZiAoZS5jb2RlID09PSAnRW50ZXInKSB7XG4gICAgYWRkUHJvamVjdCgpO1xuICB9XG59KTtcblxuY29uc3QgcHJvalJCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJval9yZWQnKTtcbnByb2pSQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICByZXNldFByb2pGb3JtKCk7XG59KTtcblxuY29uc3QgY29uZkdyZWVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbmZfZ3JlZW4nKTtcbmNvbmZHcmVlbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgb25DbGlja2luZ1JQQigpO1xuICByZXNldENvbmZGb3JtKCk7XG59KTtcblxuY29uc3QgY29uZlJlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb25mX3JlZCcpO1xuY29uZlJlZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgcmVzZXRDb25mRm9ybSgpO1xufSk7XG5cbi8vIG5hdmlnYXRlIGNhbGVuZGVyLCBsZWZ0IGFuZCByaWdodCBhcnJvd1xuY29uc3QgbGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYWxMZWZ0Jyk7XG5jb25zdCByaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYWxSaWdodCcpO1xuY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGF0ZScpO1xubGVmdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgaW5wdXQuc3RlcERvd24oKTtcbiAgY2hlY2tEdWVEYXRlKCk7XG59KTtcbnJpZ2h0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBpbnB1dC5zdGVwVXAoKTtcbiAgY2hlY2tEdWVEYXRlKCk7XG59KTtcbi8vIGRhdGUgaXMgcGlja2VkIG1hbnVhbGx5IGZyb20gdGhlIGNhbGFuZGVyLCBjbGljayBkb2Vzbid0IHdvcmtcbmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgY2hlY2tEdWVEYXRlKCk7XG59KTtcbiIsImltcG9ydCB7IGFkZFByb2plY3RELCBhZGRUYXNrRCB9IGZyb20gJy4vZG9tJztcbmltcG9ydCB7IHNldHVwVGFza0QsIGFkZFByb2plY3RMaXN0ZW5lciB9IGZyb20gJy4vc2V0dXAnO1xuaW1wb3J0IHsgcHJvamVjdEZhY3RvcnksIHByb2plY3RzLCB0b2RvIH0gZnJvbSAnLi90b2RvJztcbmltcG9ydCB7IGZvcm1hdERhdGUsIGdldERhdGUgfSBmcm9tICcuL2RhdGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRGb3JtKCkge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tGb3JtJyk7XG4gIGNvbnN0IGNvdmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvdmVyJyk7XG4gIGZvcm0ucmVzZXQoKTtcbiAgZm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBjb3Zlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gIC8vIHRoaXMgaXMgYWxzbyBkZWZhdWx0LCBwcmVzZW50IGluIGRhdGUuanMhXG4gIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlRGF0ZScpO1xuICBkdWVEYXRlLnZhbHVlID0gZ2V0RGF0ZSgpO1xufVxuXG4vLyBjb3VsZG4ndCBnZXQgc3VibWl0IHR5cGUgYnV0dG9uIHRvIHdvcmssIHNvIG5lZWRlZCBhIGZ1bmN0aW9uIHRvIGdldCB2YWx1ZXNcbi8vIGZyb20gdGhlIGZvcm0sIHRoaXMgaXMgaXRcbmZ1bmN0aW9uIGdldFRhc2soKSB7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJykudmFsdWU7XG4gIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdGVkJykudGV4dENvbnRlbnQ7XG4gIGlmICghcHJvamVjdHNbY3VycmVudFByb2plY3RdLnRhc2tzW3RpdGxlXSkge1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJykudmFsdWU7XG4gICAgbGV0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlRGF0ZScpLnZhbHVlO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5JykudmFsdWU7XG5cbiAgICBpZiAoIWR1ZURhdGUpIHtcbiAgICAgIGR1ZURhdGUgPSBnZXREYXRlKCk7XG4gICAgfVxuXG4gICAgbGV0IGlkID0gMDtcbiAgICAvLyBlYXNpZXN0IHdheSB0byBwcmV2ZW50IGR1cGxpY2F0aW9uIGJ1ZyA9PiAyIHRhc2tzIDEgaWRcbiAgICBPYmplY3Qua2V5cyhwcm9qZWN0c1tjdXJyZW50UHJvamVjdF0udGFza3MpLmZvckVhY2goKHRhc2tOYW1lKSA9PiB7XG4gICAgICBpZCA9IE1hdGgubWF4KGlkLCBOdW1iZXIocHJvamVjdHNbY3VycmVudFByb2plY3RdLnRhc2tzW3Rhc2tOYW1lXS5pZFxuICAgICAgICAucmVwbGFjZSgndGFzaycsICcnKSkgKyAxKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHRhc2sgPSB0b2RvKFxuICAgICAgdGl0bGUsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIGZvcm1hdERhdGUoZHVlRGF0ZSksXG4gICAgICBwcmlvcml0eSxcbiAgICAgIGB0YXNrJHtpZC50b1N0cmluZygpfWAsXG4gICAgKTtcbiAgICByZXR1cm4gdGFzaztcbiAgfVxuICByZXR1cm4gMDtcbn1cblxuZXhwb3J0IGNvbnN0IGFkZFRhc2sgPSAoKSA9PiB7XG4gIC8vIHJ1biBvbmx5IGlmIG5vdCBlZGl0aW5nLCB3ZSBoYXZlIDIgZXZlbnQgbGlzdG5lcnMgb24gb25lIGJ1dHRvblxuICAvLyBzbyB0aGlzIGZvcmNlcyB0aGUgb3RoZXIgb25lIHRvIHdvcmsgYWxvbmUsIHdoaWNoIGlzIHdoYXQgd2Ugd2FudFxuICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RlZCcpLnRleHRDb250ZW50O1xuICAvLyBidWdzIG9jY3VyIGlmIGZsYWcgaXNuJ3QgcHJlc2VudCwgc2luY2UgYWZ0ZXIgSSBhbSB1c2luZyB0d29cbiAgLy8gZXZlbnQgbGlzdG5lcnMgZm9yIG9uZSBidXR0b25cbiAgY29uc3QgdGFzayA9IGdldFRhc2soKTtcblxuICBpZiAodGFzayA9PT0gMCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1hbGVydFxuICAgIGFsZXJ0KCdGYWlsdXJlLCB0YXNrIHdpdGggdGhlIHNhbWUgdGl0bGUgYWxyZWFkeSBleGlzdHMnKTtcbiAgfVxuICBpZiAodGFzaykge1xuICAgIHJlc2V0Rm9ybSgpO1xuICAgIC8vIHNldCBkZWZhdWx0IGRhdGUsIHNvIE1NLURELVlZWVkgaXMgbm90IHNob3duIG9uIGZvcm0/Pz8/P1xuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlRGF0ZScpO1xuICAgIGR1ZURhdGUudmFsdWUgPSBnZXREYXRlKCk7XG5cbiAgICAvLyBzZXR1cCB0YXNrXG4gICAgcHJvamVjdHNbY3VycmVudFByb2plY3RdLnRhc2tzW3Rhc2sudGl0bGVdID0gdGFzaztcbiAgICBhZGRUYXNrRCh0YXNrLCBjdXJyZW50UHJvamVjdCk7XG4gICAgc2V0dXBUYXNrRCh0YXNrKTtcblxuICAgIGNvbnN0IHJidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVkJyk7XG4gICAgcmJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuXG4gICAgY29uc3QgZ2J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmVlbicpO1xuICAgIGdidXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYig0NywgMjU1LCA0NyknO1xuICAgIGdidXR0b24udGV4dENvbnRlbnQgPSAnQWRkJztcblxuICAgIC8vIGF0dGVtcHQgYXQgXCJyZWZyZXNoaW5nXCIgdGhlIGhlaWdodCwgYmVjYXVzZSBpdCBzb21ldGltZXMgZm9yZ2V0c1xuICAgIC8vIGl0IG5lZWRzIHRvIGJlIDEwMHZoIG9uIG1vYmlsZSBicm93c2VycyA+LS4tPFxuICAgIC8vIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2lkZWJhcicpO1xuICAgIC8vIHNpZGViYXIuc3R5bGUuaGVpZ2h0ID0gJzEwMHZoJztcblxuICAgIC8vIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIC8vIGNvbnRlbnQuc3R5bGUuaGVpZ2h0ID0gJzEwMHZoJztcblxuICAgIC8vIHNhdmUgdG8gbG9jYWwgd2hlbiB5b3UgYWRkIHRhc2sgb3IgcHJvamVjdFxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG4gIH1cbn07XG5cbi8vIHNpbWlsYXIgcHJvYmxlbSBhcyB0YXNrIGlkXG4vLyBsZXQgcHJvamVjdElEID0gT2JqZWN0LmtleXMocHJvamVjdHMpLmxlbmd0aDtcblxuLy8gYWdhaW50LCBuZWVkZWQgYSB3YXkgdG8gZ2V0IHZhbHVlcyBmcm9tIHRoZSBmb3JtXG5mdW5jdGlvbiBnZXRQcm9qZWN0KCkge1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qX3RpdGxlJykudmFsdWU7XG4gIGlmICghcHJvamVjdHNbdGl0bGVdKSB7XG4gICAgLy8gY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJval9kdWVEYXRlXCIpLnZhbHVlO1xuXG4gICAgbGV0IHByb2plY3RJRCA9IDA7XG4gICAgLy8gZWFzaWVzdCB3YXkgdG8gcHJldmVudCBkdXBsaWNhdGlvbiBidWcgPT4gMiBwcm9qZWN0cyAxIGlkXG4gICAgT2JqZWN0LmtleXMocHJvamVjdHMpLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgIHByb2plY3RJRCA9IE1hdGgubWF4KHByb2plY3RJRCwgTnVtYmVyKHByb2plY3RzW3Byb2plY3RdLmlkXG4gICAgICAgIC5yZXBsYWNlKCdQcicsICcnKSkgKyAxKTtcbiAgICB9KTtcbiAgICBjb25zdCBwcm9qID0gcHJvamVjdEZhY3RvcnkoXG4gICAgICB0aXRsZSxcbiAgICAgIC8qIGR1ZURhdGUsICovXG4gICAgICBgUHIke3Byb2plY3RJRC50b1N0cmluZygpfWAsXG4gICAgKTtcbiAgICByZXR1cm4gcHJvajtcbiAgfVxuICByZXR1cm4gMDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0UHJvakZvcm0oKSB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdEZvcm0nKTtcbiAgY29uc3QgY292ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY292ZXInKTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2pfdGl0bGUnKS52YWx1ZSA9ICcnO1xuICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2pfZHVlRGF0ZVwiKS52YWx1ZSA9IFwiXCI7XG4gIGZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgY292ZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAvLyB0aGlzIGlzIGFsc28gZGVmYXVsdCwgcHJlc2VudCBpbiBkYXRlLmpzIVxuICAvLyBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qX2R1ZURhdGVcIik7XG4gIC8vIGR1ZURhdGUudmFsdWUgPSBnZXREYXRlKCk7XG59XG5cbmV4cG9ydCBjb25zdCBhZGRQcm9qZWN0ID0gKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0ID0gZ2V0UHJvamVjdCgpO1xuICBpZiAoIXByb2plY3QpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYWxlcnRcbiAgICBhbGVydChcIkZhaWx1cmUsIGNhbid0IHJlcGVhdCBwcm9qZWN0IG5hbWVcIik7XG4gIH0gZWxzZSB7XG4gICAgcmVzZXRQcm9qRm9ybSgpO1xuICAgIHByb2plY3RzW3Byb2plY3QudGl0bGVdID0gcHJvamVjdDtcbiAgICBwcm9qZWN0c1twcm9qZWN0LnRpdGxlXS50YXNrcyA9IHt9O1xuICAgIHByb2plY3RzW3Byb2plY3QudGl0bGVdLmlkID0gcHJvamVjdC5pZDtcblxuICAgIGFkZFByb2plY3REKHByb2plY3QsIHByb2plY3QuaWQpO1xuICAgIGFkZFByb2plY3RMaXN0ZW5lcihwcm9qZWN0LmlkKTtcblxuICAgIC8vIHNhdmUgdG8gbG9jYWwgd2hlbiB5b3UgYWRkIHRhc2sgb3IgcHJvamVjdFxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG4gIH1cbn07XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNldENvbmZGb3JtKCkge1xuICBjb25zdCBjb25mRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb25maXJtYXRpb25Gb3JtJyk7XG4gIGNvbmZGb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGNvbnN0IGNvdmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvdmVyJyk7XG4gIGNvdmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59XG4iLCJjb25zdCBtb2JpbGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9iaWxlJyk7XG5tb2JpbGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2lkZWJhcicpO1xuICBpZiAoc2lkZWJhci5zdHlsZS5kaXNwbGF5ID09PSAnZmxleCcpIHtcbiAgICBzaWRlYmFyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH0gZWxzZSB7XG4gICAgc2lkZWJhci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIG1vYmlsZUJ0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9XG59KTtcblxuY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaWRlYmFyJyk7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICBpZiAod2luZG93LmlubmVyV2lkdGggPiAnMTEwMCcpIHtcbiAgICBzaWRlYmFyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgbW9iaWxlQnRuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cbiAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgJzExMDAnKSB7XG4gICAgc2lkZWJhci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIG1vYmlsZUJ0bi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICB9XG4gIC8vIC8vaWYgKHNpZGViYXIuc3R5bGUuZGlzcGxheSAhPSBcImZsZXhcIikge1xuICAvLyAgbW9iaWxlQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgLy8gfVxufSk7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuY29udGVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgJzExMDAnKSB7XG4gICAgc2lkZWJhci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIG1vYmlsZUJ0bi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICB9XG59KTtcblxuLy8gVGhlcmUgbWlnaHQgYmUgYSBtb3JlIGVmZmljaWVudCB3YXkuIFRoaXMgc2VlbXMgdG8gd29yayB0aG91Z2guXG4iLCJpbXBvcnQge1xuICBlcmFzZVRhc2tELCBhZGRQcm9qZWN0RCwgYWRkVGFza0QsIGVyYXNlVGFza3NELFxufSBmcm9tICcuL2RvbSc7XG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gJy4vdG9kbyc7XG5pbXBvcnQgeyBnZXRUaXRsZSwgZGVsZXRlVGFzaywgc2hvd0Zvcm1BbmRDb3ZlciB9IGZyb20gJy4vdXRpbGl0eSc7XG5cbmNvbnN0IGRvVUkgPSAod29ya2luZ1Rhc2spID0+IHtcbiAgY29uc3QgdGFza05vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt3b3JraW5nVGFzay5pZH1gKTtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IHdvcmtpbmdUYXNrLnRpdGxlO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0YXNrX3RpdGxlJyk7XG4gIHRhc2tOb2RlLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICBjb25zdCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRlc2MudGV4dENvbnRlbnQgPSB3b3JraW5nVGFzay5kZXNjcmlwdGlvbjtcbiAgZGVzYy5jbGFzc0xpc3QuYWRkKCd0YXNrX2Rlc2MnKTtcbiAgdGFza05vZGUuYXBwZW5kQ2hpbGQoZGVzYyk7XG5cbiAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkdWVEYXRlLnRleHRDb250ZW50ID0gYER1ZSBEYXRlOiAke3dvcmtpbmdUYXNrLmR1ZURhdGV9YDtcbiAgZHVlRGF0ZS5jbGFzc0xpc3QuYWRkKCd0YXNrX2R1ZURhdGUnKTtcbiAgdGFza05vZGUuYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG5cbiAgdGFza05vZGUuY2xhc3NMaXN0LmFkZChgJHt3b3JraW5nVGFzay5wcmlvcml0eX1gKTtcbn07XG5cbmNvbnN0IHNldHVwRGVsZXRlQnV0dG9uID0gKHdvcmtpbmdUYXNrKSA9PiB7XG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidG4udGV4dENvbnRlbnQgPSAnWCc7XG5cbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7d29ya2luZ1Rhc2suaWR9IC50YXNrQnV0dG9uc2ApO1xuICBkaXYuYXBwZW5kQ2hpbGQoYnRuKTtcblxuICAvLyB3ZSBuZWVkIHRvIG9idGFpbiB0YXNrIG9iamVjdCBmcm9tIHRoZSBidXR0b24gaXRzZWxmXG4gIC8vIGJlY2F1c2UgaWYgd2UgdXNlIGFueSB2YXJpYWJsZSBpdCB3b24ndCBkZWxldGUgcHJvcGVybHlcbiAgLy8gdGhpcyBpcyBkb25lIHZpYSBtYXRjaGluZyBidG4gY2xhc3MgbmFtZSB3aGljaCBpcyBlcXVhbCB0byB0aGUgaWRcbiAgLy8gb2YgdGhlIHRhc2sgdGhhdCB3ZSBhcmUgc2Vla2luZyBpbiBhIHByb2plY3RzIG9iamVjdFxuICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGNvbnN0IHRhc2tJRCA9IFsuLi5lLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2xhc3NMaXN0XVswXTtcbiAgICBjb25zdCB0aXRsZSA9IGdldFRpdGxlKHRhc2tJRCk7XG4gICAgY29uc3QgY3VycmVudFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0ZWQnKS50ZXh0Q29udGVudDtcbiAgICBkZWxldGVUYXNrKGN1cnJlbnRQcm9qZWN0LCBwcm9qZWN0c1tjdXJyZW50UHJvamVjdF0udGFza3NbdGl0bGVdKTtcbiAgICBlcmFzZVRhc2tEKHRhc2tJRCk7XG4gIH0pO1xufTtcblxuZnVuY3Rpb24gc2V0dXBFZGl0Rm9ybSh0aXRsZSkge1xuICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RlZCcpLnRleHRDb250ZW50O1xuICAvLyB0YXNrID0gVEhFIE9ORSBCRUlORyBDTElDS0VEXG4gIGNvbnN0IHRhc2sgPSBwcm9qZWN0c1tjdXJyZW50UHJvamVjdF0udGFza3NbdGl0bGVdO1xuXG4gIC8vIGZpbGwgdGhlIGZvcm0gY29ycmVjdGx5XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlID0gdGFzay50aXRsZTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJykudmFsdWUgPSB0YXNrLmRlc2NyaXB0aW9uO1xuICBsZXQgYXJyID0gdGFzay5kdWVEYXRlLnNwbGl0KCctJyk7XG4gIGFyciA9IFthcnJbMl0sIGFyclswXSwgYXJyWzFdXS5qb2luKCctJyk7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWVEYXRlJykudmFsdWUgPSBhcnI7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eScpLnZhbHVlID0gdGFzay5wcmlvcml0eTtcblxuICAvLyBkZWxldGUsIGFuZCBsZXQgdGhlIGdyZWVuIGJ1dHRvbiBidWlsZCBpdCBmb3IgeW91LCBubyBpbiB0aGlzIGNhc2VcbiAgLy8gc2hvdWxkIGhhdmUgYSBzcGVjaWFsIGZ1bmN0aW9uXG4gIGVyYXNlVGFza0QocHJvamVjdHNbY3VycmVudFByb2plY3RdLnRhc2tzW3RpdGxlXS5pZCk7XG4gIGRlbGV0ZSBwcm9qZWN0c1tjdXJyZW50UHJvamVjdF0udGFza3NbdGl0bGVdO1xuXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG5cbiAgY29uc3QgcmJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWQnKTtcbiAgcmJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gIGNvbnN0IGdidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JlZW4nKTtcbiAgZ2J1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAneWVsbG93JztcbiAgZ2J1dHRvbi50ZXh0Q29udGVudCA9ICdFZGl0Jztcbn1cblxuY29uc3Qgc2V0dXBFZGl0QnV0dG9uID0gKHdvcmtpbmdUYXNrKSA9PiB7XG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidG4udGV4dENvbnRlbnQgPSAnRWRpdCc7XG5cbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKCd0YXNrQnV0dG9ucycpO1xuXG4gIGNvbnN0IHRhc2tOb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7d29ya2luZ1Rhc2suaWR9YCk7XG4gIHRhc2tOb2RlLmFwcGVuZENoaWxkKGRpdik7XG4gIGRpdi5hcHBlbmRDaGlsZChidG4pO1xuXG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgc2hvd0Zvcm1BbmRDb3ZlcigpO1xuICAgIHNldHVwRWRpdEZvcm0oZ2V0VGl0bGUoWy4uLmUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5jbGFzc0xpc3RdWzBdKSk7XG4gIH0pO1xufTtcblxuLy8gXCJDb250cm9sXCIgZnVuY3Rpb25cbmV4cG9ydCBmdW5jdGlvbiBzZXR1cFRhc2tEKHRhc2spIHtcbiAgZG9VSSh0YXNrKTtcbiAgc2V0dXBFZGl0QnV0dG9uKHRhc2spO1xuICBzZXR1cERlbGV0ZUJ1dHRvbih0YXNrKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dDb25maXJtYXRpb25Gb3JtKCkge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbmZpcm1hdGlvbkZvcm0nKTtcbiAgZm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICBjb25zdCBjb3ZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3ZlcicpO1xuICBjb3Zlci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbn1cblxuLy8gUlBCIC0gcmVtb3ZlIHByb2plY3QgYnV0dG9uXG5leHBvcnQgZnVuY3Rpb24gYWRkUlBCKCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJyk7XG4gIGlmIChoZWFkZXIubGFzdENoaWxkLnRleHRDb250ZW50ICE9PSAnWCcpIHtcbiAgICBjb25zdCBkZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBkZWxCdG4udGV4dENvbnRlbnQgPSAnWCc7XG4gICAgZGVsQnRuLmNsYXNzTGlzdC5hZGQoJ1JQQicpO1xuICAgIGRlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHNob3dDb25maXJtYXRpb25Gb3JtKCk7XG4gICAgfSk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGRlbEJ0bik7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVJQQigpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpO1xuICBjb25zdCBycGIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuUlBCJyk7XG4gIGlmIChycGIpIHsgaGVhZGVyLnJlbW92ZUNoaWxkKHJwYik7IH1cbn1cblxuLy8gZmVsdCBsaWtlIHRoaXMgZGVzZXJ2ZXMgYSBzZXBlcmF0ZSBtb2R1bGUsIHNpbmNlIGl0J3Mgbm90IHJlYWxseSBET00gbWFuaXAuXG5leHBvcnQgY29uc3QgY2hhbmdlUHJvamVjdEQgPSAocHJvamVjdE5hbWUpID0+IHtcbiAgZXJhc2VUYXNrc0QoKTtcbiAgaWYgKHByb2plY3RzW3Byb2plY3ROYW1lXS50YXNrcyAhPT0ge30pIHtcbiAgICBPYmplY3Qua2V5cyhwcm9qZWN0c1twcm9qZWN0TmFtZV0udGFza3MpLmZvckVhY2goKGVtKSA9PiB7XG4gICAgICBhZGRUYXNrRChwcm9qZWN0c1twcm9qZWN0TmFtZV0udGFza3NbZW1dKTtcbiAgICAgIHNldHVwVGFza0QocHJvamVjdHNbcHJvamVjdE5hbWVdLnRhc2tzW2VtXSwgcHJvamVjdE5hbWUpO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKHByb2plY3ROYW1lICE9PSAnSE9NRScpIHtcbiAgICBhZGRSUEIoKTtcbiAgfSBlbHNlIHtcbiAgICByZW1vdmVSUEIoKTtcbiAgfVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFByb2plY3RMaXN0ZW5lcihpZCkge1xuICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7aWR9YCk7XG5cbiAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCB0ZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdGVkJyk7XG4gICAgdGVtcC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCAnMTAyNCcpIHtcbiAgICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2lkZWJhcicpO1xuICAgICAgY29uc3QgbW9iaWxlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vYmlsZScpO1xuICAgICAgc2lkZWJhci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgbW9iaWxlQnRuLnN0eWxlLmRpc3BsYXkgPSAnaW5pdGlhbCc7XG4gICAgfVxuICAgIGNoYW5nZVByb2plY3REKHByb2plY3QudGV4dENvbnRlbnQpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uQ2xpY2tpbmdSUEIoKSB7XG4gIC8vIGZpcnN0IGNoZWNrIGlmIHlvdSBhY3R1YWxseSB3YW50IHRvIGRlbGV0ZVxuICAvLyBnZXQgaWQsIGRlbGV0ZSBvbiBjb250ZW50IGFuZCB0aGVuIHNpZGViYXIgdXNpbmcgaWQuIHJldHVybiB0byBob21lXG4gIGNvbnN0IHByb2plY3ROYW1lMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RlZCcpLnRleHRDb250ZW50O1xuICBjb25zdCBwcm9qZWN0SUQgPSBwcm9qZWN0c1twcm9qZWN0TmFtZTJdLmlkO1xuICBkZWxldGUgcHJvamVjdHNbcHJvamVjdE5hbWUyXTtcbiAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3Byb2plY3RJRH1gKTtcbiAgcHJvamVjdC5yZW1vdmUoKTtcblxuICBjb25zdCBob21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI1ByMCcpO1xuICBob21lLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gIGNoYW5nZVByb2plY3REKCdIT01FJyk7XG5cbiAgLy8gc2F2ZSBiZWNhdXNlIHlvdSByZW1vdmVkIGEgcHJvamVjdFxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xufVxuXG5hZGRQcm9qZWN0TGlzdGVuZXIoJ1ByMCcpO1xuXG4vLyBsb2FkIGFsbCBwcm9qZWN0cyBhbmQgdGFza3MgZnJvbSB0aGUgbG9jYWwgc3RvcmFnZVxuZXhwb3J0IGNvbnN0IGxvYWRGcm9tU3RvcmFnZSA9ICgpID0+IHtcbiAgT2JqZWN0LmtleXMocHJvamVjdHMpLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICBpZiAocHJvamVjdCAhPT0gJ0hPTUUnKSB7XG4gICAgICBhZGRQcm9qZWN0RChwcm9qZWN0c1twcm9qZWN0XSwgcHJvamVjdHNbcHJvamVjdF0uaWQpO1xuICAgICAgYWRkUHJvamVjdExpc3RlbmVyKHByb2plY3RzW3Byb2plY3RdLmlkKTtcbiAgICB9XG4gIH0pO1xuXG4gIE9iamVjdC5rZXlzKHByb2plY3RzLkhPTUUudGFza3MpLmZvckVhY2goKHRhc2spID0+IHtcbiAgICBhZGRUYXNrRChwcm9qZWN0cy5IT01FLnRhc2tzW3Rhc2tdKTtcbiAgICBzZXR1cFRhc2tEKHByb2plY3RzLkhPTUUudGFza3NbdGFza10sICdIT01FJyk7XG4gIH0pO1xufTtcblxuLy8gUHJldmlvdXMgc2V0dXBQcm9qZWN0IGFuZCBzZXR1cFRhc2sgaGF2ZSBtZXJnZWQgZHVlIHRvIGVzbGludCBzaG91dGluZyBhdCBtZVxuLy8gZm9yIGRlcGVuZGVuY3kgY3ljbGUgZXJyb3JzLiBJIGhhdmUgbWVyZ2VkIHRoZW0gdG9nZXRoZXIgaW50byB0aGlzIHNldHVwXG4vLyBmaWxlLiBJZGVhbGx5IEkgd291bGQgZmluZCBhbm90aGVyIHdheSB0byBzcGl0IHRoaXMgbW9kdWxlIGludG8gbW9yZSBwaWVjZXMsXG4vLyB0aGlzIHdvdWxkIGFsbCBoYXZlIGJlZW4gZWFzaWVyLCBpZiBJIGhhZCB1c2VkIGVzbGludCBmcm9tIHN0YXJ0LCBzbyB3b3JrIHRvXG4vLyBiZSBkb25lIGhlcmUsIGlmIG1vcmUgY29kZSBpcyB0byBiZSBpbmNsdWRlZCwgZXNwZWNpYWxseSBjb2RlIHRoYXQgaXMgcmVsYXRlZFxuLy8gdG8gYW55IGtpbmQgb2Ygc2V0dXAuXG4iLCJmdW5jdGlvbiBzdG9yYWdlQXZhaWxhYmxlKHR5cGUpIHtcbiAgbGV0IHN0b3JhZ2U7XG4gIHRyeSB7XG4gICAgc3RvcmFnZSA9IHdpbmRvd1t0eXBlXTtcbiAgICBjb25zdCB4ID0gJ19fc3RvcmFnZV90ZXN0X18nO1xuICAgIHN0b3JhZ2Uuc2V0SXRlbSh4LCB4KTtcbiAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oeCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZSBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbiAmJiAoXG4gICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgZS5jb2RlID09PSAyMlxuICAgICAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICAgICAgfHwgZS5jb2RlID09PSAxMDE0XG4gICAgICAgICAgICAvLyB0ZXN0IG5hbWUgZmllbGQgdG9vLCBiZWNhdXNlIGNvZGUgbWlnaHQgbm90IGJlIHByZXNlbnRcbiAgICAgICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgICAgICAgIHx8IGUubmFtZSA9PT0gJ1F1b3RhRXhjZWVkZWRFcnJvcidcbiAgICAgICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgICAgIHx8IGUubmFtZSA9PT0gJ05TX0VSUk9SX0RPTV9RVU9UQV9SRUFDSEVEJylcbiAgICAgICAgICAgIC8vIGFja25vd2xlZGdlIFF1b3RhRXhjZWVkZWRFcnJvciBvbmx5IGlmIHRoZXJlJ3Mgc29tZXRoaW5nIGFscmVhZHkgc3RvcmVkXG4gICAgICAgICAgICAmJiAoc3RvcmFnZSAmJiBzdG9yYWdlLmxlbmd0aCAhPT0gMCk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHByb2plY3RzID0ge1xuICBIT01FOiB7XG4gICAgdGFza3M6IHtcbiAgICB9LFxuICAgIGlkOiAnUHIwJyxcbiAgfSxcbn07XG5cbmlmIChzdG9yYWdlQXZhaWxhYmxlKSB7XG4gIGxldCByZXRyaWV2ZWRPYmplY3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKTtcbiAgaWYgKHJldHJpZXZlZE9iamVjdCA9PT0gbnVsbCkge1xuICAgIHJldHJpZXZlZE9iamVjdCA9IEpTT04uc3RyaW5naWZ5KHt9KTtcbiAgfVxuICByZXRyaWV2ZWRPYmplY3QgPSBKU09OLnBhcnNlKHJldHJpZXZlZE9iamVjdCk7XG4gIC8vIGZvciAoY29uc3QgZW0gb2YgT2JqZWN0LmtleXMocmV0cmlldmVkT2JqZWN0KSkge1xuICAvLyAgIHByb2plY3RzW2VtXSA9IHJldHJpZXZlZE9iamVjdFtlbV07XG4gIC8vIH1cbiAgT2JqZWN0LmtleXMocmV0cmlldmVkT2JqZWN0KS5mb3JFYWNoKChlbSkgPT4ge1xuICAgIHByb2plY3RzW2VtXSA9IHJldHJpZXZlZE9iamVjdFtlbV07XG4gIH0pO1xuICAvLyBwcm9qZWN0cyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpO1xufVxuXG5leHBvcnQgY29uc3QgdG9kbyA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBpZCkgPT4gKHtcbiAgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgaWQsXG59KTtcblxuZXhwb3J0IGNvbnN0IHByb2plY3RGYWN0b3J5ID0gKHRpdGxlLyogLCBkdWVEYXRlICovLCBpZCkgPT4gKHtcbiAgdGl0bGUvKiAsIGR1ZWVEYXRlICovLCBpZCxcbn0pO1xuIiwiaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tICcuL3RvZG8nO1xuaW1wb3J0IHsgZXhwaXJlQ2hlY2sgfSBmcm9tICcuL2RhdGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tEdWVEYXRlKCkge1xuICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RlZCcpLnRleHRDb250ZW50O1xuICBPYmplY3Qua2V5cyhwcm9qZWN0c1tjdXJyZW50UHJvamVjdF0udGFza3MpLmZvckVhY2goKHRhc2tOYW1lKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7cHJvamVjdHNbY3VycmVudFByb2plY3RdXG4gICAgICAudGFza3NbdGFza05hbWVdLmlkfWApO1xuICAgIGlmIChleHBpcmVDaGVjayhwcm9qZWN0c1tjdXJyZW50UHJvamVjdF0udGFza3NbdGFza05hbWVdKSkge1xuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2V4cGlyZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2V4cGlyZWQnKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8qXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgICBpZiAocHJval9leHBpcmVDaGVjaygpKSB7XG4gICAgICAgIGNvbnRlbnQuc3R5bGUuYm9yZGVyVG9wID0gXCIxdmggcmVkIHNvbGlkXCI7XG4gICAgICAgIGNvbnRlbnQuc3R5bGUuYm9yZGVyTGVmdCA9IFwiMXZoIHJlZCBzb2xpZFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRlbnQuc3R5bGUuYm9yZGVyID0gXCJub25lXCI7XG4gICAgfSAqL1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGl0bGUodGFza0lEKSB7XG4gIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdGVkJykudGV4dENvbnRlbnQ7XG4gIGxldCB0aXRsZTtcblxuICBPYmplY3Qua2V5cyhwcm9qZWN0c1tjdXJyZW50UHJvamVjdF0udGFza3MpLmZvckVhY2goKHRhc2tOYW1lKSA9PiB7XG4gICAgaWYgKHByb2plY3RzW2N1cnJlbnRQcm9qZWN0XS50YXNrc1t0YXNrTmFtZV0uaWQgPT09IHRhc2tJRCkge1xuICAgICAgdGl0bGUgPSBwcm9qZWN0c1tjdXJyZW50UHJvamVjdF0udGFza3NbdGFza05hbWVdLnRpdGxlO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiB0aXRsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVRhc2socHJvamVjdCwgdGFzaykge1xuICBkZWxldGUgcHJvamVjdHNbcHJvamVjdF0udGFza3NbdGFzay50aXRsZV07XG4gIC8vIHdlIGFyZSBhY3R1YWxseSBkZWxldGluZywgbm90IGp1c3QgZXJhc2luZyBmcm9tIHNjcmVlbiEhIVxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd0Zvcm1BbmRDb3ZlcigpIHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrRm9ybScpO1xuICBjb25zdCBjb3ZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3ZlcicpO1xuICBjb3Zlci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgZm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgJy4vZXZlbnRMaXN0ZW5lcnMnO1xuaW1wb3J0ICcuL2RhdGUnO1xuaW1wb3J0ICcuL21vYmlsZSc7XG5pbXBvcnQgeyBsb2FkRnJvbVN0b3JhZ2UgfSBmcm9tICcuL3NldHVwJztcblxubG9hZEZyb21TdG9yYWdlKCk7XG4vKlxuICAgIFRPRE86XG4gICAgLSBDb25maWd1cmUgZGF0ZXMgcHJvcGVybHlcbiAgICAgICAgVHdvIHR5cGVzIG9mIHRhc2tzOlxuICAgICAgICAgICAgMS4gU29tZXRoaW5nIHRoYXQgbmVlZHMgdG8gYmUgZG9uZSBvbiBhIHNwZWNpZmljIGRheS4gSXQgY2FuIGhhdmUgYVxuICAgICAgICAgICAgICAgIGR1ZURhdGUvZHVlSG91ciwgYnV0IGl0J3Mgb3B0aW9uYWwuIEl0IG9ubHkgc2hvd3Mgb24gb25lIGRheVxuICAgICAgICAgICAgMi4gU29tZXRoaW5nIHRoYXQgbmVlZHMgdG8gYmUgZG9uZSB0aWxsIGEgc3BlY2lmaWVkIGR1ZURhdGUuIFNvIGl0XG4gICAgICAgICAgICAgICAgc2hvd3MgZXZlcnkgZGF5IHVudGlsIHRoZSBkdWVEYXRlLiBFeHBpcmVkIHNlY3Rpb24gbWlnaHQgYmVcbiAgICAgICAgICAgICAgICBvZiB1c2UuXG5cbiAgICAgICAgICAgIElkZWE6XG4gICAgICAgICAgICBBbHdheXMgc2hvdyBhbGwgdGhhdCBjYW4gYmUgc2hvd24uIElmIGl0IGhhcHBlbnMgdGhhdCBvbmUgb2YgdGhlbVxuICAgICAgICAgICAgZXhwaXJlZCBzaW1wbHkgbmVkb3RlIHNvIHVzaW5nIHJlZCBib3JkZXIgb3IgKGV4cGlyZWQpIHRhZy5cbiAgICAgICAgICAgIEl0IGNhbiBiZSBzaG93biBpZiBpdHMgc3RhcnQgZGF5IGlzIHRvZGF5IG9yIGVhcmxpZXIuIC0vLy8tXG5cbiAgICAtIEFkZCBhIGZvcm0gZm9yIHVzZXIgaW5wdXQgLS8vLy1cbiAgICAtIFRhc2sgY2hhbmdlczpcbiAgICAgICAgICAgIDEpIFN0eWxlIGNoYW5nZXM6IFJlZG8gdGFzayBzcXVhcmVzIC0vLy8tLCBtYXliZSBub3RcbiAgICAgICAgICAgIDIpIFRhc2sgZGVzY3JpcHRpb24vZWRpdCBzeXN0ZW0gLS8vLy1cbiAgICAgICAgICAgIDMpIE1ha2UgcHJpb3JpdGVzIG1hdHRlciwgYm9yZGVyIGNvbG9yIC0vLy8tXG4gICAgLSBGSVggcmVtb3ZlIGJ1dHRvbiwgbmFtZWx5IHdoZW4geW91IGRvbid0IGlucHV0IGFueXRoaW5nIGluIHRoZSBmb3JtXG4gICAgICAgIG11bHRpcGxlIHRhc2tzIGFyZSBtYWRlIGV2ZW50IHRob3VnaCB0aGVyZSBpcyBvbmx5IG9uZSBzYXZlZCBpbiB0aGVcbiAgICAgICAgb2JqZWN0LiBpdCBzaG93cyBjb3JyZWN0bHkgYWZ0ZXIgcmVmcmVzaCAtLy8vLVxuICAgIC0gRklYOiBwcmV2ZW50IGZyb20gY2hhbmdpbmcgcHJvamVjdHMgd2hlbiB0aGUgZm9ybSBpcyBvcGVuZWQsXG4gICAgICAgIGNvbnNpZGVyIGFkZGluZyBhIGNvdmVyIGp1c3QgbGlrZSBpbiB0aGUgbGlicmFyeSBwcm9qZWN0IC0vLy8tXG4gICAgLSBGSVg6IHByb2plY3Qvc2hvcnRjdXQgbmFtZSBsZXR0ZXJzIGdvaW5nIHRvIG5ldyBsaW5lLCBpbnN0ZWFkIG9ubHkgd29yZHNcbiAgICAgICAgLS8vLy0gYnV0IGNhbid0IGZpeCBsb25nIG5hbWVzLCBtYXliZSBmaW5kIGEgd2F5IHRvIGFkZCBcIi1cIiBhdCBlbmQgd2hlblxuICAgICAgICBicmVha2luZ1xuICAgIC0gQWRkIExvY2FsIHN0b3JhZ2UgLS8vLy1cbiAgICAtIEFkZCBhIGNvbmZpcm1hdGlvbiBmb3JtIHdoZW4gYXR0ZW1wdGluZyB0byBkZWxldGUgYSBwcm9qZWN0IC0vLy8tXG4gICAgLSBBZGQgbWVkaWEgcXVlcmllc1xuICAgIC0gY2hhbmdlIHByb2plY3RJZCBhbmQgaWQgdG8gY2FsY3VsYXRlIGlkIGJhc2VkIG9uIHdoYXQgaXMgdGhlIGJpZ2dlc3QgaWRcbiAgICAgICAgcHJlc2VudCBvbiB0aGUgY3VycmVudCBwcm9qZWN0L3Byb2plY3RzIGFuZCB0aGVuIGFkZCAxLCB0aGlzIHdheVxuICAgICAgICBpdCBpcyBub3QgYmFzZWQgb24gbGVuZ3RoIGFuZCBkdXBlIGJ1Z3MgZG8gbm90IGFwcGVhciAtLy8vLVxuICAgIC0gRml4IGRhdGVzIGZvciBlZGl0aW5nISAtLy8vLVxuICAgIC0gRG8gc29tZXRoaW5nIHdpdGggcHJvamVjdCBkYXRlcywgbWF5YmUgY29udGVudCBib3JkZXIgdG8gc2lnbmlmeSB0aGUgbGF0ZVxuICAgICAgICBwcm9qZWN0IC0vLy8tXG4gICAgLSBNYWtlIGEgcmVmcmVzaCBmdW5jdGlvbiwgdGhhdCByZWxvYWRzLCBtYXliZSBqdXN0IGNoYW5nZVByb2plY3Qgc28geW91XG4gICAgICAgIGRvbid0IGhhdmUgdG8gbG9jYXRpb24ucmVsb2FkKClcbiAgICAtIFRleHRBcmVhIGV4cGFuZGluZyBEOiAtLy8vLVxuICAgIC0gY29uc2lkZXIgbW9yZSBjb2xzIGFuZCByb3cgZm9yIFRleHRBcmVhIC0vLy8tXG4gICAgLSBSZXRoaW5rIHRoZSBuZWVkIGZvciBkdWVEYXRlIGluIHByb2plY3QsIEkgdGhpbmsgbm90IG5lZWRlZCEhIC0vLy8tXG4gICAgLSBwcmV2ZW50IHRpdGxlIG5hbWUgZHVwbGljYXRpb24gb24gYWRkaW5nIHRhc2ssIHRoZSBmb3JtIGdvZXMgYXdheSBmb3Igc29tZVxuICAgICAgICByZWFzb24gLS8vLy1cbiAgICAtIGdob3N0IHRhc2sgYXBwZWFyaW5nOiBidWcgLS8vLy1cbiAgICAtIG1ha2UgcmVkIGJ1dHRvbiByZWNvdmVyIHRoZSB0YXNrLCB5b3UgaGF2ZSBhbGwgdGhlIGRhdGEgbmVlZGVkIGluIHRoZSBmb3JtXG4gICAgICAgICwgaW5zdGVhZCByZXdvcmtlZCB0byBpbmNsdWRlIG9ubHkgZWRpdCBidXR0b24gLS8vLy1cbiAgICAtIGFkZCBrZXliaW5kcywgZXNwZWNpYWxseSBlbnRlciBpbnN0ZWFkIG9mIG1vdXNlIGNsaWNrIC0vLy8tXG4gICAgLSBDTEVBTiBDT0RFISEhISEgeW91IGtub3cgY3VycmVudFByb2plY3QgcmVwZWF0IGFsbCB0aGUgdGltZSBhbmQgb3RoZXIgamF6elxuICAgIC0gZXhwZXJpbWVudCB3aXRoIHdvcmtpbmdfdGFzaywgdHJ5IHRvIHJlbW92ZSAtLy8vLVxuICAgIC0gcmV3b3JrIG1vZHVsZXMsIG1heWJlIG5vIG5lZWQgdG8gZ2VuZXJhbGl6ZSBldmVyeXRoaW5nLCBleHBlcmltZW50XG4gICAgLSBjbGVhbmVyIGNzcywgbW9yZSBjb21tZW50cywgY29uc2lkZXIgYW5pbWF0aW9ucy90cmFuc2Zvcm1hdGlvbnMgZm9yXG4gICAgICAgIGNvbnNpZGVyIHJlbWFraW5nIGNzcyBncm91bmQgdXAsIG1ha2UgaXQgd29yayBvbiBtb2JpbGUgZmlyc3RcbiAgICAtIGRlbGV0ZSB0aGUgdGFzayBvbmx5IGFmdGVyIHRoZSBlZGl0IGZvcm0gaXMgc3VibWl0dGVkLCBwb3RlbnRpYWxseSB1c2VcbiAgICBhc3luYy93YWl0IGZ1bmN0aW9uXG4gICAgLSByZXdvcmsgbW9iaWxlIGRlc2lnbiwgcGVyaGFwcyBhZGRUYXNrIG9uIHRvcCBhbmQgY2FsYW5kZXIgb24gYm90dG9tLFxuICAgIG1pZ2h0IGZlZWwgbW9yZSBuYXR1cmFsIC0vLy8tXG5cbiAgICBQb3RlbnRpYWwgYnVnczpcbiAgICAgICAgU21hbGwgYmxhbmsgcmVjdGFuZ2xlIGFwcGVhcmluZyBzb21ldGltZXMgd2hlbiByZXNpemluZy4gUmVmcmVzaCBmaXhlcy5cbiovXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=