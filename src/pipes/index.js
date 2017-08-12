"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var capatilze_pipe_1 = require("./capatilze.pipe");
__export(require("./capatilze.pipe"));
var NgCapitalizeModule = (function () {
    function NgCapitalizeModule() {
    }
    NgCapitalizeModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        capatilze_pipe_1.CapitalizePipe
                    ],
                    exports: [
                        capatilze_pipe_1.CapitalizePipe
                    ]
                },] },
    ];
    /** @nocollapse */
    NgCapitalizeModule.ctorParameters = function () { return []; };
    return NgCapitalizeModule;
}());
exports.NgCapitalizeModule = NgCapitalizeModule;
//# sourceMappingURL=index.js.map