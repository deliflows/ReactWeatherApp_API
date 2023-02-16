let apiKey = '6085974608379a8ed389c7bfe6b29bf1';


async function GetWeather(city){
    let theURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    let theResponse = await fetch(theURL);
    theResponse = await theResponse.json();
    return theResponse;
}

export default GetWeather;