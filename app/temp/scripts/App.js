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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _CookieNotice = __webpack_require__(1);

var _CookieNotice2 = _interopRequireDefault(_CookieNotice);

var _Search = __webpack_require__(2);

var _Search2 = _interopRequireDefault(_Search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cookieNotice = new _CookieNotice2.default();
// import catalog from '../data/catalog.json';

var search = new _Search2.default();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CookieNotice = function () {
  function CookieNotice() {
    _classCallCheck(this, CookieNotice);

    if (!document.cookie.includes('accepted-cookie')) {
      this.cookieNotice = document.getElementById('js-cookie-notice');
      this.acceptBtn = document.getElementById('js-accept-cookies');
      this.showCookieNotice();
    }
  }

  _createClass(CookieNotice, [{
    key: 'showCookieNotice',
    value: function showCookieNotice() {
      this.cookieNotice.style.display = 'block';
      this.hideCookieNotice();
    }
  }, {
    key: 'hideCookieNotice',
    value: function hideCookieNotice() {
      var _this = this;

      this.acceptBtn.addEventListener('click', function () {
        _this.cookieNotice.style.display = 'none';
        document.cookie = 'accepted-cookie=true; expires=Wed, 31 Dec 2042 12:00:00 UTC; path=/';
      });
    }
  }]);

  return CookieNotice;
}();

exports.default = CookieNotice;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _catalog = __webpack_require__(3);

var _catalog2 = _interopRequireDefault(_catalog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Search = function () {
  function Search() {
    _classCallCheck(this, Search);

    this.searchParentDiv = document.getElementById('js-search');
    this.searchInput = document.getElementById('js-search__input');
    this.autocomplete = document.getElementById('js-search__autocomplete');
    this.searchBtn = document.getElementById('js-search__btn');
    this.suggestions = [];
    this.events();
  }

  _createClass(Search, [{
    key: 'events',
    value: function events() {
      var _this = this;

      // display suggestions
      this.searchInput.addEventListener('input', function () {
        _this.getSuggestions(2);
      });
      this.searchInput.addEventListener('focus', function () {
        _this.getSuggestions(2);
      });

      // hide suggestions when elements in #js-search lose focus
      document.addEventListener('click', function (e) {
        if (!_this.searchParentDiv.contains(e.target)) _this.displaySuggestions([]);
      });

      // navigate to search result
      this.searchBtn.addEventListener('click', function () {
        _this.navigateToResult();
      });
      this.searchInput.addEventListener('keyup', function (e) {
        if (e.keyCode === 13) _this.searchBtn.click();
      });
    }
  }, {
    key: 'getSuggestions',
    value: function getSuggestions(numberOfSuggestions) {
      var input = this.searchInput.value.toLowerCase().trim();
      this.suggestions = [];

      if (input) {
        this.suggestions.input = input;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = _catalog2.default[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var entry = _step.value;
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = entry.synonyms[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var synonym = _step2.value;

                if (synonym.includes(input)) {
                  this.suggestions.push({
                    productType: entry.productType,
                    href: entry.href
                  });
                  break;
                }
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                  _iterator2.return();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }

            if (this.suggestions.length >= numberOfSuggestions) break;
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
      this.displaySuggestions(this.suggestions);
    }
  }, {
    key: 'displaySuggestions',
    value: function displaySuggestions(suggestions) {
      var _this2 = this;

      this.autocomplete.innerHTML = '';
      suggestions.forEach(function (suggestion) {
        var newLink = document.createElement('a');
        newLink.textContent = suggestion.productType;
        newLink.href = suggestion.href;
        _this2.autocomplete.appendChild(newLink);
      });
    }
  }, {
    key: 'navigateToResult',
    value: function navigateToResult() {
      if (this.suggestions.input) {
        if (this.suggestions[0]) window.location = this.suggestions[0].href || 'http://www.google.com/search?q=' + this.suggestions[0].productType;else window.location = 'http://www.google.com/search?q=' + this.suggestions.input;
      }
    }
  }]);

  return Search;
}();

exports.default = Search;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = [{"productType":"televisie","href":"productadvies/televisie.html","synonyms":["televisie","tv","beeldbuis"]},{"productType":"smartphone","href":"productadvies/smartphone.html","synonyms":["smartphone","telefoon","mobiel","mobiele telefoon","mobieltje","gsm","toestel","handy"]},{"productType":"telescoop","href":false,"synonyms":["telescoop","sterrenkijker"]}]

/***/ })
/******/ ]);