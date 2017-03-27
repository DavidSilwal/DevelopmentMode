import { Router } from '@angular/router';

import { UserStatus } from '../../models/userstatus';
// Imports
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { EmitterService } from '../../services/emitter.service';
import { ExpertService } from '../../services/expert.service';
import { FeedBoxExpertComponent } from '../../components/feedboxExpert/feedboxexpert.component'

@Component({
    selector: 'app-feedexpert',
    template: require('./feedexpert.component.html')

})

export class FeedExpertComponent implements OnInit {
   

    constructor(
        private expertStatusService: ExpertService,
       
    ) { }
 
    expertuserstatus : UserStatus[];

    loadStatus(){
        this.expertStatusService
            .getStatus()
            .subscribe(resexpertuserstatus=> this.expertuserstatus = resexpertuserstatus
            ,err => {console.log(err);}
            )
    }
    ngOnInit() {
        console.log('statusload');
       //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
       //Add 'implements OnInit' to the class.
       this.loadStatus();
   }
}

