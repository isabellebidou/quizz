const express = require('express');
const bodyParser = require('body-parser');
const routesHandler = require('./routes/handler');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//app.use('/', routesHandler)
app.use(express.static(path.join(__dirname + "/public")), routesHandler)
const PORT = process.env.PORT || 4500;
app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}.`);
});
//https://www.youtube.com/watch?v=Q0wVXS-V-Uw deployment to heroku