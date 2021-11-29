import { conection } from "../database"

export const getTasks = async (req, res) => {
    const conex = await conection()
    const [rows] = await conex.query("SELECT * FROM task")
    res.send("hello word")
}
export const getTasksId = async (req, res) => {
    const conex = await conection()
    const [rows] = await conex.query("SELECT * FROM task WHERE id= ?", [
        req.params.id
    ])
    res.send('hello word id')
}
export const getTasksCount = async (req, res) => {
    const conex = await conection()
    const [rows] = await conex.query("SELECT COUNT(*) FROM task")
    res.json(rows[0]["COUNT(*)"])
}
export const postTasks = async (req, res) => {
    const conex = await conection()
    const [results] = await conex.query("INSERT INTO task(title,descripcion) VALUES(?,?)", [
        req.body.title,
        req.body.descripcion
    ])
    res.send({
        id: results.insertId,
        ...req.body
    })
}
export const deleteTasks = async (req, res) => {
    const conex = await conection()
    await conex.query("DELETE FROM task WHERE id= ?", [
        req.params.id
    ])
    res.sendStatus(204)
}
export const putTasks = async (req, res) => {
    const conex = await conection()
    const result = await conex.query("UPDATE task SET ? WHERE id= ?", [
        req.body,
        req.params.id
    ])
    res.sendStatus(204)
}
