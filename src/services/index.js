"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var jpt_services_1 = require("./jpt.services");
var NgJptServices = (function () {
    function NgJptServices() {
    }
    NgJptServices.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        jpt_services_1.JptServices
                    ],
                    exports: [
                        jpt_services_1.JptServices
                    ]
                },] },
    ];
    /** @nocollapse */
    NgJptServices.ctorParameters = function () { return []; };
    return NgJptServices;
}());
exports.NgJptServices = NgJptServices;
__export(require("./jpt.services"));
//# sourceMappingURL=index.js.map