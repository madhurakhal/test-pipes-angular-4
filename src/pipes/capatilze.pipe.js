"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
function isString(value) {
    return typeof value === 'string';
}
exports.isString = isString;
function upperFirst(value) {
    return value.slice(0, 1).toUpperCase() + value.slice(1);
}
exports.upperFirst = upperFirst;
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
        { type: core_1.Pipe, args: [{
                    name: 'capitalize'
                },] },
    ];
    /** @nocollapse */
    CapitalizePipe.ctorParameters = function () { return []; };
    return CapitalizePipe;
}());
exports.CapitalizePipe = CapitalizePipe;
//# sourceMappingURL=capatilze.pipe.js.map