import { NgModule } from '@angular/core';
import { NgCapitalizeModule } from './pipes';
var NgPipeModule = (function () {
    function NgPipeModule() {
    }
    NgPipeModule.decorators = [
        { type: NgModule, args: [{
                    exports: [
                        NgCapitalizeModule
                    ]
                },] },
    ];
    /** @nocollapse */
    NgPipeModule.ctorParameters = function () { return []; };
    return NgPipeModule;
}());
export { NgPipeModule };
;
export * from './pipes';
//# sourceMappingURL=index.js.map