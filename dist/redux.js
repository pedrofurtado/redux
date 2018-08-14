(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["redux"] = factory();
	else
		root["redux"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var isPlainObject = function isPlainObject(obj) {
	  if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object' || obj === null) {
	    return false;
	  }
	
	  var proto = obj;
	
	  while (Object.getPrototypeOf(proto) !== null) {
	    proto = Object.getPrototypeOf(proto);
	  }
	
	  return Object.getPrototypeOf(obj) === proto;
	};
	
	var combineReducers = function combineReducers(reducers) {
	  if (!isPlainObject(reducers)) {
	    throw 'The reducers must be placed in a plain object.';
	  }
	
	  for (var key in reducers) {
	    var reducer = reducers[key];
	
	    if (typeof reducer !== 'function') {
	      throw 'Reducers must be a function.';
	    }
	  }
	
	  return reducers;
	};
	
	var createStore = function createStore(reducers) {
	  var state = {};
	  var initialAction = 'REDUX_INITIAL_ACTION';
	  var subscribers = [];
	  var combinedReducers = combineReducers(reducers);
	
	  var generateNextStateFromReducers = function generateNextStateFromReducers(action) {
	    var nextState = {};
	
	    for (var key in combinedReducers) {
	      var reducer = combinedReducers[key];
	      nextState[key] = reducer(state[key], action);
	    }
	
	    state = nextState;
	  };
	
	  var notifyAllSubscribers = function notifyAllSubscribers() {
	    subscribers.forEach(function (subscriber) {
	      return subscriber();
	    });
	  };
	
	  var dispatch = function dispatch(action) {
	    generateNextStateFromReducers(action);
	    notifyAllSubscribers();
	  };
	
	  var subscribe = function subscribe(subscriber) {
	    subscribers.push(subscriber);
	  };
	
	  dispatch({ type: initialAction });
	
	  return {
	    getState: function getState() {
	      return state;
	    },
	    dispatch: dispatch,
	    subscribe: subscribe
	  };
	};
	
	exports.createStore = createStore;
	exports.combineReducers = combineReducers;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=redux.js.map