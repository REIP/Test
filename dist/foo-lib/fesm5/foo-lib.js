import { Injectable, Component, NgModule, defineInjectable, inject } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FooLibService = /** @class */ (function () {
    //https://api.github.com
    function FooLibService(http) {
        this.http = http;
        this.apiRoot = 'https://api.tvmaze.com';
    }
    /**
     * @param {?} id
     * @return {?}
     */
    FooLibService.prototype.getShow = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        /** @type {?} */
        var url = this.apiRoot + "/shows/" + id;
        return this.http.get(url);
    };
    /**
     * @return {?}
     */
    FooLibService.prototype.getGreetings = /**
     * @return {?}
     */
    function () {
        return "Hello Pier";
    };
    FooLibService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    FooLibService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ FooLibService.ngInjectableDef = defineInjectable({ factory: function FooLibService_Factory() { return new FooLibService(inject(HttpClient)); }, token: FooLibService, providedIn: "root" });
    return FooLibService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FooLibComponent = /** @class */ (function () {
    function FooLibComponent() {
    }
    /**
     * @return {?}
     */
    FooLibComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    FooLibComponent.decorators = [
        { type: Component, args: [{
                    selector: 'foo-foo-lib',
                    template: "\n    <p>\n      foo-lib works - Reip!\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    FooLibComponent.ctorParameters = function () { return []; };
    return FooLibComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FooLibModule = /** @class */ (function () {
    function FooLibModule() {
    }
    FooLibModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [FooLibComponent],
                    imports: [
                        HttpClientModule,
                    ],
                    exports: [FooLibComponent]
                },] }
    ];
    return FooLibModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { FooLibService, FooLibComponent, FooLibModule };

//# sourceMappingURL=foo-lib.js.map