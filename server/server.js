// dependencies
const express = require("express");
const cors = require("cors");

// create instance of express application object
const app = express();

// allows access from other ports
app.use(cors());

const nonsenseRouter = require("./routes/nonsense")
app.use("/nonsense", nonsenseRouter);

const PORT = 5000;

app.listen(PORT, () =>
    {
        console.log("Server started on port: " + PORT)
    }
);