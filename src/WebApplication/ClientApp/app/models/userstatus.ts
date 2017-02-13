import { Comments } from './comments';

export class UserStatus {
    _id: string;
    status: string;
    updateTime: Date;
    type: string;
    isHidden: boolean
    likesCounts: number;
    commentsCounts: number;
    likesUserIDs: Array<string>;
    Comments: Array<Comments>;
    updatedAgo: string;
}