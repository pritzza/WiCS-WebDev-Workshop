// dependencies
const express = require("express");

// create instance of express application object
const app = express();

app.get("/api", (request, response) =>
    {
        const date = new Date();
        const responseData = date;

        response.json(responseData)
    }
);

const PORT = 5000;

app.listen(PORT, () =>
    {
        console.log("Server started on port: " + PORT)
    }
);