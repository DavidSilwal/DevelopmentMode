import { Comments } from './comments';

export class UserStatus {
    id: number;
    status: string;
    updateTime: Date;
    type: string;
    isHidden: boolean
    LikesUserIDs: Array<string>;
    Comments : Array<Comments>


    constructor(date: Date) {
        this.updateTime = date;
    }
}