import connectDB from "../util/database.js";

const db = await connectDB();

// console.log(db);
const getAllStudents = async (req, res, next) => {
    try {
        const result = await db.from("etudiants").select();
        if (result.err) {
            throw err;
        }
        res.status(200).json(result.data);
    } catch(err) {
        next(err);
    }
    
}

const getStudentById = async (req, res, next) => {
    try {
        const result = await db.from("etudiants").select()
            .eq("id", req.params.id);
        if (result.err) {
            throw err;
        }
        res.status(200).json(result.data);
    } catch(err) {
        next(err);
    }
}

const getStudentByUsername = async (req, res, next) => {
    try {
        const result = await db.from("etudiants").select()
            .eq("username", req.params.name);
        if (result.err) {
            throw err;
        }
        res.status(200).json(result.data);
    } catch(err) {
        next(err);
    }
}


const createStudent = async (req, res, next) => {
    try {
        const result = await db.from("etudiants").insert(req.body);
        if (result.err) {
            throw err;
        }
        res.status(201).json(result);
    } catch(err) {
        next(err);
    }
}

const updateStudent = async (req, res, next) => {
    try {
        const {data: updatedData, err: updatedErr} = await db.from("etudiants").update({
            username: req.body.username ? req.body.username : data[0].username,
            email: req.body.email ? req.body.email : data[0].email,
            password: req.body.password ? req.body.password : data[0].password
        }).eq("id",req.params.id);
        if (err) {
            throw err;
        }
        const { data, err } = await supabase.from("posts").select().eq("id",req.params.id);
        res.status(200).json(data);
    } catch(err) {
        next(err);
    }
}

export default {
    getAllStudents,
    getStudentById,
    getStudentByUsername,
    createStudent,
    updateStudent
}