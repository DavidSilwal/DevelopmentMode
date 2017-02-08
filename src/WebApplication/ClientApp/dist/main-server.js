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
	                feedbox_component_1.FeedBoxComponent
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

	module.exports = "<!--<p *ngIf=\"!status\"><em>Loading...</em></p>-->\n\n<div class=\"container\">\n    <div>\n\n        <app-post>\n\n        </app-post>\n    </div>\n\n    <div>\n\n        <app-feed>\n\n        </app-feed>\n    </div>\n</div>"

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
	        this.Url = "http://localhost:50353/api/UserStatus";
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
	//# sourceMappingURL=userstatus.js.map

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = "<form (ngSubmit)=\"submitStatus()\" class=\"form-horizontal bordered-group\">\r\n    <div class=\"panel border\">\r\n        <div class=\"panel-heading nomargint\">\r\n            <a href=\"#\" class=\"btn btn-default noborder \"><i class=\"fa fa-camera\"></i> Photo/Video</a> |\r\n            <a href=\"#\" class=\"btn btn-default noborder\"><i class=\"fa fa-photo\"></i> Photo/Video Album</a>\r\n            <hr class=\"nomargint nomarginb\" />\r\n        </div>\r\n        <div class=\"panel-body \">\r\n            <div class=\"row \">\r\n                <div class=\"col-xs-12\">\r\n                    <div class=\"form-group \">\r\n                        <div class=\"col-xs-1\">\r\n                                <img src=\"\" width=\"45\" height=\"45\" alt=\"\" />\r\n                        </div>\r\n                        <div class=\"col-xs-11\">\r\n                            <textarea class=\"form-control noborder\" rows=\"2\" placeholder=\"Whats on your mind?\" [(ngModel)]=\"model.status\" name=\"text\"></textarea>\r\n                        </div>\r\n                    </div>\r\n                    <hr />\r\n                    <div class=\"form-group nomarginb\">\r\n                        <div class=\"col-xs-12\">\r\n                            <button type=\"submit\" class=\"btn btn-primary pull-right btn-sm\">Post</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</form>"

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

	module.exports = "<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">{{status.updateTime}}</div>\r\n    <div class=\"panel-body\">\r\n        {{status.status}}\r\n    </div>\r\n    <div class=\"panel-footer\">\r\n        <button class=\"btn btn-info\" (click)=\"editStatus()\"><span class=\"glyphicon glyphicon-edit\"></span></button>\r\n        <button class=\"btn btn-danger\" (click)=\"deleteStatus(status._id)\"><span class=\"glyphicon glyphicon-remove\"></span></button>\r\n    </div>\r\n</div>"

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
	exports.push([module.id, "", ""]);
	
	// exports


/***/ }
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMmE4NzNlMDU4MDE0MDY5MGYyOTEiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Jvb3Qtc2VydmVyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ6b25lLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvYXBwLm1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9mb3Jtc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL3JvdXRlclwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuY3NzP2RkYzMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3Bvc3QvcG9zdC5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9zZXJ2aWNlcy9lbWl0dGVyLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9zZXJ2aWNlcy91c2Vyc3RhdHVzLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvaHR0cFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvUnhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9jYXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZVwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvbW9kZWxzL3VzZXJzdGF0dXMuanMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3Bvc3QvcG9zdC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZmVlZC9mZWVkLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZmVlZC9mZWVkLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9mZWVkYm94L2ZlZWRib3guY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9mZWVkYm94L2ZlZWRib3guY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZlZWRib3gvZmVlZGJveC5jb21wb25lbnQuY3NzP2ZhODUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZlZWRib3gvZmVlZGJveC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7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QTtBQUNBO0FBQ0EsNkNBQTRDLFFBQVE7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBOEMsc0NBQXNDLEVBQUU7QUFDdEY7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEZBQTJGLCtCQUErQixFQUFFO0FBQzVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBLDJDOzs7Ozs7QUM5REEsK0k7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTRDLFFBQVE7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0EsOEM7Ozs7OztBQ3ZEQSw2RkFBNEYsbUJBQW1CLHNEQUFzRCxlQUFlLHFWOzs7Ozs7O0FDQ3BMOztBQUVBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTs7Ozs7OztBQ1BBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUEiLCJmaWxlIjoibWFpbi1zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAyYTg3M2UwNTgwMTQwNjkwZjI5MSIsImltcG9ydCAnYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxscyc7XG5pbXBvcnQgJ3pvbmUuanMnO1xuaW1wb3J0IHsgZW5hYmxlUHJvZE1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHBsYXRmb3JtTm9kZUR5bmFtaWMgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwnO1xuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSAnLi9hcHAvYXBwLm1vZHVsZSc7XG5cbmVuYWJsZVByb2RNb2RlKCk7XG5jb25zdCBwbGF0Zm9ybSA9IHBsYXRmb3JtTm9kZUR5bmFtaWMoKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHBhcmFtczogYW55KSA6IFByb21pc2U8eyBodG1sOiBzdHJpbmcsIGdsb2JhbHM/OiBhbnkgfT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlcXVlc3Rab25lID0gWm9uZS5jdXJyZW50LmZvcmsoe1xuICAgICAgICAgICAgbmFtZTogJ2FuZ3VsYXItdW5pdmVyc2FsIHJlcXVlc3QnLFxuICAgICAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgICAgIGJhc2VVcmw6ICcvJyxcbiAgICAgICAgICAgICAgICByZXF1ZXN0VXJsOiBwYXJhbXMudXJsLFxuICAgICAgICAgICAgICAgIG9yaWdpblVybDogcGFyYW1zLm9yaWdpbixcbiAgICAgICAgICAgICAgICBwcmVib290OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBSZW5kZXIganVzdCB0aGUgPGFwcD4gY29tcG9uZW50IGluc3RlYWQgb2Ygd3JhcHBpbmcgaXQgaW5zaWRlIGFuIGV4dHJhIEhUTUwgZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAvLyBXYWl0aW5nIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL3VuaXZlcnNhbC9pc3N1ZXMvMzQ3XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQ6ICc8IURPQ1RZUEUgaHRtbD48aHRtbD48aGVhZD48L2hlYWQ+PGJvZHk+PGFwcD48L2FwcD48L2JvZHk+PC9odG1sPidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkhhbmRsZUVycm9yOiAocGFyZW50Wm9uZSwgY3VycmVudFpvbmUsIHRhcmdldFpvbmUsIGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gSWYgYW55IGVycm9yIG9jY3VycyB3aGlsZSByZW5kZXJpbmcgdGhlIG1vZHVsZSwgcmVqZWN0IHRoZSB3aG9sZSBvcGVyYXRpb25cbiAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmVxdWVzdFpvbmUucnVuPFByb21pc2U8c3RyaW5nPj4oKCkgPT4gcGxhdGZvcm0uc2VyaWFsaXplTW9kdWxlKEFwcE1vZHVsZSkpLnRoZW4oaHRtbCA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKHsgaHRtbDogaHRtbCB9KTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICB9KTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9ib290LXNlcnZlci50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzXCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiem9uZS5qc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInpvbmUuanNcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuZ3VsYXIyLXVuaXZlcnNhbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL2NvcmUnKTtcclxudmFyIGZvcm1zXzEgPSByZXF1aXJlKCdAYW5ndWxhci9mb3JtcycpO1xyXG52YXIgcm91dGVyXzEgPSByZXF1aXJlKCdAYW5ndWxhci9yb3V0ZXInKTtcclxudmFyIGFuZ3VsYXIyX3VuaXZlcnNhbF8xID0gcmVxdWlyZSgnYW5ndWxhcjItdW5pdmVyc2FsJyk7XHJcbnZhciBhcHBfY29tcG9uZW50XzEgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQnKTtcclxudmFyIGhvbWVfY29tcG9uZW50XzEgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudCcpO1xyXG52YXIgcG9zdF9jb21wb25lbnRfMSA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9wb3N0L3Bvc3QuY29tcG9uZW50Jyk7XHJcbnZhciBmZWVkX2NvbXBvbmVudF8xID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL2ZlZWQvZmVlZC5jb21wb25lbnQnKTtcclxudmFyIGZlZWRib3hfY29tcG9uZW50XzEgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvZmVlZGJveC9mZWVkYm94LmNvbXBvbmVudCcpO1xyXG52YXIgdXNlcnN0YXR1c19zZXJ2aWNlXzEgPSByZXF1aXJlKCcuL3NlcnZpY2VzL3VzZXJzdGF0dXMuc2VydmljZScpO1xyXG52YXIgZW1pdHRlcl9zZXJ2aWNlXzEgPSByZXF1aXJlKCcuL3NlcnZpY2VzL2VtaXR0ZXIuc2VydmljZScpO1xyXG52YXIgQXBwTW9kdWxlID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEFwcE1vZHVsZSgpIHtcclxuICAgIH1cclxuICAgIEFwcE1vZHVsZSA9IF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGNvcmVfMS5OZ01vZHVsZSh7XHJcbiAgICAgICAgICAgIGJvb3RzdHJhcDogW2FwcF9jb21wb25lbnRfMS5BcHBDb21wb25lbnRdLFxyXG4gICAgICAgICAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICAgICAgICAgIGFwcF9jb21wb25lbnRfMS5BcHBDb21wb25lbnQsXHJcbiAgICAgICAgICAgICAgICBob21lX2NvbXBvbmVudF8xLkhvbWVDb21wb25lbnQsXHJcbiAgICAgICAgICAgICAgICBwb3N0X2NvbXBvbmVudF8xLlBvc3RDb21wb25lbnQsXHJcbiAgICAgICAgICAgICAgICBmZWVkX2NvbXBvbmVudF8xLkZlZWRDb21wb25lbnQsXHJcbiAgICAgICAgICAgICAgICBmZWVkYm94X2NvbXBvbmVudF8xLkZlZWRCb3hDb21wb25lbnRcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgaW1wb3J0czogW1xyXG4gICAgICAgICAgICAgICAgYW5ndWxhcjJfdW5pdmVyc2FsXzEuVW5pdmVyc2FsTW9kdWxlLFxyXG4gICAgICAgICAgICAgICAgZm9ybXNfMS5Gb3Jtc01vZHVsZSxcclxuICAgICAgICAgICAgICAgIHJvdXRlcl8xLlJvdXRlck1vZHVsZS5mb3JSb290KFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBhdGg6ICcnLCByZWRpcmVjdFRvOiAnaG9tZScsIHBhdGhNYXRjaDogJ2Z1bGwnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwYXRoOiAnaG9tZScsIGNvbXBvbmVudDogaG9tZV9jb21wb25lbnRfMS5Ib21lQ29tcG9uZW50IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwYXRoOiAnKionLCByZWRpcmVjdFRvOiAnaG9tZScgfVxyXG4gICAgICAgICAgICAgICAgXSlcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbdXNlcnN0YXR1c19zZXJ2aWNlXzEuVXNlclN0YXR1c1NlcnZpY2UsIGVtaXR0ZXJfc2VydmljZV8xLkVtaXR0ZXJTZXJ2aWNlXVxyXG4gICAgICAgIH0pLCBcclxuICAgICAgICBfX21ldGFkYXRhKCdkZXNpZ246cGFyYW10eXBlcycsIFtdKVxyXG4gICAgXSwgQXBwTW9kdWxlKTtcclxuICAgIHJldHVybiBBcHBNb2R1bGU7XHJcbn0oKSk7XHJcbmV4cG9ydHMuQXBwTW9kdWxlID0gQXBwTW9kdWxlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAubW9kdWxlLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9hcHAubW9kdWxlLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2Zvcm1zXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvZm9ybXNcIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9yb3V0ZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9yb3V0ZXJcIlxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbnZhciBjb3JlXzEgPSByZXF1aXJlKCdAYW5ndWxhci9jb3JlJyk7XHJcbnZhciBBcHBDb21wb25lbnQgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQXBwQ29tcG9uZW50KCkge1xyXG4gICAgfVxyXG4gICAgQXBwQ29tcG9uZW50ID0gX19kZWNvcmF0ZShbXHJcbiAgICAgICAgY29yZV8xLkNvbXBvbmVudCh7XHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnYXBwJyxcclxuICAgICAgICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vYXBwLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICAgICAgICAgIHN0eWxlczogW3JlcXVpcmUoJy4vYXBwLmNvbXBvbmVudC5jc3MnKV1cclxuICAgICAgICB9KSwgXHJcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCBbXSlcclxuICAgIF0sIEFwcENvbXBvbmVudCk7XHJcbiAgICByZXR1cm4gQXBwQ29tcG9uZW50O1xyXG59KCkpO1xyXG5leHBvcnRzLkFwcENvbXBvbmVudCA9IEFwcENvbXBvbmVudDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLmNvbXBvbmVudC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz0nY29udGFpbmVyLWZsdWlkJz5cXG4gICAgPGRpdiBjbGFzcz0ncm93Jz5cXG4gICAgICAgIDxkaXYgY2xhc3M9J2NvbC1zbS05IGJvZHktY29udGVudCc+XFxuICAgICAgICAgICAgPHJvdXRlci1vdXRsZXQ+XFxuXFxuICAgICAgICAgICAgPC9yb3V0ZXItb3V0bGV0PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbjwvZGl2PlxcblxcblxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9hcHAuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgICAvKiBPbiBzbWFsbCBzY3JlZW5zLCB0aGUgbmF2IG1lbnUgc3BhbnMgdGhlIGZ1bGwgd2lkdGggb2YgdGhlIHNjcmVlbi4gTGVhdmUgYSBzcGFjZSBmb3IgaXQuICovXFxuICAgIC5ib2R5LWNvbnRlbnQge1xcbiAgICAgICAgcGFkZGluZy10b3A6IDUwcHg7XFxuICAgIH1cXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cdHZhciBsaXN0ID0gW107XHJcblxyXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcclxuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XHJcblx0XHR2YXIgcmVzdWx0ID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHRoaXNbaV07XHJcblx0XHRcdGlmKGl0ZW1bMl0pIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGl0ZW1bMV0gKyBcIn1cIik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goaXRlbVsxXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQuam9pbihcIlwiKTtcclxuXHR9O1xyXG5cclxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxyXG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcclxuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XHJcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcclxuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxyXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xyXG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXHJcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXHJcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXHJcblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXHJcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XHJcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XHJcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHRyZXR1cm4gbGlzdDtcclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbnZhciBjb3JlXzEgPSByZXF1aXJlKCdAYW5ndWxhci9jb3JlJyk7XHJcbnZhciBIb21lQ29tcG9uZW50ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEhvbWVDb21wb25lbnQoKSB7XHJcbiAgICB9XHJcbiAgICBIb21lQ29tcG9uZW50ID0gX19kZWNvcmF0ZShbXHJcbiAgICAgICAgY29yZV8xLkNvbXBvbmVudCh7XHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnaG9tZScsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2hvbWUuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgICAgICB9KSwgXHJcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCBbXSlcclxuICAgIF0sIEhvbWVDb21wb25lbnQpO1xyXG4gICAgcmV0dXJuIEhvbWVDb21wb25lbnQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuSG9tZUNvbXBvbmVudCA9IEhvbWVDb21wb25lbnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWhvbWUuY29tcG9uZW50LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8IS0tPHAgKm5nSWY9XFxcIiFzdGF0dXNcXFwiPjxlbT5Mb2FkaW5nLi4uPC9lbT48L3A+LS0+XFxuXFxuPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG4gICAgPGRpdj5cXG5cXG4gICAgICAgIDxhcHAtcG9zdD5cXG5cXG4gICAgICAgIDwvYXBwLXBvc3Q+XFxuICAgIDwvZGl2PlxcblxcbiAgICA8ZGl2PlxcblxcbiAgICAgICAgPGFwcC1mZWVkPlxcblxcbiAgICAgICAgPC9hcHAtZmVlZD5cXG4gICAgPC9kaXY+XFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL2NvcmUnKTtcclxudmFyIGVtaXR0ZXJfc2VydmljZV8xID0gcmVxdWlyZSgnLi4vLi4vc2VydmljZXMvZW1pdHRlci5zZXJ2aWNlJyk7XHJcbnZhciB1c2Vyc3RhdHVzX3NlcnZpY2VfMSA9IHJlcXVpcmUoJy4uLy4uL3NlcnZpY2VzL3VzZXJzdGF0dXMuc2VydmljZScpO1xyXG52YXIgdXNlcnN0YXR1c18xID0gcmVxdWlyZSgnLi4vLi4vbW9kZWxzL3VzZXJzdGF0dXMnKTtcclxudmFyIFBvc3RDb21wb25lbnQgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUG9zdENvbXBvbmVudChzdGF0dXNTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0dXNTZXJ2aWNlID0gc3RhdHVzU2VydmljZTtcclxuICAgICAgICAvLyBMb2NhbCBwcm9wZXJ0aWVzXHJcbiAgICAgICAgdGhpcy5tb2RlbCA9IG5ldyB1c2Vyc3RhdHVzXzEuVXNlclN0YXR1cygpO1xyXG4gICAgICAgIHRoaXMuZWRpdGluZyA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgUG9zdENvbXBvbmVudC5wcm90b3R5cGUuc3VibWl0U3RhdHVzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgLy8gVmFyaWFibGUgdG8gaG9sZCBhIHJlZmVyZW5jZSBvZiBhZGRDb21tZW50L3VwZGF0ZUNvbW1lbnRcclxuICAgICAgICB2YXIgc3RhdHVzT3BlcmF0aW9uO1xyXG4gICAgICAgIHN0YXR1c09wZXJhdGlvbiA9IHRoaXMuc3RhdHVzU2VydmljZS5hZGRTdGF0dXModGhpcy5tb2RlbCk7XHJcbiAgICAgICAgLy9pZiAoIXRoaXMuZWRpdGluZykge1xyXG4gICAgICAgIC8vICAgIC8vIENyZWF0ZSBhIG5ldyBzdGF0dXNcclxuICAgICAgICAvLyAgICBzdGF0dXNPcGVyYXRpb24gPSB0aGlzLnN0YXR1c1NlcnZpY2UuYWRkU3RhdHVzKHRoaXMubW9kZWwpXHJcbiAgICAgICAgLy99XHJcbiAgICAgICAgLy99IGVsc2Uge1xyXG4gICAgICAgIC8vICAgIC8vIFVwZGF0ZSBhbiBleGlzdGluZyBzdGF0dXNcclxuICAgICAgICAvLyAgICBzdGF0dXNPcGVyYXRpb24gPSB0aGlzLnN0YXR1c1NlcnZpY2UudXBkYXRlU3RhdHVzKHRoaXMubW9kZWwpXHJcbiAgICAgICAgLy99XHJcbiAgICAgICAgLy8gU3Vic2NyaWJlIHRvIG9ic2VydmFibGVcclxuICAgICAgICBzdGF0dXNPcGVyYXRpb24uc3Vic2NyaWJlKGZ1bmN0aW9uIChzdGF0dXMpIHtcclxuICAgICAgICAgICAgLy8gRW1pdCBsaXN0IGV2ZW50XHJcbiAgICAgICAgICAgIGVtaXR0ZXJfc2VydmljZV8xLkVtaXR0ZXJTZXJ2aWNlLmdldChfdGhpcy5saXN0SWQpLmVtaXQoc3RhdHVzKTtcclxuICAgICAgICAgICAgLy8gRW1wdHkgbW9kZWxcclxuICAgICAgICAgICAgX3RoaXMubW9kZWwgPSBuZXcgdXNlcnN0YXR1c18xLlVzZXJTdGF0dXMoKTtcclxuICAgICAgICAgICAgLy8gU3dpdGNoIGVkaXRpbmcgc3RhdHVzXHJcbiAgICAgICAgICAgIC8vaWYgKHRoaXMuZWRpdGluZykgdGhpcy5lZGl0aW5nID0gIXRoaXMuZWRpdGluZztcclxuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgUG9zdENvbXBvbmVudC5wcm90b3R5cGUubmdPbkNoYW5nZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAvLyBMaXN0ZW4gdG8gdGhlICdlZGl0J2VtaXR0ZWQgZXZlbnQgc28gYXMgcG9wdWxhdGUgdGhlIG1vZGVsXHJcbiAgICAgICAgLy8gd2l0aCB0aGUgZXZlbnQgcGF5bG9hZFxyXG4gICAgICAgIGVtaXR0ZXJfc2VydmljZV8xLkVtaXR0ZXJTZXJ2aWNlLmdldCh0aGlzLmVkaXRJZCkuc3Vic2NyaWJlKGZ1bmN0aW9uIChzdGF0dXMpIHtcclxuICAgICAgICAgICAgX3RoaXMubW9kZWwgPSBzdGF0dXM7XHJcbiAgICAgICAgICAgIF90aGlzLmVkaXRpbmcgPSB0cnVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGNvcmVfMS5JbnB1dCgpLCBcclxuICAgICAgICBfX21ldGFkYXRhKCdkZXNpZ246dHlwZScsIFN0cmluZylcclxuICAgIF0sIFBvc3RDb21wb25lbnQucHJvdG90eXBlLCBcImVkaXRJZFwiLCB2b2lkIDApO1xyXG4gICAgX19kZWNvcmF0ZShbXHJcbiAgICAgICAgY29yZV8xLklucHV0KCksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjp0eXBlJywgU3RyaW5nKVxyXG4gICAgXSwgUG9zdENvbXBvbmVudC5wcm90b3R5cGUsIFwibGlzdElkXCIsIHZvaWQgMCk7XHJcbiAgICBQb3N0Q29tcG9uZW50ID0gX19kZWNvcmF0ZShbXHJcbiAgICAgICAgY29yZV8xLkNvbXBvbmVudCh7XHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnYXBwLXBvc3QnLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9wb3N0LmNvbXBvbmVudC5odG1sJyksXHJcbiAgICAgICAgICAgIHByb3ZpZGVyczogW3VzZXJzdGF0dXNfc2VydmljZV8xLlVzZXJTdGF0dXNTZXJ2aWNlXVxyXG4gICAgICAgIH0pLCBcclxuICAgICAgICBfX21ldGFkYXRhKCdkZXNpZ246cGFyYW10eXBlcycsIFt1c2Vyc3RhdHVzX3NlcnZpY2VfMS5Vc2VyU3RhdHVzU2VydmljZV0pXHJcbiAgICBdLCBQb3N0Q29tcG9uZW50KTtcclxuICAgIHJldHVybiBQb3N0Q29tcG9uZW50O1xyXG59KCkpO1xyXG5leHBvcnRzLlBvc3RDb21wb25lbnQgPSBQb3N0Q29tcG9uZW50O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1wb3N0LmNvbXBvbmVudC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9wb3N0L3Bvc3QuY29tcG9uZW50LmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbi8qICogKiAuL2FwcC9lbWl0dGVyLnNlcnZpY2UudHMgKiAqICovXHJcbi8vIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL3Nhc3hhXHJcbi8vIEltcG9ydHNcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL2NvcmUnKTtcclxudmFyIEVtaXR0ZXJTZXJ2aWNlID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEVtaXR0ZXJTZXJ2aWNlKCkge1xyXG4gICAgfVxyXG4gICAgLy8gU2V0IGEgbmV3IGV2ZW50IGluIHRoZSBzdG9yZSB3aXRoIGEgZ2l2ZW4gSURcclxuICAgIC8vIGFzIGtleVxyXG4gICAgRW1pdHRlclNlcnZpY2UuZ2V0ID0gZnVuY3Rpb24gKElEKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9lbWl0dGVyc1tJRF0pXHJcbiAgICAgICAgICAgIHRoaXMuX2VtaXR0ZXJzW0lEXSA9IG5ldyBjb3JlXzEuRXZlbnRFbWl0dGVyKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VtaXR0ZXJzW0lEXTtcclxuICAgIH07XHJcbiAgICAvLyBFdmVudCBzdG9yZVxyXG4gICAgRW1pdHRlclNlcnZpY2UuX2VtaXR0ZXJzID0ge307XHJcbiAgICBFbWl0dGVyU2VydmljZSA9IF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGNvcmVfMS5JbmplY3RhYmxlKCksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgW10pXHJcbiAgICBdLCBFbWl0dGVyU2VydmljZSk7XHJcbiAgICByZXR1cm4gRW1pdHRlclNlcnZpY2U7XHJcbn0oKSk7XHJcbmV4cG9ydHMuRW1pdHRlclNlcnZpY2UgPSBFbWl0dGVyU2VydmljZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZW1pdHRlci5zZXJ2aWNlLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9zZXJ2aWNlcy9lbWl0dGVyLnNlcnZpY2UuanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL2NvcmUnKTtcclxudmFyIGh0dHBfMSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL2h0dHAnKTtcclxudmFyIFJ4XzEgPSByZXF1aXJlKCdyeGpzL1J4Jyk7XHJcbi8vIEltcG9ydCBSeEpzIHJlcXVpcmVkIG1ldGhvZHNcclxucmVxdWlyZSgncnhqcy9hZGQvb3BlcmF0b3IvbWFwJyk7XHJcbnJlcXVpcmUoJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJyk7XHJcbnJlcXVpcmUoJ3J4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZScpO1xyXG52YXIgVXNlclN0YXR1c1NlcnZpY2UgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gVXNlclN0YXR1c1NlcnZpY2UoaHR0cCkge1xyXG4gICAgICAgIHRoaXMuaHR0cCA9IGh0dHA7XHJcbiAgICAgICAgdGhpcy5VcmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6NTAzNTMvYXBpL1VzZXJTdGF0dXNcIjtcclxuICAgIH1cclxuICAgIFVzZXJTdGF0dXNTZXJ2aWNlLnByb3RvdHlwZS5nZXRTdGF0dXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5VcmwpXHJcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzLmpzb24oKTsgfSlcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgfTtcclxuICAgIFVzZXJTdGF0dXNTZXJ2aWNlLnByb3RvdHlwZS5oYW5kbGVFcnJvciA9IGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgIC8vIEluIGEgcmVhbCB3b3JsZCBhcHAsIHdlIG1pZ2h0IHVzZSBhIHJlbW90ZSBsb2dnaW5nIGluZnJhc3RydWN0dXJlXHJcbiAgICAgICAgdmFyIGVyck1zZztcclxuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBodHRwXzEuUmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgdmFyIGJvZHkgPSBlcnJvci5qc29uKCkgfHwgJyc7XHJcbiAgICAgICAgICAgIHZhciBlcnIgPSBib2R5LmVycm9yIHx8IEpTT04uc3RyaW5naWZ5KGJvZHkpO1xyXG4gICAgICAgICAgICBlcnJNc2cgPSBlcnJvci5zdGF0dXMgKyBcIiAtIFwiICsgKGVycm9yLnN0YXR1c1RleHQgfHwgJycpICsgXCIgXCIgKyBlcnI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBlcnJNc2cgPSBlcnJvci5tZXNzYWdlID8gZXJyb3IubWVzc2FnZSA6IGVycm9yLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyTXNnKTtcclxuICAgICAgICByZXR1cm4gUnhfMS5PYnNlcnZhYmxlLnRocm93KGVyck1zZyk7XHJcbiAgICB9O1xyXG4gICAgLy9hZGQgYSBuZXcgc3RhdHVzXHJcbiAgICBVc2VyU3RhdHVzU2VydmljZS5wcm90b3R5cGUuYWRkU3RhdHVzID0gZnVuY3Rpb24gKGJvZHkpIHtcclxuICAgICAgICB2YXIgYm9keVN0cmluZyA9IEpTT04uc3RyaW5naWZ5KGJvZHkpOyAvLyBTdHJpbmdpZnkgcGF5bG9hZFxyXG4gICAgICAgIHZhciBoZWFkZXJzID0gbmV3IGh0dHBfMS5IZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTsgLy8gLi4uIFNldCBjb250ZW50IHR5cGUgdG8gSlNPTlxyXG4gICAgICAgIHZhciBvcHRpb25zID0gbmV3IGh0dHBfMS5SZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7IC8vIENyZWF0ZSBhIHJlcXVlc3Qgb3B0aW9uXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuVXJsLCBib2R5LCBvcHRpb25zKSAvLyAuLi51c2luZyBwb3N0IHJlcXVlc3RcclxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAocmVzKSB7IHJldHVybiByZXMuanNvbigpOyB9KSAvLyAuLi5hbmQgY2FsbGluZyAuanNvbigpIG9uIHRoZSByZXNwb25zZSB0byByZXR1cm4gZGF0YVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgICB9O1xyXG4gICAgLy8gVXBkYXRlIGEgc3RhdHVzXHJcbiAgICBVc2VyU3RhdHVzU2VydmljZS5wcm90b3R5cGUudXBkYXRlU3RhdHVzID0gZnVuY3Rpb24gKGJvZHkpIHtcclxuICAgICAgICB2YXIgYm9keVN0cmluZyA9IEpTT04uc3RyaW5naWZ5KGJvZHkpOyAvLyBTdHJpbmdpZnkgcGF5bG9hZFxyXG4gICAgICAgIHZhciBoZWFkZXJzID0gbmV3IGh0dHBfMS5IZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTsgLy8gLi4uIFNldCBjb250ZW50IHR5cGUgdG8gSlNPTlxyXG4gICAgICAgIHZhciBvcHRpb25zID0gbmV3IGh0dHBfMS5SZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7IC8vIENyZWF0ZSBhIHJlcXVlc3Qgb3B0aW9uXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQodGhpcy5VcmwgKyBcIi9cIiArIGJvZHlbJ2lkJ10sIGJvZHksIG9wdGlvbnMpIC8vIC4uLnVzaW5nIHB1dCByZXF1ZXN0XHJcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzLmpzb24oKTsgfSkgLy8gLi4uYW5kIGNhbGxpbmcgLmpzb24oKSBvbiB0aGUgcmVzcG9uc2UgdG8gcmV0dXJuIGRhdGFcclxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikgeyByZXR1cm4gUnhfMS5PYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKS5lcnJvciB8fCAnU2VydmVyIGVycm9yJyk7IH0pOyAvLy4uLmVycm9ycyBpZiBhbnlcclxuICAgIH07XHJcbiAgICAvLyBEZWxldGUgYSBzdGF0dXNcclxuICAgIFVzZXJTdGF0dXNTZXJ2aWNlLnByb3RvdHlwZS5yZW1vdmVTdGF0dXMgPSBmdW5jdGlvbiAoX2lkKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUodGhpcy5VcmwgKyBcIi9cIiArIF9pZCkgLy8gLi4udXNpbmcgcHV0IHJlcXVlc3RcclxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAocmVzKSB7IHJldHVybiByZXMuanNvbigpOyB9KSAvLyAuLi5hbmQgY2FsbGluZyAuanNvbigpIG9uIHRoZSByZXNwb25zZSB0byByZXR1cm4gZGF0YVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7IC8vLi4uZXJyb3JzIGlmIGFueVxyXG4gICAgfTtcclxuICAgIFVzZXJTdGF0dXNTZXJ2aWNlID0gX19kZWNvcmF0ZShbXHJcbiAgICAgICAgY29yZV8xLkluamVjdGFibGUoKSwgXHJcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCBbaHR0cF8xLkh0dHBdKVxyXG4gICAgXSwgVXNlclN0YXR1c1NlcnZpY2UpO1xyXG4gICAgcmV0dXJuIFVzZXJTdGF0dXNTZXJ2aWNlO1xyXG59KCkpO1xyXG5leHBvcnRzLlVzZXJTdGF0dXNTZXJ2aWNlID0gVXNlclN0YXR1c1NlcnZpY2U7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZXJzdGF0dXMuc2VydmljZS5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvc2VydmljZXMvdXNlcnN0YXR1cy5zZXJ2aWNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9odHRwXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvaHR0cFwiXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzL1J4XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9SeFwiXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIlxuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2hcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9jYXRjaFwiXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2VcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2VcIlxuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBVc2VyU3RhdHVzID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFVzZXJTdGF0dXMoKSB7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gVXNlclN0YXR1cztcclxufSgpKTtcclxuZXhwb3J0cy5Vc2VyU3RhdHVzID0gVXNlclN0YXR1cztcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlcnN0YXR1cy5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvbW9kZWxzL3VzZXJzdGF0dXMuanNcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8Zm9ybSAobmdTdWJtaXQpPVxcXCJzdWJtaXRTdGF0dXMoKVxcXCIgY2xhc3M9XFxcImZvcm0taG9yaXpvbnRhbCBib3JkZXJlZC1ncm91cFxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsIGJvcmRlclxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1oZWFkaW5nIG5vbWFyZ2ludFxcXCI+XFxyXFxuICAgICAgICAgICAgPGEgaHJlZj1cXFwiI1xcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdCBub2JvcmRlciBcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1jYW1lcmFcXFwiPjwvaT4gUGhvdG8vVmlkZW88L2E+IHxcXHJcXG4gICAgICAgICAgICA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0IG5vYm9yZGVyXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtcGhvdG9cXFwiPjwvaT4gUGhvdG8vVmlkZW8gQWxidW08L2E+XFxyXFxuICAgICAgICAgICAgPGhyIGNsYXNzPVxcXCJub21hcmdpbnQgbm9tYXJnaW5iXFxcIiAvPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1ib2R5IFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93IFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwIFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTFcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XFxcIlxcXCIgd2lkdGg9XFxcIjQ1XFxcIiBoZWlnaHQ9XFxcIjQ1XFxcIiBhbHQ9XFxcIlxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTFcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XFxcImZvcm0tY29udHJvbCBub2JvcmRlclxcXCIgcm93cz1cXFwiMlxcXCIgcGxhY2Vob2xkZXI9XFxcIldoYXRzIG9uIHlvdXIgbWluZD9cXFwiIFsobmdNb2RlbCldPVxcXCJtb2RlbC5zdGF0dXNcXFwiIG5hbWU9XFxcInRleHRcXFwiPjwvdGV4dGFyZWE+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxociAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cCBub21hcmdpbmJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IHB1bGwtcmlnaHQgYnRuLXNtXFxcIj5Qb3N0PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9mb3JtPlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcG9zdC9wb3N0LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbnZhciByb3V0ZXJfMSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL3JvdXRlcicpO1xyXG4vLyBJbXBvcnRzXHJcbnZhciBjb3JlXzEgPSByZXF1aXJlKCdAYW5ndWxhci9jb3JlJyk7XHJcbnZhciBlbWl0dGVyX3NlcnZpY2VfMSA9IHJlcXVpcmUoJy4uLy4uL3NlcnZpY2VzL2VtaXR0ZXIuc2VydmljZScpO1xyXG52YXIgdXNlcnN0YXR1c19zZXJ2aWNlXzEgPSByZXF1aXJlKCcuLi8uLi9zZXJ2aWNlcy91c2Vyc3RhdHVzLnNlcnZpY2UnKTtcclxudmFyIEZlZWRDb21wb25lbnQgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gRmVlZENvbXBvbmVudChzdGF0dXNTZXJ2aWNlLCByb3V0ZXIpIHtcclxuICAgICAgICB0aGlzLnN0YXR1c1NlcnZpY2UgPSBzdGF0dXNTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xyXG4gICAgfVxyXG4gICAgRmVlZENvbXBvbmVudC5wcm90b3R5cGUubG9hZFN0YXR1c3MgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAvLyBHZXQgYWxsIHN0YXR1c1xyXG4gICAgICAgIHRoaXMuc3RhdHVzU2VydmljZS5nZXRTdGF0dXMoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uICh1c2Vyc3RhdHVzKSB7IHJldHVybiBfdGhpcy51c2Vyc3RhdHVzID0gdXNlcnN0YXR1czsgfSwgLy9CaW5kIHRvIHZpZXdcclxuICAgICAgICBmdW5jdGlvbiAoLy9CaW5kIHRvIHZpZXdcclxuICAgICAgICAgICAgZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgRmVlZENvbXBvbmVudC5wcm90b3R5cGUubmdPbkluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gTG9hZCBzdGF0dXNcclxuICAgICAgICB0aGlzLmxvYWRTdGF0dXNzKCk7XHJcbiAgICB9O1xyXG4gICAgLy8gICBnb3RvRGV0YWlsKHVzZXJzdGF0dXM6IFVzZXJTdGF0dXMpOiB2b2lkIHtcclxuICAgIC8vICAgICBsZXQgbGluayA9IFsnL2RldGFpbCcsIHVzZXJzdGF0dXMuaWRdO1xyXG4gICAgLy8gICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKGxpbmspO1xyXG4gICAgLy8gICB9XHJcbiAgICBGZWVkQ29tcG9uZW50LnByb3RvdHlwZS5uZ09uQ2hhbmdlcyA9IGZ1bmN0aW9uIChjaGFuZ2VzKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAvLyBMaXN0ZW4gdG8gdGhlICdsaXN0J2VtaXR0ZWQgZXZlbnQgc28gYXMgcG9wdWxhdGUgdGhlIG1vZGVsXHJcbiAgICAgICAgLy8gd2l0aCB0aGUgZXZlbnQgcGF5bG9hZFxyXG4gICAgICAgIGVtaXR0ZXJfc2VydmljZV8xLkVtaXR0ZXJTZXJ2aWNlLmdldCh0aGlzLmxpc3RJZCkuc3Vic2NyaWJlKGZ1bmN0aW9uICh1c2Vyc3RhdHVzKSB7IF90aGlzLnVzZXJzdGF0dXMgPSB1c2Vyc3RhdHVzOyB9KTtcclxuICAgIH07XHJcbiAgICBfX2RlY29yYXRlKFtcclxuICAgICAgICBjb3JlXzEuSW5wdXQoKSwgXHJcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnR5cGUnLCBTdHJpbmcpXHJcbiAgICBdLCBGZWVkQ29tcG9uZW50LnByb3RvdHlwZSwgXCJsaXN0SWRcIiwgdm9pZCAwKTtcclxuICAgIF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGNvcmVfMS5JbnB1dCgpLCBcclxuICAgICAgICBfX21ldGFkYXRhKCdkZXNpZ246dHlwZScsIFN0cmluZylcclxuICAgIF0sIEZlZWRDb21wb25lbnQucHJvdG90eXBlLCBcImVkaXRJZFwiLCB2b2lkIDApO1xyXG4gICAgRmVlZENvbXBvbmVudCA9IF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGNvcmVfMS5Db21wb25lbnQoe1xyXG4gICAgICAgICAgICBzZWxlY3RvcjogJ2FwcC1mZWVkJyxcclxuICAgICAgICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZmVlZC5jb21wb25lbnQuaHRtbCcpXHJcbiAgICAgICAgfSksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgW3VzZXJzdGF0dXNfc2VydmljZV8xLlVzZXJTdGF0dXNTZXJ2aWNlLCByb3V0ZXJfMS5Sb3V0ZXJdKVxyXG4gICAgXSwgRmVlZENvbXBvbmVudCk7XHJcbiAgICByZXR1cm4gRmVlZENvbXBvbmVudDtcclxufSgpKTtcclxuZXhwb3J0cy5GZWVkQ29tcG9uZW50ID0gRmVlZENvbXBvbmVudDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZmVlZC5jb21wb25lbnQuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZmVlZC9mZWVkLmNvbXBvbmVudC5qc1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxhcHAtZmVlZGJveCBbZWRpdElkXT1cXFwiZWRpdElkXFxcIiBbbGlzdElkXT1cXFwibGlzdElkXFxcIiAqbmdGb3I9XFxcImxldCBzdGF0dXMgb2YgdXNlcnN0YXR1c1xcXCIgW3N0YXR1c109XFxcInN0YXR1c1xcXCI+PC9hcHAtZmVlZGJveD5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZlZWQvZmVlZC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG52YXIgY29yZV8xID0gcmVxdWlyZSgnQGFuZ3VsYXIvY29yZScpO1xyXG52YXIgZW1pdHRlcl9zZXJ2aWNlXzEgPSByZXF1aXJlKCcuLi8uLi9zZXJ2aWNlcy9lbWl0dGVyLnNlcnZpY2UnKTtcclxudmFyIHVzZXJzdGF0dXNfc2VydmljZV8xID0gcmVxdWlyZSgnLi4vLi4vc2VydmljZXMvdXNlcnN0YXR1cy5zZXJ2aWNlJyk7XHJcbnZhciB1c2Vyc3RhdHVzXzEgPSByZXF1aXJlKCcuLi8uLi9tb2RlbHMvdXNlcnN0YXR1cycpO1xyXG52YXIgRmVlZEJveENvbXBvbmVudCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBGZWVkQm94Q29tcG9uZW50KHN0YXR1c1NlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLnN0YXR1c1NlcnZpY2UgPSBzdGF0dXNTZXJ2aWNlO1xyXG4gICAgfVxyXG4gICAgRmVlZEJveENvbXBvbmVudC5wcm90b3R5cGUuZWRpdFN0YXR1cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBFbWl0IGVkaXQgZXZlbnRcclxuICAgICAgICBlbWl0dGVyX3NlcnZpY2VfMS5FbWl0dGVyU2VydmljZS5nZXQodGhpcy5lZGl0SWQpLmVtaXQodGhpcy5zdGF0dXMpO1xyXG4gICAgfTtcclxuICAgIEZlZWRCb3hDb21wb25lbnQucHJvdG90eXBlLmRlbGV0ZVN0YXR1cyA9IGZ1bmN0aW9uIChfaWQpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuc3RhdHVzU2VydmljZS5yZW1vdmVTdGF0dXMoX2lkKS5zdWJzY3JpYmUoZnVuY3Rpb24gKHN0YXR1cykge1xyXG4gICAgICAgICAgICAvLyBFbWl0IGxpc3QgZXZlbnRcclxuICAgICAgICAgICAgZW1pdHRlcl9zZXJ2aWNlXzEuRW1pdHRlclNlcnZpY2UuZ2V0KF90aGlzLmxpc3RJZCkuZW1pdChzdGF0dXMpO1xyXG4gICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgLy8gTG9nIGVycm9ycyBpZiBhbnlcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBfX2RlY29yYXRlKFtcclxuICAgICAgICBjb3JlXzEuSW5wdXQoKSwgXHJcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnR5cGUnLCB1c2Vyc3RhdHVzXzEuVXNlclN0YXR1cylcclxuICAgIF0sIEZlZWRCb3hDb21wb25lbnQucHJvdG90eXBlLCBcInN0YXR1c1wiLCB2b2lkIDApO1xyXG4gICAgX19kZWNvcmF0ZShbXHJcbiAgICAgICAgY29yZV8xLklucHV0KCksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjp0eXBlJywgU3RyaW5nKVxyXG4gICAgXSwgRmVlZEJveENvbXBvbmVudC5wcm90b3R5cGUsIFwibGlzdElkXCIsIHZvaWQgMCk7XHJcbiAgICBfX2RlY29yYXRlKFtcclxuICAgICAgICBjb3JlXzEuSW5wdXQoKSwgXHJcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnR5cGUnLCBTdHJpbmcpXHJcbiAgICBdLCBGZWVkQm94Q29tcG9uZW50LnByb3RvdHlwZSwgXCJlZGl0SWRcIiwgdm9pZCAwKTtcclxuICAgIEZlZWRCb3hDb21wb25lbnQgPSBfX2RlY29yYXRlKFtcclxuICAgICAgICBjb3JlXzEuQ29tcG9uZW50KHtcclxuICAgICAgICAgICAgc2VsZWN0b3I6ICdhcHAtZmVlZGJveCcsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2ZlZWRib3guY29tcG9uZW50Lmh0bWwnKSxcclxuICAgICAgICAgICAgc3R5bGVVcmxzOiBbcmVxdWlyZSgnLi9mZWVkYm94LmNvbXBvbmVudC5jc3MnKV1cclxuICAgICAgICB9KSwgXHJcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCBbdXNlcnN0YXR1c19zZXJ2aWNlXzEuVXNlclN0YXR1c1NlcnZpY2VdKVxyXG4gICAgXSwgRmVlZEJveENvbXBvbmVudCk7XHJcbiAgICByZXR1cm4gRmVlZEJveENvbXBvbmVudDtcclxufSgpKTtcclxuZXhwb3J0cy5GZWVkQm94Q29tcG9uZW50ID0gRmVlZEJveENvbXBvbmVudDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZmVlZGJveC5jb21wb25lbnQuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZmVlZGJveC9mZWVkYm94LmNvbXBvbmVudC5qc1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcInBhbmVsIHBhbmVsLWRlZmF1bHRcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1oZWFkaW5nXFxcIj57e3N0YXR1cy51cGRhdGVUaW1lfX08L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtYm9keVxcXCI+XFxyXFxuICAgICAgICB7e3N0YXR1cy5zdGF0dXN9fVxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtZm9vdGVyXFxcIj5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4taW5mb1xcXCIgKGNsaWNrKT1cXFwiZWRpdFN0YXR1cygpXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1lZGl0XFxcIj48L3NwYW4+PC9idXR0b24+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRhbmdlclxcXCIgKGNsaWNrKT1cXFwiZGVsZXRlU3RhdHVzKHN0YXR1cy5faWQpXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmVcXFwiPjwvc3Bhbj48L2J1dHRvbj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9mZWVkYm94L2ZlZWRib3guY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2ZlZWRib3guY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZmVlZGJveC9mZWVkYm94LmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZmVlZGJveC9mZWVkYm94LmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=