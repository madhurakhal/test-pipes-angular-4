"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var pipes_1 = require("./pipes");
var services_1 = require("./services");
var NgPipeModule = (function () {
    function NgPipeModule() {
    }
    NgPipeModule.decorators = [
        { type: core_1.NgModule, args: [{
                    exports: [
                        pipes_1.NgCapitalizeModule,
                        services_1.NgJptServices
                    ]
                },] },
    ];
    /** @nocollapse */
    NgPipeModule.ctorParameters = function () { return []; };
    return NgPipeModule;
}());
exports.NgPipeModule = NgPipeModule;
;
__export(require("./pipes"));
__export(require("./services"));
//# sourceMappingURL=index.js.map