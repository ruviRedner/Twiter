"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const postService_1 = __importDefault(require("../services/postService"));
const verifiUser_1 = __importDefault(require("../middlewares/verifiUser"));
const router = express_1.default.Router();
router.get("/", async (req, res) => {
    try {
        const result = await postService_1.default.getAllPosts();
        if (result) {
            res.status(200).json({
                err: false,
                message: "surry",
                data: result
            });
        }
        else {
            throw new Error("Cant get all posts");
        }
    }
    catch (err) {
        res.status(400).json({
            err: true,
            message: "surry",
            data: null
        });
    }
});
router.get("/search", async (req, res) => {
    try {
        const result = await postService_1.default.getPostBySearch(req.query.word);
        if (result) {
            res.status(200).json({
                err: false,
                message: "please have a post",
                data: result
            });
        }
        else {
            throw new Error("Cant get post by search");
        }
    }
    catch (err) {
        res.status(400).json({
            err: true,
            message: "surry",
            data: null
        });
    }
});
router.post("/", verifiUser_1.default, async (req, res) => {
    try {
        const result = await postService_1.default.createNewPost(req.body);
        if (result) {
            res.status(200).json({
                err: false,
                message: "surry",
                data: req.body
            });
        }
        else {
            throw new Error("Cant save the user to the file");
        }
    }
    catch (err) {
        res.status(400).json({
            err: true,
            message: "surry",
            data: null
        });
    }
});
router.get("/:id", async (req, res) => {
    try {
        const result = await postService_1.default.getPostById(req.params.id);
        if (result) {
            res.status(200).json({
                err: false,
                message: "please have a post",
                data: result
            });
        }
        else {
            throw new Error("Cant get post by id");
        }
    }
    catch (err) {
        res.status(400).json({
            err: true,
            message: "surry",
            data: null
        });
    }
});
router.patch("/like/:idp/:idu", verifiUser_1.default, async (req, res) => {
    try {
        const result = await postService_1.default.likePost(req.params.idp, req.params.idu);
        if (result) {
            res.status(200).json({
                err: false,
                message: "surry",
                data: result
            });
        }
        else {
            throw new Error("Cant  save like the post");
        }
    }
    catch (err) {
        res.status(400).json({
            err: true,
            message: "surry",
            data: null
        });
    }
});
exports.default = router;
