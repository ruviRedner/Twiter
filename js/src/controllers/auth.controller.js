"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authService_1 = __importDefault(require("../services/authService"));
const router = express_1.default.Router();
exports.default = router;
router.post("/login", async (req, res) => {
    try {
        const token = await authService_1.default.login(req.body);
        res.status(200).json({
            err: false,
            message: "here`s your token ",
            data: token
        });
    }
    catch (err) {
        console.log(err);
        const [status, msg] = err.message.split(":");
        res.status(Number(status)).json({
            err: true,
            message: msg || "Sorry no token today",
            data: null
        });
    }
});
router.delete("/logout", async (req, res) => {
    try {
        res.status(200).json({
            err: false,
            message: "surry",
            data: undefined
        });
    }
    catch (err) {
        res.status(400).json({
            err: true,
            message: "surry",
            data: null
        });
    }
});
