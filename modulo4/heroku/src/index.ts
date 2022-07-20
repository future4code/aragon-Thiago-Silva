import express from "express";
import cors from "cors";
import { ping } from "./endpoints/ping";
import { createPerfumes } from "./endpoints/createPerfumes";
import { searchPerfumes } from "./endpoints/searchPerfumes";
import { updatePrice } from "./endpoints/updatePrice";
import { deletePerfumes } from "./endpoints/deletePerfumes";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});

app.get("/ping", ping)

app.get("/perfumes", searchPerfumes)

app.post("/perfumes", createPerfumes)

app.put("/perfumes/:id", updatePrice)

app.delete("/perfumes/:id", deletePerfumes)
