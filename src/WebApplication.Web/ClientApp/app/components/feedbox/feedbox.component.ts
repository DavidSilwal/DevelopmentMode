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

    
    increaseLike(){
            var a = this.status._id;
            this.statusService
                .addLike(a)
                .subscribe( status => status)
            console.log(a);

            
        }

    decreaseLike(){
        var a = this.status._id;
        this.statusService
            .disLike(a)
            .subscribe(status => status)

            console.log(this.status.Status);
    }

         toggleLike: true;
        
        getClass(){
            if(this.toggleLike){
                return 'likeheart';
            }
            else{
                return '';
            }

        }
     
        

   
       


    editStatus() {
        // Emit edit event
        console.log('mahesh');
        // EmitterService.get(this.editId).emit(this.status);
    }

    deleteStatus(_id: string) {

        this.statusService.removeStatus(_id).subscribe(
            status => {
                // Emit list event
                EmitterService.get(this.listId).emit(status);
            },
            err => {
                // Log errors if any
                console.log(err);
            });
    }

    updateStatus(value:any){
        console.log(value);
        console.log('update Clicked');
        
        var statusId= this.status._id;
        
        this.statusService
            .updateStatus(statusId, value)
            .subscribe(status=>status)

    }

}
