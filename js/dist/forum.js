module.exports =
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./src/forum/components/PreviewButton.js":
/*!***********************************************!*\
  !*** ./src/forum/components/PreviewButton.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PreviewButton; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/helpers/icon */ "flarum/helpers/icon");
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_2__);



var modifierKey = navigator.userAgent.match(/Macintosh/) ? '⌘' : 'ctrl';

var PreviewButton =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(PreviewButton, _Component);

  function PreviewButton() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = PreviewButton.prototype;

  _proto.config = function config(isInitialized) {
    if (isInitialized) return;
    this.$().tooltip();
  };

  _proto.view = function view() {
    return m("button", {
      className: "Button Button--icon",
      title: this.title(),
      "data-hotkey": this.props.hotkey,
      onclick: this.click.bind(this),
      onkeydown: this.keydown.bind(this)
    }, flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_2___default()(this.props.icon));
  };

  _proto.keydown = function keydown(event) {
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      this.click();
    }
  };

  _proto.click = function click() {
    return this.props.onclick();
  };

  _proto.title = function title() {
    var tooltip = this.props.title;
    if (this.props.hotkey) tooltip += " <" + modifierKey + "-" + this.props.hotkey + ">";
    return tooltip;
  };

  return PreviewButton;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_components_TextEditor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/components/TextEditor */ "flarum/components/TextEditor");
/* harmony import */ var flarum_components_TextEditor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_components_TextEditor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_components_ComposerBody__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/ComposerBody */ "flarum/components/ComposerBody");
/* harmony import */ var flarum_components_ComposerBody__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_ComposerBody__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/DiscussionComposer */ "flarum/components/DiscussionComposer");
/* harmony import */ var flarum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_PreviewButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/PreviewButton */ "./src/forum/components/PreviewButton.js");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_4__);





app.initializers.add('simonxeko/preview-discussion', function () {
  console.log('[simonxeko/preview-discussion] Hello, forum!');
  var index = 1;
  var textareaId = 'textarea1';
  var previewMode = false;

  var onClickPreview = function onClickPreview() {
    previewMode = !previewMode;

    if (previewMode) {
      s9e.TextFormatter.preview($('#' + textareaId).val(), $('#preview-discussion')[0]);
      $('#preview-discussion').show();
    } else {
      $('#preview-discussion').hide();
    }
  };

  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_4__["extend"])(flarum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'init', function () {
    this.editor.props.preview = function () {
      onClickPreview();
    };
  });
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_4__["extend"])(flarum_components_TextEditor__WEBPACK_IMPORTED_MODULE_0___default.a.prototype, 'init', function () {
    textareaId = 'textarea' + index++;
  });
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_4__["extend"])(flarum_components_TextEditor__WEBPACK_IMPORTED_MODULE_0___default.a.prototype, 'view', function (vdom) {
    if (!vdom.children[0].attrs.id) {
      // Check id to avoid conflicts with markdown extension
      vdom.children[0].attrs.id = this.textareaId;
    }
  });
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_4__["extend"])(flarum_components_TextEditor__WEBPACK_IMPORTED_MODULE_0___default.a.prototype, 'oninput', function () {// Simultaneously render preview
    // s9e.TextFormatter.preview($('#' + textareaId).val(), $('#preview-discussion')[0]);
  });
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_4__["extend"])(flarum_components_ComposerBody__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'headerItems', function (items) {
    items.add('preview-discussion', m("div", {
      id: "preview-discussion",
      "class": "Post-body",
      style: "display: none; position: absolute; background: white; z-index: 99;"
    }, "TEST_PREVIEW"), 50);
  });
  setInterval(function () {
    if ($('#' + textareaId).offset()) {
      $('#preview-discussion').css({
        width: $('#' + textareaId).width(),
        height: $('#' + textareaId).height() + 10,
        top: $('#' + textareaId).offset().top - $('.Composer').offset().top,
        left: $('#' + textareaId).offset().left - $('.Composer').offset().left
      });
    }
  }, 300);
  /*extend(TextEditor.prototype, 'controlItems', function (items) {
    const tooltip = name => app.translator.trans(`simonxeko-preview-discussion.forum.preview_tooltip`);
    
    // create and add the button
    items.add('preview', 
      <PreviewButton title={tooltip('preview')} icon="fas fa-eye" style={{ prefix: '### ' }} onclick={onClickPreview} />,
    0);
  });*/
});

/***/ }),

/***/ "flarum/Component":
/*!**************************************************!*\
  !*** external "flarum.core.compat['Component']" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['Component'];

/***/ }),

/***/ "flarum/components/ComposerBody":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['components/ComposerBody']" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/ComposerBody'];

/***/ }),

/***/ "flarum/components/DiscussionComposer":
/*!**********************************************************************!*\
  !*** external "flarum.core.compat['components/DiscussionComposer']" ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/DiscussionComposer'];

/***/ }),

/***/ "flarum/components/TextEditor":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['components/TextEditor']" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/TextEditor'];

/***/ }),

/***/ "flarum/extend":
/*!***********************************************!*\
  !*** external "flarum.core.compat['extend']" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['extend'];

/***/ }),

/***/ "flarum/helpers/icon":
/*!*****************************************************!*\
  !*** external "flarum.core.compat['helpers/icon']" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/icon'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map