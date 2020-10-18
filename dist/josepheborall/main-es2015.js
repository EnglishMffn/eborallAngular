(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"grid-wrapper container-fluid\">\n  <app-navigation class=\"layout-underline\"></app-navigation>\n  <div class=\"row no-gutter full-height\">\n    <main [@fadeAnimation]=\"getState(o)\" class=\"col-12\">\n      <div class=\"container\">\n        <router-outlet #o=\"outlet\"></router-outlet>\n      </div>\n    </main>\n  </div>\n</div>\n\n<span class=\"vert-elements\">\n  <span class=\"vert-line\"></span>\n  <span class=\"vert-name\">Joseph Eborall</span>\n</span>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/button/button.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/button/button.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a class=\"button {{btnStyle}}\" routerLink=\"{{link}}\">{{cta}}</a>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact-page/contact-page.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact-page/contact-page.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Contact</h1>\n<p class=\"lede\">Every project is unique. Tell me a bit about yours and see how much time and energy I can save you.\n</p>\n<form autocomplete=\"on\" class=\"uk-grid-small\" uk-grid method=\"post\"\n  action=\"https://formspree.io/contact@josepheborall.com\">\n  <div class=\"uk-inline uk-width-1-2@l\">\n    <span class=\"uk-form-icon\" uk-icon=\"icon: user\"></span>\n    <input class=\"uk-input\" type=\"text\" name=\"name\" placeholder=\"Name\">\n  </div>\n\n  <div class=\"uk-inline uk-width-1-2@l\">\n    <span class=\"uk-form-icon\" uk-icon=\"icon: receiver\"></span>\n    <input class=\"uk-input\" type=\"phone\" name=\"phone-number\" placeholder=\"(XXX) XXX-XXXX\">\n  </div>\n  <div class=\"uk-inline uk-width-1-1\">\n    <span class=\"uk-form-icon\" uk-icon=\"icon: mail\"></span>\n    <input class=\"uk-input\" type=\"email\" name=\"email\" placeholder=\"Email Address\">\n  </div>\n  <div class=\"uk-width-1-1\">\n    <textarea class=\"uk-textarea\" name=\"message\" type=\"text\"\n      style=\"border-radius: 25px; padding: 25px; min-width: 100%; min-height: 150px;\"\n      placeholder=\"Message...\"></textarea>\n  </div>\n  <div class=\"uk-width-1-1\">\n    <button class=\"uk-button uk-button-primary pill-button uk-width-1-1\" uk-icon=\"chevron-right\"\n      type=\"submit\">Submit</button>\n  </div>\n</form>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/home-page.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/home-page.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <h1>Eborall Digital Solutions</h1>\n  <p>\n    Conversion-optimized websites. Data-driven print design. Segmented Email Marketing. I've helped dozens of clients\n    find digital solutions to their business problems.\n  </p>\n  <p>\n    Let me take care of the technical details so that you can spend more time doing what you love – serving customers,\n    fulfilling orders, and taking your business to the next level.\n  </p>\n</div>\n<br>\n<div class=\"row\">\n  <app-button cta='My Work' btnStyle='' link=\"work\"></app-button>\n  <app-button cta='Contact Me' btnStyle='text' link=\"contact\"></app-button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/navigation.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/navigation.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header class=\"layout-underline\">\n  <nav>\n    <ul>\n      <li><a [routerLink]=\"['/work']\" routerLinkActive=\"active\">My Work</a></li>\n      <li><a [routerLink]=\"['']\" class=\"logo\"><img src=\"../../assets/img/eborall-logo.svg\" alt=\"Joseph Eborall\" height=\"65\"></a></li>\n      <li><a [routerLink]=\"['/contact']\" routerLinkActive=\"active\">Contact</a>\n    </ul>\n  </nav>\n</header>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/portfolio-detail/portfolio-detail.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/portfolio-detail/portfolio-detail.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a [routerLink]=\"['..']\" class=\"back-toggle\">Back</a>\n\n<article>\n<div class=\"row\">\n  <section class=\"col-md-12\">\n    <div class=\"project-head\">\n      <h1 class=\"headline\">{{project.fields.projectName}}</h1>\n      <div class=\"summary\">{{project.fields.summary}}</div>\n    </div>\n\n\n    <a *ngIf=\"project.fields.mainMedia\" href=\"{{project.fields.mainMedia.fields.file.url}}\"><img src=\"{{project.fields.mainMedia.fields.file.url}}?&w=1180&h=750\" alt=\"{{project.fields.projectThumb.fields.description}}\" class=\"img-fluid\" /></a>\n  </section>\n\n  <section class=\"row\">\n    <main class=\"col-lg-6\">\n      <markdown>{{project.fields.body}}</markdown>\n      <section class=\"row\">\n        <div class=\"col-md-6\">\n          <dl>\n            <dt>Client</dt>\n            <dd>{{project.fields.client}}</dd>\n            </dl>\n          <dl>\n            <dt>Sector</dt>\n            <dd>{{project.fields.typeOfClient}}</dd>\n            </dl>\n          </div>\n        <div class=\"col-md-6\">\n          <dl>\n            <dt>Discipline</dt>\n            <dd>{{project.fields.typeOfWork}}</dd>\n            </dl>\n          <dl>\n            <dt>Tools Used</dt>\n            <dd></dd>\n            </dl>\n          </div>\n        </section>\n    </main>\n    <aside class=\"col-md-6\">\n      <ul>\n        <li *ngFor=\"let image of project.fields.media\">\n          <a href=\"{{image.fields.file.url}}\"><img src=\"{{image.fields.file.url}}?fit=thumb&w=570&h=360\" class=\"img-fluid\"></a>\n        </li>\n      </ul>\n    </aside>\n  </section>\n</div>\n</article>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/portfolio-list/portfolio-list.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/portfolio-list/portfolio-list.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-sm-12 col-md-4 h-100\" *ngFor=\"let project of projects; index as i\">\n    <a [routerLink]=\"['/work', project.fields.slug]\" class=\"project\">\n      <img src=\"{{project.fields.projectThumb.fields.file.url}}?fit=thumb&w=350&h=200&f=face\">\n      <div class=\"project-details\">\n        <h2>{{ project.fields.projectName }}</h2>\n        <strong class=\"summary\">{{project.fields.summary}}</strong>\n      </div>\n    </a>\n    </div>\n</div>\n<!-- <app-button btnStyle=\"full-width\" cta=\"Contact Me\" link=\"../contact\"></app-button> -->\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
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
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
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

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
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

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

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

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
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

/***/ "./src/animations/fade.animation.ts":
/*!******************************************!*\
  !*** ./src/animations/fade.animation.ts ***!
  \******************************************/
/*! exports provided: fadeAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeAnimation", function() { return fadeAnimation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");

// fade.animation.ts

const fadeAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fadeAnimation', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 })
        ], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }))
        ], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 }))
        ], { optional: true })
    ])
]);


/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".active {\n  color: #000; }\n\na {\n  color: #ccc; }\n\nmain,\naside {\n  transition: .75s ease-in-out; }\n\naside {\n  background: #f4f5f9; }\n\n.full-height {\n  min-height: 100vh; }\n\n.hide-slideshow {\n  -webkit-animation: fadeOut .75s ease-in-out;\n          animation: fadeOut .75s ease-in-out; }\n\n.show-slideshow {\n  -webkit-animation: fadeIn 3s ease-in-out;\n          animation: fadeIn 3s ease-in-out; }\n\n@-webkit-keyframes fadeOut {\n  0% {\n    flex: 0 0 50%;\n    opacity: 1; }\n  100% {\n    flex: 0 0 0;\n    opacity: 0; } }\n\n@keyframes fadeOut {\n  0% {\n    flex: 0 0 50%;\n    opacity: 1; }\n  100% {\n    flex: 0 0 0;\n    opacity: 0; } }\n\n@-webkit-keyframes fadeIn {\n  0% {\n    opacity: inherit; }\n  100% {\n    opacity: 1; } }\n\n@keyframes fadeIn {\n  0% {\n    opacity: inherit; }\n  100% {\n    opacity: 1; } }\n\n.container {\n  transition: .75s ease-in-out; }\n\n.full-article > .container {\n  max-width: 1200px; }\n\n.vert-elements {\n  position: fixed;\n  left: calc(5%);\n  top: 0;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  z-index: -100; }\n\n.vert-line {\n  display: inline-block;\n  border-left: 1px solid #c9c9c9;\n  height: 100%;\n  position: relative;\n  left: 50%; }\n\n.vert-name {\n  transform: rotate(90deg);\n  text-transform: uppercase;\n  letter-spacing: 5px;\n  text-align: center;\n  background: #fff;\n  color: #c9c9c9;\n  display: block;\n  padding: 0 25px; }\n\n.layout-underline {\n  border-bottom: 1px solid #c9c9c9; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb3NlcGhlYm9yYWxsL2FwcC9qb3NlcGhlYm9yYWxsLmNvbS9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9qb3NlcGhlYm9yYWxsL2FwcC9qb3NlcGhlYm9yYWxsLmNvbS9zcmMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxXQ1lVLEVBQUE7O0FEVFo7RUFDRSxXQUFXLEVBQUE7O0FBR2I7O0VBRUUsNEJBQTRCLEVBQUE7O0FBRzlCO0VBQ0UsbUJBQW1CLEVBQUE7O0FBSXJCO0VBQ0UsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsMkNBQW1DO1VBQW5DLG1DQUFtQyxFQUFBOztBQUdyQztFQUNFLHdDQUFnQztVQUFoQyxnQ0FBZ0MsRUFBQTs7QUFJbEM7RUFDRTtJQUNFLGFBQWE7SUFDYixVQUFVLEVBQUE7RUFJWjtJQUNFLFdBQVc7SUFDWCxVQUFVLEVBQUEsRUFBQTs7QUFUZDtFQUNFO0lBQ0UsYUFBYTtJQUNiLFVBQVUsRUFBQTtFQUlaO0lBQ0UsV0FBVztJQUNYLFVBQVUsRUFBQSxFQUFBOztBQUtkO0VBQ0U7SUFDRSxnQkFBZ0IsRUFBQTtFQUdsQjtJQUNFLFVBQVUsRUFBQSxFQUFBOztBQU5kO0VBQ0U7SUFDRSxnQkFBZ0IsRUFBQTtFQUdsQjtJQUNFLFVBQVUsRUFBQSxFQUFBOztBQUlkO0VBQ0UsNEJBQTRCLEVBQUE7O0FBRzlCO0VBQ0UsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxNQUFNO0VBQ04sWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsYUFBYSxFQUFBOztBQUdmO0VBQ0UscUJBQXFCO0VBQ3JCLDhCQ3pEb0I7RUQwRHBCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsU0FBUyxFQUFBOztBQUdYO0VBQ0Usd0JBQXdCO0VBQ3hCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsY0FBYztFQUNkLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxnQ0MzRW9CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICd+c3JjL3ZhcmlhYmxlcyc7XG5cbi5hY3RpdmUge1xuICBjb2xvcjogJGJsYWNrO1xufVxuXG5hIHtcbiAgY29sb3I6ICNjY2M7XG59XG5cbm1haW4sXG5hc2lkZSB7XG4gIHRyYW5zaXRpb246IC43NXMgZWFzZS1pbi1vdXQ7XG59XG5cbmFzaWRlIHtcbiAgYmFja2dyb3VuZDogI2Y0ZjVmOTtcbn1cblxuLy8gTWFrZSBDb250ZW50IEZ1bGwtSGVpZ2h0IG9mIFdpbmRvd1xuLmZ1bGwtaGVpZ2h0IHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbi5oaWRlLXNsaWRlc2hvdyB7XG4gIGFuaW1hdGlvbjogZmFkZU91dCAuNzVzIGVhc2UtaW4tb3V0O1xufVxuXG4uc2hvdy1zbGlkZXNob3cge1xuICBhbmltYXRpb246IGZhZGVJbiAzcyBlYXNlLWluLW91dDtcbn1cblxuLy8gRmFkZSBvdXQgYW5kIGRpc3NhcGVhclxuQGtleWZyYW1lcyBmYWRlT3V0IHtcbiAgMCUge1xuICAgIGZsZXg6IDAgMCA1MCU7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG5cbiAgMTAwJSB7XG4gICAgZmxleDogMCAwIDA7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuXG4vLyBGYWRlIG91dCBhbmQgZGlzc2FwZWFyXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiBpbmhlcml0O1xuICB9XG5cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG4uY29udGFpbmVyIHtcbiAgdHJhbnNpdGlvbjogLjc1cyBlYXNlLWluLW91dDtcbn1cblxuLmZ1bGwtYXJ0aWNsZSA+IC5jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbn1cblxuLnZlcnQtZWxlbWVudHMge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IGNhbGMoNSUpO1xuICB0b3A6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgei1pbmRleDogLTEwMDtcbn1cblxuLnZlcnQtbGluZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogNTAlO1xufVxuXG4udmVydC1uYW1lIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGNvbG9yOiAjYzljOWM5O1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMCAyNXB4O1xufVxuXG4ubGF5b3V0LXVuZGVybGluZSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xufVxuIiwiLy8gR2xvYmFsIFN0eWxpbmcgVmFyaWFibGVzXG4kYnJhbmQtcHJpbWFyeTogI2U5MDAzOTtcblxuXG4vLyBDYWxjdWxhdGUgTWVkaXVtIEVtcGhhc2lzIENvbG9yXG5AZnVuY3Rpb24gbWVkaXVtLWVtcGhhc2lzKCRpbnB1dC1jb2xvcikge1xuICBAcmV0dXJuIHJnYmEoJGlucHV0LWNvbG9yLCAuMTIpO1xufVxuXG4vLyBDYWxjdWxhdGUgTG93IEVtcGhhc2lzIENvbG9yXG5AZnVuY3Rpb24gbG93LWVtcGhhc2lzKCRpbnB1dC1jb2xvcikge1xuICBAcmV0dXJuIHJnYmEoJGlucHV0LWNvbG9yLCAuMDUpO1xufVxuXG4vLyBDb2xvciBOZXV0cmFsc1xuJGJsYWNrOiAjMDAwO1xuJHdoaXRlOiAjZmZmO1xuJGdyYXk6ICM3ODc3ODA7XG4kbGlnaHQtZ3JheTogIzhkOGU5MztcblxuJGJvcmRlci1jb2xvcjogI2M5YzljOTtcblxuLy8gTGF5b3V0IFZhcmlhYmxlcyBmb3IgY29uc2lzdGVuY3lcbiRnbG9iYWwtcGFkZGluZzogMjVweDtcbiRnbG9iYWwtbWFyZ2luOiAyNXB4O1xuJGdsb2JhbC1yYWRpdXM6IDVweDtcbiJdfQ== */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _animations_fade_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animations/fade.animation */ "./src/animations/fade.animation.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");




let AppComponent = class AppComponent {
    constructor(titleService) {
        this.titleService = titleService;
    }
    getState(outlet) {
        return outlet.isActivated ? outlet.activatedRoute : '';
    }
    setTitle(newTitle) {
        this.titleService.setTitle(newTitle);
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        animations: [_animations_fade_animation__WEBPACK_IMPORTED_MODULE_2__["fadeAnimation"]],
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _contentful_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contentful.service */ "./src/app/contentful.service.ts");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-markdown */ "./node_modules/ngx-markdown/fesm2015/ngx-markdown.js");
/* harmony import */ var _portfolio_list_portfolio_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./portfolio-list/portfolio-list.component */ "./src/app/portfolio-list/portfolio-list.component.ts");
/* harmony import */ var _portfolio_detail_portfolio_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./portfolio-detail/portfolio-detail.component */ "./src/app/portfolio-detail/portfolio-detail.component.ts");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./contact-page/contact-page.component */ "./src/app/contact-page/contact-page.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./button/button.component */ "./src/app/button/button.component.ts");

// ./src/app/app.module.ts



// Browser Animations

// ROUTING
// import { AppRoutingModule } from './app-routing.module';

// SERVICES
// Contentful Import

// Markdown

// Site Components






const routes = [
    { path: '', redirectTo: '/work', pathMatch: 'full' },
    { path: 'work', component: _portfolio_list_portfolio_list_component__WEBPACK_IMPORTED_MODULE_8__["PortfolioListComponent"] },
    { path: 'work/:slug', component: _portfolio_detail_portfolio_detail_component__WEBPACK_IMPORTED_MODULE_9__["PortfolioDetailComponent"] },
    { path: 'contact', component: _contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_11__["ContactPageComponent"] }
];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _portfolio_list_portfolio_list_component__WEBPACK_IMPORTED_MODULE_8__["PortfolioListComponent"],
            _portfolio_detail_portfolio_detail_component__WEBPACK_IMPORTED_MODULE_9__["PortfolioDetailComponent"],
            _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_10__["HomePageComponent"],
            _contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_11__["ContactPageComponent"],
            _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_12__["NavigationComponent"],
            _button_button_component__WEBPACK_IMPORTED_MODULE_13__["ButtonComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes),
            ngx_markdown__WEBPACK_IMPORTED_MODULE_7__["MarkdownModule"].forRoot(),
        ],
        providers: [
            _contentful_service__WEBPACK_IMPORTED_MODULE_6__["ContentfulService"],
        ],
        bootstrap: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
        ]
    })
], AppModule);



/***/ }),

/***/ "./src/app/button/button.component.scss":
/*!**********************************************!*\
  !*** ./src/app/button/button.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".button {\n  background: #e90039;\n  border-radius: 100px;\n  color: #fff;\n  font-weight: bold;\n  margin-right: 24px;\n  padding: 20px 30px;\n  text-align: center;\n  text-decoration: none; }\n  .button:hover {\n    background: #d00033; }\n  .button.white {\n    background: #fff;\n    border: 1px solid #ccc; }\n  .button.outlined {\n    border: 1px solid #000;\n    color: #000; }\n  .button.outlined:hover {\n      background: rgba(0, 0, 0, 0.05); }\n  .button.outlined:active {\n      background: rgba(0, 0, 0, 0.12); }\n  .button.large {\n    margin-right: 12px;\n    padding: 25px 35px; }\n  .button.full-width {\n    display: block; }\n  .button.small {\n    margin-right: 36px;\n    padding: 10px 20px; }\n  .button.text {\n    background: transparent;\n    color: #000; }\n  .button.text:hover {\n      background: rgba(0, 0, 0, 0.05); }\n  .button.text:active {\n      background: rgba(0, 0, 0, 0.12); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb3NlcGhlYm9yYWxsL2FwcC9qb3NlcGhlYm9yYWxsLmNvbS9zcmMvYXBwL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvam9zZXBoZWJvcmFsbC9hcHAvam9zZXBoZWJvcmFsbC5jb20vc3JjL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsbUJDRnFCO0VER3JCLG9CQUFvQjtFQUNwQixXQ1dVO0VEVlYsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQixFQUFBO0VBUnZCO0lBV0ksbUJBQXFDLEVBQUE7RUFYekM7SUFlSSxnQkNEUTtJREVSLHNCQUFzQixFQUFBO0VBaEIxQjtJQW9CSSxzQkNQUTtJRFFSLFdDUlEsRUFBQTtFRGJaO01Bd0JNLCtCQ1hNLEVBQUE7RURiWjtNQTRCTSwrQkNmTSxFQUFBO0VEYlo7SUFpQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQixFQUFBO0VBbEN0QjtJQXNDSSxjQUFjLEVBQUE7RUF0Q2xCO0lBMENJLGtCQUFrQjtJQUNsQixrQkFBa0IsRUFBQTtFQTNDdEI7SUErQ0ksdUJBQXVCO0lBQ3ZCLFdDbkNRLEVBQUE7RURiWjtNQW1ETSwrQkN0Q00sRUFBQTtFRGJaO01BdURNLCtCQzFDTSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ35zcmMvdmFyaWFibGVzJztcblxuLmJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICRicmFuZC1wcmltYXJ5O1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgY29sb3I6ICR3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1yaWdodDogMjRweDtcbiAgcGFkZGluZzogMjBweCAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oJGJyYW5kLXByaW1hcnksIDUpO1xuICB9XG5cbiAgJi53aGl0ZSB7XG4gICAgYmFja2dyb3VuZDogJHdoaXRlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIH1cblxuICAmLm91dGxpbmVkIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkYmxhY2s7XG4gICAgY29sb3I6ICRibGFjaztcblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogbG93LWVtcGhhc2lzKCRibGFjayk7XG4gICAgfVxuXG4gICAgJjphY3RpdmUge1xuICAgICAgYmFja2dyb3VuZDogbWVkaXVtLWVtcGhhc2lzKCRibGFjayk7XG4gICAgfVxuICB9XG5cbiAgJi5sYXJnZSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICAgIHBhZGRpbmc6IDI1cHggMzVweDtcbiAgfVxuXG4gICYuZnVsbC13aWR0aCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAmLnNtYWxsIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDM2cHg7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICB9XG5cbiAgJi50ZXh0IHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogJGJsYWNrO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiBsb3ctZW1waGFzaXMoJGJsYWNrKTtcbiAgICB9XG5cbiAgICAmOmFjdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kOiBtZWRpdW0tZW1waGFzaXMoJGJsYWNrKTtcbiAgICB9XG4gIH1cbn1cbiIsIi8vIEdsb2JhbCBTdHlsaW5nIFZhcmlhYmxlc1xuJGJyYW5kLXByaW1hcnk6ICNlOTAwMzk7XG5cblxuLy8gQ2FsY3VsYXRlIE1lZGl1bSBFbXBoYXNpcyBDb2xvclxuQGZ1bmN0aW9uIG1lZGl1bS1lbXBoYXNpcygkaW5wdXQtY29sb3IpIHtcbiAgQHJldHVybiByZ2JhKCRpbnB1dC1jb2xvciwgLjEyKTtcbn1cblxuLy8gQ2FsY3VsYXRlIExvdyBFbXBoYXNpcyBDb2xvclxuQGZ1bmN0aW9uIGxvdy1lbXBoYXNpcygkaW5wdXQtY29sb3IpIHtcbiAgQHJldHVybiByZ2JhKCRpbnB1dC1jb2xvciwgLjA1KTtcbn1cblxuLy8gQ29sb3IgTmV1dHJhbHNcbiRibGFjazogIzAwMDtcbiR3aGl0ZTogI2ZmZjtcbiRncmF5OiAjNzg3NzgwO1xuJGxpZ2h0LWdyYXk6ICM4ZDhlOTM7XG5cbiRib3JkZXItY29sb3I6ICNjOWM5Yzk7XG5cbi8vIExheW91dCBWYXJpYWJsZXMgZm9yIGNvbnNpc3RlbmN5XG4kZ2xvYmFsLXBhZGRpbmc6IDI1cHg7XG4kZ2xvYmFsLW1hcmdpbjogMjVweDtcbiRnbG9iYWwtcmFkaXVzOiA1cHg7XG4iXX0= */");

/***/ }),

/***/ "./src/app/button/button.component.ts":
/*!********************************************!*\
  !*** ./src/app/button/button.component.ts ***!
  \********************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ButtonComponent = class ButtonComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ButtonComponent.prototype, "cta", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ButtonComponent.prototype, "btnStyle", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ButtonComponent.prototype, "link", void 0);
ButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-button',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./button.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/button/button.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./button.component.scss */ "./src/app/button/button.component.scss")).default]
    })
], ButtonComponent);



/***/ }),

/***/ "./src/app/contact-page/contact-page.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/contact-page/contact-page.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QtcGFnZS9jb250YWN0LXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/contact-page/contact-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/contact-page/contact-page.component.ts ***!
  \********************************************************/
/*! exports provided: ContactPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageComponent", function() { return ContactPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContactPageComponent = class ContactPageComponent {
};
ContactPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact-page/contact-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact-page.component.scss */ "./src/app/contact-page/contact-page.component.scss")).default]
    })
], ContactPageComponent);



/***/ }),

/***/ "./src/app/contentful.service.ts":
/*!***************************************!*\
  !*** ./src/app/contentful.service.ts ***!
  \***************************************/
/*! exports provided: ContentfulService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentfulService", function() { return ContentfulService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! contentful */ "./node_modules/contentful/dist/es-modules/contentful.js");


// import Contentful createClient and type for `Entry`

// configure the service with tokens and content type ids
// SET YOU OWN CONFIG here
const CONFIG = {
    space: 'yoo4e4pv9t7m',
    accessToken: 'fc0e321b58b041271b60fbb48110dac5d4066d8751c46ab96ce7ff533028dceb',
    contentTypeIds: {
        work: 'work',
        blog: 'blog'
    }
};
let ContentfulService = class ContentfulService {
    constructor() {
        this.cdaClient = Object(contentful__WEBPACK_IMPORTED_MODULE_2__["createClient"])({
            space: CONFIG.space,
            accessToken: CONFIG.accessToken
        });
    }
    // fetch products
    getProjects(query) {
        return this.cdaClient
            .getEntries(Object.assign({
            content_type: CONFIG.contentTypeIds.work
        }, query))
            .then(res => res.items);
    }
    getProject(slug) {
        return this.getProjects({ "fields.slug": slug }).then(items => items[0]);
    }
};
ContentfulService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ContentfulService);



/***/ }),

/***/ "./src/app/home-page/home-page.component.scss":
/*!****************************************************!*\
  !*** ./src/app/home-page/home-page.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/home-page/home-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomePageComponent = class HomePageComponent {
};
HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/home-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home-page.component.scss */ "./src/app/home-page/home-page.component.scss")).default]
    })
], HomePageComponent);



/***/ }),

/***/ "./src/app/navigation/navigation.component.scss":
/*!******************************************************!*\
  !*** ./src/app/navigation/navigation.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("nav {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  align-items: center;\n  padding: 25px; }\n  nav .toggle {\n    display: none; }\n  nav a {\n    color: #8d8e93;\n    font-weight: normal;\n    font-size: 16px;\n    transition: all .15s ease;\n    text-decoration: none;\n    text-transform: uppercase;\n    letter-spacing: 1px; }\n  nav a:hover {\n      color: #000;\n      font-weight: bold; }\n  nav a.active {\n      color: #000;\n      font-weight: bold;\n      padding-bottom: 5px;\n      border-bottom: 2px solid #e90039; }\n  nav .logo {\n    display: inline-block;\n    text-decoration: none; }\n  nav .logo img {\n      vertical-align: middle; }\n  nav ul {\n    display: flex;\n    list-style: none;\n    justify-content: space-between;\n    flex-direction: row;\n    align-items: center; }\n  nav li {\n    padding: 0 25px; }\n  .layout-underline {\n  border-bottom: 1px solid #c9c9c9;\n  margin-bottom: 25px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb3NlcGhlYm9yYWxsL2FwcC9qb3NlcGhlYm9yYWxsLmNvbS9zcmMvYXBwL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9qb3NlcGhlYm9yYWxsL2FwcC9qb3NlcGhlYm9yYWxsLmNvbS9zcmMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsYUNnQm1CLEVBQUE7RURyQnJCO0lBUUksYUFBYSxFQUFBO0VBUmpCO0lBWUksY0NJZ0I7SURIaEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZix5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixtQkFBbUIsRUFBQTtFQWxCdkI7TUFxQk0sV0NSTTtNRFNOLGlCQUFpQixFQUFBO0VBdEJ2QjtNQTBCTSxXQ2JNO01EY04saUJBQWlCO01BQ2pCLG1CQUFtQjtNQUNuQixnQ0M5QmlCLEVBQUE7RURDdkI7SUFrQ0kscUJBQXFCO0lBQ3JCLHFCQUFxQixFQUFBO0VBbkN6QjtNQXNDTSxzQkFBc0IsRUFBQTtFQXRDNUI7SUEyQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLG1CQUFtQixFQUFBO0VBL0N2QjtJQW1ESSxlQzlCaUIsRUFBQTtFRGtDckI7RUFDRSxnQ0N0Q29CO0VEdUNwQixtQkNuQ2tCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICd+c3JjL3ZhcmlhYmxlcyc7XG5cbm5hdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6ICRnbG9iYWwtcGFkZGluZztcblxuICAudG9nZ2xlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgYSB7XG4gICAgY29sb3I6ICRsaWdodC1ncmF5O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAuMTVzIGVhc2U7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcblxuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6ICRibGFjaztcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cblxuICAgICYuYWN0aXZlIHtcbiAgICAgIGNvbG9yOiAkYmxhY2s7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJGJyYW5kLXByaW1hcnk7XG4gICAgfVxuICB9XG5cbiAgLmxvZ28ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cbiAgICBpbWcge1xuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB9XG4gIH1cblxuICB1bCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICBsaSB7XG4gICAgcGFkZGluZzogMCAkZ2xvYmFsLXBhZGRpbmc7XG4gIH1cbn1cblxuLmxheW91dC11bmRlcmxpbmUge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGJvcmRlci1jb2xvcjtcbiAgbWFyZ2luLWJvdHRvbTogJGdsb2JhbC1tYXJnaW47XG59XG5cbi8vIC8vIE1vYmlsZSBTdHlsaW5nXG4vLyBAbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcbi8vICAgbmF2IHtcblxuLy8gICAgIC50b2dnbGUge1xuLy8gICAgICAgZGlzcGxheTogYmxvY2s7XG4vLyAgICAgfVxuXG4vLyAgICAgdWwge1xuLy8gICAgICAgZGlzcGxheTogbm9uZTtcbi8vICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4vLyAgICAgICBmbGV4LWJhc2lzOiAxMDAlO1xuLy8gICAgICAgZmxleC1ncm93OiAxO1xuLy8gICAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuLy8gICAgICAgYm94LXNoYWRvdzogMCAwIDMwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuLy8gICAgICAgcGFkZGluZzogMTVweCAhaW1wb3J0YW50O1xuLy8gICAgICAgei1pbmRleDogMzAwMDtcbi8vICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4vLyAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuLy8gICAgIH1cblxuLy8gICAgIGxpIHtcbi8vICAgICAgIG1hcmdpbjogOHB4IDA7XG5cbi8vICAgICAgIGEge1xuLy8gICAgICAgICBkaXNwbGF5OiBibG9jaztcblxuLy8gICAgICAgICAmOmhvdmVyIHtcbi8vICAgICAgICAgICBjb2xvcjogIzAwMDtcbi8vICAgICAgICAgfVxuLy8gICAgICAgfVxuLy8gICAgIH1cblxuLy8gICB9XG5cbi8vICAgLmFjdGl2ZSB7XG4vLyAgICAgZGlzcGxheTogZmxleDtcbi8vICAgfVxuLy8gfVxuIiwiLy8gR2xvYmFsIFN0eWxpbmcgVmFyaWFibGVzXG4kYnJhbmQtcHJpbWFyeTogI2U5MDAzOTtcblxuXG4vLyBDYWxjdWxhdGUgTWVkaXVtIEVtcGhhc2lzIENvbG9yXG5AZnVuY3Rpb24gbWVkaXVtLWVtcGhhc2lzKCRpbnB1dC1jb2xvcikge1xuICBAcmV0dXJuIHJnYmEoJGlucHV0LWNvbG9yLCAuMTIpO1xufVxuXG4vLyBDYWxjdWxhdGUgTG93IEVtcGhhc2lzIENvbG9yXG5AZnVuY3Rpb24gbG93LWVtcGhhc2lzKCRpbnB1dC1jb2xvcikge1xuICBAcmV0dXJuIHJnYmEoJGlucHV0LWNvbG9yLCAuMDUpO1xufVxuXG4vLyBDb2xvciBOZXV0cmFsc1xuJGJsYWNrOiAjMDAwO1xuJHdoaXRlOiAjZmZmO1xuJGdyYXk6ICM3ODc3ODA7XG4kbGlnaHQtZ3JheTogIzhkOGU5MztcblxuJGJvcmRlci1jb2xvcjogI2M5YzljOTtcblxuLy8gTGF5b3V0IFZhcmlhYmxlcyBmb3IgY29uc2lzdGVuY3lcbiRnbG9iYWwtcGFkZGluZzogMjVweDtcbiRnbG9iYWwtbWFyZ2luOiAyNXB4O1xuJGdsb2JhbC1yYWRpdXM6IDVweDtcbiJdfQ== */");

/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavigationComponent = class NavigationComponent {
    constructor() { }
    ngOnInit() {
    }
};
NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navigation',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navigation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/navigation.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navigation.component.scss */ "./src/app/navigation/navigation.component.scss")).default]
    })
], NavigationComponent);



/***/ }),

/***/ "./src/app/portfolio-detail/portfolio-detail.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/portfolio-detail/portfolio-detail.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".project-head {\n  display: flex;\n  justify-content: space-between;\n  align-items: center; }\n  .project-head .headline {\n    font-size: 34px; }\n  aside li {\n  list-style: none;\n  margin-bottom: 20px; }\n  .back-toggle {\n  color: black;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  margin-left: -75px; }\n  img {\n  transition: .25s ease; }\n  img:hover {\n    box-shadow: 0 0 30px rgba(0, 0, 0, 0.12);\n    transform: scale(1.05); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb3NlcGhlYm9yYWxsL2FwcC9qb3NlcGhlYm9yYWxsLmNvbS9zcmMvYXBwL3BvcnRmb2xpby1kZXRhaWwvcG9ydGZvbGlvLWRldGFpbC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9qb3NlcGhlYm9yYWxsL2FwcC9qb3NlcGhlYm9yYWxsLmNvbS9zcmMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQixFQUFBO0VBSHJCO0lBTUksZUFBZSxFQUFBO0VBSW5CO0VBRUksZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBO0VBSXZCO0VBQ0UsWUFBWTtFQUNaLHdCQUFnQjtFQUFoQixnQkFBZ0I7RUFDaEIsTUFBTTtFQUNOLGtCQUFrQixFQUFBO0VBR3BCO0VBQ0UscUJBQXFCLEVBQUE7RUFEdkI7SUFJSSx3Q0NmUTtJRGdCUixzQkFBc0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BvcnRmb2xpby1kZXRhaWwvcG9ydGZvbGlvLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ35zcmMvdmFyaWFibGVzJztcblxuLnByb2plY3QtaGVhZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAuaGVhZGxpbmUge1xuICAgIGZvbnQtc2l6ZTogMzRweDtcbiAgfVxufVxuXG5hc2lkZSB7XG4gIGxpIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbn1cblxuLmJhY2stdG9nZ2xlIHtcbiAgY29sb3I6IGJsYWNrO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIG1hcmdpbi1sZWZ0OiAtNzVweDtcbn1cblxuaW1nIHtcbiAgdHJhbnNpdGlvbjogLjI1cyBlYXNlO1xuXG4gICY6aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoJGJsYWNrLCAuMTIpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gIH1cbn1cbiIsIi8vIEdsb2JhbCBTdHlsaW5nIFZhcmlhYmxlc1xuJGJyYW5kLXByaW1hcnk6ICNlOTAwMzk7XG5cblxuLy8gQ2FsY3VsYXRlIE1lZGl1bSBFbXBoYXNpcyBDb2xvclxuQGZ1bmN0aW9uIG1lZGl1bS1lbXBoYXNpcygkaW5wdXQtY29sb3IpIHtcbiAgQHJldHVybiByZ2JhKCRpbnB1dC1jb2xvciwgLjEyKTtcbn1cblxuLy8gQ2FsY3VsYXRlIExvdyBFbXBoYXNpcyBDb2xvclxuQGZ1bmN0aW9uIGxvdy1lbXBoYXNpcygkaW5wdXQtY29sb3IpIHtcbiAgQHJldHVybiByZ2JhKCRpbnB1dC1jb2xvciwgLjA1KTtcbn1cblxuLy8gQ29sb3IgTmV1dHJhbHNcbiRibGFjazogIzAwMDtcbiR3aGl0ZTogI2ZmZjtcbiRncmF5OiAjNzg3NzgwO1xuJGxpZ2h0LWdyYXk6ICM4ZDhlOTM7XG5cbiRib3JkZXItY29sb3I6ICNjOWM5Yzk7XG5cbi8vIExheW91dCBWYXJpYWJsZXMgZm9yIGNvbnNpc3RlbmN5XG4kZ2xvYmFsLXBhZGRpbmc6IDI1cHg7XG4kZ2xvYmFsLW1hcmdpbjogMjVweDtcbiRnbG9iYWwtcmFkaXVzOiA1cHg7XG4iXX0= */");

/***/ }),

/***/ "./src/app/portfolio-detail/portfolio-detail.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/portfolio-detail/portfolio-detail.component.ts ***!
  \****************************************************************/
/*! exports provided: PortfolioDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioDetailComponent", function() { return PortfolioDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _contentful_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contentful.service */ "./src/app/contentful.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");






let PortfolioDetailComponent = class PortfolioDetailComponent {
    constructor(ContentfulS, route, titleService) {
        this.ContentfulS = ContentfulS;
        this.route = route;
        this.titleService = titleService;
    }
    ngOnInit() {
        this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])((params) => this.ContentfulS.getProject(params.get('slug'))))
            .subscribe(project => (this.project = project));
    }
};
PortfolioDetailComponent.ctorParameters = () => [
    { type: _contentful_service__WEBPACK_IMPORTED_MODULE_3__["ContentfulService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"] }
];
PortfolioDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-portfolio-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./portfolio-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/portfolio-detail/portfolio-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./portfolio-detail.component.scss */ "./src/app/portfolio-detail/portfolio-detail.component.scss")).default]
    })
], PortfolioDetailComponent);



/***/ }),

/***/ "./src/app/portfolio-list/portfolio-list.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/portfolio-list/portfolio-list.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".project {\n  display: block;\n  margin-bottom: 15px;\n  text-decoration: none; }\n  .project:hover > img {\n    box-shadow: 0 0 30px rgba(0, 0, 0, 0.12);\n    transform: scale(1.05); }\n  .project:active > img {\n    box-shadow: 0 0 30px rgba(0, 0, 0, 0.3); }\n  .project img {\n    margin-bottom: 15px;\n    overflow: hidden;\n    transition: .25s ease;\n    width: 100%; }\n  .project .project-details {\n    height: 75px;\n    padding-right: 18px; }\n  .project h2 {\n    font-size: 18px;\n    line-height: 18px;\n    color: #000;\n    margin: 0; }\n  .project li {\n    list-style: none; }\n  .project strong {\n    display: none;\n    line-height: 18px;\n    font-weight: normal;\n    color: #787780; }\n  .project:hover h2 {\n    display: none; }\n  .project:hover strong {\n    display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb3NlcGhlYm9yYWxsL2FwcC9qb3NlcGhlYm9yYWxsLmNvbS9zcmMvYXBwL3BvcnRmb2xpby1saXN0L3BvcnRmb2xpby1saXN0LmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2pvc2VwaGVib3JhbGwvYXBwL2pvc2VwaGVib3JhbGwuY29tL3NyYy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIscUJBQXFCLEVBQUE7RUFIdkI7SUFPTSx3Q0NLTTtJREpOLHNCQUFzQixFQUFBO0VBUjVCO0lBY00sdUNDRk0sRUFBQTtFRFpaO0lBbUJJLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLFdBQVcsRUFBQTtFQXRCZjtJQTBCSSxZQUFZO0lBQ1osbUJBQW1CLEVBQUE7RUEzQnZCO0lBK0JJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsV0NyQlE7SURzQlIsU0FBUyxFQUFBO0VBbENiO0lBc0NJLGdCQUFnQixFQUFBO0VBdENwQjtJQTJDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixjQ2hDVSxFQUFBO0VEZGQ7SUFvRE0sYUFBYSxFQUFBO0VBcERuQjtJQXdETSxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wb3J0Zm9saW8tbGlzdC9wb3J0Zm9saW8tbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ35zcmMvdmFyaWFibGVzJztcblxuLy8gUHJvamVjdCBMaXN0IENvbXBvbmVudHNcbi5wcm9qZWN0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxuICAmOmhvdmVyIHtcbiAgICAmID4gaW1nIHtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoJGJsYWNrLCAuMTIpO1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgICB9XG4gIH1cblxuICAmOmFjdGl2ZSB7XG4gICAgJiA+IGltZyB7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMzBweCByZ2JhKCRibGFjaywgLjMpO1xuICAgIH1cbiAgfVxuXG4gIGltZyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRyYW5zaXRpb246IC4yNXMgZWFzZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5wcm9qZWN0LWRldGFpbHMge1xuICAgIGhlaWdodDogNzVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxOHB4O1xuICB9XG5cbiAgaDIge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICBjb2xvcjogJGJsYWNrO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIGxpIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICB9XG5cbiAgLy8gSGlkZSBkZXNjcmlwdGlvblxuICBzdHJvbmcge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBjb2xvcjogJGdyYXk7XG4gIH1cblxuICAvLyBPbiBob3ZlciwgaGlkZSBoMiBzaG93IHN0cm9uZ1xuICAmOmhvdmVyIHtcbiAgICBoMiB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIHN0cm9uZyB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gIH1cblxuXG59XG4iLCIvLyBHbG9iYWwgU3R5bGluZyBWYXJpYWJsZXNcbiRicmFuZC1wcmltYXJ5OiAjZTkwMDM5O1xuXG5cbi8vIENhbGN1bGF0ZSBNZWRpdW0gRW1waGFzaXMgQ29sb3JcbkBmdW5jdGlvbiBtZWRpdW0tZW1waGFzaXMoJGlucHV0LWNvbG9yKSB7XG4gIEByZXR1cm4gcmdiYSgkaW5wdXQtY29sb3IsIC4xMik7XG59XG5cbi8vIENhbGN1bGF0ZSBMb3cgRW1waGFzaXMgQ29sb3JcbkBmdW5jdGlvbiBsb3ctZW1waGFzaXMoJGlucHV0LWNvbG9yKSB7XG4gIEByZXR1cm4gcmdiYSgkaW5wdXQtY29sb3IsIC4wNSk7XG59XG5cbi8vIENvbG9yIE5ldXRyYWxzXG4kYmxhY2s6ICMwMDA7XG4kd2hpdGU6ICNmZmY7XG4kZ3JheTogIzc4Nzc4MDtcbiRsaWdodC1ncmF5OiAjOGQ4ZTkzO1xuXG4kYm9yZGVyLWNvbG9yOiAjYzljOWM5O1xuXG4vLyBMYXlvdXQgVmFyaWFibGVzIGZvciBjb25zaXN0ZW5jeVxuJGdsb2JhbC1wYWRkaW5nOiAyNXB4O1xuJGdsb2JhbC1tYXJnaW46IDI1cHg7XG4kZ2xvYmFsLXJhZGl1czogNXB4O1xuIl19 */");

/***/ }),

/***/ "./src/app/portfolio-list/portfolio-list.component.ts":
/*!************************************************************!*\
  !*** ./src/app/portfolio-list/portfolio-list.component.ts ***!
  \************************************************************/
/*! exports provided: PortfolioListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioListComponent", function() { return PortfolioListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _contentful_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contentful.service */ "./src/app/contentful.service.ts");



let PortfolioListComponent = class PortfolioListComponent {
    constructor(contentfulService) {
        this.contentfulService = contentfulService;
    }
    ngOnInit() {
        this.contentfulService
            .getProjects()
            .then(project => (this.projects = project));
    }
};
PortfolioListComponent.ctorParameters = () => [
    { type: _contentful_service__WEBPACK_IMPORTED_MODULE_2__["ContentfulService"] }
];
PortfolioListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-portfolio-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./portfolio-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/portfolio-list/portfolio-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./portfolio-list.component.scss */ "./src/app/portfolio-list/portfolio-list.component.scss")).default]
    })
], PortfolioListComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/josepheborall/app/josepheborall.com/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** os (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map