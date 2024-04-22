# **Weather App**
This is a React SPA displays the temperature and weather conditions in detail which fed by OpenWeatherMap API.
You can check it out on [Live Demo](https://multilingual-weather-app.netlify.app/)
## Features
- Display the weather data of Nairobi, KE on the initial loading.
- Search for a city to display the weather data of the city chosen.
- Switch between the scales of Celsius and Fahrenheit.
- Multilingual support with English and Swahili.

## Tech Stacks
- [React 18.2](https://legacy.reactjs.org/docs/getting-started.html) with Context
- One Call API 2.5 in [OpenWeatherMap API](https://openweathermap.org/api/one-call-api)
- [React-intl](https://formatjs.github.io/docs/react-intl/) for i18n

## Prerequisites 
- Node >= 14.0.0 
- npm >= 5.6
## Get the app up and running
1. Install npm packages
    ```
    $ npm install
    ```
2. Get your OpenWeatherMap API key
    - Duplicate example.env file and rename it to `.env`
    - Create an account on [OpenWeatherMap](https://home.openweathermap.org/)
    - Grab the pre-created key on [API Keys](https://home.openweathermap.org/api_keys) page
    - Paste it into `REACT_APP_OPEN_WEATHER_MAP_API_KEY` variable in the newly created `.env` file.
3. Run the project
    ```
    $ npm start
    ```
4. Run test
    ```
    $ npm test
    ```
5. If the app runs into any issues, please let me know. (Note: You will most likely get a 401 error with API call with your own API key for about a couple of hours until it gets activated on the OpenWeatherMap platform.)

## **Enjoy the app 🚀**
