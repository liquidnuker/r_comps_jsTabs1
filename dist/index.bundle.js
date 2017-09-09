/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_main_scss__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_main_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__styles_main_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_jsTabs1_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_jsTabs1_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__js_jsTabs1_js__);




/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JsTabs1 = function () {
  function JsTabs1(opts) {
    _classCallCheck(this, JsTabs1);

    this.activeTab = opts.startTab;
    this.tabItems = opts.tabItems;
    this.startTab = opts.startTab;

    this.activeTabClass = opts.activeTabClass;
    this.normalTabClass = opts.normalTabClass;
    this.tabContentHolder = opts.tabContentHolder;
  }

  _createClass(JsTabs1, [{
    key: "init",
    value: function init() {
      this.items = document.querySelectorAll(this.tabItems);
      this.loadTabContent(this.items[this.startTab].innerHTML, this.startTab);
      this.addEvents();
    }
  }, {
    key: "addEvents",
    value: function addEvents() {
      var tabArr = Array.prototype.slice.call(this.items);

      var self = this;
      tabArr.forEach(function (i, index) {
        i.addEventListener("click", function () {
          self.loadTabContent(i.innerHTML, index);
        });
      });
    }
  }, {
    key: "setActiveTab",
    value: function setActiveTab(index) {
      var activeItem = index;
      var items = this.items;
      var activeTab = this.activeTab;

      items[activeItem].className += this.activeTabClass;
      items[activeItem].setAttribute("aria-selected", true);

      // remove activeTab
      if (activeTab !== activeItem) {
        items[activeTab].className = this.normalTabClass;
        items[activeTab].setAttribute("aria-selected", false);

        // set current activeTab
        this.activeTab = activeItem;
      }
    }

    // loadTabContent method#1

  }, {
    key: "loadTabContent",
    value: function loadTabContent(item, index) {
      this.setActiveTab(index);
      var jsonUrl = "js/ajax/" + item + ".json";
      document.getElementById(this.tabContentHolder).textContent = jsonUrl;
    }
  }]);

  return JsTabs1;
}();

var JT1 = new JsTabs1({
  tabItems: ".jsTabs1-01 > li",
  startTab: 0, // default starting tab
  activeTabClass: " jsTabs1-01--active",
  normalTabClass: "jsTabs1-01",
  tabContentHolder: "jsTabs1-01_content"
});

JT1.init();

/***/ })
/******/ ]);