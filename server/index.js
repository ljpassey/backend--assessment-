const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const { getCompliment, getFortune, getDogs, createDog, updateDog, deleteDog } = require('./controller.js')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/dogs", getDogs)
app.post("/api/dogs", createDog)
app.put("/api/dogs/:id", updateDog)
app.delete("/api/dogs/:id", deleteDog)

app.listen(4004, () => console.log("Server running on 4004"));
