import express = require('express');
import { TestData, Response } from '../../types';
const router = express.Router();

router.get("/data", (req, res: Response<TestData>) => {
    res.send({ some: "data" });
})

export default router;