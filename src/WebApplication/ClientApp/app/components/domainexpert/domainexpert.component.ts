import { Component, OnInit } from '@angular/core';
import { PostComponent } from '../post/post.component';

import { FeedComponent } from '../feed/feed.component';

import { ExpertService } from '../../services/expert.service';
import { UserStatus } from '../../models/userstatus';

@Component({
    selector: 'domainexpert',
    template: require('./domainexpert.component.html')
})
export class DomainExpertComponent implements OnInit {
    userExpertStatuses = [];
    constructor(private statusExpertService: ExpertService){

    }

    ngOnInit() {
         this.statusExpertService
             .getStatus()
             .subscribe(resStatusDate=>this.userExpertStatuses=resStatusDate)
        
    }
}


