"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class User {
    constructor(username, password, email, birthday, avatarUrl) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.birthday = birthday;
        this.avatarUrl = avatarUrl;
        this.folowers = [];
        this.folowing = [];
        this.isLockedAcccount = false;
        this.id = (0, uuid_1.v4)();
    }
}
exports.default = User;
