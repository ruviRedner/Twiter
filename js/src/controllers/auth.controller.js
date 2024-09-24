import express from 'express';
const router = express.Router();
export default router;
router.post("/login", async (req, res) => {
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
