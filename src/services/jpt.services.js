"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var JptServices = (function () {
    function JptServices() {
    }
    JptServices.prototype.getAllInfo = function () {
        return ["hello", "world", "this", "is", "test"];
    };
    JptServices.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    JptServices.ctorParameters = function () { return []; };
    return JptServices;
}());
exports.JptServices = JptServices;
//# sourceMappingURL=jpt.services.js.map