// dependencies
const express = require("express");
const cors = require("cors");

// create instance of express application object
const app = express();

// allows access from other ports
//use cors to allow cross origin resource sharing
app.use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true,
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const nonsenseRouter = require("./routes/nonsense")
app.use("/nonsense", nonsenseRouter);

const PORT = 5000;

app.listen(PORT, () =>
    {
        console.log("Server started on port: " + PORT)
    }
);