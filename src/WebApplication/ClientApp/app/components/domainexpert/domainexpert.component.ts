import { Component, OnInit, Input} from '@angular/core';
import { PostComponent } from '../post/post.component';

import { FeedExpertComponent } from '../feedexpert/feedexpert.component';

import { ExpertService } from '../../services/expert.service';
import { UserStatus } from '../../models/userstatus';

@Component({
    selector: 'app-domainexpert',
    template: require('./domainexpert.component.html'),
    
})

export class DomainExpertComponent {
    
}


