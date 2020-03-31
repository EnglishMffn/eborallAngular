function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"grid-wrapper container-fluid\">\n  <div class=\"row no-gutter\">\n    <main [@fadeAnimation]=\"getState(o)\" class=\"{{mainWidthClass}} col-sm-12\">\n      <div class=\"container\">\n        <app-navigation></app-navigation>\n        <router-outlet #o=\"outlet\"></router-outlet>\n      </div>\n    </main>\n    <aside class=\"{{slideshowWidthClass}} col-sm-12\">\n      Slideshow Here\n    </aside>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/contact-page/contact-page.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact-page/contact-page.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContactPageContactPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n  <h1>Contact</h1>\n  <p class=\"lede\">Every project is unique. Tell me a bit about yours and see how much time and energy I can save you.\n  </p>\n  <form autocomplete=\"on\" class=\"uk-grid-small\" uk-grid method=\"post\"\n    action=\"https://formspree.io/contact@josepheborall.com\">\n    <div class=\"uk-inline uk-width-1-2@l\">\n      <span class=\"uk-form-icon\" uk-icon=\"icon: user\"></span>\n      <input class=\"uk-input\" type=\"text\" name=\"name\" placeholder=\"Name\">\n    </div>\n\n    <div class=\"uk-inline uk-width-1-2@l\">\n      <span class=\"uk-form-icon\" uk-icon=\"icon: receiver\"></span>\n      <input class=\"uk-input\" type=\"phone\" name=\"phone-number\" placeholder=\"(XXX) XXX-XXXX\">\n    </div>\n    <div class=\"uk-inline uk-width-1-1\">\n      <span class=\"uk-form-icon\" uk-icon=\"icon: mail\"></span>\n      <input class=\"uk-input\" type=\"email\" name=\"email\" placeholder=\"Email Address\">\n    </div>\n    <div class=\"uk-width-1-1\">\n      <textarea class=\"uk-textarea\" name=\"message\" type=\"text\"\n        style=\"border-radius: 25px; padding: 25px; min-width: 100%; min-height: 150px;\"\n        placeholder=\"Message...\"></textarea>\n    </div>\n    <div class=\"uk-width-1-1\">\n      <button class=\"uk-button uk-button-primary pill-button uk-width-1-1\" uk-icon=\"chevron-right\"\n        type=\"submit\">Submit</button>\n    </div>\n  </form>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/home-page.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/home-page.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomePageHomePageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n  <h2>Digital Solutions</h2>\n  <p>\n    Conversion-optimized websites. Data-driven print design. Segmented Email Marketing. I've helped dozens of clients\n    find digital solutions to their business problems.\n  </p>\n  <p>\n    Let me take care of the technical details so that you can spend more time doing what you love – serving customers,\n    fulfilling orders, and taking your business to the next level.\n  </p>\n  <section class=\"cta\">\n    Buttons Here\n  </section>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/navigation.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/navigation.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNavigationNavigationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header>\n  <nav>\n    <a [routerLink]=\"['']\" class=\"logo\">Joseph Eborall</a>\n    <ul>\n      <li><a [routerLink]=\"['/work']\" routerLinkActive=\"active\">My Work</a></li>\n      <li><a [routerLink]=\"['/contact']\" routerLinkActive=\"active\">Contact</a>\n    </ul>\n  </nav>\n</header>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/portfolio-detail/portfolio-detail.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/portfolio-detail/portfolio-detail.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPortfolioDetailPortfolioDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<a [routerLink]=\"['..']\">Back</a>\n\n\n<article class=\"container\">\n<div class=\"row\">\n  <section class=\"col-md-12\">\n    <h1>\n      {{project.fields.projectName}}\n    </h1>\n\n    <strong *ngFor=\"let projectTag of project.fields.typeOfClient; index as i; last as isLast\">\n      {{projectTag}}<span *ngIf=\"!isLast\">,</span>\n    </strong>\n\n    <h2>{{project.fields.summary}}</h2>\n\n    <img *ngIf=\"project.fields.mainMedia\" src=\"{{project.fields.mainMedia.fields.file.url}}?fit=pad&w=1180&h=750\" alt=\"{{project.fields.projectThumb.fields.description}}\" class=\"img-fluid\" />\n  </section>\n\n  <section class=\"row\">\n    <main class=\"col-lg-6\">\n      <markdown>{{project.fields.body}}</markdown>\n      <section class=\"row\">\n        <div class=\"col-md-6\">\n          <dl>\n            <dt>Client</dt>\n            <dd>{{project.fields.client}}</dd>\n            </dl>\n          <dl>\n            <dt>Sector</dt>\n            <dd>{{project.fields.typeOfClient}}</dd>\n            </dl>\n          </div>\n        <div class=\"col-md-6\">\n          <dl>\n            <dt>Discipline</dt>\n            <dd>{{project.fields.typeOfWork}}</dd>\n            </dl>\n          <dl>\n            <dt>Tools Used</dt>\n            <dd></dd>\n            </dl>\n          </div>\n        </section>\n    </main>\n    <aside class=\"col-md-6\">\n      <ul>\n        <li *ngFor=\"let image of project.fields.media\">\n          <img src=\"{{image.fields.file.url}}?fit=thumb&w=570&h=360\" class=\"img-fluid\">\n        </li>\n      </ul>\n    </aside>\n  </section>\n</div>\n</article>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/portfolio-list/portfolio-list.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/portfolio-list/portfolio-list.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPortfolioListPortfolioListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>Work</h1>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-6 h-100\" *ngFor=\"let project of projects; index as i\">\n      <a [routerLink]=\"['/work', project.fields.slug]\" class=\"project\">\n        <img src=\"{{project.fields.projectThumb.fields.file.url}}?fit=thumb&w=250&h=150&f=face\">\n        <h2>{{ project.fields.projectName }}</h2>\n        <strong class=\"summary\">{{project.fields.summary}}</strong>\n      </a>\n      </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
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


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
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
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
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
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

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

                if (t[2]) _.ops.pop();

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

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
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
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/animations/fade.animation.ts":
  /*!******************************************!*\
    !*** ./src/animations/fade.animation.ts ***!
    \******************************************/

  /*! exports provided: fadeAnimation */

  /***/
  function srcAnimationsFadeAnimationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fadeAnimation", function () {
      return fadeAnimation;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js"); // fade.animation.ts


    var fadeAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fadeAnimation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      opacity: 0
    })], {
      optional: true
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      opacity: 1
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.2s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      opacity: 0
    }))], {
      optional: true
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      opacity: 0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.2s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      opacity: 1
    }))], {
      optional: true
    })])]);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".active {\n  color: #000 !important; }\n\na {\n  color: #ccc; }\n\nmain {\n  transition: .25s ease-in-out; }\n\naside {\n  background: #F4F5F9; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb3NlcGhlYm9yYWxsL2FwcC9qb3NlcGhlYm9yYWxsLmNvbS9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLFdBQVcsRUFBQTs7QUFHYjtFQUNFLDRCQUE0QixFQUFBOztBQUc5QjtFQUNFLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjdGl2ZSB7XG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG59XG5cbmEge1xuICBjb2xvcjogI2NjYztcbn1cblxubWFpbiB7XG4gIHRyYW5zaXRpb246IC4yNXMgZWFzZS1pbi1vdXQ7XG59XG5cbmFzaWRlIHtcbiAgYmFja2dyb3VuZDogI0Y0RjVGOTtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _animations_fade_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../animations/fade.animation */
    "./src/animations/fade.animation.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _main_width_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./main-width.service */
    "./src/app/main-width.service.ts");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(titleService, mainWidth) {
        _classCallCheck(this, AppComponent);

        this.titleService = titleService;
        this.mainWidth = mainWidth; // Main and Slideshow Bootstrap Classes

        this.mainWidthClass = '';
        this.slideshowWidthClass = ''; // Get Widths from Service

        this.mainWidthClass = mainWidth.getWidths().main;
        this.slideshowWidthClass = mainWidth.getWidths().slideshow;
      }

      _createClass(AppComponent, [{
        key: "getState",
        value: function getState(outlet) {
          return outlet.isActivated ? outlet.activatedRoute : '';
        }
      }, {
        key: "setTitle",
        value: function setTitle(newTitle) {
          this.titleService.setTitle(newTitle);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]
      }, {
        type: _main_width_service__WEBPACK_IMPORTED_MODULE_4__["MainWidthService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      animations: [_animations_fade_animation__WEBPACK_IMPORTED_MODULE_2__["fadeAnimation"]],
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      providers: [_main_width_service__WEBPACK_IMPORTED_MODULE_4__["MainWidthService"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _contentful_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./contentful.service */
    "./src/app/contentful.service.ts");
    /* harmony import */


    var _main_width_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./main-width.service */
    "./src/app/main-width.service.ts");
    /* harmony import */


    var ngx_markdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-markdown */
    "./node_modules/ngx-markdown/fesm2015/ngx-markdown.js");
    /* harmony import */


    var _portfolio_list_portfolio_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./portfolio-list/portfolio-list.component */
    "./src/app/portfolio-list/portfolio-list.component.ts");
    /* harmony import */


    var _portfolio_detail_portfolio_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./portfolio-detail/portfolio-detail.component */
    "./src/app/portfolio-detail/portfolio-detail.component.ts");
    /* harmony import */


    var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./home-page/home-page.component */
    "./src/app/home-page/home-page.component.ts");
    /* harmony import */


    var _contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./contact-page/contact-page.component */
    "./src/app/contact-page/contact-page.component.ts");
    /* harmony import */


    var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./navigation/navigation.component */
    "./src/app/navigation/navigation.component.ts"); // ./src/app/app.module.ts
    // Browser Animations
    // ROUTING
    // import { AppRoutingModule } from './app-routing.module';
    // SERVICES
    // Contentful Import
    // Markdown
    // Site Components


    var routes = [{
      path: '',
      component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_11__["HomePageComponent"]
    }, {
      path: 'work',
      component: _portfolio_list_portfolio_list_component__WEBPACK_IMPORTED_MODULE_9__["PortfolioListComponent"]
    }, {
      path: 'work/:slug',
      component: _portfolio_detail_portfolio_detail_component__WEBPACK_IMPORTED_MODULE_10__["PortfolioDetailComponent"]
    }, {
      path: 'contact',
      component: _contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_12__["ContactPageComponent"]
    }];

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _portfolio_list_portfolio_list_component__WEBPACK_IMPORTED_MODULE_9__["PortfolioListComponent"], _portfolio_detail_portfolio_detail_component__WEBPACK_IMPORTED_MODULE_10__["PortfolioDetailComponent"], _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_11__["HomePageComponent"], _contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_12__["ContactPageComponent"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_13__["NavigationComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes), ngx_markdown__WEBPACK_IMPORTED_MODULE_8__["MarkdownModule"].forRoot()],
      providers: [_contentful_service__WEBPACK_IMPORTED_MODULE_6__["ContentfulService"], _main_width_service__WEBPACK_IMPORTED_MODULE_7__["MainWidthService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/contact-page/contact-page.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/contact-page/contact-page.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppContactPageContactPageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QtcGFnZS9jb250YWN0LXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/contact-page/contact-page.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/contact-page/contact-page.component.ts ***!
    \********************************************************/

  /*! exports provided: ContactPageComponent */

  /***/
  function srcAppContactPageContactPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactPageComponent", function () {
      return ContactPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ContactPageComponent =
    /*#__PURE__*/
    function () {
      function ContactPageComponent() {
        _classCallCheck(this, ContactPageComponent);
      }

      _createClass(ContactPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactPageComponent;
    }();

    ContactPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contact-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contact-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/contact-page/contact-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contact-page.component.scss */
      "./src/app/contact-page/contact-page.component.scss")).default]
    })], ContactPageComponent);
    /***/
  },

  /***/
  "./src/app/contentful.service.ts":
  /*!***************************************!*\
    !*** ./src/app/contentful.service.ts ***!
    \***************************************/

  /*! exports provided: ContentfulService */

  /***/
  function srcAppContentfulServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContentfulService", function () {
      return ContentfulService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var contentful__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! contentful */
    "./node_modules/contentful/dist/es-modules/contentful.js"); // import Contentful createClient and type for `Entry`
    // configure the service with tokens and content type ids
    // SET YOU OWN CONFIG here


    var CONFIG = {
      space: 'yoo4e4pv9t7m',
      accessToken: 'fc0e321b58b041271b60fbb48110dac5d4066d8751c46ab96ce7ff533028dceb',
      contentTypeIds: {
        work: 'work',
        blog: 'blog'
      }
    };

    var ContentfulService =
    /*#__PURE__*/
    function () {
      function ContentfulService() {
        _classCallCheck(this, ContentfulService);

        this.cdaClient = Object(contentful__WEBPACK_IMPORTED_MODULE_2__["createClient"])({
          space: CONFIG.space,
          accessToken: CONFIG.accessToken
        });
      } // fetch products


      _createClass(ContentfulService, [{
        key: "getProjects",
        value: function getProjects(query) {
          return this.cdaClient.getEntries(Object.assign({
            content_type: CONFIG.contentTypeIds.work
          }, query)).then(function (res) {
            return res.items;
          });
        }
      }, {
        key: "getProject",
        value: function getProject(slug) {
          return this.getProjects({
            "fields.slug": slug
          }).then(function (items) {
            return items[0];
          });
        }
      }]);

      return ContentfulService;
    }();

    ContentfulService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ContentfulService);
    /***/
  },

  /***/
  "./src/app/home-page/home-page.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/home-page/home-page.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomePageHomePageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/home-page/home-page.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/home-page/home-page.component.ts ***!
    \**************************************************/

  /*! exports provided: HomePageComponent */

  /***/
  function srcAppHomePageHomePageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageComponent", function () {
      return HomePageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _main_width_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../main-width.service */
    "./src/app/main-width.service.ts");

    var HomePageComponent =
    /*#__PURE__*/
    function () {
      function HomePageComponent(mainWidth) {
        _classCallCheck(this, HomePageComponent);

        this.mainWidth = mainWidth;
        mainWidth.updateWidth(8);
      }

      _createClass(HomePageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomePageComponent;
    }();

    HomePageComponent.ctorParameters = function () {
      return [{
        type: _main_width_service__WEBPACK_IMPORTED_MODULE_2__["MainWidthService"]
      }];
    };

    HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/home-page.component.html")).default,
      providers: [_main_width_service__WEBPACK_IMPORTED_MODULE_2__["MainWidthService"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home-page.component.scss */
      "./src/app/home-page/home-page.component.scss")).default]
    })], HomePageComponent);
    /***/
  },

  /***/
  "./src/app/main-width.service.ts":
  /*!***************************************!*\
    !*** ./src/app/main-width.service.ts ***!
    \***************************************/

  /*! exports provided: MainWidthService */

  /***/
  function srcAppMainWidthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainWidthService", function () {
      return MainWidthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MainWidthService =
    /*#__PURE__*/
    function () {
      function MainWidthService() {
        _classCallCheck(this, MainWidthService);

        this.mainWidthClass = 'col-lg-4';
        this.slideshowWidthClass = 'col-lg-8';
      }

      _createClass(MainWidthService, [{
        key: "updateWidth",
        value: function updateWidth(mainWidthInput) {
          this.mainWidthClass = 'col-lg-' + mainWidthInput;

          if (mainWidthInput === 12) {
            this.slideshowWidthClass = 'hide';
          } else {
            this.slideshowWidthClass = 'col-lg-' + (12 - mainWidthInput);
          }

          console.log(this.slideshowWidthClass);
        }
      }, {
        key: "getWidths",
        value: function getWidths() {
          return {
            main: this.mainWidthClass,
            slideshow: this.slideshowWidthClass
          };
        }
      }]);

      return MainWidthService;
    }();

    MainWidthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], MainWidthService);
    /***/
  },

  /***/
  "./src/app/navigation/navigation.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/navigation/navigation.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNavigationNavigationComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "nav {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  align-items: center;\n  margin-bottom: 30px;\n  padding: 30px 0; }\n  nav .toggle {\n    display: none; }\n  nav .logo {\n    display: inline-block; }\n  nav .logo img {\n      vertical-align: middle; }\n  nav ul {\n    display: flex;\n    list-style: none;\n    justify-content: space-between;\n    flex-direction: row; }\n  nav li {\n    text-transform: uppercase;\n    padding: 0 22px; }\n  nav li a {\n      color: #ccc;\n      font-weight: normal;\n      transition: all .15s ease; }\n  nav li a:hover {\n        color: red;\n        letter-spacing: 1px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb3NlcGhlYm9yYWxsL2FwcC9qb3NlcGhlYm9yYWxsLmNvbS9zcmMvYXBwL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsZUFBZSxFQUFBO0VBTmpCO0lBU0ksYUFBYSxFQUFBO0VBVGpCO0lBYUkscUJBQXFCLEVBQUE7RUFiekI7TUFnQk0sc0JBQXNCLEVBQUE7RUFoQjVCO0lBcUJJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsOEJBQThCO0lBQzlCLG1CQUFtQixFQUFBO0VBeEJ2QjtJQTRCSSx5QkFBeUI7SUFDekIsZUFBZSxFQUFBO0VBN0JuQjtNQWdDTSxXQUFXO01BQ1gsbUJBQW1CO01BQ25CLHlCQUF5QixFQUFBO0VBbEMvQjtRQXFDUSxVQUFVO1FBQ1YsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgcGFkZGluZzogMzBweCAwO1xuXG4gIC50b2dnbGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAubG9nbyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXG4gICAgaW1nIHtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgfVxuICB9XG5cbiAgdWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxuXG4gIGxpIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIHBhZGRpbmc6IDAgMjJweDtcblxuICAgIGEge1xuICAgICAgY29sb3I6ICNjY2M7XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIC4xNXMgZWFzZTtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIC8vIE1vYmlsZSBTdHlsaW5nXG4vLyBAbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcbi8vICAgbmF2IHtcblxuLy8gICAgIC50b2dnbGUge1xuLy8gICAgICAgZGlzcGxheTogYmxvY2s7XG4vLyAgICAgfVxuXG4vLyAgICAgdWwge1xuLy8gICAgICAgZGlzcGxheTogbm9uZTtcbi8vICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4vLyAgICAgICBmbGV4LWJhc2lzOiAxMDAlO1xuLy8gICAgICAgZmxleC1ncm93OiAxO1xuLy8gICAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuLy8gICAgICAgYm94LXNoYWRvdzogMCAwIDMwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuLy8gICAgICAgcGFkZGluZzogMTVweCAhaW1wb3J0YW50O1xuLy8gICAgICAgei1pbmRleDogMzAwMDtcbi8vICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4vLyAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuLy8gICAgIH1cblxuLy8gICAgIGxpIHtcbi8vICAgICAgIG1hcmdpbjogOHB4IDA7XG5cbi8vICAgICAgIGEge1xuLy8gICAgICAgICBkaXNwbGF5OiBibG9jaztcblxuLy8gICAgICAgICAmOmhvdmVyIHtcbi8vICAgICAgICAgICBjb2xvcjogIzAwMDtcbi8vICAgICAgICAgfVxuLy8gICAgICAgfVxuLy8gICAgIH1cblxuLy8gICB9XG5cbi8vICAgLmFjdGl2ZSB7XG4vLyAgICAgZGlzcGxheTogZmxleDtcbi8vICAgfVxuLy8gfVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/navigation/navigation.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/navigation/navigation.component.ts ***!
    \****************************************************/

  /*! exports provided: NavigationComponent */

  /***/
  function srcAppNavigationNavigationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationComponent", function () {
      return NavigationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NavigationComponent =
    /*#__PURE__*/
    function () {
      function NavigationComponent() {
        _classCallCheck(this, NavigationComponent);
      }

      _createClass(NavigationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavigationComponent;
    }();

    NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navigation',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navigation.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/navigation.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navigation.component.scss */
      "./src/app/navigation/navigation.component.scss")).default]
    })], NavigationComponent);
    /***/
  },

  /***/
  "./src/app/portfolio-detail/portfolio-detail.component.scss":
  /*!******************************************************************!*\
    !*** ./src/app/portfolio-detail/portfolio-detail.component.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPortfolioDetailPortfolioDetailComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "main p {\n  color: #575865;\n  font-family: \"Greycliff CF\";\n  font-size: 19px;\n  line-height: 27px; }\n\naside li {\n  list-style: none;\n  margin-bottom: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb3NlcGhlYm9yYWxsL2FwcC9qb3NlcGhlYm9yYWxsLmNvbS9zcmMvYXBwL3BvcnRmb2xpby1kZXRhaWwvcG9ydGZvbGlvLWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGNBQWM7RUFDZCwyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLGlCQUFpQixFQUFBOztBQUlyQjtFQUVJLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BvcnRmb2xpby1kZXRhaWwvcG9ydGZvbGlvLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1haW4ge1xuICBwIHtcbiAgICBjb2xvcjogIzU3NTg2NTtcbiAgICBmb250LWZhbWlseTogXCJHcmV5Y2xpZmYgQ0ZcIjtcbiAgICBmb250LXNpemU6IDE5cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI3cHg7XG4gIH1cbn1cblxuYXNpZGUge1xuICBsaSB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/portfolio-detail/portfolio-detail.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/portfolio-detail/portfolio-detail.component.ts ***!
    \****************************************************************/

  /*! exports provided: PortfolioDetailComponent */

  /***/
  function srcAppPortfolioDetailPortfolioDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PortfolioDetailComponent", function () {
      return PortfolioDetailComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _contentful_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../contentful.service */
    "./src/app/contentful.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _main_width_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../main-width.service */
    "./src/app/main-width.service.ts");

    var PortfolioDetailComponent =
    /*#__PURE__*/
    function () {
      function PortfolioDetailComponent(ContentfulS, route, mainWidth) {
        _classCallCheck(this, PortfolioDetailComponent);

        this.ContentfulS = ContentfulS;
        this.route = route;
        this.mainWidth = mainWidth;
      }

      _createClass(PortfolioDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (params) {
            return _this.ContentfulS.getProject(params.get('slug'));
          })).subscribe(function (project) {
            return _this.project = project;
          });
          this.mainWidth.updateWidth(6);
        }
      }]);

      return PortfolioDetailComponent;
    }();

    PortfolioDetailComponent.ctorParameters = function () {
      return [{
        type: _contentful_service__WEBPACK_IMPORTED_MODULE_3__["ContentfulService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _main_width_service__WEBPACK_IMPORTED_MODULE_5__["MainWidthService"]
      }];
    };

    PortfolioDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-portfolio-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./portfolio-detail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/portfolio-detail/portfolio-detail.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./portfolio-detail.component.scss */
      "./src/app/portfolio-detail/portfolio-detail.component.scss")).default]
    })], PortfolioDetailComponent);
    /***/
  },

  /***/
  "./src/app/portfolio-list/portfolio-list.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/portfolio-list/portfolio-list.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPortfolioListPortfolioListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".project {\n  background: #efefef;\n  border-radius: 5px;\n  display: block;\n  padding: 30px;\n  margin-bottom: 15px; }\n  .project img {\n    margin-bottom: 15px; }\n  .project h2 {\n    font-size: 18px;\n    line-height: 18px; }\n  .project li {\n    list-style: none; }\n  .project strong {\n    display: none;\n    line-height: 18px; }\n  .project:hover h2 {\n    display: none; }\n  .project:hover strong {\n    display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb3NlcGhlYm9yYWxsL2FwcC9qb3NlcGhlYm9yYWxsLmNvbS9zcmMvYXBwL3BvcnRmb2xpby1saXN0L3BvcnRmb2xpby1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsYUFBYTtFQUNiLG1CQUFtQixFQUFBO0VBTHJCO0lBUUksbUJBQW1CLEVBQUE7RUFSdkI7SUFZSSxlQUFlO0lBQ2YsaUJBQWlCLEVBQUE7RUFickI7SUFpQkksZ0JBQWdCLEVBQUE7RUFqQnBCO0lBcUJJLGFBQWE7SUFDYixpQkFBaUIsRUFBQTtFQXRCckI7SUEwQkksYUFBYSxFQUFBO0VBMUJqQjtJQThCSSxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wb3J0Zm9saW8tbGlzdC9wb3J0Zm9saW8tbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9qZWN0IHtcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcblxuICBpbWcge1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIH1cblxuICBoMiB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICB9XG5cbiAgbGkge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIH1cblxuICBzdHJvbmcge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIH1cblxuICAmOmhvdmVyIGgyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgJjpob3ZlciBzdHJvbmcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/portfolio-list/portfolio-list.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/portfolio-list/portfolio-list.component.ts ***!
    \************************************************************/

  /*! exports provided: PortfolioListComponent */

  /***/
  function srcAppPortfolioListPortfolioListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PortfolioListComponent", function () {
      return PortfolioListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _contentful_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../contentful.service */
    "./src/app/contentful.service.ts");
    /* harmony import */


    var _main_width_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../main-width.service */
    "./src/app/main-width.service.ts");

    var PortfolioListComponent =
    /*#__PURE__*/
    function () {
      function PortfolioListComponent(contentfulService, mainWidth) {
        _classCallCheck(this, PortfolioListComponent);

        this.contentfulService = contentfulService;
        this.mainWidth = mainWidth;
      }

      _createClass(PortfolioListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.contentfulService.getProjects().then(function (project) {
            return _this2.projects = project;
          });
          console.log('Before ' + this.mainWidth.getWidths().slideshow);
          this.mainWidth.updateWidth(6);
          console.log('Now ' + this.mainWidth.getWidths().slideshow);
        }
      }]);

      return PortfolioListComponent;
    }();

    PortfolioListComponent.ctorParameters = function () {
      return [{
        type: _contentful_service__WEBPACK_IMPORTED_MODULE_2__["ContentfulService"]
      }, {
        type: _main_width_service__WEBPACK_IMPORTED_MODULE_3__["MainWidthService"]
      }];
    };

    PortfolioListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-portfolio-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./portfolio-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/portfolio-list/portfolio-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./portfolio-list.component.scss */
      "./src/app/portfolio-list/portfolio-list.component.scss")).default]
    })], PortfolioListComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/josepheborall/app/josepheborall.com/src/main.ts */
    "./src/main.ts");
    /***/
  },

  /***/
  1:
  /*!********************!*\
    !*** os (ignored) ***!
    \********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map