import express from "express";
import {demoRequestData,demoCreateData,demoRequestDetails,
demoDeleteData,
demoUpdateData} from '../controller/Demo.controller.js'
const router = express.Router();

router.get('/gettingValue',demoRequestData)

router.get('/gettingValueById/:id',demoRequestDetails)

router.post('/sendingValue/:id',demoCreateData)

router.delete('/deletingValue/:id',demoDeleteData)

router.put('/updating/:id',demoUpdateData)

export default router;