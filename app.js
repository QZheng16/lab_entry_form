const express = require('express');
const app = express();
const ejs = require('ejs');

app.use(express.urlencoded({extended: false}));
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const title = "Dashboard";


    res.render('dashboard',{title:title});
});



app.listen(3000, ()=> console.log("Server Running on Port 3000"))
