import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

@Injectable()
export class UserStatusService {
    statusupdate = {};

    constructor(private http: Http) { }

    getUserStatus() {
        return this.http.get('api/userstatus')
            .map(response => <string[]>response.json());
    }
    addUserStatus() {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8');
        this.http.post('api/userstatus', JSON.stringify(this.statusupdate), { headers: headers }).subscribe();
        alert("Status Inserted");
        this.getUserStatus(); 
    }
}