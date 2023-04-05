// dependencies
const express = require("express");
const cors = require("cors");

// create instance of express application object
const app = express();
const bodyParser = require('body-parser');

// allows access from other ports
app.use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true,
    })
);

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

let smileCount = 0;

app.get("/getSmiles", (request, response) => {
    response.json(smileCount);
});

app.post('/postSmile', (req, res) => {
    let data = req.body.Message;

    if (data === "Clicked!")
        smileCount++;

    res.json(JSON.stringify(smileCount));
})

const PORT = 8888;

app.listen(PORT, () =>
    {
        console.log("Server started on port: " + PORT)
    }
);