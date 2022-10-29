import { useState } from "react";
import "./App.css";
import ResultBox from "./components/ResultBox";
import SearchBox from "./components/SearchBox";
function App() {
  const [weatherData,setWeatherData] = useState('');
  const [errorData,setErrorData] =useState('');
  const responseHandler = (data)=>{
    const [weather,err] =data;
    setWeatherData(weather);
    setErrorData(err);
  }
  return (
    <div className="App">
      <SearchBox  onSearchCity = {responseHandler}/>
      <ResultBox weatherData ={weatherData} error ={errorData}/>
    </div>
  );
}

export default App;
