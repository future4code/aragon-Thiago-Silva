import express from "express";
import cors from "cors";
import { ping } from "./endpoints/ping";
import { searchUsers } from "./endpoints/users";
import { searchTasks } from "./endpoints/tasks";
import { responsibles } from "./endpoints/responsibles";
import { addResponsibles } from "./endpoints/addResponsibles";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});

// Endpoint com o callback vindo por import da pasta endpoints
app.get("/ping", ping)

// Siga o exemplo do ping acima e monte seus endpoints abaixo!
app.get("/users", searchUsers)

app.get("/tasks", searchTasks)

app.get("/tasks/:taskId/users", responsibles)

app.post("/tasks/:taskId/users", addResponsibles)