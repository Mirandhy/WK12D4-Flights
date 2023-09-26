const React = require('react')

const textStyle={color:"red"}

class Index extends React.Component {
    render( ){
        const { flights } = this.props
        return (
            <div>
                <h1> See A List of All Flights</h1>
                <nav>
                    <a href="/flights/new">Create a New Flight Search</a>
                </nav>
                <ul>
                    {
                        flights &&
                        flights.map((flight, i) =>{
                            
                            return (
                              // map through properties
                  
                                style={
                                  new Date().getTime() >
                                  new Date(flight.departs).getTime()?textStyle:null
                                }
                                key={i}
                              >
                                {`${flight.airline} ${flight.flightNo} ${flight.departs}`}
                                <nav>
                                  <a href={`/flights/${flight._id}`}>
                                    Detail of Flight
                                  </a>
                                  <br />
                                </nav>
                              </li>
                            );
                        })
                    }
                </ul>
            </div>
        )
    }
}
module.exports = Index;