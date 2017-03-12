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
var userstatus_service_1 = require("../../services/userstatus.service");
var comments_1 = require("../../models/comments");
var emitter_service_1 = require("../../services/emitter.service");
var CommentFormComponent = (function () {
    function CommentFormComponent(commentService) {
        this.commentService = commentService;
        this.model = new comments_1.Comments();
        this.editing = false;
    }
    CommentFormComponent.prototype.submitComment = function () {
        var _this = this;
        var commentOperation;
        commentOperation = this.commentService.addComment(this.statusId, this.model);
        // if(!this.editing)
        //     commentOperation = this.commentService.addComment(this.model.ID, this.model)
        // } else {
        //     commentOperation = this.commentService.updateComment(this.model)
        // }
        // commentOperation.subscribe(
        //     comments=>{
        //         EmitterService.get(this.listId).emit(comments);
        //         this.model = new Comments();
        //         if(this.editing) 
        //             this.editing = !this.editing;
        //     },
        //     err=>{
        //         console.log(err);
        //     });
        commentOperation.subscribe(function (comments) {
            emitter_service_1.EmitterService.get(_this.statusId).emit(comments);
            _this.model = new comments_1.Comments();
            if (_this.editing)
                _this.editing = !_this.editing;
        }, function (err) {
            console.log(err);
        });
    };
    CommentFormComponent.prototype.ngOnChanges = function () {
        var _this = this;
        emitter_service_1.EmitterService.get(this.statusId)
            .subscribe(function (comment) {
            _this.model = comment;
            _this.editing = true;
        });
    };
    return CommentFormComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], CommentFormComponent.prototype, "statusId", void 0);
CommentFormComponent = __decorate([
    core_1.Component({
        selector: 'app-comment-form',
        template: require('./comment-form.component.html')
    }),
    __metadata("design:paramtypes", [userstatus_service_1.UserStatusService])
], CommentFormComponent);
exports.CommentFormComponent = CommentFormComponent;
//# sourceMappingURL=comment-form.component.js.map