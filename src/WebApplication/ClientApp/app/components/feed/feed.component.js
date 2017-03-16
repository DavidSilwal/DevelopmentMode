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
var router_1 = require("@angular/router");
// Imports
var core_1 = require("@angular/core");
var userstatus_service_1 = require("../../services/userstatus.service");
var FeedComponent = (function () {
    function FeedComponent(statusService, router) {
        this.statusService = statusService;
        this.router = router;
    }
    FeedComponent.prototype.loadStatuss = function () {
        var _this = this;
        // Get all status
        this.statusService.getStatus()
            .subscribe(function (userstatus) { return _this.userstatus = userstatus; }, //Bind to view
        function (//Bind to view
            err) {
            console.log(err);
        });
    };
    FeedComponent.prototype.ngOnInit = function () {
        // Load status
        this.loadStatuss();
    };
    //   gotoDetail(userstatus: UserStatus): void {
    //     let link = ['/detail', userstatus.id];
    //     this.router.navigate(link);
    //   }
    FeedComponent.prototype.ngOnChanges = function (changes) {
        // Listen to the 'list'emitted event so as populate the model
        // with the event payload
        if (changes['status']) {
            this.loadStatuss();
        }
        // EmitterService.get(this.listId).subscribe((userstatus: UserStatus[]) => { this.userstatus = userstatus });
    };
    return FeedComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FeedComponent.prototype, "listId", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FeedComponent.prototype, "editId", void 0);
FeedComponent = __decorate([
    core_1.Component({
        selector: 'app-feed',
        template: require('./feed.component.html')
    }),
    __metadata("design:paramtypes", [userstatus_service_1.UserStatusService,
        router_1.Router])
], FeedComponent);
exports.FeedComponent = FeedComponent;
//# sourceMappingURL=feed.component.js.map