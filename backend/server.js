require("dotenv").config();

const express = require("express");
const chatRoute = require("./routes/chat");

const app = express();
app.use(express.json());

app.use("/api/chat", chatRoute);

app.get("/", (req, res) => res.send("StudyPilot backend running"));

const PORT = 3000;
app.listen(PORT, () => console.log(`Server on http://localhost:${PORT}`));