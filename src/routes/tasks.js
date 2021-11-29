import { Router } from 'express'
import { deleteTasks, getTasks, getTasksCount, getTasksId, postTasks, putTasks } from '../controllers/tasks';

const router = Router();

router.get('/tasks', getTasks)

router.get('/tasks/count', getTasksCount)

router.get('/tasks/:id', getTasksId)

router.post('/tasks', postTasks)

router.delete('/tasks/:id', deleteTasks)

router.put('/tasks/:id', putTasks)

export default router