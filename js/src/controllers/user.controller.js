import express from 'express';
const router = express.Router();
router.post("/register", async (req, res) => {
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
router.post("/follow", async (req, res) => {
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
//? type = mine || else
router.get("/profile", async (req, res) => {
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
//? type = mine || else
router.get("/followers", async (req, res) => {
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
//? type = mine || else
router.get("/following", async (req, res) => {
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
export default router;
