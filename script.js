const fetchData = async (city) => {
    try {
      const response = await fetch(`https://weather-we.netlify.app/.netlify/functions/weather-api?city=${city}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log("Error fetching data:", error);
      return null;
    }
  };
  // Update the getData function
  const getData = async (event) => {
    event.preventDefault();
  
    if (!inputBox.value) {
      alert("Please enter the city name");
      return;
    }
  
    const city = inputBox.value;
    const data = await fetchData(city);
  
    if (data) {
      // Display the data in HTML
      countryName.textContent = data.location.country;
      stateName.textContent = data.location.region;
      cityName.textContent = data.location.name;
      logoImage.src = data.current.condition.icon;
      weatherStatus.textContent = data.current.condition.text;
      humidity.textContent = `${data.current.humidity}%`;
      windSpeed.textContent = `${data.current.wind_kph} KMPH`;
      temperature.textContent = `${data.current.temp_c} \u2103`; // Display temperature in Celsius
    }
  };
  