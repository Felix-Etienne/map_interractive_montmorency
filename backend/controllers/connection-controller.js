import connectDB from "../util/database.js";

const db = await connectDB();

const getAllConnections = async (req, res, next) => {
    const result = await db.from("connections_salles").select();
    res.status(200).json(result.data);
}

const getAllConnectionsOfRoomId = async (req, res, next) => {
    const result = await db.from("connections_salles").eq("idSalle1",req.params.id).select();
    res.status(200).json(result.data);
}

const getAllConnectionsOfRoomCode = async (req, res, next) => {
    const findId = await db.from("salles").eq("code",req.params.code);
    const student = findId.data[0];

    const result = await db.from("connections_salles").eq("idSalle1",student.id).select();

    for (let i = 0; i < result.data.length; i++) {
        let student = result.data[i];
            
        
    }

    res.status(200).json(student);
}
