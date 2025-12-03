// import pg from "pg";
import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";

dotenv.config();

let isConnected = false;
let db;

const connectDB = async() => {
  if (!isConnected) {
    db = await createClient(process.env.DB_URL,process.env.DB_KEY);
    isConnected = true;
  }
  return db;
}


// // const db = new pg.Pool({
// //   user: process.env.DB_USER,
// //   host: process.env.DB_HOST,
// //   database: process.env.DB_NAME,
// //   password: process.env.DB_PASSWORD,
// //   port: process.env.DB_PORT
// // });
// // dotenv.config();

// // console.log(process.env.DB_USER);
// // console.log(process.env.DB_HOST);
// // console.log(process.env.DB_PASSWORD);



// // db.connect( () => {
// //   console.log("Connection sql etablie");
// // });
// dotenv.config();
// let isConnected = false;
// // console.log(process.env);
// const db = new pg.Pool({
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASSWORD,
//   port: process.env.DB_PORT
// });


// const connectDB = async () => {
//   if (isConnected) return db;
//   try {
//     await db.connect( () => {
//       console.log("Connection sql etablie");
//     });
//     isConnected = true;
//   } catch (err) {
//     console.error(err.message);
//     process.exit(1);
//   }
//   return db;
// }

export default connectDB;