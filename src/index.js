"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var pipes_1 = require("./pipes");
var NgPipeModule = (function () {
    function NgPipeModule() {
    }
    NgPipeModule.decorators = [
        { type: core_1.NgModule, args: [{
                    exports: [
                        pipes_1.NgCapitalizeModule
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
//# sourceMappingURL=index.js.map