"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get("/", async (req, res) => {
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
router.get("/search", async (req, res) => {
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
router.post("/", async (req, res) => {
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
router.get("/:id", async (req, res) => {
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
router.patch("/like/:id", async (req, res) => {
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
exports.default = router;
