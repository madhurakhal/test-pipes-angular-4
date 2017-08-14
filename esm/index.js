import { NgModule } from '@angular/core';
import { NgCapitalizeModule } from './pipes';
import { NgJptServices } from './services';
var NgPipeModule = (function () {
    function NgPipeModule() {
    }
    NgPipeModule.decorators = [
        { type: NgModule, args: [{
                    exports: [
                        NgCapitalizeModule,
                        NgJptServices
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
export * from './services';
//# sourceMappingURL=index.js.map