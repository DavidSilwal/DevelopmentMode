import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { UserStatus } from '../models/userstatus'

@Injectable()
export class UserStatusService {

    constructor(private http: Http) { }

    getUserStatus() {
        return this.http.get('api/userstatus')
            .map(response => <string[]>response.json());
    }
    

}