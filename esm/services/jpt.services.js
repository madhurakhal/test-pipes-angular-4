import { Injectable } from '@angular/core';
var JptServices = (function () {
    function JptServices() {
    }
    JptServices.prototype.getAllInfo = function () {
        return ["hello", "world", "this", "is", "test"];
    };
    JptServices.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    JptServices.ctorParameters = function () { return []; };
    return JptServices;
}());
export { JptServices };
//# sourceMappingURL=jpt.services.js.map