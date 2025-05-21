import {neon} from "@neondatabase/serverless";
import dotenv from "dotenv";

dotenv.config();

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;


// Connect to the PostgreSQL database using environment variables and SSL for security
export const sql = neon(`postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmode=require`);

//this SQL function we export is used as a tagged a tagged template literal, which allows us to write SQL queries safely
