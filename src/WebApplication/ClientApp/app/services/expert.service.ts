import { UserStatus } from './../models/userstatus';
import { Comments } from './../models/comments'

import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';   


@Injectable()
export class UserStatusService {

    constructor(private http: Http) { }

    private Url = "http://localhost:50353/api/expert";


    getStatus(): Observable<UserStatus[]> {

        return this.http.get(this.Url)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    private handleError(error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }


    //add a new status
    addStatus(body: UserStatus): Observable<UserStatus[]> {
        let bodyString = JSON.stringify(body); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.post(this.Url, body, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch(this.handleError);
    }

    // Update a status
    updateStatus(body: UserStatus): Observable<UserStatus[]> {
        let bodyString = JSON.stringify(body); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.put(`${this.Url}/${body['id']}`, body, options) // ...using put request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: Response) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }
    // Delete a status
    removeStatus(_id: string): Observable<UserStatus[]> {
        return this.http.delete(`${this.Url}/${_id}`) // ...using put request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch(this.handleError); //...errors if any
    }

    addComment(comment: Comment): Observable<Comments[]> {
        let commentString = JSON.stringify(comment); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.post(this.Url + '/addcomments/', comment, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch(this.handleError);
    }


}
