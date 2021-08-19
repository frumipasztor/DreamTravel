const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

//Import routes
const Route = require("./routes/Route");

//Middlewares
app.use(express.json());
app.use('/pdf', express.static(__dirname + '/pdf'));

//Route Middleware

const allowCors = (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', "http://localhost:3000");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
}

const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
};

app.use("/api", Route);

app.get("/", async (req, res) => {
    res.json({message: "pass!"});
})

app.use(allowCors);
app.use(cors(corsOptions));

module.exports = app;
