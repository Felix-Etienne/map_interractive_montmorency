import express from "express";
import studentController from "../controllers/student-controller.js";
import { check } from "express-validator";

const router = express.Router();

router.get("/", studentController.getAllStudents);

router.get("/:id", studentController.getStudentById);

router.get("/name/:name", studentController.getStudentByUsername);

router.post("/", [
    check("email").not().isEmpty(),
    check("username").not().isEmpty(),
    check("password").not().isEmpty()
], studentController.createStudent);

router.post("/login", [
    check("email").not().isEmpty(),
    check("password").not().isEmpty()
], studentController.loginStudent);

router.post("/register",[
    check("email").not().isEmpty(),
    check("username").not().isEmpty(),
    check("password").not().isEmpty()
],  studentController.registerStudent);

router.put("/:id", studentController.updateStudent);

export default router;
