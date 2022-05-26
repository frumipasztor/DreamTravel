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
/*
const allowCors = (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', "https://dreamtravel.netlify.app");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
}


const corsOptions = {
    origin: "https://dreamtravel.netlify.app",
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
};
*/
/*
let HEADERS = {
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Origin',
    'Content-Type': 'application/json', //optional
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Max-Age': '8640'
  }
  
  //This solves the "No ‘Access-Control-Allow-Origin’ header is present on the requested resource."
  
  HEADERS['Access-Control-Allow-Origin'] = '*'
  HEADERS['Vary'] = 'Origin'
  
  const handler = async function (event, context) {
    try {
      if (event.httpMethod === 'OPTIONS') {
        return { statusCode: '204', HEADERS }
      }
      if (event.httpMethod === 'POST') {
          const body = JSON.parse(event.body)
          //Your code goes here
  
         return {
           statusCode: 200,
           body: 'Success',
           HEADERS
         } 
   
      }
      return {
        statusCode: 401,
        HEADERS
      }
    } catch (e) {
      console.error(e)
      return {
        statusCode: 500,
        body: e.toString()
      }
    }
  }


handler();
*/
app.use("/api", Route);

/*
app.use(allowCors);
app.use(cors(corsOptions));
*/

module.exports = app;
