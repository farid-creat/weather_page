import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="app">

      <div class="mycontainer">
        <div class="row weather-info">

          <div class="col-lg-8">
            <div class="text-center p-4">
              <h1>Weather Prediction</h1>

              <div class="current-weather mt-5">
                <h2 class="location pt-5">New York, NY</h2>
                <p class="temperature pt-2">25°C</p>
                <p class="description">Partly Cloudy</p>
              </div>

              <div class="future-weather mt-5">
                <h3>Next 3 Days Forecast:</h3>
                <div class="row mt-5">
                  <div class="col future-info">
                    <p><strong>Monday</strong></p>
                    <p>23°C</p>
                    <p>Sunny</p>
                  </div>
                  <div class="col future-info">
                    <p><strong>Monday</strong></p>
                    <p>23°C</p>
                    <p>Sunny</p>
                  </div>
                  <div class="col future-info">
                    <p><strong>Monday</strong></p>
                    <p>23°C</p>
                    <p>Sunny</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="search-bar text-center">
              <input type="text" class="form-control form-control-lg mt-4" placeholder="Enter Location..."></input>
              <button class="btn btn-primary btn-lg mt-3">Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
