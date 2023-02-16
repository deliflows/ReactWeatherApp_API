import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';

function Weathercard({theData, thePropOfTheChildThatHoldsTheFunction}){
    let theImage = "http://openweathermap.org/img/wn/" + theData.weather[0].icon + "@2x.png";

    //ANOTHER FUNCTION HERE TO PASS THE ID UP TP THE PARENT, THEN THE GRANDPARENT
    function RemoveElement(event){
      console.log(`Remove me ${theData.sys.id}`)
      thePropOfTheChildThatHoldsTheFunction(theData.sys.id);
    }
    return(
        // <div>
        //     <h3>City Name: {theData.name}</h3>
        //     <p>{theData.main.temp}</p>
        //     <p>Feels like {theData.main.feels_like}</p>
        //     <img src={theImage}/>
        // </div>
        <Card sx={{ maxWidth: 345, minWidth:245 }}>
        <CardActionArea>
          <CardContent>
            <Typography sx={{fontSize: 14 }} gutterBottom>{theData.name}</Typography>
            <Typography gutterBottom variant="h5" component="div">
                {theData.main.temp} F
            </Typography>
            <Typography variant='subtitle1' gutterBottom>
            Feels like {theData.main.feels_like} F
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {theData.weather[0].main}
            </Typography>
            <CardMedia
            component="img"
            sx={{width:151}}
            image={theImage}
            alt={theData.weather[0].main}
          />
          {/* ONCLICK ELEMENT HERE */}
          <Button variant="contained" color="secondary" onClick={RemoveElement}>Remove City</Button>
          </CardContent>
        </CardActionArea>
      </Card>
    )
}

export default Weathercard;