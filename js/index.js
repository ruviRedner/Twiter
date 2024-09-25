"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_controller_1 = __importDefault(require("./src/controllers/auth.controller"));
const post_controller_1 = __importDefault(require("./src/controllers/post.controller"));
const user_controller_1 = __importDefault(require("./src/controllers/user.controller"));
require("dotenv/config");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/auth", auth_controller_1.default);
app.use("/post", post_controller_1.default);
app.use("/user", user_controller_1.default);
app.listen(process.env.PORT, () => {
    console.log(`Server is up and ruuning on port ${process.env.PORT}`);
});
