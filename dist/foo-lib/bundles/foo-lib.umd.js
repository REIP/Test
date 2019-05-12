(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http')) :
    typeof define === 'function' && define.amd ? define('foo-lib', ['exports', '@angular/core', '@angular/common/http'], factory) :
    (factory((global['foo-lib'] = {}),global.ng.core,global.ng.common.http));
}(this, (function (exports,i0,i1) { 'use strict';

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
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        FooLibService.ctorParameters = function () {
            return [
                { type: i1.HttpClient }
            ];
        };
        /** @nocollapse */ FooLibService.ngInjectableDef = i0.defineInjectable({ factory: function FooLibService_Factory() { return new FooLibService(i0.inject(i1.HttpClient)); }, token: FooLibService, providedIn: "root" });
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
            { type: i0.Component, args: [{
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
            { type: i0.NgModule, args: [{
                        declarations: [FooLibComponent],
                        imports: [
                            i1.HttpClientModule,
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

    exports.FooLibService = FooLibService;
    exports.FooLibComponent = FooLibComponent;
    exports.FooLibModule = FooLibModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=foo-lib.umd.js.map