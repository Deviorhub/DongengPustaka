import express from "express"
import {getAllCeritasController, getCeritaById} from "../Controller/CeritaController.js"

const router = express.Router()
router.get("/ceritas", getAllCeritasController);
router.get("/ceritas/:id", getCeritaById);

export default router;