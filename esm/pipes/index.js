import { NgModule } from '@angular/core';
import { CapitalizePipe } from './capatilze.pipe';
export * from './capatilze.pipe';
var NgCapitalizeModule = (function () {
    function NgCapitalizeModule() {
    }
    NgCapitalizeModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        CapitalizePipe
                    ],
                    exports: [
                        CapitalizePipe
                    ]
                },] },
    ];
    /** @nocollapse */
    NgCapitalizeModule.ctorParameters = function () { return []; };
    return NgCapitalizeModule;
}());
export { NgCapitalizeModule };
//# sourceMappingURL=index.js.map