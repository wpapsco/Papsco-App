import express = require('express');
const router = express.Router();
import {TestData, Request} from "../../types";

router.post("/data", (req: Request<TestData>, res) => {
    console.log(req.body);
    res.sendStatus(200);
})

export default router;