import express from 'express';
const router = express.Router();
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
export default router;
