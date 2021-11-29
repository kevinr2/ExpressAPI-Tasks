import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import TasksRoutes from './routes/tasks'


const app = express()

app.use(morgan("dev"))
app.use(cors())
app.use(express.json())
app.use(TasksRoutes)
export default app