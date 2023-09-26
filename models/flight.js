const { Schema, model } = require('mongoose');

const destinationSchema = new Schema (
    {
        airport: {
            type: String,
            enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA'],
        },
        arrival: {
            type: Date,
        },
    });

//Airport and destination properties
const flightSchema = new Schema(   
    {
        airline: {
            type: String,
            enum: ['American', 'Southwest', 'United'],
            required: true,
        },
        flightNo: {
            type: Number,
            min: 10,
            max: 9999,
            required: true,
        },
        departs: {
            type: Date,
            default: function () {
                    const oneYearFromNow = new Date();
                    oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
                    return new Date(oneYearFromNow)
            }
        },
    
        airport: {
            type: String,
            enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA'],
        },
        destinations: [destinationSchema],
        },
    
        timestamps: true,
    }
);
const Flight = model('Flight', flightSchema);
module.exports = Flight;