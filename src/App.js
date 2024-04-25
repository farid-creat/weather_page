import logo from './logo.svg';
import './App.css';
import { useState ,useEffect} from 'react';
import axios from 'axios';
function App() {
  const [location , setlocation] = useState("london")
  const [temperature,settemperature] = useState()
  const [description ,setvdescription] = useState("")
  const [data ,setData] = useState()
  const url = `http://api.weatherapi.com/v1/current.json?key=7d9efb1a9b4d4a7cb51103832242404&q=${location}&aqi=no`

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data); // Update the state with fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  if (!data) {
    return <div>Loading...</div>;
  }

  const handleInputChange = (event) => {
    setlocation(event.target.value);
  };



  const handleSearch = () =>{
    console.log("tessssssssssssssssssssssssss")
    axios.get(url).then( res =>{
      setData(res.data)
      console.log(data)
    })
  }





  return (

    <div className="app">

      <div className="mycontainer">
        <div className="row weather-info">

          <div className="col-lg-8">
            <div className="text-center p-4">
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
                    <p><strong>Monday</strong></p>
                    <p>23°C</p>
                    <p>Sunny</p>
                  </div>
                  <div className="col future-info">
                    <p><strong>Monday</strong></p>
                    <p>23°C</p>
                    <p>Sunny</p>
                  </div>
                  <div className="col future-info">
                    <p><strong>Monday</strong></p>
                    <p>23°C</p>
                    <p>Sunny</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="search-bar text-center">
              <input type="text" class="form-control form-control-lg mt-4" placeholder="Enter Location..."value={location} onChange={handleInputChange}></input>
              <button className="btn btn-primary btn-lg mt-3" onClick={handleSearch}>Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
