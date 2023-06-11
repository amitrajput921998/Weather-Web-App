let data;

const inputBox = document.getElementById("inputBox");
const countryName = document.getElementById("countryName");
const stateName = document.getElementById("stateName");
const cityName = document.getElementById("cityName");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const temperature = document.getElementById("temperature");
const logoImage = document.getElementById("logoImage");
const weatherStatus = document.getElementById("weatherStatus");

const getData = async (event) => {
  event.preventDefault();

  if (!inputBox.value) {
    alert("Please enter the city name");
    return;
  }

  const city = inputBox.value;

  try {
    const fetchData = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=4b18607079bf4362ad953441231802&q=${city}`
    );
    const orgData = await fetchData.json();

    data = orgData;
    console.log(data);

    // Display the data in HTML
    countryName.textContent = data.location.country;
    stateName.textContent = data.location.region;
    cityName.textContent = data.location.name;
    logoImage.src = data.current.condition.icon;
    weatherStatus.textContent = data.current.condition.text;
    humidity.textContent = `${data.current.humidity}%`;
    windSpeed.textContent = `${data.current.wind_kph} KMPH`;
    temperature.textContent = `${data.current.temp_c} \u2103`; // Display temperature in Celsius
  } catch (error) {
    console.log("Error fetching data:", error);
  }
};

