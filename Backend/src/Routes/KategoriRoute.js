import express from "express"
import {getAllKategorisController} from "../Controller/KategoriController.js"

const router = express.Router()
router.get("/kategoris", getAllKategorisController);
router.get("/users/:id", getUsersById);

export default router;