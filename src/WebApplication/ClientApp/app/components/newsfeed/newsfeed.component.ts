import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'newsfeed',
    templateUrl: './newsfeed.component.html',
    styleUrls: ['./newsfeed.component.css']
})
export class NewsFeedComponent {
    public status: StatusData[];

    constructor(http: Http) {
        http.get('/api/userstatus').subscribe(result => {
            this.status = result.json() as StatusData[];
        });

    }
}

interface StatusData {
    _id: string;
    type: string;
    status: string;
    updateTime: Date;
}
