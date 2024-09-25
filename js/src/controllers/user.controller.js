"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userService_1 = __importDefault(require("../services/userService"));
const router = express_1.default.Router();
router.post("/register", async (req, res) => {
    try {
        const result = await userService_1.default.createNewUser(req.body);
        if (result) {
            res.status(200).json({
                err: false,
                message: "data saved sucsspuly",
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
            message: "sorry",
            data: null
        });
    }
});
router.post("/follow/:idm/:idt", async (req, res) => {
    try {
        const result = await userService_1.default.makeFollow(req.params.idm, req.params.idt);
        if (result) {
            res.status(200).json({
                err: false,
                message: "surry",
                data: result
            });
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
        const result = await userService_1.default.getUserBySearchQuery(req.query.username);
        if (result) {
            res.status(200).json({
                err: false,
                message: "surry",
                data: result
            });
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
//? type = mine || else
router.get("/profile/:id", async (req, res) => {
    try {
        const result = await userService_1.default.getUserProfile(req.params.id);
        if (result) {
            res.status(200).json({
                err: false,
                message: "surry",
                data: result
            });
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
//? type = mine || else
router.get("/followers/:id", async (req, res) => {
    try {
        const result = await userService_1.default.getFolloers(req.params.id);
        if (result) {
            res.status(200).json({
                err: false,
                message: "surry",
                data: result
            });
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
//? type = mine || else
router.get("/following/:id", async (req, res) => {
    try {
        const result = await userService_1.default.getFolloing(req.params.id);
        if (result) {
            res.status(200).json({
                err: false,
                message: "surry",
                data: result
            });
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
