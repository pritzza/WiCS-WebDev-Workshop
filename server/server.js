// dependancies
const express = require("express");
const path = require("path");

// create instance of express application object
const app = express();

app.get("/api", (request, response) =>
    {
        const filePath = path.basename(__filename);
        const date = new Date();
        const responseData = [filePath, date];

        response.json(responseData)
    }
);

const PORT = 5000;

app.listen(PORT, () =>
    {
        console.log("Server started on port: " + PORT)
    }
);