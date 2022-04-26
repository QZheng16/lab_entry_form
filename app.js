const express = require('express');
const app = express();
const ejs = require('ejs');

app.use(express.urlencoded({extended: false}));
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const title = "Home";
    res.render('home',{title:title});
});



app.listen(3000, ()=> console.log("Server Running on Port 3000"))
