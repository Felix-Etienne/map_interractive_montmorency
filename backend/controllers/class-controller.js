import connectDB from "../util/database.js";

const db = await connectDB();
// console.log(db);

const getAllClasses = async (req, res, next) => {
    const result = await db.from("classes").select();
    res.status(200).json(result.data);
}

const getClassByCode = async (req, res, next) => {
    const result = await db.from("classes").select().eq("code",req.params.code);
    res.status(200).json(result.data);
}

const createClass = async (req,res, next) => {
    try {
        const result = await db.from("classes").insert(req.body);
        if (result.err) {
            next(err);
        } else {
            res.status(201).json(result.data);
        }
    } catch(err) {
        next(err);
    }
}

export default {
    getAllClasses,
    getClassByCode,
    createClass
}