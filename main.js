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
/******/ 	return __webpack_require__(__webpack_require__.s = 221);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __extends; });
/* unused harmony export __assign */
/* unused harmony export __rest */
/* unused harmony export __decorate */
/* unused harmony export __param */
/* unused harmony export __metadata */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __generator; });
/* unused harmony export __createBinding */
/* unused harmony export __exportStar */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __read; });
/* unused harmony export __spread */
/* unused harmony export __spreadArrays */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __spreadArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __asyncGenerator; });
/* unused harmony export __asyncDelegator */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __asyncValues; });
/* unused harmony export __makeTemplateObject */
/* unused harmony export __importStar */
/* unused harmony export __importDefault */
/* unused harmony export __classPrivateFieldGet */
/* unused harmony export __classPrivateFieldSet */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hasLift; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return operate; });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);

function hasLift(source) {
    return Object(_isFunction__WEBPACK_IMPORTED_MODULE_0__[/* isFunction */ "a"])(source === null || source === void 0 ? void 0 : source.lift);
}
function operate(init) {
    return function (source) {
        if (hasLift(source)) {
            return source.lift(function (liftedSource) {
                try {
                    return init(liftedSource, this);
                }
                catch (err) {
                    this.error(err);
                }
            });
        }
        throw new TypeError('Unable to lift unknown Observable type');
    };
}
//# sourceMappingURL=lift.js.map

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OperatorSubscriber; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);


var OperatorSubscriber = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "e"])(OperatorSubscriber, _super);
    function OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize) {
        var _this = _super.call(this, destination) || this;
        _this.onFinalize = onFinalize;
        _this._next = onNext
            ? function (value) {
                try {
                    onNext(value);
                }
                catch (err) {
                    destination.error(err);
                }
            }
            : _super.prototype._next;
        _this._error = onError
            ? function (err) {
                try {
                    onError(err);
                }
                catch (err) {
                    destination.error(err);
                }
                finally {
                    this.unsubscribe();
                }
            }
            : _super.prototype._error;
        _this._complete = onComplete
            ? function () {
                try {
                    onComplete();
                }
                catch (err) {
                    destination.error(err);
                }
                finally {
                    this.unsubscribe();
                }
            }
            : _super.prototype._complete;
        return _this;
    }
    OperatorSubscriber.prototype.unsubscribe = function () {
        var _a;
        var closed = this.closed;
        _super.prototype.unsubscribe.call(this);
        !closed && ((_a = this.onFinalize) === null || _a === void 0 ? void 0 : _a.call(this));
    };
    return OperatorSubscriber;
}(_Subscriber__WEBPACK_IMPORTED_MODULE_1__[/* Subscriber */ "b"]));

//# sourceMappingURL=OperatorSubscriber.js.map

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return from; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return innerFrom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return fromArrayLike; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _util_isArrayLike__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86);
/* harmony import */ var _util_isPromise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(187);
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39);
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var _scheduled_scheduled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(183);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4);
/* harmony import */ var _util_reportUnhandledError__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(184);
/* harmony import */ var _util_isInteropObservable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(186);
/* harmony import */ var _util_isAsyncIterable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(188);
/* harmony import */ var _util_throwUnobservableError__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(193);
/* harmony import */ var _util_isIterable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(189);
/* harmony import */ var _util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(59);













function from(input, scheduler) {
    return scheduler ? Object(_scheduled_scheduled__WEBPACK_IMPORTED_MODULE_5__[/* scheduled */ "a"])(input, scheduler) : innerFrom(input);
}
function innerFrom(input) {
    if (input instanceof _Observable__WEBPACK_IMPORTED_MODULE_4__[/* Observable */ "a"]) {
        return input;
    }
    if (input != null) {
        if (Object(_util_isInteropObservable__WEBPACK_IMPORTED_MODULE_8__[/* isInteropObservable */ "a"])(input)) {
            return fromInteropObservable(input);
        }
        if (Object(_util_isArrayLike__WEBPACK_IMPORTED_MODULE_1__[/* isArrayLike */ "a"])(input)) {
            return fromArrayLike(input);
        }
        if (Object(_util_isPromise__WEBPACK_IMPORTED_MODULE_2__[/* isPromise */ "a"])(input)) {
            return fromPromise(input);
        }
        if (Object(_util_isAsyncIterable__WEBPACK_IMPORTED_MODULE_9__[/* isAsyncIterable */ "a"])(input)) {
            return fromAsyncIterable(input);
        }
        if (Object(_util_isIterable__WEBPACK_IMPORTED_MODULE_11__[/* isIterable */ "a"])(input)) {
            return fromIterable(input);
        }
        if (Object(_util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_12__[/* isReadableStreamLike */ "a"])(input)) {
            return fromReadableStreamLike(input);
        }
    }
    throw Object(_util_throwUnobservableError__WEBPACK_IMPORTED_MODULE_10__[/* createInvalidObservableTypeError */ "a"])(input);
}
function fromInteropObservable(obj) {
    return new _Observable__WEBPACK_IMPORTED_MODULE_4__[/* Observable */ "a"](function (subscriber) {
        var obs = obj[_symbol_observable__WEBPACK_IMPORTED_MODULE_3__[/* observable */ "a"]]();
        if (Object(_util_isFunction__WEBPACK_IMPORTED_MODULE_6__[/* isFunction */ "a"])(obs.subscribe)) {
            return obs.subscribe(subscriber);
        }
        throw new TypeError('Provided object does not correctly implement Symbol.observable');
    });
}
function fromArrayLike(array) {
    return new _Observable__WEBPACK_IMPORTED_MODULE_4__[/* Observable */ "a"](function (subscriber) {
        for (var i = 0; i < array.length && !subscriber.closed; i++) {
            subscriber.next(array[i]);
        }
        subscriber.complete();
    });
}
function fromPromise(promise) {
    return new _Observable__WEBPACK_IMPORTED_MODULE_4__[/* Observable */ "a"](function (subscriber) {
        promise
            .then(function (value) {
            if (!subscriber.closed) {
                subscriber.next(value);
                subscriber.complete();
            }
        }, function (err) { return subscriber.error(err); })
            .then(null, _util_reportUnhandledError__WEBPACK_IMPORTED_MODULE_7__[/* reportUnhandledError */ "a"]);
    });
}
function fromIterable(iterable) {
    return new _Observable__WEBPACK_IMPORTED_MODULE_4__[/* Observable */ "a"](function (subscriber) {
        var e_1, _a;
        try {
            for (var iterable_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __values */ "i"])(iterable), iterable_1_1 = iterable_1.next(); !iterable_1_1.done; iterable_1_1 = iterable_1.next()) {
                var value = iterable_1_1.value;
                subscriber.next(value);
                if (subscriber.closed) {
                    return;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (iterable_1_1 && !iterable_1_1.done && (_a = iterable_1.return)) _a.call(iterable_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        subscriber.complete();
    });
}
function fromAsyncIterable(asyncIterable) {
    return new _Observable__WEBPACK_IMPORTED_MODULE_4__[/* Observable */ "a"](function (subscriber) {
        process(asyncIterable, subscriber).catch(function (err) { return subscriber.error(err); });
    });
}
function fromReadableStreamLike(readableStream) {
    return fromAsyncIterable(Object(_util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_12__[/* readableStreamLikeToAsyncGenerator */ "b"])(readableStream));
}
function process(asyncIterable, subscriber) {
    var asyncIterable_1, asyncIterable_1_1;
    var e_2, _a;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __awaiter */ "d"])(this, void 0, void 0, function () {
        var value, e_2_1;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __generator */ "f"])(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 5, 6, 11]);
                    asyncIterable_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __asyncValues */ "b"])(asyncIterable);
                    _b.label = 1;
                case 1: return [4, asyncIterable_1.next()];
                case 2:
                    if (!(asyncIterable_1_1 = _b.sent(), !asyncIterable_1_1.done)) return [3, 4];
                    value = asyncIterable_1_1.value;
                    subscriber.next(value);
                    if (subscriber.closed) {
                        return [2];
                    }
                    _b.label = 3;
                case 3: return [3, 1];
                case 4: return [3, 11];
                case 5:
                    e_2_1 = _b.sent();
                    e_2 = { error: e_2_1 };
                    return [3, 11];
                case 6:
                    _b.trys.push([6, , 9, 10]);
                    if (!(asyncIterable_1_1 && !asyncIterable_1_1.done && (_a = asyncIterable_1.return))) return [3, 8];
                    return [4, _a.call(asyncIterable_1)];
                case 7:
                    _b.sent();
                    _b.label = 8;
                case 8: return [3, 10];
                case 9:
                    if (e_2) throw e_2.error;
                    return [7];
                case 10: return [7];
                case 11:
                    subscriber.complete();
                    return [2];
            }
        });
    });
}
//# sourceMappingURL=from.js.map

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isFunction; });
function isFunction(value) {
    return typeof value === 'function';
}
//# sourceMappingURL=isFunction.js.map

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Observable; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39);
/* harmony import */ var _util_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4);
/* harmony import */ var _util_errorContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(56);







var Observable = (function () {
    function Observable(subscribe) {
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var _this = this;
        var subscriber = isSubscriber(observerOrNext) ? observerOrNext : new _Subscriber__WEBPACK_IMPORTED_MODULE_0__[/* SafeSubscriber */ "a"](observerOrNext, error, complete);
        Object(_util_errorContext__WEBPACK_IMPORTED_MODULE_6__[/* errorContext */ "b"])(function () {
            var _a = _this, operator = _a.operator, source = _a.source;
            subscriber.add(operator
                ?
                    operator.call(subscriber, source)
                : source
                    ?
                        _this._subscribe(subscriber)
                    :
                        _this._trySubscribe(subscriber));
        });
        return subscriber;
    };
    Observable.prototype._trySubscribe = function (sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            sink.error(err);
        }
    };
    Observable.prototype.forEach = function (next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var subscription;
            subscription = _this.subscribe(function (value) {
                try {
                    next(value);
                }
                catch (err) {
                    reject(err);
                    subscription === null || subscription === void 0 ? void 0 : subscription.unsubscribe();
                }
            }, reject, resolve);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        var _a;
        return (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber);
    };
    Observable.prototype[_symbol_observable__WEBPACK_IMPORTED_MODULE_2__[/* observable */ "a"]] = function () {
        return this;
    };
    Observable.prototype.pipe = function () {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            operations[_i] = arguments[_i];
        }
        return Object(_util_pipe__WEBPACK_IMPORTED_MODULE_3__[/* pipeFromArray */ "b"])(operations)(this);
    };
    Observable.prototype.toPromise = function (promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var value;
            _this.subscribe(function (x) { return (value = x); }, function (err) { return reject(err); }, function () { return resolve(value); });
        });
    };
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());

function getPromiseCtor(promiseCtor) {
    var _a;
    return (_a = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : _config__WEBPACK_IMPORTED_MODULE_4__[/* config */ "a"].Promise) !== null && _a !== void 0 ? _a : Promise;
}
function isObserver(value) {
    return value && Object(_util_isFunction__WEBPACK_IMPORTED_MODULE_5__[/* isFunction */ "a"])(value.next) && Object(_util_isFunction__WEBPACK_IMPORTED_MODULE_5__[/* isFunction */ "a"])(value.error) && Object(_util_isFunction__WEBPACK_IMPORTED_MODULE_5__[/* isFunction */ "a"])(value.complete);
}
function isSubscriber(value) {
    return (value && value instanceof _Subscriber__WEBPACK_IMPORTED_MODULE_0__[/* Subscriber */ "b"]) || (isObserver(value) && Object(_Subscription__WEBPACK_IMPORTED_MODULE_1__[/* isSubscription */ "c"])(value));
}
//# sourceMappingURL=Observable.js.map

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return noop; });
function noop() { }
//# sourceMappingURL=noop.js.map

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Subject; });
/* unused harmony export AnonymousSubject */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(170);
/* harmony import */ var _util_arrRemove__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18);
/* harmony import */ var _util_errorContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56);






var Subject = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "e"])(Subject, _super);
    function Subject() {
        var _this = _super.call(this) || this;
        _this.closed = false;
        _this.observers = [];
        _this.isStopped = false;
        _this.hasError = false;
        _this.thrownError = null;
        return _this;
    }
    Subject.prototype.lift = function (operator) {
        var subject = new AnonymousSubject(this, this);
        subject.operator = operator;
        return subject;
    };
    Subject.prototype._throwIfClosed = function () {
        if (this.closed) {
            throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_3__[/* ObjectUnsubscribedError */ "a"]();
        }
    };
    Subject.prototype.next = function (value) {
        var _this = this;
        Object(_util_errorContext__WEBPACK_IMPORTED_MODULE_5__[/* errorContext */ "b"])(function () {
            var e_1, _a;
            _this._throwIfClosed();
            if (!_this.isStopped) {
                var copy = _this.observers.slice();
                try {
                    for (var copy_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __values */ "i"])(copy), copy_1_1 = copy_1.next(); !copy_1_1.done; copy_1_1 = copy_1.next()) {
                        var observer = copy_1_1.value;
                        observer.next(value);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (copy_1_1 && !copy_1_1.done && (_a = copy_1.return)) _a.call(copy_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
        });
    };
    Subject.prototype.error = function (err) {
        var _this = this;
        Object(_util_errorContext__WEBPACK_IMPORTED_MODULE_5__[/* errorContext */ "b"])(function () {
            _this._throwIfClosed();
            if (!_this.isStopped) {
                _this.hasError = _this.isStopped = true;
                _this.thrownError = err;
                var observers = _this.observers;
                while (observers.length) {
                    observers.shift().error(err);
                }
            }
        });
    };
    Subject.prototype.complete = function () {
        var _this = this;
        Object(_util_errorContext__WEBPACK_IMPORTED_MODULE_5__[/* errorContext */ "b"])(function () {
            _this._throwIfClosed();
            if (!_this.isStopped) {
                _this.isStopped = true;
                var observers = _this.observers;
                while (observers.length) {
                    observers.shift().complete();
                }
            }
        });
    };
    Subject.prototype.unsubscribe = function () {
        this.isStopped = this.closed = true;
        this.observers = null;
    };
    Object.defineProperty(Subject.prototype, "observed", {
        get: function () {
            var _a;
            return ((_a = this.observers) === null || _a === void 0 ? void 0 : _a.length) > 0;
        },
        enumerable: false,
        configurable: true
    });
    Subject.prototype._trySubscribe = function (subscriber) {
        this._throwIfClosed();
        return _super.prototype._trySubscribe.call(this, subscriber);
    };
    Subject.prototype._subscribe = function (subscriber) {
        this._throwIfClosed();
        this._checkFinalizedStatuses(subscriber);
        return this._innerSubscribe(subscriber);
    };
    Subject.prototype._innerSubscribe = function (subscriber) {
        var _a = this, hasError = _a.hasError, isStopped = _a.isStopped, observers = _a.observers;
        return hasError || isStopped
            ? _Subscription__WEBPACK_IMPORTED_MODULE_2__[/* EMPTY_SUBSCRIPTION */ "a"]
            : (observers.push(subscriber), new _Subscription__WEBPACK_IMPORTED_MODULE_2__[/* Subscription */ "b"](function () { return Object(_util_arrRemove__WEBPACK_IMPORTED_MODULE_4__[/* arrRemove */ "a"])(observers, subscriber); }));
    };
    Subject.prototype._checkFinalizedStatuses = function (subscriber) {
        var _a = this, hasError = _a.hasError, thrownError = _a.thrownError, isStopped = _a.isStopped;
        if (hasError) {
            subscriber.error(thrownError);
        }
        else if (isStopped) {
            subscriber.complete();
        }
    };
    Subject.prototype.asObservable = function () {
        var observable = new _Observable__WEBPACK_IMPORTED_MODULE_1__[/* Observable */ "a"]();
        observable.source = this;
        return observable;
    };
    Subject.create = function (destination, source) {
        return new AnonymousSubject(destination, source);
    };
    return Subject;
}(_Observable__WEBPACK_IMPORTED_MODULE_1__[/* Observable */ "a"]));

var AnonymousSubject = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "e"])(AnonymousSubject, _super);
    function AnonymousSubject(destination, source) {
        var _this = _super.call(this) || this;
        _this.destination = destination;
        _this.source = source;
        return _this;
    }
    AnonymousSubject.prototype.next = function (value) {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.next) === null || _b === void 0 ? void 0 : _b.call(_a, value);
    };
    AnonymousSubject.prototype.error = function (err) {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.call(_a, err);
    };
    AnonymousSubject.prototype.complete = function () {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.complete) === null || _b === void 0 ? void 0 : _b.call(_a);
    };
    AnonymousSubject.prototype._subscribe = function (subscriber) {
        var _a, _b;
        return (_b = (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber)) !== null && _b !== void 0 ? _b : _Subscription__WEBPACK_IMPORTED_MODULE_2__[/* EMPTY_SUBSCRIPTION */ "a"];
    };
    return AnonymousSubject;
}(Subject));

//# sourceMappingURL=Subject.js.map

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Subscription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EMPTY_SUBSCRIPTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isSubscription; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83);
/* harmony import */ var _util_arrRemove__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18);




var Subscription = (function () {
    function Subscription(initialTeardown) {
        this.initialTeardown = initialTeardown;
        this.closed = false;
        this._parentage = null;
        this._teardowns = null;
    }
    Subscription.prototype.unsubscribe = function () {
        var e_1, _a, e_2, _b;
        var errors;
        if (!this.closed) {
            this.closed = true;
            var _parentage = this._parentage;
            if (_parentage) {
                this._parentage = null;
                if (Array.isArray(_parentage)) {
                    try {
                        for (var _parentage_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __values */ "i"])(_parentage), _parentage_1_1 = _parentage_1.next(); !_parentage_1_1.done; _parentage_1_1 = _parentage_1.next()) {
                            var parent_1 = _parentage_1_1.value;
                            parent_1.remove(this);
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_parentage_1_1 && !_parentage_1_1.done && (_a = _parentage_1.return)) _a.call(_parentage_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                }
                else {
                    _parentage.remove(this);
                }
            }
            var initialTeardown = this.initialTeardown;
            if (Object(_util_isFunction__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "a"])(initialTeardown)) {
                try {
                    initialTeardown();
                }
                catch (e) {
                    errors = e instanceof _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_2__[/* UnsubscriptionError */ "a"] ? e.errors : [e];
                }
            }
            var _teardowns = this._teardowns;
            if (_teardowns) {
                this._teardowns = null;
                try {
                    for (var _teardowns_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __values */ "i"])(_teardowns), _teardowns_1_1 = _teardowns_1.next(); !_teardowns_1_1.done; _teardowns_1_1 = _teardowns_1.next()) {
                        var teardown_1 = _teardowns_1_1.value;
                        try {
                            execTeardown(teardown_1);
                        }
                        catch (err) {
                            errors = errors !== null && errors !== void 0 ? errors : [];
                            if (err instanceof _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_2__[/* UnsubscriptionError */ "a"]) {
                                errors = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __spreadArray */ "h"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __spreadArray */ "h"])([], Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __read */ "g"])(errors)), Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __read */ "g"])(err.errors));
                            }
                            else {
                                errors.push(err);
                            }
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_teardowns_1_1 && !_teardowns_1_1.done && (_b = _teardowns_1.return)) _b.call(_teardowns_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
            if (errors) {
                throw new _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_2__[/* UnsubscriptionError */ "a"](errors);
            }
        }
    };
    Subscription.prototype.add = function (teardown) {
        var _a;
        if (teardown && teardown !== this) {
            if (this.closed) {
                execTeardown(teardown);
            }
            else {
                if (teardown instanceof Subscription) {
                    if (teardown.closed || teardown._hasParent(this)) {
                        return;
                    }
                    teardown._addParent(this);
                }
                (this._teardowns = (_a = this._teardowns) !== null && _a !== void 0 ? _a : []).push(teardown);
            }
        }
    };
    Subscription.prototype._hasParent = function (parent) {
        var _parentage = this._parentage;
        return _parentage === parent || (Array.isArray(_parentage) && _parentage.includes(parent));
    };
    Subscription.prototype._addParent = function (parent) {
        var _parentage = this._parentage;
        this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;
    };
    Subscription.prototype._removeParent = function (parent) {
        var _parentage = this._parentage;
        if (_parentage === parent) {
            this._parentage = null;
        }
        else if (Array.isArray(_parentage)) {
            Object(_util_arrRemove__WEBPACK_IMPORTED_MODULE_3__[/* arrRemove */ "a"])(_parentage, parent);
        }
    };
    Subscription.prototype.remove = function (teardown) {
        var _teardowns = this._teardowns;
        _teardowns && Object(_util_arrRemove__WEBPACK_IMPORTED_MODULE_3__[/* arrRemove */ "a"])(_teardowns, teardown);
        if (teardown instanceof Subscription) {
            teardown._removeParent(this);
        }
    };
    Subscription.EMPTY = (function () {
        var empty = new Subscription();
        empty.closed = true;
        return empty;
    })();
    return Subscription;
}());

var EMPTY_SUBSCRIPTION = Subscription.EMPTY;
function isSubscription(value) {
    return (value instanceof Subscription ||
        (value && 'closed' in value && Object(_util_isFunction__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "a"])(value.remove) && Object(_util_isFunction__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "a"])(value.add) && Object(_util_isFunction__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "a"])(value.unsubscribe)));
}
function execTeardown(teardown) {
    if (Object(_util_isFunction__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "a"])(teardown)) {
        teardown();
    }
    else {
        teardown.unsubscribe();
    }
}
//# sourceMappingURL=Subscription.js.map

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return identity; });
function identity(x) {
    return x;
}
//# sourceMappingURL=identity.js.map

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return popResultSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return popScheduler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return popNumber; });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _isScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55);


function last(arr) {
    return arr[arr.length - 1];
}
function popResultSelector(args) {
    return Object(_isFunction__WEBPACK_IMPORTED_MODULE_0__[/* isFunction */ "a"])(last(args)) ? args.pop() : undefined;
}
function popScheduler(args) {
    return Object(_isScheduler__WEBPACK_IMPORTED_MODULE_1__[/* isScheduler */ "a"])(last(args)) ? args.pop() : undefined;
}
function popNumber(args, defaultValue) {
    return typeof last(args) === 'number' ? args.pop() : defaultValue;
}
//# sourceMappingURL=args.js.map

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return asyncScheduler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return async; });
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42);
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41);


var asyncScheduler = new _AsyncScheduler__WEBPACK_IMPORTED_MODULE_1__[/* AsyncScheduler */ "a"](_AsyncAction__WEBPACK_IMPORTED_MODULE_0__[/* AsyncAction */ "a"]);
var async = asyncScheduler;
//# sourceMappingURL=async.js.map

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EMPTY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return empty; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

var EMPTY = new _Observable__WEBPACK_IMPORTED_MODULE_0__[/* Observable */ "a"](function (subscriber) { return subscriber.complete(); });
function empty(scheduler) {
    return scheduler ? emptyScheduled(scheduler) : EMPTY;
}
function emptyScheduled(scheduler) {
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__[/* Observable */ "a"](function (subscriber) { return scheduler.schedule(function () { return subscriber.complete(); }); });
}
//# sourceMappingURL=empty.js.map

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return registerSerializer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return deserialize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return serialize; });
/* harmony import */ var _serializers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92);

let registeredSerializer = _serializers__WEBPACK_IMPORTED_MODULE_0__[/* DefaultSerializer */ "a"];
function registerSerializer(serializer) {
    registeredSerializer = Object(_serializers__WEBPACK_IMPORTED_MODULE_0__[/* extendSerializer */ "b"])(registeredSerializer, serializer);
}
function deserialize(message) {
    return registeredSerializer.deserialize(message);
}
function serialize(input) {
    return registeredSerializer.serialize(input);
}


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mergeMap; });
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var _observable_from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _mergeInternals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);





function mergeMap(project, resultSelector, concurrent) {
    if (concurrent === void 0) { concurrent = Infinity; }
    if (Object(_util_isFunction__WEBPACK_IMPORTED_MODULE_4__[/* isFunction */ "a"])(resultSelector)) {
        return mergeMap(function (a, i) { return Object(_map__WEBPACK_IMPORTED_MODULE_0__[/* map */ "a"])(function (b, ii) { return resultSelector(a, b, i, ii); })(Object(_observable_from__WEBPACK_IMPORTED_MODULE_1__[/* innerFrom */ "c"])(project(a, i))); }, concurrent);
    }
    else if (typeof resultSelector === 'number') {
        concurrent = resultSelector;
    }
    return Object(_util_lift__WEBPACK_IMPORTED_MODULE_2__[/* operate */ "b"])(function (source, subscriber) { return Object(_mergeInternals__WEBPACK_IMPORTED_MODULE_3__[/* mergeInternals */ "a"])(source, subscriber, project, concurrent); });
}
//# sourceMappingURL=mergeMap.js.map

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Subscription */
/* unused harmony export SubscriptionObserver */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Observable; });
/* harmony import */ var _symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);
/**
 * Based on <https://raw.githubusercontent.com/zenparsing/zen-observable/master/src/Observable.js>
 * At commit: f63849a8c60af5d514efc8e9d6138d8273c49ad6
 */
/// <reference path="../types/symbols.d.ts" />

const SymbolIterator = Object(_symbols__WEBPACK_IMPORTED_MODULE_0__[/* getSymbol */ "a"])("iterator");
const SymbolObservable = Object(_symbols__WEBPACK_IMPORTED_MODULE_0__[/* getSymbol */ "a"])("observable");
const SymbolSpecies = Object(_symbols__WEBPACK_IMPORTED_MODULE_0__[/* getSymbol */ "a"])("species");
// === Abstract Operations ===
function getMethod(obj, key) {
    const value = obj[key];
    if (value == null) {
        return undefined;
    }
    if (typeof value !== "function") {
        throw new TypeError(value + " is not a function");
    }
    return value;
}
function getSpecies(obj) {
    let ctor = obj.constructor;
    if (ctor !== undefined) {
        ctor = ctor[SymbolSpecies];
        if (ctor === null) {
            ctor = undefined;
        }
    }
    return ctor !== undefined ? ctor : Observable;
}
function isObservable(x) {
    return x instanceof Observable; // SPEC: Brand check
}
function hostReportError(error) {
    if (hostReportError.log) {
        hostReportError.log(error);
    }
    else {
        setTimeout(() => { throw error; }, 0);
    }
}
function enqueue(fn) {
    Promise.resolve().then(() => {
        try {
            fn();
        }
        catch (e) {
            hostReportError(e);
        }
    });
}
function cleanupSubscription(subscription) {
    const cleanup = subscription._cleanup;
    if (cleanup === undefined) {
        return;
    }
    subscription._cleanup = undefined;
    if (!cleanup) {
        return;
    }
    try {
        if (typeof cleanup === "function") {
            cleanup();
        }
        else {
            const unsubscribe = getMethod(cleanup, "unsubscribe");
            if (unsubscribe) {
                unsubscribe.call(cleanup);
            }
        }
    }
    catch (e) {
        hostReportError(e);
    }
}
function closeSubscription(subscription) {
    subscription._observer = undefined;
    subscription._queue = undefined;
    subscription._state = "closed";
}
function flushSubscription(subscription) {
    const queue = subscription._queue;
    if (!queue) {
        return;
    }
    subscription._queue = undefined;
    subscription._state = "ready";
    for (const item of queue) {
        notifySubscription(subscription, item.type, item.value);
        if (subscription._state === "closed") {
            break;
        }
    }
}
function notifySubscription(subscription, type, value) {
    subscription._state = "running";
    const observer = subscription._observer;
    try {
        const m = observer ? getMethod(observer, type) : undefined;
        switch (type) {
            case "next":
                if (m)
                    m.call(observer, value);
                break;
            case "error":
                closeSubscription(subscription);
                if (m)
                    m.call(observer, value);
                else
                    throw value;
                break;
            case "complete":
                closeSubscription(subscription);
                if (m)
                    m.call(observer);
                break;
        }
    }
    catch (e) {
        hostReportError(e);
    }
    if (subscription._state === "closed") {
        cleanupSubscription(subscription);
    }
    else if (subscription._state === "running") {
        subscription._state = "ready";
    }
}
function onNotify(subscription, type, value) {
    if (subscription._state === "closed") {
        return;
    }
    if (subscription._state === "buffering") {
        subscription._queue = subscription._queue || [];
        subscription._queue.push({ type, value });
        return;
    }
    if (subscription._state !== "ready") {
        subscription._state = "buffering";
        subscription._queue = [{ type, value }];
        enqueue(() => flushSubscription(subscription));
        return;
    }
    notifySubscription(subscription, type, value);
}
class Subscription {
    constructor(observer, subscriber) {
        // ASSERT: observer is an object
        // ASSERT: subscriber is callable
        this._cleanup = undefined;
        this._observer = observer;
        this._queue = undefined;
        this._state = "initializing";
        const subscriptionObserver = new SubscriptionObserver(this);
        try {
            this._cleanup = subscriber.call(undefined, subscriptionObserver);
        }
        catch (e) {
            subscriptionObserver.error(e);
        }
        if (this._state === "initializing") {
            this._state = "ready";
        }
    }
    get closed() {
        return this._state === "closed";
    }
    unsubscribe() {
        if (this._state !== "closed") {
            closeSubscription(this);
            cleanupSubscription(this);
        }
    }
}
class SubscriptionObserver {
    constructor(subscription) { this._subscription = subscription; }
    get closed() { return this._subscription._state === "closed"; }
    next(value) { onNotify(this._subscription, "next", value); }
    error(value) { onNotify(this._subscription, "error", value); }
    complete() { onNotify(this._subscription, "complete"); }
}
/**
 * The basic Observable class. This primitive is used to wrap asynchronous
 * data streams in a common standardized data type that is interoperable
 * between libraries and can be composed to represent more complex processes.
 */
class Observable {
    constructor(subscriber) {
        if (!(this instanceof Observable)) {
            throw new TypeError("Observable cannot be called as a function");
        }
        if (typeof subscriber !== "function") {
            throw new TypeError("Observable initializer must be a function");
        }
        this._subscriber = subscriber;
    }
    subscribe(nextOrObserver, onError, onComplete) {
        if (typeof nextOrObserver !== "object" || nextOrObserver === null) {
            nextOrObserver = {
                next: nextOrObserver,
                error: onError,
                complete: onComplete
            };
        }
        return new Subscription(nextOrObserver, this._subscriber);
    }
    pipe(first, ...mappers) {
        // tslint:disable-next-line no-this-assignment
        let intermediate = this;
        for (const mapper of [first, ...mappers]) {
            intermediate = mapper(intermediate);
        }
        return intermediate;
    }
    tap(nextOrObserver, onError, onComplete) {
        const tapObserver = typeof nextOrObserver !== "object" || nextOrObserver === null
            ? {
                next: nextOrObserver,
                error: onError,
                complete: onComplete
            }
            : nextOrObserver;
        return new Observable(observer => {
            return this.subscribe({
                next(value) {
                    tapObserver.next && tapObserver.next(value);
                    observer.next(value);
                },
                error(error) {
                    tapObserver.error && tapObserver.error(error);
                    observer.error(error);
                },
                complete() {
                    tapObserver.complete && tapObserver.complete();
                    observer.complete();
                },
                start(subscription) {
                    tapObserver.start && tapObserver.start(subscription);
                }
            });
        });
    }
    forEach(fn) {
        return new Promise((resolve, reject) => {
            if (typeof fn !== "function") {
                reject(new TypeError(fn + " is not a function"));
                return;
            }
            function done() {
                subscription.unsubscribe();
                resolve();
            }
            const subscription = this.subscribe({
                next(value) {
                    try {
                        fn(value, done);
                    }
                    catch (e) {
                        reject(e);
                        subscription.unsubscribe();
                    }
                },
                error: reject,
                complete: resolve,
            });
        });
    }
    map(fn) {
        if (typeof fn !== "function") {
            throw new TypeError(fn + " is not a function");
        }
        const C = getSpecies(this);
        return new C(observer => this.subscribe({
            next(value) {
                let propagatedValue = value;
                try {
                    propagatedValue = fn(value);
                }
                catch (e) {
                    return observer.error(e);
                }
                observer.next(propagatedValue);
            },
            error(e) { observer.error(e); },
            complete() { observer.complete(); },
        }));
    }
    filter(fn) {
        if (typeof fn !== "function") {
            throw new TypeError(fn + " is not a function");
        }
        const C = getSpecies(this);
        return new C(observer => this.subscribe({
            next(value) {
                try {
                    if (!fn(value))
                        return;
                }
                catch (e) {
                    return observer.error(e);
                }
                observer.next(value);
            },
            error(e) { observer.error(e); },
            complete() { observer.complete(); },
        }));
    }
    reduce(fn, seed) {
        if (typeof fn !== "function") {
            throw new TypeError(fn + " is not a function");
        }
        const C = getSpecies(this);
        const hasSeed = arguments.length > 1;
        let hasValue = false;
        let acc = seed;
        return new C(observer => this.subscribe({
            next(value) {
                const first = !hasValue;
                hasValue = true;
                if (!first || hasSeed) {
                    try {
                        acc = fn(acc, value);
                    }
                    catch (e) {
                        return observer.error(e);
                    }
                }
                else {
                    acc = value;
                }
            },
            error(e) { observer.error(e); },
            complete() {
                if (!hasValue && !hasSeed) {
                    return observer.error(new TypeError("Cannot reduce an empty sequence"));
                }
                observer.next(acc);
                observer.complete();
            },
        }));
    }
    concat(...sources) {
        const C = getSpecies(this);
        return new C(observer => {
            let subscription;
            let index = 0;
            function startNext(next) {
                subscription = next.subscribe({
                    next(v) { observer.next(v); },
                    error(e) { observer.error(e); },
                    complete() {
                        if (index === sources.length) {
                            subscription = undefined;
                            observer.complete();
                        }
                        else {
                            startNext(C.from(sources[index++]));
                        }
                    },
                });
            }
            startNext(this);
            return () => {
                if (subscription) {
                    subscription.unsubscribe();
                    subscription = undefined;
                }
            };
        });
    }
    flatMap(fn) {
        if (typeof fn !== "function") {
            throw new TypeError(fn + " is not a function");
        }
        const C = getSpecies(this);
        return new C(observer => {
            const subscriptions = [];
            const outer = this.subscribe({
                next(value) {
                    let normalizedValue;
                    if (fn) {
                        try {
                            normalizedValue = fn(value);
                        }
                        catch (e) {
                            return observer.error(e);
                        }
                    }
                    else {
                        normalizedValue = value;
                    }
                    const inner = C.from(normalizedValue).subscribe({
                        next(innerValue) { observer.next(innerValue); },
                        error(e) { observer.error(e); },
                        complete() {
                            const i = subscriptions.indexOf(inner);
                            if (i >= 0)
                                subscriptions.splice(i, 1);
                            completeIfDone();
                        },
                    });
                    subscriptions.push(inner);
                },
                error(e) { observer.error(e); },
                complete() { completeIfDone(); },
            });
            function completeIfDone() {
                if (outer.closed && subscriptions.length === 0) {
                    observer.complete();
                }
            }
            return () => {
                subscriptions.forEach(s => s.unsubscribe());
                outer.unsubscribe();
            };
        });
    }
    [SymbolObservable]() { return this; }
    static from(x) {
        const C = (typeof this === "function" ? this : Observable);
        if (x == null) {
            throw new TypeError(x + " is not an object");
        }
        const observableMethod = getMethod(x, SymbolObservable);
        if (observableMethod) {
            const observable = observableMethod.call(x);
            if (Object(observable) !== observable) {
                throw new TypeError(observable + " is not an object");
            }
            if (isObservable(observable) && observable.constructor === C) {
                return observable;
            }
            return new C(observer => observable.subscribe(observer));
        }
        if (Object(_symbols__WEBPACK_IMPORTED_MODULE_0__[/* hasSymbol */ "b"])("iterator")) {
            const iteratorMethod = getMethod(x, SymbolIterator);
            if (iteratorMethod) {
                return new C(observer => {
                    enqueue(() => {
                        if (observer.closed)
                            return;
                        for (const item of iteratorMethod.call(x)) {
                            observer.next(item);
                            if (observer.closed)
                                return;
                        }
                        observer.complete();
                    });
                });
            }
        }
        if (Array.isArray(x)) {
            return new C(observer => {
                enqueue(() => {
                    if (observer.closed)
                        return;
                    for (const item of x) {
                        observer.next(item);
                        if (observer.closed)
                            return;
                    }
                    observer.complete();
                });
            });
        }
        throw new TypeError(x + " is not observable");
    }
    static of(...items) {
        const C = (typeof this === "function" ? this : Observable);
        return new C(observer => {
            enqueue(() => {
                if (observer.closed)
                    return;
                for (const item of items) {
                    observer.next(item);
                    if (observer.closed)
                        return;
                }
                observer.complete();
            });
        });
    }
    static get [SymbolSpecies]() { return this; }
}
if (Object(_symbols__WEBPACK_IMPORTED_MODULE_0__[/* hasSymbols */ "c"])()) {
    Object.defineProperty(Observable, Symbol("extensions"), {
        value: {
            symbol: SymbolObservable,
            hostReportError,
        },
        configurable: true,
    });
}
/* harmony default export */ __webpack_exports__["b"] = (Observable);


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return map; });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);


function map(project, thisArg) {
    return Object(_util_lift__WEBPACK_IMPORTED_MODULE_0__[/* operate */ "b"])(function (source, subscriber) {
        var index = 0;
        source.subscribe(new _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__[/* OperatorSubscriber */ "a"](subscriber, function (value) {
            subscriber.next(project.call(thisArg, value, index++));
        }));
    });
}
//# sourceMappingURL=map.js.map

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return filter; });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);


function filter(predicate, thisArg) {
    return Object(_util_lift__WEBPACK_IMPORTED_MODULE_0__[/* operate */ "b"])(function (source, subscriber) {
        var index = 0;
        source.subscribe(new _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__[/* OperatorSubscriber */ "a"](subscriber, function (value) { return predicate.call(thisArg, value, index++) && subscriber.next(value); }));
    });
}
//# sourceMappingURL=filter.js.map

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return arrRemove; });
function arrRemove(arr, item) {
    if (arr) {
        var index = arr.indexOf(item);
        0 <= index && arr.splice(index, 1);
    }
}
//# sourceMappingURL=arrRemove.js.map

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MasterMessageType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return WorkerMessageType; });
/////////////////////////////
// Messages sent by master:
var MasterMessageType;
(function (MasterMessageType) {
    MasterMessageType["cancel"] = "cancel";
    MasterMessageType["run"] = "run";
})(MasterMessageType || (MasterMessageType = {}));
////////////////////////////
// Messages sent by worker:
var WorkerMessageType;
(function (WorkerMessageType) {
    WorkerMessageType["error"] = "error";
    WorkerMessageType["init"] = "init";
    WorkerMessageType["result"] = "result";
    WorkerMessageType["running"] = "running";
    WorkerMessageType["uncaughtError"] = "uncaughtError";
})(WorkerMessageType || (WorkerMessageType = {}));


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmptyError; });
/* harmony import */ var _createErrorClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);

var EmptyError = Object(_createErrorClass__WEBPACK_IMPORTED_MODULE_0__[/* createErrorClass */ "a"])(function (_super) { return function EmptyErrorImpl() {
    _super(this);
    this.name = 'EmptyError';
    this.message = 'no elements in sequence';
}; });
//# sourceMappingURL=EmptyError.js.map

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Unsubscribe from a subscription returned by something that looks like an observable,
 * but is not necessarily our observable implementation.
 */
function unsubscribe(subscription) {
    if (typeof subscription === "function") {
        subscription();
    }
    else if (subscription && typeof subscription.unsubscribe === "function") {
        subscription.unsubscribe();
    }
}
/* harmony default export */ __webpack_exports__["a"] = (unsubscribe);


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createErrorClass; });
function createErrorClass(createImpl) {
    var _super = function (instance) {
        Error.call(instance);
        instance.stack = new Error().stack;
    };
    var ctorFunc = createImpl(_super);
    ctorFunc.prototype = Object.create(Error.prototype);
    ctorFunc.prototype.constructor = ctorFunc;
    return ctorFunc;
}
//# sourceMappingURL=createErrorClass.js.map

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mapOneOrManyArgs; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _operators_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);


var isArray = Array.isArray;
function callOrApply(fn, args) {
    return isArray(args) ? fn.apply(void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __spreadArray */ "h"])([], Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __read */ "g"])(args))) : fn(args);
}
function mapOneOrManyArgs(fn) {
    return Object(_operators_map__WEBPACK_IMPORTED_MODULE_1__[/* map */ "a"])(function (args) { return callOrApply(fn, args); });
}
//# sourceMappingURL=mapOneOrManyArgs.js.map

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return argsOrArgArray; });
var isArray = Array.isArray;
function argsOrArgArray(args) {
    return args.length === 1 && isArray(args[0]) ? args[0] : args;
}
//# sourceMappingURL=argsOrArgArray.js.map

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/// <reference lib="dom" />
// tslint:disable no-shadowed-variable
const isWorkerRuntime = function isWorkerRuntime() {
    const isWindowContext = typeof self !== "undefined" && typeof Window !== "undefined" && self instanceof Window;
    return typeof self !== "undefined" && self.postMessage && !isWindowContext ? true : false;
};
const postMessageToMaster = function postMessageToMaster(data, transferList) {
    self.postMessage(data, transferList);
};
const subscribeToMasterMessages = function subscribeToMasterMessages(onMessage) {
    const messageHandler = (messageEvent) => {
        onMessage(messageEvent.data);
    };
    const unsubscribe = () => {
        self.removeEventListener("message", messageHandler);
    };
    self.addEventListener("message", messageHandler);
    return unsubscribe;
};
/* harmony default export */ __webpack_exports__["a"] = ({
    isWorkerRuntime,
    postMessageToMaster,
    subscribeToMasterMessages
});


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return take; });
/* harmony import */ var _observable_empty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);



function take(count) {
    return count <= 0
        ?
            function () { return _observable_empty__WEBPACK_IMPORTED_MODULE_0__[/* EMPTY */ "a"]; }
        : Object(_util_lift__WEBPACK_IMPORTED_MODULE_1__[/* operate */ "b"])(function (source, subscriber) {
            var seen = 0;
            source.subscribe(new _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__[/* OperatorSubscriber */ "a"](subscriber, function (value) {
                if (++seen <= count) {
                    subscriber.next(value);
                    if (count <= seen) {
                        subscriber.complete();
                    }
                }
            }));
        });
}
//# sourceMappingURL=take.js.map

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return config; });
var config = {
    onUnhandledError: null,
    onStoppedNotification: null,
    Promise: undefined,
    useDeprecatedSynchronousErrorHandling: false,
    useDeprecatedNextContext: false,
};
//# sourceMappingURL=config.js.map

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return $errors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return $events; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return $terminate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return $transferable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return $worker; });
const $errors = Symbol("thread.errors");
const $events = Symbol("thread.events");
const $terminate = Symbol("thread.terminate");
const $transferable = Symbol("thread.transferable");
const $worker = Symbol("thread.worker");


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reduce; });
/* harmony import */ var _scanInternals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(198);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);


function reduce(accumulator, seed) {
    return Object(_util_lift__WEBPACK_IMPORTED_MODULE_1__[/* operate */ "b"])(Object(_scanInternals__WEBPACK_IMPORTED_MODULE_0__[/* scanInternals */ "a"])(accumulator, seed, arguments.length >= 2, false, true));
}
//# sourceMappingURL=reduce.js.map

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return timer; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55);
/* harmony import */ var _util_isDate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87);




function timer(dueTime, intervalOrScheduler, scheduler) {
    if (dueTime === void 0) { dueTime = 0; }
    if (scheduler === void 0) { scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_1__[/* async */ "a"]; }
    var intervalDuration = -1;
    if (intervalOrScheduler != null) {
        if (Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_2__[/* isScheduler */ "a"])(intervalOrScheduler)) {
            scheduler = intervalOrScheduler;
        }
        else {
            intervalDuration = intervalOrScheduler;
        }
    }
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__[/* Observable */ "a"](function (subscriber) {
        var due = Object(_util_isDate__WEBPACK_IMPORTED_MODULE_3__[/* isValidDate */ "a"])(dueTime) ? +dueTime - scheduler.now() : dueTime;
        if (due < 0) {
            due = 0;
        }
        var n = 0;
        return scheduler.schedule(function () {
            if (!subscriber.closed) {
                subscriber.next(n++);
                if (0 <= intervalDuration) {
                    this.schedule(undefined, intervalDuration);
                }
                else {
                    subscriber.complete();
                }
            }
        }, due);
    });
}
//# sourceMappingURL=timer.js.map

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return internalFromArray; });
/* harmony import */ var _scheduled_scheduleArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
/* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);


function internalFromArray(input, scheduler) {
    return scheduler ? Object(_scheduled_scheduleArray__WEBPACK_IMPORTED_MODULE_0__[/* scheduleArray */ "a"])(input, scheduler) : Object(_from__WEBPACK_IMPORTED_MODULE_1__[/* fromArrayLike */ "b"])(input);
}
//# sourceMappingURL=fromArray.js.map

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * This is a lightweight annotation-based dependency injection container for typescript.
 *
 * Visit the project page on [GitHub] (https://github.com/thiagobustamante/typescript-ioc).
 */
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(203);
const model_1 = __webpack_require__(94);
exports.Scope = model_1.Scope;
exports.BuildContext = model_1.BuildContext;
const container_1 = __webpack_require__(204);
const scopes_1 = __webpack_require__(228);
var decorators_1 = __webpack_require__(229);
exports.Inject = decorators_1.Inject;
exports.Factory = decorators_1.Factory;
exports.Singleton = decorators_1.Singleton;
exports.Scoped = decorators_1.Scoped;
exports.OnlyInstantiableByContainer = decorators_1.OnlyInstantiableByContainer;
exports.InRequestScope = decorators_1.InRequestScope;
exports.InjectValue = decorators_1.InjectValue;
model_1.Scope.Local = new scopes_1.LocalScope();
model_1.Scope.Singleton = new scopes_1.SingletonScope();
model_1.Scope.Request = new scopes_1.RequestScope();
/**
 * The IoC Container class. Can be used to register and to retrieve your dependencies.
 * You can also use de decorators [[OnlyInstantiableByContainer]], [[Scoped]], [[Singleton]], [[Factory]]
 * to configure the dependency directly on the class.
 */
class Container {
    /**
     * Add a dependency to the Container. If this type is already present, just return its associated
     * configuration object.
     * Example of usage:
     *
     * ```
     * Container.bind(PersonDAO).to(ProgrammerDAO).scope(Scope.Singleton);
     * ```
     * @param source The type that will be bound to the Container
     * @return a container configuration
     */
    static bind(source) {
        return container_1.IoCContainer.bind(source);
    }
    /**
     * Retrieve an object from the container. It will resolve all dependencies and apply any type replacement
     * before return the object.
     * If there is no declared dependency to the given source type, an implicity bind is performed to this type.
     * @param source The dependency type to resolve
     * @return an object resolved for the given source type;
     */
    static get(source) {
        return container_1.IoCContainer.get(source, new ContainerBuildContext());
    }
    /**
     * Retrieve a type associated with the type provided from the container
     * @param source The dependency type to resolve
     * @return an object resolved for the given source type;
     */
    static getType(source) {
        return container_1.IoCContainer.getType(source);
    }
    /**
     *
     * @param name
     */
    static bindName(name) {
        return container_1.IoCContainer.bindName(name);
    }
    /**
     * Retrieve a constant from the container.
     * @param name The name of the constant used to identify these binding
     * @return the constant value
     */
    static getValue(name) {
        return container_1.IoCContainer.getValue(name);
    }
    /**
     * Select the current namespace to work.
     * @param name The namespace name, or null to select the default namespace
     */
    static namespace(name) {
        return container_1.IoCContainer.namespace(name);
    }
    /**
     * An alias to namespace method.
     * @param name The namespace name, or null to select the default namespace
     */
    static environment(name) {
        return Container.namespace(name);
    }
    /**
     * Store the state for a specified binding.  Can then be restored later.   Useful for testing.
     * @param source The dependency type
     */
    // _args is here to ensure backward compatibility
    static snapshot(_args) {
        return container_1.IoCContainer.snapshot();
    }
    /**
     * Import an array of configurations to the Container
     * @param configurations
     */
    static configure(...configurations) {
        configurations.forEach(config => {
            if (config.bind) {
                Container.configureType(config);
            }
            else if (config.bindName) {
                Container.configureConstant(config);
            }
            else if (config.env || config.namespace) {
                Container.configureNamespace(config);
            }
        });
    }
    static configureNamespace(config) {
        const selectedNamespace = container_1.IoCContainer.selectedNamespace();
        const env = config.env || config.namespace;
        Object.keys(env).forEach(namespace => {
            Container.namespace(namespace);
            const namespaceConfig = env[namespace];
            Container.configure(...namespaceConfig);
        });
        Container.namespace(selectedNamespace);
    }
    static configureConstant(config) {
        const bind = container_1.IoCContainer.bindName(config.bindName);
        if (bind) {
            if (config.to) {
                bind.to(config.to);
            }
        }
    }
    static configureType(config) {
        const bind = container_1.IoCContainer.bind(config.bind);
        if (bind) {
            if (config.to) {
                bind.to(config.to);
            }
            else if (config.factory) {
                bind.factory(config.factory);
            }
            if (config.scope) {
                bind.scope(config.scope);
            }
            if (config.withParams) {
                bind.withParams(config.withParams);
            }
        }
    }
}
exports.Container = Container;
class ContainerBuildContext extends model_1.BuildContext {
    constructor() {
        super(...arguments);
        this.context = new Map();
    }
    build(source, factory) {
        let instance = this.context.get(source);
        if (!instance) {
            instance = factory(this);
            this.context.set(source, instance);
        }
        return instance;
    }
    resolve(source) {
        return container_1.IoCContainer.get(source, this);
    }
}
//# sourceMappingURL=typescript-ioc.js.map

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return switchMap; });
/* harmony import */ var _observable_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);



function switchMap(project, resultSelector) {
    return Object(_util_lift__WEBPACK_IMPORTED_MODULE_1__[/* operate */ "b"])(function (source, subscriber) {
        var innerSubscriber = null;
        var index = 0;
        var isComplete = false;
        var checkComplete = function () { return isComplete && !innerSubscriber && subscriber.complete(); };
        source.subscribe(new _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__[/* OperatorSubscriber */ "a"](subscriber, function (value) {
            innerSubscriber === null || innerSubscriber === void 0 ? void 0 : innerSubscriber.unsubscribe();
            var innerIndex = 0;
            var outerIndex = index++;
            Object(_observable_from__WEBPACK_IMPORTED_MODULE_0__[/* innerFrom */ "c"])(project(value, outerIndex)).subscribe((innerSubscriber = new _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__[/* OperatorSubscriber */ "a"](subscriber, function (innerValue) { return subscriber.next(resultSelector ? resultSelector(value, innerValue, outerIndex, innerIndex++) : innerValue); }, function () {
                innerSubscriber = null;
                checkComplete();
            })));
        }, function () {
            isComplete = true;
            checkComplete();
        }));
    });
}
//# sourceMappingURL=switchMap.js.map

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/* eslint-env browser */

/**
 * This is the web browser implementation of `debug()`.
 */

exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
exports.destroy = (() => {
	let warned = false;

	return () => {
		if (!warned) {
			warned = true;
			console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
		}
	};
})();

/**
 * Colors.
 */

exports.colors = [
	'#0000CC',
	'#0000FF',
	'#0033CC',
	'#0033FF',
	'#0066CC',
	'#0066FF',
	'#0099CC',
	'#0099FF',
	'#00CC00',
	'#00CC33',
	'#00CC66',
	'#00CC99',
	'#00CCCC',
	'#00CCFF',
	'#3300CC',
	'#3300FF',
	'#3333CC',
	'#3333FF',
	'#3366CC',
	'#3366FF',
	'#3399CC',
	'#3399FF',
	'#33CC00',
	'#33CC33',
	'#33CC66',
	'#33CC99',
	'#33CCCC',
	'#33CCFF',
	'#6600CC',
	'#6600FF',
	'#6633CC',
	'#6633FF',
	'#66CC00',
	'#66CC33',
	'#9900CC',
	'#9900FF',
	'#9933CC',
	'#9933FF',
	'#99CC00',
	'#99CC33',
	'#CC0000',
	'#CC0033',
	'#CC0066',
	'#CC0099',
	'#CC00CC',
	'#CC00FF',
	'#CC3300',
	'#CC3333',
	'#CC3366',
	'#CC3399',
	'#CC33CC',
	'#CC33FF',
	'#CC6600',
	'#CC6633',
	'#CC9900',
	'#CC9933',
	'#CCCC00',
	'#CCCC33',
	'#FF0000',
	'#FF0033',
	'#FF0066',
	'#FF0099',
	'#FF00CC',
	'#FF00FF',
	'#FF3300',
	'#FF3333',
	'#FF3366',
	'#FF3399',
	'#FF33CC',
	'#FF33FF',
	'#FF6600',
	'#FF6633',
	'#FF9900',
	'#FF9933',
	'#FFCC00',
	'#FFCC33'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

// eslint-disable-next-line complexity
function useColors() {
	// NB: In an Electron preload script, document will be defined but not fully
	// initialized. Since we know we're in Chrome, we'll just detect this case
	// explicitly
	if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
		return true;
	}

	// Internet Explorer and Edge do not support colors.
	if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
		return false;
	}

	// Is webkit? http://stackoverflow.com/a/16459606/376773
	// document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
	return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
		// Is firebug? http://stackoverflow.com/a/398120/376773
		(typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
		// Is firefox >= v31?
		// https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
		// Double check webkit in userAgent just in case we are in a worker
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
	args[0] = (this.useColors ? '%c' : '') +
		this.namespace +
		(this.useColors ? ' %c' : ' ') +
		args[0] +
		(this.useColors ? '%c ' : ' ') +
		'+' + module.exports.humanize(this.diff);

	if (!this.useColors) {
		return;
	}

	const c = 'color: ' + this.color;
	args.splice(1, 0, c, 'color: inherit');

	// The final "%c" is somewhat tricky, because there could be other
	// arguments passed either before or after the %c, so we need to
	// figure out the correct index to insert the CSS into
	let index = 0;
	let lastC = 0;
	args[0].replace(/%[a-zA-Z%]/g, match => {
		if (match === '%%') {
			return;
		}
		index++;
		if (match === '%c') {
			// We only are interested in the *last* %c
			// (the user may have provided their own)
			lastC = index;
		}
	});

	args.splice(lastC, 0, c);
}

/**
 * Invokes `console.debug()` when available.
 * No-op when `console.debug` is not a "function".
 * If `console.debug` is not available, falls back
 * to `console.log`.
 *
 * @api public
 */
exports.log = console.debug || console.log || (() => {});

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
	try {
		if (namespaces) {
			exports.storage.setItem('debug', namespaces);
		} else {
			exports.storage.removeItem('debug');
		}
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */
function load() {
	let r;
	try {
		r = exports.storage.getItem('debug');
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}

	// If debug isn't set in LS, and we're in Electron, try to load $DEBUG
	if (!r && typeof process !== 'undefined' && 'env' in process) {
		r = process.env.DEBUG;
	}

	return r;
}

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
	try {
		// TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
		// The Browser also has localStorage in the global context.
		return localStorage;
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

module.exports = __webpack_require__(237)(exports);

const {formatters} = module.exports;

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

formatters.j = function (v) {
	try {
		return JSON.stringify(v);
	} catch (error) {
		return '[UnexpectedJSONParseError]: ' + error.message;
	}
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(60)))

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ Subscriber_Subscriber; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Subscriber_SafeSubscriber; });

// UNUSED EXPORTS: EMPTY_OBSERVER

// EXTERNAL MODULE: ./node_modules/rxjs/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/util/isFunction.js
var isFunction = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/Subscription.js
var Subscription = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/config.js
var config = __webpack_require__(27);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/util/reportUnhandledError.js
var reportUnhandledError = __webpack_require__(184);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/util/noop.js
var noop = __webpack_require__(6);

// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/NotificationFactories.js
var COMPLETE_NOTIFICATION = (function () { return createNotification('C', undefined, undefined); })();
function errorNotification(error) {
    return createNotification('E', undefined, error);
}
function nextNotification(value) {
    return createNotification('N', value, undefined);
}
function createNotification(kind, value, error) {
    return {
        kind: kind,
        value: value,
        error: error,
    };
}
//# sourceMappingURL=NotificationFactories.js.map
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/scheduler/timeoutProvider.js
var timeoutProvider = __webpack_require__(185);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/util/errorContext.js
var errorContext = __webpack_require__(56);

// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/Subscriber.js









var Subscriber_Subscriber = (function (_super) {
    Object(tslib_es6["e" /* __extends */])(Subscriber, _super);
    function Subscriber(destination) {
        var _this = _super.call(this) || this;
        _this.isStopped = false;
        if (destination) {
            _this.destination = destination;
            if (Object(Subscription["c" /* isSubscription */])(destination)) {
                destination.add(_this);
            }
        }
        else {
            _this.destination = EMPTY_OBSERVER;
        }
        return _this;
    }
    Subscriber.create = function (next, error, complete) {
        return new Subscriber_SafeSubscriber(next, error, complete);
    };
    Subscriber.prototype.next = function (value) {
        if (this.isStopped) {
            handleStoppedNotification(nextNotification(value), this);
        }
        else {
            this._next(value);
        }
    };
    Subscriber.prototype.error = function (err) {
        if (this.isStopped) {
            handleStoppedNotification(errorNotification(err), this);
        }
        else {
            this.isStopped = true;
            this._error(err);
        }
    };
    Subscriber.prototype.complete = function () {
        if (this.isStopped) {
            handleStoppedNotification(COMPLETE_NOTIFICATION, this);
        }
        else {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (!this.closed) {
            this.isStopped = true;
            _super.prototype.unsubscribe.call(this);
            this.destination = null;
        }
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        try {
            this.destination.error(err);
        }
        finally {
            this.unsubscribe();
        }
    };
    Subscriber.prototype._complete = function () {
        try {
            this.destination.complete();
        }
        finally {
            this.unsubscribe();
        }
    };
    return Subscriber;
}(Subscription["b" /* Subscription */]));

var Subscriber_SafeSubscriber = (function (_super) {
    Object(tslib_es6["e" /* __extends */])(SafeSubscriber, _super);
    function SafeSubscriber(observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        var next;
        if (Object(isFunction["a" /* isFunction */])(observerOrNext)) {
            next = observerOrNext;
        }
        else if (observerOrNext) {
            (next = observerOrNext.next, error = observerOrNext.error, complete = observerOrNext.complete);
            var context_1;
            if (_this && config["a" /* config */].useDeprecatedNextContext) {
                context_1 = Object.create(observerOrNext);
                context_1.unsubscribe = function () { return _this.unsubscribe(); };
            }
            else {
                context_1 = observerOrNext;
            }
            next = next === null || next === void 0 ? void 0 : next.bind(context_1);
            error = error === null || error === void 0 ? void 0 : error.bind(context_1);
            complete = complete === null || complete === void 0 ? void 0 : complete.bind(context_1);
        }
        _this.destination = {
            next: next ? wrapForErrorHandling(next, _this) : noop["a" /* noop */],
            error: wrapForErrorHandling(error !== null && error !== void 0 ? error : defaultErrorHandler, _this),
            complete: complete ? wrapForErrorHandling(complete, _this) : noop["a" /* noop */],
        };
        return _this;
    }
    return SafeSubscriber;
}(Subscriber_Subscriber));

function wrapForErrorHandling(handler, instance) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        try {
            handler.apply(void 0, Object(tslib_es6["h" /* __spreadArray */])([], Object(tslib_es6["g" /* __read */])(args)));
        }
        catch (err) {
            if (config["a" /* config */].useDeprecatedSynchronousErrorHandling) {
                Object(errorContext["a" /* captureError */])(err);
            }
            else {
                Object(reportUnhandledError["a" /* reportUnhandledError */])(err);
            }
        }
    };
}
function defaultErrorHandler(err) {
    throw err;
}
function handleStoppedNotification(notification, subscriber) {
    var onStoppedNotification = config["a" /* config */].onStoppedNotification;
    onStoppedNotification && timeoutProvider["a" /* timeoutProvider */].setTimeout(function () { return onStoppedNotification(notification, subscriber); });
}
var EMPTY_OBSERVER = {
    closed: true,
    next: noop["a" /* noop */],
    error: defaultErrorHandler,
    complete: noop["a" /* noop */],
};
//# sourceMappingURL=Subscriber.js.map

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mergeAll; });
/* harmony import */ var _mergeMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);


function mergeAll(concurrent) {
    if (concurrent === void 0) { concurrent = Infinity; }
    return Object(_mergeMap__WEBPACK_IMPORTED_MODULE_0__[/* mergeMap */ "a"])(_util_identity__WEBPACK_IMPORTED_MODULE_1__[/* identity */ "a"], concurrent);
}
//# sourceMappingURL=mergeAll.js.map

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return defaultIfEmpty; });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);


function defaultIfEmpty(defaultValue) {
    return Object(_util_lift__WEBPACK_IMPORTED_MODULE_0__[/* operate */ "b"])(function (source, subscriber) {
        var hasValue = false;
        source.subscribe(new _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__[/* OperatorSubscriber */ "a"](subscriber, function (value) {
            hasValue = true;
            subscriber.next(value);
        }, function () {
            if (!hasValue) {
                subscriber.next(defaultValue);
            }
            subscriber.complete();
        }));
    });
}
//# sourceMappingURL=defaultIfEmpty.js.map

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return throwIfEmpty; });
/* harmony import */ var _util_EmptyError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);



function throwIfEmpty(errorFactory) {
    if (errorFactory === void 0) { errorFactory = defaultErrorFactory; }
    return Object(_util_lift__WEBPACK_IMPORTED_MODULE_1__[/* operate */ "b"])(function (source, subscriber) {
        var hasValue = false;
        source.subscribe(new _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__[/* OperatorSubscriber */ "a"](subscriber, function (value) {
            hasValue = true;
            subscriber.next(value);
        }, function () { return (hasValue ? subscriber.complete() : subscriber.error(errorFactory())); }));
    });
}
function defaultErrorFactory() {
    return new _util_EmptyError__WEBPACK_IMPORTED_MODULE_0__[/* EmptyError */ "a"]();
}
//# sourceMappingURL=throwIfEmpty.js.map

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return observable; });
var observable = (function () { return (typeof Symbol === 'function' && Symbol.observable) || '@@observable'; })();
//# sourceMappingURL=observable.js.map

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return defer; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);


function defer(observableFactory) {
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__[/* Observable */ "a"](function (subscriber) {
        Object(_from__WEBPACK_IMPORTED_MODULE_1__[/* innerFrom */ "c"])(observableFactory()).subscribe(subscriber);
    });
}
//# sourceMappingURL=defer.js.map

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsyncScheduler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _Scheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90);


var AsyncScheduler = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "e"])(AsyncScheduler, _super);
    function AsyncScheduler(SchedulerAction, now) {
        if (now === void 0) { now = _Scheduler__WEBPACK_IMPORTED_MODULE_1__[/* Scheduler */ "a"].now; }
        var _this = _super.call(this, SchedulerAction, now) || this;
        _this.actions = [];
        _this._active = false;
        _this._scheduled = undefined;
        return _this;
    }
    AsyncScheduler.prototype.flush = function (action) {
        var actions = this.actions;
        if (this._active) {
            actions.push(action);
            return;
        }
        var error;
        this._active = true;
        do {
            if ((error = action.execute(action.state, action.delay))) {
                break;
            }
        } while ((action = actions.shift()));
        this._active = false;
        if (error) {
            while ((action = actions.shift())) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsyncScheduler;
}(_Scheduler__WEBPACK_IMPORTED_MODULE_1__[/* Scheduler */ "a"]));

//# sourceMappingURL=AsyncScheduler.js.map

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ AsyncAction_AsyncAction; });

// EXTERNAL MODULE: ./node_modules/rxjs/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/Subscription.js
var Subscription = __webpack_require__(8);

// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/scheduler/Action.js


var Action_Action = (function (_super) {
    Object(tslib_es6["e" /* __extends */])(Action, _super);
    function Action(scheduler, work) {
        return _super.call(this) || this;
    }
    Action.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        return this;
    };
    return Action;
}(Subscription["b" /* Subscription */]));

//# sourceMappingURL=Action.js.map
// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/scheduler/intervalProvider.js

var intervalProvider = {
    setInterval: function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var delegate = intervalProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.setInterval) || setInterval).apply(void 0, Object(tslib_es6["h" /* __spreadArray */])([], Object(tslib_es6["g" /* __read */])(args)));
    },
    clearInterval: function (handle) {
        var delegate = intervalProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearInterval) || clearInterval)(handle);
    },
    delegate: undefined,
};
//# sourceMappingURL=intervalProvider.js.map
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/util/arrRemove.js
var arrRemove = __webpack_require__(18);

// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/scheduler/AsyncAction.js




var AsyncAction_AsyncAction = (function (_super) {
    Object(tslib_es6["e" /* __extends */])(AsyncAction, _super);
    function AsyncAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        _this.pending = false;
        return _this;
    }
    AsyncAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        if (this.closed) {
            return this;
        }
        this.state = state;
        var id = this.id;
        var scheduler = this.scheduler;
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, delay);
        }
        this.pending = true;
        this.delay = delay;
        this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
        return this;
    };
    AsyncAction.prototype.requestAsyncId = function (scheduler, _id, delay) {
        if (delay === void 0) { delay = 0; }
        return intervalProvider.setInterval(scheduler.flush.bind(scheduler, this), delay);
    };
    AsyncAction.prototype.recycleAsyncId = function (_scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        if (delay != null && this.delay === delay && this.pending === false) {
            return id;
        }
        intervalProvider.clearInterval(id);
        return undefined;
    };
    AsyncAction.prototype.execute = function (state, delay) {
        if (this.closed) {
            return new Error('executing a cancelled action');
        }
        this.pending = false;
        var error = this._execute(state, delay);
        if (error) {
            return error;
        }
        else if (this.pending === false && this.id != null) {
            this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
    };
    AsyncAction.prototype._execute = function (state, _delay) {
        var errored = false;
        var errorValue;
        try {
            this.work(state);
        }
        catch (e) {
            errored = true;
            errorValue = (!!e && e) || new Error(e);
        }
        if (errored) {
            this.unsubscribe();
            return errorValue;
        }
    };
    AsyncAction.prototype.unsubscribe = function () {
        if (!this.closed) {
            var _a = this, id = _a.id, scheduler = _a.scheduler;
            var actions = scheduler.actions;
            this.work = this.state = this.scheduler = null;
            this.pending = false;
            Object(arrRemove["a" /* arrRemove */])(actions, this);
            if (id != null) {
                this.id = this.recycleAsyncId(scheduler, id, null);
            }
            this.delay = null;
            _super.prototype.unsubscribe.call(this);
        }
    };
    return AsyncAction;
}(Action_Action));

//# sourceMappingURL=AsyncAction.js.map

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NotificationKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Notification; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return observeNotification; });
/* harmony import */ var _observable_empty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _observable_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80);
/* harmony import */ var _observable_throwError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(172);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);




var NotificationKind;
(function (NotificationKind) {
    NotificationKind["NEXT"] = "N";
    NotificationKind["ERROR"] = "E";
    NotificationKind["COMPLETE"] = "C";
})(NotificationKind || (NotificationKind = {}));
var Notification = (function () {
    function Notification(kind, value, error) {
        this.kind = kind;
        this.value = value;
        this.error = error;
        this.hasValue = kind === 'N';
    }
    Notification.prototype.observe = function (observer) {
        return observeNotification(this, observer);
    };
    Notification.prototype.do = function (nextHandler, errorHandler, completeHandler) {
        var _a = this, kind = _a.kind, value = _a.value, error = _a.error;
        return kind === 'N' ? nextHandler === null || nextHandler === void 0 ? void 0 : nextHandler(value) : kind === 'E' ? errorHandler === null || errorHandler === void 0 ? void 0 : errorHandler(error) : completeHandler === null || completeHandler === void 0 ? void 0 : completeHandler();
    };
    Notification.prototype.accept = function (nextOrObserver, error, complete) {
        var _a;
        return Object(_util_isFunction__WEBPACK_IMPORTED_MODULE_3__[/* isFunction */ "a"])((_a = nextOrObserver) === null || _a === void 0 ? void 0 : _a.next)
            ? this.observe(nextOrObserver)
            : this.do(nextOrObserver, error, complete);
    };
    Notification.prototype.toObservable = function () {
        var _a = this, kind = _a.kind, value = _a.value, error = _a.error;
        var result = kind === 'N'
            ?
                Object(_observable_of__WEBPACK_IMPORTED_MODULE_1__[/* of */ "a"])(value)
            :
                kind === 'E'
                    ?
                        Object(_observable_throwError__WEBPACK_IMPORTED_MODULE_2__[/* throwError */ "a"])(function () { return error; })
                    :
                        kind === 'C'
                            ?
                                _observable_empty__WEBPACK_IMPORTED_MODULE_0__[/* EMPTY */ "a"]
                            :
                                0;
        if (!result) {
            throw new TypeError("Unexpected notification kind " + kind);
        }
        return result;
    };
    Notification.createNext = function (value) {
        return new Notification('N', value);
    };
    Notification.createError = function (err) {
        return new Notification('E', undefined, err);
    };
    Notification.createComplete = function () {
        return Notification.completeNotification;
    };
    Notification.completeNotification = new Notification('C');
    return Notification;
}());

function observeNotification(notification, observer) {
    var _a, _b, _c;
    var _d = notification, kind = _d.kind, value = _d.value, error = _d.error;
    if (typeof kind !== 'string') {
        throw new TypeError('Invalid notification, missing "kind"');
    }
    kind === 'N' ? (_a = observer.next) === null || _a === void 0 ? void 0 : _a.call(observer, value) : kind === 'E' ? (_b = observer.error) === null || _b === void 0 ? void 0 : _b.call(observer, error) : (_c = observer.complete) === null || _c === void 0 ? void 0 : _c.call(observer);
}
//# sourceMappingURL=Notification.js.map

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return concat; });
/* harmony import */ var _operators_concatAll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49);
/* harmony import */ var _fromArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31);
/* harmony import */ var _util_args__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);



function concat() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return Object(_operators_concatAll__WEBPACK_IMPORTED_MODULE_0__[/* concatAll */ "a"])()(Object(_fromArray__WEBPACK_IMPORTED_MODULE_1__[/* internalFromArray */ "a"])(args, Object(_util_args__WEBPACK_IMPORTED_MODULE_2__[/* popScheduler */ "c"])(args)));
}
//# sourceMappingURL=concat.js.map

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hasSymbols; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hasSymbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getSymbol; });
/* unused harmony export registerObservableSymbol */
const hasSymbols = () => typeof Symbol === "function";
const hasSymbol = (name) => hasSymbols() && Boolean(Symbol[name]);
const getSymbol = (name) => hasSymbol(name) ? Symbol[name] : "@@" + name;
function registerObservableSymbol() {
    if (hasSymbols() && !hasSymbol("observable")) {
        Symbol.observable = Symbol("observable");
    }
}
if (!hasSymbol("asyncIterator")) {
    Symbol.asyncIterator = Symbol.asyncIterator || Symbol.for("Symbol.asyncIterator");
}


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "Observable", function() { return /* reexport */ Observable["a" /* Observable */]; });
__webpack_require__.d(__webpack_exports__, "ConnectableObservable", function() { return /* reexport */ ConnectableObservable["a" /* ConnectableObservable */]; });
__webpack_require__.d(__webpack_exports__, "observable", function() { return /* reexport */ observable["a" /* observable */]; });
__webpack_require__.d(__webpack_exports__, "animationFrames", function() { return /* reexport */ animationFrames; });
__webpack_require__.d(__webpack_exports__, "Subject", function() { return /* reexport */ Subject["a" /* Subject */]; });
__webpack_require__.d(__webpack_exports__, "BehaviorSubject", function() { return /* reexport */ BehaviorSubject["a" /* BehaviorSubject */]; });
__webpack_require__.d(__webpack_exports__, "ReplaySubject", function() { return /* reexport */ ReplaySubject["a" /* ReplaySubject */]; });
__webpack_require__.d(__webpack_exports__, "AsyncSubject", function() { return /* reexport */ AsyncSubject["a" /* AsyncSubject */]; });
__webpack_require__.d(__webpack_exports__, "asap", function() { return /* reexport */ asap; });
__webpack_require__.d(__webpack_exports__, "asapScheduler", function() { return /* reexport */ asapScheduler; });
__webpack_require__.d(__webpack_exports__, "async", function() { return /* reexport */ scheduler_async["a" /* async */]; });
__webpack_require__.d(__webpack_exports__, "asyncScheduler", function() { return /* reexport */ scheduler_async["b" /* asyncScheduler */]; });
__webpack_require__.d(__webpack_exports__, "queue", function() { return /* reexport */ queue; });
__webpack_require__.d(__webpack_exports__, "queueScheduler", function() { return /* reexport */ queueScheduler; });
__webpack_require__.d(__webpack_exports__, "animationFrame", function() { return /* reexport */ animationFrame; });
__webpack_require__.d(__webpack_exports__, "animationFrameScheduler", function() { return /* reexport */ animationFrameScheduler; });
__webpack_require__.d(__webpack_exports__, "VirtualTimeScheduler", function() { return /* reexport */ VirtualTimeScheduler_VirtualTimeScheduler; });
__webpack_require__.d(__webpack_exports__, "VirtualAction", function() { return /* reexport */ VirtualTimeScheduler_VirtualAction; });
__webpack_require__.d(__webpack_exports__, "Scheduler", function() { return /* reexport */ Scheduler["a" /* Scheduler */]; });
__webpack_require__.d(__webpack_exports__, "Subscription", function() { return /* reexport */ Subscription["b" /* Subscription */]; });
__webpack_require__.d(__webpack_exports__, "Subscriber", function() { return /* reexport */ Subscriber["b" /* Subscriber */]; });
__webpack_require__.d(__webpack_exports__, "Notification", function() { return /* reexport */ Notification["a" /* Notification */]; });
__webpack_require__.d(__webpack_exports__, "NotificationKind", function() { return /* reexport */ Notification["b" /* NotificationKind */]; });
__webpack_require__.d(__webpack_exports__, "pipe", function() { return /* reexport */ pipe["a" /* pipe */]; });
__webpack_require__.d(__webpack_exports__, "noop", function() { return /* reexport */ noop["a" /* noop */]; });
__webpack_require__.d(__webpack_exports__, "identity", function() { return /* reexport */ identity["a" /* identity */]; });
__webpack_require__.d(__webpack_exports__, "isObservable", function() { return /* reexport */ isObservable; });
__webpack_require__.d(__webpack_exports__, "lastValueFrom", function() { return /* reexport */ lastValueFrom; });
__webpack_require__.d(__webpack_exports__, "firstValueFrom", function() { return /* reexport */ firstValueFrom; });
__webpack_require__.d(__webpack_exports__, "ArgumentOutOfRangeError", function() { return /* reexport */ ArgumentOutOfRangeError["a" /* ArgumentOutOfRangeError */]; });
__webpack_require__.d(__webpack_exports__, "EmptyError", function() { return /* reexport */ EmptyError["a" /* EmptyError */]; });
__webpack_require__.d(__webpack_exports__, "NotFoundError", function() { return /* reexport */ NotFoundError["a" /* NotFoundError */]; });
__webpack_require__.d(__webpack_exports__, "ObjectUnsubscribedError", function() { return /* reexport */ ObjectUnsubscribedError["a" /* ObjectUnsubscribedError */]; });
__webpack_require__.d(__webpack_exports__, "SequenceError", function() { return /* reexport */ SequenceError["a" /* SequenceError */]; });
__webpack_require__.d(__webpack_exports__, "TimeoutError", function() { return /* reexport */ timeout["a" /* TimeoutError */]; });
__webpack_require__.d(__webpack_exports__, "UnsubscriptionError", function() { return /* reexport */ UnsubscriptionError["a" /* UnsubscriptionError */]; });
__webpack_require__.d(__webpack_exports__, "bindCallback", function() { return /* reexport */ bindCallback; });
__webpack_require__.d(__webpack_exports__, "bindNodeCallback", function() { return /* reexport */ bindNodeCallback; });
__webpack_require__.d(__webpack_exports__, "combineLatest", function() { return /* reexport */ combineLatest["a" /* combineLatest */]; });
__webpack_require__.d(__webpack_exports__, "concat", function() { return /* reexport */ concat["a" /* concat */]; });
__webpack_require__.d(__webpack_exports__, "connectable", function() { return /* reexport */ connectable; });
__webpack_require__.d(__webpack_exports__, "defer", function() { return /* reexport */ defer["a" /* defer */]; });
__webpack_require__.d(__webpack_exports__, "empty", function() { return /* reexport */ empty["b" /* empty */]; });
__webpack_require__.d(__webpack_exports__, "forkJoin", function() { return /* reexport */ forkJoin; });
__webpack_require__.d(__webpack_exports__, "from", function() { return /* reexport */ from["a" /* from */]; });
__webpack_require__.d(__webpack_exports__, "fromEvent", function() { return /* reexport */ fromEvent; });
__webpack_require__.d(__webpack_exports__, "fromEventPattern", function() { return /* reexport */ fromEventPattern; });
__webpack_require__.d(__webpack_exports__, "generate", function() { return /* reexport */ generate; });
__webpack_require__.d(__webpack_exports__, "iif", function() { return /* reexport */ iif; });
__webpack_require__.d(__webpack_exports__, "interval", function() { return /* reexport */ interval["a" /* interval */]; });
__webpack_require__.d(__webpack_exports__, "merge", function() { return /* reexport */ merge; });
__webpack_require__.d(__webpack_exports__, "never", function() { return /* reexport */ never; });
__webpack_require__.d(__webpack_exports__, "of", function() { return /* reexport */ of["a" /* of */]; });
__webpack_require__.d(__webpack_exports__, "onErrorResumeNext", function() { return /* reexport */ onErrorResumeNext_onErrorResumeNext; });
__webpack_require__.d(__webpack_exports__, "pairs", function() { return /* reexport */ pairs; });
__webpack_require__.d(__webpack_exports__, "partition", function() { return /* reexport */ partition; });
__webpack_require__.d(__webpack_exports__, "race", function() { return /* reexport */ race["a" /* race */]; });
__webpack_require__.d(__webpack_exports__, "range", function() { return /* reexport */ range; });
__webpack_require__.d(__webpack_exports__, "throwError", function() { return /* reexport */ throwError["a" /* throwError */]; });
__webpack_require__.d(__webpack_exports__, "timer", function() { return /* reexport */ timer["a" /* timer */]; });
__webpack_require__.d(__webpack_exports__, "using", function() { return /* reexport */ using; });
__webpack_require__.d(__webpack_exports__, "zip", function() { return /* reexport */ zip["a" /* zip */]; });
__webpack_require__.d(__webpack_exports__, "scheduled", function() { return /* reexport */ scheduled["a" /* scheduled */]; });
__webpack_require__.d(__webpack_exports__, "EMPTY", function() { return /* reexport */ empty["a" /* EMPTY */]; });
__webpack_require__.d(__webpack_exports__, "NEVER", function() { return /* reexport */ NEVER; });
__webpack_require__.d(__webpack_exports__, "config", function() { return /* reexport */ internal_config["a" /* config */]; });
__webpack_require__.d(__webpack_exports__, "audit", function() { return /* reexport */ audit["a" /* audit */]; });
__webpack_require__.d(__webpack_exports__, "auditTime", function() { return /* reexport */ auditTime["a" /* auditTime */]; });
__webpack_require__.d(__webpack_exports__, "buffer", function() { return /* reexport */ buffer["a" /* buffer */]; });
__webpack_require__.d(__webpack_exports__, "bufferCount", function() { return /* reexport */ bufferCount["a" /* bufferCount */]; });
__webpack_require__.d(__webpack_exports__, "bufferTime", function() { return /* reexport */ bufferTime["a" /* bufferTime */]; });
__webpack_require__.d(__webpack_exports__, "bufferToggle", function() { return /* reexport */ bufferToggle["a" /* bufferToggle */]; });
__webpack_require__.d(__webpack_exports__, "bufferWhen", function() { return /* reexport */ bufferWhen["a" /* bufferWhen */]; });
__webpack_require__.d(__webpack_exports__, "catchError", function() { return /* reexport */ catchError["a" /* catchError */]; });
__webpack_require__.d(__webpack_exports__, "combineAll", function() { return /* reexport */ combineAll["a" /* combineAll */]; });
__webpack_require__.d(__webpack_exports__, "combineLatestAll", function() { return /* reexport */ combineLatestAll["a" /* combineLatestAll */]; });
__webpack_require__.d(__webpack_exports__, "combineLatestWith", function() { return /* reexport */ combineLatestWith["a" /* combineLatestWith */]; });
__webpack_require__.d(__webpack_exports__, "concatAll", function() { return /* reexport */ concatAll["a" /* concatAll */]; });
__webpack_require__.d(__webpack_exports__, "concatMap", function() { return /* reexport */ concatMap["a" /* concatMap */]; });
__webpack_require__.d(__webpack_exports__, "concatMapTo", function() { return /* reexport */ concatMapTo["a" /* concatMapTo */]; });
__webpack_require__.d(__webpack_exports__, "concatWith", function() { return /* reexport */ concatWith["a" /* concatWith */]; });
__webpack_require__.d(__webpack_exports__, "connect", function() { return /* reexport */ connect["a" /* connect */]; });
__webpack_require__.d(__webpack_exports__, "count", function() { return /* reexport */ operators_count["a" /* count */]; });
__webpack_require__.d(__webpack_exports__, "debounce", function() { return /* reexport */ debounce["a" /* debounce */]; });
__webpack_require__.d(__webpack_exports__, "debounceTime", function() { return /* reexport */ debounceTime["a" /* debounceTime */]; });
__webpack_require__.d(__webpack_exports__, "defaultIfEmpty", function() { return /* reexport */ defaultIfEmpty["a" /* defaultIfEmpty */]; });
__webpack_require__.d(__webpack_exports__, "delay", function() { return /* reexport */ operators_delay["a" /* delay */]; });
__webpack_require__.d(__webpack_exports__, "delayWhen", function() { return /* reexport */ delayWhen["a" /* delayWhen */]; });
__webpack_require__.d(__webpack_exports__, "dematerialize", function() { return /* reexport */ dematerialize["a" /* dematerialize */]; });
__webpack_require__.d(__webpack_exports__, "distinct", function() { return /* reexport */ distinct["a" /* distinct */]; });
__webpack_require__.d(__webpack_exports__, "distinctUntilChanged", function() { return /* reexport */ distinctUntilChanged["a" /* distinctUntilChanged */]; });
__webpack_require__.d(__webpack_exports__, "distinctUntilKeyChanged", function() { return /* reexport */ distinctUntilKeyChanged["a" /* distinctUntilKeyChanged */]; });
__webpack_require__.d(__webpack_exports__, "elementAt", function() { return /* reexport */ elementAt["a" /* elementAt */]; });
__webpack_require__.d(__webpack_exports__, "endWith", function() { return /* reexport */ endWith["a" /* endWith */]; });
__webpack_require__.d(__webpack_exports__, "every", function() { return /* reexport */ every["a" /* every */]; });
__webpack_require__.d(__webpack_exports__, "exhaust", function() { return /* reexport */ exhaust["a" /* exhaust */]; });
__webpack_require__.d(__webpack_exports__, "exhaustAll", function() { return /* reexport */ exhaustAll["a" /* exhaustAll */]; });
__webpack_require__.d(__webpack_exports__, "exhaustMap", function() { return /* reexport */ exhaustMap["a" /* exhaustMap */]; });
__webpack_require__.d(__webpack_exports__, "expand", function() { return /* reexport */ expand["a" /* expand */]; });
__webpack_require__.d(__webpack_exports__, "filter", function() { return /* reexport */ filter["a" /* filter */]; });
__webpack_require__.d(__webpack_exports__, "finalize", function() { return /* reexport */ finalize["a" /* finalize */]; });
__webpack_require__.d(__webpack_exports__, "find", function() { return /* reexport */ find["b" /* find */]; });
__webpack_require__.d(__webpack_exports__, "findIndex", function() { return /* reexport */ findIndex["a" /* findIndex */]; });
__webpack_require__.d(__webpack_exports__, "first", function() { return /* reexport */ first["a" /* first */]; });
__webpack_require__.d(__webpack_exports__, "groupBy", function() { return /* reexport */ groupBy["a" /* groupBy */]; });
__webpack_require__.d(__webpack_exports__, "ignoreElements", function() { return /* reexport */ ignoreElements["a" /* ignoreElements */]; });
__webpack_require__.d(__webpack_exports__, "isEmpty", function() { return /* reexport */ isEmpty["a" /* isEmpty */]; });
__webpack_require__.d(__webpack_exports__, "last", function() { return /* reexport */ last["a" /* last */]; });
__webpack_require__.d(__webpack_exports__, "map", function() { return /* reexport */ map["a" /* map */]; });
__webpack_require__.d(__webpack_exports__, "mapTo", function() { return /* reexport */ mapTo["a" /* mapTo */]; });
__webpack_require__.d(__webpack_exports__, "materialize", function() { return /* reexport */ materialize["a" /* materialize */]; });
__webpack_require__.d(__webpack_exports__, "max", function() { return /* reexport */ max["a" /* max */]; });
__webpack_require__.d(__webpack_exports__, "mergeAll", function() { return /* reexport */ mergeAll["a" /* mergeAll */]; });
__webpack_require__.d(__webpack_exports__, "flatMap", function() { return /* reexport */ flatMap["a" /* flatMap */]; });
__webpack_require__.d(__webpack_exports__, "mergeMap", function() { return /* reexport */ mergeMap["a" /* mergeMap */]; });
__webpack_require__.d(__webpack_exports__, "mergeMapTo", function() { return /* reexport */ mergeMapTo["a" /* mergeMapTo */]; });
__webpack_require__.d(__webpack_exports__, "mergeScan", function() { return /* reexport */ mergeScan["a" /* mergeScan */]; });
__webpack_require__.d(__webpack_exports__, "mergeWith", function() { return /* reexport */ mergeWith["a" /* mergeWith */]; });
__webpack_require__.d(__webpack_exports__, "min", function() { return /* reexport */ min["a" /* min */]; });
__webpack_require__.d(__webpack_exports__, "multicast", function() { return /* reexport */ multicast["a" /* multicast */]; });
__webpack_require__.d(__webpack_exports__, "observeOn", function() { return /* reexport */ observeOn["a" /* observeOn */]; });
__webpack_require__.d(__webpack_exports__, "pairwise", function() { return /* reexport */ pairwise["a" /* pairwise */]; });
__webpack_require__.d(__webpack_exports__, "pluck", function() { return /* reexport */ pluck["a" /* pluck */]; });
__webpack_require__.d(__webpack_exports__, "publish", function() { return /* reexport */ publish["a" /* publish */]; });
__webpack_require__.d(__webpack_exports__, "publishBehavior", function() { return /* reexport */ publishBehavior["a" /* publishBehavior */]; });
__webpack_require__.d(__webpack_exports__, "publishLast", function() { return /* reexport */ publishLast["a" /* publishLast */]; });
__webpack_require__.d(__webpack_exports__, "publishReplay", function() { return /* reexport */ publishReplay["a" /* publishReplay */]; });
__webpack_require__.d(__webpack_exports__, "raceWith", function() { return /* reexport */ raceWith["a" /* raceWith */]; });
__webpack_require__.d(__webpack_exports__, "reduce", function() { return /* reexport */ reduce["a" /* reduce */]; });
__webpack_require__.d(__webpack_exports__, "repeat", function() { return /* reexport */ repeat["a" /* repeat */]; });
__webpack_require__.d(__webpack_exports__, "repeatWhen", function() { return /* reexport */ repeatWhen["a" /* repeatWhen */]; });
__webpack_require__.d(__webpack_exports__, "retry", function() { return /* reexport */ retry["a" /* retry */]; });
__webpack_require__.d(__webpack_exports__, "retryWhen", function() { return /* reexport */ retryWhen["a" /* retryWhen */]; });
__webpack_require__.d(__webpack_exports__, "refCount", function() { return /* reexport */ refCount["a" /* refCount */]; });
__webpack_require__.d(__webpack_exports__, "sample", function() { return /* reexport */ sample["a" /* sample */]; });
__webpack_require__.d(__webpack_exports__, "sampleTime", function() { return /* reexport */ sampleTime["a" /* sampleTime */]; });
__webpack_require__.d(__webpack_exports__, "scan", function() { return /* reexport */ scan["a" /* scan */]; });
__webpack_require__.d(__webpack_exports__, "sequenceEqual", function() { return /* reexport */ sequenceEqual["a" /* sequenceEqual */]; });
__webpack_require__.d(__webpack_exports__, "share", function() { return /* reexport */ share["a" /* share */]; });
__webpack_require__.d(__webpack_exports__, "shareReplay", function() { return /* reexport */ shareReplay["a" /* shareReplay */]; });
__webpack_require__.d(__webpack_exports__, "single", function() { return /* reexport */ single["a" /* single */]; });
__webpack_require__.d(__webpack_exports__, "skip", function() { return /* reexport */ skip["a" /* skip */]; });
__webpack_require__.d(__webpack_exports__, "skipLast", function() { return /* reexport */ skipLast["a" /* skipLast */]; });
__webpack_require__.d(__webpack_exports__, "skipUntil", function() { return /* reexport */ skipUntil["a" /* skipUntil */]; });
__webpack_require__.d(__webpack_exports__, "skipWhile", function() { return /* reexport */ skipWhile["a" /* skipWhile */]; });
__webpack_require__.d(__webpack_exports__, "startWith", function() { return /* reexport */ startWith["a" /* startWith */]; });
__webpack_require__.d(__webpack_exports__, "subscribeOn", function() { return /* reexport */ subscribeOn["a" /* subscribeOn */]; });
__webpack_require__.d(__webpack_exports__, "switchAll", function() { return /* reexport */ switchAll["a" /* switchAll */]; });
__webpack_require__.d(__webpack_exports__, "switchMap", function() { return /* reexport */ switchMap["a" /* switchMap */]; });
__webpack_require__.d(__webpack_exports__, "switchMapTo", function() { return /* reexport */ switchMapTo["a" /* switchMapTo */]; });
__webpack_require__.d(__webpack_exports__, "switchScan", function() { return /* reexport */ switchScan["a" /* switchScan */]; });
__webpack_require__.d(__webpack_exports__, "take", function() { return /* reexport */ take["a" /* take */]; });
__webpack_require__.d(__webpack_exports__, "takeLast", function() { return /* reexport */ takeLast["a" /* takeLast */]; });
__webpack_require__.d(__webpack_exports__, "takeUntil", function() { return /* reexport */ takeUntil["a" /* takeUntil */]; });
__webpack_require__.d(__webpack_exports__, "takeWhile", function() { return /* reexport */ takeWhile["a" /* takeWhile */]; });
__webpack_require__.d(__webpack_exports__, "tap", function() { return /* reexport */ tap["a" /* tap */]; });
__webpack_require__.d(__webpack_exports__, "throttle", function() { return /* reexport */ throttle["b" /* throttle */]; });
__webpack_require__.d(__webpack_exports__, "throttleTime", function() { return /* reexport */ throttleTime["a" /* throttleTime */]; });
__webpack_require__.d(__webpack_exports__, "throwIfEmpty", function() { return /* reexport */ throwIfEmpty["a" /* throwIfEmpty */]; });
__webpack_require__.d(__webpack_exports__, "timeInterval", function() { return /* reexport */ timeInterval["a" /* timeInterval */]; });
__webpack_require__.d(__webpack_exports__, "timeout", function() { return /* reexport */ timeout["b" /* timeout */]; });
__webpack_require__.d(__webpack_exports__, "timeoutWith", function() { return /* reexport */ timeoutWith["a" /* timeoutWith */]; });
__webpack_require__.d(__webpack_exports__, "timestamp", function() { return /* reexport */ timestamp["a" /* timestamp */]; });
__webpack_require__.d(__webpack_exports__, "toArray", function() { return /* reexport */ toArray["a" /* toArray */]; });
__webpack_require__.d(__webpack_exports__, "window", function() { return /* reexport */ operators_window["a" /* window */]; });
__webpack_require__.d(__webpack_exports__, "windowCount", function() { return /* reexport */ windowCount["a" /* windowCount */]; });
__webpack_require__.d(__webpack_exports__, "windowTime", function() { return /* reexport */ windowTime["a" /* windowTime */]; });
__webpack_require__.d(__webpack_exports__, "windowToggle", function() { return /* reexport */ windowToggle["a" /* windowToggle */]; });
__webpack_require__.d(__webpack_exports__, "windowWhen", function() { return /* reexport */ windowWhen["a" /* windowWhen */]; });
__webpack_require__.d(__webpack_exports__, "withLatestFrom", function() { return /* reexport */ withLatestFrom["a" /* withLatestFrom */]; });
__webpack_require__.d(__webpack_exports__, "zipAll", function() { return /* reexport */ zipAll["a" /* zipAll */]; });
__webpack_require__.d(__webpack_exports__, "zipWith", function() { return /* reexport */ zipWith["a" /* zipWith */]; });

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/Observable.js
var Observable = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/observable/ConnectableObservable.js
var ConnectableObservable = __webpack_require__(54);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/symbol/observable.js
var observable = __webpack_require__(39);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/Subscription.js
var Subscription = __webpack_require__(8);

// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/scheduler/performanceTimestampProvider.js
var performanceTimestampProvider = {
    now: function () {
        return (performanceTimestampProvider.delegate || performance).now();
    },
    delegate: undefined,
};
//# sourceMappingURL=performanceTimestampProvider.js.map
// EXTERNAL MODULE: ./node_modules/rxjs/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/scheduler/animationFrameProvider.js


var animationFrameProvider = {
    schedule: function (callback) {
        var request = requestAnimationFrame;
        var cancel = cancelAnimationFrame;
        var delegate = animationFrameProvider.delegate;
        if (delegate) {
            request = delegate.requestAnimationFrame;
            cancel = delegate.cancelAnimationFrame;
        }
        var handle = request(function (timestamp) {
            cancel = undefined;
            callback(timestamp);
        });
        return new Subscription["b" /* Subscription */](function () { return cancel === null || cancel === void 0 ? void 0 : cancel(handle); });
    },
    requestAnimationFrame: function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var delegate = animationFrameProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.requestAnimationFrame) || requestAnimationFrame).apply(void 0, Object(tslib_es6["h" /* __spreadArray */])([], Object(tslib_es6["g" /* __read */])(args)));
    },
    cancelAnimationFrame: function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var delegate = animationFrameProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.cancelAnimationFrame) || cancelAnimationFrame).apply(void 0, Object(tslib_es6["h" /* __spreadArray */])([], Object(tslib_es6["g" /* __read */])(args)));
    },
    delegate: undefined,
};
//# sourceMappingURL=animationFrameProvider.js.map
// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/observable/dom/animationFrames.js




function animationFrames(timestampProvider) {
    return timestampProvider ? animationFramesFactory(timestampProvider) : DEFAULT_ANIMATION_FRAMES;
}
function animationFramesFactory(timestampProvider) {
    var schedule = animationFrameProvider.schedule;
    return new Observable["a" /* Observable */](function (subscriber) {
        var subscription = new Subscription["b" /* Subscription */]();
        var provider = timestampProvider || performanceTimestampProvider;
        var start = provider.now();
        var run = function (timestamp) {
            var now = provider.now();
            subscriber.next({
                timestamp: timestampProvider ? now : timestamp,
                elapsed: now - start
            });
            if (!subscriber.closed) {
                subscription.add(schedule(run));
            }
        };
        subscription.add(schedule(run));
        return subscription;
    });
}
var DEFAULT_ANIMATION_FRAMES = animationFramesFactory();
//# sourceMappingURL=animationFrames.js.map
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/Subject.js
var Subject = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/BehaviorSubject.js
var BehaviorSubject = __webpack_require__(171);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/ReplaySubject.js
var ReplaySubject = __webpack_require__(78);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/AsyncSubject.js
var AsyncSubject = __webpack_require__(79);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/scheduler/AsyncAction.js + 2 modules
var AsyncAction = __webpack_require__(42);

// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/Immediate.js
var nextHandle = 1;
var resolved;
var activeHandles = {};
function findAndClearHandle(handle) {
    if (handle in activeHandles) {
        delete activeHandles[handle];
        return true;
    }
    return false;
}
var Immediate = {
    setImmediate: function (cb) {
        var handle = nextHandle++;
        activeHandles[handle] = true;
        if (!resolved) {
            resolved = Promise.resolve();
        }
        resolved.then(function () { return findAndClearHandle(handle) && cb(); });
        return handle;
    },
    clearImmediate: function (handle) {
        findAndClearHandle(handle);
    },
};
var TestTools = {
    pending: function () {
        return Object.keys(activeHandles).length;
    }
};
//# sourceMappingURL=Immediate.js.map
// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/scheduler/immediateProvider.js


var setImmediate = Immediate.setImmediate, clearImmediate = Immediate.clearImmediate;
var immediateProvider = {
    setImmediate: function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var delegate = immediateProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.setImmediate) || setImmediate).apply(void 0, Object(tslib_es6["h" /* __spreadArray */])([], Object(tslib_es6["g" /* __read */])(args)));
    },
    clearImmediate: function (handle) {
        var delegate = immediateProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearImmediate) || clearImmediate)(handle);
    },
    delegate: undefined,
};
//# sourceMappingURL=immediateProvider.js.map
// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/scheduler/AsapAction.js



var AsapAction_AsapAction = (function (_super) {
    Object(tslib_es6["e" /* __extends */])(AsapAction, _super);
    function AsapAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
    }
    AsapAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        if (delay !== null && delay > 0) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        scheduler.actions.push(this);
        return scheduler._scheduled || (scheduler._scheduled = immediateProvider.setImmediate(scheduler.flush.bind(scheduler, undefined)));
    };
    AsapAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        if ((delay != null && delay > 0) || (delay == null && this.delay > 0)) {
            return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
        }
        if (scheduler.actions.length === 0) {
            immediateProvider.clearImmediate(id);
            scheduler._scheduled = undefined;
        }
        return undefined;
    };
    return AsapAction;
}(AsyncAction["a" /* AsyncAction */]));

//# sourceMappingURL=AsapAction.js.map
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/scheduler/AsyncScheduler.js
var AsyncScheduler = __webpack_require__(41);

// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/scheduler/AsapScheduler.js


var AsapScheduler_AsapScheduler = (function (_super) {
    Object(tslib_es6["e" /* __extends */])(AsapScheduler, _super);
    function AsapScheduler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AsapScheduler.prototype.flush = function (action) {
        this._active = true;
        this._scheduled = undefined;
        var actions = this.actions;
        var error;
        var index = -1;
        action = action || actions.shift();
        var count = actions.length;
        do {
            if ((error = action.execute(action.state, action.delay))) {
                break;
            }
        } while (++index < count && (action = actions.shift()));
        this._active = false;
        if (error) {
            while (++index < count && (action = actions.shift())) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsapScheduler;
}(AsyncScheduler["a" /* AsyncScheduler */]));

//# sourceMappingURL=AsapScheduler.js.map
// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/scheduler/asap.js


var asapScheduler = new AsapScheduler_AsapScheduler(AsapAction_AsapAction);
var asap = asapScheduler;
//# sourceMappingURL=asap.js.map
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/scheduler/async.js
var scheduler_async = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/scheduler/QueueAction.js


var QueueAction_QueueAction = (function (_super) {
    Object(tslib_es6["e" /* __extends */])(QueueAction, _super);
    function QueueAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
    }
    QueueAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        if (delay > 0) {
            return _super.prototype.schedule.call(this, state, delay);
        }
        this.delay = delay;
        this.state = state;
        this.scheduler.flush(this);
        return this;
    };
    QueueAction.prototype.execute = function (state, delay) {
        return (delay > 0 || this.closed) ?
            _super.prototype.execute.call(this, state, delay) :
            this._execute(state, delay);
    };
    QueueAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        if ((delay != null && delay > 0) || (delay == null && this.delay > 0)) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        return scheduler.flush(this);
    };
    return QueueAction;
}(AsyncAction["a" /* AsyncAction */]));

//# sourceMappingURL=QueueAction.js.map
// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/scheduler/QueueScheduler.js


var QueueScheduler_QueueScheduler = (function (_super) {
    Object(tslib_es6["e" /* __extends */])(QueueScheduler, _super);
    function QueueScheduler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return QueueScheduler;
}(AsyncScheduler["a" /* AsyncScheduler */]));

//# sourceMappingURL=QueueScheduler.js.map
// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/scheduler/queue.js


var queueScheduler = new QueueScheduler_QueueScheduler(QueueAction_QueueAction);
var queue = queueScheduler;
//# sourceMappingURL=queue.js.map
// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/scheduler/AnimationFrameAction.js



var AnimationFrameAction_AnimationFrameAction = (function (_super) {
    Object(tslib_es6["e" /* __extends */])(AnimationFrameAction, _super);
    function AnimationFrameAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
    }
    AnimationFrameAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        if (delay !== null && delay > 0) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        scheduler.actions.push(this);
        return scheduler._scheduled || (scheduler._scheduled = animationFrameProvider.requestAnimationFrame(function () { return scheduler.flush(undefined); }));
    };
    AnimationFrameAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        if ((delay != null && delay > 0) || (delay == null && this.delay > 0)) {
            return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
        }
        if (scheduler.actions.length === 0) {
            animationFrameProvider.cancelAnimationFrame(id);
            scheduler._scheduled = undefined;
        }
        return undefined;
    };
    return AnimationFrameAction;
}(AsyncAction["a" /* AsyncAction */]));

//# sourceMappingURL=AnimationFrameAction.js.map
// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/scheduler/AnimationFrameScheduler.js


var AnimationFrameScheduler_AnimationFrameScheduler = (function (_super) {
    Object(tslib_es6["e" /* __extends */])(AnimationFrameScheduler, _super);
    function AnimationFrameScheduler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AnimationFrameScheduler.prototype.flush = function (action) {
        this._active = true;
        this._scheduled = undefined;
        var actions = this.actions;
        var error;
        var index = -1;
        action = action || actions.shift();
        var count = actions.length;
        do {
            if ((error = action.execute(action.state, action.delay))) {
                break;
            }
        } while (++index < count && (action = actions.shift()));
        this._active = false;
        if (error) {
            while (++index < count && (action = actions.shift())) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AnimationFrameScheduler;
}(AsyncScheduler["a" /* AsyncScheduler */]));

//# sourceMappingURL=AnimationFrameScheduler.js.map
// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/scheduler/animationFrame.js


var animationFrameScheduler = new AnimationFrameScheduler_AnimationFrameScheduler(AnimationFrameAction_AnimationFrameAction);
var animationFrame = animationFrameScheduler;
//# sourceMappingURL=animationFrame.js.map
// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/scheduler/VirtualTimeScheduler.js




var VirtualTimeScheduler_VirtualTimeScheduler = (function (_super) {
    Object(tslib_es6["e" /* __extends */])(VirtualTimeScheduler, _super);
    function VirtualTimeScheduler(schedulerActionCtor, maxFrames) {
        if (schedulerActionCtor === void 0) { schedulerActionCtor = VirtualTimeScheduler_VirtualAction; }
        if (maxFrames === void 0) { maxFrames = Infinity; }
        var _this = _super.call(this, schedulerActionCtor, function () { return _this.frame; }) || this;
        _this.maxFrames = maxFrames;
        _this.frame = 0;
        _this.index = -1;
        return _this;
    }
    VirtualTimeScheduler.prototype.flush = function () {
        var _a = this, actions = _a.actions, maxFrames = _a.maxFrames;
        var error;
        var action;
        while ((action = actions[0]) && action.delay <= maxFrames) {
            actions.shift();
            this.frame = action.delay;
            if ((error = action.execute(action.state, action.delay))) {
                break;
            }
        }
        if (error) {
            while ((action = actions.shift())) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    VirtualTimeScheduler.frameTimeFactor = 10;
    return VirtualTimeScheduler;
}(AsyncScheduler["a" /* AsyncScheduler */]));

var VirtualTimeScheduler_VirtualAction = (function (_super) {
    Object(tslib_es6["e" /* __extends */])(VirtualAction, _super);
    function VirtualAction(scheduler, work, index) {
        if (index === void 0) { index = (scheduler.index += 1); }
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        _this.index = index;
        _this.active = true;
        _this.index = scheduler.index = index;
        return _this;
    }
    VirtualAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        if (Number.isFinite(delay)) {
            if (!this.id) {
                return _super.prototype.schedule.call(this, state, delay);
            }
            this.active = false;
            var action = new VirtualAction(this.scheduler, this.work);
            this.add(action);
            return action.schedule(state, delay);
        }
        else {
            return Subscription["b" /* Subscription */].EMPTY;
        }
    };
    VirtualAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        this.delay = scheduler.frame + delay;
        var actions = scheduler.actions;
        actions.push(this);
        actions.sort(VirtualAction.sortActions);
        return true;
    };
    VirtualAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        return undefined;
    };
    VirtualAction.prototype._execute = function (state, delay) {
        if (this.active === true) {
            return _super.prototype._execute.call(this, state, delay);
        }
    };
    VirtualAction.sortActions = function (a, b) {
        if (a.delay === b.delay) {
            if (a.index === b.index) {
                return 0;
            }
            else if (a.index > b.index) {
                return 1;
            }
            else {
                return -1;
            }
        }
        else if (a.delay > b.delay) {
            return 1;
        }
        else {
            return -1;
        }
    };
    return VirtualAction;
}(AsyncAction["a" /* AsyncAction */]));

//# sourceMappingURL=VirtualTimeScheduler.js.map
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/Scheduler.js
var Scheduler = __webpack_require__(90);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/Subscriber.js + 1 modules
var Subscriber = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/Notification.js
var Notification = __webpack_require__(43);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/util/pipe.js
var pipe = __webpack_require__(53);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/util/noop.js
var noop = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/util/identity.js
var identity = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/util/isFunction.js
var isFunction = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/isObservable.js


function isObservable(obj) {
    return !!obj && (obj instanceof Observable["a" /* Observable */] || (Object(isFunction["a" /* isFunction */])(obj.lift) && Object(isFunction["a" /* isFunction */])(obj.subscribe)));
}
//# sourceMappingURL=isObservable.js.map
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/util/EmptyError.js
var EmptyError = __webpack_require__(20);

// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/lastValueFrom.js

function lastValueFrom(source, config) {
    var hasConfig = typeof config === 'object';
    return new Promise(function (resolve, reject) {
        var _hasValue = false;
        var _value;
        source.subscribe({
            next: function (value) {
                _value = value;
                _hasValue = true;
            },
            error: reject,
            complete: function () {
                if (_hasValue) {
                    resolve(_value);
                }
                else if (hasConfig) {
                    resolve(config.defaultValue);
                }
                else {
                    reject(new EmptyError["a" /* EmptyError */]());
                }
            },
        });
    });
}
//# sourceMappingURL=lastValueFrom.js.map
// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/firstValueFrom.js


function firstValueFrom(source, config) {
    var hasConfig = typeof config === 'object';
    return new Promise(function (resolve, reject) {
        var subscriber = new Subscriber["a" /* SafeSubscriber */]({
            next: function (value) {
                resolve(value);
                subscriber.unsubscribe();
            },
            error: reject,
            complete: function () {
                if (hasConfig) {
                    resolve(config.defaultValue);
                }
                else {
                    reject(new EmptyError["a" /* EmptyError */]());
                }
            },
        });
        source.subscribe(subscriber);
    });
}
//# sourceMappingURL=firstValueFrom.js.map
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/util/ArgumentOutOfRangeError.js
var ArgumentOutOfRangeError = __webpack_require__(91);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/util/NotFoundError.js
var NotFoundError = __webpack_require__(173);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/util/ObjectUnsubscribedError.js
var ObjectUnsubscribedError = __webpack_require__(170);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/util/SequenceError.js
var SequenceError = __webpack_require__(174);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/timeout.js
var timeout = __webpack_require__(48);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/util/UnsubscriptionError.js
var UnsubscriptionError = __webpack_require__(83);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/util/isScheduler.js
var isScheduler = __webpack_require__(55);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/subscribeOn.js
var subscribeOn = __webpack_require__(62);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/util/mapOneOrManyArgs.js
var mapOneOrManyArgs = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/observeOn.js
var observeOn = __webpack_require__(63);

// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/observable/bindCallbackInternals.js







function bindCallbackInternals(isNodeStyle, callbackFunc, resultSelector, scheduler) {
    if (resultSelector) {
        if (Object(isScheduler["a" /* isScheduler */])(resultSelector)) {
            scheduler = resultSelector;
        }
        else {
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return bindCallbackInternals(isNodeStyle, callbackFunc, scheduler)
                    .apply(this, args)
                    .pipe(Object(mapOneOrManyArgs["a" /* mapOneOrManyArgs */])(resultSelector));
            };
        }
    }
    if (scheduler) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return bindCallbackInternals(isNodeStyle, callbackFunc)
                .apply(this, args)
                .pipe(Object(subscribeOn["a" /* subscribeOn */])(scheduler), Object(observeOn["a" /* observeOn */])(scheduler));
        };
    }
    return function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var subject = new AsyncSubject["a" /* AsyncSubject */]();
        var uninitialized = true;
        return new Observable["a" /* Observable */](function (subscriber) {
            var subs = subject.subscribe(subscriber);
            if (uninitialized) {
                uninitialized = false;
                var isAsync_1 = false;
                var isComplete_1 = false;
                callbackFunc.apply(_this, Object(tslib_es6["h" /* __spreadArray */])(Object(tslib_es6["h" /* __spreadArray */])([], Object(tslib_es6["g" /* __read */])(args)), [
                    function () {
                        var results = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            results[_i] = arguments[_i];
                        }
                        if (isNodeStyle) {
                            var err = results.shift();
                            if (err != null) {
                                subject.error(err);
                                return;
                            }
                        }
                        subject.next(1 < results.length ? results : results[0]);
                        isComplete_1 = true;
                        if (isAsync_1) {
                            subject.complete();
                        }
                    },
                ]));
                if (isComplete_1) {
                    subject.complete();
                }
                isAsync_1 = true;
            }
            return subs;
        });
    };
}
//# sourceMappingURL=bindCallbackInternals.js.map
// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/observable/bindCallback.js

function bindCallback(callbackFunc, resultSelector, scheduler) {
    return bindCallbackInternals(false, callbackFunc, resultSelector, scheduler);
}
//# sourceMappingURL=bindCallback.js.map
// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/observable/bindNodeCallback.js

function bindNodeCallback(callbackFunc, resultSelector, scheduler) {
    return bindCallbackInternals(true, callbackFunc, resultSelector, scheduler);
}
//# sourceMappingURL=bindNodeCallback.js.map
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/observable/combineLatest.js
var combineLatest = __webpack_require__(81);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/observable/concat.js
var concat = __webpack_require__(44);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/observable/defer.js
var defer = __webpack_require__(40);

// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/observable/connectable.js



var DEFAULT_CONFIG = {
    connector: function () { return new Subject["a" /* Subject */](); },
    resetOnDisconnect: true,
};
function connectable(source, config) {
    if (config === void 0) { config = DEFAULT_CONFIG; }
    var connection = null;
    var connector = config.connector, _a = config.resetOnDisconnect, resetOnDisconnect = _a === void 0 ? true : _a;
    var subject = connector();
    var result = new Observable["a" /* Observable */](function (subscriber) {
        return subject.subscribe(subscriber);
    });
    result.connect = function () {
        if (!connection || connection.closed) {
            connection = Object(defer["a" /* defer */])(function () { return source; }).subscribe(subject);
            if (resetOnDisconnect) {
                connection.add(function () { return (subject = connector()); });
            }
        }
        return connection;
    };
    return result;
}
//# sourceMappingURL=connectable.js.map
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/observable/empty.js
var empty = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/util/argsArgArrayOrObject.js
var argsArgArrayOrObject = __webpack_require__(194);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/observable/from.js
var from = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/util/args.js
var util_args = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js
var OperatorSubscriber = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/util/createObject.js
var createObject = __webpack_require__(195);

// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/observable/forkJoin.js







function forkJoin() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var resultSelector = Object(util_args["b" /* popResultSelector */])(args);
    var _a = Object(argsArgArrayOrObject["a" /* argsArgArrayOrObject */])(args), sources = _a.args, keys = _a.keys;
    var result = new Observable["a" /* Observable */](function (subscriber) {
        var length = sources.length;
        if (!length) {
            subscriber.complete();
            return;
        }
        var values = new Array(length);
        var remainingCompletions = length;
        var remainingEmissions = length;
        var _loop_1 = function (sourceIndex) {
            var hasValue = false;
            Object(from["c" /* innerFrom */])(sources[sourceIndex]).subscribe(new OperatorSubscriber["a" /* OperatorSubscriber */](subscriber, function (value) {
                if (!hasValue) {
                    hasValue = true;
                    remainingEmissions--;
                }
                values[sourceIndex] = value;
            }, function () {
                if (!--remainingCompletions || !hasValue) {
                    if (!remainingEmissions) {
                        subscriber.next(keys ? Object(createObject["a" /* createObject */])(keys, values) : values);
                    }
                    subscriber.complete();
                }
            }));
        };
        for (var sourceIndex = 0; sourceIndex < length; sourceIndex++) {
            _loop_1(sourceIndex);
        }
    });
    return resultSelector ? result.pipe(Object(mapOneOrManyArgs["a" /* mapOneOrManyArgs */])(resultSelector)) : result;
}
//# sourceMappingURL=forkJoin.js.map
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js
var mergeMap = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/util/isArrayLike.js
var isArrayLike = __webpack_require__(86);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/observable/fromArray.js
var fromArray = __webpack_require__(31);

// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/observable/fromEvent.js







var nodeEventEmitterMethods = ['addListener', 'removeListener'];
var eventTargetMethods = ['addEventListener', 'removeEventListener'];
var jqueryMethods = ['on', 'off'];
function fromEvent(target, eventName, options, resultSelector) {
    if (Object(isFunction["a" /* isFunction */])(options)) {
        resultSelector = options;
        options = undefined;
    }
    if (resultSelector) {
        return fromEvent(target, eventName, options).pipe(Object(mapOneOrManyArgs["a" /* mapOneOrManyArgs */])(resultSelector));
    }
    var _a = Object(tslib_es6["g" /* __read */])(isEventTarget(target)
        ? eventTargetMethods.map(function (methodName) { return function (handler) { return target[methodName](eventName, handler, options); }; })
        :
            isNodeStyleEventEmitter(target)
                ? nodeEventEmitterMethods.map(toCommonHandlerRegistry(target, eventName))
                : isJQueryStyleEventEmitter(target)
                    ? jqueryMethods.map(toCommonHandlerRegistry(target, eventName))
                    : [], 2), add = _a[0], remove = _a[1];
    if (!add) {
        if (Object(isArrayLike["a" /* isArrayLike */])(target)) {
            return Object(mergeMap["a" /* mergeMap */])(function (subTarget) { return fromEvent(subTarget, eventName, options); })(Object(fromArray["a" /* internalFromArray */])(target));
        }
    }
    if (!add) {
        throw new TypeError('Invalid event target');
    }
    return new Observable["a" /* Observable */](function (subscriber) {
        var handler = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return subscriber.next(1 < args.length ? args : args[0]);
        };
        add(handler);
        return function () { return remove(handler); };
    });
}
function toCommonHandlerRegistry(target, eventName) {
    return function (methodName) { return function (handler) { return target[methodName](eventName, handler); }; };
}
function isNodeStyleEventEmitter(target) {
    return Object(isFunction["a" /* isFunction */])(target.addListener) && Object(isFunction["a" /* isFunction */])(target.removeListener);
}
function isJQueryStyleEventEmitter(target) {
    return Object(isFunction["a" /* isFunction */])(target.on) && Object(isFunction["a" /* isFunction */])(target.off);
}
function isEventTarget(target) {
    return Object(isFunction["a" /* isFunction */])(target.addEventListener) && Object(isFunction["a" /* isFunction */])(target.removeEventListener);
}
//# sourceMappingURL=fromEvent.js.map
// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/observable/fromEventPattern.js



function fromEventPattern(addHandler, removeHandler, resultSelector) {
    if (resultSelector) {
        return fromEventPattern(addHandler, removeHandler).pipe(Object(mapOneOrManyArgs["a" /* mapOneOrManyArgs */])(resultSelector));
    }
    return new Observable["a" /* Observable */](function (subscriber) {
        var handler = function () {
            var e = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                e[_i] = arguments[_i];
            }
            return subscriber.next(e.length === 1 ? e[0] : e);
        };
        var retValue = addHandler(handler);
        return Object(isFunction["a" /* isFunction */])(removeHandler) ? function () { return removeHandler(handler, retValue); } : undefined;
    });
}
//# sourceMappingURL=fromEventPattern.js.map
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/scheduled/scheduleIterable.js
var scheduleIterable = __webpack_require__(191);

// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/observable/generate.js





function generate(initialStateOrOptions, condition, iterate, resultSelectorOrScheduler, scheduler) {
    var _a, _b;
    var resultSelector;
    var initialState;
    if (arguments.length === 1) {
        (_a = initialStateOrOptions, initialState = _a.initialState, condition = _a.condition, iterate = _a.iterate, _b = _a.resultSelector, resultSelector = _b === void 0 ? identity["a" /* identity */] : _b, scheduler = _a.scheduler);
    }
    else {
        initialState = initialStateOrOptions;
        if (!resultSelectorOrScheduler || Object(isScheduler["a" /* isScheduler */])(resultSelectorOrScheduler)) {
            resultSelector = identity["a" /* identity */];
            scheduler = resultSelectorOrScheduler;
        }
        else {
            resultSelector = resultSelectorOrScheduler;
        }
    }
    function gen() {
        var state;
        return Object(tslib_es6["f" /* __generator */])(this, function (_a) {
            switch (_a.label) {
                case 0:
                    state = initialState;
                    _a.label = 1;
                case 1:
                    if (!(!condition || condition(state))) return [3, 4];
                    return [4, resultSelector(state)];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    state = iterate(state);
                    return [3, 1];
                case 4: return [2];
            }
        });
    }
    return Object(defer["a" /* defer */])((scheduler
        ?
            function () { return Object(scheduleIterable["a" /* scheduleIterable */])(gen(), scheduler); }
        :
            gen));
}
//# sourceMappingURL=generate.js.map
// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/observable/iif.js

function iif(condition, trueResult, falseResult) {
    return Object(defer["a" /* defer */])(function () { return (condition() ? trueResult : falseResult); });
}
//# sourceMappingURL=iif.js.map
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/observable/interval.js
var interval = __webpack_require__(175);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/mergeAll.js
var mergeAll = __webpack_require__(36);

// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/observable/merge.js





function merge() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var scheduler = Object(util_args["c" /* popScheduler */])(args);
    var concurrent = Object(util_args["a" /* popNumber */])(args, Infinity);
    var sources = args;
    return !sources.length
        ?
            empty["a" /* EMPTY */]
        : sources.length === 1
            ?
                Object(from["c" /* innerFrom */])(sources[0])
            :
                Object(mergeAll["a" /* mergeAll */])(concurrent)(Object(fromArray["a" /* internalFromArray */])(sources, scheduler));
}
//# sourceMappingURL=merge.js.map
// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/observable/never.js


var NEVER = new Observable["a" /* Observable */](noop["a" /* noop */]);
function never() {
    return NEVER;
}
//# sourceMappingURL=never.js.map
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/observable/of.js
var of = __webpack_require__(80);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/onErrorResumeNext.js
var onErrorResumeNext = __webpack_require__(176);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/util/argsOrArgArray.js
var argsOrArgArray = __webpack_require__(24);

// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/observable/onErrorResumeNext.js



function onErrorResumeNext_onErrorResumeNext() {
    var sources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sources[_i] = arguments[_i];
    }
    return Object(onErrorResumeNext["a" /* onErrorResumeNext */])(Object(argsOrArgArray["a" /* argsOrArgArray */])(sources))(empty["a" /* EMPTY */]);
}
//# sourceMappingURL=onErrorResumeNext.js.map
// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/observable/pairs.js

function pairs(obj, scheduler) {
    return Object(from["a" /* from */])(Object.entries(obj), scheduler);
}
//# sourceMappingURL=pairs.js.map
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/util/not.js
var not = __webpack_require__(196);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/filter.js
var filter = __webpack_require__(17);

// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/observable/partition.js



function partition(source, predicate, thisArg) {
    return [Object(filter["a" /* filter */])(predicate, thisArg)(Object(from["c" /* innerFrom */])(source)), Object(filter["a" /* filter */])(Object(not["a" /* not */])(predicate, thisArg))(Object(from["c" /* innerFrom */])(source))];
}
//# sourceMappingURL=partition.js.map
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/observable/race.js
var race = __webpack_require__(177);

// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/observable/range.js


function range(start, count, scheduler) {
    if (count == null) {
        count = start;
        start = 0;
    }
    if (count <= 0) {
        return empty["a" /* EMPTY */];
    }
    var end = count + start;
    return new Observable["a" /* Observable */](scheduler
        ?
            function (subscriber) {
                var n = start;
                return scheduler.schedule(function () {
                    if (n < end) {
                        subscriber.next(n++);
                        this.schedule();
                    }
                    else {
                        subscriber.complete();
                    }
                });
            }
        :
            function (subscriber) {
                var n = start;
                while (n < end && !subscriber.closed) {
                    subscriber.next(n++);
                }
                subscriber.complete();
            });
}
//# sourceMappingURL=range.js.map
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/observable/throwError.js
var throwError = __webpack_require__(172);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/observable/timer.js
var timer = __webpack_require__(30);

// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/observable/using.js



function using(resourceFactory, observableFactory) {
    return new Observable["a" /* Observable */](function (subscriber) {
        var resource = resourceFactory();
        var result = observableFactory(resource);
        var source = result ? Object(from["c" /* innerFrom */])(result) : empty["a" /* EMPTY */];
        source.subscribe(subscriber);
        return function () {
            if (resource) {
                resource.unsubscribe();
            }
        };
    });
}
//# sourceMappingURL=using.js.map
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/observable/zip.js
var zip = __webpack_require__(82);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/scheduled/scheduled.js + 4 modules
var scheduled = __webpack_require__(183);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/config.js
var internal_config = __webpack_require__(27);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/audit.js
var audit = __webpack_require__(64);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/auditTime.js
var auditTime = __webpack_require__(95);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/buffer.js
var buffer = __webpack_require__(96);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/bufferCount.js
var bufferCount = __webpack_require__(97);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/bufferTime.js
var bufferTime = __webpack_require__(98);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/bufferToggle.js
var bufferToggle = __webpack_require__(99);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/bufferWhen.js
var bufferWhen = __webpack_require__(100);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/catchError.js
var catchError = __webpack_require__(101);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/combineAll.js
var combineAll = __webpack_require__(102);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/combineLatestAll.js
var combineLatestAll = __webpack_require__(65);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/combineLatestWith.js
var combineLatestWith = __webpack_require__(103);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/concatAll.js
var concatAll = __webpack_require__(49);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/concatMap.js
var concatMap = __webpack_require__(57);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/concatMapTo.js
var concatMapTo = __webpack_require__(104);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/concatWith.js
var concatWith = __webpack_require__(105);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/connect.js + 1 modules
var connect = __webpack_require__(52);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/count.js
var operators_count = __webpack_require__(106);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/debounce.js
var debounce = __webpack_require__(107);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/debounceTime.js
var debounceTime = __webpack_require__(108);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/defaultIfEmpty.js
var defaultIfEmpty = __webpack_require__(37);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/delay.js
var operators_delay = __webpack_require__(109);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/delayWhen.js
var delayWhen = __webpack_require__(67);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/dematerialize.js
var dematerialize = __webpack_require__(110);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/distinct.js
var distinct = __webpack_require__(111);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/distinctUntilChanged.js
var distinctUntilChanged = __webpack_require__(70);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/distinctUntilKeyChanged.js
var distinctUntilKeyChanged = __webpack_require__(112);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/elementAt.js
var elementAt = __webpack_require__(113);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/endWith.js
var endWith = __webpack_require__(114);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/every.js
var every = __webpack_require__(115);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/exhaust.js
var exhaust = __webpack_require__(116);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/exhaustAll.js
var exhaustAll = __webpack_require__(71);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/exhaustMap.js
var exhaustMap = __webpack_require__(117);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/expand.js
var expand = __webpack_require__(118);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/finalize.js
var finalize = __webpack_require__(119);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/find.js
var find = __webpack_require__(72);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/findIndex.js
var findIndex = __webpack_require__(120);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/first.js
var first = __webpack_require__(121);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/groupBy.js
var groupBy = __webpack_require__(122);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/ignoreElements.js
var ignoreElements = __webpack_require__(68);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/isEmpty.js
var isEmpty = __webpack_require__(123);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/last.js
var last = __webpack_require__(124);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/map.js
var map = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/mapTo.js
var mapTo = __webpack_require__(69);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/materialize.js
var materialize = __webpack_require__(125);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/max.js
var max = __webpack_require__(126);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/flatMap.js
var flatMap = __webpack_require__(127);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/mergeMapTo.js
var mergeMapTo = __webpack_require__(128);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/mergeScan.js
var mergeScan = __webpack_require__(129);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/mergeWith.js
var mergeWith = __webpack_require__(130);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/min.js
var min = __webpack_require__(131);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/multicast.js
var multicast = __webpack_require__(50);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/pairwise.js
var pairwise = __webpack_require__(132);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/pluck.js
var pluck = __webpack_require__(133);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/publish.js
var publish = __webpack_require__(134);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/publishBehavior.js
var publishBehavior = __webpack_require__(135);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/publishLast.js
var publishLast = __webpack_require__(136);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/publishReplay.js
var publishReplay = __webpack_require__(137);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/raceWith.js
var raceWith = __webpack_require__(74);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/reduce.js
var reduce = __webpack_require__(29);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/repeat.js
var repeat = __webpack_require__(138);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/repeatWhen.js
var repeatWhen = __webpack_require__(139);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/retry.js
var retry = __webpack_require__(140);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/retryWhen.js
var retryWhen = __webpack_require__(141);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/refCount.js
var refCount = __webpack_require__(61);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/sample.js
var sample = __webpack_require__(75);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/sampleTime.js
var sampleTime = __webpack_require__(142);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/scan.js
var scan = __webpack_require__(76);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/sequenceEqual.js
var sequenceEqual = __webpack_require__(143);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/share.js
var share = __webpack_require__(77);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/shareReplay.js
var shareReplay = __webpack_require__(144);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/single.js
var single = __webpack_require__(145);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/skip.js
var skip = __webpack_require__(146);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/skipLast.js
var skipLast = __webpack_require__(147);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/skipUntil.js
var skipUntil = __webpack_require__(148);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/skipWhile.js
var skipWhile = __webpack_require__(149);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/startWith.js
var startWith = __webpack_require__(150);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/switchAll.js
var switchAll = __webpack_require__(151);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/switchMap.js
var switchMap = __webpack_require__(33);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/switchMapTo.js
var switchMapTo = __webpack_require__(152);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/switchScan.js
var switchScan = __webpack_require__(153);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/take.js
var take = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/takeLast.js
var takeLast = __webpack_require__(73);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js
var takeUntil = __webpack_require__(154);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/takeWhile.js
var takeWhile = __webpack_require__(155);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/tap.js
var tap = __webpack_require__(156);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/throttle.js
var throttle = __webpack_require__(58);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/throttleTime.js
var throttleTime = __webpack_require__(157);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/throwIfEmpty.js
var throwIfEmpty = __webpack_require__(38);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/timeInterval.js
var timeInterval = __webpack_require__(158);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/timeoutWith.js
var timeoutWith = __webpack_require__(159);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/timestamp.js
var timestamp = __webpack_require__(160);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/toArray.js
var toArray = __webpack_require__(66);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/window.js
var operators_window = __webpack_require__(161);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/windowCount.js
var windowCount = __webpack_require__(162);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/windowTime.js
var windowTime = __webpack_require__(163);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/windowToggle.js
var windowToggle = __webpack_require__(164);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/windowWhen.js
var windowWhen = __webpack_require__(165);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/withLatestFrom.js
var withLatestFrom = __webpack_require__(166);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/zipAll.js
var zipAll = __webpack_require__(167);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/zipWith.js
var zipWith = __webpack_require__(168);

// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/index.js







































































































































































//# sourceMappingURL=index.js.map

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "filter", function() { return /* reexport */ dist_esm_filter; });
__webpack_require__.d(__webpack_exports__, "flatMap", function() { return /* reexport */ dist_esm_flatMap; });
__webpack_require__.d(__webpack_exports__, "interval", function() { return /* reexport */ interval; });
__webpack_require__.d(__webpack_exports__, "map", function() { return /* reexport */ dist_esm_map; });
__webpack_require__.d(__webpack_exports__, "merge", function() { return /* reexport */ dist_esm_merge; });
__webpack_require__.d(__webpack_exports__, "multicast", function() { return /* reexport */ multicast["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "Observable", function() { return /* reexport */ dist_esm_observable["b" /* default */]; });
__webpack_require__.d(__webpack_exports__, "scan", function() { return /* reexport */ dist_esm_scan; });
__webpack_require__.d(__webpack_exports__, "Subject", function() { return /* reexport */ subject["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "unsubscribe", function() { return /* reexport */ unsubscribe["a" /* default */]; });

// CONCATENATED MODULE: ./node_modules/observable-fns/dist.esm/_scheduler.js
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class AsyncSerialScheduler {
    constructor(observer) {
        this._baseObserver = observer;
        this._pendingPromises = new Set();
    }
    complete() {
        Promise.all(this._pendingPromises)
            .then(() => this._baseObserver.complete())
            .catch(error => this._baseObserver.error(error));
    }
    error(error) {
        this._baseObserver.error(error);
    }
    schedule(task) {
        const prevPromisesCompletion = Promise.all(this._pendingPromises);
        const values = [];
        const next = (value) => values.push(value);
        const promise = Promise.resolve()
            .then(() => __awaiter(this, void 0, void 0, function* () {
            yield prevPromisesCompletion;
            yield task(next);
            this._pendingPromises.delete(promise);
            for (const value of values) {
                this._baseObserver.next(value);
            }
        }))
            .catch(error => {
            this._pendingPromises.delete(promise);
            this._baseObserver.error(error);
        });
        this._pendingPromises.add(promise);
    }
}

// EXTERNAL MODULE: ./node_modules/observable-fns/dist.esm/observable.js
var dist_esm_observable = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/observable-fns/dist.esm/unsubscribe.js
var unsubscribe = __webpack_require__(21);

// CONCATENATED MODULE: ./node_modules/observable-fns/dist.esm/filter.js
var filter_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



/**
 * Filters the values emitted by another observable.
 * To be applied to an input observable using `pipe()`.
 */
function filter(test) {
    return (observable) => {
        return new dist_esm_observable["b" /* default */](observer => {
            const scheduler = new AsyncSerialScheduler(observer);
            const subscription = observable.subscribe({
                complete() {
                    scheduler.complete();
                },
                error(error) {
                    scheduler.error(error);
                },
                next(input) {
                    scheduler.schedule((next) => filter_awaiter(this, void 0, void 0, function* () {
                        if (yield test(input)) {
                            next(input);
                        }
                    }));
                }
            });
            return () => Object(unsubscribe["a" /* default */])(subscription);
        });
    };
}
/* harmony default export */ var dist_esm_filter = (filter);

// EXTERNAL MODULE: ./node_modules/observable-fns/dist.esm/_symbols.js
var _symbols = __webpack_require__(45);

// CONCATENATED MODULE: ./node_modules/observable-fns/dist.esm/_util.js
/// <reference lib="es2018" />

function isAsyncIterator(thing) {
    return thing && Object(_symbols["b" /* hasSymbol */])("asyncIterator") && thing[Symbol.asyncIterator];
}
function isIterator(thing) {
    return thing && Object(_symbols["b" /* hasSymbol */])("iterator") && thing[Symbol.iterator];
}

// CONCATENATED MODULE: ./node_modules/observable-fns/dist.esm/flatMap.js
var flatMap_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __asyncValues = (undefined && undefined.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};




/**
 * Maps the values emitted by another observable. In contrast to `map()`
 * the `mapper` function returns an array of values that will be emitted
 * separately.
 * Use `flatMap()` to map input values to zero, one or multiple output
 * values. To be applied to an input observable using `pipe()`.
 */
function flatMap(mapper) {
    return (observable) => {
        return new dist_esm_observable["b" /* default */](observer => {
            const scheduler = new AsyncSerialScheduler(observer);
            const subscription = observable.subscribe({
                complete() {
                    scheduler.complete();
                },
                error(error) {
                    scheduler.error(error);
                },
                next(input) {
                    scheduler.schedule((next) => flatMap_awaiter(this, void 0, void 0, function* () {
                        var e_1, _a;
                        const mapped = yield mapper(input);
                        if (isIterator(mapped) || isAsyncIterator(mapped)) {
                            try {
                                for (var mapped_1 = __asyncValues(mapped), mapped_1_1; mapped_1_1 = yield mapped_1.next(), !mapped_1_1.done;) {
                                    const element = mapped_1_1.value;
                                    next(element);
                                }
                            }
                            catch (e_1_1) { e_1 = { error: e_1_1 }; }
                            finally {
                                try {
                                    if (mapped_1_1 && !mapped_1_1.done && (_a = mapped_1.return)) yield _a.call(mapped_1);
                                }
                                finally { if (e_1) throw e_1.error; }
                            }
                        }
                        else {
                            mapped.map(output => next(output));
                        }
                    }));
                }
            });
            return () => Object(unsubscribe["a" /* default */])(subscription);
        });
    };
}
/* harmony default export */ var dist_esm_flatMap = (flatMap);

// CONCATENATED MODULE: ./node_modules/observable-fns/dist.esm/interval.js

/**
 * Creates an observable that yields a new value every `period` milliseconds.
 * The first value emitted is 0, then 1, 2, etc. The first value is not emitted
 * immediately, but after the first interval.
 */
function interval(period) {
    return new dist_esm_observable["a" /* Observable */](observer => {
        let counter = 0;
        const handle = setInterval(() => {
            observer.next(counter++);
        }, period);
        return () => clearInterval(handle);
    });
}

// CONCATENATED MODULE: ./node_modules/observable-fns/dist.esm/map.js
var map_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



/**
 * Maps the values emitted by another observable to different values.
 * To be applied to an input observable using `pipe()`.
 */
function map(mapper) {
    return (observable) => {
        return new dist_esm_observable["b" /* default */](observer => {
            const scheduler = new AsyncSerialScheduler(observer);
            const subscription = observable.subscribe({
                complete() {
                    scheduler.complete();
                },
                error(error) {
                    scheduler.error(error);
                },
                next(input) {
                    scheduler.schedule((next) => map_awaiter(this, void 0, void 0, function* () {
                        const mapped = yield mapper(input);
                        next(mapped);
                    }));
                }
            });
            return () => Object(unsubscribe["a" /* default */])(subscription);
        });
    };
}
/* harmony default export */ var dist_esm_map = (map);

// CONCATENATED MODULE: ./node_modules/observable-fns/dist.esm/merge.js


function merge(...observables) {
    if (observables.length === 0) {
        return dist_esm_observable["a" /* Observable */].from([]);
    }
    return new dist_esm_observable["a" /* Observable */](observer => {
        let completed = 0;
        const subscriptions = observables.map(input => {
            return input.subscribe({
                error(error) {
                    observer.error(error);
                    unsubscribeAll();
                },
                next(value) {
                    observer.next(value);
                },
                complete() {
                    if (++completed === observables.length) {
                        observer.complete();
                        unsubscribeAll();
                    }
                }
            });
        });
        const unsubscribeAll = () => {
            subscriptions.forEach(subscription => Object(unsubscribe["a" /* default */])(subscription));
        };
        return unsubscribeAll;
    });
}
/* harmony default export */ var dist_esm_merge = (merge);

// EXTERNAL MODULE: ./node_modules/observable-fns/dist.esm/multicast.js
var multicast = __webpack_require__(207);

// CONCATENATED MODULE: ./node_modules/observable-fns/dist.esm/scan.js
var scan_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function scan(accumulator, seed) {
    return (observable) => {
        return new dist_esm_observable["b" /* default */](observer => {
            let accumulated;
            let index = 0;
            const scheduler = new AsyncSerialScheduler(observer);
            const subscription = observable.subscribe({
                complete() {
                    scheduler.complete();
                },
                error(error) {
                    scheduler.error(error);
                },
                next(value) {
                    scheduler.schedule((next) => scan_awaiter(this, void 0, void 0, function* () {
                        const prevAcc = index === 0
                            ? (typeof seed === "undefined" ? value : seed)
                            : accumulated;
                        accumulated = yield accumulator(prevAcc, value, index++);
                        next(accumulated);
                    }));
                }
            });
            return () => Object(unsubscribe["a" /* default */])(subscription);
        });
    };
}
/* harmony default export */ var dist_esm_scan = (scan);

// EXTERNAL MODULE: ./node_modules/observable-fns/dist.esm/subject.js
var subject = __webpack_require__(182);

// CONCATENATED MODULE: ./node_modules/observable-fns/dist.esm/index.js












/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeoutError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return timeout; });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _util_isDate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _observable_from__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var _util_createErrorClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22);
/* harmony import */ var _util_caughtSchedule__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(192);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2);







var TimeoutError = Object(_util_createErrorClass__WEBPACK_IMPORTED_MODULE_4__[/* createErrorClass */ "a"])(function (_super) {
    return function TimeoutErrorImpl(info) {
        if (info === void 0) { info = null; }
        _super(this);
        this.message = 'Timeout has occurred';
        this.name = 'TimeoutError';
        this.info = info;
    };
});
function timeout(config, schedulerArg) {
    var _a = (Object(_util_isDate__WEBPACK_IMPORTED_MODULE_1__[/* isValidDate */ "a"])(config)
        ? { first: config }
        : typeof config === 'number'
            ? { each: config }
            : config), first = _a.first, each = _a.each, _b = _a.with, _with = _b === void 0 ? timeoutErrorFactory : _b, _c = _a.scheduler, scheduler = _c === void 0 ? schedulerArg !== null && schedulerArg !== void 0 ? schedulerArg : _scheduler_async__WEBPACK_IMPORTED_MODULE_0__[/* asyncScheduler */ "b"] : _c, _d = _a.meta, meta = _d === void 0 ? null : _d;
    if (first == null && each == null) {
        throw new TypeError('No timeout provided.');
    }
    return Object(_util_lift__WEBPACK_IMPORTED_MODULE_2__[/* operate */ "b"])(function (source, subscriber) {
        var originalSourceSubscription;
        var timerSubscription;
        var lastValue = null;
        var seen = 0;
        var startTimer = function (delay) {
            timerSubscription = Object(_util_caughtSchedule__WEBPACK_IMPORTED_MODULE_5__[/* caughtSchedule */ "a"])(subscriber, scheduler, function () {
                originalSourceSubscription.unsubscribe();
                Object(_observable_from__WEBPACK_IMPORTED_MODULE_3__[/* innerFrom */ "c"])(_with({
                    meta: meta,
                    lastValue: lastValue,
                    seen: seen,
                })).subscribe(subscriber);
            }, delay);
        };
        originalSourceSubscription = source.subscribe(new _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_6__[/* OperatorSubscriber */ "a"](subscriber, function (value) {
            timerSubscription === null || timerSubscription === void 0 ? void 0 : timerSubscription.unsubscribe();
            seen++;
            subscriber.next((lastValue = value));
            each > 0 && startTimer(each);
        }, undefined, undefined, function () {
            if (!(timerSubscription === null || timerSubscription === void 0 ? void 0 : timerSubscription.closed)) {
                timerSubscription === null || timerSubscription === void 0 ? void 0 : timerSubscription.unsubscribe();
            }
            lastValue = null;
        }));
        startTimer(first != null ? (typeof first === 'number' ? first : +first - scheduler.now()) : each);
    });
}
function timeoutErrorFactory(info) {
    throw new TimeoutError(info);
}
//# sourceMappingURL=timeout.js.map

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return concatAll; });
/* harmony import */ var _mergeAll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);

function concatAll() {
    return Object(_mergeAll__WEBPACK_IMPORTED_MODULE_0__[/* mergeAll */ "a"])(1);
}
//# sourceMappingURL=concatAll.js.map

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return multicast; });
/* harmony import */ var _observable_ConnectableObservable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _connect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52);



function multicast(subjectOrSubjectFactory, selector) {
    var subjectFactory = Object(_util_isFunction__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "a"])(subjectOrSubjectFactory) ? subjectOrSubjectFactory : function () { return subjectOrSubjectFactory; };
    if (Object(_util_isFunction__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "a"])(selector)) {
        return Object(_connect__WEBPACK_IMPORTED_MODULE_2__[/* connect */ "a"])(selector, {
            connector: subjectFactory,
        });
    }
    return function (source) { return new _observable_ConnectableObservable__WEBPACK_IMPORTED_MODULE_0__[/* ConnectableObservable */ "a"](source, subjectFactory); };
}
//# sourceMappingURL=multicast.js.map

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isTransferDescriptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Transfer; });
/* harmony import */ var _symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);

function isTransferable(thing) {
    if (!thing || typeof thing !== "object")
        return false;
    // Don't check too thoroughly, since the list of transferable things in JS might grow over time
    return true;
}
function isTransferDescriptor(thing) {
    return thing && typeof thing === "object" && thing[_symbols__WEBPACK_IMPORTED_MODULE_0__[/* $transferable */ "d"]];
}
function Transfer(payload, transferables) {
    if (!transferables) {
        if (!isTransferable(payload))
            throw Error();
        transferables = [payload];
    }
    return {
        [_symbols__WEBPACK_IMPORTED_MODULE_0__[/* $transferable */ "d"]]: true,
        send: payload,
        transferables
    };
}


/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ connect; });

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/Subject.js
var Subject = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/observable/from.js
var from = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/util/lift.js
var lift = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/Observable.js
var Observable = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/observable/fromSubscribable.js

function fromSubscribable(subscribable) {
    return new Observable["a" /* Observable */](function (subscriber) { return subscribable.subscribe(subscriber); });
}
//# sourceMappingURL=fromSubscribable.js.map
// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/connect.js




var DEFAULT_CONFIG = {
    connector: function () { return new Subject["a" /* Subject */](); },
};
function connect(selector, config) {
    if (config === void 0) { config = DEFAULT_CONFIG; }
    var connector = config.connector;
    return Object(lift["b" /* operate */])(function (source, subscriber) {
        var subject = connector();
        Object(from["a" /* from */])(selector(fromSubscribable(subject))).subscribe(subscriber);
        subscriber.add(source.subscribe(subject));
    });
}
//# sourceMappingURL=connect.js.map

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return pipeFromArray; });
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);

function pipe() {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return pipeFromArray(fns);
}
function pipeFromArray(fns) {
    if (fns.length === 0) {
        return _identity__WEBPACK_IMPORTED_MODULE_0__[/* identity */ "a"];
    }
    if (fns.length === 1) {
        return fns[0];
    }
    return function piped(input) {
        return fns.reduce(function (prev, fn) { return fn(prev); }, input);
    };
}
//# sourceMappingURL=pipe.js.map

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectableObservable; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _operators_refCount__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61);
/* harmony import */ var _operators_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1);






var ConnectableObservable = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "e"])(ConnectableObservable, _super);
    function ConnectableObservable(source, subjectFactory) {
        var _this = _super.call(this) || this;
        _this.source = source;
        _this.subjectFactory = subjectFactory;
        _this._subject = null;
        _this._refCount = 0;
        _this._connection = null;
        if (Object(_util_lift__WEBPACK_IMPORTED_MODULE_5__[/* hasLift */ "a"])(source)) {
            _this.lift = source.lift;
        }
        return _this;
    }
    ConnectableObservable.prototype._subscribe = function (subscriber) {
        return this.getSubject().subscribe(subscriber);
    };
    ConnectableObservable.prototype.getSubject = function () {
        var subject = this._subject;
        if (!subject || subject.isStopped) {
            this._subject = this.subjectFactory();
        }
        return this._subject;
    };
    ConnectableObservable.prototype._teardown = function () {
        this._refCount = 0;
        var _connection = this._connection;
        this._subject = this._connection = null;
        _connection === null || _connection === void 0 ? void 0 : _connection.unsubscribe();
    };
    ConnectableObservable.prototype.connect = function () {
        var _this = this;
        var connection = this._connection;
        if (!connection) {
            connection = this._connection = new _Subscription__WEBPACK_IMPORTED_MODULE_2__[/* Subscription */ "b"]();
            var subject_1 = this.getSubject();
            connection.add(this.source.subscribe(new _operators_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_4__[/* OperatorSubscriber */ "a"](subject_1, undefined, function () {
                _this._teardown();
                subject_1.complete();
            }, function (err) {
                _this._teardown();
                subject_1.error(err);
            }, function () { return _this._teardown(); })));
            if (connection.closed) {
                this._connection = null;
                connection = _Subscription__WEBPACK_IMPORTED_MODULE_2__[/* Subscription */ "b"].EMPTY;
            }
        }
        return connection;
    };
    ConnectableObservable.prototype.refCount = function () {
        return Object(_operators_refCount__WEBPACK_IMPORTED_MODULE_3__[/* refCount */ "a"])()(this);
    };
    return ConnectableObservable;
}(_Observable__WEBPACK_IMPORTED_MODULE_1__[/* Observable */ "a"]));

//# sourceMappingURL=ConnectableObservable.js.map

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isScheduler; });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);

function isScheduler(value) {
    return value && Object(_isFunction__WEBPACK_IMPORTED_MODULE_0__[/* isFunction */ "a"])(value.schedule);
}
//# sourceMappingURL=isScheduler.js.map

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return errorContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return captureError; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);

var context = null;
function errorContext(cb) {
    if (_config__WEBPACK_IMPORTED_MODULE_0__[/* config */ "a"].useDeprecatedSynchronousErrorHandling) {
        var isRoot = !context;
        if (isRoot) {
            context = { errorThrown: false, error: null };
        }
        cb();
        if (isRoot) {
            var _a = context, errorThrown = _a.errorThrown, error = _a.error;
            context = null;
            if (errorThrown) {
                throw error;
            }
        }
    }
    else {
        cb();
    }
}
function captureError(err) {
    if (_config__WEBPACK_IMPORTED_MODULE_0__[/* config */ "a"].useDeprecatedSynchronousErrorHandling && context) {
        context.errorThrown = true;
        context.error = err;
    }
}
//# sourceMappingURL=errorContext.js.map

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return concatMap; });
/* harmony import */ var _mergeMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);


function concatMap(project, resultSelector) {
    return Object(_util_isFunction__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "a"])(resultSelector) ? Object(_mergeMap__WEBPACK_IMPORTED_MODULE_0__[/* mergeMap */ "a"])(project, resultSelector, 1) : Object(_mergeMap__WEBPACK_IMPORTED_MODULE_0__[/* mergeMap */ "a"])(project, 1);
}
//# sourceMappingURL=concatMap.js.map

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return defaultThrottleConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return throttle; });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _observable_from__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);



var defaultThrottleConfig = {
    leading: true,
    trailing: false,
};
function throttle(durationSelector, _a) {
    var _b = _a === void 0 ? defaultThrottleConfig : _a, leading = _b.leading, trailing = _b.trailing;
    return Object(_util_lift__WEBPACK_IMPORTED_MODULE_0__[/* operate */ "b"])(function (source, subscriber) {
        var hasValue = false;
        var sendValue = null;
        var throttled = null;
        var isComplete = false;
        var endThrottling = function () {
            throttled === null || throttled === void 0 ? void 0 : throttled.unsubscribe();
            throttled = null;
            if (trailing) {
                send();
                isComplete && subscriber.complete();
            }
        };
        var cleanupThrottling = function () {
            throttled = null;
            isComplete && subscriber.complete();
        };
        var startThrottle = function (value) {
            return (throttled = Object(_observable_from__WEBPACK_IMPORTED_MODULE_2__[/* innerFrom */ "c"])(durationSelector(value)).subscribe(new _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__[/* OperatorSubscriber */ "a"](subscriber, endThrottling, cleanupThrottling)));
        };
        var send = function () {
            if (hasValue) {
                hasValue = false;
                var value = sendValue;
                sendValue = null;
                subscriber.next(value);
                !isComplete && startThrottle(value);
            }
        };
        source.subscribe(new _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__[/* OperatorSubscriber */ "a"](subscriber, function (value) {
            hasValue = true;
            sendValue = value;
            !(throttled && !throttled.closed) && (leading ? send() : startThrottle(value));
        }, function () {
            isComplete = true;
            !(trailing && hasValue && throttled && !throttled.closed) && subscriber.complete();
        }));
    });
}
//# sourceMappingURL=throttle.js.map

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return readableStreamLikeToAsyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isReadableStreamLike; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);


function readableStreamLikeToAsyncGenerator(readableStream) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __asyncGenerator */ "a"])(this, arguments, function readableStreamLikeToAsyncGenerator_1() {
        var reader, _a, value, done;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __generator */ "f"])(this, function (_b) {
            switch (_b.label) {
                case 0:
                    reader = readableStream.getReader();
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, , 9, 10]);
                    _b.label = 2;
                case 2:
                    if (false) {}
                    return [4, Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __await */ "c"])(reader.read())];
                case 3:
                    _a = _b.sent(), value = _a.value, done = _a.done;
                    if (!done) return [3, 5];
                    return [4, Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __await */ "c"])(void 0)];
                case 4: return [2, _b.sent()];
                case 5: return [4, Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __await */ "c"])(value)];
                case 6: return [4, _b.sent()];
                case 7:
                    _b.sent();
                    return [3, 2];
                case 8: return [3, 10];
                case 9:
                    reader.releaseLock();
                    return [7];
                case 10: return [2];
            }
        });
    });
}
function isReadableStreamLike(obj) {
    return Object(_isFunction__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "a"])(obj === null || obj === void 0 ? void 0 : obj.getReader);
}
//# sourceMappingURL=isReadableStreamLike.js.map

/***/ }),
/* 60 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return refCount; });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);


function refCount() {
    return Object(_util_lift__WEBPACK_IMPORTED_MODULE_0__[/* operate */ "b"])(function (source, subscriber) {
        var connection = null;
        source._refCount++;
        var refCounter = new _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__[/* OperatorSubscriber */ "a"](subscriber, undefined, undefined, undefined, function () {
            if (!source || source._refCount <= 0 || 0 < --source._refCount) {
                connection = null;
                return;
            }
            var sharedConnection = source._connection;
            var conn = connection;
            connection = null;
            if (sharedConnection && (!conn || sharedConnection === conn)) {
                sharedConnection.unsubscribe();
            }
            subscriber.unsubscribe();
        });
        source.subscribe(refCounter);
        if (!refCounter.closed) {
            connection = source.connect();
        }
    });
}
//# sourceMappingURL=refCount.js.map

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return subscribeOn; });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

function subscribeOn(scheduler, delay) {
    if (delay === void 0) { delay = 0; }
    return Object(_util_lift__WEBPACK_IMPORTED_MODULE_0__[/* operate */ "b"])(function (source, subscriber) {
        subscriber.add(scheduler.schedule(function () { return source.subscribe(subscriber); }, delay));
    });
}
//# sourceMappingURL=subscribeOn.js.map

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return observeOn; });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);


function observeOn(scheduler, delay) {
    if (delay === void 0) { delay = 0; }
    return Object(_util_lift__WEBPACK_IMPORTED_MODULE_0__[/* operate */ "b"])(function (source, subscriber) {
        source.subscribe(new _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__[/* OperatorSubscriber */ "a"](subscriber, function (value) { return subscriber.add(scheduler.schedule(function () { return subscriber.next(value); }, delay)); }, function () { return subscriber.add(scheduler.schedule(function () { return subscriber.complete(); }, delay)); }, function (err) { return subscriber.add(scheduler.schedule(function () { return subscriber.error(err); }, delay)); }));
    });
}
//# sourceMappingURL=observeOn.js.map

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return audit; });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _observable_from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);



function audit(durationSelector) {
    return Object(_util_lift__WEBPACK_IMPORTED_MODULE_0__[/* operate */ "b"])(function (source, subscriber) {
        var hasValue = false;
        var lastValue = null;
        var durationSubscriber = null;
        var isComplete = false;
        var endDuration = function () {
            durationSubscriber === null || durationSubscriber === void 0 ? void 0 : durationSubscriber.unsubscribe();
            durationSubscriber = null;
            if (hasValue) {
                hasValue = false;
                var value = lastValue;
                lastValue = null;
                subscriber.next(value);
            }
            isComplete && subscriber.complete();
        };
        var cleanupDuration = function () {
            durationSubscriber = null;
            isComplete && subscriber.complete();
        };
        source.subscribe(new _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__[/* OperatorSubscriber */ "a"](subscriber, function (value) {
            hasValue = true;
            lastValue = value;
            if (!durationSubscriber) {
                Object(_observable_from__WEBPACK_IMPORTED_MODULE_1__[/* innerFrom */ "c"])(durationSelector(value)).subscribe((durationSubscriber = new _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__[/* OperatorSubscriber */ "a"](subscriber, endDuration, cleanupDuration)));
            }
        }, function () {
            isComplete = true;
            (!hasValue || !durationSubscriber || durationSubscriber.closed) && subscriber.complete();
        }));
    });
}
//# sourceMappingURL=audit.js.map

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return combineLatestAll; });
/* harmony import */ var _observable_combineLatest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
/* harmony import */ var _joinAllInternals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(197);


function combineLatestAll(project) {
    return Object(_joinAllInternals__WEBPACK_IMPORTED_MODULE_1__[/* joinAllInternals */ "a"])(_observable_combineLatest__WEBPACK_IMPORTED_MODULE_0__[/* combineLatest */ "a"], project);
}
//# sourceMappingURL=combineLatestAll.js.map

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return toArray; });
/* harmony import */ var _reduce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);


var arrReducer = function (arr, value) { return (arr.push(value), arr); };
function toArray() {
    return Object(_util_lift__WEBPACK_IMPORTED_MODULE_1__[/* operate */ "b"])(function (source, subscriber) {
        Object(_reduce__WEBPACK_IMPORTED_MODULE_0__[/* reduce */ "a"])(arrReducer, [])(source).subscribe(subscriber);
    });
}
//# sourceMappingURL=toArray.js.map

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return delayWhen; });
/* harmony import */ var _observable_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44);
/* harmony import */ var _take__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26);
/* harmony import */ var _ignoreElements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68);
/* harmony import */ var _mapTo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69);
/* harmony import */ var _mergeMap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14);





function delayWhen(delayDurationSelector, subscriptionDelay) {
    if (subscriptionDelay) {
        return function (source) {
            return Object(_observable_concat__WEBPACK_IMPORTED_MODULE_0__[/* concat */ "a"])(subscriptionDelay.pipe(Object(_take__WEBPACK_IMPORTED_MODULE_1__[/* take */ "a"])(1), Object(_ignoreElements__WEBPACK_IMPORTED_MODULE_2__[/* ignoreElements */ "a"])()), source.pipe(delayWhen(delayDurationSelector)));
        };
    }
    return Object(_mergeMap__WEBPACK_IMPORTED_MODULE_4__[/* mergeMap */ "a"])(function (value, index) { return delayDurationSelector(value, index).pipe(Object(_take__WEBPACK_IMPORTED_MODULE_1__[/* take */ "a"])(1), Object(_mapTo__WEBPACK_IMPORTED_MODULE_3__[/* mapTo */ "a"])(value)); });
}
//# sourceMappingURL=delayWhen.js.map

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ignoreElements; });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);



function ignoreElements() {
    return Object(_util_lift__WEBPACK_IMPORTED_MODULE_0__[/* operate */ "b"])(function (source, subscriber) {
        source.subscribe(new _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__[/* OperatorSubscriber */ "a"](subscriber, _util_noop__WEBPACK_IMPORTED_MODULE_2__[/* noop */ "a"]));
    });
}
//# sourceMappingURL=ignoreElements.js.map

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mapTo; });
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);

function mapTo(value) {
    return Object(_map__WEBPACK_IMPORTED_MODULE_0__[/* map */ "a"])(function () { return value; });
}
//# sourceMappingURL=mapTo.js.map

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return distinctUntilChanged; });
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);



function distinctUntilChanged(comparator, keySelector) {
    if (keySelector === void 0) { keySelector = _util_identity__WEBPACK_IMPORTED_MODULE_0__[/* identity */ "a"]; }
    comparator = comparator !== null && comparator !== void 0 ? comparator : defaultCompare;
    return Object(_util_lift__WEBPACK_IMPORTED_MODULE_1__[/* operate */ "b"])(function (source, subscriber) {
        var previousKey;
        var first = true;
        source.subscribe(new _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__[/* OperatorSubscriber */ "a"](subscriber, function (value) {
            var currentKey = keySelector(value);
            if (first || !comparator(previousKey, currentKey)) {
                first = false;
                previousKey = currentKey;
                subscriber.next(value);
            }
        }));
    });
}
function defaultCompare(a, b) {
    return a === b;
}
//# sourceMappingURL=distinctUntilChanged.js.map

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return exhaustAll; });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _observable_from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);



function exhaustAll() {
    return Object(_util_lift__WEBPACK_IMPORTED_MODULE_0__[/* operate */ "b"])(function (source, subscriber) {
        var isComplete = false;
        var innerSub = null;
        source.subscribe(new _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__[/* OperatorSubscriber */ "a"](subscriber, function (inner) {
            if (!innerSub) {
                innerSub = Object(_observable_from__WEBPACK_IMPORTED_MODULE_1__[/* innerFrom */ "c"])(inner).subscribe(new _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__[/* OperatorSubscriber */ "a"](subscriber, undefined, function () {
                    innerSub = null;
                    isComplete && subscriber.complete();
                }));
            }
        }, function () {
            isComplete = true;
            !innerSub && subscriber.complete();
        }));
    });
}
//# sourceMappingURL=exhaustAll.js.map

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return find; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createFind; });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);


function find(predicate, thisArg) {
    return Object(_util_lift__WEBPACK_IMPORTED_MODULE_0__[/* operate */ "b"])(createFind(predicate, thisArg, 'value'));
}
function createFind(predicate, thisArg, emit) {
    var findIndex = emit === 'index';
    return function (source, subscriber) {
        var index = 0;
        source.subscribe(new _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__[/* OperatorSubscriber */ "a"](subscriber, function (value) {
            var i = index++;
            if (predicate.call(thisArg, value, i, source)) {
                subscriber.next(findIndex ? i : value);
                subscriber.complete();
            }
        }, function () {
            subscriber.next(findIndex ? -1 : undefined);
            subscriber.complete();
        }));
    };
}
//# sourceMappingURL=find.js.map

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return takeLast; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _observable_empty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);




function takeLast(count) {
    return count <= 0
        ? function () { return _observable_empty__WEBPACK_IMPORTED_MODULE_1__[/* EMPTY */ "a"]; }
        : Object(_util_lift__WEBPACK_IMPORTED_MODULE_2__[/* operate */ "b"])(function (source, subscriber) {
            var buffer = [];
            source.subscribe(new _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_3__[/* OperatorSubscriber */ "a"](subscriber, function (value) {
                buffer.push(value);
                count < buffer.length && buffer.shift();
            }, function () {
                var e_1, _a;
                try {
                    for (var buffer_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __values */ "i"])(buffer), buffer_1_1 = buffer_1.next(); !buffer_1_1.done; buffer_1_1 = buffer_1.next()) {
                        var value = buffer_1_1.value;
                        subscriber.next(value);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (buffer_1_1 && !buffer_1_1.done && (_a = buffer_1.return)) _a.call(buffer_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                subscriber.complete();
            }, undefined, function () {
                buffer = null;
            }));
        });
}
//# sourceMappingURL=takeLast.js.map

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return raceWith; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _observable_race__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(177);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);




function raceWith() {
    var otherSources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        otherSources[_i] = arguments[_i];
    }
    return !otherSources.length
        ? _util_identity__WEBPACK_IMPORTED_MODULE_3__[/* identity */ "a"]
        : Object(_util_lift__WEBPACK_IMPORTED_MODULE_2__[/* operate */ "b"])(function (source, subscriber) {
            Object(_observable_race__WEBPACK_IMPORTED_MODULE_1__[/* raceInit */ "b"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __spreadArray */ "h"])([source], Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __read */ "g"])(otherSources)))(subscriber);
        });
}
//# sourceMappingURL=raceWith.js.map

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sample; });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);



function sample(notifier) {
    return Object(_util_lift__WEBPACK_IMPORTED_MODULE_0__[/* operate */ "b"])(function (source, subscriber) {
        var hasValue = false;
        var lastValue = null;
        source.subscribe(new _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__[/* OperatorSubscriber */ "a"](subscriber, function (value) {
            hasValue = true;
            lastValue = value;
        }));
        var emit = function () {
            if (hasValue) {
                hasValue = false;
                var value = lastValue;
                lastValue = null;
                subscriber.next(value);
            }
        };
        notifier.subscribe(new _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__[/* OperatorSubscriber */ "a"](subscriber, emit, _util_noop__WEBPACK_IMPORTED_MODULE_1__[/* noop */ "a"]));
    });
}
//# sourceMappingURL=sample.js.map

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return scan; });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _scanInternals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(198);


function scan(accumulator, seed) {
    return Object(_util_lift__WEBPACK_IMPORTED_MODULE_0__[/* operate */ "b"])(Object(_scanInternals__WEBPACK_IMPORTED_MODULE_1__[/* scanInternals */ "a"])(accumulator, seed, arguments.length >= 2, true));
}
//# sourceMappingURL=scan.js.map

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return share; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _observable_from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _operators_take__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26);
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1);






function share(options) {
    if (options === void 0) { options = {}; }
    var _a = options.connector, connector = _a === void 0 ? function () { return new _Subject__WEBPACK_IMPORTED_MODULE_3__[/* Subject */ "a"](); } : _a, _b = options.resetOnError, resetOnError = _b === void 0 ? true : _b, _c = options.resetOnComplete, resetOnComplete = _c === void 0 ? true : _c, _d = options.resetOnRefCountZero, resetOnRefCountZero = _d === void 0 ? true : _d;
    return function (wrapperSource) {
        var connection = null;
        var resetConnection = null;
        var subject = null;
        var refCount = 0;
        var hasCompleted = false;
        var hasErrored = false;
        var cancelReset = function () {
            resetConnection === null || resetConnection === void 0 ? void 0 : resetConnection.unsubscribe();
            resetConnection = null;
        };
        var reset = function () {
            cancelReset();
            connection = subject = null;
            hasCompleted = hasErrored = false;
        };
        var resetAndUnsubscribe = function () {
            var conn = connection;
            reset();
            conn === null || conn === void 0 ? void 0 : conn.unsubscribe();
        };
        return Object(_util_lift__WEBPACK_IMPORTED_MODULE_5__[/* operate */ "b"])(function (source, subscriber) {
            refCount++;
            if (!hasErrored && !hasCompleted) {
                cancelReset();
            }
            var dest = (subject = subject !== null && subject !== void 0 ? subject : connector());
            subscriber.add(function () {
                refCount--;
                if (refCount === 0 && !hasErrored && !hasCompleted) {
                    resetConnection = handleReset(resetAndUnsubscribe, resetOnRefCountZero);
                }
            });
            dest.subscribe(subscriber);
            if (!connection) {
                connection = new _Subscriber__WEBPACK_IMPORTED_MODULE_4__[/* SafeSubscriber */ "a"]({
                    next: function (value) { return dest.next(value); },
                    error: function (err) {
                        hasErrored = true;
                        cancelReset();
                        resetConnection = handleReset(reset, resetOnError, err);
                        dest.error(err);
                    },
                    complete: function () {
                        hasCompleted = true;
                        cancelReset();
                        resetConnection = handleReset(reset, resetOnComplete);
                        dest.complete();
                    },
                });
                Object(_observable_from__WEBPACK_IMPORTED_MODULE_1__[/* from */ "a"])(source).subscribe(connection);
            }
        })(wrapperSource);
    };
}
function handleReset(reset, on) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    if (on === true) {
        reset();
        return null;
    }
    if (on === false) {
        return null;
    }
    return on.apply(void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __spreadArray */ "h"])([], Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __read */ "g"])(args))).pipe(Object(_operators_take__WEBPACK_IMPORTED_MODULE_2__[/* take */ "a"])(1))
        .subscribe(function () { return reset(); });
}
//# sourceMappingURL=share.js.map

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReplaySubject; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _scheduler_dateTimestampProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84);



var ReplaySubject = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "e"])(ReplaySubject, _super);
    function ReplaySubject(_bufferSize, _windowTime, _timestampProvider) {
        if (_bufferSize === void 0) { _bufferSize = Infinity; }
        if (_windowTime === void 0) { _windowTime = Infinity; }
        if (_timestampProvider === void 0) { _timestampProvider = _scheduler_dateTimestampProvider__WEBPACK_IMPORTED_MODULE_2__[/* dateTimestampProvider */ "a"]; }
        var _this = _super.call(this) || this;
        _this._bufferSize = _bufferSize;
        _this._windowTime = _windowTime;
        _this._timestampProvider = _timestampProvider;
        _this._buffer = [];
        _this._infiniteTimeWindow = true;
        _this._infiniteTimeWindow = _windowTime === Infinity;
        _this._bufferSize = Math.max(1, _bufferSize);
        _this._windowTime = Math.max(1, _windowTime);
        return _this;
    }
    ReplaySubject.prototype.next = function (value) {
        var _a = this, isStopped = _a.isStopped, _buffer = _a._buffer, _infiniteTimeWindow = _a._infiniteTimeWindow, _timestampProvider = _a._timestampProvider, _windowTime = _a._windowTime;
        if (!isStopped) {
            _buffer.push(value);
            !_infiniteTimeWindow && _buffer.push(_timestampProvider.now() + _windowTime);
        }
        this._trimBuffer();
        _super.prototype.next.call(this, value);
    };
    ReplaySubject.prototype._subscribe = function (subscriber) {
        this._throwIfClosed();
        this._trimBuffer();
        var subscription = this._innerSubscribe(subscriber);
        var _a = this, _infiniteTimeWindow = _a._infiniteTimeWindow, _buffer = _a._buffer;
        var copy = _buffer.slice();
        for (var i = 0; i < copy.length && !subscriber.closed; i += _infiniteTimeWindow ? 1 : 2) {
            subscriber.next(copy[i]);
        }
        this._checkFinalizedStatuses(subscriber);
        return subscription;
    };
    ReplaySubject.prototype._trimBuffer = function () {
        var _a = this, _bufferSize = _a._bufferSize, _timestampProvider = _a._timestampProvider, _buffer = _a._buffer, _infiniteTimeWindow = _a._infiniteTimeWindow;
        var adjustedBufferSize = (_infiniteTimeWindow ? 1 : 2) * _bufferSize;
        _bufferSize < Infinity && adjustedBufferSize < _buffer.length && _buffer.splice(0, _buffer.length - adjustedBufferSize);
        if (!_infiniteTimeWindow) {
            var now = _timestampProvider.now();
            var last = 0;
            for (var i = 1; i < _buffer.length && _buffer[i] <= now; i += 2) {
                last = i;
            }
            last && _buffer.splice(0, last + 1);
        }
    };
    return ReplaySubject;
}(_Subject__WEBPACK_IMPORTED_MODULE_1__[/* Subject */ "a"]));

//# sourceMappingURL=ReplaySubject.js.map

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsyncSubject; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);


var AsyncSubject = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "e"])(AsyncSubject, _super);
    function AsyncSubject() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._value = null;
        _this._hasValue = false;
        _this._isComplete = false;
        return _this;
    }
    AsyncSubject.prototype._checkFinalizedStatuses = function (subscriber) {
        var _a = this, hasError = _a.hasError, _hasValue = _a._hasValue, _value = _a._value, thrownError = _a.thrownError, isStopped = _a.isStopped, _isComplete = _a._isComplete;
        if (hasError) {
            subscriber.error(thrownError);
        }
        else if (isStopped || _isComplete) {
            _hasValue && subscriber.next(_value);
            subscriber.complete();
        }
    };
    AsyncSubject.prototype.next = function (value) {
        if (!this.isStopped) {
            this._value = value;
            this._hasValue = true;
        }
    };
    AsyncSubject.prototype.complete = function () {
        var _a = this, _hasValue = _a._hasValue, _value = _a._value, _isComplete = _a._isComplete;
        if (!_isComplete) {
            this._isComplete = true;
            _hasValue && _super.prototype.next.call(this, _value);
            _super.prototype.complete.call(this);
        }
    };
    return AsyncSubject;
}(_Subject__WEBPACK_IMPORTED_MODULE_1__[/* Subject */ "a"]));

//# sourceMappingURL=AsyncSubject.js.map

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return of; });
/* harmony import */ var _fromArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/* harmony import */ var _scheduled_scheduleArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85);
/* harmony import */ var _util_args__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);



function of() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var scheduler = Object(_util_args__WEBPACK_IMPORTED_MODULE_2__[/* popScheduler */ "c"])(args);
    return scheduler ? Object(_scheduled_scheduleArray__WEBPACK_IMPORTED_MODULE_1__[/* scheduleArray */ "a"])(args, scheduler) : Object(_fromArray__WEBPACK_IMPORTED_MODULE_0__[/* internalFromArray */ "a"])(args);
}
//# sourceMappingURL=of.js.map

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return combineLatest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return combineLatestInit; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _util_argsArgArrayOrObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(194);
/* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23);
/* harmony import */ var _util_args__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var _util_createObject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(195);
/* harmony import */ var _operators_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2);








function combineLatest() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var scheduler = Object(_util_args__WEBPACK_IMPORTED_MODULE_5__[/* popScheduler */ "c"])(args);
    var resultSelector = Object(_util_args__WEBPACK_IMPORTED_MODULE_5__[/* popResultSelector */ "b"])(args);
    var _a = Object(_util_argsArgArrayOrObject__WEBPACK_IMPORTED_MODULE_1__[/* argsArgArrayOrObject */ "a"])(args), observables = _a.args, keys = _a.keys;
    if (observables.length === 0) {
        return Object(_from__WEBPACK_IMPORTED_MODULE_2__[/* from */ "a"])([], scheduler);
    }
    var result = new _Observable__WEBPACK_IMPORTED_MODULE_0__[/* Observable */ "a"](combineLatestInit(observables, scheduler, keys
        ?
            function (values) { return Object(_util_createObject__WEBPACK_IMPORTED_MODULE_6__[/* createObject */ "a"])(keys, values); }
        :
            _util_identity__WEBPACK_IMPORTED_MODULE_3__[/* identity */ "a"]));
    return resultSelector ? result.pipe(Object(_util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_4__[/* mapOneOrManyArgs */ "a"])(resultSelector)) : result;
}
function combineLatestInit(observables, scheduler, valueTransform) {
    if (valueTransform === void 0) { valueTransform = _util_identity__WEBPACK_IMPORTED_MODULE_3__[/* identity */ "a"]; }
    return function (subscriber) {
        maybeSchedule(scheduler, function () {
            var length = observables.length;
            var values = new Array(length);
            var active = length;
            var remainingFirstValues = length;
            var _loop_1 = function (i) {
                maybeSchedule(scheduler, function () {
                    var source = Object(_from__WEBPACK_IMPORTED_MODULE_2__[/* from */ "a"])(observables[i], scheduler);
                    var hasFirstValue = false;
                    source.subscribe(new _operators_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_7__[/* OperatorSubscriber */ "a"](subscriber, function (value) {
                        values[i] = value;
                        if (!hasFirstValue) {
                            hasFirstValue = true;
                            remainingFirstValues--;
                        }
                        if (!remainingFirstValues) {
                            subscriber.next(valueTransform(values.slice()));
                        }
                    }, function () {
                        if (!--active) {
                            subscriber.complete();
                        }
                    }));
                }, subscriber);
            };
            for (var i = 0; i < length; i++) {
                _loop_1(i);
            }
        }, subscriber);
    };
}
function maybeSchedule(scheduler, execute, subscription) {
    if (scheduler) {
        subscription.add(scheduler.schedule(execute));
    }
    else {
        execute();
    }
}
//# sourceMappingURL=combineLatest.js.map

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return zip; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _util_argsOrArgArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24);
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12);
/* harmony import */ var _operators_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2);
/* harmony import */ var _util_args__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10);







function zip() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var resultSelector = Object(_util_args__WEBPACK_IMPORTED_MODULE_6__[/* popResultSelector */ "b"])(args);
    var sources = Object(_util_argsOrArgArray__WEBPACK_IMPORTED_MODULE_3__[/* argsOrArgArray */ "a"])(args);
    return sources.length
        ? new _Observable__WEBPACK_IMPORTED_MODULE_1__[/* Observable */ "a"](function (subscriber) {
            var buffers = sources.map(function () { return []; });
            var completed = sources.map(function () { return false; });
            subscriber.add(function () {
                buffers = completed = null;
            });
            var _loop_1 = function (sourceIndex) {
                Object(_from__WEBPACK_IMPORTED_MODULE_2__[/* innerFrom */ "c"])(sources[sourceIndex]).subscribe(new _operators_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_5__[/* OperatorSubscriber */ "a"](subscriber, function (value) {
                    buffers[sourceIndex].push(value);
                    if (buffers.every(function (buffer) { return buffer.length; })) {
                        var result = buffers.map(function (buffer) { return buffer.shift(); });
                        subscriber.next(resultSelector ? resultSelector.apply(void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __spreadArray */ "h"])([], Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __read */ "g"])(result))) : result);
                        if (buffers.some(function (buffer, i) { return !buffer.length && completed[i]; })) {
                            subscriber.complete();
                        }
                    }
                }, function () {
                    completed[sourceIndex] = true;
                    !buffers[sourceIndex].length && subscriber.complete();
                }));
            };
            for (var sourceIndex = 0; !subscriber.closed && sourceIndex < sources.length; sourceIndex++) {
                _loop_1(sourceIndex);
            }
            return function () {
                buffers = completed = null;
            };
        })
        : _empty__WEBPACK_IMPORTED_MODULE_4__[/* EMPTY */ "a"];
}
//# sourceMappingURL=zip.js.map

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnsubscriptionError; });
/* harmony import */ var _createErrorClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);

var UnsubscriptionError = Object(_createErrorClass__WEBPACK_IMPORTED_MODULE_0__[/* createErrorClass */ "a"])(function (_super) {
    return function UnsubscriptionErrorImpl(errors) {
        _super(this);
        this.message = errors
            ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ')
            : '';
        this.name = 'UnsubscriptionError';
        this.errors = errors;
    };
});
//# sourceMappingURL=UnsubscriptionError.js.map

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dateTimestampProvider; });
var dateTimestampProvider = {
    now: function () {
        return (dateTimestampProvider.delegate || Date).now();
    },
    delegate: undefined,
};
//# sourceMappingURL=dateTimestampProvider.js.map

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return scheduleArray; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

function scheduleArray(input, scheduler) {
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__[/* Observable */ "a"](function (subscriber) {
        var i = 0;
        return scheduler.schedule(function () {
            if (i === input.length) {
                subscriber.complete();
            }
            else {
                subscriber.next(input[i++]);
                if (!subscriber.closed) {
                    this.schedule();
                }
            }
        });
    });
}
//# sourceMappingURL=scheduleArray.js.map

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isArrayLike; });
var isArrayLike = (function (x) { return x && typeof x.length === 'number' && typeof x !== 'function'; });
//# sourceMappingURL=isArrayLike.js.map

/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isValidDate; });
function isValidDate(value) {
    return value instanceof Date && !isNaN(value);
}
//# sourceMappingURL=isDate.js.map

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mergeInternals; });
/* harmony import */ var _observable_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);


function mergeInternals(source, subscriber, project, concurrent, onBeforeNext, expand, innerSubScheduler, additionalTeardown) {
    var buffer = [];
    var active = 0;
    var index = 0;
    var isComplete = false;
    var checkComplete = function () {
        if (isComplete && !buffer.length && !active) {
            subscriber.complete();
        }
    };
    var outerNext = function (value) { return (active < concurrent ? doInnerSub(value) : buffer.push(value)); };
    var doInnerSub = function (value) {
        expand && subscriber.next(value);
        active++;
        var innerComplete = false;
        Object(_observable_from__WEBPACK_IMPORTED_MODULE_0__[/* innerFrom */ "c"])(project(value, index++)).subscribe(new _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__[/* OperatorSubscriber */ "a"](subscriber, function (innerValue) {
            onBeforeNext === null || onBeforeNext === void 0 ? void 0 : onBeforeNext(innerValue);
            if (expand) {
                outerNext(innerValue);
            }
            else {
                subscriber.next(innerValue);
            }
        }, function () {
            innerComplete = true;
        }, undefined, function () {
            if (innerComplete) {
                try {
                    active--;
                    var _loop_1 = function () {
                        var bufferedValue = buffer.shift();
                        innerSubScheduler ? subscriber.add(innerSubScheduler.schedule(function () { return doInnerSub(bufferedValue); })) : doInnerSub(bufferedValue);
                    };
                    while (buffer.length && active < concurrent) {
                        _loop_1();
                    }
                    checkComplete();
                }
                catch (err) {
                    subscriber.error(err);
                }
            }
        }));
    };
    source.subscribe(new _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__[/* OperatorSubscriber */ "a"](subscriber, outerNext, function () {
        isComplete = true;
        checkComplete();
    }));
    return function () {
        additionalTeardown === null || additionalTeardown === void 0 ? void 0 : additionalTeardown();
    };
}
//# sourceMappingURL=mergeInternals.js.map

/***/ }),
/* 89 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Scheduler; });
/* harmony import */ var _scheduler_dateTimestampProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84);

var Scheduler = (function () {
    function Scheduler(schedulerActionCtor, now) {
        if (now === void 0) { now = Scheduler.now; }
        this.schedulerActionCtor = schedulerActionCtor;
        this.now = now;
    }
    Scheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) { delay = 0; }
        return new this.schedulerActionCtor(this, work).schedule(state, delay);
    };
    Scheduler.now = _scheduler_dateTimestampProvider__WEBPACK_IMPORTED_MODULE_0__[/* dateTimestampProvider */ "a"].now;
    return Scheduler;
}());

//# sourceMappingURL=Scheduler.js.map

/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArgumentOutOfRangeError; });
/* harmony import */ var _createErrorClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);

var ArgumentOutOfRangeError = Object(_createErrorClass__WEBPACK_IMPORTED_MODULE_0__[/* createErrorClass */ "a"])(function (_super) {
    return function ArgumentOutOfRangeErrorImpl() {
        _super(this);
        this.name = 'ArgumentOutOfRangeError';
        this.message = 'argument out of range';
    };
});
//# sourceMappingURL=ArgumentOutOfRangeError.js.map

/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return extendSerializer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefaultSerializer; });
function extendSerializer(extend, implementation) {
    const fallbackDeserializer = extend.deserialize.bind(extend);
    const fallbackSerializer = extend.serialize.bind(extend);
    return {
        deserialize(message) {
            return implementation.deserialize(message, fallbackDeserializer);
        },
        serialize(input) {
            return implementation.serialize(input, fallbackSerializer);
        }
    };
}
const DefaultErrorSerializer = {
    deserialize(message) {
        return Object.assign(Error(message.message), {
            name: message.name,
            stack: message.stack
        });
    },
    serialize(error) {
        return {
            __error_marker: "$$error",
            message: error.message,
            name: error.name,
            stack: error.stack
        };
    }
};
const isSerializedError = (thing) => thing && typeof thing === "object" && "__error_marker" in thing && thing.__error_marker === "$$error";
const DefaultSerializer = {
    deserialize(message) {
        if (isSerializedError(message)) {
            return DefaultErrorSerializer.deserialize(message);
        }
        else {
            return message;
        }
    },
    serialize(input) {
        if (input instanceof Error) {
            return DefaultErrorSerializer.serialize(input);
        }
        else {
            return input;
        }
    }
};


/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkerEventType; });
/// <reference lib="dom" />
// tslint:disable max-classes-per-file

/** Event as emitted by worker thread. Subscribe to using `Thread.events(thread)`. */
var WorkerEventType;
(function (WorkerEventType) {
    WorkerEventType["internalError"] = "internalError";
    WorkerEventType["message"] = "message";
    WorkerEventType["termination"] = "termination";
})(WorkerEventType || (WorkerEventType = {}));


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Class responsible to handle the scope of the instances created by the Container
 */
class Scope {
    /**
     * Called by the IoC Container when some configuration is changed on the Container binding.
     * @param _source The source type that has its configuration changed.
     */
    reset(_source) {
        // Do nothing
    }
    /**
     * Called by the IoC Container when the the target type is bound to this scope
     * @param _source The source type that is bound to that scope.
     */
    init(_source) {
        // Do nothing
    }
    /**
     * Called by the IoC Container when the the target type is unbound to this scope
     * @param _source The source type that is unbound to that scope.
     */
    finish(_source) {
        // Do nothing
    }
}
exports.Scope = Scope;
/**
 * The context of the current Container resolution.
 */
class BuildContext {
}
exports.BuildContext = BuildContext;
//# sourceMappingURL=model.js.map

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return auditTime; });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _audit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64);
/* harmony import */ var _observable_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30);



function auditTime(duration, scheduler) {
    if (scheduler === void 0) { scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__[/* async */ "a"]; }
    return Object(_audit__WEBPACK_IMPORTED_MODULE_1__[/* audit */ "a"])(function () { return Object(_observable_timer__WEBPACK_IMPORTED_MODULE_2__[/* timer */ "a"])(duration, scheduler); });
}
//# sourceMappingURL=auditTime.js.map

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return buffer; });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);



function buffer(closingNotifier) {
    return Object(_util_lift__WEBPACK_IMPORTED_MODULE_0__[/* operate */ "b"])(function (source, subscriber) {
        var currentBuffer = [];
        source.subscribe(new _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__[/* OperatorSubscriber */ "a"](subscriber, function (value) { return currentBuffer.push(value); }, function () {
            subscriber.next(currentBuffer);
            subscriber.complete();
        }));
        closingNotifier.subscribe(new _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__[/* OperatorSubscriber */ "a"](subscriber, function () {
            var b = currentBuffer;
            currentBuffer = [];
            subscriber.next(b);
        }, _util_noop__WEBPACK_IMPORTED_MODULE_1__[/* noop */ "a"]));
        return function () {
            currentBuffer = null;
        };
    });
}
//# sourceMappingURL=buffer.js.map

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return bufferCount; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _util_arrRemove__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18);




function bufferCount(bufferSize, startBufferEvery) {
    if (startBufferEvery === void 0) { startBufferEvery = null; }
    startBufferEvery = startBufferEvery !== null && startBufferEvery !== void 0 ? startBufferEvery : bufferSize;
    return Object(_util_lift__WEBPACK_IMPORTED_MODULE_1__[/* operate */ "b"])(function (source, subscriber) {
        var buffers = [];
        var count = 0;
        source.subscribe(new _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__[/* OperatorSubscriber */ "a"](subscriber, function (value) {
            var e_1, _a, e_2, _b;
            var toEmit = null;
            if (count++ % startBufferEvery === 0) {
                buffers.push([]);
            }
            try {
                for (var buffers_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __values */ "i"])(buffers), buffers_1_1 = buffers_1.next(); !buffers_1_1.done; buffers_1_1 = buffers_1.next()) {
                    var buffer = buffers_1_1.value;
                    buffer.push(value);
                    if (bufferSize <= buffer.length) {
                        toEmit = toEmit !== null && toEmit !== void 0 ? toEmit : [];
                        toEmit.push(buffer);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (buffers_1_1 && !buffers_1_1.done && (_a = buffers_1.return)) _a.call(buffers_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            if (toEmit) {
                try {
                    for (var toEmit_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __values */ "i"])(toEmit), toEmit_1_1 = toEmit_1.next(); !toEmit_1_1.done; toEmit_1_1 = toEmit_1.next()) {
                        var buffer = toEmit_1_1.value;
                        Object(_util_arrRemove__WEBPACK_IMPORTED_MODULE_3__[/* arrRemove */ "a"])(buffers, buffer);
                        subscriber.next(buffer);
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (toEmit_1_1 && !toEmit_1_1.done && (_b = toEmit_1.return)) _b.call(toEmit_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
        }, function () {
            var e_3, _a;
            try {
                for (var buffers_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __values */ "i"])(buffers), buffers_2_1 = buffers_2.next(); !buffers_2_1.done; buffers_2_1 = buffers_2.next()) {
                    var buffer = buffers_2_1.value;
                    subscriber.next(buffer);
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (buffers_2_1 && !buffers_2_1.done && (_a = buffers_2.return)) _a.call(buffers_2);
                }
                finally { if (e_3) throw e_3.error; }
            }
            subscriber.complete();
        }, undefined, function () {
            buffers = null;
        }));
    });
}
//# sourceMappingURL=bufferCount.js.map

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return bufferTime; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _util_arrRemove__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18);
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11);
/* harmony import */ var _util_args__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10);







function bufferTime(bufferTimeSpan) {
    var _a, _b;
    var otherArgs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        otherArgs[_i - 1] = arguments[_i];
    }
    var scheduler = (_a = Object(_util_args__WEBPACK_IMPORTED_MODULE_6__[/* popScheduler */ "c"])(otherArgs)) !== null && _a !== void 0 ? _a : _scheduler_async__WEBPACK_IMPORTED_MODULE_5__[/* asyncScheduler */ "b"];
    var bufferCreationInterval = (_b = otherArgs[0]) !== null && _b !== void 0 ? _b : null;
    var maxBufferSize = otherArgs[1] || Infinity;
    return Object(_util_lift__WEBPACK_IMPORTED_MODULE_2__[/* operate */ "b"])(function (source, subscriber) {
        var bufferRecords = [];
        var restartOnEmit = false;
        var emit = function (record) {
            var buffer = record.buffer, subs = record.subs;
            subs.unsubscribe();
            Object(_util_arrRemove__WEBPACK_IMPORTED_MODULE_4__[/* arrRemove */ "a"])(bufferRecords, record);
            subscriber.next(buffer);
            restartOnEmit && startBuffer();
        };
        var startBuffer = function () {
            if (bufferRecords) {
                var subs = new _Subscription__WEBPACK_IMPORTED_MODULE_1__[/* Subscription */ "b"]();
                subscriber.add(subs);
                var buffer = [];
                var record_1 = {
                    buffer: buffer,
                    subs: subs,
                };
                bufferRecords.push(record_1);
                subs.add(scheduler.schedule(function () { return emit(record_1); }, bufferTimeSpan));
            }
        };
        bufferCreationInterval !== null && bufferCreationInterval >= 0
            ?
                subscriber.add(scheduler.schedule(function () {
                    startBuffer();
                    !this.closed && subscriber.add(this.schedule(null, bufferCreationInterval));
                }, bufferCreationInterval))
            : (restartOnEmit = true);
        startBuffer();
        var bufferTimeSubscriber = new _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_3__[/* OperatorSubscriber */ "a"](subscriber, function (value) {
            var e_1, _a;
            var recordsCopy = bufferRecords.slice();
            try {
                for (var recordsCopy_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __values */ "i"])(recordsCopy), recordsCopy_1_1 = recordsCopy_1.next(); !recordsCopy_1_1.done; recordsCopy_1_1 = recordsCopy_1.next()) {
                    var record = recordsCopy_1_1.value;
                    var buffer = record.buffer;
                    buffer.push(value);
                    maxBufferSize <= buffer.length && emit(record);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (recordsCopy_1_1 && !recordsCopy_1_1.done && (_a = recordsCopy_1.return)) _a.call(recordsCopy_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }, function () {
            while (bufferRecords === null || bufferRecords === void 0 ? void 0 : bufferRecords.length) {
                subscriber.next(bufferRecords.shift().buffer);
            }
            bufferTimeSubscriber === null || bufferTimeSubscriber === void 0 ? void 0 : bufferTimeSubscriber.unsubscribe();
            subscriber.complete();
            subscriber.unsubscribe();
        }, undefined, function () { return (bufferRecords = null); });
        source.subscribe(bufferTimeSubscriber);
    });
}
//# sourceMappingURL=bufferTime.js.map

/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return bufferToggle; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _observable_from__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var _util_arrRemove__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(18);







function bufferToggle(openings, closingSelector) {
    return Object(_util_lift__WEBPACK_IMPORTED_MODULE_2__[/* operate */ "b"])(function (source, subscriber) {
        var buffers = [];
        Object(_observable_from__WEBPACK_IMPORTED_MODULE_3__[/* innerFrom */ "c"])(openings).subscribe(new _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_4__[/* OperatorSubscriber */ "a"](subscriber, function (openValue) {
            var buffer = [];
            buffers.push(buffer);
            var closingSubscription = new _Subscription__WEBPACK_IMPORTED_MODULE_1__[/* Subscription */ "b"]();
            var emitBuffer = function () {
                Object(_util_arrRemove__WEBPACK_IMPORTED_MODULE_6__[/* arrRemove */ "a"])(buffers, buffer);
                subscriber.next(buffer);
                closingSubscription.unsubscribe();
            };
            closingSubscription.add(Object(_observable_from__WEBPACK_IMPORTED_MODULE_3__[/* innerFrom */ "c"])(closingSelector(openValue)).subscribe(new _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_4__[/* OperatorSubscriber */ "a"](subscriber, emitBuffer, _util_noop__WEBPACK_IMPORTED_MODULE_5__[/* noop */ "a"])));
        }, _util_noop__WEBPACK_IMPORTED_MODULE_5__[/* noop */ "a"]));
        source.subscribe(new _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_4__[/* OperatorSubscriber */ "a"](subscriber, function (value) {
            var e_1, _a;
            try {
                for (var buffers_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __values */ "i"])(buffers), buffers_1_1 = buffers_1.next(); !buffers_1_1.done; buffers_1_1 = buffers_1.next()) {
                    var buffer = buffers_1_1.value;
                    buffer.push(value);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (buffers_1_1 && !buffers_1_1.done && (_a = buffers_1.return)) _a.call(buffers_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }, function () {
            while (buffers.length > 0) {
                subscriber.next(buffers.shift());
            }
            subscriber.complete();
        }));
    });
}
//# sourceMappingURL=bufferToggle.js.map

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return bufferWhen; });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _observable_from__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);




function bufferWhen(closingSelector) {
    return Object(_util_lift__WEBPACK_IMPORTED_MODULE_0__[/* operate */ "b"])(function (source, subscriber) {
        var buffer = null;
        var closingSubscriber = null;
        var openBuffer = function () {
            closingSubscriber === null || closingSubscriber === void 0 ? void 0 : closingSubscriber.unsubscribe();
            var b = buffer;
            buffer = [];
            b && subscriber.next(b);
            Object(_observable_from__WEBPACK_IMPORTED_MODULE_3__[/* innerFrom */ "c"])(closingSelector()).subscribe((closingSubscriber = new _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__[/* OperatorSubscriber */ "a"](subscriber, openBuffer, _util_noop__WEBPACK_IMPORTED_MODULE_1__[/* noop */ "a"])));
        };
        openBuffer();
        source.subscribe(new _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__[/* OperatorSubscriber */ "a"](subscriber, function (value) { return buffer === null || buffer === void 0 ? void 0 : buffer.push(value); }, function () {
            buffer && subscriber.next(buffer);
            subscriber.complete();
        }, undefined, function () { return (buffer = closingSubscriber = null); }));
    });
}
//# sourceMappingURL=bufferWhen.js.map

/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return catchError; });
/* harmony import */ var _observable_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);



function catchError(selector) {
    return Object(_util_lift__WEBPACK_IMPORTED_MODULE_2__[/* operate */ "b"])(function (source, subscriber) {
        var innerSub = null;
        var syncUnsub = false;
        var handledResult;
        innerSub = source.subscribe(new _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__[/* OperatorSubscriber */ "a"](subscriber, undefined, undefined, function (err) {
            handledResult = Object(_observable_from__WEBPACK_IMPORTED_MODULE_0__[/* innerFrom */ "c"])(selector(err, catchError(selector)(source)));
            if (innerSub) {
                innerSub.unsubscribe();
                innerSub = null;
                handledResult.subscribe(subscriber);
            }
            else {
                syncUnsub = true;
            }
        }));
        if (syncUnsub) {
            innerSub.unsubscribe();
            innerSub = null;
            handledResult.subscribe(subscriber);
        }
    });
}
//# sourceMappingURL=catchError.js.map

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return combineAll; });
/* harmony import */ var _combineLatestAll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65);

var combineAll = _combineLatestAll__WEBPACK_IMPORTED_MODULE_0__[/* combineLatestAll */ "a"];
//# sourceMappingURL=combineAll.js.map

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return combineLatestWith; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _combineLatest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(178);


function combineLatestWith() {
    var otherSources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        otherSources[_i] = arguments[_i];
    }
    return _combineLatest__WEBPACK_IMPORTED_MODULE_1__[/* combineLatest */ "a"].apply(void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __spreadArray */ "h"])([], Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __read */ "g"])(otherSources)));
}
//# sourceMappingURL=combineLatestWith.js.map

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return concatMapTo; });
/* harmony import */ var _concatMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);


function concatMapTo(innerObservable, resultSelector) {
    return Object(_util_isFunction__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "a"])(resultSelector) ? Object(_concatMap__WEBPACK_IMPORTED_MODULE_0__[/* concatMap */ "a"])(function () { return innerObservable; }, resultSelector) : Object(_concatMap__WEBPACK_IMPORTED_MODULE_0__[/* concatMap */ "a"])(function () { return innerObservable; });
}
//# sourceMappingURL=concatMapTo.js.map

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return concatWith; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _concat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(179);


function concatWith() {
    var otherSources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        otherSources[_i] = arguments[_i];
    }
    return _concat__WEBPACK_IMPORTED_MODULE_1__[/* concat */ "a"].apply(void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __spreadArray */ "h"])([], Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __read */ "g"])(otherSources)));
}
//# sourceMappingURL=concatWith.js.map

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return count; });
/* harmony import */ var _reduce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);

function count(predicate) {
    return Object(_reduce__WEBPACK_IMPORTED_MODULE_0__[/* reduce */ "a"])(function (total, value, i) { return (!predicate || predicate(value, i) ? total + 1 : total); }, 0);
}
//# sourceMappingURL=count.js.map

/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return debounce; });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _observable_from__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);




function debounce(durationSelector) {
    return Object(_util_lift__WEBPACK_IMPORTED_MODULE_0__[/* operate */ "b"])(function (source, subscriber) {
        var hasValue = false;
        var lastValue = null;
        var durationSubscriber = null;
        var emit = function () {
            durationSubscriber === null || durationSubscriber === void 0 ? void 0 : durationSubscriber.unsubscribe();
            durationSubscriber = null;
            if (hasValue) {
                hasValue = false;
                var value = lastValue;
                lastValue = null;
                subscriber.next(value);
            }
        };
        source.subscribe(new _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__[/* OperatorSubscriber */ "a"](subscriber, function (value) {
            durationSubscriber === null || durationSubscriber === void 0 ? void 0 : durationSubscriber.unsubscribe();
            hasValue = true;
            lastValue = value;
            durationSubscriber = new _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__[/* OperatorSubscriber */ "a"](subscriber, emit, _util_noop__WEBPACK_IMPORTED_MODULE_1__[/* noop */ "a"]);
            Object(_observable_from__WEBPACK_IMPORTED_MODULE_3__[/* innerFrom */ "c"])(durationSelector(value)).subscribe(durationSubscriber);
        }, function () {
            emit();
            subscriber.complete();
        }, undefined, function () {
            lastValue = durationSubscriber = null;
        }));
    });
}
//# sourceMappingURL=debounce.js.map

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return debounceTime; });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);



function debounceTime(dueTime, scheduler) {
    if (scheduler === void 0) { scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__[/* asyncScheduler */ "b"]; }
    return Object(_util_lift__WEBPACK_IMPORTED_MODULE_1__[/* operate */ "b"])(function (source, subscriber) {
        var activeTask = null;
        var lastValue = null;
        var lastTime = null;
        var emit = function () {
            if (activeTask) {
                activeTask.unsubscribe();
                activeTask = null;
                var value = lastValue;
                lastValue = null;
                subscriber.next(value);
            }
        };
        function emitWhenIdle() {
            var targetTime = lastTime + dueTime;
            var now = scheduler.now();
            if (now < targetTime) {
                activeTask = this.schedule(undefined, targetTime - now);
                subscriber.add(activeTask);
                return;
            }
            emit();
        }
        source.subscribe(new _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__[/* OperatorSubscriber */ "a"](subscriber, function (value) {
            lastValue = value;
            lastTime = scheduler.now();
            if (!activeTask) {
                activeTask = scheduler.schedule(emitWhenIdle, dueTime);
                subscriber.add(activeTask);
            }
        }, function () {
            emit();
            subscriber.complete();
        }, undefined, function () {
            lastValue = activeTask = null;
        }));
    });
}
//# sourceMappingURL=debounceTime.js.map

/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return delay; });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _delayWhen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67);
/* harmony import */ var _observable_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30);



function delay(due, scheduler) {
    if (scheduler === void 0) { scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__[/* asyncScheduler */ "b"]; }
    var duration = Object(_observable_timer__WEBPACK_IMPORTED_MODULE_2__[/* timer */ "a"])(due, scheduler);
    return Object(_delayWhen__WEBPACK_IMPORTED_MODULE_1__[/* delayWhen */ "a"])(function () { return duration; });
}
//# sourceMappingURL=delay.js.map

/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dematerialize; });
/* harmony import */ var _Notification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);



function dematerialize() {
    return Object(_util_lift__WEBPACK_IMPORTED_MODULE_1__[/* operate */ "b"])(function (source, subscriber) {
        source.subscribe(new _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__[/* OperatorSubscriber */ "a"](subscriber, function (notification) { return Object(_Notification__WEBPACK_IMPORTED_MODULE_0__[/* observeNotification */ "c"])(notification, subscriber); }));
    });
}
//# sourceMappingURL=dematerialize.js.map

/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return distinct; });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);



function distinct(keySelector, flushes) {
    return Object(_util_lift__WEBPACK_IMPORTED_MODULE_0__[/* operate */ "b"])(function (source, subscriber) {
        var distinctKeys = new Set();
        source.subscribe(new _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__[/* OperatorSubscriber */ "a"](subscriber, function (value) {
            var key = keySelector ? keySelector(value) : value;
            if (!distinctKeys.has(key)) {
                distinctKeys.add(key);
                subscriber.next(value);
            }
        }));
        flushes === null || flushes === void 0 ? void 0 : flushes.subscribe(new _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__[/* OperatorSubscriber */ "a"](subscriber, function () { return distinctKeys.clear(); }, _util_noop__WEBPACK_IMPORTED_MODULE_2__[/* noop */ "a"]));
    });
}
//# sourceMappingURL=distinct.js.map

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return distinctUntilKeyChanged; });
/* harmony import */ var _distinctUntilChanged__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70);

function distinctUntilKeyChanged(key, compare) {
    return Object(_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_0__[/* distinctUntilChanged */ "a"])(function (x, y) { return compare ? compare(x[key], y[key]) : x[key] === y[key]; });
}
//# sourceMappingURL=distinctUntilKeyChanged.js.map

/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return elementAt; });
/* harmony import */ var _util_ArgumentOutOfRangeError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91);
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);
/* harmony import */ var _throwIfEmpty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38);
/* harmony import */ var _defaultIfEmpty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37);
/* harmony import */ var _take__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26);





function elementAt(index, defaultValue) {
    if (index < 0) {
        throw new _util_ArgumentOutOfRangeError__WEBPACK_IMPORTED_MODULE_0__[/* ArgumentOutOfRangeError */ "a"]();
    }
    var hasDefaultValue = arguments.length >= 2;
    return function (source) {
        return source.pipe(Object(_filter__WEBPACK_IMPORTED_MODULE_1__[/* filter */ "a"])(function (v, i) { return i === index; }), Object(_take__WEBPACK_IMPORTED_MODULE_4__[/* take */ "a"])(1), hasDefaultValue ? Object(_defaultIfEmpty__WEBPACK_IMPORTED_MODULE_3__[/* defaultIfEmpty */ "a"])(defaultValue) : Object(_throwIfEmpty__WEBPACK_IMPORTED_MODULE_2__[/* throwIfEmpty */ "a"])(function () { return new _util_ArgumentOutOfRangeError__WEBPACK_IMPORTED_MODULE_0__[/* ArgumentOutOfRangeError */ "a"](); }));
    };
}
//# sourceMappingURL=elementAt.js.map

/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return endWith; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _observable_concat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44);
/* harmony import */ var _observable_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80);



function endWith() {
    var values = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
    }
    return function (source) { return Object(_observable_concat__WEBPACK_IMPORTED_MODULE_1__[/* concat */ "a"])(source, _observable_of__WEBPACK_IMPORTED_MODULE_2__[/* of */ "a"].apply(void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __spreadArray */ "h"])([], Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __read */ "g"])(values)))); };
}
//# sourceMappingURL=endWith.js.map

/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return every; });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);


function every(predicate, thisArg) {
    return Object(_util_lift__WEBPACK_IMPORTED_MODULE_0__[/* operate */ "b"])(function (source, subscriber) {
        var index = 0;
        source.subscribe(new _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__[/* OperatorSubscriber */ "a"](subscriber, function (value) {
            if (!predicate.call(thisArg, value, index++, source)) {
                subscriber.next(false);
                subscriber.complete();
            }
        }, function () {
            subscriber.next(true);
            subscriber.complete();
        }));
    });
}
//# sourceMappingURL=every.js.map

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return exhaust; });
/* harmony import */ var _exhaustAll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71);

var exhaust = _exhaustAll__WEBPACK_IMPORTED_MODULE_0__[/* exhaustAll */ "a"];
//# sourceMappingURL=exhaust.js.map

/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return exhaustMap; });
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var _observable_from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);




function exhaustMap(project, resultSelector) {
    if (resultSelector) {
        return function (source) {
            return source.pipe(exhaustMap(function (a, i) { return Object(_observable_from__WEBPACK_IMPORTED_MODULE_1__[/* innerFrom */ "c"])(project(a, i)).pipe(Object(_map__WEBPACK_IMPORTED_MODULE_0__[/* map */ "a"])(function (b, ii) { return resultSelector(a, b, i, ii); })); }));
        };
    }
    return Object(_util_lift__WEBPACK_IMPORTED_MODULE_2__[/* operate */ "b"])(function (source, subscriber) {
        var index = 0;
        var innerSub = null;
        var isComplete = false;
        source.subscribe(new _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_3__[/* OperatorSubscriber */ "a"](subscriber, function (outerValue) {
            if (!innerSub) {
                innerSub = new _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_3__[/* OperatorSubscriber */ "a"](subscriber, undefined, function () {
                    innerSub = null;
                    isComplete && subscriber.complete();
                });
                Object(_observable_from__WEBPACK_IMPORTED_MODULE_1__[/* innerFrom */ "c"])(project(outerValue, index++)).subscribe(innerSub);
            }
        }, function () {
            isComplete = true;
            !innerSub && subscriber.complete();
        }));
    });
}
//# sourceMappingURL=exhaustMap.js.map

/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return expand; });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _mergeInternals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88);


function expand(project, concurrent, scheduler) {
    if (concurrent === void 0) { concurrent = Infinity; }
    concurrent = (concurrent || 0) < 1 ? Infinity : concurrent;
    return Object(_util_lift__WEBPACK_IMPORTED_MODULE_0__[/* operate */ "b"])(function (source, subscriber) {
        return Object(_mergeInternals__WEBPACK_IMPORTED_MODULE_1__[/* mergeInternals */ "a"])(source, subscriber, project, concurrent, undefined, true, scheduler);
    });
}
//# sourceMappingURL=expand.js.map

/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return finalize; });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

function finalize(callback) {
    return Object(_util_lift__WEBPACK_IMPORTED_MODULE_0__[/* operate */ "b"])(function (source, subscriber) {
        try {
            source.subscribe(subscriber);
        }
        finally {
            subscriber.add(callback);
        }
    });
}
//# sourceMappingURL=finalize.js.map

/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return findIndex; });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _find__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72);


function findIndex(predicate, thisArg) {
    return Object(_util_lift__WEBPACK_IMPORTED_MODULE_0__[/* operate */ "b"])(Object(_find__WEBPACK_IMPORTED_MODULE_1__[/* createFind */ "a"])(predicate, thisArg, 'index'));
}
//# sourceMappingURL=findIndex.js.map

/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return first; });
/* harmony import */ var _util_EmptyError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);
/* harmony import */ var _take__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26);
/* harmony import */ var _defaultIfEmpty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37);
/* harmony import */ var _throwIfEmpty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38);
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9);






function first(predicate, defaultValue) {
    var hasDefaultValue = arguments.length >= 2;
    return function (source) {
        return source.pipe(predicate ? Object(_filter__WEBPACK_IMPORTED_MODULE_1__[/* filter */ "a"])(function (v, i) { return predicate(v, i, source); }) : _util_identity__WEBPACK_IMPORTED_MODULE_5__[/* identity */ "a"], Object(_take__WEBPACK_IMPORTED_MODULE_2__[/* take */ "a"])(1), hasDefaultValue ? Object(_defaultIfEmpty__WEBPACK_IMPORTED_MODULE_3__[/* defaultIfEmpty */ "a"])(defaultValue) : Object(_throwIfEmpty__WEBPACK_IMPORTED_MODULE_4__[/* throwIfEmpty */ "a"])(function () { return new _util_EmptyError__WEBPACK_IMPORTED_MODULE_0__[/* EmptyError */ "a"](); }));
    };
}
//# sourceMappingURL=first.js.map

/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return groupBy; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _observable_from__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2);






function groupBy(keySelector, elementOrOptions, duration, connector) {
    return Object(_util_lift__WEBPACK_IMPORTED_MODULE_4__[/* operate */ "b"])(function (source, subscriber) {
        var element;
        if (!elementOrOptions || typeof elementOrOptions === 'function') {
            element = elementOrOptions;
        }
        else {
            (duration = elementOrOptions.duration, element = elementOrOptions.element, connector = elementOrOptions.connector);
        }
        var groups = new Map();
        var notify = function (cb) {
            groups.forEach(cb);
            cb(subscriber);
        };
        var handleError = function (err) { return notify(function (consumer) { return consumer.error(err); }); };
        var groupBySourceSubscriber = new GroupBySubscriber(subscriber, function (value) {
            try {
                var key_1 = keySelector(value);
                var group_1 = groups.get(key_1);
                if (!group_1) {
                    groups.set(key_1, (group_1 = connector ? connector() : new _Subject__WEBPACK_IMPORTED_MODULE_3__[/* Subject */ "a"]()));
                    var grouped = createGroupedObservable(key_1, group_1);
                    subscriber.next(grouped);
                    if (duration) {
                        var durationSubscriber_1 = new _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_5__[/* OperatorSubscriber */ "a"](group_1, function () {
                            group_1.complete();
                            durationSubscriber_1 === null || durationSubscriber_1 === void 0 ? void 0 : durationSubscriber_1.unsubscribe();
                        }, undefined, undefined, function () { return groups.delete(key_1); });
                        groupBySourceSubscriber.add(Object(_observable_from__WEBPACK_IMPORTED_MODULE_2__[/* innerFrom */ "c"])(duration(grouped)).subscribe(durationSubscriber_1));
                    }
                }
                group_1.next(element ? element(value) : value);
            }
            catch (err) {
                handleError(err);
            }
        }, function () { return notify(function (consumer) { return consumer.complete(); }); }, handleError, function () { return groups.clear(); });
        source.subscribe(groupBySourceSubscriber);
        function createGroupedObservable(key, groupSubject) {
            var result = new _Observable__WEBPACK_IMPORTED_MODULE_1__[/* Observable */ "a"](function (groupSubscriber) {
                groupBySourceSubscriber.activeGroups++;
                var innerSub = groupSubject.subscribe(groupSubscriber);
                return function () {
                    innerSub.unsubscribe();
                    --groupBySourceSubscriber.activeGroups === 0 &&
                        groupBySourceSubscriber.teardownAttempted &&
                        groupBySourceSubscriber.unsubscribe();
                };
            });
            result.key = key;
            return result;
        }
    });
}
var GroupBySubscriber = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "e"])(GroupBySubscriber, _super);
    function GroupBySubscriber() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.activeGroups = 0;
        _this.teardownAttempted = false;
        return _this;
    }
    GroupBySubscriber.prototype.unsubscribe = function () {
        this.teardownAttempted = true;
        this.activeGroups === 0 && _super.prototype.unsubscribe.call(this);
    };
    return GroupBySubscriber;
}(_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_5__[/* OperatorSubscriber */ "a"]));
//# sourceMappingURL=groupBy.js.map

/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isEmpty; });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);


function isEmpty() {
    return Object(_util_lift__WEBPACK_IMPORTED_MODULE_0__[/* operate */ "b"])(function (source, subscriber) {
        source.subscribe(new _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__[/* OperatorSubscriber */ "a"](subscriber, function () {
            subscriber.next(false);
            subscriber.complete();
        }, function () {
            subscriber.next(true);
            subscriber.complete();
        }));
    });
}
//# sourceMappingURL=isEmpty.js.map

/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return last; });
/* harmony import */ var _util_EmptyError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);
/* harmony import */ var _takeLast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73);
/* harmony import */ var _throwIfEmpty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38);
/* harmony import */ var _defaultIfEmpty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37);
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9);






function last(predicate, defaultValue) {
    var hasDefaultValue = arguments.length >= 2;
    return function (source) {
        return source.pipe(predicate ? Object(_filter__WEBPACK_IMPORTED_MODULE_1__[/* filter */ "a"])(function (v, i) { return predicate(v, i, source); }) : _util_identity__WEBPACK_IMPORTED_MODULE_5__[/* identity */ "a"], Object(_takeLast__WEBPACK_IMPORTED_MODULE_2__[/* takeLast */ "a"])(1), hasDefaultValue ? Object(_defaultIfEmpty__WEBPACK_IMPORTED_MODULE_4__[/* defaultIfEmpty */ "a"])(defaultValue) : Object(_throwIfEmpty__WEBPACK_IMPORTED_MODULE_3__[/* throwIfEmpty */ "a"])(function () { return new _util_EmptyError__WEBPACK_IMPORTED_MODULE_0__[/* EmptyError */ "a"](); }));
    };
}
//# sourceMappingURL=last.js.map

/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return materialize; });
/* harmony import */ var _Notification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);



function materialize() {
    return Object(_util_lift__WEBPACK_IMPORTED_MODULE_1__[/* operate */ "b"])(function (source, subscriber) {
        source.subscribe(new _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__[/* OperatorSubscriber */ "a"](subscriber, function (value) {
            subscriber.next(_Notification__WEBPACK_IMPORTED_MODULE_0__[/* Notification */ "a"].createNext(value));
        }, function () {
            subscriber.next(_Notification__WEBPACK_IMPORTED_MODULE_0__[/* Notification */ "a"].createComplete());
            subscriber.complete();
        }, function (err) {
            subscriber.next(_Notification__WEBPACK_IMPORTED_MODULE_0__[/* Notification */ "a"].createError(err));
            subscriber.complete();
        }));
    });
}
//# sourceMappingURL=materialize.js.map

/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return max; });
/* harmony import */ var _reduce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);


function max(comparer) {
    return Object(_reduce__WEBPACK_IMPORTED_MODULE_0__[/* reduce */ "a"])(Object(_util_isFunction__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "a"])(comparer) ? function (x, y) { return (comparer(x, y) > 0 ? x : y); } : function (x, y) { return (x > y ? x : y); });
}
//# sourceMappingURL=max.js.map

/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return flatMap; });
/* harmony import */ var _mergeMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);

var flatMap = _mergeMap__WEBPACK_IMPORTED_MODULE_0__[/* mergeMap */ "a"];
//# sourceMappingURL=flatMap.js.map

/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mergeMapTo; });
/* harmony import */ var _mergeMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);


function mergeMapTo(innerObservable, resultSelector, concurrent) {
    if (concurrent === void 0) { concurrent = Infinity; }
    if (Object(_util_isFunction__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "a"])(resultSelector)) {
        return Object(_mergeMap__WEBPACK_IMPORTED_MODULE_0__[/* mergeMap */ "a"])(function () { return innerObservable; }, resultSelector, concurrent);
    }
    if (typeof resultSelector === 'number') {
        concurrent = resultSelector;
    }
    return Object(_mergeMap__WEBPACK_IMPORTED_MODULE_0__[/* mergeMap */ "a"])(function () { return innerObservable; }, concurrent);
}
//# sourceMappingURL=mergeMapTo.js.map

/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mergeScan; });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _mergeInternals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88);


function mergeScan(accumulator, seed, concurrent) {
    if (concurrent === void 0) { concurrent = Infinity; }
    return Object(_util_lift__WEBPACK_IMPORTED_MODULE_0__[/* operate */ "b"])(function (source, subscriber) {
        var state = seed;
        return Object(_mergeInternals__WEBPACK_IMPORTED_MODULE_1__[/* mergeInternals */ "a"])(source, subscriber, function (value, index) { return accumulator(state, value, index); }, concurrent, function (value) {
            state = value;
        }, false, undefined, function () { return (state = null); });
    });
}
//# sourceMappingURL=mergeScan.js.map

/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mergeWith; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _merge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(180);


function mergeWith() {
    var otherSources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        otherSources[_i] = arguments[_i];
    }
    return _merge__WEBPACK_IMPORTED_MODULE_1__[/* merge */ "a"].apply(void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __spreadArray */ "h"])([], Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __read */ "g"])(otherSources)));
}
//# sourceMappingURL=mergeWith.js.map

/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return min; });
/* harmony import */ var _reduce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);


function min(comparer) {
    return Object(_reduce__WEBPACK_IMPORTED_MODULE_0__[/* reduce */ "a"])(Object(_util_isFunction__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "a"])(comparer) ? function (x, y) { return (comparer(x, y) < 0 ? x : y); } : function (x, y) { return (x < y ? x : y); });
}
//# sourceMappingURL=min.js.map

/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pairwise; });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);


function pairwise() {
    return Object(_util_lift__WEBPACK_IMPORTED_MODULE_0__[/* operate */ "b"])(function (source, subscriber) {
        var prev;
        var hasPrev = false;
        source.subscribe(new _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__[/* OperatorSubscriber */ "a"](subscriber, function (value) {
            var p = prev;
            prev = value;
            hasPrev && subscriber.next([p, value]);
            hasPrev = true;
        }));
    });
}
//# sourceMappingURL=pairwise.js.map

/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pluck; });
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);

function pluck() {
    var properties = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        properties[_i] = arguments[_i];
    }
    var length = properties.length;
    if (length === 0) {
        throw new Error('list of properties cannot be empty.');
    }
    return Object(_map__WEBPACK_IMPORTED_MODULE_0__[/* map */ "a"])(function (x) {
        var currentProp = x;
        for (var i = 0; i < length; i++) {
            var p = currentProp === null || currentProp === void 0 ? void 0 : currentProp[properties[i]];
            if (typeof p !== 'undefined') {
                currentProp = p;
            }
            else {
                return undefined;
            }
        }
        return currentProp;
    });
}
//# sourceMappingURL=pluck.js.map

/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return publish; });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _multicast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50);
/* harmony import */ var _connect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52);



function publish(selector) {
    return selector ? function (source) { return Object(_connect__WEBPACK_IMPORTED_MODULE_2__[/* connect */ "a"])(selector)(source); } : function (source) { return Object(_multicast__WEBPACK_IMPORTED_MODULE_1__[/* multicast */ "a"])(new _Subject__WEBPACK_IMPORTED_MODULE_0__[/* Subject */ "a"]())(source); };
}
//# sourceMappingURL=publish.js.map

/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return publishBehavior; });
/* harmony import */ var _BehaviorSubject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(171);
/* harmony import */ var _observable_ConnectableObservable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54);


function publishBehavior(initialValue) {
    return function (source) {
        var subject = new _BehaviorSubject__WEBPACK_IMPORTED_MODULE_0__[/* BehaviorSubject */ "a"](initialValue);
        return new _observable_ConnectableObservable__WEBPACK_IMPORTED_MODULE_1__[/* ConnectableObservable */ "a"](source, function () { return subject; });
    };
}
//# sourceMappingURL=publishBehavior.js.map

/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return publishLast; });
/* harmony import */ var _AsyncSubject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79);
/* harmony import */ var _observable_ConnectableObservable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54);


function publishLast() {
    return function (source) {
        var subject = new _AsyncSubject__WEBPACK_IMPORTED_MODULE_0__[/* AsyncSubject */ "a"]();
        return new _observable_ConnectableObservable__WEBPACK_IMPORTED_MODULE_1__[/* ConnectableObservable */ "a"](source, function () { return subject; });
    };
}
//# sourceMappingURL=publishLast.js.map

/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return publishReplay; });
/* harmony import */ var _ReplaySubject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78);
/* harmony import */ var _multicast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);



function publishReplay(bufferSize, windowTime, selectorOrScheduler, timestampProvider) {
    if (selectorOrScheduler && !Object(_util_isFunction__WEBPACK_IMPORTED_MODULE_2__[/* isFunction */ "a"])(selectorOrScheduler)) {
        timestampProvider = selectorOrScheduler;
    }
    var selector = Object(_util_isFunction__WEBPACK_IMPORTED_MODULE_2__[/* isFunction */ "a"])(selectorOrScheduler) ? selectorOrScheduler : undefined;
    return function (source) { return Object(_multicast__WEBPACK_IMPORTED_MODULE_1__[/* multicast */ "a"])(new _ReplaySubject__WEBPACK_IMPORTED_MODULE_0__[/* ReplaySubject */ "a"](bufferSize, windowTime, timestampProvider), selector)(source); };
}
//# sourceMappingURL=publishReplay.js.map

/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return repeat; });
/* harmony import */ var _observable_empty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);



function repeat(count) {
    if (count === void 0) { count = Infinity; }
    return count <= 0
        ? function () { return _observable_empty__WEBPACK_IMPORTED_MODULE_0__[/* EMPTY */ "a"]; }
        : Object(_util_lift__WEBPACK_IMPORTED_MODULE_1__[/* operate */ "b"])(function (source, subscriber) {
            var soFar = 0;
            var innerSub;
            var subscribeForRepeat = function () {
                var syncUnsub = false;
                innerSub = source.subscribe(new _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__[/* OperatorSubscriber */ "a"](subscriber, undefined, function () {
                    if (++soFar < count) {
                        if (innerSub) {
                            innerSub.unsubscribe();
                            innerSub = null;
                            subscribeForRepeat();
                        }
                        else {
                            syncUnsub = true;
                        }
                    }
                    else {
                        subscriber.complete();
                    }
                }));
                if (syncUnsub) {
                    innerSub.unsubscribe();
                    innerSub = null;
                    subscribeForRepeat();
                }
            };
            subscribeForRepeat();
        });
}
//# sourceMappingURL=repeat.js.map

/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return repeatWhen; });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);



function repeatWhen(notifier) {
    return Object(_util_lift__WEBPACK_IMPORTED_MODULE_1__[/* operate */ "b"])(function (source, subscriber) {
        var innerSub;
        var syncResub = false;
        var completions$;
        var isNotifierComplete = false;
        var isMainComplete = false;
        var checkComplete = function () { return isMainComplete && isNotifierComplete && (subscriber.complete(), true); };
        var getCompletionSubject = function () {
            if (!completions$) {
                completions$ = new _Subject__WEBPACK_IMPORTED_MODULE_0__[/* Subject */ "a"]();
                notifier(completions$).subscribe(new _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__[/* OperatorSubscriber */ "a"](subscriber, function () {
                    if (innerSub) {
                        subscribeForRepeatWhen();
                    }
                    else {
                        syncResub = true;
                    }
                }, function () {
                    isNotifierComplete = true;
                    checkComplete();
                }));
            }
            return completions$;
        };
        var subscribeForRepeatWhen = function () {
            isMainComplete = false;
            innerSub = source.subscribe(new _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__[/* OperatorSubscriber */ "a"](subscriber, undefined, function () {
                isMainComplete = true;
                !checkComplete() && getCompletionSubject().next();
            }));
            if (syncResub) {
                innerSub.unsubscribe();
                innerSub = null;
                syncResub = false;
                subscribeForRepeatWhen();
            }
        };
        subscribeForRepeatWhen();
    });
}
//# sourceMappingURL=repeatWhen.js.map

/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return retry; });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var _observable_timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30);
/* harmony import */ var _observable_from__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);





function retry(configOrCount) {
    if (configOrCount === void 0) { configOrCount = Infinity; }
    var config;
    if (configOrCount && typeof configOrCount === 'object') {
        config = configOrCount;
    }
    else {
        config = {
            count: configOrCount,
        };
    }
    var _a = config.count, count = _a === void 0 ? Infinity : _a, delay = config.delay, _b = config.resetOnSuccess, resetOnSuccess = _b === void 0 ? false : _b;
    return count <= 0
        ? _util_identity__WEBPACK_IMPORTED_MODULE_2__[/* identity */ "a"]
        : Object(_util_lift__WEBPACK_IMPORTED_MODULE_0__[/* operate */ "b"])(function (source, subscriber) {
            var soFar = 0;
            var innerSub;
            var subscribeForRetry = function () {
                var syncUnsub = false;
                innerSub = source.subscribe(new _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__[/* OperatorSubscriber */ "a"](subscriber, function (value) {
                    if (resetOnSuccess) {
                        soFar = 0;
                    }
                    subscriber.next(value);
                }, undefined, function (err) {
                    if (soFar++ < count) {
                        var resub_1 = function () {
                            if (innerSub) {
                                innerSub.unsubscribe();
                                innerSub = null;
                                subscribeForRetry();
                            }
                            else {
                                syncUnsub = true;
                            }
                        };
                        if (delay != null) {
                            var notifier = typeof delay === 'number' ? Object(_observable_timer__WEBPACK_IMPORTED_MODULE_3__[/* timer */ "a"])(delay) : Object(_observable_from__WEBPACK_IMPORTED_MODULE_4__[/* innerFrom */ "c"])(delay(err, soFar));
                            var notifierSubscriber_1 = new _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__[/* OperatorSubscriber */ "a"](subscriber, function () {
                                notifierSubscriber_1.unsubscribe();
                                resub_1();
                            }, function () {
                                subscriber.complete();
                            });
                            notifier.subscribe(notifierSubscriber_1);
                        }
                        else {
                            resub_1();
                        }
                    }
                    else {
                        subscriber.error(err);
                    }
                }));
                if (syncUnsub) {
                    innerSub.unsubscribe();
                    innerSub = null;
                    subscribeForRetry();
                }
            };
            subscribeForRetry();
        });
}
//# sourceMappingURL=retry.js.map

/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return retryWhen; });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);



function retryWhen(notifier) {
    return Object(_util_lift__WEBPACK_IMPORTED_MODULE_1__[/* operate */ "b"])(function (source, subscriber) {
        var innerSub;
        var syncResub = false;
        var errors$;
        var subscribeForRetryWhen = function () {
            innerSub = source.subscribe(new _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__[/* OperatorSubscriber */ "a"](subscriber, undefined, undefined, function (err) {
                if (!errors$) {
                    errors$ = new _Subject__WEBPACK_IMPORTED_MODULE_0__[/* Subject */ "a"]();
                    notifier(errors$).subscribe(new _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__[/* OperatorSubscriber */ "a"](subscriber, function () {
                        return innerSub ? subscribeForRetryWhen() : (syncResub = true);
                    }));
                }
                if (errors$) {
                    errors$.next(err);
                }
            }));
            if (syncResub) {
                innerSub.unsubscribe();
                innerSub = null;
                syncResub = false;
                subscribeForRetryWhen();
            }
        };
        subscribeForRetryWhen();
    });
}
//# sourceMappingURL=retryWhen.js.map

/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sampleTime; });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _sample__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75);
/* harmony import */ var _observable_interval__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(175);



function sampleTime(period, scheduler) {
    if (scheduler === void 0) { scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__[/* asyncScheduler */ "b"]; }
    return Object(_sample__WEBPACK_IMPORTED_MODULE_1__[/* sample */ "a"])(Object(_observable_interval__WEBPACK_IMPORTED_MODULE_2__[/* interval */ "a"])(period, scheduler));
}
//# sourceMappingURL=sampleTime.js.map

/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sequenceEqual; });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);


function sequenceEqual(compareTo, comparator) {
    if (comparator === void 0) { comparator = function (a, b) { return a === b; }; }
    return Object(_util_lift__WEBPACK_IMPORTED_MODULE_0__[/* operate */ "b"])(function (source, subscriber) {
        var aState = createState();
        var bState = createState();
        var emit = function (isEqual) {
            subscriber.next(isEqual);
            subscriber.complete();
        };
        var createSubscriber = function (selfState, otherState) {
            var sequenceEqualSubscriber = new _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__[/* OperatorSubscriber */ "a"](subscriber, function (a) {
                var buffer = otherState.buffer, complete = otherState.complete;
                if (buffer.length === 0) {
                    complete ? emit(false) : selfState.buffer.push(a);
                }
                else {
                    !comparator(a, buffer.shift()) && emit(false);
                }
            }, function () {
                selfState.complete = true;
                var complete = otherState.complete, buffer = otherState.buffer;
                complete && emit(buffer.length === 0);
                sequenceEqualSubscriber === null || sequenceEqualSubscriber === void 0 ? void 0 : sequenceEqualSubscriber.unsubscribe();
            });
            return sequenceEqualSubscriber;
        };
        source.subscribe(createSubscriber(aState, bState));
        compareTo.subscribe(createSubscriber(bState, aState));
    });
}
function createState() {
    return {
        buffer: [],
        complete: false,
    };
}
//# sourceMappingURL=sequenceEqual.js.map

/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return shareReplay; });
/* harmony import */ var _ReplaySubject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78);
/* harmony import */ var _share__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77);


function shareReplay(configOrBufferSize, windowTime, scheduler) {
    var _a, _b;
    var bufferSize;
    var refCount = false;
    if (configOrBufferSize && typeof configOrBufferSize === 'object') {
        bufferSize = (_a = configOrBufferSize.bufferSize) !== null && _a !== void 0 ? _a : Infinity;
        windowTime = (_b = configOrBufferSize.windowTime) !== null && _b !== void 0 ? _b : Infinity;
        refCount = !!configOrBufferSize.refCount;
        scheduler = configOrBufferSize.scheduler;
    }
    else {
        bufferSize = configOrBufferSize !== null && configOrBufferSize !== void 0 ? configOrBufferSize : Infinity;
    }
    return Object(_share__WEBPACK_IMPORTED_MODULE_1__[/* share */ "a"])({
        connector: function () { return new _ReplaySubject__WEBPACK_IMPORTED_MODULE_0__[/* ReplaySubject */ "a"](bufferSize, windowTime, scheduler); },
        resetOnError: true,
        resetOnComplete: false,
        resetOnRefCountZero: refCount
    });
}
//# sourceMappingURL=shareReplay.js.map

/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return single; });
/* harmony import */ var _util_EmptyError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _util_SequenceError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(174);
/* harmony import */ var _util_NotFoundError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(173);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);





function single(predicate) {
    return Object(_util_lift__WEBPACK_IMPORTED_MODULE_3__[/* operate */ "b"])(function (source, subscriber) {
        var hasValue = false;
        var singleValue;
        var seenValue = false;
        var index = 0;
        source.subscribe(new _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_4__[/* OperatorSubscriber */ "a"](subscriber, function (value) {
            seenValue = true;
            if (!predicate || predicate(value, index++, source)) {
                hasValue && subscriber.error(new _util_SequenceError__WEBPACK_IMPORTED_MODULE_1__[/* SequenceError */ "a"]('Too many matching values'));
                hasValue = true;
                singleValue = value;
            }
        }, function () {
            if (hasValue) {
                subscriber.next(singleValue);
                subscriber.complete();
            }
            else {
                subscriber.error(seenValue ? new _util_NotFoundError__WEBPACK_IMPORTED_MODULE_2__[/* NotFoundError */ "a"]('No matching values') : new _util_EmptyError__WEBPACK_IMPORTED_MODULE_0__[/* EmptyError */ "a"]());
            }
        }));
    });
}
//# sourceMappingURL=single.js.map

/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return skip; });
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);

function skip(count) {
    return Object(_filter__WEBPACK_IMPORTED_MODULE_0__[/* filter */ "a"])(function (_, index) { return count <= index; });
}
//# sourceMappingURL=skip.js.map

/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return skipLast; });
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);



function skipLast(skipCount) {
    return skipCount <= 0
        ?
            _util_identity__WEBPACK_IMPORTED_MODULE_0__[/* identity */ "a"]
        : Object(_util_lift__WEBPACK_IMPORTED_MODULE_1__[/* operate */ "b"])(function (source, subscriber) {
            var ring = new Array(skipCount);
            var seen = 0;
            source.subscribe(new _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__[/* OperatorSubscriber */ "a"](subscriber, function (value) {
                var valueIndex = seen++;
                if (valueIndex < skipCount) {
                    ring[valueIndex] = value;
                }
                else {
                    var index = valueIndex % skipCount;
                    var oldValue = ring[index];
                    ring[index] = value;
                    subscriber.next(oldValue);
                }
            }));
            return function () {
                ring = null;
            };
        });
}
//# sourceMappingURL=skipLast.js.map

/***/ }),
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return skipUntil; });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _observable_from__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);




function skipUntil(notifier) {
    return Object(_util_lift__WEBPACK_IMPORTED_MODULE_0__[/* operate */ "b"])(function (source, subscriber) {
        var taking = false;
        var skipSubscriber = new _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__[/* OperatorSubscriber */ "a"](subscriber, function () {
            skipSubscriber === null || skipSubscriber === void 0 ? void 0 : skipSubscriber.unsubscribe();
            taking = true;
        }, _util_noop__WEBPACK_IMPORTED_MODULE_3__[/* noop */ "a"]);
        Object(_observable_from__WEBPACK_IMPORTED_MODULE_2__[/* innerFrom */ "c"])(notifier).subscribe(skipSubscriber);
        source.subscribe(new _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__[/* OperatorSubscriber */ "a"](subscriber, function (value) { return taking && subscriber.next(value); }));
    });
}
//# sourceMappingURL=skipUntil.js.map

/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return skipWhile; });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);


function skipWhile(predicate) {
    return Object(_util_lift__WEBPACK_IMPORTED_MODULE_0__[/* operate */ "b"])(function (source, subscriber) {
        var taking = false;
        var index = 0;
        source.subscribe(new _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__[/* OperatorSubscriber */ "a"](subscriber, function (value) { return (taking || (taking = !predicate(value, index++))) && subscriber.next(value); }));
    });
}
//# sourceMappingURL=skipWhile.js.map

/***/ }),
/* 150 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return startWith; });
/* harmony import */ var _observable_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44);
/* harmony import */ var _util_args__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);



function startWith() {
    var values = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
    }
    var scheduler = Object(_util_args__WEBPACK_IMPORTED_MODULE_1__[/* popScheduler */ "c"])(values);
    return Object(_util_lift__WEBPACK_IMPORTED_MODULE_2__[/* operate */ "b"])(function (source, subscriber) {
        (scheduler ? Object(_observable_concat__WEBPACK_IMPORTED_MODULE_0__[/* concat */ "a"])(values, source, scheduler) : Object(_observable_concat__WEBPACK_IMPORTED_MODULE_0__[/* concat */ "a"])(values, source)).subscribe(subscriber);
    });
}
//# sourceMappingURL=startWith.js.map

/***/ }),
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return switchAll; });
/* harmony import */ var _switchMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);


function switchAll() {
    return Object(_switchMap__WEBPACK_IMPORTED_MODULE_0__[/* switchMap */ "a"])(_util_identity__WEBPACK_IMPORTED_MODULE_1__[/* identity */ "a"]);
}
//# sourceMappingURL=switchAll.js.map

/***/ }),
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return switchMapTo; });
/* harmony import */ var _switchMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);


function switchMapTo(innerObservable, resultSelector) {
    return Object(_util_isFunction__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "a"])(resultSelector) ? Object(_switchMap__WEBPACK_IMPORTED_MODULE_0__[/* switchMap */ "a"])(function () { return innerObservable; }, resultSelector) : Object(_switchMap__WEBPACK_IMPORTED_MODULE_0__[/* switchMap */ "a"])(function () { return innerObservable; });
}
//# sourceMappingURL=switchMapTo.js.map

/***/ }),
/* 153 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return switchScan; });
/* harmony import */ var _switchMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);


function switchScan(accumulator, seed) {
    return Object(_util_lift__WEBPACK_IMPORTED_MODULE_1__[/* operate */ "b"])(function (source, subscriber) {
        var state = seed;
        Object(_switchMap__WEBPACK_IMPORTED_MODULE_0__[/* switchMap */ "a"])(function (value, index) { return accumulator(state, value, index); }, function (_, innerValue) { return ((state = innerValue), innerValue); })(source).subscribe(subscriber);
        return function () {
            state = null;
        };
    });
}
//# sourceMappingURL=switchScan.js.map

/***/ }),
/* 154 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return takeUntil; });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _observable_from__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);




function takeUntil(notifier) {
    return Object(_util_lift__WEBPACK_IMPORTED_MODULE_0__[/* operate */ "b"])(function (source, subscriber) {
        Object(_observable_from__WEBPACK_IMPORTED_MODULE_2__[/* innerFrom */ "c"])(notifier).subscribe(new _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__[/* OperatorSubscriber */ "a"](subscriber, function () { return subscriber.complete(); }, _util_noop__WEBPACK_IMPORTED_MODULE_3__[/* noop */ "a"]));
        !subscriber.closed && source.subscribe(subscriber);
    });
}
//# sourceMappingURL=takeUntil.js.map

/***/ }),
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return takeWhile; });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);


function takeWhile(predicate, inclusive) {
    if (inclusive === void 0) { inclusive = false; }
    return Object(_util_lift__WEBPACK_IMPORTED_MODULE_0__[/* operate */ "b"])(function (source, subscriber) {
        var index = 0;
        source.subscribe(new _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__[/* OperatorSubscriber */ "a"](subscriber, function (value) {
            var result = predicate(value, index++);
            (result || inclusive) && subscriber.next(value);
            !result && subscriber.complete();
        }));
    });
}
//# sourceMappingURL=takeWhile.js.map

/***/ }),
/* 156 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tap; });
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);




function tap(observerOrNext, error, complete) {
    var tapObserver = Object(_util_isFunction__WEBPACK_IMPORTED_MODULE_0__[/* isFunction */ "a"])(observerOrNext) || error || complete
        ?
            { next: observerOrNext, error: error, complete: complete }
        : observerOrNext;
    return tapObserver
        ? Object(_util_lift__WEBPACK_IMPORTED_MODULE_1__[/* operate */ "b"])(function (source, subscriber) {
            var _a;
            (_a = tapObserver.subscribe) === null || _a === void 0 ? void 0 : _a.call(tapObserver);
            var isUnsub = true;
            source.subscribe(new _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__[/* OperatorSubscriber */ "a"](subscriber, function (value) {
                var _a;
                (_a = tapObserver.next) === null || _a === void 0 ? void 0 : _a.call(tapObserver, value);
                subscriber.next(value);
            }, function () {
                var _a;
                isUnsub = false;
                (_a = tapObserver.complete) === null || _a === void 0 ? void 0 : _a.call(tapObserver);
                subscriber.complete();
            }, function (err) {
                var _a;
                isUnsub = false;
                (_a = tapObserver.error) === null || _a === void 0 ? void 0 : _a.call(tapObserver, err);
                subscriber.error(err);
            }, function () {
                var _a, _b;
                if (isUnsub) {
                    (_a = tapObserver.unsubscribe) === null || _a === void 0 ? void 0 : _a.call(tapObserver);
                }
                (_b = tapObserver.finalize) === null || _b === void 0 ? void 0 : _b.call(tapObserver);
            }));
        })
        :
            _util_identity__WEBPACK_IMPORTED_MODULE_3__[/* identity */ "a"];
}
//# sourceMappingURL=tap.js.map

/***/ }),
/* 157 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return throttleTime; });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _throttle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58);
/* harmony import */ var _observable_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30);



function throttleTime(duration, scheduler, config) {
    if (scheduler === void 0) { scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__[/* asyncScheduler */ "b"]; }
    if (config === void 0) { config = _throttle__WEBPACK_IMPORTED_MODULE_1__[/* defaultThrottleConfig */ "a"]; }
    var duration$ = Object(_observable_timer__WEBPACK_IMPORTED_MODULE_2__[/* timer */ "a"])(duration, scheduler);
    return Object(_throttle__WEBPACK_IMPORTED_MODULE_1__[/* throttle */ "b"])(function () { return duration$; }, config);
}
//# sourceMappingURL=throttleTime.js.map

/***/ }),
/* 158 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return timeInterval; });
/* unused harmony export TimeInterval */
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _scan__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76);
/* harmony import */ var _observable_defer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40);
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);




function timeInterval(scheduler) {
    if (scheduler === void 0) { scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__[/* async */ "a"]; }
    return function (source) {
        return Object(_observable_defer__WEBPACK_IMPORTED_MODULE_2__[/* defer */ "a"])(function () {
            return source.pipe(Object(_scan__WEBPACK_IMPORTED_MODULE_1__[/* scan */ "a"])(function (_a, value) {
                var current = _a.current;
                return ({ value: value, current: scheduler.now(), last: current });
            }, {
                current: scheduler.now(),
                value: undefined,
                last: undefined,
            }), Object(_map__WEBPACK_IMPORTED_MODULE_3__[/* map */ "a"])(function (_a) {
                var current = _a.current, last = _a.last, value = _a.value;
                return new TimeInterval(value, current - last);
            }));
        });
    };
}
var TimeInterval = (function () {
    function TimeInterval(value, interval) {
        this.value = value;
        this.interval = interval;
    }
    return TimeInterval;
}());

//# sourceMappingURL=timeInterval.js.map

/***/ }),
/* 159 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return timeoutWith; });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _util_isDate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87);
/* harmony import */ var _timeout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48);



function timeoutWith(due, withObservable, scheduler) {
    var first;
    var each;
    var _with;
    scheduler = scheduler !== null && scheduler !== void 0 ? scheduler : _scheduler_async__WEBPACK_IMPORTED_MODULE_0__[/* async */ "a"];
    if (Object(_util_isDate__WEBPACK_IMPORTED_MODULE_1__[/* isValidDate */ "a"])(due)) {
        first = due;
    }
    else if (typeof due === 'number') {
        each = due;
    }
    if (withObservable) {
        _with = function () { return withObservable; };
    }
    else {
        throw new TypeError('No observable provided to switch to');
    }
    if (first == null && each == null) {
        throw new TypeError('No timeout provided.');
    }
    return Object(_timeout__WEBPACK_IMPORTED_MODULE_2__[/* timeout */ "b"])({
        first: first,
        each: each,
        scheduler: scheduler,
        with: _with,
    });
}
//# sourceMappingURL=timeoutWith.js.map

/***/ }),
/* 160 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return timestamp; });
/* harmony import */ var _scheduler_dateTimestampProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84);
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);


function timestamp(timestampProvider) {
    if (timestampProvider === void 0) { timestampProvider = _scheduler_dateTimestampProvider__WEBPACK_IMPORTED_MODULE_0__[/* dateTimestampProvider */ "a"]; }
    return Object(_map__WEBPACK_IMPORTED_MODULE_1__[/* map */ "a"])(function (value) { return ({ value: value, timestamp: timestampProvider.now() }); });
}
//# sourceMappingURL=timestamp.js.map

/***/ }),
/* 161 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return window; });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);




function window(windowBoundaries) {
    return Object(_util_lift__WEBPACK_IMPORTED_MODULE_1__[/* operate */ "b"])(function (source, subscriber) {
        var windowSubject = new _Subject__WEBPACK_IMPORTED_MODULE_0__[/* Subject */ "a"]();
        subscriber.next(windowSubject.asObservable());
        var errorHandler = function (err) {
            windowSubject.error(err);
            subscriber.error(err);
        };
        source.subscribe(new _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__[/* OperatorSubscriber */ "a"](subscriber, function (value) { return windowSubject === null || windowSubject === void 0 ? void 0 : windowSubject.next(value); }, function () {
            windowSubject.complete();
            subscriber.complete();
        }, errorHandler));
        windowBoundaries.subscribe(new _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__[/* OperatorSubscriber */ "a"](subscriber, function () {
            windowSubject.complete();
            subscriber.next((windowSubject = new _Subject__WEBPACK_IMPORTED_MODULE_0__[/* Subject */ "a"]()));
        }, _util_noop__WEBPACK_IMPORTED_MODULE_3__[/* noop */ "a"], errorHandler));
        return function () {
            windowSubject === null || windowSubject === void 0 ? void 0 : windowSubject.unsubscribe();
            windowSubject = null;
        };
    });
}
//# sourceMappingURL=window.js.map

/***/ }),
/* 162 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return windowCount; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);




function windowCount(windowSize, startWindowEvery) {
    if (startWindowEvery === void 0) { startWindowEvery = 0; }
    var startEvery = startWindowEvery > 0 ? startWindowEvery : windowSize;
    return Object(_util_lift__WEBPACK_IMPORTED_MODULE_2__[/* operate */ "b"])(function (source, subscriber) {
        var windows = [new _Subject__WEBPACK_IMPORTED_MODULE_1__[/* Subject */ "a"]()];
        var starts = [];
        var count = 0;
        subscriber.next(windows[0].asObservable());
        source.subscribe(new _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_3__[/* OperatorSubscriber */ "a"](subscriber, function (value) {
            var e_1, _a;
            try {
                for (var windows_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __values */ "i"])(windows), windows_1_1 = windows_1.next(); !windows_1_1.done; windows_1_1 = windows_1.next()) {
                    var window_1 = windows_1_1.value;
                    window_1.next(value);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (windows_1_1 && !windows_1_1.done && (_a = windows_1.return)) _a.call(windows_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            var c = count - windowSize + 1;
            if (c >= 0 && c % startEvery === 0) {
                windows.shift().complete();
            }
            if (++count % startEvery === 0) {
                var window_2 = new _Subject__WEBPACK_IMPORTED_MODULE_1__[/* Subject */ "a"]();
                windows.push(window_2);
                subscriber.next(window_2.asObservable());
            }
        }, function () {
            while (windows.length > 0) {
                windows.shift().complete();
            }
            subscriber.complete();
        }, function (err) {
            while (windows.length > 0) {
                windows.shift().error(err);
            }
            subscriber.error(err);
        }, function () {
            starts = null;
            windows = null;
        }));
    });
}
//# sourceMappingURL=windowCount.js.map

/***/ }),
/* 163 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return windowTime; });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var _util_arrRemove__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18);
/* harmony import */ var _util_args__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10);







function windowTime(windowTimeSpan) {
    var _a, _b;
    var otherArgs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        otherArgs[_i - 1] = arguments[_i];
    }
    var scheduler = (_a = Object(_util_args__WEBPACK_IMPORTED_MODULE_6__[/* popScheduler */ "c"])(otherArgs)) !== null && _a !== void 0 ? _a : _scheduler_async__WEBPACK_IMPORTED_MODULE_1__[/* asyncScheduler */ "b"];
    var windowCreationInterval = (_b = otherArgs[0]) !== null && _b !== void 0 ? _b : null;
    var maxWindowSize = otherArgs[1] || Infinity;
    return Object(_util_lift__WEBPACK_IMPORTED_MODULE_3__[/* operate */ "b"])(function (source, subscriber) {
        var windowRecords = [];
        var restartOnClose = false;
        var closeWindow = function (record) {
            var window = record.window, subs = record.subs;
            window.complete();
            subs.unsubscribe();
            Object(_util_arrRemove__WEBPACK_IMPORTED_MODULE_5__[/* arrRemove */ "a"])(windowRecords, record);
            restartOnClose && startWindow();
        };
        var startWindow = function () {
            if (windowRecords) {
                var subs = new _Subscription__WEBPACK_IMPORTED_MODULE_2__[/* Subscription */ "b"]();
                subscriber.add(subs);
                var window_1 = new _Subject__WEBPACK_IMPORTED_MODULE_0__[/* Subject */ "a"]();
                var record_1 = {
                    window: window_1,
                    subs: subs,
                    seen: 0,
                };
                windowRecords.push(record_1);
                subscriber.next(window_1.asObservable());
                subs.add(scheduler.schedule(function () { return closeWindow(record_1); }, windowTimeSpan));
            }
        };
        windowCreationInterval !== null && windowCreationInterval >= 0
            ?
                subscriber.add(scheduler.schedule(function () {
                    startWindow();
                    !this.closed && subscriber.add(this.schedule(null, windowCreationInterval));
                }, windowCreationInterval))
            : (restartOnClose = true);
        startWindow();
        var loop = function (cb) { return windowRecords.slice().forEach(cb); };
        var terminate = function (cb) {
            loop(function (_a) {
                var window = _a.window;
                return cb(window);
            });
            cb(subscriber);
            subscriber.unsubscribe();
        };
        source.subscribe(new _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_4__[/* OperatorSubscriber */ "a"](subscriber, function (value) {
            loop(function (record) {
                record.window.next(value);
                maxWindowSize <= ++record.seen && closeWindow(record);
            });
        }, function () { return terminate(function (consumer) { return consumer.complete(); }); }, function (err) { return terminate(function (consumer) { return consumer.error(err); }); }));
        return function () {
            windowRecords = null;
        };
    });
}
//# sourceMappingURL=windowTime.js.map

/***/ }),
/* 164 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return windowToggle; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _observable_from__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2);
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6);
/* harmony import */ var _util_arrRemove__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(18);








function windowToggle(openings, closingSelector) {
    return Object(_util_lift__WEBPACK_IMPORTED_MODULE_3__[/* operate */ "b"])(function (source, subscriber) {
        var windows = [];
        var handleError = function (err) {
            while (0 < windows.length) {
                windows.shift().error(err);
            }
            subscriber.error(err);
        };
        Object(_observable_from__WEBPACK_IMPORTED_MODULE_4__[/* innerFrom */ "c"])(openings).subscribe(new _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_5__[/* OperatorSubscriber */ "a"](subscriber, function (openValue) {
            var window = new _Subject__WEBPACK_IMPORTED_MODULE_1__[/* Subject */ "a"]();
            windows.push(window);
            var closingSubscription = new _Subscription__WEBPACK_IMPORTED_MODULE_2__[/* Subscription */ "b"]();
            var closeWindow = function () {
                Object(_util_arrRemove__WEBPACK_IMPORTED_MODULE_7__[/* arrRemove */ "a"])(windows, window);
                window.complete();
                closingSubscription.unsubscribe();
            };
            var closingNotifier;
            try {
                closingNotifier = Object(_observable_from__WEBPACK_IMPORTED_MODULE_4__[/* innerFrom */ "c"])(closingSelector(openValue));
            }
            catch (err) {
                handleError(err);
                return;
            }
            subscriber.next(window.asObservable());
            closingSubscription.add(closingNotifier.subscribe(new _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_5__[/* OperatorSubscriber */ "a"](subscriber, closeWindow, _util_noop__WEBPACK_IMPORTED_MODULE_6__[/* noop */ "a"], handleError)));
        }, _util_noop__WEBPACK_IMPORTED_MODULE_6__[/* noop */ "a"]));
        source.subscribe(new _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_5__[/* OperatorSubscriber */ "a"](subscriber, function (value) {
            var e_1, _a;
            var windowsCopy = windows.slice();
            try {
                for (var windowsCopy_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __values */ "i"])(windowsCopy), windowsCopy_1_1 = windowsCopy_1.next(); !windowsCopy_1_1.done; windowsCopy_1_1 = windowsCopy_1.next()) {
                    var window_1 = windowsCopy_1_1.value;
                    window_1.next(value);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (windowsCopy_1_1 && !windowsCopy_1_1.done && (_a = windowsCopy_1.return)) _a.call(windowsCopy_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }, function () {
            while (0 < windows.length) {
                windows.shift().complete();
            }
            subscriber.complete();
        }, handleError, function () {
            while (0 < windows.length) {
                windows.shift().unsubscribe();
            }
        }));
    });
}
//# sourceMappingURL=windowToggle.js.map

/***/ }),
/* 165 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return windowWhen; });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _observable_from__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);




function windowWhen(closingSelector) {
    return Object(_util_lift__WEBPACK_IMPORTED_MODULE_1__[/* operate */ "b"])(function (source, subscriber) {
        var window;
        var closingSubscriber;
        var handleError = function (err) {
            window.error(err);
            subscriber.error(err);
        };
        var openWindow = function () {
            closingSubscriber === null || closingSubscriber === void 0 ? void 0 : closingSubscriber.unsubscribe();
            window === null || window === void 0 ? void 0 : window.complete();
            window = new _Subject__WEBPACK_IMPORTED_MODULE_0__[/* Subject */ "a"]();
            subscriber.next(window.asObservable());
            var closingNotifier;
            try {
                closingNotifier = Object(_observable_from__WEBPACK_IMPORTED_MODULE_3__[/* innerFrom */ "c"])(closingSelector());
            }
            catch (err) {
                handleError(err);
                return;
            }
            closingNotifier.subscribe((closingSubscriber = new _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__[/* OperatorSubscriber */ "a"](subscriber, openWindow, openWindow, handleError)));
        };
        openWindow();
        source.subscribe(new _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__[/* OperatorSubscriber */ "a"](subscriber, function (value) { return window.next(value); }, function () {
            window.complete();
            subscriber.complete();
        }, handleError, function () {
            closingSubscriber === null || closingSubscriber === void 0 ? void 0 : closingSubscriber.unsubscribe();
            window = null;
        }));
    });
}
//# sourceMappingURL=windowWhen.js.map

/***/ }),
/* 166 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return withLatestFrom; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _observable_from__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var _util_args__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10);







function withLatestFrom() {
    var inputs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        inputs[_i] = arguments[_i];
    }
    var project = Object(_util_args__WEBPACK_IMPORTED_MODULE_6__[/* popResultSelector */ "b"])(inputs);
    return Object(_util_lift__WEBPACK_IMPORTED_MODULE_1__[/* operate */ "b"])(function (source, subscriber) {
        var len = inputs.length;
        var otherValues = new Array(len);
        var hasValue = inputs.map(function () { return false; });
        var ready = false;
        var _loop_1 = function (i) {
            Object(_observable_from__WEBPACK_IMPORTED_MODULE_3__[/* innerFrom */ "c"])(inputs[i]).subscribe(new _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__[/* OperatorSubscriber */ "a"](subscriber, function (value) {
                otherValues[i] = value;
                if (!ready && !hasValue[i]) {
                    hasValue[i] = true;
                    (ready = hasValue.every(_util_identity__WEBPACK_IMPORTED_MODULE_4__[/* identity */ "a"])) && (hasValue = null);
                }
            }, _util_noop__WEBPACK_IMPORTED_MODULE_5__[/* noop */ "a"]));
        };
        for (var i = 0; i < len; i++) {
            _loop_1(i);
        }
        source.subscribe(new _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__[/* OperatorSubscriber */ "a"](subscriber, function (value) {
            if (ready) {
                var values = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __spreadArray */ "h"])([value], Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __read */ "g"])(otherValues));
                subscriber.next(project ? project.apply(void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __spreadArray */ "h"])([], Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __read */ "g"])(values))) : values);
            }
        }));
    });
}
//# sourceMappingURL=withLatestFrom.js.map

/***/ }),
/* 167 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return zipAll; });
/* harmony import */ var _observable_zip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82);
/* harmony import */ var _joinAllInternals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(197);


function zipAll(project) {
    return Object(_joinAllInternals__WEBPACK_IMPORTED_MODULE_1__[/* joinAllInternals */ "a"])(_observable_zip__WEBPACK_IMPORTED_MODULE_0__[/* zip */ "a"], project);
}
//# sourceMappingURL=zipAll.js.map

/***/ }),
/* 168 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return zipWith; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _zip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(181);


function zipWith() {
    var otherInputs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        otherInputs[_i] = arguments[_i];
    }
    return _zip__WEBPACK_IMPORTED_MODULE_1__[/* zip */ "a"].apply(void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __spreadArray */ "h"])([], Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __read */ "g"])(otherInputs)));
}
//# sourceMappingURL=zipWith.js.map

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.$worker = exports.$transferable = exports.$terminate = exports.$events = exports.$errors = void 0;
exports.$errors = Symbol("thread.errors");
exports.$events = Symbol("thread.events");
exports.$terminate = Symbol("thread.terminate");
exports.$transferable = Symbol("thread.transferable");
exports.$worker = Symbol("thread.worker");


/***/ }),
/* 170 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObjectUnsubscribedError; });
/* harmony import */ var _createErrorClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);

var ObjectUnsubscribedError = Object(_createErrorClass__WEBPACK_IMPORTED_MODULE_0__[/* createErrorClass */ "a"])(function (_super) {
    return function ObjectUnsubscribedErrorImpl() {
        _super(this);
        this.name = 'ObjectUnsubscribedError';
        this.message = 'object unsubscribed';
    };
});
//# sourceMappingURL=ObjectUnsubscribedError.js.map

/***/ }),
/* 171 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BehaviorSubject; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);


var BehaviorSubject = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "e"])(BehaviorSubject, _super);
    function BehaviorSubject(_value) {
        var _this = _super.call(this) || this;
        _this._value = _value;
        return _this;
    }
    Object.defineProperty(BehaviorSubject.prototype, "value", {
        get: function () {
            return this.getValue();
        },
        enumerable: false,
        configurable: true
    });
    BehaviorSubject.prototype._subscribe = function (subscriber) {
        var subscription = _super.prototype._subscribe.call(this, subscriber);
        !subscription.closed && subscriber.next(this._value);
        return subscription;
    };
    BehaviorSubject.prototype.getValue = function () {
        var _a = this, hasError = _a.hasError, thrownError = _a.thrownError, _value = _a._value;
        if (hasError) {
            throw thrownError;
        }
        this._throwIfClosed();
        return _value;
    };
    BehaviorSubject.prototype.next = function (value) {
        _super.prototype.next.call(this, (this._value = value));
    };
    return BehaviorSubject;
}(_Subject__WEBPACK_IMPORTED_MODULE_1__[/* Subject */ "a"]));

//# sourceMappingURL=BehaviorSubject.js.map

/***/ }),
/* 172 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return throwError; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);


function throwError(errorOrErrorFactory, scheduler) {
    var errorFactory = Object(_util_isFunction__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "a"])(errorOrErrorFactory) ? errorOrErrorFactory : function () { return errorOrErrorFactory; };
    var init = function (subscriber) { return subscriber.error(errorFactory()); };
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__[/* Observable */ "a"](scheduler ? function (subscriber) { return scheduler.schedule(init, 0, subscriber); } : init);
}
//# sourceMappingURL=throwError.js.map

/***/ }),
/* 173 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundError; });
/* harmony import */ var _createErrorClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);

var NotFoundError = Object(_createErrorClass__WEBPACK_IMPORTED_MODULE_0__[/* createErrorClass */ "a"])(function (_super) {
    return function NotFoundErrorImpl(message) {
        _super(this);
        this.name = 'NotFoundError';
        this.message = message;
    };
});
//# sourceMappingURL=NotFoundError.js.map

/***/ }),
/* 174 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SequenceError; });
/* harmony import */ var _createErrorClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);

var SequenceError = Object(_createErrorClass__WEBPACK_IMPORTED_MODULE_0__[/* createErrorClass */ "a"])(function (_super) {
    return function SequenceErrorImpl(message) {
        _super(this);
        this.name = 'SequenceError';
        this.message = message;
    };
});
//# sourceMappingURL=SequenceError.js.map

/***/ }),
/* 175 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return interval; });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30);


function interval(period, scheduler) {
    if (period === void 0) { period = 0; }
    if (scheduler === void 0) { scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__[/* asyncScheduler */ "b"]; }
    if (period < 0) {
        period = 0;
    }
    return Object(_timer__WEBPACK_IMPORTED_MODULE_1__[/* timer */ "a"])(period, period, scheduler);
}
//# sourceMappingURL=interval.js.map

/***/ }),
/* 176 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return onErrorResumeNext; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _observable_from__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _util_argsOrArgArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);






function onErrorResumeNext() {
    var sources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sources[_i] = arguments[_i];
    }
    var nextSources = Object(_util_argsOrArgArray__WEBPACK_IMPORTED_MODULE_3__[/* argsOrArgArray */ "a"])(sources);
    return Object(_util_lift__WEBPACK_IMPORTED_MODULE_1__[/* operate */ "b"])(function (source, subscriber) {
        var remaining = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __spreadArray */ "h"])([source], Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __read */ "g"])(nextSources));
        var subscribeNext = function () {
            if (!subscriber.closed) {
                if (remaining.length > 0) {
                    var nextSource = void 0;
                    try {
                        nextSource = Object(_observable_from__WEBPACK_IMPORTED_MODULE_2__[/* innerFrom */ "c"])(remaining.shift());
                    }
                    catch (err) {
                        subscribeNext();
                        return;
                    }
                    var innerSub = new _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_4__[/* OperatorSubscriber */ "a"](subscriber, undefined, _util_noop__WEBPACK_IMPORTED_MODULE_5__[/* noop */ "a"], _util_noop__WEBPACK_IMPORTED_MODULE_5__[/* noop */ "a"]);
                    subscriber.add(nextSource.subscribe(innerSub));
                    innerSub.add(subscribeNext);
                }
                else {
                    subscriber.complete();
                }
            }
        };
        subscribeNext();
    });
}
//# sourceMappingURL=onErrorResumeNext.js.map

/***/ }),
/* 177 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return race; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return raceInit; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _util_argsOrArgArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24);
/* harmony import */ var _operators_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);




function race() {
    var sources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sources[_i] = arguments[_i];
    }
    sources = Object(_util_argsOrArgArray__WEBPACK_IMPORTED_MODULE_2__[/* argsOrArgArray */ "a"])(sources);
    return sources.length === 1 ? Object(_from__WEBPACK_IMPORTED_MODULE_1__[/* innerFrom */ "c"])(sources[0]) : new _Observable__WEBPACK_IMPORTED_MODULE_0__[/* Observable */ "a"](raceInit(sources));
}
function raceInit(sources) {
    return function (subscriber) {
        var subscriptions = [];
        var _loop_1 = function (i) {
            subscriptions.push(Object(_from__WEBPACK_IMPORTED_MODULE_1__[/* innerFrom */ "c"])(sources[i]).subscribe(new _operators_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_3__[/* OperatorSubscriber */ "a"](subscriber, function (value) {
                if (subscriptions) {
                    for (var s = 0; s < subscriptions.length; s++) {
                        s !== i && subscriptions[s].unsubscribe();
                    }
                    subscriptions = null;
                }
                subscriber.next(value);
            })));
        };
        for (var i = 0; subscriptions && !subscriber.closed && i < sources.length; i++) {
            _loop_1(i);
        }
    };
}
//# sourceMappingURL=race.js.map

/***/ }),
/* 178 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return combineLatest; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _observable_combineLatest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _util_argsOrArgArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24);
/* harmony import */ var _util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23);
/* harmony import */ var _util_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(53);
/* harmony import */ var _util_args__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10);







function combineLatest() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var resultSelector = Object(_util_args__WEBPACK_IMPORTED_MODULE_6__[/* popResultSelector */ "b"])(args);
    return resultSelector
        ? Object(_util_pipe__WEBPACK_IMPORTED_MODULE_5__[/* pipe */ "a"])(combineLatest.apply(void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __spreadArray */ "h"])([], Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __read */ "g"])(args))), Object(_util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_4__[/* mapOneOrManyArgs */ "a"])(resultSelector))
        : Object(_util_lift__WEBPACK_IMPORTED_MODULE_2__[/* operate */ "b"])(function (source, subscriber) {
            Object(_observable_combineLatest__WEBPACK_IMPORTED_MODULE_1__[/* combineLatestInit */ "b"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __spreadArray */ "h"])([source], Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __read */ "g"])(Object(_util_argsOrArgArray__WEBPACK_IMPORTED_MODULE_3__[/* argsOrArgArray */ "a"])(args))))(subscriber);
        });
}
//# sourceMappingURL=combineLatest.js.map

/***/ }),
/* 179 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return concat; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _concatAll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49);
/* harmony import */ var _observable_fromArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31);
/* harmony import */ var _util_args__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);





function concat() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var scheduler = Object(_util_args__WEBPACK_IMPORTED_MODULE_4__[/* popScheduler */ "c"])(args);
    return Object(_util_lift__WEBPACK_IMPORTED_MODULE_1__[/* operate */ "b"])(function (source, subscriber) {
        Object(_concatAll__WEBPACK_IMPORTED_MODULE_2__[/* concatAll */ "a"])()(Object(_observable_fromArray__WEBPACK_IMPORTED_MODULE_3__[/* internalFromArray */ "a"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __spreadArray */ "h"])([source], Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __read */ "g"])(args)), scheduler)).subscribe(subscriber);
    });
}
//# sourceMappingURL=concat.js.map

/***/ }),
/* 180 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return merge; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _util_argsOrArgArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24);
/* harmony import */ var _observable_fromArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31);
/* harmony import */ var _mergeAll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36);
/* harmony import */ var _util_args__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);






function merge() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var scheduler = Object(_util_args__WEBPACK_IMPORTED_MODULE_5__[/* popScheduler */ "c"])(args);
    var concurrent = Object(_util_args__WEBPACK_IMPORTED_MODULE_5__[/* popNumber */ "a"])(args, Infinity);
    args = Object(_util_argsOrArgArray__WEBPACK_IMPORTED_MODULE_2__[/* argsOrArgArray */ "a"])(args);
    return Object(_util_lift__WEBPACK_IMPORTED_MODULE_1__[/* operate */ "b"])(function (source, subscriber) {
        Object(_mergeAll__WEBPACK_IMPORTED_MODULE_4__[/* mergeAll */ "a"])(concurrent)(Object(_observable_fromArray__WEBPACK_IMPORTED_MODULE_3__[/* internalFromArray */ "a"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __spreadArray */ "h"])([source], Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __read */ "g"])(args)), scheduler)).subscribe(subscriber);
    });
}
//# sourceMappingURL=merge.js.map

/***/ }),
/* 181 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return zip; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _observable_zip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);



function zip() {
    var sources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sources[_i] = arguments[_i];
    }
    return Object(_util_lift__WEBPACK_IMPORTED_MODULE_2__[/* operate */ "b"])(function (source, subscriber) {
        _observable_zip__WEBPACK_IMPORTED_MODULE_1__[/* zip */ "a"].apply(void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __spreadArray */ "h"])([source], Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __read */ "g"])(sources))).subscribe(subscriber);
    });
}
//# sourceMappingURL=zip.js.map

/***/ }),
/* 182 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);

// TODO: This observer iteration approach looks inelegant and expensive
// Idea: Come up with super class for Subscription that contains the
//       notify*, ... methods and use it here
/**
 * A subject is a "hot" observable (see `multicast`) that has its observer
 * methods (`.next(value)`, `.error(error)`, `.complete()`) exposed.
 *
 * Be careful, though! With great power comes great responsibility. Only use
 * the `Subject` when you really need to trigger updates "from the outside" and
 * try to keep the code that can access it to a minimum. Return
 * `Observable.from(mySubject)` to not allow other code to mutate.
 */
class MulticastSubject extends _observable__WEBPACK_IMPORTED_MODULE_0__[/* default */ "b"] {
    constructor() {
        super(observer => {
            this._observers.add(observer);
            return () => this._observers.delete(observer);
        });
        this._observers = new Set();
    }
    next(value) {
        for (const observer of this._observers) {
            observer.next(value);
        }
    }
    error(error) {
        for (const observer of this._observers) {
            observer.error(error);
        }
    }
    complete() {
        for (const observer of this._observers) {
            observer.complete();
        }
    }
}
/* harmony default export */ __webpack_exports__["a"] = (MulticastSubject);


/***/ }),
/* 183 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ scheduled; });

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/Observable.js
var Observable = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/Subscription.js
var Subscription = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/symbol/observable.js
var symbol_observable = __webpack_require__(39);

// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/scheduled/scheduleObservable.js



function scheduleObservable(input, scheduler) {
    return new Observable["a" /* Observable */](function (subscriber) {
        var sub = new Subscription["b" /* Subscription */]();
        sub.add(scheduler.schedule(function () {
            var observable = input[symbol_observable["a" /* observable */]]();
            sub.add(observable.subscribe({
                next: function (value) { sub.add(scheduler.schedule(function () { return subscriber.next(value); })); },
                error: function (err) { sub.add(scheduler.schedule(function () { return subscriber.error(err); })); },
                complete: function () { sub.add(scheduler.schedule(function () { return subscriber.complete(); })); },
            }));
        }));
        return sub;
    });
}
//# sourceMappingURL=scheduleObservable.js.map
// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/scheduled/schedulePromise.js

function schedulePromise(input, scheduler) {
    return new Observable["a" /* Observable */](function (subscriber) {
        return scheduler.schedule(function () {
            return input.then(function (value) {
                subscriber.add(scheduler.schedule(function () {
                    subscriber.next(value);
                    subscriber.add(scheduler.schedule(function () { return subscriber.complete(); }));
                }));
            }, function (err) {
                subscriber.add(scheduler.schedule(function () { return subscriber.error(err); }));
            });
        });
    });
}
//# sourceMappingURL=schedulePromise.js.map
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/scheduled/scheduleArray.js
var scheduleArray = __webpack_require__(85);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/scheduled/scheduleIterable.js
var scheduleIterable = __webpack_require__(191);

// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/scheduled/scheduleAsyncIterable.js


function scheduleAsyncIterable(input, scheduler) {
    if (!input) {
        throw new Error('Iterable cannot be null');
    }
    return new Observable["a" /* Observable */](function (subscriber) {
        var sub = new Subscription["b" /* Subscription */]();
        sub.add(scheduler.schedule(function () {
            var iterator = input[Symbol.asyncIterator]();
            sub.add(scheduler.schedule(function () {
                var _this = this;
                iterator.next().then(function (result) {
                    if (result.done) {
                        subscriber.complete();
                    }
                    else {
                        subscriber.next(result.value);
                        _this.schedule();
                    }
                });
            }));
        }));
        return sub;
    });
}
//# sourceMappingURL=scheduleAsyncIterable.js.map
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/util/isInteropObservable.js
var isInteropObservable = __webpack_require__(186);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/util/isPromise.js
var isPromise = __webpack_require__(187);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/util/isArrayLike.js
var isArrayLike = __webpack_require__(86);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/util/isIterable.js
var isIterable = __webpack_require__(189);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/util/isAsyncIterable.js
var isAsyncIterable = __webpack_require__(188);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/util/throwUnobservableError.js
var throwUnobservableError = __webpack_require__(193);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/util/isReadableStreamLike.js
var isReadableStreamLike = __webpack_require__(59);

// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/scheduled/scheduleReadableStreamLike.js


function scheduleReadableStreamLike(input, scheduler) {
    return scheduleAsyncIterable(Object(isReadableStreamLike["b" /* readableStreamLikeToAsyncGenerator */])(input), scheduler);
}
//# sourceMappingURL=scheduleReadableStreamLike.js.map
// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/scheduled/scheduled.js













function scheduled(input, scheduler) {
    if (input != null) {
        if (Object(isInteropObservable["a" /* isInteropObservable */])(input)) {
            return scheduleObservable(input, scheduler);
        }
        if (Object(isArrayLike["a" /* isArrayLike */])(input)) {
            return Object(scheduleArray["a" /* scheduleArray */])(input, scheduler);
        }
        if (Object(isPromise["a" /* isPromise */])(input)) {
            return schedulePromise(input, scheduler);
        }
        if (Object(isAsyncIterable["a" /* isAsyncIterable */])(input)) {
            return scheduleAsyncIterable(input, scheduler);
        }
        if (Object(isIterable["a" /* isIterable */])(input)) {
            return Object(scheduleIterable["a" /* scheduleIterable */])(input, scheduler);
        }
        if (Object(isReadableStreamLike["a" /* isReadableStreamLike */])(input)) {
            return scheduleReadableStreamLike(input, scheduler);
        }
    }
    throw Object(throwUnobservableError["a" /* createInvalidObservableTypeError */])(input);
}
//# sourceMappingURL=scheduled.js.map

/***/ }),
/* 184 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reportUnhandledError; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var _scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(185);


function reportUnhandledError(err) {
    _scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_1__[/* timeoutProvider */ "a"].setTimeout(function () {
        var onUnhandledError = _config__WEBPACK_IMPORTED_MODULE_0__[/* config */ "a"].onUnhandledError;
        if (onUnhandledError) {
            onUnhandledError(err);
        }
        else {
            throw err;
        }
    });
}
//# sourceMappingURL=reportUnhandledError.js.map

/***/ }),
/* 185 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return timeoutProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

var timeoutProvider = {
    setTimeout: function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var delegate = timeoutProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.setTimeout) || setTimeout).apply(void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __spreadArray */ "h"])([], Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __read */ "g"])(args)));
    },
    clearTimeout: function (handle) {
        var delegate = timeoutProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearTimeout) || clearTimeout)(handle);
    },
    delegate: undefined,
};
//# sourceMappingURL=timeoutProvider.js.map

/***/ }),
/* 186 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isInteropObservable; });
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39);
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);


function isInteropObservable(input) {
    return Object(_isFunction__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "a"])(input[_symbol_observable__WEBPACK_IMPORTED_MODULE_0__[/* observable */ "a"]]);
}
//# sourceMappingURL=isInteropObservable.js.map

/***/ }),
/* 187 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isPromise; });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);

function isPromise(value) {
    return Object(_isFunction__WEBPACK_IMPORTED_MODULE_0__[/* isFunction */ "a"])(value === null || value === void 0 ? void 0 : value.then);
}
//# sourceMappingURL=isPromise.js.map

/***/ }),
/* 188 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isAsyncIterable; });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);

function isAsyncIterable(obj) {
    return Symbol.asyncIterator && Object(_isFunction__WEBPACK_IMPORTED_MODULE_0__[/* isFunction */ "a"])(obj === null || obj === void 0 ? void 0 : obj[Symbol.asyncIterator]);
}
//# sourceMappingURL=isAsyncIterable.js.map

/***/ }),
/* 189 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isIterable; });
/* harmony import */ var _symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(190);
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);


function isIterable(input) {
    return Object(_isFunction__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "a"])(input === null || input === void 0 ? void 0 : input[_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__[/* iterator */ "a"]]);
}
//# sourceMappingURL=isIterable.js.map

/***/ }),
/* 190 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getSymbolIterator */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return iterator; });
function getSymbolIterator() {
    if (typeof Symbol !== 'function' || !Symbol.iterator) {
        return '@@iterator';
    }
    return Symbol.iterator;
}
var iterator = getSymbolIterator();
//# sourceMappingURL=iterator.js.map

/***/ }),
/* 191 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return scheduleIterable; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _symbol_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(190);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _util_caughtSchedule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(192);




function scheduleIterable(input, scheduler) {
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__[/* Observable */ "a"](function (subscriber) {
        var iterator;
        subscriber.add(scheduler.schedule(function () {
            iterator = input[_symbol_iterator__WEBPACK_IMPORTED_MODULE_1__[/* iterator */ "a"]]();
            Object(_util_caughtSchedule__WEBPACK_IMPORTED_MODULE_3__[/* caughtSchedule */ "a"])(subscriber, scheduler, function () {
                var _a = iterator.next(), value = _a.value, done = _a.done;
                if (done) {
                    subscriber.complete();
                }
                else {
                    subscriber.next(value);
                    this.schedule();
                }
            });
        }));
        return function () { return Object(_util_isFunction__WEBPACK_IMPORTED_MODULE_2__[/* isFunction */ "a"])(iterator === null || iterator === void 0 ? void 0 : iterator.return) && iterator.return(); };
    });
}
//# sourceMappingURL=scheduleIterable.js.map

/***/ }),
/* 192 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return caughtSchedule; });
function caughtSchedule(subscriber, scheduler, execute, delay) {
    if (delay === void 0) { delay = 0; }
    var subscription = scheduler.schedule(function () {
        try {
            execute.call(this);
        }
        catch (err) {
            subscriber.error(err);
        }
    }, delay);
    subscriber.add(subscription);
    return subscription;
}
//# sourceMappingURL=caughtSchedule.js.map

/***/ }),
/* 193 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createInvalidObservableTypeError; });
function createInvalidObservableTypeError(input) {
    return new TypeError("You provided " + (input !== null && typeof input === 'object' ? 'an invalid object' : "'" + input + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
//# sourceMappingURL=throwUnobservableError.js.map

/***/ }),
/* 194 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return argsArgArrayOrObject; });
var isArray = Array.isArray;
var getPrototypeOf = Object.getPrototypeOf, objectProto = Object.prototype, getKeys = Object.keys;
function argsArgArrayOrObject(args) {
    if (args.length === 1) {
        var first_1 = args[0];
        if (isArray(first_1)) {
            return { args: first_1, keys: null };
        }
        if (isPOJO(first_1)) {
            var keys = getKeys(first_1);
            return {
                args: keys.map(function (key) { return first_1[key]; }),
                keys: keys,
            };
        }
    }
    return { args: args, keys: null };
}
function isPOJO(obj) {
    return obj && typeof obj === 'object' && getPrototypeOf(obj) === objectProto;
}
//# sourceMappingURL=argsArgArrayOrObject.js.map

/***/ }),
/* 195 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createObject; });
function createObject(keys, values) {
    return keys.reduce(function (result, key, i) { return ((result[key] = values[i]), result); }, {});
}
//# sourceMappingURL=createObject.js.map

/***/ }),
/* 196 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return not; });
function not(pred, thisArg) {
    return function (value, index) { return !pred.call(thisArg, value, index); };
}
//# sourceMappingURL=not.js.map

/***/ }),
/* 197 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return joinAllInternals; });
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23);
/* harmony import */ var _util_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53);
/* harmony import */ var _mergeMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14);
/* harmony import */ var _toArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(66);





function joinAllInternals(joinFn, project) {
    return Object(_util_pipe__WEBPACK_IMPORTED_MODULE_2__[/* pipe */ "a"])(Object(_toArray__WEBPACK_IMPORTED_MODULE_4__[/* toArray */ "a"])(), Object(_mergeMap__WEBPACK_IMPORTED_MODULE_3__[/* mergeMap */ "a"])(function (sources) { return joinFn(sources); }), project ? Object(_util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_1__[/* mapOneOrManyArgs */ "a"])(project) : _util_identity__WEBPACK_IMPORTED_MODULE_0__[/* identity */ "a"]);
}
//# sourceMappingURL=joinAllInternals.js.map

/***/ }),
/* 198 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return scanInternals; });
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

function scanInternals(accumulator, seed, hasSeed, emitOnNext, emitBeforeComplete) {
    return function (source, subscriber) {
        var hasState = hasSeed;
        var state = seed;
        var index = 0;
        source.subscribe(new _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_0__[/* OperatorSubscriber */ "a"](subscriber, function (value) {
            var i = index++;
            state = hasState
                ?
                    accumulator(state, value, i)
                :
                    ((hasState = true), value);
            emitOnNext && subscriber.next(state);
        }, emitBeforeComplete &&
            (function () {
                hasState && subscriber.next(state);
                subscriber.complete();
            })));
    };
}
//# sourceMappingURL=scanInternals.js.map

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const BUILD_CONTEXT_KEY = '__BuildContext';
const IOC_WRAPPER_CLASS = 'ioc_wrapper';
/**
 * Utility class to handle injection behavior on class decorations.
 */
class InjectorHandler {
    static instrumentConstructor(source) {
        let newConstructor;
        // tslint:disable-next-line:class-name
        newConstructor = class ioc_wrapper extends source {
            constructor(...args) {
                super(...args);
                InjectorHandler.assertInstantiable();
            }
        };
        newConstructor['__parent'] = source;
        return newConstructor;
    }
    static blockInstantiation(blocked) {
        InjectorHandler.instantiationsBlocked = blocked;
    }
    static unblockInstantiation() {
        const blocked = InjectorHandler.instantiationsBlocked;
        InjectorHandler.instantiationsBlocked = false;
        return blocked;
    }
    static getConstructorFromType(target) {
        let typeConstructor = target;
        if (this.hasNamedConstructor(typeConstructor)) {
            return typeConstructor;
        }
        typeConstructor = typeConstructor['__parent'];
        while (typeConstructor) {
            if (this.hasNamedConstructor(typeConstructor)) {
                return typeConstructor;
            }
            typeConstructor = typeConstructor['__parent'];
        }
        throw TypeError('Can not identify the base Type for requested target ' + target.toString());
    }
    static checkType(source) {
        if (!source) {
            throw new TypeError('Invalid type requested to IoC ' +
                'container. Type is not defined.');
        }
    }
    static checkName(source) {
        if (!source) {
            throw new TypeError('Invalid name requested to IoC ' +
                'container. Name is not defined.');
        }
    }
    static injectContext(target, context) {
        target[BUILD_CONTEXT_KEY] = context;
    }
    static removeContext(target) {
        delete target[BUILD_CONTEXT_KEY];
    }
    static injectProperty(target, key, propertyType, instanceFactory) {
        const propKey = `__${key}`;
        Object.defineProperty(target.prototype, key, {
            enumerable: true,
            get: function () {
                const context = this[BUILD_CONTEXT_KEY] || target[BUILD_CONTEXT_KEY];
                return this[propKey] ? this[propKey] : this[propKey] = instanceFactory(propertyType, context);
            },
            set: function (newValue) {
                this[propKey] = newValue;
            }
        });
    }
    static injectValueProperty(target, key, name, valueFactory) {
        const propKey = `__${key}`;
        Object.defineProperty(target.prototype, key, {
            enumerable: true,
            get: function () {
                return this[propKey] ? this[propKey] : this[propKey] = valueFactory(name);
            },
            set: function (newValue) {
                this[propKey] = newValue;
            }
        });
    }
    static hasNamedConstructor(source) {
        if (source['name']) {
            return source['name'] !== 'ioc_wrapper';
        }
        else {
            try {
                const constructorName = source.prototype.constructor.toString().match(this.constructorNameRegEx)[1];
                return (constructorName && constructorName !== IOC_WRAPPER_CLASS);
            }
            catch (_a) {
                // make linter happy
            }
            return false;
        }
    }
    static assertInstantiable() {
        if (InjectorHandler.instantiationsBlocked) {
            throw new TypeError('Can not instantiate it. The instantiation is blocked for this class. ' +
                'Ask Container for it, using Container.get');
        }
    }
}
exports.InjectorHandler = InjectorHandler;
InjectorHandler.constructorNameRegEx = /function (\w*)/;
InjectorHandler.instantiationsBlocked = true;
//# sourceMappingURL=injection-handler.js.map

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;

  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
    r = Reflect.decorate(decorators, target, key, desc);
  } else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) {
      r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }
  }

  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = this && this.__metadata || function (k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
    return Reflect.metadata(k, v);
  }
};

var __param = this && this.__param || function (paramIndex, decorator) {
  return function (target, key) {
    decorator(target, key, paramIndex);
  };
};

var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];

  if (!m) {
    return o;
  }

  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) {
        m.call(i);
      }
    } finally {
      if (e) {
        throw e.error;
      }
    }
  }

  return ar;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClientNetworkService = void 0;

var typescript_ioc_1 = __webpack_require__(32);

var client_network_buffered_wrapper_1 = __webpack_require__(235);

var shared_network_model_1 = __webpack_require__(264);

var rxjs_1 = __webpack_require__(46);

var operators_1 = __webpack_require__(215);

var utils_1 = __webpack_require__(214);

var ClientNetworkService = function () {
  function ClientNetworkService(wrapper) {
    this.wrapper = wrapper;
    this.connected$ = wrapper.connected$;
    this.disconnected$ = wrapper.disconnected$;
    this.joinResponse$ = this.onEvent(shared_network_model_1.NetworkEvent.LOGIN);
    this.loginOk$ = this.joinResponse$.pipe((0, rxjs_1.filter)(function (response) {
      return response.status === shared_network_model_1.LoginStatus.OK;
    }), (0, rxjs_1.map)(function (response) {
      return response;
    }), (0, operators_1.share)());
    this.loginFailed$ = this.joinResponse$.pipe((0, rxjs_1.filter)(function (response) {
      return response.status !== shared_network_model_1.LoginStatus.OK;
    }), (0, rxjs_1.map)(function (response) {
      return response.status;
    }), (0, operators_1.share)());
    this.storesData$ = this.onEvent(shared_network_model_1.NetworkEvent.STORE);
  }

  ClientNetworkService.prototype.connect = function (host) {
    this.wrapper.connect(host);
  };

  ClientNetworkService.prototype.sendLoginRequest = function (request) {
    this.wrapper.send(shared_network_model_1.NetworkEvent.LOGIN, request);
  };

  ClientNetworkService.prototype.sendStore = function (storeId, key, value) {
    var data = (0, utils_1.keyValueObject)(storeId, (0, utils_1.keyValueObject)(key, value));
    this.wrapper.send(shared_network_model_1.NetworkEvent.STORE, data);
  };

  ClientNetworkService.prototype.onStoreDto = function (targetStoreId) {
    return this.storesData$.pipe((0, rxjs_1.mergeMap)(function (store) {
      return Array.from(Object.entries(store));
    }), (0, rxjs_1.filter)(function (_a) {
      var _b = __read(_a, 1),
          storeId = _b[0];

      return storeId === targetStoreId;
    }), (0, rxjs_1.map)(function (_a) {
      var _b = __read(_a, 2),
          _ = _b[0],
          storeData = _b[1];

      return storeData;
    }), (0, operators_1.share)());
  };

  ClientNetworkService.prototype.onEvent = function (event) {
    return this.wrapper.data$.pipe((0, rxjs_1.filter)(function (message) {
      return message.event === event;
    }), (0, rxjs_1.map)(function (message) {
      return message.value;
    }), (0, operators_1.share)());
  };

  var _a;

  ClientNetworkService = __decorate([typescript_ioc_1.Singleton, __param(0, typescript_ioc_1.Inject), __metadata("design:paramtypes", [typeof (_a = typeof client_network_buffered_wrapper_1.ClientNetworkBufferedWrapper !== "undefined" && client_network_buffered_wrapper_1.ClientNetworkBufferedWrapper) === "function" ? _a : Object])], ClientNetworkService);
  return ClientNetworkService;
}();

exports.ClientNetworkService = ClientNetworkService;

/***/ }),
/* 201 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(217);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "", ""]);
// Exports
/* harmony default export */ __webpack_exports__["a"] = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 202 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ createProxyFunction; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ createProxyModule; });

// EXTERNAL MODULE: ./node_modules/debug/src/browser.js
var browser = __webpack_require__(34);
var browser_default = /*#__PURE__*/__webpack_require__.n(browser);

// EXTERNAL MODULE: ./node_modules/observable-fns/dist.esm/observable.js
var observable = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/observable-fns/dist.esm/multicast.js
var multicast = __webpack_require__(207);

// EXTERNAL MODULE: ./node_modules/threads/dist-esm/common.js
var common = __webpack_require__(13);

// CONCATENATED MODULE: ./node_modules/threads/dist-esm/observable-promise.js

const doNothing = () => undefined;
const returnInput = (input) => input;
const runDeferred = (fn) => Promise.resolve().then(fn);
function fail(error) {
    throw error;
}
function isThenable(thing) {
    return thing && typeof thing.then === "function";
}
/**
 * Creates a hybrid, combining the APIs of an Observable and a Promise.
 *
 * It is used to proxy async process states when we are initially not sure
 * if that async process will yield values once (-> Promise) or multiple
 * times (-> Observable).
 *
 * Note that the observable promise inherits some of the observable's characteristics:
 * The `init` function will be called *once for every time anyone subscribes to it*.
 *
 * If this is undesired, derive a hot observable from it using `makeHot()` and
 * subscribe to that.
 */
class observable_promise_ObservablePromise extends observable["b" /* default */] {
    constructor(init) {
        super(originalObserver => {
            // tslint:disable-next-line no-this-assignment
            const self = this;
            const observer = Object.assign(Object.assign({}, originalObserver), { complete() {
                    originalObserver.complete();
                    self.onCompletion();
                }, error(error) {
                    originalObserver.error(error);
                    self.onError(error);
                },
                next(value) {
                    originalObserver.next(value);
                    self.onNext(value);
                } });
            try {
                this.initHasRun = true;
                return init(observer);
            }
            catch (error) {
                observer.error(error);
            }
        });
        this.initHasRun = false;
        this.fulfillmentCallbacks = [];
        this.rejectionCallbacks = [];
        this.firstValueSet = false;
        this.state = "pending";
    }
    onNext(value) {
        if (!this.firstValueSet) {
            this.firstValue = value;
            this.firstValueSet = true;
        }
    }
    onError(error) {
        this.state = "rejected";
        this.rejection = error;
        for (const onRejected of this.rejectionCallbacks) {
            // Promisifying the call to turn errors into unhandled promise rejections
            // instead of them failing sync and cancelling the iteration
            runDeferred(() => onRejected(error));
        }
    }
    onCompletion() {
        this.state = "fulfilled";
        for (const onFulfilled of this.fulfillmentCallbacks) {
            // Promisifying the call to turn errors into unhandled promise rejections
            // instead of them failing sync and cancelling the iteration
            runDeferred(() => onFulfilled(this.firstValue));
        }
    }
    then(onFulfilledRaw, onRejectedRaw) {
        const onFulfilled = onFulfilledRaw || returnInput;
        const onRejected = onRejectedRaw || fail;
        let onRejectedCalled = false;
        return new Promise((resolve, reject) => {
            const rejectionCallback = (error) => {
                if (onRejectedCalled)
                    return;
                onRejectedCalled = true;
                try {
                    resolve(onRejected(error));
                }
                catch (anotherError) {
                    reject(anotherError);
                }
            };
            const fulfillmentCallback = (value) => {
                try {
                    resolve(onFulfilled(value));
                }
                catch (error) {
                    rejectionCallback(error);
                }
            };
            if (!this.initHasRun) {
                this.subscribe({ error: rejectionCallback });
            }
            if (this.state === "fulfilled") {
                return resolve(onFulfilled(this.firstValue));
            }
            if (this.state === "rejected") {
                onRejectedCalled = true;
                return resolve(onRejected(this.rejection));
            }
            this.fulfillmentCallbacks.push(fulfillmentCallback);
            this.rejectionCallbacks.push(rejectionCallback);
        });
    }
    catch(onRejected) {
        return this.then(undefined, onRejected);
    }
    finally(onCompleted) {
        const handler = onCompleted || doNothing;
        return this.then((value) => {
            handler();
            return value;
        }, () => handler());
    }
    static from(thing) {
        if (isThenable(thing)) {
            return new observable_promise_ObservablePromise(observer => {
                const onFulfilled = (value) => {
                    observer.next(value);
                    observer.complete();
                };
                const onRejected = (error) => {
                    observer.error(error);
                };
                thing.then(onFulfilled, onRejected);
            });
        }
        else {
            return super.from(thing);
        }
    }
}

// EXTERNAL MODULE: ./node_modules/threads/dist-esm/transferable.js
var transferable = __webpack_require__(51);

// EXTERNAL MODULE: ./node_modules/threads/dist-esm/types/messages.js
var messages = __webpack_require__(19);

// CONCATENATED MODULE: ./node_modules/threads/dist-esm/master/invocation-proxy.js
/*
 * This source file contains the code for proxying calls in the master thread to calls in the workers
 * by `.postMessage()`-ing.
 *
 * Keep in mind that this code can make or break the program's performance! Need to optimize more…
 */






const debugMessages = browser_default()("threads:master:messages");
let nextJobUID = 1;
const dedupe = (array) => Array.from(new Set(array));
const isJobErrorMessage = (data) => data && data.type === messages["b" /* WorkerMessageType */].error;
const isJobResultMessage = (data) => data && data.type === messages["b" /* WorkerMessageType */].result;
const isJobStartMessage = (data) => data && data.type === messages["b" /* WorkerMessageType */].running;
function createObservableForJob(worker, jobUID) {
    return new observable["b" /* default */](observer => {
        let asyncType;
        const messageHandler = ((event) => {
            debugMessages("Message from worker:", event.data);
            if (!event.data || event.data.uid !== jobUID)
                return;
            if (isJobStartMessage(event.data)) {
                asyncType = event.data.resultType;
            }
            else if (isJobResultMessage(event.data)) {
                if (asyncType === "promise") {
                    if (typeof event.data.payload !== "undefined") {
                        observer.next(Object(common["a" /* deserialize */])(event.data.payload));
                    }
                    observer.complete();
                    worker.removeEventListener("message", messageHandler);
                }
                else {
                    if (event.data.payload) {
                        observer.next(Object(common["a" /* deserialize */])(event.data.payload));
                    }
                    if (event.data.complete) {
                        observer.complete();
                        worker.removeEventListener("message", messageHandler);
                    }
                }
            }
            else if (isJobErrorMessage(event.data)) {
                const error = Object(common["a" /* deserialize */])(event.data.error);
                if (asyncType === "promise" || !asyncType) {
                    observer.error(error);
                }
                else {
                    observer.error(error);
                }
                worker.removeEventListener("message", messageHandler);
            }
        });
        worker.addEventListener("message", messageHandler);
        return () => {
            if (asyncType === "observable" || !asyncType) {
                const cancelMessage = {
                    type: messages["a" /* MasterMessageType */].cancel,
                    uid: jobUID
                };
                worker.postMessage(cancelMessage);
            }
            worker.removeEventListener("message", messageHandler);
        };
    });
}
function prepareArguments(rawArgs) {
    if (rawArgs.length === 0) {
        // Exit early if possible
        return {
            args: [],
            transferables: []
        };
    }
    const args = [];
    const transferables = [];
    for (const arg of rawArgs) {
        if (Object(transferable["b" /* isTransferDescriptor */])(arg)) {
            args.push(Object(common["c" /* serialize */])(arg.send));
            transferables.push(...arg.transferables);
        }
        else {
            args.push(Object(common["c" /* serialize */])(arg));
        }
    }
    return {
        args,
        transferables: transferables.length === 0 ? transferables : dedupe(transferables)
    };
}
function createProxyFunction(worker, method) {
    return ((...rawArgs) => {
        const uid = nextJobUID++;
        const { args, transferables } = prepareArguments(rawArgs);
        const runMessage = {
            type: messages["a" /* MasterMessageType */].run,
            uid,
            method,
            args
        };
        debugMessages("Sending command to run function to worker:", runMessage);
        try {
            worker.postMessage(runMessage, transferables);
        }
        catch (error) {
            return observable_promise_ObservablePromise.from(Promise.reject(error));
        }
        return observable_promise_ObservablePromise.from(Object(multicast["a" /* default */])(createObservableForJob(worker, uid)));
    });
}
function createProxyModule(worker, methodNames) {
    const proxy = {};
    for (const methodName of methodNames) {
        proxy[methodName] = createProxyFunction(worker, methodName);
    }
    return proxy;
}


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, global) {/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var Reflect;
(function (Reflect) {
    // Metadata Proposal
    // https://rbuckton.github.io/reflect-metadata/
    (function (factory) {
        var root = typeof global === "object" ? global :
            typeof self === "object" ? self :
                typeof this === "object" ? this :
                    Function("return this;")();
        var exporter = makeExporter(Reflect);
        if (typeof root.Reflect === "undefined") {
            root.Reflect = Reflect;
        }
        else {
            exporter = makeExporter(root.Reflect, exporter);
        }
        factory(exporter);
        function makeExporter(target, previous) {
            return function (key, value) {
                if (typeof target[key] !== "function") {
                    Object.defineProperty(target, key, { configurable: true, writable: true, value: value });
                }
                if (previous)
                    previous(key, value);
            };
        }
    })(function (exporter) {
        var hasOwn = Object.prototype.hasOwnProperty;
        // feature test for Symbol support
        var supportsSymbol = typeof Symbol === "function";
        var toPrimitiveSymbol = supportsSymbol && typeof Symbol.toPrimitive !== "undefined" ? Symbol.toPrimitive : "@@toPrimitive";
        var iteratorSymbol = supportsSymbol && typeof Symbol.iterator !== "undefined" ? Symbol.iterator : "@@iterator";
        var supportsCreate = typeof Object.create === "function"; // feature test for Object.create support
        var supportsProto = { __proto__: [] } instanceof Array; // feature test for __proto__ support
        var downLevel = !supportsCreate && !supportsProto;
        var HashMap = {
            // create an object in dictionary mode (a.k.a. "slow" mode in v8)
            create: supportsCreate
                ? function () { return MakeDictionary(Object.create(null)); }
                : supportsProto
                    ? function () { return MakeDictionary({ __proto__: null }); }
                    : function () { return MakeDictionary({}); },
            has: downLevel
                ? function (map, key) { return hasOwn.call(map, key); }
                : function (map, key) { return key in map; },
            get: downLevel
                ? function (map, key) { return hasOwn.call(map, key) ? map[key] : undefined; }
                : function (map, key) { return map[key]; },
        };
        // Load global or shim versions of Map, Set, and WeakMap
        var functionPrototype = Object.getPrototypeOf(Function);
        var usePolyfill = typeof process === "object" && process.env && process.env["REFLECT_METADATA_USE_MAP_POLYFILL"] === "true";
        var _Map = !usePolyfill && typeof Map === "function" && typeof Map.prototype.entries === "function" ? Map : CreateMapPolyfill();
        var _Set = !usePolyfill && typeof Set === "function" && typeof Set.prototype.entries === "function" ? Set : CreateSetPolyfill();
        var _WeakMap = !usePolyfill && typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
        // [[Metadata]] internal slot
        // https://rbuckton.github.io/reflect-metadata/#ordinary-object-internal-methods-and-internal-slots
        var Metadata = new _WeakMap();
        /**
         * Applies a set of decorators to a property of a target object.
         * @param decorators An array of decorators.
         * @param target The target object.
         * @param propertyKey (Optional) The property key to decorate.
         * @param attributes (Optional) The property descriptor for the target key.
         * @remarks Decorators are applied in reverse order.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     Example = Reflect.decorate(decoratorsArray, Example);
         *
         *     // property (on constructor)
         *     Reflect.decorate(decoratorsArray, Example, "staticProperty");
         *
         *     // property (on prototype)
         *     Reflect.decorate(decoratorsArray, Example.prototype, "property");
         *
         *     // method (on constructor)
         *     Object.defineProperty(Example, "staticMethod",
         *         Reflect.decorate(decoratorsArray, Example, "staticMethod",
         *             Object.getOwnPropertyDescriptor(Example, "staticMethod")));
         *
         *     // method (on prototype)
         *     Object.defineProperty(Example.prototype, "method",
         *         Reflect.decorate(decoratorsArray, Example.prototype, "method",
         *             Object.getOwnPropertyDescriptor(Example.prototype, "method")));
         *
         */
        function decorate(decorators, target, propertyKey, attributes) {
            if (!IsUndefined(propertyKey)) {
                if (!IsArray(decorators))
                    throw new TypeError();
                if (!IsObject(target))
                    throw new TypeError();
                if (!IsObject(attributes) && !IsUndefined(attributes) && !IsNull(attributes))
                    throw new TypeError();
                if (IsNull(attributes))
                    attributes = undefined;
                propertyKey = ToPropertyKey(propertyKey);
                return DecorateProperty(decorators, target, propertyKey, attributes);
            }
            else {
                if (!IsArray(decorators))
                    throw new TypeError();
                if (!IsConstructor(target))
                    throw new TypeError();
                return DecorateConstructor(decorators, target);
            }
        }
        exporter("decorate", decorate);
        // 4.1.2 Reflect.metadata(metadataKey, metadataValue)
        // https://rbuckton.github.io/reflect-metadata/#reflect.metadata
        /**
         * A default metadata decorator factory that can be used on a class, class member, or parameter.
         * @param metadataKey The key for the metadata entry.
         * @param metadataValue The value for the metadata entry.
         * @returns A decorator function.
         * @remarks
         * If `metadataKey` is already defined for the target and target key, the
         * metadataValue for that key will be overwritten.
         * @example
         *
         *     // constructor
         *     @Reflect.metadata(key, value)
         *     class Example {
         *     }
         *
         *     // property (on constructor, TypeScript only)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         static staticProperty;
         *     }
         *
         *     // property (on prototype, TypeScript only)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         property;
         *     }
         *
         *     // method (on constructor)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         static staticMethod() { }
         *     }
         *
         *     // method (on prototype)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         method() { }
         *     }
         *
         */
        function metadata(metadataKey, metadataValue) {
            function decorator(target, propertyKey) {
                if (!IsObject(target))
                    throw new TypeError();
                if (!IsUndefined(propertyKey) && !IsPropertyKey(propertyKey))
                    throw new TypeError();
                OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
            }
            return decorator;
        }
        exporter("metadata", metadata);
        /**
         * Define a unique metadata entry on the target.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param metadataValue A value that contains attached metadata.
         * @param target The target object on which to define metadata.
         * @param propertyKey (Optional) The property key for the target.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     Reflect.defineMetadata("custom:annotation", options, Example);
         *
         *     // property (on constructor)
         *     Reflect.defineMetadata("custom:annotation", options, Example, "staticProperty");
         *
         *     // property (on prototype)
         *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "property");
         *
         *     // method (on constructor)
         *     Reflect.defineMetadata("custom:annotation", options, Example, "staticMethod");
         *
         *     // method (on prototype)
         *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "method");
         *
         *     // decorator factory as metadata-producing annotation.
         *     function MyAnnotation(options): Decorator {
         *         return (target, key?) => Reflect.defineMetadata("custom:annotation", options, target, key);
         *     }
         *
         */
        function defineMetadata(metadataKey, metadataValue, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
        }
        exporter("defineMetadata", defineMetadata);
        /**
         * Gets a value indicating whether the target object or its prototype chain has the provided metadata key defined.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata key was defined on the target object or its prototype chain; otherwise, `false`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.hasMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.hasMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.hasMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function hasMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryHasMetadata(metadataKey, target, propertyKey);
        }
        exporter("hasMetadata", hasMetadata);
        /**
         * Gets a value indicating whether the target object has the provided metadata key defined.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata key was defined on the target object; otherwise, `false`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function hasOwnMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryHasOwnMetadata(metadataKey, target, propertyKey);
        }
        exporter("hasOwnMetadata", hasOwnMetadata);
        /**
         * Gets the metadata value for the provided metadata key on the target object or its prototype chain.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function getMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryGetMetadata(metadataKey, target, propertyKey);
        }
        exporter("getMetadata", getMetadata);
        /**
         * Gets the metadata value for the provided metadata key on the target object.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getOwnMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function getOwnMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryGetOwnMetadata(metadataKey, target, propertyKey);
        }
        exporter("getOwnMetadata", getOwnMetadata);
        /**
         * Gets the metadata keys defined on the target object or its prototype chain.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns An array of unique metadata keys.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getMetadataKeys(Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getMetadataKeys(Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getMetadataKeys(Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getMetadataKeys(Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getMetadataKeys(Example.prototype, "method");
         *
         */
        function getMetadataKeys(target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryMetadataKeys(target, propertyKey);
        }
        exporter("getMetadataKeys", getMetadataKeys);
        /**
         * Gets the unique metadata keys defined on the target object.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns An array of unique metadata keys.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getOwnMetadataKeys(Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getOwnMetadataKeys(Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getOwnMetadataKeys(Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getOwnMetadataKeys(Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getOwnMetadataKeys(Example.prototype, "method");
         *
         */
        function getOwnMetadataKeys(target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryOwnMetadataKeys(target, propertyKey);
        }
        exporter("getOwnMetadataKeys", getOwnMetadataKeys);
        /**
         * Deletes the metadata entry from the target object with the provided key.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata entry was found and deleted; otherwise, false.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.deleteMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function deleteMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            var metadataMap = GetOrCreateMetadataMap(target, propertyKey, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return false;
            if (!metadataMap.delete(metadataKey))
                return false;
            if (metadataMap.size > 0)
                return true;
            var targetMetadata = Metadata.get(target);
            targetMetadata.delete(propertyKey);
            if (targetMetadata.size > 0)
                return true;
            Metadata.delete(target);
            return true;
        }
        exporter("deleteMetadata", deleteMetadata);
        function DecorateConstructor(decorators, target) {
            for (var i = decorators.length - 1; i >= 0; --i) {
                var decorator = decorators[i];
                var decorated = decorator(target);
                if (!IsUndefined(decorated) && !IsNull(decorated)) {
                    if (!IsConstructor(decorated))
                        throw new TypeError();
                    target = decorated;
                }
            }
            return target;
        }
        function DecorateProperty(decorators, target, propertyKey, descriptor) {
            for (var i = decorators.length - 1; i >= 0; --i) {
                var decorator = decorators[i];
                var decorated = decorator(target, propertyKey, descriptor);
                if (!IsUndefined(decorated) && !IsNull(decorated)) {
                    if (!IsObject(decorated))
                        throw new TypeError();
                    descriptor = decorated;
                }
            }
            return descriptor;
        }
        function GetOrCreateMetadataMap(O, P, Create) {
            var targetMetadata = Metadata.get(O);
            if (IsUndefined(targetMetadata)) {
                if (!Create)
                    return undefined;
                targetMetadata = new _Map();
                Metadata.set(O, targetMetadata);
            }
            var metadataMap = targetMetadata.get(P);
            if (IsUndefined(metadataMap)) {
                if (!Create)
                    return undefined;
                metadataMap = new _Map();
                targetMetadata.set(P, metadataMap);
            }
            return metadataMap;
        }
        // 3.1.1.1 OrdinaryHasMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryhasmetadata
        function OrdinaryHasMetadata(MetadataKey, O, P) {
            var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn)
                return true;
            var parent = OrdinaryGetPrototypeOf(O);
            if (!IsNull(parent))
                return OrdinaryHasMetadata(MetadataKey, parent, P);
            return false;
        }
        // 3.1.2.1 OrdinaryHasOwnMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryhasownmetadata
        function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return false;
            return ToBoolean(metadataMap.has(MetadataKey));
        }
        // 3.1.3.1 OrdinaryGetMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarygetmetadata
        function OrdinaryGetMetadata(MetadataKey, O, P) {
            var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn)
                return OrdinaryGetOwnMetadata(MetadataKey, O, P);
            var parent = OrdinaryGetPrototypeOf(O);
            if (!IsNull(parent))
                return OrdinaryGetMetadata(MetadataKey, parent, P);
            return undefined;
        }
        // 3.1.4.1 OrdinaryGetOwnMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarygetownmetadata
        function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return undefined;
            return metadataMap.get(MetadataKey);
        }
        // 3.1.5.1 OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarydefineownmetadata
        function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ true);
            metadataMap.set(MetadataKey, MetadataValue);
        }
        // 3.1.6.1 OrdinaryMetadataKeys(O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarymetadatakeys
        function OrdinaryMetadataKeys(O, P) {
            var ownKeys = OrdinaryOwnMetadataKeys(O, P);
            var parent = OrdinaryGetPrototypeOf(O);
            if (parent === null)
                return ownKeys;
            var parentKeys = OrdinaryMetadataKeys(parent, P);
            if (parentKeys.length <= 0)
                return ownKeys;
            if (ownKeys.length <= 0)
                return parentKeys;
            var set = new _Set();
            var keys = [];
            for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
                var key = ownKeys_1[_i];
                var hasKey = set.has(key);
                if (!hasKey) {
                    set.add(key);
                    keys.push(key);
                }
            }
            for (var _a = 0, parentKeys_1 = parentKeys; _a < parentKeys_1.length; _a++) {
                var key = parentKeys_1[_a];
                var hasKey = set.has(key);
                if (!hasKey) {
                    set.add(key);
                    keys.push(key);
                }
            }
            return keys;
        }
        // 3.1.7.1 OrdinaryOwnMetadataKeys(O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryownmetadatakeys
        function OrdinaryOwnMetadataKeys(O, P) {
            var keys = [];
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return keys;
            var keysObj = metadataMap.keys();
            var iterator = GetIterator(keysObj);
            var k = 0;
            while (true) {
                var next = IteratorStep(iterator);
                if (!next) {
                    keys.length = k;
                    return keys;
                }
                var nextValue = IteratorValue(next);
                try {
                    keys[k] = nextValue;
                }
                catch (e) {
                    try {
                        IteratorClose(iterator);
                    }
                    finally {
                        throw e;
                    }
                }
                k++;
            }
        }
        // 6 ECMAScript Data Typ0es and Values
        // https://tc39.github.io/ecma262/#sec-ecmascript-data-types-and-values
        function Type(x) {
            if (x === null)
                return 1 /* Null */;
            switch (typeof x) {
                case "undefined": return 0 /* Undefined */;
                case "boolean": return 2 /* Boolean */;
                case "string": return 3 /* String */;
                case "symbol": return 4 /* Symbol */;
                case "number": return 5 /* Number */;
                case "object": return x === null ? 1 /* Null */ : 6 /* Object */;
                default: return 6 /* Object */;
            }
        }
        // 6.1.1 The Undefined Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-undefined-type
        function IsUndefined(x) {
            return x === undefined;
        }
        // 6.1.2 The Null Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-null-type
        function IsNull(x) {
            return x === null;
        }
        // 6.1.5 The Symbol Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-symbol-type
        function IsSymbol(x) {
            return typeof x === "symbol";
        }
        // 6.1.7 The Object Type
        // https://tc39.github.io/ecma262/#sec-object-type
        function IsObject(x) {
            return typeof x === "object" ? x !== null : typeof x === "function";
        }
        // 7.1 Type Conversion
        // https://tc39.github.io/ecma262/#sec-type-conversion
        // 7.1.1 ToPrimitive(input [, PreferredType])
        // https://tc39.github.io/ecma262/#sec-toprimitive
        function ToPrimitive(input, PreferredType) {
            switch (Type(input)) {
                case 0 /* Undefined */: return input;
                case 1 /* Null */: return input;
                case 2 /* Boolean */: return input;
                case 3 /* String */: return input;
                case 4 /* Symbol */: return input;
                case 5 /* Number */: return input;
            }
            var hint = PreferredType === 3 /* String */ ? "string" : PreferredType === 5 /* Number */ ? "number" : "default";
            var exoticToPrim = GetMethod(input, toPrimitiveSymbol);
            if (exoticToPrim !== undefined) {
                var result = exoticToPrim.call(input, hint);
                if (IsObject(result))
                    throw new TypeError();
                return result;
            }
            return OrdinaryToPrimitive(input, hint === "default" ? "number" : hint);
        }
        // 7.1.1.1 OrdinaryToPrimitive(O, hint)
        // https://tc39.github.io/ecma262/#sec-ordinarytoprimitive
        function OrdinaryToPrimitive(O, hint) {
            if (hint === "string") {
                var toString_1 = O.toString;
                if (IsCallable(toString_1)) {
                    var result = toString_1.call(O);
                    if (!IsObject(result))
                        return result;
                }
                var valueOf = O.valueOf;
                if (IsCallable(valueOf)) {
                    var result = valueOf.call(O);
                    if (!IsObject(result))
                        return result;
                }
            }
            else {
                var valueOf = O.valueOf;
                if (IsCallable(valueOf)) {
                    var result = valueOf.call(O);
                    if (!IsObject(result))
                        return result;
                }
                var toString_2 = O.toString;
                if (IsCallable(toString_2)) {
                    var result = toString_2.call(O);
                    if (!IsObject(result))
                        return result;
                }
            }
            throw new TypeError();
        }
        // 7.1.2 ToBoolean(argument)
        // https://tc39.github.io/ecma262/2016/#sec-toboolean
        function ToBoolean(argument) {
            return !!argument;
        }
        // 7.1.12 ToString(argument)
        // https://tc39.github.io/ecma262/#sec-tostring
        function ToString(argument) {
            return "" + argument;
        }
        // 7.1.14 ToPropertyKey(argument)
        // https://tc39.github.io/ecma262/#sec-topropertykey
        function ToPropertyKey(argument) {
            var key = ToPrimitive(argument, 3 /* String */);
            if (IsSymbol(key))
                return key;
            return ToString(key);
        }
        // 7.2 Testing and Comparison Operations
        // https://tc39.github.io/ecma262/#sec-testing-and-comparison-operations
        // 7.2.2 IsArray(argument)
        // https://tc39.github.io/ecma262/#sec-isarray
        function IsArray(argument) {
            return Array.isArray
                ? Array.isArray(argument)
                : argument instanceof Object
                    ? argument instanceof Array
                    : Object.prototype.toString.call(argument) === "[object Array]";
        }
        // 7.2.3 IsCallable(argument)
        // https://tc39.github.io/ecma262/#sec-iscallable
        function IsCallable(argument) {
            // NOTE: This is an approximation as we cannot check for [[Call]] internal method.
            return typeof argument === "function";
        }
        // 7.2.4 IsConstructor(argument)
        // https://tc39.github.io/ecma262/#sec-isconstructor
        function IsConstructor(argument) {
            // NOTE: This is an approximation as we cannot check for [[Construct]] internal method.
            return typeof argument === "function";
        }
        // 7.2.7 IsPropertyKey(argument)
        // https://tc39.github.io/ecma262/#sec-ispropertykey
        function IsPropertyKey(argument) {
            switch (Type(argument)) {
                case 3 /* String */: return true;
                case 4 /* Symbol */: return true;
                default: return false;
            }
        }
        // 7.3 Operations on Objects
        // https://tc39.github.io/ecma262/#sec-operations-on-objects
        // 7.3.9 GetMethod(V, P)
        // https://tc39.github.io/ecma262/#sec-getmethod
        function GetMethod(V, P) {
            var func = V[P];
            if (func === undefined || func === null)
                return undefined;
            if (!IsCallable(func))
                throw new TypeError();
            return func;
        }
        // 7.4 Operations on Iterator Objects
        // https://tc39.github.io/ecma262/#sec-operations-on-iterator-objects
        function GetIterator(obj) {
            var method = GetMethod(obj, iteratorSymbol);
            if (!IsCallable(method))
                throw new TypeError(); // from Call
            var iterator = method.call(obj);
            if (!IsObject(iterator))
                throw new TypeError();
            return iterator;
        }
        // 7.4.4 IteratorValue(iterResult)
        // https://tc39.github.io/ecma262/2016/#sec-iteratorvalue
        function IteratorValue(iterResult) {
            return iterResult.value;
        }
        // 7.4.5 IteratorStep(iterator)
        // https://tc39.github.io/ecma262/#sec-iteratorstep
        function IteratorStep(iterator) {
            var result = iterator.next();
            return result.done ? false : result;
        }
        // 7.4.6 IteratorClose(iterator, completion)
        // https://tc39.github.io/ecma262/#sec-iteratorclose
        function IteratorClose(iterator) {
            var f = iterator["return"];
            if (f)
                f.call(iterator);
        }
        // 9.1 Ordinary Object Internal Methods and Internal Slots
        // https://tc39.github.io/ecma262/#sec-ordinary-object-internal-methods-and-internal-slots
        // 9.1.1.1 OrdinaryGetPrototypeOf(O)
        // https://tc39.github.io/ecma262/#sec-ordinarygetprototypeof
        function OrdinaryGetPrototypeOf(O) {
            var proto = Object.getPrototypeOf(O);
            if (typeof O !== "function" || O === functionPrototype)
                return proto;
            // TypeScript doesn't set __proto__ in ES5, as it's non-standard.
            // Try to determine the superclass constructor. Compatible implementations
            // must either set __proto__ on a subclass constructor to the superclass constructor,
            // or ensure each class has a valid `constructor` property on its prototype that
            // points back to the constructor.
            // If this is not the same as Function.[[Prototype]], then this is definately inherited.
            // This is the case when in ES6 or when using __proto__ in a compatible browser.
            if (proto !== functionPrototype)
                return proto;
            // If the super prototype is Object.prototype, null, or undefined, then we cannot determine the heritage.
            var prototype = O.prototype;
            var prototypeProto = prototype && Object.getPrototypeOf(prototype);
            if (prototypeProto == null || prototypeProto === Object.prototype)
                return proto;
            // If the constructor was not a function, then we cannot determine the heritage.
            var constructor = prototypeProto.constructor;
            if (typeof constructor !== "function")
                return proto;
            // If we have some kind of self-reference, then we cannot determine the heritage.
            if (constructor === O)
                return proto;
            // we have a pretty good guess at the heritage.
            return constructor;
        }
        // naive Map shim
        function CreateMapPolyfill() {
            var cacheSentinel = {};
            var arraySentinel = [];
            var MapIterator = /** @class */ (function () {
                function MapIterator(keys, values, selector) {
                    this._index = 0;
                    this._keys = keys;
                    this._values = values;
                    this._selector = selector;
                }
                MapIterator.prototype["@@iterator"] = function () { return this; };
                MapIterator.prototype[iteratorSymbol] = function () { return this; };
                MapIterator.prototype.next = function () {
                    var index = this._index;
                    if (index >= 0 && index < this._keys.length) {
                        var result = this._selector(this._keys[index], this._values[index]);
                        if (index + 1 >= this._keys.length) {
                            this._index = -1;
                            this._keys = arraySentinel;
                            this._values = arraySentinel;
                        }
                        else {
                            this._index++;
                        }
                        return { value: result, done: false };
                    }
                    return { value: undefined, done: true };
                };
                MapIterator.prototype.throw = function (error) {
                    if (this._index >= 0) {
                        this._index = -1;
                        this._keys = arraySentinel;
                        this._values = arraySentinel;
                    }
                    throw error;
                };
                MapIterator.prototype.return = function (value) {
                    if (this._index >= 0) {
                        this._index = -1;
                        this._keys = arraySentinel;
                        this._values = arraySentinel;
                    }
                    return { value: value, done: true };
                };
                return MapIterator;
            }());
            return /** @class */ (function () {
                function Map() {
                    this._keys = [];
                    this._values = [];
                    this._cacheKey = cacheSentinel;
                    this._cacheIndex = -2;
                }
                Object.defineProperty(Map.prototype, "size", {
                    get: function () { return this._keys.length; },
                    enumerable: true,
                    configurable: true
                });
                Map.prototype.has = function (key) { return this._find(key, /*insert*/ false) >= 0; };
                Map.prototype.get = function (key) {
                    var index = this._find(key, /*insert*/ false);
                    return index >= 0 ? this._values[index] : undefined;
                };
                Map.prototype.set = function (key, value) {
                    var index = this._find(key, /*insert*/ true);
                    this._values[index] = value;
                    return this;
                };
                Map.prototype.delete = function (key) {
                    var index = this._find(key, /*insert*/ false);
                    if (index >= 0) {
                        var size = this._keys.length;
                        for (var i = index + 1; i < size; i++) {
                            this._keys[i - 1] = this._keys[i];
                            this._values[i - 1] = this._values[i];
                        }
                        this._keys.length--;
                        this._values.length--;
                        if (key === this._cacheKey) {
                            this._cacheKey = cacheSentinel;
                            this._cacheIndex = -2;
                        }
                        return true;
                    }
                    return false;
                };
                Map.prototype.clear = function () {
                    this._keys.length = 0;
                    this._values.length = 0;
                    this._cacheKey = cacheSentinel;
                    this._cacheIndex = -2;
                };
                Map.prototype.keys = function () { return new MapIterator(this._keys, this._values, getKey); };
                Map.prototype.values = function () { return new MapIterator(this._keys, this._values, getValue); };
                Map.prototype.entries = function () { return new MapIterator(this._keys, this._values, getEntry); };
                Map.prototype["@@iterator"] = function () { return this.entries(); };
                Map.prototype[iteratorSymbol] = function () { return this.entries(); };
                Map.prototype._find = function (key, insert) {
                    if (this._cacheKey !== key) {
                        this._cacheIndex = this._keys.indexOf(this._cacheKey = key);
                    }
                    if (this._cacheIndex < 0 && insert) {
                        this._cacheIndex = this._keys.length;
                        this._keys.push(key);
                        this._values.push(undefined);
                    }
                    return this._cacheIndex;
                };
                return Map;
            }());
            function getKey(key, _) {
                return key;
            }
            function getValue(_, value) {
                return value;
            }
            function getEntry(key, value) {
                return [key, value];
            }
        }
        // naive Set shim
        function CreateSetPolyfill() {
            return /** @class */ (function () {
                function Set() {
                    this._map = new _Map();
                }
                Object.defineProperty(Set.prototype, "size", {
                    get: function () { return this._map.size; },
                    enumerable: true,
                    configurable: true
                });
                Set.prototype.has = function (value) { return this._map.has(value); };
                Set.prototype.add = function (value) { return this._map.set(value, value), this; };
                Set.prototype.delete = function (value) { return this._map.delete(value); };
                Set.prototype.clear = function () { this._map.clear(); };
                Set.prototype.keys = function () { return this._map.keys(); };
                Set.prototype.values = function () { return this._map.values(); };
                Set.prototype.entries = function () { return this._map.entries(); };
                Set.prototype["@@iterator"] = function () { return this.keys(); };
                Set.prototype[iteratorSymbol] = function () { return this.keys(); };
                return Set;
            }());
        }
        // naive WeakMap shim
        function CreateWeakMapPolyfill() {
            var UUID_SIZE = 16;
            var keys = HashMap.create();
            var rootKey = CreateUniqueKey();
            return /** @class */ (function () {
                function WeakMap() {
                    this._key = CreateUniqueKey();
                }
                WeakMap.prototype.has = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? HashMap.has(table, this._key) : false;
                };
                WeakMap.prototype.get = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? HashMap.get(table, this._key) : undefined;
                };
                WeakMap.prototype.set = function (target, value) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ true);
                    table[this._key] = value;
                    return this;
                };
                WeakMap.prototype.delete = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? delete table[this._key] : false;
                };
                WeakMap.prototype.clear = function () {
                    // NOTE: not a real clear, just makes the previous data unreachable
                    this._key = CreateUniqueKey();
                };
                return WeakMap;
            }());
            function CreateUniqueKey() {
                var key;
                do
                    key = "@@WeakMap@@" + CreateUUID();
                while (HashMap.has(keys, key));
                keys[key] = true;
                return key;
            }
            function GetOrCreateWeakMapTable(target, create) {
                if (!hasOwn.call(target, rootKey)) {
                    if (!create)
                        return undefined;
                    Object.defineProperty(target, rootKey, { value: HashMap.create() });
                }
                return target[rootKey];
            }
            function FillRandomBytes(buffer, size) {
                for (var i = 0; i < size; ++i)
                    buffer[i] = Math.random() * 0xff | 0;
                return buffer;
            }
            function GenRandomBytes(size) {
                if (typeof Uint8Array === "function") {
                    if (typeof crypto !== "undefined")
                        return crypto.getRandomValues(new Uint8Array(size));
                    if (typeof msCrypto !== "undefined")
                        return msCrypto.getRandomValues(new Uint8Array(size));
                    return FillRandomBytes(new Uint8Array(size), size);
                }
                return FillRandomBytes(new Array(size), size);
            }
            function CreateUUID() {
                var data = GenRandomBytes(UUID_SIZE);
                // mark as random - RFC 4122 § 4.4
                data[6] = data[6] & 0x4f | 0x40;
                data[8] = data[8] & 0xbf | 0x80;
                var result = "";
                for (var offset = 0; offset < UUID_SIZE; ++offset) {
                    var byte = data[offset];
                    if (offset === 4 || offset === 6 || offset === 8)
                        result += "-";
                    if (byte < 16)
                        result += "0";
                    result += byte.toString(16).toLowerCase();
                }
                return result;
            }
        }
        // uses a heuristic used by v8 and chakra to force an object into dictionary mode.
        function MakeDictionary(obj) {
            obj.__ = undefined;
            delete obj.__;
            return obj;
        }
    });
})(Reflect || (Reflect = {}));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(60), __webpack_require__(89)))

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const injection_handler_1 = __webpack_require__(199);
const container_binding_config_1 = __webpack_require__(224);
const container_namespaces_1 = __webpack_require__(227);
/**
 * Internal implementation of IoC Container.
 */
class IoCContainer {
    static bind(source, readOnly = false) {
        injection_handler_1.InjectorHandler.checkType(source);
        const baseSource = injection_handler_1.InjectorHandler.getConstructorFromType(source);
        let config = IoCContainer.namespaces.get(baseSource);
        if (!config) {
            config = new container_binding_config_1.IoCBindConfig(baseSource, IoCContainer.get, IoCContainer.getValue);
            config
                .to(source);
            IoCContainer.namespaces.set(baseSource, config);
        }
        else if (!readOnly && config.namespace !== IoCContainer.namespaces.selectedNamespace()) {
            config = config.clone();
            IoCContainer.namespaces.set(baseSource, config);
        }
        return config;
    }
    static bindName(name, readOnly = false) {
        injection_handler_1.InjectorHandler.checkName(name);
        const property = container_binding_config_1.PropertyPath.parse(name);
        let config = IoCContainer.namespaces.getValue(property.name);
        if (!config) {
            config = new container_binding_config_1.IoCBindValueConfig(property.name);
            IoCContainer.namespaces.setValue(property.name, config);
        }
        else if (!readOnly && config.namespace !== IoCContainer.namespaces.selectedNamespace()) {
            config = config.clone();
            IoCContainer.namespaces.setValue(property.name, config);
        }
        config.path = property.path;
        return config;
    }
    static get(source, context) {
        const config = IoCContainer.bind(source, true);
        if (!config.iocFactory) {
            config.to(config.source);
        }
        return config.getInstance(context);
    }
    static getValue(name) {
        const config = IoCContainer.bindName(name, true);
        return config.getValue();
    }
    static getType(source) {
        injection_handler_1.InjectorHandler.checkType(source);
        const baseSource = injection_handler_1.InjectorHandler.getConstructorFromType(source);
        const config = IoCContainer.namespaces.get(baseSource);
        if (!config) {
            throw new TypeError(`The type ${source.name} hasn't been registered with the IOC Container`);
        }
        return config.targetSource || config.source;
    }
    static namespace(name) {
        IoCContainer.namespaces.selectNamespace(name);
        return {
            remove: () => {
                if (name) {
                    IoCContainer.namespaces.removeNamespace(name);
                }
            }
        };
    }
    static selectedNamespace() {
        return IoCContainer.namespaces.selectedNamespace();
    }
    static injectProperty(target, key, propertyType) {
        injection_handler_1.InjectorHandler.injectProperty(target, key, propertyType, IoCContainer.get);
    }
    static injectValueProperty(target, key, name) {
        injection_handler_1.InjectorHandler.injectValueProperty(target, key, name, IoCContainer.getValue);
    }
    /**
     * Create a temporary namespace. Useful for testing.
     */
    static snapshot() {
        const name = `_snapshot-${IoCContainer.snapshotsCount++}`;
        const namespace = IoCContainer.namespace(name);
        return {
            restore: () => namespace.remove(),
            select: () => IoCContainer.namespace(name)
        };
    }
}
exports.IoCContainer = IoCContainer;
IoCContainer.namespaces = new container_namespaces_1.ContainerNamespaces();
IoCContainer.snapshotsCount = 0;
//# sourceMappingURL=container.js.map

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) {
        d[p] = b[p];
      }
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) {
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    }

    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;

  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
    r = Reflect.decorate(decorators, target, key, desc);
  } else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) {
      r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }
  }

  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = this && this.__metadata || function (k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
    return Reflect.metadata(k, v);
  }
};

var __param = this && this.__param || function (paramIndex, decorator) {
  return function (target, key) {
    decorator(target, key, paramIndex);
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClientPlayerService = void 0;

var typescript_ioc_1 = __webpack_require__(32);

var client_player_wrapper_1 = __webpack_require__(231);

var shared_player_service_1 = __webpack_require__(232);

var rxjs_1 = __webpack_require__(46);

var player_store_1 = __webpack_require__(206);

var ClientPlayerService = function (_super) {
  __extends(ClientPlayerService, _super);

  function ClientPlayerService(wrapper, store) {
    var _this = _super.call(this) || this;

    _this.wrapper = wrapper;
    _this.store = store;
    _this.clientInitSubject = new rxjs_1.Subject();
    _this.clientInit$ = _this.clientInitSubject.asObservable();
    return _this;
  }

  ClientPlayerService.prototype.setClientPlayer = function (player) {
    this.clientId = player.id;
    this.store.update(player.id, player);
    this.clientInitSubject.next(player);
  };

  var _a, _b;

  ClientPlayerService = __decorate([typescript_ioc_1.Singleton, __param(0, typescript_ioc_1.Inject), __param(1, typescript_ioc_1.Inject), __metadata("design:paramtypes", [typeof (_a = typeof client_player_wrapper_1.ClientPlayerWrapper !== "undefined" && client_player_wrapper_1.ClientPlayerWrapper) === "function" ? _a : Object, typeof (_b = typeof player_store_1.PlayerStore !== "undefined" && player_store_1.PlayerStore) === "function" ? _b : Object])], ClientPlayerService);
  return ClientPlayerService;
}(shared_player_service_1.SharedPlayerService);

exports.ClientPlayerService = ClientPlayerService;

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) {
        d[p] = b[p];
      }
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) {
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    }

    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;

  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
    r = Reflect.decorate(decorators, target, key, desc);
  } else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) {
      r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }
  }

  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlayerStore = void 0;

var typescript_ioc_1 = __webpack_require__(32);

var store_1 = __webpack_require__(233);

var PlayerStore = function (_super) {
  __extends(PlayerStore, _super);

  function PlayerStore() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  PlayerStore_1 = PlayerStore;

  PlayerStore.prototype.getId = function () {
    return PlayerStore_1.name;
  };

  PlayerStore.prototype.getIds = function () {
    return Object.keys(this.getAll());
  };

  var PlayerStore_1;
  PlayerStore = PlayerStore_1 = __decorate([typescript_ioc_1.Singleton], PlayerStore);
  return PlayerStore;
}(store_1.Store);

exports.PlayerStore = PlayerStore;

/***/ }),
/* 207 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(182);
/* harmony import */ var _unsubscribe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21);



// TODO: Subject already creates additional observables "under the hood",
//       now we introduce even more. A true native MulticastObservable
//       would be preferable.
/**
 * Takes a "cold" observable and returns a wrapping "hot" observable that
 * proxies the input observable's values and errors.
 *
 * An observable is called "cold" when its initialization function is run
 * for each new subscriber. This is how observable-fns's `Observable`
 * implementation works.
 *
 * A hot observable is an observable where new subscribers subscribe to
 * the upcoming values of an already-initialiazed observable.
 *
 * The multicast observable will lazily subscribe to the source observable
 * once it has its first own subscriber and will unsubscribe from the
 * source observable when its last own subscriber unsubscribed.
 */
function multicast(coldObservable) {
    const subject = new _subject__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]();
    let sourceSubscription;
    let subscriberCount = 0;
    return new _observable__WEBPACK_IMPORTED_MODULE_0__[/* default */ "b"](observer => {
        // Init source subscription lazily
        if (!sourceSubscription) {
            sourceSubscription = coldObservable.subscribe(subject);
        }
        // Pipe all events from `subject` into this observable
        const subscription = subject.subscribe(observer);
        subscriberCount++;
        return () => {
            subscriberCount--;
            subscription.unsubscribe();
            // Close source subscription once last subscriber has unsubscribed
            if (subscriberCount === 0) {
                Object(_unsubscribe__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(sourceSubscription);
                sourceSubscription = undefined;
            }
        };
    });
}
/* harmony default export */ __webpack_exports__["a"] = (multicast);


/***/ }),
/* 208 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return spawn; });
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var observable_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/* harmony import */ var _promise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(218);
/* harmony import */ var _symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(28);
/* harmony import */ var _types_master__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(93);
/* harmony import */ var _invocation_proxy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(202);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};







const debugMessages = debug__WEBPACK_IMPORTED_MODULE_0___default()("threads:master:messages");
const debugSpawn = debug__WEBPACK_IMPORTED_MODULE_0___default()("threads:master:spawn");
const debugThreadUtils = debug__WEBPACK_IMPORTED_MODULE_0___default()("threads:master:thread-utils");
const isInitMessage = (data) => data && data.type === "init";
const isUncaughtErrorMessage = (data) => data && data.type === "uncaughtError";
const initMessageTimeout = typeof process !== "undefined" && process.env.THREADS_WORKER_INIT_TIMEOUT
    ? Number.parseInt(process.env.THREADS_WORKER_INIT_TIMEOUT, 10)
    : 10000;
function withTimeout(promise, timeoutInMs, errorMessage) {
    return __awaiter(this, void 0, void 0, function* () {
        let timeoutHandle;
        const timeout = new Promise((resolve, reject) => {
            timeoutHandle = setTimeout(() => reject(Error(errorMessage)), timeoutInMs);
        });
        const result = yield Promise.race([
            promise,
            timeout
        ]);
        clearTimeout(timeoutHandle);
        return result;
    });
}
function receiveInitMessage(worker) {
    return new Promise((resolve, reject) => {
        const messageHandler = ((event) => {
            debugMessages("Message from worker before finishing initialization:", event.data);
            if (isInitMessage(event.data)) {
                worker.removeEventListener("message", messageHandler);
                resolve(event.data);
            }
            else if (isUncaughtErrorMessage(event.data)) {
                worker.removeEventListener("message", messageHandler);
                reject(Object(_common__WEBPACK_IMPORTED_MODULE_2__[/* deserialize */ "a"])(event.data.error));
            }
        });
        worker.addEventListener("message", messageHandler);
    });
}
function createEventObservable(worker, workerTermination) {
    return new observable_fns__WEBPACK_IMPORTED_MODULE_1__[/* default */ "b"](observer => {
        const messageHandler = ((messageEvent) => {
            const workerEvent = {
                type: _types_master__WEBPACK_IMPORTED_MODULE_5__[/* WorkerEventType */ "a"].message,
                data: messageEvent.data
            };
            observer.next(workerEvent);
        });
        const rejectionHandler = ((errorEvent) => {
            debugThreadUtils("Unhandled promise rejection event in thread:", errorEvent);
            const workerEvent = {
                type: _types_master__WEBPACK_IMPORTED_MODULE_5__[/* WorkerEventType */ "a"].internalError,
                error: Error(errorEvent.reason)
            };
            observer.next(workerEvent);
        });
        worker.addEventListener("message", messageHandler);
        worker.addEventListener("unhandledrejection", rejectionHandler);
        workerTermination.then(() => {
            const terminationEvent = {
                type: _types_master__WEBPACK_IMPORTED_MODULE_5__[/* WorkerEventType */ "a"].termination
            };
            worker.removeEventListener("message", messageHandler);
            worker.removeEventListener("unhandledrejection", rejectionHandler);
            observer.next(terminationEvent);
            observer.complete();
        });
    });
}
function createTerminator(worker) {
    const [termination, resolver] = Object(_promise__WEBPACK_IMPORTED_MODULE_3__[/* createPromiseWithResolver */ "a"])();
    const terminate = () => __awaiter(this, void 0, void 0, function* () {
        debugThreadUtils("Terminating worker");
        // Newer versions of worker_threads workers return a promise
        yield worker.terminate();
        resolver();
    });
    return { terminate, termination };
}
function setPrivateThreadProps(raw, worker, workerEvents, terminate) {
    const workerErrors = workerEvents
        .filter(event => event.type === _types_master__WEBPACK_IMPORTED_MODULE_5__[/* WorkerEventType */ "a"].internalError)
        .map(errorEvent => errorEvent.error);
    // tslint:disable-next-line prefer-object-spread
    return Object.assign(raw, {
        [_symbols__WEBPACK_IMPORTED_MODULE_4__[/* $errors */ "a"]]: workerErrors,
        [_symbols__WEBPACK_IMPORTED_MODULE_4__[/* $events */ "b"]]: workerEvents,
        [_symbols__WEBPACK_IMPORTED_MODULE_4__[/* $terminate */ "c"]]: terminate,
        [_symbols__WEBPACK_IMPORTED_MODULE_4__[/* $worker */ "e"]]: worker
    });
}
/**
 * Spawn a new thread. Takes a fresh worker instance, wraps it in a thin
 * abstraction layer to provide the transparent API and verifies that
 * the worker has initialized successfully.
 *
 * @param worker Instance of `Worker`. Either a web worker, `worker_threads` worker or `tiny-worker` worker.
 * @param [options]
 * @param [options.timeout] Init message timeout. Default: 10000 or set by environment variable.
 */
function spawn(worker, options) {
    return __awaiter(this, void 0, void 0, function* () {
        debugSpawn("Initializing new thread");
        const initMessage = yield withTimeout(receiveInitMessage(worker), options && options.timeout ? options.timeout : initMessageTimeout, `Timeout: Did not receive an init message from worker after ${initMessageTimeout}ms. Make sure the worker calls expose().`);
        const exposed = initMessage.exposed;
        const { termination, terminate } = createTerminator(worker);
        const events = createEventObservable(worker, termination);
        if (exposed.type === "function") {
            const proxy = Object(_invocation_proxy__WEBPACK_IMPORTED_MODULE_6__[/* createProxyFunction */ "a"])(worker);
            return setPrivateThreadProps(proxy, worker, events, terminate);
        }
        else if (exposed.type === "module") {
            const proxy = Object(_invocation_proxy__WEBPACK_IMPORTED_MODULE_6__[/* createProxyModule */ "b"])(worker, exposed.methods);
            return setPrivateThreadProps(proxy, worker, events, terminate);
        }
        else {
            const type = exposed.type;
            throw Error(`Worker init message states unexpected type of expose(): ${type}`);
        }
    });
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(60)))

/***/ }),
/* 209 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* unused harmony export isWorkerRuntime */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return expose; });
/* harmony import */ var is_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(219);
/* harmony import */ var is_observable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(is_observable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _transferable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51);
/* harmony import */ var _types_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19);
/* harmony import */ var _implementation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(25);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};







/** Returns `true` if this code is currently running in a worker. */
const isWorkerRuntime = _implementation__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].isWorkerRuntime;
let exposeCalled = false;
const activeSubscriptions = new Map();
const isMasterJobCancelMessage = (thing) => thing && thing.type === _types_messages__WEBPACK_IMPORTED_MODULE_3__[/* MasterMessageType */ "a"].cancel;
const isMasterJobRunMessage = (thing) => thing && thing.type === _types_messages__WEBPACK_IMPORTED_MODULE_3__[/* MasterMessageType */ "a"].run;
/**
 * There are issues with `is-observable` not recognizing zen-observable's instances.
 * We are using `observable-fns`, but it's based on zen-observable, too.
 */
const isObservable = (thing) => is_observable__WEBPACK_IMPORTED_MODULE_0___default()(thing) || isZenObservable(thing);
function isZenObservable(thing) {
    return thing && typeof thing === "object" && typeof thing.subscribe === "function";
}
function deconstructTransfer(thing) {
    return Object(_transferable__WEBPACK_IMPORTED_MODULE_2__[/* isTransferDescriptor */ "b"])(thing)
        ? { payload: thing.send, transferables: thing.transferables }
        : { payload: thing, transferables: undefined };
}
function postFunctionInitMessage() {
    const initMessage = {
        type: _types_messages__WEBPACK_IMPORTED_MODULE_3__[/* WorkerMessageType */ "b"].init,
        exposed: {
            type: "function"
        }
    };
    _implementation__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].postMessageToMaster(initMessage);
}
function postModuleInitMessage(methodNames) {
    const initMessage = {
        type: _types_messages__WEBPACK_IMPORTED_MODULE_3__[/* WorkerMessageType */ "b"].init,
        exposed: {
            type: "module",
            methods: methodNames
        }
    };
    _implementation__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].postMessageToMaster(initMessage);
}
function postJobErrorMessage(uid, rawError) {
    const { payload: error, transferables } = deconstructTransfer(rawError);
    const errorMessage = {
        type: _types_messages__WEBPACK_IMPORTED_MODULE_3__[/* WorkerMessageType */ "b"].error,
        uid,
        error: Object(_common__WEBPACK_IMPORTED_MODULE_1__[/* serialize */ "c"])(error)
    };
    _implementation__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].postMessageToMaster(errorMessage, transferables);
}
function postJobResultMessage(uid, completed, resultValue) {
    const { payload, transferables } = deconstructTransfer(resultValue);
    const resultMessage = {
        type: _types_messages__WEBPACK_IMPORTED_MODULE_3__[/* WorkerMessageType */ "b"].result,
        uid,
        complete: completed ? true : undefined,
        payload
    };
    _implementation__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].postMessageToMaster(resultMessage, transferables);
}
function postJobStartMessage(uid, resultType) {
    const startMessage = {
        type: _types_messages__WEBPACK_IMPORTED_MODULE_3__[/* WorkerMessageType */ "b"].running,
        uid,
        resultType
    };
    _implementation__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].postMessageToMaster(startMessage);
}
function postUncaughtErrorMessage(error) {
    try {
        const errorMessage = {
            type: _types_messages__WEBPACK_IMPORTED_MODULE_3__[/* WorkerMessageType */ "b"].uncaughtError,
            error: Object(_common__WEBPACK_IMPORTED_MODULE_1__[/* serialize */ "c"])(error)
        };
        _implementation__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].postMessageToMaster(errorMessage);
    }
    catch (subError) {
        // tslint:disable-next-line no-console
        console.error("Not reporting uncaught error back to master thread as it " +
            "occured while reporting an uncaught error already." +
            "\nLatest error:", subError, "\nOriginal error:", error);
    }
}
function runFunction(jobUID, fn, args) {
    return __awaiter(this, void 0, void 0, function* () {
        let syncResult;
        try {
            syncResult = fn(...args);
        }
        catch (error) {
            return postJobErrorMessage(jobUID, error);
        }
        const resultType = isObservable(syncResult) ? "observable" : "promise";
        postJobStartMessage(jobUID, resultType);
        if (isObservable(syncResult)) {
            const subscription = syncResult.subscribe(value => postJobResultMessage(jobUID, false, Object(_common__WEBPACK_IMPORTED_MODULE_1__[/* serialize */ "c"])(value)), error => {
                postJobErrorMessage(jobUID, Object(_common__WEBPACK_IMPORTED_MODULE_1__[/* serialize */ "c"])(error));
                activeSubscriptions.delete(jobUID);
            }, () => {
                postJobResultMessage(jobUID, true);
                activeSubscriptions.delete(jobUID);
            });
            activeSubscriptions.set(jobUID, subscription);
        }
        else {
            try {
                const result = yield syncResult;
                postJobResultMessage(jobUID, true, Object(_common__WEBPACK_IMPORTED_MODULE_1__[/* serialize */ "c"])(result));
            }
            catch (error) {
                postJobErrorMessage(jobUID, Object(_common__WEBPACK_IMPORTED_MODULE_1__[/* serialize */ "c"])(error));
            }
        }
    });
}
/**
 * Expose a function or a module (an object whose values are functions)
 * to the main thread. Must be called exactly once in every worker thread
 * to signal its API to the main thread.
 *
 * @param exposed Function or object whose values are functions
 */
function expose(exposed) {
    if (!_implementation__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].isWorkerRuntime()) {
        throw Error("expose() called in the master thread.");
    }
    if (exposeCalled) {
        throw Error("expose() called more than once. This is not possible. Pass an object to expose() if you want to expose multiple functions.");
    }
    exposeCalled = true;
    if (typeof exposed === "function") {
        _implementation__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].subscribeToMasterMessages(messageData => {
            if (isMasterJobRunMessage(messageData) && !messageData.method) {
                runFunction(messageData.uid, exposed, messageData.args.map(_common__WEBPACK_IMPORTED_MODULE_1__[/* deserialize */ "a"]));
            }
        });
        postFunctionInitMessage();
    }
    else if (typeof exposed === "object" && exposed) {
        _implementation__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].subscribeToMasterMessages(messageData => {
            if (isMasterJobRunMessage(messageData) && messageData.method) {
                runFunction(messageData.uid, exposed[messageData.method], messageData.args.map(_common__WEBPACK_IMPORTED_MODULE_1__[/* deserialize */ "a"]));
            }
        });
        const methodNames = Object.keys(exposed).filter(key => typeof exposed[key] === "function");
        postModuleInitMessage(methodNames);
    }
    else {
        throw Error(`Invalid argument passed to expose(). Expected a function or an object, got: ${exposed}`);
    }
    _implementation__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].subscribeToMasterMessages(messageData => {
        if (isMasterJobCancelMessage(messageData)) {
            const jobUID = messageData.uid;
            const subscription = activeSubscriptions.get(jobUID);
            if (subscription) {
                subscription.unsubscribe();
                activeSubscriptions.delete(jobUID);
            }
        }
    });
}
if (typeof self !== "undefined" && typeof self.addEventListener === "function" && _implementation__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].isWorkerRuntime()) {
    self.addEventListener("error", event => {
        // Post with some delay, so the master had some time to subscribe to messages
        setTimeout(() => postUncaughtErrorMessage(event.error || event), 250);
    });
    self.addEventListener("unhandledrejection", event => {
        const error = event.reason;
        if (error && typeof error.message === "string") {
            // Post with some delay, so the master had some time to subscribe to messages
            setTimeout(() => postUncaughtErrorMessage(error), 250);
        }
    });
}
if (typeof process !== "undefined" && typeof process.on === "function" && _implementation__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].isWorkerRuntime()) {
    process.on("uncaughtException", (error) => {
        // Post with some delay, so the master had some time to subscribe to messages
        setTimeout(() => postUncaughtErrorMessage(error), 250);
    });
    process.on("unhandledRejection", (error) => {
        if (error && typeof error.message === "string") {
            // Post with some delay, so the master had some time to subscribe to messages
            setTimeout(() => postUncaughtErrorMessage(error), 250);
        }
    });
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(60)))

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// tslint:disable max-classes-per-file
Object.defineProperty(exports, "__esModule", { value: true });
exports.isWorkerRuntime = exports.getWorkerImplementation = exports.defaultPoolSize = void 0;
const get_bundle_url_browser_1 = __webpack_require__(244);
exports.defaultPoolSize = typeof navigator !== "undefined" && navigator.hardwareConcurrency
    ? navigator.hardwareConcurrency
    : 4;
const isAbsoluteURL = (value) => /^(file|https?:)?\/\//i.test(value);
function createSourceBlobURL(code) {
    const blob = new Blob([code], { type: "application/javascript" });
    return URL.createObjectURL(blob);
}
function selectWorkerImplementation() {
    if (typeof Worker === "undefined") {
        // Might happen on Safari, for instance
        // The idea is to only fail if the constructor is actually used
        return class NoWebWorker {
            constructor() {
                throw Error("No web worker implementation available. You might have tried to spawn a worker within a worker in a browser that doesn't support workers in workers.");
            }
        };
    }
    class WebWorker extends Worker {
        constructor(url, options) {
            if (typeof url === "string" && options && options._baseURL) {
                url = new URL(url, options._baseURL);
            }
            else if (typeof url === "string" && !isAbsoluteURL(url) && get_bundle_url_browser_1.getBundleURL().match(/^file:\/\//i)) {
                url = new URL(url, get_bundle_url_browser_1.getBundleURL().replace(/\/[^\/]+$/, "/"));
                url = createSourceBlobURL(`importScripts(${JSON.stringify(url)});`);
            }
            if (typeof url === "string" && isAbsoluteURL(url)) {
                // Create source code blob loading JS file via `importScripts()`
                // to circumvent worker CORS restrictions
                url = createSourceBlobURL(`importScripts(${JSON.stringify(url)});`);
            }
            super(url, options);
        }
    }
    class BlobWorker extends WebWorker {
        constructor(blob, options) {
            const url = window.URL.createObjectURL(blob);
            super(url, options);
        }
        static fromText(source, options) {
            const blob = new window.Blob([source], { type: "text/javascript" });
            return new BlobWorker(blob, options);
        }
    }
    return {
        blob: BlobWorker,
        default: WebWorker
    };
}
let implementation;
function getWorkerImplementation() {
    if (!implementation) {
        implementation = selectWorkerImplementation();
    }
    return implementation;
}
exports.getWorkerImplementation = getWorkerImplementation;
function isWorkerRuntime() {
    const isWindowContext = typeof self !== "undefined" && typeof Window !== "undefined" && self instanceof Window;
    return typeof self !== "undefined" && self.postMessage && !isWindowContext ? true : false;
}
exports.isWorkerRuntime = isWorkerRuntime;


/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Thread = void 0;
const symbols_1 = __webpack_require__(169);
function fail(message) {
    throw Error(message);
}
/** Thread utility functions. Use them to manage or inspect a `spawn()`-ed thread. */
exports.Thread = {
    /** Return an observable that can be used to subscribe to all errors happening in the thread. */
    errors(thread) {
        return thread[symbols_1.$errors] || fail("Error observable not found. Make sure to pass a thread instance as returned by the spawn() promise.");
    },
    /** Return an observable that can be used to subscribe to internal events happening in the thread. Useful for debugging. */
    events(thread) {
        return thread[symbols_1.$events] || fail("Events observable not found. Make sure to pass a thread instance as returned by the spawn() promise.");
    },
    /** Terminate a thread. Remember to terminate every thread when you are done using it. */
    terminate(thread) {
        return thread[symbols_1.$terminate]();
    }
};


/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.serialize = exports.deserialize = exports.registerSerializer = void 0;
const serializers_1 = __webpack_require__(249);
let registeredSerializer = serializers_1.DefaultSerializer;
function registerSerializer(serializer) {
    registeredSerializer = serializers_1.extendSerializer(registeredSerializer, serializer);
}
exports.registerSerializer = registerSerializer;
function deserialize(message) {
    return registeredSerializer.deserialize(message);
}
exports.deserialize = deserialize;
function serialize(input) {
    return registeredSerializer.serialize(input);
}
exports.serialize = serialize;


/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) {
        d[p] = b[p];
      }
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) {
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    }

    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClientConfig = void 0;

var common_client_config_1 = __webpack_require__(258);

var ClientConfig = function (_super) {
  __extends(ClientConfig, _super);

  function ClientConfig() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return ClientConfig;
}(common_client_config_1.CommonClientConfig);

exports.ClientConfig = ClientConfig;

/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.keyValueObject = exports.generateId = void 0;

var generateId = function () {
  return (Math.random() * 0.99 + 1.1).toString(36).substring(2);
};

exports.generateId = generateId;

var keyValueObject = function (key, value) {
  var _a;

  return _a = {}, _a[key] = value, _a;
};

exports.keyValueObject = keyValueObject;

/***/ }),
/* 215 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "audit", function() { return /* reexport */ audit["a" /* audit */]; });
__webpack_require__.d(__webpack_exports__, "auditTime", function() { return /* reexport */ auditTime["a" /* auditTime */]; });
__webpack_require__.d(__webpack_exports__, "buffer", function() { return /* reexport */ buffer["a" /* buffer */]; });
__webpack_require__.d(__webpack_exports__, "bufferCount", function() { return /* reexport */ bufferCount["a" /* bufferCount */]; });
__webpack_require__.d(__webpack_exports__, "bufferTime", function() { return /* reexport */ bufferTime["a" /* bufferTime */]; });
__webpack_require__.d(__webpack_exports__, "bufferToggle", function() { return /* reexport */ bufferToggle["a" /* bufferToggle */]; });
__webpack_require__.d(__webpack_exports__, "bufferWhen", function() { return /* reexport */ bufferWhen["a" /* bufferWhen */]; });
__webpack_require__.d(__webpack_exports__, "catchError", function() { return /* reexport */ catchError["a" /* catchError */]; });
__webpack_require__.d(__webpack_exports__, "combineAll", function() { return /* reexport */ combineAll["a" /* combineAll */]; });
__webpack_require__.d(__webpack_exports__, "combineLatestAll", function() { return /* reexport */ combineLatestAll["a" /* combineLatestAll */]; });
__webpack_require__.d(__webpack_exports__, "combineLatest", function() { return /* reexport */ combineLatest["a" /* combineLatest */]; });
__webpack_require__.d(__webpack_exports__, "combineLatestWith", function() { return /* reexport */ combineLatestWith["a" /* combineLatestWith */]; });
__webpack_require__.d(__webpack_exports__, "concat", function() { return /* reexport */ concat["a" /* concat */]; });
__webpack_require__.d(__webpack_exports__, "concatAll", function() { return /* reexport */ concatAll["a" /* concatAll */]; });
__webpack_require__.d(__webpack_exports__, "concatMap", function() { return /* reexport */ concatMap["a" /* concatMap */]; });
__webpack_require__.d(__webpack_exports__, "concatMapTo", function() { return /* reexport */ concatMapTo["a" /* concatMapTo */]; });
__webpack_require__.d(__webpack_exports__, "concatWith", function() { return /* reexport */ concatWith["a" /* concatWith */]; });
__webpack_require__.d(__webpack_exports__, "connect", function() { return /* reexport */ connect["a" /* connect */]; });
__webpack_require__.d(__webpack_exports__, "count", function() { return /* reexport */ count["a" /* count */]; });
__webpack_require__.d(__webpack_exports__, "debounce", function() { return /* reexport */ debounce["a" /* debounce */]; });
__webpack_require__.d(__webpack_exports__, "debounceTime", function() { return /* reexport */ debounceTime["a" /* debounceTime */]; });
__webpack_require__.d(__webpack_exports__, "defaultIfEmpty", function() { return /* reexport */ defaultIfEmpty["a" /* defaultIfEmpty */]; });
__webpack_require__.d(__webpack_exports__, "delay", function() { return /* reexport */ delay["a" /* delay */]; });
__webpack_require__.d(__webpack_exports__, "delayWhen", function() { return /* reexport */ delayWhen["a" /* delayWhen */]; });
__webpack_require__.d(__webpack_exports__, "dematerialize", function() { return /* reexport */ dematerialize["a" /* dematerialize */]; });
__webpack_require__.d(__webpack_exports__, "distinct", function() { return /* reexport */ distinct["a" /* distinct */]; });
__webpack_require__.d(__webpack_exports__, "distinctUntilChanged", function() { return /* reexport */ distinctUntilChanged["a" /* distinctUntilChanged */]; });
__webpack_require__.d(__webpack_exports__, "distinctUntilKeyChanged", function() { return /* reexport */ distinctUntilKeyChanged["a" /* distinctUntilKeyChanged */]; });
__webpack_require__.d(__webpack_exports__, "elementAt", function() { return /* reexport */ elementAt["a" /* elementAt */]; });
__webpack_require__.d(__webpack_exports__, "endWith", function() { return /* reexport */ endWith["a" /* endWith */]; });
__webpack_require__.d(__webpack_exports__, "every", function() { return /* reexport */ every["a" /* every */]; });
__webpack_require__.d(__webpack_exports__, "exhaust", function() { return /* reexport */ exhaust["a" /* exhaust */]; });
__webpack_require__.d(__webpack_exports__, "exhaustAll", function() { return /* reexport */ exhaustAll["a" /* exhaustAll */]; });
__webpack_require__.d(__webpack_exports__, "exhaustMap", function() { return /* reexport */ exhaustMap["a" /* exhaustMap */]; });
__webpack_require__.d(__webpack_exports__, "expand", function() { return /* reexport */ expand["a" /* expand */]; });
__webpack_require__.d(__webpack_exports__, "filter", function() { return /* reexport */ filter["a" /* filter */]; });
__webpack_require__.d(__webpack_exports__, "finalize", function() { return /* reexport */ finalize["a" /* finalize */]; });
__webpack_require__.d(__webpack_exports__, "find", function() { return /* reexport */ find["b" /* find */]; });
__webpack_require__.d(__webpack_exports__, "findIndex", function() { return /* reexport */ findIndex["a" /* findIndex */]; });
__webpack_require__.d(__webpack_exports__, "first", function() { return /* reexport */ first["a" /* first */]; });
__webpack_require__.d(__webpack_exports__, "groupBy", function() { return /* reexport */ groupBy["a" /* groupBy */]; });
__webpack_require__.d(__webpack_exports__, "ignoreElements", function() { return /* reexport */ ignoreElements["a" /* ignoreElements */]; });
__webpack_require__.d(__webpack_exports__, "isEmpty", function() { return /* reexport */ isEmpty["a" /* isEmpty */]; });
__webpack_require__.d(__webpack_exports__, "last", function() { return /* reexport */ last["a" /* last */]; });
__webpack_require__.d(__webpack_exports__, "map", function() { return /* reexport */ map["a" /* map */]; });
__webpack_require__.d(__webpack_exports__, "mapTo", function() { return /* reexport */ mapTo["a" /* mapTo */]; });
__webpack_require__.d(__webpack_exports__, "materialize", function() { return /* reexport */ materialize["a" /* materialize */]; });
__webpack_require__.d(__webpack_exports__, "max", function() { return /* reexport */ max["a" /* max */]; });
__webpack_require__.d(__webpack_exports__, "merge", function() { return /* reexport */ merge["a" /* merge */]; });
__webpack_require__.d(__webpack_exports__, "mergeAll", function() { return /* reexport */ mergeAll["a" /* mergeAll */]; });
__webpack_require__.d(__webpack_exports__, "flatMap", function() { return /* reexport */ flatMap["a" /* flatMap */]; });
__webpack_require__.d(__webpack_exports__, "mergeMap", function() { return /* reexport */ mergeMap["a" /* mergeMap */]; });
__webpack_require__.d(__webpack_exports__, "mergeMapTo", function() { return /* reexport */ mergeMapTo["a" /* mergeMapTo */]; });
__webpack_require__.d(__webpack_exports__, "mergeScan", function() { return /* reexport */ mergeScan["a" /* mergeScan */]; });
__webpack_require__.d(__webpack_exports__, "mergeWith", function() { return /* reexport */ mergeWith["a" /* mergeWith */]; });
__webpack_require__.d(__webpack_exports__, "min", function() { return /* reexport */ min["a" /* min */]; });
__webpack_require__.d(__webpack_exports__, "multicast", function() { return /* reexport */ multicast["a" /* multicast */]; });
__webpack_require__.d(__webpack_exports__, "observeOn", function() { return /* reexport */ observeOn["a" /* observeOn */]; });
__webpack_require__.d(__webpack_exports__, "onErrorResumeNext", function() { return /* reexport */ onErrorResumeNext["a" /* onErrorResumeNext */]; });
__webpack_require__.d(__webpack_exports__, "pairwise", function() { return /* reexport */ pairwise["a" /* pairwise */]; });
__webpack_require__.d(__webpack_exports__, "partition", function() { return /* reexport */ partition; });
__webpack_require__.d(__webpack_exports__, "pluck", function() { return /* reexport */ pluck["a" /* pluck */]; });
__webpack_require__.d(__webpack_exports__, "publish", function() { return /* reexport */ publish["a" /* publish */]; });
__webpack_require__.d(__webpack_exports__, "publishBehavior", function() { return /* reexport */ publishBehavior["a" /* publishBehavior */]; });
__webpack_require__.d(__webpack_exports__, "publishLast", function() { return /* reexport */ publishLast["a" /* publishLast */]; });
__webpack_require__.d(__webpack_exports__, "publishReplay", function() { return /* reexport */ publishReplay["a" /* publishReplay */]; });
__webpack_require__.d(__webpack_exports__, "race", function() { return /* reexport */ race; });
__webpack_require__.d(__webpack_exports__, "raceWith", function() { return /* reexport */ raceWith["a" /* raceWith */]; });
__webpack_require__.d(__webpack_exports__, "reduce", function() { return /* reexport */ reduce["a" /* reduce */]; });
__webpack_require__.d(__webpack_exports__, "repeat", function() { return /* reexport */ repeat["a" /* repeat */]; });
__webpack_require__.d(__webpack_exports__, "repeatWhen", function() { return /* reexport */ repeatWhen["a" /* repeatWhen */]; });
__webpack_require__.d(__webpack_exports__, "retry", function() { return /* reexport */ retry["a" /* retry */]; });
__webpack_require__.d(__webpack_exports__, "retryWhen", function() { return /* reexport */ retryWhen["a" /* retryWhen */]; });
__webpack_require__.d(__webpack_exports__, "refCount", function() { return /* reexport */ refCount["a" /* refCount */]; });
__webpack_require__.d(__webpack_exports__, "sample", function() { return /* reexport */ sample["a" /* sample */]; });
__webpack_require__.d(__webpack_exports__, "sampleTime", function() { return /* reexport */ sampleTime["a" /* sampleTime */]; });
__webpack_require__.d(__webpack_exports__, "scan", function() { return /* reexport */ scan["a" /* scan */]; });
__webpack_require__.d(__webpack_exports__, "sequenceEqual", function() { return /* reexport */ sequenceEqual["a" /* sequenceEqual */]; });
__webpack_require__.d(__webpack_exports__, "share", function() { return /* reexport */ share["a" /* share */]; });
__webpack_require__.d(__webpack_exports__, "shareReplay", function() { return /* reexport */ shareReplay["a" /* shareReplay */]; });
__webpack_require__.d(__webpack_exports__, "single", function() { return /* reexport */ single["a" /* single */]; });
__webpack_require__.d(__webpack_exports__, "skip", function() { return /* reexport */ skip["a" /* skip */]; });
__webpack_require__.d(__webpack_exports__, "skipLast", function() { return /* reexport */ skipLast["a" /* skipLast */]; });
__webpack_require__.d(__webpack_exports__, "skipUntil", function() { return /* reexport */ skipUntil["a" /* skipUntil */]; });
__webpack_require__.d(__webpack_exports__, "skipWhile", function() { return /* reexport */ skipWhile["a" /* skipWhile */]; });
__webpack_require__.d(__webpack_exports__, "startWith", function() { return /* reexport */ startWith["a" /* startWith */]; });
__webpack_require__.d(__webpack_exports__, "subscribeOn", function() { return /* reexport */ subscribeOn["a" /* subscribeOn */]; });
__webpack_require__.d(__webpack_exports__, "switchAll", function() { return /* reexport */ switchAll["a" /* switchAll */]; });
__webpack_require__.d(__webpack_exports__, "switchMap", function() { return /* reexport */ switchMap["a" /* switchMap */]; });
__webpack_require__.d(__webpack_exports__, "switchMapTo", function() { return /* reexport */ switchMapTo["a" /* switchMapTo */]; });
__webpack_require__.d(__webpack_exports__, "switchScan", function() { return /* reexport */ switchScan["a" /* switchScan */]; });
__webpack_require__.d(__webpack_exports__, "take", function() { return /* reexport */ take["a" /* take */]; });
__webpack_require__.d(__webpack_exports__, "takeLast", function() { return /* reexport */ takeLast["a" /* takeLast */]; });
__webpack_require__.d(__webpack_exports__, "takeUntil", function() { return /* reexport */ takeUntil["a" /* takeUntil */]; });
__webpack_require__.d(__webpack_exports__, "takeWhile", function() { return /* reexport */ takeWhile["a" /* takeWhile */]; });
__webpack_require__.d(__webpack_exports__, "tap", function() { return /* reexport */ tap["a" /* tap */]; });
__webpack_require__.d(__webpack_exports__, "throttle", function() { return /* reexport */ throttle["b" /* throttle */]; });
__webpack_require__.d(__webpack_exports__, "throttleTime", function() { return /* reexport */ throttleTime["a" /* throttleTime */]; });
__webpack_require__.d(__webpack_exports__, "throwIfEmpty", function() { return /* reexport */ throwIfEmpty["a" /* throwIfEmpty */]; });
__webpack_require__.d(__webpack_exports__, "timeInterval", function() { return /* reexport */ timeInterval["a" /* timeInterval */]; });
__webpack_require__.d(__webpack_exports__, "timeout", function() { return /* reexport */ timeout["b" /* timeout */]; });
__webpack_require__.d(__webpack_exports__, "timeoutWith", function() { return /* reexport */ timeoutWith["a" /* timeoutWith */]; });
__webpack_require__.d(__webpack_exports__, "timestamp", function() { return /* reexport */ timestamp["a" /* timestamp */]; });
__webpack_require__.d(__webpack_exports__, "toArray", function() { return /* reexport */ toArray["a" /* toArray */]; });
__webpack_require__.d(__webpack_exports__, "window", function() { return /* reexport */ operators_window["a" /* window */]; });
__webpack_require__.d(__webpack_exports__, "windowCount", function() { return /* reexport */ windowCount["a" /* windowCount */]; });
__webpack_require__.d(__webpack_exports__, "windowTime", function() { return /* reexport */ windowTime["a" /* windowTime */]; });
__webpack_require__.d(__webpack_exports__, "windowToggle", function() { return /* reexport */ windowToggle["a" /* windowToggle */]; });
__webpack_require__.d(__webpack_exports__, "windowWhen", function() { return /* reexport */ windowWhen["a" /* windowWhen */]; });
__webpack_require__.d(__webpack_exports__, "withLatestFrom", function() { return /* reexport */ withLatestFrom["a" /* withLatestFrom */]; });
__webpack_require__.d(__webpack_exports__, "zip", function() { return /* reexport */ zip["a" /* zip */]; });
__webpack_require__.d(__webpack_exports__, "zipAll", function() { return /* reexport */ zipAll["a" /* zipAll */]; });
__webpack_require__.d(__webpack_exports__, "zipWith", function() { return /* reexport */ zipWith["a" /* zipWith */]; });

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/audit.js
var audit = __webpack_require__(64);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/auditTime.js
var auditTime = __webpack_require__(95);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/buffer.js
var buffer = __webpack_require__(96);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/bufferCount.js
var bufferCount = __webpack_require__(97);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/bufferTime.js
var bufferTime = __webpack_require__(98);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/bufferToggle.js
var bufferToggle = __webpack_require__(99);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/bufferWhen.js
var bufferWhen = __webpack_require__(100);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/catchError.js
var catchError = __webpack_require__(101);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/combineAll.js
var combineAll = __webpack_require__(102);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/combineLatestAll.js
var combineLatestAll = __webpack_require__(65);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/combineLatest.js
var combineLatest = __webpack_require__(178);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/combineLatestWith.js
var combineLatestWith = __webpack_require__(103);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/concat.js
var concat = __webpack_require__(179);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/concatAll.js
var concatAll = __webpack_require__(49);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/concatMap.js
var concatMap = __webpack_require__(57);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/concatMapTo.js
var concatMapTo = __webpack_require__(104);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/concatWith.js
var concatWith = __webpack_require__(105);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/connect.js + 1 modules
var connect = __webpack_require__(52);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/count.js
var count = __webpack_require__(106);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/debounce.js
var debounce = __webpack_require__(107);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/debounceTime.js
var debounceTime = __webpack_require__(108);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/defaultIfEmpty.js
var defaultIfEmpty = __webpack_require__(37);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/delay.js
var delay = __webpack_require__(109);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/delayWhen.js
var delayWhen = __webpack_require__(67);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/dematerialize.js
var dematerialize = __webpack_require__(110);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/distinct.js
var distinct = __webpack_require__(111);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/distinctUntilChanged.js
var distinctUntilChanged = __webpack_require__(70);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/distinctUntilKeyChanged.js
var distinctUntilKeyChanged = __webpack_require__(112);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/elementAt.js
var elementAt = __webpack_require__(113);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/endWith.js
var endWith = __webpack_require__(114);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/every.js
var every = __webpack_require__(115);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/exhaust.js
var exhaust = __webpack_require__(116);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/exhaustAll.js
var exhaustAll = __webpack_require__(71);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/exhaustMap.js
var exhaustMap = __webpack_require__(117);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/expand.js
var expand = __webpack_require__(118);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/filter.js
var filter = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/finalize.js
var finalize = __webpack_require__(119);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/find.js
var find = __webpack_require__(72);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/findIndex.js
var findIndex = __webpack_require__(120);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/first.js
var first = __webpack_require__(121);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/groupBy.js
var groupBy = __webpack_require__(122);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/ignoreElements.js
var ignoreElements = __webpack_require__(68);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/isEmpty.js
var isEmpty = __webpack_require__(123);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/last.js
var last = __webpack_require__(124);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/map.js
var map = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/mapTo.js
var mapTo = __webpack_require__(69);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/materialize.js
var materialize = __webpack_require__(125);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/max.js
var max = __webpack_require__(126);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/merge.js
var merge = __webpack_require__(180);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/mergeAll.js
var mergeAll = __webpack_require__(36);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/flatMap.js
var flatMap = __webpack_require__(127);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js
var mergeMap = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/mergeMapTo.js
var mergeMapTo = __webpack_require__(128);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/mergeScan.js
var mergeScan = __webpack_require__(129);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/mergeWith.js
var mergeWith = __webpack_require__(130);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/min.js
var min = __webpack_require__(131);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/multicast.js
var multicast = __webpack_require__(50);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/observeOn.js
var observeOn = __webpack_require__(63);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/onErrorResumeNext.js
var onErrorResumeNext = __webpack_require__(176);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/pairwise.js
var pairwise = __webpack_require__(132);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/util/not.js
var not = __webpack_require__(196);

// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/partition.js


function partition(predicate, thisArg) {
    return function (source) {
        return [Object(filter["a" /* filter */])(predicate, thisArg)(source), Object(filter["a" /* filter */])(Object(not["a" /* not */])(predicate, thisArg))(source)];
    };
}
//# sourceMappingURL=partition.js.map
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/pluck.js
var pluck = __webpack_require__(133);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/publish.js
var publish = __webpack_require__(134);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/publishBehavior.js
var publishBehavior = __webpack_require__(135);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/publishLast.js
var publishLast = __webpack_require__(136);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/publishReplay.js
var publishReplay = __webpack_require__(137);

// EXTERNAL MODULE: ./node_modules/rxjs/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/util/argsOrArgArray.js
var argsOrArgArray = __webpack_require__(24);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/raceWith.js
var raceWith = __webpack_require__(74);

// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/race.js



function race() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return raceWith["a" /* raceWith */].apply(void 0, Object(tslib_es6["h" /* __spreadArray */])([], Object(tslib_es6["g" /* __read */])(Object(argsOrArgArray["a" /* argsOrArgArray */])(args))));
}
//# sourceMappingURL=race.js.map
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/reduce.js
var reduce = __webpack_require__(29);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/repeat.js
var repeat = __webpack_require__(138);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/repeatWhen.js
var repeatWhen = __webpack_require__(139);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/retry.js
var retry = __webpack_require__(140);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/retryWhen.js
var retryWhen = __webpack_require__(141);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/refCount.js
var refCount = __webpack_require__(61);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/sample.js
var sample = __webpack_require__(75);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/sampleTime.js
var sampleTime = __webpack_require__(142);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/scan.js
var scan = __webpack_require__(76);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/sequenceEqual.js
var sequenceEqual = __webpack_require__(143);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/share.js
var share = __webpack_require__(77);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/shareReplay.js
var shareReplay = __webpack_require__(144);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/single.js
var single = __webpack_require__(145);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/skip.js
var skip = __webpack_require__(146);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/skipLast.js
var skipLast = __webpack_require__(147);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/skipUntil.js
var skipUntil = __webpack_require__(148);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/skipWhile.js
var skipWhile = __webpack_require__(149);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/startWith.js
var startWith = __webpack_require__(150);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/subscribeOn.js
var subscribeOn = __webpack_require__(62);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/switchAll.js
var switchAll = __webpack_require__(151);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/switchMap.js
var switchMap = __webpack_require__(33);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/switchMapTo.js
var switchMapTo = __webpack_require__(152);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/switchScan.js
var switchScan = __webpack_require__(153);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/take.js
var take = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/takeLast.js
var takeLast = __webpack_require__(73);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js
var takeUntil = __webpack_require__(154);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/takeWhile.js
var takeWhile = __webpack_require__(155);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/tap.js
var tap = __webpack_require__(156);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/throttle.js
var throttle = __webpack_require__(58);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/throttleTime.js
var throttleTime = __webpack_require__(157);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/throwIfEmpty.js
var throwIfEmpty = __webpack_require__(38);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/timeInterval.js
var timeInterval = __webpack_require__(158);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/timeout.js
var timeout = __webpack_require__(48);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/timeoutWith.js
var timeoutWith = __webpack_require__(159);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/timestamp.js
var timestamp = __webpack_require__(160);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/toArray.js
var toArray = __webpack_require__(66);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/window.js
var operators_window = __webpack_require__(161);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/windowCount.js
var windowCount = __webpack_require__(162);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/windowTime.js
var windowTime = __webpack_require__(163);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/windowToggle.js
var windowToggle = __webpack_require__(164);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/windowWhen.js
var windowWhen = __webpack_require__(165);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/withLatestFrom.js
var withLatestFrom = __webpack_require__(166);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/zip.js
var zip = __webpack_require__(181);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/zipAll.js
var zipAll = __webpack_require__(167);

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/zipWith.js
var zipWith = __webpack_require__(168);

// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/operators/index.js

















































































































//# sourceMappingURL=index.js.map

/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 218 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createPromiseWithResolver; });
const doNothing = () => undefined;
/**
 * Creates a new promise and exposes its resolver function.
 * Use with care!
 */
function createPromiseWithResolver() {
    let alreadyResolved = false;
    let resolvedTo;
    let resolver = doNothing;
    const promise = new Promise(resolve => {
        if (alreadyResolved) {
            resolve(resolvedTo);
        }
        else {
            resolver = resolve;
        }
    });
    const exposedResolver = (value) => {
        alreadyResolved = true;
        resolvedTo = value;
        resolver();
    };
    return [promise, exposedResolver];
}


/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const symbolObservable = __webpack_require__(239).default;

module.exports = value => Boolean(value && value[symbolObservable] && value === value[symbolObservable]());


/***/ }),
/* 220 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return symbolObservablePonyfill; });
function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};


/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;

  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
    r = Reflect.decorate(decorators, target, key, desc);
  } else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) {
      r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }
  }

  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = this && this.__metadata || function (k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
    return Reflect.metadata(k, v);
  }
};

var __param = this && this.__param || function (paramIndex, decorator) {
  return function (target, key) {
    decorator(target, key, paramIndex);
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(223);

var typescript_ioc_1 = __webpack_require__(32);

var client_player_manager_1 = __webpack_require__(230);

var client_network_manager_1 = __webpack_require__(265);

var client_store_manager_1 = __webpack_require__(266);

var ClientMain = function () {
  function ClientMain(player, network, store) {
    this.player = player;
    this.network = network;
    this.store = store;
    console.log('Client started.');
  }

  var _a, _b, _c;

  ClientMain = __decorate([typescript_ioc_1.OnlyInstantiableByContainer, __param(0, typescript_ioc_1.Inject), __param(1, typescript_ioc_1.Inject), __param(2, typescript_ioc_1.Inject), __metadata("design:paramtypes", [typeof (_a = typeof client_player_manager_1.ClientPlayerManager !== "undefined" && client_player_manager_1.ClientPlayerManager) === "function" ? _a : Object, typeof (_b = typeof client_network_manager_1.ClientNetworkManager !== "undefined" && client_network_manager_1.ClientNetworkManager) === "function" ? _b : Object, typeof (_c = typeof client_store_manager_1.ClientStoreManager !== "undefined" && client_store_manager_1.ClientStoreManager) === "function" ? _c : Object])], ClientMain);
  return ClientMain;
}();

typescript_ioc_1.Container.get(ClientMain);

/***/ }),
/* 222 */,
/* 223 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(216);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(201);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].locals || {});

/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const injection_handler_1 = __webpack_require__(199);
const model_1 = __webpack_require__(94);
const get = __webpack_require__(225);
const set = __webpack_require__(226);
class IoCBindConfig {
    constructor(source, instanceFactory, valueFactory) {
        this.source = source;
        this.instanceFactory = instanceFactory;
        this.valueFactory = valueFactory;
    }
    to(target) {
        injection_handler_1.InjectorHandler.checkType(target);
        const targetSource = injection_handler_1.InjectorHandler.getConstructorFromType(target);
        this.targetSource = targetSource;
        if (this.source === targetSource) {
            this.factory((context) => {
                const params = this.getParameters(context);
                const constructor = this.decoratedConstructor || target;
                return (params ? new constructor(...params) : new constructor());
            });
        }
        else {
            this.factory((context) => {
                return this.instanceFactory(target, context);
            });
        }
        return this;
    }
    factory(factory) {
        this.iocFactory = (context) => {
            const blocked = injection_handler_1.InjectorHandler.unblockInstantiation();
            const constructor = this.decoratedConstructor || this.targetSource || this.source;
            injection_handler_1.InjectorHandler.injectContext(constructor, context);
            const instance = factory(context);
            injection_handler_1.InjectorHandler.removeContext(constructor);
            injection_handler_1.InjectorHandler.injectContext(instance, context);
            injection_handler_1.InjectorHandler.blockInstantiation(blocked);
            return instance;
        };
        if (this.iocScope) {
            this.iocScope.reset(this.source);
        }
        return this;
    }
    scope(scope) {
        if (this.iocScope && this.iocScope !== scope) {
            this.iocScope.finish(this.source);
        }
        this.iocScope = scope;
        if (this.iocScope) {
            this.iocScope.init(this.source);
        }
        return this;
    }
    withParams(...paramTypes) {
        this.paramTypes = paramTypes;
        return this;
    }
    instrumentConstructor() {
        const newConstructor = injection_handler_1.InjectorHandler.instrumentConstructor(this.source);
        this.decoratedConstructor = newConstructor;
        this.source.constructor = newConstructor;
        return this;
    }
    getInstance(context) {
        if (!this.iocScope) {
            this.scope(model_1.Scope.Local);
        }
        return this.iocScope.resolve(this.iocFactory, this.source, context);
    }
    clone() {
        const result = new IoCBindConfig(this.source, this.instanceFactory, this.valueFactory);
        result.iocFactory = this.iocFactory;
        result.iocScope = this.iocScope;
        result.targetSource = this.targetSource;
        result.paramTypes = this.paramTypes;
        result.decoratedConstructor = this.decoratedConstructor;
        return result;
    }
    getParameters(context) {
        if (this.paramTypes) {
            return this.paramTypes.map(paramType => {
                if (typeof paramType === 'string' || paramType instanceof String) {
                    return this.valueFactory(paramType);
                }
                return this.instanceFactory(paramType, context);
            });
        }
        return null;
    }
}
exports.IoCBindConfig = IoCBindConfig;
class IoCBindValueConfig {
    constructor(name) {
        this.name = name;
    }
    to(value) {
        if (this.path) {
            this.value = this.value || {};
            set(this.value, this.path, value);
        }
        else {
            this.value = value;
        }
        return this;
    }
    getValue() {
        if (this.path) {
            return get(this.value, this.path);
        }
        return this.value;
    }
    clone() {
        const result = new IoCBindValueConfig(this.name);
        result.path = this.path;
        result.value = this.value;
        return result;
    }
}
exports.IoCBindValueConfig = IoCBindValueConfig;
class PropertyPath {
    constructor(name, path) {
        this.name = name;
        this.path = path;
    }
    static parse(value) {
        const index = value.indexOf('.');
        if (index < 0) {
            return new PropertyPath(value);
        }
        else if (index === 0) {
            throw new TypeError(`Invalid value [${value}] passed to Container.bindName`);
        }
        else if (index + 1 < value.length) {
            return new PropertyPath(value.substring(0, index), value.substring(index + 1));
        }
        return new PropertyPath(value.substring(0, index));
    }
}
exports.PropertyPath = PropertyPath;
//# sourceMappingURL=container-binding-config.js.map

/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    symbolTag = '[object Symbol]';

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/,
    reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Symbol = root.Symbol,
    splice = arrayProto.splice;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = isKey(path, object) ? [path] : castPath(path);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value) {
  return isArray(value) ? value : stringToPath(value);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoize(function(string) {
  string = toString(string);

  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Assign cache to `_.memoize`.
memoize.Cache = MapCache;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(89)))

/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    symbolTag = '[object Symbol]';

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/,
    reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Symbol = root.Symbol,
    splice = arrayProto.splice;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    object[key] = value;
  }
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }
  path = isKey(path, object) ? [path] : castPath(path);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = toKey(path[index]),
        newValue = value;

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject(objValue)
          ? objValue
          : (isIndex(path[index + 1]) ? [] : {});
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value) {
  return isArray(value) ? value : stringToPath(value);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoize(function(string) {
  string = toString(string);

  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Assign cache to `_.memoize`.
memoize.Cache = MapCache;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
 * it's created. Arrays are created for missing index properties while objects
 * are created for all other missing properties. Use `_.setWith` to customize
 * `path` creation.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.set(object, 'a[0].b.c', 4);
 * console.log(object.a[0].b.c);
 * // => 4
 *
 * _.set(object, ['x', '0', 'y', 'z'], 5);
 * console.log(object.x[0].y.z);
 * // => 5
 */
function set(object, path, value) {
  return object == null ? object : baseSet(object, path, value);
}

module.exports = set;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(89)))

/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class ContainerNamespaces {
    constructor() {
        this.defaultNamespace = new NamespaceBindings(null);
        this.namespaces = new Map();
    }
    get(type) {
        let result;
        if (this.currentNamespace) {
            result = this.currentNamespace.get(type);
            if (result) {
                return result;
            }
        }
        return this.defaultNamespace.get(type);
    }
    set(type, bindConfig) {
        (this.currentNamespace || this.defaultNamespace).set(type, bindConfig);
    }
    getValue(name) {
        let result;
        if (this.currentNamespace) {
            result = this.currentNamespace.getValue(name);
            if (result) {
                return result;
            }
        }
        return this.defaultNamespace.getValue(name);
    }
    setValue(name, bindConfig) {
        (this.currentNamespace || this.defaultNamespace).setValue(name, bindConfig);
    }
    selectNamespace(name) {
        if (name) {
            let namespace = this.namespaces.get(name);
            if (!namespace) {
                namespace = new NamespaceBindings(name);
                this.namespaces.set(name, namespace);
            }
            this.currentNamespace = namespace;
        }
        else {
            this.currentNamespace = null;
        }
    }
    removeNamespace(name) {
        const namespace = this.namespaces.get(name);
        if (namespace) {
            if (this.currentNamespace && (namespace.name === this.currentNamespace.name)) {
                this.currentNamespace = null;
            }
            namespace.clear();
            this.namespaces.delete(name);
        }
    }
    selectedNamespace() {
        return (this.currentNamespace ? this.currentNamespace.name : null);
    }
}
exports.ContainerNamespaces = ContainerNamespaces;
class NamespaceBindings {
    constructor(name) {
        this.bindings = new Map();
        this.values = new Map();
        this.name = name;
    }
    get(type) {
        return this.bindings.get(type);
    }
    set(type, bindConfig) {
        bindConfig.namespace = this.name;
        this.bindings.set(type, bindConfig);
    }
    getValue(name) {
        return this.values.get(name);
    }
    setValue(name, bindConfig) {
        bindConfig.namespace = this.name;
        this.values.set(name, bindConfig);
    }
    clear() {
        this.bindings.clear();
        this.values.clear();
    }
}
//# sourceMappingURL=container-namespaces.js.map

/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const injection_handler_1 = __webpack_require__(199);
const model_1 = __webpack_require__(94);
/**
 * Default [[Scope]] that always create a new instace for any dependency resolution request
 */
class LocalScope extends model_1.Scope {
    resolve(factory, _source, context) {
        return factory(context);
    }
}
exports.LocalScope = LocalScope;
/**
 * Scope that create only a single instace to handle all dependency resolution requests.
 */
class SingletonScope extends model_1.Scope {
    resolve(factory, source, context) {
        let instance = SingletonScope.instances.get(source);
        if (!instance) {
            instance = factory(context);
            SingletonScope.instances.set(source, instance);
        }
        return instance;
    }
    reset(source) {
        SingletonScope.instances.delete(injection_handler_1.InjectorHandler.getConstructorFromType(source));
    }
    init(source) {
        this.reset(source);
    }
    finish(source) {
        this.reset(source);
    }
}
exports.SingletonScope = SingletonScope;
SingletonScope.instances = new Map();
class RequestScope extends model_1.Scope {
    resolve(factory, source, context) {
        this.ensureContext(context);
        return context.build(source, factory);
    }
    ensureContext(context) {
        if (!context) {
            throw new TypeError('IoC Container can not handle this request. When using @InRequestScope ' +
                'in any dependent type, you should be askking to Container to create the instances through Container.get' +
                ' and not calling the type constructor directly.');
        }
    }
}
exports.RequestScope = RequestScope;
//# sourceMappingURL=scopes.js.map

/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(203);
const container_1 = __webpack_require__(204);
const model_1 = __webpack_require__(94);
/**
 * A decorator to tell the container that this class should be handled by the Request [[Scope]].
 *
 * ```
 * @ RequestScope
 * class PersonDAO {
 *
 * }
 * ```
 *
 * Is the same that use:
 *
 * ```
 * Container.bind(PersonDAO).scope(Scope.Request)
 * ```
 */
function InRequestScope(target) {
    container_1.IoCContainer.bind(target).scope(model_1.Scope.Request);
}
exports.InRequestScope = InRequestScope;
/**
 * A decorator to tell the container that this class should be handled by the Singleton [[Scope]].
 *
 * ```
 * @ Singleton
 * class PersonDAO {
 *
 * }
 * ```
 *
 * Is the same that use:
 *
 * ```
 * Container.bind(PersonDAO).scope(Scope.Singleton)
 * ```
 */
function Singleton(target) {
    container_1.IoCContainer.bind(target).scope(model_1.Scope.Singleton);
}
exports.Singleton = Singleton;
/**
 * A decorator to tell the container that this class should has its instantiation always handled by the Container.
 *
 * The decorated class will have its constructor overriden to always delegate its instantiation to the IoC Container.
 * So, if you write:
 *
 * ```
 * @ OnlyInstantiableByContainer
 * class PersonService {
 *   @ Inject
 *   personDAO: PersonDAO;
 * }
 * ```
 *
 * You will only be able to create instances of PersonService through the Container.
 *
 * ```
 * let PersonService = new PersonService(); // will thrown a TypeError exception
 * ```
 */
function OnlyInstantiableByContainer(target) {
    return container_1.IoCContainer.bind(target).instrumentConstructor().decoratedConstructor;
}
exports.OnlyInstantiableByContainer = OnlyInstantiableByContainer;
/**
 * A decorator to tell the container that this class should be handled by the provided [[Scope]].
 * For example:
 *
 * ```
 * class MyScope extends Scope {
 *   resolve(iocProvider:Provider, source:Function) {
 *     console.log('created by my custom scope.')
 *     return iocProvider.get();
 *   }
 * }
 * @ Scoped(new MyScope())
 * class PersonDAO {
 * }
 * ```
 *
 * Is the same that use:
 *
 * ```
 * Container.bind(PersonDAO).scope(new MyScope());
 * ```
 * @param scope The scope that will handle instantiations for this class.
 */
function Scoped(scope) {
    return (target) => {
        container_1.IoCContainer.bind(target).scope(scope);
    };
}
exports.Scoped = Scoped;
/**
 * A decorator to tell the container that this class should instantiated by the given [[ObjectFactory]].
 * For example:
 *
 * ```
 * @ Factory(() => new PersonDAO())
 * class PersonDAO {
 * }
 * ```
 *
 * Is the same that use:
 *
 * ```
 * Container.bind(PersonDAO).factory(() => new PersonDAO());
 * ```
 * @param factory The factory that will handle instantiations for this class.
 */
function Factory(factory) {
    return (target) => {
        container_1.IoCContainer.bind(target).factory(factory);
    };
}
exports.Factory = Factory;
/**
 * A decorator to request from Container that it resolve the annotated property dependency.
 * For example:
 *
 * ```
 * class PersonService {
 *    constructor (@ Inject creationTime: Date) {
 *       this.creationTime = creationTime;
 *    }
 *    @ Inject
 *    personDAO: PersonDAO;
 *
 *    creationTime: Date;
 * }
 *
 * ```
 *
 * When you call:
 *
 * ```
 * let personService: PersonService = Container.get(PersonService);
 * // The properties are all defined, retrieved from the IoC Container
 * console.log('PersonService.creationTime: ' + personService.creationTime);
 * console.log('PersonService.personDAO: ' + personService.personDAO);
 * ```
 */
function Inject(...args) {
    if (args.length === 2 || (args.length === 3 && typeof args[2] === 'undefined')) {
        return InjectPropertyDecorator.apply(this, args);
    }
    else if (args.length === 3 && typeof args[2] === 'number') {
        return InjectParamDecorator.apply(this, args);
    }
    throw new TypeError('Invalid @Inject Decorator declaration.');
}
exports.Inject = Inject;
/**
 * A decorator to request from Container that it resolve the annotated property dependency
 * with a constant value.
 * For example:
 *
 * ```
 * inteface Config {
 *   dependencyURL: string;
 *   port: number;
 * }
 * class PersonService {
 *    @ InjectValue('config')
 *    config: Config;
 * }
 * ```
 *
 * When you call:
 *
 * ```
 * let personService: PersonService = Container.get(PersonService);
 * // The properties are all defined, retrieved from the IoC Container
 * console.log('PersonService.config.port: ' + personService.config.port);
 * console.log('PersonService.config.dependencyURL: ' + personService.config.dependencyURL);
 * ```
 */
function InjectValue(value) {
    return (...args) => {
        if (args.length === 2 || (args.length === 3 && typeof args[2] === 'undefined')) {
            const params = [...args, value].filter(v => v ? true : false);
            return InjectValuePropertyDecorator.apply(this, params);
        }
        else if (args.length === 3 && typeof args[2] === 'number') {
            return InjectValueParamDecorator.apply(this, [...args, value]);
        }
        throw new TypeError('Invalid @InjectValue Decorator declaration.');
    };
}
exports.InjectValue = InjectValue;
/**
 * Decorator processor for [[Inject]] decorator on properties
 */
function InjectPropertyDecorator(target, key) {
    let t = Reflect.getMetadata('design:type', target, key);
    if (!t) {
        // Needed to support react native inheritance
        t = Reflect.getMetadata('design:type', target.constructor, key);
    }
    container_1.IoCContainer.injectProperty(target.constructor, key, t);
}
/**
 * Decorator processor for [[Inject]] decorator on constructor parameters
 */
function InjectParamDecorator(target, propertyKey, parameterIndex) {
    if (!propertyKey) { // only intercept constructor parameters
        const config = container_1.IoCContainer.bind(target);
        config.paramTypes = config.paramTypes || [];
        const paramTypes = Reflect.getMetadata('design:paramtypes', target);
        config.paramTypes.unshift(paramTypes[parameterIndex]);
    }
}
/**
 * Decorator processor for [[Inject]] decorator on properties
 */
function InjectValuePropertyDecorator(target, key, value) {
    container_1.IoCContainer.injectValueProperty(target.constructor, key, value);
}
/**
 * Decorator processor for [[Inject]] decorator on constructor parameters
 */
function InjectValueParamDecorator(target, propertyKey, _parameterIndex, value) {
    if (!propertyKey) { // only intercept constructor parameters
        const config = container_1.IoCContainer.bind(target);
        config.paramTypes = config.paramTypes || [];
        config.paramTypes.unshift(value);
    }
}
//# sourceMappingURL=decorators.js.map

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;

  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
    r = Reflect.decorate(decorators, target, key, desc);
  } else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) {
      r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }
  }

  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = this && this.__metadata || function (k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
    return Reflect.metadata(k, v);
  }
};

var __param = this && this.__param || function (paramIndex, decorator) {
  return function (target, key) {
    decorator(target, key, paramIndex);
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClientPlayerManager = void 0;

var typescript_ioc_1 = __webpack_require__(32);

var client_player_service_1 = __webpack_require__(205);

var client_network_service_1 = __webpack_require__(200);

var ClientPlayerManager = function () {
  function ClientPlayerManager(service, network) {
    var _this = this;

    this.service = service;
    this.network = network;
    network.loginOk$.subscribe(function (response) {
      _this.service.setClientPlayer(response.player);
    });
  }

  var _a, _b;

  ClientPlayerManager = __decorate([typescript_ioc_1.Singleton, __param(0, typescript_ioc_1.Inject), __param(1, typescript_ioc_1.Inject), __metadata("design:paramtypes", [typeof (_a = typeof client_player_service_1.ClientPlayerService !== "undefined" && client_player_service_1.ClientPlayerService) === "function" ? _a : Object, typeof (_b = typeof client_network_service_1.ClientNetworkService !== "undefined" && client_network_service_1.ClientNetworkService) === "function" ? _b : Object])], ClientPlayerManager);
  return ClientPlayerManager;
}();

exports.ClientPlayerManager = ClientPlayerManager;

/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;

  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
    r = Reflect.decorate(decorators, target, key, desc);
  } else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) {
      r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }
  }

  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClientPlayerWrapper = void 0;

var typescript_ioc_1 = __webpack_require__(32);

var ClientPlayerWrapper = function () {
  function ClientPlayerWrapper() {}

  ClientPlayerWrapper = __decorate([typescript_ioc_1.Singleton], ClientPlayerWrapper);
  return ClientPlayerWrapper;
}();

exports.ClientPlayerWrapper = ClientPlayerWrapper;

/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;

  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
    r = Reflect.decorate(decorators, target, key, desc);
  } else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) {
      r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }
  }

  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SharedPlayerService = void 0;

var typescript_ioc_1 = __webpack_require__(32);

var SharedPlayerService = function () {
  function SharedPlayerService() {}

  SharedPlayerService = __decorate([typescript_ioc_1.Singleton], SharedPlayerService);
  return SharedPlayerService;
}();

exports.SharedPlayerService = SharedPlayerService;

/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Store = void 0;

var rxjs_1 = __webpack_require__(46);

var store_utils_1 = __webpack_require__(234);

var Store = function () {
  function Store() {
    this.entities = new Map();
    this.addedSubject = new rxjs_1.Subject();
    this.removedSubject = new rxjs_1.Subject();
    this.updatedSubject = new rxjs_1.Subject();
    this.committedSubject = new rxjs_1.Subject();
    this.changedSubject = new rxjs_1.Subject();
    this.added$ = this.addedSubject.asObservable();
    this.committed$ = this.committedSubject.asObservable();
    this.updated$ = this.updatedSubject.asObservable();
    this.changed$ = this.changedSubject.asObservable();
    this.removed$ = this.removedSubject.asObservable();
  }

  Store.prototype.onAdded = function (id) {
    return (0, store_utils_1.filterById)(this.added$, id);
  };

  Store.prototype.onCommitted = function (id) {
    return (0, store_utils_1.filterById)(this.committed$, id);
  };

  Store.prototype.onUpdated = function (id) {
    return (0, store_utils_1.filterById)(this.updated$, id);
  };

  Store.prototype.onChanged = function (id) {
    return (0, store_utils_1.filterById)(this.changed$, id);
  };

  Store.prototype.onRemoved = function (id) {
    return (0, store_utils_1.filterById)(this.removed$, id);
  };

  Store.prototype.update = function (id, value) {
    var entity = {
      id: id,
      value: value
    };
    this.addOrChangeEntity(id, entity);
    this.updatedSubject.next(entity);
  };

  Store.prototype.commit = function (id, value) {
    var entity = {
      id: id,
      value: value
    };
    this.addOrChangeEntity(id, entity);
    this.committedSubject.next(entity);
  };

  Store.prototype.remove = function (id) {
    if (this.entities.has(id)) {
      this.entities.delete(id);
      var entity = {
        id: id,
        value: null
      };
      this.removedSubject.next(entity);
      this.committedSubject.next(entity);
    }
  };

  Store.prototype.get = function (id) {
    return this.entities.get(id);
  };

  Store.prototype.getAll = function () {
    return Object.fromEntries(this.entities.entries());
  };

  Store.prototype.clearAll = function () {
    this.entities.clear();
  };

  Store.prototype.getSize = function () {
    return this.entities.size;
  };

  Store.prototype.addOrChangeEntity = function (id, entity) {
    var hadEntity = this.entities.has(id);
    this.entities.set(id, entity.value);

    if (!hadEntity) {
      this.addedSubject.next(entity);
    }

    this.changedSubject.next(entity);
  };

  return Store;
}();

exports.Store = Store;

/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filterById = void 0;

var rxjs_1 = __webpack_require__(46);

var operators_1 = __webpack_require__(215);

var filterById = function (source, id) {
  return source.pipe((0, operators_1.filter)(function (entity) {
    return entity.id === id;
  }), (0, rxjs_1.map)(function (entity) {
    return entity.value;
  }), (0, operators_1.share)());
};

exports.filterById = filterById;

/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;

  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
    r = Reflect.decorate(decorators, target, key, desc);
  } else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) {
      r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }
  }

  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = this && this.__metadata || function (k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
    return Reflect.metadata(k, v);
  }
};

var __param = this && this.__param || function (paramIndex, decorator) {
  return function (target, key) {
    decorator(target, key, paramIndex);
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClientNetworkBufferedWrapper = void 0;

var typescript_ioc_1 = __webpack_require__(32);

var client_network_thread_wrapper_1 = __webpack_require__(236);

var rxjs_1 = __webpack_require__(46);

var client_config_1 = __webpack_require__(213);

var time_map_buffer_1 = __webpack_require__(261);

var client_network_buffered_wrapper_utils_1 = __webpack_require__(263);

var ClientNetworkBufferedWrapper = function () {
  function ClientNetworkBufferedWrapper(thread, buffer) {
    var _this = this;

    this.thread = thread;
    this.buffer = buffer;
    this.bufferTimerMs = 1000 / client_config_1.ClientConfig.NETWORK_TICK_RATE;
    this.connected$ = thread.connected$;
    this.disconnected$ = thread.disconnected$;
    this.data$ = thread.data$.pipe((0, rxjs_1.mergeMap)(function (data) {
      return data;
    }));
    this.buffer.data$.pipe((0, rxjs_1.map)(function (data) {
      return (0, client_network_buffered_wrapper_utils_1.mapNetworkMessages)(data);
    })).subscribe(function (messages) {
      return _this.sendMessagesToThread(messages);
    });
    this.buffer.setFrameLengthMs(this.bufferTimerMs);
    this.buffer.setDefaultValue({});
  }

  ClientNetworkBufferedWrapper.prototype.isConnected = function () {
    return this.thread.isConnected();
  };

  ClientNetworkBufferedWrapper.prototype.connect = function (host) {
    this.thread.connect(host);
  };

  ClientNetworkBufferedWrapper.prototype.disconnect = function () {
    this.thread.disconnect();
  };

  ClientNetworkBufferedWrapper.prototype.send = function (event, message) {
    if (message === void 0) {
      message = {};
    }

    this.buffer.add(event, message);
  };

  ClientNetworkBufferedWrapper.prototype.sendMessagesToThread = function (messages) {
    if (this.thread.isConnected()) {
      this.thread.send(messages);
    }
  };

  var _a, _b;

  ClientNetworkBufferedWrapper = __decorate([typescript_ioc_1.Singleton, __param(0, typescript_ioc_1.Inject), __param(1, typescript_ioc_1.Inject), __metadata("design:paramtypes", [typeof (_a = typeof client_network_thread_wrapper_1.ClientNetworkThreadWrapper !== "undefined" && client_network_thread_wrapper_1.ClientNetworkThreadWrapper) === "function" ? _a : Object, typeof (_b = typeof time_map_buffer_1.TimeMapBuffer !== "undefined" && time_map_buffer_1.TimeMapBuffer) === "function" ? _b : Object])], ClientNetworkBufferedWrapper);
  return ClientNetworkBufferedWrapper;
}();

exports.ClientNetworkBufferedWrapper = ClientNetworkBufferedWrapper;

/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;

  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
    r = Reflect.decorate(decorators, target, key, desc);
  } else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) {
      r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }
  }

  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = this && this.__metadata || function (k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
    return Reflect.metadata(k, v);
  }
};

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) {
        throw t[1];
      }

      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) {
      throw new TypeError("Generator is already executing.");
    }

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) {
          return t;
        }

        if (y = 0, t) {
          op = [op[0] & 2, t.value];
        }

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) {
              _.ops.pop();
            }

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) {
      throw op[1];
    }

    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClientNetworkThreadWrapper = void 0;

var typescript_ioc_1 = __webpack_require__(32);

var rxjs_1 = __webpack_require__(46);

var threads_1 = __webpack_require__(268);

__webpack_require__(241);

var worker_url_utils_1 = __webpack_require__(256);

var ClientNetworkThreadWrapper = function () {
  function ClientNetworkThreadWrapper() {
    this.connectedSubject = new rxjs_1.Subject();
    this.connected$ = this.connectedSubject.asObservable();
    this.disconnectedSubject = new rxjs_1.Subject();
    this.disconnected$ = this.disconnectedSubject.asObservable();
    this.dataSubject = new rxjs_1.Subject();
    this.data$ = this.dataSubject.asObservable();
    this.initializedSubject = new rxjs_1.ReplaySubject();
    this.initialized$ = this.initializedSubject.asObservable();
    this.initThread();
  }

  ClientNetworkThreadWrapper.prototype.initThread = function () {
    return __awaiter(this, void 0, Promise, function () {
      var _a;

      var _this = this;

      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            console.log('Network thread loading..');
            _a = this;
            return [4, (0, threads_1.spawn)(new threads_1.Worker(worker_url_utils_1.clientNetworkThreadUrl, {
              type: 'module'
            }))];

          case 1:
            _a.thread = _b.sent();
            this.thread.onConnected().subscribe(function () {
              return _this.connectedSubject.next();
            });
            this.thread.onDisconnected().subscribe(function () {
              return _this.disconnectedSubject.next();
            });
            this.thread.onData().subscribe(function (data) {
              return _this.dataSubject.next(data);
            });
            console.log('Network thread initialized');
            this.initializedSubject.next();
            return [2];
        }
      });
    });
  };

  ClientNetworkThreadWrapper.prototype.isConnected = function () {
    var _a, _b;

    return (_b = (_a = this.thread) === null || _a === void 0 ? void 0 : _a.isConnected()) !== null && _b !== void 0 ? _b : false;
  };

  ClientNetworkThreadWrapper.prototype.connect = function (host) {
    var _this = this;

    this.initialized$.subscribe(function () {
      var _a;

      (_a = _this.thread) === null || _a === void 0 ? void 0 : _a.connect(host);
    });
  };

  ClientNetworkThreadWrapper.prototype.disconnect = function () {
    var _a;

    (_a = this.thread) === null || _a === void 0 ? void 0 : _a.disconnect();
  };

  ClientNetworkThreadWrapper.prototype.send = function (data) {
    var _a;

    (_a = this.thread) === null || _a === void 0 ? void 0 : _a.send(data);
  };

  ClientNetworkThreadWrapper = __decorate([typescript_ioc_1.Singleton, __metadata("design:paramtypes", [])], ClientNetworkThreadWrapper);
  return ClientNetworkThreadWrapper;
}();

exports.ClientNetworkThreadWrapper = ClientNetworkThreadWrapper;

/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */

function setup(env) {
	createDebug.debug = createDebug;
	createDebug.default = createDebug;
	createDebug.coerce = coerce;
	createDebug.disable = disable;
	createDebug.enable = enable;
	createDebug.enabled = enabled;
	createDebug.humanize = __webpack_require__(238);
	createDebug.destroy = destroy;

	Object.keys(env).forEach(key => {
		createDebug[key] = env[key];
	});

	/**
	* The currently active debug mode names, and names to skip.
	*/

	createDebug.names = [];
	createDebug.skips = [];

	/**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/
	createDebug.formatters = {};

	/**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/
	function selectColor(namespace) {
		let hash = 0;

		for (let i = 0; i < namespace.length; i++) {
			hash = ((hash << 5) - hash) + namespace.charCodeAt(i);
			hash |= 0; // Convert to 32bit integer
		}

		return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
	}
	createDebug.selectColor = selectColor;

	/**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/
	function createDebug(namespace) {
		let prevTime;
		let enableOverride = null;
		let namespacesCache;
		let enabledCache;

		function debug(...args) {
			// Disabled?
			if (!debug.enabled) {
				return;
			}

			const self = debug;

			// Set `diff` timestamp
			const curr = Number(new Date());
			const ms = curr - (prevTime || curr);
			self.diff = ms;
			self.prev = prevTime;
			self.curr = curr;
			prevTime = curr;

			args[0] = createDebug.coerce(args[0]);

			if (typeof args[0] !== 'string') {
				// Anything else let's inspect with %O
				args.unshift('%O');
			}

			// Apply any `formatters` transformations
			let index = 0;
			args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
				// If we encounter an escaped % then don't increase the array index
				if (match === '%%') {
					return '%';
				}
				index++;
				const formatter = createDebug.formatters[format];
				if (typeof formatter === 'function') {
					const val = args[index];
					match = formatter.call(self, val);

					// Now we need to remove `args[index]` since it's inlined in the `format`
					args.splice(index, 1);
					index--;
				}
				return match;
			});

			// Apply env-specific formatting (colors, etc.)
			createDebug.formatArgs.call(self, args);

			const logFn = self.log || createDebug.log;
			logFn.apply(self, args);
		}

		debug.namespace = namespace;
		debug.useColors = createDebug.useColors();
		debug.color = createDebug.selectColor(namespace);
		debug.extend = extend;
		debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.

		Object.defineProperty(debug, 'enabled', {
			enumerable: true,
			configurable: false,
			get: () => {
				if (enableOverride !== null) {
					return enableOverride;
				}
				if (namespacesCache !== createDebug.namespaces) {
					namespacesCache = createDebug.namespaces;
					enabledCache = createDebug.enabled(namespace);
				}

				return enabledCache;
			},
			set: v => {
				enableOverride = v;
			}
		});

		// Env-specific initialization logic for debug instances
		if (typeof createDebug.init === 'function') {
			createDebug.init(debug);
		}

		return debug;
	}

	function extend(namespace, delimiter) {
		const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
		newDebug.log = this.log;
		return newDebug;
	}

	/**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/
	function enable(namespaces) {
		createDebug.save(namespaces);
		createDebug.namespaces = namespaces;

		createDebug.names = [];
		createDebug.skips = [];

		let i;
		const split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
		const len = split.length;

		for (i = 0; i < len; i++) {
			if (!split[i]) {
				// ignore empty strings
				continue;
			}

			namespaces = split[i].replace(/\*/g, '.*?');

			if (namespaces[0] === '-') {
				createDebug.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
			} else {
				createDebug.names.push(new RegExp('^' + namespaces + '$'));
			}
		}
	}

	/**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/
	function disable() {
		const namespaces = [
			...createDebug.names.map(toNamespace),
			...createDebug.skips.map(toNamespace).map(namespace => '-' + namespace)
		].join(',');
		createDebug.enable('');
		return namespaces;
	}

	/**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/
	function enabled(name) {
		if (name[name.length - 1] === '*') {
			return true;
		}

		let i;
		let len;

		for (i = 0, len = createDebug.skips.length; i < len; i++) {
			if (createDebug.skips[i].test(name)) {
				return false;
			}
		}

		for (i = 0, len = createDebug.names.length; i < len; i++) {
			if (createDebug.names[i].test(name)) {
				return true;
			}
		}

		return false;
	}

	/**
	* Convert regexp to namespace
	*
	* @param {RegExp} regxep
	* @return {String} namespace
	* @api private
	*/
	function toNamespace(regexp) {
		return regexp.toString()
			.substring(2, regexp.toString().length - 2)
			.replace(/\.\*\?$/, '*');
	}

	/**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/
	function coerce(val) {
		if (val instanceof Error) {
			return val.stack || val.message;
		}
		return val;
	}

	/**
	* XXX DO NOT USE. This is a temporary stub function.
	* XXX It WILL be removed in the next major release.
	*/
	function destroy() {
		console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
	}

	createDebug.enable(createDebug.load());

	return createDebug;
}

module.exports = setup;


/***/ }),
/* 238 */
/***/ (function(module, exports) {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isFinite(val)) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'weeks':
    case 'week':
    case 'w':
      return n * w;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }
  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }
  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }
  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }
  return ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}


/***/ }),
/* 239 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(220);
/* global window */


var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {}

var result = Object(_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(root);
/* harmony default export */ __webpack_exports__["default"] = (result);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(89), __webpack_require__(240)(module)))

/***/ }),
/* 240 */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(242)


/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __webpack_require__(243);
if (typeof global !== "undefined") {
    global.Worker = index_1.Worker;
}
else if (typeof window !== "undefined") {
    window.Worker = index_1.Worker;
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(89)))

/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Worker = exports.BlobWorker = exports.isWorkerRuntime = void 0;
const implementation_1 = __webpack_require__(210);
Object.defineProperty(exports, "isWorkerRuntime", { enumerable: true, get: function () { return implementation_1.isWorkerRuntime; } });
var pool_1 = __webpack_require__(245);
Object.defineProperty(exports, "Pool", { enumerable: true, get: function () { return pool_1.Pool; } });
var spawn_1 = __webpack_require__(248);
Object.defineProperty(exports, "spawn", { enumerable: true, get: function () { return spawn_1.spawn; } });
var thread_1 = __webpack_require__(211);
Object.defineProperty(exports, "Thread", { enumerable: true, get: function () { return thread_1.Thread; } });
/** Separate class to spawn workers from source code blobs or strings. */
exports.BlobWorker = implementation_1.getWorkerImplementation().blob;
/** Worker implementation. Either web worker or a node.js Worker class. */
exports.Worker = implementation_1.getWorkerImplementation().default;


/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Source: <https://github.com/parcel-bundler/parcel/blob/master/packages/core/parcel-bundler/src/builtins/bundle-url.js>
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBundleURL = exports.getBaseURL = void 0;
let bundleURL;
function getBundleURLCached() {
    if (!bundleURL) {
        bundleURL = getBundleURL();
    }
    return bundleURL;
}
exports.getBundleURL = getBundleURLCached;
function getBundleURL() {
    // Attempt to find the URL of the current script and use that as the base URL
    try {
        throw new Error;
    }
    catch (err) {
        const matches = ("" + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);
        if (matches) {
            return getBaseURL(matches[0]);
        }
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}
exports.getBaseURL = getBaseURL;


/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pool = exports.Thread = exports.PoolEventType = void 0;
const debug_1 = __importDefault(__webpack_require__(34));
const observable_fns_1 = __webpack_require__(47);
const ponyfills_1 = __webpack_require__(246);
const implementation_1 = __webpack_require__(210);
const pool_types_1 = __webpack_require__(247);
Object.defineProperty(exports, "PoolEventType", { enumerable: true, get: function () { return pool_types_1.PoolEventType; } });
const thread_1 = __webpack_require__(211);
Object.defineProperty(exports, "Thread", { enumerable: true, get: function () { return thread_1.Thread; } });
let nextPoolID = 1;
function createArray(size) {
    const array = [];
    for (let index = 0; index < size; index++) {
        array.push(index);
    }
    return array;
}
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function flatMap(array, mapper) {
    return array.reduce((flattened, element) => [...flattened, ...mapper(element)], []);
}
function slugify(text) {
    return text.replace(/\W/g, " ").trim().replace(/\s+/g, "-");
}
function spawnWorkers(spawnWorker, count) {
    return createArray(count).map(() => ({
        init: spawnWorker(),
        runningTasks: []
    }));
}
class WorkerPool {
    constructor(spawnWorker, optionsOrSize) {
        this.eventSubject = new observable_fns_1.Subject();
        this.initErrors = [];
        this.isClosing = false;
        this.nextTaskID = 1;
        this.taskQueue = [];
        const options = typeof optionsOrSize === "number"
            ? { size: optionsOrSize }
            : optionsOrSize || {};
        const { size = implementation_1.defaultPoolSize } = options;
        this.debug = debug_1.default(`threads:pool:${slugify(options.name || String(nextPoolID++))}`);
        this.options = options;
        this.workers = spawnWorkers(spawnWorker, size);
        this.eventObservable = observable_fns_1.multicast(observable_fns_1.Observable.from(this.eventSubject));
        Promise.all(this.workers.map(worker => worker.init)).then(() => this.eventSubject.next({
            type: pool_types_1.PoolEventType.initialized,
            size: this.workers.length
        }), error => {
            this.debug("Error while initializing pool worker:", error);
            this.eventSubject.error(error);
            this.initErrors.push(error);
        });
    }
    findIdlingWorker() {
        const { concurrency = 1 } = this.options;
        return this.workers.find(worker => worker.runningTasks.length < concurrency);
    }
    runPoolTask(worker, task) {
        return __awaiter(this, void 0, void 0, function* () {
            const workerID = this.workers.indexOf(worker) + 1;
            this.debug(`Running task #${task.id} on worker #${workerID}...`);
            this.eventSubject.next({
                type: pool_types_1.PoolEventType.taskStart,
                taskID: task.id,
                workerID
            });
            try {
                const returnValue = yield task.run(yield worker.init);
                this.debug(`Task #${task.id} completed successfully`);
                this.eventSubject.next({
                    type: pool_types_1.PoolEventType.taskCompleted,
                    returnValue,
                    taskID: task.id,
                    workerID
                });
            }
            catch (error) {
                this.debug(`Task #${task.id} failed`);
                this.eventSubject.next({
                    type: pool_types_1.PoolEventType.taskFailed,
                    taskID: task.id,
                    error,
                    workerID
                });
            }
        });
    }
    run(worker, task) {
        return __awaiter(this, void 0, void 0, function* () {
            const runPromise = (() => __awaiter(this, void 0, void 0, function* () {
                const removeTaskFromWorkersRunningTasks = () => {
                    worker.runningTasks = worker.runningTasks.filter(someRunPromise => someRunPromise !== runPromise);
                };
                // Defer task execution by one tick to give handlers time to subscribe
                yield delay(0);
                try {
                    yield this.runPoolTask(worker, task);
                }
                finally {
                    removeTaskFromWorkersRunningTasks();
                    if (!this.isClosing) {
                        this.scheduleWork();
                    }
                }
            }))();
            worker.runningTasks.push(runPromise);
        });
    }
    scheduleWork() {
        this.debug(`Attempt de-queueing a task in order to run it...`);
        const availableWorker = this.findIdlingWorker();
        if (!availableWorker)
            return;
        const nextTask = this.taskQueue.shift();
        if (!nextTask) {
            this.debug(`Task queue is empty`);
            this.eventSubject.next({ type: pool_types_1.PoolEventType.taskQueueDrained });
            return;
        }
        this.run(availableWorker, nextTask);
    }
    taskCompletion(taskID) {
        return new Promise((resolve, reject) => {
            const eventSubscription = this.events().subscribe(event => {
                if (event.type === pool_types_1.PoolEventType.taskCompleted && event.taskID === taskID) {
                    eventSubscription.unsubscribe();
                    resolve(event.returnValue);
                }
                else if (event.type === pool_types_1.PoolEventType.taskFailed && event.taskID === taskID) {
                    eventSubscription.unsubscribe();
                    reject(event.error);
                }
                else if (event.type === pool_types_1.PoolEventType.terminated) {
                    eventSubscription.unsubscribe();
                    reject(Error("Pool has been terminated before task was run."));
                }
            });
        });
    }
    settled(allowResolvingImmediately = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const getCurrentlyRunningTasks = () => flatMap(this.workers, worker => worker.runningTasks);
            const taskFailures = [];
            const failureSubscription = this.eventObservable.subscribe(event => {
                if (event.type === pool_types_1.PoolEventType.taskFailed) {
                    taskFailures.push(event.error);
                }
            });
            if (this.initErrors.length > 0) {
                return Promise.reject(this.initErrors[0]);
            }
            if (allowResolvingImmediately && this.taskQueue.length === 0) {
                yield ponyfills_1.allSettled(getCurrentlyRunningTasks());
                return taskFailures;
            }
            yield new Promise((resolve, reject) => {
                const subscription = this.eventObservable.subscribe({
                    next(event) {
                        if (event.type === pool_types_1.PoolEventType.taskQueueDrained) {
                            subscription.unsubscribe();
                            resolve();
                        }
                    },
                    error: reject // make a pool-wide error reject the completed() result promise
                });
            });
            yield ponyfills_1.allSettled(getCurrentlyRunningTasks());
            failureSubscription.unsubscribe();
            return taskFailures;
        });
    }
    completed(allowResolvingImmediately = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const settlementPromise = this.settled(allowResolvingImmediately);
            const earlyExitPromise = new Promise((resolve, reject) => {
                const subscription = this.eventObservable.subscribe({
                    next(event) {
                        if (event.type === pool_types_1.PoolEventType.taskQueueDrained) {
                            subscription.unsubscribe();
                            resolve(settlementPromise);
                        }
                        else if (event.type === pool_types_1.PoolEventType.taskFailed) {
                            subscription.unsubscribe();
                            reject(event.error);
                        }
                    },
                    error: reject // make a pool-wide error reject the completed() result promise
                });
            });
            const errors = yield Promise.race([
                settlementPromise,
                earlyExitPromise
            ]);
            if (errors.length > 0) {
                throw errors[0];
            }
        });
    }
    events() {
        return this.eventObservable;
    }
    queue(taskFunction) {
        const { maxQueuedJobs = Infinity } = this.options;
        if (this.isClosing) {
            throw Error(`Cannot schedule pool tasks after terminate() has been called.`);
        }
        if (this.initErrors.length > 0) {
            throw this.initErrors[0];
        }
        const taskID = this.nextTaskID++;
        const taskCompletion = this.taskCompletion(taskID);
        taskCompletion.catch((error) => {
            // Prevent unhandled rejections here as we assume the user will use
            // `pool.completed()`, `pool.settled()` or `task.catch()` to handle errors
            this.debug(`Task #${taskID} errored:`, error);
        });
        const task = {
            id: taskID,
            run: taskFunction,
            cancel: () => {
                if (this.taskQueue.indexOf(task) === -1)
                    return;
                this.taskQueue = this.taskQueue.filter(someTask => someTask !== task);
                this.eventSubject.next({
                    type: pool_types_1.PoolEventType.taskCanceled,
                    taskID: task.id
                });
            },
            then: taskCompletion.then.bind(taskCompletion)
        };
        if (this.taskQueue.length >= maxQueuedJobs) {
            throw Error("Maximum number of pool tasks queued. Refusing to queue another one.\n" +
                "This usually happens for one of two reasons: We are either at peak " +
                "workload right now or some tasks just won't finish, thus blocking the pool.");
        }
        this.debug(`Queueing task #${task.id}...`);
        this.taskQueue.push(task);
        this.eventSubject.next({
            type: pool_types_1.PoolEventType.taskQueued,
            taskID: task.id
        });
        this.scheduleWork();
        return task;
    }
    terminate(force) {
        return __awaiter(this, void 0, void 0, function* () {
            this.isClosing = true;
            if (!force) {
                yield this.completed(true);
            }
            this.eventSubject.next({
                type: pool_types_1.PoolEventType.terminated,
                remainingQueue: [...this.taskQueue]
            });
            this.eventSubject.complete();
            yield Promise.all(this.workers.map((worker) => __awaiter(this, void 0, void 0, function* () { return thread_1.Thread.terminate(yield worker.init); })));
        });
    }
}
WorkerPool.EventType = pool_types_1.PoolEventType;
/**
 * Thread pool constructor. Creates a new pool and spawns its worker threads.
 */
function PoolConstructor(spawnWorker, optionsOrSize) {
    // The function exists only so we don't need to use `new` to create a pool (we still can, though).
    // If the Pool is a class or not is an implementation detail that should not concern the user.
    return new WorkerPool(spawnWorker, optionsOrSize);
}
PoolConstructor.EventType = pool_types_1.PoolEventType;
/**
 * Thread pool constructor. Creates a new pool and spawns its worker threads.
 */
exports.Pool = PoolConstructor;


/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.allSettled = void 0;
// Based on <https://github.com/es-shims/Promise.allSettled/blob/master/implementation.js>
function allSettled(values) {
    return Promise.all(values.map(item => {
        const onFulfill = (value) => {
            return { status: 'fulfilled', value };
        };
        const onReject = (reason) => {
            return { status: 'rejected', reason };
        };
        const itemPromise = Promise.resolve(item);
        try {
            return itemPromise.then(onFulfill, onReject);
        }
        catch (error) {
            return Promise.reject(error);
        }
    }));
}
exports.allSettled = allSettled;


/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PoolEventType = void 0;
/** Pool event type. Specifies the type of each `PoolEvent`. */
var PoolEventType;
(function (PoolEventType) {
    PoolEventType["initialized"] = "initialized";
    PoolEventType["taskCanceled"] = "taskCanceled";
    PoolEventType["taskCompleted"] = "taskCompleted";
    PoolEventType["taskFailed"] = "taskFailed";
    PoolEventType["taskQueued"] = "taskQueued";
    PoolEventType["taskQueueDrained"] = "taskQueueDrained";
    PoolEventType["taskStart"] = "taskStart";
    PoolEventType["terminated"] = "terminated";
})(PoolEventType = exports.PoolEventType || (exports.PoolEventType = {}));


/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.spawn = void 0;
const debug_1 = __importDefault(__webpack_require__(34));
const observable_fns_1 = __webpack_require__(47);
const common_1 = __webpack_require__(212);
const promise_1 = __webpack_require__(250);
const symbols_1 = __webpack_require__(169);
const master_1 = __webpack_require__(251);
const invocation_proxy_1 = __webpack_require__(252);
const debugMessages = debug_1.default("threads:master:messages");
const debugSpawn = debug_1.default("threads:master:spawn");
const debugThreadUtils = debug_1.default("threads:master:thread-utils");
const isInitMessage = (data) => data && data.type === "init";
const isUncaughtErrorMessage = (data) => data && data.type === "uncaughtError";
const initMessageTimeout = typeof process !== "undefined" && process.env.THREADS_WORKER_INIT_TIMEOUT
    ? Number.parseInt(process.env.THREADS_WORKER_INIT_TIMEOUT, 10)
    : 10000;
function withTimeout(promise, timeoutInMs, errorMessage) {
    return __awaiter(this, void 0, void 0, function* () {
        let timeoutHandle;
        const timeout = new Promise((resolve, reject) => {
            timeoutHandle = setTimeout(() => reject(Error(errorMessage)), timeoutInMs);
        });
        const result = yield Promise.race([
            promise,
            timeout
        ]);
        clearTimeout(timeoutHandle);
        return result;
    });
}
function receiveInitMessage(worker) {
    return new Promise((resolve, reject) => {
        const messageHandler = ((event) => {
            debugMessages("Message from worker before finishing initialization:", event.data);
            if (isInitMessage(event.data)) {
                worker.removeEventListener("message", messageHandler);
                resolve(event.data);
            }
            else if (isUncaughtErrorMessage(event.data)) {
                worker.removeEventListener("message", messageHandler);
                reject(common_1.deserialize(event.data.error));
            }
        });
        worker.addEventListener("message", messageHandler);
    });
}
function createEventObservable(worker, workerTermination) {
    return new observable_fns_1.Observable(observer => {
        const messageHandler = ((messageEvent) => {
            const workerEvent = {
                type: master_1.WorkerEventType.message,
                data: messageEvent.data
            };
            observer.next(workerEvent);
        });
        const rejectionHandler = ((errorEvent) => {
            debugThreadUtils("Unhandled promise rejection event in thread:", errorEvent);
            const workerEvent = {
                type: master_1.WorkerEventType.internalError,
                error: Error(errorEvent.reason)
            };
            observer.next(workerEvent);
        });
        worker.addEventListener("message", messageHandler);
        worker.addEventListener("unhandledrejection", rejectionHandler);
        workerTermination.then(() => {
            const terminationEvent = {
                type: master_1.WorkerEventType.termination
            };
            worker.removeEventListener("message", messageHandler);
            worker.removeEventListener("unhandledrejection", rejectionHandler);
            observer.next(terminationEvent);
            observer.complete();
        });
    });
}
function createTerminator(worker) {
    const [termination, resolver] = promise_1.createPromiseWithResolver();
    const terminate = () => __awaiter(this, void 0, void 0, function* () {
        debugThreadUtils("Terminating worker");
        // Newer versions of worker_threads workers return a promise
        yield worker.terminate();
        resolver();
    });
    return { terminate, termination };
}
function setPrivateThreadProps(raw, worker, workerEvents, terminate) {
    const workerErrors = workerEvents
        .filter(event => event.type === master_1.WorkerEventType.internalError)
        .map(errorEvent => errorEvent.error);
    // tslint:disable-next-line prefer-object-spread
    return Object.assign(raw, {
        [symbols_1.$errors]: workerErrors,
        [symbols_1.$events]: workerEvents,
        [symbols_1.$terminate]: terminate,
        [symbols_1.$worker]: worker
    });
}
/**
 * Spawn a new thread. Takes a fresh worker instance, wraps it in a thin
 * abstraction layer to provide the transparent API and verifies that
 * the worker has initialized successfully.
 *
 * @param worker Instance of `Worker`. Either a web worker, `worker_threads` worker or `tiny-worker` worker.
 * @param [options]
 * @param [options.timeout] Init message timeout. Default: 10000 or set by environment variable.
 */
function spawn(worker, options) {
    return __awaiter(this, void 0, void 0, function* () {
        debugSpawn("Initializing new thread");
        const initMessage = yield withTimeout(receiveInitMessage(worker), options && options.timeout ? options.timeout : initMessageTimeout, `Timeout: Did not receive an init message from worker after ${initMessageTimeout}ms. Make sure the worker calls expose().`);
        const exposed = initMessage.exposed;
        const { termination, terminate } = createTerminator(worker);
        const events = createEventObservable(worker, termination);
        if (exposed.type === "function") {
            const proxy = invocation_proxy_1.createProxyFunction(worker);
            return setPrivateThreadProps(proxy, worker, events, terminate);
        }
        else if (exposed.type === "module") {
            const proxy = invocation_proxy_1.createProxyModule(worker, exposed.methods);
            return setPrivateThreadProps(proxy, worker, events, terminate);
        }
        else {
            const type = exposed.type;
            throw Error(`Worker init message states unexpected type of expose(): ${type}`);
        }
    });
}
exports.spawn = spawn;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(60)))

/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultSerializer = exports.extendSerializer = void 0;
function extendSerializer(extend, implementation) {
    const fallbackDeserializer = extend.deserialize.bind(extend);
    const fallbackSerializer = extend.serialize.bind(extend);
    return {
        deserialize(message) {
            return implementation.deserialize(message, fallbackDeserializer);
        },
        serialize(input) {
            return implementation.serialize(input, fallbackSerializer);
        }
    };
}
exports.extendSerializer = extendSerializer;
const DefaultErrorSerializer = {
    deserialize(message) {
        return Object.assign(Error(message.message), {
            name: message.name,
            stack: message.stack
        });
    },
    serialize(error) {
        return {
            __error_marker: "$$error",
            message: error.message,
            name: error.name,
            stack: error.stack
        };
    }
};
const isSerializedError = (thing) => thing && typeof thing === "object" && "__error_marker" in thing && thing.__error_marker === "$$error";
exports.DefaultSerializer = {
    deserialize(message) {
        if (isSerializedError(message)) {
            return DefaultErrorSerializer.deserialize(message);
        }
        else {
            return message;
        }
    },
    serialize(input) {
        if (input instanceof Error) {
            return DefaultErrorSerializer.serialize(input);
        }
        else {
            return input;
        }
    }
};


/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.createPromiseWithResolver = void 0;
const doNothing = () => undefined;
/**
 * Creates a new promise and exposes its resolver function.
 * Use with care!
 */
function createPromiseWithResolver() {
    let alreadyResolved = false;
    let resolvedTo;
    let resolver = doNothing;
    const promise = new Promise(resolve => {
        if (alreadyResolved) {
            resolve(resolvedTo);
        }
        else {
            resolver = resolve;
        }
    });
    const exposedResolver = (value) => {
        alreadyResolved = true;
        resolvedTo = value;
        resolver();
    };
    return [promise, exposedResolver];
}
exports.createPromiseWithResolver = createPromiseWithResolver;


/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/// <reference lib="dom" />
// tslint:disable max-classes-per-file
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkerEventType = void 0;
const symbols_1 = __webpack_require__(169);
/** Event as emitted by worker thread. Subscribe to using `Thread.events(thread)`. */
var WorkerEventType;
(function (WorkerEventType) {
    WorkerEventType["internalError"] = "internalError";
    WorkerEventType["message"] = "message";
    WorkerEventType["termination"] = "termination";
})(WorkerEventType = exports.WorkerEventType || (exports.WorkerEventType = {}));


/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * This source file contains the code for proxying calls in the master thread to calls in the workers
 * by `.postMessage()`-ing.
 *
 * Keep in mind that this code can make or break the program's performance! Need to optimize more…
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProxyModule = exports.createProxyFunction = void 0;
const debug_1 = __importDefault(__webpack_require__(34));
const observable_fns_1 = __webpack_require__(47);
const common_1 = __webpack_require__(212);
const observable_promise_1 = __webpack_require__(253);
const transferable_1 = __webpack_require__(254);
const messages_1 = __webpack_require__(255);
const debugMessages = debug_1.default("threads:master:messages");
let nextJobUID = 1;
const dedupe = (array) => Array.from(new Set(array));
const isJobErrorMessage = (data) => data && data.type === messages_1.WorkerMessageType.error;
const isJobResultMessage = (data) => data && data.type === messages_1.WorkerMessageType.result;
const isJobStartMessage = (data) => data && data.type === messages_1.WorkerMessageType.running;
function createObservableForJob(worker, jobUID) {
    return new observable_fns_1.Observable(observer => {
        let asyncType;
        const messageHandler = ((event) => {
            debugMessages("Message from worker:", event.data);
            if (!event.data || event.data.uid !== jobUID)
                return;
            if (isJobStartMessage(event.data)) {
                asyncType = event.data.resultType;
            }
            else if (isJobResultMessage(event.data)) {
                if (asyncType === "promise") {
                    if (typeof event.data.payload !== "undefined") {
                        observer.next(common_1.deserialize(event.data.payload));
                    }
                    observer.complete();
                    worker.removeEventListener("message", messageHandler);
                }
                else {
                    if (event.data.payload) {
                        observer.next(common_1.deserialize(event.data.payload));
                    }
                    if (event.data.complete) {
                        observer.complete();
                        worker.removeEventListener("message", messageHandler);
                    }
                }
            }
            else if (isJobErrorMessage(event.data)) {
                const error = common_1.deserialize(event.data.error);
                if (asyncType === "promise" || !asyncType) {
                    observer.error(error);
                }
                else {
                    observer.error(error);
                }
                worker.removeEventListener("message", messageHandler);
            }
        });
        worker.addEventListener("message", messageHandler);
        return () => {
            if (asyncType === "observable" || !asyncType) {
                const cancelMessage = {
                    type: messages_1.MasterMessageType.cancel,
                    uid: jobUID
                };
                worker.postMessage(cancelMessage);
            }
            worker.removeEventListener("message", messageHandler);
        };
    });
}
function prepareArguments(rawArgs) {
    if (rawArgs.length === 0) {
        // Exit early if possible
        return {
            args: [],
            transferables: []
        };
    }
    const args = [];
    const transferables = [];
    for (const arg of rawArgs) {
        if (transferable_1.isTransferDescriptor(arg)) {
            args.push(common_1.serialize(arg.send));
            transferables.push(...arg.transferables);
        }
        else {
            args.push(common_1.serialize(arg));
        }
    }
    return {
        args,
        transferables: transferables.length === 0 ? transferables : dedupe(transferables)
    };
}
function createProxyFunction(worker, method) {
    return ((...rawArgs) => {
        const uid = nextJobUID++;
        const { args, transferables } = prepareArguments(rawArgs);
        const runMessage = {
            type: messages_1.MasterMessageType.run,
            uid,
            method,
            args
        };
        debugMessages("Sending command to run function to worker:", runMessage);
        try {
            worker.postMessage(runMessage, transferables);
        }
        catch (error) {
            return observable_promise_1.ObservablePromise.from(Promise.reject(error));
        }
        return observable_promise_1.ObservablePromise.from(observable_fns_1.multicast(createObservableForJob(worker, uid)));
    });
}
exports.createProxyFunction = createProxyFunction;
function createProxyModule(worker, methodNames) {
    const proxy = {};
    for (const methodName of methodNames) {
        proxy[methodName] = createProxyFunction(worker, methodName);
    }
    return proxy;
}
exports.createProxyModule = createProxyModule;


/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservablePromise = void 0;
const observable_fns_1 = __webpack_require__(47);
const doNothing = () => undefined;
const returnInput = (input) => input;
const runDeferred = (fn) => Promise.resolve().then(fn);
function fail(error) {
    throw error;
}
function isThenable(thing) {
    return thing && typeof thing.then === "function";
}
/**
 * Creates a hybrid, combining the APIs of an Observable and a Promise.
 *
 * It is used to proxy async process states when we are initially not sure
 * if that async process will yield values once (-> Promise) or multiple
 * times (-> Observable).
 *
 * Note that the observable promise inherits some of the observable's characteristics:
 * The `init` function will be called *once for every time anyone subscribes to it*.
 *
 * If this is undesired, derive a hot observable from it using `makeHot()` and
 * subscribe to that.
 */
class ObservablePromise extends observable_fns_1.Observable {
    constructor(init) {
        super(originalObserver => {
            // tslint:disable-next-line no-this-assignment
            const self = this;
            const observer = Object.assign(Object.assign({}, originalObserver), { complete() {
                    originalObserver.complete();
                    self.onCompletion();
                }, error(error) {
                    originalObserver.error(error);
                    self.onError(error);
                },
                next(value) {
                    originalObserver.next(value);
                    self.onNext(value);
                } });
            try {
                this.initHasRun = true;
                return init(observer);
            }
            catch (error) {
                observer.error(error);
            }
        });
        this.initHasRun = false;
        this.fulfillmentCallbacks = [];
        this.rejectionCallbacks = [];
        this.firstValueSet = false;
        this.state = "pending";
    }
    onNext(value) {
        if (!this.firstValueSet) {
            this.firstValue = value;
            this.firstValueSet = true;
        }
    }
    onError(error) {
        this.state = "rejected";
        this.rejection = error;
        for (const onRejected of this.rejectionCallbacks) {
            // Promisifying the call to turn errors into unhandled promise rejections
            // instead of them failing sync and cancelling the iteration
            runDeferred(() => onRejected(error));
        }
    }
    onCompletion() {
        this.state = "fulfilled";
        for (const onFulfilled of this.fulfillmentCallbacks) {
            // Promisifying the call to turn errors into unhandled promise rejections
            // instead of them failing sync and cancelling the iteration
            runDeferred(() => onFulfilled(this.firstValue));
        }
    }
    then(onFulfilledRaw, onRejectedRaw) {
        const onFulfilled = onFulfilledRaw || returnInput;
        const onRejected = onRejectedRaw || fail;
        let onRejectedCalled = false;
        return new Promise((resolve, reject) => {
            const rejectionCallback = (error) => {
                if (onRejectedCalled)
                    return;
                onRejectedCalled = true;
                try {
                    resolve(onRejected(error));
                }
                catch (anotherError) {
                    reject(anotherError);
                }
            };
            const fulfillmentCallback = (value) => {
                try {
                    resolve(onFulfilled(value));
                }
                catch (error) {
                    rejectionCallback(error);
                }
            };
            if (!this.initHasRun) {
                this.subscribe({ error: rejectionCallback });
            }
            if (this.state === "fulfilled") {
                return resolve(onFulfilled(this.firstValue));
            }
            if (this.state === "rejected") {
                onRejectedCalled = true;
                return resolve(onRejected(this.rejection));
            }
            this.fulfillmentCallbacks.push(fulfillmentCallback);
            this.rejectionCallbacks.push(rejectionCallback);
        });
    }
    catch(onRejected) {
        return this.then(undefined, onRejected);
    }
    finally(onCompleted) {
        const handler = onCompleted || doNothing;
        return this.then((value) => {
            handler();
            return value;
        }, () => handler());
    }
    static from(thing) {
        if (isThenable(thing)) {
            return new ObservablePromise(observer => {
                const onFulfilled = (value) => {
                    observer.next(value);
                    observer.complete();
                };
                const onRejected = (error) => {
                    observer.error(error);
                };
                thing.then(onFulfilled, onRejected);
            });
        }
        else {
            return super.from(thing);
        }
    }
}
exports.ObservablePromise = ObservablePromise;


/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Transfer = exports.isTransferDescriptor = void 0;
const symbols_1 = __webpack_require__(169);
function isTransferable(thing) {
    if (!thing || typeof thing !== "object")
        return false;
    // Don't check too thoroughly, since the list of transferable things in JS might grow over time
    return true;
}
function isTransferDescriptor(thing) {
    return thing && typeof thing === "object" && thing[symbols_1.$transferable];
}
exports.isTransferDescriptor = isTransferDescriptor;
function Transfer(payload, transferables) {
    if (!transferables) {
        if (!isTransferable(payload))
            throw Error();
        transferables = [payload];
    }
    return {
        [symbols_1.$transferable]: true,
        send: payload,
        transferables
    };
}
exports.Transfer = Transfer;


/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkerMessageType = exports.MasterMessageType = void 0;
/////////////////////////////
// Messages sent by master:
var MasterMessageType;
(function (MasterMessageType) {
    MasterMessageType["cancel"] = "cancel";
    MasterMessageType["run"] = "run";
})(MasterMessageType = exports.MasterMessageType || (exports.MasterMessageType = {}));
////////////////////////////
// Messages sent by worker:
var WorkerMessageType;
(function (WorkerMessageType) {
    WorkerMessageType["error"] = "error";
    WorkerMessageType["init"] = "init";
    WorkerMessageType["result"] = "result";
    WorkerMessageType["running"] = "running";
    WorkerMessageType["uncaughtError"] = "uncaughtError";
})(WorkerMessageType = exports.WorkerMessageType || (exports.WorkerMessageType = {}));


/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clientNetworkThreadUrl = void 0;

var client_network_thread_1 = __importDefault(__webpack_require__(257));

exports.clientNetworkThreadUrl = client_network_thread_1.default;

/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0.main.worker.js?1636149423624"

/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) {
        d[p] = b[p];
      }
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) {
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    }

    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommonClientConfig = void 0;

var shared_config_1 = __webpack_require__(259);

var CommonClientConfig = function (_super) {
  __extends(CommonClientConfig, _super);

  function CommonClientConfig() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  CommonClientConfig.ASSET_FOLDER = 'asset/';
  CommonClientConfig.SERVER_HOSTS = [{
    url: 'https://game-off-2021.herokuapp.com/',
    name: 'Europe'
  }];
  return CommonClientConfig;
}(shared_config_1.SharedConfig);

exports.CommonClientConfig = CommonClientConfig;

/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) {
        d[p] = b[p];
      }
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) {
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    }

    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SharedConfig = void 0;

var common_shared_config_1 = __webpack_require__(260);

var SharedConfig = function (_super) {
  __extends(SharedConfig, _super);

  function SharedConfig() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return SharedConfig;
}(common_shared_config_1.CommonSharedConfig);

exports.SharedConfig = SharedConfig;

/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommonSharedConfig = void 0;

var CommonSharedConfig = function () {
  function CommonSharedConfig() {}

  var _a;

  CommonSharedConfig.NETWORK_TICK_RATE = 15;
  CommonSharedConfig.SERVER_SOCKET_PORT = parseInt((_a = process.env.PORT) !== null && _a !== void 0 ? _a : '3001');
  return CommonSharedConfig;
}();

exports.CommonSharedConfig = CommonSharedConfig;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(60)))

/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TimeMapBuffer = void 0;

var deepmerge_1 = __importDefault(__webpack_require__(262));

var rxjs_1 = __webpack_require__(46);

var TimeMapBuffer = function () {
  function TimeMapBuffer() {
    this.dataSubject = new rxjs_1.Subject();
    this.data$ = this.dataSubject.asObservable();
    this.data = new Map();
    this.lastSentTime = 0;
    this.enabled = false;
    this.frameLengthMs = 0;
    this.loopBind = this.loop.bind(this);
    this.start();
  }

  TimeMapBuffer.prototype.setFrameLengthMs = function (value) {
    this.frameLengthMs = value;
  };

  TimeMapBuffer.prototype.setDefaultValue = function (value) {
    this.defaultValue = value;
  };

  TimeMapBuffer.prototype.add = function (key, value) {
    this.data.set(key, this.mergeValue(key, value));

    if (this.enabled) {
      this.sendInTimeIfNotEmpty();
    }
  };

  TimeMapBuffer.prototype.start = function () {
    this.enabled = true;
    this.loop();
  };

  TimeMapBuffer.prototype.stop = function () {
    this.enabled = false;
  };

  TimeMapBuffer.prototype.loop = function () {
    if (this.enabled) {
      this.sendInTimeIfNotEmpty();
      requestAnimationFrame(this.loopBind);
    }
  };

  TimeMapBuffer.prototype.sendInTimeIfNotEmpty = function () {
    if (Date.now() > this.lastSentTime + this.frameLengthMs) {
      if (this.data.size > 0) {
        this.send();
      }
    }
  };

  TimeMapBuffer.prototype.send = function () {
    this.lastSentTime = Date.now();
    var data = this.getBufferedData();
    this.data.clear();
    this.dataSubject.next(data);
  };

  TimeMapBuffer.prototype.getBufferedData = function () {
    return Array.from(this.data.entries());
  };

  TimeMapBuffer.prototype.mergeValue = function (event, value) {
    var _a;

    if (!this.defaultValue) {
      throw new Error('TimeMapBuffer has no default value');
    }

    return deepmerge_1.default.all([(_a = this.data.get(event)) !== null && _a !== void 0 ? _a : this.defaultValue, value]);
  };

  return TimeMapBuffer;
}();

exports.TimeMapBuffer = TimeMapBuffer;

/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isMergeableObject = function isMergeableObject(value) {
	return isNonNullObject(value)
		&& !isSpecial(value)
};

function isNonNullObject(value) {
	return !!value && typeof value === 'object'
}

function isSpecial(value) {
	var stringValue = Object.prototype.toString.call(value);

	return stringValue === '[object RegExp]'
		|| stringValue === '[object Date]'
		|| isReactElement(value)
}

// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

function isReactElement(value) {
	return value.$$typeof === REACT_ELEMENT_TYPE
}

function emptyTarget(val) {
	return Array.isArray(val) ? [] : {}
}

function cloneUnlessOtherwiseSpecified(value, options) {
	return (options.clone !== false && options.isMergeableObject(value))
		? deepmerge(emptyTarget(value), value, options)
		: value
}

function defaultArrayMerge(target, source, options) {
	return target.concat(source).map(function(element) {
		return cloneUnlessOtherwiseSpecified(element, options)
	})
}

function getMergeFunction(key, options) {
	if (!options.customMerge) {
		return deepmerge
	}
	var customMerge = options.customMerge(key);
	return typeof customMerge === 'function' ? customMerge : deepmerge
}

function getEnumerableOwnPropertySymbols(target) {
	return Object.getOwnPropertySymbols
		? Object.getOwnPropertySymbols(target).filter(function(symbol) {
			return target.propertyIsEnumerable(symbol)
		})
		: []
}

function getKeys(target) {
	return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target))
}

function propertyIsOnObject(object, property) {
	try {
		return property in object
	} catch(_) {
		return false
	}
}

// Protects from prototype poisoning and unexpected merging up the prototype chain.
function propertyIsUnsafe(target, key) {
	return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
		&& !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
			&& Object.propertyIsEnumerable.call(target, key)) // and also unsafe if they're nonenumerable.
}

function mergeObject(target, source, options) {
	var destination = {};
	if (options.isMergeableObject(target)) {
		getKeys(target).forEach(function(key) {
			destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
		});
	}
	getKeys(source).forEach(function(key) {
		if (propertyIsUnsafe(target, key)) {
			return
		}

		if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
			destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
		} else {
			destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
		}
	});
	return destination
}

function deepmerge(target, source, options) {
	options = options || {};
	options.arrayMerge = options.arrayMerge || defaultArrayMerge;
	options.isMergeableObject = options.isMergeableObject || isMergeableObject;
	// cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
	// implementations can use it. The caller may not replace it.
	options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;

	var sourceIsArray = Array.isArray(source);
	var targetIsArray = Array.isArray(target);
	var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

	if (!sourceAndTargetTypesMatch) {
		return cloneUnlessOtherwiseSpecified(source, options)
	} else if (sourceIsArray) {
		return options.arrayMerge(target, source, options)
	} else {
		return mergeObject(target, source, options)
	}
}

deepmerge.all = function deepmergeAll(array, options) {
	if (!Array.isArray(array)) {
		throw new Error('first argument should be an array')
	}

	return array.reduce(function(prev, next) {
		return deepmerge(prev, next, options)
	}, {})
};

var deepmerge_1 = deepmerge;

module.exports = deepmerge_1;


/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];

  if (!m) {
    return o;
  }

  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) {
        m.call(i);
      }
    } finally {
      if (e) {
        throw e.error;
      }
    }
  }

  return ar;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapNetworkMessages = void 0;

var mapNetworkMessages = function (data) {
  var _a2 = data;

  var _f = function (_a) {
    var _b = __read(_a, 2),
        event = _b[0],
        value = _b[1];

    return {
      event: event,
      value: value
    };
  };

  var _r = [];

  for (var _i = 0; _i < _a2.length; _i++) {
    _r.push(_f(_a2[_i], _i, _a2));
  }

  return _r;
};

exports.mapNetworkMessages = mapNetworkMessages;

/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoginStatus = exports.NetworkEvent = void 0;
var NetworkEvent;

(function (NetworkEvent) {
  NetworkEvent[NetworkEvent["LOGIN"] = 0] = "LOGIN";
  NetworkEvent[NetworkEvent["STORE"] = 1] = "STORE";
})(NetworkEvent = exports.NetworkEvent || (exports.NetworkEvent = {}));

var LoginStatus;

(function (LoginStatus) {
  LoginStatus[LoginStatus["OK"] = 0] = "OK";
  LoginStatus[LoginStatus["DENIED_SERVER_IS_FULL"] = 1] = "DENIED_SERVER_IS_FULL";
})(LoginStatus = exports.LoginStatus || (exports.LoginStatus = {}));

/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;

  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
    r = Reflect.decorate(decorators, target, key, desc);
  } else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) {
      r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }
  }

  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = this && this.__metadata || function (k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
    return Reflect.metadata(k, v);
  }
};

var __param = this && this.__param || function (paramIndex, decorator) {
  return function (target, key) {
    decorator(target, key, paramIndex);
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClientNetworkManager = void 0;

var typescript_ioc_1 = __webpack_require__(32);

var client_network_service_1 = __webpack_require__(200);

var client_config_1 = __webpack_require__(213);

var utils_1 = __webpack_require__(214);

var ClientNetworkManager = function () {
  function ClientNetworkManager(service) {
    this.service = service;
    service.connected$.subscribe(function () {
      console.log('Connected to the server, Sending login request..');
      service.sendLoginRequest({
        userName: (0, utils_1.generateId)()
      });
    });
    service.loginOk$.subscribe(function (response) {
      console.log('Login OK', response);
    });
    service.loginFailed$.subscribe(function (response) {
      console.log('Login Failed', response);
    });
    this.service.connect(client_config_1.ClientConfig.SERVER_HOSTS[0].url);
  }

  var _a;

  ClientNetworkManager = __decorate([typescript_ioc_1.Singleton, __param(0, typescript_ioc_1.Inject), __metadata("design:paramtypes", [typeof (_a = typeof client_network_service_1.ClientNetworkService !== "undefined" && client_network_service_1.ClientNetworkService) === "function" ? _a : Object])], ClientNetworkManager);
  return ClientNetworkManager;
}();

exports.ClientNetworkManager = ClientNetworkManager;

/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;

  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
    r = Reflect.decorate(decorators, target, key, desc);
  } else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) {
      r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }
  }

  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = this && this.__metadata || function (k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
    return Reflect.metadata(k, v);
  }
};

var __param = this && this.__param || function (paramIndex, decorator) {
  return function (target, key) {
    decorator(target, key, paramIndex);
  };
};

var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];

  if (!m) {
    return o;
  }

  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) {
        m.call(i);
      }
    } finally {
      if (e) {
        throw e.error;
      }
    }
  }

  return ar;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClientStoreManager = void 0;

var typescript_ioc_1 = __webpack_require__(32);

var client_network_service_1 = __webpack_require__(200);

var client_player_service_1 = __webpack_require__(205);

var rxjs_1 = __webpack_require__(46);

var player_store_1 = __webpack_require__(206);

var client_store_utils_1 = __webpack_require__(267);

var ClientStoreManager = function () {
  function ClientStoreManager(network, player, playerStore) {
    var _this = this;

    this.network = network;
    this.player = player;
    this.playerStore = playerStore;
    player.clientInit$.subscribe(function (player) {
      _this.subscribeStoreOnCommitToNetwork(playerStore, player.id);

      _this.subscribeNetworkUpdateToStore(playerStore);
    });
  }

  ClientStoreManager.prototype.subscribeStoreOnCommitToNetwork = function (store, key) {
    var _this = this;

    store.onCommitted(key).subscribe(function (value) {
      _this.network.sendStore(store.getId(), key, value);
    });
  };

  ClientStoreManager.prototype.subscribeNetworkUpdateToStore = function (store) {
    this.network.onStoreDto(store.getId()).pipe((0, rxjs_1.mergeMap)(function (storeData) {
      return Array.from(Object.entries(storeData));
    })).subscribe(function (_a) {
      var _b = __read(_a, 2),
          key = _b[0],
          entity = _b[1];

      return (0, client_store_utils_1.updateOrRemove)(store, key, entity);
    });
  };

  var _a, _b, _c;

  ClientStoreManager = __decorate([typescript_ioc_1.Singleton, __param(0, typescript_ioc_1.Inject), __param(1, typescript_ioc_1.Inject), __param(2, typescript_ioc_1.Inject), __metadata("design:paramtypes", [typeof (_a = typeof client_network_service_1.ClientNetworkService !== "undefined" && client_network_service_1.ClientNetworkService) === "function" ? _a : Object, typeof (_b = typeof client_player_service_1.ClientPlayerService !== "undefined" && client_player_service_1.ClientPlayerService) === "function" ? _b : Object, typeof (_c = typeof player_store_1.PlayerStore !== "undefined" && player_store_1.PlayerStore) === "function" ? _c : Object])], ClientStoreManager);
  return ClientStoreManager;
}();

exports.ClientStoreManager = ClientStoreManager;

/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateOrRemove = void 0;

var updateOrRemove = function (store, key, value) {
  if (value === null) {
    store.remove(key);
  } else {
    store.update(key, value);
  }
};

exports.updateOrRemove = updateOrRemove;

/***/ }),
/* 268 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "registerSerializer", function() { return /* reexport */ common["b" /* registerSerializer */]; });
__webpack_require__.d(__webpack_exports__, "Pool", function() { return /* reexport */ Pool; });
__webpack_require__.d(__webpack_exports__, "spawn", function() { return /* reexport */ spawn["a" /* spawn */]; });
__webpack_require__.d(__webpack_exports__, "Thread", function() { return /* reexport */ Thread; });
__webpack_require__.d(__webpack_exports__, "isWorkerRuntime", function() { return /* reexport */ isWorkerRuntime; });
__webpack_require__.d(__webpack_exports__, "BlobWorker", function() { return /* reexport */ master_BlobWorker; });
__webpack_require__.d(__webpack_exports__, "Worker", function() { return /* reexport */ master_Worker; });
__webpack_require__.d(__webpack_exports__, "expose", function() { return /* reexport */ dist_esm_worker["a" /* expose */]; });
__webpack_require__.d(__webpack_exports__, "DefaultSerializer", function() { return /* reexport */ serializers["a" /* DefaultSerializer */]; });
__webpack_require__.d(__webpack_exports__, "Transfer", function() { return /* reexport */ transferable["a" /* Transfer */]; });

// EXTERNAL MODULE: ./node_modules/threads/dist-esm/common.js
var common = __webpack_require__(13);

// CONCATENATED MODULE: ./node_modules/threads/dist-esm/master/get-bundle-url.browser.js
// Source: <https://github.com/parcel-bundler/parcel/blob/master/packages/core/parcel-bundler/src/builtins/bundle-url.js>
let bundleURL;
function getBundleURLCached() {
    if (!bundleURL) {
        bundleURL = getBundleURL();
    }
    return bundleURL;
}
function getBundleURL() {
    // Attempt to find the URL of the current script and use that as the base URL
    try {
        throw new Error;
    }
    catch (err) {
        const matches = ("" + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);
        if (matches) {
            return getBaseURL(matches[0]);
        }
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}


// CONCATENATED MODULE: ./node_modules/threads/dist-esm/master/implementation.browser.js
// tslint:disable max-classes-per-file

const defaultPoolSize = typeof navigator !== "undefined" && navigator.hardwareConcurrency
    ? navigator.hardwareConcurrency
    : 4;
const isAbsoluteURL = (value) => /^(file|https?:)?\/\//i.test(value);
function createSourceBlobURL(code) {
    const blob = new Blob([code], { type: "application/javascript" });
    return URL.createObjectURL(blob);
}
function selectWorkerImplementation() {
    if (typeof Worker === "undefined") {
        // Might happen on Safari, for instance
        // The idea is to only fail if the constructor is actually used
        return class NoWebWorker {
            constructor() {
                throw Error("No web worker implementation available. You might have tried to spawn a worker within a worker in a browser that doesn't support workers in workers.");
            }
        };
    }
    class WebWorker extends Worker {
        constructor(url, options) {
            if (typeof url === "string" && options && options._baseURL) {
                url = new URL(url, options._baseURL);
            }
            else if (typeof url === "string" && !isAbsoluteURL(url) && getBundleURLCached().match(/^file:\/\//i)) {
                url = new URL(url, getBundleURLCached().replace(/\/[^\/]+$/, "/"));
                url = createSourceBlobURL(`importScripts(${JSON.stringify(url)});`);
            }
            if (typeof url === "string" && isAbsoluteURL(url)) {
                // Create source code blob loading JS file via `importScripts()`
                // to circumvent worker CORS restrictions
                url = createSourceBlobURL(`importScripts(${JSON.stringify(url)});`);
            }
            super(url, options);
        }
    }
    class BlobWorker extends WebWorker {
        constructor(blob, options) {
            const url = window.URL.createObjectURL(blob);
            super(url, options);
        }
        static fromText(source, options) {
            const blob = new window.Blob([source], { type: "text/javascript" });
            return new BlobWorker(blob, options);
        }
    }
    return {
        blob: BlobWorker,
        default: WebWorker
    };
}
let implementation;
function getWorkerImplementation() {
    if (!implementation) {
        implementation = selectWorkerImplementation();
    }
    return implementation;
}
function isWorkerRuntime() {
    const isWindowContext = typeof self !== "undefined" && typeof Window !== "undefined" && self instanceof Window;
    return typeof self !== "undefined" && self.postMessage && !isWindowContext ? true : false;
}

// EXTERNAL MODULE: ./node_modules/debug/src/browser.js
var browser = __webpack_require__(34);
var browser_default = /*#__PURE__*/__webpack_require__.n(browser);

// EXTERNAL MODULE: ./node_modules/observable-fns/dist.esm/subject.js
var subject = __webpack_require__(182);

// EXTERNAL MODULE: ./node_modules/observable-fns/dist.esm/multicast.js
var multicast = __webpack_require__(207);

// EXTERNAL MODULE: ./node_modules/observable-fns/dist.esm/observable.js
var observable = __webpack_require__(15);

// CONCATENATED MODULE: ./node_modules/threads/dist-esm/ponyfills.js
// Based on <https://github.com/es-shims/Promise.allSettled/blob/master/implementation.js>
function allSettled(values) {
    return Promise.all(values.map(item => {
        const onFulfill = (value) => {
            return { status: 'fulfilled', value };
        };
        const onReject = (reason) => {
            return { status: 'rejected', reason };
        };
        const itemPromise = Promise.resolve(item);
        try {
            return itemPromise.then(onFulfill, onReject);
        }
        catch (error) {
            return Promise.reject(error);
        }
    }));
}

// CONCATENATED MODULE: ./node_modules/threads/dist-esm/master/pool-types.js
/** Pool event type. Specifies the type of each `PoolEvent`. */
var PoolEventType;
(function (PoolEventType) {
    PoolEventType["initialized"] = "initialized";
    PoolEventType["taskCanceled"] = "taskCanceled";
    PoolEventType["taskCompleted"] = "taskCompleted";
    PoolEventType["taskFailed"] = "taskFailed";
    PoolEventType["taskQueued"] = "taskQueued";
    PoolEventType["taskQueueDrained"] = "taskQueueDrained";
    PoolEventType["taskStart"] = "taskStart";
    PoolEventType["terminated"] = "terminated";
})(PoolEventType || (PoolEventType = {}));

// EXTERNAL MODULE: ./node_modules/threads/dist-esm/symbols.js
var symbols = __webpack_require__(28);

// CONCATENATED MODULE: ./node_modules/threads/dist-esm/master/thread.js

function fail(message) {
    throw Error(message);
}
/** Thread utility functions. Use them to manage or inspect a `spawn()`-ed thread. */
const Thread = {
    /** Return an observable that can be used to subscribe to all errors happening in the thread. */
    errors(thread) {
        return thread[symbols["a" /* $errors */]] || fail("Error observable not found. Make sure to pass a thread instance as returned by the spawn() promise.");
    },
    /** Return an observable that can be used to subscribe to internal events happening in the thread. Useful for debugging. */
    events(thread) {
        return thread[symbols["b" /* $events */]] || fail("Events observable not found. Make sure to pass a thread instance as returned by the spawn() promise.");
    },
    /** Terminate a thread. Remember to terminate every thread when you are done using it. */
    terminate(thread) {
        return thread[symbols["c" /* $terminate */]]();
    }
};

// CONCATENATED MODULE: ./node_modules/threads/dist-esm/master/pool.js
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};







let nextPoolID = 1;
function createArray(size) {
    const array = [];
    for (let index = 0; index < size; index++) {
        array.push(index);
    }
    return array;
}
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function flatMap(array, mapper) {
    return array.reduce((flattened, element) => [...flattened, ...mapper(element)], []);
}
function slugify(text) {
    return text.replace(/\W/g, " ").trim().replace(/\s+/g, "-");
}
function spawnWorkers(spawnWorker, count) {
    return createArray(count).map(() => ({
        init: spawnWorker(),
        runningTasks: []
    }));
}
class pool_WorkerPool {
    constructor(spawnWorker, optionsOrSize) {
        this.eventSubject = new subject["a" /* default */]();
        this.initErrors = [];
        this.isClosing = false;
        this.nextTaskID = 1;
        this.taskQueue = [];
        const options = typeof optionsOrSize === "number"
            ? { size: optionsOrSize }
            : optionsOrSize || {};
        const { size = defaultPoolSize } = options;
        this.debug = browser_default()(`threads:pool:${slugify(options.name || String(nextPoolID++))}`);
        this.options = options;
        this.workers = spawnWorkers(spawnWorker, size);
        this.eventObservable = Object(multicast["a" /* default */])(observable["b" /* default */].from(this.eventSubject));
        Promise.all(this.workers.map(worker => worker.init)).then(() => this.eventSubject.next({
            type: PoolEventType.initialized,
            size: this.workers.length
        }), error => {
            this.debug("Error while initializing pool worker:", error);
            this.eventSubject.error(error);
            this.initErrors.push(error);
        });
    }
    findIdlingWorker() {
        const { concurrency = 1 } = this.options;
        return this.workers.find(worker => worker.runningTasks.length < concurrency);
    }
    runPoolTask(worker, task) {
        return __awaiter(this, void 0, void 0, function* () {
            const workerID = this.workers.indexOf(worker) + 1;
            this.debug(`Running task #${task.id} on worker #${workerID}...`);
            this.eventSubject.next({
                type: PoolEventType.taskStart,
                taskID: task.id,
                workerID
            });
            try {
                const returnValue = yield task.run(yield worker.init);
                this.debug(`Task #${task.id} completed successfully`);
                this.eventSubject.next({
                    type: PoolEventType.taskCompleted,
                    returnValue,
                    taskID: task.id,
                    workerID
                });
            }
            catch (error) {
                this.debug(`Task #${task.id} failed`);
                this.eventSubject.next({
                    type: PoolEventType.taskFailed,
                    taskID: task.id,
                    error,
                    workerID
                });
            }
        });
    }
    run(worker, task) {
        return __awaiter(this, void 0, void 0, function* () {
            const runPromise = (() => __awaiter(this, void 0, void 0, function* () {
                const removeTaskFromWorkersRunningTasks = () => {
                    worker.runningTasks = worker.runningTasks.filter(someRunPromise => someRunPromise !== runPromise);
                };
                // Defer task execution by one tick to give handlers time to subscribe
                yield delay(0);
                try {
                    yield this.runPoolTask(worker, task);
                }
                finally {
                    removeTaskFromWorkersRunningTasks();
                    if (!this.isClosing) {
                        this.scheduleWork();
                    }
                }
            }))();
            worker.runningTasks.push(runPromise);
        });
    }
    scheduleWork() {
        this.debug(`Attempt de-queueing a task in order to run it...`);
        const availableWorker = this.findIdlingWorker();
        if (!availableWorker)
            return;
        const nextTask = this.taskQueue.shift();
        if (!nextTask) {
            this.debug(`Task queue is empty`);
            this.eventSubject.next({ type: PoolEventType.taskQueueDrained });
            return;
        }
        this.run(availableWorker, nextTask);
    }
    taskCompletion(taskID) {
        return new Promise((resolve, reject) => {
            const eventSubscription = this.events().subscribe(event => {
                if (event.type === PoolEventType.taskCompleted && event.taskID === taskID) {
                    eventSubscription.unsubscribe();
                    resolve(event.returnValue);
                }
                else if (event.type === PoolEventType.taskFailed && event.taskID === taskID) {
                    eventSubscription.unsubscribe();
                    reject(event.error);
                }
                else if (event.type === PoolEventType.terminated) {
                    eventSubscription.unsubscribe();
                    reject(Error("Pool has been terminated before task was run."));
                }
            });
        });
    }
    settled(allowResolvingImmediately = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const getCurrentlyRunningTasks = () => flatMap(this.workers, worker => worker.runningTasks);
            const taskFailures = [];
            const failureSubscription = this.eventObservable.subscribe(event => {
                if (event.type === PoolEventType.taskFailed) {
                    taskFailures.push(event.error);
                }
            });
            if (this.initErrors.length > 0) {
                return Promise.reject(this.initErrors[0]);
            }
            if (allowResolvingImmediately && this.taskQueue.length === 0) {
                yield allSettled(getCurrentlyRunningTasks());
                return taskFailures;
            }
            yield new Promise((resolve, reject) => {
                const subscription = this.eventObservable.subscribe({
                    next(event) {
                        if (event.type === PoolEventType.taskQueueDrained) {
                            subscription.unsubscribe();
                            resolve();
                        }
                    },
                    error: reject // make a pool-wide error reject the completed() result promise
                });
            });
            yield allSettled(getCurrentlyRunningTasks());
            failureSubscription.unsubscribe();
            return taskFailures;
        });
    }
    completed(allowResolvingImmediately = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const settlementPromise = this.settled(allowResolvingImmediately);
            const earlyExitPromise = new Promise((resolve, reject) => {
                const subscription = this.eventObservable.subscribe({
                    next(event) {
                        if (event.type === PoolEventType.taskQueueDrained) {
                            subscription.unsubscribe();
                            resolve(settlementPromise);
                        }
                        else if (event.type === PoolEventType.taskFailed) {
                            subscription.unsubscribe();
                            reject(event.error);
                        }
                    },
                    error: reject // make a pool-wide error reject the completed() result promise
                });
            });
            const errors = yield Promise.race([
                settlementPromise,
                earlyExitPromise
            ]);
            if (errors.length > 0) {
                throw errors[0];
            }
        });
    }
    events() {
        return this.eventObservable;
    }
    queue(taskFunction) {
        const { maxQueuedJobs = Infinity } = this.options;
        if (this.isClosing) {
            throw Error(`Cannot schedule pool tasks after terminate() has been called.`);
        }
        if (this.initErrors.length > 0) {
            throw this.initErrors[0];
        }
        const taskID = this.nextTaskID++;
        const taskCompletion = this.taskCompletion(taskID);
        taskCompletion.catch((error) => {
            // Prevent unhandled rejections here as we assume the user will use
            // `pool.completed()`, `pool.settled()` or `task.catch()` to handle errors
            this.debug(`Task #${taskID} errored:`, error);
        });
        const task = {
            id: taskID,
            run: taskFunction,
            cancel: () => {
                if (this.taskQueue.indexOf(task) === -1)
                    return;
                this.taskQueue = this.taskQueue.filter(someTask => someTask !== task);
                this.eventSubject.next({
                    type: PoolEventType.taskCanceled,
                    taskID: task.id
                });
            },
            then: taskCompletion.then.bind(taskCompletion)
        };
        if (this.taskQueue.length >= maxQueuedJobs) {
            throw Error("Maximum number of pool tasks queued. Refusing to queue another one.\n" +
                "This usually happens for one of two reasons: We are either at peak " +
                "workload right now or some tasks just won't finish, thus blocking the pool.");
        }
        this.debug(`Queueing task #${task.id}...`);
        this.taskQueue.push(task);
        this.eventSubject.next({
            type: PoolEventType.taskQueued,
            taskID: task.id
        });
        this.scheduleWork();
        return task;
    }
    terminate(force) {
        return __awaiter(this, void 0, void 0, function* () {
            this.isClosing = true;
            if (!force) {
                yield this.completed(true);
            }
            this.eventSubject.next({
                type: PoolEventType.terminated,
                remainingQueue: [...this.taskQueue]
            });
            this.eventSubject.complete();
            yield Promise.all(this.workers.map((worker) => __awaiter(this, void 0, void 0, function* () { return Thread.terminate(yield worker.init); })));
        });
    }
}
pool_WorkerPool.EventType = PoolEventType;
/**
 * Thread pool constructor. Creates a new pool and spawns its worker threads.
 */
function PoolConstructor(spawnWorker, optionsOrSize) {
    // The function exists only so we don't need to use `new` to create a pool (we still can, though).
    // If the Pool is a class or not is an implementation detail that should not concern the user.
    return new pool_WorkerPool(spawnWorker, optionsOrSize);
}
PoolConstructor.EventType = PoolEventType;
/**
 * Thread pool constructor. Creates a new pool and spawns its worker threads.
 */
const Pool = PoolConstructor;

// EXTERNAL MODULE: ./node_modules/threads/dist-esm/master/spawn.js
var spawn = __webpack_require__(208);

// CONCATENATED MODULE: ./node_modules/threads/dist-esm/master/index.js





/** Separate class to spawn workers from source code blobs or strings. */
const master_BlobWorker = getWorkerImplementation().blob;
/** Worker implementation. Either web worker or a node.js Worker class. */
const master_Worker = getWorkerImplementation().default;

// EXTERNAL MODULE: ./node_modules/threads/dist-esm/worker/index.js
var dist_esm_worker = __webpack_require__(209);

// EXTERNAL MODULE: ./node_modules/threads/dist-esm/serializers.js
var serializers = __webpack_require__(92);

// EXTERNAL MODULE: ./node_modules/threads/dist-esm/transferable.js
var transferable = __webpack_require__(51);

// CONCATENATED MODULE: ./node_modules/threads/dist-esm/index.js







/***/ })
/******/ ]);