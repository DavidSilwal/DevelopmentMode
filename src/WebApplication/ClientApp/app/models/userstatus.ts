import { Comments } from './comments';

export class UserStatus {
    _id: string;
    Status: string;
    updateTime: Date;
    type: StatusType;
    isHidden: boolean
    likesCounts: number;
    commentsCounts: number;
    likesUserIDs: Array<string>;
    Comments: Array<Comments>;
    updatedAgo: string;
}

export class StatusType {
    constructor(id: number, type: string) { }
}