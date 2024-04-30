import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
function App() {
  const [location, setlocation] = useState("london")
  const [temperature, settemperature] = useState()
  const [error, setError] = useState(0)
  const [data, setData] = useState()
  const [forecast , setForecast] = useState()
  const url = `http://api.weatherapi.com/v1/current.json?key=7d9efb1a9b4d4a7cb51103832242404&q=${location}&aqi=no`
  const forecasr_url = `http://api.weatherapi.com/v1/forecast.json?key=7d9efb1a9b4d4a7cb51103832242404&q=${location}&days=3&aqi=no&alerts=no`

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data); // Update the state with fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const fetchForecast = async () => {
      try {
        const response = await axios.get(forecasr_url);
        setForecast(response.data); // Update the state with fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchForecast();
    fetchData();
  }, []);
  if (!data || !forecast) {
    return <div>Loading...</div>;
  }

  const handleInputChange = (event) => {
    setlocation(event.target.value);
  };



  const handleSearch = () => {
    axios.get(url)
      .then(res => {
        setData(res.data);
        setError(0); // Reset error state
        return axios.get(forecasr_url); // Return the forecast request promise
      })
      .then(res1 => {
        setForecast(res1.data);
      })
      .catch(error => {
        console.error("Error:", error);
        setError(1); // Set error status if available
      });
  };




  return (

    <div className="app">

      <div className="mycontainer">
        <div className="row weather-info">

          <div className="col-lg-8">
            {error == 1 && (<div className="text-center p-4"> <h1>Unknown place</h1> </div>)}

            {error == 0 && (<div className="text-center p-4">
              <h1>Weather Prediction</h1>

              <div className="current-weather mt-5">
                <h2 className="location pt-5">{data.location.name}</h2>
                <p className="temperature pt-2">{data.current.temp_c}°C</p>
                <p className="description">{data.current.condition.text}</p>
              </div>

              <div className="future-weather mt-5">
                <h3>Next 3 Days Forecast:</h3>
                <div className="row mt-5">
                  <div className="col future-info">
                    <p><strong>{forecast.forecast.forecastday[0].date}</strong></p>
                    <p>{forecast.forecast.forecastday[0].day.avgtemp_c}°C</p>
                    <p>{forecast.forecast.forecastday[0].day.condition.text}</p>
                  </div>
                  <div className="col future-info">
                  <p><strong>{forecast.forecast.forecastday[1].date}</strong></p>
                    <p>{forecast.forecast.forecastday[1].day.avgtemp_c}°C</p>
                    <p>{forecast.forecast.forecastday[1].day.condition.text}</p>
                  </div>
                  <div className="col future-info">
                  <p><strong>{forecast.forecast.forecastday[2].date}</strong></p>
                    <p>{forecast.forecast.forecastday[2].day.avgtemp_c}°C</p>
                    <p>{forecast.forecast.forecastday[2].day.condition.text}</p>
                  </div>
                </div>
              </div>
            </div>)}

          </div>
          <div className="col-lg-4">
            <div className="search-bar text-center">
              <input type="text" class="form-control form-control-lg mt-4" placeholder="Enter Location..." value={location} onChange={handleInputChange}></input>
              <button className="btn btn-primary btn-lg mt-3" onClick={handleSearch}>Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
