import Weathercard from "./Weathercard"
import './Results.css'

//ADD THE PROP FROM GRANPARENT TO PARENT, THEN CHILD

function Results({theWeatherData, thePropThatHoldsTheFunction}){
    // console.log(theWeatherData);
    if(theWeatherData.length===0){
        return(<h3>Search for your city</h3>)
    }
    else {
        const theIndividualCities = theWeatherData.map(function(cityTemperatureInfo){
            //ADD DOWN HERE TOO
            return(<Weathercard key={cityTemperatureInfo.sys.id} theData={cityTemperatureInfo} thePropOfTheChildThatHoldsTheFunction={thePropThatHoldsTheFunction}/>)
        })
        return(
            <div className="theCardArea">
                {theIndividualCities}
            </div>
        ) 
    }
}

export default Results;