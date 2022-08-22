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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  --neutral: #f5f5f5;\n  --violet: white;\n  --stone: #6e6279;\n  --zinc: #3f3f46;\n  --hover: rgb(69, 31, 83);\n}\n\nbody,\nhtml {\n  height: 100%;\n  width: 100%;\n  overflow-y: auto;\n}\n\nbody {\n  display: flex;\n  position: fixed;\n}\n\n#sidebar {\n  flex: 1;\n  background-color: var(--zinc);\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  width: 100%;\n}\n\n#sidebar > div {\n  font-size: 6vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.home {\n  flex: 1;\n  border-bottom: 5px black solid;\n  background-color: var(--stone);\n  user-select: none;\n}\n\n#projects {\n  flex: 7;\n}\n\n.home:hover {\n  background-color: var(--hover);\n  cursor: pointer;\n}\n\n#content {\n  flex: 3;\n  background-color: grey;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: column-reverse;\n  height: 100vh;\n  width: 100%;\n}\n\n.expand {\n  display: flex;\n  flex-direction: column;\n}\n\n.expand > div:first-child,\n#addProject {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.expand > * {\n  width: 100%;\n}\n\n#addProject {\n  border-top: 3px solid black;\n  background-color: var(--stone);\n  user-select: none;\n}\n\n#addProject:hover {\n  cursor: pointer;\n  background-color: var(--hover);\n}\n\n.expand > div:first-child {\n  border-bottom: 3px solid black;\n}\n\n.expand .shortcut {\n  background-color: var(--stone);\n  padding: 5%;\n  border-bottom: 3px solid black;\n  word-break: break-word;\n  user-select: none;\n  cursor: pointer;\n  display: flex;\n  justify-content: space-between;\n}\n\n.expand .shortcuts {\n  overflow-y: auto;\n  max-height: 70vh;\n}\n\n.shortcut:hover {\n  background-color: var(--hover);\n  cursor: pointer;\n}\n\n.expand > div {\n  flex: 5;\n  text-align: center;\n}\n\n#tasks {\n  flex: 1;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(35vh, 1fr));\n  grid-gap: 2vh;\n  overflow-y: auto;\n  width: 100%;\n  padding: 3%;\n}\n\n#tasks > div {\n  height: 35vh;\n  background: rgb(0, 147, 223);\n  background: radial-gradient(\n    circle,\n    rgba(0, 147, 223, 1) 0%,\n    rgba(211, 239, 242, 1) 49%,\n    rgba(17, 16, 16, 1) 100%\n  );\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  border-radius: 10%;\n}\n\n#tasks > div > div {\n  word-break: break-word;\n  font-size: 3vh;\n}\n\n.Must {\n  background: rgb(232, 5, 5);\n  background: radial-gradient(\n    circle,\n    rgba(232, 5, 5, 1) 0%,\n    rgba(213, 144, 144, 1) 49%,\n    rgba(17, 16, 16, 1) 100%\n  ) !important;\n}\n\n.Necessary {\n  background: rgb(232, 107, 5);\n  background: radial-gradient(\n    circle,\n    rgba(232, 107, 5, 1) 0%,\n    rgba(235, 200, 163, 1) 49%,\n    rgba(17, 16, 16, 1) 100%\n  ) !important;\n}\n\n.Maybe {\n  background: rgb(193, 232, 5);\n  background: radial-gradient(\n    circle,\n    rgba(193, 232, 5, 1) 0%,\n    rgba(224, 235, 163, 1) 49%,\n    rgba(17, 16, 16, 1) 100%\n  ) !important;\n}\n\n#content > *:not(#tasks) {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n\n.header {\n  font-size: 40px;\n}\n\n.header .RPB {\n  background-color: red;\n  position: absolute;\n  height: max(55px, 7vh);\n  width: max(55px, 7vh);\n  font-size: max(40px, 3rem);\n  right: 0;\n  top: 0;\n  color: rgb(85, 3, 19);\n}\n\n#addTask {\n  display: flex;\n  align-items: center;\n  font-size: max(40px, 3rem);\n  color: white;\n  background-color: black;\n  user-select: none;\n  height: max(55px, 7vh);\n}\n\n#addTask:hover {\n  opacity: 0.5;\n  cursor: pointer;\n}\n\n#addTask:active {\n  opacity: 0.2;\n}\n\n.selected {\n  border-right: 10px groove var(--hover);\n}\n\n#date {\n  width: 40vh !important;\n  font-size: 5vh;\n  border: none;\n  background: grey;\n}\n\n.calLeft {\n  margin-right: 2vh;\n}\n\n.calRight {\n  margin-left: 2vh;\n}\n\n.navigatecal {\n  font-size: 8vh;\n  cursor: pointer;\n  user-select: none;\n}\n\n#taskForm {\n  width: 65vh;\n  height: 65vh;\n  left: calc(50% - 10vh);\n  top: calc(50% - 30vh);\n  padding-left: 5%;\n  padding-right: 5%;\n  font-size: 3vh;\n}\n\n#projectForm {\n  width: 55vh;\n  height: 25vh;\n  left: calc(50% - 10vh);\n  top: calc(50% - 30vh);\n  padding: 0 2% 0 2%;\n  font-size: 3vh;\n}\n\n#confirmationForm {\n  width: 50vh;\n  height: 35vh;\n  left: calc(50% - 10vh);\n  top: calc(50% - 30vh);\n  padding: 0 3% 0 3%;\n  font-size: 3vh;\n}\n\n#projectForm,\n#taskForm,\n#confirmationForm {\n  position: absolute;\n  z-index: 2;\n  background-color: var(--stone);\n  display: none;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: flex-start;\n  border: 5px var(--hover) solid;\n}\n\n.cover {\n  position: fixed;\n  top: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.6);\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  display: none;\n}\n\n#taskForm div,\n#projectForm div {\n  display: flex;\n}\n\n#taskForm label,\n#projectForm label {\n  flex: 1;\n  min-width: 20vh;\n  font-size: 3vh;\n}\n\n#taskForm input,\n#taskForm select {\n  flex: 6;\n  min-width: 30vh;\n}\n\n#description,\n#taskForm input,\n#priority,\n#proj_title,\n#proj_dueDate {\n  font-size: 2vh;\n  padding: 1%;\n}\n\n#description {\n  height: 20vh;\n  max-width: 30vh;\n  resize: none;\n}\n\n.redBtn {\n  background-color: red;\n  margin-right: 25%;\n}\n\n.greenBtn {\n  background-color: rgb(47, 255, 47);\n}\n\n.redBtn,\n.greenBtn {\n  font-size: 3vh;\n  padding: 10%;\n  width: 15vh;\n  height: 0.5vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.fbtn {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n\n.expired {\n  border: 5px solid red;\n}\n\n.task_desc {\n  overflow-y: auto;\n  flex: 6;\n  font-size: 1.5rem;\n}\n\n.task_dueDate {\n  flex: 1;\n}\n\n.task_title,\n.task_desc,\n.task_dueDate {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.212);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n}\n\n.task_title {\n  flex: 1;\n  padding: 0 6%;\n}\n\n.taskButtons > button {\n  font-size: 3vh;\n  color: white;\n  background-color: black;\n  opacity: 0.5;\n}\n\n.mobile {\n  display: none;\n}\n\n@media only screen and (max-width: 1100px) {\n  body,\n  html {\n    height: 100%;\n  }\n\n  .mobile {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 55px;\n    height: 55px;\n    color: black;\n    overflow: hidden;\n    background-color: black;\n    border-right: 1px solid white;\n  }\n\n  .mobile:hover {\n    cursor: pointer;\n  }\n\n  #sidebar {\n    position: absolute;\n    z-index: 1;\n    left: 0;\n    max-height: 100vh;\n    width: 0px;\n    overflow: hidden;\n    transition: width 300ms ease-in-out;\n  }\n\n  #sidebar.visible {\n    width: min(75%, 300px);\n  }\n\n  #projectForm,\n  #taskForm,\n  #confirmationForm {\n    position: absolute;\n    margin-left: auto;\n    margin-right: auto;\n    left: 0;\n    right: 0;\n    text-align: center;\n    max-width: 100%;\n    width: 400px;\n    height: 200px;\n  }\n\n  #taskForm,\n  #projectForm {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    min-height: 100%;\n    height: min-content;\n    text-align: center;\n    align-items: center;\n  }\n\n  #projectForm label {\n    max-height: 50px;\n  }\n\n  #projectForm > div {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n\n  #projectForm > div > * {\n    font-size: 2rem;\n    width: 90%;\n  }\n\n  #taskForm label {\n    font-size: 1.5rem;\n  }\n\n  #taskForm #title,\n  #taskForm #dueDate {\n    font-size: 1rem;\n    height: 50px;\n    width: 90%;\n  }\n\n  #description {\n    width: 90%;\n    max-width: none;\n    font-size: 1rem;\n    min-height: 200px;\n  }\n\n  #priority {\n    font-size: 1rem;\n    width: 90%;\n    justify-content: center;\n  }\n\n  #taskForm > div {\n    position: relative;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin-bottom: 20px;\n  }\n\n  .fbtn {\n    display: flex;\n    flex-direction: row !important;\n  }\n\n  .fbtn > * {\n    font-size: 1.7rem;\n  }\n\n  .RPB {\n    font-size: 40px;\n    z-index: 1;\n  }\n\n  #date {\n    max-width: 250px;\n    font-size: 2rem;\n  }\n\n  #addTask {\n    margin: 0 100px;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;EACtB,kBAAkB;EAClB,eAAe;EACf,gBAAgB;EAChB,eAAe;EACf,wBAAwB;AAC1B;;AAEA;;EAEE,YAAY;EACZ,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,OAAO;EACP,6BAA6B;EAC7B,aAAa;EACb,sBAAsB;EACtB,aAAa;EACb,WAAW;AACb;;AAEA;EACE,cAAc;EACd,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,OAAO;EACP,8BAA8B;EAC9B,8BAA8B;EAC9B,iBAAiB;AACnB;;AAEA;EACE,OAAO;AACT;;AAEA;EACE,8BAA8B;EAC9B,eAAe;AACjB;;AAEA;EACE,OAAO;EACP,sBAAsB;EACtB,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,8BAA8B;EAC9B,aAAa;EACb,WAAW;AACb;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;;EAEE,OAAO;EACP,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,2BAA2B;EAC3B,8BAA8B;EAC9B,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,8BAA8B;AAChC;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,8BAA8B;EAC9B,WAAW;EACX,8BAA8B;EAC9B,sBAAsB;EACtB,iBAAiB;EACjB,eAAe;EACf,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,8BAA8B;EAC9B,eAAe;AACjB;;AAEA;EACE,OAAO;EACP,kBAAkB;AACpB;;AAEA;EACE,OAAO;EACP,aAAa;EACb,0DAA0D;EAC1D,aAAa;EACb,gBAAgB;EAChB,WAAW;EACX,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,4BAA4B;EAC5B;;;;;GAKC;EACD,aAAa;EACb,sBAAsB;EACtB,6BAA6B;EAC7B,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,sBAAsB;EACtB,cAAc;AAChB;;AAEA;EACE,0BAA0B;EAC1B;;;;;cAKY;AACd;;AAEA;EACE,4BAA4B;EAC5B;;;;;cAKY;AACd;;AAEA;EACE,4BAA4B;EAC5B;;;;;cAKY;AACd;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,WAAW;AACb;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,sBAAsB;EACtB,qBAAqB;EACrB,0BAA0B;EAC1B,QAAQ;EACR,MAAM;EACN,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,0BAA0B;EAC1B,YAAY;EACZ,uBAAuB;EACvB,iBAAiB;EACjB,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,sBAAsB;EACtB,cAAc;EACd,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,cAAc;EACd,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,sBAAsB;EACtB,qBAAqB;EACrB,gBAAgB;EAChB,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,sBAAsB;EACtB,qBAAqB;EACrB,kBAAkB;EAClB,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,sBAAsB;EACtB,qBAAqB;EACrB,kBAAkB;EAClB,cAAc;AAChB;;AAEA;;;EAGE,kBAAkB;EAClB,UAAU;EACV,8BAA8B;EAC9B,aAAa;EACb,sBAAsB;EACtB,6BAA6B;EAC7B,uBAAuB;EACvB,8BAA8B;AAChC;;AAEA;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,8BAA8B;EAC9B,UAAU;EACV,WAAW;EACX,YAAY;EACZ,aAAa;AACf;;AAEA;;EAEE,aAAa;AACf;;AAEA;;EAEE,OAAO;EACP,eAAe;EACf,cAAc;AAChB;;AAEA;;EAEE,OAAO;EACP,eAAe;AACjB;;AAEA;;;;;EAKE,cAAc;EACd,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,YAAY;AACd;;AAEA;EACE,qBAAqB;EACrB,iBAAiB;AACnB;;AAEA;EACE,kCAAkC;AACpC;;AAEA;;EAEE,cAAc;EACd,YAAY;EACZ,WAAW;EACX,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,WAAW;AACb;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,gBAAgB;EAChB,OAAO;EACP,iBAAiB;AACnB;;AAEA;EACE,OAAO;AACT;;AAEA;;;EAGE,6CAA6C;EAC7C,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,OAAO;EACP,aAAa;AACf;;AAEA;EACE,cAAc;EACd,YAAY;EACZ,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA;EACE;;IAEE,YAAY;EACd;;EAEA;IACE,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;IAClB,UAAU;IACV,OAAO;IACP,MAAM;IACN,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,gBAAgB;IAChB,uBAAuB;IACvB,6BAA6B;EAC/B;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,kBAAkB;IAClB,UAAU;IACV,OAAO;IACP,iBAAiB;IACjB,UAAU;IACV,gBAAgB;IAChB,mCAAmC;EACrC;;EAEA;IACE,sBAAsB;EACxB;;EAEA;;;IAGE,kBAAkB;IAClB,iBAAiB;IACjB,kBAAkB;IAClB,OAAO;IACP,QAAQ;IACR,kBAAkB;IAClB,eAAe;IACf,YAAY;IACZ,aAAa;EACf;;EAEA;;IAEE,kBAAkB;IAClB,OAAO;IACP,MAAM;IACN,WAAW;IACX,gBAAgB;IAChB,mBAAmB;IACnB,kBAAkB;IAClB,mBAAmB;EACrB;;EAEA;IACE,gBAAgB;EAClB;;EAEA;IACE,WAAW;IACX,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;EACrB;;EAEA;IACE,eAAe;IACf,UAAU;EACZ;;EAEA;IACE,iBAAiB;EACnB;;EAEA;;IAEE,eAAe;IACf,YAAY;IACZ,UAAU;EACZ;;EAEA;IACE,UAAU;IACV,eAAe;IACf,eAAe;IACf,iBAAiB;EACnB;;EAEA;IACE,eAAe;IACf,UAAU;IACV,uBAAuB;EACzB;;EAEA;IACE,kBAAkB;IAClB,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,mBAAmB;EACrB;;EAEA;IACE,aAAa;IACb,8BAA8B;EAChC;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,eAAe;IACf,UAAU;EACZ;;EAEA;IACE,gBAAgB;IAChB,eAAe;EACjB;;EAEA;IACE,eAAe;EACjB;AACF","sourcesContent":["* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  --neutral: #f5f5f5;\n  --violet: white;\n  --stone: #6e6279;\n  --zinc: #3f3f46;\n  --hover: rgb(69, 31, 83);\n}\n\nbody,\nhtml {\n  height: 100%;\n  width: 100%;\n  overflow-y: auto;\n}\n\nbody {\n  display: flex;\n  position: fixed;\n}\n\n#sidebar {\n  flex: 1;\n  background-color: var(--zinc);\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  width: 100%;\n}\n\n#sidebar > div {\n  font-size: 6vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.home {\n  flex: 1;\n  border-bottom: 5px black solid;\n  background-color: var(--stone);\n  user-select: none;\n}\n\n#projects {\n  flex: 7;\n}\n\n.home:hover {\n  background-color: var(--hover);\n  cursor: pointer;\n}\n\n#content {\n  flex: 3;\n  background-color: grey;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: column-reverse;\n  height: 100vh;\n  width: 100%;\n}\n\n.expand {\n  display: flex;\n  flex-direction: column;\n}\n\n.expand > div:first-child,\n#addProject {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.expand > * {\n  width: 100%;\n}\n\n#addProject {\n  border-top: 3px solid black;\n  background-color: var(--stone);\n  user-select: none;\n}\n\n#addProject:hover {\n  cursor: pointer;\n  background-color: var(--hover);\n}\n\n.expand > div:first-child {\n  border-bottom: 3px solid black;\n}\n\n.expand .shortcut {\n  background-color: var(--stone);\n  padding: 5%;\n  border-bottom: 3px solid black;\n  word-break: break-word;\n  user-select: none;\n  cursor: pointer;\n  display: flex;\n  justify-content: space-between;\n}\n\n.expand .shortcuts {\n  overflow-y: auto;\n  max-height: 70vh;\n}\n\n.shortcut:hover {\n  background-color: var(--hover);\n  cursor: pointer;\n}\n\n.expand > div {\n  flex: 5;\n  text-align: center;\n}\n\n#tasks {\n  flex: 1;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(35vh, 1fr));\n  grid-gap: 2vh;\n  overflow-y: auto;\n  width: 100%;\n  padding: 3%;\n}\n\n#tasks > div {\n  height: 35vh;\n  background: rgb(0, 147, 223);\n  background: radial-gradient(\n    circle,\n    rgba(0, 147, 223, 1) 0%,\n    rgba(211, 239, 242, 1) 49%,\n    rgba(17, 16, 16, 1) 100%\n  );\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  border-radius: 10%;\n}\n\n#tasks > div > div {\n  word-break: break-word;\n  font-size: 3vh;\n}\n\n.Must {\n  background: rgb(232, 5, 5);\n  background: radial-gradient(\n    circle,\n    rgba(232, 5, 5, 1) 0%,\n    rgba(213, 144, 144, 1) 49%,\n    rgba(17, 16, 16, 1) 100%\n  ) !important;\n}\n\n.Necessary {\n  background: rgb(232, 107, 5);\n  background: radial-gradient(\n    circle,\n    rgba(232, 107, 5, 1) 0%,\n    rgba(235, 200, 163, 1) 49%,\n    rgba(17, 16, 16, 1) 100%\n  ) !important;\n}\n\n.Maybe {\n  background: rgb(193, 232, 5);\n  background: radial-gradient(\n    circle,\n    rgba(193, 232, 5, 1) 0%,\n    rgba(224, 235, 163, 1) 49%,\n    rgba(17, 16, 16, 1) 100%\n  ) !important;\n}\n\n#content > *:not(#tasks) {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n\n.header {\n  font-size: 40px;\n}\n\n.header .RPB {\n  background-color: red;\n  position: absolute;\n  height: max(55px, 7vh);\n  width: max(55px, 7vh);\n  font-size: max(40px, 3rem);\n  right: 0;\n  top: 0;\n  color: rgb(85, 3, 19);\n}\n\n#addTask {\n  display: flex;\n  align-items: center;\n  font-size: max(40px, 3rem);\n  color: white;\n  background-color: black;\n  user-select: none;\n  height: max(55px, 7vh);\n}\n\n#addTask:hover {\n  opacity: 0.5;\n  cursor: pointer;\n}\n\n#addTask:active {\n  opacity: 0.2;\n}\n\n.selected {\n  border-right: 10px groove var(--hover);\n}\n\n#date {\n  width: 40vh !important;\n  font-size: 5vh;\n  border: none;\n  background: grey;\n}\n\n.calLeft {\n  margin-right: 2vh;\n}\n\n.calRight {\n  margin-left: 2vh;\n}\n\n.navigatecal {\n  font-size: 8vh;\n  cursor: pointer;\n  user-select: none;\n}\n\n#taskForm {\n  width: 65vh;\n  height: 65vh;\n  left: calc(50% - 10vh);\n  top: calc(50% - 30vh);\n  padding-left: 5%;\n  padding-right: 5%;\n  font-size: 3vh;\n}\n\n#projectForm {\n  width: 55vh;\n  height: 25vh;\n  left: calc(50% - 10vh);\n  top: calc(50% - 30vh);\n  padding: 0 2% 0 2%;\n  font-size: 3vh;\n}\n\n#confirmationForm {\n  width: 50vh;\n  height: 35vh;\n  left: calc(50% - 10vh);\n  top: calc(50% - 30vh);\n  padding: 0 3% 0 3%;\n  font-size: 3vh;\n}\n\n#projectForm,\n#taskForm,\n#confirmationForm {\n  position: absolute;\n  z-index: 2;\n  background-color: var(--stone);\n  display: none;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: flex-start;\n  border: 5px var(--hover) solid;\n}\n\n.cover {\n  position: fixed;\n  top: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.6);\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  display: none;\n}\n\n#taskForm div,\n#projectForm div {\n  display: flex;\n}\n\n#taskForm label,\n#projectForm label {\n  flex: 1;\n  min-width: 20vh;\n  font-size: 3vh;\n}\n\n#taskForm input,\n#taskForm select {\n  flex: 6;\n  min-width: 30vh;\n}\n\n#description,\n#taskForm input,\n#priority,\n#proj_title,\n#proj_dueDate {\n  font-size: 2vh;\n  padding: 1%;\n}\n\n#description {\n  height: 20vh;\n  max-width: 30vh;\n  resize: none;\n}\n\n.redBtn {\n  background-color: red;\n  margin-right: 25%;\n}\n\n.greenBtn {\n  background-color: rgb(47, 255, 47);\n}\n\n.redBtn,\n.greenBtn {\n  font-size: 3vh;\n  padding: 10%;\n  width: 15vh;\n  height: 0.5vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.fbtn {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n\n.expired {\n  border: 5px solid red;\n}\n\n.task_desc {\n  overflow-y: auto;\n  flex: 6;\n  font-size: 1.5rem;\n}\n\n.task_dueDate {\n  flex: 1;\n}\n\n.task_title,\n.task_desc,\n.task_dueDate {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.212);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n}\n\n.task_title {\n  flex: 1;\n  padding: 0 6%;\n}\n\n.taskButtons > button {\n  font-size: 3vh;\n  color: white;\n  background-color: black;\n  opacity: 0.5;\n}\n\n.mobile {\n  display: none;\n}\n\n@media only screen and (max-width: 1100px) {\n  body,\n  html {\n    height: 100%;\n  }\n\n  .mobile {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 55px;\n    height: 55px;\n    color: black;\n    overflow: hidden;\n    background-color: black;\n    border-right: 1px solid white;\n  }\n\n  .mobile:hover {\n    cursor: pointer;\n  }\n\n  #sidebar {\n    position: absolute;\n    z-index: 1;\n    left: 0;\n    max-height: 100vh;\n    width: 0px;\n    overflow: hidden;\n    transition: width 300ms ease-in-out;\n  }\n\n  #sidebar.visible {\n    width: min(75%, 300px);\n  }\n\n  #projectForm,\n  #taskForm,\n  #confirmationForm {\n    position: absolute;\n    margin-left: auto;\n    margin-right: auto;\n    left: 0;\n    right: 0;\n    text-align: center;\n    max-width: 100%;\n    width: 400px;\n    height: 200px;\n  }\n\n  #taskForm,\n  #projectForm {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    min-height: 100%;\n    height: min-content;\n    text-align: center;\n    align-items: center;\n  }\n\n  #projectForm label {\n    max-height: 50px;\n  }\n\n  #projectForm > div {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n\n  #projectForm > div > * {\n    font-size: 2rem;\n    width: 90%;\n  }\n\n  #taskForm label {\n    font-size: 1.5rem;\n  }\n\n  #taskForm #title,\n  #taskForm #dueDate {\n    font-size: 1rem;\n    height: 50px;\n    width: 90%;\n  }\n\n  #description {\n    width: 90%;\n    max-width: none;\n    font-size: 1rem;\n    min-height: 200px;\n  }\n\n  #priority {\n    font-size: 1rem;\n    width: 90%;\n    justify-content: center;\n  }\n\n  #taskForm > div {\n    position: relative;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin-bottom: 20px;\n  }\n\n  .fbtn {\n    display: flex;\n    flex-direction: row !important;\n  }\n\n  .fbtn > * {\n    font-size: 1.7rem;\n  }\n\n  .RPB {\n    font-size: 40px;\n    z-index: 1;\n  }\n\n  #date {\n    max-width: 250px;\n    font-size: 2rem;\n  }\n\n  #addTask {\n    margin: 0 100px;\n  }\n}\n"],"sourceRoot":""}]);
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
    mobileBtn.style.display = "none";
  }
  if (window.innerWidth < "1100") {
    sidebar.classList.remove('visible');
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
      sidebar.style.display = "none";
      mobileBtn.style.display = "initial";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxPQUFPLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLE9BQU8sU0FBUyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLE9BQU8sWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLE1BQU0sVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZ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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGF0ZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ldmVudExpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZm9ybXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vYmlsZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2V0dXAuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3V0aWxpdHkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC0tbmV1dHJhbDogI2Y1ZjVmNTtcXG4gIC0tdmlvbGV0OiB3aGl0ZTtcXG4gIC0tc3RvbmU6ICM2ZTYyNzk7XFxuICAtLXppbmM6ICMzZjNmNDY7XFxuICAtLWhvdmVyOiByZ2IoNjksIDMxLCA4Myk7XFxufVxcblxcbmJvZHksXFxuaHRtbCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG59XFxuXFxuI3NpZGViYXIge1xcbiAgZmxleDogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXppbmMpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNzaWRlYmFyID4gZGl2IHtcXG4gIGZvbnQtc2l6ZTogNnZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhvbWUge1xcbiAgZmxleDogMTtcXG4gIGJvcmRlci1ib3R0b206IDVweCBibGFjayBzb2xpZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN0b25lKTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4jcHJvamVjdHMge1xcbiAgZmxleDogNztcXG59XFxuXFxuLmhvbWU6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXIpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBmbGV4OiAzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZXhwYW5kIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZXhwYW5kID4gZGl2OmZpcnN0LWNoaWxkLFxcbiNhZGRQcm9qZWN0IHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZXhwYW5kID4gKiB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI2FkZFByb2plY3Qge1xcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3RvbmUpO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbiNhZGRQcm9qZWN0OmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyKTtcXG59XFxuXFxuLmV4cGFuZCA+IGRpdjpmaXJzdC1jaGlsZCB7XFxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5leHBhbmQgLnNob3J0Y3V0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN0b25lKTtcXG4gIHBhZGRpbmc6IDUlO1xcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGJsYWNrO1xcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmV4cGFuZCAuc2hvcnRjdXRzIHtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBtYXgtaGVpZ2h0OiA3MHZoO1xcbn1cXG5cXG4uc2hvcnRjdXQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXIpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZXhwYW5kID4gZGl2IHtcXG4gIGZsZXg6IDU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiN0YXNrcyB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzV2aCwgMWZyKSk7XFxuICBncmlkLWdhcDogMnZoO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMyU7XFxufVxcblxcbiN0YXNrcyA+IGRpdiB7XFxuICBoZWlnaHQ6IDM1dmg7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMCwgMTQ3LCAyMjMpO1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KFxcbiAgICBjaXJjbGUsXFxuICAgIHJnYmEoMCwgMTQ3LCAyMjMsIDEpIDAlLFxcbiAgICByZ2JhKDIxMSwgMjM5LCAyNDIsIDEpIDQ5JSxcXG4gICAgcmdiYSgxNywgMTYsIDE2LCAxKSAxMDAlXFxuICApO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxMCU7XFxufVxcblxcbiN0YXNrcyA+IGRpdiA+IGRpdiB7XFxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xcbiAgZm9udC1zaXplOiAzdmg7XFxufVxcblxcbi5NdXN0IHtcXG4gIGJhY2tncm91bmQ6IHJnYigyMzIsIDUsIDUpO1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KFxcbiAgICBjaXJjbGUsXFxuICAgIHJnYmEoMjMyLCA1LCA1LCAxKSAwJSxcXG4gICAgcmdiYSgyMTMsIDE0NCwgMTQ0LCAxKSA0OSUsXFxuICAgIHJnYmEoMTcsIDE2LCAxNiwgMSkgMTAwJVxcbiAgKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uTmVjZXNzYXJ5IHtcXG4gIGJhY2tncm91bmQ6IHJnYigyMzIsIDEwNywgNSk7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoXFxuICAgIGNpcmNsZSxcXG4gICAgcmdiYSgyMzIsIDEwNywgNSwgMSkgMCUsXFxuICAgIHJnYmEoMjM1LCAyMDAsIDE2MywgMSkgNDklLFxcbiAgICByZ2JhKDE3LCAxNiwgMTYsIDEpIDEwMCVcXG4gICkgIWltcG9ydGFudDtcXG59XFxuXFxuLk1heWJlIHtcXG4gIGJhY2tncm91bmQ6IHJnYigxOTMsIDIzMiwgNSk7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoXFxuICAgIGNpcmNsZSxcXG4gICAgcmdiYSgxOTMsIDIzMiwgNSwgMSkgMCUsXFxuICAgIHJnYmEoMjI0LCAyMzUsIDE2MywgMSkgNDklLFxcbiAgICByZ2JhKDE3LCAxNiwgMTYsIDEpIDEwMCVcXG4gICkgIWltcG9ydGFudDtcXG59XFxuXFxuI2NvbnRlbnQgPiAqOm5vdCgjdGFza3MpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG59XFxuXFxuLmhlYWRlciAuUlBCIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogbWF4KDU1cHgsIDd2aCk7XFxuICB3aWR0aDogbWF4KDU1cHgsIDd2aCk7XFxuICBmb250LXNpemU6IG1heCg0MHB4LCAzcmVtKTtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbiAgY29sb3I6IHJnYig4NSwgMywgMTkpO1xcbn1cXG5cXG4jYWRkVGFzayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogbWF4KDQwcHgsIDNyZW0pO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIGhlaWdodDogbWF4KDU1cHgsIDd2aCk7XFxufVxcblxcbiNhZGRUYXNrOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDAuNTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2FkZFRhc2s6YWN0aXZlIHtcXG4gIG9wYWNpdHk6IDAuMjtcXG59XFxuXFxuLnNlbGVjdGVkIHtcXG4gIGJvcmRlci1yaWdodDogMTBweCBncm9vdmUgdmFyKC0taG92ZXIpO1xcbn1cXG5cXG4jZGF0ZSB7XFxuICB3aWR0aDogNDB2aCAhaW1wb3J0YW50O1xcbiAgZm9udC1zaXplOiA1dmg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiBncmV5O1xcbn1cXG5cXG4uY2FsTGVmdCB7XFxuICBtYXJnaW4tcmlnaHQ6IDJ2aDtcXG59XFxuXFxuLmNhbFJpZ2h0IHtcXG4gIG1hcmdpbi1sZWZ0OiAydmg7XFxufVxcblxcbi5uYXZpZ2F0ZWNhbCB7XFxuICBmb250LXNpemU6IDh2aDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4jdGFza0Zvcm0ge1xcbiAgd2lkdGg6IDY1dmg7XFxuICBoZWlnaHQ6IDY1dmg7XFxuICBsZWZ0OiBjYWxjKDUwJSAtIDEwdmgpO1xcbiAgdG9wOiBjYWxjKDUwJSAtIDMwdmgpO1xcbiAgcGFkZGluZy1sZWZ0OiA1JTtcXG4gIHBhZGRpbmctcmlnaHQ6IDUlO1xcbiAgZm9udC1zaXplOiAzdmg7XFxufVxcblxcbiNwcm9qZWN0Rm9ybSB7XFxuICB3aWR0aDogNTV2aDtcXG4gIGhlaWdodDogMjV2aDtcXG4gIGxlZnQ6IGNhbGMoNTAlIC0gMTB2aCk7XFxuICB0b3A6IGNhbGMoNTAlIC0gMzB2aCk7XFxuICBwYWRkaW5nOiAwIDIlIDAgMiU7XFxuICBmb250LXNpemU6IDN2aDtcXG59XFxuXFxuI2NvbmZpcm1hdGlvbkZvcm0ge1xcbiAgd2lkdGg6IDUwdmg7XFxuICBoZWlnaHQ6IDM1dmg7XFxuICBsZWZ0OiBjYWxjKDUwJSAtIDEwdmgpO1xcbiAgdG9wOiBjYWxjKDUwJSAtIDMwdmgpO1xcbiAgcGFkZGluZzogMCAzJSAwIDMlO1xcbiAgZm9udC1zaXplOiAzdmg7XFxufVxcblxcbiNwcm9qZWN0Rm9ybSxcXG4jdGFza0Zvcm0sXFxuI2NvbmZpcm1hdGlvbkZvcm0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN0b25lKTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGJvcmRlcjogNXB4IHZhcigtLWhvdmVyKSBzb2xpZDtcXG59XFxuXFxuLmNvdmVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxuICB6LWluZGV4OiAxO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jdGFza0Zvcm0gZGl2LFxcbiNwcm9qZWN0Rm9ybSBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI3Rhc2tGb3JtIGxhYmVsLFxcbiNwcm9qZWN0Rm9ybSBsYWJlbCB7XFxuICBmbGV4OiAxO1xcbiAgbWluLXdpZHRoOiAyMHZoO1xcbiAgZm9udC1zaXplOiAzdmg7XFxufVxcblxcbiN0YXNrRm9ybSBpbnB1dCxcXG4jdGFza0Zvcm0gc2VsZWN0IHtcXG4gIGZsZXg6IDY7XFxuICBtaW4td2lkdGg6IDMwdmg7XFxufVxcblxcbiNkZXNjcmlwdGlvbixcXG4jdGFza0Zvcm0gaW5wdXQsXFxuI3ByaW9yaXR5LFxcbiNwcm9qX3RpdGxlLFxcbiNwcm9qX2R1ZURhdGUge1xcbiAgZm9udC1zaXplOiAydmg7XFxuICBwYWRkaW5nOiAxJTtcXG59XFxuXFxuI2Rlc2NyaXB0aW9uIHtcXG4gIGhlaWdodDogMjB2aDtcXG4gIG1heC13aWR0aDogMzB2aDtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuLnJlZEJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBtYXJnaW4tcmlnaHQ6IDI1JTtcXG59XFxuXFxuLmdyZWVuQnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0NywgMjU1LCA0Nyk7XFxufVxcblxcbi5yZWRCdG4sXFxuLmdyZWVuQnRuIHtcXG4gIGZvbnQtc2l6ZTogM3ZoO1xcbiAgcGFkZGluZzogMTAlO1xcbiAgd2lkdGg6IDE1dmg7XFxuICBoZWlnaHQ6IDAuNXZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZidG4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5leHBpcmVkIHtcXG4gIGJvcmRlcjogNXB4IHNvbGlkIHJlZDtcXG59XFxuXFxuLnRhc2tfZGVzYyB7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgZmxleDogNjtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4udGFza19kdWVEYXRlIHtcXG4gIGZsZXg6IDE7XFxufVxcblxcbi50YXNrX3RpdGxlLFxcbi50YXNrX2Rlc2MsXFxuLnRhc2tfZHVlRGF0ZSB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIxMik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi50YXNrX3RpdGxlIHtcXG4gIGZsZXg6IDE7XFxuICBwYWRkaW5nOiAwIDYlO1xcbn1cXG5cXG4udGFza0J1dHRvbnMgPiBidXR0b24ge1xcbiAgZm9udC1zaXplOiAzdmg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLm1vYmlsZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMDBweCkge1xcbiAgYm9keSxcXG4gIGh0bWwge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICB9XFxuXFxuICAubW9iaWxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogNTVweDtcXG4gICAgaGVpZ2h0OiA1NXB4O1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB3aGl0ZTtcXG4gIH1cXG5cXG4gIC5tb2JpbGU6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxuXFxuICAjc2lkZWJhciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgbGVmdDogMDtcXG4gICAgbWF4LWhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAwcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHRyYW5zaXRpb246IHdpZHRoIDMwMG1zIGVhc2UtaW4tb3V0O1xcbiAgfVxcblxcbiAgI3NpZGViYXIudmlzaWJsZSB7XFxuICAgIHdpZHRoOiBtaW4oNzUlLCAzMDBweCk7XFxuICB9XFxuXFxuICAjcHJvamVjdEZvcm0sXFxuICAjdGFza0Zvcm0sXFxuICAjY29uZmlybWF0aW9uRm9ybSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICB9XFxuXFxuICAjdGFza0Zvcm0sXFxuICAjcHJvamVjdEZvcm0ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gICNwcm9qZWN0Rm9ybSBsYWJlbCB7XFxuICAgIG1heC1oZWlnaHQ6IDUwcHg7XFxuICB9XFxuXFxuICAjcHJvamVjdEZvcm0gPiBkaXYge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gICNwcm9qZWN0Rm9ybSA+IGRpdiA+ICoge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIHdpZHRoOiA5MCU7XFxuICB9XFxuXFxuICAjdGFza0Zvcm0gbGFiZWwge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gIH1cXG5cXG4gICN0YXNrRm9ybSAjdGl0bGUsXFxuICAjdGFza0Zvcm0gI2R1ZURhdGUge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDkwJTtcXG4gIH1cXG5cXG4gICNkZXNjcmlwdGlvbiB7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIG1heC13aWR0aDogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcXG4gIH1cXG5cXG4gICNwcmlvcml0eSB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxuXFxuICAjdGFza0Zvcm0gPiBkaXYge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIH1cXG5cXG4gIC5mYnRuIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xcbiAgfVxcblxcbiAgLmZidG4gPiAqIHtcXG4gICAgZm9udC1zaXplOiAxLjdyZW07XFxuICB9XFxuXFxuICAuUlBCIHtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICB6LWluZGV4OiAxO1xcbiAgfVxcblxcbiAgI2RhdGUge1xcbiAgICBtYXgtd2lkdGg6IDI1MHB4O1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICB9XFxuXFxuICAjYWRkVGFzayB7XFxuICAgIG1hcmdpbjogMCAxMDBweDtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1Qsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZix3QkFBd0I7QUFDMUI7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLE9BQU87RUFDUCw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsT0FBTztFQUNQLDhCQUE4QjtFQUM5Qiw4QkFBOEI7RUFDOUIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsT0FBTztBQUNUOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxPQUFPO0VBQ1Asc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixhQUFhO0VBQ2IsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFF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a0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxRQUFRO0lBQ1Isa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixZQUFZO0lBQ1osYUFBYTtFQUNmOztFQUVBOztJQUVFLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsTUFBTTtJQUNOLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixVQUFVO0VBQ1o7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7O0lBRUUsZUFBZTtJQUNmLFlBQVk7SUFDWixVQUFVO0VBQ1o7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsZUFBZTtJQUNmLGVBQWU7SUFDZixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsVUFBVTtJQUNWLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGFBQWE7SUFDYiw4QkFBOEI7RUFDaEM7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsVUFBVTtFQUNaOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC0tbmV1dHJhbDogI2Y1ZjVmNTtcXG4gIC0tdmlvbGV0OiB3aGl0ZTtcXG4gIC0tc3RvbmU6ICM2ZTYyNzk7XFxuICAtLXppbmM6ICMzZjNmNDY7XFxuICAtLWhvdmVyOiByZ2IoNjksIDMxLCA4Myk7XFxufVxcblxcbmJvZHksXFxuaHRtbCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG59XFxuXFxuI3NpZGViYXIge1xcbiAgZmxleDogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXppbmMpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNzaWRlYmFyID4gZGl2IHtcXG4gIGZvbnQtc2l6ZTogNnZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhvbWUge1xcbiAgZmxleDogMTtcXG4gIGJvcmRlci1ib3R0b206IDVweCBibGFjayBzb2xpZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN0b25lKTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4jcHJvamVjdHMge1xcbiAgZmxleDogNztcXG59XFxuXFxuLmhvbWU6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXIpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBmbGV4OiAzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZXhwYW5kIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZXhwYW5kID4gZGl2OmZpcnN0LWNoaWxkLFxcbiNhZGRQcm9qZWN0IHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZXhwYW5kID4gKiB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI2FkZFByb2plY3Qge1xcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3RvbmUpO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbiNhZGRQcm9qZWN0OmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyKTtcXG59XFxuXFxuLmV4cGFuZCA+IGRpdjpmaXJzdC1jaGlsZCB7XFxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5leHBhbmQgLnNob3J0Y3V0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN0b25lKTtcXG4gIHBhZGRpbmc6IDUlO1xcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGJsYWNrO1xcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmV4cGFuZCAuc2hvcnRjdXRzIHtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBtYXgtaGVpZ2h0OiA3MHZoO1xcbn1cXG5cXG4uc2hvcnRjdXQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXIpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZXhwYW5kID4gZGl2IHtcXG4gIGZsZXg6IDU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiN0YXNrcyB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzV2aCwgMWZyKSk7XFxuICBncmlkLWdhcDogMnZoO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMyU7XFxufVxcblxcbiN0YXNrcyA+IGRpdiB7XFxuICBoZWlnaHQ6IDM1dmg7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMCwgMTQ3LCAyMjMpO1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KFxcbiAgICBjaXJjbGUsXFxuICAgIHJnYmEoMCwgMTQ3LCAyMjMsIDEpIDAlLFxcbiAgICByZ2JhKDIxMSwgMjM5LCAyNDIsIDEpIDQ5JSxcXG4gICAgcmdiYSgxNywgMTYsIDE2LCAxKSAxMDAlXFxuICApO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxMCU7XFxufVxcblxcbiN0YXNrcyA+IGRpdiA+IGRpdiB7XFxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xcbiAgZm9udC1zaXplOiAzdmg7XFxufVxcblxcbi5NdXN0IHtcXG4gIGJhY2tncm91bmQ6IHJnYigyMzIsIDUsIDUpO1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KFxcbiAgICBjaXJjbGUsXFxuICAgIHJnYmEoMjMyLCA1LCA1LCAxKSAwJSxcXG4gICAgcmdiYSgyMTMsIDE0NCwgMTQ0LCAxKSA0OSUsXFxuICAgIHJnYmEoMTcsIDE2LCAxNiwgMSkgMTAwJVxcbiAgKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uTmVjZXNzYXJ5IHtcXG4gIGJhY2tncm91bmQ6IHJnYigyMzIsIDEwNywgNSk7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoXFxuICAgIGNpcmNsZSxcXG4gICAgcmdiYSgyMzIsIDEwNywgNSwgMSkgMCUsXFxuICAgIHJnYmEoMjM1LCAyMDAsIDE2MywgMSkgNDklLFxcbiAgICByZ2JhKDE3LCAxNiwgMTYsIDEpIDEwMCVcXG4gICkgIWltcG9ydGFudDtcXG59XFxuXFxuLk1heWJlIHtcXG4gIGJhY2tncm91bmQ6IHJnYigxOTMsIDIzMiwgNSk7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoXFxuICAgIGNpcmNsZSxcXG4gICAgcmdiYSgxOTMsIDIzMiwgNSwgMSkgMCUsXFxuICAgIHJnYmEoMjI0LCAyMzUsIDE2MywgMSkgNDklLFxcbiAgICByZ2JhKDE3LCAxNiwgMTYsIDEpIDEwMCVcXG4gICkgIWltcG9ydGFudDtcXG59XFxuXFxuI2NvbnRlbnQgPiAqOm5vdCgjdGFza3MpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG59XFxuXFxuLmhlYWRlciAuUlBCIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogbWF4KDU1cHgsIDd2aCk7XFxuICB3aWR0aDogbWF4KDU1cHgsIDd2aCk7XFxuICBmb250LXNpemU6IG1heCg0MHB4LCAzcmVtKTtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbiAgY29sb3I6IHJnYig4NSwgMywgMTkpO1xcbn1cXG5cXG4jYWRkVGFzayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogbWF4KDQwcHgsIDNyZW0pO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIGhlaWdodDogbWF4KDU1cHgsIDd2aCk7XFxufVxcblxcbiNhZGRUYXNrOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDAuNTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2FkZFRhc2s6YWN0aXZlIHtcXG4gIG9wYWNpdHk6IDAuMjtcXG59XFxuXFxuLnNlbGVjdGVkIHtcXG4gIGJvcmRlci1yaWdodDogMTBweCBncm9vdmUgdmFyKC0taG92ZXIpO1xcbn1cXG5cXG4jZGF0ZSB7XFxuICB3aWR0aDogNDB2aCAhaW1wb3J0YW50O1xcbiAgZm9udC1zaXplOiA1dmg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiBncmV5O1xcbn1cXG5cXG4uY2FsTGVmdCB7XFxuICBtYXJnaW4tcmlnaHQ6IDJ2aDtcXG59XFxuXFxuLmNhbFJpZ2h0IHtcXG4gIG1hcmdpbi1sZWZ0OiAydmg7XFxufVxcblxcbi5uYXZpZ2F0ZWNhbCB7XFxuICBmb250LXNpemU6IDh2aDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4jdGFza0Zvcm0ge1xcbiAgd2lkdGg6IDY1dmg7XFxuICBoZWlnaHQ6IDY1dmg7XFxuICBsZWZ0OiBjYWxjKDUwJSAtIDEwdmgpO1xcbiAgdG9wOiBjYWxjKDUwJSAtIDMwdmgpO1xcbiAgcGFkZGluZy1sZWZ0OiA1JTtcXG4gIHBhZGRpbmctcmlnaHQ6IDUlO1xcbiAgZm9udC1zaXplOiAzdmg7XFxufVxcblxcbiNwcm9qZWN0Rm9ybSB7XFxuICB3aWR0aDogNTV2aDtcXG4gIGhlaWdodDogMjV2aDtcXG4gIGxlZnQ6IGNhbGMoNTAlIC0gMTB2aCk7XFxuICB0b3A6IGNhbGMoNTAlIC0gMzB2aCk7XFxuICBwYWRkaW5nOiAwIDIlIDAgMiU7XFxuICBmb250LXNpemU6IDN2aDtcXG59XFxuXFxuI2NvbmZpcm1hdGlvbkZvcm0ge1xcbiAgd2lkdGg6IDUwdmg7XFxuICBoZWlnaHQ6IDM1dmg7XFxuICBsZWZ0OiBjYWxjKDUwJSAtIDEwdmgpO1xcbiAgdG9wOiBjYWxjKDUwJSAtIDMwdmgpO1xcbiAgcGFkZGluZzogMCAzJSAwIDMlO1xcbiAgZm9udC1zaXplOiAzdmg7XFxufVxcblxcbiNwcm9qZWN0Rm9ybSxcXG4jdGFza0Zvcm0sXFxuI2NvbmZpcm1hdGlvbkZvcm0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN0b25lKTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGJvcmRlcjogNXB4IHZhcigtLWhvdmVyKSBzb2xpZDtcXG59XFxuXFxuLmNvdmVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxuICB6LWluZGV4OiAxO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jdGFza0Zvcm0gZGl2LFxcbiNwcm9qZWN0Rm9ybSBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI3Rhc2tGb3JtIGxhYmVsLFxcbiNwcm9qZWN0Rm9ybSBsYWJlbCB7XFxuICBmbGV4OiAxO1xcbiAgbWluLXdpZHRoOiAyMHZoO1xcbiAgZm9udC1zaXplOiAzdmg7XFxufVxcblxcbiN0YXNrRm9ybSBpbnB1dCxcXG4jdGFza0Zvcm0gc2VsZWN0IHtcXG4gIGZsZXg6IDY7XFxuICBtaW4td2lkdGg6IDMwdmg7XFxufVxcblxcbiNkZXNjcmlwdGlvbixcXG4jdGFza0Zvcm0gaW5wdXQsXFxuI3ByaW9yaXR5LFxcbiNwcm9qX3RpdGxlLFxcbiNwcm9qX2R1ZURhdGUge1xcbiAgZm9udC1zaXplOiAydmg7XFxuICBwYWRkaW5nOiAxJTtcXG59XFxuXFxuI2Rlc2NyaXB0aW9uIHtcXG4gIGhlaWdodDogMjB2aDtcXG4gIG1heC13aWR0aDogMzB2aDtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuLnJlZEJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBtYXJnaW4tcmlnaHQ6IDI1JTtcXG59XFxuXFxuLmdyZWVuQnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0NywgMjU1LCA0Nyk7XFxufVxcblxcbi5yZWRCdG4sXFxuLmdyZWVuQnRuIHtcXG4gIGZvbnQtc2l6ZTogM3ZoO1xcbiAgcGFkZGluZzogMTAlO1xcbiAgd2lkdGg6IDE1dmg7XFxuICBoZWlnaHQ6IDAuNXZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZidG4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5leHBpcmVkIHtcXG4gIGJvcmRlcjogNXB4IHNvbGlkIHJlZDtcXG59XFxuXFxuLnRhc2tfZGVzYyB7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgZmxleDogNjtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4udGFza19kdWVEYXRlIHtcXG4gIGZsZXg6IDE7XFxufVxcblxcbi50YXNrX3RpdGxlLFxcbi50YXNrX2Rlc2MsXFxuLnRhc2tfZHVlRGF0ZSB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIxMik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi50YXNrX3RpdGxlIHtcXG4gIGZsZXg6IDE7XFxuICBwYWRkaW5nOiAwIDYlO1xcbn1cXG5cXG4udGFza0J1dHRvbnMgPiBidXR0b24ge1xcbiAgZm9udC1zaXplOiAzdmg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLm1vYmlsZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMDBweCkge1xcbiAgYm9keSxcXG4gIGh0bWwge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICB9XFxuXFxuICAubW9iaWxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogNTVweDtcXG4gICAgaGVpZ2h0OiA1NXB4O1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB3aGl0ZTtcXG4gIH1cXG5cXG4gIC5tb2JpbGU6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxuXFxuICAjc2lkZWJhciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgbGVmdDogMDtcXG4gICAgbWF4LWhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAwcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHRyYW5zaXRpb246IHdpZHRoIDMwMG1zIGVhc2UtaW4tb3V0O1xcbiAgfVxcblxcbiAgI3NpZGViYXIudmlzaWJsZSB7XFxuICAgIHdpZHRoOiBtaW4oNzUlLCAzMDBweCk7XFxuICB9XFxuXFxuICAjcHJvamVjdEZvcm0sXFxuICAjdGFza0Zvcm0sXFxuICAjY29uZmlybWF0aW9uRm9ybSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICB9XFxuXFxuICAjdGFza0Zvcm0sXFxuICAjcHJvamVjdEZvcm0ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gICNwcm9qZWN0Rm9ybSBsYWJlbCB7XFxuICAgIG1heC1oZWlnaHQ6IDUwcHg7XFxuICB9XFxuXFxuICAjcHJvamVjdEZvcm0gPiBkaXYge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gICNwcm9qZWN0Rm9ybSA+IGRpdiA+ICoge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIHdpZHRoOiA5MCU7XFxuICB9XFxuXFxuICAjdGFza0Zvcm0gbGFiZWwge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gIH1cXG5cXG4gICN0YXNrRm9ybSAjdGl0bGUsXFxuICAjdGFza0Zvcm0gI2R1ZURhdGUge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDkwJTtcXG4gIH1cXG5cXG4gICNkZXNjcmlwdGlvbiB7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIG1heC13aWR0aDogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcXG4gIH1cXG5cXG4gICNwcmlvcml0eSB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxuXFxuICAjdGFza0Zvcm0gPiBkaXYge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIH1cXG5cXG4gIC5mYnRuIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xcbiAgfVxcblxcbiAgLmZidG4gPiAqIHtcXG4gICAgZm9udC1zaXplOiAxLjdyZW07XFxuICB9XFxuXFxuICAuUlBCIHtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICB6LWluZGV4OiAxO1xcbiAgfVxcblxcbiAgI2RhdGUge1xcbiAgICBtYXgtd2lkdGg6IDI1MHB4O1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICB9XFxuXFxuICAjYWRkVGFzayB7XFxuICAgIG1hcmdpbjogMCAxMDBweDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL3RvZG9cIjtcblxuZnVuY3Rpb24gZ2V0RGF0ZSgpIHtcbiAgY29uc3QgZCA9IG5ldyBEYXRlKCk7XG4gIGxldCBtb250aCA9IGAke2QuZ2V0TW9udGgoKSArIDF9YDtcbiAgbGV0IGRheSA9IGAke2QuZ2V0RGF0ZSgpfWA7XG4gIGNvbnN0IHllYXIgPSBkLmdldEZ1bGxZZWFyKCk7XG5cbiAgaWYgKG1vbnRoLmxlbmd0aCA8IDIpIHtcbiAgICBtb250aCA9IGAwJHttb250aH1gO1xuICB9XG4gIGlmIChkYXkubGVuZ3RoIDwgMikge1xuICAgIGRheSA9IGAwJHtkYXl9YDtcbiAgfVxuXG4gIHJldHVybiBbeWVhciwgbW9udGgsIGRheV0uam9pbihcIi1cIik7XG59XG5cbmZ1bmN0aW9uIGdldE1vbnRoRnJvbVN0cmluZyhtb24pIHtcbiAgcmV0dXJuIG5ldyBEYXRlKERhdGUucGFyc2UoYCR7bW9ufSAxLCAyMDEyYCkpLmdldE1vbnRoKCkgKyAxO1xufVxuXG5jb25zdCBjYWxlbmRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF0ZVwiKTtcblxuY29uc3QgdG9kYXkgPSBnZXREYXRlKCk7XG5jYWxlbmRlci5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCB0b2RheSk7XG5jYWxlbmRlci5zZXRBdHRyaWJ1dGUoXCJtaW5cIiwgdG9kYXkpO1xuXG4vLyBzZXQgZGVmYXVsdCBkYXRlIHZhbHVlcyB0byB0b2RheVxuY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlRGF0ZVwiKTtcbmR1ZURhdGUudmFsdWUgPSBnZXREYXRlKCk7XG4vLyBjb25zdCBwcm9qX2R1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2pfZHVlRGF0ZVwiKTtcbi8vIHByb2pfZHVlRGF0ZS52YWx1ZSA9IGdldERhdGUoKTtcbi8vIGlkZWFsbHkgeW91IHdvdWxkIGZvcm1hdCB0byBmaXQgbG9jYXRpb24sIGJ1dCB3aGF0IGEgcGFpbiBEOlxuZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlKSB7XG4gIGNvbnN0IHRlbXAgPSBkYXRlLnNwbGl0KFwiLVwiKTtcbiAgcmV0dXJuIFt0ZW1wWzFdLCB0ZW1wWzJdLCB0ZW1wWzBdXS5qb2luKFwiLVwiKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0KHRlbXApIHtcbiAgLy8gdGVtcCAob2JqZWN0KTpcbiAgLy8gU3VuIEF1ZyAyMSAyMDIyIDAyOjAwOjAwIEdNVCswMjAwIChDZW50cmFsIEV1cm9wZWFuIFN1bW1lciBUaW1lKVxuICBjb25zdCBzdHIgPSB0ZW1wLnRvU3RyaW5nKCk7XG4gIGNvbnN0IG1vbnRoID0gZ2V0TW9udGhGcm9tU3RyaW5nKHN0ci5zdWJzdHJpbmcoNCwgNykpO1xuICBjb25zdCBkYXkgPSBzdHIuc3Vic3RyaW5nKDgsIDEwKTtcbiAgY29uc3QgeWVhciA9IHN0ci5zdWJzdHJpbmcoMTEsIDE1KTtcbiAgcmV0dXJuIFtkYXksIG1vbnRoLCB5ZWFyXTtcbn1cblxuY29uc3QgZXhwaXJlQ2hlY2sgPSAodGFzaykgPT4ge1xuICAvLyBjb25zdCB0b2RheUFyciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZVwiKS52YWx1ZS5zcGxpdChcIi1cIik7XG5cbiAgY29uc3QgdG9kYXlBcnIgPSBmb3JtYXQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlXCIpLnZhbHVlQXNEYXRlKTtcbiAgLy8gW2RheSwgbW9udGgsIHllYXJdXG4gIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWxlY3RlZFwiKS50ZXh0Q29udGVudDtcbiAgY29uc3QgYXJyID0gcHJvamVjdHNbY3VycmVudFByb2plY3RdLnRhc2tzW3Rhc2sudGl0bGVdLmR1ZURhdGUuc3BsaXQoXCItXCIpO1xuICBpZiAoXG4gICAgK3RvZGF5QXJyWzBdID4gK2FyclsxXSB8fFxuICAgICt0b2RheUFyclsxXSA+ICthcnJbMF0gfHxcbiAgICArdG9kYXlBcnJbMl0gPiArYXJyWzJdXG4gICkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbi8qIGNvbnN0IHByb2pfZXhwaXJlQ2hlY2sgPSAoKSA9PiB7XG4gICAgY29uc3QgY3VycmVudFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdGVkXCIpLnRleHRDb250ZW50O1xuICAgIGlmIChjdXJyZW50UHJvamVjdCAhPSBcIkhPTUVcIikge1xuICAgICAgICBjb25zdCB0b2RheUFyciA9IGZvcm1hdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVcIikudmFsdWVBc0RhdGUpO1xuICAgICAgICBjb25zdCBhcnIgPSBwcm9qZWN0c1tjdXJyZW50UHJvamVjdF0uZHVlRGF0ZS5zcGxpdChcIi1cIik7XG4gICAgICAgIC8vIHllYXIgbW9udGggZGF5XG5cbiAgICAgICAgaWYgKCt0b2RheUFyclswXSA+ICthcnJbMl0gfHwgK3RvZGF5QXJyWzFdID4gK2FyclswXSB8fCArdG9kYXlBcnJbMl0gPlxuICAgICAgICAgICAgK2FyclswXSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbn0gKi9cblxuZXhwb3J0IHsgZ2V0RGF0ZSwgZm9ybWF0RGF0ZSwgZXhwaXJlQ2hlY2sgLyogcHJval9leHBpcmVDaGVjayAqLyB9O1xuIiwiaW1wb3J0IHsgZXhwaXJlQ2hlY2sgfSBmcm9tIFwiLi9kYXRlXCI7XG5cbmV4cG9ydCBjb25zdCBhZGRUYXNrRCA9ICh0YXNrKSA9PiB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKGAke3Rhc2suaWR9YCk7XG5cbiAgaWYgKGV4cGlyZUNoZWNrKHRhc2spKSB7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJleHBpcmVkXCIpO1xuICB9IGVsc2Uge1xuICAgIGRpdi5jbGFzc0xpc3QucmVtb3ZlKFwiZXhwaXJlZFwiKTtcbiAgfVxuXG4gIGNvbnN0IHRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrc1wiKTtcbiAgdGFza3MuYXBwZW5kQ2hpbGQoZGl2KTtcbn07XG5cbmV4cG9ydCBjb25zdCBlcmFzZVRhc2tzRCA9ICgpID0+IHtcbiAgY29uc3QgdGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tzXCIpO1xuICB3aGlsZSAodGFza3MuZmlyc3RDaGlsZCkge1xuICAgIHRhc2tzLnJlbW92ZUNoaWxkKHRhc2tzLmxhc3RDaGlsZCk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBlcmFzZVRhc2tEID0gKGlkKSA9PiB7XG4gIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtpZH1gKTtcbiAgdGFzay5yZW1vdmUoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRQcm9qZWN0RCA9IChwcm9qZWN0LCBpZCkgPT4ge1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXYuY2xhc3NMaXN0LmFkZChcInNob3J0Y3V0XCIpO1xuICBkaXYuaWQgPSBpZDtcbiAgZGl2LnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcblxuICBjb25zdCBzaG9ydGN1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNob3J0Y3V0c1wiKTtcbiAgc2hvcnRjdXRzLmFwcGVuZChkaXYpO1xufTtcblxuLy8gRCBhdCB0aGUgZW5kIHJlcHJlc2VudHMgRE9NXG4iLCJpbXBvcnQgeyBjaGVja0R1ZURhdGUsIHNob3dGb3JtQW5kQ292ZXIgfSBmcm9tIFwiLi91dGlsaXR5XCI7XG5pbXBvcnQgeyBvbkNsaWNraW5nUlBCIH0gZnJvbSBcIi4vc2V0dXBcIjtcbmltcG9ydCB7XG4gIGFkZFRhc2ssXG4gIHJlc2V0Rm9ybSxcbiAgYWRkUHJvamVjdCxcbiAgcmVzZXRQcm9qRm9ybSxcbiAgcmVzZXRDb25mRm9ybSxcbn0gZnJvbSBcIi4vZm9ybXNcIjtcblxuLy8gaXQgcmVzZXRzIGV2ZXJ5IHRpbWUgd2Vic2l0ZSByZWZyZXNoZXMgc28gZHVwbGljYXRpb24gYnVnIG9jY3Vycyxcbi8vIGFuZCBpdCdzIG1vcmUgZWZmaWNpZW50LCAobGl0dGxlIGJpdCBsb2xcblxuY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkVGFza1wiKTtcbmFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgc2hvd0Zvcm1BbmRDb3ZlcigpO1xufSk7XG5cbi8vIHRob3VnaHQgaXQgd291bGQgZWFzeSB0byBwdXQgYWxsIGZvcm0gcmVsYXRlZCBjb2RlIHRvIHRoZSBzdWJtaXQgYnRuIGxpc3RlbmVyXG5jb25zdCBnYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ncmVlblwiKTtcbmdidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgYWRkVGFzaygpO1xufSk7XG5cbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tGb3JtXCIpO1xuZm9ybS5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICBpZiAoZS5jb2RlID09PSBcIkVudGVyXCIpIHtcbiAgICBhZGRUYXNrKCk7XG4gIH1cbn0pO1xuXG5jb25zdCByYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZWRcIik7XG5yYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHJlc2V0Rm9ybSgpO1xufSk7XG5cbmNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZFByb2plY3RcIik7XG5hZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNvbnN0IHByb2pGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0Rm9ybVwiKTtcbiAgcHJvakZvcm0uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICBjb25zdCBjb3ZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY292ZXJcIik7XG4gIGNvdmVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG59KTtcblxuY29uc3QgcHJvakdCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2pfZ3JlZW5cIik7XG5wcm9qR0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBhZGRQcm9qZWN0KCk7XG59KTtcblxuY29uc3QgcHJvakZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RGb3JtXCIpO1xucHJvakZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgaWYgKGUuY29kZSA9PT0gXCJFbnRlclwiKSB7XG4gICAgYWRkUHJvamVjdCgpO1xuICB9XG59KTtcblxuY29uc3QgcHJvalJCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2pfcmVkXCIpO1xucHJvalJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgcmVzZXRQcm9qRm9ybSgpO1xufSk7XG5cbmNvbnN0IGNvbmZHcmVlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29uZl9ncmVlblwiKTtcbmNvbmZHcmVlbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBvbkNsaWNraW5nUlBCKCk7XG4gIHJlc2V0Q29uZkZvcm0oKTtcbn0pO1xuXG5jb25zdCBjb25mUmVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb25mX3JlZFwiKTtcbmNvbmZSZWQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgcmVzZXRDb25mRm9ybSgpO1xufSk7XG5cbi8vIG5hdmlnYXRlIGNhbGVuZGVyLCBsZWZ0IGFuZCByaWdodCBhcnJvd1xuY29uc3QgbGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FsTGVmdFwiKTtcbmNvbnN0IHJpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYWxSaWdodFwiKTtcbmNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkYXRlXCIpO1xubGVmdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBpbnB1dC5zdGVwRG93bigpO1xuICBjaGVja0R1ZURhdGUoKTtcbn0pO1xucmlnaHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgaW5wdXQuc3RlcFVwKCk7XG4gIGNoZWNrRHVlRGF0ZSgpO1xufSk7XG4vLyBkYXRlIGlzIHBpY2tlZCBtYW51YWxseSBmcm9tIHRoZSBjYWxhbmRlciwgY2xpY2sgZG9lc24ndCB3b3JrXG5pbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgY2hlY2tEdWVEYXRlKCk7XG59KTtcbiIsImltcG9ydCB7IGFkZFByb2plY3RELCBhZGRUYXNrRCB9IGZyb20gXCIuL2RvbVwiO1xuaW1wb3J0IHsgc2V0dXBUYXNrRCwgYWRkUHJvamVjdExpc3RlbmVyIH0gZnJvbSBcIi4vc2V0dXBcIjtcbmltcG9ydCB7IHByb2plY3RGYWN0b3J5LCBwcm9qZWN0cywgdG9kbyB9IGZyb20gXCIuL3RvZG9cIjtcbmltcG9ydCB7IGZvcm1hdERhdGUsIGdldERhdGUgfSBmcm9tIFwiLi9kYXRlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNldEZvcm0oKSB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tGb3JtXCIpO1xuICBjb25zdCBjb3ZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY292ZXJcIik7XG4gIGZvcm0ucmVzZXQoKTtcbiAgZm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIGNvdmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuICAvLyB0aGlzIGlzIGFsc28gZGVmYXVsdCwgcHJlc2VudCBpbiBkYXRlLmpzIVxuICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWVEYXRlXCIpO1xuICBkdWVEYXRlLnZhbHVlID0gZ2V0RGF0ZSgpO1xufVxuXG4vLyBjb3VsZG4ndCBnZXQgc3VibWl0IHR5cGUgYnV0dG9uIHRvIHdvcmssIHNvIG5lZWRlZCBhIGZ1bmN0aW9uIHRvIGdldCB2YWx1ZXNcbi8vIGZyb20gdGhlIGZvcm0sIHRoaXMgaXMgaXRcbmZ1bmN0aW9uIGdldFRhc2soKSB7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZVwiKS52YWx1ZTtcbiAgY29uc3QgY3VycmVudFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdGVkXCIpLnRleHRDb250ZW50O1xuICBpZiAoIXByb2plY3RzW2N1cnJlbnRQcm9qZWN0XS50YXNrc1t0aXRsZV0pIHtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb25cIikudmFsdWU7XG4gICAgbGV0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZURhdGVcIikudmFsdWU7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByaW9yaXR5XCIpLnZhbHVlO1xuXG4gICAgaWYgKCFkdWVEYXRlKSB7XG4gICAgICBkdWVEYXRlID0gZ2V0RGF0ZSgpO1xuICAgIH1cblxuICAgIGxldCBpZCA9IDA7XG4gICAgLy8gZWFzaWVzdCB3YXkgdG8gcHJldmVudCBkdXBsaWNhdGlvbiBidWcgPT4gMiB0YXNrcyAxIGlkXG4gICAgT2JqZWN0LmtleXMocHJvamVjdHNbY3VycmVudFByb2plY3RdLnRhc2tzKS5mb3JFYWNoKCh0YXNrTmFtZSkgPT4ge1xuICAgICAgaWQgPSBNYXRoLm1heChcbiAgICAgICAgaWQsXG4gICAgICAgIE51bWJlcihcbiAgICAgICAgICBwcm9qZWN0c1tjdXJyZW50UHJvamVjdF0udGFza3NbdGFza05hbWVdLmlkLnJlcGxhY2UoXCJ0YXNrXCIsIFwiXCIpXG4gICAgICAgICkgKyAxXG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgY29uc3QgdGFzayA9IHRvZG8oXG4gICAgICB0aXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgZm9ybWF0RGF0ZShkdWVEYXRlKSxcbiAgICAgIHByaW9yaXR5LFxuICAgICAgYHRhc2ske2lkLnRvU3RyaW5nKCl9YFxuICAgICk7XG4gICAgcmV0dXJuIHRhc2s7XG4gIH1cbiAgcmV0dXJuIDA7XG59XG5cbmV4cG9ydCBjb25zdCBhZGRUYXNrID0gKCkgPT4ge1xuICAvLyBydW4gb25seSBpZiBub3QgZWRpdGluZywgd2UgaGF2ZSAyIGV2ZW50IGxpc3RuZXJzIG9uIG9uZSBidXR0b25cbiAgLy8gc28gdGhpcyBmb3JjZXMgdGhlIG90aGVyIG9uZSB0byB3b3JrIGFsb25lLCB3aGljaCBpcyB3aGF0IHdlIHdhbnRcbiAgY29uc3QgY3VycmVudFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdGVkXCIpLnRleHRDb250ZW50O1xuICAvLyBidWdzIG9jY3VyIGlmIGZsYWcgaXNuJ3QgcHJlc2VudCwgc2luY2UgYWZ0ZXIgSSBhbSB1c2luZyB0d29cbiAgLy8gZXZlbnQgbGlzdG5lcnMgZm9yIG9uZSBidXR0b25cbiAgY29uc3QgdGFzayA9IGdldFRhc2soKTtcblxuICBpZiAodGFzayA9PT0gMCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1hbGVydFxuICAgIGFsZXJ0KFwiRmFpbHVyZSwgdGFzayB3aXRoIHRoZSBzYW1lIHRpdGxlIGFscmVhZHkgZXhpc3RzXCIpO1xuICB9XG4gIGlmICh0YXNrKSB7XG4gICAgcmVzZXRGb3JtKCk7XG4gICAgLy8gc2V0IGRlZmF1bHQgZGF0ZSwgc28gTU0tREQtWVlZWSBpcyBub3Qgc2hvd24gb24gZm9ybT8/Pz8/XG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlRGF0ZVwiKTtcbiAgICBkdWVEYXRlLnZhbHVlID0gZ2V0RGF0ZSgpO1xuXG4gICAgLy8gc2V0dXAgdGFza1xuICAgIHByb2plY3RzW2N1cnJlbnRQcm9qZWN0XS50YXNrc1t0YXNrLnRpdGxlXSA9IHRhc2s7XG4gICAgYWRkVGFza0QodGFzaywgY3VycmVudFByb2plY3QpO1xuICAgIHNldHVwVGFza0QodGFzayk7XG5cbiAgICBjb25zdCByYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZWRcIik7XG4gICAgcmJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG5cbiAgICBjb25zdCBnYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ncmVlblwiKTtcbiAgICBnYnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiKDQ3LCAyNTUsIDQ3KVwiO1xuICAgIGdidXR0b24udGV4dENvbnRlbnQgPSBcIkFkZFwiO1xuXG4gICAgLy8gYXR0ZW1wdCBhdCBcInJlZnJlc2hpbmdcIiB0aGUgaGVpZ2h0LCBiZWNhdXNlIGl0IHNvbWV0aW1lcyBmb3JnZXRzXG4gICAgLy8gaXQgbmVlZHMgdG8gYmUgMTAwdmggb24gbW9iaWxlIGJyb3dzZXJzID4tLi08XG4gICAgLy8gY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaWRlYmFyJyk7XG4gICAgLy8gc2lkZWJhci5zdHlsZS5oZWlnaHQgPSAnMTAwdmgnO1xuXG4gICAgLy8gY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgLy8gY29udGVudC5zdHlsZS5oZWlnaHQgPSAnMTAwdmgnO1xuXG4gICAgLy8gc2F2ZSB0byBsb2NhbCB3aGVuIHlvdSBhZGQgdGFzayBvciBwcm9qZWN0XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xuICB9XG59O1xuXG4vLyBzaW1pbGFyIHByb2JsZW0gYXMgdGFzayBpZFxuLy8gbGV0IHByb2plY3RJRCA9IE9iamVjdC5rZXlzKHByb2plY3RzKS5sZW5ndGg7XG5cbi8vIGFnYWludCwgbmVlZGVkIGEgd2F5IHRvIGdldCB2YWx1ZXMgZnJvbSB0aGUgZm9ybVxuZnVuY3Rpb24gZ2V0UHJvamVjdCgpIHtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2pfdGl0bGVcIikudmFsdWU7XG4gIGlmICghcHJvamVjdHNbdGl0bGVdKSB7XG4gICAgLy8gY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJval9kdWVEYXRlXCIpLnZhbHVlO1xuXG4gICAgbGV0IHByb2plY3RJRCA9IDA7XG4gICAgLy8gZWFzaWVzdCB3YXkgdG8gcHJldmVudCBkdXBsaWNhdGlvbiBidWcgPT4gMiBwcm9qZWN0cyAxIGlkXG4gICAgT2JqZWN0LmtleXMocHJvamVjdHMpLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgIHByb2plY3RJRCA9IE1hdGgubWF4KFxuICAgICAgICBwcm9qZWN0SUQsXG4gICAgICAgIE51bWJlcihwcm9qZWN0c1twcm9qZWN0XS5pZC5yZXBsYWNlKFwiUHJcIiwgXCJcIikpICsgMVxuICAgICAgKTtcbiAgICB9KTtcbiAgICBjb25zdCBwcm9qID0gcHJvamVjdEZhY3RvcnkoXG4gICAgICB0aXRsZSxcbiAgICAgIC8qIGR1ZURhdGUsICovXG4gICAgICBgUHIke3Byb2plY3RJRC50b1N0cmluZygpfWBcbiAgICApO1xuICAgIHJldHVybiBwcm9qO1xuICB9XG4gIHJldHVybiAwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRQcm9qRm9ybSgpIHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdEZvcm1cIik7XG4gIGNvbnN0IGNvdmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb3ZlclwiKTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qX3RpdGxlXCIpLnZhbHVlID0gXCJcIjtcbiAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qX2R1ZURhdGVcIikudmFsdWUgPSBcIlwiO1xuICBmb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgY292ZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4gIC8vIHRoaXMgaXMgYWxzbyBkZWZhdWx0LCBwcmVzZW50IGluIGRhdGUuanMhXG4gIC8vIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2pfZHVlRGF0ZVwiKTtcbiAgLy8gZHVlRGF0ZS52YWx1ZSA9IGdldERhdGUoKTtcbn1cblxuZXhwb3J0IGNvbnN0IGFkZFByb2plY3QgPSAoKSA9PiB7XG4gIGNvbnN0IHByb2plY3QgPSBnZXRQcm9qZWN0KCk7XG4gIGlmICghcHJvamVjdCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1hbGVydFxuICAgIGFsZXJ0KFwiRmFpbHVyZSwgY2FuJ3QgcmVwZWF0IHByb2plY3QgbmFtZVwiKTtcbiAgfSBlbHNlIHtcbiAgICByZXNldFByb2pGb3JtKCk7XG4gICAgcHJvamVjdHNbcHJvamVjdC50aXRsZV0gPSBwcm9qZWN0O1xuICAgIHByb2plY3RzW3Byb2plY3QudGl0bGVdLnRhc2tzID0ge307XG4gICAgcHJvamVjdHNbcHJvamVjdC50aXRsZV0uaWQgPSBwcm9qZWN0LmlkO1xuXG4gICAgYWRkUHJvamVjdEQocHJvamVjdCwgcHJvamVjdC5pZCk7XG4gICAgYWRkUHJvamVjdExpc3RlbmVyKHByb2plY3QuaWQpO1xuXG4gICAgLy8gc2F2ZSB0byBsb2NhbCB3aGVuIHlvdSBhZGQgdGFzayBvciBwcm9qZWN0XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xuICB9XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRDb25mRm9ybSgpIHtcbiAgY29uc3QgY29uZkZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbmZpcm1hdGlvbkZvcm1cIik7XG4gIGNvbmZGb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgY29uc3QgY292ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvdmVyXCIpO1xuICBjb3Zlci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59XG4iLCIvLyBtZW51IGJ1dHRvblxuY29uc3QgbW9iaWxlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2JpbGVcIik7XG5tb2JpbGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2lkZWJhclwiKTtcbiAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gIG1vYmlsZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59KTtcblxuLy8gbW9yZSBkeW5hbWljIG1lbnVcbmNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpZGViYXJcIik7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7XG4gIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IFwiMTEwMFwiKSB7XG4gICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gICAgbW9iaWxlQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfVxuICBpZiAod2luZG93LmlubmVyV2lkdGggPCBcIjExMDBcIikge1xuICAgIHNpZGViYXIuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICAgIG1vYmlsZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gIH1cbiAgLy8gLy9pZiAoc2lkZWJhci5zdHlsZS5kaXNwbGF5ICE9IFwiZmxleFwiKSB7XG4gIC8vICBtb2JpbGVCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAvLyB9XG59KTtcblxuLy8gd2hlbiB5b3UgY2xpY2sgb24gY29udGVudCB0aGUgbWVudSBkaXNhcHBlYXJzXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuY29udGVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBpZiAod2luZG93LmlubmVyV2lkdGggPCBcIjExMDBcIikge1xuICAgIHNpZGViYXIuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICAgIG1vYmlsZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gIH1cbn0pO1xuXG4vLyBUaGVyZSBtaWdodCBiZSBhIG1vcmUgZWZmaWNpZW50IHdheS4gVGhpcyBzZWVtcyB0byB3b3JrIHRob3VnaC5cbiIsImltcG9ydCB7IGVyYXNlVGFza0QsIGFkZFByb2plY3RELCBhZGRUYXNrRCwgZXJhc2VUYXNrc0QgfSBmcm9tIFwiLi9kb21cIjtcbmltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4vdG9kb1wiO1xuaW1wb3J0IHsgZ2V0VGl0bGUsIGRlbGV0ZVRhc2ssIHNob3dGb3JtQW5kQ292ZXIgfSBmcm9tIFwiLi91dGlsaXR5XCI7XG5cbmNvbnN0IGRvVUkgPSAod29ya2luZ1Rhc2spID0+IHtcbiAgY29uc3QgdGFza05vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt3b3JraW5nVGFzay5pZH1gKTtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gd29ya2luZ1Rhc2sudGl0bGU7XG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0YXNrX3RpdGxlXCIpO1xuICB0YXNrTm9kZS5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRlc2MudGV4dENvbnRlbnQgPSB3b3JraW5nVGFzay5kZXNjcmlwdGlvbjtcbiAgZGVzYy5jbGFzc0xpc3QuYWRkKFwidGFza19kZXNjXCIpO1xuICB0YXNrTm9kZS5hcHBlbmRDaGlsZChkZXNjKTtcblxuICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IGBEdWUgRGF0ZTogJHt3b3JraW5nVGFzay5kdWVEYXRlfWA7XG4gIGR1ZURhdGUuY2xhc3NMaXN0LmFkZChcInRhc2tfZHVlRGF0ZVwiKTtcbiAgdGFza05vZGUuYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG5cbiAgdGFza05vZGUuY2xhc3NMaXN0LmFkZChgJHt3b3JraW5nVGFzay5wcmlvcml0eX1gKTtcbn07XG5cbmNvbnN0IHNldHVwRGVsZXRlQnV0dG9uID0gKHdvcmtpbmdUYXNrKSA9PiB7XG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ0bi50ZXh0Q29udGVudCA9IFwiWFwiO1xuXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3dvcmtpbmdUYXNrLmlkfSAudGFza0J1dHRvbnNgKTtcbiAgZGl2LmFwcGVuZENoaWxkKGJ0bik7XG5cbiAgLy8gd2UgbmVlZCB0byBvYnRhaW4gdGFzayBvYmplY3QgZnJvbSB0aGUgYnV0dG9uIGl0c2VsZlxuICAvLyBiZWNhdXNlIGlmIHdlIHVzZSBhbnkgdmFyaWFibGUgaXQgd29uJ3QgZGVsZXRlIHByb3Blcmx5XG4gIC8vIHRoaXMgaXMgZG9uZSB2aWEgbWF0Y2hpbmcgYnRuIGNsYXNzIG5hbWUgd2hpY2ggaXMgZXF1YWwgdG8gdGhlIGlkXG4gIC8vIG9mIHRoZSB0YXNrIHRoYXQgd2UgYXJlIHNlZWtpbmcgaW4gYSBwcm9qZWN0cyBvYmplY3RcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGNvbnN0IHRhc2tJRCA9IFsuLi5lLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2xhc3NMaXN0XVswXTtcbiAgICBjb25zdCB0aXRsZSA9IGdldFRpdGxlKHRhc2tJRCk7XG4gICAgY29uc3QgY3VycmVudFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdGVkXCIpLnRleHRDb250ZW50O1xuICAgIGRlbGV0ZVRhc2soY3VycmVudFByb2plY3QsIHByb2plY3RzW2N1cnJlbnRQcm9qZWN0XS50YXNrc1t0aXRsZV0pO1xuICAgIGVyYXNlVGFza0QodGFza0lEKTtcbiAgfSk7XG59O1xuXG5mdW5jdGlvbiBzZXR1cEVkaXRGb3JtKHRpdGxlKSB7XG4gIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWxlY3RlZFwiKS50ZXh0Q29udGVudDtcbiAgLy8gdGFzayA9IFRIRSBPTkUgQkVJTkcgQ0xJQ0tFRFxuICBjb25zdCB0YXNrID0gcHJvamVjdHNbY3VycmVudFByb2plY3RdLnRhc2tzW3RpdGxlXTtcblxuICAvLyBmaWxsIHRoZSBmb3JtIGNvcnJlY3RseVxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlXCIpLnZhbHVlID0gdGFzay50aXRsZTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvblwiKS52YWx1ZSA9IHRhc2suZGVzY3JpcHRpb247XG4gIGxldCBhcnIgPSB0YXNrLmR1ZURhdGUuc3BsaXQoXCItXCIpO1xuICBhcnIgPSBbYXJyWzJdLCBhcnJbMF0sIGFyclsxXV0uam9pbihcIi1cIik7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlRGF0ZVwiKS52YWx1ZSA9IGFycjtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmlvcml0eVwiKS52YWx1ZSA9IHRhc2sucHJpb3JpdHk7XG5cbiAgLy8gZGVsZXRlLCBhbmQgbGV0IHRoZSBncmVlbiBidXR0b24gYnVpbGQgaXQgZm9yIHlvdSwgbm8gaW4gdGhpcyBjYXNlXG4gIC8vIHNob3VsZCBoYXZlIGEgc3BlY2lhbCBmdW5jdGlvblxuICBlcmFzZVRhc2tEKHByb2plY3RzW2N1cnJlbnRQcm9qZWN0XS50YXNrc1t0aXRsZV0uaWQpO1xuICBkZWxldGUgcHJvamVjdHNbY3VycmVudFByb2plY3RdLnRhc2tzW3RpdGxlXTtcblxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG5cbiAgY29uc3QgcmJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVkXCIpO1xuICByYnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuICBjb25zdCBnYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ncmVlblwiKTtcbiAgZ2J1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInllbGxvd1wiO1xuICBnYnV0dG9uLnRleHRDb250ZW50ID0gXCJFZGl0XCI7XG59XG5cbmNvbnN0IHNldHVwRWRpdEJ1dHRvbiA9ICh3b3JraW5nVGFzaykgPT4ge1xuICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBidG4udGV4dENvbnRlbnQgPSBcIkVkaXRcIjtcblxuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXYuY2xhc3NMaXN0LmFkZChcInRhc2tCdXR0b25zXCIpO1xuXG4gIGNvbnN0IHRhc2tOb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7d29ya2luZ1Rhc2suaWR9YCk7XG4gIHRhc2tOb2RlLmFwcGVuZENoaWxkKGRpdik7XG4gIGRpdi5hcHBlbmRDaGlsZChidG4pO1xuXG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBzaG93Rm9ybUFuZENvdmVyKCk7XG4gICAgc2V0dXBFZGl0Rm9ybShnZXRUaXRsZShbLi4uZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNsYXNzTGlzdF1bMF0pKTtcbiAgfSk7XG59O1xuXG4vLyBcIkNvbnRyb2xcIiBmdW5jdGlvblxuZXhwb3J0IGZ1bmN0aW9uIHNldHVwVGFza0QodGFzaykge1xuICBkb1VJKHRhc2spO1xuICBzZXR1cEVkaXRCdXR0b24odGFzayk7XG4gIHNldHVwRGVsZXRlQnV0dG9uKHRhc2spO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd0NvbmZpcm1hdGlvbkZvcm0oKSB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbmZpcm1hdGlvbkZvcm1cIik7XG4gIGZvcm0uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICBjb25zdCBjb3ZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY292ZXJcIik7XG4gIGNvdmVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG59XG5cbi8vIFJQQiAtIHJlbW92ZSBwcm9qZWN0IGJ1dHRvblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFJQQigpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJcIik7XG4gIGlmIChoZWFkZXIubGFzdENoaWxkLnRleHRDb250ZW50ICE9PSBcIlhcIikge1xuICAgIGNvbnN0IGRlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZGVsQnRuLnRleHRDb250ZW50ID0gXCJYXCI7XG4gICAgZGVsQnRuLmNsYXNzTGlzdC5hZGQoXCJSUEJcIik7XG4gICAgZGVsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBzaG93Q29uZmlybWF0aW9uRm9ybSgpO1xuICAgIH0pO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChkZWxCdG4pO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVSUEIoKSB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyXCIpO1xuICBjb25zdCBycGIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlJQQlwiKTtcbiAgaWYgKHJwYikge1xuICAgIGhlYWRlci5yZW1vdmVDaGlsZChycGIpO1xuICB9XG59XG5cbi8vIGZlbHQgbGlrZSB0aGlzIGRlc2VydmVzIGEgc2VwZXJhdGUgbW9kdWxlLCBzaW5jZSBpdCdzIG5vdCByZWFsbHkgRE9NIG1hbmlwLlxuZXhwb3J0IGNvbnN0IGNoYW5nZVByb2plY3REID0gKHByb2plY3ROYW1lKSA9PiB7XG4gIGVyYXNlVGFza3NEKCk7XG4gIGlmIChwcm9qZWN0c1twcm9qZWN0TmFtZV0udGFza3MgIT09IHt9KSB7XG4gICAgT2JqZWN0LmtleXMocHJvamVjdHNbcHJvamVjdE5hbWVdLnRhc2tzKS5mb3JFYWNoKChlbSkgPT4ge1xuICAgICAgYWRkVGFza0QocHJvamVjdHNbcHJvamVjdE5hbWVdLnRhc2tzW2VtXSk7XG4gICAgICBzZXR1cFRhc2tEKHByb2plY3RzW3Byb2plY3ROYW1lXS50YXNrc1tlbV0sIHByb2plY3ROYW1lKTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChwcm9qZWN0TmFtZSAhPT0gXCJIT01FXCIpIHtcbiAgICBhZGRSUEIoKTtcbiAgfSBlbHNlIHtcbiAgICByZW1vdmVSUEIoKTtcbiAgfVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFByb2plY3RMaXN0ZW5lcihpZCkge1xuICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7aWR9YCk7XG5cbiAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdGVkXCIpO1xuICAgIHRlbXAuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IFwiMTAyNFwiKSB7XG4gICAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaWRlYmFyXCIpO1xuICAgICAgY29uc3QgbW9iaWxlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2JpbGVcIik7XG4gICAgICBzaWRlYmFyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIG1vYmlsZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJpbml0aWFsXCI7XG4gICAgfVxuICAgIGNoYW5nZVByb2plY3REKHByb2plY3QudGV4dENvbnRlbnQpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uQ2xpY2tpbmdSUEIoKSB7XG4gIC8vIGZpcnN0IGNoZWNrIGlmIHlvdSBhY3R1YWxseSB3YW50IHRvIGRlbGV0ZVxuICAvLyBnZXQgaWQsIGRlbGV0ZSBvbiBjb250ZW50IGFuZCB0aGVuIHNpZGViYXIgdXNpbmcgaWQuIHJldHVybiB0byBob21lXG4gIGNvbnN0IHByb2plY3ROYW1lMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VsZWN0ZWRcIikudGV4dENvbnRlbnQ7XG4gIGNvbnN0IHByb2plY3RJRCA9IHByb2plY3RzW3Byb2plY3ROYW1lMl0uaWQ7XG4gIGRlbGV0ZSBwcm9qZWN0c1twcm9qZWN0TmFtZTJdO1xuICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7cHJvamVjdElEfWApO1xuICBwcm9qZWN0LnJlbW92ZSgpO1xuXG4gIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI1ByMFwiKTtcbiAgaG9tZS5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gIGNoYW5nZVByb2plY3REKFwiSE9NRVwiKTtcblxuICAvLyBzYXZlIGJlY2F1c2UgeW91IHJlbW92ZWQgYSBwcm9qZWN0XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcbn1cblxuYWRkUHJvamVjdExpc3RlbmVyKFwiUHIwXCIpO1xuXG4vLyBsb2FkIGFsbCBwcm9qZWN0cyBhbmQgdGFza3MgZnJvbSB0aGUgbG9jYWwgc3RvcmFnZVxuZXhwb3J0IGNvbnN0IGxvYWRGcm9tU3RvcmFnZSA9ICgpID0+IHtcbiAgT2JqZWN0LmtleXMocHJvamVjdHMpLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICBpZiAocHJvamVjdCAhPT0gXCJIT01FXCIpIHtcbiAgICAgIGFkZFByb2plY3REKHByb2plY3RzW3Byb2plY3RdLCBwcm9qZWN0c1twcm9qZWN0XS5pZCk7XG4gICAgICBhZGRQcm9qZWN0TGlzdGVuZXIocHJvamVjdHNbcHJvamVjdF0uaWQpO1xuICAgIH1cbiAgfSk7XG5cbiAgT2JqZWN0LmtleXMocHJvamVjdHMuSE9NRS50YXNrcykuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGFkZFRhc2tEKHByb2plY3RzLkhPTUUudGFza3NbdGFza10pO1xuICAgIHNldHVwVGFza0QocHJvamVjdHMuSE9NRS50YXNrc1t0YXNrXSwgXCJIT01FXCIpO1xuICB9KTtcbn07XG5cbi8vIFByZXZpb3VzIHNldHVwUHJvamVjdCBhbmQgc2V0dXBUYXNrIGhhdmUgbWVyZ2VkIGR1ZSB0byBlc2xpbnQgc2hvdXRpbmcgYXQgbWVcbi8vIGZvciBkZXBlbmRlbmN5IGN5Y2xlIGVycm9ycy4gSSBoYXZlIG1lcmdlZCB0aGVtIHRvZ2V0aGVyIGludG8gdGhpcyBzZXR1cFxuLy8gZmlsZS4gSWRlYWxseSBJIHdvdWxkIGZpbmQgYW5vdGhlciB3YXkgdG8gc3BpdCB0aGlzIG1vZHVsZSBpbnRvIG1vcmUgcGllY2VzLFxuLy8gdGhpcyB3b3VsZCBhbGwgaGF2ZSBiZWVuIGVhc2llciwgaWYgSSBoYWQgdXNlZCBlc2xpbnQgZnJvbSBzdGFydCwgc28gd29yayB0b1xuLy8gYmUgZG9uZSBoZXJlLCBpZiBtb3JlIGNvZGUgaXMgdG8gYmUgaW5jbHVkZWQsIGVzcGVjaWFsbHkgY29kZSB0aGF0IGlzIHJlbGF0ZWRcbi8vIHRvIGFueSBraW5kIG9mIHNldHVwLlxuIiwiZnVuY3Rpb24gc3RvcmFnZUF2YWlsYWJsZSh0eXBlKSB7XG4gIGxldCBzdG9yYWdlO1xuICB0cnkge1xuICAgIHN0b3JhZ2UgPSB3aW5kb3dbdHlwZV07XG4gICAgY29uc3QgeCA9IFwiX19zdG9yYWdlX3Rlc3RfX1wiO1xuICAgIHN0b3JhZ2Uuc2V0SXRlbSh4LCB4KTtcbiAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oeCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gKFxuICAgICAgZSBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbiAmJlxuICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgKGUuY29kZSA9PT0gMjIgfHxcbiAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICBlLmNvZGUgPT09IDEwMTQgfHxcbiAgICAgICAgLy8gdGVzdCBuYW1lIGZpZWxkIHRvbywgYmVjYXVzZSBjb2RlIG1pZ2h0IG5vdCBiZSBwcmVzZW50XG4gICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgICAgZS5uYW1lID09PSBcIlF1b3RhRXhjZWVkZWRFcnJvclwiIHx8XG4gICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgZS5uYW1lID09PSBcIk5TX0VSUk9SX0RPTV9RVU9UQV9SRUFDSEVEXCIpICYmXG4gICAgICAvLyBhY2tub3dsZWRnZSBRdW90YUV4Y2VlZGVkRXJyb3Igb25seSBpZiB0aGVyZSdzIHNvbWV0aGluZyBhbHJlYWR5IHN0b3JlZFxuICAgICAgc3RvcmFnZSAmJlxuICAgICAgc3RvcmFnZS5sZW5ndGggIT09IDBcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBwcm9qZWN0cyA9IHtcbiAgSE9NRToge1xuICAgIHRhc2tzOiB7fSxcbiAgICBpZDogXCJQcjBcIixcbiAgfSxcbn07XG5cbmlmIChzdG9yYWdlQXZhaWxhYmxlKSB7XG4gIGxldCByZXRyaWV2ZWRPYmplY3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpO1xuICBpZiAocmV0cmlldmVkT2JqZWN0ID09PSBudWxsKSB7XG4gICAgcmV0cmlldmVkT2JqZWN0ID0gSlNPTi5zdHJpbmdpZnkoe30pO1xuICB9XG4gIHJldHJpZXZlZE9iamVjdCA9IEpTT04ucGFyc2UocmV0cmlldmVkT2JqZWN0KTtcbiAgLy8gZm9yIChjb25zdCBlbSBvZiBPYmplY3Qua2V5cyhyZXRyaWV2ZWRPYmplY3QpKSB7XG4gIC8vICAgcHJvamVjdHNbZW1dID0gcmV0cmlldmVkT2JqZWN0W2VtXTtcbiAgLy8gfVxuICBPYmplY3Qua2V5cyhyZXRyaWV2ZWRPYmplY3QpLmZvckVhY2goKGVtKSA9PiB7XG4gICAgcHJvamVjdHNbZW1dID0gcmV0cmlldmVkT2JqZWN0W2VtXTtcbiAgfSk7XG4gIC8vIHByb2plY3RzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJyk7XG59XG5cbmV4cG9ydCBjb25zdCB0b2RvID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGlkKSA9PiAoe1xuICB0aXRsZSxcbiAgZGVzY3JpcHRpb24sXG4gIGR1ZURhdGUsXG4gIHByaW9yaXR5LFxuICBpZCxcbn0pO1xuXG5leHBvcnQgY29uc3QgcHJvamVjdEZhY3RvcnkgPSAodGl0bGUgLyogLCBkdWVEYXRlICovLCBpZCkgPT4gKHtcbiAgdGl0bGUgLyogLCBkdWVlRGF0ZSAqLyxcbiAgaWQsXG59KTtcbiIsImltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4vdG9kb1wiO1xuaW1wb3J0IHsgZXhwaXJlQ2hlY2sgfSBmcm9tIFwiLi9kYXRlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0R1ZURhdGUoKSB7XG4gIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWxlY3RlZFwiKS50ZXh0Q29udGVudDtcbiAgT2JqZWN0LmtleXMocHJvamVjdHNbY3VycmVudFByb2plY3RdLnRhc2tzKS5mb3JFYWNoKCh0YXNrTmFtZSkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgLiR7cHJvamVjdHNbY3VycmVudFByb2plY3RdLnRhc2tzW3Rhc2tOYW1lXS5pZH1gXG4gICAgKTtcbiAgICBpZiAoZXhwaXJlQ2hlY2socHJvamVjdHNbY3VycmVudFByb2plY3RdLnRhc2tzW3Rhc2tOYW1lXSkpIHtcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwiZXhwaXJlZFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJleHBpcmVkXCIpO1xuICAgIH1cbiAgfSk7XG5cbiAgLypcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICAgIGlmIChwcm9qX2V4cGlyZUNoZWNrKCkpIHtcbiAgICAgICAgY29udGVudC5zdHlsZS5ib3JkZXJUb3AgPSBcIjF2aCByZWQgc29saWRcIjtcbiAgICAgICAgY29udGVudC5zdHlsZS5ib3JkZXJMZWZ0ID0gXCIxdmggcmVkIHNvbGlkXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29udGVudC5zdHlsZS5ib3JkZXIgPSBcIm5vbmVcIjtcbiAgICB9ICovXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUaXRsZSh0YXNrSUQpIHtcbiAgY29uc3QgY3VycmVudFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdGVkXCIpLnRleHRDb250ZW50O1xuICBsZXQgdGl0bGU7XG5cbiAgT2JqZWN0LmtleXMocHJvamVjdHNbY3VycmVudFByb2plY3RdLnRhc2tzKS5mb3JFYWNoKCh0YXNrTmFtZSkgPT4ge1xuICAgIGlmIChwcm9qZWN0c1tjdXJyZW50UHJvamVjdF0udGFza3NbdGFza05hbWVdLmlkID09PSB0YXNrSUQpIHtcbiAgICAgIHRpdGxlID0gcHJvamVjdHNbY3VycmVudFByb2plY3RdLnRhc2tzW3Rhc2tOYW1lXS50aXRsZTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gdGl0bGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVUYXNrKHByb2plY3QsIHRhc2spIHtcbiAgZGVsZXRlIHByb2plY3RzW3Byb2plY3RdLnRhc2tzW3Rhc2sudGl0bGVdO1xuICAvLyB3ZSBhcmUgYWN0dWFsbHkgZGVsZXRpbmcsIG5vdCBqdXN0IGVyYXNpbmcgZnJvbSBzY3JlZW4hISFcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd0Zvcm1BbmRDb3ZlcigpIHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza0Zvcm1cIik7XG4gIGNvbnN0IGNvdmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb3ZlclwiKTtcbiAgY292ZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgZm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IFwiLi9ldmVudExpc3RlbmVyc1wiO1xuaW1wb3J0IFwiLi9kYXRlXCI7XG5pbXBvcnQgXCIuL21vYmlsZVwiO1xuaW1wb3J0IHsgbG9hZEZyb21TdG9yYWdlIH0gZnJvbSBcIi4vc2V0dXBcIjtcblxubG9hZEZyb21TdG9yYWdlKCk7XG4vKlxuICAgIFRPRE86XG4gICAgLSBDb25maWd1cmUgZGF0ZXMgcHJvcGVybHlcbiAgICAgICAgVHdvIHR5cGVzIG9mIHRhc2tzOlxuICAgICAgICAgICAgMS4gU29tZXRoaW5nIHRoYXQgbmVlZHMgdG8gYmUgZG9uZSBvbiBhIHNwZWNpZmljIGRheS4gSXQgY2FuIGhhdmUgYVxuICAgICAgICAgICAgICAgIGR1ZURhdGUvZHVlSG91ciwgYnV0IGl0J3Mgb3B0aW9uYWwuIEl0IG9ubHkgc2hvd3Mgb24gb25lIGRheVxuICAgICAgICAgICAgMi4gU29tZXRoaW5nIHRoYXQgbmVlZHMgdG8gYmUgZG9uZSB0aWxsIGEgc3BlY2lmaWVkIGR1ZURhdGUuIFNvIGl0XG4gICAgICAgICAgICAgICAgc2hvd3MgZXZlcnkgZGF5IHVudGlsIHRoZSBkdWVEYXRlLiBFeHBpcmVkIHNlY3Rpb24gbWlnaHQgYmVcbiAgICAgICAgICAgICAgICBvZiB1c2UuXG5cbiAgICAgICAgICAgIElkZWE6XG4gICAgICAgICAgICBBbHdheXMgc2hvdyBhbGwgdGhhdCBjYW4gYmUgc2hvd24uIElmIGl0IGhhcHBlbnMgdGhhdCBvbmUgb2YgdGhlbVxuICAgICAgICAgICAgZXhwaXJlZCBzaW1wbHkgbmVkb3RlIHNvIHVzaW5nIHJlZCBib3JkZXIgb3IgKGV4cGlyZWQpIHRhZy5cbiAgICAgICAgICAgIEl0IGNhbiBiZSBzaG93biBpZiBpdHMgc3RhcnQgZGF5IGlzIHRvZGF5IG9yIGVhcmxpZXIuIC0vLy8tXG5cbiAgICAtIEFkZCBhIGZvcm0gZm9yIHVzZXIgaW5wdXQgLS8vLy1cbiAgICAtIFRhc2sgY2hhbmdlczpcbiAgICAgICAgICAgIDEpIFN0eWxlIGNoYW5nZXM6IFJlZG8gdGFzayBzcXVhcmVzIC0vLy8tLCBtYXliZSBub3RcbiAgICAgICAgICAgIDIpIFRhc2sgZGVzY3JpcHRpb24vZWRpdCBzeXN0ZW0gLS8vLy1cbiAgICAgICAgICAgIDMpIE1ha2UgcHJpb3JpdGVzIG1hdHRlciwgYm9yZGVyIGNvbG9yIC0vLy8tXG4gICAgLSBGSVggcmVtb3ZlIGJ1dHRvbiwgbmFtZWx5IHdoZW4geW91IGRvbid0IGlucHV0IGFueXRoaW5nIGluIHRoZSBmb3JtXG4gICAgICAgIG11bHRpcGxlIHRhc2tzIGFyZSBtYWRlIGV2ZW50IHRob3VnaCB0aGVyZSBpcyBvbmx5IG9uZSBzYXZlZCBpbiB0aGVcbiAgICAgICAgb2JqZWN0LiBpdCBzaG93cyBjb3JyZWN0bHkgYWZ0ZXIgcmVmcmVzaCAtLy8vLVxuICAgIC0gRklYOiBwcmV2ZW50IGZyb20gY2hhbmdpbmcgcHJvamVjdHMgd2hlbiB0aGUgZm9ybSBpcyBvcGVuZWQsXG4gICAgICAgIGNvbnNpZGVyIGFkZGluZyBhIGNvdmVyIGp1c3QgbGlrZSBpbiB0aGUgbGlicmFyeSBwcm9qZWN0IC0vLy8tXG4gICAgLSBGSVg6IHByb2plY3Qvc2hvcnRjdXQgbmFtZSBsZXR0ZXJzIGdvaW5nIHRvIG5ldyBsaW5lLCBpbnN0ZWFkIG9ubHkgd29yZHNcbiAgICAgICAgLS8vLy0gYnV0IGNhbid0IGZpeCBsb25nIG5hbWVzLCBtYXliZSBmaW5kIGEgd2F5IHRvIGFkZCBcIi1cIiBhdCBlbmQgd2hlblxuICAgICAgICBicmVha2luZ1xuICAgIC0gQWRkIExvY2FsIHN0b3JhZ2UgLS8vLy1cbiAgICAtIEFkZCBhIGNvbmZpcm1hdGlvbiBmb3JtIHdoZW4gYXR0ZW1wdGluZyB0byBkZWxldGUgYSBwcm9qZWN0IC0vLy8tXG4gICAgLSBBZGQgbWVkaWEgcXVlcmllc1xuICAgIC0gY2hhbmdlIHByb2plY3RJZCBhbmQgaWQgdG8gY2FsY3VsYXRlIGlkIGJhc2VkIG9uIHdoYXQgaXMgdGhlIGJpZ2dlc3QgaWRcbiAgICAgICAgcHJlc2VudCBvbiB0aGUgY3VycmVudCBwcm9qZWN0L3Byb2plY3RzIGFuZCB0aGVuIGFkZCAxLCB0aGlzIHdheVxuICAgICAgICBpdCBpcyBub3QgYmFzZWQgb24gbGVuZ3RoIGFuZCBkdXBlIGJ1Z3MgZG8gbm90IGFwcGVhciAtLy8vLVxuICAgIC0gRml4IGRhdGVzIGZvciBlZGl0aW5nISAtLy8vLVxuICAgIC0gRG8gc29tZXRoaW5nIHdpdGggcHJvamVjdCBkYXRlcywgbWF5YmUgY29udGVudCBib3JkZXIgdG8gc2lnbmlmeSB0aGUgbGF0ZVxuICAgICAgICBwcm9qZWN0IC0vLy8tXG4gICAgLSBNYWtlIGEgcmVmcmVzaCBmdW5jdGlvbiwgdGhhdCByZWxvYWRzLCBtYXliZSBqdXN0IGNoYW5nZVByb2plY3Qgc28geW91XG4gICAgICAgIGRvbid0IGhhdmUgdG8gbG9jYXRpb24ucmVsb2FkKClcbiAgICAtIFRleHRBcmVhIGV4cGFuZGluZyBEOiAtLy8vLVxuICAgIC0gY29uc2lkZXIgbW9yZSBjb2xzIGFuZCByb3cgZm9yIFRleHRBcmVhIC0vLy8tXG4gICAgLSBSZXRoaW5rIHRoZSBuZWVkIGZvciBkdWVEYXRlIGluIHByb2plY3QsIEkgdGhpbmsgbm90IG5lZWRlZCEhIC0vLy8tXG4gICAgLSBwcmV2ZW50IHRpdGxlIG5hbWUgZHVwbGljYXRpb24gb24gYWRkaW5nIHRhc2ssIHRoZSBmb3JtIGdvZXMgYXdheSBmb3Igc29tZVxuICAgICAgICByZWFzb24gLS8vLy1cbiAgICAtIGdob3N0IHRhc2sgYXBwZWFyaW5nOiBidWcgLS8vLy1cbiAgICAtIG1ha2UgcmVkIGJ1dHRvbiByZWNvdmVyIHRoZSB0YXNrLCB5b3UgaGF2ZSBhbGwgdGhlIGRhdGEgbmVlZGVkIGluIHRoZSBmb3JtXG4gICAgICAgICwgaW5zdGVhZCByZXdvcmtlZCB0byBpbmNsdWRlIG9ubHkgZWRpdCBidXR0b24gLS8vLy1cbiAgICAtIGFkZCBrZXliaW5kcywgZXNwZWNpYWxseSBlbnRlciBpbnN0ZWFkIG9mIG1vdXNlIGNsaWNrIC0vLy8tXG4gICAgLSBDTEVBTiBDT0RFISEhISEgeW91IGtub3cgY3VycmVudFByb2plY3QgcmVwZWF0IGFsbCB0aGUgdGltZSBhbmQgb3RoZXIgamF6elxuICAgIC0gZXhwZXJpbWVudCB3aXRoIHdvcmtpbmdfdGFzaywgdHJ5IHRvIHJlbW92ZSAtLy8vLVxuICAgIC0gcmV3b3JrIG1vZHVsZXMsIG1heWJlIG5vIG5lZWQgdG8gZ2VuZXJhbGl6ZSBldmVyeXRoaW5nLCBleHBlcmltZW50XG4gICAgLSBjbGVhbmVyIGNzcywgbW9yZSBjb21tZW50cywgY29uc2lkZXIgYW5pbWF0aW9ucy90cmFuc2Zvcm1hdGlvbnMgZm9yXG4gICAgICAgIGNvbnNpZGVyIHJlbWFraW5nIGNzcyBncm91bmQgdXAsIG1ha2UgaXQgd29yayBvbiBtb2JpbGUgZmlyc3RcbiAgICAtIGRlbGV0ZSB0aGUgdGFzayBvbmx5IGFmdGVyIHRoZSBlZGl0IGZvcm0gaXMgc3VibWl0dGVkLCBwb3RlbnRpYWxseSB1c2VcbiAgICBhc3luYy93YWl0IGZ1bmN0aW9uXG4gICAgLSByZXdvcmsgbW9iaWxlIGRlc2lnbiwgcGVyaGFwcyBhZGRUYXNrIG9uIHRvcCBhbmQgY2FsYW5kZXIgb24gYm90dG9tLFxuICAgIG1pZ2h0IGZlZWwgbW9yZSBuYXR1cmFsIC0vLy8tXG5cbiAgICBQb3RlbnRpYWwgYnVnczpcbiAgICAgICAgU21hbGwgYmxhbmsgcmVjdGFuZ2xlIGFwcGVhcmluZyBzb21ldGltZXMgd2hlbiByZXNpemluZy4gUmVmcmVzaCBmaXhlcy5cbiovXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=