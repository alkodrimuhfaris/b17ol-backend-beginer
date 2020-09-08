const express = require("express");
const app = express();
const path = require('path');

app.use(express.static('public'));

//memanggil library
let bodyParser = require('body-parser'); 
const { send } = require("process");
//menggunakan library pada express
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.get('/home', (req, res)=>{
    res.send('Welcome to my first backend!')
})

app.get("/main", (req,res)=>{
    res.render(path.join(__dirname, 'data.ejs'));
})

app.post('/data', (req, res)=>{
    let name = req.body.data;
    console.log("post :", name);
    res.sendStatus(200);
})



app.listen(3000,()=>{
    console.log('App listening on port 3000')
})