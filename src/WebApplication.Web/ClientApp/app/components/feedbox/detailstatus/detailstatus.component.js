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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var userstatus_service_1 = require("../../../services/userstatus.service");
var router_1 = require("@angular/router");
var DetailStatusComponent = (function () {
    function DetailStatusComponent(_http, route, statusService, router) {
        this._http = _http;
        this.route = route;
        this.statusService = statusService;
        this.router = router;
    }
    DetailStatusComponent.prototype.loadStatusss = function () {
        var _this = this;
        this.route.params
            .map(function (params) { return params['id']; })
            .subscribe(function (id) {
            _this.statusService
                .statusDetail(id)
                .subscribe(function (userstatus) { return _this.userstatus = userstatus; }, //Bind to view
            function (//Bind to view
                err) {
                console.log(err);
            });
        });
    };
    DetailStatusComponent.prototype.ngOnInit = function () {
        // Load status
        this.loadStatusss();
    };
    return DetailStatusComponent;
}());
DetailStatusComponent = __decorate([
    core_1.Component({
        selector: 'app-status-detail',
        template: require('./detailstatus.component.html')
    }),
    __metadata("design:paramtypes", [http_1.Http,
        router_1.ActivatedRoute,
        userstatus_service_1.UserStatusService,
        router_1.Router])
], DetailStatusComponent);
exports.DetailStatusComponent = DetailStatusComponent;
//# sourceMappingURL=detailstatus.component.js.map