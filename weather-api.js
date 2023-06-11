const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  const { city } = event.queryStringParameters;
  const apiKey = 'YOUR_WEATHER_API_KEY';
  const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${aec03013669e4e15bb563220231106}&q=${city}&aqi=no`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal server error' }),
      headers: {
        'Content-Type': 'application/json',
      },
    };
  }
};
