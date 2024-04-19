/**
 * @description
 * You can create your api key here: https://home.openweathermap.org/api_keys and paste it into .env but it might not work for the first couple of hours until it gets activated to be ready for use.
 */
const OPEN_WEATHER_MAP_API_KEY = process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY;

const config = {
  WEATHER_API_ENDPOINT: `https://api.openweathermap.org/data/2.5/weather?appid=${OPEN_WEATHER_MAP_API_KEY}&`,
  WEATHER_DATA_ENDPOINT: `https://api.openweathermap.org/data/2.5/onecall?appid=${OPEN_WEATHER_MAP_API_KEY}&exclude=minutely&units=metric&`,
};

export default config;
