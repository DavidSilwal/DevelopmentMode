import { Component, OnInit } from '@angular/core';
import { UserStatusService } from '../../services/userstatus.service'

@Component({
    selector: 'app-comment',
    template: require('./comment.component.html'),
})
export class CommentComponent implements OnInit {

    constructor(private userStatusService: UserStatusService) { }

    private comment: Comment;

    submitComment(comment) {
        this.userStatusService.addComment(comment);
    }

    ngOnInit() { }
}