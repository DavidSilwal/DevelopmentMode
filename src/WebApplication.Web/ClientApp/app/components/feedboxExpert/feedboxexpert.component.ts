import { Component, Input, Output, EventEmitter } from '@angular/core';

import { EmitterService } from '../../services/emitter.service';
import { ExpertService } from '../../services/expert.service';
import { UserStatus } from '../../models/userstatus';



@Component({
    selector: 'app-feedboxexpert',
    template: require('./feedboxexpert.component.html'),  
    styleUrls: [require('./feedboxexpert.component.css')]
})

export class FeedBoxExpertComponent {

    constructor(
        private statusExpertService: ExpertService
    ) { }

    
    // Define input properties
    @Input() status: UserStatus;
    @Input() listId: string;
    @Input() editId: string;

    
    //increaseLike(){
    //        var a = this.status._id;
    //        this.statusExpertService
    //            .addLike(a)
    //            .subscribe( status => status)
    //        console.log(a);

            
    //    }

    //decreaseLike(){
    //    var a = this.status._id;
    //    this.statusService
    //        .disLike(a)
    //        .subscribe(status => status)

    //        console.log(this.status.Status);
    //}

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

        this.statusExpertService.removeStatus(_id).subscribe(
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
        
        //this.statusExpertService
        //    .updateStatus(statusId, value)
        //    .subscribe(status=>status)

    }

}
