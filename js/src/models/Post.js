"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class Post {
    constructor(authorId, content, hashtags, ref) {
        this.authorId = authorId;
        this.content = content;
        this.hashtags = hashtags;
        this.ref = ref;
        this.likedBy = [];
        this.id = (0, uuid_1.v4)();
        this.createdAt = new Date();
    }
}
exports.default = Post;
