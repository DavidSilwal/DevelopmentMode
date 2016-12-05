import { Component } from '@angular/core';

@Component({
    selector: 'post',
    template: require('./post.component.html')

})
export class PostComponent {



}
interface StatusData {
    _id: string;
    type: string;
    status: string;
    updateTime: Date;
}