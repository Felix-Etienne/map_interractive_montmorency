import connectDB from "../util/database.js";

const db = await connectDB();

const getAllRooms = async (req, res, next) => {
    const result = await db.from("salles").select();
    res.status(200).json(result.data);
}

const getAllRoomsClasses = async (req, res, next) => {
    const result = await db.from("salles").select().eq("type",0);
    res.status(200).json(result.data);
}
const getAllRoomsHallways = async (req, res, next) => {
    const result = await db.from("salles").select().eq("type",1);
    res.status(200).json(result.data);
}
const getAllRoomsStaircases = async (req, res, next) => {
    const result = await db.from("salles").select().eq("type",2);
    res.status(200).json(result.data);
}
//3 = toilette

const getRoomById = async (req, res, next) => {
    const result = await db.from("salles").select().eq("id",req.params.id);
    res.status(200).json(result.data);
}

const getRoomByCode = async (req, res, next) => {
    const result = await db.from("salles").select().eq("code",req.params.code);
    res.status(200).json(result.data);
}

const getAllRoomsFromFloor = async (req, res, next) => {
    const result = await db.from("salles").select().eq("etage",req.params.etage);
    res.status(200).json(result.data);
}

const getAllRoomsClassesFromFloor = async (req, res, next) => {
    const result = await db.from("salles").select().eq("type",0).eq("etage",req.params.etage);
    res.status(200).json(result.data);
}

export default {
    getAllRooms,
    getAllRoomsClasses,
    getAllRoomsHallways,
    getAllRoomsStaircases,
    getAllRoomsFromFloor,
    getAllRoomsClassesFromFloor,
    getRoomByCode,
    getRoomById,
}