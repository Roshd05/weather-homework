function updateWeather(response) {
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#city");

    cityElement.innerHTML = response.data.city;
    temperature.innerHTML= Math.round(temperature);
}

function searchCity(city) (
    let apiKey="840df5b063f365oba39tb282d8c1d0cc";
    let apiUrl=`https://api.shecodes.io/weather/v1/current?query=$[city}&key={apiKey}&units=metric`;
    axios.get(apiUrl).then(updateWeather);
    )


function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
 
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
