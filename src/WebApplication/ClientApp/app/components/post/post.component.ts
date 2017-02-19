import { Component, EventEmitter, Input, OnChanges, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Rx';


import { EmitterService } from '../../services/emitter.service';
import { UserStatusService } from '../../services/userstatus.service';

import { UserStatus, StatusType } from '../../models/userstatus';

@Component({
    selector: 'app-post',
    template: require('./post.component.html'),
    providers: [UserStatusService]

})
export class PostComponent implements OnChanges {

    selectedType: StatusType; //= new IStatusType(1, 'select value' ); 
    Types = [
        new StatusType(1,'Feeling sad'),
        new StatusType(2, 'Feeling happy'),
        new StatusType(3, 'Feeling awesome'),
        new StatusType(4, 'Feeling exhausted')

    ];

    constructor(private statusService: UserStatusService) { }
    // Local properties
    private model = new UserStatus();
    private editing = false;

    // Input properties
    @Input() editId: string;
    @Input() listId: string;


    submitStatus() {
        // Variable to hold a reference of addComment/updateComment
        let statusOperation: Observable<UserStatus[]>;

        statusOperation = this.statusService.addStatus(this.model)
    
        //if (!this.editing) {
        //    // Create a new status
        //    statusOperation = this.statusService.addStatus(this.model)
        //}
        //} else {
        //    // Update an existing status
        //    statusOperation = this.statusService.updateStatus(this.model)
        //}

        // Subscribe to observable
        statusOperation.subscribe(
            status => {
                // Emit list event
                EmitterService.get(this.listId).emit(status);
                // Empty model
                this.model = new UserStatus();
                // Switch editing status
                //if (this.editing) this.editing = !this.editing;
            },
            err => {
                console.log(err);
            });
    }

    ngOnChanges() {
        // Listen to the 'edit'emitted event so as populate the model
        // with the event payload
        EmitterService.get(this.editId).subscribe((status: UserStatus) => {
            this.model = status
            this.editing = true;
        });
    }
}

