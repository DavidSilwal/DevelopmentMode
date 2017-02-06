import { Component, Input, Output, EventEmitter } from '@angular/core';

import { EmitterService } from '../../services/emitter.service';
import { UserStatusService } from '../../services/userstatus.service';

import { UserStatus } from '../../models/userstatus';


@Component({
    selector: 'app-feedbox',
    template: require('./feedbox.component.html'),
    styleUrls: [require('./feedbox.component.css')]
})

export class FeedBoxComponent {

    constructor(
        private statusService: UserStatusService
    ) { }
    // Define input properties
    @Input() status: UserStatus;
    @Input() listId: string;
    @Input() editId: string;

    editStatus() {
        // Emit edit event
        EmitterService.get(this.editId).emit(this.status);
    }

    deleteStatus(id: string) {
        // Call removeComment() from CommentService to delete comment
        this.statusService.removeStatus(id).subscribe(
            status => {
                // Emit list event
                EmitterService.get(this.listId).emit(status);
            },
            err => {
                // Log errors if any
                console.log(err);
            });
    }
}
