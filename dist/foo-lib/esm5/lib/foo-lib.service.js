/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
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
    /** @nocollapse */ FooLibService.ngInjectableDef = i0.defineInjectable({ factory: function FooLibService_Factory() { return new FooLibService(i0.inject(i1.HttpClient)); }, token: FooLibService, providedIn: "root" });
    return FooLibService;
}());
export { FooLibService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FooLibService.prototype.apiRoot;
    /**
     * @type {?}
     * @private
     */
    FooLibService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vLWxpYi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm9vLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9mb28tbGliLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFJbEQ7SUFNRSx3QkFBd0I7SUFDeEIsdUJBQW9CLElBQWU7UUFBZixTQUFJLEdBQUosSUFBSSxDQUFXO1FBRmxCLFlBQU8sR0FBRyx3QkFBd0IsQ0FBQztJQUViLENBQUM7Ozs7O0lBRXhDLCtCQUFPOzs7O0lBQVAsVUFBUSxFQUFTOztZQUVULEdBQUcsR0FBTSxJQUFJLENBQUMsT0FBTyxlQUFVLEVBQUk7UUFDekMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBTyxHQUFHLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7O0lBRUQsb0NBQVk7OztJQUFaO1FBRUUsT0FBTyxZQUFZLENBQUM7SUFDdEIsQ0FBQzs7Z0JBbEJGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBTlEsVUFBVTs7O3dCQURuQjtDQXdCQyxBQW5CRCxJQW1CQztTQWhCWSxhQUFhOzs7Ozs7SUFFeEIsZ0NBQW9EOzs7OztJQUV4Qyw2QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU2hvdyB9IGZyb20gJy4vZm9vLWxpYi5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEZvb0xpYlNlcnZpY2Uge1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgYXBpUm9vdCA9ICdodHRwczovL2FwaS50dm1hemUuY29tJztcbiAgLy9odHRwczovL2FwaS5naXRodWIuY29tXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDpIdHRwQ2xpZW50KSB7IH1cblxuICBnZXRTaG93KGlkOm51bWJlcik6T2JzZXJ2YWJsZTxTaG93PlxuICB7XG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy5hcGlSb290fS9zaG93cy8ke2lkfWA7ICAgIFx0XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8U2hvdz4odXJsKTtcbiAgfVxuICBcbiAgZ2V0R3JlZXRpbmdzKCk6IFN0cmluZ1xuICB7XG4gICAgcmV0dXJuIFwiSGVsbG8gUGllclwiO1xuICB9XG59XG4iXX0=