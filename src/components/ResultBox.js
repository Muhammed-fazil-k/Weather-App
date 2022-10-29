import ErrorBox from './ErrorBox';
import './ResultBox.css'
import WeatherDetails from './WeatherDetails';

const ResultBox = (props) =>{
    return (
        <div>
            {props.weatherData && <WeatherDetails data = {props.weatherData}/>}
            {props.error && <ErrorBox data ={props.error}/>}
        </div>
    );
}

export default ResultBox;