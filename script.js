function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = "5ca5e3d8f72fd94cc1fbc5429ad49ce8"; // ✅ Correct API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error("City not found or API error");
        }
        return response.json();
      })
      .then(data => {
        const result = `
          <h2>${data.name}, ${data.sys.country}</h2>
          <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
          <p><strong>Weather:</strong> ${data.weather[0].main}</p>
          <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
          <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
        `;
        document.getElementById("weatherResult").innerHTML = result;
      })
      .catch(error => {
        document.getElementById("weatherResult").innerHTML = `<p style="color:red;">${error.message}</p>`;
      });
  }
  