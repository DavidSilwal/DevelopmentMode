import { Component } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

@Component({
    selector: 'feed',
    template: require('./feed.component.html')

})

@Injectable()
export class FeedComponent {
    private Url = 'api/userstatus';  // URL to web api

    public status: StatusData[];

    constructor(http: Http) {
        http.get(this.Url).subscribe(status => {
            this.status = status.json() as StatusData[];
        });

    }


}

interface StatusData {
    _id: string;
    type: string;
    status: string;
    updateTime: Date;
}
