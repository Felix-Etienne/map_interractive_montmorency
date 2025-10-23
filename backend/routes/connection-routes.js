import express from "express";
// import connectionController from "../controllers/connection-controller.js";
import { check } from "express-validator";


const router = express.Router();

// router.get("/", roomController.getAllConnections);
router.get("/:id", roomController.getAllConnectionsOfRoomId);
router.get("/code/:code", roomController.getAllConnectionsOfRoomCode);

export default router;