import express from "express";
import classController from "../controllers/class-controller.js";
// import { check } from "express-validator";

const router = express.Router();

router.get("/", classController.getAllClasses);

router.get("/:code", classController.getClassByCode);

router.post("/",classController.createClass)

export default router;