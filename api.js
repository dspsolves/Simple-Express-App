const express = require("express");
const morgan = require("morgan");

const app = express();
const PORT = 9107;

// Middleware

app.use((req, res, next) => {
    console.log(
        "Request Received: ",
        new Date().toLocaleString("en-US", {
            timeZone: "Asia/Calcutta",
        })
    );
    next();
});

app.use(morgan("dev"));
app.use(express.json());

//Routes

app.get("/", (req, res) => {
    res.send(req.query);
});

app.post("/", (req, res) => {
    res.json(req.body);
});

app.get("/:ping", (req, res) => {
    res.send(req.params.ping);
});

//Error Handling

app.use((req, res, next) => {
    const error = new Error("Not Found");
    error.status = 404;
    next(error);
});

//Server Config

var server = app.listen(PORT, () => {
    console.log(`Listening At ${PORT} ...`);
});
