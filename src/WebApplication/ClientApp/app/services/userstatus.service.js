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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
// Import RxJs required methods
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/toPromise");
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