// Imports
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { EmitterService } from '../../services/emitter.service';
import { UserStatusService } from '../../services/userstatus.service';

import { UserStatus } from '../../models/userstatus';

@Component({
    selector: 'app-feed',
    template: require('./feed.component.html')

})

export class FeedComponent implements OnInit, OnChanges {

    constructor(private statusService: UserStatusService) { }
    //local properties
    userstatus: UserStatus[]

    // Input properties
    @Input() listId: string;
    @Input() editId: string;
    loadStatuss() {
        // Get all status
        this.statusService.getStatus()
            .subscribe(
            userstatus => this.userstatus = userstatus, //Bind to view
            err => {
                // Log errors if any
                console.log(err);
            });
    }

    ngOnInit() {
        // Load status
        this.loadStatuss()
    }


    ngOnChanges(changes: any) {
        // Listen to the 'list'emitted event so as populate the model
        // with the event payload
        EmitterService.get(this.listId).subscribe((userstatus: UserStatus[]) => { this.userstatus = userstatus });
    }

}

