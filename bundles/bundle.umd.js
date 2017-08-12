(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core'], factory) :
	(factory((global['angular-pipes'] = {}),global._angular_core));
}(this, (function (exports,_angular_core) { 'use strict';

function isString(value) {
    return typeof value === 'string';
}
function upperFirst(value) {
    return value.slice(0, 1).toUpperCase() + value.slice(1);
}
var CapitalizePipe = (function () {
    function CapitalizePipe() {
    }
    CapitalizePipe.prototype.transform = function (input, all) {
        if (all === void 0) { all = false; }
        if (!isString(input)) {
            return input;
        }
        if (!all) {
            return upperFirst(input.toLowerCase());
        }
        else {
            return input.toLowerCase()
                .split(' ')
                .map(function (value) { return upperFirst(value); })
                .join(' ');
        }
    };
    CapitalizePipe.decorators = [
        { type: _angular_core.Pipe, args: [{
                    name: 'capitalize'
                },] },
    ];
    /** @nocollapse */
    CapitalizePipe.ctorParameters = function () { return []; };
    return CapitalizePipe;
}());

var NgCapitalizeModule = (function () {
    function NgCapitalizeModule() {
    }
    NgCapitalizeModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    declarations: [
                        CapitalizePipe
                    ],
                    exports: [
                        CapitalizePipe
                    ]
                },] },
    ];
    /** @nocollapse */
    NgCapitalizeModule.ctorParameters = function () { return []; };
    return NgCapitalizeModule;
}());

var NgPipeModule = (function () {
    function NgPipeModule() {
    }
    NgPipeModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    exports: [
                        NgCapitalizeModule
                    ]
                },] },
    ];
    /** @nocollapse */
    NgPipeModule.ctorParameters = function () { return []; };
    return NgPipeModule;
}());

exports.NgPipeModule = NgPipeModule;
exports.NgCapitalizeModule = NgCapitalizeModule;
exports.isString = isString;
exports.upperFirst = upperFirst;
exports.CapitalizePipe = CapitalizePipe;

Object.defineProperty(exports, '__esModule', { value: true });

})));
