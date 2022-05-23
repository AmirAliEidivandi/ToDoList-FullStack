const connection = require("./db");
const tasks = require("./routes/tasks");

const express = require("express");
const app = express();
const cors = require("cors");

connection();
app.use(express.json());
app.use(cors());

app.use("/api/tasks", tasks);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}`));
