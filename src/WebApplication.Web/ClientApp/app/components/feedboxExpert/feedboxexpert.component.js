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
var expert_service_1 = require("../../services/expert.service");
var userstatus_1 = require("../../models/userstatus");
var FeedBoxExpertComponent = (function () {
    function FeedBoxExpertComponent(statusExpertService) {
        this.statusExpertService = statusExpertService;
    }
    FeedBoxExpertComponent.prototype.getClass = function () {
        if (this.toggleLike) {
            return 'likeheart';
        }
        else {
            return '';
        }
    };
    FeedBoxExpertComponent.prototype.editStatus = function () {
        // Emit edit event
        console.log('mahesh');
        // EmitterService.get(this.editId).emit(this.status);
    };
    FeedBoxExpertComponent.prototype.deleteStatus = function (_id) {
        var _this = this;
        this.statusExpertService.removeStatus(_id).subscribe(function (status) {
            // Emit list event
            emitter_service_1.EmitterService.get(_this.listId).emit(status);
        }, function (err) {
            // Log errors if any
            console.log(err);
        });
    };
    FeedBoxExpertComponent.prototype.updateStatus = function (value) {
        console.log(value);
        console.log('update Clicked');
        var statusId = this.status._id;
        //this.statusExpertService
        //    .updateStatus(statusId, value)
        //    .subscribe(status=>status)
    };
    return FeedBoxExpertComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", userstatus_1.UserStatus)
], FeedBoxExpertComponent.prototype, "status", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FeedBoxExpertComponent.prototype, "listId", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FeedBoxExpertComponent.prototype, "editId", void 0);
FeedBoxExpertComponent = __decorate([
    core_1.Component({
        selector: 'app-feedboxexpert',
        template: require('./feedboxexpert.component.html'),
        styleUrls: [require('./feedboxexpert.component.css')]
    }),
    __metadata("design:paramtypes", [expert_service_1.ExpertService])
], FeedBoxExpertComponent);
exports.FeedBoxExpertComponent = FeedBoxExpertComponent;
//# sourceMappingURL=feedboxexpert.component.js.map