import { NgModule } from '@angular/core';
import { JptServices } from './jpt.services';
var NgJptServices = (function () {
    function NgJptServices() {
    }
    NgJptServices.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        JptServices
                    ],
                    exports: [
                        JptServices
                    ]
                },] },
    ];
    /** @nocollapse */
    NgJptServices.ctorParameters = function () { return []; };
    return NgJptServices;
}());
export { NgJptServices };
export * from './jpt.services';
//# sourceMappingURL=index.js.map