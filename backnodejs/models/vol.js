const mongoose = require('mongoose');
const VolSchema =  mongoose.Schema({
    date :{
        type:Date,
        required:false
    },
    villeArrive :{
        type:String,
        required:false
    },
    villeDepart :{
        type:String,
        required:false
    },
    weekday :{
        type:String,
        required:false
    },
    departure_iataCode:{
        type:String,
        required:false
    },
    departure_icaoCode:{
        type:String,
        required:false
    },
    departure_terminal:{
        type:String,
        required:false
    },
    departure_gate:{
        type:String,
        required:false
    },
    departure_scheduledTime:{
        type:String,
        required:false
    },	
    arrival_iataCode:{
        type:String,
        required:false
    },
    arrival_icaoCode:{
        type:String,
        required:false
    },
    arrival_terminal:{
        type:String,
        required:false
    },
    arrival_gate :{
        type:String,
        required:false
    },
    arrival_scheduledTime :{
        type:String,
        required:false
    },
    aircraft_modelCode :{
        type:String,
        required:false
    },
    aircraft_modelText:{
        type:String,
        required:false
    },
    airline_name :{
        type:String,
        required:false
    },
    airline_iataCode:{
        type:String,
        required:false
    },
    airline_icaoCode :{
        type:String,
        required:false
    },
    flight_number:{
        type:String,
        required:false
    },
    flight_iataNumber :{
        type:String,
        required:false
    },
    flight_icaoNumber:{
        type:String,
        required:false
    }
    

});
module .exports = mongoose.model('Vol',VolSchema);