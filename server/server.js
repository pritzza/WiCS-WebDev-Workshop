// dependencies
const express = require("express");
const cors = require("cors");

// create instance of express application object
const app = express();

// allows access from other ports
app.use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true,
    })
);

app.use("/nonsense", nonsenseRouter);

const PORT = 8888;

app.listen(PORT, () =>
    {
        console.log("Server started on port: " + PORT)
    }
);