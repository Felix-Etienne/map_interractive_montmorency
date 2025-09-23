import express from "express";
import studentController from "../controllers/student-controller.js";
// import { check } from "express-validator";

const router = express.Router();

router.get("/", studentController.getAllStudents);

router.get("/:id", studentController.getStudentById);
router.get("/name/:name", studentController.getStudentByUsername);

router.post("/",studentController.createStudent);

router.put("/:id", studentController.updateStudent);

export default router;