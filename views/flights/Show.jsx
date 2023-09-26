
const React = require("react")

class Show extends React.Component{
    render( ) {
        // Deconstruct way to do it with = this.props.flight
        const flights = this.props.flight

        return (
            <div>
                <h1> Show Flight Page </h1>
                <b>Airline:</b> {`${flights.airline} `}  <br/>
                <b>Flight Number:</b> {`${flights.flightNo} `}<br/>
                <b>Departure:</b> {`${flights.departs} `}<br/>
                <b>From Airport:</b> {`${flights.airport} `}<br/>
                <b>Destination:</b> {flights.destinations.map((flights, i) =>{
                        return(
                            <li key={i}>{`${flights.arrival}`} {`${flights.airport}`}</li>
                        )
                })}<br/>
         
            <form action={`/flights/${flights._id}?_method=PUT`} method="POST">
                Airport: <select name="airport">
                                <option value = "AUS">AUS</option>
                                <option value = "DAL">DAL </option>
                                <option value = "LAX">LAX </option>
                                <option value = "SAN">SAN</option>
                                <option value = "SEA">SEA</option>
                            </select> 
                Arrival: <input type = "datetime-local" name="arrival" /> <br/>
                <input type ="submit" value="Submit Updated Flight" />
            </form>
            </div>
        )
    }
}

module.exports = Show;