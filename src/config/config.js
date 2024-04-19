/**
 * NOTE: This api key MY_OPEN_WEATHER_MAP_API_KEY will not work, as it will be removed upon the completion of this app.
 * You can create your api key here: https://home.openweathermap.org/api_keys which might not work for the first couple of hours until it gets activated to be ready for use.
 */
const MY_OPEN_WEATHER_MAP_API_KEY = "a5bb4718b30b6f58f58697997567fffa";

const config = {
  WEATHER_API_ENDPOINT: `https://api.openweathermap.org/data/2.5/weather?appid=${MY_OPEN_WEATHER_MAP_API_KEY}&`,
  WEATHER_DATA_ENDPOINT: `https://api.openweathermap.org/data/2.5/onecall?appid=${MY_OPEN_WEATHER_MAP_API_KEY}&exclude=minutely&units=metric&`,
};

export default config;
