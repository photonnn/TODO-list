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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    --neutral: #f5f5f5;\n    --violet: white;\n    --stone: #6e6279;\n    --zinc: #3f3f46;\n    --hover: rgb(69, 31, 83);\n\n}\n\nbody,\nhtml {\n    height: 100%;\n    width: 100%;\n    overflow-y: scroll;\n}\n\nbody {\n    display: flex;\n    position: fixed;\n}\n\n\n#sidebar {\n    flex: 1;\n    background-color: var(--zinc);\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n    width: 100%;\n}\n\n#sidebar>div {\n    font-size: 6vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.home {\n    flex: 1;\n    border-bottom: 5px black solid;\n    background-color: var(--stone);\n    user-select: none;\n}\n\n#projects {\n    flex: 7;\n}\n\n.home:hover {\n    background-color: var(--hover);\n    cursor: pointer;\n}\n\n#content {\n    flex: 3;\n    background-color: grey;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    flex-direction: column-reverse;\n    height: 100vh;\n    width: 100%;\n}\n\n\n.expand {\n    display: flex;\n    flex-direction: column;\n}\n\n.expand>div:first-child,\n#addProject {\n    flex: 1;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.expand>* {\n    width: 100%;\n}\n\n#addProject {\n    border-top: 3px solid black;\n    background-color: var(--stone);\n    user-select: none;\n}\n\n#addProject:hover {\n    cursor: pointer;\n    background-color: var(--hover);\n}\n\n.expand>div:first-child {\n    border-bottom: 3px solid black;\n}\n\n\n.expand .shortcut {\n    background-color: var(--stone);\n    padding: 5%;\n    border-bottom: 3px solid black;\n    word-break: break-word;\n    user-select: none;\n    cursor: pointer;\n    display: flex;\n    justify-content: space-between;\n}\n\n.expand .shortcuts {\n    overflow-y: auto;\n    max-height: 70vh;\n}\n\n.shortcut:hover {\n    background-color: var(--hover);\n    cursor: pointer;\n}\n\n.expand>div {\n    flex: 5;\n    text-align: center;\n}\n\n#tasks {\n    flex: 1;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(35vh, 1fr));\n    grid-gap: 2vh;\n    overflow-y: auto;\n    width: 100%;\n    padding: 3%;\n}\n\n#tasks>div {\n    height: 35vh;\n    background: rgb(0, 147, 223);\n    background: radial-gradient(circle, rgba(0, 147, 223, 1) 0%,\n            rgba(211, 239, 242, 1) 49%, rgba(17, 16, 16, 1) 100%);\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    border-radius: 10%;\n}\n\n#tasks>div>div {\n    word-break: break-word;\n    font-size: 3vh;\n}\n\n.Must {\n    background: rgb(232, 5, 5);\n    background: radial-gradient(circle, rgba(232, 5, 5, 1) 0%,\n            rgba(213, 144, 144, 1) 49%, rgba(17, 16, 16, 1) 100%) !important;\n}\n\n.Necessary {\n    background: rgb(232, 107, 5);\n    background: radial-gradient(circle, rgba(232, 107, 5, 1) 0%,\n            rgba(235, 200, 163, 1) 49%, rgba(17, 16, 16, 1) 100%) !important;\n}\n\n.Maybe {\n    background: rgb(193, 232, 5);\n    background: radial-gradient(circle, rgba(193, 232, 5, 1) 0%,\n            rgba(224, 235, 163, 1) 49%, rgba(17, 16, 16, 1) 100%) !important;\n}\n\n#content>*:not(#tasks) {\n    display: flex;\n    justify-content: center;\n    width: 100%;\n}\n\n.header {\n    font-size: 40px;\n}\n\n.header .RPB {\n    background-color: red;\n    position: absolute;\n    height: max(55px, 7vh);\n    width: max(55px, 7vh);\n    font-size: max(40px, 3rem);\n    right: 0;\n    top: 0;\n    color: rgb(85, 3, 19);\n}\n\n#addTask {\n    display: flex;\n    align-items: center;\n    font-size: max(40px, 3rem);\n    color: white;\n    background-color: black;\n    user-select: none;\n    height: max(55px, 7vh);\n}\n\n#addTask:hover {\n    opacity: 0.5;\n    cursor: pointer;\n}\n\n#addTask:active {\n    opacity: 0.2;\n}\n\n.selected {\n    border-right: 10px groove var(--hover);\n}\n\n#date {\n    width: 40vh !important;\n    font-size: 5vh;\n    border: none;\n    background: grey;\n}\n\n.calLeft {\n    margin-right: 2vh;\n}\n\n.calRight {\n    margin-left: 2vh;\n}\n\n.navigatecal {\n    font-size: 8vh;\n    cursor: pointer;\n    user-select: none;\n}\n\n#taskForm {\n    width: 65vh;\n    height: 65vh;\n    left: calc(50% - 10vh);\n    top: calc(50% - 30vh);\n    padding-left: 5%;\n    padding-right: 5%;\n    font-size: 3vh;\n}\n\n#projectForm {\n    width: 55vh;\n    height: 25vh;\n    left: calc(50% - 10vh);\n    top: calc(50% - 30vh);\n    padding: 0 2% 0 2%;\n    font-size: 3vh;\n}\n\n#confirmationForm {\n    width: 50vh;\n    height: 35vh;\n    left: calc(50% - 10vh);\n    top: calc(50% - 30vh);\n    padding: 0 3% 0 3%;\n    font-size: 3vh;\n}\n\n#projectForm,\n#taskForm,\n#confirmationForm {\n    position: absolute;\n    z-index: 2;\n    background-color: var(--stone);\n    display: none;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: flex-start;\n    border: 5px var(--hover) solid;\n}\n\n.cover {\n    position: fixed;\n    top: 0;\n    left: 0;\n    background: rgba(0, 0, 0, 0.6);\n    z-index: 1;\n    width: 100%;\n    height: 100%;\n    display: none;\n}\n\n\n#taskForm div,\n#projectForm div {\n    display: flex;\n}\n\n#taskForm label,\n#projectForm label {\n    flex: 1;\n    min-width: 20vh;\n    font-size: 3vh;\n}\n\n#taskForm input,\n#taskForm select {\n    flex: 6;\n    min-width: 30vh;\n}\n\n#description,\n#taskForm input,\n#priority,\n#proj_title,\n#proj_dueDate {\n    font-size: 2vh;\n    padding: 1%;\n}\n\n#description {\n    height: 20vh;\n    max-width: 30vh;\n    resize: none;\n}\n\n.redBtn {\n    background-color: red;\n    margin-right: 25%;\n}\n\n.greenBtn {\n    background-color: rgb(47, 255, 47);\n}\n\n.redBtn,\n.greenBtn {\n    font-size: 3vh;\n    padding: 10%;\n    width: 15vh;\n    height: 0.5vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.fbtn {\n    display: flex;\n    justify-content: center;\n    width: 100%;\n}\n\n.expired {\n    border: 5px solid red;\n}\n\n\n.task_desc {\n    overflow-y: auto;\n    flex: 6;\n    font-size: 1.5rem;\n}\n\n.task_dueDate {\n    flex: 1;\n}\n\n.task_title,\n.task_desc,\n.task_dueDate {\n    border-bottom: 1px solid rgba(0, 0, 0, 0.212);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n}\n\n.task_title {\n    flex: 1;\n    padding: 0 6%;\n}\n\n.taskButtons>button {\n    font-size: 3vh;\n    color: white;\n    background-color: black;\n    opacity: 0.5;\n}\n\n.mobile {\n    display: none;\n}\n\n\n\n@media only screen and (max-width: 1100px) {\n\n    body,\n    html {\n        height: 100%;\n    }\n\n    .mobile {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        position: absolute;\n        z-index: 1;\n        left: 0;\n        top: 0;\n        width: 55px;\n        height: 55px;\n        color: black;\n        overflow: hidden;\n        background-color: black;\n        border-right: 1px solid white;\n    }\n\n    .mobile:hover {\n        cursor: pointer;\n    }\n\n    #sidebar {\n        position: absolute;\n        z-index: 1;\n        left: 0;\n        display: none;\n        max-height: 100vh;\n        max-width: min(75%, 300px);\n    }\n\n    #projectForm,\n    #taskForm,\n    #confirmationForm {\n        position: absolute;\n        margin-left: auto;\n        margin-right: auto;\n        left: 0;\n        right: 0;\n        text-align: center;\n        max-width: 100%;\n        width: 400px;\n        height: 200px;\n    }\n\n    #taskForm,\n    #projectForm {\n        position: absolute;\n        left: 0;\n        top: 0;\n        width: 100%;\n        min-height: 100%;\n        height: min-content;\n        text-align: center;\n        align-items: center;\n    }\n\n    #projectForm label {\n        max-height: 50px;\n    }\n\n    #projectForm>div {\n        width: 100%;\n        height: 100%;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n    }\n\n    #projectForm>div>* {\n        font-size: 2rem;\n        width: 90%;\n    }\n\n    #taskForm label {\n        font-size: 1.5rem\n    }\n\n    #taskForm #title,\n    #taskForm #dueDate {\n        font-size: 1rem;\n        height: 50px;\n        width: 90%;\n    }\n\n    #description {\n        width: 90%;\n        max-width: none;\n        font-size: 1rem;\n        min-height: 200px;\n    }\n\n    #priority {\n        font-size: 1rem;\n        width: 90%;\n        justify-content: center;\n    }\n\n    #taskForm>div {\n        position: relative;\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        margin-bottom: 20px;\n    }\n\n    .fbtn {\n        display: flex;\n        flex-direction: row !important;\n    }\n\n    .fbtn>* {\n        font-size: 1.7rem;\n    }\n\n    .RPB {\n        font-size: 40px;\n        z-index: 1;\n    }\n\n    #date {\n        max-width: 250px;\n        font-size: 2rem;\n    }\n\n    #addTask {\n        margin: 0 100px;\n    }\n\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    --neutral: #f5f5f5;\n    --violet: white;\n    --stone: #6e6279;\n    --zinc: #3f3f46;\n    --hover: rgb(69, 31, 83);\n\n}\n\nbody,\nhtml {\n    height: 100%;\n    width: 100%;\n    overflow-y: scroll;\n}\n\nbody {\n    display: flex;\n    position: fixed;\n}\n\n\n#sidebar {\n    flex: 1;\n    background-color: var(--zinc);\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n    width: 100%;\n}\n\n#sidebar>div {\n    font-size: 6vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.home {\n    flex: 1;\n    border-bottom: 5px black solid;\n    background-color: var(--stone);\n    user-select: none;\n}\n\n#projects {\n    flex: 7;\n}\n\n.home:hover {\n    background-color: var(--hover);\n    cursor: pointer;\n}\n\n#content {\n    flex: 3;\n    background-color: grey;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    flex-direction: column-reverse;\n    height: 100vh;\n    width: 100%;\n}\n\n\n.expand {\n    display: flex;\n    flex-direction: column;\n}\n\n.expand>div:first-child,\n#addProject {\n    flex: 1;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.expand>* {\n    width: 100%;\n}\n\n#addProject {\n    border-top: 3px solid black;\n    background-color: var(--stone);\n    user-select: none;\n}\n\n#addProject:hover {\n    cursor: pointer;\n    background-color: var(--hover);\n}\n\n.expand>div:first-child {\n    border-bottom: 3px solid black;\n}\n\n\n.expand .shortcut {\n    background-color: var(--stone);\n    padding: 5%;\n    border-bottom: 3px solid black;\n    word-break: break-word;\n    user-select: none;\n    cursor: pointer;\n    display: flex;\n    justify-content: space-between;\n}\n\n.expand .shortcuts {\n    overflow-y: auto;\n    max-height: 70vh;\n}\n\n.shortcut:hover {\n    background-color: var(--hover);\n    cursor: pointer;\n}\n\n.expand>div {\n    flex: 5;\n    text-align: center;\n}\n\n#tasks {\n    flex: 1;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(35vh, 1fr));\n    grid-gap: 2vh;\n    overflow-y: auto;\n    width: 100%;\n    padding: 3%;\n}\n\n#tasks>div {\n    height: 35vh;\n    background: rgb(0, 147, 223);\n    background: radial-gradient(circle, rgba(0, 147, 223, 1) 0%,\n            rgba(211, 239, 242, 1) 49%, rgba(17, 16, 16, 1) 100%);\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    border-radius: 10%;\n}\n\n#tasks>div>div {\n    word-break: break-word;\n    font-size: 3vh;\n}\n\n.Must {\n    background: rgb(232, 5, 5);\n    background: radial-gradient(circle, rgba(232, 5, 5, 1) 0%,\n            rgba(213, 144, 144, 1) 49%, rgba(17, 16, 16, 1) 100%) !important;\n}\n\n.Necessary {\n    background: rgb(232, 107, 5);\n    background: radial-gradient(circle, rgba(232, 107, 5, 1) 0%,\n            rgba(235, 200, 163, 1) 49%, rgba(17, 16, 16, 1) 100%) !important;\n}\n\n.Maybe {\n    background: rgb(193, 232, 5);\n    background: radial-gradient(circle, rgba(193, 232, 5, 1) 0%,\n            rgba(224, 235, 163, 1) 49%, rgba(17, 16, 16, 1) 100%) !important;\n}\n\n#content>*:not(#tasks) {\n    display: flex;\n    justify-content: center;\n    width: 100%;\n}\n\n.header {\n    font-size: 40px;\n}\n\n.header .RPB {\n    background-color: red;\n    position: absolute;\n    height: max(55px, 7vh);\n    width: max(55px, 7vh);\n    font-size: max(40px, 3rem);\n    right: 0;\n    top: 0;\n    color: rgb(85, 3, 19);\n}\n\n#addTask {\n    display: flex;\n    align-items: center;\n    font-size: max(40px, 3rem);\n    color: white;\n    background-color: black;\n    user-select: none;\n    height: max(55px, 7vh);\n}\n\n#addTask:hover {\n    opacity: 0.5;\n    cursor: pointer;\n}\n\n#addTask:active {\n    opacity: 0.2;\n}\n\n.selected {\n    border-right: 10px groove var(--hover);\n}\n\n#date {\n    width: 40vh !important;\n    font-size: 5vh;\n    border: none;\n    background: grey;\n}\n\n.calLeft {\n    margin-right: 2vh;\n}\n\n.calRight {\n    margin-left: 2vh;\n}\n\n.navigatecal {\n    font-size: 8vh;\n    cursor: pointer;\n    user-select: none;\n}\n\n#taskForm {\n    width: 65vh;\n    height: 65vh;\n    left: calc(50% - 10vh);\n    top: calc(50% - 30vh);\n    padding-left: 5%;\n    padding-right: 5%;\n    font-size: 3vh;\n}\n\n#projectForm {\n    width: 55vh;\n    height: 25vh;\n    left: calc(50% - 10vh);\n    top: calc(50% - 30vh);\n    padding: 0 2% 0 2%;\n    font-size: 3vh;\n}\n\n#confirmationForm {\n    width: 50vh;\n    height: 35vh;\n    left: calc(50% - 10vh);\n    top: calc(50% - 30vh);\n    padding: 0 3% 0 3%;\n    font-size: 3vh;\n}\n\n#projectForm,\n#taskForm,\n#confirmationForm {\n    position: absolute;\n    z-index: 2;\n    background-color: var(--stone);\n    display: none;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: flex-start;\n    border: 5px var(--hover) solid;\n}\n\n.cover {\n    position: fixed;\n    top: 0;\n    left: 0;\n    background: rgba(0, 0, 0, 0.6);\n    z-index: 1;\n    width: 100%;\n    height: 100%;\n    display: none;\n}\n\n\n#taskForm div,\n#projectForm div {\n    display: flex;\n}\n\n#taskForm label,\n#projectForm label {\n    flex: 1;\n    min-width: 20vh;\n    font-size: 3vh;\n}\n\n#taskForm input,\n#taskForm select {\n    flex: 6;\n    min-width: 30vh;\n}\n\n#description,\n#taskForm input,\n#priority,\n#proj_title,\n#proj_dueDate {\n    font-size: 2vh;\n    padding: 1%;\n}\n\n#description {\n    height: 20vh;\n    max-width: 30vh;\n    resize: none;\n}\n\n.redBtn {\n    background-color: red;\n    margin-right: 25%;\n}\n\n.greenBtn {\n    background-color: rgb(47, 255, 47);\n}\n\n.redBtn,\n.greenBtn {\n    font-size: 3vh;\n    padding: 10%;\n    width: 15vh;\n    height: 0.5vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.fbtn {\n    display: flex;\n    justify-content: center;\n    width: 100%;\n}\n\n.expired {\n    border: 5px solid red;\n}\n\n\n.task_desc {\n    overflow-y: auto;\n    flex: 6;\n    font-size: 1.5rem;\n}\n\n.task_dueDate {\n    flex: 1;\n}\n\n.task_title,\n.task_desc,\n.task_dueDate {\n    border-bottom: 1px solid rgba(0, 0, 0, 0.212);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n}\n\n.task_title {\n    flex: 1;\n    padding: 0 6%;\n}\n\n.taskButtons>button {\n    font-size: 3vh;\n    color: white;\n    background-color: black;\n    opacity: 0.5;\n}\n\n.mobile {\n    display: none;\n}\n\n\n\n@media only screen and (max-width: 1100px) {\n\n    body,\n    html {\n        height: 100%;\n    }\n\n    .mobile {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        position: absolute;\n        z-index: 1;\n        left: 0;\n        top: 0;\n        width: 55px;\n        height: 55px;\n        color: black;\n        overflow: hidden;\n        background-color: black;\n        border-right: 1px solid white;\n    }\n\n    .mobile:hover {\n        cursor: pointer;\n    }\n\n    #sidebar {\n        position: absolute;\n        z-index: 1;\n        left: 0;\n        display: none;\n        max-height: 100vh;\n        max-width: min(75%, 300px);\n    }\n\n    #projectForm,\n    #taskForm,\n    #confirmationForm {\n        position: absolute;\n        margin-left: auto;\n        margin-right: auto;\n        left: 0;\n        right: 0;\n        text-align: center;\n        max-width: 100%;\n        width: 400px;\n        height: 200px;\n    }\n\n    #taskForm,\n    #projectForm {\n        position: absolute;\n        left: 0;\n        top: 0;\n        width: 100%;\n        min-height: 100%;\n        height: min-content;\n        text-align: center;\n        align-items: center;\n    }\n\n    #projectForm label {\n        max-height: 50px;\n    }\n\n    #projectForm>div {\n        width: 100%;\n        height: 100%;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n    }\n\n    #projectForm>div>* {\n        font-size: 2rem;\n        width: 90%;\n    }\n\n    #taskForm label {\n        font-size: 1.5rem\n    }\n\n    #taskForm #title,\n    #taskForm #dueDate {\n        font-size: 1rem;\n        height: 50px;\n        width: 90%;\n    }\n\n    #description {\n        width: 90%;\n        max-width: none;\n        font-size: 1rem;\n        min-height: 200px;\n    }\n\n    #priority {\n        font-size: 1rem;\n        width: 90%;\n        justify-content: center;\n    }\n\n    #taskForm>div {\n        position: relative;\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        margin-bottom: 20px;\n    }\n\n    .fbtn {\n        display: flex;\n        flex-direction: row !important;\n    }\n\n    .fbtn>* {\n        font-size: 1.7rem;\n    }\n\n    .RPB {\n        font-size: 40px;\n        z-index: 1;\n    }\n\n    #date {\n        max-width: 250px;\n        font-size: 2rem;\n    }\n\n    #addTask {\n        margin: 0 100px;\n    }\n\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLE9BQU8sWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsUUFBUSxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsT0FBTyxTQUFTLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksUUFBUSxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sT0FBTyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxTQUFTLE1BQU0sTUFBTSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFB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LCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RhdGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZXZlbnRMaXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Zvcm1zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2JpbGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NldHVwLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy91dGlsaXR5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIC0tbmV1dHJhbDogI2Y1ZjVmNTtcXG4gICAgLS12aW9sZXQ6IHdoaXRlO1xcbiAgICAtLXN0b25lOiAjNmU2Mjc5O1xcbiAgICAtLXppbmM6ICMzZjNmNDY7XFxuICAgIC0taG92ZXI6IHJnYig2OSwgMzEsIDgzKTtcXG5cXG59XFxuXFxuYm9keSxcXG5odG1sIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbn1cXG5cXG5cXG4jc2lkZWJhciB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXppbmMpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI3NpZGViYXI+ZGl2IHtcXG4gICAgZm9udC1zaXplOiA2dmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaG9tZSB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGJvcmRlci1ib3R0b206IDVweCBibGFjayBzb2xpZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3RvbmUpO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuI3Byb2plY3RzIHtcXG4gICAgZmxleDogNztcXG59XFxuXFxuLmhvbWU6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlcik7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBmbGV4OiAzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcblxcbi5leHBhbmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZXhwYW5kPmRpdjpmaXJzdC1jaGlsZCxcXG4jYWRkUHJvamVjdCB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZXhwYW5kPioge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI2FkZFByb2plY3Qge1xcbiAgICBib3JkZXItdG9wOiAzcHggc29saWQgYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN0b25lKTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbiNhZGRQcm9qZWN0OmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlcik7XFxufVxcblxcbi5leHBhbmQ+ZGl2OmZpcnN0LWNoaWxkIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG5cXG4uZXhwYW5kIC5zaG9ydGN1dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN0b25lKTtcXG4gICAgcGFkZGluZzogNSU7XFxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBibGFjaztcXG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uZXhwYW5kIC5zaG9ydGN1dHMge1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBtYXgtaGVpZ2h0OiA3MHZoO1xcbn1cXG5cXG4uc2hvcnRjdXQ6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlcik7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmV4cGFuZD5kaXYge1xcbiAgICBmbGV4OiA1O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiN0YXNrcyB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzV2aCwgMWZyKSk7XFxuICAgIGdyaWQtZ2FwOiAydmg7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAzJTtcXG59XFxuXFxuI3Rhc2tzPmRpdiB7XFxuICAgIGhlaWdodDogMzV2aDtcXG4gICAgYmFja2dyb3VuZDogcmdiKDAsIDE0NywgMjIzKTtcXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgwLCAxNDcsIDIyMywgMSkgMCUsXFxuICAgICAgICAgICAgcmdiYSgyMTEsIDIzOSwgMjQyLCAxKSA0OSUsIHJnYmEoMTcsIDE2LCAxNiwgMSkgMTAwJSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XFxufVxcblxcbiN0YXNrcz5kaXY+ZGl2IHtcXG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcXG4gICAgZm9udC1zaXplOiAzdmg7XFxufVxcblxcbi5NdXN0IHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDIzMiwgNSwgNSk7XFxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoMjMyLCA1LCA1LCAxKSAwJSxcXG4gICAgICAgICAgICByZ2JhKDIxMywgMTQ0LCAxNDQsIDEpIDQ5JSwgcmdiYSgxNywgMTYsIDE2LCAxKSAxMDAlKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uTmVjZXNzYXJ5IHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDIzMiwgMTA3LCA1KTtcXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgyMzIsIDEwNywgNSwgMSkgMCUsXFxuICAgICAgICAgICAgcmdiYSgyMzUsIDIwMCwgMTYzLCAxKSA0OSUsIHJnYmEoMTcsIDE2LCAxNiwgMSkgMTAwJSkgIWltcG9ydGFudDtcXG59XFxuXFxuLk1heWJlIHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDE5MywgMjMyLCA1KTtcXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgxOTMsIDIzMiwgNSwgMSkgMCUsXFxuICAgICAgICAgICAgcmdiYSgyMjQsIDIzNSwgMTYzLCAxKSA0OSUsIHJnYmEoMTcsIDE2LCAxNiwgMSkgMTAwJSkgIWltcG9ydGFudDtcXG59XFxuXFxuI2NvbnRlbnQ+Kjpub3QoI3Rhc2tzKSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG59XFxuXFxuLmhlYWRlciAuUlBCIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGhlaWdodDogbWF4KDU1cHgsIDd2aCk7XFxuICAgIHdpZHRoOiBtYXgoNTVweCwgN3ZoKTtcXG4gICAgZm9udC1zaXplOiBtYXgoNDBweCwgM3JlbSk7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIGNvbG9yOiByZ2IoODUsIDMsIDE5KTtcXG59XFxuXFxuI2FkZFRhc2sge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IG1heCg0MHB4LCAzcmVtKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIGhlaWdodDogbWF4KDU1cHgsIDd2aCk7XFxufVxcblxcbiNhZGRUYXNrOmhvdmVyIHtcXG4gICAgb3BhY2l0eTogMC41O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNhZGRUYXNrOmFjdGl2ZSB7XFxuICAgIG9wYWNpdHk6IDAuMjtcXG59XFxuXFxuLnNlbGVjdGVkIHtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxMHB4IGdyb292ZSB2YXIoLS1ob3Zlcik7XFxufVxcblxcbiNkYXRlIHtcXG4gICAgd2lkdGg6IDQwdmggIWltcG9ydGFudDtcXG4gICAgZm9udC1zaXplOiA1dmg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogZ3JleTtcXG59XFxuXFxuLmNhbExlZnQge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDJ2aDtcXG59XFxuXFxuLmNhbFJpZ2h0IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDJ2aDtcXG59XFxuXFxuLm5hdmlnYXRlY2FsIHtcXG4gICAgZm9udC1zaXplOiA4dmg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbiN0YXNrRm9ybSB7XFxuICAgIHdpZHRoOiA2NXZoO1xcbiAgICBoZWlnaHQ6IDY1dmg7XFxuICAgIGxlZnQ6IGNhbGMoNTAlIC0gMTB2aCk7XFxuICAgIHRvcDogY2FsYyg1MCUgLSAzMHZoKTtcXG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcXG4gICAgcGFkZGluZy1yaWdodDogNSU7XFxuICAgIGZvbnQtc2l6ZTogM3ZoO1xcbn1cXG5cXG4jcHJvamVjdEZvcm0ge1xcbiAgICB3aWR0aDogNTV2aDtcXG4gICAgaGVpZ2h0OiAyNXZoO1xcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDEwdmgpO1xcbiAgICB0b3A6IGNhbGMoNTAlIC0gMzB2aCk7XFxuICAgIHBhZGRpbmc6IDAgMiUgMCAyJTtcXG4gICAgZm9udC1zaXplOiAzdmg7XFxufVxcblxcbiNjb25maXJtYXRpb25Gb3JtIHtcXG4gICAgd2lkdGg6IDUwdmg7XFxuICAgIGhlaWdodDogMzV2aDtcXG4gICAgbGVmdDogY2FsYyg1MCUgLSAxMHZoKTtcXG4gICAgdG9wOiBjYWxjKDUwJSAtIDMwdmgpO1xcbiAgICBwYWRkaW5nOiAwIDMlIDAgMyU7XFxuICAgIGZvbnQtc2l6ZTogM3ZoO1xcbn1cXG5cXG4jcHJvamVjdEZvcm0sXFxuI3Rhc2tGb3JtLFxcbiNjb25maXJtYXRpb25Gb3JtIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdG9uZSk7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgYm9yZGVyOiA1cHggdmFyKC0taG92ZXIpIHNvbGlkO1xcbn1cXG5cXG4uY292ZXIge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5cXG4jdGFza0Zvcm0gZGl2LFxcbiNwcm9qZWN0Rm9ybSBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jdGFza0Zvcm0gbGFiZWwsXFxuI3Byb2plY3RGb3JtIGxhYmVsIHtcXG4gICAgZmxleDogMTtcXG4gICAgbWluLXdpZHRoOiAyMHZoO1xcbiAgICBmb250LXNpemU6IDN2aDtcXG59XFxuXFxuI3Rhc2tGb3JtIGlucHV0LFxcbiN0YXNrRm9ybSBzZWxlY3Qge1xcbiAgICBmbGV4OiA2O1xcbiAgICBtaW4td2lkdGg6IDMwdmg7XFxufVxcblxcbiNkZXNjcmlwdGlvbixcXG4jdGFza0Zvcm0gaW5wdXQsXFxuI3ByaW9yaXR5LFxcbiNwcm9qX3RpdGxlLFxcbiNwcm9qX2R1ZURhdGUge1xcbiAgICBmb250LXNpemU6IDJ2aDtcXG4gICAgcGFkZGluZzogMSU7XFxufVxcblxcbiNkZXNjcmlwdGlvbiB7XFxuICAgIGhlaWdodDogMjB2aDtcXG4gICAgbWF4LXdpZHRoOiAzMHZoO1xcbiAgICByZXNpemU6IG5vbmU7XFxufVxcblxcbi5yZWRCdG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIG1hcmdpbi1yaWdodDogMjUlO1xcbn1cXG5cXG4uZ3JlZW5CdG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDcsIDI1NSwgNDcpO1xcbn1cXG5cXG4ucmVkQnRuLFxcbi5ncmVlbkJ0biB7XFxuICAgIGZvbnQtc2l6ZTogM3ZoO1xcbiAgICBwYWRkaW5nOiAxMCU7XFxuICAgIHdpZHRoOiAxNXZoO1xcbiAgICBoZWlnaHQ6IDAuNXZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZidG4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5leHBpcmVkIHtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgcmVkO1xcbn1cXG5cXG5cXG4udGFza19kZXNjIHtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgZmxleDogNjtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi50YXNrX2R1ZURhdGUge1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG4udGFza190aXRsZSxcXG4udGFza19kZXNjLFxcbi50YXNrX2R1ZURhdGUge1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIxMik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnRhc2tfdGl0bGUge1xcbiAgICBmbGV4OiAxO1xcbiAgICBwYWRkaW5nOiAwIDYlO1xcbn1cXG5cXG4udGFza0J1dHRvbnM+YnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAzdmg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLm1vYmlsZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcblxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEwMHB4KSB7XFxuXFxuICAgIGJvZHksXFxuICAgIGh0bWwge1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB9XFxuXFxuICAgIC5tb2JpbGUge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHotaW5kZXg6IDE7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgd2lkdGg6IDU1cHg7XFxuICAgICAgICBoZWlnaHQ6IDU1cHg7XFxuICAgICAgICBjb2xvcjogYmxhY2s7XFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgfVxcblxcbiAgICAubW9iaWxlOmhvdmVyIHtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcblxcbiAgICAjc2lkZWJhciB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB6LWluZGV4OiAxO1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcXG4gICAgICAgIG1heC13aWR0aDogbWluKDc1JSwgMzAwcHgpO1xcbiAgICB9XFxuXFxuICAgICNwcm9qZWN0Rm9ybSxcXG4gICAgI3Rhc2tGb3JtLFxcbiAgICAjY29uZmlybWF0aW9uRm9ybSB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICByaWdodDogMDtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgICAgIHdpZHRoOiA0MDBweDtcXG4gICAgICAgIGhlaWdodDogMjAwcHg7XFxuICAgIH1cXG5cXG4gICAgI3Rhc2tGb3JtLFxcbiAgICAjcHJvamVjdEZvcm0ge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgbWluLWhlaWdodDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgICNwcm9qZWN0Rm9ybSBsYWJlbCB7XFxuICAgICAgICBtYXgtaGVpZ2h0OiA1MHB4O1xcbiAgICB9XFxuXFxuICAgICNwcm9qZWN0Rm9ybT5kaXYge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAjcHJvamVjdEZvcm0+ZGl2Pioge1xcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICAgICAgd2lkdGg6IDkwJTtcXG4gICAgfVxcblxcbiAgICAjdGFza0Zvcm0gbGFiZWwge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW1cXG4gICAgfVxcblxcbiAgICAjdGFza0Zvcm0gI3RpdGxlLFxcbiAgICAjdGFza0Zvcm0gI2R1ZURhdGUge1xcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xcbiAgICAgICAgd2lkdGg6IDkwJTtcXG4gICAgfVxcblxcbiAgICAjZGVzY3JpcHRpb24ge1xcbiAgICAgICAgd2lkdGg6IDkwJTtcXG4gICAgICAgIG1heC13aWR0aDogbm9uZTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xcbiAgICB9XFxuXFxuICAgICNwcmlvcml0eSB7XFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgICAgICB3aWR0aDogOTAlO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgI3Rhc2tGb3JtPmRpdiB7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgfVxcblxcbiAgICAuZmJ0biB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xcbiAgICB9XFxuXFxuICAgIC5mYnRuPioge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjdyZW07XFxuICAgIH1cXG5cXG4gICAgLlJQQiB7XFxuICAgICAgICBmb250LXNpemU6IDQwcHg7XFxuICAgICAgICB6LWluZGV4OiAxO1xcbiAgICB9XFxuXFxuICAgICNkYXRlIHtcXG4gICAgICAgIG1heC13aWR0aDogMjUwcHg7XFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxuICAgIH1cXG5cXG4gICAgI2FkZFRhc2sge1xcbiAgICAgICAgbWFyZ2luOiAwIDEwMHB4O1xcbiAgICB9XFxuXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxVQUFVO0lBQ1YsU0FBUztJQUNULHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtJ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ckI7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsVUFBVTtRQUNWLHVCQUF1QjtJQUMzQjs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gsYUFBYTtRQUNiLHNCQUFzQjtRQUN0Qix1QkFBdUI7UUFDdkIsbUJBQW1CO1FBQ25CLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLGFBQWE7UUFDYiw4QkFBOEI7SUFDbEM7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsVUFBVTtJQUNkOztJQUVBO1FBQ0ksZ0JBQWdCO1FBQ2hCLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztBQUVKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIC0tbmV1dHJhbDogI2Y1ZjVmNTtcXG4gICAgLS12aW9sZXQ6IHdoaXRlO1xcbiAgICAtLXN0b25lOiAjNmU2Mjc5O1xcbiAgICAtLXppbmM6ICMzZjNmNDY7XFxuICAgIC0taG92ZXI6IHJnYig2OSwgMzEsIDgzKTtcXG5cXG59XFxuXFxuYm9keSxcXG5odG1sIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbn1cXG5cXG5cXG4jc2lkZWJhciB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXppbmMpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI3NpZGViYXI+ZGl2IHtcXG4gICAgZm9udC1zaXplOiA2dmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaG9tZSB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGJvcmRlci1ib3R0b206IDVweCBibGFjayBzb2xpZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3RvbmUpO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuI3Byb2plY3RzIHtcXG4gICAgZmxleDogNztcXG59XFxuXFxuLmhvbWU6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlcik7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBmbGV4OiAzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcblxcbi5leHBhbmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZXhwYW5kPmRpdjpmaXJzdC1jaGlsZCxcXG4jYWRkUHJvamVjdCB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZXhwYW5kPioge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI2FkZFByb2plY3Qge1xcbiAgICBib3JkZXItdG9wOiAzcHggc29saWQgYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN0b25lKTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbiNhZGRQcm9qZWN0OmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlcik7XFxufVxcblxcbi5leHBhbmQ+ZGl2OmZpcnN0LWNoaWxkIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG5cXG4uZXhwYW5kIC5zaG9ydGN1dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN0b25lKTtcXG4gICAgcGFkZGluZzogNSU7XFxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBibGFjaztcXG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uZXhwYW5kIC5zaG9ydGN1dHMge1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBtYXgtaGVpZ2h0OiA3MHZoO1xcbn1cXG5cXG4uc2hvcnRjdXQ6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlcik7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmV4cGFuZD5kaXYge1xcbiAgICBmbGV4OiA1O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiN0YXNrcyB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzV2aCwgMWZyKSk7XFxuICAgIGdyaWQtZ2FwOiAydmg7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAzJTtcXG59XFxuXFxuI3Rhc2tzPmRpdiB7XFxuICAgIGhlaWdodDogMzV2aDtcXG4gICAgYmFja2dyb3VuZDogcmdiKDAsIDE0NywgMjIzKTtcXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgwLCAxNDcsIDIyMywgMSkgMCUsXFxuICAgICAgICAgICAgcmdiYSgyMTEsIDIzOSwgMjQyLCAxKSA0OSUsIHJnYmEoMTcsIDE2LCAxNiwgMSkgMTAwJSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XFxufVxcblxcbiN0YXNrcz5kaXY+ZGl2IHtcXG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcXG4gICAgZm9udC1zaXplOiAzdmg7XFxufVxcblxcbi5NdXN0IHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDIzMiwgNSwgNSk7XFxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoMjMyLCA1LCA1LCAxKSAwJSxcXG4gICAgICAgICAgICByZ2JhKDIxMywgMTQ0LCAxNDQsIDEpIDQ5JSwgcmdiYSgxNywgMTYsIDE2LCAxKSAxMDAlKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uTmVjZXNzYXJ5IHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDIzMiwgMTA3LCA1KTtcXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgyMzIsIDEwNywgNSwgMSkgMCUsXFxuICAgICAgICAgICAgcmdiYSgyMzUsIDIwMCwgMTYzLCAxKSA0OSUsIHJnYmEoMTcsIDE2LCAxNiwgMSkgMTAwJSkgIWltcG9ydGFudDtcXG59XFxuXFxuLk1heWJlIHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDE5MywgMjMyLCA1KTtcXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgxOTMsIDIzMiwgNSwgMSkgMCUsXFxuICAgICAgICAgICAgcmdiYSgyMjQsIDIzNSwgMTYzLCAxKSA0OSUsIHJnYmEoMTcsIDE2LCAxNiwgMSkgMTAwJSkgIWltcG9ydGFudDtcXG59XFxuXFxuI2NvbnRlbnQ+Kjpub3QoI3Rhc2tzKSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG59XFxuXFxuLmhlYWRlciAuUlBCIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGhlaWdodDogbWF4KDU1cHgsIDd2aCk7XFxuICAgIHdpZHRoOiBtYXgoNTVweCwgN3ZoKTtcXG4gICAgZm9udC1zaXplOiBtYXgoNDBweCwgM3JlbSk7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIGNvbG9yOiByZ2IoODUsIDMsIDE5KTtcXG59XFxuXFxuI2FkZFRhc2sge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IG1heCg0MHB4LCAzcmVtKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIGhlaWdodDogbWF4KDU1cHgsIDd2aCk7XFxufVxcblxcbiNhZGRUYXNrOmhvdmVyIHtcXG4gICAgb3BhY2l0eTogMC41O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNhZGRUYXNrOmFjdGl2ZSB7XFxuICAgIG9wYWNpdHk6IDAuMjtcXG59XFxuXFxuLnNlbGVjdGVkIHtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxMHB4IGdyb292ZSB2YXIoLS1ob3Zlcik7XFxufVxcblxcbiNkYXRlIHtcXG4gICAgd2lkdGg6IDQwdmggIWltcG9ydGFudDtcXG4gICAgZm9udC1zaXplOiA1dmg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogZ3JleTtcXG59XFxuXFxuLmNhbExlZnQge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDJ2aDtcXG59XFxuXFxuLmNhbFJpZ2h0IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDJ2aDtcXG59XFxuXFxuLm5hdmlnYXRlY2FsIHtcXG4gICAgZm9udC1zaXplOiA4dmg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbiN0YXNrRm9ybSB7XFxuICAgIHdpZHRoOiA2NXZoO1xcbiAgICBoZWlnaHQ6IDY1dmg7XFxuICAgIGxlZnQ6IGNhbGMoNTAlIC0gMTB2aCk7XFxuICAgIHRvcDogY2FsYyg1MCUgLSAzMHZoKTtcXG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcXG4gICAgcGFkZGluZy1yaWdodDogNSU7XFxuICAgIGZvbnQtc2l6ZTogM3ZoO1xcbn1cXG5cXG4jcHJvamVjdEZvcm0ge1xcbiAgICB3aWR0aDogNTV2aDtcXG4gICAgaGVpZ2h0OiAyNXZoO1xcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDEwdmgpO1xcbiAgICB0b3A6IGNhbGMoNTAlIC0gMzB2aCk7XFxuICAgIHBhZGRpbmc6IDAgMiUgMCAyJTtcXG4gICAgZm9udC1zaXplOiAzdmg7XFxufVxcblxcbiNjb25maXJtYXRpb25Gb3JtIHtcXG4gICAgd2lkdGg6IDUwdmg7XFxuICAgIGhlaWdodDogMzV2aDtcXG4gICAgbGVmdDogY2FsYyg1MCUgLSAxMHZoKTtcXG4gICAgdG9wOiBjYWxjKDUwJSAtIDMwdmgpO1xcbiAgICBwYWRkaW5nOiAwIDMlIDAgMyU7XFxuICAgIGZvbnQtc2l6ZTogM3ZoO1xcbn1cXG5cXG4jcHJvamVjdEZvcm0sXFxuI3Rhc2tGb3JtLFxcbiNjb25maXJtYXRpb25Gb3JtIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdG9uZSk7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgYm9yZGVyOiA1cHggdmFyKC0taG92ZXIpIHNvbGlkO1xcbn1cXG5cXG4uY292ZXIge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5cXG4jdGFza0Zvcm0gZGl2LFxcbiNwcm9qZWN0Rm9ybSBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jdGFza0Zvcm0gbGFiZWwsXFxuI3Byb2plY3RGb3JtIGxhYmVsIHtcXG4gICAgZmxleDogMTtcXG4gICAgbWluLXdpZHRoOiAyMHZoO1xcbiAgICBmb250LXNpemU6IDN2aDtcXG59XFxuXFxuI3Rhc2tGb3JtIGlucHV0LFxcbiN0YXNrRm9ybSBzZWxlY3Qge1xcbiAgICBmbGV4OiA2O1xcbiAgICBtaW4td2lkdGg6IDMwdmg7XFxufVxcblxcbiNkZXNjcmlwdGlvbixcXG4jdGFza0Zvcm0gaW5wdXQsXFxuI3ByaW9yaXR5LFxcbiNwcm9qX3RpdGxlLFxcbiNwcm9qX2R1ZURhdGUge1xcbiAgICBmb250LXNpemU6IDJ2aDtcXG4gICAgcGFkZGluZzogMSU7XFxufVxcblxcbiNkZXNjcmlwdGlvbiB7XFxuICAgIGhlaWdodDogMjB2aDtcXG4gICAgbWF4LXdpZHRoOiAzMHZoO1xcbiAgICByZXNpemU6IG5vbmU7XFxufVxcblxcbi5yZWRCdG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIG1hcmdpbi1yaWdodDogMjUlO1xcbn1cXG5cXG4uZ3JlZW5CdG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDcsIDI1NSwgNDcpO1xcbn1cXG5cXG4ucmVkQnRuLFxcbi5ncmVlbkJ0biB7XFxuICAgIGZvbnQtc2l6ZTogM3ZoO1xcbiAgICBwYWRkaW5nOiAxMCU7XFxuICAgIHdpZHRoOiAxNXZoO1xcbiAgICBoZWlnaHQ6IDAuNXZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZidG4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5leHBpcmVkIHtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgcmVkO1xcbn1cXG5cXG5cXG4udGFza19kZXNjIHtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgZmxleDogNjtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi50YXNrX2R1ZURhdGUge1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG4udGFza190aXRsZSxcXG4udGFza19kZXNjLFxcbi50YXNrX2R1ZURhdGUge1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIxMik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnRhc2tfdGl0bGUge1xcbiAgICBmbGV4OiAxO1xcbiAgICBwYWRkaW5nOiAwIDYlO1xcbn1cXG5cXG4udGFza0J1dHRvbnM+YnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAzdmg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLm1vYmlsZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcblxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEwMHB4KSB7XFxuXFxuICAgIGJvZHksXFxuICAgIGh0bWwge1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB9XFxuXFxuICAgIC5tb2JpbGUge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHotaW5kZXg6IDE7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgd2lkdGg6IDU1cHg7XFxuICAgICAgICBoZWlnaHQ6IDU1cHg7XFxuICAgICAgICBjb2xvcjogYmxhY2s7XFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgfVxcblxcbiAgICAubW9iaWxlOmhvdmVyIHtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcblxcbiAgICAjc2lkZWJhciB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB6LWluZGV4OiAxO1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcXG4gICAgICAgIG1heC13aWR0aDogbWluKDc1JSwgMzAwcHgpO1xcbiAgICB9XFxuXFxuICAgICNwcm9qZWN0Rm9ybSxcXG4gICAgI3Rhc2tGb3JtLFxcbiAgICAjY29uZmlybWF0aW9uRm9ybSB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICByaWdodDogMDtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgICAgIHdpZHRoOiA0MDBweDtcXG4gICAgICAgIGhlaWdodDogMjAwcHg7XFxuICAgIH1cXG5cXG4gICAgI3Rhc2tGb3JtLFxcbiAgICAjcHJvamVjdEZvcm0ge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgbWluLWhlaWdodDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgICNwcm9qZWN0Rm9ybSBsYWJlbCB7XFxuICAgICAgICBtYXgtaGVpZ2h0OiA1MHB4O1xcbiAgICB9XFxuXFxuICAgICNwcm9qZWN0Rm9ybT5kaXYge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAjcHJvamVjdEZvcm0+ZGl2Pioge1xcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICAgICAgd2lkdGg6IDkwJTtcXG4gICAgfVxcblxcbiAgICAjdGFza0Zvcm0gbGFiZWwge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW1cXG4gICAgfVxcblxcbiAgICAjdGFza0Zvcm0gI3RpdGxlLFxcbiAgICAjdGFza0Zvcm0gI2R1ZURhdGUge1xcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xcbiAgICAgICAgd2lkdGg6IDkwJTtcXG4gICAgfVxcblxcbiAgICAjZGVzY3JpcHRpb24ge1xcbiAgICAgICAgd2lkdGg6IDkwJTtcXG4gICAgICAgIG1heC13aWR0aDogbm9uZTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xcbiAgICB9XFxuXFxuICAgICNwcmlvcml0eSB7XFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgICAgICB3aWR0aDogOTAlO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgI3Rhc2tGb3JtPmRpdiB7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgfVxcblxcbiAgICAuZmJ0biB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xcbiAgICB9XFxuXFxuICAgIC5mYnRuPioge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjdyZW07XFxuICAgIH1cXG5cXG4gICAgLlJQQiB7XFxuICAgICAgICBmb250LXNpemU6IDQwcHg7XFxuICAgICAgICB6LWluZGV4OiAxO1xcbiAgICB9XFxuXFxuICAgICNkYXRlIHtcXG4gICAgICAgIG1heC13aWR0aDogMjUwcHg7XFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxuICAgIH1cXG5cXG4gICAgI2FkZFRhc2sge1xcbiAgICAgICAgbWFyZ2luOiAwIDEwMHB4O1xcbiAgICB9XFxuXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tICcuL3RvZG8nO1xuXG5mdW5jdGlvbiBnZXREYXRlKCkge1xuICBjb25zdCBkID0gbmV3IERhdGUoKTtcbiAgbGV0IG1vbnRoID0gYCR7ZC5nZXRNb250aCgpICsgMX1gO1xuICBsZXQgZGF5ID0gYCR7ZC5nZXREYXRlKCl9YDtcbiAgY29uc3QgeWVhciA9IGQuZ2V0RnVsbFllYXIoKTtcblxuICBpZiAobW9udGgubGVuZ3RoIDwgMikgeyBtb250aCA9IGAwJHttb250aH1gOyB9XG4gIGlmIChkYXkubGVuZ3RoIDwgMikgeyBkYXkgPSBgMCR7ZGF5fWA7IH1cblxuICByZXR1cm4gW3llYXIsIG1vbnRoLCBkYXldLmpvaW4oJy0nKTtcbn1cblxuZnVuY3Rpb24gZ2V0TW9udGhGcm9tU3RyaW5nKG1vbikge1xuICByZXR1cm4gbmV3IERhdGUoRGF0ZS5wYXJzZShgJHttb259IDEsIDIwMTJgKSkuZ2V0TW9udGgoKSArIDE7XG59XG5cbmNvbnN0IGNhbGVuZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RhdGUnKTtcblxuY29uc3QgdG9kYXkgPSBnZXREYXRlKCk7XG5jYWxlbmRlci5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdG9kYXkpO1xuY2FsZW5kZXIuc2V0QXR0cmlidXRlKCdtaW4nLCB0b2RheSk7XG5cbi8vIHNldCBkZWZhdWx0IGRhdGUgdmFsdWVzIHRvIHRvZGF5XG5jb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZURhdGUnKTtcbmR1ZURhdGUudmFsdWUgPSBnZXREYXRlKCk7XG4vLyBjb25zdCBwcm9qX2R1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2pfZHVlRGF0ZVwiKTtcbi8vIHByb2pfZHVlRGF0ZS52YWx1ZSA9IGdldERhdGUoKTtcbi8vIGlkZWFsbHkgeW91IHdvdWxkIGZvcm1hdCB0byBmaXQgbG9jYXRpb24sIGJ1dCB3aGF0IGEgcGFpbiBEOlxuZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlKSB7XG4gIGNvbnN0IHRlbXAgPSBkYXRlLnNwbGl0KCctJyk7XG4gIHJldHVybiBbdGVtcFsxXSwgdGVtcFsyXSwgdGVtcFswXV0uam9pbignLScpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXQodGVtcCkge1xuICAvLyB0ZW1wIChvYmplY3QpOlxuICAvLyBTdW4gQXVnIDIxIDIwMjIgMDI6MDA6MDAgR01UKzAyMDAgKENlbnRyYWwgRXVyb3BlYW4gU3VtbWVyIFRpbWUpXG4gIGNvbnN0IHN0ciA9IHRlbXAudG9TdHJpbmcoKTtcbiAgY29uc3QgbW9udGggPSBnZXRNb250aEZyb21TdHJpbmcoc3RyLnN1YnN0cmluZyg0LCA3KSk7XG4gIGNvbnN0IGRheSA9IHN0ci5zdWJzdHJpbmcoOCwgMTApO1xuICBjb25zdCB5ZWFyID0gc3RyLnN1YnN0cmluZygxMSwgMTUpO1xuICByZXR1cm4gW2RheSwgbW9udGgsIHllYXJdO1xufVxuXG5jb25zdCBleHBpcmVDaGVjayA9ICh0YXNrKSA9PiB7XG4gIC8vIGNvbnN0IHRvZGF5QXJyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlXCIpLnZhbHVlLnNwbGl0KFwiLVwiKTtcblxuICBjb25zdCB0b2RheUFyciA9IGZvcm1hdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZScpLnZhbHVlQXNEYXRlKTtcbiAgLy8gW2RheSwgbW9udGgsIHllYXJdXG4gIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdGVkJykudGV4dENvbnRlbnQ7XG4gIGNvbnN0IGFyciA9IHByb2plY3RzW2N1cnJlbnRQcm9qZWN0XS50YXNrc1t0YXNrLnRpdGxlXS5kdWVEYXRlLnNwbGl0KCctJyk7XG4gIGlmICgrdG9kYXlBcnJbMF0gPiArYXJyWzFdIHx8ICt0b2RheUFyclsxXSA+ICthcnJbMF0gfHwgK3RvZGF5QXJyWzJdXG4gICAgPiArYXJyWzJdKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuLyogY29uc3QgcHJval9leHBpcmVDaGVjayA9ICgpID0+IHtcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VsZWN0ZWRcIikudGV4dENvbnRlbnQ7XG4gICAgaWYgKGN1cnJlbnRQcm9qZWN0ICE9IFwiSE9NRVwiKSB7XG4gICAgICAgIGNvbnN0IHRvZGF5QXJyID0gZm9ybWF0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZVwiKS52YWx1ZUFzRGF0ZSk7XG4gICAgICAgIGNvbnN0IGFyciA9IHByb2plY3RzW2N1cnJlbnRQcm9qZWN0XS5kdWVEYXRlLnNwbGl0KFwiLVwiKTtcbiAgICAgICAgLy8geWVhciBtb250aCBkYXlcblxuICAgICAgICBpZiAoK3RvZGF5QXJyWzBdID4gK2FyclsyXSB8fCArdG9kYXlBcnJbMV0gPiArYXJyWzBdIHx8ICt0b2RheUFyclsyXSA+XG4gICAgICAgICAgICArYXJyWzBdKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxufSAqL1xuXG5leHBvcnQgeyBnZXREYXRlLCBmb3JtYXREYXRlLCBleHBpcmVDaGVjayAvKiBwcm9qX2V4cGlyZUNoZWNrICovIH07XG4iLCJpbXBvcnQgeyBleHBpcmVDaGVjayB9IGZyb20gJy4vZGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBhZGRUYXNrRCA9ICh0YXNrKSA9PiB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYuY2xhc3NMaXN0LmFkZChgJHt0YXNrLmlkfWApO1xuXG4gIGlmIChleHBpcmVDaGVjayh0YXNrKSkge1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdleHBpcmVkJyk7XG4gIH0gZWxzZSB7XG4gICAgZGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2V4cGlyZWQnKTtcbiAgfVxuXG4gIGNvbnN0IHRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tzJyk7XG4gIHRhc2tzLmFwcGVuZENoaWxkKGRpdik7XG59O1xuXG5leHBvcnQgY29uc3QgZXJhc2VUYXNrc0QgPSAoKSA9PiB7XG4gIGNvbnN0IHRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tzJyk7XG4gIHdoaWxlICh0YXNrcy5maXJzdENoaWxkKSB7XG4gICAgdGFza3MucmVtb3ZlQ2hpbGQodGFza3MubGFzdENoaWxkKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGVyYXNlVGFza0QgPSAoaWQpID0+IHtcbiAgY29uc3QgdGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2lkfWApO1xuICB0YXNrLnJlbW92ZSgpO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZFByb2plY3REID0gKHByb2plY3QsIGlkKSA9PiB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYuY2xhc3NMaXN0LmFkZCgnc2hvcnRjdXQnKTtcbiAgZGl2LmlkID0gaWQ7XG4gIGRpdi50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG5cbiAgY29uc3Qgc2hvcnRjdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNob3J0Y3V0cycpO1xuICBzaG9ydGN1dHMuYXBwZW5kKGRpdik7XG59O1xuXG4vLyBEIGF0IHRoZSBlbmQgcmVwcmVzZW50cyBET01cbiIsImltcG9ydCB7IGNoZWNrRHVlRGF0ZSwgc2hvd0Zvcm1BbmRDb3ZlciB9IGZyb20gJy4vdXRpbGl0eSc7XG5pbXBvcnQgeyBvbkNsaWNraW5nUlBCIH0gZnJvbSAnLi9zZXR1cCc7XG5pbXBvcnQge1xuICBhZGRUYXNrLCByZXNldEZvcm0sIGFkZFByb2plY3QsIHJlc2V0UHJvakZvcm0sIHJlc2V0Q29uZkZvcm0sXG59IGZyb20gJy4vZm9ybXMnO1xuXG4vLyBpdCByZXNldHMgZXZlcnkgdGltZSB3ZWJzaXRlIHJlZnJlc2hlcyBzbyBkdXBsaWNhdGlvbiBidWcgb2NjdXJzLFxuLy8gYW5kIGl0J3MgbW9yZSBlZmZpY2llbnQsIChsaXR0bGUgYml0IGxvbFxuXG5jb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZFRhc2snKTtcbmFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHNob3dGb3JtQW5kQ292ZXIoKTtcbn0pO1xuXG4vLyB0aG91Z2h0IGl0IHdvdWxkIGVhc3kgdG8gcHV0IGFsbCBmb3JtIHJlbGF0ZWQgY29kZSB0byB0aGUgc3VibWl0IGJ0biBsaXN0ZW5lclxuY29uc3QgZ2J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmVlbicpO1xuZ2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgYWRkVGFzaygpO1xufSk7XG5cbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza0Zvcm0nKTtcbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gIGlmIChlLmNvZGUgPT09ICdFbnRlcicpIHtcbiAgICBhZGRUYXNrKCk7XG4gIH1cbn0pO1xuXG5jb25zdCByYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlZCcpO1xucmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgcmVzZXRGb3JtKCk7XG59KTtcblxuY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRQcm9qZWN0Jyk7XG5hZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBjb25zdCBwcm9qRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0Rm9ybScpO1xuICBwcm9qRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICBjb25zdCBjb3ZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3ZlcicpO1xuICBjb3Zlci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbn0pO1xuXG5jb25zdCBwcm9qR0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qX2dyZWVuJyk7XG5wcm9qR0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgYWRkUHJvamVjdCgpO1xufSk7XG5cbmNvbnN0IHByb2pGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RGb3JtJyk7XG5wcm9qRm9ybS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgaWYgKGUuY29kZSA9PT0gJ0VudGVyJykge1xuICAgIGFkZFByb2plY3QoKTtcbiAgfVxufSk7XG5cbmNvbnN0IHByb2pSQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2pfcmVkJyk7XG5wcm9qUkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgcmVzZXRQcm9qRm9ybSgpO1xufSk7XG5cbmNvbnN0IGNvbmZHcmVlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb25mX2dyZWVuJyk7XG5jb25mR3JlZW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIG9uQ2xpY2tpbmdSUEIoKTtcbiAgcmVzZXRDb25mRm9ybSgpO1xufSk7XG5cbmNvbnN0IGNvbmZSZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29uZl9yZWQnKTtcbmNvbmZSZWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHJlc2V0Q29uZkZvcm0oKTtcbn0pO1xuXG4vLyBuYXZpZ2F0ZSBjYWxlbmRlciwgbGVmdCBhbmQgcmlnaHQgYXJyb3dcbmNvbnN0IGxlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FsTGVmdCcpO1xuY29uc3QgcmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FsUmlnaHQnKTtcbmNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RhdGUnKTtcbmxlZnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGlucHV0LnN0ZXBEb3duKCk7XG4gIGNoZWNrRHVlRGF0ZSgpO1xufSk7XG5yaWdodC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgaW5wdXQuc3RlcFVwKCk7XG4gIGNoZWNrRHVlRGF0ZSgpO1xufSk7XG4vLyBkYXRlIGlzIHBpY2tlZCBtYW51YWxseSBmcm9tIHRoZSBjYWxhbmRlciwgY2xpY2sgZG9lc24ndCB3b3JrXG5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gIGNoZWNrRHVlRGF0ZSgpO1xufSk7XG4iLCJpbXBvcnQgeyBhZGRQcm9qZWN0RCwgYWRkVGFza0QgfSBmcm9tICcuL2RvbSc7XG5pbXBvcnQgeyBzZXR1cFRhc2tELCBhZGRQcm9qZWN0TGlzdGVuZXIgfSBmcm9tICcuL3NldHVwJztcbmltcG9ydCB7IHByb2plY3RGYWN0b3J5LCBwcm9qZWN0cywgdG9kbyB9IGZyb20gJy4vdG9kbyc7XG5pbXBvcnQgeyBmb3JtYXREYXRlLCBnZXREYXRlIH0gZnJvbSAnLi9kYXRlJztcblxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0Rm9ybSgpIHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrRm9ybScpO1xuICBjb25zdCBjb3ZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3ZlcicpO1xuICBmb3JtLnJlc2V0KCk7XG4gIGZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgY292ZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAvLyB0aGlzIGlzIGFsc28gZGVmYXVsdCwgcHJlc2VudCBpbiBkYXRlLmpzIVxuICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZURhdGUnKTtcbiAgZHVlRGF0ZS52YWx1ZSA9IGdldERhdGUoKTtcbn1cblxuLy8gY291bGRuJ3QgZ2V0IHN1Ym1pdCB0eXBlIGJ1dHRvbiB0byB3b3JrLCBzbyBuZWVkZWQgYSBmdW5jdGlvbiB0byBnZXQgdmFsdWVzXG4vLyBmcm9tIHRoZSBmb3JtLCB0aGlzIGlzIGl0XG5mdW5jdGlvbiBnZXRUYXNrKCkge1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlO1xuICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RlZCcpLnRleHRDb250ZW50O1xuICBpZiAoIXByb2plY3RzW2N1cnJlbnRQcm9qZWN0XS50YXNrc1t0aXRsZV0pIHtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpLnZhbHVlO1xuICAgIGxldCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZURhdGUnKS52YWx1ZTtcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eScpLnZhbHVlO1xuXG4gICAgaWYgKCFkdWVEYXRlKSB7XG4gICAgICBkdWVEYXRlID0gZ2V0RGF0ZSgpO1xuICAgIH1cblxuICAgIGxldCBpZCA9IDA7XG4gICAgLy8gZWFzaWVzdCB3YXkgdG8gcHJldmVudCBkdXBsaWNhdGlvbiBidWcgPT4gMiB0YXNrcyAxIGlkXG4gICAgT2JqZWN0LmtleXMocHJvamVjdHNbY3VycmVudFByb2plY3RdLnRhc2tzKS5mb3JFYWNoKCh0YXNrTmFtZSkgPT4ge1xuICAgICAgaWQgPSBNYXRoLm1heChpZCwgTnVtYmVyKHByb2plY3RzW2N1cnJlbnRQcm9qZWN0XS50YXNrc1t0YXNrTmFtZV0uaWRcbiAgICAgICAgLnJlcGxhY2UoJ3Rhc2snLCAnJykpICsgMSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCB0YXNrID0gdG9kbyhcbiAgICAgIHRpdGxlLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICBmb3JtYXREYXRlKGR1ZURhdGUpLFxuICAgICAgcHJpb3JpdHksXG4gICAgICBgdGFzayR7aWQudG9TdHJpbmcoKX1gLFxuICAgICk7XG4gICAgcmV0dXJuIHRhc2s7XG4gIH1cbiAgcmV0dXJuIDA7XG59XG5cbmV4cG9ydCBjb25zdCBhZGRUYXNrID0gKCkgPT4ge1xuICAvLyBydW4gb25seSBpZiBub3QgZWRpdGluZywgd2UgaGF2ZSAyIGV2ZW50IGxpc3RuZXJzIG9uIG9uZSBidXR0b25cbiAgLy8gc28gdGhpcyBmb3JjZXMgdGhlIG90aGVyIG9uZSB0byB3b3JrIGFsb25lLCB3aGljaCBpcyB3aGF0IHdlIHdhbnRcbiAgY29uc3QgY3VycmVudFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0ZWQnKS50ZXh0Q29udGVudDtcbiAgLy8gYnVncyBvY2N1ciBpZiBmbGFnIGlzbid0IHByZXNlbnQsIHNpbmNlIGFmdGVyIEkgYW0gdXNpbmcgdHdvXG4gIC8vIGV2ZW50IGxpc3RuZXJzIGZvciBvbmUgYnV0dG9uXG4gIGNvbnN0IHRhc2sgPSBnZXRUYXNrKCk7XG5cbiAgaWYgKHRhc2sgPT09IDApIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYWxlcnRcbiAgICBhbGVydCgnRmFpbHVyZSwgdGFzayB3aXRoIHRoZSBzYW1lIHRpdGxlIGFscmVhZHkgZXhpc3RzJyk7XG4gIH1cbiAgaWYgKHRhc2spIHtcbiAgICByZXNldEZvcm0oKTtcbiAgICAvLyBzZXQgZGVmYXVsdCBkYXRlLCBzbyBNTS1ERC1ZWVlZIGlzIG5vdCBzaG93biBvbiBmb3JtPz8/Pz9cbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZURhdGUnKTtcbiAgICBkdWVEYXRlLnZhbHVlID0gZ2V0RGF0ZSgpO1xuXG4gICAgLy8gc2V0dXAgdGFza1xuICAgIHByb2plY3RzW2N1cnJlbnRQcm9qZWN0XS50YXNrc1t0YXNrLnRpdGxlXSA9IHRhc2s7XG4gICAgYWRkVGFza0QodGFzaywgY3VycmVudFByb2plY3QpO1xuICAgIHNldHVwVGFza0QodGFzayk7XG5cbiAgICBjb25zdCByYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlZCcpO1xuICAgIHJidXR0b24uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcblxuICAgIGNvbnN0IGdidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JlZW4nKTtcbiAgICBnYnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2IoNDcsIDI1NSwgNDcpJztcbiAgICBnYnV0dG9uLnRleHRDb250ZW50ID0gJ0FkZCc7XG5cbiAgICAvLyBhdHRlbXB0IGF0IFwicmVmcmVzaGluZ1wiIHRoZSBoZWlnaHQsIGJlY2F1c2UgaXQgc29tZXRpbWVzIGZvcmdldHNcbiAgICAvLyBpdCBuZWVkcyB0byBiZSAxMDB2aCBvbiBtb2JpbGUgYnJvd3NlcnMgPi0uLTxcbiAgICAvLyBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NpZGViYXInKTtcbiAgICAvLyBzaWRlYmFyLnN0eWxlLmhlaWdodCA9ICcxMDB2aCc7XG5cbiAgICAvLyBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICAvLyBjb250ZW50LnN0eWxlLmhlaWdodCA9ICcxMDB2aCc7XG5cbiAgICAvLyBzYXZlIHRvIGxvY2FsIHdoZW4geW91IGFkZCB0YXNrIG9yIHByb2plY3RcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xuICB9XG59O1xuXG4vLyBzaW1pbGFyIHByb2JsZW0gYXMgdGFzayBpZFxuLy8gbGV0IHByb2plY3RJRCA9IE9iamVjdC5rZXlzKHByb2plY3RzKS5sZW5ndGg7XG5cbi8vIGFnYWludCwgbmVlZGVkIGEgd2F5IHRvIGdldCB2YWx1ZXMgZnJvbSB0aGUgZm9ybVxuZnVuY3Rpb24gZ2V0UHJvamVjdCgpIHtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJval90aXRsZScpLnZhbHVlO1xuICBpZiAoIXByb2plY3RzW3RpdGxlXSkge1xuICAgIC8vIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2pfZHVlRGF0ZVwiKS52YWx1ZTtcblxuICAgIGxldCBwcm9qZWN0SUQgPSAwO1xuICAgIC8vIGVhc2llc3Qgd2F5IHRvIHByZXZlbnQgZHVwbGljYXRpb24gYnVnID0+IDIgcHJvamVjdHMgMSBpZFxuICAgIE9iamVjdC5rZXlzKHByb2plY3RzKS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBwcm9qZWN0SUQgPSBNYXRoLm1heChwcm9qZWN0SUQsIE51bWJlcihwcm9qZWN0c1twcm9qZWN0XS5pZFxuICAgICAgICAucmVwbGFjZSgnUHInLCAnJykpICsgMSk7XG4gICAgfSk7XG4gICAgY29uc3QgcHJvaiA9IHByb2plY3RGYWN0b3J5KFxuICAgICAgdGl0bGUsXG4gICAgICAvKiBkdWVEYXRlLCAqL1xuICAgICAgYFByJHtwcm9qZWN0SUQudG9TdHJpbmcoKX1gLFxuICAgICk7XG4gICAgcmV0dXJuIHByb2o7XG4gIH1cbiAgcmV0dXJuIDA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNldFByb2pGb3JtKCkge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RGb3JtJyk7XG4gIGNvbnN0IGNvdmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvdmVyJyk7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qX3RpdGxlJykudmFsdWUgPSAnJztcbiAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qX2R1ZURhdGVcIikudmFsdWUgPSBcIlwiO1xuICBmb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGNvdmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgLy8gdGhpcyBpcyBhbHNvIGRlZmF1bHQsIHByZXNlbnQgaW4gZGF0ZS5qcyFcbiAgLy8gY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJval9kdWVEYXRlXCIpO1xuICAvLyBkdWVEYXRlLnZhbHVlID0gZ2V0RGF0ZSgpO1xufVxuXG5leHBvcnQgY29uc3QgYWRkUHJvamVjdCA9ICgpID0+IHtcbiAgY29uc3QgcHJvamVjdCA9IGdldFByb2plY3QoKTtcbiAgaWYgKCFwcm9qZWN0KSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWFsZXJ0XG4gICAgYWxlcnQoXCJGYWlsdXJlLCBjYW4ndCByZXBlYXQgcHJvamVjdCBuYW1lXCIpO1xuICB9IGVsc2Uge1xuICAgIHJlc2V0UHJvakZvcm0oKTtcbiAgICBwcm9qZWN0c1twcm9qZWN0LnRpdGxlXSA9IHByb2plY3Q7XG4gICAgcHJvamVjdHNbcHJvamVjdC50aXRsZV0udGFza3MgPSB7fTtcbiAgICBwcm9qZWN0c1twcm9qZWN0LnRpdGxlXS5pZCA9IHByb2plY3QuaWQ7XG5cbiAgICBhZGRQcm9qZWN0RChwcm9qZWN0LCBwcm9qZWN0LmlkKTtcbiAgICBhZGRQcm9qZWN0TGlzdGVuZXIocHJvamVjdC5pZCk7XG5cbiAgICAvLyBzYXZlIHRvIGxvY2FsIHdoZW4geW91IGFkZCB0YXNrIG9yIHByb2plY3RcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xuICB9XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRDb25mRm9ybSgpIHtcbiAgY29uc3QgY29uZkZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29uZmlybWF0aW9uRm9ybScpO1xuICBjb25mRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBjb25zdCBjb3ZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3ZlcicpO1xuICBjb3Zlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufVxuIiwiY29uc3QgbW9iaWxlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vYmlsZScpO1xubW9iaWxlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NpZGViYXInKTtcbiAgaWYgKHNpZGViYXIuc3R5bGUuZGlzcGxheSA9PT0gJ2ZsZXgnKSB7XG4gICAgc2lkZWJhci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9IGVsc2Uge1xuICAgIHNpZGViYXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICBtb2JpbGVCdG4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfVxufSk7XG5cbmNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2lkZWJhcicpO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gJzExMDAnKSB7XG4gICAgc2lkZWJhci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIG1vYmlsZUJ0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9XG4gIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8ICcxMTAwJykge1xuICAgIHNpZGViYXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBtb2JpbGVCdG4uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgfVxuICAvLyAvL2lmIChzaWRlYmFyLnN0eWxlLmRpc3BsYXkgIT0gXCJmbGV4XCIpIHtcbiAgLy8gIG1vYmlsZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIC8vIH1cbn0pO1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbmNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8ICcxMTAwJykge1xuICAgIHNpZGViYXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBtb2JpbGVCdG4uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgfVxufSk7XG5cbi8vIFRoZXJlIG1pZ2h0IGJlIGEgbW9yZSBlZmZpY2llbnQgd2F5LiBUaGlzIHNlZW1zIHRvIHdvcmsgdGhvdWdoLlxuIiwiaW1wb3J0IHtcbiAgZXJhc2VUYXNrRCwgYWRkUHJvamVjdEQsIGFkZFRhc2tELCBlcmFzZVRhc2tzRCxcbn0gZnJvbSAnLi9kb20nO1xuaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tICcuL3RvZG8nO1xuaW1wb3J0IHsgZ2V0VGl0bGUsIGRlbGV0ZVRhc2ssIHNob3dGb3JtQW5kQ292ZXIgfSBmcm9tICcuL3V0aWxpdHknO1xuXG5jb25zdCBkb1VJID0gKHdvcmtpbmdUYXNrKSA9PiB7XG4gIGNvbnN0IHRhc2tOb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7d29ya2luZ1Rhc2suaWR9YCk7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSB3b3JraW5nVGFzay50aXRsZTtcbiAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGFza190aXRsZScpO1xuICB0YXNrTm9kZS5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkZXNjLnRleHRDb250ZW50ID0gd29ya2luZ1Rhc2suZGVzY3JpcHRpb247XG4gIGRlc2MuY2xhc3NMaXN0LmFkZCgndGFza19kZXNjJyk7XG4gIHRhc2tOb2RlLmFwcGVuZENoaWxkKGRlc2MpO1xuXG4gIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IGBEdWUgRGF0ZTogJHt3b3JraW5nVGFzay5kdWVEYXRlfWA7XG4gIGR1ZURhdGUuY2xhc3NMaXN0LmFkZCgndGFza19kdWVEYXRlJyk7XG4gIHRhc2tOb2RlLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuXG4gIHRhc2tOb2RlLmNsYXNzTGlzdC5hZGQoYCR7d29ya2luZ1Rhc2sucHJpb3JpdHl9YCk7XG59O1xuXG5jb25zdCBzZXR1cERlbGV0ZUJ1dHRvbiA9ICh3b3JraW5nVGFzaykgPT4ge1xuICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYnRuLnRleHRDb250ZW50ID0gJ1gnO1xuXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3dvcmtpbmdUYXNrLmlkfSAudGFza0J1dHRvbnNgKTtcbiAgZGl2LmFwcGVuZENoaWxkKGJ0bik7XG5cbiAgLy8gd2UgbmVlZCB0byBvYnRhaW4gdGFzayBvYmplY3QgZnJvbSB0aGUgYnV0dG9uIGl0c2VsZlxuICAvLyBiZWNhdXNlIGlmIHdlIHVzZSBhbnkgdmFyaWFibGUgaXQgd29uJ3QgZGVsZXRlIHByb3Blcmx5XG4gIC8vIHRoaXMgaXMgZG9uZSB2aWEgbWF0Y2hpbmcgYnRuIGNsYXNzIG5hbWUgd2hpY2ggaXMgZXF1YWwgdG8gdGhlIGlkXG4gIC8vIG9mIHRoZSB0YXNrIHRoYXQgd2UgYXJlIHNlZWtpbmcgaW4gYSBwcm9qZWN0cyBvYmplY3RcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBjb25zdCB0YXNrSUQgPSBbLi4uZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNsYXNzTGlzdF1bMF07XG4gICAgY29uc3QgdGl0bGUgPSBnZXRUaXRsZSh0YXNrSUQpO1xuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdGVkJykudGV4dENvbnRlbnQ7XG4gICAgZGVsZXRlVGFzayhjdXJyZW50UHJvamVjdCwgcHJvamVjdHNbY3VycmVudFByb2plY3RdLnRhc2tzW3RpdGxlXSk7XG4gICAgZXJhc2VUYXNrRCh0YXNrSUQpO1xuICB9KTtcbn07XG5cbmZ1bmN0aW9uIHNldHVwRWRpdEZvcm0odGl0bGUpIHtcbiAgY29uc3QgY3VycmVudFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0ZWQnKS50ZXh0Q29udGVudDtcbiAgLy8gdGFzayA9IFRIRSBPTkUgQkVJTkcgQ0xJQ0tFRFxuICBjb25zdCB0YXNrID0gcHJvamVjdHNbY3VycmVudFByb2plY3RdLnRhc2tzW3RpdGxlXTtcblxuICAvLyBmaWxsIHRoZSBmb3JtIGNvcnJlY3RseVxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS52YWx1ZSA9IHRhc2sudGl0bGU7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpLnZhbHVlID0gdGFzay5kZXNjcmlwdGlvbjtcbiAgbGV0IGFyciA9IHRhc2suZHVlRGF0ZS5zcGxpdCgnLScpO1xuICBhcnIgPSBbYXJyWzJdLCBhcnJbMF0sIGFyclsxXV0uam9pbignLScpO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlRGF0ZScpLnZhbHVlID0gYXJyO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHknKS52YWx1ZSA9IHRhc2sucHJpb3JpdHk7XG5cbiAgLy8gZGVsZXRlLCBhbmQgbGV0IHRoZSBncmVlbiBidXR0b24gYnVpbGQgaXQgZm9yIHlvdSwgbm8gaW4gdGhpcyBjYXNlXG4gIC8vIHNob3VsZCBoYXZlIGEgc3BlY2lhbCBmdW5jdGlvblxuICBlcmFzZVRhc2tEKHByb2plY3RzW2N1cnJlbnRQcm9qZWN0XS50YXNrc1t0aXRsZV0uaWQpO1xuICBkZWxldGUgcHJvamVjdHNbY3VycmVudFByb2plY3RdLnRhc2tzW3RpdGxlXTtcblxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xuXG4gIGNvbnN0IHJidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVkJyk7XG4gIHJidXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICBjb25zdCBnYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyZWVuJyk7XG4gIGdidXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3llbGxvdyc7XG4gIGdidXR0b24udGV4dENvbnRlbnQgPSAnRWRpdCc7XG59XG5cbmNvbnN0IHNldHVwRWRpdEJ1dHRvbiA9ICh3b3JraW5nVGFzaykgPT4ge1xuICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYnRuLnRleHRDb250ZW50ID0gJ0VkaXQnO1xuXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYuY2xhc3NMaXN0LmFkZCgndGFza0J1dHRvbnMnKTtcblxuICBjb25zdCB0YXNrTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3dvcmtpbmdUYXNrLmlkfWApO1xuICB0YXNrTm9kZS5hcHBlbmRDaGlsZChkaXYpO1xuICBkaXYuYXBwZW5kQ2hpbGQoYnRuKTtcblxuICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIHNob3dGb3JtQW5kQ292ZXIoKTtcbiAgICBzZXR1cEVkaXRGb3JtKGdldFRpdGxlKFsuLi5lLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2xhc3NMaXN0XVswXSkpO1xuICB9KTtcbn07XG5cbi8vIFwiQ29udHJvbFwiIGZ1bmN0aW9uXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBUYXNrRCh0YXNrKSB7XG4gIGRvVUkodGFzayk7XG4gIHNldHVwRWRpdEJ1dHRvbih0YXNrKTtcbiAgc2V0dXBEZWxldGVCdXR0b24odGFzayk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93Q29uZmlybWF0aW9uRm9ybSgpIHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb25maXJtYXRpb25Gb3JtJyk7XG4gIGZvcm0uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgY29uc3QgY292ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY292ZXInKTtcbiAgY292ZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG59XG5cbi8vIFJQQiAtIHJlbW92ZSBwcm9qZWN0IGJ1dHRvblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFJQQigpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpO1xuICBpZiAoaGVhZGVyLmxhc3RDaGlsZC50ZXh0Q29udGVudCAhPT0gJ1gnKSB7XG4gICAgY29uc3QgZGVsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZGVsQnRuLnRleHRDb250ZW50ID0gJ1gnO1xuICAgIGRlbEJ0bi5jbGFzc0xpc3QuYWRkKCdSUEInKTtcbiAgICBkZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBzaG93Q29uZmlybWF0aW9uRm9ybSgpO1xuICAgIH0pO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChkZWxCdG4pO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVSUEIoKSB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKTtcbiAgY29uc3QgcnBiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLlJQQicpO1xuICBpZiAocnBiKSB7IGhlYWRlci5yZW1vdmVDaGlsZChycGIpOyB9XG59XG5cbi8vIGZlbHQgbGlrZSB0aGlzIGRlc2VydmVzIGEgc2VwZXJhdGUgbW9kdWxlLCBzaW5jZSBpdCdzIG5vdCByZWFsbHkgRE9NIG1hbmlwLlxuZXhwb3J0IGNvbnN0IGNoYW5nZVByb2plY3REID0gKHByb2plY3ROYW1lKSA9PiB7XG4gIGVyYXNlVGFza3NEKCk7XG4gIGlmIChwcm9qZWN0c1twcm9qZWN0TmFtZV0udGFza3MgIT09IHt9KSB7XG4gICAgT2JqZWN0LmtleXMocHJvamVjdHNbcHJvamVjdE5hbWVdLnRhc2tzKS5mb3JFYWNoKChlbSkgPT4ge1xuICAgICAgYWRkVGFza0QocHJvamVjdHNbcHJvamVjdE5hbWVdLnRhc2tzW2VtXSk7XG4gICAgICBzZXR1cFRhc2tEKHByb2plY3RzW3Byb2plY3ROYW1lXS50YXNrc1tlbV0sIHByb2plY3ROYW1lKTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChwcm9qZWN0TmFtZSAhPT0gJ0hPTUUnKSB7XG4gICAgYWRkUlBCKCk7XG4gIH0gZWxzZSB7XG4gICAgcmVtb3ZlUlBCKCk7XG4gIH1cbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRQcm9qZWN0TGlzdGVuZXIoaWQpIHtcbiAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2lkfWApO1xuXG4gIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgdGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RlZCcpO1xuICAgIHRlbXAuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgJzEwMjQnKSB7XG4gICAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NpZGViYXInKTtcbiAgICAgIGNvbnN0IG1vYmlsZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2JpbGUnKTtcbiAgICAgIHNpZGViYXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIG1vYmlsZUJ0bi5zdHlsZS5kaXNwbGF5ID0gJ2luaXRpYWwnO1xuICAgIH1cbiAgICBjaGFuZ2VQcm9qZWN0RChwcm9qZWN0LnRleHRDb250ZW50KTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkNsaWNraW5nUlBCKCkge1xuICAvLyBmaXJzdCBjaGVjayBpZiB5b3UgYWN0dWFsbHkgd2FudCB0byBkZWxldGVcbiAgLy8gZ2V0IGlkLCBkZWxldGUgb24gY29udGVudCBhbmQgdGhlbiBzaWRlYmFyIHVzaW5nIGlkLiByZXR1cm4gdG8gaG9tZVxuICBjb25zdCBwcm9qZWN0TmFtZTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0ZWQnKS50ZXh0Q29udGVudDtcbiAgY29uc3QgcHJvamVjdElEID0gcHJvamVjdHNbcHJvamVjdE5hbWUyXS5pZDtcbiAgZGVsZXRlIHByb2plY3RzW3Byb2plY3ROYW1lMl07XG4gIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtwcm9qZWN0SUR9YCk7XG4gIHByb2plY3QucmVtb3ZlKCk7XG5cbiAgY29uc3QgaG9tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNQcjAnKTtcbiAgaG9tZS5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICBjaGFuZ2VQcm9qZWN0RCgnSE9NRScpO1xuXG4gIC8vIHNhdmUgYmVjYXVzZSB5b3UgcmVtb3ZlZCBhIHByb2plY3RcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcbn1cblxuYWRkUHJvamVjdExpc3RlbmVyKCdQcjAnKTtcblxuLy8gbG9hZCBhbGwgcHJvamVjdHMgYW5kIHRhc2tzIGZyb20gdGhlIGxvY2FsIHN0b3JhZ2VcbmV4cG9ydCBjb25zdCBsb2FkRnJvbVN0b3JhZ2UgPSAoKSA9PiB7XG4gIE9iamVjdC5rZXlzKHByb2plY3RzKS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgaWYgKHByb2plY3QgIT09ICdIT01FJykge1xuICAgICAgYWRkUHJvamVjdEQocHJvamVjdHNbcHJvamVjdF0sIHByb2plY3RzW3Byb2plY3RdLmlkKTtcbiAgICAgIGFkZFByb2plY3RMaXN0ZW5lcihwcm9qZWN0c1twcm9qZWN0XS5pZCk7XG4gICAgfVxuICB9KTtcblxuICBPYmplY3Qua2V5cyhwcm9qZWN0cy5IT01FLnRhc2tzKS5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgYWRkVGFza0QocHJvamVjdHMuSE9NRS50YXNrc1t0YXNrXSk7XG4gICAgc2V0dXBUYXNrRChwcm9qZWN0cy5IT01FLnRhc2tzW3Rhc2tdLCAnSE9NRScpO1xuICB9KTtcbn07XG5cbi8vIFByZXZpb3VzIHNldHVwUHJvamVjdCBhbmQgc2V0dXBUYXNrIGhhdmUgbWVyZ2VkIGR1ZSB0byBlc2xpbnQgc2hvdXRpbmcgYXQgbWVcbi8vIGZvciBkZXBlbmRlbmN5IGN5Y2xlIGVycm9ycy4gSSBoYXZlIG1lcmdlZCB0aGVtIHRvZ2V0aGVyIGludG8gdGhpcyBzZXR1cFxuLy8gZmlsZS4gSWRlYWxseSBJIHdvdWxkIGZpbmQgYW5vdGhlciB3YXkgdG8gc3BpdCB0aGlzIG1vZHVsZSBpbnRvIG1vcmUgcGllY2VzLFxuLy8gdGhpcyB3b3VsZCBhbGwgaGF2ZSBiZWVuIGVhc2llciwgaWYgSSBoYWQgdXNlZCBlc2xpbnQgZnJvbSBzdGFydCwgc28gd29yayB0b1xuLy8gYmUgZG9uZSBoZXJlLCBpZiBtb3JlIGNvZGUgaXMgdG8gYmUgaW5jbHVkZWQsIGVzcGVjaWFsbHkgY29kZSB0aGF0IGlzIHJlbGF0ZWRcbi8vIHRvIGFueSBraW5kIG9mIHNldHVwLlxuIiwiZnVuY3Rpb24gc3RvcmFnZUF2YWlsYWJsZSh0eXBlKSB7XG4gIGxldCBzdG9yYWdlO1xuICB0cnkge1xuICAgIHN0b3JhZ2UgPSB3aW5kb3dbdHlwZV07XG4gICAgY29uc3QgeCA9ICdfX3N0b3JhZ2VfdGVzdF9fJztcbiAgICBzdG9yYWdlLnNldEl0ZW0oeCwgeCk7XG4gICAgc3RvcmFnZS5yZW1vdmVJdGVtKHgpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGUgaW5zdGFuY2VvZiBET01FeGNlcHRpb24gJiYgKFxuICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgIGUuY29kZSA9PT0gMjJcbiAgICAgICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgICAgIHx8IGUuY29kZSA9PT0gMTAxNFxuICAgICAgICAgICAgLy8gdGVzdCBuYW1lIGZpZWxkIHRvbywgYmVjYXVzZSBjb2RlIG1pZ2h0IG5vdCBiZSBwcmVzZW50XG4gICAgICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAgICAgICB8fCBlLm5hbWUgPT09ICdRdW90YUV4Y2VlZGVkRXJyb3InXG4gICAgICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgICAgICB8fCBlLm5hbWUgPT09ICdOU19FUlJPUl9ET01fUVVPVEFfUkVBQ0hFRCcpXG4gICAgICAgICAgICAvLyBhY2tub3dsZWRnZSBRdW90YUV4Y2VlZGVkRXJyb3Igb25seSBpZiB0aGVyZSdzIHNvbWV0aGluZyBhbHJlYWR5IHN0b3JlZFxuICAgICAgICAgICAgJiYgKHN0b3JhZ2UgJiYgc3RvcmFnZS5sZW5ndGggIT09IDApO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBwcm9qZWN0cyA9IHtcbiAgSE9NRToge1xuICAgIHRhc2tzOiB7XG4gICAgfSxcbiAgICBpZDogJ1ByMCcsXG4gIH0sXG59O1xuXG5pZiAoc3RvcmFnZUF2YWlsYWJsZSkge1xuICBsZXQgcmV0cmlldmVkT2JqZWN0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJyk7XG4gIGlmIChyZXRyaWV2ZWRPYmplY3QgPT09IG51bGwpIHtcbiAgICByZXRyaWV2ZWRPYmplY3QgPSBKU09OLnN0cmluZ2lmeSh7fSk7XG4gIH1cbiAgcmV0cmlldmVkT2JqZWN0ID0gSlNPTi5wYXJzZShyZXRyaWV2ZWRPYmplY3QpO1xuICAvLyBmb3IgKGNvbnN0IGVtIG9mIE9iamVjdC5rZXlzKHJldHJpZXZlZE9iamVjdCkpIHtcbiAgLy8gICBwcm9qZWN0c1tlbV0gPSByZXRyaWV2ZWRPYmplY3RbZW1dO1xuICAvLyB9XG4gIE9iamVjdC5rZXlzKHJldHJpZXZlZE9iamVjdCkuZm9yRWFjaCgoZW0pID0+IHtcbiAgICBwcm9qZWN0c1tlbV0gPSByZXRyaWV2ZWRPYmplY3RbZW1dO1xuICB9KTtcbiAgLy8gcHJvamVjdHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKTtcbn1cblxuZXhwb3J0IGNvbnN0IHRvZG8gPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgaWQpID0+ICh7XG4gIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGlkLFxufSk7XG5cbmV4cG9ydCBjb25zdCBwcm9qZWN0RmFjdG9yeSA9ICh0aXRsZS8qICwgZHVlRGF0ZSAqLywgaWQpID0+ICh7XG4gIHRpdGxlLyogLCBkdWVlRGF0ZSAqLywgaWQsXG59KTtcbiIsImltcG9ydCB7IHByb2plY3RzIH0gZnJvbSAnLi90b2RvJztcbmltcG9ydCB7IGV4cGlyZUNoZWNrIH0gZnJvbSAnLi9kYXRlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrRHVlRGF0ZSgpIHtcbiAgY29uc3QgY3VycmVudFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0ZWQnKS50ZXh0Q29udGVudDtcbiAgT2JqZWN0LmtleXMocHJvamVjdHNbY3VycmVudFByb2plY3RdLnRhc2tzKS5mb3JFYWNoKCh0YXNrTmFtZSkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3Byb2plY3RzW2N1cnJlbnRQcm9qZWN0XVxuICAgICAgLnRhc2tzW3Rhc2tOYW1lXS5pZH1gKTtcbiAgICBpZiAoZXhwaXJlQ2hlY2socHJvamVjdHNbY3VycmVudFByb2plY3RdLnRhc2tzW3Rhc2tOYW1lXSkpIHtcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdleHBpcmVkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRpdi5jbGFzc0xpc3QucmVtb3ZlKCdleHBpcmVkJyk7XG4gICAgfVxuICB9KTtcblxuICAvKlxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gICAgaWYgKHByb2pfZXhwaXJlQ2hlY2soKSkge1xuICAgICAgICBjb250ZW50LnN0eWxlLmJvcmRlclRvcCA9IFwiMXZoIHJlZCBzb2xpZFwiO1xuICAgICAgICBjb250ZW50LnN0eWxlLmJvcmRlckxlZnQgPSBcIjF2aCByZWQgc29saWRcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb250ZW50LnN0eWxlLmJvcmRlciA9IFwibm9uZVwiO1xuICAgIH0gKi9cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRpdGxlKHRhc2tJRCkge1xuICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RlZCcpLnRleHRDb250ZW50O1xuICBsZXQgdGl0bGU7XG5cbiAgT2JqZWN0LmtleXMocHJvamVjdHNbY3VycmVudFByb2plY3RdLnRhc2tzKS5mb3JFYWNoKCh0YXNrTmFtZSkgPT4ge1xuICAgIGlmIChwcm9qZWN0c1tjdXJyZW50UHJvamVjdF0udGFza3NbdGFza05hbWVdLmlkID09PSB0YXNrSUQpIHtcbiAgICAgIHRpdGxlID0gcHJvamVjdHNbY3VycmVudFByb2plY3RdLnRhc2tzW3Rhc2tOYW1lXS50aXRsZTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gdGl0bGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVUYXNrKHByb2plY3QsIHRhc2spIHtcbiAgZGVsZXRlIHByb2plY3RzW3Byb2plY3RdLnRhc2tzW3Rhc2sudGl0bGVdO1xuICAvLyB3ZSBhcmUgYWN0dWFsbHkgZGVsZXRpbmcsIG5vdCBqdXN0IGVyYXNpbmcgZnJvbSBzY3JlZW4hISFcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dGb3JtQW5kQ292ZXIoKSB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza0Zvcm0nKTtcbiAgY29uc3QgY292ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY292ZXInKTtcbiAgY292ZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIGZvcm0uc3R5bGUuZGlzcGxheSA9ICdmbGV4Jztcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0ICcuL2V2ZW50TGlzdGVuZXJzJztcbmltcG9ydCAnLi9kYXRlJztcbmltcG9ydCAnLi9tb2JpbGUnO1xuaW1wb3J0IHsgbG9hZEZyb21TdG9yYWdlIH0gZnJvbSAnLi9zZXR1cCc7XG5cbmxvYWRGcm9tU3RvcmFnZSgpO1xuLypcbiAgICBUT0RPOlxuICAgIC0gQ29uZmlndXJlIGRhdGVzIHByb3Blcmx5XG4gICAgICAgIFR3byB0eXBlcyBvZiB0YXNrczpcbiAgICAgICAgICAgIDEuIFNvbWV0aGluZyB0aGF0IG5lZWRzIHRvIGJlIGRvbmUgb24gYSBzcGVjaWZpYyBkYXkuIEl0IGNhbiBoYXZlIGFcbiAgICAgICAgICAgICAgICBkdWVEYXRlL2R1ZUhvdXIsIGJ1dCBpdCdzIG9wdGlvbmFsLiBJdCBvbmx5IHNob3dzIG9uIG9uZSBkYXlcbiAgICAgICAgICAgIDIuIFNvbWV0aGluZyB0aGF0IG5lZWRzIHRvIGJlIGRvbmUgdGlsbCBhIHNwZWNpZmllZCBkdWVEYXRlLiBTbyBpdFxuICAgICAgICAgICAgICAgIHNob3dzIGV2ZXJ5IGRheSB1bnRpbCB0aGUgZHVlRGF0ZS4gRXhwaXJlZCBzZWN0aW9uIG1pZ2h0IGJlXG4gICAgICAgICAgICAgICAgb2YgdXNlLlxuXG4gICAgICAgICAgICBJZGVhOlxuICAgICAgICAgICAgQWx3YXlzIHNob3cgYWxsIHRoYXQgY2FuIGJlIHNob3duLiBJZiBpdCBoYXBwZW5zIHRoYXQgb25lIG9mIHRoZW1cbiAgICAgICAgICAgIGV4cGlyZWQgc2ltcGx5IG5lZG90ZSBzbyB1c2luZyByZWQgYm9yZGVyIG9yIChleHBpcmVkKSB0YWcuXG4gICAgICAgICAgICBJdCBjYW4gYmUgc2hvd24gaWYgaXRzIHN0YXJ0IGRheSBpcyB0b2RheSBvciBlYXJsaWVyLiAtLy8vLVxuXG4gICAgLSBBZGQgYSBmb3JtIGZvciB1c2VyIGlucHV0IC0vLy8tXG4gICAgLSBUYXNrIGNoYW5nZXM6XG4gICAgICAgICAgICAxKSBTdHlsZSBjaGFuZ2VzOiBSZWRvIHRhc2sgc3F1YXJlcyAtLy8vLSwgbWF5YmUgbm90XG4gICAgICAgICAgICAyKSBUYXNrIGRlc2NyaXB0aW9uL2VkaXQgc3lzdGVtIC0vLy8tXG4gICAgICAgICAgICAzKSBNYWtlIHByaW9yaXRlcyBtYXR0ZXIsIGJvcmRlciBjb2xvciAtLy8vLVxuICAgIC0gRklYIHJlbW92ZSBidXR0b24sIG5hbWVseSB3aGVuIHlvdSBkb24ndCBpbnB1dCBhbnl0aGluZyBpbiB0aGUgZm9ybVxuICAgICAgICBtdWx0aXBsZSB0YXNrcyBhcmUgbWFkZSBldmVudCB0aG91Z2ggdGhlcmUgaXMgb25seSBvbmUgc2F2ZWQgaW4gdGhlXG4gICAgICAgIG9iamVjdC4gaXQgc2hvd3MgY29ycmVjdGx5IGFmdGVyIHJlZnJlc2ggLS8vLy1cbiAgICAtIEZJWDogcHJldmVudCBmcm9tIGNoYW5naW5nIHByb2plY3RzIHdoZW4gdGhlIGZvcm0gaXMgb3BlbmVkLFxuICAgICAgICBjb25zaWRlciBhZGRpbmcgYSBjb3ZlciBqdXN0IGxpa2UgaW4gdGhlIGxpYnJhcnkgcHJvamVjdCAtLy8vLVxuICAgIC0gRklYOiBwcm9qZWN0L3Nob3J0Y3V0IG5hbWUgbGV0dGVycyBnb2luZyB0byBuZXcgbGluZSwgaW5zdGVhZCBvbmx5IHdvcmRzXG4gICAgICAgIC0vLy8tIGJ1dCBjYW4ndCBmaXggbG9uZyBuYW1lcywgbWF5YmUgZmluZCBhIHdheSB0byBhZGQgXCItXCIgYXQgZW5kIHdoZW5cbiAgICAgICAgYnJlYWtpbmdcbiAgICAtIEFkZCBMb2NhbCBzdG9yYWdlIC0vLy8tXG4gICAgLSBBZGQgYSBjb25maXJtYXRpb24gZm9ybSB3aGVuIGF0dGVtcHRpbmcgdG8gZGVsZXRlIGEgcHJvamVjdCAtLy8vLVxuICAgIC0gQWRkIG1lZGlhIHF1ZXJpZXNcbiAgICAtIGNoYW5nZSBwcm9qZWN0SWQgYW5kIGlkIHRvIGNhbGN1bGF0ZSBpZCBiYXNlZCBvbiB3aGF0IGlzIHRoZSBiaWdnZXN0IGlkXG4gICAgICAgIHByZXNlbnQgb24gdGhlIGN1cnJlbnQgcHJvamVjdC9wcm9qZWN0cyBhbmQgdGhlbiBhZGQgMSwgdGhpcyB3YXlcbiAgICAgICAgaXQgaXMgbm90IGJhc2VkIG9uIGxlbmd0aCBhbmQgZHVwZSBidWdzIGRvIG5vdCBhcHBlYXIgLS8vLy1cbiAgICAtIEZpeCBkYXRlcyBmb3IgZWRpdGluZyEgLS8vLy1cbiAgICAtIERvIHNvbWV0aGluZyB3aXRoIHByb2plY3QgZGF0ZXMsIG1heWJlIGNvbnRlbnQgYm9yZGVyIHRvIHNpZ25pZnkgdGhlIGxhdGVcbiAgICAgICAgcHJvamVjdCAtLy8vLVxuICAgIC0gTWFrZSBhIHJlZnJlc2ggZnVuY3Rpb24sIHRoYXQgcmVsb2FkcywgbWF5YmUganVzdCBjaGFuZ2VQcm9qZWN0IHNvIHlvdVxuICAgICAgICBkb24ndCBoYXZlIHRvIGxvY2F0aW9uLnJlbG9hZCgpXG4gICAgLSBUZXh0QXJlYSBleHBhbmRpbmcgRDogLS8vLy1cbiAgICAtIGNvbnNpZGVyIG1vcmUgY29scyBhbmQgcm93IGZvciBUZXh0QXJlYSAtLy8vLVxuICAgIC0gUmV0aGluayB0aGUgbmVlZCBmb3IgZHVlRGF0ZSBpbiBwcm9qZWN0LCBJIHRoaW5rIG5vdCBuZWVkZWQhISAtLy8vLVxuICAgIC0gcHJldmVudCB0aXRsZSBuYW1lIGR1cGxpY2F0aW9uIG9uIGFkZGluZyB0YXNrLCB0aGUgZm9ybSBnb2VzIGF3YXkgZm9yIHNvbWVcbiAgICAgICAgcmVhc29uIC0vLy8tXG4gICAgLSBnaG9zdCB0YXNrIGFwcGVhcmluZzogYnVnIC0vLy8tXG4gICAgLSBtYWtlIHJlZCBidXR0b24gcmVjb3ZlciB0aGUgdGFzaywgeW91IGhhdmUgYWxsIHRoZSBkYXRhIG5lZWRlZCBpbiB0aGUgZm9ybVxuICAgICAgICAsIGluc3RlYWQgcmV3b3JrZWQgdG8gaW5jbHVkZSBvbmx5IGVkaXQgYnV0dG9uIC0vLy8tXG4gICAgLSBhZGQga2V5YmluZHMsIGVzcGVjaWFsbHkgZW50ZXIgaW5zdGVhZCBvZiBtb3VzZSBjbGljayAtLy8vLVxuICAgIC0gQ0xFQU4gQ09ERSEhISEhIHlvdSBrbm93IGN1cnJlbnRQcm9qZWN0IHJlcGVhdCBhbGwgdGhlIHRpbWUgYW5kIG90aGVyIGphenpcbiAgICAtIGV4cGVyaW1lbnQgd2l0aCB3b3JraW5nX3Rhc2ssIHRyeSB0byByZW1vdmUgLS8vLy1cbiAgICAtIHJld29yayBtb2R1bGVzLCBtYXliZSBubyBuZWVkIHRvIGdlbmVyYWxpemUgZXZlcnl0aGluZywgZXhwZXJpbWVudFxuICAgIC0gY2xlYW5lciBjc3MsIG1vcmUgY29tbWVudHMsIGNvbnNpZGVyIGFuaW1hdGlvbnMvdHJhbnNmb3JtYXRpb25zIGZvclxuICAgICAgICBjb25zaWRlciByZW1ha2luZyBjc3MgZ3JvdW5kIHVwLCBtYWtlIGl0IHdvcmsgb24gbW9iaWxlIGZpcnN0XG4gICAgLSBkZWxldGUgdGhlIHRhc2sgb25seSBhZnRlciB0aGUgZWRpdCBmb3JtIGlzIHN1Ym1pdHRlZCwgcG90ZW50aWFsbHkgdXNlXG4gICAgYXN5bmMvd2FpdCBmdW5jdGlvblxuICAgIC0gcmV3b3JrIG1vYmlsZSBkZXNpZ24sIHBlcmhhcHMgYWRkVGFzayBvbiB0b3AgYW5kIGNhbGFuZGVyIG9uIGJvdHRvbSxcbiAgICBtaWdodCBmZWVsIG1vcmUgbmF0dXJhbCAtLy8vLVxuXG4gICAgUG90ZW50aWFsIGJ1Z3M6XG4gICAgICAgIFNtYWxsIGJsYW5rIHJlY3RhbmdsZSBhcHBlYXJpbmcgc29tZXRpbWVzIHdoZW4gcmVzaXppbmcuIFJlZnJlc2ggZml4ZXMuXG4qL1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9