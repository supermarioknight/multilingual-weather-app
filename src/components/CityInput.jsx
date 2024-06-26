import { useContext, useRef } from "react";
import AppContext from "../provider/appContext";
import { getCityName } from "../services/weatherService";
import geoCoords from "../utils/geoCoords";
import { useIntl } from "react-intl";

function CityInput() {
  const intl = useIntl();
  const input = useRef();
  const {
    app: { isDark },
    dispatchApp,
  } = useContext(AppContext);
  let time;
  return (
    <div className="input-group">
      <span
        data-testid="location-icon"
        onClick={async () => {
          const coords = await geoCoords();
          dispatchApp({
            type: "GEO_COORDS",
            payload: { lon: coords.longitude, lat: coords.latitude },
          });
          try {
            const { country, name } = await getCityName(
              coords.longitude,
              coords.latitude
            );
            dispatchApp({ type: "COUNTRY", payload: country });
            dispatchApp({ type: "CITY", payload: name });
            input.current.value = "";
          } catch (e) {
            console.log("Error with retrieving city and country", e);
          }
        }}
        style={isDark ? { background: "#37435a" } : null}
      >
        <i
          className="fa-solid fa-location-crosshairs location-icon"
          style={isDark ? { color: "#FFFFFF" } : null}
        ></i>
      </span>
      <i className="fa-solid fa-magnifying-glass search-icon"></i>
      <input
        type="text"
        ref={input}
        style={isDark ? { background: "#232b39", color: "#fff" } : null}
        placeholder={intl.formatMessage({
          id: "app.input.city_search_placeholder",
          defaultMessage: "Search for a city ...",
        })}
        onInput={(e) => {
          const value = e.target.value;
          clearTimeout(time);
          time = setTimeout(() => {
            dispatchApp({ type: "CITY", payload: value });
          }, 500);
        }}
      />
    </div>
  );
}

export default CityInput;
