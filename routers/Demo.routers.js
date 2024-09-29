import express from "express";
import {demoRequestData,demoCreateData,
demoDeleteData,
demoUpdateData} from '../controller/Demo.controller.js'
const router = express.Router();

router.get('/gettingValue/:id',demoRequestData)

router.post('/sendingValue/:id',demoCreateData)

router.delete('/deletingValue',demoDeleteData)

router.put('/updating/:id',demoUpdateData)

export default router;