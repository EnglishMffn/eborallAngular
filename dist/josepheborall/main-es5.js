(function () {
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


      var fadeAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeAnimation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* <=> *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0,
        position: 'absolute',
        transform: 'translateY(15px)'
      })]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms cubic-bezier(0.4, 0.0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'translateY(-15px)',
        opacity: 1
      }))])])]);
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
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx_r0.project.fields.mainMedia.fields.file.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "", ctx_r0.project.fields.mainMedia.fields.file.url, "?&w=1180&h=750", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

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

      function PortfolioDetailComponent_dl_20_Template(rf, ctx) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.project.fields.typeOfWork);
        }
      }

      function PortfolioDetailComponent_dl_21_Template(rf, ctx) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.project.fields.tools);
        }
      }

      function PortfolioDetailComponent_aside_22_li_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var image_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", image_r7.fields.file.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "", image_r7.fields.file.url, "?fit=thumb&w=570&h=360", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        }
      }

      function PortfolioDetailComponent_aside_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "aside", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PortfolioDetailComponent_aside_22_li_2_Template, 3, 2, "li", 14);

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
        decls: 23,
        vars: 14,
        consts: [[1, "back-toggle", 3, "routerLink"], ["src", "../../assets/img/arrow-left.svg", "alt", "Back"], [1, "row"], [1, "col-md-12"], [1, "project-head"], [1, "headline"], [1, "summary"], [3, "href", 4, "ngIf"], [3, "ngClass"], [1, "col-md-6"], [4, "ngIf"], ["class", "col-md-6", 4, "ngIf"], [3, "href"], [1, "img-fluid", 3, "src", "alt"], [4, "ngFor", "ngForOf"], ["loading", "lazy", 1, "img-fluid", 3, "src"]],
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

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "section", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "main", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "markdown");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "section", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, PortfolioDetailComponent_dl_17_Template, 5, 1, "dl", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, PortfolioDetailComponent_dl_18_Template, 5, 1, "dl", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, PortfolioDetailComponent_dl_20_Template, 5, 1, "dl", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, PortfolioDetailComponent_dl_21_Template, 5, 1, "dl", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, PortfolioDetailComponent_aside_22_Template, 3, 1, "aside", 11);

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

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.project.fields.typeOfWork);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.project.fields.typeOfWork);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.project.fields.media);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], ngx_markdown__WEBPACK_IMPORTED_MODULE_6__["MarkdownComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
        styles: [".project-head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n}\n\n.project-head[_ngcontent-%COMP%]   .headline[_ngcontent-%COMP%] {\n  font-size: 34px;\n}\n\naside[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  margin-bottom: 20px;\n}\n\n.back-toggle[_ngcontent-%COMP%] {\n  color: black;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 30px;\n  margin-left: -75px;\n  transition: 1s ease;\n}\n\n.back-toggle[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1) translateX(-5px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9ydGZvbGlvLWRldGFpbC9wb3J0Zm9saW8tZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixxQkFBcUI7QUFEdkI7O0FBRkE7RUFNSSxlQUFlO0FBQW5COztBQUlBO0VBRUksZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUZ2Qjs7QUFNQTtFQUNFLFlBQVk7RUFDWix3QkFBZ0I7RUFBaEIsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBSHJCOztBQUZBO0VBUUksc0NBQXNDO0FBRjFDIiwiZmlsZSI6InNyYy9hcHAvcG9ydGZvbGlvLWRldGFpbC9wb3J0Zm9saW8tZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnfnNyYy92YXJpYWJsZXMnO1xuXG4ucHJvamVjdC1oZWFkIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG5cbiAgLmhlYWRsaW5lIHtcbiAgICBmb250LXNpemU6IDM0cHg7XG4gIH1cbn1cblxuYXNpZGUge1xuICBsaSB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG59XG5cbi5iYWNrLXRvZ2dsZSB7XG4gIGNvbG9yOiBibGFjaztcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAzMHB4O1xuICBtYXJnaW4tbGVmdDogLTc1cHg7XG4gIHRyYW5zaXRpb246IDFzIGVhc2U7XG5cbiAgaW1nOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgdHJhbnNsYXRlWCgtNXB4KTtcbiAgfVxufVxuIl19 */"]
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
        decls: 11,
        vars: 0,
        consts: [[1, "row"], ["cta", "My Work", "btnStyle", "", "link", "work"], ["cta", "Contact Me", "btnStyle", "text", "link", "contact"]],
        template: function HomePageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Eborall Digital Solutions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Conversion-optimized websites. Data-driven print design. Segmented Email Marketing. I've helped dozens of clients find digital solutions to their business problems. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Let me take care of the technical details so that you can spend more time doing what you love \u2013 serving customers, fulfilling orders, and taking your business to the next level. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_button_button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"]
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
        styles: ["footer[_ngcontent-%COMP%] {\n  background: #070705;\n  color: #787780;\n  padding: 25px;\n  text-align: center;\n  height: 215px;\n  font-size: 14px;\n  z-index: -5;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS1mb290ZXIvcGFnZS1mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGFDa0JtQjtFRGpCbkIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixlQUFlO0VBQ2YsV0FBVztFQUNYLGtCQUFrQjtBQURwQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UtZm9vdGVyL3BhZ2UtZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnfnNyYy92YXJpYWJsZXMnO1xuXG5mb290ZXIge1xuICBiYWNrZ3JvdW5kOiAjMDcwNzA1O1xuICBjb2xvcjogIzc4Nzc4MDtcbiAgcGFkZGluZzogJGdsb2JhbC1wYWRkaW5nO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogMjE1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgei1pbmRleDogLTU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbiIsIi8vIEdsb2JhbCBTdHlsaW5nIFZhcmlhYmxlc1xuJGJyYW5kLXByaW1hcnk6ICNlOTAwMzk7XG5cblxuLy8gQ2FsY3VsYXRlIE1lZGl1bSBFbXBoYXNpcyBDb2xvclxuQGZ1bmN0aW9uIG1lZGl1bS1lbXBoYXNpcygkaW5wdXQtY29sb3IpIHtcbiAgQHJldHVybiByZ2JhKCRpbnB1dC1jb2xvciwgLjEyKTtcbn1cblxuLy8gQ2FsY3VsYXRlIExvdyBFbXBoYXNpcyBDb2xvclxuQGZ1bmN0aW9uIGxvdy1lbXBoYXNpcygkaW5wdXQtY29sb3IpIHtcbiAgQHJldHVybiByZ2JhKCRpbnB1dC1jb2xvciwgLjA1KTtcbn1cblxuLy8gQ29sb3IgTmV1dHJhbHNcbiRibGFjazogIzAwMDtcbiR3aGl0ZTogI2ZmZjtcbiRncmF5OiAjNzg3NzgwO1xuJGxpZ2h0LWdyYXk6ICM4ZDhlOTM7XG5cbiRib3JkZXItY29sb3I6ICNjOWM5Yzk7XG5cbi8vIExheW91dCBWYXJpYWJsZXMgZm9yIGNvbnNpc3RlbmN5XG4kZ2xvYmFsLXBhZGRpbmc6IDI1cHg7XG4kZ2xvYmFsLW1hcmdpbjogMjVweDtcbiRnbG9iYWwtcmFkaXVzOiA1cHg7XG4iXX0= */"]
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 7);

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
        styles: [".active[_ngcontent-%COMP%] {\n  color: #000;\n}\n\na[_ngcontent-%COMP%] {\n  color: #ccc;\n}\n\nmain[_ngcontent-%COMP%] {\n  transition: .75s ease-in-out;\n  display: block;\n}\n\n.full-height[_ngcontent-%COMP%] {\n  min-height: 100vh;\n}\n\n.hide-slideshow[_ngcontent-%COMP%] {\n  -webkit-animation: fadeOut .75s ease-in-out;\n          animation: fadeOut .75s ease-in-out;\n}\n\n.show-slideshow[_ngcontent-%COMP%] {\n  -webkit-animation: fadeIn 3s ease-in-out;\n          animation: fadeIn 3s ease-in-out;\n}\n\n@-webkit-keyframes fadeOut {\n  0% {\n    flex: 0 0 50%;\n    opacity: 1;\n  }\n  100% {\n    flex: 0 0 0;\n    opacity: 0;\n  }\n}\n\n@keyframes fadeOut {\n  0% {\n    flex: 0 0 50%;\n    opacity: 1;\n  }\n  100% {\n    flex: 0 0 0;\n    opacity: 0;\n  }\n}\n\n@-webkit-keyframes fadeIn {\n  0% {\n    opacity: inherit;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes fadeIn {\n  0% {\n    opacity: inherit;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n.full-article[_ngcontent-%COMP%]    > .container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n}\n\n.vert-elements[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 10vw;\n  top: 0;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  z-index: -1;\n  overflow: hidden;\n}\n\n.vert-line[_ngcontent-%COMP%] {\n  display: inline-block;\n  border-left: 1px solid #c9c9c9;\n  height: 100%;\n  position: relative;\n  left: 50%;\n}\n\n.vert-name[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n  transform-origin: center;\n  background: #fff;\n  padding: 0 25px;\n  text-transform: uppercase;\n  letter-spacing: 5px;\n  text-align: center;\n  color: #c9c9c9;\n  display: block;\n}\n\n.layout-underline[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #c9c9c9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsV0NZVTtBRGJaOztBQUlBO0VBQ0UsV0FBVztBQURiOztBQUlBO0VBQ0UsNEJBQTRCO0VBQzVCLGNBQWM7QUFEaEI7O0FBS0E7RUFDRSxpQkFBaUI7QUFGbkI7O0FBS0E7RUFDRSwyQ0FBbUM7VUFBbkMsbUNBQW1DO0FBRnJDOztBQUtBO0VBQ0Usd0NBQWdDO1VBQWhDLGdDQUFnQztBQUZsQzs7QUFNQTtFQUNFO0lBQ0UsYUFBYTtJQUNiLFVBQVU7RUFIWjtFQU9BO0lBQ0UsV0FBVztJQUNYLFVBQVU7RUFMWjtBQUNGOztBQUxBO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsVUFBVTtFQUhaO0VBT0E7SUFDRSxXQUFXO0lBQ1gsVUFBVTtFQUxaO0FBQ0Y7O0FBU0E7RUFDRTtJQUNFLGdCQUFnQjtFQU5sQjtFQVNBO0lBQ0UsVUFBVTtFQVBaO0FBQ0Y7O0FBQUE7RUFDRTtJQUNFLGdCQUFnQjtFQU5sQjtFQVNBO0lBQ0UsVUFBVTtFQVBaO0FBQ0Y7O0FBVUE7RUFDRSxpQkFBaUI7QUFQbkI7O0FBVUE7RUFDRSxlQUFlO0VBQ2YsVUFBVTtFQUNWLE1BQU07RUFDTixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsZ0JBQWdCO0FBUGxCOztBQVVBO0VBQ0UscUJBQXFCO0VBQ3JCLDhCQ2xEb0I7RURtRHBCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsU0FBUztBQVBYOztBQVVBO0VBQ0Usd0JBQXdCO0VBQ3hCLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGNDaEVvQjtFRGlFcEIsY0FBYztBQVBoQjs7QUFVQTtFQUNFLGdDQ3JFb0I7QUQ4RHRCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnfnNyYy92YXJpYWJsZXMnO1xuXG4uYWN0aXZlIHtcbiAgY29sb3I6ICRibGFjaztcbn1cblxuYSB7XG4gIGNvbG9yOiAjY2NjO1xufVxuXG5tYWluIHtcbiAgdHJhbnNpdGlvbjogLjc1cyBlYXNlLWluLW91dDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8vIE1ha2UgQ29udGVudCBGdWxsLUhlaWdodCBvZiBXaW5kb3dcbi5mdWxsLWhlaWdodCB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG4uaGlkZS1zbGlkZXNob3cge1xuICBhbmltYXRpb246IGZhZGVPdXQgLjc1cyBlYXNlLWluLW91dDtcbn1cblxuLnNob3ctc2xpZGVzaG93IHtcbiAgYW5pbWF0aW9uOiBmYWRlSW4gM3MgZWFzZS1pbi1vdXQ7XG59XG5cbi8vIEZhZGUgb3V0IGFuZCBkaXNzYXBlYXJcbkBrZXlmcmFtZXMgZmFkZU91dCB7XG4gIDAlIHtcbiAgICBmbGV4OiAwIDAgNTAlO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuXG4gIDEwMCUge1xuICAgIGZsZXg6IDAgMCAwO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cblxuLy8gRmFkZSBvdXQgYW5kIGRpc3NhcGVhclxuQGtleWZyYW1lcyBmYWRlSW4ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogaW5oZXJpdDtcbiAgfVxuXG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuLmZ1bGwtYXJ0aWNsZSA+IC5jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbn1cblxuLnZlcnQtZWxlbWVudHMge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDEwdnc7XG4gIHRvcDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB6LWluZGV4OiAtMTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnZlcnQtbGluZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogNTAlO1xufVxuXG4udmVydC1uYW1lIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDAgMjVweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogJGJvcmRlci1jb2xvcjtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5sYXlvdXQtdW5kZXJsaW5lIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XG59XG4iLCIvLyBHbG9iYWwgU3R5bGluZyBWYXJpYWJsZXNcbiRicmFuZC1wcmltYXJ5OiAjZTkwMDM5O1xuXG5cbi8vIENhbGN1bGF0ZSBNZWRpdW0gRW1waGFzaXMgQ29sb3JcbkBmdW5jdGlvbiBtZWRpdW0tZW1waGFzaXMoJGlucHV0LWNvbG9yKSB7XG4gIEByZXR1cm4gcmdiYSgkaW5wdXQtY29sb3IsIC4xMik7XG59XG5cbi8vIENhbGN1bGF0ZSBMb3cgRW1waGFzaXMgQ29sb3JcbkBmdW5jdGlvbiBsb3ctZW1waGFzaXMoJGlucHV0LWNvbG9yKSB7XG4gIEByZXR1cm4gcmdiYSgkaW5wdXQtY29sb3IsIC4wNSk7XG59XG5cbi8vIENvbG9yIE5ldXRyYWxzXG4kYmxhY2s6ICMwMDA7XG4kd2hpdGU6ICNmZmY7XG4kZ3JheTogIzc4Nzc4MDtcbiRsaWdodC1ncmF5OiAjOGQ4ZTkzO1xuXG4kYm9yZGVyLWNvbG9yOiAjYzljOWM5O1xuXG4vLyBMYXlvdXQgVmFyaWFibGVzIGZvciBjb25zaXN0ZW5jeVxuJGdsb2JhbC1wYWRkaW5nOiAyNXB4O1xuJGdsb2JhbC1tYXJnaW46IDI1cHg7XG4kZ2xvYmFsLXJhZGl1czogNXB4O1xuIl19 */"],
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _button_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../button/button.component */
      "be9G");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var _c0 = function _c0(a1) {
        return ["/work", a1];
      };

      function PortfolioListComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var project_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, project_r1.fields.slug));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", project_r1.fields.projectThumb.fields.file.url, "?fit=thumb&w=350&h=200&f=face", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

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
          this.titleService = titleService; // Set Page Title

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
        decls: 3,
        vars: 2,
        consts: [[1, "row"], ["class", "col-sm-12 col-md-4 h-100", 4, "ngFor", "ngForOf"], ["btnStyle", "full-width", "cta", "Contact Me", "link", "../contact"], [1, "col-sm-12", "col-md-4", "h-100"], [1, "project", 3, "routerLink"], [3, "src"], [1, "project-details"], [1, "summary"]],
        template: function PortfolioListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PortfolioListComponent_div_1_Template, 8, 6, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-button", 2);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@photosAnimation", ctx.projects.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projects);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _button_button_component__WEBPACK_IMPORTED_MODULE_5__["ButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]],
        styles: [".project[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 15px;\n  text-decoration: none;\n}\n\n.project[_ngcontent-%COMP%]:hover    > img[_ngcontent-%COMP%] {\n  box-shadow: 0 0 30px rgba(0, 0, 0, 0.12);\n  transform: scale(1.05);\n}\n\n.project[_ngcontent-%COMP%]:active    > img[_ngcontent-%COMP%] {\n  box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);\n}\n\n.project[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  overflow: hidden;\n  transition: .25s ease;\n  width: 100%;\n}\n\n.project[_ngcontent-%COMP%]   .project-details[_ngcontent-%COMP%] {\n  height: 75px;\n  padding-right: 18px;\n}\n\n.project[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 18px;\n  line-height: 18px;\n  color: #000;\n  margin: 0;\n}\n\n.project[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n}\n\n.project[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: none;\n  line-height: 18px;\n  font-weight: normal;\n  color: #787780;\n}\n\n.project[_ngcontent-%COMP%]:hover   h2[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.project[_ngcontent-%COMP%]:hover   strong[_ngcontent-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9ydGZvbGlvLWxpc3QvcG9ydGZvbGlvLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUZ2Qjs7QUFEQTtFQU9NLHdDQ0tNO0VESk4sc0JBQXNCO0FBRjVCOztBQU5BO0VBY00sdUNDRk07QURGWjs7QUFWQTtFQW1CSSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixXQUFXO0FBTGY7O0FBakJBO0VBMEJJLFlBQVk7RUFDWixtQkFBbUI7QUFMdkI7O0FBdEJBO0VBK0JJLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsV0NyQlE7RURzQlIsU0FBUztBQUxiOztBQTdCQTtFQXNDSSxnQkFBZ0I7QUFMcEI7O0FBakNBO0VBMkNJLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGNDaENVO0FEMEJkOztBQXhDQTtFQW9ETSxhQUFhO0FBUm5COztBQTVDQTtFQXdETSxjQUFjO0FBUnBCIiwiZmlsZSI6InNyYy9hcHAvcG9ydGZvbGlvLWxpc3QvcG9ydGZvbGlvLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICd+c3JjL3ZhcmlhYmxlcyc7XG5cbi8vIFByb2plY3QgTGlzdCBDb21wb25lbnRzXG4ucHJvamVjdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cbiAgJjpob3ZlciB7XG4gICAgJiA+IGltZyB7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMzBweCByZ2JhKCRibGFjaywgLjEyKTtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gICAgfVxuICB9XG5cbiAgJjphY3RpdmUge1xuICAgICYgPiBpbWcge1xuICAgICAgYm94LXNoYWRvdzogMCAwIDMwcHggcmdiYSgkYmxhY2ssIC4zKTtcbiAgICB9XG4gIH1cblxuICBpbWcge1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0cmFuc2l0aW9uOiAuMjVzIGVhc2U7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAucHJvamVjdC1kZXRhaWxzIHtcbiAgICBoZWlnaHQ6IDc1cHg7XG4gICAgcGFkZGluZy1yaWdodDogMThweDtcbiAgfVxuXG4gIGgyIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgY29sb3I6ICRibGFjaztcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICBsaSB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgfVxuXG4gIC8vIEhpZGUgZGVzY3JpcHRpb25cbiAgc3Ryb25nIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgY29sb3I6ICRncmF5O1xuICB9XG5cbiAgLy8gT24gaG92ZXIsIGhpZGUgaDIgc2hvdyBzdHJvbmdcbiAgJjpob3ZlciB7XG4gICAgaDIge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICBzdHJvbmcge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICB9XG5cblxufVxuIiwiLy8gR2xvYmFsIFN0eWxpbmcgVmFyaWFibGVzXG4kYnJhbmQtcHJpbWFyeTogI2U5MDAzOTtcblxuXG4vLyBDYWxjdWxhdGUgTWVkaXVtIEVtcGhhc2lzIENvbG9yXG5AZnVuY3Rpb24gbWVkaXVtLWVtcGhhc2lzKCRpbnB1dC1jb2xvcikge1xuICBAcmV0dXJuIHJnYmEoJGlucHV0LWNvbG9yLCAuMTIpO1xufVxuXG4vLyBDYWxjdWxhdGUgTG93IEVtcGhhc2lzIENvbG9yXG5AZnVuY3Rpb24gbG93LWVtcGhhc2lzKCRpbnB1dC1jb2xvcikge1xuICBAcmV0dXJuIHJnYmEoJGlucHV0LWNvbG9yLCAuMDUpO1xufVxuXG4vLyBDb2xvciBOZXV0cmFsc1xuJGJsYWNrOiAjMDAwO1xuJHdoaXRlOiAjZmZmO1xuJGdyYXk6ICM3ODc3ODA7XG4kbGlnaHQtZ3JheTogIzhkOGU5MztcblxuJGJvcmRlci1jb2xvcjogI2M5YzljOTtcblxuLy8gTGF5b3V0IFZhcmlhYmxlcyBmb3IgY29uc2lzdGVuY3lcbiRnbG9iYWwtcGFkZGluZzogMjVweDtcbiRnbG9iYWwtbWFyZ2luOiAyNXB4O1xuJGdsb2JhbC1yYWRpdXM6IDVweDtcbiJdfQ== */"],
        data: {
          animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('photosAnimation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('.project', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 0,
            transform: 'translateY(15px)'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('.project', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])('100ms', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('230ms cubic-bezier(0.4, 0.0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
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
            animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('photosAnimation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('.project', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
              opacity: 0,
              transform: 'translateY(15px)'
            })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('.project', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])('100ms', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('230ms cubic-bezier(0.4, 0.0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
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
      "LfgP"); // ./src/app/app.module.ts
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
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes), ngx_markdown__WEBPACK_IMPORTED_MODULE_6__["MarkdownModule"].forRoot()]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _portfolio_list_portfolio_list_component__WEBPACK_IMPORTED_MODULE_7__["PortfolioListComponent"], _portfolio_detail_portfolio_detail_component__WEBPACK_IMPORTED_MODULE_8__["PortfolioDetailComponent"], _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_9__["HomePageComponent"], _contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_10__["ContactPageComponent"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_11__["NavigationComponent"], _button_button_component__WEBPACK_IMPORTED_MODULE_12__["ButtonComponent"], _page_footer_page_footer_component__WEBPACK_IMPORTED_MODULE_13__["PageFooterComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], ngx_markdown__WEBPACK_IMPORTED_MODULE_6__["MarkdownModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _portfolio_list_portfolio_list_component__WEBPACK_IMPORTED_MODULE_7__["PortfolioListComponent"], _portfolio_detail_portfolio_detail_component__WEBPACK_IMPORTED_MODULE_8__["PortfolioDetailComponent"], _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_9__["HomePageComponent"], _contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_10__["ContactPageComponent"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_11__["NavigationComponent"], _button_button_component__WEBPACK_IMPORTED_MODULE_12__["ButtonComponent"], _page_footer_page_footer_component__WEBPACK_IMPORTED_MODULE_13__["PageFooterComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes), ngx_markdown__WEBPACK_IMPORTED_MODULE_6__["MarkdownModule"].forRoot()],
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
        styles: [".button[_ngcontent-%COMP%] {\n  background: #e90039;\n  border-radius: 100px;\n  color: #fff;\n  font-weight: bold;\n  margin-right: 24px;\n  padding: 20px 30px;\n  text-align: center;\n  text-decoration: none;\n}\n\n.button[_ngcontent-%COMP%]:hover {\n  background: #d00033;\n}\n\n.button.white[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #ccc;\n}\n\n.button.outlined[_ngcontent-%COMP%] {\n  border: 1px solid #000;\n  color: #000;\n}\n\n.button.outlined[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.05);\n}\n\n.button.outlined[_ngcontent-%COMP%]:active {\n  background: rgba(0, 0, 0, 0.12);\n}\n\n.button.large[_ngcontent-%COMP%] {\n  margin-right: 12px;\n  padding: 25px 35px;\n}\n\n.button.full-width[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.button.small[_ngcontent-%COMP%] {\n  margin-right: 36px;\n  padding: 10px 20px;\n}\n\n.button.text[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #000;\n}\n\n.button.text[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.05);\n}\n\n.button.text[_ngcontent-%COMP%]:active {\n  background: rgba(0, 0, 0, 0.12);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuc2NzcyIsInNyYy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLG1CQ0ZxQjtFREdyQixvQkFBb0I7RUFDcEIsV0NXVTtFRFZWLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFEdkI7O0FBUEE7RUFXSSxtQkFBcUM7QUFBekM7O0FBWEE7RUFlSSxnQkNEUTtFREVSLHNCQUFzQjtBQUExQjs7QUFoQkE7RUFvQkksc0JDUFE7RURRUixXQ1JRO0FEUVo7O0FBckJBO0VBd0JNLCtCQ1hNO0FEWVo7O0FBekJBO0VBNEJNLCtCQ2ZNO0FEZ0JaOztBQTdCQTtFQWlDSSxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQXRCOztBQWxDQTtFQXNDSSxjQUFjO0FBQWxCOztBQXRDQTtFQTBDSSxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQXRCOztBQTNDQTtFQStDSSx1QkFBdUI7RUFDdkIsV0NuQ1E7QURtQ1o7O0FBaERBO0VBbURNLCtCQ3RDTTtBRHVDWjs7QUFwREE7RUF1RE0sK0JDMUNNO0FEMkNaIiwiZmlsZSI6InNyYy9hcHAvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ35zcmMvdmFyaWFibGVzJztcblxuLmJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICRicmFuZC1wcmltYXJ5O1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgY29sb3I6ICR3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1yaWdodDogMjRweDtcbiAgcGFkZGluZzogMjBweCAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oJGJyYW5kLXByaW1hcnksIDUpO1xuICB9XG5cbiAgJi53aGl0ZSB7XG4gICAgYmFja2dyb3VuZDogJHdoaXRlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIH1cblxuICAmLm91dGxpbmVkIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkYmxhY2s7XG4gICAgY29sb3I6ICRibGFjaztcblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogbG93LWVtcGhhc2lzKCRibGFjayk7XG4gICAgfVxuXG4gICAgJjphY3RpdmUge1xuICAgICAgYmFja2dyb3VuZDogbWVkaXVtLWVtcGhhc2lzKCRibGFjayk7XG4gICAgfVxuICB9XG5cbiAgJi5sYXJnZSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICAgIHBhZGRpbmc6IDI1cHggMzVweDtcbiAgfVxuXG4gICYuZnVsbC13aWR0aCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAmLnNtYWxsIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDM2cHg7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICB9XG5cbiAgJi50ZXh0IHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogJGJsYWNrO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiBsb3ctZW1waGFzaXMoJGJsYWNrKTtcbiAgICB9XG5cbiAgICAmOmFjdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kOiBtZWRpdW0tZW1waGFzaXMoJGJsYWNrKTtcbiAgICB9XG4gIH1cbn1cbiIsIi8vIEdsb2JhbCBTdHlsaW5nIFZhcmlhYmxlc1xuJGJyYW5kLXByaW1hcnk6ICNlOTAwMzk7XG5cblxuLy8gQ2FsY3VsYXRlIE1lZGl1bSBFbXBoYXNpcyBDb2xvclxuQGZ1bmN0aW9uIG1lZGl1bS1lbXBoYXNpcygkaW5wdXQtY29sb3IpIHtcbiAgQHJldHVybiByZ2JhKCRpbnB1dC1jb2xvciwgLjEyKTtcbn1cblxuLy8gQ2FsY3VsYXRlIExvdyBFbXBoYXNpcyBDb2xvclxuQGZ1bmN0aW9uIGxvdy1lbXBoYXNpcygkaW5wdXQtY29sb3IpIHtcbiAgQHJldHVybiByZ2JhKCRpbnB1dC1jb2xvciwgLjA1KTtcbn1cblxuLy8gQ29sb3IgTmV1dHJhbHNcbiRibGFjazogIzAwMDtcbiR3aGl0ZTogI2ZmZjtcbiRncmF5OiAjNzg3NzgwO1xuJGxpZ2h0LWdyYXk6ICM4ZDhlOTM7XG5cbiRib3JkZXItY29sb3I6ICNjOWM5Yzk7XG5cbi8vIExheW91dCBWYXJpYWJsZXMgZm9yIGNvbnNpc3RlbmN5XG4kZ2xvYmFsLXBhZGRpbmc6IDI1cHg7XG4kZ2xvYmFsLW1hcmdpbjogMjVweDtcbiRnbG9iYWwtcmFkaXVzOiA1cHg7XG4iXX0= */"]
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
        styles: ["nav[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  align-items: center;\n  padding: 25px;\n}\n\nnav[_ngcontent-%COMP%]   .toggle[_ngcontent-%COMP%] {\n  display: none;\n}\n\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #8d8e93;\n  font-weight: normal;\n  font-size: 16px;\n  transition: all .15s ease;\n  text-decoration: none;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #000;\n  font-weight: bold;\n}\n\nnav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  color: #000;\n  font-weight: bold;\n  padding-bottom: 5px;\n  border-bottom: 2px solid #e90039;\n}\n\nnav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-decoration: none;\n}\n\nnav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  list-style: none;\n  justify-content: space-between;\n  flex-direction: row;\n  align-items: center;\n}\n\nnav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 0 25px;\n}\n\n.layout-underline[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #c9c9c9;\n  margin-bottom: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGFDZ0JtQjtBRGpCckI7O0FBSkE7RUFRSSxhQUFhO0FBQWpCOztBQVJBO0VBWUksY0NJZ0I7RURIaEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFBdkI7O0FBbEJBO0VBcUJNLFdDUk07RURTTixpQkFBaUI7QUFDdkI7O0FBdkJBO0VBMEJNLFdDYk07RURjTixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGdDQzlCaUI7QUQrQnZCOztBQTlCQTtFQWtDSSxxQkFBcUI7RUFDckIscUJBQXFCO0FBQXpCOztBQW5DQTtFQXNDTSxzQkFBc0I7QUFDNUI7O0FBdkNBO0VBMkNJLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFBdkI7O0FBL0NBO0VBbURJLGVDOUJpQjtBRDhCckI7O0FBSUE7RUFDRSxnQ0N0Q29CO0VEdUNwQixtQkNuQ2tCO0FEa0NwQiIsImZpbGUiOiJzcmMvYXBwL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ35zcmMvdmFyaWFibGVzJztcblxubmF2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogJGdsb2JhbC1wYWRkaW5nO1xuXG4gIC50b2dnbGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICBhIHtcbiAgICBjb2xvcjogJGxpZ2h0LWdyYXk7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4xNXMgZWFzZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogJGJsYWNrO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuXG4gICAgJi5hY3RpdmUge1xuICAgICAgY29sb3I6ICRibGFjaztcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkYnJhbmQtcHJpbWFyeTtcbiAgICB9XG4gIH1cblxuICAubG9nbyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxuICAgIGltZyB7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIH1cbiAgfVxuXG4gIHVsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIGxpIHtcbiAgICBwYWRkaW5nOiAwICRnbG9iYWwtcGFkZGluZztcbiAgfVxufVxuXG4ubGF5b3V0LXVuZGVybGluZSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xuICBtYXJnaW4tYm90dG9tOiAkZ2xvYmFsLW1hcmdpbjtcbn1cblxuLy8gLy8gTW9iaWxlIFN0eWxpbmdcbi8vIEBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xuLy8gICBuYXYge1xuXG4vLyAgICAgLnRvZ2dsZSB7XG4vLyAgICAgICBkaXNwbGF5OiBibG9jaztcbi8vICAgICB9XG5cbi8vICAgICB1bCB7XG4vLyAgICAgICBkaXNwbGF5OiBub25lO1xuLy8gICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbi8vICAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XG4vLyAgICAgICBmbGV4LWdyb3c6IDE7XG4vLyAgICAgICB3aWR0aDogMTAwJTtcbi8vICAgICAgIGJhY2tncm91bmQ6ICMwMDA7XG4vLyAgICAgICBib3gtc2hhZG93OiAwIDAgMzBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4vLyAgICAgICBwYWRkaW5nOiAxNXB4ICFpbXBvcnRhbnQ7XG4vLyAgICAgICB6LWluZGV4OiAzMDAwO1xuLy8gICAgICAgbWFyZ2luLXRvcDogMTBweDtcbi8vICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4vLyAgICAgfVxuXG4vLyAgICAgbGkge1xuLy8gICAgICAgbWFyZ2luOiA4cHggMDtcblxuLy8gICAgICAgYSB7XG4vLyAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuXG4vLyAgICAgICAgICY6aG92ZXIge1xuLy8gICAgICAgICAgIGNvbG9yOiAjMDAwO1xuLy8gICAgICAgICB9XG4vLyAgICAgICB9XG4vLyAgICAgfVxuXG4vLyAgIH1cblxuLy8gICAuYWN0aXZlIHtcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xuLy8gICB9XG4vLyB9XG4iLCIvLyBHbG9iYWwgU3R5bGluZyBWYXJpYWJsZXNcbiRicmFuZC1wcmltYXJ5OiAjZTkwMDM5O1xuXG5cbi8vIENhbGN1bGF0ZSBNZWRpdW0gRW1waGFzaXMgQ29sb3JcbkBmdW5jdGlvbiBtZWRpdW0tZW1waGFzaXMoJGlucHV0LWNvbG9yKSB7XG4gIEByZXR1cm4gcmdiYSgkaW5wdXQtY29sb3IsIC4xMik7XG59XG5cbi8vIENhbGN1bGF0ZSBMb3cgRW1waGFzaXMgQ29sb3JcbkBmdW5jdGlvbiBsb3ctZW1waGFzaXMoJGlucHV0LWNvbG9yKSB7XG4gIEByZXR1cm4gcmdiYSgkaW5wdXQtY29sb3IsIC4wNSk7XG59XG5cbi8vIENvbG9yIE5ldXRyYWxzXG4kYmxhY2s6ICMwMDA7XG4kd2hpdGU6ICNmZmY7XG4kZ3JheTogIzc4Nzc4MDtcbiRsaWdodC1ncmF5OiAjOGQ4ZTkzO1xuXG4kYm9yZGVyLWNvbG9yOiAjYzljOWM5O1xuXG4vLyBMYXlvdXQgVmFyaWFibGVzIGZvciBjb25zaXN0ZW5jeVxuJGdsb2JhbC1wYWRkaW5nOiAyNXB4O1xuJGdsb2JhbC1tYXJnaW46IDI1cHg7XG4kZ2xvYmFsLXJhZGl1czogNXB4O1xuIl19 */"]
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
        consts: [[1, "lede"], ["autocomplete", "on", "uk-grid", "", "method", "post", "action", "https://formspree.io/contact@josepheborall.com", 1, "uk-grid-small"], [1, "uk-inline", "uk-width-1-2@l"], ["uk-icon", "icon: user", 1, "uk-form-icon"], ["type", "text", "name", "name", "placeholder", "Name", 1, "uk-input"], ["uk-icon", "icon: receiver", 1, "uk-form-icon"], ["type", "phone", "name", "phone-number", "placeholder", "(XXX) XXX-XXXX", 1, "uk-input"], [1, "uk-inline", "uk-width-1-1"], ["uk-icon", "icon: mail", 1, "uk-form-icon"], ["type", "email", "name", "email", "placeholder", "Email Address", 1, "uk-input"], [1, "uk-width-1-1"], ["name", "message", "type", "text", "placeholder", "Message...", 1, "uk-textarea", 2, "border-radius", "25px", "padding", "25px", "min-width", "100%", "min-height", "150px"], ["uk-icon", "chevron-right", "type", "submit", 1, "uk-button", "uk-button-primary", "pill-button", "uk-width-1-1"]],
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