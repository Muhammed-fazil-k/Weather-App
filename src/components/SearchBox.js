import { useState } from "react";
import "./SearchBox.css";
import axios from "axios";
const SearchBox = (props) => {
  const [cityName, setCityName] = useState("");

  const inputHandler = (event) => {
    let name = event.target.value;

    setCityName(name);
  };

  const formHandler = (event) => {
    event.preventDefault();
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=f446b7cbc53f44ceb9d95658222810&q=${cityName}&aqi=no`
      )
      .then((data) => {
        props.onSearchCity([data.data, ""]);
      })
      .catch((error) => {
        props.onSearchCity(["", error.message]);
      });
  };
  return (
    <div className="search-box">
      <form onSubmit={formHandler}>
        <label className="form-item">Enter city name</label>
        <input className="form-item" type="text" onChange={inputHandler} />
        <button className="form-item" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
