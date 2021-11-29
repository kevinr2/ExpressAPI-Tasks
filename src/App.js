import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import swaggerJS from 'swagger-jsdoc'
import swaggerUI from 'swagger-ui-express'
import TasksRoutes from './routes/tasks'
import { option } from './swaggeroption'

const specs = swaggerJS(option)

const app = express()

app.use(morgan("dev"))
app.use(cors())
app.use(express.json())
app.use(TasksRoutes)

app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs))
export default app