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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  --neutral: #f5f5f5;\n  --violet: white;\n  --stone: #6e6279;\n  --zinc: #3f3f46;\n  --hover: rgb(69, 31, 83);\n}\n\nbody,\nhtml {\n  height: 100%;\n  width: 100%;\n  overflow-y: auto;\n}\n\nbody {\n  display: flex;\n  position: fixed;\n}\n\n#sidebar {\n  flex: 1;\n  background-color: var(--zinc);\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  width: 100%;\n}\n\n#sidebar > div {\n  font-size: 6vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.home {\n  flex: 1;\n  border-bottom: 5px black solid;\n  background-color: var(--stone);\n  user-select: none;\n}\n\n#projects {\n  flex: 7;\n}\n\n.home:hover {\n  background-color: var(--hover);\n  cursor: pointer;\n}\n\n#content {\n  flex: 3;\n  background-color: grey;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: column-reverse;\n  height: 100vh;\n  width: 100%;\n}\n\n.expand {\n  display: flex;\n  flex-direction: column;\n}\n\n.expand > div:first-child,\n#addProject {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.expand > * {\n  width: 100%;\n}\n\n#addProject {\n  border-top: 3px solid black;\n  background-color: var(--stone);\n  user-select: none;\n}\n\n#addProject:hover {\n  cursor: pointer;\n  background-color: var(--hover);\n}\n\n.expand > div:first-child {\n  border-bottom: 3px solid black;\n}\n\n.expand .shortcut {\n  background-color: var(--stone);\n  padding: 5%;\n  border-bottom: 3px solid black;\n  word-break: break-word;\n  user-select: none;\n  cursor: pointer;\n  display: flex;\n  justify-content: space-between;\n}\n\n.expand .shortcuts {\n  overflow-y: auto;\n  max-height: 70vh;\n}\n\n.shortcut:hover {\n  background-color: var(--hover);\n  cursor: pointer;\n}\n\n.expand > div {\n  flex: 5;\n  text-align: center;\n}\n\n#tasks {\n  flex: 1;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(35vh, 1fr));\n  grid-gap: 2vh;\n  overflow-y: auto;\n  width: 100%;\n  padding: 3%;\n}\n\n#tasks > div {\n  height: 35vh;\n  background: rgb(0, 147, 223);\n  background: radial-gradient(\n    circle,\n    rgba(0, 147, 223, 1) 0%,\n    rgba(211, 239, 242, 1) 49%,\n    rgba(17, 16, 16, 1) 100%\n  );\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  border-radius: 10%;\n}\n\n#tasks > div > div {\n  word-break: break-word;\n  font-size: 3vh;\n}\n\n.Must {\n  background: rgb(232, 5, 5);\n  background: radial-gradient(\n    circle,\n    rgba(232, 5, 5, 1) 0%,\n    rgba(213, 144, 144, 1) 49%,\n    rgba(17, 16, 16, 1) 100%\n  ) !important;\n}\n\n.Necessary {\n  background: rgb(232, 107, 5);\n  background: radial-gradient(\n    circle,\n    rgba(232, 107, 5, 1) 0%,\n    rgba(235, 200, 163, 1) 49%,\n    rgba(17, 16, 16, 1) 100%\n  ) !important;\n}\n\n.Maybe {\n  background: rgb(193, 232, 5);\n  background: radial-gradient(\n    circle,\n    rgba(193, 232, 5, 1) 0%,\n    rgba(224, 235, 163, 1) 49%,\n    rgba(17, 16, 16, 1) 100%\n  ) !important;\n}\n\n#content > *:not(#tasks) {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n\n.header {\n  font-size: 40px;\n}\n\n.header .RPB {\n  background-color: red;\n  position: absolute;\n  height: max(55px, 7vh);\n  width: max(55px, 7vh);\n  font-size: max(40px, 3rem);\n  right: 0;\n  top: 0;\n  color: rgb(85, 3, 19);\n}\n\n#addTask {\n  display: flex;\n  align-items: center;\n  font-size: max(40px, 3rem);\n  color: white;\n  background-color: black;\n  user-select: none;\n  height: max(55px, 7vh);\n}\n\n#addTask:hover {\n  opacity: 0.5;\n  cursor: pointer;\n}\n\n#addTask:active {\n  opacity: 0.2;\n}\n\n.selected {\n  border-right: 10px groove var(--hover);\n}\n\n#date {\n  width: 40vh !important;\n  font-size: 5vh;\n  border: none;\n  background: grey;\n}\n\n.calLeft {\n  margin-right: 2vh;\n}\n\n.calRight {\n  margin-left: 2vh;\n}\n\n.navigatecal {\n  font-size: 8vh;\n  cursor: pointer;\n  user-select: none;\n}\n\n#taskForm {\n  width: 65vh;\n  height: 65vh;\n  left: calc(50% - 10vh);\n  top: calc(50% - 30vh);\n  padding-left: 5%;\n  padding-right: 5%;\n  font-size: 3vh;\n}\n\n#projectForm {\n  width: 55vh;\n  height: 25vh;\n  left: calc(50% - 10vh);\n  top: calc(50% - 30vh);\n  padding: 0 2% 0 2%;\n  font-size: 3vh;\n}\n\n#confirmationForm {\n  width: 50vh;\n  height: 35vh;\n  left: calc(50% - 10vh);\n  top: calc(50% - 30vh);\n  padding: 0 3% 0 3%;\n  font-size: 3vh;\n}\n\n#projectForm,\n#taskForm,\n#confirmationForm {\n  position: absolute;\n  z-index: 2;\n  background-color: var(--stone);\n  display: none;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: flex-start;\n  border: 5px var(--hover) solid;\n}\n\n.cover {\n  position: fixed;\n  top: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.6);\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  display: none;\n}\n\n#taskForm div,\n#projectForm div {\n  display: flex;\n}\n\n#taskForm label,\n#projectForm label {\n  flex: 1;\n  min-width: 20vh;\n  font-size: 3vh;\n}\n\n#taskForm input,\n#taskForm select {\n  flex: 6;\n  min-width: 30vh;\n}\n\n#description,\n#taskForm input,\n#priority,\n#proj_title,\n#proj_dueDate {\n  font-size: 2vh;\n  padding: 1%;\n}\n\n#description {\n  height: 20vh;\n  max-width: 30vh;\n  resize: none;\n}\n\n.redBtn {\n  background-color: red;\n  margin-right: 25%;\n}\n\n.greenBtn {\n  background-color: rgb(47, 255, 47);\n}\n\n.redBtn,\n.greenBtn {\n  font-size: 3vh;\n  padding: 10%;\n  width: 15vh;\n  height: 0.5vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.fbtn {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n\n.expired {\n  border: 5px solid red;\n}\n\n.task_desc {\n  overflow-y: auto;\n  flex: 6;\n  font-size: 1.5rem;\n}\n\n.task_dueDate {\n  flex: 1;\n}\n\n.task_title,\n.task_desc,\n.task_dueDate {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.212);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n}\n\n.task_title {\n  flex: 1;\n  padding: 0 6%;\n}\n\n.taskButtons > button {\n  font-size: 3vh;\n  color: white;\n  background-color: black;\n  opacity: 0.5;\n}\n\n.mobile {\n  display: none;\n}\n\n.notransition {\n  -webkit-transition: none !important;\n  -moz-transition: none !important;\n  -o-transition: none !important;\n  transition: none !important;\n}\n\n@media only screen and (max-width: 1100px) {\n  body,\n  html {\n    height: 100%;\n  }\n\n  .mobile {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 55px;\n    height: 55px;\n    color: black;\n    overflow: hidden;\n    background-color: black;\n    border-right: 1px solid white;\n  }\n\n  .mobile:hover {\n    cursor: pointer;\n  }\n\n  #sidebar {\n    position: absolute;\n    z-index: 1;\n    left: 0;\n    max-height: 100vh;\n    width: 0px;\n    overflow: hidden;\n    transition: width 300ms ease-in-out;\n  }\n\n  #sidebar.visible {\n    width: min(75%, 300px);\n  }\n\n  #projectForm,\n  #taskForm,\n  #confirmationForm {\n    position: absolute;\n    margin-left: auto;\n    margin-right: auto;\n    left: 0;\n    right: 0;\n    text-align: center;\n    max-width: 100%;\n    width: 400px;\n    height: 200px;\n  }\n\n  #taskForm,\n  #projectForm {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    min-height: 100%;\n    height: min-content;\n    text-align: center;\n    align-items: center;\n  }\n\n  #projectForm label {\n    max-height: 50px;\n  }\n\n  #projectForm > div {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n\n  #projectForm > div > * {\n    font-size: 2rem;\n    width: 90%;\n  }\n\n  #taskForm label {\n    font-size: 1.5rem;\n  }\n\n  #taskForm #title,\n  #taskForm #dueDate {\n    font-size: 1rem;\n    height: 50px;\n    width: 90%;\n  }\n\n  #description {\n    width: 90%;\n    max-width: none;\n    font-size: 1rem;\n    min-height: 200px;\n  }\n\n  #priority {\n    font-size: 1rem;\n    width: 90%;\n    justify-content: center;\n  }\n\n  #taskForm > div {\n    position: relative;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin-bottom: 20px;\n  }\n\n  .fbtn {\n    display: flex;\n    flex-direction: row !important;\n  }\n\n  .fbtn > * {\n    font-size: 1.7rem;\n  }\n\n  .RPB {\n    font-size: 40px;\n    z-index: 1;\n  }\n\n  #date {\n    max-width: 250px;\n    font-size: 2rem;\n  }\n\n  #addTask {\n    margin: 0 100px;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  --neutral: #f5f5f5;\n  --violet: white;\n  --stone: #6e6279;\n  --zinc: #3f3f46;\n  --hover: rgb(69, 31, 83);\n}\n\nbody,\nhtml {\n  height: 100%;\n  width: 100%;\n  overflow-y: auto;\n}\n\nbody {\n  display: flex;\n  position: fixed;\n}\n\n#sidebar {\n  flex: 1;\n  background-color: var(--zinc);\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  width: 100%;\n}\n\n#sidebar > div {\n  font-size: 6vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.home {\n  flex: 1;\n  border-bottom: 5px black solid;\n  background-color: var(--stone);\n  user-select: none;\n}\n\n#projects {\n  flex: 7;\n}\n\n.home:hover {\n  background-color: var(--hover);\n  cursor: pointer;\n}\n\n#content {\n  flex: 3;\n  background-color: grey;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: column-reverse;\n  height: 100vh;\n  width: 100%;\n}\n\n.expand {\n  display: flex;\n  flex-direction: column;\n}\n\n.expand > div:first-child,\n#addProject {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.expand > * {\n  width: 100%;\n}\n\n#addProject {\n  border-top: 3px solid black;\n  background-color: var(--stone);\n  user-select: none;\n}\n\n#addProject:hover {\n  cursor: pointer;\n  background-color: var(--hover);\n}\n\n.expand > div:first-child {\n  border-bottom: 3px solid black;\n}\n\n.expand .shortcut {\n  background-color: var(--stone);\n  padding: 5%;\n  border-bottom: 3px solid black;\n  word-break: break-word;\n  user-select: none;\n  cursor: pointer;\n  display: flex;\n  justify-content: space-between;\n}\n\n.expand .shortcuts {\n  overflow-y: auto;\n  max-height: 70vh;\n}\n\n.shortcut:hover {\n  background-color: var(--hover);\n  cursor: pointer;\n}\n\n.expand > div {\n  flex: 5;\n  text-align: center;\n}\n\n#tasks {\n  flex: 1;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(35vh, 1fr));\n  grid-gap: 2vh;\n  overflow-y: auto;\n  width: 100%;\n  padding: 3%;\n}\n\n#tasks > div {\n  height: 35vh;\n  background: rgb(0, 147, 223);\n  background: radial-gradient(\n    circle,\n    rgba(0, 147, 223, 1) 0%,\n    rgba(211, 239, 242, 1) 49%,\n    rgba(17, 16, 16, 1) 100%\n  );\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  border-radius: 10%;\n}\n\n#tasks > div > div {\n  word-break: break-word;\n  font-size: 3vh;\n}\n\n.Must {\n  background: rgb(232, 5, 5);\n  background: radial-gradient(\n    circle,\n    rgba(232, 5, 5, 1) 0%,\n    rgba(213, 144, 144, 1) 49%,\n    rgba(17, 16, 16, 1) 100%\n  ) !important;\n}\n\n.Necessary {\n  background: rgb(232, 107, 5);\n  background: radial-gradient(\n    circle,\n    rgba(232, 107, 5, 1) 0%,\n    rgba(235, 200, 163, 1) 49%,\n    rgba(17, 16, 16, 1) 100%\n  ) !important;\n}\n\n.Maybe {\n  background: rgb(193, 232, 5);\n  background: radial-gradient(\n    circle,\n    rgba(193, 232, 5, 1) 0%,\n    rgba(224, 235, 163, 1) 49%,\n    rgba(17, 16, 16, 1) 100%\n  ) !important;\n}\n\n#content > *:not(#tasks) {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n\n.header {\n  font-size: 40px;\n}\n\n.header .RPB {\n  background-color: red;\n  position: absolute;\n  height: max(55px, 7vh);\n  width: max(55px, 7vh);\n  font-size: max(40px, 3rem);\n  right: 0;\n  top: 0;\n  color: rgb(85, 3, 19);\n}\n\n#addTask {\n  display: flex;\n  align-items: center;\n  font-size: max(40px, 3rem);\n  color: white;\n  background-color: black;\n  user-select: none;\n  height: max(55px, 7vh);\n}\n\n#addTask:hover {\n  opacity: 0.5;\n  cursor: pointer;\n}\n\n#addTask:active {\n  opacity: 0.2;\n}\n\n.selected {\n  border-right: 10px groove var(--hover);\n}\n\n#date {\n  width: 40vh !important;\n  font-size: 5vh;\n  border: none;\n  background: grey;\n}\n\n.calLeft {\n  margin-right: 2vh;\n}\n\n.calRight {\n  margin-left: 2vh;\n}\n\n.navigatecal {\n  font-size: 8vh;\n  cursor: pointer;\n  user-select: none;\n}\n\n#taskForm {\n  width: 65vh;\n  height: 65vh;\n  left: calc(50% - 10vh);\n  top: calc(50% - 30vh);\n  padding-left: 5%;\n  padding-right: 5%;\n  font-size: 3vh;\n}\n\n#projectForm {\n  width: 55vh;\n  height: 25vh;\n  left: calc(50% - 10vh);\n  top: calc(50% - 30vh);\n  padding: 0 2% 0 2%;\n  font-size: 3vh;\n}\n\n#confirmationForm {\n  width: 50vh;\n  height: 35vh;\n  left: calc(50% - 10vh);\n  top: calc(50% - 30vh);\n  padding: 0 3% 0 3%;\n  font-size: 3vh;\n}\n\n#projectForm,\n#taskForm,\n#confirmationForm {\n  position: absolute;\n  z-index: 2;\n  background-color: var(--stone);\n  display: none;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: flex-start;\n  border: 5px var(--hover) solid;\n}\n\n.cover {\n  position: fixed;\n  top: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.6);\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  display: none;\n}\n\n#taskForm div,\n#projectForm div {\n  display: flex;\n}\n\n#taskForm label,\n#projectForm label {\n  flex: 1;\n  min-width: 20vh;\n  font-size: 3vh;\n}\n\n#taskForm input,\n#taskForm select {\n  flex: 6;\n  min-width: 30vh;\n}\n\n#description,\n#taskForm input,\n#priority,\n#proj_title,\n#proj_dueDate {\n  font-size: 2vh;\n  padding: 1%;\n}\n\n#description {\n  height: 20vh;\n  max-width: 30vh;\n  resize: none;\n}\n\n.redBtn {\n  background-color: red;\n  margin-right: 25%;\n}\n\n.greenBtn {\n  background-color: rgb(47, 255, 47);\n}\n\n.redBtn,\n.greenBtn {\n  font-size: 3vh;\n  padding: 10%;\n  width: 15vh;\n  height: 0.5vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.fbtn {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n\n.expired {\n  border: 5px solid red;\n}\n\n.task_desc {\n  overflow-y: auto;\n  flex: 6;\n  font-size: 1.5rem;\n}\n\n.task_dueDate {\n  flex: 1;\n}\n\n.task_title,\n.task_desc,\n.task_dueDate {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.212);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n}\n\n.task_title {\n  flex: 1;\n  padding: 0 6%;\n}\n\n.taskButtons > button {\n  font-size: 3vh;\n  color: white;\n  background-color: black;\n  opacity: 0.5;\n}\n\n.mobile {\n  display: none;\n}\n\n.notransition {\n  -webkit-transition: none !important;\n  -moz-transition: none !important;\n  -o-transition: none !important;\n  transition: none !important;\n}\n\n@media only screen and (max-width: 1100px) {\n  body,\n  html {\n    height: 100%;\n  }\n\n  .mobile {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 55px;\n    height: 55px;\n    color: black;\n    overflow: hidden;\n    background-color: black;\n    border-right: 1px solid white;\n  }\n\n  .mobile:hover {\n    cursor: pointer;\n  }\n\n  #sidebar {\n    position: absolute;\n    z-index: 1;\n    left: 0;\n    max-height: 100vh;\n    width: 0px;\n    overflow: hidden;\n    transition: width 300ms ease-in-out;\n  }\n\n  #sidebar.visible {\n    width: min(75%, 300px);\n  }\n\n  #projectForm,\n  #taskForm,\n  #confirmationForm {\n    position: absolute;\n    margin-left: auto;\n    margin-right: auto;\n    left: 0;\n    right: 0;\n    text-align: center;\n    max-width: 100%;\n    width: 400px;\n    height: 200px;\n  }\n\n  #taskForm,\n  #projectForm {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    min-height: 100%;\n    height: min-content;\n    text-align: center;\n    align-items: center;\n  }\n\n  #projectForm label {\n    max-height: 50px;\n  }\n\n  #projectForm > div {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n\n  #projectForm > div > * {\n    font-size: 2rem;\n    width: 90%;\n  }\n\n  #taskForm label {\n    font-size: 1.5rem;\n  }\n\n  #taskForm #title,\n  #taskForm #dueDate {\n    font-size: 1rem;\n    height: 50px;\n    width: 90%;\n  }\n\n  #description {\n    width: 90%;\n    max-width: none;\n    font-size: 1rem;\n    min-height: 200px;\n  }\n\n  #priority {\n    font-size: 1rem;\n    width: 90%;\n    justify-content: center;\n  }\n\n  #taskForm > div {\n    position: relative;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin-bottom: 20px;\n  }\n\n  .fbtn {\n    display: flex;\n    flex-direction: row !important;\n  }\n\n  .fbtn > * {\n    font-size: 1.7rem;\n  }\n\n  .RPB {\n    font-size: 40px;\n    z-index: 1;\n  }\n\n  #date {\n    max-width: 250px;\n    font-size: 2rem;\n  }\n\n  #addTask {\n    margin: 0 100px;\n  }\n}\n"],"sourceRoot":""}]);
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

  if (month.length < 2) {
    month = `0${month}`;
  }
  if (day.length < 2) {
    day = `0${day}`;
  }

  return [year, month, day].join("-");
}

function getMonthFromString(mon) {
  return new Date(Date.parse(`${mon} 1, 2012`)).getMonth() + 1;
}

const calender = document.querySelector("#date");

const today = getDate();
calender.setAttribute("value", today);
calender.setAttribute("min", today);

// set default date values to today
const dueDate = document.getElementById("dueDate");
dueDate.value = getDate();
// const proj_dueDate = document.getElementById("proj_dueDate");
// proj_dueDate.value = getDate();
// ideally you would format to fit location, but what a pain D:
function formatDate(date) {
  const temp = date.split("-");
  return [temp[1], temp[2], temp[0]].join("-");
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

  const todayArr = format(document.getElementById("date").valueAsDate);
  // [day, month, year]
  const currentProject = document.querySelector(".selected").textContent;
  const arr = _todo__WEBPACK_IMPORTED_MODULE_0__.projects[currentProject].tasks[task.title].dueDate.split("-");
  if (
    +todayArr[0] > +arr[1] ||
    +todayArr[1] > +arr[0] ||
    +todayArr[2] > +arr[2]
  ) {
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
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility */ "./src/utility.js");
/* harmony import */ var _setup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setup */ "./src/setup.js");
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forms */ "./src/forms.js");




// it resets every time website refreshes so duplication bug occurs,
// and it's more efficient, (little bit lol

const addTaskBtn = document.querySelector("#addTask");
addTaskBtn.addEventListener("click", () => {
  (0,_utility__WEBPACK_IMPORTED_MODULE_0__.showFormAndCover)();
});

// thought it would easy to put all form related code to the submit btn listener
const gbutton = document.querySelector(".green");
gbutton.addEventListener("click", () => {
  (0,_forms__WEBPACK_IMPORTED_MODULE_2__.addTask)();
});

const form = document.querySelector("#taskForm");
form.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    (0,_forms__WEBPACK_IMPORTED_MODULE_2__.addTask)();
  }
});

const rbutton = document.querySelector(".red");
rbutton.addEventListener("click", () => {
  (0,_forms__WEBPACK_IMPORTED_MODULE_2__.resetForm)();
});

const addProjectBtn = document.querySelector("#addProject");
addProjectBtn.addEventListener("click", () => {
  const projForm = document.querySelector("#projectForm");
  projForm.style.display = "flex";
  const cover = document.querySelector(".cover");
  cover.style.display = "block";
});

const projGButton = document.querySelector(".proj_green");
projGButton.addEventListener("click", () => {
  (0,_forms__WEBPACK_IMPORTED_MODULE_2__.addProject)();
});

const projForm = document.querySelector("#projectForm");
projForm.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    (0,_forms__WEBPACK_IMPORTED_MODULE_2__.addProject)();
  }
});

const projRButton = document.querySelector(".proj_red");
projRButton.addEventListener("click", () => {
  (0,_forms__WEBPACK_IMPORTED_MODULE_2__.resetProjForm)();
});

const confGreen = document.querySelector(".conf_green");
confGreen.addEventListener("click", () => {
  (0,_setup__WEBPACK_IMPORTED_MODULE_1__.onClickingRPB)();
  (0,_forms__WEBPACK_IMPORTED_MODULE_2__.resetConfForm)();
});

const confRed = document.querySelector(".conf_red");
confRed.addEventListener("click", () => {
  (0,_forms__WEBPACK_IMPORTED_MODULE_2__.resetConfForm)();
});

// navigate calender, left and right arrow
const left = document.querySelector(".calLeft");
const right = document.querySelector(".calRight");
const input = document.querySelector("#date");
left.addEventListener("click", () => {
  input.stepDown();
  (0,_utility__WEBPACK_IMPORTED_MODULE_0__.checkDueDate)();
});
right.addEventListener("click", () => {
  input.stepUp();
  (0,_utility__WEBPACK_IMPORTED_MODULE_0__.checkDueDate)();
});
// date is picked manually from the calander, click doesn't work
input.addEventListener("change", () => {
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
  const form = document.querySelector("#taskForm");
  const cover = document.querySelector(".cover");
  form.reset();
  form.style.display = "none";
  cover.style.display = "none";

  // this is also default, present in date.js!
  const dueDate = document.getElementById("dueDate");
  dueDate.value = (0,_date__WEBPACK_IMPORTED_MODULE_3__.getDate)();
}

// couldn't get submit type button to work, so needed a function to get values
// from the form, this is it
function getTask() {
  const title = document.getElementById("title").value;
  const currentProject = document.querySelector(".selected").textContent;
  if (!_todo__WEBPACK_IMPORTED_MODULE_2__.projects[currentProject].tasks[title]) {
    const description = document.getElementById("description").value;
    let dueDate = document.getElementById("dueDate").value;
    const priority = document.getElementById("priority").value;

    if (!dueDate) {
      dueDate = (0,_date__WEBPACK_IMPORTED_MODULE_3__.getDate)();
    }

    let id = 0;
    // easiest way to prevent duplication bug => 2 tasks 1 id
    Object.keys(_todo__WEBPACK_IMPORTED_MODULE_2__.projects[currentProject].tasks).forEach((taskName) => {
      id = Math.max(
        id,
        Number(
          _todo__WEBPACK_IMPORTED_MODULE_2__.projects[currentProject].tasks[taskName].id.replace("task", "")
        ) + 1
      );
    });

    const task = (0,_todo__WEBPACK_IMPORTED_MODULE_2__.todo)(
      title,
      description,
      (0,_date__WEBPACK_IMPORTED_MODULE_3__.formatDate)(dueDate),
      priority,
      `task${id.toString()}`
    );
    return task;
  }
  return 0;
}

const addTask = () => {
  // run only if not editing, we have 2 event listners on one button
  // so this forces the other one to work alone, which is what we want
  const currentProject = document.querySelector(".selected").textContent;
  // bugs occur if flag isn't present, since after I am using two
  // event listners for one button
  const task = getTask();

  if (task === 0) {
    // eslint-disable-next-line no-alert
    alert("Failure, task with the same title already exists");
  }
  if (task) {
    resetForm();
    // set default date, so MM-DD-YYYY is not shown on form?????
    const dueDate = document.getElementById("dueDate");
    dueDate.value = (0,_date__WEBPACK_IMPORTED_MODULE_3__.getDate)();

    // setup task
    _todo__WEBPACK_IMPORTED_MODULE_2__.projects[currentProject].tasks[task.title] = task;
    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.addTaskD)(task, currentProject);
    (0,_setup__WEBPACK_IMPORTED_MODULE_1__.setupTaskD)(task);

    const rbutton = document.querySelector(".red");
    rbutton.style.display = "flex";

    const gbutton = document.querySelector(".green");
    gbutton.style.backgroundColor = "rgb(47, 255, 47)";
    gbutton.textContent = "Add";

    // attempt at "refreshing" the height, because it sometimes forgets
    // it needs to be 100vh on mobile browsers >-.-<
    // const sidebar = document.querySelector('#sidebar');
    // sidebar.style.height = '100vh';

    // const content = document.querySelector('#content');
    // content.style.height = '100vh';

    // save to local when you add task or project
    localStorage.setItem("projects", JSON.stringify(_todo__WEBPACK_IMPORTED_MODULE_2__.projects));
  }
};

// similar problem as task id
// let projectID = Object.keys(projects).length;

// againt, needed a way to get values from the form
function getProject() {
  const title = document.getElementById("proj_title").value;
  if (!_todo__WEBPACK_IMPORTED_MODULE_2__.projects[title]) {
    // const dueDate = document.getElementById("proj_dueDate").value;

    let projectID = 0;
    // easiest way to prevent duplication bug => 2 projects 1 id
    Object.keys(_todo__WEBPACK_IMPORTED_MODULE_2__.projects).forEach((project) => {
      projectID = Math.max(
        projectID,
        Number(_todo__WEBPACK_IMPORTED_MODULE_2__.projects[project].id.replace("Pr", "")) + 1
      );
    });
    const proj = (0,_todo__WEBPACK_IMPORTED_MODULE_2__.projectFactory)(
      title,
      /* dueDate, */
      `Pr${projectID.toString()}`
    );
    return proj;
  }
  return 0;
}

function resetProjForm() {
  const form = document.querySelector("#projectForm");
  const cover = document.querySelector(".cover");
  document.getElementById("proj_title").value = "";
  // document.getElementById("proj_dueDate").value = "";
  form.style.display = "none";
  cover.style.display = "none";

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
    localStorage.setItem("projects", JSON.stringify(_todo__WEBPACK_IMPORTED_MODULE_2__.projects));
  }
};

function resetConfForm() {
  const confForm = document.querySelector("#confirmationForm");
  confForm.style.display = "none";
  const cover = document.querySelector(".cover");
  cover.style.display = "none";
}


/***/ }),

/***/ "./src/mobile.js":
/*!***********************!*\
  !*** ./src/mobile.js ***!
  \***********************/
/***/ (() => {

// menu button
const mobileBtn = document.querySelector(".mobile");
mobileBtn.addEventListener("click", () => {
  const sidebar = document.querySelector("#sidebar");
  sidebar.classList.add('visible');
  mobileBtn.style.display = "none";
});

// more dynamic menu
const sidebar = document.querySelector("#sidebar");
window.addEventListener("resize", () => {
  if (window.innerWidth > "1100") {
    sidebar.classList.add('visible');
    sidebar.classList.add('notransition');
    mobileBtn.style.display = "none";
    
  }
  if (window.innerWidth < "1100") {
    sidebar.classList.remove('visible');
    sidebar.classList.remove('notransition');
    mobileBtn.style.display = "flex";
  }
  // //if (sidebar.style.display != "flex") {
  //  mobileBtn.style.display = "none";
  // }
});

// when you click on content the menu disappears
const content = document.querySelector("#content");
content.addEventListener("click", () => {
  if (window.innerWidth < "1100") {
    sidebar.classList.remove('visible');
    mobileBtn.style.display = "flex";
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

  const title = document.createElement("div");
  title.textContent = workingTask.title;
  title.classList.add("task_title");
  taskNode.appendChild(title);

  const desc = document.createElement("div");
  desc.textContent = workingTask.description;
  desc.classList.add("task_desc");
  taskNode.appendChild(desc);

  const dueDate = document.createElement("div");
  dueDate.textContent = `Due Date: ${workingTask.dueDate}`;
  dueDate.classList.add("task_dueDate");
  taskNode.appendChild(dueDate);

  taskNode.classList.add(`${workingTask.priority}`);
};

const setupDeleteButton = (workingTask) => {
  const btn = document.createElement("button");
  btn.textContent = "X";

  const div = document.querySelector(`.${workingTask.id} .taskButtons`);
  div.appendChild(btn);

  // we need to obtain task object from the button itself
  // because if we use any variable it won't delete properly
  // this is done via matching btn class name which is equal to the id
  // of the task that we are seeking in a projects object
  btn.addEventListener("click", (e) => {
    const taskID = [...e.target.parentNode.parentNode.classList][0];
    const title = (0,_utility__WEBPACK_IMPORTED_MODULE_2__.getTitle)(taskID);
    const currentProject = document.querySelector(".selected").textContent;
    (0,_utility__WEBPACK_IMPORTED_MODULE_2__.deleteTask)(currentProject, _todo__WEBPACK_IMPORTED_MODULE_1__.projects[currentProject].tasks[title]);
    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.eraseTaskD)(taskID);
  });
};

function setupEditForm(title) {
  const currentProject = document.querySelector(".selected").textContent;
  // task = THE ONE BEING CLICKED
  const task = _todo__WEBPACK_IMPORTED_MODULE_1__.projects[currentProject].tasks[title];

  // fill the form correctly
  document.getElementById("title").value = task.title;
  document.getElementById("description").value = task.description;
  let arr = task.dueDate.split("-");
  arr = [arr[2], arr[0], arr[1]].join("-");
  document.getElementById("dueDate").value = arr;
  document.getElementById("priority").value = task.priority;

  // delete, and let the green button build it for you, no in this case
  // should have a special function
  (0,_dom__WEBPACK_IMPORTED_MODULE_0__.eraseTaskD)(_todo__WEBPACK_IMPORTED_MODULE_1__.projects[currentProject].tasks[title].id);
  delete _todo__WEBPACK_IMPORTED_MODULE_1__.projects[currentProject].tasks[title];

  localStorage.setItem("projects", JSON.stringify(_todo__WEBPACK_IMPORTED_MODULE_1__.projects));

  const rbutton = document.querySelector(".red");
  rbutton.style.display = "none";

  const gbutton = document.querySelector(".green");
  gbutton.style.backgroundColor = "yellow";
  gbutton.textContent = "Edit";
}

const setupEditButton = (workingTask) => {
  const btn = document.createElement("button");
  btn.textContent = "Edit";

  const div = document.createElement("div");
  div.classList.add("taskButtons");

  const taskNode = document.querySelector(`.${workingTask.id}`);
  taskNode.appendChild(div);
  div.appendChild(btn);

  btn.addEventListener("click", (e) => {
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
  const form = document.querySelector("#confirmationForm");
  form.style.display = "flex";
  const cover = document.querySelector(".cover");
  cover.style.display = "block";
}

// RPB - remove project button
function addRPB() {
  const header = document.querySelector(".header");
  if (header.lastChild.textContent !== "X") {
    const delBtn = document.createElement("button");
    delBtn.textContent = "X";
    delBtn.classList.add("RPB");
    delBtn.addEventListener("click", () => {
      showConfirmationForm();
    });
    header.appendChild(delBtn);
  }
}

function removeRPB() {
  const header = document.querySelector(".header");
  const rpb = document.querySelector(".RPB");
  if (rpb) {
    header.removeChild(rpb);
  }
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

  if (projectName !== "HOME") {
    addRPB();
  } else {
    removeRPB();
  }
};

function addProjectListener(id) {
  const project = document.getElementById(`${id}`);

  project.addEventListener("click", () => {
    const temp = document.querySelector(".selected");
    temp.classList.remove("selected");
    project.classList.add("selected");
    if (window.innerWidth < "1024") {
      const sidebar = document.querySelector("#sidebar");
      const mobileBtn = document.querySelector(".mobile");
      sidebar.classList.remove('visible');
      mobileBtn.style.display = "flex";
    }
    changeProjectD(project.textContent);
  });
}

function onClickingRPB() {
  // first check if you actually want to delete
  // get id, delete on content and then sidebar using id. return to home
  const projectName2 = document.querySelector(".selected").textContent;
  const projectID = _todo__WEBPACK_IMPORTED_MODULE_1__.projects[projectName2].id;
  delete _todo__WEBPACK_IMPORTED_MODULE_1__.projects[projectName2];
  const project = document.querySelector(`#${projectID}`);
  project.remove();

  const home = document.querySelector("#Pr0");
  home.classList.add("selected");
  changeProjectD("HOME");

  // save because you removed a project
  localStorage.setItem("projects", JSON.stringify(_todo__WEBPACK_IMPORTED_MODULE_1__.projects));
}

addProjectListener("Pr0");

// load all projects and tasks from the local storage
const loadFromStorage = () => {
  Object.keys(_todo__WEBPACK_IMPORTED_MODULE_1__.projects).forEach((project) => {
    if (project !== "HOME") {
      (0,_dom__WEBPACK_IMPORTED_MODULE_0__.addProjectD)(_todo__WEBPACK_IMPORTED_MODULE_1__.projects[project], _todo__WEBPACK_IMPORTED_MODULE_1__.projects[project].id);
      addProjectListener(_todo__WEBPACK_IMPORTED_MODULE_1__.projects[project].id);
    }
  });

  Object.keys(_todo__WEBPACK_IMPORTED_MODULE_1__.projects.HOME.tasks).forEach((task) => {
    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.addTaskD)(_todo__WEBPACK_IMPORTED_MODULE_1__.projects.HOME.tasks[task]);
    setupTaskD(_todo__WEBPACK_IMPORTED_MODULE_1__.projects.HOME.tasks[task], "HOME");
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
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === "QuotaExceededError" ||
        // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

const projects = {
  HOME: {
    tasks: {},
    id: "Pr0",
  },
};

if (storageAvailable) {
  let retrievedObject = localStorage.getItem("projects");
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
  title,
  description,
  dueDate,
  priority,
  id,
});

const projectFactory = (title /* , dueDate */, id) => ({
  title /* , dueeDate */,
  id,
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
  const currentProject = document.querySelector(".selected").textContent;
  Object.keys(_todo__WEBPACK_IMPORTED_MODULE_0__.projects[currentProject].tasks).forEach((taskName) => {
    const div = document.querySelector(
      `.${_todo__WEBPACK_IMPORTED_MODULE_0__.projects[currentProject].tasks[taskName].id}`
    );
    if ((0,_date__WEBPACK_IMPORTED_MODULE_1__.expireCheck)(_todo__WEBPACK_IMPORTED_MODULE_0__.projects[currentProject].tasks[taskName])) {
      div.classList.add("expired");
    } else {
      div.classList.remove("expired");
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
  const currentProject = document.querySelector(".selected").textContent;
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
  localStorage.setItem("projects", JSON.stringify(_todo__WEBPACK_IMPORTED_MODULE_0__.projects));
}

function showFormAndCover() {
  const form = document.querySelector("#taskForm");
  const cover = document.querySelector(".cover");
  cover.style.display = "block";
  form.style.display = "flex";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sT0FBTyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxPQUFPLFNBQVMsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxPQUFPLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxN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QUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kYXRlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2V2ZW50TGlzdGVuZXJzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9mb3Jtcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9iaWxlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zZXR1cC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdXRpbGl0eS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLS1uZXV0cmFsOiAjZjVmNWY1O1xcbiAgLS12aW9sZXQ6IHdoaXRlO1xcbiAgLS1zdG9uZTogIzZlNjI3OTtcXG4gIC0temluYzogIzNmM2Y0NjtcXG4gIC0taG92ZXI6IHJnYig2OSwgMzEsIDgzKTtcXG59XFxuXFxuYm9keSxcXG5odG1sIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbn1cXG5cXG4jc2lkZWJhciB7XFxuICBmbGV4OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0temluYyk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI3NpZGViYXIgPiBkaXYge1xcbiAgZm9udC1zaXplOiA2dmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaG9tZSB7XFxuICBmbGV4OiAxO1xcbiAgYm9yZGVyLWJvdHRvbTogNXB4IGJsYWNrIHNvbGlkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3RvbmUpO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbiNwcm9qZWN0cyB7XFxuICBmbGV4OiA3O1xcbn1cXG5cXG4uaG9tZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlcik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGZsZXg6IDM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5leHBhbmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5leHBhbmQgPiBkaXY6Zmlyc3QtY2hpbGQsXFxuI2FkZFByb2plY3Qge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5leHBhbmQgPiAqIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jYWRkUHJvamVjdCB7XFxuICBib3JkZXItdG9wOiAzcHggc29saWQgYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdG9uZSk7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuI2FkZFByb2plY3Q6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXIpO1xcbn1cXG5cXG4uZXhwYW5kID4gZGl2OmZpcnN0LWNoaWxkIHtcXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmV4cGFuZCAuc2hvcnRjdXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3RvbmUpO1xcbiAgcGFkZGluZzogNSU7XFxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgYmxhY2s7XFxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uZXhwYW5kIC5zaG9ydGN1dHMge1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIG1heC1oZWlnaHQ6IDcwdmg7XFxufVxcblxcbi5zaG9ydGN1dDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlcik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5leHBhbmQgPiBkaXYge1xcbiAgZmxleDogNTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI3Rhc2tzIHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzNXZoLCAxZnIpKTtcXG4gIGdyaWQtZ2FwOiAydmg7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAzJTtcXG59XFxuXFxuI3Rhc2tzID4gZGl2IHtcXG4gIGhlaWdodDogMzV2aDtcXG4gIGJhY2tncm91bmQ6IHJnYigwLCAxNDcsIDIyMyk7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoXFxuICAgIGNpcmNsZSxcXG4gICAgcmdiYSgwLCAxNDcsIDIyMywgMSkgMCUsXFxuICAgIHJnYmEoMjExLCAyMzksIDI0MiwgMSkgNDklLFxcbiAgICByZ2JhKDE3LCAxNiwgMTYsIDEpIDEwMCVcXG4gICk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcXG59XFxuXFxuI3Rhc2tzID4gZGl2ID4gZGl2IHtcXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XFxuICBmb250LXNpemU6IDN2aDtcXG59XFxuXFxuLk11c3Qge1xcbiAgYmFja2dyb3VuZDogcmdiKDIzMiwgNSwgNSk7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoXFxuICAgIGNpcmNsZSxcXG4gICAgcmdiYSgyMzIsIDUsIDUsIDEpIDAlLFxcbiAgICByZ2JhKDIxMywgMTQ0LCAxNDQsIDEpIDQ5JSxcXG4gICAgcmdiYSgxNywgMTYsIDE2LCAxKSAxMDAlXFxuICApICFpbXBvcnRhbnQ7XFxufVxcblxcbi5OZWNlc3Nhcnkge1xcbiAgYmFja2dyb3VuZDogcmdiKDIzMiwgMTA3LCA1KTtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChcXG4gICAgY2lyY2xlLFxcbiAgICByZ2JhKDIzMiwgMTA3LCA1LCAxKSAwJSxcXG4gICAgcmdiYSgyMzUsIDIwMCwgMTYzLCAxKSA0OSUsXFxuICAgIHJnYmEoMTcsIDE2LCAxNiwgMSkgMTAwJVxcbiAgKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uTWF5YmUge1xcbiAgYmFja2dyb3VuZDogcmdiKDE5MywgMjMyLCA1KTtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChcXG4gICAgY2lyY2xlLFxcbiAgICByZ2JhKDE5MywgMjMyLCA1LCAxKSAwJSxcXG4gICAgcmdiYSgyMjQsIDIzNSwgMTYzLCAxKSA0OSUsXFxuICAgIHJnYmEoMTcsIDE2LCAxNiwgMSkgMTAwJVxcbiAgKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4jY29udGVudCA+ICo6bm90KCN0YXNrcykge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbn1cXG5cXG4uaGVhZGVyIC5SUEIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiBtYXgoNTVweCwgN3ZoKTtcXG4gIHdpZHRoOiBtYXgoNTVweCwgN3ZoKTtcXG4gIGZvbnQtc2l6ZTogbWF4KDQwcHgsIDNyZW0pO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxuICBjb2xvcjogcmdiKDg1LCAzLCAxOSk7XFxufVxcblxcbiNhZGRUYXNrIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiBtYXgoNDBweCwgM3JlbSk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgaGVpZ2h0OiBtYXgoNTVweCwgN3ZoKTtcXG59XFxuXFxuI2FkZFRhc2s6aG92ZXIge1xcbiAgb3BhY2l0eTogMC41O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jYWRkVGFzazphY3RpdmUge1xcbiAgb3BhY2l0eTogMC4yO1xcbn1cXG5cXG4uc2VsZWN0ZWQge1xcbiAgYm9yZGVyLXJpZ2h0OiAxMHB4IGdyb292ZSB2YXIoLS1ob3Zlcik7XFxufVxcblxcbiNkYXRlIHtcXG4gIHdpZHRoOiA0MHZoICFpbXBvcnRhbnQ7XFxuICBmb250LXNpemU6IDV2aDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6IGdyZXk7XFxufVxcblxcbi5jYWxMZWZ0IHtcXG4gIG1hcmdpbi1yaWdodDogMnZoO1xcbn1cXG5cXG4uY2FsUmlnaHQge1xcbiAgbWFyZ2luLWxlZnQ6IDJ2aDtcXG59XFxuXFxuLm5hdmlnYXRlY2FsIHtcXG4gIGZvbnQtc2l6ZTogOHZoO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbiN0YXNrRm9ybSB7XFxuICB3aWR0aDogNjV2aDtcXG4gIGhlaWdodDogNjV2aDtcXG4gIGxlZnQ6IGNhbGMoNTAlIC0gMTB2aCk7XFxuICB0b3A6IGNhbGMoNTAlIC0gMzB2aCk7XFxuICBwYWRkaW5nLWxlZnQ6IDUlO1xcbiAgcGFkZGluZy1yaWdodDogNSU7XFxuICBmb250LXNpemU6IDN2aDtcXG59XFxuXFxuI3Byb2plY3RGb3JtIHtcXG4gIHdpZHRoOiA1NXZoO1xcbiAgaGVpZ2h0OiAyNXZoO1xcbiAgbGVmdDogY2FsYyg1MCUgLSAxMHZoKTtcXG4gIHRvcDogY2FsYyg1MCUgLSAzMHZoKTtcXG4gIHBhZGRpbmc6IDAgMiUgMCAyJTtcXG4gIGZvbnQtc2l6ZTogM3ZoO1xcbn1cXG5cXG4jY29uZmlybWF0aW9uRm9ybSB7XFxuICB3aWR0aDogNTB2aDtcXG4gIGhlaWdodDogMzV2aDtcXG4gIGxlZnQ6IGNhbGMoNTAlIC0gMTB2aCk7XFxuICB0b3A6IGNhbGMoNTAlIC0gMzB2aCk7XFxuICBwYWRkaW5nOiAwIDMlIDAgMyU7XFxuICBmb250LXNpemU6IDN2aDtcXG59XFxuXFxuI3Byb2plY3RGb3JtLFxcbiN0YXNrRm9ybSxcXG4jY29uZmlybWF0aW9uRm9ybSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3RvbmUpO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgYm9yZGVyOiA1cHggdmFyKC0taG92ZXIpIHNvbGlkO1xcbn1cXG5cXG4uY292ZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcXG4gIHotaW5kZXg6IDE7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiN0YXNrRm9ybSBkaXYsXFxuI3Byb2plY3RGb3JtIGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jdGFza0Zvcm0gbGFiZWwsXFxuI3Byb2plY3RGb3JtIGxhYmVsIHtcXG4gIGZsZXg6IDE7XFxuICBtaW4td2lkdGg6IDIwdmg7XFxuICBmb250LXNpemU6IDN2aDtcXG59XFxuXFxuI3Rhc2tGb3JtIGlucHV0LFxcbiN0YXNrRm9ybSBzZWxlY3Qge1xcbiAgZmxleDogNjtcXG4gIG1pbi13aWR0aDogMzB2aDtcXG59XFxuXFxuI2Rlc2NyaXB0aW9uLFxcbiN0YXNrRm9ybSBpbnB1dCxcXG4jcHJpb3JpdHksXFxuI3Byb2pfdGl0bGUsXFxuI3Byb2pfZHVlRGF0ZSB7XFxuICBmb250LXNpemU6IDJ2aDtcXG4gIHBhZGRpbmc6IDElO1xcbn1cXG5cXG4jZGVzY3JpcHRpb24ge1xcbiAgaGVpZ2h0OiAyMHZoO1xcbiAgbWF4LXdpZHRoOiAzMHZoO1xcbiAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4ucmVkQnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIG1hcmdpbi1yaWdodDogMjUlO1xcbn1cXG5cXG4uZ3JlZW5CdG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ3LCAyNTUsIDQ3KTtcXG59XFxuXFxuLnJlZEJ0bixcXG4uZ3JlZW5CdG4ge1xcbiAgZm9udC1zaXplOiAzdmg7XFxuICBwYWRkaW5nOiAxMCU7XFxuICB3aWR0aDogMTV2aDtcXG4gIGhlaWdodDogMC41dmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZmJ0biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmV4cGlyZWQge1xcbiAgYm9yZGVyOiA1cHggc29saWQgcmVkO1xcbn1cXG5cXG4udGFza19kZXNjIHtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBmbGV4OiA2O1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi50YXNrX2R1ZURhdGUge1xcbiAgZmxleDogMTtcXG59XFxuXFxuLnRhc2tfdGl0bGUsXFxuLnRhc2tfZGVzYyxcXG4udGFza19kdWVEYXRlIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMjEyKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnRhc2tfdGl0bGUge1xcbiAgZmxleDogMTtcXG4gIHBhZGRpbmc6IDAgNiU7XFxufVxcblxcbi50YXNrQnV0dG9ucyA+IGJ1dHRvbiB7XFxuICBmb250LXNpemU6IDN2aDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4ubW9iaWxlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5ub3RyYW5zaXRpb24ge1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XFxuICAtbW96LXRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcXG4gIC1vLXRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcXG4gIHRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTAwcHgpIHtcXG4gIGJvZHksXFxuICBodG1sIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgfVxcblxcbiAgLm1vYmlsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDU1cHg7XFxuICAgIGhlaWdodDogNTVweDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgd2hpdGU7XFxuICB9XFxuXFxuICAubW9iaWxlOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcblxcbiAgI3NpZGViYXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGxlZnQ6IDA7XFxuICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMHB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAzMDBtcyBlYXNlLWluLW91dDtcXG4gIH1cXG5cXG4gICNzaWRlYmFyLnZpc2libGUge1xcbiAgICB3aWR0aDogbWluKDc1JSwgMzAwcHgpO1xcbiAgfVxcblxcbiAgI3Byb2plY3RGb3JtLFxcbiAgI3Rhc2tGb3JtLFxcbiAgI2NvbmZpcm1hdGlvbkZvcm0ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgfVxcblxcbiAgI3Rhc2tGb3JtLFxcbiAgI3Byb2plY3RGb3JtIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAjcHJvamVjdEZvcm0gbGFiZWwge1xcbiAgICBtYXgtaGVpZ2h0OiA1MHB4O1xcbiAgfVxcblxcbiAgI3Byb2plY3RGb3JtID4gZGl2IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAjcHJvamVjdEZvcm0gPiBkaXYgPiAqIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgfVxcblxcbiAgI3Rhc2tGb3JtIGxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICB9XFxuXFxuICAjdGFza0Zvcm0gI3RpdGxlLFxcbiAgI3Rhc2tGb3JtICNkdWVEYXRlIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiA5MCU7XFxuICB9XFxuXFxuICAjZGVzY3JpcHRpb24ge1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBtYXgtd2lkdGg6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgbWluLWhlaWdodDogMjAwcHg7XFxuICB9XFxuXFxuICAjcHJpb3JpdHkge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcblxcbiAgI3Rhc2tGb3JtID4gZGl2IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICB9XFxuXFxuICAuZmJ0biB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3cgIWltcG9ydGFudDtcXG4gIH1cXG5cXG4gIC5mYnRuID4gKiB7XFxuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xcbiAgfVxcblxcbiAgLlJQQiB7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgei1pbmRleDogMTtcXG4gIH1cXG5cXG4gICNkYXRlIHtcXG4gICAgbWF4LXdpZHRoOiAyNTBweDtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgfVxcblxcbiAgI2FkZFRhc2sge1xcbiAgICBtYXJnaW46IDAgMTAwcHg7XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysd0JBQXdCO0FBQzFCOztBQUVBOztFQUVFLFlBQVk7RUFDWixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGNBQWM7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dUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsOEJBQThCO0VBQ2hDOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsZUFBZTtJQUNmLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAtLW5ldXRyYWw6ICNmNWY1ZjU7XFxuICAtLXZpb2xldDogd2hpdGU7XFxuICAtLXN0b25lOiAjNmU2Mjc5O1xcbiAgLS16aW5jOiAjM2YzZjQ2O1xcbiAgLS1ob3ZlcjogcmdiKDY5LCAzMSwgODMpO1xcbn1cXG5cXG5ib2R5LFxcbmh0bWwge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxufVxcblxcbiNzaWRlYmFyIHtcXG4gIGZsZXg6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS16aW5jKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jc2lkZWJhciA+IGRpdiB7XFxuICBmb250LXNpemU6IDZ2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ob21lIHtcXG4gIGZsZXg6IDE7XFxuICBib3JkZXItYm90dG9tOiA1cHggYmxhY2sgc29saWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdG9uZSk7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuI3Byb2plY3RzIHtcXG4gIGZsZXg6IDc7XFxufVxcblxcbi5ob21lOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgZmxleDogMztcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmV4cGFuZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmV4cGFuZCA+IGRpdjpmaXJzdC1jaGlsZCxcXG4jYWRkUHJvamVjdCB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmV4cGFuZCA+ICoge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNhZGRQcm9qZWN0IHtcXG4gIGJvcmRlci10b3A6IDNweCBzb2xpZCBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN0b25lKTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4jYWRkUHJvamVjdDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlcik7XFxufVxcblxcbi5leHBhbmQgPiBkaXY6Zmlyc3QtY2hpbGQge1xcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uZXhwYW5kIC5zaG9ydGN1dCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdG9uZSk7XFxuICBwYWRkaW5nOiA1JTtcXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBibGFjaztcXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5leHBhbmQgLnNob3J0Y3V0cyB7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgbWF4LWhlaWdodDogNzB2aDtcXG59XFxuXFxuLnNob3J0Y3V0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmV4cGFuZCA+IGRpdiB7XFxuICBmbGV4OiA1O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jdGFza3Mge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDM1dmgsIDFmcikpO1xcbiAgZ3JpZC1nYXA6IDJ2aDtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDMlO1xcbn1cXG5cXG4jdGFza3MgPiBkaXYge1xcbiAgaGVpZ2h0OiAzNXZoO1xcbiAgYmFja2dyb3VuZDogcmdiKDAsIDE0NywgMjIzKTtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChcXG4gICAgY2lyY2xlLFxcbiAgICByZ2JhKDAsIDE0NywgMjIzLCAxKSAwJSxcXG4gICAgcmdiYSgyMTEsIDIzOSwgMjQyLCAxKSA0OSUsXFxuICAgIHJnYmEoMTcsIDE2LCAxNiwgMSkgMTAwJVxcbiAgKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xcbn1cXG5cXG4jdGFza3MgPiBkaXYgPiBkaXYge1xcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcXG4gIGZvbnQtc2l6ZTogM3ZoO1xcbn1cXG5cXG4uTXVzdCB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMjMyLCA1LCA1KTtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChcXG4gICAgY2lyY2xlLFxcbiAgICByZ2JhKDIzMiwgNSwgNSwgMSkgMCUsXFxuICAgIHJnYmEoMjEzLCAxNDQsIDE0NCwgMSkgNDklLFxcbiAgICByZ2JhKDE3LCAxNiwgMTYsIDEpIDEwMCVcXG4gICkgIWltcG9ydGFudDtcXG59XFxuXFxuLk5lY2Vzc2FyeSB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMjMyLCAxMDcsIDUpO1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KFxcbiAgICBjaXJjbGUsXFxuICAgIHJnYmEoMjMyLCAxMDcsIDUsIDEpIDAlLFxcbiAgICByZ2JhKDIzNSwgMjAwLCAxNjMsIDEpIDQ5JSxcXG4gICAgcmdiYSgxNywgMTYsIDE2LCAxKSAxMDAlXFxuICApICFpbXBvcnRhbnQ7XFxufVxcblxcbi5NYXliZSB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMTkzLCAyMzIsIDUpO1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KFxcbiAgICBjaXJjbGUsXFxuICAgIHJnYmEoMTkzLCAyMzIsIDUsIDEpIDAlLFxcbiAgICByZ2JhKDIyNCwgMjM1LCAxNjMsIDEpIDQ5JSxcXG4gICAgcmdiYSgxNywgMTYsIDE2LCAxKSAxMDAlXFxuICApICFpbXBvcnRhbnQ7XFxufVxcblxcbiNjb250ZW50ID4gKjpub3QoI3Rhc2tzKSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBmb250LXNpemU6IDQwcHg7XFxufVxcblxcbi5oZWFkZXIgLlJQQiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IG1heCg1NXB4LCA3dmgpO1xcbiAgd2lkdGg6IG1heCg1NXB4LCA3dmgpO1xcbiAgZm9udC1zaXplOiBtYXgoNDBweCwgM3JlbSk7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIGNvbG9yOiByZ2IoODUsIDMsIDE5KTtcXG59XFxuXFxuI2FkZFRhc2sge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IG1heCg0MHB4LCAzcmVtKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBoZWlnaHQ6IG1heCg1NXB4LCA3dmgpO1xcbn1cXG5cXG4jYWRkVGFzazpob3ZlciB7XFxuICBvcGFjaXR5OiAwLjU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNhZGRUYXNrOmFjdGl2ZSB7XFxuICBvcGFjaXR5OiAwLjI7XFxufVxcblxcbi5zZWxlY3RlZCB7XFxuICBib3JkZXItcmlnaHQ6IDEwcHggZ3Jvb3ZlIHZhcigtLWhvdmVyKTtcXG59XFxuXFxuI2RhdGUge1xcbiAgd2lkdGg6IDQwdmggIWltcG9ydGFudDtcXG4gIGZvbnQtc2l6ZTogNXZoO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogZ3JleTtcXG59XFxuXFxuLmNhbExlZnQge1xcbiAgbWFyZ2luLXJpZ2h0OiAydmg7XFxufVxcblxcbi5jYWxSaWdodCB7XFxuICBtYXJnaW4tbGVmdDogMnZoO1xcbn1cXG5cXG4ubmF2aWdhdGVjYWwge1xcbiAgZm9udC1zaXplOiA4dmg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuI3Rhc2tGb3JtIHtcXG4gIHdpZHRoOiA2NXZoO1xcbiAgaGVpZ2h0OiA2NXZoO1xcbiAgbGVmdDogY2FsYyg1MCUgLSAxMHZoKTtcXG4gIHRvcDogY2FsYyg1MCUgLSAzMHZoKTtcXG4gIHBhZGRpbmctbGVmdDogNSU7XFxuICBwYWRkaW5nLXJpZ2h0OiA1JTtcXG4gIGZvbnQtc2l6ZTogM3ZoO1xcbn1cXG5cXG4jcHJvamVjdEZvcm0ge1xcbiAgd2lkdGg6IDU1dmg7XFxuICBoZWlnaHQ6IDI1dmg7XFxuICBsZWZ0OiBjYWxjKDUwJSAtIDEwdmgpO1xcbiAgdG9wOiBjYWxjKDUwJSAtIDMwdmgpO1xcbiAgcGFkZGluZzogMCAyJSAwIDIlO1xcbiAgZm9udC1zaXplOiAzdmg7XFxufVxcblxcbiNjb25maXJtYXRpb25Gb3JtIHtcXG4gIHdpZHRoOiA1MHZoO1xcbiAgaGVpZ2h0OiAzNXZoO1xcbiAgbGVmdDogY2FsYyg1MCUgLSAxMHZoKTtcXG4gIHRvcDogY2FsYyg1MCUgLSAzMHZoKTtcXG4gIHBhZGRpbmc6IDAgMyUgMCAzJTtcXG4gIGZvbnQtc2l6ZTogM3ZoO1xcbn1cXG5cXG4jcHJvamVjdEZvcm0sXFxuI3Rhc2tGb3JtLFxcbiNjb25maXJtYXRpb25Gb3JtIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdG9uZSk7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBib3JkZXI6IDVweCB2YXIoLS1ob3Zlcikgc29saWQ7XFxufVxcblxcbi5jb3ZlciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xcbiAgei1pbmRleDogMTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI3Rhc2tGb3JtIGRpdixcXG4jcHJvamVjdEZvcm0gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiN0YXNrRm9ybSBsYWJlbCxcXG4jcHJvamVjdEZvcm0gbGFiZWwge1xcbiAgZmxleDogMTtcXG4gIG1pbi13aWR0aDogMjB2aDtcXG4gIGZvbnQtc2l6ZTogM3ZoO1xcbn1cXG5cXG4jdGFza0Zvcm0gaW5wdXQsXFxuI3Rhc2tGb3JtIHNlbGVjdCB7XFxuICBmbGV4OiA2O1xcbiAgbWluLXdpZHRoOiAzMHZoO1xcbn1cXG5cXG4jZGVzY3JpcHRpb24sXFxuI3Rhc2tGb3JtIGlucHV0LFxcbiNwcmlvcml0eSxcXG4jcHJval90aXRsZSxcXG4jcHJval9kdWVEYXRlIHtcXG4gIGZvbnQtc2l6ZTogMnZoO1xcbiAgcGFkZGluZzogMSU7XFxufVxcblxcbiNkZXNjcmlwdGlvbiB7XFxuICBoZWlnaHQ6IDIwdmg7XFxuICBtYXgtd2lkdGg6IDMwdmg7XFxuICByZXNpemU6IG5vbmU7XFxufVxcblxcbi5yZWRCdG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgbWFyZ2luLXJpZ2h0OiAyNSU7XFxufVxcblxcbi5ncmVlbkJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDcsIDI1NSwgNDcpO1xcbn1cXG5cXG4ucmVkQnRuLFxcbi5ncmVlbkJ0biB7XFxuICBmb250LXNpemU6IDN2aDtcXG4gIHBhZGRpbmc6IDEwJTtcXG4gIHdpZHRoOiAxNXZoO1xcbiAgaGVpZ2h0OiAwLjV2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mYnRuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZXhwaXJlZCB7XFxuICBib3JkZXI6IDVweCBzb2xpZCByZWQ7XFxufVxcblxcbi50YXNrX2Rlc2Mge1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIGZsZXg6IDY7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLnRhc2tfZHVlRGF0ZSB7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4udGFza190aXRsZSxcXG4udGFza19kZXNjLFxcbi50YXNrX2R1ZURhdGUge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yMTIpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udGFza190aXRsZSB7XFxuICBmbGV4OiAxO1xcbiAgcGFkZGluZzogMCA2JTtcXG59XFxuXFxuLnRhc2tCdXR0b25zID4gYnV0dG9uIHtcXG4gIGZvbnQtc2l6ZTogM3ZoO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi5tb2JpbGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm5vdHJhbnNpdGlvbiB7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcXG4gIC1tb3otdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xcbiAgLW8tdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xcbiAgdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMDBweCkge1xcbiAgYm9keSxcXG4gIGh0bWwge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICB9XFxuXFxuICAubW9iaWxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogNTVweDtcXG4gICAgaGVpZ2h0OiA1NXB4O1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB3aGl0ZTtcXG4gIH1cXG5cXG4gIC5tb2JpbGU6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxuXFxuICAjc2lkZWJhciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgbGVmdDogMDtcXG4gICAgbWF4LWhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAwcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHRyYW5zaXRpb246IHdpZHRoIDMwMG1zIGVhc2UtaW4tb3V0O1xcbiAgfVxcblxcbiAgI3NpZGViYXIudmlzaWJsZSB7XFxuICAgIHdpZHRoOiBtaW4oNzUlLCAzMDBweCk7XFxuICB9XFxuXFxuICAjcHJvamVjdEZvcm0sXFxuICAjdGFza0Zvcm0sXFxuICAjY29uZmlybWF0aW9uRm9ybSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICB9XFxuXFxuICAjdGFza0Zvcm0sXFxuICAjcHJvamVjdEZvcm0ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gICNwcm9qZWN0Rm9ybSBsYWJlbCB7XFxuICAgIG1heC1oZWlnaHQ6IDUwcHg7XFxuICB9XFxuXFxuICAjcHJvamVjdEZvcm0gPiBkaXYge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gICNwcm9qZWN0Rm9ybSA+IGRpdiA+ICoge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIHdpZHRoOiA5MCU7XFxuICB9XFxuXFxuICAjdGFza0Zvcm0gbGFiZWwge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gIH1cXG5cXG4gICN0YXNrRm9ybSAjdGl0bGUsXFxuICAjdGFza0Zvcm0gI2R1ZURhdGUge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDkwJTtcXG4gIH1cXG5cXG4gICNkZXNjcmlwdGlvbiB7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIG1heC13aWR0aDogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcXG4gIH1cXG5cXG4gICNwcmlvcml0eSB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxuXFxuICAjdGFza0Zvcm0gPiBkaXYge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIH1cXG5cXG4gIC5mYnRuIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xcbiAgfVxcblxcbiAgLmZidG4gPiAqIHtcXG4gICAgZm9udC1zaXplOiAxLjdyZW07XFxuICB9XFxuXFxuICAuUlBCIHtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICB6LWluZGV4OiAxO1xcbiAgfVxcblxcbiAgI2RhdGUge1xcbiAgICBtYXgtd2lkdGg6IDI1MHB4O1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICB9XFxuXFxuICAjYWRkVGFzayB7XFxuICAgIG1hcmdpbjogMCAxMDBweDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL3RvZG9cIjtcblxuZnVuY3Rpb24gZ2V0RGF0ZSgpIHtcbiAgY29uc3QgZCA9IG5ldyBEYXRlKCk7XG4gIGxldCBtb250aCA9IGAke2QuZ2V0TW9udGgoKSArIDF9YDtcbiAgbGV0IGRheSA9IGAke2QuZ2V0RGF0ZSgpfWA7XG4gIGNvbnN0IHllYXIgPSBkLmdldEZ1bGxZZWFyKCk7XG5cbiAgaWYgKG1vbnRoLmxlbmd0aCA8IDIpIHtcbiAgICBtb250aCA9IGAwJHttb250aH1gO1xuICB9XG4gIGlmIChkYXkubGVuZ3RoIDwgMikge1xuICAgIGRheSA9IGAwJHtkYXl9YDtcbiAgfVxuXG4gIHJldHVybiBbeWVhciwgbW9udGgsIGRheV0uam9pbihcIi1cIik7XG59XG5cbmZ1bmN0aW9uIGdldE1vbnRoRnJvbVN0cmluZyhtb24pIHtcbiAgcmV0dXJuIG5ldyBEYXRlKERhdGUucGFyc2UoYCR7bW9ufSAxLCAyMDEyYCkpLmdldE1vbnRoKCkgKyAxO1xufVxuXG5jb25zdCBjYWxlbmRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF0ZVwiKTtcblxuY29uc3QgdG9kYXkgPSBnZXREYXRlKCk7XG5jYWxlbmRlci5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCB0b2RheSk7XG5jYWxlbmRlci5zZXRBdHRyaWJ1dGUoXCJtaW5cIiwgdG9kYXkpO1xuXG4vLyBzZXQgZGVmYXVsdCBkYXRlIHZhbHVlcyB0byB0b2RheVxuY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlRGF0ZVwiKTtcbmR1ZURhdGUudmFsdWUgPSBnZXREYXRlKCk7XG4vLyBjb25zdCBwcm9qX2R1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2pfZHVlRGF0ZVwiKTtcbi8vIHByb2pfZHVlRGF0ZS52YWx1ZSA9IGdldERhdGUoKTtcbi8vIGlkZWFsbHkgeW91IHdvdWxkIGZvcm1hdCB0byBmaXQgbG9jYXRpb24sIGJ1dCB3aGF0IGEgcGFpbiBEOlxuZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlKSB7XG4gIGNvbnN0IHRlbXAgPSBkYXRlLnNwbGl0KFwiLVwiKTtcbiAgcmV0dXJuIFt0ZW1wWzFdLCB0ZW1wWzJdLCB0ZW1wWzBdXS5qb2luKFwiLVwiKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0KHRlbXApIHtcbiAgLy8gdGVtcCAob2JqZWN0KTpcbiAgLy8gU3VuIEF1ZyAyMSAyMDIyIDAyOjAwOjAwIEdNVCswMjAwIChDZW50cmFsIEV1cm9wZWFuIFN1bW1lciBUaW1lKVxuICBjb25zdCBzdHIgPSB0ZW1wLnRvU3RyaW5nKCk7XG4gIGNvbnN0IG1vbnRoID0gZ2V0TW9udGhGcm9tU3RyaW5nKHN0ci5zdWJzdHJpbmcoNCwgNykpO1xuICBjb25zdCBkYXkgPSBzdHIuc3Vic3RyaW5nKDgsIDEwKTtcbiAgY29uc3QgeWVhciA9IHN0ci5zdWJzdHJpbmcoMTEsIDE1KTtcbiAgcmV0dXJuIFtkYXksIG1vbnRoLCB5ZWFyXTtcbn1cblxuY29uc3QgZXhwaXJlQ2hlY2sgPSAodGFzaykgPT4ge1xuICAvLyBjb25zdCB0b2RheUFyciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZVwiKS52YWx1ZS5zcGxpdChcIi1cIik7XG5cbiAgY29uc3QgdG9kYXlBcnIgPSBmb3JtYXQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlXCIpLnZhbHVlQXNEYXRlKTtcbiAgLy8gW2RheSwgbW9udGgsIHllYXJdXG4gIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWxlY3RlZFwiKS50ZXh0Q29udGVudDtcbiAgY29uc3QgYXJyID0gcHJvamVjdHNbY3VycmVudFByb2plY3RdLnRhc2tzW3Rhc2sudGl0bGVdLmR1ZURhdGUuc3BsaXQoXCItXCIpO1xuICBpZiAoXG4gICAgK3RvZGF5QXJyWzBdID4gK2FyclsxXSB8fFxuICAgICt0b2RheUFyclsxXSA+ICthcnJbMF0gfHxcbiAgICArdG9kYXlBcnJbMl0gPiArYXJyWzJdXG4gICkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbi8qIGNvbnN0IHByb2pfZXhwaXJlQ2hlY2sgPSAoKSA9PiB7XG4gICAgY29uc3QgY3VycmVudFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdGVkXCIpLnRleHRDb250ZW50O1xuICAgIGlmIChjdXJyZW50UHJvamVjdCAhPSBcIkhPTUVcIikge1xuICAgICAgICBjb25zdCB0b2RheUFyciA9IGZvcm1hdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVcIikudmFsdWVBc0RhdGUpO1xuICAgICAgICBjb25zdCBhcnIgPSBwcm9qZWN0c1tjdXJyZW50UHJvamVjdF0uZHVlRGF0ZS5zcGxpdChcIi1cIik7XG4gICAgICAgIC8vIHllYXIgbW9udGggZGF5XG5cbiAgICAgICAgaWYgKCt0b2RheUFyclswXSA+ICthcnJbMl0gfHwgK3RvZGF5QXJyWzFdID4gK2FyclswXSB8fCArdG9kYXlBcnJbMl0gPlxuICAgICAgICAgICAgK2FyclswXSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbn0gKi9cblxuZXhwb3J0IHsgZ2V0RGF0ZSwgZm9ybWF0RGF0ZSwgZXhwaXJlQ2hlY2sgLyogcHJval9leHBpcmVDaGVjayAqLyB9O1xuIiwiaW1wb3J0IHsgZXhwaXJlQ2hlY2sgfSBmcm9tIFwiLi9kYXRlXCI7XG5cbmV4cG9ydCBjb25zdCBhZGRUYXNrRCA9ICh0YXNrKSA9PiB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKGAke3Rhc2suaWR9YCk7XG5cbiAgaWYgKGV4cGlyZUNoZWNrKHRhc2spKSB7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJleHBpcmVkXCIpO1xuICB9IGVsc2Uge1xuICAgIGRpdi5jbGFzc0xpc3QucmVtb3ZlKFwiZXhwaXJlZFwiKTtcbiAgfVxuXG4gIGNvbnN0IHRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrc1wiKTtcbiAgdGFza3MuYXBwZW5kQ2hpbGQoZGl2KTtcbn07XG5cbmV4cG9ydCBjb25zdCBlcmFzZVRhc2tzRCA9ICgpID0+IHtcbiAgY29uc3QgdGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tzXCIpO1xuICB3aGlsZSAodGFza3MuZmlyc3RDaGlsZCkge1xuICAgIHRhc2tzLnJlbW92ZUNoaWxkKHRhc2tzLmxhc3RDaGlsZCk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBlcmFzZVRhc2tEID0gKGlkKSA9PiB7XG4gIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtpZH1gKTtcbiAgdGFzay5yZW1vdmUoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRQcm9qZWN0RCA9IChwcm9qZWN0LCBpZCkgPT4ge1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXYuY2xhc3NMaXN0LmFkZChcInNob3J0Y3V0XCIpO1xuICBkaXYuaWQgPSBpZDtcbiAgZGl2LnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcblxuICBjb25zdCBzaG9ydGN1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNob3J0Y3V0c1wiKTtcbiAgc2hvcnRjdXRzLmFwcGVuZChkaXYpO1xufTtcblxuLy8gRCBhdCB0aGUgZW5kIHJlcHJlc2VudHMgRE9NXG4iLCJpbXBvcnQgeyBjaGVja0R1ZURhdGUsIHNob3dGb3JtQW5kQ292ZXIgfSBmcm9tIFwiLi91dGlsaXR5XCI7XG5pbXBvcnQgeyBvbkNsaWNraW5nUlBCIH0gZnJvbSBcIi4vc2V0dXBcIjtcbmltcG9ydCB7XG4gIGFkZFRhc2ssXG4gIHJlc2V0Rm9ybSxcbiAgYWRkUHJvamVjdCxcbiAgcmVzZXRQcm9qRm9ybSxcbiAgcmVzZXRDb25mRm9ybSxcbn0gZnJvbSBcIi4vZm9ybXNcIjtcblxuLy8gaXQgcmVzZXRzIGV2ZXJ5IHRpbWUgd2Vic2l0ZSByZWZyZXNoZXMgc28gZHVwbGljYXRpb24gYnVnIG9jY3Vycyxcbi8vIGFuZCBpdCdzIG1vcmUgZWZmaWNpZW50LCAobGl0dGxlIGJpdCBsb2xcblxuY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkVGFza1wiKTtcbmFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgc2hvd0Zvcm1BbmRDb3ZlcigpO1xufSk7XG5cbi8vIHRob3VnaHQgaXQgd291bGQgZWFzeSB0byBwdXQgYWxsIGZvcm0gcmVsYXRlZCBjb2RlIHRvIHRoZSBzdWJtaXQgYnRuIGxpc3RlbmVyXG5jb25zdCBnYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ncmVlblwiKTtcbmdidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgYWRkVGFzaygpO1xufSk7XG5cbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tGb3JtXCIpO1xuZm9ybS5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICBpZiAoZS5jb2RlID09PSBcIkVudGVyXCIpIHtcbiAgICBhZGRUYXNrKCk7XG4gIH1cbn0pO1xuXG5jb25zdCByYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZWRcIik7XG5yYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHJlc2V0Rm9ybSgpO1xufSk7XG5cbmNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZFByb2plY3RcIik7XG5hZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNvbnN0IHByb2pGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0Rm9ybVwiKTtcbiAgcHJvakZvcm0uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICBjb25zdCBjb3ZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY292ZXJcIik7XG4gIGNvdmVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG59KTtcblxuY29uc3QgcHJvakdCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2pfZ3JlZW5cIik7XG5wcm9qR0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBhZGRQcm9qZWN0KCk7XG59KTtcblxuY29uc3QgcHJvakZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RGb3JtXCIpO1xucHJvakZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgaWYgKGUuY29kZSA9PT0gXCJFbnRlclwiKSB7XG4gICAgYWRkUHJvamVjdCgpO1xuICB9XG59KTtcblxuY29uc3QgcHJvalJCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2pfcmVkXCIpO1xucHJvalJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgcmVzZXRQcm9qRm9ybSgpO1xufSk7XG5cbmNvbnN0IGNvbmZHcmVlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29uZl9ncmVlblwiKTtcbmNvbmZHcmVlbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBvbkNsaWNraW5nUlBCKCk7XG4gIHJlc2V0Q29uZkZvcm0oKTtcbn0pO1xuXG5jb25zdCBjb25mUmVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb25mX3JlZFwiKTtcbmNvbmZSZWQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgcmVzZXRDb25mRm9ybSgpO1xufSk7XG5cbi8vIG5hdmlnYXRlIGNhbGVuZGVyLCBsZWZ0IGFuZCByaWdodCBhcnJvd1xuY29uc3QgbGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FsTGVmdFwiKTtcbmNvbnN0IHJpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYWxSaWdodFwiKTtcbmNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkYXRlXCIpO1xubGVmdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBpbnB1dC5zdGVwRG93bigpO1xuICBjaGVja0R1ZURhdGUoKTtcbn0pO1xucmlnaHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgaW5wdXQuc3RlcFVwKCk7XG4gIGNoZWNrRHVlRGF0ZSgpO1xufSk7XG4vLyBkYXRlIGlzIHBpY2tlZCBtYW51YWxseSBmcm9tIHRoZSBjYWxhbmRlciwgY2xpY2sgZG9lc24ndCB3b3JrXG5pbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgY2hlY2tEdWVEYXRlKCk7XG59KTtcbiIsImltcG9ydCB7IGFkZFByb2plY3RELCBhZGRUYXNrRCB9IGZyb20gXCIuL2RvbVwiO1xuaW1wb3J0IHsgc2V0dXBUYXNrRCwgYWRkUHJvamVjdExpc3RlbmVyIH0gZnJvbSBcIi4vc2V0dXBcIjtcbmltcG9ydCB7IHByb2plY3RGYWN0b3J5LCBwcm9qZWN0cywgdG9kbyB9IGZyb20gXCIuL3RvZG9cIjtcbmltcG9ydCB7IGZvcm1hdERhdGUsIGdldERhdGUgfSBmcm9tIFwiLi9kYXRlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNldEZvcm0oKSB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tGb3JtXCIpO1xuICBjb25zdCBjb3ZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY292ZXJcIik7XG4gIGZvcm0ucmVzZXQoKTtcbiAgZm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIGNvdmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuICAvLyB0aGlzIGlzIGFsc28gZGVmYXVsdCwgcHJlc2VudCBpbiBkYXRlLmpzIVxuICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWVEYXRlXCIpO1xuICBkdWVEYXRlLnZhbHVlID0gZ2V0RGF0ZSgpO1xufVxuXG4vLyBjb3VsZG4ndCBnZXQgc3VibWl0IHR5cGUgYnV0dG9uIHRvIHdvcmssIHNvIG5lZWRlZCBhIGZ1bmN0aW9uIHRvIGdldCB2YWx1ZXNcbi8vIGZyb20gdGhlIGZvcm0sIHRoaXMgaXMgaXRcbmZ1bmN0aW9uIGdldFRhc2soKSB7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZVwiKS52YWx1ZTtcbiAgY29uc3QgY3VycmVudFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdGVkXCIpLnRleHRDb250ZW50O1xuICBpZiAoIXByb2plY3RzW2N1cnJlbnRQcm9qZWN0XS50YXNrc1t0aXRsZV0pIHtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb25cIikudmFsdWU7XG4gICAgbGV0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZURhdGVcIikudmFsdWU7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByaW9yaXR5XCIpLnZhbHVlO1xuXG4gICAgaWYgKCFkdWVEYXRlKSB7XG4gICAgICBkdWVEYXRlID0gZ2V0RGF0ZSgpO1xuICAgIH1cblxuICAgIGxldCBpZCA9IDA7XG4gICAgLy8gZWFzaWVzdCB3YXkgdG8gcHJldmVudCBkdXBsaWNhdGlvbiBidWcgPT4gMiB0YXNrcyAxIGlkXG4gICAgT2JqZWN0LmtleXMocHJvamVjdHNbY3VycmVudFByb2plY3RdLnRhc2tzKS5mb3JFYWNoKCh0YXNrTmFtZSkgPT4ge1xuICAgICAgaWQgPSBNYXRoLm1heChcbiAgICAgICAgaWQsXG4gICAgICAgIE51bWJlcihcbiAgICAgICAgICBwcm9qZWN0c1tjdXJyZW50UHJvamVjdF0udGFza3NbdGFza05hbWVdLmlkLnJlcGxhY2UoXCJ0YXNrXCIsIFwiXCIpXG4gICAgICAgICkgKyAxXG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgY29uc3QgdGFzayA9IHRvZG8oXG4gICAgICB0aXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgZm9ybWF0RGF0ZShkdWVEYXRlKSxcbiAgICAgIHByaW9yaXR5LFxuICAgICAgYHRhc2ske2lkLnRvU3RyaW5nKCl9YFxuICAgICk7XG4gICAgcmV0dXJuIHRhc2s7XG4gIH1cbiAgcmV0dXJuIDA7XG59XG5cbmV4cG9ydCBjb25zdCBhZGRUYXNrID0gKCkgPT4ge1xuICAvLyBydW4gb25seSBpZiBub3QgZWRpdGluZywgd2UgaGF2ZSAyIGV2ZW50IGxpc3RuZXJzIG9uIG9uZSBidXR0b25cbiAgLy8gc28gdGhpcyBmb3JjZXMgdGhlIG90aGVyIG9uZSB0byB3b3JrIGFsb25lLCB3aGljaCBpcyB3aGF0IHdlIHdhbnRcbiAgY29uc3QgY3VycmVudFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdGVkXCIpLnRleHRDb250ZW50O1xuICAvLyBidWdzIG9jY3VyIGlmIGZsYWcgaXNuJ3QgcHJlc2VudCwgc2luY2UgYWZ0ZXIgSSBhbSB1c2luZyB0d29cbiAgLy8gZXZlbnQgbGlzdG5lcnMgZm9yIG9uZSBidXR0b25cbiAgY29uc3QgdGFzayA9IGdldFRhc2soKTtcblxuICBpZiAodGFzayA9PT0gMCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1hbGVydFxuICAgIGFsZXJ0KFwiRmFpbHVyZSwgdGFzayB3aXRoIHRoZSBzYW1lIHRpdGxlIGFscmVhZHkgZXhpc3RzXCIpO1xuICB9XG4gIGlmICh0YXNrKSB7XG4gICAgcmVzZXRGb3JtKCk7XG4gICAgLy8gc2V0IGRlZmF1bHQgZGF0ZSwgc28gTU0tREQtWVlZWSBpcyBub3Qgc2hvd24gb24gZm9ybT8/Pz8/XG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlRGF0ZVwiKTtcbiAgICBkdWVEYXRlLnZhbHVlID0gZ2V0RGF0ZSgpO1xuXG4gICAgLy8gc2V0dXAgdGFza1xuICAgIHByb2plY3RzW2N1cnJlbnRQcm9qZWN0XS50YXNrc1t0YXNrLnRpdGxlXSA9IHRhc2s7XG4gICAgYWRkVGFza0QodGFzaywgY3VycmVudFByb2plY3QpO1xuICAgIHNldHVwVGFza0QodGFzayk7XG5cbiAgICBjb25zdCByYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZWRcIik7XG4gICAgcmJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG5cbiAgICBjb25zdCBnYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ncmVlblwiKTtcbiAgICBnYnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiKDQ3LCAyNTUsIDQ3KVwiO1xuICAgIGdidXR0b24udGV4dENvbnRlbnQgPSBcIkFkZFwiO1xuXG4gICAgLy8gYXR0ZW1wdCBhdCBcInJlZnJlc2hpbmdcIiB0aGUgaGVpZ2h0LCBiZWNhdXNlIGl0IHNvbWV0aW1lcyBmb3JnZXRzXG4gICAgLy8gaXQgbmVlZHMgdG8gYmUgMTAwdmggb24gbW9iaWxlIGJyb3dzZXJzID4tLi08XG4gICAgLy8gY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaWRlYmFyJyk7XG4gICAgLy8gc2lkZWJhci5zdHlsZS5oZWlnaHQgPSAnMTAwdmgnO1xuXG4gICAgLy8gY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgLy8gY29udGVudC5zdHlsZS5oZWlnaHQgPSAnMTAwdmgnO1xuXG4gICAgLy8gc2F2ZSB0byBsb2NhbCB3aGVuIHlvdSBhZGQgdGFzayBvciBwcm9qZWN0XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xuICB9XG59O1xuXG4vLyBzaW1pbGFyIHByb2JsZW0gYXMgdGFzayBpZFxuLy8gbGV0IHByb2plY3RJRCA9IE9iamVjdC5rZXlzKHByb2plY3RzKS5sZW5ndGg7XG5cbi8vIGFnYWludCwgbmVlZGVkIGEgd2F5IHRvIGdldCB2YWx1ZXMgZnJvbSB0aGUgZm9ybVxuZnVuY3Rpb24gZ2V0UHJvamVjdCgpIHtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2pfdGl0bGVcIikudmFsdWU7XG4gIGlmICghcHJvamVjdHNbdGl0bGVdKSB7XG4gICAgLy8gY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJval9kdWVEYXRlXCIpLnZhbHVlO1xuXG4gICAgbGV0IHByb2plY3RJRCA9IDA7XG4gICAgLy8gZWFzaWVzdCB3YXkgdG8gcHJldmVudCBkdXBsaWNhdGlvbiBidWcgPT4gMiBwcm9qZWN0cyAxIGlkXG4gICAgT2JqZWN0LmtleXMocHJvamVjdHMpLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgIHByb2plY3RJRCA9IE1hdGgubWF4KFxuICAgICAgICBwcm9qZWN0SUQsXG4gICAgICAgIE51bWJlcihwcm9qZWN0c1twcm9qZWN0XS5pZC5yZXBsYWNlKFwiUHJcIiwgXCJcIikpICsgMVxuICAgICAgKTtcbiAgICB9KTtcbiAgICBjb25zdCBwcm9qID0gcHJvamVjdEZhY3RvcnkoXG4gICAgICB0aXRsZSxcbiAgICAgIC8qIGR1ZURhdGUsICovXG4gICAgICBgUHIke3Byb2plY3RJRC50b1N0cmluZygpfWBcbiAgICApO1xuICAgIHJldHVybiBwcm9qO1xuICB9XG4gIHJldHVybiAwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRQcm9qRm9ybSgpIHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdEZvcm1cIik7XG4gIGNvbnN0IGNvdmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb3ZlclwiKTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qX3RpdGxlXCIpLnZhbHVlID0gXCJcIjtcbiAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qX2R1ZURhdGVcIikudmFsdWUgPSBcIlwiO1xuICBmb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgY292ZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4gIC8vIHRoaXMgaXMgYWxzbyBkZWZhdWx0LCBwcmVzZW50IGluIGRhdGUuanMhXG4gIC8vIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2pfZHVlRGF0ZVwiKTtcbiAgLy8gZHVlRGF0ZS52YWx1ZSA9IGdldERhdGUoKTtcbn1cblxuZXhwb3J0IGNvbnN0IGFkZFByb2plY3QgPSAoKSA9PiB7XG4gIGNvbnN0IHByb2plY3QgPSBnZXRQcm9qZWN0KCk7XG4gIGlmICghcHJvamVjdCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1hbGVydFxuICAgIGFsZXJ0KFwiRmFpbHVyZSwgY2FuJ3QgcmVwZWF0IHByb2plY3QgbmFtZVwiKTtcbiAgfSBlbHNlIHtcbiAgICByZXNldFByb2pGb3JtKCk7XG4gICAgcHJvamVjdHNbcHJvamVjdC50aXRsZV0gPSBwcm9qZWN0O1xuICAgIHByb2plY3RzW3Byb2plY3QudGl0bGVdLnRhc2tzID0ge307XG4gICAgcHJvamVjdHNbcHJvamVjdC50aXRsZV0uaWQgPSBwcm9qZWN0LmlkO1xuXG4gICAgYWRkUHJvamVjdEQocHJvamVjdCwgcHJvamVjdC5pZCk7XG4gICAgYWRkUHJvamVjdExpc3RlbmVyKHByb2plY3QuaWQpO1xuXG4gICAgLy8gc2F2ZSB0byBsb2NhbCB3aGVuIHlvdSBhZGQgdGFzayBvciBwcm9qZWN0XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xuICB9XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRDb25mRm9ybSgpIHtcbiAgY29uc3QgY29uZkZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbmZpcm1hdGlvbkZvcm1cIik7XG4gIGNvbmZGb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgY29uc3QgY292ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvdmVyXCIpO1xuICBjb3Zlci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59XG4iLCIvLyBtZW51IGJ1dHRvblxuY29uc3QgbW9iaWxlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2JpbGVcIik7XG5tb2JpbGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2lkZWJhclwiKTtcbiAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gIG1vYmlsZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59KTtcblxuLy8gbW9yZSBkeW5hbWljIG1lbnVcbmNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpZGViYXJcIik7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7XG4gIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IFwiMTEwMFwiKSB7XG4gICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKCdub3RyYW5zaXRpb24nKTtcbiAgICBtb2JpbGVCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIFxuICB9XG4gIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IFwiMTEwMFwiKSB7XG4gICAgc2lkZWJhci5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG4gICAgc2lkZWJhci5jbGFzc0xpc3QucmVtb3ZlKCdub3RyYW5zaXRpb24nKTtcbiAgICBtb2JpbGVCdG4uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICB9XG4gIC8vIC8vaWYgKHNpZGViYXIuc3R5bGUuZGlzcGxheSAhPSBcImZsZXhcIikge1xuICAvLyAgbW9iaWxlQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgLy8gfVxufSk7XG5cbi8vIHdoZW4geW91IGNsaWNrIG9uIGNvbnRlbnQgdGhlIG1lbnUgZGlzYXBwZWFyc1xuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbmNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgXCIxMTAwXCIpIHtcbiAgICBzaWRlYmFyLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcbiAgICBtb2JpbGVCdG4uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICB9XG59KTtcblxuLy8gVGhlcmUgbWlnaHQgYmUgYSBtb3JlIGVmZmljaWVudCB3YXkuIFRoaXMgc2VlbXMgdG8gd29yayB0aG91Z2guXG4iLCJpbXBvcnQgeyBlcmFzZVRhc2tELCBhZGRQcm9qZWN0RCwgYWRkVGFza0QsIGVyYXNlVGFza3NEIH0gZnJvbSBcIi4vZG9tXCI7XG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL3RvZG9cIjtcbmltcG9ydCB7IGdldFRpdGxlLCBkZWxldGVUYXNrLCBzaG93Rm9ybUFuZENvdmVyIH0gZnJvbSBcIi4vdXRpbGl0eVwiO1xuXG5jb25zdCBkb1VJID0gKHdvcmtpbmdUYXNrKSA9PiB7XG4gIGNvbnN0IHRhc2tOb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7d29ya2luZ1Rhc2suaWR9YCk7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IHdvcmtpbmdUYXNrLnRpdGxlO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidGFza190aXRsZVwiKTtcbiAgdGFza05vZGUuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkZXNjLnRleHRDb250ZW50ID0gd29ya2luZ1Rhc2suZGVzY3JpcHRpb247XG4gIGRlc2MuY2xhc3NMaXN0LmFkZChcInRhc2tfZGVzY1wiKTtcbiAgdGFza05vZGUuYXBwZW5kQ2hpbGQoZGVzYyk7XG5cbiAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGR1ZURhdGUudGV4dENvbnRlbnQgPSBgRHVlIERhdGU6ICR7d29ya2luZ1Rhc2suZHVlRGF0ZX1gO1xuICBkdWVEYXRlLmNsYXNzTGlzdC5hZGQoXCJ0YXNrX2R1ZURhdGVcIik7XG4gIHRhc2tOb2RlLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuXG4gIHRhc2tOb2RlLmNsYXNzTGlzdC5hZGQoYCR7d29ya2luZ1Rhc2sucHJpb3JpdHl9YCk7XG59O1xuXG5jb25zdCBzZXR1cERlbGV0ZUJ1dHRvbiA9ICh3b3JraW5nVGFzaykgPT4ge1xuICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBidG4udGV4dENvbnRlbnQgPSBcIlhcIjtcblxuICBjb25zdCBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt3b3JraW5nVGFzay5pZH0gLnRhc2tCdXR0b25zYCk7XG4gIGRpdi5hcHBlbmRDaGlsZChidG4pO1xuXG4gIC8vIHdlIG5lZWQgdG8gb2J0YWluIHRhc2sgb2JqZWN0IGZyb20gdGhlIGJ1dHRvbiBpdHNlbGZcbiAgLy8gYmVjYXVzZSBpZiB3ZSB1c2UgYW55IHZhcmlhYmxlIGl0IHdvbid0IGRlbGV0ZSBwcm9wZXJseVxuICAvLyB0aGlzIGlzIGRvbmUgdmlhIG1hdGNoaW5nIGJ0biBjbGFzcyBuYW1lIHdoaWNoIGlzIGVxdWFsIHRvIHRoZSBpZFxuICAvLyBvZiB0aGUgdGFzayB0aGF0IHdlIGFyZSBzZWVraW5nIGluIGEgcHJvamVjdHMgb2JqZWN0XG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBjb25zdCB0YXNrSUQgPSBbLi4uZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNsYXNzTGlzdF1bMF07XG4gICAgY29uc3QgdGl0bGUgPSBnZXRUaXRsZSh0YXNrSUQpO1xuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWxlY3RlZFwiKS50ZXh0Q29udGVudDtcbiAgICBkZWxldGVUYXNrKGN1cnJlbnRQcm9qZWN0LCBwcm9qZWN0c1tjdXJyZW50UHJvamVjdF0udGFza3NbdGl0bGVdKTtcbiAgICBlcmFzZVRhc2tEKHRhc2tJRCk7XG4gIH0pO1xufTtcblxuZnVuY3Rpb24gc2V0dXBFZGl0Rm9ybSh0aXRsZSkge1xuICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VsZWN0ZWRcIikudGV4dENvbnRlbnQ7XG4gIC8vIHRhc2sgPSBUSEUgT05FIEJFSU5HIENMSUNLRURcbiAgY29uc3QgdGFzayA9IHByb2plY3RzW2N1cnJlbnRQcm9qZWN0XS50YXNrc1t0aXRsZV07XG5cbiAgLy8gZmlsbCB0aGUgZm9ybSBjb3JyZWN0bHlcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZVwiKS52YWx1ZSA9IHRhc2sudGl0bGU7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb25cIikudmFsdWUgPSB0YXNrLmRlc2NyaXB0aW9uO1xuICBsZXQgYXJyID0gdGFzay5kdWVEYXRlLnNwbGl0KFwiLVwiKTtcbiAgYXJyID0gW2FyclsyXSwgYXJyWzBdLCBhcnJbMV1dLmpvaW4oXCItXCIpO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZURhdGVcIikudmFsdWUgPSBhcnI7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJpb3JpdHlcIikudmFsdWUgPSB0YXNrLnByaW9yaXR5O1xuXG4gIC8vIGRlbGV0ZSwgYW5kIGxldCB0aGUgZ3JlZW4gYnV0dG9uIGJ1aWxkIGl0IGZvciB5b3UsIG5vIGluIHRoaXMgY2FzZVxuICAvLyBzaG91bGQgaGF2ZSBhIHNwZWNpYWwgZnVuY3Rpb25cbiAgZXJhc2VUYXNrRChwcm9qZWN0c1tjdXJyZW50UHJvamVjdF0udGFza3NbdGl0bGVdLmlkKTtcbiAgZGVsZXRlIHByb2plY3RzW2N1cnJlbnRQcm9qZWN0XS50YXNrc1t0aXRsZV07XG5cbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xuXG4gIGNvbnN0IHJidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlZFwiKTtcbiAgcmJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbiAgY29uc3QgZ2J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ3JlZW5cIik7XG4gIGdidXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ5ZWxsb3dcIjtcbiAgZ2J1dHRvbi50ZXh0Q29udGVudCA9IFwiRWRpdFwiO1xufVxuXG5jb25zdCBzZXR1cEVkaXRCdXR0b24gPSAod29ya2luZ1Rhc2spID0+IHtcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYnRuLnRleHRDb250ZW50ID0gXCJFZGl0XCI7XG5cbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGl2LmNsYXNzTGlzdC5hZGQoXCJ0YXNrQnV0dG9uc1wiKTtcblxuICBjb25zdCB0YXNrTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3dvcmtpbmdUYXNrLmlkfWApO1xuICB0YXNrTm9kZS5hcHBlbmRDaGlsZChkaXYpO1xuICBkaXYuYXBwZW5kQ2hpbGQoYnRuKTtcblxuICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgc2hvd0Zvcm1BbmRDb3ZlcigpO1xuICAgIHNldHVwRWRpdEZvcm0oZ2V0VGl0bGUoWy4uLmUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5jbGFzc0xpc3RdWzBdKSk7XG4gIH0pO1xufTtcblxuLy8gXCJDb250cm9sXCIgZnVuY3Rpb25cbmV4cG9ydCBmdW5jdGlvbiBzZXR1cFRhc2tEKHRhc2spIHtcbiAgZG9VSSh0YXNrKTtcbiAgc2V0dXBFZGl0QnV0dG9uKHRhc2spO1xuICBzZXR1cERlbGV0ZUJ1dHRvbih0YXNrKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dDb25maXJtYXRpb25Gb3JtKCkge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb25maXJtYXRpb25Gb3JtXCIpO1xuICBmb3JtLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgY29uc3QgY292ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvdmVyXCIpO1xuICBjb3Zlci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xufVxuXG4vLyBSUEIgLSByZW1vdmUgcHJvamVjdCBidXR0b25cbmV4cG9ydCBmdW5jdGlvbiBhZGRSUEIoKSB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyXCIpO1xuICBpZiAoaGVhZGVyLmxhc3RDaGlsZC50ZXh0Q29udGVudCAhPT0gXCJYXCIpIHtcbiAgICBjb25zdCBkZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGRlbEJ0bi50ZXh0Q29udGVudCA9IFwiWFwiO1xuICAgIGRlbEJ0bi5jbGFzc0xpc3QuYWRkKFwiUlBCXCIpO1xuICAgIGRlbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgc2hvd0NvbmZpcm1hdGlvbkZvcm0oKTtcbiAgICB9KTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoZGVsQnRuKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUlBCKCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlclwiKTtcbiAgY29uc3QgcnBiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5SUEJcIik7XG4gIGlmIChycGIpIHtcbiAgICBoZWFkZXIucmVtb3ZlQ2hpbGQocnBiKTtcbiAgfVxufVxuXG4vLyBmZWx0IGxpa2UgdGhpcyBkZXNlcnZlcyBhIHNlcGVyYXRlIG1vZHVsZSwgc2luY2UgaXQncyBub3QgcmVhbGx5IERPTSBtYW5pcC5cbmV4cG9ydCBjb25zdCBjaGFuZ2VQcm9qZWN0RCA9IChwcm9qZWN0TmFtZSkgPT4ge1xuICBlcmFzZVRhc2tzRCgpO1xuICBpZiAocHJvamVjdHNbcHJvamVjdE5hbWVdLnRhc2tzICE9PSB7fSkge1xuICAgIE9iamVjdC5rZXlzKHByb2plY3RzW3Byb2plY3ROYW1lXS50YXNrcykuZm9yRWFjaCgoZW0pID0+IHtcbiAgICAgIGFkZFRhc2tEKHByb2plY3RzW3Byb2plY3ROYW1lXS50YXNrc1tlbV0pO1xuICAgICAgc2V0dXBUYXNrRChwcm9qZWN0c1twcm9qZWN0TmFtZV0udGFza3NbZW1dLCBwcm9qZWN0TmFtZSk7XG4gICAgfSk7XG4gIH1cblxuICBpZiAocHJvamVjdE5hbWUgIT09IFwiSE9NRVwiKSB7XG4gICAgYWRkUlBCKCk7XG4gIH0gZWxzZSB7XG4gICAgcmVtb3ZlUlBCKCk7XG4gIH1cbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRQcm9qZWN0TGlzdGVuZXIoaWQpIHtcbiAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2lkfWApO1xuXG4gIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCB0ZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWxlY3RlZFwiKTtcbiAgICB0ZW1wLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCBcIjEwMjRcIikge1xuICAgICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2lkZWJhclwiKTtcbiAgICAgIGNvbnN0IG1vYmlsZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9iaWxlXCIpO1xuICAgICAgc2lkZWJhci5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG4gICAgICBtb2JpbGVCdG4uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIH1cbiAgICBjaGFuZ2VQcm9qZWN0RChwcm9qZWN0LnRleHRDb250ZW50KTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkNsaWNraW5nUlBCKCkge1xuICAvLyBmaXJzdCBjaGVjayBpZiB5b3UgYWN0dWFsbHkgd2FudCB0byBkZWxldGVcbiAgLy8gZ2V0IGlkLCBkZWxldGUgb24gY29udGVudCBhbmQgdGhlbiBzaWRlYmFyIHVzaW5nIGlkLiByZXR1cm4gdG8gaG9tZVxuICBjb25zdCBwcm9qZWN0TmFtZTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdGVkXCIpLnRleHRDb250ZW50O1xuICBjb25zdCBwcm9qZWN0SUQgPSBwcm9qZWN0c1twcm9qZWN0TmFtZTJdLmlkO1xuICBkZWxldGUgcHJvamVjdHNbcHJvamVjdE5hbWUyXTtcbiAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3Byb2plY3RJRH1gKTtcbiAgcHJvamVjdC5yZW1vdmUoKTtcblxuICBjb25zdCBob21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNQcjBcIik7XG4gIGhvbWUuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICBjaGFuZ2VQcm9qZWN0RChcIkhPTUVcIik7XG5cbiAgLy8gc2F2ZSBiZWNhdXNlIHlvdSByZW1vdmVkIGEgcHJvamVjdFxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG59XG5cbmFkZFByb2plY3RMaXN0ZW5lcihcIlByMFwiKTtcblxuLy8gbG9hZCBhbGwgcHJvamVjdHMgYW5kIHRhc2tzIGZyb20gdGhlIGxvY2FsIHN0b3JhZ2VcbmV4cG9ydCBjb25zdCBsb2FkRnJvbVN0b3JhZ2UgPSAoKSA9PiB7XG4gIE9iamVjdC5rZXlzKHByb2plY3RzKS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgaWYgKHByb2plY3QgIT09IFwiSE9NRVwiKSB7XG4gICAgICBhZGRQcm9qZWN0RChwcm9qZWN0c1twcm9qZWN0XSwgcHJvamVjdHNbcHJvamVjdF0uaWQpO1xuICAgICAgYWRkUHJvamVjdExpc3RlbmVyKHByb2plY3RzW3Byb2plY3RdLmlkKTtcbiAgICB9XG4gIH0pO1xuXG4gIE9iamVjdC5rZXlzKHByb2plY3RzLkhPTUUudGFza3MpLmZvckVhY2goKHRhc2spID0+IHtcbiAgICBhZGRUYXNrRChwcm9qZWN0cy5IT01FLnRhc2tzW3Rhc2tdKTtcbiAgICBzZXR1cFRhc2tEKHByb2plY3RzLkhPTUUudGFza3NbdGFza10sIFwiSE9NRVwiKTtcbiAgfSk7XG59O1xuXG4vLyBQcmV2aW91cyBzZXR1cFByb2plY3QgYW5kIHNldHVwVGFzayBoYXZlIG1lcmdlZCBkdWUgdG8gZXNsaW50IHNob3V0aW5nIGF0IG1lXG4vLyBmb3IgZGVwZW5kZW5jeSBjeWNsZSBlcnJvcnMuIEkgaGF2ZSBtZXJnZWQgdGhlbSB0b2dldGhlciBpbnRvIHRoaXMgc2V0dXBcbi8vIGZpbGUuIElkZWFsbHkgSSB3b3VsZCBmaW5kIGFub3RoZXIgd2F5IHRvIHNwaXQgdGhpcyBtb2R1bGUgaW50byBtb3JlIHBpZWNlcyxcbi8vIHRoaXMgd291bGQgYWxsIGhhdmUgYmVlbiBlYXNpZXIsIGlmIEkgaGFkIHVzZWQgZXNsaW50IGZyb20gc3RhcnQsIHNvIHdvcmsgdG9cbi8vIGJlIGRvbmUgaGVyZSwgaWYgbW9yZSBjb2RlIGlzIHRvIGJlIGluY2x1ZGVkLCBlc3BlY2lhbGx5IGNvZGUgdGhhdCBpcyByZWxhdGVkXG4vLyB0byBhbnkga2luZCBvZiBzZXR1cC5cbiIsImZ1bmN0aW9uIHN0b3JhZ2VBdmFpbGFibGUodHlwZSkge1xuICBsZXQgc3RvcmFnZTtcbiAgdHJ5IHtcbiAgICBzdG9yYWdlID0gd2luZG93W3R5cGVdO1xuICAgIGNvbnN0IHggPSBcIl9fc3RvcmFnZV90ZXN0X19cIjtcbiAgICBzdG9yYWdlLnNldEl0ZW0oeCwgeCk7XG4gICAgc3RvcmFnZS5yZW1vdmVJdGVtKHgpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIGUgaW5zdGFuY2VvZiBET01FeGNlcHRpb24gJiZcbiAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgIChlLmNvZGUgPT09IDIyIHx8XG4gICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgZS5jb2RlID09PSAxMDE0IHx8XG4gICAgICAgIC8vIHRlc3QgbmFtZSBmaWVsZCB0b28sIGJlY2F1c2UgY29kZSBtaWdodCBub3QgYmUgcHJlc2VudFxuICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAgIGUubmFtZSA9PT0gXCJRdW90YUV4Y2VlZGVkRXJyb3JcIiB8fFxuICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgIGUubmFtZSA9PT0gXCJOU19FUlJPUl9ET01fUVVPVEFfUkVBQ0hFRFwiKSAmJlxuICAgICAgLy8gYWNrbm93bGVkZ2UgUXVvdGFFeGNlZWRlZEVycm9yIG9ubHkgaWYgdGhlcmUncyBzb21ldGhpbmcgYWxyZWFkeSBzdG9yZWRcbiAgICAgIHN0b3JhZ2UgJiZcbiAgICAgIHN0b3JhZ2UubGVuZ3RoICE9PSAwXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgcHJvamVjdHMgPSB7XG4gIEhPTUU6IHtcbiAgICB0YXNrczoge30sXG4gICAgaWQ6IFwiUHIwXCIsXG4gIH0sXG59O1xuXG5pZiAoc3RvcmFnZUF2YWlsYWJsZSkge1xuICBsZXQgcmV0cmlldmVkT2JqZWN0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKTtcbiAgaWYgKHJldHJpZXZlZE9iamVjdCA9PT0gbnVsbCkge1xuICAgIHJldHJpZXZlZE9iamVjdCA9IEpTT04uc3RyaW5naWZ5KHt9KTtcbiAgfVxuICByZXRyaWV2ZWRPYmplY3QgPSBKU09OLnBhcnNlKHJldHJpZXZlZE9iamVjdCk7XG4gIC8vIGZvciAoY29uc3QgZW0gb2YgT2JqZWN0LmtleXMocmV0cmlldmVkT2JqZWN0KSkge1xuICAvLyAgIHByb2plY3RzW2VtXSA9IHJldHJpZXZlZE9iamVjdFtlbV07XG4gIC8vIH1cbiAgT2JqZWN0LmtleXMocmV0cmlldmVkT2JqZWN0KS5mb3JFYWNoKChlbSkgPT4ge1xuICAgIHByb2plY3RzW2VtXSA9IHJldHJpZXZlZE9iamVjdFtlbV07XG4gIH0pO1xuICAvLyBwcm9qZWN0cyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpO1xufVxuXG5leHBvcnQgY29uc3QgdG9kbyA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBpZCkgPT4gKHtcbiAgdGl0bGUsXG4gIGRlc2NyaXB0aW9uLFxuICBkdWVEYXRlLFxuICBwcmlvcml0eSxcbiAgaWQsXG59KTtcblxuZXhwb3J0IGNvbnN0IHByb2plY3RGYWN0b3J5ID0gKHRpdGxlIC8qICwgZHVlRGF0ZSAqLywgaWQpID0+ICh7XG4gIHRpdGxlIC8qICwgZHVlZURhdGUgKi8sXG4gIGlkLFxufSk7XG4iLCJpbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL3RvZG9cIjtcbmltcG9ydCB7IGV4cGlyZUNoZWNrIH0gZnJvbSBcIi4vZGF0ZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tEdWVEYXRlKCkge1xuICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VsZWN0ZWRcIikudGV4dENvbnRlbnQ7XG4gIE9iamVjdC5rZXlzKHByb2plY3RzW2N1cnJlbnRQcm9qZWN0XS50YXNrcykuZm9yRWFjaCgodGFza05hbWUpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYC4ke3Byb2plY3RzW2N1cnJlbnRQcm9qZWN0XS50YXNrc1t0YXNrTmFtZV0uaWR9YFxuICAgICk7XG4gICAgaWYgKGV4cGlyZUNoZWNrKHByb2plY3RzW2N1cnJlbnRQcm9qZWN0XS50YXNrc1t0YXNrTmFtZV0pKSB7XG4gICAgICBkaXYuY2xhc3NMaXN0LmFkZChcImV4cGlyZWRcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRpdi5jbGFzc0xpc3QucmVtb3ZlKFwiZXhwaXJlZFwiKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8qXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgICBpZiAocHJval9leHBpcmVDaGVjaygpKSB7XG4gICAgICAgIGNvbnRlbnQuc3R5bGUuYm9yZGVyVG9wID0gXCIxdmggcmVkIHNvbGlkXCI7XG4gICAgICAgIGNvbnRlbnQuc3R5bGUuYm9yZGVyTGVmdCA9IFwiMXZoIHJlZCBzb2xpZFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRlbnQuc3R5bGUuYm9yZGVyID0gXCJub25lXCI7XG4gICAgfSAqL1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGl0bGUodGFza0lEKSB7XG4gIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWxlY3RlZFwiKS50ZXh0Q29udGVudDtcbiAgbGV0IHRpdGxlO1xuXG4gIE9iamVjdC5rZXlzKHByb2plY3RzW2N1cnJlbnRQcm9qZWN0XS50YXNrcykuZm9yRWFjaCgodGFza05hbWUpID0+IHtcbiAgICBpZiAocHJvamVjdHNbY3VycmVudFByb2plY3RdLnRhc2tzW3Rhc2tOYW1lXS5pZCA9PT0gdGFza0lEKSB7XG4gICAgICB0aXRsZSA9IHByb2plY3RzW2N1cnJlbnRQcm9qZWN0XS50YXNrc1t0YXNrTmFtZV0udGl0bGU7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHRpdGxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlVGFzayhwcm9qZWN0LCB0YXNrKSB7XG4gIGRlbGV0ZSBwcm9qZWN0c1twcm9qZWN0XS50YXNrc1t0YXNrLnRpdGxlXTtcbiAgLy8gd2UgYXJlIGFjdHVhbGx5IGRlbGV0aW5nLCBub3QganVzdCBlcmFzaW5nIGZyb20gc2NyZWVuISEhXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dGb3JtQW5kQ292ZXIoKSB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tGb3JtXCIpO1xuICBjb25zdCBjb3ZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY292ZXJcIik7XG4gIGNvdmVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIGZvcm0uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBcIi4vZXZlbnRMaXN0ZW5lcnNcIjtcbmltcG9ydCBcIi4vZGF0ZVwiO1xuaW1wb3J0IFwiLi9tb2JpbGVcIjtcbmltcG9ydCB7IGxvYWRGcm9tU3RvcmFnZSB9IGZyb20gXCIuL3NldHVwXCI7XG5cbmxvYWRGcm9tU3RvcmFnZSgpO1xuLypcbiAgICBUT0RPOlxuICAgIC0gQ29uZmlndXJlIGRhdGVzIHByb3Blcmx5XG4gICAgICAgIFR3byB0eXBlcyBvZiB0YXNrczpcbiAgICAgICAgICAgIDEuIFNvbWV0aGluZyB0aGF0IG5lZWRzIHRvIGJlIGRvbmUgb24gYSBzcGVjaWZpYyBkYXkuIEl0IGNhbiBoYXZlIGFcbiAgICAgICAgICAgICAgICBkdWVEYXRlL2R1ZUhvdXIsIGJ1dCBpdCdzIG9wdGlvbmFsLiBJdCBvbmx5IHNob3dzIG9uIG9uZSBkYXlcbiAgICAgICAgICAgIDIuIFNvbWV0aGluZyB0aGF0IG5lZWRzIHRvIGJlIGRvbmUgdGlsbCBhIHNwZWNpZmllZCBkdWVEYXRlLiBTbyBpdFxuICAgICAgICAgICAgICAgIHNob3dzIGV2ZXJ5IGRheSB1bnRpbCB0aGUgZHVlRGF0ZS4gRXhwaXJlZCBzZWN0aW9uIG1pZ2h0IGJlXG4gICAgICAgICAgICAgICAgb2YgdXNlLlxuXG4gICAgICAgICAgICBJZGVhOlxuICAgICAgICAgICAgQWx3YXlzIHNob3cgYWxsIHRoYXQgY2FuIGJlIHNob3duLiBJZiBpdCBoYXBwZW5zIHRoYXQgb25lIG9mIHRoZW1cbiAgICAgICAgICAgIGV4cGlyZWQgc2ltcGx5IG5lZG90ZSBzbyB1c2luZyByZWQgYm9yZGVyIG9yIChleHBpcmVkKSB0YWcuXG4gICAgICAgICAgICBJdCBjYW4gYmUgc2hvd24gaWYgaXRzIHN0YXJ0IGRheSBpcyB0b2RheSBvciBlYXJsaWVyLiAtLy8vLVxuXG4gICAgLSBBZGQgYSBmb3JtIGZvciB1c2VyIGlucHV0IC0vLy8tXG4gICAgLSBUYXNrIGNoYW5nZXM6XG4gICAgICAgICAgICAxKSBTdHlsZSBjaGFuZ2VzOiBSZWRvIHRhc2sgc3F1YXJlcyAtLy8vLSwgbWF5YmUgbm90XG4gICAgICAgICAgICAyKSBUYXNrIGRlc2NyaXB0aW9uL2VkaXQgc3lzdGVtIC0vLy8tXG4gICAgICAgICAgICAzKSBNYWtlIHByaW9yaXRlcyBtYXR0ZXIsIGJvcmRlciBjb2xvciAtLy8vLVxuICAgIC0gRklYIHJlbW92ZSBidXR0b24sIG5hbWVseSB3aGVuIHlvdSBkb24ndCBpbnB1dCBhbnl0aGluZyBpbiB0aGUgZm9ybVxuICAgICAgICBtdWx0aXBsZSB0YXNrcyBhcmUgbWFkZSBldmVudCB0aG91Z2ggdGhlcmUgaXMgb25seSBvbmUgc2F2ZWQgaW4gdGhlXG4gICAgICAgIG9iamVjdC4gaXQgc2hvd3MgY29ycmVjdGx5IGFmdGVyIHJlZnJlc2ggLS8vLy1cbiAgICAtIEZJWDogcHJldmVudCBmcm9tIGNoYW5naW5nIHByb2plY3RzIHdoZW4gdGhlIGZvcm0gaXMgb3BlbmVkLFxuICAgICAgICBjb25zaWRlciBhZGRpbmcgYSBjb3ZlciBqdXN0IGxpa2UgaW4gdGhlIGxpYnJhcnkgcHJvamVjdCAtLy8vLVxuICAgIC0gRklYOiBwcm9qZWN0L3Nob3J0Y3V0IG5hbWUgbGV0dGVycyBnb2luZyB0byBuZXcgbGluZSwgaW5zdGVhZCBvbmx5IHdvcmRzXG4gICAgICAgIC0vLy8tIGJ1dCBjYW4ndCBmaXggbG9uZyBuYW1lcywgbWF5YmUgZmluZCBhIHdheSB0byBhZGQgXCItXCIgYXQgZW5kIHdoZW5cbiAgICAgICAgYnJlYWtpbmdcbiAgICAtIEFkZCBMb2NhbCBzdG9yYWdlIC0vLy8tXG4gICAgLSBBZGQgYSBjb25maXJtYXRpb24gZm9ybSB3aGVuIGF0dGVtcHRpbmcgdG8gZGVsZXRlIGEgcHJvamVjdCAtLy8vLVxuICAgIC0gQWRkIG1lZGlhIHF1ZXJpZXNcbiAgICAtIGNoYW5nZSBwcm9qZWN0SWQgYW5kIGlkIHRvIGNhbGN1bGF0ZSBpZCBiYXNlZCBvbiB3aGF0IGlzIHRoZSBiaWdnZXN0IGlkXG4gICAgICAgIHByZXNlbnQgb24gdGhlIGN1cnJlbnQgcHJvamVjdC9wcm9qZWN0cyBhbmQgdGhlbiBhZGQgMSwgdGhpcyB3YXlcbiAgICAgICAgaXQgaXMgbm90IGJhc2VkIG9uIGxlbmd0aCBhbmQgZHVwZSBidWdzIGRvIG5vdCBhcHBlYXIgLS8vLy1cbiAgICAtIEZpeCBkYXRlcyBmb3IgZWRpdGluZyEgLS8vLy1cbiAgICAtIERvIHNvbWV0aGluZyB3aXRoIHByb2plY3QgZGF0ZXMsIG1heWJlIGNvbnRlbnQgYm9yZGVyIHRvIHNpZ25pZnkgdGhlIGxhdGVcbiAgICAgICAgcHJvamVjdCAtLy8vLVxuICAgIC0gTWFrZSBhIHJlZnJlc2ggZnVuY3Rpb24sIHRoYXQgcmVsb2FkcywgbWF5YmUganVzdCBjaGFuZ2VQcm9qZWN0IHNvIHlvdVxuICAgICAgICBkb24ndCBoYXZlIHRvIGxvY2F0aW9uLnJlbG9hZCgpXG4gICAgLSBUZXh0QXJlYSBleHBhbmRpbmcgRDogLS8vLy1cbiAgICAtIGNvbnNpZGVyIG1vcmUgY29scyBhbmQgcm93IGZvciBUZXh0QXJlYSAtLy8vLVxuICAgIC0gUmV0aGluayB0aGUgbmVlZCBmb3IgZHVlRGF0ZSBpbiBwcm9qZWN0LCBJIHRoaW5rIG5vdCBuZWVkZWQhISAtLy8vLVxuICAgIC0gcHJldmVudCB0aXRsZSBuYW1lIGR1cGxpY2F0aW9uIG9uIGFkZGluZyB0YXNrLCB0aGUgZm9ybSBnb2VzIGF3YXkgZm9yIHNvbWVcbiAgICAgICAgcmVhc29uIC0vLy8tXG4gICAgLSBnaG9zdCB0YXNrIGFwcGVhcmluZzogYnVnIC0vLy8tXG4gICAgLSBtYWtlIHJlZCBidXR0b24gcmVjb3ZlciB0aGUgdGFzaywgeW91IGhhdmUgYWxsIHRoZSBkYXRhIG5lZWRlZCBpbiB0aGUgZm9ybVxuICAgICAgICAsIGluc3RlYWQgcmV3b3JrZWQgdG8gaW5jbHVkZSBvbmx5IGVkaXQgYnV0dG9uIC0vLy8tXG4gICAgLSBhZGQga2V5YmluZHMsIGVzcGVjaWFsbHkgZW50ZXIgaW5zdGVhZCBvZiBtb3VzZSBjbGljayAtLy8vLVxuICAgIC0gQ0xFQU4gQ09ERSEhISEhIHlvdSBrbm93IGN1cnJlbnRQcm9qZWN0IHJlcGVhdCBhbGwgdGhlIHRpbWUgYW5kIG90aGVyIGphenpcbiAgICAtIGV4cGVyaW1lbnQgd2l0aCB3b3JraW5nX3Rhc2ssIHRyeSB0byByZW1vdmUgLS8vLy1cbiAgICAtIHJld29yayBtb2R1bGVzLCBtYXliZSBubyBuZWVkIHRvIGdlbmVyYWxpemUgZXZlcnl0aGluZywgZXhwZXJpbWVudFxuICAgIC0gY2xlYW5lciBjc3MsIG1vcmUgY29tbWVudHMsIGNvbnNpZGVyIGFuaW1hdGlvbnMvdHJhbnNmb3JtYXRpb25zIGZvclxuICAgICAgICBjb25zaWRlciByZW1ha2luZyBjc3MgZ3JvdW5kIHVwLCBtYWtlIGl0IHdvcmsgb24gbW9iaWxlIGZpcnN0XG4gICAgLSBkZWxldGUgdGhlIHRhc2sgb25seSBhZnRlciB0aGUgZWRpdCBmb3JtIGlzIHN1Ym1pdHRlZCwgcG90ZW50aWFsbHkgdXNlXG4gICAgYXN5bmMvd2FpdCBmdW5jdGlvblxuICAgIC0gcmV3b3JrIG1vYmlsZSBkZXNpZ24sIHBlcmhhcHMgYWRkVGFzayBvbiB0b3AgYW5kIGNhbGFuZGVyIG9uIGJvdHRvbSxcbiAgICBtaWdodCBmZWVsIG1vcmUgbmF0dXJhbCAtLy8vLVxuXG4gICAgUG90ZW50aWFsIGJ1Z3M6XG4gICAgICAgIFNtYWxsIGJsYW5rIHJlY3RhbmdsZSBhcHBlYXJpbmcgc29tZXRpbWVzIHdoZW4gcmVzaXppbmcuIFJlZnJlc2ggZml4ZXMuXG4qL1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9