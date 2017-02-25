//export class Comments
//{
//    id: string;
//    userID: string
//    commentTime: Date;
//    text: string;
"use strict";
//}
var Comments = (function () {
    function Comments(id, userID, commentTime, text) {
        this.id = id;
        this.userID = userID;
        this.commentTime = commentTime;
        this.text = text;
    }
    return Comments;
}());
exports.Comments = Comments;
//# sourceMappingURL=comments.js.map