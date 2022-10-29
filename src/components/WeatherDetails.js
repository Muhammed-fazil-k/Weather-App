import "./WeatherDetails.css";
const WeatherDetails = (props) => {
  console.log(props.data);

  return (
    <div className="weather-container">
      <div className="weather-condition">
        <div className="weather-state">{props.data.current.condition.text}</div>
        <div>
          <img src={props.data.current.condition.icon} />
        </div>

        <div className="degree">{props.data.current.feelslike_c}<span>&#176;C</span></div>
        <div className="place">
          <div className="city">{props.data.location.name}</div>
          <div className="country">{props.data.location.country}</div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
