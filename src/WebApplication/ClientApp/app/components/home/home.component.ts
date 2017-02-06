import { Component } from '@angular/core';

import { PostComponent } from '../post/post.component';

import { FeedComponent } from '../feed/feed.component';

@Component({
    selector: 'home',
    template: require('./home.component.html'),
 })

export class HomeComponent
{
}

interface StatusData {
    _id: string;
    type: string;
    status: string;
    updateTime: Date;
}
