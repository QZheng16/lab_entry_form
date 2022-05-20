//Library Imports
require('dotenv').config();
const express = require('express');
const app = express();
const ejs = require('ejs');
const fetch = require('node-fetch');

//Express setup
app.use(express.urlencoded({extended: false}));
app.use(express.static(__dirname + '/public'));


//ejs setup
app.set('view engine', 'ejs');

//Function to fetch weather information
async function getWeatherDataAsync(city) 
{
  let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_KEY}&units=imperial`);
  let data = await response.json()
  return data;
}



//Routes
app.get('/', (req, res) => {
    const title = "Dashboard";
    getWeatherDataAsync('Atlanta')
        .then(data => {
            res.render('dashboard',{title:title, weather:data});
        });


});


app.route('/lab-entry')
    .get((req,res)=>{
        res.render('lab_entry');
    });


app.route('/chart')
    .get((req,res)=>{
        res.render('chart');
    });




app.listen(3000, ()=> console.log("Server Running on Port 3000"))
