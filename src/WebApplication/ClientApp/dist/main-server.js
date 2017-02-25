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
	Object.defineProperty(exports, "__esModule", { value: true });
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
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var forms_1 = __webpack_require__(6);
	var router_1 = __webpack_require__(7);
	var angular2_universal_1 = __webpack_require__(4);
	var app_component_1 = __webpack_require__(8);
	var home_component_1 = __webpack_require__(13);
	var post_component_1 = __webpack_require__(15);
	var feed_component_1 = __webpack_require__(25);
	var feedbox_component_1 = __webpack_require__(27);
	var comment_form_component_1 = __webpack_require__(31);
	var comment_list_component_1 = __webpack_require__(34);
	var comment_box_component_1 = __webpack_require__(35);
	var date_format_pipe_1 = __webpack_require__(36);
	var userstatus_service_1 = __webpack_require__(17);
	var emitter_service_1 = __webpack_require__(16);
	var AppModule = (function () {
	    function AppModule() {
	    }
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
	                comment_box_component_1.CommentBoxComponent,
	                comment_form_component_1.CommentFormComponent,
	                date_format_pipe_1.DateFormatPipe,
	            ],
	            imports: [
	                angular2_universal_1.UniversalModule,
	                forms_1.FormsModule,
	                router_1.RouterModule.forRoot([
	                    { path: '', redirectTo: 'home', pathMatch: 'full' },
	                    { path: 'home', component: home_component_1.HomeComponent },
	                    { path: '**', redirectTo: 'home' }
	                ])
	            ],
	            providers: [userstatus_service_1.UserStatusService, emitter_service_1.EmitterService]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AppModule);
	    return AppModule;
	}());
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
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var AppComponent = (function () {
	    function AppComponent() {
	    }
	    AppComponent = __decorate([
	        core_1.Component({
	            selector: 'app',
	            template: __webpack_require__(9),
	            styles: [__webpack_require__(10)]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AppComponent);
	    return AppComponent;
	}());
	exports.AppComponent = AppComponent;
	//# sourceMappingURL=app.component.js.map

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "<div class='container-fluid'>\n    <div class='row'>\n        <div class='col-sm-9 body-content'>\n            <router-outlet>\n\n            </router-outlet>\n        </div>\n    </div>\n</div>\n\n\n"

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
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var HomeComponent = (function () {
	    function HomeComponent() {
	    }
	    HomeComponent = __decorate([
	        core_1.Component({
	            selector: 'home',
	            template: __webpack_require__(14),
	        }), 
	        __metadata('design:paramtypes', [])
	    ], HomeComponent);
	    return HomeComponent;
	}());
	exports.HomeComponent = HomeComponent;
	//# sourceMappingURL=home.component.js.map

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = "<!--<p *ngIf=\"!status\"><em>Loading...</em></p>-->\n\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-2\"></div>\r\n        <div class=\"col-md-8\">\r\n            <div>\r\n                <app-post>\r\n                </app-post>\r\n            </div>\r\n            <div>\r\n                <app-feed>\r\n                </app-feed>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-2\"></div>\n    </div>\n\n</div>"

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
	var userstatus_1 = __webpack_require__(23);
	var PostComponent = (function () {
	    function PostComponent(statusService) {
	        this.statusService = statusService;
	        this.Types = [
	            new userstatus_1.StatusType(1, 'Feeling sad'),
	            new userstatus_1.StatusType(2, 'Feeling happy'),
	            new userstatus_1.StatusType(3, 'Feeling awesome'),
	            new userstatus_1.StatusType(4, 'Feeling exhausted')
	        ];
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
	    PostComponent.prototype.ngOnChanges = function () {
	        var _this = this;
	        // Listen to the 'edit'emitted event so as populate the model
	        // with the event payload
	        emitter_service_1.EmitterService.get(this.editId).subscribe(function (status) {
	            _this.model = status;
	            _this.editing = true;
	        });
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], PostComponent.prototype, "editId", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], PostComponent.prototype, "listId", void 0);
	    PostComponent = __decorate([
	        core_1.Component({
	            selector: 'app-post',
	            template: __webpack_require__(24),
	            providers: [userstatus_service_1.UserStatusService]
	        }), 
	        __metadata('design:paramtypes', [userstatus_service_1.UserStatusService])
	    ], PostComponent);
	    return PostComponent;
	}());
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
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
	    // Event store
	    EmitterService._emitters = {};
	    EmitterService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], EmitterService);
	    return EmitterService;
	}());
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
	    UserStatusService.prototype.getStatus = function () {
	        return this.http.get(this.Url)
	            .map(function (res) { return res.json(); })
	            .catch(this.handleError);
	    };
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
	    UserStatusService.prototype.updateStatus = function (body) {
	        var bodyString = JSON.stringify(body); // Stringify payload
	        var headers = new http_1.Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
	        var options = new http_1.RequestOptions({ headers: headers }); // Create a request option
	        return this.http.put(this.Url + "/" + body['id'], body, options) // ...using put request
	            .map(function (res) { return res.json(); }) // ...and calling .json() on the response to return data
	            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); }); //...errors if any
	    };
	    // Delete a status
	    UserStatusService.prototype.removeStatus = function (_id) {
	        return this.http.delete(this.Url + "/" + _id) // ...using put request
	            .map(function (res) { return res.json(); }) // ...and calling .json() on the response to return data
	            .catch(this.handleError); //...errors if any
	    };
	    // Add a new comment
	    UserStatusService.prototype.addComment = function (id, comments) {
	        var commentsString = JSON.stringify(comments); // Stringify payload
	        var headers = new http_1.Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
	        var options = new http_1.RequestOptions({ headers: headers }); // Create a request option
	        return this.http.post(this.Url + '/' + id + '/addcomments/', comments, headers) // ...using post request
	            .map(function (res) { return res.json(); }) // ...and calling .json() on the response to return data
	            .catch(this.handleError); //...errors if any
	    };
	    UserStatusService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [http_1.Http])
	    ], UserStatusService);
	    return UserStatusService;
	}());
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
/* 24 */
/***/ function(module, exports) {

	module.exports = "<form (ngSubmit)=\"submitStatus()\" class=\"form-horizontal bordered-group\">\r\n    <div class=\"panel border\">\r\n        <div class=\"panel-heading nomargint\">\r\n            <a href=\"#\" class=\"btn btn-default noborder \"><i class=\"fa fa-camera\"></i> Photo/Video</a> |\r\n            <a href=\"#\" class=\"btn btn-default noborder\"><i class=\"fa fa-photo\"></i> Photo/Video Album</a>\r\n            <hr class=\"nomargint nomarginb\" />\r\n        </div>\r\n        <div class=\"panel-body \">\r\n            <div class=\"row \">\r\n                <div class=\"col-xs-12\">\r\n                    <div class=\"form-group \">\r\n                        <div class=\"col-xs-1\">\r\n                            <img src=\"\" width=\"45\" height=\"45\" alt=\"\" />\r\n                        </div>\r\n                        <div class=\"col-xs-11\">\r\n                            <textarea class=\"form-control noborder\" rows=\"2\" placeholder=\"Whats on your mind?\" [(ngModel)]=\"model.status\" name=\"text\" required></textarea>\r\n                        </div>\r\n                    </div>\r\n                    <hr />\r\n                    <div class=\"form-group nomarginb\">\r\n                        <div class=\"col-xs-6\">\r\n                            <select class=\"form-control pull-left\" [(ngModel)]=\"model.type\" name=\"type\" required>\r\n                                <option> Love Guru </option>\r\n                                <option> Psychologist </option>\r\n                                <option> Doctor </option>\r\n                                <option> Other </option>\r\n                            </select>\r\n                        </div>\r\n                        <div class=\"col-xs-6\">\r\n                            <button type=\"submit\" class=\"btn btn-primary pull-right btn-sm\">Post</button>\r\n                        </div>\r\n                        \r\n\r\n                        </div>\r\n                   \r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</form>"

/***/ },
/* 25 */
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
	var emitter_service_1 = __webpack_require__(16);
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
	        var _this = this;
	        // Listen to the 'list'emitted event so as populate the model
	        // with the event payload
	        emitter_service_1.EmitterService.get(this.listId).subscribe(function (userstatus) { _this.userstatus = userstatus; });
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], FeedComponent.prototype, "listId", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], FeedComponent.prototype, "editId", void 0);
	    FeedComponent = __decorate([
	        core_1.Component({
	            selector: 'app-feed',
	            template: __webpack_require__(26)
	        }), 
	        __metadata('design:paramtypes', [userstatus_service_1.UserStatusService, router_1.Router])
	    ], FeedComponent);
	    return FeedComponent;
	}());
	exports.FeedComponent = FeedComponent;
	//# sourceMappingURL=feed.component.js.map

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = "<app-feedbox [editId]=\"editId\" [listId]=\"listId\" *ngFor=\"let status of userstatus\" [status]=\"status\"></app-feedbox>"

/***/ },
/* 27 */
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
	var userstatus_1 = __webpack_require__(23);
	var FeedBoxComponent = (function () {
	    function FeedBoxComponent(statusService) {
	        this.statusService = statusService;
	    }
	    FeedBoxComponent.prototype.editStatus = function () {
	        // Emit edit event
	        emitter_service_1.EmitterService.get(this.editId).emit(this.status);
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
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', userstatus_1.UserStatus)
	    ], FeedBoxComponent.prototype, "status", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], FeedBoxComponent.prototype, "listId", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], FeedBoxComponent.prototype, "editId", void 0);
	    FeedBoxComponent = __decorate([
	        core_1.Component({
	            selector: 'app-feedbox',
	            template: __webpack_require__(28),
	            styleUrls: [__webpack_require__(29)]
	        }), 
	        __metadata('design:paramtypes', [userstatus_service_1.UserStatusService])
	    ], FeedBoxComponent);
	    return FeedBoxComponent;
	}());
	exports.FeedBoxComponent = FeedBoxComponent;
	//# sourceMappingURL=feedbox.component.js.map

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = "<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading mi-hi-40\">\r\n        <span class=\"pull-left\">\r\n            {{status.type}}\r\n        </span>\r\n        <span class=\"pull-right\">\r\n            {{status.updateTime| dateFormat | date:'medium'}}\r\n            <!--|{{status.updatedAgo | dateFormat }} ago-->\r\n\r\n        </span>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                {{status.status}}\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                {{status.likesCounts}} likes | {{status.commentsCounts}} Comments Delete Edit\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"panel-footer mi-hi-40\">\r\n        <div class=\"col-xs-1\">\r\n            <i class=\"fa fa-heart\"></i>\r\n        </div>\r\n        <div class=\"col-xs-11\">\r\n            <app-comment-form [statusId]=\"status._id\"></app-comment-form>\r\n        </div>\r\n\r\n    </div>\r\n</div>"

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(30);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, ".mi-hi-40{\r\nmin-height:40px;\r\n}", ""]);
	
	// exports


/***/ },
/* 31 */
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
	var comments_1 = __webpack_require__(32);
	var emitter_service_1 = __webpack_require__(16);
	var CommentFormComponent = (function () {
	    function CommentFormComponent(commentService) {
	        this.commentService = commentService;
	        this.model = new comments_1.Comments('', '', new Date, '');
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
	            _this.model = new comments_1.Comments('', '', new Date, 'David');
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
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], CommentFormComponent.prototype, "statusId", void 0);
	    CommentFormComponent = __decorate([
	        core_1.Component({
	            selector: 'app-comment-form',
	            template: __webpack_require__(33)
	        }), 
	        __metadata('design:paramtypes', [userstatus_service_1.UserStatusService])
	    ], CommentFormComponent);
	    return CommentFormComponent;
	}());
	exports.CommentFormComponent = CommentFormComponent;
	//# sourceMappingURL=comment-form.component.js.map

/***/ },
/* 32 */
/***/ function(module, exports) {

	//export class Comments
	//{
	//    id: string;
	//    userID: string
	//    commentTime: Date;
	//    text: string;
	"use strict";
	//}
	var Comments = (function () {
	    function Comments(id, userID, commentTime, text) {
	        this.id = id;
	        this.userID = userID;
	        this.commentTime = commentTime;
	        this.text = text;
	    }
	    return Comments;
	}());
	exports.Comments = Comments;
	//# sourceMappingURL=comments.js.map

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = "<form class=\"form-horizontal\" (ngSubmit)='submitComment()'>\r\n    <div>\r\n        submit\r\n        <input type=\"text\" (ngModel)=\"model.text\" placeholder=\"Write a Comment\" />\r\n        <button *ngIf=\"!editing\" type=\"submit\" class=\"btn btn-primary btn-xs\">Add Comment</button>\r\n        <button *ngIf=\"editing\" type=\"submit\" class=\"btn btn-warning btn-xs\">Update </button>\r\n    </div>\r\n</form>\r\n\r\n\r\n"

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
	var CommentListComponent = (function () {
	    function CommentListComponent() {
	    }
	    CommentListComponent = __decorate([
	        core_1.Component({
	            selector: 'app-comment-list',
	            template: "\n        <app-comment-box></app-comment-box>\n    ",
	        }), 
	        __metadata('design:paramtypes', [])
	    ], CommentListComponent);
	    return CommentListComponent;
	}());
	exports.CommentListComponent = CommentListComponent;
	//# sourceMappingURL=comment-list.component.js.map

/***/ },
/* 35 */
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
	var CommentBoxComponent = (function () {
	    function CommentBoxComponent() {
	    }
	    CommentBoxComponent = __decorate([
	        core_1.Component({
	            selector: "app-comment-box",
	            template: "\n        <!--List of the available comments-->\n    "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], CommentBoxComponent);
	    return CommentBoxComponent;
	}());
	exports.CommentBoxComponent = CommentBoxComponent;
	//# sourceMappingURL=comment-box.component.js.map

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
	    DateFormatPipe = __decorate([
	        core_1.Pipe({
	            name: 'dateFormat'
	        }), 
	        __metadata('design:paramtypes', [])
	    ], DateFormatPipe);
	    return DateFormatPipe;
	}());
	exports.DateFormatPipe = DateFormatPipe;
	//# sourceMappingURL=date-format.pipe.js.map

/***/ }
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDIwYzc2ZDliYzc1ODNmZmNmZmQiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Jvb3Qtc2VydmVyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ6b25lLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvYXBwLm1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9mb3Jtc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL3JvdXRlclwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuY3NzP2RkYzMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3Bvc3QvcG9zdC5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9zZXJ2aWNlcy9lbWl0dGVyLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9zZXJ2aWNlcy91c2Vyc3RhdHVzLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvaHR0cFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvUnhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9jYXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZVwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvbW9kZWxzL3VzZXJzdGF0dXMuanMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3Bvc3QvcG9zdC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZmVlZC9mZWVkLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZmVlZC9mZWVkLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9mZWVkYm94L2ZlZWRib3guY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9mZWVkYm94L2ZlZWRib3guY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZlZWRib3gvZmVlZGJveC5jb21wb25lbnQuY3NzP2ZhODUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZlZWRib3gvZmVlZGJveC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jb21tZW50L2NvbW1lbnQtZm9ybS5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9tb2RlbHMvY29tbWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NvbW1lbnQvY29tbWVudC1mb3JtLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jb21tZW50L2NvbW1lbnQtbGlzdC5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NvbW1lbnQvY29tbWVudC1ib3guY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvcGlwZXMvZGF0ZS1mb3JtYXQucGlwZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUN0Q0EscUJBQU8sQ0FBOEIsQ0FBQztBQUN0QyxxQkFBTyxDQUFTLENBQUM7QUFDakIsa0NBQStCLENBQWUsQ0FBQztBQUMvQyxnREFBb0MsQ0FBb0IsQ0FBQztBQUN6RCx3Q0FBMEIsQ0FBa0IsQ0FBQztBQUU3QyxzQkFBYyxFQUFFLENBQUM7QUFDakIsS0FBTSxRQUFRLEdBQUcsd0NBQW1CLEVBQUUsQ0FBQztBQUV2QyxvQkFBeUIsTUFBVztLQUNoQyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtTQUMvQixJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQzthQUNsQyxJQUFJLEVBQUUsMkJBQTJCO2FBQ2pDLFVBQVUsRUFBRTtpQkFDUixPQUFPLEVBQUUsR0FBRztpQkFDWixVQUFVLEVBQUUsTUFBTSxDQUFDLEdBQUc7aUJBQ3RCLFNBQVMsRUFBRSxNQUFNLENBQUMsTUFBTTtpQkFDeEIsT0FBTyxFQUFFLEtBQUs7aUJBQ2QsNkZBQTZGO2lCQUM3Riw2REFBNkQ7aUJBQzdELFFBQVEsRUFBRSxtRUFBbUU7Y0FDaEY7YUFDRCxhQUFhLEVBQUUsVUFBQyxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxLQUFLO2lCQUN0RCw2RUFBNkU7aUJBQzdFLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDZCxNQUFNLENBQUMsSUFBSSxDQUFDO2FBQ2hCLENBQUM7VUFDSixDQUFDLENBQUM7U0FFSCxNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBa0IsY0FBTSxlQUFRLENBQUMsZUFBZSxDQUFDLHNCQUFTLENBQUMsRUFBbkMsQ0FBbUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFJO2FBQ3hGLE9BQU8sQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQzVCLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztLQUNmLENBQUMsQ0FBQyxDQUFDO0FBQ1AsRUFBQztBQXhCRDs0QkF3QkM7Ozs7Ozs7QUNqQ0QsMEQ7Ozs7OztBQ0FBLHFDOzs7Ozs7QUNBQSwyQzs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTRDLFFBQVE7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQixrREFBa0Q7QUFDdkUsc0JBQXFCLDBEQUEwRDtBQUMvRSxzQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBLHVDOzs7Ozs7QUMxREEsNEM7Ozs7OztBQ0FBLDZDOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE0QyxRQUFRO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0EsMEM7Ozs7OztBQ3pCQSw0Tjs7Ozs7OztBQ0NBOztBQUVBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTs7Ozs7OztBQ1BBO0FBQ0E7OztBQUdBO0FBQ0Esc0RBQXFELHlIQUF5SCw0QkFBNEIsT0FBTyxHQUFHOztBQUVwTjs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBLHlDQUF3QyxnQkFBZ0I7QUFDeEQsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFZLG9CQUFvQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNEMsUUFBUTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQSwyQzs7Ozs7O0FDeEJBLDJlOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE0QyxRQUFRO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBLDJDOzs7Ozs7QUNoRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNEMsUUFBUTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0EsNEM7Ozs7OztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE0QyxRQUFRO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWlDLG1CQUFtQixFQUFFO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUE4QztBQUM5QywyQ0FBMEMscUNBQXFDLEVBQUU7QUFDakYsa0RBQWlELG1CQUFtQixFQUFFO0FBQ3RFO0FBQ0Esa0NBQWlDLG1CQUFtQixFQUFFO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQThDO0FBQzlDLDJDQUEwQyxxQ0FBcUMsRUFBRTtBQUNqRixrREFBaUQsbUJBQW1CLEVBQUU7QUFDdEU7QUFDQSxrQ0FBaUMsbUJBQW1CLEVBQUU7QUFDdEQsc0NBQXFDLG9FQUFvRSxFQUFFLEVBQUU7QUFDN0c7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBaUMsbUJBQW1CLEVBQUU7QUFDdEQsc0NBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLHVEQUFzRDtBQUN0RCwyQ0FBMEMscUNBQXFDLEVBQUU7QUFDakYsa0RBQWlELG1CQUFtQixFQUFFO0FBQ3RFO0FBQ0Esa0NBQWlDLG1CQUFtQixFQUFFO0FBQ3RELHNDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQSwrQzs7Ozs7O0FDakZBLDJDOzs7Ozs7QUNBQSxxQzs7Ozs7O0FDQUEsbUQ7Ozs7OztBQ0FBLHFEOzs7Ozs7QUNBQSx5RDs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0EsdUM7Ozs7OztBQ2JBLGlqRTs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNEMsUUFBUTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUE4QyxzQ0FBc0MsRUFBRTtBQUN0RjtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0RkFBMkYsK0JBQStCLEVBQUU7QUFDNUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0EsMkM7Ozs7OztBQzlEQSwrSTs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNEMsUUFBUTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQSw4Qzs7Ozs7O0FDdkRBLDRKQUEySixhQUFhLDRFQUE0RSwrQ0FBK0MsdUJBQXVCLGlDQUFpQyw0S0FBNEssZUFBZSxzSUFBc0ksb0JBQW9CLFdBQVcsdUJBQXVCLDhYOzs7Ozs7O0FDQ2x0Qjs7QUFFQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7Ozs7Ozs7QUNQQTtBQUNBOzs7QUFHQTtBQUNBLHFDQUFvQyxvQkFBb0IsS0FBSzs7QUFFN0Q7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE0QyxRQUFRO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCO0FBQ2hCO0FBQ0E7QUFDQSxpQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0EsbUQ7Ozs7OztBQ3RFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBLHFDOzs7Ozs7QUNsQkEsb2M7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTRDLFFBQVE7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0EsbUQ7Ozs7OztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE0QyxRQUFRO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBLGtEOzs7Ozs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNEMsUUFBUTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0EsNkMiLCJmaWxlIjoibWFpbi1zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA0MjBjNzZkOWJjNzU4M2ZmY2ZmZCIsImltcG9ydCAnYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxscyc7XG5pbXBvcnQgJ3pvbmUuanMnO1xuaW1wb3J0IHsgZW5hYmxlUHJvZE1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHBsYXRmb3JtTm9kZUR5bmFtaWMgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwnO1xuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSAnLi9hcHAvYXBwLm1vZHVsZSc7XG5cbmVuYWJsZVByb2RNb2RlKCk7XG5jb25zdCBwbGF0Zm9ybSA9IHBsYXRmb3JtTm9kZUR5bmFtaWMoKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHBhcmFtczogYW55KSA6IFByb21pc2U8eyBodG1sOiBzdHJpbmcsIGdsb2JhbHM/OiBhbnkgfT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlcXVlc3Rab25lID0gWm9uZS5jdXJyZW50LmZvcmsoe1xuICAgICAgICAgICAgbmFtZTogJ2FuZ3VsYXItdW5pdmVyc2FsIHJlcXVlc3QnLFxuICAgICAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgICAgIGJhc2VVcmw6ICcvJyxcbiAgICAgICAgICAgICAgICByZXF1ZXN0VXJsOiBwYXJhbXMudXJsLFxuICAgICAgICAgICAgICAgIG9yaWdpblVybDogcGFyYW1zLm9yaWdpbixcbiAgICAgICAgICAgICAgICBwcmVib290OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBSZW5kZXIganVzdCB0aGUgPGFwcD4gY29tcG9uZW50IGluc3RlYWQgb2Ygd3JhcHBpbmcgaXQgaW5zaWRlIGFuIGV4dHJhIEhUTUwgZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAvLyBXYWl0aW5nIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL3VuaXZlcnNhbC9pc3N1ZXMvMzQ3XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQ6ICc8IURPQ1RZUEUgaHRtbD48aHRtbD48aGVhZD48L2hlYWQ+PGJvZHk+PGFwcD48L2FwcD48L2JvZHk+PC9odG1sPidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkhhbmRsZUVycm9yOiAocGFyZW50Wm9uZSwgY3VycmVudFpvbmUsIHRhcmdldFpvbmUsIGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gSWYgYW55IGVycm9yIG9jY3VycyB3aGlsZSByZW5kZXJpbmcgdGhlIG1vZHVsZSwgcmVqZWN0IHRoZSB3aG9sZSBvcGVyYXRpb25cbiAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmVxdWVzdFpvbmUucnVuPFByb21pc2U8c3RyaW5nPj4oKCkgPT4gcGxhdGZvcm0uc2VyaWFsaXplTW9kdWxlKEFwcE1vZHVsZSkpLnRoZW4oaHRtbCA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKHsgaHRtbDogaHRtbCB9KTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICB9KTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9ib290LXNlcnZlci50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzXCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiem9uZS5qc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInpvbmUuanNcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuZ3VsYXIyLXVuaXZlcnNhbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL2NvcmUnKTtcclxudmFyIGZvcm1zXzEgPSByZXF1aXJlKCdAYW5ndWxhci9mb3JtcycpO1xyXG52YXIgcm91dGVyXzEgPSByZXF1aXJlKCdAYW5ndWxhci9yb3V0ZXInKTtcclxudmFyIGFuZ3VsYXIyX3VuaXZlcnNhbF8xID0gcmVxdWlyZSgnYW5ndWxhcjItdW5pdmVyc2FsJyk7XHJcbnZhciBhcHBfY29tcG9uZW50XzEgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQnKTtcclxudmFyIGhvbWVfY29tcG9uZW50XzEgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudCcpO1xyXG52YXIgcG9zdF9jb21wb25lbnRfMSA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9wb3N0L3Bvc3QuY29tcG9uZW50Jyk7XHJcbnZhciBmZWVkX2NvbXBvbmVudF8xID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL2ZlZWQvZmVlZC5jb21wb25lbnQnKTtcclxudmFyIGZlZWRib3hfY29tcG9uZW50XzEgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvZmVlZGJveC9mZWVkYm94LmNvbXBvbmVudCcpO1xyXG52YXIgY29tbWVudF9mb3JtX2NvbXBvbmVudF8xID0gcmVxdWlyZShcIi4vY29tcG9uZW50cy9jb21tZW50L2NvbW1lbnQtZm9ybS5jb21wb25lbnRcIik7XHJcbnZhciBjb21tZW50X2xpc3RfY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi9jb21wb25lbnRzL2NvbW1lbnQvY29tbWVudC1saXN0LmNvbXBvbmVudFwiKTtcclxudmFyIGNvbW1lbnRfYm94X2NvbXBvbmVudF8xID0gcmVxdWlyZShcIi4vY29tcG9uZW50cy9jb21tZW50L2NvbW1lbnQtYm94LmNvbXBvbmVudFwiKTtcclxudmFyIGRhdGVfZm9ybWF0X3BpcGVfMSA9IHJlcXVpcmUoJy4vcGlwZXMvZGF0ZS1mb3JtYXQucGlwZScpO1xyXG52YXIgdXNlcnN0YXR1c19zZXJ2aWNlXzEgPSByZXF1aXJlKCcuL3NlcnZpY2VzL3VzZXJzdGF0dXMuc2VydmljZScpO1xyXG52YXIgZW1pdHRlcl9zZXJ2aWNlXzEgPSByZXF1aXJlKCcuL3NlcnZpY2VzL2VtaXR0ZXIuc2VydmljZScpO1xyXG52YXIgQXBwTW9kdWxlID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEFwcE1vZHVsZSgpIHtcclxuICAgIH1cclxuICAgIEFwcE1vZHVsZSA9IF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGNvcmVfMS5OZ01vZHVsZSh7XHJcbiAgICAgICAgICAgIGJvb3RzdHJhcDogW2FwcF9jb21wb25lbnRfMS5BcHBDb21wb25lbnRdLFxyXG4gICAgICAgICAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICAgICAgICAgIGFwcF9jb21wb25lbnRfMS5BcHBDb21wb25lbnQsXHJcbiAgICAgICAgICAgICAgICBob21lX2NvbXBvbmVudF8xLkhvbWVDb21wb25lbnQsXHJcbiAgICAgICAgICAgICAgICBwb3N0X2NvbXBvbmVudF8xLlBvc3RDb21wb25lbnQsXHJcbiAgICAgICAgICAgICAgICBmZWVkX2NvbXBvbmVudF8xLkZlZWRDb21wb25lbnQsXHJcbiAgICAgICAgICAgICAgICBmZWVkYm94X2NvbXBvbmVudF8xLkZlZWRCb3hDb21wb25lbnQsXHJcbiAgICAgICAgICAgICAgICBjb21tZW50X2xpc3RfY29tcG9uZW50XzEuQ29tbWVudExpc3RDb21wb25lbnQsXHJcbiAgICAgICAgICAgICAgICBjb21tZW50X2JveF9jb21wb25lbnRfMS5Db21tZW50Qm94Q29tcG9uZW50LFxyXG4gICAgICAgICAgICAgICAgY29tbWVudF9mb3JtX2NvbXBvbmVudF8xLkNvbW1lbnRGb3JtQ29tcG9uZW50LFxyXG4gICAgICAgICAgICAgICAgZGF0ZV9mb3JtYXRfcGlwZV8xLkRhdGVGb3JtYXRQaXBlLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgICAgICAgICBhbmd1bGFyMl91bml2ZXJzYWxfMS5Vbml2ZXJzYWxNb2R1bGUsXHJcbiAgICAgICAgICAgICAgICBmb3Jtc18xLkZvcm1zTW9kdWxlLFxyXG4gICAgICAgICAgICAgICAgcm91dGVyXzEuUm91dGVyTW9kdWxlLmZvclJvb3QoW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcGF0aDogJycsIHJlZGlyZWN0VG86ICdob21lJywgcGF0aE1hdGNoOiAnZnVsbCcgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBhdGg6ICdob21lJywgY29tcG9uZW50OiBob21lX2NvbXBvbmVudF8xLkhvbWVDb21wb25lbnQgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBhdGg6ICcqKicsIHJlZGlyZWN0VG86ICdob21lJyB9XHJcbiAgICAgICAgICAgICAgICBdKVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBwcm92aWRlcnM6IFt1c2Vyc3RhdHVzX3NlcnZpY2VfMS5Vc2VyU3RhdHVzU2VydmljZSwgZW1pdHRlcl9zZXJ2aWNlXzEuRW1pdHRlclNlcnZpY2VdXHJcbiAgICAgICAgfSksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgW10pXHJcbiAgICBdLCBBcHBNb2R1bGUpO1xyXG4gICAgcmV0dXJuIEFwcE1vZHVsZTtcclxufSgpKTtcclxuZXhwb3J0cy5BcHBNb2R1bGUgPSBBcHBNb2R1bGU7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC5tb2R1bGUuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2FwcC5tb2R1bGUuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvZm9ybXNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9mb3Jtc1wiXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL3JvdXRlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL3JvdXRlclwiXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL2NvcmUnKTtcclxudmFyIEFwcENvbXBvbmVudCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBBcHBDb21wb25lbnQoKSB7XHJcbiAgICB9XHJcbiAgICBBcHBDb21wb25lbnQgPSBfX2RlY29yYXRlKFtcclxuICAgICAgICBjb3JlXzEuQ29tcG9uZW50KHtcclxuICAgICAgICAgICAgc2VsZWN0b3I6ICdhcHAnLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9hcHAuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgICAgICAgICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9hcHAuY29tcG9uZW50LmNzcycpXVxyXG4gICAgICAgIH0pLCBcclxuICAgICAgICBfX21ldGFkYXRhKCdkZXNpZ246cGFyYW10eXBlcycsIFtdKVxyXG4gICAgXSwgQXBwQ29tcG9uZW50KTtcclxuICAgIHJldHVybiBBcHBDb21wb25lbnQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuQXBwQ29tcG9uZW50ID0gQXBwQ29tcG9uZW50O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAuY29tcG9uZW50LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPSdjb250YWluZXItZmx1aWQnPlxcbiAgICA8ZGl2IGNsYXNzPSdyb3cnPlxcbiAgICAgICAgPGRpdiBjbGFzcz0nY29sLXNtLTkgYm9keS1jb250ZW50Jz5cXG4gICAgICAgICAgICA8cm91dGVyLW91dGxldD5cXG5cXG4gICAgICAgICAgICA8L3JvdXRlci1vdXRsZXQ+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuPC9kaXY+XFxuXFxuXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2FwcC5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICAgIC8qIE9uIHNtYWxsIHNjcmVlbnMsIHRoZSBuYXYgbWVudSBzcGFucyB0aGUgZnVsbCB3aWR0aCBvZiB0aGUgc2NyZWVuLiBMZWF2ZSBhIHNwYWNlIGZvciBpdC4gKi9cXG4gICAgLmJvZHktY29udGVudCB7XFxuICAgICAgICBwYWRkaW5nLXRvcDogNTBweDtcXG4gICAgfVxcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblx0dmFyIGxpc3QgPSBbXTtcclxuXHJcblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xyXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuXHRcdHZhciByZXN1bHQgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gdGhpc1tpXTtcclxuXHRcdFx0aWYoaXRlbVsyXSkge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgaXRlbVsxXSArIFwifVwiKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChpdGVtWzFdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdC5qb2luKFwiXCIpO1xyXG5cdH07XHJcblxyXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XHJcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xyXG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcclxuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xyXG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXHJcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XHJcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcclxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcclxuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cclxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcclxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcclxuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcclxuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cdHJldHVybiBsaXN0O1xyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL2NvcmUnKTtcclxudmFyIEhvbWVDb21wb25lbnQgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gSG9tZUNvbXBvbmVudCgpIHtcclxuICAgIH1cclxuICAgIEhvbWVDb21wb25lbnQgPSBfX2RlY29yYXRlKFtcclxuICAgICAgICBjb3JlXzEuQ29tcG9uZW50KHtcclxuICAgICAgICAgICAgc2VsZWN0b3I6ICdob21lJyxcclxuICAgICAgICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vaG9tZS5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgICAgIH0pLCBcclxuICAgICAgICBfX21ldGFkYXRhKCdkZXNpZ246cGFyYW10eXBlcycsIFtdKVxyXG4gICAgXSwgSG9tZUNvbXBvbmVudCk7XHJcbiAgICByZXR1cm4gSG9tZUNvbXBvbmVudDtcclxufSgpKTtcclxuZXhwb3J0cy5Ib21lQ29tcG9uZW50ID0gSG9tZUNvbXBvbmVudDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aG9tZS5jb21wb25lbnQuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjwhLS08cCAqbmdJZj1cXFwiIXN0YXR1c1xcXCI+PGVtPkxvYWRpbmcuLi48L2VtPjwvcD4tLT5cXG5cXG48ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTJcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLThcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxhcHAtcG9zdD5cXHJcXG4gICAgICAgICAgICAgICAgPC9hcHAtcG9zdD5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8YXBwLWZlZWQ+XFxyXFxuICAgICAgICAgICAgICAgIDwvYXBwLWZlZWQ+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0yXFxcIj48L2Rpdj5cXG4gICAgPC9kaXY+XFxuXFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL2NvcmUnKTtcclxudmFyIGVtaXR0ZXJfc2VydmljZV8xID0gcmVxdWlyZSgnLi4vLi4vc2VydmljZXMvZW1pdHRlci5zZXJ2aWNlJyk7XHJcbnZhciB1c2Vyc3RhdHVzX3NlcnZpY2VfMSA9IHJlcXVpcmUoJy4uLy4uL3NlcnZpY2VzL3VzZXJzdGF0dXMuc2VydmljZScpO1xyXG52YXIgdXNlcnN0YXR1c18xID0gcmVxdWlyZSgnLi4vLi4vbW9kZWxzL3VzZXJzdGF0dXMnKTtcclxudmFyIFBvc3RDb21wb25lbnQgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUG9zdENvbXBvbmVudChzdGF0dXNTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0dXNTZXJ2aWNlID0gc3RhdHVzU2VydmljZTtcclxuICAgICAgICB0aGlzLlR5cGVzID0gW1xyXG4gICAgICAgICAgICBuZXcgdXNlcnN0YXR1c18xLlN0YXR1c1R5cGUoMSwgJ0ZlZWxpbmcgc2FkJyksXHJcbiAgICAgICAgICAgIG5ldyB1c2Vyc3RhdHVzXzEuU3RhdHVzVHlwZSgyLCAnRmVlbGluZyBoYXBweScpLFxyXG4gICAgICAgICAgICBuZXcgdXNlcnN0YXR1c18xLlN0YXR1c1R5cGUoMywgJ0ZlZWxpbmcgYXdlc29tZScpLFxyXG4gICAgICAgICAgICBuZXcgdXNlcnN0YXR1c18xLlN0YXR1c1R5cGUoNCwgJ0ZlZWxpbmcgZXhoYXVzdGVkJylcclxuICAgICAgICBdO1xyXG4gICAgICAgIC8vIExvY2FsIHByb3BlcnRpZXNcclxuICAgICAgICB0aGlzLm1vZGVsID0gbmV3IHVzZXJzdGF0dXNfMS5Vc2VyU3RhdHVzKCk7XHJcbiAgICAgICAgdGhpcy5lZGl0aW5nID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBQb3N0Q29tcG9uZW50LnByb3RvdHlwZS5zdWJtaXRTdGF0dXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAvLyBWYXJpYWJsZSB0byBob2xkIGEgcmVmZXJlbmNlIG9mIGFkZENvbW1lbnQvdXBkYXRlQ29tbWVudFxyXG4gICAgICAgIHZhciBzdGF0dXNPcGVyYXRpb247XHJcbiAgICAgICAgc3RhdHVzT3BlcmF0aW9uID0gdGhpcy5zdGF0dXNTZXJ2aWNlLmFkZFN0YXR1cyh0aGlzLm1vZGVsKTtcclxuICAgICAgICAvL2lmICghdGhpcy5lZGl0aW5nKSB7XHJcbiAgICAgICAgLy8gICAgLy8gQ3JlYXRlIGEgbmV3IHN0YXR1c1xyXG4gICAgICAgIC8vICAgIHN0YXR1c09wZXJhdGlvbiA9IHRoaXMuc3RhdHVzU2VydmljZS5hZGRTdGF0dXModGhpcy5tb2RlbClcclxuICAgICAgICAvL31cclxuICAgICAgICAvL30gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgLy8gVXBkYXRlIGFuIGV4aXN0aW5nIHN0YXR1c1xyXG4gICAgICAgIC8vICAgIHN0YXR1c09wZXJhdGlvbiA9IHRoaXMuc3RhdHVzU2VydmljZS51cGRhdGVTdGF0dXModGhpcy5tb2RlbClcclxuICAgICAgICAvL31cclxuICAgICAgICAvLyBTdWJzY3JpYmUgdG8gb2JzZXJ2YWJsZVxyXG4gICAgICAgIHN0YXR1c09wZXJhdGlvbi5zdWJzY3JpYmUoZnVuY3Rpb24gKHN0YXR1cykge1xyXG4gICAgICAgICAgICAvLyBFbWl0IGxpc3QgZXZlbnRcclxuICAgICAgICAgICAgZW1pdHRlcl9zZXJ2aWNlXzEuRW1pdHRlclNlcnZpY2UuZ2V0KF90aGlzLmxpc3RJZCkuZW1pdChzdGF0dXMpO1xyXG4gICAgICAgICAgICAvLyBFbXB0eSBtb2RlbFxyXG4gICAgICAgICAgICBfdGhpcy5tb2RlbCA9IG5ldyB1c2Vyc3RhdHVzXzEuVXNlclN0YXR1cygpO1xyXG4gICAgICAgICAgICAvLyBTd2l0Y2ggZWRpdGluZyBzdGF0dXNcclxuICAgICAgICAgICAgLy9pZiAodGhpcy5lZGl0aW5nKSB0aGlzLmVkaXRpbmcgPSAhdGhpcy5lZGl0aW5nO1xyXG4gICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBQb3N0Q29tcG9uZW50LnByb3RvdHlwZS5uZ09uQ2hhbmdlcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIC8vIExpc3RlbiB0byB0aGUgJ2VkaXQnZW1pdHRlZCBldmVudCBzbyBhcyBwb3B1bGF0ZSB0aGUgbW9kZWxcclxuICAgICAgICAvLyB3aXRoIHRoZSBldmVudCBwYXlsb2FkXHJcbiAgICAgICAgZW1pdHRlcl9zZXJ2aWNlXzEuRW1pdHRlclNlcnZpY2UuZ2V0KHRoaXMuZWRpdElkKS5zdWJzY3JpYmUoZnVuY3Rpb24gKHN0YXR1cykge1xyXG4gICAgICAgICAgICBfdGhpcy5tb2RlbCA9IHN0YXR1cztcclxuICAgICAgICAgICAgX3RoaXMuZWRpdGluZyA9IHRydWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgX19kZWNvcmF0ZShbXHJcbiAgICAgICAgY29yZV8xLklucHV0KCksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjp0eXBlJywgU3RyaW5nKVxyXG4gICAgXSwgUG9zdENvbXBvbmVudC5wcm90b3R5cGUsIFwiZWRpdElkXCIsIHZvaWQgMCk7XHJcbiAgICBfX2RlY29yYXRlKFtcclxuICAgICAgICBjb3JlXzEuSW5wdXQoKSwgXHJcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnR5cGUnLCBTdHJpbmcpXHJcbiAgICBdLCBQb3N0Q29tcG9uZW50LnByb3RvdHlwZSwgXCJsaXN0SWRcIiwgdm9pZCAwKTtcclxuICAgIFBvc3RDb21wb25lbnQgPSBfX2RlY29yYXRlKFtcclxuICAgICAgICBjb3JlXzEuQ29tcG9uZW50KHtcclxuICAgICAgICAgICAgc2VsZWN0b3I6ICdhcHAtcG9zdCcsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3Bvc3QuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbdXNlcnN0YXR1c19zZXJ2aWNlXzEuVXNlclN0YXR1c1NlcnZpY2VdXHJcbiAgICAgICAgfSksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgW3VzZXJzdGF0dXNfc2VydmljZV8xLlVzZXJTdGF0dXNTZXJ2aWNlXSlcclxuICAgIF0sIFBvc3RDb21wb25lbnQpO1xyXG4gICAgcmV0dXJuIFBvc3RDb21wb25lbnQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuUG9zdENvbXBvbmVudCA9IFBvc3RDb21wb25lbnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBvc3QuY29tcG9uZW50LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3Bvc3QvcG9zdC5jb21wb25lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxuLyogKiAqIC4vYXBwL2VtaXR0ZXIuc2VydmljZS50cyAqICogKi9cclxuLy8gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vc2FzeGFcclxuLy8gSW1wb3J0c1xyXG52YXIgY29yZV8xID0gcmVxdWlyZSgnQGFuZ3VsYXIvY29yZScpO1xyXG52YXIgRW1pdHRlclNlcnZpY2UgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gRW1pdHRlclNlcnZpY2UoKSB7XHJcbiAgICB9XHJcbiAgICAvLyBTZXQgYSBuZXcgZXZlbnQgaW4gdGhlIHN0b3JlIHdpdGggYSBnaXZlbiBJRFxyXG4gICAgLy8gYXMga2V5XHJcbiAgICBFbWl0dGVyU2VydmljZS5nZXQgPSBmdW5jdGlvbiAoSUQpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2VtaXR0ZXJzW0lEXSlcclxuICAgICAgICAgICAgdGhpcy5fZW1pdHRlcnNbSURdID0gbmV3IGNvcmVfMS5FdmVudEVtaXR0ZXIoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZW1pdHRlcnNbSURdO1xyXG4gICAgfTtcclxuICAgIC8vIEV2ZW50IHN0b3JlXHJcbiAgICBFbWl0dGVyU2VydmljZS5fZW1pdHRlcnMgPSB7fTtcclxuICAgIEVtaXR0ZXJTZXJ2aWNlID0gX19kZWNvcmF0ZShbXHJcbiAgICAgICAgY29yZV8xLkluamVjdGFibGUoKSwgXHJcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCBbXSlcclxuICAgIF0sIEVtaXR0ZXJTZXJ2aWNlKTtcclxuICAgIHJldHVybiBFbWl0dGVyU2VydmljZTtcclxufSgpKTtcclxuZXhwb3J0cy5FbWl0dGVyU2VydmljZSA9IEVtaXR0ZXJTZXJ2aWNlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1lbWl0dGVyLnNlcnZpY2UuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL3NlcnZpY2VzL2VtaXR0ZXIuc2VydmljZS5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG52YXIgY29yZV8xID0gcmVxdWlyZSgnQGFuZ3VsYXIvY29yZScpO1xyXG52YXIgaHR0cF8xID0gcmVxdWlyZSgnQGFuZ3VsYXIvaHR0cCcpO1xyXG52YXIgUnhfMSA9IHJlcXVpcmUoJ3J4anMvUngnKTtcclxuLy8gSW1wb3J0IFJ4SnMgcmVxdWlyZWQgbWV0aG9kc1xyXG5yZXF1aXJlKCdyeGpzL2FkZC9vcGVyYXRvci9tYXAnKTtcclxucmVxdWlyZSgncnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2gnKTtcclxucmVxdWlyZSgncnhqcy9hZGQvb3BlcmF0b3IvdG9Qcm9taXNlJyk7XHJcbnZhciBVc2VyU3RhdHVzU2VydmljZSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBVc2VyU3RhdHVzU2VydmljZShodHRwKSB7XHJcbiAgICAgICAgdGhpcy5odHRwID0gaHR0cDtcclxuICAgICAgICB0aGlzLlVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDo1MDM1My9hcGkvZmVlZFwiO1xyXG4gICAgfVxyXG4gICAgVXNlclN0YXR1c1NlcnZpY2UucHJvdG90eXBlLmdldFN0YXR1cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLlVybClcclxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAocmVzKSB7IHJldHVybiByZXMuanNvbigpOyB9KVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgICB9O1xyXG4gICAgVXNlclN0YXR1c1NlcnZpY2UucHJvdG90eXBlLmhhbmRsZUVycm9yID0gZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgLy8gSW4gYSByZWFsIHdvcmxkIGFwcCwgd2UgbWlnaHQgdXNlIGEgcmVtb3RlIGxvZ2dpbmcgaW5mcmFzdHJ1Y3R1cmVcclxuICAgICAgICB2YXIgZXJyTXNnO1xyXG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIGh0dHBfMS5SZXNwb25zZSkge1xyXG4gICAgICAgICAgICB2YXIgYm9keSA9IGVycm9yLmpzb24oKSB8fCAnJztcclxuICAgICAgICAgICAgdmFyIGVyciA9IGJvZHkuZXJyb3IgfHwgSlNPTi5zdHJpbmdpZnkoYm9keSk7XHJcbiAgICAgICAgICAgIGVyck1zZyA9IGVycm9yLnN0YXR1cyArIFwiIC0gXCIgKyAoZXJyb3Iuc3RhdHVzVGV4dCB8fCAnJykgKyBcIiBcIiArIGVycjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGVyck1zZyA9IGVycm9yLm1lc3NhZ2UgPyBlcnJvci5tZXNzYWdlIDogZXJyb3IudG9TdHJpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJNc2cpO1xyXG4gICAgICAgIHJldHVybiBSeF8xLk9ic2VydmFibGUudGhyb3coZXJyTXNnKTtcclxuICAgIH07XHJcbiAgICAvL2FkZCBhIG5ldyBzdGF0dXNcclxuICAgIFVzZXJTdGF0dXNTZXJ2aWNlLnByb3RvdHlwZS5hZGRTdGF0dXMgPSBmdW5jdGlvbiAoYm9keSkge1xyXG4gICAgICAgIHZhciBib2R5U3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoYm9keSk7IC8vIFN0cmluZ2lmeSBwYXlsb2FkXHJcbiAgICAgICAgdmFyIGhlYWRlcnMgPSBuZXcgaHR0cF8xLkhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pOyAvLyAuLi4gU2V0IGNvbnRlbnQgdHlwZSB0byBKU09OXHJcbiAgICAgICAgdmFyIG9wdGlvbnMgPSBuZXcgaHR0cF8xLlJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KTsgLy8gQ3JlYXRlIGEgcmVxdWVzdCBvcHRpb25cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5VcmwsIGJvZHksIG9wdGlvbnMpIC8vIC4uLnVzaW5nIHBvc3QgcmVxdWVzdFxyXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChyZXMpIHsgcmV0dXJuIHJlcy5qc29uKCk7IH0pIC8vIC4uLmFuZCBjYWxsaW5nIC5qc29uKCkgb24gdGhlIHJlc3BvbnNlIHRvIHJldHVybiBkYXRhXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH07XHJcbiAgICAvLyBVcGRhdGUgYSBzdGF0dXNcclxuICAgIFVzZXJTdGF0dXNTZXJ2aWNlLnByb3RvdHlwZS51cGRhdGVTdGF0dXMgPSBmdW5jdGlvbiAoYm9keSkge1xyXG4gICAgICAgIHZhciBib2R5U3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoYm9keSk7IC8vIFN0cmluZ2lmeSBwYXlsb2FkXHJcbiAgICAgICAgdmFyIGhlYWRlcnMgPSBuZXcgaHR0cF8xLkhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pOyAvLyAuLi4gU2V0IGNvbnRlbnQgdHlwZSB0byBKU09OXHJcbiAgICAgICAgdmFyIG9wdGlvbnMgPSBuZXcgaHR0cF8xLlJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KTsgLy8gQ3JlYXRlIGEgcmVxdWVzdCBvcHRpb25cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnB1dCh0aGlzLlVybCArIFwiL1wiICsgYm9keVsnaWQnXSwgYm9keSwgb3B0aW9ucykgLy8gLi4udXNpbmcgcHV0IHJlcXVlc3RcclxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAocmVzKSB7IHJldHVybiByZXMuanNvbigpOyB9KSAvLyAuLi5hbmQgY2FsbGluZyAuanNvbigpIG9uIHRoZSByZXNwb25zZSB0byByZXR1cm4gZGF0YVxyXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7IHJldHVybiBSeF8xLk9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpLmVycm9yIHx8ICdTZXJ2ZXIgZXJyb3InKTsgfSk7IC8vLi4uZXJyb3JzIGlmIGFueVxyXG4gICAgfTtcclxuICAgIC8vIERlbGV0ZSBhIHN0YXR1c1xyXG4gICAgVXNlclN0YXR1c1NlcnZpY2UucHJvdG90eXBlLnJlbW92ZVN0YXR1cyA9IGZ1bmN0aW9uIChfaWQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZSh0aGlzLlVybCArIFwiL1wiICsgX2lkKSAvLyAuLi51c2luZyBwdXQgcmVxdWVzdFxyXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChyZXMpIHsgcmV0dXJuIHJlcy5qc29uKCk7IH0pIC8vIC4uLmFuZCBjYWxsaW5nIC5qc29uKCkgb24gdGhlIHJlc3BvbnNlIHRvIHJldHVybiBkYXRhXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTsgLy8uLi5lcnJvcnMgaWYgYW55XHJcbiAgICB9O1xyXG4gICAgLy8gQWRkIGEgbmV3IGNvbW1lbnRcclxuICAgIFVzZXJTdGF0dXNTZXJ2aWNlLnByb3RvdHlwZS5hZGRDb21tZW50ID0gZnVuY3Rpb24gKGlkLCBjb21tZW50cykge1xyXG4gICAgICAgIHZhciBjb21tZW50c1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KGNvbW1lbnRzKTsgLy8gU3RyaW5naWZ5IHBheWxvYWRcclxuICAgICAgICB2YXIgaGVhZGVycyA9IG5ldyBodHRwXzEuSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7IC8vIC4uLiBTZXQgY29udGVudCB0eXBlIHRvIEpTT05cclxuICAgICAgICB2YXIgb3B0aW9ucyA9IG5ldyBodHRwXzEuUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pOyAvLyBDcmVhdGUgYSByZXF1ZXN0IG9wdGlvblxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLlVybCArICcvJyArIGlkICsgJy9hZGRjb21tZW50cy8nLCBjb21tZW50cywgaGVhZGVycykgLy8gLi4udXNpbmcgcG9zdCByZXF1ZXN0XHJcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzLmpzb24oKTsgfSkgLy8gLi4uYW5kIGNhbGxpbmcgLmpzb24oKSBvbiB0aGUgcmVzcG9uc2UgdG8gcmV0dXJuIGRhdGFcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpOyAvLy4uLmVycm9ycyBpZiBhbnlcclxuICAgIH07XHJcbiAgICBVc2VyU3RhdHVzU2VydmljZSA9IF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGNvcmVfMS5JbmplY3RhYmxlKCksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgW2h0dHBfMS5IdHRwXSlcclxuICAgIF0sIFVzZXJTdGF0dXNTZXJ2aWNlKTtcclxuICAgIHJldHVybiBVc2VyU3RhdHVzU2VydmljZTtcclxufSgpKTtcclxuZXhwb3J0cy5Vc2VyU3RhdHVzU2VydmljZSA9IFVzZXJTdGF0dXNTZXJ2aWNlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2Vyc3RhdHVzLnNlcnZpY2UuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL3NlcnZpY2VzL3VzZXJzdGF0dXMuc2VydmljZS5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvaHR0cFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2h0dHBcIlxuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9SeFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anMvUnhcIlxuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCJcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4anMvYWRkL29wZXJhdG9yL2NhdGNoXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2hcIlxuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9hZGQvb3BlcmF0b3IvdG9Qcm9taXNlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvdG9Qcm9taXNlXCJcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgVXNlclN0YXR1cyA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBVc2VyU3RhdHVzKCkge1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFVzZXJTdGF0dXM7XHJcbn0oKSk7XHJcbmV4cG9ydHMuVXNlclN0YXR1cyA9IFVzZXJTdGF0dXM7XHJcbnZhciBTdGF0dXNUeXBlID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFN0YXR1c1R5cGUoaWQsIHR5cGUpIHtcclxuICAgIH1cclxuICAgIHJldHVybiBTdGF0dXNUeXBlO1xyXG59KCkpO1xyXG5leHBvcnRzLlN0YXR1c1R5cGUgPSBTdGF0dXNUeXBlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2Vyc3RhdHVzLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9tb2RlbHMvdXNlcnN0YXR1cy5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxmb3JtIChuZ1N1Ym1pdCk9XFxcInN1Ym1pdFN0YXR1cygpXFxcIiBjbGFzcz1cXFwiZm9ybS1ob3Jpem9udGFsIGJvcmRlcmVkLWdyb3VwXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicGFuZWwgYm9yZGVyXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWhlYWRpbmcgbm9tYXJnaW50XFxcIj5cXHJcXG4gICAgICAgICAgICA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0IG5vYm9yZGVyIFxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWNhbWVyYVxcXCI+PC9pPiBQaG90by9WaWRlbzwvYT4gfFxcclxcbiAgICAgICAgICAgIDxhIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHQgbm9ib3JkZXJcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1waG90b1xcXCI+PC9pPiBQaG90by9WaWRlbyBBbGJ1bTwvYT5cXHJcXG4gICAgICAgICAgICA8aHIgY2xhc3M9XFxcIm5vbWFyZ2ludCBub21hcmdpbmJcXFwiIC8+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWJvZHkgXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3cgXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVxcXCJcXFwiIHdpZHRoPVxcXCI0NVxcXCIgaGVpZ2h0PVxcXCI0NVxcXCIgYWx0PVxcXCJcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTExXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wgbm9ib3JkZXJcXFwiIHJvd3M9XFxcIjJcXFwiIHBsYWNlaG9sZGVyPVxcXCJXaGF0cyBvbiB5b3VyIG1pbmQ/XFxcIiBbKG5nTW9kZWwpXT1cXFwibW9kZWwuc3RhdHVzXFxcIiBuYW1lPVxcXCJ0ZXh0XFxcIiByZXF1aXJlZD48L3RleHRhcmVhPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aHIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgbm9tYXJnaW5iXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtNlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XFxcImZvcm0tY29udHJvbCBwdWxsLWxlZnRcXFwiIFsobmdNb2RlbCldPVxcXCJtb2RlbC50eXBlXFxcIiBuYW1lPVxcXCJ0eXBlXFxcIiByZXF1aXJlZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+IExvdmUgR3VydSA8L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+IFBzeWNob2xvZ2lzdCA8L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+IERvY3RvciA8L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+IE90aGVyIDwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtNlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IHB1bGwtcmlnaHQgYnRuLXNtXFxcIj5Qb3N0PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgXFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Zvcm0+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9wb3N0L3Bvc3QuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxudmFyIHJvdXRlcl8xID0gcmVxdWlyZSgnQGFuZ3VsYXIvcm91dGVyJyk7XHJcbi8vIEltcG9ydHNcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL2NvcmUnKTtcclxudmFyIGVtaXR0ZXJfc2VydmljZV8xID0gcmVxdWlyZSgnLi4vLi4vc2VydmljZXMvZW1pdHRlci5zZXJ2aWNlJyk7XHJcbnZhciB1c2Vyc3RhdHVzX3NlcnZpY2VfMSA9IHJlcXVpcmUoJy4uLy4uL3NlcnZpY2VzL3VzZXJzdGF0dXMuc2VydmljZScpO1xyXG52YXIgRmVlZENvbXBvbmVudCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBGZWVkQ29tcG9uZW50KHN0YXR1c1NlcnZpY2UsIHJvdXRlcikge1xyXG4gICAgICAgIHRoaXMuc3RhdHVzU2VydmljZSA9IHN0YXR1c1NlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XHJcbiAgICB9XHJcbiAgICBGZWVkQ29tcG9uZW50LnByb3RvdHlwZS5sb2FkU3RhdHVzcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIC8vIEdldCBhbGwgc3RhdHVzXHJcbiAgICAgICAgdGhpcy5zdGF0dXNTZXJ2aWNlLmdldFN0YXR1cygpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKHVzZXJzdGF0dXMpIHsgcmV0dXJuIF90aGlzLnVzZXJzdGF0dXMgPSB1c2Vyc3RhdHVzOyB9LCAvL0JpbmQgdG8gdmlld1xyXG4gICAgICAgIGZ1bmN0aW9uICgvL0JpbmQgdG8gdmlld1xyXG4gICAgICAgICAgICBlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBGZWVkQ29tcG9uZW50LnByb3RvdHlwZS5uZ09uSW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBMb2FkIHN0YXR1c1xyXG4gICAgICAgIHRoaXMubG9hZFN0YXR1c3MoKTtcclxuICAgIH07XHJcbiAgICAvLyAgIGdvdG9EZXRhaWwodXNlcnN0YXR1czogVXNlclN0YXR1cyk6IHZvaWQge1xyXG4gICAgLy8gICAgIGxldCBsaW5rID0gWycvZGV0YWlsJywgdXNlcnN0YXR1cy5pZF07XHJcbiAgICAvLyAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUobGluayk7XHJcbiAgICAvLyAgIH1cclxuICAgIEZlZWRDb21wb25lbnQucHJvdG90eXBlLm5nT25DaGFuZ2VzID0gZnVuY3Rpb24gKGNoYW5nZXMpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIC8vIExpc3RlbiB0byB0aGUgJ2xpc3QnZW1pdHRlZCBldmVudCBzbyBhcyBwb3B1bGF0ZSB0aGUgbW9kZWxcclxuICAgICAgICAvLyB3aXRoIHRoZSBldmVudCBwYXlsb2FkXHJcbiAgICAgICAgZW1pdHRlcl9zZXJ2aWNlXzEuRW1pdHRlclNlcnZpY2UuZ2V0KHRoaXMubGlzdElkKS5zdWJzY3JpYmUoZnVuY3Rpb24gKHVzZXJzdGF0dXMpIHsgX3RoaXMudXNlcnN0YXR1cyA9IHVzZXJzdGF0dXM7IH0pO1xyXG4gICAgfTtcclxuICAgIF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGNvcmVfMS5JbnB1dCgpLCBcclxuICAgICAgICBfX21ldGFkYXRhKCdkZXNpZ246dHlwZScsIFN0cmluZylcclxuICAgIF0sIEZlZWRDb21wb25lbnQucHJvdG90eXBlLCBcImxpc3RJZFwiLCB2b2lkIDApO1xyXG4gICAgX19kZWNvcmF0ZShbXHJcbiAgICAgICAgY29yZV8xLklucHV0KCksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjp0eXBlJywgU3RyaW5nKVxyXG4gICAgXSwgRmVlZENvbXBvbmVudC5wcm90b3R5cGUsIFwiZWRpdElkXCIsIHZvaWQgMCk7XHJcbiAgICBGZWVkQ29tcG9uZW50ID0gX19kZWNvcmF0ZShbXHJcbiAgICAgICAgY29yZV8xLkNvbXBvbmVudCh7XHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnYXBwLWZlZWQnLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9mZWVkLmNvbXBvbmVudC5odG1sJylcclxuICAgICAgICB9KSwgXHJcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCBbdXNlcnN0YXR1c19zZXJ2aWNlXzEuVXNlclN0YXR1c1NlcnZpY2UsIHJvdXRlcl8xLlJvdXRlcl0pXHJcbiAgICBdLCBGZWVkQ29tcG9uZW50KTtcclxuICAgIHJldHVybiBGZWVkQ29tcG9uZW50O1xyXG59KCkpO1xyXG5leHBvcnRzLkZlZWRDb21wb25lbnQgPSBGZWVkQ29tcG9uZW50O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1mZWVkLmNvbXBvbmVudC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9mZWVkL2ZlZWQuY29tcG9uZW50LmpzXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGFwcC1mZWVkYm94IFtlZGl0SWRdPVxcXCJlZGl0SWRcXFwiIFtsaXN0SWRdPVxcXCJsaXN0SWRcXFwiICpuZ0Zvcj1cXFwibGV0IHN0YXR1cyBvZiB1c2Vyc3RhdHVzXFxcIiBbc3RhdHVzXT1cXFwic3RhdHVzXFxcIj48L2FwcC1mZWVkYm94PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZmVlZC9mZWVkLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbnZhciBjb3JlXzEgPSByZXF1aXJlKCdAYW5ndWxhci9jb3JlJyk7XHJcbnZhciBlbWl0dGVyX3NlcnZpY2VfMSA9IHJlcXVpcmUoJy4uLy4uL3NlcnZpY2VzL2VtaXR0ZXIuc2VydmljZScpO1xyXG52YXIgdXNlcnN0YXR1c19zZXJ2aWNlXzEgPSByZXF1aXJlKCcuLi8uLi9zZXJ2aWNlcy91c2Vyc3RhdHVzLnNlcnZpY2UnKTtcclxudmFyIHVzZXJzdGF0dXNfMSA9IHJlcXVpcmUoJy4uLy4uL21vZGVscy91c2Vyc3RhdHVzJyk7XHJcbnZhciBGZWVkQm94Q29tcG9uZW50ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEZlZWRCb3hDb21wb25lbnQoc3RhdHVzU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuc3RhdHVzU2VydmljZSA9IHN0YXR1c1NlcnZpY2U7XHJcbiAgICB9XHJcbiAgICBGZWVkQm94Q29tcG9uZW50LnByb3RvdHlwZS5lZGl0U3RhdHVzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIEVtaXQgZWRpdCBldmVudFxyXG4gICAgICAgIGVtaXR0ZXJfc2VydmljZV8xLkVtaXR0ZXJTZXJ2aWNlLmdldCh0aGlzLmVkaXRJZCkuZW1pdCh0aGlzLnN0YXR1cyk7XHJcbiAgICB9O1xyXG4gICAgRmVlZEJveENvbXBvbmVudC5wcm90b3R5cGUuZGVsZXRlU3RhdHVzID0gZnVuY3Rpb24gKF9pZCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5zdGF0dXNTZXJ2aWNlLnJlbW92ZVN0YXR1cyhfaWQpLnN1YnNjcmliZShmdW5jdGlvbiAoc3RhdHVzKSB7XHJcbiAgICAgICAgICAgIC8vIEVtaXQgbGlzdCBldmVudFxyXG4gICAgICAgICAgICBlbWl0dGVyX3NlcnZpY2VfMS5FbWl0dGVyU2VydmljZS5nZXQoX3RoaXMubGlzdElkKS5lbWl0KHN0YXR1cyk7XHJcbiAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICAvLyBMb2cgZXJyb3JzIGlmIGFueVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGNvcmVfMS5JbnB1dCgpLCBcclxuICAgICAgICBfX21ldGFkYXRhKCdkZXNpZ246dHlwZScsIHVzZXJzdGF0dXNfMS5Vc2VyU3RhdHVzKVxyXG4gICAgXSwgRmVlZEJveENvbXBvbmVudC5wcm90b3R5cGUsIFwic3RhdHVzXCIsIHZvaWQgMCk7XHJcbiAgICBfX2RlY29yYXRlKFtcclxuICAgICAgICBjb3JlXzEuSW5wdXQoKSwgXHJcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnR5cGUnLCBTdHJpbmcpXHJcbiAgICBdLCBGZWVkQm94Q29tcG9uZW50LnByb3RvdHlwZSwgXCJsaXN0SWRcIiwgdm9pZCAwKTtcclxuICAgIF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGNvcmVfMS5JbnB1dCgpLCBcclxuICAgICAgICBfX21ldGFkYXRhKCdkZXNpZ246dHlwZScsIFN0cmluZylcclxuICAgIF0sIEZlZWRCb3hDb21wb25lbnQucHJvdG90eXBlLCBcImVkaXRJZFwiLCB2b2lkIDApO1xyXG4gICAgRmVlZEJveENvbXBvbmVudCA9IF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGNvcmVfMS5Db21wb25lbnQoe1xyXG4gICAgICAgICAgICBzZWxlY3RvcjogJ2FwcC1mZWVkYm94JyxcclxuICAgICAgICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZmVlZGJveC5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgICAgICAgICBzdHlsZVVybHM6IFtyZXF1aXJlKCcuL2ZlZWRib3guY29tcG9uZW50LmNzcycpXVxyXG4gICAgICAgIH0pLCBcclxuICAgICAgICBfX21ldGFkYXRhKCdkZXNpZ246cGFyYW10eXBlcycsIFt1c2Vyc3RhdHVzX3NlcnZpY2VfMS5Vc2VyU3RhdHVzU2VydmljZV0pXHJcbiAgICBdLCBGZWVkQm94Q29tcG9uZW50KTtcclxuICAgIHJldHVybiBGZWVkQm94Q29tcG9uZW50O1xyXG59KCkpO1xyXG5leHBvcnRzLkZlZWRCb3hDb21wb25lbnQgPSBGZWVkQm94Q29tcG9uZW50O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1mZWVkYm94LmNvbXBvbmVudC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9mZWVkYm94L2ZlZWRib3guY29tcG9uZW50LmpzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwicGFuZWwgcGFuZWwtZGVmYXVsdFxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWhlYWRpbmcgbWktaGktNDBcXFwiPlxcclxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcInB1bGwtbGVmdFxcXCI+XFxyXFxuICAgICAgICAgICAge3tzdGF0dXMudHlwZX19XFxyXFxuICAgICAgICA8L3NwYW4+XFxyXFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwicHVsbC1yaWdodFxcXCI+XFxyXFxuICAgICAgICAgICAge3tzdGF0dXMudXBkYXRlVGltZXwgZGF0ZUZvcm1hdCB8IGRhdGU6J21lZGl1bSd9fVxcclxcbiAgICAgICAgICAgIDwhLS18e3tzdGF0dXMudXBkYXRlZEFnbyB8IGRhdGVGb3JtYXQgfX0gYWdvLS0+XFxyXFxuXFxyXFxuICAgICAgICA8L3NwYW4+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1ib2R5XFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAge3tzdGF0dXMuc3RhdHVzfX1cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMTJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICB7e3N0YXR1cy5saWtlc0NvdW50c319IGxpa2VzIHwge3tzdGF0dXMuY29tbWVudHNDb3VudHN9fSBDb21tZW50cyBEZWxldGUgRWRpdFxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1mb290ZXIgbWktaGktNDBcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTFcXFwiPlxcclxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1oZWFydFxcXCI+PC9pPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTFcXFwiPlxcclxcbiAgICAgICAgICAgIDxhcHAtY29tbWVudC1mb3JtIFtzdGF0dXNJZF09XFxcInN0YXR1cy5faWRcXFwiPjwvYXBwLWNvbW1lbnQtZm9ybT5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZlZWRib3gvZmVlZGJveC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZmVlZGJveC5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9mZWVkYm94L2ZlZWRib3guY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIubWktaGktNDB7XFxyXFxubWluLWhlaWdodDo0MHB4O1xcclxcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9mZWVkYm94L2ZlZWRib3guY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XHJcbnZhciB1c2Vyc3RhdHVzX3NlcnZpY2VfMSA9IHJlcXVpcmUoXCIuLi8uLi9zZXJ2aWNlcy91c2Vyc3RhdHVzLnNlcnZpY2VcIik7XHJcbnZhciBjb21tZW50c18xID0gcmVxdWlyZShcIi4uLy4uL21vZGVscy9jb21tZW50c1wiKTtcclxudmFyIGVtaXR0ZXJfc2VydmljZV8xID0gcmVxdWlyZShcIi4uLy4uL3NlcnZpY2VzL2VtaXR0ZXIuc2VydmljZVwiKTtcclxudmFyIENvbW1lbnRGb3JtQ29tcG9uZW50ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIENvbW1lbnRGb3JtQ29tcG9uZW50KGNvbW1lbnRTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5jb21tZW50U2VydmljZSA9IGNvbW1lbnRTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMubW9kZWwgPSBuZXcgY29tbWVudHNfMS5Db21tZW50cygnJywgJycsIG5ldyBEYXRlLCAnJyk7XHJcbiAgICAgICAgdGhpcy5lZGl0aW5nID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBDb21tZW50Rm9ybUNvbXBvbmVudC5wcm90b3R5cGUuc3VibWl0Q29tbWVudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciBjb21tZW50T3BlcmF0aW9uO1xyXG4gICAgICAgIGNvbW1lbnRPcGVyYXRpb24gPSB0aGlzLmNvbW1lbnRTZXJ2aWNlLmFkZENvbW1lbnQodGhpcy5zdGF0dXNJZCwgdGhpcy5tb2RlbCk7XHJcbiAgICAgICAgLy8gaWYoIXRoaXMuZWRpdGluZylcclxuICAgICAgICAvLyAgICAgY29tbWVudE9wZXJhdGlvbiA9IHRoaXMuY29tbWVudFNlcnZpY2UuYWRkQ29tbWVudCh0aGlzLm1vZGVsLklELCB0aGlzLm1vZGVsKVxyXG4gICAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgIGNvbW1lbnRPcGVyYXRpb24gPSB0aGlzLmNvbW1lbnRTZXJ2aWNlLnVwZGF0ZUNvbW1lbnQodGhpcy5tb2RlbClcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gY29tbWVudE9wZXJhdGlvbi5zdWJzY3JpYmUoXHJcbiAgICAgICAgLy8gICAgIGNvbW1lbnRzPT57XHJcbiAgICAgICAgLy8gICAgICAgICBFbWl0dGVyU2VydmljZS5nZXQodGhpcy5saXN0SWQpLmVtaXQoY29tbWVudHMpO1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5tb2RlbCA9IG5ldyBDb21tZW50cygpO1xyXG4gICAgICAgIC8vICAgICAgICAgaWYodGhpcy5lZGl0aW5nKSBcclxuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLmVkaXRpbmcgPSAhdGhpcy5lZGl0aW5nO1xyXG4gICAgICAgIC8vICAgICB9LFxyXG4gICAgICAgIC8vICAgICBlcnI9PntcclxuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgLy8gICAgIH0pO1xyXG4gICAgICAgIGNvbW1lbnRPcGVyYXRpb24uc3Vic2NyaWJlKGZ1bmN0aW9uIChjb21tZW50cykge1xyXG4gICAgICAgICAgICBlbWl0dGVyX3NlcnZpY2VfMS5FbWl0dGVyU2VydmljZS5nZXQoX3RoaXMuc3RhdHVzSWQpLmVtaXQoY29tbWVudHMpO1xyXG4gICAgICAgICAgICBfdGhpcy5tb2RlbCA9IG5ldyBjb21tZW50c18xLkNvbW1lbnRzKCcnLCAnJywgbmV3IERhdGUsICdEYXZpZCcpO1xyXG4gICAgICAgICAgICBpZiAoX3RoaXMuZWRpdGluZylcclxuICAgICAgICAgICAgICAgIF90aGlzLmVkaXRpbmcgPSAhX3RoaXMuZWRpdGluZztcclxuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgQ29tbWVudEZvcm1Db21wb25lbnQucHJvdG90eXBlLm5nT25DaGFuZ2VzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgZW1pdHRlcl9zZXJ2aWNlXzEuRW1pdHRlclNlcnZpY2UuZ2V0KHRoaXMuc3RhdHVzSWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKGNvbW1lbnQpIHtcclxuICAgICAgICAgICAgX3RoaXMubW9kZWwgPSBjb21tZW50O1xyXG4gICAgICAgICAgICBfdGhpcy5lZGl0aW5nID0gdHJ1ZTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBfX2RlY29yYXRlKFtcclxuICAgICAgICBjb3JlXzEuSW5wdXQoKSwgXHJcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnR5cGUnLCBPYmplY3QpXHJcbiAgICBdLCBDb21tZW50Rm9ybUNvbXBvbmVudC5wcm90b3R5cGUsIFwic3RhdHVzSWRcIiwgdm9pZCAwKTtcclxuICAgIENvbW1lbnRGb3JtQ29tcG9uZW50ID0gX19kZWNvcmF0ZShbXHJcbiAgICAgICAgY29yZV8xLkNvbXBvbmVudCh7XHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnYXBwLWNvbW1lbnQtZm9ybScsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2NvbW1lbnQtZm9ybS5jb21wb25lbnQuaHRtbCcpXHJcbiAgICAgICAgfSksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgW3VzZXJzdGF0dXNfc2VydmljZV8xLlVzZXJTdGF0dXNTZXJ2aWNlXSlcclxuICAgIF0sIENvbW1lbnRGb3JtQ29tcG9uZW50KTtcclxuICAgIHJldHVybiBDb21tZW50Rm9ybUNvbXBvbmVudDtcclxufSgpKTtcclxuZXhwb3J0cy5Db21tZW50Rm9ybUNvbXBvbmVudCA9IENvbW1lbnRGb3JtQ29tcG9uZW50O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb21tZW50LWZvcm0uY29tcG9uZW50LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NvbW1lbnQvY29tbWVudC1mb3JtLmNvbXBvbmVudC5qc1xuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy9leHBvcnQgY2xhc3MgQ29tbWVudHNcclxuLy97XHJcbi8vICAgIGlkOiBzdHJpbmc7XHJcbi8vICAgIHVzZXJJRDogc3RyaW5nXHJcbi8vICAgIGNvbW1lbnRUaW1lOiBEYXRlO1xyXG4vLyAgICB0ZXh0OiBzdHJpbmc7XHJcblwidXNlIHN0cmljdFwiO1xyXG4vL31cclxudmFyIENvbW1lbnRzID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIENvbW1lbnRzKGlkLCB1c2VySUQsIGNvbW1lbnRUaW1lLCB0ZXh0KSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMudXNlcklEID0gdXNlcklEO1xyXG4gICAgICAgIHRoaXMuY29tbWVudFRpbWUgPSBjb21tZW50VGltZTtcclxuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIENvbW1lbnRzO1xyXG59KCkpO1xyXG5leHBvcnRzLkNvbW1lbnRzID0gQ29tbWVudHM7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbW1lbnRzLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9tb2RlbHMvY29tbWVudHMuanNcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8Zm9ybSBjbGFzcz1cXFwiZm9ybS1ob3Jpem9udGFsXFxcIiAobmdTdWJtaXQpPSdzdWJtaXRDb21tZW50KCknPlxcclxcbiAgICA8ZGl2PlxcclxcbiAgICAgICAgc3VibWl0XFxyXFxuICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgKG5nTW9kZWwpPVxcXCJtb2RlbC50ZXh0XFxcIiBwbGFjZWhvbGRlcj1cXFwiV3JpdGUgYSBDb21tZW50XFxcIiAvPlxcclxcbiAgICAgICAgPGJ1dHRvbiAqbmdJZj1cXFwiIWVkaXRpbmdcXFwiIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBidG4teHNcXFwiPkFkZCBDb21tZW50PC9idXR0b24+XFxyXFxuICAgICAgICA8YnV0dG9uICpuZ0lmPVxcXCJlZGl0aW5nXFxcIiB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXdhcm5pbmcgYnRuLXhzXFxcIj5VcGRhdGUgPC9idXR0b24+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZm9ybT5cXHJcXG5cXHJcXG5cXHJcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NvbW1lbnQvY29tbWVudC1mb3JtLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbnZhciBjb3JlXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcclxudmFyIENvbW1lbnRMaXN0Q29tcG9uZW50ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIENvbW1lbnRMaXN0Q29tcG9uZW50KCkge1xyXG4gICAgfVxyXG4gICAgQ29tbWVudExpc3RDb21wb25lbnQgPSBfX2RlY29yYXRlKFtcclxuICAgICAgICBjb3JlXzEuQ29tcG9uZW50KHtcclxuICAgICAgICAgICAgc2VsZWN0b3I6ICdhcHAtY29tbWVudC1saXN0JyxcclxuICAgICAgICAgICAgdGVtcGxhdGU6IFwiXFxuICAgICAgICA8YXBwLWNvbW1lbnQtYm94PjwvYXBwLWNvbW1lbnQtYm94PlxcbiAgICBcIixcclxuICAgICAgICB9KSwgXHJcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCBbXSlcclxuICAgIF0sIENvbW1lbnRMaXN0Q29tcG9uZW50KTtcclxuICAgIHJldHVybiBDb21tZW50TGlzdENvbXBvbmVudDtcclxufSgpKTtcclxuZXhwb3J0cy5Db21tZW50TGlzdENvbXBvbmVudCA9IENvbW1lbnRMaXN0Q29tcG9uZW50O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb21tZW50LWxpc3QuY29tcG9uZW50LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NvbW1lbnQvY29tbWVudC1saXN0LmNvbXBvbmVudC5qc1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XHJcbnZhciBDb21tZW50Qm94Q29tcG9uZW50ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIENvbW1lbnRCb3hDb21wb25lbnQoKSB7XHJcbiAgICB9XHJcbiAgICBDb21tZW50Qm94Q29tcG9uZW50ID0gX19kZWNvcmF0ZShbXHJcbiAgICAgICAgY29yZV8xLkNvbXBvbmVudCh7XHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiBcImFwcC1jb21tZW50LWJveFwiLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZTogXCJcXG4gICAgICAgIDwhLS1MaXN0IG9mIHRoZSBhdmFpbGFibGUgY29tbWVudHMtLT5cXG4gICAgXCJcclxuICAgICAgICB9KSwgXHJcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCBbXSlcclxuICAgIF0sIENvbW1lbnRCb3hDb21wb25lbnQpO1xyXG4gICAgcmV0dXJuIENvbW1lbnRCb3hDb21wb25lbnQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuQ29tbWVudEJveENvbXBvbmVudCA9IENvbW1lbnRCb3hDb21wb25lbnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbW1lbnQtYm94LmNvbXBvbmVudC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jb21tZW50L2NvbW1lbnQtYm94LmNvbXBvbmVudC5qc1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG52YXIgY29yZV8xID0gcmVxdWlyZSgnQGFuZ3VsYXIvY29yZScpO1xyXG52YXIgRGF0ZUZvcm1hdFBpcGUgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gRGF0ZUZvcm1hdFBpcGUoKSB7XHJcbiAgICB9XHJcbiAgICBEYXRlRm9ybWF0UGlwZS5wcm90b3R5cGUudHJhbnNmb3JtID0gZnVuY3Rpb24gKHZhbHVlLCBhcmdzKSB7XHJcbiAgICAgICAgaWYgKGFyZ3MgJiYgYXJnc1swXSA9PT0gJ2xvY2FsJykge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IERhdGUodmFsdWUpLnRvTG9jYWxlU3RyaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZSh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH07XHJcbiAgICBEYXRlRm9ybWF0UGlwZSA9IF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGNvcmVfMS5QaXBlKHtcclxuICAgICAgICAgICAgbmFtZTogJ2RhdGVGb3JtYXQnXHJcbiAgICAgICAgfSksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgW10pXHJcbiAgICBdLCBEYXRlRm9ybWF0UGlwZSk7XHJcbiAgICByZXR1cm4gRGF0ZUZvcm1hdFBpcGU7XHJcbn0oKSk7XHJcbmV4cG9ydHMuRGF0ZUZvcm1hdFBpcGUgPSBEYXRlRm9ybWF0UGlwZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0ZS1mb3JtYXQucGlwZS5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvcGlwZXMvZGF0ZS1mb3JtYXQucGlwZS5qc1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==