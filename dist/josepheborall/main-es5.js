(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
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
      "zUnb");
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
    },

    /***/
    "514t":
    /*!******************************************************!*\
      !*** ./src/app/filter-list/filter-list.component.ts ***!
      \******************************************************/

    /*! exports provided: FilterListComponent */

    /***/
    function t(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FilterListComponent", function () {
        return FilterListComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function FilterListComponent_li_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilterListComponent_li_2_Template_li_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var filter_r1 = ctx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.onSelect(filter_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var filter_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", filter_r1 === ctx_r0.selectedFilter);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](filter_r1);
        }
      }

      var FilterListComponent = /*#__PURE__*/function () {
        function FilterListComponent() {
          _classCallCheck(this, FilterListComponent);

          this.newItemEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.selectedFilter = 'All';
        }

        _createClass(FilterListComponent, [{
          key: "onSelect",
          value: function onSelect(link) {
            this.selectedFilter = link;
            this.newItemEvent.emit(link);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FilterListComponent;
      }();

      FilterListComponent.ɵfac = function FilterListComponent_Factory(t) {
        return new (t || FilterListComponent)();
      };

      FilterListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FilterListComponent,
        selectors: [["app-filter-list"]],
        inputs: {
          PostData: "PostData"
        },
        outputs: {
          newItemEvent: "newItemEvent"
        },
        decls: 3,
        vars: 1,
        consts: [[3, "selected", "click", 4, "ngFor", "ngForOf"], [3, "click"]],
        template: function FilterListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FilterListComponent_li_2_Template, 2, 3, "li", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.PostData);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
        styles: ["nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  display: flex;\n  flex-direction: row;\n  padding-left: 0;\n  flex-wrap: wrap;\n}\n\nnav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: block;\n  padding: 0 30px 30px 0;\n  cursor: pointer;\n  text-transform: uppercase;\n  letter-spacing: 0.03rem;\n}\n\nnav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  font-weight: bold;\n}\n\n.selected[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #000;\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlsdGVyLWxpc3QvZmlsdGVyLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFFSSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZUFBZTtBQUZuQjs7QUFKQTtFQVVJLGNBQWM7RUFDZCxzQkFBNkM7RUFDN0MsZUFBZTtFQUNmLHlCQUF5QjtFQUN6Qix1QkFBdUI7QUFGM0I7O0FBWkE7RUFpQk0saUJBQWlCO0FBRHZCOztBQU1BO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCwwQkFBMEI7QUFINUIiLCJmaWxlIjoic3JjL2FwcC9maWx0ZXItbGlzdC9maWx0ZXItbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ35zcmMvdmFyaWFibGVzJztcblxubmF2IHtcbiAgdWwge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIH1cblxuICBsaSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogMCAkZ2xvYmFsLXBhZGRpbmcgJGdsb2JhbC1wYWRkaW5nICAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAzcmVtO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gIH1cbn1cblxuLnNlbGVjdGVkIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMDAwO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterListComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-filter-list',
            templateUrl: './filter-list.component.html',
            styleUrls: ['./filter-list.component.scss']
          }]
        }], function () {
          return [];
        }, {
          PostData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          newItemEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "6CR1":
    /*!******************************************!*\
      !*** ./src/animations/fade.animation.ts ***!
      \******************************************/

    /*! exports provided: fadeAnimation */

    /***/
    function CR1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fadeAnimation", function () {
        return fadeAnimation;
      });
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic"); // fade.animation.ts


      var fadeAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeAnimation', [// transition('* => *', [
        //   query(':enter, :leave', [
        //     style({
        //       opacity: 0,
        //       // position: 'absolute',
        //       // transform: 'translateY(15px)',
        //     })
        //   ]),
        //   query(':enter', [
        //     animate('300ms cubic-bezier(0.4, 0.0, 0.2, 1)',
        //       style({transform: 'translateY(-15px)', opacity: 1})
        //     )
        //   ])
        // ])
      ]);
      /***/
    },

    /***/
    "6MTs":
    /*!****************************************************************!*\
      !*** ./src/app/portfolio-detail/portfolio-detail.component.ts ***!
      \****************************************************************/

    /*! exports provided: PortfolioDetailComponent */

    /***/
    function MTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PortfolioDetailComponent", function () {
        return PortfolioDetailComponent;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _contentful_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../contentful.service */
      "o6/c");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ngx_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-markdown */
      "lR5k");

      function PortfolioDetailComponent_a_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx_r0.project.fields.mainMedia.fields.file.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "", ctx_r0.project.fields.mainMedia.fields.file.url, "?&fm=jpg&fl=progressive&w=1180&h=750", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", ctx_r0.project.fields.projectThumb.fields.description);
        }
      }

      function PortfolioDetailComponent_dl_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "dl");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "dt");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Client");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "dd");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.project.fields.client);
        }
      }

      function PortfolioDetailComponent_dl_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "dl");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "dt");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Sector");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "dd");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.project.fields.typeOfClient);
        }
      }

      function PortfolioDetailComponent_dl_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "dl");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "dt");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Discipline");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "dd");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.project.fields.typeOfWork.join(", "));
        }
      }

      function PortfolioDetailComponent_dl_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "dl");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "dt");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Tools Used");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "dd");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.project.fields.toolsUsed.join(", "));
        }
      }

      function PortfolioDetailComponent_aside_21_li_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var image_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", image_r7.fields.file.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "", image_r7.fields.file.url, "?fl=progressive&w=570", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        }
      }

      function PortfolioDetailComponent_aside_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "aside", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PortfolioDetailComponent_aside_21_li_2_Template, 3, 2, "li", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r5.project.fields.media);
        }
      }

      var _c0 = function _c0() {
        return [".."];
      };

      var _c1 = function _c1(a0) {
        return {
          "col-lg-6": a0
        };
      };

      var PortfolioDetailComponent = /*#__PURE__*/function () {
        function PortfolioDetailComponent(ContentfulS, route, titleService) {
          _classCallCheck(this, PortfolioDetailComponent);

          this.ContentfulS = ContentfulS;
          this.route = route;
          this.titleService = titleService;
        }

        _createClass(PortfolioDetailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])(function (params) {
              return _this.ContentfulS.getProject(params.get('slug'));
            })).subscribe(function (project) {
              return _this.project = project, _this.titleService.setTitle(project.fields.projectName + ' | EBORALL');
            });
          }
        }]);

        return PortfolioDetailComponent;
      }();

      PortfolioDetailComponent.ɵfac = function PortfolioDetailComponent_Factory(t) {
        return new (t || PortfolioDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_contentful_service__WEBPACK_IMPORTED_MODULE_2__["ContentfulService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]));
      };

      PortfolioDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: PortfolioDetailComponent,
        selectors: [["app-portfolio-detail"]],
        decls: 22,
        vars: 14,
        consts: [[1, "back-toggle", 3, "routerLink"], ["src", "../../assets/img/arrow-left.svg", "alt", "Back"], [1, "row"], [1, "col-md-12"], [1, "project-head"], [1, "headline"], [1, "summary"], [3, "href", 4, "ngIf"], [1, "row", "col-12"], [3, "ngClass"], [1, "project-tags"], [4, "ngIf"], ["class", "col-md-6 col-sm-12", 4, "ngIf"], [3, "href"], [1, "img-fluid", 3, "src", "alt"], [1, "col-md-6", "col-sm-12"], [4, "ngFor", "ngForOf"], [1, "img-fluid", 3, "src"]],
        template: function PortfolioDetailComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "article");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "section", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h1", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, PortfolioDetailComponent_a_10_Template, 2, 3, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "section", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "main", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "markdown");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "section", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, PortfolioDetailComponent_dl_17_Template, 5, 1, "dl", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, PortfolioDetailComponent_dl_18_Template, 5, 1, "dl", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, PortfolioDetailComponent_dl_19_Template, 5, 1, "dl", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, PortfolioDetailComponent_dl_20_Template, 5, 1, "dl", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, PortfolioDetailComponent_aside_21_Template, 3, 1, "aside", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](11, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.project.fields.projectName);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.project.fields.summary);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.project.fields.mainMedia);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](12, _c1, ctx.project.fields.media));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.project.fields.body);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.project.fields.client);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.project.fields.typeOfClient);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.project.fields.typeOfWork);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.project.fields.toolsUsed);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.project.fields.media);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], ngx_markdown__WEBPACK_IMPORTED_MODULE_6__["MarkdownComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
        styles: [".project-head[_ngcontent-%COMP%] {\n  align-items: baseline;\n  display: flex;\n  justify-content: space-between;\n}\n\n.project-head[_ngcontent-%COMP%]   .headline[_ngcontent-%COMP%] {\n  font-size: 34px;\n}\n\narticle[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  outline: 1px solid rgba(0, 0, 0, 0.05);\n  outline-offset: -1px;\n}\n\naside[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  margin-bottom: 20px;\n}\n\n.project-tags[_ngcontent-%COMP%] {\n  -moz-column-count: 2;\n       column-count: 2;\n}\n\ndl[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 15px;\n  page-break-inside: avoid;\n}\n\ndl[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  color: #000;\n  font-weight: bold;\n}\n\ndl[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  margin-left: 0;\n}\n\n.back-toggle[_ngcontent-%COMP%] {\n  color: #000;\n  opacity: .5;\n  top: 30px;\n}\n\n.back-toggle[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  transform: scale(1.25);\n}\n\n@media (min-width: 768px) {\n  .back-toggle[_ngcontent-%COMP%] {\n    margin-left: -75px;\n    position: -webkit-sticky;\n    position: sticky;\n  }\n  article[_ngcontent-%COMP%] {\n    margin-top: -80px;\n  }\n}\n\n@media (max-width: 991.98px) {\n  .project-head[_ngcontent-%COMP%] {\n    display: block;\n    margin-bottom: 30px;\n  }\n  .project-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin-bottom: 15px;\n  }\n  aside[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    padding-left: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9ydGZvbGlvLWRldGFpbC9wb3J0Zm9saW8tZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic3JjL3ZhcmlhYmxlcy5zY3NzIiwic3JjL3N0eWxlcy9ncmlkL21peGlucy9fYnJlYWtwb2ludHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsOEJBQThCO0FBRmhDOztBQURBO0VBTUksZUFBZTtBQURuQjs7QUFLQTtFQ21CRSxzQ0FBcUM7RUFDckMsb0JBQW9CO0FEcEJ0Qjs7QUFNQTtFQUVJLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFKdkI7O0FBUUE7RUFDRSxvQkFBZTtPQUFmLGVBQWU7QUFMakI7O0FBUUE7RUFDRSxTQUFTO0VBQ1QsYUFBNEI7RUFDNUIsd0JBQXdCO0FBTDFCOztBQUVBO0VBTUksV0NyQlE7RURzQlIsaUJBQWlCO0FBSnJCOztBQUhBO0VBV0ksY0FBYztBQUpsQjs7QUFRQTtFQUNFLFdDL0JVO0VEZ0NWLFdBQVc7RUFDWCxTQUFTO0FBTFg7O0FBRUE7RUFNSSxVQUFVO0VBQ1Ysc0JBQXNCO0FBSjFCOztBRVlJO0VGRkY7SUFDRSxrQkFBa0I7SUFDbEIsd0JBQWdCO0lBQWhCLGdCQUFnQjtFQU5sQjtFQVNBO0lBQ0UsaUJBQWlCO0VBUG5CO0FBQ0Y7O0FFZUk7RUZIRjtJQUNFLGNBQWM7SUFDZCxtQkNoRGdCO0VEd0NsQjtFQU1BO0lBS0ksbUJBQWlDO0VBUnJDO0VBWUE7SUFFSSxlQUFlO0VBWG5CO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wb3J0Zm9saW8tZGV0YWlsL3BvcnRmb2xpby1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICd+c3JjL3ZhcmlhYmxlcyc7XG5AaW1wb3J0ICd+c3JjL3N0eWxlcy9ncmlkL2JyZWFrcG9pbnRzJztcblxuLnByb2plY3QtaGVhZCB7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gIC5oZWFkbGluZSB7XG4gICAgZm9udC1zaXplOiAzNHB4O1xuICB9XG59XG5cbmFydGljbGUge1xuICBpbWcge1xuICAgIEBpbmNsdWRlIGltYWdlLWJvcmRlcjtcbiAgfVxufVxuXG5hc2lkZSB7XG4gIGxpIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbn1cblxuLnByb2plY3QtdGFncyB7XG4gIGNvbHVtbi1jb3VudDogMjtcbn1cblxuZGwge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6ICRnbG9iYWwtcGFkZGluZyAvIDI7XG4gIHBhZ2UtYnJlYWstaW5zaWRlOiBhdm9pZDtcblxuICBkdCB7XG4gICAgY29sb3I6ICRibGFjaztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG4gIGRkIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxufVxuXG4uYmFjay10b2dnbGUge1xuICBjb2xvcjogJGJsYWNrO1xuICBvcGFjaXR5OiAuNTtcbiAgdG9wOiAzMHB4O1xuXG4gICY6aG92ZXIge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjI1KTtcbiAgfVxufVxuXG4vLyBCYWNrIGJ1dHRvbiBsb2NhdGlvbiBvbiBsYXJnZXIgc2NyZWVuc1xuQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChtZCkge1xuICAuYmFjay10b2dnbGUge1xuICAgIG1hcmdpbi1sZWZ0OiAtNzVweDtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICB9XG5cbiAgYXJ0aWNsZSB7XG4gICAgbWFyZ2luLXRvcDogLTgwcHg7XG4gIH1cblxufVxuXG5AaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24obWQpIHtcbiAgLnByb2plY3QtaGVhZCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogJGdsb2JhbC1tYXJnaW47XG5cbiAgICBoMSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAkZ2xvYmFsLW1hcmdpbiAvIDI7XG4gICAgfVxuICB9XG5cbiAgYXNpZGUge1xuICAgIHVsIHtcbiAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICB9XG4gIH1cbn1cbiIsIi8vIEdsb2JhbCBTdHlsaW5nIFZhcmlhYmxlc1xuJGJyYW5kLXByaW1hcnk6ICNlOTAwMzk7XG5cblxuLy8gQ2FsY3VsYXRlIE1lZGl1bSBFbXBoYXNpcyBDb2xvclxuQGZ1bmN0aW9uIG1lZGl1bS1lbXBoYXNpcygkaW5wdXQtY29sb3IpIHtcbiAgQHJldHVybiByZ2JhKCRpbnB1dC1jb2xvciwgLjEyKTtcbn1cblxuLy8gQ2FsY3VsYXRlIExvdyBFbXBoYXNpcyBDb2xvclxuQGZ1bmN0aW9uIGxvdy1lbXBoYXNpcygkaW5wdXQtY29sb3IpIHtcbiAgQHJldHVybiByZ2JhKCRpbnB1dC1jb2xvciwgLjA1KTtcbn1cblxuLy8gQ29sb3IgTmV1dHJhbHNcbiRibGFjazogIzAwMDtcbiR3aGl0ZTogI2ZmZjtcbiRncmF5OiAjNzg3NzgwO1xuJGxpZ2h0LWdyYXk6ICM4ZDhlOTM7XG5cbiRib3JkZXItY29sb3I6ICNjOWM5Yzk7XG5cbi8vIExheW91dCB2YXJpYWJsZXMgZm9yIGNvbnNpc3RlbmN5XG4kZ2xvYmFsLXBhZGRpbmc6IDMwcHg7XG4kZ2xvYmFsLW1hcmdpbjogMzBweDtcbiRnbG9iYWwtcmFkaXVzOiA1cHg7XG5cbi8vIEVhc2UgVHJhbnNpdGlvblxuJGdsb2JhbC1lYXNlOiBjdWJpYy1iZXppZXIoLjQsIDAsIC4yLCAxKTtcblxuLy8gU3VidGxlIGluc2V0IGJvcmRlclxuQG1peGluIGltYWdlLWJvcmRlciB7XG4gIG91dGxpbmU6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4wNSk7XG4gIG91dGxpbmUtb2Zmc2V0OiAtMXB4O1xufVxuIiwiLy8gQnJlYWtwb2ludCB2aWV3cG9ydCBzaXplcyBhbmQgbWVkaWEgcXVlcmllcy5cbi8vXG4vLyBCcmVha3BvaW50cyBhcmUgZGVmaW5lZCBhcyBhIG1hcCBvZiAobmFtZTogbWluaW11bSB3aWR0aCksIG9yZGVyIGZyb20gc21hbGwgdG8gbGFyZ2U6XG4vL1xuLy8gICAgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KVxuLy9cbi8vIFRoZSBtYXAgZGVmaW5lZCBpbiB0aGUgYCRncmlkLWJyZWFrcG9pbnRzYCBnbG9iYWwgdmFyaWFibGUgaXMgdXNlZCBhcyB0aGUgYCRicmVha3BvaW50c2AgYXJndW1lbnQgYnkgZGVmYXVsdC5cblxuLy8gTmFtZSBvZiB0aGUgbmV4dCBicmVha3BvaW50LCBvciBudWxsIGZvciB0aGUgbGFzdCBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAkYnJlYWtwb2ludC1uYW1lczogKHhzIHNtIG1kIGxnIHhsKSlcbi8vICAgIG1kXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludC1uYW1lczogbWFwLWtleXMoJGJyZWFrcG9pbnRzKSkge1xuICAkbjogaW5kZXgoJGJyZWFrcG9pbnQtbmFtZXMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbiAhPSBudWxsIGFuZCAkbiA8IGxlbmd0aCgkYnJlYWtwb2ludC1uYW1lcyksIG50aCgkYnJlYWtwb2ludC1uYW1lcywgJG4gKyAxKSwgbnVsbCk7XG59XG5cbi8vIE1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIHNtYWxsZXN0IChmaXJzdCkgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1pbihzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDU3NnB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbWluICE9IDAsICRtaW4sIG51bGwpO1xufVxuXG4vLyBNYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBsYXJnZXN0IChsYXN0KSBicmVha3BvaW50LlxuLy8gVGhlIG1heGltdW0gdmFsdWUgaXMgY2FsY3VsYXRlZCBhcyB0aGUgbWluaW11bSBvZiB0aGUgbmV4dCBvbmUgbGVzcyAwLjAycHhcbi8vIHRvIHdvcmsgYXJvdW5kIHRoZSBsaW1pdGF0aW9ucyBvZiBgbWluLWAgYW5kIGBtYXgtYCBwcmVmaXhlcyBhbmQgdmlld3BvcnRzIHdpdGggZnJhY3Rpb25hbCB3aWR0aHMuXG4vLyBTZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL21lZGlhcXVlcmllcy00LyNtcS1taW4tbWF4XG4vLyBVc2VzIDAuMDJweCByYXRoZXIgdGhhbiAwLjAxcHggdG8gd29yayBhcm91bmQgYSBjdXJyZW50IHJvdW5kaW5nIGJ1ZyBpbiBTYWZhcmkuXG4vLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3ODI2MVxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWF4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNzY3Ljk4cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbmV4dDogYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAcmV0dXJuIGlmKCRuZXh0LCBicmVha3BvaW50LW1pbigkbmV4dCwgJGJyZWFrcG9pbnRzKSAtIC4wMiwgbnVsbCk7XG59XG5cbi8vIFJldHVybnMgYSBibGFuayBzdHJpbmcgaWYgc21hbGxlc3QgYnJlYWtwb2ludCwgb3RoZXJ3aXNlIHJldHVybnMgdGhlIG5hbWUgd2l0aCBhIGRhc2ggaW4gZnJvbnQuXG4vLyBVc2VmdWwgZm9yIG1ha2luZyByZXNwb25zaXZlIHV0aWxpdGllcy5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHhzLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCJcIiAgKFJldHVybnMgYSBibGFuayBzdHJpbmcpXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCItc21cIlxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtaW5maXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgQHJldHVybiBpZihicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKSA9PSBudWxsLCBcIlwiLCBcIi0jeyRuYW1lfVwiKTtcbn1cblxuLy8gTWVkaWEgb2YgYXQgbGVhc3QgdGhlIG1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCB3aWRlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1pbiB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgb2YgYXQgbW9zdCB0aGUgbWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIGxhcmdlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1heCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgdGhhdCBzcGFucyBtdWx0aXBsZSBicmVha3BvaW50IHdpZHRocy5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBiZXR3ZWVuIHRoZSBtaW4gYW5kIG1heCBicmVha3BvaW50c1xuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtYmV0d2VlbigkbG93ZXIsICR1cHBlciwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbG93ZXIsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCR1cHBlciwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbG93ZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCR1cHBlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuLy8gTWVkaWEgYmV0d2VlbiB0aGUgYnJlYWtwb2ludCdzIG1pbmltdW0gYW5kIG1heGltdW0gd2lkdGhzLlxuLy8gTm8gbWluaW11bSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQsIGFuZCBubyBtYXhpbXVtIGZvciB0aGUgbGFyZ2VzdCBvbmUuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgb25seSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCwgbm90IHZpZXdwb3J0cyBhbnkgd2lkZXIgb3IgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1vbmx5KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PortfolioDetailComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-portfolio-detail',
            templateUrl: './portfolio-detail.component.html',
            styleUrls: ['./portfolio-detail.component.scss']
          }]
        }], function () {
          return [{
            type: _contentful_service__WEBPACK_IMPORTED_MODULE_2__["ContentfulService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
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
    "F1my":
    /*!**************************************************!*\
      !*** ./src/app/home-page/home-page.component.ts ***!
      \**************************************************/

    /*! exports provided: HomePageComponent */

    /***/
    function F1my(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageComponent", function () {
        return HomePageComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../button/button.component */
      "be9G");

      var HomePageComponent = function HomePageComponent(titleService) {
        _classCallCheck(this, HomePageComponent);

        this.titleService = titleService; // Set Page Title

        this.titleService.setTitle('Joseph Eborall');
      };

      HomePageComponent.ɵfac = function HomePageComponent_Factory(t) {
        return new (t || HomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]));
      };

      HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomePageComponent,
        selectors: [["app-home-page"]],
        decls: 12,
        vars: 0,
        consts: [[1, "hero"], [1, "row"], ["cta", "My Work", "btnStyle", "", "link", "work"], ["cta", "Contact Me", "btnStyle", "text", "link", "contact"]],
        template: function HomePageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Eborall Digital Solutions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Conversion-optimized websites. Data-driven print design. Segmented Email Marketing. I've helped dozens of clients find digital solutions to their business problems. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Let me take care of the technical details so that you can spend more time doing what you love \u2013 serving customers, fulfilling orders, and taking your business to the next level. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_button_button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"]],
        styles: [".hero[_ngcontent-%COMP%] {\n  max-width: 780px;\n  margin: auto;\n  position: relative;\n}\n\n.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osa0JBQWtCO0FBRHBCOztBQUZBO0VBTUksZ0JBQWdCO0FBQXBCOztBQU1FO0VBRUksZUFBZTtBQUpyQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICd+c3JjL3N0eWxlcy9ncmlkL2JyZWFrcG9pbnRzJztcblxuLmhlcm8ge1xuICBtYXgtd2lkdGg6IDc4MHB4O1xuICBtYXJnaW46IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICBoMSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuXG59XG5cbkBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoeHMpIHtcbiAgLmhlcm8ge1xuICAgIHAge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cbiAgfVxufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePageComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-home-page',
            templateUrl: './home-page.component.html',
            styleUrls: ['./home-page.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "LfgP":
    /*!******************************************************!*\
      !*** ./src/app/page-footer/page-footer.component.ts ***!
      \******************************************************/

    /*! exports provided: PageFooterComponent */

    /***/
    function LfgP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PageFooterComponent", function () {
        return PageFooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PageFooterComponent = /*#__PURE__*/function () {
        function PageFooterComponent() {
          _classCallCheck(this, PageFooterComponent);
        }

        _createClass(PageFooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PageFooterComponent;
      }();

      PageFooterComponent.ɵfac = function PageFooterComponent_Factory(t) {
        return new (t || PageFooterComponent)();
      };

      PageFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PageFooterComponent,
        selectors: [["app-page-footer"]],
        decls: 3,
        vars: 0,
        template: function PageFooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\xA9 2020 Joseph Eborall");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["footer[_ngcontent-%COMP%] {\n  background: #070705;\n  color: #787780;\n  padding: 30px;\n  text-align: center;\n  height: 215px;\n  font-size: 14px;\n  z-index: -5;\n  position: relative;\n  margin-top: 30px;\n}\n\nfooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  z-index: 25;\n  padding: 25px;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS1mb290ZXIvcGFnZS1mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGFDa0JtQjtFRGpCbkIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixlQUFlO0VBQ2YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixnQkNha0I7QURkcEI7O0FBUkE7RUFZSSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGNBQWM7QUFBbEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlLWZvb3Rlci9wYWdlLWZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ35zcmMvdmFyaWFibGVzJztcblxuZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogIzA3MDcwNTtcbiAgY29sb3I6ICM3ODc3ODA7XG4gIHBhZGRpbmc6ICRnbG9iYWwtcGFkZGluZztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDIxNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIHotaW5kZXg6IC01O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6ICRnbG9iYWwtbWFyZ2luO1xuXG4gIGEge1xuICAgIHotaW5kZXg6IDI1O1xuICAgIHBhZGRpbmc6IDI1cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbiIsIi8vIEdsb2JhbCBTdHlsaW5nIFZhcmlhYmxlc1xuJGJyYW5kLXByaW1hcnk6ICNlOTAwMzk7XG5cblxuLy8gQ2FsY3VsYXRlIE1lZGl1bSBFbXBoYXNpcyBDb2xvclxuQGZ1bmN0aW9uIG1lZGl1bS1lbXBoYXNpcygkaW5wdXQtY29sb3IpIHtcbiAgQHJldHVybiByZ2JhKCRpbnB1dC1jb2xvciwgLjEyKTtcbn1cblxuLy8gQ2FsY3VsYXRlIExvdyBFbXBoYXNpcyBDb2xvclxuQGZ1bmN0aW9uIGxvdy1lbXBoYXNpcygkaW5wdXQtY29sb3IpIHtcbiAgQHJldHVybiByZ2JhKCRpbnB1dC1jb2xvciwgLjA1KTtcbn1cblxuLy8gQ29sb3IgTmV1dHJhbHNcbiRibGFjazogIzAwMDtcbiR3aGl0ZTogI2ZmZjtcbiRncmF5OiAjNzg3NzgwO1xuJGxpZ2h0LWdyYXk6ICM4ZDhlOTM7XG5cbiRib3JkZXItY29sb3I6ICNjOWM5Yzk7XG5cbi8vIExheW91dCB2YXJpYWJsZXMgZm9yIGNvbnNpc3RlbmN5XG4kZ2xvYmFsLXBhZGRpbmc6IDMwcHg7XG4kZ2xvYmFsLW1hcmdpbjogMzBweDtcbiRnbG9iYWwtcmFkaXVzOiA1cHg7XG5cbi8vIEVhc2UgVHJhbnNpdGlvblxuJGdsb2JhbC1lYXNlOiBjdWJpYy1iZXppZXIoLjQsIDAsIC4yLCAxKTtcblxuLy8gU3VidGxlIGluc2V0IGJvcmRlclxuQG1peGluIGltYWdlLWJvcmRlciB7XG4gIG91dGxpbmU6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4wNSk7XG4gIG91dGxpbmUtb2Zmc2V0OiAtMXB4O1xufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageFooterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-page-footer',
            templateUrl: './page-footer.component.html',
            styleUrls: ['./page-footer.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _animations_fade_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../animations/fade.animation */
      "6CR1");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./navigation/navigation.component */
      "k5x5");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _page_footer_page_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./page-footer/page-footer.component */
      "LfgP");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(titleService) {
          _classCallCheck(this, AppComponent);

          this.titleService = titleService;
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

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 12,
        vars: 1,
        consts: [[1, "grid-wrapper", "container-fluid"], [1, "layout-underline"], [1, "row", "no-gutter", "full-height"], [1, "col-12"], [1, "container"], ["o", "outlet"], [1, "vert-elements"], [1, "vert-line"], [1, "vert-name"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navigation", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "main", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet", null, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-page-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "figure", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "figure", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Joseph Eborall");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeAnimation", ctx.getState(_r0));
          }
        },
        directives: [_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__["NavigationComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _page_footer_page_footer_component__WEBPACK_IMPORTED_MODULE_5__["PageFooterComponent"]],
        styles: [".active[_ngcontent-%COMP%] {\n  color: #000;\n}\n\na[_ngcontent-%COMP%] {\n  color: #ccc;\n}\n\nmain[_ngcontent-%COMP%] {\n  transition: .75s ease-in-out;\n  display: block;\n}\n\n.full-height[_ngcontent-%COMP%] {\n  min-height: 70vh;\n}\n\n.hide-slideshow[_ngcontent-%COMP%] {\n  -webkit-animation: fadeOut .75s ease-in-out;\n          animation: fadeOut .75s ease-in-out;\n}\n\n.show-slideshow[_ngcontent-%COMP%] {\n  -webkit-animation: fadeIn 3s ease-in-out;\n          animation: fadeIn 3s ease-in-out;\n}\n\n@-webkit-keyframes fadeOut {\n  0% {\n    flex: 0 0 50%;\n    opacity: 1;\n  }\n  100% {\n    flex: 0 0 0;\n    opacity: 0;\n  }\n}\n\n@keyframes fadeOut {\n  0% {\n    flex: 0 0 50%;\n    opacity: 1;\n  }\n  100% {\n    flex: 0 0 0;\n    opacity: 0;\n  }\n}\n\n@-webkit-keyframes fadeIn {\n  0% {\n    opacity: inherit;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes fadeIn {\n  0% {\n    opacity: inherit;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n.full-article[_ngcontent-%COMP%]    > .container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n}\n\n.vert-elements[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 7%;\n  top: 0;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  z-index: -1;\n  overflow: visible;\n  margin: 0;\n}\n\n.vert-line[_ngcontent-%COMP%] {\n  display: inline-block;\n  border-left: 1px solid #c9c9c9;\n  height: 100%;\n  position: relative;\n  left: 50%;\n  margin: 0;\n}\n\n.vert-name[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n  transform-origin: center;\n  background: #fff;\n  padding: 0 25px;\n  text-transform: uppercase;\n  letter-spacing: 5px;\n  text-align: center;\n  color: #c9c9c9;\n  display: block;\n}\n\n.layout-underline[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #c9c9c9;\n}\n\n@media (max-width: 1600px) {\n  .vert-name[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n@media (max-width: 1300px) {\n  .vert-elements[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0UsV0NTVTtBRGJaOztBQU9BO0VBQ0UsV0FBVztBQUpiOztBQU9BO0VBQ0UsNEJBQTRCO0VBQzVCLGNBQWM7QUFKaEI7O0FBUUE7RUFDRSxnQkFBZ0I7QUFMbEI7O0FBUUE7RUFDRSwyQ0FBbUM7VUFBbkMsbUNBQW1DO0FBTHJDOztBQVFBO0VBQ0Usd0NBQWdDO1VBQWhDLGdDQUFnQztBQUxsQzs7QUFTQTtFQUNFO0lBQ0UsYUFBYTtJQUNiLFVBQVU7RUFOWjtFQVVBO0lBQ0UsV0FBVztJQUNYLFVBQVU7RUFSWjtBQUNGOztBQUZBO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsVUFBVTtFQU5aO0VBVUE7SUFDRSxXQUFXO0lBQ1gsVUFBVTtFQVJaO0FBQ0Y7O0FBWUE7RUFDRTtJQUNFLGdCQUFnQjtFQVRsQjtFQVlBO0lBQ0UsVUFBVTtFQVZaO0FBQ0Y7O0FBR0E7RUFDRTtJQUNFLGdCQUFnQjtFQVRsQjtFQVlBO0lBQ0UsVUFBVTtFQVZaO0FBQ0Y7O0FBYUE7RUFDRSxpQkFBaUI7QUFWbkI7O0FBYUE7RUFDRSxlQUFlO0VBQ2YsUUFBUTtFQUNSLE1BQU07RUFDTixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLFNBQVM7QUFWWDs7QUFhQTtFQUNFLHFCQUFxQjtFQUNyQiw4QkN0RG9CO0VEdURwQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxTQUFTO0FBVlg7O0FBYUE7RUFDRSx3QkFBd0I7RUFDeEIsd0JBQXdCO0VBQ3hCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsY0NyRW9CO0VEc0VwQixjQUFjO0FBVmhCOztBQWFBO0VBQ0UsZ0NDMUVvQjtBRGdFdEI7O0FBY0E7RUFDRTtJQUNFLGFBQWE7RUFYZjtBQUNGOztBQWVBO0VBQ0U7SUFDRSxhQUFhO0VBWmY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ35zcmMvdmFyaWFibGVzJztcblxuLy8gQm9vdHN0cmFwIEJyZWFrcG9pbnRzXG5AaW1wb3J0ICcuLi9zdHlsZXMvZ3JpZC9icmVha3BvaW50cyc7XG5cbi5hY3RpdmUge1xuICBjb2xvcjogJGJsYWNrO1xufVxuXG5hIHtcbiAgY29sb3I6ICNjY2M7XG59XG5cbm1haW4ge1xuICB0cmFuc2l0aW9uOiAuNzVzIGVhc2UtaW4tb3V0O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLy8gTWFrZSBDb250ZW50IEZ1bGwtSGVpZ2h0IG9mIFdpbmRvd1xuLmZ1bGwtaGVpZ2h0IHtcbiAgbWluLWhlaWdodDogNzB2aDtcbn1cblxuLmhpZGUtc2xpZGVzaG93IHtcbiAgYW5pbWF0aW9uOiBmYWRlT3V0IC43NXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5zaG93LXNsaWRlc2hvdyB7XG4gIGFuaW1hdGlvbjogZmFkZUluIDNzIGVhc2UtaW4tb3V0O1xufVxuXG4vLyBGYWRlIG91dCBhbmQgZGlzc2FwZWFyXG5Aa2V5ZnJhbWVzIGZhZGVPdXQge1xuICAwJSB7XG4gICAgZmxleDogMCAwIDUwJTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cblxuICAxMDAlIHtcbiAgICBmbGV4OiAwIDAgMDtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5cbi8vIEZhZGUgb3V0IGFuZCBkaXNzYXBlYXJcbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IGluaGVyaXQ7XG4gIH1cblxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbi5mdWxsLWFydGljbGUgPiAuY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG59XG5cbi52ZXJ0LWVsZW1lbnRzIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiA3JTtcbiAgdG9wOiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHotaW5kZXg6IC0xO1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgbWFyZ2luOiAwO1xufVxuXG4udmVydC1saW5lIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbjogMDtcbn1cblxuLnZlcnQtbmFtZSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiAwIDI1cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiA1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICRib3JkZXItY29sb3I7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubGF5b3V0LXVuZGVybGluZSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xufVxuXG4vLyBYTCBzY3JlZW5zIHNob3cgbmFtZVxuQG1lZGlhIChtYXgtd2lkdGg6IDE2MDBweCkge1xuICAudmVydC1uYW1lIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbi8vIEhpZGUgVmVydCBMaW5lXG5AbWVkaWEgKG1heC13aWR0aDogMTMwMHB4KSB7XG4gIC52ZXJ0LWVsZW1lbnRzIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4iLCIvLyBHbG9iYWwgU3R5bGluZyBWYXJpYWJsZXNcbiRicmFuZC1wcmltYXJ5OiAjZTkwMDM5O1xuXG5cbi8vIENhbGN1bGF0ZSBNZWRpdW0gRW1waGFzaXMgQ29sb3JcbkBmdW5jdGlvbiBtZWRpdW0tZW1waGFzaXMoJGlucHV0LWNvbG9yKSB7XG4gIEByZXR1cm4gcmdiYSgkaW5wdXQtY29sb3IsIC4xMik7XG59XG5cbi8vIENhbGN1bGF0ZSBMb3cgRW1waGFzaXMgQ29sb3JcbkBmdW5jdGlvbiBsb3ctZW1waGFzaXMoJGlucHV0LWNvbG9yKSB7XG4gIEByZXR1cm4gcmdiYSgkaW5wdXQtY29sb3IsIC4wNSk7XG59XG5cbi8vIENvbG9yIE5ldXRyYWxzXG4kYmxhY2s6ICMwMDA7XG4kd2hpdGU6ICNmZmY7XG4kZ3JheTogIzc4Nzc4MDtcbiRsaWdodC1ncmF5OiAjOGQ4ZTkzO1xuXG4kYm9yZGVyLWNvbG9yOiAjYzljOWM5O1xuXG4vLyBMYXlvdXQgdmFyaWFibGVzIGZvciBjb25zaXN0ZW5jeVxuJGdsb2JhbC1wYWRkaW5nOiAzMHB4O1xuJGdsb2JhbC1tYXJnaW46IDMwcHg7XG4kZ2xvYmFsLXJhZGl1czogNXB4O1xuXG4vLyBFYXNlIFRyYW5zaXRpb25cbiRnbG9iYWwtZWFzZTogY3ViaWMtYmV6aWVyKC40LCAwLCAuMiwgMSk7XG5cbi8vIFN1YnRsZSBpbnNldCBib3JkZXJcbkBtaXhpbiBpbWFnZS1ib3JkZXIge1xuICBvdXRsaW5lOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMDUpO1xuICBvdXRsaW5lLW9mZnNldDogLTFweDtcbn1cbiJdfQ== */"],
        data: {
          animation: [_animations_fade_animation__WEBPACK_IMPORTED_MODULE_1__["fadeAnimation"]]
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            animations: [_animations_fade_animation__WEBPACK_IMPORTED_MODULE_1__["fadeAnimation"]],
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "TcF+":
    /*!************************************************************!*\
      !*** ./src/app/portfolio-list/portfolio-list.component.ts ***!
      \************************************************************/

    /*! exports provided: PortfolioListComponent */

    /***/
    function TcF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PortfolioListComponent", function () {
        return PortfolioListComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");
      /* harmony import */


      var _contentful_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../contentful.service */
      "o6/c");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _filter_list_filter_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../filter-list/filter-list.component */
      "514t");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _button_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../button/button.component */
      "be9G");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _projectfilter_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../projectfilter.pipe */
      "UhM7");

      var _c0 = function _c0(a1) {
        return ["/work", a1];
      };

      function PortfolioListComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var project_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, project_r1.fields.slug));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", project_r1.fields.projectThumb.fields.file.url, "?fm=jpg&fl=progressive&fit=thumb&w=350&h=200&f=face", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("alt", "", project_r1.fields.projectName, " Thumbnail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r1.fields.projectName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r1.fields.summary);
        }
      }

      var PortfolioListComponent = /*#__PURE__*/function () {
        function PortfolioListComponent(contentfulService, titleService) {
          _classCallCheck(this, PortfolioListComponent);

          this.contentfulService = contentfulService;
          this.titleService = titleService;
          this.SearchFilter = ''; // Set Page Title

          this.titleService.setTitle('My Work | Joseph Eborall');
        }

        _createClass(PortfolioListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.contentfulService.getProjects().then(function (project) {
              return _this2.projects = project;
            });
          }
        }, {
          key: "updateFilter",
          value: function updateFilter(newFilter) {
            if (newFilter === 'All') {
              this.SearchFilter = '';
            } else {
              this.SearchFilter = newFilter;
            }
          } // Split Filters

        }, {
          key: "processFilters",
          value: function processFilters(projectData) {
            // Filter Project Types into Array
            var rawArray = projectData.filter(function (project) {
              return project.fields.typeOfWork;
            }).map(function (project) {
              return project.fields.typeOfWork;
            });
            var splitArray = []; // Loop through filters

            for (var item in rawArray) {
              if (rawArray.hasOwnProperty(item)) {
                var splits = rawArray[item]; // Loop through Individual Labels

                for (var split in splits) {
                  if (splits.hasOwnProperty(split)) {
                    splitArray.push(splits[split]);
                  }
                }
              }
            }

            var uniqueFilters = _toConsumableArray(new Set(splitArray.sort()));

            uniqueFilters.unshift('All');
            return uniqueFilters;
          }
        }, {
          key: "getState",
          value: function getState(outlet) {
            return outlet.isActivated ? outlet.activatedRoute : '';
          }
        }]);

        return PortfolioListComponent;
      }();

      PortfolioListComponent.ɵfac = function PortfolioListComponent_Factory(t) {
        return new (t || PortfolioListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_contentful_service__WEBPACK_IMPORTED_MODULE_2__["ContentfulService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]));
      };

      PortfolioListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PortfolioListComponent,
        selectors: [["app-portfolio-list"]],
        decls: 5,
        vars: 6,
        consts: [[3, "PostData", "newItemEvent"], [1, "row"], ["class", "col-sm-12 col-md-4 h-100", 4, "ngFor", "ngForOf"], ["btnStyle", "full-width", "cta", "Contact Me", "link", "../contact"], [1, "col-sm-12", "col-md-4", "h-100"], [1, "project", 3, "routerLink"], [3, "src", "alt"], [1, "project-details"], [1, "summary"]],
        template: function PortfolioListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-filter-list", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("newItemEvent", function PortfolioListComponent_Template_app_filter_list_newItemEvent_0_listener($event) {
              return ctx.updateFilter($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PortfolioListComponent_div_2_Template, 8, 7, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "projectfilter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-button", 3);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("PostData", ctx.processFilters(ctx.projects));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@photosAnimation", ctx.projects.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 3, ctx.projects, ctx.SearchFilter));
          }
        },
        directives: [_filter_list_filter_list_component__WEBPACK_IMPORTED_MODULE_4__["FilterListComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _button_button_component__WEBPACK_IMPORTED_MODULE_6__["ButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"]],
        pipes: [_projectfilter_pipe__WEBPACK_IMPORTED_MODULE_8__["ProjectfilterPipe"]],
        styles: [".project[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 15px;\n  text-decoration: none;\n}\n\n.project[_ngcontent-%COMP%]:hover    > img[_ngcontent-%COMP%] {\n  box-shadow: 0 0 30px rgba(0, 0, 0, 0.12);\n  transform: scale(1.05);\n}\n\n.project[_ngcontent-%COMP%]:active    > img[_ngcontent-%COMP%] {\n  box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);\n}\n\n.project[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  overflow: hidden;\n  transition: .25s ease;\n  width: 100%;\n  min-height: 200px;\n  min-width: 350px;\n  background: #787780;\n  outline: 1px solid rgba(0, 0, 0, 0.05);\n  outline-offset: -1px;\n}\n\n.project[_ngcontent-%COMP%]   .project-details[_ngcontent-%COMP%] {\n  height: 75px;\n  padding-right: 18px;\n}\n\n.project[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 18px;\n  line-height: 18px;\n  color: #000;\n  margin: 0;\n}\n\n.project[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 60%;\n  color: #787780;\n  font-weight: normal;\n  align-self: middle;\n}\n\n.project[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n}\n\n.project[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  line-height: 18px;\n  font-weight: normal;\n  color: #787780;\n}\n\n@media (min-width: 768px) {\n  .project[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .project[_ngcontent-%COMP%]:hover   h2[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .project[_ngcontent-%COMP%]:hover   strong[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9ydGZvbGlvLWxpc3QvcG9ydGZvbGlvLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvdmFyaWFibGVzLnNjc3MiLCJzcmMvc3R5bGVzL2dyaWQvbWl4aW5zL19icmVha3BvaW50cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFIdkI7O0FBQUE7RUFPTSx3Q0NJTTtFREhOLHNCQUFzQjtBQUg1Qjs7QUFMQTtFQWNNLHVDQ0hNO0FERlo7O0FBVEE7RUFtQkksbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsbUJDWlU7RUFlWixzQ0FBcUM7RUFDckMsb0JBQW9CO0FEUnRCOztBQXJCQTtFQThCSSxZQUFZO0VBQ1osbUJBQW1CO0FBTHZCOztBQTFCQTtFQW1DSSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFdDMUJRO0VEMkJSLFNBQVM7QUFMYjs7QUFqQ0E7RUF5Q00sY0FBYztFQUNkLGNDN0JRO0VEOEJSLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFKeEI7O0FBeENBO0VBaURJLGdCQUFnQjtBQUxwQjs7QUE1Q0E7RUF1REksaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixjQzVDVTtBRHFDZDs7QUVNSTtFRnhESjtJQThETSxhQUFhO0VBUGpCO0VBdkRGO0lBb0VRLGFBQWE7RUFWbkI7RUExREY7SUF3RVEsY0FBYztFQVhwQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcG9ydGZvbGlvLWxpc3QvcG9ydGZvbGlvLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICd+c3JjL3ZhcmlhYmxlcyc7XG5AaW1wb3J0ICd+c3JjL3N0eWxlcy9ncmlkL2JyZWFrcG9pbnRzJztcblxuLy8gUHJvamVjdCBMaXN0IENvbXBvbmVudHNcbi5wcm9qZWN0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxuICAmOmhvdmVyIHtcbiAgICAmID4gaW1nIHtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoJGJsYWNrLCAuMTIpO1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgICB9XG4gIH1cblxuICAmOmFjdGl2ZSB7XG4gICAgJiA+IGltZyB7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMzBweCByZ2JhKCRibGFjaywgLjMpO1xuICAgIH1cbiAgfVxuXG4gIGltZyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRyYW5zaXRpb246IC4yNXMgZWFzZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgICBtaW4td2lkdGg6IDM1MHB4O1xuICAgIGJhY2tncm91bmQ6ICRncmF5O1xuICAgIEBpbmNsdWRlIGltYWdlLWJvcmRlcjtcbiAgfVxuXG4gIC5wcm9qZWN0LWRldGFpbHMge1xuICAgIGhlaWdodDogNzVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxOHB4O1xuICB9XG5cbiAgaDIge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICBjb2xvcjogJGJsYWNrO1xuICAgIG1hcmdpbjogMDtcblxuICAgIHNwYW4ge1xuICAgICAgZm9udC1zaXplOiA2MCU7XG4gICAgICBjb2xvcjogJGdyYXk7XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgYWxpZ24tc2VsZjogbWlkZGxlO1xuICAgIH1cbiAgfVxuXG4gIGxpIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICB9XG5cbiAgLy8gSGlkZSBkZXNjcmlwdGlvblxuICBzdHJvbmcge1xuXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBjb2xvcjogJGdyYXk7XG4gIH1cblxuICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKG1kKSB7XG4gICAgc3Ryb25nIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLy8gT24gaG92ZXIsIGhpZGUgaDIgc2hvdyBzdHJvbmdcbiAgICAmOmhvdmVyIHtcbiAgICAgIGgyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgc3Ryb25nIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn1cbiIsIi8vIEdsb2JhbCBTdHlsaW5nIFZhcmlhYmxlc1xuJGJyYW5kLXByaW1hcnk6ICNlOTAwMzk7XG5cblxuLy8gQ2FsY3VsYXRlIE1lZGl1bSBFbXBoYXNpcyBDb2xvclxuQGZ1bmN0aW9uIG1lZGl1bS1lbXBoYXNpcygkaW5wdXQtY29sb3IpIHtcbiAgQHJldHVybiByZ2JhKCRpbnB1dC1jb2xvciwgLjEyKTtcbn1cblxuLy8gQ2FsY3VsYXRlIExvdyBFbXBoYXNpcyBDb2xvclxuQGZ1bmN0aW9uIGxvdy1lbXBoYXNpcygkaW5wdXQtY29sb3IpIHtcbiAgQHJldHVybiByZ2JhKCRpbnB1dC1jb2xvciwgLjA1KTtcbn1cblxuLy8gQ29sb3IgTmV1dHJhbHNcbiRibGFjazogIzAwMDtcbiR3aGl0ZTogI2ZmZjtcbiRncmF5OiAjNzg3NzgwO1xuJGxpZ2h0LWdyYXk6ICM4ZDhlOTM7XG5cbiRib3JkZXItY29sb3I6ICNjOWM5Yzk7XG5cbi8vIExheW91dCB2YXJpYWJsZXMgZm9yIGNvbnNpc3RlbmN5XG4kZ2xvYmFsLXBhZGRpbmc6IDMwcHg7XG4kZ2xvYmFsLW1hcmdpbjogMzBweDtcbiRnbG9iYWwtcmFkaXVzOiA1cHg7XG5cbi8vIEVhc2UgVHJhbnNpdGlvblxuJGdsb2JhbC1lYXNlOiBjdWJpYy1iZXppZXIoLjQsIDAsIC4yLCAxKTtcblxuLy8gU3VidGxlIGluc2V0IGJvcmRlclxuQG1peGluIGltYWdlLWJvcmRlciB7XG4gIG91dGxpbmU6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4wNSk7XG4gIG91dGxpbmUtb2Zmc2V0OiAtMXB4O1xufVxuIiwiLy8gQnJlYWtwb2ludCB2aWV3cG9ydCBzaXplcyBhbmQgbWVkaWEgcXVlcmllcy5cbi8vXG4vLyBCcmVha3BvaW50cyBhcmUgZGVmaW5lZCBhcyBhIG1hcCBvZiAobmFtZTogbWluaW11bSB3aWR0aCksIG9yZGVyIGZyb20gc21hbGwgdG8gbGFyZ2U6XG4vL1xuLy8gICAgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KVxuLy9cbi8vIFRoZSBtYXAgZGVmaW5lZCBpbiB0aGUgYCRncmlkLWJyZWFrcG9pbnRzYCBnbG9iYWwgdmFyaWFibGUgaXMgdXNlZCBhcyB0aGUgYCRicmVha3BvaW50c2AgYXJndW1lbnQgYnkgZGVmYXVsdC5cblxuLy8gTmFtZSBvZiB0aGUgbmV4dCBicmVha3BvaW50LCBvciBudWxsIGZvciB0aGUgbGFzdCBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAkYnJlYWtwb2ludC1uYW1lczogKHhzIHNtIG1kIGxnIHhsKSlcbi8vICAgIG1kXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludC1uYW1lczogbWFwLWtleXMoJGJyZWFrcG9pbnRzKSkge1xuICAkbjogaW5kZXgoJGJyZWFrcG9pbnQtbmFtZXMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbiAhPSBudWxsIGFuZCAkbiA8IGxlbmd0aCgkYnJlYWtwb2ludC1uYW1lcyksIG50aCgkYnJlYWtwb2ludC1uYW1lcywgJG4gKyAxKSwgbnVsbCk7XG59XG5cbi8vIE1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIHNtYWxsZXN0IChmaXJzdCkgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1pbihzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDU3NnB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbWluICE9IDAsICRtaW4sIG51bGwpO1xufVxuXG4vLyBNYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBsYXJnZXN0IChsYXN0KSBicmVha3BvaW50LlxuLy8gVGhlIG1heGltdW0gdmFsdWUgaXMgY2FsY3VsYXRlZCBhcyB0aGUgbWluaW11bSBvZiB0aGUgbmV4dCBvbmUgbGVzcyAwLjAycHhcbi8vIHRvIHdvcmsgYXJvdW5kIHRoZSBsaW1pdGF0aW9ucyBvZiBgbWluLWAgYW5kIGBtYXgtYCBwcmVmaXhlcyBhbmQgdmlld3BvcnRzIHdpdGggZnJhY3Rpb25hbCB3aWR0aHMuXG4vLyBTZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL21lZGlhcXVlcmllcy00LyNtcS1taW4tbWF4XG4vLyBVc2VzIDAuMDJweCByYXRoZXIgdGhhbiAwLjAxcHggdG8gd29yayBhcm91bmQgYSBjdXJyZW50IHJvdW5kaW5nIGJ1ZyBpbiBTYWZhcmkuXG4vLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3ODI2MVxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWF4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNzY3Ljk4cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbmV4dDogYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAcmV0dXJuIGlmKCRuZXh0LCBicmVha3BvaW50LW1pbigkbmV4dCwgJGJyZWFrcG9pbnRzKSAtIC4wMiwgbnVsbCk7XG59XG5cbi8vIFJldHVybnMgYSBibGFuayBzdHJpbmcgaWYgc21hbGxlc3QgYnJlYWtwb2ludCwgb3RoZXJ3aXNlIHJldHVybnMgdGhlIG5hbWUgd2l0aCBhIGRhc2ggaW4gZnJvbnQuXG4vLyBVc2VmdWwgZm9yIG1ha2luZyByZXNwb25zaXZlIHV0aWxpdGllcy5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHhzLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCJcIiAgKFJldHVybnMgYSBibGFuayBzdHJpbmcpXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCItc21cIlxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtaW5maXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgQHJldHVybiBpZihicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKSA9PSBudWxsLCBcIlwiLCBcIi0jeyRuYW1lfVwiKTtcbn1cblxuLy8gTWVkaWEgb2YgYXQgbGVhc3QgdGhlIG1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCB3aWRlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1pbiB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgb2YgYXQgbW9zdCB0aGUgbWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIGxhcmdlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1heCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgdGhhdCBzcGFucyBtdWx0aXBsZSBicmVha3BvaW50IHdpZHRocy5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBiZXR3ZWVuIHRoZSBtaW4gYW5kIG1heCBicmVha3BvaW50c1xuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtYmV0d2VlbigkbG93ZXIsICR1cHBlciwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbG93ZXIsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCR1cHBlciwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbG93ZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCR1cHBlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuLy8gTWVkaWEgYmV0d2VlbiB0aGUgYnJlYWtwb2ludCdzIG1pbmltdW0gYW5kIG1heGltdW0gd2lkdGhzLlxuLy8gTm8gbWluaW11bSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQsIGFuZCBubyBtYXhpbXVtIGZvciB0aGUgbGFyZ2VzdCBvbmUuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgb25seSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCwgbm90IHZpZXdwb3J0cyBhbnkgd2lkZXIgb3IgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1vbmx5KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG4iXX0= */"],
        data: {
          animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('photosAnimation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :exit', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 0,
            transform: 'translateY(15px)'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('.project', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])('50ms', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('230ms cubic-bezier(0.4, 0.0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 1,
            transform: 'translateY(-15px)'
          }))]))])])]
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortfolioListComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-portfolio-list',
            templateUrl: './portfolio-list.component.html',
            styleUrls: ['./portfolio-list.component.scss'],
            animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('photosAnimation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :exit', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
              opacity: 0,
              transform: 'translateY(15px)'
            })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('.project', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])('50ms', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('230ms cubic-bezier(0.4, 0.0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
              opacity: 1,
              transform: 'translateY(-15px)'
            }))]))])])]
          }]
        }], function () {
          return [{
            type: _contentful_service__WEBPACK_IMPORTED_MODULE_2__["ContentfulService"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "UhM7":
    /*!***************************************!*\
      !*** ./src/app/projectfilter.pipe.ts ***!
      \***************************************/

    /*! exports provided: ProjectfilterPipe */

    /***/
    function UhM7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectfilterPipe", function () {
        return ProjectfilterPipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ProjectfilterPipe = /*#__PURE__*/function () {
        function ProjectfilterPipe() {
          _classCallCheck(this, ProjectfilterPipe);
        }

        _createClass(ProjectfilterPipe, [{
          key: "transform",
          value: function transform(value, filterString) {
            var resultArray = [];

            if (!filterString) {
              return value;
            }

            var _iterator = _createForOfIteratorHelper(value),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var item = _step.value;

                // Check for fields
                if (item.fields.typeOfWork) {
                  // Filter Fields
                  if (item.fields.typeOfWork.includes(filterString)) {
                    resultArray.push(item);
                  }
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            return resultArray;
          }
        }]);

        return ProjectfilterPipe;
      }();

      ProjectfilterPipe.ɵfac = function ProjectfilterPipe_Factory(t) {
        return new (t || ProjectfilterPipe)();
      };

      ProjectfilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "projectfilter",
        type: ProjectfilterPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectfilterPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'projectfilter'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _contentful_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./contentful.service */
      "o6/c");
      /* harmony import */


      var ngx_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-markdown */
      "lR5k");
      /* harmony import */


      var _portfolio_list_portfolio_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./portfolio-list/portfolio-list.component */
      "TcF+");
      /* harmony import */


      var _portfolio_detail_portfolio_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./portfolio-detail/portfolio-detail.component */
      "6MTs");
      /* harmony import */


      var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./home-page/home-page.component */
      "F1my");
      /* harmony import */


      var _contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./contact-page/contact-page.component */
      "kGaf");
      /* harmony import */


      var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./navigation/navigation.component */
      "k5x5");
      /* harmony import */


      var _button_button_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./button/button.component */
      "be9G");
      /* harmony import */


      var _page_footer_page_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./page-footer/page-footer.component */
      "LfgP");
      /* harmony import */


      var _projectfilter_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./projectfilter.pipe */
      "UhM7");
      /* harmony import */


      var _filter_list_filter_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./filter-list/filter-list.component */
      "514t"); // ./src/app/app.module.ts
      // Browser Animations
      // ROUTING
      // SERVICES
      // Contentful Import
      // Markdown
      // Site Components


      var routes = [{
        path: '',
        component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_9__["HomePageComponent"]
      }, {
        path: 'work',
        component: _portfolio_list_portfolio_list_component__WEBPACK_IMPORTED_MODULE_7__["PortfolioListComponent"]
      }, {
        path: 'work/:slug',
        component: _portfolio_detail_portfolio_detail_component__WEBPACK_IMPORTED_MODULE_8__["PortfolioDetailComponent"]
      }, {
        path: 'contact',
        component: _contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_10__["ContactPageComponent"]
      }];

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [_contentful_service__WEBPACK_IMPORTED_MODULE_5__["ContentfulService"]],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          scrollPositionRestoration: 'enabled'
        }), ngx_markdown__WEBPACK_IMPORTED_MODULE_6__["MarkdownModule"].forRoot()]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _portfolio_list_portfolio_list_component__WEBPACK_IMPORTED_MODULE_7__["PortfolioListComponent"], _portfolio_detail_portfolio_detail_component__WEBPACK_IMPORTED_MODULE_8__["PortfolioDetailComponent"], _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_9__["HomePageComponent"], _contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_10__["ContactPageComponent"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_11__["NavigationComponent"], _button_button_component__WEBPACK_IMPORTED_MODULE_12__["ButtonComponent"], _page_footer_page_footer_component__WEBPACK_IMPORTED_MODULE_13__["PageFooterComponent"], _projectfilter_pipe__WEBPACK_IMPORTED_MODULE_14__["ProjectfilterPipe"], _filter_list_filter_list_component__WEBPACK_IMPORTED_MODULE_15__["FilterListComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], ngx_markdown__WEBPACK_IMPORTED_MODULE_6__["MarkdownModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _portfolio_list_portfolio_list_component__WEBPACK_IMPORTED_MODULE_7__["PortfolioListComponent"], _portfolio_detail_portfolio_detail_component__WEBPACK_IMPORTED_MODULE_8__["PortfolioDetailComponent"], _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_9__["HomePageComponent"], _contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_10__["ContactPageComponent"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_11__["NavigationComponent"], _button_button_component__WEBPACK_IMPORTED_MODULE_12__["ButtonComponent"], _page_footer_page_footer_component__WEBPACK_IMPORTED_MODULE_13__["PageFooterComponent"], _projectfilter_pipe__WEBPACK_IMPORTED_MODULE_14__["ProjectfilterPipe"], _filter_list_filter_list_component__WEBPACK_IMPORTED_MODULE_15__["FilterListComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
              scrollPositionRestoration: 'enabled'
            }), ngx_markdown__WEBPACK_IMPORTED_MODULE_6__["MarkdownModule"].forRoot()],
            providers: [_contentful_service__WEBPACK_IMPORTED_MODULE_5__["ContentfulService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "be9G":
    /*!********************************************!*\
      !*** ./src/app/button/button.component.ts ***!
      \********************************************/

    /*! exports provided: ButtonComponent */

    /***/
    function be9G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonComponent", function () {
        return ButtonComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var ButtonComponent = /*#__PURE__*/function () {
        function ButtonComponent() {
          _classCallCheck(this, ButtonComponent);
        }

        _createClass(ButtonComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ButtonComponent;
      }();

      ButtonComponent.ɵfac = function ButtonComponent_Factory(t) {
        return new (t || ButtonComponent)();
      };

      ButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ButtonComponent,
        selectors: [["app-button"]],
        inputs: {
          cta: "cta",
          btnStyle: "btnStyle",
          link: "link"
        },
        decls: 2,
        vars: 5,
        consts: [[3, "routerLink"]],
        template: function ButtonComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("button ", ctx.btnStyle, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", ctx.link);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.cta);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
        styles: [".button[_ngcontent-%COMP%] {\n  background: #e90039;\n  border-radius: 100px;\n  color: #fff;\n  font-weight: bold;\n  margin-right: 24px;\n  padding: 20px 30px;\n  text-align: center;\n  text-decoration: none;\n}\n\n.button[_ngcontent-%COMP%]:hover {\n  background: #d00033;\n}\n\n.button.white[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #ccc;\n}\n\n.button.outlined[_ngcontent-%COMP%] {\n  border: 1px solid #000;\n  color: #000;\n}\n\n.button.outlined[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.05);\n}\n\n.button.outlined[_ngcontent-%COMP%]:active {\n  background: rgba(0, 0, 0, 0.12);\n}\n\n.button.large[_ngcontent-%COMP%] {\n  margin-right: 12px;\n  padding: 25px 35px;\n}\n\n.button.full-width[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.button.small[_ngcontent-%COMP%] {\n  margin-right: 36px;\n  padding: 10px 20px;\n}\n\n.button.text[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #000;\n}\n\n.button.text[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.05);\n}\n\n.button.text[_ngcontent-%COMP%]:active {\n  background: rgba(0, 0, 0, 0.12);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuc2NzcyIsInNyYy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLG1CQ0ZxQjtFREdyQixvQkFBb0I7RUFDcEIsV0NXVTtFRFZWLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFEdkI7O0FBUEE7RUFXSSxtQkFBcUM7QUFBekM7O0FBWEE7RUFlSSxnQkNEUTtFREVSLHNCQUFzQjtBQUExQjs7QUFoQkE7RUFvQkksc0JDUFE7RURRUixXQ1JRO0FEUVo7O0FBckJBO0VBd0JNLCtCQ1hNO0FEWVo7O0FBekJBO0VBNEJNLCtCQ2ZNO0FEZ0JaOztBQTdCQTtFQWlDSSxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQXRCOztBQWxDQTtFQXNDSSxjQUFjO0FBQWxCOztBQXRDQTtFQTBDSSxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQXRCOztBQTNDQTtFQStDSSx1QkFBdUI7RUFDdkIsV0NuQ1E7QURtQ1o7O0FBaERBO0VBbURNLCtCQ3RDTTtBRHVDWjs7QUFwREE7RUF1RE0sK0JDMUNNO0FEMkNaIiwiZmlsZSI6InNyYy9hcHAvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ35zcmMvdmFyaWFibGVzJztcblxuLmJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICRicmFuZC1wcmltYXJ5O1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgY29sb3I6ICR3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1yaWdodDogMjRweDtcbiAgcGFkZGluZzogMjBweCAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oJGJyYW5kLXByaW1hcnksIDUpO1xuICB9XG5cbiAgJi53aGl0ZSB7XG4gICAgYmFja2dyb3VuZDogJHdoaXRlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIH1cblxuICAmLm91dGxpbmVkIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkYmxhY2s7XG4gICAgY29sb3I6ICRibGFjaztcblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogbG93LWVtcGhhc2lzKCRibGFjayk7XG4gICAgfVxuXG4gICAgJjphY3RpdmUge1xuICAgICAgYmFja2dyb3VuZDogbWVkaXVtLWVtcGhhc2lzKCRibGFjayk7XG4gICAgfVxuICB9XG5cbiAgJi5sYXJnZSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICAgIHBhZGRpbmc6IDI1cHggMzVweDtcbiAgfVxuXG4gICYuZnVsbC13aWR0aCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAmLnNtYWxsIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDM2cHg7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICB9XG5cbiAgJi50ZXh0IHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogJGJsYWNrO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiBsb3ctZW1waGFzaXMoJGJsYWNrKTtcbiAgICB9XG5cbiAgICAmOmFjdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kOiBtZWRpdW0tZW1waGFzaXMoJGJsYWNrKTtcbiAgICB9XG4gIH1cbn1cbiIsIi8vIEdsb2JhbCBTdHlsaW5nIFZhcmlhYmxlc1xuJGJyYW5kLXByaW1hcnk6ICNlOTAwMzk7XG5cblxuLy8gQ2FsY3VsYXRlIE1lZGl1bSBFbXBoYXNpcyBDb2xvclxuQGZ1bmN0aW9uIG1lZGl1bS1lbXBoYXNpcygkaW5wdXQtY29sb3IpIHtcbiAgQHJldHVybiByZ2JhKCRpbnB1dC1jb2xvciwgLjEyKTtcbn1cblxuLy8gQ2FsY3VsYXRlIExvdyBFbXBoYXNpcyBDb2xvclxuQGZ1bmN0aW9uIGxvdy1lbXBoYXNpcygkaW5wdXQtY29sb3IpIHtcbiAgQHJldHVybiByZ2JhKCRpbnB1dC1jb2xvciwgLjA1KTtcbn1cblxuLy8gQ29sb3IgTmV1dHJhbHNcbiRibGFjazogIzAwMDtcbiR3aGl0ZTogI2ZmZjtcbiRncmF5OiAjNzg3NzgwO1xuJGxpZ2h0LWdyYXk6ICM4ZDhlOTM7XG5cbiRib3JkZXItY29sb3I6ICNjOWM5Yzk7XG5cbi8vIExheW91dCB2YXJpYWJsZXMgZm9yIGNvbnNpc3RlbmN5XG4kZ2xvYmFsLXBhZGRpbmc6IDMwcHg7XG4kZ2xvYmFsLW1hcmdpbjogMzBweDtcbiRnbG9iYWwtcmFkaXVzOiA1cHg7XG5cbi8vIEVhc2UgVHJhbnNpdGlvblxuJGdsb2JhbC1lYXNlOiBjdWJpYy1iZXppZXIoLjQsIDAsIC4yLCAxKTtcblxuLy8gU3VidGxlIGluc2V0IGJvcmRlclxuQG1peGluIGltYWdlLWJvcmRlciB7XG4gIG91dGxpbmU6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4wNSk7XG4gIG91dGxpbmUtb2Zmc2V0OiAtMXB4O1xufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-button',
            templateUrl: './button.component.html',
            styleUrls: ['./button.component.scss']
          }]
        }], function () {
          return [];
        }, {
          cta: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          btnStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          link: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "k5x5":
    /*!****************************************************!*\
      !*** ./src/app/navigation/navigation.component.ts ***!
      \****************************************************/

    /*! exports provided: NavigationComponent */

    /***/
    function k5x5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavigationComponent", function () {
        return NavigationComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var _c0 = function _c0() {
        return ["/work"];
      };

      var _c1 = function _c1() {
        return [""];
      };

      var _c2 = function _c2() {
        return ["/contact"];
      };

      var NavigationComponent = /*#__PURE__*/function () {
        function NavigationComponent() {
          _classCallCheck(this, NavigationComponent);
        }

        _createClass(NavigationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NavigationComponent;
      }();

      NavigationComponent.ɵfac = function NavigationComponent_Factory(t) {
        return new (t || NavigationComponent)();
      };

      NavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NavigationComponent,
        selectors: [["app-navigation"]],
        decls: 12,
        vars: 6,
        consts: [[1, "layout-underline"], ["routerLinkActive", "active", 3, "routerLink"], [1, "logo", 3, "routerLink"], ["src", "../../assets/img/eborall-logo.svg", "alt", "Joseph Eborall", "height", "65"]],
        template: function NavigationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "My Work");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Contact");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]],
        styles: ["nav[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  align-items: center;\n  padding: 30px;\n}\n\nnav[_ngcontent-%COMP%]   .toggle[_ngcontent-%COMP%] {\n  display: none;\n}\n\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #8d8e93;\n  font-weight: normal;\n  font-size: 16px;\n  transition: all 150ms ease;\n  text-decoration: none;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #000;\n  font-weight: bold;\n}\n\nnav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  color: #000;\n  font-weight: bold;\n  padding-bottom: 5px;\n  border-bottom: 2px solid #e90039;\n}\n\nnav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-decoration: none;\n  transition: 230ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n\nnav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n\nnav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  list-style: none;\n  justify-content: space-between;\n  flex-direction: row;\n  align-items: center;\n}\n\nnav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 0 30px;\n}\n\n.layout-underline[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #c9c9c9;\n  margin-bottom: 30px;\n}\n\n@media (max-width: 575.98px) {\n  .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 50px;\n  }\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    padding-left: 0;\n    width: 100%;\n  }\n  nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL3ZhcmlhYmxlcy5zY3NzIiwic3JjL3N0eWxlcy9ncmlkL21peGlucy9fYnJlYWtwb2ludHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixhQ2VtQjtBRGpCckI7O0FBSEE7RUFRSSxhQUFhO0FBRGpCOztBQVBBO0VBWUksY0NHZ0I7RURGaEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZiwwQkFBMEI7RUFDMUIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFEdkI7O0FBakJBO0VBcUJNLFdDVE07RURVTixpQkFBaUI7QUFBdkI7O0FBdEJBO0VBMEJNLFdDZE07RURlTixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGdDQy9CaUI7QUQrQnZCOztBQTdCQTtFQWtDSSxxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLDhDQ1hvQztBRFV4Qzs7QUFuQ0E7RUF1Q00sc0JBQXNCO0FBQTVCOztBQXZDQTtFQTJDTSxzQkFBc0I7QUFBNUI7O0FBM0NBO0VBZ0RJLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFEdkI7O0FBbkRBO0VBd0RJLGVDcENpQjtBRG1DckI7O0FBS0E7RUFDRSxnQ0M1Q29CO0VENkNwQixtQkN6Q2tCO0FEdUNwQjs7QUVVSTtFRkhGO0lBRUksWUFBWTtFQUpoQjtFQVFBO0lBRUksZUFBZTtJQUNmLFdBQVc7RUFQZjtFQUlBO0lBT0ksVUFBVTtFQVJkO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICd+c3JjL3ZhcmlhYmxlcyc7XG5AaW1wb3J0ICd+c3JjL3N0eWxlcy9ncmlkL2JyZWFrcG9pbnRzJztcblxubmF2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogJGdsb2JhbC1wYWRkaW5nO1xuXG4gIC50b2dnbGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICBhIHtcbiAgICBjb2xvcjogJGxpZ2h0LWdyYXk7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2U7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcblxuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6ICRibGFjaztcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cblxuICAgICYuYWN0aXZlIHtcbiAgICAgIGNvbG9yOiAkYmxhY2s7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJGJyYW5kLXByaW1hcnk7XG4gICAgfVxuICB9XG5cbiAgLmxvZ28ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogMjMwbXMgJGdsb2JhbC1lYXNlO1xuXG4gICAgaW1nIHtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICAgIH1cbiAgfVxuXG4gIHVsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIGxpIHtcbiAgICBwYWRkaW5nOiAwICRnbG9iYWwtcGFkZGluZztcbiAgfVxufVxuXG4ubGF5b3V0LXVuZGVybGluZSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xuICBtYXJnaW4tYm90dG9tOiAkZ2xvYmFsLW1hcmdpbjtcbn1cblxuLy8gTmF2IFBhZGRpbmcgZm9yIFNtYWxsIFNjcmVlbnNcbkBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bih4cykge1xuICAubG9nbyB7XG4gICAgaW1nIHtcbiAgICAgIGhlaWdodDogNTBweDtcbiAgICB9XG4gIH1cblxuICBuYXYge1xuICAgIHVsIHtcbiAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIGxpIHtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuICB9XG59XG5cbi8vIC8vIE1vYmlsZSBTdHlsaW5nXG4vLyBAbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcbi8vICAgbmF2IHtcblxuLy8gICAgIC50b2dnbGUge1xuLy8gICAgICAgZGlzcGxheTogYmxvY2s7XG4vLyAgICAgfVxuXG4vLyAgICAgdWwge1xuLy8gICAgICAgZGlzcGxheTogbm9uZTtcbi8vICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4vLyAgICAgICBmbGV4LWJhc2lzOiAxMDAlO1xuLy8gICAgICAgZmxleC1ncm93OiAxO1xuLy8gICAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuLy8gICAgICAgYm94LXNoYWRvdzogMCAwIDMwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuLy8gICAgICAgcGFkZGluZzogMTVweCAhaW1wb3J0YW50O1xuLy8gICAgICAgei1pbmRleDogMzAwMDtcbi8vICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4vLyAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuLy8gICAgIH1cblxuLy8gICAgIGxpIHtcbi8vICAgICAgIG1hcmdpbjogOHB4IDA7XG5cbi8vICAgICAgIGEge1xuLy8gICAgICAgICBkaXNwbGF5OiBibG9jaztcblxuLy8gICAgICAgICAmOmhvdmVyIHtcbi8vICAgICAgICAgICBjb2xvcjogIzAwMDtcbi8vICAgICAgICAgfVxuLy8gICAgICAgfVxuLy8gICAgIH1cblxuLy8gICB9XG5cbi8vICAgLmFjdGl2ZSB7XG4vLyAgICAgZGlzcGxheTogZmxleDtcbi8vICAgfVxuLy8gfVxuIiwiLy8gR2xvYmFsIFN0eWxpbmcgVmFyaWFibGVzXG4kYnJhbmQtcHJpbWFyeTogI2U5MDAzOTtcblxuXG4vLyBDYWxjdWxhdGUgTWVkaXVtIEVtcGhhc2lzIENvbG9yXG5AZnVuY3Rpb24gbWVkaXVtLWVtcGhhc2lzKCRpbnB1dC1jb2xvcikge1xuICBAcmV0dXJuIHJnYmEoJGlucHV0LWNvbG9yLCAuMTIpO1xufVxuXG4vLyBDYWxjdWxhdGUgTG93IEVtcGhhc2lzIENvbG9yXG5AZnVuY3Rpb24gbG93LWVtcGhhc2lzKCRpbnB1dC1jb2xvcikge1xuICBAcmV0dXJuIHJnYmEoJGlucHV0LWNvbG9yLCAuMDUpO1xufVxuXG4vLyBDb2xvciBOZXV0cmFsc1xuJGJsYWNrOiAjMDAwO1xuJHdoaXRlOiAjZmZmO1xuJGdyYXk6ICM3ODc3ODA7XG4kbGlnaHQtZ3JheTogIzhkOGU5MztcblxuJGJvcmRlci1jb2xvcjogI2M5YzljOTtcblxuLy8gTGF5b3V0IHZhcmlhYmxlcyBmb3IgY29uc2lzdGVuY3lcbiRnbG9iYWwtcGFkZGluZzogMzBweDtcbiRnbG9iYWwtbWFyZ2luOiAzMHB4O1xuJGdsb2JhbC1yYWRpdXM6IDVweDtcblxuLy8gRWFzZSBUcmFuc2l0aW9uXG4kZ2xvYmFsLWVhc2U6IGN1YmljLWJlemllciguNCwgMCwgLjIsIDEpO1xuXG4vLyBTdWJ0bGUgaW5zZXQgYm9yZGVyXG5AbWl4aW4gaW1hZ2UtYm9yZGVyIHtcbiAgb3V0bGluZTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjA1KTtcbiAgb3V0bGluZS1vZmZzZXQ6IC0xcHg7XG59XG4iLCIvLyBCcmVha3BvaW50IHZpZXdwb3J0IHNpemVzIGFuZCBtZWRpYSBxdWVyaWVzLlxuLy9cbi8vIEJyZWFrcG9pbnRzIGFyZSBkZWZpbmVkIGFzIGEgbWFwIG9mIChuYW1lOiBtaW5pbXVtIHdpZHRoKSwgb3JkZXIgZnJvbSBzbWFsbCB0byBsYXJnZTpcbi8vXG4vLyAgICAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpXG4vL1xuLy8gVGhlIG1hcCBkZWZpbmVkIGluIHRoZSBgJGdyaWQtYnJlYWtwb2ludHNgIGdsb2JhbCB2YXJpYWJsZSBpcyB1c2VkIGFzIHRoZSBgJGJyZWFrcG9pbnRzYCBhcmd1bWVudCBieSBkZWZhdWx0LlxuXG4vLyBOYW1lIG9mIHRoZSBuZXh0IGJyZWFrcG9pbnQsIG9yIG51bGwgZm9yIHRoZSBsYXN0IGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICRicmVha3BvaW50LW5hbWVzOiAoeHMgc20gbWQgbGcgeGwpKVxuLy8gICAgbWRcbkBmdW5jdGlvbiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMsICRicmVha3BvaW50LW5hbWVzOiBtYXAta2V5cygkYnJlYWtwb2ludHMpKSB7XG4gICRuOiBpbmRleCgkYnJlYWtwb2ludC1uYW1lcywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRuICE9IG51bGwgYW5kICRuIDwgbGVuZ3RoKCRicmVha3BvaW50LW5hbWVzKSwgbnRoKCRicmVha3BvaW50LW5hbWVzLCAkbiArIDEpLCBudWxsKTtcbn1cblxuLy8gTWluaW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgc21hbGxlc3QgKGZpcnN0KSBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWluKHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNTc2cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRtaW4gIT0gMCwgJG1pbiwgbnVsbCk7XG59XG5cbi8vIE1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIGxhcmdlc3QgKGxhc3QpIGJyZWFrcG9pbnQuXG4vLyBUaGUgbWF4aW11bSB2YWx1ZSBpcyBjYWxjdWxhdGVkIGFzIHRoZSBtaW5pbXVtIG9mIHRoZSBuZXh0IG9uZSBsZXNzIDAuMDJweFxuLy8gdG8gd29yayBhcm91bmQgdGhlIGxpbWl0YXRpb25zIG9mIGBtaW4tYCBhbmQgYG1heC1gIHByZWZpeGVzIGFuZCB2aWV3cG9ydHMgd2l0aCBmcmFjdGlvbmFsIHdpZHRocy5cbi8vIFNlZSBodHRwczovL3d3dy53My5vcmcvVFIvbWVkaWFxdWVyaWVzLTQvI21xLW1pbi1tYXhcbi8vIFVzZXMgMC4wMnB4IHJhdGhlciB0aGFuIDAuMDFweCB0byB3b3JrIGFyb3VuZCBhIGN1cnJlbnQgcm91bmRpbmcgYnVnIGluIFNhZmFyaS5cbi8vIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTc4MjYxXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1tYXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA3NjcuOThweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRuZXh0OiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEByZXR1cm4gaWYoJG5leHQsIGJyZWFrcG9pbnQtbWluKCRuZXh0LCAkYnJlYWtwb2ludHMpIC0gLjAyLCBudWxsKTtcbn1cblxuLy8gUmV0dXJucyBhIGJsYW5rIHN0cmluZyBpZiBzbWFsbGVzdCBicmVha3BvaW50LCBvdGhlcndpc2UgcmV0dXJucyB0aGUgbmFtZSB3aXRoIGEgZGFzaCBpbiBmcm9udC5cbi8vIFVzZWZ1bCBmb3IgbWFraW5nIHJlc3BvbnNpdmUgdXRpbGl0aWVzLlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoeHMsICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIlwiICAoUmV0dXJucyBhIGJsYW5rIHN0cmluZylcbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIi1zbVwiXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1pbmZpeCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICBAcmV0dXJuIGlmKGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpID09IG51bGwsIFwiXCIsIFwiLSN7JG5hbWV9XCIpO1xufVxuXG4vLyBNZWRpYSBvZiBhdCBsZWFzdCB0aGUgbWluaW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIHdpZGVyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWluIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSBvZiBhdCBtb3N0IHRoZSBtYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgbGFyZ2VzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWF4IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSB0aGF0IHNwYW5zIG11bHRpcGxlIGJyZWFrcG9pbnQgd2lkdGhzLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IGJldHdlZW4gdGhlIG1pbiBhbmQgbWF4IGJyZWFrcG9pbnRzXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1iZXR3ZWVuKCRsb3dlciwgJHVwcGVyLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRsb3dlciwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJHVwcGVyLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRsb3dlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJHVwcGVyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG4vLyBNZWRpYSBiZXR3ZWVuIHRoZSBicmVha3BvaW50J3MgbWluaW11bSBhbmQgbWF4aW11bSB3aWR0aHMuXG4vLyBObyBtaW5pbXVtIGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludCwgYW5kIG5vIG1heGltdW0gZm9yIHRoZSBsYXJnZXN0IG9uZS5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBvbmx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50LCBub3Qgdmlld3BvcnRzIGFueSB3aWRlciBvciBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LW9ubHkoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-navigation',
            templateUrl: './navigation.component.html',
            styleUrls: ['./navigation.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "kGaf":
    /*!********************************************************!*\
      !*** ./src/app/contact-page/contact-page.component.ts ***!
      \********************************************************/

    /*! exports provided: ContactPageComponent */

    /***/
    function kGaf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactPageComponent", function () {
        return ContactPageComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      var ContactPageComponent = function ContactPageComponent(titleService) {
        _classCallCheck(this, ContactPageComponent);

        this.titleService = titleService; // Set Page Title

        this.titleService.setTitle('Contact Me | Joseph Eborall');
      };

      ContactPageComponent.ɵfac = function ContactPageComponent_Factory(t) {
        return new (t || ContactPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]));
      };

      ContactPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ContactPageComponent,
        selectors: [["app-contact-page"]],
        decls: 19,
        vars: 0,
        consts: [[1, "lede"], ["autocomplete", "on", "uk-grid", "", "method", "post", "action", "https://formspree.io/josepheborall@gmail.com", 1, "uk-grid-small"], [1, "uk-inline", "uk-width-1-2@l"], ["uk-icon", "icon: user", 1, "uk-form-icon"], ["type", "text", "name", "name", "placeholder", "Name", 1, "uk-input"], ["uk-icon", "icon: receiver", 1, "uk-form-icon"], ["type", "phone", "name", "phone-number", "placeholder", "(XXX) XXX-XXXX", 1, "uk-input"], [1, "uk-inline", "uk-width-1-1"], ["uk-icon", "icon: mail", 1, "uk-form-icon"], ["type", "email", "name", "email", "placeholder", "Email Address", 1, "uk-input"], [1, "uk-width-1-1"], ["name", "message", "type", "text", "placeholder", "Message...", 1, "uk-textarea", 2, "border-radius", "25px", "padding", "25px", "min-width", "100%", "min-height", "150px"], ["uk-icon", "chevron-right", "type", "submit", 1, "uk-button", "uk-button-primary", "pill-button", "uk-width-1-1"]],
        template: function ContactPageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Contact");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Every project is unique. Tell me a bit about yours and see how much time and energy I can save you.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "textarea", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QtcGFnZS9jb250YWN0LXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactPageComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-contact-page',
            templateUrl: './contact-page.component.html',
            styleUrls: ['./contact-page.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "o6/c":
    /*!***************************************!*\
      !*** ./src/app/contentful.service.ts ***!
      \***************************************/

    /*! exports provided: ContentfulService */

    /***/
    function o6C(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContentfulService", function () {
        return ContentfulService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var contentful__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! contentful */
      "VjyN"); // import Contentful createClient and type for `Entry`
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

      var ContentfulService = /*#__PURE__*/function () {
        function ContentfulService() {
          _classCallCheck(this, ContentfulService);

          this.cdaClient = Object(contentful__WEBPACK_IMPORTED_MODULE_1__["createClient"])({
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
              'fields.slug': slug
            }).then(function (items) {
              return items[0];
            });
          }
        }]);

        return ContentfulService;
      }();

      ContentfulService.ɵfac = function ContentfulService_Factory(t) {
        return new (t || ContentfulService)();
      };

      ContentfulService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ContentfulService,
        factory: ContentfulService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentfulService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
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
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map