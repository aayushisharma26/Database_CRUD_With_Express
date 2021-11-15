const express = require('express');
const bodyParser = require('body-parser');// create express app
const Employee = require('./models/employee.model');
const app = express();// Setup server port
const port = process.env.PORT || 5000;// parse requests of content-type - application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: true }))// parse requests of content-type - application/json
//app.use(bodyParser.json())// define a root route
app.get('/', (req, res) => {
  res.send("Hello World");
});// listen for requests
const employeerouter=require('../crudproject/routes/employee.routes')
app.use( '/api/v1/employees',employeerouter )
app.get("/",(req,res)=>{
    console.log("hello")
})
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});