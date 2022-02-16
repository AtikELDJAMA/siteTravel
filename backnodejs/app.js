const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Vol = require('./models/vol');
var cors = require('cors');

var cron = require('node-cron');
var request = require('request');

//pour resoudre  le probleme de cors
app.use(cors());
require('dotenv/config')

app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin',"*");
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);

  next();
});

//importation des routes
const volsRoutes = require('./routes/vols');
app.use('/vols',volsRoutes);


//Routes
app.get('/',(req,res)=>
{
  
  res.send('We are on home');
})


// ******************************************************************************************
// ************************************** Partie Robot **************************************
// ******************************************************************************************
/*
cron.schedule('0 0 * * 0', () => {
  
  //la semaine caurante
  const today = new Date();
  const firstDayOfYear = new Date(today.getFullYear(), 0, 1);
  const pastDaysOfYear = (today - firstDayOfYear) / 86400000;
  const curretWeek1 = Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
  //Recuperer  les vols depuis l'API externe
  const url = "https://aviation-edge.com/v2/public/flightsFuture?key=833a91-718170&type=departure&iataCode=JFK&arr_iataCode=CDG&week="+curretWeek1.toString();
  request.get(url,(error,response,body)=>
  {
    let json=JSON.parse(body);
    for (let pas = 0; pas < json.length; pas++) {
      let v =json[pas];
      console.log(url);
      const vol = new Vol({
        weekday : v.weekday,
        departure_iataCode: v.departure.iataCode,
        departure_icaoCode: v.departure.icaoCode,
        departure_terminal: v.departure.terminal,
        departure_gate: v.departure.gate,
        departure_scheduledTime: v.departure.scheduledTime	,
        arrival_iataCode:  v.arrival.iataCode,
        arrival_icaoCode:  v.arrival.icaoCode,
        arrival_terminal:  v.arrival.terminal,
        arrival_gate:  v.arrival.gate,
        arrival_scheduledTime:  v.arrival.scheduledTime,
        aircraft_modelCode :  v.aircraft.modelCode,
        aircraft_modelText: v.aircraft.modelText,
        airline_name:  v.airline.name,
        airline_iataCode:  v.airline.iataCode,
        airline_icaoCode:  v.airline.icaoCode,
        flight_number:  v.flight.number,
        flight_iataNumber :  v.flight.iataNumber,
        flight_icaoNumber: v.flight.icaoNumber
    });

    //Enregistrer chaque vol dans la base de données
    vol.save()
    .then(data=>{
        console.log("Data added");
    })
    .catch(err=>{
        console.log(err);
    
    }); 
    }
    console.log(json.length);
    console.log(url);

  });
  })
*/
//Teste de connexion à la base de données
mongoose.connect(
                process.env.DB_CONNECTION
                , {useNewUrlParser:true}
                , ()=> console.log("connected"));

//How to we start listening to the server
app.listen(3000)
