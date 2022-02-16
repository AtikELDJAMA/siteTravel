const express = require('express');
const router = express.Router();
const Vol = require('../models/vol')

router.post('/', async(req,res)=>{
        try{
            const vols = await Vol.find({
                'date': Date.parse(req.body.date),
                'villeArrive': req.body.villeArrive,
                'villeDepart': req.body.villeDepart
               });
            res.json(vols);
        }
        catch(err){
            res.json({message: err});
        }
});

router.post('/add',(req,res)=>{
  try{
    const vol = new Vol({
        date: Date.parse(req.body.date),
        villeArrive:req.body.villeArrive,
        villeDepart:req.body.villeDepart,
        weekday : req.body.weekday,
        departure_iataCode: req.body.departure_iataCode,
        departure_icaoCode: req.body.departure_icaoCode,
        departure_terminal: req.body.departure_terminal,
        departure_gate: req.body.departure_gate,
        departure_scheduledTime: req.body.departure_scheduledTime	,
        arrival_iataCode:  req.body.arrival_iataCode,
        arrival_icaoCode:  req.body.arrival_icaoCode,
        arrival_terminal:  req.body.arrival_terminal,
        arrival_gate:  req.body.arrival_gate,
        arrival_scheduledTime:  req.body.arrival_scheduledTime,
        aircraft_modelCode :  req.body.aircraft_modelCode,
        aircraft_modelText: req.body.aircraft_modelText,
        airline_name:  req.body.airline_name,
        airline_iataCode:  req.body.airline_iataCode,
        airline_icaoCode:  req.body.airline_icaoCode,
        flight_number:  req.body.flight_number,
        flight_iataNumber :  req.body.flight_iataNumber,
        flight_icaoNumber: req.body.flight_icaoNumber
    });
    console.log("ok");
    vol.save()
    .then(data=>{
        res.json(data);
    })
    .catch(err=>{
        console.log(err);
        res.json({message: err});
    });
} catch (error) {
    console.error(error);
    // expected output: ReferenceError: nonExistentFunction is not defined
    // Note - error messages will vary depending on browser
  }
  
});

module.exports = router;