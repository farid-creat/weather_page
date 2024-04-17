import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="search-bar">
              <input type="text" class="form-control form-control-lg mt-4" placeholder="Enter Location..."></input>
              <button class="btn btn-primary btn-lg mt-3">Search</button>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="weather-info text-center p-4">
              <h1>Weather Prediction 🌦️</h1>

              <div class="current-weather mt-4">
                <h2 class="location">New York, NY</h2>
                <p class="temperature">25°C</p>
                <p class="description">Partly Cloudy</p>
              </div>

              <div class="future-weather mt-4">
                <h3>Next 3 Days Forecast:</h3>
                <div class="row mt-3">
                  <div class="col">
                    <p><strong>Monday:</strong> 23°C, Sunny</p>
                  </div>
                  <div class="col">
                    <p><strong>Tuesday:</strong> 22°C, Rainy</p>
                  </div>
                  <div class="col">
                    <p><strong>Wednesday:</strong> 21°C, Cloudy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
