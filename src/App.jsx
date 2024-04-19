import { useState, useEffect, useReducer } from "react";
import { IntlProvider } from "react-intl";
import CityInput from "./components/CityInput";
import Weather from "./components/Weather";
import AppContext, { appReducer, initialAppState } from "./provider/appContext";
import "./App.css";
import geoCoords from "./utils/geoCoords";
import getWeather, {
  getCityCoords,
  getCityName,
} from "./services/weatherService";
import Forecast from "./components/Forecast";
import Highlights from "./components/Highlights";
import Hourly from "./components/Hourly";
import Header from "./components/Header";
import Footer from "./components/Footer";
import lang_en from "./lang/en.json";
import lang_sw from "./lang/sw.json";

function App() {
  const [app, dispatchApp] = useReducer(appReducer, initialAppState);
  const [messages, setMessages] = useState(lang_en);

  useEffect(() => {
    if (app.lang === "en") {
      setMessages(lang_en);
    } else {
      setMessages(lang_sw);
    }
  }, [app.lang]);

  useEffect(() => {
    const date = new Date();
    const hour = date.getHours();
    if (hour > 18 || hour < 7) {
      dispatchApp({ type: "DARK", payload: true });
    }
  }, []);
  useEffect(() => {
    (async () => {
      const { longitude: lon, latitude: lat } = await geoCoords();
      if (lon && lat) {
        try {
          const { name, country } = await getCityName(lon, lat);
          dispatchApp({ type: "GEO_COORDS", payload: { lon, lat } });
          dispatchApp({ type: "CITY", payload: name });
          dispatchApp({ type: "COUNTRY", payload: country });
        } catch (e) {
          console.log("Error with retrieving city and country:", e);
        }
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const { lon, lat, country } = await getCityCoords(app.city);
        dispatchApp({ type: "GEO_COORDS", payload: { lon, lat } });
        dispatchApp({ type: "COUNTRY", payload: country });
      } catch (e) {
        console.log("Error with retrieving city coords:", e);
      }
    })();
  }, [app.city]);

  useEffect(() => {
    (async () => {
      let data;
      try {
        data = await getWeather(app.geoCoords.lon, app.geoCoords.lat);
      } catch (e) {
        console.log("Error with retrieving weather data", e);
      }
      dispatchApp({ type: "WEATHER", payload: data });
      const formatter = Intl.DateTimeFormat([], {
        hour12: false,
        hour: "numeric",
        timeZone: data.timezone,
      });
      const localTime = parseInt(
        formatter
          .format(new Date(data.current.dt * 1000))
          .replace(/[A-Za-z]/gi, "")
      );
      const sunset = parseInt(
        formatter
          .format(new Date(data.current.sunset * 1000))
          .replace(/[A-Za-z]/gi, "")
      );
      const sunrise = parseInt(
        formatter
          .format(new Date(data.current.sunrise * 1000))
          .replace(/[A-Za-z]/gi, "")
      );
      if (localTime > sunset || localTime < sunrise) {
        dispatchApp({ type: "DARK", payload: true });
      } else {
        dispatchApp({ type: "DARK", payload: false });
      }
    })();
  }, [app.geoCoords.lat, app.geoCoords.lon]);

  useEffect(() => {
    if (app.isDark) {
      document
        .querySelector(":root")
        .style.setProperty("--placeholder-color", "#8f94af");
    } else {
      document
        .querySelector(":root")
        .style.setProperty("--placeholder-color", "#323232");
    }
  }, [app.isDark]);

  const colLeftStyle = {
    background: "#19202d",
    color: "#fff",
  };
  const colRightStyle = {
    background: "#232b39",
    color: "#fff",
  };
  return (
    <AppContext.Provider value={{ app, dispatchApp }}>
      <IntlProvider locale={app.lang} messages={messages}>
        <section className="container">
          <div className="col-left" style={app.isDark ? colLeftStyle : null}>
            <CityInput />
            <Weather />
          </div>
          <div className="col-right" style={app.isDark ? colRightStyle : null}>
            <Header />
            <Hourly />
            <Highlights />
            <Forecast />
            <Footer />
          </div>
        </section>
      </IntlProvider>
    </AppContext.Provider>
  );
}

export default App;
