webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectDestructuringEmpty; });
function _objectDestructuringEmpty(obj) {
  if (obj == null) throw new TypeError("Cannot destructure undefined");
}

/***/ }),

/***/ "./node_modules/use-sound/dist/use-sound.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/use-sound/dist/use-sound.esm.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function useOnMount(callback) {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(callback, []);
}

function useSound(url, _ref) {
  if (_ref === void 0) {
    _ref = {};
  }

  var _ref2 = _ref,
      _ref2$volume = _ref2.volume,
      volume = _ref2$volume === void 0 ? 1 : _ref2$volume,
      _ref2$playbackRate = _ref2.playbackRate,
      playbackRate = _ref2$playbackRate === void 0 ? 1 : _ref2$playbackRate,
      _ref2$soundEnabled = _ref2.soundEnabled,
      soundEnabled = _ref2$soundEnabled === void 0 ? true : _ref2$soundEnabled,
      _ref2$interrupt = _ref2.interrupt,
      interrupt = _ref2$interrupt === void 0 ? false : _ref2$interrupt,
      onload = _ref2.onload,
      delegated = _objectWithoutPropertiesLoose(_ref2, ["volume", "playbackRate", "soundEnabled", "interrupt", "onload"]);

  var HowlConstructor = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false),
      isPlaying = _React$useState[0],
      setIsPlaying = _React$useState[1];

  var _React$useState2 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(null),
      duration = _React$useState2[0],
      setDuration = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(null),
      sound = _React$useState3[0],
      setSound = _React$useState3[1];

  var handleLoad = function handleLoad() {
    if (typeof onload === 'function') {
      // @ts-ignore
      onload.call(this);
    } // @ts-ignore


    setDuration(this.duration() * 1000);
  }; // We want to lazy-load Howler, since sounds can't play on load anyway.


  useOnMount(function () {
    __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! howler */ "./node_modules/howler/dist/howler.js", 7)).then(function (mod) {
      HowlConstructor.current = mod.Howl;
      var sound = new HowlConstructor.current(_extends({
        src: [url],
        volume: volume,
        onload: handleLoad
      }, delegated));
      setSound(sound);
    });
  }); // When the URL changes, we have to do a whole thing where we recreate
  // the Howl instance. This is because Howler doesn't expose a way to
  // tweak the sound

  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
    if (HowlConstructor.current && sound) {
      setSound(new HowlConstructor.current(_extends({
        src: [url],
        volume: volume,
        onload: handleLoad
      }, delegated)));
    } // The linter wants to run this effect whenever ANYTHING changes,
    // but very specifically I only want to recreate the Howl instance
    // when the `url` changes. Other changes should have no effect.
    // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [url]); // Whenever volume/playbackRate are changed, change those properties
  // on the sound instance.

  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
    if (sound) {
      sound.volume(volume);
      sound.rate(playbackRate);
    } // A weird bug means that including the `sound` here can trigger an
    // error on unmount, where the state loses track of the sprites??
    // No idea, but anyway I don't need to re-run this if only the `sound`
    // changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [volume, playbackRate]);
  var play = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(function (options) {
    if (typeof options === 'undefined') {
      options = {};
    }

    if (!sound || !soundEnabled && !options.forceSoundEnabled) {
      return;
    }

    if (interrupt) {
      sound.stop();
    }

    if (options.playbackRate) {
      sound.rate(options.playbackRate);
    }

    sound.play(options.id);
    sound.once('end', function () {
      return setIsPlaying(false);
    });
    setIsPlaying(true);
  }, [sound, soundEnabled, interrupt]);
  var stop = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(function (id) {
    if (!sound) {
      return;
    }

    sound.stop(id);
    setIsPlaying(false);
  }, [sound]);
  var pause = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(function (id) {
    if (!sound) {
      return;
    }

    sound.pause(id);
    setIsPlaying(false);
  }, [sound]);
  var returnedValue = [play, {
    sound: sound,
    stop: stop,
    pause: pause,
    isPlaying: isPlaying,
    duration: duration
  }];
  return returnedValue;
}

/* harmony default export */ __webpack_exports__["default"] = (useSound);
//# sourceMappingURL=use-sound.esm.js.map


/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var use_sound__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! use-sound */ "./node_modules/use-sound/dist/use-sound.esm.js");


var _this = undefined,
    _jsxFileName = "/Users/MANDYluv/Documents/webprojects/slp/src/pages/index.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (function () {
  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__["default"])(use_sound__WEBPACK_IMPORTED_MODULE_4__["default"]);

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(Title, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, "Stressless Productions"), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: "envelope-square",
    size: "2x",
    fixedWidth: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: "envelope-square",
    size: "6x",
    fixedWidth: true,
    listItem: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: "spinner",
    size: "2x",
    spin: true,
    border: true,
    fixedWidth: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: "spinner",
    size: "10x",
    pulse: true,
    fixedWidth: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: "spinner",
    size: "10x",
    inverse: true,
    pulse: true,
    fixedWidth: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }));
});
var Title = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h1.withConfig({
  displayName: "pages__Title",
  componentId: "sc-1ndvirh-0"
})(["color:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.colors.primary;
});

/***/ })

})
//# sourceMappingURL=index.js.d39f0a14a04248fe96d5.hot-update.js.map