import connectDB from "../util/database.js";
import jwt from "jsonwebtoken";

const db = await connectDB();

// console.log(db);
const getAllStudents = async (req, res, next) => {
  try {
    const result = await db.from("etudiants").select();
    if (result.err) {
      throw err;
    }
    res.status(200).json(result.data);
  } catch (err) {
    next(err);
  }
};

const getStudentById = async (req, res, next) => {
  try {
    const result = await db.from("etudiants").select().eq("id", req.params.id);
    if (result.err) {
      throw err;
    }
    res.status(200).json(result.data);
  } catch (err) {
    next(err);
  }
};

const getStudentByUsername = async (req, res, next) => {
  try {
    const result = await db
      .from("etudiants")
      .select()
      .eq("username", req.params.name);
    if (result.err != null) {
      throw err;
    }
    res.status(200).json(result.data);
  } catch (err) {
    next(err);
  }
};

const createStudent = async (req, res, next) => {
  try {
    const result = await db.from("etudiants").insert(req.body);

    res.status(result.status).json(result);
  } catch (err) {
    next(err);
  }
};

const updateStudent = async (req, res, next) => {
  try {
    const { data: updatedData, err: updatedErr } = await db
      .from("etudiants")
      .update({
        username: req.body.username ? req.body.username : data[0].username,
        email: req.body.email ? req.body.email : data[0].email,
        password: req.body.password ? req.body.password : data[0].password,
      })
      .eq("id", req.params.id);
    if (err) {
      throw err;
    }
    const { data, err } = await db
      .from("etudiants")
      .select()
      .eq("id", req.params.id);
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

const loginStudent = async (req, res, next) => {
  try {
    const result = await db
      .from("etudiants")
      .select()
      .eq("email", req.body.email)
      .eq("password", req.body.password);
    // if (result.err) {
    //   throw err;
    // }
    if (result.error != null) {
      res.status(result.status).json(result.error);
      return next(new Error("Erreur de connexion"));
    }
    if (result.data.length <= 0) {
      return next(new Error("Aucun utilisateur avec ces infos trouvé", 404));
    }
    let token;

    token = jwt.sign(
      { username: result.data[0].username, email: result.data[0].email },
      "cleSuperSecrete",
      { expiresIn: "1h" }
    );

    res.status(200).json({
      username: result.data[0].username,
      email: result.data[0].email,
      token: token,
    });
  } catch (err) {
    next(err);
  }
};

const registerStudent = async (req, res, next) => {
  try {
    const result = await db.from("etudiants").insert(req.body);
    console.log(result);
    if (result.error != null) {
      res.status(result.status).json(result.error);
      return next(new Error("Erreur de inscription"));
    }
    const student = await db
      .from("etudiants")
      .select()
      .eq("email", req.body.email);

    console.log(student);

    let token;

    token = jwt.sign(
      { username: student.data[0].username, email: student.data[0].email },
      "cleSuperSecrete",
      { expiresIn: "1h" }
    );

    res.status(200).json({
      username: student.data[0].username,
      email: student.data[0].email,
      token: token,
    });
  } catch (err) {
    next(err);
  }
};

export default {
  getAllStudents,
  getStudentById,
  getStudentByUsername,
  createStudent,
  updateStudent,
  loginStudent,
  registerStudent,
};
