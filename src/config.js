import { config as dotenv } from 'dotenv'
dotenv()

export const config = {
    host: process.env.HOST,
    user: process.env.USER,
    password: "",
    database: process.env.DB
}