import { FormGroup, FormControl } from "@angular/forms"
import { Component, Input } from "@angular/core";
import { UserStatusService } from "../../services/userstatus.service";
import { Comments } from "../../models/comments";
import { Observable } from "rxjs/Observable";
import { EmitterService } from "../../services/emitter.service";

@Component({
    selector: 'app-comment-form',
    template: require('./comment-form.component.html')
})

export class CommentFormComponent
{
    constructor (private commentService: UserStatusService){}

  
    private editing : boolean = false ;

    // @Input() listId;
    // @Input() editId;

    @Input() statusId;

    

    submitComment(value: any)
    {
        console.log(this.statusId);
        console.log(value);
        console.log("mahesh");


        let commentOperation: Observable<Comments[]>;
        this.commentService
           .addComment(this.statusId, value)
        
            .subscribe(comments => comments)
             


          // if(!this.editing)
        //     commentOperation = this.commentService.addComment(this.model.ID, this.model)
        // } else {
        //     commentOperation = this.commentService.updateComment(this.model)
        // }

        // commentOperation.subscribe(
        //     comments=>{
        //         EmitterService.get(this.listId).emit(comments);
        //         this.model = new Comments();
        //         if(this.editing) 
        //             this.editing = !this.editing;
        //     },
        //     err=>{
        //         console.log(err);
        //     });

        //  .subscribe(
        //     comments=>{
        //         EmitterService.get(this.statusId).emit(comments);
        //         this.model = new Comments();
        //         if(this.editing) 
        //             this.editing = !this.editing;
        //     },
        //     err=>{
        //         console.log(err);
        //     });
        
    }  
      
    ngOnChanges() {
        EmitterService.get(this.statusId)
            .subscribe((comment : Comments) => {
                
                this.editing = true;
        });
    }
}