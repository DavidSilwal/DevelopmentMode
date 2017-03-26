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
// Imports
var core_1 = require("@angular/core");
var expert_service_1 = require("../../services/expert.service");
var FeedExpertComponent = (function () {
    function FeedExpertComponent(expertStatusService) {
        this.expertStatusService = expertStatusService;
    }
    FeedExpertComponent.prototype.loadStatus = function () {
        var _this = this;
        this.expertStatusService
            .getStatus()
            .subscribe(function (resexpertuserstatus) { return _this.expertuserstatus = resexpertuserstatus; }, function (err) { console.log(err); });
    };
    FeedExpertComponent.prototype.ngOnInit = function () {
        console.log('statusload');
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.loadStatus();
    };
    return FeedExpertComponent;
}());
FeedExpertComponent = __decorate([
    core_1.Component({
        selector: 'app-feedexpert',
        template: require('./feedexpert.component.html')
    }),
    __metadata("design:paramtypes", [expert_service_1.ExpertService])
], FeedExpertComponent);
exports.FeedExpertComponent = FeedExpertComponent;
//# sourceMappingURL=feedexpert.component.js.map