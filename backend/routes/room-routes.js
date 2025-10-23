import express from "express";
import roomController from "../controllers/room-controller.js";
import { check } from "express-validator";


const router = express.Router();

router.get("/", roomController.getAllRooms);
router.get("/code/:code", roomController.getRoomByCode);
router.get("/id/:id", roomController.getRoomById);

router.get("/classe/", roomController.getAllRoomsClasses);
router.get("/classe/etage/:floor", roomController.getAllRoomsClassesFromFloor);

router.get("/etage/:etage", roomController.getAllRoomsFromFloor);

router.get("/corridors", roomController.getAllRoomsHallways);
router.get("/escaliers", roomController.getAllRoomsStaircases);



export default router;