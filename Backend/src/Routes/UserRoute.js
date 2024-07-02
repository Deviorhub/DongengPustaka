import express from "express";
import { getAllUsersController } from "../Controller/UserController.js";

const router = express.Router();
router.get("/users", getAllUsersController);

export default router;
