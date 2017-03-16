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
	var date_format_pipe_1 = __webpack_require__(41);
	var userstatus_service_1 = __webpack_require__(17);
	var statusType_sevice_1 = __webpack_require__(23);
	var emitter_service_1 = __webpack_require__(16);
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
	            detailstatus_component_1.DetailStatusComponent
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
	        providers: [userstatus_service_1.UserStatusService, emitter_service_1.EmitterService, statusType_sevice_1.StatusTypeService]
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

	module.exports = "\n\n<div class='container-fluid'>\n    <div class='row'>\n        <div >\n            <router-outlet>\n\n            </router-outlet>\n        </div>\n    </div>\n</div>\n\n\n"

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
	exports.push([module.id, "@media (max-width: 767px) {\n    /* On small screens, the nav menu spans the full width of the screen. Leave a space for it. */\n    .body-content {\n        padding-top: 50px;\n    }\n}\n", ""]);
	
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

	module.exports = "<!--<p *ngIf=\"!status\"><em>Loading...</em></p>-->\n<nav>\n    <a [routerLink]=\"['']\">Home</a>\n    <a [routerLink]=\"['/home/domainexpert']\">Domain Expert</a>\n</nav>\n\n\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-2\"></div>\n        <div class=\"col-md-8\">\n            <div>\n                <app-post>\n                </app-post>\n            </div>\n            <div>\n                <app-feed>\n                    \n                </app-feed>\n            </div>\n        </div>\n        <div class=\"col-md-2\"></div>\n    </div>\n\n</div>"

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

	module.exports = "<form #form=\"ngForm\" (ngSubmit)=\"submitStatus()\" class=\"form-horizontal bordered-group\">\n    <div class=\"panel border\">\n        <div class=\"panel-heading nomargint\">\n            <a href=\"#\" class=\"btn btn-default noborder \"><i class=\"fa fa-camera\"></i> Photo/Video</a> |\n            <a href=\"#\" class=\"btn btn-default noborder\"><i class=\"fa fa-photo\"></i> Photo/Video Album</a>\n            <hr class=\"nomargint nomarginb\" />\n        </div>\n        <div class=\"panel-body \">\n            <div class=\"row \">\n                <div class=\"col-xs-12\">\n                    <div class=\"form-group \">\n                        <div class=\"col-xs-1\">\n                            <img src=\"\" width=\"45\" height=\"45\" alt=\"\" />\n                        </div>\n                        <div class=\"col-xs-11\">\n                            <textarea class=\"form-control noborder\" rows=\"2\" placeholder=\"Whats on your mind?\" [(ngModel)]=\"model.status\" name=\"text\" required></textarea>\n                        </div>\n                    </div>\n                    <hr />\n                    <div class=\"form-group nomarginb\">\n                        <div class=\"col-xs-6\">\n                            asdfasdfasdf\n                            <ul *ngFor=\"let statusType of statusTypes\">\n                                <li>\n                                    1\n                                    {{statusType.type}}\n                                </li>\n                            </ul>\n                            <!--<select class=\"form-control pull-left\" [(ngModel)]=\"model.type\" name=\"type\" required>\n                                <option *ngFor=\"let statusType of statusTypes\" >{{statusType | json}}</option>\n                            </select>-->\n                            <select class=\"form-control pull-left\" [(ngModel)]=\"model.type\" name=\"type\" required>\n                                <option *ngFor=\"let type of statusTypes\">{{type.name}}</option>\n                            </select>\n                        </div>\n                        <div class=\"col-xs-6\">\n                            \n                            <button type=\"submit\" [disabled]=\"form.invalid\" class=\"btn btn-primary pull-right btn-sm\">Post</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</form>"

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

	module.exports = "<!--<div *ngIf=\"loading\" class=\"loader\">Loading...</div>-->\n\n<app-feedbox \n[listId]=\"listId\" \n*ngFor=\"let status of userstatus\" \n[status]=\"status\" >\n   \n</app-feedbox>\n<div class=\"row\">\n    <div class=\"col-md-12 text-center\">\n        <a href=\"\" class=\"btn btn-block\"> load more stories</a>\n    </div>\n    \n</div>\n\n\n"

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

	module.exports = "\n<a [routerLink]=\"['/domainexpert']\">domain expert</a>\n\n<div class=\"panel panel-default\">\n    <div class=\"panel-heading mi-hi-40\">\n        <span class=\"pull-left\">\n            {{status.type}}\n        </span>\n        <span class=\"pull-right\">\n            {{status.updateTime| dateFormat | date:'medium'}}\n            <!--|{{status.updatedAgo | dateFormat }} ago-->\n\n            \n\n        </span>\n        <div ngClass=\"dropdown\">\n            <button class=\"dropdown-toggle statusdrop\" data-toggle=\"dropdown\">\n                <span class=\"caret\"></span>\n            </button>\n            <ul  ngClass=\"dropdown-menu\">\n                <li><a href=\"\">Edit</a></li>\n                <li><a href=\"\">Delete</a></li>\n                <li><a href=\"\">Detail</a></li>\n            </ul>\n        </div>\n        \n    </div>\n    <div class=\"panel-body\">\n        <div class=\"row\">\n            <div class=\"col-md-12\"  >\n\n                <span *ngIf=\"!edit\">\n                    {{status.status}}\n                </span>\n\n                <span *ngIf=\"edit\">\n                   \n                        <form #updateForm=\"ngForm\" (ngSubmit)=\"updateStatus(updateForm.value);edit=!edit;\">\n                           <div>\n                               <textarea name=\"Status\" ngModel>{{status.status}}</textarea>\n                               <button type=\"submit\">Update</button>\n                           </div>\n                       </form>\n                       {{updateForm.value | json}}\n                   \n                </span>\n                \n            </div>\n\n            \n        </div>\n\n        <!--<div *ngFor=\"let comments of status.comments\">\n            {{comments.commentTime}}\n        </div>-->\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                {{status.likesCounts}} likes | {{status.commentsCounts}} Comments Delete Edit\n            </div>\n\n            <div class=\"col-md-12\">\n                <a [routerLink]=\"['/home/edit', status._id]\" class=\"btn btn-primary btn-xs \" (click)=\"edit = !edit\">\n\n                    <span *ngIf=\"!edit\">Edit</span>\n                </a>\n                <a [routerLink]=\"[ '/home/detail', status._id]\" class=\"btn btn-primary btn-xs\">Detail</a>\n            </div>\n            \n\n            \n\n            \n        </div>\n    </div>\n    <div class=\"panel-footer mi-hi-40\">\n        <div class=\"col-xs-2\">\n           <a (click)=\"toggleLike = !toggleLike; liketoggle = !liketoggle; \" [ngClass]=\"getClass()\" class=\"like\" >\n                <i class=\"fa fa-heart\"></i>\n                <span  *ngIf=\"!liketoggle\" (click)=\"increaseLike();\" class=\"btn btn-info btn-xs\" >like</span>\n                <span *ngIf=\"liketoggle\" (click)=\"decreaseLike();\"  class=\"btn btn-danger btn-xs\">unlike</span>\n               \n            </a> \n        </div>\n        <div class=\"col-xs-10\">\n            <app-comment-form [statusId]=\"status._id\"></app-comment-form>\n        </div>\n\n    </div>\n</div>"

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
	exports.push([module.id, ".mi-hi-40{\nmin-height:40px;\n}\n\n.fa-heart:hover,.fa-heart:focus{\n     color:black;           \n}", ""]);
	
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

	module.exports = "\n<div class=\"col-md-2\"></div>\n\n<div class=\"col-md-8\">\n\n    <div *ngIf=\"userstatus\">\n        \n\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading mi-hi-40\">\n                <span class=\"pull-left\">\n                    {{userstatus.type}}\n                </span>\n                <span class=\"pull-right\">\n                    {{userstatus.updateTime| dateFormat | date:'medium'}}\n                    <!--|{{status.updatedAgo | dateFormat }} ago-->\n\n                </span>\n            </div>\n            <div class=\"panel-body\">\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n\n                        \n                {{userstatus.status}}\n                    \n                    \n                    </div>\n                </div>\n\n               \n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        {{userstatus.likesCounts}} likes | {{userstatus.commentsCounts}} Comments Delete Edit\n                    </div>\n\n\n                    <a [routerLink]=\"['/home/edit', userstatus._id]\">edit</a>\n                    \n\n                    \n                </div>\n            </div>\n            <div class=\"panel-footer mi-hi-40\">\n                <div class=\"row\">\n                    <div class=\"col-xs-1\">\n                        \n                    <i class=\"fa fa-heart white-text border\"></i>\n                </div>\n                <div class=\"col-xs-11\">\n                    <app-comment-form [statusId]=\"userstatus._id\"></app-comment-form>\n                </div>\n                </div>\n                \n               \n\n            </div>\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <div *ngFor=\"let comments of userstatus.comments\">\n                            <div class=\"card\">\n                                {{comments.text}}\n                            </div>\n                            \n                        </div>\n                    </div>\n                     \n                </div>\n            </div>\n             \n        </div>\n    </div>\n\n</div>\n<div class=\"col-md-2\"></div>\n\n\n\n\n\n\n\n\n"

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

	module.exports = "<form #form=\"ngForm\" (ngSubmit)=\"submitComment(form.value)\">\n    <div class=\"form-group\">\n        <input type=\"text\" name=\"text\" ngModel />\n        <button type=\"submit\">Comment</button>\n    </div>\n</form>\n\n"

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
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var expert_service_1 = __webpack_require__(39);
	var DomainExpertComponent = (function () {
	    function DomainExpertComponent(statusExpertService) {
	        this.statusExpertService = statusExpertService;
	        this.userExpertStatuses = [];
	    }
	    DomainExpertComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.statusExpertService
	            .getStatus()
	            .subscribe(function (resStatusDate) { return _this.userExpertStatuses = resStatusDate; });
	    };
	    return DomainExpertComponent;
	}());
	DomainExpertComponent = __decorate([
	    core_1.Component({
	        selector: 'domainexpert',
	        template: __webpack_require__(40)
	    }),
	    __metadata("design:paramtypes", [expert_service_1.ExpertService])
	], DomainExpertComponent);
	exports.DomainExpertComponent = DomainExpertComponent;
	//# sourceMappingURL=domainexpert.component.js.map

/***/ },
/* 39 */
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
	    function ExpertService(http) {
	        this.http = http;
	        this.Url = "http://localhost:50353/api/expert";
	    }
	    ExpertService.prototype.getStatus = function () {
	        return this.http.get(this.Url)
	            .map(function (res) { return res.json(); })
	            .catch(this.handleError);
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
	        return this.http.post(this.Url, body, options) // ...using post request
	            .map(function (res) { return res.json(); }) // ...and calling .json() on the response to return data
	            .catch(this.handleError);
	    };
	    // Update a status
	    ExpertService.prototype.updateStatus = function (body) {
	        var bodyString = JSON.stringify(body); // Stringify payload
	        var headers = new http_1.Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
	        var options = new http_1.RequestOptions({ headers: headers }); // Create a request option
	        return this.http.put(this.Url + "/" + body['id'], body, options) // ...using put request
	            .map(function (res) { return res.json(); }) // ...and calling .json() on the response to return data
	            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); }); //...errors if any
	    };
	    // Delete a status
	    ExpertService.prototype.removeStatus = function (_id) {
	        return this.http.delete(this.Url + "/" + _id) // ...using put request
	            .map(function (res) { return res.json(); }) // ...and calling .json() on the response to return data
	            .catch(this.handleError); //...errors if any
	    };
	    ExpertService.prototype.addComment = function (comment) {
	        var commentString = JSON.stringify(comment); // Stringify payload
	        var headers = new http_1.Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
	        var options = new http_1.RequestOptions({ headers: headers }); // Create a request option
	        return this.http.post(this.Url + '/addcomments/', comment, options) // ...using post request
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
/* 40 */
/***/ function(module, exports) {

	module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-2\" hidden></div>\n        <div class=\"col-md-8\">\n            <div>\n                <app-post>\n                </app-post>\n            </div>\n            <div>\n                <app-feed *ngFor=\"let status of  userExperStatuses\" >                    \n                </app-feed>\n            </div>\n        </div>\n        <div class=\"col-md-2\" hidden></div>\n    </div>\n\n</div>"

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYmNmNTBkYTQxNDE4MTBmNDdkMzQiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Jvb3Qtc2VydmVyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ6b25lLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvYXBwLm1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9mb3Jtc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL3JvdXRlclwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuY3NzP2RkYzMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3Bvc3QvcG9zdC5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9zZXJ2aWNlcy9lbWl0dGVyLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9zZXJ2aWNlcy91c2Vyc3RhdHVzLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvaHR0cFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvUnhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9jYXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZVwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvc2VydmljZXMvc3RhdHVzVHlwZS5zZXZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9tb2RlbHMvdXNlcnN0YXR1cy5qcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcG9zdC9wb3N0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9mZWVkL2ZlZWQuY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9mZWVkL2ZlZWQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZlZWRib3gvZmVlZGJveC5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZlZWRib3gvZmVlZGJveC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZmVlZGJveC9mZWVkYm94LmNvbXBvbmVudC5jc3M/ZmE4NSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZmVlZGJveC9mZWVkYm94LmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZlZWRib3gvZGV0YWlsc3RhdHVzL2RldGFpbHN0YXR1cy5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZlZWRib3gvZGV0YWlsc3RhdHVzL2RldGFpbHN0YXR1cy5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY29tbWVudC9jb21tZW50LWxpc3QuY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jb21tZW50L2NvbW1lbnQtbGlzdC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY29tbWVudC9jb21tZW50LWZvcm0uY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jb21tZW50L2NvbW1lbnQtZm9ybS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZG9tYWluZXhwZXJ0L2RvbWFpbmV4cGVydC5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9zZXJ2aWNlcy9leHBlcnQuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZG9tYWluZXhwZXJ0L2RvbWFpbmV4cGVydC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL3BpcGVzL2RhdGUtZm9ybWF0LnBpcGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQ3RDQSx3QkFBc0M7QUFDdEMsd0JBQWlCO0FBQ2pCLHFDQUErQztBQUMvQyxtREFBeUQ7QUFDekQsMkNBQTZDO0FBRTdDLHNCQUFjLEVBQUUsQ0FBQztBQUNqQixLQUFNLFFBQVEsR0FBRyx3Q0FBbUIsRUFBRSxDQUFDO0FBRXZDLG9CQUF5QixNQUFXO0tBQ2hDLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1NBQy9CLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO2FBQ2xDLElBQUksRUFBRSwyQkFBMkI7YUFDakMsVUFBVSxFQUFFO2lCQUNSLE9BQU8sRUFBRSxHQUFHO2lCQUNaLFVBQVUsRUFBRSxNQUFNLENBQUMsR0FBRztpQkFDdEIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxNQUFNO2lCQUN4QixPQUFPLEVBQUUsS0FBSztpQkFDZCw2RkFBNkY7aUJBQzdGLDZEQUE2RDtpQkFDN0QsUUFBUSxFQUFFLG1FQUFtRTtjQUNoRjthQUNELGFBQWEsRUFBRSxVQUFDLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLEtBQUs7aUJBQ3RELDZFQUE2RTtpQkFDN0UsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUNkLE1BQU0sQ0FBQyxJQUFJLENBQUM7YUFDaEIsQ0FBQztVQUNKLENBQUMsQ0FBQztTQUVILE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFrQixjQUFNLGVBQVEsQ0FBQyxlQUFlLENBQUMsc0JBQVMsQ0FBQyxFQUFuQyxDQUFtQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQUk7YUFDeEYsT0FBTyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7U0FDNUIsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0tBQ2YsQ0FBQyxDQUFDLENBQUM7QUFDUCxFQUFDO0FBeEJELDZCQXdCQzs7Ozs7OztBQ2pDRCwwRDs7Ozs7O0FDQUEscUM7Ozs7OztBQ0FBLDJDOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNEMsUUFBUTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVSxzQkFBc0I7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCLGtEQUFrRDtBQUNuRSxrQkFBaUIsMERBQTBEO0FBQzNFLGtCQUFpQix1RkFBdUY7QUFDeEc7QUFDQSxrQkFBaUIscUZBQXFGO0FBQ3RHLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLHVDOzs7Ozs7QUM3REEsNEM7Ozs7OztBQ0FBLDZDOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE0QyxRQUFRO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLDBDOzs7Ozs7QUNyQkEsbU07Ozs7Ozs7QUNDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7Ozs7Ozs7QUNQQTtBQUNBOzs7QUFHQTtBQUNBLHNEQUFxRCx5SEFBeUgsNEJBQTRCLE9BQU8sR0FBRzs7QUFFcE47Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0IsaUJBQWlCO0FBQ2pDO0FBQ0E7QUFDQSx5Q0FBd0MsZ0JBQWdCO0FBQ3hELEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0IsaUJBQWlCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBWSxvQkFBb0I7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTRDLFFBQVE7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLDJDOzs7Ozs7QUN2QkEscW1COzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE0QyxRQUFRO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXFELDhDQUE4QyxFQUFFO0FBQ3JHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSwyQzs7Ozs7O0FDcEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTRDLFFBQVE7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Qzs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTRDLFFBQVE7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVUsUUFBUTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFpQyxtQkFBbUIsRUFBRTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFpQyxtQkFBbUIsRUFBRTtBQUN0RDtBQUNBO0FBQ0E7QUFDQSw4Q0FBNkM7QUFDN0MsMkNBQTBDLHFDQUFxQyxFQUFFO0FBQ2pGLGtEQUFpRCxtQkFBbUIsRUFBRTtBQUN0RTtBQUNBLGtDQUFpQyxtQkFBbUIsRUFBRTtBQUN0RDtBQUNBO0FBQ0E7QUFDQSw4Q0FBNkM7QUFDN0MsMkNBQTBDLHFDQUFxQyxFQUFFO0FBQ2pGLGtEQUFpRCxtQkFBbUIsRUFBRTtBQUN0RTtBQUNBLGtDQUFpQyxtQkFBbUIsRUFBRTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBOEM7QUFDOUMsMkNBQTBDLHFDQUFxQyxFQUFFO0FBQ2pGLGtEQUFpRCxtQkFBbUIsRUFBRTtBQUN0RTtBQUNBLGtDQUFpQyxtQkFBbUIsRUFBRTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQThDO0FBQzlDO0FBQ0EsMkNBQTBDLHFDQUFxQyxFQUFFO0FBQ2pGLGtEQUFpRCxtQkFBbUIsRUFBRTtBQUN0RTtBQUNBO0FBQ0Es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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQThDO0FBQzlDLDJDQUEwQyxxQ0FBcUMsRUFBRTtBQUNqRixrREFBaUQsbUJBQW1CLEVBQUU7QUFDdEU7QUFDQSxrQ0FBaUMsbUJBQW1CLEVBQUU7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBOEM7QUFDOUMsMkNBQTBDLHFDQUFxQyxFQUFFO0FBQ2pGLGtEQUFpRCxtQkFBbUIsRUFBRTtBQUN0RTtBQUNBLGtDQUFpQyxtQkFBbUIsRUFBRTtBQUN0RCxzQ0FBcUMsb0VBQW9FLEVBQUUsRUFBRTtBQUM3RztBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFpQyxtQkFBbUIsRUFBRTtBQUN0RCxzQ0FBcUM7QUFDckM7QUFDQTtBQUNBLHFEQUFvRDtBQUNwRCwyQ0FBMEMscUNBQXFDLEVBQUU7QUFDakYsa0RBQWlELG1CQUFtQixFQUFFO0FBQ3RFO0FBQ0Esa0NBQWlDLG1CQUFtQixFQUFFO0FBQ3REO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkM7Ozs7OztBQ2hGQSw2ZTs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNEMsUUFBUTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLDZDIiwiZmlsZSI6Im1haW4tc2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYmNmNTBkYTQxNDE4MTBmNDdkMzQiLCJpbXBvcnQgJ2FuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHMnO1xyXG5pbXBvcnQgJ3pvbmUuanMnO1xyXG5pbXBvcnQgeyBlbmFibGVQcm9kTW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBwbGF0Zm9ybU5vZGVEeW5hbWljIH0gZnJvbSAnYW5ndWxhcjItdW5pdmVyc2FsJztcclxuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSAnLi9hcHAvYXBwLm1vZHVsZSc7XHJcblxyXG5lbmFibGVQcm9kTW9kZSgpO1xyXG5jb25zdCBwbGF0Zm9ybSA9IHBsYXRmb3JtTm9kZUR5bmFtaWMoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChwYXJhbXM6IGFueSkgOiBQcm9taXNlPHsgaHRtbDogc3RyaW5nLCBnbG9iYWxzPzogYW55IH0+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdFpvbmUgPSBab25lLmN1cnJlbnQuZm9yayh7XHJcbiAgICAgICAgICAgIG5hbWU6ICdhbmd1bGFyLXVuaXZlcnNhbCByZXF1ZXN0JyxcclxuICAgICAgICAgICAgcHJvcGVydGllczoge1xyXG4gICAgICAgICAgICAgICAgYmFzZVVybDogJy8nLFxyXG4gICAgICAgICAgICAgICAgcmVxdWVzdFVybDogcGFyYW1zLnVybCxcclxuICAgICAgICAgICAgICAgIG9yaWdpblVybDogcGFyYW1zLm9yaWdpbixcclxuICAgICAgICAgICAgICAgIHByZWJvb3Q6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogUmVuZGVyIGp1c3QgdGhlIDxhcHA+IGNvbXBvbmVudCBpbnN0ZWFkIG9mIHdyYXBwaW5nIGl0IGluc2lkZSBhbiBleHRyYSBIVE1MIGRvY3VtZW50XHJcbiAgICAgICAgICAgICAgICAvLyBXYWl0aW5nIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL3VuaXZlcnNhbC9pc3N1ZXMvMzQ3XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudDogJzwhRE9DVFlQRSBodG1sPjxodG1sPjxoZWFkPjwvaGVhZD48Ym9keT48YXBwPjwvYXBwPjwvYm9keT48L2h0bWw+J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbkhhbmRsZUVycm9yOiAocGFyZW50Wm9uZSwgY3VycmVudFpvbmUsIHRhcmdldFpvbmUsIGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBJZiBhbnkgZXJyb3Igb2NjdXJzIHdoaWxlIHJlbmRlcmluZyB0aGUgbW9kdWxlLCByZWplY3QgdGhlIHdob2xlIG9wZXJhdGlvblxyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiByZXF1ZXN0Wm9uZS5ydW48UHJvbWlzZTxzdHJpbmc+PigoKSA9PiBwbGF0Zm9ybS5zZXJpYWxpemVNb2R1bGUoQXBwTW9kdWxlKSkudGhlbihodG1sID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZSh7IGh0bWw6IGh0bWwgfSk7XHJcbiAgICAgICAgfSwgcmVqZWN0KTtcclxuICAgIH0pO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9ib290LXNlcnZlci50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzXCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiem9uZS5qc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInpvbmUuanNcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuZ3VsYXIyLXVuaXZlcnNhbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XHJcbnZhciBmb3Jtc18xID0gcmVxdWlyZShcIkBhbmd1bGFyL2Zvcm1zXCIpO1xyXG52YXIgcm91dGVyXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvcm91dGVyXCIpO1xyXG52YXIgYW5ndWxhcjJfdW5pdmVyc2FsXzEgPSByZXF1aXJlKFwiYW5ndWxhcjItdW5pdmVyc2FsXCIpO1xyXG52YXIgYXBwX2NvbXBvbmVudF8xID0gcmVxdWlyZShcIi4vY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudFwiKTtcclxudmFyIGhvbWVfY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnRcIik7XHJcbnZhciBwb3N0X2NvbXBvbmVudF8xID0gcmVxdWlyZShcIi4vY29tcG9uZW50cy9wb3N0L3Bvc3QuY29tcG9uZW50XCIpO1xyXG52YXIgZmVlZF9jb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvZmVlZC9mZWVkLmNvbXBvbmVudFwiKTtcclxudmFyIGZlZWRib3hfY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi9jb21wb25lbnRzL2ZlZWRib3gvZmVlZGJveC5jb21wb25lbnRcIik7XHJcbi8vaW1wb3J0IHsgRWRpdFN0YXR1c0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9mZWVkYm94L2VkaXRzdGF0dXMvZWRpdHN0YXR1cy5jb21wb25lbnQnO1xyXG52YXIgZGV0YWlsc3RhdHVzX2NvbXBvbmVudF8xID0gcmVxdWlyZShcIi4vY29tcG9uZW50cy9mZWVkYm94L2RldGFpbHN0YXR1cy9kZXRhaWxzdGF0dXMuY29tcG9uZW50XCIpO1xyXG52YXIgY29tbWVudF9saXN0X2NvbXBvbmVudF8xID0gcmVxdWlyZShcIi4vY29tcG9uZW50cy9jb21tZW50L2NvbW1lbnQtbGlzdC5jb21wb25lbnRcIik7XHJcbnZhciBjb21tZW50X2Zvcm1fY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi9jb21wb25lbnRzL2NvbW1lbnQvY29tbWVudC1mb3JtLmNvbXBvbmVudFwiKTtcclxudmFyIGRvbWFpbmV4cGVydF9jb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvZG9tYWluZXhwZXJ0L2RvbWFpbmV4cGVydC5jb21wb25lbnRcIik7XHJcbnZhciBkYXRlX2Zvcm1hdF9waXBlXzEgPSByZXF1aXJlKFwiLi9waXBlcy9kYXRlLWZvcm1hdC5waXBlXCIpO1xyXG52YXIgdXNlcnN0YXR1c19zZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi9zZXJ2aWNlcy91c2Vyc3RhdHVzLnNlcnZpY2VcIik7XHJcbnZhciBzdGF0dXNUeXBlX3NldmljZV8xID0gcmVxdWlyZShcIi4vc2VydmljZXMvc3RhdHVzVHlwZS5zZXZpY2VcIik7XHJcbnZhciBlbWl0dGVyX3NlcnZpY2VfMSA9IHJlcXVpcmUoXCIuL3NlcnZpY2VzL2VtaXR0ZXIuc2VydmljZVwiKTtcclxudmFyIEFwcE1vZHVsZSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBBcHBNb2R1bGUoKSB7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gQXBwTW9kdWxlO1xyXG59KCkpO1xyXG5BcHBNb2R1bGUgPSBfX2RlY29yYXRlKFtcclxuICAgIGNvcmVfMS5OZ01vZHVsZSh7XHJcbiAgICAgICAgYm9vdHN0cmFwOiBbYXBwX2NvbXBvbmVudF8xLkFwcENvbXBvbmVudF0sXHJcbiAgICAgICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgICAgIGFwcF9jb21wb25lbnRfMS5BcHBDb21wb25lbnQsXHJcbiAgICAgICAgICAgIGhvbWVfY29tcG9uZW50XzEuSG9tZUNvbXBvbmVudCxcclxuICAgICAgICAgICAgcG9zdF9jb21wb25lbnRfMS5Qb3N0Q29tcG9uZW50LFxyXG4gICAgICAgICAgICBmZWVkX2NvbXBvbmVudF8xLkZlZWRDb21wb25lbnQsXHJcbiAgICAgICAgICAgIGZlZWRib3hfY29tcG9uZW50XzEuRmVlZEJveENvbXBvbmVudCxcclxuICAgICAgICAgICAgY29tbWVudF9saXN0X2NvbXBvbmVudF8xLkNvbW1lbnRMaXN0Q29tcG9uZW50LFxyXG4gICAgICAgICAgICBjb21tZW50X2Zvcm1fY29tcG9uZW50XzEuQ29tbWVudEZvcm1Db21wb25lbnQsXHJcbiAgICAgICAgICAgIGRhdGVfZm9ybWF0X3BpcGVfMS5EYXRlRm9ybWF0UGlwZSxcclxuICAgICAgICAgICAgZG9tYWluZXhwZXJ0X2NvbXBvbmVudF8xLkRvbWFpbkV4cGVydENvbXBvbmVudCxcclxuICAgICAgICAgICAgZGV0YWlsc3RhdHVzX2NvbXBvbmVudF8xLkRldGFpbFN0YXR1c0NvbXBvbmVudFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgaW1wb3J0czogW1xyXG4gICAgICAgICAgICBhbmd1bGFyMl91bml2ZXJzYWxfMS5Vbml2ZXJzYWxNb2R1bGUsXHJcbiAgICAgICAgICAgIGZvcm1zXzEuRm9ybXNNb2R1bGUsXHJcbiAgICAgICAgICAgIHJvdXRlcl8xLlJvdXRlck1vZHVsZS5mb3JSb290KFtcclxuICAgICAgICAgICAgICAgIHsgcGF0aDogJycsIHJlZGlyZWN0VG86ICdob21lJywgcGF0aE1hdGNoOiAnZnVsbCcgfSxcclxuICAgICAgICAgICAgICAgIHsgcGF0aDogJ2hvbWUnLCBjb21wb25lbnQ6IGhvbWVfY29tcG9uZW50XzEuSG9tZUNvbXBvbmVudCB9LFxyXG4gICAgICAgICAgICAgICAgeyBwYXRoOiAnaG9tZS9kb21haW5leHBlcnQnLCBjb21wb25lbnQ6IGRvbWFpbmV4cGVydF9jb21wb25lbnRfMS5Eb21haW5FeHBlcnRDb21wb25lbnQgfSxcclxuICAgICAgICAgICAgICAgIC8vZGV0YWlsIFxyXG4gICAgICAgICAgICAgICAgeyBwYXRoOiAnaG9tZS9kZXRhaWwvOmlkJywgY29tcG9uZW50OiBkZXRhaWxzdGF0dXNfY29tcG9uZW50XzEuRGV0YWlsU3RhdHVzQ29tcG9uZW50IH0sXHJcbiAgICAgICAgICAgICAgICB7IHBhdGg6ICcqKicsIHJlZGlyZWN0VG86ICdob21lJyB9XHJcbiAgICAgICAgICAgIF0pXHJcbiAgICAgICAgXSxcclxuICAgICAgICBwcm92aWRlcnM6IFt1c2Vyc3RhdHVzX3NlcnZpY2VfMS5Vc2VyU3RhdHVzU2VydmljZSwgZW1pdHRlcl9zZXJ2aWNlXzEuRW1pdHRlclNlcnZpY2UsIHN0YXR1c1R5cGVfc2V2aWNlXzEuU3RhdHVzVHlwZVNlcnZpY2VdXHJcbiAgICB9KVxyXG5dLCBBcHBNb2R1bGUpO1xyXG5leHBvcnRzLkFwcE1vZHVsZSA9IEFwcE1vZHVsZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLm1vZHVsZS5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvYXBwLm1vZHVsZS5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9mb3Jtc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2Zvcm1zXCJcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvcm91dGVyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvcm91dGVyXCJcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBjb3JlXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcclxudmFyIEFwcENvbXBvbmVudCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBBcHBDb21wb25lbnQoKSB7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gQXBwQ29tcG9uZW50O1xyXG59KCkpO1xyXG5BcHBDb21wb25lbnQgPSBfX2RlY29yYXRlKFtcclxuICAgIGNvcmVfMS5Db21wb25lbnQoe1xyXG4gICAgICAgIHNlbGVjdG9yOiAnYXBwJyxcclxuICAgICAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9hcHAuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgICAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL2FwcC5jb21wb25lbnQuY3NzJyldXHJcbiAgICB9KVxyXG5dLCBBcHBDb21wb25lbnQpO1xyXG5leHBvcnRzLkFwcENvbXBvbmVudCA9IEFwcENvbXBvbmVudDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLmNvbXBvbmVudC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiXFxuXFxuPGRpdiBjbGFzcz0nY29udGFpbmVyLWZsdWlkJz5cXG4gICAgPGRpdiBjbGFzcz0ncm93Jz5cXG4gICAgICAgIDxkaXYgPlxcbiAgICAgICAgICAgIDxyb3V0ZXItb3V0bGV0PlxcblxcbiAgICAgICAgICAgIDwvcm91dGVyLW91dGxldD5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG48L2Rpdj5cXG5cXG5cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2FwcC5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgICAvKiBPbiBzbWFsbCBzY3JlZW5zLCB0aGUgbmF2IG1lbnUgc3BhbnMgdGhlIGZ1bGwgd2lkdGggb2YgdGhlIHNjcmVlbi4gTGVhdmUgYSBzcGFjZSBmb3IgaXQuICovXFxuICAgIC5ib2R5LWNvbnRlbnQge1xcbiAgICAgICAgcGFkZGluZy10b3A6IDUwcHg7XFxuICAgIH1cXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cdHZhciBsaXN0ID0gW107XHJcblxyXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcclxuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XHJcblx0XHR2YXIgcmVzdWx0ID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHRoaXNbaV07XHJcblx0XHRcdGlmKGl0ZW1bMl0pIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGl0ZW1bMV0gKyBcIn1cIik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goaXRlbVsxXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQuam9pbihcIlwiKTtcclxuXHR9O1xyXG5cclxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxyXG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcclxuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XHJcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcclxuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxyXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xyXG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXHJcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXHJcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXHJcblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXHJcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XHJcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XHJcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHRyZXR1cm4gbGlzdDtcclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xyXG52YXIgSG9tZUNvbXBvbmVudCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBIb21lQ29tcG9uZW50KCkge1xyXG4gICAgICAgIHRoaXMudHlwZXMgPSBbXHJcbiAgICAgICAgICAgICdEb2N0b3InLCAnUHN5Y2hvbG9naXN0JywgJ090aGVyJ1xyXG4gICAgICAgIF07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gSG9tZUNvbXBvbmVudDtcclxufSgpKTtcclxuSG9tZUNvbXBvbmVudCA9IF9fZGVjb3JhdGUoW1xyXG4gICAgY29yZV8xLkNvbXBvbmVudCh7XHJcbiAgICAgICAgc2VsZWN0b3I6ICdob21lJyxcclxuICAgICAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9ob21lLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICB9KVxyXG5dLCBIb21lQ29tcG9uZW50KTtcclxuZXhwb3J0cy5Ib21lQ29tcG9uZW50ID0gSG9tZUNvbXBvbmVudDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aG9tZS5jb21wb25lbnQuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjwhLS08cCAqbmdJZj1cXFwiIXN0YXR1c1xcXCI+PGVtPkxvYWRpbmcuLi48L2VtPjwvcD4tLT5cXG48bmF2PlxcbiAgICA8YSBbcm91dGVyTGlua109XFxcIlsnJ11cXFwiPkhvbWU8L2E+XFxuICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvaG9tZS9kb21haW5leHBlcnQnXVxcXCI+RG9tYWluIEV4cGVydDwvYT5cXG48L25hdj5cXG5cXG5cXG48ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTJcXFwiPjwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLThcXFwiPlxcbiAgICAgICAgICAgIDxkaXY+XFxuICAgICAgICAgICAgICAgIDxhcHAtcG9zdD5cXG4gICAgICAgICAgICAgICAgPC9hcHAtcG9zdD5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2PlxcbiAgICAgICAgICAgICAgICA8YXBwLWZlZWQ+XFxuICAgICAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgPC9hcHAtZmVlZD5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTJcXFwiPjwvZGl2PlxcbiAgICA8L2Rpdj5cXG5cXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XHJcbnZhciBlbWl0dGVyX3NlcnZpY2VfMSA9IHJlcXVpcmUoXCIuLi8uLi9zZXJ2aWNlcy9lbWl0dGVyLnNlcnZpY2VcIik7XHJcbnZhciB1c2Vyc3RhdHVzX3NlcnZpY2VfMSA9IHJlcXVpcmUoXCIuLi8uLi9zZXJ2aWNlcy91c2Vyc3RhdHVzLnNlcnZpY2VcIik7XHJcbnZhciBzdGF0dXNUeXBlX3NldmljZV8xID0gcmVxdWlyZShcIi4uLy4uL3NlcnZpY2VzL3N0YXR1c1R5cGUuc2V2aWNlXCIpO1xyXG52YXIgdXNlcnN0YXR1c18xID0gcmVxdWlyZShcIi4uLy4uL21vZGVscy91c2Vyc3RhdHVzXCIpO1xyXG52YXIgUG9zdENvbXBvbmVudCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBQb3N0Q29tcG9uZW50KHN0YXR1c1NlcnZpY2UsIF9zdGF0dXNUeXBlU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuc3RhdHVzU2VydmljZSA9IHN0YXR1c1NlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5fc3RhdHVzVHlwZVNlcnZpY2UgPSBfc3RhdHVzVHlwZVNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5zdGF0dXNUeXBlcyA9IFtdO1xyXG4gICAgICAgIC8vIExvY2FsIHByb3BlcnRpZXNcclxuICAgICAgICB0aGlzLm1vZGVsID0gbmV3IHVzZXJzdGF0dXNfMS5Vc2VyU3RhdHVzKCk7XHJcbiAgICAgICAgdGhpcy5lZGl0aW5nID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBQb3N0Q29tcG9uZW50LnByb3RvdHlwZS5zdWJtaXRTdGF0dXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAvLyBWYXJpYWJsZSB0byBob2xkIGEgcmVmZXJlbmNlIG9mIGFkZENvbW1lbnQvdXBkYXRlQ29tbWVudFxyXG4gICAgICAgIHZhciBzdGF0dXNPcGVyYXRpb247XHJcbiAgICAgICAgc3RhdHVzT3BlcmF0aW9uID0gdGhpcy5zdGF0dXNTZXJ2aWNlLmFkZFN0YXR1cyh0aGlzLm1vZGVsKTtcclxuICAgICAgICAvL2lmICghdGhpcy5lZGl0aW5nKSB7XHJcbiAgICAgICAgLy8gICAgLy8gQ3JlYXRlIGEgbmV3IHN0YXR1c1xyXG4gICAgICAgIC8vICAgIHN0YXR1c09wZXJhdGlvbiA9IHRoaXMuc3RhdHVzU2VydmljZS5hZGRTdGF0dXModGhpcy5tb2RlbClcclxuICAgICAgICAvL31cclxuICAgICAgICAvL30gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgLy8gVXBkYXRlIGFuIGV4aXN0aW5nIHN0YXR1c1xyXG4gICAgICAgIC8vICAgIHN0YXR1c09wZXJhdGlvbiA9IHRoaXMuc3RhdHVzU2VydmljZS51cGRhdGVTdGF0dXModGhpcy5tb2RlbClcclxuICAgICAgICAvL31cclxuICAgICAgICAvLyBTdWJzY3JpYmUgdG8gb2JzZXJ2YWJsZVxyXG4gICAgICAgIHN0YXR1c09wZXJhdGlvbi5zdWJzY3JpYmUoZnVuY3Rpb24gKHN0YXR1cykge1xyXG4gICAgICAgICAgICAvLyBFbWl0IGxpc3QgZXZlbnRcclxuICAgICAgICAgICAgZW1pdHRlcl9zZXJ2aWNlXzEuRW1pdHRlclNlcnZpY2UuZ2V0KF90aGlzLmxpc3RJZCkuZW1pdChzdGF0dXMpO1xyXG4gICAgICAgICAgICAvLyBFbXB0eSBtb2RlbFxyXG4gICAgICAgICAgICBfdGhpcy5tb2RlbCA9IG5ldyB1c2Vyc3RhdHVzXzEuVXNlclN0YXR1cygpO1xyXG4gICAgICAgICAgICAvLyBTd2l0Y2ggZWRpdGluZyBzdGF0dXNcclxuICAgICAgICAgICAgLy9pZiAodGhpcy5lZGl0aW5nKSB0aGlzLmVkaXRpbmcgPSAhdGhpcy5lZGl0aW5nO1xyXG4gICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBQb3N0Q29tcG9uZW50LnByb3RvdHlwZS5uZ09uSW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIC8vQ2FsbGVkIGFmdGVyIHRoZSBjb25zdHJ1Y3RvciwgaW5pdGlhbGl6aW5nIGlucHV0IHByb3BlcnRpZXMsIGFuZCB0aGUgZmlyc3QgY2FsbCB0byBuZ09uQ2hhbmdlcy5cclxuICAgICAgICAvL0FkZCAnaW1wbGVtZW50cyBPbkluaXQnIHRvIHRoZSBjbGFzcy5cclxuICAgICAgICB0aGlzLl9zdGF0dXNUeXBlU2VydmljZS5nZXRTdGF0dXNUeXBlKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShmdW5jdGlvbiAocmVzU3RhdHVzVHlwZURhdGEpIHsgcmV0dXJuIF90aGlzLnN0YXR1c1R5cGVzID0gcmVzU3RhdHVzVHlwZURhdGE7IH0pO1xyXG4gICAgfTtcclxuICAgIFBvc3RDb21wb25lbnQucHJvdG90eXBlLm5nT25DaGFuZ2VzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgLy8gTGlzdGVuIHRvIHRoZSAnZWRpdCdlbWl0dGVkIGV2ZW50IHNvIGFzIHBvcHVsYXRlIHRoZSBtb2RlbFxyXG4gICAgICAgIC8vIHdpdGggdGhlIGV2ZW50IHBheWxvYWRcclxuICAgICAgICBlbWl0dGVyX3NlcnZpY2VfMS5FbWl0dGVyU2VydmljZS5nZXQodGhpcy5lZGl0SWQpLnN1YnNjcmliZShmdW5jdGlvbiAoc3RhdHVzKSB7XHJcbiAgICAgICAgICAgIF90aGlzLm1vZGVsID0gc3RhdHVzO1xyXG4gICAgICAgICAgICBfdGhpcy5lZGl0aW5nID0gdHJ1ZTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gUG9zdENvbXBvbmVudDtcclxufSgpKTtcclxuX19kZWNvcmF0ZShbXHJcbiAgICBjb3JlXzEuSW5wdXQoKSxcclxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpXHJcbl0sIFBvc3RDb21wb25lbnQucHJvdG90eXBlLCBcImVkaXRJZFwiLCB2b2lkIDApO1xyXG5fX2RlY29yYXRlKFtcclxuICAgIGNvcmVfMS5JbnB1dCgpLFxyXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcclxuXSwgUG9zdENvbXBvbmVudC5wcm90b3R5cGUsIFwibGlzdElkXCIsIHZvaWQgMCk7XHJcblBvc3RDb21wb25lbnQgPSBfX2RlY29yYXRlKFtcclxuICAgIGNvcmVfMS5Db21wb25lbnQoe1xyXG4gICAgICAgIHNlbGVjdG9yOiAnYXBwLXBvc3QnLFxyXG4gICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3Bvc3QuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgICAgICBwcm92aWRlcnM6IFt1c2Vyc3RhdHVzX3NlcnZpY2VfMS5Vc2VyU3RhdHVzU2VydmljZSwgc3RhdHVzVHlwZV9zZXZpY2VfMS5TdGF0dXNUeXBlU2VydmljZV1cclxuICAgIH0pLFxyXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFt1c2Vyc3RhdHVzX3NlcnZpY2VfMS5Vc2VyU3RhdHVzU2VydmljZSwgc3RhdHVzVHlwZV9zZXZpY2VfMS5TdGF0dXNUeXBlU2VydmljZV0pXHJcbl0sIFBvc3RDb21wb25lbnQpO1xyXG5leHBvcnRzLlBvc3RDb21wb25lbnQgPSBQb3N0Q29tcG9uZW50O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1wb3N0LmNvbXBvbmVudC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9wb3N0L3Bvc3QuY29tcG9uZW50LmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxuLyogKiAqIC4vYXBwL2VtaXR0ZXIuc2VydmljZS50cyAqICogKi9cclxuLy8gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vc2FzeGFcclxuLy8gSW1wb3J0c1xyXG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XHJcbnZhciBFbWl0dGVyU2VydmljZSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBFbWl0dGVyU2VydmljZSgpIHtcclxuICAgIH1cclxuICAgIC8vIFNldCBhIG5ldyBldmVudCBpbiB0aGUgc3RvcmUgd2l0aCBhIGdpdmVuIElEXHJcbiAgICAvLyBhcyBrZXlcclxuICAgIEVtaXR0ZXJTZXJ2aWNlLmdldCA9IGZ1bmN0aW9uIChJRCkge1xyXG4gICAgICAgIGlmICghdGhpcy5fZW1pdHRlcnNbSURdKVxyXG4gICAgICAgICAgICB0aGlzLl9lbWl0dGVyc1tJRF0gPSBuZXcgY29yZV8xLkV2ZW50RW1pdHRlcigpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9lbWl0dGVyc1tJRF07XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEVtaXR0ZXJTZXJ2aWNlO1xyXG59KCkpO1xyXG4vLyBFdmVudCBzdG9yZVxyXG5FbWl0dGVyU2VydmljZS5fZW1pdHRlcnMgPSB7fTtcclxuRW1pdHRlclNlcnZpY2UgPSBfX2RlY29yYXRlKFtcclxuICAgIGNvcmVfMS5JbmplY3RhYmxlKClcclxuXSwgRW1pdHRlclNlcnZpY2UpO1xyXG5leHBvcnRzLkVtaXR0ZXJTZXJ2aWNlID0gRW1pdHRlclNlcnZpY2U7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVtaXR0ZXIuc2VydmljZS5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvc2VydmljZXMvZW1pdHRlci5zZXJ2aWNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbi8vaW1wb3J0IHsgTGlrZXMgfSBmcm9tICcuLy4uL21vZGVscy9saWtlcyc7XHJcbnZhciBjb3JlXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcclxudmFyIGh0dHBfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9odHRwXCIpO1xyXG52YXIgUnhfMSA9IHJlcXVpcmUoXCJyeGpzL1J4XCIpO1xyXG4vLyBJbXBvcnQgUnhKcyByZXF1aXJlZCBtZXRob2RzXHJcbnJlcXVpcmUoXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIik7XHJcbnJlcXVpcmUoXCJyeGpzL2FkZC9vcGVyYXRvci9jYXRjaFwiKTtcclxucmVxdWlyZShcInJ4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZVwiKTtcclxudmFyIFVzZXJTdGF0dXNTZXJ2aWNlID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFVzZXJTdGF0dXNTZXJ2aWNlKGh0dHApIHtcclxuICAgICAgICB0aGlzLmh0dHAgPSBodHRwO1xyXG4gICAgICAgIHRoaXMuVXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjUwMzUzL2FwaS9mZWVkXCI7XHJcbiAgICB9XHJcbiAgICBVc2VyU3RhdHVzU2VydmljZS5wcm90b3R5cGUuaGFuZGxlRXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAvLyBJbiBhIHJlYWwgd29ybGQgYXBwLCB3ZSBtaWdodCB1c2UgYSByZW1vdGUgbG9nZ2luZyBpbmZyYXN0cnVjdHVyZVxyXG4gICAgICAgIHZhciBlcnJNc2c7XHJcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgaHR0cF8xLlJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIHZhciBib2R5ID0gZXJyb3IuanNvbigpIHx8ICcnO1xyXG4gICAgICAgICAgICB2YXIgZXJyID0gYm9keS5lcnJvciB8fCBKU09OLnN0cmluZ2lmeShib2R5KTtcclxuICAgICAgICAgICAgZXJyTXNnID0gZXJyb3Iuc3RhdHVzICsgXCIgLSBcIiArIChlcnJvci5zdGF0dXNUZXh0IHx8ICcnKSArIFwiIFwiICsgZXJyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZXJyTXNnID0gZXJyb3IubWVzc2FnZSA/IGVycm9yLm1lc3NhZ2UgOiBlcnJvci50b1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmVycm9yKGVyck1zZyk7XHJcbiAgICAgICAgcmV0dXJuIFJ4XzEuT2JzZXJ2YWJsZS50aHJvdyhlcnJNc2cpO1xyXG4gICAgfTtcclxuICAgIFVzZXJTdGF0dXNTZXJ2aWNlLnByb3RvdHlwZS5nZXRTdGF0dXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5VcmwpXHJcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzLmpzb24oKTsgfSlcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgfTtcclxuICAgIFVzZXJTdGF0dXNTZXJ2aWNlLnByb3RvdHlwZS5zdGF0dXNEZXRhaWwgPSBmdW5jdGlvbiAoX2lkKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5VcmwgKyAnLycgKyBfaWQpXHJcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzLmpzb24oKTsgfSlcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgfTtcclxuICAgIFVzZXJTdGF0dXNTZXJ2aWNlLnByb3RvdHlwZS5kaXNMaWtlID0gZnVuY3Rpb24gKF9pZCkge1xyXG4gICAgICAgIHZhciBib2R5U3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoX2lkKTsgLy8gU3RyaW5naWZ5IHBheWxvYWRcclxuICAgICAgICB2YXIgaGVhZGVycyA9IG5ldyBodHRwXzEuSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7IC8vIC4uLiBTZXQgY29udGVudCB0eXBlIHRvIEpTT05cclxuICAgICAgICB2YXIgb3B0aW9ucyA9IG5ldyBodHRwXzEuUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pOyAvLyBDcmVhdGUgYSByZXF1ZXN0IG9wdGlvblxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLlVybCArICcvJyArIF9pZCArICcvdW5saWtlJywgX2lkLCBvcHRpb25zKVxyXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChyZXMpIHsgcmV0dXJuIHJlcy5qc29uKCk7IH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH07XHJcbiAgICBVc2VyU3RhdHVzU2VydmljZS5wcm90b3R5cGUuYWRkTGlrZSA9IGZ1bmN0aW9uIChfaWQpIHtcclxuICAgICAgICB2YXIgYm9keVN0cmluZyA9IEpTT04uc3RyaW5naWZ5KF9pZCk7IC8vIFN0cmluZ2lmeSBwYXlsb2FkXHJcbiAgICAgICAgdmFyIGhlYWRlcnMgPSBuZXcgaHR0cF8xLkhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pOyAvLyAuLi4gU2V0IGNvbnRlbnQgdHlwZSB0byBKU09OXHJcbiAgICAgICAgdmFyIG9wdGlvbnMgPSBuZXcgaHR0cF8xLlJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KTsgLy8gQ3JlYXRlIGEgcmVxdWVzdCBvcHRpb25cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5VcmwgKyAnLycgKyBfaWQgKyAnL2xpa2UnLCBfaWQsIG9wdGlvbnMpXHJcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzLmpzb24oKTsgfSlcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgfTtcclxuICAgIC8vIGFkZExpa2UoX2lkOnN0cmluZyk6T2JzZXJ2YWJsZTxsaWtlc1tdPntcclxuICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5saWtlVXJsKycvJysgX2lkICsgJy9saWtlJylcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSlcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vYWRkIGEgbmV3IHN0YXR1c1xyXG4gICAgVXNlclN0YXR1c1NlcnZpY2UucHJvdG90eXBlLmFkZFN0YXR1cyA9IGZ1bmN0aW9uIChib2R5KSB7XHJcbiAgICAgICAgdmFyIGJvZHlTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShib2R5KTsgLy8gU3RyaW5naWZ5IHBheWxvYWRcclxuICAgICAgICB2YXIgaGVhZGVycyA9IG5ldyBodHRwXzEuSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7IC8vIC4uLiBTZXQgY29udGVudCB0eXBlIHRvIEpTT05cclxuICAgICAgICB2YXIgb3B0aW9ucyA9IG5ldyBodHRwXzEuUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pOyAvLyBDcmVhdGUgYSByZXF1ZXN0IG9wdGlvblxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLlVybCwgYm9keSwgb3B0aW9ucykgLy8gLi4udXNpbmcgcG9zdCByZXF1ZXN0XHJcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzLmpzb24oKTsgfSkgLy8gLi4uYW5kIGNhbGxpbmcgLmpzb24oKSBvbiB0aGUgcmVzcG9uc2UgdG8gcmV0dXJuIGRhdGFcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgfTtcclxuICAgIC8vIFVwZGF0ZSBhIHN0YXR1c1xyXG4gICAgVXNlclN0YXR1c1NlcnZpY2UucHJvdG90eXBlLnVwZGF0ZVN0YXR1cyA9IGZ1bmN0aW9uIChpZCwgYm9keSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGlkKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnbWFoZXNoJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYm9keSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYm9keS5TdGF0dXMpO1xyXG4gICAgICAgIHZhciBib2R5U3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoYm9keSk7IC8vIFN0cmluZ2lmeSBwYXlsb2FkXHJcbiAgICAgICAgY29uc29sZS5sb2coYm9keVN0cmluZyk7XHJcbiAgICAgICAgdmFyIGhlYWRlcnMgPSBuZXcgaHR0cF8xLkhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pOyAvLyAuLi4gU2V0IGNvbnRlbnQgdHlwZSB0byBKU09OXHJcbiAgICAgICAgdmFyIG9wdGlvbnMgPSBuZXcgaHR0cF8xLlJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KTsgLy8gQ3JlYXRlIGEgcmVxdWVzdCBvcHRpb25cclxuICAgICAgICB2YXIgZWRpdGVkVGV4dCA9IGJvZHkuU3RhdHVzO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucHV0KHRoaXMuVXJsICsgJy9lZGl0JyArICcvJyArIGlkICsgJy8nICsgZWRpdGVkVGV4dCwgZWRpdGVkVGV4dCkgLy8gLi4udXNpbmcgcHV0IHJlcXVlc3RcclxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAocmVzKSB7IHJldHVybiByZXMuanNvbigpOyB9KSAvLyAuLi5hbmQgY2FsbGluZyAuanNvbigpIG9uIHRoZSByZXNwb25zZSB0byByZXR1cm4gZGF0YVxyXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7IHJldHVybiBSeF8xLk9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpLmVycm9yIHx8ICdTZXJ2ZXIgZXJyb3InKTsgfSk7IC8vLi4uZXJyb3JzIGlmIGFueVxyXG4gICAgfTtcclxuICAgIC8vIGRldGFpbCBvZiBzdGF0dXMgXHJcbiAgICAvLyBEZWxldGUgYSBzdGF0dXNcclxuICAgIFVzZXJTdGF0dXNTZXJ2aWNlLnByb3RvdHlwZS5yZW1vdmVTdGF0dXMgPSBmdW5jdGlvbiAoX2lkKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUodGhpcy5VcmwgKyBcIi9cIiArIF9pZCkgLy8gLi4udXNpbmcgcHV0IHJlcXVlc3RcclxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAocmVzKSB7IHJldHVybiByZXMuanNvbigpOyB9KSAvLyAuLi5hbmQgY2FsbGluZyAuanNvbigpIG9uIHRoZSByZXNwb25zZSB0byByZXR1cm4gZGF0YVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7IC8vLi4uZXJyb3JzIGlmIGFueVxyXG4gICAgfTtcclxuICAgIC8vIEFkZCBhIG5ldyBjb21tZW50XHJcbiAgICBVc2VyU3RhdHVzU2VydmljZS5wcm90b3R5cGUuYWRkQ29tbWVudCA9IGZ1bmN0aW9uIChpZCwgYm9keSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGlkKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhib2R5KTtcclxuICAgICAgICB2YXIgY29tbWVudHNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShib2R5KTsgLy8gU3RyaW5naWZ5IHBheWxvYWRcclxuICAgICAgICB2YXIgaGVhZGVycyA9IG5ldyBodHRwXzEuSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7IC8vIC4uLiBTZXQgY29udGVudCB0eXBlIHRvIEpTT05cclxuICAgICAgICB2YXIgb3B0aW9ucyA9IG5ldyBodHRwXzEuUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pOyAvLyBDcmVhdGUgYSByZXF1ZXN0IG9wdGlvblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGJvZHkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGlkKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm1haGVzaFwiKTtcclxuICAgICAgICB2YXIgY29tbWVudFRleHQgPSBib2R5LnRleHQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuVXJsICsgJy8nICsgaWQgKyAnLycgKyBjb21tZW50VGV4dCwgY29tbWVudFRleHQsIGhlYWRlcnMpIC8vIC4uLnVzaW5nIHBvc3QgcmVxdWVzdFxyXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChyZXMpIHsgcmV0dXJuIHJlcy5qc29uKCk7IH0pIC8vIC4uLmFuZCBjYWxsaW5nIC5qc29uKCkgb24gdGhlIHJlc3BvbnNlIHRvIHJldHVybiBkYXRhXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTsgLy8uLi5lcnJvcnMgaWYgYW55XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFVzZXJTdGF0dXNTZXJ2aWNlO1xyXG59KCkpO1xyXG5Vc2VyU3RhdHVzU2VydmljZSA9IF9fZGVjb3JhdGUoW1xyXG4gICAgY29yZV8xLkluamVjdGFibGUoKSxcclxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbaHR0cF8xLkh0dHBdKVxyXG5dLCBVc2VyU3RhdHVzU2VydmljZSk7XHJcbmV4cG9ydHMuVXNlclN0YXR1c1NlcnZpY2UgPSBVc2VyU3RhdHVzU2VydmljZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlcnN0YXR1cy5zZXJ2aWNlLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9zZXJ2aWNlcy91c2Vyc3RhdHVzLnNlcnZpY2UuanNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2h0dHBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9odHRwXCJcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4anMvUnhcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL1J4XCJcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzL2FkZC9vcGVyYXRvci9jYXRjaFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL2NhdGNoXCJcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZVwiXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvL29ic2VydmFibGUgXHJcblwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxuLy9nZXR0aW5nIHN0YXR1cyB0eXBlIFxyXG4vL2dldCgpIGZyb20gdXJsXHJcbnZhciBjb3JlXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcclxudmFyIGh0dHBfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9odHRwXCIpO1xyXG52YXIgU3RhdHVzVHlwZVNlcnZpY2UgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gU3RhdHVzVHlwZVNlcnZpY2UoX2h0dHApIHtcclxuICAgICAgICB0aGlzLl9odHRwID0gX2h0dHA7XHJcbiAgICAgICAgdGhpcy5fdXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjUwMzUzL2FwaS9zdGF0dXN0eXBlXCI7XHJcbiAgICB9XHJcbiAgICBTdGF0dXNUeXBlU2VydmljZS5wcm90b3R5cGUuZ2V0U3RhdHVzVHlwZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQodGhpcy5fdXJsKVxyXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChyZXNwb25zZSkgeyByZXR1cm4gcmVzcG9uc2UuanNvbigpOyB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gU3RhdHVzVHlwZVNlcnZpY2U7XHJcbn0oKSk7XHJcblN0YXR1c1R5cGVTZXJ2aWNlID0gX19kZWNvcmF0ZShbXHJcbiAgICBjb3JlXzEuSW5qZWN0YWJsZSgpLFxyXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtodHRwXzEuSHR0cF0pXHJcbl0sIFN0YXR1c1R5cGVTZXJ2aWNlKTtcclxuZXhwb3J0cy5TdGF0dXNUeXBlU2VydmljZSA9IFN0YXR1c1R5cGVTZXJ2aWNlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdGF0dXNUeXBlLnNldmljZS5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvc2VydmljZXMvc3RhdHVzVHlwZS5zZXZpY2UuanNcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgVXNlclN0YXR1cyA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBVc2VyU3RhdHVzKCkge1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFVzZXJTdGF0dXM7XHJcbn0oKSk7XHJcbmV4cG9ydHMuVXNlclN0YXR1cyA9IFVzZXJTdGF0dXM7XHJcbnZhciBTdGF0dXNUeXBlID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFN0YXR1c1R5cGUoaWQsIHR5cGUpIHtcclxuICAgIH1cclxuICAgIHJldHVybiBTdGF0dXNUeXBlO1xyXG59KCkpO1xyXG5leHBvcnRzLlN0YXR1c1R5cGUgPSBTdGF0dXNUeXBlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2Vyc3RhdHVzLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9tb2RlbHMvdXNlcnN0YXR1cy5qc1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxmb3JtICNmb3JtPVxcXCJuZ0Zvcm1cXFwiIChuZ1N1Ym1pdCk9XFxcInN1Ym1pdFN0YXR1cygpXFxcIiBjbGFzcz1cXFwiZm9ybS1ob3Jpem9udGFsIGJvcmRlcmVkLWdyb3VwXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwicGFuZWwgYm9yZGVyXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWhlYWRpbmcgbm9tYXJnaW50XFxcIj5cXG4gICAgICAgICAgICA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0IG5vYm9yZGVyIFxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWNhbWVyYVxcXCI+PC9pPiBQaG90by9WaWRlbzwvYT4gfFxcbiAgICAgICAgICAgIDxhIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHQgbm9ib3JkZXJcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1waG90b1xcXCI+PC9pPiBQaG90by9WaWRlbyBBbGJ1bTwvYT5cXG4gICAgICAgICAgICA8aHIgY2xhc3M9XFxcIm5vbWFyZ2ludCBub21hcmdpbmJcXFwiIC8+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWJvZHkgXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3cgXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVxcXCJcXFwiIHdpZHRoPVxcXCI0NVxcXCIgaGVpZ2h0PVxcXCI0NVxcXCIgYWx0PVxcXCJcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTExXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wgbm9ib3JkZXJcXFwiIHJvd3M9XFxcIjJcXFwiIHBsYWNlaG9sZGVyPVxcXCJXaGF0cyBvbiB5b3VyIG1pbmQ/XFxcIiBbKG5nTW9kZWwpXT1cXFwibW9kZWwuc3RhdHVzXFxcIiBuYW1lPVxcXCJ0ZXh0XFxcIiByZXF1aXJlZD48L3RleHRhcmVhPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8aHIgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgbm9tYXJnaW5iXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtNlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzZGZhc2RmYXNkZlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgKm5nRm9yPVxcXCJsZXQgc3RhdHVzVHlwZSBvZiBzdGF0dXNUeXBlc1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7c3RhdHVzVHlwZS50eXBlfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08c2VsZWN0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wgcHVsbC1sZWZ0XFxcIiBbKG5nTW9kZWwpXT1cXFwibW9kZWwudHlwZVxcXCIgbmFtZT1cXFwidHlwZVxcXCIgcmVxdWlyZWQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cXFwibGV0IHN0YXR1c1R5cGUgb2Ygc3RhdHVzVHlwZXNcXFwiID57e3N0YXR1c1R5cGUgfCBqc29ufX08L29wdGlvbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+LS0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XFxcImZvcm0tY29udHJvbCBwdWxsLWxlZnRcXFwiIFsobmdNb2RlbCldPVxcXCJtb2RlbC50eXBlXFxcIiBuYW1lPVxcXCJ0eXBlXFxcIiByZXF1aXJlZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVxcXCJsZXQgdHlwZSBvZiBzdGF0dXNUeXBlc1xcXCI+e3t0eXBlLm5hbWV9fTwvb3B0aW9uPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtNlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgW2Rpc2FibGVkXT1cXFwiZm9ybS5pbnZhbGlkXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IHB1bGwtcmlnaHQgYnRuLXNtXFxcIj5Qb3N0PC9idXR0b24+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuPC9mb3JtPlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcG9zdC9wb3N0LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbnZhciByb3V0ZXJfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9yb3V0ZXJcIik7XHJcbi8vIEltcG9ydHNcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xyXG52YXIgdXNlcnN0YXR1c19zZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi4vLi4vc2VydmljZXMvdXNlcnN0YXR1cy5zZXJ2aWNlXCIpO1xyXG52YXIgRmVlZENvbXBvbmVudCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBGZWVkQ29tcG9uZW50KHN0YXR1c1NlcnZpY2UsIHJvdXRlcikge1xyXG4gICAgICAgIHRoaXMuc3RhdHVzU2VydmljZSA9IHN0YXR1c1NlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XHJcbiAgICB9XHJcbiAgICBGZWVkQ29tcG9uZW50LnByb3RvdHlwZS5sb2FkU3RhdHVzcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIC8vIEdldCBhbGwgc3RhdHVzXHJcbiAgICAgICAgdGhpcy5zdGF0dXNTZXJ2aWNlLmdldFN0YXR1cygpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKHVzZXJzdGF0dXMpIHsgcmV0dXJuIF90aGlzLnVzZXJzdGF0dXMgPSB1c2Vyc3RhdHVzOyB9LCAvL0JpbmQgdG8gdmlld1xyXG4gICAgICAgIGZ1bmN0aW9uICgvL0JpbmQgdG8gdmlld1xyXG4gICAgICAgICAgICBlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBGZWVkQ29tcG9uZW50LnByb3RvdHlwZS5uZ09uSW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBMb2FkIHN0YXR1c1xyXG4gICAgICAgIHRoaXMubG9hZFN0YXR1c3MoKTtcclxuICAgIH07XHJcbiAgICAvLyAgIGdvdG9EZXRhaWwodXNlcnN0YXR1czogVXNlclN0YXR1cyk6IHZvaWQge1xyXG4gICAgLy8gICAgIGxldCBsaW5rID0gWycvZGV0YWlsJywgdXNlcnN0YXR1cy5pZF07XHJcbiAgICAvLyAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUobGluayk7XHJcbiAgICAvLyAgIH1cclxuICAgIEZlZWRDb21wb25lbnQucHJvdG90eXBlLm5nT25DaGFuZ2VzID0gZnVuY3Rpb24gKGNoYW5nZXMpIHtcclxuICAgICAgICAvLyBMaXN0ZW4gdG8gdGhlICdsaXN0J2VtaXR0ZWQgZXZlbnQgc28gYXMgcG9wdWxhdGUgdGhlIG1vZGVsXHJcbiAgICAgICAgLy8gd2l0aCB0aGUgZXZlbnQgcGF5bG9hZFxyXG4gICAgICAgIGlmIChjaGFuZ2VzWydzdGF0dXMnXSkge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRTdGF0dXNzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEVtaXR0ZXJTZXJ2aWNlLmdldCh0aGlzLmxpc3RJZCkuc3Vic2NyaWJlKCh1c2Vyc3RhdHVzOiBVc2VyU3RhdHVzW10pID0+IHsgdGhpcy51c2Vyc3RhdHVzID0gdXNlcnN0YXR1cyB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gRmVlZENvbXBvbmVudDtcclxufSgpKTtcclxuX19kZWNvcmF0ZShbXHJcbiAgICBjb3JlXzEuSW5wdXQoKSxcclxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpXHJcbl0sIEZlZWRDb21wb25lbnQucHJvdG90eXBlLCBcImxpc3RJZFwiLCB2b2lkIDApO1xyXG5fX2RlY29yYXRlKFtcclxuICAgIGNvcmVfMS5JbnB1dCgpLFxyXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcclxuXSwgRmVlZENvbXBvbmVudC5wcm90b3R5cGUsIFwiZWRpdElkXCIsIHZvaWQgMCk7XHJcbkZlZWRDb21wb25lbnQgPSBfX2RlY29yYXRlKFtcclxuICAgIGNvcmVfMS5Db21wb25lbnQoe1xyXG4gICAgICAgIHNlbGVjdG9yOiAnYXBwLWZlZWQnLFxyXG4gICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2ZlZWQuY29tcG9uZW50Lmh0bWwnKVxyXG4gICAgfSksXHJcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW3VzZXJzdGF0dXNfc2VydmljZV8xLlVzZXJTdGF0dXNTZXJ2aWNlLFxyXG4gICAgICAgIHJvdXRlcl8xLlJvdXRlcl0pXHJcbl0sIEZlZWRDb21wb25lbnQpO1xyXG5leHBvcnRzLkZlZWRDb21wb25lbnQgPSBGZWVkQ29tcG9uZW50O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1mZWVkLmNvbXBvbmVudC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9mZWVkL2ZlZWQuY29tcG9uZW50LmpzXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPCEtLTxkaXYgKm5nSWY9XFxcImxvYWRpbmdcXFwiIGNsYXNzPVxcXCJsb2FkZXJcXFwiPkxvYWRpbmcuLi48L2Rpdj4tLT5cXG5cXG48YXBwLWZlZWRib3ggXFxuW2xpc3RJZF09XFxcImxpc3RJZFxcXCIgXFxuKm5nRm9yPVxcXCJsZXQgc3RhdHVzIG9mIHVzZXJzdGF0dXNcXFwiIFxcbltzdGF0dXNdPVxcXCJzdGF0dXNcXFwiID5cXG4gICBcXG48L2FwcC1mZWVkYm94PlxcbjxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMiB0ZXh0LWNlbnRlclxcXCI+XFxuICAgICAgICA8YSBocmVmPVxcXCJcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWJsb2NrXFxcIj4gbG9hZCBtb3JlIHN0b3JpZXM8L2E+XFxuICAgIDwvZGl2PlxcbiAgICBcXG48L2Rpdj5cXG5cXG5cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZlZWQvZmVlZC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XHJcbnZhciBlbWl0dGVyX3NlcnZpY2VfMSA9IHJlcXVpcmUoXCIuLi8uLi9zZXJ2aWNlcy9lbWl0dGVyLnNlcnZpY2VcIik7XHJcbnZhciB1c2Vyc3RhdHVzX3NlcnZpY2VfMSA9IHJlcXVpcmUoXCIuLi8uLi9zZXJ2aWNlcy91c2Vyc3RhdHVzLnNlcnZpY2VcIik7XHJcbnZhciB1c2Vyc3RhdHVzXzEgPSByZXF1aXJlKFwiLi4vLi4vbW9kZWxzL3VzZXJzdGF0dXNcIik7XHJcbnZhciBGZWVkQm94Q29tcG9uZW50ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEZlZWRCb3hDb21wb25lbnQoc3RhdHVzU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuc3RhdHVzU2VydmljZSA9IHN0YXR1c1NlcnZpY2U7XHJcbiAgICB9XHJcbiAgICBGZWVkQm94Q29tcG9uZW50LnByb3RvdHlwZS5pbmNyZWFzZUxpa2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGEgPSB0aGlzLnN0YXR1cy5faWQ7XHJcbiAgICAgICAgdGhpcy5zdGF0dXNTZXJ2aWNlXHJcbiAgICAgICAgICAgIC5hZGRMaWtlKGEpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKHN0YXR1cykgeyByZXR1cm4gc3RhdHVzOyB9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhhKTtcclxuICAgIH07XHJcbiAgICBGZWVkQm94Q29tcG9uZW50LnByb3RvdHlwZS5kZWNyZWFzZUxpa2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGEgPSB0aGlzLnN0YXR1cy5faWQ7XHJcbiAgICAgICAgdGhpcy5zdGF0dXNTZXJ2aWNlXHJcbiAgICAgICAgICAgIC5kaXNMaWtlKGEpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKHN0YXR1cykgeyByZXR1cm4gc3RhdHVzOyB9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXR1cy5TdGF0dXMpO1xyXG4gICAgfTtcclxuICAgIEZlZWRCb3hDb21wb25lbnQucHJvdG90eXBlLmdldENsYXNzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnRvZ2dsZUxpa2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuICdsaWtlaGVhcnQnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBGZWVkQm94Q29tcG9uZW50LnByb3RvdHlwZS5lZGl0U3RhdHVzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIEVtaXQgZWRpdCBldmVudFxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdtYWhlc2gnKTtcclxuICAgICAgICAvLyBFbWl0dGVyU2VydmljZS5nZXQodGhpcy5lZGl0SWQpLmVtaXQodGhpcy5zdGF0dXMpO1xyXG4gICAgfTtcclxuICAgIEZlZWRCb3hDb21wb25lbnQucHJvdG90eXBlLmRlbGV0ZVN0YXR1cyA9IGZ1bmN0aW9uIChfaWQpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuc3RhdHVzU2VydmljZS5yZW1vdmVTdGF0dXMoX2lkKS5zdWJzY3JpYmUoZnVuY3Rpb24gKHN0YXR1cykge1xyXG4gICAgICAgICAgICAvLyBFbWl0IGxpc3QgZXZlbnRcclxuICAgICAgICAgICAgZW1pdHRlcl9zZXJ2aWNlXzEuRW1pdHRlclNlcnZpY2UuZ2V0KF90aGlzLmxpc3RJZCkuZW1pdChzdGF0dXMpO1xyXG4gICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgLy8gTG9nIGVycm9ycyBpZiBhbnlcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBGZWVkQm94Q29tcG9uZW50LnByb3RvdHlwZS51cGRhdGVTdGF0dXMgPSBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3VwZGF0ZSBDbGlja2VkJyk7XHJcbiAgICAgICAgdmFyIHN0YXR1c0lkID0gdGhpcy5zdGF0dXMuX2lkO1xyXG4gICAgICAgIHRoaXMuc3RhdHVzU2VydmljZVxyXG4gICAgICAgICAgICAudXBkYXRlU3RhdHVzKHN0YXR1c0lkLCB2YWx1ZSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZShmdW5jdGlvbiAoc3RhdHVzKSB7IHJldHVybiBzdGF0dXM7IH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBGZWVkQm94Q29tcG9uZW50O1xyXG59KCkpO1xyXG5fX2RlY29yYXRlKFtcclxuICAgIGNvcmVfMS5JbnB1dCgpLFxyXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIHVzZXJzdGF0dXNfMS5Vc2VyU3RhdHVzKVxyXG5dLCBGZWVkQm94Q29tcG9uZW50LnByb3RvdHlwZSwgXCJzdGF0dXNcIiwgdm9pZCAwKTtcclxuX19kZWNvcmF0ZShbXHJcbiAgICBjb3JlXzEuSW5wdXQoKSxcclxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpXHJcbl0sIEZlZWRCb3hDb21wb25lbnQucHJvdG90eXBlLCBcImxpc3RJZFwiLCB2b2lkIDApO1xyXG5fX2RlY29yYXRlKFtcclxuICAgIGNvcmVfMS5JbnB1dCgpLFxyXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcclxuXSwgRmVlZEJveENvbXBvbmVudC5wcm90b3R5cGUsIFwiZWRpdElkXCIsIHZvaWQgMCk7XHJcbkZlZWRCb3hDb21wb25lbnQgPSBfX2RlY29yYXRlKFtcclxuICAgIGNvcmVfMS5Db21wb25lbnQoe1xyXG4gICAgICAgIHNlbGVjdG9yOiAnYXBwLWZlZWRib3gnLFxyXG4gICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2ZlZWRib3guY29tcG9uZW50Lmh0bWwnKSxcclxuICAgICAgICBzdHlsZVVybHM6IFtyZXF1aXJlKCcuL2ZlZWRib3guY29tcG9uZW50LmNzcycpXVxyXG4gICAgfSksXHJcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW3VzZXJzdGF0dXNfc2VydmljZV8xLlVzZXJTdGF0dXNTZXJ2aWNlXSlcclxuXSwgRmVlZEJveENvbXBvbmVudCk7XHJcbmV4cG9ydHMuRmVlZEJveENvbXBvbmVudCA9IEZlZWRCb3hDb21wb25lbnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZlZWRib3guY29tcG9uZW50LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZlZWRib3gvZmVlZGJveC5jb21wb25lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCJcXG48YSBbcm91dGVyTGlua109XFxcIlsnL2RvbWFpbmV4cGVydCddXFxcIj5kb21haW4gZXhwZXJ0PC9hPlxcblxcbjxkaXYgY2xhc3M9XFxcInBhbmVsIHBhbmVsLWRlZmF1bHRcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1oZWFkaW5nIG1pLWhpLTQwXFxcIj5cXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJwdWxsLWxlZnRcXFwiPlxcbiAgICAgICAgICAgIHt7c3RhdHVzLnR5cGV9fVxcbiAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcInB1bGwtcmlnaHRcXFwiPlxcbiAgICAgICAgICAgIHt7c3RhdHVzLnVwZGF0ZVRpbWV8IGRhdGVGb3JtYXQgfCBkYXRlOidtZWRpdW0nfX1cXG4gICAgICAgICAgICA8IS0tfHt7c3RhdHVzLnVwZGF0ZWRBZ28gfCBkYXRlRm9ybWF0IH19IGFnby0tPlxcblxcbiAgICAgICAgICAgIFxcblxcbiAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgPGRpdiBuZ0NsYXNzPVxcXCJkcm9wZG93blxcXCI+XFxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiZHJvcGRvd24tdG9nZ2xlIHN0YXR1c2Ryb3BcXFwiIGRhdGEtdG9nZ2xlPVxcXCJkcm9wZG93blxcXCI+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJjYXJldFxcXCI+PC9zcGFuPlxcbiAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICAgIDx1bCAgbmdDbGFzcz1cXFwiZHJvcGRvd24tbWVudVxcXCI+XFxuICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVxcXCJcXFwiPkVkaXQ8L2E+PC9saT5cXG4gICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XFxcIlxcXCI+RGVsZXRlPC9hPjwvbGk+XFxuICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVxcXCJcXFwiPkRldGFpbDwvYT48L2xpPlxcbiAgICAgICAgICAgIDwvdWw+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIFxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtYm9keVxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMlxcXCIgID5cXG5cXG4gICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XFxcIiFlZGl0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIHt7c3RhdHVzLnN0YXR1c319XFxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG5cXG4gICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XFxcImVkaXRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSAjdXBkYXRlRm9ybT1cXFwibmdGb3JtXFxcIiAobmdTdWJtaXQpPVxcXCJ1cGRhdGVTdGF0dXModXBkYXRlRm9ybS52YWx1ZSk7ZWRpdD0hZWRpdDtcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVxcXCJTdGF0dXNcXFwiIG5nTW9kZWw+e3tzdGF0dXMuc3RhdHVzfX08L3RleHRhcmVhPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCI+VXBkYXRlPC9idXR0b24+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XFxuICAgICAgICAgICAgICAgICAgICAgICB7e3VwZGF0ZUZvcm0udmFsdWUgfCBqc29ufX1cXG4gICAgICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgXFxuICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgIDwhLS08ZGl2ICpuZ0Zvcj1cXFwibGV0IGNvbW1lbnRzIG9mIHN0YXR1cy5jb21tZW50c1xcXCI+XFxuICAgICAgICAgICAge3tjb21tZW50cy5jb21tZW50VGltZX19XFxuICAgICAgICA8L2Rpdj4tLT5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEyXFxcIj5cXG4gICAgICAgICAgICAgICAge3tzdGF0dXMubGlrZXNDb3VudHN9fSBsaWtlcyB8IHt7c3RhdHVzLmNvbW1lbnRzQ291bnRzfX0gQ29tbWVudHMgRGVsZXRlIEVkaXRcXG4gICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMTJcXFwiPlxcbiAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL2hvbWUvZWRpdCcsIHN0YXR1cy5faWRdXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi14cyBcXFwiIChjbGljayk9XFxcImVkaXQgPSAhZWRpdFxcXCI+XFxuXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cXFwiIWVkaXRcXFwiPkVkaXQ8L3NwYW4+XFxuICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbICcvaG9tZS9kZXRhaWwnLCBzdGF0dXMuX2lkXVxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBidG4teHNcXFwiPkRldGFpbDwvYT5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICBcXG5cXG4gICAgICAgICAgICBcXG5cXG4gICAgICAgICAgICBcXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtZm9vdGVyIG1pLWhpLTQwXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0yXFxcIj5cXG4gICAgICAgICAgIDxhIChjbGljayk9XFxcInRvZ2dsZUxpa2UgPSAhdG9nZ2xlTGlrZTsgbGlrZXRvZ2dsZSA9ICFsaWtldG9nZ2xlOyBcXFwiIFtuZ0NsYXNzXT1cXFwiZ2V0Q2xhc3MoKVxcXCIgY2xhc3M9XFxcImxpa2VcXFwiID5cXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWhlYXJ0XFxcIj48L2k+XFxuICAgICAgICAgICAgICAgIDxzcGFuICAqbmdJZj1cXFwiIWxpa2V0b2dnbGVcXFwiIChjbGljayk9XFxcImluY3JlYXNlTGlrZSgpO1xcXCIgY2xhc3M9XFxcImJ0biBidG4taW5mbyBidG4teHNcXFwiID5saWtlPC9zcGFuPlxcbiAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cXFwibGlrZXRvZ2dsZVxcXCIgKGNsaWNrKT1cXFwiZGVjcmVhc2VMaWtlKCk7XFxcIiAgY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyIGJ0bi14c1xcXCI+dW5saWtlPC9zcGFuPlxcbiAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgIDwvYT4gXFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMFxcXCI+XFxuICAgICAgICAgICAgPGFwcC1jb21tZW50LWZvcm0gW3N0YXR1c0lkXT1cXFwic3RhdHVzLl9pZFxcXCI+PC9hcHAtY29tbWVudC1mb3JtPlxcbiAgICAgICAgPC9kaXY+XFxuXFxuICAgIDwvZGl2PlxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZmVlZGJveC9mZWVkYm94LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZmVlZGJveC5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9mZWVkYm94L2ZlZWRib3guY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLm1pLWhpLTQwe1xcbm1pbi1oZWlnaHQ6NDBweDtcXG59XFxuXFxuLmZhLWhlYXJ0OmhvdmVyLC5mYS1oZWFydDpmb2N1c3tcXG4gICAgIGNvbG9yOmJsYWNrOyAgICAgICAgICAgXFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZlZWRib3gvZmVlZGJveC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbnZhciBjb3JlXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcclxudmFyIGh0dHBfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9odHRwXCIpO1xyXG52YXIgdXNlcnN0YXR1c19zZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vc2VydmljZXMvdXNlcnN0YXR1cy5zZXJ2aWNlXCIpO1xyXG52YXIgcm91dGVyXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvcm91dGVyXCIpO1xyXG52YXIgRGV0YWlsU3RhdHVzQ29tcG9uZW50ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIERldGFpbFN0YXR1c0NvbXBvbmVudChfaHR0cCwgcm91dGUsIHN0YXR1c1NlcnZpY2UsIHJvdXRlcikge1xyXG4gICAgICAgIHRoaXMuX2h0dHAgPSBfaHR0cDtcclxuICAgICAgICB0aGlzLnJvdXRlID0gcm91dGU7XHJcbiAgICAgICAgdGhpcy5zdGF0dXNTZXJ2aWNlID0gc3RhdHVzU2VydmljZTtcclxuICAgICAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcclxuICAgIH1cclxuICAgIERldGFpbFN0YXR1c0NvbXBvbmVudC5wcm90b3R5cGUubG9hZFN0YXR1c3NzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5yb3V0ZS5wYXJhbXNcclxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAocGFyYW1zKSB7IHJldHVybiBwYXJhbXNbJ2lkJ107IH0pXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgICAgIF90aGlzLnN0YXR1c1NlcnZpY2VcclxuICAgICAgICAgICAgICAgIC5zdGF0dXNEZXRhaWwoaWQpXHJcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uICh1c2Vyc3RhdHVzKSB7IHJldHVybiBfdGhpcy51c2Vyc3RhdHVzID0gdXNlcnN0YXR1czsgfSwgLy9CaW5kIHRvIHZpZXdcclxuICAgICAgICAgICAgZnVuY3Rpb24gKC8vQmluZCB0byB2aWV3XHJcbiAgICAgICAgICAgICAgICBlcnIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIERldGFpbFN0YXR1c0NvbXBvbmVudC5wcm90b3R5cGUubmdPbkluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gTG9hZCBzdGF0dXNcclxuICAgICAgICB0aGlzLmxvYWRTdGF0dXNzcygpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBEZXRhaWxTdGF0dXNDb21wb25lbnQ7XHJcbn0oKSk7XHJcbkRldGFpbFN0YXR1c0NvbXBvbmVudCA9IF9fZGVjb3JhdGUoW1xyXG4gICAgY29yZV8xLkNvbXBvbmVudCh7XHJcbiAgICAgICAgc2VsZWN0b3I6ICdhcHAtc3RhdHVzLWRldGFpbCcsXHJcbiAgICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZGV0YWlsc3RhdHVzLmNvbXBvbmVudC5odG1sJylcclxuICAgIH0pLFxyXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtodHRwXzEuSHR0cCxcclxuICAgICAgICByb3V0ZXJfMS5BY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICB1c2Vyc3RhdHVzX3NlcnZpY2VfMS5Vc2VyU3RhdHVzU2VydmljZSxcclxuICAgICAgICByb3V0ZXJfMS5Sb3V0ZXJdKVxyXG5dLCBEZXRhaWxTdGF0dXNDb21wb25lbnQpO1xyXG5leHBvcnRzLkRldGFpbFN0YXR1c0NvbXBvbmVudCA9IERldGFpbFN0YXR1c0NvbXBvbmVudDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGV0YWlsc3RhdHVzLmNvbXBvbmVudC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9mZWVkYm94L2RldGFpbHN0YXR1cy9kZXRhaWxzdGF0dXMuY29tcG9uZW50LmpzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiXFxuPGRpdiBjbGFzcz1cXFwiY29sLW1kLTJcXFwiPjwvZGl2PlxcblxcbjxkaXYgY2xhc3M9XFxcImNvbC1tZC04XFxcIj5cXG5cXG4gICAgPGRpdiAqbmdJZj1cXFwidXNlcnN0YXR1c1xcXCI+XFxuICAgICAgICBcXG5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsIHBhbmVsLWRlZmF1bHRcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWhlYWRpbmcgbWktaGktNDBcXFwiPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwicHVsbC1sZWZ0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIHt7dXNlcnN0YXR1cy50eXBlfX1cXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwicHVsbC1yaWdodFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICB7e3VzZXJzdGF0dXMudXBkYXRlVGltZXwgZGF0ZUZvcm1hdCB8IGRhdGU6J21lZGl1bSd9fVxcbiAgICAgICAgICAgICAgICAgICAgPCEtLXx7e3N0YXR1cy51cGRhdGVkQWdvIHwgZGF0ZUZvcm1hdCB9fSBhZ28tLT5cXG5cXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWJvZHlcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEyXFxcIj5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAge3t1c2Vyc3RhdHVzLnN0YXR1c319XFxuICAgICAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICB7e3VzZXJzdGF0dXMubGlrZXNDb3VudHN9fSBsaWtlcyB8IHt7dXNlcnN0YXR1cy5jb21tZW50c0NvdW50c319IENvbW1lbnRzIERlbGV0ZSBFZGl0XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG5cXG4gICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvaG9tZS9lZGl0JywgdXNlcnN0YXR1cy5faWRdXFxcIj5lZGl0PC9hPlxcbiAgICAgICAgICAgICAgICAgICAgXFxuXFxuICAgICAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtZm9vdGVyIG1pLWhpLTQwXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1oZWFydCB3aGl0ZS10ZXh0IGJvcmRlclxcXCI+PC9pPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTExXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxhcHAtY29tbWVudC1mb3JtIFtzdGF0dXNJZF09XFxcInVzZXJzdGF0dXMuX2lkXFxcIj48L2FwcC1jb21tZW50LWZvcm0+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgXFxuXFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdGb3I9XFxcImxldCBjb21tZW50cyBvZiB1c2Vyc3RhdHVzLmNvbW1lbnRzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2NvbW1lbnRzLnRleHR9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgIFxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcblxcbjwvZGl2PlxcbjxkaXYgY2xhc3M9XFxcImNvbC1tZC0yXFxcIj48L2Rpdj5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZlZWRib3gvZGV0YWlsc3RhdHVzL2RldGFpbHN0YXR1cy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XHJcbnZhciB1c2Vyc3RhdHVzX3NlcnZpY2VfMSA9IHJlcXVpcmUoXCIuLi8uLi9zZXJ2aWNlcy91c2Vyc3RhdHVzLnNlcnZpY2VcIik7XHJcbnZhciBDb21tZW50TGlzdENvbXBvbmVudCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBDb21tZW50TGlzdENvbXBvbmVudChzdGF0dXNTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0dXNTZXJ2aWNlID0gc3RhdHVzU2VydmljZTtcclxuICAgIH1cclxuICAgIENvbW1lbnRMaXN0Q29tcG9uZW50LnByb3RvdHlwZS5sb2FkQ29tbWVudHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gR2V0IGFsbCBzdGF0dXNcclxuICAgICAgICAvL3RoaXMuc3RhdHVzU2VydmljZS5nZXRDb21tZW50cyh0aGlzLnN0YXR1c0lkKVxyXG4gICAgICAgIC8vICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgLy8gICAgdXNlcmNvbW1lbnRzID0+IHRoaXMudXNlcmNvbW1lbnRzID0gdXNlcmNvbW1lbnRzLCAvL0JpbmQgdG8gdmlld1xyXG4gICAgICAgIC8vICAgIGVyciA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgLy8gICAgfSk7XHJcbiAgICB9O1xyXG4gICAgQ29tbWVudExpc3RDb21wb25lbnQucHJvdG90eXBlLm5nT25Jbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIExvYWQgY29tbWVudHNcclxuICAgICAgICB0aGlzLmxvYWRDb21tZW50cygpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBDb21tZW50TGlzdENvbXBvbmVudDtcclxufSgpKTtcclxuX19kZWNvcmF0ZShbXHJcbiAgICBjb3JlXzEuSW5wdXQoKSxcclxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBBcnJheSlcclxuXSwgQ29tbWVudExpc3RDb21wb25lbnQucHJvdG90eXBlLCBcInVzZXJjb21tZW50c1wiLCB2b2lkIDApO1xyXG5fX2RlY29yYXRlKFtcclxuICAgIGNvcmVfMS5JbnB1dCgpLFxyXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcclxuXSwgQ29tbWVudExpc3RDb21wb25lbnQucHJvdG90eXBlLCBcInN0YXR1c0lkXCIsIHZvaWQgMCk7XHJcbkNvbW1lbnRMaXN0Q29tcG9uZW50ID0gX19kZWNvcmF0ZShbXHJcbiAgICBjb3JlXzEuQ29tcG9uZW50KHtcclxuICAgICAgICBzZWxlY3RvcjogJ2FwcC1jb21tZW50LWxpc3QnLFxyXG4gICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2NvbW1lbnQtbGlzdC5jb21wb25lbnQuaHRtbCcpXHJcbiAgICB9KSxcclxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbdXNlcnN0YXR1c19zZXJ2aWNlXzEuVXNlclN0YXR1c1NlcnZpY2VdKVxyXG5dLCBDb21tZW50TGlzdENvbXBvbmVudCk7XHJcbmV4cG9ydHMuQ29tbWVudExpc3RDb21wb25lbnQgPSBDb21tZW50TGlzdENvbXBvbmVudDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tbWVudC1saXN0LmNvbXBvbmVudC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jb21tZW50L2NvbW1lbnQtbGlzdC5jb21wb25lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCJcIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NvbW1lbnQvY29tbWVudC1saXN0LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbnZhciBjb3JlXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcclxudmFyIHVzZXJzdGF0dXNfc2VydmljZV8xID0gcmVxdWlyZShcIi4uLy4uL3NlcnZpY2VzL3VzZXJzdGF0dXMuc2VydmljZVwiKTtcclxudmFyIGVtaXR0ZXJfc2VydmljZV8xID0gcmVxdWlyZShcIi4uLy4uL3NlcnZpY2VzL2VtaXR0ZXIuc2VydmljZVwiKTtcclxudmFyIENvbW1lbnRGb3JtQ29tcG9uZW50ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIENvbW1lbnRGb3JtQ29tcG9uZW50KGNvbW1lbnRTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5jb21tZW50U2VydmljZSA9IGNvbW1lbnRTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMuZWRpdGluZyA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgQ29tbWVudEZvcm1Db21wb25lbnQucHJvdG90eXBlLnN1Ym1pdENvbW1lbnQgPSBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXR1c0lkKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJtYWhlc2hcIik7XHJcbiAgICAgICAgdmFyIGNvbW1lbnRPcGVyYXRpb247XHJcbiAgICAgICAgdGhpcy5jb21tZW50U2VydmljZVxyXG4gICAgICAgICAgICAuYWRkQ29tbWVudCh0aGlzLnN0YXR1c0lkLCB2YWx1ZSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZShmdW5jdGlvbiAoY29tbWVudHMpIHsgcmV0dXJuIGNvbW1lbnRzOyB9KTtcclxuICAgICAgICAvLyBpZighdGhpcy5lZGl0aW5nKVxyXG4gICAgICAgIC8vICAgICBjb21tZW50T3BlcmF0aW9uID0gdGhpcy5jb21tZW50U2VydmljZS5hZGRDb21tZW50KHRoaXMubW9kZWwuSUQsIHRoaXMubW9kZWwpXHJcbiAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgY29tbWVudE9wZXJhdGlvbiA9IHRoaXMuY29tbWVudFNlcnZpY2UudXBkYXRlQ29tbWVudCh0aGlzLm1vZGVsKVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBjb21tZW50T3BlcmF0aW9uLnN1YnNjcmliZShcclxuICAgICAgICAvLyAgICAgY29tbWVudHM9PntcclxuICAgICAgICAvLyAgICAgICAgIEVtaXR0ZXJTZXJ2aWNlLmdldCh0aGlzLmxpc3RJZCkuZW1pdChjb21tZW50cyk7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLm1vZGVsID0gbmV3IENvbW1lbnRzKCk7XHJcbiAgICAgICAgLy8gICAgICAgICBpZih0aGlzLmVkaXRpbmcpIFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMuZWRpdGluZyA9ICF0aGlzLmVkaXRpbmc7XHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gICAgIGVycj0+e1xyXG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAvLyAgICAgfSk7XHJcbiAgICAgICAgLy8gIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgLy8gICAgIGNvbW1lbnRzPT57XHJcbiAgICAgICAgLy8gICAgICAgICBFbWl0dGVyU2VydmljZS5nZXQodGhpcy5zdGF0dXNJZCkuZW1pdChjb21tZW50cyk7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLm1vZGVsID0gbmV3IENvbW1lbnRzKCk7XHJcbiAgICAgICAgLy8gICAgICAgICBpZih0aGlzLmVkaXRpbmcpIFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMuZWRpdGluZyA9ICF0aGlzLmVkaXRpbmc7XHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gICAgIGVycj0+e1xyXG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAvLyAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgQ29tbWVudEZvcm1Db21wb25lbnQucHJvdG90eXBlLm5nT25DaGFuZ2VzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgZW1pdHRlcl9zZXJ2aWNlXzEuRW1pdHRlclNlcnZpY2UuZ2V0KHRoaXMuc3RhdHVzSWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKGNvbW1lbnQpIHtcclxuICAgICAgICAgICAgX3RoaXMuZWRpdGluZyA9IHRydWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIENvbW1lbnRGb3JtQ29tcG9uZW50O1xyXG59KCkpO1xyXG5fX2RlY29yYXRlKFtcclxuICAgIGNvcmVfMS5JbnB1dCgpLFxyXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIE9iamVjdClcclxuXSwgQ29tbWVudEZvcm1Db21wb25lbnQucHJvdG90eXBlLCBcInN0YXR1c0lkXCIsIHZvaWQgMCk7XHJcbkNvbW1lbnRGb3JtQ29tcG9uZW50ID0gX19kZWNvcmF0ZShbXHJcbiAgICBjb3JlXzEuQ29tcG9uZW50KHtcclxuICAgICAgICBzZWxlY3RvcjogJ2FwcC1jb21tZW50LWZvcm0nLFxyXG4gICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2NvbW1lbnQtZm9ybS5jb21wb25lbnQuaHRtbCcpXHJcbiAgICB9KSxcclxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbdXNlcnN0YXR1c19zZXJ2aWNlXzEuVXNlclN0YXR1c1NlcnZpY2VdKVxyXG5dLCBDb21tZW50Rm9ybUNvbXBvbmVudCk7XHJcbmV4cG9ydHMuQ29tbWVudEZvcm1Db21wb25lbnQgPSBDb21tZW50Rm9ybUNvbXBvbmVudDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tbWVudC1mb3JtLmNvbXBvbmVudC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jb21tZW50L2NvbW1lbnQtZm9ybS5jb21wb25lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8Zm9ybSAjZm9ybT1cXFwibmdGb3JtXFxcIiAobmdTdWJtaXQpPVxcXCJzdWJtaXRDb21tZW50KGZvcm0udmFsdWUpXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwidGV4dFxcXCIgbmdNb2RlbCAvPlxcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiPkNvbW1lbnQ8L2J1dHRvbj5cXG4gICAgPC9kaXY+XFxuPC9mb3JtPlxcblxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY29tbWVudC9jb21tZW50LWZvcm0uY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xyXG52YXIgZXhwZXJ0X3NlcnZpY2VfMSA9IHJlcXVpcmUoXCIuLi8uLi9zZXJ2aWNlcy9leHBlcnQuc2VydmljZVwiKTtcclxudmFyIERvbWFpbkV4cGVydENvbXBvbmVudCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBEb21haW5FeHBlcnRDb21wb25lbnQoc3RhdHVzRXhwZXJ0U2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuc3RhdHVzRXhwZXJ0U2VydmljZSA9IHN0YXR1c0V4cGVydFNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy51c2VyRXhwZXJ0U3RhdHVzZXMgPSBbXTtcclxuICAgIH1cclxuICAgIERvbWFpbkV4cGVydENvbXBvbmVudC5wcm90b3R5cGUubmdPbkluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLnN0YXR1c0V4cGVydFNlcnZpY2VcclxuICAgICAgICAgICAgLmdldFN0YXR1cygpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKHJlc1N0YXR1c0RhdGUpIHsgcmV0dXJuIF90aGlzLnVzZXJFeHBlcnRTdGF0dXNlcyA9IHJlc1N0YXR1c0RhdGU7IH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBEb21haW5FeHBlcnRDb21wb25lbnQ7XHJcbn0oKSk7XHJcbkRvbWFpbkV4cGVydENvbXBvbmVudCA9IF9fZGVjb3JhdGUoW1xyXG4gICAgY29yZV8xLkNvbXBvbmVudCh7XHJcbiAgICAgICAgc2VsZWN0b3I6ICdkb21haW5leHBlcnQnLFxyXG4gICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2RvbWFpbmV4cGVydC5jb21wb25lbnQuaHRtbCcpXHJcbiAgICB9KSxcclxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbZXhwZXJ0X3NlcnZpY2VfMS5FeHBlcnRTZXJ2aWNlXSlcclxuXSwgRG9tYWluRXhwZXJ0Q29tcG9uZW50KTtcclxuZXhwb3J0cy5Eb21haW5FeHBlcnRDb21wb25lbnQgPSBEb21haW5FeHBlcnRDb21wb25lbnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRvbWFpbmV4cGVydC5jb21wb25lbnQuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZG9tYWluZXhwZXJ0L2RvbWFpbmV4cGVydC5jb21wb25lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xyXG52YXIgaHR0cF8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2h0dHBcIik7XHJcbnZhciBSeF8xID0gcmVxdWlyZShcInJ4anMvUnhcIik7XHJcbi8vIEltcG9ydCBSeEpzIHJlcXVpcmVkIG1ldGhvZHNcclxucmVxdWlyZShcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiKTtcclxucmVxdWlyZShcInJ4anMvYWRkL29wZXJhdG9yL2NhdGNoXCIpO1xyXG5yZXF1aXJlKFwicnhqcy9hZGQvb3BlcmF0b3IvdG9Qcm9taXNlXCIpO1xyXG52YXIgRXhwZXJ0U2VydmljZSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBFeHBlcnRTZXJ2aWNlKGh0dHApIHtcclxuICAgICAgICB0aGlzLmh0dHAgPSBodHRwO1xyXG4gICAgICAgIHRoaXMuVXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjUwMzUzL2FwaS9leHBlcnRcIjtcclxuICAgIH1cclxuICAgIEV4cGVydFNlcnZpY2UucHJvdG90eXBlLmdldFN0YXR1cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLlVybClcclxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAocmVzKSB7IHJldHVybiByZXMuanNvbigpOyB9KVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgICB9O1xyXG4gICAgRXhwZXJ0U2VydmljZS5wcm90b3R5cGUuaGFuZGxlRXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAvLyBJbiBhIHJlYWwgd29ybGQgYXBwLCB3ZSBtaWdodCB1c2UgYSByZW1vdGUgbG9nZ2luZyBpbmZyYXN0cnVjdHVyZVxyXG4gICAgICAgIHZhciBlcnJNc2c7XHJcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgaHR0cF8xLlJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIHZhciBib2R5ID0gZXJyb3IuanNvbigpIHx8ICcnO1xyXG4gICAgICAgICAgICB2YXIgZXJyID0gYm9keS5lcnJvciB8fCBKU09OLnN0cmluZ2lmeShib2R5KTtcclxuICAgICAgICAgICAgZXJyTXNnID0gZXJyb3Iuc3RhdHVzICsgXCIgLSBcIiArIChlcnJvci5zdGF0dXNUZXh0IHx8ICcnKSArIFwiIFwiICsgZXJyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZXJyTXNnID0gZXJyb3IubWVzc2FnZSA/IGVycm9yLm1lc3NhZ2UgOiBlcnJvci50b1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmVycm9yKGVyck1zZyk7XHJcbiAgICAgICAgcmV0dXJuIFJ4XzEuT2JzZXJ2YWJsZS50aHJvdyhlcnJNc2cpO1xyXG4gICAgfTtcclxuICAgIC8vYWRkIGEgbmV3IHN0YXR1c1xyXG4gICAgRXhwZXJ0U2VydmljZS5wcm90b3R5cGUuYWRkU3RhdHVzID0gZnVuY3Rpb24gKGJvZHkpIHtcclxuICAgICAgICB2YXIgYm9keVN0cmluZyA9IEpTT04uc3RyaW5naWZ5KGJvZHkpOyAvLyBTdHJpbmdpZnkgcGF5bG9hZFxyXG4gICAgICAgIHZhciBoZWFkZXJzID0gbmV3IGh0dHBfMS5IZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTsgLy8gLi4uIFNldCBjb250ZW50IHR5cGUgdG8gSlNPTlxyXG4gICAgICAgIHZhciBvcHRpb25zID0gbmV3IGh0dHBfMS5SZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7IC8vIENyZWF0ZSBhIHJlcXVlc3Qgb3B0aW9uXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuVXJsLCBib2R5LCBvcHRpb25zKSAvLyAuLi51c2luZyBwb3N0IHJlcXVlc3RcclxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAocmVzKSB7IHJldHVybiByZXMuanNvbigpOyB9KSAvLyAuLi5hbmQgY2FsbGluZyAuanNvbigpIG9uIHRoZSByZXNwb25zZSB0byByZXR1cm4gZGF0YVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgICB9O1xyXG4gICAgLy8gVXBkYXRlIGEgc3RhdHVzXHJcbiAgICBFeHBlcnRTZXJ2aWNlLnByb3RvdHlwZS51cGRhdGVTdGF0dXMgPSBmdW5jdGlvbiAoYm9keSkge1xyXG4gICAgICAgIHZhciBib2R5U3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoYm9keSk7IC8vIFN0cmluZ2lmeSBwYXlsb2FkXHJcbiAgICAgICAgdmFyIGhlYWRlcnMgPSBuZXcgaHR0cF8xLkhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pOyAvLyAuLi4gU2V0IGNvbnRlbnQgdHlwZSB0byBKU09OXHJcbiAgICAgICAgdmFyIG9wdGlvbnMgPSBuZXcgaHR0cF8xLlJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KTsgLy8gQ3JlYXRlIGEgcmVxdWVzdCBvcHRpb25cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnB1dCh0aGlzLlVybCArIFwiL1wiICsgYm9keVsnaWQnXSwgYm9keSwgb3B0aW9ucykgLy8gLi4udXNpbmcgcHV0IHJlcXVlc3RcclxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAocmVzKSB7IHJldHVybiByZXMuanNvbigpOyB9KSAvLyAuLi5hbmQgY2FsbGluZyAuanNvbigpIG9uIHRoZSByZXNwb25zZSB0byByZXR1cm4gZGF0YVxyXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7IHJldHVybiBSeF8xLk9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpLmVycm9yIHx8ICdTZXJ2ZXIgZXJyb3InKTsgfSk7IC8vLi4uZXJyb3JzIGlmIGFueVxyXG4gICAgfTtcclxuICAgIC8vIERlbGV0ZSBhIHN0YXR1c1xyXG4gICAgRXhwZXJ0U2VydmljZS5wcm90b3R5cGUucmVtb3ZlU3RhdHVzID0gZnVuY3Rpb24gKF9pZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKHRoaXMuVXJsICsgXCIvXCIgKyBfaWQpIC8vIC4uLnVzaW5nIHB1dCByZXF1ZXN0XHJcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzLmpzb24oKTsgfSkgLy8gLi4uYW5kIGNhbGxpbmcgLmpzb24oKSBvbiB0aGUgcmVzcG9uc2UgdG8gcmV0dXJuIGRhdGFcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpOyAvLy4uLmVycm9ycyBpZiBhbnlcclxuICAgIH07XHJcbiAgICBFeHBlcnRTZXJ2aWNlLnByb3RvdHlwZS5hZGRDb21tZW50ID0gZnVuY3Rpb24gKGNvbW1lbnQpIHtcclxuICAgICAgICB2YXIgY29tbWVudFN0cmluZyA9IEpTT04uc3RyaW5naWZ5KGNvbW1lbnQpOyAvLyBTdHJpbmdpZnkgcGF5bG9hZFxyXG4gICAgICAgIHZhciBoZWFkZXJzID0gbmV3IGh0dHBfMS5IZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTsgLy8gLi4uIFNldCBjb250ZW50IHR5cGUgdG8gSlNPTlxyXG4gICAgICAgIHZhciBvcHRpb25zID0gbmV3IGh0dHBfMS5SZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7IC8vIENyZWF0ZSBhIHJlcXVlc3Qgb3B0aW9uXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuVXJsICsgJy9hZGRjb21tZW50cy8nLCBjb21tZW50LCBvcHRpb25zKSAvLyAuLi51c2luZyBwb3N0IHJlcXVlc3RcclxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAocmVzKSB7IHJldHVybiByZXMuanNvbigpOyB9KSAvLyAuLi5hbmQgY2FsbGluZyAuanNvbigpIG9uIHRoZSByZXNwb25zZSB0byByZXR1cm4gZGF0YVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEV4cGVydFNlcnZpY2U7XHJcbn0oKSk7XHJcbkV4cGVydFNlcnZpY2UgPSBfX2RlY29yYXRlKFtcclxuICAgIGNvcmVfMS5JbmplY3RhYmxlKCksXHJcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW2h0dHBfMS5IdHRwXSlcclxuXSwgRXhwZXJ0U2VydmljZSk7XHJcbmV4cG9ydHMuRXhwZXJ0U2VydmljZSA9IEV4cGVydFNlcnZpY2U7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWV4cGVydC5zZXJ2aWNlLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9zZXJ2aWNlcy9leHBlcnQuc2VydmljZS5qc1xuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMlxcXCIgaGlkZGVuPjwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLThcXFwiPlxcbiAgICAgICAgICAgIDxkaXY+XFxuICAgICAgICAgICAgICAgIDxhcHAtcG9zdD5cXG4gICAgICAgICAgICAgICAgPC9hcHAtcG9zdD5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2PlxcbiAgICAgICAgICAgICAgICA8YXBwLWZlZWQgKm5nRm9yPVxcXCJsZXQgc3RhdHVzIG9mICB1c2VyRXhwZXJTdGF0dXNlc1xcXCIgPiAgICAgICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIDwvYXBwLWZlZWQ+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0yXFxcIiBoaWRkZW4+PC9kaXY+XFxuICAgIDwvZGl2PlxcblxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZG9tYWluZXhwZXJ0L2RvbWFpbmV4cGVydC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBjb3JlXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcclxudmFyIERhdGVGb3JtYXRQaXBlID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIERhdGVGb3JtYXRQaXBlKCkge1xyXG4gICAgfVxyXG4gICAgRGF0ZUZvcm1hdFBpcGUucHJvdG90eXBlLnRyYW5zZm9ybSA9IGZ1bmN0aW9uICh2YWx1ZSwgYXJncykge1xyXG4gICAgICAgIGlmIChhcmdzICYmIGFyZ3NbMF0gPT09ICdsb2NhbCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHZhbHVlKS50b0xvY2FsZVN0cmluZygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IERhdGUodmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIERhdGVGb3JtYXRQaXBlO1xyXG59KCkpO1xyXG5EYXRlRm9ybWF0UGlwZSA9IF9fZGVjb3JhdGUoW1xyXG4gICAgY29yZV8xLlBpcGUoe1xyXG4gICAgICAgIG5hbWU6ICdkYXRlRm9ybWF0J1xyXG4gICAgfSlcclxuXSwgRGF0ZUZvcm1hdFBpcGUpO1xyXG5leHBvcnRzLkRhdGVGb3JtYXRQaXBlID0gRGF0ZUZvcm1hdFBpcGU7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGUtZm9ybWF0LnBpcGUuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL3BpcGVzL2RhdGUtZm9ybWF0LnBpcGUuanNcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=