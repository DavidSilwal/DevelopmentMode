﻿import { Comments } from './comments';

export class UserStatus {
    _id: string;
    status: string;
    updateTime: Date;
    type: string;
    isHidden: boolean
    LikesUserIDs: Array<string>;
    Comments : Array<Comments>
}