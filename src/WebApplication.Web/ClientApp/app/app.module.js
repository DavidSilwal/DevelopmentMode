"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var angular2_universal_1 = require("angular2-universal");
var app_component_1 = require("./components/app/app.component");
var home_component_1 = require("./components/home/home.component");
var post_component_1 = require("./components/post/post.component");
var feed_component_1 = require("./components/feed/feed.component");
var feedbox_component_1 = require("./components/feedbox/feedbox.component");
//import { EditStatusComponent } from './components/feedbox/editstatus/editstatus.component';
var detailstatus_component_1 = require("./components/feedbox/detailstatus/detailstatus.component");
var comment_list_component_1 = require("./components/comment/comment-list.component");
var comment_form_component_1 = require("./components/comment/comment-form.component");
var domainexpert_component_1 = require("./components/domainexpert/domainexpert.component");
var feedexpert_component_1 = require("./components/feedExpert/feedexpert.component");
var feedboxexpert_component_1 = require("./components/feedboxExpert/feedboxexpert.component");
var date_format_pipe_1 = require("./pipes/date-format.pipe");
var userstatus_service_1 = require("./services/userstatus.service");
var statusType_sevice_1 = require("./services/statusType.sevice");
var emitter_service_1 = require("./services/emitter.service");
var expert_service_1 = require("./services/expert.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        bootstrap: [app_component_1.AppComponent],
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            post_component_1.PostComponent,
            feed_component_1.FeedComponent,
            feedbox_component_1.FeedBoxComponent,
            comment_list_component_1.CommentListComponent,
            comment_form_component_1.CommentFormComponent,
            date_format_pipe_1.DateFormatPipe,
            domainexpert_component_1.DomainExpertComponent,
            detailstatus_component_1.DetailStatusComponent,
            feedboxexpert_component_1.FeedBoxExpertComponent,
            feedexpert_component_1.FeedExpertComponent
        ],
        imports: [
            angular2_universal_1.UniversalModule,
            forms_1.FormsModule,
            router_1.RouterModule.forRoot([
                { path: '', redirectTo: 'home', pathMatch: 'full' },
                { path: 'home', component: home_component_1.HomeComponent },
                { path: 'home/domainexpert', component: domainexpert_component_1.DomainExpertComponent },
                //detail 
                { path: 'home/detail/:id', component: detailstatus_component_1.DetailStatusComponent },
                { path: '**', redirectTo: 'home' }
            ])
        ],
        providers: [userstatus_service_1.UserStatusService, emitter_service_1.EmitterService, statusType_sevice_1.StatusTypeService, expert_service_1.ExpertService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map