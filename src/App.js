import Searchbar from "./Components/Searchbar";
import Results from "./Components/Results";
import GetWeather from "./API/Api";
import { useState } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        light: '#ff8a50',
        main: '#ff5722',
        dark: '#c41c00',
        contrastText: '#000000',
      },
      secondary: {
        light: '#9061e2',
        main: '#5s34af',
        dark: '#27057f',
        contrastText: '#000',
      },
    },
  });

function App() {
     // This line defines the state for the array of weather data. Initial value and setter function.
    const [weatherData, setWeatherData] = useState([])
    // This function is passed down as a prop to the searchbar area. This allows me to get the search text back from the child.
    async function whenWeSearched(searchText){
      // This line reaches out to the API file and uses the GetWeather function to get weather data from the API.
       const results = await GetWeather(searchText);
      // Sets the state for the Weather data that is returned and creates a new array where this is added on to the end of the array.
       setWeatherData([...weatherData, results]);
    }
   //This function is passed down to the children through a prop so it can get theri id, and remove them from the current state array when called.
    function RemoveTheChild(id){
      // console.log("In a moment, we will remove" + id);
      // Filtering the given array by keeping everything that meets the condition in the return statement. Creates a new array and sets it to the variable we initialized.
      const theNewWeatherArray = weatherData.filter(function(theCity){
      //Filter comes back true: KEEP FROM THE LIST
      //Filter comes back false: REMOVE FROM THE LIST !==
        return(theCity.sys.id !== id)
      }) 
      // !!!!!!!!!! REMEMBER TO SET THE STATE AGAIN OR YOU AND YOUR APP WILL BE SAD
      setWeatherData(theNewWeatherArray);
    }
    return(
        <div>
            <ThemeProvider theme={theme}>
                <Searchbar handleSearch={whenWeSearched}/>
                <Results theWeatherData={weatherData} thePropThatHoldsTheFunction={RemoveTheChild}/>
            </ThemeProvider>
        </div>
    )
}
export default App;