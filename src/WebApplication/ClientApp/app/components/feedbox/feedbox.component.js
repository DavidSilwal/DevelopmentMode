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
var emitter_service_1 = require("../../services/emitter.service");
var userstatus_service_1 = require("../../services/userstatus.service");
var userstatus_1 = require("../../models/userstatus");
var FeedBoxComponent = (function () {
    function FeedBoxComponent(statusService) {
        this.statusService = statusService;
    }
    FeedBoxComponent.prototype.increaseLike = function () {
        var a = this.status._id;
        this.statusService
            .addLike(a)
            .subscribe(function (status) { return status; });
        console.log(a);
    };
    FeedBoxComponent.prototype.decreaseLike = function () {
        var a = this.status._id;
        this.statusService
            .disLike(a)
            .subscribe(function (status) { return status; });
        console.log(this.status.Status);
    };
    FeedBoxComponent.prototype.getClass = function () {
        if (this.toggleLike) {
            return 'likeheart';
        }
        else {
            return '';
        }
    };
    FeedBoxComponent.prototype.editStatus = function () {
        // Emit edit event
        console.log('mahesh');
        // EmitterService.get(this.editId).emit(this.status);
    };
    FeedBoxComponent.prototype.deleteStatus = function (_id) {
        var _this = this;
        this.statusService.removeStatus(_id).subscribe(function (status) {
            // Emit list event
            emitter_service_1.EmitterService.get(_this.listId).emit(status);
        }, function (err) {
            // Log errors if any
            console.log(err);
        });
    };
    FeedBoxComponent.prototype.updateStatus = function (value) {
        console.log(value);
        console.log('update Clicked');
        var statusId = this.status._id;
        this.statusService
            .updateStatus(statusId, value)
            .subscribe(function (status) { return status; });
    };
    return FeedBoxComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", userstatus_1.UserStatus)
], FeedBoxComponent.prototype, "status", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FeedBoxComponent.prototype, "listId", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FeedBoxComponent.prototype, "editId", void 0);
FeedBoxComponent = __decorate([
    core_1.Component({
        selector: 'app-feedbox',
        template: require('./feedbox.component.html'),
        styleUrls: [require('./feedbox.component.css')]
    }),
    __metadata("design:paramtypes", [userstatus_service_1.UserStatusService])
], FeedBoxComponent);
exports.FeedBoxComponent = FeedBoxComponent;
//# sourceMappingURL=feedbox.component.js.map