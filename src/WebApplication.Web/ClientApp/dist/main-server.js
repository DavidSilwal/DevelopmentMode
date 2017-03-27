(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	__webpack_require__(1);
	__webpack_require__(2);
	var core_1 = __webpack_require__(3);
	var angular2_universal_1 = __webpack_require__(4);
	var app_module_1 = __webpack_require__(5);
	core_1.enableProdMode();
	var platform = angular2_universal_1.platformNodeDynamic();
	function default_1(params) {
	    return new Promise(function (resolve, reject) {
	        var requestZone = Zone.current.fork({
	            name: 'angular-universal request',
	            properties: {
	                baseUrl: '/',
	                requestUrl: params.url,
	                originUrl: params.origin,
	                preboot: false,
	                // TODO: Render just the <app> component instead of wrapping it inside an extra HTML document
	                // Waiting on https://github.com/angular/universal/issues/347
	                document: '<!DOCTYPE html><html><head></head><body><app></app></body></html>'
	            },
	            onHandleError: function (parentZone, currentZone, targetZone, error) {
	                // If any error occurs while rendering the module, reject the whole operation
	                reject(error);
	                return true;
	            }
	        });
	        return requestZone.run(function () { return platform.serializeModule(app_module_1.AppModule); }).then(function (html) {
	            resolve({ html: html });
	        }, reject);
	    });
	}
	exports.default = default_1;


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("angular2-universal-polyfills");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("zone.js");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("@angular/core");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("angular2-universal");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var core_1 = __webpack_require__(3);
	var forms_1 = __webpack_require__(6);
	var router_1 = __webpack_require__(7);
	var angular2_universal_1 = __webpack_require__(4);
	var app_component_1 = __webpack_require__(8);
	var home_component_1 = __webpack_require__(13);
	var post_component_1 = __webpack_require__(15);
	var feed_component_1 = __webpack_require__(26);
	var feedbox_component_1 = __webpack_require__(28);
	//import { EditStatusComponent } from './components/feedbox/editstatus/editstatus.component';
	var detailstatus_component_1 = __webpack_require__(32);
	var comment_list_component_1 = __webpack_require__(34);
	var comment_form_component_1 = __webpack_require__(36);
	var domainexpert_component_1 = __webpack_require__(38);
	var feedexpert_component_1 = __webpack_require__(40);
	var feedboxexpert_component_1 = __webpack_require__(43);
	var date_format_pipe_1 = __webpack_require__(47);
	var userstatus_service_1 = __webpack_require__(17);
	var statusType_sevice_1 = __webpack_require__(23);
	var emitter_service_1 = __webpack_require__(16);
	var expert_service_1 = __webpack_require__(41);
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

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("@angular/forms");

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("@angular/router");

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var core_1 = __webpack_require__(3);
	var AppComponent = (function () {
	    function AppComponent() {
	    }
	    return AppComponent;
	}());
	AppComponent = __decorate([
	    core_1.Component({
	        selector: 'app',
	        template: __webpack_require__(9),
	        styles: [__webpack_require__(10)]
	    })
	], AppComponent);
	exports.AppComponent = AppComponent;
	//# sourceMappingURL=app.component.js.map

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "\r\n\r\n<div class='container-fluid'>\r\n    <div class='row'>\r\n        <div >\r\n            <router-outlet>\r\n\r\n            </router-outlet>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n"

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(11);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, "@media (max-width: 767px) {\r\n    /* On small screens, the nav menu spans the full width of the screen. Leave a space for it. */\r\n    .body-content {\r\n        padding-top: 50px;\r\n    }\r\n}\r\n", ""]);
	
	// exports


/***/ },
/* 12 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var core_1 = __webpack_require__(3);
	var HomeComponent = (function () {
	    function HomeComponent() {
	        this.types = [
	            'Doctor', 'Psychologist', 'Other'
	        ];
	    }
	    return HomeComponent;
	}());
	HomeComponent = __decorate([
	    core_1.Component({
	        selector: 'home',
	        template: __webpack_require__(14),
	    })
	], HomeComponent);
	exports.HomeComponent = HomeComponent;
	//# sourceMappingURL=home.component.js.map

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = "<!--<p *ngIf=\"!status\"><em>Loading...</em></p>-->\r\n<nav>\r\n    <a [routerLink]=\"['']\">Home</a>\r\n    <a [routerLink]=\"['/home/domainexpert']\">Domain Expert</a>\r\n</nav>\r\n\r\n\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-2\"></div>\r\n        <div class=\"col-md-8\">\r\n            <div>\r\n                <app-post>\r\n                </app-post>\r\n            </div>\r\n            <div>\r\n                <app-feed>\r\n                    \r\n                </app-feed>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-2\"></div>\r\n    </div>\r\n\r\n</div>"

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var emitter_service_1 = __webpack_require__(16);
	var userstatus_service_1 = __webpack_require__(17);
	var statusType_sevice_1 = __webpack_require__(23);
	var userstatus_1 = __webpack_require__(24);
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
	        template: __webpack_require__(25),
	        providers: [userstatus_service_1.UserStatusService, statusType_sevice_1.StatusTypeService]
	    }),
	    __metadata("design:paramtypes", [userstatus_service_1.UserStatusService, statusType_sevice_1.StatusTypeService])
	], PostComponent);
	exports.PostComponent = PostComponent;
	//# sourceMappingURL=post.component.js.map

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	/* * * ./app/emitter.service.ts * * */
	// https://gist.github.com/sasxa
	// Imports
	var core_1 = __webpack_require__(3);
	var EmitterService = (function () {
	    function EmitterService() {
	    }
	    // Set a new event in the store with a given ID
	    // as key
	    EmitterService.get = function (ID) {
	        if (!this._emitters[ID])
	            this._emitters[ID] = new core_1.EventEmitter();
	        return this._emitters[ID];
	    };
	    return EmitterService;
	}());
	// Event store
	EmitterService._emitters = {};
	EmitterService = __decorate([
	    core_1.Injectable()
	], EmitterService);
	exports.EmitterService = EmitterService;
	//# sourceMappingURL=emitter.service.js.map

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

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
	//import { Likes } from './../models/likes';
	var core_1 = __webpack_require__(3);
	var http_1 = __webpack_require__(18);
	var Rx_1 = __webpack_require__(19);
	// Import RxJs required methods
	__webpack_require__(20);
	__webpack_require__(21);
	__webpack_require__(22);
	var UserStatusService = (function () {
	    function UserStatusService(http) {
	        this.http = http;
	        this.Url = "http://localhost:50353/api/feed";
	    }
	    UserStatusService.prototype.handleError = function (error) {
	        // In a real world app, we might use a remote logging infrastructure
	        var errMsg;
	        if (error instanceof http_1.Response) {
	            var body = error.json() || '';
	            var err = body.error || JSON.stringify(body);
	            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
	        }
	        else {
	            errMsg = error.message ? error.message : error.toString();
	        }
	        console.error(errMsg);
	        return Rx_1.Observable.throw(errMsg);
	    };
	    UserStatusService.prototype.getStatus = function () {
	        return this.http.get(this.Url)
	            .map(function (res) { return res.json(); })
	            .catch(this.handleError);
	    };
	    UserStatusService.prototype.statusDetail = function (_id) {
	        return this.http.get(this.Url + '/' + _id)
	            .map(function (res) { return res.json(); })
	            .catch(this.handleError);
	    };
	    UserStatusService.prototype.disLike = function (_id) {
	        var bodyString = JSON.stringify(_id); // Stringify payload
	        var headers = new http_1.Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
	        var options = new http_1.RequestOptions({ headers: headers }); // Create a request option
	        return this.http.post(this.Url + '/' + _id + '/unlike', _id, options)
	            .map(function (res) { return res.json(); })
	            .catch(this.handleError);
	    };
	    UserStatusService.prototype.addLike = function (_id) {
	        var bodyString = JSON.stringify(_id); // Stringify payload
	        var headers = new http_1.Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
	        var options = new http_1.RequestOptions({ headers: headers }); // Create a request option
	        return this.http.post(this.Url + '/' + _id + '/like', _id, options)
	            .map(function (res) { return res.json(); })
	            .catch(this.handleError);
	    };
	    // addLike(_id:string):Observable<likes[]>{
	    //         return this.http.get(this.likeUrl+'/'+ _id + '/like')
	    //                     .map((res: Response) => res.json())
	    //                     .catch(this.handleError);
	    //     }
	    //add a new status
	    UserStatusService.prototype.addStatus = function (body) {
	        var bodyString = JSON.stringify(body); // Stringify payload
	        var headers = new http_1.Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
	        var options = new http_1.RequestOptions({ headers: headers }); // Create a request option
	        return this.http.post(this.Url, body, options) // ...using post request
	            .map(function (res) { return res.json(); }) // ...and calling .json() on the response to return data
	            .catch(this.handleError);
	    };
	    // Update a status
	    UserStatusService.prototype.updateStatus = function (id, body) {
	        console.log(id);
	        console.log('mahesh');
	        console.log(body);
	        console.log(body.Status);
	        var bodyString = JSON.stringify(body); // Stringify payload
	        console.log(bodyString);
	        var headers = new http_1.Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
	        var options = new http_1.RequestOptions({ headers: headers }); // Create a request option
	        var editedText = body.Status;
	        return this.http.put(this.Url + '/edit' + '/' + id + '/' + editedText, editedText) // ...using put request
	            .map(function (res) { return res.json(); }) // ...and calling .json() on the response to return data
	            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); }); //...errors if any
	    };
	    // detail of status 
	    // Delete a status
	    UserStatusService.prototype.removeStatus = function (_id) {
	        return this.http.delete(this.Url + "/" + _id) // ...using put request
	            .map(function (res) { return res.json(); }) // ...and calling .json() on the response to return data
	            .catch(this.handleError); //...errors if any
	    };
	    // Add a new comment
	    UserStatusService.prototype.addComment = function (id, body) {
	        console.log(id);
	        console.log(body);
	        var commentsString = JSON.stringify(body); // Stringify payload
	        var headers = new http_1.Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
	        var options = new http_1.RequestOptions({ headers: headers }); // Create a request option
	        console.log(body);
	        console.log(id);
	        console.log("mahesh");
	        var commentText = body.text;
	        return this.http.post(this.Url + '/' + id + '/' + commentText, commentText, headers) // ...using post request
	            .map(function (res) { return res.json(); }) // ...and calling .json() on the response to return data
	            .catch(this.handleError); //...errors if any
	    };
	    return UserStatusService;
	}());
	UserStatusService = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [http_1.Http])
	], UserStatusService);
	exports.UserStatusService = UserStatusService;
	//# sourceMappingURL=userstatus.service.js.map

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = require("@angular/http");

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = require("rxjs/Rx");

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = require("rxjs/add/operator/map");

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = require("rxjs/add/operator/catch");

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = require("rxjs/add/operator/toPromise");

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	//observable 
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
	//getting status type 
	//get() from url
	var core_1 = __webpack_require__(3);
	var http_1 = __webpack_require__(18);
	var StatusTypeService = (function () {
	    function StatusTypeService(_http) {
	        this._http = _http;
	        this._url = "http://localhost:50353/api/statustype";
	    }
	    StatusTypeService.prototype.getStatusType = function () {
	        return this._http.get(this._url)
	            .map(function (response) { return response.json(); });
	    };
	    return StatusTypeService;
	}());
	StatusTypeService = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [http_1.Http])
	], StatusTypeService);
	exports.StatusTypeService = StatusTypeService;
	//# sourceMappingURL=statusType.sevice.js.map

/***/ },
/* 24 */
/***/ function(module, exports) {

	"use strict";
	var UserStatus = (function () {
	    function UserStatus() {
	    }
	    return UserStatus;
	}());
	exports.UserStatus = UserStatus;
	var StatusType = (function () {
	    function StatusType(id, type) {
	    }
	    return StatusType;
	}());
	exports.StatusType = StatusType;
	//# sourceMappingURL=userstatus.js.map

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = "<form #form=\"ngForm\" (ngSubmit)=\"submitStatus()\" class=\"form-horizontal bordered-group\">\r\n    <div class=\"panel border\">\r\n        <div class=\"panel-heading nomargint\">\r\n            <a href=\"#\" class=\"btn btn-default noborder \"><i class=\"fa fa-camera\"></i> Photo/Video</a> |\r\n            <a href=\"#\" class=\"btn btn-default noborder\"><i class=\"fa fa-photo\"></i> Photo/Video Album</a>\r\n            <hr class=\"nomargint nomarginb\" />\r\n        </div>\r\n        <div class=\"panel-body \">\r\n            <div class=\"row \">\r\n                <div class=\"col-xs-12\">\r\n                    <div class=\"form-group \">\r\n                        <div class=\"col-xs-1\">\r\n                            <img src=\"\" width=\"45\" height=\"45\" alt=\"\" />\r\n                        </div>\r\n                        <div class=\"col-xs-11\">\r\n                            <textarea class=\"form-control noborder\" rows=\"2\" placeholder=\"Whats on your mind?\" [(ngModel)]=\"model.status\" name=\"text\" required></textarea>\r\n                        </div>\r\n                    </div>\r\n                    <hr />\r\n                    <div class=\"form-group nomarginb\">\r\n                        <div class=\"col-xs-6\">\r\n                            <!--asdfasdfasdf\r\n                            <ul *ngFor=\"let statusType of statusTypes\">\r\n                                <li>\r\n                                    1\r\n                                    {{statusType.type}}\r\n                                </li>\r\n                            </ul>-->\r\n                            <!--<select class=\"form-control pull-left\" [(ngModel)]=\"model.type\" name=\"type\" required>\r\n                                <option *ngFor=\"let statusType of statusTypes\" >{{statusType | json}}</option>\r\n                            </select>-->\r\n                            <select class=\"form-control pull-left\" [(ngModel)]=\"model.type\" name=\"type\" required>\r\n                                <option *ngFor=\"let type of statusTypes\">{{type.name}}</option>\r\n                            </select>\r\n                        </div>\r\n                        <div class=\"col-xs-6\">\r\n                            \r\n                            <button type=\"submit\" [disabled]=\"form.invalid\" class=\"btn btn-primary pull-right btn-sm\">Post</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</form>"

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

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
	var router_1 = __webpack_require__(7);
	// Imports
	var core_1 = __webpack_require__(3);
	var userstatus_service_1 = __webpack_require__(17);
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
	        template: __webpack_require__(27)
	    }),
	    __metadata("design:paramtypes", [userstatus_service_1.UserStatusService,
	        router_1.Router])
	], FeedComponent);
	exports.FeedComponent = FeedComponent;
	//# sourceMappingURL=feed.component.js.map

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = "<!--<div *ngIf=\"loading\" class=\"loader\">Loading...</div>-->\r\n\r\n<app-feedbox \r\n[listId]=\"listId\" \r\n*ngFor=\"let status of userstatus\" \r\n[status]=\"status\" >\r\n   \r\n</app-feedbox>\r\n<div class=\"row\">\r\n    <div class=\"col-md-12 text-center\">\r\n        <a href=\"\" class=\"btn btn-block\"> load more stories</a>\r\n    </div>\r\n    \r\n</div>\r\n\r\n\r\n"

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var emitter_service_1 = __webpack_require__(16);
	var userstatus_service_1 = __webpack_require__(17);
	var userstatus_1 = __webpack_require__(24);
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
	        template: __webpack_require__(29),
	        styleUrls: [__webpack_require__(30)]
	    }),
	    __metadata("design:paramtypes", [userstatus_service_1.UserStatusService])
	], FeedBoxComponent);
	exports.FeedBoxComponent = FeedBoxComponent;
	//# sourceMappingURL=feedbox.component.js.map

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = "\r\n<a [routerLink]=\"['/domainexpert']\">domain expert</a>\r\n\r\n<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading mi-hi-40\">\r\n        <span class=\"pull-left\">\r\n            {{status.type}}\r\n        </span>\r\n        <span class=\"pull-right\">\r\n            {{status.updateTime| dateFormat | date:'medium'}}\r\n            <!--|{{status.updatedAgo | dateFormat }} ago-->\r\n\r\n            \r\n\r\n        </span>\r\n        <div ngClass=\"dropdown\">\r\n            <button class=\"dropdown-toggle statusdrop\" data-toggle=\"dropdown\">\r\n                <span class=\"caret\"></span>\r\n            </button>\r\n            <ul  ngClass=\"dropdown-menu\">\r\n                <li><a href=\"\">Edit</a></li>\r\n                <li><a href=\"\">Delete</a></li>\r\n                <li><a href=\"\">Detail</a></li>\r\n            </ul>\r\n        </div>\r\n        \r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\"  >\r\n\r\n                <span *ngIf=\"!edit\">\r\n                    {{status.status}}\r\n                </span>\r\n\r\n                <span *ngIf=\"edit\">\r\n                   \r\n                        <form #updateForm=\"ngForm\" (ngSubmit)=\"updateStatus(updateForm.value);edit=!edit;\">\r\n                           <div>\r\n                               <textarea name=\"Status\" ngModel>{{status.status}}</textarea>\r\n                               <button type=\"submit\">Update</button>\r\n                           </div>\r\n                       </form>\r\n                       {{updateForm.value | json}}\r\n                   \r\n                </span>\r\n                \r\n            </div>\r\n\r\n            \r\n        </div>\r\n\r\n        <!--<div *ngFor=\"let comments of status.comments\">\r\n            {{comments.commentTime}}\r\n        </div>-->\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                {{status.likesCounts}} likes | {{status.commentsCounts}} Comments Delete Edit\r\n            </div>\r\n\r\n            <div class=\"col-md-12\">\r\n                <a [routerLink]=\"['/home/edit', status._id]\" class=\"btn btn-primary btn-xs \" (click)=\"edit = !edit\">\r\n\r\n                    <span *ngIf=\"!edit\">Edit</span>\r\n                </a>\r\n                <a [routerLink]=\"[ '/home/detail', status._id]\" class=\"btn btn-primary btn-xs\">Detail</a>\r\n            </div>\r\n            \r\n\r\n            \r\n\r\n            \r\n        </div>\r\n    </div>\r\n    <div class=\"panel-footer mi-hi-40\">\r\n        <div class=\"col-xs-2\">\r\n           <a (click)=\"toggleLike = !toggleLike; liketoggle = !liketoggle; \" [ngClass]=\"getClass()\" class=\"like\" >\r\n                <i class=\"fa fa-heart\"></i>\r\n                <span  *ngIf=\"!liketoggle\" (click)=\"increaseLike();\" class=\"btn btn-info btn-xs\" >like</span>\r\n                <span *ngIf=\"liketoggle\" (click)=\"decreaseLike();\"  class=\"btn btn-danger btn-xs\">unlike</span>\r\n               \r\n            </a> \r\n        </div>\r\n        <div class=\"col-xs-10\">\r\n            <app-comment-form [statusId]=\"status._id\"></app-comment-form>\r\n        </div>\r\n\r\n    </div>\r\n</div>"

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(31);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, ".mi-hi-40{\r\nmin-height:40px;\r\n}\r\n\r\n.fa-heart:hover,.fa-heart:focus{\r\n     color:black;           \r\n}", ""]);
	
	// exports


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var http_1 = __webpack_require__(18);
	var userstatus_service_1 = __webpack_require__(17);
	var router_1 = __webpack_require__(7);
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
	        template: __webpack_require__(33)
	    }),
	    __metadata("design:paramtypes", [http_1.Http,
	        router_1.ActivatedRoute,
	        userstatus_service_1.UserStatusService,
	        router_1.Router])
	], DetailStatusComponent);
	exports.DetailStatusComponent = DetailStatusComponent;
	//# sourceMappingURL=detailstatus.component.js.map

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = "\r\n<div class=\"col-md-2\"></div>\r\n\r\n<div class=\"col-md-8\">\r\n\r\n    <div *ngIf=\"userstatus\">\r\n        \r\n\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading mi-hi-40\">\r\n                <span class=\"pull-left\">\r\n                    {{userstatus.type}}\r\n                </span>\r\n                <span class=\"pull-right\">\r\n                    {{userstatus.updateTime| dateFormat | date:'medium'}}\r\n                    <!--|{{status.updatedAgo | dateFormat }} ago-->\r\n\r\n                </span>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n\r\n                        \r\n                {{userstatus.status}}\r\n                    \r\n                    \r\n                    </div>\r\n                </div>\r\n\r\n               \r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        {{userstatus.likesCounts}} likes | {{userstatus.commentsCounts}} Comments Delete Edit\r\n                    </div>\r\n\r\n\r\n                    <a [routerLink]=\"['/home/edit', userstatus._id]\">edit</a>\r\n                    \r\n\r\n                    \r\n                </div>\r\n            </div>\r\n            <div class=\"panel-footer mi-hi-40\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1\">\r\n                        \r\n                    <i class=\"fa fa-heart white-text border\"></i>\r\n                </div>\r\n                <div class=\"col-xs-11\">\r\n                    <app-comment-form [statusId]=\"userstatus._id\"></app-comment-form>\r\n                </div>\r\n                </div>\r\n                \r\n               \r\n\r\n            </div>\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <div *ngFor=\"let comments of userstatus.comments\">\r\n                            <div class=\"card\">\r\n                                {{comments.text}}\r\n                            </div>\r\n                            \r\n                        </div>\r\n                    </div>\r\n                     \r\n                </div>\r\n            </div>\r\n             \r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n<div class=\"col-md-2\"></div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var userstatus_service_1 = __webpack_require__(17);
	var CommentListComponent = (function () {
	    function CommentListComponent(statusService) {
	        this.statusService = statusService;
	    }
	    CommentListComponent.prototype.loadComments = function () {
	        // Get all status
	        //this.statusService.getComments(this.statusId)
	        //    .subscribe(
	        //    usercomments => this.usercomments = usercomments, //Bind to view
	        //    err => {
	        //        console.log(err);
	        //    });
	    };
	    CommentListComponent.prototype.ngOnInit = function () {
	        // Load comments
	        this.loadComments();
	    };
	    return CommentListComponent;
	}());
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Array)
	], CommentListComponent.prototype, "usercomments", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], CommentListComponent.prototype, "statusId", void 0);
	CommentListComponent = __decorate([
	    core_1.Component({
	        selector: 'app-comment-list',
	        template: __webpack_require__(35)
	    }),
	    __metadata("design:paramtypes", [userstatus_service_1.UserStatusService])
	], CommentListComponent);
	exports.CommentListComponent = CommentListComponent;
	//# sourceMappingURL=comment-list.component.js.map

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = ""

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var userstatus_service_1 = __webpack_require__(17);
	var emitter_service_1 = __webpack_require__(16);
	var CommentFormComponent = (function () {
	    function CommentFormComponent(commentService) {
	        this.commentService = commentService;
	        this.editing = false;
	    }
	    CommentFormComponent.prototype.submitComment = function (value) {
	        console.log(this.statusId);
	        console.log(value);
	        console.log("mahesh");
	        var commentOperation;
	        this.commentService
	            .addComment(this.statusId, value)
	            .subscribe(function (comments) { return comments; });
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
	        //  .subscribe(
	        //     comments=>{
	        //         EmitterService.get(this.statusId).emit(comments);
	        //         this.model = new Comments();
	        //         if(this.editing) 
	        //             this.editing = !this.editing;
	        //     },
	        //     err=>{
	        //         console.log(err);
	        //     });
	    };
	    CommentFormComponent.prototype.ngOnChanges = function () {
	        var _this = this;
	        emitter_service_1.EmitterService.get(this.statusId)
	            .subscribe(function (comment) {
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
	        template: __webpack_require__(37)
	    }),
	    __metadata("design:paramtypes", [userstatus_service_1.UserStatusService])
	], CommentFormComponent);
	exports.CommentFormComponent = CommentFormComponent;
	//# sourceMappingURL=comment-form.component.js.map

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = "<form #form=\"ngForm\" (ngSubmit)=\"submitComment(form.value)\">\r\n    <div class=\"form-group\">\r\n        <input type=\"text\" name=\"text\" ngModel />\r\n        <button type=\"submit\">Comment</button>\r\n    </div>\r\n</form>\r\n\r\n"

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var core_1 = __webpack_require__(3);
	var DomainExpertComponent = (function () {
	    function DomainExpertComponent() {
	    }
	    return DomainExpertComponent;
	}());
	DomainExpertComponent = __decorate([
	    core_1.Component({
	        selector: 'app-domainexpert',
	        template: __webpack_require__(39),
	    })
	], DomainExpertComponent);
	exports.DomainExpertComponent = DomainExpertComponent;
	//# sourceMappingURL=domainexpert.component.js.map

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-2\" ></div>\r\n        <div class=\"col-md-8\">\r\n            <div>\r\n                <app-post>\r\n                </app-post>\r\n            </div>\r\n            <div>\r\n                <app-feedexpert>               \r\n                </app-feedexpert>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-2\" hidden></div>\r\n    </div>\r\n\r\n</div>"

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var expert_service_1 = __webpack_require__(41);
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
	        template: __webpack_require__(42)
	    }),
	    __metadata("design:paramtypes", [expert_service_1.ExpertService])
	], FeedExpertComponent);
	exports.FeedExpertComponent = FeedExpertComponent;
	//# sourceMappingURL=feedexpert.component.js.map

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var http_1 = __webpack_require__(18);
	var Rx_1 = __webpack_require__(19);
	// Import RxJs required methods
	__webpack_require__(20);
	__webpack_require__(21);
	__webpack_require__(22);
	var ExpertService = (function () {
	    function ExpertService(_http) {
	        this._http = _http;
	        this.Url = "http://localhost:50353/api/expert";
	    }
	    ExpertService.prototype.getStatus = function () {
	        console.log(this.Url);
	        var a = this._http.get(this.Url)
	            .map(function (res) { return res.json(); })
	            .catch(this.handleError);
	        console.log(a);
	        return a;
	    };
	    ExpertService.prototype.handleError = function (error) {
	        // In a real world app, we might use a remote logging infrastructure
	        var errMsg;
	        if (error instanceof http_1.Response) {
	            var body = error.json() || '';
	            var err = body.error || JSON.stringify(body);
	            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
	        }
	        else {
	            errMsg = error.message ? error.message : error.toString();
	        }
	        console.error(errMsg);
	        return Rx_1.Observable.throw(errMsg);
	    };
	    //add a new status
	    ExpertService.prototype.addStatus = function (body) {
	        var bodyString = JSON.stringify(body); // Stringify payload
	        var headers = new http_1.Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
	        var options = new http_1.RequestOptions({ headers: headers }); // Create a request option
	        return this._http.post(this.Url, body, options) // ...using post request
	            .map(function (res) { return res.json(); }) // ...and calling .json() on the response to return data
	            .catch(this.handleError);
	    };
	    // Update a status
	    ExpertService.prototype.updateStatus = function (body) {
	        var bodyString = JSON.stringify(body); // Stringify payload
	        var headers = new http_1.Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
	        var options = new http_1.RequestOptions({ headers: headers }); // Create a request option
	        return this._http.put(this.Url + "/" + body['id'], body, options) // ...using put request
	            .map(function (res) { return res.json(); }) // ...and calling .json() on the response to return data
	            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); }); //...errors if any
	    };
	    // Delete a status
	    ExpertService.prototype.removeStatus = function (_id) {
	        return this._http.delete(this.Url + "/" + _id) // ...using put request
	            .map(function (res) { return res.json(); }) // ...and calling .json() on the response to return data
	            .catch(this.handleError); //...errors if any
	    };
	    ExpertService.prototype.addComment = function (comment) {
	        var commentString = JSON.stringify(comment); // Stringify payload
	        var headers = new http_1.Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
	        var options = new http_1.RequestOptions({ headers: headers }); // Create a request option
	        return this._http.post(this.Url + '/addcomments/', comment, options) // ...using post request
	            .map(function (res) { return res.json(); }) // ...and calling .json() on the response to return data
	            .catch(this.handleError);
	    };
	    return ExpertService;
	}());
	ExpertService = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [http_1.Http])
	], ExpertService);
	exports.ExpertService = ExpertService;
	//# sourceMappingURL=expert.service.js.map

/***/ },
/* 42 */
/***/ function(module, exports) {

	module.exports = "<!--<div *ngIf=\"loading\" class=\"loader\">Loading...</div>-->\r\n\r\n<app-feedboxexpert \r\n\r\n*ngFor=\"let status of expertuserstatus\" \r\n[status]=\"status\" >\r\n   abc\r\n</app-feedboxexpert>\r\n<div class=\"row\">\r\n    <div class=\"col-md-12 text-center\">\r\n        <a href=\"\" class=\"btn btn-block\"> load more stories</a>\r\n    </div>\r\n    \r\n</div>\r\n\r\n\r\n"

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var emitter_service_1 = __webpack_require__(16);
	var expert_service_1 = __webpack_require__(41);
	var userstatus_1 = __webpack_require__(24);
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
	        template: __webpack_require__(44),
	        styleUrls: [__webpack_require__(45)]
	    }),
	    __metadata("design:paramtypes", [expert_service_1.ExpertService])
	], FeedBoxExpertComponent);
	exports.FeedBoxExpertComponent = FeedBoxExpertComponent;
	//# sourceMappingURL=feedboxexpert.component.js.map

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = "\r\n<a [routerLink]=\"['/domainexpert']\">domain expert</a>\r\n\r\n<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading mi-hi-40\">\r\n        <span class=\"pull-left\">\r\n            {{status.type}}\r\n        </span>\r\n        <span class=\"pull-right\">\r\n            {{status.updateTime| dateFormat | date:'medium'}}\r\n            <!--|{{status.updatedAgo | dateFormat }} ago-->\r\n\r\n            \r\n\r\n        </span>\r\n        <div ngClass=\"dropdown\">\r\n            <button class=\"dropdown-toggle statusdrop\" data-toggle=\"dropdown\">\r\n                <span class=\"caret\"></span>\r\n            </button>\r\n            <ul  ngClass=\"dropdown-menu\">\r\n                <li><a href=\"\">Edit</a></li>\r\n                <li><a href=\"\">Delete</a></li>\r\n                <li><a href=\"\">Detail</a></li>\r\n            </ul>\r\n        </div>\r\n        \r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\"  >\r\n\r\n                <span *ngIf=\"!edit\">\r\n                    {{status.status}}\r\n                </span>\r\n\r\n                <span *ngIf=\"edit\">\r\n                   \r\n                        <form #updateForm=\"ngForm\" (ngSubmit)=\"updateStatus(updateForm.value);edit=!edit;\">\r\n                           <div>\r\n                               <textarea name=\"Status\" ngModel>{{status.status}}</textarea>\r\n                               <button type=\"submit\">Update</button>\r\n                           </div>\r\n                       </form>\r\n                       {{updateForm.value | json}}\r\n                   \r\n                </span>\r\n                \r\n            </div>\r\n\r\n            \r\n        </div>\r\n\r\n        <!--<div *ngFor=\"let comments of status.comments\">\r\n            {{comments.commentTime}}\r\n        </div>-->\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                {{status.likesCounts}} likes | {{status.commentsCounts}} Comments Delete Edit\r\n            </div>\r\n\r\n            <div class=\"col-md-12\">\r\n                <a [routerLink]=\"['/home/edit', status._id]\" class=\"btn btn-primary btn-xs \" (click)=\"edit = !edit\">\r\n\r\n                    <span *ngIf=\"!edit\">Edit</span>\r\n                </a>\r\n                <a [routerLink]=\"[ '/home/detail', status._id]\" class=\"btn btn-primary btn-xs\">Detail</a>\r\n            </div>\r\n            \r\n\r\n            \r\n\r\n            \r\n        </div>\r\n    </div>\r\n    <div class=\"panel-footer mi-hi-40\">\r\n        <div class=\"col-xs-2\">\r\n           <a (click)=\"toggleLike = !toggleLike; liketoggle = !liketoggle; \" [ngClass]=\"getClass()\" class=\"like\" >\r\n                <i class=\"fa fa-heart\"></i>\r\n                <span  *ngIf=\"!liketoggle\" (click)=\"increaseLike();\" class=\"btn btn-info btn-xs\" >like</span>\r\n                <span *ngIf=\"liketoggle\" (click)=\"decreaseLike();\"  class=\"btn btn-danger btn-xs\">unlike</span>\r\n               \r\n            </a> \r\n        </div>\r\n        <div class=\"col-xs-10\">\r\n            <app-comment-form [statusId]=\"status._id\"></app-comment-form>\r\n        </div>\r\n\r\n    </div>\r\n</div>"

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(46);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, ".mi-hi-40{\r\nmin-height:40px;\r\n}\r\n\r\n.fa-heart:hover,.fa-heart:focus{\r\n     color:black;           \r\n}", ""]);
	
	// exports


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var core_1 = __webpack_require__(3);
	var DateFormatPipe = (function () {
	    function DateFormatPipe() {
	    }
	    DateFormatPipe.prototype.transform = function (value, args) {
	        if (args && args[0] === 'local') {
	            return new Date(value).toLocaleString();
	        }
	        else if (value) {
	            return new Date(value);
	        }
	        return value;
	    };
	    return DateFormatPipe;
	}());
	DateFormatPipe = __decorate([
	    core_1.Pipe({
	        name: 'dateFormat'
	    })
	], DateFormatPipe);
	exports.DateFormatPipe = DateFormatPipe;
	//# sourceMappingURL=date-format.pipe.js.map

/***/ }
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZjQ1NzU3MjY0N2JkOGQxZDBhYmMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Jvb3Qtc2VydmVyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ6b25lLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvYXBwLm1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9mb3Jtc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL3JvdXRlclwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuY3NzP2RkYzMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3Bvc3QvcG9zdC5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9zZXJ2aWNlcy9lbWl0dGVyLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9zZXJ2aWNlcy91c2Vyc3RhdHVzLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvaHR0cFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvUnhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9jYXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZVwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvc2VydmljZXMvc3RhdHVzVHlwZS5zZXZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9tb2RlbHMvdXNlcnN0YXR1cy5qcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcG9zdC9wb3N0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9mZWVkL2ZlZWQuY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9mZWVkL2ZlZWQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZlZWRib3gvZmVlZGJveC5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZlZWRib3gvZmVlZGJveC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZmVlZGJveC9mZWVkYm94LmNvbXBvbmVudC5jc3M/ZmE4NSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZmVlZGJveC9mZWVkYm94LmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZlZWRib3gvZGV0YWlsc3RhdHVzL2RldGFpbHN0YXR1cy5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZlZWRib3gvZGV0YWlsc3RhdHVzL2RldGFpbHN0YXR1cy5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY29tbWVudC9jb21tZW50LWxpc3QuY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jb21tZW50L2NvbW1lbnQtbGlzdC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY29tbWVudC9jb21tZW50LWZvcm0uY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jb21tZW50L2NvbW1lbnQtZm9ybS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZG9tYWluZXhwZXJ0L2RvbWFpbmV4cGVydC5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2RvbWFpbmV4cGVydC9kb21haW5leHBlcnQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZlZWRFeHBlcnQvZmVlZGV4cGVydC5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9zZXJ2aWNlcy9leHBlcnQuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZmVlZEV4cGVydC9mZWVkZXhwZXJ0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9mZWVkYm94RXhwZXJ0L2ZlZWRib3hleHBlcnQuY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9mZWVkYm94RXhwZXJ0L2ZlZWRib3hleHBlcnQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZlZWRib3hFeHBlcnQvZmVlZGJveGV4cGVydC5jb21wb25lbnQuY3NzPzE3NjkiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZlZWRib3hFeHBlcnQvZmVlZGJveGV4cGVydC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvcGlwZXMvZGF0ZS1mb3JtYXQucGlwZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDdENBLHdCQUFzQztBQUN0Qyx3QkFBaUI7QUFDakIscUNBQStDO0FBQy9DLG1EQUF5RDtBQUN6RCwyQ0FBNkM7QUFFN0Msc0JBQWMsRUFBRSxDQUFDO0FBQ2pCLEtBQU0sUUFBUSxHQUFHLHdDQUFtQixFQUFFLENBQUM7QUFFdkMsb0JBQXlCLE1BQVc7S0FDaEMsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07U0FDL0IsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7YUFDbEMsSUFBSSxFQUFFLDJCQUEyQjthQUNqQyxVQUFVLEVBQUU7aUJBQ1IsT0FBTyxFQUFFLEdBQUc7aUJBQ1osVUFBVSxFQUFFLE1BQU0sQ0FBQyxHQUFHO2lCQUN0QixT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QixXQUFXLHVCQUF1QixncEJBQWdwQiwwQkFBMEIsd0tBQXdLLHFIQUFxSCw4UTs7Ozs7OztBQ0MvOUY7O0FBRUE7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBOzs7Ozs7O0FDUEE7QUFDQTs7O0FBR0E7QUFDQSxxQ0FBb0Msb0JBQW9CLEtBQUssd0NBQXdDLHFCQUFxQixnQkFBZ0I7O0FBRTFJOzs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNEMsUUFBUTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLDZDIiwiZmlsZSI6Im1haW4tc2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZjQ1NzU3MjY0N2JkOGQxZDBhYmMiLCJpbXBvcnQgJ2FuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHMnO1xyXG5pbXBvcnQgJ3pvbmUuanMnO1xyXG5pbXBvcnQgeyBlbmFibGVQcm9kTW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBwbGF0Zm9ybU5vZGVEeW5hbWljIH0gZnJvbSAnYW5ndWxhcjItdW5pdmVyc2FsJztcclxuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSAnLi9hcHAvYXBwLm1vZHVsZSc7XHJcblxyXG5lbmFibGVQcm9kTW9kZSgpO1xyXG5jb25zdCBwbGF0Zm9ybSA9IHBsYXRmb3JtTm9kZUR5bmFtaWMoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChwYXJhbXM6IGFueSkgOiBQcm9taXNlPHsgaHRtbDogc3RyaW5nLCBnbG9iYWxzPzogYW55IH0+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdFpvbmUgPSBab25lLmN1cnJlbnQuZm9yayh7XHJcbiAgICAgICAgICAgIG5hbWU6ICdhbmd1bGFyLXVuaXZlcnNhbCByZXF1ZXN0JyxcclxuICAgICAgICAgICAgcHJvcGVydGllczoge1xyXG4gICAgICAgICAgICAgICAgYmFzZVVybDogJy8nLFxyXG4gICAgICAgICAgICAgICAgcmVxdWVzdFVybDogcGFyYW1zLnVybCxcclxuICAgICAgICAgICAgICAgIG9yaWdpblVybDogcGFyYW1zLm9yaWdpbixcclxuICAgICAgICAgICAgICAgIHByZWJvb3Q6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogUmVuZGVyIGp1c3QgdGhlIDxhcHA+IGNvbXBvbmVudCBpbnN0ZWFkIG9mIHdyYXBwaW5nIGl0IGluc2lkZSBhbiBleHRyYSBIVE1MIGRvY3VtZW50XHJcbiAgICAgICAgICAgICAgICAvLyBXYWl0aW5nIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL3VuaXZlcnNhbC9pc3N1ZXMvMzQ3XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudDogJzwhRE9DVFlQRSBodG1sPjxodG1sPjxoZWFkPjwvaGVhZD48Ym9keT48YXBwPjwvYXBwPjwvYm9keT48L2h0bWw+J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbkhhbmRsZUVycm9yOiAocGFyZW50Wm9uZSwgY3VycmVudFpvbmUsIHRhcmdldFpvbmUsIGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBJZiBhbnkgZXJyb3Igb2NjdXJzIHdoaWxlIHJlbmRlcmluZyB0aGUgbW9kdWxlLCByZWplY3QgdGhlIHdob2xlIG9wZXJhdGlvblxyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiByZXF1ZXN0Wm9uZS5ydW48UHJvbWlzZTxzdHJpbmc+PigoKSA9PiBwbGF0Zm9ybS5zZXJpYWxpemVNb2R1bGUoQXBwTW9kdWxlKSkudGhlbihodG1sID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZSh7IGh0bWw6IGh0bWwgfSk7XHJcbiAgICAgICAgfSwgcmVqZWN0KTtcclxuICAgIH0pO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9ib290LXNlcnZlci50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzXCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiem9uZS5qc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInpvbmUuanNcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuZ3VsYXIyLXVuaXZlcnNhbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XHJcbnZhciBmb3Jtc18xID0gcmVxdWlyZShcIkBhbmd1bGFyL2Zvcm1zXCIpO1xyXG52YXIgcm91dGVyXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvcm91dGVyXCIpO1xyXG52YXIgYW5ndWxhcjJfdW5pdmVyc2FsXzEgPSByZXF1aXJlKFwiYW5ndWxhcjItdW5pdmVyc2FsXCIpO1xyXG52YXIgYXBwX2NvbXBvbmVudF8xID0gcmVxdWlyZShcIi4vY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudFwiKTtcclxudmFyIGhvbWVfY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnRcIik7XHJcbnZhciBwb3N0X2NvbXBvbmVudF8xID0gcmVxdWlyZShcIi4vY29tcG9uZW50cy9wb3N0L3Bvc3QuY29tcG9uZW50XCIpO1xyXG52YXIgZmVlZF9jb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvZmVlZC9mZWVkLmNvbXBvbmVudFwiKTtcclxudmFyIGZlZWRib3hfY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi9jb21wb25lbnRzL2ZlZWRib3gvZmVlZGJveC5jb21wb25lbnRcIik7XHJcbi8vaW1wb3J0IHsgRWRpdFN0YXR1c0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9mZWVkYm94L2VkaXRzdGF0dXMvZWRpdHN0YXR1cy5jb21wb25lbnQnO1xyXG52YXIgZGV0YWlsc3RhdHVzX2NvbXBvbmVudF8xID0gcmVxdWlyZShcIi4vY29tcG9uZW50cy9mZWVkYm94L2RldGFpbHN0YXR1cy9kZXRhaWxzdGF0dXMuY29tcG9uZW50XCIpO1xyXG52YXIgY29tbWVudF9saXN0X2NvbXBvbmVudF8xID0gcmVxdWlyZShcIi4vY29tcG9uZW50cy9jb21tZW50L2NvbW1lbnQtbGlzdC5jb21wb25lbnRcIik7XHJcbnZhciBjb21tZW50X2Zvcm1fY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi9jb21wb25lbnRzL2NvbW1lbnQvY29tbWVudC1mb3JtLmNvbXBvbmVudFwiKTtcclxudmFyIGRvbWFpbmV4cGVydF9jb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvZG9tYWluZXhwZXJ0L2RvbWFpbmV4cGVydC5jb21wb25lbnRcIik7XHJcbnZhciBmZWVkZXhwZXJ0X2NvbXBvbmVudF8xID0gcmVxdWlyZShcIi4vY29tcG9uZW50cy9mZWVkRXhwZXJ0L2ZlZWRleHBlcnQuY29tcG9uZW50XCIpO1xyXG52YXIgZmVlZGJveGV4cGVydF9jb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvZmVlZGJveEV4cGVydC9mZWVkYm94ZXhwZXJ0LmNvbXBvbmVudFwiKTtcclxudmFyIGRhdGVfZm9ybWF0X3BpcGVfMSA9IHJlcXVpcmUoXCIuL3BpcGVzL2RhdGUtZm9ybWF0LnBpcGVcIik7XHJcbnZhciB1c2Vyc3RhdHVzX3NlcnZpY2VfMSA9IHJlcXVpcmUoXCIuL3NlcnZpY2VzL3VzZXJzdGF0dXMuc2VydmljZVwiKTtcclxudmFyIHN0YXR1c1R5cGVfc2V2aWNlXzEgPSByZXF1aXJlKFwiLi9zZXJ2aWNlcy9zdGF0dXNUeXBlLnNldmljZVwiKTtcclxudmFyIGVtaXR0ZXJfc2VydmljZV8xID0gcmVxdWlyZShcIi4vc2VydmljZXMvZW1pdHRlci5zZXJ2aWNlXCIpO1xyXG52YXIgZXhwZXJ0X3NlcnZpY2VfMSA9IHJlcXVpcmUoXCIuL3NlcnZpY2VzL2V4cGVydC5zZXJ2aWNlXCIpO1xyXG52YXIgQXBwTW9kdWxlID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEFwcE1vZHVsZSgpIHtcclxuICAgIH1cclxuICAgIHJldHVybiBBcHBNb2R1bGU7XHJcbn0oKSk7XHJcbkFwcE1vZHVsZSA9IF9fZGVjb3JhdGUoW1xyXG4gICAgY29yZV8xLk5nTW9kdWxlKHtcclxuICAgICAgICBib290c3RyYXA6IFthcHBfY29tcG9uZW50XzEuQXBwQ29tcG9uZW50XSxcclxuICAgICAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICAgICAgYXBwX2NvbXBvbmVudF8xLkFwcENvbXBvbmVudCxcclxuICAgICAgICAgICAgaG9tZV9jb21wb25lbnRfMS5Ib21lQ29tcG9uZW50LFxyXG4gICAgICAgICAgICBwb3N0X2NvbXBvbmVudF8xLlBvc3RDb21wb25lbnQsXHJcbiAgICAgICAgICAgIGZlZWRfY29tcG9uZW50XzEuRmVlZENvbXBvbmVudCxcclxuICAgICAgICAgICAgZmVlZGJveF9jb21wb25lbnRfMS5GZWVkQm94Q29tcG9uZW50LFxyXG4gICAgICAgICAgICBjb21tZW50X2xpc3RfY29tcG9uZW50XzEuQ29tbWVudExpc3RDb21wb25lbnQsXHJcbiAgICAgICAgICAgIGNvbW1lbnRfZm9ybV9jb21wb25lbnRfMS5Db21tZW50Rm9ybUNvbXBvbmVudCxcclxuICAgICAgICAgICAgZGF0ZV9mb3JtYXRfcGlwZV8xLkRhdGVGb3JtYXRQaXBlLFxyXG4gICAgICAgICAgICBkb21haW5leHBlcnRfY29tcG9uZW50XzEuRG9tYWluRXhwZXJ0Q29tcG9uZW50LFxyXG4gICAgICAgICAgICBkZXRhaWxzdGF0dXNfY29tcG9uZW50XzEuRGV0YWlsU3RhdHVzQ29tcG9uZW50LFxyXG4gICAgICAgICAgICBmZWVkYm94ZXhwZXJ0X2NvbXBvbmVudF8xLkZlZWRCb3hFeHBlcnRDb21wb25lbnQsXHJcbiAgICAgICAgICAgIGZlZWRleHBlcnRfY29tcG9uZW50XzEuRmVlZEV4cGVydENvbXBvbmVudFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgaW1wb3J0czogW1xyXG4gICAgICAgICAgICBhbmd1bGFyMl91bml2ZXJzYWxfMS5Vbml2ZXJzYWxNb2R1bGUsXHJcbiAgICAgICAgICAgIGZvcm1zXzEuRm9ybXNNb2R1bGUsXHJcbiAgICAgICAgICAgIHJvdXRlcl8xLlJvdXRlck1vZHVsZS5mb3JSb290KFtcclxuICAgICAgICAgICAgICAgIHsgcGF0aDogJycsIHJlZGlyZWN0VG86ICdob21lJywgcGF0aE1hdGNoOiAnZnVsbCcgfSxcclxuICAgICAgICAgICAgICAgIHsgcGF0aDogJ2hvbWUnLCBjb21wb25lbnQ6IGhvbWVfY29tcG9uZW50XzEuSG9tZUNvbXBvbmVudCB9LFxyXG4gICAgICAgICAgICAgICAgeyBwYXRoOiAnaG9tZS9kb21haW5leHBlcnQnLCBjb21wb25lbnQ6IGRvbWFpbmV4cGVydF9jb21wb25lbnRfMS5Eb21haW5FeHBlcnRDb21wb25lbnQgfSxcclxuICAgICAgICAgICAgICAgIC8vZGV0YWlsIFxyXG4gICAgICAgICAgICAgICAgeyBwYXRoOiAnaG9tZS9kZXRhaWwvOmlkJywgY29tcG9uZW50OiBkZXRhaWxzdGF0dXNfY29tcG9uZW50XzEuRGV0YWlsU3RhdHVzQ29tcG9uZW50IH0sXHJcbiAgICAgICAgICAgICAgICB7IHBhdGg6ICcqKicsIHJlZGlyZWN0VG86ICdob21lJyB9XHJcbiAgICAgICAgICAgIF0pXHJcbiAgICAgICAgXSxcclxuICAgICAgICBwcm92aWRlcnM6IFt1c2Vyc3RhdHVzX3NlcnZpY2VfMS5Vc2VyU3RhdHVzU2VydmljZSwgZW1pdHRlcl9zZXJ2aWNlXzEuRW1pdHRlclNlcnZpY2UsIHN0YXR1c1R5cGVfc2V2aWNlXzEuU3RhdHVzVHlwZVNlcnZpY2UsIGV4cGVydF9zZXJ2aWNlXzEuRXhwZXJ0U2VydmljZV1cclxuICAgIH0pXHJcbl0sIEFwcE1vZHVsZSk7XHJcbmV4cG9ydHMuQXBwTW9kdWxlID0gQXBwTW9kdWxlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAubW9kdWxlLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9hcHAubW9kdWxlLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2Zvcm1zXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvZm9ybXNcIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9yb3V0ZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9yb3V0ZXJcIlxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xyXG52YXIgQXBwQ29tcG9uZW50ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEFwcENvbXBvbmVudCgpIHtcclxuICAgIH1cclxuICAgIHJldHVybiBBcHBDb21wb25lbnQ7XHJcbn0oKSk7XHJcbkFwcENvbXBvbmVudCA9IF9fZGVjb3JhdGUoW1xyXG4gICAgY29yZV8xLkNvbXBvbmVudCh7XHJcbiAgICAgICAgc2VsZWN0b3I6ICdhcHAnLFxyXG4gICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2FwcC5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgICAgIHN0eWxlczogW3JlcXVpcmUoJy4vYXBwLmNvbXBvbmVudC5jc3MnKV1cclxuICAgIH0pXHJcbl0sIEFwcENvbXBvbmVudCk7XHJcbmV4cG9ydHMuQXBwQ29tcG9uZW50ID0gQXBwQ29tcG9uZW50O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAuY29tcG9uZW50LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCJcXHJcXG5cXHJcXG48ZGl2IGNsYXNzPSdjb250YWluZXItZmx1aWQnPlxcclxcbiAgICA8ZGl2IGNsYXNzPSdyb3cnPlxcclxcbiAgICAgICAgPGRpdiA+XFxyXFxuICAgICAgICAgICAgPHJvdXRlci1vdXRsZXQ+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPC9yb3V0ZXItb3V0bGV0PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblxcclxcblxcclxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vYXBwLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxyXFxuICAgIC8qIE9uIHNtYWxsIHNjcmVlbnMsIHRoZSBuYXYgbWVudSBzcGFucyB0aGUgZnVsbCB3aWR0aCBvZiB0aGUgc2NyZWVuLiBMZWF2ZSBhIHNwYWNlIGZvciBpdC4gKi9cXHJcXG4gICAgLmJvZHktY29udGVudCB7XFxyXFxuICAgICAgICBwYWRkaW5nLXRvcDogNTBweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblx0dmFyIGxpc3QgPSBbXTtcclxuXHJcblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xyXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuXHRcdHZhciByZXN1bHQgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gdGhpc1tpXTtcclxuXHRcdFx0aWYoaXRlbVsyXSkge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgaXRlbVsxXSArIFwifVwiKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChpdGVtWzFdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdC5qb2luKFwiXCIpO1xyXG5cdH07XHJcblxyXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XHJcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xyXG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcclxuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xyXG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXHJcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XHJcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcclxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcclxuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cclxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcclxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcclxuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcclxuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cdHJldHVybiBsaXN0O1xyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XHJcbnZhciBIb21lQ29tcG9uZW50ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEhvbWVDb21wb25lbnQoKSB7XHJcbiAgICAgICAgdGhpcy50eXBlcyA9IFtcclxuICAgICAgICAgICAgJ0RvY3RvcicsICdQc3ljaG9sb2dpc3QnLCAnT3RoZXInXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuICAgIHJldHVybiBIb21lQ29tcG9uZW50O1xyXG59KCkpO1xyXG5Ib21lQ29tcG9uZW50ID0gX19kZWNvcmF0ZShbXHJcbiAgICBjb3JlXzEuQ29tcG9uZW50KHtcclxuICAgICAgICBzZWxlY3RvcjogJ2hvbWUnLFxyXG4gICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2hvbWUuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIH0pXHJcbl0sIEhvbWVDb21wb25lbnQpO1xyXG5leHBvcnRzLkhvbWVDb21wb25lbnQgPSBIb21lQ29tcG9uZW50O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1ob21lLmNvbXBvbmVudC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPCEtLTxwICpuZ0lmPVxcXCIhc3RhdHVzXFxcIj48ZW0+TG9hZGluZy4uLjwvZW0+PC9wPi0tPlxcclxcbjxuYXY+XFxyXFxuICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycnXVxcXCI+SG9tZTwvYT5cXHJcXG4gICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9ob21lL2RvbWFpbmV4cGVydCddXFxcIj5Eb21haW4gRXhwZXJ0PC9hPlxcclxcbjwvbmF2PlxcclxcblxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMlxcXCI+PC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtOFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGFwcC1wb3N0PlxcclxcbiAgICAgICAgICAgICAgICA8L2FwcC1wb3N0PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxhcHAtZmVlZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgICAgICA8L2FwcC1mZWVkPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMlxcXCI+PC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcblxcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbnZhciBjb3JlXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcclxudmFyIGVtaXR0ZXJfc2VydmljZV8xID0gcmVxdWlyZShcIi4uLy4uL3NlcnZpY2VzL2VtaXR0ZXIuc2VydmljZVwiKTtcclxudmFyIHVzZXJzdGF0dXNfc2VydmljZV8xID0gcmVxdWlyZShcIi4uLy4uL3NlcnZpY2VzL3VzZXJzdGF0dXMuc2VydmljZVwiKTtcclxudmFyIHN0YXR1c1R5cGVfc2V2aWNlXzEgPSByZXF1aXJlKFwiLi4vLi4vc2VydmljZXMvc3RhdHVzVHlwZS5zZXZpY2VcIik7XHJcbnZhciB1c2Vyc3RhdHVzXzEgPSByZXF1aXJlKFwiLi4vLi4vbW9kZWxzL3VzZXJzdGF0dXNcIik7XHJcbnZhciBQb3N0Q29tcG9uZW50ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFBvc3RDb21wb25lbnQoc3RhdHVzU2VydmljZSwgX3N0YXR1c1R5cGVTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0dXNTZXJ2aWNlID0gc3RhdHVzU2VydmljZTtcclxuICAgICAgICB0aGlzLl9zdGF0dXNUeXBlU2VydmljZSA9IF9zdGF0dXNUeXBlU2VydmljZTtcclxuICAgICAgICB0aGlzLnN0YXR1c1R5cGVzID0gW107XHJcbiAgICAgICAgLy8gTG9jYWwgcHJvcGVydGllc1xyXG4gICAgICAgIHRoaXMubW9kZWwgPSBuZXcgdXNlcnN0YXR1c18xLlVzZXJTdGF0dXMoKTtcclxuICAgICAgICB0aGlzLmVkaXRpbmcgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIFBvc3RDb21wb25lbnQucHJvdG90eXBlLnN1Ym1pdFN0YXR1cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIC8vIFZhcmlhYmxlIHRvIGhvbGQgYSByZWZlcmVuY2Ugb2YgYWRkQ29tbWVudC91cGRhdGVDb21tZW50XHJcbiAgICAgICAgdmFyIHN0YXR1c09wZXJhdGlvbjtcclxuICAgICAgICBzdGF0dXNPcGVyYXRpb24gPSB0aGlzLnN0YXR1c1NlcnZpY2UuYWRkU3RhdHVzKHRoaXMubW9kZWwpO1xyXG4gICAgICAgIC8vaWYgKCF0aGlzLmVkaXRpbmcpIHtcclxuICAgICAgICAvLyAgICAvLyBDcmVhdGUgYSBuZXcgc3RhdHVzXHJcbiAgICAgICAgLy8gICAgc3RhdHVzT3BlcmF0aW9uID0gdGhpcy5zdGF0dXNTZXJ2aWNlLmFkZFN0YXR1cyh0aGlzLm1vZGVsKVxyXG4gICAgICAgIC8vfVxyXG4gICAgICAgIC8vfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAvLyBVcGRhdGUgYW4gZXhpc3Rpbmcgc3RhdHVzXHJcbiAgICAgICAgLy8gICAgc3RhdHVzT3BlcmF0aW9uID0gdGhpcy5zdGF0dXNTZXJ2aWNlLnVwZGF0ZVN0YXR1cyh0aGlzLm1vZGVsKVxyXG4gICAgICAgIC8vfVxyXG4gICAgICAgIC8vIFN1YnNjcmliZSB0byBvYnNlcnZhYmxlXHJcbiAgICAgICAgc3RhdHVzT3BlcmF0aW9uLnN1YnNjcmliZShmdW5jdGlvbiAoc3RhdHVzKSB7XHJcbiAgICAgICAgICAgIC8vIEVtaXQgbGlzdCBldmVudFxyXG4gICAgICAgICAgICBlbWl0dGVyX3NlcnZpY2VfMS5FbWl0dGVyU2VydmljZS5nZXQoX3RoaXMubGlzdElkKS5lbWl0KHN0YXR1cyk7XHJcbiAgICAgICAgICAgIC8vIEVtcHR5IG1vZGVsXHJcbiAgICAgICAgICAgIF90aGlzLm1vZGVsID0gbmV3IHVzZXJzdGF0dXNfMS5Vc2VyU3RhdHVzKCk7XHJcbiAgICAgICAgICAgIC8vIFN3aXRjaCBlZGl0aW5nIHN0YXR1c1xyXG4gICAgICAgICAgICAvL2lmICh0aGlzLmVkaXRpbmcpIHRoaXMuZWRpdGluZyA9ICF0aGlzLmVkaXRpbmc7XHJcbiAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFBvc3RDb21wb25lbnQucHJvdG90eXBlLm5nT25Jbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgLy9DYWxsZWQgYWZ0ZXIgdGhlIGNvbnN0cnVjdG9yLCBpbml0aWFsaXppbmcgaW5wdXQgcHJvcGVydGllcywgYW5kIHRoZSBmaXJzdCBjYWxsIHRvIG5nT25DaGFuZ2VzLlxyXG4gICAgICAgIC8vQWRkICdpbXBsZW1lbnRzIE9uSW5pdCcgdG8gdGhlIGNsYXNzLlxyXG4gICAgICAgIHRoaXMuX3N0YXR1c1R5cGVTZXJ2aWNlLmdldFN0YXR1c1R5cGUoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uIChyZXNTdGF0dXNUeXBlRGF0YSkgeyByZXR1cm4gX3RoaXMuc3RhdHVzVHlwZXMgPSByZXNTdGF0dXNUeXBlRGF0YTsgfSk7XHJcbiAgICB9O1xyXG4gICAgUG9zdENvbXBvbmVudC5wcm90b3R5cGUubmdPbkNoYW5nZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAvLyBMaXN0ZW4gdG8gdGhlICdlZGl0J2VtaXR0ZWQgZXZlbnQgc28gYXMgcG9wdWxhdGUgdGhlIG1vZGVsXHJcbiAgICAgICAgLy8gd2l0aCB0aGUgZXZlbnQgcGF5bG9hZFxyXG4gICAgICAgIGVtaXR0ZXJfc2VydmljZV8xLkVtaXR0ZXJTZXJ2aWNlLmdldCh0aGlzLmVkaXRJZCkuc3Vic2NyaWJlKGZ1bmN0aW9uIChzdGF0dXMpIHtcclxuICAgICAgICAgICAgX3RoaXMubW9kZWwgPSBzdGF0dXM7XHJcbiAgICAgICAgICAgIF90aGlzLmVkaXRpbmcgPSB0cnVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBQb3N0Q29tcG9uZW50O1xyXG59KCkpO1xyXG5fX2RlY29yYXRlKFtcclxuICAgIGNvcmVfMS5JbnB1dCgpLFxyXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcclxuXSwgUG9zdENvbXBvbmVudC5wcm90b3R5cGUsIFwiZWRpdElkXCIsIHZvaWQgMCk7XHJcbl9fZGVjb3JhdGUoW1xyXG4gICAgY29yZV8xLklucHV0KCksXHJcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxyXG5dLCBQb3N0Q29tcG9uZW50LnByb3RvdHlwZSwgXCJsaXN0SWRcIiwgdm9pZCAwKTtcclxuUG9zdENvbXBvbmVudCA9IF9fZGVjb3JhdGUoW1xyXG4gICAgY29yZV8xLkNvbXBvbmVudCh7XHJcbiAgICAgICAgc2VsZWN0b3I6ICdhcHAtcG9zdCcsXHJcbiAgICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vcG9zdC5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgICAgIHByb3ZpZGVyczogW3VzZXJzdGF0dXNfc2VydmljZV8xLlVzZXJTdGF0dXNTZXJ2aWNlLCBzdGF0dXNUeXBlX3NldmljZV8xLlN0YXR1c1R5cGVTZXJ2aWNlXVxyXG4gICAgfSksXHJcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW3VzZXJzdGF0dXNfc2VydmljZV8xLlVzZXJTdGF0dXNTZXJ2aWNlLCBzdGF0dXNUeXBlX3NldmljZV8xLlN0YXR1c1R5cGVTZXJ2aWNlXSlcclxuXSwgUG9zdENvbXBvbmVudCk7XHJcbmV4cG9ydHMuUG9zdENvbXBvbmVudCA9IFBvc3RDb21wb25lbnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBvc3QuY29tcG9uZW50LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3Bvc3QvcG9zdC5jb21wb25lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG4vKiAqICogLi9hcHAvZW1pdHRlci5zZXJ2aWNlLnRzICogKiAqL1xyXG4vLyBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9zYXN4YVxyXG4vLyBJbXBvcnRzXHJcbnZhciBjb3JlXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcclxudmFyIEVtaXR0ZXJTZXJ2aWNlID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEVtaXR0ZXJTZXJ2aWNlKCkge1xyXG4gICAgfVxyXG4gICAgLy8gU2V0IGEgbmV3IGV2ZW50IGluIHRoZSBzdG9yZSB3aXRoIGEgZ2l2ZW4gSURcclxuICAgIC8vIGFzIGtleVxyXG4gICAgRW1pdHRlclNlcnZpY2UuZ2V0ID0gZnVuY3Rpb24gKElEKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9lbWl0dGVyc1tJRF0pXHJcbiAgICAgICAgICAgIHRoaXMuX2VtaXR0ZXJzW0lEXSA9IG5ldyBjb3JlXzEuRXZlbnRFbWl0dGVyKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VtaXR0ZXJzW0lEXTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gRW1pdHRlclNlcnZpY2U7XHJcbn0oKSk7XHJcbi8vIEV2ZW50IHN0b3JlXHJcbkVtaXR0ZXJTZXJ2aWNlLl9lbWl0dGVycyA9IHt9O1xyXG5FbWl0dGVyU2VydmljZSA9IF9fZGVjb3JhdGUoW1xyXG4gICAgY29yZV8xLkluamVjdGFibGUoKVxyXG5dLCBFbWl0dGVyU2VydmljZSk7XHJcbmV4cG9ydHMuRW1pdHRlclNlcnZpY2UgPSBFbWl0dGVyU2VydmljZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZW1pdHRlci5zZXJ2aWNlLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9zZXJ2aWNlcy9lbWl0dGVyLnNlcnZpY2UuanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxuLy9pbXBvcnQgeyBMaWtlcyB9IGZyb20gJy4vLi4vbW9kZWxzL2xpa2VzJztcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xyXG52YXIgaHR0cF8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2h0dHBcIik7XHJcbnZhciBSeF8xID0gcmVxdWlyZShcInJ4anMvUnhcIik7XHJcbi8vIEltcG9ydCBSeEpzIHJlcXVpcmVkIG1ldGhvZHNcclxucmVxdWlyZShcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiKTtcclxucmVxdWlyZShcInJ4anMvYWRkL29wZXJhdG9yL2NhdGNoXCIpO1xyXG5yZXF1aXJlKFwicnhqcy9hZGQvb3BlcmF0b3IvdG9Qcm9taXNlXCIpO1xyXG52YXIgVXNlclN0YXR1c1NlcnZpY2UgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gVXNlclN0YXR1c1NlcnZpY2UoaHR0cCkge1xyXG4gICAgICAgIHRoaXMuaHR0cCA9IGh0dHA7XHJcbiAgICAgICAgdGhpcy5VcmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6NTAzNTMvYXBpL2ZlZWRcIjtcclxuICAgIH1cclxuICAgIFVzZXJTdGF0dXNTZXJ2aWNlLnByb3RvdHlwZS5oYW5kbGVFcnJvciA9IGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgIC8vIEluIGEgcmVhbCB3b3JsZCBhcHAsIHdlIG1pZ2h0IHVzZSBhIHJlbW90ZSBsb2dnaW5nIGluZnJhc3RydWN0dXJlXHJcbiAgICAgICAgdmFyIGVyck1zZztcclxuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBodHRwXzEuUmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgdmFyIGJvZHkgPSBlcnJvci5qc29uKCkgfHwgJyc7XHJcbiAgICAgICAgICAgIHZhciBlcnIgPSBib2R5LmVycm9yIHx8IEpTT04uc3RyaW5naWZ5KGJvZHkpO1xyXG4gICAgICAgICAgICBlcnJNc2cgPSBlcnJvci5zdGF0dXMgKyBcIiAtIFwiICsgKGVycm9yLnN0YXR1c1RleHQgfHwgJycpICsgXCIgXCIgKyBlcnI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBlcnJNc2cgPSBlcnJvci5tZXNzYWdlID8gZXJyb3IubWVzc2FnZSA6IGVycm9yLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyTXNnKTtcclxuICAgICAgICByZXR1cm4gUnhfMS5PYnNlcnZhYmxlLnRocm93KGVyck1zZyk7XHJcbiAgICB9O1xyXG4gICAgVXNlclN0YXR1c1NlcnZpY2UucHJvdG90eXBlLmdldFN0YXR1cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLlVybClcclxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAocmVzKSB7IHJldHVybiByZXMuanNvbigpOyB9KVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgICB9O1xyXG4gICAgVXNlclN0YXR1c1NlcnZpY2UucHJvdG90eXBlLnN0YXR1c0RldGFpbCA9IGZ1bmN0aW9uIChfaWQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLlVybCArICcvJyArIF9pZClcclxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAocmVzKSB7IHJldHVybiByZXMuanNvbigpOyB9KVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgICB9O1xyXG4gICAgVXNlclN0YXR1c1NlcnZpY2UucHJvdG90eXBlLmRpc0xpa2UgPSBmdW5jdGlvbiAoX2lkKSB7XHJcbiAgICAgICAgdmFyIGJvZHlTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShfaWQpOyAvLyBTdHJpbmdpZnkgcGF5bG9hZFxyXG4gICAgICAgIHZhciBoZWFkZXJzID0gbmV3IGh0dHBfMS5IZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTsgLy8gLi4uIFNldCBjb250ZW50IHR5cGUgdG8gSlNPTlxyXG4gICAgICAgIHZhciBvcHRpb25zID0gbmV3IGh0dHBfMS5SZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7IC8vIENyZWF0ZSBhIHJlcXVlc3Qgb3B0aW9uXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuVXJsICsgJy8nICsgX2lkICsgJy91bmxpa2UnLCBfaWQsIG9wdGlvbnMpXHJcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzLmpzb24oKTsgfSlcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgfTtcclxuICAgIFVzZXJTdGF0dXNTZXJ2aWNlLnByb3RvdHlwZS5hZGRMaWtlID0gZnVuY3Rpb24gKF9pZCkge1xyXG4gICAgICAgIHZhciBib2R5U3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoX2lkKTsgLy8gU3RyaW5naWZ5IHBheWxvYWRcclxuICAgICAgICB2YXIgaGVhZGVycyA9IG5ldyBodHRwXzEuSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7IC8vIC4uLiBTZXQgY29udGVudCB0eXBlIHRvIEpTT05cclxuICAgICAgICB2YXIgb3B0aW9ucyA9IG5ldyBodHRwXzEuUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pOyAvLyBDcmVhdGUgYSByZXF1ZXN0IG9wdGlvblxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLlVybCArICcvJyArIF9pZCArICcvbGlrZScsIF9pZCwgb3B0aW9ucylcclxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAocmVzKSB7IHJldHVybiByZXMuanNvbigpOyB9KVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgICB9O1xyXG4gICAgLy8gYWRkTGlrZShfaWQ6c3RyaW5nKTpPYnNlcnZhYmxlPGxpa2VzW10+e1xyXG4gICAgLy8gICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmxpa2VVcmwrJy8nKyBfaWQgKyAnL2xpa2UnKVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy9hZGQgYSBuZXcgc3RhdHVzXHJcbiAgICBVc2VyU3RhdHVzU2VydmljZS5wcm90b3R5cGUuYWRkU3RhdHVzID0gZnVuY3Rpb24gKGJvZHkpIHtcclxuICAgICAgICB2YXIgYm9keVN0cmluZyA9IEpTT04uc3RyaW5naWZ5KGJvZHkpOyAvLyBTdHJpbmdpZnkgcGF5bG9hZFxyXG4gICAgICAgIHZhciBoZWFkZXJzID0gbmV3IGh0dHBfMS5IZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTsgLy8gLi4uIFNldCBjb250ZW50IHR5cGUgdG8gSlNPTlxyXG4gICAgICAgIHZhciBvcHRpb25zID0gbmV3IGh0dHBfMS5SZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7IC8vIENyZWF0ZSBhIHJlcXVlc3Qgb3B0aW9uXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuVXJsLCBib2R5LCBvcHRpb25zKSAvLyAuLi51c2luZyBwb3N0IHJlcXVlc3RcclxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAocmVzKSB7IHJldHVybiByZXMuanNvbigpOyB9KSAvLyAuLi5hbmQgY2FsbGluZyAuanNvbigpIG9uIHRoZSByZXNwb25zZSB0byByZXR1cm4gZGF0YVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgICB9O1xyXG4gICAgLy8gVXBkYXRlIGEgc3RhdHVzXHJcbiAgICBVc2VyU3RhdHVzU2VydmljZS5wcm90b3R5cGUudXBkYXRlU3RhdHVzID0gZnVuY3Rpb24gKGlkLCBib2R5KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coaWQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdtYWhlc2gnKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhib2R5KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhib2R5LlN0YXR1cyk7XHJcbiAgICAgICAgdmFyIGJvZHlTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShib2R5KTsgLy8gU3RyaW5naWZ5IHBheWxvYWRcclxuICAgICAgICBjb25zb2xlLmxvZyhib2R5U3RyaW5nKTtcclxuICAgICAgICB2YXIgaGVhZGVycyA9IG5ldyBodHRwXzEuSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7IC8vIC4uLiBTZXQgY29udGVudCB0eXBlIHRvIEpTT05cclxuICAgICAgICB2YXIgb3B0aW9ucyA9IG5ldyBodHRwXzEuUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pOyAvLyBDcmVhdGUgYSByZXF1ZXN0IG9wdGlvblxyXG4gICAgICAgIHZhciBlZGl0ZWRUZXh0ID0gYm9keS5TdGF0dXM7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQodGhpcy5VcmwgKyAnL2VkaXQnICsgJy8nICsgaWQgKyAnLycgKyBlZGl0ZWRUZXh0LCBlZGl0ZWRUZXh0KSAvLyAuLi51c2luZyBwdXQgcmVxdWVzdFxyXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChyZXMpIHsgcmV0dXJuIHJlcy5qc29uKCk7IH0pIC8vIC4uLmFuZCBjYWxsaW5nIC5qc29uKCkgb24gdGhlIHJlc3BvbnNlIHRvIHJldHVybiBkYXRhXHJcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHsgcmV0dXJuIFJ4XzEuT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkuZXJyb3IgfHwgJ1NlcnZlciBlcnJvcicpOyB9KTsgLy8uLi5lcnJvcnMgaWYgYW55XHJcbiAgICB9O1xyXG4gICAgLy8gZGV0YWlsIG9mIHN0YXR1cyBcclxuICAgIC8vIERlbGV0ZSBhIHN0YXR1c1xyXG4gICAgVXNlclN0YXR1c1NlcnZpY2UucHJvdG90eXBlLnJlbW92ZVN0YXR1cyA9IGZ1bmN0aW9uIChfaWQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZSh0aGlzLlVybCArIFwiL1wiICsgX2lkKSAvLyAuLi51c2luZyBwdXQgcmVxdWVzdFxyXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChyZXMpIHsgcmV0dXJuIHJlcy5qc29uKCk7IH0pIC8vIC4uLmFuZCBjYWxsaW5nIC5qc29uKCkgb24gdGhlIHJlc3BvbnNlIHRvIHJldHVybiBkYXRhXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTsgLy8uLi5lcnJvcnMgaWYgYW55XHJcbiAgICB9O1xyXG4gICAgLy8gQWRkIGEgbmV3IGNvbW1lbnRcclxuICAgIFVzZXJTdGF0dXNTZXJ2aWNlLnByb3RvdHlwZS5hZGRDb21tZW50ID0gZnVuY3Rpb24gKGlkLCBib2R5KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coaWQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGJvZHkpO1xyXG4gICAgICAgIHZhciBjb21tZW50c1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KGJvZHkpOyAvLyBTdHJpbmdpZnkgcGF5bG9hZFxyXG4gICAgICAgIHZhciBoZWFkZXJzID0gbmV3IGh0dHBfMS5IZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTsgLy8gLi4uIFNldCBjb250ZW50IHR5cGUgdG8gSlNPTlxyXG4gICAgICAgIHZhciBvcHRpb25zID0gbmV3IGh0dHBfMS5SZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7IC8vIENyZWF0ZSBhIHJlcXVlc3Qgb3B0aW9uXHJcbiAgICAgICAgY29uc29sZS5sb2coYm9keSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coaWQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibWFoZXNoXCIpO1xyXG4gICAgICAgIHZhciBjb21tZW50VGV4dCA9IGJvZHkudGV4dDtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5VcmwgKyAnLycgKyBpZCArICcvJyArIGNvbW1lbnRUZXh0LCBjb21tZW50VGV4dCwgaGVhZGVycykgLy8gLi4udXNpbmcgcG9zdCByZXF1ZXN0XHJcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzLmpzb24oKTsgfSkgLy8gLi4uYW5kIGNhbGxpbmcgLmpzb24oKSBvbiB0aGUgcmVzcG9uc2UgdG8gcmV0dXJuIGRhdGFcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpOyAvLy4uLmVycm9ycyBpZiBhbnlcclxuICAgIH07XHJcbiAgICByZXR1cm4gVXNlclN0YXR1c1NlcnZpY2U7XHJcbn0oKSk7XHJcblVzZXJTdGF0dXNTZXJ2aWNlID0gX19kZWNvcmF0ZShbXHJcbiAgICBjb3JlXzEuSW5qZWN0YWJsZSgpLFxyXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtodHRwXzEuSHR0cF0pXHJcbl0sIFVzZXJTdGF0dXNTZXJ2aWNlKTtcclxuZXhwb3J0cy5Vc2VyU3RhdHVzU2VydmljZSA9IFVzZXJTdGF0dXNTZXJ2aWNlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2Vyc3RhdHVzLnNlcnZpY2UuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL3NlcnZpY2VzL3VzZXJzdGF0dXMuc2VydmljZS5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvaHR0cFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2h0dHBcIlxuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9SeFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anMvUnhcIlxuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCJcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4anMvYWRkL29wZXJhdG9yL2NhdGNoXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2hcIlxuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9hZGQvb3BlcmF0b3IvdG9Qcm9taXNlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvdG9Qcm9taXNlXCJcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vb2JzZXJ2YWJsZSBcclxuXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG4vL2dldHRpbmcgc3RhdHVzIHR5cGUgXHJcbi8vZ2V0KCkgZnJvbSB1cmxcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xyXG52YXIgaHR0cF8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2h0dHBcIik7XHJcbnZhciBTdGF0dXNUeXBlU2VydmljZSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBTdGF0dXNUeXBlU2VydmljZShfaHR0cCkge1xyXG4gICAgICAgIHRoaXMuX2h0dHAgPSBfaHR0cDtcclxuICAgICAgICB0aGlzLl91cmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6NTAzNTMvYXBpL3N0YXR1c3R5cGVcIjtcclxuICAgIH1cclxuICAgIFN0YXR1c1R5cGVTZXJ2aWNlLnByb3RvdHlwZS5nZXRTdGF0dXNUeXBlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldCh0aGlzLl91cmwpXHJcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHJlc3BvbnNlKSB7IHJldHVybiByZXNwb25zZS5qc29uKCk7IH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBTdGF0dXNUeXBlU2VydmljZTtcclxufSgpKTtcclxuU3RhdHVzVHlwZVNlcnZpY2UgPSBfX2RlY29yYXRlKFtcclxuICAgIGNvcmVfMS5JbmplY3RhYmxlKCksXHJcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW2h0dHBfMS5IdHRwXSlcclxuXSwgU3RhdHVzVHlwZVNlcnZpY2UpO1xyXG5leHBvcnRzLlN0YXR1c1R5cGVTZXJ2aWNlID0gU3RhdHVzVHlwZVNlcnZpY2U7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN0YXR1c1R5cGUuc2V2aWNlLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9zZXJ2aWNlcy9zdGF0dXNUeXBlLnNldmljZS5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBVc2VyU3RhdHVzID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFVzZXJTdGF0dXMoKSB7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gVXNlclN0YXR1cztcclxufSgpKTtcclxuZXhwb3J0cy5Vc2VyU3RhdHVzID0gVXNlclN0YXR1cztcclxudmFyIFN0YXR1c1R5cGUgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gU3RhdHVzVHlwZShpZCwgdHlwZSkge1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFN0YXR1c1R5cGU7XHJcbn0oKSk7XHJcbmV4cG9ydHMuU3RhdHVzVHlwZSA9IFN0YXR1c1R5cGU7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZXJzdGF0dXMuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL21vZGVscy91c2Vyc3RhdHVzLmpzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGZvcm0gI2Zvcm09XFxcIm5nRm9ybVxcXCIgKG5nU3VibWl0KT1cXFwic3VibWl0U3RhdHVzKClcXFwiIGNsYXNzPVxcXCJmb3JtLWhvcml6b250YWwgYm9yZGVyZWQtZ3JvdXBcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbCBib3JkZXJcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtaGVhZGluZyBub21hcmdpbnRcXFwiPlxcclxcbiAgICAgICAgICAgIDxhIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHQgbm9ib3JkZXIgXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtY2FtZXJhXFxcIj48L2k+IFBob3RvL1ZpZGVvPC9hPiB8XFxyXFxuICAgICAgICAgICAgPGEgaHJlZj1cXFwiI1xcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdCBub2JvcmRlclxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLXBob3RvXFxcIj48L2k+IFBob3RvL1ZpZGVvIEFsYnVtPC9hPlxcclxcbiAgICAgICAgICAgIDxociBjbGFzcz1cXFwibm9tYXJnaW50IG5vbWFyZ2luYlxcXCIgLz5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtYm9keSBcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvdyBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cCBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XFxcIlxcXCIgd2lkdGg9XFxcIjQ1XFxcIiBoZWlnaHQ9XFxcIjQ1XFxcIiBhbHQ9XFxcIlxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTFcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XFxcImZvcm0tY29udHJvbCBub2JvcmRlclxcXCIgcm93cz1cXFwiMlxcXCIgcGxhY2Vob2xkZXI9XFxcIldoYXRzIG9uIHlvdXIgbWluZD9cXFwiIFsobmdNb2RlbCldPVxcXCJtb2RlbC5zdGF0dXNcXFwiIG5hbWU9XFxcInRleHRcXFwiIHJlcXVpcmVkPjwvdGV4dGFyZWE+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxociAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cCBub21hcmdpbmJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy02XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLWFzZGZhc2RmYXNkZlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgKm5nRm9yPVxcXCJsZXQgc3RhdHVzVHlwZSBvZiBzdGF0dXNUeXBlc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7c3RhdHVzVHlwZS50eXBlfX1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+LS0+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08c2VsZWN0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wgcHVsbC1sZWZ0XFxcIiBbKG5nTW9kZWwpXT1cXFwibW9kZWwudHlwZVxcXCIgbmFtZT1cXFwidHlwZVxcXCIgcmVxdWlyZWQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cXFwibGV0IHN0YXR1c1R5cGUgb2Ygc3RhdHVzVHlwZXNcXFwiID57e3N0YXR1c1R5cGUgfCBqc29ufX08L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+LS0+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XFxcImZvcm0tY29udHJvbCBwdWxsLWxlZnRcXFwiIFsobmdNb2RlbCldPVxcXCJtb2RlbC50eXBlXFxcIiBuYW1lPVxcXCJ0eXBlXFxcIiByZXF1aXJlZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVxcXCJsZXQgdHlwZSBvZiBzdGF0dXNUeXBlc1xcXCI+e3t0eXBlLm5hbWV9fTwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtNlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgW2Rpc2FibGVkXT1cXFwiZm9ybS5pbnZhbGlkXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IHB1bGwtcmlnaHQgYnRuLXNtXFxcIj5Qb3N0PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9mb3JtPlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcG9zdC9wb3N0LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbnZhciByb3V0ZXJfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9yb3V0ZXJcIik7XHJcbi8vIEltcG9ydHNcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xyXG52YXIgdXNlcnN0YXR1c19zZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi4vLi4vc2VydmljZXMvdXNlcnN0YXR1cy5zZXJ2aWNlXCIpO1xyXG52YXIgRmVlZENvbXBvbmVudCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBGZWVkQ29tcG9uZW50KHN0YXR1c1NlcnZpY2UsIHJvdXRlcikge1xyXG4gICAgICAgIHRoaXMuc3RhdHVzU2VydmljZSA9IHN0YXR1c1NlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XHJcbiAgICB9XHJcbiAgICBGZWVkQ29tcG9uZW50LnByb3RvdHlwZS5sb2FkU3RhdHVzcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIC8vIEdldCBhbGwgc3RhdHVzXHJcbiAgICAgICAgdGhpcy5zdGF0dXNTZXJ2aWNlLmdldFN0YXR1cygpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKHVzZXJzdGF0dXMpIHsgcmV0dXJuIF90aGlzLnVzZXJzdGF0dXMgPSB1c2Vyc3RhdHVzOyB9LCAvL0JpbmQgdG8gdmlld1xyXG4gICAgICAgIGZ1bmN0aW9uICgvL0JpbmQgdG8gdmlld1xyXG4gICAgICAgICAgICBlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBGZWVkQ29tcG9uZW50LnByb3RvdHlwZS5uZ09uSW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBMb2FkIHN0YXR1c1xyXG4gICAgICAgIHRoaXMubG9hZFN0YXR1c3MoKTtcclxuICAgIH07XHJcbiAgICAvLyAgIGdvdG9EZXRhaWwodXNlcnN0YXR1czogVXNlclN0YXR1cyk6IHZvaWQge1xyXG4gICAgLy8gICAgIGxldCBsaW5rID0gWycvZGV0YWlsJywgdXNlcnN0YXR1cy5pZF07XHJcbiAgICAvLyAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUobGluayk7XHJcbiAgICAvLyAgIH1cclxuICAgIEZlZWRDb21wb25lbnQucHJvdG90eXBlLm5nT25DaGFuZ2VzID0gZnVuY3Rpb24gKGNoYW5nZXMpIHtcclxuICAgICAgICAvLyBMaXN0ZW4gdG8gdGhlICdsaXN0J2VtaXR0ZWQgZXZlbnQgc28gYXMgcG9wdWxhdGUgdGhlIG1vZGVsXHJcbiAgICAgICAgLy8gd2l0aCB0aGUgZXZlbnQgcGF5bG9hZFxyXG4gICAgICAgIGlmIChjaGFuZ2VzWydzdGF0dXMnXSkge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRTdGF0dXNzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEVtaXR0ZXJTZXJ2aWNlLmdldCh0aGlzLmxpc3RJZCkuc3Vic2NyaWJlKCh1c2Vyc3RhdHVzOiBVc2VyU3RhdHVzW10pID0+IHsgdGhpcy51c2Vyc3RhdHVzID0gdXNlcnN0YXR1cyB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gRmVlZENvbXBvbmVudDtcclxufSgpKTtcclxuX19kZWNvcmF0ZShbXHJcbiAgICBjb3JlXzEuSW5wdXQoKSxcclxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpXHJcbl0sIEZlZWRDb21wb25lbnQucHJvdG90eXBlLCBcImxpc3RJZFwiLCB2b2lkIDApO1xyXG5fX2RlY29yYXRlKFtcclxuICAgIGNvcmVfMS5JbnB1dCgpLFxyXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcclxuXSwgRmVlZENvbXBvbmVudC5wcm90b3R5cGUsIFwiZWRpdElkXCIsIHZvaWQgMCk7XHJcbkZlZWRDb21wb25lbnQgPSBfX2RlY29yYXRlKFtcclxuICAgIGNvcmVfMS5Db21wb25lbnQoe1xyXG4gICAgICAgIHNlbGVjdG9yOiAnYXBwLWZlZWQnLFxyXG4gICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2ZlZWQuY29tcG9uZW50Lmh0bWwnKVxyXG4gICAgfSksXHJcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW3VzZXJzdGF0dXNfc2VydmljZV8xLlVzZXJTdGF0dXNTZXJ2aWNlLFxyXG4gICAgICAgIHJvdXRlcl8xLlJvdXRlcl0pXHJcbl0sIEZlZWRDb21wb25lbnQpO1xyXG5leHBvcnRzLkZlZWRDb21wb25lbnQgPSBGZWVkQ29tcG9uZW50O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1mZWVkLmNvbXBvbmVudC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9mZWVkL2ZlZWQuY29tcG9uZW50LmpzXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPCEtLTxkaXYgKm5nSWY9XFxcImxvYWRpbmdcXFwiIGNsYXNzPVxcXCJsb2FkZXJcXFwiPkxvYWRpbmcuLi48L2Rpdj4tLT5cXHJcXG5cXHJcXG48YXBwLWZlZWRib3ggXFxyXFxuW2xpc3RJZF09XFxcImxpc3RJZFxcXCIgXFxyXFxuKm5nRm9yPVxcXCJsZXQgc3RhdHVzIG9mIHVzZXJzdGF0dXNcXFwiIFxcclxcbltzdGF0dXNdPVxcXCJzdGF0dXNcXFwiID5cXHJcXG4gICBcXHJcXG48L2FwcC1mZWVkYm94PlxcclxcbjxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMiB0ZXh0LWNlbnRlclxcXCI+XFxyXFxuICAgICAgICA8YSBocmVmPVxcXCJcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWJsb2NrXFxcIj4gbG9hZCBtb3JlIHN0b3JpZXM8L2E+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICBcXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG5cXHJcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZlZWQvZmVlZC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XHJcbnZhciBlbWl0dGVyX3NlcnZpY2VfMSA9IHJlcXVpcmUoXCIuLi8uLi9zZXJ2aWNlcy9lbWl0dGVyLnNlcnZpY2VcIik7XHJcbnZhciB1c2Vyc3RhdHVzX3NlcnZpY2VfMSA9IHJlcXVpcmUoXCIuLi8uLi9zZXJ2aWNlcy91c2Vyc3RhdHVzLnNlcnZpY2VcIik7XHJcbnZhciB1c2Vyc3RhdHVzXzEgPSByZXF1aXJlKFwiLi4vLi4vbW9kZWxzL3VzZXJzdGF0dXNcIik7XHJcbnZhciBGZWVkQm94Q29tcG9uZW50ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEZlZWRCb3hDb21wb25lbnQoc3RhdHVzU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuc3RhdHVzU2VydmljZSA9IHN0YXR1c1NlcnZpY2U7XHJcbiAgICB9XHJcbiAgICBGZWVkQm94Q29tcG9uZW50LnByb3RvdHlwZS5pbmNyZWFzZUxpa2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGEgPSB0aGlzLnN0YXR1cy5faWQ7XHJcbiAgICAgICAgdGhpcy5zdGF0dXNTZXJ2aWNlXHJcbiAgICAgICAgICAgIC5hZGRMaWtlKGEpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKHN0YXR1cykgeyByZXR1cm4gc3RhdHVzOyB9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhhKTtcclxuICAgIH07XHJcbiAgICBGZWVkQm94Q29tcG9uZW50LnByb3RvdHlwZS5kZWNyZWFzZUxpa2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGEgPSB0aGlzLnN0YXR1cy5faWQ7XHJcbiAgICAgICAgdGhpcy5zdGF0dXNTZXJ2aWNlXHJcbiAgICAgICAgICAgIC5kaXNMaWtlKGEpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKHN0YXR1cykgeyByZXR1cm4gc3RhdHVzOyB9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXR1cy5TdGF0dXMpO1xyXG4gICAgfTtcclxuICAgIEZlZWRCb3hDb21wb25lbnQucHJvdG90eXBlLmdldENsYXNzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnRvZ2dsZUxpa2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuICdsaWtlaGVhcnQnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBGZWVkQm94Q29tcG9uZW50LnByb3RvdHlwZS5lZGl0U3RhdHVzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIEVtaXQgZWRpdCBldmVudFxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdtYWhlc2gnKTtcclxuICAgICAgICAvLyBFbWl0dGVyU2VydmljZS5nZXQodGhpcy5lZGl0SWQpLmVtaXQodGhpcy5zdGF0dXMpO1xyXG4gICAgfTtcclxuICAgIEZlZWRCb3hDb21wb25lbnQucHJvdG90eXBlLmRlbGV0ZVN0YXR1cyA9IGZ1bmN0aW9uIChfaWQpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuc3RhdHVzU2VydmljZS5yZW1vdmVTdGF0dXMoX2lkKS5zdWJzY3JpYmUoZnVuY3Rpb24gKHN0YXR1cykge1xyXG4gICAgICAgICAgICAvLyBFbWl0IGxpc3QgZXZlbnRcclxuICAgICAgICAgICAgZW1pdHRlcl9zZXJ2aWNlXzEuRW1pdHRlclNlcnZpY2UuZ2V0KF90aGlzLmxpc3RJZCkuZW1pdChzdGF0dXMpO1xyXG4gICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgLy8gTG9nIGVycm9ycyBpZiBhbnlcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBGZWVkQm94Q29tcG9uZW50LnByb3RvdHlwZS51cGRhdGVTdGF0dXMgPSBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3VwZGF0ZSBDbGlja2VkJyk7XHJcbiAgICAgICAgdmFyIHN0YXR1c0lkID0gdGhpcy5zdGF0dXMuX2lkO1xyXG4gICAgICAgIHRoaXMuc3RhdHVzU2VydmljZVxyXG4gICAgICAgICAgICAudXBkYXRlU3RhdHVzKHN0YXR1c0lkLCB2YWx1ZSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZShmdW5jdGlvbiAoc3RhdHVzKSB7IHJldHVybiBzdGF0dXM7IH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBGZWVkQm94Q29tcG9uZW50O1xyXG59KCkpO1xyXG5fX2RlY29yYXRlKFtcclxuICAgIGNvcmVfMS5JbnB1dCgpLFxyXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIHVzZXJzdGF0dXNfMS5Vc2VyU3RhdHVzKVxyXG5dLCBGZWVkQm94Q29tcG9uZW50LnByb3RvdHlwZSwgXCJzdGF0dXNcIiwgdm9pZCAwKTtcclxuX19kZWNvcmF0ZShbXHJcbiAgICBjb3JlXzEuSW5wdXQoKSxcclxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpXHJcbl0sIEZlZWRCb3hDb21wb25lbnQucHJvdG90eXBlLCBcImxpc3RJZFwiLCB2b2lkIDApO1xyXG5fX2RlY29yYXRlKFtcclxuICAgIGNvcmVfMS5JbnB1dCgpLFxyXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcclxuXSwgRmVlZEJveENvbXBvbmVudC5wcm90b3R5cGUsIFwiZWRpdElkXCIsIHZvaWQgMCk7XHJcbkZlZWRCb3hDb21wb25lbnQgPSBfX2RlY29yYXRlKFtcclxuICAgIGNvcmVfMS5Db21wb25lbnQoe1xyXG4gICAgICAgIHNlbGVjdG9yOiAnYXBwLWZlZWRib3gnLFxyXG4gICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2ZlZWRib3guY29tcG9uZW50Lmh0bWwnKSxcclxuICAgICAgICBzdHlsZVVybHM6IFtyZXF1aXJlKCcuL2ZlZWRib3guY29tcG9uZW50LmNzcycpXVxyXG4gICAgfSksXHJcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW3VzZXJzdGF0dXNfc2VydmljZV8xLlVzZXJTdGF0dXNTZXJ2aWNlXSlcclxuXSwgRmVlZEJveENvbXBvbmVudCk7XHJcbmV4cG9ydHMuRmVlZEJveENvbXBvbmVudCA9IEZlZWRCb3hDb21wb25lbnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZlZWRib3guY29tcG9uZW50LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZlZWRib3gvZmVlZGJveC5jb21wb25lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCJcXHJcXG48YSBbcm91dGVyTGlua109XFxcIlsnL2RvbWFpbmV4cGVydCddXFxcIj5kb21haW4gZXhwZXJ0PC9hPlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcInBhbmVsIHBhbmVsLWRlZmF1bHRcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1oZWFkaW5nIG1pLWhpLTQwXFxcIj5cXHJcXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJwdWxsLWxlZnRcXFwiPlxcclxcbiAgICAgICAgICAgIHt7c3RhdHVzLnR5cGV9fVxcclxcbiAgICAgICAgPC9zcGFuPlxcclxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcInB1bGwtcmlnaHRcXFwiPlxcclxcbiAgICAgICAgICAgIHt7c3RhdHVzLnVwZGF0ZVRpbWV8IGRhdGVGb3JtYXQgfCBkYXRlOidtZWRpdW0nfX1cXHJcXG4gICAgICAgICAgICA8IS0tfHt7c3RhdHVzLnVwZGF0ZWRBZ28gfCBkYXRlRm9ybWF0IH19IGFnby0tPlxcclxcblxcclxcbiAgICAgICAgICAgIFxcclxcblxcclxcbiAgICAgICAgPC9zcGFuPlxcclxcbiAgICAgICAgPGRpdiBuZ0NsYXNzPVxcXCJkcm9wZG93blxcXCI+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiZHJvcGRvd24tdG9nZ2xlIHN0YXR1c2Ryb3BcXFwiIGRhdGEtdG9nZ2xlPVxcXCJkcm9wZG93blxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJjYXJldFxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDx1bCAgbmdDbGFzcz1cXFwiZHJvcGRvd24tbWVudVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVxcXCJcXFwiPkVkaXQ8L2E+PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XFxcIlxcXCI+RGVsZXRlPC9hPjwvbGk+XFxyXFxuICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVxcXCJcXFwiPkRldGFpbDwvYT48L2xpPlxcclxcbiAgICAgICAgICAgIDwvdWw+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIFxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtYm9keVxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMlxcXCIgID5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XFxcIiFlZGl0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIHt7c3RhdHVzLnN0YXR1c319XFxyXFxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XFxcImVkaXRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSAjdXBkYXRlRm9ybT1cXFwibmdGb3JtXFxcIiAobmdTdWJtaXQpPVxcXCJ1cGRhdGVTdGF0dXModXBkYXRlRm9ybS52YWx1ZSk7ZWRpdD0hZWRpdDtcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVxcXCJTdGF0dXNcXFwiIG5nTW9kZWw+e3tzdGF0dXMuc3RhdHVzfX08L3RleHRhcmVhPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCI+VXBkYXRlPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICB7e3VwZGF0ZUZvcm0udmFsdWUgfCBqc29ufX1cXHJcXG4gICAgICAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICAgICAgXFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgIDwhLS08ZGl2ICpuZ0Zvcj1cXFwibGV0IGNvbW1lbnRzIG9mIHN0YXR1cy5jb21tZW50c1xcXCI+XFxyXFxuICAgICAgICAgICAge3tjb21tZW50cy5jb21tZW50VGltZX19XFxyXFxuICAgICAgICA8L2Rpdj4tLT5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAge3tzdGF0dXMubGlrZXNDb3VudHN9fSBsaWtlcyB8IHt7c3RhdHVzLmNvbW1lbnRzQ291bnRzfX0gQ29tbWVudHMgRGVsZXRlIEVkaXRcXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMTJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL2hvbWUvZWRpdCcsIHN0YXR1cy5faWRdXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi14cyBcXFwiIChjbGljayk9XFxcImVkaXQgPSAhZWRpdFxcXCI+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cXFwiIWVkaXRcXFwiPkVkaXQ8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbICcvaG9tZS9kZXRhaWwnLCBzdGF0dXMuX2lkXVxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBidG4teHNcXFwiPkRldGFpbDwvYT5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICBcXHJcXG5cXHJcXG4gICAgICAgICAgICBcXHJcXG5cXHJcXG4gICAgICAgICAgICBcXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtZm9vdGVyIG1pLWhpLTQwXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0yXFxcIj5cXHJcXG4gICAgICAgICAgIDxhIChjbGljayk9XFxcInRvZ2dsZUxpa2UgPSAhdG9nZ2xlTGlrZTsgbGlrZXRvZ2dsZSA9ICFsaWtldG9nZ2xlOyBcXFwiIFtuZ0NsYXNzXT1cXFwiZ2V0Q2xhc3MoKVxcXCIgY2xhc3M9XFxcImxpa2VcXFwiID5cXHJcXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWhlYXJ0XFxcIj48L2k+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuICAqbmdJZj1cXFwiIWxpa2V0b2dnbGVcXFwiIChjbGljayk9XFxcImluY3JlYXNlTGlrZSgpO1xcXCIgY2xhc3M9XFxcImJ0biBidG4taW5mbyBidG4teHNcXFwiID5saWtlPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cXFwibGlrZXRvZ2dsZVxcXCIgKGNsaWNrKT1cXFwiZGVjcmVhc2VMaWtlKCk7XFxcIiAgY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyIGJ0bi14c1xcXCI+dW5saWtlPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgIDwvYT4gXFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgPGFwcC1jb21tZW50LWZvcm0gW3N0YXR1c0lkXT1cXFwic3RhdHVzLl9pZFxcXCI+PC9hcHAtY29tbWVudC1mb3JtPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZmVlZGJveC9mZWVkYm94LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZmVlZGJveC5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9mZWVkYm94L2ZlZWRib3guY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLm1pLWhpLTQwe1xcclxcbm1pbi1oZWlnaHQ6NDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLWhlYXJ0OmhvdmVyLC5mYS1oZWFydDpmb2N1c3tcXHJcXG4gICAgIGNvbG9yOmJsYWNrOyAgICAgICAgICAgXFxyXFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZlZWRib3gvZmVlZGJveC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbnZhciBjb3JlXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcclxudmFyIGh0dHBfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9odHRwXCIpO1xyXG52YXIgdXNlcnN0YXR1c19zZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vc2VydmljZXMvdXNlcnN0YXR1cy5zZXJ2aWNlXCIpO1xyXG52YXIgcm91dGVyXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvcm91dGVyXCIpO1xyXG52YXIgRGV0YWlsU3RhdHVzQ29tcG9uZW50ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIERldGFpbFN0YXR1c0NvbXBvbmVudChfaHR0cCwgcm91dGUsIHN0YXR1c1NlcnZpY2UsIHJvdXRlcikge1xyXG4gICAgICAgIHRoaXMuX2h0dHAgPSBfaHR0cDtcclxuICAgICAgICB0aGlzLnJvdXRlID0gcm91dGU7XHJcbiAgICAgICAgdGhpcy5zdGF0dXNTZXJ2aWNlID0gc3RhdHVzU2VydmljZTtcclxuICAgICAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcclxuICAgIH1cclxuICAgIERldGFpbFN0YXR1c0NvbXBvbmVudC5wcm90b3R5cGUubG9hZFN0YXR1c3NzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5yb3V0ZS5wYXJhbXNcclxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAocGFyYW1zKSB7IHJldHVybiBwYXJhbXNbJ2lkJ107IH0pXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgICAgIF90aGlzLnN0YXR1c1NlcnZpY2VcclxuICAgICAgICAgICAgICAgIC5zdGF0dXNEZXRhaWwoaWQpXHJcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uICh1c2Vyc3RhdHVzKSB7IHJldHVybiBfdGhpcy51c2Vyc3RhdHVzID0gdXNlcnN0YXR1czsgfSwgLy9CaW5kIHRvIHZpZXdcclxuICAgICAgICAgICAgZnVuY3Rpb24gKC8vQmluZCB0byB2aWV3XHJcbiAgICAgICAgICAgICAgICBlcnIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIERldGFpbFN0YXR1c0NvbXBvbmVudC5wcm90b3R5cGUubmdPbkluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gTG9hZCBzdGF0dXNcclxuICAgICAgICB0aGlzLmxvYWRTdGF0dXNzcygpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBEZXRhaWxTdGF0dXNDb21wb25lbnQ7XHJcbn0oKSk7XHJcbkRldGFpbFN0YXR1c0NvbXBvbmVudCA9IF9fZGVjb3JhdGUoW1xyXG4gICAgY29yZV8xLkNvbXBvbmVudCh7XHJcbiAgICAgICAgc2VsZWN0b3I6ICdhcHAtc3RhdHVzLWRldGFpbCcsXHJcbiAgICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZGV0YWlsc3RhdHVzLmNvbXBvbmVudC5odG1sJylcclxuICAgIH0pLFxyXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtodHRwXzEuSHR0cCxcclxuICAgICAgICByb3V0ZXJfMS5BY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICB1c2Vyc3RhdHVzX3NlcnZpY2VfMS5Vc2VyU3RhdHVzU2VydmljZSxcclxuICAgICAgICByb3V0ZXJfMS5Sb3V0ZXJdKVxyXG5dLCBEZXRhaWxTdGF0dXNDb21wb25lbnQpO1xyXG5leHBvcnRzLkRldGFpbFN0YXR1c0NvbXBvbmVudCA9IERldGFpbFN0YXR1c0NvbXBvbmVudDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGV0YWlsc3RhdHVzLmNvbXBvbmVudC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9mZWVkYm94L2RldGFpbHN0YXR1cy9kZXRhaWxzdGF0dXMuY29tcG9uZW50LmpzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiXFxyXFxuPGRpdiBjbGFzcz1cXFwiY29sLW1kLTJcXFwiPjwvZGl2PlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcImNvbC1tZC04XFxcIj5cXHJcXG5cXHJcXG4gICAgPGRpdiAqbmdJZj1cXFwidXNlcnN0YXR1c1xcXCI+XFxyXFxuICAgICAgICBcXHJcXG5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsIHBhbmVsLWRlZmF1bHRcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWhlYWRpbmcgbWktaGktNDBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwicHVsbC1sZWZ0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIHt7dXNlcnN0YXR1cy50eXBlfX1cXHJcXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwicHVsbC1yaWdodFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICB7e3VzZXJzdGF0dXMudXBkYXRlVGltZXwgZGF0ZUZvcm1hdCB8IGRhdGU6J21lZGl1bSd9fVxcclxcbiAgICAgICAgICAgICAgICAgICAgPCEtLXx7e3N0YXR1cy51cGRhdGVkQWdvIHwgZGF0ZUZvcm1hdCB9fSBhZ28tLT5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEyXFxcIj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICAgICAge3t1c2Vyc3RhdHVzLnN0YXR1c319XFxyXFxuICAgICAgICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB7e3VzZXJzdGF0dXMubGlrZXNDb3VudHN9fSBsaWtlcyB8IHt7dXNlcnN0YXR1cy5jb21tZW50c0NvdW50c319IENvbW1lbnRzIERlbGV0ZSBFZGl0XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvaG9tZS9lZGl0JywgdXNlcnN0YXR1cy5faWRdXFxcIj5lZGl0PC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgXFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtZm9vdGVyIG1pLWhpLTQwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1oZWFydCB3aGl0ZS10ZXh0IGJvcmRlclxcXCI+PC9pPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTExXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhcHAtY29tbWVudC1mb3JtIFtzdGF0dXNJZF09XFxcInVzZXJzdGF0dXMuX2lkXFxcIj48L2FwcC1jb21tZW50LWZvcm0+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgICAgXFxyXFxuXFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdGb3I9XFxcImxldCBjb21tZW50cyBvZiB1c2Vyc3RhdHVzLmNvbW1lbnRzXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2NvbW1lbnRzLnRleHR9fVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgIFxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcblxcclxcbjwvZGl2PlxcclxcbjxkaXYgY2xhc3M9XFxcImNvbC1tZC0yXFxcIj48L2Rpdj5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZlZWRib3gvZGV0YWlsc3RhdHVzL2RldGFpbHN0YXR1cy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XHJcbnZhciB1c2Vyc3RhdHVzX3NlcnZpY2VfMSA9IHJlcXVpcmUoXCIuLi8uLi9zZXJ2aWNlcy91c2Vyc3RhdHVzLnNlcnZpY2VcIik7XHJcbnZhciBDb21tZW50TGlzdENvbXBvbmVudCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBDb21tZW50TGlzdENvbXBvbmVudChzdGF0dXNTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0dXNTZXJ2aWNlID0gc3RhdHVzU2VydmljZTtcclxuICAgIH1cclxuICAgIENvbW1lbnRMaXN0Q29tcG9uZW50LnByb3RvdHlwZS5sb2FkQ29tbWVudHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gR2V0IGFsbCBzdGF0dXNcclxuICAgICAgICAvL3RoaXMuc3RhdHVzU2VydmljZS5nZXRDb21tZW50cyh0aGlzLnN0YXR1c0lkKVxyXG4gICAgICAgIC8vICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgLy8gICAgdXNlcmNvbW1lbnRzID0+IHRoaXMudXNlcmNvbW1lbnRzID0gdXNlcmNvbW1lbnRzLCAvL0JpbmQgdG8gdmlld1xyXG4gICAgICAgIC8vICAgIGVyciA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgLy8gICAgfSk7XHJcbiAgICB9O1xyXG4gICAgQ29tbWVudExpc3RDb21wb25lbnQucHJvdG90eXBlLm5nT25Jbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIExvYWQgY29tbWVudHNcclxuICAgICAgICB0aGlzLmxvYWRDb21tZW50cygpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBDb21tZW50TGlzdENvbXBvbmVudDtcclxufSgpKTtcclxuX19kZWNvcmF0ZShbXHJcbiAgICBjb3JlXzEuSW5wdXQoKSxcclxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBBcnJheSlcclxuXSwgQ29tbWVudExpc3RDb21wb25lbnQucHJvdG90eXBlLCBcInVzZXJjb21tZW50c1wiLCB2b2lkIDApO1xyXG5fX2RlY29yYXRlKFtcclxuICAgIGNvcmVfMS5JbnB1dCgpLFxyXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcclxuXSwgQ29tbWVudExpc3RDb21wb25lbnQucHJvdG90eXBlLCBcInN0YXR1c0lkXCIsIHZvaWQgMCk7XHJcbkNvbW1lbnRMaXN0Q29tcG9uZW50ID0gX19kZWNvcmF0ZShbXHJcbiAgICBjb3JlXzEuQ29tcG9uZW50KHtcclxuICAgICAgICBzZWxlY3RvcjogJ2FwcC1jb21tZW50LWxpc3QnLFxyXG4gICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2NvbW1lbnQtbGlzdC5jb21wb25lbnQuaHRtbCcpXHJcbiAgICB9KSxcclxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbdXNlcnN0YXR1c19zZXJ2aWNlXzEuVXNlclN0YXR1c1NlcnZpY2VdKVxyXG5dLCBDb21tZW50TGlzdENvbXBvbmVudCk7XHJcbmV4cG9ydHMuQ29tbWVudExpc3RDb21wb25lbnQgPSBDb21tZW50TGlzdENvbXBvbmVudDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tbWVudC1saXN0LmNvbXBvbmVudC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jb21tZW50L2NvbW1lbnQtbGlzdC5jb21wb25lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCJcIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NvbW1lbnQvY29tbWVudC1saXN0LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbnZhciBjb3JlXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcclxudmFyIHVzZXJzdGF0dXNfc2VydmljZV8xID0gcmVxdWlyZShcIi4uLy4uL3NlcnZpY2VzL3VzZXJzdGF0dXMuc2VydmljZVwiKTtcclxudmFyIGVtaXR0ZXJfc2VydmljZV8xID0gcmVxdWlyZShcIi4uLy4uL3NlcnZpY2VzL2VtaXR0ZXIuc2VydmljZVwiKTtcclxudmFyIENvbW1lbnRGb3JtQ29tcG9uZW50ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIENvbW1lbnRGb3JtQ29tcG9uZW50KGNvbW1lbnRTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5jb21tZW50U2VydmljZSA9IGNvbW1lbnRTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMuZWRpdGluZyA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgQ29tbWVudEZvcm1Db21wb25lbnQucHJvdG90eXBlLnN1Ym1pdENvbW1lbnQgPSBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXR1c0lkKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJtYWhlc2hcIik7XHJcbiAgICAgICAgdmFyIGNvbW1lbnRPcGVyYXRpb247XHJcbiAgICAgICAgdGhpcy5jb21tZW50U2VydmljZVxyXG4gICAgICAgICAgICAuYWRkQ29tbWVudCh0aGlzLnN0YXR1c0lkLCB2YWx1ZSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZShmdW5jdGlvbiAoY29tbWVudHMpIHsgcmV0dXJuIGNvbW1lbnRzOyB9KTtcclxuICAgICAgICAvLyBpZighdGhpcy5lZGl0aW5nKVxyXG4gICAgICAgIC8vICAgICBjb21tZW50T3BlcmF0aW9uID0gdGhpcy5jb21tZW50U2VydmljZS5hZGRDb21tZW50KHRoaXMubW9kZWwuSUQsIHRoaXMubW9kZWwpXHJcbiAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgY29tbWVudE9wZXJhdGlvbiA9IHRoaXMuY29tbWVudFNlcnZpY2UudXBkYXRlQ29tbWVudCh0aGlzLm1vZGVsKVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBjb21tZW50T3BlcmF0aW9uLnN1YnNjcmliZShcclxuICAgICAgICAvLyAgICAgY29tbWVudHM9PntcclxuICAgICAgICAvLyAgICAgICAgIEVtaXR0ZXJTZXJ2aWNlLmdldCh0aGlzLmxpc3RJZCkuZW1pdChjb21tZW50cyk7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLm1vZGVsID0gbmV3IENvbW1lbnRzKCk7XHJcbiAgICAgICAgLy8gICAgICAgICBpZih0aGlzLmVkaXRpbmcpIFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMuZWRpdGluZyA9ICF0aGlzLmVkaXRpbmc7XHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gICAgIGVycj0+e1xyXG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAvLyAgICAgfSk7XHJcbiAgICAgICAgLy8gIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgLy8gICAgIGNvbW1lbnRzPT57XHJcbiAgICAgICAgLy8gICAgICAgICBFbWl0dGVyU2VydmljZS5nZXQodGhpcy5zdGF0dXNJZCkuZW1pdChjb21tZW50cyk7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLm1vZGVsID0gbmV3IENvbW1lbnRzKCk7XHJcbiAgICAgICAgLy8gICAgICAgICBpZih0aGlzLmVkaXRpbmcpIFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMuZWRpdGluZyA9ICF0aGlzLmVkaXRpbmc7XHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gICAgIGVycj0+e1xyXG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAvLyAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgQ29tbWVudEZvcm1Db21wb25lbnQucHJvdG90eXBlLm5nT25DaGFuZ2VzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgZW1pdHRlcl9zZXJ2aWNlXzEuRW1pdHRlclNlcnZpY2UuZ2V0KHRoaXMuc3RhdHVzSWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKGNvbW1lbnQpIHtcclxuICAgICAgICAgICAgX3RoaXMuZWRpdGluZyA9IHRydWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIENvbW1lbnRGb3JtQ29tcG9uZW50O1xyXG59KCkpO1xyXG5fX2RlY29yYXRlKFtcclxuICAgIGNvcmVfMS5JbnB1dCgpLFxyXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIE9iamVjdClcclxuXSwgQ29tbWVudEZvcm1Db21wb25lbnQucHJvdG90eXBlLCBcInN0YXR1c0lkXCIsIHZvaWQgMCk7XHJcbkNvbW1lbnRGb3JtQ29tcG9uZW50ID0gX19kZWNvcmF0ZShbXHJcbiAgICBjb3JlXzEuQ29tcG9uZW50KHtcclxuICAgICAgICBzZWxlY3RvcjogJ2FwcC1jb21tZW50LWZvcm0nLFxyXG4gICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2NvbW1lbnQtZm9ybS5jb21wb25lbnQuaHRtbCcpXHJcbiAgICB9KSxcclxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbdXNlcnN0YXR1c19zZXJ2aWNlXzEuVXNlclN0YXR1c1NlcnZpY2VdKVxyXG5dLCBDb21tZW50Rm9ybUNvbXBvbmVudCk7XHJcbmV4cG9ydHMuQ29tbWVudEZvcm1Db21wb25lbnQgPSBDb21tZW50Rm9ybUNvbXBvbmVudDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tbWVudC1mb3JtLmNvbXBvbmVudC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jb21tZW50L2NvbW1lbnQtZm9ybS5jb21wb25lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8Zm9ybSAjZm9ybT1cXFwibmdGb3JtXFxcIiAobmdTdWJtaXQpPVxcXCJzdWJtaXRDb21tZW50KGZvcm0udmFsdWUpXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwidGV4dFxcXCIgbmdNb2RlbCAvPlxcclxcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiPkNvbW1lbnQ8L2J1dHRvbj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9mb3JtPlxcclxcblxcclxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY29tbWVudC9jb21tZW50LWZvcm0uY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XHJcbnZhciBEb21haW5FeHBlcnRDb21wb25lbnQgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gRG9tYWluRXhwZXJ0Q29tcG9uZW50KCkge1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIERvbWFpbkV4cGVydENvbXBvbmVudDtcclxufSgpKTtcclxuRG9tYWluRXhwZXJ0Q29tcG9uZW50ID0gX19kZWNvcmF0ZShbXHJcbiAgICBjb3JlXzEuQ29tcG9uZW50KHtcclxuICAgICAgICBzZWxlY3RvcjogJ2FwcC1kb21haW5leHBlcnQnLFxyXG4gICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2RvbWFpbmV4cGVydC5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgfSlcclxuXSwgRG9tYWluRXhwZXJ0Q29tcG9uZW50KTtcclxuZXhwb3J0cy5Eb21haW5FeHBlcnRDb21wb25lbnQgPSBEb21haW5FeHBlcnRDb21wb25lbnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRvbWFpbmV4cGVydC5jb21wb25lbnQuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZG9tYWluZXhwZXJ0L2RvbWFpbmV4cGVydC5jb21wb25lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTJcXFwiID48L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC04XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8YXBwLXBvc3Q+XFxyXFxuICAgICAgICAgICAgICAgIDwvYXBwLXBvc3Q+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGFwcC1mZWVkZXhwZXJ0PiAgICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgICAgICA8L2FwcC1mZWVkZXhwZXJ0PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMlxcXCIgaGlkZGVuPjwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG5cXHJcXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2RvbWFpbmV4cGVydC9kb21haW5leHBlcnQuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxuLy8gSW1wb3J0c1xyXG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XHJcbnZhciBleHBlcnRfc2VydmljZV8xID0gcmVxdWlyZShcIi4uLy4uL3NlcnZpY2VzL2V4cGVydC5zZXJ2aWNlXCIpO1xyXG52YXIgRmVlZEV4cGVydENvbXBvbmVudCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBGZWVkRXhwZXJ0Q29tcG9uZW50KGV4cGVydFN0YXR1c1NlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLmV4cGVydFN0YXR1c1NlcnZpY2UgPSBleHBlcnRTdGF0dXNTZXJ2aWNlO1xyXG4gICAgfVxyXG4gICAgRmVlZEV4cGVydENvbXBvbmVudC5wcm90b3R5cGUubG9hZFN0YXR1cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuZXhwZXJ0U3RhdHVzU2VydmljZVxyXG4gICAgICAgICAgICAuZ2V0U3RhdHVzKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShmdW5jdGlvbiAocmVzZXhwZXJ0dXNlcnN0YXR1cykgeyByZXR1cm4gX3RoaXMuZXhwZXJ0dXNlcnN0YXR1cyA9IHJlc2V4cGVydHVzZXJzdGF0dXM7IH0sIGZ1bmN0aW9uIChlcnIpIHsgY29uc29sZS5sb2coZXJyKTsgfSk7XHJcbiAgICB9O1xyXG4gICAgRmVlZEV4cGVydENvbXBvbmVudC5wcm90b3R5cGUubmdPbkluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3N0YXR1c2xvYWQnKTtcclxuICAgICAgICAvL0NhbGxlZCBhZnRlciB0aGUgY29uc3RydWN0b3IsIGluaXRpYWxpemluZyBpbnB1dCBwcm9wZXJ0aWVzLCBhbmQgdGhlIGZpcnN0IGNhbGwgdG8gbmdPbkNoYW5nZXMuXHJcbiAgICAgICAgLy9BZGQgJ2ltcGxlbWVudHMgT25Jbml0JyB0byB0aGUgY2xhc3MuXHJcbiAgICAgICAgdGhpcy5sb2FkU3RhdHVzKCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEZlZWRFeHBlcnRDb21wb25lbnQ7XHJcbn0oKSk7XHJcbkZlZWRFeHBlcnRDb21wb25lbnQgPSBfX2RlY29yYXRlKFtcclxuICAgIGNvcmVfMS5Db21wb25lbnQoe1xyXG4gICAgICAgIHNlbGVjdG9yOiAnYXBwLWZlZWRleHBlcnQnLFxyXG4gICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2ZlZWRleHBlcnQuY29tcG9uZW50Lmh0bWwnKVxyXG4gICAgfSksXHJcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW2V4cGVydF9zZXJ2aWNlXzEuRXhwZXJ0U2VydmljZV0pXHJcbl0sIEZlZWRFeHBlcnRDb21wb25lbnQpO1xyXG5leHBvcnRzLkZlZWRFeHBlcnRDb21wb25lbnQgPSBGZWVkRXhwZXJ0Q29tcG9uZW50O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1mZWVkZXhwZXJ0LmNvbXBvbmVudC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9mZWVkRXhwZXJ0L2ZlZWRleHBlcnQuY29tcG9uZW50LmpzXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbnZhciBjb3JlXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcclxudmFyIGh0dHBfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9odHRwXCIpO1xyXG52YXIgUnhfMSA9IHJlcXVpcmUoXCJyeGpzL1J4XCIpO1xyXG4vLyBJbXBvcnQgUnhKcyByZXF1aXJlZCBtZXRob2RzXHJcbnJlcXVpcmUoXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIik7XHJcbnJlcXVpcmUoXCJyeGpzL2FkZC9vcGVyYXRvci9jYXRjaFwiKTtcclxucmVxdWlyZShcInJ4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZVwiKTtcclxudmFyIEV4cGVydFNlcnZpY2UgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gRXhwZXJ0U2VydmljZShfaHR0cCkge1xyXG4gICAgICAgIHRoaXMuX2h0dHAgPSBfaHR0cDtcclxuICAgICAgICB0aGlzLlVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDo1MDM1My9hcGkvZXhwZXJ0XCI7XHJcbiAgICB9XHJcbiAgICBFeHBlcnRTZXJ2aWNlLnByb3RvdHlwZS5nZXRTdGF0dXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5VcmwpO1xyXG4gICAgICAgIHZhciBhID0gdGhpcy5faHR0cC5nZXQodGhpcy5VcmwpXHJcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzLmpzb24oKTsgfSlcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGEpO1xyXG4gICAgICAgIHJldHVybiBhO1xyXG4gICAgfTtcclxuICAgIEV4cGVydFNlcnZpY2UucHJvdG90eXBlLmhhbmRsZUVycm9yID0gZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgLy8gSW4gYSByZWFsIHdvcmxkIGFwcCwgd2UgbWlnaHQgdXNlIGEgcmVtb3RlIGxvZ2dpbmcgaW5mcmFzdHJ1Y3R1cmVcclxuICAgICAgICB2YXIgZXJyTXNnO1xyXG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIGh0dHBfMS5SZXNwb25zZSkge1xyXG4gICAgICAgICAgICB2YXIgYm9keSA9IGVycm9yLmpzb24oKSB8fCAnJztcclxuICAgICAgICAgICAgdmFyIGVyciA9IGJvZHkuZXJyb3IgfHwgSlNPTi5zdHJpbmdpZnkoYm9keSk7XHJcbiAgICAgICAgICAgIGVyck1zZyA9IGVycm9yLnN0YXR1cyArIFwiIC0gXCIgKyAoZXJyb3Iuc3RhdHVzVGV4dCB8fCAnJykgKyBcIiBcIiArIGVycjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGVyck1zZyA9IGVycm9yLm1lc3NhZ2UgPyBlcnJvci5tZXNzYWdlIDogZXJyb3IudG9TdHJpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJNc2cpO1xyXG4gICAgICAgIHJldHVybiBSeF8xLk9ic2VydmFibGUudGhyb3coZXJyTXNnKTtcclxuICAgIH07XHJcbiAgICAvL2FkZCBhIG5ldyBzdGF0dXNcclxuICAgIEV4cGVydFNlcnZpY2UucHJvdG90eXBlLmFkZFN0YXR1cyA9IGZ1bmN0aW9uIChib2R5KSB7XHJcbiAgICAgICAgdmFyIGJvZHlTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShib2R5KTsgLy8gU3RyaW5naWZ5IHBheWxvYWRcclxuICAgICAgICB2YXIgaGVhZGVycyA9IG5ldyBodHRwXzEuSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7IC8vIC4uLiBTZXQgY29udGVudCB0eXBlIHRvIEpTT05cclxuICAgICAgICB2YXIgb3B0aW9ucyA9IG5ldyBodHRwXzEuUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pOyAvLyBDcmVhdGUgYSByZXF1ZXN0IG9wdGlvblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5VcmwsIGJvZHksIG9wdGlvbnMpIC8vIC4uLnVzaW5nIHBvc3QgcmVxdWVzdFxyXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChyZXMpIHsgcmV0dXJuIHJlcy5qc29uKCk7IH0pIC8vIC4uLmFuZCBjYWxsaW5nIC5qc29uKCkgb24gdGhlIHJlc3BvbnNlIHRvIHJldHVybiBkYXRhXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH07XHJcbiAgICAvLyBVcGRhdGUgYSBzdGF0dXNcclxuICAgIEV4cGVydFNlcnZpY2UucHJvdG90eXBlLnVwZGF0ZVN0YXR1cyA9IGZ1bmN0aW9uIChib2R5KSB7XHJcbiAgICAgICAgdmFyIGJvZHlTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShib2R5KTsgLy8gU3RyaW5naWZ5IHBheWxvYWRcclxuICAgICAgICB2YXIgaGVhZGVycyA9IG5ldyBodHRwXzEuSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7IC8vIC4uLiBTZXQgY29udGVudCB0eXBlIHRvIEpTT05cclxuICAgICAgICB2YXIgb3B0aW9ucyA9IG5ldyBodHRwXzEuUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pOyAvLyBDcmVhdGUgYSByZXF1ZXN0IG9wdGlvblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnB1dCh0aGlzLlVybCArIFwiL1wiICsgYm9keVsnaWQnXSwgYm9keSwgb3B0aW9ucykgLy8gLi4udXNpbmcgcHV0IHJlcXVlc3RcclxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAocmVzKSB7IHJldHVybiByZXMuanNvbigpOyB9KSAvLyAuLi5hbmQgY2FsbGluZyAuanNvbigpIG9uIHRoZSByZXNwb25zZSB0byByZXR1cm4gZGF0YVxyXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7IHJldHVybiBSeF8xLk9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpLmVycm9yIHx8ICdTZXJ2ZXIgZXJyb3InKTsgfSk7IC8vLi4uZXJyb3JzIGlmIGFueVxyXG4gICAgfTtcclxuICAgIC8vIERlbGV0ZSBhIHN0YXR1c1xyXG4gICAgRXhwZXJ0U2VydmljZS5wcm90b3R5cGUucmVtb3ZlU3RhdHVzID0gZnVuY3Rpb24gKF9pZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmRlbGV0ZSh0aGlzLlVybCArIFwiL1wiICsgX2lkKSAvLyAuLi51c2luZyBwdXQgcmVxdWVzdFxyXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChyZXMpIHsgcmV0dXJuIHJlcy5qc29uKCk7IH0pIC8vIC4uLmFuZCBjYWxsaW5nIC5qc29uKCkgb24gdGhlIHJlc3BvbnNlIHRvIHJldHVybiBkYXRhXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTsgLy8uLi5lcnJvcnMgaWYgYW55XHJcbiAgICB9O1xyXG4gICAgRXhwZXJ0U2VydmljZS5wcm90b3R5cGUuYWRkQ29tbWVudCA9IGZ1bmN0aW9uIChjb21tZW50KSB7XHJcbiAgICAgICAgdmFyIGNvbW1lbnRTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShjb21tZW50KTsgLy8gU3RyaW5naWZ5IHBheWxvYWRcclxuICAgICAgICB2YXIgaGVhZGVycyA9IG5ldyBodHRwXzEuSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7IC8vIC4uLiBTZXQgY29udGVudCB0eXBlIHRvIEpTT05cclxuICAgICAgICB2YXIgb3B0aW9ucyA9IG5ldyBodHRwXzEuUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pOyAvLyBDcmVhdGUgYSByZXF1ZXN0IG9wdGlvblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5VcmwgKyAnL2FkZGNvbW1lbnRzLycsIGNvbW1lbnQsIG9wdGlvbnMpIC8vIC4uLnVzaW5nIHBvc3QgcmVxdWVzdFxyXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChyZXMpIHsgcmV0dXJuIHJlcy5qc29uKCk7IH0pIC8vIC4uLmFuZCBjYWxsaW5nIC5qc29uKCkgb24gdGhlIHJlc3BvbnNlIHRvIHJldHVybiBkYXRhXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gRXhwZXJ0U2VydmljZTtcclxufSgpKTtcclxuRXhwZXJ0U2VydmljZSA9IF9fZGVjb3JhdGUoW1xyXG4gICAgY29yZV8xLkluamVjdGFibGUoKSxcclxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbaHR0cF8xLkh0dHBdKVxyXG5dLCBFeHBlcnRTZXJ2aWNlKTtcclxuZXhwb3J0cy5FeHBlcnRTZXJ2aWNlID0gRXhwZXJ0U2VydmljZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZXhwZXJ0LnNlcnZpY2UuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL3NlcnZpY2VzL2V4cGVydC5zZXJ2aWNlLmpzXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPCEtLTxkaXYgKm5nSWY9XFxcImxvYWRpbmdcXFwiIGNsYXNzPVxcXCJsb2FkZXJcXFwiPkxvYWRpbmcuLi48L2Rpdj4tLT5cXHJcXG5cXHJcXG48YXBwLWZlZWRib3hleHBlcnQgXFxyXFxuXFxyXFxuKm5nRm9yPVxcXCJsZXQgc3RhdHVzIG9mIGV4cGVydHVzZXJzdGF0dXNcXFwiIFxcclxcbltzdGF0dXNdPVxcXCJzdGF0dXNcXFwiID5cXHJcXG4gICBhYmNcXHJcXG48L2FwcC1mZWVkYm94ZXhwZXJ0PlxcclxcbjxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMiB0ZXh0LWNlbnRlclxcXCI+XFxyXFxuICAgICAgICA8YSBocmVmPVxcXCJcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWJsb2NrXFxcIj4gbG9hZCBtb3JlIHN0b3JpZXM8L2E+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICBcXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG5cXHJcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZlZWRFeHBlcnQvZmVlZGV4cGVydC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XHJcbnZhciBlbWl0dGVyX3NlcnZpY2VfMSA9IHJlcXVpcmUoXCIuLi8uLi9zZXJ2aWNlcy9lbWl0dGVyLnNlcnZpY2VcIik7XHJcbnZhciBleHBlcnRfc2VydmljZV8xID0gcmVxdWlyZShcIi4uLy4uL3NlcnZpY2VzL2V4cGVydC5zZXJ2aWNlXCIpO1xyXG52YXIgdXNlcnN0YXR1c18xID0gcmVxdWlyZShcIi4uLy4uL21vZGVscy91c2Vyc3RhdHVzXCIpO1xyXG52YXIgRmVlZEJveEV4cGVydENvbXBvbmVudCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBGZWVkQm94RXhwZXJ0Q29tcG9uZW50KHN0YXR1c0V4cGVydFNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLnN0YXR1c0V4cGVydFNlcnZpY2UgPSBzdGF0dXNFeHBlcnRTZXJ2aWNlO1xyXG4gICAgfVxyXG4gICAgRmVlZEJveEV4cGVydENvbXBvbmVudC5wcm90b3R5cGUuZ2V0Q2xhc3MgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudG9nZ2xlTGlrZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gJ2xpa2VoZWFydCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIEZlZWRCb3hFeHBlcnRDb21wb25lbnQucHJvdG90eXBlLmVkaXRTdGF0dXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gRW1pdCBlZGl0IGV2ZW50XHJcbiAgICAgICAgY29uc29sZS5sb2coJ21haGVzaCcpO1xyXG4gICAgICAgIC8vIEVtaXR0ZXJTZXJ2aWNlLmdldCh0aGlzLmVkaXRJZCkuZW1pdCh0aGlzLnN0YXR1cyk7XHJcbiAgICB9O1xyXG4gICAgRmVlZEJveEV4cGVydENvbXBvbmVudC5wcm90b3R5cGUuZGVsZXRlU3RhdHVzID0gZnVuY3Rpb24gKF9pZCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5zdGF0dXNFeHBlcnRTZXJ2aWNlLnJlbW92ZVN0YXR1cyhfaWQpLnN1YnNjcmliZShmdW5jdGlvbiAoc3RhdHVzKSB7XHJcbiAgICAgICAgICAgIC8vIEVtaXQgbGlzdCBldmVudFxyXG4gICAgICAgICAgICBlbWl0dGVyX3NlcnZpY2VfMS5FbWl0dGVyU2VydmljZS5nZXQoX3RoaXMubGlzdElkKS5lbWl0KHN0YXR1cyk7XHJcbiAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICAvLyBMb2cgZXJyb3JzIGlmIGFueVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIEZlZWRCb3hFeHBlcnRDb21wb25lbnQucHJvdG90eXBlLnVwZGF0ZVN0YXR1cyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuICAgICAgICBjb25zb2xlLmxvZygndXBkYXRlIENsaWNrZWQnKTtcclxuICAgICAgICB2YXIgc3RhdHVzSWQgPSB0aGlzLnN0YXR1cy5faWQ7XHJcbiAgICAgICAgLy90aGlzLnN0YXR1c0V4cGVydFNlcnZpY2VcclxuICAgICAgICAvLyAgICAudXBkYXRlU3RhdHVzKHN0YXR1c0lkLCB2YWx1ZSlcclxuICAgICAgICAvLyAgICAuc3Vic2NyaWJlKHN0YXR1cz0+c3RhdHVzKVxyXG4gICAgfTtcclxuICAgIHJldHVybiBGZWVkQm94RXhwZXJ0Q29tcG9uZW50O1xyXG59KCkpO1xyXG5fX2RlY29yYXRlKFtcclxuICAgIGNvcmVfMS5JbnB1dCgpLFxyXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIHVzZXJzdGF0dXNfMS5Vc2VyU3RhdHVzKVxyXG5dLCBGZWVkQm94RXhwZXJ0Q29tcG9uZW50LnByb3RvdHlwZSwgXCJzdGF0dXNcIiwgdm9pZCAwKTtcclxuX19kZWNvcmF0ZShbXHJcbiAgICBjb3JlXzEuSW5wdXQoKSxcclxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpXHJcbl0sIEZlZWRCb3hFeHBlcnRDb21wb25lbnQucHJvdG90eXBlLCBcImxpc3RJZFwiLCB2b2lkIDApO1xyXG5fX2RlY29yYXRlKFtcclxuICAgIGNvcmVfMS5JbnB1dCgpLFxyXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcclxuXSwgRmVlZEJveEV4cGVydENvbXBvbmVudC5wcm90b3R5cGUsIFwiZWRpdElkXCIsIHZvaWQgMCk7XHJcbkZlZWRCb3hFeHBlcnRDb21wb25lbnQgPSBfX2RlY29yYXRlKFtcclxuICAgIGNvcmVfMS5Db21wb25lbnQoe1xyXG4gICAgICAgIHNlbGVjdG9yOiAnYXBwLWZlZWRib3hleHBlcnQnLFxyXG4gICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2ZlZWRib3hleHBlcnQuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgICAgICBzdHlsZVVybHM6IFtyZXF1aXJlKCcuL2ZlZWRib3hleHBlcnQuY29tcG9uZW50LmNzcycpXVxyXG4gICAgfSksXHJcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW2V4cGVydF9zZXJ2aWNlXzEuRXhwZXJ0U2VydmljZV0pXHJcbl0sIEZlZWRCb3hFeHBlcnRDb21wb25lbnQpO1xyXG5leHBvcnRzLkZlZWRCb3hFeHBlcnRDb21wb25lbnQgPSBGZWVkQm94RXhwZXJ0Q29tcG9uZW50O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1mZWVkYm94ZXhwZXJ0LmNvbXBvbmVudC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9mZWVkYm94RXhwZXJ0L2ZlZWRib3hleHBlcnQuY29tcG9uZW50LmpzXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiXFxyXFxuPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9kb21haW5leHBlcnQnXVxcXCI+ZG9tYWluIGV4cGVydDwvYT5cXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJwYW5lbCBwYW5lbC1kZWZhdWx0XFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtaGVhZGluZyBtaS1oaS00MFxcXCI+XFxyXFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwicHVsbC1sZWZ0XFxcIj5cXHJcXG4gICAgICAgICAgICB7e3N0YXR1cy50eXBlfX1cXHJcXG4gICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJwdWxsLXJpZ2h0XFxcIj5cXHJcXG4gICAgICAgICAgICB7e3N0YXR1cy51cGRhdGVUaW1lfCBkYXRlRm9ybWF0IHwgZGF0ZTonbWVkaXVtJ319XFxyXFxuICAgICAgICAgICAgPCEtLXx7e3N0YXR1cy51cGRhdGVkQWdvIHwgZGF0ZUZvcm1hdCB9fSBhZ28tLT5cXHJcXG5cXHJcXG4gICAgICAgICAgICBcXHJcXG5cXHJcXG4gICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgICAgIDxkaXYgbmdDbGFzcz1cXFwiZHJvcGRvd25cXFwiPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImRyb3Bkb3duLXRvZ2dsZSBzdGF0dXNkcm9wXFxcIiBkYXRhLXRvZ2dsZT1cXFwiZHJvcGRvd25cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiY2FyZXRcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8dWwgIG5nQ2xhc3M9XFxcImRyb3Bkb3duLW1lbnVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cXFwiXFxcIj5FZGl0PC9hPjwvbGk+XFxyXFxuICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVxcXCJcXFwiPkRlbGV0ZTwvYT48L2xpPlxcclxcbiAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cXFwiXFxcIj5EZXRhaWw8L2E+PC9saT5cXHJcXG4gICAgICAgICAgICA8L3VsPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICBcXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWJvZHlcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMTJcXFwiICA+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVxcXCIhZWRpdFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICB7e3N0YXR1cy5zdGF0dXN9fVxcclxcbiAgICAgICAgICAgICAgICA8L3NwYW4+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVxcXCJlZGl0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gI3VwZGF0ZUZvcm09XFxcIm5nRm9ybVxcXCIgKG5nU3VibWl0KT1cXFwidXBkYXRlU3RhdHVzKHVwZGF0ZUZvcm0udmFsdWUpO2VkaXQ9IWVkaXQ7XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cXFwiU3RhdHVzXFxcIiBuZ01vZGVsPnt7c3RhdHVzLnN0YXR1c319PC90ZXh0YXJlYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiPlVwZGF0ZTwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAge3t1cGRhdGVGb3JtLnZhbHVlIHwganNvbn19XFxyXFxuICAgICAgICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgICAgIFxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICA8IS0tPGRpdiAqbmdGb3I9XFxcImxldCBjb21tZW50cyBvZiBzdGF0dXMuY29tbWVudHNcXFwiPlxcclxcbiAgICAgICAgICAgIHt7Y29tbWVudHMuY29tbWVudFRpbWV9fVxcclxcbiAgICAgICAgPC9kaXY+LS0+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIHt7c3RhdHVzLmxpa2VzQ291bnRzfX0gbGlrZXMgfCB7e3N0YXR1cy5jb21tZW50c0NvdW50c319IENvbW1lbnRzIERlbGV0ZSBFZGl0XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9ob21lL2VkaXQnLCBzdGF0dXMuX2lkXVxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBidG4teHMgXFxcIiAoY2xpY2spPVxcXCJlZGl0ID0gIWVkaXRcXFwiPlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XFxcIiFlZGl0XFxcIj5FZGl0PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWyAnL2hvbWUvZGV0YWlsJywgc3RhdHVzLl9pZF1cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgYnRuLXhzXFxcIj5EZXRhaWw8L2E+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgXFxyXFxuXFxyXFxuICAgICAgICAgICAgXFxyXFxuXFxyXFxuICAgICAgICAgICAgXFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWZvb3RlciBtaS1oaS00MFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMlxcXCI+XFxyXFxuICAgICAgICAgICA8YSAoY2xpY2spPVxcXCJ0b2dnbGVMaWtlID0gIXRvZ2dsZUxpa2U7IGxpa2V0b2dnbGUgPSAhbGlrZXRvZ2dsZTsgXFxcIiBbbmdDbGFzc109XFxcImdldENsYXNzKClcXFwiIGNsYXNzPVxcXCJsaWtlXFxcIiA+XFxyXFxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1oZWFydFxcXCI+PC9pPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiAgKm5nSWY9XFxcIiFsaWtldG9nZ2xlXFxcIiAoY2xpY2spPVxcXCJpbmNyZWFzZUxpa2UoKTtcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWluZm8gYnRuLXhzXFxcIiA+bGlrZTwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XFxcImxpa2V0b2dnbGVcXFwiIChjbGljayk9XFxcImRlY3JlYXNlTGlrZSgpO1xcXCIgIGNsYXNzPVxcXCJidG4gYnRuLWRhbmdlciBidG4teHNcXFwiPnVubGlrZTwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICA8L2E+IFxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTBcXFwiPlxcclxcbiAgICAgICAgICAgIDxhcHAtY29tbWVudC1mb3JtIFtzdGF0dXNJZF09XFxcInN0YXR1cy5faWRcXFwiPjwvYXBwLWNvbW1lbnQtZm9ybT5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZlZWRib3hFeHBlcnQvZmVlZGJveGV4cGVydC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2ZlZWRib3hleHBlcnQuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZmVlZGJveEV4cGVydC9mZWVkYm94ZXhwZXJ0LmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5taS1oaS00MHtcXHJcXG5taW4taGVpZ2h0OjQwcHg7XFxyXFxufVxcclxcblxcclxcbi5mYS1oZWFydDpob3ZlciwuZmEtaGVhcnQ6Zm9jdXN7XFxyXFxuICAgICBjb2xvcjpibGFjazsgICAgICAgICAgIFxcclxcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9mZWVkYm94RXhwZXJ0L2ZlZWRib3hleHBlcnQuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBjb3JlXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcclxudmFyIERhdGVGb3JtYXRQaXBlID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIERhdGVGb3JtYXRQaXBlKCkge1xyXG4gICAgfVxyXG4gICAgRGF0ZUZvcm1hdFBpcGUucHJvdG90eXBlLnRyYW5zZm9ybSA9IGZ1bmN0aW9uICh2YWx1ZSwgYXJncykge1xyXG4gICAgICAgIGlmIChhcmdzICYmIGFyZ3NbMF0gPT09ICdsb2NhbCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHZhbHVlKS50b0xvY2FsZVN0cmluZygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IERhdGUodmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIERhdGVGb3JtYXRQaXBlO1xyXG59KCkpO1xyXG5EYXRlRm9ybWF0UGlwZSA9IF9fZGVjb3JhdGUoW1xyXG4gICAgY29yZV8xLlBpcGUoe1xyXG4gICAgICAgIG5hbWU6ICdkYXRlRm9ybWF0J1xyXG4gICAgfSlcclxuXSwgRGF0ZUZvcm1hdFBpcGUpO1xyXG5leHBvcnRzLkRhdGVGb3JtYXRQaXBlID0gRGF0ZUZvcm1hdFBpcGU7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGUtZm9ybWF0LnBpcGUuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL3BpcGVzL2RhdGUtZm9ybWF0LnBpcGUuanNcbi8vIG1vZHVsZSBpZCA9IDQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=