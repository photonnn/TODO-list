/******/ (() => {
  // webpackBootstrap
  /******/ var __webpack_modules__ = {
    /***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
      /*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js"
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js"
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__
          );
        // Imports

        var ___CSS_LOADER_EXPORT___ =
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()
          );
        // Module
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          "* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  --neutral: #f5f5f5;\n  --violet: white;\n  --stone: #6e6279;\n  --zinc: #3f3f46;\n  --hover: rgb(69, 31, 83);\n}\n\nbody,\nhtml {\n  height: 100%;\n  width: 100%;\n  overflow-y: auto;\n}\n\nbody {\n  display: flex;\n  position: fixed;\n}\n\n#sidebar {\n  flex: 1;\n  background-color: var(--zinc);\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  width: 100%;\n}\n\n#sidebar > div {\n  font-size: 6vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.home {\n  flex: 1;\n  border-bottom: 5px black solid;\n  background-color: var(--stone);\n  user-select: none;\n}\n\n#projects {\n  flex: 7;\n}\n\n.home:hover {\n  background-color: var(--hover);\n  cursor: pointer;\n}\n\n#content {\n  flex: 3;\n  background-color: grey;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: column-reverse;\n  height: 100vh;\n  width: 100%;\n}\n\n.expand {\n  display: flex;\n  flex-direction: column;\n}\n\n.expand > div:first-child,\n#addProject {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.expand > * {\n  width: 100%;\n}\n\n#addProject {\n  border-top: 3px solid black;\n  background-color: var(--stone);\n  user-select: none;\n}\n\n#addProject:hover {\n  cursor: pointer;\n  background-color: var(--hover);\n}\n\n.expand > div:first-child {\n  border-bottom: 3px solid black;\n}\n\n.expand .shortcut {\n  background-color: var(--stone);\n  padding: 5%;\n  border-bottom: 3px solid black;\n  word-break: break-word;\n  user-select: none;\n  cursor: pointer;\n  display: flex;\n  justify-content: space-between;\n}\n\n.expand .shortcuts {\n  overflow-y: auto;\n  max-height: 70vh;\n}\n\n.shortcut:hover {\n  background-color: var(--hover);\n  cursor: pointer;\n}\n\n.expand > div {\n  flex: 5;\n  text-align: center;\n}\n\n#tasks {\n  flex: 1;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(35vh, 1fr));\n  grid-gap: 2vh;\n  overflow-y: auto;\n  width: 100%;\n  padding: 3%;\n}\n\n#tasks > div {\n  height: 35vh;\n  background: rgb(0, 147, 223);\n  background: radial-gradient(\n    circle,\n    rgba(0, 147, 223, 1) 0%,\n    rgba(211, 239, 242, 1) 49%,\n    rgba(17, 16, 16, 1) 100%\n  );\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  border-radius: 10%;\n}\n\n#tasks > div > div {\n  word-break: break-word;\n  font-size: 3vh;\n}\n\n.Must {\n  background: rgb(232, 5, 5);\n  background: radial-gradient(\n    circle,\n    rgba(232, 5, 5, 1) 0%,\n    rgba(213, 144, 144, 1) 49%,\n    rgba(17, 16, 16, 1) 100%\n  ) !important;\n}\n\n.Necessary {\n  background: rgb(232, 107, 5);\n  background: radial-gradient(\n    circle,\n    rgba(232, 107, 5, 1) 0%,\n    rgba(235, 200, 163, 1) 49%,\n    rgba(17, 16, 16, 1) 100%\n  ) !important;\n}\n\n.Maybe {\n  background: rgb(193, 232, 5);\n  background: radial-gradient(\n    circle,\n    rgba(193, 232, 5, 1) 0%,\n    rgba(224, 235, 163, 1) 49%,\n    rgba(17, 16, 16, 1) 100%\n  ) !important;\n}\n\n#content > *:not(#tasks) {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n\n.header {\n  font-size: 40px;\n}\n\n.header .RPB {\n  background-color: red;\n  position: absolute;\n  height: max(55px, 7vh);\n  width: max(55px, 7vh);\n  font-size: max(40px, 3rem);\n  right: 0;\n  top: 0;\n  color: rgb(85, 3, 19);\n}\n\n#addTask {\n  display: flex;\n  align-items: center;\n  font-size: max(40px, 3rem);\n  color: white;\n  background-color: black;\n  user-select: none;\n  height: max(55px, 7vh);\n}\n\n#addTask:hover {\n  opacity: 0.5;\n  cursor: pointer;\n}\n\n#addTask:active {\n  opacity: 0.2;\n}\n\n.selected {\n  border-right: 10px groove var(--hover);\n}\n\n#date {\n  width: 40vh !important;\n  font-size: 5vh;\n  border: none;\n  background: grey;\n}\n\n.calLeft {\n  margin-right: 2vh;\n}\n\n.calRight {\n  margin-left: 2vh;\n}\n\n.navigatecal {\n  font-size: 8vh;\n  cursor: pointer;\n  user-select: none;\n}\n\n#taskForm {\n  width: 65vh;\n  height: 65vh;\n  left: calc(50% - 10vh);\n  top: calc(50% - 30vh);\n  padding-left: 5%;\n  padding-right: 5%;\n  font-size: 3vh;\n}\n\n#projectForm {\n  width: 55vh;\n  height: 25vh;\n  left: calc(50% - 10vh);\n  top: calc(50% - 30vh);\n  padding: 0 2% 0 2%;\n  font-size: 3vh;\n}\n\n#confirmationForm {\n  width: 50vh;\n  height: 35vh;\n  left: calc(50% - 10vh);\n  top: calc(50% - 30vh);\n  padding: 0 3% 0 3%;\n  font-size: 3vh;\n}\n\n#projectForm,\n#taskForm,\n#confirmationForm {\n  position: absolute;\n  z-index: 2;\n  background-color: var(--stone);\n  display: none;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: flex-start;\n  border: 5px var(--hover) solid;\n}\n\n.cover {\n  position: fixed;\n  top: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.6);\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  display: none;\n}\n\n#taskForm div,\n#projectForm div {\n  display: flex;\n}\n\n#taskForm label,\n#projectForm label {\n  flex: 1;\n  min-width: 20vh;\n  font-size: 3vh;\n}\n\n#taskForm input,\n#taskForm select {\n  flex: 6;\n  min-width: 30vh;\n}\n\n#description,\n#taskForm input,\n#priority,\n#proj_title,\n#proj_dueDate {\n  font-size: 2vh;\n  padding: 1%;\n}\n\n#description {\n  height: 20vh;\n  max-width: 30vh;\n  resize: none;\n}\n\n.redBtn {\n  background-color: red;\n  margin-right: 25%;\n}\n\n.greenBtn {\n  background-color: rgb(47, 255, 47);\n}\n\n.redBtn,\n.greenBtn {\n  font-size: 3vh;\n  padding: 10%;\n  width: 15vh;\n  height: 0.5vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.fbtn {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n\n.expired {\n  border: 5px solid red;\n}\n\n.task_desc {\n  overflow-y: auto;\n  flex: 6;\n  font-size: 1.5rem;\n}\n\n.task_dueDate {\n  flex: 1;\n}\n\n.task_title,\n.task_desc,\n.task_dueDate {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.212);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n}\n\n.task_title {\n  flex: 1;\n  padding: 0 6%;\n}\n\n.taskButtons > button {\n  font-size: 3vh;\n  color: white;\n  background-color: black;\n  opacity: 0.5;\n}\n\n.mobile {\n  display: none;\n}\n\n@media only screen and (max-width: 1100px) {\n  body,\n  html {\n    height: 100%;\n  }\n\n  .mobile {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 55px;\n    height: 55px;\n    color: black;\n    overflow: hidden;\n    background-color: black;\n    border-right: 1px solid white;\n  }\n\n  .mobile:hover {\n    cursor: pointer;\n  }\n\n  #sidebar {\n    position: absolute;\n    z-index: 1;\n    left: 0;\n    display: none;\n    max-height: 100vh;\n    max-width: min(75%, 300px);\n  }\n\n  #projectForm,\n  #taskForm,\n  #confirmationForm {\n    position: absolute;\n    margin-left: auto;\n    margin-right: auto;\n    left: 0;\n    right: 0;\n    text-align: center;\n    max-width: 100%;\n    width: 400px;\n    height: 200px;\n  }\n\n  #taskForm,\n  #projectForm {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    min-height: 100%;\n    height: min-content;\n    text-align: center;\n    align-items: center;\n  }\n\n  #projectForm label {\n    max-height: 50px;\n  }\n\n  #projectForm > div {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n\n  #projectForm > div > * {\n    font-size: 2rem;\n    width: 90%;\n  }\n\n  #taskForm label {\n    font-size: 1.5rem;\n  }\n\n  #taskForm #title,\n  #taskForm #dueDate {\n    font-size: 1rem;\n    height: 50px;\n    width: 90%;\n  }\n\n  #description {\n    width: 90%;\n    max-width: none;\n    font-size: 1rem;\n    min-height: 200px;\n  }\n\n  #priority {\n    font-size: 1rem;\n    width: 90%;\n    justify-content: center;\n  }\n\n  #taskForm > div {\n    position: relative;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin-bottom: 20px;\n  }\n\n  .fbtn {\n    display: flex;\n    flex-direction: row !important;\n  }\n\n  .fbtn > * {\n    font-size: 1.7rem;\n  }\n\n  .RPB {\n    font-size: 40px;\n    z-index: 1;\n  }\n\n  #date {\n    max-width: 250px;\n    font-size: 2rem;\n  }\n\n  #addTask {\n    margin: 0 100px;\n  }\n}\n",
          "",
          {
            version: 3,
            sources: ["webpack://./src/style.css"],
            names: [],
            mappings:
              "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",
            sourcesContent: [
              "* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  --neutral: #f5f5f5;\n  --violet: white;\n  --stone: #6e6279;\n  --zinc: #3f3f46;\n  --hover: rgb(69, 31, 83);\n}\n\nbody,\nhtml {\n  height: 100%;\n  width: 100%;\n  overflow-y: auto;\n}\n\nbody {\n  display: flex;\n  position: fixed;\n}\n\n#sidebar {\n  flex: 1;\n  background-color: var(--zinc);\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  width: 100%;\n}\n\n#sidebar > div {\n  font-size: 6vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.home {\n  flex: 1;\n  border-bottom: 5px black solid;\n  background-color: var(--stone);\n  user-select: none;\n}\n\n#projects {\n  flex: 7;\n}\n\n.home:hover {\n  background-color: var(--hover);\n  cursor: pointer;\n}\n\n#content {\n  flex: 3;\n  background-color: grey;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: column-reverse;\n  height: 100vh;\n  width: 100%;\n}\n\n.expand {\n  display: flex;\n  flex-direction: column;\n}\n\n.expand > div:first-child,\n#addProject {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.expand > * {\n  width: 100%;\n}\n\n#addProject {\n  border-top: 3px solid black;\n  background-color: var(--stone);\n  user-select: none;\n}\n\n#addProject:hover {\n  cursor: pointer;\n  background-color: var(--hover);\n}\n\n.expand > div:first-child {\n  border-bottom: 3px solid black;\n}\n\n.expand .shortcut {\n  background-color: var(--stone);\n  padding: 5%;\n  border-bottom: 3px solid black;\n  word-break: break-word;\n  user-select: none;\n  cursor: pointer;\n  display: flex;\n  justify-content: space-between;\n}\n\n.expand .shortcuts {\n  overflow-y: auto;\n  max-height: 70vh;\n}\n\n.shortcut:hover {\n  background-color: var(--hover);\n  cursor: pointer;\n}\n\n.expand > div {\n  flex: 5;\n  text-align: center;\n}\n\n#tasks {\n  flex: 1;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(35vh, 1fr));\n  grid-gap: 2vh;\n  overflow-y: auto;\n  width: 100%;\n  padding: 3%;\n}\n\n#tasks > div {\n  height: 35vh;\n  background: rgb(0, 147, 223);\n  background: radial-gradient(\n    circle,\n    rgba(0, 147, 223, 1) 0%,\n    rgba(211, 239, 242, 1) 49%,\n    rgba(17, 16, 16, 1) 100%\n  );\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  border-radius: 10%;\n}\n\n#tasks > div > div {\n  word-break: break-word;\n  font-size: 3vh;\n}\n\n.Must {\n  background: rgb(232, 5, 5);\n  background: radial-gradient(\n    circle,\n    rgba(232, 5, 5, 1) 0%,\n    rgba(213, 144, 144, 1) 49%,\n    rgba(17, 16, 16, 1) 100%\n  ) !important;\n}\n\n.Necessary {\n  background: rgb(232, 107, 5);\n  background: radial-gradient(\n    circle,\n    rgba(232, 107, 5, 1) 0%,\n    rgba(235, 200, 163, 1) 49%,\n    rgba(17, 16, 16, 1) 100%\n  ) !important;\n}\n\n.Maybe {\n  background: rgb(193, 232, 5);\n  background: radial-gradient(\n    circle,\n    rgba(193, 232, 5, 1) 0%,\n    rgba(224, 235, 163, 1) 49%,\n    rgba(17, 16, 16, 1) 100%\n  ) !important;\n}\n\n#content > *:not(#tasks) {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n\n.header {\n  font-size: 40px;\n}\n\n.header .RPB {\n  background-color: red;\n  position: absolute;\n  height: max(55px, 7vh);\n  width: max(55px, 7vh);\n  font-size: max(40px, 3rem);\n  right: 0;\n  top: 0;\n  color: rgb(85, 3, 19);\n}\n\n#addTask {\n  display: flex;\n  align-items: center;\n  font-size: max(40px, 3rem);\n  color: white;\n  background-color: black;\n  user-select: none;\n  height: max(55px, 7vh);\n}\n\n#addTask:hover {\n  opacity: 0.5;\n  cursor: pointer;\n}\n\n#addTask:active {\n  opacity: 0.2;\n}\n\n.selected {\n  border-right: 10px groove var(--hover);\n}\n\n#date {\n  width: 40vh !important;\n  font-size: 5vh;\n  border: none;\n  background: grey;\n}\n\n.calLeft {\n  margin-right: 2vh;\n}\n\n.calRight {\n  margin-left: 2vh;\n}\n\n.navigatecal {\n  font-size: 8vh;\n  cursor: pointer;\n  user-select: none;\n}\n\n#taskForm {\n  width: 65vh;\n  height: 65vh;\n  left: calc(50% - 10vh);\n  top: calc(50% - 30vh);\n  padding-left: 5%;\n  padding-right: 5%;\n  font-size: 3vh;\n}\n\n#projectForm {\n  width: 55vh;\n  height: 25vh;\n  left: calc(50% - 10vh);\n  top: calc(50% - 30vh);\n  padding: 0 2% 0 2%;\n  font-size: 3vh;\n}\n\n#confirmationForm {\n  width: 50vh;\n  height: 35vh;\n  left: calc(50% - 10vh);\n  top: calc(50% - 30vh);\n  padding: 0 3% 0 3%;\n  font-size: 3vh;\n}\n\n#projectForm,\n#taskForm,\n#confirmationForm {\n  position: absolute;\n  z-index: 2;\n  background-color: var(--stone);\n  display: none;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: flex-start;\n  border: 5px var(--hover) solid;\n}\n\n.cover {\n  position: fixed;\n  top: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.6);\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  display: none;\n}\n\n#taskForm div,\n#projectForm div {\n  display: flex;\n}\n\n#taskForm label,\n#projectForm label {\n  flex: 1;\n  min-width: 20vh;\n  font-size: 3vh;\n}\n\n#taskForm input,\n#taskForm select {\n  flex: 6;\n  min-width: 30vh;\n}\n\n#description,\n#taskForm input,\n#priority,\n#proj_title,\n#proj_dueDate {\n  font-size: 2vh;\n  padding: 1%;\n}\n\n#description {\n  height: 20vh;\n  max-width: 30vh;\n  resize: none;\n}\n\n.redBtn {\n  background-color: red;\n  margin-right: 25%;\n}\n\n.greenBtn {\n  background-color: rgb(47, 255, 47);\n}\n\n.redBtn,\n.greenBtn {\n  font-size: 3vh;\n  padding: 10%;\n  width: 15vh;\n  height: 0.5vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.fbtn {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n\n.expired {\n  border: 5px solid red;\n}\n\n.task_desc {\n  overflow-y: auto;\n  flex: 6;\n  font-size: 1.5rem;\n}\n\n.task_dueDate {\n  flex: 1;\n}\n\n.task_title,\n.task_desc,\n.task_dueDate {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.212);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n}\n\n.task_title {\n  flex: 1;\n  padding: 0 6%;\n}\n\n.taskButtons > button {\n  font-size: 3vh;\n  color: white;\n  background-color: black;\n  opacity: 0.5;\n}\n\n.mobile {\n  display: none;\n}\n\n@media only screen and (max-width: 1100px) {\n  body,\n  html {\n    height: 100%;\n  }\n\n  .mobile {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 55px;\n    height: 55px;\n    color: black;\n    overflow: hidden;\n    background-color: black;\n    border-right: 1px solid white;\n  }\n\n  .mobile:hover {\n    cursor: pointer;\n  }\n\n  #sidebar {\n    position: absolute;\n    z-index: 1;\n    left: 0;\n    display: none;\n    max-height: 100vh;\n    max-width: min(75%, 300px);\n  }\n\n  #projectForm,\n  #taskForm,\n  #confirmationForm {\n    position: absolute;\n    margin-left: auto;\n    margin-right: auto;\n    left: 0;\n    right: 0;\n    text-align: center;\n    max-width: 100%;\n    width: 400px;\n    height: 200px;\n  }\n\n  #taskForm,\n  #projectForm {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    min-height: 100%;\n    height: min-content;\n    text-align: center;\n    align-items: center;\n  }\n\n  #projectForm label {\n    max-height: 50px;\n  }\n\n  #projectForm > div {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n\n  #projectForm > div > * {\n    font-size: 2rem;\n    width: 90%;\n  }\n\n  #taskForm label {\n    font-size: 1.5rem;\n  }\n\n  #taskForm #title,\n  #taskForm #dueDate {\n    font-size: 1rem;\n    height: 50px;\n    width: 90%;\n  }\n\n  #description {\n    width: 90%;\n    max-width: none;\n    font-size: 1rem;\n    min-height: 200px;\n  }\n\n  #priority {\n    font-size: 1rem;\n    width: 90%;\n    justify-content: center;\n  }\n\n  #taskForm > div {\n    position: relative;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin-bottom: 20px;\n  }\n\n  .fbtn {\n    display: flex;\n    flex-direction: row !important;\n  }\n\n  .fbtn > * {\n    font-size: 1.7rem;\n  }\n\n  .RPB {\n    font-size: 40px;\n    z-index: 1;\n  }\n\n  #date {\n    max-width: 250px;\n    font-size: 2rem;\n  }\n\n  #addTask {\n    margin: 0 100px;\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        // Exports
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ___CSS_LOADER_EXPORT___;

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/api.js":
      /*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
      /***/ (module) => {
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
                content += "@layer".concat(
                  item[5].length > 0 ? " ".concat(item[5]) : "",
                  " {"
                );
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
                  item[1] = "@layer"
                    .concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {")
                    .concat(item[1], "}");
                  item[5] = layer;
                }
              }

              if (media) {
                if (!item[2]) {
                  item[2] = media;
                } else {
                  item[1] = "@media "
                    .concat(item[2], " {")
                    .concat(item[1], "}");
                  item[2] = media;
                }
              }

              if (supports) {
                if (!item[4]) {
                  item[4] = "".concat(supports);
                } else {
                  item[1] = "@supports ("
                    .concat(item[4], ") {")
                    .concat(item[1], "}");
                  item[4] = supports;
                }
              }

              list.push(item);
            }
          };

          return list;
        };

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
      /*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
      /***/ (module) => {
        "use strict";

        module.exports = function (item) {
          var content = item[1];
          var cssMapping = item[3];

          if (!cssMapping) {
            return content;
          }

          if (typeof btoa === "function") {
            var base64 = btoa(
              unescape(encodeURIComponent(JSON.stringify(cssMapping)))
            );
            var data =
              "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                base64
              );
            var sourceMapping = "/*# ".concat(data, " */");
            var sourceURLs = cssMapping.sources.map(function (source) {
              return "/*# sourceURL="
                .concat(cssMapping.sourceRoot || "")
                .concat(source, " */");
            });
            return [content]
              .concat(sourceURLs)
              .concat([sourceMapping])
              .join("\n");
          }

          return [content].join("\n");
        };

        /***/
      },

    /***/ "./src/style.css":
      /*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__
          );
        /* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css"
          );

        var options = {};

        options.styleTagTransform =
          _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default();
        options.setAttributes =
          _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default();

        options.insert =
          _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(
            null,
            "head"
          );

        options.domAPI =
          _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default();
        options.insertStyleElement =
          _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();

        var update =
          _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(
            _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[
              "default"
            ],
            options
          );

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[
            "default"
          ] &&
          _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[
            "default"
          ].locals
            ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[
                "default"
              ].locals
            : undefined;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
      /*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
      /***/ (module) => {
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
              layer: item[5],
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
                references: 1,
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
              if (
                newObj.css === obj.css &&
                newObj.media === obj.media &&
                newObj.sourceMap === obj.sourceMap &&
                newObj.supports === obj.supports &&
                newObj.layer === obj.layer
              ) {
                return;
              }

              api.update((obj = newObj));
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

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
      /*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
      /***/ (module) => {
        "use strict";

        var memo = {};
        /* istanbul ignore next  */

        function getTarget(target) {
          if (typeof memo[target] === "undefined") {
            var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

            if (
              window.HTMLIFrameElement &&
              styleTarget instanceof window.HTMLIFrameElement
            ) {
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
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          }

          target.appendChild(style);
        }

        module.exports = insertBySelector;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
      /*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
      /***/ (module) => {
        "use strict";

        /* istanbul ignore next  */
        function insertStyleElement(options) {
          var element = document.createElement("style");
          options.setAttributes(element, options.attributes);
          options.insert(element, options.options);
          return element;
        }

        module.exports = insertStyleElement;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
      /*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";

        /* istanbul ignore next  */
        function setAttributesWithoutAttributes(styleElement) {
          var nonce = true ? __webpack_require__.nc : 0;

          if (nonce) {
            styleElement.setAttribute("nonce", nonce);
          }
        }

        module.exports = setAttributesWithoutAttributes;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
      /*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
      /***/ (module) => {
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
            css += "@layer".concat(
              obj.layer.length > 0 ? " ".concat(obj.layer) : "",
              " {"
            );
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
            css +=
              "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))),
                " */"
              );
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
            },
          };
        }

        module.exports = domAPI;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
      /*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
      /***/ (module) => {
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

        /***/
      },

    /***/ "./src/date.js":
      /*!*********************!*\
  !*** ./src/date.js ***!
  \*********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ expireCheck: () => /* binding */ expireCheck,
          /* harmony export */ formatDate: () => /* binding */ formatDate,
          /* harmony export */ getDate: () => /* binding */ getDate,
          /* harmony export */
        });
        /* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./todo */ "./src/todo.js");

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
          const currentProject =
            document.querySelector(".selected").textContent;
          const arr =
            _todo__WEBPACK_IMPORTED_MODULE_0__.projects[currentProject].tasks[
              task.title
            ].dueDate.split("-");
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

        /***/
      },

    /***/ "./src/dom.js":
      /*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ addProjectD: () => /* binding */ addProjectD,
          /* harmony export */ addTaskD: () => /* binding */ addTaskD,
          /* harmony export */ eraseTaskD: () => /* binding */ eraseTaskD,
          /* harmony export */ eraseTasksD: () => /* binding */ eraseTasksD,
          /* harmony export */
        });
        /* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./date */ "./src/date.js");

        const addTaskD = (task) => {
          const div = document.createElement("div");
          div.classList.add(`${task.id}`);

          if ((0, _date__WEBPACK_IMPORTED_MODULE_0__.expireCheck)(task)) {
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

        /***/
      },

    /***/ "./src/eventListeners.js":
      /*!*******************************!*\
  !*** ./src/eventListeners.js ***!
  \*******************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./utility */ "./src/utility.js");
        /* harmony import */ var _setup__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./setup */ "./src/setup.js");
        /* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ./forms */ "./src/forms.js");

        // it resets every time website refreshes so duplication bug occurs,
        // and it's more efficient, (little bit lol

        const addTaskBtn = document.querySelector("#addTask");
        addTaskBtn.addEventListener("click", () => {
          (0, _utility__WEBPACK_IMPORTED_MODULE_0__.showFormAndCover)();
        });

        // thought it would easy to put all form related code to the submit btn listener
        const gbutton = document.querySelector(".green");
        gbutton.addEventListener("click", () => {
          (0, _forms__WEBPACK_IMPORTED_MODULE_2__.addTask)();
        });

        const form = document.querySelector("#taskForm");
        form.addEventListener("keydown", (e) => {
          if (e.code === "Enter") {
            (0, _forms__WEBPACK_IMPORTED_MODULE_2__.addTask)();
          }
        });

        const rbutton = document.querySelector(".red");
        rbutton.addEventListener("click", () => {
          (0, _forms__WEBPACK_IMPORTED_MODULE_2__.resetForm)();
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
          (0, _forms__WEBPACK_IMPORTED_MODULE_2__.addProject)();
        });

        const projForm = document.querySelector("#projectForm");
        projForm.addEventListener("keydown", (e) => {
          if (e.code === "Enter") {
            (0, _forms__WEBPACK_IMPORTED_MODULE_2__.addProject)();
          }
        });

        const projRButton = document.querySelector(".proj_red");
        projRButton.addEventListener("click", () => {
          (0, _forms__WEBPACK_IMPORTED_MODULE_2__.resetProjForm)();
        });

        const confGreen = document.querySelector(".conf_green");
        confGreen.addEventListener("click", () => {
          (0, _setup__WEBPACK_IMPORTED_MODULE_1__.onClickingRPB)();
          (0, _forms__WEBPACK_IMPORTED_MODULE_2__.resetConfForm)();
        });

        const confRed = document.querySelector(".conf_red");
        confRed.addEventListener("click", () => {
          (0, _forms__WEBPACK_IMPORTED_MODULE_2__.resetConfForm)();
        });

        // navigate calender, left and right arrow
        const left = document.querySelector(".calLeft");
        const right = document.querySelector(".calRight");
        const input = document.querySelector("#date");
        left.addEventListener("click", () => {
          input.stepDown();
          (0, _utility__WEBPACK_IMPORTED_MODULE_0__.checkDueDate)();
        });
        right.addEventListener("click", () => {
          input.stepUp();
          (0, _utility__WEBPACK_IMPORTED_MODULE_0__.checkDueDate)();
        });
        // date is picked manually from the calander, click doesn't work
        input.addEventListener("change", () => {
          (0, _utility__WEBPACK_IMPORTED_MODULE_0__.checkDueDate)();
        });

        /***/
      },

    /***/ "./src/forms.js":
      /*!**********************!*\
  !*** ./src/forms.js ***!
  \**********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ addProject: () => /* binding */ addProject,
          /* harmony export */ addTask: () => /* binding */ addTask,
          /* harmony export */ resetConfForm: () => /* binding */ resetConfForm,
          /* harmony export */ resetForm: () => /* binding */ resetForm,
          /* harmony export */ resetProjForm: () => /* binding */ resetProjForm,
          /* harmony export */
        });
        /* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./dom */ "./src/dom.js");
        /* harmony import */ var _setup__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./setup */ "./src/setup.js");
        /* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ./todo */ "./src/todo.js");
        /* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! ./date */ "./src/date.js");

        function resetForm() {
          const form = document.querySelector("#taskForm");
          const cover = document.querySelector(".cover");
          form.reset();
          form.style.display = "none";
          cover.style.display = "none";

          // this is also default, present in date.js!
          const dueDate = document.getElementById("dueDate");
          dueDate.value = (0, _date__WEBPACK_IMPORTED_MODULE_3__.getDate)();
        }

        // couldn't get submit type button to work, so needed a function to get values
        // from the form, this is it
        function getTask() {
          const title = document.getElementById("title").value;
          const currentProject =
            document.querySelector(".selected").textContent;
          if (
            !_todo__WEBPACK_IMPORTED_MODULE_2__.projects[currentProject].tasks[
              title
            ]
          ) {
            const description = document.getElementById("description").value;
            let dueDate = document.getElementById("dueDate").value;
            const priority = document.getElementById("priority").value;

            if (!dueDate) {
              dueDate = (0, _date__WEBPACK_IMPORTED_MODULE_3__.getDate)();
            }

            let id = 0;
            // easiest way to prevent duplication bug => 2 tasks 1 id
            Object.keys(
              _todo__WEBPACK_IMPORTED_MODULE_2__.projects[currentProject].tasks
            ).forEach((taskName) => {
              id = Math.max(
                id,
                Number(
                  _todo__WEBPACK_IMPORTED_MODULE_2__.projects[
                    currentProject
                  ].tasks[taskName].id.replace("task", "")
                ) + 1
              );
            });

            const task = (0, _todo__WEBPACK_IMPORTED_MODULE_2__.todo)(
              title,
              description,
              (0, _date__WEBPACK_IMPORTED_MODULE_3__.formatDate)(dueDate),
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
          const currentProject =
            document.querySelector(".selected").textContent;
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
            dueDate.value = (0, _date__WEBPACK_IMPORTED_MODULE_3__.getDate)();

            // setup task
            _todo__WEBPACK_IMPORTED_MODULE_2__.projects[currentProject].tasks[
              task.title
            ] = task;
            (0, _dom__WEBPACK_IMPORTED_MODULE_0__.addTaskD)(
              task,
              currentProject
            );
            (0, _setup__WEBPACK_IMPORTED_MODULE_1__.setupTaskD)(task);

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
            localStorage.setItem(
              "projects",
              JSON.stringify(_todo__WEBPACK_IMPORTED_MODULE_2__.projects)
            );
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
            Object.keys(_todo__WEBPACK_IMPORTED_MODULE_2__.projects).forEach(
              (project) => {
                projectID = Math.max(
                  projectID,
                  Number(
                    _todo__WEBPACK_IMPORTED_MODULE_2__.projects[
                      project
                    ].id.replace("Pr", "")
                  ) + 1
                );
              }
            );
            const proj = (0, _todo__WEBPACK_IMPORTED_MODULE_2__.projectFactory)(
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
            _todo__WEBPACK_IMPORTED_MODULE_2__.projects[project.title] =
              project;
            _todo__WEBPACK_IMPORTED_MODULE_2__.projects[project.title].tasks =
              {};
            _todo__WEBPACK_IMPORTED_MODULE_2__.projects[project.title].id =
              project.id;

            (0, _dom__WEBPACK_IMPORTED_MODULE_0__.addProjectD)(
              project,
              project.id
            );
            (0, _setup__WEBPACK_IMPORTED_MODULE_1__.addProjectListener)(
              project.id
            );

            // save to local when you add task or project
            localStorage.setItem(
              "projects",
              JSON.stringify(_todo__WEBPACK_IMPORTED_MODULE_2__.projects)
            );
          }
        };

        function resetConfForm() {
          const confForm = document.querySelector("#confirmationForm");
          confForm.style.display = "none";
          const cover = document.querySelector(".cover");
          cover.style.display = "none";
        }

        /***/
      },

    /***/ "./src/mobile.js":
      /*!***********************!*\
  !*** ./src/mobile.js ***!
  \***********************/
      /***/ () => {
        const mobileBtn = document.querySelector(".mobile");
        mobileBtn.addEventListener("click", () => {
          const sidebar = document.querySelector("#sidebar");
          if (sidebar.style.display === "flex") {
            sidebar.style.display = "none";
          } else {
            sidebar.style.display = "flex";
            mobileBtn.style.display = "none";
          }
        });

        const sidebar = document.querySelector("#sidebar");
        window.addEventListener("resize", () => {
          if (window.innerWidth > "1100") {
            sidebar.style.display = "flex";
            mobileBtn.style.display = "none";
          }
          if (window.innerWidth < "1100") {
            sidebar.style.display = "none";
            mobileBtn.style.display = "flex";
          }
          // //if (sidebar.style.display != "flex") {
          //  mobileBtn.style.display = "none";
          // }
        });

        const content = document.querySelector("#content");
        content.addEventListener("click", () => {
          if (window.innerWidth < "1100") {
            sidebar.style.display = "none";
            mobileBtn.style.display = "flex";
          }
        });

        // There might be a more efficient way. This seems to work though.

        /***/
      },

    /***/ "./src/setup.js":
      /*!**********************!*\
  !*** ./src/setup.js ***!
  \**********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ addProjectListener: () =>
            /* binding */ addProjectListener,
          /* harmony export */ addRPB: () => /* binding */ addRPB,
          /* harmony export */ changeProjectD: () =>
            /* binding */ changeProjectD,
          /* harmony export */ loadFromStorage: () =>
            /* binding */ loadFromStorage,
          /* harmony export */ onClickingRPB: () => /* binding */ onClickingRPB,
          /* harmony export */ removeRPB: () => /* binding */ removeRPB,
          /* harmony export */ setupTaskD: () => /* binding */ setupTaskD,
          /* harmony export */ showConfirmationForm: () =>
            /* binding */ showConfirmationForm,
          /* harmony export */
        });
        /* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./dom */ "./src/dom.js");
        /* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./todo */ "./src/todo.js");
        /* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ./utility */ "./src/utility.js");

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
            const title = (0, _utility__WEBPACK_IMPORTED_MODULE_2__.getTitle)(
              taskID
            );
            const currentProject =
              document.querySelector(".selected").textContent;
            (0, _utility__WEBPACK_IMPORTED_MODULE_2__.deleteTask)(
              currentProject,
              _todo__WEBPACK_IMPORTED_MODULE_1__.projects[currentProject].tasks[
                title
              ]
            );
            (0, _dom__WEBPACK_IMPORTED_MODULE_0__.eraseTaskD)(taskID);
          });
        };

        function setupEditForm(title) {
          const currentProject =
            document.querySelector(".selected").textContent;
          // task = THE ONE BEING CLICKED
          const task =
            _todo__WEBPACK_IMPORTED_MODULE_1__.projects[currentProject].tasks[
              title
            ];

          // fill the form correctly
          document.getElementById("title").value = task.title;
          document.getElementById("description").value = task.description;
          let arr = task.dueDate.split("-");
          arr = [arr[2], arr[0], arr[1]].join("-");
          document.getElementById("dueDate").value = arr;
          document.getElementById("priority").value = task.priority;

          // delete, and let the green button build it for you, no in this case
          // should have a special function
          (0, _dom__WEBPACK_IMPORTED_MODULE_0__.eraseTaskD)(
            _todo__WEBPACK_IMPORTED_MODULE_1__.projects[currentProject].tasks[
              title
            ].id
          );
          delete _todo__WEBPACK_IMPORTED_MODULE_1__.projects[currentProject]
            .tasks[title];

          localStorage.setItem(
            "projects",
            JSON.stringify(_todo__WEBPACK_IMPORTED_MODULE_1__.projects)
          );

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
            (0, _utility__WEBPACK_IMPORTED_MODULE_2__.showFormAndCover)();
            setupEditForm(
              (0, _utility__WEBPACK_IMPORTED_MODULE_2__.getTitle)(
                [...e.target.parentNode.parentNode.classList][0]
              )
            );
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
          (0, _dom__WEBPACK_IMPORTED_MODULE_0__.eraseTasksD)();
          if (
            _todo__WEBPACK_IMPORTED_MODULE_1__.projects[projectName].tasks !==
            {}
          ) {
            Object.keys(
              _todo__WEBPACK_IMPORTED_MODULE_1__.projects[projectName].tasks
            ).forEach((em) => {
              (0, _dom__WEBPACK_IMPORTED_MODULE_0__.addTaskD)(
                _todo__WEBPACK_IMPORTED_MODULE_1__.projects[projectName].tasks[
                  em
                ]
              );
              setupTaskD(
                _todo__WEBPACK_IMPORTED_MODULE_1__.projects[projectName].tasks[
                  em
                ],
                projectName
              );
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
          const projectID =
            _todo__WEBPACK_IMPORTED_MODULE_1__.projects[projectName2].id;
          delete _todo__WEBPACK_IMPORTED_MODULE_1__.projects[projectName2];
          const project = document.querySelector(`#${projectID}`);
          project.remove();

          const home = document.querySelector("#Pr0");
          home.classList.add("selected");
          changeProjectD("HOME");

          // save because you removed a project
          localStorage.setItem(
            "projects",
            JSON.stringify(_todo__WEBPACK_IMPORTED_MODULE_1__.projects)
          );
        }

        addProjectListener("Pr0");

        // load all projects and tasks from the local storage
        const loadFromStorage = () => {
          Object.keys(_todo__WEBPACK_IMPORTED_MODULE_1__.projects).forEach(
            (project) => {
              if (project !== "HOME") {
                (0, _dom__WEBPACK_IMPORTED_MODULE_0__.addProjectD)(
                  _todo__WEBPACK_IMPORTED_MODULE_1__.projects[project],
                  _todo__WEBPACK_IMPORTED_MODULE_1__.projects[project].id
                );
                addProjectListener(
                  _todo__WEBPACK_IMPORTED_MODULE_1__.projects[project].id
                );
              }
            }
          );

          Object.keys(
            _todo__WEBPACK_IMPORTED_MODULE_1__.projects.HOME.tasks
          ).forEach((task) => {
            (0, _dom__WEBPACK_IMPORTED_MODULE_0__.addTaskD)(
              _todo__WEBPACK_IMPORTED_MODULE_1__.projects.HOME.tasks[task]
            );
            setupTaskD(
              _todo__WEBPACK_IMPORTED_MODULE_1__.projects.HOME.tasks[task],
              "HOME"
            );
          });
        };

        // Previous setupProject and setupTask have merged due to eslint shouting at me
        // for dependency cycle errors. I have merged them together into this setup
        // file. Ideally I would find another way to spit this module into more pieces,
        // this would all have been easier, if I had used eslint from start, so work to
        // be done here, if more code is to be included, especially code that is related
        // to any kind of setup.

        /***/
      },

    /***/ "./src/todo.js":
      /*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ projectFactory: () =>
            /* binding */ projectFactory,
          /* harmony export */ projects: () => /* binding */ projects,
          /* harmony export */ todo: () => /* binding */ todo,
          /* harmony export */
        });
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

        /***/
      },

    /***/ "./src/utility.js":
      /*!************************!*\
  !*** ./src/utility.js ***!
  \************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ checkDueDate: () => /* binding */ checkDueDate,
          /* harmony export */ deleteTask: () => /* binding */ deleteTask,
          /* harmony export */ getTitle: () => /* binding */ getTitle,
          /* harmony export */ showFormAndCover: () =>
            /* binding */ showFormAndCover,
          /* harmony export */
        });
        /* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./todo */ "./src/todo.js");
        /* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./date */ "./src/date.js");

        function checkDueDate() {
          const currentProject =
            document.querySelector(".selected").textContent;
          Object.keys(
            _todo__WEBPACK_IMPORTED_MODULE_0__.projects[currentProject].tasks
          ).forEach((taskName) => {
            const div = document.querySelector(
              `.${_todo__WEBPACK_IMPORTED_MODULE_0__.projects[currentProject].tasks[taskName].id}`
            );
            if (
              (0, _date__WEBPACK_IMPORTED_MODULE_1__.expireCheck)(
                _todo__WEBPACK_IMPORTED_MODULE_0__.projects[currentProject]
                  .tasks[taskName]
              )
            ) {
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
          const currentProject =
            document.querySelector(".selected").textContent;
          let title;

          Object.keys(
            _todo__WEBPACK_IMPORTED_MODULE_0__.projects[currentProject].tasks
          ).forEach((taskName) => {
            if (
              _todo__WEBPACK_IMPORTED_MODULE_0__.projects[currentProject].tasks[
                taskName
              ].id === taskID
            ) {
              title =
                _todo__WEBPACK_IMPORTED_MODULE_0__.projects[currentProject]
                  .tasks[taskName].title;
            }
          });
          return title;
        }

        function deleteTask(project, task) {
          delete _todo__WEBPACK_IMPORTED_MODULE_0__.projects[project].tasks[
            task.title
          ];
          // we are actually deleting, not just erasing from screen!!!
          localStorage.setItem(
            "projects",
            JSON.stringify(_todo__WEBPACK_IMPORTED_MODULE_0__.projects)
          );
        }

        function showFormAndCover() {
          const form = document.querySelector("#taskForm");
          const cover = document.querySelector(".cover");
          cover.style.display = "block";
          form.style.display = "flex";
        }

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ id: moduleId,
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/ (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter =
        module && module.__esModule
          ? /******/ () => module["default"]
          : /******/ () => module;
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/nonce */
  /******/ (() => {
    /******/ __webpack_require__.nc = undefined;
    /******/
  })();
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
    /* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(/*! ./style.css */ "./src/style.css");
    /* harmony import */ var _eventListeners__WEBPACK_IMPORTED_MODULE_1__ =
      __webpack_require__(/*! ./eventListeners */ "./src/eventListeners.js");
    /* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_2__ =
      __webpack_require__(/*! ./date */ "./src/date.js");
    /* harmony import */ var _mobile__WEBPACK_IMPORTED_MODULE_3__ =
      __webpack_require__(/*! ./mobile */ "./src/mobile.js");
    /* harmony import */ var _mobile__WEBPACK_IMPORTED_MODULE_3___default =
      /*#__PURE__*/ __webpack_require__.n(_mobile__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */ var _setup__WEBPACK_IMPORTED_MODULE_4__ =
      __webpack_require__(/*! ./setup */ "./src/setup.js");

    (0, _setup__WEBPACK_IMPORTED_MODULE_4__.loadFromStorage)();
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

  /******/
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sT0FBTyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxPQUFPLFNBQVMsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxPQUFPLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxNQUFNLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RhdGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZXZlbnRMaXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Zvcm1zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2JpbGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NldHVwLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy91dGlsaXR5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAtLW5ldXRyYWw6ICNmNWY1ZjU7XFxuICAtLXZpb2xldDogd2hpdGU7XFxuICAtLXN0b25lOiAjNmU2Mjc5O1xcbiAgLS16aW5jOiAjM2YzZjQ2O1xcbiAgLS1ob3ZlcjogcmdiKDY5LCAzMSwgODMpO1xcbn1cXG5cXG5ib2R5LFxcbmh0bWwge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxufVxcblxcbiNzaWRlYmFyIHtcXG4gIGZsZXg6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS16aW5jKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jc2lkZWJhciA+IGRpdiB7XFxuICBmb250LXNpemU6IDZ2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ob21lIHtcXG4gIGZsZXg6IDE7XFxuICBib3JkZXItYm90dG9tOiA1cHggYmxhY2sgc29saWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdG9uZSk7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuI3Byb2plY3RzIHtcXG4gIGZsZXg6IDc7XFxufVxcblxcbi5ob21lOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgZmxleDogMztcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmV4cGFuZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmV4cGFuZCA+IGRpdjpmaXJzdC1jaGlsZCxcXG4jYWRkUHJvamVjdCB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmV4cGFuZCA+ICoge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNhZGRQcm9qZWN0IHtcXG4gIGJvcmRlci10b3A6IDNweCBzb2xpZCBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN0b25lKTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4jYWRkUHJvamVjdDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlcik7XFxufVxcblxcbi5leHBhbmQgPiBkaXY6Zmlyc3QtY2hpbGQge1xcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uZXhwYW5kIC5zaG9ydGN1dCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdG9uZSk7XFxuICBwYWRkaW5nOiA1JTtcXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBibGFjaztcXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5leHBhbmQgLnNob3J0Y3V0cyB7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgbWF4LWhlaWdodDogNzB2aDtcXG59XFxuXFxuLnNob3J0Y3V0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmV4cGFuZCA+IGRpdiB7XFxuICBmbGV4OiA1O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jdGFza3Mge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDM1dmgsIDFmcikpO1xcbiAgZ3JpZC1nYXA6IDJ2aDtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDMlO1xcbn1cXG5cXG4jdGFza3MgPiBkaXYge1xcbiAgaGVpZ2h0OiAzNXZoO1xcbiAgYmFja2dyb3VuZDogcmdiKDAsIDE0NywgMjIzKTtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChcXG4gICAgY2lyY2xlLFxcbiAgICByZ2JhKDAsIDE0NywgMjIzLCAxKSAwJSxcXG4gICAgcmdiYSgyMTEsIDIzOSwgMjQyLCAxKSA0OSUsXFxuICAgIHJnYmEoMTcsIDE2LCAxNiwgMSkgMTAwJVxcbiAgKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xcbn1cXG5cXG4jdGFza3MgPiBkaXYgPiBkaXYge1xcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcXG4gIGZvbnQtc2l6ZTogM3ZoO1xcbn1cXG5cXG4uTXVzdCB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMjMyLCA1LCA1KTtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChcXG4gICAgY2lyY2xlLFxcbiAgICByZ2JhKDIzMiwgNSwgNSwgMSkgMCUsXFxuICAgIHJnYmEoMjEzLCAxNDQsIDE0NCwgMSkgNDklLFxcbiAgICByZ2JhKDE3LCAxNiwgMTYsIDEpIDEwMCVcXG4gICkgIWltcG9ydGFudDtcXG59XFxuXFxuLk5lY2Vzc2FyeSB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMjMyLCAxMDcsIDUpO1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KFxcbiAgICBjaXJjbGUsXFxuICAgIHJnYmEoMjMyLCAxMDcsIDUsIDEpIDAlLFxcbiAgICByZ2JhKDIzNSwgMjAwLCAxNjMsIDEpIDQ5JSxcXG4gICAgcmdiYSgxNywgMTYsIDE2LCAxKSAxMDAlXFxuICApICFpbXBvcnRhbnQ7XFxufVxcblxcbi5NYXliZSB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMTkzLCAyMzIsIDUpO1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KFxcbiAgICBjaXJjbGUsXFxuICAgIHJnYmEoMTkzLCAyMzIsIDUsIDEpIDAlLFxcbiAgICByZ2JhKDIyNCwgMjM1LCAxNjMsIDEpIDQ5JSxcXG4gICAgcmdiYSgxNywgMTYsIDE2LCAxKSAxMDAlXFxuICApICFpbXBvcnRhbnQ7XFxufVxcblxcbiNjb250ZW50ID4gKjpub3QoI3Rhc2tzKSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBmb250LXNpemU6IDQwcHg7XFxufVxcblxcbi5oZWFkZXIgLlJQQiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IG1heCg1NXB4LCA3dmgpO1xcbiAgd2lkdGg6IG1heCg1NXB4LCA3dmgpO1xcbiAgZm9udC1zaXplOiBtYXgoNDBweCwgM3JlbSk7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIGNvbG9yOiByZ2IoODUsIDMsIDE5KTtcXG59XFxuXFxuI2FkZFRhc2sge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IG1heCg0MHB4LCAzcmVtKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBoZWlnaHQ6IG1heCg1NXB4LCA3dmgpO1xcbn1cXG5cXG4jYWRkVGFzazpob3ZlciB7XFxuICBvcGFjaXR5OiAwLjU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNhZGRUYXNrOmFjdGl2ZSB7XFxuICBvcGFjaXR5OiAwLjI7XFxufVxcblxcbi5zZWxlY3RlZCB7XFxuICBib3JkZXItcmlnaHQ6IDEwcHggZ3Jvb3ZlIHZhcigtLWhvdmVyKTtcXG59XFxuXFxuI2RhdGUge1xcbiAgd2lkdGg6IDQwdmggIWltcG9ydGFudDtcXG4gIGZvbnQtc2l6ZTogNXZoO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogZ3JleTtcXG59XFxuXFxuLmNhbExlZnQge1xcbiAgbWFyZ2luLXJpZ2h0OiAydmg7XFxufVxcblxcbi5jYWxSaWdodCB7XFxuICBtYXJnaW4tbGVmdDogMnZoO1xcbn1cXG5cXG4ubmF2aWdhdGVjYWwge1xcbiAgZm9udC1zaXplOiA4dmg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuI3Rhc2tGb3JtIHtcXG4gIHdpZHRoOiA2NXZoO1xcbiAgaGVpZ2h0OiA2NXZoO1xcbiAgbGVmdDogY2FsYyg1MCUgLSAxMHZoKTtcXG4gIHRvcDogY2FsYyg1MCUgLSAzMHZoKTtcXG4gIHBhZGRpbmctbGVmdDogNSU7XFxuICBwYWRkaW5nLXJpZ2h0OiA1JTtcXG4gIGZvbnQtc2l6ZTogM3ZoO1xcbn1cXG5cXG4jcHJvamVjdEZvcm0ge1xcbiAgd2lkdGg6IDU1dmg7XFxuICBoZWlnaHQ6IDI1dmg7XFxuICBsZWZ0OiBjYWxjKDUwJSAtIDEwdmgpO1xcbiAgdG9wOiBjYWxjKDUwJSAtIDMwdmgpO1xcbiAgcGFkZGluZzogMCAyJSAwIDIlO1xcbiAgZm9udC1zaXplOiAzdmg7XFxufVxcblxcbiNjb25maXJtYXRpb25Gb3JtIHtcXG4gIHdpZHRoOiA1MHZoO1xcbiAgaGVpZ2h0OiAzNXZoO1xcbiAgbGVmdDogY2FsYyg1MCUgLSAxMHZoKTtcXG4gIHRvcDogY2FsYyg1MCUgLSAzMHZoKTtcXG4gIHBhZGRpbmc6IDAgMyUgMCAzJTtcXG4gIGZvbnQtc2l6ZTogM3ZoO1xcbn1cXG5cXG4jcHJvamVjdEZvcm0sXFxuI3Rhc2tGb3JtLFxcbiNjb25maXJtYXRpb25Gb3JtIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdG9uZSk7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBib3JkZXI6IDVweCB2YXIoLS1ob3Zlcikgc29saWQ7XFxufVxcblxcbi5jb3ZlciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xcbiAgei1pbmRleDogMTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI3Rhc2tGb3JtIGRpdixcXG4jcHJvamVjdEZvcm0gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiN0YXNrRm9ybSBsYWJlbCxcXG4jcHJvamVjdEZvcm0gbGFiZWwge1xcbiAgZmxleDogMTtcXG4gIG1pbi13aWR0aDogMjB2aDtcXG4gIGZvbnQtc2l6ZTogM3ZoO1xcbn1cXG5cXG4jdGFza0Zvcm0gaW5wdXQsXFxuI3Rhc2tGb3JtIHNlbGVjdCB7XFxuICBmbGV4OiA2O1xcbiAgbWluLXdpZHRoOiAzMHZoO1xcbn1cXG5cXG4jZGVzY3JpcHRpb24sXFxuI3Rhc2tGb3JtIGlucHV0LFxcbiNwcmlvcml0eSxcXG4jcHJval90aXRsZSxcXG4jcHJval9kdWVEYXRlIHtcXG4gIGZvbnQtc2l6ZTogMnZoO1xcbiAgcGFkZGluZzogMSU7XFxufVxcblxcbiNkZXNjcmlwdGlvbiB7XFxuICBoZWlnaHQ6IDIwdmg7XFxuICBtYXgtd2lkdGg6IDMwdmg7XFxuICByZXNpemU6IG5vbmU7XFxufVxcblxcbi5yZWRCdG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgbWFyZ2luLXJpZ2h0OiAyNSU7XFxufVxcblxcbi5ncmVlbkJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDcsIDI1NSwgNDcpO1xcbn1cXG5cXG4ucmVkQnRuLFxcbi5ncmVlbkJ0biB7XFxuICBmb250LXNpemU6IDN2aDtcXG4gIHBhZGRpbmc6IDEwJTtcXG4gIHdpZHRoOiAxNXZoO1xcbiAgaGVpZ2h0OiAwLjV2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mYnRuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZXhwaXJlZCB7XFxuICBib3JkZXI6IDVweCBzb2xpZCByZWQ7XFxufVxcblxcbi50YXNrX2Rlc2Mge1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIGZsZXg6IDY7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLnRhc2tfZHVlRGF0ZSB7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4udGFza190aXRsZSxcXG4udGFza19kZXNjLFxcbi50YXNrX2R1ZURhdGUge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yMTIpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udGFza190aXRsZSB7XFxuICBmbGV4OiAxO1xcbiAgcGFkZGluZzogMCA2JTtcXG59XFxuXFxuLnRhc2tCdXR0b25zID4gYnV0dG9uIHtcXG4gIGZvbnQtc2l6ZTogM3ZoO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi5tb2JpbGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTAwcHgpIHtcXG4gIGJvZHksXFxuICBodG1sIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgfVxcblxcbiAgLm1vYmlsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDU1cHg7XFxuICAgIGhlaWdodDogNTVweDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgd2hpdGU7XFxuICB9XFxuXFxuICAubW9iaWxlOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcblxcbiAgI3NpZGViYXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXgtd2lkdGg6IG1pbig3NSUsIDMwMHB4KTtcXG4gIH1cXG5cXG4gICNwcm9qZWN0Rm9ybSxcXG4gICN0YXNrRm9ybSxcXG4gICNjb25maXJtYXRpb25Gb3JtIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gIH1cXG5cXG4gICN0YXNrRm9ybSxcXG4gICNwcm9qZWN0Rm9ybSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgI3Byb2plY3RGb3JtIGxhYmVsIHtcXG4gICAgbWF4LWhlaWdodDogNTBweDtcXG4gIH1cXG5cXG4gICNwcm9qZWN0Rm9ybSA+IGRpdiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgI3Byb2plY3RGb3JtID4gZGl2ID4gKiB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgd2lkdGg6IDkwJTtcXG4gIH1cXG5cXG4gICN0YXNrRm9ybSBsYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgfVxcblxcbiAgI3Rhc2tGb3JtICN0aXRsZSxcXG4gICN0YXNrRm9ybSAjZHVlRGF0ZSB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogOTAlO1xcbiAgfVxcblxcbiAgI2Rlc2NyaXB0aW9uIHtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgbWF4LXdpZHRoOiBub25lO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xcbiAgfVxcblxcbiAgI3ByaW9yaXR5IHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH1cXG5cXG4gICN0YXNrRm9ybSA+IGRpdiB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgfVxcblxcbiAgLmZidG4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7XFxuICB9XFxuXFxuICAuZmJ0biA+ICoge1xcbiAgICBmb250LXNpemU6IDEuN3JlbTtcXG4gIH1cXG5cXG4gIC5SUEIge1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIHotaW5kZXg6IDE7XFxuICB9XFxuXFxuICAjZGF0ZSB7XFxuICAgIG1heC13aWR0aDogMjUwcHg7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gIH1cXG5cXG4gICNhZGRUYXNrIHtcXG4gICAgbWFyZ2luOiAwIDEwMHB4O1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHdCQUF3QjtBQUMxQjs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsT0FBTztFQUNQLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsOEJBQThCO0VBQzlCLDhCQUE4QjtFQUM5QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLE9BQU87RUFDUCxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLGFBQWE7RUFDYixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBOztFQUVFLE9BQU87RUFDUCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQiw4QkFBOEI7RUFDOUIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLDhCQUE4QjtB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Q0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsVUFBVTtFQUNaOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBOztJQUVFLGVBQWU7SUFDZixZQUFZO0lBQ1osVUFBVTtFQUNaOztFQUVBO0lBQ0UsVUFBVTtJQUNWLGVBQWU7SUFDZixlQUFlO0lBQ2YsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsZUFBZTtJQUNmLFVBQVU7SUFDVix1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsOEJBQThCO0VBQ2hDOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsZUFBZTtJQUNmLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAtLW5ldXRyYWw6ICNmNWY1ZjU7XFxuICAtLXZpb2xldDogd2hpdGU7XFxuICAtLXN0b25lOiAjNmU2Mjc5O1xcbiAgLS16aW5jOiAjM2YzZjQ2O1xcbiAgLS1ob3ZlcjogcmdiKDY5LCAzMSwgODMpO1xcbn1cXG5cXG5ib2R5LFxcbmh0bWwge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxufVxcblxcbiNzaWRlYmFyIHtcXG4gIGZsZXg6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS16aW5jKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jc2lkZWJhciA+IGRpdiB7XFxuICBmb250LXNpemU6IDZ2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ob21lIHtcXG4gIGZsZXg6IDE7XFxuICBib3JkZXItYm90dG9tOiA1cHggYmxhY2sgc29saWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdG9uZSk7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuI3Byb2plY3RzIHtcXG4gIGZsZXg6IDc7XFxufVxcblxcbi5ob21lOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgZmxleDogMztcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmV4cGFuZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmV4cGFuZCA+IGRpdjpmaXJzdC1jaGlsZCxcXG4jYWRkUHJvamVjdCB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmV4cGFuZCA+ICoge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNhZGRQcm9qZWN0IHtcXG4gIGJvcmRlci10b3A6IDNweCBzb2xpZCBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN0b25lKTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4jYWRkUHJvamVjdDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlcik7XFxufVxcblxcbi5leHBhbmQgPiBkaXY6Zmlyc3QtY2hpbGQge1xcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uZXhwYW5kIC5zaG9ydGN1dCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdG9uZSk7XFxuICBwYWRkaW5nOiA1JTtcXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBibGFjaztcXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5leHBhbmQgLnNob3J0Y3V0cyB7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgbWF4LWhlaWdodDogNzB2aDtcXG59XFxuXFxuLnNob3J0Y3V0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmV4cGFuZCA+IGRpdiB7XFxuICBmbGV4OiA1O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jdGFza3Mge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDM1dmgsIDFmcikpO1xcbiAgZ3JpZC1nYXA6IDJ2aDtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDMlO1xcbn1cXG5cXG4jdGFza3MgPiBkaXYge1xcbiAgaGVpZ2h0OiAzNXZoO1xcbiAgYmFja2dyb3VuZDogcmdiKDAsIDE0NywgMjIzKTtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChcXG4gICAgY2lyY2xlLFxcbiAgICByZ2JhKDAsIDE0NywgMjIzLCAxKSAwJSxcXG4gICAgcmdiYSgyMTEsIDIzOSwgMjQyLCAxKSA0OSUsXFxuICAgIHJnYmEoMTcsIDE2LCAxNiwgMSkgMTAwJVxcbiAgKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xcbn1cXG5cXG4jdGFza3MgPiBkaXYgPiBkaXYge1xcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcXG4gIGZvbnQtc2l6ZTogM3ZoO1xcbn1cXG5cXG4uTXVzdCB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMjMyLCA1LCA1KTtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChcXG4gICAgY2lyY2xlLFxcbiAgICByZ2JhKDIzMiwgNSwgNSwgMSkgMCUsXFxuICAgIHJnYmEoMjEzLCAxNDQsIDE0NCwgMSkgNDklLFxcbiAgICByZ2JhKDE3LCAxNiwgMTYsIDEpIDEwMCVcXG4gICkgIWltcG9ydGFudDtcXG59XFxuXFxuLk5lY2Vzc2FyeSB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMjMyLCAxMDcsIDUpO1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KFxcbiAgICBjaXJjbGUsXFxuICAgIHJnYmEoMjMyLCAxMDcsIDUsIDEpIDAlLFxcbiAgICByZ2JhKDIzNSwgMjAwLCAxNjMsIDEpIDQ5JSxcXG4gICAgcmdiYSgxNywgMTYsIDE2LCAxKSAxMDAlXFxuICApICFpbXBvcnRhbnQ7XFxufVxcblxcbi5NYXliZSB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMTkzLCAyMzIsIDUpO1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KFxcbiAgICBjaXJjbGUsXFxuICAgIHJnYmEoMTkzLCAyMzIsIDUsIDEpIDAlLFxcbiAgICByZ2JhKDIyNCwgMjM1LCAxNjMsIDEpIDQ5JSxcXG4gICAgcmdiYSgxNywgMTYsIDE2LCAxKSAxMDAlXFxuICApICFpbXBvcnRhbnQ7XFxufVxcblxcbiNjb250ZW50ID4gKjpub3QoI3Rhc2tzKSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBmb250LXNpemU6IDQwcHg7XFxufVxcblxcbi5oZWFkZXIgLlJQQiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IG1heCg1NXB4LCA3dmgpO1xcbiAgd2lkdGg6IG1heCg1NXB4LCA3dmgpO1xcbiAgZm9udC1zaXplOiBtYXgoNDBweCwgM3JlbSk7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIGNvbG9yOiByZ2IoODUsIDMsIDE5KTtcXG59XFxuXFxuI2FkZFRhc2sge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IG1heCg0MHB4LCAzcmVtKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBoZWlnaHQ6IG1heCg1NXB4LCA3dmgpO1xcbn1cXG5cXG4jYWRkVGFzazpob3ZlciB7XFxuICBvcGFjaXR5OiAwLjU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNhZGRUYXNrOmFjdGl2ZSB7XFxuICBvcGFjaXR5OiAwLjI7XFxufVxcblxcbi5zZWxlY3RlZCB7XFxuICBib3JkZXItcmlnaHQ6IDEwcHggZ3Jvb3ZlIHZhcigtLWhvdmVyKTtcXG59XFxuXFxuI2RhdGUge1xcbiAgd2lkdGg6IDQwdmggIWltcG9ydGFudDtcXG4gIGZvbnQtc2l6ZTogNXZoO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogZ3JleTtcXG59XFxuXFxuLmNhbExlZnQge1xcbiAgbWFyZ2luLXJpZ2h0OiAydmg7XFxufVxcblxcbi5jYWxSaWdodCB7XFxuICBtYXJnaW4tbGVmdDogMnZoO1xcbn1cXG5cXG4ubmF2aWdhdGVjYWwge1xcbiAgZm9udC1zaXplOiA4dmg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuI3Rhc2tGb3JtIHtcXG4gIHdpZHRoOiA2NXZoO1xcbiAgaGVpZ2h0OiA2NXZoO1xcbiAgbGVmdDogY2FsYyg1MCUgLSAxMHZoKTtcXG4gIHRvcDogY2FsYyg1MCUgLSAzMHZoKTtcXG4gIHBhZGRpbmctbGVmdDogNSU7XFxuICBwYWRkaW5nLXJpZ2h0OiA1JTtcXG4gIGZvbnQtc2l6ZTogM3ZoO1xcbn1cXG5cXG4jcHJvamVjdEZvcm0ge1xcbiAgd2lkdGg6IDU1dmg7XFxuICBoZWlnaHQ6IDI1dmg7XFxuICBsZWZ0OiBjYWxjKDUwJSAtIDEwdmgpO1xcbiAgdG9wOiBjYWxjKDUwJSAtIDMwdmgpO1xcbiAgcGFkZGluZzogMCAyJSAwIDIlO1xcbiAgZm9udC1zaXplOiAzdmg7XFxufVxcblxcbiNjb25maXJtYXRpb25Gb3JtIHtcXG4gIHdpZHRoOiA1MHZoO1xcbiAgaGVpZ2h0OiAzNXZoO1xcbiAgbGVmdDogY2FsYyg1MCUgLSAxMHZoKTtcXG4gIHRvcDogY2FsYyg1MCUgLSAzMHZoKTtcXG4gIHBhZGRpbmc6IDAgMyUgMCAzJTtcXG4gIGZvbnQtc2l6ZTogM3ZoO1xcbn1cXG5cXG4jcHJvamVjdEZvcm0sXFxuI3Rhc2tGb3JtLFxcbiNjb25maXJtYXRpb25Gb3JtIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdG9uZSk7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBib3JkZXI6IDVweCB2YXIoLS1ob3Zlcikgc29saWQ7XFxufVxcblxcbi5jb3ZlciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xcbiAgei1pbmRleDogMTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI3Rhc2tGb3JtIGRpdixcXG4jcHJvamVjdEZvcm0gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiN0YXNrRm9ybSBsYWJlbCxcXG4jcHJvamVjdEZvcm0gbGFiZWwge1xcbiAgZmxleDogMTtcXG4gIG1pbi13aWR0aDogMjB2aDtcXG4gIGZvbnQtc2l6ZTogM3ZoO1xcbn1cXG5cXG4jdGFza0Zvcm0gaW5wdXQsXFxuI3Rhc2tGb3JtIHNlbGVjdCB7XFxuICBmbGV4OiA2O1xcbiAgbWluLXdpZHRoOiAzMHZoO1xcbn1cXG5cXG4jZGVzY3JpcHRpb24sXFxuI3Rhc2tGb3JtIGlucHV0LFxcbiNwcmlvcml0eSxcXG4jcHJval90aXRsZSxcXG4jcHJval9kdWVEYXRlIHtcXG4gIGZvbnQtc2l6ZTogMnZoO1xcbiAgcGFkZGluZzogMSU7XFxufVxcblxcbiNkZXNjcmlwdGlvbiB7XFxuICBoZWlnaHQ6IDIwdmg7XFxuICBtYXgtd2lkdGg6IDMwdmg7XFxuICByZXNpemU6IG5vbmU7XFxufVxcblxcbi5yZWRCdG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgbWFyZ2luLXJpZ2h0OiAyNSU7XFxufVxcblxcbi5ncmVlbkJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDcsIDI1NSwgNDcpO1xcbn1cXG5cXG4ucmVkQnRuLFxcbi5ncmVlbkJ0biB7XFxuICBmb250LXNpemU6IDN2aDtcXG4gIHBhZGRpbmc6IDEwJTtcXG4gIHdpZHRoOiAxNXZoO1xcbiAgaGVpZ2h0OiAwLjV2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mYnRuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZXhwaXJlZCB7XFxuICBib3JkZXI6IDVweCBzb2xpZCByZWQ7XFxufVxcblxcbi50YXNrX2Rlc2Mge1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIGZsZXg6IDY7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLnRhc2tfZHVlRGF0ZSB7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4udGFza190aXRsZSxcXG4udGFza19kZXNjLFxcbi50YXNrX2R1ZURhdGUge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yMTIpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udGFza190aXRsZSB7XFxuICBmbGV4OiAxO1xcbiAgcGFkZGluZzogMCA2JTtcXG59XFxuXFxuLnRhc2tCdXR0b25zID4gYnV0dG9uIHtcXG4gIGZvbnQtc2l6ZTogM3ZoO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi5tb2JpbGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTAwcHgpIHtcXG4gIGJvZHksXFxuICBodG1sIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgfVxcblxcbiAgLm1vYmlsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDU1cHg7XFxuICAgIGhlaWdodDogNTVweDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgd2hpdGU7XFxuICB9XFxuXFxuICAubW9iaWxlOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcblxcbiAgI3NpZGViYXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXgtd2lkdGg6IG1pbig3NSUsIDMwMHB4KTtcXG4gIH1cXG5cXG4gICNwcm9qZWN0Rm9ybSxcXG4gICN0YXNrRm9ybSxcXG4gICNjb25maXJtYXRpb25Gb3JtIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gIH1cXG5cXG4gICN0YXNrRm9ybSxcXG4gICNwcm9qZWN0Rm9ybSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgI3Byb2plY3RGb3JtIGxhYmVsIHtcXG4gICAgbWF4LWhlaWdodDogNTBweDtcXG4gIH1cXG5cXG4gICNwcm9qZWN0Rm9ybSA+IGRpdiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgI3Byb2plY3RGb3JtID4gZGl2ID4gKiB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgd2lkdGg6IDkwJTtcXG4gIH1cXG5cXG4gICN0YXNrRm9ybSBsYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgfVxcblxcbiAgI3Rhc2tGb3JtICN0aXRsZSxcXG4gICN0YXNrRm9ybSAjZHVlRGF0ZSB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogOTAlO1xcbiAgfVxcblxcbiAgI2Rlc2NyaXB0aW9uIHtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgbWF4LXdpZHRoOiBub25lO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xcbiAgfVxcblxcbiAgI3ByaW9yaXR5IHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH1cXG5cXG4gICN0YXNrRm9ybSA+IGRpdiB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgfVxcblxcbiAgLmZidG4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7XFxuICB9XFxuXFxuICAuZmJ0biA+ICoge1xcbiAgICBmb250LXNpemU6IDEuN3JlbTtcXG4gIH1cXG5cXG4gIC5SUEIge1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIHotaW5kZXg6IDE7XFxuICB9XFxuXFxuICAjZGF0ZSB7XFxuICAgIG1heC13aWR0aDogMjUwcHg7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gIH1cXG5cXG4gICNhZGRUYXNrIHtcXG4gICAgbWFyZ2luOiAwIDEwMHB4O1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4vdG9kb1wiO1xuXG5mdW5jdGlvbiBnZXREYXRlKCkge1xuICBjb25zdCBkID0gbmV3IERhdGUoKTtcbiAgbGV0IG1vbnRoID0gYCR7ZC5nZXRNb250aCgpICsgMX1gO1xuICBsZXQgZGF5ID0gYCR7ZC5nZXREYXRlKCl9YDtcbiAgY29uc3QgeWVhciA9IGQuZ2V0RnVsbFllYXIoKTtcblxuICBpZiAobW9udGgubGVuZ3RoIDwgMikge1xuICAgIG1vbnRoID0gYDAke21vbnRofWA7XG4gIH1cbiAgaWYgKGRheS5sZW5ndGggPCAyKSB7XG4gICAgZGF5ID0gYDAke2RheX1gO1xuICB9XG5cbiAgcmV0dXJuIFt5ZWFyLCBtb250aCwgZGF5XS5qb2luKFwiLVwiKTtcbn1cblxuZnVuY3Rpb24gZ2V0TW9udGhGcm9tU3RyaW5nKG1vbikge1xuICByZXR1cm4gbmV3IERhdGUoRGF0ZS5wYXJzZShgJHttb259IDEsIDIwMTJgKSkuZ2V0TW9udGgoKSArIDE7XG59XG5cbmNvbnN0IGNhbGVuZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkYXRlXCIpO1xuXG5jb25zdCB0b2RheSA9IGdldERhdGUoKTtcbmNhbGVuZGVyLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIHRvZGF5KTtcbmNhbGVuZGVyLnNldEF0dHJpYnV0ZShcIm1pblwiLCB0b2RheSk7XG5cbi8vIHNldCBkZWZhdWx0IGRhdGUgdmFsdWVzIHRvIHRvZGF5XG5jb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWVEYXRlXCIpO1xuZHVlRGF0ZS52YWx1ZSA9IGdldERhdGUoKTtcbi8vIGNvbnN0IHByb2pfZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJval9kdWVEYXRlXCIpO1xuLy8gcHJval9kdWVEYXRlLnZhbHVlID0gZ2V0RGF0ZSgpO1xuLy8gaWRlYWxseSB5b3Ugd291bGQgZm9ybWF0IHRvIGZpdCBsb2NhdGlvbiwgYnV0IHdoYXQgYSBwYWluIEQ6XG5mdW5jdGlvbiBmb3JtYXREYXRlKGRhdGUpIHtcbiAgY29uc3QgdGVtcCA9IGRhdGUuc3BsaXQoXCItXCIpO1xuICByZXR1cm4gW3RlbXBbMV0sIHRlbXBbMl0sIHRlbXBbMF1dLmpvaW4oXCItXCIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXQodGVtcCkge1xuICAvLyB0ZW1wIChvYmplY3QpOlxuICAvLyBTdW4gQXVnIDIxIDIwMjIgMDI6MDA6MDAgR01UKzAyMDAgKENlbnRyYWwgRXVyb3BlYW4gU3VtbWVyIFRpbWUpXG4gIGNvbnN0IHN0ciA9IHRlbXAudG9TdHJpbmcoKTtcbiAgY29uc3QgbW9udGggPSBnZXRNb250aEZyb21TdHJpbmcoc3RyLnN1YnN0cmluZyg0LCA3KSk7XG4gIGNvbnN0IGRheSA9IHN0ci5zdWJzdHJpbmcoOCwgMTApO1xuICBjb25zdCB5ZWFyID0gc3RyLnN1YnN0cmluZygxMSwgMTUpO1xuICByZXR1cm4gW2RheSwgbW9udGgsIHllYXJdO1xufVxuXG5jb25zdCBleHBpcmVDaGVjayA9ICh0YXNrKSA9PiB7XG4gIC8vIGNvbnN0IHRvZGF5QXJyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlXCIpLnZhbHVlLnNwbGl0KFwiLVwiKTtcblxuICBjb25zdCB0b2RheUFyciA9IGZvcm1hdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVcIikudmFsdWVBc0RhdGUpO1xuICAvLyBbZGF5LCBtb250aCwgeWVhcl1cbiAgY29uc3QgY3VycmVudFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdGVkXCIpLnRleHRDb250ZW50O1xuICBjb25zdCBhcnIgPSBwcm9qZWN0c1tjdXJyZW50UHJvamVjdF0udGFza3NbdGFzay50aXRsZV0uZHVlRGF0ZS5zcGxpdChcIi1cIik7XG4gIGlmIChcbiAgICArdG9kYXlBcnJbMF0gPiArYXJyWzFdIHx8XG4gICAgK3RvZGF5QXJyWzFdID4gK2FyclswXSB8fFxuICAgICt0b2RheUFyclsyXSA+ICthcnJbMl1cbiAgKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuLyogY29uc3QgcHJval9leHBpcmVDaGVjayA9ICgpID0+IHtcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VsZWN0ZWRcIikudGV4dENvbnRlbnQ7XG4gICAgaWYgKGN1cnJlbnRQcm9qZWN0ICE9IFwiSE9NRVwiKSB7XG4gICAgICAgIGNvbnN0IHRvZGF5QXJyID0gZm9ybWF0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZVwiKS52YWx1ZUFzRGF0ZSk7XG4gICAgICAgIGNvbnN0IGFyciA9IHByb2plY3RzW2N1cnJlbnRQcm9qZWN0XS5kdWVEYXRlLnNwbGl0KFwiLVwiKTtcbiAgICAgICAgLy8geWVhciBtb250aCBkYXlcblxuICAgICAgICBpZiAoK3RvZGF5QXJyWzBdID4gK2FyclsyXSB8fCArdG9kYXlBcnJbMV0gPiArYXJyWzBdIHx8ICt0b2RheUFyclsyXSA+XG4gICAgICAgICAgICArYXJyWzBdKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxufSAqL1xuXG5leHBvcnQgeyBnZXREYXRlLCBmb3JtYXREYXRlLCBleHBpcmVDaGVjayAvKiBwcm9qX2V4cGlyZUNoZWNrICovIH07XG4iLCJpbXBvcnQgeyBleHBpcmVDaGVjayB9IGZyb20gXCIuL2RhdGVcIjtcblxuZXhwb3J0IGNvbnN0IGFkZFRhc2tEID0gKHRhc2spID0+IHtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGl2LmNsYXNzTGlzdC5hZGQoYCR7dGFzay5pZH1gKTtcblxuICBpZiAoZXhwaXJlQ2hlY2sodGFzaykpIHtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChcImV4cGlyZWRcIik7XG4gIH0gZWxzZSB7XG4gICAgZGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJleHBpcmVkXCIpO1xuICB9XG5cbiAgY29uc3QgdGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tzXCIpO1xuICB0YXNrcy5hcHBlbmRDaGlsZChkaXYpO1xufTtcblxuZXhwb3J0IGNvbnN0IGVyYXNlVGFza3NEID0gKCkgPT4ge1xuICBjb25zdCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza3NcIik7XG4gIHdoaWxlICh0YXNrcy5maXJzdENoaWxkKSB7XG4gICAgdGFza3MucmVtb3ZlQ2hpbGQodGFza3MubGFzdENoaWxkKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGVyYXNlVGFza0QgPSAoaWQpID0+IHtcbiAgY29uc3QgdGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2lkfWApO1xuICB0YXNrLnJlbW92ZSgpO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZFByb2plY3REID0gKHByb2plY3QsIGlkKSA9PiB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKFwic2hvcnRjdXRcIik7XG4gIGRpdi5pZCA9IGlkO1xuICBkaXYudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuXG4gIGNvbnN0IHNob3J0Y3V0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hvcnRjdXRzXCIpO1xuICBzaG9ydGN1dHMuYXBwZW5kKGRpdik7XG59O1xuXG4vLyBEIGF0IHRoZSBlbmQgcmVwcmVzZW50cyBET01cbiIsImltcG9ydCB7IGNoZWNrRHVlRGF0ZSwgc2hvd0Zvcm1BbmRDb3ZlciB9IGZyb20gXCIuL3V0aWxpdHlcIjtcbmltcG9ydCB7IG9uQ2xpY2tpbmdSUEIgfSBmcm9tIFwiLi9zZXR1cFwiO1xuaW1wb3J0IHtcbiAgYWRkVGFzayxcbiAgcmVzZXRGb3JtLFxuICBhZGRQcm9qZWN0LFxuICByZXNldFByb2pGb3JtLFxuICByZXNldENvbmZGb3JtLFxufSBmcm9tIFwiLi9mb3Jtc1wiO1xuXG4vLyBpdCByZXNldHMgZXZlcnkgdGltZSB3ZWJzaXRlIHJlZnJlc2hlcyBzbyBkdXBsaWNhdGlvbiBidWcgb2NjdXJzLFxuLy8gYW5kIGl0J3MgbW9yZSBlZmZpY2llbnQsIChsaXR0bGUgYml0IGxvbFxuXG5jb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRUYXNrXCIpO1xuYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBzaG93Rm9ybUFuZENvdmVyKCk7XG59KTtcblxuLy8gdGhvdWdodCBpdCB3b3VsZCBlYXN5IHRvIHB1dCBhbGwgZm9ybSByZWxhdGVkIGNvZGUgdG8gdGhlIHN1Ym1pdCBidG4gbGlzdGVuZXJcbmNvbnN0IGdidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdyZWVuXCIpO1xuZ2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBhZGRUYXNrKCk7XG59KTtcblxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza0Zvcm1cIik7XG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gIGlmIChlLmNvZGUgPT09IFwiRW50ZXJcIikge1xuICAgIGFkZFRhc2soKTtcbiAgfVxufSk7XG5cbmNvbnN0IHJidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlZFwiKTtcbnJidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgcmVzZXRGb3JtKCk7XG59KTtcblxuY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkUHJvamVjdFwiKTtcbmFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY29uc3QgcHJvakZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RGb3JtXCIpO1xuICBwcm9qRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gIGNvbnN0IGNvdmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb3ZlclwiKTtcbiAgY292ZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbn0pO1xuXG5jb25zdCBwcm9qR0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJval9ncmVlblwiKTtcbnByb2pHQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGFkZFByb2plY3QoKTtcbn0pO1xuXG5jb25zdCBwcm9qRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdEZvcm1cIik7XG5wcm9qRm9ybS5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICBpZiAoZS5jb2RlID09PSBcIkVudGVyXCIpIHtcbiAgICBhZGRQcm9qZWN0KCk7XG4gIH1cbn0pO1xuXG5jb25zdCBwcm9qUkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJval9yZWRcIik7XG5wcm9qUkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICByZXNldFByb2pGb3JtKCk7XG59KTtcblxuY29uc3QgY29uZkdyZWVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb25mX2dyZWVuXCIpO1xuY29uZkdyZWVuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIG9uQ2xpY2tpbmdSUEIoKTtcbiAgcmVzZXRDb25mRm9ybSgpO1xufSk7XG5cbmNvbnN0IGNvbmZSZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbmZfcmVkXCIpO1xuY29uZlJlZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICByZXNldENvbmZGb3JtKCk7XG59KTtcblxuLy8gbmF2aWdhdGUgY2FsZW5kZXIsIGxlZnQgYW5kIHJpZ2h0IGFycm93XG5jb25zdCBsZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYWxMZWZ0XCIpO1xuY29uc3QgcmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhbFJpZ2h0XCIpO1xuY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RhdGVcIik7XG5sZWZ0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGlucHV0LnN0ZXBEb3duKCk7XG4gIGNoZWNrRHVlRGF0ZSgpO1xufSk7XG5yaWdodC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBpbnB1dC5zdGVwVXAoKTtcbiAgY2hlY2tEdWVEYXRlKCk7XG59KTtcbi8vIGRhdGUgaXMgcGlja2VkIG1hbnVhbGx5IGZyb20gdGhlIGNhbGFuZGVyLCBjbGljayBkb2Vzbid0IHdvcmtcbmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xuICBjaGVja0R1ZURhdGUoKTtcbn0pO1xuIiwiaW1wb3J0IHsgYWRkUHJvamVjdEQsIGFkZFRhc2tEIH0gZnJvbSBcIi4vZG9tXCI7XG5pbXBvcnQgeyBzZXR1cFRhc2tELCBhZGRQcm9qZWN0TGlzdGVuZXIgfSBmcm9tIFwiLi9zZXR1cFwiO1xuaW1wb3J0IHsgcHJvamVjdEZhY3RvcnksIHByb2plY3RzLCB0b2RvIH0gZnJvbSBcIi4vdG9kb1wiO1xuaW1wb3J0IHsgZm9ybWF0RGF0ZSwgZ2V0RGF0ZSB9IGZyb20gXCIuL2RhdGVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0Rm9ybSgpIHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza0Zvcm1cIik7XG4gIGNvbnN0IGNvdmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb3ZlclwiKTtcbiAgZm9ybS5yZXNldCgpO1xuICBmb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgY292ZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4gIC8vIHRoaXMgaXMgYWxzbyBkZWZhdWx0LCBwcmVzZW50IGluIGRhdGUuanMhXG4gIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZURhdGVcIik7XG4gIGR1ZURhdGUudmFsdWUgPSBnZXREYXRlKCk7XG59XG5cbi8vIGNvdWxkbid0IGdldCBzdWJtaXQgdHlwZSBidXR0b24gdG8gd29yaywgc28gbmVlZGVkIGEgZnVuY3Rpb24gdG8gZ2V0IHZhbHVlc1xuLy8gZnJvbSB0aGUgZm9ybSwgdGhpcyBpcyBpdFxuZnVuY3Rpb24gZ2V0VGFzaygpIHtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlXCIpLnZhbHVlO1xuICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VsZWN0ZWRcIikudGV4dENvbnRlbnQ7XG4gIGlmICghcHJvamVjdHNbY3VycmVudFByb2plY3RdLnRhc2tzW3RpdGxlXSkge1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvblwiKS52YWx1ZTtcbiAgICBsZXQgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlRGF0ZVwiKS52YWx1ZTtcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJpb3JpdHlcIikudmFsdWU7XG5cbiAgICBpZiAoIWR1ZURhdGUpIHtcbiAgICAgIGR1ZURhdGUgPSBnZXREYXRlKCk7XG4gICAgfVxuXG4gICAgbGV0IGlkID0gMDtcbiAgICAvLyBlYXNpZXN0IHdheSB0byBwcmV2ZW50IGR1cGxpY2F0aW9uIGJ1ZyA9PiAyIHRhc2tzIDEgaWRcbiAgICBPYmplY3Qua2V5cyhwcm9qZWN0c1tjdXJyZW50UHJvamVjdF0udGFza3MpLmZvckVhY2goKHRhc2tOYW1lKSA9PiB7XG4gICAgICBpZCA9IE1hdGgubWF4KFxuICAgICAgICBpZCxcbiAgICAgICAgTnVtYmVyKFxuICAgICAgICAgIHByb2plY3RzW2N1cnJlbnRQcm9qZWN0XS50YXNrc1t0YXNrTmFtZV0uaWQucmVwbGFjZShcInRhc2tcIiwgXCJcIilcbiAgICAgICAgKSArIDFcbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICBjb25zdCB0YXNrID0gdG9kbyhcbiAgICAgIHRpdGxlLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICBmb3JtYXREYXRlKGR1ZURhdGUpLFxuICAgICAgcHJpb3JpdHksXG4gICAgICBgdGFzayR7aWQudG9TdHJpbmcoKX1gXG4gICAgKTtcbiAgICByZXR1cm4gdGFzaztcbiAgfVxuICByZXR1cm4gMDtcbn1cblxuZXhwb3J0IGNvbnN0IGFkZFRhc2sgPSAoKSA9PiB7XG4gIC8vIHJ1biBvbmx5IGlmIG5vdCBlZGl0aW5nLCB3ZSBoYXZlIDIgZXZlbnQgbGlzdG5lcnMgb24gb25lIGJ1dHRvblxuICAvLyBzbyB0aGlzIGZvcmNlcyB0aGUgb3RoZXIgb25lIHRvIHdvcmsgYWxvbmUsIHdoaWNoIGlzIHdoYXQgd2Ugd2FudFxuICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VsZWN0ZWRcIikudGV4dENvbnRlbnQ7XG4gIC8vIGJ1Z3Mgb2NjdXIgaWYgZmxhZyBpc24ndCBwcmVzZW50LCBzaW5jZSBhZnRlciBJIGFtIHVzaW5nIHR3b1xuICAvLyBldmVudCBsaXN0bmVycyBmb3Igb25lIGJ1dHRvblxuICBjb25zdCB0YXNrID0gZ2V0VGFzaygpO1xuXG4gIGlmICh0YXNrID09PSAwKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWFsZXJ0XG4gICAgYWxlcnQoXCJGYWlsdXJlLCB0YXNrIHdpdGggdGhlIHNhbWUgdGl0bGUgYWxyZWFkeSBleGlzdHNcIik7XG4gIH1cbiAgaWYgKHRhc2spIHtcbiAgICByZXNldEZvcm0oKTtcbiAgICAvLyBzZXQgZGVmYXVsdCBkYXRlLCBzbyBNTS1ERC1ZWVlZIGlzIG5vdCBzaG93biBvbiBmb3JtPz8/Pz9cbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWVEYXRlXCIpO1xuICAgIGR1ZURhdGUudmFsdWUgPSBnZXREYXRlKCk7XG5cbiAgICAvLyBzZXR1cCB0YXNrXG4gICAgcHJvamVjdHNbY3VycmVudFByb2plY3RdLnRhc2tzW3Rhc2sudGl0bGVdID0gdGFzaztcbiAgICBhZGRUYXNrRCh0YXNrLCBjdXJyZW50UHJvamVjdCk7XG4gICAgc2V0dXBUYXNrRCh0YXNrKTtcblxuICAgIGNvbnN0IHJidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlZFwiKTtcbiAgICByYnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcblxuICAgIGNvbnN0IGdidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdyZWVuXCIpO1xuICAgIGdidXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2IoNDcsIDI1NSwgNDcpXCI7XG4gICAgZ2J1dHRvbi50ZXh0Q29udGVudCA9IFwiQWRkXCI7XG5cbiAgICAvLyBhdHRlbXB0IGF0IFwicmVmcmVzaGluZ1wiIHRoZSBoZWlnaHQsIGJlY2F1c2UgaXQgc29tZXRpbWVzIGZvcmdldHNcbiAgICAvLyBpdCBuZWVkcyB0byBiZSAxMDB2aCBvbiBtb2JpbGUgYnJvd3NlcnMgPi0uLTxcbiAgICAvLyBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NpZGViYXInKTtcbiAgICAvLyBzaWRlYmFyLnN0eWxlLmhlaWdodCA9ICcxMDB2aCc7XG5cbiAgICAvLyBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICAvLyBjb250ZW50LnN0eWxlLmhlaWdodCA9ICcxMDB2aCc7XG5cbiAgICAvLyBzYXZlIHRvIGxvY2FsIHdoZW4geW91IGFkZCB0YXNrIG9yIHByb2plY3RcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG4gIH1cbn07XG5cbi8vIHNpbWlsYXIgcHJvYmxlbSBhcyB0YXNrIGlkXG4vLyBsZXQgcHJvamVjdElEID0gT2JqZWN0LmtleXMocHJvamVjdHMpLmxlbmd0aDtcblxuLy8gYWdhaW50LCBuZWVkZWQgYSB3YXkgdG8gZ2V0IHZhbHVlcyBmcm9tIHRoZSBmb3JtXG5mdW5jdGlvbiBnZXRQcm9qZWN0KCkge1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJval90aXRsZVwiKS52YWx1ZTtcbiAgaWYgKCFwcm9qZWN0c1t0aXRsZV0pIHtcbiAgICAvLyBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qX2R1ZURhdGVcIikudmFsdWU7XG5cbiAgICBsZXQgcHJvamVjdElEID0gMDtcbiAgICAvLyBlYXNpZXN0IHdheSB0byBwcmV2ZW50IGR1cGxpY2F0aW9uIGJ1ZyA9PiAyIHByb2plY3RzIDEgaWRcbiAgICBPYmplY3Qua2V5cyhwcm9qZWN0cykuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgcHJvamVjdElEID0gTWF0aC5tYXgoXG4gICAgICAgIHByb2plY3RJRCxcbiAgICAgICAgTnVtYmVyKHByb2plY3RzW3Byb2plY3RdLmlkLnJlcGxhY2UoXCJQclwiLCBcIlwiKSkgKyAxXG4gICAgICApO1xuICAgIH0pO1xuICAgIGNvbnN0IHByb2ogPSBwcm9qZWN0RmFjdG9yeShcbiAgICAgIHRpdGxlLFxuICAgICAgLyogZHVlRGF0ZSwgKi9cbiAgICAgIGBQciR7cHJvamVjdElELnRvU3RyaW5nKCl9YFxuICAgICk7XG4gICAgcmV0dXJuIHByb2o7XG4gIH1cbiAgcmV0dXJuIDA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNldFByb2pGb3JtKCkge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0Rm9ybVwiKTtcbiAgY29uc3QgY292ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvdmVyXCIpO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2pfdGl0bGVcIikudmFsdWUgPSBcIlwiO1xuICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2pfZHVlRGF0ZVwiKS52YWx1ZSA9IFwiXCI7XG4gIGZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBjb3Zlci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbiAgLy8gdGhpcyBpcyBhbHNvIGRlZmF1bHQsIHByZXNlbnQgaW4gZGF0ZS5qcyFcbiAgLy8gY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJval9kdWVEYXRlXCIpO1xuICAvLyBkdWVEYXRlLnZhbHVlID0gZ2V0RGF0ZSgpO1xufVxuXG5leHBvcnQgY29uc3QgYWRkUHJvamVjdCA9ICgpID0+IHtcbiAgY29uc3QgcHJvamVjdCA9IGdldFByb2plY3QoKTtcbiAgaWYgKCFwcm9qZWN0KSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWFsZXJ0XG4gICAgYWxlcnQoXCJGYWlsdXJlLCBjYW4ndCByZXBlYXQgcHJvamVjdCBuYW1lXCIpO1xuICB9IGVsc2Uge1xuICAgIHJlc2V0UHJvakZvcm0oKTtcbiAgICBwcm9qZWN0c1twcm9qZWN0LnRpdGxlXSA9IHByb2plY3Q7XG4gICAgcHJvamVjdHNbcHJvamVjdC50aXRsZV0udGFza3MgPSB7fTtcbiAgICBwcm9qZWN0c1twcm9qZWN0LnRpdGxlXS5pZCA9IHByb2plY3QuaWQ7XG5cbiAgICBhZGRQcm9qZWN0RChwcm9qZWN0LCBwcm9qZWN0LmlkKTtcbiAgICBhZGRQcm9qZWN0TGlzdGVuZXIocHJvamVjdC5pZCk7XG5cbiAgICAvLyBzYXZlIHRvIGxvY2FsIHdoZW4geW91IGFkZCB0YXNrIG9yIHByb2plY3RcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG4gIH1cbn07XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNldENvbmZGb3JtKCkge1xuICBjb25zdCBjb25mRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29uZmlybWF0aW9uRm9ybVwiKTtcbiAgY29uZkZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBjb25zdCBjb3ZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY292ZXJcIik7XG4gIGNvdmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn1cbiIsImNvbnN0IG1vYmlsZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9iaWxlXCIpO1xubW9iaWxlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpZGViYXJcIik7XG4gIGlmIChzaWRlYmFyLnN0eWxlLmRpc3BsYXkgPT09IFwiZmxleFwiKSB7XG4gICAgc2lkZWJhci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH0gZWxzZSB7XG4gICAgc2lkZWJhci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgbW9iaWxlQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfVxufSk7XG5cbmNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpZGViYXJcIik7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7XG4gIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IFwiMTEwMFwiKSB7XG4gICAgc2lkZWJhci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgbW9iaWxlQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfVxuICBpZiAod2luZG93LmlubmVyV2lkdGggPCBcIjExMDBcIikge1xuICAgIHNpZGViYXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIG1vYmlsZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gIH1cbiAgLy8gLy9pZiAoc2lkZWJhci5zdHlsZS5kaXNwbGF5ICE9IFwiZmxleFwiKSB7XG4gIC8vICBtb2JpbGVCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAvLyB9XG59KTtcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbmNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgXCIxMTAwXCIpIHtcbiAgICBzaWRlYmFyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBtb2JpbGVCdG4uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICB9XG59KTtcblxuLy8gVGhlcmUgbWlnaHQgYmUgYSBtb3JlIGVmZmljaWVudCB3YXkuIFRoaXMgc2VlbXMgdG8gd29yayB0aG91Z2guXG4iLCJpbXBvcnQgeyBlcmFzZVRhc2tELCBhZGRQcm9qZWN0RCwgYWRkVGFza0QsIGVyYXNlVGFza3NEIH0gZnJvbSBcIi4vZG9tXCI7XG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL3RvZG9cIjtcbmltcG9ydCB7IGdldFRpdGxlLCBkZWxldGVUYXNrLCBzaG93Rm9ybUFuZENvdmVyIH0gZnJvbSBcIi4vdXRpbGl0eVwiO1xuXG5jb25zdCBkb1VJID0gKHdvcmtpbmdUYXNrKSA9PiB7XG4gIGNvbnN0IHRhc2tOb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7d29ya2luZ1Rhc2suaWR9YCk7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IHdvcmtpbmdUYXNrLnRpdGxlO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidGFza190aXRsZVwiKTtcbiAgdGFza05vZGUuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkZXNjLnRleHRDb250ZW50ID0gd29ya2luZ1Rhc2suZGVzY3JpcHRpb247XG4gIGRlc2MuY2xhc3NMaXN0LmFkZChcInRhc2tfZGVzY1wiKTtcbiAgdGFza05vZGUuYXBwZW5kQ2hpbGQoZGVzYyk7XG5cbiAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGR1ZURhdGUudGV4dENvbnRlbnQgPSBgRHVlIERhdGU6ICR7d29ya2luZ1Rhc2suZHVlRGF0ZX1gO1xuICBkdWVEYXRlLmNsYXNzTGlzdC5hZGQoXCJ0YXNrX2R1ZURhdGVcIik7XG4gIHRhc2tOb2RlLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuXG4gIHRhc2tOb2RlLmNsYXNzTGlzdC5hZGQoYCR7d29ya2luZ1Rhc2sucHJpb3JpdHl9YCk7XG59O1xuXG5jb25zdCBzZXR1cERlbGV0ZUJ1dHRvbiA9ICh3b3JraW5nVGFzaykgPT4ge1xuICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBidG4udGV4dENvbnRlbnQgPSBcIlhcIjtcblxuICBjb25zdCBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt3b3JraW5nVGFzay5pZH0gLnRhc2tCdXR0b25zYCk7XG4gIGRpdi5hcHBlbmRDaGlsZChidG4pO1xuXG4gIC8vIHdlIG5lZWQgdG8gb2J0YWluIHRhc2sgb2JqZWN0IGZyb20gdGhlIGJ1dHRvbiBpdHNlbGZcbiAgLy8gYmVjYXVzZSBpZiB3ZSB1c2UgYW55IHZhcmlhYmxlIGl0IHdvbid0IGRlbGV0ZSBwcm9wZXJseVxuICAvLyB0aGlzIGlzIGRvbmUgdmlhIG1hdGNoaW5nIGJ0biBjbGFzcyBuYW1lIHdoaWNoIGlzIGVxdWFsIHRvIHRoZSBpZFxuICAvLyBvZiB0aGUgdGFzayB0aGF0IHdlIGFyZSBzZWVraW5nIGluIGEgcHJvamVjdHMgb2JqZWN0XG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBjb25zdCB0YXNrSUQgPSBbLi4uZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNsYXNzTGlzdF1bMF07XG4gICAgY29uc3QgdGl0bGUgPSBnZXRUaXRsZSh0YXNrSUQpO1xuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWxlY3RlZFwiKS50ZXh0Q29udGVudDtcbiAgICBkZWxldGVUYXNrKGN1cnJlbnRQcm9qZWN0LCBwcm9qZWN0c1tjdXJyZW50UHJvamVjdF0udGFza3NbdGl0bGVdKTtcbiAgICBlcmFzZVRhc2tEKHRhc2tJRCk7XG4gIH0pO1xufTtcblxuZnVuY3Rpb24gc2V0dXBFZGl0Rm9ybSh0aXRsZSkge1xuICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VsZWN0ZWRcIikudGV4dENvbnRlbnQ7XG4gIC8vIHRhc2sgPSBUSEUgT05FIEJFSU5HIENMSUNLRURcbiAgY29uc3QgdGFzayA9IHByb2plY3RzW2N1cnJlbnRQcm9qZWN0XS50YXNrc1t0aXRsZV07XG5cbiAgLy8gZmlsbCB0aGUgZm9ybSBjb3JyZWN0bHlcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZVwiKS52YWx1ZSA9IHRhc2sudGl0bGU7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb25cIikudmFsdWUgPSB0YXNrLmRlc2NyaXB0aW9uO1xuICBsZXQgYXJyID0gdGFzay5kdWVEYXRlLnNwbGl0KFwiLVwiKTtcbiAgYXJyID0gW2FyclsyXSwgYXJyWzBdLCBhcnJbMV1dLmpvaW4oXCItXCIpO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZURhdGVcIikudmFsdWUgPSBhcnI7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJpb3JpdHlcIikudmFsdWUgPSB0YXNrLnByaW9yaXR5O1xuXG4gIC8vIGRlbGV0ZSwgYW5kIGxldCB0aGUgZ3JlZW4gYnV0dG9uIGJ1aWxkIGl0IGZvciB5b3UsIG5vIGluIHRoaXMgY2FzZVxuICAvLyBzaG91bGQgaGF2ZSBhIHNwZWNpYWwgZnVuY3Rpb25cbiAgZXJhc2VUYXNrRChwcm9qZWN0c1tjdXJyZW50UHJvamVjdF0udGFza3NbdGl0bGVdLmlkKTtcbiAgZGVsZXRlIHByb2plY3RzW2N1cnJlbnRQcm9qZWN0XS50YXNrc1t0aXRsZV07XG5cbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xuXG4gIGNvbnN0IHJidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlZFwiKTtcbiAgcmJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbiAgY29uc3QgZ2J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ3JlZW5cIik7XG4gIGdidXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ5ZWxsb3dcIjtcbiAgZ2J1dHRvbi50ZXh0Q29udGVudCA9IFwiRWRpdFwiO1xufVxuXG5jb25zdCBzZXR1cEVkaXRCdXR0b24gPSAod29ya2luZ1Rhc2spID0+IHtcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYnRuLnRleHRDb250ZW50ID0gXCJFZGl0XCI7XG5cbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGl2LmNsYXNzTGlzdC5hZGQoXCJ0YXNrQnV0dG9uc1wiKTtcblxuICBjb25zdCB0YXNrTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3dvcmtpbmdUYXNrLmlkfWApO1xuICB0YXNrTm9kZS5hcHBlbmRDaGlsZChkaXYpO1xuICBkaXYuYXBwZW5kQ2hpbGQoYnRuKTtcblxuICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgc2hvd0Zvcm1BbmRDb3ZlcigpO1xuICAgIHNldHVwRWRpdEZvcm0oZ2V0VGl0bGUoWy4uLmUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5jbGFzc0xpc3RdWzBdKSk7XG4gIH0pO1xufTtcblxuLy8gXCJDb250cm9sXCIgZnVuY3Rpb25cbmV4cG9ydCBmdW5jdGlvbiBzZXR1cFRhc2tEKHRhc2spIHtcbiAgZG9VSSh0YXNrKTtcbiAgc2V0dXBFZGl0QnV0dG9uKHRhc2spO1xuICBzZXR1cERlbGV0ZUJ1dHRvbih0YXNrKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dDb25maXJtYXRpb25Gb3JtKCkge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb25maXJtYXRpb25Gb3JtXCIpO1xuICBmb3JtLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgY29uc3QgY292ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvdmVyXCIpO1xuICBjb3Zlci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xufVxuXG4vLyBSUEIgLSByZW1vdmUgcHJvamVjdCBidXR0b25cbmV4cG9ydCBmdW5jdGlvbiBhZGRSUEIoKSB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyXCIpO1xuICBpZiAoaGVhZGVyLmxhc3RDaGlsZC50ZXh0Q29udGVudCAhPT0gXCJYXCIpIHtcbiAgICBjb25zdCBkZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGRlbEJ0bi50ZXh0Q29udGVudCA9IFwiWFwiO1xuICAgIGRlbEJ0bi5jbGFzc0xpc3QuYWRkKFwiUlBCXCIpO1xuICAgIGRlbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgc2hvd0NvbmZpcm1hdGlvbkZvcm0oKTtcbiAgICB9KTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoZGVsQnRuKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUlBCKCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlclwiKTtcbiAgY29uc3QgcnBiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5SUEJcIik7XG4gIGlmIChycGIpIHtcbiAgICBoZWFkZXIucmVtb3ZlQ2hpbGQocnBiKTtcbiAgfVxufVxuXG4vLyBmZWx0IGxpa2UgdGhpcyBkZXNlcnZlcyBhIHNlcGVyYXRlIG1vZHVsZSwgc2luY2UgaXQncyBub3QgcmVhbGx5IERPTSBtYW5pcC5cbmV4cG9ydCBjb25zdCBjaGFuZ2VQcm9qZWN0RCA9IChwcm9qZWN0TmFtZSkgPT4ge1xuICBlcmFzZVRhc2tzRCgpO1xuICBpZiAocHJvamVjdHNbcHJvamVjdE5hbWVdLnRhc2tzICE9PSB7fSkge1xuICAgIE9iamVjdC5rZXlzKHByb2plY3RzW3Byb2plY3ROYW1lXS50YXNrcykuZm9yRWFjaCgoZW0pID0+IHtcbiAgICAgIGFkZFRhc2tEKHByb2plY3RzW3Byb2plY3ROYW1lXS50YXNrc1tlbV0pO1xuICAgICAgc2V0dXBUYXNrRChwcm9qZWN0c1twcm9qZWN0TmFtZV0udGFza3NbZW1dLCBwcm9qZWN0TmFtZSk7XG4gICAgfSk7XG4gIH1cblxuICBpZiAocHJvamVjdE5hbWUgIT09IFwiSE9NRVwiKSB7XG4gICAgYWRkUlBCKCk7XG4gIH0gZWxzZSB7XG4gICAgcmVtb3ZlUlBCKCk7XG4gIH1cbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRQcm9qZWN0TGlzdGVuZXIoaWQpIHtcbiAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2lkfWApO1xuXG4gIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCB0ZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWxlY3RlZFwiKTtcbiAgICB0ZW1wLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCBcIjEwMjRcIikge1xuICAgICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2lkZWJhclwiKTtcbiAgICAgIGNvbnN0IG1vYmlsZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9iaWxlXCIpO1xuICAgICAgc2lkZWJhci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICBtb2JpbGVCdG4uc3R5bGUuZGlzcGxheSA9IFwiaW5pdGlhbFwiO1xuICAgIH1cbiAgICBjaGFuZ2VQcm9qZWN0RChwcm9qZWN0LnRleHRDb250ZW50KTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkNsaWNraW5nUlBCKCkge1xuICAvLyBmaXJzdCBjaGVjayBpZiB5b3UgYWN0dWFsbHkgd2FudCB0byBkZWxldGVcbiAgLy8gZ2V0IGlkLCBkZWxldGUgb24gY29udGVudCBhbmQgdGhlbiBzaWRlYmFyIHVzaW5nIGlkLiByZXR1cm4gdG8gaG9tZVxuICBjb25zdCBwcm9qZWN0TmFtZTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdGVkXCIpLnRleHRDb250ZW50O1xuICBjb25zdCBwcm9qZWN0SUQgPSBwcm9qZWN0c1twcm9qZWN0TmFtZTJdLmlkO1xuICBkZWxldGUgcHJvamVjdHNbcHJvamVjdE5hbWUyXTtcbiAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3Byb2plY3RJRH1gKTtcbiAgcHJvamVjdC5yZW1vdmUoKTtcblxuICBjb25zdCBob21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNQcjBcIik7XG4gIGhvbWUuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICBjaGFuZ2VQcm9qZWN0RChcIkhPTUVcIik7XG5cbiAgLy8gc2F2ZSBiZWNhdXNlIHlvdSByZW1vdmVkIGEgcHJvamVjdFxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG59XG5cbmFkZFByb2plY3RMaXN0ZW5lcihcIlByMFwiKTtcblxuLy8gbG9hZCBhbGwgcHJvamVjdHMgYW5kIHRhc2tzIGZyb20gdGhlIGxvY2FsIHN0b3JhZ2VcbmV4cG9ydCBjb25zdCBsb2FkRnJvbVN0b3JhZ2UgPSAoKSA9PiB7XG4gIE9iamVjdC5rZXlzKHByb2plY3RzKS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgaWYgKHByb2plY3QgIT09IFwiSE9NRVwiKSB7XG4gICAgICBhZGRQcm9qZWN0RChwcm9qZWN0c1twcm9qZWN0XSwgcHJvamVjdHNbcHJvamVjdF0uaWQpO1xuICAgICAgYWRkUHJvamVjdExpc3RlbmVyKHByb2plY3RzW3Byb2plY3RdLmlkKTtcbiAgICB9XG4gIH0pO1xuXG4gIE9iamVjdC5rZXlzKHByb2plY3RzLkhPTUUudGFza3MpLmZvckVhY2goKHRhc2spID0+IHtcbiAgICBhZGRUYXNrRChwcm9qZWN0cy5IT01FLnRhc2tzW3Rhc2tdKTtcbiAgICBzZXR1cFRhc2tEKHByb2plY3RzLkhPTUUudGFza3NbdGFza10sIFwiSE9NRVwiKTtcbiAgfSk7XG59O1xuXG4vLyBQcmV2aW91cyBzZXR1cFByb2plY3QgYW5kIHNldHVwVGFzayBoYXZlIG1lcmdlZCBkdWUgdG8gZXNsaW50IHNob3V0aW5nIGF0IG1lXG4vLyBmb3IgZGVwZW5kZW5jeSBjeWNsZSBlcnJvcnMuIEkgaGF2ZSBtZXJnZWQgdGhlbSB0b2dldGhlciBpbnRvIHRoaXMgc2V0dXBcbi8vIGZpbGUuIElkZWFsbHkgSSB3b3VsZCBmaW5kIGFub3RoZXIgd2F5IHRvIHNwaXQgdGhpcyBtb2R1bGUgaW50byBtb3JlIHBpZWNlcyxcbi8vIHRoaXMgd291bGQgYWxsIGhhdmUgYmVlbiBlYXNpZXIsIGlmIEkgaGFkIHVzZWQgZXNsaW50IGZyb20gc3RhcnQsIHNvIHdvcmsgdG9cbi8vIGJlIGRvbmUgaGVyZSwgaWYgbW9yZSBjb2RlIGlzIHRvIGJlIGluY2x1ZGVkLCBlc3BlY2lhbGx5IGNvZGUgdGhhdCBpcyByZWxhdGVkXG4vLyB0byBhbnkga2luZCBvZiBzZXR1cC5cbiIsImZ1bmN0aW9uIHN0b3JhZ2VBdmFpbGFibGUodHlwZSkge1xuICBsZXQgc3RvcmFnZTtcbiAgdHJ5IHtcbiAgICBzdG9yYWdlID0gd2luZG93W3R5cGVdO1xuICAgIGNvbnN0IHggPSBcIl9fc3RvcmFnZV90ZXN0X19cIjtcbiAgICBzdG9yYWdlLnNldEl0ZW0oeCwgeCk7XG4gICAgc3RvcmFnZS5yZW1vdmVJdGVtKHgpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIGUgaW5zdGFuY2VvZiBET01FeGNlcHRpb24gJiZcbiAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgIChlLmNvZGUgPT09IDIyIHx8XG4gICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgZS5jb2RlID09PSAxMDE0IHx8XG4gICAgICAgIC8vIHRlc3QgbmFtZSBmaWVsZCB0b28sIGJlY2F1c2UgY29kZSBtaWdodCBub3QgYmUgcHJlc2VudFxuICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAgIGUubmFtZSA9PT0gXCJRdW90YUV4Y2VlZGVkRXJyb3JcIiB8fFxuICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgIGUubmFtZSA9PT0gXCJOU19FUlJPUl9ET01fUVVPVEFfUkVBQ0hFRFwiKSAmJlxuICAgICAgLy8gYWNrbm93bGVkZ2UgUXVvdGFFeGNlZWRlZEVycm9yIG9ubHkgaWYgdGhlcmUncyBzb21ldGhpbmcgYWxyZWFkeSBzdG9yZWRcbiAgICAgIHN0b3JhZ2UgJiZcbiAgICAgIHN0b3JhZ2UubGVuZ3RoICE9PSAwXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgcHJvamVjdHMgPSB7XG4gIEhPTUU6IHtcbiAgICB0YXNrczoge30sXG4gICAgaWQ6IFwiUHIwXCIsXG4gIH0sXG59O1xuXG5pZiAoc3RvcmFnZUF2YWlsYWJsZSkge1xuICBsZXQgcmV0cmlldmVkT2JqZWN0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKTtcbiAgaWYgKHJldHJpZXZlZE9iamVjdCA9PT0gbnVsbCkge1xuICAgIHJldHJpZXZlZE9iamVjdCA9IEpTT04uc3RyaW5naWZ5KHt9KTtcbiAgfVxuICByZXRyaWV2ZWRPYmplY3QgPSBKU09OLnBhcnNlKHJldHJpZXZlZE9iamVjdCk7XG4gIC8vIGZvciAoY29uc3QgZW0gb2YgT2JqZWN0LmtleXMocmV0cmlldmVkT2JqZWN0KSkge1xuICAvLyAgIHByb2plY3RzW2VtXSA9IHJldHJpZXZlZE9iamVjdFtlbV07XG4gIC8vIH1cbiAgT2JqZWN0LmtleXMocmV0cmlldmVkT2JqZWN0KS5mb3JFYWNoKChlbSkgPT4ge1xuICAgIHByb2plY3RzW2VtXSA9IHJldHJpZXZlZE9iamVjdFtlbV07XG4gIH0pO1xuICAvLyBwcm9qZWN0cyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpO1xufVxuXG5leHBvcnQgY29uc3QgdG9kbyA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBpZCkgPT4gKHtcbiAgdGl0bGUsXG4gIGRlc2NyaXB0aW9uLFxuICBkdWVEYXRlLFxuICBwcmlvcml0eSxcbiAgaWQsXG59KTtcblxuZXhwb3J0IGNvbnN0IHByb2plY3RGYWN0b3J5ID0gKHRpdGxlIC8qICwgZHVlRGF0ZSAqLywgaWQpID0+ICh7XG4gIHRpdGxlIC8qICwgZHVlZURhdGUgKi8sXG4gIGlkLFxufSk7XG4iLCJpbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL3RvZG9cIjtcbmltcG9ydCB7IGV4cGlyZUNoZWNrIH0gZnJvbSBcIi4vZGF0ZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tEdWVEYXRlKCkge1xuICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VsZWN0ZWRcIikudGV4dENvbnRlbnQ7XG4gIE9iamVjdC5rZXlzKHByb2plY3RzW2N1cnJlbnRQcm9qZWN0XS50YXNrcykuZm9yRWFjaCgodGFza05hbWUpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYC4ke3Byb2plY3RzW2N1cnJlbnRQcm9qZWN0XS50YXNrc1t0YXNrTmFtZV0uaWR9YFxuICAgICk7XG4gICAgaWYgKGV4cGlyZUNoZWNrKHByb2plY3RzW2N1cnJlbnRQcm9qZWN0XS50YXNrc1t0YXNrTmFtZV0pKSB7XG4gICAgICBkaXYuY2xhc3NMaXN0LmFkZChcImV4cGlyZWRcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRpdi5jbGFzc0xpc3QucmVtb3ZlKFwiZXhwaXJlZFwiKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8qXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgICBpZiAocHJval9leHBpcmVDaGVjaygpKSB7XG4gICAgICAgIGNvbnRlbnQuc3R5bGUuYm9yZGVyVG9wID0gXCIxdmggcmVkIHNvbGlkXCI7XG4gICAgICAgIGNvbnRlbnQuc3R5bGUuYm9yZGVyTGVmdCA9IFwiMXZoIHJlZCBzb2xpZFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRlbnQuc3R5bGUuYm9yZGVyID0gXCJub25lXCI7XG4gICAgfSAqL1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGl0bGUodGFza0lEKSB7XG4gIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWxlY3RlZFwiKS50ZXh0Q29udGVudDtcbiAgbGV0IHRpdGxlO1xuXG4gIE9iamVjdC5rZXlzKHByb2plY3RzW2N1cnJlbnRQcm9qZWN0XS50YXNrcykuZm9yRWFjaCgodGFza05hbWUpID0+IHtcbiAgICBpZiAocHJvamVjdHNbY3VycmVudFByb2plY3RdLnRhc2tzW3Rhc2tOYW1lXS5pZCA9PT0gdGFza0lEKSB7XG4gICAgICB0aXRsZSA9IHByb2plY3RzW2N1cnJlbnRQcm9qZWN0XS50YXNrc1t0YXNrTmFtZV0udGl0bGU7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHRpdGxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlVGFzayhwcm9qZWN0LCB0YXNrKSB7XG4gIGRlbGV0ZSBwcm9qZWN0c1twcm9qZWN0XS50YXNrc1t0YXNrLnRpdGxlXTtcbiAgLy8gd2UgYXJlIGFjdHVhbGx5IGRlbGV0aW5nLCBub3QganVzdCBlcmFzaW5nIGZyb20gc2NyZWVuISEhXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dGb3JtQW5kQ292ZXIoKSB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tGb3JtXCIpO1xuICBjb25zdCBjb3ZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY292ZXJcIik7XG4gIGNvdmVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIGZvcm0uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBcIi4vZXZlbnRMaXN0ZW5lcnNcIjtcbmltcG9ydCBcIi4vZGF0ZVwiO1xuaW1wb3J0IFwiLi9tb2JpbGVcIjtcbmltcG9ydCB7IGxvYWRGcm9tU3RvcmFnZSB9IGZyb20gXCIuL3NldHVwXCI7XG5cbmxvYWRGcm9tU3RvcmFnZSgpO1xuLypcbiAgICBUT0RPOlxuICAgIC0gQ29uZmlndXJlIGRhdGVzIHByb3Blcmx5XG4gICAgICAgIFR3byB0eXBlcyBvZiB0YXNrczpcbiAgICAgICAgICAgIDEuIFNvbWV0aGluZyB0aGF0IG5lZWRzIHRvIGJlIGRvbmUgb24gYSBzcGVjaWZpYyBkYXkuIEl0IGNhbiBoYXZlIGFcbiAgICAgICAgICAgICAgICBkdWVEYXRlL2R1ZUhvdXIsIGJ1dCBpdCdzIG9wdGlvbmFsLiBJdCBvbmx5IHNob3dzIG9uIG9uZSBkYXlcbiAgICAgICAgICAgIDIuIFNvbWV0aGluZyB0aGF0IG5lZWRzIHRvIGJlIGRvbmUgdGlsbCBhIHNwZWNpZmllZCBkdWVEYXRlLiBTbyBpdFxuICAgICAgICAgICAgICAgIHNob3dzIGV2ZXJ5IGRheSB1bnRpbCB0aGUgZHVlRGF0ZS4gRXhwaXJlZCBzZWN0aW9uIG1pZ2h0IGJlXG4gICAgICAgICAgICAgICAgb2YgdXNlLlxuXG4gICAgICAgICAgICBJZGVhOlxuICAgICAgICAgICAgQWx3YXlzIHNob3cgYWxsIHRoYXQgY2FuIGJlIHNob3duLiBJZiBpdCBoYXBwZW5zIHRoYXQgb25lIG9mIHRoZW1cbiAgICAgICAgICAgIGV4cGlyZWQgc2ltcGx5IG5lZG90ZSBzbyB1c2luZyByZWQgYm9yZGVyIG9yIChleHBpcmVkKSB0YWcuXG4gICAgICAgICAgICBJdCBjYW4gYmUgc2hvd24gaWYgaXRzIHN0YXJ0IGRheSBpcyB0b2RheSBvciBlYXJsaWVyLiAtLy8vLVxuXG4gICAgLSBBZGQgYSBmb3JtIGZvciB1c2VyIGlucHV0IC0vLy8tXG4gICAgLSBUYXNrIGNoYW5nZXM6XG4gICAgICAgICAgICAxKSBTdHlsZSBjaGFuZ2VzOiBSZWRvIHRhc2sgc3F1YXJlcyAtLy8vLSwgbWF5YmUgbm90XG4gICAgICAgICAgICAyKSBUYXNrIGRlc2NyaXB0aW9uL2VkaXQgc3lzdGVtIC0vLy8tXG4gICAgICAgICAgICAzKSBNYWtlIHByaW9yaXRlcyBtYXR0ZXIsIGJvcmRlciBjb2xvciAtLy8vLVxuICAgIC0gRklYIHJlbW92ZSBidXR0b24sIG5hbWVseSB3aGVuIHlvdSBkb24ndCBpbnB1dCBhbnl0aGluZyBpbiB0aGUgZm9ybVxuICAgICAgICBtdWx0aXBsZSB0YXNrcyBhcmUgbWFkZSBldmVudCB0aG91Z2ggdGhlcmUgaXMgb25seSBvbmUgc2F2ZWQgaW4gdGhlXG4gICAgICAgIG9iamVjdC4gaXQgc2hvd3MgY29ycmVjdGx5IGFmdGVyIHJlZnJlc2ggLS8vLy1cbiAgICAtIEZJWDogcHJldmVudCBmcm9tIGNoYW5naW5nIHByb2plY3RzIHdoZW4gdGhlIGZvcm0gaXMgb3BlbmVkLFxuICAgICAgICBjb25zaWRlciBhZGRpbmcgYSBjb3ZlciBqdXN0IGxpa2UgaW4gdGhlIGxpYnJhcnkgcHJvamVjdCAtLy8vLVxuICAgIC0gRklYOiBwcm9qZWN0L3Nob3J0Y3V0IG5hbWUgbGV0dGVycyBnb2luZyB0byBuZXcgbGluZSwgaW5zdGVhZCBvbmx5IHdvcmRzXG4gICAgICAgIC0vLy8tIGJ1dCBjYW4ndCBmaXggbG9uZyBuYW1lcywgbWF5YmUgZmluZCBhIHdheSB0byBhZGQgXCItXCIgYXQgZW5kIHdoZW5cbiAgICAgICAgYnJlYWtpbmdcbiAgICAtIEFkZCBMb2NhbCBzdG9yYWdlIC0vLy8tXG4gICAgLSBBZGQgYSBjb25maXJtYXRpb24gZm9ybSB3aGVuIGF0dGVtcHRpbmcgdG8gZGVsZXRlIGEgcHJvamVjdCAtLy8vLVxuICAgIC0gQWRkIG1lZGlhIHF1ZXJpZXNcbiAgICAtIGNoYW5nZSBwcm9qZWN0SWQgYW5kIGlkIHRvIGNhbGN1bGF0ZSBpZCBiYXNlZCBvbiB3aGF0IGlzIHRoZSBiaWdnZXN0IGlkXG4gICAgICAgIHByZXNlbnQgb24gdGhlIGN1cnJlbnQgcHJvamVjdC9wcm9qZWN0cyBhbmQgdGhlbiBhZGQgMSwgdGhpcyB3YXlcbiAgICAgICAgaXQgaXMgbm90IGJhc2VkIG9uIGxlbmd0aCBhbmQgZHVwZSBidWdzIGRvIG5vdCBhcHBlYXIgLS8vLy1cbiAgICAtIEZpeCBkYXRlcyBmb3IgZWRpdGluZyEgLS8vLy1cbiAgICAtIERvIHNvbWV0aGluZyB3aXRoIHByb2plY3QgZGF0ZXMsIG1heWJlIGNvbnRlbnQgYm9yZGVyIHRvIHNpZ25pZnkgdGhlIGxhdGVcbiAgICAgICAgcHJvamVjdCAtLy8vLVxuICAgIC0gTWFrZSBhIHJlZnJlc2ggZnVuY3Rpb24sIHRoYXQgcmVsb2FkcywgbWF5YmUganVzdCBjaGFuZ2VQcm9qZWN0IHNvIHlvdVxuICAgICAgICBkb24ndCBoYXZlIHRvIGxvY2F0aW9uLnJlbG9hZCgpXG4gICAgLSBUZXh0QXJlYSBleHBhbmRpbmcgRDogLS8vLy1cbiAgICAtIGNvbnNpZGVyIG1vcmUgY29scyBhbmQgcm93IGZvciBUZXh0QXJlYSAtLy8vLVxuICAgIC0gUmV0aGluayB0aGUgbmVlZCBmb3IgZHVlRGF0ZSBpbiBwcm9qZWN0LCBJIHRoaW5rIG5vdCBuZWVkZWQhISAtLy8vLVxuICAgIC0gcHJldmVudCB0aXRsZSBuYW1lIGR1cGxpY2F0aW9uIG9uIGFkZGluZyB0YXNrLCB0aGUgZm9ybSBnb2VzIGF3YXkgZm9yIHNvbWVcbiAgICAgICAgcmVhc29uIC0vLy8tXG4gICAgLSBnaG9zdCB0YXNrIGFwcGVhcmluZzogYnVnIC0vLy8tXG4gICAgLSBtYWtlIHJlZCBidXR0b24gcmVjb3ZlciB0aGUgdGFzaywgeW91IGhhdmUgYWxsIHRoZSBkYXRhIG5lZWRlZCBpbiB0aGUgZm9ybVxuICAgICAgICAsIGluc3RlYWQgcmV3b3JrZWQgdG8gaW5jbHVkZSBvbmx5IGVkaXQgYnV0dG9uIC0vLy8tXG4gICAgLSBhZGQga2V5YmluZHMsIGVzcGVjaWFsbHkgZW50ZXIgaW5zdGVhZCBvZiBtb3VzZSBjbGljayAtLy8vLVxuICAgIC0gQ0xFQU4gQ09ERSEhISEhIHlvdSBrbm93IGN1cnJlbnRQcm9qZWN0IHJlcGVhdCBhbGwgdGhlIHRpbWUgYW5kIG90aGVyIGphenpcbiAgICAtIGV4cGVyaW1lbnQgd2l0aCB3b3JraW5nX3Rhc2ssIHRyeSB0byByZW1vdmUgLS8vLy1cbiAgICAtIHJld29yayBtb2R1bGVzLCBtYXliZSBubyBuZWVkIHRvIGdlbmVyYWxpemUgZXZlcnl0aGluZywgZXhwZXJpbWVudFxuICAgIC0gY2xlYW5lciBjc3MsIG1vcmUgY29tbWVudHMsIGNvbnNpZGVyIGFuaW1hdGlvbnMvdHJhbnNmb3JtYXRpb25zIGZvclxuICAgICAgICBjb25zaWRlciByZW1ha2luZyBjc3MgZ3JvdW5kIHVwLCBtYWtlIGl0IHdvcmsgb24gbW9iaWxlIGZpcnN0XG4gICAgLSBkZWxldGUgdGhlIHRhc2sgb25seSBhZnRlciB0aGUgZWRpdCBmb3JtIGlzIHN1Ym1pdHRlZCwgcG90ZW50aWFsbHkgdXNlXG4gICAgYXN5bmMvd2FpdCBmdW5jdGlvblxuICAgIC0gcmV3b3JrIG1vYmlsZSBkZXNpZ24sIHBlcmhhcHMgYWRkVGFzayBvbiB0b3AgYW5kIGNhbGFuZGVyIG9uIGJvdHRvbSxcbiAgICBtaWdodCBmZWVsIG1vcmUgbmF0dXJhbCAtLy8vLVxuXG4gICAgUG90ZW50aWFsIGJ1Z3M6XG4gICAgICAgIFNtYWxsIGJsYW5rIHJlY3RhbmdsZSBhcHBlYXJpbmcgc29tZXRpbWVzIHdoZW4gcmVzaXppbmcuIFJlZnJlc2ggZml4ZXMuXG4qL1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
