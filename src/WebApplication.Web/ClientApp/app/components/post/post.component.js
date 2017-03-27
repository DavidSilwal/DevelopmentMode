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
var statusType_sevice_1 = require("../../services/statusType.sevice");
var userstatus_1 = require("../../models/userstatus");
var PostComponent = (function () {
    function PostComponent(statusService, _statusTypeService) {
        this.statusService = statusService;
        this._statusTypeService = _statusTypeService;
        this.statusTypes = [];
        // Local properties
        this.model = new userstatus_1.UserStatus();
        this.editing = false;
    }
    PostComponent.prototype.submitStatus = function () {
        var _this = this;
        // Variable to hold a reference of addComment/updateComment
        var statusOperation;
        statusOperation = this.statusService.addStatus(this.model);
        //if (!this.editing) {
        //    // Create a new status
        //    statusOperation = this.statusService.addStatus(this.model)
        //}
        //} else {
        //    // Update an existing status
        //    statusOperation = this.statusService.updateStatus(this.model)
        //}
        // Subscribe to observable
        statusOperation.subscribe(function (status) {
            // Emit list event
            emitter_service_1.EmitterService.get(_this.listId).emit(status);
            // Empty model
            _this.model = new userstatus_1.UserStatus();
            // Switch editing status
            //if (this.editing) this.editing = !this.editing;
        }, function (err) {
            console.log(err);
        });
    };
    PostComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this._statusTypeService.getStatusType()
            .subscribe(function (resStatusTypeData) { return _this.statusTypes = resStatusTypeData; });
    };
    PostComponent.prototype.ngOnChanges = function () {
        var _this = this;
        // Listen to the 'edit'emitted event so as populate the model
        // with the event payload
        emitter_service_1.EmitterService.get(this.editId).subscribe(function (status) {
            _this.model = status;
            _this.editing = true;
        });
    };
    return PostComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], PostComponent.prototype, "editId", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], PostComponent.prototype, "listId", void 0);
PostComponent = __decorate([
    core_1.Component({
        selector: 'app-post',
        template: require('./post.component.html'),
        providers: [userstatus_service_1.UserStatusService, statusType_sevice_1.StatusTypeService]
    }),
    __metadata("design:paramtypes", [userstatus_service_1.UserStatusService, statusType_sevice_1.StatusTypeService])
], PostComponent);
exports.PostComponent = PostComponent;
//# sourceMappingURL=post.component.js.map