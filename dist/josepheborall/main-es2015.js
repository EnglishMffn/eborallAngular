(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/josepheborall/app/josepheborall.com/src/main.ts */"zUnb");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** os (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "514t":
/*!******************************************************!*\
  !*** ./src/app/filter-list/filter-list.component.ts ***!
  \******************************************************/
/*! exports provided: FilterListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterListComponent", function() { return FilterListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function FilterListComponent_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilterListComponent_li_2_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const filter_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onSelect(filter_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const filter_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", filter_r1 === ctx_r0.selectedFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](filter_r1);
} }
class FilterListComponent {
    constructor() {
        this.newItemEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selectedFilter = 'All';
    }
    onSelect(link) {
        this.selectedFilter = link;
        this.newItemEvent.emit(link);
    }
    ngOnInit() {
    }
}
FilterListComponent.ɵfac = function FilterListComponent_Factory(t) { return new (t || FilterListComponent)(); };
FilterListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FilterListComponent, selectors: [["app-filter-list"]], inputs: { PostData: "PostData" }, outputs: { newItemEvent: "newItemEvent" }, decls: 3, vars: 1, consts: [[3, "selected", "click", 4, "ngFor", "ngForOf"], [3, "click"]], template: function FilterListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FilterListComponent_li_2_Template, 2, 3, "li", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.PostData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  display: flex;\n  flex-direction: row;\n  padding-left: 0;\n  flex-wrap: wrap;\n}\n\nnav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: block;\n  padding: 0 30px 30px 0;\n  cursor: pointer;\n  text-transform: uppercase;\n  letter-spacing: .03rem;\n}\n\nnav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  font-weight: bold;\n}\n\n.selected[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #000;\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlsdGVyLWxpc3QvZmlsdGVyLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFFSSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZUFBZTtBQUZuQjs7QUFKQTtFQVVJLGNBQWM7RUFDZCxzQkFBNkM7RUFDN0MsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixzQkFBc0I7QUFGMUI7O0FBWkE7RUFpQk0saUJBQWlCO0FBRHZCOztBQU1BO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCwwQkFBMEI7QUFINUIiLCJmaWxlIjoic3JjL2FwcC9maWx0ZXItbGlzdC9maWx0ZXItbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ35zcmMvdmFyaWFibGVzJztcblxubmF2IHtcbiAgdWwge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIH1cblxuICBsaSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogMCAkZ2xvYmFsLXBhZGRpbmcgJGdsb2JhbC1wYWRkaW5nICAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxldHRlci1zcGFjaW5nOiAuMDNyZW07XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgfVxufVxuXG4uc2VsZWN0ZWQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMwMDA7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-filter-list',
                templateUrl: './filter-list.component.html',
                styleUrls: ['./filter-list.component.scss']
            }]
    }], function () { return []; }, { PostData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], newItemEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "6CR1":
/*!******************************************!*\
  !*** ./src/animations/fade.animation.ts ***!
  \******************************************/
/*! exports provided: fadeAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeAnimation", function() { return fadeAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
// fade.animation.ts

const fadeAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeAnimation', [
// transition('* => *', [
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


/***/ }),

/***/ "6MTs":
/*!****************************************************************!*\
  !*** ./src/app/portfolio-detail/portfolio-detail.component.ts ***!
  \****************************************************************/
/*! exports provided: PortfolioDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioDetailComponent", function() { return PortfolioDetailComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _contentful_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contentful.service */ "o6/c");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-markdown */ "lR5k");








function PortfolioDetailComponent_a_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx_r0.project.fields.mainMedia.fields.file.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "https://", ctx_r0.project.fields.mainMedia.fields.file.url, "?&fm=jpg&fl=progressive&w=1180&h=750", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", ctx_r0.project.fields.projectThumb.fields.description);
} }
function PortfolioDetailComponent_section_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "View Case Study PDF");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx_r1.project.fields.caseStudyLink.fields.file.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function PortfolioDetailComponent_dl_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "dl");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Client");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.project.fields.client);
} }
function PortfolioDetailComponent_dl_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "dl");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Sector");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.project.fields.typeOfClient);
} }
function PortfolioDetailComponent_dl_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "dl");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Discipline");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.project.fields.typeOfWork.join(", "));
} }
function PortfolioDetailComponent_dl_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "dl");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Tools Used");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r5.project.fields.toolsUsed.join(", "));
} }
function PortfolioDetailComponent_aside_22_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const image_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", image_r8.fields.file.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "", image_r8.fields.file.url, "?fl=progressive&w=570", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function PortfolioDetailComponent_aside_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "aside", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PortfolioDetailComponent_aside_22_li_2_Template, 3, 2, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r6.project.fields.media);
} }
const _c0 = function () { return [".."]; };
const _c1 = function (a0) { return { "col-lg-6": a0 }; };
class PortfolioDetailComponent {
    constructor(ContentfulS, route, titleService) {
        this.ContentfulS = ContentfulS;
        this.route = route;
        this.titleService = titleService;
    }
    ngOnInit() {
        this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])((params) => this.ContentfulS.getProject(params.get('slug'))))
            .subscribe(project => (this.project = project, this.titleService.setTitle(project.fields.projectName + ' | EBORALL')));
    }
}
PortfolioDetailComponent.ɵfac = function PortfolioDetailComponent_Factory(t) { return new (t || PortfolioDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_contentful_service__WEBPACK_IMPORTED_MODULE_2__["ContentfulService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"])); };
PortfolioDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PortfolioDetailComponent, selectors: [["app-portfolio-detail"]], decls: 23, vars: 15, consts: [[1, "back-toggle", 3, "routerLink"], ["src", "../../assets/img/arrow-left.svg", "alt", "Back"], [1, "row"], [1, "col-md-12"], [1, "project-head"], [1, "headline"], [1, "summary"], [3, "href", 4, "ngIf"], ["class", "col-12", "style", "padding: 15px;", 4, "ngIf"], [1, "row", "col-12"], [3, "ngClass"], [1, "project-tags"], [4, "ngIf"], ["class", "col-md-6 col-sm-12", 4, "ngIf"], [3, "href"], [1, "img-fluid", 3, "src", "alt"], [1, "col-12", 2, "padding", "15px"], ["target", "_pdf", 1, "button", "full-width", 3, "href"], [1, "col-md-6", "col-sm-12"], [4, "ngFor", "ngForOf"], [1, "img-fluid", 3, "src"]], template: function PortfolioDetailComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, PortfolioDetailComponent_section_11_Template, 3, 1, "section", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "section", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "main", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "markdown");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, PortfolioDetailComponent_dl_18_Template, 5, 1, "dl", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, PortfolioDetailComponent_dl_19_Template, 5, 1, "dl", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, PortfolioDetailComponent_dl_20_Template, 5, 1, "dl", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, PortfolioDetailComponent_dl_21_Template, 5, 1, "dl", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, PortfolioDetailComponent_aside_22_Template, 3, 1, "aside", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](12, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.project.fields.projectName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.project.fields.summary);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.project.fields.mainMedia);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.project.fields.caseStudyLink);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](13, _c1, ctx.project.fields.media));
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
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], ngx_markdown__WEBPACK_IMPORTED_MODULE_6__["MarkdownComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: [".button[_ngcontent-%COMP%] {\n  background: #e90039;\n  border-radius: 100px;\n  color: #fff;\n  font-weight: bold;\n  margin-right: 24px;\n  padding: 20px 30px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n}\n\n.button[_ngcontent-%COMP%]:hover {\n  background: #d00033;\n}\n\n.button.white[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #ccc;\n}\n\n.button.outlined[_ngcontent-%COMP%] {\n  border: 1px solid #000;\n  color: #000;\n}\n\n.button.outlined[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.05);\n}\n\n.button.outlined[_ngcontent-%COMP%]:active {\n  background: rgba(0, 0, 0, 0.12);\n}\n\n.button.black[_ngcontent-%COMP%] {\n  background: #000;\n}\n\n.button.black[_ngcontent-%COMP%]:hover {\n  background: #e90039;\n}\n\n.button.large[_ngcontent-%COMP%] {\n  margin-right: 12px;\n  padding: 25px 35px;\n}\n\n.button.full-width[_ngcontent-%COMP%] {\n  display: block;\n  margin-right: 0;\n}\n\n.button.small[_ngcontent-%COMP%] {\n  margin-right: 36px;\n  padding: 10px 20px;\n}\n\n.button.text[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #000;\n}\n\n.button.text[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.05);\n}\n\n.button.text[_ngcontent-%COMP%]:active {\n  background: rgba(0, 0, 0, 0.12);\n}\n\n.project-head[_ngcontent-%COMP%] {\n  align-items: baseline;\n  display: flex;\n  justify-content: space-between;\n}\n\n.project-head[_ngcontent-%COMP%]   .headline[_ngcontent-%COMP%] {\n  font-size: 34px;\n  margin: 42.5px 0;\n}\n\narticle[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  outline: 1px solid rgba(0, 0, 0, 0.05);\n  outline-offset: -1px;\n}\n\naside[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  margin-bottom: 20px;\n}\n\n.project-tags[_ngcontent-%COMP%] {\n  -moz-column-count: 2;\n       column-count: 2;\n}\n\ndl[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 15px;\n  page-break-inside: avoid;\n}\n\ndl[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  color: #000;\n  font-weight: bold;\n}\n\ndl[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  margin-left: 0;\n}\n\n.back-toggle[_ngcontent-%COMP%] {\n  color: #000;\n  opacity: .5;\n  top: 30px;\n}\n\n.back-toggle[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  transform: scale(1.25);\n}\n\n@media (min-width: 768px) {\n  .back-toggle[_ngcontent-%COMP%] {\n    margin-left: -75px;\n    position: -webkit-sticky;\n    position: sticky;\n  }\n  article[_ngcontent-%COMP%] {\n    margin-top: -75px;\n  }\n}\n\n@media (max-width: 991.98px) {\n  .project-head[_ngcontent-%COMP%] {\n    display: block;\n    margin-bottom: 30px;\n  }\n  .project-head[_ngcontent-%COMP%]   .headline[_ngcontent-%COMP%] {\n    margin: 15px 0;\n  }\n  aside[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    padding-left: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuc2NzcyIsInNyYy92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvcG9ydGZvbGlvLWRldGFpbC9wb3J0Zm9saW8tZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic3JjL3N0eWxlcy9ncmlkL21peGlucy9fYnJlYWtwb2ludHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLG1CQ0txQjtFREpyQixvQkFBb0I7RUFDcEIsV0NPVTtFRE5WLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIscUJBQXFCO0FFRHZCOztBRlJBO0VBWUksbUJBQXFDO0FFQXpDOztBRlpBO0VBZ0JJLGdCQ05RO0VET1Isc0JBQXNCO0FFQTFCOztBRmpCQTtFQXFCSSxzQkNaUTtFRGFSLFdDYlE7QUNhWjs7QUZ0QkE7RUF5Qk0sK0JDaEJNO0FDaUJaOztBRjFCQTtFQTZCTSwrQkNwQk07QUNxQlo7O0FGOUJBO0VBa0NJLGdCQ3pCUTtBQ3lCWjs7QUZsQ0E7RUFxQ00sbUJDL0JpQjtBQ2dDdkI7O0FGdENBO0VBMENJLGtCQUFrQjtFQUNsQixrQkFBa0I7QUVBdEI7O0FGM0NBO0VBK0NJLGNBQWM7RUFDZCxlQUFlO0FFQW5COztBRmhEQTtFQW9ESSxrQkFBa0I7RUFDbEIsa0JBQWtCO0FFQXRCOztBRnJEQTtFQXlESSx1QkFBdUI7RUFDdkIsV0NqRFE7QUNpRFo7O0FGMURBO0VBNkRNLCtCQ3BETTtBQ3FEWjs7QUY5REE7RUFpRU0sK0JDeERNO0FDeURaOztBQWhFQTtFQUNFLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsOEJBQThCO0FBbUVoQzs7QUF0RUE7RUFNSSxlQUFlO0VBQ2YsZ0JBQTZCO0FBb0VqQzs7QUFoRUE7RURjRSxzQ0FBcUM7RUFDckMsb0JBQW9CO0FDc0R0Qjs7QUEvREE7RUFFSSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBaUV2Qjs7QUE3REE7RUFDRSxvQkFBZTtPQUFmLGVBQWU7QUFnRWpCOztBQTdEQTtFQUNFLFNBQVM7RUFDVCxhQUE0QjtFQUM1Qix3QkFBd0I7QUFnRTFCOztBQW5FQTtFQU1JLFdEM0JRO0VDNEJSLGlCQUFpQjtBQWlFckI7O0FBeEVBO0VBV0ksY0FBYztBQWlFbEI7O0FBN0RBO0VBQ0UsV0RyQ1U7RUNzQ1YsV0FBVztFQUNYLFNBQVM7QUFnRVg7O0FBbkVBO0VBTUksVUFBVTtFQUNWLHNCQUFzQjtBQWlFMUI7O0FDM0RJO0VEQUY7SUFDRSxrQkFBa0I7SUFDbEIsd0JBQWdCO0lBQWhCLGdCQUFnQjtFQStEbEI7RUE1REE7SUFDRSxpQkFBaUI7RUE4RG5CO0FBQ0Y7O0FDeERJO0VEREY7SUFDRSxjQUFjO0lBQ2QsbUJEckRnQjtFQ2tIbEI7RUEvREE7SUFLSSxjQUE0QjtFQTZEaEM7RUF6REE7SUFFSSxlQUFlO0VBMERuQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcG9ydGZvbGlvLWRldGFpbC9wb3J0Zm9saW8tZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnfnNyYy92YXJpYWJsZXMnO1xuXG4uYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogJGJyYW5kLXByaW1hcnk7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBjb2xvcjogJHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xuICBwYWRkaW5nOiAyMHB4IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogZGFya2VuKCRicmFuZC1wcmltYXJ5LCA1KTtcbiAgfVxuXG4gICYud2hpdGUge1xuICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICB9XG5cbiAgJi5vdXRsaW5lZCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJGJsYWNrO1xuICAgIGNvbG9yOiAkYmxhY2s7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IGxvdy1lbXBoYXNpcygkYmxhY2spO1xuICAgIH1cblxuICAgICY6YWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQ6IG1lZGl1bS1lbXBoYXNpcygkYmxhY2spO1xuICAgIH1cbiAgfVxuXG4gICYuYmxhY2sge1xuICAgIGJhY2tncm91bmQ6ICRibGFjaztcblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogJGJyYW5kLXByaW1hcnk7XG4gICAgfVxuICB9XG5cbiAgJi5sYXJnZSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICAgIHBhZGRpbmc6IDI1cHggMzVweDtcbiAgfVxuXG4gICYuZnVsbC13aWR0aCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICB9XG5cbiAgJi5zbWFsbCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAzNnB4O1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgfVxuXG4gICYudGV4dCB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6ICRibGFjaztcblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogbG93LWVtcGhhc2lzKCRibGFjayk7XG4gICAgfVxuXG4gICAgJjphY3RpdmUge1xuICAgICAgYmFja2dyb3VuZDogbWVkaXVtLWVtcGhhc2lzKCRibGFjayk7XG4gICAgfVxuICB9XG59XG4iLCIvLyBJbXBvcnQgQm9vdHN0cmFwIEJyZWFrcG9pbnRzIGZvciBHbG9iYWwgVXNlXG5AaW1wb3J0ICcuLi9zcmMvc3R5bGVzL2dyaWQvYnJlYWtwb2ludHMnO1xuXG4vL1xuLy8vLyBTdHlsaW5nIFZhcmlhYmxlc1xuLy9cblxuLy8gR2xvYmFsIFN0eWxpbmcgVmFyaWFibGVzXG4kYnJhbmQtcHJpbWFyeTogI2U5MDAzOTtcblxuLy8gQ29sb3IgTmV1dHJhbHNcbiRibGFjazogIzAwMDtcbiR3aGl0ZTogI2ZmZjtcbiRncmF5OiAjNzg3NzgwO1xuJGxpZ2h0LWdyYXk6ICM4ZDhlOTM7XG4kYm9keS1ncmF5OiAjNTc1ODY1O1xuXG4kYm9yZGVyLWNvbG9yOiAjYzljOWM5O1xuXG4vLyBMYXlvdXQgdmFyaWFibGVzIGZvciBjb25zaXN0ZW5jeVxuJGdsb2JhbC1wYWRkaW5nOiAzMHB4O1xuJGdsb2JhbC1tYXJnaW46IDMwcHg7XG4kZ2xvYmFsLXJhZGl1czogNXB4O1xuXG4vLyBFYXNlIFRyYW5zaXRpb25cbiRnbG9iYWwtZWFzZTogY3ViaWMtYmV6aWVyKC40LCAwLCAuMiwgMSk7XG5cbi8vIFN1YnRsZSBpbnNldCBib3JkZXJcbkBtaXhpbiBpbWFnZS1ib3JkZXIge1xuICBvdXRsaW5lOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMDUpO1xuICBvdXRsaW5lLW9mZnNldDogLTFweDtcbn1cblxuLy8gVHlwZVxuJGdsb2JhbC1mb250LXNpemU6IDE0cHg7XG5cbi8vXG4vLy8vIEhlbHBlciBGdW5jdGlvbnNcbi8vXG5cbi8vIENhbGN1bGF0ZSBNZWRpdW0gRW1waGFzaXMgQ29sb3JcbkBmdW5jdGlvbiBtZWRpdW0tZW1waGFzaXMoJGlucHV0LWNvbG9yKSB7XG4gIEByZXR1cm4gcmdiYSgkaW5wdXQtY29sb3IsIC4xMik7XG59XG5cbi8vIENhbGN1bGF0ZSBMb3cgRW1waGFzaXMgQ29sb3JcbkBmdW5jdGlvbiBsb3ctZW1waGFzaXMoJGlucHV0LWNvbG9yKSB7XG4gIEByZXR1cm4gcmdiYSgkaW5wdXQtY29sb3IsIC4wNSk7XG59XG5cbi8vIENhbGN1bGF0ZSBMaW5lIEhlaWdodCBmb3IgdGV4dFxuQGZ1bmN0aW9uIGxpbmUtaGVpZ2h0KCRpbnB1dC1zaXplKSB7XG4gIEByZXR1cm4gJGlucHV0LXNpemUgKiAxLjU7XG59XG5cbi8vIENhbGN1bGF0ZSBNYXJnaW4tQm90dG9tIGZvciBUZXh0XG5AZnVuY3Rpb24gbWFyZ2luLWJvdHRvbSgkaW5wdXQtc2l6ZSkge1xuICBAcmV0dXJuICRpbnB1dC1zaXplICogMS4yNTtcbn1cbiIsIkBpbXBvcnQgJ35zcmMvdmFyaWFibGVzJztcbkBpbXBvcnQgJ35zcmMvc3R5bGVzL2dyaWQvYnJlYWtwb2ludHMnO1xuQGltcG9ydCAnLi4vYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuc2Nzcyc7XG5cbi5wcm9qZWN0LWhlYWQge1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAuaGVhZGxpbmUge1xuICAgIGZvbnQtc2l6ZTogMzRweDtcbiAgICBtYXJnaW46IG1hcmdpbi1ib3R0b20oMzRweCkgMDtcbiAgfVxufVxuXG5hcnRpY2xlIHtcbiAgaW1nIHtcbiAgICBAaW5jbHVkZSBpbWFnZS1ib3JkZXI7XG4gIH1cbn1cblxuYXNpZGUge1xuICBsaSB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG59XG5cbi5wcm9qZWN0LXRhZ3Mge1xuICBjb2x1bW4tY291bnQ6IDI7XG59XG5cbmRsIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAkZ2xvYmFsLXBhZGRpbmcgLyAyO1xuICBwYWdlLWJyZWFrLWluc2lkZTogYXZvaWQ7XG5cbiAgZHQge1xuICAgIGNvbG9yOiAkYmxhY2s7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cblxuICBkZCB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cbn1cblxuLmJhY2stdG9nZ2xlIHtcbiAgY29sb3I6ICRibGFjaztcbiAgb3BhY2l0eTogLjU7XG4gIHRvcDogMzBweDtcblxuICAmOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yNSk7XG4gIH1cbn1cblxuLy8gQmFjayBidXR0b24gbG9jYXRpb24gb24gbGFyZ2VyIHNjcmVlbnNcbkBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAobWQpIHtcbiAgLmJhY2stdG9nZ2xlIHtcbiAgICBtYXJnaW4tbGVmdDogLTc1cHg7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgfVxuXG4gIGFydGljbGUge1xuICAgIG1hcmdpbi10b3A6IC03NXB4O1xuICB9XG5cbn1cblxuQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKG1kKSB7XG4gIC5wcm9qZWN0LWhlYWQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206ICRnbG9iYWwtbWFyZ2luO1xuXG4gICAgLmhlYWRsaW5lIHtcbiAgICAgIG1hcmdpbjogJGdsb2JhbC1tYXJnaW4gLyAyIDA7XG4gICAgfVxuICB9XG5cbiAgYXNpZGUge1xuICAgIHVsIHtcbiAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICB9XG4gIH1cbn1cbiIsIi8vIEJyZWFrcG9pbnQgdmlld3BvcnQgc2l6ZXMgYW5kIG1lZGlhIHF1ZXJpZXMuXG4vL1xuLy8gQnJlYWtwb2ludHMgYXJlIGRlZmluZWQgYXMgYSBtYXAgb2YgKG5hbWU6IG1pbmltdW0gd2lkdGgpLCBvcmRlciBmcm9tIHNtYWxsIHRvIGxhcmdlOlxuLy9cbi8vICAgICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweClcbi8vXG4vLyBUaGUgbWFwIGRlZmluZWQgaW4gdGhlIGAkZ3JpZC1icmVha3BvaW50c2AgZ2xvYmFsIHZhcmlhYmxlIGlzIHVzZWQgYXMgdGhlIGAkYnJlYWtwb2ludHNgIGFyZ3VtZW50IGJ5IGRlZmF1bHQuXG5cbi8vIE5hbWUgb2YgdGhlIG5leHQgYnJlYWtwb2ludCwgb3IgbnVsbCBmb3IgdGhlIGxhc3QgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20pXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgJGJyZWFrcG9pbnQtbmFtZXM6ICh4cyBzbSBtZCBsZyB4bCkpXG4vLyAgICBtZFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cywgJGJyZWFrcG9pbnQtbmFtZXM6IG1hcC1rZXlzKCRicmVha3BvaW50cykpIHtcbiAgJG46IGluZGV4KCRicmVha3BvaW50LW5hbWVzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG4gIT0gbnVsbCBhbmQgJG4gPCBsZW5ndGgoJGJyZWFrcG9pbnQtbmFtZXMpLCBudGgoJGJyZWFrcG9pbnQtbmFtZXMsICRuICsgMSksIG51bGwpO1xufVxuXG4vLyBNaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBzbWFsbGVzdCAoZmlyc3QpIGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1taW4oc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA1NzZweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG1pbiAhPSAwLCAkbWluLCBudWxsKTtcbn1cblxuLy8gTWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgbGFyZ2VzdCAobGFzdCkgYnJlYWtwb2ludC5cbi8vIFRoZSBtYXhpbXVtIHZhbHVlIGlzIGNhbGN1bGF0ZWQgYXMgdGhlIG1pbmltdW0gb2YgdGhlIG5leHQgb25lIGxlc3MgMC4wMnB4XG4vLyB0byB3b3JrIGFyb3VuZCB0aGUgbGltaXRhdGlvbnMgb2YgYG1pbi1gIGFuZCBgbWF4LWAgcHJlZml4ZXMgYW5kIHZpZXdwb3J0cyB3aXRoIGZyYWN0aW9uYWwgd2lkdGhzLlxuLy8gU2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9tZWRpYXF1ZXJpZXMtNC8jbXEtbWluLW1heFxuLy8gVXNlcyAwLjAycHggcmF0aGVyIHRoYW4gMC4wMXB4IHRvIHdvcmsgYXJvdW5kIGEgY3VycmVudCByb3VuZGluZyBidWcgaW4gU2FmYXJpLlxuLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1heChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDc2Ny45OHB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG5leHQ6IGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQHJldHVybiBpZigkbmV4dCwgYnJlYWtwb2ludC1taW4oJG5leHQsICRicmVha3BvaW50cykgLSAuMDIsIG51bGwpO1xufVxuXG4vLyBSZXR1cm5zIGEgYmxhbmsgc3RyaW5nIGlmIHNtYWxsZXN0IGJyZWFrcG9pbnQsIG90aGVyd2lzZSByZXR1cm5zIHRoZSBuYW1lIHdpdGggYSBkYXNoIGluIGZyb250LlxuLy8gVXNlZnVsIGZvciBtYWtpbmcgcmVzcG9uc2l2ZSB1dGlsaXRpZXMuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeCh4cywgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiXCIgIChSZXR1cm5zIGEgYmxhbmsgc3RyaW5nKVxuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiLXNtXCJcbkBmdW5jdGlvbiBicmVha3BvaW50LWluZml4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gIEByZXR1cm4gaWYoYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cykgPT0gbnVsbCwgXCJcIiwgXCItI3skbmFtZX1cIik7XG59XG5cbi8vIE1lZGlhIG9mIGF0IGxlYXN0IHRoZSBtaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgd2lkZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtaW4ge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIG9mIGF0IG1vc3QgdGhlIG1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBsYXJnZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtYXgge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIHRoYXQgc3BhbnMgbXVsdGlwbGUgYnJlYWtwb2ludCB3aWR0aHMuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgYmV0d2VlbiB0aGUgbWluIGFuZCBtYXggYnJlYWtwb2ludHNcbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWJldHdlZW4oJGxvd2VyLCAkdXBwZXIsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJGxvd2VyLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkdXBwZXIsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGxvd2VyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkdXBwZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbi8vIE1lZGlhIGJldHdlZW4gdGhlIGJyZWFrcG9pbnQncyBtaW5pbXVtIGFuZCBtYXhpbXVtIHdpZHRocy5cbi8vIE5vIG1pbmltdW0gZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LCBhbmQgbm8gbWF4aW11bSBmb3IgdGhlIGxhcmdlc3Qgb25lLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IG9ubHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQsIG5vdCB2aWV3cG9ydHMgYW55IHdpZGVyIG9yIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtb25seSgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PortfolioDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-portfolio-detail',
                templateUrl: './portfolio-detail.component.html',
                styleUrls: ['./portfolio-detail.component.scss']
            }]
    }], function () { return [{ type: _contentful_service__WEBPACK_IMPORTED_MODULE_2__["ContentfulService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    // Contentful Credentials
    contentful: {
        spaceId: 'yoo4e4pv9t7m',
        token: 'fc0e321b58b041271b60fbb48110dac5d4066d8751c46ab96ce7ff533028dceb',
    }
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

/***/ "F1my":
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../button/button.component */ "be9G");




class HomePageComponent {
    constructor(titleService) {
        this.titleService = titleService;
        // Set Page Title
        this.titleService.setTitle('Joseph Eborall');
    }
}
HomePageComponent.ɵfac = function HomePageComponent_Factory(t) { return new (t || HomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"])); };
HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomePageComponent, selectors: [["app-home-page"]], decls: 12, vars: 0, consts: [[1, "hero-wrap"], [1, "hero"], [1, "row"], ["cta", "My Work", "btnStyle", "", "link", "work"], ["cta", "Contact Me", "btnStyle", "text", "link", "contact"]], template: function HomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Eborall Digital Solutions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Conversion-optimized websites. Data-driven print design. Segmented Email Marketing. I've helped dozens of clients find digital solutions to their business problems. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Let me take care of the technical details so that you can spend more time doing what you love \u2013 serving customers, fulfilling orders, and taking your business to the next level. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_button_button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"]], styles: [".hero-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  height: 50vh;\n  vertical-align: middle;\n}\n\n@media (min-width: 576px) {\n  .hero[_ngcontent-%COMP%] {\n    max-width: 780px;\n    margin: auto;\n    position: relative;\n  }\n  .hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 16px;\n    line-height: 24px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9zdHlsZXMvZ3JpZC9taXhpbnMvX2JyZWFrcG9pbnRzLnNjc3MiLCJzcmMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLHNCQUFzQjtBQUZ4Qjs7QUN3REk7RURsREY7SUFDRSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGtCQUFrQjtFQUZwQjtFQURBO0lBTUksZUFBZTtJQUNmLGlCRW1DcUI7RUZyQ3pCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lLXBhZ2UvaG9tZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnfnNyYy9zdHlsZXMvZ3JpZC9icmVha3BvaW50cyc7XG5AaW1wb3J0ICd+c3JjL3ZhcmlhYmxlcyc7XG5cbi5oZXJvLXdyYXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDUwdmg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbkBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoc20pIHtcbiAgLmhlcm8ge1xuICAgIG1heC13aWR0aDogNzgwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIHAge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgbGluZS1oZWlnaHQ6IGxpbmUtaGVpZ2h0KDE2cHgpO1xuICAgIH1cbiAgfVxufVxuIiwiLy8gQnJlYWtwb2ludCB2aWV3cG9ydCBzaXplcyBhbmQgbWVkaWEgcXVlcmllcy5cbi8vXG4vLyBCcmVha3BvaW50cyBhcmUgZGVmaW5lZCBhcyBhIG1hcCBvZiAobmFtZTogbWluaW11bSB3aWR0aCksIG9yZGVyIGZyb20gc21hbGwgdG8gbGFyZ2U6XG4vL1xuLy8gICAgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KVxuLy9cbi8vIFRoZSBtYXAgZGVmaW5lZCBpbiB0aGUgYCRncmlkLWJyZWFrcG9pbnRzYCBnbG9iYWwgdmFyaWFibGUgaXMgdXNlZCBhcyB0aGUgYCRicmVha3BvaW50c2AgYXJndW1lbnQgYnkgZGVmYXVsdC5cblxuLy8gTmFtZSBvZiB0aGUgbmV4dCBicmVha3BvaW50LCBvciBudWxsIGZvciB0aGUgbGFzdCBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAkYnJlYWtwb2ludC1uYW1lczogKHhzIHNtIG1kIGxnIHhsKSlcbi8vICAgIG1kXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludC1uYW1lczogbWFwLWtleXMoJGJyZWFrcG9pbnRzKSkge1xuICAkbjogaW5kZXgoJGJyZWFrcG9pbnQtbmFtZXMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbiAhPSBudWxsIGFuZCAkbiA8IGxlbmd0aCgkYnJlYWtwb2ludC1uYW1lcyksIG50aCgkYnJlYWtwb2ludC1uYW1lcywgJG4gKyAxKSwgbnVsbCk7XG59XG5cbi8vIE1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIHNtYWxsZXN0IChmaXJzdCkgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1pbihzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDU3NnB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbWluICE9IDAsICRtaW4sIG51bGwpO1xufVxuXG4vLyBNYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBsYXJnZXN0IChsYXN0KSBicmVha3BvaW50LlxuLy8gVGhlIG1heGltdW0gdmFsdWUgaXMgY2FsY3VsYXRlZCBhcyB0aGUgbWluaW11bSBvZiB0aGUgbmV4dCBvbmUgbGVzcyAwLjAycHhcbi8vIHRvIHdvcmsgYXJvdW5kIHRoZSBsaW1pdGF0aW9ucyBvZiBgbWluLWAgYW5kIGBtYXgtYCBwcmVmaXhlcyBhbmQgdmlld3BvcnRzIHdpdGggZnJhY3Rpb25hbCB3aWR0aHMuXG4vLyBTZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL21lZGlhcXVlcmllcy00LyNtcS1taW4tbWF4XG4vLyBVc2VzIDAuMDJweCByYXRoZXIgdGhhbiAwLjAxcHggdG8gd29yayBhcm91bmQgYSBjdXJyZW50IHJvdW5kaW5nIGJ1ZyBpbiBTYWZhcmkuXG4vLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3ODI2MVxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWF4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNzY3Ljk4cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbmV4dDogYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAcmV0dXJuIGlmKCRuZXh0LCBicmVha3BvaW50LW1pbigkbmV4dCwgJGJyZWFrcG9pbnRzKSAtIC4wMiwgbnVsbCk7XG59XG5cbi8vIFJldHVybnMgYSBibGFuayBzdHJpbmcgaWYgc21hbGxlc3QgYnJlYWtwb2ludCwgb3RoZXJ3aXNlIHJldHVybnMgdGhlIG5hbWUgd2l0aCBhIGRhc2ggaW4gZnJvbnQuXG4vLyBVc2VmdWwgZm9yIG1ha2luZyByZXNwb25zaXZlIHV0aWxpdGllcy5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHhzLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCJcIiAgKFJldHVybnMgYSBibGFuayBzdHJpbmcpXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCItc21cIlxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtaW5maXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgQHJldHVybiBpZihicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKSA9PSBudWxsLCBcIlwiLCBcIi0jeyRuYW1lfVwiKTtcbn1cblxuLy8gTWVkaWEgb2YgYXQgbGVhc3QgdGhlIG1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCB3aWRlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1pbiB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgb2YgYXQgbW9zdCB0aGUgbWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIGxhcmdlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1heCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgdGhhdCBzcGFucyBtdWx0aXBsZSBicmVha3BvaW50IHdpZHRocy5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBiZXR3ZWVuIHRoZSBtaW4gYW5kIG1heCBicmVha3BvaW50c1xuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtYmV0d2VlbigkbG93ZXIsICR1cHBlciwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbG93ZXIsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCR1cHBlciwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbG93ZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCR1cHBlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuLy8gTWVkaWEgYmV0d2VlbiB0aGUgYnJlYWtwb2ludCdzIG1pbmltdW0gYW5kIG1heGltdW0gd2lkdGhzLlxuLy8gTm8gbWluaW11bSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQsIGFuZCBubyBtYXhpbXVtIGZvciB0aGUgbGFyZ2VzdCBvbmUuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgb25seSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCwgbm90IHZpZXdwb3J0cyBhbnkgd2lkZXIgb3IgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1vbmx5KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG4iLCIvLyBJbXBvcnQgQm9vdHN0cmFwIEJyZWFrcG9pbnRzIGZvciBHbG9iYWwgVXNlXG5AaW1wb3J0ICcuLi9zcmMvc3R5bGVzL2dyaWQvYnJlYWtwb2ludHMnO1xuXG4vL1xuLy8vLyBTdHlsaW5nIFZhcmlhYmxlc1xuLy9cblxuLy8gR2xvYmFsIFN0eWxpbmcgVmFyaWFibGVzXG4kYnJhbmQtcHJpbWFyeTogI2U5MDAzOTtcblxuLy8gQ29sb3IgTmV1dHJhbHNcbiRibGFjazogIzAwMDtcbiR3aGl0ZTogI2ZmZjtcbiRncmF5OiAjNzg3NzgwO1xuJGxpZ2h0LWdyYXk6ICM4ZDhlOTM7XG4kYm9keS1ncmF5OiAjNTc1ODY1O1xuXG4kYm9yZGVyLWNvbG9yOiAjYzljOWM5O1xuXG4vLyBMYXlvdXQgdmFyaWFibGVzIGZvciBjb25zaXN0ZW5jeVxuJGdsb2JhbC1wYWRkaW5nOiAzMHB4O1xuJGdsb2JhbC1tYXJnaW46IDMwcHg7XG4kZ2xvYmFsLXJhZGl1czogNXB4O1xuXG4vLyBFYXNlIFRyYW5zaXRpb25cbiRnbG9iYWwtZWFzZTogY3ViaWMtYmV6aWVyKC40LCAwLCAuMiwgMSk7XG5cbi8vIFN1YnRsZSBpbnNldCBib3JkZXJcbkBtaXhpbiBpbWFnZS1ib3JkZXIge1xuICBvdXRsaW5lOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMDUpO1xuICBvdXRsaW5lLW9mZnNldDogLTFweDtcbn1cblxuLy8gVHlwZVxuJGdsb2JhbC1mb250LXNpemU6IDE0cHg7XG5cbi8vXG4vLy8vIEhlbHBlciBGdW5jdGlvbnNcbi8vXG5cbi8vIENhbGN1bGF0ZSBNZWRpdW0gRW1waGFzaXMgQ29sb3JcbkBmdW5jdGlvbiBtZWRpdW0tZW1waGFzaXMoJGlucHV0LWNvbG9yKSB7XG4gIEByZXR1cm4gcmdiYSgkaW5wdXQtY29sb3IsIC4xMik7XG59XG5cbi8vIENhbGN1bGF0ZSBMb3cgRW1waGFzaXMgQ29sb3JcbkBmdW5jdGlvbiBsb3ctZW1waGFzaXMoJGlucHV0LWNvbG9yKSB7XG4gIEByZXR1cm4gcmdiYSgkaW5wdXQtY29sb3IsIC4wNSk7XG59XG5cbi8vIENhbGN1bGF0ZSBMaW5lIEhlaWdodCBmb3IgdGV4dFxuQGZ1bmN0aW9uIGxpbmUtaGVpZ2h0KCRpbnB1dC1zaXplKSB7XG4gIEByZXR1cm4gJGlucHV0LXNpemUgKiAxLjU7XG59XG5cbi8vIENhbGN1bGF0ZSBNYXJnaW4tQm90dG9tIGZvciBUZXh0XG5AZnVuY3Rpb24gbWFyZ2luLWJvdHRvbSgkaW5wdXQtc2l6ZSkge1xuICBAcmV0dXJuICRpbnB1dC1zaXplICogMS4yNTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home-page',
                templateUrl: './home-page.component.html',
                styleUrls: ['./home-page.component.scss'],
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] }]; }, null); })();


/***/ }),

/***/ "LfgP":
/*!******************************************************!*\
  !*** ./src/app/page-footer/page-footer.component.ts ***!
  \******************************************************/
/*! exports provided: PageFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageFooterComponent", function() { return PageFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PageFooterComponent {
    constructor() { }
    copyrightYear() {
        const d = new Date();
        const year = d.getFullYear();
        return year;
    }
    ngOnInit() {
    }
}
PageFooterComponent.ɵfac = function PageFooterComponent_Factory(t) { return new (t || PageFooterComponent)(); };
PageFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageFooterComponent, selectors: [["app-page-footer"]], decls: 3, vars: 1, template: function PageFooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A9 ", ctx.copyrightYear(), " Joseph Eborall");
    } }, styles: ["footer[_ngcontent-%COMP%] {\n  background: #070705;\n  color: #787780;\n  padding: 30px;\n  text-align: center;\n  height: 215px;\n  font-size: 14px;\n  z-index: -5;\n  position: relative;\n  margin-top: 30px;\n}\n\nfooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  z-index: 25;\n  padding: 25px;\n  display: block;\n}\n\nfooter[_ngcontent-%COMP%]::before {\n  clear: both;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS1mb290ZXIvcGFnZS1mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGFDZW1CO0VEZG5CLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsZUFBZTtFQUNmLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZ0JDVWtCO0FEWHBCOztBQVJBO0VBWUksV0FBVztFQUNYLGFBQWE7RUFDYixjQUFjO0FBQWxCOztBQWRBO0VBa0JJLFdBQVc7QUFBZiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UtZm9vdGVyL3BhZ2UtZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnfnNyYy92YXJpYWJsZXMnO1xuXG5mb290ZXIge1xuICBiYWNrZ3JvdW5kOiAjMDcwNzA1O1xuICBjb2xvcjogIzc4Nzc4MDtcbiAgcGFkZGluZzogJGdsb2JhbC1wYWRkaW5nO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogMjE1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgei1pbmRleDogLTU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogJGdsb2JhbC1tYXJnaW47XG5cbiAgYSB7XG4gICAgei1pbmRleDogMjU7XG4gICAgcGFkZGluZzogMjVweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gICY6OmJlZm9yZSB7XG4gICAgY2xlYXI6IGJvdGg7XG4gIH1cbn1cbiIsIi8vIEltcG9ydCBCb290c3RyYXAgQnJlYWtwb2ludHMgZm9yIEdsb2JhbCBVc2VcbkBpbXBvcnQgJy4uL3NyYy9zdHlsZXMvZ3JpZC9icmVha3BvaW50cyc7XG5cbi8vXG4vLy8vIFN0eWxpbmcgVmFyaWFibGVzXG4vL1xuXG4vLyBHbG9iYWwgU3R5bGluZyBWYXJpYWJsZXNcbiRicmFuZC1wcmltYXJ5OiAjZTkwMDM5O1xuXG4vLyBDb2xvciBOZXV0cmFsc1xuJGJsYWNrOiAjMDAwO1xuJHdoaXRlOiAjZmZmO1xuJGdyYXk6ICM3ODc3ODA7XG4kbGlnaHQtZ3JheTogIzhkOGU5MztcbiRib2R5LWdyYXk6ICM1NzU4NjU7XG5cbiRib3JkZXItY29sb3I6ICNjOWM5Yzk7XG5cbi8vIExheW91dCB2YXJpYWJsZXMgZm9yIGNvbnNpc3RlbmN5XG4kZ2xvYmFsLXBhZGRpbmc6IDMwcHg7XG4kZ2xvYmFsLW1hcmdpbjogMzBweDtcbiRnbG9iYWwtcmFkaXVzOiA1cHg7XG5cbi8vIEVhc2UgVHJhbnNpdGlvblxuJGdsb2JhbC1lYXNlOiBjdWJpYy1iZXppZXIoLjQsIDAsIC4yLCAxKTtcblxuLy8gU3VidGxlIGluc2V0IGJvcmRlclxuQG1peGluIGltYWdlLWJvcmRlciB7XG4gIG91dGxpbmU6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4wNSk7XG4gIG91dGxpbmUtb2Zmc2V0OiAtMXB4O1xufVxuXG4vLyBUeXBlXG4kZ2xvYmFsLWZvbnQtc2l6ZTogMTRweDtcblxuLy9cbi8vLy8gSGVscGVyIEZ1bmN0aW9uc1xuLy9cblxuLy8gQ2FsY3VsYXRlIE1lZGl1bSBFbXBoYXNpcyBDb2xvclxuQGZ1bmN0aW9uIG1lZGl1bS1lbXBoYXNpcygkaW5wdXQtY29sb3IpIHtcbiAgQHJldHVybiByZ2JhKCRpbnB1dC1jb2xvciwgLjEyKTtcbn1cblxuLy8gQ2FsY3VsYXRlIExvdyBFbXBoYXNpcyBDb2xvclxuQGZ1bmN0aW9uIGxvdy1lbXBoYXNpcygkaW5wdXQtY29sb3IpIHtcbiAgQHJldHVybiByZ2JhKCRpbnB1dC1jb2xvciwgLjA1KTtcbn1cblxuLy8gQ2FsY3VsYXRlIExpbmUgSGVpZ2h0IGZvciB0ZXh0XG5AZnVuY3Rpb24gbGluZS1oZWlnaHQoJGlucHV0LXNpemUpIHtcbiAgQHJldHVybiAkaW5wdXQtc2l6ZSAqIDEuNTtcbn1cblxuLy8gQ2FsY3VsYXRlIE1hcmdpbi1Cb3R0b20gZm9yIFRleHRcbkBmdW5jdGlvbiBtYXJnaW4tYm90dG9tKCRpbnB1dC1zaXplKSB7XG4gIEByZXR1cm4gJGlucHV0LXNpemUgKiAxLjI1O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageFooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-footer',
                templateUrl: './page-footer.component.html',
                styleUrls: ['./page-footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _animations_fade_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../animations/fade.animation */ "6CR1");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation/navigation.component */ "k5x5");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _page_footer_page_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-footer/page-footer.component */ "LfgP");







class AppComponent {
    constructor(titleService) {
        this.titleService = titleService;
    }
    getState(outlet) {
        return outlet.isActivated ? outlet.activatedRoute : '';
    }
    setTitle(newTitle) {
        this.titleService.setTitle(newTitle);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 12, vars: 1, consts: [[1, "grid-wrapper", "container-fluid"], [1, "layout-underline"], [1, "row", "no-gutter", "full-height"], [1, "col-12"], [1, "container"], ["o", "outlet"], [1, "vert-elements"], [1, "vert-line"], [1, "vert-name"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeAnimation", ctx.getState(_r0));
    } }, directives: [_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__["NavigationComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _page_footer_page_footer_component__WEBPACK_IMPORTED_MODULE_5__["PageFooterComponent"]], styles: [".active[_ngcontent-%COMP%] {\n  color: #000;\n}\n\na[_ngcontent-%COMP%] {\n  color: #ccc;\n}\n\nmain[_ngcontent-%COMP%] {\n  transition: .75s ease-in-out;\n  display: block;\n}\n\n.full-height[_ngcontent-%COMP%] {\n  min-height: 70vh;\n}\n\n.hide-slideshow[_ngcontent-%COMP%] {\n  -webkit-animation: fadeOut .75s ease-in-out;\n          animation: fadeOut .75s ease-in-out;\n}\n\n.show-slideshow[_ngcontent-%COMP%] {\n  -webkit-animation: fadeIn 3s ease-in-out;\n          animation: fadeIn 3s ease-in-out;\n}\n\n@-webkit-keyframes fadeOut {\n  0% {\n    flex: 0 0 50%;\n    opacity: 1;\n  }\n  100% {\n    flex: 0 0 0;\n    opacity: 0;\n  }\n}\n\n@keyframes fadeOut {\n  0% {\n    flex: 0 0 50%;\n    opacity: 1;\n  }\n  100% {\n    flex: 0 0 0;\n    opacity: 0;\n  }\n}\n\n@-webkit-keyframes fadeIn {\n  0% {\n    opacity: inherit;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes fadeIn {\n  0% {\n    opacity: inherit;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n.full-article[_ngcontent-%COMP%]    > .container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n}\n\n.vert-elements[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 7%;\n  top: 0;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  z-index: -1;\n  overflow: visible;\n  margin: 0;\n}\n\n.vert-line[_ngcontent-%COMP%] {\n  display: inline-block;\n  border-left: 1px solid #c9c9c9;\n  height: 100%;\n  position: relative;\n  left: 50%;\n  margin: 0;\n}\n\n.vert-name[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n  transform-origin: center;\n  background: #fff;\n  padding: 0 25px;\n  text-transform: uppercase;\n  letter-spacing: 5px;\n  text-align: center;\n  color: #c9c9c9;\n  display: block;\n}\n\n.layout-underline[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #c9c9c9;\n}\n\n@media (max-width: 1600px) {\n  .vert-name[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n@media (max-width: 1300px) {\n  .vert-elements[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0UsV0NLVTtBRFRaOztBQU9BO0VBQ0UsV0FBVztBQUpiOztBQU9BO0VBQ0UsNEJBQTRCO0VBQzVCLGNBQWM7QUFKaEI7O0FBUUE7RUFDRSxnQkFBZ0I7QUFMbEI7O0FBUUE7RUFDRSwyQ0FBbUM7VUFBbkMsbUNBQW1DO0FBTHJDOztBQVFBO0VBQ0Usd0NBQWdDO1VBQWhDLGdDQUFnQztBQUxsQzs7QUFTQTtFQUNFO0lBQ0UsYUFBYTtJQUNiLFVBQVU7RUFOWjtFQVVBO0lBQ0UsV0FBVztJQUNYLFVBQVU7RUFSWjtBQUNGOztBQUZBO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsVUFBVTtFQU5aO0VBVUE7SUFDRSxXQUFXO0lBQ1gsVUFBVTtFQVJaO0FBQ0Y7O0FBWUE7RUFDRTtJQUNFLGdCQUFnQjtFQVRsQjtFQVlBO0lBQ0UsVUFBVTtFQVZaO0FBQ0Y7O0FBR0E7RUFDRTtJQUNFLGdCQUFnQjtFQVRsQjtFQVlBO0lBQ0UsVUFBVTtFQVZaO0FBQ0Y7O0FBYUE7RUFDRSxpQkFBaUI7QUFWbkI7O0FBYUE7RUFDRSxlQUFlO0VBQ2YsUUFBUTtFQUNSLE1BQU07RUFDTixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLFNBQVM7QUFWWDs7QUFhQTtFQUNFLHFCQUFxQjtFQUNyQiw4QkN6RG9CO0VEMERwQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxTQUFTO0FBVlg7O0FBYUE7RUFDRSx3QkFBd0I7RUFDeEIsd0JBQXdCO0VBQ3hCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsY0N4RW9CO0VEeUVwQixjQUFjO0FBVmhCOztBQWFBO0VBQ0UsZ0NDN0VvQjtBRG1FdEI7O0FBY0E7RUFDRTtJQUNFLGFBQWE7RUFYZjtBQUNGOztBQWVBO0VBQ0U7SUFDRSxhQUFhO0VBWmY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ35zcmMvdmFyaWFibGVzJztcblxuLy8gQm9vdHN0cmFwIEJyZWFrcG9pbnRzXG5AaW1wb3J0ICcuLi9zdHlsZXMvZ3JpZC9icmVha3BvaW50cyc7XG5cbi5hY3RpdmUge1xuICBjb2xvcjogJGJsYWNrO1xufVxuXG5hIHtcbiAgY29sb3I6ICNjY2M7XG59XG5cbm1haW4ge1xuICB0cmFuc2l0aW9uOiAuNzVzIGVhc2UtaW4tb3V0O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLy8gTWFrZSBDb250ZW50IEZ1bGwtSGVpZ2h0IG9mIFdpbmRvd1xuLmZ1bGwtaGVpZ2h0IHtcbiAgbWluLWhlaWdodDogNzB2aDtcbn1cblxuLmhpZGUtc2xpZGVzaG93IHtcbiAgYW5pbWF0aW9uOiBmYWRlT3V0IC43NXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5zaG93LXNsaWRlc2hvdyB7XG4gIGFuaW1hdGlvbjogZmFkZUluIDNzIGVhc2UtaW4tb3V0O1xufVxuXG4vLyBGYWRlIG91dCBhbmQgZGlzc2FwZWFyXG5Aa2V5ZnJhbWVzIGZhZGVPdXQge1xuICAwJSB7XG4gICAgZmxleDogMCAwIDUwJTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cblxuICAxMDAlIHtcbiAgICBmbGV4OiAwIDAgMDtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5cbi8vIEZhZGUgb3V0IGFuZCBkaXNzYXBlYXJcbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IGluaGVyaXQ7XG4gIH1cblxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbi5mdWxsLWFydGljbGUgPiAuY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG59XG5cbi52ZXJ0LWVsZW1lbnRzIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiA3JTtcbiAgdG9wOiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHotaW5kZXg6IC0xO1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgbWFyZ2luOiAwO1xufVxuXG4udmVydC1saW5lIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbjogMDtcbn1cblxuLnZlcnQtbmFtZSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiAwIDI1cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiA1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICRib3JkZXItY29sb3I7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubGF5b3V0LXVuZGVybGluZSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xufVxuXG4vLyBYTCBzY3JlZW5zIHNob3cgbmFtZVxuQG1lZGlhIChtYXgtd2lkdGg6IDE2MDBweCkge1xuICAudmVydC1uYW1lIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbi8vIEhpZGUgVmVydCBMaW5lXG5AbWVkaWEgKG1heC13aWR0aDogMTMwMHB4KSB7XG4gIC52ZXJ0LWVsZW1lbnRzIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4iLCIvLyBJbXBvcnQgQm9vdHN0cmFwIEJyZWFrcG9pbnRzIGZvciBHbG9iYWwgVXNlXG5AaW1wb3J0ICcuLi9zcmMvc3R5bGVzL2dyaWQvYnJlYWtwb2ludHMnO1xuXG4vL1xuLy8vLyBTdHlsaW5nIFZhcmlhYmxlc1xuLy9cblxuLy8gR2xvYmFsIFN0eWxpbmcgVmFyaWFibGVzXG4kYnJhbmQtcHJpbWFyeTogI2U5MDAzOTtcblxuLy8gQ29sb3IgTmV1dHJhbHNcbiRibGFjazogIzAwMDtcbiR3aGl0ZTogI2ZmZjtcbiRncmF5OiAjNzg3NzgwO1xuJGxpZ2h0LWdyYXk6ICM4ZDhlOTM7XG4kYm9keS1ncmF5OiAjNTc1ODY1O1xuXG4kYm9yZGVyLWNvbG9yOiAjYzljOWM5O1xuXG4vLyBMYXlvdXQgdmFyaWFibGVzIGZvciBjb25zaXN0ZW5jeVxuJGdsb2JhbC1wYWRkaW5nOiAzMHB4O1xuJGdsb2JhbC1tYXJnaW46IDMwcHg7XG4kZ2xvYmFsLXJhZGl1czogNXB4O1xuXG4vLyBFYXNlIFRyYW5zaXRpb25cbiRnbG9iYWwtZWFzZTogY3ViaWMtYmV6aWVyKC40LCAwLCAuMiwgMSk7XG5cbi8vIFN1YnRsZSBpbnNldCBib3JkZXJcbkBtaXhpbiBpbWFnZS1ib3JkZXIge1xuICBvdXRsaW5lOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMDUpO1xuICBvdXRsaW5lLW9mZnNldDogLTFweDtcbn1cblxuLy8gVHlwZVxuJGdsb2JhbC1mb250LXNpemU6IDE0cHg7XG5cbi8vXG4vLy8vIEhlbHBlciBGdW5jdGlvbnNcbi8vXG5cbi8vIENhbGN1bGF0ZSBNZWRpdW0gRW1waGFzaXMgQ29sb3JcbkBmdW5jdGlvbiBtZWRpdW0tZW1waGFzaXMoJGlucHV0LWNvbG9yKSB7XG4gIEByZXR1cm4gcmdiYSgkaW5wdXQtY29sb3IsIC4xMik7XG59XG5cbi8vIENhbGN1bGF0ZSBMb3cgRW1waGFzaXMgQ29sb3JcbkBmdW5jdGlvbiBsb3ctZW1waGFzaXMoJGlucHV0LWNvbG9yKSB7XG4gIEByZXR1cm4gcmdiYSgkaW5wdXQtY29sb3IsIC4wNSk7XG59XG5cbi8vIENhbGN1bGF0ZSBMaW5lIEhlaWdodCBmb3IgdGV4dFxuQGZ1bmN0aW9uIGxpbmUtaGVpZ2h0KCRpbnB1dC1zaXplKSB7XG4gIEByZXR1cm4gJGlucHV0LXNpemUgKiAxLjU7XG59XG5cbi8vIENhbGN1bGF0ZSBNYXJnaW4tQm90dG9tIGZvciBUZXh0XG5AZnVuY3Rpb24gbWFyZ2luLWJvdHRvbSgkaW5wdXQtc2l6ZSkge1xuICBAcmV0dXJuICRpbnB1dC1zaXplICogMS4yNTtcbn1cbiJdfQ== */"], data: { animation: [
            _animations_fade_animation__WEBPACK_IMPORTED_MODULE_1__["fadeAnimation"]
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                animations: [
                    _animations_fade_animation__WEBPACK_IMPORTED_MODULE_1__["fadeAnimation"]
                ],
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] }]; }, null); })();


/***/ }),

/***/ "T5OV":
/*!**********************************************************************!*\
  !*** ./src/app/youtube-video-embed/youtube-video-embed.component.ts ***!
  \**********************************************************************/
/*! exports provided: YoutubeVideoEmbedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubeVideoEmbedComponent", function() { return YoutubeVideoEmbedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function YoutubeVideoEmbedComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "iframe", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://youtube.com/embed/", ctx_r0.videoId, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
} }
class YoutubeVideoEmbedComponent {
    constructor() { }
    ngOnInit() {
    }
}
YoutubeVideoEmbedComponent.ɵfac = function YoutubeVideoEmbedComponent_Factory(t) { return new (t || YoutubeVideoEmbedComponent)(); };
YoutubeVideoEmbedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: YoutubeVideoEmbedComponent, selectors: [["app-youtube-video-embed"]], inputs: { videoId: "videoId" }, decls: 1, vars: 1, consts: [["class", "embedtool", 4, "ngIf"], [1, "embedtool"], ["frameborder", "0", "allowfullscreen", "", 3, "src"]], template: function YoutubeVideoEmbedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, YoutubeVideoEmbedComponent_div_0_Template, 2, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.videoId);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".embedtool[_ngcontent-%COMP%] {\n  position: relative;\n  height: 0;\n  padding-top: 56%;\n  overflow: hidden;\n  max-width: 100%;\n}\n\n.embedtool[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%], .embedtool[_ngcontent-%COMP%]   object[_ngcontent-%COMP%], .embedtool[_ngcontent-%COMP%]   embed[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.embedtool[_ngcontent-%COMP%]   .fluid-vids[_ngcontent-%COMP%] {\n  position: initial !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAveW91dHViZS12aWRlby1lbWJlZC95b3V0dWJlLXZpZGVvLWVtYmVkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7OztFQUdFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSw0QkFDRjtBQUFBIiwiZmlsZSI6InNyYy9hcHAveW91dHViZS12aWRlby1lbWJlZC95b3V0dWJlLXZpZGVvLWVtYmVkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVtYmVkdG9vbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAwO1xuICBwYWRkaW5nLXRvcDogNTYlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi5lbWJlZHRvb2wgaWZyYW1lLFxuLmVtYmVkdG9vbCBvYmplY3QsXG4uZW1iZWR0b29sIGVtYmVkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5lbWJlZHRvb2wgLmZsdWlkLXZpZHMge1xuICBwb3NpdGlvbjogaW5pdGlhbCAhaW1wb3J0YW50XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](YoutubeVideoEmbedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-youtube-video-embed',
                templateUrl: './youtube-video-embed.component.html',
                styleUrls: ['./youtube-video-embed.component.scss']
            }]
    }], function () { return []; }, { videoId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "TcF+":
/*!************************************************************!*\
  !*** ./src/app/portfolio-list/portfolio-list.component.ts ***!
  \************************************************************/
/*! exports provided: PortfolioListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioListComponent", function() { return PortfolioListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _contentful_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contentful.service */ "o6/c");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _filter_list_filter_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../filter-list/filter-list.component */ "514t");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../button/button.component */ "be9G");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _projectfilter_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../projectfilter.pipe */ "UhM7");










const _c0 = function (a1) { return ["/work", a1]; };
function PortfolioListComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, project_r1.fields.slug));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", project_r1.fields.projectThumb.fields.file.url, "?fm=jpg&fl=progressive&fit=thumb&w=350&h=200&f=face", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("alt", "", project_r1.fields.projectName, " Thumbnail");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r1.fields.projectName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r1.fields.summary);
} }
class PortfolioListComponent {
    constructor(contentfulService, titleService) {
        this.contentfulService = contentfulService;
        this.titleService = titleService;
        this.SearchFilter = '';
        // Set Page Title
        this.titleService.setTitle('My Work | Joseph Eborall');
    }
    ngOnInit() {
        this.contentfulService
            .getProjects()
            .then(project => (this.projects = project));
    }
    updateFilter(newFilter) {
        if (newFilter === 'All') {
            this.SearchFilter = '';
        }
        else {
            this.SearchFilter = newFilter;
        }
    }
    // Split Filters
    processFilters(projectData) {
        // Filter Project Types into Array
        const rawArray = projectData.filter(project => project.fields.typeOfWork).map(project => project.fields.typeOfWork);
        const splitArray = [];
        // Loop through filters
        for (const item in rawArray) {
            if (rawArray.hasOwnProperty(item)) {
                const splits = rawArray[item];
                // Loop through Individual Labels
                for (const split in splits) {
                    if (splits.hasOwnProperty(split)) {
                        splitArray.push(splits[split]);
                    }
                }
            }
        }
        const uniqueFilters = [...new Set(splitArray.sort())];
        uniqueFilters.unshift('All');
        return uniqueFilters;
    }
    getState(outlet) {
        return outlet.isActivated ? outlet.activatedRoute : '';
    }
}
PortfolioListComponent.ɵfac = function PortfolioListComponent_Factory(t) { return new (t || PortfolioListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_contentful_service__WEBPACK_IMPORTED_MODULE_2__["ContentfulService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"])); };
PortfolioListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PortfolioListComponent, selectors: [["app-portfolio-list"]], decls: 9, vars: 6, consts: [[3, "PostData", "newItemEvent"], [1, "row"], ["class", "col-sm-12 col-md-4 h-100", 4, "ngFor", "ngForOf"], [1, "col-sm-12"], ["btnStyle", "full-width", "cta", "Contact Me", "link", "../contact"], [1, "col-sm-12", "col-md-4", "h-100"], [1, "project", 3, "routerLink"], [3, "src", "alt"], [1, "project-details"], [1, "summary"]], template: function PortfolioListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "My Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-filter-list", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("newItemEvent", function PortfolioListComponent_Template_app_filter_list_newItemEvent_2_listener($event) { return ctx.updateFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PortfolioListComponent_div_4_Template, 8, 7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "projectfilter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("PostData", ctx.processFilters(ctx.projects));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@photosAnimation", ctx.projects.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 3, ctx.projects, ctx.SearchFilter));
    } }, directives: [_filter_list_filter_list_component__WEBPACK_IMPORTED_MODULE_4__["FilterListComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _button_button_component__WEBPACK_IMPORTED_MODULE_6__["ButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"]], pipes: [_projectfilter_pipe__WEBPACK_IMPORTED_MODULE_8__["ProjectfilterPipe"]], styles: [".project[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 30px;\n  text-decoration: none;\n}\n\n.project[_ngcontent-%COMP%]:hover    > img[_ngcontent-%COMP%] {\n  box-shadow: 0 0 30px rgba(0, 0, 0, 0.12);\n  transform: scale(1.05);\n}\n\n.project[_ngcontent-%COMP%]:active    > img[_ngcontent-%COMP%] {\n  box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);\n}\n\n.project[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  overflow: hidden;\n  transition: .25s ease;\n  width: 100%;\n  min-height: 150px;\n  min-width: 300px;\n  background: #787780;\n  outline: 1px solid rgba(0, 0, 0, 0.05);\n  outline-offset: -1px;\n}\n\n.project[_ngcontent-%COMP%]   .project-details[_ngcontent-%COMP%] {\n  height: 75px;\n  padding-right: 18px;\n}\n\n.project[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 18px;\n  line-height: 27px;\n  margin: 0;\n  color: #000;\n}\n\n.project[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 60%;\n  color: #787780;\n  font-weight: normal;\n  align-self: middle;\n}\n\n.project[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n}\n\n.project[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  line-height: 27px;\n  font-weight: normal;\n  color: #787780;\n}\n\n@media (min-width: 768px) {\n  .project[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .project[_ngcontent-%COMP%]:hover   h2[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .project[_ngcontent-%COMP%]:hover   strong[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n\n@media (max-width: 767.98px) {\n  .project[_ngcontent-%COMP%] {\n    margin-bottom: 60px;\n  }\n  .project[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9ydGZvbGlvLWxpc3QvcG9ydGZvbGlvLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvdmFyaWFibGVzLnNjc3MiLCJzcmMvc3R5bGVzL2dyaWQvbWl4aW5zL19icmVha3BvaW50cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0UsY0FBYztFQUNkLG1CQ2VrQjtFRGRsQixxQkFBcUI7QUFIdkI7O0FBQUE7RUFPTSx3Q0NBTTtFRENOLHNCQUFzQjtBQUg1Qjs7QUFMQTtFQWNNLHVDQ1BNO0FERVo7O0FBVEE7RUFtQkksbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsbUJDaEJVO0VBZ0JaLHNDQUFxQztFQUNyQyxvQkFBb0I7QURMdEI7O0FBckJBO0VBOEJJLFlBQVk7RUFDWixtQkFBbUI7QUFMdkI7O0FBMUJBO0VBbUNJLGVBQWU7RUFDZixpQkNZdUI7RURYdkIsU0FBUztFQUNULFdDL0JRO0FEMEJaOztBQWpDQTtFQXlDTSxjQUFjO0VBQ2QsY0NqQ1E7RURrQ1IsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUp4Qjs7QUF4Q0E7RUFpREksZ0JBQWdCO0FBTHBCOztBQTVDQTtFQXNESSxpQkNOdUI7RURPdkIsbUJBQW1CO0VBQ25CLGNDL0NVO0FEeUNkOztBRU1JO0VGeERKO0lBNkRNLGFBQWE7RUFOakI7RUF2REY7SUFtRVEsYUFBYTtFQVRuQjtFQTFERjtJQXVFUSxjQUFjO0VBVnBCO0FBQ0Y7O0FFT0k7RUZTRjtJQUNFLG1CQUFpQztFQVpuQztFQVdBO0lBSUksZ0JBQWdCO0VBWnBCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wb3J0Zm9saW8tbGlzdC9wb3J0Zm9saW8tbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ35zcmMvdmFyaWFibGVzJztcbkBpbXBvcnQgJ35zcmMvc3R5bGVzL2dyaWQvYnJlYWtwb2ludHMnO1xuXG4vLyBQcm9qZWN0IExpc3QgQ29tcG9uZW50c1xuLnByb2plY3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogJGdsb2JhbC1tYXJnaW47XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxuICAmOmhvdmVyIHtcbiAgICAmID4gaW1nIHtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoJGJsYWNrLCAuMTIpO1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgICB9XG4gIH1cblxuICAmOmFjdGl2ZSB7XG4gICAgJiA+IGltZyB7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMzBweCByZ2JhKCRibGFjaywgLjMpO1xuICAgIH1cbiAgfVxuXG4gIGltZyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRyYW5zaXRpb246IC4yNXMgZWFzZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAxNTBweDtcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xuICAgIGJhY2tncm91bmQ6ICRncmF5O1xuICAgIEBpbmNsdWRlIGltYWdlLWJvcmRlcjtcbiAgfVxuXG4gIC5wcm9qZWN0LWRldGFpbHMge1xuICAgIGhlaWdodDogNzVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxOHB4O1xuICB9XG5cbiAgaDIge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBsaW5lLWhlaWdodDogbGluZS1oZWlnaHQoMThweCk7XG4gICAgbWFyZ2luOiAwO1xuICAgIGNvbG9yOiAkYmxhY2s7XG5cbiAgICBzcGFuIHtcbiAgICAgIGZvbnQtc2l6ZTogNjAlO1xuICAgICAgY29sb3I6ICRncmF5O1xuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgIGFsaWduLXNlbGY6IG1pZGRsZTtcbiAgICB9XG4gIH1cblxuICBsaSB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgfVxuXG4gIC8vIEhpZGUgZGVzY3JpcHRpb25cbiAgc3Ryb25nIHtcbiAgICBsaW5lLWhlaWdodDogbGluZS1oZWlnaHQoMThweCk7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBjb2xvcjogJGdyYXk7XG4gIH1cblxuICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKG1kKSB7XG4gICAgc3Ryb25nIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLy8gT24gaG92ZXIsIGhpZGUgaDIgc2hvdyBzdHJvbmdcbiAgICAmOmhvdmVyIHtcbiAgICAgIGgyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgc3Ryb25nIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bihzbSkge1xuICAucHJvamVjdCB7XG4gICAgbWFyZ2luLWJvdHRvbTogJGdsb2JhbC1tYXJnaW4gKiAyO1xuXG4gICAgaDIge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG4gIH1cbn1cbiIsIi8vIEltcG9ydCBCb290c3RyYXAgQnJlYWtwb2ludHMgZm9yIEdsb2JhbCBVc2VcbkBpbXBvcnQgJy4uL3NyYy9zdHlsZXMvZ3JpZC9icmVha3BvaW50cyc7XG5cbi8vXG4vLy8vIFN0eWxpbmcgVmFyaWFibGVzXG4vL1xuXG4vLyBHbG9iYWwgU3R5bGluZyBWYXJpYWJsZXNcbiRicmFuZC1wcmltYXJ5OiAjZTkwMDM5O1xuXG4vLyBDb2xvciBOZXV0cmFsc1xuJGJsYWNrOiAjMDAwO1xuJHdoaXRlOiAjZmZmO1xuJGdyYXk6ICM3ODc3ODA7XG4kbGlnaHQtZ3JheTogIzhkOGU5MztcbiRib2R5LWdyYXk6ICM1NzU4NjU7XG5cbiRib3JkZXItY29sb3I6ICNjOWM5Yzk7XG5cbi8vIExheW91dCB2YXJpYWJsZXMgZm9yIGNvbnNpc3RlbmN5XG4kZ2xvYmFsLXBhZGRpbmc6IDMwcHg7XG4kZ2xvYmFsLW1hcmdpbjogMzBweDtcbiRnbG9iYWwtcmFkaXVzOiA1cHg7XG5cbi8vIEVhc2UgVHJhbnNpdGlvblxuJGdsb2JhbC1lYXNlOiBjdWJpYy1iZXppZXIoLjQsIDAsIC4yLCAxKTtcblxuLy8gU3VidGxlIGluc2V0IGJvcmRlclxuQG1peGluIGltYWdlLWJvcmRlciB7XG4gIG91dGxpbmU6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4wNSk7XG4gIG91dGxpbmUtb2Zmc2V0OiAtMXB4O1xufVxuXG4vLyBUeXBlXG4kZ2xvYmFsLWZvbnQtc2l6ZTogMTRweDtcblxuLy9cbi8vLy8gSGVscGVyIEZ1bmN0aW9uc1xuLy9cblxuLy8gQ2FsY3VsYXRlIE1lZGl1bSBFbXBoYXNpcyBDb2xvclxuQGZ1bmN0aW9uIG1lZGl1bS1lbXBoYXNpcygkaW5wdXQtY29sb3IpIHtcbiAgQHJldHVybiByZ2JhKCRpbnB1dC1jb2xvciwgLjEyKTtcbn1cblxuLy8gQ2FsY3VsYXRlIExvdyBFbXBoYXNpcyBDb2xvclxuQGZ1bmN0aW9uIGxvdy1lbXBoYXNpcygkaW5wdXQtY29sb3IpIHtcbiAgQHJldHVybiByZ2JhKCRpbnB1dC1jb2xvciwgLjA1KTtcbn1cblxuLy8gQ2FsY3VsYXRlIExpbmUgSGVpZ2h0IGZvciB0ZXh0XG5AZnVuY3Rpb24gbGluZS1oZWlnaHQoJGlucHV0LXNpemUpIHtcbiAgQHJldHVybiAkaW5wdXQtc2l6ZSAqIDEuNTtcbn1cblxuLy8gQ2FsY3VsYXRlIE1hcmdpbi1Cb3R0b20gZm9yIFRleHRcbkBmdW5jdGlvbiBtYXJnaW4tYm90dG9tKCRpbnB1dC1zaXplKSB7XG4gIEByZXR1cm4gJGlucHV0LXNpemUgKiAxLjI1O1xufVxuIiwiLy8gQnJlYWtwb2ludCB2aWV3cG9ydCBzaXplcyBhbmQgbWVkaWEgcXVlcmllcy5cbi8vXG4vLyBCcmVha3BvaW50cyBhcmUgZGVmaW5lZCBhcyBhIG1hcCBvZiAobmFtZTogbWluaW11bSB3aWR0aCksIG9yZGVyIGZyb20gc21hbGwgdG8gbGFyZ2U6XG4vL1xuLy8gICAgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KVxuLy9cbi8vIFRoZSBtYXAgZGVmaW5lZCBpbiB0aGUgYCRncmlkLWJyZWFrcG9pbnRzYCBnbG9iYWwgdmFyaWFibGUgaXMgdXNlZCBhcyB0aGUgYCRicmVha3BvaW50c2AgYXJndW1lbnQgYnkgZGVmYXVsdC5cblxuLy8gTmFtZSBvZiB0aGUgbmV4dCBicmVha3BvaW50LCBvciBudWxsIGZvciB0aGUgbGFzdCBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAkYnJlYWtwb2ludC1uYW1lczogKHhzIHNtIG1kIGxnIHhsKSlcbi8vICAgIG1kXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludC1uYW1lczogbWFwLWtleXMoJGJyZWFrcG9pbnRzKSkge1xuICAkbjogaW5kZXgoJGJyZWFrcG9pbnQtbmFtZXMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbiAhPSBudWxsIGFuZCAkbiA8IGxlbmd0aCgkYnJlYWtwb2ludC1uYW1lcyksIG50aCgkYnJlYWtwb2ludC1uYW1lcywgJG4gKyAxKSwgbnVsbCk7XG59XG5cbi8vIE1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIHNtYWxsZXN0IChmaXJzdCkgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1pbihzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDU3NnB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbWluICE9IDAsICRtaW4sIG51bGwpO1xufVxuXG4vLyBNYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBsYXJnZXN0IChsYXN0KSBicmVha3BvaW50LlxuLy8gVGhlIG1heGltdW0gdmFsdWUgaXMgY2FsY3VsYXRlZCBhcyB0aGUgbWluaW11bSBvZiB0aGUgbmV4dCBvbmUgbGVzcyAwLjAycHhcbi8vIHRvIHdvcmsgYXJvdW5kIHRoZSBsaW1pdGF0aW9ucyBvZiBgbWluLWAgYW5kIGBtYXgtYCBwcmVmaXhlcyBhbmQgdmlld3BvcnRzIHdpdGggZnJhY3Rpb25hbCB3aWR0aHMuXG4vLyBTZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL21lZGlhcXVlcmllcy00LyNtcS1taW4tbWF4XG4vLyBVc2VzIDAuMDJweCByYXRoZXIgdGhhbiAwLjAxcHggdG8gd29yayBhcm91bmQgYSBjdXJyZW50IHJvdW5kaW5nIGJ1ZyBpbiBTYWZhcmkuXG4vLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3ODI2MVxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWF4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNzY3Ljk4cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbmV4dDogYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAcmV0dXJuIGlmKCRuZXh0LCBicmVha3BvaW50LW1pbigkbmV4dCwgJGJyZWFrcG9pbnRzKSAtIC4wMiwgbnVsbCk7XG59XG5cbi8vIFJldHVybnMgYSBibGFuayBzdHJpbmcgaWYgc21hbGxlc3QgYnJlYWtwb2ludCwgb3RoZXJ3aXNlIHJldHVybnMgdGhlIG5hbWUgd2l0aCBhIGRhc2ggaW4gZnJvbnQuXG4vLyBVc2VmdWwgZm9yIG1ha2luZyByZXNwb25zaXZlIHV0aWxpdGllcy5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHhzLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCJcIiAgKFJldHVybnMgYSBibGFuayBzdHJpbmcpXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCItc21cIlxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtaW5maXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgQHJldHVybiBpZihicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKSA9PSBudWxsLCBcIlwiLCBcIi0jeyRuYW1lfVwiKTtcbn1cblxuLy8gTWVkaWEgb2YgYXQgbGVhc3QgdGhlIG1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCB3aWRlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1pbiB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgb2YgYXQgbW9zdCB0aGUgbWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIGxhcmdlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1heCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgdGhhdCBzcGFucyBtdWx0aXBsZSBicmVha3BvaW50IHdpZHRocy5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBiZXR3ZWVuIHRoZSBtaW4gYW5kIG1heCBicmVha3BvaW50c1xuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtYmV0d2VlbigkbG93ZXIsICR1cHBlciwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbG93ZXIsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCR1cHBlciwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbG93ZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCR1cHBlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuLy8gTWVkaWEgYmV0d2VlbiB0aGUgYnJlYWtwb2ludCdzIG1pbmltdW0gYW5kIG1heGltdW0gd2lkdGhzLlxuLy8gTm8gbWluaW11bSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQsIGFuZCBubyBtYXhpbXVtIGZvciB0aGUgbGFyZ2VzdCBvbmUuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgb25seSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCwgbm90IHZpZXdwb3J0cyBhbnkgd2lkZXIgb3IgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1vbmx5KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG4iXX0= */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('photosAnimation', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :exit', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, transform: 'translateY(15px)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('.project', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])('50ms', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('230ms cubic-bezier(0.4, 0.0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, transform: 'translateY(-15px)' }))
                    ]))
                ])
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortfolioListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-portfolio-list',
                templateUrl: './portfolio-list.component.html',
                styleUrls: ['./portfolio-list.component.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('photosAnimation', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :exit', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, transform: 'translateY(15px)' })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('.project', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])('50ms', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('230ms cubic-bezier(0.4, 0.0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, transform: 'translateY(-15px)' }))
                            ]))
                        ])
                    ])
                ]
            }]
    }], function () { return [{ type: _contentful_service__WEBPACK_IMPORTED_MODULE_2__["ContentfulService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] }]; }, null); })();


/***/ }),

/***/ "UhM7":
/*!***************************************!*\
  !*** ./src/app/projectfilter.pipe.ts ***!
  \***************************************/
/*! exports provided: ProjectfilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectfilterPipe", function() { return ProjectfilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


// A pipe for filtering projects on the project page
class ProjectfilterPipe {
    transform(value, filterString) {
        const resultArray = [];
        if (!filterString) {
            return value;
        }
        for (const item of value) {
            // Check for fields
            if (item.fields.typeOfWork) {
                // Filter Fields
                if (item.fields.typeOfWork.includes(filterString)) {
                    resultArray.push(item);
                }
            }
        }
        return resultArray;
    }
}
ProjectfilterPipe.ɵfac = function ProjectfilterPipe_Factory(t) { return new (t || ProjectfilterPipe)(); };
ProjectfilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "projectfilter", type: ProjectfilterPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectfilterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'projectfilter'
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _contentful_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contentful.service */ "o6/c");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-markdown */ "lR5k");
/* harmony import */ var _portfolio_list_portfolio_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./portfolio-list/portfolio-list.component */ "TcF+");
/* harmony import */ var _portfolio_detail_portfolio_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./portfolio-detail/portfolio-detail.component */ "6MTs");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home-page/home-page.component */ "F1my");
/* harmony import */ var _contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contact-page/contact-page.component */ "kGaf");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./navigation/navigation.component */ "k5x5");
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./button/button.component */ "be9G");
/* harmony import */ var _page_footer_page_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./page-footer/page-footer.component */ "LfgP");
/* harmony import */ var _projectfilter_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./projectfilter.pipe */ "UhM7");
/* harmony import */ var _filter_list_filter_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./filter-list/filter-list.component */ "514t");
/* harmony import */ var _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./privacy-policy/privacy-policy.component */ "dEEo");
/* harmony import */ var _youtube_video_embed_youtube_video_embed_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./youtube-video-embed/youtube-video-embed.component */ "T5OV");
// ./src/app/app.module.ts



// Browser Animations

// ROUTING

// SERVICES
// Contentful Import

// Markdown

// Site Components














const routes = [
    { path: '', component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_9__["HomePageComponent"] },
    { path: 'work', component: _portfolio_list_portfolio_list_component__WEBPACK_IMPORTED_MODULE_7__["PortfolioListComponent"] },
    { path: 'work/:slug', component: _portfolio_detail_portfolio_detail_component__WEBPACK_IMPORTED_MODULE_8__["PortfolioDetailComponent"] },
    { path: 'contact', component: _contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_10__["ContactPageComponent"] },
    { path: 'privacy-policy', component: _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_16__["PrivacyPolicyComponent"] },
];
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _contentful_service__WEBPACK_IMPORTED_MODULE_5__["ContentfulService"],
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                scrollPositionRestoration: 'enabled',
            }),
            ngx_markdown__WEBPACK_IMPORTED_MODULE_6__["MarkdownModule"].forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _portfolio_list_portfolio_list_component__WEBPACK_IMPORTED_MODULE_7__["PortfolioListComponent"],
        _portfolio_detail_portfolio_detail_component__WEBPACK_IMPORTED_MODULE_8__["PortfolioDetailComponent"],
        _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_9__["HomePageComponent"],
        _contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_10__["ContactPageComponent"],
        _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_11__["NavigationComponent"],
        _button_button_component__WEBPACK_IMPORTED_MODULE_12__["ButtonComponent"],
        _page_footer_page_footer_component__WEBPACK_IMPORTED_MODULE_13__["PageFooterComponent"],
        _projectfilter_pipe__WEBPACK_IMPORTED_MODULE_14__["ProjectfilterPipe"],
        _filter_list_filter_list_component__WEBPACK_IMPORTED_MODULE_15__["FilterListComponent"],
        _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_16__["PrivacyPolicyComponent"],
        _youtube_video_embed_youtube_video_embed_component__WEBPACK_IMPORTED_MODULE_17__["YoutubeVideoEmbedComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], ngx_markdown__WEBPACK_IMPORTED_MODULE_6__["MarkdownModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _portfolio_list_portfolio_list_component__WEBPACK_IMPORTED_MODULE_7__["PortfolioListComponent"],
                    _portfolio_detail_portfolio_detail_component__WEBPACK_IMPORTED_MODULE_8__["PortfolioDetailComponent"],
                    _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_9__["HomePageComponent"],
                    _contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_10__["ContactPageComponent"],
                    _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_11__["NavigationComponent"],
                    _button_button_component__WEBPACK_IMPORTED_MODULE_12__["ButtonComponent"],
                    _page_footer_page_footer_component__WEBPACK_IMPORTED_MODULE_13__["PageFooterComponent"],
                    _projectfilter_pipe__WEBPACK_IMPORTED_MODULE_14__["ProjectfilterPipe"],
                    _filter_list_filter_list_component__WEBPACK_IMPORTED_MODULE_15__["FilterListComponent"],
                    _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_16__["PrivacyPolicyComponent"],
                    _youtube_video_embed_youtube_video_embed_component__WEBPACK_IMPORTED_MODULE_17__["YoutubeVideoEmbedComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                        scrollPositionRestoration: 'enabled',
                    }),
                    ngx_markdown__WEBPACK_IMPORTED_MODULE_6__["MarkdownModule"].forRoot(),
                ],
                providers: [
                    _contentful_service__WEBPACK_IMPORTED_MODULE_5__["ContentfulService"],
                ],
                bootstrap: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "be9G":
/*!********************************************!*\
  !*** ./src/app/button/button.component.ts ***!
  \********************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class ButtonComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
ButtonComponent.ɵfac = function ButtonComponent_Factory(t) { return new (t || ButtonComponent)(); };
ButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ButtonComponent, selectors: [["app-button"]], inputs: { cta: "cta", btnStyle: "btnStyle", link: "link" }, decls: 2, vars: 5, consts: [[3, "routerLink"]], template: function ButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("button ", ctx.btnStyle, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", ctx.link);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.cta);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".button[_ngcontent-%COMP%] {\n  background: #e90039;\n  border-radius: 100px;\n  color: #fff;\n  font-weight: bold;\n  margin-right: 24px;\n  padding: 20px 30px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n}\n\n.button[_ngcontent-%COMP%]:hover {\n  background: #d00033;\n}\n\n.button.white[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #ccc;\n}\n\n.button.outlined[_ngcontent-%COMP%] {\n  border: 1px solid #000;\n  color: #000;\n}\n\n.button.outlined[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.05);\n}\n\n.button.outlined[_ngcontent-%COMP%]:active {\n  background: rgba(0, 0, 0, 0.12);\n}\n\n.button.black[_ngcontent-%COMP%] {\n  background: #000;\n}\n\n.button.black[_ngcontent-%COMP%]:hover {\n  background: #e90039;\n}\n\n.button.large[_ngcontent-%COMP%] {\n  margin-right: 12px;\n  padding: 25px 35px;\n}\n\n.button.full-width[_ngcontent-%COMP%] {\n  display: block;\n  margin-right: 0;\n}\n\n.button.small[_ngcontent-%COMP%] {\n  margin-right: 36px;\n  padding: 10px 20px;\n}\n\n.button.text[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #000;\n}\n\n.button.text[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.05);\n}\n\n.button.text[_ngcontent-%COMP%]:active {\n  background: rgba(0, 0, 0, 0.12);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuc2NzcyIsInNyYy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLG1CQ0txQjtFREpyQixvQkFBb0I7RUFDcEIsV0NPVTtFRE5WLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIscUJBQXFCO0FBRHZCOztBQVJBO0VBWUksbUJBQXFDO0FBQXpDOztBQVpBO0VBZ0JJLGdCQ05RO0VET1Isc0JBQXNCO0FBQTFCOztBQWpCQTtFQXFCSSxzQkNaUTtFRGFSLFdDYlE7QURhWjs7QUF0QkE7RUF5Qk0sK0JDaEJNO0FEaUJaOztBQTFCQTtFQTZCTSwrQkNwQk07QURxQlo7O0FBOUJBO0VBa0NJLGdCQ3pCUTtBRHlCWjs7QUFsQ0E7RUFxQ00sbUJDL0JpQjtBRGdDdkI7O0FBdENBO0VBMENJLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFBdEI7O0FBM0NBO0VBK0NJLGNBQWM7RUFDZCxlQUFlO0FBQW5COztBQWhEQTtFQW9ESSxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQXRCOztBQXJEQTtFQXlESSx1QkFBdUI7RUFDdkIsV0NqRFE7QURpRFo7O0FBMURBO0VBNkRNLCtCQ3BETTtBRHFEWjs7QUE5REE7RUFpRU0sK0JDeERNO0FEeURaIiwiZmlsZSI6InNyYy9hcHAvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ35zcmMvdmFyaWFibGVzJztcblxuLmJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICRicmFuZC1wcmltYXJ5O1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgY29sb3I6ICR3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1yaWdodDogMjRweDtcbiAgcGFkZGluZzogMjBweCAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IGRhcmtlbigkYnJhbmQtcHJpbWFyeSwgNSk7XG4gIH1cblxuICAmLndoaXRlIHtcbiAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgfVxuXG4gICYub3V0bGluZWQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRibGFjaztcbiAgICBjb2xvcjogJGJsYWNrO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiBsb3ctZW1waGFzaXMoJGJsYWNrKTtcbiAgICB9XG5cbiAgICAmOmFjdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kOiBtZWRpdW0tZW1waGFzaXMoJGJsYWNrKTtcbiAgICB9XG4gIH1cblxuICAmLmJsYWNrIHtcbiAgICBiYWNrZ3JvdW5kOiAkYmxhY2s7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICRicmFuZC1wcmltYXJ5O1xuICAgIH1cbiAgfVxuXG4gICYubGFyZ2Uge1xuICAgIG1hcmdpbi1yaWdodDogMTJweDtcbiAgICBwYWRkaW5nOiAyNXB4IDM1cHg7XG4gIH1cblxuICAmLmZ1bGwtd2lkdGgge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgfVxuXG4gICYuc21hbGwge1xuICAgIG1hcmdpbi1yaWdodDogMzZweDtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIH1cblxuICAmLnRleHQge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiAkYmxhY2s7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IGxvdy1lbXBoYXNpcygkYmxhY2spO1xuICAgIH1cblxuICAgICY6YWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQ6IG1lZGl1bS1lbXBoYXNpcygkYmxhY2spO1xuICAgIH1cbiAgfVxufVxuIiwiLy8gSW1wb3J0IEJvb3RzdHJhcCBCcmVha3BvaW50cyBmb3IgR2xvYmFsIFVzZVxuQGltcG9ydCAnLi4vc3JjL3N0eWxlcy9ncmlkL2JyZWFrcG9pbnRzJztcblxuLy9cbi8vLy8gU3R5bGluZyBWYXJpYWJsZXNcbi8vXG5cbi8vIEdsb2JhbCBTdHlsaW5nIFZhcmlhYmxlc1xuJGJyYW5kLXByaW1hcnk6ICNlOTAwMzk7XG5cbi8vIENvbG9yIE5ldXRyYWxzXG4kYmxhY2s6ICMwMDA7XG4kd2hpdGU6ICNmZmY7XG4kZ3JheTogIzc4Nzc4MDtcbiRsaWdodC1ncmF5OiAjOGQ4ZTkzO1xuJGJvZHktZ3JheTogIzU3NTg2NTtcblxuJGJvcmRlci1jb2xvcjogI2M5YzljOTtcblxuLy8gTGF5b3V0IHZhcmlhYmxlcyBmb3IgY29uc2lzdGVuY3lcbiRnbG9iYWwtcGFkZGluZzogMzBweDtcbiRnbG9iYWwtbWFyZ2luOiAzMHB4O1xuJGdsb2JhbC1yYWRpdXM6IDVweDtcblxuLy8gRWFzZSBUcmFuc2l0aW9uXG4kZ2xvYmFsLWVhc2U6IGN1YmljLWJlemllciguNCwgMCwgLjIsIDEpO1xuXG4vLyBTdWJ0bGUgaW5zZXQgYm9yZGVyXG5AbWl4aW4gaW1hZ2UtYm9yZGVyIHtcbiAgb3V0bGluZTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjA1KTtcbiAgb3V0bGluZS1vZmZzZXQ6IC0xcHg7XG59XG5cbi8vIFR5cGVcbiRnbG9iYWwtZm9udC1zaXplOiAxNHB4O1xuXG4vL1xuLy8vLyBIZWxwZXIgRnVuY3Rpb25zXG4vL1xuXG4vLyBDYWxjdWxhdGUgTWVkaXVtIEVtcGhhc2lzIENvbG9yXG5AZnVuY3Rpb24gbWVkaXVtLWVtcGhhc2lzKCRpbnB1dC1jb2xvcikge1xuICBAcmV0dXJuIHJnYmEoJGlucHV0LWNvbG9yLCAuMTIpO1xufVxuXG4vLyBDYWxjdWxhdGUgTG93IEVtcGhhc2lzIENvbG9yXG5AZnVuY3Rpb24gbG93LWVtcGhhc2lzKCRpbnB1dC1jb2xvcikge1xuICBAcmV0dXJuIHJnYmEoJGlucHV0LWNvbG9yLCAuMDUpO1xufVxuXG4vLyBDYWxjdWxhdGUgTGluZSBIZWlnaHQgZm9yIHRleHRcbkBmdW5jdGlvbiBsaW5lLWhlaWdodCgkaW5wdXQtc2l6ZSkge1xuICBAcmV0dXJuICRpbnB1dC1zaXplICogMS41O1xufVxuXG4vLyBDYWxjdWxhdGUgTWFyZ2luLUJvdHRvbSBmb3IgVGV4dFxuQGZ1bmN0aW9uIG1hcmdpbi1ib3R0b20oJGlucHV0LXNpemUpIHtcbiAgQHJldHVybiAkaW5wdXQtc2l6ZSAqIDEuMjU7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-button',
                templateUrl: './button.component.html',
                styleUrls: ['./button.component.scss']
            }]
    }], function () { return []; }, { cta: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], btnStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], link: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "dEEo":
/*!************************************************************!*\
  !*** ./src/app/privacy-policy/privacy-policy.component.ts ***!
  \************************************************************/
/*! exports provided: PrivacyPolicyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyPolicyComponent", function() { return PrivacyPolicyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PrivacyPolicyComponent {
    constructor() { }
    ngOnInit() {
    }
}
PrivacyPolicyComponent.ɵfac = function PrivacyPolicyComponent_Factory(t) { return new (t || PrivacyPolicyComponent)(); };
PrivacyPolicyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PrivacyPolicyComponent, selectors: [["app-privacy-policy"]], decls: 93, vars: 0, consts: [[1, "hero-wrap"], [1, "hero"], [1, "row"], ["href", "https://unity3d.com/legal/privacy-policy", "target", "_blank", "rel", "noopener noreferrer"], ["href", "https://privacypolicytemplate.net", "target", "_blank", "rel", "noopener noreferrer"], ["href", "https://app-privacy-policy-generator.nisrulz.com/", "target", "_blank", "rel", "noopener noreferrer"]], template: function PrivacyPolicyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\"JJ McReb's Excellent Mystery\" - App Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Joseph Eborall built the JJ McReb's Excellent Mystery app as a Free app. This SERVICE is provided by Joseph Eborall at no cost and is intended for use as is. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " This page is used to inform visitors regarding my policies with the collection, use, and disclosure of Personal Information if anyone decided to use my Service. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " If you choose to use my Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that I collect is used for providing and improving the Service. I will not use or share your information with anyone except as described in this Privacy Policy. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at JJ McReb's Excellent Mystery unless otherwise defined in this Privacy Policy. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Information Collection and Use");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " For a better experience, while using our Service, I may require you to provide us with certain personally identifiable information, including but not limited to None. The information that I request will be retained on your device and is not collected by me in any way. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " The app does use third party services that may collect information used to identify you. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Link to privacy policy of third party service providers used by the app ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Unity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Log Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " I want to inform you that whenever you use my Service, in a case of an error in the app I collect data and information (through third party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (\u201CIP\u201D) address, device name, operating system version, the configuration of the app when utilizing my Service, the time and date of your use of the Service, and other statistics. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Cookies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " This Service does not use these \u201Ccookies\u201D explicitly. However, the app may use third party code and libraries that use \u201Ccookies\u201D to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Service Providers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " I may employ third-party companies and individuals due to the following reasons: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "To facilitate our Service;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "To provide the Service on our behalf;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "To perform Service-related services; or");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "To assist us in analyzing how our Service is used.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " I want to inform users of this Service that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Security");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " I value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and I cannot guarantee its absolute security. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Links to Other Sites");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by me. Therefore, I strongly advise you to review the Privacy Policy of these websites. I have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Children\u2019s Privacy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " These Services do not address anyone under the age of 13. I do not knowingly collect personally identifiable information from children under 13 years of age. In the case I discover that a child under 13 has provided me with personal information, I immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact me so that I will be able to do necessary actions. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Changes to This Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " I may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. I will notify you of any changes by posting the new Privacy Policy on this page. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "This policy is effective as of 2021-10-17");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " If you have any questions or suggestions about my Privacy Policy, do not hesitate to contact me at joseph@.eborall.net. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " This privacy policy page was created at ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "privacypolicytemplate.net ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "and modified/generated by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "App Privacy Policy Generator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByaXZhY3ktcG9saWN5L3ByaXZhY3ktcG9saWN5LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrivacyPolicyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-privacy-policy',
                templateUrl: './privacy-policy.component.html',
                styleUrls: ['./privacy-policy.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "k5x5":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = function () { return ["/work"]; };
const _c1 = function () { return [""]; };
const _c2 = function () { return ["/contact"]; };
class NavigationComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavigationComponent.ɵfac = function NavigationComponent_Factory(t) { return new (t || NavigationComponent)(); };
NavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavigationComponent, selectors: [["app-navigation"]], decls: 12, vars: 6, consts: [[1, "layout-underline"], ["routerLinkActive", "active", 3, "routerLink"], [1, "logo", 3, "routerLink"], ["src", "../../assets/img/eborall-logo.svg", "alt", "Joseph Eborall", "height", "65"]], template: function NavigationComponent_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: ["nav[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  align-items: center;\n  padding: 30px;\n}\n\nnav[_ngcontent-%COMP%]   .toggle[_ngcontent-%COMP%] {\n  display: none;\n}\n\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #8d8e93;\n  font-weight: normal;\n  font-size: 14px;\n  transition: all 150ms ease;\n  text-decoration: none;\n  text-transform: uppercase;\n}\n\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #000;\n  font-weight: bold;\n}\n\nnav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  color: #000;\n  font-weight: bold;\n  padding-bottom: 5px;\n  border-bottom: 2px solid #e90039;\n}\n\nnav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-decoration: none;\n  transition: 230ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n\nnav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n\nnav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  list-style: none;\n  justify-content: space-between;\n  flex-direction: row;\n  align-items: center;\n}\n\nnav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 0 30px;\n}\n\n.layout-underline[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #c9c9c9;\n  margin-bottom: 30px;\n}\n\n@media (max-width: 575.98px) {\n  .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 45px;\n  }\n  nav[_ngcontent-%COMP%] {\n    padding: 15px 0;\n  }\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    padding-left: 0;\n    width: 100%;\n  }\n  nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL3ZhcmlhYmxlcy5zY3NzIiwic3JjL3N0eWxlcy9ncmlkL21peGlucy9fYnJlYWtwb2ludHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixhQ1ltQjtBRGRyQjs7QUFIQTtFQVFJLGFBQWE7QUFEakI7O0FBUEE7RUFZSSxjQ0RnQjtFREVoQixtQkFBbUI7RUFDbkIsZUNpQm1CO0VEaEJuQiwwQkFBMEI7RUFDMUIscUJBQXFCO0VBQ3JCLHlCQUF5QjtBQUQ3Qjs7QUFoQkE7RUFvQk0sV0NaTTtFRGFOLGlCQUFpQjtBQUF2Qjs7QUFyQkE7RUF5Qk0sV0NqQk07RURrQk4saUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixnQ0N2QmlCO0FEdUJ2Qjs7QUE1QkE7RUFpQ0kscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQiw4Q0Nib0M7QURZeEM7O0FBbENBO0VBc0NNLHNCQUFzQjtBQUE1Qjs7QUF0Q0E7RUEwQ00sc0JBQXNCO0FBQTVCOztBQTFDQTtFQStDSSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBRHZCOztBQWxEQTtFQXVESSxlQ3RDaUI7QURxQ3JCOztBQUtBO0VBQ0UsZ0NDOUNvQjtFRCtDcEIsbUJDM0NrQjtBRHlDcEI7O0FFV0k7RUZKRjtJQUVJLFlBQVk7RUFKaEI7RUFRQTtJQUNFLGVBQWU7RUFOakI7RUFLQTtJQUlJLGVBQWU7SUFDZixXQUFXO0VBTmY7RUFDQTtJQVNJLFVBQVU7RUFQZDtFQUZBO0lBWU0sZUFBZTtFQVByQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnfnNyYy92YXJpYWJsZXMnO1xuQGltcG9ydCAnfnNyYy9zdHlsZXMvZ3JpZC9icmVha3BvaW50cyc7XG5cbm5hdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6ICRnbG9iYWwtcGFkZGluZztcblxuICAudG9nZ2xlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgYSB7XG4gICAgY29sb3I6ICRsaWdodC1ncmF5O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAkZ2xvYmFsLWZvbnQtc2l6ZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblxuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6ICRibGFjaztcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cblxuICAgICYuYWN0aXZlIHtcbiAgICAgIGNvbG9yOiAkYmxhY2s7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJGJyYW5kLXByaW1hcnk7XG4gICAgfVxuICB9XG5cbiAgLmxvZ28ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogMjMwbXMgJGdsb2JhbC1lYXNlO1xuXG4gICAgaW1nIHtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICAgIH1cbiAgfVxuXG4gIHVsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIGxpIHtcbiAgICBwYWRkaW5nOiAwICRnbG9iYWwtcGFkZGluZztcbiAgfVxufVxuXG4ubGF5b3V0LXVuZGVybGluZSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xuICBtYXJnaW4tYm90dG9tOiAkZ2xvYmFsLW1hcmdpbjtcbn1cblxuLy8gTmF2IFBhZGRpbmcgZm9yIFNtYWxsIFNjcmVlbnNcbkBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bih4cykge1xuICAubG9nbyB7XG4gICAgaW1nIHtcbiAgICAgIGhlaWdodDogNDVweDtcbiAgICB9XG4gIH1cblxuICBuYXYge1xuICAgIHBhZGRpbmc6IDE1cHggMDtcblxuICAgIHVsIHtcbiAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIGxpIHtcbiAgICAgIHBhZGRpbmc6IDA7XG5cbiAgICAgIGEge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIvLyBJbXBvcnQgQm9vdHN0cmFwIEJyZWFrcG9pbnRzIGZvciBHbG9iYWwgVXNlXG5AaW1wb3J0ICcuLi9zcmMvc3R5bGVzL2dyaWQvYnJlYWtwb2ludHMnO1xuXG4vL1xuLy8vLyBTdHlsaW5nIFZhcmlhYmxlc1xuLy9cblxuLy8gR2xvYmFsIFN0eWxpbmcgVmFyaWFibGVzXG4kYnJhbmQtcHJpbWFyeTogI2U5MDAzOTtcblxuLy8gQ29sb3IgTmV1dHJhbHNcbiRibGFjazogIzAwMDtcbiR3aGl0ZTogI2ZmZjtcbiRncmF5OiAjNzg3NzgwO1xuJGxpZ2h0LWdyYXk6ICM4ZDhlOTM7XG4kYm9keS1ncmF5OiAjNTc1ODY1O1xuXG4kYm9yZGVyLWNvbG9yOiAjYzljOWM5O1xuXG4vLyBMYXlvdXQgdmFyaWFibGVzIGZvciBjb25zaXN0ZW5jeVxuJGdsb2JhbC1wYWRkaW5nOiAzMHB4O1xuJGdsb2JhbC1tYXJnaW46IDMwcHg7XG4kZ2xvYmFsLXJhZGl1czogNXB4O1xuXG4vLyBFYXNlIFRyYW5zaXRpb25cbiRnbG9iYWwtZWFzZTogY3ViaWMtYmV6aWVyKC40LCAwLCAuMiwgMSk7XG5cbi8vIFN1YnRsZSBpbnNldCBib3JkZXJcbkBtaXhpbiBpbWFnZS1ib3JkZXIge1xuICBvdXRsaW5lOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMDUpO1xuICBvdXRsaW5lLW9mZnNldDogLTFweDtcbn1cblxuLy8gVHlwZVxuJGdsb2JhbC1mb250LXNpemU6IDE0cHg7XG5cbi8vXG4vLy8vIEhlbHBlciBGdW5jdGlvbnNcbi8vXG5cbi8vIENhbGN1bGF0ZSBNZWRpdW0gRW1waGFzaXMgQ29sb3JcbkBmdW5jdGlvbiBtZWRpdW0tZW1waGFzaXMoJGlucHV0LWNvbG9yKSB7XG4gIEByZXR1cm4gcmdiYSgkaW5wdXQtY29sb3IsIC4xMik7XG59XG5cbi8vIENhbGN1bGF0ZSBMb3cgRW1waGFzaXMgQ29sb3JcbkBmdW5jdGlvbiBsb3ctZW1waGFzaXMoJGlucHV0LWNvbG9yKSB7XG4gIEByZXR1cm4gcmdiYSgkaW5wdXQtY29sb3IsIC4wNSk7XG59XG5cbi8vIENhbGN1bGF0ZSBMaW5lIEhlaWdodCBmb3IgdGV4dFxuQGZ1bmN0aW9uIGxpbmUtaGVpZ2h0KCRpbnB1dC1zaXplKSB7XG4gIEByZXR1cm4gJGlucHV0LXNpemUgKiAxLjU7XG59XG5cbi8vIENhbGN1bGF0ZSBNYXJnaW4tQm90dG9tIGZvciBUZXh0XG5AZnVuY3Rpb24gbWFyZ2luLWJvdHRvbSgkaW5wdXQtc2l6ZSkge1xuICBAcmV0dXJuICRpbnB1dC1zaXplICogMS4yNTtcbn1cbiIsIi8vIEJyZWFrcG9pbnQgdmlld3BvcnQgc2l6ZXMgYW5kIG1lZGlhIHF1ZXJpZXMuXG4vL1xuLy8gQnJlYWtwb2ludHMgYXJlIGRlZmluZWQgYXMgYSBtYXAgb2YgKG5hbWU6IG1pbmltdW0gd2lkdGgpLCBvcmRlciBmcm9tIHNtYWxsIHRvIGxhcmdlOlxuLy9cbi8vICAgICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweClcbi8vXG4vLyBUaGUgbWFwIGRlZmluZWQgaW4gdGhlIGAkZ3JpZC1icmVha3BvaW50c2AgZ2xvYmFsIHZhcmlhYmxlIGlzIHVzZWQgYXMgdGhlIGAkYnJlYWtwb2ludHNgIGFyZ3VtZW50IGJ5IGRlZmF1bHQuXG5cbi8vIE5hbWUgb2YgdGhlIG5leHQgYnJlYWtwb2ludCwgb3IgbnVsbCBmb3IgdGhlIGxhc3QgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20pXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgJGJyZWFrcG9pbnQtbmFtZXM6ICh4cyBzbSBtZCBsZyB4bCkpXG4vLyAgICBtZFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cywgJGJyZWFrcG9pbnQtbmFtZXM6IG1hcC1rZXlzKCRicmVha3BvaW50cykpIHtcbiAgJG46IGluZGV4KCRicmVha3BvaW50LW5hbWVzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG4gIT0gbnVsbCBhbmQgJG4gPCBsZW5ndGgoJGJyZWFrcG9pbnQtbmFtZXMpLCBudGgoJGJyZWFrcG9pbnQtbmFtZXMsICRuICsgMSksIG51bGwpO1xufVxuXG4vLyBNaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBzbWFsbGVzdCAoZmlyc3QpIGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1taW4oc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA1NzZweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG1pbiAhPSAwLCAkbWluLCBudWxsKTtcbn1cblxuLy8gTWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgbGFyZ2VzdCAobGFzdCkgYnJlYWtwb2ludC5cbi8vIFRoZSBtYXhpbXVtIHZhbHVlIGlzIGNhbGN1bGF0ZWQgYXMgdGhlIG1pbmltdW0gb2YgdGhlIG5leHQgb25lIGxlc3MgMC4wMnB4XG4vLyB0byB3b3JrIGFyb3VuZCB0aGUgbGltaXRhdGlvbnMgb2YgYG1pbi1gIGFuZCBgbWF4LWAgcHJlZml4ZXMgYW5kIHZpZXdwb3J0cyB3aXRoIGZyYWN0aW9uYWwgd2lkdGhzLlxuLy8gU2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9tZWRpYXF1ZXJpZXMtNC8jbXEtbWluLW1heFxuLy8gVXNlcyAwLjAycHggcmF0aGVyIHRoYW4gMC4wMXB4IHRvIHdvcmsgYXJvdW5kIGEgY3VycmVudCByb3VuZGluZyBidWcgaW4gU2FmYXJpLlxuLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1heChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDc2Ny45OHB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG5leHQ6IGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQHJldHVybiBpZigkbmV4dCwgYnJlYWtwb2ludC1taW4oJG5leHQsICRicmVha3BvaW50cykgLSAuMDIsIG51bGwpO1xufVxuXG4vLyBSZXR1cm5zIGEgYmxhbmsgc3RyaW5nIGlmIHNtYWxsZXN0IGJyZWFrcG9pbnQsIG90aGVyd2lzZSByZXR1cm5zIHRoZSBuYW1lIHdpdGggYSBkYXNoIGluIGZyb250LlxuLy8gVXNlZnVsIGZvciBtYWtpbmcgcmVzcG9uc2l2ZSB1dGlsaXRpZXMuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeCh4cywgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiXCIgIChSZXR1cm5zIGEgYmxhbmsgc3RyaW5nKVxuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiLXNtXCJcbkBmdW5jdGlvbiBicmVha3BvaW50LWluZml4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gIEByZXR1cm4gaWYoYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cykgPT0gbnVsbCwgXCJcIiwgXCItI3skbmFtZX1cIik7XG59XG5cbi8vIE1lZGlhIG9mIGF0IGxlYXN0IHRoZSBtaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgd2lkZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtaW4ge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIG9mIGF0IG1vc3QgdGhlIG1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBsYXJnZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtYXgge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIHRoYXQgc3BhbnMgbXVsdGlwbGUgYnJlYWtwb2ludCB3aWR0aHMuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgYmV0d2VlbiB0aGUgbWluIGFuZCBtYXggYnJlYWtwb2ludHNcbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWJldHdlZW4oJGxvd2VyLCAkdXBwZXIsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJGxvd2VyLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkdXBwZXIsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGxvd2VyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkdXBwZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbi8vIE1lZGlhIGJldHdlZW4gdGhlIGJyZWFrcG9pbnQncyBtaW5pbXVtIGFuZCBtYXhpbXVtIHdpZHRocy5cbi8vIE5vIG1pbmltdW0gZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LCBhbmQgbm8gbWF4aW11bSBmb3IgdGhlIGxhcmdlc3Qgb25lLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IG9ubHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQsIG5vdCB2aWV3cG9ydHMgYW55IHdpZGVyIG9yIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtb25seSgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navigation',
                templateUrl: './navigation.component.html',
                styleUrls: ['./navigation.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "kGaf":
/*!********************************************************!*\
  !*** ./src/app/contact-page/contact-page.component.ts ***!
  \********************************************************/
/*! exports provided: ContactPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageComponent", function() { return ContactPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../button/button.component */ "be9G");




class ContactPageComponent {
    constructor(titleService) {
        this.titleService = titleService;
        // Set Page Title
        this.titleService.setTitle('Contact Me | Joseph Eborall');
    }
}
ContactPageComponent.ɵfac = function ContactPageComponent_Factory(t) { return new (t || ContactPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"])); };
ContactPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactPageComponent, selectors: [["app-contact-page"]], decls: 19, vars: 0, consts: [["autocomplete", "on", "method", "post", "action", "https://formspree.io/josepheborall@gmail.com"], [1, "row"], [1, "col-lg-6"], ["type", "text", "name", "name", "placeholder", "Name"], ["type", "phone", "name", "phone-number", "placeholder", "(XXX) XXX-XXXX"], [1, "col-lg-12"], ["type", "email", "name", "email", "placeholder", "Email Address"], ["name", "message", "type", "text", "placeholder", "Message...", 2, "min-width", "100%", "min-height", "150px"], ["cta", "Submit", "link", "work", "btnStyle", "black", "type", "submit"]], template: function ContactPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Every project is unique. Tell me a bit about yours and see how much time and energy I can save you.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "textarea", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_button_button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"]], styles: ["input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  padding: 12px 16px 14px;\n  -webkit-font-smoothing: antialiased;\n  font-size: 1rem;\n  letter-spacing: .009375em;\n  text-decoration: inherit;\n  text-transform: inherit;\n  align-self: flex-end;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1) 0s;\n  border-top: none;\n  border-right: none;\n  border-left: none;\n  border-bottom: 1px solid;\n  margin-bottom: 30px;\n  display: flex;\n  border-radius: 0;\n}\n\ninput[_ngcontent-%COMP%]:focus-within, textarea[_ngcontent-%COMP%]:focus-within {\n  border-width: 5px;\n  font-weight: bold;\n  outline: solid #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC1wYWdlL2NvbnRhY3QtcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHVCQUF1QjtFQUN2QixtQ0FBbUM7RUFDbkMsZUFBZTtFQUNmLHlCQUF5QjtFQUN6Qix3QkFBd0I7RUFDeEIsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLFlBQVk7RUFDWix5REFBdUQ7RUFDdkQsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsd0JBQXdCO0VBQ3hCLG1CQ0drQjtFREZsQixhQUFhO0VBQ2IsZ0JBQWdCO0FBRGxCOztBQWpCQTtFQXFCSSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLG1CQ2RRO0FEY1oiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0LXBhZ2UvY29udGFjdC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vdmFyaWFibGVzJztcblxuaW5wdXQsIHRleHRhcmVhIHtcbiAgcGFkZGluZzogMTJweCAxNnB4IDE0cHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICBmb250LXNpemU6IDFyZW07XG4gIGxldHRlci1zcGFjaW5nOiAuMDA5Mzc1ZW07XG4gIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcbiAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDE1MG1zIGN1YmljLWJlemllciguNCwgMCwgLjIsIDEpIDBzO1xuICBib3JkZXItdG9wOiBub25lO1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XG4gIG1hcmdpbi1ib3R0b206ICRnbG9iYWwtbWFyZ2luO1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItcmFkaXVzOiAwO1xuXG4gICY6Zm9jdXMtd2l0aGluIHtcbiAgICBib3JkZXItd2lkdGg6IDVweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBvdXRsaW5lOiBzb2xpZCAkYmxhY2s7XG4gIH1cbn1cbiIsIi8vIEltcG9ydCBCb290c3RyYXAgQnJlYWtwb2ludHMgZm9yIEdsb2JhbCBVc2VcbkBpbXBvcnQgJy4uL3NyYy9zdHlsZXMvZ3JpZC9icmVha3BvaW50cyc7XG5cbi8vXG4vLy8vIFN0eWxpbmcgVmFyaWFibGVzXG4vL1xuXG4vLyBHbG9iYWwgU3R5bGluZyBWYXJpYWJsZXNcbiRicmFuZC1wcmltYXJ5OiAjZTkwMDM5O1xuXG4vLyBDb2xvciBOZXV0cmFsc1xuJGJsYWNrOiAjMDAwO1xuJHdoaXRlOiAjZmZmO1xuJGdyYXk6ICM3ODc3ODA7XG4kbGlnaHQtZ3JheTogIzhkOGU5MztcbiRib2R5LWdyYXk6ICM1NzU4NjU7XG5cbiRib3JkZXItY29sb3I6ICNjOWM5Yzk7XG5cbi8vIExheW91dCB2YXJpYWJsZXMgZm9yIGNvbnNpc3RlbmN5XG4kZ2xvYmFsLXBhZGRpbmc6IDMwcHg7XG4kZ2xvYmFsLW1hcmdpbjogMzBweDtcbiRnbG9iYWwtcmFkaXVzOiA1cHg7XG5cbi8vIEVhc2UgVHJhbnNpdGlvblxuJGdsb2JhbC1lYXNlOiBjdWJpYy1iZXppZXIoLjQsIDAsIC4yLCAxKTtcblxuLy8gU3VidGxlIGluc2V0IGJvcmRlclxuQG1peGluIGltYWdlLWJvcmRlciB7XG4gIG91dGxpbmU6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4wNSk7XG4gIG91dGxpbmUtb2Zmc2V0OiAtMXB4O1xufVxuXG4vLyBUeXBlXG4kZ2xvYmFsLWZvbnQtc2l6ZTogMTRweDtcblxuLy9cbi8vLy8gSGVscGVyIEZ1bmN0aW9uc1xuLy9cblxuLy8gQ2FsY3VsYXRlIE1lZGl1bSBFbXBoYXNpcyBDb2xvclxuQGZ1bmN0aW9uIG1lZGl1bS1lbXBoYXNpcygkaW5wdXQtY29sb3IpIHtcbiAgQHJldHVybiByZ2JhKCRpbnB1dC1jb2xvciwgLjEyKTtcbn1cblxuLy8gQ2FsY3VsYXRlIExvdyBFbXBoYXNpcyBDb2xvclxuQGZ1bmN0aW9uIGxvdy1lbXBoYXNpcygkaW5wdXQtY29sb3IpIHtcbiAgQHJldHVybiByZ2JhKCRpbnB1dC1jb2xvciwgLjA1KTtcbn1cblxuLy8gQ2FsY3VsYXRlIExpbmUgSGVpZ2h0IGZvciB0ZXh0XG5AZnVuY3Rpb24gbGluZS1oZWlnaHQoJGlucHV0LXNpemUpIHtcbiAgQHJldHVybiAkaW5wdXQtc2l6ZSAqIDEuNTtcbn1cblxuLy8gQ2FsY3VsYXRlIE1hcmdpbi1Cb3R0b20gZm9yIFRleHRcbkBmdW5jdGlvbiBtYXJnaW4tYm90dG9tKCRpbnB1dC1zaXplKSB7XG4gIEByZXR1cm4gJGlucHV0LXNpemUgKiAxLjI1O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact-page',
                templateUrl: './contact-page.component.html',
                styleUrls: ['./contact-page.component.scss']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] }]; }, null); })();


/***/ }),

/***/ "o6/c":
/*!***************************************!*\
  !*** ./src/app/contentful.service.ts ***!
  \***************************************/
/*! exports provided: ContentfulService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentfulService", function() { return ContentfulService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! contentful */ "VjyN");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "AytR");




// A service for getting posts from Contentful
// Contentful Config from Env
const CONFIG = {
    space: _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].contentful.spaceId,
    accessToken: _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].contentful.token,
    contentTypeIds: {
        work: 'work',
        blog: 'blog'
    }
};
class ContentfulService {
    constructor() {
        this.cdaClient = Object(contentful__WEBPACK_IMPORTED_MODULE_1__["createClient"])({
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
        return this.getProjects({ 'fields.slug': slug }).then(items => items[0]);
    }
}
ContentfulService.ɵfac = function ContentfulService_Factory(t) { return new (t || ContentfulService)(); };
ContentfulService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ContentfulService, factory: ContentfulService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentfulService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map