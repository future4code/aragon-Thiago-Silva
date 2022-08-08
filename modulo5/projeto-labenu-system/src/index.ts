import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { PingController } from './endpoints/PingController'
import { ClassroomController } from './endpoints/ClassroomController'
import { StudentController } from './endpoints/StudentController'


dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
})

const pingController = new PingController()
const classroomController = new ClassroomController()
const studentController = new StudentController()

app.get("/ping", pingController.ping)
app.get("/classrooms", classroomController.getAllClassrooms)
app.get("/classrooms/:id", classroomController.getClassroomById)
app.get("/classrooms/active", classroomController.getActiveClassroom)
app.get("/students/", studentController.getAllStudents)
app.get("/students/:classroom_id", studentController.getStudentsByClassroom)
app.post("/classrooms", classroomController.createClassrooms)
app.post("/students", studentController.createStudents)
app.put("/classrooms/:classroomId/module", classroomController.updateModule)
app.put("/students/:studentId/classroomId", studentController.updateClassroom)
app.delete("/classrooms/:classroomId", classroomController.deleteClassroom)
app.delete("/students/:studentId", studentController.deleteStudent)