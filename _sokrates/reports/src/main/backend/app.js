import express from "express";
import dotenv from "dotenv";
import pool from "./util/database.js";
import errorHandler from "./middlewares/error-handler.js";
import  connectDB  from "./util/database.js";

import classRoutes from "./routes/class-routes.js"
import studentRoutes from "./routes/student-routes.js";

import { createClient } from "@supabase/supabase-js";

dotenv.config();

// const db = await createClient(process.env.DB_URL,process.env.DB_KEY);
connectDB();
  // console.log(db);
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());

//Perms
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  next();
});



// const get = async ({req,res}) => {
//   const query = "SELECT * FROM classes";

//   const result = await db.query(query);
//   res.status(200).json(result);
// }
// //Routes
app.use("/api/class", classRoutes);
app.use("/api/students",studentRoutes);

// app.get("/hello", async( req, res, next) => {
//   const query = "SELECT * FROM classes";

//   const result = await db.query(query);
//   res.status(200).json(result.rows);
// })

// //Error handler
// app.use(errorHandler);

//Run le serveur
app.listen(port, () => {
  console.log(`serveur écoute au: http://localhost:${port}`);
});