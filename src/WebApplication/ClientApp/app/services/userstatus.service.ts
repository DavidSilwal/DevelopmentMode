import { Injectable } from '@angular/core';

import { UserStatus } from '../models/userstatus';

import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class UserStatusService {

    constructor(private http: Http) { }

    private Url = "http://localhost:50353/api/userstatus";

    getStatus(): Observable<UserStatus[]> {

        return this.http.get(this.Url)

            .map((res: Response) => res.json())

            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

    }

    //add a new status
    addStatus(body: Object): Observable<UserStatus[]> {
        let bodyString = JSON.stringify(body); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.post(this.Url, body, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }

    // Update a status
    updateStatus(body: Object): Observable<UserStatus[]> {
        let bodyString = JSON.stringify(body); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.put(`${this.Url}/${body['id']}`, body, options) // ...using put request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }
    // Delete a status
    removeStatus(id: string): Observable<UserStatus[]> {
        return this.http.delete(`${this.Url}/${id}`) // ...using put request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }
}
