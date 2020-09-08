const express = require ('express');
const app = express();

app.get('/home', (req, res)=>{
    res.send('Welcome to my first backend!')
});

// app.post('/data', (req, res)=>{
//     data="ini adalah data";
//     console.log(data);
// });

app.listen(3000,()=>{
    console.log('App listening on port 3000')
});