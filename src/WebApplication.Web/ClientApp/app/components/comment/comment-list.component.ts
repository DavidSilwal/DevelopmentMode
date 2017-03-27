import { Component, OnInit, Input} from "@angular/core";
import { Router } from '@angular/router';
import { UserStatusService } from '../../services/userstatus.service';
import { Comments } from '../../models/comments';

@Component({
    selector: 'app-comment-list',
    template: require('./comment-list.component.html')
        
    
})

export class CommentListComponent implements OnInit
{
    constructor(
        private statusService: UserStatusService        

    ) { }

    @Input() usercomments: Comments[];
    @Input() statusId: string;

  

    loadComments() {

        

        // Get all status
        //this.statusService.getComments(this.statusId)
        //    .subscribe(
        //    usercomments => this.usercomments = usercomments, //Bind to view
        //    err => {
        //        console.log(err);
        //    });

    }

    ngOnInit(): void {


       
        // Load comments
        this.loadComments();

    }
    
}