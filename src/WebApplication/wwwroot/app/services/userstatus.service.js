"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var UserStatusService = (function () {
    function UserStatusService(http) {
        this.http = http;
        this.statusupdate = {};
    }
    UserStatusService.prototype.getUserStatus = function () {
        return this.http.get('api/userstatus')
            .map(function (response) { return response.json(); });
    };
    UserStatusService.prototype.addUserStatus = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8');
        this.http.post('api/userstatus', JSON.stringify(this.statusupdate), { headers: headers }).subscribe();
        alert("Status Inserted");
        this.getUserStatus();
    };
    UserStatusService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UserStatusService);
    return UserStatusService;
}());
exports.UserStatusService = UserStatusService;
//# sourceMappingURL=userstatus.service.js.map