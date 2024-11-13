import express from 'express'
import { getUrlController } from '../controller/urlController.js';

const router = express.Router()
router.get("/", getUrlController)

export default router