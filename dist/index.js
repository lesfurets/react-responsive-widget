(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["ReactResponsiveWidget"] = factory(require("react"), require("react-dom"));
	else
		root["ReactResponsiveWidget"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_11__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ResponsiveContainer = __webpack_require__(1);

	var _ResponsiveContainer2 = _interopRequireDefault(_ResponsiveContainer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _ResponsiveContainer2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(3);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _reactDom = __webpack_require__(11);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	__webpack_require__(12);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var XS = "app-xs";
	var SM = "app-sm";
	var MD = "app-md";
	var LG = "app-lg";

	var getFormat = function getFormat(element) {
	  var elementWidth = _reactDom2.default.findDOMNode(element).offsetWidth;
	  if (elementWidth > element.props.lg) {
	    return LG;
	  } else if (elementWidth > element.props.md) {
	    return MD;
	  } else if (elementWidth > element.props.sm) {
	    return SM;
	  }
	  return XS;
	};

	var ResponsiveContainer = function (_React$Component) {
	  _inherits(ResponsiveContainer, _React$Component);

	  function ResponsiveContainer() {
	    _classCallCheck(this, ResponsiveContainer);

	    var _this = _possibleConstructorReturn(this, (ResponsiveContainer.__proto__ || Object.getPrototypeOf(ResponsiveContainer)).call(this));

	    _this.state = {
	      format: XS
	    };
	    _this.checkSize = _this.checkSize.bind(_this);
	    return _this;
	  }

	  _createClass(ResponsiveContainer, [{
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      this.checkSize();
	      if (window.attachEvent) {
	        // IE
	        window.attachEvent('onresize', this.checkSize);
	      } else if (window.addEventListener) {
	        // Common
	        window.addEventListener('resize', this.checkSize, true);
	      }
	    }
	  }, {
	    key: "checkSize",
	    value: function checkSize() {
	      var format = getFormat(this);
	      if (format != this.state.format) {
	        this.setState({ format: format });
	      }
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "div",
	        { className: "app-container", __self: this
	        },
	        _react2.default.createElement(
	          "div",
	          { className: this.state.format, __self: this
	          },
	          this.props.children
	        )
	      );
	    }
	  }]);

	  return ResponsiveContainer;
	}(_react2.default.Component);

	exports.default = ResponsiveContainer;


	ResponsiveContainer.propTypes = {
	  lg: _propTypes2.default.number,
	  md: _propTypes2.default.number,
	  sm: _propTypes2.default.number
	};

	ResponsiveContainer.defaultProps = {
	  lg: 1200,
	  md: 992,
	  sm: 768
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	if ((undefined) !== 'production') {
	  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
	    Symbol.for &&
	    Symbol.for('react.element')) ||
	    0xeac7;

	  var isValidElement = function(object) {
	    return typeof object === 'object' &&
	      object !== null &&
	      object.$$typeof === REACT_ELEMENT_TYPE;
	  };

	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = __webpack_require__(4)(isValidElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = __webpack_require__(10)();
	}


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var emptyFunction = __webpack_require__(5);
	var invariant = __webpack_require__(6);
	var warning = __webpack_require__(7);

	var ReactPropTypesSecret = __webpack_require__(8);
	var checkPropTypes = __webpack_require__(9);

	module.exports = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */

	  var ANONYMOUS = '<<anonymous>>';

	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),

	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker
	  };

	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/

	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message) {
	    this.message = message;
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;

	  function createChainableTypeChecker(validate) {
	    if ((undefined) !== 'production') {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;

	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          invariant(
	            false,
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	        } else if ((undefined) !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            warning(
	              false,
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `%s` prop on `%s`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
	              propFullName,
	              componentName
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }

	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);

	    return chainedCheckType;
	  }

	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);

	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
	  }

	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      (undefined) !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }

	      var valuesString = JSON.stringify(expectedValues);
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (propValue.hasOwnProperty(key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      (undefined) !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }

	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        warning(
	          false,
	          'Invalid argument supplid to oneOfType. Expected an array of check functions, but ' +
	          'received %s at index %s.',
	          getPostfixForTypeWarning(checker),
	          i
	        );
	        return emptyFunction.thatReturnsNull;
	      }
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
	          return null;
	        }
	      }

	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          continue;
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }

	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }

	        return true;
	      default:
	        return false;
	    }
	  }

	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }

	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }

	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }

	    return false;
	  }

	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }

	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }

	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }

	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};


/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}

	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};

	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};

	module.exports = emptyFunction;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var validateFormat = function validateFormat(format) {};

	if ((undefined) !== 'production') {
	  validateFormat = function validateFormat(format) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  };
	}

	function invariant(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}

	module.exports = invariant;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var emptyFunction = __webpack_require__(5);

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = emptyFunction;

	if ((undefined) !== 'production') {
	  var printWarning = function printWarning(format) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }

	    var argIndex = 0;
	    var message = 'Warning: ' + format.replace(/%s/g, function () {
	      return args[argIndex++];
	    });
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };

	  warning = function warning(condition, format) {
	    if (format === undefined) {
	      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	    }

	    if (format.indexOf('Failed Composite propType: ') === 0) {
	      return; // Ignore CompositeComponent proptype check.
	    }

	    if (!condition) {
	      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	        args[_key2 - 2] = arguments[_key2];
	      }

	      printWarning.apply(undefined, [format].concat(args));
	    }
	  };
	}

	module.exports = warning;

/***/ },
/* 8 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	module.exports = ReactPropTypesSecret;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	if ((undefined) !== 'production') {
	  var invariant = __webpack_require__(6);
	  var warning = __webpack_require__(7);
	  var ReactPropTypesSecret = __webpack_require__(8);
	  var loggedTypeFailures = {};
	}

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if ((undefined) !== 'production') {
	    for (var typeSpecName in typeSpecs) {
	      if (typeSpecs.hasOwnProperty(typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', componentName || 'React class', location, typeSpecName);
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;

	          var stack = getStack ? getStack() : '';

	          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
	        }
	      }
	    }
	  }
	}

	module.exports = checkPropTypes;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var emptyFunction = __webpack_require__(5);
	var invariant = __webpack_require__(6);
	var ReactPropTypesSecret = __webpack_require__(8);

	module.exports = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    invariant(
	      false,
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	  };
	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  };
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim
	  };

	  ReactPropTypes.checkPropTypes = emptyFunction;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};


/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(13);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(15)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/autoprefixer-loader/index.js!./../node_modules/less-loader/index.js!./responsive-grid.less", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/autoprefixer-loader/index.js!./../node_modules/less-loader/index.js!./responsive-grid.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(14)();
	// imports


	// module
	exports.push([module.id, ".app-container {\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n  width: 100%;\n}\n.app-container .app-row {\n  margin-right: -15px;\n  margin-left: -15px;\n}\n.app-container .app-col-xs-1,\n.app-container .app-col-sm-1,\n.app-container .app-col-md-1,\n.app-container .app-col-lg-1,\n.app-container .app-col-xs-2,\n.app-container .app-col-sm-2,\n.app-container .app-col-md-2,\n.app-container .app-col-lg-2,\n.app-container .app-col-xs-3,\n.app-container .app-col-sm-3,\n.app-container .app-col-md-3,\n.app-container .app-col-lg-3,\n.app-container .app-col-xs-4,\n.app-container .app-col-sm-4,\n.app-container .app-col-md-4,\n.app-container .app-col-lg-4,\n.app-container .app-col-xs-5,\n.app-container .app-col-sm-5,\n.app-container .app-col-md-5,\n.app-container .app-col-lg-5,\n.app-container .app-col-xs-6,\n.app-container .app-col-sm-6,\n.app-container .app-col-md-6,\n.app-container .app-col-lg-6,\n.app-container .app-col-xs-7,\n.app-container .app-col-sm-7,\n.app-container .app-col-md-7,\n.app-container .app-col-lg-7,\n.app-container .app-col-xs-8,\n.app-container .app-col-sm-8,\n.app-container .app-col-md-8,\n.app-container .app-col-lg-8,\n.app-container .app-col-xs-9,\n.app-container .app-col-sm-9,\n.app-container .app-col-md-9,\n.app-container .app-col-lg-9,\n.app-container .app-col-xs-10,\n.app-container .app-col-sm-10,\n.app-container .app-col-md-10,\n.app-container .app-col-lg-10,\n.app-container .app-col-xs-11,\n.app-container .app-col-sm-11,\n.app-container .app-col-md-11,\n.app-container .app-col-lg-11,\n.app-container .app-col-xs-12,\n.app-container .app-col-sm-12,\n.app-container .app-col-md-12,\n.app-container .app-col-lg-12 {\n  position: relative;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n.app-container .app-col-xs-1,\n.app-container .app-col-xs-2,\n.app-container .app-col-xs-3,\n.app-container .app-col-xs-4,\n.app-container .app-col-xs-5,\n.app-container .app-col-xs-6,\n.app-container .app-col-xs-7,\n.app-container .app-col-xs-8,\n.app-container .app-col-xs-9,\n.app-container .app-col-xs-10,\n.app-container .app-col-xs-11,\n.app-container .app-col-xs-12 {\n  float: left;\n}\n.app-container .app-col-xs-12 {\n  width: 100%;\n}\n.app-container .app-col-xs-11 {\n  width: 91.66666667%;\n}\n.app-container .app-col-xs-10 {\n  width: 83.33333333%;\n}\n.app-container .app-col-xs-9 {\n  width: 75%;\n}\n.app-container .app-col-xs-8 {\n  width: 66.66666667%;\n}\n.app-container .app-col-xs-7 {\n  width: 58.33333333%;\n}\n.app-container .app-col-xs-6 {\n  width: 50%;\n}\n.app-container .app-col-xs-5 {\n  width: 41.66666667%;\n}\n.app-container .app-col-xs-4 {\n  width: 33.33333333%;\n}\n.app-container .app-col-xs-3 {\n  width: 25%;\n}\n.app-container .app-col-xs-2 {\n  width: 16.66666667%;\n}\n.app-container .app-col-xs-1 {\n  width: 8.33333333%;\n}\n.app-container .app-col-xs-pull-12 {\n  right: 100%;\n}\n.app-container .app-col-xs-pull-11 {\n  right: 91.66666667%;\n}\n.app-container .app-col-xs-pull-10 {\n  right: 83.33333333%;\n}\n.app-container .app-col-xs-pull-9 {\n  right: 75%;\n}\n.app-container .app-col-xs-pull-8 {\n  right: 66.66666667%;\n}\n.app-container .app-col-xs-pull-7 {\n  right: 58.33333333%;\n}\n.app-container .app-col-xs-pull-6 {\n  right: 50%;\n}\n.app-container .app-col-xs-pull-5 {\n  right: 41.66666667%;\n}\n.app-container .app-col-xs-pull-4 {\n  right: 33.33333333%;\n}\n.app-container .app-col-xs-pull-3 {\n  right: 25%;\n}\n.app-container .app-col-xs-pull-2 {\n  right: 16.66666667%;\n}\n.app-container .app-col-xs-pull-1 {\n  right: 8.33333333%;\n}\n.app-container .app-col-xs-pull-0 {\n  right: auto;\n}\n.app-container .app-col-xs-push-12 {\n  left: 100%;\n}\n.app-container .app-col-xs-push-11 {\n  left: 91.66666667%;\n}\n.app-container .app-col-xs-push-10 {\n  left: 83.33333333%;\n}\n.app-container .app-col-xs-push-9 {\n  left: 75%;\n}\n.app-container .app-col-xs-push-8 {\n  left: 66.66666667%;\n}\n.app-container .app-col-xs-push-7 {\n  left: 58.33333333%;\n}\n.app-container .app-col-xs-push-6 {\n  left: 50%;\n}\n.app-container .app-col-xs-push-5 {\n  left: 41.66666667%;\n}\n.app-container .app-col-xs-push-4 {\n  left: 33.33333333%;\n}\n.app-container .app-col-xs-push-3 {\n  left: 25%;\n}\n.app-container .app-col-xs-push-2 {\n  left: 16.66666667%;\n}\n.app-container .app-col-xs-push-1 {\n  left: 8.33333333%;\n}\n.app-container .app-col-xs-push-0 {\n  left: auto;\n}\n.app-container .app-col-xs-offset-12 {\n  margin-left: 100%;\n}\n.app-container .app-col-xs-offset-11 {\n  margin-left: 91.66666667%;\n}\n.app-container .app-col-xs-offset-10 {\n  margin-left: 83.33333333%;\n}\n.app-container .app-col-xs-offset-9 {\n  margin-left: 75%;\n}\n.app-container .app-col-xs-offset-8 {\n  margin-left: 66.66666667%;\n}\n.app-container .app-col-xs-offset-7 {\n  margin-left: 58.33333333%;\n}\n.app-container .app-col-xs-offset-6 {\n  margin-left: 50%;\n}\n.app-container .app-col-xs-offset-5 {\n  margin-left: 41.66666667%;\n}\n.app-container .app-col-xs-offset-4 {\n  margin-left: 33.33333333%;\n}\n.app-container .app-col-xs-offset-3 {\n  margin-left: 25%;\n}\n.app-container .app-col-xs-offset-2 {\n  margin-left: 16.66666667%;\n}\n.app-container .app-col-xs-offset-1 {\n  margin-left: 8.33333333%;\n}\n.app-container .app-col-xs-offset-0 {\n  margin-left: 0;\n}\n.app-container .app-hidden-xs {\n  display: none !important;\n}\n.app-container .app-sm .app-col-sm-1,\n.app-container .app-md .app-col-sm-1,\n.app-container .app-lg .app-col-sm-1,\n.app-container .app-sm .app-col-sm-2,\n.app-container .app-md .app-col-sm-2,\n.app-container .app-lg .app-col-sm-2,\n.app-container .app-sm .app-col-sm-3,\n.app-container .app-md .app-col-sm-3,\n.app-container .app-lg .app-col-sm-3,\n.app-container .app-sm .app-col-sm-4,\n.app-container .app-md .app-col-sm-4,\n.app-container .app-lg .app-col-sm-4,\n.app-container .app-sm .app-col-sm-5,\n.app-container .app-md .app-col-sm-5,\n.app-container .app-lg .app-col-sm-5,\n.app-container .app-sm .app-col-sm-6,\n.app-container .app-md .app-col-sm-6,\n.app-container .app-lg .app-col-sm-6,\n.app-container .app-sm .app-col-sm-7,\n.app-container .app-md .app-col-sm-7,\n.app-container .app-lg .app-col-sm-7,\n.app-container .app-sm .app-col-sm-8,\n.app-container .app-md .app-col-sm-8,\n.app-container .app-lg .app-col-sm-8,\n.app-container .app-sm .app-col-sm-9,\n.app-container .app-md .app-col-sm-9,\n.app-container .app-lg .app-col-sm-9,\n.app-container .app-sm .app-col-sm-10,\n.app-container .app-md .app-col-sm-10,\n.app-container .app-lg .app-col-sm-10,\n.app-container .app-sm .app-col-sm-11,\n.app-container .app-md .app-col-sm-11,\n.app-container .app-lg .app-col-sm-11,\n.app-container .app-sm .app-col-sm-12,\n.app-container .app-md .app-col-sm-12,\n.app-container .app-lg .app-col-sm-12 {\n  float: left;\n}\n.app-container .app-sm .app-col-sm-12,\n.app-container .app-md .app-col-sm-12,\n.app-container .app-lg .app-col-sm-12 {\n  width: 100%;\n}\n.app-container .app-sm .app-col-sm-11,\n.app-container .app-md .app-col-sm-11,\n.app-container .app-lg .app-col-sm-11 {\n  width: 91.66666667%;\n}\n.app-container .app-sm .app-col-sm-10,\n.app-container .app-md .app-col-sm-10,\n.app-container .app-lg .app-col-sm-10 {\n  width: 83.33333333%;\n}\n.app-container .app-sm .app-col-sm-9,\n.app-container .app-md .app-col-sm-9,\n.app-container .app-lg .app-col-sm-9 {\n  width: 75%;\n}\n.app-container .app-sm .app-col-sm-8,\n.app-container .app-md .app-col-sm-8,\n.app-container .app-lg .app-col-sm-8 {\n  width: 66.66666667%;\n}\n.app-container .app-sm .app-col-sm-7,\n.app-container .app-md .app-col-sm-7,\n.app-container .app-lg .app-col-sm-7 {\n  width: 58.33333333%;\n}\n.app-container .app-sm .app-col-sm-6,\n.app-container .app-md .app-col-sm-6,\n.app-container .app-lg .app-col-sm-6 {\n  width: 50%;\n}\n.app-container .app-sm .app-col-sm-5,\n.app-container .app-md .app-col-sm-5,\n.app-container .app-lg .app-col-sm-5 {\n  width: 41.66666667%;\n}\n.app-container .app-sm .app-col-sm-4,\n.app-container .app-md .app-col-sm-4,\n.app-container .app-lg .app-col-sm-4 {\n  width: 33.33333333%;\n}\n.app-container .app-sm .app-col-sm-3,\n.app-container .app-md .app-col-sm-3,\n.app-container .app-lg .app-col-sm-3 {\n  width: 25%;\n}\n.app-container .app-sm .app-col-sm-2,\n.app-container .app-md .app-col-sm-2,\n.app-container .app-lg .app-col-sm-2 {\n  width: 16.66666667%;\n}\n.app-container .app-sm .app-col-sm-1,\n.app-container .app-md .app-col-sm-1,\n.app-container .app-lg .app-col-sm-1 {\n  width: 8.33333333%;\n}\n.app-container .app-sm .app-col-sm-pull-12,\n.app-container .app-md .app-col-sm-pull-12,\n.app-container .app-lg .app-col-sm-pull-12 {\n  right: 100%;\n}\n.app-container .app-sm .app-col-sm-pull-11,\n.app-container .app-md .app-col-sm-pull-11,\n.app-container .app-lg .app-col-sm-pull-11 {\n  right: 91.66666667%;\n}\n.app-container .app-sm .app-col-sm-pull-10,\n.app-container .app-md .app-col-sm-pull-10,\n.app-container .app-lg .app-col-sm-pull-10 {\n  right: 83.33333333%;\n}\n.app-container .app-sm .app-col-sm-pull-9,\n.app-container .app-md .app-col-sm-pull-9,\n.app-container .app-lg .app-col-sm-pull-9 {\n  right: 75%;\n}\n.app-container .app-sm .app-col-sm-pull-8,\n.app-container .app-md .app-col-sm-pull-8,\n.app-container .app-lg .app-col-sm-pull-8 {\n  right: 66.66666667%;\n}\n.app-container .app-sm .app-col-sm-pull-7,\n.app-container .app-md .app-col-sm-pull-7,\n.app-container .app-lg .app-col-sm-pull-7 {\n  right: 58.33333333%;\n}\n.app-container .app-sm .app-col-sm-pull-6,\n.app-container .app-md .app-col-sm-pull-6,\n.app-container .app-lg .app-col-sm-pull-6 {\n  right: 50%;\n}\n.app-container .app-sm .app-col-sm-pull-5,\n.app-container .app-md .app-col-sm-pull-5,\n.app-container .app-lg .app-col-sm-pull-5 {\n  right: 41.66666667%;\n}\n.app-container .app-sm .app-col-sm-pull-4,\n.app-container .app-md .app-col-sm-pull-4,\n.app-container .app-lg .app-col-sm-pull-4 {\n  right: 33.33333333%;\n}\n.app-container .app-sm .app-col-sm-pull-3,\n.app-container .app-md .app-col-sm-pull-3,\n.app-container .app-lg .app-col-sm-pull-3 {\n  right: 25%;\n}\n.app-container .app-sm .app-col-sm-pull-2,\n.app-container .app-md .app-col-sm-pull-2,\n.app-container .app-lg .app-col-sm-pull-2 {\n  right: 16.66666667%;\n}\n.app-container .app-sm .app-col-sm-pull-1,\n.app-container .app-md .app-col-sm-pull-1,\n.app-container .app-lg .app-col-sm-pull-1 {\n  right: 8.33333333%;\n}\n.app-container .app-sm .app-col-sm-pull-0,\n.app-container .app-md .app-col-sm-pull-0,\n.app-container .app-lg .app-col-sm-pull-0 {\n  right: auto;\n}\n.app-container .app-sm .app-col-sm-push-12,\n.app-container .app-md .app-col-sm-push-12,\n.app-container .app-lg .app-col-sm-push-12 {\n  left: 100%;\n}\n.app-container .app-sm .app-col-sm-push-11,\n.app-container .app-md .app-col-sm-push-11,\n.app-container .app-lg .app-col-sm-push-11 {\n  left: 91.66666667%;\n}\n.app-container .app-sm .app-col-sm-push-10,\n.app-container .app-md .app-col-sm-push-10,\n.app-container .app-lg .app-col-sm-push-10 {\n  left: 83.33333333%;\n}\n.app-container .app-sm .app-col-sm-push-9,\n.app-container .app-md .app-col-sm-push-9,\n.app-container .app-lg .app-col-sm-push-9 {\n  left: 75%;\n}\n.app-container .app-sm .app-col-sm-push-8,\n.app-container .app-md .app-col-sm-push-8,\n.app-container .app-lg .app-col-sm-push-8 {\n  left: 66.66666667%;\n}\n.app-container .app-sm .app-col-sm-push-7,\n.app-container .app-md .app-col-sm-push-7,\n.app-container .app-lg .app-col-sm-push-7 {\n  left: 58.33333333%;\n}\n.app-container .app-sm .app-col-sm-push-6,\n.app-container .app-md .app-col-sm-push-6,\n.app-container .app-lg .app-col-sm-push-6 {\n  left: 50%;\n}\n.app-container .app-sm .app-col-sm-push-5,\n.app-container .app-md .app-col-sm-push-5,\n.app-container .app-lg .app-col-sm-push-5 {\n  left: 41.66666667%;\n}\n.app-container .app-sm .app-col-sm-push-4,\n.app-container .app-md .app-col-sm-push-4,\n.app-container .app-lg .app-col-sm-push-4 {\n  left: 33.33333333%;\n}\n.app-container .app-sm .app-col-sm-push-3,\n.app-container .app-md .app-col-sm-push-3,\n.app-container .app-lg .app-col-sm-push-3 {\n  left: 25%;\n}\n.app-container .app-sm .app-col-sm-push-2,\n.app-container .app-md .app-col-sm-push-2,\n.app-container .app-lg .app-col-sm-push-2 {\n  left: 16.66666667%;\n}\n.app-container .app-sm .app-col-sm-push-1,\n.app-container .app-md .app-col-sm-push-1,\n.app-container .app-lg .app-col-sm-push-1 {\n  left: 8.33333333%;\n}\n.app-container .app-sm .app-col-sm-push-0,\n.app-container .app-md .app-col-sm-push-0,\n.app-container .app-lg .app-col-sm-push-0 {\n  left: auto;\n}\n.app-container .app-sm .app-col-sm-offset-12,\n.app-container .app-md .app-col-sm-offset-12,\n.app-container .app-lg .app-col-sm-offset-12 {\n  margin-left: 100%;\n}\n.app-container .app-sm .app-col-sm-offset-11,\n.app-container .app-md .app-col-sm-offset-11,\n.app-container .app-lg .app-col-sm-offset-11 {\n  margin-left: 91.66666667%;\n}\n.app-container .app-sm .app-col-sm-offset-10,\n.app-container .app-md .app-col-sm-offset-10,\n.app-container .app-lg .app-col-sm-offset-10 {\n  margin-left: 83.33333333%;\n}\n.app-container .app-sm .app-col-sm-offset-9,\n.app-container .app-md .app-col-sm-offset-9,\n.app-container .app-lg .app-col-sm-offset-9 {\n  margin-left: 75%;\n}\n.app-container .app-sm .app-col-sm-offset-8,\n.app-container .app-md .app-col-sm-offset-8,\n.app-container .app-lg .app-col-sm-offset-8 {\n  margin-left: 66.66666667%;\n}\n.app-container .app-sm .app-col-sm-offset-7,\n.app-container .app-md .app-col-sm-offset-7,\n.app-container .app-lg .app-col-sm-offset-7 {\n  margin-left: 58.33333333%;\n}\n.app-container .app-sm .app-col-sm-offset-6,\n.app-container .app-md .app-col-sm-offset-6,\n.app-container .app-lg .app-col-sm-offset-6 {\n  margin-left: 50%;\n}\n.app-container .app-sm .app-col-sm-offset-5,\n.app-container .app-md .app-col-sm-offset-5,\n.app-container .app-lg .app-col-sm-offset-5 {\n  margin-left: 41.66666667%;\n}\n.app-container .app-sm .app-col-sm-offset-4,\n.app-container .app-md .app-col-sm-offset-4,\n.app-container .app-lg .app-col-sm-offset-4 {\n  margin-left: 33.33333333%;\n}\n.app-container .app-sm .app-col-sm-offset-3,\n.app-container .app-md .app-col-sm-offset-3,\n.app-container .app-lg .app-col-sm-offset-3 {\n  margin-left: 25%;\n}\n.app-container .app-sm .app-col-sm-offset-2,\n.app-container .app-md .app-col-sm-offset-2,\n.app-container .app-lg .app-col-sm-offset-2 {\n  margin-left: 16.66666667%;\n}\n.app-container .app-sm .app-col-sm-offset-1,\n.app-container .app-md .app-col-sm-offset-1,\n.app-container .app-lg .app-col-sm-offset-1 {\n  margin-left: 8.33333333%;\n}\n.app-container .app-sm .app-col-sm-offset-0,\n.app-container .app-md .app-col-sm-offset-0,\n.app-container .app-lg .app-col-sm-offset-0 {\n  margin-left: 0;\n}\n.app-container .app-sm .app-hidden-sm,\n.app-container .app-md .app-hidden-sm,\n.app-container .app-lg .app-hidden-sm {\n  display: none !important;\n}\n.app-container .app-sm .app-hidden-xs,\n.app-container .app-md .app-hidden-xs,\n.app-container .app-lg .app-hidden-xs {\n  display: inherit !important;\n}\n.app-container .app-md .app-col-md-1,\n.app-container .app-lg .app-col-md-1,\n.app-container .app-md .app-col-md-2,\n.app-container .app-lg .app-col-md-2,\n.app-container .app-md .app-col-md-3,\n.app-container .app-lg .app-col-md-3,\n.app-container .app-md .app-col-md-4,\n.app-container .app-lg .app-col-md-4,\n.app-container .app-md .app-col-md-5,\n.app-container .app-lg .app-col-md-5,\n.app-container .app-md .app-col-md-6,\n.app-container .app-lg .app-col-md-6,\n.app-container .app-md .app-col-md-7,\n.app-container .app-lg .app-col-md-7,\n.app-container .app-md .app-col-md-8,\n.app-container .app-lg .app-col-md-8,\n.app-container .app-md .app-col-md-9,\n.app-container .app-lg .app-col-md-9,\n.app-container .app-md .app-col-md-10,\n.app-container .app-lg .app-col-md-10,\n.app-container .app-md .app-col-md-11,\n.app-container .app-lg .app-col-md-11,\n.app-container .app-md .app-col-md-12,\n.app-container .app-lg .app-col-md-12 {\n  float: left;\n}\n.app-container .app-md .app-col-md-12,\n.app-container .app-lg .app-col-md-12 {\n  width: 100%;\n}\n.app-container .app-md .app-col-md-11,\n.app-container .app-lg .app-col-md-11 {\n  width: 91.66666667%;\n}\n.app-container .app-md .app-col-md-10,\n.app-container .app-lg .app-col-md-10 {\n  width: 83.33333333%;\n}\n.app-container .app-md .app-col-md-9,\n.app-container .app-lg .app-col-md-9 {\n  width: 75%;\n}\n.app-container .app-md .app-col-md-8,\n.app-container .app-lg .app-col-md-8 {\n  width: 66.66666667%;\n}\n.app-container .app-md .app-col-md-7,\n.app-container .app-lg .app-col-md-7 {\n  width: 58.33333333%;\n}\n.app-container .app-md .app-col-md-6,\n.app-container .app-lg .app-col-md-6 {\n  width: 50%;\n}\n.app-container .app-md .app-col-md-5,\n.app-container .app-lg .app-col-md-5 {\n  width: 41.66666667%;\n}\n.app-container .app-md .app-col-md-4,\n.app-container .app-lg .app-col-md-4 {\n  width: 33.33333333%;\n}\n.app-container .app-md .app-col-md-3,\n.app-container .app-lg .app-col-md-3 {\n  width: 25%;\n}\n.app-container .app-md .app-col-md-2,\n.app-container .app-lg .app-col-md-2 {\n  width: 16.66666667%;\n}\n.app-container .app-md .app-col-md-1,\n.app-container .app-lg .app-col-md-1 {\n  width: 8.33333333%;\n}\n.app-container .app-md .app-col-md-pull-12,\n.app-container .app-lg .app-col-md-pull-12 {\n  right: 100%;\n}\n.app-container .app-md .app-col-md-pull-11,\n.app-container .app-lg .app-col-md-pull-11 {\n  right: 91.66666667%;\n}\n.app-container .app-md .app-col-md-pull-10,\n.app-container .app-lg .app-col-md-pull-10 {\n  right: 83.33333333%;\n}\n.app-container .app-md .app-col-md-pull-9,\n.app-container .app-lg .app-col-md-pull-9 {\n  right: 75%;\n}\n.app-container .app-md .app-col-md-pull-8,\n.app-container .app-lg .app-col-md-pull-8 {\n  right: 66.66666667%;\n}\n.app-container .app-md .app-col-md-pull-7,\n.app-container .app-lg .app-col-md-pull-7 {\n  right: 58.33333333%;\n}\n.app-container .app-md .app-col-md-pull-6,\n.app-container .app-lg .app-col-md-pull-6 {\n  right: 50%;\n}\n.app-container .app-md .app-col-md-pull-5,\n.app-container .app-lg .app-col-md-pull-5 {\n  right: 41.66666667%;\n}\n.app-container .app-md .app-col-md-pull-4,\n.app-container .app-lg .app-col-md-pull-4 {\n  right: 33.33333333%;\n}\n.app-container .app-md .app-col-md-pull-3,\n.app-container .app-lg .app-col-md-pull-3 {\n  right: 25%;\n}\n.app-container .app-md .app-col-md-pull-2,\n.app-container .app-lg .app-col-md-pull-2 {\n  right: 16.66666667%;\n}\n.app-container .app-md .app-col-md-pull-1,\n.app-container .app-lg .app-col-md-pull-1 {\n  right: 8.33333333%;\n}\n.app-container .app-md .app-col-md-pull-0,\n.app-container .app-lg .app-col-md-pull-0 {\n  right: auto;\n}\n.app-container .app-md .app-col-md-push-12,\n.app-container .app-lg .app-col-md-push-12 {\n  left: 100%;\n}\n.app-container .app-md .app-col-md-push-11,\n.app-container .app-lg .app-col-md-push-11 {\n  left: 91.66666667%;\n}\n.app-container .app-md .app-col-md-push-10,\n.app-container .app-lg .app-col-md-push-10 {\n  left: 83.33333333%;\n}\n.app-container .app-md .app-col-md-push-9,\n.app-container .app-lg .app-col-md-push-9 {\n  left: 75%;\n}\n.app-container .app-md .app-col-md-push-8,\n.app-container .app-lg .app-col-md-push-8 {\n  left: 66.66666667%;\n}\n.app-container .app-md .app-col-md-push-7,\n.app-container .app-lg .app-col-md-push-7 {\n  left: 58.33333333%;\n}\n.app-container .app-md .app-col-md-push-6,\n.app-container .app-lg .app-col-md-push-6 {\n  left: 50%;\n}\n.app-container .app-md .app-col-md-push-5,\n.app-container .app-lg .app-col-md-push-5 {\n  left: 41.66666667%;\n}\n.app-container .app-md .app-col-md-push-4,\n.app-container .app-lg .app-col-md-push-4 {\n  left: 33.33333333%;\n}\n.app-container .app-md .app-col-md-push-3,\n.app-container .app-lg .app-col-md-push-3 {\n  left: 25%;\n}\n.app-container .app-md .app-col-md-push-2,\n.app-container .app-lg .app-col-md-push-2 {\n  left: 16.66666667%;\n}\n.app-container .app-md .app-col-md-push-1,\n.app-container .app-lg .app-col-md-push-1 {\n  left: 8.33333333%;\n}\n.app-container .app-md .app-col-md-push-0,\n.app-container .app-lg .app-col-md-push-0 {\n  left: auto;\n}\n.app-container .app-md .app-col-md-offset-12,\n.app-container .app-lg .app-col-md-offset-12 {\n  margin-left: 100%;\n}\n.app-container .app-md .app-col-md-offset-11,\n.app-container .app-lg .app-col-md-offset-11 {\n  margin-left: 91.66666667%;\n}\n.app-container .app-md .app-col-md-offset-10,\n.app-container .app-lg .app-col-md-offset-10 {\n  margin-left: 83.33333333%;\n}\n.app-container .app-md .app-col-md-offset-9,\n.app-container .app-lg .app-col-md-offset-9 {\n  margin-left: 75%;\n}\n.app-container .app-md .app-col-md-offset-8,\n.app-container .app-lg .app-col-md-offset-8 {\n  margin-left: 66.66666667%;\n}\n.app-container .app-md .app-col-md-offset-7,\n.app-container .app-lg .app-col-md-offset-7 {\n  margin-left: 58.33333333%;\n}\n.app-container .app-md .app-col-md-offset-6,\n.app-container .app-lg .app-col-md-offset-6 {\n  margin-left: 50%;\n}\n.app-container .app-md .app-col-md-offset-5,\n.app-container .app-lg .app-col-md-offset-5 {\n  margin-left: 41.66666667%;\n}\n.app-container .app-md .app-col-md-offset-4,\n.app-container .app-lg .app-col-md-offset-4 {\n  margin-left: 33.33333333%;\n}\n.app-container .app-md .app-col-md-offset-3,\n.app-container .app-lg .app-col-md-offset-3 {\n  margin-left: 25%;\n}\n.app-container .app-md .app-col-md-offset-2,\n.app-container .app-lg .app-col-md-offset-2 {\n  margin-left: 16.66666667%;\n}\n.app-container .app-md .app-col-md-offset-1,\n.app-container .app-lg .app-col-md-offset-1 {\n  margin-left: 8.33333333%;\n}\n.app-container .app-md .app-col-md-offset-0,\n.app-container .app-lg .app-col-md-offset-0 {\n  margin-left: 0;\n}\n.app-container .app-md .app-hidden-md,\n.app-container .app-lg .app-hidden-md {\n  display: none !important;\n}\n.app-container .app-md .app-hidden-xs,\n.app-container .app-lg .app-hidden-xs {\n  display: inherit !important;\n}\n.app-container .app-lg .app-col-lg-1,\n.app-container .app-lg .app-col-lg-2,\n.app-container .app-lg .app-col-lg-3,\n.app-container .app-lg .app-col-lg-4,\n.app-container .app-lg .app-col-lg-5,\n.app-container .app-lg .app-col-lg-6,\n.app-container .app-lg .app-col-lg-7,\n.app-container .app-lg .app-col-lg-8,\n.app-container .app-lg .app-col-lg-9,\n.app-container .app-lg .app-col-lg-10,\n.app-container .app-lg .app-col-lg-11,\n.app-container .app-lg .app-col-lg-12 {\n  float: left;\n}\n.app-container .app-lg .app-col-lg-12 {\n  width: 100%;\n}\n.app-container .app-lg .app-col-lg-11 {\n  width: 91.66666667%;\n}\n.app-container .app-lg .app-col-lg-10 {\n  width: 83.33333333%;\n}\n.app-container .app-lg .app-col-lg-9 {\n  width: 75%;\n}\n.app-container .app-lg .app-col-lg-8 {\n  width: 66.66666667%;\n}\n.app-container .app-lg .app-col-lg-7 {\n  width: 58.33333333%;\n}\n.app-container .app-lg .app-col-lg-6 {\n  width: 50%;\n}\n.app-container .app-lg .app-col-lg-5 {\n  width: 41.66666667%;\n}\n.app-container .app-lg .app-col-lg-4 {\n  width: 33.33333333%;\n}\n.app-container .app-lg .app-col-lg-3 {\n  width: 25%;\n}\n.app-container .app-lg .app-col-lg-2 {\n  width: 16.66666667%;\n}\n.app-container .app-lg .app-col-lg-1 {\n  width: 8.33333333%;\n}\n.app-container .app-lg .app-col-lg-pull-12 {\n  right: 100%;\n}\n.app-container .app-lg .app-col-lg-pull-11 {\n  right: 91.66666667%;\n}\n.app-container .app-lg .app-col-lg-pull-10 {\n  right: 83.33333333%;\n}\n.app-container .app-lg .app-col-lg-pull-9 {\n  right: 75%;\n}\n.app-container .app-lg .app-col-lg-pull-8 {\n  right: 66.66666667%;\n}\n.app-container .app-lg .app-col-lg-pull-7 {\n  right: 58.33333333%;\n}\n.app-container .app-lg .app-col-lg-pull-6 {\n  right: 50%;\n}\n.app-container .app-lg .app-col-lg-pull-5 {\n  right: 41.66666667%;\n}\n.app-container .app-lg .app-col-lg-pull-4 {\n  right: 33.33333333%;\n}\n.app-container .app-lg .app-col-lg-pull-3 {\n  right: 25%;\n}\n.app-container .app-lg .app-col-lg-pull-2 {\n  right: 16.66666667%;\n}\n.app-container .app-lg .app-col-lg-pull-1 {\n  right: 8.33333333%;\n}\n.app-container .app-lg .app-col-lg-pull-0 {\n  right: auto;\n}\n.app-container .app-lg .app-col-lg-push-12 {\n  left: 100%;\n}\n.app-container .app-lg .app-col-lg-push-11 {\n  left: 91.66666667%;\n}\n.app-container .app-lg .app-col-lg-push-10 {\n  left: 83.33333333%;\n}\n.app-container .app-lg .app-col-lg-push-9 {\n  left: 75%;\n}\n.app-container .app-lg .app-col-lg-push-8 {\n  left: 66.66666667%;\n}\n.app-container .app-lg .app-col-lg-push-7 {\n  left: 58.33333333%;\n}\n.app-container .app-lg .app-col-lg-push-6 {\n  left: 50%;\n}\n.app-container .app-lg .app-col-lg-push-5 {\n  left: 41.66666667%;\n}\n.app-container .app-lg .app-col-lg-push-4 {\n  left: 33.33333333%;\n}\n.app-container .app-lg .app-col-lg-push-3 {\n  left: 25%;\n}\n.app-container .app-lg .app-col-lg-push-2 {\n  left: 16.66666667%;\n}\n.app-container .app-lg .app-col-lg-push-1 {\n  left: 8.33333333%;\n}\n.app-container .app-lg .app-col-lg-push-0 {\n  left: auto;\n}\n.app-container .app-lg .app-col-lg-offset-12 {\n  margin-left: 100%;\n}\n.app-container .app-lg .app-col-lg-offset-11 {\n  margin-left: 91.66666667%;\n}\n.app-container .app-lg .app-col-lg-offset-10 {\n  margin-left: 83.33333333%;\n}\n.app-container .app-lg .app-col-lg-offset-9 {\n  margin-left: 75%;\n}\n.app-container .app-lg .app-col-lg-offset-8 {\n  margin-left: 66.66666667%;\n}\n.app-container .app-lg .app-col-lg-offset-7 {\n  margin-left: 58.33333333%;\n}\n.app-container .app-lg .app-col-lg-offset-6 {\n  margin-left: 50%;\n}\n.app-container .app-lg .app-col-lg-offset-5 {\n  margin-left: 41.66666667%;\n}\n.app-container .app-lg .app-col-lg-offset-4 {\n  margin-left: 33.33333333%;\n}\n.app-container .app-lg .app-col-lg-offset-3 {\n  margin-left: 25%;\n}\n.app-container .app-lg .app-col-lg-offset-2 {\n  margin-left: 16.66666667%;\n}\n.app-container .app-lg .app-col-lg-offset-1 {\n  margin-left: 8.33333333%;\n}\n.app-container .app-lg .app-col-lg-offset-0 {\n  margin-left: 0;\n}\n.app-container .app-lg .app-hidden-lg {\n  display: none !important;\n}\n.app-container .app-lg .app-hidden-xs {\n  display: inherit !important;\n}\n.app-container:before,\n.app-container:after,\n.app-container .app-row:before,\n.app-container .app-row:after {\n  display: table;\n  content: \" \";\n}\n.app-container:after,\n.app-container .app-row:after {\n  clear: both;\n}\n.app-container,\n.app-container * {\n  box-sizing: border-box;\n}\n.app-container:before,\n.app-container:after,\n.app-container *:before,\n.app-container *:after {\n  box-sizing: border-box;\n}\n", ""]);

	// exports


/***/ },
/* 14 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ])
});
;