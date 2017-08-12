import { Pipe } from '@angular/core';
export function isString(value) {
    return typeof value === 'string';
}
export function upperFirst(value) {
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
        { type: Pipe, args: [{
                    name: 'capitalize'
                },] },
    ];
    /** @nocollapse */
    CapitalizePipe.ctorParameters = function () { return []; };
    return CapitalizePipe;
}());
export { CapitalizePipe };
//# sourceMappingURL=capatilze.pipe.js.map