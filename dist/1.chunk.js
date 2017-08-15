webpackJsonp([1],{

/***/ "../../../../../src/app/lazy-load/options/options.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OptionsComponent; });

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OptionsComponent = (function () {
    function OptionsComponent() {
        this.title = 'Options';
    }
    return OptionsComponent;
}());
OptionsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        template: "\n    <div style=\"width: 300px; padding: 30px\">\n      <h2>{{ title }}</h2>\n      <h3>Some text</h3>\n      <ul>\n        <li>Lorem ipsum</li>\n        <li>sit amet</li>\n        <li>Cum commodo</li>\n      </ul>\n    </div>\n    \n  "
    })
], OptionsComponent);

//# sourceMappingURL=options.component.js.map

/***/ }),

/***/ "../../../../../src/app/lazy-load/options/options.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__options_component__ = __webpack_require__("../../../../../src/app/lazy-load/options/options.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsModule", function() { return OptionsModule; });

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var optionRoute = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__options_component__["a" /* OptionsComponent */] }
];
var OptionsModule = (function () {
    function OptionsModule() {
    }
    return OptionsModule;
}());
OptionsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__options_component__["a" /* OptionsComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(optionRoute),
        ],
    })
], OptionsModule);

//# sourceMappingURL=options.module.js.map

/***/ })

});
//# sourceMappingURL=1.chunk.js.map