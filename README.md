# **Weather App**
This is a React SPA displays the temperature and weather conditions in detail which fed by OpenWeatherMap API.
## Features
- On the initial load, it show the weather data of Nairobi, KE and you will be prompted to allow/deny location access.
- You can search for a city to see the weather data of any location of your choice.
- You can switch between the scales of Celsius and Fahrenheit.

## Tech Stacks
- [React 18.2](https://legacy.reactjs.org/docs/getting-started.html) with Context
- One Call API 2.5 in [OpenWeatherMap API](https://openweathermap.org/api/one-call-api)

## Prerequisites 
- Node >= 14.0.0 
- npm >= 5.6
## Get the app up and running
1. Install npm packages
    ```
    $ npm install
    ```
2. Get your OpenWeatherMap API key
    - Create an account on [OpenWeatherMap](https://home.openweathermap.org/)
    - Grab the pre-created key on [API Keys](https://home.openweathermap.org/api_keys) page
    - Replace `MY_OPEN_WEATHER_MAP_API_KEY` in `src/config/config.js` with yours
3. Run the project
    ```
    $ npm start
    ```
4. If the app runs into any issues, please let me know. (Note: You will most likely get a 401 error with API call with your own API key for about a couple of hours until it gets activated on the OpenWeatherMap platform.)

## **Enjoy the app 🚀**
